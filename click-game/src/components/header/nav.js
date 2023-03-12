
function NavBar(props) {

    return(
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="./">Navbar</a>
                <button className="btn btn-primary btn-lg">Click</button>
                <p>{props.count}</p>
            </div>
        </nav>
    );
};

export default NavBar


// need to make the count increase when a card is clicked instead of click button
