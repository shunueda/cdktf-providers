// https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/alert_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPrismacloudAlertRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/alert_rule#id DataPrismacloudAlertRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Rule/Scan name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/alert_rule#name DataPrismacloudAlertRule#name}
  */
  readonly name?: string;
  /**
  * Policy scan config ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/alert_rule#policy_scan_config_id DataPrismacloudAlertRule#policy_scan_config_id}
  */
  readonly policyScanConfigId?: string;
}
export interface DataPrismacloudAlertRuleNotificationConfigDaysOfWeek {
}

export function dataPrismacloudAlertRuleNotificationConfigDaysOfWeekToTerraform(struct?: DataPrismacloudAlertRuleNotificationConfigDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPrismacloudAlertRuleNotificationConfigDaysOfWeekToHclTerraform(struct?: DataPrismacloudAlertRuleNotificationConfigDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPrismacloudAlertRuleNotificationConfigDaysOfWeekOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPrismacloudAlertRuleNotificationConfigDaysOfWeek | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrismacloudAlertRuleNotificationConfigDaysOfWeek | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day - computed: true, optional: false, required: false
  public get day() {
    return this.getStringAttribute('day');
  }

  // offset - computed: true, optional: false, required: false
  public get offset() {
    return this.getNumberAttribute('offset');
  }
}

export class DataPrismacloudAlertRuleNotificationConfigDaysOfWeekList extends cdktf.ComplexList {

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
  public get(index: number): DataPrismacloudAlertRuleNotificationConfigDaysOfWeekOutputReference {
    return new DataPrismacloudAlertRuleNotificationConfigDaysOfWeekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPrismacloudAlertRuleNotificationConfig {
}

export function dataPrismacloudAlertRuleNotificationConfigToTerraform(struct?: DataPrismacloudAlertRuleNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPrismacloudAlertRuleNotificationConfigToHclTerraform(struct?: DataPrismacloudAlertRuleNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPrismacloudAlertRuleNotificationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPrismacloudAlertRuleNotificationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrismacloudAlertRuleNotificationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getStringAttribute('config_id');
  }

  // config_type - computed: true, optional: false, required: false
  public get configType() {
    return this.getStringAttribute('config_type');
  }

  // day_of_month - computed: true, optional: false, required: false
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }

  // days_of_week - computed: true, optional: false, required: false
  private _daysOfWeek = new DataPrismacloudAlertRuleNotificationConfigDaysOfWeekList(this, "days_of_week", false);
  public get daysOfWeek() {
    return this._daysOfWeek;
  }

  // detailed_report - computed: true, optional: false, required: false
  public get detailedReport() {
    return this.getBooleanAttribute('detailed_report');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getStringAttribute('frequency');
  }

  // frequency_from_r_rule - computed: true, optional: false, required: false
  public get frequencyFromRRule() {
    return this.getStringAttribute('frequency_from_r_rule');
  }

  // hour_of_day - computed: true, optional: false, required: false
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }

  // include_remediation - computed: true, optional: false, required: false
  public get includeRemediation() {
    return this.getBooleanAttribute('include_remediation');
  }

  // last_sent_ts - computed: true, optional: false, required: false
  public get lastSentTs() {
    return this.getNumberAttribute('last_sent_ts');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getNumberAttribute('last_updated');
  }

  // r_rule_schedule - computed: true, optional: false, required: false
  public get rRuleSchedule() {
    return this.getStringAttribute('r_rule_schedule');
  }

  // recipients - computed: true, optional: false, required: false
  public get recipients() {
    return cdktf.Fn.tolist(this.getListAttribute('recipients'));
  }

  // template_id - computed: true, optional: false, required: false
  public get templateId() {
    return this.getStringAttribute('template_id');
  }

  // timezone_id - computed: true, optional: false, required: false
  public get timezoneId() {
    return this.getStringAttribute('timezone_id');
  }

  // with_compression - computed: true, optional: false, required: false
  public get withCompression() {
    return this.getBooleanAttribute('with_compression');
  }
}

export class DataPrismacloudAlertRuleNotificationConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataPrismacloudAlertRuleNotificationConfigOutputReference {
    return new DataPrismacloudAlertRuleNotificationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPrismacloudAlertRuleTargetAlertRulePolicyFilter {
}

export function dataPrismacloudAlertRuleTargetAlertRulePolicyFilterToTerraform(struct?: DataPrismacloudAlertRuleTargetAlertRulePolicyFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPrismacloudAlertRuleTargetAlertRulePolicyFilterToHclTerraform(struct?: DataPrismacloudAlertRuleTargetAlertRulePolicyFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPrismacloudAlertRuleTargetAlertRulePolicyFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPrismacloudAlertRuleTargetAlertRulePolicyFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrismacloudAlertRuleTargetAlertRulePolicyFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_type - computed: true, optional: false, required: false
  public get cloudType() {
    return cdktf.Fn.tolist(this.getListAttribute('cloud_type'));
  }

  // policy_compliance_standard - computed: true, optional: false, required: false
  public get policyComplianceStandard() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_compliance_standard'));
  }

  // policy_label - computed: true, optional: false, required: false
  public get policyLabel() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_label'));
  }

  // policy_severity - computed: true, optional: false, required: false
  public get policySeverity() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_severity'));
  }
}

