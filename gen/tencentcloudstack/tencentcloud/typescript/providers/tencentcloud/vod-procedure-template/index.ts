// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VodProcedureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Template description. Length limit: 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#comment VodProcedureTemplate#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#id VodProcedureTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Task flow name (up to 20 characters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#name VodProcedureTemplate#name}
  */
  readonly name: string;
  /**
  * The VOD [application](https://intl.cloud.tencent.com/document/product/266/14574) ID. For customers who activate VOD service from December 25, 2023, if they want to access resources in a VOD application (whether it's the default application or a newly created one), they must fill in this field with the application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#sub_app_id VodProcedureTemplate#sub_app_id}
  */
  readonly subAppId?: number;
  /**
  * ai_analysis_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#ai_analysis_task VodProcedureTemplate#ai_analysis_task}
  */
  readonly aiAnalysisTask?: VodProcedureTemplateAiAnalysisTask;
  /**
  * ai_recognition_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#ai_recognition_task VodProcedureTemplate#ai_recognition_task}
  */
  readonly aiRecognitionTask?: VodProcedureTemplateAiRecognitionTask;
  /**
  * media_process_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#media_process_task VodProcedureTemplate#media_process_task}
  */
  readonly mediaProcessTask?: VodProcedureTemplateMediaProcessTask;
  /**
  * review_audio_video_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#review_audio_video_task VodProcedureTemplate#review_audio_video_task}
  */
  readonly reviewAudioVideoTask?: VodProcedureTemplateReviewAudioVideoTask;
}
export interface VodProcedureTemplateAiAnalysisTask {
  /**
  * Video content analysis template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#definition VodProcedureTemplate#definition}
  */
  readonly definition?: string;
}

export function vodProcedureTemplateAiAnalysisTaskToTerraform(struct?: VodProcedureTemplateAiAnalysisTaskOutputReference | VodProcedureTemplateAiAnalysisTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.stringToTerraform(struct!.definition),
  }
}


export function vodProcedureTemplateAiAnalysisTaskToHclTerraform(struct?: VodProcedureTemplateAiAnalysisTaskOutputReference | VodProcedureTemplateAiAnalysisTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.stringToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VodProcedureTemplateAiAnalysisTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VodProcedureTemplateAiAnalysisTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VodProcedureTemplateAiAnalysisTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._definition = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._definition = value.definition;
    }
  }

  // definition - computed: true, optional: true, required: false
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
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
export interface VodProcedureTemplateAiRecognitionTask {
  /**
  * Intelligent video recognition template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#definition VodProcedureTemplate#definition}
  */
  readonly definition?: string;
}

export function vodProcedureTemplateAiRecognitionTaskToTerraform(struct?: VodProcedureTemplateAiRecognitionTaskOutputReference | VodProcedureTemplateAiRecognitionTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.stringToTerraform(struct!.definition),
  }
}


export function vodProcedureTemplateAiRecognitionTaskToHclTerraform(struct?: VodProcedureTemplateAiRecognitionTaskOutputReference | VodProcedureTemplateAiRecognitionTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.stringToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VodProcedureTemplateAiRecognitionTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VodProcedureTemplateAiRecognitionTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VodProcedureTemplateAiRecognitionTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._definition = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._definition = value.definition;
    }
  }

  // definition - computed: true, optional: true, required: false
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
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
export interface VodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListWatermarkListStruct {
  /**
  * Watermarking template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#definition VodProcedureTemplate#definition}
  */
  readonly definition: string;
  /**
  * End time offset of a watermark in seconds. If this parameter is left blank or `0` is entered, the watermark will exist till the last video frame; If this value is greater than `0` (e.g., n), the watermark will exist till second n; If this value is smaller than `0` (e.g., -n), the watermark will exist till second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#end_time_offset VodProcedureTemplate#end_time_offset}
  */
  readonly endTimeOffset?: number;
  /**
  * Start time offset of a watermark in seconds. If this parameter is left blank or `0` is entered, the watermark will appear upon the first video frame. If this parameter is left blank or `0` is entered, the watermark will appear upon the first video frame; If this value is greater than `0` (e.g., n), the watermark will appear at second n after the first video frame; If this value is smaller than `0` (e.g., -n), the watermark will appear at second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#start_time_offset VodProcedureTemplate#start_time_offset}
  */
  readonly startTimeOffset?: number;
  /**
  * SVG content of up to `2000000` characters. This needs to be entered only when the watermark type is `SVG`. Note: this field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#svg_content VodProcedureTemplate#svg_content}
  */
  readonly svgContent?: string;
  /**
  * Text content of up to `100` characters. This needs to be entered only when the watermark type is text. Note: this field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#text_content VodProcedureTemplate#text_content}
  */
  readonly textContent?: string;
}

export function vodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListWatermarkListStructToTerraform(struct?: VodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListWatermarkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.stringToTerraform(struct!.definition),
    end_time_offset: cdktf.numberToTerraform(struct!.endTimeOffset),
    start_time_offset: cdktf.numberToTerraform(struct!.startTimeOffset),
    svg_content: cdktf.stringToTerraform(struct!.svgContent),
    text_content: cdktf.stringToTerraform(struct!.textContent),
  }
}


export function vodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListWatermarkListStructToHclTerraform(struct?: VodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListWatermarkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.stringToHclTerraform(struct!.definition),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListWatermarkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListWatermarkListStruct | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListWatermarkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._endTimeOffset = undefined;
      this._startTimeOffset = undefined;
      this._svgContent = undefined;
      this._textContent = undefined;
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
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
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
}

export class VodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListWatermarkListStructList extends cdktf.ComplexList {
  public internalValue? : VodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListWatermarkListStruct[] | cdktf.IResolvable

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
  public get(index: number): VodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListWatermarkListStructOutputReference {
    return new VodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListWatermarkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListStruct {
  /**
  * Adaptive bitrate streaming template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#definition VodProcedureTemplate#definition}
  */
  readonly definition: string;
  /**
  * Subtitle list, element is subtitle ID, support multiple subtitles, up to 16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#subtitle_list VodProcedureTemplate#subtitle_list}
  */
  readonly subtitleList?: string[];
  /**
  * watermark_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#watermark_list VodProcedureTemplate#watermark_list}
  */
  readonly watermarkList?: VodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListWatermarkListStruct[] | cdktf.IResolvable;
}

export function vodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListStructToTerraform(struct?: VodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.stringToTerraform(struct!.definition),
    subtitle_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subtitleList),
    watermark_list: cdktf.listMapper(vodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListWatermarkListStructToTerraform, true)(struct!.watermarkList),
  }
}


