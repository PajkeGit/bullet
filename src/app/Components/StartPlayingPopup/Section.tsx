import { motion } from "framer-motion";

type SectionProps = {
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ x: "30%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ opacity: "0" }}
      transition={{ ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Section;
