// https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/backup_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTanzuMissionControlBackupScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/backup_schedule#id DataTanzuMissionControlBackupSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to include total count of backups.
  * (Default: True)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/backup_schedule#include_total_count DataTanzuMissionControlBackupSchedule#include_total_count}
  */
  readonly includeTotalCount?: boolean | cdktf.IResolvable;
  /**
  * The name of the backup schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/backup_schedule#name DataTanzuMissionControlBackupSchedule#name}
  */
  readonly name?: string;
  /**
  * Define a query for listing backups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/backup_schedule#query DataTanzuMissionControlBackupSchedule#query}
  */
  readonly query?: string;
  /**
  * Sort backups by field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/backup_schedule#sort_by DataTanzuMissionControlBackupSchedule#sort_by}
  */
  readonly sortBy?: string;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/backup_schedule#scope DataTanzuMissionControlBackupSchedule#scope}
  */
  readonly scope: DataTanzuMissionControlBackupScheduleScope;
}
export interface DataTanzuMissionControlBackupScheduleSchedulesMeta {
}

export function dataTanzuMissionControlBackupScheduleSchedulesMetaToTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlBackupScheduleSchedulesMetaToHclTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlBackupScheduleSchedulesMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlBackupScheduleSchedulesMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlBackupScheduleSchedulesMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktf.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataTanzuMissionControlBackupScheduleSchedulesMetaList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlBackupScheduleSchedulesMetaOutputReference {
    return new DataTanzuMissionControlBackupScheduleSchedulesMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlBackupScheduleSchedulesScopeCluster {
}

export function dataTanzuMissionControlBackupScheduleSchedulesScopeClusterToTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesScopeCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlBackupScheduleSchedulesScopeClusterToHclTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesScopeCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlBackupScheduleSchedulesScopeClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlBackupScheduleSchedulesScopeCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlBackupScheduleSchedulesScopeCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // management_cluster_name - computed: true, optional: false, required: false
  public get managementClusterName() {
    return this.getStringAttribute('management_cluster_name');
  }

  // provisioner_name - computed: true, optional: false, required: false
  public get provisionerName() {
    return this.getStringAttribute('provisioner_name');
  }
}

export class DataTanzuMissionControlBackupScheduleSchedulesScopeClusterList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlBackupScheduleSchedulesScopeClusterOutputReference {
    return new DataTanzuMissionControlBackupScheduleSchedulesScopeClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlBackupScheduleSchedulesScopeClusterGroup {
}

export function dataTanzuMissionControlBackupScheduleSchedulesScopeClusterGroupToTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesScopeClusterGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlBackupScheduleSchedulesScopeClusterGroupToHclTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesScopeClusterGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlBackupScheduleSchedulesScopeClusterGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlBackupScheduleSchedulesScopeClusterGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlBackupScheduleSchedulesScopeClusterGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_group_name - computed: true, optional: false, required: false
  public get clusterGroupName() {
    return this.getStringAttribute('cluster_group_name');
  }
}

export class DataTanzuMissionControlBackupScheduleSchedulesScopeClusterGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlBackupScheduleSchedulesScopeClusterGroupOutputReference {
    return new DataTanzuMissionControlBackupScheduleSchedulesScopeClusterGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlBackupScheduleSchedulesScope {
}

export function dataTanzuMissionControlBackupScheduleSchedulesScopeToTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlBackupScheduleSchedulesScopeToHclTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlBackupScheduleSchedulesScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlBackupScheduleSchedulesScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlBackupScheduleSchedulesScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster - computed: true, optional: false, required: false
  private _cluster = new DataTanzuMissionControlBackupScheduleSchedulesScopeClusterList(this, "cluster", false);
  public get cluster() {
    return this._cluster;
  }

  // cluster_group - computed: true, optional: false, required: false
  private _clusterGroup = new DataTanzuMissionControlBackupScheduleSchedulesScopeClusterGroupList(this, "cluster_group", false);
  public get clusterGroup() {
    return this._clusterGroup;
  }
}

