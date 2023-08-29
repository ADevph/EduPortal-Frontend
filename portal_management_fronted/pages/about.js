import Link from "next/link";
import Layout from "./Layout/layout";
import Title from "./Layout/title";

export default function About() {
  return (
    <>
      <Title page="About" />
      <Layout>
        <div>
          <h2 className="text-4xl text-black text-center mt-4 mb-4">About Us</h2>
          <p className="p-2 text-2xl">
            An adequate university portal management system's adoption will
            have a significant influence on both the academic environment and
            contemporary society. Access to education is increased, cooperation
            and communication are improved, administrative procedures are
            streamlined, and tailored learning experiences are encouraged.
            Additionally, it promotes multidisciplinary cooperation and
            research possibilities, boosts effectiveness and productivity, and
            aids in environmental sustainability. The initiative helps people
            by offering a convenient, interesting, and effective academic
            experience and has a beneficial impact on the current educational
            scene.
          </p>
        </div>

        
        <div className="mt-[345px]">
          <footer> </footer>{" "}
        </div>
        
      </Layout>
      
    
    </>
  );
}

  