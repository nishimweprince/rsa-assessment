import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  useLazyGetCategoriesQuery,
  useLazyGetRandomJokeQuery,
} from '../states/api/apiSlice';
import { selectCategory } from '../states/features/categories';
import Loading from '../components/Loading';
import Button from '../components/Button';

const Categories = () => {
  const [getCategories, { data: categories, categoryLoading, isError }] =
    useLazyGetCategoriesQuery();

  const { selectedCategory } = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  const [
    getRandomJoke,
    {
      data: joke,
      isLoading: isJokeLoading,
      isError: isJokeError,
      isSuccess: isJokeSuccess,
    },
  ] = useLazyGetRandomJokeQuery();

  useEffect(() => {
    getCategories();
  }, []);

  if (isError) {
    return (
      <article className="min-h-[50vh] flex items-center justify-center">
        <h3 className="text-[2rem] font-normal items-center">
          Could not load categories. Make sure you are connected to internet, refresh and try again!
        </h3>
      </article>
    );
  }

  return (
    <main className="flex flex-col items-center gap-8">
      <article className="my-6 flex flex-col gap-8">
        <h3 className="text-[2rem] text-center font-medium">
          Click on a category to get a random joke
        </h3>
        {categoryLoading ? (
          <Loading />
        ) : (
          <ul className="w-[90%] mx-auto flex items-center flex-wrap gap-4 justify-center">
            {categories?.map((category) => {
              return (
                <li
                  key={category}
                  className={`${
                    category === selectedCategory
                      ? 'bg-green-400 text-white'
                      : 'bg-transparent'
                  } px-6 w-fit rounded-md hover:bg-green-400 hover:text-white cursor-pointer`}
                >
                  <Button
                    route={`/jokes/${category}`}
                    value={category}
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(selectCategory(category));
                      getRandomJoke({ category });
                    }}
                  />
                </li>
              );
            })}
          </ul>
        )}
      </article>

      <article className={`${isJokeSuccess || isJokeLoading ? 'flex' : 'hidden'}`}>
        {isJokeLoading ? (
          <Loading />
        ) : (
          <div className="w-[90%] mx-auto flex flex-col items-center gap-6">
            <h3 className="text-[2rem] text-center font-medium">Random Joke</h3>
            <p className="text-[2rem] text-center">
              {isJokeError ? 'Could not get joke!' : joke?.value}
            </p>
          </div>
        )}
      </article>
    </main>
  );
};

export default Categories;
