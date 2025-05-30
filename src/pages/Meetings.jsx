import React, { useEffect, useState } from "react";
import { meetingAPI } from "../api/meetingAPI";

const Meetings = () => {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    meetingAPI
      .getAll()
      .then(setMeetings)
      .catch((e) => {
        console.error(e);
        setError("Не удалось загрузить события");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-8">Загрузка событий...</p>;
  if (error) return <p className="text-center mt-8 text-red-500">{error}</p>;

  return (
    <main className="pt-16 pb-16 max-w-[375px] mx-auto">
      <h1 className="text-xl font-bold px-4 mb-4">Ближайшие события</h1>
      <div className="flex flex-col gap-4 px-4">
        {meetings.map((meeting) => (
          <div key={meeting.id} className="border rounded-xl overflow-hidden shadow">
            <img
              src={`/images/meetings/${meeting.image}`}
              alt={meeting.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">{meeting.title}</h2>
              <p className="text-sm text-gray-600">{meeting.date} в {meeting.time}</p>
              <p className="text-sm text-gray-600">{meeting.location}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Meetings;
