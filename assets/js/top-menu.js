window.onload = function()
{
    var oDiv=document.getElementById('nav');
    var aLi=oDiv.getElementsByTagName('ul')[0].getElementsByTagName('li');
    var aA=[];
    var aSpan=[];
    var oTimer=null;
    var i=0;

    for(i=0;i<aLi.length;i++)
    {
        aA.push(aLi[i].getElementsByTagName('a')[0]);
        aSpan.push(aLi[i].getElementsByTagName('span')[1]);
    }

    for(i=0;i<aLi.length;i++)
    {
        aA[i].miaovIndex=i;
        aA[i].onmouseover=function ()
        {
            if(oTimer)
            {
                clearTimeout(oTimer);
                oTimer=null;
            }
            for(i=0;i<aLi.length;i++)
            {
                aA[i].className='active';
                aSpan[i].style.display='none';
            }

            aA[this.miaovIndex].className='active-d';
            aSpan[this.miaovIndex].style.display='block';
        };

        aA[i].onmouseout=function ()
        {
            var index=this.miaovIndex;
            oTimer=setTimeout
            (
                function ()
                {
                    for(i=0;i<aLi.length;i++)
                    {
                        aA[i].className='active';
                    }
                    aSpan[index].style.display='none';
                    oTimer=null;
                },1000
            );
        };

        aSpan[i].miaovIndex=i;
        aSpan[i].onmouseover=function ()
        {
            if(oTimer)
            {
                clearTimeout(oTimer);
                oTimer=null;
            }
        };

        aSpan[i].onmouseout=function ()
        {
            var index=this.miaovIndex;
            oTimer=setTimeout
            (
                function ()
                {
                    for(i=0;i<aLi.length;i++)
                    {
                        aA[i].className='active';
                    }
                    aSpan[index].style.display='none';
                    oTimer=null;
                },500
            );
        }
    }
}