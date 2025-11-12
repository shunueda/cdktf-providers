// https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/ix
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IxConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ASN (Autonomous System Number) for the IX connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/ix#asn Ix#asn}
  */
  readonly asn?: number;
  /**
  * Attribute tags associated with the IX.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/ix#attribute_tags Ix#attribute_tags}
  */
  readonly attributeTags?: { [key: string]: string };
  /**
  * Cost centre for invoicing purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/ix#cost_centre Ix#cost_centre}
  */
  readonly costCentre?: string;
  /**
  * The MAC address for the IX interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/ix#mac_address Ix#mac_address}
  */
  readonly macAddress: string;
  /**
  * The type of IX service, e.g., 'Los Angeles IX', 'Sydney IX'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/ix#network_service_type Ix#network_service_type}
  */
  readonly networkServiceType: string;
  /**
  * Name of the IX.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/ix#product_name Ix#product_name}
  */
  readonly productName: string;
  /**
  * Promo code to apply to the IX.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/ix#promo_code Ix#promo_code}
  */
  readonly promoCode?: string;
  /**
  * Whether the IX usage statistics are publicly viewable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/ix#public_graph Ix#public_graph}
  */
  readonly publicGraph?: boolean | cdktf.IResolvable;
  /**
  * The rate limit in Mbps for the IX connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/ix#rate_limit Ix#rate_limit}
  */
  readonly rateLimit: number;
  /**
  * UID identifier of the product to attach the IX to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/ix#requested_product_uid Ix#requested_product_uid}
  */
  readonly requestedProductUid: string;
  /**
  * Custom hostname for your IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/ix#reverse_dns Ix#reverse_dns}
  */
  readonly reverseDns?: string;
  /**
  * Whether the IX connection is shut down. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/ix#shutdown Ix#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * The VLAN ID for the IX connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/ix#vlan Ix#vlan}
  */
  readonly vlan: number;
}
export interface IxResourcesBgpConnections {
}

