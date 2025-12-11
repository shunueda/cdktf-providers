// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_data_transform
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClsDataTransformConfig extends cdktf.TerraformMetaArguments {
  /**
  * Task enable flag. `1`: enable, `2`: disable, Default is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_data_transform#enable_flag ClsDataTransform#enable_flag}
  */
  readonly enableFlag?: number;
  /**
  * Data transform content. If `func_type` is `2`, must use `log_auto_output`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_data_transform#etl_content ClsDataTransform#etl_content}
  */
  readonly etlContent: string;
  /**
  * Task type. `1`: Specify the theme; `2`: Dynamic creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_data_transform#func_type ClsDataTransform#func_type}
  */
  readonly funcType: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_data_transform#id ClsDataTransform#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Task name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_data_transform#name ClsDataTransform#name}
  */
  readonly name: string;
  /**
  * Source topic ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_data_transform#src_topic_id ClsDataTransform#src_topic_id}
  */
  readonly srcTopicId: string;
  /**
  * Task type. `1`: Use random data from the source log theme for processing preview; `2`: Use user-defined test data for processing preview; `3`: Create real machining tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_data_transform#task_type ClsDataTransform#task_type}
  */
  readonly taskType: number;
  /**
  * dst_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_data_transform#dst_resources ClsDataTransform#dst_resources}
  */
  readonly dstResources?: ClsDataTransformDstResources[] | cdktf.IResolvable;
}
export interface ClsDataTransformDstResources {
  /**
  * Alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_data_transform#alias ClsDataTransform#alias}
  */
  readonly alias: string;
  /**
  * Dst topic ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_data_transform#topic_id ClsDataTransform#topic_id}
  */
  readonly topicId: string;
}

export function clsDataTransformDstResourcesToTerraform(struct?: ClsDataTransformDstResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    topic_id: cdktf.stringToTerraform(struct!.topicId),
  }
}


export function clsDataTransformDstResourcesToHclTerraform(struct?: ClsDataTransformDstResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_id: {
      value: cdktf.stringToHclTerraform(struct!.topicId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsDataTransformDstResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClsDataTransformDstResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._topicId !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicId = this._topicId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsDataTransformDstResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._topicId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._topicId = value.topicId;
    }
  }

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // topic_id - computed: false, optional: false, required: true
  private _topicId?: string; 
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
  public set topicId(value: string) {
    this._topicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicIdInput() {
    return this._topicId;
  }
}

export class ClsDataTransformDstResourcesList extends cdktf.ComplexList {
  public internalValue? : ClsDataTransformDstResources[] | cdktf.IResolvable

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
  public get(index: number): ClsDataTransformDstResourcesOutputReference {
    return new ClsDataTransformDstResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_data_transform tencentcloud_cls_data_transform}
*/
export class ClsDataTransform extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cls_data_transform";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClsDataTransform resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClsDataTransform to import
  * @param importFromId The id of the existing ClsDataTransform that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_data_transform#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClsDataTransform to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cls_data_transform", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_data_transform tencentcloud_cls_data_transform} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClsDataTransformConfig
  */
  public constructor(scope: Construct, id: string, config: ClsDataTransformConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cls_data_transform',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableFlag = config.enableFlag;
    this._etlContent = config.etlContent;
    this._funcType = config.funcType;
    this._id = config.id;
    this._name = config.name;
    this._srcTopicId = config.srcTopicId;
    this._taskType = config.taskType;
    this._dstResources.internalValue = config.dstResources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_flag - computed: false, optional: true, required: false
  private _enableFlag?: number; 
  public get enableFlag() {
    return this.getNumberAttribute('enable_flag');
  }
  public set enableFlag(value: number) {
    this._enableFlag = value;
  }
  public resetEnableFlag() {
    this._enableFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFlagInput() {
    return this._enableFlag;
  }

  // etl_content - computed: false, optional: false, required: true
  private _etlContent?: string; 
  public get etlContent() {
    return this.getStringAttribute('etl_content');
  }
  public set etlContent(value: string) {
    this._etlContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get etlContentInput() {
    return this._etlContent;
  }

  // func_type - computed: false, optional: false, required: true
  private _funcType?: number; 
  public get funcType() {
    return this.getNumberAttribute('func_type');
  }
  public set funcType(value: number) {
    this._funcType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get funcTypeInput() {
    return this._funcType;
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

  // src_topic_id - computed: false, optional: false, required: true
  private _srcTopicId?: string; 
  public get srcTopicId() {
    return this.getStringAttribute('src_topic_id');
  }
  public set srcTopicId(value: string) {
    this._srcTopicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTopicIdInput() {
    return this._srcTopicId;
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: number; 
  public get taskType() {
    return this.getNumberAttribute('task_type');
  }
  public set taskType(value: number) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // dst_resources - computed: false, optional: true, required: false
  private _dstResources = new ClsDataTransformDstResourcesList(this, "dst_resources", false);
  public get dstResources() {
    return this._dstResources;
  }
  public putDstResources(value: ClsDataTransformDstResources[] | cdktf.IResolvable) {
    this._dstResources.internalValue = value;
  }
  public resetDstResources() {
    this._dstResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstResourcesInput() {
    return this._dstResources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_flag: cdktf.numberToTerraform(this._enableFlag),
      etl_content: cdktf.stringToTerraform(this._etlContent),
      func_type: cdktf.numberToTerraform(this._funcType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      src_topic_id: cdktf.stringToTerraform(this._srcTopicId),
      task_type: cdktf.numberToTerraform(this._taskType),
      dst_resources: cdktf.listMapper(clsDataTransformDstResourcesToTerraform, true)(this._dstResources.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_flag: {
        value: cdktf.numberToHclTerraform(this._enableFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      etl_content: {
        value: cdktf.stringToHclTerraform(this._etlContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      func_type: {
        value: cdktf.numberToHclTerraform(this._funcType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      src_topic_id: {
        value: cdktf.stringToHclTerraform(this._srcTopicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_type: {
        value: cdktf.numberToHclTerraform(this._taskType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dst_resources: {
        value: cdktf.listMapperHcl(clsDataTransformDstResourcesToHclTerraform, true)(this._dstResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClsDataTransformDstResourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
