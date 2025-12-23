// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/monitor_policy_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudMonitorPolicyGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/monitor_policy_groups#id DataTencentcloudMonitorPolicyGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Policy group name for query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/monitor_policy_groups#name DataTencentcloudMonitorPolicyGroups#name}
  */
  readonly name?: string;
  /**
  * The policy view for query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/monitor_policy_groups#policy_view_names DataTencentcloudMonitorPolicyGroups#policy_view_names}
  */
  readonly policyViewNames?: string[];
  /**
  * Used to store results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/monitor_policy_groups#result_output_file DataTencentcloudMonitorPolicyGroups#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudMonitorPolicyGroupsListConditions {
}

export function dataTencentcloudMonitorPolicyGroupsListConditionsToTerraform(struct?: DataTencentcloudMonitorPolicyGroupsListConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorPolicyGroupsListConditionsToHclTerraform(struct?: DataTencentcloudMonitorPolicyGroupsListConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorPolicyGroupsListConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorPolicyGroupsListConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorPolicyGroupsListConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_notify_period - computed: true, optional: false, required: false
  public get alarmNotifyPeriod() {
    return this.getNumberAttribute('alarm_notify_period');
  }

  // alarm_notify_type - computed: true, optional: false, required: false
  public get alarmNotifyType() {
    return this.getNumberAttribute('alarm_notify_type');
  }

  // calc_type - computed: true, optional: false, required: false
  public get calcType() {
    return this.getNumberAttribute('calc_type');
  }

  // calc_value - computed: true, optional: false, required: false
  public get calcValue() {
    return this.getStringAttribute('calc_value');
  }

  // continue_time - computed: true, optional: false, required: false
  public get continueTime() {
    return this.getNumberAttribute('continue_time');
  }

  // metric_id - computed: true, optional: false, required: false
  public get metricId() {
    return this.getNumberAttribute('metric_id');
  }

  // metric_show_name - computed: true, optional: false, required: false
  public get metricShowName() {
    return this.getStringAttribute('metric_show_name');
  }

  // metric_unit - computed: true, optional: false, required: false
  public get metricUnit() {
    return this.getStringAttribute('metric_unit');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getNumberAttribute('period');
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getNumberAttribute('rule_id');
  }
}

export class DataTencentcloudMonitorPolicyGroupsListConditionsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorPolicyGroupsListConditionsOutputReference {
    return new DataTencentcloudMonitorPolicyGroupsListConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorPolicyGroupsListEventConditions {
}

export function dataTencentcloudMonitorPolicyGroupsListEventConditionsToTerraform(struct?: DataTencentcloudMonitorPolicyGroupsListEventConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorPolicyGroupsListEventConditionsToHclTerraform(struct?: DataTencentcloudMonitorPolicyGroupsListEventConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorPolicyGroupsListEventConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorPolicyGroupsListEventConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorPolicyGroupsListEventConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_notify_period - computed: true, optional: false, required: false
  public get alarmNotifyPeriod() {
    return this.getNumberAttribute('alarm_notify_period');
  }

  // alarm_notify_type - computed: true, optional: false, required: false
  public get alarmNotifyType() {
    return this.getNumberAttribute('alarm_notify_type');
  }

  // event_id - computed: true, optional: false, required: false
  public get eventId() {
    return this.getNumberAttribute('event_id');
  }

  // event_show_name - computed: true, optional: false, required: false
  public get eventShowName() {
    return this.getStringAttribute('event_show_name');
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getNumberAttribute('rule_id');
  }
}

export class DataTencentcloudMonitorPolicyGroupsListEventConditionsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorPolicyGroupsListEventConditionsOutputReference {
    return new DataTencentcloudMonitorPolicyGroupsListEventConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorPolicyGroupsListReceivers {
}

export function dataTencentcloudMonitorPolicyGroupsListReceiversToTerraform(struct?: DataTencentcloudMonitorPolicyGroupsListReceivers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorPolicyGroupsListReceiversToHclTerraform(struct?: DataTencentcloudMonitorPolicyGroupsListReceivers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorPolicyGroupsListReceiversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorPolicyGroupsListReceivers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorPolicyGroupsListReceivers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }

  // need_send_notice - computed: true, optional: false, required: false
  public get needSendNotice() {
    return this.getNumberAttribute('need_send_notice');
  }

  // notify_way - computed: true, optional: false, required: false
  public get notifyWay() {
    return this.getListAttribute('notify_way');
  }

  // person_interval - computed: true, optional: false, required: false
  public get personInterval() {
    return this.getNumberAttribute('person_interval');
  }

  // receive_language - computed: true, optional: false, required: false
  public get receiveLanguage() {
    return this.getStringAttribute('receive_language');
  }

  // receiver_group_list - computed: true, optional: false, required: false
  public get receiverGroupList() {
    return this.getNumberListAttribute('receiver_group_list');
  }

  // receiver_type - computed: true, optional: false, required: false
  public get receiverType() {
    return this.getStringAttribute('receiver_type');
  }

  // receiver_user_list - computed: true, optional: false, required: false
  public get receiverUserList() {
    return this.getNumberListAttribute('receiver_user_list');
  }

  // recover_notify - computed: true, optional: false, required: false
  public get recoverNotify() {
    return this.getListAttribute('recover_notify');
  }

  // round_interval - computed: true, optional: false, required: false
  public get roundInterval() {
    return this.getNumberAttribute('round_interval');
  }

  // round_number - computed: true, optional: false, required: false
  public get roundNumber() {
    return this.getNumberAttribute('round_number');
  }

  // send_for - computed: true, optional: false, required: false
  public get sendFor() {
    return this.getListAttribute('send_for');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // uid_list - computed: true, optional: false, required: false
  public get uidList() {
    return this.getNumberListAttribute('uid_list');
  }
}

export class DataTencentcloudMonitorPolicyGroupsListReceiversList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorPolicyGroupsListReceiversOutputReference {
    return new DataTencentcloudMonitorPolicyGroupsListReceiversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMonitorPolicyGroupsListStruct {
}

export function dataTencentcloudMonitorPolicyGroupsListStructToTerraform(struct?: DataTencentcloudMonitorPolicyGroupsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMonitorPolicyGroupsListStructToHclTerraform(struct?: DataTencentcloudMonitorPolicyGroupsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMonitorPolicyGroupsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMonitorPolicyGroupsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMonitorPolicyGroupsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // can_set_default - computed: true, optional: false, required: false
  public get canSetDefault() {
    return this.getBooleanAttribute('can_set_default');
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new DataTencentcloudMonitorPolicyGroupsListConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // event_conditions - computed: true, optional: false, required: false
  private _eventConditions = new DataTencentcloudMonitorPolicyGroupsListEventConditionsList(this, "event_conditions", false);
  public get eventConditions() {
    return this._eventConditions;
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // insert_time - computed: true, optional: false, required: false
  public get insertTime() {
    return this.getNumberAttribute('insert_time');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getNumberAttribute('is_default');
  }

  // is_open - computed: true, optional: false, required: false
  public get isOpen() {
    return this.getBooleanAttribute('is_open');
  }

  // last_edit_uin - computed: true, optional: false, required: false
  public get lastEditUin() {
    return this.getStringAttribute('last_edit_uin');
  }

  // no_shielded_sum - computed: true, optional: false, required: false
  public get noShieldedSum() {
    return this.getNumberAttribute('no_shielded_sum');
  }

  // parent_group_id - computed: true, optional: false, required: false
  public get parentGroupId() {
    return this.getNumberAttribute('parent_group_id');
  }

  // policy_view_name - computed: true, optional: false, required: false
  public get policyViewName() {
    return this.getStringAttribute('policy_view_name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // receivers - computed: true, optional: false, required: false
  private _receivers = new DataTencentcloudMonitorPolicyGroupsListReceiversList(this, "receivers", false);
  public get receivers() {
    return this._receivers;
  }

  // remark - computed: true, optional: false, required: false
  public get remark() {
    return this.getStringAttribute('remark');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getNumberAttribute('update_time');
  }

  // use_sum - computed: true, optional: false, required: false
  public get useSum() {
    return this.getNumberAttribute('use_sum');
  }
}

export class DataTencentcloudMonitorPolicyGroupsListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMonitorPolicyGroupsListStructOutputReference {
    return new DataTencentcloudMonitorPolicyGroupsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/monitor_policy_groups tencentcloud_monitor_policy_groups}
*/
export class DataTencentcloudMonitorPolicyGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_monitor_policy_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudMonitorPolicyGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudMonitorPolicyGroups to import
  * @param importFromId The id of the existing DataTencentcloudMonitorPolicyGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/monitor_policy_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudMonitorPolicyGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_monitor_policy_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/data-sources/monitor_policy_groups tencentcloud_monitor_policy_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudMonitorPolicyGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudMonitorPolicyGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_monitor_policy_groups',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
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
    this._policyViewNames = config.policyViewNames;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // list - computed: true, optional: false, required: false
  private _list = new DataTencentcloudMonitorPolicyGroupsListStructList(this, "list", false);
  public get list() {
    return this._list;
  }

  // name - computed: false, optional: true, required: false
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

  // policy_view_names - computed: false, optional: true, required: false
  private _policyViewNames?: string[]; 
  public get policyViewNames() {
    return this.getListAttribute('policy_view_names');
  }
  public set policyViewNames(value: string[]) {
    this._policyViewNames = value;
  }
  public resetPolicyViewNames() {
    this._policyViewNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyViewNamesInput() {
    return this._policyViewNames;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      policy_view_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policyViewNames),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
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
      policy_view_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policyViewNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
