import { useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../../main";
import "../../css/JobDetails.css";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const navigateTo = useNavigate();
  const { isAuthorized, user } = useContext(Context);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/job/${id}`, { withCredentials: true })
      .then((res) => setJob(res.data.job))
      .catch(() => navigateTo("/notfound"));
  }, []);

  if (!isAuthorized) {
    navigateTo("/login");
  }

  return (
    <section className="job-details-container">
      <h2 className="job-title">Job Details</h2>
      <div className="job-info">
        <div>
          <strong>Title:</strong> {job.title}
        </div>
        <div>
          <strong>Category:</strong> {job.category}
        </div>
        <div>
          <strong>Country:</strong> {job.country}
        </div>
        <div>
          <strong>City:</strong> {job.city}
        </div>
        <div>
          <strong>Location:</strong> {job.location}
        </div>
        <div>
          <strong>Description:</strong> {job.description}
        </div>
        <div>
          <strong>Salary:</strong>{" "}
          {job.salaryFrom ? `${job.salaryFrom} - ${job.salaryTo}` : job.fixedSalary}
        </div>
      </div>

      {/* Apply Button */}
      {user && user.role !== "Employer" && (
        <div className="mt-10 text-center">
          <Link
            to={`/application/${job._id}`}
            className="inline-block bg-blue-600 text-white px-10 py-3 rounded-lg text-lg font-medium shadow-lg hover:bg-blue-700 hover:shadow-xl transition-transform transform hover:scale-105"
          >
            Apply Now
          </Link>
        </div>
      )}
    </section>
  );
};

export default JobDetails;