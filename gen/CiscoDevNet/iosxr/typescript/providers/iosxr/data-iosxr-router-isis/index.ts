// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_isis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrRouterIsisConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_isis#device DataIosxrRouterIsis#device}
  */
  readonly device?: string;
  /**
  * Process ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_isis#process_id DataIosxrRouterIsis#process_id}
  */
  readonly processId: string;
}
export interface DataIosxrRouterIsisAffinityMaps {
}

export function dataIosxrRouterIsisAffinityMapsToTerraform(struct?: DataIosxrRouterIsisAffinityMaps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisAffinityMapsToHclTerraform(struct?: DataIosxrRouterIsisAffinityMaps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisAffinityMapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisAffinityMaps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisAffinityMaps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bit_position - computed: true, optional: false, required: false
  public get bitPosition() {
    return this.getNumberAttribute('bit_position');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIosxrRouterIsisAffinityMapsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisAffinityMapsOutputReference {
    return new DataIosxrRouterIsisAffinityMapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterIsisFlexAlgos {
}

export function dataIosxrRouterIsisFlexAlgosToTerraform(struct?: DataIosxrRouterIsisFlexAlgos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisFlexAlgosToHclTerraform(struct?: DataIosxrRouterIsisFlexAlgos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisFlexAlgosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisFlexAlgos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisFlexAlgos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise_definition - computed: true, optional: false, required: false
  public get advertiseDefinition() {
    return this.getBooleanAttribute('advertise_definition');
  }

  // metric_type - computed: true, optional: false, required: false
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }
}

export class DataIosxrRouterIsisFlexAlgosList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisFlexAlgosOutputReference {
    return new DataIosxrRouterIsisFlexAlgosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterIsisInterfacesPriorityLevels {
}

export function dataIosxrRouterIsisInterfacesPriorityLevelsToTerraform(struct?: DataIosxrRouterIsisInterfacesPriorityLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisInterfacesPriorityLevelsToHclTerraform(struct?: DataIosxrRouterIsisInterfacesPriorityLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisInterfacesPriorityLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisInterfacesPriorityLevels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisInterfacesPriorityLevels | undefined) {
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

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }
}

export class DataIosxrRouterIsisInterfacesPriorityLevelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisInterfacesPriorityLevelsOutputReference {
    return new DataIosxrRouterIsisInterfacesPriorityLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterIsisInterfaces {
}

export function dataIosxrRouterIsisInterfacesToTerraform(struct?: DataIosxrRouterIsisInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisInterfacesToHclTerraform(struct?: DataIosxrRouterIsisInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // circuit_type - computed: true, optional: false, required: false
  public get circuitType() {
    return this.getStringAttribute('circuit_type');
  }

  // hello_padding - computed: true, optional: false, required: false
  public get helloPadding() {
    return this.getStringAttribute('hello_padding');
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // point_to_point - computed: true, optional: false, required: false
  public get pointToPoint() {
    return this.getBooleanAttribute('point_to_point');
  }

  // priority_levels - computed: true, optional: false, required: false
  private _priorityLevels = new DataIosxrRouterIsisInterfacesPriorityLevelsList(this, "priority_levels", false);
  public get priorityLevels() {
    return this._priorityLevels;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataIosxrRouterIsisInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisInterfacesOutputReference {
    return new DataIosxrRouterIsisInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterIsisLspPasswordLevels {
}

export function dataIosxrRouterIsisLspPasswordLevelsToTerraform(struct?: DataIosxrRouterIsisLspPasswordLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisLspPasswordLevelsToHclTerraform(struct?: DataIosxrRouterIsisLspPasswordLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisLspPasswordLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisLspPasswordLevels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisLspPasswordLevels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getStringAttribute('encrypted');
  }

  // level_number - computed: true, optional: false, required: false
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }
}

export class DataIosxrRouterIsisLspPasswordLevelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisLspPasswordLevelsOutputReference {
    return new DataIosxrRouterIsisLspPasswordLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterIsisNets {
}

export function dataIosxrRouterIsisNetsToTerraform(struct?: DataIosxrRouterIsisNets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisNetsToHclTerraform(struct?: DataIosxrRouterIsisNets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisNetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisNets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisNets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // net_id - computed: true, optional: false, required: false
  public get netId() {
    return this.getStringAttribute('net_id');
  }
}

export class DataIosxrRouterIsisNetsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisNetsOutputReference {
    return new DataIosxrRouterIsisNetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterIsisSetOverloadBitLevels {
}

export function dataIosxrRouterIsisSetOverloadBitLevelsToTerraform(struct?: DataIosxrRouterIsisSetOverloadBitLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisSetOverloadBitLevelsToHclTerraform(struct?: DataIosxrRouterIsisSetOverloadBitLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisSetOverloadBitLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisSetOverloadBitLevels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisSetOverloadBitLevels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertise_external - computed: true, optional: false, required: false
  public get advertiseExternal() {
    return this.getBooleanAttribute('advertise_external');
  }

  // advertise_interlevel - computed: true, optional: false, required: false
  public get advertiseInterlevel() {
    return this.getBooleanAttribute('advertise_interlevel');
  }

  // level_number - computed: true, optional: false, required: false
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }

  // on_startup_time_to_advertise - computed: true, optional: false, required: false
  public get onStartupTimeToAdvertise() {
    return this.getNumberAttribute('on_startup_time_to_advertise');
  }

  // on_startup_wait_for_bgp - computed: true, optional: false, required: false
  public get onStartupWaitForBgp() {
    return this.getBooleanAttribute('on_startup_wait_for_bgp');
  }
}

export class DataIosxrRouterIsisSetOverloadBitLevelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisSetOverloadBitLevelsOutputReference {
    return new DataIosxrRouterIsisSetOverloadBitLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_isis iosxr_router_isis}
*/
export class DataIosxrRouterIsis extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_isis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrRouterIsis resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrRouterIsis to import
  * @param importFromId The id of the existing DataIosxrRouterIsis that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_isis#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrRouterIsis to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_isis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_isis iosxr_router_isis} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrRouterIsisConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrRouterIsisConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_isis',
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
    this._processId = config.processId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // affinity_maps - computed: true, optional: false, required: false
  private _affinityMaps = new DataIosxrRouterIsisAffinityMapsList(this, "affinity_maps", false);
  public get affinityMaps() {
    return this._affinityMaps;
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

  // distribute_link_state - computed: true, optional: false, required: false
  public get distributeLinkState() {
    return this.getBooleanAttribute('distribute_link_state');
  }

  // distribute_link_state_instance_id - computed: true, optional: false, required: false
  public get distributeLinkStateInstanceId() {
    return this.getNumberAttribute('distribute_link_state_instance_id');
  }

  // distribute_link_state_level - computed: true, optional: false, required: false
  public get distributeLinkStateLevel() {
    return this.getNumberAttribute('distribute_link_state_level');
  }

  // distribute_link_state_throttle - computed: true, optional: false, required: false
  public get distributeLinkStateThrottle() {
    return this.getNumberAttribute('distribute_link_state_throttle');
  }

  // flex_algos - computed: true, optional: false, required: false
  private _flexAlgos = new DataIosxrRouterIsisFlexAlgosList(this, "flex_algos", false);
  public get flexAlgos() {
    return this._flexAlgos;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataIosxrRouterIsisInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // is_type - computed: true, optional: false, required: false
  public get isType() {
    return this.getStringAttribute('is_type');
  }

  // log_adjacency_changes - computed: true, optional: false, required: false
  public get logAdjacencyChanges() {
    return this.getBooleanAttribute('log_adjacency_changes');
  }

  // lsp_gen_interval_initial_wait - computed: true, optional: false, required: false
  public get lspGenIntervalInitialWait() {
    return this.getNumberAttribute('lsp_gen_interval_initial_wait');
  }

  // lsp_gen_interval_maximum_wait - computed: true, optional: false, required: false
  public get lspGenIntervalMaximumWait() {
    return this.getNumberAttribute('lsp_gen_interval_maximum_wait');
  }

  // lsp_gen_interval_secondary_wait - computed: true, optional: false, required: false
  public get lspGenIntervalSecondaryWait() {
    return this.getNumberAttribute('lsp_gen_interval_secondary_wait');
  }

  // lsp_password_accept_encrypted - computed: true, optional: false, required: false
  public get lspPasswordAcceptEncrypted() {
    return this.getStringAttribute('lsp_password_accept_encrypted');
  }

  // lsp_password_hmac_md5_enable_poi - computed: true, optional: false, required: false
  public get lspPasswordHmacMd5EnablePoi() {
    return this.getBooleanAttribute('lsp_password_hmac_md5_enable_poi');
  }

  // lsp_password_hmac_md5_encrypted - computed: true, optional: false, required: false
  public get lspPasswordHmacMd5Encrypted() {
    return this.getStringAttribute('lsp_password_hmac_md5_encrypted');
  }

  // lsp_password_hmac_md5_send_only - computed: true, optional: false, required: false
  public get lspPasswordHmacMd5SendOnly() {
    return this.getBooleanAttribute('lsp_password_hmac_md5_send_only');
  }

  // lsp_password_hmac_md5_snp_send_only - computed: true, optional: false, required: false
  public get lspPasswordHmacMd5SnpSendOnly() {
    return this.getBooleanAttribute('lsp_password_hmac_md5_snp_send_only');
  }

  // lsp_password_keychain - computed: true, optional: false, required: false
  public get lspPasswordKeychain() {
    return this.getStringAttribute('lsp_password_keychain');
  }

  // lsp_password_keychain_enable_poi - computed: true, optional: false, required: false
  public get lspPasswordKeychainEnablePoi() {
    return this.getBooleanAttribute('lsp_password_keychain_enable_poi');
  }

  // lsp_password_keychain_send_only - computed: true, optional: false, required: false
  public get lspPasswordKeychainSendOnly() {
    return this.getBooleanAttribute('lsp_password_keychain_send_only');
  }

  // lsp_password_keychain_snp_send_only - computed: true, optional: false, required: false
  public get lspPasswordKeychainSnpSendOnly() {
    return this.getBooleanAttribute('lsp_password_keychain_snp_send_only');
  }

  // lsp_password_levels - computed: true, optional: false, required: false
  private _lspPasswordLevels = new DataIosxrRouterIsisLspPasswordLevelsList(this, "lsp_password_levels", false);
  public get lspPasswordLevels() {
    return this._lspPasswordLevels;
  }

  // lsp_password_text_enable_poi - computed: true, optional: false, required: false
  public get lspPasswordTextEnablePoi() {
    return this.getBooleanAttribute('lsp_password_text_enable_poi');
  }

  // lsp_password_text_encrypted - computed: true, optional: false, required: false
  public get lspPasswordTextEncrypted() {
    return this.getStringAttribute('lsp_password_text_encrypted');
  }

  // lsp_password_text_send_only - computed: true, optional: false, required: false
  public get lspPasswordTextSendOnly() {
    return this.getBooleanAttribute('lsp_password_text_send_only');
  }

  // lsp_password_text_snp_send_only - computed: true, optional: false, required: false
  public get lspPasswordTextSnpSendOnly() {
    return this.getBooleanAttribute('lsp_password_text_snp_send_only');
  }

  // lsp_refresh_interval - computed: true, optional: false, required: false
  public get lspRefreshInterval() {
    return this.getNumberAttribute('lsp_refresh_interval');
  }

  // max_lsp_lifetime - computed: true, optional: false, required: false
  public get maxLspLifetime() {
    return this.getNumberAttribute('max_lsp_lifetime');
  }

  // nets - computed: true, optional: false, required: false
  private _nets = new DataIosxrRouterIsisNetsList(this, "nets", false);
  public get nets() {
    return this._nets;
  }

  // nsf_cisco - computed: true, optional: false, required: false
  public get nsfCisco() {
    return this.getBooleanAttribute('nsf_cisco');
  }

  // nsf_ietf - computed: true, optional: false, required: false
  public get nsfIetf() {
    return this.getBooleanAttribute('nsf_ietf');
  }

  // nsf_interface_expires - computed: true, optional: false, required: false
  public get nsfInterfaceExpires() {
    return this.getNumberAttribute('nsf_interface_expires');
  }

  // nsf_interface_timer - computed: true, optional: false, required: false
  public get nsfInterfaceTimer() {
    return this.getNumberAttribute('nsf_interface_timer');
  }

  // nsf_lifetime - computed: true, optional: false, required: false
  public get nsfLifetime() {
    return this.getNumberAttribute('nsf_lifetime');
  }

  // nsr - computed: true, optional: false, required: false
  public get nsr() {
    return this.getBooleanAttribute('nsr');
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

  // set_overload_bit - computed: true, optional: false, required: false
  public get setOverloadBit() {
    return this.getBooleanAttribute('set_overload_bit');
  }

  // set_overload_bit_advertise_external - computed: true, optional: false, required: false
  public get setOverloadBitAdvertiseExternal() {
    return this.getBooleanAttribute('set_overload_bit_advertise_external');
  }

  // set_overload_bit_advertise_interlevel - computed: true, optional: false, required: false
  public get setOverloadBitAdvertiseInterlevel() {
    return this.getBooleanAttribute('set_overload_bit_advertise_interlevel');
  }

  // set_overload_bit_levels - computed: true, optional: false, required: false
  private _setOverloadBitLevels = new DataIosxrRouterIsisSetOverloadBitLevelsList(this, "set_overload_bit_levels", false);
  public get setOverloadBitLevels() {
    return this._setOverloadBitLevels;
  }

  // set_overload_bit_on_startup_time_to_advertise - computed: true, optional: false, required: false
  public get setOverloadBitOnStartupTimeToAdvertise() {
    return this.getNumberAttribute('set_overload_bit_on_startup_time_to_advertise');
  }

  // set_overload_bit_on_startup_wait_for_bgp - computed: true, optional: false, required: false
  public get setOverloadBitOnStartupWaitForBgp() {
    return this.getBooleanAttribute('set_overload_bit_on_startup_wait_for_bgp');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      process_id: cdktf.stringToTerraform(this._processId),
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
      process_id: {
        value: cdktf.stringToHclTerraform(this._processId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
