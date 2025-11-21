// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EbsEnterpriseSnapshotPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#desc EbsEnterpriseSnapshotPolicy#desc}
  */
  readonly desc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#enterprise_snapshot_policy_name EbsEnterpriseSnapshotPolicy#enterprise_snapshot_policy_name}
  */
  readonly enterpriseSnapshotPolicyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#id EbsEnterpriseSnapshotPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#resource_group_id EbsEnterpriseSnapshotPolicy#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#status EbsEnterpriseSnapshotPolicy#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#tags EbsEnterpriseSnapshotPolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#target_type EbsEnterpriseSnapshotPolicy#target_type}
  */
  readonly targetType: string;
  /**
  * cross_region_copy_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#cross_region_copy_info EbsEnterpriseSnapshotPolicy#cross_region_copy_info}
  */
  readonly crossRegionCopyInfo?: EbsEnterpriseSnapshotPolicyCrossRegionCopyInfo;
  /**
  * retain_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#retain_rule EbsEnterpriseSnapshotPolicy#retain_rule}
  */
  readonly retainRule: EbsEnterpriseSnapshotPolicyRetainRule;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#schedule EbsEnterpriseSnapshotPolicy#schedule}
  */
  readonly schedule: EbsEnterpriseSnapshotPolicySchedule;
  /**
  * special_retain_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#special_retain_rules EbsEnterpriseSnapshotPolicy#special_retain_rules}
  */
  readonly specialRetainRules?: EbsEnterpriseSnapshotPolicySpecialRetainRules;
  /**
  * storage_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#storage_rule EbsEnterpriseSnapshotPolicy#storage_rule}
  */
  readonly storageRule?: EbsEnterpriseSnapshotPolicyStorageRule;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#timeouts EbsEnterpriseSnapshotPolicy#timeouts}
  */
  readonly timeouts?: EbsEnterpriseSnapshotPolicyTimeouts;
}
export interface EbsEnterpriseSnapshotPolicyCrossRegionCopyInfoRegions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#region_id EbsEnterpriseSnapshotPolicy#region_id}
  */
  readonly regionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#retain_days EbsEnterpriseSnapshotPolicy#retain_days}
  */
  readonly retainDays?: number;
}

export function ebsEnterpriseSnapshotPolicyCrossRegionCopyInfoRegionsToTerraform(struct?: EbsEnterpriseSnapshotPolicyCrossRegionCopyInfoRegions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region_id: cdktf.stringToTerraform(struct!.regionId),
    retain_days: cdktf.numberToTerraform(struct!.retainDays),
  }
}


