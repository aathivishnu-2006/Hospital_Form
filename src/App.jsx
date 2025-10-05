import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [formData, setFormData] = useState({
    date: "",
    timeRange: "",
    patientName: "",
    gender: "",
    email: "",
    phone: "",
    doctor: "",
    appointmentPriority: "",
    liveConsultant: "",
    status: "",
    nurse: "",
    caseId: "",
    encounterId: "",
    paymentMode: "Cash",
    paymentStatus: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [patients, setPatients] = useState([
    "John Doe",
    "Jane Smith",
    "Michael Brown",
  ]);
  const [newPatient, setNewPatient] = useState("");

  const doctors = [
    "George William",
    "Helen Jones",
    "Kofi Owusu Boahene",
    "Akwasi Owusu",
    "Samuel Mensah",
    "Kofi Boahene",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (let key in formData) {
      if (formData[key] === "" && !["email", "nurse"].includes(key)) {
        alert(`Please fill in the ${key} field`);
        return;
      }
    }
    setShowModal(true);
  };

  const handleAddPatient = () => {
    if (newPatient.trim() !== "") {
      setPatients([...patients, newPatient]);
      setFormData({ ...formData, patientName: newPatient });
      setNewPatient("");
    } else {
      alert("Please enter a patient name");
    }
  };

  return (
    <div>
      <div className="form-container">
        {/* Header */}
        <div className="form-header">
          <span>Patient Appointment Form</span>
        </div>

        {/* Select or Add Patient */}
        <div
          style={{
             display: "flex",
    justifyContent: "flex-start",  // align both to the left
    alignItems: "center",
    gap: "300px",                   // spacing between them
    marginBottom: "15px",
          }}
        >
          {/* Select Patient */}
          <div>
            <label>Select Patient *</label>
            <select
              value={formData.patientName}
              onChange={(e) =>
                setFormData({ ...formData, patientName: e.target.value })
              }
              required
            >
              <option value="">Select Patient</option>
              {patients.map((p, idx) => (
                <option key={idx} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          {/* Add New Patient */}
          <div>
            <label>Add New Patient *</label>
            <button onClick={handleAddPatient}>+ New Patient</button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="form-body">
          {/* Date */}
          <div>
            <label>Date *</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          {/* Time Range */}
          <div>
            <label>Time Range *</label>
            <input
              type="text"
              name="timeRange"
              placeholder="09:00 AM - 10:00 AM"
              value={formData.timeRange}
              onChange={handleChange}
              required
            />
          </div>

          {/* Patient Name (mandatory field after time range) */}
          <div>
            <label>Patient Name *</label>
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label>Gender *</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div>
            <label>Phone *</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Doctor */}
          <div>
            <label>Doctor *</label>
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              {doctors.map((doc, idx) => (
                <option key={idx} value={doc}>
                  {doc}
                </option>
              ))}
            </select>
          </div>

          {/* Appointment Priority */}
          <div>
            <label>Appointment Priority *</label>
            <select
              name="appointmentPriority"
              value={formData.appointmentPriority}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option>Normal</option>
              <option>Urgent</option>
            </select>
          </div>

          {/* Live Consultant */}
          <div>
            <label>Live Consultant (On Video Conference) *</label>
            <select
              name="liveConsultant"
              value={formData.liveConsultant}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <label>Status *</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option>Pending</option>
              <option>Confirmed</option>
              <option>Completed</option>
            </select>
          </div>

          {/* Nurse */}
          <div>
            <label>Nurse</label>
            <input
              type="text"
              name="nurse"
              value={formData.nurse}
              onChange={handleChange}
            />
          </div>

          {/* Case ID */}
          <div>
            <label>Case ID *</label>
            <input
              type="text"
              name="caseId"
              value={formData.caseId}
              onChange={handleChange}
              required
            />
          </div>

          {/* Encounter ID */}
          <div>
            <label>Encounter ID *</label>
            <input
              type="text"
              name="encounterId"
              value={formData.encounterId}
              onChange={handleChange}
              required
            />
          </div>

          {/* Payment Mode */}
          <div>
            <label>Payment Mode *</label>
            <select
              name="paymentMode"
              value={formData.paymentMode}
              onChange={handleChange}
              required
            >
              <option>Cash</option>
              <option>Card</option>
              <option>Insurance</option>
            </select>
          </div>

          {/* Payment Status */}
          <div>
            <label>Payment Status *</label>
            <select
              name="paymentStatus"
              value={formData.paymentStatus}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option>Paid</option>
              <option>Unpaid</option>
              <option>Pending</option>
            </select>
          </div>
        </form>

        {/* Save button outside grid */}
        <div style={{ padding: "20px", textAlign: "right" }}>
          <button type="submit" className="save-btn" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-bg">
          <div className="modal-box">
            <h3 className="text-lg font-bold mb-4">Collected Data</h3>
            <pre
              style={{
                background: "#f9fafb",
                padding: "10px",
                borderRadius: "6px",
                maxHeight: "300px",
                overflow: "auto",
              }}
            >
              {JSON.stringify(formData, null, 2)}
            </pre>
            <div className="mt-4" style={{ textAlign: "right" }}>
              <button
                onClick={() => setShowModal(false)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
