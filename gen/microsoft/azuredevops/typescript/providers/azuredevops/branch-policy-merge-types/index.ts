// https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_merge_types
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BranchPolicyMergeTypesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_merge_types#blocking BranchPolicyMergeTypes#blocking}
  */
  readonly blocking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_merge_types#enabled BranchPolicyMergeTypes#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_merge_types#id BranchPolicyMergeTypes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_merge_types#project_id BranchPolicyMergeTypes#project_id}
  */
  readonly projectId: string;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_merge_types#settings BranchPolicyMergeTypes#settings}
  */
  readonly settings: BranchPolicyMergeTypesSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_merge_types#timeouts BranchPolicyMergeTypes#timeouts}
  */
  readonly timeouts?: BranchPolicyMergeTypesTimeouts;
}
export interface BranchPolicyMergeTypesSettingsScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_merge_types#match_type BranchPolicyMergeTypes#match_type}
  */
  readonly matchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_merge_types#repository_id BranchPolicyMergeTypes#repository_id}
  */
  readonly repositoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_merge_types#repository_ref BranchPolicyMergeTypes#repository_ref}
  */
  readonly repositoryRef?: string;
}

export function branchPolicyMergeTypesSettingsScopeToTerraform(struct?: BranchPolicyMergeTypesSettingsScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_type: cdktf.stringToTerraform(struct!.matchType),
    repository_id: cdktf.stringToTerraform(struct!.repositoryId),
    repository_ref: cdktf.stringToTerraform(struct!.repositoryRef),
  }
}


