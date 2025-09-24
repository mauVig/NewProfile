
import WhoAmI from "./sections/experience/components/whoAmI/WhoAmI";
import Experience from "./sections/experience/Experience";
import NavBar from "./sections/header/components/NavBar";
import Header from "./sections/header/Header";
import TextAndStack from "./sections/textAndStack/TextAndStack";

export default function Home() {
  return (
    <>
      <NavBar /> 
      <Header />
      <TextAndStack />
      <Experience />
      <WhoAmI />
    </>
  );
}
