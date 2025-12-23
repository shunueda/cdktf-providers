// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MpsScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#id MpsSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The directory to save the media processing output file, which must start and end with `/`, such as `/movie/201907/`.If you do not specify this, the file will be saved to the trigger directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#output_dir MpsSchedule#output_dir}
  */
  readonly outputDir?: string;
  /**
  * Resource ID, you need to ensure that the corresponding resource is open. The default is the account main resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#resource_id MpsSchedule#resource_id}
  */
  readonly resourceId?: string;
  /**
  * The scheme name (max 128 characters). This name should be unique across your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#schedule_name MpsSchedule#schedule_name}
  */
  readonly scheduleName: string;
  /**
  * activities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#activities MpsSchedule#activities}
  */
  readonly activities: MpsScheduleActivities[] | cdktf.IResolvable;
  /**
  * output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#output_storage MpsSchedule#output_storage}
  */
  readonly outputStorage?: MpsScheduleOutputStorage;
  /**
  * task_notify_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#task_notify_config MpsSchedule#task_notify_config}
  */
  readonly taskNotifyConfig?: MpsScheduleTaskNotifyConfig;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#trigger MpsSchedule#trigger}
  */
  readonly trigger: MpsScheduleTrigger;
}
export interface MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleCosInputInfo {
  /**
  * The COS bucket of the object to process, such as TopRankVideo-125xxx88.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#bucket MpsSchedule#bucket}
  */
  readonly bucket: string;
  /**
  * The path of the object to process, such as /movie/201907/WildAnimal.mov.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#object MpsSchedule#object}
  */
  readonly object: string;
  /**
  * The region of the COS bucket, such as ap-chongqing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#region MpsSchedule#region}
  */
  readonly region: string;
}

export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleCosInputInfoToTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleCosInputInfoOutputReference | MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    object: cdktf.stringToTerraform(struct!.object),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleCosInputInfoToHclTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleCosInputInfoOutputReference | MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleCosInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleCosInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._object = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._object = value.object;
      this._region = value.region;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleS3InputInfo {
  /**
  * S3 bucket.Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_bucket MpsSchedule#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The path of the AWS S3 object.Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_object MpsSchedule#s3_object}
  */
  readonly s3Object: string;
  /**
  * The region of the AWS S3 bucket, support:  us-east-1  eu-west-3Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_region MpsSchedule#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to access the AWS S3 object.Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_id MpsSchedule#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to access the AWS S3 object.Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_key MpsSchedule#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleS3InputInfoToTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleS3InputInfoOutputReference | MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    s3_object: cdktf.stringToTerraform(struct!.s3Object),
    s3_region: cdktf.stringToTerraform(struct!.s3Region),
    s3_secret_id: cdktf.stringToTerraform(struct!.s3SecretId),
    s3_secret_key: cdktf.stringToTerraform(struct!.s3SecretKey),
  }
}


export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleS3InputInfoToHclTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleS3InputInfoOutputReference | MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_bucket: {
      value: cdktf.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_object: {
      value: cdktf.stringToHclTerraform(struct!.s3Object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_region: {
      value: cdktf.stringToHclTerraform(struct!.s3Region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleS3InputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Object !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Object = this._s3Object;
    }
    if (this._s3Region !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Region = this._s3Region;
    }
    if (this._s3SecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretId = this._s3SecretId;
    }
    if (this._s3SecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretKey = this._s3SecretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleS3InputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Bucket = undefined;
      this._s3Object = undefined;
      this._s3Region = undefined;
      this._s3SecretId = undefined;
      this._s3SecretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Bucket = value.s3Bucket;
      this._s3Object = value.s3Object;
      this._s3Region = value.s3Region;
      this._s3SecretId = value.s3SecretId;
      this._s3SecretKey = value.s3SecretKey;
    }
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_object - computed: false, optional: false, required: true
  private _s3Object?: string; 
  public get s3Object() {
    return this.getStringAttribute('s3_object');
  }
  public set s3Object(value: string) {
    this._s3Object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectInput() {
    return this._s3Object;
  }

  // s3_region - computed: false, optional: false, required: true
  private _s3Region?: string; 
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }
  public set s3Region(value: string) {
    this._s3Region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RegionInput() {
    return this._s3Region;
  }

  // s3_secret_id - computed: false, optional: true, required: false
  private _s3SecretId?: string; 
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }
  public set s3SecretId(value: string) {
    this._s3SecretId = value;
  }
  public resetS3SecretId() {
    this._s3SecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretIdInput() {
    return this._s3SecretId;
  }

  // s3_secret_key - computed: false, optional: true, required: false
  private _s3SecretKey?: string; 
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
  public set s3SecretKey(value: string) {
    this._s3SecretKey = value;
  }
  public resetS3SecretKey() {
    this._s3SecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretKeyInput() {
    return this._s3SecretKey;
  }
}
export interface MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleUrlInputInfo {
  /**
  * URL of a video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#url MpsSchedule#url}
  */
  readonly url: string;
}

export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleUrlInputInfoToTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleUrlInputInfoOutputReference | MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleUrlInputInfoToHclTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleUrlInputInfoOutputReference | MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleUrlInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitle {
  /**
  * The input type. Valid values:  COS:A COS bucket address  URL:A URL  AWS-S3:An AWS S3 bucket address. Currently, this type is only supported for transcoding tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#type MpsSchedule#type}
  */
  readonly type: string;
  /**
  * cos_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#cos_input_info MpsSchedule#cos_input_info}
  */
  readonly cosInputInfo?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleCosInputInfo;
  /**
  * s3_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_input_info MpsSchedule#s3_input_info}
  */
  readonly s3InputInfo?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleS3InputInfo;
  /**
  * url_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#url_input_info MpsSchedule#url_input_info}
  */
  readonly urlInputInfo?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleUrlInputInfo;
}

export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleToTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleOutputReference | MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_input_info: mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleCosInputInfoToTerraform(struct!.cosInputInfo),
    s3_input_info: mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleS3InputInfoToTerraform(struct!.s3InputInfo),
    url_input_info: mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleUrlInputInfoToTerraform(struct!.urlInputInfo),
  }
}


