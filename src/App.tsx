import styles from "./App.module.css";
import Alert from "./components/Alert";
import Form from "./components/Form";
import Spinner from "./components/Spinner";
import WeatherDetails from "./components/WeatherDetails";
import useWeather from "./hooks/useWeather";

const App = () => {
  const { weather, loading, notFound, fetchWeather, hasWeatherData } =
    useWeather();

  return (
    <>
      <h1 className={styles.title}>Buscador de Clima</h1>
      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />
        <div className={styles.commonContainer}>
          {loading && <Spinner />}
          {hasWeatherData && <WeatherDetails weather={weather} />}
          {notFound && <Alert>Ciudad no encontrada.</Alert>}
        </div>
      </div>
    </>
  );
};

export default App;
