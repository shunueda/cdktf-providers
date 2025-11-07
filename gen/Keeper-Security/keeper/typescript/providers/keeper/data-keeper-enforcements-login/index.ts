// https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_login
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKeeperEnforcementsLoginAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow alternate passwords
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_login#allow_alternate_passwords DataKeeperEnforcementsLoginA#allow_alternate_passwords}
  */
  readonly allowAlternatePasswords?: boolean | cdktf.IResolvable;
  /**
  * Master password expiration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_login#master_password_expired_as_of DataKeeperEnforcementsLoginA#master_password_expired_as_of}
  */
  readonly masterPasswordExpiredAsOf?: number;
  /**
  * Maximum days before master password change
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_login#master_password_maximum_days_before_change DataKeeperEnforcementsLoginA#master_password_maximum_days_before_change}
  */
  readonly masterPasswordMaximumDaysBeforeChange?: number;
  /**
  * Minimum # of digits required for master password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_login#master_password_minimum_digits DataKeeperEnforcementsLoginA#master_password_minimum_digits}
  */
  readonly masterPasswordMinimumDigits?: number;
  /**
  * Minimum length required for master password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_login#master_password_minimum_length DataKeeperEnforcementsLoginA#master_password_minimum_length}
  */
  readonly masterPasswordMinimumLength?: number;
  /**
  * Minimum # of lower-case characters required for master password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_login#master_password_minimum_lower DataKeeperEnforcementsLoginA#master_password_minimum_lower}
  */
  readonly masterPasswordMinimumLower?: number;
  /**
  * Minimum # of special characters required for master password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_login#master_password_minimum_special DataKeeperEnforcementsLoginA#master_password_minimum_special}
  */
  readonly masterPasswordMinimumSpecial?: number;
  /**
  * Minimum # of upper-case characters required for master password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_login#master_password_minimum_upper DataKeeperEnforcementsLoginA#master_password_minimum_upper}
  */
  readonly masterPasswordMinimumUpper?: number;
  /**
  * # of days before master password can be re-used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_login#master_password_restrict_days_before_reuse DataKeeperEnforcementsLoginA#master_password_restrict_days_before_reuse}
  */
  readonly masterPasswordRestrictDaysBeforeReuse?: number;
  /**
  * Restrict Android fingerprint login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_login#restrict_android_fingerprint DataKeeperEnforcementsLoginA#restrict_android_fingerprint}
  */
  readonly restrictAndroidFingerprint?: boolean | cdktf.IResolvable;
  /**
  * Restrict iOS fingerprint login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_login#restrict_ios_fingerprint DataKeeperEnforcementsLoginA#restrict_ios_fingerprint}
  */
  readonly restrictIosFingerprint?: boolean | cdktf.IResolvable;
  /**
  * Restrict MacOS fingerprint login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_login#restrict_mac_fingerprint DataKeeperEnforcementsLoginA#restrict_mac_fingerprint}
  */
  readonly restrictMacFingerprint?: boolean | cdktf.IResolvable;
  /**
  * Restrict Windows fingerprint login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_login#restrict_windows_fingerprint DataKeeperEnforcementsLoginA#restrict_windows_fingerprint}
  */
  readonly restrictWindowsFingerprint?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_login keeper_enforcements_login}
