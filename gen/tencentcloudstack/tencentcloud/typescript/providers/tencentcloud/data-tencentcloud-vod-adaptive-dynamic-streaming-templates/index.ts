// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/vod_adaptive_dynamic_streaming_templates
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudVodAdaptiveDynamicStreamingTemplatesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique ID filter of adaptive dynamic streaming template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/vod_adaptive_dynamic_streaming_templates#definition DataTencentcloudVodAdaptiveDynamicStreamingTemplates#definition}
  */
  readonly definition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/vod_adaptive_dynamic_streaming_templates#id DataTencentcloudVodAdaptiveDynamicStreamingTemplates#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/vod_adaptive_dynamic_streaming_templates#result_output_file DataTencentcloudVodAdaptiveDynamicStreamingTemplates#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Subapplication ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/vod_adaptive_dynamic_streaming_templates#sub_app_id DataTencentcloudVodAdaptiveDynamicStreamingTemplates#sub_app_id}
  */
  readonly subAppId?: number;
  /**
  * Template type filter. Valid values: `Preset`, `Custom`. `Preset`: preset template; `Custom`: custom template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/vod_adaptive_dynamic_streaming_templates#type DataTencentcloudVodAdaptiveDynamicStreamingTemplates#type}
  */
  readonly type?: string;
}
export interface DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoAudio {
}

export function dataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoAudioToTerraform(struct?: DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoAudioToHclTerraform(struct?: DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoAudio): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoAudioOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoAudio | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoAudio | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio_channel - computed: true, optional: false, required: false
  public get audioChannel() {
    return this.getStringAttribute('audio_channel');
  }

  // bitrate - computed: true, optional: false, required: false
  public get bitrate() {
    return this.getNumberAttribute('bitrate');
  }

  // codec - computed: true, optional: false, required: false
  public get codec() {
    return this.getStringAttribute('codec');
  }

  // sample_rate - computed: true, optional: false, required: false
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
}

export class DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoAudioList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoAudioOutputReference {
    return new DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoAudioOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoVideo {
}

export function dataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoVideoToTerraform(struct?: DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoVideo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoVideoToHclTerraform(struct?: DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoVideo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoVideoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoVideo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoVideo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bitrate - computed: true, optional: false, required: false
  public get bitrate() {
    return this.getNumberAttribute('bitrate');
  }

  // codec - computed: true, optional: false, required: false
  public get codec() {
    return this.getStringAttribute('codec');
  }

  // fill_type - computed: true, optional: false, required: false
  public get fillType() {
    return this.getStringAttribute('fill_type');
  }

  // fps - computed: true, optional: false, required: false
  public get fps() {
    return this.getNumberAttribute('fps');
  }

  // height - computed: true, optional: false, required: false
  public get height() {
    return this.getNumberAttribute('height');
  }

  // resolution_adaptive - computed: true, optional: false, required: false
  public get resolutionAdaptive() {
    return this.getBooleanAttribute('resolution_adaptive');
  }

  // width - computed: true, optional: false, required: false
  public get width() {
    return this.getNumberAttribute('width');
  }
}

export class DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoVideoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoVideoOutputReference {
    return new DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoVideoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfo {
}

export function dataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoToTerraform(struct?: DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoToHclTerraform(struct?: DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio - computed: true, optional: false, required: false
  private _audio = new DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoAudioList(this, "audio", false);
  public get audio() {
    return this._audio;
  }

  // remove_audio - computed: true, optional: false, required: false
  public get removeAudio() {
    return this.getBooleanAttribute('remove_audio');
  }

  // video - computed: true, optional: false, required: false
  private _video = new DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoVideoList(this, "video", false);
  public get video() {
    return this._video;
  }
}

export class DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoOutputReference {
    return new DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStruct {
}

export function dataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStructToTerraform(struct?: DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStructToHclTerraform(struct?: DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getStringAttribute('definition');
  }

  // disable_higher_video_bitrate - computed: true, optional: false, required: false
  public get disableHigherVideoBitrate() {
    return this.getBooleanAttribute('disable_higher_video_bitrate');
  }

  // disable_higher_video_resolution - computed: true, optional: false, required: false
  public get disableHigherVideoResolution() {
    return this.getBooleanAttribute('disable_higher_video_resolution');
  }

  // drm_type - computed: true, optional: false, required: false
  public get drmType() {
    return this.getStringAttribute('drm_type');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // stream_info - computed: true, optional: false, required: false
  private _streamInfo = new DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStreamInfoList(this, "stream_info", false);
  public get streamInfo() {
    return this._streamInfo;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStructOutputReference {
    return new DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/vod_adaptive_dynamic_streaming_templates tencentcloud_vod_adaptive_dynamic_streaming_templates}
*/
export class DataTencentcloudVodAdaptiveDynamicStreamingTemplates extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vod_adaptive_dynamic_streaming_templates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudVodAdaptiveDynamicStreamingTemplates resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudVodAdaptiveDynamicStreamingTemplates to import
  * @param importFromId The id of the existing DataTencentcloudVodAdaptiveDynamicStreamingTemplates that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/vod_adaptive_dynamic_streaming_templates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudVodAdaptiveDynamicStreamingTemplates to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vod_adaptive_dynamic_streaming_templates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/vod_adaptive_dynamic_streaming_templates tencentcloud_vod_adaptive_dynamic_streaming_templates} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudVodAdaptiveDynamicStreamingTemplatesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudVodAdaptiveDynamicStreamingTemplatesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vod_adaptive_dynamic_streaming_templates',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._definition = config.definition;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
    this._subAppId = config.subAppId;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // definition - computed: false, optional: true, required: false
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

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
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

  // template_list - computed: true, optional: false, required: false
  private _templateList = new DataTencentcloudVodAdaptiveDynamicStreamingTemplatesTemplateListStructList(this, "template_list", false);
  public get templateList() {
    return this._templateList;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      definition: cdktf.stringToTerraform(this._definition),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      sub_app_id: cdktf.numberToTerraform(this._subAppId),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      definition: {
        value: cdktf.stringToHclTerraform(this._definition),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