export class DataTanzuMissionControlBackupScheduleSchedulesScopeList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlBackupScheduleSchedulesScopeOutputReference {
    return new DataTanzuMissionControlBackupScheduleSchedulesScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlBackupScheduleSchedulesSelectorLabelSelectorMatchExpression {
}

export function dataTanzuMissionControlBackupScheduleSchedulesSelectorLabelSelectorMatchExpressionToTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSelectorLabelSelectorMatchExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlBackupScheduleSchedulesSelectorLabelSelectorMatchExpressionToHclTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSelectorLabelSelectorMatchExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlBackupScheduleSchedulesSelectorLabelSelectorMatchExpressionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlBackupScheduleSchedulesSelectorLabelSelectorMatchExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlBackupScheduleSchedulesSelectorLabelSelectorMatchExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataTanzuMissionControlBackupScheduleSchedulesSelectorLabelSelectorMatchExpressionList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlBackupScheduleSchedulesSelectorLabelSelectorMatchExpressionOutputReference {
    return new DataTanzuMissionControlBackupScheduleSchedulesSelectorLabelSelectorMatchExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlBackupScheduleSchedulesSelectorLabelSelector {
}

export function dataTanzuMissionControlBackupScheduleSchedulesSelectorLabelSelectorToTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSelectorLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlBackupScheduleSchedulesSelectorLabelSelectorToHclTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSelectorLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlBackupScheduleSchedulesSelectorLabelSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlBackupScheduleSchedulesSelectorLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlBackupScheduleSchedulesSelectorLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_expression - computed: true, optional: false, required: false
  private _matchExpression = new DataTanzuMissionControlBackupScheduleSchedulesSelectorLabelSelectorMatchExpressionList(this, "match_expression", false);
  public get matchExpression() {
    return this._matchExpression;
  }

  // match_labels - computed: true, optional: false, required: false
  private _matchLabels = new cdktf.StringMap(this, "match_labels");
  public get matchLabels() {
    return this._matchLabels;
  }
}

export class DataTanzuMissionControlBackupScheduleSchedulesSelectorLabelSelectorList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlBackupScheduleSchedulesSelectorLabelSelectorOutputReference {
    return new DataTanzuMissionControlBackupScheduleSchedulesSelectorLabelSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlBackupScheduleSchedulesSelector {
}

export function dataTanzuMissionControlBackupScheduleSchedulesSelectorToTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlBackupScheduleSchedulesSelectorToHclTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlBackupScheduleSchedulesSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlBackupScheduleSchedulesSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlBackupScheduleSchedulesSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // excluded_names - computed: true, optional: false, required: false
  public get excludedNames() {
    return this.getListAttribute('excluded_names');
  }

  // label_selector - computed: true, optional: false, required: false
  private _labelSelector = new DataTanzuMissionControlBackupScheduleSchedulesSelectorLabelSelectorList(this, "label_selector", false);
  public get labelSelector() {
    return this._labelSelector;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }
}

export class DataTanzuMissionControlBackupScheduleSchedulesSelectorList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlBackupScheduleSchedulesSelectorOutputReference {
    return new DataTanzuMissionControlBackupScheduleSchedulesSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlBackupScheduleSchedulesSpecSchedule {
}

export function dataTanzuMissionControlBackupScheduleSchedulesSpecScheduleToTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSpecSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlBackupScheduleSchedulesSpecScheduleToHclTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSpecSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlBackupScheduleSchedulesSpecScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlBackupScheduleSchedulesSpecSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlBackupScheduleSchedulesSpecSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rate - computed: true, optional: false, required: false
  public get rate() {
    return this.getStringAttribute('rate');
  }
}

export class DataTanzuMissionControlBackupScheduleSchedulesSpecScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlBackupScheduleSchedulesSpecScheduleOutputReference {
    return new DataTanzuMissionControlBackupScheduleSchedulesSpecScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceLabelSelectorMatchExpression {
}

export function dataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceLabelSelectorMatchExpressionToTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceLabelSelectorMatchExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceLabelSelectorMatchExpressionToHclTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceLabelSelectorMatchExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceLabelSelectorMatchExpressionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceLabelSelectorMatchExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceLabelSelectorMatchExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceLabelSelectorMatchExpressionList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceLabelSelectorMatchExpressionOutputReference {
    return new DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceLabelSelectorMatchExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceLabelSelector {
}

export function dataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceLabelSelectorToTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceLabelSelectorToHclTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceLabelSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_expression - computed: true, optional: false, required: false
  private _matchExpression = new DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceLabelSelectorMatchExpressionList(this, "match_expression", false);
  public get matchExpression() {
    return this._matchExpression;
  }

  // match_labels - computed: true, optional: false, required: false
  private _matchLabels = new cdktf.StringMap(this, "match_labels");
  public get matchLabels() {
    return this._matchLabels;
  }
}

export class DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceLabelSelectorList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceLabelSelectorOutputReference {
    return new DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceLabelSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePostHookExec {
}

export function dataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePostHookExecToTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePostHookExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePostHookExecToHclTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePostHookExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePostHookExecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePostHookExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePostHookExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // container - computed: true, optional: false, required: false
  public get container() {
    return this.getStringAttribute('container');
  }

