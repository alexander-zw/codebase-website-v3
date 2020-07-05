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

export const Exec = [
	{
	  name: "raymond guo",
	  position: "president",
	  src: "raymond.jpg",
	},
	{
	  name: "Isabelle Zhou",
	  position: "VP of Projects",
	  src: "isabelle.jpg",
	},
	{
	  name: "Carolyn Duan",
	  position: "VP of Internal",
	  src: "carolyn.jpg",
	},
	{
	  name: "Andrew Kou",
	  position: "VP of Internal",
	  src: "andrew.jpg",
	},
	{
	  name: "Rachel Lau",
	  position: "VP of External",
	  src: "rachel.jpg",
	},
	{
	  name: "Julia Wang",
	  position: "VP of External",
	  src: "julia.jpg",
	},
  ]

export { Theme, BaseBehavior }
