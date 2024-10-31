var animations = [
{
        
        id: '#i02',
        duration: 400,
        delayBefore: 0,
        delayAfter: 3500,
        animations: { opacity: 1, top:0, left:0}
    },
    {
        
        id: '#i03',
        duration: 400,
        delayBefore: 0,
        delayAfter: 0,
        animations: { opacity: 1, top:0, left:0}
    },{
        
        id: '#i04',
        duration: 350,
        delayBefore: 0,
        delayAfter: 0,
        animations: { opacity: 1, top:0, left:0}
    },{
        
        id: '#i05',
        duration: 350,
        delayBefore: 0,
        delayAfter: 4000,
        animations: { opacity: 1, top:0, left:0}
    },{
        
        id: '#i06',
        duration: 350,
        delayBefore: 0,
        delayAfter: 0,
        animations: { opacity: 1, top:0, left:0}
    },{
        
        id: '#i07',
        duration: 350,
        delayBefore: 0,
        delayAfter: 3000,
        animations: { opacity: 1, top:0, left:0}
    },
    [
        
       {
            id: '#i07',
            duration: 200,
            delayBefore: 0,
            delayAfter: 400,
            animations: { opacity: 0, top:0, left:"10%"}
        },
],
    {
        
        id: '#i08',
        duration: 300,
        delayBefore: 0,
        delayAfter: 0,
        animations: { opacity: 1, top:0, left:0}
    },{
        
        id: '#i09',
        duration: 300,
        delayBefore: 0,
        delayAfter: 3500,
        animations: { opacity: 1, top:0, left:0}
    },
]
new YAnimation(animations, { loop: false, clearAfterEnd: 0 }).startAnimation()