import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import BasketBrewHeader from '../components/BasketBrewHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <BasketBrewHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast(
          'ATP Masters',
          '02.05 16:00',
          'Carlos Alcaraz \n' + 'Stefanos Tsitsipas',
        )}
        {renderBroadcast(
          'WTA 1000',
          '04.05 18:30',
          'Iga Swiatek \n' + 'Aryna Sabalenka',
        )}
        {renderBroadcast(
          'Roland Garros',
          '06.05 19:45',
          'Novak Djokovic \n' + 'Daniil Medvedev',
        )}
        {renderBroadcast('Davis Cup', '08.05 20:00', 'Spain \n' + 'USA')}
        {renderBroadcast(
          'Laver Cup',
          '10.05 21:15',
          'Europe \n' + 'World Team',
        )}
        {renderBroadcast(
          'Wimbledon',
          '12.05 17:00',
          'Rafael Nadal \n' + 'Alexander Zverev',
        )}
        {renderBroadcast(
          'US Open',
          '14.05 16:30',
          'Nick Kyrgios \n' + 'Taylor Fritz',
        )}
        {renderBroadcast(
          'Indian Wells',
          '16.05 19:00',
          'Casper Ruud \n' + 'Matteo Berrettini',
        )}
        {renderBroadcast(
          'Miami Open',
          '18.05 21:30',
          'Jannik Sinner \n' + 'Felix Auger-Aliassime',
        )}
        {renderBroadcast(
          'Australian',
          '20.05 15:45',
          'Frances Tiafoe \n' + 'Hubert Hurkacz',
        )}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.main,
    paddingLeft: 20,
  },
  league: {
    fontSize: 22,
    fontFamily: FONTS.black,
    color: COLORS.white,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    width: '60%',
    marginLeft: 15,
    opacity: 0.8,
  },
  teams: {
    textAlign: 'right',
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.white,
    marginTop: 5,
    marginRight: 15,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    margin: 20,
    textAlign: 'center',
  },
});
