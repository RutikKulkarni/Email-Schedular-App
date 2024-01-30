import React, { useEffect, useState } from "react";
import { fetchSchedules } from "../services/api";
import styles from "./ScheduleForm.module.css";
import searchIcon from "../assets/search_icon.svg";
import addIcon from "../assets/add_Icon.svg";
import ScheduleList, { Schedule } from "./ScheduleList";
import editIcon from "../assets/edit_Icon.svg";
import deleteIcon from "../assets/delete_Icon.svg";

const ScheduleForm: React.FC = () => {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  // const [schedules, setSchedules] = useState([]);
  const [search, setSearch] = useState("");
  const [isAddBoxOpen, setIsAddBoxOpen] = useState(false);
  const [newScheduleTitle, setNewScheduleTitle] = useState("");
  const [newScheduleDescription, setNewScheduleDescription] = useState("");
  const [newScheduleSubject, setNewScheduleSubject] = useState("");
  const [newScheduleFrequency, setNewScheduleFrequency] = useState("");
  const [newScheduleTime, setNewScheduleTime] = useState("");
  const [selectedDay, setSelectedDay] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSchedules(search);
      setSchedules(data);
    };

    fetchData();
  }, [search]);

  const toggleAddBox = () => {
    setIsAddBoxOpen(!isAddBoxOpen);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewScheduleTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewScheduleDescription(e.target.value);
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewScheduleSubject(e.target.value);
  };

  const handleFrequencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNewScheduleFrequency(e.target.value);
    setSelectedDay("");
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNewScheduleTime(e.target.value);
  };

  // const handleDayChange = (value: string) => {
  //   setSelectedDay(value);
  // };

  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDay(e.target.value);
  };

  const handleCancel = () => {
    resetForm();
    setIsAddBoxOpen(false);
  };

  const handleDone = () => {
    const newSchedule: Schedule = {
      title: newScheduleTitle,
      description: newScheduleDescription,
      subject: newScheduleSubject,
      frequency: newScheduleFrequency,
      time: newScheduleTime,
      day: selectedDay,
    };

    setSchedules([...schedules, newSchedule]);

    resetForm();
    setIsAddBoxOpen(false);
  };

  const resetForm = () => {
    setNewScheduleTitle("");
    setNewScheduleDescription("");
    setNewScheduleSubject("");
    setNewScheduleFrequency("");
    setNewScheduleTime("");
    setSelectedDay("");
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.searchBox}
        style={{
          backgroundImage: `url(${searchIcon})`,
          backgroundSize: "20px 20px",
          backgroundPosition: "calc(100% - 10px) center",
          backgroundRepeat: "no-repeat",
          paddingRight: "40px",
          marginRight: "70%",
        }}
      />
      <button
        className={styles.button}
        style={{
          backgroundImage: `url(${addIcon})`,
        }}
        onClick={toggleAddBox}
      >
        <span style={{ marginRight: "2px" }}>Add</span>
      </button>

      {isAddBoxOpen && (
        <div className={styles.addBox}>
          <p className={styles.content}>Add Schedule</p>

          <div
            style={{
              marginBottom: "5px",
              marginLeft: "16px",
              marginRight: "16px",
            }}
          >
            <label
              htmlFor="scheduleTitle"
              className={styles.content}
              style={{ fontSize: "14px", marginLeft: "7px" }}
            >
              Title
            </label>
            <input
              type="text"
              id="scheduleTitle"
              value={newScheduleTitle}
              onChange={handleTitleChange}
              className={styles.content}
              placeholder="Sample Title"
              style={{
                width: "235px",
                height: "32px",
                flexShrink: 0,
                borderRadius: "4px",
                border: "1px solid var(--Blue10, rgba(60, 30, 90, 0.10))",
                background: "#FFF",
                paddingLeft: "7px",
                marginRight: "7px",
              }}
            />
          </div>

          <div
            style={{
              marginBottom: "5px",
              marginLeft: "16px",
              marginRight: "16px",
            }}
          >
            <label
              htmlFor="scheduleDescription"
              className={styles.content}
              style={{ fontSize: "14px", marginLeft: "7px" }}
            >
              Description
            </label>
            <input
              type="text"
              id="scheduleDescription"
              value={newScheduleDescription}
              onChange={handleDescriptionChange}
              className={styles.content}
              placeholder="Sample Description"
              style={{
                width: "190px",
                height: "32px",
                flexShrink: 0,
                borderRadius: "4px",
                border: "1px solid var(--Blue10, rgba(60, 30, 90, 0.10))",
                background: "#FFF",
                paddingLeft: "7px",
                marginRight: "7px",
              }}
            />
          </div>

          <div
            style={{
              marginBottom: "5px",
              marginLeft: "16px",
              marginRight: "16px",
            }}
          >
            <label
              htmlFor="scheduleSubject"
              className={styles.content}
              style={{ fontSize: "14px", marginLeft: "7px" }}
            >
              Subject
            </label>
            <input
              type="text"
              id="scheduleSubject"
              value={newScheduleSubject}
              onChange={handleSubjectChange}
              className={styles.content}
              placeholder="Sample Subject"
              style={{
                width: "216px",
                height: "32px",
                flexShrink: 0,
                borderRadius: "4px",
                border: "1px solid var(--Blue10, rgba(60, 30, 90, 0.10))",
                background: "#FFF",
                paddingLeft: "7px",
                marginRight: "7px",
              }}
            />
          </div>
          <div
            style={{
              marginBottom: "5px",
              marginLeft: "16px",
              marginRight: "16px",
            }}
          >
            <label
              htmlFor="scheduleFrequency"
              className={styles.content}
              style={{ fontSize: "14px", marginLeft: "7px" }}
            >
              Frequency
            </label>
            <select
              id="scheduleFrequency"
              value={newScheduleFrequency}
              onChange={handleFrequencyChange}
              className={styles.content}
              style={{
                width: "205px",
                height: "32px",
                flexShrink: 0,
                borderRadius: "4px",
                border: "1px solid var(--Blue10, rgba(60, 30, 90, 0.10))",
                background: "#FFF",
                paddingLeft: "7px",
                marginRight: "7px",
              }}
            >
              <option value="" disabled>
                Select Frequency
              </option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>

            {newScheduleFrequency === "weekly" && (
              <div>
                <label
                  className={styles.content}
                  style={{ fontSize: "14px", marginLeft: "7px" }}
                >
                  Repeat
                </label>
                <select
                  value={selectedDay}
                  onChange={handleDayChange}
                  className={styles.content}
                  style={{
                    width: "200px",
                    height: "32px",
                    borderRadius: "4px",
                    border: "1px solid var(--Blue10, rgba(60, 30, 90, 0.10))",
                    background: "#FFF",
                    paddingLeft: "7px",
                  }}
                >
                  <option value="" disabled>
                    Select Day
                  </option>
                  <option value="monday">Monday</option>
                  <option value="tuesday">Tuesday</option>
                  <option value="wednesday">Wednesday</option>
                  <option value="thursday">Thursday</option>
                  <option value="friday">Friday</option>
                  <option value="saturday">Saturday</option>
                  <option value="sunday">Sunday</option>
                </select>
              </div>
            )}

            {newScheduleFrequency === "monthly" && (
              <div>
                <label
                  className={styles.content}
                  style={{ fontSize: "14px", marginLeft: "7px" }}
                >
                  Repeat
                </label>
                <select
                  value={selectedDay}
                  onChange={handleDayChange}
                  className={styles.content}
                  style={{
                    width: "200px",
                    height: "32px",
                    borderRadius: "4px",
                    border: "1px solid var(--Blue10, rgba(60, 30, 90, 0.10))",
                    background: "#FFF",
                    paddingLeft: "7px",
                  }}
                >
                  <option value="" disabled>
                    Select Day
                  </option>
                  <option value="firstMonday">First Monday</option>
                  <option value="firstFriday">First Friday</option>
                </select>
              </div>
            )}
          </div>

          <div
            style={{
              marginBottom: "5px",
              marginLeft: "16px",
              marginRight: "16px",
            }}
          >
            <label
              htmlFor="scheduleTime"
              className={styles.content}
              style={{ fontSize: "14px", marginLeft: "7px" }}
            >
              Time
            </label>
            <select
              id="scheduleTime"
              value={newScheduleTime}
              onChange={handleTimeChange}
              className={styles.content}
              style={{
                width: "240px",
                height: "32px",
                flexShrink: 0,
                borderRadius: "4px",
                border: "1px solid var(--Blue10, rgba(60, 30, 90, 0.10))",
                background: "#FFF",
                paddingLeft: "7px",
                marginRight: "7px",
              }}
            >
              <option value="" disabled>
                Select Time
              </option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:30 AM">11:30 AM</option>
              <option value="01:00 PM">01:00 PM</option>
            </select>
          </div>

          <div
            style={{
              marginTop: "5px",
              marginLeft: "140px",
              marginRight: "32px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <button
              onClick={handleCancel}
              style={{
                width: "88px",
                height: "32px",
                flexShrink: 0,
                borderRadius: "4px",
                borderColor: "#EBE8EF",
                background: "#EBE8EF",
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleDone}
              style={{
                width: "80px",
                height: "32px",
                flexShrink: 0,
                borderRadius: "4px",
                borderColor: "#391E5A",
                background: "#391E5A",
                color: "#FFF",
                marginLeft: "10px",
              }}
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* <ul>
        {schedules.map((schedule: any, index: number) => (
          <li key={index}>{schedule.title}</li>
        ))}
      </ul> */}

      <ScheduleList schedules={schedules} setSchedules={setSchedules} />
    </div>
  );
};

export default ScheduleForm;
