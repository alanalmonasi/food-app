import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useGetMealData } from "../hooks/useGetMealData";

const getPrice = (price) => {
  return price.slice(0, 2).concat(".").concat(price.slice(2));
};

export const MealCard = ({ name, id, image, price }) => {
  //  const {strTags, strArea} = useGetMealData(id)
  // console.log(strArea, strTags);

  return (
    <div className="card">
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            width="300"
            image={image}
            alt={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            {/* <Typography gutterBottom variant="h6" component="span">
              {!!strArea}
            </Typography> */}
            <Typography gutterBottom variant="h6" component="span">
              <img src="src/icons/clock.png" width="15px" /> ${getPrice(price)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
