import { useRef } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles'

const lightTheme = {
  colors: {
    background: '#F0F8FF',
    text: '#1A365D',
  },
}

const darkTheme = {
  colors: {
    background: '#0A192F',
    text: '#E2E8F0',
  },
}

StyleSheet.configure({
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
  settings: {
    adaptiveThemes: true
  }
});

export default function App() {
  const renderCountRef = useRef(0);

  renderCountRef.current++;
  
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Unistyles
      </Text>
      <Text style={styles.text}>
        Render Count: {renderCountRef.current}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create((theme: typeof lightTheme | typeof darkTheme) => {
  return (
    {
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background,
      },
      heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: theme.colors.text,
      },
      text: {
        fontSize: 18,
        color: theme.colors.text,
      },
  }
  )
});

// 👇 "built in styles"

// import { StatusBar } from 'expo-status-bar';
// import { Text, View, useColorScheme, StyleSheet } from 'react-native';
// import { useRef } from 'react';

// export default function App() {
//   const colorScheme = useColorScheme();
//   const isDark = colorScheme === 'dark';
//   const renderCountRef = useRef(0);

//   renderCountRef.current++;
  
//   return (
//     <View style={[styles.container, { backgroundColor: isDark ? '#0A192F' : '#F0F8FF' }]}>
//       <Text style={[styles.heading, { color: isDark ? '#E2E8F0' : '#1A365D' }]}>
//         Built in Styles
//       </Text>
//       <Text style={[styles.text, { color: isDark ? '#E2E8F0' : '#1A365D' }]}>
//         Render Count: {renderCountRef.current}
//       </Text>
//       <StatusBar style={isDark ? "light" : "dark"} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   text: {
//     fontSize: 18,
//   },
// });
