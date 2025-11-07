// https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/data-sources/connected_accounts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVmcConnectedAccountsConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS account number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/data-sources/connected_accounts#account_number DataVmcConnectedAccounts#account_number}
  */
  readonly accountNumber: string;
  /**
  * The cloud provider of the SDDC (AWS or ZeroCloud).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/data-sources/connected_accounts#provider_type DataVmcConnectedAccounts#provider_type}
  */
  readonly providerType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/data-sources/connected_accounts vmc_connected_accounts}
*/
export class DataVmcConnectedAccounts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vmc_connected_accounts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVmcConnectedAccounts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVmcConnectedAccounts to import
  * @param importFromId The id of the existing DataVmcConnectedAccounts that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/data-sources/connected_accounts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVmcConnectedAccounts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vmc_connected_accounts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/data-sources/connected_accounts vmc_connected_accounts} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVmcConnectedAccountsConfig
  */
  public constructor(scope: Construct, id: string, config: DataVmcConnectedAccountsConfig) {
    super(scope, id, {
      terraformResourceType: 'vmc_connected_accounts',
      terraformGeneratorMetadata: {
        providerName: 'vmc',
        providerVersion: '1.15.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountNumber = config.accountNumber;
    this._providerType = config.providerType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_number - computed: false, optional: false, required: true
  private _accountNumber?: string; 
  public get accountNumber() {
    return this.getStringAttribute('account_number');
  }
  public set accountNumber(value: string) {
    this._accountNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNumberInput() {
    return this._accountNumber;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // provider_type - computed: false, optional: true, required: false
  private _providerType?: string; 
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }
  public set providerType(value: string) {
    this._providerType = value;
  }
  public resetProviderType() {
    this._providerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerTypeInput() {
    return this._providerType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_number: cdktf.stringToTerraform(this._accountNumber),
      provider_type: cdktf.stringToTerraform(this._providerType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_number: {
        value: cdktf.stringToHclTerraform(this._accountNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_type: {
        value: cdktf.stringToHclTerraform(this._providerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
