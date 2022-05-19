import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const urlParam = useParams();

  return (
    <Container>
      <h1>Blog Detail</h1>
      <h3>{urlParam.slug}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, atque!
        Quo eius vitae doloremque. Eveniet nesciunt minus nulla iste sed
        reprehenderit totam illo, nobis rerum aliquam quia itaque id esse
        architecto suscipit explicabo tempora iure cum provident animi illum
        veniam! Sapiente tempora, et vitae optio eum neque, aliquam veritatis
        cumque in magni voluptatum velit nulla animi distinctio corrupti
        quibusdam assumenda atque eaque nihil, repudiandae doloremque provident
        aspernatur! Harum fugiat blanditiis ipsa dolorum perspiciatis doloremque
        minus, reiciendis culpa maxime deleniti architecto debitis illum hic
        necessitatibus et earum, aliquid ab impedit autem obcaecati sapiente
        sint magnam aperiam suscipit! Esse delectus, quia recusandae error unde
        animi qui nemo repudiandae placeat, ipsam exercitationem ut labore
        reprehenderit quasi dolores! Nobis, porro explicabo. Accusamus id
        numquam non molestiae doloremque odio voluptate maiores, eaque
        cupiditate explicabo qui nihil veritatis magnam quaerat eveniet dicta
        vero aspernatur laudantium? Assumenda atque natus officiis aspernatur
        similique sed maiores numquam! Perspiciatis odio exercitationem sit aut,
        nihil quaerat dicta sed, quo corporis doloribus ex hic voluptatum modi
        ipsa quas. A nulla quod totam delectus obcaecati ipsam itaque, id harum
        suscipit aspernatur. Doloremque illum ut vero, officia ad, eveniet
        voluptatum doloribus libero modi magnam ratione quas, vitae voluptates
        repellendus quo maxime facere fuga. Nam totam accusantium quos
        reprehenderit, quas ipsam ex perferendis enim voluptates nostrum minus
        repellat odit consequuntur eveniet dicta optio, qui voluptatem iusto
        recusandae repudiandae veniam sed! In iste sapiente odio unde expedita!
        Magni iure nemo quo repudiandae similique corporis temporibus, neque,
        laborum exercitationem perspiciatis ipsa vitae vero aspernatur quis.
      </p>
    </Container>
  );
}
