// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/vod_procedure_templates
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudVodProcedureTemplatesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/vod_procedure_templates#id DataTencentcloudVodProcedureTemplates#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of procedure template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/vod_procedure_templates#name DataTencentcloudVodProcedureTemplates#name}
  */
  readonly name?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/vod_procedure_templates#result_output_file DataTencentcloudVodProcedureTemplates#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Subapplication ID in VOD. If you need to access a resource in a subapplication, enter the subapplication ID in this field; otherwise, leave it empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/vod_procedure_templates#sub_app_id DataTencentcloudVodProcedureTemplates#sub_app_id}
  */
  readonly subAppId?: number;
  /**
  * Template type filter. Valid values: `Preset`, `Custom`. `Preset`: preset template; `Custom`: custom template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/vod_procedure_templates#type DataTencentcloudVodProcedureTemplates#type}
  */
  readonly type?: string;
}
export interface DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAdaptiveDynamicStreamingTaskListWatermarkListStruct {
}

export function dataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAdaptiveDynamicStreamingTaskListWatermarkListStructToTerraform(struct?: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAdaptiveDynamicStreamingTaskListWatermarkListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAdaptiveDynamicStreamingTaskListWatermarkListStructToHclTerraform(struct?: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAdaptiveDynamicStreamingTaskListWatermarkListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAdaptiveDynamicStreamingTaskListWatermarkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAdaptiveDynamicStreamingTaskListWatermarkListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAdaptiveDynamicStreamingTaskListWatermarkListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getStringAttribute('definition');
  }

  // end_time_offset - computed: true, optional: false, required: false
  public get endTimeOffset() {
    return this.getNumberAttribute('end_time_offset');
  }

  // start_time_offset - computed: true, optional: false, required: false
  public get startTimeOffset() {
    return this.getNumberAttribute('start_time_offset');
  }

  // svg_content - computed: true, optional: false, required: false
  public get svgContent() {
    return this.getStringAttribute('svg_content');
  }

  // text_content - computed: true, optional: false, required: false
  public get textContent() {
    return this.getStringAttribute('text_content');
  }
}

