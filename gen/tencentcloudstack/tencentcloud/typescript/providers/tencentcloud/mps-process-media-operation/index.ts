// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MpsProcessMediaOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#id MpsProcessMediaOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The directory to save the media processing output file, which must start and end with `/`, such as `/movie/201907/`.If you do not specify this parameter, the file will be saved to the directory specified in `InputInfo`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#output_dir MpsProcessMediaOperation#output_dir}
  */
  readonly outputDir?: string;
  /**
  * The scheme ID.Note 1: About `OutputStorage` and `OutputDir`If an output storage and directory are specified for a subtask of the scheme, those output settings will be applied.If an output storage and directory are not specified for the subtasks of a scheme, the output parameters passed in the `ProcessMedia` API will be applied.Note 2: If `TaskNotifyConfig` is specified, the specified settings will be used instead of the default callback settings of the scheme.Note 3: The trigger configured for a scheme is for automatically starting a scheme. It stops working when you manually call this API to start a scheme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#schedule_id MpsProcessMediaOperation#schedule_id}
  */
  readonly scheduleId?: number;
  /**
  * The source context which is used to pass through the user request information. The task flow status change callback will return the value of this field. It can contain up to 1,000 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#session_context MpsProcessMediaOperation#session_context}
  */
  readonly sessionContext?: string;
  /**
  * The ID used for deduplication. If there was a request with the same ID in the last three days, the current request will return an error. The ID can contain up to 50 characters. If this parameter is left empty or an empty string is entered, no deduplication will be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#session_id MpsProcessMediaOperation#session_id}
  */
  readonly sessionId?: string;
  /**
  * The task type. `Online` (default): A task that is executed immediately. `Offline`: A task that is executed when the system is idle (within three days by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#task_type MpsProcessMediaOperation#task_type}
  */
  readonly taskType?: string;
  /**
  * Task flow priority. The higher the value, the higher the priority. Value range: [-10, 10]. If this parameter is left empty, 0 will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#tasks_priority MpsProcessMediaOperation#tasks_priority}
  */
  readonly tasksPriority?: number;
  /**
  * ai_analysis_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#ai_analysis_task MpsProcessMediaOperation#ai_analysis_task}
  */
  readonly aiAnalysisTask?: MpsProcessMediaOperationAiAnalysisTask;
  /**
  * ai_content_review_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#ai_content_review_task MpsProcessMediaOperation#ai_content_review_task}
  */
  readonly aiContentReviewTask?: MpsProcessMediaOperationAiContentReviewTask;
  /**
  * ai_quality_control_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#ai_quality_control_task MpsProcessMediaOperation#ai_quality_control_task}
  */
  readonly aiQualityControlTask?: MpsProcessMediaOperationAiQualityControlTask;
  /**
  * ai_recognition_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#ai_recognition_task MpsProcessMediaOperation#ai_recognition_task}
  */
  readonly aiRecognitionTask?: MpsProcessMediaOperationAiRecognitionTask;
  /**
  * input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#input_info MpsProcessMediaOperation#input_info}
  */
  readonly inputInfo: MpsProcessMediaOperationInputInfo;
  /**
  * media_process_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#media_process_task MpsProcessMediaOperation#media_process_task}
  */
  readonly mediaProcessTask?: MpsProcessMediaOperationMediaProcessTask;
  /**
  * output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#output_storage MpsProcessMediaOperation#output_storage}
  */
  readonly outputStorage?: MpsProcessMediaOperationOutputStorage;
  /**
  * task_notify_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#task_notify_config MpsProcessMediaOperation#task_notify_config}
  */
  readonly taskNotifyConfig?: MpsProcessMediaOperationTaskNotifyConfig;
}
export interface MpsProcessMediaOperationAiAnalysisTask {
  /**
  * Video content analysis template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#definition MpsProcessMediaOperation#definition}
  */
  readonly definition: number;
  /**
  * An extended parameter, whose value is a stringfied JSON.Note: This parameter is for customers with special requirements. It needs to be customized offline.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#extended_parameter MpsProcessMediaOperation#extended_parameter}
  */
  readonly extendedParameter?: string;
}

export function mpsProcessMediaOperationAiAnalysisTaskToTerraform(struct?: MpsProcessMediaOperationAiAnalysisTaskOutputReference | MpsProcessMediaOperationAiAnalysisTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.numberToTerraform(struct!.definition),
    extended_parameter: cdktf.stringToTerraform(struct!.extendedParameter),
  }
}


export function mpsProcessMediaOperationAiAnalysisTaskToHclTerraform(struct?: MpsProcessMediaOperationAiAnalysisTaskOutputReference | MpsProcessMediaOperationAiAnalysisTask): any {
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

export class MpsProcessMediaOperationAiAnalysisTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationAiAnalysisTask | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationAiAnalysisTask | undefined) {
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
export interface MpsProcessMediaOperationAiContentReviewTask {
  /**
  * Video content audit template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#definition MpsProcessMediaOperation#definition}
  */
  readonly definition: number;
}

export function mpsProcessMediaOperationAiContentReviewTaskToTerraform(struct?: MpsProcessMediaOperationAiContentReviewTaskOutputReference | MpsProcessMediaOperationAiContentReviewTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.numberToTerraform(struct!.definition),
  }
}


export function mpsProcessMediaOperationAiContentReviewTaskToHclTerraform(struct?: MpsProcessMediaOperationAiContentReviewTaskOutputReference | MpsProcessMediaOperationAiContentReviewTask): any {
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

export class MpsProcessMediaOperationAiContentReviewTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationAiContentReviewTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsProcessMediaOperationAiContentReviewTask | undefined) {
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
export interface MpsProcessMediaOperationAiQualityControlTask {
  /**
  * The channel extension parameter, which is a serialized JSON string.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#channel_ext_para MpsProcessMediaOperation#channel_ext_para}
  */
  readonly channelExtPara?: string;
  /**
  * The ID of the quality control template.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#definition MpsProcessMediaOperation#definition}
  */
  readonly definition?: number;
}

export function mpsProcessMediaOperationAiQualityControlTaskToTerraform(struct?: MpsProcessMediaOperationAiQualityControlTaskOutputReference | MpsProcessMediaOperationAiQualityControlTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_ext_para: cdktf.stringToTerraform(struct!.channelExtPara),
    definition: cdktf.numberToTerraform(struct!.definition),
  }
}


export function mpsProcessMediaOperationAiQualityControlTaskToHclTerraform(struct?: MpsProcessMediaOperationAiQualityControlTaskOutputReference | MpsProcessMediaOperationAiQualityControlTask): any {
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

export class MpsProcessMediaOperationAiQualityControlTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationAiQualityControlTask | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationAiQualityControlTask | undefined) {
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
export interface MpsProcessMediaOperationAiRecognitionTask {
  /**
  * Intelligent video recognition template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#definition MpsProcessMediaOperation#definition}
  */
  readonly definition: number;
}

export function mpsProcessMediaOperationAiRecognitionTaskToTerraform(struct?: MpsProcessMediaOperationAiRecognitionTaskOutputReference | MpsProcessMediaOperationAiRecognitionTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.numberToTerraform(struct!.definition),
  }
}


