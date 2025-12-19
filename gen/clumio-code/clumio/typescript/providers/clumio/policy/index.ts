// https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The status of the policy. Valid values are: `activated` and `deactivated`. `activated` backups will take place regularly according to the policy SLA. `deactivated` backups will not begin until the policy is reactivated. The assets associated with the policy will have their compliance status set to deactivated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#activation_status Policy#activation_status}
  */
  readonly activationStatus?: string;
  /**
  * The user-assigned name of the policy. Note that having identical names for different policies is permissible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#name Policy#name}
  */
  readonly name: string;
  /**
  * The time zone for the policy, in IANA format. For example: `America/Los_Angeles`, `America/New_York`, `Etc/UTC`, etc. For more information, see the Time Zone Database (https://www.iana.org/time-zones) on the IANA website.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#timezone Policy#timezone}
  */
  readonly timezone?: string;
  /**
  * operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#operations Policy#operations}
  */
  readonly operations?: PolicyOperations[] | cdktf.IResolvable;
}
export interface PolicyOperationsAdvancedSettingsAwsEbsVolumeBackup {
  /**
  * Backup tier to store the backup in. Valid values are: `standard` and `lite`. If not provided, the default is `standard`.
  * 	- `standard` = Clumio SecureVault Standard
  * 	- `lite` = Clumio SecureVault Lite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#backup_tier Policy#backup_tier}
  */
  readonly backupTier?: string;
}

export function policyOperationsAdvancedSettingsAwsEbsVolumeBackupToTerraform(struct?: PolicyOperationsAdvancedSettingsAwsEbsVolumeBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_tier: cdktf.stringToTerraform(struct!.backupTier),
  }
}


