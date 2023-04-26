import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Avatar, Stack, Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <body className={styles.content}>
      <div>
        <Head>
          <title>social brew</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <header className={styles.header}>
          <a className={styles.logoText}>Social</a>{" "}
          <a className={styles.logoTextBold}>Brew</a>
          <button
            id="signInButton"
            className={styles.signInButton}
            onClick={() => window.open("/signin", "_blank")}
          >
            Sign In
          </button>
          <a className={styles.createAccount}>create an account</a>
        </header>

        <section>
          <Stack className={styles.menuBar} spacing={"42px"}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://honestcoffeeguide.com/tools/coffee-to-water-ratio/",
                  "_blank"
                );
                git;
              }}
            >
              coffee calculator
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://blog.bluebottlecoffee.com/posts/how-to-choose-a-brew-method",
                  "_blank"
                );
              }}
            >
              methods guide
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://honestcoffeeguide.com/guides/coffee-grind-size-chart",
                  "_blank"
                );
              }}
            >
              grind size chart
            </a>
            <a>community</a>
          </Stack>
        </section>

        <section className={styles.postContainer}>
          <div className={styles.postedImage}></div>
          <div className={styles.userProfile}>
            <a>Lua</a>
          </div>
          <Box className={styles.userProfileAvatar}>
            <Avatar
              name="Luana"
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/078/718/original/PJF_8413.jpg?1682356621"
              border="2px solid #F7BD96"
            ></Avatar>
          </Box>

          <Stack className={styles.coffeeData}>
            <a className="beans">beans: ethiopia/washed</a>
            <a className="roaster">roaster: nomad</a>
            <a className="method">method: v60</a>
            <a className="recipe">recipe: 20g</a>
          </Stack>
          <Stack className={styles.postSubtitle}>
            <a>lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
          </Stack>

          <section className={styles.postCommentsContainer}>
            {[...Array(7)].map((_, i) => (
              <Box key={i}>
                <Avatar
                  className={styles.followerProfileAvatar}
                  name=""
                  background="#F7bd96"
                  h="20px"
                  w="20px"
                  border="1px solid #323233"
                />
                <a className={styles.followerComments}>good coffee</a>
              </Box>
            ))}
          </section>
        </section>
      </div>
    </body>
  );
}
