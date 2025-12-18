// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataintegration_workspace_application_task_schedules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataintegration_workspace_application_task_schedules#application_key DataOciDataintegrationWorkspaceApplicationTaskSchedules#application_key}
  */
  readonly applicationKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataintegration_workspace_application_task_schedules#id DataOciDataintegrationWorkspaceApplicationTaskSchedules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataintegration_workspace_application_task_schedules#identifier DataOciDataintegrationWorkspaceApplicationTaskSchedules#identifier}
  */
  readonly identifier?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataintegration_workspace_application_task_schedules#is_enabled DataOciDataintegrationWorkspaceApplicationTaskSchedules#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataintegration_workspace_application_task_schedules#key DataOciDataintegrationWorkspaceApplicationTaskSchedules#key}
  */
  readonly key?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataintegration_workspace_application_task_schedules#name DataOciDataintegrationWorkspaceApplicationTaskSchedules#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataintegration_workspace_application_task_schedules#type DataOciDataintegrationWorkspaceApplicationTaskSchedules#type}
  */
  readonly type?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataintegration_workspace_application_task_schedules#workspace_id DataOciDataintegrationWorkspaceApplicationTaskSchedules#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataintegration_workspace_application_task_schedules#filter DataOciDataintegrationWorkspaceApplicationTaskSchedules#filter}
  */
  readonly filter?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter[] | cdktf.IResolvable;
}
export interface DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRef {
}

