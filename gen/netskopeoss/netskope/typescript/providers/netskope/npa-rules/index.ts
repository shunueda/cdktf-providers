// https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NpaRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#description NpaRules#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#enabled NpaRules#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#group_id NpaRules#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#group_name NpaRules#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#rule_data NpaRules#rule_data}
  */
  readonly ruleData?: NpaRulesRuleData;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#rule_name NpaRules#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#rule_order NpaRules#rule_order}
  */
  readonly ruleOrder?: NpaRulesRuleOrder;
  /**
  * flag to skip output except status code. must be one of ["1", "0"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#silent NpaRules#silent}
  */
  readonly silent?: string;
}
export interface NpaRulesRuleDataDlpActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#actions NpaRules#actions}
  */
  readonly actions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#dlp_profile NpaRules#dlp_profile}
  */
  readonly dlpProfile?: string;
}

export function npaRulesRuleDataDlpActionsToTerraform(struct?: NpaRulesRuleDataDlpActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    dlp_profile: cdktf.stringToTerraform(struct!.dlpProfile),
  }
}


export function npaRulesRuleDataDlpActionsToHclTerraform(struct?: NpaRulesRuleDataDlpActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dlp_profile: {
      value: cdktf.stringToHclTerraform(struct!.dlpProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NpaRulesRuleDataDlpActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NpaRulesRuleDataDlpActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._dlpProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.dlpProfile = this._dlpProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaRulesRuleDataDlpActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._dlpProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._dlpProfile = value.dlpProfile;
    }
  }

  // actions - computed: true, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // dlp_profile - computed: true, optional: true, required: false
  private _dlpProfile?: string; 
  public get dlpProfile() {
    return this.getStringAttribute('dlp_profile');
  }
  public set dlpProfile(value: string) {
    this._dlpProfile = value;
  }
  public resetDlpProfile() {
    this._dlpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpProfileInput() {
    return this._dlpProfile;
  }
}

export class NpaRulesRuleDataDlpActionsList extends cdktf.ComplexList {
  public internalValue? : NpaRulesRuleDataDlpActions[] | cdktf.IResolvable

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
  public get(index: number): NpaRulesRuleDataDlpActionsOutputReference {
    return new NpaRulesRuleDataDlpActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NpaRulesRuleDataMatchCriteriaAction {
  /**
  * must be one of ["allow", "block"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#action_name NpaRules#action_name}
  */
  readonly actionName?: string;
}

export function npaRulesRuleDataMatchCriteriaActionToTerraform(struct?: NpaRulesRuleDataMatchCriteriaAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_name: cdktf.stringToTerraform(struct!.actionName),
  }
}


export function npaRulesRuleDataMatchCriteriaActionToHclTerraform(struct?: NpaRulesRuleDataMatchCriteriaAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_name: {
      value: cdktf.stringToHclTerraform(struct!.actionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NpaRulesRuleDataMatchCriteriaActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaRulesRuleDataMatchCriteriaAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionName = this._actionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaRulesRuleDataMatchCriteriaAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionName = value.actionName;
    }
  }

  // action_name - computed: true, optional: true, required: false
  private _actionName?: string; 
  public get actionName() {
    return this.getStringAttribute('action_name');
  }
  public set actionName(value: string) {
    this._actionName = value;
  }
  public resetActionName() {
    this._actionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionNameInput() {
    return this._actionName;
  }
}
export interface NpaRulesRuleDataPrivateAppsWithActivitiesActivities {
  /**
  * must be "any"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#activity NpaRules#activity}
  */
  readonly activity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#list_of_constraints NpaRules#list_of_constraints}
  */
  readonly listOfConstraints?: string[];
}

export function npaRulesRuleDataPrivateAppsWithActivitiesActivitiesToTerraform(struct?: NpaRulesRuleDataPrivateAppsWithActivitiesActivities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activity: cdktf.stringToTerraform(struct!.activity),
    list_of_constraints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.listOfConstraints),
  }
}


export function npaRulesRuleDataPrivateAppsWithActivitiesActivitiesToHclTerraform(struct?: NpaRulesRuleDataPrivateAppsWithActivitiesActivities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activity: {
      value: cdktf.stringToHclTerraform(struct!.activity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    list_of_constraints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.listOfConstraints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NpaRulesRuleDataPrivateAppsWithActivitiesActivitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NpaRulesRuleDataPrivateAppsWithActivitiesActivities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activity !== undefined) {
      hasAnyValues = true;
      internalValueResult.activity = this._activity;
    }
    if (this._listOfConstraints !== undefined) {
      hasAnyValues = true;
      internalValueResult.listOfConstraints = this._listOfConstraints;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaRulesRuleDataPrivateAppsWithActivitiesActivities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activity = undefined;
      this._listOfConstraints = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activity = value.activity;
      this._listOfConstraints = value.listOfConstraints;
    }
  }

  // activity - computed: true, optional: true, required: false
  private _activity?: string; 
  public get activity() {
    return this.getStringAttribute('activity');
  }
  public set activity(value: string) {
    this._activity = value;
  }
  public resetActivity() {
    this._activity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activityInput() {
    return this._activity;
  }

  // list_of_constraints - computed: true, optional: true, required: false
  private _listOfConstraints?: string[]; 
  public get listOfConstraints() {
    return this.getListAttribute('list_of_constraints');
  }
  public set listOfConstraints(value: string[]) {
    this._listOfConstraints = value;
  }
  public resetListOfConstraints() {
    this._listOfConstraints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listOfConstraintsInput() {
    return this._listOfConstraints;
  }
}

export class NpaRulesRuleDataPrivateAppsWithActivitiesActivitiesList extends cdktf.ComplexList {
  public internalValue? : NpaRulesRuleDataPrivateAppsWithActivitiesActivities[] | cdktf.IResolvable

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
  public get(index: number): NpaRulesRuleDataPrivateAppsWithActivitiesActivitiesOutputReference {
    return new NpaRulesRuleDataPrivateAppsWithActivitiesActivitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NpaRulesRuleDataPrivateAppsWithActivities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#activities NpaRules#activities}
  */
  readonly activities?: NpaRulesRuleDataPrivateAppsWithActivitiesActivities[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#app_id NpaRules#app_id}
  */
  readonly appId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#app_name NpaRules#app_name}
  */
  readonly appName?: string;
}

export function npaRulesRuleDataPrivateAppsWithActivitiesToTerraform(struct?: NpaRulesRuleDataPrivateAppsWithActivities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activities: cdktf.listMapper(npaRulesRuleDataPrivateAppsWithActivitiesActivitiesToTerraform, false)(struct!.activities),
    app_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.appId),
    app_name: cdktf.stringToTerraform(struct!.appName),
  }
}


export function npaRulesRuleDataPrivateAppsWithActivitiesToHclTerraform(struct?: NpaRulesRuleDataPrivateAppsWithActivities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activities: {
      value: cdktf.listMapperHcl(npaRulesRuleDataPrivateAppsWithActivitiesActivitiesToHclTerraform, false)(struct!.activities),
      isBlock: true,
      type: "list",
      storageClassType: "NpaRulesRuleDataPrivateAppsWithActivitiesActivitiesList",
    },
    app_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.appId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    app_name: {
      value: cdktf.stringToHclTerraform(struct!.appName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NpaRulesRuleDataPrivateAppsWithActivitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NpaRulesRuleDataPrivateAppsWithActivities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activities = this._activities?.internalValue;
    }
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._appName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appName = this._appName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaRulesRuleDataPrivateAppsWithActivities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activities.internalValue = undefined;
      this._appId = undefined;
      this._appName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activities.internalValue = value.activities;
      this._appId = value.appId;
      this._appName = value.appName;
    }
  }

  // activities - computed: true, optional: true, required: false
  private _activities = new NpaRulesRuleDataPrivateAppsWithActivitiesActivitiesList(this, "activities", false);
  public get activities() {
    return this._activities;
  }
  public putActivities(value: NpaRulesRuleDataPrivateAppsWithActivitiesActivities[] | cdktf.IResolvable) {
    this._activities.internalValue = value;
  }
  public resetActivities() {
    this._activities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activitiesInput() {
    return this._activities.internalValue;
  }

  // app_id - computed: true, optional: true, required: false
  private _appId?: string[]; 
  public get appId() {
    return this.getListAttribute('app_id');
  }
  public set appId(value: string[]) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // app_name - computed: true, optional: true, required: false
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  public resetAppName() {
    this._appName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }
}

export class NpaRulesRuleDataPrivateAppsWithActivitiesList extends cdktf.ComplexList {
  public internalValue? : NpaRulesRuleDataPrivateAppsWithActivities[] | cdktf.IResolvable

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
  public get(index: number): NpaRulesRuleDataPrivateAppsWithActivitiesOutputReference {
    return new NpaRulesRuleDataPrivateAppsWithActivitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NpaRulesRuleDataTssActionsActions {
  /**
  * must be one of ["block", "alert", "allow"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#action_name NpaRules#action_name}
  */
  readonly actionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#remediation_profile NpaRules#remediation_profile}
  */
  readonly remediationProfile?: string;
  /**
  * must be one of ["low", "medium", "high"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#severity NpaRules#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#template NpaRules#template}
  */
  readonly template?: string;
}

export function npaRulesRuleDataTssActionsActionsToTerraform(struct?: NpaRulesRuleDataTssActionsActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_name: cdktf.stringToTerraform(struct!.actionName),
    remediation_profile: cdktf.stringToTerraform(struct!.remediationProfile),
    severity: cdktf.stringToTerraform(struct!.severity),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function npaRulesRuleDataTssActionsActionsToHclTerraform(struct?: NpaRulesRuleDataTssActionsActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_name: {
      value: cdktf.stringToHclTerraform(struct!.actionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remediation_profile: {
      value: cdktf.stringToHclTerraform(struct!.remediationProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NpaRulesRuleDataTssActionsActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NpaRulesRuleDataTssActionsActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionName = this._actionName;
    }
    if (this._remediationProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.remediationProfile = this._remediationProfile;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaRulesRuleDataTssActionsActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionName = undefined;
      this._remediationProfile = undefined;
      this._severity = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionName = value.actionName;
      this._remediationProfile = value.remediationProfile;
      this._severity = value.severity;
      this._template = value.template;
    }
  }

  // action_name - computed: true, optional: true, required: false
  private _actionName?: string; 
  public get actionName() {
    return this.getStringAttribute('action_name');
  }
  public set actionName(value: string) {
    this._actionName = value;
  }
  public resetActionName() {
    this._actionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionNameInput() {
    return this._actionName;
  }

  // remediation_profile - computed: true, optional: true, required: false
  private _remediationProfile?: string; 
  public get remediationProfile() {
    return this.getStringAttribute('remediation_profile');
  }
  public set remediationProfile(value: string) {
    this._remediationProfile = value;
  }
  public resetRemediationProfile() {
    this._remediationProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationProfileInput() {
    return this._remediationProfile;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // template - computed: true, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}

export class NpaRulesRuleDataTssActionsActionsList extends cdktf.ComplexList {
  public internalValue? : NpaRulesRuleDataTssActionsActions[] | cdktf.IResolvable

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
  public get(index: number): NpaRulesRuleDataTssActionsActionsOutputReference {
    return new NpaRulesRuleDataTssActionsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NpaRulesRuleDataTssActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#actions NpaRules#actions}
  */
  readonly actions?: NpaRulesRuleDataTssActionsActions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#tss_profile NpaRules#tss_profile}
  */
  readonly tssProfile?: string[];
}

export function npaRulesRuleDataTssActionsToTerraform(struct?: NpaRulesRuleDataTssActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(npaRulesRuleDataTssActionsActionsToTerraform, false)(struct!.actions),
    tss_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tssProfile),
  }
}


export function npaRulesRuleDataTssActionsToHclTerraform(struct?: NpaRulesRuleDataTssActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(npaRulesRuleDataTssActionsActionsToHclTerraform, false)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "NpaRulesRuleDataTssActionsActionsList",
    },
    tss_profile: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tssProfile),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NpaRulesRuleDataTssActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NpaRulesRuleDataTssActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._tssProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.tssProfile = this._tssProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaRulesRuleDataTssActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions.internalValue = undefined;
      this._tssProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions.internalValue = value.actions;
      this._tssProfile = value.tssProfile;
    }
  }

  // actions - computed: true, optional: true, required: false
  private _actions = new NpaRulesRuleDataTssActionsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: NpaRulesRuleDataTssActionsActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // tss_profile - computed: true, optional: true, required: false
  private _tssProfile?: string[]; 
  public get tssProfile() {
    return this.getListAttribute('tss_profile');
  }
  public set tssProfile(value: string[]) {
    this._tssProfile = value;
  }
  public resetTssProfile() {
    this._tssProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tssProfileInput() {
    return this._tssProfile;
  }
}

export class NpaRulesRuleDataTssActionsList extends cdktf.ComplexList {
  public internalValue? : NpaRulesRuleDataTssActions[] | cdktf.IResolvable

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
  public get(index: number): NpaRulesRuleDataTssActionsOutputReference {
    return new NpaRulesRuleDataTssActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NpaRulesRuleData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#access_method NpaRules#access_method}
  */
  readonly accessMethod?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#b_negate_net_location NpaRules#b_negate_net_location}
  */
  readonly bNegateNetLocation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#b_negate_src_countries NpaRules#b_negate_src_countries}
  */
  readonly bNegateSrcCountries?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#classification NpaRules#classification}
  */
  readonly classification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#device_classification_id NpaRules#device_classification_id}
  */
  readonly deviceClassificationId?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#dlp_actions NpaRules#dlp_actions}
  */
  readonly dlpActions?: NpaRulesRuleDataDlpActions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#external_dlp NpaRules#external_dlp}
  */
  readonly externalDlp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#json_version NpaRules#json_version}
  */
  readonly jsonVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#match_criteria_action NpaRules#match_criteria_action}
  */
  readonly matchCriteriaAction?: NpaRulesRuleDataMatchCriteriaAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#net_location_obj NpaRules#net_location_obj}
  */
  readonly netLocationObj?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#organization_units NpaRules#organization_units}
  */
  readonly organizationUnits?: string[];
  /**
  * must be "private-app"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#policy_type NpaRules#policy_type}
  */
  readonly policyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#private_app_tag_ids NpaRules#private_app_tag_ids}
  */
  readonly privateAppTagIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#private_app_tags NpaRules#private_app_tags}
  */
  readonly privateAppTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#private_apps NpaRules#private_apps}
  */
  readonly privateApps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#private_apps_with_activities NpaRules#private_apps_with_activities}
  */
  readonly privateAppsWithActivities?: NpaRulesRuleDataPrivateAppsWithActivities[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#show_dlp_profile_action_table NpaRules#show_dlp_profile_action_table}
  */
  readonly showDlpProfileActionTable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#src_countries NpaRules#src_countries}
  */
  readonly srcCountries?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#tss_actions NpaRules#tss_actions}
  */
  readonly tssActions?: NpaRulesRuleDataTssActions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#tss_profile NpaRules#tss_profile}
  */
  readonly tssProfile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#user_groups NpaRules#user_groups}
  */
  readonly userGroups?: string[];
  /**
  * must be "user"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#user_type NpaRules#user_type}
  */
  readonly userType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#users NpaRules#users}
  */
  readonly users?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#version NpaRules#version}
  */
  readonly version?: number;
}

export function npaRulesRuleDataToTerraform(struct?: NpaRulesRuleData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_method: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessMethod),
    b_negate_net_location: cdktf.booleanToTerraform(struct!.bNegateNetLocation),
    b_negate_src_countries: cdktf.booleanToTerraform(struct!.bNegateSrcCountries),
    classification: cdktf.stringToTerraform(struct!.classification),
    device_classification_id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.deviceClassificationId),
    dlp_actions: cdktf.listMapper(npaRulesRuleDataDlpActionsToTerraform, false)(struct!.dlpActions),
    external_dlp: cdktf.booleanToTerraform(struct!.externalDlp),
    json_version: cdktf.numberToTerraform(struct!.jsonVersion),
    match_criteria_action: npaRulesRuleDataMatchCriteriaActionToTerraform(struct!.matchCriteriaAction),
    net_location_obj: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.netLocationObj),
    organization_units: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.organizationUnits),
    policy_type: cdktf.stringToTerraform(struct!.policyType),
    private_app_tag_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privateAppTagIds),
    private_app_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privateAppTags),
    private_apps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privateApps),
    private_apps_with_activities: cdktf.listMapper(npaRulesRuleDataPrivateAppsWithActivitiesToTerraform, false)(struct!.privateAppsWithActivities),
    show_dlp_profile_action_table: cdktf.booleanToTerraform(struct!.showDlpProfileActionTable),
    src_countries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcCountries),
    tss_actions: cdktf.listMapper(npaRulesRuleDataTssActionsToTerraform, false)(struct!.tssActions),
    tss_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tssProfile),
    user_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userGroups),
    user_type: cdktf.stringToTerraform(struct!.userType),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function npaRulesRuleDataToHclTerraform(struct?: NpaRulesRuleData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_method: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessMethod),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    b_negate_net_location: {
      value: cdktf.booleanToHclTerraform(struct!.bNegateNetLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    b_negate_src_countries: {
      value: cdktf.booleanToHclTerraform(struct!.bNegateSrcCountries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    classification: {
      value: cdktf.stringToHclTerraform(struct!.classification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_classification_id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.deviceClassificationId),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    dlp_actions: {
      value: cdktf.listMapperHcl(npaRulesRuleDataDlpActionsToHclTerraform, false)(struct!.dlpActions),
      isBlock: true,
      type: "list",
      storageClassType: "NpaRulesRuleDataDlpActionsList",
    },
    external_dlp: {
      value: cdktf.booleanToHclTerraform(struct!.externalDlp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    json_version: {
      value: cdktf.numberToHclTerraform(struct!.jsonVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_criteria_action: {
      value: npaRulesRuleDataMatchCriteriaActionToHclTerraform(struct!.matchCriteriaAction),
      isBlock: true,
      type: "struct",
      storageClassType: "NpaRulesRuleDataMatchCriteriaAction",
    },
    net_location_obj: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.netLocationObj),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    organization_units: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.organizationUnits),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    policy_type: {
      value: cdktf.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_app_tag_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.privateAppTagIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    private_app_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.privateAppTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    private_apps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.privateApps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    private_apps_with_activities: {
      value: cdktf.listMapperHcl(npaRulesRuleDataPrivateAppsWithActivitiesToHclTerraform, false)(struct!.privateAppsWithActivities),
      isBlock: true,
      type: "list",
      storageClassType: "NpaRulesRuleDataPrivateAppsWithActivitiesList",
    },
    show_dlp_profile_action_table: {
      value: cdktf.booleanToHclTerraform(struct!.showDlpProfileActionTable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    src_countries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcCountries),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tss_actions: {
      value: cdktf.listMapperHcl(npaRulesRuleDataTssActionsToHclTerraform, false)(struct!.tssActions),
      isBlock: true,
      type: "list",
      storageClassType: "NpaRulesRuleDataTssActionsList",
    },
    tss_profile: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tssProfile),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_type: {
      value: cdktf.stringToHclTerraform(struct!.userType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.users),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NpaRulesRuleDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaRulesRuleData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessMethod = this._accessMethod;
    }
    if (this._bNegateNetLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.bNegateNetLocation = this._bNegateNetLocation;
    }
    if (this._bNegateSrcCountries !== undefined) {
      hasAnyValues = true;
      internalValueResult.bNegateSrcCountries = this._bNegateSrcCountries;
    }
    if (this._classification !== undefined) {
      hasAnyValues = true;
      internalValueResult.classification = this._classification;
    }
    if (this._deviceClassificationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceClassificationId = this._deviceClassificationId;
    }
    if (this._dlpActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dlpActions = this._dlpActions?.internalValue;
    }
    if (this._externalDlp !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalDlp = this._externalDlp;
    }
    if (this._jsonVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonVersion = this._jsonVersion;
    }
    if (this._matchCriteriaAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteriaAction = this._matchCriteriaAction?.internalValue;
    }
    if (this._netLocationObj !== undefined) {
      hasAnyValues = true;
      internalValueResult.netLocationObj = this._netLocationObj;
    }
    if (this._organizationUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationUnits = this._organizationUnits;
    }
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    if (this._privateAppTagIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAppTagIds = this._privateAppTagIds;
    }
    if (this._privateAppTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAppTags = this._privateAppTags;
    }
    if (this._privateApps !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateApps = this._privateApps;
    }
    if (this._privateAppsWithActivities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAppsWithActivities = this._privateAppsWithActivities?.internalValue;
    }
    if (this._showDlpProfileActionTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDlpProfileActionTable = this._showDlpProfileActionTable;
    }
    if (this._srcCountries !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcCountries = this._srcCountries;
    }
    if (this._tssActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tssActions = this._tssActions?.internalValue;
    }
    if (this._tssProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.tssProfile = this._tssProfile;
    }
    if (this._userGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroups = this._userGroups;
    }
    if (this._userType !== undefined) {
      hasAnyValues = true;
      internalValueResult.userType = this._userType;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaRulesRuleData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessMethod = undefined;
      this._bNegateNetLocation = undefined;
      this._bNegateSrcCountries = undefined;
      this._classification = undefined;
      this._deviceClassificationId = undefined;
      this._dlpActions.internalValue = undefined;
      this._externalDlp = undefined;
      this._jsonVersion = undefined;
      this._matchCriteriaAction.internalValue = undefined;
      this._netLocationObj = undefined;
      this._organizationUnits = undefined;
      this._policyType = undefined;
      this._privateAppTagIds = undefined;
      this._privateAppTags = undefined;
      this._privateApps = undefined;
      this._privateAppsWithActivities.internalValue = undefined;
      this._showDlpProfileActionTable = undefined;
      this._srcCountries = undefined;
      this._tssActions.internalValue = undefined;
      this._tssProfile = undefined;
      this._userGroups = undefined;
      this._userType = undefined;
      this._users = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessMethod = value.accessMethod;
      this._bNegateNetLocation = value.bNegateNetLocation;
      this._bNegateSrcCountries = value.bNegateSrcCountries;
      this._classification = value.classification;
      this._deviceClassificationId = value.deviceClassificationId;
      this._dlpActions.internalValue = value.dlpActions;
      this._externalDlp = value.externalDlp;
      this._jsonVersion = value.jsonVersion;
      this._matchCriteriaAction.internalValue = value.matchCriteriaAction;
      this._netLocationObj = value.netLocationObj;
      this._organizationUnits = value.organizationUnits;
      this._policyType = value.policyType;
      this._privateAppTagIds = value.privateAppTagIds;
      this._privateAppTags = value.privateAppTags;
      this._privateApps = value.privateApps;
      this._privateAppsWithActivities.internalValue = value.privateAppsWithActivities;
      this._showDlpProfileActionTable = value.showDlpProfileActionTable;
      this._srcCountries = value.srcCountries;
      this._tssActions.internalValue = value.tssActions;
      this._tssProfile = value.tssProfile;
      this._userGroups = value.userGroups;
      this._userType = value.userType;
      this._users = value.users;
      this._version = value.version;
    }
  }

  // access_method - computed: true, optional: true, required: false
  private _accessMethod?: string[]; 
  public get accessMethod() {
    return this.getListAttribute('access_method');
  }
  public set accessMethod(value: string[]) {
    this._accessMethod = value;
  }
  public resetAccessMethod() {
    this._accessMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessMethodInput() {
    return this._accessMethod;
  }

  // b_negate_net_location - computed: true, optional: true, required: false
  private _bNegateNetLocation?: boolean | cdktf.IResolvable; 
  public get bNegateNetLocation() {
    return this.getBooleanAttribute('b_negate_net_location');
  }
  public set bNegateNetLocation(value: boolean | cdktf.IResolvable) {
    this._bNegateNetLocation = value;
  }
  public resetBNegateNetLocation() {
    this._bNegateNetLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bNegateNetLocationInput() {
    return this._bNegateNetLocation;
  }

  // b_negate_src_countries - computed: true, optional: true, required: false
  private _bNegateSrcCountries?: boolean | cdktf.IResolvable; 
  public get bNegateSrcCountries() {
    return this.getBooleanAttribute('b_negate_src_countries');
  }
  public set bNegateSrcCountries(value: boolean | cdktf.IResolvable) {
    this._bNegateSrcCountries = value;
  }
  public resetBNegateSrcCountries() {
    this._bNegateSrcCountries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bNegateSrcCountriesInput() {
    return this._bNegateSrcCountries;
  }

  // classification - computed: true, optional: true, required: false
  private _classification?: string; 
  public get classification() {
    return this.getStringAttribute('classification');
  }
  public set classification(value: string) {
    this._classification = value;
  }
  public resetClassification() {
    this._classification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationInput() {
    return this._classification;
  }

  // device_classification_id - computed: true, optional: true, required: false
  private _deviceClassificationId?: number[]; 
  public get deviceClassificationId() {
    return this.getNumberListAttribute('device_classification_id');
  }
  public set deviceClassificationId(value: number[]) {
    this._deviceClassificationId = value;
  }
  public resetDeviceClassificationId() {
    this._deviceClassificationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceClassificationIdInput() {
    return this._deviceClassificationId;
  }

  // dlp_actions - computed: true, optional: true, required: false
  private _dlpActions = new NpaRulesRuleDataDlpActionsList(this, "dlp_actions", false);
  public get dlpActions() {
    return this._dlpActions;
  }
  public putDlpActions(value: NpaRulesRuleDataDlpActions[] | cdktf.IResolvable) {
    this._dlpActions.internalValue = value;
  }
  public resetDlpActions() {
    this._dlpActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpActionsInput() {
    return this._dlpActions.internalValue;
  }

  // external_dlp - computed: true, optional: true, required: false
  private _externalDlp?: boolean | cdktf.IResolvable; 
  public get externalDlp() {
    return this.getBooleanAttribute('external_dlp');
  }
  public set externalDlp(value: boolean | cdktf.IResolvable) {
    this._externalDlp = value;
  }
  public resetExternalDlp() {
    this._externalDlp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDlpInput() {
    return this._externalDlp;
  }

  // json_version - computed: true, optional: true, required: false
  private _jsonVersion?: number; 
  public get jsonVersion() {
    return this.getNumberAttribute('json_version');
  }
  public set jsonVersion(value: number) {
    this._jsonVersion = value;
  }
  public resetJsonVersion() {
    this._jsonVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonVersionInput() {
    return this._jsonVersion;
  }

  // match_criteria_action - computed: true, optional: true, required: false
  private _matchCriteriaAction = new NpaRulesRuleDataMatchCriteriaActionOutputReference(this, "match_criteria_action");
  public get matchCriteriaAction() {
    return this._matchCriteriaAction;
  }
  public putMatchCriteriaAction(value: NpaRulesRuleDataMatchCriteriaAction) {
    this._matchCriteriaAction.internalValue = value;
  }
  public resetMatchCriteriaAction() {
    this._matchCriteriaAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaActionInput() {
    return this._matchCriteriaAction.internalValue;
  }

  // net_location_obj - computed: true, optional: true, required: false
  private _netLocationObj?: string[]; 
  public get netLocationObj() {
    return this.getListAttribute('net_location_obj');
  }
  public set netLocationObj(value: string[]) {
    this._netLocationObj = value;
  }
  public resetNetLocationObj() {
    this._netLocationObj = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netLocationObjInput() {
    return this._netLocationObj;
  }

  // organization_units - computed: true, optional: true, required: false
  private _organizationUnits?: string[]; 
  public get organizationUnits() {
    return this.getListAttribute('organization_units');
  }
  public set organizationUnits(value: string[]) {
    this._organizationUnits = value;
  }
  public resetOrganizationUnits() {
    this._organizationUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationUnitsInput() {
    return this._organizationUnits;
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

  // private_app_tag_ids - computed: true, optional: true, required: false
  private _privateAppTagIds?: string[]; 
  public get privateAppTagIds() {
    return this.getListAttribute('private_app_tag_ids');
  }
  public set privateAppTagIds(value: string[]) {
    this._privateAppTagIds = value;
  }
  public resetPrivateAppTagIds() {
    this._privateAppTagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAppTagIdsInput() {
    return this._privateAppTagIds;
  }

  // private_app_tags - computed: true, optional: true, required: false
  private _privateAppTags?: string[]; 
  public get privateAppTags() {
    return this.getListAttribute('private_app_tags');
  }
  public set privateAppTags(value: string[]) {
    this._privateAppTags = value;
  }
  public resetPrivateAppTags() {
    this._privateAppTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAppTagsInput() {
    return this._privateAppTags;
  }

  // private_apps - computed: true, optional: true, required: false
  private _privateApps?: string[]; 
  public get privateApps() {
    return this.getListAttribute('private_apps');
  }
  public set privateApps(value: string[]) {
    this._privateApps = value;
  }
  public resetPrivateApps() {
    this._privateApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAppsInput() {
    return this._privateApps;
  }

  // private_apps_with_activities - computed: true, optional: true, required: false
  private _privateAppsWithActivities = new NpaRulesRuleDataPrivateAppsWithActivitiesList(this, "private_apps_with_activities", false);
  public get privateAppsWithActivities() {
    return this._privateAppsWithActivities;
  }
  public putPrivateAppsWithActivities(value: NpaRulesRuleDataPrivateAppsWithActivities[] | cdktf.IResolvable) {
    this._privateAppsWithActivities.internalValue = value;
  }
  public resetPrivateAppsWithActivities() {
    this._privateAppsWithActivities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAppsWithActivitiesInput() {
    return this._privateAppsWithActivities.internalValue;
  }

  // show_dlp_profile_action_table - computed: true, optional: true, required: false
  private _showDlpProfileActionTable?: boolean | cdktf.IResolvable; 
  public get showDlpProfileActionTable() {
    return this.getBooleanAttribute('show_dlp_profile_action_table');
  }
  public set showDlpProfileActionTable(value: boolean | cdktf.IResolvable) {
    this._showDlpProfileActionTable = value;
  }
  public resetShowDlpProfileActionTable() {
    this._showDlpProfileActionTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDlpProfileActionTableInput() {
    return this._showDlpProfileActionTable;
  }

  // src_countries - computed: true, optional: true, required: false
  private _srcCountries?: string[]; 
  public get srcCountries() {
    return this.getListAttribute('src_countries');
  }
  public set srcCountries(value: string[]) {
    this._srcCountries = value;
  }
  public resetSrcCountries() {
    this._srcCountries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCountriesInput() {
    return this._srcCountries;
  }

  // tss_actions - computed: true, optional: true, required: false
  private _tssActions = new NpaRulesRuleDataTssActionsList(this, "tss_actions", false);
  public get tssActions() {
    return this._tssActions;
  }
  public putTssActions(value: NpaRulesRuleDataTssActions[] | cdktf.IResolvable) {
    this._tssActions.internalValue = value;
  }
  public resetTssActions() {
    this._tssActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tssActionsInput() {
    return this._tssActions.internalValue;
  }

  // tss_profile - computed: true, optional: true, required: false
  private _tssProfile?: string[]; 
  public get tssProfile() {
    return this.getListAttribute('tss_profile');
  }
  public set tssProfile(value: string[]) {
    this._tssProfile = value;
  }
  public resetTssProfile() {
    this._tssProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tssProfileInput() {
    return this._tssProfile;
  }

  // user_groups - computed: true, optional: true, required: false
  private _userGroups?: string[]; 
  public get userGroups() {
    return this.getListAttribute('user_groups');
  }
  public set userGroups(value: string[]) {
    this._userGroups = value;
  }
  public resetUserGroups() {
    this._userGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupsInput() {
    return this._userGroups;
  }

  // user_type - computed: true, optional: true, required: false
  private _userType?: string; 
  public get userType() {
    return this.getStringAttribute('user_type');
  }
  public set userType(value: string) {
    this._userType = value;
  }
  public resetUserType() {
    this._userType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypeInput() {
    return this._userType;
  }

  // users - computed: true, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return this.getListAttribute('users');
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface NpaRulesRuleOrder {
  /**
  * must be one of ["top", "bottom", "before", "after"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#order NpaRules#order}
  */
  readonly order?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#position NpaRules#position}
  */
  readonly position?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#rule_id NpaRules#rule_id}
  */
  readonly ruleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#rule_name NpaRules#rule_name}
  */
  readonly ruleName?: string;
}

export function npaRulesRuleOrderToTerraform(struct?: NpaRulesRuleOrder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    order: cdktf.stringToTerraform(struct!.order),
    position: cdktf.numberToTerraform(struct!.position),
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
  }
}


export function npaRulesRuleOrderToHclTerraform(struct?: NpaRulesRuleOrder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    order: {
      value: cdktf.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    position: {
      value: cdktf.numberToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_id: {
      value: cdktf.stringToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NpaRulesRuleOrderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaRulesRuleOrder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaRulesRuleOrder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._order = undefined;
      this._position = undefined;
      this._ruleId = undefined;
      this._ruleName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._order = value.order;
      this._position = value.position;
      this._ruleId = value.ruleId;
      this._ruleName = value.ruleName;
    }
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // position - computed: false, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // rule_id - computed: false, optional: true, required: false
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  public resetRuleId() {
    this._ruleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules netskope_npa_rules}
*/
export class NpaRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netskope_npa_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NpaRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NpaRules to import
  * @param importFromId The id of the existing NpaRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NpaRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netskope_npa_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_rules netskope_npa_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NpaRulesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NpaRulesConfig = {}) {
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
    this._description = config.description;
    this._enabled = config.enabled;
    this._groupId = config.groupId;
    this._groupName = config.groupName;
    this._ruleData.internalValue = config.ruleData;
    this._ruleName = config.ruleName;
    this._ruleOrder.internalValue = config.ruleOrder;
    this._silent = config.silent;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // rule_data - computed: true, optional: true, required: false
  private _ruleData = new NpaRulesRuleDataOutputReference(this, "rule_data");
  public get ruleData() {
    return this._ruleData;
  }
  public putRuleData(value: NpaRulesRuleData) {
    this._ruleData.internalValue = value;
  }
  public resetRuleData() {
    this._ruleData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleDataInput() {
    return this._ruleData.internalValue;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // rule_name - computed: true, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // rule_order - computed: false, optional: true, required: false
  private _ruleOrder = new NpaRulesRuleOrderOutputReference(this, "rule_order");
  public get ruleOrder() {
    return this._ruleOrder;
  }
  public putRuleOrder(value: NpaRulesRuleOrder) {
    this._ruleOrder.internalValue = value;
  }
  public resetRuleOrder() {
    this._ruleOrder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleOrderInput() {
    return this._ruleOrder.internalValue;
  }

  // silent - computed: false, optional: true, required: false
  private _silent?: string; 
  public get silent() {
    return this.getStringAttribute('silent');
  }
  public set silent(value: string) {
    this._silent = value;
  }
  public resetSilent() {
    this._silent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get silentInput() {
    return this._silent;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.stringToTerraform(this._enabled),
      group_id: cdktf.stringToTerraform(this._groupId),
      group_name: cdktf.stringToTerraform(this._groupName),
      rule_data: npaRulesRuleDataToTerraform(this._ruleData.internalValue),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      rule_order: npaRulesRuleOrderToTerraform(this._ruleOrder.internalValue),
      silent: cdktf.stringToTerraform(this._silent),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.stringToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_data: {
        value: npaRulesRuleDataToHclTerraform(this._ruleData.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NpaRulesRuleData",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_order: {
        value: npaRulesRuleOrderToHclTerraform(this._ruleOrder.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NpaRulesRuleOrder",
      },
      silent: {
        value: cdktf.stringToHclTerraform(this._silent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
