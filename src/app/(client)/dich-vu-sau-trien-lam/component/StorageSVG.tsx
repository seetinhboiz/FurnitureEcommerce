import Image from 'next/image';
import storageImage from '/public/images/service/storage.svg';

export default function StorageSVG() {
    return (
        <Image
            src={storageImage}
            alt=""
            layout="responsive"
            width={1}
            height={1}
        />
    );
}
