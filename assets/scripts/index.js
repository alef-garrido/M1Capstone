// Mobile Modal Menu
document.querySelector('#hambMenu').addEventListener('click', () => {
  document.getElementById('menuDisplay').classList.toggle('hidden');
});

document.querySelector('#closeBtn').addEventListener('click', () => {
  document.getElementById('menuDisplay').classList.toggle('hidden');
});


// Feature Acts

const artistInfo = [
  {
    id: 1,
    thumbnail: './png/Avatar.png',
    title: 'Noga Erez',
    subTitle: 'Israeli singer, songwriter and producer.' ,
    info: '<br>On stage, Erez performs as a three-piece-band with herself on vocals, Ori Rousso (sampler, synthesizer) and Ran Jacobovitz (electronic drums, percussion).'
  },  
  {
    id: 2,
    thumbnail: './png/Avatar2.png',
    title: 'Celeste',
    subTitle: 'American-British singer and songwriter.' ,
    info: "<br>In 2019, she became the fifth artist to top the BBC's annual Sound of... poll and win the Rising Star Award at the Brit Awards in the same year. Her debut album Not Your Muse was released in 2021 and debuted at No. 1 on the UK Albums Chart."
  },
  {
    id: 3,
    thumbnail: './png/Avatar3.png',
    title: 'Nicolas Jaar',
    subTitle: 'Chilean-American composer and recording artist based in New York.',
    info: "<br>Since 2011, he has embarked on multiple explorative directions, performing a five-hour improvisational concert at MoMA PS1 and releasing a large volume of experimental recordings through his label, Other People."
  },
  {
    id: 4,
    thumbnail: './png/Avatar4.png',
    title: 'Lhasa de Sela',
    subTitle: 'American-born singer-songwriter who was raised in Mexico and the United States.',
    info: '<br>Her first album, La Llorona, went Platinum in Canada and brought Lhasa a Félix Award and a Juno Award.Following this success, Lhasa toured with Lilith Fair, then joined her sisters in a French circus troupe, contributing her husky voice to the musical backdrop.'
  },
  {
    id: 5,
    thumbnail: './png/Avatar5.png',
    title: 'Black Pumas',
    subTitle: 'American psychedelic soul band based in Austin, Texas.',
    info: '<br>Led by singer/songwriter Eric Burton and guitarist/producer Adrian Quesada. The group received its first Grammy Award nomination in 2020 for Best New Artist at the 62nd awards.'
  },
  {
    id: 6,
    thumbnail: './png/Avatar6.png',
    title: 'Alexandra Savior',
    subTitle: 'American singer-songwriter originally from Portland, Oregon.',
    info: "<br>Her debut album, Belladonna of Sadness, was released by Columbia Records on April 7, 2017. Savior's second album, The Archer, was released by 30th Century Records on January 10, 2020."
  },
  {
    id: 7,
    thumbnail: './png/Avatar7.png',
    title: 'Dua Saleh',
    subTitle: 'Sudanese-American recording artist, songwriter, poet, and actor based in Minneapolis, Minnesota.',
    info: "<br>Their debut EP Nūr was released in January 2019 by the Against Giants record label to critical acclaim, with their second, Rosetta, released in June the following year."
  },
  {
    id: 8,
    thumbnail:'./png/Avatar8.png',
    title: 'Arcade Fire',
    subTitle: 'Canadian indie rock band, consisting of husband and wife Win Butler and Régine Chassagne.',
    info: "<br>Founded in 2000 by friends and classmates Butler and Josh Deu, the band came to prominence in 2004 with the release of their critically acclaimed debut album Funeral."
  }
];
 
const createCard = function() {
  //grab HTML container
  const container = document.querySelector('#featContainer');
 
  for (let i = 0; i < artistInfo.length; i += 1) {
    //Enunciate Card Elements
      const card = document.createElement('li');
      const thumbnail = document.createElement('img')
      const title = document.createElement('h4');
      const subTitle = document.createElement('h5');
      const info = document.createElement('p');
    //Create Element's content
      card.classList.add('featCard');
      thumbnail.src = artistInfo[i].thumbnail;
      thumbnail.alt = "Artist thumbnail";
      title.innerHTML = artistInfo[i].title;
      subTitle.textContent = artistInfo[i].subTitle;
      info.innerHTML = artistInfo[i].info;
  
      card.append(thumbnail, title, subTitle, info);
      container.appendChild(card);
    }
};

createCard();


