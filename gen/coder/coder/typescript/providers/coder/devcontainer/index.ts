// https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/devcontainer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevcontainerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The `id` property of a `coder_agent` resource to associate with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/devcontainer#agent_id Devcontainer#agent_id}
  */
  readonly agentId: string;
  /**
  * The path to the Dev Container configuration file (devcontainer.json).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/devcontainer#config_path Devcontainer#config_path}
  */
  readonly configPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/devcontainer#id Devcontainer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The workspace folder to for the Dev Container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/devcontainer#workspace_folder Devcontainer#workspace_folder}
  */
  readonly workspaceFolder: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/devcontainer coder_devcontainer}
*/
export class Devcontainer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coder_devcontainer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Devcontainer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Devcontainer to import
  * @param importFromId The id of the existing Devcontainer that should be imported. Refer to the {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/devcontainer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Devcontainer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coder_devcontainer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/resources/devcontainer coder_devcontainer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevcontainerConfig
  */
  public constructor(scope: Construct, id: string, config: DevcontainerConfig) {
    super(scope, id, {
      terraformResourceType: 'coder_devcontainer',
      terraformGeneratorMetadata: {
        providerName: 'coder',
        providerVersion: '2.13.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentId = config.agentId;
    this._configPath = config.configPath;
    this._id = config.id;
    this._workspaceFolder = config.workspaceFolder;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_id - computed: false, optional: false, required: true
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

  // config_path - computed: false, optional: true, required: false
  private _configPath?: string; 
  public get configPath() {
    return this.getStringAttribute('config_path');
  }
  public set configPath(value: string) {
    this._configPath = value;
  }
  public resetConfigPath() {
    this._configPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configPathInput() {
    return this._configPath;
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

  // workspace_folder - computed: false, optional: false, required: true
  private _workspaceFolder?: string; 
  public get workspaceFolder() {
    return this.getStringAttribute('workspace_folder');
  }
  public set workspaceFolder(value: string) {
    this._workspaceFolder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceFolderInput() {
    return this._workspaceFolder;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_id: cdktf.stringToTerraform(this._agentId),
      config_path: cdktf.stringToTerraform(this._configPath),
      id: cdktf.stringToTerraform(this._id),
      workspace_folder: cdktf.stringToTerraform(this._workspaceFolder),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_id: {
        value: cdktf.stringToHclTerraform(this._agentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_path: {
        value: cdktf.stringToHclTerraform(this._configPath),
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
      workspace_folder: {
        value: cdktf.stringToHclTerraform(this._workspaceFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
