import placeHolder from "../../assets/images/NWACC/placeholder-headshot.png";

const Strings = {
  people: "Notable People",
  header: {
    label: `header`,
    content: `Northwest Association of Corvette Clubs`,
  },
  introduction: {
    label: `introduction`,
    content: `
        The Northwest Association of Corvette Clubs was created in 1972 to organize Corvette Clubs in the Pacific Northwest.
        Our goals are to increase participation, improve communication among member Corvette Clubs, further the development and quality of Corvettes, and improve services avaiable to Corvette owners.
        `,
  },
  links: {
    mainPage: [
      {
        label: "About Us",
        url: "http://nwacconline.com/about_us.html",
        key: 0,
      },
      {
        label: "Autocross",
        url: "http://nwacconline.com/autocross.html",
        key: 1,
      },
      {
        label: "Show-n-Shine",
        url: "http://nwacconline.com/shownshine.html",
        key: 2,
      },
      // {
      //   label: "Year End Banquet",
      //   url: "http://nwacconline.com/yearendbanquet.html",
      //   key: 3,
      // },
      // {
      //   label: "Other Corvette Activities",
      //   url: "http://nwacconline.com/other_corvette_events.html",
      //   key: 4,
      // },
      // {
      //   label: "NWACC Meetings",
      //   url: "http://nwacconline.com/nwacc%20meetings.html",
      //   key: 5,
      // },
      // {
      //   label: "Links",
      //   url: "http://nwacconline.com/links.html", TODO: REWORK INTO ITS OWN PAGE
      //   key: 6,
      // },
      // {
      // {
      //   label: "In Memoriam",
      //   url: "http://nwacconline.com/In%20Memoriam.html",
      //   key: 8,
      // },
      {
        label: "Facebook",
        url: "https://www.facebook.com/groups/207888470635/?fref=ts",
        key: 9,
      },
    ],
    aboutUs: [
      {
        label: "Home",
        url: "http://nwacconline.com/index.html",
        key: 0,
      },
      {
        label: "NWACC Meetings",
        url: "http://nwacconline.com/nwacc%20meetings.html", // TODO: refactor dupe
        key: 5,
      },
    ],
  },
  registration: {
    label: "Online registration for NWACC AutoCross only",
    url: "http://nwacconline.com/Tech%20Inspect%20-%20Register.html",
  },
  officers: [
    {
      title: "President",
      name: "Arthur Green",
      picture: placeHolder,
      key: 0,
    },
    {
      title: "Vice President",
      name: "Rob Spring",
      picture: placeHolder,
      key: 1,
    },
    {
      title: "Secretary",
      name: "Bob Hooper",
      picture: placeHolder,
      key: 2,
    },
    {
      title: "Treasurer",
      name: "Dave Kaiser",
      picture: placeHolder,
      key: 3,
    },
  ],
  committees: [
    {
      title: "Autocross",
      name: "Jami Olerich",
      picture: placeHolder,
      key: 0,
    },
    {
      title: "Competition",
      name: "Chunk Hulka",
      picture: placeHolder,
      key: 1,
    },
    {
      title: "Insurance",
      name: "Dave Kaiser",
      picture: placeHolder,
      key: 2,
    },
    {
      title: "Shine-n-Show",
      name: "Don Patnoe",
      picture: placeHolder,
      key: 3,
    },
    {
      title: `Year End
      Banquet Hotel`,
      name: "Jon Cox",
      picture: placeHolder,
      key: 4,
    },
  ],
  memberClubs: [
    {
      name: "Corvettes de Olympia",
      location: "Lacey, WA",
      url: "https://cdeo.clubexpress.com/",
      key: 0,
    },
    {
      name: "Glass Odyssey Corvette Club",
      location: "Bremerton, WA",
      url: "https://kitsapvettes.org/",
      key: 1,
    },
    {
      name: "Corvette Marque Club of Seattle",
      location: "Seattle, WA",
      url: "https://corvettemarqueclub.com/",
      key: 2,
    },
    {
      name: "Puget Sound Corvette Club",
      location: "Tacoma, WA",
      url: "https://pugetsoundcorvetteclub.com/",
      key: 3,
    },
    {
      name: "Rose City Corvettes",
      location: "Portland, OR",
      url: "https://www.rosecitycorvettes.org/",
      key: 4,
    },
    {
      name: "Corvettes Unlimited of Bellingham",
      location: "Bellingham, WA",
      url: "https://corvettesunlimitedbham.com/",
      key: 5,
    },
  ],
  importantDocuments: [
    {
      label: "Membership",
      url: "http://nwacconline.com/membership.html", // Refactor into a new, organized page
      key: 0,
    },
    {
      label: "Constitution",
      url: "http://nwacconline.com/constitution.html",
      key: 1,
    },
    {
      label: "By-Laws",
      url: "http://nwacconline.com/bylaws.html",
      key: 2,
    },
    {
      label: "Reimbursement Form",
      url: "http://nwacconline.com/reimbursement_form.html",
      key: 3,
    },
  ],
};

export default Strings;
