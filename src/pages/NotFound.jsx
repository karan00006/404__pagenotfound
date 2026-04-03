import { Box, Button, Chip, Stack, Typography } from '@mui/material'
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded'
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded'
import { motion } from 'framer-motion'
import instaLogo from '../assets/insta-logo.jpg'

const MotionBox = motion.create(Box)

const panelAnimation = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.55, ease: 'easeOut' },
}

function NotFound() {
  return (
    <Box
      sx={{
        minHeight: '100dvh',
        display: 'grid',
        placeItems: 'center',
        px: { xs: 1.25, sm: 2.5 },
        py: { xs: 2, sm: 3 },
        pb: { xs: 'max(16px, env(safe-area-inset-bottom))', sm: 3 },
        color: '#e2e8f0',
        background:
          'radial-gradient(circle at 15% 10%, #143868 0%, transparent 40%), radial-gradient(circle at 85% 85%, #0f766e 0%, transparent 36%), #040711',
      }}
    >
      <MotionBox
        {...panelAnimation}
        sx={{
          width: '100%',
          maxWidth: 860,
          minWidth: 0,
          borderRadius: { xs: 2, sm: 5 },
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.14)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 28px 120px rgba(0,0,0,0.55)',
          background:
            'linear-gradient(130deg, rgba(14,20,36,0.95), rgba(11,15,29,0.88))',
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
          rowGap={1}
          columnGap={1}
          sx={{
            px: { xs: 1.5, sm: 2.2 },
            py: { xs: 1.2, sm: 1.6 },
            borderBottom: '1px solid rgba(255,255,255,0.12)',
            background: 'rgba(255,255,255,0.03)',
          }}
        >
          <Stack direction="row" spacing={1}>
            {['#fb7185', '#facc15', '#34d399'].map((color) => (
              <Box
                key={color}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: color,
                  boxShadow: `0 0 10px ${color}`,
                }}
              />
            ))}
          </Stack>
          <Chip
            icon={<TerminalRoundedIcon />}
            label="SYS::404_HANDLER"
            size="small"
            sx={{
              color: '#7dd3fc',
              borderColor: 'rgba(125,211,252,.35)',
              bgcolor: 'rgba(125,211,252,.06)',
              '& .MuiChip-icon': { color: '#7dd3fc' },
              maxWidth: { xs: '100%', sm: 'none' },
              flexShrink: { xs: 1, sm: 0 },
              '& .MuiChip-label': {
                fontSize: { xs: '0.65rem', sm: '0.8125rem' },
                px: { xs: 0.5, sm: 1 },
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              },
            }}
            variant="outlined"
          />
        </Stack>

        <Stack
          spacing={{ xs: 2, sm: 2.2 }}
          alignItems={{ xs: 'center', sm: 'stretch' }}
          sx={{
            px: { xs: 2, sm: 3, md: 5 },
            py: { xs: 3, sm: 4, md: 6 },
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          <Box
            component="img"
            src={instaLogo}
            alt="4o4 page logo"
            sx={{
              width: { xs: 88, sm: 98, md: 128 },
              height: { xs: 88, sm: 98, md: 128 },
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid rgba(147,197,253,0.75)',
              boxShadow: '0 0 30px rgba(59,130,246,0.35)',
              flexShrink: 0,
            }}
          />

          <Typography
            sx={{
              fontSize: { xs: 22, sm: 28, md: 42 },
              fontWeight: 700,
              lineHeight: 1.2,
              px: { xs: 0.5, sm: 0 },
            }}
          >
            Text not found
          </Typography>

          <Typography
            sx={{
              color: '#94a3b8',
              maxWidth: 620,
              width: '100%',
              fontSize: { xs: 15, sm: 16, md: 17 },
              lineHeight: 1.65,
              whiteSpace: 'pre-line',
              wordBreak: 'break-word',
            }}
          >
            {`Error 404: Normal life not found 😂
💻 Dev memes • Code motivation • Tech vibes
🚀 Building cool stuff daily
👇 Join the debug squad`}
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.2}
            flexWrap="wrap"
            useFlexGap
            sx={{
              pt: 1,
              width: '100%',
              justifyContent: { xs: 'center', sm: 'flex-start' },
            }}
          >
            <Chip
              icon={<GridViewRoundedIcon />}
              label="STATUS: NOT_FOUND"
              variant="outlined"
              sx={{
                color: '#67e8f9',
                borderColor: 'rgba(103,232,249,.4)',
                bgcolor: 'rgba(34,211,238,.08)',
                '& .MuiChip-icon': { color: '#67e8f9' },
                maxWidth: '100%',
              }}
            />
            <Chip
              icon={<RocketLaunchRoundedIcon />}
              label="UPTIME: 99.99%"
              variant="outlined"
              sx={{
                color: '#86efac',
                borderColor: 'rgba(134,239,172,.42)',
                bgcolor: 'rgba(34,197,94,.08)',
                '& .MuiChip-icon': { color: '#86efac' },
                maxWidth: '100%',
              }}
            />
          </Stack>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            sx={{
              pt: 1,
              width: '100%',
              alignItems: { xs: 'stretch', sm: 'center' },
            }}
          >
            <Button
              href="https://www.instagram.com/4o4__pagenotfound"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="large"
              fullWidth
              sx={{
                px: 3.2,
                py: { xs: 1.35, sm: 1.2 },
                fontWeight: 700,
                textTransform: 'none',
                width: { xs: '100%', sm: 'auto' },
                minHeight: { xs: 48, sm: 'auto' },
                background:
                  'linear-gradient(90deg, rgba(37,99,235,1) 0%, rgba(14,165,233,1) 100%)',
                boxShadow: '0 10px 34px rgba(56,189,248,.35)',
              }}
            >
              Return to Home
            </Button>
            <Button
              href="https://www.instagram.com/4o4__pagenotfound/"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              size="large"
              fullWidth
              sx={{
                px: 3.2,
                py: { xs: 1.35, sm: 1.2 },
                fontWeight: 700,
                textTransform: 'none',
                width: { xs: '100%', sm: 'auto' },
                minHeight: { xs: 48, sm: 'auto' },
                borderColor: 'rgba(148,163,184,.4)',
                color: '#cbd5e1',
              }}
            >
              Run Diagnostics
            </Button>
          </Stack>

          <Button
            href="https://www.instagram.com/4o4__pagenotfound"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              alignSelf: { xs: 'center', sm: 'flex-start' },
              textTransform: 'none',
              color: '#f472b6',
              mt: 0.5,
              px: 1.2,
              py: 0.8,
              borderRadius: 2,
              maxWidth: '100%',
              '&:hover': {
                backgroundColor: 'rgba(244,114,182,0.1)',
              },
            }}
          >
            <Stack direction="row" spacing={1.1} alignItems="center">
              <Box
                component="img"
                src={instaLogo}
                alt="4o4 page logo"
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '1px solid rgba(244,114,182,0.55)',
                }}
              />
              <Box component="span">@4o4__pagenotfound</Box>
            </Stack>
          </Button>
        </Stack>
      </MotionBox>
    </Box>
  )
}

export default NotFound
