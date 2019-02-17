new Vue ({
    el: 'main',
    data: {
        reviews: []
    },
    mounted(){
        that = this;
        fetch('feedback.json')
            .then(result => result.json())
            .then(data => {
                that.reviews = data;
                return that.reviews;
            });
    },
    methods: {
        addRev: function (e) {
            e.preventDefault();
            let idReserved = [];
            let nextId = null;
            for (let review of this.reviews){
                idReserved.push(review.id);

            }
            if (idReserved.length > 0){
                Array.prototype.max = function () {
                    return Math.max.apply(null, this);
                };
                nextId = idReserved.max()+1;
            } else {
                nextId = 1;
            }
            let curtitle = document.querySelector('#leaverev [name="name"]');
            let curreview = document.querySelector('#leaverev [name="text"]');
            this.reviews.push({id: nextId, author: curtitle.value, review: curreview.value, isApproved: false});
            curtitle.value = '';
            curreview.value = '';
            console.log(this.reviews);
        },
        removeRev: function (element) {
            let curId = element.dataset.id;
            this.reviews = this.reviews.filter((review) => review.id !== +curId);
            console.log(this.reviews);
        },
        approveRev: function (element) {
            if(element.dataset.approve === undefined){
                let curId = element.dataset.id;
                let find = this.reviews.find((review) => review.id === +curId);
                find.isApproved = true;
                console.log(this.reviews);
            }
        }

    }
});