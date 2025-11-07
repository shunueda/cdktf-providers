import * as cdktf from 'cdktf';
import { DataNutanixFloatingIpsV2FloatingIpsVpcCommonDhcpOptionsList,
DataNutanixFloatingIpsV2FloatingIpsVpcExternalSubnetsList,
DataNutanixFloatingIpsV2FloatingIpsVpcExternallyRoutablePrefixesList,
DataNutanixFloatingIpsV2FloatingIpsVpcLinksList,
DataNutanixFloatingIpsV2FloatingIpsVpcMetadataList,
DataNutanixFloatingIpsV2FloatingIpsVpcSnatIpsList,
DataNutanixFloatingIpsV2FloatingIpsAssociationList,
DataNutanixFloatingIpsV2FloatingIpsExternalSubnetList,
DataNutanixFloatingIpsV2FloatingIpsFloatingIpList,
DataNutanixFloatingIpsV2FloatingIpsLinksList,
DataNutanixFloatingIpsV2FloatingIpsMetadataList,
DataNutanixFloatingIpsV2FloatingIpsVmNicList } from './structs0'
export interface DataNutanixFloatingIpsV2FloatingIpsVpc {
}

export function dataNutanixFloatingIpsV2FloatingIpsVpcToTerraform(struct?: DataNutanixFloatingIpsV2FloatingIpsVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpsV2FloatingIpsVpcToHclTerraform(struct?: DataNutanixFloatingIpsV2FloatingIpsVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpsV2FloatingIpsVpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNutanixFloatingIpsV2FloatingIpsVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpsV2FloatingIpsVpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // common_dhcp_options - computed: true, optional: false, required: false
  private _commonDhcpOptions = new DataNutanixFloatingIpsV2FloatingIpsVpcCommonDhcpOptionsList(this, "common_dhcp_options", false);
  public get commonDhcpOptions() {
    return this._commonDhcpOptions;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // external_routing_domain_reference - computed: true, optional: false, required: false
  public get externalRoutingDomainReference() {
    return this.getStringAttribute('external_routing_domain_reference');
  }

  // external_subnets - computed: true, optional: false, required: false
  private _externalSubnets = new DataNutanixFloatingIpsV2FloatingIpsVpcExternalSubnetsList(this, "external_subnets", false);
  public get externalSubnets() {
    return this._externalSubnets;
  }

  // externally_routable_prefixes - computed: true, optional: false, required: false
  private _externallyRoutablePrefixes = new DataNutanixFloatingIpsV2FloatingIpsVpcExternallyRoutablePrefixesList(this, "externally_routable_prefixes", false);
  public get externallyRoutablePrefixes() {
    return this._externallyRoutablePrefixes;
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataNutanixFloatingIpsV2FloatingIpsVpcLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataNutanixFloatingIpsV2FloatingIpsVpcMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // snat_ips - computed: true, optional: false, required: false
  private _snatIps = new DataNutanixFloatingIpsV2FloatingIpsVpcSnatIpsList(this, "snat_ips", false);
  public get snatIps() {
    return this._snatIps;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // vpc_type - computed: true, optional: false, required: false
  public get vpcType() {
    return this.getStringAttribute('vpc_type');
  }
}

export class DataNutanixFloatingIpsV2FloatingIpsVpcList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixFloatingIpsV2FloatingIpsVpcOutputReference {
    return new DataNutanixFloatingIpsV2FloatingIpsVpcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpsV2FloatingIps {
}

export function dataNutanixFloatingIpsV2FloatingIpsToTerraform(struct?: DataNutanixFloatingIpsV2FloatingIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpsV2FloatingIpsToHclTerraform(struct?: DataNutanixFloatingIpsV2FloatingIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpsV2FloatingIpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNutanixFloatingIpsV2FloatingIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpsV2FloatingIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // association - computed: true, optional: false, required: false
  private _association = new DataNutanixFloatingIpsV2FloatingIpsAssociationList(this, "association", false);
  public get association() {
    return this._association;
  }

  // association_status - computed: true, optional: false, required: false
  public get associationStatus() {
    return this.getStringAttribute('association_status');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // external_subnet - computed: true, optional: false, required: false
  private _externalSubnet = new DataNutanixFloatingIpsV2FloatingIpsExternalSubnetList(this, "external_subnet", false);
  public get externalSubnet() {
    return this._externalSubnet;
  }

  // external_subnet_reference - computed: true, optional: false, required: false
  public get externalSubnetReference() {
    return this.getStringAttribute('external_subnet_reference');
  }

  // floating_ip - computed: true, optional: false, required: false
  private _floatingIp = new DataNutanixFloatingIpsV2FloatingIpsFloatingIpList(this, "floating_ip", false);
  public get floatingIp() {
    return this._floatingIp;
  }

  // floating_ip_value - computed: true, optional: false, required: false
  public get floatingIpValue() {
    return this.getStringAttribute('floating_ip_value');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataNutanixFloatingIpsV2FloatingIpsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataNutanixFloatingIpsV2FloatingIpsMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // vm_nic - computed: true, optional: false, required: false
  private _vmNic = new DataNutanixFloatingIpsV2FloatingIpsVmNicList(this, "vm_nic", false);
  public get vmNic() {
    return this._vmNic;
  }

  // vm_nic_reference - computed: true, optional: false, required: false
  public get vmNicReference() {
    return this.getStringAttribute('vm_nic_reference');
  }

  // vpc - computed: true, optional: false, required: false
  private _vpc = new DataNutanixFloatingIpsV2FloatingIpsVpcList(this, "vpc", false);
  public get vpc() {
    return this._vpc;
  }

  // vpc_reference - computed: true, optional: false, required: false
  public get vpcReference() {
    return this.getStringAttribute('vpc_reference');
  }
}

export class DataNutanixFloatingIpsV2FloatingIpsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNutanixFloatingIpsV2FloatingIpsOutputReference {
    return new DataNutanixFloatingIpsV2FloatingIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
