// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tem_log_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemLogConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tem_log_config#application_id TemLogConfig#application_id}
  */
  readonly applicationId: string;
  /**
  * regex pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tem_log_config#beginning_regex TemLogConfig#beginning_regex}
  */
  readonly beginningRegex?: string;
  /**
  * environment ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tem_log_config#environment_id TemLogConfig#environment_id}
  */
  readonly environmentId: string;
  /**
  * file name pattern if container_file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tem_log_config#file_pattern TemLogConfig#file_pattern}
  */
  readonly filePattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tem_log_config#id TemLogConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * container_stdout or container_file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tem_log_config#input_type TemLogConfig#input_type}
  */
  readonly inputType: string;
  /**
  * directory if container_file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tem_log_config#log_path TemLogConfig#log_path}
  */
  readonly logPath?: string;
  /**
  * minimalist_log or multiline_log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tem_log_config#log_type TemLogConfig#log_type}
  */
  readonly logType: string;
  /**
  * logset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tem_log_config#logset_id TemLogConfig#logset_id}
  */
  readonly logsetId: string;
  /**
  * appConfig name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tem_log_config#name TemLogConfig#name}
  */
  readonly name: string;
  /**
  * topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tem_log_config#topic_id TemLogConfig#topic_id}
  */
  readonly topicId: string;
  /**
  * application ID, which is combined by environment ID and application ID, like `en-o5edaepv#app-3j29aa2p`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tem_log_config#workload_id TemLogConfig#workload_id}
  */
  readonly workloadId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tem_log_config tencentcloud_tem_log_config}
*/
export class TemLogConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tem_log_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemLogConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemLogConfig to import
  * @param importFromId The id of the existing TemLogConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tem_log_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemLogConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tem_log_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tem_log_config tencentcloud_tem_log_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemLogConfigConfig
  */
  public constructor(scope: Construct, id: string, config: TemLogConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tem_log_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._beginningRegex = config.beginningRegex;
    this._environmentId = config.environmentId;
    this._filePattern = config.filePattern;
    this._id = config.id;
    this._inputType = config.inputType;
    this._logPath = config.logPath;
    this._logType = config.logType;
    this._logsetId = config.logsetId;
    this._name = config.name;
    this._topicId = config.topicId;
    this._workloadId = config.workloadId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // beginning_regex - computed: false, optional: true, required: false
  private _beginningRegex?: string; 
  public get beginningRegex() {
    return this.getStringAttribute('beginning_regex');
  }
  public set beginningRegex(value: string) {
    this._beginningRegex = value;
  }
  public resetBeginningRegex() {
    this._beginningRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beginningRegexInput() {
    return this._beginningRegex;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // file_pattern - computed: false, optional: true, required: false
  private _filePattern?: string; 
  public get filePattern() {
    return this.getStringAttribute('file_pattern');
  }
  public set filePattern(value: string) {
    this._filePattern = value;
  }
  public resetFilePattern() {
    this._filePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePatternInput() {
    return this._filePattern;
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

  // input_type - computed: false, optional: false, required: true
  private _inputType?: string; 
  public get inputType() {
    return this.getStringAttribute('input_type');
  }
  public set inputType(value: string) {
    this._inputType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputTypeInput() {
    return this._inputType;
  }

  // log_path - computed: false, optional: true, required: false
  private _logPath?: string; 
  public get logPath() {
    return this.getStringAttribute('log_path');
  }
  public set logPath(value: string) {
    this._logPath = value;
  }
  public resetLogPath() {
    this._logPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPathInput() {
    return this._logPath;
  }

  // log_type - computed: false, optional: false, required: true
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // logset_id - computed: false, optional: false, required: true
  private _logsetId?: string; 
  public get logsetId() {
    return this.getStringAttribute('logset_id');
  }
  public set logsetId(value: string) {
    this._logsetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logsetIdInput() {
    return this._logsetId;
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

  // workload_id - computed: false, optional: false, required: true
  private _workloadId?: string; 
  public get workloadId() {
    return this.getStringAttribute('workload_id');
  }
  public set workloadId(value: string) {
    this._workloadId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdInput() {
    return this._workloadId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      beginning_regex: cdktf.stringToTerraform(this._beginningRegex),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      file_pattern: cdktf.stringToTerraform(this._filePattern),
      id: cdktf.stringToTerraform(this._id),
      input_type: cdktf.stringToTerraform(this._inputType),
      log_path: cdktf.stringToTerraform(this._logPath),
      log_type: cdktf.stringToTerraform(this._logType),
      logset_id: cdktf.stringToTerraform(this._logsetId),
      name: cdktf.stringToTerraform(this._name),
      topic_id: cdktf.stringToTerraform(this._topicId),
      workload_id: cdktf.stringToTerraform(this._workloadId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      beginning_regex: {
        value: cdktf.stringToHclTerraform(this._beginningRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_pattern: {
        value: cdktf.stringToHclTerraform(this._filePattern),
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
      input_type: {
        value: cdktf.stringToHclTerraform(this._inputType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_path: {
        value: cdktf.stringToHclTerraform(this._logPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_type: {
        value: cdktf.stringToHclTerraform(this._logType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logset_id: {
        value: cdktf.stringToHclTerraform(this._logsetId),
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
      topic_id: {
        value: cdktf.stringToHclTerraform(this._topicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workload_id: {
        value: cdktf.stringToHclTerraform(this._workloadId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
