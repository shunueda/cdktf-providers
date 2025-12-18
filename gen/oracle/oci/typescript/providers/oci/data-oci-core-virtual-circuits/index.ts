// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_virtual_circuits
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreVirtualCircuitsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_virtual_circuits#compartment_id DataOciCoreVirtualCircuits#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_virtual_circuits#display_name DataOciCoreVirtualCircuits#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_virtual_circuits#id DataOciCoreVirtualCircuits#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_virtual_circuits#state DataOciCoreVirtualCircuits#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_virtual_circuits#filter DataOciCoreVirtualCircuits#filter}
  */
  readonly filter?: DataOciCoreVirtualCircuitsFilter[] | cdktf.IResolvable;
}
export interface DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings {
}

export function dataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsToTerraform(struct?: DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsToHclTerraform(struct?: DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings | undefined) {
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

export class DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference {
    return new DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes {
}

export function dataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesToTerraform(struct?: DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesToHclTerraform(struct?: DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes | undefined) {
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

export class DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference {
    return new DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata {
}

export function dataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataToTerraform(struct?: DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataToHclTerraform(struct?: DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata | undefined) {
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

export class DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference {
    return new DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreVirtualCircuitsVirtualCircuits {
}

export function dataOciCoreVirtualCircuitsVirtualCircuitsToTerraform(struct?: DataOciCoreVirtualCircuitsVirtualCircuits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreVirtualCircuitsVirtualCircuitsToHclTerraform(struct?: DataOciCoreVirtualCircuitsVirtualCircuits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreVirtualCircuitsVirtualCircuits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreVirtualCircuitsVirtualCircuits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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
  private _crossConnectMappings = new DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList(this, "cross_connect_mappings", false);
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
  private _publicPrefixes = new DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList(this, "public_prefixes", false);
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

  // virtual_circuit_id - computed: true, optional: false, required: false
  public get virtualCircuitId() {
    return this.getStringAttribute('virtual_circuit_id');
  }

  // virtual_circuit_redundancy_metadata - computed: true, optional: false, required: false
  private _virtualCircuitRedundancyMetadata = new DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList(this, "virtual_circuit_redundancy_metadata", false);
  public get virtualCircuitRedundancyMetadata() {
    return this._virtualCircuitRedundancyMetadata;
  }
}

export class DataOciCoreVirtualCircuitsVirtualCircuitsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference {
    return new DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreVirtualCircuitsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_virtual_circuits#name DataOciCoreVirtualCircuits#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_virtual_circuits#regex DataOciCoreVirtualCircuits#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_virtual_circuits#values DataOciCoreVirtualCircuits#values}
  */
  readonly values: string[];
}

export function dataOciCoreVirtualCircuitsFilterToTerraform(struct?: DataOciCoreVirtualCircuitsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciCoreVirtualCircuitsFilterToHclTerraform(struct?: DataOciCoreVirtualCircuitsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciCoreVirtualCircuitsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreVirtualCircuitsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreVirtualCircuitsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciCoreVirtualCircuitsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciCoreVirtualCircuitsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciCoreVirtualCircuitsFilterOutputReference {
    return new DataOciCoreVirtualCircuitsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_virtual_circuits oci_core_virtual_circuits}
*/
export class DataOciCoreVirtualCircuits extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_virtual_circuits";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreVirtualCircuits resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreVirtualCircuits to import
  * @param importFromId The id of the existing DataOciCoreVirtualCircuits that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_virtual_circuits#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreVirtualCircuits to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_virtual_circuits", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_virtual_circuits oci_core_virtual_circuits} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreVirtualCircuitsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreVirtualCircuitsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_virtual_circuits',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // virtual_circuits - computed: true, optional: false, required: false
  private _virtualCircuits = new DataOciCoreVirtualCircuitsVirtualCircuitsList(this, "virtual_circuits", false);
  public get virtualCircuits() {
    return this._virtualCircuits;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciCoreVirtualCircuitsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciCoreVirtualCircuitsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciCoreVirtualCircuitsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciCoreVirtualCircuitsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciCoreVirtualCircuitsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
