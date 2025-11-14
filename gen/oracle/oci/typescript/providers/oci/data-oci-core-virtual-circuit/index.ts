// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/core_virtual_circuit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreVirtualCircuitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/core_virtual_circuit#virtual_circuit_id DataOciCoreVirtualCircuit#virtual_circuit_id}
  */
  readonly virtualCircuitId: string;
}
export interface DataOciCoreVirtualCircuitCrossConnectMappings {
}

export function dataOciCoreVirtualCircuitCrossConnectMappingsToTerraform(struct?: DataOciCoreVirtualCircuitCrossConnectMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreVirtualCircuitCrossConnectMappingsToHclTerraform(struct?: DataOciCoreVirtualCircuitCrossConnectMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreVirtualCircuitCrossConnectMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreVirtualCircuitCrossConnectMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bgp_md5auth_key - computed: true, optional: false, required: false
  public get bgpMd5AuthKey() {
    return this.getStringAttribute('bgp_md5auth_key');
  }

  // cross_connect_or_cross_connect_group_id - computed: true, optional: false, required: false
  public get crossConnectOrCrossConnectGroupId() {
    return this.getStringAttribute('cross_connect_or_cross_connect_group_id');
  }

  // customer_bgp_peering_ip - computed: true, optional: false, required: false
  public get customerBgpPeeringIp() {
    return this.getStringAttribute('customer_bgp_peering_ip');
  }

  // customer_bgp_peering_ipv6 - computed: true, optional: false, required: false
  public get customerBgpPeeringIpv6() {
    return this.getStringAttribute('customer_bgp_peering_ipv6');
  }

  // oracle_bgp_peering_ip - computed: true, optional: false, required: false
  public get oracleBgpPeeringIp() {
    return this.getStringAttribute('oracle_bgp_peering_ip');
  }

  // oracle_bgp_peering_ipv6 - computed: true, optional: false, required: false
  public get oracleBgpPeeringIpv6() {
    return this.getStringAttribute('oracle_bgp_peering_ipv6');
  }

  // vlan - computed: true, optional: false, required: false
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
}

export class DataOciCoreVirtualCircuitCrossConnectMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference {
    return new DataOciCoreVirtualCircuitCrossConnectMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreVirtualCircuitPublicPrefixes {
}

export function dataOciCoreVirtualCircuitPublicPrefixesToTerraform(struct?: DataOciCoreVirtualCircuitPublicPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreVirtualCircuitPublicPrefixesToHclTerraform(struct?: DataOciCoreVirtualCircuitPublicPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreVirtualCircuitPublicPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreVirtualCircuitPublicPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreVirtualCircuitPublicPrefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
}

export class DataOciCoreVirtualCircuitPublicPrefixesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreVirtualCircuitPublicPrefixesOutputReference {
    return new DataOciCoreVirtualCircuitPublicPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadata {
}

export function dataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataToTerraform(struct?: DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataToHclTerraform(struct?: DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configured_redundancy_level - computed: true, optional: false, required: false
  public get configuredRedundancyLevel() {
    return this.getStringAttribute('configured_redundancy_level');
  }

  // ipv4bgp_session_redundancy_status - computed: true, optional: false, required: false
  public get ipv4BgpSessionRedundancyStatus() {
    return this.getStringAttribute('ipv4bgp_session_redundancy_status');
  }

  // ipv6bgp_session_redundancy_status - computed: true, optional: false, required: false
  public get ipv6BgpSessionRedundancyStatus() {
    return this.getStringAttribute('ipv6bgp_session_redundancy_status');
  }
}

export class DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference {
    return new DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/core_virtual_circuit oci_core_virtual_circuit}
*/
export class DataOciCoreVirtualCircuit extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_virtual_circuit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreVirtualCircuit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreVirtualCircuit to import
  * @param importFromId The id of the existing DataOciCoreVirtualCircuit that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/core_virtual_circuit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreVirtualCircuit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_virtual_circuit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/core_virtual_circuit oci_core_virtual_circuit} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreVirtualCircuitConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreVirtualCircuitConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_virtual_circuit',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._virtualCircuitId = config.virtualCircuitId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_shape_name - computed: true, optional: false, required: false
  public get bandwidthShapeName() {
    return this.getStringAttribute('bandwidth_shape_name');
  }

  // bgp_admin_state - computed: true, optional: false, required: false
  public get bgpAdminState() {
    return this.getStringAttribute('bgp_admin_state');
  }

  // bgp_ipv6session_state - computed: true, optional: false, required: false
  public get bgpIpv6SessionState() {
    return this.getStringAttribute('bgp_ipv6session_state');
  }

  // bgp_management - computed: true, optional: false, required: false
  public get bgpManagement() {
    return this.getStringAttribute('bgp_management');
  }

  // bgp_session_state - computed: true, optional: false, required: false
  public get bgpSessionState() {
    return this.getStringAttribute('bgp_session_state');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // cross_connect_mappings - computed: true, optional: false, required: false
  private _crossConnectMappings = new DataOciCoreVirtualCircuitCrossConnectMappingsList(this, "cross_connect_mappings", false);
  public get crossConnectMappings() {
    return this._crossConnectMappings;
  }

  // customer_asn - computed: true, optional: false, required: false
  public get customerAsn() {
    return this.getStringAttribute('customer_asn');
  }

  // customer_bgp_asn - computed: true, optional: false, required: false
  public get customerBgpAsn() {
    return this.getNumberAttribute('customer_bgp_asn');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_mtu - computed: true, optional: false, required: false
  public get ipMtu() {
    return this.getStringAttribute('ip_mtu');
  }

  // is_bfd_enabled - computed: true, optional: false, required: false
  public get isBfdEnabled() {
    return this.getBooleanAttribute('is_bfd_enabled');
  }

  // is_transport_mode - computed: true, optional: false, required: false
  public get isTransportMode() {
    return this.getBooleanAttribute('is_transport_mode');
  }

  // oracle_bgp_asn - computed: true, optional: false, required: false
  public get oracleBgpAsn() {
    return this.getNumberAttribute('oracle_bgp_asn');
  }

  // provider_service_id - computed: true, optional: false, required: false
  public get providerServiceId() {
    return this.getStringAttribute('provider_service_id');
  }

  // provider_service_key_name - computed: true, optional: false, required: false
  public get providerServiceKeyName() {
    return this.getStringAttribute('provider_service_key_name');
  }

  // provider_state - computed: true, optional: false, required: false
  public get providerState() {
    return this.getStringAttribute('provider_state');
  }

  // public_prefixes - computed: true, optional: false, required: false
  private _publicPrefixes = new DataOciCoreVirtualCircuitPublicPrefixesList(this, "public_prefixes", false);
  public get publicPrefixes() {
    return this._publicPrefixes;
  }

  // reference_comment - computed: true, optional: false, required: false
  public get referenceComment() {
    return this.getStringAttribute('reference_comment');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // routing_policy - computed: true, optional: false, required: false
  public get routingPolicy() {
    return this.getListAttribute('routing_policy');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // virtual_circuit_id - computed: false, optional: false, required: true
  private _virtualCircuitId?: string; 
  public get virtualCircuitId() {
    return this.getStringAttribute('virtual_circuit_id');
  }
  public set virtualCircuitId(value: string) {
    this._virtualCircuitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualCircuitIdInput() {
    return this._virtualCircuitId;
  }

  // virtual_circuit_redundancy_metadata - computed: true, optional: false, required: false
  private _virtualCircuitRedundancyMetadata = new DataOciCoreVirtualCircuitVirtualCircuitRedundancyMetadataList(this, "virtual_circuit_redundancy_metadata", false);
  public get virtualCircuitRedundancyMetadata() {
    return this._virtualCircuitRedundancyMetadata;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      virtual_circuit_id: cdktf.stringToTerraform(this._virtualCircuitId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      virtual_circuit_id: {
        value: cdktf.stringToHclTerraform(this._virtualCircuitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
