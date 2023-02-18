import Star from './Star'
import PropTypes from 'prop-types'

function Stars ({count}) {
    if (count <= 0 || count > 5 || isNaN(count)) return null;

    const starsCount = [...Array(count).keys()];

    return (
        <ul className="card-body-stars u-clearfix">
            {starsCount.map((item) => (
                <li key={item}>
                    <Star/>
                </li>
            ))}
        </ul>
    )
}

Stars.propTypes = {
    count: PropTypes.number,
};

Stars.defaultProps = {
    count: 0,
}

export default Stars;
