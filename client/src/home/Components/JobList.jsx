import JobItem from "./JobItem";

export default function JobList({jobs}) {
  return (
    <div className="container ">
      <div className="divider divider-primary divider-start">Jobs</div>
      <ul className="flex flex-col justify-start gap-4">
        {jobs.map(job => (
          <JobItem key={job.id} job={job} />
        ))}
      </ul>
    </div>
  );
}
