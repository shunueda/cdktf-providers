// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_segment_routing_srv6_evi
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EvpnSegmentRoutingSrv6EviConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure EVPN Instance MAC advertisement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_segment_routing_srv6_evi#advertise_mac EvpnSegmentRoutingSrv6Evi#advertise_mac}
  */
  readonly advertiseMac?: boolean | cdktf.IResolvable;
  /**
  * Four Byte AS number Route Target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_segment_routing_srv6_evi#bgp_route_target_export_four_byte_as_format EvpnSegmentRoutingSrv6Evi#bgp_route_target_export_four_byte_as_format}
  */
  readonly bgpRouteTargetExportFourByteAsFormat?: EvpnSegmentRoutingSrv6EviBgpRouteTargetExportFourByteAsFormat[] | cdktf.IResolvable;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_segment_routing_srv6_evi#bgp_route_target_export_ipv4_address_format EvpnSegmentRoutingSrv6Evi#bgp_route_target_export_ipv4_address_format}
  */
  readonly bgpRouteTargetExportIpv4AddressFormat?: EvpnSegmentRoutingSrv6EviBgpRouteTargetExportIpv4AddressFormat[] | cdktf.IResolvable;
  /**
  * Two Byte AS Number Route Target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_segment_routing_srv6_evi#bgp_route_target_export_two_byte_as_format EvpnSegmentRoutingSrv6Evi#bgp_route_target_export_two_byte_as_format}
  */
  readonly bgpRouteTargetExportTwoByteAsFormat?: EvpnSegmentRoutingSrv6EviBgpRouteTargetExportTwoByteAsFormat[] | cdktf.IResolvable;
  /**
  * Four Byte AS number Route Target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_segment_routing_srv6_evi#bgp_route_target_import_four_byte_as_format EvpnSegmentRoutingSrv6Evi#bgp_route_target_import_four_byte_as_format}
  */
  readonly bgpRouteTargetImportFourByteAsFormat?: EvpnSegmentRoutingSrv6EviBgpRouteTargetImportFourByteAsFormat[] | cdktf.IResolvable;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_segment_routing_srv6_evi#bgp_route_target_import_ipv4_address_format EvpnSegmentRoutingSrv6Evi#bgp_route_target_import_ipv4_address_format}
  */
  readonly bgpRouteTargetImportIpv4AddressFormat?: EvpnSegmentRoutingSrv6EviBgpRouteTargetImportIpv4AddressFormat[] | cdktf.IResolvable;
  /**
  * Two Byte AS Number Route Target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_segment_routing_srv6_evi#bgp_route_target_import_two_byte_as_format EvpnSegmentRoutingSrv6Evi#bgp_route_target_import_two_byte_as_format}
  */
  readonly bgpRouteTargetImportTwoByteAsFormat?: EvpnSegmentRoutingSrv6EviBgpRouteTargetImportTwoByteAsFormat[] | cdktf.IResolvable;
  /**
  * Description for this EVPN Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_segment_routing_srv6_evi#description EvpnSegmentRoutingSrv6Evi#description}
  */
  readonly description?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_segment_routing_srv6_evi#device EvpnSegmentRoutingSrv6Evi#device}
  */
  readonly device?: string;
  /**
  * EVI locator to use for EVPN SID allocation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_segment_routing_srv6_evi#locators EvpnSegmentRoutingSrv6Evi#locators}
  */
  readonly locators?: EvpnSegmentRoutingSrv6EviLocators[] | cdktf.IResolvable;
  /**
  * Configure EVPN Instance VPN ID
  *   - Range: `1`-`65534`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_segment_routing_srv6_evi#vpn_id EvpnSegmentRoutingSrv6Evi#vpn_id}
  */
  readonly vpnId: number;
}
export interface EvpnSegmentRoutingSrv6EviBgpRouteTargetExportFourByteAsFormat {
  /**
  * Four Byte AS number
  *   - Range: `65536`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_segment_routing_srv6_evi#as_number EvpnSegmentRoutingSrv6Evi#as_number}
  */
  readonly asNumber: number;
  /**
  * AS:nn (hex or decimal format)
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_segment_routing_srv6_evi#assigned_number EvpnSegmentRoutingSrv6Evi#assigned_number}
  */
  readonly assignedNumber: number;
}

