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
    toCreate: [
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
      {
        label: "Facebook",
        url: "https://www.facebook.com/groups/207888470635/?fref=ts",
        key: 9,
      },
    ],
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
      label: "Constitution",
      url: "http://nwacconline.com/constitution.html",
      key: 0,
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
  autocross: {
    pageStrings: {
      header: "Autocross",
      eventsHeader: "Autocross Events",
    },
    eventsTable: {},
    eventsScoringTables: {},
    historicalScoringTables: [],
    documents: [
      {
        name: "Competition Code",
        url: "http://nwacconline.com/2020PDFs/2020%20NWACC%20Competition%20Code.pdf",
        key: 0,
      },
      {
        name: "Speed Event Guidelines",
        url: "http://nwacconline.com/2020PDFs/2020%20NWACC%20%20Speed%20Event%20Policies%20and%20Procedures.pdf",
        key: 1,
      },
    ],
  },
  membership: {
    pageStrings: {
      header: "Membership",
      subHeader: "What is the Northwest Association of Corvette Clubs (NWACC)?",
    },
    documents: [
      {
        name: "Northwest Association of Corvette Clubs (NWACC)",
        url: "http://nwacconline.com/2021PDFs/2021%2005%2010%20%20NWACC%20Just%20what%20is%20it.pdf",
        key: 0,
      },
      {
        name: "Advantages or being an NWACC Club Member",
        url: "http://nwacconline.com/2021PDFs/2021%2005%2010%20Insance%20Advantage%20of%20club%20membership.pdf",
        key: 1,
      },
      {
        name: "Membership Cost",
        url: "http://nwacconline.com/2021PDFs/2021%2005%2010%20The%20Cost%20to%20Belong.pdf",
        key: 2,
      },
    ],
  },
  showNShine: {
    pageStrings: {
      header: "Show-n-Shine",
      eventsHeader: "Shine-n-Shine Events",
      participants: "Participants",
      judges: "Judges",
    },
    documents: [
      {
        name: "Competition Code",
        url: "http://nwacconline.com/2020PDFs/2020%20NWACC%20Competition%20Code.pdf",
        key: 0,
      },
    ],
    adminDocuments: [
      {
        name: "NWACC Shine-n-Show Program and Policies",
        url: "http://nwacconline.com/2020PDFs/NWACC%20Corvette%20Shine-n-Show%20Program%20Policies%20and%20Procedures%20_%202020.pdf",
        key: 0,
      },
      {
        name: "NWACC Shine-n-Show Judging Sheet",
        url: "http://nwacconline.com/2020PDFs/NWACC%20%20Shine%20and%20Show%20Judging%20Form%20-%202020.pdf",
        key: 1,
      },
    ],
  },
  pages: [
    { name: "Home", path: "/", key: 0 },
    { name: "Autocross", path: "/autocross", key: 1 },
    { name: "Membership", path: "/membership", key: 2 },
    { name: "Show-n-Shine", path: "/shownshine", key: 2 },
    // { name: "External Links", path: "/externallinks", key: 2 },
    // { name: "In Memoriam", path: "/inmemoriam", key: 2 },
  ],
  scoreKeeper: {
    label: "Scorekeeper Registration",
    image: "",
    url: "https://scorekeeper.wwscc.org/register/nwacc2020/events",
  },
};

export default Strings;
