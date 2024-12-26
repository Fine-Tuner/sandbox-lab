import React from 'react'

function Card(props) {
	const imgRef = useRef(null);
	useEffect(() => {
		const callback = (entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.src = entry.target.dataset.src;
            // 한번 호출한 이후로는 호출할 필요가 없다.
            observer.unobserve(entry.target);
          }
        }
      );
		}
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 1.0
		}
		const observer = new IntersectionObserver(callback, options);
		observer.observe(imgRef.current);

		return () => observer.disconnect();
	}, [])

	return (
		<div className="Card text-center">
			<img ref={imgRef} data-src={props.image}/>
			<div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
				{props.children}
			</div>
		</div>
	)
}

export default Card
