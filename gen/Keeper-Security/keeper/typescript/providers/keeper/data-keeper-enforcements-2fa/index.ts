// https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_2fa
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKeeperEnforcements2FaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Require 2fa for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_2fa#require_two_factor DataKeeperEnforcements2Fa#require_two_factor}
  */
  readonly requireTwoFactor?: boolean | cdktf.IResolvable;
  /**
  * Restrict use of KeeperDNA for 2fa
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_2fa#restrict_two_factor_channel_dna DataKeeperEnforcements2Fa#restrict_two_factor_channel_dna}
  */
  readonly restrictTwoFactorChannelDna?: boolean | cdktf.IResolvable;
  /**
  * Restrict use of DUO for 2fa
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_2fa#restrict_two_factor_channel_duo DataKeeperEnforcements2Fa#restrict_two_factor_channel_duo}
  */
  readonly restrictTwoFactorChannelDuo?: boolean | cdktf.IResolvable;
  /**
  * Restrict use of Google Authenticator for 2fa
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_2fa#restrict_two_factor_channel_google DataKeeperEnforcements2Fa#restrict_two_factor_channel_google}
  */
  readonly restrictTwoFactorChannelGoogle?: boolean | cdktf.IResolvable;
  /**
  * Restrict use of RSA SecurID for 2fa
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_2fa#restrict_two_factor_channel_rsa DataKeeperEnforcements2Fa#restrict_two_factor_channel_rsa}
  */
  readonly restrictTwoFactorChannelRsa?: boolean | cdktf.IResolvable;
  /**
  * Restrict use of security keys (FIDO2 WebAuthn) for 2fa
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_2fa#restrict_two_factor_channel_security_keys DataKeeperEnforcements2Fa#restrict_two_factor_channel_security_keys}
  */
  readonly restrictTwoFactorChannelSecurityKeys?: boolean | cdktf.IResolvable;
  /**
  * Restrict use of SMS/text message for 2fa
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_2fa#restrict_two_factor_channel_text DataKeeperEnforcements2Fa#restrict_two_factor_channel_text}
  */
  readonly restrictTwoFactorChannelText?: boolean | cdktf.IResolvable;
  /**
  * 2fa duration for desktop client app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_2fa#two_factor_duration_desktop DataKeeperEnforcements2Fa#two_factor_duration_desktop}
  */
  readonly twoFactorDurationDesktop?: string;
  /**
  * 2fa duration for mobile client app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_2fa#two_factor_duration_mobile DataKeeperEnforcements2Fa#two_factor_duration_mobile}
  */
  readonly twoFactorDurationMobile?: string;
  /**
  * 2fa duration for web client app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_2fa#two_factor_duration_web DataKeeperEnforcements2Fa#two_factor_duration_web}
  */
  readonly twoFactorDurationWeb?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_2fa keeper_enforcements_2fa}