export function ixResourcesBgpConnectionsToTerraform(struct?: IxResourcesBgpConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ixResourcesBgpConnectionsToHclTerraform(struct?: IxResourcesBgpConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IxResourcesBgpConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IxResourcesBgpConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IxResourcesBgpConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asn - computed: true, optional: false, required: false
  public get asn() {
    return this.getNumberAttribute('asn');
  }

  // customer_asn - computed: true, optional: false, required: false
  public get customerAsn() {
    return this.getNumberAttribute('customer_asn');
  }

  // customer_ip_address - computed: true, optional: false, required: false
  public get customerIpAddress() {
    return this.getStringAttribute('customer_ip_address');
  }

  // isp_asn - computed: true, optional: false, required: false
  public get ispAsn() {
    return this.getNumberAttribute('isp_asn');
  }

  // isp_ip_address - computed: true, optional: false, required: false
  public get ispIpAddress() {
    return this.getStringAttribute('isp_ip_address');
  }

  // ix_peer_policy - computed: true, optional: false, required: false
  public get ixPeerPolicy() {
    return this.getStringAttribute('ix_peer_policy');
  }

  // max_prefixes - computed: true, optional: false, required: false
  public get maxPrefixes() {
    return this.getNumberAttribute('max_prefixes');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
}

export class IxResourcesBgpConnectionsList extends cdktf.ComplexList {

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
  public get(index: number): IxResourcesBgpConnectionsOutputReference {
    return new IxResourcesBgpConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IxResourcesInterface {
}

export function ixResourcesInterfaceToTerraform(struct?: IxResourcesInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ixResourcesInterfaceToHclTerraform(struct?: IxResourcesInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IxResourcesInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IxResourcesInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IxResourcesInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // demarcation - computed: true, optional: false, required: false
  public get demarcation() {
    return this.getStringAttribute('demarcation');
  }

  // loa_template - computed: true, optional: false, required: false
  public get loaTemplate() {
    return this.getStringAttribute('loa_template');
  }

  // media - computed: true, optional: false, required: false
  public get media() {
    return this.getStringAttribute('media');
  }

  // port_speed - computed: true, optional: false, required: false
  public get portSpeed() {
    return this.getNumberAttribute('port_speed');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }

  // up - computed: true, optional: false, required: false
  public get up() {
    return this.getNumberAttribute('up');
  }
}
export interface IxResourcesIpAddresses {
}

export function ixResourcesIpAddressesToTerraform(struct?: IxResourcesIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ixResourcesIpAddressesToHclTerraform(struct?: IxResourcesIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IxResourcesIpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IxResourcesIpAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IxResourcesIpAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // reverse_dns - computed: true, optional: false, required: false
  public get reverseDns() {
    return this.getStringAttribute('reverse_dns');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class IxResourcesIpAddressesList extends cdktf.ComplexList {

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
  public get(index: number): IxResourcesIpAddressesOutputReference {
    return new IxResourcesIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IxResourcesVplsInterface {
}

export function ixResourcesVplsInterfaceToTerraform(struct?: IxResourcesVplsInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ixResourcesVplsInterfaceToHclTerraform(struct?: IxResourcesVplsInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IxResourcesVplsInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IxResourcesVplsInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IxResourcesVplsInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // rate_limit_mbps - computed: true, optional: false, required: false
  public get rateLimitMbps() {
    return this.getNumberAttribute('rate_limit_mbps');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }

  // vlan - computed: true, optional: false, required: false
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
}
export interface IxResources {
}

export function ixResourcesToTerraform(struct?: IxResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ixResourcesToHclTerraform(struct?: IxResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IxResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IxResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IxResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bgp_connections - computed: true, optional: false, required: false
  private _bgpConnections = new IxResourcesBgpConnectionsList(this, "bgp_connections", false);
  public get bgpConnections() {
    return this._bgpConnections;
  }

  // interface - computed: true, optional: false, required: false
  private _interface = new IxResourcesInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }

  // ip_addresses - computed: true, optional: false, required: false
  private _ipAddresses = new IxResourcesIpAddressesList(this, "ip_addresses", false);
  public get ipAddresses() {
    return this._ipAddresses;
  }

  // vpls_interface - computed: true, optional: false, required: false
  private _vplsInterface = new IxResourcesVplsInterfaceOutputReference(this, "vpls_interface");
  public get vplsInterface() {
    return this._vplsInterface;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/ix megaport_ix}
*/
export class Ix extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "megaport_ix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ix resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ix to import
  * @param importFromId The id of the existing Ix that should be imported. Refer to the {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/ix#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ix to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "megaport_ix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/ix megaport_ix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IxConfig
  */
  public constructor(scope: Construct, id: string, config: IxConfig) {
    super(scope, id, {
      terraformResourceType: 'megaport_ix',
      terraformGeneratorMetadata: {
        providerName: 'megaport',
        providerVersion: '1.4.6',
        providerVersionConstraint: '1.4.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asn = config.asn;
    this._attributeTags = config.attributeTags;
    this._costCentre = config.costCentre;
    this._macAddress = config.macAddress;
    this._networkServiceType = config.networkServiceType;
    this._productName = config.productName;
    this._promoCode = config.promoCode;
    this._publicGraph = config.publicGraph;
    this._rateLimit = config.rateLimit;
    this._requestedProductUid = config.requestedProductUid;
    this._reverseDns = config.reverseDns;
    this._shutdown = config.shutdown;
    this._vlan = config.vlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asn - computed: true, optional: true, required: false
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  public resetAsn() {
    this._asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // attribute_tags - computed: false, optional: true, required: false
  private _attributeTags?: { [key: string]: string }; 
  public get attributeTags() {
    return this.getStringMapAttribute('attribute_tags');
  }
  public set attributeTags(value: { [key: string]: string }) {
    this._attributeTags = value;
  }
  public resetAttributeTags() {
    this._attributeTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeTagsInput() {
    return this._attributeTags;
  }

  // cost_centre - computed: false, optional: true, required: false
  private _costCentre?: string; 
  public get costCentre() {
    return this.getStringAttribute('cost_centre');
  }
  public set costCentre(value: string) {
    this._costCentre = value;
  }
  public resetCostCentre() {
    this._costCentre = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCentreInput() {
    return this._costCentre;
  }

  // create_date - computed: true, optional: false, required: false
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // deploy_date - computed: true, optional: false, required: false
  public get deployDate() {
    return this.getStringAttribute('deploy_date');
  }

  // ix_peer_macro - computed: true, optional: false, required: false
  public get ixPeerMacro() {
    return this.getStringAttribute('ix_peer_macro');
  }

  // location_id - computed: true, optional: false, required: false
  public get locationId() {
    return this.getNumberAttribute('location_id');
  }

  // mac_address - computed: false, optional: false, required: true
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // network_service_type - computed: false, optional: false, required: true
  private _networkServiceType?: string; 
  public get networkServiceType() {
    return this.getStringAttribute('network_service_type');
  }
  public set networkServiceType(value: string) {
    this._networkServiceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkServiceTypeInput() {
    return this._networkServiceType;
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getNumberAttribute('product_id');
  }

  // product_name - computed: false, optional: false, required: true
  private _productName?: string; 
  public get productName() {
    return this.getStringAttribute('product_name');
  }
  public set productName(value: string) {
    this._productName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName;
  }

  // product_uid - computed: true, optional: false, required: false
  public get productUid() {
    return this.getStringAttribute('product_uid');
  }

  // promo_code - computed: false, optional: true, required: false
  private _promoCode?: string; 
  public get promoCode() {
    return this.getStringAttribute('promo_code');
  }
  public set promoCode(value: string) {
    this._promoCode = value;
  }
  public resetPromoCode() {
    this._promoCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promoCodeInput() {
    return this._promoCode;
  }

  // provisioning_status - computed: true, optional: false, required: false
  public get provisioningStatus() {
    return this.getStringAttribute('provisioning_status');
  }

  // public_graph - computed: true, optional: true, required: false
  private _publicGraph?: boolean | cdktf.IResolvable; 
  public get publicGraph() {
    return this.getBooleanAttribute('public_graph');
  }
  public set publicGraph(value: boolean | cdktf.IResolvable) {
    this._publicGraph = value;
  }
  public resetPublicGraph() {
    this._publicGraph = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicGraphInput() {
    return this._publicGraph;
  }

  // rate_limit - computed: false, optional: false, required: true
  private _rateLimit?: number; 
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }

  // requested_product_uid - computed: false, optional: false, required: true
  private _requestedProductUid?: string; 
  public get requestedProductUid() {
    return this.getStringAttribute('requested_product_uid');
  }
  public set requestedProductUid(value: string) {
    this._requestedProductUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedProductUidInput() {
    return this._requestedProductUid;
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new IxResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }

  // reverse_dns - computed: false, optional: true, required: false
  private _reverseDns?: string; 
  public get reverseDns() {
    return this.getStringAttribute('reverse_dns');
  }
  public set reverseDns(value: string) {
    this._reverseDns = value;
  }
  public resetReverseDns() {
    this._reverseDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseDnsInput() {
    return this._reverseDns;
  }

  // secondary_name - computed: true, optional: false, required: false
  public get secondaryName() {
    return this.getStringAttribute('secondary_name');
  }

  // shutdown - computed: false, optional: true, required: false
  private _shutdown?: boolean | cdktf.IResolvable; 
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }
  public set shutdown(value: boolean | cdktf.IResolvable) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // term - computed: true, optional: false, required: false
  public get term() {
    return this.getNumberAttribute('term');
  }

  // usage_algorithm - computed: true, optional: false, required: false
  public get usageAlgorithm() {
    return this.getStringAttribute('usage_algorithm');
  }

  // vlan - computed: false, optional: false, required: true
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asn: cdktf.numberToTerraform(this._asn),
      attribute_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._attributeTags),
      cost_centre: cdktf.stringToTerraform(this._costCentre),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      network_service_type: cdktf.stringToTerraform(this._networkServiceType),
      product_name: cdktf.stringToTerraform(this._productName),
      promo_code: cdktf.stringToTerraform(this._promoCode),
      public_graph: cdktf.booleanToTerraform(this._publicGraph),
      rate_limit: cdktf.numberToTerraform(this._rateLimit),
      requested_product_uid: cdktf.stringToTerraform(this._requestedProductUid),
      reverse_dns: cdktf.stringToTerraform(this._reverseDns),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      vlan: cdktf.numberToTerraform(this._vlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asn: {
        value: cdktf.numberToHclTerraform(this._asn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      attribute_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._attributeTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      cost_centre: {
        value: cdktf.stringToHclTerraform(this._costCentre),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_address: {
        value: cdktf.stringToHclTerraform(this._macAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_service_type: {
        value: cdktf.stringToHclTerraform(this._networkServiceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_name: {
        value: cdktf.stringToHclTerraform(this._productName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      promo_code: {
        value: cdktf.stringToHclTerraform(this._promoCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_graph: {
        value: cdktf.booleanToHclTerraform(this._publicGraph),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rate_limit: {
        value: cdktf.numberToHclTerraform(this._rateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      requested_product_uid: {
        value: cdktf.stringToHclTerraform(this._requestedProductUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reverse_dns: {
        value: cdktf.stringToHclTerraform(this._reverseDns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shutdown: {
        value: cdktf.booleanToHclTerraform(this._shutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
