import AdvertisementItem from "./AdvertisementItem.jsx";
import {useGetJobsQuery} from "../../state/jobApiSlice.js";
import InfinitLoading from "../../Components/InfinitLoading.jsx";
import {useState} from "react";
import Succes from "../../Components/Feedbacks/Succes.jsx";
import Error from "../../Components/Feedbacks/Error.jsx";
import {selectUserId} from "../../state/authSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {selectFilter, selectPageCount, changePageTo} from "../../state/jobSlice.js";

export default function AdvertisementList({setSelectedJob}) {
  const filter = useSelector(selectFilter);
  const userId = useSelector(selectUserId);
  const {data, isSuccess} = useGetJobsQuery({
    limit: filter.limit,
    skip: filter.skip,
    userId: userId,
  });
  const [feedBack, setFeedBack] = useState({error: false, succes: false});
  const dispatch = useDispatch();
  const pageCount = useSelector(selectPageCount);
  const pages = [];

  for (let index = 0; index < pageCount; index++) {
    pages.push(index + 1);
  }

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
            {data.data.map(job => (
              <AdvertisementItem
                key={job.id}
                job={job}
                setSelectedJob={setSelectedJob}
                setFeedBack={setFeedBack}
                closeFeedBack={closeFeedBack}
              />
            ))}
          </ul>
          <div className="join m-3 flex justify-center">
            {pages.map(index => {
              return (
                <input
                  key={index}
                  className="join-item btn btn-square"
                  type="radio"
                  name="options"
                  aria-label={index}
                  onClick={() => dispatch(changePageTo(index))}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