export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefToTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefToHclTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // root_doc_id - computed: true, optional: false, required: false
  public get rootDocId() {
    return this.getStringAttribute('root_doc_id');
  }
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference {
    return new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetails {
}

export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsToTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsToHclTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // last_run_time_millis - computed: true, optional: false, required: false
  public get lastRunTimeMillis() {
    return this.getStringAttribute('last_run_time_millis');
  }

  // model_type - computed: true, optional: false, required: false
  public get modelType() {
    return this.getStringAttribute('model_type');
  }

  // model_version - computed: true, optional: false, required: false
  public get modelVersion() {
    return this.getStringAttribute('model_version');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_status - computed: true, optional: false, required: false
  public get objectStatus() {
    return this.getNumberAttribute('object_status');
  }

  // object_version - computed: true, optional: false, required: false
  public get objectVersion() {
    return this.getNumberAttribute('object_version');
  }

  // parent_ref - computed: true, optional: false, required: false
  private _parentRef = new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList(this, "parent_ref", false);
  public get parentRef() {
    return this._parentRef;
  }
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference {
    return new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregator {
}

export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorToTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorToHclTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference {
    return new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct {
}

export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructToTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructToHclTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_count - computed: true, optional: false, required: false
  public get objectCount() {
    return this.getStringAttribute('object_count');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference {
    return new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatistics {
}

export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsToTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsToHclTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_type_count_list - computed: true, optional: false, required: false
  private _objectTypeCountList = new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList(this, "object_type_count_list", false);
  public get objectTypeCountList() {
    return this._objectTypeCountList;
  }
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference {
    return new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadata {
}

export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataToTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataToHclTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregator - computed: true, optional: false, required: false
  private _aggregator = new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList(this, "aggregator", false);
  public get aggregator() {
    return this._aggregator;
  }

  // aggregator_key - computed: true, optional: false, required: false
  public get aggregatorKey() {
    return this.getStringAttribute('aggregator_key');
  }

  // count_statistics - computed: true, optional: false, required: false
  private _countStatistics = new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList(this, "count_statistics", false);
  public get countStatistics() {
    return this._countStatistics;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_by_name - computed: true, optional: false, required: false
  public get createdByName() {
    return this.getStringAttribute('created_by_name');
  }

  // identifier_path - computed: true, optional: false, required: false
  public get identifierPath() {
    return this.getStringAttribute('identifier_path');
  }

  // info_fields - computed: true, optional: false, required: false
  private _infoFields = new cdktf.StringMap(this, "info_fields");
  public get infoFields() {
    return this._infoFields;
  }

  // is_favorite - computed: true, optional: false, required: false
  public get isFavorite() {
    return this.getBooleanAttribute('is_favorite');
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return this.getListAttribute('labels');
  }

  // registry_version - computed: true, optional: false, required: false
  public get registryVersion() {
    return this.getNumberAttribute('registry_version');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_by_name - computed: true, optional: false, required: false
  public get updatedByName() {
    return this.getStringAttribute('updated_by_name');
  }
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference {
    return new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRef {
}

export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefToTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefToHclTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // root_doc_id - computed: true, optional: false, required: false
  public get rootDocId() {
    return this.getStringAttribute('root_doc_id');
  }
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference {
    return new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadata {
}

export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataToTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataToHclTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregator_key - computed: true, optional: false, required: false
  public get aggregatorKey() {
    return this.getStringAttribute('aggregator_key');
  }

  // is_favorite - computed: true, optional: false, required: false
  public get isFavorite() {
    return this.getBooleanAttribute('is_favorite');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return this.getListAttribute('labels');
  }

  // registry_version - computed: true, optional: false, required: false
  public get registryVersion() {
    return this.getNumberAttribute('registry_version');
  }
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference {
    return new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTime {
}

export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeToTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeToHclTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hour - computed: true, optional: false, required: false
  public get hour() {
    return this.getNumberAttribute('hour');
  }

  // minute - computed: true, optional: false, required: false
  public get minute() {
    return this.getNumberAttribute('minute');
  }

  // second - computed: true, optional: false, required: false
  public get second() {
    return this.getNumberAttribute('second');
  }
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference {
    return new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetails {
}

export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsToTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsToHclTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_expression - computed: true, optional: false, required: false
  public get customExpression() {
    return this.getStringAttribute('custom_expression');
  }

  // day_of_week - computed: true, optional: false, required: false
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getNumberListAttribute('days');
  }

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getStringAttribute('frequency');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // model_type - computed: true, optional: false, required: false
  public get modelType() {
    return this.getStringAttribute('model_type');
  }

  // time - computed: true, optional: false, required: false
  private _time = new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList(this, "time", false);
  public get time() {
    return this._time;
  }

  // week_of_month - computed: true, optional: false, required: false
  public get weekOfMonth() {
    return this.getStringAttribute('week_of_month');
  }
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference {
    return new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregator {
}

export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorToTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorToHclTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference {
    return new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStruct {
}

export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructToTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructToHclTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_count - computed: true, optional: false, required: false
  public get objectCount() {
    return this.getStringAttribute('object_count');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference {
    return new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatistics {
}

export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsToTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsToHclTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_type_count_list - computed: true, optional: false, required: false
  private _objectTypeCountList = new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList(this, "object_type_count_list", false);
  public get objectTypeCountList() {
    return this._objectTypeCountList;
  }
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference {
    return new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadata {
}

export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataToTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataToHclTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregator - computed: true, optional: false, required: false
  private _aggregator = new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList(this, "aggregator", false);
  public get aggregator() {
    return this._aggregator;
  }

  // aggregator_key - computed: true, optional: false, required: false
  public get aggregatorKey() {
    return this.getStringAttribute('aggregator_key');
  }

  // count_statistics - computed: true, optional: false, required: false
  private _countStatistics = new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList(this, "count_statistics", false);
  public get countStatistics() {
    return this._countStatistics;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_by_name - computed: true, optional: false, required: false
  public get createdByName() {
    return this.getStringAttribute('created_by_name');
  }

  // identifier_path - computed: true, optional: false, required: false
  public get identifierPath() {
    return this.getStringAttribute('identifier_path');
  }

  // info_fields - computed: true, optional: false, required: false
  private _infoFields = new cdktf.StringMap(this, "info_fields");
  public get infoFields() {
    return this._infoFields;
  }

  // is_favorite - computed: true, optional: false, required: false
  public get isFavorite() {
    return this.getBooleanAttribute('is_favorite');
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return this.getListAttribute('labels');
  }

  // registry_version - computed: true, optional: false, required: false
  public get registryVersion() {
    return this.getNumberAttribute('registry_version');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_by_name - computed: true, optional: false, required: false
  public get updatedByName() {
    return this.getStringAttribute('updated_by_name');
  }
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference {
    return new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRef {
}

export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefToTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefToHclTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // root_doc_id - computed: true, optional: false, required: false
  public get rootDocId() {
    return this.getStringAttribute('root_doc_id');
  }
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference {
    return new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRef {
}

export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefToTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefToHclTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // frequency_details - computed: true, optional: false, required: false
  private _frequencyDetails = new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList(this, "frequency_details", false);
  public get frequencyDetails() {
    return this._frequencyDetails;
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // is_daylight_adjustment_enabled - computed: true, optional: false, required: false
  public get isDaylightAdjustmentEnabled() {
    return this.getBooleanAttribute('is_daylight_adjustment_enabled');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // model_type - computed: true, optional: false, required: false
  public get modelType() {
    return this.getStringAttribute('model_type');
  }

  // model_version - computed: true, optional: false, required: false
  public get modelVersion() {
    return this.getStringAttribute('model_version');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_status - computed: true, optional: false, required: false
  public get objectStatus() {
    return this.getNumberAttribute('object_status');
  }

  // object_version - computed: true, optional: false, required: false
  public get objectVersion() {
    return this.getNumberAttribute('object_version');
  }

  // parent_ref - computed: true, optional: false, required: false
  private _parentRef = new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList(this, "parent_ref", false);
  public get parentRef() {
    return this._parentRef;
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference {
    return new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItems {
}

export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsToTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsToHclTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_key - computed: true, optional: false, required: false
  public get applicationKey() {
    return this.getStringAttribute('application_key');
  }

  // auth_mode - computed: true, optional: false, required: false
  public get authMode() {
    return this.getStringAttribute('auth_mode');
  }

  // config_provider_delegate - computed: true, optional: false, required: false
  public get configProviderDelegate() {
    return this.getStringAttribute('config_provider_delegate');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // end_time_millis - computed: true, optional: false, required: false
  public get endTimeMillis() {
    return this.getStringAttribute('end_time_millis');
  }

  // expected_duration - computed: true, optional: false, required: false
  public get expectedDuration() {
    return this.getNumberAttribute('expected_duration');
  }

  // expected_duration_unit - computed: true, optional: false, required: false
  public get expectedDurationUnit() {
    return this.getStringAttribute('expected_duration_unit');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // is_backfill_enabled - computed: true, optional: false, required: false
  public get isBackfillEnabled() {
    return this.getBooleanAttribute('is_backfill_enabled');
  }

  // is_concurrent_allowed - computed: true, optional: false, required: false
  public get isConcurrentAllowed() {
    return this.getBooleanAttribute('is_concurrent_allowed');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // last_run_details - computed: true, optional: false, required: false
  private _lastRunDetails = new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList(this, "last_run_details", false);
  public get lastRunDetails() {
    return this._lastRunDetails;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // model_type - computed: true, optional: false, required: false
  public get modelType() {
    return this.getStringAttribute('model_type');
  }

  // model_version - computed: true, optional: false, required: false
  public get modelVersion() {
    return this.getStringAttribute('model_version');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // next_run_time_millis - computed: true, optional: false, required: false
  public get nextRunTimeMillis() {
    return this.getStringAttribute('next_run_time_millis');
  }

  // number_of_retries - computed: true, optional: false, required: false
  public get numberOfRetries() {
    return this.getNumberAttribute('number_of_retries');
  }

  // object_status - computed: true, optional: false, required: false
  public get objectStatus() {
    return this.getNumberAttribute('object_status');
  }

  // object_version - computed: true, optional: false, required: false
  public get objectVersion() {
    return this.getNumberAttribute('object_version');
  }

  // parent_ref - computed: true, optional: false, required: false
  private _parentRef = new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList(this, "parent_ref", false);
  public get parentRef() {
    return this._parentRef;
  }

  // registry_metadata - computed: true, optional: false, required: false
  private _registryMetadata = new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList(this, "registry_metadata", false);
  public get registryMetadata() {
    return this._registryMetadata;
  }

  // retry_attempts - computed: true, optional: false, required: false
  public get retryAttempts() {
    return this.getNumberAttribute('retry_attempts');
  }

  // retry_delay - computed: true, optional: false, required: false
  public get retryDelay() {
    return this.getNumberAttribute('retry_delay');
  }

  // retry_delay_unit - computed: true, optional: false, required: false
  public get retryDelayUnit() {
    return this.getStringAttribute('retry_delay_unit');
  }

  // schedule_ref - computed: true, optional: false, required: false
  private _scheduleRef = new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList(this, "schedule_ref", false);
  public get scheduleRef() {
    return this._scheduleRef;
  }

  // start_time_millis - computed: true, optional: false, required: false
  public get startTimeMillis() {
    return this.getStringAttribute('start_time_millis');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference {
    return new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollection {
}

export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionToTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionToHclTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference {
    return new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataintegration_workspace_application_task_schedules#name DataOciDataintegrationWorkspaceApplicationTaskSchedules#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataintegration_workspace_application_task_schedules#regex DataOciDataintegrationWorkspaceApplicationTaskSchedules#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataintegration_workspace_application_task_schedules#values DataOciDataintegrationWorkspaceApplicationTaskSchedules#values}
  */
  readonly values: string[];
}

export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterToTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterToHclTerraform(struct?: DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference {
    return new DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataintegration_workspace_application_task_schedules oci_dataintegration_workspace_application_task_schedules}
*/
export class DataOciDataintegrationWorkspaceApplicationTaskSchedules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dataintegration_workspace_application_task_schedules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataintegrationWorkspaceApplicationTaskSchedules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataintegrationWorkspaceApplicationTaskSchedules to import
  * @param importFromId The id of the existing DataOciDataintegrationWorkspaceApplicationTaskSchedules that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataintegration_workspace_application_task_schedules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataintegrationWorkspaceApplicationTaskSchedules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dataintegration_workspace_application_task_schedules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dataintegration_workspace_application_task_schedules oci_dataintegration_workspace_application_task_schedules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dataintegration_workspace_application_task_schedules',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationKey = config.applicationKey;
    this._id = config.id;
    this._identifier = config.identifier;
    this._isEnabled = config.isEnabled;
    this._key = config.key;
    this._name = config.name;
    this._type = config.type;
    this._workspaceId = config.workspaceId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_key - computed: false, optional: false, required: true
  private _applicationKey?: string; 
  public get applicationKey() {
    return this.getStringAttribute('application_key');
  }
  public set applicationKey(value: string) {
    this._applicationKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationKeyInput() {
    return this._applicationKey;
  }

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

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string[]; 
  public get identifier() {
    return this.getListAttribute('identifier');
  }
  public set identifier(value: string[]) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string[]; 
  public get key() {
    return this.getListAttribute('key');
  }
  public set key(value: string[]) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // task_schedule_summary_collection - computed: true, optional: false, required: false
  private _taskScheduleSummaryCollection = new DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList(this, "task_schedule_summary_collection", false);
  public get taskScheduleSummaryCollection() {
    return this._taskScheduleSummaryCollection;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string[]; 
  public get type() {
    return this.getListAttribute('type');
  }
  public set type(value: string[]) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter[] | cdktf.IResolvable) {
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
      application_key: cdktf.stringToTerraform(this._applicationKey),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.listMapper(cdktf.stringToTerraform, false)(this._identifier),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      key: cdktf.listMapper(cdktf.stringToTerraform, false)(this._key),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._type),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      filter: cdktf.listMapper(dataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_key: {
        value: cdktf.stringToHclTerraform(this._applicationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._identifier),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      is_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._key),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._type),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
