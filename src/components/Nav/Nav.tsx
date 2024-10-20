import Link from "next/link";
import styles from "./nav.module.scss";
type Props = {};

const groupStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "3rem",
};

function Nav({}: Props) {
  const isAuthenticated = false; //placeholder
  return (
    <div className={styles.nav}>
      <img src={"./logo.png"} className={styles.logo} alt="Logo"></img>
      <div style={groupStyle}>
        <div className={styles.navOptions}>
          <h3>Home</h3>
          <h3>Courses</h3>
          <h3>About</h3>
        </div>
        {isAuthenticated ? (
          <div className={styles.profileMenu}></div>
        ) : (
          <div className={styles.navButtons}>
            <Link href={"/register"}>Sign Up</Link>
            <Link href={"/login"}>Log In</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
// Logic from an old project, might be used here
// {!isLoading &&
//     (isAuthenticated ? (
//       <>
//         <AiOutlineMenu
//           color="white"
//           className={styles.icon}
//           size="20"
//         />
//         <img src={user?.picture} alt="Profile Picture"></img>
//         <div className={styles.dropdown}>
//           <h4>Courses</h4>
//           <h4
//             onClick={() =>
//               logout({
//                 logoutParams: { returnTo: window.location.origin },
//               })
//             }
//           >
//             Log out
//           </h4>
//         </div>
//       </>
//     ) : (
//       <div>
//         <button onClick={() => loginWithRedirect()}>Login</button>
//       </div>
//     ))}
