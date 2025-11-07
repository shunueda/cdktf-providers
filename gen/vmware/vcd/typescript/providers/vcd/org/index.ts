// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgConfig extends cdktf.TerraformMetaArguments {
  /**
  * True if this organization is allowed to share catalogs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#can_publish_catalogs Org#can_publish_catalogs}
  */
  readonly canPublishCatalogs?: boolean | cdktf.IResolvable;
  /**
  * True if this organization is allowed to publish external catalogs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#can_publish_external_catalogs Org#can_publish_external_catalogs}
  */
  readonly canPublishExternalCatalogs?: boolean | cdktf.IResolvable;
  /**
  * True if this organization is allowed to subscribe to external catalogs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#can_subscribe_external_catalogs Org#can_subscribe_external_catalogs}
  */
  readonly canSubscribeExternalCatalogs?: boolean | cdktf.IResolvable;
  /**
  * Specifies this organization's default for virtual machine boot delay after power on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#delay_after_power_on_seconds Org#delay_after_power_on_seconds}
  */
  readonly delayAfterPowerOnSeconds?: number;
  /**
  * When destroying use delete_force=True with delete_recursive=True to remove an org and any objects it contains, regardless of their state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#delete_force Org#delete_force}
  */
  readonly deleteForce?: boolean | cdktf.IResolvable;
  /**
  * When destroying use delete_recursive=True to remove the org and any objects it contains that are in a state that normally allows removal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#delete_recursive Org#delete_recursive}
  */
  readonly deleteRecursive?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of virtual machines that can be deployed simultaneously by a member of this organization. (0 = unlimited)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#deployed_vm_quota Org#deployed_vm_quota}
  */
  readonly deployedVmQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#description Org#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#full_name Org#full_name}
  */
  readonly fullName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#id Org#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * True if this organization is enabled (allows login and all other operations).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#is_enabled Org#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Key value map of metadata to assign to this organization. Key and value can be any string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#metadata Org#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#name Org#name}
  */
  readonly name: string;
  /**
  * Maximum number of virtual machines in vApps or vApp templates that can be stored in an undeployed state by a member of this organization. (0 = unlimited)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#stored_vm_quota Org#stored_vm_quota}
  */
  readonly storedVmQuota?: number;
  /**
  * account_lockout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#account_lockout Org#account_lockout}
  */
  readonly accountLockout?: OrgAccountLockout;
  /**
  * metadata_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#metadata_entry Org#metadata_entry}
  */
  readonly metadataEntry?: OrgMetadataEntry[] | cdktf.IResolvable;
  /**
  * vapp_lease block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#vapp_lease Org#vapp_lease}
  */
  readonly vappLease?: OrgVappLease;
  /**
  * vapp_template_lease block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#vapp_template_lease Org#vapp_template_lease}
  */
  readonly vappTemplateLease?: OrgVappTemplateLease;
}
export interface OrgAccountLockout {
  /**
  * Whether account lockout is enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#enabled Org#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Number of login attempts that will trigger an account lockout for the given user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#invalid_logins_before_lockout Org#invalid_logins_before_lockout}
  */
  readonly invalidLoginsBeforeLockout: number;
  /**
  * Once a user is locked out, they will not be able to log back in for this time period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#lockout_interval_minutes Org#lockout_interval_minutes}
  */
  readonly lockoutIntervalMinutes: number;
}

export function orgAccountLockoutToTerraform(struct?: OrgAccountLockoutOutputReference | OrgAccountLockout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    invalid_logins_before_lockout: cdktf.numberToTerraform(struct!.invalidLoginsBeforeLockout),
    lockout_interval_minutes: cdktf.numberToTerraform(struct!.lockoutIntervalMinutes),
  }
}


