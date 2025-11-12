// https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/galaxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GalaxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Path to the ansible-galaxy executable (binary)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/galaxy#ansible_galaxy_binary Galaxy#ansible_galaxy_binary}
  */
  readonly ansibleGalaxyBinary?: string;
  /**
  * The name that will be given to the role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/galaxy#name Galaxy#name}
  */
  readonly name?: string;
  /**
  * The user/role combination. This can also be a URL to a Git repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/galaxy#role Galaxy#role}
  */
  readonly role: string;
  /**
  * The version of the role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/galaxy#version Galaxy#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/galaxy ansible_galaxy}
*/
export class Galaxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ansible_galaxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Galaxy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Galaxy to import
  * @param importFromId The id of the existing Galaxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/galaxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Galaxy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ansible_galaxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nefixestrada/ansible/2.0.4/docs/resources/galaxy ansible_galaxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GalaxyConfig
  */
  public constructor(scope: Construct, id: string, config: GalaxyConfig) {
    super(scope, id, {
      terraformResourceType: 'ansible_galaxy',
      terraformGeneratorMetadata: {
        providerName: 'ansible',
        providerVersion: '2.0.4',
        providerVersionConstraint: '2.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ansibleGalaxyBinary = config.ansibleGalaxyBinary;
    this._name = config.name;
    this._role = config.role;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ansible_galaxy_binary - computed: true, optional: true, required: false
  private _ansibleGalaxyBinary?: string; 
  public get ansibleGalaxyBinary() {
    return this.getStringAttribute('ansible_galaxy_binary');
  }
  public set ansibleGalaxyBinary(value: string) {
    this._ansibleGalaxyBinary = value;
  }
  public resetAnsibleGalaxyBinary() {
    this._ansibleGalaxyBinary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ansibleGalaxyBinaryInput() {
    return this._ansibleGalaxyBinary;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ansible_galaxy_binary: cdktf.stringToTerraform(this._ansibleGalaxyBinary),
      name: cdktf.stringToTerraform(this._name),
      role: cdktf.stringToTerraform(this._role),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ansible_galaxy_binary: {
        value: cdktf.stringToHclTerraform(this._ansibleGalaxyBinary),
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
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