export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleToHclTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleOutputReference | MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos_input_info: {
      value: mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleCosInputInfoToHclTerraform(struct!.cosInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleCosInputInfoList",
    },
    s3_input_info: {
      value: mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleS3InputInfoToHclTerraform(struct!.s3InputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleS3InputInfoList",
    },
    url_input_info: {
      value: mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleUrlInputInfoToHclTerraform(struct!.urlInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleUrlInputInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cosInputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosInputInfo = this._cosInputInfo?.internalValue;
    }
    if (this._s3InputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3InputInfo = this._s3InputInfo?.internalValue;
    }
    if (this._urlInputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlInputInfo = this._urlInputInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._cosInputInfo.internalValue = undefined;
      this._s3InputInfo.internalValue = undefined;
      this._urlInputInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._cosInputInfo.internalValue = value.cosInputInfo;
      this._s3InputInfo.internalValue = value.s3InputInfo;
      this._urlInputInfo.internalValue = value.urlInputInfo;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // cos_input_info - computed: false, optional: true, required: false
  private _cosInputInfo = new MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleCosInputInfoOutputReference(this, "cos_input_info");
  public get cosInputInfo() {
    return this._cosInputInfo;
  }
  public putCosInputInfo(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleCosInputInfo) {
    this._cosInputInfo.internalValue = value;
  }
  public resetCosInputInfo() {
    this._cosInputInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosInputInfoInput() {
    return this._cosInputInfo.internalValue;
  }

  // s3_input_info - computed: false, optional: true, required: false
  private _s3InputInfo = new MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleS3InputInfoOutputReference(this, "s3_input_info");
  public get s3InputInfo() {
    return this._s3InputInfo;
  }
  public putS3InputInfo(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleS3InputInfo) {
    this._s3InputInfo.internalValue = value;
  }
  public resetS3InputInfo() {
    this._s3InputInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3InputInfoInput() {
    return this._s3InputInfo.internalValue;
  }

  // url_input_info - computed: false, optional: true, required: false
  private _urlInputInfo = new MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleUrlInputInfoOutputReference(this, "url_input_info");
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
  public putUrlInputInfo(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleUrlInputInfo) {
    this._urlInputInfo.internalValue = value;
  }
  public resetUrlInputInfo() {
    this._urlInputInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInputInfoInput() {
    return this._urlInputInfo.internalValue;
  }
}
export interface MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitles {
  /**
  * The inserting type. Valid values: subtitle-stream:Insert title track close-caption-708:CEA-708 subtitle encode to SEI frame close-caption-608:CEA-608 subtitle encode to SEI frameNote: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#type MpsSchedule#type}
  */
  readonly type?: string;
  /**
  * subtitle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#subtitle MpsSchedule#subtitle}
  */
  readonly subtitle?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitle;
}

export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesToTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    subtitle: mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleToTerraform(struct!.subtitle),
  }
}


export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesToHclTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitle: {
      value: mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleToHclTerraform(struct!.subtitle),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._subtitle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._subtitle.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._subtitle.internalValue = value.subtitle;
    }
  }

  // type - computed: false, optional: true, required: false
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

  // subtitle - computed: false, optional: true, required: false
  private _subtitle = new MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitleOutputReference(this, "subtitle");
  public get subtitle() {
    return this._subtitle;
  }
  public putSubtitle(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesSubtitle) {
    this._subtitle.internalValue = value;
  }
  public resetSubtitle() {
    this._subtitle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle.internalValue;
  }
}

export class MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesList extends cdktf.ComplexList {
  public internalValue? : MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitles[] | cdktf.IResolvable

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
  public get(index: number): MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesOutputReference {
    return new MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageCosOutputStorage {
  /**
  * The bucket to which the output file of media processing is saved, such as `TopRankVideo-125xxx88`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#bucket MpsSchedule#bucket}
  */
  readonly bucket?: string;
  /**
  * The region of the output bucket, such as `ap-chongqing`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#region MpsSchedule#region}
  */
  readonly region?: string;
}

export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageCosOutputStorageToTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageCosOutputStorageOutputReference | MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageCosOutputStorageToHclTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageCosOutputStorageOutputReference | MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageCosOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageCosOutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageCosOutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._region = value.region;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageS3OutputStorage {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_bucket MpsSchedule#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_region MpsSchedule#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_id MpsSchedule#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_key MpsSchedule#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageS3OutputStorageToTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageS3OutputStorageOutputReference | MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageS3OutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    s3_region: cdktf.stringToTerraform(struct!.s3Region),
    s3_secret_id: cdktf.stringToTerraform(struct!.s3SecretId),
    s3_secret_key: cdktf.stringToTerraform(struct!.s3SecretKey),
  }
}


export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageS3OutputStorageToHclTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageS3OutputStorageOutputReference | MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageS3OutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_bucket: {
      value: cdktf.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_region: {
      value: cdktf.stringToHclTerraform(struct!.s3Region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageS3OutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageS3OutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Region !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Region = this._s3Region;
    }
    if (this._s3SecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretId = this._s3SecretId;
    }
    if (this._s3SecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretKey = this._s3SecretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageS3OutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Bucket = undefined;
      this._s3Region = undefined;
      this._s3SecretId = undefined;
      this._s3SecretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Bucket = value.s3Bucket;
      this._s3Region = value.s3Region;
      this._s3SecretId = value.s3SecretId;
      this._s3SecretKey = value.s3SecretKey;
    }
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_region - computed: false, optional: false, required: true
  private _s3Region?: string; 
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }
  public set s3Region(value: string) {
    this._s3Region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RegionInput() {
    return this._s3Region;
  }

  // s3_secret_id - computed: false, optional: true, required: false
  private _s3SecretId?: string; 
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }
  public set s3SecretId(value: string) {
    this._s3SecretId = value;
  }
  public resetS3SecretId() {
    this._s3SecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretIdInput() {
    return this._s3SecretId;
  }

  // s3_secret_key - computed: false, optional: true, required: false
  private _s3SecretKey?: string; 
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
  public set s3SecretKey(value: string) {
    this._s3SecretKey = value;
  }
  public resetS3SecretKey() {
    this._s3SecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretKeyInput() {
    return this._s3SecretKey;
  }
}
export interface MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorage {
  /**
  * The storage type for a media processing output file. Valid values: `COS`: Tencent Cloud COS `AWS-S3`: AWS S3. This type is only supported for AWS tasks, and the output bucket must be in the same region as the bucket of the source file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#type MpsSchedule#type}
  */
  readonly type: string;
  /**
  * cos_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#cos_output_storage MpsSchedule#cos_output_storage}
  */
  readonly cosOutputStorage?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageCosOutputStorage;
  /**
  * s3_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_output_storage MpsSchedule#s3_output_storage}
  */
  readonly s3OutputStorage?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageS3OutputStorage;
}

export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageToTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageOutputReference | MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_output_storage: mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageCosOutputStorageToTerraform(struct!.cosOutputStorage),
    s3_output_storage: mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageS3OutputStorageToTerraform(struct!.s3OutputStorage),
  }
}


export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageToHclTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageOutputReference | MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos_output_storage: {
      value: mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageCosOutputStorageToHclTerraform(struct!.cosOutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageCosOutputStorageList",
    },
    s3_output_storage: {
      value: mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageS3OutputStorageToHclTerraform(struct!.s3OutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageS3OutputStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cosOutputStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosOutputStorage = this._cosOutputStorage?.internalValue;
    }
    if (this._s3OutputStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputStorage = this._s3OutputStorage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._cosOutputStorage.internalValue = undefined;
      this._s3OutputStorage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._cosOutputStorage.internalValue = value.cosOutputStorage;
      this._s3OutputStorage.internalValue = value.s3OutputStorage;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // cos_output_storage - computed: false, optional: true, required: false
  private _cosOutputStorage = new MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageCosOutputStorageOutputReference(this, "cos_output_storage");
  public get cosOutputStorage() {
    return this._cosOutputStorage;
  }
  public putCosOutputStorage(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageCosOutputStorage) {
    this._cosOutputStorage.internalValue = value;
  }
  public resetCosOutputStorage() {
    this._cosOutputStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosOutputStorageInput() {
    return this._cosOutputStorage.internalValue;
  }

  // s3_output_storage - computed: false, optional: true, required: false
  private _s3OutputStorage = new MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageS3OutputStorageOutputReference(this, "s3_output_storage");
  public get s3OutputStorage() {
    return this._s3OutputStorage;
  }
  public putS3OutputStorage(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageS3OutputStorage) {
    this._s3OutputStorage.internalValue = value;
  }
  public resetS3OutputStorage() {
    this._s3OutputStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputStorageInput() {
    return this._s3OutputStorage.internalValue;
  }
}
export interface MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo {
  /**
  * The COS bucket of the object to process, such as `TopRankVideo-125xxx88`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#bucket MpsSchedule#bucket}
  */
  readonly bucket: string;
  /**
  * The path of the object to process, such as `/movie/201907/WildAnimal.mov`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#object MpsSchedule#object}
  */
  readonly object: string;
  /**
  * The region of the COS bucket, such as `ap-chongqing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#region MpsSchedule#region}
  */
  readonly region: string;
}

export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference | MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    object: cdktf.stringToTerraform(struct!.object),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToHclTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference | MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._object = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._object = value.object;
      this._region = value.region;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_bucket MpsSchedule#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The path of the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_object MpsSchedule#s3_object}
  */
  readonly s3Object: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_region MpsSchedule#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_id MpsSchedule#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_key MpsSchedule#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference | MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    s3_object: cdktf.stringToTerraform(struct!.s3Object),
    s3_region: cdktf.stringToTerraform(struct!.s3Region),
    s3_secret_id: cdktf.stringToTerraform(struct!.s3SecretId),
    s3_secret_key: cdktf.stringToTerraform(struct!.s3SecretKey),
  }
}


export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToHclTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference | MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_bucket: {
      value: cdktf.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_object: {
      value: cdktf.stringToHclTerraform(struct!.s3Object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_region: {
      value: cdktf.stringToHclTerraform(struct!.s3Region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Object !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Object = this._s3Object;
    }
    if (this._s3Region !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Region = this._s3Region;
    }
    if (this._s3SecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretId = this._s3SecretId;
    }
    if (this._s3SecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretKey = this._s3SecretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Bucket = undefined;
      this._s3Object = undefined;
      this._s3Region = undefined;
      this._s3SecretId = undefined;
      this._s3SecretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Bucket = value.s3Bucket;
      this._s3Object = value.s3Object;
      this._s3Region = value.s3Region;
      this._s3SecretId = value.s3SecretId;
      this._s3SecretKey = value.s3SecretKey;
    }
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_object - computed: false, optional: false, required: true
  private _s3Object?: string; 
  public get s3Object() {
    return this.getStringAttribute('s3_object');
  }
  public set s3Object(value: string) {
    this._s3Object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectInput() {
    return this._s3Object;
  }

  // s3_region - computed: false, optional: false, required: true
  private _s3Region?: string; 
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }
  public set s3Region(value: string) {
    this._s3Region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RegionInput() {
    return this._s3Region;
  }

  // s3_secret_id - computed: false, optional: true, required: false
  private _s3SecretId?: string; 
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }
  public set s3SecretId(value: string) {
    this._s3SecretId = value;
  }
  public resetS3SecretId() {
    this._s3SecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretIdInput() {
    return this._s3SecretId;
  }

  // s3_secret_key - computed: false, optional: true, required: false
  private _s3SecretKey?: string; 
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
  public set s3SecretKey(value: string) {
    this._s3SecretKey = value;
  }
  public resetS3SecretKey() {
    this._s3SecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretKeyInput() {
    return this._s3SecretKey;
  }
}
export interface MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo {
  /**
  * URL of a video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#url MpsSchedule#url}
  */
  readonly url: string;
}

export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference | MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToHclTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference | MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContent {
  /**
  * The input type. Valid values: `COS`: A COS bucket address.  `URL`: A URL.  `AWS-S3`: An AWS S3 bucket address. Currently, this type is only supported for transcoding tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#type MpsSchedule#type}
  */
  readonly type: string;
  /**
  * cos_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#cos_input_info MpsSchedule#cos_input_info}
  */
  readonly cosInputInfo?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo;
  /**
  * s3_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_input_info MpsSchedule#s3_input_info}
  */
  readonly s3InputInfo?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo;
  /**
  * url_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#url_input_info MpsSchedule#url_input_info}
  */
  readonly urlInputInfo?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo;
}

export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentToTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentOutputReference | MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_input_info: mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToTerraform(struct!.cosInputInfo),
    s3_input_info: mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToTerraform(struct!.s3InputInfo),
    url_input_info: mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToTerraform(struct!.urlInputInfo),
  }
}


export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentToHclTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentOutputReference | MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos_input_info: {
      value: mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToHclTerraform(struct!.cosInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoList",
    },
    s3_input_info: {
      value: mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToHclTerraform(struct!.s3InputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoList",
    },
    url_input_info: {
      value: mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToHclTerraform(struct!.urlInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cosInputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosInputInfo = this._cosInputInfo?.internalValue;
    }
    if (this._s3InputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3InputInfo = this._s3InputInfo?.internalValue;
    }
    if (this._urlInputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlInputInfo = this._urlInputInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._cosInputInfo.internalValue = undefined;
      this._s3InputInfo.internalValue = undefined;
      this._urlInputInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._cosInputInfo.internalValue = value.cosInputInfo;
      this._s3InputInfo.internalValue = value.s3InputInfo;
      this._urlInputInfo.internalValue = value.urlInputInfo;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // cos_input_info - computed: false, optional: true, required: false
  private _cosInputInfo = new MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference(this, "cos_input_info");
  public get cosInputInfo() {
    return this._cosInputInfo;
  }
  public putCosInputInfo(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo) {
    this._cosInputInfo.internalValue = value;
  }
  public resetCosInputInfo() {
    this._cosInputInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosInputInfoInput() {
    return this._cosInputInfo.internalValue;
  }

  // s3_input_info - computed: false, optional: true, required: false
  private _s3InputInfo = new MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference(this, "s3_input_info");
  public get s3InputInfo() {
    return this._s3InputInfo;
  }
  public putS3InputInfo(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo) {
    this._s3InputInfo.internalValue = value;
  }
  public resetS3InputInfo() {
    this._s3InputInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3InputInfoInput() {
    return this._s3InputInfo.internalValue;
  }

  // url_input_info - computed: false, optional: true, required: false
  private _urlInputInfo = new MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference(this, "url_input_info");
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
  public putUrlInputInfo(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo) {
    this._urlInputInfo.internalValue = value;
  }
  public resetUrlInputInfo() {
    this._urlInputInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInputInfoInput() {
    return this._urlInputInfo.internalValue;
  }
}
export interface MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplate {
  /**
  * Watermark height. % and px formats are supported: If the string ends in %, the `Height` of the watermark will be the specified percentage of the video height; for example, `10%` means that `Height` is 10% of the video height; If the string ends in px, the `Height` of the watermark will be in px; for example, `100px` means that `Height` is 100 px.Default value: 0 px, which means that `Height` will be proportionally scaled according to the aspect ratio of the original watermark image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#height MpsSchedule#height}
  */
  readonly height?: string;
  /**
  * Repeat type of an animated watermark. Valid values: `once`: no longer appears after watermark playback ends. `repeat_last_frame`: stays on the last frame after watermark playback ends. `repeat` (default): repeats the playback until the video ends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#repeat_type MpsSchedule#repeat_type}
  */
  readonly repeatType?: string;
  /**
  * Watermark width. % and px formats are supported: If the string ends in %, the `Width` of the watermark will be the specified percentage of the video width; for example, `10%` means that `Width` is 10% of the video width; If the string ends in px, the `Width` of the watermark will be in px; for example, `100px` means that `Width` is 100 px.Default value: 10%.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#width MpsSchedule#width}
  */
  readonly width?: string;
  /**
  * image_content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#image_content MpsSchedule#image_content}
  */
  readonly imageContent: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContent;
}

export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateToTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateOutputReference | MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.stringToTerraform(struct!.height),
    repeat_type: cdktf.stringToTerraform(struct!.repeatType),
    width: cdktf.stringToTerraform(struct!.width),
    image_content: mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentToTerraform(struct!.imageContent),
  }
}


export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateToHclTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateOutputReference | MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    height: {
      value: cdktf.stringToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repeat_type: {
      value: cdktf.stringToHclTerraform(struct!.repeatType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.stringToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_content: {
      value: mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentToHclTerraform(struct!.imageContent),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._repeatType !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatType = this._repeatType;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._imageContent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageContent = this._imageContent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._height = undefined;
      this._repeatType = undefined;
      this._width = undefined;
      this._imageContent.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._height = value.height;
      this._repeatType = value.repeatType;
      this._width = value.width;
      this._imageContent.internalValue = value.imageContent;
    }
  }

  // height - computed: false, optional: true, required: false
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // repeat_type - computed: false, optional: true, required: false
  private _repeatType?: string; 
  public get repeatType() {
    return this.getStringAttribute('repeat_type');
  }
  public set repeatType(value: string) {
    this._repeatType = value;
  }
  public resetRepeatType() {
    this._repeatType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatTypeInput() {
    return this._repeatType;
  }

  // width - computed: false, optional: true, required: false
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // image_content - computed: false, optional: false, required: true
  private _imageContent = new MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContentOutputReference(this, "image_content");
  public get imageContent() {
    return this._imageContent;
  }
  public putImageContent(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateImageContent) {
    this._imageContent.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageContentInput() {
    return this._imageContent.internalValue;
  }
}
export interface MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameter {
  /**
  * Origin position, which currently can only be: TopLeft: the origin of coordinates is in the top-left corner of the video, and the origin of the watermark is in the top-left corner of the image or text.Default value: TopLeft.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#coordinate_origin MpsSchedule#coordinate_origin}
  */
  readonly coordinateOrigin?: string;
  /**
  * Watermark type. Valid values: image: image watermark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#type MpsSchedule#type}
  */
  readonly type: string;
  /**
  * The horizontal position of the origin of the watermark relative to the origin of coordinates of the video. % and px formats are supported: If the string ends in %, the `XPos` of the watermark will be the specified percentage of the video width; for example, `10%` means that `XPos` is 10% of the video width; If the string ends in px, the `XPos` of the watermark will be the specified px; for example, `100px` means that `XPos` is 100 px.Default value: 0 px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#x_pos MpsSchedule#x_pos}
  */
  readonly xPos?: string;
  /**
  * The vertical position of the origin of the watermark relative to the origin of coordinates of the video. % and px formats are supported: If the string ends in %, the `YPos` of the watermark will be the specified percentage of the video height; for example, `10%` means that `YPos` is 10% of the video height; If the string ends in px, the `YPos` of the watermark will be the specified px; for example, `100px` means that `YPos` is 100 px.Default value: 0 px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#y_pos MpsSchedule#y_pos}
  */
  readonly yPos?: string;
  /**
  * image_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#image_template MpsSchedule#image_template}
  */
  readonly imageTemplate?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplate;
}

export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterToTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterOutputReference | MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    coordinate_origin: cdktf.stringToTerraform(struct!.coordinateOrigin),
    type: cdktf.stringToTerraform(struct!.type),
    x_pos: cdktf.stringToTerraform(struct!.xPos),
    y_pos: cdktf.stringToTerraform(struct!.yPos),
    image_template: mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateToTerraform(struct!.imageTemplate),
  }
}


export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterToHclTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterOutputReference | MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    coordinate_origin: {
      value: cdktf.stringToHclTerraform(struct!.coordinateOrigin),
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
    x_pos: {
      value: cdktf.stringToHclTerraform(struct!.xPos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y_pos: {
      value: cdktf.stringToHclTerraform(struct!.yPos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_template: {
      value: mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateToHclTerraform(struct!.imageTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coordinateOrigin !== undefined) {
      hasAnyValues = true;
      internalValueResult.coordinateOrigin = this._coordinateOrigin;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._xPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.xPos = this._xPos;
    }
    if (this._yPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.yPos = this._yPos;
    }
    if (this._imageTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageTemplate = this._imageTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coordinateOrigin = undefined;
      this._type = undefined;
      this._xPos = undefined;
      this._yPos = undefined;
      this._imageTemplate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coordinateOrigin = value.coordinateOrigin;
      this._type = value.type;
      this._xPos = value.xPos;
      this._yPos = value.yPos;
      this._imageTemplate.internalValue = value.imageTemplate;
    }
  }

  // coordinate_origin - computed: false, optional: true, required: false
  private _coordinateOrigin?: string; 
  public get coordinateOrigin() {
    return this.getStringAttribute('coordinate_origin');
  }
  public set coordinateOrigin(value: string) {
    this._coordinateOrigin = value;
  }
  public resetCoordinateOrigin() {
    this._coordinateOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinateOriginInput() {
    return this._coordinateOrigin;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // x_pos - computed: false, optional: true, required: false
  private _xPos?: string; 
  public get xPos() {
    return this.getStringAttribute('x_pos');
  }
  public set xPos(value: string) {
    this._xPos = value;
  }
  public resetXPos() {
    this._xPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xPosInput() {
    return this._xPos;
  }

  // y_pos - computed: false, optional: true, required: false
  private _yPos?: string; 
  public get yPos() {
    return this.getStringAttribute('y_pos');
  }
  public set yPos(value: string) {
    this._yPos = value;
  }
  public resetYPos() {
    this._yPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yPosInput() {
    return this._yPos;
  }

  // image_template - computed: false, optional: true, required: false
  private _imageTemplate = new MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplateOutputReference(this, "image_template");
  public get imageTemplate() {
    return this._imageTemplate;
  }
  public putImageTemplate(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterImageTemplate) {
    this._imageTemplate.internalValue = value;
  }
  public resetImageTemplate() {
    this._imageTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTemplateInput() {
    return this._imageTemplate.internalValue;
  }
}
export interface MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSet {
  /**
  * ID of a watermarking template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#definition MpsSchedule#definition}
  */
  readonly definition: number;
  /**
  * End time offset of a watermark in seconds. If this parameter is left empty or 0 is entered, the watermark will exist till the last video frame; If this value is greater than 0 (e.g., n), the watermark will exist till second n; If this value is smaller than 0 (e.g., -n), the watermark will exist till second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#end_time_offset MpsSchedule#end_time_offset}
  */
  readonly endTimeOffset?: number;
  /**
  * Start time offset of a watermark in seconds. If this parameter is left empty or 0 is entered, the watermark will appear upon the first video frame. If this parameter is left empty or 0 is entered, the watermark will appear upon the first video frame; If this value is greater than 0 (e.g., n), the watermark will appear at second n after the first video frame; If this value is smaller than 0 (e.g., -n), the watermark will appear at second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#start_time_offset MpsSchedule#start_time_offset}
  */
  readonly startTimeOffset?: number;
  /**
  * SVG content of up to 2,000,000 characters. This field is required only when the watermark type is `SVG`.SVG watermark is not available for screenshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#svg_content MpsSchedule#svg_content}
  */
  readonly svgContent?: string;
  /**
  * Text content of up to 100 characters. This field is required only when the watermark type is text.Text watermark is not available for screenshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#text_content MpsSchedule#text_content}
  */
  readonly textContent?: string;
  /**
  * raw_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#raw_parameter MpsSchedule#raw_parameter}
  */
  readonly rawParameter?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameter;
}

export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetToTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.numberToTerraform(struct!.definition),
    end_time_offset: cdktf.numberToTerraform(struct!.endTimeOffset),
    start_time_offset: cdktf.numberToTerraform(struct!.startTimeOffset),
    svg_content: cdktf.stringToTerraform(struct!.svgContent),
    text_content: cdktf.stringToTerraform(struct!.textContent),
    raw_parameter: mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterToTerraform(struct!.rawParameter),
  }
}


export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetToHclTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.numberToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_time_offset: {
      value: cdktf.numberToHclTerraform(struct!.endTimeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time_offset: {
      value: cdktf.numberToHclTerraform(struct!.startTimeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    svg_content: {
      value: cdktf.stringToHclTerraform(struct!.svgContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_content: {
      value: cdktf.stringToHclTerraform(struct!.textContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw_parameter: {
      value: mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterToHclTerraform(struct!.rawParameter),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._endTimeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTimeOffset = this._endTimeOffset;
    }
    if (this._startTimeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimeOffset = this._startTimeOffset;
    }
    if (this._svgContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.svgContent = this._svgContent;
    }
    if (this._textContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.textContent = this._textContent;
    }
    if (this._rawParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawParameter = this._rawParameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._endTimeOffset = undefined;
      this._startTimeOffset = undefined;
      this._svgContent = undefined;
      this._textContent = undefined;
      this._rawParameter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._endTimeOffset = value.endTimeOffset;
      this._startTimeOffset = value.startTimeOffset;
      this._svgContent = value.svgContent;
      this._textContent = value.textContent;
      this._rawParameter.internalValue = value.rawParameter;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: number; 
  public get definition() {
    return this.getNumberAttribute('definition');
  }
  public set definition(value: number) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // end_time_offset - computed: false, optional: true, required: false
  private _endTimeOffset?: number; 
  public get endTimeOffset() {
    return this.getNumberAttribute('end_time_offset');
  }
  public set endTimeOffset(value: number) {
    this._endTimeOffset = value;
  }
  public resetEndTimeOffset() {
    this._endTimeOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeOffsetInput() {
    return this._endTimeOffset;
  }

  // start_time_offset - computed: false, optional: true, required: false
  private _startTimeOffset?: number; 
  public get startTimeOffset() {
    return this.getNumberAttribute('start_time_offset');
  }
  public set startTimeOffset(value: number) {
    this._startTimeOffset = value;
  }
  public resetStartTimeOffset() {
    this._startTimeOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeOffsetInput() {
    return this._startTimeOffset;
  }

  // svg_content - computed: false, optional: true, required: false
  private _svgContent?: string; 
  public get svgContent() {
    return this.getStringAttribute('svg_content');
  }
  public set svgContent(value: string) {
    this._svgContent = value;
  }
  public resetSvgContent() {
    this._svgContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svgContentInput() {
    return this._svgContent;
  }

  // text_content - computed: false, optional: true, required: false
  private _textContent?: string; 
  public get textContent() {
    return this.getStringAttribute('text_content');
  }
  public set textContent(value: string) {
    this._textContent = value;
  }
  public resetTextContent() {
    this._textContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textContentInput() {
    return this._textContent;
  }

  // raw_parameter - computed: false, optional: true, required: false
  private _rawParameter = new MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameterOutputReference(this, "raw_parameter");
  public get rawParameter() {
    return this._rawParameter;
  }
  public putRawParameter(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetRawParameter) {
    this._rawParameter.internalValue = value;
  }
  public resetRawParameter() {
    this._rawParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawParameterInput() {
    return this._rawParameter.internalValue;
  }
}

export class MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetList extends cdktf.ComplexList {
  public internalValue? : MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSet[] | cdktf.IResolvable

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
  public get(index: number): MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetOutputReference {
    return new MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTask {
  /**
  * Adaptive bitrate streaming template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#definition MpsSchedule#definition}
  */
  readonly definition: number;
  /**
  * The relative or absolute output path of the manifest file after being transcoded to adaptive bitrate streaming. If this parameter is left empty, a relative path in the following format will be used by default: `{inputName}_adaptiveDynamicStreaming_{definition}.{format}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#output_object_path MpsSchedule#output_object_path}
  */
  readonly outputObjectPath?: string;
  /**
  * The relative output path of the segment file after being transcoded to adaptive bitrate streaming (in HLS format only). If this parameter is left empty, a relative path in the following format will be used by default: `{inputName}_adaptiveDynamicStreaming_{definition}_{subStreamNumber}_{segmentNumber}.{format}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#segment_object_name MpsSchedule#segment_object_name}
  */
  readonly segmentObjectName?: string;
  /**
  * The relative output path of the substream file after being transcoded to adaptive bitrate streaming. If this parameter is left empty, a relative path in the following format will be used by default: `{inputName}_adaptiveDynamicStreaming_{definition}_{subStreamNumber}.{format}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#sub_stream_object_name MpsSchedule#sub_stream_object_name}
  */
  readonly subStreamObjectName?: string;
  /**
  * add_on_subtitles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#add_on_subtitles MpsSchedule#add_on_subtitles}
  */
  readonly addOnSubtitles?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitles[] | cdktf.IResolvable;
  /**
  * output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#output_storage MpsSchedule#output_storage}
  */
  readonly outputStorage?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorage;
  /**
  * watermark_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#watermark_set MpsSchedule#watermark_set}
  */
  readonly watermarkSet?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSet[] | cdktf.IResolvable;
}

export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskToTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputReference | MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.numberToTerraform(struct!.definition),
    output_object_path: cdktf.stringToTerraform(struct!.outputObjectPath),
    segment_object_name: cdktf.stringToTerraform(struct!.segmentObjectName),
    sub_stream_object_name: cdktf.stringToTerraform(struct!.subStreamObjectName),
    add_on_subtitles: cdktf.listMapper(mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesToTerraform, true)(struct!.addOnSubtitles),
    output_storage: mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageToTerraform(struct!.outputStorage),
    watermark_set: cdktf.listMapper(mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetToTerraform, true)(struct!.watermarkSet),
  }
}


export function mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskToHclTerraform(struct?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputReference | MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.numberToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    output_object_path: {
      value: cdktf.stringToHclTerraform(struct!.outputObjectPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment_object_name: {
      value: cdktf.stringToHclTerraform(struct!.segmentObjectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_stream_object_name: {
      value: cdktf.stringToHclTerraform(struct!.subStreamObjectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    add_on_subtitles: {
      value: cdktf.listMapperHcl(mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesToHclTerraform, true)(struct!.addOnSubtitles),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesList",
    },
    output_storage: {
      value: mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageToHclTerraform(struct!.outputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageList",
    },
    watermark_set: {
      value: cdktf.listMapperHcl(mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetToHclTerraform, true)(struct!.watermarkSet),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._outputObjectPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputObjectPath = this._outputObjectPath;
    }
    if (this._segmentObjectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentObjectName = this._segmentObjectName;
    }
    if (this._subStreamObjectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subStreamObjectName = this._subStreamObjectName;
    }
    if (this._addOnSubtitles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addOnSubtitles = this._addOnSubtitles?.internalValue;
    }
    if (this._outputStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputStorage = this._outputStorage?.internalValue;
    }
    if (this._watermarkSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.watermarkSet = this._watermarkSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._definition = undefined;
      this._outputObjectPath = undefined;
      this._segmentObjectName = undefined;
      this._subStreamObjectName = undefined;
      this._addOnSubtitles.internalValue = undefined;
      this._outputStorage.internalValue = undefined;
      this._watermarkSet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._definition = value.definition;
      this._outputObjectPath = value.outputObjectPath;
      this._segmentObjectName = value.segmentObjectName;
      this._subStreamObjectName = value.subStreamObjectName;
      this._addOnSubtitles.internalValue = value.addOnSubtitles;
      this._outputStorage.internalValue = value.outputStorage;
      this._watermarkSet.internalValue = value.watermarkSet;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: number; 
  public get definition() {
    return this.getNumberAttribute('definition');
  }
  public set definition(value: number) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // output_object_path - computed: false, optional: true, required: false
  private _outputObjectPath?: string; 
  public get outputObjectPath() {
    return this.getStringAttribute('output_object_path');
  }
  public set outputObjectPath(value: string) {
    this._outputObjectPath = value;
  }
  public resetOutputObjectPath() {
    this._outputObjectPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputObjectPathInput() {
    return this._outputObjectPath;
  }

  // segment_object_name - computed: false, optional: true, required: false
  private _segmentObjectName?: string; 
  public get segmentObjectName() {
    return this.getStringAttribute('segment_object_name');
  }
  public set segmentObjectName(value: string) {
    this._segmentObjectName = value;
  }
  public resetSegmentObjectName() {
    this._segmentObjectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentObjectNameInput() {
    return this._segmentObjectName;
  }

  // sub_stream_object_name - computed: false, optional: true, required: false
  private _subStreamObjectName?: string; 
  public get subStreamObjectName() {
    return this.getStringAttribute('sub_stream_object_name');
  }
  public set subStreamObjectName(value: string) {
    this._subStreamObjectName = value;
  }
  public resetSubStreamObjectName() {
    this._subStreamObjectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subStreamObjectNameInput() {
    return this._subStreamObjectName;
  }

  // add_on_subtitles - computed: false, optional: true, required: false
  private _addOnSubtitles = new MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitlesList(this, "add_on_subtitles", false);
  public get addOnSubtitles() {
    return this._addOnSubtitles;
  }
  public putAddOnSubtitles(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskAddOnSubtitles[] | cdktf.IResolvable) {
    this._addOnSubtitles.internalValue = value;
  }
  public resetAddOnSubtitles() {
    this._addOnSubtitles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addOnSubtitlesInput() {
    return this._addOnSubtitles.internalValue;
  }

  // output_storage - computed: false, optional: true, required: false
  private _outputStorage = new MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorageOutputReference(this, "output_storage");
  public get outputStorage() {
    return this._outputStorage;
  }
  public putOutputStorage(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputStorage) {
    this._outputStorage.internalValue = value;
  }
  public resetOutputStorage() {
    this._outputStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputStorageInput() {
    return this._outputStorage.internalValue;
  }

  // watermark_set - computed: false, optional: true, required: false
  private _watermarkSet = new MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSetList(this, "watermark_set", false);
  public get watermarkSet() {
    return this._watermarkSet;
  }
  public putWatermarkSet(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskWatermarkSet[] | cdktf.IResolvable) {
    this._watermarkSet.internalValue = value;
  }
  public resetWatermarkSet() {
    this._watermarkSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watermarkSetInput() {
    return this._watermarkSet.internalValue;
  }
}
export interface MpsScheduleActivitiesActivityParaAiAnalysisTask {
  /**
  * Video content analysis template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#definition MpsSchedule#definition}
  */
  readonly definition: number;
  /**
  * An extended parameter, whose value is a stringfied JSON.Note: This parameter is for customers with special requirements. It needs to be customized offline.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#extended_parameter MpsSchedule#extended_parameter}
  */
  readonly extendedParameter?: string;
}

export function mpsScheduleActivitiesActivityParaAiAnalysisTaskToTerraform(struct?: MpsScheduleActivitiesActivityParaAiAnalysisTaskOutputReference | MpsScheduleActivitiesActivityParaAiAnalysisTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.numberToTerraform(struct!.definition),
    extended_parameter: cdktf.stringToTerraform(struct!.extendedParameter),
  }
}


export function mpsScheduleActivitiesActivityParaAiAnalysisTaskToHclTerraform(struct?: MpsScheduleActivitiesActivityParaAiAnalysisTaskOutputReference | MpsScheduleActivitiesActivityParaAiAnalysisTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.numberToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extended_parameter: {
      value: cdktf.stringToHclTerraform(struct!.extendedParameter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaAiAnalysisTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaAiAnalysisTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._extendedParameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedParameter = this._extendedParameter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaAiAnalysisTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._definition = undefined;
      this._extendedParameter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._definition = value.definition;
      this._extendedParameter = value.extendedParameter;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: number; 
  public get definition() {
    return this.getNumberAttribute('definition');
  }
  public set definition(value: number) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // extended_parameter - computed: false, optional: true, required: false
  private _extendedParameter?: string; 
  public get extendedParameter() {
    return this.getStringAttribute('extended_parameter');
  }
  public set extendedParameter(value: string) {
    this._extendedParameter = value;
  }
  public resetExtendedParameter() {
    this._extendedParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedParameterInput() {
    return this._extendedParameter;
  }
}
export interface MpsScheduleActivitiesActivityParaAiContentReviewTask {
  /**
  * Video content audit template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#definition MpsSchedule#definition}
  */
  readonly definition: number;
}

export function mpsScheduleActivitiesActivityParaAiContentReviewTaskToTerraform(struct?: MpsScheduleActivitiesActivityParaAiContentReviewTaskOutputReference | MpsScheduleActivitiesActivityParaAiContentReviewTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.numberToTerraform(struct!.definition),
  }
}


export function mpsScheduleActivitiesActivityParaAiContentReviewTaskToHclTerraform(struct?: MpsScheduleActivitiesActivityParaAiContentReviewTaskOutputReference | MpsScheduleActivitiesActivityParaAiContentReviewTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.numberToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaAiContentReviewTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaAiContentReviewTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaAiContentReviewTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._definition = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._definition = value.definition;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: number; 
  public get definition() {
    return this.getNumberAttribute('definition');
  }
  public set definition(value: number) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }
}
export interface MpsScheduleActivitiesActivityParaAiRecognitionTask {
  /**
  * Intelligent video recognition template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#definition MpsSchedule#definition}
  */
  readonly definition: number;
}

export function mpsScheduleActivitiesActivityParaAiRecognitionTaskToTerraform(struct?: MpsScheduleActivitiesActivityParaAiRecognitionTaskOutputReference | MpsScheduleActivitiesActivityParaAiRecognitionTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.numberToTerraform(struct!.definition),
  }
}


export function mpsScheduleActivitiesActivityParaAiRecognitionTaskToHclTerraform(struct?: MpsScheduleActivitiesActivityParaAiRecognitionTaskOutputReference | MpsScheduleActivitiesActivityParaAiRecognitionTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.numberToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaAiRecognitionTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaAiRecognitionTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaAiRecognitionTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._definition = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._definition = value.definition;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: number; 
  public get definition() {
    return this.getNumberAttribute('definition');
  }
  public set definition(value: number) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }
}
export interface MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageCosOutputStorage {
  /**
  * The bucket to which the output file of media processing is saved, such as `TopRankVideo-125xxx88`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#bucket MpsSchedule#bucket}
  */
  readonly bucket?: string;
  /**
  * The region of the output bucket, such as `ap-chongqing`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#region MpsSchedule#region}
  */
  readonly region?: string;
}

export function mpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageCosOutputStorageToTerraform(struct?: MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageCosOutputStorageOutputReference | MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function mpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageCosOutputStorageToHclTerraform(struct?: MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageCosOutputStorageOutputReference | MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageCosOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageCosOutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageCosOutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._region = value.region;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageS3OutputStorage {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_bucket MpsSchedule#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_region MpsSchedule#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_id MpsSchedule#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_key MpsSchedule#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageS3OutputStorageToTerraform(struct?: MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageS3OutputStorageOutputReference | MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageS3OutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    s3_region: cdktf.stringToTerraform(struct!.s3Region),
    s3_secret_id: cdktf.stringToTerraform(struct!.s3SecretId),
    s3_secret_key: cdktf.stringToTerraform(struct!.s3SecretKey),
  }
}


export function mpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageS3OutputStorageToHclTerraform(struct?: MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageS3OutputStorageOutputReference | MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageS3OutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_bucket: {
      value: cdktf.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_region: {
      value: cdktf.stringToHclTerraform(struct!.s3Region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageS3OutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageS3OutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Region !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Region = this._s3Region;
    }
    if (this._s3SecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretId = this._s3SecretId;
    }
    if (this._s3SecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretKey = this._s3SecretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageS3OutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Bucket = undefined;
      this._s3Region = undefined;
      this._s3SecretId = undefined;
      this._s3SecretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Bucket = value.s3Bucket;
      this._s3Region = value.s3Region;
      this._s3SecretId = value.s3SecretId;
      this._s3SecretKey = value.s3SecretKey;
    }
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_region - computed: false, optional: false, required: true
  private _s3Region?: string; 
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }
  public set s3Region(value: string) {
    this._s3Region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RegionInput() {
    return this._s3Region;
  }

  // s3_secret_id - computed: false, optional: true, required: false
  private _s3SecretId?: string; 
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }
  public set s3SecretId(value: string) {
    this._s3SecretId = value;
  }
  public resetS3SecretId() {
    this._s3SecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretIdInput() {
    return this._s3SecretId;
  }

  // s3_secret_key - computed: false, optional: true, required: false
  private _s3SecretKey?: string; 
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
  public set s3SecretKey(value: string) {
    this._s3SecretKey = value;
  }
  public resetS3SecretKey() {
    this._s3SecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretKeyInput() {
    return this._s3SecretKey;
  }
}
export interface MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorage {
  /**
  * The storage type for a media processing output file. Valid values: `COS`: Tencent Cloud COS `AWS-S3`: AWS S3. This type is only supported for AWS tasks, and the output bucket must be in the same region as the bucket of the source file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#type MpsSchedule#type}
  */
  readonly type: string;
  /**
  * cos_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#cos_output_storage MpsSchedule#cos_output_storage}
  */
  readonly cosOutputStorage?: MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageCosOutputStorage;
  /**
  * s3_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_output_storage MpsSchedule#s3_output_storage}
  */
  readonly s3OutputStorage?: MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageS3OutputStorage;
}

export function mpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageToTerraform(struct?: MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageOutputReference | MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_output_storage: mpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageCosOutputStorageToTerraform(struct!.cosOutputStorage),
    s3_output_storage: mpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageS3OutputStorageToTerraform(struct!.s3OutputStorage),
  }
}


export function mpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageToHclTerraform(struct?: MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageOutputReference | MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos_output_storage: {
      value: mpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageCosOutputStorageToHclTerraform(struct!.cosOutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageCosOutputStorageList",
    },
    s3_output_storage: {
      value: mpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageS3OutputStorageToHclTerraform(struct!.s3OutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageS3OutputStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cosOutputStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosOutputStorage = this._cosOutputStorage?.internalValue;
    }
    if (this._s3OutputStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputStorage = this._s3OutputStorage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._cosOutputStorage.internalValue = undefined;
      this._s3OutputStorage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._cosOutputStorage.internalValue = value.cosOutputStorage;
      this._s3OutputStorage.internalValue = value.s3OutputStorage;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // cos_output_storage - computed: false, optional: true, required: false
  private _cosOutputStorage = new MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageCosOutputStorageOutputReference(this, "cos_output_storage");
  public get cosOutputStorage() {
    return this._cosOutputStorage;
  }
  public putCosOutputStorage(value: MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageCosOutputStorage) {
    this._cosOutputStorage.internalValue = value;
  }
  public resetCosOutputStorage() {
    this._cosOutputStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosOutputStorageInput() {
    return this._cosOutputStorage.internalValue;
  }

  // s3_output_storage - computed: false, optional: true, required: false
  private _s3OutputStorage = new MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageS3OutputStorageOutputReference(this, "s3_output_storage");
  public get s3OutputStorage() {
    return this._s3OutputStorage;
  }
  public putS3OutputStorage(value: MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageS3OutputStorage) {
    this._s3OutputStorage.internalValue = value;
  }
  public resetS3OutputStorage() {
    this._s3OutputStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputStorageInput() {
    return this._s3OutputStorage.internalValue;
  }
}
export interface MpsScheduleActivitiesActivityParaAnimatedGraphicTask {
  /**
  * Animated image generating template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#definition MpsSchedule#definition}
  */
  readonly definition: number;
  /**
  * End time of an animated image in a video in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#end_time_offset MpsSchedule#end_time_offset}
  */
  readonly endTimeOffset: number;
  /**
  * Output path to a generated animated image file, which can be a relative path or an absolute path. If this parameter is left empty, the following relative path will be used by default: `{inputName}_animatedGraphic_{definition}.{format}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#output_object_path MpsSchedule#output_object_path}
  */
  readonly outputObjectPath?: string;
  /**
  * Start time of an animated image in a video in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#start_time_offset MpsSchedule#start_time_offset}
  */
  readonly startTimeOffset: number;
  /**
  * output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#output_storage MpsSchedule#output_storage}
  */
  readonly outputStorage?: MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorage;
}

export function mpsScheduleActivitiesActivityParaAnimatedGraphicTaskToTerraform(struct?: MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputReference | MpsScheduleActivitiesActivityParaAnimatedGraphicTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.numberToTerraform(struct!.definition),
    end_time_offset: cdktf.numberToTerraform(struct!.endTimeOffset),
    output_object_path: cdktf.stringToTerraform(struct!.outputObjectPath),
    start_time_offset: cdktf.numberToTerraform(struct!.startTimeOffset),
    output_storage: mpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageToTerraform(struct!.outputStorage),
  }
}


export function mpsScheduleActivitiesActivityParaAnimatedGraphicTaskToHclTerraform(struct?: MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputReference | MpsScheduleActivitiesActivityParaAnimatedGraphicTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.numberToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_time_offset: {
      value: cdktf.numberToHclTerraform(struct!.endTimeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    output_object_path: {
      value: cdktf.stringToHclTerraform(struct!.outputObjectPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time_offset: {
      value: cdktf.numberToHclTerraform(struct!.startTimeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    output_storage: {
      value: mpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageToHclTerraform(struct!.outputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaAnimatedGraphicTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._endTimeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTimeOffset = this._endTimeOffset;
    }
    if (this._outputObjectPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputObjectPath = this._outputObjectPath;
    }
    if (this._startTimeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimeOffset = this._startTimeOffset;
    }
    if (this._outputStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputStorage = this._outputStorage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaAnimatedGraphicTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._definition = undefined;
      this._endTimeOffset = undefined;
      this._outputObjectPath = undefined;
      this._startTimeOffset = undefined;
      this._outputStorage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._definition = value.definition;
      this._endTimeOffset = value.endTimeOffset;
      this._outputObjectPath = value.outputObjectPath;
      this._startTimeOffset = value.startTimeOffset;
      this._outputStorage.internalValue = value.outputStorage;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: number; 
  public get definition() {
    return this.getNumberAttribute('definition');
  }
  public set definition(value: number) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // end_time_offset - computed: false, optional: false, required: true
  private _endTimeOffset?: number; 
  public get endTimeOffset() {
    return this.getNumberAttribute('end_time_offset');
  }
  public set endTimeOffset(value: number) {
    this._endTimeOffset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeOffsetInput() {
    return this._endTimeOffset;
  }

  // output_object_path - computed: false, optional: true, required: false
  private _outputObjectPath?: string; 
  public get outputObjectPath() {
    return this.getStringAttribute('output_object_path');
  }
  public set outputObjectPath(value: string) {
    this._outputObjectPath = value;
  }
  public resetOutputObjectPath() {
    this._outputObjectPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputObjectPathInput() {
    return this._outputObjectPath;
  }

  // start_time_offset - computed: false, optional: false, required: true
  private _startTimeOffset?: number; 
  public get startTimeOffset() {
    return this.getNumberAttribute('start_time_offset');
  }
  public set startTimeOffset(value: number) {
    this._startTimeOffset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeOffsetInput() {
    return this._startTimeOffset;
  }

  // output_storage - computed: false, optional: true, required: false
  private _outputStorage = new MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorageOutputReference(this, "output_storage");
  public get outputStorage() {
    return this._outputStorage;
  }
  public putOutputStorage(value: MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputStorage) {
    this._outputStorage.internalValue = value;
  }
  public resetOutputStorage() {
    this._outputStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputStorageInput() {
    return this._outputStorage.internalValue;
  }
}
export interface MpsScheduleActivitiesActivityParaImageSpriteTaskObjectNumberFormat {
  /**
  * Increment of the `{number}` variable. Default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#increment MpsSchedule#increment}
  */
  readonly increment?: number;
  /**
  * Start value of the `{number}` variable. Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#initial_value MpsSchedule#initial_value}
  */
  readonly initialValue?: number;
  /**
  * Minimum length of the `{number}` variable. A placeholder will be used if the variable length is below the minimum requirement. Default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#min_length MpsSchedule#min_length}
  */
  readonly minLength?: number;
  /**
  * Placeholder used when the `{number}` variable length is below the minimum requirement. Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#place_holder MpsSchedule#place_holder}
  */
  readonly placeHolder?: string;
}

export function mpsScheduleActivitiesActivityParaImageSpriteTaskObjectNumberFormatToTerraform(struct?: MpsScheduleActivitiesActivityParaImageSpriteTaskObjectNumberFormatOutputReference | MpsScheduleActivitiesActivityParaImageSpriteTaskObjectNumberFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    increment: cdktf.numberToTerraform(struct!.increment),
    initial_value: cdktf.numberToTerraform(struct!.initialValue),
    min_length: cdktf.numberToTerraform(struct!.minLength),
    place_holder: cdktf.stringToTerraform(struct!.placeHolder),
  }
}


export function mpsScheduleActivitiesActivityParaImageSpriteTaskObjectNumberFormatToHclTerraform(struct?: MpsScheduleActivitiesActivityParaImageSpriteTaskObjectNumberFormatOutputReference | MpsScheduleActivitiesActivityParaImageSpriteTaskObjectNumberFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    increment: {
      value: cdktf.numberToHclTerraform(struct!.increment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_value: {
      value: cdktf.numberToHclTerraform(struct!.initialValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_length: {
      value: cdktf.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    place_holder: {
      value: cdktf.stringToHclTerraform(struct!.placeHolder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaImageSpriteTaskObjectNumberFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaImageSpriteTaskObjectNumberFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._increment !== undefined) {
      hasAnyValues = true;
      internalValueResult.increment = this._increment;
    }
    if (this._initialValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialValue = this._initialValue;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    if (this._placeHolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.placeHolder = this._placeHolder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaImageSpriteTaskObjectNumberFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._increment = undefined;
      this._initialValue = undefined;
      this._minLength = undefined;
      this._placeHolder = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._increment = value.increment;
      this._initialValue = value.initialValue;
      this._minLength = value.minLength;
      this._placeHolder = value.placeHolder;
    }
  }

  // increment - computed: false, optional: true, required: false
  private _increment?: number; 
  public get increment() {
    return this.getNumberAttribute('increment');
  }
  public set increment(value: number) {
    this._increment = value;
  }
  public resetIncrement() {
    this._increment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementInput() {
    return this._increment;
  }

  // initial_value - computed: false, optional: true, required: false
  private _initialValue?: number; 
  public get initialValue() {
    return this.getNumberAttribute('initial_value');
  }
  public set initialValue(value: number) {
    this._initialValue = value;
  }
  public resetInitialValue() {
    this._initialValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialValueInput() {
    return this._initialValue;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // place_holder - computed: false, optional: true, required: false
  private _placeHolder?: string; 
  public get placeHolder() {
    return this.getStringAttribute('place_holder');
  }
  public set placeHolder(value: string) {
    this._placeHolder = value;
  }
  public resetPlaceHolder() {
    this._placeHolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placeHolderInput() {
    return this._placeHolder;
  }
}
export interface MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageCosOutputStorage {
  /**
  * The bucket to which the output file of media processing is saved, such as `TopRankVideo-125xxx88`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#bucket MpsSchedule#bucket}
  */
  readonly bucket?: string;
  /**
  * The region of the output bucket, such as `ap-chongqing`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#region MpsSchedule#region}
  */
  readonly region?: string;
}

export function mpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageCosOutputStorageToTerraform(struct?: MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageCosOutputStorageOutputReference | MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function mpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageCosOutputStorageToHclTerraform(struct?: MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageCosOutputStorageOutputReference | MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageCosOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageCosOutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageCosOutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._region = value.region;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageS3OutputStorage {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_bucket MpsSchedule#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_region MpsSchedule#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_id MpsSchedule#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_key MpsSchedule#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageS3OutputStorageToTerraform(struct?: MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageS3OutputStorageOutputReference | MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageS3OutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    s3_region: cdktf.stringToTerraform(struct!.s3Region),
    s3_secret_id: cdktf.stringToTerraform(struct!.s3SecretId),
    s3_secret_key: cdktf.stringToTerraform(struct!.s3SecretKey),
  }
}


export function mpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageS3OutputStorageToHclTerraform(struct?: MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageS3OutputStorageOutputReference | MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageS3OutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_bucket: {
      value: cdktf.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_region: {
      value: cdktf.stringToHclTerraform(struct!.s3Region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageS3OutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageS3OutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Region !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Region = this._s3Region;
    }
    if (this._s3SecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretId = this._s3SecretId;
    }
    if (this._s3SecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretKey = this._s3SecretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageS3OutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Bucket = undefined;
      this._s3Region = undefined;
      this._s3SecretId = undefined;
      this._s3SecretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Bucket = value.s3Bucket;
      this._s3Region = value.s3Region;
      this._s3SecretId = value.s3SecretId;
      this._s3SecretKey = value.s3SecretKey;
    }
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_region - computed: false, optional: false, required: true
  private _s3Region?: string; 
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }
  public set s3Region(value: string) {
    this._s3Region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RegionInput() {
    return this._s3Region;
  }

  // s3_secret_id - computed: false, optional: true, required: false
  private _s3SecretId?: string; 
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }
  public set s3SecretId(value: string) {
    this._s3SecretId = value;
  }
  public resetS3SecretId() {
    this._s3SecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretIdInput() {
    return this._s3SecretId;
  }

  // s3_secret_key - computed: false, optional: true, required: false
  private _s3SecretKey?: string; 
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
  public set s3SecretKey(value: string) {
    this._s3SecretKey = value;
  }
  public resetS3SecretKey() {
    this._s3SecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretKeyInput() {
    return this._s3SecretKey;
  }
}
export interface MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorage {
  /**
  * The storage type for a media processing output file. Valid values: `COS`: Tencent Cloud COS `AWS-S3`: AWS S3. This type is only supported for AWS tasks, and the output bucket must be in the same region as the bucket of the source file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#type MpsSchedule#type}
  */
  readonly type: string;
  /**
  * cos_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#cos_output_storage MpsSchedule#cos_output_storage}
  */
  readonly cosOutputStorage?: MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageCosOutputStorage;
  /**
  * s3_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_output_storage MpsSchedule#s3_output_storage}
  */
  readonly s3OutputStorage?: MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageS3OutputStorage;
}

export function mpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageToTerraform(struct?: MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageOutputReference | MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_output_storage: mpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageCosOutputStorageToTerraform(struct!.cosOutputStorage),
    s3_output_storage: mpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageS3OutputStorageToTerraform(struct!.s3OutputStorage),
  }
}


export function mpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageToHclTerraform(struct?: MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageOutputReference | MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos_output_storage: {
      value: mpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageCosOutputStorageToHclTerraform(struct!.cosOutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageCosOutputStorageList",
    },
    s3_output_storage: {
      value: mpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageS3OutputStorageToHclTerraform(struct!.s3OutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageS3OutputStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cosOutputStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosOutputStorage = this._cosOutputStorage?.internalValue;
    }
    if (this._s3OutputStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputStorage = this._s3OutputStorage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._cosOutputStorage.internalValue = undefined;
      this._s3OutputStorage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._cosOutputStorage.internalValue = value.cosOutputStorage;
      this._s3OutputStorage.internalValue = value.s3OutputStorage;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // cos_output_storage - computed: false, optional: true, required: false
  private _cosOutputStorage = new MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageCosOutputStorageOutputReference(this, "cos_output_storage");
  public get cosOutputStorage() {
    return this._cosOutputStorage;
  }
  public putCosOutputStorage(value: MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageCosOutputStorage) {
    this._cosOutputStorage.internalValue = value;
  }
  public resetCosOutputStorage() {
    this._cosOutputStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosOutputStorageInput() {
    return this._cosOutputStorage.internalValue;
  }

  // s3_output_storage - computed: false, optional: true, required: false
  private _s3OutputStorage = new MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageS3OutputStorageOutputReference(this, "s3_output_storage");
  public get s3OutputStorage() {
    return this._s3OutputStorage;
  }
  public putS3OutputStorage(value: MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageS3OutputStorage) {
    this._s3OutputStorage.internalValue = value;
  }
  public resetS3OutputStorage() {
    this._s3OutputStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputStorageInput() {
    return this._s3OutputStorage.internalValue;
  }
}
export interface MpsScheduleActivitiesActivityParaImageSpriteTask {
  /**
  * ID of an image sprite generating template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#definition MpsSchedule#definition}
  */
  readonly definition: number;
  /**
  * Output path to a generated image sprite file, which can be a relative path or an absolute path. If this parameter is left empty, the following relative path will be used by default: `{inputName}_imageSprite_{definition}_{number}.{format}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#output_object_path MpsSchedule#output_object_path}
  */
  readonly outputObjectPath?: string;
  /**
  * Output path to the WebVTT file after an image sprite is generated, which can only be a relative path. If this parameter is left empty, the following relative path will be used by default: `{inputName}_imageSprite_{definition}.{format}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#web_vtt_object_name MpsSchedule#web_vtt_object_name}
  */
  readonly webVttObjectName?: string;
  /**
  * object_number_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#object_number_format MpsSchedule#object_number_format}
  */
  readonly objectNumberFormat?: MpsScheduleActivitiesActivityParaImageSpriteTaskObjectNumberFormat;
  /**
  * output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#output_storage MpsSchedule#output_storage}
  */
  readonly outputStorage?: MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorage;
}

export function mpsScheduleActivitiesActivityParaImageSpriteTaskToTerraform(struct?: MpsScheduleActivitiesActivityParaImageSpriteTaskOutputReference | MpsScheduleActivitiesActivityParaImageSpriteTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.numberToTerraform(struct!.definition),
    output_object_path: cdktf.stringToTerraform(struct!.outputObjectPath),
    web_vtt_object_name: cdktf.stringToTerraform(struct!.webVttObjectName),
    object_number_format: mpsScheduleActivitiesActivityParaImageSpriteTaskObjectNumberFormatToTerraform(struct!.objectNumberFormat),
    output_storage: mpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageToTerraform(struct!.outputStorage),
  }
}


export function mpsScheduleActivitiesActivityParaImageSpriteTaskToHclTerraform(struct?: MpsScheduleActivitiesActivityParaImageSpriteTaskOutputReference | MpsScheduleActivitiesActivityParaImageSpriteTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.numberToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    output_object_path: {
      value: cdktf.stringToHclTerraform(struct!.outputObjectPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_vtt_object_name: {
      value: cdktf.stringToHclTerraform(struct!.webVttObjectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_number_format: {
      value: mpsScheduleActivitiesActivityParaImageSpriteTaskObjectNumberFormatToHclTerraform(struct!.objectNumberFormat),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaImageSpriteTaskObjectNumberFormatList",
    },
    output_storage: {
      value: mpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageToHclTerraform(struct!.outputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaImageSpriteTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaImageSpriteTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._outputObjectPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputObjectPath = this._outputObjectPath;
    }
    if (this._webVttObjectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.webVttObjectName = this._webVttObjectName;
    }
    if (this._objectNumberFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectNumberFormat = this._objectNumberFormat?.internalValue;
    }
    if (this._outputStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputStorage = this._outputStorage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaImageSpriteTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._definition = undefined;
      this._outputObjectPath = undefined;
      this._webVttObjectName = undefined;
      this._objectNumberFormat.internalValue = undefined;
      this._outputStorage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._definition = value.definition;
      this._outputObjectPath = value.outputObjectPath;
      this._webVttObjectName = value.webVttObjectName;
      this._objectNumberFormat.internalValue = value.objectNumberFormat;
      this._outputStorage.internalValue = value.outputStorage;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: number; 
  public get definition() {
    return this.getNumberAttribute('definition');
  }
  public set definition(value: number) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // output_object_path - computed: false, optional: true, required: false
  private _outputObjectPath?: string; 
  public get outputObjectPath() {
    return this.getStringAttribute('output_object_path');
  }
  public set outputObjectPath(value: string) {
    this._outputObjectPath = value;
  }
  public resetOutputObjectPath() {
    this._outputObjectPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputObjectPathInput() {
    return this._outputObjectPath;
  }

  // web_vtt_object_name - computed: false, optional: true, required: false
  private _webVttObjectName?: string; 
  public get webVttObjectName() {
    return this.getStringAttribute('web_vtt_object_name');
  }
  public set webVttObjectName(value: string) {
    this._webVttObjectName = value;
  }
  public resetWebVttObjectName() {
    this._webVttObjectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webVttObjectNameInput() {
    return this._webVttObjectName;
  }

  // object_number_format - computed: false, optional: true, required: false
  private _objectNumberFormat = new MpsScheduleActivitiesActivityParaImageSpriteTaskObjectNumberFormatOutputReference(this, "object_number_format");
  public get objectNumberFormat() {
    return this._objectNumberFormat;
  }
  public putObjectNumberFormat(value: MpsScheduleActivitiesActivityParaImageSpriteTaskObjectNumberFormat) {
    this._objectNumberFormat.internalValue = value;
  }
  public resetObjectNumberFormat() {
    this._objectNumberFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNumberFormatInput() {
    return this._objectNumberFormat.internalValue;
  }

  // output_storage - computed: false, optional: true, required: false
  private _outputStorage = new MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorageOutputReference(this, "output_storage");
  public get outputStorage() {
    return this._outputStorage;
  }
  public putOutputStorage(value: MpsScheduleActivitiesActivityParaImageSpriteTaskOutputStorage) {
    this._outputStorage.internalValue = value;
  }
  public resetOutputStorage() {
    this._outputStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputStorageInput() {
    return this._outputStorage.internalValue;
  }
}
export interface MpsScheduleActivitiesActivityParaSampleSnapshotTaskObjectNumberFormat {
  /**
  * Increment of the `{number}` variable. Default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#increment MpsSchedule#increment}
  */
  readonly increment?: number;
  /**
  * Start value of the `{number}` variable. Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#initial_value MpsSchedule#initial_value}
  */
  readonly initialValue?: number;
  /**
  * Minimum length of the `{number}` variable. A placeholder will be used if the variable length is below the minimum requirement. Default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#min_length MpsSchedule#min_length}
  */
  readonly minLength?: number;
  /**
  * Placeholder used when the `{number}` variable length is below the minimum requirement. Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#place_holder MpsSchedule#place_holder}
  */
  readonly placeHolder?: string;
}

export function mpsScheduleActivitiesActivityParaSampleSnapshotTaskObjectNumberFormatToTerraform(struct?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskObjectNumberFormatOutputReference | MpsScheduleActivitiesActivityParaSampleSnapshotTaskObjectNumberFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    increment: cdktf.numberToTerraform(struct!.increment),
    initial_value: cdktf.numberToTerraform(struct!.initialValue),
    min_length: cdktf.numberToTerraform(struct!.minLength),
    place_holder: cdktf.stringToTerraform(struct!.placeHolder),
  }
}


export function mpsScheduleActivitiesActivityParaSampleSnapshotTaskObjectNumberFormatToHclTerraform(struct?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskObjectNumberFormatOutputReference | MpsScheduleActivitiesActivityParaSampleSnapshotTaskObjectNumberFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    increment: {
      value: cdktf.numberToHclTerraform(struct!.increment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_value: {
      value: cdktf.numberToHclTerraform(struct!.initialValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_length: {
      value: cdktf.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    place_holder: {
      value: cdktf.stringToHclTerraform(struct!.placeHolder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaSampleSnapshotTaskObjectNumberFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaSampleSnapshotTaskObjectNumberFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._increment !== undefined) {
      hasAnyValues = true;
      internalValueResult.increment = this._increment;
    }
    if (this._initialValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialValue = this._initialValue;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    if (this._placeHolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.placeHolder = this._placeHolder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaSampleSnapshotTaskObjectNumberFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._increment = undefined;
      this._initialValue = undefined;
      this._minLength = undefined;
      this._placeHolder = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._increment = value.increment;
      this._initialValue = value.initialValue;
      this._minLength = value.minLength;
      this._placeHolder = value.placeHolder;
    }
  }

  // increment - computed: false, optional: true, required: false
  private _increment?: number; 
  public get increment() {
    return this.getNumberAttribute('increment');
  }
  public set increment(value: number) {
    this._increment = value;
  }
  public resetIncrement() {
    this._increment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementInput() {
    return this._increment;
  }

  // initial_value - computed: false, optional: true, required: false
  private _initialValue?: number; 
  public get initialValue() {
    return this.getNumberAttribute('initial_value');
  }
  public set initialValue(value: number) {
    this._initialValue = value;
  }
  public resetInitialValue() {
    this._initialValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialValueInput() {
    return this._initialValue;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // place_holder - computed: false, optional: true, required: false
  private _placeHolder?: string; 
  public get placeHolder() {
    return this.getStringAttribute('place_holder');
  }
  public set placeHolder(value: string) {
    this._placeHolder = value;
  }
  public resetPlaceHolder() {
    this._placeHolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placeHolderInput() {
    return this._placeHolder;
  }
}
export interface MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageCosOutputStorage {
  /**
  * The bucket to which the output file of media processing is saved, such as `TopRankVideo-125xxx88`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#bucket MpsSchedule#bucket}
  */
  readonly bucket?: string;
  /**
  * The region of the output bucket, such as `ap-chongqing`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#region MpsSchedule#region}
  */
  readonly region?: string;
}

export function mpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageCosOutputStorageToTerraform(struct?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageCosOutputStorageOutputReference | MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function mpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageCosOutputStorageToHclTerraform(struct?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageCosOutputStorageOutputReference | MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageCosOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageCosOutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageCosOutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._region = value.region;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageS3OutputStorage {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_bucket MpsSchedule#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_region MpsSchedule#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_id MpsSchedule#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_key MpsSchedule#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageS3OutputStorageToTerraform(struct?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageS3OutputStorageOutputReference | MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageS3OutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    s3_region: cdktf.stringToTerraform(struct!.s3Region),
    s3_secret_id: cdktf.stringToTerraform(struct!.s3SecretId),
    s3_secret_key: cdktf.stringToTerraform(struct!.s3SecretKey),
  }
}


export function mpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageS3OutputStorageToHclTerraform(struct?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageS3OutputStorageOutputReference | MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageS3OutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_bucket: {
      value: cdktf.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_region: {
      value: cdktf.stringToHclTerraform(struct!.s3Region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageS3OutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageS3OutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Region !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Region = this._s3Region;
    }
    if (this._s3SecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretId = this._s3SecretId;
    }
    if (this._s3SecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretKey = this._s3SecretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageS3OutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Bucket = undefined;
      this._s3Region = undefined;
      this._s3SecretId = undefined;
      this._s3SecretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Bucket = value.s3Bucket;
      this._s3Region = value.s3Region;
      this._s3SecretId = value.s3SecretId;
      this._s3SecretKey = value.s3SecretKey;
    }
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_region - computed: false, optional: false, required: true
  private _s3Region?: string; 
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }
  public set s3Region(value: string) {
    this._s3Region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RegionInput() {
    return this._s3Region;
  }

  // s3_secret_id - computed: false, optional: true, required: false
  private _s3SecretId?: string; 
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }
  public set s3SecretId(value: string) {
    this._s3SecretId = value;
  }
  public resetS3SecretId() {
    this._s3SecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretIdInput() {
    return this._s3SecretId;
  }

  // s3_secret_key - computed: false, optional: true, required: false
  private _s3SecretKey?: string; 
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
  public set s3SecretKey(value: string) {
    this._s3SecretKey = value;
  }
  public resetS3SecretKey() {
    this._s3SecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretKeyInput() {
    return this._s3SecretKey;
  }
}
export interface MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorage {
  /**
  * The storage type for a media processing output file. Valid values: `COS`: Tencent Cloud COS `AWS-S3`: AWS S3. This type is only supported for AWS tasks, and the output bucket must be in the same region as the bucket of the source file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#type MpsSchedule#type}
  */
  readonly type: string;
  /**
  * cos_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#cos_output_storage MpsSchedule#cos_output_storage}
  */
  readonly cosOutputStorage?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageCosOutputStorage;
  /**
  * s3_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_output_storage MpsSchedule#s3_output_storage}
  */
  readonly s3OutputStorage?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageS3OutputStorage;
}

export function mpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageToTerraform(struct?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageOutputReference | MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_output_storage: mpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageCosOutputStorageToTerraform(struct!.cosOutputStorage),
    s3_output_storage: mpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageS3OutputStorageToTerraform(struct!.s3OutputStorage),
  }
}


export function mpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageToHclTerraform(struct?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageOutputReference | MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos_output_storage: {
      value: mpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageCosOutputStorageToHclTerraform(struct!.cosOutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageCosOutputStorageList",
    },
    s3_output_storage: {
      value: mpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageS3OutputStorageToHclTerraform(struct!.s3OutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageS3OutputStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cosOutputStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosOutputStorage = this._cosOutputStorage?.internalValue;
    }
    if (this._s3OutputStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputStorage = this._s3OutputStorage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._cosOutputStorage.internalValue = undefined;
      this._s3OutputStorage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._cosOutputStorage.internalValue = value.cosOutputStorage;
      this._s3OutputStorage.internalValue = value.s3OutputStorage;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // cos_output_storage - computed: false, optional: true, required: false
  private _cosOutputStorage = new MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageCosOutputStorageOutputReference(this, "cos_output_storage");
  public get cosOutputStorage() {
    return this._cosOutputStorage;
  }
  public putCosOutputStorage(value: MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageCosOutputStorage) {
    this._cosOutputStorage.internalValue = value;
  }
  public resetCosOutputStorage() {
    this._cosOutputStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosOutputStorageInput() {
    return this._cosOutputStorage.internalValue;
  }

  // s3_output_storage - computed: false, optional: true, required: false
  private _s3OutputStorage = new MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageS3OutputStorageOutputReference(this, "s3_output_storage");
  public get s3OutputStorage() {
    return this._s3OutputStorage;
  }
  public putS3OutputStorage(value: MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageS3OutputStorage) {
    this._s3OutputStorage.internalValue = value;
  }
  public resetS3OutputStorage() {
    this._s3OutputStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputStorageInput() {
    return this._s3OutputStorage.internalValue;
  }
}
export interface MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo {
  /**
  * The COS bucket of the object to process, such as `TopRankVideo-125xxx88`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#bucket MpsSchedule#bucket}
  */
  readonly bucket: string;
  /**
  * The path of the object to process, such as `/movie/201907/WildAnimal.mov`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#object MpsSchedule#object}
  */
  readonly object: string;
  /**
  * The region of the COS bucket, such as `ap-chongqing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#region MpsSchedule#region}
  */
  readonly region: string;
}

export function mpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToTerraform(struct?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference | MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    object: cdktf.stringToTerraform(struct!.object),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function mpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToHclTerraform(struct?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference | MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._object = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._object = value.object;
      this._region = value.region;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_bucket MpsSchedule#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The path of the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_object MpsSchedule#s3_object}
  */
  readonly s3Object: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_region MpsSchedule#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_id MpsSchedule#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_key MpsSchedule#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToTerraform(struct?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference | MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    s3_object: cdktf.stringToTerraform(struct!.s3Object),
    s3_region: cdktf.stringToTerraform(struct!.s3Region),
    s3_secret_id: cdktf.stringToTerraform(struct!.s3SecretId),
    s3_secret_key: cdktf.stringToTerraform(struct!.s3SecretKey),
  }
}


export function mpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToHclTerraform(struct?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference | MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_bucket: {
      value: cdktf.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_object: {
      value: cdktf.stringToHclTerraform(struct!.s3Object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_region: {
      value: cdktf.stringToHclTerraform(struct!.s3Region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Object !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Object = this._s3Object;
    }
    if (this._s3Region !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Region = this._s3Region;
    }
    if (this._s3SecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretId = this._s3SecretId;
    }
    if (this._s3SecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretKey = this._s3SecretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Bucket = undefined;
      this._s3Object = undefined;
      this._s3Region = undefined;
      this._s3SecretId = undefined;
      this._s3SecretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Bucket = value.s3Bucket;
      this._s3Object = value.s3Object;
      this._s3Region = value.s3Region;
      this._s3SecretId = value.s3SecretId;
      this._s3SecretKey = value.s3SecretKey;
    }
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_object - computed: false, optional: false, required: true
  private _s3Object?: string; 
  public get s3Object() {
    return this.getStringAttribute('s3_object');
  }
  public set s3Object(value: string) {
    this._s3Object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectInput() {
    return this._s3Object;
  }

  // s3_region - computed: false, optional: false, required: true
  private _s3Region?: string; 
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }
  public set s3Region(value: string) {
    this._s3Region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RegionInput() {
    return this._s3Region;
  }

  // s3_secret_id - computed: false, optional: true, required: false
  private _s3SecretId?: string; 
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }
  public set s3SecretId(value: string) {
    this._s3SecretId = value;
  }
  public resetS3SecretId() {
    this._s3SecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretIdInput() {
    return this._s3SecretId;
  }

  // s3_secret_key - computed: false, optional: true, required: false
  private _s3SecretKey?: string; 
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
  public set s3SecretKey(value: string) {
    this._s3SecretKey = value;
  }
  public resetS3SecretKey() {
    this._s3SecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretKeyInput() {
    return this._s3SecretKey;
  }
}
export interface MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo {
  /**
  * URL of a video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#url MpsSchedule#url}
  */
  readonly url: string;
}

export function mpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToTerraform(struct?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference | MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function mpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToHclTerraform(struct?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference | MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContent {
  /**
  * The input type. Valid values: `COS`: A COS bucket address.  `URL`: A URL.  `AWS-S3`: An AWS S3 bucket address. Currently, this type is only supported for transcoding tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#type MpsSchedule#type}
  */
  readonly type: string;
  /**
  * cos_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#cos_input_info MpsSchedule#cos_input_info}
  */
  readonly cosInputInfo?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo;
  /**
  * s3_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_input_info MpsSchedule#s3_input_info}
  */
  readonly s3InputInfo?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo;
  /**
  * url_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#url_input_info MpsSchedule#url_input_info}
  */
  readonly urlInputInfo?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo;
}

export function mpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentToTerraform(struct?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentOutputReference | MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_input_info: mpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToTerraform(struct!.cosInputInfo),
    s3_input_info: mpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToTerraform(struct!.s3InputInfo),
    url_input_info: mpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToTerraform(struct!.urlInputInfo),
  }
}


export function mpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentToHclTerraform(struct?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentOutputReference | MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos_input_info: {
      value: mpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToHclTerraform(struct!.cosInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoList",
    },
    s3_input_info: {
      value: mpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToHclTerraform(struct!.s3InputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoList",
    },
    url_input_info: {
      value: mpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToHclTerraform(struct!.urlInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cosInputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosInputInfo = this._cosInputInfo?.internalValue;
    }
    if (this._s3InputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3InputInfo = this._s3InputInfo?.internalValue;
    }
    if (this._urlInputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlInputInfo = this._urlInputInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._cosInputInfo.internalValue = undefined;
      this._s3InputInfo.internalValue = undefined;
      this._urlInputInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._cosInputInfo.internalValue = value.cosInputInfo;
      this._s3InputInfo.internalValue = value.s3InputInfo;
      this._urlInputInfo.internalValue = value.urlInputInfo;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // cos_input_info - computed: false, optional: true, required: false
  private _cosInputInfo = new MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference(this, "cos_input_info");
  public get cosInputInfo() {
    return this._cosInputInfo;
  }
  public putCosInputInfo(value: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo) {
    this._cosInputInfo.internalValue = value;
  }
  public resetCosInputInfo() {
    this._cosInputInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosInputInfoInput() {
    return this._cosInputInfo.internalValue;
  }

  // s3_input_info - computed: false, optional: true, required: false
  private _s3InputInfo = new MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference(this, "s3_input_info");
  public get s3InputInfo() {
    return this._s3InputInfo;
  }
  public putS3InputInfo(value: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo) {
    this._s3InputInfo.internalValue = value;
  }
  public resetS3InputInfo() {
    this._s3InputInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3InputInfoInput() {
    return this._s3InputInfo.internalValue;
  }

  // url_input_info - computed: false, optional: true, required: false
  private _urlInputInfo = new MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference(this, "url_input_info");
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
  public putUrlInputInfo(value: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo) {
    this._urlInputInfo.internalValue = value;
  }
  public resetUrlInputInfo() {
    this._urlInputInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInputInfoInput() {
    return this._urlInputInfo.internalValue;
  }
}
export interface MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplate {
  /**
  * Watermark height. % and px formats are supported: If the string ends in %, the `Height` of the watermark will be the specified percentage of the video height; for example, `10%` means that `Height` is 10% of the video height; If the string ends in px, the `Height` of the watermark will be in px; for example, `100px` means that `Height` is 100 px.Default value: 0 px, which means that `Height` will be proportionally scaled according to the aspect ratio of the original watermark image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#height MpsSchedule#height}
  */
  readonly height?: string;
  /**
  * Repeat type of an animated watermark. Valid values: `once`: no longer appears after watermark playback ends. `repeat_last_frame`: stays on the last frame after watermark playback ends. `repeat` (default): repeats the playback until the video ends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#repeat_type MpsSchedule#repeat_type}
  */
  readonly repeatType?: string;
  /**
  * Watermark width. % and px formats are supported: If the string ends in %, the `Width` of the watermark will be the specified percentage of the video width; for example, `10%` means that `Width` is 10% of the video width; If the string ends in px, the `Width` of the watermark will be in px; for example, `100px` means that `Width` is 100 px.Default value: 10%.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#width MpsSchedule#width}
  */
  readonly width?: string;
  /**
  * image_content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#image_content MpsSchedule#image_content}
  */
  readonly imageContent: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContent;
}

export function mpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateToTerraform(struct?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateOutputReference | MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.stringToTerraform(struct!.height),
    repeat_type: cdktf.stringToTerraform(struct!.repeatType),
    width: cdktf.stringToTerraform(struct!.width),
    image_content: mpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentToTerraform(struct!.imageContent),
  }
}


export function mpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateToHclTerraform(struct?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateOutputReference | MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    height: {
      value: cdktf.stringToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repeat_type: {
      value: cdktf.stringToHclTerraform(struct!.repeatType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.stringToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_content: {
      value: mpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentToHclTerraform(struct!.imageContent),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._repeatType !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatType = this._repeatType;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._imageContent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageContent = this._imageContent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._height = undefined;
      this._repeatType = undefined;
      this._width = undefined;
      this._imageContent.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._height = value.height;
      this._repeatType = value.repeatType;
      this._width = value.width;
      this._imageContent.internalValue = value.imageContent;
    }
  }

  // height - computed: false, optional: true, required: false
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // repeat_type - computed: false, optional: true, required: false
  private _repeatType?: string; 
  public get repeatType() {
    return this.getStringAttribute('repeat_type');
  }
  public set repeatType(value: string) {
    this._repeatType = value;
  }
  public resetRepeatType() {
    this._repeatType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatTypeInput() {
    return this._repeatType;
  }

  // width - computed: false, optional: true, required: false
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // image_content - computed: false, optional: false, required: true
  private _imageContent = new MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContentOutputReference(this, "image_content");
  public get imageContent() {
    return this._imageContent;
  }
  public putImageContent(value: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateImageContent) {
    this._imageContent.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageContentInput() {
    return this._imageContent.internalValue;
  }
}
export interface MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameter {
  /**
  * Origin position, which currently can only be: TopLeft: the origin of coordinates is in the top-left corner of the video, and the origin of the watermark is in the top-left corner of the image or text.Default value: TopLeft.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#coordinate_origin MpsSchedule#coordinate_origin}
  */
  readonly coordinateOrigin?: string;
  /**
  * Watermark type. Valid values: image: image watermark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#type MpsSchedule#type}
  */
  readonly type: string;
  /**
  * The horizontal position of the origin of the watermark relative to the origin of coordinates of the video. % and px formats are supported: If the string ends in %, the `XPos` of the watermark will be the specified percentage of the video width; for example, `10%` means that `XPos` is 10% of the video width; If the string ends in px, the `XPos` of the watermark will be the specified px; for example, `100px` means that `XPos` is 100 px.Default value: 0 px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#x_pos MpsSchedule#x_pos}
  */
  readonly xPos?: string;
  /**
  * The vertical position of the origin of the watermark relative to the origin of coordinates of the video. % and px formats are supported: If the string ends in %, the `YPos` of the watermark will be the specified percentage of the video height; for example, `10%` means that `YPos` is 10% of the video height; If the string ends in px, the `YPos` of the watermark will be the specified px; for example, `100px` means that `YPos` is 100 px.Default value: 0 px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#y_pos MpsSchedule#y_pos}
  */
  readonly yPos?: string;
  /**
  * image_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#image_template MpsSchedule#image_template}
  */
  readonly imageTemplate?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplate;
}

export function mpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterToTerraform(struct?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterOutputReference | MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    coordinate_origin: cdktf.stringToTerraform(struct!.coordinateOrigin),
    type: cdktf.stringToTerraform(struct!.type),
    x_pos: cdktf.stringToTerraform(struct!.xPos),
    y_pos: cdktf.stringToTerraform(struct!.yPos),
    image_template: mpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateToTerraform(struct!.imageTemplate),
  }
}


export function mpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterToHclTerraform(struct?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterOutputReference | MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    coordinate_origin: {
      value: cdktf.stringToHclTerraform(struct!.coordinateOrigin),
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
    x_pos: {
      value: cdktf.stringToHclTerraform(struct!.xPos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y_pos: {
      value: cdktf.stringToHclTerraform(struct!.yPos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_template: {
      value: mpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateToHclTerraform(struct!.imageTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coordinateOrigin !== undefined) {
      hasAnyValues = true;
      internalValueResult.coordinateOrigin = this._coordinateOrigin;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._xPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.xPos = this._xPos;
    }
    if (this._yPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.yPos = this._yPos;
    }
    if (this._imageTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageTemplate = this._imageTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coordinateOrigin = undefined;
      this._type = undefined;
      this._xPos = undefined;
      this._yPos = undefined;
      this._imageTemplate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coordinateOrigin = value.coordinateOrigin;
      this._type = value.type;
      this._xPos = value.xPos;
      this._yPos = value.yPos;
      this._imageTemplate.internalValue = value.imageTemplate;
    }
  }

  // coordinate_origin - computed: false, optional: true, required: false
  private _coordinateOrigin?: string; 
  public get coordinateOrigin() {
    return this.getStringAttribute('coordinate_origin');
  }
  public set coordinateOrigin(value: string) {
    this._coordinateOrigin = value;
  }
  public resetCoordinateOrigin() {
    this._coordinateOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinateOriginInput() {
    return this._coordinateOrigin;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // x_pos - computed: false, optional: true, required: false
  private _xPos?: string; 
  public get xPos() {
    return this.getStringAttribute('x_pos');
  }
  public set xPos(value: string) {
    this._xPos = value;
  }
  public resetXPos() {
    this._xPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xPosInput() {
    return this._xPos;
  }

  // y_pos - computed: false, optional: true, required: false
  private _yPos?: string; 
  public get yPos() {
    return this.getStringAttribute('y_pos');
  }
  public set yPos(value: string) {
    this._yPos = value;
  }
  public resetYPos() {
    this._yPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yPosInput() {
    return this._yPos;
  }

  // image_template - computed: false, optional: true, required: false
  private _imageTemplate = new MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplateOutputReference(this, "image_template");
  public get imageTemplate() {
    return this._imageTemplate;
  }
  public putImageTemplate(value: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterImageTemplate) {
    this._imageTemplate.internalValue = value;
  }
  public resetImageTemplate() {
    this._imageTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTemplateInput() {
    return this._imageTemplate.internalValue;
  }
}
export interface MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSet {
  /**
  * ID of a watermarking template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#definition MpsSchedule#definition}
  */
  readonly definition: number;
  /**
  * End time offset of a watermark in seconds. If this parameter is left empty or 0 is entered, the watermark will exist till the last video frame; If this value is greater than 0 (e.g., n), the watermark will exist till second n; If this value is smaller than 0 (e.g., -n), the watermark will exist till second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#end_time_offset MpsSchedule#end_time_offset}
  */
  readonly endTimeOffset?: number;
  /**
  * Start time offset of a watermark in seconds. If this parameter is left empty or 0 is entered, the watermark will appear upon the first video frame. If this parameter is left empty or 0 is entered, the watermark will appear upon the first video frame; If this value is greater than 0 (e.g., n), the watermark will appear at second n after the first video frame; If this value is smaller than 0 (e.g., -n), the watermark will appear at second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#start_time_offset MpsSchedule#start_time_offset}
  */
  readonly startTimeOffset?: number;
  /**
  * SVG content of up to 2,000,000 characters. This field is required only when the watermark type is `SVG`.SVG watermark is not available for screenshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#svg_content MpsSchedule#svg_content}
  */
  readonly svgContent?: string;
  /**
  * Text content of up to 100 characters. This field is required only when the watermark type is text.Text watermark is not available for screenshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#text_content MpsSchedule#text_content}
  */
  readonly textContent?: string;
  /**
  * raw_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#raw_parameter MpsSchedule#raw_parameter}
  */
  readonly rawParameter?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameter;
}

export function mpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetToTerraform(struct?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.numberToTerraform(struct!.definition),
    end_time_offset: cdktf.numberToTerraform(struct!.endTimeOffset),
    start_time_offset: cdktf.numberToTerraform(struct!.startTimeOffset),
    svg_content: cdktf.stringToTerraform(struct!.svgContent),
    text_content: cdktf.stringToTerraform(struct!.textContent),
    raw_parameter: mpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterToTerraform(struct!.rawParameter),
  }
}


export function mpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetToHclTerraform(struct?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.numberToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_time_offset: {
      value: cdktf.numberToHclTerraform(struct!.endTimeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time_offset: {
      value: cdktf.numberToHclTerraform(struct!.startTimeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    svg_content: {
      value: cdktf.stringToHclTerraform(struct!.svgContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_content: {
      value: cdktf.stringToHclTerraform(struct!.textContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw_parameter: {
      value: mpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterToHclTerraform(struct!.rawParameter),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._endTimeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTimeOffset = this._endTimeOffset;
    }
    if (this._startTimeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimeOffset = this._startTimeOffset;
    }
    if (this._svgContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.svgContent = this._svgContent;
    }
    if (this._textContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.textContent = this._textContent;
    }
    if (this._rawParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawParameter = this._rawParameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._endTimeOffset = undefined;
      this._startTimeOffset = undefined;
      this._svgContent = undefined;
      this._textContent = undefined;
      this._rawParameter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._endTimeOffset = value.endTimeOffset;
      this._startTimeOffset = value.startTimeOffset;
      this._svgContent = value.svgContent;
      this._textContent = value.textContent;
      this._rawParameter.internalValue = value.rawParameter;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: number; 
  public get definition() {
    return this.getNumberAttribute('definition');
  }
  public set definition(value: number) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // end_time_offset - computed: false, optional: true, required: false
  private _endTimeOffset?: number; 
  public get endTimeOffset() {
    return this.getNumberAttribute('end_time_offset');
  }
  public set endTimeOffset(value: number) {
    this._endTimeOffset = value;
  }
  public resetEndTimeOffset() {
    this._endTimeOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeOffsetInput() {
    return this._endTimeOffset;
  }

  // start_time_offset - computed: false, optional: true, required: false
  private _startTimeOffset?: number; 
  public get startTimeOffset() {
    return this.getNumberAttribute('start_time_offset');
  }
  public set startTimeOffset(value: number) {
    this._startTimeOffset = value;
  }
  public resetStartTimeOffset() {
    this._startTimeOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeOffsetInput() {
    return this._startTimeOffset;
  }

  // svg_content - computed: false, optional: true, required: false
  private _svgContent?: string; 
  public get svgContent() {
    return this.getStringAttribute('svg_content');
  }
  public set svgContent(value: string) {
    this._svgContent = value;
  }
  public resetSvgContent() {
    this._svgContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svgContentInput() {
    return this._svgContent;
  }

  // text_content - computed: false, optional: true, required: false
  private _textContent?: string; 
  public get textContent() {
    return this.getStringAttribute('text_content');
  }
  public set textContent(value: string) {
    this._textContent = value;
  }
  public resetTextContent() {
    this._textContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textContentInput() {
    return this._textContent;
  }

  // raw_parameter - computed: false, optional: true, required: false
  private _rawParameter = new MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameterOutputReference(this, "raw_parameter");
  public get rawParameter() {
    return this._rawParameter;
  }
  public putRawParameter(value: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetRawParameter) {
    this._rawParameter.internalValue = value;
  }
  public resetRawParameter() {
    this._rawParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawParameterInput() {
    return this._rawParameter.internalValue;
  }
}

export class MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetList extends cdktf.ComplexList {
  public internalValue? : MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSet[] | cdktf.IResolvable

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
  public get(index: number): MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetOutputReference {
    return new MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsScheduleActivitiesActivityParaSampleSnapshotTask {
  /**
  * Sampled screencapturing template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#definition MpsSchedule#definition}
  */
  readonly definition: number;
  /**
  * Output path to a generated sampled screenshot, which can be a relative path or an absolute path. If this parameter is left empty, the following relative path will be used by default: `{inputName}_sampleSnapshot_{definition}_{number}.{format}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#output_object_path MpsSchedule#output_object_path}
  */
  readonly outputObjectPath?: string;
  /**
  * object_number_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#object_number_format MpsSchedule#object_number_format}
  */
  readonly objectNumberFormat?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskObjectNumberFormat;
  /**
  * output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#output_storage MpsSchedule#output_storage}
  */
  readonly outputStorage?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorage;
  /**
  * watermark_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#watermark_set MpsSchedule#watermark_set}
  */
  readonly watermarkSet?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSet[] | cdktf.IResolvable;
}

export function mpsScheduleActivitiesActivityParaSampleSnapshotTaskToTerraform(struct?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputReference | MpsScheduleActivitiesActivityParaSampleSnapshotTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.numberToTerraform(struct!.definition),
    output_object_path: cdktf.stringToTerraform(struct!.outputObjectPath),
    object_number_format: mpsScheduleActivitiesActivityParaSampleSnapshotTaskObjectNumberFormatToTerraform(struct!.objectNumberFormat),
    output_storage: mpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageToTerraform(struct!.outputStorage),
    watermark_set: cdktf.listMapper(mpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetToTerraform, true)(struct!.watermarkSet),
  }
}


export function mpsScheduleActivitiesActivityParaSampleSnapshotTaskToHclTerraform(struct?: MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputReference | MpsScheduleActivitiesActivityParaSampleSnapshotTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.numberToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    output_object_path: {
      value: cdktf.stringToHclTerraform(struct!.outputObjectPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_number_format: {
      value: mpsScheduleActivitiesActivityParaSampleSnapshotTaskObjectNumberFormatToHclTerraform(struct!.objectNumberFormat),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaSampleSnapshotTaskObjectNumberFormatList",
    },
    output_storage: {
      value: mpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageToHclTerraform(struct!.outputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageList",
    },
    watermark_set: {
      value: cdktf.listMapperHcl(mpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetToHclTerraform, true)(struct!.watermarkSet),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaSampleSnapshotTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._outputObjectPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputObjectPath = this._outputObjectPath;
    }
    if (this._objectNumberFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectNumberFormat = this._objectNumberFormat?.internalValue;
    }
    if (this._outputStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputStorage = this._outputStorage?.internalValue;
    }
    if (this._watermarkSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.watermarkSet = this._watermarkSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaSampleSnapshotTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._definition = undefined;
      this._outputObjectPath = undefined;
      this._objectNumberFormat.internalValue = undefined;
      this._outputStorage.internalValue = undefined;
      this._watermarkSet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._definition = value.definition;
      this._outputObjectPath = value.outputObjectPath;
      this._objectNumberFormat.internalValue = value.objectNumberFormat;
      this._outputStorage.internalValue = value.outputStorage;
      this._watermarkSet.internalValue = value.watermarkSet;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: number; 
  public get definition() {
    return this.getNumberAttribute('definition');
  }
  public set definition(value: number) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // output_object_path - computed: false, optional: true, required: false
  private _outputObjectPath?: string; 
  public get outputObjectPath() {
    return this.getStringAttribute('output_object_path');
  }
  public set outputObjectPath(value: string) {
    this._outputObjectPath = value;
  }
  public resetOutputObjectPath() {
    this._outputObjectPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputObjectPathInput() {
    return this._outputObjectPath;
  }

  // object_number_format - computed: false, optional: true, required: false
  private _objectNumberFormat = new MpsScheduleActivitiesActivityParaSampleSnapshotTaskObjectNumberFormatOutputReference(this, "object_number_format");
  public get objectNumberFormat() {
    return this._objectNumberFormat;
  }
  public putObjectNumberFormat(value: MpsScheduleActivitiesActivityParaSampleSnapshotTaskObjectNumberFormat) {
    this._objectNumberFormat.internalValue = value;
  }
  public resetObjectNumberFormat() {
    this._objectNumberFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNumberFormatInput() {
    return this._objectNumberFormat.internalValue;
  }

  // output_storage - computed: false, optional: true, required: false
  private _outputStorage = new MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorageOutputReference(this, "output_storage");
  public get outputStorage() {
    return this._outputStorage;
  }
  public putOutputStorage(value: MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputStorage) {
    this._outputStorage.internalValue = value;
  }
  public resetOutputStorage() {
    this._outputStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputStorageInput() {
    return this._outputStorage.internalValue;
  }

  // watermark_set - computed: false, optional: true, required: false
  private _watermarkSet = new MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSetList(this, "watermark_set", false);
  public get watermarkSet() {
    return this._watermarkSet;
  }
  public putWatermarkSet(value: MpsScheduleActivitiesActivityParaSampleSnapshotTaskWatermarkSet[] | cdktf.IResolvable) {
    this._watermarkSet.internalValue = value;
  }
  public resetWatermarkSet() {
    this._watermarkSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watermarkSetInput() {
    return this._watermarkSet.internalValue;
  }
}
export interface MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskObjectNumberFormat {
  /**
  * Increment of the `{number}` variable. Default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#increment MpsSchedule#increment}
  */
  readonly increment?: number;
  /**
  * Start value of the `{number}` variable. Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#initial_value MpsSchedule#initial_value}
  */
  readonly initialValue?: number;
  /**
  * Minimum length of the `{number}` variable. A placeholder will be used if the variable length is below the minimum requirement. Default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#min_length MpsSchedule#min_length}
  */
  readonly minLength?: number;
  /**
  * Placeholder used when the `{number}` variable length is below the minimum requirement. Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#place_holder MpsSchedule#place_holder}
  */
  readonly placeHolder?: string;
}

export function mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskObjectNumberFormatToTerraform(struct?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskObjectNumberFormatOutputReference | MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskObjectNumberFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    increment: cdktf.numberToTerraform(struct!.increment),
    initial_value: cdktf.numberToTerraform(struct!.initialValue),
    min_length: cdktf.numberToTerraform(struct!.minLength),
    place_holder: cdktf.stringToTerraform(struct!.placeHolder),
  }
}


export function mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskObjectNumberFormatToHclTerraform(struct?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskObjectNumberFormatOutputReference | MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskObjectNumberFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    increment: {
      value: cdktf.numberToHclTerraform(struct!.increment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_value: {
      value: cdktf.numberToHclTerraform(struct!.initialValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_length: {
      value: cdktf.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    place_holder: {
      value: cdktf.stringToHclTerraform(struct!.placeHolder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskObjectNumberFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskObjectNumberFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._increment !== undefined) {
      hasAnyValues = true;
      internalValueResult.increment = this._increment;
    }
    if (this._initialValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialValue = this._initialValue;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    if (this._placeHolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.placeHolder = this._placeHolder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskObjectNumberFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._increment = undefined;
      this._initialValue = undefined;
      this._minLength = undefined;
      this._placeHolder = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._increment = value.increment;
      this._initialValue = value.initialValue;
      this._minLength = value.minLength;
      this._placeHolder = value.placeHolder;
    }
  }

  // increment - computed: false, optional: true, required: false
  private _increment?: number; 
  public get increment() {
    return this.getNumberAttribute('increment');
  }
  public set increment(value: number) {
    this._increment = value;
  }
  public resetIncrement() {
    this._increment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementInput() {
    return this._increment;
  }

  // initial_value - computed: false, optional: true, required: false
  private _initialValue?: number; 
  public get initialValue() {
    return this.getNumberAttribute('initial_value');
  }
  public set initialValue(value: number) {
    this._initialValue = value;
  }
  public resetInitialValue() {
    this._initialValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialValueInput() {
    return this._initialValue;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // place_holder - computed: false, optional: true, required: false
  private _placeHolder?: string; 
  public get placeHolder() {
    return this.getStringAttribute('place_holder');
  }
  public set placeHolder(value: string) {
    this._placeHolder = value;
  }
  public resetPlaceHolder() {
    this._placeHolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placeHolderInput() {
    return this._placeHolder;
  }
}
export interface MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageCosOutputStorage {
  /**
  * The bucket to which the output file of media processing is saved, such as `TopRankVideo-125xxx88`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#bucket MpsSchedule#bucket}
  */
  readonly bucket?: string;
  /**
  * The region of the output bucket, such as `ap-chongqing`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#region MpsSchedule#region}
  */
  readonly region?: string;
}

export function mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageCosOutputStorageToTerraform(struct?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageCosOutputStorageOutputReference | MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageCosOutputStorageToHclTerraform(struct?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageCosOutputStorageOutputReference | MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageCosOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageCosOutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageCosOutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._region = value.region;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageS3OutputStorage {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_bucket MpsSchedule#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_region MpsSchedule#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_id MpsSchedule#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_key MpsSchedule#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageS3OutputStorageToTerraform(struct?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageS3OutputStorageOutputReference | MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageS3OutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    s3_region: cdktf.stringToTerraform(struct!.s3Region),
    s3_secret_id: cdktf.stringToTerraform(struct!.s3SecretId),
    s3_secret_key: cdktf.stringToTerraform(struct!.s3SecretKey),
  }
}


export function mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageS3OutputStorageToHclTerraform(struct?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageS3OutputStorageOutputReference | MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageS3OutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_bucket: {
      value: cdktf.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_region: {
      value: cdktf.stringToHclTerraform(struct!.s3Region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageS3OutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageS3OutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Region !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Region = this._s3Region;
    }
    if (this._s3SecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretId = this._s3SecretId;
    }
    if (this._s3SecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretKey = this._s3SecretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageS3OutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Bucket = undefined;
      this._s3Region = undefined;
      this._s3SecretId = undefined;
      this._s3SecretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Bucket = value.s3Bucket;
      this._s3Region = value.s3Region;
      this._s3SecretId = value.s3SecretId;
      this._s3SecretKey = value.s3SecretKey;
    }
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_region - computed: false, optional: false, required: true
  private _s3Region?: string; 
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }
  public set s3Region(value: string) {
    this._s3Region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RegionInput() {
    return this._s3Region;
  }

  // s3_secret_id - computed: false, optional: true, required: false
  private _s3SecretId?: string; 
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }
  public set s3SecretId(value: string) {
    this._s3SecretId = value;
  }
  public resetS3SecretId() {
    this._s3SecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretIdInput() {
    return this._s3SecretId;
  }

  // s3_secret_key - computed: false, optional: true, required: false
  private _s3SecretKey?: string; 
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
  public set s3SecretKey(value: string) {
    this._s3SecretKey = value;
  }
  public resetS3SecretKey() {
    this._s3SecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretKeyInput() {
    return this._s3SecretKey;
  }
}
export interface MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorage {
  /**
  * The storage type for a media processing output file. Valid values: `COS`: Tencent Cloud COS `AWS-S3`: AWS S3. This type is only supported for AWS tasks, and the output bucket must be in the same region as the bucket of the source file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#type MpsSchedule#type}
  */
  readonly type: string;
  /**
  * cos_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#cos_output_storage MpsSchedule#cos_output_storage}
  */
  readonly cosOutputStorage?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageCosOutputStorage;
  /**
  * s3_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_output_storage MpsSchedule#s3_output_storage}
  */
  readonly s3OutputStorage?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageS3OutputStorage;
}

export function mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageToTerraform(struct?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageOutputReference | MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_output_storage: mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageCosOutputStorageToTerraform(struct!.cosOutputStorage),
    s3_output_storage: mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageS3OutputStorageToTerraform(struct!.s3OutputStorage),
  }
}


export function mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageToHclTerraform(struct?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageOutputReference | MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos_output_storage: {
      value: mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageCosOutputStorageToHclTerraform(struct!.cosOutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageCosOutputStorageList",
    },
    s3_output_storage: {
      value: mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageS3OutputStorageToHclTerraform(struct!.s3OutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageS3OutputStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cosOutputStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosOutputStorage = this._cosOutputStorage?.internalValue;
    }
    if (this._s3OutputStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputStorage = this._s3OutputStorage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._cosOutputStorage.internalValue = undefined;
      this._s3OutputStorage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._cosOutputStorage.internalValue = value.cosOutputStorage;
      this._s3OutputStorage.internalValue = value.s3OutputStorage;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // cos_output_storage - computed: false, optional: true, required: false
  private _cosOutputStorage = new MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageCosOutputStorageOutputReference(this, "cos_output_storage");
  public get cosOutputStorage() {
    return this._cosOutputStorage;
  }
  public putCosOutputStorage(value: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageCosOutputStorage) {
    this._cosOutputStorage.internalValue = value;
  }
  public resetCosOutputStorage() {
    this._cosOutputStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosOutputStorageInput() {
    return this._cosOutputStorage.internalValue;
  }

  // s3_output_storage - computed: false, optional: true, required: false
  private _s3OutputStorage = new MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageS3OutputStorageOutputReference(this, "s3_output_storage");
  public get s3OutputStorage() {
    return this._s3OutputStorage;
  }
  public putS3OutputStorage(value: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageS3OutputStorage) {
    this._s3OutputStorage.internalValue = value;
  }
  public resetS3OutputStorage() {
    this._s3OutputStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputStorageInput() {
    return this._s3OutputStorage.internalValue;
  }
}
export interface MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo {
  /**
  * The COS bucket of the object to process, such as `TopRankVideo-125xxx88`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#bucket MpsSchedule#bucket}
  */
  readonly bucket: string;
  /**
  * The path of the object to process, such as `/movie/201907/WildAnimal.mov`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#object MpsSchedule#object}
  */
  readonly object: string;
  /**
  * The region of the COS bucket, such as `ap-chongqing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#region MpsSchedule#region}
  */
  readonly region: string;
}

export function mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToTerraform(struct?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference | MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    object: cdktf.stringToTerraform(struct!.object),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToHclTerraform(struct?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference | MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._object = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._object = value.object;
      this._region = value.region;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_bucket MpsSchedule#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The path of the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_object MpsSchedule#s3_object}
  */
  readonly s3Object: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_region MpsSchedule#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_id MpsSchedule#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_key MpsSchedule#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToTerraform(struct?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference | MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    s3_object: cdktf.stringToTerraform(struct!.s3Object),
    s3_region: cdktf.stringToTerraform(struct!.s3Region),
    s3_secret_id: cdktf.stringToTerraform(struct!.s3SecretId),
    s3_secret_key: cdktf.stringToTerraform(struct!.s3SecretKey),
  }
}


export function mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToHclTerraform(struct?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference | MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_bucket: {
      value: cdktf.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_object: {
      value: cdktf.stringToHclTerraform(struct!.s3Object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_region: {
      value: cdktf.stringToHclTerraform(struct!.s3Region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Object !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Object = this._s3Object;
    }
    if (this._s3Region !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Region = this._s3Region;
    }
    if (this._s3SecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretId = this._s3SecretId;
    }
    if (this._s3SecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretKey = this._s3SecretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Bucket = undefined;
      this._s3Object = undefined;
      this._s3Region = undefined;
      this._s3SecretId = undefined;
      this._s3SecretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Bucket = value.s3Bucket;
      this._s3Object = value.s3Object;
      this._s3Region = value.s3Region;
      this._s3SecretId = value.s3SecretId;
      this._s3SecretKey = value.s3SecretKey;
    }
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_object - computed: false, optional: false, required: true
  private _s3Object?: string; 
  public get s3Object() {
    return this.getStringAttribute('s3_object');
  }
  public set s3Object(value: string) {
    this._s3Object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectInput() {
    return this._s3Object;
  }

  // s3_region - computed: false, optional: false, required: true
  private _s3Region?: string; 
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }
  public set s3Region(value: string) {
    this._s3Region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RegionInput() {
    return this._s3Region;
  }

  // s3_secret_id - computed: false, optional: true, required: false
  private _s3SecretId?: string; 
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }
  public set s3SecretId(value: string) {
    this._s3SecretId = value;
  }
  public resetS3SecretId() {
    this._s3SecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretIdInput() {
    return this._s3SecretId;
  }

  // s3_secret_key - computed: false, optional: true, required: false
  private _s3SecretKey?: string; 
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
  public set s3SecretKey(value: string) {
    this._s3SecretKey = value;
  }
  public resetS3SecretKey() {
    this._s3SecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretKeyInput() {
    return this._s3SecretKey;
  }
}
export interface MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo {
  /**
  * URL of a video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#url MpsSchedule#url}
  */
  readonly url: string;
}

export function mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToTerraform(struct?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference | MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToHclTerraform(struct?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference | MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContent {
  /**
  * The input type. Valid values: `COS`: A COS bucket address.  `URL`: A URL.  `AWS-S3`: An AWS S3 bucket address. Currently, this type is only supported for transcoding tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#type MpsSchedule#type}
  */
  readonly type: string;
  /**
  * cos_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#cos_input_info MpsSchedule#cos_input_info}
  */
  readonly cosInputInfo?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo;
  /**
  * s3_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_input_info MpsSchedule#s3_input_info}
  */
  readonly s3InputInfo?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo;
  /**
  * url_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#url_input_info MpsSchedule#url_input_info}
  */
  readonly urlInputInfo?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo;
}

export function mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentToTerraform(struct?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentOutputReference | MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_input_info: mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToTerraform(struct!.cosInputInfo),
    s3_input_info: mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToTerraform(struct!.s3InputInfo),
    url_input_info: mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToTerraform(struct!.urlInputInfo),
  }
}


export function mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentToHclTerraform(struct?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentOutputReference | MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos_input_info: {
      value: mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToHclTerraform(struct!.cosInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoList",
    },
    s3_input_info: {
      value: mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToHclTerraform(struct!.s3InputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoList",
    },
    url_input_info: {
      value: mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToHclTerraform(struct!.urlInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cosInputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosInputInfo = this._cosInputInfo?.internalValue;
    }
    if (this._s3InputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3InputInfo = this._s3InputInfo?.internalValue;
    }
    if (this._urlInputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlInputInfo = this._urlInputInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._cosInputInfo.internalValue = undefined;
      this._s3InputInfo.internalValue = undefined;
      this._urlInputInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._cosInputInfo.internalValue = value.cosInputInfo;
      this._s3InputInfo.internalValue = value.s3InputInfo;
      this._urlInputInfo.internalValue = value.urlInputInfo;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // cos_input_info - computed: false, optional: true, required: false
  private _cosInputInfo = new MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference(this, "cos_input_info");
  public get cosInputInfo() {
    return this._cosInputInfo;
  }
  public putCosInputInfo(value: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo) {
    this._cosInputInfo.internalValue = value;
  }
  public resetCosInputInfo() {
    this._cosInputInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosInputInfoInput() {
    return this._cosInputInfo.internalValue;
  }

  // s3_input_info - computed: false, optional: true, required: false
  private _s3InputInfo = new MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference(this, "s3_input_info");
  public get s3InputInfo() {
    return this._s3InputInfo;
  }
  public putS3InputInfo(value: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo) {
    this._s3InputInfo.internalValue = value;
  }
  public resetS3InputInfo() {
    this._s3InputInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3InputInfoInput() {
    return this._s3InputInfo.internalValue;
  }

  // url_input_info - computed: false, optional: true, required: false
  private _urlInputInfo = new MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference(this, "url_input_info");
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
  public putUrlInputInfo(value: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo) {
    this._urlInputInfo.internalValue = value;
  }
  public resetUrlInputInfo() {
    this._urlInputInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInputInfoInput() {
    return this._urlInputInfo.internalValue;
  }
}
export interface MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplate {
  /**
  * Watermark height. % and px formats are supported: If the string ends in %, the `Height` of the watermark will be the specified percentage of the video height; for example, `10%` means that `Height` is 10% of the video height; If the string ends in px, the `Height` of the watermark will be in px; for example, `100px` means that `Height` is 100 px.Default value: 0 px, which means that `Height` will be proportionally scaled according to the aspect ratio of the original watermark image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#height MpsSchedule#height}
  */
  readonly height?: string;
  /**
  * Repeat type of an animated watermark. Valid values: `once`: no longer appears after watermark playback ends. `repeat_last_frame`: stays on the last frame after watermark playback ends. `repeat` (default): repeats the playback until the video ends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#repeat_type MpsSchedule#repeat_type}
  */
  readonly repeatType?: string;
  /**
  * Watermark width. % and px formats are supported: If the string ends in %, the `Width` of the watermark will be the specified percentage of the video width; for example, `10%` means that `Width` is 10% of the video width; If the string ends in px, the `Width` of the watermark will be in px; for example, `100px` means that `Width` is 100 px.Default value: 10%.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#width MpsSchedule#width}
  */
  readonly width?: string;
  /**
  * image_content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#image_content MpsSchedule#image_content}
  */
  readonly imageContent: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContent;
}

export function mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateToTerraform(struct?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateOutputReference | MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.stringToTerraform(struct!.height),
    repeat_type: cdktf.stringToTerraform(struct!.repeatType),
    width: cdktf.stringToTerraform(struct!.width),
    image_content: mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentToTerraform(struct!.imageContent),
  }
}


export function mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateToHclTerraform(struct?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateOutputReference | MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    height: {
      value: cdktf.stringToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repeat_type: {
      value: cdktf.stringToHclTerraform(struct!.repeatType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.stringToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_content: {
      value: mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentToHclTerraform(struct!.imageContent),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._repeatType !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatType = this._repeatType;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._imageContent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageContent = this._imageContent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._height = undefined;
      this._repeatType = undefined;
      this._width = undefined;
      this._imageContent.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._height = value.height;
      this._repeatType = value.repeatType;
      this._width = value.width;
      this._imageContent.internalValue = value.imageContent;
    }
  }

  // height - computed: false, optional: true, required: false
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // repeat_type - computed: false, optional: true, required: false
  private _repeatType?: string; 
  public get repeatType() {
    return this.getStringAttribute('repeat_type');
  }
  public set repeatType(value: string) {
    this._repeatType = value;
  }
  public resetRepeatType() {
    this._repeatType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatTypeInput() {
    return this._repeatType;
  }

  // width - computed: false, optional: true, required: false
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // image_content - computed: false, optional: false, required: true
  private _imageContent = new MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContentOutputReference(this, "image_content");
  public get imageContent() {
    return this._imageContent;
  }
  public putImageContent(value: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateImageContent) {
    this._imageContent.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageContentInput() {
    return this._imageContent.internalValue;
  }
}
export interface MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameter {
  /**
  * Origin position, which currently can only be: TopLeft: the origin of coordinates is in the top-left corner of the video, and the origin of the watermark is in the top-left corner of the image or text.Default value: TopLeft.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#coordinate_origin MpsSchedule#coordinate_origin}
  */
  readonly coordinateOrigin?: string;
  /**
  * Watermark type. Valid values: image: image watermark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#type MpsSchedule#type}
  */
  readonly type: string;
  /**
  * The horizontal position of the origin of the watermark relative to the origin of coordinates of the video. % and px formats are supported: If the string ends in %, the `XPos` of the watermark will be the specified percentage of the video width; for example, `10%` means that `XPos` is 10% of the video width; If the string ends in px, the `XPos` of the watermark will be the specified px; for example, `100px` means that `XPos` is 100 px.Default value: 0 px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#x_pos MpsSchedule#x_pos}
  */
  readonly xPos?: string;
  /**
  * The vertical position of the origin of the watermark relative to the origin of coordinates of the video. % and px formats are supported: If the string ends in %, the `YPos` of the watermark will be the specified percentage of the video height; for example, `10%` means that `YPos` is 10% of the video height; If the string ends in px, the `YPos` of the watermark will be the specified px; for example, `100px` means that `YPos` is 100 px.Default value: 0 px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#y_pos MpsSchedule#y_pos}
  */
  readonly yPos?: string;
  /**
  * image_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#image_template MpsSchedule#image_template}
  */
  readonly imageTemplate?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplate;
}

export function mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterToTerraform(struct?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterOutputReference | MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    coordinate_origin: cdktf.stringToTerraform(struct!.coordinateOrigin),
    type: cdktf.stringToTerraform(struct!.type),
    x_pos: cdktf.stringToTerraform(struct!.xPos),
    y_pos: cdktf.stringToTerraform(struct!.yPos),
    image_template: mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateToTerraform(struct!.imageTemplate),
  }
}


export function mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterToHclTerraform(struct?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterOutputReference | MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    coordinate_origin: {
      value: cdktf.stringToHclTerraform(struct!.coordinateOrigin),
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
    x_pos: {
      value: cdktf.stringToHclTerraform(struct!.xPos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y_pos: {
      value: cdktf.stringToHclTerraform(struct!.yPos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_template: {
      value: mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateToHclTerraform(struct!.imageTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coordinateOrigin !== undefined) {
      hasAnyValues = true;
      internalValueResult.coordinateOrigin = this._coordinateOrigin;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._xPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.xPos = this._xPos;
    }
    if (this._yPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.yPos = this._yPos;
    }
    if (this._imageTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageTemplate = this._imageTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coordinateOrigin = undefined;
      this._type = undefined;
      this._xPos = undefined;
      this._yPos = undefined;
      this._imageTemplate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coordinateOrigin = value.coordinateOrigin;
      this._type = value.type;
      this._xPos = value.xPos;
      this._yPos = value.yPos;
      this._imageTemplate.internalValue = value.imageTemplate;
    }
  }

  // coordinate_origin - computed: false, optional: true, required: false
  private _coordinateOrigin?: string; 
  public get coordinateOrigin() {
    return this.getStringAttribute('coordinate_origin');
  }
  public set coordinateOrigin(value: string) {
    this._coordinateOrigin = value;
  }
  public resetCoordinateOrigin() {
    this._coordinateOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinateOriginInput() {
    return this._coordinateOrigin;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // x_pos - computed: false, optional: true, required: false
  private _xPos?: string; 
  public get xPos() {
    return this.getStringAttribute('x_pos');
  }
  public set xPos(value: string) {
    this._xPos = value;
  }
  public resetXPos() {
    this._xPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xPosInput() {
    return this._xPos;
  }

  // y_pos - computed: false, optional: true, required: false
  private _yPos?: string; 
  public get yPos() {
    return this.getStringAttribute('y_pos');
  }
  public set yPos(value: string) {
    this._yPos = value;
  }
  public resetYPos() {
    this._yPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yPosInput() {
    return this._yPos;
  }

  // image_template - computed: false, optional: true, required: false
  private _imageTemplate = new MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplateOutputReference(this, "image_template");
  public get imageTemplate() {
    return this._imageTemplate;
  }
  public putImageTemplate(value: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterImageTemplate) {
    this._imageTemplate.internalValue = value;
  }
  public resetImageTemplate() {
    this._imageTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTemplateInput() {
    return this._imageTemplate.internalValue;
  }
}
export interface MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSet {
  /**
  * ID of a watermarking template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#definition MpsSchedule#definition}
  */
  readonly definition: number;
  /**
  * End time offset of a watermark in seconds. If this parameter is left empty or 0 is entered, the watermark will exist till the last video frame; If this value is greater than 0 (e.g., n), the watermark will exist till second n; If this value is smaller than 0 (e.g., -n), the watermark will exist till second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#end_time_offset MpsSchedule#end_time_offset}
  */
  readonly endTimeOffset?: number;
  /**
  * Start time offset of a watermark in seconds. If this parameter is left empty or 0 is entered, the watermark will appear upon the first video frame. If this parameter is left empty or 0 is entered, the watermark will appear upon the first video frame; If this value is greater than 0 (e.g., n), the watermark will appear at second n after the first video frame; If this value is smaller than 0 (e.g., -n), the watermark will appear at second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#start_time_offset MpsSchedule#start_time_offset}
  */
  readonly startTimeOffset?: number;
  /**
  * SVG content of up to 2,000,000 characters. This field is required only when the watermark type is `SVG`.SVG watermark is not available for screenshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#svg_content MpsSchedule#svg_content}
  */
  readonly svgContent?: string;
  /**
  * Text content of up to 100 characters. This field is required only when the watermark type is text.Text watermark is not available for screenshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#text_content MpsSchedule#text_content}
  */
  readonly textContent?: string;
  /**
  * raw_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#raw_parameter MpsSchedule#raw_parameter}
  */
  readonly rawParameter?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameter;
}

export function mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetToTerraform(struct?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.numberToTerraform(struct!.definition),
    end_time_offset: cdktf.numberToTerraform(struct!.endTimeOffset),
    start_time_offset: cdktf.numberToTerraform(struct!.startTimeOffset),
    svg_content: cdktf.stringToTerraform(struct!.svgContent),
    text_content: cdktf.stringToTerraform(struct!.textContent),
    raw_parameter: mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterToTerraform(struct!.rawParameter),
  }
}


export function mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetToHclTerraform(struct?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.numberToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_time_offset: {
      value: cdktf.numberToHclTerraform(struct!.endTimeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time_offset: {
      value: cdktf.numberToHclTerraform(struct!.startTimeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    svg_content: {
      value: cdktf.stringToHclTerraform(struct!.svgContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_content: {
      value: cdktf.stringToHclTerraform(struct!.textContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw_parameter: {
      value: mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterToHclTerraform(struct!.rawParameter),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._endTimeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTimeOffset = this._endTimeOffset;
    }
    if (this._startTimeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimeOffset = this._startTimeOffset;
    }
    if (this._svgContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.svgContent = this._svgContent;
    }
    if (this._textContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.textContent = this._textContent;
    }
    if (this._rawParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawParameter = this._rawParameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._endTimeOffset = undefined;
      this._startTimeOffset = undefined;
      this._svgContent = undefined;
      this._textContent = undefined;
      this._rawParameter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._endTimeOffset = value.endTimeOffset;
      this._startTimeOffset = value.startTimeOffset;
      this._svgContent = value.svgContent;
      this._textContent = value.textContent;
      this._rawParameter.internalValue = value.rawParameter;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: number; 
  public get definition() {
    return this.getNumberAttribute('definition');
  }
  public set definition(value: number) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // end_time_offset - computed: false, optional: true, required: false
  private _endTimeOffset?: number; 
  public get endTimeOffset() {
    return this.getNumberAttribute('end_time_offset');
  }
  public set endTimeOffset(value: number) {
    this._endTimeOffset = value;
  }
  public resetEndTimeOffset() {
    this._endTimeOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeOffsetInput() {
    return this._endTimeOffset;
  }

  // start_time_offset - computed: false, optional: true, required: false
  private _startTimeOffset?: number; 
  public get startTimeOffset() {
    return this.getNumberAttribute('start_time_offset');
  }
  public set startTimeOffset(value: number) {
    this._startTimeOffset = value;
  }
  public resetStartTimeOffset() {
    this._startTimeOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeOffsetInput() {
    return this._startTimeOffset;
  }

  // svg_content - computed: false, optional: true, required: false
  private _svgContent?: string; 
  public get svgContent() {
    return this.getStringAttribute('svg_content');
  }
  public set svgContent(value: string) {
    this._svgContent = value;
  }
  public resetSvgContent() {
    this._svgContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svgContentInput() {
    return this._svgContent;
  }

  // text_content - computed: false, optional: true, required: false
  private _textContent?: string; 
  public get textContent() {
    return this.getStringAttribute('text_content');
  }
  public set textContent(value: string) {
    this._textContent = value;
  }
  public resetTextContent() {
    this._textContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textContentInput() {
    return this._textContent;
  }

  // raw_parameter - computed: false, optional: true, required: false
  private _rawParameter = new MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameterOutputReference(this, "raw_parameter");
  public get rawParameter() {
    return this._rawParameter;
  }
  public putRawParameter(value: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetRawParameter) {
    this._rawParameter.internalValue = value;
  }
  public resetRawParameter() {
    this._rawParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawParameterInput() {
    return this._rawParameter.internalValue;
  }
}

export class MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetList extends cdktf.ComplexList {
  public internalValue? : MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSet[] | cdktf.IResolvable

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
  public get(index: number): MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetOutputReference {
    return new MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTask {
  /**
  * ID of a time point screencapturing template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#definition MpsSchedule#definition}
  */
  readonly definition: number;
  /**
  * List of screenshot time points in the format of `s` or `%`: If the string ends in `s`, it means that the time point is in seconds; for example, `3.5s` means that the time point is the 3.5th second; If the string ends in `%`, it means that the time point is the specified percentage of the video duration; for example, `10%` means that the time point is 10% of the video duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#ext_time_offset_set MpsSchedule#ext_time_offset_set}
  */
  readonly extTimeOffsetSet?: string[];
  /**
  * Output path to a generated time point screenshot, which can be a relative path or an absolute path. If this parameter is left empty, the following relative path will be used by default: `{inputName}_snapshotByTimeOffset_{definition}_{number}.{format}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#output_object_path MpsSchedule#output_object_path}
  */
  readonly outputObjectPath?: string;
  /**
  * object_number_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#object_number_format MpsSchedule#object_number_format}
  */
  readonly objectNumberFormat?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskObjectNumberFormat;
  /**
  * output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#output_storage MpsSchedule#output_storage}
  */
  readonly outputStorage?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorage;
  /**
  * watermark_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#watermark_set MpsSchedule#watermark_set}
  */
  readonly watermarkSet?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSet[] | cdktf.IResolvable;
}

export function mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskToTerraform(struct?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputReference | MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.numberToTerraform(struct!.definition),
    ext_time_offset_set: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extTimeOffsetSet),
    output_object_path: cdktf.stringToTerraform(struct!.outputObjectPath),
    object_number_format: mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskObjectNumberFormatToTerraform(struct!.objectNumberFormat),
    output_storage: mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageToTerraform(struct!.outputStorage),
    watermark_set: cdktf.listMapper(mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetToTerraform, true)(struct!.watermarkSet),
  }
}


export function mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskToHclTerraform(struct?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputReference | MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.numberToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ext_time_offset_set: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extTimeOffsetSet),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    output_object_path: {
      value: cdktf.stringToHclTerraform(struct!.outputObjectPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_number_format: {
      value: mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskObjectNumberFormatToHclTerraform(struct!.objectNumberFormat),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskObjectNumberFormatList",
    },
    output_storage: {
      value: mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageToHclTerraform(struct!.outputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageList",
    },
    watermark_set: {
      value: cdktf.listMapperHcl(mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetToHclTerraform, true)(struct!.watermarkSet),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._extTimeOffsetSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.extTimeOffsetSet = this._extTimeOffsetSet;
    }
    if (this._outputObjectPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputObjectPath = this._outputObjectPath;
    }
    if (this._objectNumberFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectNumberFormat = this._objectNumberFormat?.internalValue;
    }
    if (this._outputStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputStorage = this._outputStorage?.internalValue;
    }
    if (this._watermarkSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.watermarkSet = this._watermarkSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._definition = undefined;
      this._extTimeOffsetSet = undefined;
      this._outputObjectPath = undefined;
      this._objectNumberFormat.internalValue = undefined;
      this._outputStorage.internalValue = undefined;
      this._watermarkSet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._definition = value.definition;
      this._extTimeOffsetSet = value.extTimeOffsetSet;
      this._outputObjectPath = value.outputObjectPath;
      this._objectNumberFormat.internalValue = value.objectNumberFormat;
      this._outputStorage.internalValue = value.outputStorage;
      this._watermarkSet.internalValue = value.watermarkSet;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: number; 
  public get definition() {
    return this.getNumberAttribute('definition');
  }
  public set definition(value: number) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // ext_time_offset_set - computed: false, optional: true, required: false
  private _extTimeOffsetSet?: string[]; 
  public get extTimeOffsetSet() {
    return cdktf.Fn.tolist(this.getListAttribute('ext_time_offset_set'));
  }
  public set extTimeOffsetSet(value: string[]) {
    this._extTimeOffsetSet = value;
  }
  public resetExtTimeOffsetSet() {
    this._extTimeOffsetSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extTimeOffsetSetInput() {
    return this._extTimeOffsetSet;
  }

  // output_object_path - computed: false, optional: true, required: false
  private _outputObjectPath?: string; 
  public get outputObjectPath() {
    return this.getStringAttribute('output_object_path');
  }
  public set outputObjectPath(value: string) {
    this._outputObjectPath = value;
  }
  public resetOutputObjectPath() {
    this._outputObjectPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputObjectPathInput() {
    return this._outputObjectPath;
  }

  // object_number_format - computed: false, optional: true, required: false
  private _objectNumberFormat = new MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskObjectNumberFormatOutputReference(this, "object_number_format");
  public get objectNumberFormat() {
    return this._objectNumberFormat;
  }
  public putObjectNumberFormat(value: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskObjectNumberFormat) {
    this._objectNumberFormat.internalValue = value;
  }
  public resetObjectNumberFormat() {
    this._objectNumberFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNumberFormatInput() {
    return this._objectNumberFormat.internalValue;
  }

  // output_storage - computed: false, optional: true, required: false
  private _outputStorage = new MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorageOutputReference(this, "output_storage");
  public get outputStorage() {
    return this._outputStorage;
  }
  public putOutputStorage(value: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputStorage) {
    this._outputStorage.internalValue = value;
  }
  public resetOutputStorage() {
    this._outputStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputStorageInput() {
    return this._outputStorage.internalValue;
  }

  // watermark_set - computed: false, optional: true, required: false
  private _watermarkSet = new MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSetList(this, "watermark_set", false);
  public get watermarkSet() {
    return this._watermarkSet;
  }
  public putWatermarkSet(value: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskWatermarkSet[] | cdktf.IResolvable) {
    this._watermarkSet.internalValue = value;
  }
  public resetWatermarkSet() {
    this._watermarkSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watermarkSetInput() {
    return this._watermarkSet.internalValue;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetCosInputInfo {
  /**
  * The COS bucket of the object to process, such as `TopRankVideo-125xxx88`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#bucket MpsSchedule#bucket}
  */
  readonly bucket: string;
  /**
  * The path of the object to process, such as `/movie/201907/WildAnimal.mov`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#object MpsSchedule#object}
  */
  readonly object: string;
  /**
  * The region of the COS bucket, such as `ap-chongqing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#region MpsSchedule#region}
  */
  readonly region: string;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetCosInputInfoToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetCosInputInfoOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    object: cdktf.stringToTerraform(struct!.object),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetCosInputInfoToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetCosInputInfoOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetCosInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetCosInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._object = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._object = value.object;
      this._region = value.region;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetS3InputInfo {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_bucket MpsSchedule#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The path of the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_object MpsSchedule#s3_object}
  */
  readonly s3Object: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_region MpsSchedule#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_id MpsSchedule#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_key MpsSchedule#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetS3InputInfoToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetS3InputInfoOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    s3_object: cdktf.stringToTerraform(struct!.s3Object),
    s3_region: cdktf.stringToTerraform(struct!.s3Region),
    s3_secret_id: cdktf.stringToTerraform(struct!.s3SecretId),
    s3_secret_key: cdktf.stringToTerraform(struct!.s3SecretKey),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetS3InputInfoToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetS3InputInfoOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_bucket: {
      value: cdktf.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_object: {
      value: cdktf.stringToHclTerraform(struct!.s3Object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_region: {
      value: cdktf.stringToHclTerraform(struct!.s3Region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetS3InputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Object !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Object = this._s3Object;
    }
    if (this._s3Region !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Region = this._s3Region;
    }
    if (this._s3SecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretId = this._s3SecretId;
    }
    if (this._s3SecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretKey = this._s3SecretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetS3InputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Bucket = undefined;
      this._s3Object = undefined;
      this._s3Region = undefined;
      this._s3SecretId = undefined;
      this._s3SecretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Bucket = value.s3Bucket;
      this._s3Object = value.s3Object;
      this._s3Region = value.s3Region;
      this._s3SecretId = value.s3SecretId;
      this._s3SecretKey = value.s3SecretKey;
    }
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_object - computed: false, optional: false, required: true
  private _s3Object?: string; 
  public get s3Object() {
    return this.getStringAttribute('s3_object');
  }
  public set s3Object(value: string) {
    this._s3Object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectInput() {
    return this._s3Object;
  }

  // s3_region - computed: false, optional: false, required: true
  private _s3Region?: string; 
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }
  public set s3Region(value: string) {
    this._s3Region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RegionInput() {
    return this._s3Region;
  }

  // s3_secret_id - computed: false, optional: true, required: false
  private _s3SecretId?: string; 
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }
  public set s3SecretId(value: string) {
    this._s3SecretId = value;
  }
  public resetS3SecretId() {
    this._s3SecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretIdInput() {
    return this._s3SecretId;
  }

  // s3_secret_key - computed: false, optional: true, required: false
  private _s3SecretKey?: string; 
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
  public set s3SecretKey(value: string) {
    this._s3SecretKey = value;
  }
  public resetS3SecretKey() {
    this._s3SecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretKeyInput() {
    return this._s3SecretKey;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetUrlInputInfo {
  /**
  * URL of a video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#url MpsSchedule#url}
  */
  readonly url: string;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetUrlInputInfoToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetUrlInputInfoOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetUrlInputInfoToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetUrlInputInfoOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetUrlInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSet {
  /**
  * The input type. Valid values: `COS`: A COS bucket address.  `URL`: A URL.  `AWS-S3`: An AWS S3 bucket address. Currently, this type is only supported for transcoding tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#type MpsSchedule#type}
  */
  readonly type: string;
  /**
  * cos_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#cos_input_info MpsSchedule#cos_input_info}
  */
  readonly cosInputInfo?: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetCosInputInfo;
  /**
  * s3_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_input_info MpsSchedule#s3_input_info}
  */
  readonly s3InputInfo?: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetS3InputInfo;
  /**
  * url_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#url_input_info MpsSchedule#url_input_info}
  */
  readonly urlInputInfo?: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetUrlInputInfo;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_input_info: mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetCosInputInfoToTerraform(struct!.cosInputInfo),
    s3_input_info: mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetS3InputInfoToTerraform(struct!.s3InputInfo),
    url_input_info: mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetUrlInputInfoToTerraform(struct!.urlInputInfo),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos_input_info: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetCosInputInfoToHclTerraform(struct!.cosInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetCosInputInfoList",
    },
    s3_input_info: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetS3InputInfoToHclTerraform(struct!.s3InputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetS3InputInfoList",
    },
    url_input_info: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetUrlInputInfoToHclTerraform(struct!.urlInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetUrlInputInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cosInputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosInputInfo = this._cosInputInfo?.internalValue;
    }
    if (this._s3InputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3InputInfo = this._s3InputInfo?.internalValue;
    }
    if (this._urlInputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlInputInfo = this._urlInputInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._cosInputInfo.internalValue = undefined;
      this._s3InputInfo.internalValue = undefined;
      this._urlInputInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._cosInputInfo.internalValue = value.cosInputInfo;
      this._s3InputInfo.internalValue = value.s3InputInfo;
      this._urlInputInfo.internalValue = value.urlInputInfo;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // cos_input_info - computed: false, optional: true, required: false
  private _cosInputInfo = new MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetCosInputInfoOutputReference(this, "cos_input_info");
  public get cosInputInfo() {
    return this._cosInputInfo;
  }
  public putCosInputInfo(value: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetCosInputInfo) {
    this._cosInputInfo.internalValue = value;
  }
  public resetCosInputInfo() {
    this._cosInputInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosInputInfoInput() {
    return this._cosInputInfo.internalValue;
  }

  // s3_input_info - computed: false, optional: true, required: false
  private _s3InputInfo = new MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetS3InputInfoOutputReference(this, "s3_input_info");
  public get s3InputInfo() {
    return this._s3InputInfo;
  }
  public putS3InputInfo(value: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetS3InputInfo) {
    this._s3InputInfo.internalValue = value;
  }
  public resetS3InputInfo() {
    this._s3InputInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3InputInfoInput() {
    return this._s3InputInfo.internalValue;
  }

  // url_input_info - computed: false, optional: true, required: false
  private _urlInputInfo = new MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetUrlInputInfoOutputReference(this, "url_input_info");
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
  public putUrlInputInfo(value: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetUrlInputInfo) {
    this._urlInputInfo.internalValue = value;
  }
  public resetUrlInputInfo() {
    this._urlInputInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInputInfoInput() {
    return this._urlInputInfo.internalValue;
  }
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetList extends cdktf.ComplexList {
  public internalValue? : MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSet[] | cdktf.IResolvable

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
  public get(index: number): MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetOutputReference {
    return new MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetCosInputInfo {
  /**
  * The COS bucket of the object to process, such as `TopRankVideo-125xxx88`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#bucket MpsSchedule#bucket}
  */
  readonly bucket: string;
  /**
  * The path of the object to process, such as `/movie/201907/WildAnimal.mov`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#object MpsSchedule#object}
  */
  readonly object: string;
  /**
  * The region of the COS bucket, such as `ap-chongqing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#region MpsSchedule#region}
  */
  readonly region: string;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetCosInputInfoToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetCosInputInfoOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    object: cdktf.stringToTerraform(struct!.object),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetCosInputInfoToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetCosInputInfoOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetCosInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetCosInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._object = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._object = value.object;
      this._region = value.region;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetS3InputInfo {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_bucket MpsSchedule#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The path of the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_object MpsSchedule#s3_object}
  */
  readonly s3Object: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_region MpsSchedule#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_id MpsSchedule#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_key MpsSchedule#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetS3InputInfoToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetS3InputInfoOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    s3_object: cdktf.stringToTerraform(struct!.s3Object),
    s3_region: cdktf.stringToTerraform(struct!.s3Region),
    s3_secret_id: cdktf.stringToTerraform(struct!.s3SecretId),
    s3_secret_key: cdktf.stringToTerraform(struct!.s3SecretKey),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetS3InputInfoToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetS3InputInfoOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_bucket: {
      value: cdktf.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_object: {
      value: cdktf.stringToHclTerraform(struct!.s3Object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_region: {
      value: cdktf.stringToHclTerraform(struct!.s3Region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetS3InputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Object !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Object = this._s3Object;
    }
    if (this._s3Region !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Region = this._s3Region;
    }
    if (this._s3SecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretId = this._s3SecretId;
    }
    if (this._s3SecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretKey = this._s3SecretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetS3InputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Bucket = undefined;
      this._s3Object = undefined;
      this._s3Region = undefined;
      this._s3SecretId = undefined;
      this._s3SecretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Bucket = value.s3Bucket;
      this._s3Object = value.s3Object;
      this._s3Region = value.s3Region;
      this._s3SecretId = value.s3SecretId;
      this._s3SecretKey = value.s3SecretKey;
    }
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_object - computed: false, optional: false, required: true
  private _s3Object?: string; 
  public get s3Object() {
    return this.getStringAttribute('s3_object');
  }
  public set s3Object(value: string) {
    this._s3Object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectInput() {
    return this._s3Object;
  }

  // s3_region - computed: false, optional: false, required: true
  private _s3Region?: string; 
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }
  public set s3Region(value: string) {
    this._s3Region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RegionInput() {
    return this._s3Region;
  }

  // s3_secret_id - computed: false, optional: true, required: false
  private _s3SecretId?: string; 
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }
  public set s3SecretId(value: string) {
    this._s3SecretId = value;
  }
  public resetS3SecretId() {
    this._s3SecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretIdInput() {
    return this._s3SecretId;
  }

  // s3_secret_key - computed: false, optional: true, required: false
  private _s3SecretKey?: string; 
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
  public set s3SecretKey(value: string) {
    this._s3SecretKey = value;
  }
  public resetS3SecretKey() {
    this._s3SecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretKeyInput() {
    return this._s3SecretKey;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetUrlInputInfo {
  /**
  * URL of a video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#url MpsSchedule#url}
  */
  readonly url: string;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetUrlInputInfoToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetUrlInputInfoOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetUrlInputInfoToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetUrlInputInfoOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetUrlInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSet {
  /**
  * The input type. Valid values: `COS`: A COS bucket address.  `URL`: A URL.  `AWS-S3`: An AWS S3 bucket address. Currently, this type is only supported for transcoding tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#type MpsSchedule#type}
  */
  readonly type: string;
  /**
  * cos_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#cos_input_info MpsSchedule#cos_input_info}
  */
  readonly cosInputInfo?: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetCosInputInfo;
  /**
  * s3_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_input_info MpsSchedule#s3_input_info}
  */
  readonly s3InputInfo?: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetS3InputInfo;
  /**
  * url_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#url_input_info MpsSchedule#url_input_info}
  */
  readonly urlInputInfo?: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetUrlInputInfo;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_input_info: mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetCosInputInfoToTerraform(struct!.cosInputInfo),
    s3_input_info: mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetS3InputInfoToTerraform(struct!.s3InputInfo),
    url_input_info: mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetUrlInputInfoToTerraform(struct!.urlInputInfo),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos_input_info: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetCosInputInfoToHclTerraform(struct!.cosInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetCosInputInfoList",
    },
    s3_input_info: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetS3InputInfoToHclTerraform(struct!.s3InputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetS3InputInfoList",
    },
    url_input_info: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetUrlInputInfoToHclTerraform(struct!.urlInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetUrlInputInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cosInputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosInputInfo = this._cosInputInfo?.internalValue;
    }
    if (this._s3InputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3InputInfo = this._s3InputInfo?.internalValue;
    }
    if (this._urlInputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlInputInfo = this._urlInputInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._cosInputInfo.internalValue = undefined;
      this._s3InputInfo.internalValue = undefined;
      this._urlInputInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._cosInputInfo.internalValue = value.cosInputInfo;
      this._s3InputInfo.internalValue = value.s3InputInfo;
      this._urlInputInfo.internalValue = value.urlInputInfo;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // cos_input_info - computed: false, optional: true, required: false
  private _cosInputInfo = new MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetCosInputInfoOutputReference(this, "cos_input_info");
  public get cosInputInfo() {
    return this._cosInputInfo;
  }
  public putCosInputInfo(value: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetCosInputInfo) {
    this._cosInputInfo.internalValue = value;
  }
  public resetCosInputInfo() {
    this._cosInputInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosInputInfoInput() {
    return this._cosInputInfo.internalValue;
  }

  // s3_input_info - computed: false, optional: true, required: false
  private _s3InputInfo = new MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetS3InputInfoOutputReference(this, "s3_input_info");
  public get s3InputInfo() {
    return this._s3InputInfo;
  }
  public putS3InputInfo(value: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetS3InputInfo) {
    this._s3InputInfo.internalValue = value;
  }
  public resetS3InputInfo() {
    this._s3InputInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3InputInfoInput() {
    return this._s3InputInfo.internalValue;
  }

  // url_input_info - computed: false, optional: true, required: false
  private _urlInputInfo = new MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetUrlInputInfoOutputReference(this, "url_input_info");
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
  public putUrlInputInfo(value: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetUrlInputInfo) {
    this._urlInputInfo.internalValue = value;
  }
  public resetUrlInputInfo() {
    this._urlInputInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInputInfoInput() {
    return this._urlInputInfo.internalValue;
  }
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetList extends cdktf.ComplexList {
  public internalValue? : MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSet[] | cdktf.IResolvable

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
  public get(index: number): MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetOutputReference {
    return new MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameter {
  /**
  * head_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#head_set MpsSchedule#head_set}
  */
  readonly headSet?: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSet[] | cdktf.IResolvable;
  /**
  * tail_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#tail_set MpsSchedule#tail_set}
  */
  readonly tailSet?: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSet[] | cdktf.IResolvable;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    head_set: cdktf.listMapper(mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetToTerraform, true)(struct!.headSet),
    tail_set: cdktf.listMapper(mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetToTerraform, true)(struct!.tailSet),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    head_set: {
      value: cdktf.listMapperHcl(mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetToHclTerraform, true)(struct!.headSet),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetList",
    },
    tail_set: {
      value: cdktf.listMapperHcl(mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetToHclTerraform, true)(struct!.tailSet),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headSet = this._headSet?.internalValue;
    }
    if (this._tailSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tailSet = this._tailSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headSet.internalValue = undefined;
      this._tailSet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headSet.internalValue = value.headSet;
      this._tailSet.internalValue = value.tailSet;
    }
  }

  // head_set - computed: false, optional: true, required: false
  private _headSet = new MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSetList(this, "head_set", false);
  public get headSet() {
    return this._headSet;
  }
  public putHeadSet(value: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterHeadSet[] | cdktf.IResolvable) {
    this._headSet.internalValue = value;
  }
  public resetHeadSet() {
    this._headSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headSetInput() {
    return this._headSet.internalValue;
  }

  // tail_set - computed: false, optional: true, required: false
  private _tailSet = new MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSetList(this, "tail_set", false);
  public get tailSet() {
    return this._tailSet;
  }
  public putTailSet(value: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterTailSet[] | cdktf.IResolvable) {
    this._tailSet.internalValue = value;
  }
  public resetTailSet() {
    this._tailSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tailSetInput() {
    return this._tailSet.internalValue;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskMosaicSet {
  /**
  * Origin position, which currently can only be: TopLeft: the origin of coordinates is in the top-left corner of the video, and the origin of the blur is in the top-left corner of the image or text.Default value: TopLeft.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#coordinate_origin MpsSchedule#coordinate_origin}
  */
  readonly coordinateOrigin?: string;
  /**
  * End time offset of blur in seconds. If this parameter is left empty or 0 is entered, the blur will exist till the last video frame; If this value is greater than 0 (e.g., n), the blur will exist till second n; If this value is smaller than 0 (e.g., -n), the blur will exist till second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#end_time_offset MpsSchedule#end_time_offset}
  */
  readonly endTimeOffset?: number;
  /**
  * Blur height. % and px formats are supported: If the string ends in %, the `Height` of the blur will be the specified percentage of the video height; for example, `10%` means that `Height` is 10% of the video height; If the string ends in px, the `Height` of the blur will be in px; for example, `100px` means that `Height` is 100 px.Default value: 10%.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#height MpsSchedule#height}
  */
  readonly height?: string;
  /**
  * Start time offset of blur in seconds. If this parameter is left empty or 0 is entered, the blur will appear upon the first video frame. If this parameter is left empty or 0 is entered, the blur will appear upon the first video frame; If this value is greater than 0 (e.g., n), the blur will appear at second n after the first video frame; If this value is smaller than 0 (e.g., -n), the blur will appear at second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#start_time_offset MpsSchedule#start_time_offset}
  */
  readonly startTimeOffset?: number;
  /**
  * Blur width. % and px formats are supported: If the string ends in %, the `Width` of the blur will be the specified percentage of the video width; for example, `10%` means that `Width` is 10% of the video width; If the string ends in px, the `Width` of the blur will be in px; for example, `100px` means that `Width` is 100 px.Default value: 10%.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#width MpsSchedule#width}
  */
  readonly width?: string;
  /**
  * The horizontal position of the origin of the blur relative to the origin of coordinates of the video. % and px formats are supported: If the string ends in %, the `XPos` of the blur will be the specified percentage of the video width; for example, `10%` means that `XPos` is 10% of the video width; If the string ends in px, the `XPos` of the blur will be the specified px; for example, `100px` means that `XPos` is 100 px.Default value: 0 px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#x_pos MpsSchedule#x_pos}
  */
  readonly xPos?: string;
  /**
  * Vertical position of the origin of blur relative to the origin of coordinates of video. % and px formats are supported: If the string ends in %, the `YPos` of the blur will be the specified percentage of the video height; for example, `10%` means that `YPos` is 10% of the video height; If the string ends in px, the `YPos` of the blur will be the specified px; for example, `100px` means that `YPos` is 100 px.Default value: 0 px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#y_pos MpsSchedule#y_pos}
  */
  readonly yPos?: string;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskMosaicSetToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskMosaicSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    coordinate_origin: cdktf.stringToTerraform(struct!.coordinateOrigin),
    end_time_offset: cdktf.numberToTerraform(struct!.endTimeOffset),
    height: cdktf.stringToTerraform(struct!.height),
    start_time_offset: cdktf.numberToTerraform(struct!.startTimeOffset),
    width: cdktf.stringToTerraform(struct!.width),
    x_pos: cdktf.stringToTerraform(struct!.xPos),
    y_pos: cdktf.stringToTerraform(struct!.yPos),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskMosaicSetToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskMosaicSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    coordinate_origin: {
      value: cdktf.stringToHclTerraform(struct!.coordinateOrigin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time_offset: {
      value: cdktf.numberToHclTerraform(struct!.endTimeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    height: {
      value: cdktf.stringToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time_offset: {
      value: cdktf.numberToHclTerraform(struct!.startTimeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    width: {
      value: cdktf.stringToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x_pos: {
      value: cdktf.stringToHclTerraform(struct!.xPos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y_pos: {
      value: cdktf.stringToHclTerraform(struct!.yPos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskMosaicSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskMosaicSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coordinateOrigin !== undefined) {
      hasAnyValues = true;
      internalValueResult.coordinateOrigin = this._coordinateOrigin;
    }
    if (this._endTimeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTimeOffset = this._endTimeOffset;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._startTimeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimeOffset = this._startTimeOffset;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._xPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.xPos = this._xPos;
    }
    if (this._yPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.yPos = this._yPos;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskMosaicSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coordinateOrigin = undefined;
      this._endTimeOffset = undefined;
      this._height = undefined;
      this._startTimeOffset = undefined;
      this._width = undefined;
      this._xPos = undefined;
      this._yPos = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coordinateOrigin = value.coordinateOrigin;
      this._endTimeOffset = value.endTimeOffset;
      this._height = value.height;
      this._startTimeOffset = value.startTimeOffset;
      this._width = value.width;
      this._xPos = value.xPos;
      this._yPos = value.yPos;
    }
  }

  // coordinate_origin - computed: false, optional: true, required: false
  private _coordinateOrigin?: string; 
  public get coordinateOrigin() {
    return this.getStringAttribute('coordinate_origin');
  }
  public set coordinateOrigin(value: string) {
    this._coordinateOrigin = value;
  }
  public resetCoordinateOrigin() {
    this._coordinateOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinateOriginInput() {
    return this._coordinateOrigin;
  }

  // end_time_offset - computed: false, optional: true, required: false
  private _endTimeOffset?: number; 
  public get endTimeOffset() {
    return this.getNumberAttribute('end_time_offset');
  }
  public set endTimeOffset(value: number) {
    this._endTimeOffset = value;
  }
  public resetEndTimeOffset() {
    this._endTimeOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeOffsetInput() {
    return this._endTimeOffset;
  }

  // height - computed: false, optional: true, required: false
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // start_time_offset - computed: false, optional: true, required: false
  private _startTimeOffset?: number; 
  public get startTimeOffset() {
    return this.getNumberAttribute('start_time_offset');
  }
  public set startTimeOffset(value: number) {
    this._startTimeOffset = value;
  }
  public resetStartTimeOffset() {
    this._startTimeOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeOffsetInput() {
    return this._startTimeOffset;
  }

  // width - computed: false, optional: true, required: false
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // x_pos - computed: false, optional: true, required: false
  private _xPos?: string; 
  public get xPos() {
    return this.getStringAttribute('x_pos');
  }
  public set xPos(value: string) {
    this._xPos = value;
  }
  public resetXPos() {
    this._xPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xPosInput() {
    return this._xPos;
  }

  // y_pos - computed: false, optional: true, required: false
  private _yPos?: string; 
  public get yPos() {
    return this.getStringAttribute('y_pos');
  }
  public set yPos(value: string) {
    this._yPos = value;
  }
  public resetYPos() {
    this._yPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yPosInput() {
    return this._yPos;
  }
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskMosaicSetList extends cdktf.ComplexList {
  public internalValue? : MpsScheduleActivitiesActivityParaTranscodeTaskMosaicSet[] | cdktf.IResolvable

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
  public get(index: number): MpsScheduleActivitiesActivityParaTranscodeTaskMosaicSetOutputReference {
    return new MpsScheduleActivitiesActivityParaTranscodeTaskMosaicSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskObjectNumberFormat {
  /**
  * Increment of the `{number}` variable. Default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#increment MpsSchedule#increment}
  */
  readonly increment?: number;
  /**
  * Start value of the `{number}` variable. Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#initial_value MpsSchedule#initial_value}
  */
  readonly initialValue?: number;
  /**
  * Minimum length of the `{number}` variable. A placeholder will be used if the variable length is below the minimum requirement. Default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#min_length MpsSchedule#min_length}
  */
  readonly minLength?: number;
  /**
  * Placeholder used when the `{number}` variable length is below the minimum requirement. Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#place_holder MpsSchedule#place_holder}
  */
  readonly placeHolder?: string;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskObjectNumberFormatToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskObjectNumberFormatOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskObjectNumberFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    increment: cdktf.numberToTerraform(struct!.increment),
    initial_value: cdktf.numberToTerraform(struct!.initialValue),
    min_length: cdktf.numberToTerraform(struct!.minLength),
    place_holder: cdktf.stringToTerraform(struct!.placeHolder),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskObjectNumberFormatToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskObjectNumberFormatOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskObjectNumberFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    increment: {
      value: cdktf.numberToHclTerraform(struct!.increment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_value: {
      value: cdktf.numberToHclTerraform(struct!.initialValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_length: {
      value: cdktf.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    place_holder: {
      value: cdktf.stringToHclTerraform(struct!.placeHolder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskObjectNumberFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskObjectNumberFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._increment !== undefined) {
      hasAnyValues = true;
      internalValueResult.increment = this._increment;
    }
    if (this._initialValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialValue = this._initialValue;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    if (this._placeHolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.placeHolder = this._placeHolder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskObjectNumberFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._increment = undefined;
      this._initialValue = undefined;
      this._minLength = undefined;
      this._placeHolder = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._increment = value.increment;
      this._initialValue = value.initialValue;
      this._minLength = value.minLength;
      this._placeHolder = value.placeHolder;
    }
  }

  // increment - computed: false, optional: true, required: false
  private _increment?: number; 
  public get increment() {
    return this.getNumberAttribute('increment');
  }
  public set increment(value: number) {
    this._increment = value;
  }
  public resetIncrement() {
    this._increment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementInput() {
    return this._increment;
  }

  // initial_value - computed: false, optional: true, required: false
  private _initialValue?: number; 
  public get initialValue() {
    return this.getNumberAttribute('initial_value');
  }
  public set initialValue(value: number) {
    this._initialValue = value;
  }
  public resetInitialValue() {
    this._initialValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialValueInput() {
    return this._initialValue;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // place_holder - computed: false, optional: true, required: false
  private _placeHolder?: string; 
  public get placeHolder() {
    return this.getStringAttribute('place_holder');
  }
  public set placeHolder(value: string) {
    this._placeHolder = value;
  }
  public resetPlaceHolder() {
    this._placeHolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placeHolderInput() {
    return this._placeHolder;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageCosOutputStorage {
  /**
  * The bucket to which the output file of media processing is saved, such as `TopRankVideo-125xxx88`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#bucket MpsSchedule#bucket}
  */
  readonly bucket?: string;
  /**
  * The region of the output bucket, such as `ap-chongqing`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#region MpsSchedule#region}
  */
  readonly region?: string;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageCosOutputStorageToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageCosOutputStorageOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageCosOutputStorageToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageCosOutputStorageOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageCosOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageCosOutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageCosOutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._region = value.region;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageS3OutputStorage {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_bucket MpsSchedule#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_region MpsSchedule#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_id MpsSchedule#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_key MpsSchedule#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageS3OutputStorageToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageS3OutputStorageOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageS3OutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    s3_region: cdktf.stringToTerraform(struct!.s3Region),
    s3_secret_id: cdktf.stringToTerraform(struct!.s3SecretId),
    s3_secret_key: cdktf.stringToTerraform(struct!.s3SecretKey),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageS3OutputStorageToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageS3OutputStorageOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageS3OutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_bucket: {
      value: cdktf.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_region: {
      value: cdktf.stringToHclTerraform(struct!.s3Region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageS3OutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageS3OutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Region !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Region = this._s3Region;
    }
    if (this._s3SecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretId = this._s3SecretId;
    }
    if (this._s3SecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretKey = this._s3SecretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageS3OutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Bucket = undefined;
      this._s3Region = undefined;
      this._s3SecretId = undefined;
      this._s3SecretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Bucket = value.s3Bucket;
      this._s3Region = value.s3Region;
      this._s3SecretId = value.s3SecretId;
      this._s3SecretKey = value.s3SecretKey;
    }
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_region - computed: false, optional: false, required: true
  private _s3Region?: string; 
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }
  public set s3Region(value: string) {
    this._s3Region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RegionInput() {
    return this._s3Region;
  }

  // s3_secret_id - computed: false, optional: true, required: false
  private _s3SecretId?: string; 
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }
  public set s3SecretId(value: string) {
    this._s3SecretId = value;
  }
  public resetS3SecretId() {
    this._s3SecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretIdInput() {
    return this._s3SecretId;
  }

  // s3_secret_key - computed: false, optional: true, required: false
  private _s3SecretKey?: string; 
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
  public set s3SecretKey(value: string) {
    this._s3SecretKey = value;
  }
  public resetS3SecretKey() {
    this._s3SecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretKeyInput() {
    return this._s3SecretKey;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorage {
  /**
  * The storage type for a media processing output file. Valid values: `COS`: Tencent Cloud COS `AWS-S3`: AWS S3. This type is only supported for AWS tasks, and the output bucket must be in the same region as the bucket of the source file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#type MpsSchedule#type}
  */
  readonly type: string;
  /**
  * cos_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#cos_output_storage MpsSchedule#cos_output_storage}
  */
  readonly cosOutputStorage?: MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageCosOutputStorage;
  /**
  * s3_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_output_storage MpsSchedule#s3_output_storage}
  */
  readonly s3OutputStorage?: MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageS3OutputStorage;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_output_storage: mpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageCosOutputStorageToTerraform(struct!.cosOutputStorage),
    s3_output_storage: mpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageS3OutputStorageToTerraform(struct!.s3OutputStorage),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos_output_storage: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageCosOutputStorageToHclTerraform(struct!.cosOutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageCosOutputStorageList",
    },
    s3_output_storage: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageS3OutputStorageToHclTerraform(struct!.s3OutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageS3OutputStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cosOutputStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosOutputStorage = this._cosOutputStorage?.internalValue;
    }
    if (this._s3OutputStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputStorage = this._s3OutputStorage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._cosOutputStorage.internalValue = undefined;
      this._s3OutputStorage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._cosOutputStorage.internalValue = value.cosOutputStorage;
      this._s3OutputStorage.internalValue = value.s3OutputStorage;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // cos_output_storage - computed: false, optional: true, required: false
  private _cosOutputStorage = new MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageCosOutputStorageOutputReference(this, "cos_output_storage");
  public get cosOutputStorage() {
    return this._cosOutputStorage;
  }
  public putCosOutputStorage(value: MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageCosOutputStorage) {
    this._cosOutputStorage.internalValue = value;
  }
  public resetCosOutputStorage() {
    this._cosOutputStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosOutputStorageInput() {
    return this._cosOutputStorage.internalValue;
  }

  // s3_output_storage - computed: false, optional: true, required: false
  private _s3OutputStorage = new MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageS3OutputStorageOutputReference(this, "s3_output_storage");
  public get s3OutputStorage() {
    return this._s3OutputStorage;
  }
  public putS3OutputStorage(value: MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageS3OutputStorage) {
    this._s3OutputStorage.internalValue = value;
  }
  public resetS3OutputStorage() {
    this._s3OutputStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputStorageInput() {
    return this._s3OutputStorage.internalValue;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleCosInputInfo {
  /**
  * The COS bucket of the object to process, such as TopRankVideo-125xxx88.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#bucket MpsSchedule#bucket}
  */
  readonly bucket: string;
  /**
  * The path of the object to process, such as /movie/201907/WildAnimal.mov.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#object MpsSchedule#object}
  */
  readonly object: string;
  /**
  * The region of the COS bucket, such as ap-chongqing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#region MpsSchedule#region}
  */
  readonly region: string;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleCosInputInfoToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleCosInputInfoOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    object: cdktf.stringToTerraform(struct!.object),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleCosInputInfoToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleCosInputInfoOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleCosInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleCosInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._object = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._object = value.object;
      this._region = value.region;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleS3InputInfo {
  /**
  * S3 bucket.Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_bucket MpsSchedule#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The path of the AWS S3 object.Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_object MpsSchedule#s3_object}
  */
  readonly s3Object: string;
  /**
  * The region of the AWS S3 bucket, support:  us-east-1  eu-west-3Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_region MpsSchedule#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to access the AWS S3 object.Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_id MpsSchedule#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to access the AWS S3 object.Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_key MpsSchedule#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleS3InputInfoToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleS3InputInfoOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    s3_object: cdktf.stringToTerraform(struct!.s3Object),
    s3_region: cdktf.stringToTerraform(struct!.s3Region),
    s3_secret_id: cdktf.stringToTerraform(struct!.s3SecretId),
    s3_secret_key: cdktf.stringToTerraform(struct!.s3SecretKey),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleS3InputInfoToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleS3InputInfoOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_bucket: {
      value: cdktf.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_object: {
      value: cdktf.stringToHclTerraform(struct!.s3Object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_region: {
      value: cdktf.stringToHclTerraform(struct!.s3Region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleS3InputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Object !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Object = this._s3Object;
    }
    if (this._s3Region !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Region = this._s3Region;
    }
    if (this._s3SecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretId = this._s3SecretId;
    }
    if (this._s3SecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretKey = this._s3SecretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleS3InputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Bucket = undefined;
      this._s3Object = undefined;
      this._s3Region = undefined;
      this._s3SecretId = undefined;
      this._s3SecretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Bucket = value.s3Bucket;
      this._s3Object = value.s3Object;
      this._s3Region = value.s3Region;
      this._s3SecretId = value.s3SecretId;
      this._s3SecretKey = value.s3SecretKey;
    }
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_object - computed: false, optional: false, required: true
  private _s3Object?: string; 
  public get s3Object() {
    return this.getStringAttribute('s3_object');
  }
  public set s3Object(value: string) {
    this._s3Object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectInput() {
    return this._s3Object;
  }

  // s3_region - computed: false, optional: false, required: true
  private _s3Region?: string; 
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }
  public set s3Region(value: string) {
    this._s3Region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RegionInput() {
    return this._s3Region;
  }

  // s3_secret_id - computed: false, optional: true, required: false
  private _s3SecretId?: string; 
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }
  public set s3SecretId(value: string) {
    this._s3SecretId = value;
  }
  public resetS3SecretId() {
    this._s3SecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretIdInput() {
    return this._s3SecretId;
  }

  // s3_secret_key - computed: false, optional: true, required: false
  private _s3SecretKey?: string; 
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
  public set s3SecretKey(value: string) {
    this._s3SecretKey = value;
  }
  public resetS3SecretKey() {
    this._s3SecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretKeyInput() {
    return this._s3SecretKey;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleUrlInputInfo {
  /**
  * URL of a video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#url MpsSchedule#url}
  */
  readonly url: string;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleUrlInputInfoToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleUrlInputInfoOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleUrlInputInfoToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleUrlInputInfoOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleUrlInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitle {
  /**
  * The input type. Valid values:  `COS`:A COS bucket address. `URL`:A URL. `AWS-S3`:An AWS S3 bucket address. Currently, this type is only supported for transcoding tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#type MpsSchedule#type}
  */
  readonly type: string;
  /**
  * cos_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#cos_input_info MpsSchedule#cos_input_info}
  */
  readonly cosInputInfo?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleCosInputInfo;
  /**
  * s3_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_input_info MpsSchedule#s3_input_info}
  */
  readonly s3InputInfo?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleS3InputInfo;
  /**
  * url_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#url_input_info MpsSchedule#url_input_info}
  */
  readonly urlInputInfo?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleUrlInputInfo;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_input_info: mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleCosInputInfoToTerraform(struct!.cosInputInfo),
    s3_input_info: mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleS3InputInfoToTerraform(struct!.s3InputInfo),
    url_input_info: mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleUrlInputInfoToTerraform(struct!.urlInputInfo),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos_input_info: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleCosInputInfoToHclTerraform(struct!.cosInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleCosInputInfoList",
    },
    s3_input_info: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleS3InputInfoToHclTerraform(struct!.s3InputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleS3InputInfoList",
    },
    url_input_info: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleUrlInputInfoToHclTerraform(struct!.urlInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleUrlInputInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cosInputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosInputInfo = this._cosInputInfo?.internalValue;
    }
    if (this._s3InputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3InputInfo = this._s3InputInfo?.internalValue;
    }
    if (this._urlInputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlInputInfo = this._urlInputInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._cosInputInfo.internalValue = undefined;
      this._s3InputInfo.internalValue = undefined;
      this._urlInputInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._cosInputInfo.internalValue = value.cosInputInfo;
      this._s3InputInfo.internalValue = value.s3InputInfo;
      this._urlInputInfo.internalValue = value.urlInputInfo;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // cos_input_info - computed: false, optional: true, required: false
  private _cosInputInfo = new MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleCosInputInfoOutputReference(this, "cos_input_info");
  public get cosInputInfo() {
    return this._cosInputInfo;
  }
  public putCosInputInfo(value: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleCosInputInfo) {
    this._cosInputInfo.internalValue = value;
  }
  public resetCosInputInfo() {
    this._cosInputInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosInputInfoInput() {
    return this._cosInputInfo.internalValue;
  }

  // s3_input_info - computed: false, optional: true, required: false
  private _s3InputInfo = new MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleS3InputInfoOutputReference(this, "s3_input_info");
  public get s3InputInfo() {
    return this._s3InputInfo;
  }
  public putS3InputInfo(value: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleS3InputInfo) {
    this._s3InputInfo.internalValue = value;
  }
  public resetS3InputInfo() {
    this._s3InputInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3InputInfoInput() {
    return this._s3InputInfo.internalValue;
  }

  // url_input_info - computed: false, optional: true, required: false
  private _urlInputInfo = new MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleUrlInputInfoOutputReference(this, "url_input_info");
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
  public putUrlInputInfo(value: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleUrlInputInfo) {
    this._urlInputInfo.internalValue = value;
  }
  public resetUrlInputInfo() {
    this._urlInputInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInputInfoInput() {
    return this._urlInputInfo.internalValue;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitles {
  /**
  * The inserting type. Valid values: `subtitle-stream`:Insert title track. `close-caption-708`:CEA-708 subtitle encode to SEI frame. `close-caption-608`:CEA-608 subtitle encode to SEI frame. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#type MpsSchedule#type}
  */
  readonly type?: string;
  /**
  * subtitle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#subtitle MpsSchedule#subtitle}
  */
  readonly subtitle?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitle;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    subtitle: mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleToTerraform(struct!.subtitle),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitle: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleToHclTerraform(struct!.subtitle),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._subtitle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._subtitle.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._subtitle.internalValue = value.subtitle;
    }
  }

  // type - computed: false, optional: true, required: false
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

  // subtitle - computed: false, optional: true, required: false
  private _subtitle = new MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitleOutputReference(this, "subtitle");
  public get subtitle() {
    return this._subtitle;
  }
  public putSubtitle(value: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesSubtitle) {
    this._subtitle.internalValue = value;
  }
  public resetSubtitle() {
    this._subtitle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle.internalValue;
  }
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesList extends cdktf.ComplexList {
  public internalValue? : MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitles[] | cdktf.IResolvable

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
  public get(index: number): MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesOutputReference {
    return new MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamCosInputInfo {
  /**
  * The COS bucket of the object to process, such as `TopRankVideo-125xxx88`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#bucket MpsSchedule#bucket}
  */
  readonly bucket: string;
  /**
  * The path of the object to process, such as `/movie/201907/WildAnimal.mov`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#object MpsSchedule#object}
  */
  readonly object: string;
  /**
  * The region of the COS bucket, such as `ap-chongqing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#region MpsSchedule#region}
  */
  readonly region: string;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamCosInputInfoToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamCosInputInfoOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    object: cdktf.stringToTerraform(struct!.object),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamCosInputInfoToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamCosInputInfoOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamCosInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamCosInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._object = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._object = value.object;
      this._region = value.region;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamS3InputInfo {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_bucket MpsSchedule#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The path of the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_object MpsSchedule#s3_object}
  */
  readonly s3Object: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_region MpsSchedule#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_id MpsSchedule#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_key MpsSchedule#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamS3InputInfoToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamS3InputInfoOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    s3_object: cdktf.stringToTerraform(struct!.s3Object),
    s3_region: cdktf.stringToTerraform(struct!.s3Region),
    s3_secret_id: cdktf.stringToTerraform(struct!.s3SecretId),
    s3_secret_key: cdktf.stringToTerraform(struct!.s3SecretKey),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamS3InputInfoToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamS3InputInfoOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_bucket: {
      value: cdktf.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_object: {
      value: cdktf.stringToHclTerraform(struct!.s3Object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_region: {
      value: cdktf.stringToHclTerraform(struct!.s3Region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamS3InputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Object !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Object = this._s3Object;
    }
    if (this._s3Region !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Region = this._s3Region;
    }
    if (this._s3SecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretId = this._s3SecretId;
    }
    if (this._s3SecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretKey = this._s3SecretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamS3InputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Bucket = undefined;
      this._s3Object = undefined;
      this._s3Region = undefined;
      this._s3SecretId = undefined;
      this._s3SecretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Bucket = value.s3Bucket;
      this._s3Object = value.s3Object;
      this._s3Region = value.s3Region;
      this._s3SecretId = value.s3SecretId;
      this._s3SecretKey = value.s3SecretKey;
    }
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_object - computed: false, optional: false, required: true
  private _s3Object?: string; 
  public get s3Object() {
    return this.getStringAttribute('s3_object');
  }
  public set s3Object(value: string) {
    this._s3Object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectInput() {
    return this._s3Object;
  }

  // s3_region - computed: false, optional: false, required: true
  private _s3Region?: string; 
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }
  public set s3Region(value: string) {
    this._s3Region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RegionInput() {
    return this._s3Region;
  }

  // s3_secret_id - computed: false, optional: true, required: false
  private _s3SecretId?: string; 
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }
  public set s3SecretId(value: string) {
    this._s3SecretId = value;
  }
  public resetS3SecretId() {
    this._s3SecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretIdInput() {
    return this._s3SecretId;
  }

  // s3_secret_key - computed: false, optional: true, required: false
  private _s3SecretKey?: string; 
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
  public set s3SecretKey(value: string) {
    this._s3SecretKey = value;
  }
  public resetS3SecretKey() {
    this._s3SecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretKeyInput() {
    return this._s3SecretKey;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamUrlInputInfo {
  /**
  * URL of a video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#url MpsSchedule#url}
  */
  readonly url: string;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamUrlInputInfoToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamUrlInputInfoOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamUrlInputInfoToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamUrlInputInfoOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamUrlInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStream {
  /**
  * The input type. Valid values: `COS`: A COS bucket address.  `URL`: A URL.  `AWS-S3`: An AWS S3 bucket address. Currently, this type is only supported for transcoding tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#type MpsSchedule#type}
  */
  readonly type: string;
  /**
  * cos_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#cos_input_info MpsSchedule#cos_input_info}
  */
  readonly cosInputInfo?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamCosInputInfo;
  /**
  * s3_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_input_info MpsSchedule#s3_input_info}
  */
  readonly s3InputInfo?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamS3InputInfo;
  /**
  * url_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#url_input_info MpsSchedule#url_input_info}
  */
  readonly urlInputInfo?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamUrlInputInfo;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStream | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_input_info: mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamCosInputInfoToTerraform(struct!.cosInputInfo),
    s3_input_info: mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamS3InputInfoToTerraform(struct!.s3InputInfo),
    url_input_info: mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamUrlInputInfoToTerraform(struct!.urlInputInfo),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStream | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos_input_info: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamCosInputInfoToHclTerraform(struct!.cosInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamCosInputInfoList",
    },
    s3_input_info: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamS3InputInfoToHclTerraform(struct!.s3InputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamS3InputInfoList",
    },
    url_input_info: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamUrlInputInfoToHclTerraform(struct!.urlInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamUrlInputInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStream | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cosInputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosInputInfo = this._cosInputInfo?.internalValue;
    }
    if (this._s3InputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3InputInfo = this._s3InputInfo?.internalValue;
    }
    if (this._urlInputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlInputInfo = this._urlInputInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStream | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._cosInputInfo.internalValue = undefined;
      this._s3InputInfo.internalValue = undefined;
      this._urlInputInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._cosInputInfo.internalValue = value.cosInputInfo;
      this._s3InputInfo.internalValue = value.s3InputInfo;
      this._urlInputInfo.internalValue = value.urlInputInfo;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // cos_input_info - computed: false, optional: true, required: false
  private _cosInputInfo = new MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamCosInputInfoOutputReference(this, "cos_input_info");
  public get cosInputInfo() {
    return this._cosInputInfo;
  }
  public putCosInputInfo(value: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamCosInputInfo) {
    this._cosInputInfo.internalValue = value;
  }
  public resetCosInputInfo() {
    this._cosInputInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosInputInfoInput() {
    return this._cosInputInfo.internalValue;
  }

  // s3_input_info - computed: false, optional: true, required: false
  private _s3InputInfo = new MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamS3InputInfoOutputReference(this, "s3_input_info");
  public get s3InputInfo() {
    return this._s3InputInfo;
  }
  public putS3InputInfo(value: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamS3InputInfo) {
    this._s3InputInfo.internalValue = value;
  }
  public resetS3InputInfo() {
    this._s3InputInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3InputInfoInput() {
    return this._s3InputInfo.internalValue;
  }

  // url_input_info - computed: false, optional: true, required: false
  private _urlInputInfo = new MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamUrlInputInfoOutputReference(this, "url_input_info");
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
  public putUrlInputInfo(value: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamUrlInputInfo) {
    this._urlInputInfo.internalValue = value;
  }
  public resetUrlInputInfo() {
    this._urlInputInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInputInfoInput() {
    return this._urlInputInfo.internalValue;
  }
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamList extends cdktf.ComplexList {
  public internalValue? : MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStream[] | cdktf.IResolvable

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
  public get(index: number): MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamOutputReference {
    return new MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAudioTemplate {
  /**
  * Audio channel system. Valid values: 1: Mono 2: Dual 6: StereoWhen the media is packaged in audio format (FLAC, OGG, MP3, M4A), the sound channel cannot be set to stereo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#audio_channel MpsSchedule#audio_channel}
  */
  readonly audioChannel?: number;
  /**
  * Audio stream bitrate in Kbps. Value range: 0 and [26, 256]. If the value is 0, the bitrate of the audio stream will be the same as that of the original audio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#bitrate MpsSchedule#bitrate}
  */
  readonly bitrate?: number;
  /**
  * Audio stream codec.When the outer `Container` parameter is `mp3`, the valid value is: libmp3lame.When the outer `Container` parameter is `ogg` or `flac`, the valid value is: flac.When the outer `Container` parameter is `m4a`, the valid values include: libfdk_aac; libmp3lame; ac3.When the outer `Container` parameter is `mp4` or `flv`, the valid values include: libfdk_aac: More suitable for mp4; libmp3lame: More suitable for flv; mp2.When the outer `Container` parameter is `hls`, the valid values include: libfdk_aac; libmp3lame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#codec MpsSchedule#codec}
  */
  readonly codec?: string;
  /**
  * Audio stream sample rate. Valid values: 32,000 44,100 48,000In Hz.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#sample_rate MpsSchedule#sample_rate}
  */
  readonly sampleRate?: number;
  /**
  * The audio tracks to retain. All audio tracks are retained by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#stream_selects MpsSchedule#stream_selects}
  */
  readonly streamSelects?: number[];
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAudioTemplateToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAudioTemplateOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAudioTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_channel: cdktf.numberToTerraform(struct!.audioChannel),
    bitrate: cdktf.numberToTerraform(struct!.bitrate),
    codec: cdktf.stringToTerraform(struct!.codec),
    sample_rate: cdktf.numberToTerraform(struct!.sampleRate),
    stream_selects: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.streamSelects),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAudioTemplateToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAudioTemplateOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAudioTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audio_channel: {
      value: cdktf.numberToHclTerraform(struct!.audioChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bitrate: {
      value: cdktf.numberToHclTerraform(struct!.bitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    codec: {
      value: cdktf.stringToHclTerraform(struct!.codec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_rate: {
      value: cdktf.numberToHclTerraform(struct!.sampleRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_selects: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.streamSelects),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAudioTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAudioTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioChannel = this._audioChannel;
    }
    if (this._bitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitrate = this._bitrate;
    }
    if (this._codec !== undefined) {
      hasAnyValues = true;
      internalValueResult.codec = this._codec;
    }
    if (this._sampleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRate = this._sampleRate;
    }
    if (this._streamSelects !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamSelects = this._streamSelects;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAudioTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioChannel = undefined;
      this._bitrate = undefined;
      this._codec = undefined;
      this._sampleRate = undefined;
      this._streamSelects = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioChannel = value.audioChannel;
      this._bitrate = value.bitrate;
      this._codec = value.codec;
      this._sampleRate = value.sampleRate;
      this._streamSelects = value.streamSelects;
    }
  }

  // audio_channel - computed: true, optional: true, required: false
  private _audioChannel?: number; 
  public get audioChannel() {
    return this.getNumberAttribute('audio_channel');
  }
  public set audioChannel(value: number) {
    this._audioChannel = value;
  }
  public resetAudioChannel() {
    this._audioChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioChannelInput() {
    return this._audioChannel;
  }

  // bitrate - computed: true, optional: true, required: false
  private _bitrate?: number; 
  public get bitrate() {
    return this.getNumberAttribute('bitrate');
  }
  public set bitrate(value: number) {
    this._bitrate = value;
  }
  public resetBitrate() {
    this._bitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitrateInput() {
    return this._bitrate;
  }

  // codec - computed: false, optional: true, required: false
  private _codec?: string; 
  public get codec() {
    return this.getStringAttribute('codec');
  }
  public set codec(value: string) {
    this._codec = value;
  }
  public resetCodec() {
    this._codec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codecInput() {
    return this._codec;
  }

  // sample_rate - computed: true, optional: true, required: false
  private _sampleRate?: number; 
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
  public set sampleRate(value: number) {
    this._sampleRate = value;
  }
  public resetSampleRate() {
    this._sampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateInput() {
    return this._sampleRate;
  }

  // stream_selects - computed: false, optional: true, required: false
  private _streamSelects?: number[]; 
  public get streamSelects() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('stream_selects')));
  }
  public set streamSelects(value: number[]) {
    this._streamSelects = value;
  }
  public resetStreamSelects() {
    this._streamSelects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamSelectsInput() {
    return this._streamSelects;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterSubtitleTemplate {
  /**
  * The text transparency. Value range: 0-1. 0: Completely transparent 1: Completely opaqueDefault value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#font_alpha MpsSchedule#font_alpha}
  */
  readonly fontAlpha?: number;
  /**
  * The font color in 0xRRGGBB format. Default value: 0xFFFFFF (white).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#font_color MpsSchedule#font_color}
  */
  readonly fontColor?: string;
  /**
  * The font size (pixels). If this is not specified, the font size in the subtitle file will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#font_size MpsSchedule#font_size}
  */
  readonly fontSize?: string;
  /**
  * The font type. Valid values: `hei.ttf` `song.ttf` `simkai.ttf` `arial.ttf` (for English only). The default is `hei.ttf`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#font_type MpsSchedule#font_type}
  */
  readonly fontType?: string;
  /**
  * The URL of the subtitles to add to the video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#path MpsSchedule#path}
  */
  readonly path?: string;
  /**
  * The subtitle track to add to the video. If both `Path` and `StreamIndex` are specified, `Path` will be used. You need to specify at least one of the two parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#stream_index MpsSchedule#stream_index}
  */
  readonly streamIndex?: number;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterSubtitleTemplateToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterSubtitleTemplateOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterSubtitleTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    font_alpha: cdktf.numberToTerraform(struct!.fontAlpha),
    font_color: cdktf.stringToTerraform(struct!.fontColor),
    font_size: cdktf.stringToTerraform(struct!.fontSize),
    font_type: cdktf.stringToTerraform(struct!.fontType),
    path: cdktf.stringToTerraform(struct!.path),
    stream_index: cdktf.numberToTerraform(struct!.streamIndex),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterSubtitleTemplateToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterSubtitleTemplateOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterSubtitleTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    font_alpha: {
      value: cdktf.numberToHclTerraform(struct!.fontAlpha),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    font_color: {
      value: cdktf.stringToHclTerraform(struct!.fontColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: cdktf.stringToHclTerraform(struct!.fontSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_type: {
      value: cdktf.stringToHclTerraform(struct!.fontType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_index: {
      value: cdktf.numberToHclTerraform(struct!.streamIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterSubtitleTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterSubtitleTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fontAlpha !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontAlpha = this._fontAlpha;
    }
    if (this._fontColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontColor = this._fontColor;
    }
    if (this._fontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize;
    }
    if (this._fontType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontType = this._fontType;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._streamIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamIndex = this._streamIndex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterSubtitleTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fontAlpha = undefined;
      this._fontColor = undefined;
      this._fontSize = undefined;
      this._fontType = undefined;
      this._path = undefined;
      this._streamIndex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fontAlpha = value.fontAlpha;
      this._fontColor = value.fontColor;
      this._fontSize = value.fontSize;
      this._fontType = value.fontType;
      this._path = value.path;
      this._streamIndex = value.streamIndex;
    }
  }

  // font_alpha - computed: false, optional: true, required: false
  private _fontAlpha?: number; 
  public get fontAlpha() {
    return this.getNumberAttribute('font_alpha');
  }
  public set fontAlpha(value: number) {
    this._fontAlpha = value;
  }
  public resetFontAlpha() {
    this._fontAlpha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontAlphaInput() {
    return this._fontAlpha;
  }

  // font_color - computed: false, optional: true, required: false
  private _fontColor?: string; 
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }
  public set fontColor(value: string) {
    this._fontColor = value;
  }
  public resetFontColor() {
    this._fontColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize?: string; 
  public get fontSize() {
    return this.getStringAttribute('font_size');
  }
  public set fontSize(value: string) {
    this._fontSize = value;
  }
  public resetFontSize() {
    this._fontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize;
  }

  // font_type - computed: false, optional: true, required: false
  private _fontType?: string; 
  public get fontType() {
    return this.getStringAttribute('font_type');
  }
  public set fontType(value: string) {
    this._fontType = value;
  }
  public resetFontType() {
    this._fontType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontTypeInput() {
    return this._fontType;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // stream_index - computed: false, optional: true, required: false
  private _streamIndex?: number; 
  public get streamIndex() {
    return this.getNumberAttribute('stream_index');
  }
  public set streamIndex(value: number) {
    this._streamIndex = value;
  }
  public resetStreamIndex() {
    this._streamIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamIndexInput() {
    return this._streamIndex;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterTehdConfig {
  /**
  * Maximum bitrate. If this parameter is left empty, no modification will be made.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#max_video_bitrate MpsSchedule#max_video_bitrate}
  */
  readonly maxVideoBitrate?: number;
  /**
  * TESHD type. Valid values: TEHD-100: TESHD-100.If this parameter is left blank, no modification will be made.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#type MpsSchedule#type}
  */
  readonly type?: string;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterTehdConfigToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterTehdConfigOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterTehdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_video_bitrate: cdktf.numberToTerraform(struct!.maxVideoBitrate),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterTehdConfigToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterTehdConfigOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterTehdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_video_bitrate: {
      value: cdktf.numberToHclTerraform(struct!.maxVideoBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterTehdConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterTehdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxVideoBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVideoBitrate = this._maxVideoBitrate;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterTehdConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxVideoBitrate = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxVideoBitrate = value.maxVideoBitrate;
      this._type = value.type;
    }
  }

  // max_video_bitrate - computed: true, optional: true, required: false
  private _maxVideoBitrate?: number; 
  public get maxVideoBitrate() {
    return this.getNumberAttribute('max_video_bitrate');
  }
  public set maxVideoBitrate(value: number) {
    this._maxVideoBitrate = value;
  }
  public resetMaxVideoBitrate() {
    this._maxVideoBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVideoBitrateInput() {
    return this._maxVideoBitrate;
  }

  // type - computed: false, optional: true, required: false
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
export interface MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterVideoTemplate {
  /**
  * Bitrate of a video stream in Kbps. Value range: 0 and [128, 35,000].If the value is 0, the bitrate of the video will be the same as that of the source video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#bitrate MpsSchedule#bitrate}
  */
  readonly bitrate?: number;
  /**
  * The video codec. Valid values: libx264: H.264 libx265: H.265 av1: AOMedia Video 1Note: You must specify a resolution (not higher than 640 x 480) if the H.265 codec is used.Note: You can only use the AOMedia Video 1 codec for MP4 files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#codec MpsSchedule#codec}
  */
  readonly codec?: string;
  /**
  * Whether to enable adaptive encoding. Valid values: 0: Disable 1: EnableDefault value: 0. If this parameter is set to `1`, multiple streams with different resolutions and bitrates will be generated automatically. The highest resolution, bitrate, and quality of the streams are determined by the values of `width` and `height`, `Bitrate`, and `Vcrf` in `VideoTemplate` respectively. If these parameters are not set in `VideoTemplate`, the highest resolution generated will be the same as that of the source video, and the highest video quality will be close to VMAF 95. To use this parameter or learn about the billing details of adaptive encoding, please contact your sales rep.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#content_adapt_stream MpsSchedule#content_adapt_stream}
  */
  readonly contentAdaptStream?: number;
  /**
  * Fill type. Fill refers to the way of processing a screenshot when its aspect ratio is different from that of the source video. The following fill types are supported:  stretch: stretch. The screenshot will be stretched frame by frame to match the aspect ratio of the source video, which may make the screenshot shorter or longer; black: fill with black. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with black color blocks. white: fill with white. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with white color blocks. gauss: fill with Gaussian blur. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with Gaussian blur.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#fill_type MpsSchedule#fill_type}
  */
  readonly fillType?: string;
  /**
  * Video frame rate in Hz. Value range: [0, 100].If the value is 0, the frame rate will be the same as that of the source video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#fps MpsSchedule#fps}
  */
  readonly fps?: number;
  /**
  * Frame interval between I keyframes. Value range: 0 and [1,100000]. If this parameter is 0, the system will automatically set the GOP length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#gop MpsSchedule#gop}
  */
  readonly gop?: number;
  /**
  * Maximum value of the height (or short side) of a video stream in px. Value range: 0 and [128, 4,096].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#height MpsSchedule#height}
  */
  readonly height?: number;
  /**
  * Resolution adaption. Valid values: open: Enabled. When resolution adaption is enabled, `Width` indicates the long side of a video, while `Height` indicates the short side. close: Disabled. When resolution adaption is disabled, `Width` indicates the width of a video, while `Height` indicates the height.Note: When resolution adaption is enabled, `Width` cannot be smaller than `Height`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#resolution_adaptive MpsSchedule#resolution_adaptive}
  */
  readonly resolutionAdaptive?: string;
  /**
  * The control factor of video constant bitrate. Value range: [0, 51]. This parameter will be disabled if you enter `0`.It is not recommended to specify this parameter if there are no special requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#vcrf MpsSchedule#vcrf}
  */
  readonly vcrf?: number;
  /**
  * Maximum value of the width (or long side) of a video stream in px. Value range: 0 and [128, 4,096]. If both `Width` and `Height` are 0, the resolution will be the same as that of the source video; If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled; If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled; If both `Width` and `Height` are not 0, the custom resolution will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#width MpsSchedule#width}
  */
  readonly width?: number;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterVideoTemplateToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterVideoTemplateOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterVideoTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bitrate: cdktf.numberToTerraform(struct!.bitrate),
    codec: cdktf.stringToTerraform(struct!.codec),
    content_adapt_stream: cdktf.numberToTerraform(struct!.contentAdaptStream),
    fill_type: cdktf.stringToTerraform(struct!.fillType),
    fps: cdktf.numberToTerraform(struct!.fps),
    gop: cdktf.numberToTerraform(struct!.gop),
    height: cdktf.numberToTerraform(struct!.height),
    resolution_adaptive: cdktf.stringToTerraform(struct!.resolutionAdaptive),
    vcrf: cdktf.numberToTerraform(struct!.vcrf),
    width: cdktf.numberToTerraform(struct!.width),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterVideoTemplateToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterVideoTemplateOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterVideoTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bitrate: {
      value: cdktf.numberToHclTerraform(struct!.bitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    codec: {
      value: cdktf.stringToHclTerraform(struct!.codec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_adapt_stream: {
      value: cdktf.numberToHclTerraform(struct!.contentAdaptStream),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fill_type: {
      value: cdktf.stringToHclTerraform(struct!.fillType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fps: {
      value: cdktf.numberToHclTerraform(struct!.fps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gop: {
      value: cdktf.numberToHclTerraform(struct!.gop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resolution_adaptive: {
      value: cdktf.stringToHclTerraform(struct!.resolutionAdaptive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcrf: {
      value: cdktf.numberToHclTerraform(struct!.vcrf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterVideoTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterVideoTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitrate = this._bitrate;
    }
    if (this._codec !== undefined) {
      hasAnyValues = true;
      internalValueResult.codec = this._codec;
    }
    if (this._contentAdaptStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentAdaptStream = this._contentAdaptStream;
    }
    if (this._fillType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fillType = this._fillType;
    }
    if (this._fps !== undefined) {
      hasAnyValues = true;
      internalValueResult.fps = this._fps;
    }
    if (this._gop !== undefined) {
      hasAnyValues = true;
      internalValueResult.gop = this._gop;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._resolutionAdaptive !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolutionAdaptive = this._resolutionAdaptive;
    }
    if (this._vcrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcrf = this._vcrf;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterVideoTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bitrate = undefined;
      this._codec = undefined;
      this._contentAdaptStream = undefined;
      this._fillType = undefined;
      this._fps = undefined;
      this._gop = undefined;
      this._height = undefined;
      this._resolutionAdaptive = undefined;
      this._vcrf = undefined;
      this._width = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bitrate = value.bitrate;
      this._codec = value.codec;
      this._contentAdaptStream = value.contentAdaptStream;
      this._fillType = value.fillType;
      this._fps = value.fps;
      this._gop = value.gop;
      this._height = value.height;
      this._resolutionAdaptive = value.resolutionAdaptive;
      this._vcrf = value.vcrf;
      this._width = value.width;
    }
  }

  // bitrate - computed: true, optional: true, required: false
  private _bitrate?: number; 
  public get bitrate() {
    return this.getNumberAttribute('bitrate');
  }
  public set bitrate(value: number) {
    this._bitrate = value;
  }
  public resetBitrate() {
    this._bitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitrateInput() {
    return this._bitrate;
  }

  // codec - computed: false, optional: true, required: false
  private _codec?: string; 
  public get codec() {
    return this.getStringAttribute('codec');
  }
  public set codec(value: string) {
    this._codec = value;
  }
  public resetCodec() {
    this._codec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codecInput() {
    return this._codec;
  }

  // content_adapt_stream - computed: false, optional: true, required: false
  private _contentAdaptStream?: number; 
  public get contentAdaptStream() {
    return this.getNumberAttribute('content_adapt_stream');
  }
  public set contentAdaptStream(value: number) {
    this._contentAdaptStream = value;
  }
  public resetContentAdaptStream() {
    this._contentAdaptStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentAdaptStreamInput() {
    return this._contentAdaptStream;
  }

  // fill_type - computed: false, optional: true, required: false
  private _fillType?: string; 
  public get fillType() {
    return this.getStringAttribute('fill_type');
  }
  public set fillType(value: string) {
    this._fillType = value;
  }
  public resetFillType() {
    this._fillType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fillTypeInput() {
    return this._fillType;
  }

  // fps - computed: true, optional: true, required: false
  private _fps?: number; 
  public get fps() {
    return this.getNumberAttribute('fps');
  }
  public set fps(value: number) {
    this._fps = value;
  }
  public resetFps() {
    this._fps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpsInput() {
    return this._fps;
  }

  // gop - computed: true, optional: true, required: false
  private _gop?: number; 
  public get gop() {
    return this.getNumberAttribute('gop');
  }
  public set gop(value: number) {
    this._gop = value;
  }
  public resetGop() {
    this._gop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gopInput() {
    return this._gop;
  }

  // height - computed: true, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // resolution_adaptive - computed: false, optional: true, required: false
  private _resolutionAdaptive?: string; 
  public get resolutionAdaptive() {
    return this.getStringAttribute('resolution_adaptive');
  }
  public set resolutionAdaptive(value: string) {
    this._resolutionAdaptive = value;
  }
  public resetResolutionAdaptive() {
    this._resolutionAdaptive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionAdaptiveInput() {
    return this._resolutionAdaptive;
  }

  // vcrf - computed: true, optional: true, required: false
  private _vcrf?: number; 
  public get vcrf() {
    return this.getNumberAttribute('vcrf');
  }
  public set vcrf(value: number) {
    this._vcrf = value;
  }
  public resetVcrf() {
    this._vcrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcrfInput() {
    return this._vcrf;
  }

  // width - computed: true, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameter {
  /**
  * Container format. Valid values: mp4, flv, hls, mp3, flac, ogg, and m4a; mp3, flac, ogg, and m4a are formats of audio files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#container MpsSchedule#container}
  */
  readonly container?: string;
  /**
  * Whether to remove audio data. Valid values: 0: retain 1: remove.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#remove_audio MpsSchedule#remove_audio}
  */
  readonly removeAudio?: number;
  /**
  * Whether to remove video data. Valid values: 0: retain 1: remove.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#remove_video MpsSchedule#remove_video}
  */
  readonly removeVideo?: number;
  /**
  * Transcoding extension field.Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#std_ext_info MpsSchedule#std_ext_info}
  */
  readonly stdExtInfo?: string;
  /**
  * add_on_subtitles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#add_on_subtitles MpsSchedule#add_on_subtitles}
  */
  readonly addOnSubtitles?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitles[] | cdktf.IResolvable;
  /**
  * addon_audio_stream block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#addon_audio_stream MpsSchedule#addon_audio_stream}
  */
  readonly addonAudioStream?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStream[] | cdktf.IResolvable;
  /**
  * audio_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#audio_template MpsSchedule#audio_template}
  */
  readonly audioTemplate?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAudioTemplate;
  /**
  * subtitle_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#subtitle_template MpsSchedule#subtitle_template}
  */
  readonly subtitleTemplate?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterSubtitleTemplate;
  /**
  * tehd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#tehd_config MpsSchedule#tehd_config}
  */
  readonly tehdConfig?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterTehdConfig;
  /**
  * video_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#video_template MpsSchedule#video_template}
  */
  readonly videoTemplate?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterVideoTemplate;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    remove_audio: cdktf.numberToTerraform(struct!.removeAudio),
    remove_video: cdktf.numberToTerraform(struct!.removeVideo),
    std_ext_info: cdktf.stringToTerraform(struct!.stdExtInfo),
    add_on_subtitles: cdktf.listMapper(mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesToTerraform, true)(struct!.addOnSubtitles),
    addon_audio_stream: cdktf.listMapper(mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamToTerraform, true)(struct!.addonAudioStream),
    audio_template: mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAudioTemplateToTerraform(struct!.audioTemplate),
    subtitle_template: mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterSubtitleTemplateToTerraform(struct!.subtitleTemplate),
    tehd_config: mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterTehdConfigToTerraform(struct!.tehdConfig),
    video_template: mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterVideoTemplateToTerraform(struct!.videoTemplate),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_audio: {
      value: cdktf.numberToHclTerraform(struct!.removeAudio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remove_video: {
      value: cdktf.numberToHclTerraform(struct!.removeVideo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    std_ext_info: {
      value: cdktf.stringToHclTerraform(struct!.stdExtInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    add_on_subtitles: {
      value: cdktf.listMapperHcl(mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesToHclTerraform, true)(struct!.addOnSubtitles),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesList",
    },
    addon_audio_stream: {
      value: cdktf.listMapperHcl(mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamToHclTerraform, true)(struct!.addonAudioStream),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamList",
    },
    audio_template: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAudioTemplateToHclTerraform(struct!.audioTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAudioTemplateList",
    },
    subtitle_template: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterSubtitleTemplateToHclTerraform(struct!.subtitleTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterSubtitleTemplateList",
    },
    tehd_config: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterTehdConfigToHclTerraform(struct!.tehdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterTehdConfigList",
    },
    video_template: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterVideoTemplateToHclTerraform(struct!.videoTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterVideoTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._removeAudio !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeAudio = this._removeAudio;
    }
    if (this._removeVideo !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeVideo = this._removeVideo;
    }
    if (this._stdExtInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.stdExtInfo = this._stdExtInfo;
    }
    if (this._addOnSubtitles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addOnSubtitles = this._addOnSubtitles?.internalValue;
    }
    if (this._addonAudioStream?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addonAudioStream = this._addonAudioStream?.internalValue;
    }
    if (this._audioTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioTemplate = this._audioTemplate?.internalValue;
    }
    if (this._subtitleTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitleTemplate = this._subtitleTemplate?.internalValue;
    }
    if (this._tehdConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tehdConfig = this._tehdConfig?.internalValue;
    }
    if (this._videoTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoTemplate = this._videoTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._container = undefined;
      this._removeAudio = undefined;
      this._removeVideo = undefined;
      this._stdExtInfo = undefined;
      this._addOnSubtitles.internalValue = undefined;
      this._addonAudioStream.internalValue = undefined;
      this._audioTemplate.internalValue = undefined;
      this._subtitleTemplate.internalValue = undefined;
      this._tehdConfig.internalValue = undefined;
      this._videoTemplate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._container = value.container;
      this._removeAudio = value.removeAudio;
      this._removeVideo = value.removeVideo;
      this._stdExtInfo = value.stdExtInfo;
      this._addOnSubtitles.internalValue = value.addOnSubtitles;
      this._addonAudioStream.internalValue = value.addonAudioStream;
      this._audioTemplate.internalValue = value.audioTemplate;
      this._subtitleTemplate.internalValue = value.subtitleTemplate;
      this._tehdConfig.internalValue = value.tehdConfig;
      this._videoTemplate.internalValue = value.videoTemplate;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // remove_audio - computed: true, optional: true, required: false
  private _removeAudio?: number; 
  public get removeAudio() {
    return this.getNumberAttribute('remove_audio');
  }
  public set removeAudio(value: number) {
    this._removeAudio = value;
  }
  public resetRemoveAudio() {
    this._removeAudio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeAudioInput() {
    return this._removeAudio;
  }

  // remove_video - computed: true, optional: true, required: false
  private _removeVideo?: number; 
  public get removeVideo() {
    return this.getNumberAttribute('remove_video');
  }
  public set removeVideo(value: number) {
    this._removeVideo = value;
  }
  public resetRemoveVideo() {
    this._removeVideo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeVideoInput() {
    return this._removeVideo;
  }

  // std_ext_info - computed: false, optional: true, required: false
  private _stdExtInfo?: string; 
  public get stdExtInfo() {
    return this.getStringAttribute('std_ext_info');
  }
  public set stdExtInfo(value: string) {
    this._stdExtInfo = value;
  }
  public resetStdExtInfo() {
    this._stdExtInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stdExtInfoInput() {
    return this._stdExtInfo;
  }

  // add_on_subtitles - computed: false, optional: true, required: false
  private _addOnSubtitles = new MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitlesList(this, "add_on_subtitles", false);
  public get addOnSubtitles() {
    return this._addOnSubtitles;
  }
  public putAddOnSubtitles(value: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddOnSubtitles[] | cdktf.IResolvable) {
    this._addOnSubtitles.internalValue = value;
  }
  public resetAddOnSubtitles() {
    this._addOnSubtitles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addOnSubtitlesInput() {
    return this._addOnSubtitles.internalValue;
  }

  // addon_audio_stream - computed: false, optional: true, required: false
  private _addonAudioStream = new MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStreamList(this, "addon_audio_stream", false);
  public get addonAudioStream() {
    return this._addonAudioStream;
  }
  public putAddonAudioStream(value: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAddonAudioStream[] | cdktf.IResolvable) {
    this._addonAudioStream.internalValue = value;
  }
  public resetAddonAudioStream() {
    this._addonAudioStream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonAudioStreamInput() {
    return this._addonAudioStream.internalValue;
  }

  // audio_template - computed: false, optional: true, required: false
  private _audioTemplate = new MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAudioTemplateOutputReference(this, "audio_template");
  public get audioTemplate() {
    return this._audioTemplate;
  }
  public putAudioTemplate(value: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterAudioTemplate) {
    this._audioTemplate.internalValue = value;
  }
  public resetAudioTemplate() {
    this._audioTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioTemplateInput() {
    return this._audioTemplate.internalValue;
  }

  // subtitle_template - computed: false, optional: true, required: false
  private _subtitleTemplate = new MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterSubtitleTemplateOutputReference(this, "subtitle_template");
  public get subtitleTemplate() {
    return this._subtitleTemplate;
  }
  public putSubtitleTemplate(value: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterSubtitleTemplate) {
    this._subtitleTemplate.internalValue = value;
  }
  public resetSubtitleTemplate() {
    this._subtitleTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleTemplateInput() {
    return this._subtitleTemplate.internalValue;
  }

  // tehd_config - computed: false, optional: true, required: false
  private _tehdConfig = new MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterTehdConfigOutputReference(this, "tehd_config");
  public get tehdConfig() {
    return this._tehdConfig;
  }
  public putTehdConfig(value: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterTehdConfig) {
    this._tehdConfig.internalValue = value;
  }
  public resetTehdConfig() {
    this._tehdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tehdConfigInput() {
    return this._tehdConfig.internalValue;
  }

  // video_template - computed: false, optional: true, required: false
  private _videoTemplate = new MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterVideoTemplateOutputReference(this, "video_template");
  public get videoTemplate() {
    return this._videoTemplate;
  }
  public putVideoTemplate(value: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterVideoTemplate) {
    this._videoTemplate.internalValue = value;
  }
  public resetVideoTemplate() {
    this._videoTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoTemplateInput() {
    return this._videoTemplate.internalValue;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterAudioTemplate {
  /**
  * Audio channel system. Valid values: 1: Mono 2: Dual 6: StereoWhen the media is packaged in audio format (FLAC, OGG, MP3, M4A), the sound channel cannot be set to stereo.Default value: 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#audio_channel MpsSchedule#audio_channel}
  */
  readonly audioChannel?: number;
  /**
  * Audio stream bitrate in Kbps. Value range: 0 and [26, 256].If the value is 0, the bitrate of the audio stream will be the same as that of the original audio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#bitrate MpsSchedule#bitrate}
  */
  readonly bitrate: number;
  /**
  * Audio stream codec.When the outer `Container` parameter is `mp3`, the valid value is: libmp3lame.When the outer `Container` parameter is `ogg` or `flac`, the valid value is: flac.When the outer `Container` parameter is `m4a`, the valid values include: libfdk_aac; libmp3lame; ac3.When the outer `Container` parameter is `mp4` or `flv`, the valid values include: libfdk_aac: more suitable for mp4; libmp3lame: more suitable for flv.When the outer `Container` parameter is `hls`, the valid values include: libfdk_aac; libmp3lame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#codec MpsSchedule#codec}
  */
  readonly codec: string;
  /**
  * Audio stream sample rate. Valid values: 32,000 44,100 48,000In Hz.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#sample_rate MpsSchedule#sample_rate}
  */
  readonly sampleRate: number;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskRawParameterAudioTemplateToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterAudioTemplateOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterAudioTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_channel: cdktf.numberToTerraform(struct!.audioChannel),
    bitrate: cdktf.numberToTerraform(struct!.bitrate),
    codec: cdktf.stringToTerraform(struct!.codec),
    sample_rate: cdktf.numberToTerraform(struct!.sampleRate),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskRawParameterAudioTemplateToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterAudioTemplateOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterAudioTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audio_channel: {
      value: cdktf.numberToHclTerraform(struct!.audioChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bitrate: {
      value: cdktf.numberToHclTerraform(struct!.bitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    codec: {
      value: cdktf.stringToHclTerraform(struct!.codec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_rate: {
      value: cdktf.numberToHclTerraform(struct!.sampleRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterAudioTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterAudioTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioChannel = this._audioChannel;
    }
    if (this._bitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitrate = this._bitrate;
    }
    if (this._codec !== undefined) {
      hasAnyValues = true;
      internalValueResult.codec = this._codec;
    }
    if (this._sampleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRate = this._sampleRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterAudioTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioChannel = undefined;
      this._bitrate = undefined;
      this._codec = undefined;
      this._sampleRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioChannel = value.audioChannel;
      this._bitrate = value.bitrate;
      this._codec = value.codec;
      this._sampleRate = value.sampleRate;
    }
  }

  // audio_channel - computed: false, optional: true, required: false
  private _audioChannel?: number; 
  public get audioChannel() {
    return this.getNumberAttribute('audio_channel');
  }
  public set audioChannel(value: number) {
    this._audioChannel = value;
  }
  public resetAudioChannel() {
    this._audioChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioChannelInput() {
    return this._audioChannel;
  }

  // bitrate - computed: false, optional: false, required: true
  private _bitrate?: number; 
  public get bitrate() {
    return this.getNumberAttribute('bitrate');
  }
  public set bitrate(value: number) {
    this._bitrate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bitrateInput() {
    return this._bitrate;
  }

  // codec - computed: false, optional: false, required: true
  private _codec?: string; 
  public get codec() {
    return this.getStringAttribute('codec');
  }
  public set codec(value: string) {
    this._codec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codecInput() {
    return this._codec;
  }

  // sample_rate - computed: false, optional: false, required: true
  private _sampleRate?: number; 
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
  public set sampleRate(value: number) {
    this._sampleRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateInput() {
    return this._sampleRate;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterTehdConfig {
  /**
  * Maximum bitrate, which is valid when `Type` is `TESHD`.If this parameter is left empty or 0 is entered, there will be no upper limit for bitrate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#max_video_bitrate MpsSchedule#max_video_bitrate}
  */
  readonly maxVideoBitrate?: number;
  /**
  * TESHD type. Valid values: TEHD-100: TESHD-100.If this parameter is left empty, TESHD will not be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#type MpsSchedule#type}
  */
  readonly type: string;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskRawParameterTehdConfigToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterTehdConfigOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterTehdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_video_bitrate: cdktf.numberToTerraform(struct!.maxVideoBitrate),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskRawParameterTehdConfigToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterTehdConfigOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterTehdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_video_bitrate: {
      value: cdktf.numberToHclTerraform(struct!.maxVideoBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterTehdConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterTehdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxVideoBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVideoBitrate = this._maxVideoBitrate;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterTehdConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxVideoBitrate = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxVideoBitrate = value.maxVideoBitrate;
      this._type = value.type;
    }
  }

  // max_video_bitrate - computed: false, optional: true, required: false
  private _maxVideoBitrate?: number; 
  public get maxVideoBitrate() {
    return this.getNumberAttribute('max_video_bitrate');
  }
  public set maxVideoBitrate(value: number) {
    this._maxVideoBitrate = value;
  }
  public resetMaxVideoBitrate() {
    this._maxVideoBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVideoBitrateInput() {
    return this._maxVideoBitrate;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterVideoTemplate {
  /**
  * The video bitrate (Kbps). Value range: 0 and [128, 35000].If the value is 0, the bitrate of the video will be the same as that of the source video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#bitrate MpsSchedule#bitrate}
  */
  readonly bitrate: number;
  /**
  * The video codec. Valid values: `libx264`: H.264 `libx265`: H.265 `av1`: AOMedia Video 1Note: You must specify a resolution (not higher than 640 x 480) if the H.265 codec is used.Note: You can only use the AOMedia Video 1 codec for MP4 files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#codec MpsSchedule#codec}
  */
  readonly codec: string;
  /**
  * The fill mode, which indicates how a video is resized when the video's original aspect ratio is different from the target aspect ratio. Valid values: stretch: Stretch the image frame by frame to fill the entire screen. The video image may become squashed or stretched after transcoding. black: Keep the image&#39;s original aspect ratio and fill the blank space with black bars. white: Keep the image's original aspect ratio and fill the blank space with white bars. gauss: Keep the image's original aspect ratio and apply Gaussian blur to the blank space.Default value: black.Note: Only `stretch` and `black` are supported for adaptive bitrate streaming.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#fill_type MpsSchedule#fill_type}
  */
  readonly fillType?: string;
  /**
  * The video frame rate (Hz). Value range: [0, 100].If the value is 0, the frame rate will be the same as that of the source video.Note: For adaptive bitrate streaming, the value range of this parameter is [0, 60].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#fps MpsSchedule#fps}
  */
  readonly fps: number;
  /**
  * Frame interval between I keyframes. Value range: 0 and [1,100000].If this parameter is 0 or left empty, the system will automatically set the GOP length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#gop MpsSchedule#gop}
  */
  readonly gop?: number;
  /**
  * Maximum value of the height (or short side) of a video stream in px. Value range: 0 and [128, 4,096]. If both `Width` and `Height` are 0, the resolution will be the same as that of the source video; If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled; If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled; If both `Width` and `Height` are not 0, the custom resolution will be used.Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#height MpsSchedule#height}
  */
  readonly height?: number;
  /**
  * Resolution adaption. Valid values: open: Enabled. When resolution adaption is enabled, `Width` indicates the long side of a video, while `Height` indicates the short side. close: Disabled. When resolution adaption is disabled, `Width` indicates the width of a video, while `Height` indicates the height.Default value: open.Note: When resolution adaption is enabled, `Width` cannot be smaller than `Height`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#resolution_adaptive MpsSchedule#resolution_adaptive}
  */
  readonly resolutionAdaptive?: string;
  /**
  * The control factor of video constant bitrate. Value range: [1, 51]If this parameter is specified, CRF (a bitrate control method) will be used for transcoding. (Video bitrate will no longer take effect.)It is not recommended to specify this parameter if there are no special requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#vcrf MpsSchedule#vcrf}
  */
  readonly vcrf?: number;
  /**
  * Maximum value of the width (or long side) of a video stream in px. Value range: 0 and [128, 4,096]. If both `Width` and `Height` are 0, the resolution will be the same as that of the source video; If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled; If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled; If both `Width` and `Height` are not 0, the custom resolution will be used.Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#width MpsSchedule#width}
  */
  readonly width?: number;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskRawParameterVideoTemplateToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterVideoTemplateOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterVideoTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bitrate: cdktf.numberToTerraform(struct!.bitrate),
    codec: cdktf.stringToTerraform(struct!.codec),
    fill_type: cdktf.stringToTerraform(struct!.fillType),
    fps: cdktf.numberToTerraform(struct!.fps),
    gop: cdktf.numberToTerraform(struct!.gop),
    height: cdktf.numberToTerraform(struct!.height),
    resolution_adaptive: cdktf.stringToTerraform(struct!.resolutionAdaptive),
    vcrf: cdktf.numberToTerraform(struct!.vcrf),
    width: cdktf.numberToTerraform(struct!.width),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskRawParameterVideoTemplateToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterVideoTemplateOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterVideoTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bitrate: {
      value: cdktf.numberToHclTerraform(struct!.bitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    codec: {
      value: cdktf.stringToHclTerraform(struct!.codec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fill_type: {
      value: cdktf.stringToHclTerraform(struct!.fillType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fps: {
      value: cdktf.numberToHclTerraform(struct!.fps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gop: {
      value: cdktf.numberToHclTerraform(struct!.gop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resolution_adaptive: {
      value: cdktf.stringToHclTerraform(struct!.resolutionAdaptive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcrf: {
      value: cdktf.numberToHclTerraform(struct!.vcrf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterVideoTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterVideoTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitrate = this._bitrate;
    }
    if (this._codec !== undefined) {
      hasAnyValues = true;
      internalValueResult.codec = this._codec;
    }
    if (this._fillType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fillType = this._fillType;
    }
    if (this._fps !== undefined) {
      hasAnyValues = true;
      internalValueResult.fps = this._fps;
    }
    if (this._gop !== undefined) {
      hasAnyValues = true;
      internalValueResult.gop = this._gop;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._resolutionAdaptive !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolutionAdaptive = this._resolutionAdaptive;
    }
    if (this._vcrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcrf = this._vcrf;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterVideoTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bitrate = undefined;
      this._codec = undefined;
      this._fillType = undefined;
      this._fps = undefined;
      this._gop = undefined;
      this._height = undefined;
      this._resolutionAdaptive = undefined;
      this._vcrf = undefined;
      this._width = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bitrate = value.bitrate;
      this._codec = value.codec;
      this._fillType = value.fillType;
      this._fps = value.fps;
      this._gop = value.gop;
      this._height = value.height;
      this._resolutionAdaptive = value.resolutionAdaptive;
      this._vcrf = value.vcrf;
      this._width = value.width;
    }
  }

  // bitrate - computed: false, optional: false, required: true
  private _bitrate?: number; 
  public get bitrate() {
    return this.getNumberAttribute('bitrate');
  }
  public set bitrate(value: number) {
    this._bitrate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bitrateInput() {
    return this._bitrate;
  }

  // codec - computed: false, optional: false, required: true
  private _codec?: string; 
  public get codec() {
    return this.getStringAttribute('codec');
  }
  public set codec(value: string) {
    this._codec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codecInput() {
    return this._codec;
  }

  // fill_type - computed: false, optional: true, required: false
  private _fillType?: string; 
  public get fillType() {
    return this.getStringAttribute('fill_type');
  }
  public set fillType(value: string) {
    this._fillType = value;
  }
  public resetFillType() {
    this._fillType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fillTypeInput() {
    return this._fillType;
  }

  // fps - computed: false, optional: false, required: true
  private _fps?: number; 
  public get fps() {
    return this.getNumberAttribute('fps');
  }
  public set fps(value: number) {
    this._fps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fpsInput() {
    return this._fps;
  }

  // gop - computed: false, optional: true, required: false
  private _gop?: number; 
  public get gop() {
    return this.getNumberAttribute('gop');
  }
  public set gop(value: number) {
    this._gop = value;
  }
  public resetGop() {
    this._gop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gopInput() {
    return this._gop;
  }

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // resolution_adaptive - computed: false, optional: true, required: false
  private _resolutionAdaptive?: string; 
  public get resolutionAdaptive() {
    return this.getStringAttribute('resolution_adaptive');
  }
  public set resolutionAdaptive(value: string) {
    this._resolutionAdaptive = value;
  }
  public resetResolutionAdaptive() {
    this._resolutionAdaptive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionAdaptiveInput() {
    return this._resolutionAdaptive;
  }

  // vcrf - computed: false, optional: true, required: false
  private _vcrf?: number; 
  public get vcrf() {
    return this.getNumberAttribute('vcrf');
  }
  public set vcrf(value: number) {
    this._vcrf = value;
  }
  public resetVcrf() {
    this._vcrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcrfInput() {
    return this._vcrf;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskRawParameter {
  /**
  * Container. Valid values: mp4; flv; hls; mp3; flac; ogg; m4a. Among them, mp3, flac, ogg, and m4a are for audio files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#container MpsSchedule#container}
  */
  readonly container: string;
  /**
  * Whether to remove audio data. Valid values: 0: retain; 1: remove.Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#remove_audio MpsSchedule#remove_audio}
  */
  readonly removeAudio?: number;
  /**
  * Whether to remove video data. Valid values: 0: retain; 1: remove.Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#remove_video MpsSchedule#remove_video}
  */
  readonly removeVideo?: number;
  /**
  * audio_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#audio_template MpsSchedule#audio_template}
  */
  readonly audioTemplate?: MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterAudioTemplate;
  /**
  * tehd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#tehd_config MpsSchedule#tehd_config}
  */
  readonly tehdConfig?: MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterTehdConfig;
  /**
  * video_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#video_template MpsSchedule#video_template}
  */
  readonly videoTemplate?: MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterVideoTemplate;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskRawParameterToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskRawParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    remove_audio: cdktf.numberToTerraform(struct!.removeAudio),
    remove_video: cdktf.numberToTerraform(struct!.removeVideo),
    audio_template: mpsScheduleActivitiesActivityParaTranscodeTaskRawParameterAudioTemplateToTerraform(struct!.audioTemplate),
    tehd_config: mpsScheduleActivitiesActivityParaTranscodeTaskRawParameterTehdConfigToTerraform(struct!.tehdConfig),
    video_template: mpsScheduleActivitiesActivityParaTranscodeTaskRawParameterVideoTemplateToTerraform(struct!.videoTemplate),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskRawParameterToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskRawParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_audio: {
      value: cdktf.numberToHclTerraform(struct!.removeAudio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remove_video: {
      value: cdktf.numberToHclTerraform(struct!.removeVideo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    audio_template: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskRawParameterAudioTemplateToHclTerraform(struct!.audioTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterAudioTemplateList",
    },
    tehd_config: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskRawParameterTehdConfigToHclTerraform(struct!.tehdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterTehdConfigList",
    },
    video_template: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskRawParameterVideoTemplateToHclTerraform(struct!.videoTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterVideoTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskRawParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._removeAudio !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeAudio = this._removeAudio;
    }
    if (this._removeVideo !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeVideo = this._removeVideo;
    }
    if (this._audioTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioTemplate = this._audioTemplate?.internalValue;
    }
    if (this._tehdConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tehdConfig = this._tehdConfig?.internalValue;
    }
    if (this._videoTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoTemplate = this._videoTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskRawParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._container = undefined;
      this._removeAudio = undefined;
      this._removeVideo = undefined;
      this._audioTemplate.internalValue = undefined;
      this._tehdConfig.internalValue = undefined;
      this._videoTemplate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._container = value.container;
      this._removeAudio = value.removeAudio;
      this._removeVideo = value.removeVideo;
      this._audioTemplate.internalValue = value.audioTemplate;
      this._tehdConfig.internalValue = value.tehdConfig;
      this._videoTemplate.internalValue = value.videoTemplate;
    }
  }

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // remove_audio - computed: false, optional: true, required: false
  private _removeAudio?: number; 
  public get removeAudio() {
    return this.getNumberAttribute('remove_audio');
  }
  public set removeAudio(value: number) {
    this._removeAudio = value;
  }
  public resetRemoveAudio() {
    this._removeAudio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeAudioInput() {
    return this._removeAudio;
  }

  // remove_video - computed: false, optional: true, required: false
  private _removeVideo?: number; 
  public get removeVideo() {
    return this.getNumberAttribute('remove_video');
  }
  public set removeVideo(value: number) {
    this._removeVideo = value;
  }
  public resetRemoveVideo() {
    this._removeVideo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeVideoInput() {
    return this._removeVideo;
  }

  // audio_template - computed: false, optional: true, required: false
  private _audioTemplate = new MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterAudioTemplateOutputReference(this, "audio_template");
  public get audioTemplate() {
    return this._audioTemplate;
  }
  public putAudioTemplate(value: MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterAudioTemplate) {
    this._audioTemplate.internalValue = value;
  }
  public resetAudioTemplate() {
    this._audioTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioTemplateInput() {
    return this._audioTemplate.internalValue;
  }

  // tehd_config - computed: false, optional: true, required: false
  private _tehdConfig = new MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterTehdConfigOutputReference(this, "tehd_config");
  public get tehdConfig() {
    return this._tehdConfig;
  }
  public putTehdConfig(value: MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterTehdConfig) {
    this._tehdConfig.internalValue = value;
  }
  public resetTehdConfig() {
    this._tehdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tehdConfigInput() {
    return this._tehdConfig.internalValue;
  }

  // video_template - computed: false, optional: true, required: false
  private _videoTemplate = new MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterVideoTemplateOutputReference(this, "video_template");
  public get videoTemplate() {
    return this._videoTemplate;
  }
  public putVideoTemplate(value: MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterVideoTemplate) {
    this._videoTemplate.internalValue = value;
  }
  public resetVideoTemplate() {
    this._videoTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoTemplateInput() {
    return this._videoTemplate.internalValue;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo {
  /**
  * The COS bucket of the object to process, such as `TopRankVideo-125xxx88`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#bucket MpsSchedule#bucket}
  */
  readonly bucket: string;
  /**
  * The path of the object to process, such as `/movie/201907/WildAnimal.mov`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#object MpsSchedule#object}
  */
  readonly object: string;
  /**
  * The region of the COS bucket, such as `ap-chongqing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#region MpsSchedule#region}
  */
  readonly region: string;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    object: cdktf.stringToTerraform(struct!.object),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._object = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._object = value.object;
      this._region = value.region;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_bucket MpsSchedule#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The path of the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_object MpsSchedule#s3_object}
  */
  readonly s3Object: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_region MpsSchedule#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_id MpsSchedule#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_key MpsSchedule#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    s3_object: cdktf.stringToTerraform(struct!.s3Object),
    s3_region: cdktf.stringToTerraform(struct!.s3Region),
    s3_secret_id: cdktf.stringToTerraform(struct!.s3SecretId),
    s3_secret_key: cdktf.stringToTerraform(struct!.s3SecretKey),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_bucket: {
      value: cdktf.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_object: {
      value: cdktf.stringToHclTerraform(struct!.s3Object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_region: {
      value: cdktf.stringToHclTerraform(struct!.s3Region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Object !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Object = this._s3Object;
    }
    if (this._s3Region !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Region = this._s3Region;
    }
    if (this._s3SecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretId = this._s3SecretId;
    }
    if (this._s3SecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretKey = this._s3SecretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Bucket = undefined;
      this._s3Object = undefined;
      this._s3Region = undefined;
      this._s3SecretId = undefined;
      this._s3SecretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Bucket = value.s3Bucket;
      this._s3Object = value.s3Object;
      this._s3Region = value.s3Region;
      this._s3SecretId = value.s3SecretId;
      this._s3SecretKey = value.s3SecretKey;
    }
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_object - computed: false, optional: false, required: true
  private _s3Object?: string; 
  public get s3Object() {
    return this.getStringAttribute('s3_object');
  }
  public set s3Object(value: string) {
    this._s3Object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectInput() {
    return this._s3Object;
  }

  // s3_region - computed: false, optional: false, required: true
  private _s3Region?: string; 
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }
  public set s3Region(value: string) {
    this._s3Region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RegionInput() {
    return this._s3Region;
  }

  // s3_secret_id - computed: false, optional: true, required: false
  private _s3SecretId?: string; 
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }
  public set s3SecretId(value: string) {
    this._s3SecretId = value;
  }
  public resetS3SecretId() {
    this._s3SecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretIdInput() {
    return this._s3SecretId;
  }

  // s3_secret_key - computed: false, optional: true, required: false
  private _s3SecretKey?: string; 
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
  public set s3SecretKey(value: string) {
    this._s3SecretKey = value;
  }
  public resetS3SecretKey() {
    this._s3SecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretKeyInput() {
    return this._s3SecretKey;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo {
  /**
  * URL of a video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#url MpsSchedule#url}
  */
  readonly url: string;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContent {
  /**
  * The input type. Valid values: `COS`: A COS bucket address.  `URL`: A URL.  `AWS-S3`: An AWS S3 bucket address. Currently, this type is only supported for transcoding tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#type MpsSchedule#type}
  */
  readonly type: string;
  /**
  * cos_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#cos_input_info MpsSchedule#cos_input_info}
  */
  readonly cosInputInfo?: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo;
  /**
  * s3_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_input_info MpsSchedule#s3_input_info}
  */
  readonly s3InputInfo?: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo;
  /**
  * url_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#url_input_info MpsSchedule#url_input_info}
  */
  readonly urlInputInfo?: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_input_info: mpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToTerraform(struct!.cosInputInfo),
    s3_input_info: mpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToTerraform(struct!.s3InputInfo),
    url_input_info: mpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToTerraform(struct!.urlInputInfo),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos_input_info: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToHclTerraform(struct!.cosInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoList",
    },
    s3_input_info: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToHclTerraform(struct!.s3InputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoList",
    },
    url_input_info: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToHclTerraform(struct!.urlInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cosInputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosInputInfo = this._cosInputInfo?.internalValue;
    }
    if (this._s3InputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3InputInfo = this._s3InputInfo?.internalValue;
    }
    if (this._urlInputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlInputInfo = this._urlInputInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._cosInputInfo.internalValue = undefined;
      this._s3InputInfo.internalValue = undefined;
      this._urlInputInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._cosInputInfo.internalValue = value.cosInputInfo;
      this._s3InputInfo.internalValue = value.s3InputInfo;
      this._urlInputInfo.internalValue = value.urlInputInfo;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // cos_input_info - computed: false, optional: true, required: false
  private _cosInputInfo = new MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference(this, "cos_input_info");
  public get cosInputInfo() {
    return this._cosInputInfo;
  }
  public putCosInputInfo(value: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentCosInputInfo) {
    this._cosInputInfo.internalValue = value;
  }
  public resetCosInputInfo() {
    this._cosInputInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosInputInfoInput() {
    return this._cosInputInfo.internalValue;
  }

  // s3_input_info - computed: false, optional: true, required: false
  private _s3InputInfo = new MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference(this, "s3_input_info");
  public get s3InputInfo() {
    return this._s3InputInfo;
  }
  public putS3InputInfo(value: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentS3InputInfo) {
    this._s3InputInfo.internalValue = value;
  }
  public resetS3InputInfo() {
    this._s3InputInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3InputInfoInput() {
    return this._s3InputInfo.internalValue;
  }

  // url_input_info - computed: false, optional: true, required: false
  private _urlInputInfo = new MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference(this, "url_input_info");
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
  public putUrlInputInfo(value: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo) {
    this._urlInputInfo.internalValue = value;
  }
  public resetUrlInputInfo() {
    this._urlInputInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInputInfoInput() {
    return this._urlInputInfo.internalValue;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplate {
  /**
  * Watermark height. % and px formats are supported: If the string ends in %, the `Height` of the watermark will be the specified percentage of the video height; for example, `10%` means that `Height` is 10% of the video height; If the string ends in px, the `Height` of the watermark will be in px; for example, `100px` means that `Height` is 100 px.Default value: 0 px, which means that `Height` will be proportionally scaled according to the aspect ratio of the original watermark image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#height MpsSchedule#height}
  */
  readonly height?: string;
  /**
  * Repeat type of an animated watermark. Valid values: `once`: no longer appears after watermark playback ends. `repeat_last_frame`: stays on the last frame after watermark playback ends. `repeat` (default): repeats the playback until the video ends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#repeat_type MpsSchedule#repeat_type}
  */
  readonly repeatType?: string;
  /**
  * Watermark width. % and px formats are supported: If the string ends in %, the `Width` of the watermark will be the specified percentage of the video width; for example, `10%` means that `Width` is 10% of the video width; If the string ends in px, the `Width` of the watermark will be in px; for example, `100px` means that `Width` is 100 px.Default value: 10%.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#width MpsSchedule#width}
  */
  readonly width?: string;
  /**
  * image_content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#image_content MpsSchedule#image_content}
  */
  readonly imageContent: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContent;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.stringToTerraform(struct!.height),
    repeat_type: cdktf.stringToTerraform(struct!.repeatType),
    width: cdktf.stringToTerraform(struct!.width),
    image_content: mpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentToTerraform(struct!.imageContent),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    height: {
      value: cdktf.stringToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repeat_type: {
      value: cdktf.stringToHclTerraform(struct!.repeatType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.stringToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_content: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentToHclTerraform(struct!.imageContent),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._repeatType !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatType = this._repeatType;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._imageContent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageContent = this._imageContent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._height = undefined;
      this._repeatType = undefined;
      this._width = undefined;
      this._imageContent.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._height = value.height;
      this._repeatType = value.repeatType;
      this._width = value.width;
      this._imageContent.internalValue = value.imageContent;
    }
  }

  // height - computed: false, optional: true, required: false
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // repeat_type - computed: false, optional: true, required: false
  private _repeatType?: string; 
  public get repeatType() {
    return this.getStringAttribute('repeat_type');
  }
  public set repeatType(value: string) {
    this._repeatType = value;
  }
  public resetRepeatType() {
    this._repeatType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatTypeInput() {
    return this._repeatType;
  }

  // width - computed: false, optional: true, required: false
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // image_content - computed: false, optional: false, required: true
  private _imageContent = new MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContentOutputReference(this, "image_content");
  public get imageContent() {
    return this._imageContent;
  }
  public putImageContent(value: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateImageContent) {
    this._imageContent.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageContentInput() {
    return this._imageContent.internalValue;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameter {
  /**
  * Origin position, which currently can only be: TopLeft: the origin of coordinates is in the top-left corner of the video, and the origin of the watermark is in the top-left corner of the image or text.Default value: TopLeft.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#coordinate_origin MpsSchedule#coordinate_origin}
  */
  readonly coordinateOrigin?: string;
  /**
  * Watermark type. Valid values: image: image watermark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#type MpsSchedule#type}
  */
  readonly type: string;
  /**
  * The horizontal position of the origin of the watermark relative to the origin of coordinates of the video. % and px formats are supported: If the string ends in %, the `XPos` of the watermark will be the specified percentage of the video width; for example, `10%` means that `XPos` is 10% of the video width; If the string ends in px, the `XPos` of the watermark will be the specified px; for example, `100px` means that `XPos` is 100 px.Default value: 0 px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#x_pos MpsSchedule#x_pos}
  */
  readonly xPos?: string;
  /**
  * The vertical position of the origin of the watermark relative to the origin of coordinates of the video. % and px formats are supported: If the string ends in %, the `YPos` of the watermark will be the specified percentage of the video height; for example, `10%` means that `YPos` is 10% of the video height; If the string ends in px, the `YPos` of the watermark will be the specified px; for example, `100px` means that `YPos` is 100 px.Default value: 0 px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#y_pos MpsSchedule#y_pos}
  */
  readonly yPos?: string;
  /**
  * image_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#image_template MpsSchedule#image_template}
  */
  readonly imageTemplate?: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplate;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    coordinate_origin: cdktf.stringToTerraform(struct!.coordinateOrigin),
    type: cdktf.stringToTerraform(struct!.type),
    x_pos: cdktf.stringToTerraform(struct!.xPos),
    y_pos: cdktf.stringToTerraform(struct!.yPos),
    image_template: mpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateToTerraform(struct!.imageTemplate),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterOutputReference | MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    coordinate_origin: {
      value: cdktf.stringToHclTerraform(struct!.coordinateOrigin),
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
    x_pos: {
      value: cdktf.stringToHclTerraform(struct!.xPos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y_pos: {
      value: cdktf.stringToHclTerraform(struct!.yPos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_template: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateToHclTerraform(struct!.imageTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coordinateOrigin !== undefined) {
      hasAnyValues = true;
      internalValueResult.coordinateOrigin = this._coordinateOrigin;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._xPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.xPos = this._xPos;
    }
    if (this._yPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.yPos = this._yPos;
    }
    if (this._imageTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageTemplate = this._imageTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coordinateOrigin = undefined;
      this._type = undefined;
      this._xPos = undefined;
      this._yPos = undefined;
      this._imageTemplate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coordinateOrigin = value.coordinateOrigin;
      this._type = value.type;
      this._xPos = value.xPos;
      this._yPos = value.yPos;
      this._imageTemplate.internalValue = value.imageTemplate;
    }
  }

  // coordinate_origin - computed: false, optional: true, required: false
  private _coordinateOrigin?: string; 
  public get coordinateOrigin() {
    return this.getStringAttribute('coordinate_origin');
  }
  public set coordinateOrigin(value: string) {
    this._coordinateOrigin = value;
  }
  public resetCoordinateOrigin() {
    this._coordinateOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinateOriginInput() {
    return this._coordinateOrigin;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // x_pos - computed: false, optional: true, required: false
  private _xPos?: string; 
  public get xPos() {
    return this.getStringAttribute('x_pos');
  }
  public set xPos(value: string) {
    this._xPos = value;
  }
  public resetXPos() {
    this._xPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xPosInput() {
    return this._xPos;
  }

  // y_pos - computed: false, optional: true, required: false
  private _yPos?: string; 
  public get yPos() {
    return this.getStringAttribute('y_pos');
  }
  public set yPos(value: string) {
    this._yPos = value;
  }
  public resetYPos() {
    this._yPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yPosInput() {
    return this._yPos;
  }

  // image_template - computed: false, optional: true, required: false
  private _imageTemplate = new MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplateOutputReference(this, "image_template");
  public get imageTemplate() {
    return this._imageTemplate;
  }
  public putImageTemplate(value: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterImageTemplate) {
    this._imageTemplate.internalValue = value;
  }
  public resetImageTemplate() {
    this._imageTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTemplateInput() {
    return this._imageTemplate.internalValue;
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSet {
  /**
  * ID of a watermarking template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#definition MpsSchedule#definition}
  */
  readonly definition: number;
  /**
  * End time offset of a watermark in seconds. If this parameter is left empty or 0 is entered, the watermark will exist till the last video frame; If this value is greater than 0 (e.g., n), the watermark will exist till second n; If this value is smaller than 0 (e.g., -n), the watermark will exist till second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#end_time_offset MpsSchedule#end_time_offset}
  */
  readonly endTimeOffset?: number;
  /**
  * Start time offset of a watermark in seconds. If this parameter is left empty or 0 is entered, the watermark will appear upon the first video frame. If this parameter is left empty or 0 is entered, the watermark will appear upon the first video frame; If this value is greater than 0 (e.g., n), the watermark will appear at second n after the first video frame; If this value is smaller than 0 (e.g., -n), the watermark will appear at second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#start_time_offset MpsSchedule#start_time_offset}
  */
  readonly startTimeOffset?: number;
  /**
  * SVG content of up to 2,000,000 characters. This field is required only when the watermark type is `SVG`.SVG watermark is not available for screenshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#svg_content MpsSchedule#svg_content}
  */
  readonly svgContent?: string;
  /**
  * Text content of up to 100 characters. This field is required only when the watermark type is text.Text watermark is not available for screenshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#text_content MpsSchedule#text_content}
  */
  readonly textContent?: string;
  /**
  * raw_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#raw_parameter MpsSchedule#raw_parameter}
  */
  readonly rawParameter?: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameter;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.numberToTerraform(struct!.definition),
    end_time_offset: cdktf.numberToTerraform(struct!.endTimeOffset),
    start_time_offset: cdktf.numberToTerraform(struct!.startTimeOffset),
    svg_content: cdktf.stringToTerraform(struct!.svgContent),
    text_content: cdktf.stringToTerraform(struct!.textContent),
    raw_parameter: mpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterToTerraform(struct!.rawParameter),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.numberToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_time_offset: {
      value: cdktf.numberToHclTerraform(struct!.endTimeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time_offset: {
      value: cdktf.numberToHclTerraform(struct!.startTimeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    svg_content: {
      value: cdktf.stringToHclTerraform(struct!.svgContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_content: {
      value: cdktf.stringToHclTerraform(struct!.textContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw_parameter: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterToHclTerraform(struct!.rawParameter),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._endTimeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTimeOffset = this._endTimeOffset;
    }
    if (this._startTimeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimeOffset = this._startTimeOffset;
    }
    if (this._svgContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.svgContent = this._svgContent;
    }
    if (this._textContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.textContent = this._textContent;
    }
    if (this._rawParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawParameter = this._rawParameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._endTimeOffset = undefined;
      this._startTimeOffset = undefined;
      this._svgContent = undefined;
      this._textContent = undefined;
      this._rawParameter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._endTimeOffset = value.endTimeOffset;
      this._startTimeOffset = value.startTimeOffset;
      this._svgContent = value.svgContent;
      this._textContent = value.textContent;
      this._rawParameter.internalValue = value.rawParameter;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: number; 
  public get definition() {
    return this.getNumberAttribute('definition');
  }
  public set definition(value: number) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // end_time_offset - computed: false, optional: true, required: false
  private _endTimeOffset?: number; 
  public get endTimeOffset() {
    return this.getNumberAttribute('end_time_offset');
  }
  public set endTimeOffset(value: number) {
    this._endTimeOffset = value;
  }
  public resetEndTimeOffset() {
    this._endTimeOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeOffsetInput() {
    return this._endTimeOffset;
  }

  // start_time_offset - computed: false, optional: true, required: false
  private _startTimeOffset?: number; 
  public get startTimeOffset() {
    return this.getNumberAttribute('start_time_offset');
  }
  public set startTimeOffset(value: number) {
    this._startTimeOffset = value;
  }
  public resetStartTimeOffset() {
    this._startTimeOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeOffsetInput() {
    return this._startTimeOffset;
  }

  // svg_content - computed: false, optional: true, required: false
  private _svgContent?: string; 
  public get svgContent() {
    return this.getStringAttribute('svg_content');
  }
  public set svgContent(value: string) {
    this._svgContent = value;
  }
  public resetSvgContent() {
    this._svgContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svgContentInput() {
    return this._svgContent;
  }

  // text_content - computed: false, optional: true, required: false
  private _textContent?: string; 
  public get textContent() {
    return this.getStringAttribute('text_content');
  }
  public set textContent(value: string) {
    this._textContent = value;
  }
  public resetTextContent() {
    this._textContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textContentInput() {
    return this._textContent;
  }

  // raw_parameter - computed: false, optional: true, required: false
  private _rawParameter = new MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameterOutputReference(this, "raw_parameter");
  public get rawParameter() {
    return this._rawParameter;
  }
  public putRawParameter(value: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetRawParameter) {
    this._rawParameter.internalValue = value;
  }
  public resetRawParameter() {
    this._rawParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawParameterInput() {
    return this._rawParameter.internalValue;
  }
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetList extends cdktf.ComplexList {
  public internalValue? : MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSet[] | cdktf.IResolvable

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
  public get(index: number): MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetOutputReference {
    return new MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsScheduleActivitiesActivityParaTranscodeTask {
  /**
  * ID of a video transcoding template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#definition MpsSchedule#definition}
  */
  readonly definition: number;
  /**
  * End time offset of a transcoded video, in seconds. If this parameter is left empty or set to 0, the transcoded video will end at the same time as the original video. If this parameter is set to a positive number (n for example), the transcoded video will end at the nth second of the original video. If this parameter is set to a negative number (-n for example), the transcoded video will end at the nth second before the end of the original video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#end_time_offset MpsSchedule#end_time_offset}
  */
  readonly endTimeOffset?: number;
  /**
  * Path to a primary output file, which can be a relative path or an absolute path. If this parameter is left empty, the following relative path will be used by default: `{inputName}_transcode_{definition}.{format}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#output_object_path MpsSchedule#output_object_path}
  */
  readonly outputObjectPath?: string;
  /**
  * Path to an output file part (the path to ts during transcoding to HLS), which can only be a relative path. If this parameter is left empty, the following relative path will be used by default: `{inputName}_transcode_{definition}_{number}.{format}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#segment_object_name MpsSchedule#segment_object_name}
  */
  readonly segmentObjectName?: string;
  /**
  * Start time offset of a transcoded video, in seconds. If this parameter is left empty or set to 0, the transcoded video will start at the same time as the original video. If this parameter is set to a positive number (n for example), the transcoded video will start at the nth second of the original video. If this parameter is set to a negative number (-n for example), the transcoded video will start at the nth second before the end of the original video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#start_time_offset MpsSchedule#start_time_offset}
  */
  readonly startTimeOffset?: number;
  /**
  * head_tail_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#head_tail_parameter MpsSchedule#head_tail_parameter}
  */
  readonly headTailParameter?: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameter;
  /**
  * mosaic_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#mosaic_set MpsSchedule#mosaic_set}
  */
  readonly mosaicSet?: MpsScheduleActivitiesActivityParaTranscodeTaskMosaicSet[] | cdktf.IResolvable;
  /**
  * object_number_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#object_number_format MpsSchedule#object_number_format}
  */
  readonly objectNumberFormat?: MpsScheduleActivitiesActivityParaTranscodeTaskObjectNumberFormat;
  /**
  * output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#output_storage MpsSchedule#output_storage}
  */
  readonly outputStorage?: MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorage;
  /**
  * override_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#override_parameter MpsSchedule#override_parameter}
  */
  readonly overrideParameter?: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameter;
  /**
  * raw_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#raw_parameter MpsSchedule#raw_parameter}
  */
  readonly rawParameter?: MpsScheduleActivitiesActivityParaTranscodeTaskRawParameter;
  /**
  * watermark_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#watermark_set MpsSchedule#watermark_set}
  */
  readonly watermarkSet?: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSet[] | cdktf.IResolvable;
}

export function mpsScheduleActivitiesActivityParaTranscodeTaskToTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOutputReference | MpsScheduleActivitiesActivityParaTranscodeTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.numberToTerraform(struct!.definition),
    end_time_offset: cdktf.numberToTerraform(struct!.endTimeOffset),
    output_object_path: cdktf.stringToTerraform(struct!.outputObjectPath),
    segment_object_name: cdktf.stringToTerraform(struct!.segmentObjectName),
    start_time_offset: cdktf.numberToTerraform(struct!.startTimeOffset),
    head_tail_parameter: mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterToTerraform(struct!.headTailParameter),
    mosaic_set: cdktf.listMapper(mpsScheduleActivitiesActivityParaTranscodeTaskMosaicSetToTerraform, true)(struct!.mosaicSet),
    object_number_format: mpsScheduleActivitiesActivityParaTranscodeTaskObjectNumberFormatToTerraform(struct!.objectNumberFormat),
    output_storage: mpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageToTerraform(struct!.outputStorage),
    override_parameter: mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterToTerraform(struct!.overrideParameter),
    raw_parameter: mpsScheduleActivitiesActivityParaTranscodeTaskRawParameterToTerraform(struct!.rawParameter),
    watermark_set: cdktf.listMapper(mpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetToTerraform, true)(struct!.watermarkSet),
  }
}


export function mpsScheduleActivitiesActivityParaTranscodeTaskToHclTerraform(struct?: MpsScheduleActivitiesActivityParaTranscodeTaskOutputReference | MpsScheduleActivitiesActivityParaTranscodeTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.numberToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_time_offset: {
      value: cdktf.numberToHclTerraform(struct!.endTimeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    output_object_path: {
      value: cdktf.stringToHclTerraform(struct!.outputObjectPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment_object_name: {
      value: cdktf.stringToHclTerraform(struct!.segmentObjectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time_offset: {
      value: cdktf.numberToHclTerraform(struct!.startTimeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    head_tail_parameter: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterToHclTerraform(struct!.headTailParameter),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterList",
    },
    mosaic_set: {
      value: cdktf.listMapperHcl(mpsScheduleActivitiesActivityParaTranscodeTaskMosaicSetToHclTerraform, true)(struct!.mosaicSet),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskMosaicSetList",
    },
    object_number_format: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskObjectNumberFormatToHclTerraform(struct!.objectNumberFormat),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskObjectNumberFormatList",
    },
    output_storage: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageToHclTerraform(struct!.outputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageList",
    },
    override_parameter: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterToHclTerraform(struct!.overrideParameter),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterList",
    },
    raw_parameter: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskRawParameterToHclTerraform(struct!.rawParameter),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterList",
    },
    watermark_set: {
      value: cdktf.listMapperHcl(mpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetToHclTerraform, true)(struct!.watermarkSet),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaTranscodeTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityParaTranscodeTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._endTimeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTimeOffset = this._endTimeOffset;
    }
    if (this._outputObjectPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputObjectPath = this._outputObjectPath;
    }
    if (this._segmentObjectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentObjectName = this._segmentObjectName;
    }
    if (this._startTimeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimeOffset = this._startTimeOffset;
    }
    if (this._headTailParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headTailParameter = this._headTailParameter?.internalValue;
    }
    if (this._mosaicSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mosaicSet = this._mosaicSet?.internalValue;
    }
    if (this._objectNumberFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectNumberFormat = this._objectNumberFormat?.internalValue;
    }
    if (this._outputStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputStorage = this._outputStorage?.internalValue;
    }
    if (this._overrideParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideParameter = this._overrideParameter?.internalValue;
    }
    if (this._rawParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawParameter = this._rawParameter?.internalValue;
    }
    if (this._watermarkSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.watermarkSet = this._watermarkSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityParaTranscodeTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._definition = undefined;
      this._endTimeOffset = undefined;
      this._outputObjectPath = undefined;
      this._segmentObjectName = undefined;
      this._startTimeOffset = undefined;
      this._headTailParameter.internalValue = undefined;
      this._mosaicSet.internalValue = undefined;
      this._objectNumberFormat.internalValue = undefined;
      this._outputStorage.internalValue = undefined;
      this._overrideParameter.internalValue = undefined;
      this._rawParameter.internalValue = undefined;
      this._watermarkSet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._definition = value.definition;
      this._endTimeOffset = value.endTimeOffset;
      this._outputObjectPath = value.outputObjectPath;
      this._segmentObjectName = value.segmentObjectName;
      this._startTimeOffset = value.startTimeOffset;
      this._headTailParameter.internalValue = value.headTailParameter;
      this._mosaicSet.internalValue = value.mosaicSet;
      this._objectNumberFormat.internalValue = value.objectNumberFormat;
      this._outputStorage.internalValue = value.outputStorage;
      this._overrideParameter.internalValue = value.overrideParameter;
      this._rawParameter.internalValue = value.rawParameter;
      this._watermarkSet.internalValue = value.watermarkSet;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: number; 
  public get definition() {
    return this.getNumberAttribute('definition');
  }
  public set definition(value: number) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // end_time_offset - computed: false, optional: true, required: false
  private _endTimeOffset?: number; 
  public get endTimeOffset() {
    return this.getNumberAttribute('end_time_offset');
  }
  public set endTimeOffset(value: number) {
    this._endTimeOffset = value;
  }
  public resetEndTimeOffset() {
    this._endTimeOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeOffsetInput() {
    return this._endTimeOffset;
  }

  // output_object_path - computed: false, optional: true, required: false
  private _outputObjectPath?: string; 
  public get outputObjectPath() {
    return this.getStringAttribute('output_object_path');
  }
  public set outputObjectPath(value: string) {
    this._outputObjectPath = value;
  }
  public resetOutputObjectPath() {
    this._outputObjectPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputObjectPathInput() {
    return this._outputObjectPath;
  }

  // segment_object_name - computed: false, optional: true, required: false
  private _segmentObjectName?: string; 
  public get segmentObjectName() {
    return this.getStringAttribute('segment_object_name');
  }
  public set segmentObjectName(value: string) {
    this._segmentObjectName = value;
  }
  public resetSegmentObjectName() {
    this._segmentObjectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentObjectNameInput() {
    return this._segmentObjectName;
  }

  // start_time_offset - computed: false, optional: true, required: false
  private _startTimeOffset?: number; 
  public get startTimeOffset() {
    return this.getNumberAttribute('start_time_offset');
  }
  public set startTimeOffset(value: number) {
    this._startTimeOffset = value;
  }
  public resetStartTimeOffset() {
    this._startTimeOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeOffsetInput() {
    return this._startTimeOffset;
  }

  // head_tail_parameter - computed: false, optional: true, required: false
  private _headTailParameter = new MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameterOutputReference(this, "head_tail_parameter");
  public get headTailParameter() {
    return this._headTailParameter;
  }
  public putHeadTailParameter(value: MpsScheduleActivitiesActivityParaTranscodeTaskHeadTailParameter) {
    this._headTailParameter.internalValue = value;
  }
  public resetHeadTailParameter() {
    this._headTailParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headTailParameterInput() {
    return this._headTailParameter.internalValue;
  }

  // mosaic_set - computed: false, optional: true, required: false
  private _mosaicSet = new MpsScheduleActivitiesActivityParaTranscodeTaskMosaicSetList(this, "mosaic_set", false);
  public get mosaicSet() {
    return this._mosaicSet;
  }
  public putMosaicSet(value: MpsScheduleActivitiesActivityParaTranscodeTaskMosaicSet[] | cdktf.IResolvable) {
    this._mosaicSet.internalValue = value;
  }
  public resetMosaicSet() {
    this._mosaicSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mosaicSetInput() {
    return this._mosaicSet.internalValue;
  }

  // object_number_format - computed: false, optional: true, required: false
  private _objectNumberFormat = new MpsScheduleActivitiesActivityParaTranscodeTaskObjectNumberFormatOutputReference(this, "object_number_format");
  public get objectNumberFormat() {
    return this._objectNumberFormat;
  }
  public putObjectNumberFormat(value: MpsScheduleActivitiesActivityParaTranscodeTaskObjectNumberFormat) {
    this._objectNumberFormat.internalValue = value;
  }
  public resetObjectNumberFormat() {
    this._objectNumberFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNumberFormatInput() {
    return this._objectNumberFormat.internalValue;
  }

  // output_storage - computed: false, optional: true, required: false
  private _outputStorage = new MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorageOutputReference(this, "output_storage");
  public get outputStorage() {
    return this._outputStorage;
  }
  public putOutputStorage(value: MpsScheduleActivitiesActivityParaTranscodeTaskOutputStorage) {
    this._outputStorage.internalValue = value;
  }
  public resetOutputStorage() {
    this._outputStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputStorageInput() {
    return this._outputStorage.internalValue;
  }

  // override_parameter - computed: false, optional: true, required: false
  private _overrideParameter = new MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameterOutputReference(this, "override_parameter");
  public get overrideParameter() {
    return this._overrideParameter;
  }
  public putOverrideParameter(value: MpsScheduleActivitiesActivityParaTranscodeTaskOverrideParameter) {
    this._overrideParameter.internalValue = value;
  }
  public resetOverrideParameter() {
    this._overrideParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideParameterInput() {
    return this._overrideParameter.internalValue;
  }

  // raw_parameter - computed: false, optional: true, required: false
  private _rawParameter = new MpsScheduleActivitiesActivityParaTranscodeTaskRawParameterOutputReference(this, "raw_parameter");
  public get rawParameter() {
    return this._rawParameter;
  }
  public putRawParameter(value: MpsScheduleActivitiesActivityParaTranscodeTaskRawParameter) {
    this._rawParameter.internalValue = value;
  }
  public resetRawParameter() {
    this._rawParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawParameterInput() {
    return this._rawParameter.internalValue;
  }

  // watermark_set - computed: false, optional: true, required: false
  private _watermarkSet = new MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSetList(this, "watermark_set", false);
  public get watermarkSet() {
    return this._watermarkSet;
  }
  public putWatermarkSet(value: MpsScheduleActivitiesActivityParaTranscodeTaskWatermarkSet[] | cdktf.IResolvable) {
    this._watermarkSet.internalValue = value;
  }
  public resetWatermarkSet() {
    this._watermarkSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watermarkSetInput() {
    return this._watermarkSet.internalValue;
  }
}
export interface MpsScheduleActivitiesActivityPara {
  /**
  * adaptive_dynamic_streaming_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#adaptive_dynamic_streaming_task MpsSchedule#adaptive_dynamic_streaming_task}
  */
  readonly adaptiveDynamicStreamingTask?: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTask;
  /**
  * ai_analysis_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#ai_analysis_task MpsSchedule#ai_analysis_task}
  */
  readonly aiAnalysisTask?: MpsScheduleActivitiesActivityParaAiAnalysisTask;
  /**
  * ai_content_review_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#ai_content_review_task MpsSchedule#ai_content_review_task}
  */
  readonly aiContentReviewTask?: MpsScheduleActivitiesActivityParaAiContentReviewTask;
  /**
  * ai_recognition_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#ai_recognition_task MpsSchedule#ai_recognition_task}
  */
  readonly aiRecognitionTask?: MpsScheduleActivitiesActivityParaAiRecognitionTask;
  /**
  * animated_graphic_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#animated_graphic_task MpsSchedule#animated_graphic_task}
  */
  readonly animatedGraphicTask?: MpsScheduleActivitiesActivityParaAnimatedGraphicTask;
  /**
  * image_sprite_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#image_sprite_task MpsSchedule#image_sprite_task}
  */
  readonly imageSpriteTask?: MpsScheduleActivitiesActivityParaImageSpriteTask;
  /**
  * sample_snapshot_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#sample_snapshot_task MpsSchedule#sample_snapshot_task}
  */
  readonly sampleSnapshotTask?: MpsScheduleActivitiesActivityParaSampleSnapshotTask;
  /**
  * snapshot_by_time_offset_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#snapshot_by_time_offset_task MpsSchedule#snapshot_by_time_offset_task}
  */
  readonly snapshotByTimeOffsetTask?: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTask;
  /**
  * transcode_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#transcode_task MpsSchedule#transcode_task}
  */
  readonly transcodeTask?: MpsScheduleActivitiesActivityParaTranscodeTask;
}

export function mpsScheduleActivitiesActivityParaToTerraform(struct?: MpsScheduleActivitiesActivityParaOutputReference | MpsScheduleActivitiesActivityPara): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adaptive_dynamic_streaming_task: mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskToTerraform(struct!.adaptiveDynamicStreamingTask),
    ai_analysis_task: mpsScheduleActivitiesActivityParaAiAnalysisTaskToTerraform(struct!.aiAnalysisTask),
    ai_content_review_task: mpsScheduleActivitiesActivityParaAiContentReviewTaskToTerraform(struct!.aiContentReviewTask),
    ai_recognition_task: mpsScheduleActivitiesActivityParaAiRecognitionTaskToTerraform(struct!.aiRecognitionTask),
    animated_graphic_task: mpsScheduleActivitiesActivityParaAnimatedGraphicTaskToTerraform(struct!.animatedGraphicTask),
    image_sprite_task: mpsScheduleActivitiesActivityParaImageSpriteTaskToTerraform(struct!.imageSpriteTask),
    sample_snapshot_task: mpsScheduleActivitiesActivityParaSampleSnapshotTaskToTerraform(struct!.sampleSnapshotTask),
    snapshot_by_time_offset_task: mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskToTerraform(struct!.snapshotByTimeOffsetTask),
    transcode_task: mpsScheduleActivitiesActivityParaTranscodeTaskToTerraform(struct!.transcodeTask),
  }
}


export function mpsScheduleActivitiesActivityParaToHclTerraform(struct?: MpsScheduleActivitiesActivityParaOutputReference | MpsScheduleActivitiesActivityPara): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adaptive_dynamic_streaming_task: {
      value: mpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskToHclTerraform(struct!.adaptiveDynamicStreamingTask),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskList",
    },
    ai_analysis_task: {
      value: mpsScheduleActivitiesActivityParaAiAnalysisTaskToHclTerraform(struct!.aiAnalysisTask),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaAiAnalysisTaskList",
    },
    ai_content_review_task: {
      value: mpsScheduleActivitiesActivityParaAiContentReviewTaskToHclTerraform(struct!.aiContentReviewTask),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaAiContentReviewTaskList",
    },
    ai_recognition_task: {
      value: mpsScheduleActivitiesActivityParaAiRecognitionTaskToHclTerraform(struct!.aiRecognitionTask),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaAiRecognitionTaskList",
    },
    animated_graphic_task: {
      value: mpsScheduleActivitiesActivityParaAnimatedGraphicTaskToHclTerraform(struct!.animatedGraphicTask),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaAnimatedGraphicTaskList",
    },
    image_sprite_task: {
      value: mpsScheduleActivitiesActivityParaImageSpriteTaskToHclTerraform(struct!.imageSpriteTask),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaImageSpriteTaskList",
    },
    sample_snapshot_task: {
      value: mpsScheduleActivitiesActivityParaSampleSnapshotTaskToHclTerraform(struct!.sampleSnapshotTask),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaSampleSnapshotTaskList",
    },
    snapshot_by_time_offset_task: {
      value: mpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskToHclTerraform(struct!.snapshotByTimeOffsetTask),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskList",
    },
    transcode_task: {
      value: mpsScheduleActivitiesActivityParaTranscodeTaskToHclTerraform(struct!.transcodeTask),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaTranscodeTaskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesActivityParaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleActivitiesActivityPara | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adaptiveDynamicStreamingTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adaptiveDynamicStreamingTask = this._adaptiveDynamicStreamingTask?.internalValue;
    }
    if (this._aiAnalysisTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiAnalysisTask = this._aiAnalysisTask?.internalValue;
    }
    if (this._aiContentReviewTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiContentReviewTask = this._aiContentReviewTask?.internalValue;
    }
    if (this._aiRecognitionTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiRecognitionTask = this._aiRecognitionTask?.internalValue;
    }
    if (this._animatedGraphicTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.animatedGraphicTask = this._animatedGraphicTask?.internalValue;
    }
    if (this._imageSpriteTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageSpriteTask = this._imageSpriteTask?.internalValue;
    }
    if (this._sampleSnapshotTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleSnapshotTask = this._sampleSnapshotTask?.internalValue;
    }
    if (this._snapshotByTimeOffsetTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotByTimeOffsetTask = this._snapshotByTimeOffsetTask?.internalValue;
    }
    if (this._transcodeTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transcodeTask = this._transcodeTask?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivitiesActivityPara | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adaptiveDynamicStreamingTask.internalValue = undefined;
      this._aiAnalysisTask.internalValue = undefined;
      this._aiContentReviewTask.internalValue = undefined;
      this._aiRecognitionTask.internalValue = undefined;
      this._animatedGraphicTask.internalValue = undefined;
      this._imageSpriteTask.internalValue = undefined;
      this._sampleSnapshotTask.internalValue = undefined;
      this._snapshotByTimeOffsetTask.internalValue = undefined;
      this._transcodeTask.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adaptiveDynamicStreamingTask.internalValue = value.adaptiveDynamicStreamingTask;
      this._aiAnalysisTask.internalValue = value.aiAnalysisTask;
      this._aiContentReviewTask.internalValue = value.aiContentReviewTask;
      this._aiRecognitionTask.internalValue = value.aiRecognitionTask;
      this._animatedGraphicTask.internalValue = value.animatedGraphicTask;
      this._imageSpriteTask.internalValue = value.imageSpriteTask;
      this._sampleSnapshotTask.internalValue = value.sampleSnapshotTask;
      this._snapshotByTimeOffsetTask.internalValue = value.snapshotByTimeOffsetTask;
      this._transcodeTask.internalValue = value.transcodeTask;
    }
  }

  // adaptive_dynamic_streaming_task - computed: false, optional: true, required: false
  private _adaptiveDynamicStreamingTask = new MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTaskOutputReference(this, "adaptive_dynamic_streaming_task");
  public get adaptiveDynamicStreamingTask() {
    return this._adaptiveDynamicStreamingTask;
  }
  public putAdaptiveDynamicStreamingTask(value: MpsScheduleActivitiesActivityParaAdaptiveDynamicStreamingTask) {
    this._adaptiveDynamicStreamingTask.internalValue = value;
  }
  public resetAdaptiveDynamicStreamingTask() {
    this._adaptiveDynamicStreamingTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveDynamicStreamingTaskInput() {
    return this._adaptiveDynamicStreamingTask.internalValue;
  }

  // ai_analysis_task - computed: false, optional: true, required: false
  private _aiAnalysisTask = new MpsScheduleActivitiesActivityParaAiAnalysisTaskOutputReference(this, "ai_analysis_task");
  public get aiAnalysisTask() {
    return this._aiAnalysisTask;
  }
  public putAiAnalysisTask(value: MpsScheduleActivitiesActivityParaAiAnalysisTask) {
    this._aiAnalysisTask.internalValue = value;
  }
  public resetAiAnalysisTask() {
    this._aiAnalysisTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiAnalysisTaskInput() {
    return this._aiAnalysisTask.internalValue;
  }

  // ai_content_review_task - computed: false, optional: true, required: false
  private _aiContentReviewTask = new MpsScheduleActivitiesActivityParaAiContentReviewTaskOutputReference(this, "ai_content_review_task");
  public get aiContentReviewTask() {
    return this._aiContentReviewTask;
  }
  public putAiContentReviewTask(value: MpsScheduleActivitiesActivityParaAiContentReviewTask) {
    this._aiContentReviewTask.internalValue = value;
  }
  public resetAiContentReviewTask() {
    this._aiContentReviewTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiContentReviewTaskInput() {
    return this._aiContentReviewTask.internalValue;
  }

  // ai_recognition_task - computed: false, optional: true, required: false
  private _aiRecognitionTask = new MpsScheduleActivitiesActivityParaAiRecognitionTaskOutputReference(this, "ai_recognition_task");
  public get aiRecognitionTask() {
    return this._aiRecognitionTask;
  }
  public putAiRecognitionTask(value: MpsScheduleActivitiesActivityParaAiRecognitionTask) {
    this._aiRecognitionTask.internalValue = value;
  }
  public resetAiRecognitionTask() {
    this._aiRecognitionTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiRecognitionTaskInput() {
    return this._aiRecognitionTask.internalValue;
  }

  // animated_graphic_task - computed: false, optional: true, required: false
  private _animatedGraphicTask = new MpsScheduleActivitiesActivityParaAnimatedGraphicTaskOutputReference(this, "animated_graphic_task");
  public get animatedGraphicTask() {
    return this._animatedGraphicTask;
  }
  public putAnimatedGraphicTask(value: MpsScheduleActivitiesActivityParaAnimatedGraphicTask) {
    this._animatedGraphicTask.internalValue = value;
  }
  public resetAnimatedGraphicTask() {
    this._animatedGraphicTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get animatedGraphicTaskInput() {
    return this._animatedGraphicTask.internalValue;
  }

  // image_sprite_task - computed: false, optional: true, required: false
  private _imageSpriteTask = new MpsScheduleActivitiesActivityParaImageSpriteTaskOutputReference(this, "image_sprite_task");
  public get imageSpriteTask() {
    return this._imageSpriteTask;
  }
  public putImageSpriteTask(value: MpsScheduleActivitiesActivityParaImageSpriteTask) {
    this._imageSpriteTask.internalValue = value;
  }
  public resetImageSpriteTask() {
    this._imageSpriteTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSpriteTaskInput() {
    return this._imageSpriteTask.internalValue;
  }

  // sample_snapshot_task - computed: false, optional: true, required: false
  private _sampleSnapshotTask = new MpsScheduleActivitiesActivityParaSampleSnapshotTaskOutputReference(this, "sample_snapshot_task");
  public get sampleSnapshotTask() {
    return this._sampleSnapshotTask;
  }
  public putSampleSnapshotTask(value: MpsScheduleActivitiesActivityParaSampleSnapshotTask) {
    this._sampleSnapshotTask.internalValue = value;
  }
  public resetSampleSnapshotTask() {
    this._sampleSnapshotTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleSnapshotTaskInput() {
    return this._sampleSnapshotTask.internalValue;
  }

  // snapshot_by_time_offset_task - computed: false, optional: true, required: false
  private _snapshotByTimeOffsetTask = new MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTaskOutputReference(this, "snapshot_by_time_offset_task");
  public get snapshotByTimeOffsetTask() {
    return this._snapshotByTimeOffsetTask;
  }
  public putSnapshotByTimeOffsetTask(value: MpsScheduleActivitiesActivityParaSnapshotByTimeOffsetTask) {
    this._snapshotByTimeOffsetTask.internalValue = value;
  }
  public resetSnapshotByTimeOffsetTask() {
    this._snapshotByTimeOffsetTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotByTimeOffsetTaskInput() {
    return this._snapshotByTimeOffsetTask.internalValue;
  }

  // transcode_task - computed: false, optional: true, required: false
  private _transcodeTask = new MpsScheduleActivitiesActivityParaTranscodeTaskOutputReference(this, "transcode_task");
  public get transcodeTask() {
    return this._transcodeTask;
  }
  public putTranscodeTask(value: MpsScheduleActivitiesActivityParaTranscodeTask) {
    this._transcodeTask.internalValue = value;
  }
  public resetTranscodeTask() {
    this._transcodeTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transcodeTaskInput() {
    return this._transcodeTask.internalValue;
  }
}
export interface MpsScheduleActivities {
  /**
  * The subtask type. `input`: The start. `output`: The end. `action-trans`: Transcoding. `action-samplesnapshot`: Sampled screencapturing. `action-AIAnalysis`: Content analysis. `action-AIRecognition`: Content recognition. `action-aiReview`: Content moderation. `action-animated-graphics`: Animated screenshot generation. `action-image-sprite`: Image sprite generation. `action-snapshotByTimeOffset`: Time point screencapturing. `action-adaptive-substream`: Adaptive bitrate streaming.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#activity_type MpsSchedule#activity_type}
  */
  readonly activityType: string;
  /**
  * The indexes of the subsequent actions. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#reardrive_index MpsSchedule#reardrive_index}
  */
  readonly reardriveIndex?: number[];
  /**
  * activity_para block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#activity_para MpsSchedule#activity_para}
  */
  readonly activityPara?: MpsScheduleActivitiesActivityPara;
}

export function mpsScheduleActivitiesToTerraform(struct?: MpsScheduleActivities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activity_type: cdktf.stringToTerraform(struct!.activityType),
    reardrive_index: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.reardriveIndex),
    activity_para: mpsScheduleActivitiesActivityParaToTerraform(struct!.activityPara),
  }
}


export function mpsScheduleActivitiesToHclTerraform(struct?: MpsScheduleActivities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activity_type: {
      value: cdktf.stringToHclTerraform(struct!.activityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reardrive_index: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.reardriveIndex),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    activity_para: {
      value: mpsScheduleActivitiesActivityParaToHclTerraform(struct!.activityPara),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleActivitiesActivityParaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleActivitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsScheduleActivities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.activityType = this._activityType;
    }
    if (this._reardriveIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.reardriveIndex = this._reardriveIndex;
    }
    if (this._activityPara?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activityPara = this._activityPara?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleActivities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activityType = undefined;
      this._reardriveIndex = undefined;
      this._activityPara.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activityType = value.activityType;
      this._reardriveIndex = value.reardriveIndex;
      this._activityPara.internalValue = value.activityPara;
    }
  }

  // activity_type - computed: false, optional: false, required: true
  private _activityType?: string; 
  public get activityType() {
    return this.getStringAttribute('activity_type');
  }
  public set activityType(value: string) {
    this._activityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activityTypeInput() {
    return this._activityType;
  }

  // reardrive_index - computed: true, optional: true, required: false
  private _reardriveIndex?: number[]; 
  public get reardriveIndex() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('reardrive_index')));
  }
  public set reardriveIndex(value: number[]) {
    this._reardriveIndex = value;
  }
  public resetReardriveIndex() {
    this._reardriveIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reardriveIndexInput() {
    return this._reardriveIndex;
  }

  // activity_para - computed: false, optional: true, required: false
  private _activityPara = new MpsScheduleActivitiesActivityParaOutputReference(this, "activity_para");
  public get activityPara() {
    return this._activityPara;
  }
  public putActivityPara(value: MpsScheduleActivitiesActivityPara) {
    this._activityPara.internalValue = value;
  }
  public resetActivityPara() {
    this._activityPara.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activityParaInput() {
    return this._activityPara.internalValue;
  }
}

export class MpsScheduleActivitiesList extends cdktf.ComplexList {
  public internalValue? : MpsScheduleActivities[] | cdktf.IResolvable

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
  public get(index: number): MpsScheduleActivitiesOutputReference {
    return new MpsScheduleActivitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsScheduleOutputStorageCosOutputStorage {
  /**
  * The bucket to which the output file of media processing is saved, such as `TopRankVideo-125xxx88`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#bucket MpsSchedule#bucket}
  */
  readonly bucket?: string;
  /**
  * The region of the output bucket, such as `ap-chongqing`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#region MpsSchedule#region}
  */
  readonly region?: string;
}

export function mpsScheduleOutputStorageCosOutputStorageToTerraform(struct?: MpsScheduleOutputStorageCosOutputStorageOutputReference | MpsScheduleOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function mpsScheduleOutputStorageCosOutputStorageToHclTerraform(struct?: MpsScheduleOutputStorageCosOutputStorageOutputReference | MpsScheduleOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleOutputStorageCosOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleOutputStorageCosOutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleOutputStorageCosOutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._region = value.region;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface MpsScheduleOutputStorageS3OutputStorage {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_bucket MpsSchedule#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_region MpsSchedule#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_id MpsSchedule#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_key MpsSchedule#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsScheduleOutputStorageS3OutputStorageToTerraform(struct?: MpsScheduleOutputStorageS3OutputStorageOutputReference | MpsScheduleOutputStorageS3OutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    s3_region: cdktf.stringToTerraform(struct!.s3Region),
    s3_secret_id: cdktf.stringToTerraform(struct!.s3SecretId),
    s3_secret_key: cdktf.stringToTerraform(struct!.s3SecretKey),
  }
}


export function mpsScheduleOutputStorageS3OutputStorageToHclTerraform(struct?: MpsScheduleOutputStorageS3OutputStorageOutputReference | MpsScheduleOutputStorageS3OutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_bucket: {
      value: cdktf.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_region: {
      value: cdktf.stringToHclTerraform(struct!.s3Region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleOutputStorageS3OutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleOutputStorageS3OutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Region !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Region = this._s3Region;
    }
    if (this._s3SecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretId = this._s3SecretId;
    }
    if (this._s3SecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretKey = this._s3SecretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleOutputStorageS3OutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Bucket = undefined;
      this._s3Region = undefined;
      this._s3SecretId = undefined;
      this._s3SecretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Bucket = value.s3Bucket;
      this._s3Region = value.s3Region;
      this._s3SecretId = value.s3SecretId;
      this._s3SecretKey = value.s3SecretKey;
    }
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_region - computed: false, optional: false, required: true
  private _s3Region?: string; 
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }
  public set s3Region(value: string) {
    this._s3Region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RegionInput() {
    return this._s3Region;
  }

  // s3_secret_id - computed: false, optional: true, required: false
  private _s3SecretId?: string; 
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }
  public set s3SecretId(value: string) {
    this._s3SecretId = value;
  }
  public resetS3SecretId() {
    this._s3SecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretIdInput() {
    return this._s3SecretId;
  }

  // s3_secret_key - computed: false, optional: true, required: false
  private _s3SecretKey?: string; 
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
  public set s3SecretKey(value: string) {
    this._s3SecretKey = value;
  }
  public resetS3SecretKey() {
    this._s3SecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretKeyInput() {
    return this._s3SecretKey;
  }
}
export interface MpsScheduleOutputStorage {
  /**
  * The storage type for a media processing output file. Valid values: `COS`: Tencent Cloud COS `AWS-S3`: AWS S3. This type is only supported for AWS tasks, and the output bucket must be in the same region as the bucket of the source file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#type MpsSchedule#type}
  */
  readonly type: string;
  /**
  * cos_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#cos_output_storage MpsSchedule#cos_output_storage}
  */
  readonly cosOutputStorage?: MpsScheduleOutputStorageCosOutputStorage;
  /**
  * s3_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_output_storage MpsSchedule#s3_output_storage}
  */
  readonly s3OutputStorage?: MpsScheduleOutputStorageS3OutputStorage;
}

export function mpsScheduleOutputStorageToTerraform(struct?: MpsScheduleOutputStorageOutputReference | MpsScheduleOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_output_storage: mpsScheduleOutputStorageCosOutputStorageToTerraform(struct!.cosOutputStorage),
    s3_output_storage: mpsScheduleOutputStorageS3OutputStorageToTerraform(struct!.s3OutputStorage),
  }
}


export function mpsScheduleOutputStorageToHclTerraform(struct?: MpsScheduleOutputStorageOutputReference | MpsScheduleOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos_output_storage: {
      value: mpsScheduleOutputStorageCosOutputStorageToHclTerraform(struct!.cosOutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleOutputStorageCosOutputStorageList",
    },
    s3_output_storage: {
      value: mpsScheduleOutputStorageS3OutputStorageToHclTerraform(struct!.s3OutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleOutputStorageS3OutputStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleOutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cosOutputStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosOutputStorage = this._cosOutputStorage?.internalValue;
    }
    if (this._s3OutputStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputStorage = this._s3OutputStorage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleOutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._cosOutputStorage.internalValue = undefined;
      this._s3OutputStorage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._cosOutputStorage.internalValue = value.cosOutputStorage;
      this._s3OutputStorage.internalValue = value.s3OutputStorage;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // cos_output_storage - computed: false, optional: true, required: false
  private _cosOutputStorage = new MpsScheduleOutputStorageCosOutputStorageOutputReference(this, "cos_output_storage");
  public get cosOutputStorage() {
    return this._cosOutputStorage;
  }
  public putCosOutputStorage(value: MpsScheduleOutputStorageCosOutputStorage) {
    this._cosOutputStorage.internalValue = value;
  }
  public resetCosOutputStorage() {
    this._cosOutputStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosOutputStorageInput() {
    return this._cosOutputStorage.internalValue;
  }

  // s3_output_storage - computed: false, optional: true, required: false
  private _s3OutputStorage = new MpsScheduleOutputStorageS3OutputStorageOutputReference(this, "s3_output_storage");
  public get s3OutputStorage() {
    return this._s3OutputStorage;
  }
  public putS3OutputStorage(value: MpsScheduleOutputStorageS3OutputStorage) {
    this._s3OutputStorage.internalValue = value;
  }
  public resetS3OutputStorage() {
    this._s3OutputStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputStorageInput() {
    return this._s3OutputStorage.internalValue;
  }
}
export interface MpsScheduleTaskNotifyConfigAwsSqs {
  /**
  * The key ID required to read from/write to the SQS queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_id MpsSchedule#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to read from/write to the SQS queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_key MpsSchedule#s3_secret_key}
  */
  readonly s3SecretKey?: string;
  /**
  * The name of the SQS queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#sqs_queue_name MpsSchedule#sqs_queue_name}
  */
  readonly sqsQueueName: string;
  /**
  * The region of the SQS queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#sqs_region MpsSchedule#sqs_region}
  */
  readonly sqsRegion: string;
}

export function mpsScheduleTaskNotifyConfigAwsSqsToTerraform(struct?: MpsScheduleTaskNotifyConfigAwsSqsOutputReference | MpsScheduleTaskNotifyConfigAwsSqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_secret_id: cdktf.stringToTerraform(struct!.s3SecretId),
    s3_secret_key: cdktf.stringToTerraform(struct!.s3SecretKey),
    sqs_queue_name: cdktf.stringToTerraform(struct!.sqsQueueName),
    sqs_region: cdktf.stringToTerraform(struct!.sqsRegion),
  }
}


export function mpsScheduleTaskNotifyConfigAwsSqsToHclTerraform(struct?: MpsScheduleTaskNotifyConfigAwsSqsOutputReference | MpsScheduleTaskNotifyConfigAwsSqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sqs_queue_name: {
      value: cdktf.stringToHclTerraform(struct!.sqsQueueName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sqs_region: {
      value: cdktf.stringToHclTerraform(struct!.sqsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleTaskNotifyConfigAwsSqsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleTaskNotifyConfigAwsSqs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3SecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretId = this._s3SecretId;
    }
    if (this._s3SecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretKey = this._s3SecretKey;
    }
    if (this._sqsQueueName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqsQueueName = this._sqsQueueName;
    }
    if (this._sqsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqsRegion = this._sqsRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleTaskNotifyConfigAwsSqs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3SecretId = undefined;
      this._s3SecretKey = undefined;
      this._sqsQueueName = undefined;
      this._sqsRegion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3SecretId = value.s3SecretId;
      this._s3SecretKey = value.s3SecretKey;
      this._sqsQueueName = value.sqsQueueName;
      this._sqsRegion = value.sqsRegion;
    }
  }

  // s3_secret_id - computed: false, optional: true, required: false
  private _s3SecretId?: string; 
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }
  public set s3SecretId(value: string) {
    this._s3SecretId = value;
  }
  public resetS3SecretId() {
    this._s3SecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretIdInput() {
    return this._s3SecretId;
  }

  // s3_secret_key - computed: false, optional: true, required: false
  private _s3SecretKey?: string; 
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
  public set s3SecretKey(value: string) {
    this._s3SecretKey = value;
  }
  public resetS3SecretKey() {
    this._s3SecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretKeyInput() {
    return this._s3SecretKey;
  }

  // sqs_queue_name - computed: false, optional: false, required: true
  private _sqsQueueName?: string; 
  public get sqsQueueName() {
    return this.getStringAttribute('sqs_queue_name');
  }
  public set sqsQueueName(value: string) {
    this._sqsQueueName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsQueueNameInput() {
    return this._sqsQueueName;
  }

  // sqs_region - computed: false, optional: false, required: true
  private _sqsRegion?: string; 
  public get sqsRegion() {
    return this.getStringAttribute('sqs_region');
  }
  public set sqsRegion(value: string) {
    this._sqsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsRegionInput() {
    return this._sqsRegion;
  }
}
export interface MpsScheduleTaskNotifyConfig {
  /**
  * The CMQ or TDMQ-CMQ model. Valid values: Queue, Topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#cmq_model MpsSchedule#cmq_model}
  */
  readonly cmqModel?: string;
  /**
  * The CMQ or TDMQ-CMQ region, such as `sh` (Shanghai) or `bj` (Beijing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#cmq_region MpsSchedule#cmq_region}
  */
  readonly cmqRegion?: string;
  /**
  * Workflow notification method. Valid values: Finish, Change. If this parameter is left empty, `Finish` will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#notify_mode MpsSchedule#notify_mode}
  */
  readonly notifyMode?: string;
  /**
  * The notification type. Valid values: `CMQ`: This value is no longer used. Please use `TDMQ-CMQ` instead. `TDMQ-CMQ`: Message queue `URL`: If `NotifyType` is set to `URL`, HTTP callbacks are sent to the URL specified by `NotifyUrl`. HTTP and JSON are used for the callbacks. The packet contains the response parameters of the `ParseNotification` API. `SCF`: This notification type is not recommended. You need to configure it in the SCF console. `AWS-SQS`: AWS queue. This type is only supported for AWS tasks, and the queue must be in the same region as the AWS bucket.Note: If you do not pass this parameter or pass in an empty string, `CMQ` will be used. To use a different notification type, specify this parameter accordingly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#notify_type MpsSchedule#notify_type}
  */
  readonly notifyType?: string;
  /**
  * HTTP callback URL, required if `NotifyType` is set to `URL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#notify_url MpsSchedule#notify_url}
  */
  readonly notifyUrl?: string;
  /**
  * The CMQ or TDMQ-CMQ queue to receive notifications. This parameter is valid when `CmqModel` is `Queue`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#queue_name MpsSchedule#queue_name}
  */
  readonly queueName?: string;
  /**
  * The CMQ or TDMQ-CMQ topic to receive notifications. This parameter is valid when `CmqModel` is `Topic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#topic_name MpsSchedule#topic_name}
  */
  readonly topicName?: string;
  /**
  * aws_sqs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#aws_sqs MpsSchedule#aws_sqs}
  */
  readonly awsSqs?: MpsScheduleTaskNotifyConfigAwsSqs;
}

export function mpsScheduleTaskNotifyConfigToTerraform(struct?: MpsScheduleTaskNotifyConfigOutputReference | MpsScheduleTaskNotifyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmq_model: cdktf.stringToTerraform(struct!.cmqModel),
    cmq_region: cdktf.stringToTerraform(struct!.cmqRegion),
    notify_mode: cdktf.stringToTerraform(struct!.notifyMode),
    notify_type: cdktf.stringToTerraform(struct!.notifyType),
    notify_url: cdktf.stringToTerraform(struct!.notifyUrl),
    queue_name: cdktf.stringToTerraform(struct!.queueName),
    topic_name: cdktf.stringToTerraform(struct!.topicName),
    aws_sqs: mpsScheduleTaskNotifyConfigAwsSqsToTerraform(struct!.awsSqs),
  }
}


export function mpsScheduleTaskNotifyConfigToHclTerraform(struct?: MpsScheduleTaskNotifyConfigOutputReference | MpsScheduleTaskNotifyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cmq_model: {
      value: cdktf.stringToHclTerraform(struct!.cmqModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cmq_region: {
      value: cdktf.stringToHclTerraform(struct!.cmqRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_mode: {
      value: cdktf.stringToHclTerraform(struct!.notifyMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_type: {
      value: cdktf.stringToHclTerraform(struct!.notifyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_url: {
      value: cdktf.stringToHclTerraform(struct!.notifyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_name: {
      value: cdktf.stringToHclTerraform(struct!.queueName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_name: {
      value: cdktf.stringToHclTerraform(struct!.topicName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_sqs: {
      value: mpsScheduleTaskNotifyConfigAwsSqsToHclTerraform(struct!.awsSqs),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleTaskNotifyConfigAwsSqsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleTaskNotifyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleTaskNotifyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmqModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmqModel = this._cmqModel;
    }
    if (this._cmqRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmqRegion = this._cmqRegion;
    }
    if (this._notifyMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyMode = this._notifyMode;
    }
    if (this._notifyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyType = this._notifyType;
    }
    if (this._notifyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyUrl = this._notifyUrl;
    }
    if (this._queueName !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueName = this._queueName;
    }
    if (this._topicName !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicName = this._topicName;
    }
    if (this._awsSqs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSqs = this._awsSqs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleTaskNotifyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cmqModel = undefined;
      this._cmqRegion = undefined;
      this._notifyMode = undefined;
      this._notifyType = undefined;
      this._notifyUrl = undefined;
      this._queueName = undefined;
      this._topicName = undefined;
      this._awsSqs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cmqModel = value.cmqModel;
      this._cmqRegion = value.cmqRegion;
      this._notifyMode = value.notifyMode;
      this._notifyType = value.notifyType;
      this._notifyUrl = value.notifyUrl;
      this._queueName = value.queueName;
      this._topicName = value.topicName;
      this._awsSqs.internalValue = value.awsSqs;
    }
  }

  // cmq_model - computed: false, optional: true, required: false
  private _cmqModel?: string; 
  public get cmqModel() {
    return this.getStringAttribute('cmq_model');
  }
  public set cmqModel(value: string) {
    this._cmqModel = value;
  }
  public resetCmqModel() {
    this._cmqModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmqModelInput() {
    return this._cmqModel;
  }

  // cmq_region - computed: false, optional: true, required: false
  private _cmqRegion?: string; 
  public get cmqRegion() {
    return this.getStringAttribute('cmq_region');
  }
  public set cmqRegion(value: string) {
    this._cmqRegion = value;
  }
  public resetCmqRegion() {
    this._cmqRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmqRegionInput() {
    return this._cmqRegion;
  }

  // notify_mode - computed: true, optional: true, required: false
  private _notifyMode?: string; 
  public get notifyMode() {
    return this.getStringAttribute('notify_mode');
  }
  public set notifyMode(value: string) {
    this._notifyMode = value;
  }
  public resetNotifyMode() {
    this._notifyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyModeInput() {
    return this._notifyMode;
  }

  // notify_type - computed: true, optional: true, required: false
  private _notifyType?: string; 
  public get notifyType() {
    return this.getStringAttribute('notify_type');
  }
  public set notifyType(value: string) {
    this._notifyType = value;
  }
  public resetNotifyType() {
    this._notifyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyTypeInput() {
    return this._notifyType;
  }

  // notify_url - computed: false, optional: true, required: false
  private _notifyUrl?: string; 
  public get notifyUrl() {
    return this.getStringAttribute('notify_url');
  }
  public set notifyUrl(value: string) {
    this._notifyUrl = value;
  }
  public resetNotifyUrl() {
    this._notifyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyUrlInput() {
    return this._notifyUrl;
  }

  // queue_name - computed: false, optional: true, required: false
  private _queueName?: string; 
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }
  public set queueName(value: string) {
    this._queueName = value;
  }
  public resetQueueName() {
    this._queueName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueNameInput() {
    return this._queueName;
  }

  // topic_name - computed: false, optional: true, required: false
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  public resetTopicName() {
    this._topicName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName;
  }

  // aws_sqs - computed: false, optional: true, required: false
  private _awsSqs = new MpsScheduleTaskNotifyConfigAwsSqsOutputReference(this, "aws_sqs");
  public get awsSqs() {
    return this._awsSqs;
  }
  public putAwsSqs(value: MpsScheduleTaskNotifyConfigAwsSqs) {
    this._awsSqs.internalValue = value;
  }
  public resetAwsSqs() {
    this._awsSqs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSqsInput() {
    return this._awsSqs.internalValue;
  }
}
export interface MpsScheduleTriggerAwsS3FileUploadTriggerAwsSqs {
  /**
  * The key ID required to read from/write to the SQS queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_id MpsSchedule#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to read from/write to the SQS queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_key MpsSchedule#s3_secret_key}
  */
  readonly s3SecretKey?: string;
  /**
  * The name of the SQS queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#sqs_queue_name MpsSchedule#sqs_queue_name}
  */
  readonly sqsQueueName: string;
  /**
  * The region of the SQS queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#sqs_region MpsSchedule#sqs_region}
  */
  readonly sqsRegion: string;
}

export function mpsScheduleTriggerAwsS3FileUploadTriggerAwsSqsToTerraform(struct?: MpsScheduleTriggerAwsS3FileUploadTriggerAwsSqsOutputReference | MpsScheduleTriggerAwsS3FileUploadTriggerAwsSqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_secret_id: cdktf.stringToTerraform(struct!.s3SecretId),
    s3_secret_key: cdktf.stringToTerraform(struct!.s3SecretKey),
    sqs_queue_name: cdktf.stringToTerraform(struct!.sqsQueueName),
    sqs_region: cdktf.stringToTerraform(struct!.sqsRegion),
  }
}


export function mpsScheduleTriggerAwsS3FileUploadTriggerAwsSqsToHclTerraform(struct?: MpsScheduleTriggerAwsS3FileUploadTriggerAwsSqsOutputReference | MpsScheduleTriggerAwsS3FileUploadTriggerAwsSqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sqs_queue_name: {
      value: cdktf.stringToHclTerraform(struct!.sqsQueueName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sqs_region: {
      value: cdktf.stringToHclTerraform(struct!.sqsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleTriggerAwsS3FileUploadTriggerAwsSqsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleTriggerAwsS3FileUploadTriggerAwsSqs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3SecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretId = this._s3SecretId;
    }
    if (this._s3SecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretKey = this._s3SecretKey;
    }
    if (this._sqsQueueName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqsQueueName = this._sqsQueueName;
    }
    if (this._sqsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqsRegion = this._sqsRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleTriggerAwsS3FileUploadTriggerAwsSqs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3SecretId = undefined;
      this._s3SecretKey = undefined;
      this._sqsQueueName = undefined;
      this._sqsRegion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3SecretId = value.s3SecretId;
      this._s3SecretKey = value.s3SecretKey;
      this._sqsQueueName = value.sqsQueueName;
      this._sqsRegion = value.sqsRegion;
    }
  }

  // s3_secret_id - computed: false, optional: true, required: false
  private _s3SecretId?: string; 
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }
  public set s3SecretId(value: string) {
    this._s3SecretId = value;
  }
  public resetS3SecretId() {
    this._s3SecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretIdInput() {
    return this._s3SecretId;
  }

  // s3_secret_key - computed: false, optional: true, required: false
  private _s3SecretKey?: string; 
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
  public set s3SecretKey(value: string) {
    this._s3SecretKey = value;
  }
  public resetS3SecretKey() {
    this._s3SecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretKeyInput() {
    return this._s3SecretKey;
  }

  // sqs_queue_name - computed: false, optional: false, required: true
  private _sqsQueueName?: string; 
  public get sqsQueueName() {
    return this.getStringAttribute('sqs_queue_name');
  }
  public set sqsQueueName(value: string) {
    this._sqsQueueName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsQueueNameInput() {
    return this._sqsQueueName;
  }

  // sqs_region - computed: false, optional: false, required: true
  private _sqsRegion?: string; 
  public get sqsRegion() {
    return this.getStringAttribute('sqs_region');
  }
  public set sqsRegion(value: string) {
    this._sqsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsRegionInput() {
    return this._sqsRegion;
  }
}
export interface MpsScheduleTriggerAwsS3FileUploadTrigger {
  /**
  * The bucket directory bound. It must be an absolute path that starts and ends with `/`, such as `/movie/201907/`. If you do not specify this, the root directory will be bound.	.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#dir MpsSchedule#dir}
  */
  readonly dir?: string;
  /**
  * The file formats that will trigger the scheme, such as [mp4, flv, mov]. If you do not specify this, the upload of files in any format will trigger the scheme.	.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#formats MpsSchedule#formats}
  */
  readonly formats?: string[];
  /**
  * The AWS S3 bucket bound to the scheme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_bucket MpsSchedule#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_region MpsSchedule#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID of the AWS S3 bucket.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_id MpsSchedule#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key of the AWS S3 bucket.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#s3_secret_key MpsSchedule#s3_secret_key}
  */
  readonly s3SecretKey?: string;
  /**
  * aws_sqs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#aws_sqs MpsSchedule#aws_sqs}
  */
  readonly awsSqs?: MpsScheduleTriggerAwsS3FileUploadTriggerAwsSqs;
}

export function mpsScheduleTriggerAwsS3FileUploadTriggerToTerraform(struct?: MpsScheduleTriggerAwsS3FileUploadTriggerOutputReference | MpsScheduleTriggerAwsS3FileUploadTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dir: cdktf.stringToTerraform(struct!.dir),
    formats: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.formats),
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    s3_region: cdktf.stringToTerraform(struct!.s3Region),
    s3_secret_id: cdktf.stringToTerraform(struct!.s3SecretId),
    s3_secret_key: cdktf.stringToTerraform(struct!.s3SecretKey),
    aws_sqs: mpsScheduleTriggerAwsS3FileUploadTriggerAwsSqsToTerraform(struct!.awsSqs),
  }
}


export function mpsScheduleTriggerAwsS3FileUploadTriggerToHclTerraform(struct?: MpsScheduleTriggerAwsS3FileUploadTriggerOutputReference | MpsScheduleTriggerAwsS3FileUploadTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dir: {
      value: cdktf.stringToHclTerraform(struct!.dir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    formats: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.formats),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    s3_bucket: {
      value: cdktf.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_region: {
      value: cdktf.stringToHclTerraform(struct!.s3Region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_sqs: {
      value: mpsScheduleTriggerAwsS3FileUploadTriggerAwsSqsToHclTerraform(struct!.awsSqs),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleTriggerAwsS3FileUploadTriggerAwsSqsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleTriggerAwsS3FileUploadTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleTriggerAwsS3FileUploadTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dir !== undefined) {
      hasAnyValues = true;
      internalValueResult.dir = this._dir;
    }
    if (this._formats !== undefined) {
      hasAnyValues = true;
      internalValueResult.formats = this._formats;
    }
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Region !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Region = this._s3Region;
    }
    if (this._s3SecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretId = this._s3SecretId;
    }
    if (this._s3SecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretKey = this._s3SecretKey;
    }
    if (this._awsSqs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSqs = this._awsSqs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleTriggerAwsS3FileUploadTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dir = undefined;
      this._formats = undefined;
      this._s3Bucket = undefined;
      this._s3Region = undefined;
      this._s3SecretId = undefined;
      this._s3SecretKey = undefined;
      this._awsSqs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dir = value.dir;
      this._formats = value.formats;
      this._s3Bucket = value.s3Bucket;
      this._s3Region = value.s3Region;
      this._s3SecretId = value.s3SecretId;
      this._s3SecretKey = value.s3SecretKey;
      this._awsSqs.internalValue = value.awsSqs;
    }
  }

  // dir - computed: false, optional: true, required: false
  private _dir?: string; 
  public get dir() {
    return this.getStringAttribute('dir');
  }
  public set dir(value: string) {
    this._dir = value;
  }
  public resetDir() {
    this._dir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir;
  }

  // formats - computed: false, optional: true, required: false
  private _formats?: string[]; 
  public get formats() {
    return cdktf.Fn.tolist(this.getListAttribute('formats'));
  }
  public set formats(value: string[]) {
    this._formats = value;
  }
  public resetFormats() {
    this._formats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatsInput() {
    return this._formats;
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_region - computed: false, optional: false, required: true
  private _s3Region?: string; 
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }
  public set s3Region(value: string) {
    this._s3Region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RegionInput() {
    return this._s3Region;
  }

  // s3_secret_id - computed: false, optional: true, required: false
  private _s3SecretId?: string; 
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }
  public set s3SecretId(value: string) {
    this._s3SecretId = value;
  }
  public resetS3SecretId() {
    this._s3SecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretIdInput() {
    return this._s3SecretId;
  }

  // s3_secret_key - computed: false, optional: true, required: false
  private _s3SecretKey?: string; 
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
  public set s3SecretKey(value: string) {
    this._s3SecretKey = value;
  }
  public resetS3SecretKey() {
    this._s3SecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretKeyInput() {
    return this._s3SecretKey;
  }

  // aws_sqs - computed: false, optional: true, required: false
  private _awsSqs = new MpsScheduleTriggerAwsS3FileUploadTriggerAwsSqsOutputReference(this, "aws_sqs");
  public get awsSqs() {
    return this._awsSqs;
  }
  public putAwsSqs(value: MpsScheduleTriggerAwsS3FileUploadTriggerAwsSqs) {
    this._awsSqs.internalValue = value;
  }
  public resetAwsSqs() {
    this._awsSqs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSqsInput() {
    return this._awsSqs.internalValue;
  }
}
export interface MpsScheduleTriggerCosFileUploadTrigger {
  /**
  * Name of the COS bucket bound to a workflow, such as `TopRankVideo-125xxx88`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#bucket MpsSchedule#bucket}
  */
  readonly bucket: string;
  /**
  * Input path directory bound to a workflow, such as `/movie/201907/`. If this parameter is left empty, the `/` root directory will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#dir MpsSchedule#dir}
  */
  readonly dir?: string;
  /**
  * Format list of files that can trigger a workflow, such as [mp4, flv, mov]. If this parameter is left empty, files in all formats can trigger the workflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#formats MpsSchedule#formats}
  */
  readonly formats?: string[];
  /**
  * Region of the COS bucket bound to a workflow, such as `ap-chongiqng`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#region MpsSchedule#region}
  */
  readonly region: string;
}

export function mpsScheduleTriggerCosFileUploadTriggerToTerraform(struct?: MpsScheduleTriggerCosFileUploadTriggerOutputReference | MpsScheduleTriggerCosFileUploadTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    dir: cdktf.stringToTerraform(struct!.dir),
    formats: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.formats),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function mpsScheduleTriggerCosFileUploadTriggerToHclTerraform(struct?: MpsScheduleTriggerCosFileUploadTriggerOutputReference | MpsScheduleTriggerCosFileUploadTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dir: {
      value: cdktf.stringToHclTerraform(struct!.dir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    formats: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.formats),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleTriggerCosFileUploadTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleTriggerCosFileUploadTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._dir !== undefined) {
      hasAnyValues = true;
      internalValueResult.dir = this._dir;
    }
    if (this._formats !== undefined) {
      hasAnyValues = true;
      internalValueResult.formats = this._formats;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleTriggerCosFileUploadTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._dir = undefined;
      this._formats = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._dir = value.dir;
      this._formats = value.formats;
      this._region = value.region;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // dir - computed: false, optional: true, required: false
  private _dir?: string; 
  public get dir() {
    return this.getStringAttribute('dir');
  }
  public set dir(value: string) {
    this._dir = value;
  }
  public resetDir() {
    this._dir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir;
  }

  // formats - computed: false, optional: true, required: false
  private _formats?: string[]; 
  public get formats() {
    return cdktf.Fn.tolist(this.getListAttribute('formats'));
  }
  public set formats(value: string[]) {
    this._formats = value;
  }
  public resetFormats() {
    this._formats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatsInput() {
    return this._formats;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface MpsScheduleTrigger {
  /**
  * The trigger type. Valid values: `CosFileUpload`: Tencent Cloud COS trigger. `AwsS3FileUpload`: AWS S3 trigger. Currently, this type is only supported for transcoding tasks and schemes (not supported for workflows).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#type MpsSchedule#type}
  */
  readonly type: string;
  /**
  * aws_s3_file_upload_trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#aws_s3_file_upload_trigger MpsSchedule#aws_s3_file_upload_trigger}
  */
  readonly awsS3FileUploadTrigger?: MpsScheduleTriggerAwsS3FileUploadTrigger;
  /**
  * cos_file_upload_trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#cos_file_upload_trigger MpsSchedule#cos_file_upload_trigger}
  */
  readonly cosFileUploadTrigger?: MpsScheduleTriggerCosFileUploadTrigger;
}

export function mpsScheduleTriggerToTerraform(struct?: MpsScheduleTriggerOutputReference | MpsScheduleTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    aws_s3_file_upload_trigger: mpsScheduleTriggerAwsS3FileUploadTriggerToTerraform(struct!.awsS3FileUploadTrigger),
    cos_file_upload_trigger: mpsScheduleTriggerCosFileUploadTriggerToTerraform(struct!.cosFileUploadTrigger),
  }
}


export function mpsScheduleTriggerToHclTerraform(struct?: MpsScheduleTriggerOutputReference | MpsScheduleTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_s3_file_upload_trigger: {
      value: mpsScheduleTriggerAwsS3FileUploadTriggerToHclTerraform(struct!.awsS3FileUploadTrigger),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleTriggerAwsS3FileUploadTriggerList",
    },
    cos_file_upload_trigger: {
      value: mpsScheduleTriggerCosFileUploadTriggerToHclTerraform(struct!.cosFileUploadTrigger),
      isBlock: true,
      type: "list",
      storageClassType: "MpsScheduleTriggerCosFileUploadTriggerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsScheduleTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsScheduleTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._awsS3FileUploadTrigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsS3FileUploadTrigger = this._awsS3FileUploadTrigger?.internalValue;
    }
    if (this._cosFileUploadTrigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosFileUploadTrigger = this._cosFileUploadTrigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsScheduleTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._awsS3FileUploadTrigger.internalValue = undefined;
      this._cosFileUploadTrigger.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._awsS3FileUploadTrigger.internalValue = value.awsS3FileUploadTrigger;
      this._cosFileUploadTrigger.internalValue = value.cosFileUploadTrigger;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // aws_s3_file_upload_trigger - computed: false, optional: true, required: false
  private _awsS3FileUploadTrigger = new MpsScheduleTriggerAwsS3FileUploadTriggerOutputReference(this, "aws_s3_file_upload_trigger");
  public get awsS3FileUploadTrigger() {
    return this._awsS3FileUploadTrigger;
  }
  public putAwsS3FileUploadTrigger(value: MpsScheduleTriggerAwsS3FileUploadTrigger) {
    this._awsS3FileUploadTrigger.internalValue = value;
  }
  public resetAwsS3FileUploadTrigger() {
    this._awsS3FileUploadTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsS3FileUploadTriggerInput() {
    return this._awsS3FileUploadTrigger.internalValue;
  }

  // cos_file_upload_trigger - computed: false, optional: true, required: false
  private _cosFileUploadTrigger = new MpsScheduleTriggerCosFileUploadTriggerOutputReference(this, "cos_file_upload_trigger");
  public get cosFileUploadTrigger() {
    return this._cosFileUploadTrigger;
  }
  public putCosFileUploadTrigger(value: MpsScheduleTriggerCosFileUploadTrigger) {
    this._cosFileUploadTrigger.internalValue = value;
  }
  public resetCosFileUploadTrigger() {
    this._cosFileUploadTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosFileUploadTriggerInput() {
    return this._cosFileUploadTrigger.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule tencentcloud_mps_schedule}
*/
export class MpsSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mps_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MpsSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MpsSchedule to import
  * @param importFromId The id of the existing MpsSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MpsSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mps_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_schedule tencentcloud_mps_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MpsScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: MpsScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mps_schedule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
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
    this._outputDir = config.outputDir;
    this._resourceId = config.resourceId;
    this._scheduleName = config.scheduleName;
    this._activities.internalValue = config.activities;
    this._outputStorage.internalValue = config.outputStorage;
    this._taskNotifyConfig.internalValue = config.taskNotifyConfig;
    this._trigger.internalValue = config.trigger;
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

  // output_dir - computed: false, optional: true, required: false
  private _outputDir?: string; 
  public get outputDir() {
    return this.getStringAttribute('output_dir');
  }
  public set outputDir(value: string) {
    this._outputDir = value;
  }
  public resetOutputDir() {
    this._outputDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputDirInput() {
    return this._outputDir;
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // schedule_name - computed: false, optional: false, required: true
  private _scheduleName?: string; 
  public get scheduleName() {
    return this.getStringAttribute('schedule_name');
  }
  public set scheduleName(value: string) {
    this._scheduleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleNameInput() {
    return this._scheduleName;
  }

  // activities - computed: false, optional: false, required: true
  private _activities = new MpsScheduleActivitiesList(this, "activities", false);
  public get activities() {
    return this._activities;
  }
  public putActivities(value: MpsScheduleActivities[] | cdktf.IResolvable) {
    this._activities.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activitiesInput() {
    return this._activities.internalValue;
  }

  // output_storage - computed: false, optional: true, required: false
  private _outputStorage = new MpsScheduleOutputStorageOutputReference(this, "output_storage");
  public get outputStorage() {
    return this._outputStorage;
  }
  public putOutputStorage(value: MpsScheduleOutputStorage) {
    this._outputStorage.internalValue = value;
  }
  public resetOutputStorage() {
    this._outputStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputStorageInput() {
    return this._outputStorage.internalValue;
  }

  // task_notify_config - computed: false, optional: true, required: false
  private _taskNotifyConfig = new MpsScheduleTaskNotifyConfigOutputReference(this, "task_notify_config");
  public get taskNotifyConfig() {
    return this._taskNotifyConfig;
  }
  public putTaskNotifyConfig(value: MpsScheduleTaskNotifyConfig) {
    this._taskNotifyConfig.internalValue = value;
  }
  public resetTaskNotifyConfig() {
    this._taskNotifyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskNotifyConfigInput() {
    return this._taskNotifyConfig.internalValue;
  }

  // trigger - computed: false, optional: false, required: true
  private _trigger = new MpsScheduleTriggerOutputReference(this, "trigger");
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: MpsScheduleTrigger) {
    this._trigger.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      output_dir: cdktf.stringToTerraform(this._outputDir),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      schedule_name: cdktf.stringToTerraform(this._scheduleName),
      activities: cdktf.listMapper(mpsScheduleActivitiesToTerraform, true)(this._activities.internalValue),
      output_storage: mpsScheduleOutputStorageToTerraform(this._outputStorage.internalValue),
      task_notify_config: mpsScheduleTaskNotifyConfigToTerraform(this._taskNotifyConfig.internalValue),
      trigger: mpsScheduleTriggerToTerraform(this._trigger.internalValue),
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
      output_dir: {
        value: cdktf.stringToHclTerraform(this._outputDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_name: {
        value: cdktf.stringToHclTerraform(this._scheduleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      activities: {
        value: cdktf.listMapperHcl(mpsScheduleActivitiesToHclTerraform, true)(this._activities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsScheduleActivitiesList",
      },
      output_storage: {
        value: mpsScheduleOutputStorageToHclTerraform(this._outputStorage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsScheduleOutputStorageList",
      },
      task_notify_config: {
        value: mpsScheduleTaskNotifyConfigToHclTerraform(this._taskNotifyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsScheduleTaskNotifyConfigList",
      },
      trigger: {
        value: mpsScheduleTriggerToHclTerraform(this._trigger.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsScheduleTriggerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