export function orgAccountLockoutToHclTerraform(struct?: OrgAccountLockoutOutputReference | OrgAccountLockout): any {
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
    invalid_logins_before_lockout: {
      value: cdktf.numberToHclTerraform(struct!.invalidLoginsBeforeLockout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lockout_interval_minutes: {
      value: cdktf.numberToHclTerraform(struct!.lockoutIntervalMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgAccountLockoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrgAccountLockout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._invalidLoginsBeforeLockout !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidLoginsBeforeLockout = this._invalidLoginsBeforeLockout;
    }
    if (this._lockoutIntervalMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockoutIntervalMinutes = this._lockoutIntervalMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgAccountLockout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._invalidLoginsBeforeLockout = undefined;
      this._lockoutIntervalMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._invalidLoginsBeforeLockout = value.invalidLoginsBeforeLockout;
      this._lockoutIntervalMinutes = value.lockoutIntervalMinutes;
    }
  }

  // enabled - computed: false, optional: false, required: true
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

  // invalid_logins_before_lockout - computed: false, optional: false, required: true
  private _invalidLoginsBeforeLockout?: number; 
  public get invalidLoginsBeforeLockout() {
    return this.getNumberAttribute('invalid_logins_before_lockout');
  }
  public set invalidLoginsBeforeLockout(value: number) {
    this._invalidLoginsBeforeLockout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidLoginsBeforeLockoutInput() {
    return this._invalidLoginsBeforeLockout;
  }

  // lockout_interval_minutes - computed: false, optional: false, required: true
  private _lockoutIntervalMinutes?: number; 
  public get lockoutIntervalMinutes() {
    return this.getNumberAttribute('lockout_interval_minutes');
  }
  public set lockoutIntervalMinutes(value: number) {
    this._lockoutIntervalMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutIntervalMinutesInput() {
    return this._lockoutIntervalMinutes;
  }
}
export interface OrgMetadataEntry {
  /**
  * Domain for this metadata entry. true, if it belongs to SYSTEM. false, if it belongs to GENERAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#is_system Org#is_system}
  */
  readonly isSystem?: boolean | cdktf.IResolvable;
  /**
  * Key of this metadata entry. Required if the metadata entry is not empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#key Org#key}
  */
  readonly key?: string;
  /**
  * Type of this metadata entry. One of: 'MetadataStringValue', 'MetadataNumberValue', 'MetadataBooleanValue', 'MetadataDateTimeValue'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#type Org#type}
  */
  readonly type?: string;
  /**
  * User access level for this metadata entry. One of: 'READWRITE', 'READONLY', 'PRIVATE'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#user_access Org#user_access}
  */
  readonly userAccess?: string;
  /**
  * Value of this metadata entry. Required if the metadata entry is not empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#value Org#value}
  */
  readonly value?: string;
}

export function orgMetadataEntryToTerraform(struct?: OrgMetadataEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_system: cdktf.booleanToTerraform(struct!.isSystem),
    key: cdktf.stringToTerraform(struct!.key),
    type: cdktf.stringToTerraform(struct!.type),
    user_access: cdktf.stringToTerraform(struct!.userAccess),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function orgMetadataEntryToHclTerraform(struct?: OrgMetadataEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_system: {
      value: cdktf.booleanToHclTerraform(struct!.isSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_access: {
      value: cdktf.stringToHclTerraform(struct!.userAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgMetadataEntryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OrgMetadataEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSystem = this._isSystem;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAccess = this._userAccess;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgMetadataEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isSystem = undefined;
      this._key = undefined;
      this._type = undefined;
      this._userAccess = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isSystem = value.isSystem;
      this._key = value.key;
      this._type = value.type;
      this._userAccess = value.userAccess;
      this._value = value.value;
    }
  }

  // is_system - computed: false, optional: true, required: false
  private _isSystem?: boolean | cdktf.IResolvable; 
  public get isSystem() {
    return this.getBooleanAttribute('is_system');
  }
  public set isSystem(value: boolean | cdktf.IResolvable) {
    this._isSystem = value;
  }
  public resetIsSystem() {
    this._isSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSystemInput() {
    return this._isSystem;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_access - computed: false, optional: true, required: false
  private _userAccess?: string; 
  public get userAccess() {
    return this.getStringAttribute('user_access');
  }
  public set userAccess(value: string) {
    this._userAccess = value;
  }
  public resetUserAccess() {
    this._userAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAccessInput() {
    return this._userAccess;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class OrgMetadataEntryList extends cdktf.ComplexList {
  public internalValue? : OrgMetadataEntry[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OrgMetadataEntryOutputReference {
    return new OrgMetadataEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgVappLease {
  /**
  * If true, storage for a vApp is deleted when the vApp's lease expires. If false, the storage is flagged for deletion, but not deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#delete_on_storage_lease_expiration Org#delete_on_storage_lease_expiration}
  */
  readonly deleteOnStorageLeaseExpiration: boolean | cdktf.IResolvable;
  /**
  * How long vApps can run before they are automatically stopped (in seconds). 0 means never expires
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#maximum_runtime_lease_in_sec Org#maximum_runtime_lease_in_sec}
  */
  readonly maximumRuntimeLeaseInSec: number;
  /**
  * How long stopped vApps are available before being automatically cleaned up (in seconds). 0 means never expires
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#maximum_storage_lease_in_sec Org#maximum_storage_lease_in_sec}
  */
  readonly maximumStorageLeaseInSec: number;
  /**
  * When true, vApps are powered off when the runtime lease expires. When false, vApps are suspended when the runtime lease expires
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#power_off_on_runtime_lease_expiration Org#power_off_on_runtime_lease_expiration}
  */
  readonly powerOffOnRuntimeLeaseExpiration: boolean | cdktf.IResolvable;
}

export function orgVappLeaseToTerraform(struct?: OrgVappLeaseOutputReference | OrgVappLease): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_on_storage_lease_expiration: cdktf.booleanToTerraform(struct!.deleteOnStorageLeaseExpiration),
    maximum_runtime_lease_in_sec: cdktf.numberToTerraform(struct!.maximumRuntimeLeaseInSec),
    maximum_storage_lease_in_sec: cdktf.numberToTerraform(struct!.maximumStorageLeaseInSec),
    power_off_on_runtime_lease_expiration: cdktf.booleanToTerraform(struct!.powerOffOnRuntimeLeaseExpiration),
  }
}


export function orgVappLeaseToHclTerraform(struct?: OrgVappLeaseOutputReference | OrgVappLease): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_on_storage_lease_expiration: {
      value: cdktf.booleanToHclTerraform(struct!.deleteOnStorageLeaseExpiration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    maximum_runtime_lease_in_sec: {
      value: cdktf.numberToHclTerraform(struct!.maximumRuntimeLeaseInSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_storage_lease_in_sec: {
      value: cdktf.numberToHclTerraform(struct!.maximumStorageLeaseInSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    power_off_on_runtime_lease_expiration: {
      value: cdktf.booleanToHclTerraform(struct!.powerOffOnRuntimeLeaseExpiration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgVappLeaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrgVappLease | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteOnStorageLeaseExpiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteOnStorageLeaseExpiration = this._deleteOnStorageLeaseExpiration;
    }
    if (this._maximumRuntimeLeaseInSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRuntimeLeaseInSec = this._maximumRuntimeLeaseInSec;
    }
    if (this._maximumStorageLeaseInSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumStorageLeaseInSec = this._maximumStorageLeaseInSec;
    }
    if (this._powerOffOnRuntimeLeaseExpiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.powerOffOnRuntimeLeaseExpiration = this._powerOffOnRuntimeLeaseExpiration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgVappLease | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deleteOnStorageLeaseExpiration = undefined;
      this._maximumRuntimeLeaseInSec = undefined;
      this._maximumStorageLeaseInSec = undefined;
      this._powerOffOnRuntimeLeaseExpiration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deleteOnStorageLeaseExpiration = value.deleteOnStorageLeaseExpiration;
      this._maximumRuntimeLeaseInSec = value.maximumRuntimeLeaseInSec;
      this._maximumStorageLeaseInSec = value.maximumStorageLeaseInSec;
      this._powerOffOnRuntimeLeaseExpiration = value.powerOffOnRuntimeLeaseExpiration;
    }
  }

  // delete_on_storage_lease_expiration - computed: false, optional: false, required: true
  private _deleteOnStorageLeaseExpiration?: boolean | cdktf.IResolvable; 
  public get deleteOnStorageLeaseExpiration() {
    return this.getBooleanAttribute('delete_on_storage_lease_expiration');
  }
  public set deleteOnStorageLeaseExpiration(value: boolean | cdktf.IResolvable) {
    this._deleteOnStorageLeaseExpiration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnStorageLeaseExpirationInput() {
    return this._deleteOnStorageLeaseExpiration;
  }

  // maximum_runtime_lease_in_sec - computed: false, optional: false, required: true
  private _maximumRuntimeLeaseInSec?: number; 
  public get maximumRuntimeLeaseInSec() {
    return this.getNumberAttribute('maximum_runtime_lease_in_sec');
  }
  public set maximumRuntimeLeaseInSec(value: number) {
    this._maximumRuntimeLeaseInSec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRuntimeLeaseInSecInput() {
    return this._maximumRuntimeLeaseInSec;
  }

  // maximum_storage_lease_in_sec - computed: false, optional: false, required: true
  private _maximumStorageLeaseInSec?: number; 
  public get maximumStorageLeaseInSec() {
    return this.getNumberAttribute('maximum_storage_lease_in_sec');
  }
  public set maximumStorageLeaseInSec(value: number) {
    this._maximumStorageLeaseInSec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumStorageLeaseInSecInput() {
    return this._maximumStorageLeaseInSec;
  }

  // power_off_on_runtime_lease_expiration - computed: false, optional: false, required: true
  private _powerOffOnRuntimeLeaseExpiration?: boolean | cdktf.IResolvable; 
  public get powerOffOnRuntimeLeaseExpiration() {
    return this.getBooleanAttribute('power_off_on_runtime_lease_expiration');
  }
  public set powerOffOnRuntimeLeaseExpiration(value: boolean | cdktf.IResolvable) {
    this._powerOffOnRuntimeLeaseExpiration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get powerOffOnRuntimeLeaseExpirationInput() {
    return this._powerOffOnRuntimeLeaseExpiration;
  }
}
export interface OrgVappTemplateLease {
  /**
  * If true, storage for a vAppTemplate is deleted when the vAppTemplate lease expires. If false, the storage is flagged for deletion, but not deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#delete_on_storage_lease_expiration Org#delete_on_storage_lease_expiration}
  */
  readonly deleteOnStorageLeaseExpiration: boolean | cdktf.IResolvable;
  /**
  * How long vApp templates are available before being automatically cleaned up (in seconds). 0 means never expires
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#maximum_storage_lease_in_sec Org#maximum_storage_lease_in_sec}
  */
  readonly maximumStorageLeaseInSec: number;
}

export function orgVappTemplateLeaseToTerraform(struct?: OrgVappTemplateLeaseOutputReference | OrgVappTemplateLease): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_on_storage_lease_expiration: cdktf.booleanToTerraform(struct!.deleteOnStorageLeaseExpiration),
    maximum_storage_lease_in_sec: cdktf.numberToTerraform(struct!.maximumStorageLeaseInSec),
  }
}


export function orgVappTemplateLeaseToHclTerraform(struct?: OrgVappTemplateLeaseOutputReference | OrgVappTemplateLease): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_on_storage_lease_expiration: {
      value: cdktf.booleanToHclTerraform(struct!.deleteOnStorageLeaseExpiration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    maximum_storage_lease_in_sec: {
      value: cdktf.numberToHclTerraform(struct!.maximumStorageLeaseInSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgVappTemplateLeaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrgVappTemplateLease | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteOnStorageLeaseExpiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteOnStorageLeaseExpiration = this._deleteOnStorageLeaseExpiration;
    }
    if (this._maximumStorageLeaseInSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumStorageLeaseInSec = this._maximumStorageLeaseInSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgVappTemplateLease | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deleteOnStorageLeaseExpiration = undefined;
      this._maximumStorageLeaseInSec = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deleteOnStorageLeaseExpiration = value.deleteOnStorageLeaseExpiration;
      this._maximumStorageLeaseInSec = value.maximumStorageLeaseInSec;
    }
  }

  // delete_on_storage_lease_expiration - computed: false, optional: false, required: true
  private _deleteOnStorageLeaseExpiration?: boolean | cdktf.IResolvable; 
  public get deleteOnStorageLeaseExpiration() {
    return this.getBooleanAttribute('delete_on_storage_lease_expiration');
  }
  public set deleteOnStorageLeaseExpiration(value: boolean | cdktf.IResolvable) {
    this._deleteOnStorageLeaseExpiration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnStorageLeaseExpirationInput() {
    return this._deleteOnStorageLeaseExpiration;
  }

  // maximum_storage_lease_in_sec - computed: false, optional: false, required: true
  private _maximumStorageLeaseInSec?: number; 
  public get maximumStorageLeaseInSec() {
    return this.getNumberAttribute('maximum_storage_lease_in_sec');
  }
  public set maximumStorageLeaseInSec(value: number) {
    this._maximumStorageLeaseInSec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumStorageLeaseInSecInput() {
    return this._maximumStorageLeaseInSec;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org vcd_org}
*/
export class Org extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_org";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Org resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Org to import
  * @param importFromId The id of the existing Org that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Org to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_org", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org vcd_org} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgConfig
  */
  public constructor(scope: Construct, id: string, config: OrgConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_org',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._canPublishCatalogs = config.canPublishCatalogs;
    this._canPublishExternalCatalogs = config.canPublishExternalCatalogs;
    this._canSubscribeExternalCatalogs = config.canSubscribeExternalCatalogs;
    this._delayAfterPowerOnSeconds = config.delayAfterPowerOnSeconds;
    this._deleteForce = config.deleteForce;
    this._deleteRecursive = config.deleteRecursive;
    this._deployedVmQuota = config.deployedVmQuota;
    this._description = config.description;
    this._fullName = config.fullName;
    this._id = config.id;
    this._isEnabled = config.isEnabled;
    this._metadata = config.metadata;
    this._name = config.name;
    this._storedVmQuota = config.storedVmQuota;
    this._accountLockout.internalValue = config.accountLockout;
    this._metadataEntry.internalValue = config.metadataEntry;
    this._vappLease.internalValue = config.vappLease;
    this._vappTemplateLease.internalValue = config.vappTemplateLease;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_publish_catalogs - computed: false, optional: true, required: false
  private _canPublishCatalogs?: boolean | cdktf.IResolvable; 
  public get canPublishCatalogs() {
    return this.getBooleanAttribute('can_publish_catalogs');
  }
  public set canPublishCatalogs(value: boolean | cdktf.IResolvable) {
    this._canPublishCatalogs = value;
  }
  public resetCanPublishCatalogs() {
    this._canPublishCatalogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canPublishCatalogsInput() {
    return this._canPublishCatalogs;
  }

  // can_publish_external_catalogs - computed: false, optional: true, required: false
  private _canPublishExternalCatalogs?: boolean | cdktf.IResolvable; 
  public get canPublishExternalCatalogs() {
    return this.getBooleanAttribute('can_publish_external_catalogs');
  }
  public set canPublishExternalCatalogs(value: boolean | cdktf.IResolvable) {
    this._canPublishExternalCatalogs = value;
  }
  public resetCanPublishExternalCatalogs() {
    this._canPublishExternalCatalogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canPublishExternalCatalogsInput() {
    return this._canPublishExternalCatalogs;
  }

  // can_subscribe_external_catalogs - computed: false, optional: true, required: false
  private _canSubscribeExternalCatalogs?: boolean | cdktf.IResolvable; 
  public get canSubscribeExternalCatalogs() {
    return this.getBooleanAttribute('can_subscribe_external_catalogs');
  }
  public set canSubscribeExternalCatalogs(value: boolean | cdktf.IResolvable) {
    this._canSubscribeExternalCatalogs = value;
  }
  public resetCanSubscribeExternalCatalogs() {
    this._canSubscribeExternalCatalogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canSubscribeExternalCatalogsInput() {
    return this._canSubscribeExternalCatalogs;
  }

  // delay_after_power_on_seconds - computed: false, optional: true, required: false
  private _delayAfterPowerOnSeconds?: number; 
  public get delayAfterPowerOnSeconds() {
    return this.getNumberAttribute('delay_after_power_on_seconds');
  }
  public set delayAfterPowerOnSeconds(value: number) {
    this._delayAfterPowerOnSeconds = value;
  }
  public resetDelayAfterPowerOnSeconds() {
    this._delayAfterPowerOnSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayAfterPowerOnSecondsInput() {
    return this._delayAfterPowerOnSeconds;
  }

  // delete_force - computed: false, optional: true, required: false
  private _deleteForce?: boolean | cdktf.IResolvable; 
  public get deleteForce() {
    return this.getBooleanAttribute('delete_force');
  }
  public set deleteForce(value: boolean | cdktf.IResolvable) {
    this._deleteForce = value;
  }
  public resetDeleteForce() {
    this._deleteForce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteForceInput() {
    return this._deleteForce;
  }

  // delete_recursive - computed: false, optional: true, required: false
  private _deleteRecursive?: boolean | cdktf.IResolvable; 
  public get deleteRecursive() {
    return this.getBooleanAttribute('delete_recursive');
  }
  public set deleteRecursive(value: boolean | cdktf.IResolvable) {
    this._deleteRecursive = value;
  }
  public resetDeleteRecursive() {
    this._deleteRecursive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRecursiveInput() {
    return this._deleteRecursive;
  }

  // deployed_vm_quota - computed: false, optional: true, required: false
  private _deployedVmQuota?: number; 
  public get deployedVmQuota() {
    return this.getNumberAttribute('deployed_vm_quota');
  }
  public set deployedVmQuota(value: number) {
    this._deployedVmQuota = value;
  }
  public resetDeployedVmQuota() {
    this._deployedVmQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployedVmQuotaInput() {
    return this._deployedVmQuota;
  }

  // description - computed: false, optional: true, required: false
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

  // full_name - computed: false, optional: false, required: true
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
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

  // is_enabled - computed: false, optional: true, required: false
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

  // list_of_catalogs - computed: true, optional: false, required: false
  public get listOfCatalogs() {
    return cdktf.Fn.tolist(this.getListAttribute('list_of_catalogs'));
  }

  // list_of_vdcs - computed: true, optional: false, required: false
  public get listOfVdcs() {
    return cdktf.Fn.tolist(this.getListAttribute('list_of_vdcs'));
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // number_of_catalogs - computed: true, optional: false, required: false
  public get numberOfCatalogs() {
    return this.getNumberAttribute('number_of_catalogs');
  }

  // number_of_vdcs - computed: true, optional: false, required: false
  public get numberOfVdcs() {
    return this.getNumberAttribute('number_of_vdcs');
  }

  // stored_vm_quota - computed: false, optional: true, required: false
  private _storedVmQuota?: number; 
  public get storedVmQuota() {
    return this.getNumberAttribute('stored_vm_quota');
  }
  public set storedVmQuota(value: number) {
    this._storedVmQuota = value;
  }
  public resetStoredVmQuota() {
    this._storedVmQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storedVmQuotaInput() {
    return this._storedVmQuota;
  }

  // account_lockout - computed: false, optional: true, required: false
  private _accountLockout = new OrgAccountLockoutOutputReference(this, "account_lockout");
  public get accountLockout() {
    return this._accountLockout;
  }
  public putAccountLockout(value: OrgAccountLockout) {
    this._accountLockout.internalValue = value;
  }
  public resetAccountLockout() {
    this._accountLockout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountLockoutInput() {
    return this._accountLockout.internalValue;
  }

  // metadata_entry - computed: false, optional: true, required: false
  private _metadataEntry = new OrgMetadataEntryList(this, "metadata_entry", true);
  public get metadataEntry() {
    return this._metadataEntry;
  }
  public putMetadataEntry(value: OrgMetadataEntry[] | cdktf.IResolvable) {
    this._metadataEntry.internalValue = value;
  }
  public resetMetadataEntry() {
    this._metadataEntry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataEntryInput() {
    return this._metadataEntry.internalValue;
  }

  // vapp_lease - computed: false, optional: true, required: false
  private _vappLease = new OrgVappLeaseOutputReference(this, "vapp_lease");
  public get vappLease() {
    return this._vappLease;
  }
  public putVappLease(value: OrgVappLease) {
    this._vappLease.internalValue = value;
  }
  public resetVappLease() {
    this._vappLease.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vappLeaseInput() {
    return this._vappLease.internalValue;
  }

  // vapp_template_lease - computed: false, optional: true, required: false
  private _vappTemplateLease = new OrgVappTemplateLeaseOutputReference(this, "vapp_template_lease");
  public get vappTemplateLease() {
    return this._vappTemplateLease;
  }
  public putVappTemplateLease(value: OrgVappTemplateLease) {
    this._vappTemplateLease.internalValue = value;
  }
  public resetVappTemplateLease() {
    this._vappTemplateLease.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vappTemplateLeaseInput() {
    return this._vappTemplateLease.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      can_publish_catalogs: cdktf.booleanToTerraform(this._canPublishCatalogs),
      can_publish_external_catalogs: cdktf.booleanToTerraform(this._canPublishExternalCatalogs),
      can_subscribe_external_catalogs: cdktf.booleanToTerraform(this._canSubscribeExternalCatalogs),
      delay_after_power_on_seconds: cdktf.numberToTerraform(this._delayAfterPowerOnSeconds),
      delete_force: cdktf.booleanToTerraform(this._deleteForce),
      delete_recursive: cdktf.booleanToTerraform(this._deleteRecursive),
      deployed_vm_quota: cdktf.numberToTerraform(this._deployedVmQuota),
      description: cdktf.stringToTerraform(this._description),
      full_name: cdktf.stringToTerraform(this._fullName),
      id: cdktf.stringToTerraform(this._id),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      stored_vm_quota: cdktf.numberToTerraform(this._storedVmQuota),
      account_lockout: orgAccountLockoutToTerraform(this._accountLockout.internalValue),
      metadata_entry: cdktf.listMapper(orgMetadataEntryToTerraform, true)(this._metadataEntry.internalValue),
      vapp_lease: orgVappLeaseToTerraform(this._vappLease.internalValue),
      vapp_template_lease: orgVappTemplateLeaseToTerraform(this._vappTemplateLease.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      can_publish_catalogs: {
        value: cdktf.booleanToHclTerraform(this._canPublishCatalogs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_publish_external_catalogs: {
        value: cdktf.booleanToHclTerraform(this._canPublishExternalCatalogs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_subscribe_external_catalogs: {
        value: cdktf.booleanToHclTerraform(this._canSubscribeExternalCatalogs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delay_after_power_on_seconds: {
        value: cdktf.numberToHclTerraform(this._delayAfterPowerOnSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_force: {
        value: cdktf.booleanToHclTerraform(this._deleteForce),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_recursive: {
        value: cdktf.booleanToHclTerraform(this._deleteRecursive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deployed_vm_quota: {
        value: cdktf.numberToHclTerraform(this._deployedVmQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_name: {
        value: cdktf.stringToHclTerraform(this._fullName),
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
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stored_vm_quota: {
        value: cdktf.numberToHclTerraform(this._storedVmQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      account_lockout: {
        value: orgAccountLockoutToHclTerraform(this._accountLockout.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrgAccountLockoutList",
      },
      metadata_entry: {
        value: cdktf.listMapperHcl(orgMetadataEntryToHclTerraform, true)(this._metadataEntry.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OrgMetadataEntryList",
      },
      vapp_lease: {
        value: orgVappLeaseToHclTerraform(this._vappLease.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrgVappLeaseList",
      },
      vapp_template_lease: {
        value: orgVappTemplateLeaseToHclTerraform(this._vappTemplateLease.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrgVappTemplateLeaseList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
