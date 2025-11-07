// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policies_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationPoliciesSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable IdP authentication policies. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policies_settings#enable_idp_authn_selection AuthenticationPoliciesSettings#enable_idp_authn_selection}
  */
  readonly enableIdpAuthnSelection?: boolean | cdktf.IResolvable;
  /**
  * Enable SP authentication policies. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policies_settings#enable_sp_authn_selection AuthenticationPoliciesSettings#enable_sp_authn_selection}
  */
  readonly enableSpAuthnSelection?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policies_settings pingfederate_authentication_policies_settings}
*/
export class AuthenticationPoliciesSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_authentication_policies_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthenticationPoliciesSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthenticationPoliciesSettings to import
  * @param importFromId The id of the existing AuthenticationPoliciesSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policies_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthenticationPoliciesSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_authentication_policies_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policies_settings pingfederate_authentication_policies_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationPoliciesSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AuthenticationPoliciesSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_authentication_policies_settings',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableIdpAuthnSelection = config.enableIdpAuthnSelection;
    this._enableSpAuthnSelection = config.enableSpAuthnSelection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_idp_authn_selection - computed: true, optional: true, required: false
  private _enableIdpAuthnSelection?: boolean | cdktf.IResolvable; 
  public get enableIdpAuthnSelection() {
    return this.getBooleanAttribute('enable_idp_authn_selection');
  }
  public set enableIdpAuthnSelection(value: boolean | cdktf.IResolvable) {
    this._enableIdpAuthnSelection = value;
  }
  public resetEnableIdpAuthnSelection() {
    this._enableIdpAuthnSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIdpAuthnSelectionInput() {
    return this._enableIdpAuthnSelection;
  }

  // enable_sp_authn_selection - computed: true, optional: true, required: false
  private _enableSpAuthnSelection?: boolean | cdktf.IResolvable; 
  public get enableSpAuthnSelection() {
    return this.getBooleanAttribute('enable_sp_authn_selection');
  }
  public set enableSpAuthnSelection(value: boolean | cdktf.IResolvable) {
    this._enableSpAuthnSelection = value;
  }
  public resetEnableSpAuthnSelection() {
    this._enableSpAuthnSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSpAuthnSelectionInput() {
    return this._enableSpAuthnSelection;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_idp_authn_selection: cdktf.booleanToTerraform(this._enableIdpAuthnSelection),
      enable_sp_authn_selection: cdktf.booleanToTerraform(this._enableSpAuthnSelection),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_idp_authn_selection: {
        value: cdktf.booleanToHclTerraform(this._enableIdpAuthnSelection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_sp_authn_selection: {
        value: cdktf.booleanToHclTerraform(this._enableSpAuthnSelection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
