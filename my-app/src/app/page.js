import Image from "next/image";
import Navbar from "./Navbar";
import Intro from "./Intro";
import Projects from "./Projects";

export default function Home() {
  return (
    <main>
       <Navbar/>
       <Intro/>
       <div className="space-y-[42%]">
        <Projects num = '01' name='ThreadCast' desc='Cyber threat forecasting predicts future cyber attacks using data analysis and machine learning to enhance security.' src="https://img.freepik.com/free-photo/businessman-logging-his-tablet_53876-102029.jpg?w=996&t=st=1721583835~exp=1721584435~hmac=5443ac0110820aeab695eb342d4f8db7d866e850b133597caeeb57d02767d52e"/>
        <Projects num = '02' name='AgroSense' desc='Real-time sensor data analysis to optimize fertilizer recommendations for improved agricultural productivity.' src="https://img.freepik.com/free-photo/futuristic-city-with-high-tech-mobility-social-welfare_23-2151065332.jpg?t=st=1721585529~exp=1721589129~hmac=bb83faf3740fe020bb6791f1caa5ea8d18b626812116251951084cb04c80a491&w=1380" />
       </div>
    </main>
  );
}
