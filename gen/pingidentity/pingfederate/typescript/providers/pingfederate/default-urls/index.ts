// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/default_urls
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultUrlsConfig extends cdktf.TerraformMetaArguments {
  /**
  * IdP setting to prompt user to confirm Single Logout (SLO). The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/default_urls#confirm_idp_slo DefaultUrls#confirm_idp_slo}
  */
  readonly confirmIdpSlo?: boolean | cdktf.IResolvable;
  /**
  * SP setting to prompt user to confirm Single Logout (SLO). The default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/default_urls#confirm_sp_slo DefaultUrls#confirm_sp_slo}
  */
  readonly confirmSpSlo?: boolean | cdktf.IResolvable;
  /**
  * IdP setting for the error text displayed in a user's browser when an SSO operation fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/default_urls#idp_error_msg DefaultUrls#idp_error_msg}
  */
  readonly idpErrorMsg: string;
  /**
  * Idp setting for the default URL you would like to send the user to when Single Logout has succeeded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/default_urls#idp_slo_success_url DefaultUrls#idp_slo_success_url}
  */
  readonly idpSloSuccessUrl?: string;
  /**
  * SP setting for the default URL you would like to send the user to when Single Logout (SLO) has succeeded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/default_urls#sp_slo_success_url DefaultUrls#sp_slo_success_url}
  */
  readonly spSloSuccessUrl?: string;
  /**
  * SP setting for the default URL you would like to send the user to when Single Sign On (SSO) has succeeded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/default_urls#sp_sso_success_url DefaultUrls#sp_sso_success_url}
  */
  readonly spSsoSuccessUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/default_urls pingfederate_default_urls}
*/
export class DefaultUrls extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_default_urls";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultUrls resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultUrls to import
  * @param importFromId The id of the existing DefaultUrls that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/default_urls#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultUrls to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_default_urls", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/default_urls pingfederate_default_urls} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultUrlsConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultUrlsConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_default_urls',
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
    this._confirmIdpSlo = config.confirmIdpSlo;
    this._confirmSpSlo = config.confirmSpSlo;
    this._idpErrorMsg = config.idpErrorMsg;
    this._idpSloSuccessUrl = config.idpSloSuccessUrl;
    this._spSloSuccessUrl = config.spSloSuccessUrl;
    this._spSsoSuccessUrl = config.spSsoSuccessUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // confirm_idp_slo - computed: true, optional: true, required: false
  private _confirmIdpSlo?: boolean | cdktf.IResolvable; 
  public get confirmIdpSlo() {
    return this.getBooleanAttribute('confirm_idp_slo');
  }
  public set confirmIdpSlo(value: boolean | cdktf.IResolvable) {
    this._confirmIdpSlo = value;
  }
  public resetConfirmIdpSlo() {
    this._confirmIdpSlo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmIdpSloInput() {
    return this._confirmIdpSlo;
  }

  // confirm_sp_slo - computed: true, optional: true, required: false
  private _confirmSpSlo?: boolean | cdktf.IResolvable; 
  public get confirmSpSlo() {
    return this.getBooleanAttribute('confirm_sp_slo');
  }
  public set confirmSpSlo(value: boolean | cdktf.IResolvable) {
    this._confirmSpSlo = value;
  }
  public resetConfirmSpSlo() {
    this._confirmSpSlo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmSpSloInput() {
    return this._confirmSpSlo;
  }

  // idp_error_msg - computed: false, optional: false, required: true
  private _idpErrorMsg?: string; 
  public get idpErrorMsg() {
    return this.getStringAttribute('idp_error_msg');
  }
  public set idpErrorMsg(value: string) {
    this._idpErrorMsg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpErrorMsgInput() {
    return this._idpErrorMsg;
  }

  // idp_slo_success_url - computed: false, optional: true, required: false
  private _idpSloSuccessUrl?: string; 
  public get idpSloSuccessUrl() {
    return this.getStringAttribute('idp_slo_success_url');
  }
  public set idpSloSuccessUrl(value: string) {
    this._idpSloSuccessUrl = value;
  }
  public resetIdpSloSuccessUrl() {
    this._idpSloSuccessUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpSloSuccessUrlInput() {
    return this._idpSloSuccessUrl;
  }

  // sp_slo_success_url - computed: false, optional: true, required: false
  private _spSloSuccessUrl?: string; 
  public get spSloSuccessUrl() {
    return this.getStringAttribute('sp_slo_success_url');
  }
  public set spSloSuccessUrl(value: string) {
    this._spSloSuccessUrl = value;
  }
  public resetSpSloSuccessUrl() {
    this._spSloSuccessUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spSloSuccessUrlInput() {
    return this._spSloSuccessUrl;
  }

  // sp_sso_success_url - computed: false, optional: true, required: false
  private _spSsoSuccessUrl?: string; 
  public get spSsoSuccessUrl() {
    return this.getStringAttribute('sp_sso_success_url');
  }
  public set spSsoSuccessUrl(value: string) {
    this._spSsoSuccessUrl = value;
  }
  public resetSpSsoSuccessUrl() {
    this._spSsoSuccessUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spSsoSuccessUrlInput() {
    return this._spSsoSuccessUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      confirm_idp_slo: cdktf.booleanToTerraform(this._confirmIdpSlo),
      confirm_sp_slo: cdktf.booleanToTerraform(this._confirmSpSlo),
      idp_error_msg: cdktf.stringToTerraform(this._idpErrorMsg),
      idp_slo_success_url: cdktf.stringToTerraform(this._idpSloSuccessUrl),
      sp_slo_success_url: cdktf.stringToTerraform(this._spSloSuccessUrl),
      sp_sso_success_url: cdktf.stringToTerraform(this._spSsoSuccessUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      confirm_idp_slo: {
        value: cdktf.booleanToHclTerraform(this._confirmIdpSlo),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      confirm_sp_slo: {
        value: cdktf.booleanToHclTerraform(this._confirmSpSlo),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      idp_error_msg: {
        value: cdktf.stringToHclTerraform(this._idpErrorMsg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_slo_success_url: {
        value: cdktf.stringToHclTerraform(this._idpSloSuccessUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sp_slo_success_url: {
        value: cdktf.stringToHclTerraform(this._spSloSuccessUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sp_sso_success_url: {
        value: cdktf.stringToHclTerraform(this._spSsoSuccessUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
