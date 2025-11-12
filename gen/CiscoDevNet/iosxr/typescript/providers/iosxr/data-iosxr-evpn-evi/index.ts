// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/evpn_evi
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrEvpnEviConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/evpn_evi#device DataIosxrEvpnEvi#device}
  */
  readonly device?: string;
  /**
  * Configure EVPN Instance VPN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/evpn_evi#vpn_id DataIosxrEvpnEvi#vpn_id}
  */
  readonly vpnId: number;
}
export interface DataIosxrEvpnEviBgpRouteTargetExportFourByteAsFormat {
}

export function dataIosxrEvpnEviBgpRouteTargetExportFourByteAsFormatToTerraform(struct?: DataIosxrEvpnEviBgpRouteTargetExportFourByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrEvpnEviBgpRouteTargetExportFourByteAsFormatToHclTerraform(struct?: DataIosxrEvpnEviBgpRouteTargetExportFourByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrEvpnEviBgpRouteTargetExportFourByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrEvpnEviBgpRouteTargetExportFourByteAsFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrEvpnEviBgpRouteTargetExportFourByteAsFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_number - computed: true, optional: false, required: false
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }

  // assigned_number - computed: true, optional: false, required: false
  public get assignedNumber() {
    return this.getNumberAttribute('assigned_number');
  }
}

