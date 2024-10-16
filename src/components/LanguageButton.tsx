'use client'; // Ensure this is a client component

import React, { useEffect, useState } from 'react';
import { Select, MenuItem, FormControl, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import '../../next-i18next.config';

const LanguageSelectContainer = styled(FormControl)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(0.5, 2),
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    minWidth: 120,
}));

const LanguageButton = () => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState('vn');

    const checkLanguageSetting = () => {
        const storageLang = localStorage.getItem('lang');

        if (storageLang) {
            i18n.changeLanguage(storageLang);
        }

        localStorage.setItem('lang', 'vn');
    };

    const handleLanguageChange = (event: any) => {
        const value = event.target.value;
        setLanguage(value);
        localStorage.setItem('lang', value);
        checkLanguageSetting();
    };

    return (
        <LanguageSelectContainer variant="outlined">
            <Select
                renderValue={(value) => {
                    return (
                        <Avatar>
                            <Image
                                alt="vn"
                                src={
                                    language === 'en'
                                        ? '/images/flag/eng.png'
                                        : language === 'vn'
                                          ? '/images/flag/vn.png'
                                          : '/images/flag/zh.png'
                                }
                                quality={100}
                                fill
                            />
                            ;
                        </Avatar>
                    );
                }}
                value={language}
                onChange={handleLanguageChange}
                sx={{
                    color: '#fff',
                    '.MuiSvgIcon-root ': {
                        fill: '#fff',
                    },
                    '.MuiOutlinedInput-notchedOutline': { borderStyle: 'none' },
                }}
            >
                <MenuItem value="vn">VN</MenuItem>
                <MenuItem value="cn">中文</MenuItem>
                <MenuItem value="en">ENG</MenuItem>
            </Select>
        </LanguageSelectContainer>
    );
};

export default LanguageButton;
