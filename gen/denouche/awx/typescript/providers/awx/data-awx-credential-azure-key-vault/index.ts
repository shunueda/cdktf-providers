// https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/data-sources/credential_azure_key_vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwxCredentialAzureKeyVaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/data-sources/credential_azure_key_vault#credential_id DataAwxCredentialAzureKeyVault#credential_id}
  */
  readonly credentialId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/data-sources/credential_azure_key_vault#id DataAwxCredentialAzureKeyVault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/data-sources/credential_azure_key_vault awx_credential_azure_key_vault}
*/
export class DataAwxCredentialAzureKeyVault extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awx_credential_azure_key_vault";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwxCredentialAzureKeyVault resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwxCredentialAzureKeyVault to import
  * @param importFromId The id of the existing DataAwxCredentialAzureKeyVault that should be imported. Refer to the {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/data-sources/credential_azure_key_vault#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwxCredentialAzureKeyVault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awx_credential_azure_key_vault", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/denouche/awx/0.29.1/docs/data-sources/credential_azure_key_vault awx_credential_azure_key_vault} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwxCredentialAzureKeyVaultConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwxCredentialAzureKeyVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'awx_credential_azure_key_vault',
      terraformGeneratorMetadata: {
        providerName: 'awx',
        providerVersion: '0.29.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._credentialId = config.credentialId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client - computed: true, optional: false, required: false
  public get client() {
    return this.getStringAttribute('client');
  }

  // credential_id - computed: false, optional: false, required: true
  private _credentialId?: number; 
  public get credentialId() {
    return this.getNumberAttribute('credential_id');
  }
  public set credentialId(value: number) {
    this._credentialId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialIdInput() {
    return this._credentialId;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getNumberAttribute('organization_id');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // tenant - computed: true, optional: false, required: false
  public get tenant() {
    return this.getStringAttribute('tenant');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credential_id: cdktf.numberToTerraform(this._credentialId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credential_id: {
        value: cdktf.numberToHclTerraform(this._credentialId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
