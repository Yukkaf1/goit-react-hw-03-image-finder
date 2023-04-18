import { Component } from 'react';
import PropTypes from 'prop-types';
import { Title, Wrapper, Image } from './Recipe.styled';
import { RecipeInfo } from '../RecipeInfo/RecipeInfo';
import { RecipeDifficulty } from '../RecipeDifficulty/RecipeDifficulty';

export class Recipe extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const {
      recipe: {
        name,
        time,
        servings,
        calories,
        difficulty,
        image = 'https://assets.bonappetit.com/photos/62bf35ae872a6cfbb260f286/1:1/w_2580%2Cc_limit/0701-tj-recipe-potato-v2.jpg',
      },
    } = this.props;
    const { isOpen } = this.state;
    return (
      <Wrapper>
        <Image src={image} alt={name} onClick={this.toggle} />
        <Title>{name}</Title>
        {isOpen && (
          <>
            <RecipeInfo time={time} servings={servings} calories={calories} />
            <RecipeDifficulty difficulty={difficulty} />
          </>
        )}
      </Wrapper>
    );
  }
}

Recipe.propType = {
  recipe: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      servings: PropTypes.string.isRequired,
      calories: PropTypes.string.isRequired,
      difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']),
    })
  ),
};