  // on_error - computed: true, optional: false, required: false
  public get onError() {
    return this.getStringAttribute('on_error');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
}

export class DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePostHookExecList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePostHookExecOutputReference {
    return new DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePostHookExecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePostHook {
}

export function dataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePostHookToTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePostHook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePostHookToHclTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePostHook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePostHookOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePostHook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePostHook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exec - computed: true, optional: false, required: false
  private _exec = new DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePostHookExecList(this, "exec", false);
  public get exec() {
    return this._exec;
  }
}

export class DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePostHookList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePostHookOutputReference {
    return new DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePostHookOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePreHookExec {
}

export function dataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePreHookExecToTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePreHookExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePreHookExecToHclTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePreHookExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePreHookExecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePreHookExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePreHookExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // container - computed: true, optional: false, required: false
  public get container() {
    return this.getStringAttribute('container');
  }

  // on_error - computed: true, optional: false, required: false
  public get onError() {
    return this.getStringAttribute('on_error');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
}

export class DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePreHookExecList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePreHookExecOutputReference {
    return new DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePreHookExecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePreHook {
}

export function dataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePreHookToTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePreHook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePreHookToHclTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePreHook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePreHookOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePreHook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePreHook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exec - computed: true, optional: false, required: false
  private _exec = new DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePreHookExecList(this, "exec", false);
  public get exec() {
    return this._exec;
  }
}

export class DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePreHookList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePreHookOutputReference {
    return new DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePreHookOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResource {
}

export function dataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceToTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceToHclTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // excluded_namespaces - computed: true, optional: false, required: false
  public get excludedNamespaces() {
    return this.getListAttribute('excluded_namespaces');
  }

  // included_namespaces - computed: true, optional: false, required: false
  public get includedNamespaces() {
    return this.getListAttribute('included_namespaces');
  }