export function vodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListStructToHclTerraform(struct?: VodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.stringToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitle_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subtitleList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    watermark_list: {
      value: cdktf.listMapperHcl(vodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListWatermarkListStructToHclTerraform, true)(struct!.watermarkList),
      isBlock: true,
      type: "list",
      storageClassType: "VodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListWatermarkListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._subtitleList !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitleList = this._subtitleList;
    }
    if (this._watermarkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.watermarkList = this._watermarkList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._subtitleList = undefined;
      this._watermarkList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._subtitleList = value.subtitleList;
      this._watermarkList.internalValue = value.watermarkList;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // subtitle_list - computed: true, optional: true, required: false
  private _subtitleList?: string[]; 
  public get subtitleList() {
    return this.getListAttribute('subtitle_list');
  }
  public set subtitleList(value: string[]) {
    this._subtitleList = value;
  }
  public resetSubtitleList() {
    this._subtitleList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleListInput() {
    return this._subtitleList;
  }

  // watermark_list - computed: false, optional: true, required: false
  private _watermarkList = new VodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListWatermarkListStructList(this, "watermark_list", false);
  public get watermarkList() {
    return this._watermarkList;
  }
  public putWatermarkList(value: VodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListWatermarkListStruct[] | cdktf.IResolvable) {
    this._watermarkList.internalValue = value;
  }
  public resetWatermarkList() {
    this._watermarkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watermarkListInput() {
    return this._watermarkList.internalValue;
  }
}

export class VodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListStructList extends cdktf.ComplexList {
  public internalValue? : VodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListStruct[] | cdktf.IResolvable

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
  public get(index: number): VodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListStructOutputReference {
    return new VodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VodProcedureTemplateMediaProcessTaskAnimatedGraphicTaskListStruct {
  /**
  * Animated image generating template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#definition VodProcedureTemplate#definition}
  */
  readonly definition: string;
  /**
  * End time of animated image in video in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#end_time_offset VodProcedureTemplate#end_time_offset}
  */
  readonly endTimeOffset: number;
  /**
  * Start time of animated image in video in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#start_time_offset VodProcedureTemplate#start_time_offset}
  */
  readonly startTimeOffset: number;
}

export function vodProcedureTemplateMediaProcessTaskAnimatedGraphicTaskListStructToTerraform(struct?: VodProcedureTemplateMediaProcessTaskAnimatedGraphicTaskListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.stringToTerraform(struct!.definition),
    end_time_offset: cdktf.numberToTerraform(struct!.endTimeOffset),
    start_time_offset: cdktf.numberToTerraform(struct!.startTimeOffset),
  }
}


export function vodProcedureTemplateMediaProcessTaskAnimatedGraphicTaskListStructToHclTerraform(struct?: VodProcedureTemplateMediaProcessTaskAnimatedGraphicTaskListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.stringToHclTerraform(struct!.definition),
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
    start_time_offset: {
      value: cdktf.numberToHclTerraform(struct!.startTimeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VodProcedureTemplateMediaProcessTaskAnimatedGraphicTaskListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VodProcedureTemplateMediaProcessTaskAnimatedGraphicTaskListStruct | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VodProcedureTemplateMediaProcessTaskAnimatedGraphicTaskListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._endTimeOffset = undefined;
      this._startTimeOffset = undefined;
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
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
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
}

export class VodProcedureTemplateMediaProcessTaskAnimatedGraphicTaskListStructList extends cdktf.ComplexList {
  public internalValue? : VodProcedureTemplateMediaProcessTaskAnimatedGraphicTaskListStruct[] | cdktf.IResolvable

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
  public get(index: number): VodProcedureTemplateMediaProcessTaskAnimatedGraphicTaskListStructOutputReference {
    return new VodProcedureTemplateMediaProcessTaskAnimatedGraphicTaskListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListWatermarkListStruct {
  /**
  * Watermarking template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#definition VodProcedureTemplate#definition}
  */
  readonly definition: string;
  /**
  * End time offset of a watermark in seconds. If this parameter is left blank or `0` is entered, the watermark will exist till the last video frame; If this value is greater than `0` (e.g., n), the watermark will exist till second n; If this value is smaller than `0` (e.g., -n), the watermark will exist till second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#end_time_offset VodProcedureTemplate#end_time_offset}
  */
  readonly endTimeOffset?: number;
  /**
  * Start time offset of a watermark in seconds. If this parameter is left blank or `0` is entered, the watermark will appear upon the first video frame. If this parameter is left blank or `0` is entered, the watermark will appear upon the first video frame; If this value is greater than `0` (e.g., n), the watermark will appear at second n after the first video frame; If this value is smaller than `0` (e.g., -n), the watermark will appear at second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#start_time_offset VodProcedureTemplate#start_time_offset}
  */
  readonly startTimeOffset?: number;
  /**
  * SVG content of up to `2000000` characters. This needs to be entered only when the watermark type is `SVG`. Note: this field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#svg_content VodProcedureTemplate#svg_content}
  */
  readonly svgContent?: string;
  /**
  * Text content of up to `100` characters. This needs to be entered only when the watermark type is text. Note: this field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#text_content VodProcedureTemplate#text_content}
  */
  readonly textContent?: string;
}

export function vodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListWatermarkListStructToTerraform(struct?: VodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListWatermarkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.stringToTerraform(struct!.definition),
    end_time_offset: cdktf.numberToTerraform(struct!.endTimeOffset),
    start_time_offset: cdktf.numberToTerraform(struct!.startTimeOffset),
    svg_content: cdktf.stringToTerraform(struct!.svgContent),
    text_content: cdktf.stringToTerraform(struct!.textContent),
  }
}


export function vodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListWatermarkListStructToHclTerraform(struct?: VodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListWatermarkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.stringToHclTerraform(struct!.definition),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListWatermarkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListWatermarkListStruct | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListWatermarkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._endTimeOffset = undefined;
      this._startTimeOffset = undefined;
      this._svgContent = undefined;
      this._textContent = undefined;
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
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
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
}

export class VodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListWatermarkListStructList extends cdktf.ComplexList {
  public internalValue? : VodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListWatermarkListStruct[] | cdktf.IResolvable

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
  public get(index: number): VodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListWatermarkListStructOutputReference {
    return new VodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListWatermarkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListStruct {
  /**
  * Time point screen capturing template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#definition VodProcedureTemplate#definition}
  */
  readonly definition: string;
  /**
  * Screen capturing mode. Valid values: `Time`, `Percent`. `Time`: screen captures by time point, `Percent`: screen captures by percentage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#position_type VodProcedureTemplate#position_type}
  */
  readonly positionType: string;
  /**
  * Screenshot position: For time point screen capturing, this means to take a screenshot at a specified time point (in seconds) and use it as the cover. For percentage screen capturing, this value means to take a screenshot at a specified percentage of the video duration and use it as the cover.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#position_value VodProcedureTemplate#position_value}
  */
  readonly positionValue: number;
  /**
  * watermark_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#watermark_list VodProcedureTemplate#watermark_list}
  */
  readonly watermarkList?: VodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListWatermarkListStruct[] | cdktf.IResolvable;
}

export function vodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListStructToTerraform(struct?: VodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.stringToTerraform(struct!.definition),
    position_type: cdktf.stringToTerraform(struct!.positionType),
    position_value: cdktf.numberToTerraform(struct!.positionValue),
    watermark_list: cdktf.listMapper(vodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListWatermarkListStructToTerraform, true)(struct!.watermarkList),
  }
}


export function vodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListStructToHclTerraform(struct?: VodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.stringToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    position_type: {
      value: cdktf.stringToHclTerraform(struct!.positionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    position_value: {
      value: cdktf.numberToHclTerraform(struct!.positionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    watermark_list: {
      value: cdktf.listMapperHcl(vodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListWatermarkListStructToHclTerraform, true)(struct!.watermarkList),
      isBlock: true,
      type: "list",
      storageClassType: "VodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListWatermarkListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._positionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.positionType = this._positionType;
    }
    if (this._positionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.positionValue = this._positionValue;
    }
    if (this._watermarkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.watermarkList = this._watermarkList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._positionType = undefined;
      this._positionValue = undefined;
      this._watermarkList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._positionType = value.positionType;
      this._positionValue = value.positionValue;
      this._watermarkList.internalValue = value.watermarkList;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // position_type - computed: false, optional: false, required: true
  private _positionType?: string; 
  public get positionType() {
    return this.getStringAttribute('position_type');
  }
  public set positionType(value: string) {
    this._positionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionTypeInput() {
    return this._positionType;
  }

  // position_value - computed: false, optional: false, required: true
  private _positionValue?: number; 
  public get positionValue() {
    return this.getNumberAttribute('position_value');
  }
  public set positionValue(value: number) {
    this._positionValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionValueInput() {
    return this._positionValue;
  }

  // watermark_list - computed: false, optional: true, required: false
  private _watermarkList = new VodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListWatermarkListStructList(this, "watermark_list", false);
  public get watermarkList() {
    return this._watermarkList;
  }
  public putWatermarkList(value: VodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListWatermarkListStruct[] | cdktf.IResolvable) {
    this._watermarkList.internalValue = value;
  }
  public resetWatermarkList() {
    this._watermarkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watermarkListInput() {
    return this._watermarkList.internalValue;
  }
}

export class VodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListStructList extends cdktf.ComplexList {
  public internalValue? : VodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListStruct[] | cdktf.IResolvable

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
  public get(index: number): VodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListStructOutputReference {
    return new VodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VodProcedureTemplateMediaProcessTaskImageSpriteTaskListStruct {
  /**
  * Image sprite generating template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#definition VodProcedureTemplate#definition}
  */
  readonly definition: string;
}

export function vodProcedureTemplateMediaProcessTaskImageSpriteTaskListStructToTerraform(struct?: VodProcedureTemplateMediaProcessTaskImageSpriteTaskListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.stringToTerraform(struct!.definition),
  }
}


export function vodProcedureTemplateMediaProcessTaskImageSpriteTaskListStructToHclTerraform(struct?: VodProcedureTemplateMediaProcessTaskImageSpriteTaskListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.stringToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VodProcedureTemplateMediaProcessTaskImageSpriteTaskListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VodProcedureTemplateMediaProcessTaskImageSpriteTaskListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VodProcedureTemplateMediaProcessTaskImageSpriteTaskListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }
}

export class VodProcedureTemplateMediaProcessTaskImageSpriteTaskListStructList extends cdktf.ComplexList {
  public internalValue? : VodProcedureTemplateMediaProcessTaskImageSpriteTaskListStruct[] | cdktf.IResolvable

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
  public get(index: number): VodProcedureTemplateMediaProcessTaskImageSpriteTaskListStructOutputReference {
    return new VodProcedureTemplateMediaProcessTaskImageSpriteTaskListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListWatermarkListStruct {
  /**
  * Watermarking template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#definition VodProcedureTemplate#definition}
  */
  readonly definition: string;
  /**
  * End time offset of a watermark in seconds. If this parameter is left blank or `0` is entered, the watermark will exist till the last video frame; If this value is greater than `0` (e.g., n), the watermark will exist till second n; If this value is smaller than `0` (e.g., -n), the watermark will exist till second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#end_time_offset VodProcedureTemplate#end_time_offset}
  */
  readonly endTimeOffset?: number;
  /**
  * Start time offset of a watermark in seconds. If this parameter is left blank or `0` is entered, the watermark will appear upon the first video frame. If this parameter is left blank or `0` is entered, the watermark will appear upon the first video frame; If this value is greater than `0` (e.g., n), the watermark will appear at second n after the first video frame; If this value is smaller than `0` (e.g., -n), the watermark will appear at second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#start_time_offset VodProcedureTemplate#start_time_offset}
  */
  readonly startTimeOffset?: number;
  /**
  * SVG content of up to `2000000` characters. This needs to be entered only when the watermark type is `SVG`. Note: this field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#svg_content VodProcedureTemplate#svg_content}
  */
  readonly svgContent?: string;
  /**
  * Text content of up to `100` characters. This needs to be entered only when the watermark type is text. Note: this field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#text_content VodProcedureTemplate#text_content}
  */
  readonly textContent?: string;
}

export function vodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListWatermarkListStructToTerraform(struct?: VodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListWatermarkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.stringToTerraform(struct!.definition),
    end_time_offset: cdktf.numberToTerraform(struct!.endTimeOffset),
    start_time_offset: cdktf.numberToTerraform(struct!.startTimeOffset),
    svg_content: cdktf.stringToTerraform(struct!.svgContent),
    text_content: cdktf.stringToTerraform(struct!.textContent),
  }
}


export function vodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListWatermarkListStructToHclTerraform(struct?: VodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListWatermarkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.stringToHclTerraform(struct!.definition),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListWatermarkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListWatermarkListStruct | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListWatermarkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._endTimeOffset = undefined;
      this._startTimeOffset = undefined;
      this._svgContent = undefined;
      this._textContent = undefined;
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
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
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
}

export class VodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListWatermarkListStructList extends cdktf.ComplexList {
  public internalValue? : VodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListWatermarkListStruct[] | cdktf.IResolvable

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
  public get(index: number): VodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListWatermarkListStructOutputReference {
    return new VodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListWatermarkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListStruct {
  /**
  * Sampled screen capturing template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#definition VodProcedureTemplate#definition}
  */
  readonly definition: string;
  /**
  * watermark_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#watermark_list VodProcedureTemplate#watermark_list}
  */
  readonly watermarkList?: VodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListWatermarkListStruct[] | cdktf.IResolvable;
}

export function vodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListStructToTerraform(struct?: VodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.stringToTerraform(struct!.definition),
    watermark_list: cdktf.listMapper(vodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListWatermarkListStructToTerraform, true)(struct!.watermarkList),
  }
}


export function vodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListStructToHclTerraform(struct?: VodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.stringToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    watermark_list: {
      value: cdktf.listMapperHcl(vodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListWatermarkListStructToHclTerraform, true)(struct!.watermarkList),
      isBlock: true,
      type: "list",
      storageClassType: "VodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListWatermarkListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._watermarkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.watermarkList = this._watermarkList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._watermarkList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._watermarkList.internalValue = value.watermarkList;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // watermark_list - computed: false, optional: true, required: false
  private _watermarkList = new VodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListWatermarkListStructList(this, "watermark_list", false);
  public get watermarkList() {
    return this._watermarkList;
  }
  public putWatermarkList(value: VodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListWatermarkListStruct[] | cdktf.IResolvable) {
    this._watermarkList.internalValue = value;
  }
  public resetWatermarkList() {
    this._watermarkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watermarkListInput() {
    return this._watermarkList.internalValue;
  }
}

export class VodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListStructList extends cdktf.ComplexList {
  public internalValue? : VodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListStruct[] | cdktf.IResolvable

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
  public get(index: number): VodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListStructOutputReference {
    return new VodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListWatermarkListStruct {
  /**
  * Watermarking template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#definition VodProcedureTemplate#definition}
  */
  readonly definition: string;
  /**
  * End time offset of a watermark in seconds. If this parameter is left blank or `0` is entered, the watermark will exist till the last video frame; If this value is greater than `0` (e.g., n), the watermark will exist till second n; If this value is smaller than `0` (e.g., -n), the watermark will exist till second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#end_time_offset VodProcedureTemplate#end_time_offset}
  */
  readonly endTimeOffset?: number;
  /**
  * Start time offset of a watermark in seconds. If this parameter is left blank or `0` is entered, the watermark will appear upon the first video frame. If this parameter is left blank or `0` is entered, the watermark will appear upon the first video frame; If this value is greater than `0` (e.g., n), the watermark will appear at second n after the first video frame; If this value is smaller than `0` (e.g., -n), the watermark will appear at second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#start_time_offset VodProcedureTemplate#start_time_offset}
  */
  readonly startTimeOffset?: number;
  /**
  * SVG content of up to `2000000` characters. This needs to be entered only when the watermark type is `SVG`. Note: this field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#svg_content VodProcedureTemplate#svg_content}
  */
  readonly svgContent?: string;
  /**
  * Text content of up to `100` characters. This needs to be entered only when the watermark type is text. Note: this field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#text_content VodProcedureTemplate#text_content}
  */
  readonly textContent?: string;
}

export function vodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListWatermarkListStructToTerraform(struct?: VodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListWatermarkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.stringToTerraform(struct!.definition),
    end_time_offset: cdktf.numberToTerraform(struct!.endTimeOffset),
    start_time_offset: cdktf.numberToTerraform(struct!.startTimeOffset),
    svg_content: cdktf.stringToTerraform(struct!.svgContent),
    text_content: cdktf.stringToTerraform(struct!.textContent),
  }
}


export function vodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListWatermarkListStructToHclTerraform(struct?: VodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListWatermarkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.stringToHclTerraform(struct!.definition),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListWatermarkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListWatermarkListStruct | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListWatermarkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._endTimeOffset = undefined;
      this._startTimeOffset = undefined;
      this._svgContent = undefined;
      this._textContent = undefined;
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
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
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
}

export class VodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListWatermarkListStructList extends cdktf.ComplexList {
  public internalValue? : VodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListWatermarkListStruct[] | cdktf.IResolvable

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
  public get(index: number): VodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListWatermarkListStructOutputReference {
    return new VodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListWatermarkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListStruct {
  /**
  * Time point screen capturing template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#definition VodProcedureTemplate#definition}
  */
  readonly definition: string;
  /**
  * The list of screenshot time points. `s` and `%` formats are supported: When a time point string ends with `s`, its unit is second. For example, `3.5s` means the 3.5th second of the video; When a time point string ends with `%`, it is marked with corresponding percentage of the video duration. For example, `10%` means that the time point is at the 10% of the video entire duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#ext_time_offset_list VodProcedureTemplate#ext_time_offset_list}
  */
  readonly extTimeOffsetList?: string[];
  /**
  * List of time points for screencapturing in milliseconds. Note: this field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#time_offset_list VodProcedureTemplate#time_offset_list}
  */
  readonly timeOffsetList?: number[];
  /**
  * watermark_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#watermark_list VodProcedureTemplate#watermark_list}
  */
  readonly watermarkList?: VodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListWatermarkListStruct[] | cdktf.IResolvable;
}

export function vodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListStructToTerraform(struct?: VodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.stringToTerraform(struct!.definition),
    ext_time_offset_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extTimeOffsetList),
    time_offset_list: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.timeOffsetList),
    watermark_list: cdktf.listMapper(vodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListWatermarkListStructToTerraform, true)(struct!.watermarkList),
  }
}


export function vodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListStructToHclTerraform(struct?: VodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.stringToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ext_time_offset_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extTimeOffsetList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    time_offset_list: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.timeOffsetList),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    watermark_list: {
      value: cdktf.listMapperHcl(vodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListWatermarkListStructToHclTerraform, true)(struct!.watermarkList),
      isBlock: true,
      type: "list",
      storageClassType: "VodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListWatermarkListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._extTimeOffsetList !== undefined) {
      hasAnyValues = true;
      internalValueResult.extTimeOffsetList = this._extTimeOffsetList;
    }
    if (this._timeOffsetList !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOffsetList = this._timeOffsetList;
    }
    if (this._watermarkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.watermarkList = this._watermarkList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._extTimeOffsetList = undefined;
      this._timeOffsetList = undefined;
      this._watermarkList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
      this._extTimeOffsetList = value.extTimeOffsetList;
      this._timeOffsetList = value.timeOffsetList;
      this._watermarkList.internalValue = value.watermarkList;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // ext_time_offset_list - computed: false, optional: true, required: false
  private _extTimeOffsetList?: string[]; 
  public get extTimeOffsetList() {
    return this.getListAttribute('ext_time_offset_list');
  }
  public set extTimeOffsetList(value: string[]) {
    this._extTimeOffsetList = value;
  }
  public resetExtTimeOffsetList() {
    this._extTimeOffsetList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extTimeOffsetListInput() {
    return this._extTimeOffsetList;
  }

  // time_offset_list - computed: true, optional: true, required: false
  private _timeOffsetList?: number[]; 
  public get timeOffsetList() {
    return this.getNumberListAttribute('time_offset_list');
  }
  public set timeOffsetList(value: number[]) {
    this._timeOffsetList = value;
  }
  public resetTimeOffsetList() {
    this._timeOffsetList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOffsetListInput() {
    return this._timeOffsetList;
  }

  // watermark_list - computed: false, optional: true, required: false
  private _watermarkList = new VodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListWatermarkListStructList(this, "watermark_list", false);
  public get watermarkList() {
    return this._watermarkList;
  }
  public putWatermarkList(value: VodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListWatermarkListStruct[] | cdktf.IResolvable) {
    this._watermarkList.internalValue = value;
  }
  public resetWatermarkList() {
    this._watermarkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watermarkListInput() {
    return this._watermarkList.internalValue;
  }
}

export class VodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListStructList extends cdktf.ComplexList {
  public internalValue? : VodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListStruct[] | cdktf.IResolvable

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
  public get(index: number): VodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListStructOutputReference {
    return new VodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VodProcedureTemplateMediaProcessTaskTranscodeTaskListCopyRightWatermark {
  /**
  * Copyright information, maximum length is 200 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#text VodProcedureTemplate#text}
  */
  readonly text?: string;
}

export function vodProcedureTemplateMediaProcessTaskTranscodeTaskListCopyRightWatermarkToTerraform(struct?: VodProcedureTemplateMediaProcessTaskTranscodeTaskListCopyRightWatermarkOutputReference | VodProcedureTemplateMediaProcessTaskTranscodeTaskListCopyRightWatermark): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function vodProcedureTemplateMediaProcessTaskTranscodeTaskListCopyRightWatermarkToHclTerraform(struct?: VodProcedureTemplateMediaProcessTaskTranscodeTaskListCopyRightWatermarkOutputReference | VodProcedureTemplateMediaProcessTaskTranscodeTaskListCopyRightWatermark): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VodProcedureTemplateMediaProcessTaskTranscodeTaskListCopyRightWatermarkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VodProcedureTemplateMediaProcessTaskTranscodeTaskListCopyRightWatermark | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VodProcedureTemplateMediaProcessTaskTranscodeTaskListCopyRightWatermark | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._text = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._text = value.text;
    }
  }

  // text - computed: true, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface VodProcedureTemplateMediaProcessTaskTranscodeTaskListHeadTailListStruct {
  /**
  * Video opening/closing credits configuration template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#definition VodProcedureTemplate#definition}
  */
  readonly definition?: string;
}

export function vodProcedureTemplateMediaProcessTaskTranscodeTaskListHeadTailListStructToTerraform(struct?: VodProcedureTemplateMediaProcessTaskTranscodeTaskListHeadTailListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.stringToTerraform(struct!.definition),
  }
}


export function vodProcedureTemplateMediaProcessTaskTranscodeTaskListHeadTailListStructToHclTerraform(struct?: VodProcedureTemplateMediaProcessTaskTranscodeTaskListHeadTailListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.stringToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VodProcedureTemplateMediaProcessTaskTranscodeTaskListHeadTailListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VodProcedureTemplateMediaProcessTaskTranscodeTaskListHeadTailListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VodProcedureTemplateMediaProcessTaskTranscodeTaskListHeadTailListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definition = value.definition;
    }
  }

  // definition - computed: true, optional: true, required: false
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
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

export class VodProcedureTemplateMediaProcessTaskTranscodeTaskListHeadTailListStructList extends cdktf.ComplexList {
  public internalValue? : VodProcedureTemplateMediaProcessTaskTranscodeTaskListHeadTailListStruct[] | cdktf.IResolvable

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
  public get(index: number): VodProcedureTemplateMediaProcessTaskTranscodeTaskListHeadTailListStructOutputReference {
    return new VodProcedureTemplateMediaProcessTaskTranscodeTaskListHeadTailListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VodProcedureTemplateMediaProcessTaskTranscodeTaskListMosaicListStruct {
  /**
  * Origin position, which currently can only be: `TopLeft`: the origin of coordinates is in the top-left corner of the video, and the origin of the blur is in the top-left corner of the image or text. Default value: TopLeft.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#coordinate_origin VodProcedureTemplate#coordinate_origin}
  */
  readonly coordinateOrigin?: string;
  /**
  * End time offset of blur in seconds. If this parameter is left empty or `0` is entered, the blur will exist till the last video frame; If this value is greater than `0` (e.g., n), the blur will exist till second n; If this value is smaller than `0` (e.g., -n), the blur will exist till second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#end_time_offset VodProcedureTemplate#end_time_offset}
  */
  readonly endTimeOffset?: number;
  /**
  * Blur height. `%` and `px` formats are supported: If the string ends in `%`, the `height` of the blur will be the specified percentage of the video height; for example, 10% means that Height is 10% of the video height; If the string ends in `px`, the `height` of the blur will be in px; for example, 100px means that Height is 100 px. Default value: `10%`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#height VodProcedureTemplate#height}
  */
  readonly height?: string;
  /**
  * Start time offset of blur in seconds. If this parameter is left empty or `0` is entered, the blur will appear upon the first video frame. If this parameter is left empty or `0` is entered, the blur will appear upon the first video frame; If this value is greater than `0` (e.g., n), the blur will appear at second n after the first video frame; If this value is smaller than `0` (e.g., -n), the blur will appear at second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#start_time_offset VodProcedureTemplate#start_time_offset}
  */
  readonly startTimeOffset?: number;
  /**
  * Blur width. `%` and `px` formats are supported: If the string ends in `%`, the `width` of the blur will be the specified percentage of the video width; for example, 10% means that `width` is 10% of the video width; If the string ends in `px`, the `width` of the blur will be in px; for example, 100px means that Width is 100 px. Default value: `10%`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#width VodProcedureTemplate#width}
  */
  readonly width?: string;
  /**
  * The horizontal position of the origin of the blur relative to the origin of coordinates of the video. `%` and `px` formats are supported: If the string ends in `%`, the XPos of the blur will be the specified percentage of the video width; for example, 10% means that XPos is 10% of the video width; If the string ends in `px`, the XPos of the blur will be the specified px; for example, 100px means that XPos is 100 px. Default value: `0px`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#x_pos VodProcedureTemplate#x_pos}
  */
  readonly xPos?: string;
  /**
  * Vertical position of the origin of blur relative to the origin of coordinates of video. `%` and `px` formats are supported: If the string ends in `%`, the YPos of the blur will be the specified percentage of the video height; for example, 10% means that YPos is 10% of the video height; If the string ends in `px`, the YPos of the blur will be the specified px; for example, 100px means that YPos is 100 px. Default value: `0px`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#y_pos VodProcedureTemplate#y_pos}
  */
  readonly yPos?: string;
}

export function vodProcedureTemplateMediaProcessTaskTranscodeTaskListMosaicListStructToTerraform(struct?: VodProcedureTemplateMediaProcessTaskTranscodeTaskListMosaicListStruct | cdktf.IResolvable): any {
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


export function vodProcedureTemplateMediaProcessTaskTranscodeTaskListMosaicListStructToHclTerraform(struct?: VodProcedureTemplateMediaProcessTaskTranscodeTaskListMosaicListStruct | cdktf.IResolvable): any {
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

export class VodProcedureTemplateMediaProcessTaskTranscodeTaskListMosaicListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VodProcedureTemplateMediaProcessTaskTranscodeTaskListMosaicListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VodProcedureTemplateMediaProcessTaskTranscodeTaskListMosaicListStruct | cdktf.IResolvable | undefined) {
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

export class VodProcedureTemplateMediaProcessTaskTranscodeTaskListMosaicListStructList extends cdktf.ComplexList {
  public internalValue? : VodProcedureTemplateMediaProcessTaskTranscodeTaskListMosaicListStruct[] | cdktf.IResolvable

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
  public get(index: number): VodProcedureTemplateMediaProcessTaskTranscodeTaskListMosaicListStructOutputReference {
    return new VodProcedureTemplateMediaProcessTaskTranscodeTaskListMosaicListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VodProcedureTemplateMediaProcessTaskTranscodeTaskListTraceWatermark {
  /**
  * Whether to use digital watermarks. This parameter is required. Valid values: ON, OFF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#switch VodProcedureTemplate#switch}
  */
  readonly switch?: string;
}

export function vodProcedureTemplateMediaProcessTaskTranscodeTaskListTraceWatermarkToTerraform(struct?: VodProcedureTemplateMediaProcessTaskTranscodeTaskListTraceWatermarkOutputReference | VodProcedureTemplateMediaProcessTaskTranscodeTaskListTraceWatermark): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function vodProcedureTemplateMediaProcessTaskTranscodeTaskListTraceWatermarkToHclTerraform(struct?: VodProcedureTemplateMediaProcessTaskTranscodeTaskListTraceWatermarkOutputReference | VodProcedureTemplateMediaProcessTaskTranscodeTaskListTraceWatermark): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VodProcedureTemplateMediaProcessTaskTranscodeTaskListTraceWatermarkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VodProcedureTemplateMediaProcessTaskTranscodeTaskListTraceWatermark | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VodProcedureTemplateMediaProcessTaskTranscodeTaskListTraceWatermark | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
  }

  // switch - computed: true, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface VodProcedureTemplateMediaProcessTaskTranscodeTaskListWatermarkListStruct {
  /**
  * Watermarking template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#definition VodProcedureTemplate#definition}
  */
  readonly definition: string;
  /**
  * End time offset of a watermark in seconds. If this parameter is left blank or `0` is entered, the watermark will exist till the last video frame; If this value is greater than `0` (e.g., n), the watermark will exist till second n; If this value is smaller than `0` (e.g., -n), the watermark will exist till second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#end_time_offset VodProcedureTemplate#end_time_offset}
  */
  readonly endTimeOffset?: number;
  /**
  * Start time offset of a watermark in seconds. If this parameter is left blank or `0` is entered, the watermark will appear upon the first video frame. If this parameter is left blank or `0` is entered, the watermark will appear upon the first video frame; If this value is greater than `0` (e.g., n), the watermark will appear at second n after the first video frame; If this value is smaller than `0` (e.g., -n), the watermark will appear at second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#start_time_offset VodProcedureTemplate#start_time_offset}
  */
  readonly startTimeOffset?: number;
  /**
  * SVG content of up to `2000000` characters. This needs to be entered only when the watermark type is `SVG`. Note: this field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#svg_content VodProcedureTemplate#svg_content}
  */
  readonly svgContent?: string;
  /**
  * Text content of up to `100` characters. This needs to be entered only when the watermark type is text. Note: this field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#text_content VodProcedureTemplate#text_content}
  */
  readonly textContent?: string;
}

export function vodProcedureTemplateMediaProcessTaskTranscodeTaskListWatermarkListStructToTerraform(struct?: VodProcedureTemplateMediaProcessTaskTranscodeTaskListWatermarkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.stringToTerraform(struct!.definition),
    end_time_offset: cdktf.numberToTerraform(struct!.endTimeOffset),
    start_time_offset: cdktf.numberToTerraform(struct!.startTimeOffset),
    svg_content: cdktf.stringToTerraform(struct!.svgContent),
    text_content: cdktf.stringToTerraform(struct!.textContent),
  }
}


export function vodProcedureTemplateMediaProcessTaskTranscodeTaskListWatermarkListStructToHclTerraform(struct?: VodProcedureTemplateMediaProcessTaskTranscodeTaskListWatermarkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.stringToHclTerraform(struct!.definition),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VodProcedureTemplateMediaProcessTaskTranscodeTaskListWatermarkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VodProcedureTemplateMediaProcessTaskTranscodeTaskListWatermarkListStruct | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VodProcedureTemplateMediaProcessTaskTranscodeTaskListWatermarkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._endTimeOffset = undefined;
      this._startTimeOffset = undefined;
      this._svgContent = undefined;
      this._textContent = undefined;
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
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
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
}

export class VodProcedureTemplateMediaProcessTaskTranscodeTaskListWatermarkListStructList extends cdktf.ComplexList {
  public internalValue? : VodProcedureTemplateMediaProcessTaskTranscodeTaskListWatermarkListStruct[] | cdktf.IResolvable

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
  public get(index: number): VodProcedureTemplateMediaProcessTaskTranscodeTaskListWatermarkListStructOutputReference {
    return new VodProcedureTemplateMediaProcessTaskTranscodeTaskListWatermarkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VodProcedureTemplateMediaProcessTaskTranscodeTaskListStruct {
  /**
  * Video transcoding template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#definition VodProcedureTemplate#definition}
  */
  readonly definition: string;
  /**
  * End time offset of blur in seconds. If this parameter is left empty or `0` is entered, the blur will exist till the last video frame; If this value is greater than `0` (e.g., n), the blur will exist till second n; If this value is smaller than `0` (e.g., -n), the blur will exist till second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#end_time_offset VodProcedureTemplate#end_time_offset}
  */
  readonly endTimeOffset?: number;
  /**
  * Start time offset of blur in seconds. If this parameter is left empty or `0` is entered, the blur will appear upon the first video frame. If this parameter is left empty or `0` is entered, the blur will appear upon the first video frame; If this value is greater than `0` (e.g., n), the blur will appear at second n after the first video frame; If this value is smaller than `0` (e.g., -n), the blur will appear at second n before the last video frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#start_time_offset VodProcedureTemplate#start_time_offset}
  */
  readonly startTimeOffset?: number;
  /**
  * copy_right_watermark block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#copy_right_watermark VodProcedureTemplate#copy_right_watermark}
  */
  readonly copyRightWatermark?: VodProcedureTemplateMediaProcessTaskTranscodeTaskListCopyRightWatermark;
  /**
  * head_tail_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#head_tail_list VodProcedureTemplate#head_tail_list}
  */
  readonly headTailList?: VodProcedureTemplateMediaProcessTaskTranscodeTaskListHeadTailListStruct[] | cdktf.IResolvable;
  /**
  * mosaic_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#mosaic_list VodProcedureTemplate#mosaic_list}
  */
  readonly mosaicList?: VodProcedureTemplateMediaProcessTaskTranscodeTaskListMosaicListStruct[] | cdktf.IResolvable;
  /**
  * trace_watermark block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#trace_watermark VodProcedureTemplate#trace_watermark}
  */
  readonly traceWatermark?: VodProcedureTemplateMediaProcessTaskTranscodeTaskListTraceWatermark;
  /**
  * watermark_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#watermark_list VodProcedureTemplate#watermark_list}
  */
  readonly watermarkList?: VodProcedureTemplateMediaProcessTaskTranscodeTaskListWatermarkListStruct[] | cdktf.IResolvable;
}

export function vodProcedureTemplateMediaProcessTaskTranscodeTaskListStructToTerraform(struct?: VodProcedureTemplateMediaProcessTaskTranscodeTaskListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.stringToTerraform(struct!.definition),
    end_time_offset: cdktf.numberToTerraform(struct!.endTimeOffset),
    start_time_offset: cdktf.numberToTerraform(struct!.startTimeOffset),
    copy_right_watermark: vodProcedureTemplateMediaProcessTaskTranscodeTaskListCopyRightWatermarkToTerraform(struct!.copyRightWatermark),
    head_tail_list: cdktf.listMapper(vodProcedureTemplateMediaProcessTaskTranscodeTaskListHeadTailListStructToTerraform, true)(struct!.headTailList),
    mosaic_list: cdktf.listMapper(vodProcedureTemplateMediaProcessTaskTranscodeTaskListMosaicListStructToTerraform, true)(struct!.mosaicList),
    trace_watermark: vodProcedureTemplateMediaProcessTaskTranscodeTaskListTraceWatermarkToTerraform(struct!.traceWatermark),
    watermark_list: cdktf.listMapper(vodProcedureTemplateMediaProcessTaskTranscodeTaskListWatermarkListStructToTerraform, true)(struct!.watermarkList),
  }
}


export function vodProcedureTemplateMediaProcessTaskTranscodeTaskListStructToHclTerraform(struct?: VodProcedureTemplateMediaProcessTaskTranscodeTaskListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.stringToHclTerraform(struct!.definition),
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
    start_time_offset: {
      value: cdktf.numberToHclTerraform(struct!.startTimeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    copy_right_watermark: {
      value: vodProcedureTemplateMediaProcessTaskTranscodeTaskListCopyRightWatermarkToHclTerraform(struct!.copyRightWatermark),
      isBlock: true,
      type: "list",
      storageClassType: "VodProcedureTemplateMediaProcessTaskTranscodeTaskListCopyRightWatermarkList",
    },
    head_tail_list: {
      value: cdktf.listMapperHcl(vodProcedureTemplateMediaProcessTaskTranscodeTaskListHeadTailListStructToHclTerraform, true)(struct!.headTailList),
      isBlock: true,
      type: "list",
      storageClassType: "VodProcedureTemplateMediaProcessTaskTranscodeTaskListHeadTailListStructList",
    },
    mosaic_list: {
      value: cdktf.listMapperHcl(vodProcedureTemplateMediaProcessTaskTranscodeTaskListMosaicListStructToHclTerraform, true)(struct!.mosaicList),
      isBlock: true,
      type: "list",
      storageClassType: "VodProcedureTemplateMediaProcessTaskTranscodeTaskListMosaicListStructList",
    },
    trace_watermark: {
      value: vodProcedureTemplateMediaProcessTaskTranscodeTaskListTraceWatermarkToHclTerraform(struct!.traceWatermark),
      isBlock: true,
      type: "list",
      storageClassType: "VodProcedureTemplateMediaProcessTaskTranscodeTaskListTraceWatermarkList",
    },
    watermark_list: {
      value: cdktf.listMapperHcl(vodProcedureTemplateMediaProcessTaskTranscodeTaskListWatermarkListStructToHclTerraform, true)(struct!.watermarkList),
      isBlock: true,
      type: "list",
      storageClassType: "VodProcedureTemplateMediaProcessTaskTranscodeTaskListWatermarkListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VodProcedureTemplateMediaProcessTaskTranscodeTaskListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VodProcedureTemplateMediaProcessTaskTranscodeTaskListStruct | cdktf.IResolvable | undefined {
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
    if (this._copyRightWatermark?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyRightWatermark = this._copyRightWatermark?.internalValue;
    }
    if (this._headTailList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headTailList = this._headTailList?.internalValue;
    }
    if (this._mosaicList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mosaicList = this._mosaicList?.internalValue;
    }
    if (this._traceWatermark?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceWatermark = this._traceWatermark?.internalValue;
    }
    if (this._watermarkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.watermarkList = this._watermarkList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VodProcedureTemplateMediaProcessTaskTranscodeTaskListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definition = undefined;
      this._endTimeOffset = undefined;
      this._startTimeOffset = undefined;
      this._copyRightWatermark.internalValue = undefined;
      this._headTailList.internalValue = undefined;
      this._mosaicList.internalValue = undefined;
      this._traceWatermark.internalValue = undefined;
      this._watermarkList.internalValue = undefined;
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
      this._copyRightWatermark.internalValue = value.copyRightWatermark;
      this._headTailList.internalValue = value.headTailList;
      this._mosaicList.internalValue = value.mosaicList;
      this._traceWatermark.internalValue = value.traceWatermark;
      this._watermarkList.internalValue = value.watermarkList;
    }
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // end_time_offset - computed: true, optional: true, required: false
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

  // start_time_offset - computed: true, optional: true, required: false
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

  // copy_right_watermark - computed: false, optional: true, required: false
  private _copyRightWatermark = new VodProcedureTemplateMediaProcessTaskTranscodeTaskListCopyRightWatermarkOutputReference(this, "copy_right_watermark");
  public get copyRightWatermark() {
    return this._copyRightWatermark;
  }
  public putCopyRightWatermark(value: VodProcedureTemplateMediaProcessTaskTranscodeTaskListCopyRightWatermark) {
    this._copyRightWatermark.internalValue = value;
  }
  public resetCopyRightWatermark() {
    this._copyRightWatermark.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyRightWatermarkInput() {
    return this._copyRightWatermark.internalValue;
  }

  // head_tail_list - computed: false, optional: true, required: false
  private _headTailList = new VodProcedureTemplateMediaProcessTaskTranscodeTaskListHeadTailListStructList(this, "head_tail_list", false);
  public get headTailList() {
    return this._headTailList;
  }
  public putHeadTailList(value: VodProcedureTemplateMediaProcessTaskTranscodeTaskListHeadTailListStruct[] | cdktf.IResolvable) {
    this._headTailList.internalValue = value;
  }
  public resetHeadTailList() {
    this._headTailList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headTailListInput() {
    return this._headTailList.internalValue;
  }

  // mosaic_list - computed: false, optional: true, required: false
  private _mosaicList = new VodProcedureTemplateMediaProcessTaskTranscodeTaskListMosaicListStructList(this, "mosaic_list", false);
  public get mosaicList() {
    return this._mosaicList;
  }
  public putMosaicList(value: VodProcedureTemplateMediaProcessTaskTranscodeTaskListMosaicListStruct[] | cdktf.IResolvable) {
    this._mosaicList.internalValue = value;
  }
  public resetMosaicList() {
    this._mosaicList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mosaicListInput() {
    return this._mosaicList.internalValue;
  }

  // trace_watermark - computed: false, optional: true, required: false
  private _traceWatermark = new VodProcedureTemplateMediaProcessTaskTranscodeTaskListTraceWatermarkOutputReference(this, "trace_watermark");
  public get traceWatermark() {
    return this._traceWatermark;
  }
  public putTraceWatermark(value: VodProcedureTemplateMediaProcessTaskTranscodeTaskListTraceWatermark) {
    this._traceWatermark.internalValue = value;
  }
  public resetTraceWatermark() {
    this._traceWatermark.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceWatermarkInput() {
    return this._traceWatermark.internalValue;
  }

  // watermark_list - computed: false, optional: true, required: false
  private _watermarkList = new VodProcedureTemplateMediaProcessTaskTranscodeTaskListWatermarkListStructList(this, "watermark_list", false);
  public get watermarkList() {
    return this._watermarkList;
  }
  public putWatermarkList(value: VodProcedureTemplateMediaProcessTaskTranscodeTaskListWatermarkListStruct[] | cdktf.IResolvable) {
    this._watermarkList.internalValue = value;
  }
  public resetWatermarkList() {
    this._watermarkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watermarkListInput() {
    return this._watermarkList.internalValue;
  }
}

export class VodProcedureTemplateMediaProcessTaskTranscodeTaskListStructList extends cdktf.ComplexList {
  public internalValue? : VodProcedureTemplateMediaProcessTaskTranscodeTaskListStruct[] | cdktf.IResolvable

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
  public get(index: number): VodProcedureTemplateMediaProcessTaskTranscodeTaskListStructOutputReference {
    return new VodProcedureTemplateMediaProcessTaskTranscodeTaskListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VodProcedureTemplateMediaProcessTask {
  /**
  * adaptive_dynamic_streaming_task_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#adaptive_dynamic_streaming_task_list VodProcedureTemplate#adaptive_dynamic_streaming_task_list}
  */
  readonly adaptiveDynamicStreamingTaskList?: VodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListStruct[] | cdktf.IResolvable;
  /**
  * animated_graphic_task_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#animated_graphic_task_list VodProcedureTemplate#animated_graphic_task_list}
  */
  readonly animatedGraphicTaskList?: VodProcedureTemplateMediaProcessTaskAnimatedGraphicTaskListStruct[] | cdktf.IResolvable;
  /**
  * cover_by_snapshot_task_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#cover_by_snapshot_task_list VodProcedureTemplate#cover_by_snapshot_task_list}
  */
  readonly coverBySnapshotTaskList?: VodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListStruct[] | cdktf.IResolvable;
  /**
  * image_sprite_task_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#image_sprite_task_list VodProcedureTemplate#image_sprite_task_list}
  */
  readonly imageSpriteTaskList?: VodProcedureTemplateMediaProcessTaskImageSpriteTaskListStruct[] | cdktf.IResolvable;
  /**
  * sample_snapshot_task_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#sample_snapshot_task_list VodProcedureTemplate#sample_snapshot_task_list}
  */
  readonly sampleSnapshotTaskList?: VodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListStruct[] | cdktf.IResolvable;
  /**
  * snapshot_by_time_offset_task_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#snapshot_by_time_offset_task_list VodProcedureTemplate#snapshot_by_time_offset_task_list}
  */
  readonly snapshotByTimeOffsetTaskList?: VodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListStruct[] | cdktf.IResolvable;
  /**
  * transcode_task_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#transcode_task_list VodProcedureTemplate#transcode_task_list}
  */
  readonly transcodeTaskList?: VodProcedureTemplateMediaProcessTaskTranscodeTaskListStruct[] | cdktf.IResolvable;
}

export function vodProcedureTemplateMediaProcessTaskToTerraform(struct?: VodProcedureTemplateMediaProcessTaskOutputReference | VodProcedureTemplateMediaProcessTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adaptive_dynamic_streaming_task_list: cdktf.listMapper(vodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListStructToTerraform, true)(struct!.adaptiveDynamicStreamingTaskList),
    animated_graphic_task_list: cdktf.listMapper(vodProcedureTemplateMediaProcessTaskAnimatedGraphicTaskListStructToTerraform, true)(struct!.animatedGraphicTaskList),
    cover_by_snapshot_task_list: cdktf.listMapper(vodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListStructToTerraform, true)(struct!.coverBySnapshotTaskList),
    image_sprite_task_list: cdktf.listMapper(vodProcedureTemplateMediaProcessTaskImageSpriteTaskListStructToTerraform, true)(struct!.imageSpriteTaskList),
    sample_snapshot_task_list: cdktf.listMapper(vodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListStructToTerraform, true)(struct!.sampleSnapshotTaskList),
    snapshot_by_time_offset_task_list: cdktf.listMapper(vodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListStructToTerraform, true)(struct!.snapshotByTimeOffsetTaskList),
    transcode_task_list: cdktf.listMapper(vodProcedureTemplateMediaProcessTaskTranscodeTaskListStructToTerraform, true)(struct!.transcodeTaskList),
  }
}


export function vodProcedureTemplateMediaProcessTaskToHclTerraform(struct?: VodProcedureTemplateMediaProcessTaskOutputReference | VodProcedureTemplateMediaProcessTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adaptive_dynamic_streaming_task_list: {
      value: cdktf.listMapperHcl(vodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListStructToHclTerraform, true)(struct!.adaptiveDynamicStreamingTaskList),
      isBlock: true,
      type: "list",
      storageClassType: "VodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListStructList",
    },
    animated_graphic_task_list: {
      value: cdktf.listMapperHcl(vodProcedureTemplateMediaProcessTaskAnimatedGraphicTaskListStructToHclTerraform, true)(struct!.animatedGraphicTaskList),
      isBlock: true,
      type: "list",
      storageClassType: "VodProcedureTemplateMediaProcessTaskAnimatedGraphicTaskListStructList",
    },
    cover_by_snapshot_task_list: {
      value: cdktf.listMapperHcl(vodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListStructToHclTerraform, true)(struct!.coverBySnapshotTaskList),
      isBlock: true,
      type: "list",
      storageClassType: "VodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListStructList",
    },
    image_sprite_task_list: {
      value: cdktf.listMapperHcl(vodProcedureTemplateMediaProcessTaskImageSpriteTaskListStructToHclTerraform, true)(struct!.imageSpriteTaskList),
      isBlock: true,
      type: "list",
      storageClassType: "VodProcedureTemplateMediaProcessTaskImageSpriteTaskListStructList",
    },
    sample_snapshot_task_list: {
      value: cdktf.listMapperHcl(vodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListStructToHclTerraform, true)(struct!.sampleSnapshotTaskList),
      isBlock: true,
      type: "list",
      storageClassType: "VodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListStructList",
    },
    snapshot_by_time_offset_task_list: {
      value: cdktf.listMapperHcl(vodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListStructToHclTerraform, true)(struct!.snapshotByTimeOffsetTaskList),
      isBlock: true,
      type: "list",
      storageClassType: "VodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListStructList",
    },
    transcode_task_list: {
      value: cdktf.listMapperHcl(vodProcedureTemplateMediaProcessTaskTranscodeTaskListStructToHclTerraform, true)(struct!.transcodeTaskList),
      isBlock: true,
      type: "list",
      storageClassType: "VodProcedureTemplateMediaProcessTaskTranscodeTaskListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VodProcedureTemplateMediaProcessTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VodProcedureTemplateMediaProcessTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adaptiveDynamicStreamingTaskList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adaptiveDynamicStreamingTaskList = this._adaptiveDynamicStreamingTaskList?.internalValue;
    }
    if (this._animatedGraphicTaskList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.animatedGraphicTaskList = this._animatedGraphicTaskList?.internalValue;
    }
    if (this._coverBySnapshotTaskList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coverBySnapshotTaskList = this._coverBySnapshotTaskList?.internalValue;
    }
    if (this._imageSpriteTaskList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageSpriteTaskList = this._imageSpriteTaskList?.internalValue;
    }
    if (this._sampleSnapshotTaskList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleSnapshotTaskList = this._sampleSnapshotTaskList?.internalValue;
    }
    if (this._snapshotByTimeOffsetTaskList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotByTimeOffsetTaskList = this._snapshotByTimeOffsetTaskList?.internalValue;
    }
    if (this._transcodeTaskList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transcodeTaskList = this._transcodeTaskList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VodProcedureTemplateMediaProcessTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adaptiveDynamicStreamingTaskList.internalValue = undefined;
      this._animatedGraphicTaskList.internalValue = undefined;
      this._coverBySnapshotTaskList.internalValue = undefined;
      this._imageSpriteTaskList.internalValue = undefined;
      this._sampleSnapshotTaskList.internalValue = undefined;
      this._snapshotByTimeOffsetTaskList.internalValue = undefined;
      this._transcodeTaskList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adaptiveDynamicStreamingTaskList.internalValue = value.adaptiveDynamicStreamingTaskList;
      this._animatedGraphicTaskList.internalValue = value.animatedGraphicTaskList;
      this._coverBySnapshotTaskList.internalValue = value.coverBySnapshotTaskList;
      this._imageSpriteTaskList.internalValue = value.imageSpriteTaskList;
      this._sampleSnapshotTaskList.internalValue = value.sampleSnapshotTaskList;
      this._snapshotByTimeOffsetTaskList.internalValue = value.snapshotByTimeOffsetTaskList;
      this._transcodeTaskList.internalValue = value.transcodeTaskList;
    }
  }

  // adaptive_dynamic_streaming_task_list - computed: false, optional: true, required: false
  private _adaptiveDynamicStreamingTaskList = new VodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListStructList(this, "adaptive_dynamic_streaming_task_list", false);
  public get adaptiveDynamicStreamingTaskList() {
    return this._adaptiveDynamicStreamingTaskList;
  }
  public putAdaptiveDynamicStreamingTaskList(value: VodProcedureTemplateMediaProcessTaskAdaptiveDynamicStreamingTaskListStruct[] | cdktf.IResolvable) {
    this._adaptiveDynamicStreamingTaskList.internalValue = value;
  }
  public resetAdaptiveDynamicStreamingTaskList() {
    this._adaptiveDynamicStreamingTaskList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveDynamicStreamingTaskListInput() {
    return this._adaptiveDynamicStreamingTaskList.internalValue;
  }

  // animated_graphic_task_list - computed: false, optional: true, required: false
  private _animatedGraphicTaskList = new VodProcedureTemplateMediaProcessTaskAnimatedGraphicTaskListStructList(this, "animated_graphic_task_list", false);
  public get animatedGraphicTaskList() {
    return this._animatedGraphicTaskList;
  }
  public putAnimatedGraphicTaskList(value: VodProcedureTemplateMediaProcessTaskAnimatedGraphicTaskListStruct[] | cdktf.IResolvable) {
    this._animatedGraphicTaskList.internalValue = value;
  }
  public resetAnimatedGraphicTaskList() {
    this._animatedGraphicTaskList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get animatedGraphicTaskListInput() {
    return this._animatedGraphicTaskList.internalValue;
  }

  // cover_by_snapshot_task_list - computed: false, optional: true, required: false
  private _coverBySnapshotTaskList = new VodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListStructList(this, "cover_by_snapshot_task_list", false);
  public get coverBySnapshotTaskList() {
    return this._coverBySnapshotTaskList;
  }
  public putCoverBySnapshotTaskList(value: VodProcedureTemplateMediaProcessTaskCoverBySnapshotTaskListStruct[] | cdktf.IResolvable) {
    this._coverBySnapshotTaskList.internalValue = value;
  }
  public resetCoverBySnapshotTaskList() {
    this._coverBySnapshotTaskList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coverBySnapshotTaskListInput() {
    return this._coverBySnapshotTaskList.internalValue;
  }

  // image_sprite_task_list - computed: false, optional: true, required: false
  private _imageSpriteTaskList = new VodProcedureTemplateMediaProcessTaskImageSpriteTaskListStructList(this, "image_sprite_task_list", false);
  public get imageSpriteTaskList() {
    return this._imageSpriteTaskList;
  }
  public putImageSpriteTaskList(value: VodProcedureTemplateMediaProcessTaskImageSpriteTaskListStruct[] | cdktf.IResolvable) {
    this._imageSpriteTaskList.internalValue = value;
  }
  public resetImageSpriteTaskList() {
    this._imageSpriteTaskList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSpriteTaskListInput() {
    return this._imageSpriteTaskList.internalValue;
  }

  // sample_snapshot_task_list - computed: false, optional: true, required: false
  private _sampleSnapshotTaskList = new VodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListStructList(this, "sample_snapshot_task_list", false);
  public get sampleSnapshotTaskList() {
    return this._sampleSnapshotTaskList;
  }
  public putSampleSnapshotTaskList(value: VodProcedureTemplateMediaProcessTaskSampleSnapshotTaskListStruct[] | cdktf.IResolvable) {
    this._sampleSnapshotTaskList.internalValue = value;
  }
  public resetSampleSnapshotTaskList() {
    this._sampleSnapshotTaskList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleSnapshotTaskListInput() {
    return this._sampleSnapshotTaskList.internalValue;
  }

  // snapshot_by_time_offset_task_list - computed: false, optional: true, required: false
  private _snapshotByTimeOffsetTaskList = new VodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListStructList(this, "snapshot_by_time_offset_task_list", false);
  public get snapshotByTimeOffsetTaskList() {
    return this._snapshotByTimeOffsetTaskList;
  }
  public putSnapshotByTimeOffsetTaskList(value: VodProcedureTemplateMediaProcessTaskSnapshotByTimeOffsetTaskListStruct[] | cdktf.IResolvable) {
    this._snapshotByTimeOffsetTaskList.internalValue = value;
  }
  public resetSnapshotByTimeOffsetTaskList() {
    this._snapshotByTimeOffsetTaskList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotByTimeOffsetTaskListInput() {
    return this._snapshotByTimeOffsetTaskList.internalValue;
  }

  // transcode_task_list - computed: false, optional: true, required: false
  private _transcodeTaskList = new VodProcedureTemplateMediaProcessTaskTranscodeTaskListStructList(this, "transcode_task_list", false);
  public get transcodeTaskList() {
    return this._transcodeTaskList;
  }
  public putTranscodeTaskList(value: VodProcedureTemplateMediaProcessTaskTranscodeTaskListStruct[] | cdktf.IResolvable) {
    this._transcodeTaskList.internalValue = value;
  }
  public resetTranscodeTaskList() {
    this._transcodeTaskList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transcodeTaskListInput() {
    return this._transcodeTaskList.internalValue;
  }
}
export interface VodProcedureTemplateReviewAudioVideoTask {
  /**
  * Review template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#definition VodProcedureTemplate#definition}
  */
  readonly definition?: string;
  /**
  * The type of moderated content. Valid values:
  * - `Media`: The original audio/video;
  * - `Cover`: Thumbnails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#review_contents VodProcedureTemplate#review_contents}
  */
  readonly reviewContents?: string[];
}

export function vodProcedureTemplateReviewAudioVideoTaskToTerraform(struct?: VodProcedureTemplateReviewAudioVideoTaskOutputReference | VodProcedureTemplateReviewAudioVideoTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition: cdktf.stringToTerraform(struct!.definition),
    review_contents: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reviewContents),
  }
}


export function vodProcedureTemplateReviewAudioVideoTaskToHclTerraform(struct?: VodProcedureTemplateReviewAudioVideoTaskOutputReference | VodProcedureTemplateReviewAudioVideoTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition: {
      value: cdktf.stringToHclTerraform(struct!.definition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    review_contents: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reviewContents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VodProcedureTemplateReviewAudioVideoTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VodProcedureTemplateReviewAudioVideoTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definition !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition;
    }
    if (this._reviewContents !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewContents = this._reviewContents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VodProcedureTemplateReviewAudioVideoTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._definition = undefined;
      this._reviewContents = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._definition = value.definition;
      this._reviewContents = value.reviewContents;
    }
  }

  // definition - computed: true, optional: true, required: false
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  public resetDefinition() {
    this._definition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // review_contents - computed: true, optional: true, required: false
  private _reviewContents?: string[]; 
  public get reviewContents() {
    return this.getListAttribute('review_contents');
  }
  public set reviewContents(value: string[]) {
    this._reviewContents = value;
  }
  public resetReviewContents() {
    this._reviewContents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewContentsInput() {
    return this._reviewContents;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template tencentcloud_vod_procedure_template}
*/
export class VodProcedureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vod_procedure_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VodProcedureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VodProcedureTemplate to import
  * @param importFromId The id of the existing VodProcedureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VodProcedureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vod_procedure_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/vod_procedure_template tencentcloud_vod_procedure_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VodProcedureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: VodProcedureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vod_procedure_template',
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
    this._comment = config.comment;
    this._id = config.id;
    this._name = config.name;
    this._subAppId = config.subAppId;
    this._aiAnalysisTask.internalValue = config.aiAnalysisTask;
    this._aiRecognitionTask.internalValue = config.aiRecognitionTask;
    this._mediaProcessTask.internalValue = config.mediaProcessTask;
    this._reviewAudioVideoTask.internalValue = config.reviewAudioVideoTask;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // sub_app_id - computed: false, optional: true, required: false
  private _subAppId?: number; 
  public get subAppId() {
    return this.getNumberAttribute('sub_app_id');
  }
  public set subAppId(value: number) {
    this._subAppId = value;
  }
  public resetSubAppId() {
    this._subAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subAppIdInput() {
    return this._subAppId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // ai_analysis_task - computed: false, optional: true, required: false
  private _aiAnalysisTask = new VodProcedureTemplateAiAnalysisTaskOutputReference(this, "ai_analysis_task");
  public get aiAnalysisTask() {
    return this._aiAnalysisTask;
  }
  public putAiAnalysisTask(value: VodProcedureTemplateAiAnalysisTask) {
    this._aiAnalysisTask.internalValue = value;
  }
  public resetAiAnalysisTask() {
    this._aiAnalysisTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiAnalysisTaskInput() {
    return this._aiAnalysisTask.internalValue;
  }

  // ai_recognition_task - computed: false, optional: true, required: false
  private _aiRecognitionTask = new VodProcedureTemplateAiRecognitionTaskOutputReference(this, "ai_recognition_task");
  public get aiRecognitionTask() {
    return this._aiRecognitionTask;
  }
  public putAiRecognitionTask(value: VodProcedureTemplateAiRecognitionTask) {
    this._aiRecognitionTask.internalValue = value;
  }
  public resetAiRecognitionTask() {
    this._aiRecognitionTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiRecognitionTaskInput() {
    return this._aiRecognitionTask.internalValue;
  }

  // media_process_task - computed: false, optional: true, required: false
  private _mediaProcessTask = new VodProcedureTemplateMediaProcessTaskOutputReference(this, "media_process_task");
  public get mediaProcessTask() {
    return this._mediaProcessTask;
  }
  public putMediaProcessTask(value: VodProcedureTemplateMediaProcessTask) {
    this._mediaProcessTask.internalValue = value;
  }
  public resetMediaProcessTask() {
    this._mediaProcessTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaProcessTaskInput() {
    return this._mediaProcessTask.internalValue;
  }

  // review_audio_video_task - computed: false, optional: true, required: false
  private _reviewAudioVideoTask = new VodProcedureTemplateReviewAudioVideoTaskOutputReference(this, "review_audio_video_task");
  public get reviewAudioVideoTask() {
    return this._reviewAudioVideoTask;
  }
  public putReviewAudioVideoTask(value: VodProcedureTemplateReviewAudioVideoTask) {
    this._reviewAudioVideoTask.internalValue = value;
  }
  public resetReviewAudioVideoTask() {
    this._reviewAudioVideoTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewAudioVideoTaskInput() {
    return this._reviewAudioVideoTask.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      sub_app_id: cdktf.numberToTerraform(this._subAppId),
      ai_analysis_task: vodProcedureTemplateAiAnalysisTaskToTerraform(this._aiAnalysisTask.internalValue),
      ai_recognition_task: vodProcedureTemplateAiRecognitionTaskToTerraform(this._aiRecognitionTask.internalValue),
      media_process_task: vodProcedureTemplateMediaProcessTaskToTerraform(this._mediaProcessTask.internalValue),
      review_audio_video_task: vodProcedureTemplateReviewAudioVideoTaskToTerraform(this._reviewAudioVideoTask.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_app_id: {
        value: cdktf.numberToHclTerraform(this._subAppId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ai_analysis_task: {
        value: vodProcedureTemplateAiAnalysisTaskToHclTerraform(this._aiAnalysisTask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VodProcedureTemplateAiAnalysisTaskList",
      },
      ai_recognition_task: {
        value: vodProcedureTemplateAiRecognitionTaskToHclTerraform(this._aiRecognitionTask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VodProcedureTemplateAiRecognitionTaskList",
      },
      media_process_task: {
        value: vodProcedureTemplateMediaProcessTaskToHclTerraform(this._mediaProcessTask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VodProcedureTemplateMediaProcessTaskList",
      },
      review_audio_video_task: {
        value: vodProcedureTemplateReviewAudioVideoTaskToHclTerraform(this._reviewAudioVideoTask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VodProcedureTemplateReviewAudioVideoTaskList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
