const BASE_URL = '/schedules';

export const fetchSchedules = async (search?: string) => {
  const url = search ? `${BASE_URL}?search=${search}` : BASE_URL;
  const response = await fetch(url);
  return response.json();
};

export const fetchScheduleById = async (id: string) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  return response.json();
};

export const createSchedule = async (schedule: any) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(schedule),
  });
  return response.json();
};

export const updateSchedule = async (id: string, schedule: any) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(schedule),
  });
  return response.json();
};

export const deleteSchedule = async (id: string) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};
