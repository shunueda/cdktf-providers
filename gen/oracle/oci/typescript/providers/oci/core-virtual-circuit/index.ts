// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoreVirtualCircuitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#bandwidth_shape_name CoreVirtualCircuit#bandwidth_shape_name}
  */
  readonly bandwidthShapeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#bgp_admin_state CoreVirtualCircuit#bgp_admin_state}
  */
  readonly bgpAdminState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#compartment_id CoreVirtualCircuit#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#customer_asn CoreVirtualCircuit#customer_asn}
  */
  readonly customerAsn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#customer_bgp_asn CoreVirtualCircuit#customer_bgp_asn}
  */
  readonly customerBgpAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#defined_tags CoreVirtualCircuit#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#display_name CoreVirtualCircuit#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#freeform_tags CoreVirtualCircuit#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#gateway_id CoreVirtualCircuit#gateway_id}
  */
  readonly gatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#id CoreVirtualCircuit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#ip_mtu CoreVirtualCircuit#ip_mtu}
  */
  readonly ipMtu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#is_bfd_enabled CoreVirtualCircuit#is_bfd_enabled}
  */
  readonly isBfdEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#is_transport_mode CoreVirtualCircuit#is_transport_mode}
  */
  readonly isTransportMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#provider_service_id CoreVirtualCircuit#provider_service_id}
  */
  readonly providerServiceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#provider_service_key_name CoreVirtualCircuit#provider_service_key_name}
  */
  readonly providerServiceKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#region CoreVirtualCircuit#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#routing_policy CoreVirtualCircuit#routing_policy}
  */
  readonly routingPolicy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#type CoreVirtualCircuit#type}
  */
  readonly type: string;
  /**
  * cross_connect_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#cross_connect_mappings CoreVirtualCircuit#cross_connect_mappings}
  */
  readonly crossConnectMappings?: CoreVirtualCircuitCrossConnectMappings[] | cdktf.IResolvable;
  /**
  * public_prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#public_prefixes CoreVirtualCircuit#public_prefixes}
  */
  readonly publicPrefixes?: CoreVirtualCircuitPublicPrefixes[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#timeouts CoreVirtualCircuit#timeouts}
  */
  readonly timeouts?: CoreVirtualCircuitTimeouts;
}
export interface CoreVirtualCircuitVirtualCircuitRedundancyMetadata {
}

