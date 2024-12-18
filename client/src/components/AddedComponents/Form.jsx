import { useState } from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from "react-i18next";

export default function Form() {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        project: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            project: formData.project,
            message: formData.message,
        };

        emailjs.send('service_0f8yimr', 'template_l966uqc', templateParams, 'to5gUXaCWZrbtuiXb')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message. Please try again later.');
            });
    };

    return (
        <div>
            <div
                className="grid md:grid-cols-2 gap-6 items-center relative overflow-hidden p-8 shadow-lg rounded-3xl max-w-6xl mx-auto bg-white mt-4 font-[sans-serif]"
            >
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4 mt-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="mb-2 text-base block">{t("form.nameLabel")}</label>
                                    <input
                                        type='text'
                                        name='name'
                                        placeholder={t("form.nameLabel")}
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="px-4 py-2.5 text-base rounded-md bg-white border border-gray-400 w-full outline-[#0B4F48]"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 text-base block">{t("form.emailLabel")}</label>
                                    <input
                                        type='email'
                                        name='email'
                                        placeholder={t("form.emailLabel")}
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="px-4 py-2.5 text-base rounded-md bg-white border border-gray-400 w-full outline-[#0B4F48]"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="mb-2 text-base block">{t("form.phoneLabel")}</label>
                                    <input
                                        type='text'
                                        name='phone'
                                        placeholder={t("form.phoneLabel")}
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="px-4 py-2.5 text-base rounded-md bg-white border border-gray-400 w-full outline-[#0B4F48]"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 text-base block">{t("form.projectLabel")}</label>
                                    <input
                                        type='text'
                                        name='project'
                                        placeholder={t("form.projectLabel")}
                                        value={formData.project}
                                        onChange={handleChange}
                                        className="px-4 py-2.5 text-base rounded-md bg-white border border-gray-400 w-full outline-[#0B4F48]"
                                    />
                                </div>
                            </div>
                            <textarea
                                rows={4}
                                name='message'
                                placeholder={t("form.messagePlaceholder")}
                                value={formData.message}
                                onChange={handleChange}
                                className="px-4 py-2.5 rounded-md bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#0B4F48] outline-none"
                            ></textarea>
                        </div>
                        <button type="submit"
                            className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 hover:bg-[#0B3F48] text-black"
                            style={{
                                background: "linear-gradient(40deg, rgba(25,222,100,1) 0%, rgba(25,222,91,0.5466561624649859) 50%, rgba(25,222,100,1) 100%)"
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#000000' className="mr-2"
                                viewBox="0 0 548.244 548.244">
                                <path fillRule="evenodd"
                                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                                    clipRule="evenodd" data-original="#000000" />
                            </svg>
                            {t("form.submitButton")}
                        </button>
                    </form>
                </div>
                <div className="z-10 relative h-full max-md:min-h-[350px]">
                    <iframe
                        src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=RJ8V+VMX,%20Av.%20Hedi%20Nouira,%20Sousse+(COGEB)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
