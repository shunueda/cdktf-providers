// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectorAzureVnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Azure Virtual Network Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#azure_vnet_id ConnectorAzureVnet#azure_vnet_id}
  */
  readonly azureVnetId: string;
  /**
  * Billing tags to be associated with the resource. (see resource `alkira_billing_tag`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#billing_tag_ids ConnectorAzureVnet#billing_tag_ids}
  */
  readonly billingTagIds?: number[];
  /**
  * The mode that connector will use to connect to the Alkira CXP. `VNET_GATEWAY` will connect with a Virtual Gateway, `VNET_PEERING` will connect using an Alkira Transit Hub (ATH).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#connection_mode ConnectorAzureVnet#connection_mode}
  */
  readonly connectionMode?: string;
  /**
  * ID of resource `credential_azure_vnet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#credential_id ConnectorAzureVnet#credential_id}
  */
  readonly credentialId: string;
  /**
  * A specific BGP ASN for the connector. This cannot be specified when `connection_mode` is `VNET_PEERING`. This field cannot be updated once the connector has been provisioned. The ASN cannot be value that is [restricted by Azure](https://learn.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-vpn-faq#bgp).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#customer_asn ConnectorAzureVnet#customer_asn}
  */
  readonly customerAsn?: number;
  /**
  * The CXP where the connector should be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#cxp ConnectorAzureVnet#cxp}
  */
  readonly cxp: string;
  /**
  * The description of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#description ConnectorAzureVnet#description}
  */
  readonly description?: string;
  /**
  * Is the connector enabled. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#enabled ConnectorAzureVnet#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A list of additional CXPs where the connector should be provisioned for failover.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#failover_cxps ConnectorAzureVnet#failover_cxps}
  */
  readonly failoverCxps?: string[];
  /**
  * The group of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#group ConnectorAzureVnet#group}
  */
  readonly group?: string;
  /**
  * The direct inter connector group associated with the connector 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#group_direct_inter_connector ConnectorAzureVnet#group_direct_inter_connector}
  */
  readonly groupDirectInterConnector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#id ConnectorAzureVnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#name ConnectorAzureVnet#name}
  */
  readonly name: string;
  /**
  * A list of Azure native services. The value could be `Azure KMS` or `Azure RHUI`. This is only effective when `vnet_cidr` and `vnet_subnet` block is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#native_services ConnectorAzureVnet#native_services}
  */
  readonly nativeServices?: string[];
  /**
  * The ID of the CXP peering gateway associated with the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#peering_gateway_cxp_id ConnectorAzureVnet#peering_gateway_cxp_id}
  */
  readonly peeringGatewayCxpId?: number;
  /**
  *  Routing options for the entire VNET, either `ADVERTISE_DEFAULT_ROUTE` or `ADVERTISE_CUSTOM_PREFIX`. Default value is `AVERTISE_DEFAULT_ROUTE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#routing_options ConnectorAzureVnet#routing_options}
  */
  readonly routingOptions?: string;
  /**
  * Prefix List IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#routing_prefix_list_ids ConnectorAzureVnet#routing_prefix_list_ids}
  */
  readonly routingPrefixListIds?: number[];
  /**
  * The ID of the scale group associated with the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#scale_group_id ConnectorAzureVnet#scale_group_id}
  */
  readonly scaleGroupId?: string;
  /**
  * The ID of the segment assoicated with the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#segment_id ConnectorAzureVnet#segment_id}
  */
  readonly segmentId: string;
  /**
  * list of service tags from Azure. Providing a service tag here would result in service tag route configuration on VNET route table, so that the traffic toward the service would directly steer towards those services, and would not go via Alkira network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#service_tags ConnectorAzureVnet#service_tags}
  */
  readonly serviceTags?: string[];
  /**
  * The size of the connector, one of `5XSMALL`, `XSMALL`,`SMALL`, `MEDIUM`, `LARGE`, `2LARGE`, `5LARGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#size ConnectorAzureVnet#size}
  */
  readonly size: string;
  /**
  * User defined routes list (`list_udr`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#udr_list_ids ConnectorAzureVnet#udr_list_ids}
  */
  readonly udrListIds?: number[];
  /**
  * vnet_cidr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#vnet_cidr ConnectorAzureVnet#vnet_cidr}
  */
  readonly vnetCidr?: ConnectorAzureVnetVnetCidr[] | cdktf.IResolvable;
  /**
  * vnet_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#vnet_subnet ConnectorAzureVnet#vnet_subnet}
  */
  readonly vnetSubnet?: ConnectorAzureVnetVnetSubnet[] | cdktf.IResolvable;
}
export interface ConnectorAzureVnetVnetCidr {
  /**
  * VNET CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#cidr ConnectorAzureVnet#cidr}
  */
  readonly cidr: string;
  /**
  * A list of Azure native services. The value could be `Azure KMS` or `Azure RHUI`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#native_services ConnectorAzureVnet#native_services}
  */
  readonly nativeServices?: string[];
  /**
  * Prefix List IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#prefix_list_ids ConnectorAzureVnet#prefix_list_ids}
  */
  readonly prefixListIds?: number[];
  /**
  * Routing options for the CIDR, either `ADVERTISE_DEFAULT_ROUTE` or `ADVERTISE_CUSTOM_PREFIX`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#routing_options ConnectorAzureVnet#routing_options}
  */
  readonly routingOptions?: string;
  /**
  * List of service tags provided by Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#service_tags ConnectorAzureVnet#service_tags}
  */
  readonly serviceTags?: string[];
  /**
  * User defined routes list (`list_udr`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#udr_list_ids ConnectorAzureVnet#udr_list_ids}
  */
  readonly udrListIds?: number[];
}

