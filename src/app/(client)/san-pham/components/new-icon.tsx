const NewIcon = () => {
    return (
        <svg
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{ position: "absolute", top: "-10%", left: "-4%", zIndex: 2 }}
        >
            <rect width="70" height="70" fill="url(#pattern0_687_488)" />
            <defs>
                <pattern
                    id="pattern0_687_488"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        xlinkHref="#image0_687_488"
                        transform="scale(0.0104167)"
                    />
                </pattern>
                <image
                    id="image0_687_488"
                    width="96"
                    height="96"
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    );
};

export default NewIcon;
