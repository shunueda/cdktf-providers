// https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/agent_docker_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRafayAgentDockerConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/agent_docker_config#agent_name DataRafayAgentDockerConfig#agent_name}
  */
  readonly agentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/agent_docker_config#download_config_files DataRafayAgentDockerConfig#download_config_files}
  */
  readonly downloadConfigFiles: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/agent_docker_config#download_directory DataRafayAgentDockerConfig#download_directory}
  */
  readonly downloadDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/agent_docker_config#id DataRafayAgentDockerConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/agent_docker_config#project DataRafayAgentDockerConfig#project}
  */
  readonly project: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/agent_docker_config#timeouts DataRafayAgentDockerConfig#timeouts}
  */
  readonly timeouts?: DataRafayAgentDockerConfigTimeouts;
}
export interface DataRafayAgentDockerConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/agent_docker_config#read DataRafayAgentDockerConfig#read}
  */
  readonly read?: string;
}

export function dataRafayAgentDockerConfigTimeoutsToTerraform(struct?: DataRafayAgentDockerConfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataRafayAgentDockerConfigTimeoutsToHclTerraform(struct?: DataRafayAgentDockerConfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayAgentDockerConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRafayAgentDockerConfigTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayAgentDockerConfigTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/agent_docker_config rafay_agent_docker_config}
*/
export class DataRafayAgentDockerConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rafay_agent_docker_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRafayAgentDockerConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRafayAgentDockerConfig to import
  * @param importFromId The id of the existing DataRafayAgentDockerConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/agent_docker_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRafayAgentDockerConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rafay_agent_docker_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/data-sources/agent_docker_config rafay_agent_docker_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRafayAgentDockerConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataRafayAgentDockerConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'rafay_agent_docker_config',
      terraformGeneratorMetadata: {
        providerName: 'rafay',
        providerVersion: '1.1.55',
        providerVersionConstraint: '1.1.55'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentName = config.agentName;
    this._downloadConfigFiles = config.downloadConfigFiles;
    this._downloadDirectory = config.downloadDirectory;
    this._id = config.id;
    this._project = config.project;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_id_hash - computed: true, optional: false, required: false
  public get agentIdHash() {
    return this.getStringAttribute('agent_id_hash');
  }

  // agent_name - computed: false, optional: false, required: true
  private _agentName?: string; 
  public get agentName() {
    return this.getStringAttribute('agent_name');
  }
  public set agentName(value: string) {
    this._agentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentNameInput() {
    return this._agentName;
  }

  // compose_file_name - computed: true, optional: false, required: false
  public get composeFileName() {
    return this.getStringAttribute('compose_file_name');
  }

  // config - computed: true, optional: false, required: false
  public get config() {
    return this.getStringAttribute('config');
  }

  // config_file_name - computed: true, optional: false, required: false
  public get configFileName() {
    return this.getStringAttribute('config_file_name');
  }

  // docker_compose - computed: true, optional: false, required: false
  public get dockerCompose() {
    return this.getStringAttribute('docker_compose');
  }

  // download_config_files - computed: false, optional: false, required: true
  private _downloadConfigFiles?: boolean | cdktf.IResolvable; 
  public get downloadConfigFiles() {
    return this.getBooleanAttribute('download_config_files');
  }
  public set downloadConfigFiles(value: boolean | cdktf.IResolvable) {
    this._downloadConfigFiles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadConfigFilesInput() {
    return this._downloadConfigFiles;
  }

  // download_directory - computed: false, optional: true, required: false
  private _downloadDirectory?: string; 
  public get downloadDirectory() {
    return this.getStringAttribute('download_directory');
  }
  public set downloadDirectory(value: string) {
    this._downloadDirectory = value;
  }
  public resetDownloadDirectory() {
    this._downloadDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadDirectoryInput() {
    return this._downloadDirectory;
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // start_command - computed: true, optional: false, required: false
  public get startCommand() {
    return this.getStringAttribute('start_command');
  }

  // stop_command - computed: true, optional: false, required: false
  public get stopCommand() {
    return this.getStringAttribute('stop_command');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataRafayAgentDockerConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataRafayAgentDockerConfigTimeouts) {
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
      agent_name: cdktf.stringToTerraform(this._agentName),
      download_config_files: cdktf.booleanToTerraform(this._downloadConfigFiles),
      download_directory: cdktf.stringToTerraform(this._downloadDirectory),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      timeouts: dataRafayAgentDockerConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_name: {
        value: cdktf.stringToHclTerraform(this._agentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      download_config_files: {
        value: cdktf.booleanToHclTerraform(this._downloadConfigFiles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      download_directory: {
        value: cdktf.stringToHclTerraform(this._downloadDirectory),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataRafayAgentDockerConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataRafayAgentDockerConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
