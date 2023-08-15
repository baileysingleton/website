import React from "react";
import Album from "./Album";
import space_heavy from "../albums/space_heavy.jpeg";
import thought_for_food from "../albums/thought_for_food.jpg";

const albumList = [
  {
    name: "Space Heavy",
    artist: "King Krule",
    image: space_heavy,
    url:
      "https://www.youtube.com/watch?v=A712DL56J9Q&list=PLOSwlsmq24NCI_CqrkLYXEagSQIwJbpfQ",
  },
  {
    name: "Thought For Food",
    artist: "The Books",
    image: thought_for_food,
    url:
      "https://www.youtube.com/watch?v=cxEkP_19QsM&list=PL-sf8_8NMzh5P_LwV_qiS93ciqSoCljn5",
  },
];

// need to get them to appera in 2/3 columns
export default () => (
  <div display="flex">
    {albumList.map((album) => (
      <Album
        key={album.name}
        url={album.url}
        name={album.name}
        artist={album.artist}
        image={album.image}
      />
    ))}
  </div>
);
