// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HbrPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_policy#id HbrPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_policy#policy_description HbrPolicy#policy_description}
  */
  readonly policyDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_policy#policy_name HbrPolicy#policy_name}
  */
  readonly policyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_policy#policy_type HbrPolicy#policy_type}
  */
  readonly policyType?: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_policy#rules HbrPolicy#rules}
  */
  readonly rules?: HbrPolicyRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_policy#timeouts HbrPolicy#timeouts}
  */
  readonly timeouts?: HbrPolicyTimeouts;
}
export interface HbrPolicyRulesRetentionRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_policy#advanced_retention_type HbrPolicy#advanced_retention_type}
  */
  readonly advancedRetentionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_policy#retention HbrPolicy#retention}
  */
  readonly retention?: number;
}

export function hbrPolicyRulesRetentionRulesToTerraform(struct?: HbrPolicyRulesRetentionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_retention_type: cdktf.stringToTerraform(struct!.advancedRetentionType),
    retention: cdktf.numberToTerraform(struct!.retention),
  }
}


export function hbrPolicyRulesRetentionRulesToHclTerraform(struct?: HbrPolicyRulesRetentionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_retention_type: {
      value: cdktf.stringToHclTerraform(struct!.advancedRetentionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention: {
      value: cdktf.numberToHclTerraform(struct!.retention),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HbrPolicyRulesRetentionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HbrPolicyRulesRetentionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedRetentionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedRetentionType = this._advancedRetentionType;
    }
    if (this._retention !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HbrPolicyRulesRetentionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advancedRetentionType = undefined;
      this._retention = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advancedRetentionType = value.advancedRetentionType;
      this._retention = value.retention;
    }
  }

  // advanced_retention_type - computed: false, optional: true, required: false
  private _advancedRetentionType?: string; 
  public get advancedRetentionType() {
    return this.getStringAttribute('advanced_retention_type');
  }
  public set advancedRetentionType(value: string) {
    this._advancedRetentionType = value;
  }
  public resetAdvancedRetentionType() {
    this._advancedRetentionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedRetentionTypeInput() {
    return this._advancedRetentionType;
  }

  // retention - computed: false, optional: true, required: false
  private _retention?: number; 
  public get retention() {
    return this.getNumberAttribute('retention');
  }
  public set retention(value: number) {
    this._retention = value;
  }
  public resetRetention() {
    this._retention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }
}

export class HbrPolicyRulesRetentionRulesList extends cdktf.ComplexList {
  public internalValue? : HbrPolicyRulesRetentionRules[] | cdktf.IResolvable

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
  public get(index: number): HbrPolicyRulesRetentionRulesOutputReference {
    return new HbrPolicyRulesRetentionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HbrPolicyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_policy#archive_days HbrPolicy#archive_days}
  */
  readonly archiveDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_policy#backup_type HbrPolicy#backup_type}
  */
  readonly backupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_policy#keep_latest_snapshots HbrPolicy#keep_latest_snapshots}
  */
  readonly keepLatestSnapshots?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_policy#replication_region_id HbrPolicy#replication_region_id}
  */
  readonly replicationRegionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_policy#retention HbrPolicy#retention}
  */
  readonly retention?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_policy#rule_type HbrPolicy#rule_type}
  */
  readonly ruleType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_policy#schedule HbrPolicy#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_policy#vault_id HbrPolicy#vault_id}
  */
  readonly vaultId?: string;
  /**
  * retention_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_policy#retention_rules HbrPolicy#retention_rules}
  */
  readonly retentionRules?: HbrPolicyRulesRetentionRules[] | cdktf.IResolvable;
}

export function hbrPolicyRulesToTerraform(struct?: HbrPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_days: cdktf.numberToTerraform(struct!.archiveDays),
    backup_type: cdktf.stringToTerraform(struct!.backupType),
    keep_latest_snapshots: cdktf.numberToTerraform(struct!.keepLatestSnapshots),
    replication_region_id: cdktf.stringToTerraform(struct!.replicationRegionId),
    retention: cdktf.numberToTerraform(struct!.retention),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    vault_id: cdktf.stringToTerraform(struct!.vaultId),
    retention_rules: cdktf.listMapper(hbrPolicyRulesRetentionRulesToTerraform, true)(struct!.retentionRules),
  }
}


export function hbrPolicyRulesToHclTerraform(struct?: HbrPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_days: {
      value: cdktf.numberToHclTerraform(struct!.archiveDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_type: {
      value: cdktf.stringToHclTerraform(struct!.backupType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_latest_snapshots: {
      value: cdktf.numberToHclTerraform(struct!.keepLatestSnapshots),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replication_region_id: {
      value: cdktf.stringToHclTerraform(struct!.replicationRegionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention: {
      value: cdktf.numberToHclTerraform(struct!.retention),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_id: {
      value: cdktf.stringToHclTerraform(struct!.vaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_rules: {
      value: cdktf.listMapperHcl(hbrPolicyRulesRetentionRulesToHclTerraform, true)(struct!.retentionRules),
      isBlock: true,
      type: "list",
      storageClassType: "HbrPolicyRulesRetentionRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HbrPolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HbrPolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveDays = this._archiveDays;
    }
    if (this._backupType !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupType = this._backupType;
    }
    if (this._keepLatestSnapshots !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepLatestSnapshots = this._keepLatestSnapshots;
    }
    if (this._replicationRegionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationRegionId = this._replicationRegionId;
    }
    if (this._retention !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._vaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultId = this._vaultId;
    }
    if (this._retentionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionRules = this._retentionRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HbrPolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._archiveDays = undefined;
      this._backupType = undefined;
      this._keepLatestSnapshots = undefined;
      this._replicationRegionId = undefined;
      this._retention = undefined;
      this._ruleType = undefined;
      this._schedule = undefined;
      this._vaultId = undefined;
      this._retentionRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._archiveDays = value.archiveDays;
      this._backupType = value.backupType;
      this._keepLatestSnapshots = value.keepLatestSnapshots;
      this._replicationRegionId = value.replicationRegionId;
      this._retention = value.retention;
      this._ruleType = value.ruleType;
      this._schedule = value.schedule;
      this._vaultId = value.vaultId;
      this._retentionRules.internalValue = value.retentionRules;
    }
  }

  // archive_days - computed: true, optional: true, required: false
  private _archiveDays?: number; 
  public get archiveDays() {
    return this.getNumberAttribute('archive_days');
  }
  public set archiveDays(value: number) {
    this._archiveDays = value;
  }
  public resetArchiveDays() {
    this._archiveDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveDaysInput() {
    return this._archiveDays;
  }

  // backup_type - computed: false, optional: true, required: false
  private _backupType?: string; 
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }
  public set backupType(value: string) {
    this._backupType = value;
  }
  public resetBackupType() {
    this._backupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTypeInput() {
    return this._backupType;
  }

  // keep_latest_snapshots - computed: false, optional: true, required: false
  private _keepLatestSnapshots?: number; 
  public get keepLatestSnapshots() {
    return this.getNumberAttribute('keep_latest_snapshots');
  }
  public set keepLatestSnapshots(value: number) {
    this._keepLatestSnapshots = value;
  }
  public resetKeepLatestSnapshots() {
    this._keepLatestSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepLatestSnapshotsInput() {
    return this._keepLatestSnapshots;
  }

  // replication_region_id - computed: false, optional: true, required: false
  private _replicationRegionId?: string; 
  public get replicationRegionId() {
    return this.getStringAttribute('replication_region_id');
  }
  public set replicationRegionId(value: string) {
    this._replicationRegionId = value;
  }
  public resetReplicationRegionId() {
    this._replicationRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationRegionIdInput() {
    return this._replicationRegionId;
  }

  // retention - computed: false, optional: true, required: false
  private _retention?: number; 
  public get retention() {
    return this.getNumberAttribute('retention');
  }
  public set retention(value: number) {
    this._retention = value;
  }
  public resetRetention() {
    this._retention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // rule_type - computed: false, optional: false, required: true
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // vault_id - computed: false, optional: true, required: false
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  public resetVaultId() {
    this._vaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }

  // retention_rules - computed: false, optional: true, required: false
  private _retentionRules = new HbrPolicyRulesRetentionRulesList(this, "retention_rules", false);
  public get retentionRules() {
    return this._retentionRules;
  }
  public putRetentionRules(value: HbrPolicyRulesRetentionRules[] | cdktf.IResolvable) {
    this._retentionRules.internalValue = value;
  }
  public resetRetentionRules() {
    this._retentionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionRulesInput() {
    return this._retentionRules.internalValue;
  }
}

export class HbrPolicyRulesList extends cdktf.ComplexList {
  public internalValue? : HbrPolicyRules[] | cdktf.IResolvable

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
  public get(index: number): HbrPolicyRulesOutputReference {
    return new HbrPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HbrPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_policy#create HbrPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_policy#delete HbrPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_policy#update HbrPolicy#update}
  */
  readonly update?: string;
}

export function hbrPolicyTimeoutsToTerraform(struct?: HbrPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function hbrPolicyTimeoutsToHclTerraform(struct?: HbrPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HbrPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HbrPolicyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HbrPolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_policy alicloud_hbr_policy}
*/
export class HbrPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_hbr_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HbrPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HbrPolicy to import
  * @param importFromId The id of the existing HbrPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HbrPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_hbr_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/hbr_policy alicloud_hbr_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HbrPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: HbrPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_hbr_policy',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._policyDescription = config.policyDescription;
    this._policyName = config.policyName;
    this._policyType = config.policyType;
    this._rules.internalValue = config.rules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // policy_description - computed: false, optional: true, required: false
  private _policyDescription?: string; 
  public get policyDescription() {
    return this.getStringAttribute('policy_description');
  }
  public set policyDescription(value: string) {
    this._policyDescription = value;
  }
  public resetPolicyDescription() {
    this._policyDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDescriptionInput() {
    return this._policyDescription;
  }

  // policy_name - computed: false, optional: true, required: false
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // policy_type - computed: true, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new HbrPolicyRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: HbrPolicyRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new HbrPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: HbrPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      policy_description: cdktf.stringToTerraform(this._policyDescription),
      policy_name: cdktf.stringToTerraform(this._policyName),
      policy_type: cdktf.stringToTerraform(this._policyType),
      rules: cdktf.listMapper(hbrPolicyRulesToTerraform, true)(this._rules.internalValue),
      timeouts: hbrPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_description: {
        value: cdktf.stringToHclTerraform(this._policyDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_type: {
        value: cdktf.stringToHclTerraform(this._policyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(hbrPolicyRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HbrPolicyRulesList",
      },
      timeouts: {
        value: hbrPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HbrPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
