import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import  { useEffect, useState } from 'react'
import { firebaseApp } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../components/Loading';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const UpdateProject = () => {
    const [content, setContent] = useState('');
    const [specificity, setSpecificity] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const { currentUser } = useSelector(state => state.user)

    const [imageFile, setImageFile] = useState([]);
    const [uploadError, setUploadError] = useState({
        isError: false,
        message: ''
    });
    const [formSubmitLoading, setFormSubmitLoading] = useState(false)
    const [isOffer, setIsoffer] = useState(false);
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        imgUrl: [],
    })

    const [dataLoading, setDataLoading] = useState(false);


    const navigate = useNavigate()
    const params = useParams()


    const { register, handleSubmit, getValues, setValue, formState: { errors } } = useForm({
        mode: "onChange"
    });

    useEffect(() => {

        document.getElementById("admin").hidden=true;
        if(currentUser.role==="admin"){
            document.getElementById("admin").hidden=false;
        }

        const getProjectInfo = async () => {

            setDataLoading(true)
            const res = await fetch(`https://us-central1-cogeb-immobiliere.cloudfunctions.net/api/api/projects/${params.id}`)
            const data = await res.json();

            if (data.success === false) {
                toast.error(data.message, {
                    autoClose: 2000,
                })
                setDataLoading(false)
            }
            else {
                setFeildValue(data)
                setFormData({ ...formData, imgUrl: data.imgUrl });
                data.offer && setIsoffer(true);
                setDataLoading(false)
            }

        }
        getProjectInfo()
    }, [])



    const setFeildValue = (data) => {
        setValue('title', data.title);
        setContent(data.description) ;
        setSpecificity(data.specificity); 

        setValue('address', data.address);
        setValue('area', data.area && data.area);
        setValue('furnished', data.furnished);
        setValue('parking', data.parking);
        setValue('etat', data.etat)
        setValue('offer', data.offer)
        setValue('bureau',data.bureau);
       
    }



    const handleImageUpload = async () => {

        if (imageFile.length > 0 && imageFile.length + formData.imgUrl.length < 13) {
            setLoading(true)
            const promises = [];
            for (let i = 0; i < imageFile.length; i++) {
                promises.push(uploadToFirebase(imageFile[i]))
                Promise.all(promises).then((urls) => {
                    setFormData({ ...formData, imgUrl: formData.imgUrl.concat(urls) })
                    setLoading(false)
                }).catch((error) => {
                    setUploadError({ ...uploadError, isError: true, message: error })
                    setLoading(false)
                })
            }
        }
        else {
            setUploadError({ ...uploadError, isError: true, message: 'Select file first (max:6)' })
            setLoading(false)
        }

    }

    const uploadToFirebase = (file) => {
        return new Promise((resolve, reject) => {
            const storage = getStorage(firebaseApp);
            const fileName = new Date().getTime() + file.name;
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                },
                (error) => {
                    reject('File uploaded Falied')

                },

                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        resolve(downloadURL)
                    });
                }
            )
        })
    }

    const handleDelete = (index) => {
        setFormData({ ...formData, imgUrl: formData.imgUrl.filter((items) => items != formData.imgUrl[index]) })
    }

    uploadError.isError && toast.error(uploadError.message, {
        autoClose: 2000,
    })


    const handleFormSubmit = async (data) => {
        try {
            setFormSubmitLoading(true)
            const res = await fetch(`https://us-central1-cogeb-immobiliere.cloudfunctions.net/api/api/projects/${params.id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    ...data,
                    description:content,
                    specificity: specificity, 

                    imgUrl: formData.imgUrl,
                    userRef: currentUser._id
                })
            })
            const serverRes = await res.json();
            if (serverRes.success === false) {
                toast.error(serverRes.message, {
                    autoClose: 2000,
                })
                setFormSubmitLoading(false)
            }
            else {
                navigate(`/projects/${serverRes._id}`)
                setFormSubmitLoading(false)
            }

        } catch (error) {
            toast.error(error.message, {
                autoClose: 2000,
            })
            setFormSubmitLoading(false)
        }
    }
    const modules = {
        toolbar: [
          [{ 'font': [] }, { 'size': [] }],
          ['bold', 'italic', 'underline', 'strike'],       
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'align': [] }],
          ['link', 'image'],
        ],
      };

      const formats = [
        'font', 'size', 'bold', 'italic', 'underline', 'strike',
        'list', 'bullet', 'align', 'link', 'image'
      ];




    return (
        <main>
            {
                dataLoading
                    ?
                    <div>
<div className="w-full h-32  rounded-lg"></div>
                        <Loading />
                        <p className='font-heading text-[#3A5A40] text-lg sm:text-2xl text-center'>Loading...</p>
                    </div>
                    :
                    <section id='admin'>
                              <div className="w-full h-32 "></div>

                        <div className="container py-7 md:py-16 max-w-5xl">
                            <h1 className='text-center text-2xl font-heading font-bold text-black'>Mise à jour Projet</h1>
                            <div className="mt-8 form_container">
                                <form onSubmit={handleSubmit(handleFormSubmit)}>
                                    <div className='feilds_container grid gap-5 md:gap-10  grid-col-1 md:grid-cols-2 items-start  '>



                                        <div className="info_container">
                                            <div className="input_feilds">

                                                <input
                                                    id='title'
                                                    type="text"
                                                    placeholder='Property name' name='title' className='form_input border-[1px]  focus:border-[#3A5A40] rounded-md placeholder:text-sm '
                                                    min={10}
                                                    max={50}
                                                    {...register('title', { required: 'This feild is required*' })}
                                                />
                                                {errors.title && <p className='text-red-700 text-xs'>{errors.title.message}</p>}

                                                <ReactQuill id='description'
                                            type="text"
                                            placeholder='Description'
                                            value={content}
                                            className='form_input border-[1px]  focus:border-[#3A5A40] rounded-md placeholder:text-sm mt-3'
                                            onChange={(setContent)}
                                            modules={modules}
                                            formats={formats} 

                                             />
                                                {errors.description && <p className='text-red-700 text-xs'>{errors.description.message}</p>}

                                                <input
                                                    id='address'
                                                    type="text"
                                                    placeholder='Address'
                                                    name='address'
                                                    className='form_input border-[1px]  focus:border-[#3A5A40] rounded-md placeholder:text-sm mt-3'
                                                    {...register('address', { required: 'This feild is required*' })}
                                                />
                                                {errors.address && <p className='text-red-700 text-xs font-semibold'>{errors.address.message}</p>}
                                            </div>


                                            <div className="additional_info mt-6 max-w-xs">

                                            <div className="property_type">
                                            <p className='font-heading text-black'>Selectionner l'etat </p>
                                            
                                            <div className="form-control ">
                                            <label className="label cursor-pointer flex items-center justify-start gap-2
                                            ">
                                                    <input
                                                        type="radio"
                                                        name="rent"
                                                        id='rent'
                                                        value={'future'}
                                                        required
                                                        className="radio w-5 h-5 checked:bg-[#3A5A40]"
                                                        {...register('etat')}
                                                    />
                                                    <span className="label-text font-medium">Future</span>
                                                </label>
                                                <label className="label cursor-pointer flex items-center justify-start gap-2
                                            ">
                                                    <input
                                                        type="radio"
                                                        name="rent"
                                                        id='rent'
                                                        value={'en cours'}
                                                        required
                                                        className="radio w-5 h-5 checked:bg-[#3A5A40]"
                                                        {...register('etat')}
                                                    />
                                                    <span className="label-text font-medium">en cours</span>
                                                </label>
                                                <label className="label cursor-pointer flex items-center justify-start gap-2
                                            ">
                                                    <input
                                                        type="radio"
                                                        name="rent"
                                                        id='rent'
                                                        value={'terminee'}
                                                        required
                                                        className="radio w-5 h-5 checked:bg-[#3A5A40]"
                                                        {...register('etat')}
                                                    />
                                                    <span className="label-text font-medium">termine</span>
                                                </label>
                                            </div>
                                        </div>


                                                <div className="property_info mt-3">
                                                    <p className='font-heading text-black'>Genarel Information</p>
                                                    <div className="max-w-[200px] flex items-center justify-between gap-2 mt-2">
                                                        <span className='label-text font-medium'>Appartements </span>
                                                        <div>
                                                            <input
                                                                defaultValue={550}
                                                                className='border-2 focus:border-[#3A5A40] rounded-md max-w-[84px] min-w-[84px] py-1 px-2 bg-transparent'
                                                                type="number"
                                                                name="area"
                                                                id="area"
                                                                {...register('area', { required: 'required' })}
                                                            />
                                                            {errors.area && <p className='text-red-700 text-xs font-semibold'>{errors.area.message}</p>}
                                                        </div>
                                                    </div>
                                                </div>



                                                <div className="additional_feature mt-3">
                                                    <p className='font-heading text-black'>Additional Information</p>
                                                    <div className="form-control">
                                                        <label className="label cursor-pointer flex items-center justify-start gap-2">
                                                            <input
                                                                id='parking'
                                                                type="checkbox"
                                                                name='parking'
                                                                className="checkbox w-5 h-5 border-gray-400 rounded-full checked:bg-[#3A5A40]"
                                                                {...register('parking')}
                                                            />

                                                            <span className="label-text font-medium" >Parking</span>
                                                        </label>
                                                        <label className="label cursor-pointer flex items-center justify-start gap-2">
                                                            <input
                                                                id='furnished'
                                                                type="checkbox"
                                                                className="checkbox w-5 h-5 border-gray-400 rounded-full checked:bg-[#3A5A40]"
                                                                {...register('furnished')}
                                                            />
                                                            <span className="label-text font-medium" >Espace Comercial</span>
                                                        </label>
                                                        <label className="label cursor-pointer flex items-center justify-start gap-2">
                                                            <input
                                                                id='bureau'
                                                                type="checkbox"
                                                                className="checkbox w-5 h-5 border-gray-400 rounded-full checked:bg-[#3A5A40]"
                                                                {...register('bureau')}
                                                            />
                                                            <span className="label-text font-medium" >Bureau</span>
                                                        </label>
                                                    </div>
                                                </div>


                                                

                                            </div>
                                        </div>

                                        <ReactQuill 
    id='specificity'
    value={specificity}
    onChange={setSpecificity}
    className='form_input border-[1px]  focus:border-[#3A5A40] rounded-md placeholder:text-sm mt-3'
    placeholder='Specificité'
    modules={modules}
    formats={formats}
/>


                                        {/*  Image Uploading Section Start Here */}
                                        <div>
                                            <p className='font-content text-[16px] mb-3 font-normal text-black'>
                                                <span className='font-semibold mr-1'>Note:</span>
                                                First image will be cover image (max:9)
                                            </p>
                                            <div className="image_upload_container md:p-5 md:border-2 bg-transparent border-dashed rounded-sm md:flex items-center justify-center gap-2">

                                                <input
                                                    onChange={(e) => setImageFile(e.target.files)}
                                                    required={formData.imgUrl < 1}
                                                    multiple  accept="video/mp4, image/*" type="file"
                                                    className={`file-input file:bg-[#3A5A40] bg-red-00 ${loading ? "md:w-4/6" : 'md:w-4/5'} w-full`} />
                                                <button
                                                    disabled={loading}
                                                    onClick={handleImageUpload}
                                                    type='button' className={`w-full text-green-600 text-sm py-2 border-2 border-green-600 rounded-md mt-2 uppercase font-heading  ${loading ? "md:w-2/6" : 'md:w-1/5'} md:h-[3rem] md:mt-0 duration-500 hover:shadow-lg disabled:border-yellow-500 disabled:text-yellow-500`}>
                                                    {
                                                        loading ? 'Uploading...' : 'Upload'
                                                    }
                                                </button>
                                            </div>
                                            <div>
                                                {
                                                    formData.imgUrl && formData.imgUrl.length > 0 && formData.imgUrl.map((imgSrc, index) => {
                                                        return (
                                                            <div key={index} className="uploaded_images p-2 pr-5 border-2 mt-4  rounded-md flex items-center justify-between">
                                                                <img src={imgSrc} alt="property Image" className='w-24 h-20 object-cover rounded-md' />
                                                                <button
                                                                    onClick={() => handleDelete(index)}
                                                                    type='button'
                                                                    className='font-medium text-lg text-red-700 flex items-center underline hover:opacity-75'>Delete</button>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                <div className="post_btn mt-7">
                                                    <button
                                                        disabled={formData.imgUrl.length < 1 || loading || formSubmitLoading}
                                                        type='submit'
                                                        className="w-full bg-[#3A5A40] text-xl tracking-wider font-heading rounded-md hover:opacity-90 disabled:opacity-70 duration-300 text-white p-3">
                                                        {
                                                            formSubmitLoading ? 'Updating...' : 'Update Project'
                                                        }
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <ToastContainer />
                    </section>
            }
        </main>
    )
}

export default UpdateProject