// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/azure_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCiphertrustAzureConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the Azure connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/azure_connection#azure_connection DataCiphertrustAzureConnection#azure_connection}
  */
  readonly azureConnection: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/azure_connection ciphertrust_azure_connection}
*/
export class DataCiphertrustAzureConnection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_azure_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCiphertrustAzureConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCiphertrustAzureConnection to import
  * @param importFromId The id of the existing DataCiphertrustAzureConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/azure_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCiphertrustAzureConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_azure_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/azure_connection ciphertrust_azure_connection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCiphertrustAzureConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataCiphertrustAzureConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_azure_connection',
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

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // vaults - computed: true, optional: false, required: false
  private _vaults = new cdktf.StringMap(this, "vaults");
  public get vaults() {
    return this._vaults;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      azure_connection: cdktf.stringToTerraform(this._azureConnection),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
