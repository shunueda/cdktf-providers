// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_filevault_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdmFilevaultConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * If `true`, prevents requests for enabling FileVault at user logout time. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_filevault_config#at_login_only MdmFilevaultConfig#at_login_only}
  */
  readonly atLoginOnly?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of times users can bypass enabling FileVault before being required to enable it to log in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_filevault_config#bypass_attempts MdmFilevaultConfig#bypass_attempts}
  */
  readonly bypassAttempts?: number;
  /**
  * Set to `true` to prevent storing the FileVault key across restarts. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_filevault_config#destroy_key_on_standby MdmFilevaultConfig#destroy_key_on_standby}
  */
  readonly destroyKeyOnStandby?: boolean | cdktf.IResolvable;
  /**
  * Description of the location where the FDE PRK will be escrowed. This text will be inserted into the message the user sees when enabling FileVault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_filevault_config#escrow_location_display_name MdmFilevaultConfig#escrow_location_display_name}
  */
  readonly escrowLocationDisplayName: string;
  /**
  * Name of the FileVault configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_filevault_config#name MdmFilevaultConfig#name}
  */
  readonly name: string;
  /**
  * The automatic PRK rotation interval in days. It has a maximum value of `365`. Defaults to `0` (no automatic rotation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_filevault_config#prk_rotation_interval_days MdmFilevaultConfig#prk_rotation_interval_days}
  */
  readonly prkRotationIntervalDays?: number;
  /**
  * If `false`, prevents display of the personal recovery key to the user after FileVault is enabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_filevault_config#show_recovery_key MdmFilevaultConfig#show_recovery_key}
  */
  readonly showRecoveryKey?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_filevault_config zentral_mdm_filevault_config}
*/
export class MdmFilevaultConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_mdm_filevault_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MdmFilevaultConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MdmFilevaultConfig to import
  * @param importFromId The id of the existing MdmFilevaultConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_filevault_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MdmFilevaultConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_mdm_filevault_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_filevault_config zentral_mdm_filevault_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdmFilevaultConfigConfig
  */
  public constructor(scope: Construct, id: string, config: MdmFilevaultConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_mdm_filevault_config',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.68',
        providerVersionConstraint: '0.1.68'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._atLoginOnly = config.atLoginOnly;
    this._bypassAttempts = config.bypassAttempts;
    this._destroyKeyOnStandby = config.destroyKeyOnStandby;
    this._escrowLocationDisplayName = config.escrowLocationDisplayName;
    this._name = config.name;
    this._prkRotationIntervalDays = config.prkRotationIntervalDays;
    this._showRecoveryKey = config.showRecoveryKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // at_login_only - computed: true, optional: true, required: false
  private _atLoginOnly?: boolean | cdktf.IResolvable; 
  public get atLoginOnly() {
    return this.getBooleanAttribute('at_login_only');
  }
  public set atLoginOnly(value: boolean | cdktf.IResolvable) {
    this._atLoginOnly = value;
  }
  public resetAtLoginOnly() {
    this._atLoginOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atLoginOnlyInput() {
    return this._atLoginOnly;
  }

  // bypass_attempts - computed: true, optional: true, required: false
  private _bypassAttempts?: number; 
  public get bypassAttempts() {
    return this.getNumberAttribute('bypass_attempts');
  }
  public set bypassAttempts(value: number) {
    this._bypassAttempts = value;
  }
  public resetBypassAttempts() {
    this._bypassAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassAttemptsInput() {
    return this._bypassAttempts;
  }

  // destroy_key_on_standby - computed: true, optional: true, required: false
  private _destroyKeyOnStandby?: boolean | cdktf.IResolvable; 
  public get destroyKeyOnStandby() {
    return this.getBooleanAttribute('destroy_key_on_standby');
  }
  public set destroyKeyOnStandby(value: boolean | cdktf.IResolvable) {
    this._destroyKeyOnStandby = value;
  }
  public resetDestroyKeyOnStandby() {
    this._destroyKeyOnStandby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyKeyOnStandbyInput() {
    return this._destroyKeyOnStandby;
  }

  // escrow_location_display_name - computed: false, optional: false, required: true
  private _escrowLocationDisplayName?: string; 
  public get escrowLocationDisplayName() {
    return this.getStringAttribute('escrow_location_display_name');
  }
  public set escrowLocationDisplayName(value: string) {
    this._escrowLocationDisplayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get escrowLocationDisplayNameInput() {
    return this._escrowLocationDisplayName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // prk_rotation_interval_days - computed: true, optional: true, required: false
  private _prkRotationIntervalDays?: number; 
  public get prkRotationIntervalDays() {
    return this.getNumberAttribute('prk_rotation_interval_days');
  }
  public set prkRotationIntervalDays(value: number) {
    this._prkRotationIntervalDays = value;
  }
  public resetPrkRotationIntervalDays() {
    this._prkRotationIntervalDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prkRotationIntervalDaysInput() {
    return this._prkRotationIntervalDays;
  }

  // show_recovery_key - computed: true, optional: true, required: false
  private _showRecoveryKey?: boolean | cdktf.IResolvable; 
  public get showRecoveryKey() {
    return this.getBooleanAttribute('show_recovery_key');
  }
  public set showRecoveryKey(value: boolean | cdktf.IResolvable) {
    this._showRecoveryKey = value;
  }
  public resetShowRecoveryKey() {
    this._showRecoveryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showRecoveryKeyInput() {
    return this._showRecoveryKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      at_login_only: cdktf.booleanToTerraform(this._atLoginOnly),
      bypass_attempts: cdktf.numberToTerraform(this._bypassAttempts),
      destroy_key_on_standby: cdktf.booleanToTerraform(this._destroyKeyOnStandby),
      escrow_location_display_name: cdktf.stringToTerraform(this._escrowLocationDisplayName),
      name: cdktf.stringToTerraform(this._name),
      prk_rotation_interval_days: cdktf.numberToTerraform(this._prkRotationIntervalDays),
      show_recovery_key: cdktf.booleanToTerraform(this._showRecoveryKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      at_login_only: {
        value: cdktf.booleanToHclTerraform(this._atLoginOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bypass_attempts: {
        value: cdktf.numberToHclTerraform(this._bypassAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      destroy_key_on_standby: {
        value: cdktf.booleanToHclTerraform(this._destroyKeyOnStandby),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      escrow_location_display_name: {
        value: cdktf.stringToHclTerraform(this._escrowLocationDisplayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prk_rotation_interval_days: {
        value: cdktf.numberToHclTerraform(this._prkRotationIntervalDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      show_recovery_key: {
        value: cdktf.booleanToHclTerraform(this._showRecoveryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
