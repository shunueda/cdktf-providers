// https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_build_validation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BranchPolicyBuildValidationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_build_validation#blocking BranchPolicyBuildValidation#blocking}
  */
  readonly blocking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_build_validation#enabled BranchPolicyBuildValidation#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_build_validation#id BranchPolicyBuildValidation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_build_validation#project_id BranchPolicyBuildValidation#project_id}
  */
  readonly projectId: string;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_build_validation#settings BranchPolicyBuildValidation#settings}
  */
  readonly settings: BranchPolicyBuildValidationSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_build_validation#timeouts BranchPolicyBuildValidation#timeouts}
  */
  readonly timeouts?: BranchPolicyBuildValidationTimeouts;
}
export interface BranchPolicyBuildValidationSettingsScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_build_validation#match_type BranchPolicyBuildValidation#match_type}
  */
  readonly matchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_build_validation#repository_id BranchPolicyBuildValidation#repository_id}
  */
  readonly repositoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_build_validation#repository_ref BranchPolicyBuildValidation#repository_ref}
  */
  readonly repositoryRef?: string;
}

export function branchPolicyBuildValidationSettingsScopeToTerraform(struct?: BranchPolicyBuildValidationSettingsScope | cdktf.IResolvable): any {
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


export function branchPolicyBuildValidationSettingsScopeToHclTerraform(struct?: BranchPolicyBuildValidationSettingsScope | cdktf.IResolvable): any {
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

export class BranchPolicyBuildValidationSettingsScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BranchPolicyBuildValidationSettingsScope | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BranchPolicyBuildValidationSettingsScope | cdktf.IResolvable | undefined) {
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

export class BranchPolicyBuildValidationSettingsScopeList extends cdktf.ComplexList {
  public internalValue? : BranchPolicyBuildValidationSettingsScope[] | cdktf.IResolvable

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
  public get(index: number): BranchPolicyBuildValidationSettingsScopeOutputReference {
    return new BranchPolicyBuildValidationSettingsScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BranchPolicyBuildValidationSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_build_validation#build_definition_id BranchPolicyBuildValidation#build_definition_id}
  */
  readonly buildDefinitionId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_build_validation#display_name BranchPolicyBuildValidation#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_build_validation#filename_patterns BranchPolicyBuildValidation#filename_patterns}
  */
  readonly filenamePatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_build_validation#manual_queue_only BranchPolicyBuildValidation#manual_queue_only}
  */
  readonly manualQueueOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_build_validation#queue_on_source_update_only BranchPolicyBuildValidation#queue_on_source_update_only}
  */
  readonly queueOnSourceUpdateOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_build_validation#valid_duration BranchPolicyBuildValidation#valid_duration}
  */
  readonly validDuration?: number;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_build_validation#scope BranchPolicyBuildValidation#scope}
  */
  readonly scope: BranchPolicyBuildValidationSettingsScope[] | cdktf.IResolvable;
}

export function branchPolicyBuildValidationSettingsToTerraform(struct?: BranchPolicyBuildValidationSettingsOutputReference | BranchPolicyBuildValidationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_definition_id: cdktf.numberToTerraform(struct!.buildDefinitionId),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    filename_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filenamePatterns),
    manual_queue_only: cdktf.booleanToTerraform(struct!.manualQueueOnly),
    queue_on_source_update_only: cdktf.booleanToTerraform(struct!.queueOnSourceUpdateOnly),
    valid_duration: cdktf.numberToTerraform(struct!.validDuration),
    scope: cdktf.listMapper(branchPolicyBuildValidationSettingsScopeToTerraform, true)(struct!.scope),
  }
}


export function branchPolicyBuildValidationSettingsToHclTerraform(struct?: BranchPolicyBuildValidationSettingsOutputReference | BranchPolicyBuildValidationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    build_definition_id: {
      value: cdktf.numberToHclTerraform(struct!.buildDefinitionId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filenamePatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    manual_queue_only: {
      value: cdktf.booleanToHclTerraform(struct!.manualQueueOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    queue_on_source_update_only: {
      value: cdktf.booleanToHclTerraform(struct!.queueOnSourceUpdateOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    valid_duration: {
      value: cdktf.numberToHclTerraform(struct!.validDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scope: {
      value: cdktf.listMapperHcl(branchPolicyBuildValidationSettingsScopeToHclTerraform, true)(struct!.scope),
      isBlock: true,
      type: "list",
      storageClassType: "BranchPolicyBuildValidationSettingsScopeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BranchPolicyBuildValidationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BranchPolicyBuildValidationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildDefinitionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildDefinitionId = this._buildDefinitionId;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._filenamePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.filenamePatterns = this._filenamePatterns;
    }
    if (this._manualQueueOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualQueueOnly = this._manualQueueOnly;
    }
    if (this._queueOnSourceUpdateOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueOnSourceUpdateOnly = this._queueOnSourceUpdateOnly;
    }
    if (this._validDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.validDuration = this._validDuration;
    }
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BranchPolicyBuildValidationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._buildDefinitionId = undefined;
      this._displayName = undefined;
      this._filenamePatterns = undefined;
      this._manualQueueOnly = undefined;
      this._queueOnSourceUpdateOnly = undefined;
      this._validDuration = undefined;
      this._scope.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._buildDefinitionId = value.buildDefinitionId;
      this._displayName = value.displayName;
      this._filenamePatterns = value.filenamePatterns;
      this._manualQueueOnly = value.manualQueueOnly;
      this._queueOnSourceUpdateOnly = value.queueOnSourceUpdateOnly;
      this._validDuration = value.validDuration;
      this._scope.internalValue = value.scope;
    }
  }

  // build_definition_id - computed: false, optional: false, required: true
  private _buildDefinitionId?: number; 
  public get buildDefinitionId() {
    return this.getNumberAttribute('build_definition_id');
  }
  public set buildDefinitionId(value: number) {
    this._buildDefinitionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buildDefinitionIdInput() {
    return this._buildDefinitionId;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // filename_patterns - computed: false, optional: true, required: false
  private _filenamePatterns?: string[]; 
  public get filenamePatterns() {
    return this.getListAttribute('filename_patterns');
  }
  public set filenamePatterns(value: string[]) {
    this._filenamePatterns = value;
  }
  public resetFilenamePatterns() {
    this._filenamePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenamePatternsInput() {
    return this._filenamePatterns;
  }

  // manual_queue_only - computed: false, optional: true, required: false
  private _manualQueueOnly?: boolean | cdktf.IResolvable; 
  public get manualQueueOnly() {
    return this.getBooleanAttribute('manual_queue_only');
  }
  public set manualQueueOnly(value: boolean | cdktf.IResolvable) {
    this._manualQueueOnly = value;
  }
  public resetManualQueueOnly() {
    this._manualQueueOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualQueueOnlyInput() {
    return this._manualQueueOnly;
  }

  // queue_on_source_update_only - computed: false, optional: true, required: false
  private _queueOnSourceUpdateOnly?: boolean | cdktf.IResolvable; 
  public get queueOnSourceUpdateOnly() {
    return this.getBooleanAttribute('queue_on_source_update_only');
  }
  public set queueOnSourceUpdateOnly(value: boolean | cdktf.IResolvable) {
    this._queueOnSourceUpdateOnly = value;
  }
  public resetQueueOnSourceUpdateOnly() {
    this._queueOnSourceUpdateOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueOnSourceUpdateOnlyInput() {
    return this._queueOnSourceUpdateOnly;
  }

  // valid_duration - computed: false, optional: true, required: false
  private _validDuration?: number; 
  public get validDuration() {
    return this.getNumberAttribute('valid_duration');
  }
  public set validDuration(value: number) {
    this._validDuration = value;
  }
  public resetValidDuration() {
    this._validDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validDurationInput() {
    return this._validDuration;
  }

  // scope - computed: false, optional: false, required: true
  private _scope = new BranchPolicyBuildValidationSettingsScopeList(this, "scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: BranchPolicyBuildValidationSettingsScope[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }
}
export interface BranchPolicyBuildValidationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_build_validation#create BranchPolicyBuildValidation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_build_validation#delete BranchPolicyBuildValidation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_build_validation#read BranchPolicyBuildValidation#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_build_validation#update BranchPolicyBuildValidation#update}
  */
  readonly update?: string;
}

export function branchPolicyBuildValidationTimeoutsToTerraform(struct?: BranchPolicyBuildValidationTimeouts | cdktf.IResolvable): any {
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


export function branchPolicyBuildValidationTimeoutsToHclTerraform(struct?: BranchPolicyBuildValidationTimeouts | cdktf.IResolvable): any {
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

export class BranchPolicyBuildValidationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BranchPolicyBuildValidationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BranchPolicyBuildValidationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_build_validation azuredevops_branch_policy_build_validation}
*/
export class BranchPolicyBuildValidation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuredevops_branch_policy_build_validation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BranchPolicyBuildValidation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BranchPolicyBuildValidation to import
  * @param importFromId The id of the existing BranchPolicyBuildValidation that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_build_validation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BranchPolicyBuildValidation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuredevops_branch_policy_build_validation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/resources/branch_policy_build_validation azuredevops_branch_policy_build_validation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BranchPolicyBuildValidationConfig
  */
  public constructor(scope: Construct, id: string, config: BranchPolicyBuildValidationConfig) {
    super(scope, id, {
      terraformResourceType: 'azuredevops_branch_policy_build_validation',
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
  private _settings = new BranchPolicyBuildValidationSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: BranchPolicyBuildValidationSettings) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BranchPolicyBuildValidationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BranchPolicyBuildValidationTimeouts) {
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
      settings: branchPolicyBuildValidationSettingsToTerraform(this._settings.internalValue),
      timeouts: branchPolicyBuildValidationTimeoutsToTerraform(this._timeouts.internalValue),
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
        value: branchPolicyBuildValidationSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BranchPolicyBuildValidationSettingsList",
      },
      timeouts: {
        value: branchPolicyBuildValidationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BranchPolicyBuildValidationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
