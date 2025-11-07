// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_log_engine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolardbxLogEngineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_log_engine#cdc_node_class PolardbxLogEngine#cdc_node_class}
  */
  readonly cdcNodeClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_log_engine#cdc_node_count PolardbxLogEngine#cdc_node_count}
  */
  readonly cdcNodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_log_engine#id PolardbxLogEngine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_log_engine#instance_id PolardbxLogEngine#instance_id}
  */
  readonly instanceId: string;
  /**
  * multi_stream block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_log_engine#multi_stream PolardbxLogEngine#multi_stream}
  */
  readonly multiStream?: PolardbxLogEngineMultiStream[] | cdktf.IResolvable;
}
export interface PolardbxLogEngineMultiStream {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_log_engine#comment PolardbxLogEngine#comment}
  */
  readonly comment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_log_engine#group_name PolardbxLogEngine#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_log_engine#hash_level PolardbxLogEngine#hash_level}
  */
  readonly hashLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_log_engine#node_class PolardbxLogEngine#node_class}
  */
  readonly nodeClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_log_engine#node_count PolardbxLogEngine#node_count}
  */
  readonly nodeCount: number;
}

export function polardbxLogEngineMultiStreamToTerraform(struct?: PolardbxLogEngineMultiStream | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    group_name: cdktf.stringToTerraform(struct!.groupName),
    hash_level: cdktf.stringToTerraform(struct!.hashLevel),
    node_class: cdktf.stringToTerraform(struct!.nodeClass),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
  }
}


export function polardbxLogEngineMultiStreamToHclTerraform(struct?: PolardbxLogEngineMultiStream | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash_level: {
      value: cdktf.stringToHclTerraform(struct!.hashLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_class: {
      value: cdktf.stringToHclTerraform(struct!.nodeClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolardbxLogEngineMultiStreamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolardbxLogEngineMultiStream | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._hashLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashLevel = this._hashLevel;
    }
    if (this._nodeClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeClass = this._nodeClass;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolardbxLogEngineMultiStream | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._groupName = undefined;
      this._hashLevel = undefined;
      this._nodeClass = undefined;
      this._nodeCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._groupName = value.groupName;
      this._hashLevel = value.hashLevel;
      this._nodeClass = value.nodeClass;
      this._nodeCount = value.nodeCount;
    }
  }

  // comment - computed: false, optional: false, required: true
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // hash_level - computed: false, optional: false, required: true
  private _hashLevel?: string; 
  public get hashLevel() {
    return this.getStringAttribute('hash_level');
  }
  public set hashLevel(value: string) {
    this._hashLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashLevelInput() {
    return this._hashLevel;
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // node_class - computed: false, optional: false, required: true
  private _nodeClass?: string; 
  public get nodeClass() {
    return this.getStringAttribute('node_class');
  }
  public set nodeClass(value: string) {
    this._nodeClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeClassInput() {
    return this._nodeClass;
  }

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }
}

export class PolardbxLogEngineMultiStreamList extends cdktf.ComplexList {
  public internalValue? : PolardbxLogEngineMultiStream[] | cdktf.IResolvable

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
  public get(index: number): PolardbxLogEngineMultiStreamOutputReference {
    return new PolardbxLogEngineMultiStreamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_log_engine alibabacloudstack_polardbx_log_engine}
*/
export class PolardbxLogEngine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_polardbx_log_engine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolardbxLogEngine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolardbxLogEngine to import
  * @param importFromId The id of the existing PolardbxLogEngine that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_log_engine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolardbxLogEngine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_polardbx_log_engine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_log_engine alibabacloudstack_polardbx_log_engine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolardbxLogEngineConfig
  */
  public constructor(scope: Construct, id: string, config: PolardbxLogEngineConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_polardbx_log_engine',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cdcNodeClass = config.cdcNodeClass;
    this._cdcNodeCount = config.cdcNodeCount;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._multiStream.internalValue = config.multiStream;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdc_node_class - computed: true, optional: true, required: false
  private _cdcNodeClass?: string; 
  public get cdcNodeClass() {
    return this.getStringAttribute('cdc_node_class');
  }
  public set cdcNodeClass(value: string) {
    this._cdcNodeClass = value;
  }
  public resetCdcNodeClass() {
    this._cdcNodeClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdcNodeClassInput() {
    return this._cdcNodeClass;
  }

  // cdc_node_count - computed: true, optional: true, required: false
  private _cdcNodeCount?: number; 
  public get cdcNodeCount() {
    return this.getNumberAttribute('cdc_node_count');
  }
  public set cdcNodeCount(value: number) {
    this._cdcNodeCount = value;
  }
  public resetCdcNodeCount() {
    this._cdcNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdcNodeCountInput() {
    return this._cdcNodeCount;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // multi_stream - computed: false, optional: true, required: false
  private _multiStream = new PolardbxLogEngineMultiStreamList(this, "multi_stream", true);
  public get multiStream() {
    return this._multiStream;
  }
  public putMultiStream(value: PolardbxLogEngineMultiStream[] | cdktf.IResolvable) {
    this._multiStream.internalValue = value;
  }
  public resetMultiStream() {
    this._multiStream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiStreamInput() {
    return this._multiStream.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cdc_node_class: cdktf.stringToTerraform(this._cdcNodeClass),
      cdc_node_count: cdktf.numberToTerraform(this._cdcNodeCount),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      multi_stream: cdktf.listMapper(polardbxLogEngineMultiStreamToTerraform, true)(this._multiStream.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cdc_node_class: {
        value: cdktf.stringToHclTerraform(this._cdcNodeClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdc_node_count: {
        value: cdktf.numberToHclTerraform(this._cdcNodeCount),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_stream: {
        value: cdktf.listMapperHcl(polardbxLogEngineMultiStreamToHclTerraform, true)(this._multiStream.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolardbxLogEngineMultiStreamList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
