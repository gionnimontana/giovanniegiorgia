import './FlatLoader.css'

const FlatLoader = ({ width }) => {
	return (
		<div className="flatloader_loader" style={{ width: width || '90%' }}>
			<div className="flatloader_loaderBar"></div>
		</div>
	)
}

export default FlatLoader
