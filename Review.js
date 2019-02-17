Vue.component( 'rev-item', {
    props: ['revprop'],
    template: `
        <div class="revitem" :data-id="revprop.id">
                <span class="revid">Отзыв  №{{revprop.id}}</span>
                <strong class="author">{{revprop.author}}</strong>
                <div class="text">
                    <p>{{revprop.review}}</p>
                </div>
                <div class="approve" 
                :data-id="revprop.id" 
                :data-approve="revprop.isApproved" 
                @click="$emit('approverev', $event.currentTarget)"
                >
                    <svg>
                        <use xlink:href="#check"></use>
                    </svg>
                </div>
                <div data-delete 
                :data-id="revprop.id" 
                @click="$emit('delrev', $event.currentTarget)">
                    <svg>
                        <use xlink:href="#trash"></use>
                    </svg>
                </div>

            </div>
    `
});