import {useSelector} from "react-redux";
import {selectTitle} from "../state/titleSlice";

export default function Title() {
  const title = useSelector(selectTitle);
  return <h1 className="bg-base-200 flex-grow flex justify-start mb-5 p-2">{title}</h1>;
}
