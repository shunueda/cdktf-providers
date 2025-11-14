// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ngt_installation_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NgtInstallationV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ngt_installation_v2#capablities NgtInstallationV2#capablities}
  */
  readonly capablities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ngt_installation_v2#ext_id NgtInstallationV2#ext_id}
  */
  readonly extId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ngt_installation_v2#id NgtInstallationV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ngt_installation_v2#is_enabled NgtInstallationV2#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ngt_installation_v2#credential NgtInstallationV2#credential}
  */
  readonly credential?: NgtInstallationV2Credential;
  /**
  * reboot_preference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ngt_installation_v2#reboot_preference NgtInstallationV2#reboot_preference}
  */
  readonly rebootPreference?: NgtInstallationV2RebootPreference;
}
export interface NgtInstallationV2Credential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ngt_installation_v2#password NgtInstallationV2#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ngt_installation_v2#username NgtInstallationV2#username}
  */
  readonly username: string;
}

export function ngtInstallationV2CredentialToTerraform(struct?: NgtInstallationV2CredentialOutputReference | NgtInstallationV2Credential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function ngtInstallationV2CredentialToHclTerraform(struct?: NgtInstallationV2CredentialOutputReference | NgtInstallationV2Credential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NgtInstallationV2CredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NgtInstallationV2Credential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NgtInstallationV2Credential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface NgtInstallationV2RebootPreferenceSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ngt_installation_v2#start_time NgtInstallationV2#start_time}
  */
  readonly startTime: string;
}

export function ngtInstallationV2RebootPreferenceScheduleToTerraform(struct?: NgtInstallationV2RebootPreferenceScheduleOutputReference | NgtInstallationV2RebootPreferenceSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function ngtInstallationV2RebootPreferenceScheduleToHclTerraform(struct?: NgtInstallationV2RebootPreferenceScheduleOutputReference | NgtInstallationV2RebootPreferenceSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NgtInstallationV2RebootPreferenceScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NgtInstallationV2RebootPreferenceSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NgtInstallationV2RebootPreferenceSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._startTime = value.startTime;
    }
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface NgtInstallationV2RebootPreference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ngt_installation_v2#schedule_type NgtInstallationV2#schedule_type}
  */
  readonly scheduleType: string;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ngt_installation_v2#schedule NgtInstallationV2#schedule}
  */
  readonly schedule?: NgtInstallationV2RebootPreferenceSchedule;
}

export function ngtInstallationV2RebootPreferenceToTerraform(struct?: NgtInstallationV2RebootPreferenceOutputReference | NgtInstallationV2RebootPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schedule_type: cdktf.stringToTerraform(struct!.scheduleType),
    schedule: ngtInstallationV2RebootPreferenceScheduleToTerraform(struct!.schedule),
  }
}


export function ngtInstallationV2RebootPreferenceToHclTerraform(struct?: NgtInstallationV2RebootPreferenceOutputReference | NgtInstallationV2RebootPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schedule_type: {
      value: cdktf.stringToHclTerraform(struct!.scheduleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: ngtInstallationV2RebootPreferenceScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "NgtInstallationV2RebootPreferenceScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NgtInstallationV2RebootPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NgtInstallationV2RebootPreference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scheduleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleType = this._scheduleType;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NgtInstallationV2RebootPreference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scheduleType = undefined;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scheduleType = value.scheduleType;
      this._schedule.internalValue = value.schedule;
    }
  }

  // schedule_type - computed: false, optional: false, required: true
  private _scheduleType?: string; 
  public get scheduleType() {
    return this.getStringAttribute('schedule_type');
  }
  public set scheduleType(value: string) {
    this._scheduleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTypeInput() {
    return this._scheduleType;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new NgtInstallationV2RebootPreferenceScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: NgtInstallationV2RebootPreferenceSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ngt_installation_v2 nutanix_ngt_installation_v2}
*/
export class NgtInstallationV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_ngt_installation_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NgtInstallationV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NgtInstallationV2 to import
  * @param importFromId The id of the existing NgtInstallationV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ngt_installation_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NgtInstallationV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_ngt_installation_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ngt_installation_v2 nutanix_ngt_installation_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NgtInstallationV2Config
  */
  public constructor(scope: Construct, id: string, config: NgtInstallationV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_ngt_installation_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._capablities = config.capablities;
    this._extId = config.extId;
    this._id = config.id;
    this._isEnabled = config.isEnabled;
    this._credential.internalValue = config.credential;
    this._rebootPreference.internalValue = config.rebootPreference;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_version - computed: true, optional: false, required: false
  public get availableVersion() {
    return this.getStringAttribute('available_version');
  }

  // capablities - computed: true, optional: true, required: false
  private _capablities?: string[]; 
  public get capablities() {
    return this.getListAttribute('capablities');
  }
  public set capablities(value: string[]) {
    this._capablities = value;
  }
  public resetCapablities() {
    this._capablities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capablitiesInput() {
    return this._capablities;
  }

  // ext_id - computed: false, optional: false, required: true
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }

  // guest_os_version - computed: true, optional: false, required: false
  public get guestOsVersion() {
    return this.getStringAttribute('guest_os_version');
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

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // is_installed - computed: true, optional: false, required: false
  public get isInstalled() {
    return this.getBooleanAttribute('is_installed');
  }

  // is_iso_inserted - computed: true, optional: false, required: false
  public get isIsoInserted() {
    return this.getBooleanAttribute('is_iso_inserted');
  }

  // is_reachable - computed: true, optional: false, required: false
  public get isReachable() {
    return this.getBooleanAttribute('is_reachable');
  }

  // is_vm_mobility_drivers_installed - computed: true, optional: false, required: false
  public get isVmMobilityDriversInstalled() {
    return this.getBooleanAttribute('is_vm_mobility_drivers_installed');
  }

  // is_vss_snapshot_capable - computed: true, optional: false, required: false
  public get isVssSnapshotCapable() {
    return this.getBooleanAttribute('is_vss_snapshot_capable');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // credential - computed: false, optional: true, required: false
  private _credential = new NgtInstallationV2CredentialOutputReference(this, "credential");
  public get credential() {
    return this._credential;
  }
  public putCredential(value: NgtInstallationV2Credential) {
    this._credential.internalValue = value;
  }
  public resetCredential() {
    this._credential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential.internalValue;
  }

  // reboot_preference - computed: false, optional: true, required: false
  private _rebootPreference = new NgtInstallationV2RebootPreferenceOutputReference(this, "reboot_preference");
  public get rebootPreference() {
    return this._rebootPreference;
  }
  public putRebootPreference(value: NgtInstallationV2RebootPreference) {
    this._rebootPreference.internalValue = value;
  }
  public resetRebootPreference() {
    this._rebootPreference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootPreferenceInput() {
    return this._rebootPreference.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capablities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._capablities),
      ext_id: cdktf.stringToTerraform(this._extId),
      id: cdktf.stringToTerraform(this._id),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      credential: ngtInstallationV2CredentialToTerraform(this._credential.internalValue),
      reboot_preference: ngtInstallationV2RebootPreferenceToTerraform(this._rebootPreference.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capablities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._capablities),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ext_id: {
        value: cdktf.stringToHclTerraform(this._extId),
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
      is_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      credential: {
        value: ngtInstallationV2CredentialToHclTerraform(this._credential.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NgtInstallationV2CredentialList",
      },
      reboot_preference: {
        value: ngtInstallationV2RebootPreferenceToHclTerraform(this._rebootPreference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NgtInstallationV2RebootPreferenceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
