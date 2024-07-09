import React, { useState } from "react";
import axios from "axios";
import { headers } from "next/headers";

const SearchUser: React.FC = () => {
  const [riotId, setRiotId] = useState<string>("");
  const [riotTag, setRiotTag] = useState<string>("");
  const [playerInfo, setPlayerInfo] = useState<any>(null); // 플레이어 정보를 저장할 상태

  const handlePlayerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRiotId(value);
    const hashIndex = value.indexOf("#");

    if (hashIndex !== -1) {
      setRiotId(value.substring(0, hashIndex));
      setRiotTag(value.substring(hashIndex + 1));
    } else {
      setRiotId(value);
      setRiotTag("");
    }
  };

  const handleSearchUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 기본 제출 이벤트 방지
    let url = `https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${riotId}/${riotTag}?api_key=RGAPI-71a918ac-3e64-40d7-bf45-050a7b54332a`;
    console.log(url);
    try {
      console.log(riotId, riotTag);
      const res = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "RGAPI-71a918ac-3e64-40d7-bf45-050a7b54332a",
        },
      });
      if (res.status === 200) {
        setPlayerInfo(res.data); // API 응답 데이터를 상태에 저장
        console.log(res.data);
      }
    } catch (err) {
      console.error("Error fetching player info:", err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearchUser}>
        <input
          onChange={handlePlayerName}
          type="text"
          placeholder="플레이어 이름 + #KR1"
        />
        <button type="submit">전적검색</button>
      </form>

      {playerInfo && (
        <div>
          <p>Game Name: {playerInfo.gameName}</p>
          <p>Tag Line: {playerInfo.tagLine}</p>
          <p>PUUID: {playerInfo.puuid}</p>
        </div>
      )}
    </div>
  );
};

export default SearchUser;