export function connectorAzureVnetVnetCidrToTerraform(struct?: ConnectorAzureVnetVnetCidr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    native_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nativeServices),
    prefix_list_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.prefixListIds),
    routing_options: cdktf.stringToTerraform(struct!.routingOptions),
    service_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceTags),
    udr_list_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.udrListIds),
  }
}


export function connectorAzureVnetVnetCidrToHclTerraform(struct?: ConnectorAzureVnetVnetCidr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    native_services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nativeServices),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    prefix_list_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.prefixListIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    routing_options: {
      value: cdktf.stringToHclTerraform(struct!.routingOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceTags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    udr_list_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.udrListIds),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorAzureVnetVnetCidrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConnectorAzureVnetVnetCidr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._nativeServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativeServices = this._nativeServices;
    }
    if (this._prefixListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListIds = this._prefixListIds;
    }
    if (this._routingOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingOptions = this._routingOptions;
    }
    if (this._serviceTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTags = this._serviceTags;
    }
    if (this._udrListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.udrListIds = this._udrListIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorAzureVnetVnetCidr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._nativeServices = undefined;
      this._prefixListIds = undefined;
      this._routingOptions = undefined;
      this._serviceTags = undefined;
      this._udrListIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._nativeServices = value.nativeServices;
      this._prefixListIds = value.prefixListIds;
      this._routingOptions = value.routingOptions;
      this._serviceTags = value.serviceTags;
      this._udrListIds = value.udrListIds;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // native_services - computed: false, optional: true, required: false
  private _nativeServices?: string[]; 
  public get nativeServices() {
    return cdktf.Fn.tolist(this.getListAttribute('native_services'));
  }
  public set nativeServices(value: string[]) {
    this._nativeServices = value;
  }
  public resetNativeServices() {
    this._nativeServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeServicesInput() {
    return this._nativeServices;
  }

  // prefix_list_ids - computed: false, optional: true, required: false
  private _prefixListIds?: number[]; 
  public get prefixListIds() {
    return this.getNumberListAttribute('prefix_list_ids');
  }
  public set prefixListIds(value: number[]) {
    this._prefixListIds = value;
  }
  public resetPrefixListIds() {
    this._prefixListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIdsInput() {
    return this._prefixListIds;
  }

  // routing_options - computed: false, optional: true, required: false
  private _routingOptions?: string; 
  public get routingOptions() {
    return this.getStringAttribute('routing_options');
  }
  public set routingOptions(value: string) {
    this._routingOptions = value;
  }
  public resetRoutingOptions() {
    this._routingOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingOptionsInput() {
    return this._routingOptions;
  }

  // service_tags - computed: false, optional: true, required: false
  private _serviceTags?: string[]; 
  public get serviceTags() {
    return cdktf.Fn.tolist(this.getListAttribute('service_tags'));
  }
  public set serviceTags(value: string[]) {
    this._serviceTags = value;
  }
  public resetServiceTags() {
    this._serviceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTagsInput() {
    return this._serviceTags;
  }

  // udr_list_ids - computed: false, optional: true, required: false
  private _udrListIds?: number[]; 
  public get udrListIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('udr_list_ids')));
  }
  public set udrListIds(value: number[]) {
    this._udrListIds = value;
  }
  public resetUdrListIds() {
    this._udrListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udrListIdsInput() {
    return this._udrListIds;
  }
}

export class ConnectorAzureVnetVnetCidrList extends cdktf.ComplexList {
  public internalValue? : ConnectorAzureVnetVnetCidr[] | cdktf.IResolvable

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
  public get(index: number): ConnectorAzureVnetVnetCidrOutputReference {
    return new ConnectorAzureVnetVnetCidrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorAzureVnetVnetSubnet {
  /**
  * A list of Azure native services. The value could be `Azure KMS` or `Azure RHUI`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#native_services ConnectorAzureVnet#native_services}
  */
  readonly nativeServices?: string[];
  /**
  * Prefix List IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#prefix_list_ids ConnectorAzureVnet#prefix_list_ids}
  */
  readonly prefixListIds?: number[];
  /**
  * Routing options for the subnet, either `ADVERTISE_DEFAULT_ROUTE` or `ADVERTISE_CUSTOM_PREFIX`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#routing_options ConnectorAzureVnet#routing_options}
  */
  readonly routingOptions?: string;
  /**
  * List of service tags provided by Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#service_tags ConnectorAzureVnet#service_tags}
  */
  readonly serviceTags?: string[];
  /**
  * VNET subnet CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#subnet_cidr ConnectorAzureVnet#subnet_cidr}
  */
  readonly subnetCidr?: string;
  /**
  * VNET subnet ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#subnet_id ConnectorAzureVnet#subnet_id}
  */
  readonly subnetId: string;
  /**
  * User defined routes list (`list_udr`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#udr_list_ids ConnectorAzureVnet#udr_list_ids}
  */
  readonly udrListIds?: number[];
}

export function connectorAzureVnetVnetSubnetToTerraform(struct?: ConnectorAzureVnetVnetSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    native_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nativeServices),
    prefix_list_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.prefixListIds),
    routing_options: cdktf.stringToTerraform(struct!.routingOptions),
    service_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceTags),
    subnet_cidr: cdktf.stringToTerraform(struct!.subnetCidr),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    udr_list_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.udrListIds),
  }
}


