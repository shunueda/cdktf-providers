// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/azure_account_details
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCiphertrustAzureAccountDetailsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name or ID of the Azure connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/azure_account_details#azure_connection DataCiphertrustAzureAccountDetails#azure_connection}
  */
  readonly azureConnection: string;
  /**
  * Display name of the Subscription. If not set the first subscription is returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/azure_account_details#display_name DataCiphertrustAzureAccountDetails#display_name}
  */
  readonly displayName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/azure_account_details ciphertrust_azure_account_details}
*/
export class DataCiphertrustAzureAccountDetails extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_azure_account_details";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCiphertrustAzureAccountDetails resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCiphertrustAzureAccountDetails to import
  * @param importFromId The id of the existing DataCiphertrustAzureAccountDetails that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/azure_account_details#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCiphertrustAzureAccountDetails to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_azure_account_details", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/azure_account_details ciphertrust_azure_account_details} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCiphertrustAzureAccountDetailsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCiphertrustAzureAccountDetailsConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_azure_account_details',
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
    this._displayName = config.displayName;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      azure_connection: cdktf.stringToTerraform(this._azureConnection),
      display_name: cdktf.stringToTerraform(this._displayName),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
