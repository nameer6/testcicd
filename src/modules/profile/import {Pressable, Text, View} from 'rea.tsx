import {Pressable, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BackHeader from 'src/components/BackHeader';
import GearIcon from 'src/assets/icons/gear.svg';
import {styles} from './styles';
import ContactsList from './ContactsList';
import ProfileBanner from './ProfileBanner';
import Svg, {Path} from 'react-native-svg';
import Recents from './Recents';
import Archives from './archives/Archives';

const Profile = ({navigation}: any) => {
  const goToSettings = () => {
    navigation.navigate('Settings');
  };
  const goToArchives = () => {
    navigation.navigate('ArchivesScreen');
  };

  const SettingsButton = (
    <Pressable onPress={goToSettings}>
      <GearIcon />
    </Pressable>
  );
  return (
    <View style={styles.mainContainer}>
      <BackHeader rightComponent={SettingsButton} />
      <ProfileBanner />
      {/* <Pressable style={styles.archivesButton} onPress={goToArchives}>
        <ArchiveIcon />
        <Text style={styles.archivesButtonText}>Archive</Text>
        <Icon
          name="chevron-forward-outline"
          size={22}
          color="rgba(255, 255, 255, 0.46)"
          style={styles.archiveArrowIconStyle}
        />
      </Pressable>
      <Recents />
      <ContactsList /> */}
      <Archives />
    </View>
  );
};

export default Profile;

const ArchiveIcon = () => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Path
      d="M12.8688 13.75L9.375 10.2562V4.375H10.625V9.7375L13.75 12.8687L12.8688 13.75Z"
      fill="white"
    />
    <Path
      d="M10 1.25C8.83435 1.25017 7.68058 1.48424 6.60702 1.93835C5.53346 2.39247 4.56194 3.05739 3.75 3.89375V1.25H2.5V6.25H7.5V5H4.425C5.59752 3.69706 7.18936 2.84596 8.92408 2.5945C10.6588 2.34305 12.4268 2.70714 13.921 3.62352C15.4152 4.53991 16.5413 5.95072 17.1036 7.61091C17.6659 9.27111 17.629 11.0758 16.9992 12.7116C16.3694 14.3474 15.1866 15.711 13.6561 16.5654C12.1256 17.4199 10.3442 17.7113 8.62124 17.3891C6.89827 17.0669 5.34259 16.1514 4.22437 14.8015C3.10615 13.4517 2.49604 11.7528 2.5 10H1.25C1.25 11.7306 1.76318 13.4223 2.72464 14.8612C3.6861 16.3002 5.05267 17.4217 6.65152 18.0839C8.25037 18.7462 10.0097 18.9195 11.707 18.5819C13.4044 18.2442 14.9635 17.4109 16.1872 16.1872C17.4109 14.9635 18.2442 13.4044 18.5819 11.707C18.9195 10.0097 18.7462 8.25037 18.0839 6.65152C17.4217 5.05267 16.3002 3.6861 14.8612 2.72464C13.4223 1.76318 11.7306 1.25 10 1.25Z"
      fill="white"
    />
  </Svg>
);