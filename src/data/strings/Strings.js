import placeHolder from "../../assets/images/NWACC/placeholder-headshot.png";

const Strings = {
  people: "Notable People",
  header: {
    label: `header`,
    content: `Northwest Association of Corvette Clubs`,
  },
  introduction: {
    label: `introduction`,
    content: `The Northwest Association of Corvette Clubs was created in 1972 to organize Corvette Clubs in the Pacific Northwest.
        Our goals are to increase participation, improve communication among member Corvette Clubs, further the development and quality of Corvettes, and improve services avaiable to Corvette owners.
        `,
  },
  officers: [
    {
      title: "President",
      name: "Arthur Green",
      picture: placeHolder,
      index: 0,
    },
    {
      title: "Vice President",
      name: "Rob Spring",
      picture: placeHolder,
      index: 1,
    },
    {
      title: "Secretary",
      name: "Bob Hooper",
      picture: placeHolder,
      index: 2,
    },
    {
      title: "Treasurer",
      name: "Dave Kaiser",
      picture: placeHolder,
      index: 3,
    },
  ],
  committees: [
    {
      title: "Autocross",
      name: "Jami Olerich",
      picture: placeHolder,
      index: 0,
    },
    {
      title: "Competition",
      name: "Chunk Hulka",
      picture: placeHolder,
      index: 1,
    },
    {
      title: "Insurance",
      name: "Dave Kaiser",
      picture: placeHolder,
      index: 2,
    },
    {
      title: "Shine-n-Show",
      name: "Don Patnoe",
      picture: placeHolder,
      index: 3,
    },
    {
      title: `Year End
      Banquet Hotel`,
      name: "Jon Cox",
      picture: placeHolder,
      index: 4,
    },
  ],
  memberClubs: [
    {
      name: "Corvettes de Olympia",
      location: "Lacey, WA",
      url: "https://cdeo.clubexpress.com/",
      index: 0,
    },
    {
      name: "Glass Odyssey Corvette Club",
      location: "Bremerton, WA",
      url: "https://kitsapvettes.org/",
      index: 1,
    },
    {
      name: "Corvette Marque Club of Seattle",
      location: "Seattle, WA",
      url: "https://corvettemarqueclub.com/",
      index: 2,
    },
    {
      name: "Puget Sound Corvette Club",
      location: "Tacoma, WA",
      url: "https://pugetsoundcorvetteclub.com/",
      index: 3,
    },
    {
      name: "Rose City Corvettes",
      location: "Portland, OR",
      url: "https://www.rosecitycorvettes.org/",
      index: 4,
    },
    {
      name: "Corvettes Unlimited of Bellingham",
      location: "Bellingham, WA",
      url: "https://corvettesunlimitedbham.com/",
      index: 5,
    },
  ],
  importantDocuments: [
    {
      label: "Constitution",
      url: "http://nwacconline.com/constitution.html",
      index: 0,
    },
    {
      label: "By-Laws",
      url: "http://nwacconline.com/bylaws.html",
      index: 1,
    },
    {
      label: "Reimbursement Form",
      url: "http://nwacconline.com/reimbursement_form.html",
      index: 2,
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
        index: 0,
      },
      {
        name: "Speed Event Guidelines",
        url: "http://nwacconline.com/2020PDFs/2020%20NWACC%20%20Speed%20Event%20Policies%20and%20Procedures.pdf",
        index: 1,
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
        index: 0,
      },
      {
        name: "Advantages or being an NWACC Club Member",
        url: "http://nwacconline.com/2021PDFs/2021%2005%2010%20Insance%20Advantage%20of%20club%20membership.pdf",
        index: 1,
      },
      {
        name: "Membership Cost",
        url: "http://nwacconline.com/2021PDFs/2021%2005%2010%20The%20Cost%20to%20Belong.pdf",
        index: 2,
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
        index: 0,
      },
    ],
    adminDocuments: [
      {
        name: "NWACC Shine-n-Show Program and Policies",
        url: "http://nwacconline.com/2020PDFs/NWACC%20Corvette%20Shine-n-Show%20Program%20Policies%20and%20Procedures%20_%202020.pdf",
        index: 0,
      },
      {
        name: "NWACC Shine-n-Show Judging Sheet",
        url: "http://nwacconline.com/2020PDFs/NWACC%20%20Shine%20and%20Show%20Judging%20Form%20-%202020.pdf",
        index: 1,
      },
    ],
  },
  pages: [
    { name: "Home", path: "/", index: 0 },
    { name: "Autocross", path: "/autocross", index: 1 },
    { name: "Membership", path: "/membership", index: 2 },
    { name: "Show-n-Shine", path: "/shownshine", index: 3 },
    // TODO: Create pages for external links and in memoriam
    {
      name: "External Links",
      path: "http://nwacconline.com/links.html",
      index: 4,
    },
    {
      name: "In Memoriam",
      path: "http://nwacconline.com/In%20Memoriam.html",
      index: 5,
    },
  ],
  scoreKeeper: {
    label: "Scorekeeper Registration",
    url: "https://scorekeeper.wwscc.org/register/nwacc2020/events",
  },
  faceBook: {
    label: "Facebook",
    url: "https://www.facebook.com/groups/207888470635",
  },
  externalLinks: {
    nwaccClubs: {
      header: "NWACC Clubs",
      links: [
        {
          name: "Columbia River Corvettes",
          url: "https://columbiarivercorvettes.com/",
        },
      ],
    },
    otherWesternClubs: {
      header: "Other Western US Corvette Clubs",
      links: [
        {
          name: "",
          url: "",
        },
      ],
    },
    canadianClubs: {
      header: "Canadian Corvette Clubs",
      links: [
        {
          name: "",
          url: "",
        },
      ],
    },
    internationalClubs: {
      header: "International Corvette Clubs",
      links: [
        {
          name: "",
          url: "",
        },
      ],
    },
    forums: {
      header: "Forums",
      links: [
        {
          name: "",
          url: "",
        },
      ],
    },
    registries: {
      header: "Registries",
      links: [
        {
          name: "",
          url: "",
        },
      ],
    },
    organizations: {
      header: "Organizations",
      links: [
        {
          name: "",
          url: "",
        },
      ],
    },
    magazines: {
      header: "Magazines",
      links: [
        {
          name: "",
          url: "",
        },
      ],
    },
    other: {
      header: "Other",
      links: [
        {
          name: "",
          url: "",
        },
      ],
    },
    racing: {
      header: "Racing",
      links: [
        {
          name: "",
          url: "",
        },
      ],
    },
  },
};

export default Strings;
