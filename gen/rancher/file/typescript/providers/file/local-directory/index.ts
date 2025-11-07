// https://registry.terraform.io/providers/rancher/file/2.2.2/docs/resources/local_directory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocalDirectoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Directory path, required. All subdirectories will also be created. Changing this forces recreate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/resources/local_directory#path LocalDirectory#path}
  */
  readonly path: string;
  /**
  * The directory permissions to assign to the directory, defaults to '0700'. In order to automatically create subdirectories the owner must have execute access, ie. '0600' or less prevents the provider from creating subdirectories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/resources/local_directory#permissions LocalDirectory#permissions}
  */
  readonly permissions?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/resources/local_directory file_local_directory}
*/
export class LocalDirectory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "file_local_directory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LocalDirectory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LocalDirectory to import
  * @param importFromId The id of the existing LocalDirectory that should be imported. Refer to the {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/resources/local_directory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LocalDirectory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "file_local_directory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/resources/local_directory file_local_directory} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocalDirectoryConfig
  */
  public constructor(scope: Construct, id: string, config: LocalDirectoryConfig) {
    super(scope, id, {
      terraformResourceType: 'file_local_directory',
      terraformGeneratorMetadata: {
        providerName: 'file',
        providerVersion: '2.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._permissions = config.permissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // permissions - computed: true, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      path: cdktf.stringToTerraform(this._path),
      permissions: cdktf.stringToTerraform(this._permissions),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions: {
        value: cdktf.stringToHclTerraform(this._permissions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
