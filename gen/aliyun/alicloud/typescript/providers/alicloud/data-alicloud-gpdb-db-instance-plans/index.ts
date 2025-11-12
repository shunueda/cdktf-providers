// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/gpdb_db_instance_plans
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudGpdbDbInstancePlansConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/gpdb_db_instance_plans#db_instance_id DataAlicloudGpdbDbInstancePlans#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/gpdb_db_instance_plans#id DataAlicloudGpdbDbInstancePlans#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/gpdb_db_instance_plans#ids DataAlicloudGpdbDbInstancePlans#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/gpdb_db_instance_plans#name_regex DataAlicloudGpdbDbInstancePlans#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/gpdb_db_instance_plans#output_file DataAlicloudGpdbDbInstancePlans#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/gpdb_db_instance_plans#plan_schedule_type DataAlicloudGpdbDbInstancePlans#plan_schedule_type}
  */
  readonly planScheduleType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/gpdb_db_instance_plans#plan_type DataAlicloudGpdbDbInstancePlans#plan_type}
  */
  readonly planType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/gpdb_db_instance_plans#status DataAlicloudGpdbDbInstancePlans#status}
  */
  readonly status?: string;
}
export interface DataAlicloudGpdbDbInstancePlansPlansPlanConfigPause {
}

export function dataAlicloudGpdbDbInstancePlansPlansPlanConfigPauseToTerraform(struct?: DataAlicloudGpdbDbInstancePlansPlansPlanConfigPause): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudGpdbDbInstancePlansPlansPlanConfigPauseToHclTerraform(struct?: DataAlicloudGpdbDbInstancePlansPlansPlanConfigPause): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudGpdbDbInstancePlansPlansPlanConfigPauseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudGpdbDbInstancePlansPlansPlanConfigPause | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudGpdbDbInstancePlansPlansPlanConfigPause | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execute_time - computed: true, optional: false, required: false
  public get executeTime() {
    return this.getStringAttribute('execute_time');
  }

  // plan_cron_time - computed: true, optional: false, required: false
  public get planCronTime() {
    return this.getStringAttribute('plan_cron_time');
  }

  // plan_task_status - computed: true, optional: false, required: false
  public get planTaskStatus() {
    return this.getStringAttribute('plan_task_status');
  }
}

