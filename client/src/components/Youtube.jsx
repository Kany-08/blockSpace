import PropTypes from "prop-types";

export const YoutubeEmbed = ({ embedId }) => (
  <div className="mr-150px">
    <div style={{ position: 'relative' , height: '40vw' , borderRadius: '10px', width: '70vw', overflow: 'hidden'}}>
      <iframe
 
        style={{ position: 'relative', top: 0, left: 0, bottom: 0, right: 0,   width: '100%',
        height: '100%' }}
      
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
    </div>
  );
  
  YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
  };