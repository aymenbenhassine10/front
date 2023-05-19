import { Component } from '@angular/core';
import { ChatService } from '../chat.service';
import {WebRtcPeer} from 'kurento-utils';

@Component({
  selector: 'app-webrtc',
  templateUrl: './webrtc.component.html',
  styleUrls: ['./webrtc.component.css']
})
export class WebrtcComponent {

  roomName = ""
  userName = ""
  userId = ""

  newMessage: any;
  messageList: string[] = [];



  constructor(private chatService: ChatService){

  }

  ngOnInit(){
    this.chatService.handle(this.roomName, this.userName).subscribe((message: any) => {
      console.log("user Id ", message.userid)
      // this.messageList.push(message);
    })

    this.chatService.getInfo().subscribe((message: string) => {
      console.log(message);
    })



    // this.chatService.getNewMessage().subscribe((message: string) => {
    //   console.log(message);
    //   // this.messageList.push(message);


    // // this.chatService.handle(this.roomName,this.userName);



    // })
  }

  doSomthing () {
    if (this.roomName === '' || this.userName === '') {
        alert('Room and Name are required!');
    } else {
        var message = {
            event: 'joinRoom',
            userName: this.userName,
            roomName: this.roomName
        }
        this.chatService.sendMessage(message);

        // divRoomSelection.style = "display: none";
        // divMeetingRoom.style = "display: block";
    }
}



}
