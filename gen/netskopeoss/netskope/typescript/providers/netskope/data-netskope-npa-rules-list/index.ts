// https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_rules_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetskopeNpaRulesListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Query string based on query operaters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_rules_list#filter DataNetskopeNpaRulesList#filter}
  */
  readonly filter?: string;
  /**
  * Max number of policies to retrieve. Default will be all policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_rules_list#limit DataNetskopeNpaRulesList#limit}
  */
  readonly limit?: number;
  /**
  * The offset of the first policy in the list to retrieve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_rules_list#offset DataNetskopeNpaRulesList#offset}
  */
  readonly offset?: number;
  /**
  * Sort retrieved policies by specified field. Default is policy id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_rules_list#sortby DataNetskopeNpaRulesList#sortby}
  */
  readonly sortby?: string;
  /**
  * Sort in either asc or desc order. The default is asc order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_rules_list#sortorder DataNetskopeNpaRulesList#sortorder}
  */
  readonly sortorder?: string;
}
export interface DataNetskopeNpaRulesListDataRuleDataDlpActions {
}

export function dataNetskopeNpaRulesListDataRuleDataDlpActionsToTerraform(struct?: DataNetskopeNpaRulesListDataRuleDataDlpActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaRulesListDataRuleDataDlpActionsToHclTerraform(struct?: DataNetskopeNpaRulesListDataRuleDataDlpActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaRulesListDataRuleDataDlpActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopeNpaRulesListDataRuleDataDlpActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaRulesListDataRuleDataDlpActions | undefined) {
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

export class DataNetskopeNpaRulesListDataRuleDataDlpActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataNetskopeNpaRulesListDataRuleDataDlpActionsOutputReference {
    return new DataNetskopeNpaRulesListDataRuleDataDlpActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetskopeNpaRulesListDataRuleDataMatchCriteriaAction {
}

export function dataNetskopeNpaRulesListDataRuleDataMatchCriteriaActionToTerraform(struct?: DataNetskopeNpaRulesListDataRuleDataMatchCriteriaAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaRulesListDataRuleDataMatchCriteriaActionToHclTerraform(struct?: DataNetskopeNpaRulesListDataRuleDataMatchCriteriaAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaRulesListDataRuleDataMatchCriteriaActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetskopeNpaRulesListDataRuleDataMatchCriteriaAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaRulesListDataRuleDataMatchCriteriaAction | undefined) {
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
export interface DataNetskopeNpaRulesListDataRuleDataPrivateAppsWithActivitiesActivities {
}

export function dataNetskopeNpaRulesListDataRuleDataPrivateAppsWithActivitiesActivitiesToTerraform(struct?: DataNetskopeNpaRulesListDataRuleDataPrivateAppsWithActivitiesActivities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaRulesListDataRuleDataPrivateAppsWithActivitiesActivitiesToHclTerraform(struct?: DataNetskopeNpaRulesListDataRuleDataPrivateAppsWithActivitiesActivities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaRulesListDataRuleDataPrivateAppsWithActivitiesActivitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopeNpaRulesListDataRuleDataPrivateAppsWithActivitiesActivities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaRulesListDataRuleDataPrivateAppsWithActivitiesActivities | undefined) {
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

export class DataNetskopeNpaRulesListDataRuleDataPrivateAppsWithActivitiesActivitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataNetskopeNpaRulesListDataRuleDataPrivateAppsWithActivitiesActivitiesOutputReference {
    return new DataNetskopeNpaRulesListDataRuleDataPrivateAppsWithActivitiesActivitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetskopeNpaRulesListDataRuleDataPrivateAppsWithActivities {
}

export function dataNetskopeNpaRulesListDataRuleDataPrivateAppsWithActivitiesToTerraform(struct?: DataNetskopeNpaRulesListDataRuleDataPrivateAppsWithActivities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaRulesListDataRuleDataPrivateAppsWithActivitiesToHclTerraform(struct?: DataNetskopeNpaRulesListDataRuleDataPrivateAppsWithActivities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaRulesListDataRuleDataPrivateAppsWithActivitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopeNpaRulesListDataRuleDataPrivateAppsWithActivities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaRulesListDataRuleDataPrivateAppsWithActivities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activities - computed: true, optional: false, required: false
  private _activities = new DataNetskopeNpaRulesListDataRuleDataPrivateAppsWithActivitiesActivitiesList(this, "activities", false);
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

export class DataNetskopeNpaRulesListDataRuleDataPrivateAppsWithActivitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataNetskopeNpaRulesListDataRuleDataPrivateAppsWithActivitiesOutputReference {
    return new DataNetskopeNpaRulesListDataRuleDataPrivateAppsWithActivitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetskopeNpaRulesListDataRuleDataTssActionsActions {
}

export function dataNetskopeNpaRulesListDataRuleDataTssActionsActionsToTerraform(struct?: DataNetskopeNpaRulesListDataRuleDataTssActionsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaRulesListDataRuleDataTssActionsActionsToHclTerraform(struct?: DataNetskopeNpaRulesListDataRuleDataTssActionsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaRulesListDataRuleDataTssActionsActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopeNpaRulesListDataRuleDataTssActionsActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaRulesListDataRuleDataTssActionsActions | undefined) {
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

export class DataNetskopeNpaRulesListDataRuleDataTssActionsActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataNetskopeNpaRulesListDataRuleDataTssActionsActionsOutputReference {
    return new DataNetskopeNpaRulesListDataRuleDataTssActionsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetskopeNpaRulesListDataRuleDataTssActions {
}

export function dataNetskopeNpaRulesListDataRuleDataTssActionsToTerraform(struct?: DataNetskopeNpaRulesListDataRuleDataTssActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaRulesListDataRuleDataTssActionsToHclTerraform(struct?: DataNetskopeNpaRulesListDataRuleDataTssActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaRulesListDataRuleDataTssActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopeNpaRulesListDataRuleDataTssActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaRulesListDataRuleDataTssActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataNetskopeNpaRulesListDataRuleDataTssActionsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // tss_profile - computed: true, optional: false, required: false
  public get tssProfile() {
    return this.getListAttribute('tss_profile');
  }
}

export class DataNetskopeNpaRulesListDataRuleDataTssActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataNetskopeNpaRulesListDataRuleDataTssActionsOutputReference {
    return new DataNetskopeNpaRulesListDataRuleDataTssActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetskopeNpaRulesListDataRuleData {
}

export function dataNetskopeNpaRulesListDataRuleDataToTerraform(struct?: DataNetskopeNpaRulesListDataRuleData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaRulesListDataRuleDataToHclTerraform(struct?: DataNetskopeNpaRulesListDataRuleData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaRulesListDataRuleDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNetskopeNpaRulesListDataRuleData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaRulesListDataRuleData | undefined) {
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
  private _dlpActions = new DataNetskopeNpaRulesListDataRuleDataDlpActionsList(this, "dlp_actions", false);
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
  private _matchCriteriaAction = new DataNetskopeNpaRulesListDataRuleDataMatchCriteriaActionOutputReference(this, "match_criteria_action");
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
  private _privateAppsWithActivities = new DataNetskopeNpaRulesListDataRuleDataPrivateAppsWithActivitiesList(this, "private_apps_with_activities", false);
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
  private _tssActions = new DataNetskopeNpaRulesListDataRuleDataTssActionsList(this, "tss_actions", false);
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
export interface DataNetskopeNpaRulesListData {
}

export function dataNetskopeNpaRulesListDataToTerraform(struct?: DataNetskopeNpaRulesListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetskopeNpaRulesListDataToHclTerraform(struct?: DataNetskopeNpaRulesListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetskopeNpaRulesListDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetskopeNpaRulesListData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetskopeNpaRulesListData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getStringAttribute('enabled');
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
  private _ruleData = new DataNetskopeNpaRulesListDataRuleDataOutputReference(this, "rule_data");
  public get ruleData() {
    return this._ruleData;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
}

export class DataNetskopeNpaRulesListDataList extends cdktf.ComplexList {

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
  public get(index: number): DataNetskopeNpaRulesListDataOutputReference {
    return new DataNetskopeNpaRulesListDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_rules_list netskope_npa_rules_list}
*/
export class DataNetskopeNpaRulesList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netskope_npa_rules_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetskopeNpaRulesList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetskopeNpaRulesList to import
  * @param importFromId The id of the existing DataNetskopeNpaRulesList that should be imported. Refer to the {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_rules_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetskopeNpaRulesList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netskope_npa_rules_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/data-sources/npa_rules_list netskope_npa_rules_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetskopeNpaRulesListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNetskopeNpaRulesListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netskope_npa_rules_list',
      terraformGeneratorMetadata: {
        providerName: 'netskope',
        providerVersion: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter = config.filter;
    this._limit = config.limit;
    this._offset = config.offset;
    this._sortby = config.sortby;
    this._sortorder = config.sortorder;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataNetskopeNpaRulesListDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // sortby - computed: false, optional: true, required: false
  private _sortby?: string; 
  public get sortby() {
    return this.getStringAttribute('sortby');
  }
  public set sortby(value: string) {
    this._sortby = value;
  }
  public resetSortby() {
    this._sortby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortbyInput() {
    return this._sortby;
  }

  // sortorder - computed: false, optional: true, required: false
  private _sortorder?: string; 
  public get sortorder() {
    return this.getStringAttribute('sortorder');
  }
  public set sortorder(value: string) {
    this._sortorder = value;
  }
  public resetSortorder() {
    this._sortorder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortorderInput() {
    return this._sortorder;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      limit: cdktf.numberToTerraform(this._limit),
      offset: cdktf.numberToTerraform(this._offset),
      sortby: cdktf.stringToTerraform(this._sortby),
      sortorder: cdktf.stringToTerraform(this._sortorder),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sortby: {
        value: cdktf.stringToHclTerraform(this._sortby),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sortorder: {
        value: cdktf.stringToHclTerraform(this._sortorder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
