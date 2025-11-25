// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MpsProcessLiveStreamOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#id MpsProcessLiveStreamOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target directory of a live stream processing output file, such as `/movie/201909/`. If this parameter is left empty, the `/` directory will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#output_dir MpsProcessLiveStreamOperation#output_dir}
  */
  readonly outputDir?: string;
  /**
  * The scheme ID.Note 1: About `OutputStorage` and `OutputDir`:If an output storage and directory are specified for a subtask of the scheme, those output settings will be applied.If an output storage and directory are not specified for the subtasks of a scheme, the output parameters passed in the `ProcessMedia` API will be applied.Note 2: If `TaskNotifyConfig` is specified, the specified settings will be used instead of the default callback settings of the scheme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#schedule_id MpsProcessLiveStreamOperation#schedule_id}
  */
  readonly scheduleId?: number;
  /**
  * The source context which is used to pass through the user request information. The task flow status change callback will return the value of this field. It can contain up to 1,000 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#session_context MpsProcessLiveStreamOperation#session_context}
  */
  readonly sessionContext?: string;
  /**
  * The ID used for deduplication. If there was a request with the same ID in the last seven days, the current request will return an error. The ID can contain up to 50 characters. If this parameter is left empty or an empty string is entered, no deduplication will be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#session_id MpsProcessLiveStreamOperation#session_id}
  */
  readonly sessionId?: string;
  /**
  * Live stream URL, which must be a live stream file address. RTMP, HLS, and FLV are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#url MpsProcessLiveStreamOperation#url}
  */
  readonly url: string;
  /**
  * ai_analysis_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#ai_analysis_task MpsProcessLiveStreamOperation#ai_analysis_task}
  */
  readonly aiAnalysisTask?: MpsProcessLiveStreamOperationAiAnalysisTask;
  /**
  * ai_content_review_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#ai_content_review_task MpsProcessLiveStreamOperation#ai_content_review_task}
  */
  readonly aiContentReviewTask?: MpsProcessLiveStreamOperationAiContentReviewTask;
  /**
  * ai_quality_control_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#ai_quality_control_task MpsProcessLiveStreamOperation#ai_quality_control_task}
  */
  readonly aiQualityControlTask?: MpsProcessLiveStreamOperationAiQualityControlTask;
  /**
  * ai_recognition_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#ai_recognition_task MpsProcessLiveStreamOperation#ai_recognition_task}
  */
  readonly aiRecognitionTask?: MpsProcessLiveStreamOperationAiRecognitionTask;
  /**
  * output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#output_storage MpsProcessLiveStreamOperation#output_storage}
  */
  readonly outputStorage?: MpsProcessLiveStreamOperationOutputStorage;
  /**
  * task_notify_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#task_notify_config MpsProcessLiveStreamOperation#task_notify_config}
  */
  readonly taskNotifyConfig: MpsProcessLiveStreamOperationTaskNotifyConfig;
}
export interface MpsProcessLiveStreamOperationAiAnalysisTask {
  /**
  * Video content analysis template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#definition MpsProcessLiveStreamOperation#definition}
  */
  readonly definition: number;
  /**
  * An extended parameter, whose value is a stringfied JSON.Note: This parameter is for customers with special requirements. It needs to be customized offline.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#extended_parameter MpsProcessLiveStreamOperation#extended_parameter}
  */
  readonly extendedParameter?: string;
}

export function mpsProcessLiveStreamOperationAiAnalysisTaskToTerraform(struct?: MpsProcessLiveStreamOperationAiAnalysisTaskOutputReference | MpsProcessLiveStreamOperationAiAnalysisTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.numberToTerraform(struct!.definition),
    extended_parameter: cdktf.stringToTerraform(struct!.extendedParameter),
  }
}


