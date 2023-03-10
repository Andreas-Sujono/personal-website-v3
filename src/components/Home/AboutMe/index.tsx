import React, { memo } from 'react';
import Text from 'components/common/Text';
import Image from 'next/image';
import { Box, Grid } from '@mui/material';
import Content from 'components/common/Container/Content';
import bgImage from 'assets/home/about-me-bg.webp';
import profileImage from 'assets/home/profile.webp';
import experienceImage from 'assets/home/experience.webp';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import useWindowDimensions from 'hooks/common/useDimension';
import Fade from 'react-reveal/Fade';
import useTheme from 'hooks/common/useTheme';

const data = [
  {
    subject: 'Frontend Dev',
    A: 99,
    fullMark: 100,
  },
  {
    subject: 'Backend Dev',
    A: 85,
    fullMark: 100,
  },
  {
    subject: 'Devops',
    A: 75,
    fullMark: 100,
  },
  {
    subject: 'Cloud Architect',
    A: 75,
    fullMark: 100,
  },
  {
    subject: 'Blockchain',
    A: 80,
    fullMark: 100,
  },
  {
    subject: 'Data Science',
    A: 60,
    fullMark: 100,
  },
];

function AboutMe() {
  const { width } = useWindowDimensions();
  const theme = useTheme();
  const isMobile = width < 900;
  const isSuperMobile = width < 900;

  return (
    <Grid
      container
      justifyContent="space-between"
      sx={{
        flexDirection: isMobile ? 'column-reverse' : 'row',
      }}
      id="about-me"
    >
      <Grid item xs={true} sx={{}}>
        <Box
          sx={{
            paddingY: '2rem',
            position: 'relative',
            paddingTop: isMobile ? '3rem' : '5rem',
          }}
        >
          <Content
            sx={{
              position: 'relative',
              paddingLeft: {
                md: '20%',
                xs: '16px',
              },
            }}
          >
            <Fade>
              <Grid
                container
                justifyContent={{
                  md: 'flex-start',
                  xs: 'center',
                }}
              >
                <Grid item md={4}>
                  <Box>
                    <Image
                      src={profileImage}
                      alt=""
                      style={{
                        width: '100%',
                        maxWidth: '230px',
                        height: 'auto',
                        maxHeight: '230px',
                        objectFit: 'cover',
                        zIndex: 1,
                        margin: 'auto',
                        display: 'block',
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item md={6}>
                  <Text
                    sx={{
                      fontSize: '1.15rem',
                      lineHeight: '2rem',
                      margin: 'auto',
                      display: 'block',
                      ml: '2rem',
                      mt: {
                        md: '0',
                        xs: '1rem',
                      },
                    }}
                  >
                    Andreas is a passionate and tech enthusiast with 5+ years of
                    working experience in more than 7 different companies with
                    diverse industries such as robotics, ed-tech, gaming,
                    blockchain, data, and cybersecurity company. He has
                    expertise in Frontend, Backend, Cloud Architect, Devops, and
                    Blockchain development
                  </Text>
                </Grid>
              </Grid>
            </Fade>
            <Fade>
              <Grid
                container
                sx={{
                  mt: {
                    md: '5rem',
                    xs: '2rem',
                  },
                }}
              >
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    paddingX: {
                      md: '0',
                      xs: '2rem',
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis />
                      <Radar
                        name="Mike"
                        dataKey="A"
                        stroke="#e21a6dd2"
                        fill="#e21a6dd2"
                        fillOpacity={0.6}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    paddingX: {
                      md: '0',
                      xs: '2rem',
                    },
                    mt: {
                      md: 0,
                      xs: '1rem',
                    },
                  }}
                >
                  <Image
                    src={experienceImage}
                    alt=""
                    style={{
                      width: '100%',
                      maxWidth: '360px',
                      height: 'auto',
                      objectFit: 'cover',
                      zIndex: 1,
                      display: 'block',
                    }}
                  />
                </Grid>
              </Grid>
            </Fade>
          </Content>
        </Box>
      </Grid>
      <Grid
        item
        sx={{
          width: {
            md: '30%',
            xs: '100%',
          },
          position: 'relative',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: isMobile ? '160px' : '800px',
            background: theme.bg.secondary,
          }}
        >
          {/* <Image
            src={bgImage}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              maxHeight: isMobile ? '200px' : '800px',
              objectFit: 'cover',
              zIndex: 1,
              borderRadius: '1rem 0 0 1rem',
            }}
          /> */}
          <Text
            sx={{
              zIndex: 2,
              fontSize: {
                md: '3rem',
                sm: '2.5rem',
                xs: '2rem',
              },
              color: theme.theme === 'dark' ? 'white' : theme.text.primary,
              fontFamily: 'Rock Salt',
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              position: 'absolute',
              top: '48%',
              left: '52%',
              transform: 'translate(-50%, -50%)',
              whiteSpace: 'nowrap',
            }}
          >
            ABOUT ME
          </Text>
        </Box>
      </Grid>
    </Grid>
  );
}

export default memo(AboutMe);
