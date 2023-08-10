import PropTypes from 'prop-types';

const Button = ({ route, value, className, target = false, type = 'button', onClick }) => {
  return (
    <button
    type={type}
      target={target ? '_blank' : null}
      to={route || '#'}
      className={className || 'py-2 px-4 text-[1.5rem]'}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

Button.propTypes = {
  route: PropTypes.string,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  target: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
