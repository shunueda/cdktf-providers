// https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/signin_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SigninPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * This Aembit Tenant setting enforces that all users must sign in with a configured MFA application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/signin_policy#mfa_required SigninPolicy#mfa_required}
  */
  readonly mfaRequired: boolean | cdktf.IResolvable;
  /**
  * This Aembit Tenant setting enforces that all users must sign in with a configured SSO Identity Provider. Users with the SuperAdmin role can bypass this restriction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/signin_policy#sso_required SigninPolicy#sso_required}
  */
  readonly ssoRequired: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/signin_policy aembit_signin_policy}
*/
export class SigninPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aembit_signin_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SigninPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SigninPolicy to import
  * @param importFromId The id of the existing SigninPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/signin_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SigninPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aembit_signin_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/signin_policy aembit_signin_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SigninPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SigninPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aembit_signin_policy',
      terraformGeneratorMetadata: {
        providerName: 'aembit',
        providerVersion: '1.25.1',
        providerVersionConstraint: '1.25.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._mfaRequired = config.mfaRequired;
    this._ssoRequired = config.ssoRequired;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mfa_required - computed: false, optional: false, required: true
  private _mfaRequired?: boolean | cdktf.IResolvable; 
  public get mfaRequired() {
    return this.getBooleanAttribute('mfa_required');
  }
  public set mfaRequired(value: boolean | cdktf.IResolvable) {
    this._mfaRequired = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaRequiredInput() {
    return this._mfaRequired;
  }

  // sso_required - computed: false, optional: false, required: true
  private _ssoRequired?: boolean | cdktf.IResolvable; 
  public get ssoRequired() {
    return this.getBooleanAttribute('sso_required');
  }
  public set ssoRequired(value: boolean | cdktf.IResolvable) {
    this._ssoRequired = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoRequiredInput() {
    return this._ssoRequired;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      mfa_required: cdktf.booleanToTerraform(this._mfaRequired),
      sso_required: cdktf.booleanToTerraform(this._ssoRequired),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      mfa_required: {
        value: cdktf.booleanToHclTerraform(this._mfaRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sso_required: {
        value: cdktf.booleanToHclTerraform(this._ssoRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
