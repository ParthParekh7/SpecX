export const LaunchDetailModal = ({ launchDetail }) => {
  return (
    <div
      className="modal"
      id={`Modal${launchDetail.flight_number}`}
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              Flight Number: {launchDetail.flight_number}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Mission Name: {launchDetail.mission_name}</p>
            <p>Launch Year: {launchDetail.launch_year}</p>
            <p>Launch Year: {launchDetail.launch_year}</p>
            <p>
              Launch Date: {new Date(launchDetail.launch_date_utc).toString()}
            </p>
            <p>Launch Site Name: {launchDetail.launch_site.site_name}</p>
            <p>Rocket Type: {launchDetail.rocket.rocket_type}</p>
            <p>Rocket Name: {launchDetail.rocket.rocket_name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
