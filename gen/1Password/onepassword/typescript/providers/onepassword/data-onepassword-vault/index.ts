// https://registry.terraform.io/providers/1password/onepassword/3.0.1/docs/data-sources/vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOnepasswordVaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the vault to retrieve. This field will be populated with the name of the vault if the vault it looked up by its UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/3.0.1/docs/data-sources/vault#name DataOnepasswordVault#name}
  */
  readonly name?: string;
  /**
  * The UUID of the vault to retrieve. This field will be populated with the UUID of the vault if the vault it looked up by its name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/3.0.1/docs/data-sources/vault#uuid DataOnepasswordVault#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/1password/onepassword/3.0.1/docs/data-sources/vault onepassword_vault}
*/
export class DataOnepasswordVault extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "onepassword_vault";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOnepasswordVault resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOnepasswordVault to import
  * @param importFromId The id of the existing DataOnepasswordVault that should be imported. Refer to the {@link https://registry.terraform.io/providers/1password/onepassword/3.0.1/docs/data-sources/vault#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOnepasswordVault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "onepassword_vault", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/1password/onepassword/3.0.1/docs/data-sources/vault onepassword_vault} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOnepasswordVaultConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOnepasswordVaultConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'onepassword_vault',
      terraformGeneratorMetadata: {
        providerName: 'onepassword',
        providerVersion: '3.0.1',
        providerVersionConstraint: '3.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