export function branchPolicyMergeTypesSettingsScopeToHclTerraform(struct?: BranchPolicyMergeTypesSettingsScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_id: {
      value: cdktf.stringToHclTerraform(struct!.repositoryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_ref: {
      value: cdktf.stringToHclTerraform(struct!.repositoryRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BranchPolicyMergeTypesSettingsScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BranchPolicyMergeTypesSettingsScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._repositoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryId = this._repositoryId;
    }
    if (this._repositoryRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryRef = this._repositoryRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BranchPolicyMergeTypesSettingsScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchType = undefined;
      this._repositoryId = undefined;
      this._repositoryRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchType = value.matchType;
      this._repositoryId = value.repositoryId;
      this._repositoryRef = value.repositoryRef;
    }
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // repository_id - computed: false, optional: true, required: false
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  public resetRepositoryId() {
    this._repositoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // repository_ref - computed: false, optional: true, required: false
  private _repositoryRef?: string; 
  public get repositoryRef() {
    return this.getStringAttribute('repository_ref');
  }
  public set repositoryRef(value: string) {
    this._repositoryRef = value;
  }
  public resetRepositoryRef() {
    this._repositoryRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryRefInput() {
    return this._repositoryRef;
  }
}

export class BranchPolicyMergeTypesSettingsScopeList extends cdktf.ComplexList {
  public internalValue? : BranchPolicyMergeTypesSettingsScope[] | cdktf.IResolvable

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
  public get(index: number): BranchPolicyMergeTypesSettingsScopeOutputReference {
    return new BranchPolicyMergeTypesSettingsScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BranchPolicyMergeTypesSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_merge_types#allow_basic_no_fast_forward BranchPolicyMergeTypes#allow_basic_no_fast_forward}
  */
  readonly allowBasicNoFastForward?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_merge_types#allow_rebase_and_fast_forward BranchPolicyMergeTypes#allow_rebase_and_fast_forward}
  */
  readonly allowRebaseAndFastForward?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_merge_types#allow_rebase_with_merge BranchPolicyMergeTypes#allow_rebase_with_merge}
  */
  readonly allowRebaseWithMerge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_merge_types#allow_squash BranchPolicyMergeTypes#allow_squash}
  */
  readonly allowSquash?: boolean | cdktf.IResolvable;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_merge_types#scope BranchPolicyMergeTypes#scope}
  */
  readonly scope: BranchPolicyMergeTypesSettingsScope[] | cdktf.IResolvable;
}

export function branchPolicyMergeTypesSettingsToTerraform(struct?: BranchPolicyMergeTypesSettingsOutputReference | BranchPolicyMergeTypesSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_basic_no_fast_forward: cdktf.booleanToTerraform(struct!.allowBasicNoFastForward),
    allow_rebase_and_fast_forward: cdktf.booleanToTerraform(struct!.allowRebaseAndFastForward),
    allow_rebase_with_merge: cdktf.booleanToTerraform(struct!.allowRebaseWithMerge),
    allow_squash: cdktf.booleanToTerraform(struct!.allowSquash),
    scope: cdktf.listMapper(branchPolicyMergeTypesSettingsScopeToTerraform, true)(struct!.scope),
  }
}


export function branchPolicyMergeTypesSettingsToHclTerraform(struct?: BranchPolicyMergeTypesSettingsOutputReference | BranchPolicyMergeTypesSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_basic_no_fast_forward: {
      value: cdktf.booleanToHclTerraform(struct!.allowBasicNoFastForward),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_rebase_and_fast_forward: {
      value: cdktf.booleanToHclTerraform(struct!.allowRebaseAndFastForward),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_rebase_with_merge: {
      value: cdktf.booleanToHclTerraform(struct!.allowRebaseWithMerge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_squash: {
      value: cdktf.booleanToHclTerraform(struct!.allowSquash),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scope: {
      value: cdktf.listMapperHcl(branchPolicyMergeTypesSettingsScopeToHclTerraform, true)(struct!.scope),
      isBlock: true,
      type: "list",
      storageClassType: "BranchPolicyMergeTypesSettingsScopeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BranchPolicyMergeTypesSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BranchPolicyMergeTypesSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowBasicNoFastForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowBasicNoFastForward = this._allowBasicNoFastForward;
    }
    if (this._allowRebaseAndFastForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRebaseAndFastForward = this._allowRebaseAndFastForward;
    }
    if (this._allowRebaseWithMerge !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRebaseWithMerge = this._allowRebaseWithMerge;
    }
    if (this._allowSquash !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSquash = this._allowSquash;
    }
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BranchPolicyMergeTypesSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowBasicNoFastForward = undefined;
      this._allowRebaseAndFastForward = undefined;
      this._allowRebaseWithMerge = undefined;
      this._allowSquash = undefined;
      this._scope.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowBasicNoFastForward = value.allowBasicNoFastForward;
      this._allowRebaseAndFastForward = value.allowRebaseAndFastForward;
      this._allowRebaseWithMerge = value.allowRebaseWithMerge;
      this._allowSquash = value.allowSquash;
      this._scope.internalValue = value.scope;
    }
  }

  // allow_basic_no_fast_forward - computed: false, optional: true, required: false
  private _allowBasicNoFastForward?: boolean | cdktf.IResolvable; 
  public get allowBasicNoFastForward() {
    return this.getBooleanAttribute('allow_basic_no_fast_forward');
  }
  public set allowBasicNoFastForward(value: boolean | cdktf.IResolvable) {
    this._allowBasicNoFastForward = value;
  }
  public resetAllowBasicNoFastForward() {
    this._allowBasicNoFastForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowBasicNoFastForwardInput() {
    return this._allowBasicNoFastForward;
  }

  // allow_rebase_and_fast_forward - computed: false, optional: true, required: false
  private _allowRebaseAndFastForward?: boolean | cdktf.IResolvable; 
  public get allowRebaseAndFastForward() {
    return this.getBooleanAttribute('allow_rebase_and_fast_forward');
  }
  public set allowRebaseAndFastForward(value: boolean | cdktf.IResolvable) {
    this._allowRebaseAndFastForward = value;
  }
  public resetAllowRebaseAndFastForward() {
    this._allowRebaseAndFastForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRebaseAndFastForwardInput() {
    return this._allowRebaseAndFastForward;
  }

  // allow_rebase_with_merge - computed: false, optional: true, required: false
  private _allowRebaseWithMerge?: boolean | cdktf.IResolvable; 
  public get allowRebaseWithMerge() {
    return this.getBooleanAttribute('allow_rebase_with_merge');
  }
  public set allowRebaseWithMerge(value: boolean | cdktf.IResolvable) {
    this._allowRebaseWithMerge = value;
  }
  public resetAllowRebaseWithMerge() {
    this._allowRebaseWithMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRebaseWithMergeInput() {
    return this._allowRebaseWithMerge;
  }

  // allow_squash - computed: false, optional: true, required: false
  private _allowSquash?: boolean | cdktf.IResolvable; 
  public get allowSquash() {
    return this.getBooleanAttribute('allow_squash');
  }
  public set allowSquash(value: boolean | cdktf.IResolvable) {
    this._allowSquash = value;
  }
  public resetAllowSquash() {
    this._allowSquash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSquashInput() {
    return this._allowSquash;
  }

  // scope - computed: false, optional: false, required: true
  private _scope = new BranchPolicyMergeTypesSettingsScopeList(this, "scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: BranchPolicyMergeTypesSettingsScope[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }
}
export interface BranchPolicyMergeTypesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_merge_types#create BranchPolicyMergeTypes#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_merge_types#delete BranchPolicyMergeTypes#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_merge_types#read BranchPolicyMergeTypes#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_merge_types#update BranchPolicyMergeTypes#update}
  */
  readonly update?: string;
}

export function branchPolicyMergeTypesTimeoutsToTerraform(struct?: BranchPolicyMergeTypesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function branchPolicyMergeTypesTimeoutsToHclTerraform(struct?: BranchPolicyMergeTypesTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class BranchPolicyMergeTypesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BranchPolicyMergeTypesTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BranchPolicyMergeTypesTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_merge_types azuredevops_branch_policy_merge_types}
*/
export class BranchPolicyMergeTypes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuredevops_branch_policy_merge_types";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BranchPolicyMergeTypes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BranchPolicyMergeTypes to import
  * @param importFromId The id of the existing BranchPolicyMergeTypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_merge_types#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BranchPolicyMergeTypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuredevops_branch_policy_merge_types", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_merge_types azuredevops_branch_policy_merge_types} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BranchPolicyMergeTypesConfig
  */
  public constructor(scope: Construct, id: string, config: BranchPolicyMergeTypesConfig) {
    super(scope, id, {
      terraformResourceType: 'azuredevops_branch_policy_merge_types',
      terraformGeneratorMetadata: {
        providerName: 'azuredevops',
        providerVersion: '1.12.0',
        providerVersionConstraint: '1.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blocking = config.blocking;
    this._enabled = config.enabled;
    this._id = config.id;
    this._projectId = config.projectId;
    this._settings.internalValue = config.settings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blocking - computed: false, optional: true, required: false
  private _blocking?: boolean | cdktf.IResolvable; 
  public get blocking() {
    return this.getBooleanAttribute('blocking');
  }
  public set blocking(value: boolean | cdktf.IResolvable) {
    this._blocking = value;
  }
  public resetBlocking() {
    this._blocking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockingInput() {
    return this._blocking;
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

  // settings - computed: false, optional: false, required: true
  private _settings = new BranchPolicyMergeTypesSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: BranchPolicyMergeTypesSettings) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BranchPolicyMergeTypesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BranchPolicyMergeTypesTimeouts) {
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
      blocking: cdktf.booleanToTerraform(this._blocking),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      settings: branchPolicyMergeTypesSettingsToTerraform(this._settings.internalValue),
      timeouts: branchPolicyMergeTypesTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blocking: {
        value: cdktf.booleanToHclTerraform(this._blocking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      settings: {
        value: branchPolicyMergeTypesSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BranchPolicyMergeTypesSettingsList",
      },
      timeouts: {
        value: branchPolicyMergeTypesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BranchPolicyMergeTypesTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
