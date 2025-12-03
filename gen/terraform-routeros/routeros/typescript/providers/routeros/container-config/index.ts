// https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/container_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/container_config#___path___ ContainerConfigA#___path___}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/container_config#id ContainerConfigA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Container layers directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/container_config#layer_dir ContainerConfigA#layer_dir}
  */
  readonly layerDir?: string;
  /**
  * Specifies the password for authentication (starting from ROS 7.8)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/container_config#password ContainerConfigA#password}
  */
  readonly password?: string;
  /**
  * RAM usage limit. (0 for unlimited)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/container_config#ram_high ContainerConfigA#ram_high}
  */
  readonly ramHigh?: string;
  /**
  * External registry url from where the container will be downloaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/container_config#registry_url ContainerConfigA#registry_url}
  */
  readonly registryUrl?: string;
  /**
  * Container extraction directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/container_config#tmpdir ContainerConfigA#tmpdir}
  */
  readonly tmpdir?: string;
  /**
  * Specifies the username for authentication (starting from ROS 7.8)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/container_config#username ContainerConfigA#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/container_config routeros_container_config}
*/
export class ContainerConfigA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_container_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContainerConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContainerConfigA to import
  * @param importFromId The id of the existing ContainerConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/container_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContainerConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_container_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/container_config routeros_container_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerConfigAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ContainerConfigAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_container_config',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.96.0',
        providerVersionConstraint: '1.96.0'
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
    this._id = config.id;
    this._layerDir = config.layerDir;
    this._password = config.password;
    this._ramHigh = config.ramHigh;
    this._registryUrl = config.registryUrl;
    this._tmpdir = config.tmpdir;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // layer_dir - computed: false, optional: true, required: false
  private _layerDir?: string; 
  public get layerDir() {
    return this.getStringAttribute('layer_dir');
  }
  public set layerDir(value: string) {
    this._layerDir = value;
  }
  public resetLayerDir() {
    this._layerDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layerDirInput() {
    return this._layerDir;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // ram_high - computed: false, optional: true, required: false
  private _ramHigh?: string; 
  public get ramHigh() {
    return this.getStringAttribute('ram_high');
  }
  public set ramHigh(value: string) {
    this._ramHigh = value;
  }
  public resetRamHigh() {
    this._ramHigh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramHighInput() {
    return this._ramHigh;
  }

  // registry_url - computed: false, optional: true, required: false
  private _registryUrl?: string; 
  public get registryUrl() {
    return this.getStringAttribute('registry_url');
  }
  public set registryUrl(value: string) {
    this._registryUrl = value;
  }
  public resetRegistryUrl() {
    this._registryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryUrlInput() {
    return this._registryUrl;
  }

  // tmpdir - computed: false, optional: true, required: false
  private _tmpdir?: string; 
  public get tmpdir() {
    return this.getStringAttribute('tmpdir');
  }
  public set tmpdir(value: string) {
    this._tmpdir = value;
  }
  public resetTmpdir() {
    this._tmpdir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmpdirInput() {
    return this._tmpdir;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      id: cdktf.stringToTerraform(this._id),
      layer_dir: cdktf.stringToTerraform(this._layerDir),
      password: cdktf.stringToTerraform(this._password),
      ram_high: cdktf.stringToTerraform(this._ramHigh),
      registry_url: cdktf.stringToTerraform(this._registryUrl),
      tmpdir: cdktf.stringToTerraform(this._tmpdir),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
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
      layer_dir: {
        value: cdktf.stringToHclTerraform(this._layerDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ram_high: {
        value: cdktf.stringToHclTerraform(this._ramHigh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_url: {
        value: cdktf.stringToHclTerraform(this._registryUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tmpdir: {
        value: cdktf.stringToHclTerraform(this._tmpdir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
