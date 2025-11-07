// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EvpnEviConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure EVPN Instance MAC advertisement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#advertise_mac EvpnEvi#advertise_mac}
  */
  readonly advertiseMac?: boolean | cdktf.IResolvable;
  /**
  * AS:nn (hex or decimal format)
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#bgp_rd_four_byte_as_assigned_number EvpnEvi#bgp_rd_four_byte_as_assigned_number}
  */
  readonly bgpRdFourByteAsAssignedNumber?: number;
  /**
  * Four Byte AS number
  *   - Range: `65536`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#bgp_rd_four_byte_as_number EvpnEvi#bgp_rd_four_byte_as_number}
  */
  readonly bgpRdFourByteAsNumber?: number;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#bgp_rd_ipv4_address EvpnEvi#bgp_rd_ipv4_address}
  */
  readonly bgpRdIpv4Address?: string;
  /**
  * IP-address:nn (hex or decimal format)
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#bgp_rd_ipv4_address_assigned_number EvpnEvi#bgp_rd_ipv4_address_assigned_number}
  */
  readonly bgpRdIpv4AddressAssignedNumber?: number;
  /**
  * AS:nn (hex or decimal format)
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#bgp_rd_two_byte_as_assigned_number EvpnEvi#bgp_rd_two_byte_as_assigned_number}
  */
  readonly bgpRdTwoByteAsAssignedNumber?: number;
  /**
  * Two Byte AS Number
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#bgp_rd_two_byte_as_number EvpnEvi#bgp_rd_two_byte_as_number}
  */
  readonly bgpRdTwoByteAsNumber?: number;
  /**
  * Export route policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#bgp_route_policy_export EvpnEvi#bgp_route_policy_export}
  */
  readonly bgpRoutePolicyExport?: string;
  /**
  * Import route policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#bgp_route_policy_import EvpnEvi#bgp_route_policy_import}
  */
  readonly bgpRoutePolicyImport?: string;
  /**
  * Four Byte AS number Route Target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#bgp_route_target_export_four_byte_as_format EvpnEvi#bgp_route_target_export_four_byte_as_format}
  */
  readonly bgpRouteTargetExportFourByteAsFormat?: EvpnEviBgpRouteTargetExportFourByteAsFormat[] | cdktf.IResolvable;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#bgp_route_target_export_ipv4_address_format EvpnEvi#bgp_route_target_export_ipv4_address_format}
  */
  readonly bgpRouteTargetExportIpv4AddressFormat?: EvpnEviBgpRouteTargetExportIpv4AddressFormat[] | cdktf.IResolvable;
  /**
  * Two Byte AS Number Route Target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#bgp_route_target_export_two_byte_as_format EvpnEvi#bgp_route_target_export_two_byte_as_format}
  */
  readonly bgpRouteTargetExportTwoByteAsFormat?: EvpnEviBgpRouteTargetExportTwoByteAsFormat[] | cdktf.IResolvable;
  /**
  * Four Byte AS number Route Target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#bgp_route_target_import_four_byte_as_format EvpnEvi#bgp_route_target_import_four_byte_as_format}
  */
  readonly bgpRouteTargetImportFourByteAsFormat?: EvpnEviBgpRouteTargetImportFourByteAsFormat[] | cdktf.IResolvable;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#bgp_route_target_import_ipv4_address_format EvpnEvi#bgp_route_target_import_ipv4_address_format}
  */
  readonly bgpRouteTargetImportIpv4AddressFormat?: EvpnEviBgpRouteTargetImportIpv4AddressFormat[] | cdktf.IResolvable;
  /**
  * Two Byte AS Number Route Target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#bgp_route_target_import_two_byte_as_format EvpnEvi#bgp_route_target_import_two_byte_as_format}
  */
  readonly bgpRouteTargetImportTwoByteAsFormat?: EvpnEviBgpRouteTargetImportTwoByteAsFormat[] | cdktf.IResolvable;
  /**
  * Disabling control-word
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#control_word_disable EvpnEvi#control_word_disable}
  */
  readonly controlWordDisable?: boolean | cdktf.IResolvable;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#delete_mode EvpnEvi#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * Description for this EVPN Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#description EvpnEvi#description}
  */
  readonly description?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#device EvpnEvi#device}
  */
  readonly device?: string;
  /**
  * Configure EVPN Instance E-Tree
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#etree EvpnEvi#etree}
  */
  readonly etree?: boolean | cdktf.IResolvable;
  /**
  * Designate EVPN Instance as EVPN E-Tree Leaf Site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#etree_leaf EvpnEvi#etree_leaf}
  */
  readonly etreeLeaf?: boolean | cdktf.IResolvable;
  /**
  * Designate EVPN Instance as EVPN E-Tree Route-Target Leaf Site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#etree_rt_leaf EvpnEvi#etree_rt_leaf}
  */
  readonly etreeRtLeaf?: boolean | cdktf.IResolvable;
  /**
  * Configure EVPN Instance load-balancing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#load_balancing EvpnEvi#load_balancing}
  */
  readonly loadBalancing?: boolean | cdktf.IResolvable;
  /**
  * Static configuration of Flow Label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#load_balancing_flow_label_static EvpnEvi#load_balancing_flow_label_static}
  */
  readonly loadBalancingFlowLabelStatic?: boolean | cdktf.IResolvable;
  /**
  * Enabling unknown unicast suppression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#unknown_unicast_suppression EvpnEvi#unknown_unicast_suppression}
  */
  readonly unknownUnicastSuppression?: boolean | cdktf.IResolvable;
  /**
  * Configure EVPN Instance VPN ID
  *   - Range: `1`-`65534`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#vpn_id EvpnEvi#vpn_id}
  */
  readonly vpnId: number;
}
export interface EvpnEviBgpRouteTargetExportFourByteAsFormat {
  /**
  * Four Byte AS number
  *   - Range: `65536`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#as_number EvpnEvi#as_number}
  */
  readonly asNumber: number;
  /**
  * AS:nn (hex or decimal format)
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#assigned_number EvpnEvi#assigned_number}
  */
  readonly assignedNumber: number;
}

