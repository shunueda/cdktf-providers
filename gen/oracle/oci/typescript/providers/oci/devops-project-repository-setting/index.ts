// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_project_repository_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevopsProjectRepositorySettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_project_repository_setting#id DevopsProjectRepositorySetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_project_repository_setting#project_id DevopsProjectRepositorySetting#project_id}
  */
  readonly projectId: string;
  /**
  * approval_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_project_repository_setting#approval_rules DevopsProjectRepositorySetting#approval_rules}
  */
  readonly approvalRules?: DevopsProjectRepositorySettingApprovalRules;
  /**
  * merge_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_project_repository_setting#merge_settings DevopsProjectRepositorySetting#merge_settings}
  */
  readonly mergeSettings?: DevopsProjectRepositorySettingMergeSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_project_repository_setting#timeouts DevopsProjectRepositorySetting#timeouts}
  */
  readonly timeouts?: DevopsProjectRepositorySettingTimeouts;
}
export interface DevopsProjectRepositorySettingApprovalRulesItemsReviewers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_project_repository_setting#principal_id DevopsProjectRepositorySetting#principal_id}
  */
  readonly principalId: string;
}

export function devopsProjectRepositorySettingApprovalRulesItemsReviewersToTerraform(struct?: DevopsProjectRepositorySettingApprovalRulesItemsReviewers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_id: cdktf.stringToTerraform(struct!.principalId),
  }
}


export function devopsProjectRepositorySettingApprovalRulesItemsReviewersToHclTerraform(struct?: DevopsProjectRepositorySettingApprovalRulesItemsReviewers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    principal_id: {
      value: cdktf.stringToHclTerraform(struct!.principalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevopsProjectRepositorySettingApprovalRulesItemsReviewers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalId = this._principalId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsProjectRepositorySettingApprovalRulesItemsReviewers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._principalId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._principalId = value.principalId;
    }
  }

  // principal_id - computed: false, optional: false, required: true
  private _principalId?: string; 
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }
  public set principalId(value: string) {
    this._principalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
  }

  // principal_name - computed: true, optional: false, required: false
  public get principalName() {
    return this.getStringAttribute('principal_name');
  }

  // principal_state - computed: true, optional: false, required: false
  public get principalState() {
    return this.getStringAttribute('principal_state');
  }

  // principal_type - computed: true, optional: false, required: false
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }
}

export class DevopsProjectRepositorySettingApprovalRulesItemsReviewersList extends cdktf.ComplexList {
  public internalValue? : DevopsProjectRepositorySettingApprovalRulesItemsReviewers[] | cdktf.IResolvable

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
  public get(index: number): DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference {
    return new DevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsProjectRepositorySettingApprovalRulesItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_project_repository_setting#destination_branch DevopsProjectRepositorySetting#destination_branch}
  */
  readonly destinationBranch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_project_repository_setting#min_approvals_count DevopsProjectRepositorySetting#min_approvals_count}
  */
  readonly minApprovalsCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_project_repository_setting#name DevopsProjectRepositorySetting#name}
  */
  readonly name: string;
  /**
  * reviewers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_project_repository_setting#reviewers DevopsProjectRepositorySetting#reviewers}
  */
  readonly reviewers?: DevopsProjectRepositorySettingApprovalRulesItemsReviewers[] | cdktf.IResolvable;
}

export function devopsProjectRepositorySettingApprovalRulesItemsToTerraform(struct?: DevopsProjectRepositorySettingApprovalRulesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_branch: cdktf.stringToTerraform(struct!.destinationBranch),
    min_approvals_count: cdktf.numberToTerraform(struct!.minApprovalsCount),
    name: cdktf.stringToTerraform(struct!.name),
    reviewers: cdktf.listMapper(devopsProjectRepositorySettingApprovalRulesItemsReviewersToTerraform, true)(struct!.reviewers),
  }
}


