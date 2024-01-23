import Link from "next/link";
import styles from "./page.module.css";
import { getSession } from "@auth0/nextjs-auth0";
import Image from "next/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

type Props = {}

const ProfilePage = async(props: Props) => {

  const session = await getSession();
  const user = session?.user;

  return (
    <>
    <Header/>
     (
      <main>
        <section className={styles.profile}>
          <h2 className={styles.title}>My Profile</h2>
          <Image
            className={styles.img}
            src={user?.picture}
            alt={user?.picture}
            width={100}
            height={60}
          />
          <article className={styles.data__wrapper}>
            <section className={styles.data__title}>
              <h4>User</h4>
              <h4>Email</h4>
              <h4>Password</h4>
            </section>
            <section className={styles.data__data}>
              <h4>{user?.name}</h4>
              <h4>{user?.email}</h4>
              <h4>*********</h4>
            </section>
          </article>
          <section className={styles.data__btn}>
            <Link href={"/homepage"}>
              <button className={styles.button}>Close</button>
            </Link>
          </section>
        </section>
      </main>
    )
    <Footer/>
    </>
  );
};


export default ProfilePage