// https://registry.terraform.io/providers/metio/git/2025.11.14/docs/resources/remote
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RemoteConfig extends cdktf.TerraformMetaArguments {
  /**
  * The path to the local Git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.14/docs/resources/remote#directory Remote#directory}
  */
  readonly directory: string;
  /**
  * The name of the Git remote to manage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.14/docs/resources/remote#name Remote#name}
  */
  readonly name: string;
  /**
  * The URLs of the Git remote to manage. The first URL will be a fetch/pull URL. All other URLs will be push only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.14/docs/resources/remote#urls Remote#urls}
  */
  readonly urls: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/git/2025.11.14/docs/resources/remote git_remote}
*/
export class Remote extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "git_remote";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Remote resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Remote to import
  * @param importFromId The id of the existing Remote that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/git/2025.11.14/docs/resources/remote#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Remote to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "git_remote", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/git/2025.11.14/docs/resources/remote git_remote} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RemoteConfig
  */
  public constructor(scope: Construct, id: string, config: RemoteConfig) {
    super(scope, id, {
      terraformResourceType: 'git_remote',
      terraformGeneratorMetadata: {
        providerName: 'git',
        providerVersion: '2025.11.14',
        providerVersionConstraint: '2025.11.14'
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
    this._urls = config.urls;
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

  // urls - computed: false, optional: false, required: true
  private _urls?: string[]; 
  public get urls() {
    return this.getListAttribute('urls');
  }
  public set urls(value: string[]) {
    this._urls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsInput() {
    return this._urls;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      directory: cdktf.stringToTerraform(this._directory),
      name: cdktf.stringToTerraform(this._name),
      urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._urls),
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
      urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._urls),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
