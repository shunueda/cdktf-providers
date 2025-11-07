// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_isis_address_family
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrRouterIsisAddressFamilyConfig extends cdktf.TerraformMetaArguments {
  /**
  * af-name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_isis_address_family#af_name DataIosxrRouterIsisAddressFamily#af_name}
  */
  readonly afName: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_isis_address_family#device DataIosxrRouterIsisAddressFamily#device}
  */
  readonly device?: string;
  /**
  * Process ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_isis_address_family#process_id DataIosxrRouterIsisAddressFamily#process_id}
  */
  readonly processId: string;
  /**
  * saf-name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_isis_address_family#saf_name DataIosxrRouterIsisAddressFamily#saf_name}
  */
  readonly safName: string;
}
export interface DataIosxrRouterIsisAddressFamilyFastReroutePerLinkPriorityLimitLevels {
}

export function dataIosxrRouterIsisAddressFamilyFastReroutePerLinkPriorityLimitLevelsToTerraform(struct?: DataIosxrRouterIsisAddressFamilyFastReroutePerLinkPriorityLimitLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisAddressFamilyFastReroutePerLinkPriorityLimitLevelsToHclTerraform(struct?: DataIosxrRouterIsisAddressFamilyFastReroutePerLinkPriorityLimitLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisAddressFamilyFastReroutePerLinkPriorityLimitLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisAddressFamilyFastReroutePerLinkPriorityLimitLevels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisAddressFamilyFastReroutePerLinkPriorityLimitLevels | undefined) {
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

  // priority_limit - computed: true, optional: false, required: false
  public get priorityLimit() {
    return this.getStringAttribute('priority_limit');
  }
}

export class DataIosxrRouterIsisAddressFamilyFastReroutePerLinkPriorityLimitLevelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisAddressFamilyFastReroutePerLinkPriorityLimitLevelsOutputReference {
    return new DataIosxrRouterIsisAddressFamilyFastReroutePerLinkPriorityLimitLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixLoadSharingDisableLevels {
}

export function dataIosxrRouterIsisAddressFamilyFastReroutePerPrefixLoadSharingDisableLevelsToTerraform(struct?: DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixLoadSharingDisableLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisAddressFamilyFastReroutePerPrefixLoadSharingDisableLevelsToHclTerraform(struct?: DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixLoadSharingDisableLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixLoadSharingDisableLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixLoadSharingDisableLevels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixLoadSharingDisableLevels | undefined) {
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
}

export class DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixLoadSharingDisableLevelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixLoadSharingDisableLevelsOutputReference {
    return new DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixLoadSharingDisableLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixPriorityLimitLevels {
}

export function dataIosxrRouterIsisAddressFamilyFastReroutePerPrefixPriorityLimitLevelsToTerraform(struct?: DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixPriorityLimitLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisAddressFamilyFastReroutePerPrefixPriorityLimitLevelsToHclTerraform(struct?: DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixPriorityLimitLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixPriorityLimitLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixPriorityLimitLevels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixPriorityLimitLevels | undefined) {
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

  // priority_limit - computed: true, optional: false, required: false
  public get priorityLimit() {
    return this.getStringAttribute('priority_limit');
  }
}

export class DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixPriorityLimitLevelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixPriorityLimitLevelsOutputReference {
    return new DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixPriorityLimitLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixRemoteLfaPrefixListLevels {
}

export function dataIosxrRouterIsisAddressFamilyFastReroutePerPrefixRemoteLfaPrefixListLevelsToTerraform(struct?: DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixRemoteLfaPrefixListLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisAddressFamilyFastReroutePerPrefixRemoteLfaPrefixListLevelsToHclTerraform(struct?: DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixRemoteLfaPrefixListLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixRemoteLfaPrefixListLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixRemoteLfaPrefixListLevels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixRemoteLfaPrefixListLevels | undefined) {
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

  // prefix_list - computed: true, optional: false, required: false
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
}

export class DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixRemoteLfaPrefixListLevelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixRemoteLfaPrefixListLevelsOutputReference {
    return new DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixRemoteLfaPrefixListLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixSrlgProtectionWeightedGlobalLevels {
}

export function dataIosxrRouterIsisAddressFamilyFastReroutePerPrefixSrlgProtectionWeightedGlobalLevelsToTerraform(struct?: DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixSrlgProtectionWeightedGlobalLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisAddressFamilyFastReroutePerPrefixSrlgProtectionWeightedGlobalLevelsToHclTerraform(struct?: DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixSrlgProtectionWeightedGlobalLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixSrlgProtectionWeightedGlobalLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixSrlgProtectionWeightedGlobalLevels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixSrlgProtectionWeightedGlobalLevels | undefined) {
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
}

export class DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixSrlgProtectionWeightedGlobalLevelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixSrlgProtectionWeightedGlobalLevelsOutputReference {
    return new DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixSrlgProtectionWeightedGlobalLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterIsisAddressFamilyMaximumRedistributedPrefixesLevels {
}

export function dataIosxrRouterIsisAddressFamilyMaximumRedistributedPrefixesLevelsToTerraform(struct?: DataIosxrRouterIsisAddressFamilyMaximumRedistributedPrefixesLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisAddressFamilyMaximumRedistributedPrefixesLevelsToHclTerraform(struct?: DataIosxrRouterIsisAddressFamilyMaximumRedistributedPrefixesLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisAddressFamilyMaximumRedistributedPrefixesLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisAddressFamilyMaximumRedistributedPrefixesLevels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisAddressFamilyMaximumRedistributedPrefixesLevels | undefined) {
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

  // maximum_redistributed_prefixes - computed: true, optional: false, required: false
  public get maximumRedistributedPrefixes() {
    return this.getNumberAttribute('maximum_redistributed_prefixes');
  }
}

export class DataIosxrRouterIsisAddressFamilyMaximumRedistributedPrefixesLevelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisAddressFamilyMaximumRedistributedPrefixesLevelsOutputReference {
    return new DataIosxrRouterIsisAddressFamilyMaximumRedistributedPrefixesLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterIsisAddressFamilyMetricStyleLevels {
}

export function dataIosxrRouterIsisAddressFamilyMetricStyleLevelsToTerraform(struct?: DataIosxrRouterIsisAddressFamilyMetricStyleLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisAddressFamilyMetricStyleLevelsToHclTerraform(struct?: DataIosxrRouterIsisAddressFamilyMetricStyleLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisAddressFamilyMetricStyleLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisAddressFamilyMetricStyleLevels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisAddressFamilyMetricStyleLevels | undefined) {
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

  // narrow - computed: true, optional: false, required: false
  public get narrow() {
    return this.getBooleanAttribute('narrow');
  }

  // narrow_transition - computed: true, optional: false, required: false
  public get narrowTransition() {
    return this.getBooleanAttribute('narrow_transition');
  }

  // transition - computed: true, optional: false, required: false
  public get transition() {
    return this.getBooleanAttribute('transition');
  }

  // wide - computed: true, optional: false, required: false
  public get wide() {
    return this.getBooleanAttribute('wide');
  }

  // wide_transition - computed: true, optional: false, required: false
  public get wideTransition() {
    return this.getBooleanAttribute('wide_transition');
  }
}

export class DataIosxrRouterIsisAddressFamilyMetricStyleLevelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisAddressFamilyMetricStyleLevelsOutputReference {
    return new DataIosxrRouterIsisAddressFamilyMetricStyleLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterIsisAddressFamilyRedistributeIsis {
}

export function dataIosxrRouterIsisAddressFamilyRedistributeIsisToTerraform(struct?: DataIosxrRouterIsisAddressFamilyRedistributeIsis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisAddressFamilyRedistributeIsisToHclTerraform(struct?: DataIosxrRouterIsisAddressFamilyRedistributeIsis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisAddressFamilyRedistributeIsisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisAddressFamilyRedistributeIsis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisAddressFamilyRedistributeIsis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // down_flag_clear - computed: true, optional: false, required: false
  public get downFlagClear() {
    return this.getBooleanAttribute('down_flag_clear');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // metric_type - computed: true, optional: false, required: false
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }

  // route_policy - computed: true, optional: false, required: false
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }
}

export class DataIosxrRouterIsisAddressFamilyRedistributeIsisList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisAddressFamilyRedistributeIsisOutputReference {
    return new DataIosxrRouterIsisAddressFamilyRedistributeIsisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsMetricLevels {
}

export function dataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsMetricLevelsToTerraform(struct?: DataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsMetricLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsMetricLevelsToHclTerraform(struct?: DataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsMetricLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsMetricLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsMetricLevels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsMetricLevels | undefined) {
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

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }
}

export class DataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsMetricLevelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsMetricLevelsOutputReference {
    return new DataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsMetricLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsTagLevels {
}

export function dataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsTagLevelsToTerraform(struct?: DataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsTagLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsTagLevelsToHclTerraform(struct?: DataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsTagLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsTagLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsTagLevels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsTagLevels | undefined) {
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

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getNumberAttribute('tag');
  }
}

export class DataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsTagLevelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsTagLevelsOutputReference {
    return new DataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsTagLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterIsisAddressFamilySegmentRoutingSrv6Locators {
}

export function dataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsToTerraform(struct?: DataIosxrRouterIsisAddressFamilySegmentRoutingSrv6Locators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsToHclTerraform(struct?: DataIosxrRouterIsisAddressFamilySegmentRoutingSrv6Locators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisAddressFamilySegmentRoutingSrv6Locators | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisAddressFamilySegmentRoutingSrv6Locators | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getNumberAttribute('level');
  }

  // locator_name - computed: true, optional: false, required: false
  public get locatorName() {
    return this.getStringAttribute('locator_name');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // metric_levels - computed: true, optional: false, required: false
  private _metricLevels = new DataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsMetricLevelsList(this, "metric_levels", false);
  public get metricLevels() {
    return this._metricLevels;
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getNumberAttribute('tag');
  }

  // tag_levels - computed: true, optional: false, required: false
  private _tagLevels = new DataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsTagLevelsList(this, "tag_levels", false);
  public get tagLevels() {
    return this._tagLevels;
  }
}

export class DataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsOutputReference {
    return new DataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterIsisAddressFamilySpfIntervalLevels {
}

export function dataIosxrRouterIsisAddressFamilySpfIntervalLevelsToTerraform(struct?: DataIosxrRouterIsisAddressFamilySpfIntervalLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisAddressFamilySpfIntervalLevelsToHclTerraform(struct?: DataIosxrRouterIsisAddressFamilySpfIntervalLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisAddressFamilySpfIntervalLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisAddressFamilySpfIntervalLevels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisAddressFamilySpfIntervalLevels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ietf - computed: true, optional: false, required: false
  public get ietf() {
    return this.getBooleanAttribute('ietf');
  }

  // ietf_holddown_interval - computed: true, optional: false, required: false
  public get ietfHolddownInterval() {
    return this.getNumberAttribute('ietf_holddown_interval');
  }

  // ietf_initial_wait - computed: true, optional: false, required: false
  public get ietfInitialWait() {
    return this.getNumberAttribute('ietf_initial_wait');
  }

  // ietf_learn_interval - computed: true, optional: false, required: false
  public get ietfLearnInterval() {
    return this.getNumberAttribute('ietf_learn_interval');
  }

  // ietf_long_wait - computed: true, optional: false, required: false
  public get ietfLongWait() {
    return this.getNumberAttribute('ietf_long_wait');
  }

  // ietf_short_wait - computed: true, optional: false, required: false
  public get ietfShortWait() {
    return this.getNumberAttribute('ietf_short_wait');
  }

  // initial_wait - computed: true, optional: false, required: false
  public get initialWait() {
    return this.getNumberAttribute('initial_wait');
  }

  // level_number - computed: true, optional: false, required: false
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }

  // maximum_wait - computed: true, optional: false, required: false
  public get maximumWait() {
    return this.getNumberAttribute('maximum_wait');
  }

  // secondary_wait - computed: true, optional: false, required: false
  public get secondaryWait() {
    return this.getNumberAttribute('secondary_wait');
  }
}

export class DataIosxrRouterIsisAddressFamilySpfIntervalLevelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisAddressFamilySpfIntervalLevelsOutputReference {
    return new DataIosxrRouterIsisAddressFamilySpfIntervalLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterIsisAddressFamilySpfPrefixPriorityCriticalLevels {
}

export function dataIosxrRouterIsisAddressFamilySpfPrefixPriorityCriticalLevelsToTerraform(struct?: DataIosxrRouterIsisAddressFamilySpfPrefixPriorityCriticalLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisAddressFamilySpfPrefixPriorityCriticalLevelsToHclTerraform(struct?: DataIosxrRouterIsisAddressFamilySpfPrefixPriorityCriticalLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisAddressFamilySpfPrefixPriorityCriticalLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisAddressFamilySpfPrefixPriorityCriticalLevels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisAddressFamilySpfPrefixPriorityCriticalLevels | undefined) {
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

  // prefix_list_name - computed: true, optional: false, required: false
  public get prefixListName() {
    return this.getStringAttribute('prefix_list_name');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getNumberAttribute('tag');
  }
}

export class DataIosxrRouterIsisAddressFamilySpfPrefixPriorityCriticalLevelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisAddressFamilySpfPrefixPriorityCriticalLevelsOutputReference {
    return new DataIosxrRouterIsisAddressFamilySpfPrefixPriorityCriticalLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterIsisAddressFamilySpfPrefixPriorityHighLevels {
}

export function dataIosxrRouterIsisAddressFamilySpfPrefixPriorityHighLevelsToTerraform(struct?: DataIosxrRouterIsisAddressFamilySpfPrefixPriorityHighLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisAddressFamilySpfPrefixPriorityHighLevelsToHclTerraform(struct?: DataIosxrRouterIsisAddressFamilySpfPrefixPriorityHighLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisAddressFamilySpfPrefixPriorityHighLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisAddressFamilySpfPrefixPriorityHighLevels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisAddressFamilySpfPrefixPriorityHighLevels | undefined) {
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

  // prefix_list_name - computed: true, optional: false, required: false
  public get prefixListName() {
    return this.getStringAttribute('prefix_list_name');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getNumberAttribute('tag');
  }
}

export class DataIosxrRouterIsisAddressFamilySpfPrefixPriorityHighLevelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisAddressFamilySpfPrefixPriorityHighLevelsOutputReference {
    return new DataIosxrRouterIsisAddressFamilySpfPrefixPriorityHighLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterIsisAddressFamilySpfPrefixPriorityMediumLevels {
}

export function dataIosxrRouterIsisAddressFamilySpfPrefixPriorityMediumLevelsToTerraform(struct?: DataIosxrRouterIsisAddressFamilySpfPrefixPriorityMediumLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterIsisAddressFamilySpfPrefixPriorityMediumLevelsToHclTerraform(struct?: DataIosxrRouterIsisAddressFamilySpfPrefixPriorityMediumLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterIsisAddressFamilySpfPrefixPriorityMediumLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterIsisAddressFamilySpfPrefixPriorityMediumLevels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterIsisAddressFamilySpfPrefixPriorityMediumLevels | undefined) {
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

  // prefix_list_name - computed: true, optional: false, required: false
  public get prefixListName() {
    return this.getStringAttribute('prefix_list_name');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getNumberAttribute('tag');
  }
}

export class DataIosxrRouterIsisAddressFamilySpfPrefixPriorityMediumLevelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterIsisAddressFamilySpfPrefixPriorityMediumLevelsOutputReference {
    return new DataIosxrRouterIsisAddressFamilySpfPrefixPriorityMediumLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_isis_address_family iosxr_router_isis_address_family}
*/
export class DataIosxrRouterIsisAddressFamily extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_isis_address_family";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrRouterIsisAddressFamily resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrRouterIsisAddressFamily to import
  * @param importFromId The id of the existing DataIosxrRouterIsisAddressFamily that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_isis_address_family#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrRouterIsisAddressFamily to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_isis_address_family", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_isis_address_family iosxr_router_isis_address_family} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrRouterIsisAddressFamilyConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrRouterIsisAddressFamilyConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_isis_address_family',
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
    this._afName = config.afName;
    this._device = config.device;
    this._processId = config.processId;
    this._safName = config.safName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise_link_attributes - computed: true, optional: false, required: false
  public get advertiseLinkAttributes() {
    return this.getBooleanAttribute('advertise_link_attributes');
  }

  // advertise_passive_only - computed: true, optional: false, required: false
  public get advertisePassiveOnly() {
    return this.getBooleanAttribute('advertise_passive_only');
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

  // default_information_originate - computed: true, optional: false, required: false
  public get defaultInformationOriginate() {
    return this.getBooleanAttribute('default_information_originate');
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

  // fast_reroute_delay_interval - computed: true, optional: false, required: false
  public get fastRerouteDelayInterval() {
    return this.getNumberAttribute('fast_reroute_delay_interval');
  }

  // fast_reroute_per_link_priority_limit - computed: true, optional: false, required: false
  public get fastReroutePerLinkPriorityLimit() {
    return this.getStringAttribute('fast_reroute_per_link_priority_limit');
  }

  // fast_reroute_per_link_priority_limit_levels - computed: true, optional: false, required: false
  private _fastReroutePerLinkPriorityLimitLevels = new DataIosxrRouterIsisAddressFamilyFastReroutePerLinkPriorityLimitLevelsList(this, "fast_reroute_per_link_priority_limit_levels", false);
  public get fastReroutePerLinkPriorityLimitLevels() {
    return this._fastReroutePerLinkPriorityLimitLevels;
  }

  // fast_reroute_per_link_use_candidate_only - computed: true, optional: false, required: false
  public get fastReroutePerLinkUseCandidateOnly() {
    return this.getBooleanAttribute('fast_reroute_per_link_use_candidate_only');
  }

  // fast_reroute_per_prefix_load_sharing_disable - computed: true, optional: false, required: false
  public get fastReroutePerPrefixLoadSharingDisable() {
    return this.getBooleanAttribute('fast_reroute_per_prefix_load_sharing_disable');
  }

  // fast_reroute_per_prefix_load_sharing_disable_levels - computed: true, optional: false, required: false
  private _fastReroutePerPrefixLoadSharingDisableLevels = new DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixLoadSharingDisableLevelsList(this, "fast_reroute_per_prefix_load_sharing_disable_levels", false);
  public get fastReroutePerPrefixLoadSharingDisableLevels() {
    return this._fastReroutePerPrefixLoadSharingDisableLevels;
  }

  // fast_reroute_per_prefix_priority_limit - computed: true, optional: false, required: false
  public get fastReroutePerPrefixPriorityLimit() {
    return this.getStringAttribute('fast_reroute_per_prefix_priority_limit');
  }

  // fast_reroute_per_prefix_priority_limit_levels - computed: true, optional: false, required: false
  private _fastReroutePerPrefixPriorityLimitLevels = new DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixPriorityLimitLevelsList(this, "fast_reroute_per_prefix_priority_limit_levels", false);
  public get fastReroutePerPrefixPriorityLimitLevels() {
    return this._fastReroutePerPrefixPriorityLimitLevels;
  }

  // fast_reroute_per_prefix_remote_lfa_prefix_list - computed: true, optional: false, required: false
  public get fastReroutePerPrefixRemoteLfaPrefixList() {
    return this.getStringAttribute('fast_reroute_per_prefix_remote_lfa_prefix_list');
  }

  // fast_reroute_per_prefix_remote_lfa_prefix_list_levels - computed: true, optional: false, required: false
  private _fastReroutePerPrefixRemoteLfaPrefixListLevels = new DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixRemoteLfaPrefixListLevelsList(this, "fast_reroute_per_prefix_remote_lfa_prefix_list_levels", false);
  public get fastReroutePerPrefixRemoteLfaPrefixListLevels() {
    return this._fastReroutePerPrefixRemoteLfaPrefixListLevels;
  }

  // fast_reroute_per_prefix_srlg_protection_weighted_global - computed: true, optional: false, required: false
  public get fastReroutePerPrefixSrlgProtectionWeightedGlobal() {
    return this.getBooleanAttribute('fast_reroute_per_prefix_srlg_protection_weighted_global');
  }

  // fast_reroute_per_prefix_srlg_protection_weighted_global_levels - computed: true, optional: false, required: false
  private _fastReroutePerPrefixSrlgProtectionWeightedGlobalLevels = new DataIosxrRouterIsisAddressFamilyFastReroutePerPrefixSrlgProtectionWeightedGlobalLevelsList(this, "fast_reroute_per_prefix_srlg_protection_weighted_global_levels", false);
  public get fastReroutePerPrefixSrlgProtectionWeightedGlobalLevels() {
    return this._fastReroutePerPrefixSrlgProtectionWeightedGlobalLevels;
  }

  // fast_reroute_per_prefix_tiebreaker_downstream_index - computed: true, optional: false, required: false
  public get fastReroutePerPrefixTiebreakerDownstreamIndex() {
    return this.getNumberAttribute('fast_reroute_per_prefix_tiebreaker_downstream_index');
  }

  // fast_reroute_per_prefix_tiebreaker_lc_disjoint_index - computed: true, optional: false, required: false
  public get fastReroutePerPrefixTiebreakerLcDisjointIndex() {
    return this.getNumberAttribute('fast_reroute_per_prefix_tiebreaker_lc_disjoint_index');
  }

  // fast_reroute_per_prefix_tiebreaker_lowest_backup_metric_index - computed: true, optional: false, required: false
  public get fastReroutePerPrefixTiebreakerLowestBackupMetricIndex() {
    return this.getNumberAttribute('fast_reroute_per_prefix_tiebreaker_lowest_backup_metric_index');
  }

  // fast_reroute_per_prefix_tiebreaker_node_protecting_index - computed: true, optional: false, required: false
  public get fastReroutePerPrefixTiebreakerNodeProtectingIndex() {
    return this.getNumberAttribute('fast_reroute_per_prefix_tiebreaker_node_protecting_index');
  }

  // fast_reroute_per_prefix_tiebreaker_primary_path_index - computed: true, optional: false, required: false
  public get fastReroutePerPrefixTiebreakerPrimaryPathIndex() {
    return this.getNumberAttribute('fast_reroute_per_prefix_tiebreaker_primary_path_index');
  }

  // fast_reroute_per_prefix_tiebreaker_secondary_path_index - computed: true, optional: false, required: false
  public get fastReroutePerPrefixTiebreakerSecondaryPathIndex() {
    return this.getNumberAttribute('fast_reroute_per_prefix_tiebreaker_secondary_path_index');
  }

  // fast_reroute_per_prefix_tiebreaker_srlg_disjoint_index - computed: true, optional: false, required: false
  public get fastReroutePerPrefixTiebreakerSrlgDisjointIndex() {
    return this.getNumberAttribute('fast_reroute_per_prefix_tiebreaker_srlg_disjoint_index');
  }

  // fast_reroute_per_prefix_use_candidate_only - computed: true, optional: false, required: false
  public get fastReroutePerPrefixUseCandidateOnly() {
    return this.getBooleanAttribute('fast_reroute_per_prefix_use_candidate_only');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // maximum_redistributed_prefixes - computed: true, optional: false, required: false
  public get maximumRedistributedPrefixes() {
    return this.getNumberAttribute('maximum_redistributed_prefixes');
  }

  // maximum_redistributed_prefixes_levels - computed: true, optional: false, required: false
  private _maximumRedistributedPrefixesLevels = new DataIosxrRouterIsisAddressFamilyMaximumRedistributedPrefixesLevelsList(this, "maximum_redistributed_prefixes_levels", false);
  public get maximumRedistributedPrefixesLevels() {
    return this._maximumRedistributedPrefixesLevels;
  }

  // metric_style_levels - computed: true, optional: false, required: false
  private _metricStyleLevels = new DataIosxrRouterIsisAddressFamilyMetricStyleLevelsList(this, "metric_style_levels", false);
  public get metricStyleLevels() {
    return this._metricStyleLevels;
  }

  // metric_style_narrow - computed: true, optional: false, required: false
  public get metricStyleNarrow() {
    return this.getBooleanAttribute('metric_style_narrow');
  }

  // metric_style_narrow_transition - computed: true, optional: false, required: false
  public get metricStyleNarrowTransition() {
    return this.getBooleanAttribute('metric_style_narrow_transition');
  }

  // metric_style_transition - computed: true, optional: false, required: false
  public get metricStyleTransition() {
    return this.getBooleanAttribute('metric_style_transition');
  }

  // metric_style_wide - computed: true, optional: false, required: false
  public get metricStyleWide() {
    return this.getBooleanAttribute('metric_style_wide');
  }

  // metric_style_wide_transition - computed: true, optional: false, required: false
  public get metricStyleWideTransition() {
    return this.getBooleanAttribute('metric_style_wide_transition');
  }

  // microloop_avoidance - computed: true, optional: false, required: false
  public get microloopAvoidance() {
    return this.getBooleanAttribute('microloop_avoidance');
  }

  // microloop_avoidance_protected - computed: true, optional: false, required: false
  public get microloopAvoidanceProtected() {
    return this.getBooleanAttribute('microloop_avoidance_protected');
  }

  // microloop_avoidance_rib_update_delay - computed: true, optional: false, required: false
  public get microloopAvoidanceRibUpdateDelay() {
    return this.getNumberAttribute('microloop_avoidance_rib_update_delay');
  }

  // microloop_avoidance_segment_routing_route_policy - computed: true, optional: false, required: false
  public get microloopAvoidanceSegmentRoutingRoutePolicy() {
    return this.getStringAttribute('microloop_avoidance_segment_routing_route_policy');
  }

  // mpls_ldp_auto_config - computed: true, optional: false, required: false
  public get mplsLdpAutoConfig() {
    return this.getBooleanAttribute('mpls_ldp_auto_config');
  }

  // mpls_traffic_eng_level_1 - computed: true, optional: false, required: false
  public get mplsTrafficEngLevel1() {
    return this.getBooleanAttribute('mpls_traffic_eng_level_1');
  }

  // mpls_traffic_eng_level_1_2 - computed: true, optional: false, required: false
  public get mplsTrafficEngLevel12() {
    return this.getBooleanAttribute('mpls_traffic_eng_level_1_2');
  }

  // mpls_traffic_eng_level_2_only - computed: true, optional: false, required: false
  public get mplsTrafficEngLevel2Only() {
    return this.getBooleanAttribute('mpls_traffic_eng_level_2_only');
  }

  // mpls_traffic_eng_router_id_interface_name - computed: true, optional: false, required: false
  public get mplsTrafficEngRouterIdInterfaceName() {
    return this.getStringAttribute('mpls_traffic_eng_router_id_interface_name');
  }

  // mpls_traffic_eng_router_id_ipv4_address - computed: true, optional: false, required: false
  public get mplsTrafficEngRouterIdIpv4Address() {
    return this.getStringAttribute('mpls_traffic_eng_router_id_ipv4_address');
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

  // redistribute_isis - computed: true, optional: false, required: false
  private _redistributeIsis = new DataIosxrRouterIsisAddressFamilyRedistributeIsisList(this, "redistribute_isis", false);
  public get redistributeIsis() {
    return this._redistributeIsis;
  }

  // router_id_interface_name - computed: true, optional: false, required: false
  public get routerIdInterfaceName() {
    return this.getStringAttribute('router_id_interface_name');
  }

  // router_id_ip_address - computed: true, optional: false, required: false
  public get routerIdIpAddress() {
    return this.getStringAttribute('router_id_ip_address');
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

  // segment_routing_mpls_enable - computed: true, optional: false, required: false
  public get segmentRoutingMplsEnable() {
    return this.getBooleanAttribute('segment_routing_mpls_enable');
  }

  // segment_routing_mpls_sr_prefer - computed: true, optional: false, required: false
  public get segmentRoutingMplsSrPrefer() {
    return this.getBooleanAttribute('segment_routing_mpls_sr_prefer');
  }

  // segment_routing_srv6_locators - computed: true, optional: false, required: false
  private _segmentRoutingSrv6Locators = new DataIosxrRouterIsisAddressFamilySegmentRoutingSrv6LocatorsList(this, "segment_routing_srv6_locators", false);
  public get segmentRoutingSrv6Locators() {
    return this._segmentRoutingSrv6Locators;
  }

  // spf_interval_ietf - computed: true, optional: false, required: false
  public get spfIntervalIetf() {
    return this.getBooleanAttribute('spf_interval_ietf');
  }

  // spf_interval_ietf_holddown_interval - computed: true, optional: false, required: false
  public get spfIntervalIetfHolddownInterval() {
    return this.getNumberAttribute('spf_interval_ietf_holddown_interval');
  }

  // spf_interval_ietf_initial_wait - computed: true, optional: false, required: false
  public get spfIntervalIetfInitialWait() {
    return this.getNumberAttribute('spf_interval_ietf_initial_wait');
  }

  // spf_interval_ietf_learn_interval - computed: true, optional: false, required: false
  public get spfIntervalIetfLearnInterval() {
    return this.getNumberAttribute('spf_interval_ietf_learn_interval');
  }

  // spf_interval_ietf_long_wait - computed: true, optional: false, required: false
  public get spfIntervalIetfLongWait() {
    return this.getNumberAttribute('spf_interval_ietf_long_wait');
  }

  // spf_interval_ietf_short_wait - computed: true, optional: false, required: false
  public get spfIntervalIetfShortWait() {
    return this.getNumberAttribute('spf_interval_ietf_short_wait');
  }

  // spf_interval_initial_wait - computed: true, optional: false, required: false
  public get spfIntervalInitialWait() {
    return this.getNumberAttribute('spf_interval_initial_wait');
  }

  // spf_interval_levels - computed: true, optional: false, required: false
  private _spfIntervalLevels = new DataIosxrRouterIsisAddressFamilySpfIntervalLevelsList(this, "spf_interval_levels", false);
  public get spfIntervalLevels() {
    return this._spfIntervalLevels;
  }

  // spf_interval_maximum_wait - computed: true, optional: false, required: false
  public get spfIntervalMaximumWait() {
    return this.getNumberAttribute('spf_interval_maximum_wait');
  }

  // spf_interval_secondary_wait - computed: true, optional: false, required: false
  public get spfIntervalSecondaryWait() {
    return this.getNumberAttribute('spf_interval_secondary_wait');
  }

  // spf_prefix_priority_critical_levels - computed: true, optional: false, required: false
  private _spfPrefixPriorityCriticalLevels = new DataIosxrRouterIsisAddressFamilySpfPrefixPriorityCriticalLevelsList(this, "spf_prefix_priority_critical_levels", false);
  public get spfPrefixPriorityCriticalLevels() {
    return this._spfPrefixPriorityCriticalLevels;
  }

  // spf_prefix_priority_critical_prefix_list_name - computed: true, optional: false, required: false
  public get spfPrefixPriorityCriticalPrefixListName() {
    return this.getStringAttribute('spf_prefix_priority_critical_prefix_list_name');
  }

  // spf_prefix_priority_critical_tag - computed: true, optional: false, required: false
  public get spfPrefixPriorityCriticalTag() {
    return this.getNumberAttribute('spf_prefix_priority_critical_tag');
  }

  // spf_prefix_priority_high_levels - computed: true, optional: false, required: false
  private _spfPrefixPriorityHighLevels = new DataIosxrRouterIsisAddressFamilySpfPrefixPriorityHighLevelsList(this, "spf_prefix_priority_high_levels", false);
  public get spfPrefixPriorityHighLevels() {
    return this._spfPrefixPriorityHighLevels;
  }

  // spf_prefix_priority_high_prefix_list_name - computed: true, optional: false, required: false
  public get spfPrefixPriorityHighPrefixListName() {
    return this.getStringAttribute('spf_prefix_priority_high_prefix_list_name');
  }

  // spf_prefix_priority_high_tag - computed: true, optional: false, required: false
  public get spfPrefixPriorityHighTag() {
    return this.getNumberAttribute('spf_prefix_priority_high_tag');
  }

  // spf_prefix_priority_medium_levels - computed: true, optional: false, required: false
  private _spfPrefixPriorityMediumLevels = new DataIosxrRouterIsisAddressFamilySpfPrefixPriorityMediumLevelsList(this, "spf_prefix_priority_medium_levels", false);
  public get spfPrefixPriorityMediumLevels() {
    return this._spfPrefixPriorityMediumLevels;
  }

  // spf_prefix_priority_medium_prefix_list_name - computed: true, optional: false, required: false
  public get spfPrefixPriorityMediumPrefixListName() {
    return this.getStringAttribute('spf_prefix_priority_medium_prefix_list_name');
  }

  // spf_prefix_priority_medium_tag - computed: true, optional: false, required: false
  public get spfPrefixPriorityMediumTag() {
    return this.getNumberAttribute('spf_prefix_priority_medium_tag');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      af_name: cdktf.stringToTerraform(this._afName),
      device: cdktf.stringToTerraform(this._device),
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
