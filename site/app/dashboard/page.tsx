import Image from "next/image";
import Google from "@/public/google.png";

export default function DashboardPage() {
  return(
    <>
    <section className="dashboard-intro">
      <h3>Example User's Dashboard</h3>
      <div className="profile-preview">
        <div className="profile-picture">
          <Image src={Google} height={50} alt="User PFP"/>
        </div>
        <div className="user-infomation">
          <h2 className="display-name">User</h2>
          <p className="username">Example User</p>
        </div>
      </div>
    </section>
    </>
  );
}