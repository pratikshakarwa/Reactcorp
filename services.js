import React from "react"
import {
 GiBank,
 GiHealthNormal,
  GiStabbedNote,
} from "react-icons/gi"
export default [
  {
    id: 1,
    icon: <GiBank className="icon" />,
    label: "Banking & Financial Services",
    text:
      " Investment Banking & Brokerage continues to be transformed by technological innovations including those in the areas of cloud, mobility and big data. While these innovations present opportunities, capital market  organizations are also faced.",
   url: `/solutions/BankAndFinance`,
    },
  {
    id: 2,
    icon: <GiHealthNormal className="icon" />,
    label: "Health & Life Sciences",
    text:
      " Healthcare and life sciences organizations face complex challenges to evolve their systems and processes to meet both regulatory and patient care demands. Increasing costs and limited budgets add to the complexity.",
  url: `/solutions/HelthAndLife`,
    },
  {
    id: 3,
    icon: <GiStabbedNote className="icon" />,
    label: "Media & Entertainment",
    text:
      "Internet of Things, digital convergence, and on-demand mobility are creating new opportunities for media companies. To meet the demands of a 24/7 connected world, you need a nimble partner with their finger on the pulse of new technology.",
 url: `/solutions/MediaAndEnter`,
    },
  
]
