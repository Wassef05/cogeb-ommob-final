import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Newsetter() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
      <div>
        <div className="flex  my-10   overflow-hidden max-w-2xl mx-auto font-[sans-serif]">
          <input type="email" placeholder="EMAIL"
            className="w-full border-2 rounded-md mr-4 outline-none rounded-l-md bg-white text-gray-600 text-sm px-4 py-3" />
          <button type='button' className="flex rounded-md items-center justify-center px-5 text-sm text-white"
          style={{
            background: "linear-gradient(40deg, rgba(25,222,100,1) 0%, rgba(25,222,91,0.5466561624649859) 50%, rgba(25,222,100,1) 100%)"
          }}
          >
          ENVOYER
          </button>
        </div>
      </div>
    );
}
