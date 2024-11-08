import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { loddingStart, signinSuccess, signinFailed } from '../redux/user/userSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SingIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { loading } = useSelector((state) => state.user)




    const onSubmit = async (formData) => {
        dispatch(loddingStart());
    
        try {
            const res = await fetch('https://immob-back.onrender.com/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            // Vérifier le statut de la réponse
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Erreur lors de l'authentification.");
            }
    
            const userData = await res.json();
            console.log(userData);
    
            // Vérifiez le champ "success" et le rôle de l'utilisateur
            if (userData.success === false) {
                dispatch(signinFailed(userData.message));
                toast.error(userData.message, { autoClose: 2000 });
            } else if (userData.role === "admin") {
                dispatch(signinSuccess(userData));
                navigate('/profile');
            } else {
                alert("Vous n'êtes pas autorisé.");
                window.location.reload();
            }
        } catch (error) {
            // Utiliser error.message au lieu de userData.message ici
            dispatch(signinFailed(error.message));
            console.error("Erreur:", error.message);  // Affiche l’erreur en console pour le debugging

            toast.error(error.message, { autoClose: 2000 });
        }
    };
    





    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <input {...register("email", { required: true })} type="email" placeholder="Email" className="form_input mt-5" autoComplete="email" />
                {errors.email && <span className='text-red-700 font-semibold text-sm mb-2 mt-1'>Ce champ est obligatoire.</span>}


                <input {...register("userPassword", { required: true })} type="password" placeholder="Password" className="form_input mt-5" autoComplete="current-password" />
                {errors.password && <span className='text-red-700 font-semibold text-sm mb-2 mt-1'>Ce champ est obligatoire.</span>}


                <button
                    type='submit'
                    disabled={loading}
                    className="btn bg-[#3A5A40] text-white mt-5 rounded-md w-full hover:bg-[#3A5A40]/[.90]">
                    {
                        loading ? 'Loading...' : 'Login'
                    }
                </button>
            </form>
            <ToastContainer limit={0} />
        </>
    )
}

export default SingIn