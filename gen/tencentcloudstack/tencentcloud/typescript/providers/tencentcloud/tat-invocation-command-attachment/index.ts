// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tat_invocation_command_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TatInvocationCommandAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Command name. The name can be up to 60 bytes, and contain [a-z], [A-Z], [0-9] and [_-.].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tat_invocation_command_attachment#command_name TatInvocationCommandAttachment#command_name}
  */
  readonly commandName?: string;
  /**
  * Command type. SHELL and POWERSHELL are supported. The default value is SHELL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tat_invocation_command_attachment#command_type TatInvocationCommandAttachment#command_type}
  */
  readonly commandType?: string;
  /**
  * Base64-encoded command. The maximum length is 64 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tat_invocation_command_attachment#content TatInvocationCommandAttachment#content}
  */
  readonly content: string;
  /**
  * The default value of the custom parameter value when it is enabled. The field type is JSON encoded string. For example, {varA: 222}.key is the name of the custom parameter and value is the default value. Both key and value are strings.If Parameters is not provided, the default values specified here are used.Up to 20 custom parameters are supported.The name of the custom parameter cannot exceed 64 characters and can contain [a-z], [A-Z], [0-9] and [-_].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tat_invocation_command_attachment#default_parameters TatInvocationCommandAttachment#default_parameters}
  */
  readonly defaultParameters?: string;
  /**
  * Command description. The maximum length is 120 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tat_invocation_command_attachment#description TatInvocationCommandAttachment#description}
  */
  readonly description?: string;
  /**
  * Whether to enable the custom parameter feature.This cannot be modified once created.Default value: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tat_invocation_command_attachment#enable_parameter TatInvocationCommandAttachment#enable_parameter}
  */
  readonly enableParameter?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tat_invocation_command_attachment#id TatInvocationCommandAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of instances about to execute commands. Supported instance types:  CVM  LIGHTHOUSE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tat_invocation_command_attachment#instance_id TatInvocationCommandAttachment#instance_id}
  */
  readonly instanceId: string;
  /**
  * The COS bucket URL for uploading logs; The URL must start with https, such as https://BucketName-123454321.cos.ap-beijing.myqcloud.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tat_invocation_command_attachment#output_cos_bucket_url TatInvocationCommandAttachment#output_cos_bucket_url}
  */
  readonly outputCosBucketUrl?: string;
  /**
  * The COS bucket directory where the logs are saved; Check below for the rules of the directory name: 1 It must be a combination of number, letters, and visible characters, Up to 60 characters are allowed; 2 Use a slash (/) to create a subdirectory; 3 can not be used as the folder name; It cannot start with a slash (/), and cannot contain consecutive slashes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tat_invocation_command_attachment#output_cos_key_prefix TatInvocationCommandAttachment#output_cos_key_prefix}
  */
  readonly outputCosKeyPrefix?: string;
  /**
  * Custom parameters of Command. The field type is JSON encoded string. For example, {varA: 222}.key is the name of the custom parameter and value is the default value. Both key and value are strings.If no parameter value is provided, the DefaultParameters is used.Up to 20 custom parameters are supported.The name of the custom parameter cannot exceed 64 characters and can contain [a-z], [A-Z], [0-9] and [-_].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tat_invocation_command_attachment#parameters TatInvocationCommandAttachment#parameters}
  */
  readonly parameters?: string;
  /**
  * Whether to save the command. Valid values:rue: SaveFalse:Do not saveThe default value is False.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tat_invocation_command_attachment#save_command TatInvocationCommandAttachment#save_command}
  */
  readonly saveCommand?: boolean | cdktf.IResolvable;
  /**
  * Command timeout period. Default value: 60 seconds. Value range: [1, 86400].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tat_invocation_command_attachment#timeout TatInvocationCommandAttachment#timeout}
  */
  readonly timeout?: number;
  /**
  * The username used to execute the command on the CVM or Lighthouse instance.The principle of least privilege is the best practice for permission management. We recommend you execute TAT commands as a general user. By default, the user root is used to execute commands on Linux and the user System is used on Windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tat_invocation_command_attachment#username TatInvocationCommandAttachment#username}
  */
  readonly username?: string;
  /**
  * Command execution path. The default value is /root for SHELL commands and C:Program Filesqcloudtat_agentworkdir for POWERSHELL commands.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tat_invocation_command_attachment#working_directory TatInvocationCommandAttachment#working_directory}
  */
  readonly workingDirectory?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tat_invocation_command_attachment tencentcloud_tat_invocation_command_attachment}
