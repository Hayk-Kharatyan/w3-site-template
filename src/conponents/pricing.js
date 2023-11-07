import './pricing.css'

function Pricing(){
return(
<div className='pricing'> 

<div className='poscenter'>
<h3 className='center'>PRICING</h3>
<p className='center2'>Choose a pricing plan that fits your needs.</p>
</div>

<div className='basic'>

<div className='packet'>Basic</div>
<div>10GB Storage</div>
<div>10 Emails</div>
<div>10 Domains</div>
<div>Endless Support</div>
<div><h3>$ 10</h3> <span>per month</span></div>
<div><button>Sign Up</button></div>



</div>
<div className='pro'>


<div className='packet red'>Pro</div>
<div>25GB Storage</div>
<div>25 Emails</div>
<div>25 Domains</div>
<div>Endless Support</div>
<div><h3>$ 25</h3> <span>per month</span></div>
<div><button>Sign Up</button></div>

    


</div>
<div className='premium'>

<div className='packet'>Premium</div>
<div>50GB Storage</div>
<div>50 Emails</div>
<div>50 Domains</div>
<div>Endless Support</div>
<div><h3>$ 50</h3> <span>per month</span></div>
<div><button>Sign Up</button></div>
    


</div>
</div>
)
}


export default Pricing