*/
export class DataKeeperEnforcementsLoginA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keeper_enforcements_login";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeeperEnforcementsLoginA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeeperEnforcementsLoginA to import
  * @param importFromId The id of the existing DataKeeperEnforcementsLoginA that should be imported. Refer to the {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_login#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeeperEnforcementsLoginA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keeper_enforcements_login", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_login keeper_enforcements_login} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeeperEnforcementsLoginAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataKeeperEnforcementsLoginAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'keeper_enforcements_login',
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
    this._allowAlternatePasswords = config.allowAlternatePasswords;
    this._masterPasswordExpiredAsOf = config.masterPasswordExpiredAsOf;
    this._masterPasswordMaximumDaysBeforeChange = config.masterPasswordMaximumDaysBeforeChange;
    this._masterPasswordMinimumDigits = config.masterPasswordMinimumDigits;
    this._masterPasswordMinimumLength = config.masterPasswordMinimumLength;
    this._masterPasswordMinimumLower = config.masterPasswordMinimumLower;
    this._masterPasswordMinimumSpecial = config.masterPasswordMinimumSpecial;
    this._masterPasswordMinimumUpper = config.masterPasswordMinimumUpper;
    this._masterPasswordRestrictDaysBeforeReuse = config.masterPasswordRestrictDaysBeforeReuse;
    this._restrictAndroidFingerprint = config.restrictAndroidFingerprint;
    this._restrictIosFingerprint = config.restrictIosFingerprint;
    this._restrictMacFingerprint = config.restrictMacFingerprint;
    this._restrictWindowsFingerprint = config.restrictWindowsFingerprint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_alternate_passwords - computed: false, optional: true, required: false
  private _allowAlternatePasswords?: boolean | cdktf.IResolvable; 
  public get allowAlternatePasswords() {
    return this.getBooleanAttribute('allow_alternate_passwords');
  }
  public set allowAlternatePasswords(value: boolean | cdktf.IResolvable) {
    this._allowAlternatePasswords = value;
  }
  public resetAllowAlternatePasswords() {
    this._allowAlternatePasswords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAlternatePasswordsInput() {
    return this._allowAlternatePasswords;
  }

  // master_password_expired_as_of - computed: false, optional: true, required: false
  private _masterPasswordExpiredAsOf?: number; 
  public get masterPasswordExpiredAsOf() {
    return this.getNumberAttribute('master_password_expired_as_of');
  }
  public set masterPasswordExpiredAsOf(value: number) {
    this._masterPasswordExpiredAsOf = value;
  }
  public resetMasterPasswordExpiredAsOf() {
    this._masterPasswordExpiredAsOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPasswordExpiredAsOfInput() {
    return this._masterPasswordExpiredAsOf;
  }

  // master_password_maximum_days_before_change - computed: false, optional: true, required: false
  private _masterPasswordMaximumDaysBeforeChange?: number; 
  public get masterPasswordMaximumDaysBeforeChange() {
    return this.getNumberAttribute('master_password_maximum_days_before_change');
  }
  public set masterPasswordMaximumDaysBeforeChange(value: number) {
    this._masterPasswordMaximumDaysBeforeChange = value;
  }
  public resetMasterPasswordMaximumDaysBeforeChange() {
    this._masterPasswordMaximumDaysBeforeChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPasswordMaximumDaysBeforeChangeInput() {
    return this._masterPasswordMaximumDaysBeforeChange;
  }

  // master_password_minimum_digits - computed: false, optional: true, required: false
  private _masterPasswordMinimumDigits?: number; 
  public get masterPasswordMinimumDigits() {
    return this.getNumberAttribute('master_password_minimum_digits');
  }
  public set masterPasswordMinimumDigits(value: number) {
    this._masterPasswordMinimumDigits = value;
  }
  public resetMasterPasswordMinimumDigits() {
    this._masterPasswordMinimumDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPasswordMinimumDigitsInput() {
    return this._masterPasswordMinimumDigits;
  }

  // master_password_minimum_length - computed: false, optional: true, required: false
  private _masterPasswordMinimumLength?: number; 
  public get masterPasswordMinimumLength() {
    return this.getNumberAttribute('master_password_minimum_length');
  }
  public set masterPasswordMinimumLength(value: number) {
    this._masterPasswordMinimumLength = value;
  }
  public resetMasterPasswordMinimumLength() {
    this._masterPasswordMinimumLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPasswordMinimumLengthInput() {
    return this._masterPasswordMinimumLength;
  }

  // master_password_minimum_lower - computed: false, optional: true, required: false
  private _masterPasswordMinimumLower?: number; 
  public get masterPasswordMinimumLower() {
    return this.getNumberAttribute('master_password_minimum_lower');
  }
  public set masterPasswordMinimumLower(value: number) {
    this._masterPasswordMinimumLower = value;
  }
  public resetMasterPasswordMinimumLower() {
    this._masterPasswordMinimumLower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPasswordMinimumLowerInput() {
    return this._masterPasswordMinimumLower;
  }

  // master_password_minimum_special - computed: false, optional: true, required: false
  private _masterPasswordMinimumSpecial?: number; 
  public get masterPasswordMinimumSpecial() {
    return this.getNumberAttribute('master_password_minimum_special');
  }
  public set masterPasswordMinimumSpecial(value: number) {
    this._masterPasswordMinimumSpecial = value;
  }
  public resetMasterPasswordMinimumSpecial() {
    this._masterPasswordMinimumSpecial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPasswordMinimumSpecialInput() {
    return this._masterPasswordMinimumSpecial;
  }

  // master_password_minimum_upper - computed: false, optional: true, required: false
  private _masterPasswordMinimumUpper?: number; 
  public get masterPasswordMinimumUpper() {
    return this.getNumberAttribute('master_password_minimum_upper');
  }
  public set masterPasswordMinimumUpper(value: number) {
    this._masterPasswordMinimumUpper = value;
  }
  public resetMasterPasswordMinimumUpper() {
    this._masterPasswordMinimumUpper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPasswordMinimumUpperInput() {
    return this._masterPasswordMinimumUpper;
  }

  // master_password_restrict_days_before_reuse - computed: false, optional: true, required: false
  private _masterPasswordRestrictDaysBeforeReuse?: number; 
  public get masterPasswordRestrictDaysBeforeReuse() {
    return this.getNumberAttribute('master_password_restrict_days_before_reuse');
  }
  public set masterPasswordRestrictDaysBeforeReuse(value: number) {
    this._masterPasswordRestrictDaysBeforeReuse = value;
  }
  public resetMasterPasswordRestrictDaysBeforeReuse() {
    this._masterPasswordRestrictDaysBeforeReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPasswordRestrictDaysBeforeReuseInput() {
    return this._masterPasswordRestrictDaysBeforeReuse;
  }

  // restrict_android_fingerprint - computed: false, optional: true, required: false
  private _restrictAndroidFingerprint?: boolean | cdktf.IResolvable; 
  public get restrictAndroidFingerprint() {
    return this.getBooleanAttribute('restrict_android_fingerprint');
  }
  public set restrictAndroidFingerprint(value: boolean | cdktf.IResolvable) {
    this._restrictAndroidFingerprint = value;
  }
  public resetRestrictAndroidFingerprint() {
    this._restrictAndroidFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictAndroidFingerprintInput() {
    return this._restrictAndroidFingerprint;
  }

  // restrict_ios_fingerprint - computed: false, optional: true, required: false
  private _restrictIosFingerprint?: boolean | cdktf.IResolvable; 
  public get restrictIosFingerprint() {
    return this.getBooleanAttribute('restrict_ios_fingerprint');
  }
  public set restrictIosFingerprint(value: boolean | cdktf.IResolvable) {
    this._restrictIosFingerprint = value;
  }
  public resetRestrictIosFingerprint() {
    this._restrictIosFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictIosFingerprintInput() {
    return this._restrictIosFingerprint;
  }

  // restrict_mac_fingerprint - computed: false, optional: true, required: false
  private _restrictMacFingerprint?: boolean | cdktf.IResolvable; 
  public get restrictMacFingerprint() {
    return this.getBooleanAttribute('restrict_mac_fingerprint');
  }
  public set restrictMacFingerprint(value: boolean | cdktf.IResolvable) {
    this._restrictMacFingerprint = value;
  }
  public resetRestrictMacFingerprint() {
    this._restrictMacFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictMacFingerprintInput() {
    return this._restrictMacFingerprint;
  }

  // restrict_windows_fingerprint - computed: false, optional: true, required: false
  private _restrictWindowsFingerprint?: boolean | cdktf.IResolvable; 
  public get restrictWindowsFingerprint() {
    return this.getBooleanAttribute('restrict_windows_fingerprint');
  }
  public set restrictWindowsFingerprint(value: boolean | cdktf.IResolvable) {
    this._restrictWindowsFingerprint = value;
  }
  public resetRestrictWindowsFingerprint() {
    this._restrictWindowsFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictWindowsFingerprintInput() {
    return this._restrictWindowsFingerprint;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_alternate_passwords: cdktf.booleanToTerraform(this._allowAlternatePasswords),
      master_password_expired_as_of: cdktf.numberToTerraform(this._masterPasswordExpiredAsOf),
      master_password_maximum_days_before_change: cdktf.numberToTerraform(this._masterPasswordMaximumDaysBeforeChange),
      master_password_minimum_digits: cdktf.numberToTerraform(this._masterPasswordMinimumDigits),
      master_password_minimum_length: cdktf.numberToTerraform(this._masterPasswordMinimumLength),
      master_password_minimum_lower: cdktf.numberToTerraform(this._masterPasswordMinimumLower),
      master_password_minimum_special: cdktf.numberToTerraform(this._masterPasswordMinimumSpecial),
      master_password_minimum_upper: cdktf.numberToTerraform(this._masterPasswordMinimumUpper),
      master_password_restrict_days_before_reuse: cdktf.numberToTerraform(this._masterPasswordRestrictDaysBeforeReuse),
      restrict_android_fingerprint: cdktf.booleanToTerraform(this._restrictAndroidFingerprint),
      restrict_ios_fingerprint: cdktf.booleanToTerraform(this._restrictIosFingerprint),
      restrict_mac_fingerprint: cdktf.booleanToTerraform(this._restrictMacFingerprint),
      restrict_windows_fingerprint: cdktf.booleanToTerraform(this._restrictWindowsFingerprint),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_alternate_passwords: {
        value: cdktf.booleanToHclTerraform(this._allowAlternatePasswords),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      master_password_expired_as_of: {
        value: cdktf.numberToHclTerraform(this._masterPasswordExpiredAsOf),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_password_maximum_days_before_change: {
        value: cdktf.numberToHclTerraform(this._masterPasswordMaximumDaysBeforeChange),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_password_minimum_digits: {
        value: cdktf.numberToHclTerraform(this._masterPasswordMinimumDigits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_password_minimum_length: {
        value: cdktf.numberToHclTerraform(this._masterPasswordMinimumLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_password_minimum_lower: {
        value: cdktf.numberToHclTerraform(this._masterPasswordMinimumLower),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_password_minimum_special: {
        value: cdktf.numberToHclTerraform(this._masterPasswordMinimumSpecial),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_password_minimum_upper: {
        value: cdktf.numberToHclTerraform(this._masterPasswordMinimumUpper),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_password_restrict_days_before_reuse: {
        value: cdktf.numberToHclTerraform(this._masterPasswordRestrictDaysBeforeReuse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      restrict_android_fingerprint: {
        value: cdktf.booleanToHclTerraform(this._restrictAndroidFingerprint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_ios_fingerprint: {
        value: cdktf.booleanToHclTerraform(this._restrictIosFingerprint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_mac_fingerprint: {
        value: cdktf.booleanToHclTerraform(this._restrictMacFingerprint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_windows_fingerprint: {
        value: cdktf.booleanToHclTerraform(this._restrictWindowsFingerprint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
