import { PieChart } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

interface BudgetItem {
  id: number;
  label: string;
  value: number;
  color: string;
  limit: number;
}

interface PieChartMUIProps {
  data?: BudgetItem[];
}

export default function PieChartMUI(props: PieChartMUIProps) {
  const data = props?.data ?? [];
  const total = data.reduce((a: number, b: BudgetItem) => a + b.value, 0);
  const limit = data.reduce((a: number, b: BudgetItem) => a + b.limit, 0);

  const theme = useTheme();
  const isNarrow = useMediaQuery(theme.breakpoints.down('sm'));

  const chartSize = isNarrow ? 200 : 260;
  const innerR = isNarrow ? 70 : 90;
  const outerR = isNarrow ? 92 : 120;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1.5,
        borderRadius: '12px',
        width: '100%',
        maxWidth: 364,
        minHeight: 220,
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          flexShrink: 0,
          width: chartSize,
          height: chartSize,
        }}
      >
        <PieChart
          series={[
            {
              data: data.map(({ id, label, value, color }: BudgetItem) => ({ id, label, value, color })),
              innerRadius: innerR,
              outerRadius: outerR,
            },
          ]}
          width={chartSize}
          height={chartSize}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          hideLegend
          slotProps={{
            pieArc: { stroke: '#fff', strokeWidth: 2 },
          }}
          sx={{ display: 'block' }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <Typography component="span" sx={{ fontSize: isNarrow ? '1.25rem' : '1.5rem', fontWeight: 700 }}>
            ${total}
          </Typography>
          <Typography component="span" sx={{ fontSize: isNarrow ? '0.75rem' : '0.875rem', color: '#666' }}>
            of ${limit} limit
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 1,
          justifyContent: { xs: 'center', sm: 'flex-start' },
        }}
      >
        {data.map((item: BudgetItem) => (
          <Box
            key={item.id}
            sx={{
              minWidth: 90,
              width: 101,
              height: 43,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              pl: '16px',
              bgcolor: '#fff',
              borderRadius: '8px',
              boxSizing: 'border-box',
            }}
          >
            <Typography
              component="span"
              sx={{ fontSize: 12, fontWeight: 600, color: '#333', lineHeight: 1.2 }}
            >
              {item.label}
            </Typography>
            <Typography
              component="span"
              sx={{ fontSize: 14, fontWeight: 700, color: '#111', mt: '2px' }}
            >
              ${item.limit.toFixed(2)}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
