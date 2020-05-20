import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Accelerometer } from "expo-sensors";


  function AccelerometerSensor() {

    const [data, setData] = useState({});
    const [colorBtn, setColorBtn] = useState(false)

  useEffect(() => {
    _toggle();
  }, []);

  useEffect(() => {
    return () => {
      _unsubscribe();
    };
  }, []);
  
  const _toggle = () => {
    setColorBtn(!colorBtn);
    if (this._subscription) {
      _unsubscribe();
    } else {
      _subscribe();
    }
  };

  const _subscribe = () => {
    this._subscription = Accelerometer.addListener(accelerometerData => {
      setData(accelerometerData);
    });
  };

  const _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };


  let { x, y, z } = data

  return (
    <View style={styles.sensor}>
      <Text style={styles.text}>Accelerometer</Text>
      <Text style={styles.text}>
        x: {round(x)} y: {round(y)} z: {round(z)}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={_toggle}
          style={[
            styles.button,
            colorBtn ? styles.active : styles.unactive
          ]}
        >
          <Text>Activate Sensor / Desactivate Sensor</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


function round(n) {
if (!n) {
  return 0;
}

return Math.floor(n * 100) / 100;
}

const styles = StyleSheet.create({

buttonContainer: {
  flexDirection: "row",
  alignItems: "stretch",
  marginTop: 15
},
button: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#eee",
  padding: 10
},

sensor: {
  marginTop: 45,
  paddingHorizontal: 10
},

text: {
  textAlign: "center"
},


active: {
  backgroundColor: "green"
},
unactive: {
  backgroundColor: "red"
}
});

export default AccelerometerSensor;



// import React, { Component } from "react";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { Accelerometer } from "expo-sensors";


// export default class AccelerometerSensor extends Component {
//   state = {
//     // init accelerometer
//     accelerometerData: {},
//     // toggle color btn
//     colorBtn: false
//   };

//   // Désactive sensors
//   componentWillUnmount() {
//     this._unsubscribe();
//   }
//   // toggle pour btn color et activation / désactivation
//   _toggle = () => {
//     this.setState({ colorBtn: !this.state.colorBtn });
//     if (this._subscription) {
//       this._unsubscribe();
//     } else {
//       this._subscribe();
//     }
//   };
//   // pour écouter l'event => mouvement avec le sensors
//   _subscribe = () => {
//     this._subscription = Accelerometer.addListener(accelerometerData => {
//       this.setState({ accelerometerData });
//     });
//   };
//   // désactive le sensors
//   _unsubscribe = () => {
//     this._subscription && this._subscription.remove();
//     this._subscription = null;
//   };

// render() {
//   let { x, y, z } = this.state.accelerometerData;
//   return (
//     <View style={styles.sensor}>
//       <Text style={styles.text}>Accelerometer</Text>
//       <Text style={styles.text}>
//         x: {round(x)} y: {round(y)} z: {round(z)}
//       </Text>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           onPress={this._toggle}
//           style={[
//             styles.button,
//             this.state.colorBtn ? styles.active : styles.unactive
//           ]}
//         >
//           <Text>Activate Sensor / Desactivate Sensor</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }
// }

// function round(n) {
// if (!n) {
//   return 0;
// }

// return Math.floor(n * 100) / 100;
// }

// const styles = StyleSheet.create({

// buttonContainer: {
//   flexDirection: "row",
//   alignItems: "stretch",
//   marginTop: 15
// },
// button: {
//   flex: 1,
//   justifyContent: "center",
//   alignItems: "center",
//   backgroundColor: "#eee",
//   padding: 10
// },
// sensor: {
//   marginTop: 45,
//   paddingHorizontal: 10
// },

// text: {
//   textAlign: "center"
// },


// active: {
//   backgroundColor: "green"
// },
// unactive: {
//   backgroundColor: "red"
// }
// });