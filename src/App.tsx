import React from "react";
import ScheduleForm from "./components/ScheduleForm";
import ScheduleList from "./components/ScheduleList";
import { createSchedule, updateSchedule } from "./services/api";

const App: React.FC = () => {
  const handleCreateSchedule = async (schedule: any) => {
    const newSchedule = await createSchedule(schedule);
    // Handle the response as needed
    console.log("Created Schedule:", newSchedule);
  };

  const handleUpdateSchedule = async (id: string, schedule: any) => {
    const updatedSchedule = await updateSchedule(id, schedule);
    // Handle the response as needed
    console.log("Updated Schedule:", updatedSchedule);
  };

  return (
    <div>
      <div className="navbar"></div>
      <div className="rectangle"></div>
      <div className="container">
        <div className="left-nav"></div>
        <div className="main-content">
          <ScheduleForm />
          {/* <ScheduleList onSubmit={handleCreateSchedule} /> */}
        </div>
      </div>
    </div>
  );
};

export default App;