export function connectorAzureVnetVnetSubnetToHclTerraform(struct?: ConnectorAzureVnetVnetSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    native_services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nativeServices),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    prefix_list_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.prefixListIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    routing_options: {
      value: cdktf.stringToHclTerraform(struct!.routingOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceTags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_cidr: {
      value: cdktf.stringToHclTerraform(struct!.subnetCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udr_list_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.udrListIds),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorAzureVnetVnetSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConnectorAzureVnetVnetSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nativeServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativeServices = this._nativeServices;
    }
    if (this._prefixListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListIds = this._prefixListIds;
    }
    if (this._routingOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingOptions = this._routingOptions;
    }
    if (this._serviceTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTags = this._serviceTags;
    }
    if (this._subnetCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetCidr = this._subnetCidr;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._udrListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.udrListIds = this._udrListIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorAzureVnetVnetSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nativeServices = undefined;
      this._prefixListIds = undefined;
      this._routingOptions = undefined;
      this._serviceTags = undefined;
      this._subnetCidr = undefined;
      this._subnetId = undefined;
      this._udrListIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nativeServices = value.nativeServices;
      this._prefixListIds = value.prefixListIds;
      this._routingOptions = value.routingOptions;
      this._serviceTags = value.serviceTags;
      this._subnetCidr = value.subnetCidr;
      this._subnetId = value.subnetId;
      this._udrListIds = value.udrListIds;
    }
  }

  // native_services - computed: false, optional: true, required: false
  private _nativeServices?: string[]; 
  public get nativeServices() {
    return cdktf.Fn.tolist(this.getListAttribute('native_services'));
  }
  public set nativeServices(value: string[]) {
    this._nativeServices = value;
  }
  public resetNativeServices() {
    this._nativeServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeServicesInput() {
    return this._nativeServices;
  }

  // prefix_list_ids - computed: false, optional: true, required: false
  private _prefixListIds?: number[]; 
  public get prefixListIds() {
    return this.getNumberListAttribute('prefix_list_ids');
  }
  public set prefixListIds(value: number[]) {
    this._prefixListIds = value;
  }
  public resetPrefixListIds() {
    this._prefixListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIdsInput() {
    return this._prefixListIds;
  }

  // routing_options - computed: false, optional: true, required: false
  private _routingOptions?: string; 
  public get routingOptions() {
    return this.getStringAttribute('routing_options');
  }
  public set routingOptions(value: string) {
    this._routingOptions = value;
  }
  public resetRoutingOptions() {
    this._routingOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingOptionsInput() {
    return this._routingOptions;
  }

  // service_tags - computed: false, optional: true, required: false
  private _serviceTags?: string[]; 
  public get serviceTags() {
    return cdktf.Fn.tolist(this.getListAttribute('service_tags'));
  }
  public set serviceTags(value: string[]) {
    this._serviceTags = value;
  }
  public resetServiceTags() {
    this._serviceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTagsInput() {
    return this._serviceTags;
  }

  // subnet_cidr - computed: false, optional: true, required: false
  private _subnetCidr?: string; 
  public get subnetCidr() {
    return this.getStringAttribute('subnet_cidr');
  }
  public set subnetCidr(value: string) {
    this._subnetCidr = value;
  }
  public resetSubnetCidr() {
    this._subnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrInput() {
    return this._subnetCidr;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // udr_list_ids - computed: false, optional: true, required: false
  private _udrListIds?: number[]; 
  public get udrListIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('udr_list_ids')));
  }
  public set udrListIds(value: number[]) {
    this._udrListIds = value;
  }
  public resetUdrListIds() {
    this._udrListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udrListIdsInput() {
    return this._udrListIds;
  }
}

export class ConnectorAzureVnetVnetSubnetList extends cdktf.ComplexList {
  public internalValue? : ConnectorAzureVnetVnetSubnet[] | cdktf.IResolvable

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
  public get(index: number): ConnectorAzureVnetVnetSubnetOutputReference {
    return new ConnectorAzureVnetVnetSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet alkira_connector_azure_vnet}
*/
export class ConnectorAzureVnet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_connector_azure_vnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectorAzureVnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectorAzureVnet to import
  * @param importFromId The id of the existing ConnectorAzureVnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectorAzureVnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_connector_azure_vnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_vnet alkira_connector_azure_vnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectorAzureVnetConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectorAzureVnetConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_connector_azure_vnet',
      terraformGeneratorMetadata: {
        providerName: 'alkira',
        providerVersion: '1.3.2',
        providerVersionConstraint: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._azureVnetId = config.azureVnetId;
    this._billingTagIds = config.billingTagIds;
    this._connectionMode = config.connectionMode;
    this._credentialId = config.credentialId;
    this._customerAsn = config.customerAsn;
    this._cxp = config.cxp;
    this._description = config.description;
    this._enabled = config.enabled;
    this._failoverCxps = config.failoverCxps;
    this._group = config.group;
    this._groupDirectInterConnector = config.groupDirectInterConnector;
    this._id = config.id;
    this._name = config.name;
    this._nativeServices = config.nativeServices;
    this._peeringGatewayCxpId = config.peeringGatewayCxpId;
    this._routingOptions = config.routingOptions;
    this._routingPrefixListIds = config.routingPrefixListIds;
    this._scaleGroupId = config.scaleGroupId;
    this._segmentId = config.segmentId;
    this._serviceTags = config.serviceTags;
    this._size = config.size;
    this._udrListIds = config.udrListIds;
    this._vnetCidr.internalValue = config.vnetCidr;
    this._vnetSubnet.internalValue = config.vnetSubnet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_vnet_id - computed: false, optional: false, required: true
  private _azureVnetId?: string; 
  public get azureVnetId() {
    return this.getStringAttribute('azure_vnet_id');
  }
  public set azureVnetId(value: string) {
    this._azureVnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureVnetIdInput() {
    return this._azureVnetId;
  }

  // billing_tag_ids - computed: false, optional: true, required: false
  private _billingTagIds?: number[]; 
  public get billingTagIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('billing_tag_ids')));
  }
  public set billingTagIds(value: number[]) {
    this._billingTagIds = value;
  }
  public resetBillingTagIds() {
    this._billingTagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingTagIdsInput() {
    return this._billingTagIds;
  }

  // connection_mode - computed: false, optional: true, required: false
  private _connectionMode?: string; 
  public get connectionMode() {
    return this.getStringAttribute('connection_mode');
  }
  public set connectionMode(value: string) {
    this._connectionMode = value;
  }
  public resetConnectionMode() {
    this._connectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionModeInput() {
    return this._connectionMode;
  }

  // credential_id - computed: false, optional: false, required: true
  private _credentialId?: string; 
  public get credentialId() {
    return this.getStringAttribute('credential_id');
  }
  public set credentialId(value: string) {
    this._credentialId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialIdInput() {
    return this._credentialId;
  }

  // customer_asn - computed: false, optional: true, required: false
  private _customerAsn?: number; 
  public get customerAsn() {
    return this.getNumberAttribute('customer_asn');
  }
  public set customerAsn(value: number) {
    this._customerAsn = value;
  }
  public resetCustomerAsn() {
    this._customerAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerAsnInput() {
    return this._customerAsn;
  }

  // cxp - computed: false, optional: false, required: true
  private _cxp?: string; 
  public get cxp() {
    return this.getStringAttribute('cxp');
  }
  public set cxp(value: string) {
    this._cxp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxpInput() {
    return this._cxp;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // failover_cxps - computed: false, optional: true, required: false
  private _failoverCxps?: string[]; 
  public get failoverCxps() {
    return this.getListAttribute('failover_cxps');
  }
  public set failoverCxps(value: string[]) {
    this._failoverCxps = value;
  }
  public resetFailoverCxps() {
    this._failoverCxps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverCxpsInput() {
    return this._failoverCxps;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // group_direct_inter_connector - computed: false, optional: true, required: false
  private _groupDirectInterConnector?: string; 
  public get groupDirectInterConnector() {
    return this.getStringAttribute('group_direct_inter_connector');
  }
  public set groupDirectInterConnector(value: string) {
    this._groupDirectInterConnector = value;
  }
  public resetGroupDirectInterConnector() {
    this._groupDirectInterConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupDirectInterConnectorInput() {
    return this._groupDirectInterConnector;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // implicit_group_id - computed: true, optional: false, required: false
  public get implicitGroupId() {
    return this.getNumberAttribute('implicit_group_id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // native_services - computed: false, optional: true, required: false
  private _nativeServices?: string[]; 
  public get nativeServices() {
    return this.getListAttribute('native_services');
  }
  public set nativeServices(value: string[]) {
    this._nativeServices = value;
  }
  public resetNativeServices() {
    this._nativeServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeServicesInput() {
    return this._nativeServices;
  }

  // peering_gateway_cxp_id - computed: false, optional: true, required: false
  private _peeringGatewayCxpId?: number; 
  public get peeringGatewayCxpId() {
    return this.getNumberAttribute('peering_gateway_cxp_id');
  }
  public set peeringGatewayCxpId(value: number) {
    this._peeringGatewayCxpId = value;
  }
  public resetPeeringGatewayCxpId() {
    this._peeringGatewayCxpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringGatewayCxpIdInput() {
    return this._peeringGatewayCxpId;
  }

  // provision_state - computed: true, optional: false, required: false
  public get provisionState() {
    return this.getStringAttribute('provision_state');
  }

  // routing_options - computed: false, optional: true, required: false
  private _routingOptions?: string; 
  public get routingOptions() {
    return this.getStringAttribute('routing_options');
  }
  public set routingOptions(value: string) {
    this._routingOptions = value;
  }
  public resetRoutingOptions() {
    this._routingOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingOptionsInput() {
    return this._routingOptions;
  }

  // routing_prefix_list_ids - computed: false, optional: true, required: false
  private _routingPrefixListIds?: number[]; 
  public get routingPrefixListIds() {
    return this.getNumberListAttribute('routing_prefix_list_ids');
  }
  public set routingPrefixListIds(value: number[]) {
    this._routingPrefixListIds = value;
  }
  public resetRoutingPrefixListIds() {
    this._routingPrefixListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPrefixListIdsInput() {
    return this._routingPrefixListIds;
  }

  // scale_group_id - computed: false, optional: true, required: false
  private _scaleGroupId?: string; 
  public get scaleGroupId() {
    return this.getStringAttribute('scale_group_id');
  }
  public set scaleGroupId(value: string) {
    this._scaleGroupId = value;
  }
  public resetScaleGroupId() {
    this._scaleGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleGroupIdInput() {
    return this._scaleGroupId;
  }

  // segment_id - computed: false, optional: false, required: true
  private _segmentId?: string; 
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }
  public set segmentId(value: string) {
    this._segmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }

  // service_tags - computed: false, optional: true, required: false
  private _serviceTags?: string[]; 
  public get serviceTags() {
    return this.getListAttribute('service_tags');
  }
  public set serviceTags(value: string[]) {
    this._serviceTags = value;
  }
  public resetServiceTags() {
    this._serviceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTagsInput() {
    return this._serviceTags;
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // udr_list_ids - computed: false, optional: true, required: false
  private _udrListIds?: number[]; 
  public get udrListIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('udr_list_ids')));
  }
  public set udrListIds(value: number[]) {
    this._udrListIds = value;
  }
  public resetUdrListIds() {
    this._udrListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udrListIdsInput() {
    return this._udrListIds;
  }

  // vnet_cidr - computed: false, optional: true, required: false
  private _vnetCidr = new ConnectorAzureVnetVnetCidrList(this, "vnet_cidr", true);
  public get vnetCidr() {
    return this._vnetCidr;
  }
  public putVnetCidr(value: ConnectorAzureVnetVnetCidr[] | cdktf.IResolvable) {
    this._vnetCidr.internalValue = value;
  }
  public resetVnetCidr() {
    this._vnetCidr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetCidrInput() {
    return this._vnetCidr.internalValue;
  }

  // vnet_subnet - computed: false, optional: true, required: false
  private _vnetSubnet = new ConnectorAzureVnetVnetSubnetList(this, "vnet_subnet", true);
  public get vnetSubnet() {
    return this._vnetSubnet;
  }
  public putVnetSubnet(value: ConnectorAzureVnetVnetSubnet[] | cdktf.IResolvable) {
    this._vnetSubnet.internalValue = value;
  }
  public resetVnetSubnet() {
    this._vnetSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetSubnetInput() {
    return this._vnetSubnet.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      azure_vnet_id: cdktf.stringToTerraform(this._azureVnetId),
      billing_tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._billingTagIds),
      connection_mode: cdktf.stringToTerraform(this._connectionMode),
      credential_id: cdktf.stringToTerraform(this._credentialId),
      customer_asn: cdktf.numberToTerraform(this._customerAsn),
      cxp: cdktf.stringToTerraform(this._cxp),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      failover_cxps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._failoverCxps),
      group: cdktf.stringToTerraform(this._group),
      group_direct_inter_connector: cdktf.stringToTerraform(this._groupDirectInterConnector),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      native_services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nativeServices),
      peering_gateway_cxp_id: cdktf.numberToTerraform(this._peeringGatewayCxpId),
      routing_options: cdktf.stringToTerraform(this._routingOptions),
      routing_prefix_list_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._routingPrefixListIds),
      scale_group_id: cdktf.stringToTerraform(this._scaleGroupId),
      segment_id: cdktf.stringToTerraform(this._segmentId),
      service_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceTags),
      size: cdktf.stringToTerraform(this._size),
      udr_list_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._udrListIds),
      vnet_cidr: cdktf.listMapper(connectorAzureVnetVnetCidrToTerraform, true)(this._vnetCidr.internalValue),
      vnet_subnet: cdktf.listMapper(connectorAzureVnetVnetSubnetToTerraform, true)(this._vnetSubnet.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      azure_vnet_id: {
        value: cdktf.stringToHclTerraform(this._azureVnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      billing_tag_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._billingTagIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      connection_mode: {
        value: cdktf.stringToHclTerraform(this._connectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credential_id: {
        value: cdktf.stringToHclTerraform(this._credentialId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_asn: {
        value: cdktf.numberToHclTerraform(this._customerAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cxp: {
        value: cdktf.stringToHclTerraform(this._cxp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      failover_cxps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._failoverCxps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_direct_inter_connector: {
        value: cdktf.stringToHclTerraform(this._groupDirectInterConnector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      native_services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nativeServices),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      peering_gateway_cxp_id: {
        value: cdktf.numberToHclTerraform(this._peeringGatewayCxpId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      routing_options: {
        value: cdktf.stringToHclTerraform(this._routingOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_prefix_list_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._routingPrefixListIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      scale_group_id: {
        value: cdktf.stringToHclTerraform(this._scaleGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment_id: {
        value: cdktf.stringToHclTerraform(this._segmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serviceTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      size: {
        value: cdktf.stringToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udr_list_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._udrListIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      vnet_cidr: {
        value: cdktf.listMapperHcl(connectorAzureVnetVnetCidrToHclTerraform, true)(this._vnetCidr.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectorAzureVnetVnetCidrList",
      },
      vnet_subnet: {
        value: cdktf.listMapperHcl(connectorAzureVnetVnetSubnetToHclTerraform, true)(this._vnetSubnet.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectorAzureVnetVnetSubnetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
