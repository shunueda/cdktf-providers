import * as cdktf from 'cdktf';
import { DataTencentcloudMpsSchedulesScheduleInfoSetTriggerAwsS3FileUploadTriggerAwsSqsList,
DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesList,
DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageList,
DataTencentcloudMpsSchedulesScheduleInfoSetTaskNotifyConfigList } from './structs0'
export interface DataTencentcloudMpsSchedulesScheduleInfoSetTriggerAwsS3FileUploadTrigger {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetTriggerAwsS3FileUploadTriggerToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetTriggerAwsS3FileUploadTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetTriggerAwsS3FileUploadTriggerToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetTriggerAwsS3FileUploadTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetTriggerAwsS3FileUploadTriggerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetTriggerAwsS3FileUploadTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetTriggerAwsS3FileUploadTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_sqs - computed: true, optional: false, required: false
  private _awsSqs = new DataTencentcloudMpsSchedulesScheduleInfoSetTriggerAwsS3FileUploadTriggerAwsSqsList(this, "aws_sqs", false);
  public get awsSqs() {
    return this._awsSqs;
  }

  // dir - computed: true, optional: false, required: false
  public get dir() {
    return this.getStringAttribute('dir');
  }

  // formats - computed: true, optional: false, required: false
  public get formats() {
    return cdktf.Fn.tolist(this.getListAttribute('formats'));
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_region - computed: true, optional: false, required: false
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }

  // s3_secret_id - computed: true, optional: false, required: false
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }

  // s3_secret_key - computed: true, optional: false, required: false
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetTriggerAwsS3FileUploadTriggerList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetTriggerAwsS3FileUploadTriggerOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetTriggerAwsS3FileUploadTriggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetTriggerCosFileUploadTrigger {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetTriggerCosFileUploadTriggerToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetTriggerCosFileUploadTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetTriggerCosFileUploadTriggerToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetTriggerCosFileUploadTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetTriggerCosFileUploadTriggerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetTriggerCosFileUploadTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetTriggerCosFileUploadTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // dir - computed: true, optional: false, required: false
  public get dir() {
    return this.getStringAttribute('dir');
  }

  // formats - computed: true, optional: false, required: false
  public get formats() {
    return cdktf.Fn.tolist(this.getListAttribute('formats'));
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetTriggerCosFileUploadTriggerList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetTriggerCosFileUploadTriggerOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetTriggerCosFileUploadTriggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSetTrigger {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetTriggerToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetTriggerToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSetTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetTriggerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSetTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSetTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_s3_file_upload_trigger - computed: true, optional: false, required: false
  private _awsS3FileUploadTrigger = new DataTencentcloudMpsSchedulesScheduleInfoSetTriggerAwsS3FileUploadTriggerList(this, "aws_s3_file_upload_trigger", false);
  public get awsS3FileUploadTrigger() {
    return this._awsS3FileUploadTrigger;
  }

  // cos_file_upload_trigger - computed: true, optional: false, required: false
  private _cosFileUploadTrigger = new DataTencentcloudMpsSchedulesScheduleInfoSetTriggerCosFileUploadTriggerList(this, "cos_file_upload_trigger", false);
  public get cosFileUploadTrigger() {
    return this._cosFileUploadTrigger;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetTriggerList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetTriggerOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetTriggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsSchedulesScheduleInfoSet {
}

export function dataTencentcloudMpsSchedulesScheduleInfoSetToTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsSchedulesScheduleInfoSetToHclTerraform(struct?: DataTencentcloudMpsSchedulesScheduleInfoSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMpsSchedulesScheduleInfoSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsSchedulesScheduleInfoSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activities - computed: true, optional: false, required: false
  private _activities = new DataTencentcloudMpsSchedulesScheduleInfoSetActivitiesList(this, "activities", false);
  public get activities() {
    return this._activities;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // output_dir - computed: true, optional: false, required: false
  public get outputDir() {
    return this.getStringAttribute('output_dir');
  }

  // output_storage - computed: true, optional: false, required: false
  private _outputStorage = new DataTencentcloudMpsSchedulesScheduleInfoSetOutputStorageList(this, "output_storage", false);
  public get outputStorage() {
    return this._outputStorage;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // schedule_id - computed: true, optional: false, required: false
  public get scheduleId() {
    return this.getNumberAttribute('schedule_id');
  }

  // schedule_name - computed: true, optional: false, required: false
  public get scheduleName() {
    return this.getStringAttribute('schedule_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // task_notify_config - computed: true, optional: false, required: false
  private _taskNotifyConfig = new DataTencentcloudMpsSchedulesScheduleInfoSetTaskNotifyConfigList(this, "task_notify_config", false);
  public get taskNotifyConfig() {
    return this._taskNotifyConfig;
  }

  // trigger - computed: true, optional: false, required: false
  private _trigger = new DataTencentcloudMpsSchedulesScheduleInfoSetTriggerList(this, "trigger", false);
  public get trigger() {
    return this._trigger;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class DataTencentcloudMpsSchedulesScheduleInfoSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMpsSchedulesScheduleInfoSetOutputReference {
    return new DataTencentcloudMpsSchedulesScheduleInfoSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
