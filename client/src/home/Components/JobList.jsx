import JobItem from "./JobItem";

export default function JobList({jobs}) {
  return (
    <div className="container ">
      <div className="divider divider-primary divider-start">Jobs</div>
      <ul>
        {jobs.map(job => (
          <JobItem key={job.id} job={job} />
        ))}
      </ul>
    </div>
  );
}