  // label_selector - computed: true, optional: false, required: false
  private _labelSelector = new DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceLabelSelectorList(this, "label_selector", false);
  public get labelSelector() {
    return this._labelSelector;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // post_hook - computed: true, optional: false, required: false
  private _postHook = new DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePostHookList(this, "post_hook", false);
  public get postHook() {
    return this._postHook;
  }

  // pre_hook - computed: true, optional: false, required: false
  private _preHook = new DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourcePreHookList(this, "pre_hook", false);
  public get preHook() {
    return this._preHook;
  }
}

export class DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceOutputReference {
    return new DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooks {
}

export function dataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksToTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksToHclTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource - computed: true, optional: false, required: false
  private _resource = new DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksResourceList(this, "resource", false);
  public get resource() {
    return this._resource;
  }
}

export class DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksOutputReference {
    return new DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateLabelSelectorMatchExpression {
}

export function dataTanzuMissionControlBackupScheduleSchedulesSpecTemplateLabelSelectorMatchExpressionToTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateLabelSelectorMatchExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlBackupScheduleSchedulesSpecTemplateLabelSelectorMatchExpressionToHclTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateLabelSelectorMatchExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateLabelSelectorMatchExpressionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateLabelSelectorMatchExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateLabelSelectorMatchExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateLabelSelectorMatchExpressionList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateLabelSelectorMatchExpressionOutputReference {
    return new DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateLabelSelectorMatchExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateLabelSelector {
}

export function dataTanzuMissionControlBackupScheduleSchedulesSpecTemplateLabelSelectorToTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlBackupScheduleSchedulesSpecTemplateLabelSelectorToHclTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateLabelSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_expression - computed: true, optional: false, required: false
  private _matchExpression = new DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateLabelSelectorMatchExpressionList(this, "match_expression", false);
  public get matchExpression() {
    return this._matchExpression;
  }

  // match_labels - computed: true, optional: false, required: false
  private _matchLabels = new cdktf.StringMap(this, "match_labels");
  public get matchLabels() {
    return this._matchLabels;
  }
}

export class DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateLabelSelectorList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateLabelSelectorOutputReference {
    return new DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateLabelSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateOrLabelSelectorMatchExpression {
}

export function dataTanzuMissionControlBackupScheduleSchedulesSpecTemplateOrLabelSelectorMatchExpressionToTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateOrLabelSelectorMatchExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlBackupScheduleSchedulesSpecTemplateOrLabelSelectorMatchExpressionToHclTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateOrLabelSelectorMatchExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateOrLabelSelectorMatchExpressionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateOrLabelSelectorMatchExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateOrLabelSelectorMatchExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateOrLabelSelectorMatchExpressionList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateOrLabelSelectorMatchExpressionOutputReference {
    return new DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateOrLabelSelectorMatchExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateOrLabelSelector {
}

export function dataTanzuMissionControlBackupScheduleSchedulesSpecTemplateOrLabelSelectorToTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateOrLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlBackupScheduleSchedulesSpecTemplateOrLabelSelectorToHclTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateOrLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateOrLabelSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateOrLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateOrLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_expression - computed: true, optional: false, required: false
  private _matchExpression = new DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateOrLabelSelectorMatchExpressionList(this, "match_expression", false);
  public get matchExpression() {
    return this._matchExpression;
  }

  // match_labels - computed: true, optional: false, required: false
  private _matchLabels = new cdktf.StringMap(this, "match_labels");
  public get matchLabels() {
    return this._matchLabels;
  }
}

export class DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateOrLabelSelectorList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateOrLabelSelectorOutputReference {
    return new DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateOrLabelSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlBackupScheduleSchedulesSpecTemplate {
}

export function dataTanzuMissionControlBackupScheduleSchedulesSpecTemplateToTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlBackupScheduleSchedulesSpecTemplateToHclTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlBackupScheduleSchedulesSpecTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlBackupScheduleSchedulesSpecTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_ttl - computed: true, optional: false, required: false
  public get backupTtl() {
    return this.getStringAttribute('backup_ttl');
  }

  // csi_snapshot_timeout - computed: true, optional: false, required: false
  public get csiSnapshotTimeout() {
    return this.getStringAttribute('csi_snapshot_timeout');
  }

  // default_volumes_to_fs_backup - computed: true, optional: false, required: false
  public get defaultVolumesToFsBackup() {
    return this.getBooleanAttribute('default_volumes_to_fs_backup');
  }

  // default_volumes_to_restic - computed: true, optional: false, required: false
  public get defaultVolumesToRestic() {
    return this.getBooleanAttribute('default_volumes_to_restic');
  }

  // excluded_cluster_scoped_resources - computed: true, optional: false, required: false
  public get excludedClusterScopedResources() {
    return this.getListAttribute('excluded_cluster_scoped_resources');
  }

  // excluded_namespace_scoped_resources - computed: true, optional: false, required: false
  public get excludedNamespaceScopedResources() {
    return this.getListAttribute('excluded_namespace_scoped_resources');
  }

  // excluded_namespaces - computed: true, optional: false, required: false
  public get excludedNamespaces() {
    return this.getListAttribute('excluded_namespaces');
  }

  // excluded_resources - computed: true, optional: false, required: false
  public get excludedResources() {
    return this.getListAttribute('excluded_resources');
  }

  // hooks - computed: true, optional: false, required: false
  private _hooks = new DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateHooksList(this, "hooks", false);
  public get hooks() {
    return this._hooks;
  }

  // include_cluster_resources - computed: true, optional: false, required: false
  public get includeClusterResources() {
    return this.getBooleanAttribute('include_cluster_resources');
  }

  // included_cluster_scoped_resources - computed: true, optional: false, required: false
  public get includedClusterScopedResources() {
    return this.getListAttribute('included_cluster_scoped_resources');
  }

  // included_namespace_scoped_resources - computed: true, optional: false, required: false
  public get includedNamespaceScopedResources() {
    return this.getListAttribute('included_namespace_scoped_resources');
  }

