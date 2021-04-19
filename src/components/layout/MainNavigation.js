import {Link} from 'react-router-dom';

import classes from './MainNavigation.module.css'

function MainNavigation () {
    return <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to ="/">AllMeetupsPage</Link>
                </li>
                <li>
                <Link to ="/new-meetup">NewMeetupPage</Link>
                </li>
                <li>
                <Link to ="/favorites" >FavoritesPage</Link>
                </li>
            </ul>
        </nav>
    </header>
}
export default MainNavigation;