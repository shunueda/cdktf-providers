// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_isis_interface_address_family
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrRouterIsisInterfaceAddressFamilyConfig extends cdktf.TerraformMetaArguments {
  /**
  * af-name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_isis_interface_address_family#af_name DataIosxrRouterIsisInterfaceAddressFamily#af_name}
  */
  readonly afName: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_isis_interface_address_family#device DataIosxrRouterIsisInterfaceAddressFamily#device}
  */
  readonly device?: string;
  /**
  * Interface to configure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_isis_interface_address_family#interface_name DataIosxrRouterIsisInterfaceAddressFamily#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Process ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_isis_interface_address_family#process_id DataIosxrRouterIsisInterfaceAddressFamily#process_id}
  */
  readonly processId: string;
  /**
  * saf-name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_isis_interface_address_family#saf_name DataIosxrRouterIsisInterfaceAddressFamily#saf_name}
  */
  readonly safName: string;
}
export interface DataIosxrRouterIsisInterfaceAddressFamilyAdjacencySidAbsolutes {
}

export function dataIosxrRouterIsisInterfaceAddressFamilyAdjacencySidAbsolutesToTerraform(struct?: DataIosxrRouterIsisInterfaceAddressFamilyAdjacencySidAbsolutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisInterfaceAddressFamilyAdjacencySidAbsolutesToHclTerraform(struct?: DataIosxrRouterIsisInterfaceAddressFamilyAdjacencySidAbsolutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisInterfaceAddressFamilyAdjacencySidAbsolutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisInterfaceAddressFamilyAdjacencySidAbsolutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisInterfaceAddressFamilyAdjacencySidAbsolutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // absolute_number - computed: true, optional: false, required: false
  public get absoluteNumber() {
    return this.getNumberAttribute('absolute_number');
  }

  // protected - computed: true, optional: false, required: false
  public get protected() {
    return this.getBooleanAttribute('protected');
  }
}

export class DataIosxrRouterIsisInterfaceAddressFamilyAdjacencySidAbsolutesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisInterfaceAddressFamilyAdjacencySidAbsolutesOutputReference {
    return new DataIosxrRouterIsisInterfaceAddressFamilyAdjacencySidAbsolutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterIsisInterfaceAddressFamilyAdjacencySidIndices {
}

export function dataIosxrRouterIsisInterfaceAddressFamilyAdjacencySidIndicesToTerraform(struct?: DataIosxrRouterIsisInterfaceAddressFamilyAdjacencySidIndices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisInterfaceAddressFamilyAdjacencySidIndicesToHclTerraform(struct?: DataIosxrRouterIsisInterfaceAddressFamilyAdjacencySidIndices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisInterfaceAddressFamilyAdjacencySidIndicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisInterfaceAddressFamilyAdjacencySidIndices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisInterfaceAddressFamilyAdjacencySidIndices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // index_number - computed: true, optional: false, required: false
  public get indexNumber() {
    return this.getNumberAttribute('index_number');
  }

  // protected - computed: true, optional: false, required: false
  public get protected() {
    return this.getBooleanAttribute('protected');
  }
}

export class DataIosxrRouterIsisInterfaceAddressFamilyAdjacencySidIndicesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisInterfaceAddressFamilyAdjacencySidIndicesOutputReference {
    return new DataIosxrRouterIsisInterfaceAddressFamilyAdjacencySidIndicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterIsisInterfaceAddressFamilyAdvertisePrefixRoutePolicyLevels {
}

export function dataIosxrRouterIsisInterfaceAddressFamilyAdvertisePrefixRoutePolicyLevelsToTerraform(struct?: DataIosxrRouterIsisInterfaceAddressFamilyAdvertisePrefixRoutePolicyLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisInterfaceAddressFamilyAdvertisePrefixRoutePolicyLevelsToHclTerraform(struct?: DataIosxrRouterIsisInterfaceAddressFamilyAdvertisePrefixRoutePolicyLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisInterfaceAddressFamilyAdvertisePrefixRoutePolicyLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisInterfaceAddressFamilyAdvertisePrefixRoutePolicyLevels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisInterfaceAddressFamilyAdvertisePrefixRoutePolicyLevels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // level_number - computed: true, optional: false, required: false
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }

  // route_policy - computed: true, optional: false, required: false
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }
}

export class DataIosxrRouterIsisInterfaceAddressFamilyAdvertisePrefixRoutePolicyLevelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisInterfaceAddressFamilyAdvertisePrefixRoutePolicyLevelsOutputReference {
    return new DataIosxrRouterIsisInterfaceAddressFamilyAdvertisePrefixRoutePolicyLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterIsisInterfaceAddressFamilyFastRerouteLevels {
}

export function dataIosxrRouterIsisInterfaceAddressFamilyFastRerouteLevelsToTerraform(struct?: DataIosxrRouterIsisInterfaceAddressFamilyFastRerouteLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisInterfaceAddressFamilyFastRerouteLevelsToHclTerraform(struct?: DataIosxrRouterIsisInterfaceAddressFamilyFastRerouteLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisInterfaceAddressFamilyFastRerouteLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisInterfaceAddressFamilyFastRerouteLevels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisInterfaceAddressFamilyFastRerouteLevels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // level_number - computed: true, optional: false, required: false
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }

  // per_link - computed: true, optional: false, required: false
  public get perLink() {
    return this.getBooleanAttribute('per_link');
  }

  // per_prefix - computed: true, optional: false, required: false
  public get perPrefix() {
    return this.getBooleanAttribute('per_prefix');
  }
}

export class DataIosxrRouterIsisInterfaceAddressFamilyFastRerouteLevelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisInterfaceAddressFamilyFastRerouteLevelsOutputReference {
    return new DataIosxrRouterIsisInterfaceAddressFamilyFastRerouteLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterIsisInterfaceAddressFamilyMetricLevels {
}

export function dataIosxrRouterIsisInterfaceAddressFamilyMetricLevelsToTerraform(struct?: DataIosxrRouterIsisInterfaceAddressFamilyMetricLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisInterfaceAddressFamilyMetricLevelsToHclTerraform(struct?: DataIosxrRouterIsisInterfaceAddressFamilyMetricLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisInterfaceAddressFamilyMetricLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisInterfaceAddressFamilyMetricLevels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisInterfaceAddressFamilyMetricLevels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // level_number - computed: true, optional: false, required: false
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }

  // metric_default - computed: true, optional: false, required: false
  public get metricDefault() {
    return this.getNumberAttribute('metric_default');
  }

  // metric_maximum - computed: true, optional: false, required: false
  public get metricMaximum() {
    return this.getBooleanAttribute('metric_maximum');
  }
}

export class DataIosxrRouterIsisInterfaceAddressFamilyMetricLevelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisInterfaceAddressFamilyMetricLevelsOutputReference {
    return new DataIosxrRouterIsisInterfaceAddressFamilyMetricLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_isis_interface_address_family iosxr_router_isis_interface_address_family}
*/
export class DataIosxrRouterIsisInterfaceAddressFamily extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_isis_interface_address_family";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrRouterIsisInterfaceAddressFamily resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrRouterIsisInterfaceAddressFamily to import
  * @param importFromId The id of the existing DataIosxrRouterIsisInterfaceAddressFamily that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_isis_interface_address_family#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrRouterIsisInterfaceAddressFamily to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_isis_interface_address_family", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_isis_interface_address_family iosxr_router_isis_interface_address_family} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrRouterIsisInterfaceAddressFamilyConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrRouterIsisInterfaceAddressFamilyConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_isis_interface_address_family',
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
    this._afName = config.afName;
    this._device = config.device;
    this._interfaceName = config.interfaceName;
    this._processId = config.processId;
    this._safName = config.safName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adjacency_sid_absolutes - computed: true, optional: false, required: false
  private _adjacencySidAbsolutes = new DataIosxrRouterIsisInterfaceAddressFamilyAdjacencySidAbsolutesList(this, "adjacency_sid_absolutes", false);
  public get adjacencySidAbsolutes() {
    return this._adjacencySidAbsolutes;
  }

  // adjacency_sid_indices - computed: true, optional: false, required: false
  private _adjacencySidIndices = new DataIosxrRouterIsisInterfaceAddressFamilyAdjacencySidIndicesList(this, "adjacency_sid_indices", false);
  public get adjacencySidIndices() {
    return this._adjacencySidIndices;
  }

  // advertise_prefix_route_policy - computed: true, optional: false, required: false
  public get advertisePrefixRoutePolicy() {
    return this.getStringAttribute('advertise_prefix_route_policy');
  }

  // advertise_prefix_route_policy_levels - computed: true, optional: false, required: false
  private _advertisePrefixRoutePolicyLevels = new DataIosxrRouterIsisInterfaceAddressFamilyAdvertisePrefixRoutePolicyLevelsList(this, "advertise_prefix_route_policy_levels", false);
  public get advertisePrefixRoutePolicyLevels() {
    return this._advertisePrefixRoutePolicyLevels;
  }

  // af_name - computed: false, optional: false, required: true
  private _afName?: string; 
  public get afName() {
    return this.getStringAttribute('af_name');
  }
  public set afName(value: string) {
    this._afName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get afNameInput() {
    return this._afName;
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

  // fast_reroute_levels - computed: true, optional: false, required: false
  private _fastRerouteLevels = new DataIosxrRouterIsisInterfaceAddressFamilyFastRerouteLevelsList(this, "fast_reroute_levels", false);
  public get fastRerouteLevels() {
    return this._fastRerouteLevels;
  }

  // fast_reroute_per_link - computed: true, optional: false, required: false
  public get fastReroutePerLink() {
    return this.getBooleanAttribute('fast_reroute_per_link');
  }

  // fast_reroute_per_prefix - computed: true, optional: false, required: false
  public get fastReroutePerPrefix() {
    return this.getBooleanAttribute('fast_reroute_per_prefix');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // metric_default - computed: true, optional: false, required: false
  public get metricDefault() {
    return this.getNumberAttribute('metric_default');
  }

  // metric_levels - computed: true, optional: false, required: false
  private _metricLevels = new DataIosxrRouterIsisInterfaceAddressFamilyMetricLevelsList(this, "metric_levels", false);
  public get metricLevels() {
    return this._metricLevels;
  }

  // metric_maximum - computed: true, optional: false, required: false
  public get metricMaximum() {
    return this.getBooleanAttribute('metric_maximum');
  }

  // process_id - computed: false, optional: false, required: true
  private _processId?: string; 
  public get processId() {
    return this.getStringAttribute('process_id');
  }
  public set processId(value: string) {
    this._processId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processIdInput() {
    return this._processId;
  }

  // saf_name - computed: false, optional: false, required: true
  private _safName?: string; 
  public get safName() {
    return this.getStringAttribute('saf_name');
  }
  public set safName(value: string) {
    this._safName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get safNameInput() {
    return this._safName;
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getNumberAttribute('tag');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      af_name: cdktf.stringToTerraform(this._afName),
      device: cdktf.stringToTerraform(this._device),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
      process_id: cdktf.stringToTerraform(this._processId),
      saf_name: cdktf.stringToTerraform(this._safName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      af_name: {
        value: cdktf.stringToHclTerraform(this._afName),
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
      interface_name: {
        value: cdktf.stringToHclTerraform(this._interfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      process_id: {
        value: cdktf.stringToHclTerraform(this._processId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saf_name: {
        value: cdktf.stringToHclTerraform(this._safName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