export function mpsProcessLiveStreamOperationAiAnalysisTaskToHclTerraform(struct?: MpsProcessLiveStreamOperationAiAnalysisTaskOutputReference | MpsProcessLiveStreamOperationAiAnalysisTask): any {
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

export class MpsProcessLiveStreamOperationAiAnalysisTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessLiveStreamOperationAiAnalysisTask | undefined {
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

  public set internalValue(value: MpsProcessLiveStreamOperationAiAnalysisTask | undefined) {
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
export interface MpsProcessLiveStreamOperationAiContentReviewTask {
  /**
  * Video content audit template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#definition MpsProcessLiveStreamOperation#definition}
  */
  readonly definition: number;
}

export function mpsProcessLiveStreamOperationAiContentReviewTaskToTerraform(struct?: MpsProcessLiveStreamOperationAiContentReviewTaskOutputReference | MpsProcessLiveStreamOperationAiContentReviewTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.numberToTerraform(struct!.definition),
  }
}


export function mpsProcessLiveStreamOperationAiContentReviewTaskToHclTerraform(struct?: MpsProcessLiveStreamOperationAiContentReviewTaskOutputReference | MpsProcessLiveStreamOperationAiContentReviewTask): any {
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

export class MpsProcessLiveStreamOperationAiContentReviewTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessLiveStreamOperationAiContentReviewTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsProcessLiveStreamOperationAiContentReviewTask | undefined) {
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
export interface MpsProcessLiveStreamOperationAiQualityControlTask {
  /**
  * The channel extension parameter, which is a serialized JSON string.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#channel_ext_para MpsProcessLiveStreamOperation#channel_ext_para}
  */
  readonly channelExtPara?: string;
  /**
  * The ID of the quality control template.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#definition MpsProcessLiveStreamOperation#definition}
  */
  readonly definition?: number;
}

export function mpsProcessLiveStreamOperationAiQualityControlTaskToTerraform(struct?: MpsProcessLiveStreamOperationAiQualityControlTaskOutputReference | MpsProcessLiveStreamOperationAiQualityControlTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_ext_para: cdktf.stringToTerraform(struct!.channelExtPara),
    definition: cdktf.numberToTerraform(struct!.definition),
  }
}


export function mpsProcessLiveStreamOperationAiQualityControlTaskToHclTerraform(struct?: MpsProcessLiveStreamOperationAiQualityControlTaskOutputReference | MpsProcessLiveStreamOperationAiQualityControlTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel_ext_para: {
      value: cdktf.stringToHclTerraform(struct!.channelExtPara),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class MpsProcessLiveStreamOperationAiQualityControlTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessLiveStreamOperationAiQualityControlTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelExtPara !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelExtPara = this._channelExtPara;
    }
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsProcessLiveStreamOperationAiQualityControlTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._channelExtPara = undefined;
      this._definition = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._channelExtPara = value.channelExtPara;
      this._definition = value.definition;
    }
  }

  // channel_ext_para - computed: false, optional: true, required: false
  private _channelExtPara?: string; 
  public get channelExtPara() {
    return this.getStringAttribute('channel_ext_para');
  }
  public set channelExtPara(value: string) {
    this._channelExtPara = value;
  }
  public resetChannelExtPara() {
    this._channelExtPara = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelExtParaInput() {
    return this._channelExtPara;
  }

  // definition - computed: false, optional: true, required: false
  private _definition?: number; 
  public get definition() {
    return this.getNumberAttribute('definition');
  }
  public set definition(value: number) {
    this._definition = value;
  }
  public resetDefinition() {
    this._definition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }
}
export interface MpsProcessLiveStreamOperationAiRecognitionTask {
  /**
  * Intelligent video recognition template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#definition MpsProcessLiveStreamOperation#definition}
  */
  readonly definition: number;
}

export function mpsProcessLiveStreamOperationAiRecognitionTaskToTerraform(struct?: MpsProcessLiveStreamOperationAiRecognitionTaskOutputReference | MpsProcessLiveStreamOperationAiRecognitionTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.numberToTerraform(struct!.definition),
  }
}


