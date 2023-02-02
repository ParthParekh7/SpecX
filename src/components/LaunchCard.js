import React from "react";

export const LaunchCard = ({ launchDetail }) => {
  return (
    <>
      <div className="card border border-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <div className="card-body">
          <h5 className="card-title">
            Flight Number: {launchDetail.flight_number}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Mission Name: {launchDetail.mission_name}
          </h6>

          <p className="card-text">Launch Year: {launchDetail.launch_year}</p>
        </div>
      </div>

      {/* <div className="modal" id="exampleModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{launchDetail.flight_number}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Mission Name: {launchDetail.mission_name}</p>
              <p>Mission Name: {launchDetail.mission_name}</p>
              <p>Launch Year: {launchDetail.launch_year}</p>
              <p>Launch Year: {launchDetail.launch_year}</p>
              <p>launch_date_utc : {new Date(launchDetail.launch_date_utc).toString()}</p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
