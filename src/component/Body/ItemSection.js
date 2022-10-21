import React from "react";
import { useState } from "react";
import {
  ItemContainer,
  ItemContainerOverFlow,
  ItemPrice,
  Veg,
} from "./ItemSectionEliment";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import ItemModal from "../ItemModal/ItemModal";
import _, { filter, set } from "lodash";
// import Button from "@material-ui/core/Button";
// import {AiFillFileAdd} from 'react-icons/ai'
const ItemSection = ({ surch, ctagoryes, item }) => {
  const [openItrmModal, setOpenItemModal] = useState(false);
  var IcItems = [];

  for (let i = 0; i < item.length; i++) {
    // console.log(`eydekho array${i}`,  item[i].itemCategory._id);
    if (item[i].itemCategory !== undefined) {
      IcItems.push(item[i].itemCategory);
    } else {
      // console.log('y',item[i]);
      IcItems.push(item[i]);
    }
  }
  console.log("look at me", IcItems);
  var lastarr = [];
  const uniq = IcItems.filter((item) => {
    const isDub = lastarr.includes(item._id);
    if (!isDub) {
      lastarr.push(item._id);
      return true;
    }
    return false;
  });
  console.log(uniq);
 

  const postItem = (e) => {
    setOpenItemModal(true);
    //axios for
  };

  return (
    <>
      <ItemContainer>
        <ItemContainerOverFlow>
          {uniq
            .filter((item) => item.Active === true)
            .filter(
              (item) =>
                item.categoryName.includes(surch) ||
                item.itemName.includes(surch)
            )
            .map((filtered) => {
              console.log(filtered._id);
              return (
                <>
                  <Card
                    key={filtered._id}
                    style={{
                      margin: "5px",
                      height: "150px",
                      width: "130px",
                      marginBottom: "10px",
                      boxShadow: "rgb(0 0 0 / 40%) 1px 3px 5px 3px",
                    }}
                    onClick={postItem}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="50"
                        width="50"
                        image={`http://192.168.29.146:2000${filtered.categoryImage[0].path.slice(
                          6
                        )}`}
                        alt="fishfry Img"
                      />
                      <CardContent style={{ padding: "0", height: "10px" }}>
                        <h6 style={{ margin: "0" }}>
                          Category :-{filtered.Category}
                        </h6>
                        <Typography
                          gutterBottom
                          variant="body2"
                          style={{
                            marginleft: "",
                            display: "flex",
                            justifyContent: "",
                            alignItems: "center",
                            marginTop: "5px",
                            fontSize: "8px",
                          }}
                          component="div"
                        >
                          <p style={{ margin: "0", fontSize: "1rem" }}>
                            {" "}
                            {filtered.categoryName}
                          </p>
                        </Typography>
                        <ItemPrice
                          style={{
                            marginTop: "10px",
                            background:
                              " linear-gradient(180deg, rgba(255,215,65,0.7903536414565826) 0%, rgba(255,255,255,0.8827906162464986) 100%)",
                            height: "50px",
                          }}
                        >
                          <Typography
                            gutterBottom
                            variant="h5"
                            style={{
                              marginBottom: "0",
                              marginLeft: "0",
                              color: "black",
                              fontSize: "12px",
                              fontWeight: "bolder",
                            }}
                            component="div"
                          >
                            <span
                              style={{
                                color: "black",
                                marginLeft: "8px",
                                fontSize: "13px",
                              }}
                            >
                              {" "}
                              ₹{" "}
                            </span>
                            400
                            <span
                              style={{
                                backgroundColor: "blueviolet",
                                color: "white",
                                borderRadius: "10px",
                                padding: "6px",
                                marginLeft: "10px",
                              }}
                            >
                              20% off
                            </span>
                          </Typography>

                          <Veg>
                            <Chip
                              label=""
                              component="a"
                              href="#basic-chip"
                              style={{
                                height: "10px",
                                width: "10px",
                                backgroundColor: "green",
                                marginBottom: "7px",
                              }}
                            />
                            <Chip
                              label=""
                              component="a"
                              href="#basic-chip"
                              style={{
                                height: "10px",
                                width: "10px",
                                backgroundColor: "red",
                              }}
                            />
                          </Veg>
                        </ItemPrice>
                      </CardContent>
                    </CardActionArea>
                    {/* <CardActions>
                  <Button variant="contained" color="primary"  startIcon={<AiFillFileAdd style={{color:'white'}}/>} >
                    Add
                  </Button>
                </CardActions> */}
                  </Card>
                  {openItrmModal ? (
                    <ItemModal setOpenItemModal={setOpenItemModal} />
                  ) : (
                    ""
                  )}
                </>
              );
            })}
        </ItemContainerOverFlow>
      </ItemContainer>
    </>
  );
};

export default ItemSection;