export function evpnEviBgpRouteTargetExportFourByteAsFormatToTerraform(struct?: EvpnEviBgpRouteTargetExportFourByteAsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_number: cdktf.numberToTerraform(struct!.asNumber),
    assigned_number: cdktf.numberToTerraform(struct!.assignedNumber),
  }
}


export function evpnEviBgpRouteTargetExportFourByteAsFormatToHclTerraform(struct?: EvpnEviBgpRouteTargetExportFourByteAsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_number: {
      value: cdktf.numberToHclTerraform(struct!.asNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    assigned_number: {
      value: cdktf.numberToHclTerraform(struct!.assignedNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EvpnEviBgpRouteTargetExportFourByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EvpnEviBgpRouteTargetExportFourByteAsFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumber = this._asNumber;
    }
    if (this._assignedNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedNumber = this._assignedNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvpnEviBgpRouteTargetExportFourByteAsFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asNumber = undefined;
      this._assignedNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asNumber = value.asNumber;
      this._assignedNumber = value.assignedNumber;
    }
  }

  // as_number - computed: false, optional: false, required: true
  private _asNumber?: number; 
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }
  public set asNumber(value: number) {
    this._asNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
  }

  // assigned_number - computed: false, optional: false, required: true
  private _assignedNumber?: number; 
  public get assignedNumber() {
    return this.getNumberAttribute('assigned_number');
  }
  public set assignedNumber(value: number) {
    this._assignedNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedNumberInput() {
    return this._assignedNumber;
  }
}

export class EvpnEviBgpRouteTargetExportFourByteAsFormatList extends cdktf.ComplexList {
  public internalValue? : EvpnEviBgpRouteTargetExportFourByteAsFormat[] | cdktf.IResolvable

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
  public get(index: number): EvpnEviBgpRouteTargetExportFourByteAsFormatOutputReference {
    return new EvpnEviBgpRouteTargetExportFourByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvpnEviBgpRouteTargetExportIpv4AddressFormat {
  /**
  * IP-address:nn (hex or decimal format)
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#assigned_number EvpnEvi#assigned_number}
  */
  readonly assignedNumber: number;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#ipv4_address EvpnEvi#ipv4_address}
  */
  readonly ipv4Address: string;
}

export function evpnEviBgpRouteTargetExportIpv4AddressFormatToTerraform(struct?: EvpnEviBgpRouteTargetExportIpv4AddressFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_number: cdktf.numberToTerraform(struct!.assignedNumber),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
  }
}


export function evpnEviBgpRouteTargetExportIpv4AddressFormatToHclTerraform(struct?: EvpnEviBgpRouteTargetExportIpv4AddressFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assigned_number: {
      value: cdktf.numberToHclTerraform(struct!.assignedNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EvpnEviBgpRouteTargetExportIpv4AddressFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EvpnEviBgpRouteTargetExportIpv4AddressFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignedNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedNumber = this._assignedNumber;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvpnEviBgpRouteTargetExportIpv4AddressFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignedNumber = undefined;
      this._ipv4Address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignedNumber = value.assignedNumber;
      this._ipv4Address = value.ipv4Address;
    }
  }

  // assigned_number - computed: false, optional: false, required: true
  private _assignedNumber?: number; 
  public get assignedNumber() {
    return this.getNumberAttribute('assigned_number');
  }
  public set assignedNumber(value: number) {
    this._assignedNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedNumberInput() {
    return this._assignedNumber;
  }

  // ipv4_address - computed: false, optional: false, required: true
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }
}

export class EvpnEviBgpRouteTargetExportIpv4AddressFormatList extends cdktf.ComplexList {
  public internalValue? : EvpnEviBgpRouteTargetExportIpv4AddressFormat[] | cdktf.IResolvable

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
  public get(index: number): EvpnEviBgpRouteTargetExportIpv4AddressFormatOutputReference {
    return new EvpnEviBgpRouteTargetExportIpv4AddressFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvpnEviBgpRouteTargetExportTwoByteAsFormat {
  /**
  * Two Byte AS Number
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#as_number EvpnEvi#as_number}
  */
  readonly asNumber: number;
  /**
  * AS:nn (hex or decimal format)
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#assigned_number EvpnEvi#assigned_number}
  */
  readonly assignedNumber: number;
}

export function evpnEviBgpRouteTargetExportTwoByteAsFormatToTerraform(struct?: EvpnEviBgpRouteTargetExportTwoByteAsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_number: cdktf.numberToTerraform(struct!.asNumber),
    assigned_number: cdktf.numberToTerraform(struct!.assignedNumber),
  }
}


export function evpnEviBgpRouteTargetExportTwoByteAsFormatToHclTerraform(struct?: EvpnEviBgpRouteTargetExportTwoByteAsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_number: {
      value: cdktf.numberToHclTerraform(struct!.asNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    assigned_number: {
      value: cdktf.numberToHclTerraform(struct!.assignedNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EvpnEviBgpRouteTargetExportTwoByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EvpnEviBgpRouteTargetExportTwoByteAsFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumber = this._asNumber;
    }
    if (this._assignedNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedNumber = this._assignedNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvpnEviBgpRouteTargetExportTwoByteAsFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asNumber = undefined;
      this._assignedNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asNumber = value.asNumber;
      this._assignedNumber = value.assignedNumber;
    }
  }

  // as_number - computed: false, optional: false, required: true
  private _asNumber?: number; 
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }
  public set asNumber(value: number) {
    this._asNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
  }

  // assigned_number - computed: false, optional: false, required: true
  private _assignedNumber?: number; 
  public get assignedNumber() {
    return this.getNumberAttribute('assigned_number');
  }
  public set assignedNumber(value: number) {
    this._assignedNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedNumberInput() {
    return this._assignedNumber;
  }
}

export class EvpnEviBgpRouteTargetExportTwoByteAsFormatList extends cdktf.ComplexList {
  public internalValue? : EvpnEviBgpRouteTargetExportTwoByteAsFormat[] | cdktf.IResolvable

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
  public get(index: number): EvpnEviBgpRouteTargetExportTwoByteAsFormatOutputReference {
    return new EvpnEviBgpRouteTargetExportTwoByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvpnEviBgpRouteTargetImportFourByteAsFormat {
  /**
  * Four Byte AS number
  *   - Range: `65536`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#as_number EvpnEvi#as_number}
  */
  readonly asNumber: number;
  /**
  * AS:nn (hex or decimal format)
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#assigned_number EvpnEvi#assigned_number}
  */
  readonly assignedNumber: number;
}

export function evpnEviBgpRouteTargetImportFourByteAsFormatToTerraform(struct?: EvpnEviBgpRouteTargetImportFourByteAsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_number: cdktf.numberToTerraform(struct!.asNumber),
    assigned_number: cdktf.numberToTerraform(struct!.assignedNumber),
  }
}


export function evpnEviBgpRouteTargetImportFourByteAsFormatToHclTerraform(struct?: EvpnEviBgpRouteTargetImportFourByteAsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_number: {
      value: cdktf.numberToHclTerraform(struct!.asNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    assigned_number: {
      value: cdktf.numberToHclTerraform(struct!.assignedNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EvpnEviBgpRouteTargetImportFourByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EvpnEviBgpRouteTargetImportFourByteAsFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumber = this._asNumber;
    }
    if (this._assignedNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedNumber = this._assignedNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvpnEviBgpRouteTargetImportFourByteAsFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asNumber = undefined;
      this._assignedNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asNumber = value.asNumber;
      this._assignedNumber = value.assignedNumber;
    }
  }

  // as_number - computed: false, optional: false, required: true
  private _asNumber?: number; 
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }
  public set asNumber(value: number) {
    this._asNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
  }

  // assigned_number - computed: false, optional: false, required: true
  private _assignedNumber?: number; 
  public get assignedNumber() {
    return this.getNumberAttribute('assigned_number');
  }
  public set assignedNumber(value: number) {
    this._assignedNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedNumberInput() {
    return this._assignedNumber;
  }
}

export class EvpnEviBgpRouteTargetImportFourByteAsFormatList extends cdktf.ComplexList {
  public internalValue? : EvpnEviBgpRouteTargetImportFourByteAsFormat[] | cdktf.IResolvable

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
  public get(index: number): EvpnEviBgpRouteTargetImportFourByteAsFormatOutputReference {
    return new EvpnEviBgpRouteTargetImportFourByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvpnEviBgpRouteTargetImportIpv4AddressFormat {
  /**
  * IP-address:nn (hex or decimal format)
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#assigned_number EvpnEvi#assigned_number}
  */
  readonly assignedNumber: number;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#ipv4_address EvpnEvi#ipv4_address}
  */
  readonly ipv4Address: string;
}

export function evpnEviBgpRouteTargetImportIpv4AddressFormatToTerraform(struct?: EvpnEviBgpRouteTargetImportIpv4AddressFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_number: cdktf.numberToTerraform(struct!.assignedNumber),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
  }
}


export function evpnEviBgpRouteTargetImportIpv4AddressFormatToHclTerraform(struct?: EvpnEviBgpRouteTargetImportIpv4AddressFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assigned_number: {
      value: cdktf.numberToHclTerraform(struct!.assignedNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EvpnEviBgpRouteTargetImportIpv4AddressFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EvpnEviBgpRouteTargetImportIpv4AddressFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignedNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedNumber = this._assignedNumber;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvpnEviBgpRouteTargetImportIpv4AddressFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignedNumber = undefined;
      this._ipv4Address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignedNumber = value.assignedNumber;
      this._ipv4Address = value.ipv4Address;
    }
  }

  // assigned_number - computed: false, optional: false, required: true
  private _assignedNumber?: number; 
  public get assignedNumber() {
    return this.getNumberAttribute('assigned_number');
  }
  public set assignedNumber(value: number) {
    this._assignedNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedNumberInput() {
    return this._assignedNumber;
  }

  // ipv4_address - computed: false, optional: false, required: true
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }
}

export class EvpnEviBgpRouteTargetImportIpv4AddressFormatList extends cdktf.ComplexList {
  public internalValue? : EvpnEviBgpRouteTargetImportIpv4AddressFormat[] | cdktf.IResolvable

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
  public get(index: number): EvpnEviBgpRouteTargetImportIpv4AddressFormatOutputReference {
    return new EvpnEviBgpRouteTargetImportIpv4AddressFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvpnEviBgpRouteTargetImportTwoByteAsFormat {
  /**
  * Two Byte AS Number
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#as_number EvpnEvi#as_number}
  */
  readonly asNumber: number;
  /**
  * AS:nn (hex or decimal format)
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#assigned_number EvpnEvi#assigned_number}
  */
  readonly assignedNumber: number;
}

export function evpnEviBgpRouteTargetImportTwoByteAsFormatToTerraform(struct?: EvpnEviBgpRouteTargetImportTwoByteAsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_number: cdktf.numberToTerraform(struct!.asNumber),
    assigned_number: cdktf.numberToTerraform(struct!.assignedNumber),
  }
}


export function evpnEviBgpRouteTargetImportTwoByteAsFormatToHclTerraform(struct?: EvpnEviBgpRouteTargetImportTwoByteAsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_number: {
      value: cdktf.numberToHclTerraform(struct!.asNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    assigned_number: {
      value: cdktf.numberToHclTerraform(struct!.assignedNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EvpnEviBgpRouteTargetImportTwoByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EvpnEviBgpRouteTargetImportTwoByteAsFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumber = this._asNumber;
    }
    if (this._assignedNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedNumber = this._assignedNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvpnEviBgpRouteTargetImportTwoByteAsFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asNumber = undefined;
      this._assignedNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asNumber = value.asNumber;
      this._assignedNumber = value.assignedNumber;
    }
  }

  // as_number - computed: false, optional: false, required: true
  private _asNumber?: number; 
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }
  public set asNumber(value: number) {
    this._asNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
  }

  // assigned_number - computed: false, optional: false, required: true
  private _assignedNumber?: number; 
  public get assignedNumber() {
    return this.getNumberAttribute('assigned_number');
  }
  public set assignedNumber(value: number) {
    this._assignedNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedNumberInput() {
    return this._assignedNumber;
  }
}

export class EvpnEviBgpRouteTargetImportTwoByteAsFormatList extends cdktf.ComplexList {
  public internalValue? : EvpnEviBgpRouteTargetImportTwoByteAsFormat[] | cdktf.IResolvable

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
  public get(index: number): EvpnEviBgpRouteTargetImportTwoByteAsFormatOutputReference {
    return new EvpnEviBgpRouteTargetImportTwoByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi iosxr_evpn_evi}
*/
export class EvpnEvi extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_evpn_evi";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EvpnEvi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EvpnEvi to import
  * @param importFromId The id of the existing EvpnEvi that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EvpnEvi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_evpn_evi", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_evi iosxr_evpn_evi} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EvpnEviConfig
  */
  public constructor(scope: Construct, id: string, config: EvpnEviConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_evpn_evi',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advertiseMac = config.advertiseMac;
    this._bgpRdFourByteAsAssignedNumber = config.bgpRdFourByteAsAssignedNumber;
    this._bgpRdFourByteAsNumber = config.bgpRdFourByteAsNumber;
    this._bgpRdIpv4Address = config.bgpRdIpv4Address;
    this._bgpRdIpv4AddressAssignedNumber = config.bgpRdIpv4AddressAssignedNumber;
    this._bgpRdTwoByteAsAssignedNumber = config.bgpRdTwoByteAsAssignedNumber;
    this._bgpRdTwoByteAsNumber = config.bgpRdTwoByteAsNumber;
    this._bgpRoutePolicyExport = config.bgpRoutePolicyExport;
    this._bgpRoutePolicyImport = config.bgpRoutePolicyImport;
    this._bgpRouteTargetExportFourByteAsFormat.internalValue = config.bgpRouteTargetExportFourByteAsFormat;
    this._bgpRouteTargetExportIpv4AddressFormat.internalValue = config.bgpRouteTargetExportIpv4AddressFormat;
    this._bgpRouteTargetExportTwoByteAsFormat.internalValue = config.bgpRouteTargetExportTwoByteAsFormat;
    this._bgpRouteTargetImportFourByteAsFormat.internalValue = config.bgpRouteTargetImportFourByteAsFormat;
    this._bgpRouteTargetImportIpv4AddressFormat.internalValue = config.bgpRouteTargetImportIpv4AddressFormat;
    this._bgpRouteTargetImportTwoByteAsFormat.internalValue = config.bgpRouteTargetImportTwoByteAsFormat;
    this._controlWordDisable = config.controlWordDisable;
    this._deleteMode = config.deleteMode;
    this._description = config.description;
    this._device = config.device;
    this._etree = config.etree;
    this._etreeLeaf = config.etreeLeaf;
    this._etreeRtLeaf = config.etreeRtLeaf;
    this._loadBalancing = config.loadBalancing;
    this._loadBalancingFlowLabelStatic = config.loadBalancingFlowLabelStatic;
    this._unknownUnicastSuppression = config.unknownUnicastSuppression;
    this._vpnId = config.vpnId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise_mac - computed: false, optional: true, required: false
  private _advertiseMac?: boolean | cdktf.IResolvable; 
  public get advertiseMac() {
    return this.getBooleanAttribute('advertise_mac');
  }
  public set advertiseMac(value: boolean | cdktf.IResolvable) {
    this._advertiseMac = value;
  }
  public resetAdvertiseMac() {
    this._advertiseMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseMacInput() {
    return this._advertiseMac;
  }

  // bgp_rd_four_byte_as_assigned_number - computed: false, optional: true, required: false
  private _bgpRdFourByteAsAssignedNumber?: number; 
  public get bgpRdFourByteAsAssignedNumber() {
    return this.getNumberAttribute('bgp_rd_four_byte_as_assigned_number');
  }
  public set bgpRdFourByteAsAssignedNumber(value: number) {
    this._bgpRdFourByteAsAssignedNumber = value;
  }
  public resetBgpRdFourByteAsAssignedNumber() {
    this._bgpRdFourByteAsAssignedNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRdFourByteAsAssignedNumberInput() {
    return this._bgpRdFourByteAsAssignedNumber;
  }

  // bgp_rd_four_byte_as_number - computed: false, optional: true, required: false
  private _bgpRdFourByteAsNumber?: number; 
  public get bgpRdFourByteAsNumber() {
    return this.getNumberAttribute('bgp_rd_four_byte_as_number');
  }
  public set bgpRdFourByteAsNumber(value: number) {
    this._bgpRdFourByteAsNumber = value;
  }
  public resetBgpRdFourByteAsNumber() {
    this._bgpRdFourByteAsNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRdFourByteAsNumberInput() {
    return this._bgpRdFourByteAsNumber;
  }

  // bgp_rd_ipv4_address - computed: false, optional: true, required: false
  private _bgpRdIpv4Address?: string; 
  public get bgpRdIpv4Address() {
    return this.getStringAttribute('bgp_rd_ipv4_address');
  }
  public set bgpRdIpv4Address(value: string) {
    this._bgpRdIpv4Address = value;
  }
  public resetBgpRdIpv4Address() {
    this._bgpRdIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRdIpv4AddressInput() {
    return this._bgpRdIpv4Address;
  }

  // bgp_rd_ipv4_address_assigned_number - computed: false, optional: true, required: false
  private _bgpRdIpv4AddressAssignedNumber?: number; 
  public get bgpRdIpv4AddressAssignedNumber() {
    return this.getNumberAttribute('bgp_rd_ipv4_address_assigned_number');
  }
  public set bgpRdIpv4AddressAssignedNumber(value: number) {
    this._bgpRdIpv4AddressAssignedNumber = value;
  }
  public resetBgpRdIpv4AddressAssignedNumber() {
    this._bgpRdIpv4AddressAssignedNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRdIpv4AddressAssignedNumberInput() {
    return this._bgpRdIpv4AddressAssignedNumber;
  }

  // bgp_rd_two_byte_as_assigned_number - computed: false, optional: true, required: false
  private _bgpRdTwoByteAsAssignedNumber?: number; 
  public get bgpRdTwoByteAsAssignedNumber() {
    return this.getNumberAttribute('bgp_rd_two_byte_as_assigned_number');
  }
  public set bgpRdTwoByteAsAssignedNumber(value: number) {
    this._bgpRdTwoByteAsAssignedNumber = value;
  }
  public resetBgpRdTwoByteAsAssignedNumber() {
    this._bgpRdTwoByteAsAssignedNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRdTwoByteAsAssignedNumberInput() {
    return this._bgpRdTwoByteAsAssignedNumber;
  }

  // bgp_rd_two_byte_as_number - computed: false, optional: true, required: false
  private _bgpRdTwoByteAsNumber?: number; 
  public get bgpRdTwoByteAsNumber() {
    return this.getNumberAttribute('bgp_rd_two_byte_as_number');
  }
  public set bgpRdTwoByteAsNumber(value: number) {
    this._bgpRdTwoByteAsNumber = value;
  }
  public resetBgpRdTwoByteAsNumber() {
    this._bgpRdTwoByteAsNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRdTwoByteAsNumberInput() {
    return this._bgpRdTwoByteAsNumber;
  }

  // bgp_route_policy_export - computed: false, optional: true, required: false
  private _bgpRoutePolicyExport?: string; 
  public get bgpRoutePolicyExport() {
    return this.getStringAttribute('bgp_route_policy_export');
  }
  public set bgpRoutePolicyExport(value: string) {
    this._bgpRoutePolicyExport = value;
  }
  public resetBgpRoutePolicyExport() {
    this._bgpRoutePolicyExport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRoutePolicyExportInput() {
    return this._bgpRoutePolicyExport;
  }

  // bgp_route_policy_import - computed: false, optional: true, required: false
  private _bgpRoutePolicyImport?: string; 
  public get bgpRoutePolicyImport() {
    return this.getStringAttribute('bgp_route_policy_import');
  }
  public set bgpRoutePolicyImport(value: string) {
    this._bgpRoutePolicyImport = value;
  }
  public resetBgpRoutePolicyImport() {
    this._bgpRoutePolicyImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRoutePolicyImportInput() {
    return this._bgpRoutePolicyImport;
  }

  // bgp_route_target_export_four_byte_as_format - computed: false, optional: true, required: false
  private _bgpRouteTargetExportFourByteAsFormat = new EvpnEviBgpRouteTargetExportFourByteAsFormatList(this, "bgp_route_target_export_four_byte_as_format", false);
  public get bgpRouteTargetExportFourByteAsFormat() {
    return this._bgpRouteTargetExportFourByteAsFormat;
  }
  public putBgpRouteTargetExportFourByteAsFormat(value: EvpnEviBgpRouteTargetExportFourByteAsFormat[] | cdktf.IResolvable) {
    this._bgpRouteTargetExportFourByteAsFormat.internalValue = value;
  }
  public resetBgpRouteTargetExportFourByteAsFormat() {
    this._bgpRouteTargetExportFourByteAsFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRouteTargetExportFourByteAsFormatInput() {
    return this._bgpRouteTargetExportFourByteAsFormat.internalValue;
  }

  // bgp_route_target_export_ipv4_address_format - computed: false, optional: true, required: false
  private _bgpRouteTargetExportIpv4AddressFormat = new EvpnEviBgpRouteTargetExportIpv4AddressFormatList(this, "bgp_route_target_export_ipv4_address_format", false);
  public get bgpRouteTargetExportIpv4AddressFormat() {
    return this._bgpRouteTargetExportIpv4AddressFormat;
  }
  public putBgpRouteTargetExportIpv4AddressFormat(value: EvpnEviBgpRouteTargetExportIpv4AddressFormat[] | cdktf.IResolvable) {
    this._bgpRouteTargetExportIpv4AddressFormat.internalValue = value;
  }
  public resetBgpRouteTargetExportIpv4AddressFormat() {
    this._bgpRouteTargetExportIpv4AddressFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRouteTargetExportIpv4AddressFormatInput() {
    return this._bgpRouteTargetExportIpv4AddressFormat.internalValue;
  }

  // bgp_route_target_export_two_byte_as_format - computed: false, optional: true, required: false
  private _bgpRouteTargetExportTwoByteAsFormat = new EvpnEviBgpRouteTargetExportTwoByteAsFormatList(this, "bgp_route_target_export_two_byte_as_format", false);
  public get bgpRouteTargetExportTwoByteAsFormat() {
    return this._bgpRouteTargetExportTwoByteAsFormat;
  }
  public putBgpRouteTargetExportTwoByteAsFormat(value: EvpnEviBgpRouteTargetExportTwoByteAsFormat[] | cdktf.IResolvable) {
    this._bgpRouteTargetExportTwoByteAsFormat.internalValue = value;
  }
  public resetBgpRouteTargetExportTwoByteAsFormat() {
    this._bgpRouteTargetExportTwoByteAsFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRouteTargetExportTwoByteAsFormatInput() {
    return this._bgpRouteTargetExportTwoByteAsFormat.internalValue;
  }

  // bgp_route_target_import_four_byte_as_format - computed: false, optional: true, required: false
  private _bgpRouteTargetImportFourByteAsFormat = new EvpnEviBgpRouteTargetImportFourByteAsFormatList(this, "bgp_route_target_import_four_byte_as_format", false);
  public get bgpRouteTargetImportFourByteAsFormat() {
    return this._bgpRouteTargetImportFourByteAsFormat;
  }
  public putBgpRouteTargetImportFourByteAsFormat(value: EvpnEviBgpRouteTargetImportFourByteAsFormat[] | cdktf.IResolvable) {
    this._bgpRouteTargetImportFourByteAsFormat.internalValue = value;
  }
  public resetBgpRouteTargetImportFourByteAsFormat() {
    this._bgpRouteTargetImportFourByteAsFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRouteTargetImportFourByteAsFormatInput() {
    return this._bgpRouteTargetImportFourByteAsFormat.internalValue;
  }

  // bgp_route_target_import_ipv4_address_format - computed: false, optional: true, required: false
  private _bgpRouteTargetImportIpv4AddressFormat = new EvpnEviBgpRouteTargetImportIpv4AddressFormatList(this, "bgp_route_target_import_ipv4_address_format", false);
  public get bgpRouteTargetImportIpv4AddressFormat() {
    return this._bgpRouteTargetImportIpv4AddressFormat;
  }
  public putBgpRouteTargetImportIpv4AddressFormat(value: EvpnEviBgpRouteTargetImportIpv4AddressFormat[] | cdktf.IResolvable) {
    this._bgpRouteTargetImportIpv4AddressFormat.internalValue = value;
  }
  public resetBgpRouteTargetImportIpv4AddressFormat() {
    this._bgpRouteTargetImportIpv4AddressFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRouteTargetImportIpv4AddressFormatInput() {
    return this._bgpRouteTargetImportIpv4AddressFormat.internalValue;
  }

  // bgp_route_target_import_two_byte_as_format - computed: false, optional: true, required: false
  private _bgpRouteTargetImportTwoByteAsFormat = new EvpnEviBgpRouteTargetImportTwoByteAsFormatList(this, "bgp_route_target_import_two_byte_as_format", false);
  public get bgpRouteTargetImportTwoByteAsFormat() {
    return this._bgpRouteTargetImportTwoByteAsFormat;
  }
  public putBgpRouteTargetImportTwoByteAsFormat(value: EvpnEviBgpRouteTargetImportTwoByteAsFormat[] | cdktf.IResolvable) {
    this._bgpRouteTargetImportTwoByteAsFormat.internalValue = value;
  }
  public resetBgpRouteTargetImportTwoByteAsFormat() {
    this._bgpRouteTargetImportTwoByteAsFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRouteTargetImportTwoByteAsFormatInput() {
    return this._bgpRouteTargetImportTwoByteAsFormat.internalValue;
  }

  // control_word_disable - computed: false, optional: true, required: false
  private _controlWordDisable?: boolean | cdktf.IResolvable; 
  public get controlWordDisable() {
    return this.getBooleanAttribute('control_word_disable');
  }
  public set controlWordDisable(value: boolean | cdktf.IResolvable) {
    this._controlWordDisable = value;
  }
  public resetControlWordDisable() {
    this._controlWordDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlWordDisableInput() {
    return this._controlWordDisable;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
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

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // etree - computed: false, optional: true, required: false
  private _etree?: boolean | cdktf.IResolvable; 
  public get etree() {
    return this.getBooleanAttribute('etree');
  }
  public set etree(value: boolean | cdktf.IResolvable) {
    this._etree = value;
  }
  public resetEtree() {
    this._etree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etreeInput() {
    return this._etree;
  }

  // etree_leaf - computed: false, optional: true, required: false
  private _etreeLeaf?: boolean | cdktf.IResolvable; 
  public get etreeLeaf() {
    return this.getBooleanAttribute('etree_leaf');
  }
  public set etreeLeaf(value: boolean | cdktf.IResolvable) {
    this._etreeLeaf = value;
  }
  public resetEtreeLeaf() {
    this._etreeLeaf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etreeLeafInput() {
    return this._etreeLeaf;
  }

  // etree_rt_leaf - computed: false, optional: true, required: false
  private _etreeRtLeaf?: boolean | cdktf.IResolvable; 
  public get etreeRtLeaf() {
    return this.getBooleanAttribute('etree_rt_leaf');
  }
  public set etreeRtLeaf(value: boolean | cdktf.IResolvable) {
    this._etreeRtLeaf = value;
  }
  public resetEtreeRtLeaf() {
    this._etreeRtLeaf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etreeRtLeafInput() {
    return this._etreeRtLeaf;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // load_balancing - computed: false, optional: true, required: false
  private _loadBalancing?: boolean | cdktf.IResolvable; 
  public get loadBalancing() {
    return this.getBooleanAttribute('load_balancing');
  }
  public set loadBalancing(value: boolean | cdktf.IResolvable) {
    this._loadBalancing = value;
  }
  public resetLoadBalancing() {
    this._loadBalancing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingInput() {
    return this._loadBalancing;
  }

  // load_balancing_flow_label_static - computed: false, optional: true, required: false
  private _loadBalancingFlowLabelStatic?: boolean | cdktf.IResolvable; 
  public get loadBalancingFlowLabelStatic() {
    return this.getBooleanAttribute('load_balancing_flow_label_static');
  }
  public set loadBalancingFlowLabelStatic(value: boolean | cdktf.IResolvable) {
    this._loadBalancingFlowLabelStatic = value;
  }
  public resetLoadBalancingFlowLabelStatic() {
    this._loadBalancingFlowLabelStatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingFlowLabelStaticInput() {
    return this._loadBalancingFlowLabelStatic;
  }

  // unknown_unicast_suppression - computed: false, optional: true, required: false
  private _unknownUnicastSuppression?: boolean | cdktf.IResolvable; 
  public get unknownUnicastSuppression() {
    return this.getBooleanAttribute('unknown_unicast_suppression');
  }
  public set unknownUnicastSuppression(value: boolean | cdktf.IResolvable) {
    this._unknownUnicastSuppression = value;
  }
  public resetUnknownUnicastSuppression() {
    this._unknownUnicastSuppression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownUnicastSuppressionInput() {
    return this._unknownUnicastSuppression;
  }

  // vpn_id - computed: false, optional: false, required: true
  private _vpnId?: number; 
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
  public set vpnId(value: number) {
    this._vpnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advertise_mac: cdktf.booleanToTerraform(this._advertiseMac),
      bgp_rd_four_byte_as_assigned_number: cdktf.numberToTerraform(this._bgpRdFourByteAsAssignedNumber),
      bgp_rd_four_byte_as_number: cdktf.numberToTerraform(this._bgpRdFourByteAsNumber),
      bgp_rd_ipv4_address: cdktf.stringToTerraform(this._bgpRdIpv4Address),
      bgp_rd_ipv4_address_assigned_number: cdktf.numberToTerraform(this._bgpRdIpv4AddressAssignedNumber),
      bgp_rd_two_byte_as_assigned_number: cdktf.numberToTerraform(this._bgpRdTwoByteAsAssignedNumber),
      bgp_rd_two_byte_as_number: cdktf.numberToTerraform(this._bgpRdTwoByteAsNumber),
      bgp_route_policy_export: cdktf.stringToTerraform(this._bgpRoutePolicyExport),
      bgp_route_policy_import: cdktf.stringToTerraform(this._bgpRoutePolicyImport),
      bgp_route_target_export_four_byte_as_format: cdktf.listMapper(evpnEviBgpRouteTargetExportFourByteAsFormatToTerraform, false)(this._bgpRouteTargetExportFourByteAsFormat.internalValue),
      bgp_route_target_export_ipv4_address_format: cdktf.listMapper(evpnEviBgpRouteTargetExportIpv4AddressFormatToTerraform, false)(this._bgpRouteTargetExportIpv4AddressFormat.internalValue),
      bgp_route_target_export_two_byte_as_format: cdktf.listMapper(evpnEviBgpRouteTargetExportTwoByteAsFormatToTerraform, false)(this._bgpRouteTargetExportTwoByteAsFormat.internalValue),
      bgp_route_target_import_four_byte_as_format: cdktf.listMapper(evpnEviBgpRouteTargetImportFourByteAsFormatToTerraform, false)(this._bgpRouteTargetImportFourByteAsFormat.internalValue),
      bgp_route_target_import_ipv4_address_format: cdktf.listMapper(evpnEviBgpRouteTargetImportIpv4AddressFormatToTerraform, false)(this._bgpRouteTargetImportIpv4AddressFormat.internalValue),
      bgp_route_target_import_two_byte_as_format: cdktf.listMapper(evpnEviBgpRouteTargetImportTwoByteAsFormatToTerraform, false)(this._bgpRouteTargetImportTwoByteAsFormat.internalValue),
      control_word_disable: cdktf.booleanToTerraform(this._controlWordDisable),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      etree: cdktf.booleanToTerraform(this._etree),
      etree_leaf: cdktf.booleanToTerraform(this._etreeLeaf),
      etree_rt_leaf: cdktf.booleanToTerraform(this._etreeRtLeaf),
      load_balancing: cdktf.booleanToTerraform(this._loadBalancing),
      load_balancing_flow_label_static: cdktf.booleanToTerraform(this._loadBalancingFlowLabelStatic),
      unknown_unicast_suppression: cdktf.booleanToTerraform(this._unknownUnicastSuppression),
      vpn_id: cdktf.numberToTerraform(this._vpnId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advertise_mac: {
        value: cdktf.booleanToHclTerraform(this._advertiseMac),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp_rd_four_byte_as_assigned_number: {
        value: cdktf.numberToHclTerraform(this._bgpRdFourByteAsAssignedNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgp_rd_four_byte_as_number: {
        value: cdktf.numberToHclTerraform(this._bgpRdFourByteAsNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgp_rd_ipv4_address: {
        value: cdktf.stringToHclTerraform(this._bgpRdIpv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_rd_ipv4_address_assigned_number: {
        value: cdktf.numberToHclTerraform(this._bgpRdIpv4AddressAssignedNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgp_rd_two_byte_as_assigned_number: {
        value: cdktf.numberToHclTerraform(this._bgpRdTwoByteAsAssignedNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgp_rd_two_byte_as_number: {
        value: cdktf.numberToHclTerraform(this._bgpRdTwoByteAsNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgp_route_policy_export: {
        value: cdktf.stringToHclTerraform(this._bgpRoutePolicyExport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_route_policy_import: {
        value: cdktf.stringToHclTerraform(this._bgpRoutePolicyImport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_route_target_export_four_byte_as_format: {
        value: cdktf.listMapperHcl(evpnEviBgpRouteTargetExportFourByteAsFormatToHclTerraform, false)(this._bgpRouteTargetExportFourByteAsFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EvpnEviBgpRouteTargetExportFourByteAsFormatList",
      },
      bgp_route_target_export_ipv4_address_format: {
        value: cdktf.listMapperHcl(evpnEviBgpRouteTargetExportIpv4AddressFormatToHclTerraform, false)(this._bgpRouteTargetExportIpv4AddressFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EvpnEviBgpRouteTargetExportIpv4AddressFormatList",
      },
      bgp_route_target_export_two_byte_as_format: {
        value: cdktf.listMapperHcl(evpnEviBgpRouteTargetExportTwoByteAsFormatToHclTerraform, false)(this._bgpRouteTargetExportTwoByteAsFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EvpnEviBgpRouteTargetExportTwoByteAsFormatList",
      },
      bgp_route_target_import_four_byte_as_format: {
        value: cdktf.listMapperHcl(evpnEviBgpRouteTargetImportFourByteAsFormatToHclTerraform, false)(this._bgpRouteTargetImportFourByteAsFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EvpnEviBgpRouteTargetImportFourByteAsFormatList",
      },
      bgp_route_target_import_ipv4_address_format: {
        value: cdktf.listMapperHcl(evpnEviBgpRouteTargetImportIpv4AddressFormatToHclTerraform, false)(this._bgpRouteTargetImportIpv4AddressFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EvpnEviBgpRouteTargetImportIpv4AddressFormatList",
      },
      bgp_route_target_import_two_byte_as_format: {
        value: cdktf.listMapperHcl(evpnEviBgpRouteTargetImportTwoByteAsFormatToHclTerraform, false)(this._bgpRouteTargetImportTwoByteAsFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EvpnEviBgpRouteTargetImportTwoByteAsFormatList",
      },
      control_word_disable: {
        value: cdktf.booleanToHclTerraform(this._controlWordDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
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
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      etree: {
        value: cdktf.booleanToHclTerraform(this._etree),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      etree_leaf: {
        value: cdktf.booleanToHclTerraform(this._etreeLeaf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      etree_rt_leaf: {
        value: cdktf.booleanToHclTerraform(this._etreeRtLeaf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      load_balancing: {
        value: cdktf.booleanToHclTerraform(this._loadBalancing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      load_balancing_flow_label_static: {
        value: cdktf.booleanToHclTerraform(this._loadBalancingFlowLabelStatic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unknown_unicast_suppression: {
        value: cdktf.booleanToHclTerraform(this._unknownUnicastSuppression),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vpn_id: {
        value: cdktf.numberToHclTerraform(this._vpnId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
