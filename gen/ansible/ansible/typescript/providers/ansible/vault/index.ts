// https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/vault#id Vault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Path to encrypted vault file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/vault#vault_file Vault#vault_file}
  */
  readonly vaultFile: string;
  /**
  * ID of the encrypted vault file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/vault#vault_id Vault#vault_id}
  */
  readonly vaultId?: string;
  /**
  * Path to vault password file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/vault#vault_password_file Vault#vault_password_file}
  */
  readonly vaultPasswordFile: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/vault ansible_vault}
*/
export class Vault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ansible_vault";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vault resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vault to import
  * @param importFromId The id of the existing Vault that should be imported. Refer to the {@link https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/vault#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ansible_vault", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ansible/ansible/1.3.0/docs/resources/vault ansible_vault} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultConfig
  */
  public constructor(scope: Construct, id: string, config: VaultConfig) {
    super(scope, id, {
      terraformResourceType: 'ansible_vault',
      terraformGeneratorMetadata: {
        providerName: 'ansible',
        providerVersion: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._vaultFile = config.vaultFile;
    this._vaultId = config.vaultId;
    this._vaultPasswordFile = config.vaultPasswordFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // args - computed: true, optional: false, required: false
  public get args() {
    return this.getListAttribute('args');
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

  // vault_file - computed: false, optional: false, required: true
  private _vaultFile?: string; 
  public get vaultFile() {
    return this.getStringAttribute('vault_file');
  }
  public set vaultFile(value: string) {
    this._vaultFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultFileInput() {
    return this._vaultFile;
  }

  // vault_id - computed: false, optional: true, required: false
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  public resetVaultId() {
    this._vaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }

  // vault_password_file - computed: false, optional: false, required: true
  private _vaultPasswordFile?: string; 
  public get vaultPasswordFile() {
    return this.getStringAttribute('vault_password_file');
  }
  public set vaultPasswordFile(value: string) {
    this._vaultPasswordFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultPasswordFileInput() {
    return this._vaultPasswordFile;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      vault_file: cdktf.stringToTerraform(this._vaultFile),
      vault_id: cdktf.stringToTerraform(this._vaultId),
      vault_password_file: cdktf.stringToTerraform(this._vaultPasswordFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_file: {
        value: cdktf.stringToHclTerraform(this._vaultFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_id: {
        value: cdktf.stringToHclTerraform(this._vaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_password_file: {
        value: cdktf.stringToHclTerraform(this._vaultPasswordFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
