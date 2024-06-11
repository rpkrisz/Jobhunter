import {UserIcon} from "../../Components/FawIcons";

export default function Applicant({user}) {
  const applicant = user.user;
  return (
    <tr className="text-start">
      <td>
        <div className="flex items-center justify-start  gap-3">
          <div className=" mask mask-squircle w-12 h-12 flex justify-center items-center">
            <UserIcon size="2xl" />
          </div>
          <p className="font-bold">{applicant.fullname}</p>
        </div>
      </td>
      <td>{applicant.email}</td>
      <td>{applicant.role}</td>
    </tr>
  );
}
