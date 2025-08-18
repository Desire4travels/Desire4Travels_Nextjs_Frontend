import React, { useState } from "react";
import styles from "../styles/ServiceProviders.module.css";

const providerTypes = {
  hotel: "Hotel Partner",
  cab: "Cab Service Provider",
  adventure: "Adventure Activity Provider",
  bus: "Intercity Bus Operator",
};

const initialFormValues = {
  hotel: {
    hotelName: "",
    city: "",
    address: "",
    contactPerson: "",
    contactMobile: "",
    stayType: "",
    roomsAvailable: "",
    roomCategories: "",
    facilities: "",
    meals: "",
    onlineLink: "",
  },
  cab: {
    company: "",
    baseCity: "",
    baseAddress: "",
    contactPerson: "",
    contactMobile: "",
    vehicleTypes: "",
    intercityLocal: "",
    intercityCoverage: "",
  },
  adventure: {
    agencyName: "",
    contactPerson: "",
    contactMobile: "",
    location: "",
    activityTypes: "",
  },
  bus: {
    companyName: "",
    baseCity: "",
    baseAddress: "",
    contactPerson: "",
    contactMobile: "",
    routesCovered: "",
    busType: "",
    emergencyContact: "",
  },
};

const ServiceProviders = () => {
  const [selected, setSelected] = useState("hotel");
  const [forms, setForms] = useState(initialFormValues);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForms({
      ...forms,
      [selected]: {
        ...forms[selected],
        [name]: value,
      },
    });
  };

  async function saveProvider(type, data) {
    const res = await fetch(
      `https://desire4travels-1.onrender.com/service-providers`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, data }),
      }
    );

    if (!res.ok) {
      const { error } = await res.json();
      throw new Error(error || "Request failed");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = forms[selected];
    const emptyFields = Object.entries(formData).filter(
      ([_, val]) => val.trim() === ""
    );

    if (emptyFields.length > 0) {
      setErrorMessage("Please fill all fields before submitting.");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    try {
      await saveProvider(selected, formData);

      setSuccessMessage("Form submitted successfully!");
      setForms(initialFormValues);

      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      setErrorMessage("Submission failed. Please try again.");
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  /** ---------- Render helpers ---------- */
  const renderHotelForm = () => (
    <>
      <label>
        Hotel Name
        <input
          name="hotelName"
          value={forms.hotel.hotelName}
          onChange={handleChange}
        />
      </label>

      <label>
        City
        <input name="city" value={forms.hotel.city} onChange={handleChange} />
      </label>

      <label className={styles.fullWidth}>
        Address
        <textarea
          name="address"
          value={forms.hotel.address}
          onChange={handleChange}
        />
      </label>

      <label>
        Contact Person Name &amp; Mobile
        <input
          name="contactPerson"
          placeholder="Name"
          value={forms.hotel.contactPerson}
          onChange={handleChange}
        />
        <input
          name="contactMobile"
          placeholder="Mobile"
          value={forms.hotel.contactMobile}
          onChange={handleChange}
        />
      </label>

      <label>
        Type of Stay Offered
        <input
          name="stayType"
          placeholder="Homestay, Budget Hotel, Luxury..."
          value={forms.hotel.stayType}
          onChange={handleChange}
        />
      </label>

      <label>
        Number of Rooms Available
        <input
          name="roomsAvailable"
          value={forms.hotel.roomsAvailable}
          onChange={handleChange}
        />
      </label>

      <label>
        Room Categories (e.g., Standard ₹, Deluxe ₹)
        <input
          name="roomCategories"
          value={forms.hotel.roomCategories}
          onChange={handleChange}
        />
      </label>

      <label>
        Facilities Provided
        <input
          name="facilities"
          placeholder="Wi‑Fi, Parking..."
          value={forms.hotel.facilities}
          onChange={handleChange}
        />
      </label>

      <label>
        Meal Options
        <input
          name="meals"
          placeholder="Breakfast, Lunch, Dinner"
          value={forms.hotel.meals}
          onChange={handleChange}
        />
      </label>

      <label>
        Any Online Link
        <input
          name="onlineLink"
          placeholder="Website / Google listing"
          value={forms.hotel.onlineLink}
          onChange={handleChange}
        />
      </label>
    </>
  );

  const renderCabForm = () => (
    <>
      <label>
        Company
        <input
          name="company"
          value={forms.cab.company}
          onChange={handleChange}
        />
      </label>

      <label>
        Base Location City
        <input
          name="baseCity"
          value={forms.cab.baseCity}
          onChange={handleChange}
        />
      </label>

      <label>
        Base Location Address
        <textarea
          name="baseAddress"
          value={forms.cab.baseAddress}
          onChange={handleChange}
        />
      </label>

      <label>
        Contact Person Name &amp; Mobile
        <input
          name="contactPerson"
          placeholder="Name"
          value={forms.cab.contactPerson}
          onChange={handleChange}
        />
        <input
          name="contactMobile"
          placeholder="Mobile"
          value={forms.cab.contactMobile}
          onChange={handleChange}
        />
      </label>

      <label>
        Vehicle Types Offered
        <input
          name="vehicleTypes"
          placeholder="Sedan, SUV..."
          value={forms.cab.vehicleTypes}
          onChange={handleChange}
        />
      </label>

      <label>
        Intercity / Local
        <input
          name="intercityLocal"
          placeholder="Intercity / Local"
          value={forms.cab.intercityLocal}
          onChange={handleChange}
        />
      </label>

      <label>
        Intercity Coverage
        <input
          name="intercityCoverage"
          value={forms.cab.intercityCoverage}
          onChange={handleChange}
        />
      </label>
    </>
  );

  const renderAdventureForm = () => (
    <>
      <label>
        Agency Name
        <input
          name="agencyName"
          value={forms.adventure.agencyName}
          onChange={handleChange}
        />
      </label>

      <label>
        Contact Person Name &amp; Mobile
        <input
          name="contactPerson"
          placeholder="Name"
          value={forms.adventure.contactPerson}
          onChange={handleChange}
        />
        <input
          name="contactMobile"
          placeholder="Mobile"
          value={forms.adventure.contactMobile}
          onChange={handleChange}
        />
      </label>

      <label>
        Location
        <input
          name="location"
          value={forms.adventure.location}
          onChange={handleChange}
        />
      </label>

      <label>
        Types of Activities Offered
        <input
          name="activityTypes"
          placeholder="Paragliding, Rafting..."
          value={forms.adventure.activityTypes}
          onChange={handleChange}
        />
      </label>
    </>
  );

  const renderBusForm = () => (
    <>
      <label>
        Company Name
        <input
          name="companyName"
          value={forms.bus.companyName}
          onChange={handleChange}
        />
      </label>

      <label>
        Base Location City
        <input
          name="baseCity"
          value={forms.bus.baseCity}
          onChange={handleChange}
        />
      </label>

      <label>
        Base Location Address
        <textarea
          name="baseAddress"
          value={forms.bus.baseAddress}
          onChange={handleChange}
        />
      </label>

      <label>
        Contact Person Name &amp; Mobile
        <input
          name="contactPerson"
          placeholder="Name"
          value={forms.bus.contactPerson}
          onChange={handleChange}
        />
        <input
          name="contactMobile"
          placeholder="Mobile"
          value={forms.bus.contactMobile}
          onChange={handleChange}
        />
      </label>

      <label>
        Route(s) Covered
        <input
          name="routesCovered"
          placeholder="Delhi–Manali, ..."
          value={forms.bus.routesCovered}
          onChange={handleChange}
        />
      </label>

      <label>
        Bus Type
        <input
          name="busType"
          placeholder="Volvo, AC, Sleeper..."
          value={forms.bus.busType}
          onChange={handleChange}
        />
      </label>

      <label>
        Emergency Contact Number
        <input
          name="emergencyContact"
          value={forms.bus.emergencyContact}
          onChange={handleChange}
        />
      </label>
    </>
  );

  const renderForm = () => {
    switch (selected) {
      case "hotel":
        return renderHotelForm();
      case "cab":
        return renderCabForm();
      case "adventure":
        return renderAdventureForm();
      case "bus":
        return renderBusForm();
      default:
        return null;
    }
  };

  return (
    <>
      <header className={styles.customHeader}>
        <div className={styles.headerContent}>
          <h4 className={styles.headerTitle}>Partner With Us</h4>
        </div>
      </header>

      <div className={styles.container}>
        <label className={styles.dropdownLabel}>
          Select provider type&nbsp;
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className={styles.dropdown}
          >
            {Object.entries(providerTypes).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </label>

        <form
          id="fom"
          className={`${styles.form} ${styles.card}`}
          onSubmit={handleSubmit}
        >
          {renderForm()}
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
      {successMessage && (
        <div className={styles.centerPopup}>{successMessage}</div>
      )}

      {errorMessage && <div className={styles.popupError}>{errorMessage}</div>}
    </>
  );
};

export default ServiceProviders;