export class DataAlicloudGpdbDbInstancePlansPlansPlanConfigPauseList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudGpdbDbInstancePlansPlansPlanConfigPauseOutputReference {
    return new DataAlicloudGpdbDbInstancePlansPlansPlanConfigPauseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudGpdbDbInstancePlansPlansPlanConfigResume {
}

export function dataAlicloudGpdbDbInstancePlansPlansPlanConfigResumeToTerraform(struct?: DataAlicloudGpdbDbInstancePlansPlansPlanConfigResume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudGpdbDbInstancePlansPlansPlanConfigResumeToHclTerraform(struct?: DataAlicloudGpdbDbInstancePlansPlansPlanConfigResume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudGpdbDbInstancePlansPlansPlanConfigResumeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudGpdbDbInstancePlansPlansPlanConfigResume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudGpdbDbInstancePlansPlansPlanConfigResume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execute_time - computed: true, optional: false, required: false
  public get executeTime() {
    return this.getStringAttribute('execute_time');
  }

  // plan_cron_time - computed: true, optional: false, required: false
  public get planCronTime() {
    return this.getStringAttribute('plan_cron_time');
  }

  // plan_task_status - computed: true, optional: false, required: false
  public get planTaskStatus() {
    return this.getStringAttribute('plan_task_status');
  }
}

export class DataAlicloudGpdbDbInstancePlansPlansPlanConfigResumeList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudGpdbDbInstancePlansPlansPlanConfigResumeOutputReference {
    return new DataAlicloudGpdbDbInstancePlansPlansPlanConfigResumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudGpdbDbInstancePlansPlansPlanConfigScaleIn {
}

export function dataAlicloudGpdbDbInstancePlansPlansPlanConfigScaleInToTerraform(struct?: DataAlicloudGpdbDbInstancePlansPlansPlanConfigScaleIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudGpdbDbInstancePlansPlansPlanConfigScaleInToHclTerraform(struct?: DataAlicloudGpdbDbInstancePlansPlansPlanConfigScaleIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudGpdbDbInstancePlansPlansPlanConfigScaleInOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudGpdbDbInstancePlansPlansPlanConfigScaleIn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudGpdbDbInstancePlansPlansPlanConfigScaleIn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execute_time - computed: true, optional: false, required: false
  public get executeTime() {
    return this.getStringAttribute('execute_time');
  }

  // plan_cron_time - computed: true, optional: false, required: false
  public get planCronTime() {
    return this.getStringAttribute('plan_cron_time');
  }

  // plan_task_status - computed: true, optional: false, required: false
  public get planTaskStatus() {
    return this.getStringAttribute('plan_task_status');
  }

  // segment_node_num - computed: true, optional: false, required: false
  public get segmentNodeNum() {
    return this.getStringAttribute('segment_node_num');
  }
}

export class DataAlicloudGpdbDbInstancePlansPlansPlanConfigScaleInList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudGpdbDbInstancePlansPlansPlanConfigScaleInOutputReference {
    return new DataAlicloudGpdbDbInstancePlansPlansPlanConfigScaleInOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudGpdbDbInstancePlansPlansPlanConfigScaleOut {
}

export function dataAlicloudGpdbDbInstancePlansPlansPlanConfigScaleOutToTerraform(struct?: DataAlicloudGpdbDbInstancePlansPlansPlanConfigScaleOut): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudGpdbDbInstancePlansPlansPlanConfigScaleOutToHclTerraform(struct?: DataAlicloudGpdbDbInstancePlansPlansPlanConfigScaleOut): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudGpdbDbInstancePlansPlansPlanConfigScaleOutOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudGpdbDbInstancePlansPlansPlanConfigScaleOut | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudGpdbDbInstancePlansPlansPlanConfigScaleOut | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execute_time - computed: true, optional: false, required: false
  public get executeTime() {
    return this.getStringAttribute('execute_time');
  }

  // plan_cron_time - computed: true, optional: false, required: false
  public get planCronTime() {
    return this.getStringAttribute('plan_cron_time');
  }

  // plan_task_status - computed: true, optional: false, required: false
  public get planTaskStatus() {
    return this.getStringAttribute('plan_task_status');
  }

  // segment_node_num - computed: true, optional: false, required: false
  public get segmentNodeNum() {
    return this.getStringAttribute('segment_node_num');
  }
}

export class DataAlicloudGpdbDbInstancePlansPlansPlanConfigScaleOutList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudGpdbDbInstancePlansPlansPlanConfigScaleOutOutputReference {
    return new DataAlicloudGpdbDbInstancePlansPlansPlanConfigScaleOutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudGpdbDbInstancePlansPlansPlanConfig {
}

export function dataAlicloudGpdbDbInstancePlansPlansPlanConfigToTerraform(struct?: DataAlicloudGpdbDbInstancePlansPlansPlanConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudGpdbDbInstancePlansPlansPlanConfigToHclTerraform(struct?: DataAlicloudGpdbDbInstancePlansPlansPlanConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudGpdbDbInstancePlansPlansPlanConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudGpdbDbInstancePlansPlansPlanConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudGpdbDbInstancePlansPlansPlanConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pause - computed: true, optional: false, required: false
  private _pause = new DataAlicloudGpdbDbInstancePlansPlansPlanConfigPauseList(this, "pause", false);
  public get pause() {
    return this._pause;
  }

  // resume - computed: true, optional: false, required: false
  private _resume = new DataAlicloudGpdbDbInstancePlansPlansPlanConfigResumeList(this, "resume", false);
  public get resume() {
    return this._resume;
  }

  // scale_in - computed: true, optional: false, required: false
  private _scaleIn = new DataAlicloudGpdbDbInstancePlansPlansPlanConfigScaleInList(this, "scale_in", false);
  public get scaleIn() {
    return this._scaleIn;
  }

  // scale_out - computed: true, optional: false, required: false
  private _scaleOut = new DataAlicloudGpdbDbInstancePlansPlansPlanConfigScaleOutList(this, "scale_out", false);
  public get scaleOut() {
    return this._scaleOut;
  }
}

export class DataAlicloudGpdbDbInstancePlansPlansPlanConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudGpdbDbInstancePlansPlansPlanConfigOutputReference {
    return new DataAlicloudGpdbDbInstancePlansPlansPlanConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudGpdbDbInstancePlansPlans {
}

export function dataAlicloudGpdbDbInstancePlansPlansToTerraform(struct?: DataAlicloudGpdbDbInstancePlansPlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudGpdbDbInstancePlansPlansToHclTerraform(struct?: DataAlicloudGpdbDbInstancePlansPlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudGpdbDbInstancePlansPlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudGpdbDbInstancePlansPlans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudGpdbDbInstancePlansPlans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_instance_plan_name - computed: true, optional: false, required: false
  public get dbInstancePlanName() {
    return this.getStringAttribute('db_instance_plan_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // plan_config - computed: true, optional: false, required: false
  private _planConfig = new DataAlicloudGpdbDbInstancePlansPlansPlanConfigList(this, "plan_config", false);
  public get planConfig() {
    return this._planConfig;
  }

  // plan_desc - computed: true, optional: false, required: false
  public get planDesc() {
    return this.getStringAttribute('plan_desc');
  }

  // plan_end_date - computed: true, optional: false, required: false
  public get planEndDate() {
    return this.getStringAttribute('plan_end_date');
  }

  // plan_id - computed: true, optional: false, required: false
  public get planId() {
    return this.getStringAttribute('plan_id');
  }

  // plan_schedule_type - computed: true, optional: false, required: false
  public get planScheduleType() {
    return this.getStringAttribute('plan_schedule_type');
  }

  // plan_start_date - computed: true, optional: false, required: false
  public get planStartDate() {
    return this.getStringAttribute('plan_start_date');
  }

  // plan_type - computed: true, optional: false, required: false
  public get planType() {
    return this.getStringAttribute('plan_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAlicloudGpdbDbInstancePlansPlansList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudGpdbDbInstancePlansPlansOutputReference {
    return new DataAlicloudGpdbDbInstancePlansPlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/gpdb_db_instance_plans alicloud_gpdb_db_instance_plans}
*/
export class DataAlicloudGpdbDbInstancePlans extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_gpdb_db_instance_plans";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudGpdbDbInstancePlans resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudGpdbDbInstancePlans to import
  * @param importFromId The id of the existing DataAlicloudGpdbDbInstancePlans that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/gpdb_db_instance_plans#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudGpdbDbInstancePlans to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_gpdb_db_instance_plans", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/gpdb_db_instance_plans alicloud_gpdb_db_instance_plans} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudGpdbDbInstancePlansConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudGpdbDbInstancePlansConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_gpdb_db_instance_plans',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dbInstanceId = config.dbInstanceId;
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._planScheduleType = config.planScheduleType;
    this._planType = config.planType;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_instance_id - computed: false, optional: false, required: true
  private _dbInstanceId?: string; 
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }
  public set dbInstanceId(value: string) {
    this._dbInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdInput() {
    return this._dbInstanceId;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // plan_schedule_type - computed: false, optional: true, required: false
  private _planScheduleType?: string; 
  public get planScheduleType() {
    return this.getStringAttribute('plan_schedule_type');
  }
  public set planScheduleType(value: string) {
    this._planScheduleType = value;
  }
  public resetPlanScheduleType() {
    this._planScheduleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planScheduleTypeInput() {
    return this._planScheduleType;
  }

  // plan_type - computed: false, optional: true, required: false
  private _planType?: string; 
  public get planType() {
    return this.getStringAttribute('plan_type');
  }
  public set planType(value: string) {
    this._planType = value;
  }
  public resetPlanType() {
    this._planType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planTypeInput() {
    return this._planType;
  }

  // plans - computed: true, optional: false, required: false
  private _plans = new DataAlicloudGpdbDbInstancePlansPlansList(this, "plans", false);
  public get plans() {
    return this._plans;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      plan_schedule_type: cdktf.stringToTerraform(this._planScheduleType),
      plan_type: cdktf.stringToTerraform(this._planType),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_instance_id: {
        value: cdktf.stringToHclTerraform(this._dbInstanceId),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan_schedule_type: {
        value: cdktf.stringToHclTerraform(this._planScheduleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan_type: {
        value: cdktf.stringToHclTerraform(this._planType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
