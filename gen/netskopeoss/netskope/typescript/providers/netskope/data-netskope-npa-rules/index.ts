// https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetskopeNpaRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Return values only from specified fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_rules#fields DataNetskopeNpaRules#fields}
  */
  readonly fields?: string;
  /**
  * npa policy id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_rules#rule_id DataNetskopeNpaRules#rule_id}
  */
  readonly ruleId: string;
}
export interface DataNetskopeNpaRulesRuleDataDlpActions {
}

export function dataNetskopeNpaRulesRuleDataDlpActionsToTerraform(struct?: DataNetskopeNpaRulesRuleDataDlpActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaRulesRuleDataDlpActionsToHclTerraform(struct?: DataNetskopeNpaRulesRuleDataDlpActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaRulesRuleDataDlpActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopeNpaRulesRuleDataDlpActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaRulesRuleDataDlpActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.getListAttribute('actions');
  }

  // dlp_profile - computed: true, optional: false, required: false
  public get dlpProfile() {
    return this.getStringAttribute('dlp_profile');
  }
}

export class DataNetskopeNpaRulesRuleDataDlpActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataNetskopeNpaRulesRuleDataDlpActionsOutputReference {
    return new DataNetskopeNpaRulesRuleDataDlpActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetskopeNpaRulesRuleDataMatchCriteriaAction {
}

export function dataNetskopeNpaRulesRuleDataMatchCriteriaActionToTerraform(struct?: DataNetskopeNpaRulesRuleDataMatchCriteriaAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaRulesRuleDataMatchCriteriaActionToHclTerraform(struct?: DataNetskopeNpaRulesRuleDataMatchCriteriaAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaRulesRuleDataMatchCriteriaActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetskopeNpaRulesRuleDataMatchCriteriaAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaRulesRuleDataMatchCriteriaAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_name - computed: true, optional: false, required: false
  public get actionName() {
    return this.getStringAttribute('action_name');
  }
}
export interface DataNetskopeNpaRulesRuleDataPrivateAppsWithActivitiesActivities {
}

export function dataNetskopeNpaRulesRuleDataPrivateAppsWithActivitiesActivitiesToTerraform(struct?: DataNetskopeNpaRulesRuleDataPrivateAppsWithActivitiesActivities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaRulesRuleDataPrivateAppsWithActivitiesActivitiesToHclTerraform(struct?: DataNetskopeNpaRulesRuleDataPrivateAppsWithActivitiesActivities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaRulesRuleDataPrivateAppsWithActivitiesActivitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopeNpaRulesRuleDataPrivateAppsWithActivitiesActivities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaRulesRuleDataPrivateAppsWithActivitiesActivities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activity - computed: true, optional: false, required: false
  public get activity() {
    return this.getStringAttribute('activity');
  }

  // list_of_constraints - computed: true, optional: false, required: false
  public get listOfConstraints() {
    return this.getListAttribute('list_of_constraints');
  }
}

export class DataNetskopeNpaRulesRuleDataPrivateAppsWithActivitiesActivitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataNetskopeNpaRulesRuleDataPrivateAppsWithActivitiesActivitiesOutputReference {
    return new DataNetskopeNpaRulesRuleDataPrivateAppsWithActivitiesActivitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetskopeNpaRulesRuleDataPrivateAppsWithActivities {
}

export function dataNetskopeNpaRulesRuleDataPrivateAppsWithActivitiesToTerraform(struct?: DataNetskopeNpaRulesRuleDataPrivateAppsWithActivities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaRulesRuleDataPrivateAppsWithActivitiesToHclTerraform(struct?: DataNetskopeNpaRulesRuleDataPrivateAppsWithActivities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaRulesRuleDataPrivateAppsWithActivitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopeNpaRulesRuleDataPrivateAppsWithActivities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaRulesRuleDataPrivateAppsWithActivities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activities - computed: true, optional: false, required: false
  private _activities = new DataNetskopeNpaRulesRuleDataPrivateAppsWithActivitiesActivitiesList(this, "activities", false);
  public get activities() {
    return this._activities;
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getListAttribute('app_id');
  }

  // app_name - computed: true, optional: false, required: false
  public get appName() {
    return this.getStringAttribute('app_name');
  }
}

export class DataNetskopeNpaRulesRuleDataPrivateAppsWithActivitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataNetskopeNpaRulesRuleDataPrivateAppsWithActivitiesOutputReference {
    return new DataNetskopeNpaRulesRuleDataPrivateAppsWithActivitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetskopeNpaRulesRuleDataTssActionsActions {
}

export function dataNetskopeNpaRulesRuleDataTssActionsActionsToTerraform(struct?: DataNetskopeNpaRulesRuleDataTssActionsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaRulesRuleDataTssActionsActionsToHclTerraform(struct?: DataNetskopeNpaRulesRuleDataTssActionsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaRulesRuleDataTssActionsActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopeNpaRulesRuleDataTssActionsActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaRulesRuleDataTssActionsActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_name - computed: true, optional: false, required: false
  public get actionName() {
    return this.getStringAttribute('action_name');
  }

  // remediation_profile - computed: true, optional: false, required: false
  public get remediationProfile() {
    return this.getStringAttribute('remediation_profile');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // template - computed: true, optional: false, required: false
  public get template() {
    return this.getStringAttribute('template');
  }
}

export class DataNetskopeNpaRulesRuleDataTssActionsActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataNetskopeNpaRulesRuleDataTssActionsActionsOutputReference {
    return new DataNetskopeNpaRulesRuleDataTssActionsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetskopeNpaRulesRuleDataTssActions {
}

export function dataNetskopeNpaRulesRuleDataTssActionsToTerraform(struct?: DataNetskopeNpaRulesRuleDataTssActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaRulesRuleDataTssActionsToHclTerraform(struct?: DataNetskopeNpaRulesRuleDataTssActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaRulesRuleDataTssActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopeNpaRulesRuleDataTssActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaRulesRuleDataTssActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataNetskopeNpaRulesRuleDataTssActionsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // tss_profile - computed: true, optional: false, required: false
  public get tssProfile() {
    return this.getListAttribute('tss_profile');
  }
}

export class DataNetskopeNpaRulesRuleDataTssActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataNetskopeNpaRulesRuleDataTssActionsOutputReference {
    return new DataNetskopeNpaRulesRuleDataTssActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetskopeNpaRulesRuleData {
}

export function dataNetskopeNpaRulesRuleDataToTerraform(struct?: DataNetskopeNpaRulesRuleData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaRulesRuleDataToHclTerraform(struct?: DataNetskopeNpaRulesRuleData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaRulesRuleDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetskopeNpaRulesRuleData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaRulesRuleData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_method - computed: true, optional: false, required: false
  public get accessMethod() {
    return this.getListAttribute('access_method');
  }

  // b_negate_net_location - computed: true, optional: false, required: false
  public get bNegateNetLocation() {
    return this.getBooleanAttribute('b_negate_net_location');
  }

  // b_negate_src_countries - computed: true, optional: false, required: false
  public get bNegateSrcCountries() {
    return this.getBooleanAttribute('b_negate_src_countries');
  }

  // classification - computed: true, optional: false, required: false
  public get classification() {
    return this.getStringAttribute('classification');
  }

  // device_classification_id - computed: true, optional: false, required: false
  public get deviceClassificationId() {
    return this.getNumberListAttribute('device_classification_id');
  }

  // dlp_actions - computed: true, optional: false, required: false
  private _dlpActions = new DataNetskopeNpaRulesRuleDataDlpActionsList(this, "dlp_actions", false);
  public get dlpActions() {
    return this._dlpActions;
  }

  // external_dlp - computed: true, optional: false, required: false
  public get externalDlp() {
    return this.getBooleanAttribute('external_dlp');
  }

  // json_version - computed: true, optional: false, required: false
  public get jsonVersion() {
    return this.getNumberAttribute('json_version');
  }

  // match_criteria_action - computed: true, optional: false, required: false
  private _matchCriteriaAction = new DataNetskopeNpaRulesRuleDataMatchCriteriaActionOutputReference(this, "match_criteria_action");
  public get matchCriteriaAction() {
    return this._matchCriteriaAction;
  }

  // net_location_obj - computed: true, optional: false, required: false
  public get netLocationObj() {
    return this.getListAttribute('net_location_obj');
  }

  // organization_units - computed: true, optional: false, required: false
  public get organizationUnits() {
    return this.getListAttribute('organization_units');
  }

  // policy_type - computed: true, optional: false, required: false
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }

  // private_app_tag_ids - computed: true, optional: false, required: false
  public get privateAppTagIds() {
    return this.getListAttribute('private_app_tag_ids');
  }

  // private_app_tags - computed: true, optional: false, required: false
  public get privateAppTags() {
    return this.getListAttribute('private_app_tags');
  }

  // private_apps - computed: true, optional: false, required: false
  public get privateApps() {
    return this.getListAttribute('private_apps');
  }

  // private_apps_with_activities - computed: true, optional: false, required: false
  private _privateAppsWithActivities = new DataNetskopeNpaRulesRuleDataPrivateAppsWithActivitiesList(this, "private_apps_with_activities", false);
  public get privateAppsWithActivities() {
    return this._privateAppsWithActivities;
  }

  // show_dlp_profile_action_table - computed: true, optional: false, required: false
  public get showDlpProfileActionTable() {
    return this.getBooleanAttribute('show_dlp_profile_action_table');
  }

  // src_countries - computed: true, optional: false, required: false
  public get srcCountries() {
    return this.getListAttribute('src_countries');
  }

  // tss_actions - computed: true, optional: false, required: false
  private _tssActions = new DataNetskopeNpaRulesRuleDataTssActionsList(this, "tss_actions", false);
  public get tssActions() {
    return this._tssActions;
  }

  // tss_profile - computed: true, optional: false, required: false
  public get tssProfile() {
    return this.getListAttribute('tss_profile');
  }

  // user_groups - computed: true, optional: false, required: false
  public get userGroups() {
    return this.getListAttribute('user_groups');
  }

  // user_type - computed: true, optional: false, required: false
  public get userType() {
    return this.getStringAttribute('user_type');
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return this.getListAttribute('users');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_rules netskope_npa_rules}
*/
export class DataNetskopeNpaRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netskope_npa_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetskopeNpaRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetskopeNpaRules to import
  * @param importFromId The id of the existing DataNetskopeNpaRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetskopeNpaRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netskope_npa_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_rules netskope_npa_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetskopeNpaRulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetskopeNpaRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'netskope_npa_rules',
      terraformGeneratorMetadata: {
        providerName: 'netskope',
        providerVersion: '0.3.2',
        providerVersionConstraint: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fields = config.fields;
    this._ruleId = config.ruleId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getStringAttribute('enabled');
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string; 
  public get fields() {
    return this.getStringAttribute('fields');
  }
  public set fields(value: string) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // modify_by - computed: true, optional: false, required: false
  public get modifyBy() {
    return this.getStringAttribute('modify_by');
  }

  // modify_time - computed: true, optional: false, required: false
  public get modifyTime() {
    return this.getStringAttribute('modify_time');
  }

  // modify_type - computed: true, optional: false, required: false
  public get modifyType() {
    return this.getStringAttribute('modify_type');
  }

  // policy_type - computed: true, optional: false, required: false
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }

  // rule_data - computed: true, optional: false, required: false
  private _ruleData = new DataNetskopeNpaRulesRuleDataOutputReference(this, "rule_data");
  public get ruleData() {
    return this._ruleData;
  }

  // rule_id - computed: false, optional: false, required: true
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fields: cdktf.stringToTerraform(this._fields),
      rule_id: cdktf.stringToTerraform(this._ruleId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fields: {
        value: cdktf.stringToHclTerraform(this._fields),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_id: {
        value: cdktf.stringToHclTerraform(this._ruleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
