import Text from 'components/common/Text';
import Image from 'next/image';
import { Box } from '@mui/material';
import { useTheme } from 'hooks/common';
import { Article } from '..';
import moment from 'moment';

interface Props {
  article: Article;
}

export default function MainCard({ article }: Props) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        // border: `1px solid #e1e0e0a3`,
        // border: `1px solid ${theme.text.highlight}`,
        borderRadius: '1rem',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.221)',
      }}
    >
      <a target="_blank" href={article.link} rel="noopener noreferrer">
        <Box
          sx={{
            p: 1.5,
          }}
        >
          <Text
            sx={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              overflow: 'hidden',
              maxWidth: '100%',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            }}
          >
            {article.title}
          </Text>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 1,
              mb: 2,
            }}
          >
            <Text
              sx={{
                color: theme.text.secondary,
              }}
            >
              Posted{' '}
              {moment.duration(-moment().diff(article.pubDate)).humanize(true)}
            </Text>
            <Text
              sx={{
                color: theme.text.secondary,
              }}
            >
              By Andreas Sujono
            </Text>
          </Box>
        </Box>
        <Image
          src={article.thumbnail}
          width={400}
          height={400}
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '360px',
            objectFit: 'cover',
            borderRadius: '0.6rem',
          }}
          alt=""
        />
      </a>
    </Box>
  );
}