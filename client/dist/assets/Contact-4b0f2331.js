import{r as e,a6 as a,j as s,aa as t}from"./vendor-ea00a4ff.js";import{l,e as r,w as o}from"./webe1-06e2d381.js";import{F as d}from"./index-b1f8d56a.js";import{N as i}from"./Newsetter-ca987629.js";function n(){return e.useEffect((()=>{a.init({duration:1e3,easing:"ease-in-out",once:!0})}),[]),s.jsxs("div",{children:[s.jsxs("div",{className:"relative h-[80vh] font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-[#0B4F48] before:opacity-20 before:z-10",children:[s.jsx("img",{src:"/assets/LCC-5e47e406.jpg",alt:"contact cover",loading:"lazy",className:"absolute inset-0 w-full h-full object-cover"}),s.jsx("div",{className:"min-h-[350px] relative z-20 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-black p-6","data-aos":"fade-down"})]}),s.jsxs("div",{className:"grid -mt-20 mb-14  mx-auto max-w-[70vw] sm:max-w-[80vw] lg:grid-cols-3 gap-4 z-20 relative lg:left-16 max-lg:px-4",children:[s.jsxs("div",{className:"flex lg:w-[18vw] flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-gradient-to-t from-gray-100 via-gray-50 to-gray-200 shadow-[0_6px_10px_-3px_rgba(0,0,0,0.3)]","data-aos":"fade-up","data-aos-delay":"200",children:[s.jsx("div",{className:"bg-[#ffffff] rounded-full p-2",children:s.jsx("img",{src:l,className:"w-8 h-8 m-auto",alt:"location"})}),s.jsx("h4",{className:"text-black text-base font-bold mt-4",children:"Visitez le bureau"}),s.jsx("p",{className:"text-sm text-black-600 mt-2",children:" Route de l'environnement 4000, Sousse,Tunisia"})]}),s.jsxs("div",{className:"flex lg:w-[18vw] flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-gradient-to-t from-gray-100 via-gray-50 to-gray-200 shadow-[0_6px_10px_-3px_rgba(0,0,0,0.3)]","data-aos":"fade-up","data-aos-delay":"400",children:[s.jsx("div",{className:"bg-[#ffffff] rounded-full p-2",children:s.jsx("img",{src:r,className:"w-8 h-8 m-auto",alt:"email"})}),s.jsx("h4",{className:"text-gray-800 text-base font-bold mt-4",children:"E-MAIL"}),s.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"contact@cogeb-immobiliere.com"})]}),s.jsxs("div",{className:"flex lg:w-[18vw] flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-gradient-to-t from-gray-100 via-gray-50 to-gray-200 shadow-[0_6px_10px_-3px_rgba(0,0,0,0.3)]","data-aos":"fade-up","data-aos-delay":"600",children:[s.jsx("div",{className:"bg-[#ffffff] rounded-full p-2",children:s.jsx("img",{src:o,className:"w-8 h-8 m-auto",alt:"web"})}),s.jsx("h4",{className:"text-gray-800 text-base font-bold mt-4",children:"Discutez avec nous"}),s.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"www.Cogeb-immobiliere.com"})]})]})]})}function c(){const[l,r]=e.useState({name:"",email:"",phone:"",project:"",message:""});e.useEffect((()=>{a.init({duration:1200})}),[]);const o=e=>{const{name:a,value:s}=e.target;r({...l,[a]:s})};return s.jsx("div",{children:s.jsxs("div",{className:"grid md:grid-cols-2 gap-6 items-center relative overflow-hidden p-8 shadow-lg rounded-3xl max-w-6xl mx-auto bg-white mt-4 font-[sans-serif] before:absolute before:right-0 before:w-[300px] before:h-full max-md:before:hidden","data-aos":"fade-up",children:[s.jsx("div",{children:s.jsxs("form",{onSubmit:e=>{e.preventDefault();const a={from_name:l.name,from_email:l.email,phone:l.phone,project:l.project,message:l.message};t.send("service_0f8yimr","template_l966uqc",a,"to5gUXaCWZrbtuiXb").then((e=>{alert("Message sent successfully!")}),(e=>{alert("Failed to send message. Please try again later.")}))},"data-aos":"fade-right",children:[s.jsxs("div",{className:"space-y-4 mt-8",children:[s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[s.jsxs("div",{children:[s.jsx("label",{className:"mb-2 text-base block",children:"NOM ET PRENOM"}),s.jsx("input",{type:"text",name:"name",placeholder:"NOM ET PRENOM",value:l.name,onChange:o,className:"px-4 py-2.5 text-base rounded-md bg-white border border-gray-400 w-full outline-[#0B4F48]"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"mb-2 text-base block",children:"EMAIL"}),s.jsx("input",{type:"email",name:"email",placeholder:"EMAIL",value:l.email,onChange:o,className:"px-4 py-2.5 text-base rounded-md bg-white border border-gray-400 w-full outline-[#0B4F48]"})]})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[s.jsxs("div",{children:[s.jsx("label",{className:"mb-2 text-base block",children:"TELEPHONE"}),s.jsx("input",{type:"text",name:"phone",placeholder:"TELEPHONE",value:l.phone,onChange:o,className:"px-4 py-2.5 text-base rounded-md bg-white border border-gray-400 w-full outline-[#0B4F48]"})]}),s.jsxs("div",{children:[s.jsx("label",{className:"mb-2 text-base block",children:"PROJET"}),s.jsx("input",{type:"text",name:"project",placeholder:"PROJET",value:l.project,onChange:o,className:"px-4 py-2.5 text-base rounded-md bg-white border border-gray-400 w-full outline-[#0B4F48]"})]})]}),s.jsx("textarea",{rows:4,name:"message",placeholder:" Message",value:l.message,onChange:o,className:"px-4 py-2.5 rounded-md bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#0B4F48] outline-none","data-aos":"fade-left"})]}),s.jsxs("button",{type:"submit",className:"mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3  hover:bg-[#0B3F48] text-black",style:{background:"linear-gradient(40deg, rgba(25,222,100,1) 0%, rgba(25,222,91,0.5466561624649859) 50%, rgba(25,222,100,1) 100%)"},"data-aos":"zoom-in",children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16px",height:"16px",fill:"#000000",className:"mr-2",viewBox:"0 0 548.244 548.244",children:s.jsx("path",{fillRule:"evenodd",d:"M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z",clipRule:"evenodd","data-original":"#000000"})}),"Envoyer un message"]})]})}),s.jsx("div",{className:"z-10 relative h-full max-md:min-h-[350px]","data-aos":"fade-up",children:s.jsx("iframe",{src:"https://maps.google.com/maps?width=100%25&height=400&hl=en&q=RJ8V+VMX,%20Av.%20Hedi%20Nouira,%20Sousse+(COGEB)&t=&z=16&ie=UTF8&iwloc=B&output=embed",className:"left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg",frameBorder:"0",allowFullScreen:!0})})]})})}function m(){return e.useEffect((()=>{window.scrollTo(0,0)}),[]),s.jsxs("div",{children:[s.jsx(n,{}),s.jsx(c,{}),s.jsx(i,{}),s.jsx(d,{})]})}export{m as default};
