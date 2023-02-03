import { LaunchDetailModal } from "./LaunchDetailModal";

export const LaunchCard = ({ launchDetail }) => {
  return (
    <>
      <div
        className="card border border-0"
        data-bs-toggle="modal"
        data-bs-target={`#Modal${launchDetail.flight_number}`}
      >
        <div className="card-body">
          <h5 className="card-title lead">
            Flight Number: {launchDetail.flight_number}
          </h5>
          <h6 className="card-text mb-2 text-muted">
            Mission Name: {launchDetail.mission_name}
          </h6>

          <p className="card-text">Launch Year: {launchDetail.launch_year}</p>
        </div>
      </div>
      <LaunchDetailModal launchDetail={launchDetail} />
    </>
  );
};