*/
export class DataKeeperEnforcements2Fa extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keeper_enforcements_2fa";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeeperEnforcements2Fa resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeeperEnforcements2Fa to import
  * @param importFromId The id of the existing DataKeeperEnforcements2Fa that should be imported. Refer to the {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_2fa#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeeperEnforcements2Fa to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keeper_enforcements_2fa", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_2fa keeper_enforcements_2fa} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeeperEnforcements2FaConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataKeeperEnforcements2FaConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'keeper_enforcements_2fa',
      terraformGeneratorMetadata: {
        providerName: 'keeper',
        providerVersion: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._requireTwoFactor = config.requireTwoFactor;
    this._restrictTwoFactorChannelDna = config.restrictTwoFactorChannelDna;
    this._restrictTwoFactorChannelDuo = config.restrictTwoFactorChannelDuo;
    this._restrictTwoFactorChannelGoogle = config.restrictTwoFactorChannelGoogle;
    this._restrictTwoFactorChannelRsa = config.restrictTwoFactorChannelRsa;
    this._restrictTwoFactorChannelSecurityKeys = config.restrictTwoFactorChannelSecurityKeys;
    this._restrictTwoFactorChannelText = config.restrictTwoFactorChannelText;
    this._twoFactorDurationDesktop = config.twoFactorDurationDesktop;
    this._twoFactorDurationMobile = config.twoFactorDurationMobile;
    this._twoFactorDurationWeb = config.twoFactorDurationWeb;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // require_two_factor - computed: false, optional: true, required: false
  private _requireTwoFactor?: boolean | cdktf.IResolvable; 
  public get requireTwoFactor() {
    return this.getBooleanAttribute('require_two_factor');
  }
  public set requireTwoFactor(value: boolean | cdktf.IResolvable) {
    this._requireTwoFactor = value;
  }
  public resetRequireTwoFactor() {
    this._requireTwoFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireTwoFactorInput() {
    return this._requireTwoFactor;
  }

  // restrict_two_factor_channel_dna - computed: false, optional: true, required: false
  private _restrictTwoFactorChannelDna?: boolean | cdktf.IResolvable; 
  public get restrictTwoFactorChannelDna() {
    return this.getBooleanAttribute('restrict_two_factor_channel_dna');
  }
  public set restrictTwoFactorChannelDna(value: boolean | cdktf.IResolvable) {
    this._restrictTwoFactorChannelDna = value;
  }
  public resetRestrictTwoFactorChannelDna() {
    this._restrictTwoFactorChannelDna = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictTwoFactorChannelDnaInput() {
    return this._restrictTwoFactorChannelDna;
  }

  // restrict_two_factor_channel_duo - computed: false, optional: true, required: false
  private _restrictTwoFactorChannelDuo?: boolean | cdktf.IResolvable; 
  public get restrictTwoFactorChannelDuo() {
    return this.getBooleanAttribute('restrict_two_factor_channel_duo');
  }
  public set restrictTwoFactorChannelDuo(value: boolean | cdktf.IResolvable) {
    this._restrictTwoFactorChannelDuo = value;
  }
  public resetRestrictTwoFactorChannelDuo() {
    this._restrictTwoFactorChannelDuo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictTwoFactorChannelDuoInput() {
    return this._restrictTwoFactorChannelDuo;
  }

  // restrict_two_factor_channel_google - computed: false, optional: true, required: false
  private _restrictTwoFactorChannelGoogle?: boolean | cdktf.IResolvable; 
  public get restrictTwoFactorChannelGoogle() {
    return this.getBooleanAttribute('restrict_two_factor_channel_google');
  }
  public set restrictTwoFactorChannelGoogle(value: boolean | cdktf.IResolvable) {
    this._restrictTwoFactorChannelGoogle = value;
  }
  public resetRestrictTwoFactorChannelGoogle() {
    this._restrictTwoFactorChannelGoogle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictTwoFactorChannelGoogleInput() {
    return this._restrictTwoFactorChannelGoogle;
  }

  // restrict_two_factor_channel_rsa - computed: false, optional: true, required: false
  private _restrictTwoFactorChannelRsa?: boolean | cdktf.IResolvable; 
  public get restrictTwoFactorChannelRsa() {
    return this.getBooleanAttribute('restrict_two_factor_channel_rsa');
  }
  public set restrictTwoFactorChannelRsa(value: boolean | cdktf.IResolvable) {
    this._restrictTwoFactorChannelRsa = value;
  }
  public resetRestrictTwoFactorChannelRsa() {
    this._restrictTwoFactorChannelRsa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictTwoFactorChannelRsaInput() {
    return this._restrictTwoFactorChannelRsa;
  }

  // restrict_two_factor_channel_security_keys - computed: false, optional: true, required: false
  private _restrictTwoFactorChannelSecurityKeys?: boolean | cdktf.IResolvable; 
  public get restrictTwoFactorChannelSecurityKeys() {
    return this.getBooleanAttribute('restrict_two_factor_channel_security_keys');
  }
  public set restrictTwoFactorChannelSecurityKeys(value: boolean | cdktf.IResolvable) {
    this._restrictTwoFactorChannelSecurityKeys = value;
  }
  public resetRestrictTwoFactorChannelSecurityKeys() {
    this._restrictTwoFactorChannelSecurityKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictTwoFactorChannelSecurityKeysInput() {
    return this._restrictTwoFactorChannelSecurityKeys;
  }

  // restrict_two_factor_channel_text - computed: false, optional: true, required: false
  private _restrictTwoFactorChannelText?: boolean | cdktf.IResolvable; 
  public get restrictTwoFactorChannelText() {
    return this.getBooleanAttribute('restrict_two_factor_channel_text');
  }
  public set restrictTwoFactorChannelText(value: boolean | cdktf.IResolvable) {
    this._restrictTwoFactorChannelText = value;
  }
  public resetRestrictTwoFactorChannelText() {
    this._restrictTwoFactorChannelText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictTwoFactorChannelTextInput() {
    return this._restrictTwoFactorChannelText;
  }

  // two_factor_duration_desktop - computed: false, optional: true, required: false
  private _twoFactorDurationDesktop?: string; 
  public get twoFactorDurationDesktop() {
    return this.getStringAttribute('two_factor_duration_desktop');
  }
  public set twoFactorDurationDesktop(value: string) {
    this._twoFactorDurationDesktop = value;
  }
  public resetTwoFactorDurationDesktop() {
    this._twoFactorDurationDesktop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorDurationDesktopInput() {
    return this._twoFactorDurationDesktop;
  }

  // two_factor_duration_mobile - computed: false, optional: true, required: false
  private _twoFactorDurationMobile?: string; 
  public get twoFactorDurationMobile() {
    return this.getStringAttribute('two_factor_duration_mobile');
  }
  public set twoFactorDurationMobile(value: string) {
    this._twoFactorDurationMobile = value;
  }
  public resetTwoFactorDurationMobile() {
    this._twoFactorDurationMobile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorDurationMobileInput() {
    return this._twoFactorDurationMobile;
  }

  // two_factor_duration_web - computed: false, optional: true, required: false
  private _twoFactorDurationWeb?: string; 
  public get twoFactorDurationWeb() {
    return this.getStringAttribute('two_factor_duration_web');
  }
  public set twoFactorDurationWeb(value: string) {
    this._twoFactorDurationWeb = value;
  }
  public resetTwoFactorDurationWeb() {
    this._twoFactorDurationWeb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorDurationWebInput() {
    return this._twoFactorDurationWeb;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      require_two_factor: cdktf.booleanToTerraform(this._requireTwoFactor),
      restrict_two_factor_channel_dna: cdktf.booleanToTerraform(this._restrictTwoFactorChannelDna),
      restrict_two_factor_channel_duo: cdktf.booleanToTerraform(this._restrictTwoFactorChannelDuo),
      restrict_two_factor_channel_google: cdktf.booleanToTerraform(this._restrictTwoFactorChannelGoogle),
      restrict_two_factor_channel_rsa: cdktf.booleanToTerraform(this._restrictTwoFactorChannelRsa),
      restrict_two_factor_channel_security_keys: cdktf.booleanToTerraform(this._restrictTwoFactorChannelSecurityKeys),
      restrict_two_factor_channel_text: cdktf.booleanToTerraform(this._restrictTwoFactorChannelText),
      two_factor_duration_desktop: cdktf.stringToTerraform(this._twoFactorDurationDesktop),
      two_factor_duration_mobile: cdktf.stringToTerraform(this._twoFactorDurationMobile),
      two_factor_duration_web: cdktf.stringToTerraform(this._twoFactorDurationWeb),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      require_two_factor: {
        value: cdktf.booleanToHclTerraform(this._requireTwoFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_two_factor_channel_dna: {
        value: cdktf.booleanToHclTerraform(this._restrictTwoFactorChannelDna),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_two_factor_channel_duo: {
        value: cdktf.booleanToHclTerraform(this._restrictTwoFactorChannelDuo),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_two_factor_channel_google: {
        value: cdktf.booleanToHclTerraform(this._restrictTwoFactorChannelGoogle),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_two_factor_channel_rsa: {
        value: cdktf.booleanToHclTerraform(this._restrictTwoFactorChannelRsa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_two_factor_channel_security_keys: {
        value: cdktf.booleanToHclTerraform(this._restrictTwoFactorChannelSecurityKeys),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_two_factor_channel_text: {
        value: cdktf.booleanToHclTerraform(this._restrictTwoFactorChannelText),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      two_factor_duration_desktop: {
        value: cdktf.stringToHclTerraform(this._twoFactorDurationDesktop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      two_factor_duration_mobile: {
        value: cdktf.stringToHclTerraform(this._twoFactorDurationMobile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      two_factor_duration_web: {
        value: cdktf.stringToHclTerraform(this._twoFactorDurationWeb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
