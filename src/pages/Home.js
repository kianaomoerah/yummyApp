import Veggie from "../components/Veggie";
import PopularRecipies from "../components/PopularRecipes";
import { motion } from "framer-motion";

const Home = () => {

    return (
        <motion.div
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opactiy: 0}}
            transition={{duration: 0.7}}
        >
            <Veggie />
            <PopularRecipies />
        </motion.div>
    )

}

export default Home;