export class DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAdaptiveDynamicStreamingTaskListWatermarkListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAdaptiveDynamicStreamingTaskListWatermarkListStructOutputReference {
    return new DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAdaptiveDynamicStreamingTaskListWatermarkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAdaptiveDynamicStreamingTaskListStruct {
}

export function dataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAdaptiveDynamicStreamingTaskListStructToTerraform(struct?: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAdaptiveDynamicStreamingTaskListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAdaptiveDynamicStreamingTaskListStructToHclTerraform(struct?: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAdaptiveDynamicStreamingTaskListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAdaptiveDynamicStreamingTaskListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAdaptiveDynamicStreamingTaskListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAdaptiveDynamicStreamingTaskListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getStringAttribute('definition');
  }

  // watermark_list - computed: true, optional: false, required: false
  private _watermarkList = new DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAdaptiveDynamicStreamingTaskListWatermarkListStructList(this, "watermark_list", false);
  public get watermarkList() {
    return this._watermarkList;
  }
}

export class DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAdaptiveDynamicStreamingTaskListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAdaptiveDynamicStreamingTaskListStructOutputReference {
    return new DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAdaptiveDynamicStreamingTaskListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAnimatedGraphicTaskListStruct {
}

export function dataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAnimatedGraphicTaskListStructToTerraform(struct?: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAnimatedGraphicTaskListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAnimatedGraphicTaskListStructToHclTerraform(struct?: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAnimatedGraphicTaskListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAnimatedGraphicTaskListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAnimatedGraphicTaskListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAnimatedGraphicTaskListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getStringAttribute('definition');
  }

  // end_time_offset - computed: true, optional: false, required: false
  public get endTimeOffset() {
    return this.getNumberAttribute('end_time_offset');
  }

  // start_time_offset - computed: true, optional: false, required: false
  public get startTimeOffset() {
    return this.getNumberAttribute('start_time_offset');
  }
}

export class DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAnimatedGraphicTaskListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAnimatedGraphicTaskListStructOutputReference {
    return new DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAnimatedGraphicTaskListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskCoverBySnapshotTaskListWatermarkListStruct {
}

export function dataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskCoverBySnapshotTaskListWatermarkListStructToTerraform(struct?: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskCoverBySnapshotTaskListWatermarkListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskCoverBySnapshotTaskListWatermarkListStructToHclTerraform(struct?: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskCoverBySnapshotTaskListWatermarkListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskCoverBySnapshotTaskListWatermarkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskCoverBySnapshotTaskListWatermarkListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskCoverBySnapshotTaskListWatermarkListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getStringAttribute('definition');
  }

  // end_time_offset - computed: true, optional: false, required: false
  public get endTimeOffset() {
    return this.getNumberAttribute('end_time_offset');
  }

  // start_time_offset - computed: true, optional: false, required: false
  public get startTimeOffset() {
    return this.getNumberAttribute('start_time_offset');
  }

  // svg_content - computed: true, optional: false, required: false
  public get svgContent() {
    return this.getStringAttribute('svg_content');
  }

  // text_content - computed: true, optional: false, required: false
  public get textContent() {
    return this.getStringAttribute('text_content');
  }
}

export class DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskCoverBySnapshotTaskListWatermarkListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskCoverBySnapshotTaskListWatermarkListStructOutputReference {
    return new DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskCoverBySnapshotTaskListWatermarkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskCoverBySnapshotTaskListStruct {
}

export function dataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskCoverBySnapshotTaskListStructToTerraform(struct?: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskCoverBySnapshotTaskListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskCoverBySnapshotTaskListStructToHclTerraform(struct?: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskCoverBySnapshotTaskListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskCoverBySnapshotTaskListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskCoverBySnapshotTaskListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskCoverBySnapshotTaskListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getStringAttribute('definition');
  }

  // position_type - computed: true, optional: false, required: false
  public get positionType() {
    return this.getStringAttribute('position_type');
  }

  // position_value - computed: true, optional: false, required: false
  public get positionValue() {
    return this.getNumberAttribute('position_value');
  }

  // watermark_list - computed: true, optional: false, required: false
  private _watermarkList = new DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskCoverBySnapshotTaskListWatermarkListStructList(this, "watermark_list", false);
  public get watermarkList() {
    return this._watermarkList;
  }
}

export class DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskCoverBySnapshotTaskListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskCoverBySnapshotTaskListStructOutputReference {
    return new DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskCoverBySnapshotTaskListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskImageSpriteTaskListStruct {
}

export function dataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskImageSpriteTaskListStructToTerraform(struct?: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskImageSpriteTaskListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskImageSpriteTaskListStructToHclTerraform(struct?: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskImageSpriteTaskListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskImageSpriteTaskListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskImageSpriteTaskListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskImageSpriteTaskListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getStringAttribute('definition');
  }
}

export class DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskImageSpriteTaskListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskImageSpriteTaskListStructOutputReference {
    return new DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskImageSpriteTaskListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSampleSnapshotTaskListWatermarkListStruct {
}

export function dataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSampleSnapshotTaskListWatermarkListStructToTerraform(struct?: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSampleSnapshotTaskListWatermarkListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSampleSnapshotTaskListWatermarkListStructToHclTerraform(struct?: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSampleSnapshotTaskListWatermarkListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSampleSnapshotTaskListWatermarkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSampleSnapshotTaskListWatermarkListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSampleSnapshotTaskListWatermarkListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getStringAttribute('definition');
  }

  // end_time_offset - computed: true, optional: false, required: false
  public get endTimeOffset() {
    return this.getNumberAttribute('end_time_offset');
  }

  // start_time_offset - computed: true, optional: false, required: false
  public get startTimeOffset() {
    return this.getNumberAttribute('start_time_offset');
  }

  // svg_content - computed: true, optional: false, required: false
  public get svgContent() {
    return this.getStringAttribute('svg_content');
  }

  // text_content - computed: true, optional: false, required: false
  public get textContent() {
    return this.getStringAttribute('text_content');
  }
}

export class DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSampleSnapshotTaskListWatermarkListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSampleSnapshotTaskListWatermarkListStructOutputReference {
    return new DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSampleSnapshotTaskListWatermarkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSampleSnapshotTaskListStruct {
}

export function dataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSampleSnapshotTaskListStructToTerraform(struct?: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSampleSnapshotTaskListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSampleSnapshotTaskListStructToHclTerraform(struct?: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSampleSnapshotTaskListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSampleSnapshotTaskListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSampleSnapshotTaskListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSampleSnapshotTaskListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getStringAttribute('definition');
  }

  // watermark_list - computed: true, optional: false, required: false
  private _watermarkList = new DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSampleSnapshotTaskListWatermarkListStructList(this, "watermark_list", false);
  public get watermarkList() {
    return this._watermarkList;
  }
}

export class DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSampleSnapshotTaskListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSampleSnapshotTaskListStructOutputReference {
    return new DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSampleSnapshotTaskListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSnapshotByTimeOffsetTaskListWatermarkListStruct {
}

export function dataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSnapshotByTimeOffsetTaskListWatermarkListStructToTerraform(struct?: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSnapshotByTimeOffsetTaskListWatermarkListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSnapshotByTimeOffsetTaskListWatermarkListStructToHclTerraform(struct?: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSnapshotByTimeOffsetTaskListWatermarkListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSnapshotByTimeOffsetTaskListWatermarkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSnapshotByTimeOffsetTaskListWatermarkListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSnapshotByTimeOffsetTaskListWatermarkListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getStringAttribute('definition');
  }

  // end_time_offset - computed: true, optional: false, required: false
  public get endTimeOffset() {
    return this.getNumberAttribute('end_time_offset');
  }

  // start_time_offset - computed: true, optional: false, required: false
  public get startTimeOffset() {
    return this.getNumberAttribute('start_time_offset');
  }

  // svg_content - computed: true, optional: false, required: false
  public get svgContent() {
    return this.getStringAttribute('svg_content');
  }

  // text_content - computed: true, optional: false, required: false
  public get textContent() {
    return this.getStringAttribute('text_content');
  }
}

export class DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSnapshotByTimeOffsetTaskListWatermarkListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSnapshotByTimeOffsetTaskListWatermarkListStructOutputReference {
    return new DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSnapshotByTimeOffsetTaskListWatermarkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSnapshotByTimeOffsetTaskListStruct {
}

export function dataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSnapshotByTimeOffsetTaskListStructToTerraform(struct?: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSnapshotByTimeOffsetTaskListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSnapshotByTimeOffsetTaskListStructToHclTerraform(struct?: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSnapshotByTimeOffsetTaskListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSnapshotByTimeOffsetTaskListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSnapshotByTimeOffsetTaskListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSnapshotByTimeOffsetTaskListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getStringAttribute('definition');
  }

  // ext_time_offset_list - computed: true, optional: false, required: false
  public get extTimeOffsetList() {
    return this.getListAttribute('ext_time_offset_list');
  }

  // watermark_list - computed: true, optional: false, required: false
  private _watermarkList = new DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSnapshotByTimeOffsetTaskListWatermarkListStructList(this, "watermark_list", false);
  public get watermarkList() {
    return this._watermarkList;
  }
}

export class DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSnapshotByTimeOffsetTaskListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSnapshotByTimeOffsetTaskListStructOutputReference {
    return new DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSnapshotByTimeOffsetTaskListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListMosaicListStruct {
}

export function dataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListMosaicListStructToTerraform(struct?: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListMosaicListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListMosaicListStructToHclTerraform(struct?: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListMosaicListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListMosaicListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListMosaicListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListMosaicListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // coordinate_origin - computed: true, optional: false, required: false
  public get coordinateOrigin() {
    return this.getStringAttribute('coordinate_origin');
  }

  // end_time_offset - computed: true, optional: false, required: false
  public get endTimeOffset() {
    return this.getNumberAttribute('end_time_offset');
  }

  // height - computed: true, optional: false, required: false
  public get height() {
    return this.getStringAttribute('height');
  }

  // start_time_offset - computed: true, optional: false, required: false
  public get startTimeOffset() {
    return this.getNumberAttribute('start_time_offset');
  }

  // width - computed: true, optional: false, required: false
  public get width() {
    return this.getStringAttribute('width');
  }

  // x_pos - computed: true, optional: false, required: false
  public get xPos() {
    return this.getStringAttribute('x_pos');
  }

  // y_pos - computed: true, optional: false, required: false
  public get yPos() {
    return this.getStringAttribute('y_pos');
  }
}

export class DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListMosaicListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListMosaicListStructOutputReference {
    return new DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListMosaicListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListWatermarkListStruct {
}

export function dataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListWatermarkListStructToTerraform(struct?: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListWatermarkListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListWatermarkListStructToHclTerraform(struct?: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListWatermarkListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListWatermarkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListWatermarkListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListWatermarkListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getStringAttribute('definition');
  }

  // end_time_offset - computed: true, optional: false, required: false
  public get endTimeOffset() {
    return this.getNumberAttribute('end_time_offset');
  }

  // start_time_offset - computed: true, optional: false, required: false
  public get startTimeOffset() {
    return this.getNumberAttribute('start_time_offset');
  }

  // svg_content - computed: true, optional: false, required: false
  public get svgContent() {
    return this.getStringAttribute('svg_content');
  }

  // text_content - computed: true, optional: false, required: false
  public get textContent() {
    return this.getStringAttribute('text_content');
  }
}

export class DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListWatermarkListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListWatermarkListStructOutputReference {
    return new DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListWatermarkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListStruct {
}

export function dataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListStructToTerraform(struct?: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListStructToHclTerraform(struct?: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getStringAttribute('definition');
  }

  // mosaic_list - computed: true, optional: false, required: false
  private _mosaicList = new DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListMosaicListStructList(this, "mosaic_list", false);
  public get mosaicList() {
    return this._mosaicList;
  }

  // watermark_list - computed: true, optional: false, required: false
  private _watermarkList = new DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListWatermarkListStructList(this, "watermark_list", false);
  public get watermarkList() {
    return this._watermarkList;
  }
}

export class DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListStructOutputReference {
    return new DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTask {
}

export function dataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskToTerraform(struct?: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskToHclTerraform(struct?: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // adaptive_dynamic_streaming_task_list - computed: true, optional: false, required: false
  private _adaptiveDynamicStreamingTaskList = new DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAdaptiveDynamicStreamingTaskListStructList(this, "adaptive_dynamic_streaming_task_list", false);
  public get adaptiveDynamicStreamingTaskList() {
    return this._adaptiveDynamicStreamingTaskList;
  }

  // animated_graphic_task_list - computed: true, optional: false, required: false
  private _animatedGraphicTaskList = new DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskAnimatedGraphicTaskListStructList(this, "animated_graphic_task_list", false);
  public get animatedGraphicTaskList() {
    return this._animatedGraphicTaskList;
  }

  // cover_by_snapshot_task_list - computed: true, optional: false, required: false
  private _coverBySnapshotTaskList = new DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskCoverBySnapshotTaskListStructList(this, "cover_by_snapshot_task_list", false);
  public get coverBySnapshotTaskList() {
    return this._coverBySnapshotTaskList;
  }

  // image_sprite_task_list - computed: true, optional: false, required: false
  private _imageSpriteTaskList = new DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskImageSpriteTaskListStructList(this, "image_sprite_task_list", false);
  public get imageSpriteTaskList() {
    return this._imageSpriteTaskList;
  }

  // sample_snapshot_task_list - computed: true, optional: false, required: false
  private _sampleSnapshotTaskList = new DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSampleSnapshotTaskListStructList(this, "sample_snapshot_task_list", false);
  public get sampleSnapshotTaskList() {
    return this._sampleSnapshotTaskList;
  }

  // snapshot_by_time_offset_task_list - computed: true, optional: false, required: false
  private _snapshotByTimeOffsetTaskList = new DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskSnapshotByTimeOffsetTaskListStructList(this, "snapshot_by_time_offset_task_list", false);
  public get snapshotByTimeOffsetTaskList() {
    return this._snapshotByTimeOffsetTaskList;
  }

  // transcode_task_list - computed: true, optional: false, required: false
  private _transcodeTaskList = new DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskTranscodeTaskListStructList(this, "transcode_task_list", false);
  public get transcodeTaskList() {
    return this._transcodeTaskList;
  }
}

export class DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskOutputReference {
    return new DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudVodProcedureTemplatesTemplateListStruct {
}

export function dataTencentcloudVodProcedureTemplatesTemplateListStructToTerraform(struct?: DataTencentcloudVodProcedureTemplatesTemplateListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudVodProcedureTemplatesTemplateListStructToHclTerraform(struct?: DataTencentcloudVodProcedureTemplatesTemplateListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudVodProcedureTemplatesTemplateListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudVodProcedureTemplatesTemplateListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudVodProcedureTemplatesTemplateListStruct | undefined) {
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

  // media_process_task - computed: true, optional: false, required: false
  private _mediaProcessTask = new DataTencentcloudVodProcedureTemplatesTemplateListMediaProcessTaskList(this, "media_process_task", false);
  public get mediaProcessTask() {
    return this._mediaProcessTask;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

export class DataTencentcloudVodProcedureTemplatesTemplateListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudVodProcedureTemplatesTemplateListStructOutputReference {
    return new DataTencentcloudVodProcedureTemplatesTemplateListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/vod_procedure_templates tencentcloud_vod_procedure_templates}
*/
export class DataTencentcloudVodProcedureTemplates extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vod_procedure_templates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudVodProcedureTemplates resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudVodProcedureTemplates to import
  * @param importFromId The id of the existing DataTencentcloudVodProcedureTemplates that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/vod_procedure_templates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudVodProcedureTemplates to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vod_procedure_templates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/vod_procedure_templates tencentcloud_vod_procedure_templates} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudVodProcedureTemplatesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudVodProcedureTemplatesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vod_procedure_templates',
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
    this._name = config.name;
    this._resultOutputFile = config.resultOutputFile;
    this._subAppId = config.subAppId;
    this._type = config.type;
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
  private _templateList = new DataTencentcloudVodProcedureTemplatesTemplateListStructList(this, "template_list", false);
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      sub_app_id: cdktf.numberToTerraform(this._subAppId),
      type: cdktf.stringToTerraform(this._type),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