  // included_namespaces - computed: true, optional: false, required: false
  public get includedNamespaces() {
    return this.getListAttribute('included_namespaces');
  }

  // included_resources - computed: true, optional: false, required: false
  public get includedResources() {
    return this.getListAttribute('included_resources');
  }

  // label_selector - computed: true, optional: false, required: false
  private _labelSelector = new DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateLabelSelectorList(this, "label_selector", false);
  public get labelSelector() {
    return this._labelSelector;
  }

  // or_label_selector - computed: true, optional: false, required: false
  private _orLabelSelector = new DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateOrLabelSelectorList(this, "or_label_selector", false);
  public get orLabelSelector() {
    return this._orLabelSelector;
  }

  // ordered_resources - computed: true, optional: false, required: false
  private _orderedResources = new cdktf.StringMap(this, "ordered_resources");
  public get orderedResources() {
    return this._orderedResources;
  }

  // snapshot_move_data - computed: true, optional: false, required: false
  public get snapshotMoveData() {
    return this.getBooleanAttribute('snapshot_move_data');
  }

  // snapshot_volumes - computed: true, optional: false, required: false
  public get snapshotVolumes() {
    return this.getBooleanAttribute('snapshot_volumes');
  }

  // storage_location - computed: true, optional: false, required: false
  public get storageLocation() {
    return this.getStringAttribute('storage_location');
  }

  // sys_excluded_namespaces - computed: true, optional: false, required: false
  public get sysExcludedNamespaces() {
    return this.getListAttribute('sys_excluded_namespaces');
  }

  // volume_snapshot_locations - computed: true, optional: false, required: false
  public get volumeSnapshotLocations() {
    return this.getListAttribute('volume_snapshot_locations');
  }
}

export class DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateOutputReference {
    return new DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlBackupScheduleSchedulesSpec {
}

export function dataTanzuMissionControlBackupScheduleSchedulesSpecToTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlBackupScheduleSchedulesSpecToHclTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedulesSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlBackupScheduleSchedulesSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlBackupScheduleSchedulesSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlBackupScheduleSchedulesSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // paused - computed: true, optional: false, required: false
  public get paused() {
    return this.getBooleanAttribute('paused');
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataTanzuMissionControlBackupScheduleSchedulesSpecScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }

