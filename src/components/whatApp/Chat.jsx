import React from 'react'
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const Chat = () => {
  return (
    <div>
      <WhatsAppWidget
			phoneNo="0556230613"
			position="left"
			widgetWidth="300px"
			widgetWidthMobile="260px"
			autoOpen={true}
			autoOpenTimer={5000}
			messageBox={true}
			messageBoxTxt="Hi Team, is there any related service available ?"
			iconSize="40"
			iconColor="white"
			iconBgColor="green"
			headerIcon="https://www.pdapps.net.in/_next/static/media/android-chrome-192x192.9a39c2c7.png"
			headerIconColor="pink"
			headerTxtColor="white"
			headerBgColor="green"
			headerTitle="Mustapha Tahiru"
			headerCaption="Online"
			bodyBgColor="#bbb"
			chatPersonName="Support"
			chatMessage={<>Hi there 👋 <br /><br /> How can I help you?</>}
			footerBgColor="#999"
			placeholder="Type a message.."
			btnBgColor="green"
			btnTxt="Start Chat"
			btnTxtColor="white"
		/>
    </div>
  )
}

export default Chat
