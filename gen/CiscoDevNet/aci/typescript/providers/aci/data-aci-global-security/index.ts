// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/global_security
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciGlobalSecurityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/global_security#annotation DataAciGlobalSecurity#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/global_security#block_duration DataAciGlobalSecurity#block_duration}
  */
  readonly blockDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/global_security#change_count DataAciGlobalSecurity#change_count}
  */
  readonly changeCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/global_security#change_during_interval DataAciGlobalSecurity#change_during_interval}
  */
  readonly changeDuringInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/global_security#change_interval DataAciGlobalSecurity#change_interval}
  */
  readonly changeInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/global_security#description DataAciGlobalSecurity#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/global_security#enable_login_block DataAciGlobalSecurity#enable_login_block}
  */
  readonly enableLoginBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/global_security#expiration_warn_time DataAciGlobalSecurity#expiration_warn_time}
  */
  readonly expirationWarnTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/global_security#history_count DataAciGlobalSecurity#history_count}
  */
  readonly historyCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/global_security#id DataAciGlobalSecurity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/global_security#max_failed_attempts DataAciGlobalSecurity#max_failed_attempts}
  */
  readonly maxFailedAttempts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/global_security#max_failed_attempts_window DataAciGlobalSecurity#max_failed_attempts_window}
  */
  readonly maxFailedAttemptsWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/global_security#maximum_validity_period DataAciGlobalSecurity#maximum_validity_period}
  */
  readonly maximumValidityPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/global_security#name_alias DataAciGlobalSecurity#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/global_security#no_change_interval DataAciGlobalSecurity#no_change_interval}
  */
  readonly noChangeInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/global_security#pwd_strength_check DataAciGlobalSecurity#pwd_strength_check}
  */
  readonly pwdStrengthCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/global_security#session_record_flags DataAciGlobalSecurity#session_record_flags}
  */
  readonly sessionRecordFlags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/global_security#ui_idle_timeout_seconds DataAciGlobalSecurity#ui_idle_timeout_seconds}
  */
  readonly uiIdleTimeoutSeconds?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/global_security#webtoken_timeout_seconds DataAciGlobalSecurity#webtoken_timeout_seconds}
  */
  readonly webtokenTimeoutSeconds?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/global_security aci_global_security}
