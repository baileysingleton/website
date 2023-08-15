import React from "react";
import Layout from "../components/Layout";
import space_heavy from "../albums/space_heavy.jpeg";
import Album from "../components/Album";
import AlbumShower from "../components/AlbumShower";

export default () => (
  <Layout>
    <title>Bailey Singleton</title>
    <h1>Hello, </h1>
    <h2>Welcome to my personal site!</h2>
    <p>
      I'm a 26 year-old Software Engineer looking to expand my horizons and take
      on a new challenge. Open to work and looking for a new position!
    </p>
    <p>
      I am a reader, programmer, disc-golfer, hiker, biker, gamer, and overall
      cool guy. I enjoy using modern web technologies to make the user and
      developer's experience more fun and enjoyable. A bit of a mechanical
      keyboard enthusiast, and I won best-sense of humor in highschool and I'm
      still riding that wave.
    </p>
    <h2>What I'm Working On</h2>
    <p>
      Besides a day job, I am working on building out this website. It is built
      on top of <a href="https://www.gatsbyjs.org/">GatsbyJS</a>, and I am
      hoping to add some of my photography soon.{" "}
    </p>
    <p>
      Other than this, I spend my 9-5 working for Intel on their overclocking
      program{" "}
      <a href="intel.com/content/www/us/en/download/17881/intel-extreme-tuning-utility-intel-xtu.html">
        Extreme Tuning Utility
      </a>{" "}
      I was just promoted to Lead Software Engineer and am happy to be taking on
      some more responsibility for the team.
    </p>

    <h2>What I'm Reading</h2>
    <p>
      Haruki Murakami's <i>The Wind-Up Bird Chronicle</i>
    </p>

    <h2>What I'm Watching</h2>
    <p>
      Find me on <a href="https://letterboxd.com/bailmom/">Letterboxd</a>
    </p>

    <h2>What I'm Listening to</h2>
    <AlbumShower />
    {/* <ul>
        <li>
          King Krule's{" "}
          <a href="">
            <i>Space Heavy</i>
            <img alt="ligma" src={space_heavy} />
          </a>
        </li>
        <li>
          Carly Rae Jepsen's{" "}
          <a href="https://www.youtube.com/watch?v=bxb6cQNTVOo&list=PL6n7xOfvov7DwbR4Gm23Pfsf9O9uoMS5w&index=3">
            <i>The Loveliest Time</i>
          </a>
        </li>
        <li>
          The Books'{" "}
          <a href="https://www.youtube.com/watch?v=cxEkP_19QsM&list=PL-sf8_8NMzh5P_LwV_qiS93ciqSoCljn5">
            <i>Thought For Food</i>
          </a>
        </li>
      </ul> */}
  </Layout>
);