  // template - computed: true, optional: false, required: false
  private _template = new DataTanzuMissionControlBackupScheduleSchedulesSpecTemplateList(this, "template", false);
  public get template() {
    return this._template;
  }
}

export class DataTanzuMissionControlBackupScheduleSchedulesSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlBackupScheduleSchedulesSpecOutputReference {
    return new DataTanzuMissionControlBackupScheduleSchedulesSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlBackupScheduleSchedules {
}

export function dataTanzuMissionControlBackupScheduleSchedulesToTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTanzuMissionControlBackupScheduleSchedulesToHclTerraform(struct?: DataTanzuMissionControlBackupScheduleSchedules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTanzuMissionControlBackupScheduleSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlBackupScheduleSchedules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlBackupScheduleSchedules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_scope - computed: true, optional: false, required: false
  public get backupScope() {
    return this.getStringAttribute('backup_scope');
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new DataTanzuMissionControlBackupScheduleSchedulesMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // scope - computed: true, optional: false, required: false
  private _scope = new DataTanzuMissionControlBackupScheduleSchedulesScopeList(this, "scope", false);
  public get scope() {
    return this._scope;
  }

  // selector - computed: true, optional: false, required: false
  private _selector = new DataTanzuMissionControlBackupScheduleSchedulesSelectorList(this, "selector", false);
  public get selector() {
    return this._selector;
  }

  // spec - computed: true, optional: false, required: false
  private _spec = new DataTanzuMissionControlBackupScheduleSchedulesSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
}

export class DataTanzuMissionControlBackupScheduleSchedulesList extends cdktf.ComplexList {

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
  public get(index: number): DataTanzuMissionControlBackupScheduleSchedulesOutputReference {
    return new DataTanzuMissionControlBackupScheduleSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlBackupScheduleScopeCluster {
  /**
  * Cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/backup_schedule#cluster_name DataTanzuMissionControlBackupSchedule#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Management cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/backup_schedule#management_cluster_name DataTanzuMissionControlBackupSchedule#management_cluster_name}
  */
  readonly managementClusterName?: string;
  /**
  * Cluster provisioner name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/backup_schedule#provisioner_name DataTanzuMissionControlBackupSchedule#provisioner_name}
  */
  readonly provisionerName?: string;
}

export function dataTanzuMissionControlBackupScheduleScopeClusterToTerraform(struct?: DataTanzuMissionControlBackupScheduleScopeClusterOutputReference | DataTanzuMissionControlBackupScheduleScopeCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    management_cluster_name: cdktf.stringToTerraform(struct!.managementClusterName),
    provisioner_name: cdktf.stringToTerraform(struct!.provisionerName),
  }
}


export function dataTanzuMissionControlBackupScheduleScopeClusterToHclTerraform(struct?: DataTanzuMissionControlBackupScheduleScopeClusterOutputReference | DataTanzuMissionControlBackupScheduleScopeCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.managementClusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provisioner_name: {
      value: cdktf.stringToHclTerraform(struct!.provisionerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlBackupScheduleScopeClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlBackupScheduleScopeCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._managementClusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementClusterName = this._managementClusterName;
    }
    if (this._provisionerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionerName = this._provisionerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlBackupScheduleScopeCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterName = undefined;
      this._managementClusterName = undefined;
      this._provisionerName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterName = value.clusterName;
      this._managementClusterName = value.managementClusterName;
      this._provisionerName = value.provisionerName;
    }
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // management_cluster_name - computed: false, optional: true, required: false
  private _managementClusterName?: string; 
  public get managementClusterName() {
    return this.getStringAttribute('management_cluster_name');
  }
  public set managementClusterName(value: string) {
    this._managementClusterName = value;
  }
  public resetManagementClusterName() {
    this._managementClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementClusterNameInput() {
    return this._managementClusterName;
  }

  // provisioner_name - computed: false, optional: true, required: false
  private _provisionerName?: string; 
  public get provisionerName() {
    return this.getStringAttribute('provisioner_name');
  }
  public set provisionerName(value: string) {
    this._provisionerName = value;
  }
  public resetProvisionerName() {
    this._provisionerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerNameInput() {
    return this._provisionerName;
  }
}
export interface DataTanzuMissionControlBackupScheduleScopeClusterGroup {
  /**
  * Cluster group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/backup_schedule#cluster_group_name DataTanzuMissionControlBackupSchedule#cluster_group_name}
  */
  readonly clusterGroupName: string;
}

export function dataTanzuMissionControlBackupScheduleScopeClusterGroupToTerraform(struct?: DataTanzuMissionControlBackupScheduleScopeClusterGroupOutputReference | DataTanzuMissionControlBackupScheduleScopeClusterGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_group_name: cdktf.stringToTerraform(struct!.clusterGroupName),
  }
}


export function dataTanzuMissionControlBackupScheduleScopeClusterGroupToHclTerraform(struct?: DataTanzuMissionControlBackupScheduleScopeClusterGroupOutputReference | DataTanzuMissionControlBackupScheduleScopeClusterGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_group_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlBackupScheduleScopeClusterGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlBackupScheduleScopeClusterGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterGroupName = this._clusterGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlBackupScheduleScopeClusterGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterGroupName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterGroupName = value.clusterGroupName;
    }
  }

  // cluster_group_name - computed: false, optional: false, required: true
  private _clusterGroupName?: string; 
  public get clusterGroupName() {
    return this.getStringAttribute('cluster_group_name');
  }
  public set clusterGroupName(value: string) {
    this._clusterGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterGroupNameInput() {
    return this._clusterGroupName;
  }
}
export interface DataTanzuMissionControlBackupScheduleScope {
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/backup_schedule#cluster DataTanzuMissionControlBackupSchedule#cluster}
  */
  readonly cluster?: DataTanzuMissionControlBackupScheduleScopeCluster;
  /**
  * cluster_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/backup_schedule#cluster_group DataTanzuMissionControlBackupSchedule#cluster_group}
  */
  readonly clusterGroup?: DataTanzuMissionControlBackupScheduleScopeClusterGroup;
}

export function dataTanzuMissionControlBackupScheduleScopeToTerraform(struct?: DataTanzuMissionControlBackupScheduleScopeOutputReference | DataTanzuMissionControlBackupScheduleScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: dataTanzuMissionControlBackupScheduleScopeClusterToTerraform(struct!.cluster),
    cluster_group: dataTanzuMissionControlBackupScheduleScopeClusterGroupToTerraform(struct!.clusterGroup),
  }
}


export function dataTanzuMissionControlBackupScheduleScopeToHclTerraform(struct?: DataTanzuMissionControlBackupScheduleScopeOutputReference | DataTanzuMissionControlBackupScheduleScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: dataTanzuMissionControlBackupScheduleScopeClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlBackupScheduleScopeClusterList",
    },
    cluster_group: {
      value: dataTanzuMissionControlBackupScheduleScopeClusterGroupToHclTerraform(struct!.clusterGroup),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlBackupScheduleScopeClusterGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlBackupScheduleScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlBackupScheduleScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._clusterGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterGroup = this._clusterGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlBackupScheduleScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cluster.internalValue = undefined;
      this._clusterGroup.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cluster.internalValue = value.cluster;
      this._clusterGroup.internalValue = value.clusterGroup;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new DataTanzuMissionControlBackupScheduleScopeClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: DataTanzuMissionControlBackupScheduleScopeCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // cluster_group - computed: false, optional: true, required: false
  private _clusterGroup = new DataTanzuMissionControlBackupScheduleScopeClusterGroupOutputReference(this, "cluster_group");
  public get clusterGroup() {
    return this._clusterGroup;
  }
  public putClusterGroup(value: DataTanzuMissionControlBackupScheduleScopeClusterGroup) {
    this._clusterGroup.internalValue = value;
  }
  public resetClusterGroup() {
    this._clusterGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterGroupInput() {
    return this._clusterGroup.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/backup_schedule tanzu-mission-control_backup_schedule}
*/
export class DataTanzuMissionControlBackupSchedule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tanzu-mission-control_backup_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTanzuMissionControlBackupSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTanzuMissionControlBackupSchedule to import
  * @param importFromId The id of the existing DataTanzuMissionControlBackupSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/backup_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTanzuMissionControlBackupSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tanzu-mission-control_backup_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/backup_schedule tanzu-mission-control_backup_schedule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTanzuMissionControlBackupScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: DataTanzuMissionControlBackupScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'tanzu-mission-control_backup_schedule',
      terraformGeneratorMetadata: {
        providerName: 'tanzu-mission-control',
        providerVersion: '1.4.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._includeTotalCount = config.includeTotalCount;
    this._name = config.name;
    this._query = config.query;
    this._sortBy = config.sortBy;
    this._scope.internalValue = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // include_total_count - computed: false, optional: true, required: false
  private _includeTotalCount?: boolean | cdktf.IResolvable; 
  public get includeTotalCount() {
    return this.getBooleanAttribute('include_total_count');
  }
  public set includeTotalCount(value: boolean | cdktf.IResolvable) {
    this._includeTotalCount = value;
  }
  public resetIncludeTotalCount() {
    this._includeTotalCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTotalCountInput() {
    return this._includeTotalCount;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // schedules - computed: true, optional: false, required: false
  private _schedules = new DataTanzuMissionControlBackupScheduleSchedulesList(this, "schedules", false);
  public get schedules() {
    return this._schedules;
  }

  // sort_by - computed: false, optional: true, required: false
  private _sortBy?: string; 
  public get sortBy() {
    return this.getStringAttribute('sort_by');
  }
  public set sortBy(value: string) {
    this._sortBy = value;
  }
  public resetSortBy() {
    this._sortBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getStringAttribute('total_count');
  }

  // scope - computed: false, optional: false, required: true
  private _scope = new DataTanzuMissionControlBackupScheduleScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: DataTanzuMissionControlBackupScheduleScope) {
    this._scope.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      include_total_count: cdktf.booleanToTerraform(this._includeTotalCount),
      name: cdktf.stringToTerraform(this._name),
      query: cdktf.stringToTerraform(this._query),
      sort_by: cdktf.stringToTerraform(this._sortBy),
      scope: dataTanzuMissionControlBackupScheduleScopeToTerraform(this._scope.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_total_count: {
        value: cdktf.booleanToHclTerraform(this._includeTotalCount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_by: {
        value: cdktf.stringToHclTerraform(this._sortBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: dataTanzuMissionControlBackupScheduleScopeToHclTerraform(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTanzuMissionControlBackupScheduleScopeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
