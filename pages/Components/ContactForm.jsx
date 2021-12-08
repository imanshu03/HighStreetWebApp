import react from 'react';
import GoogleMapReact from 'google-map-react';
import * as yup from 'yup';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ContactForm = () => {
  const constraint = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Name is a required field')
      .min(3, 'Name must be at least 3 characters'),
    age: yup
      .number()
      .required('Please supply your age')
      .min(18, 'You must be at least 18 years')
      .max(60, 'You must be at most 60 years'),
    email: yup.string().email().required('Email is a required field'),
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm text-center">
          <h1 className="div-heading display-4">Contact US</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h5>
            Address:{' '}
            <small className="text-muted">High Streat, Peer Muchalla</small>
          </h5>
          <h5>
            Email: <small className="text-muted">Shubham@gmail.com</small>
          </h5>
          <h5>
            Contact:{' '}
            <small className="text-muted">
              +91 77009696967 || +91 7837770661
            </small>
          </h5>
          <p>
            <div style={{ height: '400px', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={constraint.center}
                defaultZoom={constraint.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div>
          </p>
        </div>
        <div className="col-md-6">
          <form className="mt-6">
            <div className="form-group mb-3">
              {/* <label>FirstName</label> */}
              <input
                type="name"
                name="fullName"
                label="fullName"
                className="form-control"
                id="exampleInputFirstName"
                placeholder="Full Name"
              />
            </div>
            <div className="form-group mb-3">
              {/* <label>Mobile</label> */}
              <input
                type="mobile"
                className="form-control"
                id="mobileInput"
                aria-describedby="mobileHelp"
                placeholder="Mobile Number"
              />
            </div>
            <div className="form-group  mb-3">
              {/* <label>Email Address</label> */}
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group  mb-3">
              <textarea
                className="form-control"
                aria-label="With textarea"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-warning btn-lg btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
