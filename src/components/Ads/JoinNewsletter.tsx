import React, { memo } from 'react';
import Text from 'components/common/Text';
import Button from 'components/common/Button';
import Image from 'next/image';
import { Box } from '@mui/material';
import { useTheme } from 'hooks/common';
import bgImage from 'assets/home/join-class.webp';
import TextInput from 'components/common/Form/TextInput';
import useWindowDimensions from 'hooks/common/useDimension';
import Link from 'next/link';
import { url } from 'const/config';

function JoinNewsletter() {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const isMobile = width < 800;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '900px',
        background: theme.bg.secondary,
        // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '1rem',
        padding: '1.2rem 1.5rem',
        paddingBottom: '1.2rem',
        margin: 'auto',
        width: '90%',
        mt: {
          md: 10,
          xs: 2,
        },
        mb: 5,
        border: `1px solid ${theme.text.highlight}`,
        position: 'relative',
        paddingTop: '0.4rem',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          pb: '1rem',
          zIndex: 3,
          width: '100%',
        }}
      >
        <Text
          color={theme.text.highlight}
          sx={{
            fontSize: '1.5rem',
            fontWeight: '600',
            lineHeight: '1.8rem',
          }}
        >
          Join My NewsLetter
        </Text>
        <Text
          color={theme.text.secondary}
          sx={{
            fontSize: '1rem',
            fontWeight: '400',
            mt: '0.4rem',
          }}
        >
          Read Up to date web frontend technologies and other software
          enginering skills
        </Text>
        {/* <TextInput
          label=""
          placeholder="Email Address"
          sx={{
            mt: '0.5rem',
          }}
          fullWidth
        /> */}

        <Link href={url.SUBSCRIBE_NEWSLETTER} target="_blank">
          <Button
            sx={{
              position: 'absolute',
              bottom: {
                md: '-42px',
                xs: '-36px',
              },
              left: 0,
              background: theme.bg.gradient,
            }}
          >
            Join Newsletter
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          position: 'relative',
        }}
      >
        <Image
          src={bgImage}
          alt=""
          style={{
            width: 'auto',
            maxHeight: '130px',
            height: 'auto',
            display: isMobile ? 'block' : 'block',
            position: isMobile ? 'absolute' : 'relative',
            bottom: isMobile ? '-90px' : '-12px',
            right: isMobile ? '-32px' : '0',
            zIndex: 1,
            opacity: isMobile ? 0.3 : 1,
          }}
        />
      </Box>
    </Box>
  );
}

export default memo(JoinNewsletter);
