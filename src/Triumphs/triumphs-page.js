import ProgressBars from "../Components/progressBars";
import ClassCards from "../Components/classCards";
import AppNavBar from "../Components/appNavBar";


export default function TriumphPage() {
  var classes = [1, 2, 3]
  return (
    <>
      <ProgressBars />
      {classes.map(item => (
        <ClassCards />
      ))}
    </>
  )
}