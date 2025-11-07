// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataintegrationWorkspaceApplicationTaskScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#application_key DataintegrationWorkspaceApplicationTaskSchedule#application_key}
  */
  readonly applicationKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#auth_mode DataintegrationWorkspaceApplicationTaskSchedule#auth_mode}
  */
  readonly authMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#config_provider_delegate DataintegrationWorkspaceApplicationTaskSchedule#config_provider_delegate}
  */
  readonly configProviderDelegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#description DataintegrationWorkspaceApplicationTaskSchedule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#end_time_millis DataintegrationWorkspaceApplicationTaskSchedule#end_time_millis}
  */
  readonly endTimeMillis?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#expected_duration DataintegrationWorkspaceApplicationTaskSchedule#expected_duration}
  */
  readonly expectedDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#expected_duration_unit DataintegrationWorkspaceApplicationTaskSchedule#expected_duration_unit}
  */
  readonly expectedDurationUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#id DataintegrationWorkspaceApplicationTaskSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#identifier DataintegrationWorkspaceApplicationTaskSchedule#identifier}
  */
  readonly identifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#is_backfill_enabled DataintegrationWorkspaceApplicationTaskSchedule#is_backfill_enabled}
  */
  readonly isBackfillEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#is_concurrent_allowed DataintegrationWorkspaceApplicationTaskSchedule#is_concurrent_allowed}
  */
  readonly isConcurrentAllowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#is_enabled DataintegrationWorkspaceApplicationTaskSchedule#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#key DataintegrationWorkspaceApplicationTaskSchedule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#model_version DataintegrationWorkspaceApplicationTaskSchedule#model_version}
  */
  readonly modelVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#name DataintegrationWorkspaceApplicationTaskSchedule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#next_run_time_millis DataintegrationWorkspaceApplicationTaskSchedule#next_run_time_millis}
  */
  readonly nextRunTimeMillis?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#number_of_retries DataintegrationWorkspaceApplicationTaskSchedule#number_of_retries}
  */
  readonly numberOfRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#object_status DataintegrationWorkspaceApplicationTaskSchedule#object_status}
  */
  readonly objectStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#object_version DataintegrationWorkspaceApplicationTaskSchedule#object_version}
  */
  readonly objectVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#retry_delay DataintegrationWorkspaceApplicationTaskSchedule#retry_delay}
  */
  readonly retryDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#retry_delay_unit DataintegrationWorkspaceApplicationTaskSchedule#retry_delay_unit}
  */
  readonly retryDelayUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#start_time_millis DataintegrationWorkspaceApplicationTaskSchedule#start_time_millis}
  */
  readonly startTimeMillis?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#workspace_id DataintegrationWorkspaceApplicationTaskSchedule#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * parent_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#parent_ref DataintegrationWorkspaceApplicationTaskSchedule#parent_ref}
  */
  readonly parentRef?: DataintegrationWorkspaceApplicationTaskScheduleParentRef;
  /**
  * registry_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#registry_metadata DataintegrationWorkspaceApplicationTaskSchedule#registry_metadata}
  */
  readonly registryMetadata?: DataintegrationWorkspaceApplicationTaskScheduleRegistryMetadata;
  /**
  * schedule_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#schedule_ref DataintegrationWorkspaceApplicationTaskSchedule#schedule_ref}
  */
  readonly scheduleRef?: DataintegrationWorkspaceApplicationTaskScheduleScheduleRef;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#timeouts DataintegrationWorkspaceApplicationTaskSchedule#timeouts}
  */
  readonly timeouts?: DataintegrationWorkspaceApplicationTaskScheduleTimeouts;
}
export interface DataintegrationWorkspaceApplicationTaskScheduleLastRunDetailsParentRef {
}

