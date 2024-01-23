import Navbar from "../components/navbar";
import CodeBox from "../components/CodeBox";
import Point from "../components/point";

export default function Home() {
  const firstProgram = 'if 5 > 2:\n\tprint("Five is greater than two!")';

  return (
    <main className="">
      <Navbar />

      <Point/>
      
    </main>
  );
}
