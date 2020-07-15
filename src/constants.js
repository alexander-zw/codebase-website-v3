const Theme = Object.freeze({
  DEFAULT: 0,
  LIGHT: 1,
})

const BaseBehavior = Object.freeze({
  OWNERSHIP: 0,
  COMMUNICATE: 1,
  GIVE: 2,
  PEOPLE: 3,
  GROWTH: 4,
})

const LogoSize = Object.freeze({
  DEFAULT: 0,
  SMALL: 1,
  LARGE: 2,
})

const Companies = [
  {
    name: "google",
    src: "google.png",
    size: LogoSize.DEFAULT,
  },
  {
    name: "facebook",
    src: "facebook.png",
    size: LogoSize.LARGE,
  },
  {
    name: "amazon",
    src: "amazon.png",
    size: LogoSize.DEFAULT,
  },
  {
    name: "microsoft",
    src: "microsoft.png",
    size: LogoSize.LARGE,
  },
  {
    name: "stripe",
    src: "stripe.png",
    size: LogoSize.SMALL,
  },
  {
    name: "robinhood",
    src: "robinhood.png",
    size: LogoSize.LARGE,
  },
  {
    name: "jane street",
    src: "janestreet.png",
    size: LogoSize.DEFAULT,
  },
  {
    name: "blend",
    src: "blend.png",
    size: LogoSize.DEFAULT,
  },
  {
    name: "rubrik",
    src: "rubrik.png",
    size: LogoSize.DEFAULT,
  },
  {
    name: "ea",
    src: "ea.png",
    size: LogoSize.SMALL,
  },
  {
    name: "adobe",
    src: "adobe.png",
    size: LogoSize.DEFAULT,
  },
  {
    name: "airbnb",
    src: "airbnb.png",
    size: LogoSize.DEFAULT,
  },
  {
    name: "lambda",
    src: "lambdaschool.png",
    size: LogoSize.DEFAULT,
  },
  {
    name: "linkedin",
    src: "linkedin.png",
    size: LogoSize.DEFAULT,
  },
  {
    name: "github",
    src: "github.png",
    size: LogoSize.DEFAULT,
  },
  {
    name: "salesforce",
    src: "salesforce.png",
    size: LogoSize.SMALL,
  },
  {
    name: "mongo",
    src: "mongoDB.png",
    size: LogoSize.LARGE,
  },
  {
    name: "spotify",
    src: "spotify.png",
    size: LogoSize.DEFAULT,
  },
  {
    name: "workday",
    src: "workday.png",
    size: LogoSize.DEFAULT,
  },
]

export { Theme, BaseBehavior, Companies, LogoSize }
