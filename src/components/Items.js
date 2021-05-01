import './Items.css';

const Items = (props) => {
  return <div className="item">
      <div className="item_title">
          <h2>{props.title}</h2>

      </div>
      <div className="item_content">
          
          <img src={props.imge} alt=""/>

      </div>
  </div>;
};

export default Items;
