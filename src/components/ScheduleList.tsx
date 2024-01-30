import React, { useState } from "react";
import editIcon from "../assets/edit_Icon.svg";
import deleteIcon from "../assets/delete_Icon.svg";
import styles from "./ScheduleList.module.css";
// import circularIcon from "../assets/circularIcon.svg";

const circularIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <circle cx="12" cy="12" r="12" fill="white" />
    <circle cx="12" cy="12" r="11.5" stroke="#3C1E5A" stroke-opacity="0.1" />
  </svg>
);

interface Schedule {
  title: string;
  description: string;
  subject: string;
  frequency: string;
  time: string;
  day?: string;
}

interface ScheduleListProps {
  schedules: Schedule[];
  setSchedules: React.Dispatch<React.SetStateAction<Schedule[]>>;
}

interface EditScheduleBoxProps {
  schedule: Schedule;
  onUpdate: (updatedSchedule: Schedule) => void;
  onClose: () => void;
}

const EditScheduleBox: React.FC<EditScheduleBoxProps> = ({
  schedule,
  onUpdate,
  onClose,
}) => {
  const [editedSchedule, setEditedSchedule] = useState(schedule);
  const [newScheduleFrequency, setNewScheduleFrequency] = useState(
    schedule.frequency
  );
  const [selectedDay, setSelectedDay] = useState(schedule.day || "");

  const handleUpdate = () => {
    onUpdate(editedSchedule);
    onClose();
  };

  const handleFrequencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNewScheduleFrequency(e.target.value);
  };

  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDay(e.target.value);
  };

  return (
    <div className={styles.editBox}>
      <p className={styles.content}>Edit Schedule</p>
      <div
        style={{
          marginBottom: "5px",
          marginLeft: "16px",
          marginRight: "16px",
        }}
      >
        <label
          className={styles.content}
          style={{ fontSize: "14px", marginLeft: "7px" }}
        >
          Title
        </label>
        <input
          type="text"
          placeholder="Edit title"
          value={editedSchedule.title}
          onChange={(e) =>
            setEditedSchedule({ ...editedSchedule, title: e.target.value })
          }
          className={styles.content}
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
          className={styles.content}
          style={{ fontSize: "14px", marginLeft: "7px" }}
        >
          Description
        </label>
        <input
          type="text"
          placeholder="Edit description"
          value={editedSchedule.description}
          onChange={(e) =>
            setEditedSchedule({
              ...editedSchedule,
              description: e.target.value,
            })
          }
          className={styles.content}
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
          className={styles.content}
          style={{ fontSize: "14px", marginLeft: "7px" }}
        >
          Subject
        </label>
        <input
          type="text"
          placeholder="Edit subject"
          value={editedSchedule.subject}
          onChange={(e) =>
            setEditedSchedule({ ...editedSchedule, subject: e.target.value })
          }
          className={styles.content}
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
          onChange={(e) => {
            handleFrequencyChange(e);
            setEditedSchedule({
              ...editedSchedule,
              frequency: e.target.value,
            });
          }}
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
          <div
            style={{
              marginBottom: "5px",
              marginLeft: "16px",
              marginRight: "16px",
            }}
          >
            <label
              className={styles.content}
              style={{ fontSize: "14px", marginLeft: "7px" }}
            >
              Repeat
            </label>
            <select
              value={selectedDay}
              onChange={(e) => {
                handleDayChange(e);
                setEditedSchedule({
                  ...editedSchedule,
                  day: e.target.value,
                });
              }}
              className={styles.content}
              style={{
                width: "195px",
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
          <div
            style={{
              marginBottom: "5px",
              marginLeft: "16px",
              marginRight: "16px",
            }}
          >
            <label
              className={styles.content}
              style={{ fontSize: "14px", marginLeft: "7px" }}
            >
              Repeat
            </label>
            <select
              value={selectedDay}
              onChange={(e) => {
                handleDayChange(e);
                setEditedSchedule({
                  ...editedSchedule,
                  day: e.target.value,
                });
              }}
              className={styles.content}
              style={{
                width: "190px",
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
          className={styles.content}
          style={{ fontSize: "14px", marginLeft: "7px" }}
        >
          Time
        </label>
        <select
          value={editedSchedule.time}
          onChange={(e) =>
            setEditedSchedule({ ...editedSchedule, time: e.target.value })
          }
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
          onClick={onClose}
          style={{
            width: "88px",
            height: "32px",
            flexShrink: 0,
            borderRadius: "4px",
            borderColor: "#EBE8EF",
            background: "#EBE8EF",
          }}
        >
          Close
        </button>
        <button
          onClick={handleUpdate}
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
          Update
        </button>
      </div>
    </div>
  );
};

const ScheduleList: React.FC<ScheduleListProps> = ({
  schedules,
  setSchedules,
}) => {
  const [showEditBox, setShowEditBox] = useState(false);
  const [selectedScheduleIndex, setSelectedScheduleIndex] = useState<
    number | null
  >(null);

  const handleEdit = (index: number) => {
    setSelectedScheduleIndex(index);
    setShowEditBox(true);
  };

  const handleUpdate = (updatedSchedule: Schedule) => {
    const updatedSchedules = [...schedules];
    updatedSchedules[selectedScheduleIndex!] = updatedSchedule;
    setSchedules(updatedSchedules);
  };

  const handleDelete = (index: number) => {
    const updatedSchedules = [...schedules];
    updatedSchedules.splice(index, 1);
    setSchedules(updatedSchedules);
  };

  const handleCloseEditBox = () => {
    setShowEditBox(false);
    setSelectedScheduleIndex(null);
  };

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.headerRow}>
            <th className={`${styles.tableCell} ${styles.titleCell}`}>Title</th>
            <th className={`${styles.tableCell} ${styles.descriptionCell}`}>
              Description
            </th>
            <th className={`${styles.tableCell} ${styles.subjectCell}`}>
              Subject
            </th>
            <th className={`${styles.tableCell} ${styles.scheduleCell}`}>
              Schedule
            </th>
            <th className={`${styles.tableCell} ${styles.actionsCell}`}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule, index) => (
            <tr key={index} className={styles.dataRow}>
              <td className={`${styles.tableCell} ${styles.titleCell}`}>
                {schedule.title}
              </td>
              <td className={`${styles.tableCell} ${styles.descriptionCell}`}>
                {schedule.description}
              </td>
              <td className={`${styles.tableCell} ${styles.subjectCell}`}>
                {schedule.subject}
              </td>
              {/* <td
                className={`${styles.tableCell} ${styles.scheduleCell}`}
              >{`${schedule.frequency} at ${schedule.time}`}</td> */}
              <td className={`${styles.tableCell} ${styles.scheduleCell}`}>
                {schedule.frequency === "daily"
                  ? `Daily at ${schedule.time}`
                  : schedule.frequency === "weekly"
                  ? `Weekly on ${schedule.day} at ${schedule.time}`
                  : schedule.frequency === "monthly"
                  ? `Monthly on ${schedule.day} at ${schedule.time}`
                  : "Invalid Frequency"}
              </td>

              <td className={`${styles.tableCell} ${styles.actionsCell}`}>
                <button
                  onClick={() => handleEdit(index)}
                  className={styles.iconButton}
                >
                  <img src={editIcon} alt="Edit" className={styles.icon} />
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className={styles.iconButton}
                >
                  <img src={deleteIcon} alt="Delete" className={styles.icon} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showEditBox && selectedScheduleIndex !== null && (
        <div className={styles.overlay}>
          <EditScheduleBox
            schedule={schedules[selectedScheduleIndex!]}
            onUpdate={handleUpdate}
            onClose={handleCloseEditBox}
          />
        </div>
      )}
    </div>
  );
};

export default ScheduleList;
export type { Schedule };
