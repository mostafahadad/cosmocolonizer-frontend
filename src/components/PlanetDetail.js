import { Typography } from "@mui/material";

export default function PlanetDetail({ label, value }) {
    return (
      <Typography variant="subtitle1" color="text.primary">
        {label}: {value}
      </Typography>
    );
}

  