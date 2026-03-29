import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
function InfoBox({ info }) {
    const INIT_URL="https://images.unsplash.com/photo-1593978301851-40c1849d47d4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYXRoZXIlMjBhcHB8ZW58MHx8MHx8fDA%3D"
    return(
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
             <Card sx={{ width: '100%', maxWidth: 345, borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="160"
        image={INIT_URL}
      />
      <CardContent style={{ textAlign: 'left' }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
         {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', display: 'flex', flexDirection: 'column', gap: '8px' }} component={"span"}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span><b>Temp:</b> {info.temp}&deg;C</span>
            <span><b>Humidity:</b> {info.humidity}%</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span><b>Min:</b> {info.temp_min}&deg;C</span>
            <span><b>Max:</b> {info.temp_max}&deg;C</span>
          </div>
          <div><b>Wind Speed:</b> {info.wind} m/s</div>
          <div style={{ marginTop: '10px', fontStyle: 'italic', color: '#555' }}>
            The weather can be described as <b>{info.description}</b> and feels like {info.weather}.
          </div>
        </Typography>
      </CardContent>
    </Card>

        </div>
    )
}
export default InfoBox;