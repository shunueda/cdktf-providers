// https://registry.terraform.io/providers/metio/git/2025.12.12/docs/resources/init
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the created Git repository is bare or not. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.12.12/docs/resources/init#bare Init#bare}
  */
  readonly bare?: boolean | cdktf.IResolvable;
  /**
  * The path to the local Git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.12.12/docs/resources/init#directory Init#directory}
  */
  readonly directory: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/git/2025.12.12/docs/resources/init git_init}
*/
export class Init extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "git_init";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Init resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Init to import
  * @param importFromId The id of the existing Init that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/git/2025.12.12/docs/resources/init#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Init to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "git_init", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/git/2025.12.12/docs/resources/init git_init} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InitConfig
  */
  public constructor(scope: Construct, id: string, config: InitConfig) {
    super(scope, id, {
      terraformResourceType: 'git_init',
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
    this._bare = config.bare;
    this._directory = config.directory;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bare - computed: true, optional: true, required: false
  private _bare?: boolean | cdktf.IResolvable; 
  public get bare() {
    return this.getBooleanAttribute('bare');
  }
  public set bare(value: boolean | cdktf.IResolvable) {
    this._bare = value;
  }
  public resetBare() {
    this._bare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bareInput() {
    return this._bare;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bare: cdktf.booleanToTerraform(this._bare),
      directory: cdktf.stringToTerraform(this._directory),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bare: {
        value: cdktf.booleanToHclTerraform(this._bare),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      directory: {
        value: cdktf.stringToHclTerraform(this._directory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
