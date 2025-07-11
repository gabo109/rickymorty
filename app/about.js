import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function About() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Acerca de Rick y Morty App</Text>

        <Text style={styles.subtitle}>Sobre la Serie</Text>
        <Text style={styles.text}>
          Rick y Morty (en inglés: Rick and Morty) es una serie de televisión estadounidense de animación para adultos creada por Justin Roiland y Dan Harmon en 2013
          para Adult Swim, también se emitió en Cartoon Network. La serie sigue las desventuras de un científico, Rick Sánchez, y su fácilmente influenciable nieto,
          Morty, quienes pasan el tiempo entre la vida doméstica y los Viajes espaciales e intergalácticos. Dan Harmon, el cocreador de la serie y Justin Roiland son
          los encargados de las voces principales de Morty y Rick, la serie también incluye las voces de Chris Parnell, Spencer Grammer y Sarah Chalke.
        </Text>

        <Text style={styles.subtitle}>Sobre esta App</Text>
        <Text style={styles.text}>
          Desarrollada con React Native y Expo Router.
        </Text>

        <Text style={styles.subtitle}>Tecnologías Utilizadas</Text>
        <Text style={styles.tech}>• React Native</Text>
        <Text style={styles.tech}>• Expo Router</Text>

        <Link href="/" style={styles.backButton}>
          
          <Text style={styles.backButtonText}>← Volver al inicio</Text>
          <FontAwesome name="home" size={24} color="white" />
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8a97b8',
  },
  contentContainer: {
    flexGrow: 1,
    padding: 20,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fffcfc',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fffcfc',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#fffcfc',
    marginBottom: 15,
    textAlign: 'justify',
  },
  tech: {
    fontSize: 16,
    color: '#fffcfc',
    marginLeft: 10,
    marginBottom: 5,
  },
  backButton: {
    backgroundColor: '#9bacba',
    padding: 15,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});