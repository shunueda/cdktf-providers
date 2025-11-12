// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/vpn_interface_ethernet_pppoe_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/vpn_interface_ethernet_pppoe_feature_template#id DataSdwanVpnInterfaceEthernetPppoeFeatureTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/vpn_interface_ethernet_pppoe_feature_template#name DataSdwanVpnInterfaceEthernetPppoeFeatureTemplate#name}
  */
  readonly name?: string;
}
export interface DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateAccessLists {
}

export function dataSdwanVpnInterfaceEthernetPppoeFeatureTemplateAccessListsToTerraform(struct?: DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateAccessLists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanVpnInterfaceEthernetPppoeFeatureTemplateAccessListsToHclTerraform(struct?: DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateAccessLists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateAccessListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateAccessLists | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateAccessLists | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl_name - computed: true, optional: false, required: false
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }

  // acl_name_variable - computed: true, optional: false, required: false
  public get aclNameVariable() {
    return this.getStringAttribute('acl_name_variable');
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateAccessListsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateAccessListsOutputReference {
    return new DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateAccessListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateNatPortForwards {
}

export function dataSdwanVpnInterfaceEthernetPppoeFeatureTemplateNatPortForwardsToTerraform(struct?: DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateNatPortForwards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanVpnInterfaceEthernetPppoeFeatureTemplateNatPortForwardsToHclTerraform(struct?: DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateNatPortForwards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateNatPortForwardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateNatPortForwards | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateNatPortForwards | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // port_end_range - computed: true, optional: false, required: false
  public get portEndRange() {
    return this.getNumberAttribute('port_end_range');
  }

  // port_start_range - computed: true, optional: false, required: false
  public get portStartRange() {
    return this.getNumberAttribute('port_start_range');
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // private_ip_address_variable - computed: true, optional: false, required: false
  public get privateIpAddressVariable() {
    return this.getStringAttribute('private_ip_address_variable');
  }

  // private_vpn - computed: true, optional: false, required: false
  public get privateVpn() {
    return this.getNumberAttribute('private_vpn');
  }

  // private_vpn_variable - computed: true, optional: false, required: false
  public get privateVpnVariable() {
    return this.getStringAttribute('private_vpn_variable');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateNatPortForwardsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateNatPortForwardsOutputReference {
    return new DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateNatPortForwardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanVpnInterfaceEthernetPppoeFeatureTemplatePolicers {
}

export function dataSdwanVpnInterfaceEthernetPppoeFeatureTemplatePolicersToTerraform(struct?: DataSdwanVpnInterfaceEthernetPppoeFeatureTemplatePolicers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanVpnInterfaceEthernetPppoeFeatureTemplatePolicersToHclTerraform(struct?: DataSdwanVpnInterfaceEthernetPppoeFeatureTemplatePolicers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanVpnInterfaceEthernetPppoeFeatureTemplatePolicersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanVpnInterfaceEthernetPppoeFeatureTemplatePolicers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanVpnInterfaceEthernetPppoeFeatureTemplatePolicers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // policer_name - computed: true, optional: false, required: false
  public get policerName() {
    return this.getStringAttribute('policer_name');
  }
}

export class DataSdwanVpnInterfaceEthernetPppoeFeatureTemplatePolicersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanVpnInterfaceEthernetPppoeFeatureTemplatePolicersOutputReference {
    return new DataSdwanVpnInterfaceEthernetPppoeFeatureTemplatePolicersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateTunnelInterfaceEncapsulations {
}

export function dataSdwanVpnInterfaceEthernetPppoeFeatureTemplateTunnelInterfaceEncapsulationsToTerraform(struct?: DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateTunnelInterfaceEncapsulations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanVpnInterfaceEthernetPppoeFeatureTemplateTunnelInterfaceEncapsulationsToHclTerraform(struct?: DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateTunnelInterfaceEncapsulations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateTunnelInterfaceEncapsulationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateTunnelInterfaceEncapsulations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateTunnelInterfaceEncapsulations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encapsulation - computed: true, optional: false, required: false
  public get encapsulation() {
    return this.getStringAttribute('encapsulation');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // preference - computed: true, optional: false, required: false
  public get preference() {
    return this.getNumberAttribute('preference');
  }

  // preference_variable - computed: true, optional: false, required: false
  public get preferenceVariable() {
    return this.getStringAttribute('preference_variable');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }

  // weight_variable - computed: true, optional: false, required: false
  public get weightVariable() {
    return this.getStringAttribute('weight_variable');
  }
}

export class DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateTunnelInterfaceEncapsulationsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateTunnelInterfaceEncapsulationsOutputReference {
    return new DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateTunnelInterfaceEncapsulationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/vpn_interface_ethernet_pppoe_feature_template sdwan_vpn_interface_ethernet_pppoe_feature_template}
*/
export class DataSdwanVpnInterfaceEthernetPppoeFeatureTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_vpn_interface_ethernet_pppoe_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanVpnInterfaceEthernetPppoeFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanVpnInterfaceEthernetPppoeFeatureTemplate to import
  * @param importFromId The id of the existing DataSdwanVpnInterfaceEthernetPppoeFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/vpn_interface_ethernet_pppoe_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanVpnInterfaceEthernetPppoeFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_vpn_interface_ethernet_pppoe_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/vpn_interface_ethernet_pppoe_feature_template sdwan_vpn_interface_ethernet_pppoe_feature_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdwan_vpn_interface_ethernet_pppoe_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_lists - computed: true, optional: false, required: false
  private _accessLists = new DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateAccessListsList(this, "access_lists", false);
  public get accessLists() {
    return this._accessLists;
  }

  // bandwidth_downstream - computed: true, optional: false, required: false
  public get bandwidthDownstream() {
    return this.getNumberAttribute('bandwidth_downstream');
  }

  // bandwidth_downstream_variable - computed: true, optional: false, required: false
  public get bandwidthDownstreamVariable() {
    return this.getStringAttribute('bandwidth_downstream_variable');
  }

  // bandwidth_upstream - computed: true, optional: false, required: false
  public get bandwidthUpstream() {
    return this.getNumberAttribute('bandwidth_upstream');
  }

  // bandwidth_upstream_variable - computed: true, optional: false, required: false
  public get bandwidthUpstreamVariable() {
    return this.getStringAttribute('bandwidth_upstream_variable');
  }

  // chap_hostname - computed: true, optional: false, required: false
  public get chapHostname() {
    return this.getStringAttribute('chap_hostname');
  }

  // chap_hostname_variable - computed: true, optional: false, required: false
  public get chapHostnameVariable() {
    return this.getStringAttribute('chap_hostname_variable');
  }

  // chap_ppp_auth_password - computed: true, optional: false, required: false
  public get chapPppAuthPassword() {
    return this.getStringAttribute('chap_ppp_auth_password');
  }

  // chap_ppp_auth_password_variable - computed: true, optional: false, required: false
  public get chapPppAuthPasswordVariable() {
    return this.getStringAttribute('chap_ppp_auth_password_variable');
  }

  // core_region - computed: true, optional: false, required: false
  public get coreRegion() {
    return this.getStringAttribute('core_region');
  }

  // core_region_variable - computed: true, optional: false, required: false
  public get coreRegionVariable() {
    return this.getStringAttribute('core_region_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_types - computed: true, optional: false, required: false
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }

  // dialer_address_negotiated - computed: true, optional: false, required: false
  public get dialerAddressNegotiated() {
    return this.getBooleanAttribute('dialer_address_negotiated');
  }

  // dialer_address_negotiated_variable - computed: true, optional: false, required: false
  public get dialerAddressNegotiatedVariable() {
    return this.getStringAttribute('dialer_address_negotiated_variable');
  }

  // dialer_pool_number - computed: true, optional: false, required: false
  public get dialerPoolNumber() {
    return this.getNumberAttribute('dialer_pool_number');
  }

  // dialer_pool_number_variable - computed: true, optional: false, required: false
  public get dialerPoolNumberVariable() {
    return this.getStringAttribute('dialer_pool_number_variable');
  }

  // dialer_tcp_mss - computed: true, optional: false, required: false
  public get dialerTcpMss() {
    return this.getNumberAttribute('dialer_tcp_mss');
  }

  // dialer_tcp_mss_variable - computed: true, optional: false, required: false
  public get dialerTcpMssVariable() {
    return this.getStringAttribute('dialer_tcp_mss_variable');
  }

  // enable_core_region - computed: true, optional: false, required: false
  public get enableCoreRegion() {
    return this.getBooleanAttribute('enable_core_region');
  }

  // encap - computed: true, optional: false, required: false
  public get encap() {
    return this.getNumberAttribute('encap');
  }

  // encap_variable - computed: true, optional: false, required: false
  public get encapVariable() {
    return this.getStringAttribute('encap_variable');
  }

  // ethernet_interface_name - computed: true, optional: false, required: false
  public get ethernetInterfaceName() {
    return this.getStringAttribute('ethernet_interface_name');
  }

  // ethernet_interface_name_variable - computed: true, optional: false, required: false
  public get ethernetInterfaceNameVariable() {
    return this.getStringAttribute('ethernet_interface_name_variable');
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

  // interface_description - computed: true, optional: false, required: false
  public get interfaceDescription() {
    return this.getStringAttribute('interface_description');
  }

  // interface_description_variable - computed: true, optional: false, required: false
  public get interfaceDescriptionVariable() {
    return this.getStringAttribute('interface_description_variable');
  }

  // ip_directed_broadcast - computed: true, optional: false, required: false
  public get ipDirectedBroadcast() {
    return this.getBooleanAttribute('ip_directed_broadcast');
  }

  // ip_directed_broadcast_variable - computed: true, optional: false, required: false
  public get ipDirectedBroadcastVariable() {
    return this.getStringAttribute('ip_directed_broadcast_variable');
  }

  // ip_mtu_for_dialer_interface - computed: true, optional: false, required: false
  public get ipMtuForDialerInterface() {
    return this.getNumberAttribute('ip_mtu_for_dialer_interface');
  }

  // ip_mtu_for_dialer_interface_variable - computed: true, optional: false, required: false
  public get ipMtuForDialerInterfaceVariable() {
    return this.getStringAttribute('ip_mtu_for_dialer_interface_variable');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nat - computed: true, optional: false, required: false
  public get nat() {
    return this.getBooleanAttribute('nat');
  }

  // nat_block_icmp_error - computed: true, optional: false, required: false
  public get natBlockIcmpError() {
    return this.getBooleanAttribute('nat_block_icmp_error');
  }

  // nat_block_icmp_error_variable - computed: true, optional: false, required: false
  public get natBlockIcmpErrorVariable() {
    return this.getStringAttribute('nat_block_icmp_error_variable');
  }

  // nat_port_forwards - computed: true, optional: false, required: false
  private _natPortForwards = new DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateNatPortForwardsList(this, "nat_port_forwards", false);
  public get natPortForwards() {
    return this._natPortForwards;
  }

  // nat_refresh_mode - computed: true, optional: false, required: false
  public get natRefreshMode() {
    return this.getStringAttribute('nat_refresh_mode');
  }

  // nat_refresh_mode_variable - computed: true, optional: false, required: false
  public get natRefreshModeVariable() {
    return this.getStringAttribute('nat_refresh_mode_variable');
  }

  // nat_response_to_ping - computed: true, optional: false, required: false
  public get natResponseToPing() {
    return this.getBooleanAttribute('nat_response_to_ping');
  }

  // nat_response_to_ping_variable - computed: true, optional: false, required: false
  public get natResponseToPingVariable() {
    return this.getStringAttribute('nat_response_to_ping_variable');
  }

  // nat_tcp_timeout - computed: true, optional: false, required: false
  public get natTcpTimeout() {
    return this.getNumberAttribute('nat_tcp_timeout');
  }

  // nat_tcp_timeout_variable - computed: true, optional: false, required: false
  public get natTcpTimeoutVariable() {
    return this.getStringAttribute('nat_tcp_timeout_variable');
  }

  // nat_udp_timeout - computed: true, optional: false, required: false
  public get natUdpTimeout() {
    return this.getNumberAttribute('nat_udp_timeout');
  }

  // nat_udp_timeout_variable - computed: true, optional: false, required: false
  public get natUdpTimeoutVariable() {
    return this.getStringAttribute('nat_udp_timeout_variable');
  }

  // pap_password - computed: true, optional: false, required: false
  public get papPassword() {
    return this.getBooleanAttribute('pap_password');
  }

  // pap_ppp_auth_password - computed: true, optional: false, required: false
  public get papPppAuthPassword() {
    return this.getStringAttribute('pap_ppp_auth_password');
  }

  // pap_ppp_auth_password_variable - computed: true, optional: false, required: false
  public get papPppAuthPasswordVariable() {
    return this.getStringAttribute('pap_ppp_auth_password_variable');
  }

  // pap_username - computed: true, optional: false, required: false
  public get papUsername() {
    return this.getStringAttribute('pap_username');
  }

  // pap_username_variable - computed: true, optional: false, required: false
  public get papUsernameVariable() {
    return this.getStringAttribute('pap_username_variable');
  }

  // per_tunnel_qos - computed: true, optional: false, required: false
  public get perTunnelQos() {
    return this.getBooleanAttribute('per_tunnel_qos');
  }

  // per_tunnel_qos_aggregator - computed: true, optional: false, required: false
  public get perTunnelQosAggregator() {
    return this.getBooleanAttribute('per_tunnel_qos_aggregator');
  }

  // per_tunnel_qos_aggregator_variable - computed: true, optional: false, required: false
  public get perTunnelQosAggregatorVariable() {
    return this.getStringAttribute('per_tunnel_qos_aggregator_variable');
  }

  // per_tunnel_qos_variable - computed: true, optional: false, required: false
  public get perTunnelQosVariable() {
    return this.getStringAttribute('per_tunnel_qos_variable');
  }

  // policers - computed: true, optional: false, required: false
  private _policers = new DataSdwanVpnInterfaceEthernetPppoeFeatureTemplatePolicersList(this, "policers", false);
  public get policers() {
    return this._policers;
  }

  // ppp_authentication_protocol - computed: true, optional: false, required: false
  public get pppAuthenticationProtocol() {
    return this.getStringAttribute('ppp_authentication_protocol');
  }

  // ppp_authentication_protocol_pap - computed: true, optional: false, required: false
  public get pppAuthenticationProtocolPap() {
    return this.getBooleanAttribute('ppp_authentication_protocol_pap');
  }

  // ppp_authentication_protocol_variable - computed: true, optional: false, required: false
  public get pppAuthenticationProtocolVariable() {
    return this.getStringAttribute('ppp_authentication_protocol_variable');
  }

  // ppp_authentication_type - computed: true, optional: false, required: false
  public get pppAuthenticationType() {
    return this.getStringAttribute('ppp_authentication_type');
  }

  // ppp_maximum_payload - computed: true, optional: false, required: false
  public get pppMaximumPayload() {
    return this.getNumberAttribute('ppp_maximum_payload');
  }

  // ppp_maximum_payload_variable - computed: true, optional: false, required: false
  public get pppMaximumPayloadVariable() {
    return this.getStringAttribute('ppp_maximum_payload_variable');
  }

  // qos_adaptive_bandwidth_downstream - computed: true, optional: false, required: false
  public get qosAdaptiveBandwidthDownstream() {
    return this.getNumberAttribute('qos_adaptive_bandwidth_downstream');
  }

  // qos_adaptive_bandwidth_downstream_variable - computed: true, optional: false, required: false
  public get qosAdaptiveBandwidthDownstreamVariable() {
    return this.getStringAttribute('qos_adaptive_bandwidth_downstream_variable');
  }

  // qos_adaptive_bandwidth_upstream - computed: true, optional: false, required: false
  public get qosAdaptiveBandwidthUpstream() {
    return this.getNumberAttribute('qos_adaptive_bandwidth_upstream');
  }

  // qos_adaptive_bandwidth_upstream_variable - computed: true, optional: false, required: false
  public get qosAdaptiveBandwidthUpstreamVariable() {
    return this.getStringAttribute('qos_adaptive_bandwidth_upstream_variable');
  }

  // qos_adaptive_max_downstream - computed: true, optional: false, required: false
  public get qosAdaptiveMaxDownstream() {
    return this.getNumberAttribute('qos_adaptive_max_downstream');
  }

  // qos_adaptive_max_downstream_variable - computed: true, optional: false, required: false
  public get qosAdaptiveMaxDownstreamVariable() {
    return this.getStringAttribute('qos_adaptive_max_downstream_variable');
  }

  // qos_adaptive_max_upstream - computed: true, optional: false, required: false
  public get qosAdaptiveMaxUpstream() {
    return this.getNumberAttribute('qos_adaptive_max_upstream');
  }

  // qos_adaptive_max_upstream_variable - computed: true, optional: false, required: false
  public get qosAdaptiveMaxUpstreamVariable() {
    return this.getStringAttribute('qos_adaptive_max_upstream_variable');
  }

  // qos_adaptive_min_downstream - computed: true, optional: false, required: false
  public get qosAdaptiveMinDownstream() {
    return this.getNumberAttribute('qos_adaptive_min_downstream');
  }

  // qos_adaptive_min_downstream_variable - computed: true, optional: false, required: false
  public get qosAdaptiveMinDownstreamVariable() {
    return this.getStringAttribute('qos_adaptive_min_downstream_variable');
  }

  // qos_adaptive_min_upstream - computed: true, optional: false, required: false
  public get qosAdaptiveMinUpstream() {
    return this.getNumberAttribute('qos_adaptive_min_upstream');
  }

  // qos_adaptive_min_upstream_variable - computed: true, optional: false, required: false
  public get qosAdaptiveMinUpstreamVariable() {
    return this.getStringAttribute('qos_adaptive_min_upstream_variable');
  }

  // qos_adaptive_period - computed: true, optional: false, required: false
  public get qosAdaptivePeriod() {
    return this.getNumberAttribute('qos_adaptive_period');
  }

  // qos_adaptive_period_variable - computed: true, optional: false, required: false
  public get qosAdaptivePeriodVariable() {
    return this.getStringAttribute('qos_adaptive_period_variable');
  }

  // qos_map - computed: true, optional: false, required: false
  public get qosMap() {
    return this.getStringAttribute('qos_map');
  }

  // qos_map_variable - computed: true, optional: false, required: false
  public get qosMapVariable() {
    return this.getStringAttribute('qos_map_variable');
  }

  // qos_map_vpn - computed: true, optional: false, required: false
  public get qosMapVpn() {
    return this.getStringAttribute('qos_map_vpn');
  }

  // qos_map_vpn_variable - computed: true, optional: false, required: false
  public get qosMapVpnVariable() {
    return this.getStringAttribute('qos_map_vpn_variable');
  }

  // secondary_region - computed: true, optional: false, required: false
  public get secondaryRegion() {
    return this.getStringAttribute('secondary_region');
  }

  // secondary_region_variable - computed: true, optional: false, required: false
  public get secondaryRegionVariable() {
    return this.getStringAttribute('secondary_region_variable');
  }

  // shaping_rate - computed: true, optional: false, required: false
  public get shapingRate() {
    return this.getNumberAttribute('shaping_rate');
  }

  // shaping_rate_variable - computed: true, optional: false, required: false
  public get shapingRateVariable() {
    return this.getStringAttribute('shaping_rate_variable');
  }

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }

  // shutdown_variable - computed: true, optional: false, required: false
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // tloc_extension - computed: true, optional: false, required: false
  public get tlocExtension() {
    return this.getStringAttribute('tloc_extension');
  }

  // tloc_extension_variable - computed: true, optional: false, required: false
  public get tlocExtensionVariable() {
    return this.getStringAttribute('tloc_extension_variable');
  }

  // tracker - computed: true, optional: false, required: false
  public get tracker() {
    return cdktf.Fn.tolist(this.getListAttribute('tracker'));
  }

  // tracker_variable - computed: true, optional: false, required: false
  public get trackerVariable() {
    return this.getStringAttribute('tracker_variable');
  }

  // tunnel_interface_allow_all - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowAll() {
    return this.getBooleanAttribute('tunnel_interface_allow_all');
  }

  // tunnel_interface_allow_all_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowAllVariable() {
    return this.getStringAttribute('tunnel_interface_allow_all_variable');
  }

  // tunnel_interface_allow_bgp - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowBgp() {
    return this.getBooleanAttribute('tunnel_interface_allow_bgp');
  }

  // tunnel_interface_allow_bgp_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowBgpVariable() {
    return this.getStringAttribute('tunnel_interface_allow_bgp_variable');
  }

  // tunnel_interface_allow_dhcp - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowDhcp() {
    return this.getBooleanAttribute('tunnel_interface_allow_dhcp');
  }

  // tunnel_interface_allow_dhcp_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowDhcpVariable() {
    return this.getStringAttribute('tunnel_interface_allow_dhcp_variable');
  }

  // tunnel_interface_allow_dns - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowDns() {
    return this.getBooleanAttribute('tunnel_interface_allow_dns');
  }

  // tunnel_interface_allow_dns_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowDnsVariable() {
    return this.getStringAttribute('tunnel_interface_allow_dns_variable');
  }

  // tunnel_interface_allow_https - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowHttps() {
    return this.getBooleanAttribute('tunnel_interface_allow_https');
  }

  // tunnel_interface_allow_https_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowHttpsVariable() {
    return this.getStringAttribute('tunnel_interface_allow_https_variable');
  }

  // tunnel_interface_allow_icmp - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowIcmp() {
    return this.getBooleanAttribute('tunnel_interface_allow_icmp');
  }

  // tunnel_interface_allow_icmp_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowIcmpVariable() {
    return this.getStringAttribute('tunnel_interface_allow_icmp_variable');
  }

  // tunnel_interface_allow_netconf - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowNetconf() {
    return this.getBooleanAttribute('tunnel_interface_allow_netconf');
  }

  // tunnel_interface_allow_netconf_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowNetconfVariable() {
    return this.getStringAttribute('tunnel_interface_allow_netconf_variable');
  }

  // tunnel_interface_allow_ntp - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowNtp() {
    return this.getBooleanAttribute('tunnel_interface_allow_ntp');
  }

  // tunnel_interface_allow_ntp_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowNtpVariable() {
    return this.getStringAttribute('tunnel_interface_allow_ntp_variable');
  }

  // tunnel_interface_allow_ospf - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowOspf() {
    return this.getBooleanAttribute('tunnel_interface_allow_ospf');
  }

  // tunnel_interface_allow_ospf_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowOspfVariable() {
    return this.getStringAttribute('tunnel_interface_allow_ospf_variable');
  }

  // tunnel_interface_allow_snmp - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowSnmp() {
    return this.getBooleanAttribute('tunnel_interface_allow_snmp');
  }

  // tunnel_interface_allow_snmp_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowSnmpVariable() {
    return this.getStringAttribute('tunnel_interface_allow_snmp_variable');
  }

  // tunnel_interface_allow_ssh - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowSsh() {
    return this.getBooleanAttribute('tunnel_interface_allow_ssh');
  }

  // tunnel_interface_allow_ssh_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowSshVariable() {
    return this.getStringAttribute('tunnel_interface_allow_ssh_variable');
  }

  // tunnel_interface_allow_stun - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowStun() {
    return this.getBooleanAttribute('tunnel_interface_allow_stun');
  }

  // tunnel_interface_allow_stun_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceAllowStunVariable() {
    return this.getStringAttribute('tunnel_interface_allow_stun_variable');
  }

  // tunnel_interface_bind_loopback_tunnel - computed: true, optional: false, required: false
  public get tunnelInterfaceBindLoopbackTunnel() {
    return this.getStringAttribute('tunnel_interface_bind_loopback_tunnel');
  }

  // tunnel_interface_bind_loopback_tunnel_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceBindLoopbackTunnelVariable() {
    return this.getStringAttribute('tunnel_interface_bind_loopback_tunnel_variable');
  }

  // tunnel_interface_border - computed: true, optional: false, required: false
  public get tunnelInterfaceBorder() {
    return this.getBooleanAttribute('tunnel_interface_border');
  }

  // tunnel_interface_border_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceBorderVariable() {
    return this.getStringAttribute('tunnel_interface_border_variable');
  }

  // tunnel_interface_carrier - computed: true, optional: false, required: false
  public get tunnelInterfaceCarrier() {
    return this.getStringAttribute('tunnel_interface_carrier');
  }

  // tunnel_interface_carrier_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceCarrierVariable() {
    return this.getStringAttribute('tunnel_interface_carrier_variable');
  }

  // tunnel_interface_clear_dont_fragment - computed: true, optional: false, required: false
  public get tunnelInterfaceClearDontFragment() {
    return this.getBooleanAttribute('tunnel_interface_clear_dont_fragment');
  }

  // tunnel_interface_clear_dont_fragment_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceClearDontFragmentVariable() {
    return this.getStringAttribute('tunnel_interface_clear_dont_fragment_variable');
  }

  // tunnel_interface_color - computed: true, optional: false, required: false
  public get tunnelInterfaceColor() {
    return this.getStringAttribute('tunnel_interface_color');
  }

  // tunnel_interface_color_restrict - computed: true, optional: false, required: false
  public get tunnelInterfaceColorRestrict() {
    return this.getBooleanAttribute('tunnel_interface_color_restrict');
  }

  // tunnel_interface_color_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceColorVariable() {
    return this.getStringAttribute('tunnel_interface_color_variable');
  }

  // tunnel_interface_control_connections - computed: true, optional: false, required: false
  public get tunnelInterfaceControlConnections() {
    return this.getBooleanAttribute('tunnel_interface_control_connections');
  }

  // tunnel_interface_control_connections_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceControlConnectionsVariable() {
    return this.getStringAttribute('tunnel_interface_control_connections_variable');
  }

  // tunnel_interface_encapsulations - computed: true, optional: false, required: false
  private _tunnelInterfaceEncapsulations = new DataSdwanVpnInterfaceEthernetPppoeFeatureTemplateTunnelInterfaceEncapsulationsList(this, "tunnel_interface_encapsulations", false);
  public get tunnelInterfaceEncapsulations() {
    return this._tunnelInterfaceEncapsulations;
  }

  // tunnel_interface_exclude_controller_group_list - computed: true, optional: false, required: false
  public get tunnelInterfaceExcludeControllerGroupList() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tunnel_interface_exclude_controller_group_list')));
  }

  // tunnel_interface_exclude_controller_group_list_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceExcludeControllerGroupListVariable() {
    return this.getStringAttribute('tunnel_interface_exclude_controller_group_list_variable');
  }

  // tunnel_interface_groups - computed: true, optional: false, required: false
  public get tunnelInterfaceGroups() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tunnel_interface_groups')));
  }

  // tunnel_interface_groups_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceGroupsVariable() {
    return this.getStringAttribute('tunnel_interface_groups_variable');
  }

  // tunnel_interface_hello_interval - computed: true, optional: false, required: false
  public get tunnelInterfaceHelloInterval() {
    return this.getNumberAttribute('tunnel_interface_hello_interval');
  }

  // tunnel_interface_hello_interval_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceHelloIntervalVariable() {
    return this.getStringAttribute('tunnel_interface_hello_interval_variable');
  }

  // tunnel_interface_hello_tolerance - computed: true, optional: false, required: false
  public get tunnelInterfaceHelloTolerance() {
    return this.getNumberAttribute('tunnel_interface_hello_tolerance');
  }

  // tunnel_interface_hello_tolerance_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceHelloToleranceVariable() {
    return this.getStringAttribute('tunnel_interface_hello_tolerance_variable');
  }

  // tunnel_interface_last_resort_circuit - computed: true, optional: false, required: false
  public get tunnelInterfaceLastResortCircuit() {
    return this.getBooleanAttribute('tunnel_interface_last_resort_circuit');
  }

  // tunnel_interface_last_resort_circuit_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceLastResortCircuitVariable() {
    return this.getStringAttribute('tunnel_interface_last_resort_circuit_variable');
  }

  // tunnel_interface_low_bandwidth_link - computed: true, optional: false, required: false
  public get tunnelInterfaceLowBandwidthLink() {
    return this.getBooleanAttribute('tunnel_interface_low_bandwidth_link');
  }

  // tunnel_interface_low_bandwidth_link_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceLowBandwidthLinkVariable() {
    return this.getStringAttribute('tunnel_interface_low_bandwidth_link_variable');
  }

  // tunnel_interface_max_control_connections - computed: true, optional: false, required: false
  public get tunnelInterfaceMaxControlConnections() {
    return this.getNumberAttribute('tunnel_interface_max_control_connections');
  }

  // tunnel_interface_max_control_connections_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceMaxControlConnectionsVariable() {
    return this.getStringAttribute('tunnel_interface_max_control_connections_variable');
  }

  // tunnel_interface_nat_refresh_interval - computed: true, optional: false, required: false
  public get tunnelInterfaceNatRefreshInterval() {
    return this.getNumberAttribute('tunnel_interface_nat_refresh_interval');
  }

  // tunnel_interface_nat_refresh_interval_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceNatRefreshIntervalVariable() {
    return this.getStringAttribute('tunnel_interface_nat_refresh_interval_variable');
  }

  // tunnel_interface_network_broadcast - computed: true, optional: false, required: false
  public get tunnelInterfaceNetworkBroadcast() {
    return this.getBooleanAttribute('tunnel_interface_network_broadcast');
  }

  // tunnel_interface_network_broadcast_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceNetworkBroadcastVariable() {
    return this.getStringAttribute('tunnel_interface_network_broadcast_variable');
  }

  // tunnel_interface_port_hop - computed: true, optional: false, required: false
  public get tunnelInterfacePortHop() {
    return this.getBooleanAttribute('tunnel_interface_port_hop');
  }

  // tunnel_interface_port_hop_variable - computed: true, optional: false, required: false
  public get tunnelInterfacePortHopVariable() {
    return this.getStringAttribute('tunnel_interface_port_hop_variable');
  }

  // tunnel_interface_tunnel_tcp_mss - computed: true, optional: false, required: false
  public get tunnelInterfaceTunnelTcpMss() {
    return this.getNumberAttribute('tunnel_interface_tunnel_tcp_mss');
  }

  // tunnel_interface_tunnel_tcp_mss_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceTunnelTcpMssVariable() {
    return this.getStringAttribute('tunnel_interface_tunnel_tcp_mss_variable');
  }

  // tunnel_interface_vbond_as_stun_server - computed: true, optional: false, required: false
  public get tunnelInterfaceVbondAsStunServer() {
    return this.getBooleanAttribute('tunnel_interface_vbond_as_stun_server');
  }

  // tunnel_interface_vbond_as_stun_server_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceVbondAsStunServerVariable() {
    return this.getStringAttribute('tunnel_interface_vbond_as_stun_server_variable');
  }

  // tunnel_interface_vmanage_connection_preference - computed: true, optional: false, required: false
  public get tunnelInterfaceVmanageConnectionPreference() {
    return this.getNumberAttribute('tunnel_interface_vmanage_connection_preference');
  }

  // tunnel_interface_vmanage_connection_preference_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceVmanageConnectionPreferenceVariable() {
    return this.getStringAttribute('tunnel_interface_vmanage_connection_preference_variable');
  }

  // tunnel_qos_mode - computed: true, optional: false, required: false
  public get tunnelQosMode() {
    return this.getStringAttribute('tunnel_qos_mode');
  }

  // tunnel_qos_mode_variable - computed: true, optional: false, required: false
  public get tunnelQosModeVariable() {
    return this.getStringAttribute('tunnel_qos_mode_variable');
  }

  // unnumbered_loopback_interface - computed: true, optional: false, required: false
  public get unnumberedLoopbackInterface() {
    return this.getStringAttribute('unnumbered_loopback_interface');
  }

  // unnumbered_loopback_interface_variable - computed: true, optional: false, required: false
  public get unnumberedLoopbackInterfaceVariable() {
    return this.getStringAttribute('unnumbered_loopback_interface_variable');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // write_rule - computed: true, optional: false, required: false
  public get writeRule() {
    return this.getStringAttribute('write_rule');
  }

  // write_rule_variable - computed: true, optional: false, required: false
  public get writeRuleVariable() {
    return this.getStringAttribute('write_rule_variable');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
