// https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/account_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account name. Defaults to the current account. I.e. the account configured on the `provider` block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/account_token#account AccountToken#account}
  */
  readonly account?: string;
  /**
  * Duration before the token will expire. Valid time units are `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`. E.g. `12h`, `7d`. Default: No expiration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/account_token#expires_in AccountToken#expires_in}
  */
  readonly expiresIn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/account_token#id AccountToken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Duration to control token silent regeneration based on token age. Valid time units are `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`. If set, then the token will be regenerated if it is older than `renew_after`. I.e. if `currentDate - issued_at > renew_after`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/account_token#renew_after AccountToken#renew_after}
  */
  readonly renewAfter?: string;
  /**
  * Duration to control token silent regeneration based on remaining token lifetime. If `expires_in` is set, Terraform will regenerate the token if `expires_at - currentDate < renew_before`. Valid time units are `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/account_token#renew_before AccountToken#renew_before}
  */
  readonly renewBefore?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/account_token argocd_account_token}
*/
export class AccountToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "argocd_account_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccountToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccountToken to import
  * @param importFromId The id of the existing AccountToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/account_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "argocd_account_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/account_token argocd_account_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountTokenConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AccountTokenConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'argocd_account_token',
      terraformGeneratorMetadata: {
        providerName: 'argocd',
        providerVersion: '7.11.2',
        providerVersionConstraint: '7.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._account = config.account;
    this._expiresIn = config.expiresIn;
    this._id = config.id;
    this._renewAfter = config.renewAfter;
    this._renewBefore = config.renewBefore;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // expires_in - computed: false, optional: true, required: false
  private _expiresIn?: string; 
  public get expiresIn() {
    return this.getStringAttribute('expires_in');
  }
  public set expiresIn(value: string) {
    this._expiresIn = value;
  }
  public resetExpiresIn() {
    this._expiresIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresInInput() {
    return this._expiresIn;
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

  // issued_at - computed: true, optional: false, required: false
  public get issuedAt() {
    return this.getStringAttribute('issued_at');
  }

  // jwt - computed: true, optional: false, required: false
  public get jwt() {
    return this.getStringAttribute('jwt');
  }

  // renew_after - computed: false, optional: true, required: false
  private _renewAfter?: string; 
  public get renewAfter() {
    return this.getStringAttribute('renew_after');
  }
  public set renewAfter(value: string) {
    this._renewAfter = value;
  }
  public resetRenewAfter() {
    this._renewAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewAfterInput() {
    return this._renewAfter;
  }

  // renew_before - computed: false, optional: true, required: false
  private _renewBefore?: string; 
  public get renewBefore() {
    return this.getStringAttribute('renew_before');
  }
  public set renewBefore(value: string) {
    this._renewBefore = value;
  }
  public resetRenewBefore() {
    this._renewBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewBeforeInput() {
    return this._renewBefore;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account: cdktf.stringToTerraform(this._account),
      expires_in: cdktf.stringToTerraform(this._expiresIn),
      id: cdktf.stringToTerraform(this._id),
      renew_after: cdktf.stringToTerraform(this._renewAfter),
      renew_before: cdktf.stringToTerraform(this._renewBefore),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account: {
        value: cdktf.stringToHclTerraform(this._account),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expires_in: {
        value: cdktf.stringToHclTerraform(this._expiresIn),
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
      renew_after: {
        value: cdktf.stringToHclTerraform(this._renewAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renew_before: {
        value: cdktf.stringToHclTerraform(this._renewBefore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
