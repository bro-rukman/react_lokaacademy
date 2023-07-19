import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataProductById } from "../../services/serviceData";
import "./detail.scss";
import { SliderDetail } from "../../components/slider_detail/SliderDetail";
export const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    getDataProductById(id)
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <>
      <div className="slider_detail">
        <SliderDetail data={product} />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cum
        accusamus quis quam dolorem praesentium officia corrupti recusandae?
        Consequatur, impedit. Voluptatem, culpa praesentium placeat sint sit
        voluptas eius quas hic, voluptatum veniam impedit accusamus doloribus
        mollitia eligendi esse earum aperiam itaque fugit similique? Pariatur
        corrupti ut unde veritatis natus aliquam rem numquam eos nisi
        doloremque, similique quidem tempore dolorem quae exercitationem maxime
        iste dignissimos, praesentium fugiat voluptas enim iusto? Sit voluptates
        tempora mollitia hic voluptatum, qui impedit excepturi obcaecati ut,
        temporibus quia maxime similique! Aperiam consequatur tenetur at placeat
        molestiae corporis nesciunt et ad recusandae quibusdam. Nihil sit nemo
        in. Iste consequuntur quasi doloribus animi hic adipisci ad
        necessitatibus nesciunt debitis placeat illum repellendus rem
        perspiciatis distinctio molestias voluptate quibusdam sint praesentium
        culpa minus, similique quisquam labore natus recusandae. Hic earum nisi
        sapiente modi magnam. Corporis unde similique nulla enim aliquid
        molestiae eligendi obcaecati omnis repellendus. Voluptate voluptas
        obcaecati at sit dolor nesciunt quis quam dolorem esse ex laudantium
        voluptatem optio officiis, odit earum quos saepe expedita. Quia tempora
        odit qui recusandae, quae, libero rerum tenetur laudantium fugiat
        cupiditate doloribus consectetur! Fugiat, quis laboriosam! Quae
        assumenda molestiae ab sapiente, saepe cum maiores magni eveniet
        exercitationem minima reiciendis vitae deserunt adipisci vero inventore
        minus commodi? Quaerat earum deleniti debitis, suscipit nesciunt
        laboriosam tenetur ea ut nisi harum fuga voluptas possimus dolorem
        excepturi consequatur voluptatibus saepe assumenda aspernatur natus
        iusto accusantium porro quos, aliquam veniam! Voluptatem aperiam
        perferendis incidunt sint maiores obcaecati eius cupiditate aliquam
        nesciunt consectetur laboriosam labore nisi velit sed animi ut, ratione
        doloribus inventore reiciendis excepturi non voluptatibus nostrum?
        Accusantium provident eos, cupiditate perferendis similique omnis
        assumenda quibusdam, nisi numquam, esse porro! Necessitatibus ullam
        illum, expedita voluptates at provident veniam tenetur odio
        reprehenderit eveniet inventore eius excepturi! Quibusdam, perspiciatis
        similique animi rem eveniet quasi deserunt saepe illum praesentium magni
        vel eligendi reiciendis modi accusamus nostrum, ut autem harum itaque
        sint. Repellat doloremque, modi labore hic deleniti non nulla obcaecati
        eaque natus necessitatibus reiciendis, facilis nisi, est vero! Optio,
        quod. Maiores eligendi ut voluptatum, aperiam rerum, consequatur modi
        deleniti amet fuga nesciunt accusantium iure pariatur consectetur
        voluptatibus sapiente magnam dignissimos reprehenderit, quis ratione hic
        excepturi tenetur porro provident. Tempore, commodi dolore? Praesentium
        tempore accusantium fugit quia hic omnis exercitationem maxime dolorem,
        optio aspernatur dolorum laboriosam consequuntur assumenda facere et
        delectus, unde eum! Inventore asperiores architecto, esse nam obcaecati
        illum dolore ad, aspernatur, corrupti cupiditate doloremque ab aliquid
        sequi voluptatem qui ex praesentium iusto quos in. Animi dolorum nulla
        quasi deleniti doloremque voluptates vero maiores incidunt ut laudantium
        qui veritatis vitae quis fuga quo necessitatibus, perferendis, ullam
        harum totam obcaecati sed error nihil beatae. Iusto expedita veniam,
        totam, deserunt iure quam sapiente et laboriosam, voluptates dignissimos
        temporibus? Rerum cum at dicta! Veniam, provident quo assumenda tempore
        laborum magni ad dicta, ab eum officia eveniet. Placeat, consequatur
        excepturi laboriosam, laborum iure illo culpa laudantium quidem,
        deserunt impedit aliquid nisi eius aspernatur? Saepe beatae alias quo
        in, similique culpa neque cupiditate voluptate nobis assumenda amet
        accusantium doloribus voluptas odit aperiam ipsum eveniet sed architecto
        sapiente tempore? Corrupti, impedit doloremque! A, vero fugiat aliquam
        blanditiis ut dolore distinctio sunt totam saepe doloremque, aperiam
        quis mollitia labore. Eum et provident ullam hic itaque debitis iusto
        eveniet fugiat architecto at, veniam ex molestiae repudiandae error
        temporibus, vitae sit quae illum. Sint qui quae doloribus eum cumque
        porro mollitia laboriosam pariatur culpa repudiandae eligendi quasi,
        quis distinctio. Incidunt, minus. Voluptatem sed nemo itaque modi magni
        maxime saepe reiciendis, laborum accusamus, quidem eum quia id, fugiat
        provident nostrum! In dicta optio ad autem laudantium dolor est quod
        obcaecati cupiditate, nisi vel magni possimus quasi fugit, nesciunt
        quisquam modi laborum iure corrupti qui quo? Dolorem debitis repudiandae
        ut voluptates praesentium quisquam, velit dicta suscipit quo fugit
        aliquam dolore ex facere distinctio quos, esse reprehenderit. Provident,
        ullam id molestiae temporibus alias est nam sit mollitia cum illum sed?
        Error, dolorum excepturi, praesentium, eveniet quaerat fugit ipsa
        distinctio sit nam deserunt natus mollitia. Minima sunt obcaecati
        distinctio. Excepturi mollitia quod quo odio expedita laborum saepe at
        soluta? Placeat, praesentium consequatur, laboriosam ipsa illo quia
        minus esse a quae iusto recusandae facere possimus pariatur ab amet
        nostrum commodi laborum mollitia optio inventore! Quaerat voluptatem
        unde possimus cumque et consequatur voluptates deleniti doloribus a,
        nihil sit facilis ex eos delectus aspernatur, dignissimos nulla aliquam
        natus dolorem sapiente distinctio. Nemo enim ex, illum pariatur tempore
        vitae eum perspiciatis omnis quam voluptas sint! Nobis aspernatur atque
        maxime doloribus dicta ipsum saepe aliquid ipsam dolorum esse,
        perspiciatis blanditiis accusamus optio autem rem est natus cum,
        consequuntur rerum. Minima blanditiis tenetur sed unde, iusto, sequi
        facilis voluptas dolorum accusamus beatae, molestiae incidunt quibusdam
        commodi magnam provident ea hic iure quam at laboriosam rerum ab! Eaque
        iusto eos enim laboriosam quo inventore modi nostrum illo, numquam
        dolore ad quaerat ipsum accusantium hic temporibus voluptatum quod
        libero cumque sapiente nemo fugit consectetur veritatis tenetur.
        Accusantium neque ullam esse quo voluptate minus velit accusamus magnam
        eaque nemo expedita odit magni fugiat asperiores distinctio earum, ut
        temporibus saepe nisi molestias. Vero autem ipsum placeat at aspernatur
        nihil eveniet quibusdam, deserunt rem magni ut exercitationem maiores
        inventore sint sit temporibus mollitia corporis cupiditate? Unde, modi
        hic vel maxime non at. Architecto repellendus, corrupti dignissimos
        harum sequi veritatis animi nulla at esse ad, iure repellat consequatur
        ea quia! Et veritatis facere autem sed deserunt, praesentium ea
        accusamus repellat. Eligendi facilis, voluptas assumenda quod quibusdam
        dolor ad quis voluptatibus placeat error deleniti pariatur quo atque
        neque vel delectus quae consectetur. Sequi architecto cum quod unde
        atque quasi, exercitationem eaque id ex beatae, neque perferendis minus
        odit repellat laborum dignissimos explicabo aperiam illum facilis,
        temporibus ut natus veniam. Perspiciatis ducimus exercitationem labore
        tempore enim laboriosam deleniti illo voluptatem natus. Incidunt nam,
        modi eos perferendis inventore repudiandae laboriosam molestias veniam
        et. Numquam porro at explicabo saepe! Corrupti tempora quae officia aut
        sit aperiam fugit deserunt, quam cumque minima similique ut vero qui
        obcaecati quas cum soluta libero, deleniti atque? Inventore aut nisi,
        deserunt quia doloribus quae cum enim deleniti soluta eos possimus
        tempore, at placeat voluptates!
      </p>
    </>
  );
};
