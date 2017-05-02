/**
 * Created by Administrator on 2017/4/28 0028.
 */
import React from 'react';

/*把其他html的内容做成组件嵌入到react里面*/
export default class PCProducts extends React.Component {
    render() {
        return (
            <div className="mt35 mod_hot_rank clearfix">
                <div className="idx_cm_title">
                    <a href="http://news.163.com/rank/" className="title">热点排行</a>
                </div>
                <ul>
                    <li className="top ">
                        <em>1</em>
                        <a href="http://news.163.com/17/0502/02/CJD7ANAV0001875P.html">90后准新娘医院门口被陌生人捅死 只因一句话</a>
                        <span>169671</span>
                    </li>
                    <li className=" top ">
                        <em>2</em>
                        <a href="http://news.163.com/17/0502/00/CJD0V9UF0001875P.html">"大师"闫芳隔空打人骗术被扒 曾系石家庄政协委员</a>
                        <span>150318</span>
                    </li>
                    <li className=" top ">
                        <em>3</em>
                        <a href="http://news.163.com/17/0502/07/CJDPA0OG000187VE.html">"重庆李嘉诚"101亿伦敦买大楼 清仓内地项目土地</a>
                        <span>113276</span>
                    </li>
                    <li className>
                        <em>4</em>
                        <a href="http://news.163.com/17/0502/01/CJD72DII000187VI.html">太极掌门回应被"秒杀":就没想赢 赢了更多人找</a>
                        <span>111365</span>
                    </li>
                    <li className>
                        <em>5</em>
                        <a href="http://news.163.com/17/0502/14/CJEIK0PU0001875P.html">红牛创始人孙子驾车撞死警察 出庭前私逃出境失踪</a>
                        <span>102498</span>
                    </li>
                    <li className>
                        <em>6</em>
                        <a href="http://news.163.com/17/0502/10/CJE2T6MU0001875P.html">女童头部被自家牧羊犬狠狠咬住 母亲目睹恐怖一幕</a>
                        <span>99150</span>
                    </li>
                    <li className>
                        <em>7</em>
                        <a href="http://news.163.com/17/0502/18/CJEVL8RK0001875P.html">围棋国手乘高铁遭强制降座 列车员:不坐就站着吧</a>
                        <span>92264</span>
                    </li>
                    <li className>
                        <em>8</em>
                        <a href="http://news.163.com/17/0502/15/CJEMMURI000187VE.html">邹市明方回应徐晓冬约战:职业和业余 没啥好打</a>
                        <span>85824</span>
                    </li>
                    <li className>
                        <em>9</em>
                        <a href="http://news.163.com/17/0502/00/CJD16KSD00018M4D.html">你觉得MC天佑很土很low，但他靠喊麦身价上亿</a>
                        <span>82793</span>
                    </li>
                    <li className>
                        <em>10</em>
                        <a href="http://news.163.com/17/0502/19/CJF4KEAB0001875N.html">太极20秒被KO 体育总局武管中心首次发声</a>
                        <span>80429</span>
                    </li>
                </ul>
            </div>

        )
    }
}