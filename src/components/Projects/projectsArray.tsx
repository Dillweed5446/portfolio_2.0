import ReactIcon from '../../images/Icons/react_js.svg'
import Chartjs from '../../images/Icons/chart_js.png'
import CSS3 from '../../images/Icons/css3.svg'
// import Github from '../../images/Icons/github.svg'
import JavaScript from '../../images/Icons/javscript.svg'
import MariaDB from '../../images/Icons/mariadb.svg'
import MaterialUI from '../../images/Icons/material-ui-1.svg'
import Nextjs from '../../images/Icons/next-js.svg'
import Nodejs from '../../images/Icons/nodejs-icon.svg'
import StyledComponents from '../../images/Icons/styled-components-1.svg'
import TypeScript from '../../images/Icons/typescript.svg'
import Portfolio2 from '../../images/Screenshots/portfolio2.png'
import Portfolio1 from '../../images/Screenshots/portfolio1.png'
import HuiWaa from '../../images/Screenshots/huiwaa.png'

export const ProjectsArray: Array<any> = [
  {
    title: 'this.portfolio',
    image: Portfolio2,
    icons: [{ icon: ReactIcon, tech: 'React' },
      { icon: TypeScript, tech: 'TypeScript' },
      { icon: Nodejs, tech: 'Node.js' },
      { icon: CSS3, tech: 'CSS3' },
      { icon: StyledComponents, tech: 'Styled-Components' }
    ],
    demoHref: '/#top',
    codeHref: 'https://github.com/Dillweed5446/portfolio_2.0'
  },
  {
    title: 'Library CRUD',
    image: '',
    icons: [{ icon: ReactIcon, tech: 'React' },
      { icon: JavaScript, tech: 'JavaScript' },
      { icon: Nodejs, tech: 'Node.js' },
      { icon: MariaDB, tech: 'MariaDB' },
      { icon: CSS3, tech: 'CSS3' }
    ],
    demoHref: 'Deploy me!',
    codeHref: 'https://github.com/Dillweed5446/library_crud'
  },
  {
    title: 'Hui Wa\'a Weather',
    image: HuiWaa,
    icons: [{ icon: ReactIcon, tech: 'React' },
      { icon: JavaScript, tech: 'JavaScript' },
      { icon: Nextjs, tech: 'Next.js' },
      { icon: MaterialUI, tech: 'Material-UI' },
      { icon: CSS3, tech: 'CSS3' },
      { icon: Chartjs, tech: 'Chart.js' }
    ],
    demoHref: 'https://pdill.dev/paddleWrapper',
    codeHref: 'https://github.com/Dillweed5446/pdill.dev/tree/master/pdill.dev/components/Paddler_App'
  },
  {
    title: 'MotherCupboard',
    image: '',
    icons: [{ icon: ReactIcon, tech: 'React-Native' },
      { icon: JavaScript, tech: 'JavaScript' },
      { icon: CSS3, tech: 'CSS3' },
      { icon: MaterialUI, tech: 'Material-UI' }
    ],
    demoHref: 'https://mothercupboard.com',
    codeHref: 'https://github.com/aptlyundecided/mc-frontend'
  },
  {
    title: 'Portfolio 1.0.0',
    image: Portfolio1,
    icons: [{ icon: ReactIcon, tech: 'React' },
      { icon: JavaScript, tech: 'JavaScript' },
      { icon: Nextjs, tech: 'Next.js' },
      { icon: MaterialUI, tech: 'Material-UI' },
      { icon: CSS3, tech: 'CSS3' }],
    demoHref: 'https://pdill.dev',
    codeHref: 'https://github.com/Dillweed5446/pdill.dev'
  }
]
