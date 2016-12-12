const React = require('react');
import MainNav from './main-nav.jsx';

class PageHeader extends React.Component {
  render() {
    return (
      <header className="PageHeader Layout Spread">
        <div className="Branding Layout AlignCenter">
          <a href="/" title="Spotmarket home">
            <img src="images/logo.svg" alt="logo" className="logo" />
          </a>
        </div>
        <div className="Title">
          <p className="Title__SubTitle">demo application</p>
        </div>
        <div className="BaseMainNav Column FlexEnd">
          <MainNav></MainNav>
        </div>
      </header>

    );
  }
}

export default PageHeader;
