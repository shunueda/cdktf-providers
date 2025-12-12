// https://registry.terraform.io/providers/metio/git/2025.12.12/docs/data-sources/remote
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitRemoteConfig extends cdktf.TerraformMetaArguments {
  /**
  * The path to the local Git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.12.12/docs/data-sources/remote#directory DataGitRemote#directory}
  */
  readonly directory: string;
  /**
  * The name of the remote to gather information about.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.12.12/docs/data-sources/remote#name DataGitRemote#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/git/2025.12.12/docs/data-sources/remote git_remote}
*/
export class DataGitRemote extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "git_remote";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitRemote resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitRemote to import
  * @param importFromId The id of the existing DataGitRemote that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/git/2025.12.12/docs/data-sources/remote#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitRemote to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "git_remote", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/git/2025.12.12/docs/data-sources/remote git_remote} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitRemoteConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitRemoteConfig) {
    super(scope, id, {
      terraformResourceType: 'git_remote',
      terraformGeneratorMetadata: {
        providerName: 'git',
        providerVersion: '2025.12.12',
        providerVersionConstraint: '2025.12.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._directory = config.directory;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // directory - computed: false, optional: false, required: true
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // urls - computed: true, optional: false, required: false
  public get urls() {
    return this.getListAttribute('urls');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      directory: cdktf.stringToTerraform(this._directory),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      directory: {
        value: cdktf.stringToHclTerraform(this._directory),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
