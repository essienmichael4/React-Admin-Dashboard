import './topbar.css'
import logos from'../../assets/avatar.jpg'
import { Language, NotificationsNone, Settings } from '@material-ui/icons';

function Topbar() {
    return (
      <div className="topbar">
        <div className="topbarWrapper">
            <div className="topleft">
                <span className="logo">tem
                    <span className="inner">plate</span>
                </span>
            </div>
            <div className="topright">
                <div className="topbarIconsContainer">
                    <NotificationsNone />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconsContainer">
                    <Language />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconsContainer">
                    <Settings />
                </div>
                <img src={logos} alt="profile pic" className="topAvatar"/>
            </div>
        </div>
        
      </div>
    );
  }
  
  export default Topbar;