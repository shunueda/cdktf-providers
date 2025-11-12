// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VrfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#delete_mode Vrf#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A description for the VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#description Vrf#description}
  */
  readonly description?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#device Vrf#device}
  */
  readonly device?: string;
  /**
  * Flowspec sub address family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#ipv4_flowspec Vrf#ipv4_flowspec}
  */
  readonly ipv4Flowspec?: boolean | cdktf.IResolvable;
  /**
  * Multicast topology
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#ipv4_multicast Vrf#ipv4_multicast}
  */
  readonly ipv4Multicast?: boolean | cdktf.IResolvable;
  /**
  * Unicast sub address family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#ipv4_unicast Vrf#ipv4_unicast}
  */
  readonly ipv4Unicast?: boolean | cdktf.IResolvable;
  /**
  * Use route-policy for export
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#ipv4_unicast_export_route_policy Vrf#ipv4_unicast_export_route_policy}
  */
  readonly ipv4UnicastExportRoutePolicy?: string;
  /**
  * 4-byte AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#ipv4_unicast_export_route_target_four_byte_as_format Vrf#ipv4_unicast_export_route_target_four_byte_as_format}
  */
  readonly ipv4UnicastExportRouteTargetFourByteAsFormat?: VrfIpv4UnicastExportRouteTargetFourByteAsFormat[] | cdktf.IResolvable;
  /**
  * ipv4 address route target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#ipv4_unicast_export_route_target_ip_address_format Vrf#ipv4_unicast_export_route_target_ip_address_format}
  */
  readonly ipv4UnicastExportRouteTargetIpAddressFormat?: VrfIpv4UnicastExportRouteTargetIpAddressFormat[] | cdktf.IResolvable;
  /**
  * 2-byte AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#ipv4_unicast_export_route_target_two_byte_as_format Vrf#ipv4_unicast_export_route_target_two_byte_as_format}
  */
  readonly ipv4UnicastExportRouteTargetTwoByteAsFormat?: VrfIpv4UnicastExportRouteTargetTwoByteAsFormat[] | cdktf.IResolvable;
  /**
  * Use route-policy for import filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#ipv4_unicast_import_route_policy Vrf#ipv4_unicast_import_route_policy}
  */
  readonly ipv4UnicastImportRoutePolicy?: string;
  /**
  * 4-byte AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#ipv4_unicast_import_route_target_four_byte_as_format Vrf#ipv4_unicast_import_route_target_four_byte_as_format}
  */
  readonly ipv4UnicastImportRouteTargetFourByteAsFormat?: VrfIpv4UnicastImportRouteTargetFourByteAsFormat[] | cdktf.IResolvable;
  /**
  * ipv4 address route target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#ipv4_unicast_import_route_target_ip_address_format Vrf#ipv4_unicast_import_route_target_ip_address_format}
  */
  readonly ipv4UnicastImportRouteTargetIpAddressFormat?: VrfIpv4UnicastImportRouteTargetIpAddressFormat[] | cdktf.IResolvable;
  /**
  * 2-byte AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#ipv4_unicast_import_route_target_two_byte_as_format Vrf#ipv4_unicast_import_route_target_two_byte_as_format}
  */
  readonly ipv4UnicastImportRouteTargetTwoByteAsFormat?: VrfIpv4UnicastImportRouteTargetTwoByteAsFormat[] | cdktf.IResolvable;
  /**
  * Flowspec sub address family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#ipv6_flowspec Vrf#ipv6_flowspec}
  */
  readonly ipv6Flowspec?: boolean | cdktf.IResolvable;
  /**
  * Multicast topology
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#ipv6_multicast Vrf#ipv6_multicast}
  */
  readonly ipv6Multicast?: boolean | cdktf.IResolvable;
  /**
  * Unicast sub address family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#ipv6_unicast Vrf#ipv6_unicast}
  */
  readonly ipv6Unicast?: boolean | cdktf.IResolvable;
  /**
  * Use route-policy for export
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#ipv6_unicast_export_route_policy Vrf#ipv6_unicast_export_route_policy}
  */
  readonly ipv6UnicastExportRoutePolicy?: string;
  /**
  * 4-byte AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#ipv6_unicast_export_route_target_four_byte_as_format Vrf#ipv6_unicast_export_route_target_four_byte_as_format}
  */
  readonly ipv6UnicastExportRouteTargetFourByteAsFormat?: VrfIpv6UnicastExportRouteTargetFourByteAsFormat[] | cdktf.IResolvable;
  /**
  * ipv4 address route target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#ipv6_unicast_export_route_target_ip_address_format Vrf#ipv6_unicast_export_route_target_ip_address_format}
  */
  readonly ipv6UnicastExportRouteTargetIpAddressFormat?: VrfIpv6UnicastExportRouteTargetIpAddressFormat[] | cdktf.IResolvable;
  /**
  * 2-byte AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#ipv6_unicast_export_route_target_two_byte_as_format Vrf#ipv6_unicast_export_route_target_two_byte_as_format}
  */
  readonly ipv6UnicastExportRouteTargetTwoByteAsFormat?: VrfIpv6UnicastExportRouteTargetTwoByteAsFormat[] | cdktf.IResolvable;
  /**
  * Use route-policy for import filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#ipv6_unicast_import_route_policy Vrf#ipv6_unicast_import_route_policy}
  */
  readonly ipv6UnicastImportRoutePolicy?: string;
  /**
  * 4-byte AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#ipv6_unicast_import_route_target_four_byte_as_format Vrf#ipv6_unicast_import_route_target_four_byte_as_format}
  */
  readonly ipv6UnicastImportRouteTargetFourByteAsFormat?: VrfIpv6UnicastImportRouteTargetFourByteAsFormat[] | cdktf.IResolvable;
  /**
  * ipv4 address route target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#ipv6_unicast_import_route_target_ip_address_format Vrf#ipv6_unicast_import_route_target_ip_address_format}
  */
  readonly ipv6UnicastImportRouteTargetIpAddressFormat?: VrfIpv6UnicastImportRouteTargetIpAddressFormat[] | cdktf.IResolvable;
  /**
  * 2-byte AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#ipv6_unicast_import_route_target_two_byte_as_format Vrf#ipv6_unicast_import_route_target_two_byte_as_format}
  */
  readonly ipv6UnicastImportRouteTargetTwoByteAsFormat?: VrfIpv6UnicastImportRouteTargetTwoByteAsFormat[] | cdktf.IResolvable;
  /**
  * ASN4:index (hex or decimal format)
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#rd_four_byte_as_index Vrf#rd_four_byte_as_index}
  */
  readonly rdFourByteAsIndex?: number;
  /**
  * 4-byte AS number in asplain format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#rd_four_byte_as_number Vrf#rd_four_byte_as_number}
  */
  readonly rdFourByteAsNumber?: string;
  /**
  * IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#rd_ipv4_address Vrf#rd_ipv4_address}
  */
  readonly rdIpv4Address?: string;
  /**
  * IPv4Address:index (hex or decimal format)
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#rd_ipv4_address_index Vrf#rd_ipv4_address_index}
  */
  readonly rdIpv4AddressIndex?: number;
  /**
  * ASN2:index (hex or decimal format)
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#rd_two_byte_as_index Vrf#rd_two_byte_as_index}
  */
  readonly rdTwoByteAsIndex?: number;
  /**
  * 2-byte AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#rd_two_byte_as_number Vrf#rd_two_byte_as_number}
  */
  readonly rdTwoByteAsNumber?: string;
  /**
  * VPN ID, (OUI:VPN-Index) format(hex), 4 bytes VPN_Index Part
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#vpn_id Vrf#vpn_id}
  */
  readonly vpnId?: string;
  /**
  * VRF name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#vrf_name Vrf#vrf_name}
  */
  readonly vrfName: string;
}
export interface VrfIpv4UnicastExportRouteTargetFourByteAsFormat {
  /**
  * ASN4:index (hex or decimal format)
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#asn4_index Vrf#asn4_index}
  */
  readonly asn4Index: number;
  /**
  * 4-byte AS number
  *   - Range: `65536`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#four_byte_as_number Vrf#four_byte_as_number}
  */
  readonly fourByteAsNumber: number;
  /**
  * These are stitching RTs
  *   - Choices: `disable`, `enable`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#stitching Vrf#stitching}
  */
  readonly stitching: string;
}

export function vrfIpv4UnicastExportRouteTargetFourByteAsFormatToTerraform(struct?: VrfIpv4UnicastExportRouteTargetFourByteAsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn4_index: cdktf.numberToTerraform(struct!.asn4Index),
    four_byte_as_number: cdktf.numberToTerraform(struct!.fourByteAsNumber),
    stitching: cdktf.stringToTerraform(struct!.stitching),
  }
}


