// src/components/Home/HomeHeader.tsx
import styles from "../../styles/Home/Header.module.scss";
import SearchUser from "UI/SearchUser";
const HomeHeader: React.FC = () => {
  let url = `https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/L8BXmke0cdeBjxyLVdHafC3KLCtCrqN7SXfhGsuNeZKtde1_ZVRw3Cc0apoJm309WLaaDdxvIVf7zg?api_key=RGAPI-526e61ac-cc41-47d2-a2d1-dfae802ca070`;
  return (
    <header>
      <SearchUser />
    </header>
  );
};

export default HomeHeader;
