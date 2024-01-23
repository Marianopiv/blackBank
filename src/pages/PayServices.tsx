import { publicServices } from "../config/config";
import ContainerWrapper from "../layout/ContainerWrapper";
import CardPublicService from "../shared/CardPublicService";

const PayServices = () => {
  return (
    <ContainerWrapper title="available services to pay">
      <div className="flex gap-10 flex-wrap items-center pt-20">
        {publicServices.map((service, index) => (
          <CardPublicService key={index} {...service} />
        ))}
      </div>
    </ContainerWrapper>
  );
};

export default PayServices;