export class DataPrismacloudAlertRuleTargetAlertRulePolicyFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataPrismacloudAlertRuleTargetAlertRulePolicyFilterOutputReference {
    return new DataPrismacloudAlertRuleTargetAlertRulePolicyFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPrismacloudAlertRuleTargetResourceListStruct {
}

export function dataPrismacloudAlertRuleTargetResourceListStructToTerraform(struct?: DataPrismacloudAlertRuleTargetResourceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPrismacloudAlertRuleTargetResourceListStructToHclTerraform(struct?: DataPrismacloudAlertRuleTargetResourceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPrismacloudAlertRuleTargetResourceListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPrismacloudAlertRuleTargetResourceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrismacloudAlertRuleTargetResourceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute_access_group_ids - computed: true, optional: false, required: false
  public get computeAccessGroupIds() {
    return this.getListAttribute('compute_access_group_ids');
  }
}

export class DataPrismacloudAlertRuleTargetResourceListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataPrismacloudAlertRuleTargetResourceListStructOutputReference {
    return new DataPrismacloudAlertRuleTargetResourceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPrismacloudAlertRuleTargetTags {
}

export function dataPrismacloudAlertRuleTargetTagsToTerraform(struct?: DataPrismacloudAlertRuleTargetTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPrismacloudAlertRuleTargetTagsToHclTerraform(struct?: DataPrismacloudAlertRuleTargetTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPrismacloudAlertRuleTargetTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPrismacloudAlertRuleTargetTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrismacloudAlertRuleTargetTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataPrismacloudAlertRuleTargetTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataPrismacloudAlertRuleTargetTagsOutputReference {
    return new DataPrismacloudAlertRuleTargetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPrismacloudAlertRuleTarget {
}

export function dataPrismacloudAlertRuleTargetToTerraform(struct?: DataPrismacloudAlertRuleTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPrismacloudAlertRuleTargetToHclTerraform(struct?: DataPrismacloudAlertRuleTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPrismacloudAlertRuleTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPrismacloudAlertRuleTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrismacloudAlertRuleTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_groups - computed: true, optional: false, required: false
  public get accountGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('account_groups'));
  }

  // alert_rule_policy_filter - computed: true, optional: false, required: false
  private _alertRulePolicyFilter = new DataPrismacloudAlertRuleTargetAlertRulePolicyFilterList(this, "alert_rule_policy_filter", false);
  public get alertRulePolicyFilter() {
    return this._alertRulePolicyFilter;
  }

  // excluded_accounts - computed: true, optional: false, required: false
  public get excludedAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_accounts'));
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }

  // resource_list - computed: true, optional: false, required: false
  private _resourceList = new DataPrismacloudAlertRuleTargetResourceListStructList(this, "resource_list", false);
  public get resourceList() {
    return this._resourceList;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataPrismacloudAlertRuleTargetTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
}

export class DataPrismacloudAlertRuleTargetList extends cdktf.ComplexList {

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
  public get(index: number): DataPrismacloudAlertRuleTargetOutputReference {
    return new DataPrismacloudAlertRuleTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/alert_rule prismacloud_alert_rule}
*/
export class DataPrismacloudAlertRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud_alert_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPrismacloudAlertRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPrismacloudAlertRule to import
  * @param importFromId The id of the existing DataPrismacloudAlertRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/alert_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPrismacloudAlertRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud_alert_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/data-sources/alert_rule prismacloud_alert_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPrismacloudAlertRuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPrismacloudAlertRuleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prismacloud_alert_rule',
      terraformGeneratorMetadata: {
        providerName: 'prismacloud',
        providerVersion: '1.7.0'
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
    this._name = config.name;
    this._policyScanConfigId = config.policyScanConfigId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_auto_remediate - computed: true, optional: false, required: false
  public get allowAutoRemediate() {
    return this.getBooleanAttribute('allow_auto_remediate');
  }

  // delay_notification_ms - computed: true, optional: false, required: false
  public get delayNotificationMs() {
    return this.getNumberAttribute('delay_notification_ms');
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // excluded_policies - computed: true, optional: false, required: false
  public get excludedPolicies() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_policies'));
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

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }

  // last_modified_on - computed: true, optional: false, required: false
  public get lastModifiedOn() {
    return this.getNumberAttribute('last_modified_on');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notification_channels - computed: true, optional: false, required: false
  public get notificationChannels() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_channels'));
  }

  // notification_config - computed: true, optional: false, required: false
  private _notificationConfig = new DataPrismacloudAlertRuleNotificationConfigList(this, "notification_config", false);
  public get notificationConfig() {
    return this._notificationConfig;
  }

  // notify_on_dismissed - computed: true, optional: false, required: false
  public get notifyOnDismissed() {
    return this.getBooleanAttribute('notify_on_dismissed');
  }

  // notify_on_open - computed: true, optional: false, required: false
  public get notifyOnOpen() {
    return this.getBooleanAttribute('notify_on_open');
  }

  // notify_on_resolved - computed: true, optional: false, required: false
  public get notifyOnResolved() {
    return this.getBooleanAttribute('notify_on_resolved');
  }

  // notify_on_snoozed - computed: true, optional: false, required: false
  public get notifyOnSnoozed() {
    return this.getBooleanAttribute('notify_on_snoozed');
  }

  // open_alerts_count - computed: true, optional: false, required: false
  public get openAlertsCount() {
    return this.getNumberAttribute('open_alerts_count');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // policies - computed: true, optional: false, required: false
  public get policies() {
    return cdktf.Fn.tolist(this.getListAttribute('policies'));
  }

  // policy_labels - computed: true, optional: false, required: false
  public get policyLabels() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_labels'));
  }

  // policy_scan_config_id - computed: true, optional: true, required: false
  private _policyScanConfigId?: string; 
  public get policyScanConfigId() {
    return this.getStringAttribute('policy_scan_config_id');
  }
  public set policyScanConfigId(value: string) {
    this._policyScanConfigId = value;
  }
  public resetPolicyScanConfigId() {
    this._policyScanConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyScanConfigIdInput() {
    return this._policyScanConfigId;
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // scan_all - computed: true, optional: false, required: false
  public get scanAll() {
    return this.getBooleanAttribute('scan_all');
  }

  // target - computed: true, optional: false, required: false
  private _target = new DataPrismacloudAlertRuleTargetList(this, "target", false);
  public get target() {
    return this._target;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      policy_scan_config_id: cdktf.stringToTerraform(this._policyScanConfigId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_scan_config_id: {
        value: cdktf.stringToHclTerraform(this._policyScanConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
