
import WhoAmI from "./sections/changeBack/whoAmI/WhoAmI";
import Experience from "./sections/experience/Experience";
import NavBar from "./sections/header/components/NavBar";
import Header from "./sections/header/Header";
import TextAndStack from "./sections/textAndStack/TextAndStack";
import Freelance from "./sections/changeBack/freelance/Freelance";
import ChangeBackColor from "./sections/changeBack/ChangeBackColor";

export default function Home() {
  return (
    <>
      <NavBar /> 
      <Header />
      <TextAndStack />
      <Experience />
      <ChangeBackColor />
    </>
  );
}
