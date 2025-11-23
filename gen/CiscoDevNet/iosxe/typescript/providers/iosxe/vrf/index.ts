// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VrfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Address family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#address_family_ipv4 Vrf#address_family_ipv4}
  */
  readonly addressFamilyIpv4?: boolean | cdktf.IResolvable;
  /**
  * Address family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#address_family_ipv6 Vrf#address_family_ipv6}
  */
  readonly addressFamilyIpv6?: boolean | cdktf.IResolvable;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#delete_mode Vrf#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * VRF specific description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#description Vrf#description}
  */
  readonly description?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#device Vrf#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#ipv4_route_replicate Vrf#ipv4_route_replicate}
  */
  readonly ipv4RouteReplicate?: VrfIpv4RouteReplicate[] | cdktf.IResolvable;
  /**
  * Export Target-VPN community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#ipv4_route_target_export Vrf#ipv4_route_target_export}
  */
  readonly ipv4RouteTargetExport?: VrfIpv4RouteTargetExport[] | cdktf.IResolvable;
  /**
  * Export Target-VPN community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#ipv4_route_target_export_stitching Vrf#ipv4_route_target_export_stitching}
  */
  readonly ipv4RouteTargetExportStitching?: VrfIpv4RouteTargetExportStitching[] | cdktf.IResolvable;
  /**
  * Import Target-VPN community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#ipv4_route_target_import Vrf#ipv4_route_target_import}
  */
  readonly ipv4RouteTargetImport?: VrfIpv4RouteTargetImport[] | cdktf.IResolvable;
  /**
  * Import Target-VPN community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#ipv4_route_target_import_stitching Vrf#ipv4_route_target_import_stitching}
  */
  readonly ipv4RouteTargetImportStitching?: VrfIpv4RouteTargetImportStitching[] | cdktf.IResolvable;
  /**
  * Export Target-VPN community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#ipv6_route_target_export Vrf#ipv6_route_target_export}
  */
  readonly ipv6RouteTargetExport?: VrfIpv6RouteTargetExport[] | cdktf.IResolvable;
  /**
  * Export Target-VPN community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#ipv6_route_target_export_stitching Vrf#ipv6_route_target_export_stitching}
  */
  readonly ipv6RouteTargetExportStitching?: VrfIpv6RouteTargetExportStitching[] | cdktf.IResolvable;
  /**
  * Import Target-VPN community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#ipv6_route_target_import Vrf#ipv6_route_target_import}
  */
  readonly ipv6RouteTargetImport?: VrfIpv6RouteTargetImport[] | cdktf.IResolvable;
  /**
  * Import Target-VPN community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#ipv6_route_target_import_stitching Vrf#ipv6_route_target_import_stitching}
  */
  readonly ipv6RouteTargetImportStitching?: VrfIpv6RouteTargetImportStitching[] | cdktf.IResolvable;
  /**
  * WORD;;VRF name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#name Vrf#name}
  */
  readonly name: string;
  /**
  * Specify Route Distinguisher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#rd Vrf#rd}
  */
  readonly rd?: string;
  /**
  * Export Target-VPN community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#route_target_export Vrf#route_target_export}
  */
  readonly routeTargetExport?: VrfRouteTargetExport[] | cdktf.IResolvable;
  /**
  * Import Target-VPN community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#route_target_import Vrf#route_target_import}
  */
  readonly routeTargetImport?: VrfRouteTargetImport[] | cdktf.IResolvable;
  /**
  * Configure VPN ID in rfc2685 format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#vpn_id Vrf#vpn_id}
  */
  readonly vpnId?: string;
}
export interface VrfIpv4RouteReplicate {
  /**
  * Source VRF name or 'global'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#name Vrf#name}
  */
  readonly name: string;
  /**
  * All routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#unicast_all Vrf#unicast_all}
  */
  readonly unicastAll?: boolean | cdktf.IResolvable;
  /**
  * Route map reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#unicast_all_route_map Vrf#unicast_all_route_map}
  */
  readonly unicastAllRouteMap?: string;
}

