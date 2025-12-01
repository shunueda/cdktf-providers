// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ecs_invocations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApsarastackEcsInvocationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ecs_invocations#command_id DataApsarastackEcsInvocations#command_id}
  */
  readonly commandId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ecs_invocations#command_name DataApsarastackEcsInvocations#command_name}
  */
  readonly commandName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ecs_invocations#id DataApsarastackEcsInvocations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ecs_invocations#ids DataApsarastackEcsInvocations#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ecs_invocations#instance_id DataApsarastackEcsInvocations#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ecs_invocations#invocation_id DataApsarastackEcsInvocations#invocation_id}
  */
  readonly invocationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ecs_invocations#timed DataApsarastackEcsInvocations#timed}
  */
  readonly timed?: boolean | cdktf.IResolvable;
}
export interface DataApsarastackEcsInvocationsInvocationsTags {
}

export function dataApsarastackEcsInvocationsInvocationsTagsToTerraform(struct?: DataApsarastackEcsInvocationsInvocationsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApsarastackEcsInvocationsInvocationsTagsToHclTerraform(struct?: DataApsarastackEcsInvocationsInvocationsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApsarastackEcsInvocationsInvocationsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApsarastackEcsInvocationsInvocationsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApsarastackEcsInvocationsInvocationsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tag_key - computed: true, optional: false, required: false
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }

  // tag_value - computed: true, optional: false, required: false
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
}

export class DataApsarastackEcsInvocationsInvocationsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataApsarastackEcsInvocationsInvocationsTagsOutputReference {
    return new DataApsarastackEcsInvocationsInvocationsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApsarastackEcsInvocationsInvocations {
}

export function dataApsarastackEcsInvocationsInvocationsToTerraform(struct?: DataApsarastackEcsInvocationsInvocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApsarastackEcsInvocationsInvocationsToHclTerraform(struct?: DataApsarastackEcsInvocationsInvocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApsarastackEcsInvocationsInvocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApsarastackEcsInvocationsInvocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApsarastackEcsInvocationsInvocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command_id - computed: true, optional: false, required: false
  public get commandId() {
    return this.getStringAttribute('command_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getStringAttribute('frequency');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_ids - computed: true, optional: false, required: false
  public get instanceIds() {
    return this.getListAttribute('instance_ids');
  }

  // invocation_id - computed: true, optional: false, required: false
  public get invocationId() {
    return this.getStringAttribute('invocation_id');
  }

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.getStringAttribute('parameters');
  }

  // repeat_mode - computed: true, optional: false, required: false
  public get repeatMode() {
    return this.getStringAttribute('repeat_mode');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataApsarastackEcsInvocationsInvocationsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // timed - computed: true, optional: false, required: false
  public get timed() {
    return this.getBooleanAttribute('timed');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // windows_password_name - computed: true, optional: false, required: false
  public get windowsPasswordName() {
    return this.getStringAttribute('windows_password_name');
  }
}

export class DataApsarastackEcsInvocationsInvocationsList extends cdktf.ComplexList {

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
  public get(index: number): DataApsarastackEcsInvocationsInvocationsOutputReference {
    return new DataApsarastackEcsInvocationsInvocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ecs_invocations apsarastack_ecs_invocations}
*/
export class DataApsarastackEcsInvocations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_ecs_invocations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApsarastackEcsInvocations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApsarastackEcsInvocations to import
  * @param importFromId The id of the existing DataApsarastackEcsInvocations that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ecs_invocations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApsarastackEcsInvocations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_ecs_invocations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_ecs_invocations apsarastack_ecs_invocations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApsarastackEcsInvocationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataApsarastackEcsInvocationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_ecs_invocations',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._commandId = config.commandId;
    this._commandName = config.commandName;
    this._id = config.id;
    this._ids = config.ids;
    this._instanceId = config.instanceId;
    this._invocationId = config.invocationId;
    this._timed = config.timed;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // command_id - computed: false, optional: true, required: false
  private _commandId?: string; 
  public get commandId() {
    return this.getStringAttribute('command_id');
  }
  public set commandId(value: string) {
    this._commandId = value;
  }
  public resetCommandId() {
    this._commandId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandIdInput() {
    return this._commandId;
  }

  // command_name - computed: false, optional: true, required: false
  private _commandName?: string; 
  public get commandName() {
    return this.getStringAttribute('command_name');
  }
  public set commandName(value: string) {
    this._commandName = value;
  }
  public resetCommandName() {
    this._commandName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandNameInput() {
    return this._commandName;
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

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // invocation_id - computed: false, optional: true, required: false
  private _invocationId?: string; 
  public get invocationId() {
    return this.getStringAttribute('invocation_id');
  }
  public set invocationId(value: string) {
    this._invocationId = value;
  }
  public resetInvocationId() {
    this._invocationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationIdInput() {
    return this._invocationId;
  }

  // invocations - computed: true, optional: false, required: false
  private _invocations = new DataApsarastackEcsInvocationsInvocationsList(this, "invocations", false);
  public get invocations() {
    return this._invocations;
  }

  // timed - computed: false, optional: true, required: false
  private _timed?: boolean | cdktf.IResolvable; 
  public get timed() {
    return this.getBooleanAttribute('timed');
  }
  public set timed(value: boolean | cdktf.IResolvable) {
    this._timed = value;
  }
  public resetTimed() {
    this._timed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timedInput() {
    return this._timed;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      command_id: cdktf.stringToTerraform(this._commandId),
      command_name: cdktf.stringToTerraform(this._commandName),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      invocation_id: cdktf.stringToTerraform(this._invocationId),
      timed: cdktf.booleanToTerraform(this._timed),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      command_id: {
        value: cdktf.stringToHclTerraform(this._commandId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command_name: {
        value: cdktf.stringToHclTerraform(this._commandName),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invocation_id: {
        value: cdktf.stringToHclTerraform(this._invocationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timed: {
        value: cdktf.booleanToHclTerraform(this._timed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