export function devopsProjectRepositorySettingApprovalRulesItemsToHclTerraform(struct?: DevopsProjectRepositorySettingApprovalRulesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_branch: {
      value: cdktf.stringToHclTerraform(struct!.destinationBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_approvals_count: {
      value: cdktf.numberToHclTerraform(struct!.minApprovalsCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reviewers: {
      value: cdktf.listMapperHcl(devopsProjectRepositorySettingApprovalRulesItemsReviewersToHclTerraform, true)(struct!.reviewers),
      isBlock: true,
      type: "list",
      storageClassType: "DevopsProjectRepositorySettingApprovalRulesItemsReviewersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsProjectRepositorySettingApprovalRulesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DevopsProjectRepositorySettingApprovalRulesItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationBranch = this._destinationBranch;
    }
    if (this._minApprovalsCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minApprovalsCount = this._minApprovalsCount;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._reviewers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewers = this._reviewers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsProjectRepositorySettingApprovalRulesItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationBranch = undefined;
      this._minApprovalsCount = undefined;
      this._name = undefined;
      this._reviewers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationBranch = value.destinationBranch;
      this._minApprovalsCount = value.minApprovalsCount;
      this._name = value.name;
      this._reviewers.internalValue = value.reviewers;
    }
  }

  // destination_branch - computed: true, optional: true, required: false
  private _destinationBranch?: string; 
  public get destinationBranch() {
    return this.getStringAttribute('destination_branch');
  }
  public set destinationBranch(value: string) {
    this._destinationBranch = value;
  }
  public resetDestinationBranch() {
    this._destinationBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationBranchInput() {
    return this._destinationBranch;
  }

  // min_approvals_count - computed: false, optional: false, required: true
  private _minApprovalsCount?: number; 
  public get minApprovalsCount() {
    return this.getNumberAttribute('min_approvals_count');
  }
  public set minApprovalsCount(value: number) {
    this._minApprovalsCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minApprovalsCountInput() {
    return this._minApprovalsCount;
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

  // reviewers - computed: false, optional: true, required: false
  private _reviewers = new DevopsProjectRepositorySettingApprovalRulesItemsReviewersList(this, "reviewers", false);
  public get reviewers() {
    return this._reviewers;
  }
  public putReviewers(value: DevopsProjectRepositorySettingApprovalRulesItemsReviewers[] | cdktf.IResolvable) {
    this._reviewers.internalValue = value;
  }
  public resetReviewers() {
    this._reviewers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewersInput() {
    return this._reviewers.internalValue;
  }
}

export class DevopsProjectRepositorySettingApprovalRulesItemsList extends cdktf.ComplexList {
  public internalValue? : DevopsProjectRepositorySettingApprovalRulesItems[] | cdktf.IResolvable

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
  public get(index: number): DevopsProjectRepositorySettingApprovalRulesItemsOutputReference {
    return new DevopsProjectRepositorySettingApprovalRulesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsProjectRepositorySettingApprovalRules {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_project_repository_setting#items DevopsProjectRepositorySetting#items}
  */
  readonly items: DevopsProjectRepositorySettingApprovalRulesItems[] | cdktf.IResolvable;
}

export function devopsProjectRepositorySettingApprovalRulesToTerraform(struct?: DevopsProjectRepositorySettingApprovalRulesOutputReference | DevopsProjectRepositorySettingApprovalRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(devopsProjectRepositorySettingApprovalRulesItemsToTerraform, true)(struct!.items),
  }
}


export function devopsProjectRepositorySettingApprovalRulesToHclTerraform(struct?: DevopsProjectRepositorySettingApprovalRulesOutputReference | DevopsProjectRepositorySettingApprovalRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(devopsProjectRepositorySettingApprovalRulesItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DevopsProjectRepositorySettingApprovalRulesItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsProjectRepositorySettingApprovalRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsProjectRepositorySettingApprovalRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsProjectRepositorySettingApprovalRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: false, required: true
  private _items = new DevopsProjectRepositorySettingApprovalRulesItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DevopsProjectRepositorySettingApprovalRulesItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DevopsProjectRepositorySettingMergeSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_project_repository_setting#allowed_merge_strategies DevopsProjectRepositorySetting#allowed_merge_strategies}
  */
  readonly allowedMergeStrategies: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_project_repository_setting#default_merge_strategy DevopsProjectRepositorySetting#default_merge_strategy}
  */
  readonly defaultMergeStrategy: string;
}

export function devopsProjectRepositorySettingMergeSettingsToTerraform(struct?: DevopsProjectRepositorySettingMergeSettingsOutputReference | DevopsProjectRepositorySettingMergeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_merge_strategies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedMergeStrategies),
    default_merge_strategy: cdktf.stringToTerraform(struct!.defaultMergeStrategy),
  }
}


export function devopsProjectRepositorySettingMergeSettingsToHclTerraform(struct?: DevopsProjectRepositorySettingMergeSettingsOutputReference | DevopsProjectRepositorySettingMergeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_merge_strategies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedMergeStrategies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_merge_strategy: {
      value: cdktf.stringToHclTerraform(struct!.defaultMergeStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsProjectRepositorySettingMergeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsProjectRepositorySettingMergeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedMergeStrategies !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMergeStrategies = this._allowedMergeStrategies;
    }
    if (this._defaultMergeStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMergeStrategy = this._defaultMergeStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsProjectRepositorySettingMergeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedMergeStrategies = undefined;
      this._defaultMergeStrategy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedMergeStrategies = value.allowedMergeStrategies;
      this._defaultMergeStrategy = value.defaultMergeStrategy;
    }
  }

  // allowed_merge_strategies - computed: false, optional: false, required: true
  private _allowedMergeStrategies?: string[]; 
  public get allowedMergeStrategies() {
    return this.getListAttribute('allowed_merge_strategies');
  }
  public set allowedMergeStrategies(value: string[]) {
    this._allowedMergeStrategies = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMergeStrategiesInput() {
    return this._allowedMergeStrategies;
  }

  // default_merge_strategy - computed: false, optional: false, required: true
  private _defaultMergeStrategy?: string; 
  public get defaultMergeStrategy() {
    return this.getStringAttribute('default_merge_strategy');
  }
  public set defaultMergeStrategy(value: string) {
    this._defaultMergeStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMergeStrategyInput() {
    return this._defaultMergeStrategy;
  }
}
export interface DevopsProjectRepositorySettingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_project_repository_setting#create DevopsProjectRepositorySetting#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_project_repository_setting#delete DevopsProjectRepositorySetting#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_project_repository_setting#update DevopsProjectRepositorySetting#update}
  */
  readonly update?: string;
}

export function devopsProjectRepositorySettingTimeoutsToTerraform(struct?: DevopsProjectRepositorySettingTimeouts | cdktf.IResolvable): any {
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


export function devopsProjectRepositorySettingTimeoutsToHclTerraform(struct?: DevopsProjectRepositorySettingTimeouts | cdktf.IResolvable): any {
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

export class DevopsProjectRepositorySettingTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsProjectRepositorySettingTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DevopsProjectRepositorySettingTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_project_repository_setting oci_devops_project_repository_setting}
*/
export class DevopsProjectRepositorySetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_devops_project_repository_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DevopsProjectRepositorySetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DevopsProjectRepositorySetting to import
  * @param importFromId The id of the existing DevopsProjectRepositorySetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_project_repository_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DevopsProjectRepositorySetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_devops_project_repository_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_project_repository_setting oci_devops_project_repository_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevopsProjectRepositorySettingConfig
  */
  public constructor(scope: Construct, id: string, config: DevopsProjectRepositorySettingConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_devops_project_repository_setting',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
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
    this._projectId = config.projectId;
    this._approvalRules.internalValue = config.approvalRules;
    this._mergeSettings.internalValue = config.mergeSettings;
    this._timeouts.internalValue = config.timeouts;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // approval_rules - computed: false, optional: true, required: false
  private _approvalRules = new DevopsProjectRepositorySettingApprovalRulesOutputReference(this, "approval_rules");
  public get approvalRules() {
    return this._approvalRules;
  }
  public putApprovalRules(value: DevopsProjectRepositorySettingApprovalRules) {
    this._approvalRules.internalValue = value;
  }
  public resetApprovalRules() {
    this._approvalRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalRulesInput() {
    return this._approvalRules.internalValue;
  }

  // merge_settings - computed: false, optional: true, required: false
  private _mergeSettings = new DevopsProjectRepositorySettingMergeSettingsOutputReference(this, "merge_settings");
  public get mergeSettings() {
    return this._mergeSettings;
  }
  public putMergeSettings(value: DevopsProjectRepositorySettingMergeSettings) {
    this._mergeSettings.internalValue = value;
  }
  public resetMergeSettings() {
    this._mergeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeSettingsInput() {
    return this._mergeSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DevopsProjectRepositorySettingTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DevopsProjectRepositorySettingTimeouts) {
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
      project_id: cdktf.stringToTerraform(this._projectId),
      approval_rules: devopsProjectRepositorySettingApprovalRulesToTerraform(this._approvalRules.internalValue),
      merge_settings: devopsProjectRepositorySettingMergeSettingsToTerraform(this._mergeSettings.internalValue),
      timeouts: devopsProjectRepositorySettingTimeoutsToTerraform(this._timeouts.internalValue),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      approval_rules: {
        value: devopsProjectRepositorySettingApprovalRulesToHclTerraform(this._approvalRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsProjectRepositorySettingApprovalRulesList",
      },
      merge_settings: {
        value: devopsProjectRepositorySettingMergeSettingsToHclTerraform(this._mergeSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsProjectRepositorySettingMergeSettingsList",
      },
      timeouts: {
        value: devopsProjectRepositorySettingTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DevopsProjectRepositorySettingTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
