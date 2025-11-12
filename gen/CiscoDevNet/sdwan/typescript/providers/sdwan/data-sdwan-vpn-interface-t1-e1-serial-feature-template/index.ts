// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/vpn_interface_t1_e1_serial_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanVpnInterfaceT1E1SerialFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/vpn_interface_t1_e1_serial_feature_template#id DataSdwanVpnInterfaceT1E1SerialFeatureTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/vpn_interface_t1_e1_serial_feature_template#name DataSdwanVpnInterfaceT1E1SerialFeatureTemplate#name}
  */
  readonly name?: string;
}
export interface DataSdwanVpnInterfaceT1E1SerialFeatureTemplateIpv4AccessLists {
}

export function dataSdwanVpnInterfaceT1E1SerialFeatureTemplateIpv4AccessListsToTerraform(struct?: DataSdwanVpnInterfaceT1E1SerialFeatureTemplateIpv4AccessLists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanVpnInterfaceT1E1SerialFeatureTemplateIpv4AccessListsToHclTerraform(struct?: DataSdwanVpnInterfaceT1E1SerialFeatureTemplateIpv4AccessLists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanVpnInterfaceT1E1SerialFeatureTemplateIpv4AccessListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanVpnInterfaceT1E1SerialFeatureTemplateIpv4AccessLists | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanVpnInterfaceT1E1SerialFeatureTemplateIpv4AccessLists | undefined) {
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

export class DataSdwanVpnInterfaceT1E1SerialFeatureTemplateIpv4AccessListsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanVpnInterfaceT1E1SerialFeatureTemplateIpv4AccessListsOutputReference {
    return new DataSdwanVpnInterfaceT1E1SerialFeatureTemplateIpv4AccessListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanVpnInterfaceT1E1SerialFeatureTemplateIpv6AccessLists {
}

export function dataSdwanVpnInterfaceT1E1SerialFeatureTemplateIpv6AccessListsToTerraform(struct?: DataSdwanVpnInterfaceT1E1SerialFeatureTemplateIpv6AccessLists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanVpnInterfaceT1E1SerialFeatureTemplateIpv6AccessListsToHclTerraform(struct?: DataSdwanVpnInterfaceT1E1SerialFeatureTemplateIpv6AccessLists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanVpnInterfaceT1E1SerialFeatureTemplateIpv6AccessListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanVpnInterfaceT1E1SerialFeatureTemplateIpv6AccessLists | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanVpnInterfaceT1E1SerialFeatureTemplateIpv6AccessLists | undefined) {
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

export class DataSdwanVpnInterfaceT1E1SerialFeatureTemplateIpv6AccessListsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanVpnInterfaceT1E1SerialFeatureTemplateIpv6AccessListsOutputReference {
    return new DataSdwanVpnInterfaceT1E1SerialFeatureTemplateIpv6AccessListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanVpnInterfaceT1E1SerialFeatureTemplateTunnelInterfaceEncapsulations {
}

export function dataSdwanVpnInterfaceT1E1SerialFeatureTemplateTunnelInterfaceEncapsulationsToTerraform(struct?: DataSdwanVpnInterfaceT1E1SerialFeatureTemplateTunnelInterfaceEncapsulations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanVpnInterfaceT1E1SerialFeatureTemplateTunnelInterfaceEncapsulationsToHclTerraform(struct?: DataSdwanVpnInterfaceT1E1SerialFeatureTemplateTunnelInterfaceEncapsulations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanVpnInterfaceT1E1SerialFeatureTemplateTunnelInterfaceEncapsulationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanVpnInterfaceT1E1SerialFeatureTemplateTunnelInterfaceEncapsulations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanVpnInterfaceT1E1SerialFeatureTemplateTunnelInterfaceEncapsulations | undefined) {
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

export class DataSdwanVpnInterfaceT1E1SerialFeatureTemplateTunnelInterfaceEncapsulationsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanVpnInterfaceT1E1SerialFeatureTemplateTunnelInterfaceEncapsulationsOutputReference {
    return new DataSdwanVpnInterfaceT1E1SerialFeatureTemplateTunnelInterfaceEncapsulationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/vpn_interface_t1_e1_serial_feature_template sdwan_vpn_interface_t1_e1_serial_feature_template}
*/
export class DataSdwanVpnInterfaceT1E1SerialFeatureTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_vpn_interface_t1_e1_serial_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanVpnInterfaceT1E1SerialFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanVpnInterfaceT1E1SerialFeatureTemplate to import
  * @param importFromId The id of the existing DataSdwanVpnInterfaceT1E1SerialFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/vpn_interface_t1_e1_serial_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanVpnInterfaceT1E1SerialFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_vpn_interface_t1_e1_serial_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/vpn_interface_t1_e1_serial_feature_template sdwan_vpn_interface_t1_e1_serial_feature_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanVpnInterfaceT1E1SerialFeatureTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSdwanVpnInterfaceT1E1SerialFeatureTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdwan_vpn_interface_t1_e1_serial_feature_template',
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

  // autonegotiate - computed: true, optional: false, required: false
  public get autonegotiate() {
    return this.getBooleanAttribute('autonegotiate');
  }

  // autonegotiate_variable - computed: true, optional: false, required: false
  public get autonegotiateVariable() {
    return this.getStringAttribute('autonegotiate_variable');
  }

  // clear_dont_fragment_bit - computed: true, optional: false, required: false
  public get clearDontFragmentBit() {
    return this.getBooleanAttribute('clear_dont_fragment_bit');
  }

  // clear_dont_fragment_bit_variable - computed: true, optional: false, required: false
  public get clearDontFragmentBitVariable() {
    return this.getStringAttribute('clear_dont_fragment_bit_variable');
  }

  // clock_rate - computed: true, optional: false, required: false
  public get clockRate() {
    return this.getStringAttribute('clock_rate');
  }

  // clock_rate_variable - computed: true, optional: false, required: false
  public get clockRateVariable() {
    return this.getStringAttribute('clock_rate_variable');
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

  // enable_core_region - computed: true, optional: false, required: false
  public get enableCoreRegion() {
    return this.getBooleanAttribute('enable_core_region');
  }

  // enable_core_region_variable - computed: true, optional: false, required: false
  public get enableCoreRegionVariable() {
    return this.getStringAttribute('enable_core_region_variable');
  }

  // encapsulation - computed: true, optional: false, required: false
  public get encapsulation() {
    return this.getStringAttribute('encapsulation');
  }

  // encapsulation_variable - computed: true, optional: false, required: false
  public get encapsulationVariable() {
    return this.getStringAttribute('encapsulation_variable');
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

  // interface_bandwidth_capacity - computed: true, optional: false, required: false
  public get interfaceBandwidthCapacity() {
    return this.getNumberAttribute('interface_bandwidth_capacity');
  }

  // interface_bandwidth_capacity_variable - computed: true, optional: false, required: false
  public get interfaceBandwidthCapacityVariable() {
    return this.getStringAttribute('interface_bandwidth_capacity_variable');
  }

  // interface_description - computed: true, optional: false, required: false
  public get interfaceDescription() {
    return this.getStringAttribute('interface_description');
  }

  // interface_description_variable - computed: true, optional: false, required: false
  public get interfaceDescriptionVariable() {
    return this.getStringAttribute('interface_description_variable');
  }

  // interface_downstream_bandwidth_capacity - computed: true, optional: false, required: false
  public get interfaceDownstreamBandwidthCapacity() {
    return this.getNumberAttribute('interface_downstream_bandwidth_capacity');
  }

  // interface_downstream_bandwidth_capacity_variable - computed: true, optional: false, required: false
  public get interfaceDownstreamBandwidthCapacityVariable() {
    return this.getStringAttribute('interface_downstream_bandwidth_capacity_variable');
  }

  // ip_mtu - computed: true, optional: false, required: false
  public get ipMtu() {
    return this.getNumberAttribute('ip_mtu');
  }

  // ip_mtu_variable - computed: true, optional: false, required: false
  public get ipMtuVariable() {
    return this.getStringAttribute('ip_mtu_variable');
  }

  // ipv4_access_lists - computed: true, optional: false, required: false
  private _ipv4AccessLists = new DataSdwanVpnInterfaceT1E1SerialFeatureTemplateIpv4AccessListsList(this, "ipv4_access_lists", false);
  public get ipv4AccessLists() {
    return this._ipv4AccessLists;
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_address_variable - computed: true, optional: false, required: false
  public get ipv4AddressVariable() {
    return this.getStringAttribute('ipv4_address_variable');
  }

  // ipv6_access_lists - computed: true, optional: false, required: false
  private _ipv6AccessLists = new DataSdwanVpnInterfaceT1E1SerialFeatureTemplateIpv6AccessListsList(this, "ipv6_access_lists", false);
  public get ipv6AccessLists() {
    return this._ipv6AccessLists;
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // ipv6_address_variable - computed: true, optional: false, required: false
  public get ipv6AddressVariable() {
    return this.getStringAttribute('ipv6_address_variable');
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

  // pmtu_discovery - computed: true, optional: false, required: false
  public get pmtuDiscovery() {
    return this.getBooleanAttribute('pmtu_discovery');
  }

  // pmtu_discovery_variable - computed: true, optional: false, required: false
  public get pmtuDiscoveryVariable() {
    return this.getStringAttribute('pmtu_discovery_variable');
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

  // serial_interface_name - computed: true, optional: false, required: false
  public get serialInterfaceName() {
    return this.getStringAttribute('serial_interface_name');
  }

  // serial_interface_name_variable - computed: true, optional: false, required: false
  public get serialInterfaceNameVariable() {
    return this.getStringAttribute('serial_interface_name_variable');
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

  // static_ingress_qos - computed: true, optional: false, required: false
  public get staticIngressQos() {
    return this.getNumberAttribute('static_ingress_qos');
  }

  // static_ingress_qos_variable - computed: true, optional: false, required: false
  public get staticIngressQosVariable() {
    return this.getStringAttribute('static_ingress_qos_variable');
  }

  // tcp_mss - computed: true, optional: false, required: false
  public get tcpMss() {
    return this.getNumberAttribute('tcp_mss');
  }

  // tcp_mss_variable - computed: true, optional: false, required: false
  public get tcpMssVariable() {
    return this.getStringAttribute('tcp_mss_variable');
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

  // tunnel_interface_color_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceColorVariable() {
    return this.getStringAttribute('tunnel_interface_color_variable');
  }

  // tunnel_interface_control_connections - computed: true, optional: false, required: false
  public get tunnelInterfaceControlConnections() {
    return this.getNumberAttribute('tunnel_interface_control_connections');
  }

  // tunnel_interface_control_connections_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceControlConnectionsVariable() {
    return this.getStringAttribute('tunnel_interface_control_connections_variable');
  }

  // tunnel_interface_encapsulations - computed: true, optional: false, required: false
  private _tunnelInterfaceEncapsulations = new DataSdwanVpnInterfaceT1E1SerialFeatureTemplateTunnelInterfaceEncapsulationsList(this, "tunnel_interface_encapsulations", false);
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

  // tunnel_interface_restrict - computed: true, optional: false, required: false
  public get tunnelInterfaceRestrict() {
    return this.getBooleanAttribute('tunnel_interface_restrict');
  }

  // tunnel_interface_restrict_variable - computed: true, optional: false, required: false
  public get tunnelInterfaceRestrictVariable() {
    return this.getStringAttribute('tunnel_interface_restrict_variable');
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
