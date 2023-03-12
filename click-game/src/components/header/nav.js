import { useState } from "react";

function NavBar() {
    const [count, setCount] = useState(0);

    return(
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="./">Navbar</a>
                <button className="btn btn-primary btn-lg" onClick={() => setCount(count + 1)}>Click</button>
                <p>{count}</p>
            </div>
        </nav>
    );
};

export default NavBar;