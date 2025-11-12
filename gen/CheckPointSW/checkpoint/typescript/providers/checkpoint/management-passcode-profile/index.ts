// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_passcode_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementPasscodeProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The passcode length is 4 and only numeric values allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_passcode_profile#allow_simple_passcode ManagementPasscodeProfile#allow_simple_passcode}
  */
  readonly allowSimplePasscode?: boolean | cdktf.IResolvable;
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_passcode_profile#color ManagementPasscodeProfile#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_passcode_profile#comments ManagementPasscodeProfile#comments}
  */
  readonly comments?: string;
  /**
  * Lock the device if app is inactive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_passcode_profile#enable_inactivity_time_lock ManagementPasscodeProfile#enable_inactivity_time_lock}
  */
  readonly enableInactivityTimeLock?: boolean | cdktf.IResolvable;
  /**
  * Exit after few failures in passcode verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_passcode_profile#enable_passcode_failed_attempts ManagementPasscodeProfile#enable_passcode_failed_attempts}
  */
  readonly enablePasscodeFailedAttempts?: boolean | cdktf.IResolvable;
  /**
  * Check passcode history for reparations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_passcode_profile#enable_passcode_history ManagementPasscodeProfile#enable_passcode_history}
  */
  readonly enablePasscodeHistory?: boolean | cdktf.IResolvable;
  /**
  * Enable/disable expiration date to the passcode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_passcode_profile#force_passcode_expiration ManagementPasscodeProfile#force_passcode_expiration}
  */
  readonly forcePasscodeExpiration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_passcode_profile#id ManagementPasscodeProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_passcode_profile#ignore_errors ManagementPasscodeProfile#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_passcode_profile#ignore_warnings ManagementPasscodeProfile#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Time without user input before passcode must be re-entered (in minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_passcode_profile#max_inactivity_time_lock ManagementPasscodeProfile#max_inactivity_time_lock}
  */
  readonly maxInactivityTimeLock?: number;
  /**
  * Number of failed attempts allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_passcode_profile#max_passcode_failed_attempts ManagementPasscodeProfile#max_passcode_failed_attempts}
  */
  readonly maxPasscodeFailedAttempts?: number;
  /**
  * Minimum number of complex characters (if "require-alphanumeric-passcode" is enabled). The number of the complex characters cannot be greater than number of the passcode length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_passcode_profile#min_passcode_complex_characters ManagementPasscodeProfile#min_passcode_complex_characters}
  */
  readonly minPasscodeComplexCharacters?: number;
  /**
  * Minimum passcode length - relevant if "allow-simple-passcode" is disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_passcode_profile#min_passcode_length ManagementPasscodeProfile#min_passcode_length}
  */
  readonly minPasscodeLength?: number;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_passcode_profile#name ManagementPasscodeProfile#name}
  */
  readonly name: string;
  /**
  * The period in days after which the passcode will expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_passcode_profile#passcode_expiration_period ManagementPasscodeProfile#passcode_expiration_period}
  */
  readonly passcodeExpirationPeriod?: number;
  /**
  * Number of passcodes that will be kept in history.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_passcode_profile#passcode_history ManagementPasscodeProfile#passcode_history}
  */
  readonly passcodeHistory?: number;
  /**
  * Require alphanumeric characters in the passcode - relevant if "allow-simple-passcode" is disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_passcode_profile#require_alphanumeric_passcode ManagementPasscodeProfile#require_alphanumeric_passcode}
  */
  readonly requireAlphanumericPasscode?: boolean | cdktf.IResolvable;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_passcode_profile#tags ManagementPasscodeProfile#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_passcode_profile checkpoint_management_passcode_profile}
