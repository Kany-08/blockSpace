import PropTypes from "prop-types";

export const YoutubeEmbed = ({ embedId }) => (
  <div className="mr-150px">
    <div className="video-responsive">
      <iframe
        width="640"
        height="360"
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