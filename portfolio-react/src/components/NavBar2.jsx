

const Nav2 = () => {
    return (
        <nav className="navbar navbar-default" role="navigation">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle x collapsed" data-toggle="collapse" data-target="#navbar-collapse-x">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#top">.navbar-toggle.x</a>
            </div>

            <div className="collapse navbar-collapse" id="navbar-collapse-x">
                <ul className="nav navbar-nav navbar-right">
                    <li data-toggle="collapse" data-target="#navbar-collapse.in"><a href="#top">Link</a></li>
                    <li data-toggle="collapse" data-target="#navbar-collapse.in"><a href="#top">Link</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav2;