export function vrfIpv4UnicastExportRouteTargetFourByteAsFormatToHclTerraform(struct?: VrfIpv4UnicastExportRouteTargetFourByteAsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn4_index: {
      value: cdktf.numberToHclTerraform(struct!.asn4Index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    four_byte_as_number: {
      value: cdktf.numberToHclTerraform(struct!.fourByteAsNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stitching: {
      value: cdktf.stringToHclTerraform(struct!.stitching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfIpv4UnicastExportRouteTargetFourByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv4UnicastExportRouteTargetFourByteAsFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn4Index !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn4Index = this._asn4Index;
    }
    if (this._fourByteAsNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.fourByteAsNumber = this._fourByteAsNumber;
    }
    if (this._stitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.stitching = this._stitching;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv4UnicastExportRouteTargetFourByteAsFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asn4Index = undefined;
      this._fourByteAsNumber = undefined;
      this._stitching = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asn4Index = value.asn4Index;
      this._fourByteAsNumber = value.fourByteAsNumber;
      this._stitching = value.stitching;
    }
  }

  // asn4_index - computed: false, optional: false, required: true
  private _asn4Index?: number; 
  public get asn4Index() {
    return this.getNumberAttribute('asn4_index');
  }
  public set asn4Index(value: number) {
    this._asn4Index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asn4IndexInput() {
    return this._asn4Index;
  }

  // four_byte_as_number - computed: false, optional: false, required: true
  private _fourByteAsNumber?: number; 
  public get fourByteAsNumber() {
    return this.getNumberAttribute('four_byte_as_number');
  }
  public set fourByteAsNumber(value: number) {
    this._fourByteAsNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fourByteAsNumberInput() {
    return this._fourByteAsNumber;
  }

  // stitching - computed: false, optional: false, required: true
  private _stitching?: string; 
  public get stitching() {
    return this.getStringAttribute('stitching');
  }
  public set stitching(value: string) {
    this._stitching = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stitchingInput() {
    return this._stitching;
  }
}

export class VrfIpv4UnicastExportRouteTargetFourByteAsFormatList extends cdktf.ComplexList {
  public internalValue? : VrfIpv4UnicastExportRouteTargetFourByteAsFormat[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv4UnicastExportRouteTargetFourByteAsFormatOutputReference {
    return new VrfIpv4UnicastExportRouteTargetFourByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfIpv4UnicastExportRouteTargetIpAddressFormat {
  /**
  * IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#ipv4_address Vrf#ipv4_address}
  */
  readonly ipv4Address: string;
  /**
  * IPv4Address:index (hex or decimal format)
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#ipv4_address_index Vrf#ipv4_address_index}
  */
  readonly ipv4AddressIndex: number;
  /**
  * These are stitching RTs
  *   - Choices: `disable`, `enable`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#stitching Vrf#stitching}
  */
  readonly stitching: string;
}

export function vrfIpv4UnicastExportRouteTargetIpAddressFormatToTerraform(struct?: VrfIpv4UnicastExportRouteTargetIpAddressFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_address_index: cdktf.numberToTerraform(struct!.ipv4AddressIndex),
    stitching: cdktf.stringToTerraform(struct!.stitching),
  }
}


export function vrfIpv4UnicastExportRouteTargetIpAddressFormatToHclTerraform(struct?: VrfIpv4UnicastExportRouteTargetIpAddressFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address_index: {
      value: cdktf.numberToHclTerraform(struct!.ipv4AddressIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stitching: {
      value: cdktf.stringToHclTerraform(struct!.stitching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfIpv4UnicastExportRouteTargetIpAddressFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv4UnicastExportRouteTargetIpAddressFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4AddressIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AddressIndex = this._ipv4AddressIndex;
    }
    if (this._stitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.stitching = this._stitching;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv4UnicastExportRouteTargetIpAddressFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Address = undefined;
      this._ipv4AddressIndex = undefined;
      this._stitching = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Address = value.ipv4Address;
      this._ipv4AddressIndex = value.ipv4AddressIndex;
      this._stitching = value.stitching;
    }
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

  // ipv4_address_index - computed: false, optional: false, required: true
  private _ipv4AddressIndex?: number; 
  public get ipv4AddressIndex() {
    return this.getNumberAttribute('ipv4_address_index');
  }
  public set ipv4AddressIndex(value: number) {
    this._ipv4AddressIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressIndexInput() {
    return this._ipv4AddressIndex;
  }

  // stitching - computed: false, optional: false, required: true
  private _stitching?: string; 
  public get stitching() {
    return this.getStringAttribute('stitching');
  }
  public set stitching(value: string) {
    this._stitching = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stitchingInput() {
    return this._stitching;
  }
}

export class VrfIpv4UnicastExportRouteTargetIpAddressFormatList extends cdktf.ComplexList {
  public internalValue? : VrfIpv4UnicastExportRouteTargetIpAddressFormat[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv4UnicastExportRouteTargetIpAddressFormatOutputReference {
    return new VrfIpv4UnicastExportRouteTargetIpAddressFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfIpv4UnicastExportRouteTargetTwoByteAsFormat {
  /**
  * ASN2:index (hex or decimal format)
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#asn2_index Vrf#asn2_index}
  */
  readonly asn2Index: number;
  /**
  * These are stitching RTs
  *   - Choices: `disable`, `enable`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#stitching Vrf#stitching}
  */
  readonly stitching: string;
  /**
  * 2-byte AS number
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#two_byte_as_number Vrf#two_byte_as_number}
  */
  readonly twoByteAsNumber: number;
}

export function vrfIpv4UnicastExportRouteTargetTwoByteAsFormatToTerraform(struct?: VrfIpv4UnicastExportRouteTargetTwoByteAsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn2_index: cdktf.numberToTerraform(struct!.asn2Index),
    stitching: cdktf.stringToTerraform(struct!.stitching),
    two_byte_as_number: cdktf.numberToTerraform(struct!.twoByteAsNumber),
  }
}


export function vrfIpv4UnicastExportRouteTargetTwoByteAsFormatToHclTerraform(struct?: VrfIpv4UnicastExportRouteTargetTwoByteAsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn2_index: {
      value: cdktf.numberToHclTerraform(struct!.asn2Index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stitching: {
      value: cdktf.stringToHclTerraform(struct!.stitching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    two_byte_as_number: {
      value: cdktf.numberToHclTerraform(struct!.twoByteAsNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfIpv4UnicastExportRouteTargetTwoByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv4UnicastExportRouteTargetTwoByteAsFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn2Index !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn2Index = this._asn2Index;
    }
    if (this._stitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.stitching = this._stitching;
    }
    if (this._twoByteAsNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.twoByteAsNumber = this._twoByteAsNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv4UnicastExportRouteTargetTwoByteAsFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asn2Index = undefined;
      this._stitching = undefined;
      this._twoByteAsNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asn2Index = value.asn2Index;
      this._stitching = value.stitching;
      this._twoByteAsNumber = value.twoByteAsNumber;
    }
  }

  // asn2_index - computed: false, optional: false, required: true
  private _asn2Index?: number; 
  public get asn2Index() {
    return this.getNumberAttribute('asn2_index');
  }
  public set asn2Index(value: number) {
    this._asn2Index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asn2IndexInput() {
    return this._asn2Index;
  }

  // stitching - computed: false, optional: false, required: true
  private _stitching?: string; 
  public get stitching() {
    return this.getStringAttribute('stitching');
  }
  public set stitching(value: string) {
    this._stitching = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stitchingInput() {
    return this._stitching;
  }

  // two_byte_as_number - computed: false, optional: false, required: true
  private _twoByteAsNumber?: number; 
  public get twoByteAsNumber() {
    return this.getNumberAttribute('two_byte_as_number');
  }
  public set twoByteAsNumber(value: number) {
    this._twoByteAsNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get twoByteAsNumberInput() {
    return this._twoByteAsNumber;
  }
}

export class VrfIpv4UnicastExportRouteTargetTwoByteAsFormatList extends cdktf.ComplexList {
  public internalValue? : VrfIpv4UnicastExportRouteTargetTwoByteAsFormat[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv4UnicastExportRouteTargetTwoByteAsFormatOutputReference {
    return new VrfIpv4UnicastExportRouteTargetTwoByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfIpv4UnicastImportRouteTargetFourByteAsFormat {
  /**
  * ASN4:index (hex or decimal format)
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#asn4_index Vrf#asn4_index}
  */
  readonly asn4Index: number;
  /**
  * 4-byte AS number
  *   - Range: `65536`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#four_byte_as_number Vrf#four_byte_as_number}
  */
  readonly fourByteAsNumber: number;
  /**
  * These are stitching RTs
  *   - Choices: `disable`, `enable`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#stitching Vrf#stitching}
  */
  readonly stitching: string;
}

export function vrfIpv4UnicastImportRouteTargetFourByteAsFormatToTerraform(struct?: VrfIpv4UnicastImportRouteTargetFourByteAsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn4_index: cdktf.numberToTerraform(struct!.asn4Index),
    four_byte_as_number: cdktf.numberToTerraform(struct!.fourByteAsNumber),
    stitching: cdktf.stringToTerraform(struct!.stitching),
  }
}


export function vrfIpv4UnicastImportRouteTargetFourByteAsFormatToHclTerraform(struct?: VrfIpv4UnicastImportRouteTargetFourByteAsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn4_index: {
      value: cdktf.numberToHclTerraform(struct!.asn4Index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    four_byte_as_number: {
      value: cdktf.numberToHclTerraform(struct!.fourByteAsNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stitching: {
      value: cdktf.stringToHclTerraform(struct!.stitching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfIpv4UnicastImportRouteTargetFourByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv4UnicastImportRouteTargetFourByteAsFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn4Index !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn4Index = this._asn4Index;
    }
    if (this._fourByteAsNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.fourByteAsNumber = this._fourByteAsNumber;
    }
    if (this._stitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.stitching = this._stitching;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv4UnicastImportRouteTargetFourByteAsFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asn4Index = undefined;
      this._fourByteAsNumber = undefined;
      this._stitching = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asn4Index = value.asn4Index;
      this._fourByteAsNumber = value.fourByteAsNumber;
      this._stitching = value.stitching;
    }
  }

  // asn4_index - computed: false, optional: false, required: true
  private _asn4Index?: number; 
  public get asn4Index() {
    return this.getNumberAttribute('asn4_index');
  }
  public set asn4Index(value: number) {
    this._asn4Index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asn4IndexInput() {
    return this._asn4Index;
  }

  // four_byte_as_number - computed: false, optional: false, required: true
  private _fourByteAsNumber?: number; 
  public get fourByteAsNumber() {
    return this.getNumberAttribute('four_byte_as_number');
  }
  public set fourByteAsNumber(value: number) {
    this._fourByteAsNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fourByteAsNumberInput() {
    return this._fourByteAsNumber;
  }

  // stitching - computed: false, optional: false, required: true
  private _stitching?: string; 
  public get stitching() {
    return this.getStringAttribute('stitching');
  }
  public set stitching(value: string) {
    this._stitching = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stitchingInput() {
    return this._stitching;
  }
}

export class VrfIpv4UnicastImportRouteTargetFourByteAsFormatList extends cdktf.ComplexList {
  public internalValue? : VrfIpv4UnicastImportRouteTargetFourByteAsFormat[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv4UnicastImportRouteTargetFourByteAsFormatOutputReference {
    return new VrfIpv4UnicastImportRouteTargetFourByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfIpv4UnicastImportRouteTargetIpAddressFormat {
  /**
  * IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#ipv4_address Vrf#ipv4_address}
  */
  readonly ipv4Address: string;
  /**
  * IPv4Address:index (hex or decimal format)
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#ipv4_address_index Vrf#ipv4_address_index}
  */
  readonly ipv4AddressIndex: number;
  /**
  * These are stitching RTs
  *   - Choices: `disable`, `enable`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#stitching Vrf#stitching}
  */
  readonly stitching: string;
}

export function vrfIpv4UnicastImportRouteTargetIpAddressFormatToTerraform(struct?: VrfIpv4UnicastImportRouteTargetIpAddressFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_address_index: cdktf.numberToTerraform(struct!.ipv4AddressIndex),
    stitching: cdktf.stringToTerraform(struct!.stitching),
  }
}


export function vrfIpv4UnicastImportRouteTargetIpAddressFormatToHclTerraform(struct?: VrfIpv4UnicastImportRouteTargetIpAddressFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address_index: {
      value: cdktf.numberToHclTerraform(struct!.ipv4AddressIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stitching: {
      value: cdktf.stringToHclTerraform(struct!.stitching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfIpv4UnicastImportRouteTargetIpAddressFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv4UnicastImportRouteTargetIpAddressFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4AddressIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AddressIndex = this._ipv4AddressIndex;
    }
    if (this._stitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.stitching = this._stitching;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv4UnicastImportRouteTargetIpAddressFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Address = undefined;
      this._ipv4AddressIndex = undefined;
      this._stitching = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Address = value.ipv4Address;
      this._ipv4AddressIndex = value.ipv4AddressIndex;
      this._stitching = value.stitching;
    }
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

  // ipv4_address_index - computed: false, optional: false, required: true
  private _ipv4AddressIndex?: number; 
  public get ipv4AddressIndex() {
    return this.getNumberAttribute('ipv4_address_index');
  }
  public set ipv4AddressIndex(value: number) {
    this._ipv4AddressIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressIndexInput() {
    return this._ipv4AddressIndex;
  }

  // stitching - computed: false, optional: false, required: true
  private _stitching?: string; 
  public get stitching() {
    return this.getStringAttribute('stitching');
  }
  public set stitching(value: string) {
    this._stitching = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stitchingInput() {
    return this._stitching;
  }
}

export class VrfIpv4UnicastImportRouteTargetIpAddressFormatList extends cdktf.ComplexList {
  public internalValue? : VrfIpv4UnicastImportRouteTargetIpAddressFormat[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv4UnicastImportRouteTargetIpAddressFormatOutputReference {
    return new VrfIpv4UnicastImportRouteTargetIpAddressFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfIpv4UnicastImportRouteTargetTwoByteAsFormat {
  /**
  * ASN2:index (hex or decimal format)
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#asn2_index Vrf#asn2_index}
  */
  readonly asn2Index: number;
  /**
  * These are stitching RTs
  *   - Choices: `disable`, `enable`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#stitching Vrf#stitching}
  */
  readonly stitching: string;
  /**
  * 2-byte AS number
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#two_byte_as_number Vrf#two_byte_as_number}
  */
  readonly twoByteAsNumber: number;
}

export function vrfIpv4UnicastImportRouteTargetTwoByteAsFormatToTerraform(struct?: VrfIpv4UnicastImportRouteTargetTwoByteAsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn2_index: cdktf.numberToTerraform(struct!.asn2Index),
    stitching: cdktf.stringToTerraform(struct!.stitching),
    two_byte_as_number: cdktf.numberToTerraform(struct!.twoByteAsNumber),
  }
}


export function vrfIpv4UnicastImportRouteTargetTwoByteAsFormatToHclTerraform(struct?: VrfIpv4UnicastImportRouteTargetTwoByteAsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn2_index: {
      value: cdktf.numberToHclTerraform(struct!.asn2Index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stitching: {
      value: cdktf.stringToHclTerraform(struct!.stitching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    two_byte_as_number: {
      value: cdktf.numberToHclTerraform(struct!.twoByteAsNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfIpv4UnicastImportRouteTargetTwoByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv4UnicastImportRouteTargetTwoByteAsFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn2Index !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn2Index = this._asn2Index;
    }
    if (this._stitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.stitching = this._stitching;
    }
    if (this._twoByteAsNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.twoByteAsNumber = this._twoByteAsNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv4UnicastImportRouteTargetTwoByteAsFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asn2Index = undefined;
      this._stitching = undefined;
      this._twoByteAsNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asn2Index = value.asn2Index;
      this._stitching = value.stitching;
      this._twoByteAsNumber = value.twoByteAsNumber;
    }
  }

  // asn2_index - computed: false, optional: false, required: true
  private _asn2Index?: number; 
  public get asn2Index() {
    return this.getNumberAttribute('asn2_index');
  }
  public set asn2Index(value: number) {
    this._asn2Index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asn2IndexInput() {
    return this._asn2Index;
  }

  // stitching - computed: false, optional: false, required: true
  private _stitching?: string; 
  public get stitching() {
    return this.getStringAttribute('stitching');
  }
  public set stitching(value: string) {
    this._stitching = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stitchingInput() {
    return this._stitching;
  }

  // two_byte_as_number - computed: false, optional: false, required: true
  private _twoByteAsNumber?: number; 
  public get twoByteAsNumber() {
    return this.getNumberAttribute('two_byte_as_number');
  }
  public set twoByteAsNumber(value: number) {
    this._twoByteAsNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get twoByteAsNumberInput() {
    return this._twoByteAsNumber;
  }
}

export class VrfIpv4UnicastImportRouteTargetTwoByteAsFormatList extends cdktf.ComplexList {
  public internalValue? : VrfIpv4UnicastImportRouteTargetTwoByteAsFormat[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv4UnicastImportRouteTargetTwoByteAsFormatOutputReference {
    return new VrfIpv4UnicastImportRouteTargetTwoByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfIpv6UnicastExportRouteTargetFourByteAsFormat {
  /**
  * ASN4:index (hex or decimal format)
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#asn4_index Vrf#asn4_index}
  */
  readonly asn4Index: number;
  /**
  * 4-byte AS number
  *   - Range: `65536`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#four_byte_as_number Vrf#four_byte_as_number}
  */
  readonly fourByteAsNumber: number;
  /**
  * These are stitching RTs
  *   - Choices: `disable`, `enable`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#stitching Vrf#stitching}
  */
  readonly stitching: string;
}

export function vrfIpv6UnicastExportRouteTargetFourByteAsFormatToTerraform(struct?: VrfIpv6UnicastExportRouteTargetFourByteAsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn4_index: cdktf.numberToTerraform(struct!.asn4Index),
    four_byte_as_number: cdktf.numberToTerraform(struct!.fourByteAsNumber),
    stitching: cdktf.stringToTerraform(struct!.stitching),
  }
}


export function vrfIpv6UnicastExportRouteTargetFourByteAsFormatToHclTerraform(struct?: VrfIpv6UnicastExportRouteTargetFourByteAsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn4_index: {
      value: cdktf.numberToHclTerraform(struct!.asn4Index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    four_byte_as_number: {
      value: cdktf.numberToHclTerraform(struct!.fourByteAsNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stitching: {
      value: cdktf.stringToHclTerraform(struct!.stitching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfIpv6UnicastExportRouteTargetFourByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv6UnicastExportRouteTargetFourByteAsFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn4Index !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn4Index = this._asn4Index;
    }
    if (this._fourByteAsNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.fourByteAsNumber = this._fourByteAsNumber;
    }
    if (this._stitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.stitching = this._stitching;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv6UnicastExportRouteTargetFourByteAsFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asn4Index = undefined;
      this._fourByteAsNumber = undefined;
      this._stitching = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asn4Index = value.asn4Index;
      this._fourByteAsNumber = value.fourByteAsNumber;
      this._stitching = value.stitching;
    }
  }

  // asn4_index - computed: false, optional: false, required: true
  private _asn4Index?: number; 
  public get asn4Index() {
    return this.getNumberAttribute('asn4_index');
  }
  public set asn4Index(value: number) {
    this._asn4Index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asn4IndexInput() {
    return this._asn4Index;
  }

  // four_byte_as_number - computed: false, optional: false, required: true
  private _fourByteAsNumber?: number; 
  public get fourByteAsNumber() {
    return this.getNumberAttribute('four_byte_as_number');
  }
  public set fourByteAsNumber(value: number) {
    this._fourByteAsNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fourByteAsNumberInput() {
    return this._fourByteAsNumber;
  }

  // stitching - computed: false, optional: false, required: true
  private _stitching?: string; 
  public get stitching() {
    return this.getStringAttribute('stitching');
  }
  public set stitching(value: string) {
    this._stitching = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stitchingInput() {
    return this._stitching;
  }
}

export class VrfIpv6UnicastExportRouteTargetFourByteAsFormatList extends cdktf.ComplexList {
  public internalValue? : VrfIpv6UnicastExportRouteTargetFourByteAsFormat[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv6UnicastExportRouteTargetFourByteAsFormatOutputReference {
    return new VrfIpv6UnicastExportRouteTargetFourByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfIpv6UnicastExportRouteTargetIpAddressFormat {
  /**
  * IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#ipv4_address Vrf#ipv4_address}
  */
  readonly ipv4Address: string;
  /**
  * IPv4Address:index (hex or decimal format)
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#ipv4_address_index Vrf#ipv4_address_index}
  */
  readonly ipv4AddressIndex: number;
  /**
  * These are stitching RTs
  *   - Choices: `disable`, `enable`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#stitching Vrf#stitching}
  */
  readonly stitching: string;
}

export function vrfIpv6UnicastExportRouteTargetIpAddressFormatToTerraform(struct?: VrfIpv6UnicastExportRouteTargetIpAddressFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_address_index: cdktf.numberToTerraform(struct!.ipv4AddressIndex),
    stitching: cdktf.stringToTerraform(struct!.stitching),
  }
}


export function vrfIpv6UnicastExportRouteTargetIpAddressFormatToHclTerraform(struct?: VrfIpv6UnicastExportRouteTargetIpAddressFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address_index: {
      value: cdktf.numberToHclTerraform(struct!.ipv4AddressIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stitching: {
      value: cdktf.stringToHclTerraform(struct!.stitching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfIpv6UnicastExportRouteTargetIpAddressFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv6UnicastExportRouteTargetIpAddressFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4AddressIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AddressIndex = this._ipv4AddressIndex;
    }
    if (this._stitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.stitching = this._stitching;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv6UnicastExportRouteTargetIpAddressFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Address = undefined;
      this._ipv4AddressIndex = undefined;
      this._stitching = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Address = value.ipv4Address;
      this._ipv4AddressIndex = value.ipv4AddressIndex;
      this._stitching = value.stitching;
    }
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

  // ipv4_address_index - computed: false, optional: false, required: true
  private _ipv4AddressIndex?: number; 
  public get ipv4AddressIndex() {
    return this.getNumberAttribute('ipv4_address_index');
  }
  public set ipv4AddressIndex(value: number) {
    this._ipv4AddressIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressIndexInput() {
    return this._ipv4AddressIndex;
  }

  // stitching - computed: false, optional: false, required: true
  private _stitching?: string; 
  public get stitching() {
    return this.getStringAttribute('stitching');
  }
  public set stitching(value: string) {
    this._stitching = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stitchingInput() {
    return this._stitching;
  }
}

export class VrfIpv6UnicastExportRouteTargetIpAddressFormatList extends cdktf.ComplexList {
  public internalValue? : VrfIpv6UnicastExportRouteTargetIpAddressFormat[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv6UnicastExportRouteTargetIpAddressFormatOutputReference {
    return new VrfIpv6UnicastExportRouteTargetIpAddressFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfIpv6UnicastExportRouteTargetTwoByteAsFormat {
  /**
  * ASN2:index (hex or decimal format)
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#asn2_index Vrf#asn2_index}
  */
  readonly asn2Index: number;
  /**
  * These are stitching RTs
  *   - Choices: `disable`, `enable`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#stitching Vrf#stitching}
  */
  readonly stitching: string;
  /**
  * 2-byte AS number
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#two_byte_as_number Vrf#two_byte_as_number}
  */
  readonly twoByteAsNumber: number;
}

export function vrfIpv6UnicastExportRouteTargetTwoByteAsFormatToTerraform(struct?: VrfIpv6UnicastExportRouteTargetTwoByteAsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn2_index: cdktf.numberToTerraform(struct!.asn2Index),
    stitching: cdktf.stringToTerraform(struct!.stitching),
    two_byte_as_number: cdktf.numberToTerraform(struct!.twoByteAsNumber),
  }
}


export function vrfIpv6UnicastExportRouteTargetTwoByteAsFormatToHclTerraform(struct?: VrfIpv6UnicastExportRouteTargetTwoByteAsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn2_index: {
      value: cdktf.numberToHclTerraform(struct!.asn2Index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stitching: {
      value: cdktf.stringToHclTerraform(struct!.stitching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    two_byte_as_number: {
      value: cdktf.numberToHclTerraform(struct!.twoByteAsNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfIpv6UnicastExportRouteTargetTwoByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv6UnicastExportRouteTargetTwoByteAsFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn2Index !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn2Index = this._asn2Index;
    }
    if (this._stitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.stitching = this._stitching;
    }
    if (this._twoByteAsNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.twoByteAsNumber = this._twoByteAsNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv6UnicastExportRouteTargetTwoByteAsFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asn2Index = undefined;
      this._stitching = undefined;
      this._twoByteAsNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asn2Index = value.asn2Index;
      this._stitching = value.stitching;
      this._twoByteAsNumber = value.twoByteAsNumber;
    }
  }

  // asn2_index - computed: false, optional: false, required: true
  private _asn2Index?: number; 
  public get asn2Index() {
    return this.getNumberAttribute('asn2_index');
  }
  public set asn2Index(value: number) {
    this._asn2Index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asn2IndexInput() {
    return this._asn2Index;
  }

  // stitching - computed: false, optional: false, required: true
  private _stitching?: string; 
  public get stitching() {
    return this.getStringAttribute('stitching');
  }
  public set stitching(value: string) {
    this._stitching = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stitchingInput() {
    return this._stitching;
  }

  // two_byte_as_number - computed: false, optional: false, required: true
  private _twoByteAsNumber?: number; 
  public get twoByteAsNumber() {
    return this.getNumberAttribute('two_byte_as_number');
  }
  public set twoByteAsNumber(value: number) {
    this._twoByteAsNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get twoByteAsNumberInput() {
    return this._twoByteAsNumber;
  }
}

export class VrfIpv6UnicastExportRouteTargetTwoByteAsFormatList extends cdktf.ComplexList {
  public internalValue? : VrfIpv6UnicastExportRouteTargetTwoByteAsFormat[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv6UnicastExportRouteTargetTwoByteAsFormatOutputReference {
    return new VrfIpv6UnicastExportRouteTargetTwoByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfIpv6UnicastImportRouteTargetFourByteAsFormat {
  /**
  * ASN4:index (hex or decimal format)
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#asn4_index Vrf#asn4_index}
  */
  readonly asn4Index: number;
  /**
  * 4-byte AS number
  *   - Range: `65536`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#four_byte_as_number Vrf#four_byte_as_number}
  */
  readonly fourByteAsNumber: number;
  /**
  * These are stitching RTs
  *   - Choices: `disable`, `enable`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#stitching Vrf#stitching}
  */
  readonly stitching: string;
}

export function vrfIpv6UnicastImportRouteTargetFourByteAsFormatToTerraform(struct?: VrfIpv6UnicastImportRouteTargetFourByteAsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn4_index: cdktf.numberToTerraform(struct!.asn4Index),
    four_byte_as_number: cdktf.numberToTerraform(struct!.fourByteAsNumber),
    stitching: cdktf.stringToTerraform(struct!.stitching),
  }
}


export function vrfIpv6UnicastImportRouteTargetFourByteAsFormatToHclTerraform(struct?: VrfIpv6UnicastImportRouteTargetFourByteAsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn4_index: {
      value: cdktf.numberToHclTerraform(struct!.asn4Index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    four_byte_as_number: {
      value: cdktf.numberToHclTerraform(struct!.fourByteAsNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stitching: {
      value: cdktf.stringToHclTerraform(struct!.stitching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfIpv6UnicastImportRouteTargetFourByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv6UnicastImportRouteTargetFourByteAsFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn4Index !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn4Index = this._asn4Index;
    }
    if (this._fourByteAsNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.fourByteAsNumber = this._fourByteAsNumber;
    }
    if (this._stitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.stitching = this._stitching;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv6UnicastImportRouteTargetFourByteAsFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asn4Index = undefined;
      this._fourByteAsNumber = undefined;
      this._stitching = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asn4Index = value.asn4Index;
      this._fourByteAsNumber = value.fourByteAsNumber;
      this._stitching = value.stitching;
    }
  }

  // asn4_index - computed: false, optional: false, required: true
  private _asn4Index?: number; 
  public get asn4Index() {
    return this.getNumberAttribute('asn4_index');
  }
  public set asn4Index(value: number) {
    this._asn4Index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asn4IndexInput() {
    return this._asn4Index;
  }

  // four_byte_as_number - computed: false, optional: false, required: true
  private _fourByteAsNumber?: number; 
  public get fourByteAsNumber() {
    return this.getNumberAttribute('four_byte_as_number');
  }
  public set fourByteAsNumber(value: number) {
    this._fourByteAsNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fourByteAsNumberInput() {
    return this._fourByteAsNumber;
  }

  // stitching - computed: false, optional: false, required: true
  private _stitching?: string; 
  public get stitching() {
    return this.getStringAttribute('stitching');
  }
  public set stitching(value: string) {
    this._stitching = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stitchingInput() {
    return this._stitching;
  }
}

export class VrfIpv6UnicastImportRouteTargetFourByteAsFormatList extends cdktf.ComplexList {
  public internalValue? : VrfIpv6UnicastImportRouteTargetFourByteAsFormat[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv6UnicastImportRouteTargetFourByteAsFormatOutputReference {
    return new VrfIpv6UnicastImportRouteTargetFourByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfIpv6UnicastImportRouteTargetIpAddressFormat {
  /**
  * IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#ipv4_address Vrf#ipv4_address}
  */
  readonly ipv4Address: string;
  /**
  * IPv4Address:index (hex or decimal format)
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#ipv4_address_index Vrf#ipv4_address_index}
  */
  readonly ipv4AddressIndex: number;
  /**
  * These are stitching RTs
  *   - Choices: `disable`, `enable`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#stitching Vrf#stitching}
  */
  readonly stitching: string;
}

export function vrfIpv6UnicastImportRouteTargetIpAddressFormatToTerraform(struct?: VrfIpv6UnicastImportRouteTargetIpAddressFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_address_index: cdktf.numberToTerraform(struct!.ipv4AddressIndex),
    stitching: cdktf.stringToTerraform(struct!.stitching),
  }
}


export function vrfIpv6UnicastImportRouteTargetIpAddressFormatToHclTerraform(struct?: VrfIpv6UnicastImportRouteTargetIpAddressFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address_index: {
      value: cdktf.numberToHclTerraform(struct!.ipv4AddressIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stitching: {
      value: cdktf.stringToHclTerraform(struct!.stitching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfIpv6UnicastImportRouteTargetIpAddressFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv6UnicastImportRouteTargetIpAddressFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4AddressIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AddressIndex = this._ipv4AddressIndex;
    }
    if (this._stitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.stitching = this._stitching;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv6UnicastImportRouteTargetIpAddressFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Address = undefined;
      this._ipv4AddressIndex = undefined;
      this._stitching = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Address = value.ipv4Address;
      this._ipv4AddressIndex = value.ipv4AddressIndex;
      this._stitching = value.stitching;
    }
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

  // ipv4_address_index - computed: false, optional: false, required: true
  private _ipv4AddressIndex?: number; 
  public get ipv4AddressIndex() {
    return this.getNumberAttribute('ipv4_address_index');
  }
  public set ipv4AddressIndex(value: number) {
    this._ipv4AddressIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressIndexInput() {
    return this._ipv4AddressIndex;
  }

  // stitching - computed: false, optional: false, required: true
  private _stitching?: string; 
  public get stitching() {
    return this.getStringAttribute('stitching');
  }
  public set stitching(value: string) {
    this._stitching = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stitchingInput() {
    return this._stitching;
  }
}

export class VrfIpv6UnicastImportRouteTargetIpAddressFormatList extends cdktf.ComplexList {
  public internalValue? : VrfIpv6UnicastImportRouteTargetIpAddressFormat[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv6UnicastImportRouteTargetIpAddressFormatOutputReference {
    return new VrfIpv6UnicastImportRouteTargetIpAddressFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfIpv6UnicastImportRouteTargetTwoByteAsFormat {
  /**
  * ASN2:index (hex or decimal format)
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#asn2_index Vrf#asn2_index}
  */
  readonly asn2Index: number;
  /**
  * These are stitching RTs
  *   - Choices: `disable`, `enable`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#stitching Vrf#stitching}
  */
  readonly stitching: string;
  /**
  * 2-byte AS number
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#two_byte_as_number Vrf#two_byte_as_number}
  */
  readonly twoByteAsNumber: number;
}

export function vrfIpv6UnicastImportRouteTargetTwoByteAsFormatToTerraform(struct?: VrfIpv6UnicastImportRouteTargetTwoByteAsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn2_index: cdktf.numberToTerraform(struct!.asn2Index),
    stitching: cdktf.stringToTerraform(struct!.stitching),
    two_byte_as_number: cdktf.numberToTerraform(struct!.twoByteAsNumber),
  }
}


export function vrfIpv6UnicastImportRouteTargetTwoByteAsFormatToHclTerraform(struct?: VrfIpv6UnicastImportRouteTargetTwoByteAsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn2_index: {
      value: cdktf.numberToHclTerraform(struct!.asn2Index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stitching: {
      value: cdktf.stringToHclTerraform(struct!.stitching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    two_byte_as_number: {
      value: cdktf.numberToHclTerraform(struct!.twoByteAsNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfIpv6UnicastImportRouteTargetTwoByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv6UnicastImportRouteTargetTwoByteAsFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn2Index !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn2Index = this._asn2Index;
    }
    if (this._stitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.stitching = this._stitching;
    }
    if (this._twoByteAsNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.twoByteAsNumber = this._twoByteAsNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv6UnicastImportRouteTargetTwoByteAsFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asn2Index = undefined;
      this._stitching = undefined;
      this._twoByteAsNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asn2Index = value.asn2Index;
      this._stitching = value.stitching;
      this._twoByteAsNumber = value.twoByteAsNumber;
    }
  }

  // asn2_index - computed: false, optional: false, required: true
  private _asn2Index?: number; 
  public get asn2Index() {
    return this.getNumberAttribute('asn2_index');
  }
  public set asn2Index(value: number) {
    this._asn2Index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asn2IndexInput() {
    return this._asn2Index;
  }

  // stitching - computed: false, optional: false, required: true
  private _stitching?: string; 
  public get stitching() {
    return this.getStringAttribute('stitching');
  }
  public set stitching(value: string) {
    this._stitching = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stitchingInput() {
    return this._stitching;
  }

  // two_byte_as_number - computed: false, optional: false, required: true
  private _twoByteAsNumber?: number; 
  public get twoByteAsNumber() {
    return this.getNumberAttribute('two_byte_as_number');
  }
  public set twoByteAsNumber(value: number) {
    this._twoByteAsNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get twoByteAsNumberInput() {
    return this._twoByteAsNumber;
  }
}

export class VrfIpv6UnicastImportRouteTargetTwoByteAsFormatList extends cdktf.ComplexList {
  public internalValue? : VrfIpv6UnicastImportRouteTargetTwoByteAsFormat[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv6UnicastImportRouteTargetTwoByteAsFormatOutputReference {
    return new VrfIpv6UnicastImportRouteTargetTwoByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf iosxr_vrf}
*/
export class Vrf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_vrf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vrf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vrf to import
  * @param importFromId The id of the existing Vrf that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vrf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_vrf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/vrf iosxr_vrf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VrfConfig
  */
  public constructor(scope: Construct, id: string, config: VrfConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_vrf',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteMode = config.deleteMode;
    this._description = config.description;
    this._device = config.device;
    this._ipv4Flowspec = config.ipv4Flowspec;
    this._ipv4Multicast = config.ipv4Multicast;
    this._ipv4Unicast = config.ipv4Unicast;
    this._ipv4UnicastExportRoutePolicy = config.ipv4UnicastExportRoutePolicy;
    this._ipv4UnicastExportRouteTargetFourByteAsFormat.internalValue = config.ipv4UnicastExportRouteTargetFourByteAsFormat;
    this._ipv4UnicastExportRouteTargetIpAddressFormat.internalValue = config.ipv4UnicastExportRouteTargetIpAddressFormat;
    this._ipv4UnicastExportRouteTargetTwoByteAsFormat.internalValue = config.ipv4UnicastExportRouteTargetTwoByteAsFormat;
    this._ipv4UnicastImportRoutePolicy = config.ipv4UnicastImportRoutePolicy;
    this._ipv4UnicastImportRouteTargetFourByteAsFormat.internalValue = config.ipv4UnicastImportRouteTargetFourByteAsFormat;
    this._ipv4UnicastImportRouteTargetIpAddressFormat.internalValue = config.ipv4UnicastImportRouteTargetIpAddressFormat;
    this._ipv4UnicastImportRouteTargetTwoByteAsFormat.internalValue = config.ipv4UnicastImportRouteTargetTwoByteAsFormat;
    this._ipv6Flowspec = config.ipv6Flowspec;
    this._ipv6Multicast = config.ipv6Multicast;
    this._ipv6Unicast = config.ipv6Unicast;
    this._ipv6UnicastExportRoutePolicy = config.ipv6UnicastExportRoutePolicy;
    this._ipv6UnicastExportRouteTargetFourByteAsFormat.internalValue = config.ipv6UnicastExportRouteTargetFourByteAsFormat;
    this._ipv6UnicastExportRouteTargetIpAddressFormat.internalValue = config.ipv6UnicastExportRouteTargetIpAddressFormat;
    this._ipv6UnicastExportRouteTargetTwoByteAsFormat.internalValue = config.ipv6UnicastExportRouteTargetTwoByteAsFormat;
    this._ipv6UnicastImportRoutePolicy = config.ipv6UnicastImportRoutePolicy;
    this._ipv6UnicastImportRouteTargetFourByteAsFormat.internalValue = config.ipv6UnicastImportRouteTargetFourByteAsFormat;
    this._ipv6UnicastImportRouteTargetIpAddressFormat.internalValue = config.ipv6UnicastImportRouteTargetIpAddressFormat;
    this._ipv6UnicastImportRouteTargetTwoByteAsFormat.internalValue = config.ipv6UnicastImportRouteTargetTwoByteAsFormat;
    this._rdFourByteAsIndex = config.rdFourByteAsIndex;
    this._rdFourByteAsNumber = config.rdFourByteAsNumber;
    this._rdIpv4Address = config.rdIpv4Address;
    this._rdIpv4AddressIndex = config.rdIpv4AddressIndex;
    this._rdTwoByteAsIndex = config.rdTwoByteAsIndex;
    this._rdTwoByteAsNumber = config.rdTwoByteAsNumber;
    this._vpnId = config.vpnId;
    this._vrfName = config.vrfName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_flowspec - computed: false, optional: true, required: false
  private _ipv4Flowspec?: boolean | cdktf.IResolvable; 
  public get ipv4Flowspec() {
    return this.getBooleanAttribute('ipv4_flowspec');
  }
  public set ipv4Flowspec(value: boolean | cdktf.IResolvable) {
    this._ipv4Flowspec = value;
  }
  public resetIpv4Flowspec() {
    this._ipv4Flowspec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FlowspecInput() {
    return this._ipv4Flowspec;
  }

  // ipv4_multicast - computed: false, optional: true, required: false
  private _ipv4Multicast?: boolean | cdktf.IResolvable; 
  public get ipv4Multicast() {
    return this.getBooleanAttribute('ipv4_multicast');
  }
  public set ipv4Multicast(value: boolean | cdktf.IResolvable) {
    this._ipv4Multicast = value;
  }
  public resetIpv4Multicast() {
    this._ipv4Multicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MulticastInput() {
    return this._ipv4Multicast;
  }

  // ipv4_unicast - computed: false, optional: true, required: false
  private _ipv4Unicast?: boolean | cdktf.IResolvable; 
  public get ipv4Unicast() {
    return this.getBooleanAttribute('ipv4_unicast');
  }
  public set ipv4Unicast(value: boolean | cdktf.IResolvable) {
    this._ipv4Unicast = value;
  }
  public resetIpv4Unicast() {
    this._ipv4Unicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4UnicastInput() {
    return this._ipv4Unicast;
  }

  // ipv4_unicast_export_route_policy - computed: false, optional: true, required: false
  private _ipv4UnicastExportRoutePolicy?: string; 
  public get ipv4UnicastExportRoutePolicy() {
    return this.getStringAttribute('ipv4_unicast_export_route_policy');
  }
  public set ipv4UnicastExportRoutePolicy(value: string) {
    this._ipv4UnicastExportRoutePolicy = value;
  }
  public resetIpv4UnicastExportRoutePolicy() {
    this._ipv4UnicastExportRoutePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4UnicastExportRoutePolicyInput() {
    return this._ipv4UnicastExportRoutePolicy;
  }

  // ipv4_unicast_export_route_target_four_byte_as_format - computed: false, optional: true, required: false
  private _ipv4UnicastExportRouteTargetFourByteAsFormat = new VrfIpv4UnicastExportRouteTargetFourByteAsFormatList(this, "ipv4_unicast_export_route_target_four_byte_as_format", false);
  public get ipv4UnicastExportRouteTargetFourByteAsFormat() {
    return this._ipv4UnicastExportRouteTargetFourByteAsFormat;
  }
  public putIpv4UnicastExportRouteTargetFourByteAsFormat(value: VrfIpv4UnicastExportRouteTargetFourByteAsFormat[] | cdktf.IResolvable) {
    this._ipv4UnicastExportRouteTargetFourByteAsFormat.internalValue = value;
  }
  public resetIpv4UnicastExportRouteTargetFourByteAsFormat() {
    this._ipv4UnicastExportRouteTargetFourByteAsFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4UnicastExportRouteTargetFourByteAsFormatInput() {
    return this._ipv4UnicastExportRouteTargetFourByteAsFormat.internalValue;
  }

  // ipv4_unicast_export_route_target_ip_address_format - computed: false, optional: true, required: false
  private _ipv4UnicastExportRouteTargetIpAddressFormat = new VrfIpv4UnicastExportRouteTargetIpAddressFormatList(this, "ipv4_unicast_export_route_target_ip_address_format", false);
  public get ipv4UnicastExportRouteTargetIpAddressFormat() {
    return this._ipv4UnicastExportRouteTargetIpAddressFormat;
  }
  public putIpv4UnicastExportRouteTargetIpAddressFormat(value: VrfIpv4UnicastExportRouteTargetIpAddressFormat[] | cdktf.IResolvable) {
    this._ipv4UnicastExportRouteTargetIpAddressFormat.internalValue = value;
  }
  public resetIpv4UnicastExportRouteTargetIpAddressFormat() {
    this._ipv4UnicastExportRouteTargetIpAddressFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4UnicastExportRouteTargetIpAddressFormatInput() {
    return this._ipv4UnicastExportRouteTargetIpAddressFormat.internalValue;
  }

  // ipv4_unicast_export_route_target_two_byte_as_format - computed: false, optional: true, required: false
  private _ipv4UnicastExportRouteTargetTwoByteAsFormat = new VrfIpv4UnicastExportRouteTargetTwoByteAsFormatList(this, "ipv4_unicast_export_route_target_two_byte_as_format", false);
  public get ipv4UnicastExportRouteTargetTwoByteAsFormat() {
    return this._ipv4UnicastExportRouteTargetTwoByteAsFormat;
  }
  public putIpv4UnicastExportRouteTargetTwoByteAsFormat(value: VrfIpv4UnicastExportRouteTargetTwoByteAsFormat[] | cdktf.IResolvable) {
    this._ipv4UnicastExportRouteTargetTwoByteAsFormat.internalValue = value;
  }
  public resetIpv4UnicastExportRouteTargetTwoByteAsFormat() {
    this._ipv4UnicastExportRouteTargetTwoByteAsFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4UnicastExportRouteTargetTwoByteAsFormatInput() {
    return this._ipv4UnicastExportRouteTargetTwoByteAsFormat.internalValue;
  }

  // ipv4_unicast_import_route_policy - computed: false, optional: true, required: false
  private _ipv4UnicastImportRoutePolicy?: string; 
  public get ipv4UnicastImportRoutePolicy() {
    return this.getStringAttribute('ipv4_unicast_import_route_policy');
  }
  public set ipv4UnicastImportRoutePolicy(value: string) {
    this._ipv4UnicastImportRoutePolicy = value;
  }
  public resetIpv4UnicastImportRoutePolicy() {
    this._ipv4UnicastImportRoutePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4UnicastImportRoutePolicyInput() {
    return this._ipv4UnicastImportRoutePolicy;
  }

  // ipv4_unicast_import_route_target_four_byte_as_format - computed: false, optional: true, required: false
  private _ipv4UnicastImportRouteTargetFourByteAsFormat = new VrfIpv4UnicastImportRouteTargetFourByteAsFormatList(this, "ipv4_unicast_import_route_target_four_byte_as_format", false);
  public get ipv4UnicastImportRouteTargetFourByteAsFormat() {
    return this._ipv4UnicastImportRouteTargetFourByteAsFormat;
  }
  public putIpv4UnicastImportRouteTargetFourByteAsFormat(value: VrfIpv4UnicastImportRouteTargetFourByteAsFormat[] | cdktf.IResolvable) {
    this._ipv4UnicastImportRouteTargetFourByteAsFormat.internalValue = value;
  }
  public resetIpv4UnicastImportRouteTargetFourByteAsFormat() {
    this._ipv4UnicastImportRouteTargetFourByteAsFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4UnicastImportRouteTargetFourByteAsFormatInput() {
    return this._ipv4UnicastImportRouteTargetFourByteAsFormat.internalValue;
  }

  // ipv4_unicast_import_route_target_ip_address_format - computed: false, optional: true, required: false
  private _ipv4UnicastImportRouteTargetIpAddressFormat = new VrfIpv4UnicastImportRouteTargetIpAddressFormatList(this, "ipv4_unicast_import_route_target_ip_address_format", false);
  public get ipv4UnicastImportRouteTargetIpAddressFormat() {
    return this._ipv4UnicastImportRouteTargetIpAddressFormat;
  }
  public putIpv4UnicastImportRouteTargetIpAddressFormat(value: VrfIpv4UnicastImportRouteTargetIpAddressFormat[] | cdktf.IResolvable) {
    this._ipv4UnicastImportRouteTargetIpAddressFormat.internalValue = value;
  }
  public resetIpv4UnicastImportRouteTargetIpAddressFormat() {
    this._ipv4UnicastImportRouteTargetIpAddressFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4UnicastImportRouteTargetIpAddressFormatInput() {
    return this._ipv4UnicastImportRouteTargetIpAddressFormat.internalValue;
  }

  // ipv4_unicast_import_route_target_two_byte_as_format - computed: false, optional: true, required: false
  private _ipv4UnicastImportRouteTargetTwoByteAsFormat = new VrfIpv4UnicastImportRouteTargetTwoByteAsFormatList(this, "ipv4_unicast_import_route_target_two_byte_as_format", false);
  public get ipv4UnicastImportRouteTargetTwoByteAsFormat() {
    return this._ipv4UnicastImportRouteTargetTwoByteAsFormat;
  }
  public putIpv4UnicastImportRouteTargetTwoByteAsFormat(value: VrfIpv4UnicastImportRouteTargetTwoByteAsFormat[] | cdktf.IResolvable) {
    this._ipv4UnicastImportRouteTargetTwoByteAsFormat.internalValue = value;
  }
  public resetIpv4UnicastImportRouteTargetTwoByteAsFormat() {
    this._ipv4UnicastImportRouteTargetTwoByteAsFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4UnicastImportRouteTargetTwoByteAsFormatInput() {
    return this._ipv4UnicastImportRouteTargetTwoByteAsFormat.internalValue;
  }

  // ipv6_flowspec - computed: false, optional: true, required: false
  private _ipv6Flowspec?: boolean | cdktf.IResolvable; 
  public get ipv6Flowspec() {
    return this.getBooleanAttribute('ipv6_flowspec');
  }
  public set ipv6Flowspec(value: boolean | cdktf.IResolvable) {
    this._ipv6Flowspec = value;
  }
  public resetIpv6Flowspec() {
    this._ipv6Flowspec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FlowspecInput() {
    return this._ipv6Flowspec;
  }

  // ipv6_multicast - computed: false, optional: true, required: false
  private _ipv6Multicast?: boolean | cdktf.IResolvable; 
  public get ipv6Multicast() {
    return this.getBooleanAttribute('ipv6_multicast');
  }
  public set ipv6Multicast(value: boolean | cdktf.IResolvable) {
    this._ipv6Multicast = value;
  }
  public resetIpv6Multicast() {
    this._ipv6Multicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MulticastInput() {
    return this._ipv6Multicast;
  }

  // ipv6_unicast - computed: false, optional: true, required: false
  private _ipv6Unicast?: boolean | cdktf.IResolvable; 
  public get ipv6Unicast() {
    return this.getBooleanAttribute('ipv6_unicast');
  }
  public set ipv6Unicast(value: boolean | cdktf.IResolvable) {
    this._ipv6Unicast = value;
  }
  public resetIpv6Unicast() {
    this._ipv6Unicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6UnicastInput() {
    return this._ipv6Unicast;
  }

  // ipv6_unicast_export_route_policy - computed: false, optional: true, required: false
  private _ipv6UnicastExportRoutePolicy?: string; 
  public get ipv6UnicastExportRoutePolicy() {
    return this.getStringAttribute('ipv6_unicast_export_route_policy');
  }
  public set ipv6UnicastExportRoutePolicy(value: string) {
    this._ipv6UnicastExportRoutePolicy = value;
  }
  public resetIpv6UnicastExportRoutePolicy() {
    this._ipv6UnicastExportRoutePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6UnicastExportRoutePolicyInput() {
    return this._ipv6UnicastExportRoutePolicy;
  }

  // ipv6_unicast_export_route_target_four_byte_as_format - computed: false, optional: true, required: false
  private _ipv6UnicastExportRouteTargetFourByteAsFormat = new VrfIpv6UnicastExportRouteTargetFourByteAsFormatList(this, "ipv6_unicast_export_route_target_four_byte_as_format", false);
  public get ipv6UnicastExportRouteTargetFourByteAsFormat() {
    return this._ipv6UnicastExportRouteTargetFourByteAsFormat;
  }
  public putIpv6UnicastExportRouteTargetFourByteAsFormat(value: VrfIpv6UnicastExportRouteTargetFourByteAsFormat[] | cdktf.IResolvable) {
    this._ipv6UnicastExportRouteTargetFourByteAsFormat.internalValue = value;
  }
  public resetIpv6UnicastExportRouteTargetFourByteAsFormat() {
    this._ipv6UnicastExportRouteTargetFourByteAsFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6UnicastExportRouteTargetFourByteAsFormatInput() {
    return this._ipv6UnicastExportRouteTargetFourByteAsFormat.internalValue;
  }

  // ipv6_unicast_export_route_target_ip_address_format - computed: false, optional: true, required: false
  private _ipv6UnicastExportRouteTargetIpAddressFormat = new VrfIpv6UnicastExportRouteTargetIpAddressFormatList(this, "ipv6_unicast_export_route_target_ip_address_format", false);
  public get ipv6UnicastExportRouteTargetIpAddressFormat() {
    return this._ipv6UnicastExportRouteTargetIpAddressFormat;
  }
  public putIpv6UnicastExportRouteTargetIpAddressFormat(value: VrfIpv6UnicastExportRouteTargetIpAddressFormat[] | cdktf.IResolvable) {
    this._ipv6UnicastExportRouteTargetIpAddressFormat.internalValue = value;
  }
  public resetIpv6UnicastExportRouteTargetIpAddressFormat() {
    this._ipv6UnicastExportRouteTargetIpAddressFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6UnicastExportRouteTargetIpAddressFormatInput() {
    return this._ipv6UnicastExportRouteTargetIpAddressFormat.internalValue;
  }

  // ipv6_unicast_export_route_target_two_byte_as_format - computed: false, optional: true, required: false
  private _ipv6UnicastExportRouteTargetTwoByteAsFormat = new VrfIpv6UnicastExportRouteTargetTwoByteAsFormatList(this, "ipv6_unicast_export_route_target_two_byte_as_format", false);
  public get ipv6UnicastExportRouteTargetTwoByteAsFormat() {
    return this._ipv6UnicastExportRouteTargetTwoByteAsFormat;
  }
  public putIpv6UnicastExportRouteTargetTwoByteAsFormat(value: VrfIpv6UnicastExportRouteTargetTwoByteAsFormat[] | cdktf.IResolvable) {
    this._ipv6UnicastExportRouteTargetTwoByteAsFormat.internalValue = value;
  }
  public resetIpv6UnicastExportRouteTargetTwoByteAsFormat() {
    this._ipv6UnicastExportRouteTargetTwoByteAsFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6UnicastExportRouteTargetTwoByteAsFormatInput() {
    return this._ipv6UnicastExportRouteTargetTwoByteAsFormat.internalValue;
  }

  // ipv6_unicast_import_route_policy - computed: false, optional: true, required: false
  private _ipv6UnicastImportRoutePolicy?: string; 
  public get ipv6UnicastImportRoutePolicy() {
    return this.getStringAttribute('ipv6_unicast_import_route_policy');
  }
  public set ipv6UnicastImportRoutePolicy(value: string) {
    this._ipv6UnicastImportRoutePolicy = value;
  }
  public resetIpv6UnicastImportRoutePolicy() {
    this._ipv6UnicastImportRoutePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6UnicastImportRoutePolicyInput() {
    return this._ipv6UnicastImportRoutePolicy;
  }

  // ipv6_unicast_import_route_target_four_byte_as_format - computed: false, optional: true, required: false
  private _ipv6UnicastImportRouteTargetFourByteAsFormat = new VrfIpv6UnicastImportRouteTargetFourByteAsFormatList(this, "ipv6_unicast_import_route_target_four_byte_as_format", false);
  public get ipv6UnicastImportRouteTargetFourByteAsFormat() {
    return this._ipv6UnicastImportRouteTargetFourByteAsFormat;
  }
  public putIpv6UnicastImportRouteTargetFourByteAsFormat(value: VrfIpv6UnicastImportRouteTargetFourByteAsFormat[] | cdktf.IResolvable) {
    this._ipv6UnicastImportRouteTargetFourByteAsFormat.internalValue = value;
  }
  public resetIpv6UnicastImportRouteTargetFourByteAsFormat() {
    this._ipv6UnicastImportRouteTargetFourByteAsFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6UnicastImportRouteTargetFourByteAsFormatInput() {
    return this._ipv6UnicastImportRouteTargetFourByteAsFormat.internalValue;
  }

  // ipv6_unicast_import_route_target_ip_address_format - computed: false, optional: true, required: false
  private _ipv6UnicastImportRouteTargetIpAddressFormat = new VrfIpv6UnicastImportRouteTargetIpAddressFormatList(this, "ipv6_unicast_import_route_target_ip_address_format", false);
  public get ipv6UnicastImportRouteTargetIpAddressFormat() {
    return this._ipv6UnicastImportRouteTargetIpAddressFormat;
  }
  public putIpv6UnicastImportRouteTargetIpAddressFormat(value: VrfIpv6UnicastImportRouteTargetIpAddressFormat[] | cdktf.IResolvable) {
    this._ipv6UnicastImportRouteTargetIpAddressFormat.internalValue = value;
  }
  public resetIpv6UnicastImportRouteTargetIpAddressFormat() {
    this._ipv6UnicastImportRouteTargetIpAddressFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6UnicastImportRouteTargetIpAddressFormatInput() {
    return this._ipv6UnicastImportRouteTargetIpAddressFormat.internalValue;
  }

  // ipv6_unicast_import_route_target_two_byte_as_format - computed: false, optional: true, required: false
  private _ipv6UnicastImportRouteTargetTwoByteAsFormat = new VrfIpv6UnicastImportRouteTargetTwoByteAsFormatList(this, "ipv6_unicast_import_route_target_two_byte_as_format", false);
  public get ipv6UnicastImportRouteTargetTwoByteAsFormat() {
    return this._ipv6UnicastImportRouteTargetTwoByteAsFormat;
  }
  public putIpv6UnicastImportRouteTargetTwoByteAsFormat(value: VrfIpv6UnicastImportRouteTargetTwoByteAsFormat[] | cdktf.IResolvable) {
    this._ipv6UnicastImportRouteTargetTwoByteAsFormat.internalValue = value;
  }
  public resetIpv6UnicastImportRouteTargetTwoByteAsFormat() {
    this._ipv6UnicastImportRouteTargetTwoByteAsFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6UnicastImportRouteTargetTwoByteAsFormatInput() {
    return this._ipv6UnicastImportRouteTargetTwoByteAsFormat.internalValue;
  }

  // rd_four_byte_as_index - computed: false, optional: true, required: false
  private _rdFourByteAsIndex?: number; 
  public get rdFourByteAsIndex() {
    return this.getNumberAttribute('rd_four_byte_as_index');
  }
  public set rdFourByteAsIndex(value: number) {
    this._rdFourByteAsIndex = value;
  }
  public resetRdFourByteAsIndex() {
    this._rdFourByteAsIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdFourByteAsIndexInput() {
    return this._rdFourByteAsIndex;
  }

  // rd_four_byte_as_number - computed: false, optional: true, required: false
  private _rdFourByteAsNumber?: string; 
  public get rdFourByteAsNumber() {
    return this.getStringAttribute('rd_four_byte_as_number');
  }
  public set rdFourByteAsNumber(value: string) {
    this._rdFourByteAsNumber = value;
  }
  public resetRdFourByteAsNumber() {
    this._rdFourByteAsNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdFourByteAsNumberInput() {
    return this._rdFourByteAsNumber;
  }

  // rd_ipv4_address - computed: false, optional: true, required: false
  private _rdIpv4Address?: string; 
  public get rdIpv4Address() {
    return this.getStringAttribute('rd_ipv4_address');
  }
  public set rdIpv4Address(value: string) {
    this._rdIpv4Address = value;
  }
  public resetRdIpv4Address() {
    this._rdIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdIpv4AddressInput() {
    return this._rdIpv4Address;
  }

  // rd_ipv4_address_index - computed: false, optional: true, required: false
  private _rdIpv4AddressIndex?: number; 
  public get rdIpv4AddressIndex() {
    return this.getNumberAttribute('rd_ipv4_address_index');
  }
  public set rdIpv4AddressIndex(value: number) {
    this._rdIpv4AddressIndex = value;
  }
  public resetRdIpv4AddressIndex() {
    this._rdIpv4AddressIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdIpv4AddressIndexInput() {
    return this._rdIpv4AddressIndex;
  }

  // rd_two_byte_as_index - computed: false, optional: true, required: false
  private _rdTwoByteAsIndex?: number; 
  public get rdTwoByteAsIndex() {
    return this.getNumberAttribute('rd_two_byte_as_index');
  }
  public set rdTwoByteAsIndex(value: number) {
    this._rdTwoByteAsIndex = value;
  }
  public resetRdTwoByteAsIndex() {
    this._rdTwoByteAsIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdTwoByteAsIndexInput() {
    return this._rdTwoByteAsIndex;
  }

  // rd_two_byte_as_number - computed: false, optional: true, required: false
  private _rdTwoByteAsNumber?: string; 
  public get rdTwoByteAsNumber() {
    return this.getStringAttribute('rd_two_byte_as_number');
  }
  public set rdTwoByteAsNumber(value: string) {
    this._rdTwoByteAsNumber = value;
  }
  public resetRdTwoByteAsNumber() {
    this._rdTwoByteAsNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdTwoByteAsNumberInput() {
    return this._rdTwoByteAsNumber;
  }

  // vpn_id - computed: false, optional: true, required: false
  private _vpnId?: string; 
  public get vpnId() {
    return this.getStringAttribute('vpn_id');
  }
  public set vpnId(value: string) {
    this._vpnId = value;
  }
  public resetVpnId() {
    this._vpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }

  // vrf_name - computed: false, optional: false, required: true
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      ipv4_flowspec: cdktf.booleanToTerraform(this._ipv4Flowspec),
      ipv4_multicast: cdktf.booleanToTerraform(this._ipv4Multicast),
      ipv4_unicast: cdktf.booleanToTerraform(this._ipv4Unicast),
      ipv4_unicast_export_route_policy: cdktf.stringToTerraform(this._ipv4UnicastExportRoutePolicy),
      ipv4_unicast_export_route_target_four_byte_as_format: cdktf.listMapper(vrfIpv4UnicastExportRouteTargetFourByteAsFormatToTerraform, false)(this._ipv4UnicastExportRouteTargetFourByteAsFormat.internalValue),
      ipv4_unicast_export_route_target_ip_address_format: cdktf.listMapper(vrfIpv4UnicastExportRouteTargetIpAddressFormatToTerraform, false)(this._ipv4UnicastExportRouteTargetIpAddressFormat.internalValue),
      ipv4_unicast_export_route_target_two_byte_as_format: cdktf.listMapper(vrfIpv4UnicastExportRouteTargetTwoByteAsFormatToTerraform, false)(this._ipv4UnicastExportRouteTargetTwoByteAsFormat.internalValue),
      ipv4_unicast_import_route_policy: cdktf.stringToTerraform(this._ipv4UnicastImportRoutePolicy),
      ipv4_unicast_import_route_target_four_byte_as_format: cdktf.listMapper(vrfIpv4UnicastImportRouteTargetFourByteAsFormatToTerraform, false)(this._ipv4UnicastImportRouteTargetFourByteAsFormat.internalValue),
      ipv4_unicast_import_route_target_ip_address_format: cdktf.listMapper(vrfIpv4UnicastImportRouteTargetIpAddressFormatToTerraform, false)(this._ipv4UnicastImportRouteTargetIpAddressFormat.internalValue),
      ipv4_unicast_import_route_target_two_byte_as_format: cdktf.listMapper(vrfIpv4UnicastImportRouteTargetTwoByteAsFormatToTerraform, false)(this._ipv4UnicastImportRouteTargetTwoByteAsFormat.internalValue),
      ipv6_flowspec: cdktf.booleanToTerraform(this._ipv6Flowspec),
      ipv6_multicast: cdktf.booleanToTerraform(this._ipv6Multicast),
      ipv6_unicast: cdktf.booleanToTerraform(this._ipv6Unicast),
      ipv6_unicast_export_route_policy: cdktf.stringToTerraform(this._ipv6UnicastExportRoutePolicy),
      ipv6_unicast_export_route_target_four_byte_as_format: cdktf.listMapper(vrfIpv6UnicastExportRouteTargetFourByteAsFormatToTerraform, false)(this._ipv6UnicastExportRouteTargetFourByteAsFormat.internalValue),
      ipv6_unicast_export_route_target_ip_address_format: cdktf.listMapper(vrfIpv6UnicastExportRouteTargetIpAddressFormatToTerraform, false)(this._ipv6UnicastExportRouteTargetIpAddressFormat.internalValue),
      ipv6_unicast_export_route_target_two_byte_as_format: cdktf.listMapper(vrfIpv6UnicastExportRouteTargetTwoByteAsFormatToTerraform, false)(this._ipv6UnicastExportRouteTargetTwoByteAsFormat.internalValue),
      ipv6_unicast_import_route_policy: cdktf.stringToTerraform(this._ipv6UnicastImportRoutePolicy),
      ipv6_unicast_import_route_target_four_byte_as_format: cdktf.listMapper(vrfIpv6UnicastImportRouteTargetFourByteAsFormatToTerraform, false)(this._ipv6UnicastImportRouteTargetFourByteAsFormat.internalValue),
      ipv6_unicast_import_route_target_ip_address_format: cdktf.listMapper(vrfIpv6UnicastImportRouteTargetIpAddressFormatToTerraform, false)(this._ipv6UnicastImportRouteTargetIpAddressFormat.internalValue),
      ipv6_unicast_import_route_target_two_byte_as_format: cdktf.listMapper(vrfIpv6UnicastImportRouteTargetTwoByteAsFormatToTerraform, false)(this._ipv6UnicastImportRouteTargetTwoByteAsFormat.internalValue),
      rd_four_byte_as_index: cdktf.numberToTerraform(this._rdFourByteAsIndex),
      rd_four_byte_as_number: cdktf.stringToTerraform(this._rdFourByteAsNumber),
      rd_ipv4_address: cdktf.stringToTerraform(this._rdIpv4Address),
      rd_ipv4_address_index: cdktf.numberToTerraform(this._rdIpv4AddressIndex),
      rd_two_byte_as_index: cdktf.numberToTerraform(this._rdTwoByteAsIndex),
      rd_two_byte_as_number: cdktf.stringToTerraform(this._rdTwoByteAsNumber),
      vpn_id: cdktf.stringToTerraform(this._vpnId),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      ipv4_flowspec: {
        value: cdktf.booleanToHclTerraform(this._ipv4Flowspec),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_multicast: {
        value: cdktf.booleanToHclTerraform(this._ipv4Multicast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_unicast: {
        value: cdktf.booleanToHclTerraform(this._ipv4Unicast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_unicast_export_route_policy: {
        value: cdktf.stringToHclTerraform(this._ipv4UnicastExportRoutePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_unicast_export_route_target_four_byte_as_format: {
        value: cdktf.listMapperHcl(vrfIpv4UnicastExportRouteTargetFourByteAsFormatToHclTerraform, false)(this._ipv4UnicastExportRouteTargetFourByteAsFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrfIpv4UnicastExportRouteTargetFourByteAsFormatList",
      },
      ipv4_unicast_export_route_target_ip_address_format: {
        value: cdktf.listMapperHcl(vrfIpv4UnicastExportRouteTargetIpAddressFormatToHclTerraform, false)(this._ipv4UnicastExportRouteTargetIpAddressFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrfIpv4UnicastExportRouteTargetIpAddressFormatList",
      },
      ipv4_unicast_export_route_target_two_byte_as_format: {
        value: cdktf.listMapperHcl(vrfIpv4UnicastExportRouteTargetTwoByteAsFormatToHclTerraform, false)(this._ipv4UnicastExportRouteTargetTwoByteAsFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrfIpv4UnicastExportRouteTargetTwoByteAsFormatList",
      },
      ipv4_unicast_import_route_policy: {
        value: cdktf.stringToHclTerraform(this._ipv4UnicastImportRoutePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_unicast_import_route_target_four_byte_as_format: {
        value: cdktf.listMapperHcl(vrfIpv4UnicastImportRouteTargetFourByteAsFormatToHclTerraform, false)(this._ipv4UnicastImportRouteTargetFourByteAsFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrfIpv4UnicastImportRouteTargetFourByteAsFormatList",
      },
      ipv4_unicast_import_route_target_ip_address_format: {
        value: cdktf.listMapperHcl(vrfIpv4UnicastImportRouteTargetIpAddressFormatToHclTerraform, false)(this._ipv4UnicastImportRouteTargetIpAddressFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrfIpv4UnicastImportRouteTargetIpAddressFormatList",
      },
      ipv4_unicast_import_route_target_two_byte_as_format: {
        value: cdktf.listMapperHcl(vrfIpv4UnicastImportRouteTargetTwoByteAsFormatToHclTerraform, false)(this._ipv4UnicastImportRouteTargetTwoByteAsFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrfIpv4UnicastImportRouteTargetTwoByteAsFormatList",
      },
      ipv6_flowspec: {
        value: cdktf.booleanToHclTerraform(this._ipv6Flowspec),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_multicast: {
        value: cdktf.booleanToHclTerraform(this._ipv6Multicast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_unicast: {
        value: cdktf.booleanToHclTerraform(this._ipv6Unicast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_unicast_export_route_policy: {
        value: cdktf.stringToHclTerraform(this._ipv6UnicastExportRoutePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_unicast_export_route_target_four_byte_as_format: {
        value: cdktf.listMapperHcl(vrfIpv6UnicastExportRouteTargetFourByteAsFormatToHclTerraform, false)(this._ipv6UnicastExportRouteTargetFourByteAsFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrfIpv6UnicastExportRouteTargetFourByteAsFormatList",
      },
      ipv6_unicast_export_route_target_ip_address_format: {
        value: cdktf.listMapperHcl(vrfIpv6UnicastExportRouteTargetIpAddressFormatToHclTerraform, false)(this._ipv6UnicastExportRouteTargetIpAddressFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrfIpv6UnicastExportRouteTargetIpAddressFormatList",
      },
      ipv6_unicast_export_route_target_two_byte_as_format: {
        value: cdktf.listMapperHcl(vrfIpv6UnicastExportRouteTargetTwoByteAsFormatToHclTerraform, false)(this._ipv6UnicastExportRouteTargetTwoByteAsFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrfIpv6UnicastExportRouteTargetTwoByteAsFormatList",
      },
      ipv6_unicast_import_route_policy: {
        value: cdktf.stringToHclTerraform(this._ipv6UnicastImportRoutePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_unicast_import_route_target_four_byte_as_format: {
        value: cdktf.listMapperHcl(vrfIpv6UnicastImportRouteTargetFourByteAsFormatToHclTerraform, false)(this._ipv6UnicastImportRouteTargetFourByteAsFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrfIpv6UnicastImportRouteTargetFourByteAsFormatList",
      },
      ipv6_unicast_import_route_target_ip_address_format: {
        value: cdktf.listMapperHcl(vrfIpv6UnicastImportRouteTargetIpAddressFormatToHclTerraform, false)(this._ipv6UnicastImportRouteTargetIpAddressFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrfIpv6UnicastImportRouteTargetIpAddressFormatList",
      },
      ipv6_unicast_import_route_target_two_byte_as_format: {
        value: cdktf.listMapperHcl(vrfIpv6UnicastImportRouteTargetTwoByteAsFormatToHclTerraform, false)(this._ipv6UnicastImportRouteTargetTwoByteAsFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrfIpv6UnicastImportRouteTargetTwoByteAsFormatList",
      },
      rd_four_byte_as_index: {
        value: cdktf.numberToHclTerraform(this._rdFourByteAsIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rd_four_byte_as_number: {
        value: cdktf.stringToHclTerraform(this._rdFourByteAsNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rd_ipv4_address: {
        value: cdktf.stringToHclTerraform(this._rdIpv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rd_ipv4_address_index: {
        value: cdktf.numberToHclTerraform(this._rdIpv4AddressIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rd_two_byte_as_index: {
        value: cdktf.numberToHclTerraform(this._rdTwoByteAsIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rd_two_byte_as_number: {
        value: cdktf.stringToHclTerraform(this._rdTwoByteAsNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_id: {
        value: cdktf.stringToHclTerraform(this._vpnId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_name: {
        value: cdktf.stringToHclTerraform(this._vrfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