*/
export class DataAciGlobalSecurity extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_global_security";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciGlobalSecurity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciGlobalSecurity to import
  * @param importFromId The id of the existing DataAciGlobalSecurity that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/global_security#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciGlobalSecurity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_global_security", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/global_security aci_global_security} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciGlobalSecurityConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAciGlobalSecurityConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aci_global_security',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._blockDuration = config.blockDuration;
    this._changeCount = config.changeCount;
    this._changeDuringInterval = config.changeDuringInterval;
    this._changeInterval = config.changeInterval;
    this._description = config.description;
    this._enableLoginBlock = config.enableLoginBlock;
    this._expirationWarnTime = config.expirationWarnTime;
    this._historyCount = config.historyCount;
    this._id = config.id;
    this._maxFailedAttempts = config.maxFailedAttempts;
    this._maxFailedAttemptsWindow = config.maxFailedAttemptsWindow;
    this._maximumValidityPeriod = config.maximumValidityPeriod;
    this._nameAlias = config.nameAlias;
    this._noChangeInterval = config.noChangeInterval;
    this._pwdStrengthCheck = config.pwdStrengthCheck;
    this._sessionRecordFlags = config.sessionRecordFlags;
    this._uiIdleTimeoutSeconds = config.uiIdleTimeoutSeconds;
    this._webtokenTimeoutSeconds = config.webtokenTimeoutSeconds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // block_duration - computed: true, optional: true, required: false
  private _blockDuration?: string; 
  public get blockDuration() {
    return this.getStringAttribute('block_duration');
  }
  public set blockDuration(value: string) {
    this._blockDuration = value;
  }
  public resetBlockDuration() {
    this._blockDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDurationInput() {
    return this._blockDuration;
  }

  // change_count - computed: true, optional: true, required: false
  private _changeCount?: string; 
  public get changeCount() {
    return this.getStringAttribute('change_count');
  }
  public set changeCount(value: string) {
    this._changeCount = value;
  }
  public resetChangeCount() {
    this._changeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeCountInput() {
    return this._changeCount;
  }

  // change_during_interval - computed: true, optional: true, required: false
  private _changeDuringInterval?: string; 
  public get changeDuringInterval() {
    return this.getStringAttribute('change_during_interval');
  }
  public set changeDuringInterval(value: string) {
    this._changeDuringInterval = value;
  }
  public resetChangeDuringInterval() {
    this._changeDuringInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeDuringIntervalInput() {
    return this._changeDuringInterval;
  }

  // change_interval - computed: true, optional: true, required: false
  private _changeInterval?: string; 
  public get changeInterval() {
    return this.getStringAttribute('change_interval');
  }
  public set changeInterval(value: string) {
    this._changeInterval = value;
  }
  public resetChangeInterval() {
    this._changeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeIntervalInput() {
    return this._changeInterval;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enable_login_block - computed: true, optional: true, required: false
  private _enableLoginBlock?: string; 
  public get enableLoginBlock() {
    return this.getStringAttribute('enable_login_block');
  }
  public set enableLoginBlock(value: string) {
    this._enableLoginBlock = value;
  }
  public resetEnableLoginBlock() {
    this._enableLoginBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoginBlockInput() {
    return this._enableLoginBlock;
  }

  // expiration_warn_time - computed: true, optional: true, required: false
  private _expirationWarnTime?: string; 
  public get expirationWarnTime() {
    return this.getStringAttribute('expiration_warn_time');
  }
  public set expirationWarnTime(value: string) {
    this._expirationWarnTime = value;
  }
  public resetExpirationWarnTime() {
    this._expirationWarnTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationWarnTimeInput() {
    return this._expirationWarnTime;
  }

  // history_count - computed: true, optional: true, required: false
  private _historyCount?: string; 
  public get historyCount() {
    return this.getStringAttribute('history_count');
  }
  public set historyCount(value: string) {
    this._historyCount = value;
  }
  public resetHistoryCount() {
    this._historyCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyCountInput() {
    return this._historyCount;
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

  // max_failed_attempts - computed: true, optional: true, required: false
  private _maxFailedAttempts?: string; 
  public get maxFailedAttempts() {
    return this.getStringAttribute('max_failed_attempts');
  }
  public set maxFailedAttempts(value: string) {
    this._maxFailedAttempts = value;
  }
  public resetMaxFailedAttempts() {
    this._maxFailedAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFailedAttemptsInput() {
    return this._maxFailedAttempts;
  }

  // max_failed_attempts_window - computed: true, optional: true, required: false
  private _maxFailedAttemptsWindow?: string; 
  public get maxFailedAttemptsWindow() {
    return this.getStringAttribute('max_failed_attempts_window');
  }
  public set maxFailedAttemptsWindow(value: string) {
    this._maxFailedAttemptsWindow = value;
  }
  public resetMaxFailedAttemptsWindow() {
    this._maxFailedAttemptsWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFailedAttemptsWindowInput() {
    return this._maxFailedAttemptsWindow;
  }

  // maximum_validity_period - computed: true, optional: true, required: false
  private _maximumValidityPeriod?: string; 
  public get maximumValidityPeriod() {
    return this.getStringAttribute('maximum_validity_period');
  }
  public set maximumValidityPeriod(value: string) {
    this._maximumValidityPeriod = value;
  }
  public resetMaximumValidityPeriod() {
    this._maximumValidityPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumValidityPeriodInput() {
    return this._maximumValidityPeriod;
  }

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // no_change_interval - computed: true, optional: true, required: false
  private _noChangeInterval?: string; 
  public get noChangeInterval() {
    return this.getStringAttribute('no_change_interval');
  }
  public set noChangeInterval(value: string) {
    this._noChangeInterval = value;
  }
  public resetNoChangeInterval() {
    this._noChangeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noChangeIntervalInput() {
    return this._noChangeInterval;
  }

  // pwd_strength_check - computed: true, optional: true, required: false
  private _pwdStrengthCheck?: string; 
  public get pwdStrengthCheck() {
    return this.getStringAttribute('pwd_strength_check');
  }
  public set pwdStrengthCheck(value: string) {
    this._pwdStrengthCheck = value;
  }
  public resetPwdStrengthCheck() {
    this._pwdStrengthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwdStrengthCheckInput() {
    return this._pwdStrengthCheck;
  }

  // session_record_flags - computed: true, optional: true, required: false
  private _sessionRecordFlags?: string[]; 
  public get sessionRecordFlags() {
    return this.getListAttribute('session_record_flags');
  }
  public set sessionRecordFlags(value: string[]) {
    this._sessionRecordFlags = value;
  }
  public resetSessionRecordFlags() {
    this._sessionRecordFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionRecordFlagsInput() {
    return this._sessionRecordFlags;
  }

  // ui_idle_timeout_seconds - computed: true, optional: true, required: false
  private _uiIdleTimeoutSeconds?: string; 
  public get uiIdleTimeoutSeconds() {
    return this.getStringAttribute('ui_idle_timeout_seconds');
  }
  public set uiIdleTimeoutSeconds(value: string) {
    this._uiIdleTimeoutSeconds = value;
  }
  public resetUiIdleTimeoutSeconds() {
    this._uiIdleTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiIdleTimeoutSecondsInput() {
    return this._uiIdleTimeoutSeconds;
  }

  // webtoken_timeout_seconds - computed: true, optional: true, required: false
  private _webtokenTimeoutSeconds?: string; 
  public get webtokenTimeoutSeconds() {
    return this.getStringAttribute('webtoken_timeout_seconds');
  }
  public set webtokenTimeoutSeconds(value: string) {
    this._webtokenTimeoutSeconds = value;
  }
  public resetWebtokenTimeoutSeconds() {
    this._webtokenTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webtokenTimeoutSecondsInput() {
    return this._webtokenTimeoutSeconds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      block_duration: cdktf.stringToTerraform(this._blockDuration),
      change_count: cdktf.stringToTerraform(this._changeCount),
      change_during_interval: cdktf.stringToTerraform(this._changeDuringInterval),
      change_interval: cdktf.stringToTerraform(this._changeInterval),
      description: cdktf.stringToTerraform(this._description),
      enable_login_block: cdktf.stringToTerraform(this._enableLoginBlock),
      expiration_warn_time: cdktf.stringToTerraform(this._expirationWarnTime),
      history_count: cdktf.stringToTerraform(this._historyCount),
      id: cdktf.stringToTerraform(this._id),
      max_failed_attempts: cdktf.stringToTerraform(this._maxFailedAttempts),
      max_failed_attempts_window: cdktf.stringToTerraform(this._maxFailedAttemptsWindow),
      maximum_validity_period: cdktf.stringToTerraform(this._maximumValidityPeriod),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      no_change_interval: cdktf.stringToTerraform(this._noChangeInterval),
      pwd_strength_check: cdktf.stringToTerraform(this._pwdStrengthCheck),
      session_record_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sessionRecordFlags),
      ui_idle_timeout_seconds: cdktf.stringToTerraform(this._uiIdleTimeoutSeconds),
      webtoken_timeout_seconds: cdktf.stringToTerraform(this._webtokenTimeoutSeconds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_duration: {
        value: cdktf.stringToHclTerraform(this._blockDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      change_count: {
        value: cdktf.stringToHclTerraform(this._changeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      change_during_interval: {
        value: cdktf.stringToHclTerraform(this._changeDuringInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      change_interval: {
        value: cdktf.stringToHclTerraform(this._changeInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_login_block: {
        value: cdktf.stringToHclTerraform(this._enableLoginBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration_warn_time: {
        value: cdktf.stringToHclTerraform(this._expirationWarnTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      history_count: {
        value: cdktf.stringToHclTerraform(this._historyCount),
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
      max_failed_attempts: {
        value: cdktf.stringToHclTerraform(this._maxFailedAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_failed_attempts_window: {
        value: cdktf.stringToHclTerraform(this._maxFailedAttemptsWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_validity_period: {
        value: cdktf.stringToHclTerraform(this._maximumValidityPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_change_interval: {
        value: cdktf.stringToHclTerraform(this._noChangeInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pwd_strength_check: {
        value: cdktf.stringToHclTerraform(this._pwdStrengthCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_record_flags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sessionRecordFlags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ui_idle_timeout_seconds: {
        value: cdktf.stringToHclTerraform(this._uiIdleTimeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webtoken_timeout_seconds: {
        value: cdktf.stringToHclTerraform(this._webtokenTimeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
