import AdvertisementItem from "./AdvertisementItem.jsx";
import {useGetJobsQuery} from "../../state/jobApiSlice.js";
import InfinitLoading from "../../Components/InfinitLoading.jsx";
import {useState} from "react";
import Succes from "../../Components/Feedbacks/Succes.jsx";
import Error from "../../Components/Feedbacks/Error.jsx";
import {selectUserId} from "../../state/authSlice.js";
import {useSelector} from "react-redux";

export default function AdvertisementList({setSelectedJob}) {
  const userId = useSelector(selectUserId);
  const {data, isSuccess} = useGetJobsQuery({userId: userId}); // add user ID
  const [feedBack, setFeedBack] = useState({error: false, succes: false});

  function closeFeedBack() {
    setFeedBack({error: false, succes: false});
  }

  return (
    <>
      {(feedBack.error || feedBack.succes) && (
        <div className="toast toast-end toast-bottom">
          {feedBack.succes && (
            <Succes message="Advertisement successfully deleted!" closeFunction={closeFeedBack} />
          )}
          {feedBack.error && (
            <Error message="Something went wrong! Try again!" closeFunction={closeFeedBack} />
          )}
        </div>
      )}
      {!isSuccess ? (
        <InfinitLoading />
      ) : (
        <div className="container ">
          <div className="divider divider-primary divider-start">Jobs</div>
          <ul>
            {data.map(job => (
              <AdvertisementItem
                key={job.id}
                job={job}
                setSelectedJob={setSelectedJob}
                setFeedBack={setFeedBack}
                closeFeedBack={closeFeedBack}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
