import {createStore} from 'redux';
import reducer from "../reducers/reducers";
import thunk from 'redux-thunk';

let image = require("../../images/Blog_img.jpg"),
    image1 = require("../../images/Blog_img1.jpg"),
    image2 = require("../../images/Blog_img2.jpg"),
    image3 = require("../../images/Blog_img3.jpg"),
    blogpic = require("../../images/Blog_pic.jpg"),
    blogpic1 = require("../../images/Blog_pic1.jpg"),
    blogpic2 = require("../../images/Blog_pic2.jpg"),
    blogpic3 = require("../../images/Blog_pic3.jpg");
    
export function configureStore(initialState = {	selectedHeaderTab : "ALL",
            									selectedLink : "ABOUT",				
            									tabHeader : [{ name : "ALL",value: "ALL",width:"7.5%"},
															{ name : "INVESTMENTS",value: "INVESTMENTS",width:"17.5%"},
															{ name : "FINANCE",value: "FINANCE",width:"12.5%"},
															{ name : "CREDIT",value: "CREDIT",width:"12.5%"},
															{ name : "OTHER",value: "OTHER",width:"12.5%"},
															{ name : "MORE",value: "MORE",width:"12.5%"},
															{ name : "FAMILY",value: "FAMILY",width:"12.5%"},
															{ name : "RUPEE",value: "RUPEE",width:"12.5%"}],
												linkHeader : [{ name : "ABOUT",value: "ABOUT"},
															  { name : "MEMBERSHIP BENEFITS",value: "MEMBERSHIPBENEFITS"},
															  { name : "RESOURCES",value: "RESOURCES"},
															  { name : "BLOG",value: "BLOG"},
															  { name : "CONTACT",value: "CONTACT"}],
												rightSideContent :[{ header : 'What people consider themselves?',
																	 content : '70% investors are "Asset Poor" - What about you?',
																	 image : image},
																   { header : 'What people consider themselves?',
																	  content : '70% investors are "Asset Poor" - What about you?',
																	  image : image1},
																   { header : 'What people consider themselves?',
																	  content : '70% investors are "Asset Poor" - What about you?',
																	  image : image2},
																   { header : 'What people consider themselves?',
																	  content : '70% investors are "Asset Poor" - What about you?',
																	  image : image3}],
												leftPanelContent :[{ header : 'Customers can refuse to pay <strong>"Service Charge"</strong> at Restaurants - Govt',
																	  postedBy : 'MANISH CHAUHAN',
																	  date : 'DEC 12,2016 10:32 AM',
																	  comments : [],
																	  image : blogpic,
																	  description : 'Govt has clarified that the "service charge" in optional and customers can refuse to play that if they feel like.Form some years,most of the restaurants and hotels have started charging "service charge" along with the other taxes in their bills and we customers due to lack of understandings feel obligated to play it.Howevere the govt has issued a notifiaction today which clearly mentions that if customers is'
																	 },
																	{header : 'EPF interest tare reduced to 8.65 % from old 8.8%',
																	  postedBy : 'MANISH CHAUHAN',
																	  date : 'DEC 12,2016 10:32 AM',
																	  comments : [],
																	  image : blogpic1,
																	  description : 'The EPFO departmnet (Employees Provident Fund Organisation) reduced the EPF interest rate to 8.65% today.The old interset rate was 8.8%. This interest wil be applicable for the deposits made financial yaer 2016-2017.Which means that all the deposits which were made after 1st Apr,2016 by the Employers will be earning the interest of 8.65% only,and not 8.8%.Why was EPF interset rate was reduced? as per ...'
																	 },
																	 {header : '6 proven ways of becoming RICH (are yo one of them) ?',
																	  postedBy : 'MANISH CHAUHAN',
																	  date : 'DEC 12,2016 10:32 AM',
																	  comments : [],
																	  image : blogpic2,
																	  description : "Can you name a billionaire who don't start a company? or a $ millionaire for that case? in this article,we are going to about various ways people become RICh.NO ,it's not a tutorial on how to become rich,but just a conersation on what are various ways using which people have become rich.May be you will get some idea of which path you want to..."
																	 },
																	 {header : 'Should you invest in ESPP plan? Here are 2 critical points everyone should know',
																	  postedBy : 'MANISH CHAUHAN',
																	  date : 'DEC 12,2016 10:32 AM',
																	  comments : [],
																	  image : blogpic3,
																	  description : "Today we will talk about various aspects of ESPP plan? We will aslo see if it really make sense to invest in ypur employers ESPP plan or not, and what are the pros and cons of that.For those who have no idea about ESPP,its full form is Employee Stock Purchase plans and it;s mainly an offer from your employer to buy the stockes of the company at some..."
																	 }]
													}) {  
  const store = createStore(
    reducer,
    initialState
  )
  return store;
};

export const store = configureStore();  