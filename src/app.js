// const vue = require("./vue");
const app = new Vue({
    el:'#app',
    data:{
        submissions:[

            {
            id: 1,
            title: 'sunny',
            description: 'On-demand sand castle construction expertise.',
            url: '#',
            votes: 4,
            avatar: '../public/asset/avator.png',
            },
            {
                id: 2,
                title: 'seada',
                description: 'On-demand sand castle construction expertise.',
                url: '#',
                votes: 5,
                avatar: '../public/asset/avator.png',
            },
            {
                id: 3,
                title: 'semira',
                description: 'On-demand sand castle construction expertise.',
                url: '#',
                votes: 9,
                avatar: '../public/asset/avator.png',
            },
            {
                id: 4,
                title: 'salahadin',
                description: 'On-demand sand castle construction expertise.',
                url: '#',
                votes: 10,
                avatar: '../public/asset/avator.png',
            },
            {
                id: 5,
                title: 'muhammed(baby)',
                description: 'On-demand sand castle construction expertise.',
                url: '#',
                votes: 14,
                avatar: '../public/asset/avator.png',
            },
            {
                id: 6,
                title: 'seid',
                description: 'On-demand sand castle construction expertise.',
                url: '#',
                votes: 2,
                avatar: '../public/asset/avator.png',
            }

        ]
    },
    methods:{
        upvote(sub_id){
            this.submissions.forEach(sub=> {
                if(sub.id == sub_id){
                    sub.votes ++
                }
                
            });
        }
    },
    computed:{
        sortedSubmissions () {
            return this.submissions.sort((a, b) => {
            return b.votes - a.votes
            });
        }
        
    }

})