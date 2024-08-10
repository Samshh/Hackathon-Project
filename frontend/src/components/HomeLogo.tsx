import { useNavigate } from 'react-router-dom';

export default function HomeBtn() {
  const navigate = useNavigate();

  const toHome = () => {
    navigate('/');
  };
  return (
    <button onClick={toHome} className="flex items-center justify-center gap-[0.5rem]">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="19" y="8" width="10" height="33" rx="2" fill="#5872FF" />
        <rect x="8" y="29" width="10" height="32" rx="2" transform="rotate(-90 8 29)" fill="#5872FF" />
        <path
          d="M47.9999 40.2601C47.9999 44.5347 44.5346 48 40.26 48C35.9853 48 32.52 44.5347 32.52 40.2601C32.52 35.9854 35.9853 32.5201 40.26 32.5201C44.5346 32.5201 47.9999 35.9854 47.9999 40.2601ZM36.39 40.2601C36.39 42.3974 38.1226 44.13 40.26 44.13C42.3973 44.13 44.1299 42.3974 44.1299 40.2601C44.1299 38.1227 42.3973 36.3901 40.26 36.3901C38.1226 36.3901 36.39 38.1227 36.39 40.2601Z"
          fill="#5872FF"
        />
        <path
          d="M15.4799 40.2601C15.4799 44.5347 12.0146 48 7.73994 48C3.46529 48 0 44.5347 0 40.2601C0 35.9854 3.46529 32.5201 7.73994 32.5201C12.0146 32.5201 15.4799 35.9854 15.4799 40.2601ZM3.86997 40.2601C3.86997 42.3974 5.60261 44.13 7.73994 44.13C9.87726 44.13 11.6099 42.3974 11.6099 40.2601C11.6099 38.1227 9.87726 36.3901 7.73994 36.3901C5.60261 36.3901 3.86997 38.1227 3.86997 40.2601Z"
          fill="#5872FF"
        />
        <path
          d="M15.4799 7.73994C15.4799 12.0146 12.0146 15.4799 7.73994 15.4799C3.46529 15.4799 0 12.0146 0 7.73994C0 3.46529 3.46529 0 7.73994 0C12.0146 0 15.4799 3.46529 15.4799 7.73994ZM3.86997 7.73994C3.86997 9.87726 5.60261 11.6099 7.73994 11.6099C9.87726 11.6099 11.6099 9.87726 11.6099 7.73994C11.6099 5.60261 9.87726 3.86997 7.73994 3.86997C5.60261 3.86997 3.86997 5.60261 3.86997 7.73994Z"
          fill="#5872FF"
        />
        <path
          d="M47.9999 7.73994C47.9999 12.0146 44.5346 15.4799 40.26 15.4799C35.9853 15.4799 32.52 12.0146 32.52 7.73994C32.52 3.46529 35.9853 0 40.26 0C44.5346 0 47.9999 3.46529 47.9999 7.73994ZM36.39 7.73994C36.39 9.87726 38.1226 11.6099 40.26 11.6099C42.3973 11.6099 44.1299 9.87726 44.1299 7.73994C44.1299 5.60261 42.3973 3.86997 40.26 3.86997C38.1226 3.86997 36.39 5.60261 36.39 7.73994Z"
          fill="#5872FF"
        />
      </svg>
      <p className="text-black font-semibold text-xl hidden sm:flex">ChainMed Connect</p>
    </button>
  );
}
