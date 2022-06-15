import { NextPage } from "next";
import Image from "next/image";
import { CharactersCardProps, StatusColor } from "../../typings/application";

const CharactersCard: React.FC<CharactersCardProps> = ({
  name,
  species,
  status,
  image = "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
}) => {
  return (
    <div className="bg-blue-200 rounded-md p-5 mr-5 mb-5 w-1/4 max-w-1/4">
      <Image className="" src={image} alt="" width={300} height={300} />
      <div className="text-center mt-2">
        <div>{name}</div>
        <div>{species}</div>
        <div className={StatusColor[status]}>{status}</div>
      </div>
    </div>
  );
};

export default CharactersCard;
