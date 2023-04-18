import { Wrapper, InfoBlock } from './RecipeInfo.styled';
import { BsAlarm, BsBarChartLineFill } from 'react-icons/bs';
import { HiOutlineChartPie } from 'react-icons/hi';

export const RecipeInfo = ({ time, servings, calories }) => {
  return (
    <Wrapper>
      <InfoBlock>
        <BsAlarm />
        {time} mins
      </InfoBlock>
      <InfoBlock>
        <HiOutlineChartPie />
        {servings} servings
      </InfoBlock>
      <InfoBlock>
        <BsBarChartLineFill />
        {calories} calories
      </InfoBlock>
    </Wrapper>
  );
};
