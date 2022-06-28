import './FlatLoader.css'

const FlatLoader = ({ width, id }) => {
	return (
		<div id={id} className="flatloader_loader" style={{ width: width || '90%' }}>
			<div className="flatloader_loaderBar"></div>
		</div>
	)
}

export default FlatLoader
