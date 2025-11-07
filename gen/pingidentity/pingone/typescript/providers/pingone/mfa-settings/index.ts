// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MfaSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the environment to manage MFA settings for.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_settings#environment_id MfaSettings#environment_id}
  */
  readonly environmentId: string;
  /**
  * A single object that contains information about the MFA policy lockout settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_settings#lockout MfaSettings#lockout}
  */
  readonly lockout?: MfaSettingsLockout;
  /**
  * A single object that contains information about the MFA policy device pairing settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_settings#pairing MfaSettings#pairing}
  */
  readonly pairing: MfaSettingsPairing;
  /**
  * A single object that contains settings for phone extension support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_settings#phone_extensions MfaSettings#phone_extensions}
  */
  readonly phoneExtensions?: MfaSettingsPhoneExtensions;
  /**
  * A single object that contains information about the default settings for new users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_settings#users MfaSettings#users}
  */
  readonly users?: MfaSettingsUsers;
}
export interface MfaSettingsLockout {
  /**
  * An integer that defines the number of seconds to keep the account in a locked state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_settings#duration_seconds MfaSettings#duration_seconds}
  */
  readonly durationSeconds?: number;
  /**
  * An integer that defines the maximum number of incorrect authentication attempts before the account is locked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_settings#failure_count MfaSettings#failure_count}
  */
  readonly failureCount: number;
}

export function mfaSettingsLockoutToTerraform(struct?: MfaSettingsLockout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_seconds: cdktf.numberToTerraform(struct!.durationSeconds),
    failure_count: cdktf.numberToTerraform(struct!.failureCount),
  }
}


