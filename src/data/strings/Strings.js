import placeHolder from "../../assets/images/placeholder-headshot.png";
import membershipList from "../../assets/files/NWACCClubMembership.pdf";
import costToBelong from "../../assets/files/TheCostToBelong_20240519.pdf";
import justWhatIsIt from "../../assets/files/JustWhatIsIt_20240519.pdf";
import advantageOfClubMembership from "../../assets/files/AdvantageOfClubMembership_20240519.pdf";
import speedEventGuidelines from "../../assets/files/NWACCSpeedEventGuidelines_Old.pdf";
import competitionCode from "../../assets/files/NWACCCompetitionCode_Old.pdf";
import showNShine from "../../assets/files/NWACCShowNShine_Old.pdf";
import judgesSheet from "../../assets/files/JudgesBriefingSheet.pdf";
import byLaws from "../../assets/files/ByLaws.pdf";
import constitution from "../../assets/files/Constitution.pdf";
import contactUs from "../../assets/files/ContactUs.pdf";

const Strings = {
  pdfDownload: "Download PDF",
  people: "Notable People",
  officersString: "Officers",
  committeesString: "Committees",
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
      name: "Ken Jones",
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
      title: "Member at Large Rep.",
      name: "Don Goff",
      picture: placeHolder,
      index: 0,
    },
    {
      title: "Car Show Chair",
      name: "Meagan Renick",
      picture: placeHolder,
      index: 1,
    },
    {
      title: "Autocross Chair",
      name: "Rob Spring",
      picture: placeHolder,
      index: 2,
    },
    {
      title: "Insurance Chair",
      name: "Dave Kaiser",
      picture: placeHolder,
      index: 3,
    },
  ],
  importantDocuments: [
    {
      name: "Constitution",
      url: constitution,
      index: 0,
    },
    {
      name: "By-Laws",
      url: byLaws,
      index: 1,
    },
    // {
    //   name: "Reimbursement Form",
    //   url: "http://nwacconline.com/reimbursement_form.html",
    //   index: 2,
    // },
    {
      name: "Contact Us",
      url: contactUs,
      index: 3,
    },
  ],
  autocross: {
    pageStrings: {
      header: "Autocross",
      documentsHeader: "Documents",
      eventsHeader: "Autocross Events",
      eventsText: "Future events will be represented here.",
    },
    eventsTable: {},
    eventsScoringTables: {},
    historicalScoringTables: [],
    documents: [
      {
        name: "Competition Code",
        url: competitionCode,
        index: 0,
      },
      {
        name: "Speed Event Guidelines",
        url: speedEventGuidelines,
        index: 1,
      },
    ],
  },
  membership: {
    pageStrings: {
      header: "Membership",
    },
    documents: [
      {
        name: "NWACC - Just what is it?",
        url: justWhatIsIt,
        index: 0,
      },
      {
        name: "Advantages of being an NWACC Club Member",
        url: advantageOfClubMembership,
        index: 1,
      },
      {
        name: "Membership Cost",
        url: costToBelong,
        index: 2,
      },
      {
        name: "Membership List",
        url: membershipList,
        index: 3,
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
        url: competitionCode,
        index: 0,
      },
    ],
    adminDocuments: [
      {
        name: "NWACC Show-n-Shine Program and Policies",
        url: showNShine,
        index: 0,
      },
      {
        name: "NWACC Shine-n-Show Judging Sheet",
        url: judgesSheet,
        index: 1,
      },
    ],
  },
  pages: [
    { name: "Home", path: "/", index: 0 },
    { name: "Autocross", path: "/autocross", index: 1 },
    { name: "Membership", path: "/membership", index: 2 },
    { name: "Show-n-Shine", path: "/shownshine", index: 3 },
    { name: "Important Documents", path: "/importantdocuments", index: 4 },
    {
      name: "External Links",
      path: "/externallinks",
      index: 5,
    },
    // TODO: Create page
    // {
    //   name: "In Memoriam",
    //   path: "http://nwacconline.com/In%20Memoriam.html",
    //   index: 5,
    // },
  ],
  scoreKeeper: {
    label: "Scorekeeper Registration",
    url: "https://scorekeeper.wwscc.org/register/nwacc2020/events",
  },
  facebook: {
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
          index: 0,
        },
        {
          name: "Corvettes de Olympia",
          url: "https://cdeo.clubexpress.com/",
          index: 1,
        },
        {
          name: "Corvette Marque Club of Seattle",
          url: "https://www.corvettemarqueclub.com/",
          index: 2,
        },
        {
          name: "Puget Sound Corvette Club",
          url: "https://pugetsoundcorvetteclub.com/",
          index: 3,
        },
        {
          name: "Rose City Corvettes",
          url: "https://www.rosecitycorvettes.org/",
          index: 4,
        },
        {
          name: "Willamette Valley Corvettes",
          url: "https://willamettevalleycorvettes.com/contact/",
          index: 5,
        },
        {
          name: "Glass Odyssey Corvette Club",
          url: "https://kitsapvettes.org/",
          index: 6,
        },
        {
          name: "Corvettes Unlimited of Bellingham",
          url: "https://corvettesunlimitedbham.com/",
          index: 7,
        },
      ],
    },
    otherWesternClubs: {
      header: "Other Western US Corvette Clubs",
      links: [
        {
          name: "Majestic Glass Corvette Club",
          url: "http://majesticglass.org/",
          index: 0,
        },
        {
          name: "Yakima Valley Vettes",
          url: "http://www.yakimavalleyvettes.com/",
          index: 1,
        },
        {
          name: "Anchorage Corvette Association",
          url: "https://www.alaskacorvette.com/",
          index: 2,
        },
        {
          name: "Spokane Corvette Club",
          url: "https://www.spokanecorvetteclub.org/",
          index: 3,
        },
        {
          name: "Tacoma Corvette Club",
          url: "https://www.tacomacorvette.com/",
          index: 4,
        },
        {
          name: "Cascade Corvette Club",
          url: "https://cascadecorvetteclub.com/",
          index: 5,
        },
      ],
    },
    canadianClubs: {
      header: "Canadian Corvette Clubs",
      links: [
        {
          name: "British Columbia Corvette Club",
          url: "https://www.bccorvetteclub.ca/",
          index: 0,
        },
        {
          name: "Victoria Corvette Club",
          url: "https://www.victoriacorvetteclub.org/home.html",
          index: 1,
        },
        {
          name: "Riverside Corvette Club",
          url: "http://www.riversidecorvetteclub.org/",
          index: 2,
        },
        {
          name: "Kelowna Corvette Club",
          url: "https://www.kelownacorvetteclub.com/",
          index: 4,
        },
      ],
    },
    internationalClubs: {
      header: "International Corvette Clubs",
      links: [
        {
          name: "Corvette Club Sweden",
          url: "https://clubcorvette.se/index.html",
          index: 0,
        },
        {
          name: "Corvettes of Melbourne Australia",
          url: "https://corvettesofmelbourne.com/",
          index: 1,
        },
        {
          name: "Corvette Club of Poland",
          url: "http://www.corvette.pl/",
          index: 2,
        },
        {
          name: "Corvette Club of the UK",
          url: "https://www.corvetteclub.org.uk/",
          index: 3,
        },
        {
          name: "Czech Corvette Club",
          url: "http://www.corvette.cz/",
          index: 4,
        },
        {
          name: "Corvette Club of South Africa",
          url: "http://www.corvette.co.za/",
          index: 5,
        },
      ],
    },
    forums: {
      header: "Forums",
      links: [
        {
          name: "Corvette Forum",
          url: "https://www.corvetteforum.com/",
          index: 0,
        },
        {
          name: "ZR1 Net",
          url: "https://www.zr1.net/",
          index: 1,
        },
        {
          name: "Corvette Action Center",
          url: "https://www.corvetteactioncenter.com/",
          index: 2,
        },
        {
          name: "The Vette Net",
          url: "https://www.andysautosport.com/auto_parts/chevrolet_corvette.html",
          index: 3,
        },
      ],
    },
    registries: {
      header: "Registries",
      links: [
        {
          name: "C5 Registry",
          url: "http://www.c5registry.com/",
          index: 0,
        },
        {
          name: "Grand Sport Registry",
          url: "https://www.grandsportregistry.com/",
          index: 1,
        },
      ],
    },
    organizations: {
      header: "Organizations",
      links: [
        {
          name: "National Corvette Museum",
          url: "https://www.corvettemuseum.org/",
          index: 0,
        },
        {
          name: "NRCS",
          url: "https://www.ncrs.org/",
          index: 1,
        },
        {
          name: "SCCA",
          url: "https://www.scca.com/",
          index: 2,
        },
        {
          name: "SCCA - Pacific Northwest Region",
          url: "https://nwr-scca.org/",
          index: 3,
        },
        {
          name: "Canadian Council of Corvette Clubs",
          url: "https://www.bishop.ab.ca/cccc/",
          index: 4,
        },
      ],
    },
    magazines: {
      header: "Magazines",
      links: [
        {
          name: "Corvette Fever",
          url: "https://alancolvin.com/corvette-fever-magazine/",
          index: 0,
        },
        {
          name: "Vette Magazine",
          url: "https://www.corvette-mag.com/",
          index: 1,
        },
        {
          name: "Corvette Magazine",
          url: "https://www.corvettemagazine.com/",
          index: 2,
        },
        {
          name: "Vette Vues",
          url: "https://vette-vues.com/",
          index: 3,
        },
      ],
    },
    other: {
      header: "Other",
      links: [
        {
          name: "Corvette - Chevrolet's Official Web Site",
          url: "https://www.chevrolet.com/performance/corvette/z06",
          index: 0,
        },
        {
          name: "A Timeline for the Corvette",
          url: "https://www.caranddriver.com/features/g22035705/fully-vetted-the-visual-history-of-the-chevrolet-corvette/",
          index: 1,
        },
      ],
    },
    racing: {
      header: "Racing",
      links: [
        {
          name: "Corvette Racing",
          url: "https://corvetteracing.com/",
          index: 0,
        },
      ],
    },
  },
};

export default Strings;
