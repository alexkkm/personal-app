import { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

const ClockWidget = () => {
  // variable
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  // get the current time from local clock
  const GetCurrentTime = () => {
    const now = new Date();
    const currentHour = now.getHours().toString().padStart(2, "0");
    const currentMinutes = now.getMinutes().toString().padStart(2, "0");
    const currentSecond = now.getSeconds().toString().padStart(2, "0");
    return `${currentHour}:${currentMinutes}:${currentSecond}`;
  };

  //get the current date from local clock
  const GetCurrentDate = () => {
    const date = new Date();
    const formattedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    return formattedDate;
  };

  useEffect(() => {
    setDate(GetCurrentDate);

    setTimeout(() => {
      setTime(GetCurrentTime());
    }, 1000);
  });

  return (
    <TouchableOpacity
      className="clockWidget"
      onPress={() => {
        console.log("navigate to timeDetailPage");
      }}
    >
      <Text style={styles.date} className="date">
        {date}
      </Text>
      <Text style={styles.time} className="time">
        {time}
      </Text>
    </TouchableOpacity>
  );
};

export default ClockWidget;

const styles = StyleSheet.create({
  date: {
    //outer
    padding: 10,

    // color
    color: "#00f0ff",

    // shadow
    textShadowColor: "#00f0ff",
    textShadowOffset: { height: 0, width: 0 },
    textShadowRadius: 2,
    textShadowOpacity: 1,

    // font
    fontFamily: "Rajdhani",
    fontSize: 16,
    lineHeight: 22.4,
  },
  time: {
    //outer
    padding: 10,

    // color
    color: "#00f0ff",

    // shadow
    textShadowColor: "#00f0ff",
    textShadowOffset: { height: 0, width: 0 },
    textShadowRadius: 2,
    textShadowOpacity: 1,

    // font
    fontFamily: "Rajdhani",
    fontSize: 24,
    lineHeight: 22.4,
  },
});