*/
export class TatInvocationCommandAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tat_invocation_command_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TatInvocationCommandAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TatInvocationCommandAttachment to import
  * @param importFromId The id of the existing TatInvocationCommandAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tat_invocation_command_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TatInvocationCommandAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tat_invocation_command_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tat_invocation_command_attachment tencentcloud_tat_invocation_command_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TatInvocationCommandAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: TatInvocationCommandAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tat_invocation_command_attachment',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._commandName = config.commandName;
    this._commandType = config.commandType;
    this._content = config.content;
    this._defaultParameters = config.defaultParameters;
    this._description = config.description;
    this._enableParameter = config.enableParameter;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._outputCosBucketUrl = config.outputCosBucketUrl;
    this._outputCosKeyPrefix = config.outputCosKeyPrefix;
    this._parameters = config.parameters;
    this._saveCommand = config.saveCommand;
    this._timeout = config.timeout;
    this._username = config.username;
    this._workingDirectory = config.workingDirectory;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // command_id - computed: true, optional: false, required: false
  public get commandId() {
    return this.getStringAttribute('command_id');
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

  // command_type - computed: false, optional: true, required: false
  private _commandType?: string; 
  public get commandType() {
    return this.getStringAttribute('command_type');
  }
  public set commandType(value: string) {
    this._commandType = value;
  }
  public resetCommandType() {
    this._commandType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandTypeInput() {
    return this._commandType;
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // default_parameters - computed: false, optional: true, required: false
  private _defaultParameters?: string; 
  public get defaultParameters() {
    return this.getStringAttribute('default_parameters');
  }
  public set defaultParameters(value: string) {
    this._defaultParameters = value;
  }
  public resetDefaultParameters() {
    this._defaultParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultParametersInput() {
    return this._defaultParameters;
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

  // output_cos_bucket_url - computed: false, optional: true, required: false
  private _outputCosBucketUrl?: string; 
  public get outputCosBucketUrl() {
    return this.getStringAttribute('output_cos_bucket_url');
  }
  public set outputCosBucketUrl(value: string) {
    this._outputCosBucketUrl = value;
  }
  public resetOutputCosBucketUrl() {
    this._outputCosBucketUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputCosBucketUrlInput() {
    return this._outputCosBucketUrl;
  }

  // output_cos_key_prefix - computed: false, optional: true, required: false
  private _outputCosKeyPrefix?: string; 
  public get outputCosKeyPrefix() {
    return this.getStringAttribute('output_cos_key_prefix');
  }
  public set outputCosKeyPrefix(value: string) {
    this._outputCosKeyPrefix = value;
  }
  public resetOutputCosKeyPrefix() {
    this._outputCosKeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputCosKeyPrefixInput() {
    return this._outputCosKeyPrefix;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // save_command - computed: false, optional: true, required: false
  private _saveCommand?: boolean | cdktf.IResolvable; 
  public get saveCommand() {
    return this.getBooleanAttribute('save_command');
  }
  public set saveCommand(value: boolean | cdktf.IResolvable) {
    this._saveCommand = value;
  }
  public resetSaveCommand() {
    this._saveCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveCommandInput() {
    return this._saveCommand;
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

  // working_directory - computed: false, optional: true, required: false
  private _workingDirectory?: string; 
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
  public set workingDirectory(value: string) {
    this._workingDirectory = value;
  }
  public resetWorkingDirectory() {
    this._workingDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirectoryInput() {
    return this._workingDirectory;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      command_name: cdktf.stringToTerraform(this._commandName),
      command_type: cdktf.stringToTerraform(this._commandType),
      content: cdktf.stringToTerraform(this._content),
      default_parameters: cdktf.stringToTerraform(this._defaultParameters),
      description: cdktf.stringToTerraform(this._description),
      enable_parameter: cdktf.booleanToTerraform(this._enableParameter),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      output_cos_bucket_url: cdktf.stringToTerraform(this._outputCosBucketUrl),
      output_cos_key_prefix: cdktf.stringToTerraform(this._outputCosKeyPrefix),
      parameters: cdktf.stringToTerraform(this._parameters),
      save_command: cdktf.booleanToTerraform(this._saveCommand),
      timeout: cdktf.numberToTerraform(this._timeout),
      username: cdktf.stringToTerraform(this._username),
      working_directory: cdktf.stringToTerraform(this._workingDirectory),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      command_name: {
        value: cdktf.stringToHclTerraform(this._commandName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command_type: {
        value: cdktf.stringToHclTerraform(this._commandType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content: {
        value: cdktf.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_parameters: {
        value: cdktf.stringToHclTerraform(this._defaultParameters),
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
      output_cos_bucket_url: {
        value: cdktf.stringToHclTerraform(this._outputCosBucketUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_cos_key_prefix: {
        value: cdktf.stringToHclTerraform(this._outputCosKeyPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.stringToHclTerraform(this._parameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      save_command: {
        value: cdktf.booleanToHclTerraform(this._saveCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      working_directory: {
        value: cdktf.stringToHclTerraform(this._workingDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
