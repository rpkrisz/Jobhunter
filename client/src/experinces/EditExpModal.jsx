import ExperienceRow from "./Components/ExperienceRow";
import {FloppyDiskIcon} from "../Components/FawIcons";
import {addExperience, selectExperiences} from "../state/experienceSlice";
import {useSelector, useDispatch} from "react-redux";
import {
  useModifyExperienceMutation,
  useCreateExperienceMutation,
} from "../state/experienceApiSlice";

export default function EditExpModal() {
  const [modifyExp] = useModifyExperienceMutation();
  const [createExp] = useCreateExperienceMutation();
  const experiences = useSelector(selectExperiences);
  const dispatch = useDispatch();

  const handelAddRow = () => {
    dispatch(addExperience());
  };

  const handelSave = () => {
    const savedata = experiences.filter(
      exp => exp.company !== "" && exp.title !== "" && exp.interval !== ""
    );

    for (const experience of savedata) {
      const newExp = {
        company: experience.company,
        title: experience.title,
        interval: experience.interval,
      };

      if (experience.id) {
        modifyExp({
          id: experience.id,
          body: newExp,
        });
      } else {
        createExp({
          body: newExp,
        });
      }
    }
  };

  return (
    <dialog id="EditExpModal" className="modal">
      <div className="modal-box">
        <div className="flex justify-between">
          <h3 className="font-bold text-lg">Edit Experiences!</h3>
          <div>
            <button onClick={handelAddRow}>+</button>
            <button onClick={handelSave}>
              <FloppyDiskIcon />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Title</th>
                <th>Interval</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {experiences.map((experience, index) => {
                return <ExperienceRow key={index} experience={experience} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop opacity-30">
        <button className="cursor-default">close</button>
      </form>
    </dialog>
  );
}