export function ebsEnterpriseSnapshotPolicyCrossRegionCopyInfoRegionsToHclTerraform(struct?: EbsEnterpriseSnapshotPolicyCrossRegionCopyInfoRegions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region_id: {
      value: cdktf.stringToHclTerraform(struct!.regionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retain_days: {
      value: cdktf.numberToHclTerraform(struct!.retainDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EbsEnterpriseSnapshotPolicyCrossRegionCopyInfoRegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EbsEnterpriseSnapshotPolicyCrossRegionCopyInfoRegions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionId = this._regionId;
    }
    if (this._retainDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainDays = this._retainDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbsEnterpriseSnapshotPolicyCrossRegionCopyInfoRegions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regionId = undefined;
      this._retainDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regionId = value.regionId;
      this._retainDays = value.retainDays;
    }
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // retain_days - computed: false, optional: true, required: false
  private _retainDays?: number; 
  public get retainDays() {
    return this.getNumberAttribute('retain_days');
  }
  public set retainDays(value: number) {
    this._retainDays = value;
  }
  public resetRetainDays() {
    this._retainDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainDaysInput() {
    return this._retainDays;
  }
}

export class EbsEnterpriseSnapshotPolicyCrossRegionCopyInfoRegionsList extends cdktf.ComplexList {
  public internalValue? : EbsEnterpriseSnapshotPolicyCrossRegionCopyInfoRegions[] | cdktf.IResolvable

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
  public get(index: number): EbsEnterpriseSnapshotPolicyCrossRegionCopyInfoRegionsOutputReference {
    return new EbsEnterpriseSnapshotPolicyCrossRegionCopyInfoRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EbsEnterpriseSnapshotPolicyCrossRegionCopyInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#enabled EbsEnterpriseSnapshotPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * regions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#regions EbsEnterpriseSnapshotPolicy#regions}
  */
  readonly regions?: EbsEnterpriseSnapshotPolicyCrossRegionCopyInfoRegions[] | cdktf.IResolvable;
}

export function ebsEnterpriseSnapshotPolicyCrossRegionCopyInfoToTerraform(struct?: EbsEnterpriseSnapshotPolicyCrossRegionCopyInfoOutputReference | EbsEnterpriseSnapshotPolicyCrossRegionCopyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    regions: cdktf.listMapper(ebsEnterpriseSnapshotPolicyCrossRegionCopyInfoRegionsToTerraform, true)(struct!.regions),
  }
}


export function ebsEnterpriseSnapshotPolicyCrossRegionCopyInfoToHclTerraform(struct?: EbsEnterpriseSnapshotPolicyCrossRegionCopyInfoOutputReference | EbsEnterpriseSnapshotPolicyCrossRegionCopyInfo): any {
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
    regions: {
      value: cdktf.listMapperHcl(ebsEnterpriseSnapshotPolicyCrossRegionCopyInfoRegionsToHclTerraform, true)(struct!.regions),
      isBlock: true,
      type: "list",
      storageClassType: "EbsEnterpriseSnapshotPolicyCrossRegionCopyInfoRegionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EbsEnterpriseSnapshotPolicyCrossRegionCopyInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EbsEnterpriseSnapshotPolicyCrossRegionCopyInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._regions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbsEnterpriseSnapshotPolicyCrossRegionCopyInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._regions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._regions.internalValue = value.regions;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // regions - computed: false, optional: true, required: false
  private _regions = new EbsEnterpriseSnapshotPolicyCrossRegionCopyInfoRegionsList(this, "regions", false);
  public get regions() {
    return this._regions;
  }
  public putRegions(value: EbsEnterpriseSnapshotPolicyCrossRegionCopyInfoRegions[] | cdktf.IResolvable) {
    this._regions.internalValue = value;
  }
  public resetRegions() {
    this._regions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions.internalValue;
  }
}
export interface EbsEnterpriseSnapshotPolicyRetainRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#number EbsEnterpriseSnapshotPolicy#number}
  */
  readonly number?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#time_interval EbsEnterpriseSnapshotPolicy#time_interval}
  */
  readonly timeInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#time_unit EbsEnterpriseSnapshotPolicy#time_unit}
  */
  readonly timeUnit?: string;
}

export function ebsEnterpriseSnapshotPolicyRetainRuleToTerraform(struct?: EbsEnterpriseSnapshotPolicyRetainRuleOutputReference | EbsEnterpriseSnapshotPolicyRetainRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
    time_interval: cdktf.numberToTerraform(struct!.timeInterval),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function ebsEnterpriseSnapshotPolicyRetainRuleToHclTerraform(struct?: EbsEnterpriseSnapshotPolicyRetainRuleOutputReference | EbsEnterpriseSnapshotPolicyRetainRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_interval: {
      value: cdktf.numberToHclTerraform(struct!.timeInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_unit: {
      value: cdktf.stringToHclTerraform(struct!.timeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EbsEnterpriseSnapshotPolicyRetainRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EbsEnterpriseSnapshotPolicyRetainRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._timeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeInterval = this._timeInterval;
    }
    if (this._timeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnit = this._timeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbsEnterpriseSnapshotPolicyRetainRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._number = undefined;
      this._timeInterval = undefined;
      this._timeUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._number = value.number;
      this._timeInterval = value.timeInterval;
      this._timeUnit = value.timeUnit;
    }
  }

  // number - computed: false, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // time_interval - computed: false, optional: true, required: false
  private _timeInterval?: number; 
  public get timeInterval() {
    return this.getNumberAttribute('time_interval');
  }
  public set timeInterval(value: number) {
    this._timeInterval = value;
  }
  public resetTimeInterval() {
    this._timeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalInput() {
    return this._timeInterval;
  }

  // time_unit - computed: false, optional: true, required: false
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  public resetTimeUnit() {
    this._timeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }
}
export interface EbsEnterpriseSnapshotPolicySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#cron_expression EbsEnterpriseSnapshotPolicy#cron_expression}
  */
  readonly cronExpression: string;
}

export function ebsEnterpriseSnapshotPolicyScheduleToTerraform(struct?: EbsEnterpriseSnapshotPolicyScheduleOutputReference | EbsEnterpriseSnapshotPolicySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
  }
}


export function ebsEnterpriseSnapshotPolicyScheduleToHclTerraform(struct?: EbsEnterpriseSnapshotPolicyScheduleOutputReference | EbsEnterpriseSnapshotPolicySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_expression: {
      value: cdktf.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EbsEnterpriseSnapshotPolicyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EbsEnterpriseSnapshotPolicySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbsEnterpriseSnapshotPolicySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cronExpression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cronExpression = value.cronExpression;
    }
  }

  // cron_expression - computed: false, optional: false, required: true
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }
}
export interface EbsEnterpriseSnapshotPolicySpecialRetainRulesRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#special_period_unit EbsEnterpriseSnapshotPolicy#special_period_unit}
  */
  readonly specialPeriodUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#time_interval EbsEnterpriseSnapshotPolicy#time_interval}
  */
  readonly timeInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#time_unit EbsEnterpriseSnapshotPolicy#time_unit}
  */
  readonly timeUnit?: string;
}

export function ebsEnterpriseSnapshotPolicySpecialRetainRulesRulesToTerraform(struct?: EbsEnterpriseSnapshotPolicySpecialRetainRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    special_period_unit: cdktf.stringToTerraform(struct!.specialPeriodUnit),
    time_interval: cdktf.numberToTerraform(struct!.timeInterval),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function ebsEnterpriseSnapshotPolicySpecialRetainRulesRulesToHclTerraform(struct?: EbsEnterpriseSnapshotPolicySpecialRetainRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    special_period_unit: {
      value: cdktf.stringToHclTerraform(struct!.specialPeriodUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_interval: {
      value: cdktf.numberToHclTerraform(struct!.timeInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_unit: {
      value: cdktf.stringToHclTerraform(struct!.timeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EbsEnterpriseSnapshotPolicySpecialRetainRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EbsEnterpriseSnapshotPolicySpecialRetainRulesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._specialPeriodUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.specialPeriodUnit = this._specialPeriodUnit;
    }
    if (this._timeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeInterval = this._timeInterval;
    }
    if (this._timeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnit = this._timeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbsEnterpriseSnapshotPolicySpecialRetainRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._specialPeriodUnit = undefined;
      this._timeInterval = undefined;
      this._timeUnit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._specialPeriodUnit = value.specialPeriodUnit;
      this._timeInterval = value.timeInterval;
      this._timeUnit = value.timeUnit;
    }
  }

  // special_period_unit - computed: false, optional: true, required: false
  private _specialPeriodUnit?: string; 
  public get specialPeriodUnit() {
    return this.getStringAttribute('special_period_unit');
  }
  public set specialPeriodUnit(value: string) {
    this._specialPeriodUnit = value;
  }
  public resetSpecialPeriodUnit() {
    this._specialPeriodUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialPeriodUnitInput() {
    return this._specialPeriodUnit;
  }

  // time_interval - computed: false, optional: true, required: false
  private _timeInterval?: number; 
  public get timeInterval() {
    return this.getNumberAttribute('time_interval');
  }
  public set timeInterval(value: number) {
    this._timeInterval = value;
  }
  public resetTimeInterval() {
    this._timeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalInput() {
    return this._timeInterval;
  }

  // time_unit - computed: false, optional: true, required: false
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  public resetTimeUnit() {
    this._timeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }
}

export class EbsEnterpriseSnapshotPolicySpecialRetainRulesRulesList extends cdktf.ComplexList {
  public internalValue? : EbsEnterpriseSnapshotPolicySpecialRetainRulesRules[] | cdktf.IResolvable

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
  public get(index: number): EbsEnterpriseSnapshotPolicySpecialRetainRulesRulesOutputReference {
    return new EbsEnterpriseSnapshotPolicySpecialRetainRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EbsEnterpriseSnapshotPolicySpecialRetainRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#enabled EbsEnterpriseSnapshotPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#rules EbsEnterpriseSnapshotPolicy#rules}
  */
  readonly rules?: EbsEnterpriseSnapshotPolicySpecialRetainRulesRules[] | cdktf.IResolvable;
}

export function ebsEnterpriseSnapshotPolicySpecialRetainRulesToTerraform(struct?: EbsEnterpriseSnapshotPolicySpecialRetainRulesOutputReference | EbsEnterpriseSnapshotPolicySpecialRetainRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rules: cdktf.listMapper(ebsEnterpriseSnapshotPolicySpecialRetainRulesRulesToTerraform, true)(struct!.rules),
  }
}


export function ebsEnterpriseSnapshotPolicySpecialRetainRulesToHclTerraform(struct?: EbsEnterpriseSnapshotPolicySpecialRetainRulesOutputReference | EbsEnterpriseSnapshotPolicySpecialRetainRules): any {
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
    rules: {
      value: cdktf.listMapperHcl(ebsEnterpriseSnapshotPolicySpecialRetainRulesRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "EbsEnterpriseSnapshotPolicySpecialRetainRulesRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EbsEnterpriseSnapshotPolicySpecialRetainRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EbsEnterpriseSnapshotPolicySpecialRetainRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbsEnterpriseSnapshotPolicySpecialRetainRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._rules.internalValue = value.rules;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new EbsEnterpriseSnapshotPolicySpecialRetainRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: EbsEnterpriseSnapshotPolicySpecialRetainRulesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface EbsEnterpriseSnapshotPolicyStorageRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#enable_immediate_access EbsEnterpriseSnapshotPolicy#enable_immediate_access}
  */
  readonly enableImmediateAccess?: boolean | cdktf.IResolvable;
}

export function ebsEnterpriseSnapshotPolicyStorageRuleToTerraform(struct?: EbsEnterpriseSnapshotPolicyStorageRuleOutputReference | EbsEnterpriseSnapshotPolicyStorageRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_immediate_access: cdktf.booleanToTerraform(struct!.enableImmediateAccess),
  }
}


export function ebsEnterpriseSnapshotPolicyStorageRuleToHclTerraform(struct?: EbsEnterpriseSnapshotPolicyStorageRuleOutputReference | EbsEnterpriseSnapshotPolicyStorageRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_immediate_access: {
      value: cdktf.booleanToHclTerraform(struct!.enableImmediateAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EbsEnterpriseSnapshotPolicyStorageRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EbsEnterpriseSnapshotPolicyStorageRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableImmediateAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableImmediateAccess = this._enableImmediateAccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EbsEnterpriseSnapshotPolicyStorageRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableImmediateAccess = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableImmediateAccess = value.enableImmediateAccess;
    }
  }

  // enable_immediate_access - computed: false, optional: true, required: false
  private _enableImmediateAccess?: boolean | cdktf.IResolvable; 
  public get enableImmediateAccess() {
    return this.getBooleanAttribute('enable_immediate_access');
  }
  public set enableImmediateAccess(value: boolean | cdktf.IResolvable) {
    this._enableImmediateAccess = value;
  }
  public resetEnableImmediateAccess() {
    this._enableImmediateAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableImmediateAccessInput() {
    return this._enableImmediateAccess;
  }
}
export interface EbsEnterpriseSnapshotPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#create EbsEnterpriseSnapshotPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#delete EbsEnterpriseSnapshotPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#update EbsEnterpriseSnapshotPolicy#update}
  */
  readonly update?: string;
}

export function ebsEnterpriseSnapshotPolicyTimeoutsToTerraform(struct?: EbsEnterpriseSnapshotPolicyTimeouts | cdktf.IResolvable): any {
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


export function ebsEnterpriseSnapshotPolicyTimeoutsToHclTerraform(struct?: EbsEnterpriseSnapshotPolicyTimeouts | cdktf.IResolvable): any {
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

export class EbsEnterpriseSnapshotPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EbsEnterpriseSnapshotPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EbsEnterpriseSnapshotPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy alicloud_ebs_enterprise_snapshot_policy}
*/
export class EbsEnterpriseSnapshotPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ebs_enterprise_snapshot_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EbsEnterpriseSnapshotPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EbsEnterpriseSnapshotPolicy to import
  * @param importFromId The id of the existing EbsEnterpriseSnapshotPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EbsEnterpriseSnapshotPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ebs_enterprise_snapshot_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ebs_enterprise_snapshot_policy alicloud_ebs_enterprise_snapshot_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EbsEnterpriseSnapshotPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: EbsEnterpriseSnapshotPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ebs_enterprise_snapshot_policy',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._desc = config.desc;
    this._enterpriseSnapshotPolicyName = config.enterpriseSnapshotPolicyName;
    this._id = config.id;
    this._resourceGroupId = config.resourceGroupId;
    this._status = config.status;
    this._tags = config.tags;
    this._targetType = config.targetType;
    this._crossRegionCopyInfo.internalValue = config.crossRegionCopyInfo;
    this._retainRule.internalValue = config.retainRule;
    this._schedule.internalValue = config.schedule;
    this._specialRetainRules.internalValue = config.specialRetainRules;
    this._storageRule.internalValue = config.storageRule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // desc - computed: false, optional: true, required: false
  private _desc?: string; 
  public get desc() {
    return this.getStringAttribute('desc');
  }
  public set desc(value: string) {
    this._desc = value;
  }
  public resetDesc() {
    this._desc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descInput() {
    return this._desc;
  }

  // enterprise_snapshot_policy_name - computed: false, optional: false, required: true
  private _enterpriseSnapshotPolicyName?: string; 
  public get enterpriseSnapshotPolicyName() {
    return this.getStringAttribute('enterprise_snapshot_policy_name');
  }
  public set enterpriseSnapshotPolicyName(value: string) {
    this._enterpriseSnapshotPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseSnapshotPolicyNameInput() {
    return this._enterpriseSnapshotPolicyName;
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

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // target_type - computed: false, optional: false, required: true
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }

  // cross_region_copy_info - computed: false, optional: true, required: false
  private _crossRegionCopyInfo = new EbsEnterpriseSnapshotPolicyCrossRegionCopyInfoOutputReference(this, "cross_region_copy_info");
  public get crossRegionCopyInfo() {
    return this._crossRegionCopyInfo;
  }
  public putCrossRegionCopyInfo(value: EbsEnterpriseSnapshotPolicyCrossRegionCopyInfo) {
    this._crossRegionCopyInfo.internalValue = value;
  }
  public resetCrossRegionCopyInfo() {
    this._crossRegionCopyInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRegionCopyInfoInput() {
    return this._crossRegionCopyInfo.internalValue;
  }

  // retain_rule - computed: false, optional: false, required: true
  private _retainRule = new EbsEnterpriseSnapshotPolicyRetainRuleOutputReference(this, "retain_rule");
  public get retainRule() {
    return this._retainRule;
  }
  public putRetainRule(value: EbsEnterpriseSnapshotPolicyRetainRule) {
    this._retainRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retainRuleInput() {
    return this._retainRule.internalValue;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new EbsEnterpriseSnapshotPolicyScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: EbsEnterpriseSnapshotPolicySchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // special_retain_rules - computed: false, optional: true, required: false
  private _specialRetainRules = new EbsEnterpriseSnapshotPolicySpecialRetainRulesOutputReference(this, "special_retain_rules");
  public get specialRetainRules() {
    return this._specialRetainRules;
  }
  public putSpecialRetainRules(value: EbsEnterpriseSnapshotPolicySpecialRetainRules) {
    this._specialRetainRules.internalValue = value;
  }
  public resetSpecialRetainRules() {
    this._specialRetainRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialRetainRulesInput() {
    return this._specialRetainRules.internalValue;
  }

  // storage_rule - computed: false, optional: true, required: false
  private _storageRule = new EbsEnterpriseSnapshotPolicyStorageRuleOutputReference(this, "storage_rule");
  public get storageRule() {
    return this._storageRule;
  }
  public putStorageRule(value: EbsEnterpriseSnapshotPolicyStorageRule) {
    this._storageRule.internalValue = value;
  }
  public resetStorageRule() {
    this._storageRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageRuleInput() {
    return this._storageRule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EbsEnterpriseSnapshotPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EbsEnterpriseSnapshotPolicyTimeouts) {
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
      desc: cdktf.stringToTerraform(this._desc),
      enterprise_snapshot_policy_name: cdktf.stringToTerraform(this._enterpriseSnapshotPolicyName),
      id: cdktf.stringToTerraform(this._id),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      target_type: cdktf.stringToTerraform(this._targetType),
      cross_region_copy_info: ebsEnterpriseSnapshotPolicyCrossRegionCopyInfoToTerraform(this._crossRegionCopyInfo.internalValue),
      retain_rule: ebsEnterpriseSnapshotPolicyRetainRuleToTerraform(this._retainRule.internalValue),
      schedule: ebsEnterpriseSnapshotPolicyScheduleToTerraform(this._schedule.internalValue),
      special_retain_rules: ebsEnterpriseSnapshotPolicySpecialRetainRulesToTerraform(this._specialRetainRules.internalValue),
      storage_rule: ebsEnterpriseSnapshotPolicyStorageRuleToTerraform(this._storageRule.internalValue),
      timeouts: ebsEnterpriseSnapshotPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      desc: {
        value: cdktf.stringToHclTerraform(this._desc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enterprise_snapshot_policy_name: {
        value: cdktf.stringToHclTerraform(this._enterpriseSnapshotPolicyName),
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
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      target_type: {
        value: cdktf.stringToHclTerraform(this._targetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_region_copy_info: {
        value: ebsEnterpriseSnapshotPolicyCrossRegionCopyInfoToHclTerraform(this._crossRegionCopyInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EbsEnterpriseSnapshotPolicyCrossRegionCopyInfoList",
      },
      retain_rule: {
        value: ebsEnterpriseSnapshotPolicyRetainRuleToHclTerraform(this._retainRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EbsEnterpriseSnapshotPolicyRetainRuleList",
      },
      schedule: {
        value: ebsEnterpriseSnapshotPolicyScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EbsEnterpriseSnapshotPolicyScheduleList",
      },
      special_retain_rules: {
        value: ebsEnterpriseSnapshotPolicySpecialRetainRulesToHclTerraform(this._specialRetainRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EbsEnterpriseSnapshotPolicySpecialRetainRulesList",
      },
      storage_rule: {
        value: ebsEnterpriseSnapshotPolicyStorageRuleToHclTerraform(this._storageRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EbsEnterpriseSnapshotPolicyStorageRuleList",
      },
      timeouts: {
        value: ebsEnterpriseSnapshotPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EbsEnterpriseSnapshotPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
