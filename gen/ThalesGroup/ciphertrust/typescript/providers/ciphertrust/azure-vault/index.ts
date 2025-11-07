// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureVaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Updateable) Name or ID of the Azure connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_vault#azure_connection AzureVault#azure_connection}
  */
  readonly azureConnection: string;
  /**
  * Set to true for Azure Managed HSM vaults
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_vault#managed_hsm AzureVault#managed_hsm}
  */
  readonly managedHsm?: boolean | cdktf.IResolvable;
  /**
  * Name of an existing Azure vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_vault#name AzureVault#name}
  */
  readonly name: string;
  /**
  * Azure subscription ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_vault#subscription_id AzureVault#subscription_id}
  */
  readonly subscriptionId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_vault ciphertrust_azure_vault}
*/
export class AzureVault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_azure_vault";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureVault resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureVault to import
  * @param importFromId The id of the existing AzureVault that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_vault#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureVault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_azure_vault", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/azure_vault ciphertrust_azure_vault} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureVaultConfig
  */
  public constructor(scope: Construct, id: string, config: AzureVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_azure_vault',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._azureConnection = config.azureConnection;
    this._managedHsm = config.managedHsm;
    this._name = config.name;
    this._subscriptionId = config.subscriptionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_connection - computed: false, optional: false, required: true
  private _azureConnection?: string; 
  public get azureConnection() {
    return this.getStringAttribute('azure_connection');
  }
  public set azureConnection(value: string) {
    this._azureConnection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureConnectionInput() {
    return this._azureConnection;
  }

  // azure_vault_id - computed: true, optional: false, required: false
  public get azureVaultId() {
    return this.getStringAttribute('azure_vault_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed_hsm - computed: false, optional: true, required: false
  private _managedHsm?: boolean | cdktf.IResolvable; 
  public get managedHsm() {
    return this.getBooleanAttribute('managed_hsm');
  }
  public set managedHsm(value: boolean | cdktf.IResolvable) {
    this._managedHsm = value;
  }
  public resetManagedHsm() {
    this._managedHsm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedHsmInput() {
    return this._managedHsm;
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

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      azure_connection: cdktf.stringToTerraform(this._azureConnection),
      managed_hsm: cdktf.booleanToTerraform(this._managedHsm),
      name: cdktf.stringToTerraform(this._name),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      azure_connection: {
        value: cdktf.stringToHclTerraform(this._azureConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_hsm: {
        value: cdktf.booleanToHclTerraform(this._managedHsm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
