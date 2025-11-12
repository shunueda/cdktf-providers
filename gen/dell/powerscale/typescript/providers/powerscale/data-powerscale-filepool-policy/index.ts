// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filepool_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerscaleFilepoolPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filepool_policy#filter DataPowerscaleFilepoolPolicy#filter}
  */
  readonly filter?: DataPowerscaleFilepoolPolicyFilter;
}
export interface DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsCloudpoolPolicyActionCache {
}

export function dataPowerscaleFilepoolPolicyFilePoolPoliciesActionsCloudpoolPolicyActionCacheToTerraform(struct?: DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsCloudpoolPolicyActionCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleFilepoolPolicyFilePoolPoliciesActionsCloudpoolPolicyActionCacheToHclTerraform(struct?: DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsCloudpoolPolicyActionCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsCloudpoolPolicyActionCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsCloudpoolPolicyActionCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsCloudpoolPolicyActionCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getNumberAttribute('expiration');
  }

  // read_ahead - computed: true, optional: false, required: false
  public get readAhead() {
    return this.getStringAttribute('read_ahead');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsCloudpoolPolicyAction {
}

export function dataPowerscaleFilepoolPolicyFilePoolPoliciesActionsCloudpoolPolicyActionToTerraform(struct?: DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsCloudpoolPolicyAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleFilepoolPolicyFilePoolPoliciesActionsCloudpoolPolicyActionToHclTerraform(struct?: DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsCloudpoolPolicyAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsCloudpoolPolicyActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsCloudpoolPolicyAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsCloudpoolPolicyAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // archive_snapshot_files - computed: true, optional: false, required: false
  public get archiveSnapshotFiles() {
    return this.getBooleanAttribute('archive_snapshot_files');
  }

  // cache - computed: true, optional: false, required: false
  private _cache = new DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsCloudpoolPolicyActionCacheOutputReference(this, "cache");
  public get cache() {
    return this._cache;
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getBooleanAttribute('compression');
  }

  // data_retention - computed: true, optional: false, required: false
  public get dataRetention() {
    return this.getNumberAttribute('data_retention');
  }

  // encryption - computed: true, optional: false, required: false
  public get encryption() {
    return this.getBooleanAttribute('encryption');
  }

  // full_backup_retention - computed: true, optional: false, required: false
  public get fullBackupRetention() {
    return this.getNumberAttribute('full_backup_retention');
  }

  // incremental_backup_retention - computed: true, optional: false, required: false
  public get incrementalBackupRetention() {
    return this.getNumberAttribute('incremental_backup_retention');
  }

  // pool - computed: true, optional: false, required: false
  public get pool() {
    return this.getStringAttribute('pool');
  }

  // writeback_frequency - computed: true, optional: false, required: false
  public get writebackFrequency() {
    return this.getNumberAttribute('writeback_frequency');
  }
}
export interface DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsDataStoragePolicyAction {
}

export function dataPowerscaleFilepoolPolicyFilePoolPoliciesActionsDataStoragePolicyActionToTerraform(struct?: DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsDataStoragePolicyAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleFilepoolPolicyFilePoolPoliciesActionsDataStoragePolicyActionToHclTerraform(struct?: DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsDataStoragePolicyAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsDataStoragePolicyActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsDataStoragePolicyAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsDataStoragePolicyAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ssd_strategy - computed: true, optional: false, required: false
  public get ssdStrategy() {
    return this.getStringAttribute('ssd_strategy');
  }

  // storagepool - computed: true, optional: false, required: false
  public get storagepool() {
    return this.getStringAttribute('storagepool');
  }
}
export interface DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsSnapshotStoragePolicyAction {
}

export function dataPowerscaleFilepoolPolicyFilePoolPoliciesActionsSnapshotStoragePolicyActionToTerraform(struct?: DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsSnapshotStoragePolicyAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleFilepoolPolicyFilePoolPoliciesActionsSnapshotStoragePolicyActionToHclTerraform(struct?: DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsSnapshotStoragePolicyAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsSnapshotStoragePolicyActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsSnapshotStoragePolicyAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsSnapshotStoragePolicyAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ssd_strategy - computed: true, optional: false, required: false
  public get ssdStrategy() {
    return this.getStringAttribute('ssd_strategy');
  }

  // storagepool - computed: true, optional: false, required: false
  public get storagepool() {
    return this.getStringAttribute('storagepool');
  }
}
export interface DataPowerscaleFilepoolPolicyFilePoolPoliciesActions {
}

export function dataPowerscaleFilepoolPolicyFilePoolPoliciesActionsToTerraform(struct?: DataPowerscaleFilepoolPolicyFilePoolPoliciesActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleFilepoolPolicyFilePoolPoliciesActionsToHclTerraform(struct?: DataPowerscaleFilepoolPolicyFilePoolPoliciesActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleFilepoolPolicyFilePoolPoliciesActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleFilepoolPolicyFilePoolPoliciesActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_type - computed: true, optional: false, required: false
  public get actionType() {
    return this.getStringAttribute('action_type');
  }

  // cloudpool_policy_action - computed: true, optional: false, required: false
  private _cloudpoolPolicyAction = new DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsCloudpoolPolicyActionOutputReference(this, "cloudpool_policy_action");
  public get cloudpoolPolicyAction() {
    return this._cloudpoolPolicyAction;
  }

  // data_access_pattern_action - computed: true, optional: false, required: false
  public get dataAccessPatternAction() {
    return this.getStringAttribute('data_access_pattern_action');
  }

  // data_storage_policy_action - computed: true, optional: false, required: false
  private _dataStoragePolicyAction = new DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsDataStoragePolicyActionOutputReference(this, "data_storage_policy_action");
  public get dataStoragePolicyAction() {
    return this._dataStoragePolicyAction;
  }

  // enable_coalescer_action - computed: true, optional: false, required: false
  public get enableCoalescerAction() {
    return this.getBooleanAttribute('enable_coalescer_action');
  }

  // enable_packing_action - computed: true, optional: false, required: false
  public get enablePackingAction() {
    return this.getBooleanAttribute('enable_packing_action');
  }

  // requested_protection_action - computed: true, optional: false, required: false
  public get requestedProtectionAction() {
    return this.getStringAttribute('requested_protection_action');
  }

  // snapshot_storage_policy_action - computed: true, optional: false, required: false
  private _snapshotStoragePolicyAction = new DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsSnapshotStoragePolicyActionOutputReference(this, "snapshot_storage_policy_action");
  public get snapshotStoragePolicyAction() {
    return this._snapshotStoragePolicyAction;
  }
}

export class DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsOutputReference {
    return new DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPatternOrCriteriaAndCriteria {
}

export function dataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPatternOrCriteriaAndCriteriaToTerraform(struct?: DataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPatternOrCriteriaAndCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPatternOrCriteriaAndCriteriaToHclTerraform(struct?: DataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPatternOrCriteriaAndCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPatternOrCriteriaAndCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPatternOrCriteriaAndCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPatternOrCriteriaAndCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_exists - computed: true, optional: false, required: false
  public get attributeExists() {
    return this.getBooleanAttribute('attribute_exists');
  }

  // begins_with - computed: true, optional: false, required: false
  public get beginsWith() {
    return this.getBooleanAttribute('begins_with');
  }

  // case_sensitive - computed: true, optional: false, required: false
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // units - computed: true, optional: false, required: false
  public get units() {
    return this.getStringAttribute('units');
  }

  // use_relative_time - computed: true, optional: false, required: false
  public get useRelativeTime() {
    return this.getBooleanAttribute('use_relative_time');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPatternOrCriteriaAndCriteriaList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPatternOrCriteriaAndCriteriaOutputReference {
    return new DataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPatternOrCriteriaAndCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPatternOrCriteria {
}

export function dataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPatternOrCriteriaToTerraform(struct?: DataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPatternOrCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPatternOrCriteriaToHclTerraform(struct?: DataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPatternOrCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPatternOrCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPatternOrCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPatternOrCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // and_criteria - computed: true, optional: false, required: false
  private _andCriteria = new DataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPatternOrCriteriaAndCriteriaList(this, "and_criteria", false);
  public get andCriteria() {
    return this._andCriteria;
  }
}

export class DataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPatternOrCriteriaList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPatternOrCriteriaOutputReference {
    return new DataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPatternOrCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPattern {
}

export function dataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPatternToTerraform(struct?: DataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPatternToHclTerraform(struct?: DataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // or_criteria - computed: true, optional: false, required: false
  private _orCriteria = new DataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPatternOrCriteriaList(this, "or_criteria", false);
  public get orCriteria() {
    return this._orCriteria;
  }
}
export interface DataPowerscaleFilepoolPolicyFilePoolPolicies {
}

export function dataPowerscaleFilepoolPolicyFilePoolPoliciesToTerraform(struct?: DataPowerscaleFilepoolPolicyFilePoolPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleFilepoolPolicyFilePoolPoliciesToHclTerraform(struct?: DataPowerscaleFilepoolPolicyFilePoolPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleFilepoolPolicyFilePoolPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleFilepoolPolicyFilePoolPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleFilepoolPolicyFilePoolPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataPowerscaleFilepoolPolicyFilePoolPoliciesActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // apply_order - computed: true, optional: false, required: false
  public get applyOrder() {
    return this.getNumberAttribute('apply_order');
  }

  // birth_cluster_id - computed: true, optional: false, required: false
  public get birthClusterId() {
    return this.getStringAttribute('birth_cluster_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // file_matching_pattern - computed: true, optional: false, required: false
  private _fileMatchingPattern = new DataPowerscaleFilepoolPolicyFilePoolPoliciesFileMatchingPatternOutputReference(this, "file_matching_pattern");
  public get fileMatchingPattern() {
    return this._fileMatchingPattern;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_details - computed: true, optional: false, required: false
  public get stateDetails() {
    return this.getStringAttribute('state_details');
  }
}

export class DataPowerscaleFilepoolPolicyFilePoolPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleFilepoolPolicyFilePoolPoliciesOutputReference {
    return new DataPowerscaleFilepoolPolicyFilePoolPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleFilepoolPolicyFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filepool_policy#names DataPowerscaleFilepoolPolicy#names}
  */
  readonly names?: string[];
}

export function dataPowerscaleFilepoolPolicyFilterToTerraform(struct?: DataPowerscaleFilepoolPolicyFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
  }
}


export function dataPowerscaleFilepoolPolicyFilterToHclTerraform(struct?: DataPowerscaleFilepoolPolicyFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleFilepoolPolicyFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleFilepoolPolicyFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleFilepoolPolicyFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._names = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._names = value.names;
    }
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return cdktf.Fn.tolist(this.getListAttribute('names'));
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filepool_policy powerscale_filepool_policy}
*/
export class DataPowerscaleFilepoolPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_filepool_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerscaleFilepoolPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerscaleFilepoolPolicy to import
  * @param importFromId The id of the existing DataPowerscaleFilepoolPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filepool_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerscaleFilepoolPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_filepool_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/filepool_policy powerscale_filepool_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerscaleFilepoolPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerscaleFilepoolPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_filepool_policy',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // file_pool_policies - computed: true, optional: false, required: false
  private _filePoolPolicies = new DataPowerscaleFilepoolPolicyFilePoolPoliciesList(this, "file_pool_policies", false);
  public get filePoolPolicies() {
    return this._filePoolPolicies;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerscaleFilepoolPolicyFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerscaleFilepoolPolicyFilter) {
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
      filter: dataPowerscaleFilepoolPolicyFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerscaleFilepoolPolicyFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerscaleFilepoolPolicyFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
