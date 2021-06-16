import {GrEmergency} from 'react-icons/gr'
import { FaMoneyCheckAlt } from 'react-icons/fa'
import { FaSyringe } from 'react-icons/fa';

const data= [
    {
      id: "1",
      dcount: "45",
      label:  "Vaccine",
      icon: <FaSyringe color="white"/>,
      percent:"45%"
      
    },
    {
        id: "2",
        dcount: "11",
        label:  "Surgery",
        icon: <FaMoneyCheckAlt color="white"/>,
        percent:"15%"
    },
    {
        id: "3",
        dcount: "410",
        label:  "Income",
        icon: <GrEmergency color="white"/>,
        percent:"65%"
    },

];
export default data