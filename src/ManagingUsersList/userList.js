
const userList = [{
    userName: 'daniel', display: 'dan', password: 'daniel!',
    conversations: [{
        username: "dvir",
        messages: [{ src: "send", type: "text", context: "hi", time: "10:55" }, { src: "recv", type: "text", context: "bii", time: "10:58" }]
    },
    {
        username: "tzvi",
        messages: [{ src: "send", type: "text", context: "barrr", time: "10:22" }, { src: "recv", type: "text", context: "fooo", time: "04:58" }]
    }]
},
{
    userName: 'dvir', display: 'dvir', password: 'dvir!',
    conversations: [{
        username: "daniel",
        messages: [{ src: "send", type: "text", context: "hi", time: "08:23" }, { src: "recv", type: "text", context: "bii", time: "06:33" }]
    }]
},
{
    userName: 'oz', display: 'ozzzz', password: 'oz!',
    conversations: [{
        username: "david",
        messages: [{ src: "send", type: "text", context: "hi", time: "10:55" }, { src: "recv", type: "text", context: "bii", time: "10:58" }]
    }]
},
{
    userName: 'david', display: 'dudu', password: 'david!',
    conversations: [{
        username: "dvir",
        messages: [{ src: "send", type: "text", context: "hi", time: "10:55" }, { src: "recv", type: "text", context: "bii", time: "10:58" }]
    }]
},
{
    userName: 'tzvi', display: 'tzviki', password: 'tzvi!',
    conversations: [{
        username: "dvir",
        messages: [{ src: "send", type: "text", context: "hi", time: "10:55" }, { src: "recv", type: "text", context: "bii", time: "10:58" }]
    }]
},
{
    userName: 'yosi', display: 'yoss', password: 'yosi!',
    conversations: [{
        username: "dvir",
        messages: [{ src: "send", type: "text", context: "hi", time: "10:55" }, { src: "recv", type: "text", context: "bii", time: "10:58" }]
    }]
},
];
export default userList;