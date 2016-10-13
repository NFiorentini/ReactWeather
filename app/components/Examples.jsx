const React = require('react');
const {Link} = require('react-router');

const Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">
          Examples
      </h1>
      <p>Try out these example locations:</p>
      <ol>
        <li>
          <Link to='/?location=Seattle'>Seattle, WA</Link>
        </li>
        <li>
          <Link to='/?location=Reykjavík'>
              Reykjavík, Iceland
          </Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
