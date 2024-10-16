import { useEffect, useMemo, useState } from "react";
import { MusicEventType } from "../types/MusicEvent";
import { Spinner } from "./Spinner";

interface ModalProps extends MusicEventType {
  setModalState: React.Dispatch<React.SetStateAction<boolean>>,
  setData: React.Dispatch<React.SetStateAction<MusicEventType[] | undefined>>
}

export const Modal = ({
  title,
  description,
  availablePlaces,
  id,
  setModalState,
  setData,
}: ModalProps) => {
  const [drawerState, setDrawerState] = useState(false);
  const [booking, setBooking] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number | null>(null); // Temps restant en secondes
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  // Fonction pour réserver un ticket
  const bookTicket = (eventId: number) => {
    const now = new Date().getTime(); // Timestamp actuel en millisecondes
    if (!localStorage.getItem("bookEventId:" + eventId)) {
      localStorage.setItem("bookEventId:" + eventId, now.toString()); // Enregistrer le timestamp dans localStorage
    }
    setBooking(true);
  };

  // Vérifie si le ticket est toujours disponible (dans les 5 minutes)
  const isTicketStillAvailable = (eventId: number): boolean => {

    const bookingTime = localStorage.getItem("bookEventId:" + eventId);
    if (!bookingTime) return false;

    const bookingTimestamp = parseInt(bookingTime, 10);
    const now = new Date().getTime();
    const timeElapsed = (now - bookingTimestamp) / 1000; // Temps écoulé en secondes


    return timeElapsed <= 300; // 300 secondes = 5 minutes
  };

  // Calcule le temps restant en minutes pour le ticket réservé
  const getLeftTime = (eventId: number): number => {

    const bookingTime = localStorage.getItem("bookEventId:" + eventId);
    if (!bookingTime) return 0;

    const bookingTimestamp = parseInt(bookingTime, 10);
    const now = new Date().getTime();
    const timeElapsed = (now - bookingTimestamp) / 1000; // Temps écoulé en secondes

    const timeLeft = 300 - timeElapsed; // 300 secondes = 5 minutes de validité

    return Math.max(0, Math.floor(timeLeft / 60)); // Temps restant en minutes
  };

  const decrementTicketInData = (): void => {
    setData((prevData) => {
      if (!prevData) return prevData;

      // Met à jour le nombre de places disponibles pour l'événement correspondant à l'ID
      return prevData.map((event) => {
        if (event.id === id) {
          return {
            ...event,
            availablePlaces: event.availablePlaces - 1, // Décrémente le nombre de places disponibles
          };
        }
        return event;
      });
    });
  };

  // useEffect pour vérifier l'état du ticket lors du chargement du composant
  useEffect(() => {
    const interval = setInterval(() => {
      if (isTicketStillAvailable(id)) {
        setBooking(true);
        setTimeLeft(getLeftTime(id)); // Met à jour le temps restant
      } else {
        setBooking(false);
        localStorage.removeItem("bookEventId:" + id); // Supprime l'entrée si le temps est écoulé
      }
    }, 1000);

    return () => clearInterval(interval); // Nettoie l'intervalle lorsque le composant est démonté
  }, [id]);

  useMemo(() => {
    if (timeLeft) if (timeLeft > 0) setDrawerState(true)
  }, [timeLeft])

  return (
    <div className="absolute w-full h-full top-0 left-0 z-10 bg-white/20 rounded-lg shadow-lg backdrop-blur-sm border border-white/30">
      <div className="bg-white p-6 border-[1px] rounded-lg mt-44 mx-auto w-96 md:w-[560px]">
        <span
          className="flex flex-row items-center w-min px-3 py-1 -mt-9 rounded-xl text-sm bg-[#F7DAD4] cursor-pointer"
          onClick={() => {
            setModalState(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
          <strong className="">Close</strong>
        </span>
        <h1 className="font-bold text-3xl mt-4 mb-2">{title}</h1>
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <p className="text-gray-400">
              Your first ticket for this event is{" "}
              <strong>reserved for 5 minutes.</strong>
            </p>
            <p className="mb-2 mt-6">
              Il reste actuellement <strong>{availablePlaces}</strong> places
              disponibles.
            </p>
            <div>
              <button
                className="flex flex-row items-center gap-2 bg-[#101010] justify-center text-white px-8 py-3 rounded-xl disabled:bg-slate-200 disabled:text-gray-400"
                onClick={() => {
                  setDrawerState(!drawerState);
                  bookTicket(id);
                  decrementTicketInData();
                }}
                disabled={booking}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="font-medium">Choose my Place</p>
              </button>
              {booking && timeLeft !== null && (
                <p className="text-md mt-6 bg-[#EDF7D2] p-4 rounded-lg text-center">Booking time left: <strong>{timeLeft} minute(s)</strong></p>
              )}
            </div>
            <div
              className={`${drawerState ? "max-h-[500px] py-4" : "max-h-0 py-0"
                } transition-all duration-500 ease-in-out overflow-hidden`}
            >
              <h3 className="font-bold text-2xl mt-4">Select your place</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero vel
                architecto obcaecati dolore hic rem, voluptas numquam, amet modi
                magnam soluta fugiat. Facere, labore. Itaque tempore excepturi magni
                iusto aliquam!
              </p>
              <button className="bg-[#417631] mt-6 justify-center text-white px-8 py-3 rounded-xl">
                Confirm placement
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