export function mpsProcessMediaOperationAiRecognitionTaskToHclTerraform(struct?: MpsProcessMediaOperationAiRecognitionTaskOutputReference | MpsProcessMediaOperationAiRecognitionTask): any {
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

export class MpsProcessMediaOperationAiRecognitionTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationAiRecognitionTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsProcessMediaOperationAiRecognitionTask | undefined) {
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
export interface MpsProcessMediaOperationInputInfoCosInputInfo {
  /**
  * The COS bucket of the object to process, such as `TopRankVideo-125xxx88`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#bucket MpsProcessMediaOperation#bucket}
  */
  readonly bucket: string;
  /**
  * The path of the object to process, such as `/movie/201907/WildAnimal.mov`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#object MpsProcessMediaOperation#object}
  */
  readonly object: string;
  /**
  * The region of the COS bucket, such as `ap-chongqing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#region MpsProcessMediaOperation#region}
  */
  readonly region: string;
}

export function mpsProcessMediaOperationInputInfoCosInputInfoToTerraform(struct?: MpsProcessMediaOperationInputInfoCosInputInfoOutputReference | MpsProcessMediaOperationInputInfoCosInputInfo): any {
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


export function mpsProcessMediaOperationInputInfoCosInputInfoToHclTerraform(struct?: MpsProcessMediaOperationInputInfoCosInputInfoOutputReference | MpsProcessMediaOperationInputInfoCosInputInfo): any {
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

export class MpsProcessMediaOperationInputInfoCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationInputInfoCosInputInfo | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationInputInfoCosInputInfo | undefined) {
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
export interface MpsProcessMediaOperationInputInfoS3InputInfo {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_bucket MpsProcessMediaOperation#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The path of the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_object MpsProcessMediaOperation#s3_object}
  */
  readonly s3Object: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_region MpsProcessMediaOperation#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_id MpsProcessMediaOperation#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_key MpsProcessMediaOperation#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsProcessMediaOperationInputInfoS3InputInfoToTerraform(struct?: MpsProcessMediaOperationInputInfoS3InputInfoOutputReference | MpsProcessMediaOperationInputInfoS3InputInfo): any {
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


export function mpsProcessMediaOperationInputInfoS3InputInfoToHclTerraform(struct?: MpsProcessMediaOperationInputInfoS3InputInfoOutputReference | MpsProcessMediaOperationInputInfoS3InputInfo): any {
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

export class MpsProcessMediaOperationInputInfoS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationInputInfoS3InputInfo | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationInputInfoS3InputInfo | undefined) {
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
export interface MpsProcessMediaOperationInputInfoUrlInputInfo {
  /**
  * URL of a video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#url MpsProcessMediaOperation#url}
  */
  readonly url: string;
}

export function mpsProcessMediaOperationInputInfoUrlInputInfoToTerraform(struct?: MpsProcessMediaOperationInputInfoUrlInputInfoOutputReference | MpsProcessMediaOperationInputInfoUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function mpsProcessMediaOperationInputInfoUrlInputInfoToHclTerraform(struct?: MpsProcessMediaOperationInputInfoUrlInputInfoOutputReference | MpsProcessMediaOperationInputInfoUrlInputInfo): any {
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

export class MpsProcessMediaOperationInputInfoUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationInputInfoUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsProcessMediaOperationInputInfoUrlInputInfo | undefined) {
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
export interface MpsProcessMediaOperationInputInfo {
  /**
  * The input type. Valid values:`COS`: A COS bucket address. `URL`: A URL. `AWS-S3`: An AWS S3 bucket address. Currently, this type is only supported for transcoding tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#type MpsProcessMediaOperation#type}
  */
  readonly type: string;
  /**
  * cos_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#cos_input_info MpsProcessMediaOperation#cos_input_info}
  */
  readonly cosInputInfo?: MpsProcessMediaOperationInputInfoCosInputInfo;
  /**
  * s3_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_input_info MpsProcessMediaOperation#s3_input_info}
  */
  readonly s3InputInfo?: MpsProcessMediaOperationInputInfoS3InputInfo;
  /**
  * url_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#url_input_info MpsProcessMediaOperation#url_input_info}
  */
  readonly urlInputInfo?: MpsProcessMediaOperationInputInfoUrlInputInfo;
}

export function mpsProcessMediaOperationInputInfoToTerraform(struct?: MpsProcessMediaOperationInputInfoOutputReference | MpsProcessMediaOperationInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_input_info: mpsProcessMediaOperationInputInfoCosInputInfoToTerraform(struct!.cosInputInfo),
    s3_input_info: mpsProcessMediaOperationInputInfoS3InputInfoToTerraform(struct!.s3InputInfo),
    url_input_info: mpsProcessMediaOperationInputInfoUrlInputInfoToTerraform(struct!.urlInputInfo),
  }
}


export function mpsProcessMediaOperationInputInfoToHclTerraform(struct?: MpsProcessMediaOperationInputInfoOutputReference | MpsProcessMediaOperationInputInfo): any {
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
      value: mpsProcessMediaOperationInputInfoCosInputInfoToHclTerraform(struct!.cosInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationInputInfoCosInputInfoList",
    },
    s3_input_info: {
      value: mpsProcessMediaOperationInputInfoS3InputInfoToHclTerraform(struct!.s3InputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationInputInfoS3InputInfoList",
    },
    url_input_info: {
      value: mpsProcessMediaOperationInputInfoUrlInputInfoToHclTerraform(struct!.urlInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationInputInfoUrlInputInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationInputInfo | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationInputInfo | undefined) {
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
  private _cosInputInfo = new MpsProcessMediaOperationInputInfoCosInputInfoOutputReference(this, "cos_input_info");
  public get cosInputInfo() {
    return this._cosInputInfo;
  }
  public putCosInputInfo(value: MpsProcessMediaOperationInputInfoCosInputInfo) {
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
  private _s3InputInfo = new MpsProcessMediaOperationInputInfoS3InputInfoOutputReference(this, "s3_input_info");
  public get s3InputInfo() {
    return this._s3InputInfo;
  }
  public putS3InputInfo(value: MpsProcessMediaOperationInputInfoS3InputInfo) {
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
  private _urlInputInfo = new MpsProcessMediaOperationInputInfoUrlInputInfoOutputReference(this, "url_input_info");
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
  public putUrlInputInfo(value: MpsProcessMediaOperationInputInfoUrlInputInfo) {
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
export interface MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleCosInputInfo {
  /**
  * The COS bucket of the object to process, such as `TopRankVideo-125xxx88`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#bucket MpsProcessMediaOperation#bucket}
  */
  readonly bucket: string;
  /**
  * The path of the object to process, such as `/movie/201907/WildAnimal.mov`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#object MpsProcessMediaOperation#object}
  */
  readonly object: string;
  /**
  * The region of the COS bucket, such as `ap-chongqing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#region MpsProcessMediaOperation#region}
  */
  readonly region: string;
}

export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleCosInputInfoToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleCosInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleCosInputInfo): any {
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


export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleCosInputInfoToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleCosInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleCosInputInfo): any {
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

export class MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleCosInputInfo | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleCosInputInfo | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleS3InputInfo {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_bucket MpsProcessMediaOperation#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The path of the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_object MpsProcessMediaOperation#s3_object}
  */
  readonly s3Object: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_region MpsProcessMediaOperation#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_id MpsProcessMediaOperation#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_key MpsProcessMediaOperation#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleS3InputInfoToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleS3InputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleS3InputInfo): any {
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


export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleS3InputInfoToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleS3InputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleS3InputInfo): any {
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

export class MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleS3InputInfo | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleS3InputInfo | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleUrlInputInfo {
  /**
  * URL of a video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#url MpsProcessMediaOperation#url}
  */
  readonly url: string;
}

export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleUrlInputInfoToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleUrlInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleUrlInputInfoToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleUrlInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleUrlInputInfo): any {
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

export class MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleUrlInputInfo | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitle {
  /**
  * The input type. Valid values:`COS`: A COS bucket address. `URL`: A URL. `AWS-S3`: An AWS S3 bucket address. Currently, this type is only supported for transcoding tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#type MpsProcessMediaOperation#type}
  */
  readonly type: string;
  /**
  * cos_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#cos_input_info MpsProcessMediaOperation#cos_input_info}
  */
  readonly cosInputInfo?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleCosInputInfo;
  /**
  * s3_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_input_info MpsProcessMediaOperation#s3_input_info}
  */
  readonly s3InputInfo?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleS3InputInfo;
  /**
  * url_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#url_input_info MpsProcessMediaOperation#url_input_info}
  */
  readonly urlInputInfo?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleUrlInputInfo;
}

export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleOutputReference | MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_input_info: mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleCosInputInfoToTerraform(struct!.cosInputInfo),
    s3_input_info: mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleS3InputInfoToTerraform(struct!.s3InputInfo),
    url_input_info: mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleUrlInputInfoToTerraform(struct!.urlInputInfo),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleOutputReference | MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitle): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleCosInputInfoToHclTerraform(struct!.cosInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleCosInputInfoList",
    },
    s3_input_info: {
      value: mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleS3InputInfoToHclTerraform(struct!.s3InputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleS3InputInfoList",
    },
    url_input_info: {
      value: mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleUrlInputInfoToHclTerraform(struct!.urlInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleUrlInputInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitle | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitle | undefined) {
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
  private _cosInputInfo = new MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleCosInputInfoOutputReference(this, "cos_input_info");
  public get cosInputInfo() {
    return this._cosInputInfo;
  }
  public putCosInputInfo(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleCosInputInfo) {
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
  private _s3InputInfo = new MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleS3InputInfoOutputReference(this, "s3_input_info");
  public get s3InputInfo() {
    return this._s3InputInfo;
  }
  public putS3InputInfo(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleS3InputInfo) {
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
  private _urlInputInfo = new MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleUrlInputInfoOutputReference(this, "url_input_info");
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
  public putUrlInputInfo(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleUrlInputInfo) {
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
export interface MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitles {
  /**
  * The mode. Valid values:`subtitle-stream`: Add a subtitle track.`close-caption-708`: Embed CEA-708 subtitles in SEI frames.`close-caption-608`: Embed CEA-608 subtitles in SEI frames.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#type MpsProcessMediaOperation#type}
  */
  readonly type?: string;
  /**
  * subtitle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#subtitle MpsProcessMediaOperation#subtitle}
  */
  readonly subtitle?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitle;
}

export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    subtitle: mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleToTerraform(struct!.subtitle),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitles | cdktf.IResolvable): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleToHclTerraform(struct!.subtitle),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitles | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitles | cdktf.IResolvable | undefined) {
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
  private _subtitle = new MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitleOutputReference(this, "subtitle");
  public get subtitle() {
    return this._subtitle;
  }
  public putSubtitle(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesSubtitle) {
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

export class MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesList extends cdktf.ComplexList {
  public internalValue? : MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitles[] | cdktf.IResolvable

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
  public get(index: number): MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesOutputReference {
    return new MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageCosOutputStorage {
  /**
  * The bucket to which the output file of media processing is saved, such as `TopRankVideo-125xxx88`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#bucket MpsProcessMediaOperation#bucket}
  */
  readonly bucket?: string;
  /**
  * The region of the output bucket, such as `ap-chongqing`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#region MpsProcessMediaOperation#region}
  */
  readonly region?: string;
}

export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageCosOutputStorageToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageCosOutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageCosOutputStorageToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageCosOutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageCosOutputStorage): any {
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

export class MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageCosOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageCosOutputStorage | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageCosOutputStorage | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageS3OutputStorage {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_bucket MpsProcessMediaOperation#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_region MpsProcessMediaOperation#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_id MpsProcessMediaOperation#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_key MpsProcessMediaOperation#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageS3OutputStorageToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageS3OutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageS3OutputStorage): any {
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


export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageS3OutputStorageToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageS3OutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageS3OutputStorage): any {
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

export class MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageS3OutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageS3OutputStorage | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageS3OutputStorage | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorage {
  /**
  * The storage type for a media processing output file. Valid values:`COS`: Tencent Cloud COS`&gt;AWS-S3`: AWS S3. This type is only supported for AWS tasks, and the output bucket must be in the same region as the bucket of the source file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#type MpsProcessMediaOperation#type}
  */
  readonly type: string;
  /**
  * cos_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#cos_output_storage MpsProcessMediaOperation#cos_output_storage}
  */
  readonly cosOutputStorage?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageCosOutputStorage;
  /**
  * s3_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_output_storage MpsProcessMediaOperation#s3_output_storage}
  */
  readonly s3OutputStorage?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageS3OutputStorage;
}

export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_output_storage: mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageCosOutputStorageToTerraform(struct!.cosOutputStorage),
    s3_output_storage: mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageS3OutputStorageToTerraform(struct!.s3OutputStorage),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorage): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageCosOutputStorageToHclTerraform(struct!.cosOutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageCosOutputStorageList",
    },
    s3_output_storage: {
      value: mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageS3OutputStorageToHclTerraform(struct!.s3OutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageS3OutputStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorage | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorage | undefined) {
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
  private _cosOutputStorage = new MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageCosOutputStorageOutputReference(this, "cos_output_storage");
  public get cosOutputStorage() {
    return this._cosOutputStorage;
  }
  public putCosOutputStorage(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageCosOutputStorage) {
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
  private _s3OutputStorage = new MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageS3OutputStorageOutputReference(this, "s3_output_storage");
  public get s3OutputStorage() {
    return this._s3OutputStorage;
  }
  public putS3OutputStorage(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageS3OutputStorage) {
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
export interface MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfo {
  /**
  * The COS bucket of the object to process, such as `TopRankVideo-125xxx88`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#bucket MpsProcessMediaOperation#bucket}
  */
  readonly bucket: string;
  /**
  * The path of the object to process, such as `/movie/201907/WildAnimal.mov`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#object MpsProcessMediaOperation#object}
  */
  readonly object: string;
  /**
  * The region of the COS bucket, such as `ap-chongqing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#region MpsProcessMediaOperation#region}
  */
  readonly region: string;
}

export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfo): any {
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


export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfo): any {
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

export class MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfo | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfo | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfo {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_bucket MpsProcessMediaOperation#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The path of the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_object MpsProcessMediaOperation#s3_object}
  */
  readonly s3Object: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_region MpsProcessMediaOperation#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_id MpsProcessMediaOperation#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_key MpsProcessMediaOperation#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfo): any {
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


export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfo): any {
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

export class MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfo | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfo | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo {
  /**
  * URL of a video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#url MpsProcessMediaOperation#url}
  */
  readonly url: string;
}

export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo): any {
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

export class MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContent {
  /**
  * The input type. Valid values:`COS`: A COS bucket address. `URL`: A URL. `AWS-S3`: An AWS S3 bucket address. Currently, this type is only supported for transcoding tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#type MpsProcessMediaOperation#type}
  */
  readonly type: string;
  /**
  * cos_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#cos_input_info MpsProcessMediaOperation#cos_input_info}
  */
  readonly cosInputInfo?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfo;
  /**
  * s3_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_input_info MpsProcessMediaOperation#s3_input_info}
  */
  readonly s3InputInfo?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfo;
  /**
  * url_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#url_input_info MpsProcessMediaOperation#url_input_info}
  */
  readonly urlInputInfo?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo;
}

export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentOutputReference | MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_input_info: mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToTerraform(struct!.cosInputInfo),
    s3_input_info: mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToTerraform(struct!.s3InputInfo),
    url_input_info: mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToTerraform(struct!.urlInputInfo),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentOutputReference | MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContent): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToHclTerraform(struct!.cosInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoList",
    },
    s3_input_info: {
      value: mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToHclTerraform(struct!.s3InputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoList",
    },
    url_input_info: {
      value: mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToHclTerraform(struct!.urlInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContent | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContent | undefined) {
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
  private _cosInputInfo = new MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference(this, "cos_input_info");
  public get cosInputInfo() {
    return this._cosInputInfo;
  }
  public putCosInputInfo(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfo) {
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
  private _s3InputInfo = new MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference(this, "s3_input_info");
  public get s3InputInfo() {
    return this._s3InputInfo;
  }
  public putS3InputInfo(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfo) {
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
  private _urlInputInfo = new MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference(this, "url_input_info");
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
  public putUrlInputInfo(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo) {
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
export interface MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplate {
  /**
  * Watermark height. % and px formats are supported:If the string ends in %, the `Height` of the watermark will be the specified percentage of the video height; for example, `10%` means that `Height` is 10% of the video height;If the string ends in px, the `Height` of the watermark will be in px; for example, `100px` means that `Height` is 100 px.Default value: 0 px, which means that `Height` will be proportionally scaled according to the aspect ratio of the original watermark image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#height MpsProcessMediaOperation#height}
  */
  readonly height?: string;
  /**
  * Repeat type of an animated watermark. Valid values:`once`: no longer appears after watermark playback ends.`repeat_last_frame`: stays on the last frame after watermark playback ends.`repeat` (default): repeats the playback until the video ends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#repeat_type MpsProcessMediaOperation#repeat_type}
  */
  readonly repeatType?: string;
  /**
  * Watermark width. % and px formats are supported:If the string ends in %, the `Width` of the watermark will be the specified percentage of the video width; for example, `10%` means that `Width` is 10% of the video width;If the string ends in px, the `Width` of the watermark will be in px; for example, `100px` means that `Width` is 100 px.Default value: 10%.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#width MpsProcessMediaOperation#width}
  */
  readonly width?: string;
  /**
  * image_content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#image_content MpsProcessMediaOperation#image_content}
  */
  readonly imageContent: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContent;
}

export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateOutputReference | MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.stringToTerraform(struct!.height),
    repeat_type: cdktf.stringToTerraform(struct!.repeatType),
    width: cdktf.stringToTerraform(struct!.width),
    image_content: mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentToTerraform(struct!.imageContent),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateOutputReference | MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplate): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentToHclTerraform(struct!.imageContent),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplate | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplate | undefined) {
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
  private _imageContent = new MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContentOutputReference(this, "image_content");
  public get imageContent() {
    return this._imageContent;
  }
  public putImageContent(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateImageContent) {
    this._imageContent.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageContentInput() {
    return this._imageContent.internalValue;
  }
}
export interface MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameter {
  /**
  * Origin position, which currently can only be:TopLeft: the origin of coordinates is in the top-left corner of the video, and the origin of the watermark is in the top-left corner of the image or text.Default value: TopLeft.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#coordinate_origin MpsProcessMediaOperation#coordinate_origin}
  */
  readonly coordinateOrigin?: string;
  /**
  * Watermark type. Valid values:image: image watermark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#type MpsProcessMediaOperation#type}
  */
  readonly type: string;
  /**
  * The horizontal position of the origin of the watermark relative to the origin of coordinates of the video. % and px formats are supported:If the string ends in %, the `XPos` of the watermark will be the specified percentage of the video width; for example, `10%` means that `XPos` is 10% of the video width;If the string ends in px, the `XPos` of the watermark will be the specified px; for example, `100px` means that `XPos` is 100 px.Default value: 0 px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#x_pos MpsProcessMediaOperation#x_pos}
  */
  readonly xPos?: string;
  /**
  * The vertical position of the origin of the watermark relative to the origin of coordinates of the video. % and px formats are supported:If the string ends in %, the `YPos` of the watermark will be the specified percentage of the video height; for example, `10%` means that `YPos` is 10% of the video height;If the string ends in px, the `YPos` of the watermark will be the specified px; for example, `100px` means that `YPos` is 100 px.Default value: 0 px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#y_pos MpsProcessMediaOperation#y_pos}
  */
  readonly yPos?: string;
  /**
  * image_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#image_template MpsProcessMediaOperation#image_template}
  */
  readonly imageTemplate?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplate;
}

export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterOutputReference | MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    coordinate_origin: cdktf.stringToTerraform(struct!.coordinateOrigin),
    type: cdktf.stringToTerraform(struct!.type),
    x_pos: cdktf.stringToTerraform(struct!.xPos),
    y_pos: cdktf.stringToTerraform(struct!.yPos),
    image_template: mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateToTerraform(struct!.imageTemplate),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterOutputReference | MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameter): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateToHclTerraform(struct!.imageTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameter | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameter | undefined) {
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
  private _imageTemplate = new MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplateOutputReference(this, "image_template");
  public get imageTemplate() {
    return this._imageTemplate;
  }
  public putImageTemplate(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterImageTemplate) {
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
export interface MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSet {
  /**
  * ID of a watermarking template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#definition MpsProcessMediaOperation#definition}
  */
  readonly definition: number;
  /**
  * End time offset of a watermark in seconds.If this parameter is left empty or 0 is entered, the watermark will exist till the last video frame;If this value is greater than 0 (e.g., n), the watermark will exist till second n;If this value is smaller than 0 (e.g., -n), the watermark will exist till second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#end_time_offset MpsProcessMediaOperation#end_time_offset}
  */
  readonly endTimeOffset?: number;
  /**
  * Start time offset of a watermark in seconds. If this parameter is left empty or 0 is entered, the watermark will appear upon the first video frame.If this parameter is left empty or 0 is entered, the watermark will appear upon the first video frame;If this value is greater than 0 (e.g., n), the watermark will appear at second n after the first video frame;If this value is smaller than 0 (e.g., -n), the watermark will appear at second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#start_time_offset MpsProcessMediaOperation#start_time_offset}
  */
  readonly startTimeOffset?: number;
  /**
  * SVG content of up to 2,000,000 characters. This field is required only when the watermark type is `SVG`.SVG watermark is not available for screenshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#svg_content MpsProcessMediaOperation#svg_content}
  */
  readonly svgContent?: string;
  /**
  * Text content of up to 100 characters. This field is required only when the watermark type is text.Text watermark is not available for screenshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#text_content MpsProcessMediaOperation#text_content}
  */
  readonly textContent?: string;
  /**
  * raw_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#raw_parameter MpsProcessMediaOperation#raw_parameter}
  */
  readonly rawParameter?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameter;
}

export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSet | cdktf.IResolvable): any {
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
    raw_parameter: mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterToTerraform(struct!.rawParameter),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSet | cdktf.IResolvable): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterToHclTerraform(struct!.rawParameter),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSet | cdktf.IResolvable | undefined) {
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
  private _rawParameter = new MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameterOutputReference(this, "raw_parameter");
  public get rawParameter() {
    return this._rawParameter;
  }
  public putRawParameter(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetRawParameter) {
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

export class MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetList extends cdktf.ComplexList {
  public internalValue? : MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSet[] | cdktf.IResolvable

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
  public get(index: number): MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetOutputReference {
    return new MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSet {
  /**
  * Adaptive bitrate streaming template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#definition MpsProcessMediaOperation#definition}
  */
  readonly definition: number;
  /**
  * The relative or absolute output path of the manifest file after being transcoded to adaptive bitrate streaming. If this parameter is left empty, a relative path in the following format will be used by default: `{inputName}_adaptiveDynamicStreaming_{definition}.{format}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#output_object_path MpsProcessMediaOperation#output_object_path}
  */
  readonly outputObjectPath?: string;
  /**
  * The relative output path of the segment file after being transcoded to adaptive bitrate streaming (in HLS format only). If this parameter is left empty, a relative path in the following format will be used by default: `{inputName}_adaptiveDynamicStreaming_{definition}_{subStreamNumber}_{segmentNumber}.{format}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#segment_object_name MpsProcessMediaOperation#segment_object_name}
  */
  readonly segmentObjectName?: string;
  /**
  * The relative output path of the substream file after being transcoded to adaptive bitrate streaming. If this parameter is left empty, a relative path in the following format will be used by default: `{inputName}_adaptiveDynamicStreaming_{definition}_{subStreamNumber}.{format}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#sub_stream_object_name MpsProcessMediaOperation#sub_stream_object_name}
  */
  readonly subStreamObjectName?: string;
  /**
  * add_on_subtitles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#add_on_subtitles MpsProcessMediaOperation#add_on_subtitles}
  */
  readonly addOnSubtitles?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitles[] | cdktf.IResolvable;
  /**
  * output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#output_storage MpsProcessMediaOperation#output_storage}
  */
  readonly outputStorage?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorage;
  /**
  * watermark_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#watermark_set MpsProcessMediaOperation#watermark_set}
  */
  readonly watermarkSet?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSet[] | cdktf.IResolvable;
}

export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.numberToTerraform(struct!.definition),
    output_object_path: cdktf.stringToTerraform(struct!.outputObjectPath),
    segment_object_name: cdktf.stringToTerraform(struct!.segmentObjectName),
    sub_stream_object_name: cdktf.stringToTerraform(struct!.subStreamObjectName),
    add_on_subtitles: cdktf.listMapper(mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesToTerraform, true)(struct!.addOnSubtitles),
    output_storage: mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageToTerraform(struct!.outputStorage),
    watermark_set: cdktf.listMapper(mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetToTerraform, true)(struct!.watermarkSet),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSet | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesToHclTerraform, true)(struct!.addOnSubtitles),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesList",
    },
    output_storage: {
      value: mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageToHclTerraform(struct!.outputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageList",
    },
    watermark_set: {
      value: cdktf.listMapperHcl(mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetToHclTerraform, true)(struct!.watermarkSet),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._outputObjectPath = undefined;
      this._segmentObjectName = undefined;
      this._subStreamObjectName = undefined;
      this._addOnSubtitles.internalValue = undefined;
      this._outputStorage.internalValue = undefined;
      this._watermarkSet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _addOnSubtitles = new MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitlesList(this, "add_on_subtitles", false);
  public get addOnSubtitles() {
    return this._addOnSubtitles;
  }
  public putAddOnSubtitles(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetAddOnSubtitles[] | cdktf.IResolvable) {
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
  private _outputStorage = new MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorageOutputReference(this, "output_storage");
  public get outputStorage() {
    return this._outputStorage;
  }
  public putOutputStorage(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputStorage) {
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
  private _watermarkSet = new MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSetList(this, "watermark_set", false);
  public get watermarkSet() {
    return this._watermarkSet;
  }
  public putWatermarkSet(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetWatermarkSet[] | cdktf.IResolvable) {
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

export class MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetList extends cdktf.ComplexList {
  public internalValue? : MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSet[] | cdktf.IResolvable

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
  public get(index: number): MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputReference {
    return new MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageCosOutputStorage {
  /**
  * The bucket to which the output file of media processing is saved, such as `TopRankVideo-125xxx88`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#bucket MpsProcessMediaOperation#bucket}
  */
  readonly bucket?: string;
  /**
  * The region of the output bucket, such as `ap-chongqing`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#region MpsProcessMediaOperation#region}
  */
  readonly region?: string;
}

export function mpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageCosOutputStorageToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageCosOutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageCosOutputStorageToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageCosOutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageCosOutputStorage): any {
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

export class MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageCosOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageCosOutputStorage | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageCosOutputStorage | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageS3OutputStorage {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_bucket MpsProcessMediaOperation#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_region MpsProcessMediaOperation#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_id MpsProcessMediaOperation#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_key MpsProcessMediaOperation#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageS3OutputStorageToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageS3OutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageS3OutputStorage): any {
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


export function mpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageS3OutputStorageToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageS3OutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageS3OutputStorage): any {
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

export class MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageS3OutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageS3OutputStorage | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageS3OutputStorage | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorage {
  /**
  * The storage type for a media processing output file. Valid values:`COS`: Tencent Cloud COS`&gt;AWS-S3`: AWS S3. This type is only supported for AWS tasks, and the output bucket must be in the same region as the bucket of the source file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#type MpsProcessMediaOperation#type}
  */
  readonly type: string;
  /**
  * cos_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#cos_output_storage MpsProcessMediaOperation#cos_output_storage}
  */
  readonly cosOutputStorage?: MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageCosOutputStorage;
  /**
  * s3_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_output_storage MpsProcessMediaOperation#s3_output_storage}
  */
  readonly s3OutputStorage?: MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageS3OutputStorage;
}

export function mpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_output_storage: mpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageCosOutputStorageToTerraform(struct!.cosOutputStorage),
    s3_output_storage: mpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageS3OutputStorageToTerraform(struct!.s3OutputStorage),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorage): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageCosOutputStorageToHclTerraform(struct!.cosOutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageCosOutputStorageList",
    },
    s3_output_storage: {
      value: mpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageS3OutputStorageToHclTerraform(struct!.s3OutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageS3OutputStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorage | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorage | undefined) {
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
  private _cosOutputStorage = new MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageCosOutputStorageOutputReference(this, "cos_output_storage");
  public get cosOutputStorage() {
    return this._cosOutputStorage;
  }
  public putCosOutputStorage(value: MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageCosOutputStorage) {
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
  private _s3OutputStorage = new MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageS3OutputStorageOutputReference(this, "s3_output_storage");
  public get s3OutputStorage() {
    return this._s3OutputStorage;
  }
  public putS3OutputStorage(value: MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageS3OutputStorage) {
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
export interface MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSet {
  /**
  * Animated image generating template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#definition MpsProcessMediaOperation#definition}
  */
  readonly definition: number;
  /**
  * End time of an animated image in a video in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#end_time_offset MpsProcessMediaOperation#end_time_offset}
  */
  readonly endTimeOffset: number;
  /**
  * Output path to a generated animated image file, which can be a relative path or an absolute path. If this parameter is left empty, the following relative path will be used by default: `{inputName}_animatedGraphic_{definition}.{format}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#output_object_path MpsProcessMediaOperation#output_object_path}
  */
  readonly outputObjectPath?: string;
  /**
  * Start time of an animated image in a video in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#start_time_offset MpsProcessMediaOperation#start_time_offset}
  */
  readonly startTimeOffset: number;
  /**
  * output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#output_storage MpsProcessMediaOperation#output_storage}
  */
  readonly outputStorage?: MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorage;
}

export function mpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.numberToTerraform(struct!.definition),
    end_time_offset: cdktf.numberToTerraform(struct!.endTimeOffset),
    output_object_path: cdktf.stringToTerraform(struct!.outputObjectPath),
    start_time_offset: cdktf.numberToTerraform(struct!.startTimeOffset),
    output_storage: mpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageToTerraform(struct!.outputStorage),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSet | cdktf.IResolvable): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageToHclTerraform(struct!.outputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._endTimeOffset = undefined;
      this._outputObjectPath = undefined;
      this._startTimeOffset = undefined;
      this._outputStorage.internalValue = undefined;
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
  private _outputStorage = new MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorageOutputReference(this, "output_storage");
  public get outputStorage() {
    return this._outputStorage;
  }
  public putOutputStorage(value: MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputStorage) {
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

export class MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetList extends cdktf.ComplexList {
  public internalValue? : MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSet[] | cdktf.IResolvable

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
  public get(index: number): MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputReference {
    return new MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetObjectNumberFormat {
  /**
  * Increment of the `{number}` variable. Default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#increment MpsProcessMediaOperation#increment}
  */
  readonly increment?: number;
  /**
  * Start value of the `{number}` variable. Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#initial_value MpsProcessMediaOperation#initial_value}
  */
  readonly initialValue?: number;
  /**
  * Minimum length of the `{number}` variable. A placeholder will be used if the variable length is below the minimum requirement. Default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#min_length MpsProcessMediaOperation#min_length}
  */
  readonly minLength?: number;
  /**
  * Placeholder used when the `{number}` variable length is below the minimum requirement. Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#place_holder MpsProcessMediaOperation#place_holder}
  */
  readonly placeHolder?: string;
}

export function mpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetObjectNumberFormatToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetObjectNumberFormatOutputReference | MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetObjectNumberFormat): any {
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


export function mpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetObjectNumberFormatToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetObjectNumberFormatOutputReference | MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetObjectNumberFormat): any {
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

export class MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetObjectNumberFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetObjectNumberFormat | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetObjectNumberFormat | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageCosOutputStorage {
  /**
  * The bucket to which the output file of media processing is saved, such as `TopRankVideo-125xxx88`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#bucket MpsProcessMediaOperation#bucket}
  */
  readonly bucket?: string;
  /**
  * The region of the output bucket, such as `ap-chongqing`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#region MpsProcessMediaOperation#region}
  */
  readonly region?: string;
}

export function mpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageCosOutputStorageToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageCosOutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageCosOutputStorageToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageCosOutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageCosOutputStorage): any {
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

export class MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageCosOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageCosOutputStorage | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageCosOutputStorage | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageS3OutputStorage {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_bucket MpsProcessMediaOperation#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_region MpsProcessMediaOperation#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_id MpsProcessMediaOperation#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_key MpsProcessMediaOperation#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageS3OutputStorageToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageS3OutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageS3OutputStorage): any {
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


export function mpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageS3OutputStorageToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageS3OutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageS3OutputStorage): any {
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

export class MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageS3OutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageS3OutputStorage | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageS3OutputStorage | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorage {
  /**
  * The storage type for a media processing output file. Valid values:`COS`: Tencent Cloud COS`&gt;AWS-S3`: AWS S3. This type is only supported for AWS tasks, and the output bucket must be in the same region as the bucket of the source file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#type MpsProcessMediaOperation#type}
  */
  readonly type: string;
  /**
  * cos_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#cos_output_storage MpsProcessMediaOperation#cos_output_storage}
  */
  readonly cosOutputStorage?: MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageCosOutputStorage;
  /**
  * s3_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_output_storage MpsProcessMediaOperation#s3_output_storage}
  */
  readonly s3OutputStorage?: MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageS3OutputStorage;
}

export function mpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_output_storage: mpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageCosOutputStorageToTerraform(struct!.cosOutputStorage),
    s3_output_storage: mpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageS3OutputStorageToTerraform(struct!.s3OutputStorage),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorage): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageCosOutputStorageToHclTerraform(struct!.cosOutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageCosOutputStorageList",
    },
    s3_output_storage: {
      value: mpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageS3OutputStorageToHclTerraform(struct!.s3OutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageS3OutputStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorage | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorage | undefined) {
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
  private _cosOutputStorage = new MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageCosOutputStorageOutputReference(this, "cos_output_storage");
  public get cosOutputStorage() {
    return this._cosOutputStorage;
  }
  public putCosOutputStorage(value: MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageCosOutputStorage) {
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
  private _s3OutputStorage = new MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageS3OutputStorageOutputReference(this, "s3_output_storage");
  public get s3OutputStorage() {
    return this._s3OutputStorage;
  }
  public putS3OutputStorage(value: MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageS3OutputStorage) {
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
export interface MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSet {
  /**
  * ID of an image sprite generating template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#definition MpsProcessMediaOperation#definition}
  */
  readonly definition: number;
  /**
  * Output path to a generated image sprite file, which can be a relative path or an absolute path. If this parameter is left empty, the following relative path will be used by default: `{inputName}_imageSprite_{definition}_{number}.{format}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#output_object_path MpsProcessMediaOperation#output_object_path}
  */
  readonly outputObjectPath?: string;
  /**
  * Output path to the WebVTT file after an image sprite is generated, which can only be a relative path. If this parameter is left empty, the following relative path will be used by default: `{inputName}_imageSprite_{definition}.{format}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#web_vtt_object_name MpsProcessMediaOperation#web_vtt_object_name}
  */
  readonly webVttObjectName?: string;
  /**
  * object_number_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#object_number_format MpsProcessMediaOperation#object_number_format}
  */
  readonly objectNumberFormat?: MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetObjectNumberFormat;
  /**
  * output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#output_storage MpsProcessMediaOperation#output_storage}
  */
  readonly outputStorage?: MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorage;
}

export function mpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.numberToTerraform(struct!.definition),
    output_object_path: cdktf.stringToTerraform(struct!.outputObjectPath),
    web_vtt_object_name: cdktf.stringToTerraform(struct!.webVttObjectName),
    object_number_format: mpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetObjectNumberFormatToTerraform(struct!.objectNumberFormat),
    output_storage: mpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageToTerraform(struct!.outputStorage),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSet | cdktf.IResolvable): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetObjectNumberFormatToHclTerraform(struct!.objectNumberFormat),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetObjectNumberFormatList",
    },
    output_storage: {
      value: mpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageToHclTerraform(struct!.outputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._outputObjectPath = undefined;
      this._webVttObjectName = undefined;
      this._objectNumberFormat.internalValue = undefined;
      this._outputStorage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _objectNumberFormat = new MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetObjectNumberFormatOutputReference(this, "object_number_format");
  public get objectNumberFormat() {
    return this._objectNumberFormat;
  }
  public putObjectNumberFormat(value: MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetObjectNumberFormat) {
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
  private _outputStorage = new MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorageOutputReference(this, "output_storage");
  public get outputStorage() {
    return this._outputStorage;
  }
  public putOutputStorage(value: MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputStorage) {
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

export class MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetList extends cdktf.ComplexList {
  public internalValue? : MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSet[] | cdktf.IResolvable

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
  public get(index: number): MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputReference {
    return new MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetObjectNumberFormat {
  /**
  * Increment of the `{number}` variable. Default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#increment MpsProcessMediaOperation#increment}
  */
  readonly increment?: number;
  /**
  * Start value of the `{number}` variable. Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#initial_value MpsProcessMediaOperation#initial_value}
  */
  readonly initialValue?: number;
  /**
  * Minimum length of the `{number}` variable. A placeholder will be used if the variable length is below the minimum requirement. Default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#min_length MpsProcessMediaOperation#min_length}
  */
  readonly minLength?: number;
  /**
  * Placeholder used when the `{number}` variable length is below the minimum requirement. Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#place_holder MpsProcessMediaOperation#place_holder}
  */
  readonly placeHolder?: string;
}

export function mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetObjectNumberFormatToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetObjectNumberFormatOutputReference | MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetObjectNumberFormat): any {
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


export function mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetObjectNumberFormatToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetObjectNumberFormatOutputReference | MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetObjectNumberFormat): any {
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

export class MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetObjectNumberFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetObjectNumberFormat | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetObjectNumberFormat | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageCosOutputStorage {
  /**
  * The bucket to which the output file of media processing is saved, such as `TopRankVideo-125xxx88`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#bucket MpsProcessMediaOperation#bucket}
  */
  readonly bucket?: string;
  /**
  * The region of the output bucket, such as `ap-chongqing`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#region MpsProcessMediaOperation#region}
  */
  readonly region?: string;
}

export function mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageCosOutputStorageToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageCosOutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageCosOutputStorageToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageCosOutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageCosOutputStorage): any {
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

export class MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageCosOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageCosOutputStorage | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageCosOutputStorage | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageS3OutputStorage {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_bucket MpsProcessMediaOperation#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_region MpsProcessMediaOperation#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_id MpsProcessMediaOperation#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_key MpsProcessMediaOperation#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageS3OutputStorageToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageS3OutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageS3OutputStorage): any {
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


export function mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageS3OutputStorageToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageS3OutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageS3OutputStorage): any {
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

export class MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageS3OutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageS3OutputStorage | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageS3OutputStorage | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorage {
  /**
  * The storage type for a media processing output file. Valid values:`COS`: Tencent Cloud COS`&gt;AWS-S3`: AWS S3. This type is only supported for AWS tasks, and the output bucket must be in the same region as the bucket of the source file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#type MpsProcessMediaOperation#type}
  */
  readonly type: string;
  /**
  * cos_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#cos_output_storage MpsProcessMediaOperation#cos_output_storage}
  */
  readonly cosOutputStorage?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageCosOutputStorage;
  /**
  * s3_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_output_storage MpsProcessMediaOperation#s3_output_storage}
  */
  readonly s3OutputStorage?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageS3OutputStorage;
}

export function mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_output_storage: mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageCosOutputStorageToTerraform(struct!.cosOutputStorage),
    s3_output_storage: mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageS3OutputStorageToTerraform(struct!.s3OutputStorage),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorage): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageCosOutputStorageToHclTerraform(struct!.cosOutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageCosOutputStorageList",
    },
    s3_output_storage: {
      value: mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageS3OutputStorageToHclTerraform(struct!.s3OutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageS3OutputStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorage | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorage | undefined) {
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
  private _cosOutputStorage = new MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageCosOutputStorageOutputReference(this, "cos_output_storage");
  public get cosOutputStorage() {
    return this._cosOutputStorage;
  }
  public putCosOutputStorage(value: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageCosOutputStorage) {
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
  private _s3OutputStorage = new MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageS3OutputStorageOutputReference(this, "s3_output_storage");
  public get s3OutputStorage() {
    return this._s3OutputStorage;
  }
  public putS3OutputStorage(value: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageS3OutputStorage) {
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
export interface MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfo {
  /**
  * The COS bucket of the object to process, such as `TopRankVideo-125xxx88`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#bucket MpsProcessMediaOperation#bucket}
  */
  readonly bucket: string;
  /**
  * The path of the object to process, such as `/movie/201907/WildAnimal.mov`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#object MpsProcessMediaOperation#object}
  */
  readonly object: string;
  /**
  * The region of the COS bucket, such as `ap-chongqing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#region MpsProcessMediaOperation#region}
  */
  readonly region: string;
}

export function mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfo): any {
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


export function mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfo): any {
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

export class MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfo | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfo | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfo {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_bucket MpsProcessMediaOperation#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The path of the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_object MpsProcessMediaOperation#s3_object}
  */
  readonly s3Object: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_region MpsProcessMediaOperation#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_id MpsProcessMediaOperation#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_key MpsProcessMediaOperation#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfo): any {
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


export function mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfo): any {
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

export class MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfo | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfo | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo {
  /**
  * URL of a video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#url MpsProcessMediaOperation#url}
  */
  readonly url: string;
}

export function mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo): any {
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

export class MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContent {
  /**
  * The input type. Valid values:`COS`: A COS bucket address. `URL`: A URL. `AWS-S3`: An AWS S3 bucket address. Currently, this type is only supported for transcoding tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#type MpsProcessMediaOperation#type}
  */
  readonly type: string;
  /**
  * cos_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#cos_input_info MpsProcessMediaOperation#cos_input_info}
  */
  readonly cosInputInfo?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfo;
  /**
  * s3_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_input_info MpsProcessMediaOperation#s3_input_info}
  */
  readonly s3InputInfo?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfo;
  /**
  * url_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#url_input_info MpsProcessMediaOperation#url_input_info}
  */
  readonly urlInputInfo?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo;
}

export function mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentOutputReference | MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_input_info: mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToTerraform(struct!.cosInputInfo),
    s3_input_info: mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToTerraform(struct!.s3InputInfo),
    url_input_info: mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToTerraform(struct!.urlInputInfo),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentOutputReference | MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContent): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToHclTerraform(struct!.cosInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoList",
    },
    s3_input_info: {
      value: mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToHclTerraform(struct!.s3InputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoList",
    },
    url_input_info: {
      value: mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToHclTerraform(struct!.urlInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContent | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContent | undefined) {
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
  private _cosInputInfo = new MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference(this, "cos_input_info");
  public get cosInputInfo() {
    return this._cosInputInfo;
  }
  public putCosInputInfo(value: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfo) {
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
  private _s3InputInfo = new MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference(this, "s3_input_info");
  public get s3InputInfo() {
    return this._s3InputInfo;
  }
  public putS3InputInfo(value: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfo) {
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
  private _urlInputInfo = new MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference(this, "url_input_info");
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
  public putUrlInputInfo(value: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo) {
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
export interface MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplate {
  /**
  * Watermark height. % and px formats are supported:If the string ends in %, the `Height` of the watermark will be the specified percentage of the video height; for example, `10%` means that `Height` is 10% of the video height;If the string ends in px, the `Height` of the watermark will be in px; for example, `100px` means that `Height` is 100 px.Default value: 0 px, which means that `Height` will be proportionally scaled according to the aspect ratio of the original watermark image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#height MpsProcessMediaOperation#height}
  */
  readonly height?: string;
  /**
  * Repeat type of an animated watermark. Valid values:`once`: no longer appears after watermark playback ends.`repeat_last_frame`: stays on the last frame after watermark playback ends.`repeat` (default): repeats the playback until the video ends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#repeat_type MpsProcessMediaOperation#repeat_type}
  */
  readonly repeatType?: string;
  /**
  * Watermark width. % and px formats are supported:If the string ends in %, the `Width` of the watermark will be the specified percentage of the video width; for example, `10%` means that `Width` is 10% of the video width;If the string ends in px, the `Width` of the watermark will be in px; for example, `100px` means that `Width` is 100 px.Default value: 10%.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#width MpsProcessMediaOperation#width}
  */
  readonly width?: string;
  /**
  * image_content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#image_content MpsProcessMediaOperation#image_content}
  */
  readonly imageContent: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContent;
}

export function mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateOutputReference | MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.stringToTerraform(struct!.height),
    repeat_type: cdktf.stringToTerraform(struct!.repeatType),
    width: cdktf.stringToTerraform(struct!.width),
    image_content: mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentToTerraform(struct!.imageContent),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateOutputReference | MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplate): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentToHclTerraform(struct!.imageContent),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplate | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplate | undefined) {
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
  private _imageContent = new MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContentOutputReference(this, "image_content");
  public get imageContent() {
    return this._imageContent;
  }
  public putImageContent(value: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateImageContent) {
    this._imageContent.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageContentInput() {
    return this._imageContent.internalValue;
  }
}
export interface MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameter {
  /**
  * Origin position, which currently can only be:TopLeft: the origin of coordinates is in the top-left corner of the video, and the origin of the watermark is in the top-left corner of the image or text.Default value: TopLeft.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#coordinate_origin MpsProcessMediaOperation#coordinate_origin}
  */
  readonly coordinateOrigin?: string;
  /**
  * Watermark type. Valid values:image: image watermark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#type MpsProcessMediaOperation#type}
  */
  readonly type: string;
  /**
  * The horizontal position of the origin of the watermark relative to the origin of coordinates of the video. % and px formats are supported:If the string ends in %, the `XPos` of the watermark will be the specified percentage of the video width; for example, `10%` means that `XPos` is 10% of the video width;If the string ends in px, the `XPos` of the watermark will be the specified px; for example, `100px` means that `XPos` is 100 px.Default value: 0 px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#x_pos MpsProcessMediaOperation#x_pos}
  */
  readonly xPos?: string;
  /**
  * The vertical position of the origin of the watermark relative to the origin of coordinates of the video. % and px formats are supported:If the string ends in %, the `YPos` of the watermark will be the specified percentage of the video height; for example, `10%` means that `YPos` is 10% of the video height;If the string ends in px, the `YPos` of the watermark will be the specified px; for example, `100px` means that `YPos` is 100 px.Default value: 0 px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#y_pos MpsProcessMediaOperation#y_pos}
  */
  readonly yPos?: string;
  /**
  * image_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#image_template MpsProcessMediaOperation#image_template}
  */
  readonly imageTemplate?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplate;
}

export function mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterOutputReference | MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    coordinate_origin: cdktf.stringToTerraform(struct!.coordinateOrigin),
    type: cdktf.stringToTerraform(struct!.type),
    x_pos: cdktf.stringToTerraform(struct!.xPos),
    y_pos: cdktf.stringToTerraform(struct!.yPos),
    image_template: mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateToTerraform(struct!.imageTemplate),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterOutputReference | MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameter): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateToHclTerraform(struct!.imageTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameter | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameter | undefined) {
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
  private _imageTemplate = new MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplateOutputReference(this, "image_template");
  public get imageTemplate() {
    return this._imageTemplate;
  }
  public putImageTemplate(value: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterImageTemplate) {
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
export interface MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSet {
  /**
  * ID of a watermarking template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#definition MpsProcessMediaOperation#definition}
  */
  readonly definition: number;
  /**
  * End time offset of a watermark in seconds.If this parameter is left empty or 0 is entered, the watermark will exist till the last video frame;If this value is greater than 0 (e.g., n), the watermark will exist till second n;If this value is smaller than 0 (e.g., -n), the watermark will exist till second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#end_time_offset MpsProcessMediaOperation#end_time_offset}
  */
  readonly endTimeOffset?: number;
  /**
  * Start time offset of a watermark in seconds. If this parameter is left empty or 0 is entered, the watermark will appear upon the first video frame.If this parameter is left empty or 0 is entered, the watermark will appear upon the first video frame;If this value is greater than 0 (e.g., n), the watermark will appear at second n after the first video frame;If this value is smaller than 0 (e.g., -n), the watermark will appear at second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#start_time_offset MpsProcessMediaOperation#start_time_offset}
  */
  readonly startTimeOffset?: number;
  /**
  * SVG content of up to 2,000,000 characters. This field is required only when the watermark type is `SVG`.SVG watermark is not available for screenshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#svg_content MpsProcessMediaOperation#svg_content}
  */
  readonly svgContent?: string;
  /**
  * Text content of up to 100 characters. This field is required only when the watermark type is text.Text watermark is not available for screenshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#text_content MpsProcessMediaOperation#text_content}
  */
  readonly textContent?: string;
  /**
  * raw_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#raw_parameter MpsProcessMediaOperation#raw_parameter}
  */
  readonly rawParameter?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameter;
}

export function mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSet | cdktf.IResolvable): any {
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
    raw_parameter: mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterToTerraform(struct!.rawParameter),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSet | cdktf.IResolvable): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterToHclTerraform(struct!.rawParameter),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSet | cdktf.IResolvable | undefined) {
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
  private _rawParameter = new MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameterOutputReference(this, "raw_parameter");
  public get rawParameter() {
    return this._rawParameter;
  }
  public putRawParameter(value: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetRawParameter) {
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

export class MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetList extends cdktf.ComplexList {
  public internalValue? : MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSet[] | cdktf.IResolvable

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
  public get(index: number): MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetOutputReference {
    return new MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSet {
  /**
  * Sampled screencapturing template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#definition MpsProcessMediaOperation#definition}
  */
  readonly definition: number;
  /**
  * Output path to a generated sampled screenshot, which can be a relative path or an absolute path. If this parameter is left empty, the following relative path will be used by default: `{inputName}_sampleSnapshot_{definition}_{number}.{format}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#output_object_path MpsProcessMediaOperation#output_object_path}
  */
  readonly outputObjectPath?: string;
  /**
  * object_number_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#object_number_format MpsProcessMediaOperation#object_number_format}
  */
  readonly objectNumberFormat?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetObjectNumberFormat;
  /**
  * output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#output_storage MpsProcessMediaOperation#output_storage}
  */
  readonly outputStorage?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorage;
  /**
  * watermark_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#watermark_set MpsProcessMediaOperation#watermark_set}
  */
  readonly watermarkSet?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSet[] | cdktf.IResolvable;
}

export function mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.numberToTerraform(struct!.definition),
    output_object_path: cdktf.stringToTerraform(struct!.outputObjectPath),
    object_number_format: mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetObjectNumberFormatToTerraform(struct!.objectNumberFormat),
    output_storage: mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageToTerraform(struct!.outputStorage),
    watermark_set: cdktf.listMapper(mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetToTerraform, true)(struct!.watermarkSet),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSet | cdktf.IResolvable): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetObjectNumberFormatToHclTerraform(struct!.objectNumberFormat),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetObjectNumberFormatList",
    },
    output_storage: {
      value: mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageToHclTerraform(struct!.outputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageList",
    },
    watermark_set: {
      value: cdktf.listMapperHcl(mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetToHclTerraform, true)(struct!.watermarkSet),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._outputObjectPath = undefined;
      this._objectNumberFormat.internalValue = undefined;
      this._outputStorage.internalValue = undefined;
      this._watermarkSet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _objectNumberFormat = new MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetObjectNumberFormatOutputReference(this, "object_number_format");
  public get objectNumberFormat() {
    return this._objectNumberFormat;
  }
  public putObjectNumberFormat(value: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetObjectNumberFormat) {
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
  private _outputStorage = new MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorageOutputReference(this, "output_storage");
  public get outputStorage() {
    return this._outputStorage;
  }
  public putOutputStorage(value: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputStorage) {
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
  private _watermarkSet = new MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSetList(this, "watermark_set", false);
  public get watermarkSet() {
    return this._watermarkSet;
  }
  public putWatermarkSet(value: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetWatermarkSet[] | cdktf.IResolvable) {
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

export class MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetList extends cdktf.ComplexList {
  public internalValue? : MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSet[] | cdktf.IResolvable

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
  public get(index: number): MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputReference {
    return new MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetObjectNumberFormat {
  /**
  * Increment of the `{number}` variable. Default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#increment MpsProcessMediaOperation#increment}
  */
  readonly increment?: number;
  /**
  * Start value of the `{number}` variable. Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#initial_value MpsProcessMediaOperation#initial_value}
  */
  readonly initialValue?: number;
  /**
  * Minimum length of the `{number}` variable. A placeholder will be used if the variable length is below the minimum requirement. Default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#min_length MpsProcessMediaOperation#min_length}
  */
  readonly minLength?: number;
  /**
  * Placeholder used when the `{number}` variable length is below the minimum requirement. Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#place_holder MpsProcessMediaOperation#place_holder}
  */
  readonly placeHolder?: string;
}

export function mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetObjectNumberFormatToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetObjectNumberFormatOutputReference | MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetObjectNumberFormat): any {
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


export function mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetObjectNumberFormatToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetObjectNumberFormatOutputReference | MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetObjectNumberFormat): any {
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

export class MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetObjectNumberFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetObjectNumberFormat | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetObjectNumberFormat | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageCosOutputStorage {
  /**
  * The bucket to which the output file of media processing is saved, such as `TopRankVideo-125xxx88`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#bucket MpsProcessMediaOperation#bucket}
  */
  readonly bucket?: string;
  /**
  * The region of the output bucket, such as `ap-chongqing`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#region MpsProcessMediaOperation#region}
  */
  readonly region?: string;
}

export function mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageCosOutputStorageToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageCosOutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageCosOutputStorageToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageCosOutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageCosOutputStorage): any {
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

export class MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageCosOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageCosOutputStorage | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageCosOutputStorage | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageS3OutputStorage {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_bucket MpsProcessMediaOperation#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_region MpsProcessMediaOperation#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_id MpsProcessMediaOperation#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_key MpsProcessMediaOperation#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageS3OutputStorageToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageS3OutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageS3OutputStorage): any {
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


export function mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageS3OutputStorageToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageS3OutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageS3OutputStorage): any {
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

export class MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageS3OutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageS3OutputStorage | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageS3OutputStorage | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorage {
  /**
  * The storage type for a media processing output file. Valid values:`COS`: Tencent Cloud COS`&gt;AWS-S3`: AWS S3. This type is only supported for AWS tasks, and the output bucket must be in the same region as the bucket of the source file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#type MpsProcessMediaOperation#type}
  */
  readonly type: string;
  /**
  * cos_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#cos_output_storage MpsProcessMediaOperation#cos_output_storage}
  */
  readonly cosOutputStorage?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageCosOutputStorage;
  /**
  * s3_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_output_storage MpsProcessMediaOperation#s3_output_storage}
  */
  readonly s3OutputStorage?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageS3OutputStorage;
}

export function mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_output_storage: mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageCosOutputStorageToTerraform(struct!.cosOutputStorage),
    s3_output_storage: mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageS3OutputStorageToTerraform(struct!.s3OutputStorage),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorage): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageCosOutputStorageToHclTerraform(struct!.cosOutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageCosOutputStorageList",
    },
    s3_output_storage: {
      value: mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageS3OutputStorageToHclTerraform(struct!.s3OutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageS3OutputStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorage | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorage | undefined) {
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
  private _cosOutputStorage = new MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageCosOutputStorageOutputReference(this, "cos_output_storage");
  public get cosOutputStorage() {
    return this._cosOutputStorage;
  }
  public putCosOutputStorage(value: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageCosOutputStorage) {
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
  private _s3OutputStorage = new MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageS3OutputStorageOutputReference(this, "s3_output_storage");
  public get s3OutputStorage() {
    return this._s3OutputStorage;
  }
  public putS3OutputStorage(value: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageS3OutputStorage) {
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
export interface MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfo {
  /**
  * The COS bucket of the object to process, such as `TopRankVideo-125xxx88`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#bucket MpsProcessMediaOperation#bucket}
  */
  readonly bucket: string;
  /**
  * The path of the object to process, such as `/movie/201907/WildAnimal.mov`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#object MpsProcessMediaOperation#object}
  */
  readonly object: string;
  /**
  * The region of the COS bucket, such as `ap-chongqing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#region MpsProcessMediaOperation#region}
  */
  readonly region: string;
}

export function mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfo): any {
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


export function mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfo): any {
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

export class MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfo | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfo | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfo {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_bucket MpsProcessMediaOperation#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The path of the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_object MpsProcessMediaOperation#s3_object}
  */
  readonly s3Object: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_region MpsProcessMediaOperation#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_id MpsProcessMediaOperation#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_key MpsProcessMediaOperation#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfo): any {
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


export function mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfo): any {
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

export class MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfo | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfo | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo {
  /**
  * URL of a video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#url MpsProcessMediaOperation#url}
  */
  readonly url: string;
}

export function mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo): any {
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

export class MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContent {
  /**
  * The input type. Valid values:`COS`: A COS bucket address. `URL`: A URL. `AWS-S3`: An AWS S3 bucket address. Currently, this type is only supported for transcoding tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#type MpsProcessMediaOperation#type}
  */
  readonly type: string;
  /**
  * cos_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#cos_input_info MpsProcessMediaOperation#cos_input_info}
  */
  readonly cosInputInfo?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfo;
  /**
  * s3_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_input_info MpsProcessMediaOperation#s3_input_info}
  */
  readonly s3InputInfo?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfo;
  /**
  * url_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#url_input_info MpsProcessMediaOperation#url_input_info}
  */
  readonly urlInputInfo?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo;
}

export function mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentOutputReference | MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_input_info: mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToTerraform(struct!.cosInputInfo),
    s3_input_info: mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToTerraform(struct!.s3InputInfo),
    url_input_info: mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToTerraform(struct!.urlInputInfo),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentOutputReference | MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContent): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToHclTerraform(struct!.cosInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoList",
    },
    s3_input_info: {
      value: mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToHclTerraform(struct!.s3InputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoList",
    },
    url_input_info: {
      value: mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToHclTerraform(struct!.urlInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContent | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContent | undefined) {
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
  private _cosInputInfo = new MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference(this, "cos_input_info");
  public get cosInputInfo() {
    return this._cosInputInfo;
  }
  public putCosInputInfo(value: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfo) {
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
  private _s3InputInfo = new MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference(this, "s3_input_info");
  public get s3InputInfo() {
    return this._s3InputInfo;
  }
  public putS3InputInfo(value: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfo) {
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
  private _urlInputInfo = new MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference(this, "url_input_info");
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
  public putUrlInputInfo(value: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo) {
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
export interface MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplate {
  /**
  * Watermark height. % and px formats are supported:If the string ends in %, the `Height` of the watermark will be the specified percentage of the video height; for example, `10%` means that `Height` is 10% of the video height;If the string ends in px, the `Height` of the watermark will be in px; for example, `100px` means that `Height` is 100 px.Default value: 0 px, which means that `Height` will be proportionally scaled according to the aspect ratio of the original watermark image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#height MpsProcessMediaOperation#height}
  */
  readonly height?: string;
  /**
  * Repeat type of an animated watermark. Valid values:`once`: no longer appears after watermark playback ends.`repeat_last_frame`: stays on the last frame after watermark playback ends.`repeat` (default): repeats the playback until the video ends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#repeat_type MpsProcessMediaOperation#repeat_type}
  */
  readonly repeatType?: string;
  /**
  * Watermark width. % and px formats are supported:If the string ends in %, the `Width` of the watermark will be the specified percentage of the video width; for example, `10%` means that `Width` is 10% of the video width;If the string ends in px, the `Width` of the watermark will be in px; for example, `100px` means that `Width` is 100 px.Default value: 10%.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#width MpsProcessMediaOperation#width}
  */
  readonly width?: string;
  /**
  * image_content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#image_content MpsProcessMediaOperation#image_content}
  */
  readonly imageContent: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContent;
}

export function mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateOutputReference | MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.stringToTerraform(struct!.height),
    repeat_type: cdktf.stringToTerraform(struct!.repeatType),
    width: cdktf.stringToTerraform(struct!.width),
    image_content: mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentToTerraform(struct!.imageContent),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateOutputReference | MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplate): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentToHclTerraform(struct!.imageContent),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplate | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplate | undefined) {
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
  private _imageContent = new MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContentOutputReference(this, "image_content");
  public get imageContent() {
    return this._imageContent;
  }
  public putImageContent(value: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateImageContent) {
    this._imageContent.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageContentInput() {
    return this._imageContent.internalValue;
  }
}
export interface MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameter {
  /**
  * Origin position, which currently can only be:TopLeft: the origin of coordinates is in the top-left corner of the video, and the origin of the watermark is in the top-left corner of the image or text.Default value: TopLeft.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#coordinate_origin MpsProcessMediaOperation#coordinate_origin}
  */
  readonly coordinateOrigin?: string;
  /**
  * Watermark type. Valid values:image: image watermark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#type MpsProcessMediaOperation#type}
  */
  readonly type: string;
  /**
  * The horizontal position of the origin of the watermark relative to the origin of coordinates of the video. % and px formats are supported:If the string ends in %, the `XPos` of the watermark will be the specified percentage of the video width; for example, `10%` means that `XPos` is 10% of the video width;If the string ends in px, the `XPos` of the watermark will be the specified px; for example, `100px` means that `XPos` is 100 px.Default value: 0 px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#x_pos MpsProcessMediaOperation#x_pos}
  */
  readonly xPos?: string;
  /**
  * The vertical position of the origin of the watermark relative to the origin of coordinates of the video. % and px formats are supported:If the string ends in %, the `YPos` of the watermark will be the specified percentage of the video height; for example, `10%` means that `YPos` is 10% of the video height;If the string ends in px, the `YPos` of the watermark will be the specified px; for example, `100px` means that `YPos` is 100 px.Default value: 0 px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#y_pos MpsProcessMediaOperation#y_pos}
  */
  readonly yPos?: string;
  /**
  * image_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#image_template MpsProcessMediaOperation#image_template}
  */
  readonly imageTemplate?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplate;
}

export function mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterOutputReference | MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    coordinate_origin: cdktf.stringToTerraform(struct!.coordinateOrigin),
    type: cdktf.stringToTerraform(struct!.type),
    x_pos: cdktf.stringToTerraform(struct!.xPos),
    y_pos: cdktf.stringToTerraform(struct!.yPos),
    image_template: mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateToTerraform(struct!.imageTemplate),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterOutputReference | MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameter): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateToHclTerraform(struct!.imageTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameter | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameter | undefined) {
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
  private _imageTemplate = new MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplateOutputReference(this, "image_template");
  public get imageTemplate() {
    return this._imageTemplate;
  }
  public putImageTemplate(value: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterImageTemplate) {
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
export interface MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSet {
  /**
  * ID of a watermarking template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#definition MpsProcessMediaOperation#definition}
  */
  readonly definition: number;
  /**
  * End time offset of a watermark in seconds.If this parameter is left empty or 0 is entered, the watermark will exist till the last video frame;If this value is greater than 0 (e.g., n), the watermark will exist till second n;If this value is smaller than 0 (e.g., -n), the watermark will exist till second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#end_time_offset MpsProcessMediaOperation#end_time_offset}
  */
  readonly endTimeOffset?: number;
  /**
  * Start time offset of a watermark in seconds. If this parameter is left empty or 0 is entered, the watermark will appear upon the first video frame.If this parameter is left empty or 0 is entered, the watermark will appear upon the first video frame;If this value is greater than 0 (e.g., n), the watermark will appear at second n after the first video frame;If this value is smaller than 0 (e.g., -n), the watermark will appear at second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#start_time_offset MpsProcessMediaOperation#start_time_offset}
  */
  readonly startTimeOffset?: number;
  /**
  * SVG content of up to 2,000,000 characters. This field is required only when the watermark type is `SVG`.SVG watermark is not available for screenshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#svg_content MpsProcessMediaOperation#svg_content}
  */
  readonly svgContent?: string;
  /**
  * Text content of up to 100 characters. This field is required only when the watermark type is text.Text watermark is not available for screenshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#text_content MpsProcessMediaOperation#text_content}
  */
  readonly textContent?: string;
  /**
  * raw_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#raw_parameter MpsProcessMediaOperation#raw_parameter}
  */
  readonly rawParameter?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameter;
}

export function mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSet | cdktf.IResolvable): any {
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
    raw_parameter: mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterToTerraform(struct!.rawParameter),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSet | cdktf.IResolvable): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterToHclTerraform(struct!.rawParameter),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSet | cdktf.IResolvable | undefined) {
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
  private _rawParameter = new MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameterOutputReference(this, "raw_parameter");
  public get rawParameter() {
    return this._rawParameter;
  }
  public putRawParameter(value: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetRawParameter) {
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

export class MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetList extends cdktf.ComplexList {
  public internalValue? : MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSet[] | cdktf.IResolvable

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
  public get(index: number): MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetOutputReference {
    return new MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSet {
  /**
  * ID of a time point screencapturing template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#definition MpsProcessMediaOperation#definition}
  */
  readonly definition: number;
  /**
  * List of screenshot time points in the format of `s` or `%`:If the string ends in `s`, it means that the time point is in seconds; for example, `3.5s` means that the time point is the 3.5th second;If the string ends in `%`, it means that the time point is the specified percentage of the video duration; for example, `10%` means that the time point is 10% of the video duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#ext_time_offset_set MpsProcessMediaOperation#ext_time_offset_set}
  */
  readonly extTimeOffsetSet?: string[];
  /**
  * Output path to a generated time point screenshot, which can be a relative path or an absolute path. If this parameter is left empty, the following relative path will be used by default: `{inputName}_snapshotByTimeOffset_{definition}_{number}.{format}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#output_object_path MpsProcessMediaOperation#output_object_path}
  */
  readonly outputObjectPath?: string;
  /**
  * List of time points of screenshots in &lt;font color=red&gt;seconds&lt;/font&gt;.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#time_offset_set MpsProcessMediaOperation#time_offset_set}
  */
  readonly timeOffsetSet?: number[];
  /**
  * object_number_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#object_number_format MpsProcessMediaOperation#object_number_format}
  */
  readonly objectNumberFormat?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetObjectNumberFormat;
  /**
  * output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#output_storage MpsProcessMediaOperation#output_storage}
  */
  readonly outputStorage?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorage;
  /**
  * watermark_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#watermark_set MpsProcessMediaOperation#watermark_set}
  */
  readonly watermarkSet?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSet[] | cdktf.IResolvable;
}

export function mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.numberToTerraform(struct!.definition),
    ext_time_offset_set: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extTimeOffsetSet),
    output_object_path: cdktf.stringToTerraform(struct!.outputObjectPath),
    time_offset_set: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.timeOffsetSet),
    object_number_format: mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetObjectNumberFormatToTerraform(struct!.objectNumberFormat),
    output_storage: mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageToTerraform(struct!.outputStorage),
    watermark_set: cdktf.listMapper(mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetToTerraform, true)(struct!.watermarkSet),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSet | cdktf.IResolvable): any {
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
    time_offset_set: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.timeOffsetSet),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    object_number_format: {
      value: mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetObjectNumberFormatToHclTerraform(struct!.objectNumberFormat),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetObjectNumberFormatList",
    },
    output_storage: {
      value: mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageToHclTerraform(struct!.outputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageList",
    },
    watermark_set: {
      value: cdktf.listMapperHcl(mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetToHclTerraform, true)(struct!.watermarkSet),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._timeOffsetSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOffsetSet = this._timeOffsetSet;
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._extTimeOffsetSet = undefined;
      this._outputObjectPath = undefined;
      this._timeOffsetSet = undefined;
      this._objectNumberFormat.internalValue = undefined;
      this._outputStorage.internalValue = undefined;
      this._watermarkSet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._extTimeOffsetSet = value.extTimeOffsetSet;
      this._outputObjectPath = value.outputObjectPath;
      this._timeOffsetSet = value.timeOffsetSet;
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

  // time_offset_set - computed: false, optional: true, required: false
  private _timeOffsetSet?: number[]; 
  public get timeOffsetSet() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('time_offset_set')));
  }
  public set timeOffsetSet(value: number[]) {
    this._timeOffsetSet = value;
  }
  public resetTimeOffsetSet() {
    this._timeOffsetSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOffsetSetInput() {
    return this._timeOffsetSet;
  }

  // object_number_format - computed: false, optional: true, required: false
  private _objectNumberFormat = new MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetObjectNumberFormatOutputReference(this, "object_number_format");
  public get objectNumberFormat() {
    return this._objectNumberFormat;
  }
  public putObjectNumberFormat(value: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetObjectNumberFormat) {
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
  private _outputStorage = new MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorageOutputReference(this, "output_storage");
  public get outputStorage() {
    return this._outputStorage;
  }
  public putOutputStorage(value: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputStorage) {
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
  private _watermarkSet = new MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSetList(this, "watermark_set", false);
  public get watermarkSet() {
    return this._watermarkSet;
  }
  public putWatermarkSet(value: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetWatermarkSet[] | cdktf.IResolvable) {
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

export class MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetList extends cdktf.ComplexList {
  public internalValue? : MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSet[] | cdktf.IResolvable

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
  public get(index: number): MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputReference {
    return new MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetCosInputInfo {
  /**
  * The COS bucket of the object to process, such as `TopRankVideo-125xxx88`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#bucket MpsProcessMediaOperation#bucket}
  */
  readonly bucket: string;
  /**
  * The path of the object to process, such as `/movie/201907/WildAnimal.mov`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#object MpsProcessMediaOperation#object}
  */
  readonly object: string;
  /**
  * The region of the COS bucket, such as `ap-chongqing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#region MpsProcessMediaOperation#region}
  */
  readonly region: string;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetCosInputInfoToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetCosInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetCosInputInfo): any {
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


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetCosInputInfoToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetCosInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetCosInputInfo): any {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetCosInputInfo | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetCosInputInfo | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetS3InputInfo {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_bucket MpsProcessMediaOperation#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The path of the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_object MpsProcessMediaOperation#s3_object}
  */
  readonly s3Object: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_region MpsProcessMediaOperation#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_id MpsProcessMediaOperation#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_key MpsProcessMediaOperation#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetS3InputInfoToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetS3InputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetS3InputInfo): any {
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


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetS3InputInfoToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetS3InputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetS3InputInfo): any {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetS3InputInfo | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetS3InputInfo | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetUrlInputInfo {
  /**
  * URL of a video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#url MpsProcessMediaOperation#url}
  */
  readonly url: string;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetUrlInputInfoToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetUrlInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetUrlInputInfoToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetUrlInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetUrlInputInfo): any {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetUrlInputInfo | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSet {
  /**
  * The input type. Valid values:`COS`: A COS bucket address. `URL`: A URL. `AWS-S3`: An AWS S3 bucket address. Currently, this type is only supported for transcoding tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#type MpsProcessMediaOperation#type}
  */
  readonly type: string;
  /**
  * cos_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#cos_input_info MpsProcessMediaOperation#cos_input_info}
  */
  readonly cosInputInfo?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetCosInputInfo;
  /**
  * s3_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_input_info MpsProcessMediaOperation#s3_input_info}
  */
  readonly s3InputInfo?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetS3InputInfo;
  /**
  * url_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#url_input_info MpsProcessMediaOperation#url_input_info}
  */
  readonly urlInputInfo?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetUrlInputInfo;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_input_info: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetCosInputInfoToTerraform(struct!.cosInputInfo),
    s3_input_info: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetS3InputInfoToTerraform(struct!.s3InputInfo),
    url_input_info: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetUrlInputInfoToTerraform(struct!.urlInputInfo),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSet | cdktf.IResolvable): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetCosInputInfoToHclTerraform(struct!.cosInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetCosInputInfoList",
    },
    s3_input_info: {
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetS3InputInfoToHclTerraform(struct!.s3InputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetS3InputInfoList",
    },
    url_input_info: {
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetUrlInputInfoToHclTerraform(struct!.urlInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetUrlInputInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSet | cdktf.IResolvable | undefined) {
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
  private _cosInputInfo = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetCosInputInfoOutputReference(this, "cos_input_info");
  public get cosInputInfo() {
    return this._cosInputInfo;
  }
  public putCosInputInfo(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetCosInputInfo) {
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
  private _s3InputInfo = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetS3InputInfoOutputReference(this, "s3_input_info");
  public get s3InputInfo() {
    return this._s3InputInfo;
  }
  public putS3InputInfo(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetS3InputInfo) {
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
  private _urlInputInfo = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetUrlInputInfoOutputReference(this, "url_input_info");
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
  public putUrlInputInfo(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetUrlInputInfo) {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetList extends cdktf.ComplexList {
  public internalValue? : MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSet[] | cdktf.IResolvable

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
  public get(index: number): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetOutputReference {
    return new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetCosInputInfo {
  /**
  * The COS bucket of the object to process, such as `TopRankVideo-125xxx88`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#bucket MpsProcessMediaOperation#bucket}
  */
  readonly bucket: string;
  /**
  * The path of the object to process, such as `/movie/201907/WildAnimal.mov`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#object MpsProcessMediaOperation#object}
  */
  readonly object: string;
  /**
  * The region of the COS bucket, such as `ap-chongqing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#region MpsProcessMediaOperation#region}
  */
  readonly region: string;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetCosInputInfoToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetCosInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetCosInputInfo): any {
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


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetCosInputInfoToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetCosInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetCosInputInfo): any {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetCosInputInfo | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetCosInputInfo | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetS3InputInfo {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_bucket MpsProcessMediaOperation#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The path of the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_object MpsProcessMediaOperation#s3_object}
  */
  readonly s3Object: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_region MpsProcessMediaOperation#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_id MpsProcessMediaOperation#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_key MpsProcessMediaOperation#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetS3InputInfoToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetS3InputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetS3InputInfo): any {
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


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetS3InputInfoToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetS3InputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetS3InputInfo): any {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetS3InputInfo | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetS3InputInfo | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetUrlInputInfo {
  /**
  * URL of a video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#url MpsProcessMediaOperation#url}
  */
  readonly url: string;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetUrlInputInfoToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetUrlInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetUrlInputInfoToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetUrlInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetUrlInputInfo): any {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetUrlInputInfo | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSet {
  /**
  * The input type. Valid values:`COS`: A COS bucket address. `URL`: A URL. `AWS-S3`: An AWS S3 bucket address. Currently, this type is only supported for transcoding tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#type MpsProcessMediaOperation#type}
  */
  readonly type: string;
  /**
  * cos_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#cos_input_info MpsProcessMediaOperation#cos_input_info}
  */
  readonly cosInputInfo?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetCosInputInfo;
  /**
  * s3_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_input_info MpsProcessMediaOperation#s3_input_info}
  */
  readonly s3InputInfo?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetS3InputInfo;
  /**
  * url_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#url_input_info MpsProcessMediaOperation#url_input_info}
  */
  readonly urlInputInfo?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetUrlInputInfo;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_input_info: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetCosInputInfoToTerraform(struct!.cosInputInfo),
    s3_input_info: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetS3InputInfoToTerraform(struct!.s3InputInfo),
    url_input_info: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetUrlInputInfoToTerraform(struct!.urlInputInfo),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSet | cdktf.IResolvable): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetCosInputInfoToHclTerraform(struct!.cosInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetCosInputInfoList",
    },
    s3_input_info: {
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetS3InputInfoToHclTerraform(struct!.s3InputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetS3InputInfoList",
    },
    url_input_info: {
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetUrlInputInfoToHclTerraform(struct!.urlInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetUrlInputInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSet | cdktf.IResolvable | undefined) {
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
  private _cosInputInfo = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetCosInputInfoOutputReference(this, "cos_input_info");
  public get cosInputInfo() {
    return this._cosInputInfo;
  }
  public putCosInputInfo(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetCosInputInfo) {
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
  private _s3InputInfo = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetS3InputInfoOutputReference(this, "s3_input_info");
  public get s3InputInfo() {
    return this._s3InputInfo;
  }
  public putS3InputInfo(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetS3InputInfo) {
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
  private _urlInputInfo = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetUrlInputInfoOutputReference(this, "url_input_info");
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
  public putUrlInputInfo(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetUrlInputInfo) {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetList extends cdktf.ComplexList {
  public internalValue? : MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSet[] | cdktf.IResolvable

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
  public get(index: number): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetOutputReference {
    return new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameter {
  /**
  * head_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#head_set MpsProcessMediaOperation#head_set}
  */
  readonly headSet?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSet[] | cdktf.IResolvable;
  /**
  * tail_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#tail_set MpsProcessMediaOperation#tail_set}
  */
  readonly tailSet?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSet[] | cdktf.IResolvable;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    head_set: cdktf.listMapper(mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetToTerraform, true)(struct!.headSet),
    tail_set: cdktf.listMapper(mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetToTerraform, true)(struct!.tailSet),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    head_set: {
      value: cdktf.listMapperHcl(mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetToHclTerraform, true)(struct!.headSet),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetList",
    },
    tail_set: {
      value: cdktf.listMapperHcl(mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetToHclTerraform, true)(struct!.tailSet),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameter | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameter | undefined) {
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
  private _headSet = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSetList(this, "head_set", false);
  public get headSet() {
    return this._headSet;
  }
  public putHeadSet(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterHeadSet[] | cdktf.IResolvable) {
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
  private _tailSet = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSetList(this, "tail_set", false);
  public get tailSet() {
    return this._tailSet;
  }
  public putTailSet(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterTailSet[] | cdktf.IResolvable) {
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetMosaicSet {
  /**
  * Origin position, which currently can only be:TopLeft: the origin of coordinates is in the top-left corner of the video, and the origin of the blur is in the top-left corner of the image or text.Default value: TopLeft.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#coordinate_origin MpsProcessMediaOperation#coordinate_origin}
  */
  readonly coordinateOrigin?: string;
  /**
  * End time offset of blur in seconds.If this parameter is left empty or 0 is entered, the blur will exist till the last video frame;If this value is greater than 0 (e.g., n), the blur will exist till second n;If this value is smaller than 0 (e.g., -n), the blur will exist till second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#end_time_offset MpsProcessMediaOperation#end_time_offset}
  */
  readonly endTimeOffset?: number;
  /**
  * Blur height. % and px formats are supported:If the string ends in %, the `Height` of the blur will be the specified percentage of the video height; for example, `10%` means that `Height` is 10% of the video height;If the string ends in px, the `Height` of the blur will be in px; for example, `100px` means that `Height` is 100 px.Default value: 10%.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#height MpsProcessMediaOperation#height}
  */
  readonly height?: string;
  /**
  * Start time offset of blur in seconds. If this parameter is left empty or 0 is entered, the blur will appear upon the first video frame.If this parameter is left empty or 0 is entered, the blur will appear upon the first video frame;If this value is greater than 0 (e.g., n), the blur will appear at second n after the first video frame;If this value is smaller than 0 (e.g., -n), the blur will appear at second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#start_time_offset MpsProcessMediaOperation#start_time_offset}
  */
  readonly startTimeOffset?: number;
  /**
  * Blur width. % and px formats are supported:If the string ends in %, the `Width` of the blur will be the specified percentage of the video width; for example, `10%` means that `Width` is 10% of the video width;If the string ends in px, the `Width` of the blur will be in px; for example, `100px` means that `Width` is 100 px.Default value: 10%.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#width MpsProcessMediaOperation#width}
  */
  readonly width?: string;
  /**
  * The horizontal position of the origin of the blur relative to the origin of coordinates of the video. % and px formats are supported:If the string ends in %, the `XPos` of the blur will be the specified percentage of the video width; for example, `10%` means that `XPos` is 10% of the video width;If the string ends in px, the `XPos` of the blur will be the specified px; for example, `100px` means that `XPos` is 100 px.Default value: 0 px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#x_pos MpsProcessMediaOperation#x_pos}
  */
  readonly xPos?: string;
  /**
  * Vertical position of the origin of blur relative to the origin of coordinates of video. % and px formats are supported:If the string ends in %, the `YPos` of the blur will be the specified percentage of the video height; for example, `10%` means that `YPos` is 10% of the video height;If the string ends in px, the `YPos` of the blur will be the specified px; for example, `100px` means that `YPos` is 100 px.Default value: 0 px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#y_pos MpsProcessMediaOperation#y_pos}
  */
  readonly yPos?: string;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetMosaicSetToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetMosaicSet | cdktf.IResolvable): any {
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


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetMosaicSetToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetMosaicSet | cdktf.IResolvable): any {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetMosaicSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetMosaicSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetMosaicSet | cdktf.IResolvable | undefined) {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetMosaicSetList extends cdktf.ComplexList {
  public internalValue? : MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetMosaicSet[] | cdktf.IResolvable

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
  public get(index: number): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetMosaicSetOutputReference {
    return new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetMosaicSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetObjectNumberFormat {
  /**
  * Increment of the `{number}` variable. Default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#increment MpsProcessMediaOperation#increment}
  */
  readonly increment?: number;
  /**
  * Start value of the `{number}` variable. Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#initial_value MpsProcessMediaOperation#initial_value}
  */
  readonly initialValue?: number;
  /**
  * Minimum length of the `{number}` variable. A placeholder will be used if the variable length is below the minimum requirement. Default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#min_length MpsProcessMediaOperation#min_length}
  */
  readonly minLength?: number;
  /**
  * Placeholder used when the `{number}` variable length is below the minimum requirement. Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#place_holder MpsProcessMediaOperation#place_holder}
  */
  readonly placeHolder?: string;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetObjectNumberFormatToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetObjectNumberFormatOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetObjectNumberFormat): any {
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


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetObjectNumberFormatToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetObjectNumberFormatOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetObjectNumberFormat): any {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetObjectNumberFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetObjectNumberFormat | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetObjectNumberFormat | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageCosOutputStorage {
  /**
  * The bucket to which the output file of media processing is saved, such as `TopRankVideo-125xxx88`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#bucket MpsProcessMediaOperation#bucket}
  */
  readonly bucket?: string;
  /**
  * The region of the output bucket, such as `ap-chongqing`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#region MpsProcessMediaOperation#region}
  */
  readonly region?: string;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageCosOutputStorageToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageCosOutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageCosOutputStorageToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageCosOutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageCosOutputStorage): any {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageCosOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageCosOutputStorage | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageCosOutputStorage | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageS3OutputStorage {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_bucket MpsProcessMediaOperation#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_region MpsProcessMediaOperation#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_id MpsProcessMediaOperation#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_key MpsProcessMediaOperation#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageS3OutputStorageToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageS3OutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageS3OutputStorage): any {
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


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageS3OutputStorageToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageS3OutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageS3OutputStorage): any {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageS3OutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageS3OutputStorage | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageS3OutputStorage | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorage {
  /**
  * The storage type for a media processing output file. Valid values:`COS`: Tencent Cloud COS`&gt;AWS-S3`: AWS S3. This type is only supported for AWS tasks, and the output bucket must be in the same region as the bucket of the source file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#type MpsProcessMediaOperation#type}
  */
  readonly type: string;
  /**
  * cos_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#cos_output_storage MpsProcessMediaOperation#cos_output_storage}
  */
  readonly cosOutputStorage?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageCosOutputStorage;
  /**
  * s3_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_output_storage MpsProcessMediaOperation#s3_output_storage}
  */
  readonly s3OutputStorage?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageS3OutputStorage;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_output_storage: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageCosOutputStorageToTerraform(struct!.cosOutputStorage),
    s3_output_storage: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageS3OutputStorageToTerraform(struct!.s3OutputStorage),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorage): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageCosOutputStorageToHclTerraform(struct!.cosOutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageCosOutputStorageList",
    },
    s3_output_storage: {
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageS3OutputStorageToHclTerraform(struct!.s3OutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageS3OutputStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorage | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorage | undefined) {
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
  private _cosOutputStorage = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageCosOutputStorageOutputReference(this, "cos_output_storage");
  public get cosOutputStorage() {
    return this._cosOutputStorage;
  }
  public putCosOutputStorage(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageCosOutputStorage) {
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
  private _s3OutputStorage = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageS3OutputStorageOutputReference(this, "s3_output_storage");
  public get s3OutputStorage() {
    return this._s3OutputStorage;
  }
  public putS3OutputStorage(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageS3OutputStorage) {
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleCosInputInfo {
  /**
  * The COS bucket of the object to process, such as `TopRankVideo-125xxx88`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#bucket MpsProcessMediaOperation#bucket}
  */
  readonly bucket: string;
  /**
  * The path of the object to process, such as `/movie/201907/WildAnimal.mov`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#object MpsProcessMediaOperation#object}
  */
  readonly object: string;
  /**
  * The region of the COS bucket, such as `ap-chongqing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#region MpsProcessMediaOperation#region}
  */
  readonly region: string;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleCosInputInfoToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleCosInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleCosInputInfo): any {
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


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleCosInputInfoToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleCosInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleCosInputInfo): any {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleCosInputInfo | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleCosInputInfo | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleS3InputInfo {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_bucket MpsProcessMediaOperation#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The path of the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_object MpsProcessMediaOperation#s3_object}
  */
  readonly s3Object: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_region MpsProcessMediaOperation#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_id MpsProcessMediaOperation#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_key MpsProcessMediaOperation#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleS3InputInfoToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleS3InputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleS3InputInfo): any {
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


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleS3InputInfoToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleS3InputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleS3InputInfo): any {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleS3InputInfo | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleS3InputInfo | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleUrlInputInfo {
  /**
  * URL of a video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#url MpsProcessMediaOperation#url}
  */
  readonly url: string;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleUrlInputInfoToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleUrlInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleUrlInputInfoToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleUrlInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleUrlInputInfo): any {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleUrlInputInfo | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitle {
  /**
  * The input type. Valid values:`COS`: A COS bucket address. `URL`: A URL. `AWS-S3`: An AWS S3 bucket address. Currently, this type is only supported for transcoding tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#type MpsProcessMediaOperation#type}
  */
  readonly type: string;
  /**
  * cos_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#cos_input_info MpsProcessMediaOperation#cos_input_info}
  */
  readonly cosInputInfo?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleCosInputInfo;
  /**
  * s3_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_input_info MpsProcessMediaOperation#s3_input_info}
  */
  readonly s3InputInfo?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleS3InputInfo;
  /**
  * url_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#url_input_info MpsProcessMediaOperation#url_input_info}
  */
  readonly urlInputInfo?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleUrlInputInfo;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_input_info: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleCosInputInfoToTerraform(struct!.cosInputInfo),
    s3_input_info: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleS3InputInfoToTerraform(struct!.s3InputInfo),
    url_input_info: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleUrlInputInfoToTerraform(struct!.urlInputInfo),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitle): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleCosInputInfoToHclTerraform(struct!.cosInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleCosInputInfoList",
    },
    s3_input_info: {
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleS3InputInfoToHclTerraform(struct!.s3InputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleS3InputInfoList",
    },
    url_input_info: {
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleUrlInputInfoToHclTerraform(struct!.urlInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleUrlInputInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitle | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitle | undefined) {
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
  private _cosInputInfo = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleCosInputInfoOutputReference(this, "cos_input_info");
  public get cosInputInfo() {
    return this._cosInputInfo;
  }
  public putCosInputInfo(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleCosInputInfo) {
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
  private _s3InputInfo = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleS3InputInfoOutputReference(this, "s3_input_info");
  public get s3InputInfo() {
    return this._s3InputInfo;
  }
  public putS3InputInfo(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleS3InputInfo) {
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
  private _urlInputInfo = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleUrlInputInfoOutputReference(this, "url_input_info");
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
  public putUrlInputInfo(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleUrlInputInfo) {
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitles {
  /**
  * The mode. Valid values:`subtitle-stream`: Add a subtitle track.`close-caption-708`: Embed CEA-708 subtitles in SEI frames.`close-caption-608`: Embed CEA-608 subtitles in SEI frames.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#type MpsProcessMediaOperation#type}
  */
  readonly type?: string;
  /**
  * subtitle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#subtitle MpsProcessMediaOperation#subtitle}
  */
  readonly subtitle?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitle;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    subtitle: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleToTerraform(struct!.subtitle),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitles | cdktf.IResolvable): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleToHclTerraform(struct!.subtitle),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitles | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitles | cdktf.IResolvable | undefined) {
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
  private _subtitle = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitleOutputReference(this, "subtitle");
  public get subtitle() {
    return this._subtitle;
  }
  public putSubtitle(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesSubtitle) {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesList extends cdktf.ComplexList {
  public internalValue? : MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitles[] | cdktf.IResolvable

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
  public get(index: number): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesOutputReference {
    return new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamCosInputInfo {
  /**
  * The COS bucket of the object to process, such as `TopRankVideo-125xxx88`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#bucket MpsProcessMediaOperation#bucket}
  */
  readonly bucket: string;
  /**
  * The path of the object to process, such as `/movie/201907/WildAnimal.mov`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#object MpsProcessMediaOperation#object}
  */
  readonly object: string;
  /**
  * The region of the COS bucket, such as `ap-chongqing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#region MpsProcessMediaOperation#region}
  */
  readonly region: string;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamCosInputInfoToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamCosInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamCosInputInfo): any {
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


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamCosInputInfoToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamCosInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamCosInputInfo): any {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamCosInputInfo | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamCosInputInfo | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamS3InputInfo {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_bucket MpsProcessMediaOperation#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The path of the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_object MpsProcessMediaOperation#s3_object}
  */
  readonly s3Object: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_region MpsProcessMediaOperation#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_id MpsProcessMediaOperation#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_key MpsProcessMediaOperation#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamS3InputInfoToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamS3InputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamS3InputInfo): any {
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


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamS3InputInfoToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamS3InputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamS3InputInfo): any {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamS3InputInfo | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamS3InputInfo | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamUrlInputInfo {
  /**
  * URL of a video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#url MpsProcessMediaOperation#url}
  */
  readonly url: string;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamUrlInputInfoToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamUrlInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamUrlInputInfoToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamUrlInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamUrlInputInfo): any {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamUrlInputInfo | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStream {
  /**
  * The input type. Valid values:`COS`: A COS bucket address. `URL`: A URL. `AWS-S3`: An AWS S3 bucket address. Currently, this type is only supported for transcoding tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#type MpsProcessMediaOperation#type}
  */
  readonly type: string;
  /**
  * cos_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#cos_input_info MpsProcessMediaOperation#cos_input_info}
  */
  readonly cosInputInfo?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamCosInputInfo;
  /**
  * s3_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_input_info MpsProcessMediaOperation#s3_input_info}
  */
  readonly s3InputInfo?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamS3InputInfo;
  /**
  * url_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#url_input_info MpsProcessMediaOperation#url_input_info}
  */
  readonly urlInputInfo?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamUrlInputInfo;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStream | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_input_info: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamCosInputInfoToTerraform(struct!.cosInputInfo),
    s3_input_info: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamS3InputInfoToTerraform(struct!.s3InputInfo),
    url_input_info: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamUrlInputInfoToTerraform(struct!.urlInputInfo),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStream | cdktf.IResolvable): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamCosInputInfoToHclTerraform(struct!.cosInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamCosInputInfoList",
    },
    s3_input_info: {
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamS3InputInfoToHclTerraform(struct!.s3InputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamS3InputInfoList",
    },
    url_input_info: {
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamUrlInputInfoToHclTerraform(struct!.urlInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamUrlInputInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStream | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStream | cdktf.IResolvable | undefined) {
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
  private _cosInputInfo = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamCosInputInfoOutputReference(this, "cos_input_info");
  public get cosInputInfo() {
    return this._cosInputInfo;
  }
  public putCosInputInfo(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamCosInputInfo) {
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
  private _s3InputInfo = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamS3InputInfoOutputReference(this, "s3_input_info");
  public get s3InputInfo() {
    return this._s3InputInfo;
  }
  public putS3InputInfo(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamS3InputInfo) {
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
  private _urlInputInfo = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamUrlInputInfoOutputReference(this, "url_input_info");
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
  public putUrlInputInfo(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamUrlInputInfo) {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamList extends cdktf.ComplexList {
  public internalValue? : MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStream[] | cdktf.IResolvable

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
  public get(index: number): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamOutputReference {
    return new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAudioTemplate {
  /**
  * Audio channel system. Valid values:1: Mono2: Dual6: StereoWhen the media is packaged in audio format (FLAC, OGG, MP3, M4A), the sound channel cannot be set to stereo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#audio_channel MpsProcessMediaOperation#audio_channel}
  */
  readonly audioChannel?: number;
  /**
  * Audio stream bitrate in Kbps. Value range: 0 and [26, 256]. If the value is 0, the bitrate of the audio stream will be the same as that of the original audio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#bitrate MpsProcessMediaOperation#bitrate}
  */
  readonly bitrate?: number;
  /**
  * Audio stream codec.When the outer `Container` parameter is `mp3`, the valid value is:libmp3lame.When the outer `Container` parameter is `ogg` or `flac`, the valid value is:flac.When the outer `Container` parameter is `m4a`, the valid values include:libfdk_aac;libmp3lame;ac3.When the outer `Container` parameter is `mp4` or `flv`, the valid values include:libfdk_aac: More suitable for mp4;libmp3lame: More suitable for flv;mp2.When the outer `Container` parameter is `hls`, the valid values include:libfdk_aac;libmp3lame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#codec MpsProcessMediaOperation#codec}
  */
  readonly codec?: string;
  /**
  * Audio stream sample rate. Valid values:32,00044,10048,000In Hz.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#sample_rate MpsProcessMediaOperation#sample_rate}
  */
  readonly sampleRate?: number;
  /**
  * The audio tracks to retain. All audio tracks are retained by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#stream_selects MpsProcessMediaOperation#stream_selects}
  */
  readonly streamSelects?: number[];
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAudioTemplateToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAudioTemplateOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAudioTemplate): any {
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


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAudioTemplateToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAudioTemplateOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAudioTemplate): any {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAudioTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAudioTemplate | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAudioTemplate | undefined) {
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

  // bitrate - computed: false, optional: true, required: false
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

  // sample_rate - computed: false, optional: true, required: false
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterSubtitleTemplate {
  /**
  * The text transparency. Value range: 0-1.`0`: Fully transparent.`1`: Fully opaque.Default value: 1.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#font_alpha MpsProcessMediaOperation#font_alpha}
  */
  readonly fontAlpha?: number;
  /**
  * The font color in 0xRRGGBB format. Default value: 0xFFFFFF (white).Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#font_color MpsProcessMediaOperation#font_color}
  */
  readonly fontColor?: string;
  /**
  * The font size (pixels). If this is not specified, the font size in the subtitle file will be used.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#font_size MpsProcessMediaOperation#font_size}
  */
  readonly fontSize?: string;
  /**
  * The font. Valid values:`hei.ttf`: Heiti.`song.ttf`: Songti.`simkai.ttf`: Kaiti.`arial.ttf`: Arial.The default is `hei.ttf`.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#font_type MpsProcessMediaOperation#font_type}
  */
  readonly fontType?: string;
  /**
  * The URL of the subtitles to add to the video.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#path MpsProcessMediaOperation#path}
  */
  readonly path?: string;
  /**
  * The subtitle track to add to the video. If both `Path` and `StreamIndex` are specified, `Path` will be used. You need to specify at least one of the two parameters.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#stream_index MpsProcessMediaOperation#stream_index}
  */
  readonly streamIndex?: number;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterSubtitleTemplateToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterSubtitleTemplateOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterSubtitleTemplate): any {
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


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterSubtitleTemplateToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterSubtitleTemplateOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterSubtitleTemplate): any {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterSubtitleTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterSubtitleTemplate | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterSubtitleTemplate | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterTehdConfig {
  /**
  * The maximum video bitrate. If this parameter is not specified, no modifications will be made.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#max_video_bitrate MpsProcessMediaOperation#max_video_bitrate}
  */
  readonly maxVideoBitrate?: number;
  /**
  * The TSC type. Valid values:`TEHD-100`: TSC-100 (video TSC). `TEHD-200`: TSC-200 (audio TSC). If this parameter is left blank, no modification will be made.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#type MpsProcessMediaOperation#type}
  */
  readonly type?: string;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterTehdConfigToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterTehdConfigOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterTehdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_video_bitrate: cdktf.numberToTerraform(struct!.maxVideoBitrate),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterTehdConfigToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterTehdConfigOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterTehdConfig): any {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterTehdConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterTehdConfig | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterTehdConfig | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterVideoTemplate {
  /**
  * Bitrate of a video stream in Kbps. Value range: 0 and [128, 35,000].If the value is 0, the bitrate of the video will be the same as that of the source video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#bitrate MpsProcessMediaOperation#bitrate}
  */
  readonly bitrate?: number;
  /**
  * The video codec. Valid values:libx264: H.264libx265: H.265av1: AOMedia Video 1Note: You must specify a resolution (not higher than 640 x 480) if the H.265 codec is used.Note: You can only use the AOMedia Video 1 codec for MP4 files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#codec MpsProcessMediaOperation#codec}
  */
  readonly codec?: string;
  /**
  * Whether to enable adaptive encoding. Valid values:0: Disable1: EnableDefault value: 0. If this parameter is set to `1`, multiple streams with different resolutions and bitrates will be generated automatically. The highest resolution, bitrate, and quality of the streams are determined by the values of `width` and `height`, `Bitrate`, and `Vcrf` in `VideoTemplate` respectively. If these parameters are not set in `VideoTemplate`, the highest resolution generated will be the same as that of the source video, and the highest video quality will be close to VMAF 95. To use this parameter or learn about the billing details of adaptive encoding, please contact your sales rep.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#content_adapt_stream MpsProcessMediaOperation#content_adapt_stream}
  */
  readonly contentAdaptStream?: number;
  /**
  * Fill type. Fill refers to the way of processing a screenshot when its aspect ratio is different from that of the source video. The following fill types are supported: stretch: stretch. The screenshot will be stretched frame by frame to match the aspect ratio of the source video, which may make the screenshot shorter or longer;black: fill with black. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with black color blocks.white: fill with white. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with white color blocks.gauss: fill with Gaussian blur. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with Gaussian blur.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#fill_type MpsProcessMediaOperation#fill_type}
  */
  readonly fillType?: string;
  /**
  * Video frame rate in Hz. Value range: [0, 100].If the value is 0, the frame rate will be the same as that of the source video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#fps MpsProcessMediaOperation#fps}
  */
  readonly fps?: number;
  /**
  * Frame interval between I keyframes. Value range: 0 and [1,100000]. If this parameter is 0, the system will automatically set the GOP length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#gop MpsProcessMediaOperation#gop}
  */
  readonly gop?: number;
  /**
  * Maximum value of the height (or short side) of a video stream in px. Value range: 0 and [128, 4,096].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#height MpsProcessMediaOperation#height}
  */
  readonly height?: number;
  /**
  * Resolution adaption. Valid values:open: Enabled. When resolution adaption is enabled, `Width` indicates the long side of a video, while `Height` indicates the short side.close: Disabled. When resolution adaption is disabled, `Width` indicates the width of a video, while `Height` indicates the height.Note: When resolution adaption is enabled, `Width` cannot be smaller than `Height`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#resolution_adaptive MpsProcessMediaOperation#resolution_adaptive}
  */
  readonly resolutionAdaptive?: string;
  /**
  * The control factor of video constant bitrate. Value range: [0, 51]. This parameter will be disabled if you enter `0`.It is not recommended to specify this parameter if there are no special requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#vcrf MpsProcessMediaOperation#vcrf}
  */
  readonly vcrf?: number;
  /**
  * Maximum value of the width (or long side) of a video stream in px. Value range: 0 and [128, 4,096].If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;If both `Width` and `Height` are not 0, the custom resolution will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#width MpsProcessMediaOperation#width}
  */
  readonly width?: number;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterVideoTemplateToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterVideoTemplateOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterVideoTemplate): any {
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


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterVideoTemplateToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterVideoTemplateOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterVideoTemplate): any {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterVideoTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterVideoTemplate | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterVideoTemplate | undefined) {
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

  // bitrate - computed: false, optional: true, required: false
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

  // fps - computed: false, optional: true, required: false
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameter {
  /**
  * Container format. Valid values: mp4, flv, hls, mp3, flac, ogg, and m4a; mp3, flac, ogg, and m4a are formats of audio files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#container MpsProcessMediaOperation#container}
  */
  readonly container?: string;
  /**
  * Whether to remove audio data. Valid values:0: retain1: remove.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#remove_audio MpsProcessMediaOperation#remove_audio}
  */
  readonly removeAudio?: number;
  /**
  * Whether to remove video data. Valid values:0: retain1: remove.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#remove_video MpsProcessMediaOperation#remove_video}
  */
  readonly removeVideo?: number;
  /**
  * An extended field for transcoding.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#std_ext_info MpsProcessMediaOperation#std_ext_info}
  */
  readonly stdExtInfo?: string;
  /**
  * add_on_subtitles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#add_on_subtitles MpsProcessMediaOperation#add_on_subtitles}
  */
  readonly addOnSubtitles?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitles[] | cdktf.IResolvable;
  /**
  * addon_audio_stream block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#addon_audio_stream MpsProcessMediaOperation#addon_audio_stream}
  */
  readonly addonAudioStream?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStream[] | cdktf.IResolvable;
  /**
  * audio_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#audio_template MpsProcessMediaOperation#audio_template}
  */
  readonly audioTemplate?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAudioTemplate;
  /**
  * subtitle_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#subtitle_template MpsProcessMediaOperation#subtitle_template}
  */
  readonly subtitleTemplate?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterSubtitleTemplate;
  /**
  * tehd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#tehd_config MpsProcessMediaOperation#tehd_config}
  */
  readonly tehdConfig?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterTehdConfig;
  /**
  * video_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#video_template MpsProcessMediaOperation#video_template}
  */
  readonly videoTemplate?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterVideoTemplate;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    remove_audio: cdktf.numberToTerraform(struct!.removeAudio),
    remove_video: cdktf.numberToTerraform(struct!.removeVideo),
    std_ext_info: cdktf.stringToTerraform(struct!.stdExtInfo),
    add_on_subtitles: cdktf.listMapper(mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesToTerraform, true)(struct!.addOnSubtitles),
    addon_audio_stream: cdktf.listMapper(mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamToTerraform, true)(struct!.addonAudioStream),
    audio_template: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAudioTemplateToTerraform(struct!.audioTemplate),
    subtitle_template: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterSubtitleTemplateToTerraform(struct!.subtitleTemplate),
    tehd_config: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterTehdConfigToTerraform(struct!.tehdConfig),
    video_template: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterVideoTemplateToTerraform(struct!.videoTemplate),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameter): any {
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
      value: cdktf.listMapperHcl(mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesToHclTerraform, true)(struct!.addOnSubtitles),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesList",
    },
    addon_audio_stream: {
      value: cdktf.listMapperHcl(mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamToHclTerraform, true)(struct!.addonAudioStream),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamList",
    },
    audio_template: {
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAudioTemplateToHclTerraform(struct!.audioTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAudioTemplateList",
    },
    subtitle_template: {
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterSubtitleTemplateToHclTerraform(struct!.subtitleTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterSubtitleTemplateList",
    },
    tehd_config: {
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterTehdConfigToHclTerraform(struct!.tehdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterTehdConfigList",
    },
    video_template: {
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterVideoTemplateToHclTerraform(struct!.videoTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterVideoTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameter | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameter | undefined) {
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
  private _addOnSubtitles = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitlesList(this, "add_on_subtitles", false);
  public get addOnSubtitles() {
    return this._addOnSubtitles;
  }
  public putAddOnSubtitles(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddOnSubtitles[] | cdktf.IResolvable) {
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
  private _addonAudioStream = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStreamList(this, "addon_audio_stream", false);
  public get addonAudioStream() {
    return this._addonAudioStream;
  }
  public putAddonAudioStream(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAddonAudioStream[] | cdktf.IResolvable) {
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
  private _audioTemplate = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAudioTemplateOutputReference(this, "audio_template");
  public get audioTemplate() {
    return this._audioTemplate;
  }
  public putAudioTemplate(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterAudioTemplate) {
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
  private _subtitleTemplate = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterSubtitleTemplateOutputReference(this, "subtitle_template");
  public get subtitleTemplate() {
    return this._subtitleTemplate;
  }
  public putSubtitleTemplate(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterSubtitleTemplate) {
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
  private _tehdConfig = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterTehdConfigOutputReference(this, "tehd_config");
  public get tehdConfig() {
    return this._tehdConfig;
  }
  public putTehdConfig(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterTehdConfig) {
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
  private _videoTemplate = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterVideoTemplateOutputReference(this, "video_template");
  public get videoTemplate() {
    return this._videoTemplate;
  }
  public putVideoTemplate(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterVideoTemplate) {
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterAudioTemplate {
  /**
  * Audio channel system. Valid values:1: Mono2: Dual6: StereoWhen the media is packaged in audio format (FLAC, OGG, MP3, M4A), the sound channel cannot be set to stereo.Default value: 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#audio_channel MpsProcessMediaOperation#audio_channel}
  */
  readonly audioChannel?: number;
  /**
  * Audio stream bitrate in Kbps. Value range: 0 and [26, 256].If the value is 0, the bitrate of the audio stream will be the same as that of the original audio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#bitrate MpsProcessMediaOperation#bitrate}
  */
  readonly bitrate: number;
  /**
  * Audio stream codec.When the outer `Container` parameter is `mp3`, the valid value is:libmp3lame.When the outer `Container` parameter is `ogg` or `flac`, the valid value is:flac.When the outer `Container` parameter is `m4a`, the valid values include:libfdk_aac;libmp3lame;ac3.When the outer `Container` parameter is `mp4` or `flv`, the valid values include:libfdk_aac: more suitable for mp4;libmp3lame: more suitable for flv.When the outer `Container` parameter is `hls`, the valid values include:libfdk_aac;libmp3lame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#codec MpsProcessMediaOperation#codec}
  */
  readonly codec: string;
  /**
  * Audio stream sample rate. Valid values:32,00044,10048,000In Hz.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#sample_rate MpsProcessMediaOperation#sample_rate}
  */
  readonly sampleRate: number;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterAudioTemplateToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterAudioTemplateOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterAudioTemplate): any {
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


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterAudioTemplateToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterAudioTemplateOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterAudioTemplate): any {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterAudioTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterAudioTemplate | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterAudioTemplate | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterTehdConfig {
  /**
  * Maximum bitrate, which is valid when `Type` is `TESHD`.If this parameter is left empty or 0 is entered, there will be no upper limit for bitrate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#max_video_bitrate MpsProcessMediaOperation#max_video_bitrate}
  */
  readonly maxVideoBitrate?: number;
  /**
  * TESHD type. Valid values:TEHD-100: TESHD-100.If this parameter is left empty, TESHD will not be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#type MpsProcessMediaOperation#type}
  */
  readonly type: string;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterTehdConfigToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterTehdConfigOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterTehdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_video_bitrate: cdktf.numberToTerraform(struct!.maxVideoBitrate),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterTehdConfigToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterTehdConfigOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterTehdConfig): any {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterTehdConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterTehdConfig | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterTehdConfig | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterVideoTemplate {
  /**
  * The video bitrate (Kbps). Value range: 0 and [128, 35000].If the value is 0, the bitrate of the video will be the same as that of the source video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#bitrate MpsProcessMediaOperation#bitrate}
  */
  readonly bitrate: number;
  /**
  * The video codec. Valid values:`libx264`: H.264`libx265`: H.265`av1`: AOMedia Video 1Note: You must specify a resolution (not higher than 640 x 480) if the H.265 codec is used.Note: You can only use the AOMedia Video 1 codec for MP4 files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#codec MpsProcessMediaOperation#codec}
  */
  readonly codec: string;
  /**
  * The fill mode, which indicates how a video is resized when the video's original aspect ratio is different from the target aspect ratio. Valid values:stretch: Stretch the image frame by frame to fill the entire screen. The video image may become squashed or stretched after transcoding.black: Keep the image&#39;s original aspect ratio and fill the blank space with black bars.white: Keep the image's original aspect ratio and fill the blank space with white bars.gauss: Keep the image's original aspect ratio and apply Gaussian blur to the blank space.Default value: black.Note: Only `stretch` and `black` are supported for adaptive bitrate streaming.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#fill_type MpsProcessMediaOperation#fill_type}
  */
  readonly fillType?: string;
  /**
  * The video frame rate (Hz). Value range: [0, 100].If the value is 0, the frame rate will be the same as that of the source video.Note: For adaptive bitrate streaming, the value range of this parameter is [0, 60].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#fps MpsProcessMediaOperation#fps}
  */
  readonly fps: number;
  /**
  * Frame interval between I keyframes. Value range: 0 and [1,100000].If this parameter is 0 or left empty, the system will automatically set the GOP length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#gop MpsProcessMediaOperation#gop}
  */
  readonly gop?: number;
  /**
  * Maximum value of the height (or short side) of a video stream in px. Value range: 0 and [128, 4,096].If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;If both `Width` and `Height` are not 0, the custom resolution will be used.Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#height MpsProcessMediaOperation#height}
  */
  readonly height?: number;
  /**
  * Resolution adaption. Valid values:open: Enabled. When resolution adaption is enabled, `Width` indicates the long side of a video, while `Height` indicates the short side.close: Disabled. When resolution adaption is disabled, `Width` indicates the width of a video, while `Height` indicates the height.Default value: open.Note: When resolution adaption is enabled, `Width` cannot be smaller than `Height`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#resolution_adaptive MpsProcessMediaOperation#resolution_adaptive}
  */
  readonly resolutionAdaptive?: string;
  /**
  * The control factor of video constant bitrate. Value range: [1, 51]If this parameter is specified, CRF (a bitrate control method) will be used for transcoding. (Video bitrate will no longer take effect.)It is not recommended to specify this parameter if there are no special requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#vcrf MpsProcessMediaOperation#vcrf}
  */
  readonly vcrf?: number;
  /**
  * Maximum value of the width (or long side) of a video stream in px. Value range: 0 and [128, 4,096].If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;If both `Width` and `Height` are not 0, the custom resolution will be used.Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#width MpsProcessMediaOperation#width}
  */
  readonly width?: number;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterVideoTemplateToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterVideoTemplateOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterVideoTemplate): any {
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


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterVideoTemplateToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterVideoTemplateOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterVideoTemplate): any {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterVideoTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterVideoTemplate | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterVideoTemplate | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameter {
  /**
  * Container. Valid values: mp4; flv; hls; mp3; flac; ogg; m4a. Among them, mp3, flac, ogg, and m4a are for audio files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#container MpsProcessMediaOperation#container}
  */
  readonly container: string;
  /**
  * Whether to remove audio data. Valid values:0: retain;1: remove.Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#remove_audio MpsProcessMediaOperation#remove_audio}
  */
  readonly removeAudio?: number;
  /**
  * Whether to remove video data. Valid values:0: retain;1: remove.Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#remove_video MpsProcessMediaOperation#remove_video}
  */
  readonly removeVideo?: number;
  /**
  * audio_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#audio_template MpsProcessMediaOperation#audio_template}
  */
  readonly audioTemplate?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterAudioTemplate;
  /**
  * tehd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#tehd_config MpsProcessMediaOperation#tehd_config}
  */
  readonly tehdConfig?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterTehdConfig;
  /**
  * video_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#video_template MpsProcessMediaOperation#video_template}
  */
  readonly videoTemplate?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterVideoTemplate;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    remove_audio: cdktf.numberToTerraform(struct!.removeAudio),
    remove_video: cdktf.numberToTerraform(struct!.removeVideo),
    audio_template: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterAudioTemplateToTerraform(struct!.audioTemplate),
    tehd_config: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterTehdConfigToTerraform(struct!.tehdConfig),
    video_template: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterVideoTemplateToTerraform(struct!.videoTemplate),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameter): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterAudioTemplateToHclTerraform(struct!.audioTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterAudioTemplateList",
    },
    tehd_config: {
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterTehdConfigToHclTerraform(struct!.tehdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterTehdConfigList",
    },
    video_template: {
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterVideoTemplateToHclTerraform(struct!.videoTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterVideoTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameter | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameter | undefined) {
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
  private _audioTemplate = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterAudioTemplateOutputReference(this, "audio_template");
  public get audioTemplate() {
    return this._audioTemplate;
  }
  public putAudioTemplate(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterAudioTemplate) {
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
  private _tehdConfig = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterTehdConfigOutputReference(this, "tehd_config");
  public get tehdConfig() {
    return this._tehdConfig;
  }
  public putTehdConfig(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterTehdConfig) {
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
  private _videoTemplate = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterVideoTemplateOutputReference(this, "video_template");
  public get videoTemplate() {
    return this._videoTemplate;
  }
  public putVideoTemplate(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterVideoTemplate) {
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfo {
  /**
  * The COS bucket of the object to process, such as `TopRankVideo-125xxx88`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#bucket MpsProcessMediaOperation#bucket}
  */
  readonly bucket: string;
  /**
  * The path of the object to process, such as `/movie/201907/WildAnimal.mov`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#object MpsProcessMediaOperation#object}
  */
  readonly object: string;
  /**
  * The region of the COS bucket, such as `ap-chongqing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#region MpsProcessMediaOperation#region}
  */
  readonly region: string;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfo): any {
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


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfo): any {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfo | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfo | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfo {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_bucket MpsProcessMediaOperation#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The path of the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_object MpsProcessMediaOperation#s3_object}
  */
  readonly s3Object: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_region MpsProcessMediaOperation#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_id MpsProcessMediaOperation#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_key MpsProcessMediaOperation#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfo): any {
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


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfo): any {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfo | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfo | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo {
  /**
  * URL of a video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#url MpsProcessMediaOperation#url}
  */
  readonly url: string;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo): any {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo | undefined) {
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContent {
  /**
  * The input type. Valid values:`COS`: A COS bucket address. `URL`: A URL. `AWS-S3`: An AWS S3 bucket address. Currently, this type is only supported for transcoding tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#type MpsProcessMediaOperation#type}
  */
  readonly type: string;
  /**
  * cos_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#cos_input_info MpsProcessMediaOperation#cos_input_info}
  */
  readonly cosInputInfo?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfo;
  /**
  * s3_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_input_info MpsProcessMediaOperation#s3_input_info}
  */
  readonly s3InputInfo?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfo;
  /**
  * url_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#url_input_info MpsProcessMediaOperation#url_input_info}
  */
  readonly urlInputInfo?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_input_info: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToTerraform(struct!.cosInputInfo),
    s3_input_info: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToTerraform(struct!.s3InputInfo),
    url_input_info: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToTerraform(struct!.urlInputInfo),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContent): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoToHclTerraform(struct!.cosInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoList",
    },
    s3_input_info: {
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoToHclTerraform(struct!.s3InputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoList",
    },
    url_input_info: {
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoToHclTerraform(struct!.urlInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContent | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContent | undefined) {
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
  private _cosInputInfo = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfoOutputReference(this, "cos_input_info");
  public get cosInputInfo() {
    return this._cosInputInfo;
  }
  public putCosInputInfo(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentCosInputInfo) {
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
  private _s3InputInfo = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfoOutputReference(this, "s3_input_info");
  public get s3InputInfo() {
    return this._s3InputInfo;
  }
  public putS3InputInfo(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentS3InputInfo) {
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
  private _urlInputInfo = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfoOutputReference(this, "url_input_info");
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
  public putUrlInputInfo(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentUrlInputInfo) {
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplate {
  /**
  * Watermark height. % and px formats are supported:If the string ends in %, the `Height` of the watermark will be the specified percentage of the video height; for example, `10%` means that `Height` is 10% of the video height;If the string ends in px, the `Height` of the watermark will be in px; for example, `100px` means that `Height` is 100 px.Default value: 0 px, which means that `Height` will be proportionally scaled according to the aspect ratio of the original watermark image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#height MpsProcessMediaOperation#height}
  */
  readonly height?: string;
  /**
  * Repeat type of an animated watermark. Valid values:`once`: no longer appears after watermark playback ends.`repeat_last_frame`: stays on the last frame after watermark playback ends.`repeat` (default): repeats the playback until the video ends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#repeat_type MpsProcessMediaOperation#repeat_type}
  */
  readonly repeatType?: string;
  /**
  * Watermark width. % and px formats are supported:If the string ends in %, the `Width` of the watermark will be the specified percentage of the video width; for example, `10%` means that `Width` is 10% of the video width;If the string ends in px, the `Width` of the watermark will be in px; for example, `100px` means that `Width` is 100 px.Default value: 10%.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#width MpsProcessMediaOperation#width}
  */
  readonly width?: string;
  /**
  * image_content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#image_content MpsProcessMediaOperation#image_content}
  */
  readonly imageContent: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContent;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.stringToTerraform(struct!.height),
    repeat_type: cdktf.stringToTerraform(struct!.repeatType),
    width: cdktf.stringToTerraform(struct!.width),
    image_content: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentToTerraform(struct!.imageContent),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplate): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentToHclTerraform(struct!.imageContent),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplate | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplate | undefined) {
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
  private _imageContent = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContentOutputReference(this, "image_content");
  public get imageContent() {
    return this._imageContent;
  }
  public putImageContent(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateImageContent) {
    this._imageContent.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageContentInput() {
    return this._imageContent.internalValue;
  }
}
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameter {
  /**
  * Origin position, which currently can only be:TopLeft: the origin of coordinates is in the top-left corner of the video, and the origin of the watermark is in the top-left corner of the image or text.Default value: TopLeft.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#coordinate_origin MpsProcessMediaOperation#coordinate_origin}
  */
  readonly coordinateOrigin?: string;
  /**
  * Watermark type. Valid values:image: image watermark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#type MpsProcessMediaOperation#type}
  */
  readonly type: string;
  /**
  * The horizontal position of the origin of the watermark relative to the origin of coordinates of the video. % and px formats are supported:If the string ends in %, the `XPos` of the watermark will be the specified percentage of the video width; for example, `10%` means that `XPos` is 10% of the video width;If the string ends in px, the `XPos` of the watermark will be the specified px; for example, `100px` means that `XPos` is 100 px.Default value: 0 px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#x_pos MpsProcessMediaOperation#x_pos}
  */
  readonly xPos?: string;
  /**
  * The vertical position of the origin of the watermark relative to the origin of coordinates of the video. % and px formats are supported:If the string ends in %, the `YPos` of the watermark will be the specified percentage of the video height; for example, `10%` means that `YPos` is 10% of the video height;If the string ends in px, the `YPos` of the watermark will be the specified px; for example, `100px` means that `YPos` is 100 px.Default value: 0 px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#y_pos MpsProcessMediaOperation#y_pos}
  */
  readonly yPos?: string;
  /**
  * image_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#image_template MpsProcessMediaOperation#image_template}
  */
  readonly imageTemplate?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplate;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    coordinate_origin: cdktf.stringToTerraform(struct!.coordinateOrigin),
    type: cdktf.stringToTerraform(struct!.type),
    x_pos: cdktf.stringToTerraform(struct!.xPos),
    y_pos: cdktf.stringToTerraform(struct!.yPos),
    image_template: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateToTerraform(struct!.imageTemplate),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterOutputReference | MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameter): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateToHclTerraform(struct!.imageTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameter | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameter | undefined) {
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
  private _imageTemplate = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplateOutputReference(this, "image_template");
  public get imageTemplate() {
    return this._imageTemplate;
  }
  public putImageTemplate(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterImageTemplate) {
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
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSet {
  /**
  * ID of a watermarking template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#definition MpsProcessMediaOperation#definition}
  */
  readonly definition: number;
  /**
  * End time offset of a watermark in seconds.If this parameter is left empty or 0 is entered, the watermark will exist till the last video frame;If this value is greater than 0 (e.g., n), the watermark will exist till second n;If this value is smaller than 0 (e.g., -n), the watermark will exist till second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#end_time_offset MpsProcessMediaOperation#end_time_offset}
  */
  readonly endTimeOffset?: number;
  /**
  * Start time offset of a watermark in seconds. If this parameter is left empty or 0 is entered, the watermark will appear upon the first video frame.If this parameter is left empty or 0 is entered, the watermark will appear upon the first video frame;If this value is greater than 0 (e.g., n), the watermark will appear at second n after the first video frame;If this value is smaller than 0 (e.g., -n), the watermark will appear at second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#start_time_offset MpsProcessMediaOperation#start_time_offset}
  */
  readonly startTimeOffset?: number;
  /**
  * SVG content of up to 2,000,000 characters. This field is required only when the watermark type is `SVG`.SVG watermark is not available for screenshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#svg_content MpsProcessMediaOperation#svg_content}
  */
  readonly svgContent?: string;
  /**
  * Text content of up to 100 characters. This field is required only when the watermark type is text.Text watermark is not available for screenshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#text_content MpsProcessMediaOperation#text_content}
  */
  readonly textContent?: string;
  /**
  * raw_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#raw_parameter MpsProcessMediaOperation#raw_parameter}
  */
  readonly rawParameter?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameter;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSet | cdktf.IResolvable): any {
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
    raw_parameter: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterToTerraform(struct!.rawParameter),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSet | cdktf.IResolvable): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterToHclTerraform(struct!.rawParameter),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSet | cdktf.IResolvable | undefined) {
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
  private _rawParameter = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameterOutputReference(this, "raw_parameter");
  public get rawParameter() {
    return this._rawParameter;
  }
  public putRawParameter(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetRawParameter) {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetList extends cdktf.ComplexList {
  public internalValue? : MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSet[] | cdktf.IResolvable

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
  public get(index: number): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetOutputReference {
    return new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSet {
  /**
  * ID of a video transcoding template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#definition MpsProcessMediaOperation#definition}
  */
  readonly definition: number;
  /**
  * End time offset of a transcoded video, in seconds.If this parameter is left empty or set to 0, the transcoded video will end at the same time as the original video.If this parameter is set to a positive number (n for example), the transcoded video will end at the nth second of the original video.If this parameter is set to a negative number (-n for example), the transcoded video will end at the nth second before the end of the original video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#end_time_offset MpsProcessMediaOperation#end_time_offset}
  */
  readonly endTimeOffset?: number;
  /**
  * Path to a primary output file, which can be a relative path or an absolute path. If this parameter is left empty, the following relative path will be used by default: `{inputName}_transcode_{definition}.{format}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#output_object_path MpsProcessMediaOperation#output_object_path}
  */
  readonly outputObjectPath?: string;
  /**
  * Path to an output file part (the path to ts during transcoding to HLS), which can only be a relative path. If this parameter is left empty, the following relative path will be used by default: `{inputName}_transcode_{definition}_{number}.{format}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#segment_object_name MpsProcessMediaOperation#segment_object_name}
  */
  readonly segmentObjectName?: string;
  /**
  * Start time offset of a transcoded video, in seconds.If this parameter is left empty or set to 0, the transcoded video will start at the same time as the original video.If this parameter is set to a positive number (n for example), the transcoded video will start at the nth second of the original video.If this parameter is set to a negative number (-n for example), the transcoded video will start at the nth second before the end of the original video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#start_time_offset MpsProcessMediaOperation#start_time_offset}
  */
  readonly startTimeOffset?: number;
  /**
  * head_tail_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#head_tail_parameter MpsProcessMediaOperation#head_tail_parameter}
  */
  readonly headTailParameter?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameter;
  /**
  * mosaic_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#mosaic_set MpsProcessMediaOperation#mosaic_set}
  */
  readonly mosaicSet?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetMosaicSet[] | cdktf.IResolvable;
  /**
  * object_number_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#object_number_format MpsProcessMediaOperation#object_number_format}
  */
  readonly objectNumberFormat?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetObjectNumberFormat;
  /**
  * output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#output_storage MpsProcessMediaOperation#output_storage}
  */
  readonly outputStorage?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorage;
  /**
  * override_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#override_parameter MpsProcessMediaOperation#override_parameter}
  */
  readonly overrideParameter?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameter;
  /**
  * raw_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#raw_parameter MpsProcessMediaOperation#raw_parameter}
  */
  readonly rawParameter?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameter;
  /**
  * watermark_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#watermark_set MpsProcessMediaOperation#watermark_set}
  */
  readonly watermarkSet?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSet[] | cdktf.IResolvable;
}

export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSet | cdktf.IResolvable): any {
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
    head_tail_parameter: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterToTerraform(struct!.headTailParameter),
    mosaic_set: cdktf.listMapper(mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetMosaicSetToTerraform, true)(struct!.mosaicSet),
    object_number_format: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetObjectNumberFormatToTerraform(struct!.objectNumberFormat),
    output_storage: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageToTerraform(struct!.outputStorage),
    override_parameter: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterToTerraform(struct!.overrideParameter),
    raw_parameter: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterToTerraform(struct!.rawParameter),
    watermark_set: cdktf.listMapper(mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetToTerraform, true)(struct!.watermarkSet),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSet | cdktf.IResolvable): any {
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
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterToHclTerraform(struct!.headTailParameter),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterList",
    },
    mosaic_set: {
      value: cdktf.listMapperHcl(mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetMosaicSetToHclTerraform, true)(struct!.mosaicSet),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetMosaicSetList",
    },
    object_number_format: {
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetObjectNumberFormatToHclTerraform(struct!.objectNumberFormat),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetObjectNumberFormatList",
    },
    output_storage: {
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageToHclTerraform(struct!.outputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageList",
    },
    override_parameter: {
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterToHclTerraform(struct!.overrideParameter),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterList",
    },
    raw_parameter: {
      value: mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterToHclTerraform(struct!.rawParameter),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterList",
    },
    watermark_set: {
      value: cdktf.listMapperHcl(mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetToHclTerraform, true)(struct!.watermarkSet),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _headTailParameter = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameterOutputReference(this, "head_tail_parameter");
  public get headTailParameter() {
    return this._headTailParameter;
  }
  public putHeadTailParameter(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetHeadTailParameter) {
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
  private _mosaicSet = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetMosaicSetList(this, "mosaic_set", false);
  public get mosaicSet() {
    return this._mosaicSet;
  }
  public putMosaicSet(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetMosaicSet[] | cdktf.IResolvable) {
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
  private _objectNumberFormat = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetObjectNumberFormatOutputReference(this, "object_number_format");
  public get objectNumberFormat() {
    return this._objectNumberFormat;
  }
  public putObjectNumberFormat(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetObjectNumberFormat) {
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
  private _outputStorage = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorageOutputReference(this, "output_storage");
  public get outputStorage() {
    return this._outputStorage;
  }
  public putOutputStorage(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputStorage) {
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
  private _overrideParameter = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameterOutputReference(this, "override_parameter");
  public get overrideParameter() {
    return this._overrideParameter;
  }
  public putOverrideParameter(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOverrideParameter) {
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
  private _rawParameter = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameterOutputReference(this, "raw_parameter");
  public get rawParameter() {
    return this._rawParameter;
  }
  public putRawParameter(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetRawParameter) {
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
  private _watermarkSet = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSetList(this, "watermark_set", false);
  public get watermarkSet() {
    return this._watermarkSet;
  }
  public putWatermarkSet(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetWatermarkSet[] | cdktf.IResolvable) {
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

export class MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetList extends cdktf.ComplexList {
  public internalValue? : MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSet[] | cdktf.IResolvable

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
  public get(index: number): MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputReference {
    return new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsProcessMediaOperationMediaProcessTask {
  /**
  * adaptive_dynamic_streaming_task_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#adaptive_dynamic_streaming_task_set MpsProcessMediaOperation#adaptive_dynamic_streaming_task_set}
  */
  readonly adaptiveDynamicStreamingTaskSet?: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSet[] | cdktf.IResolvable;
  /**
  * animated_graphic_task_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#animated_graphic_task_set MpsProcessMediaOperation#animated_graphic_task_set}
  */
  readonly animatedGraphicTaskSet?: MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSet[] | cdktf.IResolvable;
  /**
  * image_sprite_task_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#image_sprite_task_set MpsProcessMediaOperation#image_sprite_task_set}
  */
  readonly imageSpriteTaskSet?: MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSet[] | cdktf.IResolvable;
  /**
  * sample_snapshot_task_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#sample_snapshot_task_set MpsProcessMediaOperation#sample_snapshot_task_set}
  */
  readonly sampleSnapshotTaskSet?: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSet[] | cdktf.IResolvable;
  /**
  * snapshot_by_time_offset_task_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#snapshot_by_time_offset_task_set MpsProcessMediaOperation#snapshot_by_time_offset_task_set}
  */
  readonly snapshotByTimeOffsetTaskSet?: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSet[] | cdktf.IResolvable;
  /**
  * transcode_task_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#transcode_task_set MpsProcessMediaOperation#transcode_task_set}
  */
  readonly transcodeTaskSet?: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSet[] | cdktf.IResolvable;
}

export function mpsProcessMediaOperationMediaProcessTaskToTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskOutputReference | MpsProcessMediaOperationMediaProcessTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adaptive_dynamic_streaming_task_set: cdktf.listMapper(mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetToTerraform, true)(struct!.adaptiveDynamicStreamingTaskSet),
    animated_graphic_task_set: cdktf.listMapper(mpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetToTerraform, true)(struct!.animatedGraphicTaskSet),
    image_sprite_task_set: cdktf.listMapper(mpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetToTerraform, true)(struct!.imageSpriteTaskSet),
    sample_snapshot_task_set: cdktf.listMapper(mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetToTerraform, true)(struct!.sampleSnapshotTaskSet),
    snapshot_by_time_offset_task_set: cdktf.listMapper(mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetToTerraform, true)(struct!.snapshotByTimeOffsetTaskSet),
    transcode_task_set: cdktf.listMapper(mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetToTerraform, true)(struct!.transcodeTaskSet),
  }
}


export function mpsProcessMediaOperationMediaProcessTaskToHclTerraform(struct?: MpsProcessMediaOperationMediaProcessTaskOutputReference | MpsProcessMediaOperationMediaProcessTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adaptive_dynamic_streaming_task_set: {
      value: cdktf.listMapperHcl(mpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetToHclTerraform, true)(struct!.adaptiveDynamicStreamingTaskSet),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetList",
    },
    animated_graphic_task_set: {
      value: cdktf.listMapperHcl(mpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetToHclTerraform, true)(struct!.animatedGraphicTaskSet),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetList",
    },
    image_sprite_task_set: {
      value: cdktf.listMapperHcl(mpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetToHclTerraform, true)(struct!.imageSpriteTaskSet),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetList",
    },
    sample_snapshot_task_set: {
      value: cdktf.listMapperHcl(mpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetToHclTerraform, true)(struct!.sampleSnapshotTaskSet),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetList",
    },
    snapshot_by_time_offset_task_set: {
      value: cdktf.listMapperHcl(mpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetToHclTerraform, true)(struct!.snapshotByTimeOffsetTaskSet),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetList",
    },
    transcode_task_set: {
      value: cdktf.listMapperHcl(mpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetToHclTerraform, true)(struct!.transcodeTaskSet),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationMediaProcessTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationMediaProcessTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adaptiveDynamicStreamingTaskSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adaptiveDynamicStreamingTaskSet = this._adaptiveDynamicStreamingTaskSet?.internalValue;
    }
    if (this._animatedGraphicTaskSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.animatedGraphicTaskSet = this._animatedGraphicTaskSet?.internalValue;
    }
    if (this._imageSpriteTaskSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageSpriteTaskSet = this._imageSpriteTaskSet?.internalValue;
    }
    if (this._sampleSnapshotTaskSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleSnapshotTaskSet = this._sampleSnapshotTaskSet?.internalValue;
    }
    if (this._snapshotByTimeOffsetTaskSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotByTimeOffsetTaskSet = this._snapshotByTimeOffsetTaskSet?.internalValue;
    }
    if (this._transcodeTaskSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transcodeTaskSet = this._transcodeTaskSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsProcessMediaOperationMediaProcessTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adaptiveDynamicStreamingTaskSet.internalValue = undefined;
      this._animatedGraphicTaskSet.internalValue = undefined;
      this._imageSpriteTaskSet.internalValue = undefined;
      this._sampleSnapshotTaskSet.internalValue = undefined;
      this._snapshotByTimeOffsetTaskSet.internalValue = undefined;
      this._transcodeTaskSet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adaptiveDynamicStreamingTaskSet.internalValue = value.adaptiveDynamicStreamingTaskSet;
      this._animatedGraphicTaskSet.internalValue = value.animatedGraphicTaskSet;
      this._imageSpriteTaskSet.internalValue = value.imageSpriteTaskSet;
      this._sampleSnapshotTaskSet.internalValue = value.sampleSnapshotTaskSet;
      this._snapshotByTimeOffsetTaskSet.internalValue = value.snapshotByTimeOffsetTaskSet;
      this._transcodeTaskSet.internalValue = value.transcodeTaskSet;
    }
  }

  // adaptive_dynamic_streaming_task_set - computed: false, optional: true, required: false
  private _adaptiveDynamicStreamingTaskSet = new MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSetList(this, "adaptive_dynamic_streaming_task_set", false);
  public get adaptiveDynamicStreamingTaskSet() {
    return this._adaptiveDynamicStreamingTaskSet;
  }
  public putAdaptiveDynamicStreamingTaskSet(value: MpsProcessMediaOperationMediaProcessTaskAdaptiveDynamicStreamingTaskSet[] | cdktf.IResolvable) {
    this._adaptiveDynamicStreamingTaskSet.internalValue = value;
  }
  public resetAdaptiveDynamicStreamingTaskSet() {
    this._adaptiveDynamicStreamingTaskSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveDynamicStreamingTaskSetInput() {
    return this._adaptiveDynamicStreamingTaskSet.internalValue;
  }

  // animated_graphic_task_set - computed: false, optional: true, required: false
  private _animatedGraphicTaskSet = new MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSetList(this, "animated_graphic_task_set", false);
  public get animatedGraphicTaskSet() {
    return this._animatedGraphicTaskSet;
  }
  public putAnimatedGraphicTaskSet(value: MpsProcessMediaOperationMediaProcessTaskAnimatedGraphicTaskSet[] | cdktf.IResolvable) {
    this._animatedGraphicTaskSet.internalValue = value;
  }
  public resetAnimatedGraphicTaskSet() {
    this._animatedGraphicTaskSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get animatedGraphicTaskSetInput() {
    return this._animatedGraphicTaskSet.internalValue;
  }

  // image_sprite_task_set - computed: false, optional: true, required: false
  private _imageSpriteTaskSet = new MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSetList(this, "image_sprite_task_set", false);
  public get imageSpriteTaskSet() {
    return this._imageSpriteTaskSet;
  }
  public putImageSpriteTaskSet(value: MpsProcessMediaOperationMediaProcessTaskImageSpriteTaskSet[] | cdktf.IResolvable) {
    this._imageSpriteTaskSet.internalValue = value;
  }
  public resetImageSpriteTaskSet() {
    this._imageSpriteTaskSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSpriteTaskSetInput() {
    return this._imageSpriteTaskSet.internalValue;
  }

  // sample_snapshot_task_set - computed: false, optional: true, required: false
  private _sampleSnapshotTaskSet = new MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSetList(this, "sample_snapshot_task_set", false);
  public get sampleSnapshotTaskSet() {
    return this._sampleSnapshotTaskSet;
  }
  public putSampleSnapshotTaskSet(value: MpsProcessMediaOperationMediaProcessTaskSampleSnapshotTaskSet[] | cdktf.IResolvable) {
    this._sampleSnapshotTaskSet.internalValue = value;
  }
  public resetSampleSnapshotTaskSet() {
    this._sampleSnapshotTaskSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleSnapshotTaskSetInput() {
    return this._sampleSnapshotTaskSet.internalValue;
  }

  // snapshot_by_time_offset_task_set - computed: false, optional: true, required: false
  private _snapshotByTimeOffsetTaskSet = new MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSetList(this, "snapshot_by_time_offset_task_set", false);
  public get snapshotByTimeOffsetTaskSet() {
    return this._snapshotByTimeOffsetTaskSet;
  }
  public putSnapshotByTimeOffsetTaskSet(value: MpsProcessMediaOperationMediaProcessTaskSnapshotByTimeOffsetTaskSet[] | cdktf.IResolvable) {
    this._snapshotByTimeOffsetTaskSet.internalValue = value;
  }
  public resetSnapshotByTimeOffsetTaskSet() {
    this._snapshotByTimeOffsetTaskSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotByTimeOffsetTaskSetInput() {
    return this._snapshotByTimeOffsetTaskSet.internalValue;
  }

  // transcode_task_set - computed: false, optional: true, required: false
  private _transcodeTaskSet = new MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSetList(this, "transcode_task_set", false);
  public get transcodeTaskSet() {
    return this._transcodeTaskSet;
  }
  public putTranscodeTaskSet(value: MpsProcessMediaOperationMediaProcessTaskTranscodeTaskSet[] | cdktf.IResolvable) {
    this._transcodeTaskSet.internalValue = value;
  }
  public resetTranscodeTaskSet() {
    this._transcodeTaskSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transcodeTaskSetInput() {
    return this._transcodeTaskSet.internalValue;
  }
}
export interface MpsProcessMediaOperationOutputStorageCosOutputStorage {
  /**
  * The bucket to which the output file of media processing is saved, such as `TopRankVideo-125xxx88`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#bucket MpsProcessMediaOperation#bucket}
  */
  readonly bucket?: string;
  /**
  * The region of the output bucket, such as `ap-chongqing`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#region MpsProcessMediaOperation#region}
  */
  readonly region?: string;
}

export function mpsProcessMediaOperationOutputStorageCosOutputStorageToTerraform(struct?: MpsProcessMediaOperationOutputStorageCosOutputStorageOutputReference | MpsProcessMediaOperationOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function mpsProcessMediaOperationOutputStorageCosOutputStorageToHclTerraform(struct?: MpsProcessMediaOperationOutputStorageCosOutputStorageOutputReference | MpsProcessMediaOperationOutputStorageCosOutputStorage): any {
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

export class MpsProcessMediaOperationOutputStorageCosOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationOutputStorageCosOutputStorage | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationOutputStorageCosOutputStorage | undefined) {
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
export interface MpsProcessMediaOperationOutputStorageS3OutputStorage {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_bucket MpsProcessMediaOperation#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_region MpsProcessMediaOperation#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_id MpsProcessMediaOperation#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_key MpsProcessMediaOperation#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsProcessMediaOperationOutputStorageS3OutputStorageToTerraform(struct?: MpsProcessMediaOperationOutputStorageS3OutputStorageOutputReference | MpsProcessMediaOperationOutputStorageS3OutputStorage): any {
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


export function mpsProcessMediaOperationOutputStorageS3OutputStorageToHclTerraform(struct?: MpsProcessMediaOperationOutputStorageS3OutputStorageOutputReference | MpsProcessMediaOperationOutputStorageS3OutputStorage): any {
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

export class MpsProcessMediaOperationOutputStorageS3OutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationOutputStorageS3OutputStorage | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationOutputStorageS3OutputStorage | undefined) {
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
export interface MpsProcessMediaOperationOutputStorage {
  /**
  * The storage type for a media processing output file. Valid values:`COS`: Tencent Cloud COS`&gt;AWS-S3`: AWS S3. This type is only supported for AWS tasks, and the output bucket must be in the same region as the bucket of the source file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#type MpsProcessMediaOperation#type}
  */
  readonly type: string;
  /**
  * cos_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#cos_output_storage MpsProcessMediaOperation#cos_output_storage}
  */
  readonly cosOutputStorage?: MpsProcessMediaOperationOutputStorageCosOutputStorage;
  /**
  * s3_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_output_storage MpsProcessMediaOperation#s3_output_storage}
  */
  readonly s3OutputStorage?: MpsProcessMediaOperationOutputStorageS3OutputStorage;
}

export function mpsProcessMediaOperationOutputStorageToTerraform(struct?: MpsProcessMediaOperationOutputStorageOutputReference | MpsProcessMediaOperationOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_output_storage: mpsProcessMediaOperationOutputStorageCosOutputStorageToTerraform(struct!.cosOutputStorage),
    s3_output_storage: mpsProcessMediaOperationOutputStorageS3OutputStorageToTerraform(struct!.s3OutputStorage),
  }
}


export function mpsProcessMediaOperationOutputStorageToHclTerraform(struct?: MpsProcessMediaOperationOutputStorageOutputReference | MpsProcessMediaOperationOutputStorage): any {
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
      value: mpsProcessMediaOperationOutputStorageCosOutputStorageToHclTerraform(struct!.cosOutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationOutputStorageCosOutputStorageList",
    },
    s3_output_storage: {
      value: mpsProcessMediaOperationOutputStorageS3OutputStorageToHclTerraform(struct!.s3OutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationOutputStorageS3OutputStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationOutputStorage | undefined {
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

  public set internalValue(value: MpsProcessMediaOperationOutputStorage | undefined) {
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
  private _cosOutputStorage = new MpsProcessMediaOperationOutputStorageCosOutputStorageOutputReference(this, "cos_output_storage");
  public get cosOutputStorage() {
    return this._cosOutputStorage;
  }
  public putCosOutputStorage(value: MpsProcessMediaOperationOutputStorageCosOutputStorage) {
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
  private _s3OutputStorage = new MpsProcessMediaOperationOutputStorageS3OutputStorageOutputReference(this, "s3_output_storage");
  public get s3OutputStorage() {
    return this._s3OutputStorage;
  }
  public putS3OutputStorage(value: MpsProcessMediaOperationOutputStorageS3OutputStorage) {
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
export interface MpsProcessMediaOperationTaskNotifyConfigAwsSqa {
  /**
  * The key ID required to read from/write to the SQS queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_id MpsProcessMediaOperation#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to read from/write to the SQS queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#s3_secret_key MpsProcessMediaOperation#s3_secret_key}
  */
  readonly s3SecretKey?: string;
  /**
  * The name of the SQS queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#sqa_queue_name MpsProcessMediaOperation#sqa_queue_name}
  */
  readonly sqaQueueName: string;
  /**
  * The region of the SQS queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#sqa_region MpsProcessMediaOperation#sqa_region}
  */
  readonly sqaRegion: string;
}

export function mpsProcessMediaOperationTaskNotifyConfigAwsSqaToTerraform(struct?: MpsProcessMediaOperationTaskNotifyConfigAwsSqaOutputReference | MpsProcessMediaOperationTaskNotifyConfigAwsSqa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_secret_id: cdktf.stringToTerraform(struct!.s3SecretId),
    s3_secret_key: cdktf.stringToTerraform(struct!.s3SecretKey),
    sqa_queue_name: cdktf.stringToTerraform(struct!.sqaQueueName),
    sqa_region: cdktf.stringToTerraform(struct!.sqaRegion),
  }
}


export function mpsProcessMediaOperationTaskNotifyConfigAwsSqaToHclTerraform(struct?: MpsProcessMediaOperationTaskNotifyConfigAwsSqaOutputReference | MpsProcessMediaOperationTaskNotifyConfigAwsSqa): any {
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
    sqa_queue_name: {
      value: cdktf.stringToHclTerraform(struct!.sqaQueueName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sqa_region: {
      value: cdktf.stringToHclTerraform(struct!.sqaRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationTaskNotifyConfigAwsSqaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationTaskNotifyConfigAwsSqa | undefined {
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
    if (this._sqaQueueName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqaQueueName = this._sqaQueueName;
    }
    if (this._sqaRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqaRegion = this._sqaRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsProcessMediaOperationTaskNotifyConfigAwsSqa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3SecretId = undefined;
      this._s3SecretKey = undefined;
      this._sqaQueueName = undefined;
      this._sqaRegion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3SecretId = value.s3SecretId;
      this._s3SecretKey = value.s3SecretKey;
      this._sqaQueueName = value.sqaQueueName;
      this._sqaRegion = value.sqaRegion;
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

  // sqa_queue_name - computed: false, optional: false, required: true
  private _sqaQueueName?: string; 
  public get sqaQueueName() {
    return this.getStringAttribute('sqa_queue_name');
  }
  public set sqaQueueName(value: string) {
    this._sqaQueueName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqaQueueNameInput() {
    return this._sqaQueueName;
  }

  // sqa_region - computed: false, optional: false, required: true
  private _sqaRegion?: string; 
  public get sqaRegion() {
    return this.getStringAttribute('sqa_region');
  }
  public set sqaRegion(value: string) {
    this._sqaRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqaRegionInput() {
    return this._sqaRegion;
  }
}
export interface MpsProcessMediaOperationTaskNotifyConfig {
  /**
  * The CMQ or TDMQ-CMQ model. Valid values: Queue, Topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#cmq_model MpsProcessMediaOperation#cmq_model}
  */
  readonly cmqModel?: string;
  /**
  * The CMQ or TDMQ-CMQ region, such as `sh` (Shanghai) or `bj` (Beijing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#cmq_region MpsProcessMediaOperation#cmq_region}
  */
  readonly cmqRegion?: string;
  /**
  * Workflow notification method. Valid values: Finish, Change. If this parameter is left empty, `Finish` will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#notify_mode MpsProcessMediaOperation#notify_mode}
  */
  readonly notifyMode?: string;
  /**
  * The notification type. Valid values:`CMQ`: This value is no longer used. Please use `TDMQ-CMQ` instead.`TDMQ-CMQ`: Message queue`URL`: If `NotifyType` is set to `URL`, HTTP callbacks are sent to the URL specified by `NotifyUrl`. HTTP and JSON are used for the callbacks. The packet contains the response parameters of the `ParseNotification` API.`SCF`: This notification type is not recommended. You need to configure it in the SCF console.`AWS-SQS`: AWS queue. This type is only supported for AWS tasks, and the queue must be in the same region as the AWS bucket.&lt;font color=red&gt;Note: If you do not pass this parameter or pass in an empty string, `CMQ` will be used. To use a different notification type, specify this parameter accordingly.&lt;/font&gt;.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#notify_type MpsProcessMediaOperation#notify_type}
  */
  readonly notifyType?: string;
  /**
  * HTTP callback URL, required if `NotifyType` is set to `URL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#notify_url MpsProcessMediaOperation#notify_url}
  */
  readonly notifyUrl?: string;
  /**
  * The CMQ or TDMQ-CMQ queue to receive notifications. This parameter is valid when `CmqModel` is `Queue`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#queue_name MpsProcessMediaOperation#queue_name}
  */
  readonly queueName?: string;
  /**
  * The CMQ or TDMQ-CMQ topic to receive notifications. This parameter is valid when `CmqModel` is `Topic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#topic_name MpsProcessMediaOperation#topic_name}
  */
  readonly topicName?: string;
  /**
  * aws_sqa block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#aws_sqa MpsProcessMediaOperation#aws_sqa}
  */
  readonly awsSqa?: MpsProcessMediaOperationTaskNotifyConfigAwsSqa;
}

export function mpsProcessMediaOperationTaskNotifyConfigToTerraform(struct?: MpsProcessMediaOperationTaskNotifyConfigOutputReference | MpsProcessMediaOperationTaskNotifyConfig): any {
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
    aws_sqa: mpsProcessMediaOperationTaskNotifyConfigAwsSqaToTerraform(struct!.awsSqa),
  }
}


export function mpsProcessMediaOperationTaskNotifyConfigToHclTerraform(struct?: MpsProcessMediaOperationTaskNotifyConfigOutputReference | MpsProcessMediaOperationTaskNotifyConfig): any {
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
    aws_sqa: {
      value: mpsProcessMediaOperationTaskNotifyConfigAwsSqaToHclTerraform(struct!.awsSqa),
      isBlock: true,
      type: "list",
      storageClassType: "MpsProcessMediaOperationTaskNotifyConfigAwsSqaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsProcessMediaOperationTaskNotifyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsProcessMediaOperationTaskNotifyConfig | undefined {
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
    if (this._awsSqa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSqa = this._awsSqa?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsProcessMediaOperationTaskNotifyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cmqModel = undefined;
      this._cmqRegion = undefined;
      this._notifyMode = undefined;
      this._notifyType = undefined;
      this._notifyUrl = undefined;
      this._queueName = undefined;
      this._topicName = undefined;
      this._awsSqa.internalValue = undefined;
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
      this._awsSqa.internalValue = value.awsSqa;
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

  // notify_mode - computed: false, optional: true, required: false
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

  // aws_sqa - computed: false, optional: true, required: false
  private _awsSqa = new MpsProcessMediaOperationTaskNotifyConfigAwsSqaOutputReference(this, "aws_sqa");
  public get awsSqa() {
    return this._awsSqa;
  }
  public putAwsSqa(value: MpsProcessMediaOperationTaskNotifyConfigAwsSqa) {
    this._awsSqa.internalValue = value;
  }
  public resetAwsSqa() {
    this._awsSqa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSqaInput() {
    return this._awsSqa.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation tencentcloud_mps_process_media_operation}
*/
export class MpsProcessMediaOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mps_process_media_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MpsProcessMediaOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MpsProcessMediaOperation to import
  * @param importFromId The id of the existing MpsProcessMediaOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MpsProcessMediaOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mps_process_media_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/mps_process_media_operation tencentcloud_mps_process_media_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MpsProcessMediaOperationConfig
  */
  public constructor(scope: Construct, id: string, config: MpsProcessMediaOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mps_process_media_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
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
    this._taskType = config.taskType;
    this._tasksPriority = config.tasksPriority;
    this._aiAnalysisTask.internalValue = config.aiAnalysisTask;
    this._aiContentReviewTask.internalValue = config.aiContentReviewTask;
    this._aiQualityControlTask.internalValue = config.aiQualityControlTask;
    this._aiRecognitionTask.internalValue = config.aiRecognitionTask;
    this._inputInfo.internalValue = config.inputInfo;
    this._mediaProcessTask.internalValue = config.mediaProcessTask;
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

  // task_type - computed: false, optional: true, required: false
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  public resetTaskType() {
    this._taskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // tasks_priority - computed: false, optional: true, required: false
  private _tasksPriority?: number; 
  public get tasksPriority() {
    return this.getNumberAttribute('tasks_priority');
  }
  public set tasksPriority(value: number) {
    this._tasksPriority = value;
  }
  public resetTasksPriority() {
    this._tasksPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksPriorityInput() {
    return this._tasksPriority;
  }

  // ai_analysis_task - computed: false, optional: true, required: false
  private _aiAnalysisTask = new MpsProcessMediaOperationAiAnalysisTaskOutputReference(this, "ai_analysis_task");
  public get aiAnalysisTask() {
    return this._aiAnalysisTask;
  }
  public putAiAnalysisTask(value: MpsProcessMediaOperationAiAnalysisTask) {
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
  private _aiContentReviewTask = new MpsProcessMediaOperationAiContentReviewTaskOutputReference(this, "ai_content_review_task");
  public get aiContentReviewTask() {
    return this._aiContentReviewTask;
  }
  public putAiContentReviewTask(value: MpsProcessMediaOperationAiContentReviewTask) {
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
  private _aiQualityControlTask = new MpsProcessMediaOperationAiQualityControlTaskOutputReference(this, "ai_quality_control_task");
  public get aiQualityControlTask() {
    return this._aiQualityControlTask;
  }
  public putAiQualityControlTask(value: MpsProcessMediaOperationAiQualityControlTask) {
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
  private _aiRecognitionTask = new MpsProcessMediaOperationAiRecognitionTaskOutputReference(this, "ai_recognition_task");
  public get aiRecognitionTask() {
    return this._aiRecognitionTask;
  }
  public putAiRecognitionTask(value: MpsProcessMediaOperationAiRecognitionTask) {
    this._aiRecognitionTask.internalValue = value;
  }
  public resetAiRecognitionTask() {
    this._aiRecognitionTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiRecognitionTaskInput() {
    return this._aiRecognitionTask.internalValue;
  }

  // input_info - computed: false, optional: false, required: true
  private _inputInfo = new MpsProcessMediaOperationInputInfoOutputReference(this, "input_info");
  public get inputInfo() {
    return this._inputInfo;
  }
  public putInputInfo(value: MpsProcessMediaOperationInputInfo) {
    this._inputInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInfoInput() {
    return this._inputInfo.internalValue;
  }

  // media_process_task - computed: false, optional: true, required: false
  private _mediaProcessTask = new MpsProcessMediaOperationMediaProcessTaskOutputReference(this, "media_process_task");
  public get mediaProcessTask() {
    return this._mediaProcessTask;
  }
  public putMediaProcessTask(value: MpsProcessMediaOperationMediaProcessTask) {
    this._mediaProcessTask.internalValue = value;
  }
  public resetMediaProcessTask() {
    this._mediaProcessTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaProcessTaskInput() {
    return this._mediaProcessTask.internalValue;
  }

  // output_storage - computed: false, optional: true, required: false
  private _outputStorage = new MpsProcessMediaOperationOutputStorageOutputReference(this, "output_storage");
  public get outputStorage() {
    return this._outputStorage;
  }
  public putOutputStorage(value: MpsProcessMediaOperationOutputStorage) {
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
  private _taskNotifyConfig = new MpsProcessMediaOperationTaskNotifyConfigOutputReference(this, "task_notify_config");
  public get taskNotifyConfig() {
    return this._taskNotifyConfig;
  }
  public putTaskNotifyConfig(value: MpsProcessMediaOperationTaskNotifyConfig) {
    this._taskNotifyConfig.internalValue = value;
  }
  public resetTaskNotifyConfig() {
    this._taskNotifyConfig.internalValue = undefined;
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
      task_type: cdktf.stringToTerraform(this._taskType),
      tasks_priority: cdktf.numberToTerraform(this._tasksPriority),
      ai_analysis_task: mpsProcessMediaOperationAiAnalysisTaskToTerraform(this._aiAnalysisTask.internalValue),
      ai_content_review_task: mpsProcessMediaOperationAiContentReviewTaskToTerraform(this._aiContentReviewTask.internalValue),
      ai_quality_control_task: mpsProcessMediaOperationAiQualityControlTaskToTerraform(this._aiQualityControlTask.internalValue),
      ai_recognition_task: mpsProcessMediaOperationAiRecognitionTaskToTerraform(this._aiRecognitionTask.internalValue),
      input_info: mpsProcessMediaOperationInputInfoToTerraform(this._inputInfo.internalValue),
      media_process_task: mpsProcessMediaOperationMediaProcessTaskToTerraform(this._mediaProcessTask.internalValue),
      output_storage: mpsProcessMediaOperationOutputStorageToTerraform(this._outputStorage.internalValue),
      task_notify_config: mpsProcessMediaOperationTaskNotifyConfigToTerraform(this._taskNotifyConfig.internalValue),
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
      task_type: {
        value: cdktf.stringToHclTerraform(this._taskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tasks_priority: {
        value: cdktf.numberToHclTerraform(this._tasksPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ai_analysis_task: {
        value: mpsProcessMediaOperationAiAnalysisTaskToHclTerraform(this._aiAnalysisTask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsProcessMediaOperationAiAnalysisTaskList",
      },
      ai_content_review_task: {
        value: mpsProcessMediaOperationAiContentReviewTaskToHclTerraform(this._aiContentReviewTask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsProcessMediaOperationAiContentReviewTaskList",
      },
      ai_quality_control_task: {
        value: mpsProcessMediaOperationAiQualityControlTaskToHclTerraform(this._aiQualityControlTask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsProcessMediaOperationAiQualityControlTaskList",
      },
      ai_recognition_task: {
        value: mpsProcessMediaOperationAiRecognitionTaskToHclTerraform(this._aiRecognitionTask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsProcessMediaOperationAiRecognitionTaskList",
      },
      input_info: {
        value: mpsProcessMediaOperationInputInfoToHclTerraform(this._inputInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsProcessMediaOperationInputInfoList",
      },
      media_process_task: {
        value: mpsProcessMediaOperationMediaProcessTaskToHclTerraform(this._mediaProcessTask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsProcessMediaOperationMediaProcessTaskList",
      },
      output_storage: {
        value: mpsProcessMediaOperationOutputStorageToHclTerraform(this._outputStorage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsProcessMediaOperationOutputStorageList",
      },
      task_notify_config: {
        value: mpsProcessMediaOperationTaskNotifyConfigToHclTerraform(this._taskNotifyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsProcessMediaOperationTaskNotifyConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
