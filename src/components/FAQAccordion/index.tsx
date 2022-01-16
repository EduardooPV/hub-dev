import * as React from "react";
import { ReactNode } from "react";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Title } from './styles'

interface propsProps {
  children: ReactNode;
  value: number;
  index: number;
  dir: string
}

function TabPanel(props: propsProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tabpanel-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export function FAQAccordion() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [isWidth, setIsWidth] = React.useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: any) => {
    setValue(index);
  };

  return (
    <>
      <Title>
        Dúvidas frequentes
      </Title>

    <Box
      sx={{ bgcolor: "background.paper", maxWidth: 1240, margin: "5rem auto", padding: '0 5%'}}
      >
      <AppBar position="static" style={{ justifyContent: "center" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          <Tab label="Vantagens" {...a11yProps(0)} />
          <Tab label="Android ou iOS?" {...a11yProps(1)} />
          <Tab label="Onde baixar o aplicativo?" {...a11yProps(2)} />
          <Tab label="Preciso pagar para testar?" {...a11yProps(3)} />
          <Tab label="Canais de ajuda" {...a11yProps(4)} />
          <Tab label="Problemas para entrar" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, dui
          massa elementum euismod nisi dictumst. Nulla lorem gravida mi sit id
          ut. Suscipit libero quisque augue ut id turpis lectus. Quisque mattis
          quam bibendum tristique.pharetra fermentum. Est ornare esque at. Ut
          vel tortor nunc ac. Et nascetur eget netus pellentesque risus velit
          quis. Feugiat lacinia in viverra sollicitudin quisque odio nunc. Ut
          elementum massa viverra amet,
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, dui
          massa elementum euismod nisi dictumst. Nulla lorem gravida mi sit id
          ut. Suscipit libero quisque augue ut id turpis lectus. Quisque mattis
          quam bibendum tristique.pharetra fermentum. Est ornare esque at. Ut
          vel tortor nunc ac. Et nascetur eget netus pellentesque risus velit
          quis. Feugiat lacinia in viverra sollicitudin quisque odio nunc. Ut
          elementum massa viverra amet, elementum euismod nisi dictumst. Nulla
          lorem gravida mi sit id ut. Suscipit libero quisque augue ut id turpis
          lectus. Quisque mattis quam bibendum tristique.pharetra fermentum. Est
          ornare esque at. Ut vel tortor nunc ac. Et nascetur eget netus
          pellentesque risus velit qelementum euismod nisi dictumst. Nulla lorem
          gravida mi sit id ut. Suscipit libero quisque augue ut id turpis
          lectus. Quisque mattis quam bibendum tristique.pharetra fermentum. Est
          ornare esque at. Ut vel tortor nunc ac. Et nascetur eget netus
          pellentesque risus velit q
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, dui
          massa elementum euismod nisi dictumst. Nulla lorem gravida mi sit id
          ut. Suscipit libero quisque augue ut id turpis lectus. Quisque mattis
          quam bibendum tristique.pharetra fermentum. Est ornare esque at. Ut
          vel tortor nunc ac. Et nascetur eget netus pellentesque risus velit
          quis. Feugiat lacinia in viverra sollicitudin quisque odio nunc. Ut
          elementum massa viverra amet, elementum euismod nisi dictumst. Nulla
          lorem gravida mi sit id ut. Suscipit libero quisque augue ut id turpis
          lectus. Quisque mattis quam bibendum tristique.pharetra fermentum. Est
          ornare esque at. Ut vel tortor nunc ac. Et nascetur eget netus
          pellentesque risus velit q
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, dui
          massa elementum euismod nisi dictumst. Nulla lorem gravida mi sit id
          ut. Suscipit libero quisque augue ut id turpis lectus. Quisque mattis
          quam bibendum tristique.pharetra fermentum. Est ornare esque at. Ut
          vel tortor nunc ac. Et nascetur eget netus pellentesque risus
          velelementum euismod nisi dictumst. Nulla lorem gravida mi sit id ut.
          Suscipit libero quisque augue ut id turpis lectus. Quisque mattis quam
          bibendum tristique.pharetra fermentum. Est ornare esque at. Ut vel
          tortor nunc ac. Et nascetur eget netus pellentesque risus velit
          qelementum euismod nisi dictumst. Nulla lorem gravida mi sit id ut.
          Suscipit libero quisque augue ut id turpis lectus. Quisque mattis quam
          bibendum tristique.pharetra fermentum. Est ornare esque at. Ut vel
          tortor nunc ac. Et nascetur eget netus pellentesque risus velit
          qelementum euismod nisi dictumst. Nulla lorem gravida mi sit id ut.
          Suscipit libero quisque augue ut id turpis lectus. Quisque mattis quam
          bibendum tristique.pharetra fermentum. Est ornare esque at. Ut vel
          tortor nunc ac. Et nascetur eget netus pellentesque risus velit
          qlementum euismod nisi dictumst. Nulla lorem gravida mi sit id ut.
          Suscipit libero quisque augue ut id turpis lectus. Quisque mattis quam
          bibendum tristique.pharetra fermentum. Est ornare esque at. Ut vel
          tortor nunc ac. Et nascetur eget netus pellentesque risus velit
          qelementum euismod nisi dictumst. Nulla lorem gravida mi sit id ut.
          Suscipit libero quisque augue ut id turpis lectus. Quisque mattis quam
          bibendum tristique.pharetra fermentum. Est ornare esque at. Ut vel
          tortor nunc ac. Et nascetur eget netus pellentesque risus velit q
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, dui
          massa elementum euismod nisi dictumst. Nulla lorem gravida mi sit id
          ut. Suscipit libero quisque augue ut id turpis lectus. Quisque mattis
          quam bibendum tristique.pharetra fermentum. ntesque risus velit
          qelementum euismod nisi dictumst. Nulla lorem gravida mi sit id ut.
          Suscipit libero quisque augue ut id turpis lectus. Quisque mattis quam
          bibendum tristique.pharetra fermentum. Est ornare esque at. Ut vel
          tortor nunc ac. Et nascetur eget netus pellentesque risus velit q
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, dui
          massa elementum euismod nisi dictumst. Nulla lorem gravida mi sit id
          ut. Suscipit libero quisque augue ut id turpis lectus. Quisque mattis
          quam bibendum tristique.pharetra fermentum.  ornare esque at. Ut vel
          tortor nunc ac. Et nascetur eget netus pellentesque risus velit q
        </TabPanel>
      </SwipeableViews>
    </Box>
    </>
  );
}
