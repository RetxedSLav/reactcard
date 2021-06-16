import React from "react";
import { styled } from '@material-ui/core/styles';
import { Card, CardContent, Typography,CssBaseline, Grid, Container, Box }  from '@material-ui/core';
import data from "./data.js";


class RCard extends React.Component {
    render() {
        return (
                <>
                    <CssBaseline/>
                    <Container>
                        <Grid container spacing ={4}>
                          {data.map(count=>
                            {
                                 return(
                                         <div key={count.id}>
                                                     <Grid item key={MyCard}>
                                                         <MyCard>
                                                             <IconBox >                                                                 
                                                                    {count.icon }                                          
                                                                                                                                                                                                                                                                                                                      
                                                             </IconBox>
                                                             <CardContent >
                                                                  <Num>
                                                                    {count.dcount}
                                                                  </Num>
                                                                  <Text>
                                                                    {count.label}
                                                                 </Text>
                                                                 <PCard >
                                                                       <Pill align='center'>
                                                                            {count.percent}
                                                                        </Pill>
                                                                 </PCard> 
                                                             </CardContent>
                                                         </MyCard>
                                                     </Grid>                       
                                         </div>
                                       )
                                       }
                                    )
                            }                
                        </Grid>
                    </Container>
                </>
               )    
    }
}

const MyCard = styled(Card)({
    
      borderRadius:'15px', /* added */
      background: 'linear-gradient(45deg, #2134E7 35% , #33E2F3 100%)',
      display: 'flex',
      flexDirection: 'column',
      height: '156px',
      padding: '10 10 ',
      width: '254px',
      position:'relative',
      top:'40px',
      left:'500px'
      
});
     
const Num = styled(Typography)({
    
    color:'white',
    fontFamily: 'Poppins',
    fontSize: '32px',
    display: 'flex-right',
    fontWeight: 700,
    align: 'center', 
    position:'absolute',
    top:'80px',
    left:'20px'
        
});

const Text = styled(Typography)({
    
    color:'white',
    fontFamily: 'Poppins',
    fontSize: '12.5px',
    fontWeight: 500,
    align: 'right',
    position:'absolute',
    letterSpacing: '0.4px',
    bottom:'20px',
    left:'20px'
      
});

const PCard = styled(Card)({
    
    
    borderRadius:'40px',
    width: '76px',
    height:'33px',
    padding: '5px 20px',
    position: 'absolute',
    backgroundColor: '#ffffff1f',
    border: '0.5px solid #ffffff30',
    right:'20px',
    bottom:'20px'
      
});

const Pill = styled(Typography)({
    
    color: 'white',
    fontFamily: 'poppins',
    fontSize: '17.5px',
    align: 'center',
  
});

const IconBox = styled(Box)({
    height: '35px',
    left: '20px',
    top:'20px',
    width: '35px',
    borderRadius:'5px',
    padding:'10px 10px',
    position:'absolute',
    background:'white',
});

export default RCard;
