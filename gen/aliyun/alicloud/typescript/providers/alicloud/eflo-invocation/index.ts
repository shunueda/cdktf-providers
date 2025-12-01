// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_invocation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EfloInvocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_invocation#command_content EfloInvocation#command_content}
  */
  readonly commandContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_invocation#command_id EfloInvocation#command_id}
  */
  readonly commandId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_invocation#content_encoding EfloInvocation#content_encoding}
  */
  readonly contentEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_invocation#description EfloInvocation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_invocation#enable_parameter EfloInvocation#enable_parameter}
  */
  readonly enableParameter?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_invocation#frequency EfloInvocation#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_invocation#id EfloInvocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_invocation#launcher EfloInvocation#launcher}
  */
  readonly launcher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_invocation#name EfloInvocation#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_invocation#node_id_list EfloInvocation#node_id_list}
  */
  readonly nodeIdList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_invocation#parameters EfloInvocation#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_invocation#repeat_mode EfloInvocation#repeat_mode}
  */
  readonly repeatMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_invocation#termination_mode EfloInvocation#termination_mode}
  */
  readonly terminationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_invocation#timeout EfloInvocation#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_invocation#username EfloInvocation#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_invocation#working_dir EfloInvocation#working_dir}
  */
  readonly workingDir?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_invocation#timeouts EfloInvocation#timeouts}
  */
  readonly timeouts?: EfloInvocationTimeouts;
}
export interface EfloInvocationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_invocation#create EfloInvocation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_invocation#delete EfloInvocation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_invocation#update EfloInvocation#update}
  */
  readonly update?: string;
}

export function efloInvocationTimeoutsToTerraform(struct?: EfloInvocationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function efloInvocationTimeoutsToHclTerraform(struct?: EfloInvocationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EfloInvocationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EfloInvocationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EfloInvocationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_invocation alicloud_eflo_invocation}
*/
export class EfloInvocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_eflo_invocation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EfloInvocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EfloInvocation to import
  * @param importFromId The id of the existing EfloInvocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_invocation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EfloInvocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_eflo_invocation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/eflo_invocation alicloud_eflo_invocation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EfloInvocationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EfloInvocationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_eflo_invocation',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._commandContent = config.commandContent;
    this._commandId = config.commandId;
    this._contentEncoding = config.contentEncoding;
    this._description = config.description;
    this._enableParameter = config.enableParameter;
    this._frequency = config.frequency;
    this._id = config.id;
    this._launcher = config.launcher;
    this._name = config.name;
    this._nodeIdList = config.nodeIdList;
    this._parameters = config.parameters;
    this._repeatMode = config.repeatMode;
    this._terminationMode = config.terminationMode;
    this._timeout = config.timeout;
    this._username = config.username;
    this._workingDir = config.workingDir;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // command_content - computed: false, optional: true, required: false
  private _commandContent?: string; 
  public get commandContent() {
    return this.getStringAttribute('command_content');
  }
  public set commandContent(value: string) {
    this._commandContent = value;
  }
  public resetCommandContent() {
    this._commandContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandContentInput() {
    return this._commandContent;
  }

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

  // content_encoding - computed: false, optional: true, required: false
  private _contentEncoding?: string; 
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }
  public set contentEncoding(value: string) {
    this._contentEncoding = value;
  }
  public resetContentEncoding() {
    this._contentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentEncodingInput() {
    return this._contentEncoding;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enable_parameter - computed: false, optional: true, required: false
  private _enableParameter?: boolean | cdktf.IResolvable; 
  public get enableParameter() {
    return this.getBooleanAttribute('enable_parameter');
  }
  public set enableParameter(value: boolean | cdktf.IResolvable) {
    this._enableParameter = value;
  }
  public resetEnableParameter() {
    this._enableParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableParameterInput() {
    return this._enableParameter;
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
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

  // launcher - computed: false, optional: true, required: false
  private _launcher?: string; 
  public get launcher() {
    return this.getStringAttribute('launcher');
  }
  public set launcher(value: string) {
    this._launcher = value;
  }
  public resetLauncher() {
    this._launcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launcherInput() {
    return this._launcher;
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

  // node_id_list - computed: false, optional: true, required: false
  private _nodeIdList?: string[]; 
  public get nodeIdList() {
    return this.getListAttribute('node_id_list');
  }
  public set nodeIdList(value: string[]) {
    this._nodeIdList = value;
  }
  public resetNodeIdList() {
    this._nodeIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdListInput() {
    return this._nodeIdList;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // repeat_mode - computed: false, optional: true, required: false
  private _repeatMode?: string; 
  public get repeatMode() {
    return this.getStringAttribute('repeat_mode');
  }
  public set repeatMode(value: string) {
    this._repeatMode = value;
  }
  public resetRepeatMode() {
    this._repeatMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatModeInput() {
    return this._repeatMode;
  }

  // termination_mode - computed: false, optional: true, required: false
  private _terminationMode?: string; 
  public get terminationMode() {
    return this.getStringAttribute('termination_mode');
  }
  public set terminationMode(value: string) {
    this._terminationMode = value;
  }
  public resetTerminationMode() {
    this._terminationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationModeInput() {
    return this._terminationMode;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // working_dir - computed: false, optional: true, required: false
  private _workingDir?: string; 
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
  public set workingDir(value: string) {
    this._workingDir = value;
  }
  public resetWorkingDir() {
    this._workingDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirInput() {
    return this._workingDir;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EfloInvocationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EfloInvocationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      command_content: cdktf.stringToTerraform(this._commandContent),
      command_id: cdktf.stringToTerraform(this._commandId),
      content_encoding: cdktf.stringToTerraform(this._contentEncoding),
      description: cdktf.stringToTerraform(this._description),
      enable_parameter: cdktf.booleanToTerraform(this._enableParameter),
      frequency: cdktf.stringToTerraform(this._frequency),
      id: cdktf.stringToTerraform(this._id),
      launcher: cdktf.stringToTerraform(this._launcher),
      name: cdktf.stringToTerraform(this._name),
      node_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodeIdList),
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
      repeat_mode: cdktf.stringToTerraform(this._repeatMode),
      termination_mode: cdktf.stringToTerraform(this._terminationMode),
      timeout: cdktf.numberToTerraform(this._timeout),
      username: cdktf.stringToTerraform(this._username),
      working_dir: cdktf.stringToTerraform(this._workingDir),
      timeouts: efloInvocationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      command_content: {
        value: cdktf.stringToHclTerraform(this._commandContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command_id: {
        value: cdktf.stringToHclTerraform(this._commandId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_encoding: {
        value: cdktf.stringToHclTerraform(this._contentEncoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_parameter: {
        value: cdktf.booleanToHclTerraform(this._enableParameter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      frequency: {
        value: cdktf.stringToHclTerraform(this._frequency),
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
      launcher: {
        value: cdktf.stringToHclTerraform(this._launcher),
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
      node_id_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nodeIdList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      repeat_mode: {
        value: cdktf.stringToHclTerraform(this._repeatMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      termination_mode: {
        value: cdktf.stringToHclTerraform(this._terminationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      working_dir: {
        value: cdktf.stringToHclTerraform(this._workingDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: efloInvocationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EfloInvocationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