*/
export class ManagementPasscodeProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_passcode_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementPasscodeProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementPasscodeProfile to import
  * @param importFromId The id of the existing ManagementPasscodeProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_passcode_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementPasscodeProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_passcode_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_passcode_profile checkpoint_management_passcode_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementPasscodeProfileConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementPasscodeProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_passcode_profile',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowSimplePasscode = config.allowSimplePasscode;
    this._color = config.color;
    this._comments = config.comments;
    this._enableInactivityTimeLock = config.enableInactivityTimeLock;
    this._enablePasscodeFailedAttempts = config.enablePasscodeFailedAttempts;
    this._enablePasscodeHistory = config.enablePasscodeHistory;
    this._forcePasscodeExpiration = config.forcePasscodeExpiration;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._maxInactivityTimeLock = config.maxInactivityTimeLock;
    this._maxPasscodeFailedAttempts = config.maxPasscodeFailedAttempts;
    this._minPasscodeComplexCharacters = config.minPasscodeComplexCharacters;
    this._minPasscodeLength = config.minPasscodeLength;
    this._name = config.name;
    this._passcodeExpirationPeriod = config.passcodeExpirationPeriod;
    this._passcodeHistory = config.passcodeHistory;
    this._requireAlphanumericPasscode = config.requireAlphanumericPasscode;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_simple_passcode - computed: false, optional: true, required: false
  private _allowSimplePasscode?: boolean | cdktf.IResolvable; 
  public get allowSimplePasscode() {
    return this.getBooleanAttribute('allow_simple_passcode');
  }
  public set allowSimplePasscode(value: boolean | cdktf.IResolvable) {
    this._allowSimplePasscode = value;
  }
  public resetAllowSimplePasscode() {
    this._allowSimplePasscode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSimplePasscodeInput() {
    return this._allowSimplePasscode;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // enable_inactivity_time_lock - computed: false, optional: true, required: false
  private _enableInactivityTimeLock?: boolean | cdktf.IResolvable; 
  public get enableInactivityTimeLock() {
    return this.getBooleanAttribute('enable_inactivity_time_lock');
  }
  public set enableInactivityTimeLock(value: boolean | cdktf.IResolvable) {
    this._enableInactivityTimeLock = value;
  }
  public resetEnableInactivityTimeLock() {
    this._enableInactivityTimeLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInactivityTimeLockInput() {
    return this._enableInactivityTimeLock;
  }

  // enable_passcode_failed_attempts - computed: false, optional: true, required: false
  private _enablePasscodeFailedAttempts?: boolean | cdktf.IResolvable; 
  public get enablePasscodeFailedAttempts() {
    return this.getBooleanAttribute('enable_passcode_failed_attempts');
  }
  public set enablePasscodeFailedAttempts(value: boolean | cdktf.IResolvable) {
    this._enablePasscodeFailedAttempts = value;
  }
  public resetEnablePasscodeFailedAttempts() {
    this._enablePasscodeFailedAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePasscodeFailedAttemptsInput() {
    return this._enablePasscodeFailedAttempts;
  }

  // enable_passcode_history - computed: false, optional: true, required: false
  private _enablePasscodeHistory?: boolean | cdktf.IResolvable; 
  public get enablePasscodeHistory() {
    return this.getBooleanAttribute('enable_passcode_history');
  }
  public set enablePasscodeHistory(value: boolean | cdktf.IResolvable) {
    this._enablePasscodeHistory = value;
  }
  public resetEnablePasscodeHistory() {
    this._enablePasscodeHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePasscodeHistoryInput() {
    return this._enablePasscodeHistory;
  }

  // force_passcode_expiration - computed: false, optional: true, required: false
  private _forcePasscodeExpiration?: boolean | cdktf.IResolvable; 
  public get forcePasscodeExpiration() {
    return this.getBooleanAttribute('force_passcode_expiration');
  }
  public set forcePasscodeExpiration(value: boolean | cdktf.IResolvable) {
    this._forcePasscodeExpiration = value;
  }
  public resetForcePasscodeExpiration() {
    this._forcePasscodeExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcePasscodeExpirationInput() {
    return this._forcePasscodeExpiration;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // max_inactivity_time_lock - computed: false, optional: true, required: false
  private _maxInactivityTimeLock?: number; 
  public get maxInactivityTimeLock() {
    return this.getNumberAttribute('max_inactivity_time_lock');
  }
  public set maxInactivityTimeLock(value: number) {
    this._maxInactivityTimeLock = value;
  }
  public resetMaxInactivityTimeLock() {
    this._maxInactivityTimeLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInactivityTimeLockInput() {
    return this._maxInactivityTimeLock;
  }

  // max_passcode_failed_attempts - computed: false, optional: true, required: false
  private _maxPasscodeFailedAttempts?: number; 
  public get maxPasscodeFailedAttempts() {
    return this.getNumberAttribute('max_passcode_failed_attempts');
  }
  public set maxPasscodeFailedAttempts(value: number) {
    this._maxPasscodeFailedAttempts = value;
  }
  public resetMaxPasscodeFailedAttempts() {
    this._maxPasscodeFailedAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPasscodeFailedAttemptsInput() {
    return this._maxPasscodeFailedAttempts;
  }

  // min_passcode_complex_characters - computed: false, optional: true, required: false
  private _minPasscodeComplexCharacters?: number; 
  public get minPasscodeComplexCharacters() {
    return this.getNumberAttribute('min_passcode_complex_characters');
  }
  public set minPasscodeComplexCharacters(value: number) {
    this._minPasscodeComplexCharacters = value;
  }
  public resetMinPasscodeComplexCharacters() {
    this._minPasscodeComplexCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPasscodeComplexCharactersInput() {
    return this._minPasscodeComplexCharacters;
  }

  // min_passcode_length - computed: false, optional: true, required: false
  private _minPasscodeLength?: number; 
  public get minPasscodeLength() {
    return this.getNumberAttribute('min_passcode_length');
  }
  public set minPasscodeLength(value: number) {
    this._minPasscodeLength = value;
  }
  public resetMinPasscodeLength() {
    this._minPasscodeLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPasscodeLengthInput() {
    return this._minPasscodeLength;
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

  // passcode_expiration_period - computed: false, optional: true, required: false
  private _passcodeExpirationPeriod?: number; 
  public get passcodeExpirationPeriod() {
    return this.getNumberAttribute('passcode_expiration_period');
  }
  public set passcodeExpirationPeriod(value: number) {
    this._passcodeExpirationPeriod = value;
  }
  public resetPasscodeExpirationPeriod() {
    this._passcodeExpirationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passcodeExpirationPeriodInput() {
    return this._passcodeExpirationPeriod;
  }

  // passcode_history - computed: false, optional: true, required: false
  private _passcodeHistory?: number; 
  public get passcodeHistory() {
    return this.getNumberAttribute('passcode_history');
  }
  public set passcodeHistory(value: number) {
    this._passcodeHistory = value;
  }
  public resetPasscodeHistory() {
    this._passcodeHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passcodeHistoryInput() {
    return this._passcodeHistory;
  }

  // require_alphanumeric_passcode - computed: false, optional: true, required: false
  private _requireAlphanumericPasscode?: boolean | cdktf.IResolvable; 
  public get requireAlphanumericPasscode() {
    return this.getBooleanAttribute('require_alphanumeric_passcode');
  }
  public set requireAlphanumericPasscode(value: boolean | cdktf.IResolvable) {
    this._requireAlphanumericPasscode = value;
  }
  public resetRequireAlphanumericPasscode() {
    this._requireAlphanumericPasscode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAlphanumericPasscodeInput() {
    return this._requireAlphanumericPasscode;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_simple_passcode: cdktf.booleanToTerraform(this._allowSimplePasscode),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      enable_inactivity_time_lock: cdktf.booleanToTerraform(this._enableInactivityTimeLock),
      enable_passcode_failed_attempts: cdktf.booleanToTerraform(this._enablePasscodeFailedAttempts),
      enable_passcode_history: cdktf.booleanToTerraform(this._enablePasscodeHistory),
      force_passcode_expiration: cdktf.booleanToTerraform(this._forcePasscodeExpiration),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      max_inactivity_time_lock: cdktf.numberToTerraform(this._maxInactivityTimeLock),
      max_passcode_failed_attempts: cdktf.numberToTerraform(this._maxPasscodeFailedAttempts),
      min_passcode_complex_characters: cdktf.numberToTerraform(this._minPasscodeComplexCharacters),
      min_passcode_length: cdktf.numberToTerraform(this._minPasscodeLength),
      name: cdktf.stringToTerraform(this._name),
      passcode_expiration_period: cdktf.numberToTerraform(this._passcodeExpirationPeriod),
      passcode_history: cdktf.numberToTerraform(this._passcodeHistory),
      require_alphanumeric_passcode: cdktf.booleanToTerraform(this._requireAlphanumericPasscode),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_simple_passcode: {
        value: cdktf.booleanToHclTerraform(this._allowSimplePasscode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_inactivity_time_lock: {
        value: cdktf.booleanToHclTerraform(this._enableInactivityTimeLock),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_passcode_failed_attempts: {
        value: cdktf.booleanToHclTerraform(this._enablePasscodeFailedAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_passcode_history: {
        value: cdktf.booleanToHclTerraform(this._enablePasscodeHistory),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_passcode_expiration: {
        value: cdktf.booleanToHclTerraform(this._forcePasscodeExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_inactivity_time_lock: {
        value: cdktf.numberToHclTerraform(this._maxInactivityTimeLock),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_passcode_failed_attempts: {
        value: cdktf.numberToHclTerraform(this._maxPasscodeFailedAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_passcode_complex_characters: {
        value: cdktf.numberToHclTerraform(this._minPasscodeComplexCharacters),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_passcode_length: {
        value: cdktf.numberToHclTerraform(this._minPasscodeLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passcode_expiration_period: {
        value: cdktf.numberToHclTerraform(this._passcodeExpirationPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      passcode_history: {
        value: cdktf.numberToHclTerraform(this._passcodeHistory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      require_alphanumeric_passcode: {
        value: cdktf.booleanToHclTerraform(this._requireAlphanumericPasscode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
