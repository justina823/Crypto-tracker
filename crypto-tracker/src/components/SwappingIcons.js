import { useState } from "react";
import { AiOutlineStar, AiTwotoneStar} from "react-icons/ai";
import './SwappingIcons.css'
export default function SwappingIcons() {
    const [icon, setIcon] = useState("unFav");

    const changeIcon = (state) => {
        if (state === "unFav") {
            return "Fav";
        }
        return "unFav";
    };

    return (
        <div>
            <button onClick={() => setIcon((old) => changeIcon(old))}>
                {" "}
                {icon === "unFav" ? <AiOutlineStar /> : <AiTwotoneStar />}
           {" "}</button>
            
        </div>
    );
}