export class DataIosxrEvpnEviBgpRouteTargetExportFourByteAsFormatList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrEvpnEviBgpRouteTargetExportFourByteAsFormatOutputReference {
    return new DataIosxrEvpnEviBgpRouteTargetExportFourByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrEvpnEviBgpRouteTargetExportIpv4AddressFormat {
}

export function dataIosxrEvpnEviBgpRouteTargetExportIpv4AddressFormatToTerraform(struct?: DataIosxrEvpnEviBgpRouteTargetExportIpv4AddressFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrEvpnEviBgpRouteTargetExportIpv4AddressFormatToHclTerraform(struct?: DataIosxrEvpnEviBgpRouteTargetExportIpv4AddressFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrEvpnEviBgpRouteTargetExportIpv4AddressFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrEvpnEviBgpRouteTargetExportIpv4AddressFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrEvpnEviBgpRouteTargetExportIpv4AddressFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assigned_number - computed: true, optional: false, required: false
  public get assignedNumber() {
    return this.getNumberAttribute('assigned_number');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
}

export class DataIosxrEvpnEviBgpRouteTargetExportIpv4AddressFormatList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrEvpnEviBgpRouteTargetExportIpv4AddressFormatOutputReference {
    return new DataIosxrEvpnEviBgpRouteTargetExportIpv4AddressFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrEvpnEviBgpRouteTargetExportTwoByteAsFormat {
}

export function dataIosxrEvpnEviBgpRouteTargetExportTwoByteAsFormatToTerraform(struct?: DataIosxrEvpnEviBgpRouteTargetExportTwoByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrEvpnEviBgpRouteTargetExportTwoByteAsFormatToHclTerraform(struct?: DataIosxrEvpnEviBgpRouteTargetExportTwoByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrEvpnEviBgpRouteTargetExportTwoByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrEvpnEviBgpRouteTargetExportTwoByteAsFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrEvpnEviBgpRouteTargetExportTwoByteAsFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_number - computed: true, optional: false, required: false
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }

  // assigned_number - computed: true, optional: false, required: false
  public get assignedNumber() {
    return this.getNumberAttribute('assigned_number');
  }
}

export class DataIosxrEvpnEviBgpRouteTargetExportTwoByteAsFormatList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrEvpnEviBgpRouteTargetExportTwoByteAsFormatOutputReference {
    return new DataIosxrEvpnEviBgpRouteTargetExportTwoByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrEvpnEviBgpRouteTargetImportFourByteAsFormat {
}

export function dataIosxrEvpnEviBgpRouteTargetImportFourByteAsFormatToTerraform(struct?: DataIosxrEvpnEviBgpRouteTargetImportFourByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrEvpnEviBgpRouteTargetImportFourByteAsFormatToHclTerraform(struct?: DataIosxrEvpnEviBgpRouteTargetImportFourByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrEvpnEviBgpRouteTargetImportFourByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrEvpnEviBgpRouteTargetImportFourByteAsFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrEvpnEviBgpRouteTargetImportFourByteAsFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_number - computed: true, optional: false, required: false
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }

  // assigned_number - computed: true, optional: false, required: false
  public get assignedNumber() {
    return this.getNumberAttribute('assigned_number');
  }
}

export class DataIosxrEvpnEviBgpRouteTargetImportFourByteAsFormatList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrEvpnEviBgpRouteTargetImportFourByteAsFormatOutputReference {
    return new DataIosxrEvpnEviBgpRouteTargetImportFourByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrEvpnEviBgpRouteTargetImportIpv4AddressFormat {
}

export function dataIosxrEvpnEviBgpRouteTargetImportIpv4AddressFormatToTerraform(struct?: DataIosxrEvpnEviBgpRouteTargetImportIpv4AddressFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrEvpnEviBgpRouteTargetImportIpv4AddressFormatToHclTerraform(struct?: DataIosxrEvpnEviBgpRouteTargetImportIpv4AddressFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrEvpnEviBgpRouteTargetImportIpv4AddressFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrEvpnEviBgpRouteTargetImportIpv4AddressFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrEvpnEviBgpRouteTargetImportIpv4AddressFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assigned_number - computed: true, optional: false, required: false
  public get assignedNumber() {
    return this.getNumberAttribute('assigned_number');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
}

export class DataIosxrEvpnEviBgpRouteTargetImportIpv4AddressFormatList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrEvpnEviBgpRouteTargetImportIpv4AddressFormatOutputReference {
    return new DataIosxrEvpnEviBgpRouteTargetImportIpv4AddressFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrEvpnEviBgpRouteTargetImportTwoByteAsFormat {
}

export function dataIosxrEvpnEviBgpRouteTargetImportTwoByteAsFormatToTerraform(struct?: DataIosxrEvpnEviBgpRouteTargetImportTwoByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrEvpnEviBgpRouteTargetImportTwoByteAsFormatToHclTerraform(struct?: DataIosxrEvpnEviBgpRouteTargetImportTwoByteAsFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrEvpnEviBgpRouteTargetImportTwoByteAsFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrEvpnEviBgpRouteTargetImportTwoByteAsFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrEvpnEviBgpRouteTargetImportTwoByteAsFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_number - computed: true, optional: false, required: false
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }

  // assigned_number - computed: true, optional: false, required: false
  public get assignedNumber() {
    return this.getNumberAttribute('assigned_number');
  }
}

export class DataIosxrEvpnEviBgpRouteTargetImportTwoByteAsFormatList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrEvpnEviBgpRouteTargetImportTwoByteAsFormatOutputReference {
    return new DataIosxrEvpnEviBgpRouteTargetImportTwoByteAsFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/evpn_evi iosxr_evpn_evi}
*/
export class DataIosxrEvpnEvi extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_evpn_evi";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrEvpnEvi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrEvpnEvi to import
  * @param importFromId The id of the existing DataIosxrEvpnEvi that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/evpn_evi#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrEvpnEvi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_evpn_evi", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/evpn_evi iosxr_evpn_evi} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrEvpnEviConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrEvpnEviConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_evpn_evi',
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
    this._device = config.device;
    this._vpnId = config.vpnId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise_mac - computed: true, optional: false, required: false
  public get advertiseMac() {
    return this.getBooleanAttribute('advertise_mac');
  }

  // bgp_rd_four_byte_as_assigned_number - computed: true, optional: false, required: false
  public get bgpRdFourByteAsAssignedNumber() {
    return this.getNumberAttribute('bgp_rd_four_byte_as_assigned_number');
  }

  // bgp_rd_four_byte_as_number - computed: true, optional: false, required: false
  public get bgpRdFourByteAsNumber() {
    return this.getNumberAttribute('bgp_rd_four_byte_as_number');
  }

  // bgp_rd_ipv4_address - computed: true, optional: false, required: false
  public get bgpRdIpv4Address() {
    return this.getStringAttribute('bgp_rd_ipv4_address');
  }

  // bgp_rd_ipv4_address_assigned_number - computed: true, optional: false, required: false
  public get bgpRdIpv4AddressAssignedNumber() {
    return this.getNumberAttribute('bgp_rd_ipv4_address_assigned_number');
  }

  // bgp_rd_two_byte_as_assigned_number - computed: true, optional: false, required: false
  public get bgpRdTwoByteAsAssignedNumber() {
    return this.getNumberAttribute('bgp_rd_two_byte_as_assigned_number');
  }

  // bgp_rd_two_byte_as_number - computed: true, optional: false, required: false
  public get bgpRdTwoByteAsNumber() {
    return this.getNumberAttribute('bgp_rd_two_byte_as_number');
  }

  // bgp_route_policy_export - computed: true, optional: false, required: false
  public get bgpRoutePolicyExport() {
    return this.getStringAttribute('bgp_route_policy_export');
  }

  // bgp_route_policy_import - computed: true, optional: false, required: false
  public get bgpRoutePolicyImport() {
    return this.getStringAttribute('bgp_route_policy_import');
  }

  // bgp_route_target_export_four_byte_as_format - computed: true, optional: false, required: false
  private _bgpRouteTargetExportFourByteAsFormat = new DataIosxrEvpnEviBgpRouteTargetExportFourByteAsFormatList(this, "bgp_route_target_export_four_byte_as_format", false);
  public get bgpRouteTargetExportFourByteAsFormat() {
    return this._bgpRouteTargetExportFourByteAsFormat;
  }

  // bgp_route_target_export_ipv4_address_format - computed: true, optional: false, required: false
  private _bgpRouteTargetExportIpv4AddressFormat = new DataIosxrEvpnEviBgpRouteTargetExportIpv4AddressFormatList(this, "bgp_route_target_export_ipv4_address_format", false);
  public get bgpRouteTargetExportIpv4AddressFormat() {
    return this._bgpRouteTargetExportIpv4AddressFormat;
  }

  // bgp_route_target_export_two_byte_as_format - computed: true, optional: false, required: false
  private _bgpRouteTargetExportTwoByteAsFormat = new DataIosxrEvpnEviBgpRouteTargetExportTwoByteAsFormatList(this, "bgp_route_target_export_two_byte_as_format", false);
  public get bgpRouteTargetExportTwoByteAsFormat() {
    return this._bgpRouteTargetExportTwoByteAsFormat;
  }

  // bgp_route_target_import_four_byte_as_format - computed: true, optional: false, required: false
  private _bgpRouteTargetImportFourByteAsFormat = new DataIosxrEvpnEviBgpRouteTargetImportFourByteAsFormatList(this, "bgp_route_target_import_four_byte_as_format", false);
  public get bgpRouteTargetImportFourByteAsFormat() {
    return this._bgpRouteTargetImportFourByteAsFormat;
  }

  // bgp_route_target_import_ipv4_address_format - computed: true, optional: false, required: false
  private _bgpRouteTargetImportIpv4AddressFormat = new DataIosxrEvpnEviBgpRouteTargetImportIpv4AddressFormatList(this, "bgp_route_target_import_ipv4_address_format", false);
  public get bgpRouteTargetImportIpv4AddressFormat() {
    return this._bgpRouteTargetImportIpv4AddressFormat;
  }

  // bgp_route_target_import_two_byte_as_format - computed: true, optional: false, required: false
  private _bgpRouteTargetImportTwoByteAsFormat = new DataIosxrEvpnEviBgpRouteTargetImportTwoByteAsFormatList(this, "bgp_route_target_import_two_byte_as_format", false);
  public get bgpRouteTargetImportTwoByteAsFormat() {
    return this._bgpRouteTargetImportTwoByteAsFormat;
  }

  // control_word_disable - computed: true, optional: false, required: false
  public get controlWordDisable() {
    return this.getBooleanAttribute('control_word_disable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // etree - computed: true, optional: false, required: false
  public get etree() {
    return this.getBooleanAttribute('etree');
  }

  // etree_leaf - computed: true, optional: false, required: false
  public get etreeLeaf() {
    return this.getBooleanAttribute('etree_leaf');
  }

  // etree_rt_leaf - computed: true, optional: false, required: false
  public get etreeRtLeaf() {
    return this.getBooleanAttribute('etree_rt_leaf');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // load_balancing - computed: true, optional: false, required: false
  public get loadBalancing() {
    return this.getBooleanAttribute('load_balancing');
  }

  // load_balancing_flow_label_static - computed: true, optional: false, required: false
  public get loadBalancingFlowLabelStatic() {
    return this.getBooleanAttribute('load_balancing_flow_label_static');
  }

  // unknown_unicast_suppression - computed: true, optional: false, required: false
  public get unknownUnicastSuppression() {
    return this.getBooleanAttribute('unknown_unicast_suppression');
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
      device: cdktf.stringToTerraform(this._device),
      vpn_id: cdktf.numberToTerraform(this._vpnId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