export function mfaSettingsLockoutToHclTerraform(struct?: MfaSettingsLockout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.durationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failure_count: {
      value: cdktf.numberToHclTerraform(struct!.failureCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaSettingsLockoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaSettingsLockout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationSeconds = this._durationSeconds;
    }
    if (this._failureCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureCount = this._failureCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaSettingsLockout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._durationSeconds = undefined;
      this._failureCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._durationSeconds = value.durationSeconds;
      this._failureCount = value.failureCount;
    }
  }

  // duration_seconds - computed: false, optional: true, required: false
  private _durationSeconds?: number; 
  public get durationSeconds() {
    return this.getNumberAttribute('duration_seconds');
  }
  public set durationSeconds(value: number) {
    this._durationSeconds = value;
  }
  public resetDurationSeconds() {
    this._durationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationSecondsInput() {
    return this._durationSeconds;
  }

  // failure_count - computed: false, optional: false, required: true
  private _failureCount?: number; 
  public get failureCount() {
    return this.getNumberAttribute('failure_count');
  }
  public set failureCount(value: number) {
    this._failureCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failureCountInput() {
    return this._failureCount;
  }
}
export interface MfaSettingsPairing {
  /**
  * An integer that defines the maximum number of MFA devices each user can have. This can be any number from `1` to `15`. All devices that are Active or Blocked are subject to this limit.  Defaults to `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_settings#max_allowed_devices MfaSettings#max_allowed_devices}
  */
  readonly maxAllowedDevices?: number;
  /**
  * A string that controls the type of pairing key issued.  Options are `ALPHANUMERIC` (16-character alphanumeric key), `NUMERIC` (12-digit key).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_settings#pairing_key_format MfaSettings#pairing_key_format}
  */
  readonly pairingKeyFormat: string;
}

export function mfaSettingsPairingToTerraform(struct?: MfaSettingsPairing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_allowed_devices: cdktf.numberToTerraform(struct!.maxAllowedDevices),
    pairing_key_format: cdktf.stringToTerraform(struct!.pairingKeyFormat),
  }
}


export function mfaSettingsPairingToHclTerraform(struct?: MfaSettingsPairing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_allowed_devices: {
      value: cdktf.numberToHclTerraform(struct!.maxAllowedDevices),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pairing_key_format: {
      value: cdktf.stringToHclTerraform(struct!.pairingKeyFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaSettingsPairingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaSettingsPairing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxAllowedDevices !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAllowedDevices = this._maxAllowedDevices;
    }
    if (this._pairingKeyFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.pairingKeyFormat = this._pairingKeyFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaSettingsPairing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxAllowedDevices = undefined;
      this._pairingKeyFormat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxAllowedDevices = value.maxAllowedDevices;
      this._pairingKeyFormat = value.pairingKeyFormat;
    }
  }

  // max_allowed_devices - computed: true, optional: true, required: false
  private _maxAllowedDevices?: number; 
  public get maxAllowedDevices() {
    return this.getNumberAttribute('max_allowed_devices');
  }
  public set maxAllowedDevices(value: number) {
    this._maxAllowedDevices = value;
  }
  public resetMaxAllowedDevices() {
    this._maxAllowedDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAllowedDevicesInput() {
    return this._maxAllowedDevices;
  }

  // pairing_key_format - computed: false, optional: false, required: true
  private _pairingKeyFormat?: string; 
  public get pairingKeyFormat() {
    return this.getStringAttribute('pairing_key_format');
  }
  public set pairingKeyFormat(value: string) {
    this._pairingKeyFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pairingKeyFormatInput() {
    return this._pairingKeyFormat;
  }
}
export interface MfaSettingsPhoneExtensions {
  /**
  * A boolean when set to `true` to allow one-time passwords to be delivered via voice to phone numbers that include extensions. Set to `false` to disable support for phone numbers with extensions. By default, support for extensions is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_settings#enabled MfaSettings#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function mfaSettingsPhoneExtensionsToTerraform(struct?: MfaSettingsPhoneExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function mfaSettingsPhoneExtensionsToHclTerraform(struct?: MfaSettingsPhoneExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaSettingsPhoneExtensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaSettingsPhoneExtensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaSettingsPhoneExtensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface MfaSettingsUsers {
  /**
  * A boolean that, when set to `true`, will enable MFA by default for new users.  Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_settings#mfa_enabled MfaSettings#mfa_enabled}
  */
  readonly mfaEnabled: boolean | cdktf.IResolvable;
}

export function mfaSettingsUsersToTerraform(struct?: MfaSettingsUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mfa_enabled: cdktf.booleanToTerraform(struct!.mfaEnabled),
  }
}


export function mfaSettingsUsersToHclTerraform(struct?: MfaSettingsUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mfa_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.mfaEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MfaSettingsUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MfaSettingsUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mfaEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.mfaEnabled = this._mfaEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MfaSettingsUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mfaEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mfaEnabled = value.mfaEnabled;
    }
  }

  // mfa_enabled - computed: true, optional: false, required: true
  private _mfaEnabled?: boolean | cdktf.IResolvable; 
  public get mfaEnabled() {
    return this.getBooleanAttribute('mfa_enabled');
  }
  public set mfaEnabled(value: boolean | cdktf.IResolvable) {
    this._mfaEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaEnabledInput() {
    return this._mfaEnabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_settings pingone_mfa_settings}
*/
export class MfaSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_mfa_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MfaSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MfaSettings to import
  * @param importFromId The id of the existing MfaSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MfaSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_mfa_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/mfa_settings pingone_mfa_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MfaSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: MfaSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_mfa_settings',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentId = config.environmentId;
    this._lockout.internalValue = config.lockout;
    this._pairing.internalValue = config.pairing;
    this._phoneExtensions.internalValue = config.phoneExtensions;
    this._users.internalValue = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // lockout - computed: false, optional: true, required: false
  private _lockout = new MfaSettingsLockoutOutputReference(this, "lockout");
  public get lockout() {
    return this._lockout;
  }
  public putLockout(value: MfaSettingsLockout) {
    this._lockout.internalValue = value;
  }
  public resetLockout() {
    this._lockout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutInput() {
    return this._lockout.internalValue;
  }

  // pairing - computed: false, optional: false, required: true
  private _pairing = new MfaSettingsPairingOutputReference(this, "pairing");
  public get pairing() {
    return this._pairing;
  }
  public putPairing(value: MfaSettingsPairing) {
    this._pairing.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pairingInput() {
    return this._pairing.internalValue;
  }

  // phone_extensions - computed: true, optional: true, required: false
  private _phoneExtensions = new MfaSettingsPhoneExtensionsOutputReference(this, "phone_extensions");
  public get phoneExtensions() {
    return this._phoneExtensions;
  }
  public putPhoneExtensions(value: MfaSettingsPhoneExtensions) {
    this._phoneExtensions.internalValue = value;
  }
  public resetPhoneExtensions() {
    this._phoneExtensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneExtensionsInput() {
    return this._phoneExtensions.internalValue;
  }

  // users - computed: true, optional: true, required: false
  private _users = new MfaSettingsUsersOutputReference(this, "users");
  public get users() {
    return this._users;
  }
  public putUsers(value: MfaSettingsUsers) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_id: cdktf.stringToTerraform(this._environmentId),
      lockout: mfaSettingsLockoutToTerraform(this._lockout.internalValue),
      pairing: mfaSettingsPairingToTerraform(this._pairing.internalValue),
      phone_extensions: mfaSettingsPhoneExtensionsToTerraform(this._phoneExtensions.internalValue),
      users: mfaSettingsUsersToTerraform(this._users.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lockout: {
        value: mfaSettingsLockoutToHclTerraform(this._lockout.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MfaSettingsLockout",
      },
      pairing: {
        value: mfaSettingsPairingToHclTerraform(this._pairing.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MfaSettingsPairing",
      },
      phone_extensions: {
        value: mfaSettingsPhoneExtensionsToHclTerraform(this._phoneExtensions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MfaSettingsPhoneExtensions",
      },
      users: {
        value: mfaSettingsUsersToHclTerraform(this._users.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MfaSettingsUsers",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
