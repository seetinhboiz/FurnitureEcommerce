const scrollToIndex = (ref: any, type?: string) => {
    const refNode = ref.current;

    refNode && refNode.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
    });

    refNode && type &&
        setTimeout(() => {
            refNode.querySelector(type).focus();
        }, 300);
};

export default scrollToIndex;