export function policyOperationsAdvancedSettingsAwsEbsVolumeBackupToHclTerraform(struct?: PolicyOperationsAdvancedSettingsAwsEbsVolumeBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_tier: {
      value: cdktf.stringToHclTerraform(struct!.backupTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyOperationsAdvancedSettingsAwsEbsVolumeBackupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyOperationsAdvancedSettingsAwsEbsVolumeBackup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupTier = this._backupTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyOperationsAdvancedSettingsAwsEbsVolumeBackup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupTier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupTier = value.backupTier;
    }
  }

  // backup_tier - computed: false, optional: true, required: false
  private _backupTier?: string; 
  public get backupTier() {
    return this.getStringAttribute('backup_tier');
  }
  public set backupTier(value: string) {
    this._backupTier = value;
  }
  public resetBackupTier() {
    this._backupTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTierInput() {
    return this._backupTier;
  }
}

export class PolicyOperationsAdvancedSettingsAwsEbsVolumeBackupList extends cdktf.ComplexList {
  public internalValue? : PolicyOperationsAdvancedSettingsAwsEbsVolumeBackup[] | cdktf.IResolvable

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
  public get(index: number): PolicyOperationsAdvancedSettingsAwsEbsVolumeBackupOutputReference {
    return new PolicyOperationsAdvancedSettingsAwsEbsVolumeBackupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyOperationsAdvancedSettingsAwsEc2InstanceBackup {
  /**
  * Backup tier to store the backup in. Valid values are: `standard` and `lite`. If not provided, the default is `standard`.
  * 	- `standard` = Clumio SecureVault Standard
  * 	- `lite` = Clumio SecureVault Lite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#backup_tier Policy#backup_tier}
  */
  readonly backupTier?: string;
}

export function policyOperationsAdvancedSettingsAwsEc2InstanceBackupToTerraform(struct?: PolicyOperationsAdvancedSettingsAwsEc2InstanceBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_tier: cdktf.stringToTerraform(struct!.backupTier),
  }
}


export function policyOperationsAdvancedSettingsAwsEc2InstanceBackupToHclTerraform(struct?: PolicyOperationsAdvancedSettingsAwsEc2InstanceBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_tier: {
      value: cdktf.stringToHclTerraform(struct!.backupTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyOperationsAdvancedSettingsAwsEc2InstanceBackupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyOperationsAdvancedSettingsAwsEc2InstanceBackup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupTier = this._backupTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyOperationsAdvancedSettingsAwsEc2InstanceBackup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupTier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupTier = value.backupTier;
    }
  }

  // backup_tier - computed: false, optional: true, required: false
  private _backupTier?: string; 
  public get backupTier() {
    return this.getStringAttribute('backup_tier');
  }
  public set backupTier(value: string) {
    this._backupTier = value;
  }
  public resetBackupTier() {
    this._backupTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTierInput() {
    return this._backupTier;
  }
}

export class PolicyOperationsAdvancedSettingsAwsEc2InstanceBackupList extends cdktf.ComplexList {
  public internalValue? : PolicyOperationsAdvancedSettingsAwsEc2InstanceBackup[] | cdktf.IResolvable

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
  public get(index: number): PolicyOperationsAdvancedSettingsAwsEc2InstanceBackupOutputReference {
    return new PolicyOperationsAdvancedSettingsAwsEc2InstanceBackupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyOperationsAdvancedSettingsAwsIcebergTableBackup {
  /**
  * Backup tier to store the backup in. Valid values are: `standard`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#backup_tier Policy#backup_tier}
  */
  readonly backupTier?: string;
}

export function policyOperationsAdvancedSettingsAwsIcebergTableBackupToTerraform(struct?: PolicyOperationsAdvancedSettingsAwsIcebergTableBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_tier: cdktf.stringToTerraform(struct!.backupTier),
  }
}


export function policyOperationsAdvancedSettingsAwsIcebergTableBackupToHclTerraform(struct?: PolicyOperationsAdvancedSettingsAwsIcebergTableBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_tier: {
      value: cdktf.stringToHclTerraform(struct!.backupTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyOperationsAdvancedSettingsAwsIcebergTableBackupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyOperationsAdvancedSettingsAwsIcebergTableBackup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupTier = this._backupTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyOperationsAdvancedSettingsAwsIcebergTableBackup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupTier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupTier = value.backupTier;
    }
  }

  // backup_tier - computed: false, optional: true, required: false
  private _backupTier?: string; 
  public get backupTier() {
    return this.getStringAttribute('backup_tier');
  }
  public set backupTier(value: string) {
    this._backupTier = value;
  }
  public resetBackupTier() {
    this._backupTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTierInput() {
    return this._backupTier;
  }
}

export class PolicyOperationsAdvancedSettingsAwsIcebergTableBackupList extends cdktf.ComplexList {
  public internalValue? : PolicyOperationsAdvancedSettingsAwsIcebergTableBackup[] | cdktf.IResolvable

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
  public get(index: number): PolicyOperationsAdvancedSettingsAwsIcebergTableBackupOutputReference {
    return new PolicyOperationsAdvancedSettingsAwsIcebergTableBackupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyOperationsAdvancedSettingsAwsRdsConfigSync {
  /**
  * Additional policy configuration for syncing the configuration of Pitr in aws. Possible values include "immediate" and "maintenance_window". If "immediate" is provided, then configuration sync will be kicked in immediately. Otherwise configuration sync will be executed in a specific time user has provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#apply Policy#apply}
  */
  readonly apply?: string;
}

export function policyOperationsAdvancedSettingsAwsRdsConfigSyncToTerraform(struct?: PolicyOperationsAdvancedSettingsAwsRdsConfigSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply: cdktf.stringToTerraform(struct!.apply),
  }
}


export function policyOperationsAdvancedSettingsAwsRdsConfigSyncToHclTerraform(struct?: PolicyOperationsAdvancedSettingsAwsRdsConfigSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply: {
      value: cdktf.stringToHclTerraform(struct!.apply),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyOperationsAdvancedSettingsAwsRdsConfigSyncOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyOperationsAdvancedSettingsAwsRdsConfigSync | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apply !== undefined) {
      hasAnyValues = true;
      internalValueResult.apply = this._apply;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyOperationsAdvancedSettingsAwsRdsConfigSync | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apply = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apply = value.apply;
    }
  }

  // apply - computed: false, optional: true, required: false
  private _apply?: string; 
  public get apply() {
    return this.getStringAttribute('apply');
  }
  public set apply(value: string) {
    this._apply = value;
  }
  public resetApply() {
    this._apply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyInput() {
    return this._apply;
  }
}

export class PolicyOperationsAdvancedSettingsAwsRdsConfigSyncList extends cdktf.ComplexList {
  public internalValue? : PolicyOperationsAdvancedSettingsAwsRdsConfigSync[] | cdktf.IResolvable

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
  public get(index: number): PolicyOperationsAdvancedSettingsAwsRdsConfigSyncOutputReference {
    return new PolicyOperationsAdvancedSettingsAwsRdsConfigSyncOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyOperationsAdvancedSettingsAwsRdsResourceGranularBackup {
  /**
  * Backup tier to store the RDS backup in. Valid values are: `frozen` and `standard`. For new policies, the only supported value is `frozen`. `standard` is supported for existing policies for a limited period of time.
  * 	- `frozen` = Clumio SecureVault Archive
  * 	- `standard` = Clumio SecureVault record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#backup_tier Policy#backup_tier}
  */
  readonly backupTier?: string;
}

export function policyOperationsAdvancedSettingsAwsRdsResourceGranularBackupToTerraform(struct?: PolicyOperationsAdvancedSettingsAwsRdsResourceGranularBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_tier: cdktf.stringToTerraform(struct!.backupTier),
  }
}


export function policyOperationsAdvancedSettingsAwsRdsResourceGranularBackupToHclTerraform(struct?: PolicyOperationsAdvancedSettingsAwsRdsResourceGranularBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_tier: {
      value: cdktf.stringToHclTerraform(struct!.backupTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyOperationsAdvancedSettingsAwsRdsResourceGranularBackupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyOperationsAdvancedSettingsAwsRdsResourceGranularBackup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupTier = this._backupTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyOperationsAdvancedSettingsAwsRdsResourceGranularBackup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupTier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupTier = value.backupTier;
    }
  }

  // backup_tier - computed: false, optional: true, required: false
  private _backupTier?: string; 
  public get backupTier() {
    return this.getStringAttribute('backup_tier');
  }
  public set backupTier(value: string) {
    this._backupTier = value;
  }
  public resetBackupTier() {
    this._backupTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTierInput() {
    return this._backupTier;
  }
}

export class PolicyOperationsAdvancedSettingsAwsRdsResourceGranularBackupList extends cdktf.ComplexList {
  public internalValue? : PolicyOperationsAdvancedSettingsAwsRdsResourceGranularBackup[] | cdktf.IResolvable

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
  public get(index: number): PolicyOperationsAdvancedSettingsAwsRdsResourceGranularBackupOutputReference {
    return new PolicyOperationsAdvancedSettingsAwsRdsResourceGranularBackupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyOperationsAdvancedSettingsEc2MssqlDatabaseBackup {
  /**
  * The alternative replica for MSSQL database backups. This setting only applies to Availability Group databases. Possible values include "primary", "sync_secondary", and "stop". If "stop" is provided, then backups will not attempt to switch to a different replica when the preferred replica is unavailable. Otherwise, recurring backups will attempt to use either the primary replica or the secondary replica accordingly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#alternative_replica Policy#alternative_replica}
  */
  readonly alternativeReplica?: string;
  /**
  * The primary preferred replica for MSSQL database backups. This setting only applies to Availability Group databases. Possible values include "primary" and "sync_secondary". Recurring backup will first attempt to use either the primary replica or the secondary replica accordingly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#preferred_replica Policy#preferred_replica}
  */
  readonly preferredReplica?: string;
}

export function policyOperationsAdvancedSettingsEc2MssqlDatabaseBackupToTerraform(struct?: PolicyOperationsAdvancedSettingsEc2MssqlDatabaseBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alternative_replica: cdktf.stringToTerraform(struct!.alternativeReplica),
    preferred_replica: cdktf.stringToTerraform(struct!.preferredReplica),
  }
}


export function policyOperationsAdvancedSettingsEc2MssqlDatabaseBackupToHclTerraform(struct?: PolicyOperationsAdvancedSettingsEc2MssqlDatabaseBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alternative_replica: {
      value: cdktf.stringToHclTerraform(struct!.alternativeReplica),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_replica: {
      value: cdktf.stringToHclTerraform(struct!.preferredReplica),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyOperationsAdvancedSettingsEc2MssqlDatabaseBackupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyOperationsAdvancedSettingsEc2MssqlDatabaseBackup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alternativeReplica !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternativeReplica = this._alternativeReplica;
    }
    if (this._preferredReplica !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredReplica = this._preferredReplica;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyOperationsAdvancedSettingsEc2MssqlDatabaseBackup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alternativeReplica = undefined;
      this._preferredReplica = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alternativeReplica = value.alternativeReplica;
      this._preferredReplica = value.preferredReplica;
    }
  }

  // alternative_replica - computed: false, optional: true, required: false
  private _alternativeReplica?: string; 
  public get alternativeReplica() {
    return this.getStringAttribute('alternative_replica');
  }
  public set alternativeReplica(value: string) {
    this._alternativeReplica = value;
  }
  public resetAlternativeReplica() {
    this._alternativeReplica = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternativeReplicaInput() {
    return this._alternativeReplica;
  }

  // preferred_replica - computed: false, optional: true, required: false
  private _preferredReplica?: string; 
  public get preferredReplica() {
    return this.getStringAttribute('preferred_replica');
  }
  public set preferredReplica(value: string) {
    this._preferredReplica = value;
  }
  public resetPreferredReplica() {
    this._preferredReplica = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredReplicaInput() {
    return this._preferredReplica;
  }
}

export class PolicyOperationsAdvancedSettingsEc2MssqlDatabaseBackupList extends cdktf.ComplexList {
  public internalValue? : PolicyOperationsAdvancedSettingsEc2MssqlDatabaseBackup[] | cdktf.IResolvable

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
  public get(index: number): PolicyOperationsAdvancedSettingsEc2MssqlDatabaseBackupOutputReference {
    return new PolicyOperationsAdvancedSettingsEc2MssqlDatabaseBackupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyOperationsAdvancedSettingsEc2MssqlLogBackup {
  /**
  * The alternative replica for MSSQL log backups. This setting only applies to Availability Group databases. Possible values include "primary", "sync_secondary", and "stop". If "stop" is provided, then backups will not attempt to switch to a different replica when the preferred replica is unavailable. Otherwise, recurring backups will attempt to use either the primary replica or the secondary replica accordingly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#alternative_replica Policy#alternative_replica}
  */
  readonly alternativeReplica?: string;
  /**
  * The primary preferred replica for MSSQL log backups. This setting only applies to Availability Group databases. Possible values include "primary" and "sync_secondary". Recurring backup will first attempt to use either the primary replica or the secondary replica accordingly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#preferred_replica Policy#preferred_replica}
  */
  readonly preferredReplica?: string;
}

export function policyOperationsAdvancedSettingsEc2MssqlLogBackupToTerraform(struct?: PolicyOperationsAdvancedSettingsEc2MssqlLogBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alternative_replica: cdktf.stringToTerraform(struct!.alternativeReplica),
    preferred_replica: cdktf.stringToTerraform(struct!.preferredReplica),
  }
}


export function policyOperationsAdvancedSettingsEc2MssqlLogBackupToHclTerraform(struct?: PolicyOperationsAdvancedSettingsEc2MssqlLogBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alternative_replica: {
      value: cdktf.stringToHclTerraform(struct!.alternativeReplica),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_replica: {
      value: cdktf.stringToHclTerraform(struct!.preferredReplica),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyOperationsAdvancedSettingsEc2MssqlLogBackupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyOperationsAdvancedSettingsEc2MssqlLogBackup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alternativeReplica !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternativeReplica = this._alternativeReplica;
    }
    if (this._preferredReplica !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredReplica = this._preferredReplica;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyOperationsAdvancedSettingsEc2MssqlLogBackup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alternativeReplica = undefined;
      this._preferredReplica = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alternativeReplica = value.alternativeReplica;
      this._preferredReplica = value.preferredReplica;
    }
  }

  // alternative_replica - computed: false, optional: true, required: false
  private _alternativeReplica?: string; 
  public get alternativeReplica() {
    return this.getStringAttribute('alternative_replica');
  }
  public set alternativeReplica(value: string) {
    this._alternativeReplica = value;
  }
  public resetAlternativeReplica() {
    this._alternativeReplica = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternativeReplicaInput() {
    return this._alternativeReplica;
  }

  // preferred_replica - computed: false, optional: true, required: false
  private _preferredReplica?: string; 
  public get preferredReplica() {
    return this.getStringAttribute('preferred_replica');
  }
  public set preferredReplica(value: string) {
    this._preferredReplica = value;
  }
  public resetPreferredReplica() {
    this._preferredReplica = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredReplicaInput() {
    return this._preferredReplica;
  }
}

export class PolicyOperationsAdvancedSettingsEc2MssqlLogBackupList extends cdktf.ComplexList {
  public internalValue? : PolicyOperationsAdvancedSettingsEc2MssqlLogBackup[] | cdktf.IResolvable

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
  public get(index: number): PolicyOperationsAdvancedSettingsEc2MssqlLogBackupOutputReference {
    return new PolicyOperationsAdvancedSettingsEc2MssqlLogBackupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyOperationsAdvancedSettingsMssqlDatabaseBackup {
  /**
  * The alternative replica for MSSQL database backups. This setting only applies to Availability Group databases. Possible values include "primary", "sync_secondary", and "stop". If "stop" is provided, then backups will not attempt to switch to a different replica when the preferred replica is unavailable. Otherwise, recurring backups will attempt to use either the primary replica or the secondary replica accordingly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#alternative_replica Policy#alternative_replica}
  */
  readonly alternativeReplica?: string;
  /**
  * The primary preferred replica for MSSQL database backups. This setting only applies to Availability Group databases. Possible values include "primary" and "sync_secondary". Recurring backup will first attempt to use either the primary replica or the secondary replica accordingly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#preferred_replica Policy#preferred_replica}
  */
  readonly preferredReplica?: string;
}

export function policyOperationsAdvancedSettingsMssqlDatabaseBackupToTerraform(struct?: PolicyOperationsAdvancedSettingsMssqlDatabaseBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alternative_replica: cdktf.stringToTerraform(struct!.alternativeReplica),
    preferred_replica: cdktf.stringToTerraform(struct!.preferredReplica),
  }
}


export function policyOperationsAdvancedSettingsMssqlDatabaseBackupToHclTerraform(struct?: PolicyOperationsAdvancedSettingsMssqlDatabaseBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alternative_replica: {
      value: cdktf.stringToHclTerraform(struct!.alternativeReplica),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_replica: {
      value: cdktf.stringToHclTerraform(struct!.preferredReplica),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyOperationsAdvancedSettingsMssqlDatabaseBackupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyOperationsAdvancedSettingsMssqlDatabaseBackup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alternativeReplica !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternativeReplica = this._alternativeReplica;
    }
    if (this._preferredReplica !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredReplica = this._preferredReplica;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyOperationsAdvancedSettingsMssqlDatabaseBackup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alternativeReplica = undefined;
      this._preferredReplica = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alternativeReplica = value.alternativeReplica;
      this._preferredReplica = value.preferredReplica;
    }
  }

  // alternative_replica - computed: false, optional: true, required: false
  private _alternativeReplica?: string; 
  public get alternativeReplica() {
    return this.getStringAttribute('alternative_replica');
  }
  public set alternativeReplica(value: string) {
    this._alternativeReplica = value;
  }
  public resetAlternativeReplica() {
    this._alternativeReplica = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternativeReplicaInput() {
    return this._alternativeReplica;
  }

  // preferred_replica - computed: false, optional: true, required: false
  private _preferredReplica?: string; 
  public get preferredReplica() {
    return this.getStringAttribute('preferred_replica');
  }
  public set preferredReplica(value: string) {
    this._preferredReplica = value;
  }
  public resetPreferredReplica() {
    this._preferredReplica = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredReplicaInput() {
    return this._preferredReplica;
  }
}

export class PolicyOperationsAdvancedSettingsMssqlDatabaseBackupList extends cdktf.ComplexList {
  public internalValue? : PolicyOperationsAdvancedSettingsMssqlDatabaseBackup[] | cdktf.IResolvable

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
  public get(index: number): PolicyOperationsAdvancedSettingsMssqlDatabaseBackupOutputReference {
    return new PolicyOperationsAdvancedSettingsMssqlDatabaseBackupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyOperationsAdvancedSettingsMssqlLogBackup {
  /**
  * The alternative replica for MSSQL log backups. This setting only applies to Availability Group databases. Possible values include "primary", "sync_secondary", and "stop". If "stop" is provided, then backups will not attempt to switch to a different replica when the preferred replica is unavailable. Otherwise, recurring backups will attempt to use either the primary replica or the secondary replica accordingly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#alternative_replica Policy#alternative_replica}
  */
  readonly alternativeReplica?: string;
  /**
  * The primary preferred replica for MSSQL log backups. This setting only applies to Availability Group databases. Possible values include "primary" and "sync_secondary". Recurring backup will first attempt to use either the primary replica or the secondary replica accordingly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#preferred_replica Policy#preferred_replica}
  */
  readonly preferredReplica?: string;
}

export function policyOperationsAdvancedSettingsMssqlLogBackupToTerraform(struct?: PolicyOperationsAdvancedSettingsMssqlLogBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alternative_replica: cdktf.stringToTerraform(struct!.alternativeReplica),
    preferred_replica: cdktf.stringToTerraform(struct!.preferredReplica),
  }
}


export function policyOperationsAdvancedSettingsMssqlLogBackupToHclTerraform(struct?: PolicyOperationsAdvancedSettingsMssqlLogBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alternative_replica: {
      value: cdktf.stringToHclTerraform(struct!.alternativeReplica),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_replica: {
      value: cdktf.stringToHclTerraform(struct!.preferredReplica),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyOperationsAdvancedSettingsMssqlLogBackupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyOperationsAdvancedSettingsMssqlLogBackup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alternativeReplica !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternativeReplica = this._alternativeReplica;
    }
    if (this._preferredReplica !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredReplica = this._preferredReplica;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyOperationsAdvancedSettingsMssqlLogBackup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alternativeReplica = undefined;
      this._preferredReplica = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alternativeReplica = value.alternativeReplica;
      this._preferredReplica = value.preferredReplica;
    }
  }

  // alternative_replica - computed: false, optional: true, required: false
  private _alternativeReplica?: string; 
  public get alternativeReplica() {
    return this.getStringAttribute('alternative_replica');
  }
  public set alternativeReplica(value: string) {
    this._alternativeReplica = value;
  }
  public resetAlternativeReplica() {
    this._alternativeReplica = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternativeReplicaInput() {
    return this._alternativeReplica;
  }

  // preferred_replica - computed: false, optional: true, required: false
  private _preferredReplica?: string; 
  public get preferredReplica() {
    return this.getStringAttribute('preferred_replica');
  }
  public set preferredReplica(value: string) {
    this._preferredReplica = value;
  }
  public resetPreferredReplica() {
    this._preferredReplica = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredReplicaInput() {
    return this._preferredReplica;
  }
}

export class PolicyOperationsAdvancedSettingsMssqlLogBackupList extends cdktf.ComplexList {
  public internalValue? : PolicyOperationsAdvancedSettingsMssqlLogBackup[] | cdktf.IResolvable

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
  public get(index: number): PolicyOperationsAdvancedSettingsMssqlLogBackupOutputReference {
    return new PolicyOperationsAdvancedSettingsMssqlLogBackupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyOperationsAdvancedSettingsProtectionGroupBackup {
  /**
  * Backup tier to store the backup in. Valid values are: `cold` and `frozen`.
  * 	- `cold` = Clumio SecureVault Standard
  * 	- `frozen` = Clumio SecureVault Archive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#backup_tier Policy#backup_tier}
  */
  readonly backupTier?: string;
}

export function policyOperationsAdvancedSettingsProtectionGroupBackupToTerraform(struct?: PolicyOperationsAdvancedSettingsProtectionGroupBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_tier: cdktf.stringToTerraform(struct!.backupTier),
  }
}


export function policyOperationsAdvancedSettingsProtectionGroupBackupToHclTerraform(struct?: PolicyOperationsAdvancedSettingsProtectionGroupBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_tier: {
      value: cdktf.stringToHclTerraform(struct!.backupTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyOperationsAdvancedSettingsProtectionGroupBackupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyOperationsAdvancedSettingsProtectionGroupBackup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupTier = this._backupTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyOperationsAdvancedSettingsProtectionGroupBackup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupTier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupTier = value.backupTier;
    }
  }

  // backup_tier - computed: false, optional: true, required: false
  private _backupTier?: string; 
  public get backupTier() {
    return this.getStringAttribute('backup_tier');
  }
  public set backupTier(value: string) {
    this._backupTier = value;
  }
  public resetBackupTier() {
    this._backupTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTierInput() {
    return this._backupTier;
  }
}

export class PolicyOperationsAdvancedSettingsProtectionGroupBackupList extends cdktf.ComplexList {
  public internalValue? : PolicyOperationsAdvancedSettingsProtectionGroupBackup[] | cdktf.IResolvable

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
  public get(index: number): PolicyOperationsAdvancedSettingsProtectionGroupBackupOutputReference {
    return new PolicyOperationsAdvancedSettingsProtectionGroupBackupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyOperationsAdvancedSettingsProtectionGroupContinuousBackup {
  /**
  * If true, tries to disable EventBridge notification for the given bucket, when continuous backup no longer conducts. It may override the existing bucket notification configuration in the customer's account. This takes effect only when event_bridge_enabled is set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#disable_eventbridge_notification Policy#disable_eventbridge_notification}
  */
  readonly disableEventbridgeNotification?: boolean | cdktf.IResolvable;
}

export function policyOperationsAdvancedSettingsProtectionGroupContinuousBackupToTerraform(struct?: PolicyOperationsAdvancedSettingsProtectionGroupContinuousBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_eventbridge_notification: cdktf.booleanToTerraform(struct!.disableEventbridgeNotification),
  }
}


export function policyOperationsAdvancedSettingsProtectionGroupContinuousBackupToHclTerraform(struct?: PolicyOperationsAdvancedSettingsProtectionGroupContinuousBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_eventbridge_notification: {
      value: cdktf.booleanToHclTerraform(struct!.disableEventbridgeNotification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyOperationsAdvancedSettingsProtectionGroupContinuousBackupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyOperationsAdvancedSettingsProtectionGroupContinuousBackup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableEventbridgeNotification !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableEventbridgeNotification = this._disableEventbridgeNotification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyOperationsAdvancedSettingsProtectionGroupContinuousBackup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableEventbridgeNotification = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableEventbridgeNotification = value.disableEventbridgeNotification;
    }
  }

  // disable_eventbridge_notification - computed: false, optional: true, required: false
  private _disableEventbridgeNotification?: boolean | cdktf.IResolvable; 
  public get disableEventbridgeNotification() {
    return this.getBooleanAttribute('disable_eventbridge_notification');
  }
  public set disableEventbridgeNotification(value: boolean | cdktf.IResolvable) {
    this._disableEventbridgeNotification = value;
  }
  public resetDisableEventbridgeNotification() {
    this._disableEventbridgeNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableEventbridgeNotificationInput() {
    return this._disableEventbridgeNotification;
  }
}

export class PolicyOperationsAdvancedSettingsProtectionGroupContinuousBackupList extends cdktf.ComplexList {
  public internalValue? : PolicyOperationsAdvancedSettingsProtectionGroupContinuousBackup[] | cdktf.IResolvable

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
  public get(index: number): PolicyOperationsAdvancedSettingsProtectionGroupContinuousBackupOutputReference {
    return new PolicyOperationsAdvancedSettingsProtectionGroupContinuousBackupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyOperationsAdvancedSettings {
  /**
  * aws_ebs_volume_backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#aws_ebs_volume_backup Policy#aws_ebs_volume_backup}
  */
  readonly awsEbsVolumeBackup?: PolicyOperationsAdvancedSettingsAwsEbsVolumeBackup[] | cdktf.IResolvable;
  /**
  * aws_ec2_instance_backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#aws_ec2_instance_backup Policy#aws_ec2_instance_backup}
  */
  readonly awsEc2InstanceBackup?: PolicyOperationsAdvancedSettingsAwsEc2InstanceBackup[] | cdktf.IResolvable;
  /**
  * aws_iceberg_table_backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#aws_iceberg_table_backup Policy#aws_iceberg_table_backup}
  */
  readonly awsIcebergTableBackup?: PolicyOperationsAdvancedSettingsAwsIcebergTableBackup[] | cdktf.IResolvable;
  /**
  * aws_rds_config_sync block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#aws_rds_config_sync Policy#aws_rds_config_sync}
  */
  readonly awsRdsConfigSync?: PolicyOperationsAdvancedSettingsAwsRdsConfigSync[] | cdktf.IResolvable;
  /**
  * aws_rds_resource_granular_backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#aws_rds_resource_granular_backup Policy#aws_rds_resource_granular_backup}
  */
  readonly awsRdsResourceGranularBackup?: PolicyOperationsAdvancedSettingsAwsRdsResourceGranularBackup[] | cdktf.IResolvable;
  /**
  * ec2_mssql_database_backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#ec2_mssql_database_backup Policy#ec2_mssql_database_backup}
  */
  readonly ec2MssqlDatabaseBackup?: PolicyOperationsAdvancedSettingsEc2MssqlDatabaseBackup[] | cdktf.IResolvable;
  /**
  * ec2_mssql_log_backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#ec2_mssql_log_backup Policy#ec2_mssql_log_backup}
  */
  readonly ec2MssqlLogBackup?: PolicyOperationsAdvancedSettingsEc2MssqlLogBackup[] | cdktf.IResolvable;
  /**
  * mssql_database_backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#mssql_database_backup Policy#mssql_database_backup}
  */
  readonly mssqlDatabaseBackup?: PolicyOperationsAdvancedSettingsMssqlDatabaseBackup[] | cdktf.IResolvable;
  /**
  * mssql_log_backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#mssql_log_backup Policy#mssql_log_backup}
  */
  readonly mssqlLogBackup?: PolicyOperationsAdvancedSettingsMssqlLogBackup[] | cdktf.IResolvable;
  /**
  * protection_group_backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#protection_group_backup Policy#protection_group_backup}
  */
  readonly protectionGroupBackup?: PolicyOperationsAdvancedSettingsProtectionGroupBackup[] | cdktf.IResolvable;
  /**
  * protection_group_continuous_backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#protection_group_continuous_backup Policy#protection_group_continuous_backup}
  */
  readonly protectionGroupContinuousBackup?: PolicyOperationsAdvancedSettingsProtectionGroupContinuousBackup[] | cdktf.IResolvable;
}

export function policyOperationsAdvancedSettingsToTerraform(struct?: PolicyOperationsAdvancedSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_ebs_volume_backup: cdktf.listMapper(policyOperationsAdvancedSettingsAwsEbsVolumeBackupToTerraform, true)(struct!.awsEbsVolumeBackup),
    aws_ec2_instance_backup: cdktf.listMapper(policyOperationsAdvancedSettingsAwsEc2InstanceBackupToTerraform, true)(struct!.awsEc2InstanceBackup),
    aws_iceberg_table_backup: cdktf.listMapper(policyOperationsAdvancedSettingsAwsIcebergTableBackupToTerraform, true)(struct!.awsIcebergTableBackup),
    aws_rds_config_sync: cdktf.listMapper(policyOperationsAdvancedSettingsAwsRdsConfigSyncToTerraform, true)(struct!.awsRdsConfigSync),
    aws_rds_resource_granular_backup: cdktf.listMapper(policyOperationsAdvancedSettingsAwsRdsResourceGranularBackupToTerraform, true)(struct!.awsRdsResourceGranularBackup),
    ec2_mssql_database_backup: cdktf.listMapper(policyOperationsAdvancedSettingsEc2MssqlDatabaseBackupToTerraform, true)(struct!.ec2MssqlDatabaseBackup),
    ec2_mssql_log_backup: cdktf.listMapper(policyOperationsAdvancedSettingsEc2MssqlLogBackupToTerraform, true)(struct!.ec2MssqlLogBackup),
    mssql_database_backup: cdktf.listMapper(policyOperationsAdvancedSettingsMssqlDatabaseBackupToTerraform, true)(struct!.mssqlDatabaseBackup),
    mssql_log_backup: cdktf.listMapper(policyOperationsAdvancedSettingsMssqlLogBackupToTerraform, true)(struct!.mssqlLogBackup),
    protection_group_backup: cdktf.listMapper(policyOperationsAdvancedSettingsProtectionGroupBackupToTerraform, true)(struct!.protectionGroupBackup),
    protection_group_continuous_backup: cdktf.listMapper(policyOperationsAdvancedSettingsProtectionGroupContinuousBackupToTerraform, true)(struct!.protectionGroupContinuousBackup),
  }
}


export function policyOperationsAdvancedSettingsToHclTerraform(struct?: PolicyOperationsAdvancedSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_ebs_volume_backup: {
      value: cdktf.listMapperHcl(policyOperationsAdvancedSettingsAwsEbsVolumeBackupToHclTerraform, true)(struct!.awsEbsVolumeBackup),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyOperationsAdvancedSettingsAwsEbsVolumeBackupList",
    },
    aws_ec2_instance_backup: {
      value: cdktf.listMapperHcl(policyOperationsAdvancedSettingsAwsEc2InstanceBackupToHclTerraform, true)(struct!.awsEc2InstanceBackup),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyOperationsAdvancedSettingsAwsEc2InstanceBackupList",
    },
    aws_iceberg_table_backup: {
      value: cdktf.listMapperHcl(policyOperationsAdvancedSettingsAwsIcebergTableBackupToHclTerraform, true)(struct!.awsIcebergTableBackup),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyOperationsAdvancedSettingsAwsIcebergTableBackupList",
    },
    aws_rds_config_sync: {
      value: cdktf.listMapperHcl(policyOperationsAdvancedSettingsAwsRdsConfigSyncToHclTerraform, true)(struct!.awsRdsConfigSync),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyOperationsAdvancedSettingsAwsRdsConfigSyncList",
    },
    aws_rds_resource_granular_backup: {
      value: cdktf.listMapperHcl(policyOperationsAdvancedSettingsAwsRdsResourceGranularBackupToHclTerraform, true)(struct!.awsRdsResourceGranularBackup),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyOperationsAdvancedSettingsAwsRdsResourceGranularBackupList",
    },
    ec2_mssql_database_backup: {
      value: cdktf.listMapperHcl(policyOperationsAdvancedSettingsEc2MssqlDatabaseBackupToHclTerraform, true)(struct!.ec2MssqlDatabaseBackup),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyOperationsAdvancedSettingsEc2MssqlDatabaseBackupList",
    },
    ec2_mssql_log_backup: {
      value: cdktf.listMapperHcl(policyOperationsAdvancedSettingsEc2MssqlLogBackupToHclTerraform, true)(struct!.ec2MssqlLogBackup),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyOperationsAdvancedSettingsEc2MssqlLogBackupList",
    },
    mssql_database_backup: {
      value: cdktf.listMapperHcl(policyOperationsAdvancedSettingsMssqlDatabaseBackupToHclTerraform, true)(struct!.mssqlDatabaseBackup),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyOperationsAdvancedSettingsMssqlDatabaseBackupList",
    },
    mssql_log_backup: {
      value: cdktf.listMapperHcl(policyOperationsAdvancedSettingsMssqlLogBackupToHclTerraform, true)(struct!.mssqlLogBackup),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyOperationsAdvancedSettingsMssqlLogBackupList",
    },
    protection_group_backup: {
      value: cdktf.listMapperHcl(policyOperationsAdvancedSettingsProtectionGroupBackupToHclTerraform, true)(struct!.protectionGroupBackup),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyOperationsAdvancedSettingsProtectionGroupBackupList",
    },
    protection_group_continuous_backup: {
      value: cdktf.listMapperHcl(policyOperationsAdvancedSettingsProtectionGroupContinuousBackupToHclTerraform, true)(struct!.protectionGroupContinuousBackup),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyOperationsAdvancedSettingsProtectionGroupContinuousBackupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyOperationsAdvancedSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyOperationsAdvancedSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsEbsVolumeBackup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsEbsVolumeBackup = this._awsEbsVolumeBackup?.internalValue;
    }
    if (this._awsEc2InstanceBackup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsEc2InstanceBackup = this._awsEc2InstanceBackup?.internalValue;
    }
    if (this._awsIcebergTableBackup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsIcebergTableBackup = this._awsIcebergTableBackup?.internalValue;
    }
    if (this._awsRdsConfigSync?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRdsConfigSync = this._awsRdsConfigSync?.internalValue;
    }
    if (this._awsRdsResourceGranularBackup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRdsResourceGranularBackup = this._awsRdsResourceGranularBackup?.internalValue;
    }
    if (this._ec2MssqlDatabaseBackup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2MssqlDatabaseBackup = this._ec2MssqlDatabaseBackup?.internalValue;
    }
    if (this._ec2MssqlLogBackup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2MssqlLogBackup = this._ec2MssqlLogBackup?.internalValue;
    }
    if (this._mssqlDatabaseBackup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssqlDatabaseBackup = this._mssqlDatabaseBackup?.internalValue;
    }
    if (this._mssqlLogBackup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssqlLogBackup = this._mssqlLogBackup?.internalValue;
    }
    if (this._protectionGroupBackup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionGroupBackup = this._protectionGroupBackup?.internalValue;
    }
    if (this._protectionGroupContinuousBackup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionGroupContinuousBackup = this._protectionGroupContinuousBackup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyOperationsAdvancedSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsEbsVolumeBackup.internalValue = undefined;
      this._awsEc2InstanceBackup.internalValue = undefined;
      this._awsIcebergTableBackup.internalValue = undefined;
      this._awsRdsConfigSync.internalValue = undefined;
      this._awsRdsResourceGranularBackup.internalValue = undefined;
      this._ec2MssqlDatabaseBackup.internalValue = undefined;
      this._ec2MssqlLogBackup.internalValue = undefined;
      this._mssqlDatabaseBackup.internalValue = undefined;
      this._mssqlLogBackup.internalValue = undefined;
      this._protectionGroupBackup.internalValue = undefined;
      this._protectionGroupContinuousBackup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsEbsVolumeBackup.internalValue = value.awsEbsVolumeBackup;
      this._awsEc2InstanceBackup.internalValue = value.awsEc2InstanceBackup;
      this._awsIcebergTableBackup.internalValue = value.awsIcebergTableBackup;
      this._awsRdsConfigSync.internalValue = value.awsRdsConfigSync;
      this._awsRdsResourceGranularBackup.internalValue = value.awsRdsResourceGranularBackup;
      this._ec2MssqlDatabaseBackup.internalValue = value.ec2MssqlDatabaseBackup;
      this._ec2MssqlLogBackup.internalValue = value.ec2MssqlLogBackup;
      this._mssqlDatabaseBackup.internalValue = value.mssqlDatabaseBackup;
      this._mssqlLogBackup.internalValue = value.mssqlLogBackup;
      this._protectionGroupBackup.internalValue = value.protectionGroupBackup;
      this._protectionGroupContinuousBackup.internalValue = value.protectionGroupContinuousBackup;
    }
  }

  // aws_ebs_volume_backup - computed: false, optional: true, required: false
  private _awsEbsVolumeBackup = new PolicyOperationsAdvancedSettingsAwsEbsVolumeBackupList(this, "aws_ebs_volume_backup", true);
  public get awsEbsVolumeBackup() {
    return this._awsEbsVolumeBackup;
  }
  public putAwsEbsVolumeBackup(value: PolicyOperationsAdvancedSettingsAwsEbsVolumeBackup[] | cdktf.IResolvable) {
    this._awsEbsVolumeBackup.internalValue = value;
  }
  public resetAwsEbsVolumeBackup() {
    this._awsEbsVolumeBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEbsVolumeBackupInput() {
    return this._awsEbsVolumeBackup.internalValue;
  }

  // aws_ec2_instance_backup - computed: false, optional: true, required: false
  private _awsEc2InstanceBackup = new PolicyOperationsAdvancedSettingsAwsEc2InstanceBackupList(this, "aws_ec2_instance_backup", true);
  public get awsEc2InstanceBackup() {
    return this._awsEc2InstanceBackup;
  }
  public putAwsEc2InstanceBackup(value: PolicyOperationsAdvancedSettingsAwsEc2InstanceBackup[] | cdktf.IResolvable) {
    this._awsEc2InstanceBackup.internalValue = value;
  }
  public resetAwsEc2InstanceBackup() {
    this._awsEc2InstanceBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEc2InstanceBackupInput() {
    return this._awsEc2InstanceBackup.internalValue;
  }

  // aws_iceberg_table_backup - computed: false, optional: true, required: false
  private _awsIcebergTableBackup = new PolicyOperationsAdvancedSettingsAwsIcebergTableBackupList(this, "aws_iceberg_table_backup", true);
  public get awsIcebergTableBackup() {
    return this._awsIcebergTableBackup;
  }
  public putAwsIcebergTableBackup(value: PolicyOperationsAdvancedSettingsAwsIcebergTableBackup[] | cdktf.IResolvable) {
    this._awsIcebergTableBackup.internalValue = value;
  }
  public resetAwsIcebergTableBackup() {
    this._awsIcebergTableBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIcebergTableBackupInput() {
    return this._awsIcebergTableBackup.internalValue;
  }

  // aws_rds_config_sync - computed: false, optional: true, required: false
  private _awsRdsConfigSync = new PolicyOperationsAdvancedSettingsAwsRdsConfigSyncList(this, "aws_rds_config_sync", true);
  public get awsRdsConfigSync() {
    return this._awsRdsConfigSync;
  }
  public putAwsRdsConfigSync(value: PolicyOperationsAdvancedSettingsAwsRdsConfigSync[] | cdktf.IResolvable) {
    this._awsRdsConfigSync.internalValue = value;
  }
  public resetAwsRdsConfigSync() {
    this._awsRdsConfigSync.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRdsConfigSyncInput() {
    return this._awsRdsConfigSync.internalValue;
  }

  // aws_rds_resource_granular_backup - computed: false, optional: true, required: false
  private _awsRdsResourceGranularBackup = new PolicyOperationsAdvancedSettingsAwsRdsResourceGranularBackupList(this, "aws_rds_resource_granular_backup", true);
  public get awsRdsResourceGranularBackup() {
    return this._awsRdsResourceGranularBackup;
  }
  public putAwsRdsResourceGranularBackup(value: PolicyOperationsAdvancedSettingsAwsRdsResourceGranularBackup[] | cdktf.IResolvable) {
    this._awsRdsResourceGranularBackup.internalValue = value;
  }
  public resetAwsRdsResourceGranularBackup() {
    this._awsRdsResourceGranularBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRdsResourceGranularBackupInput() {
    return this._awsRdsResourceGranularBackup.internalValue;
  }

  // ec2_mssql_database_backup - computed: false, optional: true, required: false
  private _ec2MssqlDatabaseBackup = new PolicyOperationsAdvancedSettingsEc2MssqlDatabaseBackupList(this, "ec2_mssql_database_backup", true);
  public get ec2MssqlDatabaseBackup() {
    return this._ec2MssqlDatabaseBackup;
  }
  public putEc2MssqlDatabaseBackup(value: PolicyOperationsAdvancedSettingsEc2MssqlDatabaseBackup[] | cdktf.IResolvable) {
    this._ec2MssqlDatabaseBackup.internalValue = value;
  }
  public resetEc2MssqlDatabaseBackup() {
    this._ec2MssqlDatabaseBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2MssqlDatabaseBackupInput() {
    return this._ec2MssqlDatabaseBackup.internalValue;
  }

  // ec2_mssql_log_backup - computed: false, optional: true, required: false
  private _ec2MssqlLogBackup = new PolicyOperationsAdvancedSettingsEc2MssqlLogBackupList(this, "ec2_mssql_log_backup", true);
  public get ec2MssqlLogBackup() {
    return this._ec2MssqlLogBackup;
  }
  public putEc2MssqlLogBackup(value: PolicyOperationsAdvancedSettingsEc2MssqlLogBackup[] | cdktf.IResolvable) {
    this._ec2MssqlLogBackup.internalValue = value;
  }
  public resetEc2MssqlLogBackup() {
    this._ec2MssqlLogBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2MssqlLogBackupInput() {
    return this._ec2MssqlLogBackup.internalValue;
  }

  // mssql_database_backup - computed: false, optional: true, required: false
  private _mssqlDatabaseBackup = new PolicyOperationsAdvancedSettingsMssqlDatabaseBackupList(this, "mssql_database_backup", true);
  public get mssqlDatabaseBackup() {
    return this._mssqlDatabaseBackup;
  }
  public putMssqlDatabaseBackup(value: PolicyOperationsAdvancedSettingsMssqlDatabaseBackup[] | cdktf.IResolvable) {
    this._mssqlDatabaseBackup.internalValue = value;
  }
  public resetMssqlDatabaseBackup() {
    this._mssqlDatabaseBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssqlDatabaseBackupInput() {
    return this._mssqlDatabaseBackup.internalValue;
  }

  // mssql_log_backup - computed: false, optional: true, required: false
  private _mssqlLogBackup = new PolicyOperationsAdvancedSettingsMssqlLogBackupList(this, "mssql_log_backup", true);
  public get mssqlLogBackup() {
    return this._mssqlLogBackup;
  }
  public putMssqlLogBackup(value: PolicyOperationsAdvancedSettingsMssqlLogBackup[] | cdktf.IResolvable) {
    this._mssqlLogBackup.internalValue = value;
  }
  public resetMssqlLogBackup() {
    this._mssqlLogBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssqlLogBackupInput() {
    return this._mssqlLogBackup.internalValue;
  }

  // protection_group_backup - computed: false, optional: true, required: false
  private _protectionGroupBackup = new PolicyOperationsAdvancedSettingsProtectionGroupBackupList(this, "protection_group_backup", true);
  public get protectionGroupBackup() {
    return this._protectionGroupBackup;
  }
  public putProtectionGroupBackup(value: PolicyOperationsAdvancedSettingsProtectionGroupBackup[] | cdktf.IResolvable) {
    this._protectionGroupBackup.internalValue = value;
  }
  public resetProtectionGroupBackup() {
    this._protectionGroupBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionGroupBackupInput() {
    return this._protectionGroupBackup.internalValue;
  }

  // protection_group_continuous_backup - computed: false, optional: true, required: false
  private _protectionGroupContinuousBackup = new PolicyOperationsAdvancedSettingsProtectionGroupContinuousBackupList(this, "protection_group_continuous_backup", true);
  public get protectionGroupContinuousBackup() {
    return this._protectionGroupContinuousBackup;
  }
  public putProtectionGroupContinuousBackup(value: PolicyOperationsAdvancedSettingsProtectionGroupContinuousBackup[] | cdktf.IResolvable) {
    this._protectionGroupContinuousBackup.internalValue = value;
  }
  public resetProtectionGroupContinuousBackup() {
    this._protectionGroupContinuousBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionGroupContinuousBackupInput() {
    return this._protectionGroupContinuousBackup.internalValue;
  }
}

export class PolicyOperationsAdvancedSettingsList extends cdktf.ComplexList {
  public internalValue? : PolicyOperationsAdvancedSettings[] | cdktf.IResolvable

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
  public get(index: number): PolicyOperationsAdvancedSettingsOutputReference {
    return new PolicyOperationsAdvancedSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyOperationsBackupWindowTz {
  /**
  * The time when the backup window closes. Specify the end time in the format `hh:mm`, where `hh` represents the hour of the day and `mm` represents the minute of the day based on the 24 hour clock. Leave empty if you do not want to specify an end time. If the backup window closes while a backup is in progress, the entire backup process is aborted. The next backup will be performed when the  backup window re-opens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#end_time Policy#end_time}
  */
  readonly endTime?: string;
  /**
  * The time when the backup window opens. Specify the start time in the format `hh:mm`, where `hh` represents the hour of the day and `mm` represents the minute of the day based on the 24 hour clock.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#start_time Policy#start_time}
  */
  readonly startTime?: string;
}

export function policyOperationsBackupWindowTzToTerraform(struct?: PolicyOperationsBackupWindowTz | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function policyOperationsBackupWindowTzToHclTerraform(struct?: PolicyOperationsBackupWindowTz | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class PolicyOperationsBackupWindowTzOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyOperationsBackupWindowTz | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyOperationsBackupWindowTz | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class PolicyOperationsBackupWindowTzList extends cdktf.ComplexList {
  public internalValue? : PolicyOperationsBackupWindowTz[] | cdktf.IResolvable

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
  public get(index: number): PolicyOperationsBackupWindowTzOutputReference {
    return new PolicyOperationsBackupWindowTzOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyOperationsSlasRetentionDuration {
  /**
  * The measurement unit of the SLA parameter. Values include days, weeks, months and years.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#unit Policy#unit}
  */
  readonly unit: string;
  /**
  * The measurement value of the SLA parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#value Policy#value}
  */
  readonly value: number;
}

export function policyOperationsSlasRetentionDurationToTerraform(struct?: PolicyOperationsSlasRetentionDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function policyOperationsSlasRetentionDurationToHclTerraform(struct?: PolicyOperationsSlasRetentionDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyOperationsSlasRetentionDurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyOperationsSlasRetentionDuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyOperationsSlasRetentionDuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PolicyOperationsSlasRetentionDurationList extends cdktf.ComplexList {
  public internalValue? : PolicyOperationsSlasRetentionDuration[] | cdktf.IResolvable

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
  public get(index: number): PolicyOperationsSlasRetentionDurationOutputReference {
    return new PolicyOperationsSlasRetentionDurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyOperationsSlasRpoFrequency {
  /**
  * The offset values of the SLA parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#offsets Policy#offsets}
  */
  readonly offsets?: number[];
  /**
  * The measurement unit of the SLA parameter. Values include minutes, hours, days, weeks, months and years.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#unit Policy#unit}
  */
  readonly unit: string;
  /**
  * The measurement value of the SLA parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#value Policy#value}
  */
  readonly value: number;
}

export function policyOperationsSlasRpoFrequencyToTerraform(struct?: PolicyOperationsSlasRpoFrequency | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offsets: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.offsets),
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function policyOperationsSlasRpoFrequencyToHclTerraform(struct?: PolicyOperationsSlasRpoFrequency | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    offsets: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.offsets),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyOperationsSlasRpoFrequencyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyOperationsSlasRpoFrequency | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offsets !== undefined) {
      hasAnyValues = true;
      internalValueResult.offsets = this._offsets;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyOperationsSlasRpoFrequency | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._offsets = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._offsets = value.offsets;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // offsets - computed: false, optional: true, required: false
  private _offsets?: number[]; 
  public get offsets() {
    return this.getNumberListAttribute('offsets');
  }
  public set offsets(value: number[]) {
    this._offsets = value;
  }
  public resetOffsets() {
    this._offsets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetsInput() {
    return this._offsets;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PolicyOperationsSlasRpoFrequencyList extends cdktf.ComplexList {
  public internalValue? : PolicyOperationsSlasRpoFrequency[] | cdktf.IResolvable

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
  public get(index: number): PolicyOperationsSlasRpoFrequencyOutputReference {
    return new PolicyOperationsSlasRpoFrequencyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyOperationsSlas {
  /**
  * retention_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#retention_duration Policy#retention_duration}
  */
  readonly retentionDuration?: PolicyOperationsSlasRetentionDuration[] | cdktf.IResolvable;
  /**
  * rpo_frequency block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#rpo_frequency Policy#rpo_frequency}
  */
  readonly rpoFrequency?: PolicyOperationsSlasRpoFrequency[] | cdktf.IResolvable;
}

export function policyOperationsSlasToTerraform(struct?: PolicyOperationsSlas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention_duration: cdktf.listMapper(policyOperationsSlasRetentionDurationToTerraform, true)(struct!.retentionDuration),
    rpo_frequency: cdktf.listMapper(policyOperationsSlasRpoFrequencyToTerraform, true)(struct!.rpoFrequency),
  }
}


export function policyOperationsSlasToHclTerraform(struct?: PolicyOperationsSlas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retention_duration: {
      value: cdktf.listMapperHcl(policyOperationsSlasRetentionDurationToHclTerraform, true)(struct!.retentionDuration),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyOperationsSlasRetentionDurationList",
    },
    rpo_frequency: {
      value: cdktf.listMapperHcl(policyOperationsSlasRpoFrequencyToHclTerraform, true)(struct!.rpoFrequency),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyOperationsSlasRpoFrequencyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyOperationsSlasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyOperationsSlas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retentionDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDuration = this._retentionDuration?.internalValue;
    }
    if (this._rpoFrequency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpoFrequency = this._rpoFrequency?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyOperationsSlas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._retentionDuration.internalValue = undefined;
      this._rpoFrequency.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._retentionDuration.internalValue = value.retentionDuration;
      this._rpoFrequency.internalValue = value.rpoFrequency;
    }
  }

  // retention_duration - computed: false, optional: true, required: false
  private _retentionDuration = new PolicyOperationsSlasRetentionDurationList(this, "retention_duration", true);
  public get retentionDuration() {
    return this._retentionDuration;
  }
  public putRetentionDuration(value: PolicyOperationsSlasRetentionDuration[] | cdktf.IResolvable) {
    this._retentionDuration.internalValue = value;
  }
  public resetRetentionDuration() {
    this._retentionDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDurationInput() {
    return this._retentionDuration.internalValue;
  }

  // rpo_frequency - computed: false, optional: true, required: false
  private _rpoFrequency = new PolicyOperationsSlasRpoFrequencyList(this, "rpo_frequency", true);
  public get rpoFrequency() {
    return this._rpoFrequency;
  }
  public putRpoFrequency(value: PolicyOperationsSlasRpoFrequency[] | cdktf.IResolvable) {
    this._rpoFrequency.internalValue = value;
  }
  public resetRpoFrequency() {
    this._rpoFrequency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoFrequencyInput() {
    return this._rpoFrequency.internalValue;
  }
}

export class PolicyOperationsSlasList extends cdktf.ComplexList {
  public internalValue? : PolicyOperationsSlas[] | cdktf.IResolvable

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
  public get(index: number): PolicyOperationsSlasOutputReference {
    return new PolicyOperationsSlasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyOperations {
  /**
  * Determines whether the policy should take action now or during the specified backup window. Valid values are: `immediate` and `window`. `immediate` starts the backup process immediately while `window` starts the backup in the specified window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#action_setting Policy#action_setting}
  */
  readonly actionSetting: string;
  /**
  * The region in which this backup is stored. This might be used for cross-region backup. Possible values are AWS region string, for example: `us-east-1`, `us-west-2`, .... If no value is provided, it defaults to in-region (the asset's source region).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#backup_aws_region Policy#backup_aws_region}
  */
  readonly backupAwsRegion?: string;
  /**
  * The time zone for the policy, in IANA format. For example: `America/Los_Angeles`, `America/New_York`, `Etc/UTC`, etc. For more information, see the Time Zone Database (https://www.iana.org/time-zones) on the IANA website.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#timezone Policy#timezone}
  */
  readonly timezone?: string;
  /**
  * The type of operation to be performed. Depending on the type selected, `advanced_settings` may also be required. See the [API Documentation for List policies](https://api.commvault.com/docs/latest/api/cv/ClumioAPIs/list-policy-definitions/) for more information about the supported types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#type Policy#type}
  */
  readonly type: string;
  /**
  * advanced_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#advanced_settings Policy#advanced_settings}
  */
  readonly advancedSettings?: PolicyOperationsAdvancedSettings[] | cdktf.IResolvable;
  /**
  * backup_window_tz block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#backup_window_tz Policy#backup_window_tz}
  */
  readonly backupWindowTz?: PolicyOperationsBackupWindowTz[] | cdktf.IResolvable;
  /**
  * slas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#slas Policy#slas}
  */
  readonly slas?: PolicyOperationsSlas[] | cdktf.IResolvable;
}

export function policyOperationsToTerraform(struct?: PolicyOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_setting: cdktf.stringToTerraform(struct!.actionSetting),
    backup_aws_region: cdktf.stringToTerraform(struct!.backupAwsRegion),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    type: cdktf.stringToTerraform(struct!.type),
    advanced_settings: cdktf.listMapper(policyOperationsAdvancedSettingsToTerraform, true)(struct!.advancedSettings),
    backup_window_tz: cdktf.listMapper(policyOperationsBackupWindowTzToTerraform, true)(struct!.backupWindowTz),
    slas: cdktf.listMapper(policyOperationsSlasToTerraform, true)(struct!.slas),
  }
}


export function policyOperationsToHclTerraform(struct?: PolicyOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_setting: {
      value: cdktf.stringToHclTerraform(struct!.actionSetting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_aws_region: {
      value: cdktf.stringToHclTerraform(struct!.backupAwsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
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
    advanced_settings: {
      value: cdktf.listMapperHcl(policyOperationsAdvancedSettingsToHclTerraform, true)(struct!.advancedSettings),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyOperationsAdvancedSettingsList",
    },
    backup_window_tz: {
      value: cdktf.listMapperHcl(policyOperationsBackupWindowTzToHclTerraform, true)(struct!.backupWindowTz),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyOperationsBackupWindowTzList",
    },
    slas: {
      value: cdktf.listMapperHcl(policyOperationsSlasToHclTerraform, true)(struct!.slas),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyOperationsSlasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionSetting = this._actionSetting;
    }
    if (this._backupAwsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupAwsRegion = this._backupAwsRegion;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._advancedSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedSettings = this._advancedSettings?.internalValue;
    }
    if (this._backupWindowTz?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupWindowTz = this._backupWindowTz?.internalValue;
    }
    if (this._slas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slas = this._slas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionSetting = undefined;
      this._backupAwsRegion = undefined;
      this._timezone = undefined;
      this._type = undefined;
      this._advancedSettings.internalValue = undefined;
      this._backupWindowTz.internalValue = undefined;
      this._slas.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionSetting = value.actionSetting;
      this._backupAwsRegion = value.backupAwsRegion;
      this._timezone = value.timezone;
      this._type = value.type;
      this._advancedSettings.internalValue = value.advancedSettings;
      this._backupWindowTz.internalValue = value.backupWindowTz;
      this._slas.internalValue = value.slas;
    }
  }

  // action_setting - computed: false, optional: false, required: true
  private _actionSetting?: string; 
  public get actionSetting() {
    return this.getStringAttribute('action_setting');
  }
  public set actionSetting(value: string) {
    this._actionSetting = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSettingInput() {
    return this._actionSetting;
  }

  // backup_aws_region - computed: false, optional: true, required: false
  private _backupAwsRegion?: string; 
  public get backupAwsRegion() {
    return this.getStringAttribute('backup_aws_region');
  }
  public set backupAwsRegion(value: string) {
    this._backupAwsRegion = value;
  }
  public resetBackupAwsRegion() {
    this._backupAwsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupAwsRegionInput() {
    return this._backupAwsRegion;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // advanced_settings - computed: false, optional: true, required: false
  private _advancedSettings = new PolicyOperationsAdvancedSettingsList(this, "advanced_settings", true);
  public get advancedSettings() {
    return this._advancedSettings;
  }
  public putAdvancedSettings(value: PolicyOperationsAdvancedSettings[] | cdktf.IResolvable) {
    this._advancedSettings.internalValue = value;
  }
  public resetAdvancedSettings() {
    this._advancedSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSettingsInput() {
    return this._advancedSettings.internalValue;
  }

  // backup_window_tz - computed: false, optional: true, required: false
  private _backupWindowTz = new PolicyOperationsBackupWindowTzList(this, "backup_window_tz", true);
  public get backupWindowTz() {
    return this._backupWindowTz;
  }
  public putBackupWindowTz(value: PolicyOperationsBackupWindowTz[] | cdktf.IResolvable) {
    this._backupWindowTz.internalValue = value;
  }
  public resetBackupWindowTz() {
    this._backupWindowTz.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupWindowTzInput() {
    return this._backupWindowTz.internalValue;
  }

  // slas - computed: false, optional: true, required: false
  private _slas = new PolicyOperationsSlasList(this, "slas", true);
  public get slas() {
    return this._slas;
  }
  public putSlas(value: PolicyOperationsSlas[] | cdktf.IResolvable) {
    this._slas.internalValue = value;
  }
  public resetSlas() {
    this._slas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slasInput() {
    return this._slas.internalValue;
  }
}

export class PolicyOperationsList extends cdktf.ComplexList {
  public internalValue? : PolicyOperations[] | cdktf.IResolvable

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
  public get(index: number): PolicyOperationsOutputReference {
    return new PolicyOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy clumio_policy}
*/
export class Policy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clumio_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Policy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Policy to import
  * @param importFromId The id of the existing Policy that should be imported. Refer to the {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Policy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clumio_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/resources/policy clumio_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'clumio_policy',
      terraformGeneratorMetadata: {
        providerName: 'clumio',
        providerVersion: '0.17.0',
        providerVersionConstraint: '0.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activationStatus = config.activationStatus;
    this._name = config.name;
    this._timezone = config.timezone;
    this._operations.internalValue = config.operations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_status - computed: true, optional: true, required: false
  private _activationStatus?: string; 
  public get activationStatus() {
    return this.getStringAttribute('activation_status');
  }
  public set activationStatus(value: string) {
    this._activationStatus = value;
  }
  public resetActivationStatus() {
    this._activationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationStatusInput() {
    return this._activationStatus;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lock_status - computed: true, optional: false, required: false
  public get lockStatus() {
    return this.getStringAttribute('lock_status');
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

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // operations - computed: false, optional: true, required: false
  private _operations = new PolicyOperationsList(this, "operations", true);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: PolicyOperations[] | cdktf.IResolvable) {
    this._operations.internalValue = value;
  }
  public resetOperations() {
    this._operations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activation_status: cdktf.stringToTerraform(this._activationStatus),
      name: cdktf.stringToTerraform(this._name),
      timezone: cdktf.stringToTerraform(this._timezone),
      operations: cdktf.listMapper(policyOperationsToTerraform, true)(this._operations.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activation_status: {
        value: cdktf.stringToHclTerraform(this._activationStatus),
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
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operations: {
        value: cdktf.listMapperHcl(policyOperationsToHclTerraform, true)(this._operations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyOperationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
