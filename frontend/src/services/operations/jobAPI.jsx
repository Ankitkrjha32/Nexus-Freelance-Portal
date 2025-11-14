import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";

const { GET_ALL_JOBS_API, APPLY_JOB_API, GET_STUDENT_APPLICATIONS_API, DELETE_APPLICATION_API, POST_JOB_API } = endpoints;

export function getAllJobs() {
  return async (dispatch) => {
    const toastId = toast.loading("Loading jobs...");
    let result = [];
    try {
      const response = await apiConnector("GET", GET_ALL_JOBS_API);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      result = response.data.jobs;
      toast.success("Jobs loaded successfully");
    } catch (error) {
      console.log("GET_ALL_JOBS_API ERROR............", error);
      toast.error(error?.response?.data?.message || "Could not fetch jobs");
    }
    toast.dismiss(toastId);
    return result;
  };
}

export function applyForJob(applicationData) {
  return async (dispatch) => {
    const toastId = toast.loading("Submitting application...");
    let result = null;
    try {
      const response = await apiConnector("POST", APPLY_JOB_API, applicationData, {
        "Content-Type": "multipart/form-data",
      });

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      result = response.data;
      toast.success("Application submitted successfully!");
    } catch (error) {
      console.log("APPLY_JOB_API ERROR............", error);
      toast.error(error?.response?.data?.message || "Could not submit application");
    }
    toast.dismiss(toastId);
    return result;
  };
}

export function getStudentApplications() {
  return async (dispatch) => {
    const toastId = toast.loading("Loading applications...");
    let result = [];
    try {
      const response = await apiConnector("GET", GET_STUDENT_APPLICATIONS_API);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      result = response.data.applications;
      toast.success("Applications loaded successfully");
    } catch (error) {
      console.log("GET_STUDENT_APPLICATIONS_API ERROR............", error);
      toast.error(error?.response?.data?.message || "Could not fetch applications");
    }
    toast.dismiss(toastId);
    return result;
  };
}

export function deleteApplication(applicationId) {
  return async (dispatch) => {
    const toastId = toast.loading("Deleting application...");
    let result = false;
    try {
      const response = await apiConnector("DELETE", `${DELETE_APPLICATION_API}/${applicationId}`);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      result = true;
      toast.success("Application deleted successfully");
    } catch (error) {
      console.log("DELETE_APPLICATION_API ERROR............", error);
      toast.error(error?.response?.data?.message || "Could not delete application");
    }
    toast.dismiss(toastId);
    return result;
  };
}

export function postJob(jobData, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Posting job...");
    let result = null;
    try {
      const response = await apiConnector("POST", POST_JOB_API, jobData, {
        "Content-Type": "multipart/form-data",
      });

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      result = response.data;
      toast.success("Job posted successfully!");
      navigate("/my-posted-jobs");
    } catch (error) {
      console.log("POST_JOB_API ERROR............", error);
      toast.error(error?.response?.data?.message || "Could not post job");
    }
    toast.dismiss(toastId);
    return result;
  };
}