export function coreVirtualCircuitVirtualCircuitRedundancyMetadataToTerraform(struct?: CoreVirtualCircuitVirtualCircuitRedundancyMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function coreVirtualCircuitVirtualCircuitRedundancyMetadataToHclTerraform(struct?: CoreVirtualCircuitVirtualCircuitRedundancyMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreVirtualCircuitVirtualCircuitRedundancyMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreVirtualCircuitVirtualCircuitRedundancyMetadata | undefined) {
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

export class CoreVirtualCircuitVirtualCircuitRedundancyMetadataList extends cdktf.ComplexList {

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
  public get(index: number): CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference {
    return new CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreVirtualCircuitCrossConnectMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#bgp_md5auth_key CoreVirtualCircuit#bgp_md5auth_key}
  */
  readonly bgpMd5AuthKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#cross_connect_or_cross_connect_group_id CoreVirtualCircuit#cross_connect_or_cross_connect_group_id}
  */
  readonly crossConnectOrCrossConnectGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#customer_bgp_peering_ip CoreVirtualCircuit#customer_bgp_peering_ip}
  */
  readonly customerBgpPeeringIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#customer_bgp_peering_ipv6 CoreVirtualCircuit#customer_bgp_peering_ipv6}
  */
  readonly customerBgpPeeringIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#oracle_bgp_peering_ip CoreVirtualCircuit#oracle_bgp_peering_ip}
  */
  readonly oracleBgpPeeringIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#oracle_bgp_peering_ipv6 CoreVirtualCircuit#oracle_bgp_peering_ipv6}
  */
  readonly oracleBgpPeeringIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#vlan CoreVirtualCircuit#vlan}
  */
  readonly vlan?: number;
}

export function coreVirtualCircuitCrossConnectMappingsToTerraform(struct?: CoreVirtualCircuitCrossConnectMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp_md5auth_key: cdktf.stringToTerraform(struct!.bgpMd5AuthKey),
    cross_connect_or_cross_connect_group_id: cdktf.stringToTerraform(struct!.crossConnectOrCrossConnectGroupId),
    customer_bgp_peering_ip: cdktf.stringToTerraform(struct!.customerBgpPeeringIp),
    customer_bgp_peering_ipv6: cdktf.stringToTerraform(struct!.customerBgpPeeringIpv6),
    oracle_bgp_peering_ip: cdktf.stringToTerraform(struct!.oracleBgpPeeringIp),
    oracle_bgp_peering_ipv6: cdktf.stringToTerraform(struct!.oracleBgpPeeringIpv6),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function coreVirtualCircuitCrossConnectMappingsToHclTerraform(struct?: CoreVirtualCircuitCrossConnectMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp_md5auth_key: {
      value: cdktf.stringToHclTerraform(struct!.bgpMd5AuthKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_connect_or_cross_connect_group_id: {
      value: cdktf.stringToHclTerraform(struct!.crossConnectOrCrossConnectGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_bgp_peering_ip: {
      value: cdktf.stringToHclTerraform(struct!.customerBgpPeeringIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_bgp_peering_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.customerBgpPeeringIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oracle_bgp_peering_ip: {
      value: cdktf.stringToHclTerraform(struct!.oracleBgpPeeringIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oracle_bgp_peering_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.oracleBgpPeeringIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreVirtualCircuitCrossConnectMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreVirtualCircuitCrossConnectMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpMd5AuthKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpMd5AuthKey = this._bgpMd5AuthKey;
    }
    if (this._crossConnectOrCrossConnectGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossConnectOrCrossConnectGroupId = this._crossConnectOrCrossConnectGroupId;
    }
    if (this._customerBgpPeeringIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerBgpPeeringIp = this._customerBgpPeeringIp;
    }
    if (this._customerBgpPeeringIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerBgpPeeringIpv6 = this._customerBgpPeeringIpv6;
    }
    if (this._oracleBgpPeeringIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleBgpPeeringIp = this._oracleBgpPeeringIp;
    }
    if (this._oracleBgpPeeringIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleBgpPeeringIpv6 = this._oracleBgpPeeringIpv6;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreVirtualCircuitCrossConnectMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgpMd5AuthKey = undefined;
      this._crossConnectOrCrossConnectGroupId = undefined;
      this._customerBgpPeeringIp = undefined;
      this._customerBgpPeeringIpv6 = undefined;
      this._oracleBgpPeeringIp = undefined;
      this._oracleBgpPeeringIpv6 = undefined;
      this._vlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgpMd5AuthKey = value.bgpMd5AuthKey;
      this._crossConnectOrCrossConnectGroupId = value.crossConnectOrCrossConnectGroupId;
      this._customerBgpPeeringIp = value.customerBgpPeeringIp;
      this._customerBgpPeeringIpv6 = value.customerBgpPeeringIpv6;
      this._oracleBgpPeeringIp = value.oracleBgpPeeringIp;
      this._oracleBgpPeeringIpv6 = value.oracleBgpPeeringIpv6;
      this._vlan = value.vlan;
    }
  }

  // bgp_md5auth_key - computed: true, optional: true, required: false
  private _bgpMd5AuthKey?: string; 
  public get bgpMd5AuthKey() {
    return this.getStringAttribute('bgp_md5auth_key');
  }
  public set bgpMd5AuthKey(value: string) {
    this._bgpMd5AuthKey = value;
  }
  public resetBgpMd5AuthKey() {
    this._bgpMd5AuthKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpMd5AuthKeyInput() {
    return this._bgpMd5AuthKey;
  }

  // cross_connect_or_cross_connect_group_id - computed: true, optional: true, required: false
  private _crossConnectOrCrossConnectGroupId?: string; 
  public get crossConnectOrCrossConnectGroupId() {
    return this.getStringAttribute('cross_connect_or_cross_connect_group_id');
  }
  public set crossConnectOrCrossConnectGroupId(value: string) {
    this._crossConnectOrCrossConnectGroupId = value;
  }
  public resetCrossConnectOrCrossConnectGroupId() {
    this._crossConnectOrCrossConnectGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossConnectOrCrossConnectGroupIdInput() {
    return this._crossConnectOrCrossConnectGroupId;
  }

  // customer_bgp_peering_ip - computed: true, optional: true, required: false
  private _customerBgpPeeringIp?: string; 
  public get customerBgpPeeringIp() {
    return this.getStringAttribute('customer_bgp_peering_ip');
  }
  public set customerBgpPeeringIp(value: string) {
    this._customerBgpPeeringIp = value;
  }
  public resetCustomerBgpPeeringIp() {
    this._customerBgpPeeringIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerBgpPeeringIpInput() {
    return this._customerBgpPeeringIp;
  }

  // customer_bgp_peering_ipv6 - computed: true, optional: true, required: false
  private _customerBgpPeeringIpv6?: string; 
  public get customerBgpPeeringIpv6() {
    return this.getStringAttribute('customer_bgp_peering_ipv6');
  }
  public set customerBgpPeeringIpv6(value: string) {
    this._customerBgpPeeringIpv6 = value;
  }
  public resetCustomerBgpPeeringIpv6() {
    this._customerBgpPeeringIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerBgpPeeringIpv6Input() {
    return this._customerBgpPeeringIpv6;
  }

  // oracle_bgp_peering_ip - computed: true, optional: true, required: false
  private _oracleBgpPeeringIp?: string; 
  public get oracleBgpPeeringIp() {
    return this.getStringAttribute('oracle_bgp_peering_ip');
  }
  public set oracleBgpPeeringIp(value: string) {
    this._oracleBgpPeeringIp = value;
  }
  public resetOracleBgpPeeringIp() {
    this._oracleBgpPeeringIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleBgpPeeringIpInput() {
    return this._oracleBgpPeeringIp;
  }

  // oracle_bgp_peering_ipv6 - computed: true, optional: true, required: false
  private _oracleBgpPeeringIpv6?: string; 
  public get oracleBgpPeeringIpv6() {
    return this.getStringAttribute('oracle_bgp_peering_ipv6');
  }
  public set oracleBgpPeeringIpv6(value: string) {
    this._oracleBgpPeeringIpv6 = value;
  }
  public resetOracleBgpPeeringIpv6() {
    this._oracleBgpPeeringIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleBgpPeeringIpv6Input() {
    return this._oracleBgpPeeringIpv6;
  }

  // vlan - computed: true, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}

export class CoreVirtualCircuitCrossConnectMappingsList extends cdktf.ComplexList {
  public internalValue? : CoreVirtualCircuitCrossConnectMappings[] | cdktf.IResolvable

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
  public get(index: number): CoreVirtualCircuitCrossConnectMappingsOutputReference {
    return new CoreVirtualCircuitCrossConnectMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreVirtualCircuitPublicPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#cidr_block CoreVirtualCircuit#cidr_block}
  */
  readonly cidrBlock: string;
}

export function coreVirtualCircuitPublicPrefixesToTerraform(struct?: CoreVirtualCircuitPublicPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
  }
}


export function coreVirtualCircuitPublicPrefixesToHclTerraform(struct?: CoreVirtualCircuitPublicPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.cidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreVirtualCircuitPublicPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreVirtualCircuitPublicPrefixes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlock = this._cidrBlock;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreVirtualCircuitPublicPrefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlock = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlock = value.cidrBlock;
    }
  }

  // cidr_block - computed: false, optional: false, required: true
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }
}

export class CoreVirtualCircuitPublicPrefixesList extends cdktf.ComplexList {
  public internalValue? : CoreVirtualCircuitPublicPrefixes[] | cdktf.IResolvable

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
  public get(index: number): CoreVirtualCircuitPublicPrefixesOutputReference {
    return new CoreVirtualCircuitPublicPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreVirtualCircuitTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#create CoreVirtualCircuit#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#delete CoreVirtualCircuit#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#update CoreVirtualCircuit#update}
  */
  readonly update?: string;
}

export function coreVirtualCircuitTimeoutsToTerraform(struct?: CoreVirtualCircuitTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function coreVirtualCircuitTimeoutsToHclTerraform(struct?: CoreVirtualCircuitTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreVirtualCircuitTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CoreVirtualCircuitTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreVirtualCircuitTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit oci_core_virtual_circuit}
*/
export class CoreVirtualCircuit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_virtual_circuit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CoreVirtualCircuit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CoreVirtualCircuit to import
  * @param importFromId The id of the existing CoreVirtualCircuit that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CoreVirtualCircuit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_virtual_circuit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/core_virtual_circuit oci_core_virtual_circuit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoreVirtualCircuitConfig
  */
  public constructor(scope: Construct, id: string, config: CoreVirtualCircuitConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_virtual_circuit',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bandwidthShapeName = config.bandwidthShapeName;
    this._bgpAdminState = config.bgpAdminState;
    this._compartmentId = config.compartmentId;
    this._customerAsn = config.customerAsn;
    this._customerBgpAsn = config.customerBgpAsn;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._gatewayId = config.gatewayId;
    this._id = config.id;
    this._ipMtu = config.ipMtu;
    this._isBfdEnabled = config.isBfdEnabled;
    this._isTransportMode = config.isTransportMode;
    this._providerServiceId = config.providerServiceId;
    this._providerServiceKeyName = config.providerServiceKeyName;
    this._region = config.region;
    this._routingPolicy = config.routingPolicy;
    this._type = config.type;
    this._crossConnectMappings.internalValue = config.crossConnectMappings;
    this._publicPrefixes.internalValue = config.publicPrefixes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_shape_name - computed: true, optional: true, required: false
  private _bandwidthShapeName?: string; 
  public get bandwidthShapeName() {
    return this.getStringAttribute('bandwidth_shape_name');
  }
  public set bandwidthShapeName(value: string) {
    this._bandwidthShapeName = value;
  }
  public resetBandwidthShapeName() {
    this._bandwidthShapeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthShapeNameInput() {
    return this._bandwidthShapeName;
  }

  // bgp_admin_state - computed: true, optional: true, required: false
  private _bgpAdminState?: string; 
  public get bgpAdminState() {
    return this.getStringAttribute('bgp_admin_state');
  }
  public set bgpAdminState(value: string) {
    this._bgpAdminState = value;
  }
  public resetBgpAdminState() {
    this._bgpAdminState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAdminStateInput() {
    return this._bgpAdminState;
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

  // customer_asn - computed: true, optional: true, required: false
  private _customerAsn?: string; 
  public get customerAsn() {
    return this.getStringAttribute('customer_asn');
  }
  public set customerAsn(value: string) {
    this._customerAsn = value;
  }
  public resetCustomerAsn() {
    this._customerAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerAsnInput() {
    return this._customerAsn;
  }

  // customer_bgp_asn - computed: true, optional: true, required: false
  private _customerBgpAsn?: number; 
  public get customerBgpAsn() {
    return this.getNumberAttribute('customer_bgp_asn');
  }
  public set customerBgpAsn(value: number) {
    this._customerBgpAsn = value;
  }
  public resetCustomerBgpAsn() {
    this._customerBgpAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerBgpAsnInput() {
    return this._customerBgpAsn;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: true, required: false
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

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // gateway_id - computed: true, optional: true, required: false
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  public resetGatewayId() {
    this._gatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
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

  // ip_mtu - computed: true, optional: true, required: false
  private _ipMtu?: string; 
  public get ipMtu() {
    return this.getStringAttribute('ip_mtu');
  }
  public set ipMtu(value: string) {
    this._ipMtu = value;
  }
  public resetIpMtu() {
    this._ipMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMtuInput() {
    return this._ipMtu;
  }

  // is_bfd_enabled - computed: true, optional: true, required: false
  private _isBfdEnabled?: boolean | cdktf.IResolvable; 
  public get isBfdEnabled() {
    return this.getBooleanAttribute('is_bfd_enabled');
  }
  public set isBfdEnabled(value: boolean | cdktf.IResolvable) {
    this._isBfdEnabled = value;
  }
  public resetIsBfdEnabled() {
    this._isBfdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBfdEnabledInput() {
    return this._isBfdEnabled;
  }

  // is_transport_mode - computed: true, optional: true, required: false
  private _isTransportMode?: boolean | cdktf.IResolvable; 
  public get isTransportMode() {
    return this.getBooleanAttribute('is_transport_mode');
  }
  public set isTransportMode(value: boolean | cdktf.IResolvable) {
    this._isTransportMode = value;
  }
  public resetIsTransportMode() {
    this._isTransportMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTransportModeInput() {
    return this._isTransportMode;
  }

  // oracle_bgp_asn - computed: true, optional: false, required: false
  public get oracleBgpAsn() {
    return this.getNumberAttribute('oracle_bgp_asn');
  }

  // provider_service_id - computed: true, optional: true, required: false
  private _providerServiceId?: string; 
  public get providerServiceId() {
    return this.getStringAttribute('provider_service_id');
  }
  public set providerServiceId(value: string) {
    this._providerServiceId = value;
  }
  public resetProviderServiceId() {
    this._providerServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerServiceIdInput() {
    return this._providerServiceId;
  }

  // provider_service_key_name - computed: true, optional: true, required: false
  private _providerServiceKeyName?: string; 
  public get providerServiceKeyName() {
    return this.getStringAttribute('provider_service_key_name');
  }
  public set providerServiceKeyName(value: string) {
    this._providerServiceKeyName = value;
  }
  public resetProviderServiceKeyName() {
    this._providerServiceKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerServiceKeyNameInput() {
    return this._providerServiceKeyName;
  }

  // provider_state - computed: true, optional: false, required: false
  public get providerState() {
    return this.getStringAttribute('provider_state');
  }

  // reference_comment - computed: true, optional: false, required: false
  public get referenceComment() {
    return this.getStringAttribute('reference_comment');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // routing_policy - computed: true, optional: true, required: false
  private _routingPolicy?: string[]; 
  public get routingPolicy() {
    return this.getListAttribute('routing_policy');
  }
  public set routingPolicy(value: string[]) {
    this._routingPolicy = value;
  }
  public resetRoutingPolicy() {
    this._routingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyInput() {
    return this._routingPolicy;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // virtual_circuit_redundancy_metadata - computed: true, optional: false, required: false
  private _virtualCircuitRedundancyMetadata = new CoreVirtualCircuitVirtualCircuitRedundancyMetadataList(this, "virtual_circuit_redundancy_metadata", false);
  public get virtualCircuitRedundancyMetadata() {
    return this._virtualCircuitRedundancyMetadata;
  }

  // cross_connect_mappings - computed: false, optional: true, required: false
  private _crossConnectMappings = new CoreVirtualCircuitCrossConnectMappingsList(this, "cross_connect_mappings", false);
  public get crossConnectMappings() {
    return this._crossConnectMappings;
  }
  public putCrossConnectMappings(value: CoreVirtualCircuitCrossConnectMappings[] | cdktf.IResolvable) {
    this._crossConnectMappings.internalValue = value;
  }
  public resetCrossConnectMappings() {
    this._crossConnectMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossConnectMappingsInput() {
    return this._crossConnectMappings.internalValue;
  }

  // public_prefixes - computed: false, optional: true, required: false
  private _publicPrefixes = new CoreVirtualCircuitPublicPrefixesList(this, "public_prefixes", true);
  public get publicPrefixes() {
    return this._publicPrefixes;
  }
  public putPublicPrefixes(value: CoreVirtualCircuitPublicPrefixes[] | cdktf.IResolvable) {
    this._publicPrefixes.internalValue = value;
  }
  public resetPublicPrefixes() {
    this._publicPrefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicPrefixesInput() {
    return this._publicPrefixes.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CoreVirtualCircuitTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CoreVirtualCircuitTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth_shape_name: cdktf.stringToTerraform(this._bandwidthShapeName),
      bgp_admin_state: cdktf.stringToTerraform(this._bgpAdminState),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      customer_asn: cdktf.stringToTerraform(this._customerAsn),
      customer_bgp_asn: cdktf.numberToTerraform(this._customerBgpAsn),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      id: cdktf.stringToTerraform(this._id),
      ip_mtu: cdktf.stringToTerraform(this._ipMtu),
      is_bfd_enabled: cdktf.booleanToTerraform(this._isBfdEnabled),
      is_transport_mode: cdktf.booleanToTerraform(this._isTransportMode),
      provider_service_id: cdktf.stringToTerraform(this._providerServiceId),
      provider_service_key_name: cdktf.stringToTerraform(this._providerServiceKeyName),
      region: cdktf.stringToTerraform(this._region),
      routing_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._routingPolicy),
      type: cdktf.stringToTerraform(this._type),
      cross_connect_mappings: cdktf.listMapper(coreVirtualCircuitCrossConnectMappingsToTerraform, true)(this._crossConnectMappings.internalValue),
      public_prefixes: cdktf.listMapper(coreVirtualCircuitPublicPrefixesToTerraform, true)(this._publicPrefixes.internalValue),
      timeouts: coreVirtualCircuitTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth_shape_name: {
        value: cdktf.stringToHclTerraform(this._bandwidthShapeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_admin_state: {
        value: cdktf.stringToHclTerraform(this._bgpAdminState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_asn: {
        value: cdktf.stringToHclTerraform(this._customerAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_bgp_asn: {
        value: cdktf.numberToHclTerraform(this._customerBgpAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      gateway_id: {
        value: cdktf.stringToHclTerraform(this._gatewayId),
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
      ip_mtu: {
        value: cdktf.stringToHclTerraform(this._ipMtu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_bfd_enabled: {
        value: cdktf.booleanToHclTerraform(this._isBfdEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_transport_mode: {
        value: cdktf.booleanToHclTerraform(this._isTransportMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      provider_service_id: {
        value: cdktf.stringToHclTerraform(this._providerServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_service_key_name: {
        value: cdktf.stringToHclTerraform(this._providerServiceKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._routingPolicy),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_connect_mappings: {
        value: cdktf.listMapperHcl(coreVirtualCircuitCrossConnectMappingsToHclTerraform, true)(this._crossConnectMappings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreVirtualCircuitCrossConnectMappingsList",
      },
      public_prefixes: {
        value: cdktf.listMapperHcl(coreVirtualCircuitPublicPrefixesToHclTerraform, true)(this._publicPrefixes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CoreVirtualCircuitPublicPrefixesList",
      },
      timeouts: {
        value: coreVirtualCircuitTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CoreVirtualCircuitTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
