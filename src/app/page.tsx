
import Experience from "./sections/experience/Experience";
import Header from "./sections/header/Header";
import TextAndStack from "./sections/textAndStack/TextAndStack";
import ChangeBackColor from "./sections/changeBack/ChangeBackColor";

export default function Home() {
  return (
    <>
      <Header />
      <TextAndStack />
      <Experience />
      <ChangeBackColor />
    </>
  );
}
