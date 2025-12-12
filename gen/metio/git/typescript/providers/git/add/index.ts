// https://registry.terraform.io/providers/metio/git/2025.12.12/docs/resources/add
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AddConfig extends cdktf.TerraformMetaArguments {
  /**
  * The paths to add to the Git index. Values can be exact paths or glob patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.12.12/docs/resources/add#add_paths Add#add_paths}
  */
  readonly addPaths: string[];
  /**
  * The path to the local Git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.12.12/docs/resources/add#directory Add#directory}
  */
  readonly directory: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/git/2025.12.12/docs/resources/add git_add}
*/
export class Add extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "git_add";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Add resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Add to import
  * @param importFromId The id of the existing Add that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/git/2025.12.12/docs/resources/add#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Add to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "git_add", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/git/2025.12.12/docs/resources/add git_add} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AddConfig
  */
  public constructor(scope: Construct, id: string, config: AddConfig) {
    super(scope, id, {
      terraformResourceType: 'git_add',
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
    this._addPaths = config.addPaths;
    this._directory = config.directory;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_paths - computed: false, optional: false, required: true
  private _addPaths?: string[]; 
  public get addPaths() {
    return this.getListAttribute('add_paths');
  }
  public set addPaths(value: string[]) {
    this._addPaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addPathsInput() {
    return this._addPaths;
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
    return this.getNumberAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addPaths),
      directory: cdktf.stringToTerraform(this._directory),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addPaths),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
