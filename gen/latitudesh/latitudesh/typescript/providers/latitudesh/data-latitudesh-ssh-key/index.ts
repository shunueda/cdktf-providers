// https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.7/docs/data-sources/ssh_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLatitudeshSshKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * SSH key fingerprint to look up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.7/docs/data-sources/ssh_key#fingerprint DataLatitudeshSshKey#fingerprint}
  */
  readonly fingerprint?: string;
  /**
  * SSH key identifier to look up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.7/docs/data-sources/ssh_key#id DataLatitudeshSshKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * SSH key name to look up (must be unique in your account).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.7/docs/data-sources/ssh_key#name DataLatitudeshSshKey#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.7/docs/data-sources/ssh_key latitudesh_ssh_key}
*/
export class DataLatitudeshSshKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "latitudesh_ssh_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLatitudeshSshKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLatitudeshSshKey to import
  * @param importFromId The id of the existing DataLatitudeshSshKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.7/docs/data-sources/ssh_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLatitudeshSshKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "latitudesh_ssh_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.7/docs/data-sources/ssh_key latitudesh_ssh_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLatitudeshSshKeyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLatitudeshSshKeyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'latitudesh_ssh_key',
      terraformGeneratorMetadata: {
        providerName: 'latitudesh',
        providerVersion: '2.8.7',
        providerVersionConstraint: '2.8.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fingerprint = config.fingerprint;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // fingerprint - computed: false, optional: true, required: false
  private _fingerprint?: string; 
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }
  public set fingerprint(value: string) {
    this._fingerprint = value;
  }
  public resetFingerprint() {
    this._fingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintInput() {
    return this._fingerprint;
  }

  // id - computed: false, optional: true, required: false
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

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fingerprint: cdktf.stringToTerraform(this._fingerprint),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fingerprint: {
        value: cdktf.stringToHclTerraform(this._fingerprint),
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
