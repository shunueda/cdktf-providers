// https://registry.terraform.io/providers/metio/git/2025.11.28/docs/data-sources/config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The path to the local Git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.28/docs/data-sources/config#directory DataGitConfig#directory}
  */
  readonly directory: string;
  /**
  * The configuration scope to read. Possible values are `local`, `global`, and `system`. Defaults to `global`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.28/docs/data-sources/config#scope DataGitConfig#scope}
  */
  readonly scope?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/git/2025.11.28/docs/data-sources/config git_config}
*/
export class DataGitConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "git_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitConfig to import
  * @param importFromId The id of the existing DataGitConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/git/2025.11.28/docs/data-sources/config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "git_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/git/2025.11.28/docs/data-sources/config git_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'git_config',
      terraformGeneratorMetadata: {
        providerName: 'git',
        providerVersion: '2025.11.28',
        providerVersionConstraint: '2025.11.28'
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
    this._scope = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // author_email - computed: true, optional: false, required: false
  public get authorEmail() {
    return this.getStringAttribute('author_email');
  }

  // author_name - computed: true, optional: false, required: false
  public get authorName() {
    return this.getStringAttribute('author_name');
  }

  // committer_email - computed: true, optional: false, required: false
  public get committerEmail() {
    return this.getStringAttribute('committer_email');
  }

  // committer_name - computed: true, optional: false, required: false
  public get committerName() {
    return this.getStringAttribute('committer_name');
  }

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

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // user_email - computed: true, optional: false, required: false
  public get userEmail() {
    return this.getStringAttribute('user_email');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      directory: cdktf.stringToTerraform(this._directory),
      scope: cdktf.stringToTerraform(this._scope),
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
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