export function vrfIpv4RouteReplicateToTerraform(struct?: VrfIpv4RouteReplicate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    unicast_all: cdktf.booleanToTerraform(struct!.unicastAll),
    unicast_all_route_map: cdktf.stringToTerraform(struct!.unicastAllRouteMap),
  }
}


export function vrfIpv4RouteReplicateToHclTerraform(struct?: VrfIpv4RouteReplicate | cdktf.IResolvable): any {
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
    unicast_all: {
      value: cdktf.booleanToHclTerraform(struct!.unicastAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unicast_all_route_map: {
      value: cdktf.stringToHclTerraform(struct!.unicastAllRouteMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfIpv4RouteReplicateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv4RouteReplicate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._unicastAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.unicastAll = this._unicastAll;
    }
    if (this._unicastAllRouteMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.unicastAllRouteMap = this._unicastAllRouteMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv4RouteReplicate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._unicastAll = undefined;
      this._unicastAllRouteMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._unicastAll = value.unicastAll;
      this._unicastAllRouteMap = value.unicastAllRouteMap;
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

  // unicast_all - computed: false, optional: true, required: false
  private _unicastAll?: boolean | cdktf.IResolvable; 
  public get unicastAll() {
    return this.getBooleanAttribute('unicast_all');
  }
  public set unicastAll(value: boolean | cdktf.IResolvable) {
    this._unicastAll = value;
  }
  public resetUnicastAll() {
    this._unicastAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastAllInput() {
    return this._unicastAll;
  }

  // unicast_all_route_map - computed: false, optional: true, required: false
  private _unicastAllRouteMap?: string; 
  public get unicastAllRouteMap() {
    return this.getStringAttribute('unicast_all_route_map');
  }
  public set unicastAllRouteMap(value: string) {
    this._unicastAllRouteMap = value;
  }
  public resetUnicastAllRouteMap() {
    this._unicastAllRouteMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastAllRouteMapInput() {
    return this._unicastAllRouteMap;
  }
}

export class VrfIpv4RouteReplicateList extends cdktf.ComplexList {
  public internalValue? : VrfIpv4RouteReplicate[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv4RouteReplicateOutputReference {
    return new VrfIpv4RouteReplicateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfIpv4RouteTargetExport {
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#value Vrf#value}
  */
  readonly value: string;
}

export function vrfIpv4RouteTargetExportToTerraform(struct?: VrfIpv4RouteTargetExport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfIpv4RouteTargetExportToHclTerraform(struct?: VrfIpv4RouteTargetExport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfIpv4RouteTargetExportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv4RouteTargetExport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv4RouteTargetExport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfIpv4RouteTargetExportList extends cdktf.ComplexList {
  public internalValue? : VrfIpv4RouteTargetExport[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv4RouteTargetExportOutputReference {
    return new VrfIpv4RouteTargetExportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfIpv4RouteTargetExportStitching {
  /**
  * VXLAN route target set
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#stitching Vrf#stitching}
  */
  readonly stitching?: boolean | cdktf.IResolvable;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#value Vrf#value}
  */
  readonly value: string;
}

export function vrfIpv4RouteTargetExportStitchingToTerraform(struct?: VrfIpv4RouteTargetExportStitching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stitching: cdktf.booleanToTerraform(struct!.stitching),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfIpv4RouteTargetExportStitchingToHclTerraform(struct?: VrfIpv4RouteTargetExportStitching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stitching: {
      value: cdktf.booleanToHclTerraform(struct!.stitching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfIpv4RouteTargetExportStitchingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv4RouteTargetExportStitching | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.stitching = this._stitching;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv4RouteTargetExportStitching | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stitching = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stitching = value.stitching;
      this._value = value.value;
    }
  }

  // stitching - computed: true, optional: true, required: false
  private _stitching?: boolean | cdktf.IResolvable; 
  public get stitching() {
    return this.getBooleanAttribute('stitching');
  }
  public set stitching(value: boolean | cdktf.IResolvable) {
    this._stitching = value;
  }
  public resetStitching() {
    this._stitching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stitchingInput() {
    return this._stitching;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfIpv4RouteTargetExportStitchingList extends cdktf.ComplexList {
  public internalValue? : VrfIpv4RouteTargetExportStitching[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv4RouteTargetExportStitchingOutputReference {
    return new VrfIpv4RouteTargetExportStitchingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfIpv4RouteTargetImport {
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#value Vrf#value}
  */
  readonly value: string;
}

export function vrfIpv4RouteTargetImportToTerraform(struct?: VrfIpv4RouteTargetImport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfIpv4RouteTargetImportToHclTerraform(struct?: VrfIpv4RouteTargetImport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfIpv4RouteTargetImportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv4RouteTargetImport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv4RouteTargetImport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfIpv4RouteTargetImportList extends cdktf.ComplexList {
  public internalValue? : VrfIpv4RouteTargetImport[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv4RouteTargetImportOutputReference {
    return new VrfIpv4RouteTargetImportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfIpv4RouteTargetImportStitching {
  /**
  * VXLAN route target set
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#stitching Vrf#stitching}
  */
  readonly stitching?: boolean | cdktf.IResolvable;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#value Vrf#value}
  */
  readonly value: string;
}

export function vrfIpv4RouteTargetImportStitchingToTerraform(struct?: VrfIpv4RouteTargetImportStitching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stitching: cdktf.booleanToTerraform(struct!.stitching),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfIpv4RouteTargetImportStitchingToHclTerraform(struct?: VrfIpv4RouteTargetImportStitching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stitching: {
      value: cdktf.booleanToHclTerraform(struct!.stitching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfIpv4RouteTargetImportStitchingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv4RouteTargetImportStitching | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.stitching = this._stitching;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv4RouteTargetImportStitching | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stitching = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stitching = value.stitching;
      this._value = value.value;
    }
  }

  // stitching - computed: true, optional: true, required: false
  private _stitching?: boolean | cdktf.IResolvable; 
  public get stitching() {
    return this.getBooleanAttribute('stitching');
  }
  public set stitching(value: boolean | cdktf.IResolvable) {
    this._stitching = value;
  }
  public resetStitching() {
    this._stitching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stitchingInput() {
    return this._stitching;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfIpv4RouteTargetImportStitchingList extends cdktf.ComplexList {
  public internalValue? : VrfIpv4RouteTargetImportStitching[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv4RouteTargetImportStitchingOutputReference {
    return new VrfIpv4RouteTargetImportStitchingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfIpv6RouteTargetExport {
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#value Vrf#value}
  */
  readonly value: string;
}

export function vrfIpv6RouteTargetExportToTerraform(struct?: VrfIpv6RouteTargetExport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfIpv6RouteTargetExportToHclTerraform(struct?: VrfIpv6RouteTargetExport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfIpv6RouteTargetExportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv6RouteTargetExport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv6RouteTargetExport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfIpv6RouteTargetExportList extends cdktf.ComplexList {
  public internalValue? : VrfIpv6RouteTargetExport[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv6RouteTargetExportOutputReference {
    return new VrfIpv6RouteTargetExportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfIpv6RouteTargetExportStitching {
  /**
  * VXLAN route target set
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#stitching Vrf#stitching}
  */
  readonly stitching?: boolean | cdktf.IResolvable;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#value Vrf#value}
  */
  readonly value: string;
}

export function vrfIpv6RouteTargetExportStitchingToTerraform(struct?: VrfIpv6RouteTargetExportStitching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stitching: cdktf.booleanToTerraform(struct!.stitching),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfIpv6RouteTargetExportStitchingToHclTerraform(struct?: VrfIpv6RouteTargetExportStitching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stitching: {
      value: cdktf.booleanToHclTerraform(struct!.stitching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfIpv6RouteTargetExportStitchingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv6RouteTargetExportStitching | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.stitching = this._stitching;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv6RouteTargetExportStitching | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stitching = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stitching = value.stitching;
      this._value = value.value;
    }
  }

  // stitching - computed: true, optional: true, required: false
  private _stitching?: boolean | cdktf.IResolvable; 
  public get stitching() {
    return this.getBooleanAttribute('stitching');
  }
  public set stitching(value: boolean | cdktf.IResolvable) {
    this._stitching = value;
  }
  public resetStitching() {
    this._stitching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stitchingInput() {
    return this._stitching;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfIpv6RouteTargetExportStitchingList extends cdktf.ComplexList {
  public internalValue? : VrfIpv6RouteTargetExportStitching[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv6RouteTargetExportStitchingOutputReference {
    return new VrfIpv6RouteTargetExportStitchingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfIpv6RouteTargetImport {
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#value Vrf#value}
  */
  readonly value: string;
}

export function vrfIpv6RouteTargetImportToTerraform(struct?: VrfIpv6RouteTargetImport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfIpv6RouteTargetImportToHclTerraform(struct?: VrfIpv6RouteTargetImport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfIpv6RouteTargetImportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv6RouteTargetImport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv6RouteTargetImport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfIpv6RouteTargetImportList extends cdktf.ComplexList {
  public internalValue? : VrfIpv6RouteTargetImport[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv6RouteTargetImportOutputReference {
    return new VrfIpv6RouteTargetImportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfIpv6RouteTargetImportStitching {
  /**
  * VXLAN route target set
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#stitching Vrf#stitching}
  */
  readonly stitching?: boolean | cdktf.IResolvable;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#value Vrf#value}
  */
  readonly value: string;
}

export function vrfIpv6RouteTargetImportStitchingToTerraform(struct?: VrfIpv6RouteTargetImportStitching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stitching: cdktf.booleanToTerraform(struct!.stitching),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfIpv6RouteTargetImportStitchingToHclTerraform(struct?: VrfIpv6RouteTargetImportStitching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stitching: {
      value: cdktf.booleanToHclTerraform(struct!.stitching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfIpv6RouteTargetImportStitchingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfIpv6RouteTargetImportStitching | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.stitching = this._stitching;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfIpv6RouteTargetImportStitching | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stitching = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stitching = value.stitching;
      this._value = value.value;
    }
  }

  // stitching - computed: true, optional: true, required: false
  private _stitching?: boolean | cdktf.IResolvable; 
  public get stitching() {
    return this.getBooleanAttribute('stitching');
  }
  public set stitching(value: boolean | cdktf.IResolvable) {
    this._stitching = value;
  }
  public resetStitching() {
    this._stitching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stitchingInput() {
    return this._stitching;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfIpv6RouteTargetImportStitchingList extends cdktf.ComplexList {
  public internalValue? : VrfIpv6RouteTargetImportStitching[] | cdktf.IResolvable

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
  public get(index: number): VrfIpv6RouteTargetImportStitchingOutputReference {
    return new VrfIpv6RouteTargetImportStitchingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfRouteTargetExport {
  /**
  * VXLAN route target set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#stitching Vrf#stitching}
  */
  readonly stitching?: boolean | cdktf.IResolvable;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#value Vrf#value}
  */
  readonly value: string;
}

export function vrfRouteTargetExportToTerraform(struct?: VrfRouteTargetExport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stitching: cdktf.booleanToTerraform(struct!.stitching),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfRouteTargetExportToHclTerraform(struct?: VrfRouteTargetExport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stitching: {
      value: cdktf.booleanToHclTerraform(struct!.stitching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfRouteTargetExportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfRouteTargetExport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.stitching = this._stitching;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfRouteTargetExport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stitching = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stitching = value.stitching;
      this._value = value.value;
    }
  }

  // stitching - computed: false, optional: true, required: false
  private _stitching?: boolean | cdktf.IResolvable; 
  public get stitching() {
    return this.getBooleanAttribute('stitching');
  }
  public set stitching(value: boolean | cdktf.IResolvable) {
    this._stitching = value;
  }
  public resetStitching() {
    this._stitching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stitchingInput() {
    return this._stitching;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfRouteTargetExportList extends cdktf.ComplexList {
  public internalValue? : VrfRouteTargetExport[] | cdktf.IResolvable

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
  public get(index: number): VrfRouteTargetExportOutputReference {
    return new VrfRouteTargetExportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfRouteTargetImport {
  /**
  * VXLAN route target set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#stitching Vrf#stitching}
  */
  readonly stitching?: boolean | cdktf.IResolvable;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#value Vrf#value}
  */
  readonly value: string;
}

export function vrfRouteTargetImportToTerraform(struct?: VrfRouteTargetImport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stitching: cdktf.booleanToTerraform(struct!.stitching),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfRouteTargetImportToHclTerraform(struct?: VrfRouteTargetImport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stitching: {
      value: cdktf.booleanToHclTerraform(struct!.stitching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfRouteTargetImportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfRouteTargetImport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.stitching = this._stitching;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfRouteTargetImport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stitching = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stitching = value.stitching;
      this._value = value.value;
    }
  }

  // stitching - computed: false, optional: true, required: false
  private _stitching?: boolean | cdktf.IResolvable; 
  public get stitching() {
    return this.getBooleanAttribute('stitching');
  }
  public set stitching(value: boolean | cdktf.IResolvable) {
    this._stitching = value;
  }
  public resetStitching() {
    this._stitching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stitchingInput() {
    return this._stitching;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfRouteTargetImportList extends cdktf.ComplexList {
  public internalValue? : VrfRouteTargetImport[] | cdktf.IResolvable

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
  public get(index: number): VrfRouteTargetImportOutputReference {
    return new VrfRouteTargetImportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf iosxe_vrf}
*/
export class Vrf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_vrf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vrf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vrf to import
  * @param importFromId The id of the existing Vrf that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vrf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_vrf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/vrf iosxe_vrf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VrfConfig
  */
  public constructor(scope: Construct, id: string, config: VrfConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_vrf',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.11.0',
        providerVersionConstraint: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressFamilyIpv4 = config.addressFamilyIpv4;
    this._addressFamilyIpv6 = config.addressFamilyIpv6;
    this._deleteMode = config.deleteMode;
    this._description = config.description;
    this._device = config.device;
    this._ipv4RouteReplicate.internalValue = config.ipv4RouteReplicate;
    this._ipv4RouteTargetExport.internalValue = config.ipv4RouteTargetExport;
    this._ipv4RouteTargetExportStitching.internalValue = config.ipv4RouteTargetExportStitching;
    this._ipv4RouteTargetImport.internalValue = config.ipv4RouteTargetImport;
    this._ipv4RouteTargetImportStitching.internalValue = config.ipv4RouteTargetImportStitching;
    this._ipv6RouteTargetExport.internalValue = config.ipv6RouteTargetExport;
    this._ipv6RouteTargetExportStitching.internalValue = config.ipv6RouteTargetExportStitching;
    this._ipv6RouteTargetImport.internalValue = config.ipv6RouteTargetImport;
    this._ipv6RouteTargetImportStitching.internalValue = config.ipv6RouteTargetImportStitching;
    this._name = config.name;
    this._rd = config.rd;
    this._routeTargetExport.internalValue = config.routeTargetExport;
    this._routeTargetImport.internalValue = config.routeTargetImport;
    this._vpnId = config.vpnId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_family_ipv4 - computed: false, optional: true, required: false
  private _addressFamilyIpv4?: boolean | cdktf.IResolvable; 
  public get addressFamilyIpv4() {
    return this.getBooleanAttribute('address_family_ipv4');
  }
  public set addressFamilyIpv4(value: boolean | cdktf.IResolvable) {
    this._addressFamilyIpv4 = value;
  }
  public resetAddressFamilyIpv4() {
    this._addressFamilyIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyIpv4Input() {
    return this._addressFamilyIpv4;
  }

  // address_family_ipv6 - computed: false, optional: true, required: false
  private _addressFamilyIpv6?: boolean | cdktf.IResolvable; 
  public get addressFamilyIpv6() {
    return this.getBooleanAttribute('address_family_ipv6');
  }
  public set addressFamilyIpv6(value: boolean | cdktf.IResolvable) {
    this._addressFamilyIpv6 = value;
  }
  public resetAddressFamilyIpv6() {
    this._addressFamilyIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyIpv6Input() {
    return this._addressFamilyIpv6;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_route_replicate - computed: false, optional: true, required: false
  private _ipv4RouteReplicate = new VrfIpv4RouteReplicateList(this, "ipv4_route_replicate", false);
  public get ipv4RouteReplicate() {
    return this._ipv4RouteReplicate;
  }
  public putIpv4RouteReplicate(value: VrfIpv4RouteReplicate[] | cdktf.IResolvable) {
    this._ipv4RouteReplicate.internalValue = value;
  }
  public resetIpv4RouteReplicate() {
    this._ipv4RouteReplicate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4RouteReplicateInput() {
    return this._ipv4RouteReplicate.internalValue;
  }

  // ipv4_route_target_export - computed: false, optional: true, required: false
  private _ipv4RouteTargetExport = new VrfIpv4RouteTargetExportList(this, "ipv4_route_target_export", true);
  public get ipv4RouteTargetExport() {
    return this._ipv4RouteTargetExport;
  }
  public putIpv4RouteTargetExport(value: VrfIpv4RouteTargetExport[] | cdktf.IResolvable) {
    this._ipv4RouteTargetExport.internalValue = value;
  }
  public resetIpv4RouteTargetExport() {
    this._ipv4RouteTargetExport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4RouteTargetExportInput() {
    return this._ipv4RouteTargetExport.internalValue;
  }

  // ipv4_route_target_export_stitching - computed: false, optional: true, required: false
  private _ipv4RouteTargetExportStitching = new VrfIpv4RouteTargetExportStitchingList(this, "ipv4_route_target_export_stitching", true);
  public get ipv4RouteTargetExportStitching() {
    return this._ipv4RouteTargetExportStitching;
  }
  public putIpv4RouteTargetExportStitching(value: VrfIpv4RouteTargetExportStitching[] | cdktf.IResolvable) {
    this._ipv4RouteTargetExportStitching.internalValue = value;
  }
  public resetIpv4RouteTargetExportStitching() {
    this._ipv4RouteTargetExportStitching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4RouteTargetExportStitchingInput() {
    return this._ipv4RouteTargetExportStitching.internalValue;
  }

  // ipv4_route_target_import - computed: false, optional: true, required: false
  private _ipv4RouteTargetImport = new VrfIpv4RouteTargetImportList(this, "ipv4_route_target_import", true);
  public get ipv4RouteTargetImport() {
    return this._ipv4RouteTargetImport;
  }
  public putIpv4RouteTargetImport(value: VrfIpv4RouteTargetImport[] | cdktf.IResolvable) {
    this._ipv4RouteTargetImport.internalValue = value;
  }
  public resetIpv4RouteTargetImport() {
    this._ipv4RouteTargetImport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4RouteTargetImportInput() {
    return this._ipv4RouteTargetImport.internalValue;
  }

  // ipv4_route_target_import_stitching - computed: false, optional: true, required: false
  private _ipv4RouteTargetImportStitching = new VrfIpv4RouteTargetImportStitchingList(this, "ipv4_route_target_import_stitching", true);
  public get ipv4RouteTargetImportStitching() {
    return this._ipv4RouteTargetImportStitching;
  }
  public putIpv4RouteTargetImportStitching(value: VrfIpv4RouteTargetImportStitching[] | cdktf.IResolvable) {
    this._ipv4RouteTargetImportStitching.internalValue = value;
  }
  public resetIpv4RouteTargetImportStitching() {
    this._ipv4RouteTargetImportStitching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4RouteTargetImportStitchingInput() {
    return this._ipv4RouteTargetImportStitching.internalValue;
  }

  // ipv6_route_target_export - computed: false, optional: true, required: false
  private _ipv6RouteTargetExport = new VrfIpv6RouteTargetExportList(this, "ipv6_route_target_export", true);
  public get ipv6RouteTargetExport() {
    return this._ipv6RouteTargetExport;
  }
  public putIpv6RouteTargetExport(value: VrfIpv6RouteTargetExport[] | cdktf.IResolvable) {
    this._ipv6RouteTargetExport.internalValue = value;
  }
  public resetIpv6RouteTargetExport() {
    this._ipv6RouteTargetExport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RouteTargetExportInput() {
    return this._ipv6RouteTargetExport.internalValue;
  }

  // ipv6_route_target_export_stitching - computed: false, optional: true, required: false
  private _ipv6RouteTargetExportStitching = new VrfIpv6RouteTargetExportStitchingList(this, "ipv6_route_target_export_stitching", true);
  public get ipv6RouteTargetExportStitching() {
    return this._ipv6RouteTargetExportStitching;
  }
  public putIpv6RouteTargetExportStitching(value: VrfIpv6RouteTargetExportStitching[] | cdktf.IResolvable) {
    this._ipv6RouteTargetExportStitching.internalValue = value;
  }
  public resetIpv6RouteTargetExportStitching() {
    this._ipv6RouteTargetExportStitching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RouteTargetExportStitchingInput() {
    return this._ipv6RouteTargetExportStitching.internalValue;
  }

  // ipv6_route_target_import - computed: false, optional: true, required: false
  private _ipv6RouteTargetImport = new VrfIpv6RouteTargetImportList(this, "ipv6_route_target_import", true);
  public get ipv6RouteTargetImport() {
    return this._ipv6RouteTargetImport;
  }
  public putIpv6RouteTargetImport(value: VrfIpv6RouteTargetImport[] | cdktf.IResolvable) {
    this._ipv6RouteTargetImport.internalValue = value;
  }
  public resetIpv6RouteTargetImport() {
    this._ipv6RouteTargetImport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RouteTargetImportInput() {
    return this._ipv6RouteTargetImport.internalValue;
  }

  // ipv6_route_target_import_stitching - computed: false, optional: true, required: false
  private _ipv6RouteTargetImportStitching = new VrfIpv6RouteTargetImportStitchingList(this, "ipv6_route_target_import_stitching", true);
  public get ipv6RouteTargetImportStitching() {
    return this._ipv6RouteTargetImportStitching;
  }
  public putIpv6RouteTargetImportStitching(value: VrfIpv6RouteTargetImportStitching[] | cdktf.IResolvable) {
    this._ipv6RouteTargetImportStitching.internalValue = value;
  }
  public resetIpv6RouteTargetImportStitching() {
    this._ipv6RouteTargetImportStitching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RouteTargetImportStitchingInput() {
    return this._ipv6RouteTargetImportStitching.internalValue;
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

  // rd - computed: false, optional: true, required: false
  private _rd?: string; 
  public get rd() {
    return this.getStringAttribute('rd');
  }
  public set rd(value: string) {
    this._rd = value;
  }
  public resetRd() {
    this._rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdInput() {
    return this._rd;
  }

  // route_target_export - computed: false, optional: true, required: false
  private _routeTargetExport = new VrfRouteTargetExportList(this, "route_target_export", true);
  public get routeTargetExport() {
    return this._routeTargetExport;
  }
  public putRouteTargetExport(value: VrfRouteTargetExport[] | cdktf.IResolvable) {
    this._routeTargetExport.internalValue = value;
  }
  public resetRouteTargetExport() {
    this._routeTargetExport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetExportInput() {
    return this._routeTargetExport.internalValue;
  }

  // route_target_import - computed: false, optional: true, required: false
  private _routeTargetImport = new VrfRouteTargetImportList(this, "route_target_import", true);
  public get routeTargetImport() {
    return this._routeTargetImport;
  }
  public putRouteTargetImport(value: VrfRouteTargetImport[] | cdktf.IResolvable) {
    this._routeTargetImport.internalValue = value;
  }
  public resetRouteTargetImport() {
    this._routeTargetImport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetImportInput() {
    return this._routeTargetImport.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_family_ipv4: cdktf.booleanToTerraform(this._addressFamilyIpv4),
      address_family_ipv6: cdktf.booleanToTerraform(this._addressFamilyIpv6),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      ipv4_route_replicate: cdktf.listMapper(vrfIpv4RouteReplicateToTerraform, false)(this._ipv4RouteReplicate.internalValue),
      ipv4_route_target_export: cdktf.listMapper(vrfIpv4RouteTargetExportToTerraform, false)(this._ipv4RouteTargetExport.internalValue),
      ipv4_route_target_export_stitching: cdktf.listMapper(vrfIpv4RouteTargetExportStitchingToTerraform, false)(this._ipv4RouteTargetExportStitching.internalValue),
      ipv4_route_target_import: cdktf.listMapper(vrfIpv4RouteTargetImportToTerraform, false)(this._ipv4RouteTargetImport.internalValue),
      ipv4_route_target_import_stitching: cdktf.listMapper(vrfIpv4RouteTargetImportStitchingToTerraform, false)(this._ipv4RouteTargetImportStitching.internalValue),
      ipv6_route_target_export: cdktf.listMapper(vrfIpv6RouteTargetExportToTerraform, false)(this._ipv6RouteTargetExport.internalValue),
      ipv6_route_target_export_stitching: cdktf.listMapper(vrfIpv6RouteTargetExportStitchingToTerraform, false)(this._ipv6RouteTargetExportStitching.internalValue),
      ipv6_route_target_import: cdktf.listMapper(vrfIpv6RouteTargetImportToTerraform, false)(this._ipv6RouteTargetImport.internalValue),
      ipv6_route_target_import_stitching: cdktf.listMapper(vrfIpv6RouteTargetImportStitchingToTerraform, false)(this._ipv6RouteTargetImportStitching.internalValue),
      name: cdktf.stringToTerraform(this._name),
      rd: cdktf.stringToTerraform(this._rd),
      route_target_export: cdktf.listMapper(vrfRouteTargetExportToTerraform, false)(this._routeTargetExport.internalValue),
      route_target_import: cdktf.listMapper(vrfRouteTargetImportToTerraform, false)(this._routeTargetImport.internalValue),
      vpn_id: cdktf.stringToTerraform(this._vpnId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_family_ipv4: {
        value: cdktf.booleanToHclTerraform(this._addressFamilyIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      address_family_ipv6: {
        value: cdktf.booleanToHclTerraform(this._addressFamilyIpv6),
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
      ipv4_route_replicate: {
        value: cdktf.listMapperHcl(vrfIpv4RouteReplicateToHclTerraform, false)(this._ipv4RouteReplicate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrfIpv4RouteReplicateList",
      },
      ipv4_route_target_export: {
        value: cdktf.listMapperHcl(vrfIpv4RouteTargetExportToHclTerraform, false)(this._ipv4RouteTargetExport.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfIpv4RouteTargetExportList",
      },
      ipv4_route_target_export_stitching: {
        value: cdktf.listMapperHcl(vrfIpv4RouteTargetExportStitchingToHclTerraform, false)(this._ipv4RouteTargetExportStitching.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfIpv4RouteTargetExportStitchingList",
      },
      ipv4_route_target_import: {
        value: cdktf.listMapperHcl(vrfIpv4RouteTargetImportToHclTerraform, false)(this._ipv4RouteTargetImport.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfIpv4RouteTargetImportList",
      },
      ipv4_route_target_import_stitching: {
        value: cdktf.listMapperHcl(vrfIpv4RouteTargetImportStitchingToHclTerraform, false)(this._ipv4RouteTargetImportStitching.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfIpv4RouteTargetImportStitchingList",
      },
      ipv6_route_target_export: {
        value: cdktf.listMapperHcl(vrfIpv6RouteTargetExportToHclTerraform, false)(this._ipv6RouteTargetExport.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfIpv6RouteTargetExportList",
      },
      ipv6_route_target_export_stitching: {
        value: cdktf.listMapperHcl(vrfIpv6RouteTargetExportStitchingToHclTerraform, false)(this._ipv6RouteTargetExportStitching.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfIpv6RouteTargetExportStitchingList",
      },
      ipv6_route_target_import: {
        value: cdktf.listMapperHcl(vrfIpv6RouteTargetImportToHclTerraform, false)(this._ipv6RouteTargetImport.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfIpv6RouteTargetImportList",
      },
      ipv6_route_target_import_stitching: {
        value: cdktf.listMapperHcl(vrfIpv6RouteTargetImportStitchingToHclTerraform, false)(this._ipv6RouteTargetImportStitching.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfIpv6RouteTargetImportStitchingList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rd: {
        value: cdktf.stringToHclTerraform(this._rd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_target_export: {
        value: cdktf.listMapperHcl(vrfRouteTargetExportToHclTerraform, false)(this._routeTargetExport.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfRouteTargetExportList",
      },
      route_target_import: {
        value: cdktf.listMapperHcl(vrfRouteTargetImportToHclTerraform, false)(this._routeTargetImport.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfRouteTargetImportList",
      },
      vpn_id: {
        value: cdktf.stringToHclTerraform(this._vpnId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