export function dataintegrationWorkspaceApplicationTaskScheduleLastRunDetailsParentRefToTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleLastRunDetailsParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataintegrationWorkspaceApplicationTaskScheduleLastRunDetailsParentRefToHclTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleLastRunDetailsParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataintegrationWorkspaceApplicationTaskScheduleLastRunDetailsParentRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataintegrationWorkspaceApplicationTaskScheduleLastRunDetailsParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceApplicationTaskScheduleLastRunDetailsParentRef | undefined) {
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

export class DataintegrationWorkspaceApplicationTaskScheduleLastRunDetailsParentRefList extends cdktf.ComplexList {

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
  public get(index: number): DataintegrationWorkspaceApplicationTaskScheduleLastRunDetailsParentRefOutputReference {
    return new DataintegrationWorkspaceApplicationTaskScheduleLastRunDetailsParentRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataintegrationWorkspaceApplicationTaskScheduleLastRunDetails {
}

export function dataintegrationWorkspaceApplicationTaskScheduleLastRunDetailsToTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleLastRunDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataintegrationWorkspaceApplicationTaskScheduleLastRunDetailsToHclTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleLastRunDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataintegrationWorkspaceApplicationTaskScheduleLastRunDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataintegrationWorkspaceApplicationTaskScheduleLastRunDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceApplicationTaskScheduleLastRunDetails | undefined) {
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
  private _parentRef = new DataintegrationWorkspaceApplicationTaskScheduleLastRunDetailsParentRefList(this, "parent_ref", false);
  public get parentRef() {
    return this._parentRef;
  }
}

export class DataintegrationWorkspaceApplicationTaskScheduleLastRunDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataintegrationWorkspaceApplicationTaskScheduleLastRunDetailsOutputReference {
    return new DataintegrationWorkspaceApplicationTaskScheduleLastRunDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataintegrationWorkspaceApplicationTaskScheduleMetadataAggregator {
}

export function dataintegrationWorkspaceApplicationTaskScheduleMetadataAggregatorToTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleMetadataAggregator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataintegrationWorkspaceApplicationTaskScheduleMetadataAggregatorToHclTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleMetadataAggregator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataintegrationWorkspaceApplicationTaskScheduleMetadataAggregatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataintegrationWorkspaceApplicationTaskScheduleMetadataAggregator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceApplicationTaskScheduleMetadataAggregator | undefined) {
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

export class DataintegrationWorkspaceApplicationTaskScheduleMetadataAggregatorList extends cdktf.ComplexList {

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
  public get(index: number): DataintegrationWorkspaceApplicationTaskScheduleMetadataAggregatorOutputReference {
    return new DataintegrationWorkspaceApplicationTaskScheduleMetadataAggregatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataintegrationWorkspaceApplicationTaskScheduleMetadataCountStatisticsObjectTypeCountListStruct {
}

export function dataintegrationWorkspaceApplicationTaskScheduleMetadataCountStatisticsObjectTypeCountListStructToTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleMetadataCountStatisticsObjectTypeCountListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataintegrationWorkspaceApplicationTaskScheduleMetadataCountStatisticsObjectTypeCountListStructToHclTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleMetadataCountStatisticsObjectTypeCountListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataintegrationWorkspaceApplicationTaskScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataintegrationWorkspaceApplicationTaskScheduleMetadataCountStatisticsObjectTypeCountListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceApplicationTaskScheduleMetadataCountStatisticsObjectTypeCountListStruct | undefined) {
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

export class DataintegrationWorkspaceApplicationTaskScheduleMetadataCountStatisticsObjectTypeCountListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataintegrationWorkspaceApplicationTaskScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference {
    return new DataintegrationWorkspaceApplicationTaskScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataintegrationWorkspaceApplicationTaskScheduleMetadataCountStatistics {
}

export function dataintegrationWorkspaceApplicationTaskScheduleMetadataCountStatisticsToTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleMetadataCountStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataintegrationWorkspaceApplicationTaskScheduleMetadataCountStatisticsToHclTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleMetadataCountStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataintegrationWorkspaceApplicationTaskScheduleMetadataCountStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataintegrationWorkspaceApplicationTaskScheduleMetadataCountStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceApplicationTaskScheduleMetadataCountStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_type_count_list - computed: true, optional: false, required: false
  private _objectTypeCountList = new DataintegrationWorkspaceApplicationTaskScheduleMetadataCountStatisticsObjectTypeCountListStructList(this, "object_type_count_list", false);
  public get objectTypeCountList() {
    return this._objectTypeCountList;
  }
}

export class DataintegrationWorkspaceApplicationTaskScheduleMetadataCountStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataintegrationWorkspaceApplicationTaskScheduleMetadataCountStatisticsOutputReference {
    return new DataintegrationWorkspaceApplicationTaskScheduleMetadataCountStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataintegrationWorkspaceApplicationTaskScheduleMetadata {
}

export function dataintegrationWorkspaceApplicationTaskScheduleMetadataToTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataintegrationWorkspaceApplicationTaskScheduleMetadataToHclTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataintegrationWorkspaceApplicationTaskScheduleMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataintegrationWorkspaceApplicationTaskScheduleMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceApplicationTaskScheduleMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregator - computed: true, optional: false, required: false
  private _aggregator = new DataintegrationWorkspaceApplicationTaskScheduleMetadataAggregatorList(this, "aggregator", false);
  public get aggregator() {
    return this._aggregator;
  }

  // aggregator_key - computed: true, optional: false, required: false
  public get aggregatorKey() {
    return this.getStringAttribute('aggregator_key');
  }

  // count_statistics - computed: true, optional: false, required: false
  private _countStatistics = new DataintegrationWorkspaceApplicationTaskScheduleMetadataCountStatisticsList(this, "count_statistics", false);
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

export class DataintegrationWorkspaceApplicationTaskScheduleMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataintegrationWorkspaceApplicationTaskScheduleMetadataOutputReference {
    return new DataintegrationWorkspaceApplicationTaskScheduleMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataintegrationWorkspaceApplicationTaskScheduleParentRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#parent DataintegrationWorkspaceApplicationTaskSchedule#parent}
  */
  readonly parent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#root_doc_id DataintegrationWorkspaceApplicationTaskSchedule#root_doc_id}
  */
  readonly rootDocId?: string;
}

export function dataintegrationWorkspaceApplicationTaskScheduleParentRefToTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleParentRefOutputReference | DataintegrationWorkspaceApplicationTaskScheduleParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parent: cdktf.stringToTerraform(struct!.parent),
    root_doc_id: cdktf.stringToTerraform(struct!.rootDocId),
  }
}


export function dataintegrationWorkspaceApplicationTaskScheduleParentRefToHclTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleParentRefOutputReference | DataintegrationWorkspaceApplicationTaskScheduleParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parent: {
      value: cdktf.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_doc_id: {
      value: cdktf.stringToHclTerraform(struct!.rootDocId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceApplicationTaskScheduleParentRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceApplicationTaskScheduleParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    if (this._rootDocId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDocId = this._rootDocId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceApplicationTaskScheduleParentRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parent = undefined;
      this._rootDocId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parent = value.parent;
      this._rootDocId = value.rootDocId;
    }
  }

  // parent - computed: true, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // root_doc_id - computed: true, optional: true, required: false
  private _rootDocId?: string; 
  public get rootDocId() {
    return this.getStringAttribute('root_doc_id');
  }
  public set rootDocId(value: string) {
    this._rootDocId = value;
  }
  public resetRootDocId() {
    this._rootDocId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDocIdInput() {
    return this._rootDocId;
  }
}
export interface DataintegrationWorkspaceApplicationTaskScheduleRegistryMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#aggregator_key DataintegrationWorkspaceApplicationTaskSchedule#aggregator_key}
  */
  readonly aggregatorKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#is_favorite DataintegrationWorkspaceApplicationTaskSchedule#is_favorite}
  */
  readonly isFavorite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#key DataintegrationWorkspaceApplicationTaskSchedule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#labels DataintegrationWorkspaceApplicationTaskSchedule#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#registry_version DataintegrationWorkspaceApplicationTaskSchedule#registry_version}
  */
  readonly registryVersion?: number;
}

export function dataintegrationWorkspaceApplicationTaskScheduleRegistryMetadataToTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleRegistryMetadataOutputReference | DataintegrationWorkspaceApplicationTaskScheduleRegistryMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregator_key: cdktf.stringToTerraform(struct!.aggregatorKey),
    is_favorite: cdktf.booleanToTerraform(struct!.isFavorite),
    key: cdktf.stringToTerraform(struct!.key),
    labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labels),
    registry_version: cdktf.numberToTerraform(struct!.registryVersion),
  }
}


export function dataintegrationWorkspaceApplicationTaskScheduleRegistryMetadataToHclTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleRegistryMetadataOutputReference | DataintegrationWorkspaceApplicationTaskScheduleRegistryMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregator_key: {
      value: cdktf.stringToHclTerraform(struct!.aggregatorKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_favorite: {
      value: cdktf.booleanToHclTerraform(struct!.isFavorite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    registry_version: {
      value: cdktf.numberToHclTerraform(struct!.registryVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceApplicationTaskScheduleRegistryMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceApplicationTaskScheduleRegistryMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregatorKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregatorKey = this._aggregatorKey;
    }
    if (this._isFavorite !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFavorite = this._isFavorite;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._registryVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryVersion = this._registryVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceApplicationTaskScheduleRegistryMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregatorKey = undefined;
      this._isFavorite = undefined;
      this._key = undefined;
      this._labels = undefined;
      this._registryVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregatorKey = value.aggregatorKey;
      this._isFavorite = value.isFavorite;
      this._key = value.key;
      this._labels = value.labels;
      this._registryVersion = value.registryVersion;
    }
  }

  // aggregator_key - computed: true, optional: true, required: false
  private _aggregatorKey?: string; 
  public get aggregatorKey() {
    return this.getStringAttribute('aggregator_key');
  }
  public set aggregatorKey(value: string) {
    this._aggregatorKey = value;
  }
  public resetAggregatorKey() {
    this._aggregatorKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatorKeyInput() {
    return this._aggregatorKey;
  }

  // is_favorite - computed: true, optional: true, required: false
  private _isFavorite?: boolean | cdktf.IResolvable; 
  public get isFavorite() {
    return this.getBooleanAttribute('is_favorite');
  }
  public set isFavorite(value: boolean | cdktf.IResolvable) {
    this._isFavorite = value;
  }
  public resetIsFavorite() {
    this._isFavorite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFavoriteInput() {
    return this._isFavorite;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // registry_version - computed: true, optional: true, required: false
  private _registryVersion?: number; 
  public get registryVersion() {
    return this.getNumberAttribute('registry_version');
  }
  public set registryVersion(value: number) {
    this._registryVersion = value;
  }
  public resetRegistryVersion() {
    this._registryVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryVersionInput() {
    return this._registryVersion;
  }
}
export interface DataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetailsTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#hour DataintegrationWorkspaceApplicationTaskSchedule#hour}
  */
  readonly hour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#minute DataintegrationWorkspaceApplicationTaskSchedule#minute}
  */
  readonly minute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#second DataintegrationWorkspaceApplicationTaskSchedule#second}
  */
  readonly second?: number;
}

export function dataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetailsTimeToTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetailsTimeOutputReference | DataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetailsTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hour: cdktf.numberToTerraform(struct!.hour),
    minute: cdktf.numberToTerraform(struct!.minute),
    second: cdktf.numberToTerraform(struct!.second),
  }
}


export function dataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetailsTimeToHclTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetailsTimeOutputReference | DataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetailsTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute: {
      value: cdktf.numberToHclTerraform(struct!.minute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    second: {
      value: cdktf.numberToHclTerraform(struct!.second),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetailsTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetailsTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._minute !== undefined) {
      hasAnyValues = true;
      internalValueResult.minute = this._minute;
    }
    if (this._second !== undefined) {
      hasAnyValues = true;
      internalValueResult.second = this._second;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetailsTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hour = undefined;
      this._minute = undefined;
      this._second = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hour = value.hour;
      this._minute = value.minute;
      this._second = value.second;
    }
  }

  // hour - computed: true, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // minute - computed: true, optional: true, required: false
  private _minute?: number; 
  public get minute() {
    return this.getNumberAttribute('minute');
  }
  public set minute(value: number) {
    this._minute = value;
  }
  public resetMinute() {
    this._minute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }

  // second - computed: true, optional: true, required: false
  private _second?: number; 
  public get second() {
    return this.getNumberAttribute('second');
  }
  public set second(value: number) {
    this._second = value;
  }
  public resetSecond() {
    this._second = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondInput() {
    return this._second;
  }
}
export interface DataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#custom_expression DataintegrationWorkspaceApplicationTaskSchedule#custom_expression}
  */
  readonly customExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#day_of_week DataintegrationWorkspaceApplicationTaskSchedule#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#days DataintegrationWorkspaceApplicationTaskSchedule#days}
  */
  readonly days?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#frequency DataintegrationWorkspaceApplicationTaskSchedule#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#interval DataintegrationWorkspaceApplicationTaskSchedule#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#model_type DataintegrationWorkspaceApplicationTaskSchedule#model_type}
  */
  readonly modelType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#week_of_month DataintegrationWorkspaceApplicationTaskSchedule#week_of_month}
  */
  readonly weekOfMonth?: string;
  /**
  * time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#time DataintegrationWorkspaceApplicationTaskSchedule#time}
  */
  readonly time?: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetailsTime;
}

export function dataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetailsToTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetailsOutputReference | DataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_expression: cdktf.stringToTerraform(struct!.customExpression),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    days: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.days),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    interval: cdktf.numberToTerraform(struct!.interval),
    model_type: cdktf.stringToTerraform(struct!.modelType),
    week_of_month: cdktf.stringToTerraform(struct!.weekOfMonth),
    time: dataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetailsTimeToTerraform(struct!.time),
  }
}


export function dataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetailsToHclTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetailsOutputReference | DataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_expression: {
      value: cdktf.stringToHclTerraform(struct!.customExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    days: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_type: {
      value: cdktf.stringToHclTerraform(struct!.modelType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    week_of_month: {
      value: cdktf.stringToHclTerraform(struct!.weekOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: dataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetailsTimeToHclTerraform(struct!.time),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetailsTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.customExpression = this._customExpression;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._modelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelType = this._modelType;
    }
    if (this._weekOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekOfMonth = this._weekOfMonth;
    }
    if (this._time?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customExpression = undefined;
      this._dayOfWeek = undefined;
      this._days = undefined;
      this._frequency = undefined;
      this._interval = undefined;
      this._modelType = undefined;
      this._weekOfMonth = undefined;
      this._time.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customExpression = value.customExpression;
      this._dayOfWeek = value.dayOfWeek;
      this._days = value.days;
      this._frequency = value.frequency;
      this._interval = value.interval;
      this._modelType = value.modelType;
      this._weekOfMonth = value.weekOfMonth;
      this._time.internalValue = value.time;
    }
  }

  // custom_expression - computed: true, optional: true, required: false
  private _customExpression?: string; 
  public get customExpression() {
    return this.getStringAttribute('custom_expression');
  }
  public set customExpression(value: string) {
    this._customExpression = value;
  }
  public resetCustomExpression() {
    this._customExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customExpressionInput() {
    return this._customExpression;
  }

  // day_of_week - computed: true, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // days - computed: true, optional: true, required: false
  private _days?: number[]; 
  public get days() {
    return this.getNumberListAttribute('days');
  }
  public set days(value: number[]) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // model_type - computed: false, optional: false, required: true
  private _modelType?: string; 
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
  public set modelType(value: string) {
    this._modelType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTypeInput() {
    return this._modelType;
  }

  // week_of_month - computed: true, optional: true, required: false
  private _weekOfMonth?: string; 
  public get weekOfMonth() {
    return this.getStringAttribute('week_of_month');
  }
  public set weekOfMonth(value: string) {
    this._weekOfMonth = value;
  }
  public resetWeekOfMonth() {
    this._weekOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekOfMonthInput() {
    return this._weekOfMonth;
  }

  // time - computed: false, optional: true, required: false
  private _time = new DataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetailsTimeOutputReference(this, "time");
  public get time() {
    return this._time;
  }
  public putTime(value: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetailsTime) {
    this._time.internalValue = value;
  }
  public resetTime() {
    this._time.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time.internalValue;
  }
}
export interface DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataAggregator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#description DataintegrationWorkspaceApplicationTaskSchedule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#identifier DataintegrationWorkspaceApplicationTaskSchedule#identifier}
  */
  readonly identifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#key DataintegrationWorkspaceApplicationTaskSchedule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#name DataintegrationWorkspaceApplicationTaskSchedule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#type DataintegrationWorkspaceApplicationTaskSchedule#type}
  */
  readonly type?: string;
}

export function dataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataAggregatorToTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataAggregatorOutputReference | DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataAggregator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    identifier: cdktf.stringToTerraform(struct!.identifier),
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataAggregatorToHclTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataAggregatorOutputReference | DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataAggregator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataAggregatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataAggregator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataAggregator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._identifier = undefined;
      this._key = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._identifier = value.identifier;
      this._key = value.key;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // description - computed: true, optional: true, required: false
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

  // identifier - computed: true, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatisticsObjectTypeCountListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#object_count DataintegrationWorkspaceApplicationTaskSchedule#object_count}
  */
  readonly objectCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#object_type DataintegrationWorkspaceApplicationTaskSchedule#object_type}
  */
  readonly objectType?: string;
}

export function dataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatisticsObjectTypeCountListStructToTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatisticsObjectTypeCountListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_count: cdktf.stringToTerraform(struct!.objectCount),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatisticsObjectTypeCountListStructToHclTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatisticsObjectTypeCountListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_count: {
      value: cdktf.stringToHclTerraform(struct!.objectCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatisticsObjectTypeCountListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectCount = this._objectCount;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatisticsObjectTypeCountListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectCount = undefined;
      this._objectType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectCount = value.objectCount;
      this._objectType = value.objectType;
    }
  }

  // object_count - computed: true, optional: true, required: false
  private _objectCount?: string; 
  public get objectCount() {
    return this.getStringAttribute('object_count');
  }
  public set objectCount(value: string) {
    this._objectCount = value;
  }
  public resetObjectCount() {
    this._objectCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectCountInput() {
    return this._objectCount;
  }

  // object_type - computed: true, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}

export class DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatisticsObjectTypeCountListStructList extends cdktf.ComplexList {
  public internalValue? : DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatisticsObjectTypeCountListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference {
    return new DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatistics {
  /**
  * object_type_count_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#object_type_count_list DataintegrationWorkspaceApplicationTaskSchedule#object_type_count_list}
  */
  readonly objectTypeCountList: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatisticsObjectTypeCountListStruct[] | cdktf.IResolvable;
}

export function dataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatisticsToTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatisticsOutputReference | DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_type_count_list: cdktf.listMapper(dataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatisticsObjectTypeCountListStructToTerraform, true)(struct!.objectTypeCountList),
  }
}


export function dataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatisticsToHclTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatisticsOutputReference | DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_type_count_list: {
      value: cdktf.listMapperHcl(dataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatisticsObjectTypeCountListStructToHclTerraform, true)(struct!.objectTypeCountList),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatisticsObjectTypeCountListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatisticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectTypeCountList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectTypeCountList = this._objectTypeCountList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectTypeCountList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectTypeCountList.internalValue = value.objectTypeCountList;
    }
  }

  // object_type_count_list - computed: false, optional: false, required: true
  private _objectTypeCountList = new DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatisticsObjectTypeCountListStructList(this, "object_type_count_list", false);
  public get objectTypeCountList() {
    return this._objectTypeCountList;
  }
  public putObjectTypeCountList(value: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatisticsObjectTypeCountListStruct[] | cdktf.IResolvable) {
    this._objectTypeCountList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeCountListInput() {
    return this._objectTypeCountList.internalValue;
  }
}
export interface DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#aggregator_key DataintegrationWorkspaceApplicationTaskSchedule#aggregator_key}
  */
  readonly aggregatorKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#created_by DataintegrationWorkspaceApplicationTaskSchedule#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#created_by_name DataintegrationWorkspaceApplicationTaskSchedule#created_by_name}
  */
  readonly createdByName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#identifier_path DataintegrationWorkspaceApplicationTaskSchedule#identifier_path}
  */
  readonly identifierPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#info_fields DataintegrationWorkspaceApplicationTaskSchedule#info_fields}
  */
  readonly infoFields?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#is_favorite DataintegrationWorkspaceApplicationTaskSchedule#is_favorite}
  */
  readonly isFavorite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#labels DataintegrationWorkspaceApplicationTaskSchedule#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#registry_version DataintegrationWorkspaceApplicationTaskSchedule#registry_version}
  */
  readonly registryVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#time_created DataintegrationWorkspaceApplicationTaskSchedule#time_created}
  */
  readonly timeCreated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#time_updated DataintegrationWorkspaceApplicationTaskSchedule#time_updated}
  */
  readonly timeUpdated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#updated_by DataintegrationWorkspaceApplicationTaskSchedule#updated_by}
  */
  readonly updatedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#updated_by_name DataintegrationWorkspaceApplicationTaskSchedule#updated_by_name}
  */
  readonly updatedByName?: string;
  /**
  * aggregator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#aggregator DataintegrationWorkspaceApplicationTaskSchedule#aggregator}
  */
  readonly aggregator?: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataAggregator;
  /**
  * count_statistics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#count_statistics DataintegrationWorkspaceApplicationTaskSchedule#count_statistics}
  */
  readonly countStatistics?: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatistics;
}

export function dataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataToTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataOutputReference | DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregator_key: cdktf.stringToTerraform(struct!.aggregatorKey),
    created_by: cdktf.stringToTerraform(struct!.createdBy),
    created_by_name: cdktf.stringToTerraform(struct!.createdByName),
    identifier_path: cdktf.stringToTerraform(struct!.identifierPath),
    info_fields: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.infoFields),
    is_favorite: cdktf.booleanToTerraform(struct!.isFavorite),
    labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labels),
    registry_version: cdktf.numberToTerraform(struct!.registryVersion),
    time_created: cdktf.stringToTerraform(struct!.timeCreated),
    time_updated: cdktf.stringToTerraform(struct!.timeUpdated),
    updated_by: cdktf.stringToTerraform(struct!.updatedBy),
    updated_by_name: cdktf.stringToTerraform(struct!.updatedByName),
    aggregator: dataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataAggregatorToTerraform(struct!.aggregator),
    count_statistics: dataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatisticsToTerraform(struct!.countStatistics),
  }
}


export function dataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataToHclTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataOutputReference | DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregator_key: {
      value: cdktf.stringToHclTerraform(struct!.aggregatorKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    created_by: {
      value: cdktf.stringToHclTerraform(struct!.createdBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    created_by_name: {
      value: cdktf.stringToHclTerraform(struct!.createdByName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier_path: {
      value: cdktf.stringToHclTerraform(struct!.identifierPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    info_fields: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.infoFields),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    is_favorite: {
      value: cdktf.booleanToHclTerraform(struct!.isFavorite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    registry_version: {
      value: cdktf.numberToHclTerraform(struct!.registryVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_created: {
      value: cdktf.stringToHclTerraform(struct!.timeCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_updated: {
      value: cdktf.stringToHclTerraform(struct!.timeUpdated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    updated_by: {
      value: cdktf.stringToHclTerraform(struct!.updatedBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    updated_by_name: {
      value: cdktf.stringToHclTerraform(struct!.updatedByName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aggregator: {
      value: dataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataAggregatorToHclTerraform(struct!.aggregator),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataAggregatorList",
    },
    count_statistics: {
      value: dataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatisticsToHclTerraform(struct!.countStatistics),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatisticsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregatorKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregatorKey = this._aggregatorKey;
    }
    if (this._createdBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBy = this._createdBy;
    }
    if (this._createdByName !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdByName = this._createdByName;
    }
    if (this._identifierPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifierPath = this._identifierPath;
    }
    if (this._infoFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoFields = this._infoFields;
    }
    if (this._isFavorite !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFavorite = this._isFavorite;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._registryVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryVersion = this._registryVersion;
    }
    if (this._timeCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeCreated = this._timeCreated;
    }
    if (this._timeUpdated !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUpdated = this._timeUpdated;
    }
    if (this._updatedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedBy = this._updatedBy;
    }
    if (this._updatedByName !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedByName = this._updatedByName;
    }
    if (this._aggregator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregator = this._aggregator?.internalValue;
    }
    if (this._countStatistics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.countStatistics = this._countStatistics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregatorKey = undefined;
      this._createdBy = undefined;
      this._createdByName = undefined;
      this._identifierPath = undefined;
      this._infoFields = undefined;
      this._isFavorite = undefined;
      this._labels = undefined;
      this._registryVersion = undefined;
      this._timeCreated = undefined;
      this._timeUpdated = undefined;
      this._updatedBy = undefined;
      this._updatedByName = undefined;
      this._aggregator.internalValue = undefined;
      this._countStatistics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregatorKey = value.aggregatorKey;
      this._createdBy = value.createdBy;
      this._createdByName = value.createdByName;
      this._identifierPath = value.identifierPath;
      this._infoFields = value.infoFields;
      this._isFavorite = value.isFavorite;
      this._labels = value.labels;
      this._registryVersion = value.registryVersion;
      this._timeCreated = value.timeCreated;
      this._timeUpdated = value.timeUpdated;
      this._updatedBy = value.updatedBy;
      this._updatedByName = value.updatedByName;
      this._aggregator.internalValue = value.aggregator;
      this._countStatistics.internalValue = value.countStatistics;
    }
  }

  // aggregator_key - computed: true, optional: true, required: false
  private _aggregatorKey?: string; 
  public get aggregatorKey() {
    return this.getStringAttribute('aggregator_key');
  }
  public set aggregatorKey(value: string) {
    this._aggregatorKey = value;
  }
  public resetAggregatorKey() {
    this._aggregatorKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatorKeyInput() {
    return this._aggregatorKey;
  }

  // created_by - computed: true, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // created_by_name - computed: true, optional: true, required: false
  private _createdByName?: string; 
  public get createdByName() {
    return this.getStringAttribute('created_by_name');
  }
  public set createdByName(value: string) {
    this._createdByName = value;
  }
  public resetCreatedByName() {
    this._createdByName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByNameInput() {
    return this._createdByName;
  }

  // identifier_path - computed: true, optional: true, required: false
  private _identifierPath?: string; 
  public get identifierPath() {
    return this.getStringAttribute('identifier_path');
  }
  public set identifierPath(value: string) {
    this._identifierPath = value;
  }
  public resetIdentifierPath() {
    this._identifierPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierPathInput() {
    return this._identifierPath;
  }

  // info_fields - computed: true, optional: true, required: false
  private _infoFields?: { [key: string]: string }; 
  public get infoFields() {
    return this.getStringMapAttribute('info_fields');
  }
  public set infoFields(value: { [key: string]: string }) {
    this._infoFields = value;
  }
  public resetInfoFields() {
    this._infoFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoFieldsInput() {
    return this._infoFields;
  }

  // is_favorite - computed: true, optional: true, required: false
  private _isFavorite?: boolean | cdktf.IResolvable; 
  public get isFavorite() {
    return this.getBooleanAttribute('is_favorite');
  }
  public set isFavorite(value: boolean | cdktf.IResolvable) {
    this._isFavorite = value;
  }
  public resetIsFavorite() {
    this._isFavorite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFavoriteInput() {
    return this._isFavorite;
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // registry_version - computed: true, optional: true, required: false
  private _registryVersion?: number; 
  public get registryVersion() {
    return this.getNumberAttribute('registry_version');
  }
  public set registryVersion(value: number) {
    this._registryVersion = value;
  }
  public resetRegistryVersion() {
    this._registryVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryVersionInput() {
    return this._registryVersion;
  }

  // time_created - computed: true, optional: true, required: false
  private _timeCreated?: string; 
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
  public set timeCreated(value: string) {
    this._timeCreated = value;
  }
  public resetTimeCreated() {
    this._timeCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeCreatedInput() {
    return this._timeCreated;
  }

  // time_updated - computed: true, optional: true, required: false
  private _timeUpdated?: string; 
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
  public set timeUpdated(value: string) {
    this._timeUpdated = value;
  }
  public resetTimeUpdated() {
    this._timeUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUpdatedInput() {
    return this._timeUpdated;
  }

  // updated_by - computed: true, optional: true, required: false
  private _updatedBy?: string; 
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
  public set updatedBy(value: string) {
    this._updatedBy = value;
  }
  public resetUpdatedBy() {
    this._updatedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedByInput() {
    return this._updatedBy;
  }

  // updated_by_name - computed: true, optional: true, required: false
  private _updatedByName?: string; 
  public get updatedByName() {
    return this.getStringAttribute('updated_by_name');
  }
  public set updatedByName(value: string) {
    this._updatedByName = value;
  }
  public resetUpdatedByName() {
    this._updatedByName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedByNameInput() {
    return this._updatedByName;
  }

  // aggregator - computed: false, optional: true, required: false
  private _aggregator = new DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataAggregatorOutputReference(this, "aggregator");
  public get aggregator() {
    return this._aggregator;
  }
  public putAggregator(value: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataAggregator) {
    this._aggregator.internalValue = value;
  }
  public resetAggregator() {
    this._aggregator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatorInput() {
    return this._aggregator.internalValue;
  }

  // count_statistics - computed: false, optional: true, required: false
  private _countStatistics = new DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatisticsOutputReference(this, "count_statistics");
  public get countStatistics() {
    return this._countStatistics;
  }
  public putCountStatistics(value: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataCountStatistics) {
    this._countStatistics.internalValue = value;
  }
  public resetCountStatistics() {
    this._countStatistics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countStatisticsInput() {
    return this._countStatistics.internalValue;
  }
}
export interface DataintegrationWorkspaceApplicationTaskScheduleScheduleRefParentRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#parent DataintegrationWorkspaceApplicationTaskSchedule#parent}
  */
  readonly parent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#root_doc_id DataintegrationWorkspaceApplicationTaskSchedule#root_doc_id}
  */
  readonly rootDocId?: string;
}

export function dataintegrationWorkspaceApplicationTaskScheduleScheduleRefParentRefToTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefParentRefOutputReference | DataintegrationWorkspaceApplicationTaskScheduleScheduleRefParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parent: cdktf.stringToTerraform(struct!.parent),
    root_doc_id: cdktf.stringToTerraform(struct!.rootDocId),
  }
}


export function dataintegrationWorkspaceApplicationTaskScheduleScheduleRefParentRefToHclTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefParentRefOutputReference | DataintegrationWorkspaceApplicationTaskScheduleScheduleRefParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parent: {
      value: cdktf.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_doc_id: {
      value: cdktf.stringToHclTerraform(struct!.rootDocId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceApplicationTaskScheduleScheduleRefParentRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceApplicationTaskScheduleScheduleRefParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    if (this._rootDocId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDocId = this._rootDocId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefParentRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parent = undefined;
      this._rootDocId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parent = value.parent;
      this._rootDocId = value.rootDocId;
    }
  }

  // parent - computed: true, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // root_doc_id - computed: true, optional: true, required: false
  private _rootDocId?: string; 
  public get rootDocId() {
    return this.getStringAttribute('root_doc_id');
  }
  public set rootDocId(value: string) {
    this._rootDocId = value;
  }
  public resetRootDocId() {
    this._rootDocId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDocIdInput() {
    return this._rootDocId;
  }
}
export interface DataintegrationWorkspaceApplicationTaskScheduleScheduleRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#description DataintegrationWorkspaceApplicationTaskSchedule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#identifier DataintegrationWorkspaceApplicationTaskSchedule#identifier}
  */
  readonly identifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#is_daylight_adjustment_enabled DataintegrationWorkspaceApplicationTaskSchedule#is_daylight_adjustment_enabled}
  */
  readonly isDaylightAdjustmentEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#key DataintegrationWorkspaceApplicationTaskSchedule#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#model_type DataintegrationWorkspaceApplicationTaskSchedule#model_type}
  */
  readonly modelType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#model_version DataintegrationWorkspaceApplicationTaskSchedule#model_version}
  */
  readonly modelVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#name DataintegrationWorkspaceApplicationTaskSchedule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#object_status DataintegrationWorkspaceApplicationTaskSchedule#object_status}
  */
  readonly objectStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#object_version DataintegrationWorkspaceApplicationTaskSchedule#object_version}
  */
  readonly objectVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#timezone DataintegrationWorkspaceApplicationTaskSchedule#timezone}
  */
  readonly timezone?: string;
  /**
  * frequency_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#frequency_details DataintegrationWorkspaceApplicationTaskSchedule#frequency_details}
  */
  readonly frequencyDetails?: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetails;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#metadata DataintegrationWorkspaceApplicationTaskSchedule#metadata}
  */
  readonly metadata?: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadata;
  /**
  * parent_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#parent_ref DataintegrationWorkspaceApplicationTaskSchedule#parent_ref}
  */
  readonly parentRef?: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefParentRef;
}

export function dataintegrationWorkspaceApplicationTaskScheduleScheduleRefToTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefOutputReference | DataintegrationWorkspaceApplicationTaskScheduleScheduleRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    identifier: cdktf.stringToTerraform(struct!.identifier),
    is_daylight_adjustment_enabled: cdktf.booleanToTerraform(struct!.isDaylightAdjustmentEnabled),
    key: cdktf.stringToTerraform(struct!.key),
    model_type: cdktf.stringToTerraform(struct!.modelType),
    model_version: cdktf.stringToTerraform(struct!.modelVersion),
    name: cdktf.stringToTerraform(struct!.name),
    object_status: cdktf.numberToTerraform(struct!.objectStatus),
    object_version: cdktf.numberToTerraform(struct!.objectVersion),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    frequency_details: dataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetailsToTerraform(struct!.frequencyDetails),
    metadata: dataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataToTerraform(struct!.metadata),
    parent_ref: dataintegrationWorkspaceApplicationTaskScheduleScheduleRefParentRefToTerraform(struct!.parentRef),
  }
}


export function dataintegrationWorkspaceApplicationTaskScheduleScheduleRefToHclTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefOutputReference | DataintegrationWorkspaceApplicationTaskScheduleScheduleRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_daylight_adjustment_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isDaylightAdjustmentEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_type: {
      value: cdktf.stringToHclTerraform(struct!.modelType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_version: {
      value: cdktf.stringToHclTerraform(struct!.modelVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_status: {
      value: cdktf.numberToHclTerraform(struct!.objectStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_version: {
      value: cdktf.numberToHclTerraform(struct!.objectVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frequency_details: {
      value: dataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetailsToHclTerraform(struct!.frequencyDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetailsList",
    },
    metadata: {
      value: dataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataList",
    },
    parent_ref: {
      value: dataintegrationWorkspaceApplicationTaskScheduleScheduleRefParentRefToHclTerraform(struct!.parentRef),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceApplicationTaskScheduleScheduleRefParentRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceApplicationTaskScheduleScheduleRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceApplicationTaskScheduleScheduleRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._isDaylightAdjustmentEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDaylightAdjustmentEnabled = this._isDaylightAdjustmentEnabled;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._modelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelType = this._modelType;
    }
    if (this._modelVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelVersion = this._modelVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStatus = this._objectStatus;
    }
    if (this._objectVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectVersion = this._objectVersion;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._frequencyDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencyDetails = this._frequencyDetails?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._parentRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentRef = this._parentRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceApplicationTaskScheduleScheduleRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._identifier = undefined;
      this._isDaylightAdjustmentEnabled = undefined;
      this._key = undefined;
      this._modelType = undefined;
      this._modelVersion = undefined;
      this._name = undefined;
      this._objectStatus = undefined;
      this._objectVersion = undefined;
      this._timezone = undefined;
      this._frequencyDetails.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._parentRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._identifier = value.identifier;
      this._isDaylightAdjustmentEnabled = value.isDaylightAdjustmentEnabled;
      this._key = value.key;
      this._modelType = value.modelType;
      this._modelVersion = value.modelVersion;
      this._name = value.name;
      this._objectStatus = value.objectStatus;
      this._objectVersion = value.objectVersion;
      this._timezone = value.timezone;
      this._frequencyDetails.internalValue = value.frequencyDetails;
      this._metadata.internalValue = value.metadata;
      this._parentRef.internalValue = value.parentRef;
    }
  }

  // description - computed: true, optional: true, required: false
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

  // identifier - computed: true, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // is_daylight_adjustment_enabled - computed: true, optional: true, required: false
  private _isDaylightAdjustmentEnabled?: boolean | cdktf.IResolvable; 
  public get isDaylightAdjustmentEnabled() {
    return this.getBooleanAttribute('is_daylight_adjustment_enabled');
  }
  public set isDaylightAdjustmentEnabled(value: boolean | cdktf.IResolvable) {
    this._isDaylightAdjustmentEnabled = value;
  }
  public resetIsDaylightAdjustmentEnabled() {
    this._isDaylightAdjustmentEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDaylightAdjustmentEnabledInput() {
    return this._isDaylightAdjustmentEnabled;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // model_type - computed: true, optional: true, required: false
  private _modelType?: string; 
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
  public set modelType(value: string) {
    this._modelType = value;
  }
  public resetModelType() {
    this._modelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTypeInput() {
    return this._modelType;
  }

  // model_version - computed: true, optional: true, required: false
  private _modelVersion?: string; 
  public get modelVersion() {
    return this.getStringAttribute('model_version');
  }
  public set modelVersion(value: string) {
    this._modelVersion = value;
  }
  public resetModelVersion() {
    this._modelVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelVersionInput() {
    return this._modelVersion;
  }

  // name - computed: true, optional: true, required: false
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

  // object_status - computed: true, optional: true, required: false
  private _objectStatus?: number; 
  public get objectStatus() {
    return this.getNumberAttribute('object_status');
  }
  public set objectStatus(value: number) {
    this._objectStatus = value;
  }
  public resetObjectStatus() {
    this._objectStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStatusInput() {
    return this._objectStatus;
  }

  // object_version - computed: true, optional: true, required: false
  private _objectVersion?: number; 
  public get objectVersion() {
    return this.getNumberAttribute('object_version');
  }
  public set objectVersion(value: number) {
    this._objectVersion = value;
  }
  public resetObjectVersion() {
    this._objectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectVersionInput() {
    return this._objectVersion;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // frequency_details - computed: false, optional: true, required: false
  private _frequencyDetails = new DataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetailsOutputReference(this, "frequency_details");
  public get frequencyDetails() {
    return this._frequencyDetails;
  }
  public putFrequencyDetails(value: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefFrequencyDetails) {
    this._frequencyDetails.internalValue = value;
  }
  public resetFrequencyDetails() {
    this._frequencyDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyDetailsInput() {
    return this._frequencyDetails.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // parent_ref - computed: false, optional: true, required: false
  private _parentRef = new DataintegrationWorkspaceApplicationTaskScheduleScheduleRefParentRefOutputReference(this, "parent_ref");
  public get parentRef() {
    return this._parentRef;
  }
  public putParentRef(value: DataintegrationWorkspaceApplicationTaskScheduleScheduleRefParentRef) {
    this._parentRef.internalValue = value;
  }
  public resetParentRef() {
    this._parentRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentRefInput() {
    return this._parentRef.internalValue;
  }
}
export interface DataintegrationWorkspaceApplicationTaskScheduleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#create DataintegrationWorkspaceApplicationTaskSchedule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#delete DataintegrationWorkspaceApplicationTaskSchedule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#update DataintegrationWorkspaceApplicationTaskSchedule#update}
  */
  readonly update?: string;
}

export function dataintegrationWorkspaceApplicationTaskScheduleTimeoutsToTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dataintegrationWorkspaceApplicationTaskScheduleTimeoutsToHclTerraform(struct?: DataintegrationWorkspaceApplicationTaskScheduleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceApplicationTaskScheduleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataintegrationWorkspaceApplicationTaskScheduleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceApplicationTaskScheduleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule oci_dataintegration_workspace_application_task_schedule}
*/
export class DataintegrationWorkspaceApplicationTaskSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dataintegration_workspace_application_task_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataintegrationWorkspaceApplicationTaskSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataintegrationWorkspaceApplicationTaskSchedule to import
  * @param importFromId The id of the existing DataintegrationWorkspaceApplicationTaskSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataintegrationWorkspaceApplicationTaskSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dataintegration_workspace_application_task_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/dataintegration_workspace_application_task_schedule oci_dataintegration_workspace_application_task_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataintegrationWorkspaceApplicationTaskScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: DataintegrationWorkspaceApplicationTaskScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dataintegration_workspace_application_task_schedule',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
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
    this._authMode = config.authMode;
    this._configProviderDelegate = config.configProviderDelegate;
    this._description = config.description;
    this._endTimeMillis = config.endTimeMillis;
    this._expectedDuration = config.expectedDuration;
    this._expectedDurationUnit = config.expectedDurationUnit;
    this._id = config.id;
    this._identifier = config.identifier;
    this._isBackfillEnabled = config.isBackfillEnabled;
    this._isConcurrentAllowed = config.isConcurrentAllowed;
    this._isEnabled = config.isEnabled;
    this._key = config.key;
    this._modelVersion = config.modelVersion;
    this._name = config.name;
    this._nextRunTimeMillis = config.nextRunTimeMillis;
    this._numberOfRetries = config.numberOfRetries;
    this._objectStatus = config.objectStatus;
    this._objectVersion = config.objectVersion;
    this._retryDelay = config.retryDelay;
    this._retryDelayUnit = config.retryDelayUnit;
    this._startTimeMillis = config.startTimeMillis;
    this._workspaceId = config.workspaceId;
    this._parentRef.internalValue = config.parentRef;
    this._registryMetadata.internalValue = config.registryMetadata;
    this._scheduleRef.internalValue = config.scheduleRef;
    this._timeouts.internalValue = config.timeouts;
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

  // auth_mode - computed: true, optional: true, required: false
  private _authMode?: string; 
  public get authMode() {
    return this.getStringAttribute('auth_mode');
  }
  public set authMode(value: string) {
    this._authMode = value;
  }
  public resetAuthMode() {
    this._authMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authModeInput() {
    return this._authMode;
  }

  // config_provider_delegate - computed: true, optional: true, required: false
  private _configProviderDelegate?: string; 
  public get configProviderDelegate() {
    return this.getStringAttribute('config_provider_delegate');
  }
  public set configProviderDelegate(value: string) {
    this._configProviderDelegate = value;
  }
  public resetConfigProviderDelegate() {
    this._configProviderDelegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configProviderDelegateInput() {
    return this._configProviderDelegate;
  }

  // description - computed: true, optional: true, required: false
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

  // end_time_millis - computed: true, optional: true, required: false
  private _endTimeMillis?: string; 
  public get endTimeMillis() {
    return this.getStringAttribute('end_time_millis');
  }
  public set endTimeMillis(value: string) {
    this._endTimeMillis = value;
  }
  public resetEndTimeMillis() {
    this._endTimeMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeMillisInput() {
    return this._endTimeMillis;
  }

  // expected_duration - computed: true, optional: true, required: false
  private _expectedDuration?: number; 
  public get expectedDuration() {
    return this.getNumberAttribute('expected_duration');
  }
  public set expectedDuration(value: number) {
    this._expectedDuration = value;
  }
  public resetExpectedDuration() {
    this._expectedDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedDurationInput() {
    return this._expectedDuration;
  }

  // expected_duration_unit - computed: true, optional: true, required: false
  private _expectedDurationUnit?: string; 
  public get expectedDurationUnit() {
    return this.getStringAttribute('expected_duration_unit');
  }
  public set expectedDurationUnit(value: string) {
    this._expectedDurationUnit = value;
  }
  public resetExpectedDurationUnit() {
    this._expectedDurationUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedDurationUnitInput() {
    return this._expectedDurationUnit;
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // is_backfill_enabled - computed: true, optional: true, required: false
  private _isBackfillEnabled?: boolean | cdktf.IResolvable; 
  public get isBackfillEnabled() {
    return this.getBooleanAttribute('is_backfill_enabled');
  }
  public set isBackfillEnabled(value: boolean | cdktf.IResolvable) {
    this._isBackfillEnabled = value;
  }
  public resetIsBackfillEnabled() {
    this._isBackfillEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBackfillEnabledInput() {
    return this._isBackfillEnabled;
  }

  // is_concurrent_allowed - computed: true, optional: true, required: false
  private _isConcurrentAllowed?: boolean | cdktf.IResolvable; 
  public get isConcurrentAllowed() {
    return this.getBooleanAttribute('is_concurrent_allowed');
  }
  public set isConcurrentAllowed(value: boolean | cdktf.IResolvable) {
    this._isConcurrentAllowed = value;
  }
  public resetIsConcurrentAllowed() {
    this._isConcurrentAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConcurrentAllowedInput() {
    return this._isConcurrentAllowed;
  }

  // is_enabled - computed: true, optional: true, required: false
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // last_run_details - computed: true, optional: false, required: false
  private _lastRunDetails = new DataintegrationWorkspaceApplicationTaskScheduleLastRunDetailsList(this, "last_run_details", false);
  public get lastRunDetails() {
    return this._lastRunDetails;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataintegrationWorkspaceApplicationTaskScheduleMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // model_type - computed: true, optional: false, required: false
  public get modelType() {
    return this.getStringAttribute('model_type');
  }

  // model_version - computed: true, optional: true, required: false
  private _modelVersion?: string; 
  public get modelVersion() {
    return this.getStringAttribute('model_version');
  }
  public set modelVersion(value: string) {
    this._modelVersion = value;
  }
  public resetModelVersion() {
    this._modelVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelVersionInput() {
    return this._modelVersion;
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

  // next_run_time_millis - computed: true, optional: true, required: false
  private _nextRunTimeMillis?: string; 
  public get nextRunTimeMillis() {
    return this.getStringAttribute('next_run_time_millis');
  }
  public set nextRunTimeMillis(value: string) {
    this._nextRunTimeMillis = value;
  }
  public resetNextRunTimeMillis() {
    this._nextRunTimeMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextRunTimeMillisInput() {
    return this._nextRunTimeMillis;
  }

  // number_of_retries - computed: true, optional: true, required: false
  private _numberOfRetries?: number; 
  public get numberOfRetries() {
    return this.getNumberAttribute('number_of_retries');
  }
  public set numberOfRetries(value: number) {
    this._numberOfRetries = value;
  }
  public resetNumberOfRetries() {
    this._numberOfRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfRetriesInput() {
    return this._numberOfRetries;
  }

  // object_status - computed: true, optional: true, required: false
  private _objectStatus?: number; 
  public get objectStatus() {
    return this.getNumberAttribute('object_status');
  }
  public set objectStatus(value: number) {
    this._objectStatus = value;
  }
  public resetObjectStatus() {
    this._objectStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStatusInput() {
    return this._objectStatus;
  }

  // object_version - computed: true, optional: true, required: false
  private _objectVersion?: number; 
  public get objectVersion() {
    return this.getNumberAttribute('object_version');
  }
  public set objectVersion(value: number) {
    this._objectVersion = value;
  }
  public resetObjectVersion() {
    this._objectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectVersionInput() {
    return this._objectVersion;
  }

  // retry_attempts - computed: true, optional: false, required: false
  public get retryAttempts() {
    return this.getNumberAttribute('retry_attempts');
  }

  // retry_delay - computed: true, optional: true, required: false
  private _retryDelay?: number; 
  public get retryDelay() {
    return this.getNumberAttribute('retry_delay');
  }
  public set retryDelay(value: number) {
    this._retryDelay = value;
  }
  public resetRetryDelay() {
    this._retryDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDelayInput() {
    return this._retryDelay;
  }

  // retry_delay_unit - computed: true, optional: true, required: false
  private _retryDelayUnit?: string; 
  public get retryDelayUnit() {
    return this.getStringAttribute('retry_delay_unit');
  }
  public set retryDelayUnit(value: string) {
    this._retryDelayUnit = value;
  }
  public resetRetryDelayUnit() {
    this._retryDelayUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDelayUnitInput() {
    return this._retryDelayUnit;
  }

  // start_time_millis - computed: true, optional: true, required: false
  private _startTimeMillis?: string; 
  public get startTimeMillis() {
    return this.getStringAttribute('start_time_millis');
  }
  public set startTimeMillis(value: string) {
    this._startTimeMillis = value;
  }
  public resetStartTimeMillis() {
    this._startTimeMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeMillisInput() {
    return this._startTimeMillis;
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

  // parent_ref - computed: false, optional: true, required: false
  private _parentRef = new DataintegrationWorkspaceApplicationTaskScheduleParentRefOutputReference(this, "parent_ref");
  public get parentRef() {
    return this._parentRef;
  }
  public putParentRef(value: DataintegrationWorkspaceApplicationTaskScheduleParentRef) {
    this._parentRef.internalValue = value;
  }
  public resetParentRef() {
    this._parentRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentRefInput() {
    return this._parentRef.internalValue;
  }

  // registry_metadata - computed: false, optional: true, required: false
  private _registryMetadata = new DataintegrationWorkspaceApplicationTaskScheduleRegistryMetadataOutputReference(this, "registry_metadata");
  public get registryMetadata() {
    return this._registryMetadata;
  }
  public putRegistryMetadata(value: DataintegrationWorkspaceApplicationTaskScheduleRegistryMetadata) {
    this._registryMetadata.internalValue = value;
  }
  public resetRegistryMetadata() {
    this._registryMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryMetadataInput() {
    return this._registryMetadata.internalValue;
  }

  // schedule_ref - computed: false, optional: true, required: false
  private _scheduleRef = new DataintegrationWorkspaceApplicationTaskScheduleScheduleRefOutputReference(this, "schedule_ref");
  public get scheduleRef() {
    return this._scheduleRef;
  }
  public putScheduleRef(value: DataintegrationWorkspaceApplicationTaskScheduleScheduleRef) {
    this._scheduleRef.internalValue = value;
  }
  public resetScheduleRef() {
    this._scheduleRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleRefInput() {
    return this._scheduleRef.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataintegrationWorkspaceApplicationTaskScheduleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataintegrationWorkspaceApplicationTaskScheduleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_key: cdktf.stringToTerraform(this._applicationKey),
      auth_mode: cdktf.stringToTerraform(this._authMode),
      config_provider_delegate: cdktf.stringToTerraform(this._configProviderDelegate),
      description: cdktf.stringToTerraform(this._description),
      end_time_millis: cdktf.stringToTerraform(this._endTimeMillis),
      expected_duration: cdktf.numberToTerraform(this._expectedDuration),
      expected_duration_unit: cdktf.stringToTerraform(this._expectedDurationUnit),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      is_backfill_enabled: cdktf.booleanToTerraform(this._isBackfillEnabled),
      is_concurrent_allowed: cdktf.booleanToTerraform(this._isConcurrentAllowed),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      key: cdktf.stringToTerraform(this._key),
      model_version: cdktf.stringToTerraform(this._modelVersion),
      name: cdktf.stringToTerraform(this._name),
      next_run_time_millis: cdktf.stringToTerraform(this._nextRunTimeMillis),
      number_of_retries: cdktf.numberToTerraform(this._numberOfRetries),
      object_status: cdktf.numberToTerraform(this._objectStatus),
      object_version: cdktf.numberToTerraform(this._objectVersion),
      retry_delay: cdktf.numberToTerraform(this._retryDelay),
      retry_delay_unit: cdktf.stringToTerraform(this._retryDelayUnit),
      start_time_millis: cdktf.stringToTerraform(this._startTimeMillis),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      parent_ref: dataintegrationWorkspaceApplicationTaskScheduleParentRefToTerraform(this._parentRef.internalValue),
      registry_metadata: dataintegrationWorkspaceApplicationTaskScheduleRegistryMetadataToTerraform(this._registryMetadata.internalValue),
      schedule_ref: dataintegrationWorkspaceApplicationTaskScheduleScheduleRefToTerraform(this._scheduleRef.internalValue),
      timeouts: dataintegrationWorkspaceApplicationTaskScheduleTimeoutsToTerraform(this._timeouts.internalValue),
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
      auth_mode: {
        value: cdktf.stringToHclTerraform(this._authMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_provider_delegate: {
        value: cdktf.stringToHclTerraform(this._configProviderDelegate),
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
      end_time_millis: {
        value: cdktf.stringToHclTerraform(this._endTimeMillis),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expected_duration: {
        value: cdktf.numberToHclTerraform(this._expectedDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      expected_duration_unit: {
        value: cdktf.stringToHclTerraform(this._expectedDurationUnit),
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
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_backfill_enabled: {
        value: cdktf.booleanToHclTerraform(this._isBackfillEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_concurrent_allowed: {
        value: cdktf.booleanToHclTerraform(this._isConcurrentAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_version: {
        value: cdktf.stringToHclTerraform(this._modelVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_run_time_millis: {
        value: cdktf.stringToHclTerraform(this._nextRunTimeMillis),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number_of_retries: {
        value: cdktf.numberToHclTerraform(this._numberOfRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      object_status: {
        value: cdktf.numberToHclTerraform(this._objectStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      object_version: {
        value: cdktf.numberToHclTerraform(this._objectVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_delay: {
        value: cdktf.numberToHclTerraform(this._retryDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_delay_unit: {
        value: cdktf.stringToHclTerraform(this._retryDelayUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time_millis: {
        value: cdktf.stringToHclTerraform(this._startTimeMillis),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_ref: {
        value: dataintegrationWorkspaceApplicationTaskScheduleParentRefToHclTerraform(this._parentRef.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataintegrationWorkspaceApplicationTaskScheduleParentRefList",
      },
      registry_metadata: {
        value: dataintegrationWorkspaceApplicationTaskScheduleRegistryMetadataToHclTerraform(this._registryMetadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataintegrationWorkspaceApplicationTaskScheduleRegistryMetadataList",
      },
      schedule_ref: {
        value: dataintegrationWorkspaceApplicationTaskScheduleScheduleRefToHclTerraform(this._scheduleRef.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataintegrationWorkspaceApplicationTaskScheduleScheduleRefList",
      },
      timeouts: {
        value: dataintegrationWorkspaceApplicationTaskScheduleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataintegrationWorkspaceApplicationTaskScheduleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
