import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  const [furl, setfurl] = useState("Books/The_Temptation_Of_Saint_Anthony.html");
  const [menshow, setMenshow] = useState(false);
  const [bookshow, setBookshow] = useState(false);
  const [bibleshow, setBibleshow] = useState(false);
  const [hidden] = useState(false);
  async function togglemenu() {
    setMenshow((menshow) => !menshow)
    setFrameshow((frameshow) => !frameshow)
    if (bookshow == true) {
    	setBookshow((bookshow) => !bookshow)
    }
    if (bibleshow == true) {
      setBibleshow((bibleshow) => !bibleshow)
    }
    () => setBibleshow(false);
    () => setBookshow(false);
  }
    //setBookshow((bookshow) => false)
  async function togglebooks() {
    () => setBibleshow(false);
    () => setBookshow(false);
    setBookshow((bookshow) => !bookshow)
  }
  async function togglebibles() {
    () => setBibleshow(false);
    () => setBookshow(false);
    setBibleshow((bibleshow) => !bibleshow)
  }
  return (
    <div className="container">
    <header>
    	<button class="menu" onClick={() => {setBibleshow(false); setBookshow(false); togglemenu()}}>
    		<h2 id="met">Menu</h2>
    	</button>
    	</header>
    	{menshow && <ul><li><button class="menu" onClick={() => {setBibleshow(false); togglebooks()}}><h3>Books</h3></button></li><li><button class="menu" onClick={() => {setBookshow(false); togglebibles()}}><h3>Bibles</h3></button></li></ul>}
    	{bookshow && <h2 class="mentop">Books</h2>}
    	{bibleshow && <h2 class="mentop">Bibles</h2>}
    	<ul>
      {bookshow && <li><button class="menu" onClick={() => {setfurl("Books/Compendium.html"); togglemenu(); setBibleshow(false); setBookshow(false)}}><h3>The Compendium Of The Catholic Church</h3></button></li>}
    	{bookshow && <li><button class="menu" onClick={() => {setfurl("Books/Catechism/_INDEX.HTM"); togglemenu(); setBibleshow(false); setBookshow(false)}}><h3>The Catechism of The Catholic Church</h3></button></li>}
    	{bookshow && <li><button class="menu" onClick={() => {setfurl("Books/The_Temptation_Of_Saint_Anthony.html"); togglemenu(); setBibleshow(false); setBookshow(false)}}><h3>The Temptation Of Saint Anthony</h3></button></li>}
    	{bookshow && <li><button class="menu" onClick={() => {setfurl("Books/The_Confession_Of_Saint_Augustine.html"); togglemenu(); setBibleshow(false); setBookshow(false)}}><h3>The Confession Of Saint Augustine</h3></button></li>}
    	{bookshow && <li><button class="menu" onClick={() => {setfurl("Books/City_Of_God_Volume_1.html"); togglemenu(); setBibleshow(false); setBookshow(false)}}><h3>City Of God Volume 1</h3></button></li>}
    	{bookshow && <li><button class="menu" onClick={() => {setfurl("Books/City_Of_God_Volume_2.html"); togglemenu(); setBibleshow(false); setBookshow(false)}}><h3>City Of God Volume 2</h3></button></li>}
    	{bookshow && <li><button class="menu" onClick={() => {setfurl("Books/A_Bible_History_Of_Baptism/index.html"); togglemenu(); setBibleshow(false); setBookshow(false)}}><h3>A Bible History of Baptism, by Samuel John Baird</h3></button></li>}
    	{bookshow && <li><button class="menu" onClick={() => {setfurl("Books/A Bible Hand-Book, by Fernandez C. Holliday/index.html"); togglemenu(); setBibleshow(false); setBookshow(false)}}><h3>A Bible Hand-Book, by Fernandez C. Holliday</h3></button></li>}
    	{bookshow && <li><button class="menu" onClick={() => {setfurl("Books/Baptism as taught in the Bible and the Prayer Book, by Edward Hoare/index.html"); togglemenu(); setBibleshow(false); setBookshow(false)}}><h3>Baptism as taught in the Bible and the Prayer Book, by Edward Hoare</h3></button></li>}
    	{bookshow && <li><button class="menu" onClick={() => {setfurl("/Books/Captivating Bible Stories, by Charlotte Mary Yonge/index.html"); togglemenu(); setBibleshow(false); setBookshow(false)}}><h3>Captivating Bible Stories, by Charlotte Mary Yonge</h3></button></li>}
    	{bookshow && <li><button class="menu" onClick={() => {setfurl("Books/Church And Bible History By Volrath Vogt/index.html"); togglemenu(); setBibleshow(false); setBookshow(false)}}><h3>Church And Bible History By Volrath Vogt</h3></button></li>}
    	{bookshow && <li><button class="menu" onClick={() => {setfurl("/Books/The Atonement, by Edward Hoare/index.html"); togglemenu(); setBibleshow(false); setBookshow(false)}}><h3>The Atonement, by Edward Hoare</h3></button></li>}
    	{bookshow && <li><button class="menu" onClick={() => {setfurl("/Books/The Believer not Ashamed of the Gospel, by Edward Hoare/index.html"); togglemenu(); setBibleshow(false); setBookshow(false)}}><h3>The Believer not Ashamed of the Gospel, by Edward Hoare</h3></button></li>}
    	{bookshow && <li><button class="menu" onClick={() => {setfurl("/Books/The Influence of the Bible on Civilisation, by Ernst Von Dobschutz/index.html"); togglemenu(); setBibleshow(false); setBookshow(false)}}><h3>The Influence of the Bible on Civilisation, by Ernst Von Dobschutz</h3></button></li>}
    	{bookshow && <li><button class="menu" onClick={() => {setfurl("/Books/The Lost Faith, by T. S. Childs/index.html"); togglemenu(); setBibleshow(false); setBookshow(false)}}><h3>The Lost Faith, by T. S. Childs</h3></button></li>}
    	{bookshow && <li><button class="menu" onClick={() => {setfurl("/Books/The_Preachers_Commentary/index.html"); togglemenu(); setBibleshow(false); setBookshow(false)}}><h3>The Preacher's Complete Homiletic Commentary of the Books of the Bible, by George Barlow</h3></button></li>}


    	{bibleshow && <li><button class="menu" onClick={() => {setfurl("Bibles/King_James.html"); togglemenu(); setBibleshow(false); setBookshow(false)}}><h3>The King James Bible</h3></button></li>}
        {bibleshow && <li><button class="menu" onClick={() => {setfurl("Bibles/American/_INDEX.HTM"); togglemenu(); setBibleshow(false); setBookshow(false)}}><h3>The American Bible</h3></button></li>}
        {bibleshow && <li><button class="menu" onClick={() => {setfurl("Bibles/The Juvenile Bible/index.html"); togglemenu(); setBibleshow(false); setBookshow(false)}}><h3>The Juvenile Interpretation of The Bible</h3></button></li>}
    	</ul>
      {!menshow && <iframe id="viewarea" src={furl} loading="lazy" />}
      </div>
  );
}

export default App;
