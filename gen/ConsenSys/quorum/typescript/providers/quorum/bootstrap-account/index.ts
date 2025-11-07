// https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BootstrapAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * A place holder to keep account initial balance for referencing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_account#balance BootstrapAccount#balance}
  */
  readonly balance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_account#id BootstrapAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Passphrase to lock/unlock the account. Default is empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_account#passphrase BootstrapAccount#passphrase}
  */
  readonly passphrase?: string;
  /**
  * ID of a wallet storing the newly created account. For keystore, it's the keystore resource id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_account#wallet_id BootstrapAccount#wallet_id}
  */
  readonly walletId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_account quorum_bootstrap_account}
*/
export class BootstrapAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "quorum_bootstrap_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BootstrapAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BootstrapAccount to import
  * @param importFromId The id of the existing BootstrapAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BootstrapAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "quorum_bootstrap_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_account quorum_bootstrap_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BootstrapAccountConfig
  */
  public constructor(scope: Construct, id: string, config: BootstrapAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'quorum_bootstrap_account',
      terraformGeneratorMetadata: {
        providerName: 'quorum',
        providerVersion: '0.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._balance = config.balance;
    this._id = config.id;
    this._passphrase = config.passphrase;
    this._walletId = config.walletId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_url - computed: true, optional: false, required: false
  public get accountUrl() {
    return this.getStringAttribute('account_url');
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // balance - computed: false, optional: true, required: false
  private _balance?: string; 
  public get balance() {
    return this.getStringAttribute('balance');
  }
  public set balance(value: string) {
    this._balance = value;
  }
  public resetBalance() {
    this._balance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balanceInput() {
    return this._balance;
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

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // wallet_id - computed: false, optional: false, required: true
  private _walletId?: string; 
  public get walletId() {
    return this.getStringAttribute('wallet_id');
  }
  public set walletId(value: string) {
    this._walletId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get walletIdInput() {
    return this._walletId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      balance: cdktf.stringToTerraform(this._balance),
      id: cdktf.stringToTerraform(this._id),
      passphrase: cdktf.stringToTerraform(this._passphrase),
      wallet_id: cdktf.stringToTerraform(this._walletId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      balance: {
        value: cdktf.stringToHclTerraform(this._balance),
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
      passphrase: {
        value: cdktf.stringToHclTerraform(this._passphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wallet_id: {
        value: cdktf.stringToHclTerraform(this._walletId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
