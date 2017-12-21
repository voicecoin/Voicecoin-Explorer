import React from 'react';
import { Link } from 'react-router-dom';

const MessageToContributors = () => {
  return (
    <React.Fragment>
      <div className="col-12">
        <h3>JOIN TOKEN SALE</h3>
      </div>

      <div className="col-6 text-center">
        <p>We are honored you chose to contribute to our project and want to welcome you to the eHarvestHub family. For the pre-ICO we will be accepting ETH as contribution. The address where you can send your contributions will be published a couple of days prior to the pre-ICO start date.</p>
      </div>
      <div className="col-6 text-center">
        <p>Here is a video on how to convert your cryptocurrency to ETH. 
          <Link className="link" to="https://www.youtube.com/watch?v=N63Xz5dMIY4&feature=youtu.be">
            https://www.youtube.com/watch?v=N63Xz5dMIY4&feature=youtu.be
          </Link>
        </p>
      </div>
    </React.Fragment>
  );
}

export default MessageToContributors;
