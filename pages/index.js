import Head from "next/head";
import Image from "next/image";
import HomePage from "./home";

export default function Home(props) {
  return <HomePage setPreloader={props.setPreloader} />;
}
