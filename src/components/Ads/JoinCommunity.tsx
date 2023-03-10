import React, { memo } from 'react';
import Text from 'components/common/Text';
import Button from 'components/common/Button';
import Image from 'next/image';
import { Box } from '@mui/material';
import { useTheme } from 'hooks/common';
import bgImage from 'assets/home/join-community.webp';
import Link from 'next/link';
import { url } from 'const/config';

function JoinCommunity() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 'max-content',
        maxWidth: '320px',
        height: '340px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: theme.bg.secondary,
        // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '1rem',
        padding: '1rem 1.5rem',
        paddingBottom: '2.5rem',
        border: `1px solid ${theme.text.highlight}`,
        position: 'relative',
      }}
    >
      <Image
        src={bgImage}
        alt=""
        style={{
          width: '150px',
          maxHeight: '150px',
          objectFit: 'cover',
        }}
      />
      <Text
        color={theme.text.highlight}
        sx={{
          fontSize: '1.4rem',
          fontWeight: '600',
          lineHeight: '1.8rem',
          mt: '1rem',
        }}
      >
        Want to Join Community?
      </Text>
      <Text
        color={theme.text.secondary}
        sx={{
          fontSize: '1rem',
          fontWeight: '400',
          lineHeight: '1.5rem',
          mt: '0.5rem',
          textAlign: 'center',
        }}
      >
        Join No1 community to learn up to date news and technologies in frontend
        development
      </Text>
      <Link href={url.JOIN_COMMUNITY} target="_blank">
        <Button
          sx={{
            position: 'absolute',
            bottom: '-16px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: theme.bg.gradient,
            whiteSpace: 'nowrap',
          }}
        >
          Join Community
        </Button>
      </Link>
    </Box>
  );
}

export default memo(JoinCommunity);
