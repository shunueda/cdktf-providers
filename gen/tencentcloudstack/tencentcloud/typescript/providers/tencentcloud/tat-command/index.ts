// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tat_command
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TatCommandConfig extends cdktf.TerraformMetaArguments {
  /**
  * Command name. The name can be up to 60 bytes, and contain [a-z], [A-Z], [0-9] and [_-.].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tat_command#command_name TatCommand#command_name}
  */
  readonly commandName: string;
  /**
  * Command type. `SHELL`, `POWERSHELL` and `BAT` are supported. The default value is `SHELL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tat_command#command_type TatCommand#command_type}
  */
  readonly commandType?: string;
  /**
  * Command content. The maximum length is 64 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tat_command#content TatCommand#content}
  */
  readonly content: string;
  /**
  * The default value of the custom parameter value when it is enabled. The field type is JSON encoded string. For example, {"varA": "222"}.`key` is the name of the custom parameter and value is the default value. Both `key` and `value` are strings.If no parameter value is provided in the `InvokeCommand` API, the default value is used.Up to 20 custom parameters are supported.The name of the custom parameter cannot exceed 64 characters and can contain [a-z], [A-Z], [0-9] and [-_].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tat_command#default_parameters TatCommand#default_parameters}
  */
  readonly defaultParameters?: string;
  /**
  * Command description. The maximum length is 120 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tat_command#description TatCommand#description}
  */
  readonly description?: string;
  /**
  * Whether to enable the custom parameter feature.This cannot be modified once created.Default value: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tat_command#enable_parameter TatCommand#enable_parameter}
  */
  readonly enableParameter?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tat_command#id TatCommand#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The COS bucket URL for uploading logs. The URL must start with `https`, such as `https://BucketName-123454321.cos.ap-beijing.myqcloud.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tat_command#output_cos_bucket_url TatCommand#output_cos_bucket_url}
  */
  readonly outputCosBucketUrl?: string;
  /**
  * The COS bucket directory where the logs are saved. Check below for the rules of the directory name.1. It must be a combination of number, letters, and visible characters. Up to 60 characters are allowed.2. Use a slash (/) to create a subdirectory.3. Consecutive dots (.) and slashes (/) are not allowed. It can not start with a slash (/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tat_command#output_cos_key_prefix TatCommand#output_cos_key_prefix}
  */
  readonly outputCosKeyPrefix?: string;
  /**
  * Command timeout period. Default value: 60 seconds. Value range: [1, 86400].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tat_command#timeout TatCommand#timeout}
  */
  readonly timeout?: number;
  /**
  * The username used to execute the command on the CVM or Lighthouse instance.The principle of least privilege is the best practice for permission management. We recommend you execute TAT commands as a general user. By default, the root user is used to execute commands on Linux and the System user is used on Windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tat_command#username TatCommand#username}
  */
  readonly username?: string;
  /**
  * Command execution path. The default value is /root for `SHELL` commands and C:/Program Files/qcloudtat_agent/workdir for `POWERSHELL` commands.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tat_command#working_directory TatCommand#working_directory}
  */
  readonly workingDirectory?: string;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tat_command#tags TatCommand#tags}
  */
  readonly tags?: TatCommandTags[] | cdktf.IResolvable;
}
export interface TatCommandTags {
  /**
  * Tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tat_command#key TatCommand#key}
  */
  readonly key: string;
  /**
  * Tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tat_command#value TatCommand#value}
  */
  readonly value: string;
}

export function tatCommandTagsToTerraform(struct?: TatCommandTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function tatCommandTagsToHclTerraform(struct?: TatCommandTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TatCommandTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TatCommandTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TatCommandTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TatCommandTagsList extends cdktf.ComplexList {
  public internalValue? : TatCommandTags[] | cdktf.IResolvable

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
  public get(index: number): TatCommandTagsOutputReference {
    return new TatCommandTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tat_command tencentcloud_tat_command}
*/
export class TatCommand extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tat_command";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TatCommand resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TatCommand to import
  * @param importFromId The id of the existing TatCommand that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tat_command#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TatCommand to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tat_command", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/tat_command tencentcloud_tat_command} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TatCommandConfig
  */
  public constructor(scope: Construct, id: string, config: TatCommandConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tat_command',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
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
    this._outputCosBucketUrl = config.outputCosBucketUrl;
    this._outputCosKeyPrefix = config.outputCosKeyPrefix;
    this._timeout = config.timeout;
    this._username = config.username;
    this._workingDirectory = config.workingDirectory;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // command_name - computed: false, optional: false, required: true
  private _commandName?: string; 
  public get commandName() {
    return this.getStringAttribute('command_name');
  }
  public set commandName(value: string) {
    this._commandName = value;
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

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
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

  // formatted_description - computed: true, optional: false, required: false
  public get formattedDescription() {
    return this.getStringAttribute('formatted_description');
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

  // updated_time - computed: true, optional: false, required: false
  public get updatedTime() {
    return this.getStringAttribute('updated_time');
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

  // tags - computed: false, optional: true, required: false
  private _tags = new TatCommandTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: TatCommandTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
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
      output_cos_bucket_url: cdktf.stringToTerraform(this._outputCosBucketUrl),
      output_cos_key_prefix: cdktf.stringToTerraform(this._outputCosKeyPrefix),
      timeout: cdktf.numberToTerraform(this._timeout),
      username: cdktf.stringToTerraform(this._username),
      working_directory: cdktf.stringToTerraform(this._workingDirectory),
      tags: cdktf.listMapper(tatCommandTagsToTerraform, true)(this._tags.internalValue),
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
      tags: {
        value: cdktf.listMapperHcl(tatCommandTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TatCommandTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