export function evpnSegmentRoutingSrv6EviBgpRouteTargetExportFourByteAsFormatToTerraform(struct?: EvpnSegmentRoutingSrv6EviBgpRouteTargetExportFourByteAsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_number: cdktf.numberToTerraform(struct!.asNumber),
    assigned_number: cdktf.numberToTerraform(struct!.assignedNumber),
  }
}


export function evpnSegmentRoutingSrv6EviBgpRouteTargetExportFourByteAsFormatToHclTerraform(struct?: EvpnSegmentRoutingSrv6EviBgpRouteTargetExportFourByteAsFormat | cdktf.IResolvable): any {
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

export class EvpnSegmentRoutingSrv6EviBgpRouteTargetExportFourByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EvpnSegmentRoutingSrv6EviBgpRouteTargetExportFourByteAsFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EvpnSegmentRoutingSrv6EviBgpRouteTargetExportFourByteAsFormat | cdktf.IResolvable | undefined) {
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

export class EvpnSegmentRoutingSrv6EviBgpRouteTargetExportFourByteAsFormatList extends cdktf.ComplexList {
  public internalValue? : EvpnSegmentRoutingSrv6EviBgpRouteTargetExportFourByteAsFormat[] | cdktf.IResolvable

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
  public get(index: number): EvpnSegmentRoutingSrv6EviBgpRouteTargetExportFourByteAsFormatOutputReference {
    return new EvpnSegmentRoutingSrv6EviBgpRouteTargetExportFourByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvpnSegmentRoutingSrv6EviBgpRouteTargetExportIpv4AddressFormat {
  /**
  * IP-address:nn (hex or decimal format)
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_segment_routing_srv6_evi#assigned_number EvpnSegmentRoutingSrv6Evi#assigned_number}
  */
  readonly assignedNumber: number;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_segment_routing_srv6_evi#ipv4_address EvpnSegmentRoutingSrv6Evi#ipv4_address}
  */
  readonly ipv4Address: string;
}

export function evpnSegmentRoutingSrv6EviBgpRouteTargetExportIpv4AddressFormatToTerraform(struct?: EvpnSegmentRoutingSrv6EviBgpRouteTargetExportIpv4AddressFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_number: cdktf.numberToTerraform(struct!.assignedNumber),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
  }
}


export function evpnSegmentRoutingSrv6EviBgpRouteTargetExportIpv4AddressFormatToHclTerraform(struct?: EvpnSegmentRoutingSrv6EviBgpRouteTargetExportIpv4AddressFormat | cdktf.IResolvable): any {
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

export class EvpnSegmentRoutingSrv6EviBgpRouteTargetExportIpv4AddressFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EvpnSegmentRoutingSrv6EviBgpRouteTargetExportIpv4AddressFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EvpnSegmentRoutingSrv6EviBgpRouteTargetExportIpv4AddressFormat | cdktf.IResolvable | undefined) {
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

export class EvpnSegmentRoutingSrv6EviBgpRouteTargetExportIpv4AddressFormatList extends cdktf.ComplexList {
  public internalValue? : EvpnSegmentRoutingSrv6EviBgpRouteTargetExportIpv4AddressFormat[] | cdktf.IResolvable

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
  public get(index: number): EvpnSegmentRoutingSrv6EviBgpRouteTargetExportIpv4AddressFormatOutputReference {
    return new EvpnSegmentRoutingSrv6EviBgpRouteTargetExportIpv4AddressFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvpnSegmentRoutingSrv6EviBgpRouteTargetExportTwoByteAsFormat {
  /**
  * Two Byte AS Number
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_segment_routing_srv6_evi#as_number EvpnSegmentRoutingSrv6Evi#as_number}
  */
  readonly asNumber: number;
  /**
  * AS:nn (hex or decimal format)
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_segment_routing_srv6_evi#assigned_number EvpnSegmentRoutingSrv6Evi#assigned_number}
  */
  readonly assignedNumber: number;
}

export function evpnSegmentRoutingSrv6EviBgpRouteTargetExportTwoByteAsFormatToTerraform(struct?: EvpnSegmentRoutingSrv6EviBgpRouteTargetExportTwoByteAsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_number: cdktf.numberToTerraform(struct!.asNumber),
    assigned_number: cdktf.numberToTerraform(struct!.assignedNumber),
  }
}


export function evpnSegmentRoutingSrv6EviBgpRouteTargetExportTwoByteAsFormatToHclTerraform(struct?: EvpnSegmentRoutingSrv6EviBgpRouteTargetExportTwoByteAsFormat | cdktf.IResolvable): any {
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

export class EvpnSegmentRoutingSrv6EviBgpRouteTargetExportTwoByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EvpnSegmentRoutingSrv6EviBgpRouteTargetExportTwoByteAsFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EvpnSegmentRoutingSrv6EviBgpRouteTargetExportTwoByteAsFormat | cdktf.IResolvable | undefined) {
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

export class EvpnSegmentRoutingSrv6EviBgpRouteTargetExportTwoByteAsFormatList extends cdktf.ComplexList {
  public internalValue? : EvpnSegmentRoutingSrv6EviBgpRouteTargetExportTwoByteAsFormat[] | cdktf.IResolvable

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
  public get(index: number): EvpnSegmentRoutingSrv6EviBgpRouteTargetExportTwoByteAsFormatOutputReference {
    return new EvpnSegmentRoutingSrv6EviBgpRouteTargetExportTwoByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvpnSegmentRoutingSrv6EviBgpRouteTargetImportFourByteAsFormat {
  /**
  * Four Byte AS number
  *   - Range: `65536`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_segment_routing_srv6_evi#as_number EvpnSegmentRoutingSrv6Evi#as_number}
  */
  readonly asNumber: number;
  /**
  * AS:nn (hex or decimal format)
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_segment_routing_srv6_evi#assigned_number EvpnSegmentRoutingSrv6Evi#assigned_number}
  */
  readonly assignedNumber: number;
}

export function evpnSegmentRoutingSrv6EviBgpRouteTargetImportFourByteAsFormatToTerraform(struct?: EvpnSegmentRoutingSrv6EviBgpRouteTargetImportFourByteAsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_number: cdktf.numberToTerraform(struct!.asNumber),
    assigned_number: cdktf.numberToTerraform(struct!.assignedNumber),
  }
}


export function evpnSegmentRoutingSrv6EviBgpRouteTargetImportFourByteAsFormatToHclTerraform(struct?: EvpnSegmentRoutingSrv6EviBgpRouteTargetImportFourByteAsFormat | cdktf.IResolvable): any {
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

export class EvpnSegmentRoutingSrv6EviBgpRouteTargetImportFourByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EvpnSegmentRoutingSrv6EviBgpRouteTargetImportFourByteAsFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EvpnSegmentRoutingSrv6EviBgpRouteTargetImportFourByteAsFormat | cdktf.IResolvable | undefined) {
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

export class EvpnSegmentRoutingSrv6EviBgpRouteTargetImportFourByteAsFormatList extends cdktf.ComplexList {
  public internalValue? : EvpnSegmentRoutingSrv6EviBgpRouteTargetImportFourByteAsFormat[] | cdktf.IResolvable

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
  public get(index: number): EvpnSegmentRoutingSrv6EviBgpRouteTargetImportFourByteAsFormatOutputReference {
    return new EvpnSegmentRoutingSrv6EviBgpRouteTargetImportFourByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvpnSegmentRoutingSrv6EviBgpRouteTargetImportIpv4AddressFormat {
  /**
  * IP-address:nn (hex or decimal format)
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_segment_routing_srv6_evi#assigned_number EvpnSegmentRoutingSrv6Evi#assigned_number}
  */
  readonly assignedNumber: number;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_segment_routing_srv6_evi#ipv4_address EvpnSegmentRoutingSrv6Evi#ipv4_address}
  */
  readonly ipv4Address: string;
}

export function evpnSegmentRoutingSrv6EviBgpRouteTargetImportIpv4AddressFormatToTerraform(struct?: EvpnSegmentRoutingSrv6EviBgpRouteTargetImportIpv4AddressFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_number: cdktf.numberToTerraform(struct!.assignedNumber),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
  }
}


export function evpnSegmentRoutingSrv6EviBgpRouteTargetImportIpv4AddressFormatToHclTerraform(struct?: EvpnSegmentRoutingSrv6EviBgpRouteTargetImportIpv4AddressFormat | cdktf.IResolvable): any {
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

export class EvpnSegmentRoutingSrv6EviBgpRouteTargetImportIpv4AddressFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EvpnSegmentRoutingSrv6EviBgpRouteTargetImportIpv4AddressFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EvpnSegmentRoutingSrv6EviBgpRouteTargetImportIpv4AddressFormat | cdktf.IResolvable | undefined) {
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

export class EvpnSegmentRoutingSrv6EviBgpRouteTargetImportIpv4AddressFormatList extends cdktf.ComplexList {
  public internalValue? : EvpnSegmentRoutingSrv6EviBgpRouteTargetImportIpv4AddressFormat[] | cdktf.IResolvable

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
  public get(index: number): EvpnSegmentRoutingSrv6EviBgpRouteTargetImportIpv4AddressFormatOutputReference {
    return new EvpnSegmentRoutingSrv6EviBgpRouteTargetImportIpv4AddressFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvpnSegmentRoutingSrv6EviBgpRouteTargetImportTwoByteAsFormat {
  /**
  * Two Byte AS Number
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_segment_routing_srv6_evi#as_number EvpnSegmentRoutingSrv6Evi#as_number}
  */
  readonly asNumber: number;
  /**
  * AS:nn (hex or decimal format)
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_segment_routing_srv6_evi#assigned_number EvpnSegmentRoutingSrv6Evi#assigned_number}
  */
  readonly assignedNumber: number;
}

export function evpnSegmentRoutingSrv6EviBgpRouteTargetImportTwoByteAsFormatToTerraform(struct?: EvpnSegmentRoutingSrv6EviBgpRouteTargetImportTwoByteAsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_number: cdktf.numberToTerraform(struct!.asNumber),
    assigned_number: cdktf.numberToTerraform(struct!.assignedNumber),
  }
}


export function evpnSegmentRoutingSrv6EviBgpRouteTargetImportTwoByteAsFormatToHclTerraform(struct?: EvpnSegmentRoutingSrv6EviBgpRouteTargetImportTwoByteAsFormat | cdktf.IResolvable): any {
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

export class EvpnSegmentRoutingSrv6EviBgpRouteTargetImportTwoByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EvpnSegmentRoutingSrv6EviBgpRouteTargetImportTwoByteAsFormat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EvpnSegmentRoutingSrv6EviBgpRouteTargetImportTwoByteAsFormat | cdktf.IResolvable | undefined) {
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

export class EvpnSegmentRoutingSrv6EviBgpRouteTargetImportTwoByteAsFormatList extends cdktf.ComplexList {
  public internalValue? : EvpnSegmentRoutingSrv6EviBgpRouteTargetImportTwoByteAsFormat[] | cdktf.IResolvable

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
  public get(index: number): EvpnSegmentRoutingSrv6EviBgpRouteTargetImportTwoByteAsFormatOutputReference {
    return new EvpnSegmentRoutingSrv6EviBgpRouteTargetImportTwoByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EvpnSegmentRoutingSrv6EviLocators {
  /**
  * EVI locator to use for EVPN SID allocation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_segment_routing_srv6_evi#locator_name EvpnSegmentRoutingSrv6Evi#locator_name}
  */
  readonly locatorName: string;
  /**
  * Enable uSID wide function knob for the locator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_segment_routing_srv6_evi#usid_allocation_wide_local_id_block EvpnSegmentRoutingSrv6Evi#usid_allocation_wide_local_id_block}
  */
  readonly usidAllocationWideLocalIdBlock?: boolean | cdktf.IResolvable;
}

export function evpnSegmentRoutingSrv6EviLocatorsToTerraform(struct?: EvpnSegmentRoutingSrv6EviLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locator_name: cdktf.stringToTerraform(struct!.locatorName),
    usid_allocation_wide_local_id_block: cdktf.booleanToTerraform(struct!.usidAllocationWideLocalIdBlock),
  }
}


export function evpnSegmentRoutingSrv6EviLocatorsToHclTerraform(struct?: EvpnSegmentRoutingSrv6EviLocators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locator_name: {
      value: cdktf.stringToHclTerraform(struct!.locatorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usid_allocation_wide_local_id_block: {
      value: cdktf.booleanToHclTerraform(struct!.usidAllocationWideLocalIdBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EvpnSegmentRoutingSrv6EviLocatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EvpnSegmentRoutingSrv6EviLocators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locatorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.locatorName = this._locatorName;
    }
    if (this._usidAllocationWideLocalIdBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.usidAllocationWideLocalIdBlock = this._usidAllocationWideLocalIdBlock;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EvpnSegmentRoutingSrv6EviLocators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locatorName = undefined;
      this._usidAllocationWideLocalIdBlock = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locatorName = value.locatorName;
      this._usidAllocationWideLocalIdBlock = value.usidAllocationWideLocalIdBlock;
    }
  }

  // locator_name - computed: false, optional: false, required: true
  private _locatorName?: string; 
  public get locatorName() {
    return this.getStringAttribute('locator_name');
  }
  public set locatorName(value: string) {
    this._locatorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorNameInput() {
    return this._locatorName;
  }

  // usid_allocation_wide_local_id_block - computed: false, optional: true, required: false
  private _usidAllocationWideLocalIdBlock?: boolean | cdktf.IResolvable; 
  public get usidAllocationWideLocalIdBlock() {
    return this.getBooleanAttribute('usid_allocation_wide_local_id_block');
  }
  public set usidAllocationWideLocalIdBlock(value: boolean | cdktf.IResolvable) {
    this._usidAllocationWideLocalIdBlock = value;
  }
  public resetUsidAllocationWideLocalIdBlock() {
    this._usidAllocationWideLocalIdBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usidAllocationWideLocalIdBlockInput() {
    return this._usidAllocationWideLocalIdBlock;
  }
}

export class EvpnSegmentRoutingSrv6EviLocatorsList extends cdktf.ComplexList {
  public internalValue? : EvpnSegmentRoutingSrv6EviLocators[] | cdktf.IResolvable

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
  public get(index: number): EvpnSegmentRoutingSrv6EviLocatorsOutputReference {
    return new EvpnSegmentRoutingSrv6EviLocatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_segment_routing_srv6_evi iosxr_evpn_segment_routing_srv6_evi}
*/
export class EvpnSegmentRoutingSrv6Evi extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_evpn_segment_routing_srv6_evi";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EvpnSegmentRoutingSrv6Evi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EvpnSegmentRoutingSrv6Evi to import
  * @param importFromId The id of the existing EvpnSegmentRoutingSrv6Evi that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_segment_routing_srv6_evi#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EvpnSegmentRoutingSrv6Evi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_evpn_segment_routing_srv6_evi", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/evpn_segment_routing_srv6_evi iosxr_evpn_segment_routing_srv6_evi} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EvpnSegmentRoutingSrv6EviConfig
  */
  public constructor(scope: Construct, id: string, config: EvpnSegmentRoutingSrv6EviConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_evpn_segment_routing_srv6_evi',
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
    this._bgpRouteTargetExportFourByteAsFormat.internalValue = config.bgpRouteTargetExportFourByteAsFormat;
    this._bgpRouteTargetExportIpv4AddressFormat.internalValue = config.bgpRouteTargetExportIpv4AddressFormat;
    this._bgpRouteTargetExportTwoByteAsFormat.internalValue = config.bgpRouteTargetExportTwoByteAsFormat;
    this._bgpRouteTargetImportFourByteAsFormat.internalValue = config.bgpRouteTargetImportFourByteAsFormat;
    this._bgpRouteTargetImportIpv4AddressFormat.internalValue = config.bgpRouteTargetImportIpv4AddressFormat;
    this._bgpRouteTargetImportTwoByteAsFormat.internalValue = config.bgpRouteTargetImportTwoByteAsFormat;
    this._description = config.description;
    this._device = config.device;
    this._locators.internalValue = config.locators;
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

  // bgp_route_target_export_four_byte_as_format - computed: false, optional: true, required: false
  private _bgpRouteTargetExportFourByteAsFormat = new EvpnSegmentRoutingSrv6EviBgpRouteTargetExportFourByteAsFormatList(this, "bgp_route_target_export_four_byte_as_format", false);
  public get bgpRouteTargetExportFourByteAsFormat() {
    return this._bgpRouteTargetExportFourByteAsFormat;
  }
  public putBgpRouteTargetExportFourByteAsFormat(value: EvpnSegmentRoutingSrv6EviBgpRouteTargetExportFourByteAsFormat[] | cdktf.IResolvable) {
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
  private _bgpRouteTargetExportIpv4AddressFormat = new EvpnSegmentRoutingSrv6EviBgpRouteTargetExportIpv4AddressFormatList(this, "bgp_route_target_export_ipv4_address_format", false);
  public get bgpRouteTargetExportIpv4AddressFormat() {
    return this._bgpRouteTargetExportIpv4AddressFormat;
  }
  public putBgpRouteTargetExportIpv4AddressFormat(value: EvpnSegmentRoutingSrv6EviBgpRouteTargetExportIpv4AddressFormat[] | cdktf.IResolvable) {
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
  private _bgpRouteTargetExportTwoByteAsFormat = new EvpnSegmentRoutingSrv6EviBgpRouteTargetExportTwoByteAsFormatList(this, "bgp_route_target_export_two_byte_as_format", false);
  public get bgpRouteTargetExportTwoByteAsFormat() {
    return this._bgpRouteTargetExportTwoByteAsFormat;
  }
  public putBgpRouteTargetExportTwoByteAsFormat(value: EvpnSegmentRoutingSrv6EviBgpRouteTargetExportTwoByteAsFormat[] | cdktf.IResolvable) {
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
  private _bgpRouteTargetImportFourByteAsFormat = new EvpnSegmentRoutingSrv6EviBgpRouteTargetImportFourByteAsFormatList(this, "bgp_route_target_import_four_byte_as_format", false);
  public get bgpRouteTargetImportFourByteAsFormat() {
    return this._bgpRouteTargetImportFourByteAsFormat;
  }
  public putBgpRouteTargetImportFourByteAsFormat(value: EvpnSegmentRoutingSrv6EviBgpRouteTargetImportFourByteAsFormat[] | cdktf.IResolvable) {
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
  private _bgpRouteTargetImportIpv4AddressFormat = new EvpnSegmentRoutingSrv6EviBgpRouteTargetImportIpv4AddressFormatList(this, "bgp_route_target_import_ipv4_address_format", false);
  public get bgpRouteTargetImportIpv4AddressFormat() {
    return this._bgpRouteTargetImportIpv4AddressFormat;
  }
  public putBgpRouteTargetImportIpv4AddressFormat(value: EvpnSegmentRoutingSrv6EviBgpRouteTargetImportIpv4AddressFormat[] | cdktf.IResolvable) {
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
  private _bgpRouteTargetImportTwoByteAsFormat = new EvpnSegmentRoutingSrv6EviBgpRouteTargetImportTwoByteAsFormatList(this, "bgp_route_target_import_two_byte_as_format", false);
  public get bgpRouteTargetImportTwoByteAsFormat() {
    return this._bgpRouteTargetImportTwoByteAsFormat;
  }
  public putBgpRouteTargetImportTwoByteAsFormat(value: EvpnSegmentRoutingSrv6EviBgpRouteTargetImportTwoByteAsFormat[] | cdktf.IResolvable) {
    this._bgpRouteTargetImportTwoByteAsFormat.internalValue = value;
  }
  public resetBgpRouteTargetImportTwoByteAsFormat() {
    this._bgpRouteTargetImportTwoByteAsFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRouteTargetImportTwoByteAsFormatInput() {
    return this._bgpRouteTargetImportTwoByteAsFormat.internalValue;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // locators - computed: false, optional: true, required: false
  private _locators = new EvpnSegmentRoutingSrv6EviLocatorsList(this, "locators", false);
  public get locators() {
    return this._locators;
  }
  public putLocators(value: EvpnSegmentRoutingSrv6EviLocators[] | cdktf.IResolvable) {
    this._locators.internalValue = value;
  }
  public resetLocators() {
    this._locators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorsInput() {
    return this._locators.internalValue;
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
      bgp_route_target_export_four_byte_as_format: cdktf.listMapper(evpnSegmentRoutingSrv6EviBgpRouteTargetExportFourByteAsFormatToTerraform, false)(this._bgpRouteTargetExportFourByteAsFormat.internalValue),
      bgp_route_target_export_ipv4_address_format: cdktf.listMapper(evpnSegmentRoutingSrv6EviBgpRouteTargetExportIpv4AddressFormatToTerraform, false)(this._bgpRouteTargetExportIpv4AddressFormat.internalValue),
      bgp_route_target_export_two_byte_as_format: cdktf.listMapper(evpnSegmentRoutingSrv6EviBgpRouteTargetExportTwoByteAsFormatToTerraform, false)(this._bgpRouteTargetExportTwoByteAsFormat.internalValue),
      bgp_route_target_import_four_byte_as_format: cdktf.listMapper(evpnSegmentRoutingSrv6EviBgpRouteTargetImportFourByteAsFormatToTerraform, false)(this._bgpRouteTargetImportFourByteAsFormat.internalValue),
      bgp_route_target_import_ipv4_address_format: cdktf.listMapper(evpnSegmentRoutingSrv6EviBgpRouteTargetImportIpv4AddressFormatToTerraform, false)(this._bgpRouteTargetImportIpv4AddressFormat.internalValue),
      bgp_route_target_import_two_byte_as_format: cdktf.listMapper(evpnSegmentRoutingSrv6EviBgpRouteTargetImportTwoByteAsFormatToTerraform, false)(this._bgpRouteTargetImportTwoByteAsFormat.internalValue),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      locators: cdktf.listMapper(evpnSegmentRoutingSrv6EviLocatorsToTerraform, false)(this._locators.internalValue),
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
      bgp_route_target_export_four_byte_as_format: {
        value: cdktf.listMapperHcl(evpnSegmentRoutingSrv6EviBgpRouteTargetExportFourByteAsFormatToHclTerraform, false)(this._bgpRouteTargetExportFourByteAsFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EvpnSegmentRoutingSrv6EviBgpRouteTargetExportFourByteAsFormatList",
      },
      bgp_route_target_export_ipv4_address_format: {
        value: cdktf.listMapperHcl(evpnSegmentRoutingSrv6EviBgpRouteTargetExportIpv4AddressFormatToHclTerraform, false)(this._bgpRouteTargetExportIpv4AddressFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EvpnSegmentRoutingSrv6EviBgpRouteTargetExportIpv4AddressFormatList",
      },
      bgp_route_target_export_two_byte_as_format: {
        value: cdktf.listMapperHcl(evpnSegmentRoutingSrv6EviBgpRouteTargetExportTwoByteAsFormatToHclTerraform, false)(this._bgpRouteTargetExportTwoByteAsFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EvpnSegmentRoutingSrv6EviBgpRouteTargetExportTwoByteAsFormatList",
      },
      bgp_route_target_import_four_byte_as_format: {
        value: cdktf.listMapperHcl(evpnSegmentRoutingSrv6EviBgpRouteTargetImportFourByteAsFormatToHclTerraform, false)(this._bgpRouteTargetImportFourByteAsFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EvpnSegmentRoutingSrv6EviBgpRouteTargetImportFourByteAsFormatList",
      },
      bgp_route_target_import_ipv4_address_format: {
        value: cdktf.listMapperHcl(evpnSegmentRoutingSrv6EviBgpRouteTargetImportIpv4AddressFormatToHclTerraform, false)(this._bgpRouteTargetImportIpv4AddressFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EvpnSegmentRoutingSrv6EviBgpRouteTargetImportIpv4AddressFormatList",
      },
      bgp_route_target_import_two_byte_as_format: {
        value: cdktf.listMapperHcl(evpnSegmentRoutingSrv6EviBgpRouteTargetImportTwoByteAsFormatToHclTerraform, false)(this._bgpRouteTargetImportTwoByteAsFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EvpnSegmentRoutingSrv6EviBgpRouteTargetImportTwoByteAsFormatList",
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
      locators: {
        value: cdktf.listMapperHcl(evpnSegmentRoutingSrv6EviLocatorsToHclTerraform, false)(this._locators.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EvpnSegmentRoutingSrv6EviLocatorsList",
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
