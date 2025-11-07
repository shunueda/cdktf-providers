// https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/credential_vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialVaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/credential_vault#description CredentialVault#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/credential_vault#id CredentialVault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/credential_vault#name CredentialVault#name}
  */
  readonly name: string;
  /**
  * The organization ID this credential belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/credential_vault#organization_id CredentialVault#organization_id}
  */
  readonly organizationId?: number;
  /**
  * The vault identity to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/credential_vault#vault_id CredentialVault#vault_id}
  */
  readonly vaultId?: string;
  /**
  * Vault Password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/credential_vault#vault_password CredentialVault#vault_password}
  */
  readonly vaultPassword: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/credential_vault awx_credential_vault}
*/
export class CredentialVault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awx_credential_vault";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CredentialVault resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CredentialVault to import
  * @param importFromId The id of the existing CredentialVault that should be imported. Refer to the {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/credential_vault#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CredentialVault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awx_credential_vault", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/credential_vault awx_credential_vault} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialVaultConfig
  */
  public constructor(scope: Construct, id: string, config: CredentialVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'awx_credential_vault',
      terraformGeneratorMetadata: {
        providerName: 'awx',
        providerVersion: '1.7.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._organizationId = config.organizationId;
    this._vaultId = config.vaultId;
    this._vaultPassword = config.vaultPassword;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // organization_id - computed: false, optional: true, required: false
  private _organizationId?: number; 
  public get organizationId() {
    return this.getNumberAttribute('organization_id');
  }
  public set organizationId(value: number) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
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

  // vault_password - computed: false, optional: false, required: true
  private _vaultPassword?: string; 
  public get vaultPassword() {
    return this.getStringAttribute('vault_password');
  }
  public set vaultPassword(value: string) {
    this._vaultPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultPasswordInput() {
    return this._vaultPassword;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.numberToTerraform(this._organizationId),
      vault_id: cdktf.stringToTerraform(this._vaultId),
      vault_password: cdktf.stringToTerraform(this._vaultPassword),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      organization_id: {
        value: cdktf.numberToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vault_id: {
        value: cdktf.stringToHclTerraform(this._vaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_password: {
        value: cdktf.stringToHclTerraform(this._vaultPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
