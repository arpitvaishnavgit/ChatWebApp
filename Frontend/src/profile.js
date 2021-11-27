import backimage from './statics/forArrow.gif';
import bluebackimage from './statics/forArrow2.gif';
import firework from './statics/fireworks.gif';
import {useState,useEffect} from 'react';
import {RiHomeSmileFill} from 'react-icons/ri';
import {useHistory} from 'react-router-dom';




export const MyProfile = () => {
    const [showcontent,setShowcontent] = useState("");
    const history = useHistory();
    // document.document.body.style.backgroundImage = `url(${MainImage})`;
    // document.body.style.backgroundRepeat = "no-repeat";
    // document.body.style.backgroundSize = "cover";
    useEffect(() => {
        setTimeout(() => {
            setShowcontent(() => {
                return (
                <div className="textProfile">
                <h1 className="headertextProfile">Thanks For Visiting My App! Really Appreciate </h1><h1 className="emoji">&#128522;</h1>
                       <h3 className="frontandback">FrontEnd and Backend :</h3><p className="myname">Anand dudi</p><br/>
                           <div className="detailclass"><h3 className="detailText">Some-Details:</h3><p className="detail">This is my first website.I use <font color="lightcoral">REACT</font> at Front and <font color="lightcoral">DJANGO</font> at back.<br/>
                                        thanks to these frameworks to help in making these type of website really<br/>
                                        easy and productive.All are codes written by my logic and knowledge instead<br/>
                                        copy paste from Net and in this context i get to learn more complicated<br/>
                                        things at first place so it has been wonderful journey overall.<br/>
                                        I can surely say that now i can make any frontend styling and animation using CSS.<RiHomeSmileFill className="smilehome"/>
                            </p></div>
                <div onClick={()=>setTimeout(()=>{history.push("/")},230)} className="profileBackButton"><span>Back</span></div>
                </div>
                );
            })
        },8000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [history])
    return (
        <section className="profilePage">
            <img src={backimage} className="backimage" alt="cool"/>
            <div className="redArrow"></div>
            <img src={bluebackimage} className="bluebackimage"  alt=" "/>
            <div className="blueArrow"></div>
            <img src={firework} className="fireworks" alt=" "/>
            <div className="profileText">Anand dudi</div>
            {showcontent}
        </section>

        );
}
