import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { qualifications, certifications } from "../../constants";

const FeedbackCard = ({ index, course, institute, board, year }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[20px]">{course}</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[16px]">{institute}</p>
      <p className="text-white tracking-wider text-[16px]">{board}</p>
      <p className="text-white tracking-wider text-[16px]">{year}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col"></div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <>
      <div className={`mt-12 bg-black-100 rounded-[20px]`}>
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px] flex flex-col justify-center items-center`}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Education</p>
            <h2 className={styles.sectionHeadText}>Qualification</h2>
          </motion.div>
        </div>
        <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
          {qualifications.map((qualification, index) => (
            <FeedbackCard
              key={qualification.name}
              index={index}
              {...qualification}
            />
          ))}
        </div>
      </div>
      <div className={`mt-12 bg-black-100 rounded-[20px]`}>
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px] flex flex-col justify-center items-center`}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionMedText}>Certification courses</p>
            {/* <h2 className={styles.sectionHeadText}>Qualification</h2> */}
          </motion.div>
        </div>
        <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
          {certifications.map((certifications, index) => (
            <FeedbackCard
              key={certifications.name}
              index={index}
              {...certifications}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "");
