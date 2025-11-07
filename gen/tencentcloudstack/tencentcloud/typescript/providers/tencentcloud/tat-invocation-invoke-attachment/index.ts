// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tat_invocation_invoke_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TatInvocationInvokeAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Command ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tat_invocation_invoke_attachment#command_id TatInvocationInvokeAttachment#command_id}
  */
  readonly commandId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tat_invocation_invoke_attachment#id TatInvocationInvokeAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of instances about to execute commands. Supported instance types:  CVM  LIGHTHOUSE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tat_invocation_invoke_attachment#instance_id TatInvocationInvokeAttachment#instance_id}
  */
  readonly instanceId: string;
  /**
  * The COS bucket URL for uploading logs. The URL must start with https, such as https://BucketName-123454321.cos.ap-beijing.myqcloud.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tat_invocation_invoke_attachment#output_cos_bucket_url TatInvocationInvokeAttachment#output_cos_bucket_url}
  */
  readonly outputCosBucketUrl?: string;
  /**
  * The COS bucket directory where the logs are saved; Check below for the rules of the directory name: 1 It must be a combination of number, letters, and visible characters, Up to 60 characters are allowed; 2 Use a slash (/) to create a subdirectory; 3 can not be used as the folder name; It cannot start with a slash (/), and cannot contain consecutive slashes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tat_invocation_invoke_attachment#output_cos_key_prefix TatInvocationInvokeAttachment#output_cos_key_prefix}
  */
  readonly outputCosKeyPrefix?: string;
  /**
  * Custom parameters of Command. The field type is JSON encoded string. For example, {varA: 222}.key is the name of the custom parameter and value is the default value. Both key and value are strings.If no parameter value is provided, the DefaultParameters is used.Up to 20 custom parameters are supported.The name of the custom parameter cannot exceed 64 characters and can contain [a-z], [A-Z], [0-9] and [-_].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tat_invocation_invoke_attachment#parameters TatInvocationInvokeAttachment#parameters}
  */
  readonly parameters?: string;
  /**
  * Command timeout period. Default value: 60 seconds. Value range: [1, 86400].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tat_invocation_invoke_attachment#timeout TatInvocationInvokeAttachment#timeout}
  */
  readonly timeout?: number;
  /**
  * The username used to execute the command on the CVM or Lighthouse instance.The principle of least privilege is the best practice for permission management. We recommend you execute TAT commands as a general user. By default, the user root is used to execute commands on Linux and the user System is used on Windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tat_invocation_invoke_attachment#username TatInvocationInvokeAttachment#username}
  */
  readonly username?: string;
  /**
  * Command execution path. The default value is /root for SHELL commands and C:Program Filesqcloudtat_agentworkdir for POWERSHELL commands.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tat_invocation_invoke_attachment#working_directory TatInvocationInvokeAttachment#working_directory}
  */
  readonly workingDirectory?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tat_invocation_invoke_attachment tencentcloud_tat_invocation_invoke_attachment}
*/
export class TatInvocationInvokeAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tat_invocation_invoke_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TatInvocationInvokeAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TatInvocationInvokeAttachment to import
  * @param importFromId The id of the existing TatInvocationInvokeAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tat_invocation_invoke_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TatInvocationInvokeAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tat_invocation_invoke_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tat_invocation_invoke_attachment tencentcloud_tat_invocation_invoke_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TatInvocationInvokeAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: TatInvocationInvokeAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tat_invocation_invoke_attachment',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
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
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._outputCosBucketUrl = config.outputCosBucketUrl;
    this._outputCosKeyPrefix = config.outputCosKeyPrefix;
    this._parameters = config.parameters;
    this._timeout = config.timeout;
    this._username = config.username;
    this._workingDirectory = config.workingDirectory;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // command_id - computed: false, optional: false, required: true
  private _commandId?: string; 
  public get commandId() {
    return this.getStringAttribute('command_id');
  }
  public set commandId(value: string) {
    this._commandId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandIdInput() {
    return this._commandId;
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
      command_id: cdktf.stringToTerraform(this._commandId),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      output_cos_bucket_url: cdktf.stringToTerraform(this._outputCosBucketUrl),
      output_cos_key_prefix: cdktf.stringToTerraform(this._outputCosKeyPrefix),
      parameters: cdktf.stringToTerraform(this._parameters),
      timeout: cdktf.numberToTerraform(this._timeout),
      username: cdktf.stringToTerraform(this._username),
      working_directory: cdktf.stringToTerraform(this._workingDirectory),
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
