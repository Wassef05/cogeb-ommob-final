import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import ProjectListingCard from "../components/ProjectListingCard";
import SkletonLoading from "./SkletonLoading";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation

const EnCoursProjects = () => {
  const { t } = useTranslation(); // Initialize the translation hook
  const [loading, setLoading] = useState(true);
  const [projectslistings, setprojectslistings] = useState([]);
  const navigate = useNavigate();

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          borderRadius: "50%",
          width: "22px",
          height: "18px",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: "-15px",
          zIndex: 1,
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          borderRadius: "50%",
          width: "22px",
          height: "18px",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: "-15px",
          zIndex: 1,
        }}
        onClick={onClick}
      />
    );
  }

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://us-central1-cogeb-immobiliere.cloudfunctions.net/api/api/projects/search?etat=en cours`);
        const json = await res.json();
        if (json.success === false) {
          setLoading(false);
        } else {
          setprojectslistings(json);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, []);

  const settings = {
    infinite: projectslistings.length > 4,
    speed: 500,
    slidesToShow: Math.min(4, projectslistings.length),
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    appendDots: (dots) => (
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >
        {dots}
      </ul>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(3, projectslistings.length),
          slidesToScroll: 1,
          infinite: projectslistings.length > 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: Math.min(2, projectslistings.length),
          slidesToScroll: 1,
          infinite: projectslistings.length > 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Math.min(1, projectslistings.length),
          slidesToScroll: 1,
          infinite: projectslistings.length > 1,
        },
      },
    ],
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="content">
          <h2 className="text-xl sm:text-3xl font-bold text-[#515557] sm:text-left">
            {t("projects.inProgressTitle")} {/* Translated title */}
          </h2>
        </div>

        <div className="post_container !mt-4">
          {loading ? <SkletonLoading /> : (
            <div className="slider_container">
              <Slider {...settings} className="z-10 relative gap-3">
                {projectslistings && projectslistings.map((project) => (
                  <ProjectListingCard key={project._id} project={project} />
                ))}
              </Slider>
              <div className="text-center pt-6">
                <button
                  onClick={() => navigate("/searchProject?filter=terminee")}
                  className="group relative inline-flex items-center overflow-hidden rounded bg-[#3A5A40] px-8 py-3 text-black"
                  style={{
                    background: "linear-gradient(104deg, rgba(2,164,34,1) 0%, rgba(144,226,160,1) 40%, rgba(142,245,162,0.9445028011204482) 55%, rgba(2,164,34,1) 100%)",
                  }}
                >
                  <span className="absolute -end-full transition-all group-hover:end-4">
                    <svg className="h-5 w-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <span className="text-xl transition-all group-hover:me-6">{t("projects.viewMore")}</span> 
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EnCoursProjects;
