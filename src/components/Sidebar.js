
import './Sidebar.css';

function Sidebar()
{
    return(
        <div>
             <div className="sidebar">
    <a href="/" className="sidebar-item">
      <i className="fas fa-home"></i>
      <span>Home</span>
    </a>
    <a href="/" className="sidebar-item">
      <i className="fas fa-user"></i>
      <span>Profile</span>
    </a>
    <a href="/" className="sidebar-item">
      <i className="fas fa-briefcase"></i>
      <span>Jobs</span>
    </a>
    <a href="/" className="sidebar-item">
      <i className="fas fa-envelope"></i>
      <span>Applied</span>
    </a>
    <a href="/" className="sidebar-item">
      <i className="fas fa-compass"></i>
      <span>Discover</span>
    </a>
    <a href="/" className="sidebar-item">
      <i className="fas fa-comments"></i>
      <span>Massage</span>
    </a>
  </div>
        </div>
    )
}
export default Sidebar;


