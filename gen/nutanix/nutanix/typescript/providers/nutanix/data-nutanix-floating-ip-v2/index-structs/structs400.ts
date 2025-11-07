import * as cdktf from 'cdktf';
import { DataNutanixFloatingIpV2VpcCommonDhcpOptionsList,
DataNutanixFloatingIpV2VpcExternalSubnetsList,
DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesList,
DataNutanixFloatingIpV2VpcLinksList,
DataNutanixFloatingIpV2VpcMetadataList,
DataNutanixFloatingIpV2VpcSnatIpsList } from './structs0'
export interface DataNutanixFloatingIpV2Vpc {
}

export function dataNutanixFloatingIpV2VpcToTerraform(struct?: DataNutanixFloatingIpV2Vpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2VpcToHclTerraform(struct?: DataNutanixFloatingIpV2Vpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2VpcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2Vpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2Vpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // common_dhcp_options - computed: true, optional: false, required: false
  private _commonDhcpOptions = new DataNutanixFloatingIpV2VpcCommonDhcpOptionsList(this, "common_dhcp_options", false);
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
  private _externalSubnets = new DataNutanixFloatingIpV2VpcExternalSubnetsList(this, "external_subnets", false);
  public get externalSubnets() {
    return this._externalSubnets;
  }

  // externally_routable_prefixes - computed: true, optional: false, required: false
  private _externallyRoutablePrefixes = new DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesList(this, "externally_routable_prefixes", false);
  public get externallyRoutablePrefixes() {
    return this._externallyRoutablePrefixes;
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataNutanixFloatingIpV2VpcLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataNutanixFloatingIpV2VpcMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // snat_ips - computed: true, optional: false, required: false
  private _snatIps = new DataNutanixFloatingIpV2VpcSnatIpsList(this, "snat_ips", false);
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

export class DataNutanixFloatingIpV2VpcList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2VpcOutputReference {
    return new DataNutanixFloatingIpV2VpcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