export function mpsProcessLiveStreamOperationAiRecognitionTaskToHclTerraform(struct?: MpsProcessLiveStreamOperationAiRecognitionTaskOutputReference | MpsProcessLiveStreamOperationAiRecognitionTask): any {
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

export class MpsProcessLiveStreamOperationAiRecognitionTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessLiveStreamOperationAiRecognitionTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsProcessLiveStreamOperationAiRecognitionTask | undefined) {
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
export interface MpsProcessLiveStreamOperationOutputStorageCosOutputStorage {
  /**
  * The bucket to which the output file of media processing is saved, such as `TopRankVideo-125xxx88`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#bucket MpsProcessLiveStreamOperation#bucket}
  */
  readonly bucket?: string;
  /**
  * The region of the output bucket, such as `ap-chongqing`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#region MpsProcessLiveStreamOperation#region}
  */
  readonly region?: string;
}

export function mpsProcessLiveStreamOperationOutputStorageCosOutputStorageToTerraform(struct?: MpsProcessLiveStreamOperationOutputStorageCosOutputStorageOutputReference | MpsProcessLiveStreamOperationOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function mpsProcessLiveStreamOperationOutputStorageCosOutputStorageToHclTerraform(struct?: MpsProcessLiveStreamOperationOutputStorageCosOutputStorageOutputReference | MpsProcessLiveStreamOperationOutputStorageCosOutputStorage): any {
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

export class MpsProcessLiveStreamOperationOutputStorageCosOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessLiveStreamOperationOutputStorageCosOutputStorage | undefined {
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

  public set internalValue(value: MpsProcessLiveStreamOperationOutputStorageCosOutputStorage | undefined) {
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
export interface MpsProcessLiveStreamOperationOutputStorageS3OutputStorage {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#s3_bucket MpsProcessLiveStreamOperation#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#s3_region MpsProcessLiveStreamOperation#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#s3_secret_id MpsProcessLiveStreamOperation#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#s3_secret_key MpsProcessLiveStreamOperation#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsProcessLiveStreamOperationOutputStorageS3OutputStorageToTerraform(struct?: MpsProcessLiveStreamOperationOutputStorageS3OutputStorageOutputReference | MpsProcessLiveStreamOperationOutputStorageS3OutputStorage): any {
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


export function mpsProcessLiveStreamOperationOutputStorageS3OutputStorageToHclTerraform(struct?: MpsProcessLiveStreamOperationOutputStorageS3OutputStorageOutputReference | MpsProcessLiveStreamOperationOutputStorageS3OutputStorage): any {
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

export class MpsProcessLiveStreamOperationOutputStorageS3OutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessLiveStreamOperationOutputStorageS3OutputStorage | undefined {
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

  public set internalValue(value: MpsProcessLiveStreamOperationOutputStorageS3OutputStorage | undefined) {
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
export interface MpsProcessLiveStreamOperationOutputStorage {
  /**
  * The storage type for a media processing output file. Valid values:`COS`: Tencent Cloud COS.`AWS-S3`: AWS S3. This type is only supported for AWS tasks, and the output bucket must be in the same region as the bucket of the source file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#type MpsProcessLiveStreamOperation#type}
  */
  readonly type: string;
  /**
  * cos_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#cos_output_storage MpsProcessLiveStreamOperation#cos_output_storage}
  */
  readonly cosOutputStorage?: MpsProcessLiveStreamOperationOutputStorageCosOutputStorage;
  /**
  * s3_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#s3_output_storage MpsProcessLiveStreamOperation#s3_output_storage}
  */
  readonly s3OutputStorage?: MpsProcessLiveStreamOperationOutputStorageS3OutputStorage;
}

export function mpsProcessLiveStreamOperationOutputStorageToTerraform(struct?: MpsProcessLiveStreamOperationOutputStorageOutputReference | MpsProcessLiveStreamOperationOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_output_storage: mpsProcessLiveStreamOperationOutputStorageCosOutputStorageToTerraform(struct!.cosOutputStorage),
    s3_output_storage: mpsProcessLiveStreamOperationOutputStorageS3OutputStorageToTerraform(struct!.s3OutputStorage),
  }
}


export function mpsProcessLiveStreamOperationOutputStorageToHclTerraform(struct?: MpsProcessLiveStreamOperationOutputStorageOutputReference | MpsProcessLiveStreamOperationOutputStorage): any {
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
      value: mpsProcessLiveStreamOperationOutputStorageCosOutputStorageToHclTerraform(struct!.cosOutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessLiveStreamOperationOutputStorageCosOutputStorageList",
    },
    s3_output_storage: {
      value: mpsProcessLiveStreamOperationOutputStorageS3OutputStorageToHclTerraform(struct!.s3OutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessLiveStreamOperationOutputStorageS3OutputStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessLiveStreamOperationOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessLiveStreamOperationOutputStorage | undefined {
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

  public set internalValue(value: MpsProcessLiveStreamOperationOutputStorage | undefined) {
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
  private _cosOutputStorage = new MpsProcessLiveStreamOperationOutputStorageCosOutputStorageOutputReference(this, "cos_output_storage");
  public get cosOutputStorage() {
    return this._cosOutputStorage;
  }
  public putCosOutputStorage(value: MpsProcessLiveStreamOperationOutputStorageCosOutputStorage) {
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
  private _s3OutputStorage = new MpsProcessLiveStreamOperationOutputStorageS3OutputStorageOutputReference(this, "s3_output_storage");
  public get s3OutputStorage() {
    return this._s3OutputStorage;
  }
  public putS3OutputStorage(value: MpsProcessLiveStreamOperationOutputStorageS3OutputStorage) {
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
export interface MpsProcessLiveStreamOperationTaskNotifyConfig {
  /**
  * CMQ model. There are two types: `Queue` and `Topic`. Currently, only `Queue` is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#cmq_model MpsProcessLiveStreamOperation#cmq_model}
  */
  readonly cmqModel?: string;
  /**
  * CMQ region, such as `sh` and `bj`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#cmq_region MpsProcessLiveStreamOperation#cmq_region}
  */
  readonly cmqRegion?: string;
  /**
  * The notification type, `CMQ` by default. If this parameter is set to `URL`, HTTP callbacks are sent to the URL specified by `NotifyUrl`.Note: If you do not pass this parameter or pass in an empty string, `CMQ` will be used. To use a different notification type, specify this parameter accordingly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#notify_type MpsProcessLiveStreamOperation#notify_type}
  */
  readonly notifyType?: string;
  /**
  * HTTP callback URL, required if `NotifyType` is set to `URL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#notify_url MpsProcessLiveStreamOperation#notify_url}
  */
  readonly notifyUrl?: string;
  /**
  * This parameter is valid when the model is `Queue`, indicating the name of the CMQ queue for receiving event notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#queue_name MpsProcessLiveStreamOperation#queue_name}
  */
  readonly queueName?: string;
  /**
  * This parameter is valid when the model is `Topic`, indicating the name of the CMQ topic for receiving event notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#topic_name MpsProcessLiveStreamOperation#topic_name}
  */
  readonly topicName?: string;
}

export function mpsProcessLiveStreamOperationTaskNotifyConfigToTerraform(struct?: MpsProcessLiveStreamOperationTaskNotifyConfigOutputReference | MpsProcessLiveStreamOperationTaskNotifyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmq_model: cdktf.stringToTerraform(struct!.cmqModel),
    cmq_region: cdktf.stringToTerraform(struct!.cmqRegion),
    notify_type: cdktf.stringToTerraform(struct!.notifyType),
    notify_url: cdktf.stringToTerraform(struct!.notifyUrl),
    queue_name: cdktf.stringToTerraform(struct!.queueName),
    topic_name: cdktf.stringToTerraform(struct!.topicName),
  }
}


export function mpsProcessLiveStreamOperationTaskNotifyConfigToHclTerraform(struct?: MpsProcessLiveStreamOperationTaskNotifyConfigOutputReference | MpsProcessLiveStreamOperationTaskNotifyConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessLiveStreamOperationTaskNotifyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessLiveStreamOperationTaskNotifyConfig | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsProcessLiveStreamOperationTaskNotifyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cmqModel = undefined;
      this._cmqRegion = undefined;
      this._notifyType = undefined;
      this._notifyUrl = undefined;
      this._queueName = undefined;
      this._topicName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cmqModel = value.cmqModel;
      this._cmqRegion = value.cmqRegion;
      this._notifyType = value.notifyType;
      this._notifyUrl = value.notifyUrl;
      this._queueName = value.queueName;
      this._topicName = value.topicName;
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

  // notify_type - computed: false, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation tencentcloud_mps_process_live_stream_operation}
*/
export class MpsProcessLiveStreamOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mps_process_live_stream_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MpsProcessLiveStreamOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MpsProcessLiveStreamOperation to import
  * @param importFromId The id of the existing MpsProcessLiveStreamOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MpsProcessLiveStreamOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mps_process_live_stream_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mps_process_live_stream_operation tencentcloud_mps_process_live_stream_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MpsProcessLiveStreamOperationConfig
  */
  public constructor(scope: Construct, id: string, config: MpsProcessLiveStreamOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mps_process_live_stream_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
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
    this._scheduleId = config.scheduleId;
    this._sessionContext = config.sessionContext;
    this._sessionId = config.sessionId;
    this._url = config.url;
    this._aiAnalysisTask.internalValue = config.aiAnalysisTask;
    this._aiContentReviewTask.internalValue = config.aiContentReviewTask;
    this._aiQualityControlTask.internalValue = config.aiQualityControlTask;
    this._aiRecognitionTask.internalValue = config.aiRecognitionTask;
    this._outputStorage.internalValue = config.outputStorage;
    this._taskNotifyConfig.internalValue = config.taskNotifyConfig;
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

  // schedule_id - computed: false, optional: true, required: false
  private _scheduleId?: number; 
  public get scheduleId() {
    return this.getNumberAttribute('schedule_id');
  }
  public set scheduleId(value: number) {
    this._scheduleId = value;
  }
  public resetScheduleId() {
    this._scheduleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleIdInput() {
    return this._scheduleId;
  }

  // session_context - computed: false, optional: true, required: false
  private _sessionContext?: string; 
  public get sessionContext() {
    return this.getStringAttribute('session_context');
  }
  public set sessionContext(value: string) {
    this._sessionContext = value;
  }
  public resetSessionContext() {
    this._sessionContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionContextInput() {
    return this._sessionContext;
  }

  // session_id - computed: false, optional: true, required: false
  private _sessionId?: string; 
  public get sessionId() {
    return this.getStringAttribute('session_id');
  }
  public set sessionId(value: string) {
    this._sessionId = value;
  }
  public resetSessionId() {
    this._sessionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionIdInput() {
    return this._sessionId;
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

  // ai_analysis_task - computed: false, optional: true, required: false
  private _aiAnalysisTask = new MpsProcessLiveStreamOperationAiAnalysisTaskOutputReference(this, "ai_analysis_task");
  public get aiAnalysisTask() {
    return this._aiAnalysisTask;
  }
  public putAiAnalysisTask(value: MpsProcessLiveStreamOperationAiAnalysisTask) {
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
  private _aiContentReviewTask = new MpsProcessLiveStreamOperationAiContentReviewTaskOutputReference(this, "ai_content_review_task");
  public get aiContentReviewTask() {
    return this._aiContentReviewTask;
  }
  public putAiContentReviewTask(value: MpsProcessLiveStreamOperationAiContentReviewTask) {
    this._aiContentReviewTask.internalValue = value;
  }
  public resetAiContentReviewTask() {
    this._aiContentReviewTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiContentReviewTaskInput() {
    return this._aiContentReviewTask.internalValue;
  }

  // ai_quality_control_task - computed: false, optional: true, required: false
  private _aiQualityControlTask = new MpsProcessLiveStreamOperationAiQualityControlTaskOutputReference(this, "ai_quality_control_task");
  public get aiQualityControlTask() {
    return this._aiQualityControlTask;
  }
  public putAiQualityControlTask(value: MpsProcessLiveStreamOperationAiQualityControlTask) {
    this._aiQualityControlTask.internalValue = value;
  }
  public resetAiQualityControlTask() {
    this._aiQualityControlTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiQualityControlTaskInput() {
    return this._aiQualityControlTask.internalValue;
  }

  // ai_recognition_task - computed: false, optional: true, required: false
  private _aiRecognitionTask = new MpsProcessLiveStreamOperationAiRecognitionTaskOutputReference(this, "ai_recognition_task");
  public get aiRecognitionTask() {
    return this._aiRecognitionTask;
  }
  public putAiRecognitionTask(value: MpsProcessLiveStreamOperationAiRecognitionTask) {
    this._aiRecognitionTask.internalValue = value;
  }
  public resetAiRecognitionTask() {
    this._aiRecognitionTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiRecognitionTaskInput() {
    return this._aiRecognitionTask.internalValue;
  }

  // output_storage - computed: false, optional: true, required: false
  private _outputStorage = new MpsProcessLiveStreamOperationOutputStorageOutputReference(this, "output_storage");
  public get outputStorage() {
    return this._outputStorage;
  }
  public putOutputStorage(value: MpsProcessLiveStreamOperationOutputStorage) {
    this._outputStorage.internalValue = value;
  }
  public resetOutputStorage() {
    this._outputStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputStorageInput() {
    return this._outputStorage.internalValue;
  }

  // task_notify_config - computed: false, optional: false, required: true
  private _taskNotifyConfig = new MpsProcessLiveStreamOperationTaskNotifyConfigOutputReference(this, "task_notify_config");
  public get taskNotifyConfig() {
    return this._taskNotifyConfig;
  }
  public putTaskNotifyConfig(value: MpsProcessLiveStreamOperationTaskNotifyConfig) {
    this._taskNotifyConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskNotifyConfigInput() {
    return this._taskNotifyConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      output_dir: cdktf.stringToTerraform(this._outputDir),
      schedule_id: cdktf.numberToTerraform(this._scheduleId),
      session_context: cdktf.stringToTerraform(this._sessionContext),
      session_id: cdktf.stringToTerraform(this._sessionId),
      url: cdktf.stringToTerraform(this._url),
      ai_analysis_task: mpsProcessLiveStreamOperationAiAnalysisTaskToTerraform(this._aiAnalysisTask.internalValue),
      ai_content_review_task: mpsProcessLiveStreamOperationAiContentReviewTaskToTerraform(this._aiContentReviewTask.internalValue),
      ai_quality_control_task: mpsProcessLiveStreamOperationAiQualityControlTaskToTerraform(this._aiQualityControlTask.internalValue),
      ai_recognition_task: mpsProcessLiveStreamOperationAiRecognitionTaskToTerraform(this._aiRecognitionTask.internalValue),
      output_storage: mpsProcessLiveStreamOperationOutputStorageToTerraform(this._outputStorage.internalValue),
      task_notify_config: mpsProcessLiveStreamOperationTaskNotifyConfigToTerraform(this._taskNotifyConfig.internalValue),
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
      schedule_id: {
        value: cdktf.numberToHclTerraform(this._scheduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_context: {
        value: cdktf.stringToHclTerraform(this._sessionContext),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_id: {
        value: cdktf.stringToHclTerraform(this._sessionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ai_analysis_task: {
        value: mpsProcessLiveStreamOperationAiAnalysisTaskToHclTerraform(this._aiAnalysisTask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsProcessLiveStreamOperationAiAnalysisTaskList",
      },
      ai_content_review_task: {
        value: mpsProcessLiveStreamOperationAiContentReviewTaskToHclTerraform(this._aiContentReviewTask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsProcessLiveStreamOperationAiContentReviewTaskList",
      },
      ai_quality_control_task: {
        value: mpsProcessLiveStreamOperationAiQualityControlTaskToHclTerraform(this._aiQualityControlTask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsProcessLiveStreamOperationAiQualityControlTaskList",
      },
      ai_recognition_task: {
        value: mpsProcessLiveStreamOperationAiRecognitionTaskToHclTerraform(this._aiRecognitionTask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsProcessLiveStreamOperationAiRecognitionTaskList",
      },
      output_storage: {
        value: mpsProcessLiveStreamOperationOutputStorageToHclTerraform(this._outputStorage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsProcessLiveStreamOperationOutputStorageList",
      },
      task_notify_config: {
        value: mpsProcessLiveStreamOperationTaskNotifyConfigToHclTerraform(this._taskNotifyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsProcessLiveStreamOperationTaskNotifyConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
