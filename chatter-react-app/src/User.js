class User {
    constructor(props) {
      this.Name = props.Name;
      this.Password = props.Password;
      this.Nickname = props.Nickname;
      this.Picture = props.Picture;
      this.Friends_chats = new Map();
      this.Friends_names = []
      this.Light_mode = false;
    }
  
    getName() {
      return this.Name;
    }
  
    getPassword() {
      return this.Password;
    }
  
    getNickname() {
      return this.Nickname;
    }
  
    getPicture() {
      return this.Picture;
    }
  
    getFriends_chats() {
      return this.Friends_chats;
    }
  
    getFriend_chat(Name) {
      return this.Friends_chats.get(Name);
    }
  
    getFriends_Names() {
      return this.Friends_names;
    }
  
    getLight_mode() {
      return this.Light_mode;
    }
  
    setLight_mode() {
      this.Light_mode = !this.Light_mode;
    }
  
  
    IsYourFriend(Name) {
      return this.Friends_Chats.get(Name) != null;
    }
  
    getLastMsgFrom(Name) {
      if (this.IsYourFriend(Name)) {
        return this.Friends_chats.get(Name)[
          this.Friends_chats.get(Name).length - 1
        ].text;
      }
    }
  
    isChatWith(Name) {
      if (this.IsYourFriend(Name)) {
        return this.Friends_chats.get(Name).length >= 1;
      }
    }
  
    getLastTimeFrom(Name) {
      if (this.IsYourFriend(Name)) {
        return this.Friends_chats.get(Name)[
          this.Friends_chats.get(Name).length - 1
        ].time;
      }
    }
  
    AddNewFriend(Name) {
        if (!this.IsYourFriend(Name)) {
            this.Friends_chats.set(Name, []);
            this.Friends_names.push({"Name" : Name, "unread": 0})
            if (this.getFriends_Names().length >= 2){
                var first = Name;
                this.getFriends_Names().sort(function (x, y) {
                    return x.Name == first ? -1 : y.Name == first ? 1 : 0;
                });
            }
        }
        return "OK";
    }
  
    AddNewMsgTo(Name, text, time) {
      if (this.IsYourFriend(Name)) {
        this.Friends_chats.get(Name).push({
          from: this.getName(),
          to: Name,
          text: text,
          time: time,
        });
  
        if (this.getFriends_Names().length >= 2){
          var first = Name;
          this.getFriends_Names().sort(function (x, y) {
            return x.Name == first ? -1 : y.Name == first ? 1 : 0;
          });
        }
        this.getFriends_Names()[0].unread=0;
      }
    }
  
    AddNewMsgFrom(Name, text, time) {
      if (this.IsYourFriend(Name)) {
        this.Friends_chats.get(Name).push({
          from: Name,
          to: this.getName(),
          text: text,
          time: time,
        });
      
        if (this.getFriends_Names().length >= 2){
          var first = Name;
          this.getFriends_Names().sort(function (x, y) {
            return x.Name == first ? -1 : y.Name == first ? 1 : 0;
          });
        }
        this.getFriends_Names()[0].unread++;
      }
    }
  }
  
  export default User;