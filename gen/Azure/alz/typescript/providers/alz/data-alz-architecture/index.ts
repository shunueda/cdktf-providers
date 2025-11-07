// https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlzArchitectureConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Azure region used as a default for resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#location DataAlzArchitecture#location}
  */
  readonly location: string;
  /**
  * The name of the architecture to deploy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#name DataAlzArchitecture#name}
  */
  readonly name: string;
  /**
  * This list of objects allows you to set the [`assignPermissions` metadata property](https://learn.microsoft.com/azure/governance/policy/concepts/definition-structure-parameters#parameter-properties) of the supplied definition and parameter names. This allows you to correct policies that haven't been authored correctly and means that the provider can generate the correct policy role assignments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#override_policy_definition_parameter_assign_permissions_set DataAlzArchitecture#override_policy_definition_parameter_assign_permissions_set}
  */
  readonly overridePolicyDefinitionParameterAssignPermissionsSet?: DataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsSet[] | cdktf.IResolvable;
  /**
  * This list of objects allows you to unset set the [`assignPermissions` metadata property](https://learn.microsoft.com/azure/governance/policy/concepts/definition-structure-parameters#parameter-properties) of the supplied definition and parameter names. This allows you to correct policies that haven't been authored correctly, or prevent permissions being assigned for policies that are disabled in a policy set. The provider can then generate the correct policy role assignments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#override_policy_definition_parameter_assign_permissions_unset DataAlzArchitecture#override_policy_definition_parameter_assign_permissions_unset}
  */
  readonly overridePolicyDefinitionParameterAssignPermissionsUnset?: DataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsUnset[] | cdktf.IResolvable;
  /**
  * A mested map of policy assignments to modify. The key is the management group id, and the value is an object with a single attribute, `policy_assignments`. This is another map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#policy_assignments_to_modify DataAlzArchitecture#policy_assignments_to_modify}
  */
  readonly policyAssignmentsToModify?: { [key: string]: DataAlzArchitecturePolicyAssignmentsToModify } | cdktf.IResolvable;
  /**
  * A map of default values to apply to policy assignments. The key is the default name as defined in the library, and the value is an JSON object containing a single `value` attribute with the values to apply. This to mitigate issues with the Terraform type system. E.g. `{ defaultName = jsonencode({ value = "value"}) }`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#policy_default_values DataAlzArchitecture#policy_default_values}
  */
  readonly policyDefaultValues?: { [key: string]: string };
  /**
  * The root management group id under which to deploy the architecture.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#root_management_group_id DataAlzArchitecture#root_management_group_id}
  */
  readonly rootManagementGroupId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#timeouts DataAlzArchitecture#timeouts}
  */
  readonly timeouts?: DataAlzArchitectureTimeouts;
}
export interface DataAlzArchitectureManagementGroups {
}

export function dataAlzArchitectureManagementGroupsToTerraform(struct?: DataAlzArchitectureManagementGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlzArchitectureManagementGroupsToHclTerraform(struct?: DataAlzArchitectureManagementGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlzArchitectureManagementGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlzArchitectureManagementGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlzArchitectureManagementGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // exists - computed: true, optional: false, required: false
  public get exists() {
    return this.getBooleanAttribute('exists');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getNumberAttribute('level');
  }

  // parent_id - computed: true, optional: false, required: false
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }

  // policy_assignments - computed: true, optional: false, required: false
  private _policyAssignments = new cdktf.StringMap(this, "policy_assignments");
  public get policyAssignments() {
    return this._policyAssignments;
  }

  // policy_definitions - computed: true, optional: false, required: false
  private _policyDefinitions = new cdktf.StringMap(this, "policy_definitions");
  public get policyDefinitions() {
    return this._policyDefinitions;
  }

  // policy_set_definitions - computed: true, optional: false, required: false
  private _policySetDefinitions = new cdktf.StringMap(this, "policy_set_definitions");
  public get policySetDefinitions() {
    return this._policySetDefinitions;
  }

  // role_definitions - computed: true, optional: false, required: false
  private _roleDefinitions = new cdktf.StringMap(this, "role_definitions");
  public get roleDefinitions() {
    return this._roleDefinitions;
  }
}

export class DataAlzArchitectureManagementGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlzArchitectureManagementGroupsOutputReference {
    return new DataAlzArchitectureManagementGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsSet {
  /**
  * The name of the policy definition to override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#definition_name DataAlzArchitecture#definition_name}
  */
  readonly definitionName: string;
  /**
  * The name of the parameter to override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#parameter_name DataAlzArchitecture#parameter_name}
  */
  readonly parameterName: string;
}

export function dataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsSetToTerraform(struct?: DataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition_name: cdktf.stringToTerraform(struct!.definitionName),
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
  }
}


export function dataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsSetToHclTerraform(struct?: DataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition_name: {
      value: cdktf.stringToHclTerraform(struct!.definitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.definitionName = this._definitionName;
    }
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definitionName = undefined;
      this._parameterName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definitionName = value.definitionName;
      this._parameterName = value.parameterName;
    }
  }

  // definition_name - computed: false, optional: false, required: true
  private _definitionName?: string; 
  public get definitionName() {
    return this.getStringAttribute('definition_name');
  }
  public set definitionName(value: string) {
    this._definitionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionNameInput() {
    return this._definitionName;
  }

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }
}

export class DataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsSetList extends cdktf.ComplexList {
  public internalValue? : DataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsSet[] | cdktf.IResolvable

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
  public get(index: number): DataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsSetOutputReference {
    return new DataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsUnset {
  /**
  * The name of the policy definition to override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#definition_name DataAlzArchitecture#definition_name}
  */
  readonly definitionName: string;
  /**
  * The name of the parameter to override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#parameter_name DataAlzArchitecture#parameter_name}
  */
  readonly parameterName: string;
}

export function dataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsUnsetToTerraform(struct?: DataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsUnset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definition_name: cdktf.stringToTerraform(struct!.definitionName),
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
  }
}


export function dataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsUnsetToHclTerraform(struct?: DataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsUnset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definition_name: {
      value: cdktf.stringToHclTerraform(struct!.definitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsUnsetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsUnset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.definitionName = this._definitionName;
    }
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsUnset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definitionName = undefined;
      this._parameterName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definitionName = value.definitionName;
      this._parameterName = value.parameterName;
    }
  }

  // definition_name - computed: false, optional: false, required: true
  private _definitionName?: string; 
  public get definitionName() {
    return this.getStringAttribute('definition_name');
  }
  public set definitionName(value: string) {
    this._definitionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionNameInput() {
    return this._definitionName;
  }

  // parameter_name - computed: false, optional: false, required: true
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }
}

export class DataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsUnsetList extends cdktf.ComplexList {
  public internalValue? : DataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsUnset[] | cdktf.IResolvable

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
  public get(index: number): DataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsUnsetOutputReference {
    return new DataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsUnsetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsNonComplianceMessages {
  /**
  * The non-compliance message to use for the policy assignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#message DataAlzArchitecture#message}
  */
  readonly message: string;
  /**
  * The policy definition reference id (not the resource id) to use for the non compliance message. This references the definition within the policy set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#policy_definition_reference_id DataAlzArchitecture#policy_definition_reference_id}
  */
  readonly policyDefinitionReferenceId?: string;
}

export function dataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsNonComplianceMessagesToTerraform(struct?: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsNonComplianceMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    policy_definition_reference_id: cdktf.stringToTerraform(struct!.policyDefinitionReferenceId),
  }
}


export function dataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsNonComplianceMessagesToHclTerraform(struct?: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsNonComplianceMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_definition_reference_id: {
      value: cdktf.stringToHclTerraform(struct!.policyDefinitionReferenceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsNonComplianceMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsNonComplianceMessages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._policyDefinitionReferenceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyDefinitionReferenceId = this._policyDefinitionReferenceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsNonComplianceMessages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
      this._policyDefinitionReferenceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
      this._policyDefinitionReferenceId = value.policyDefinitionReferenceId;
    }
  }

  // message - computed: false, optional: false, required: true
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // policy_definition_reference_id - computed: false, optional: true, required: false
  private _policyDefinitionReferenceId?: string; 
  public get policyDefinitionReferenceId() {
    return this.getStringAttribute('policy_definition_reference_id');
  }
  public set policyDefinitionReferenceId(value: string) {
    this._policyDefinitionReferenceId = value;
  }
  public resetPolicyDefinitionReferenceId() {
    this._policyDefinitionReferenceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDefinitionReferenceIdInput() {
    return this._policyDefinitionReferenceId;
  }
}

export class DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsNonComplianceMessagesList extends cdktf.ComplexList {
  public internalValue? : DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsNonComplianceMessages[] | cdktf.IResolvable

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
  public get(index: number): DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsNonComplianceMessagesOutputReference {
    return new DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsNonComplianceMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverridesOverrideSelectors {
  /**
  * The list of values that the selector will match. Conflicts with `not_in`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#in DataAlzArchitecture#in}
  */
  readonly in?: string[];
  /**
  * The property of a selector that describes what characteristic will narrow down the scope of the override. Allowed value for kind: `policyEffect` is: `policyDefinitionReferenceId`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#kind DataAlzArchitecture#kind}
  */
  readonly kind: string;
  /**
  * The list of values that the selector will not match. Conflicts with `in`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#not_in DataAlzArchitecture#not_in}
  */
  readonly notIn?: string[];
}

export function dataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverridesOverrideSelectorsToTerraform(struct?: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverridesOverrideSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.in),
    kind: cdktf.stringToTerraform(struct!.kind),
    not_in: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notIn),
  }
}


export function dataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverridesOverrideSelectorsToHclTerraform(struct?: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverridesOverrideSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.in),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_in: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notIn),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverridesOverrideSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverridesOverrideSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._in !== undefined) {
      hasAnyValues = true;
      internalValueResult.in = this._in;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._notIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.notIn = this._notIn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverridesOverrideSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._in = undefined;
      this._kind = undefined;
      this._notIn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._in = value.in;
      this._kind = value.kind;
      this._notIn = value.notIn;
    }
  }

  // in - computed: false, optional: true, required: false
  private _in?: string[]; 
  public get in() {
    return cdktf.Fn.tolist(this.getListAttribute('in'));
  }
  public set in(value: string[]) {
    this._in = value;
  }
  public resetIn() {
    this._in = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inInput() {
    return this._in;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // not_in - computed: false, optional: true, required: false
  private _notIn?: string[]; 
  public get notIn() {
    return cdktf.Fn.tolist(this.getListAttribute('not_in'));
  }
  public set notIn(value: string[]) {
    this._notIn = value;
  }
  public resetNotIn() {
    this._notIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInInput() {
    return this._notIn;
  }
}

export class DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverridesOverrideSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverridesOverrideSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverridesOverrideSelectorsOutputReference {
    return new DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverridesOverrideSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverrides {
  /**
  * The property the assignment will override. The supported kind is `policyEffect`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#kind DataAlzArchitecture#kind}
  */
  readonly kind: string;
  /**
  * The selectors to use for the override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#override_selectors DataAlzArchitecture#override_selectors}
  */
  readonly overrideSelectors?: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverridesOverrideSelectors[] | cdktf.IResolvable;
  /**
  * The new value which will override the existing value. The supported values are: `addToNetworkGroup`, `append`, `audit`, `auditIfNotExists`, `deny`, `denyAction`, `deployIfNotExists`, `disabled`, `manual`, `modify`, `mutate`. <https://learn.microsoft.com/azure/governance/policy/concepts/effects>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#value DataAlzArchitecture#value}
  */
  readonly value: string;
}

export function dataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverridesToTerraform(struct?: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    override_selectors: cdktf.listMapper(dataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverridesOverrideSelectorsToTerraform, false)(struct!.overrideSelectors),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverridesToHclTerraform(struct?: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_selectors: {
      value: cdktf.listMapperHcl(dataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverridesOverrideSelectorsToHclTerraform, false)(struct!.overrideSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverridesOverrideSelectorsList",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._overrideSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideSelectors = this._overrideSelectors?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._overrideSelectors.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._overrideSelectors.internalValue = value.overrideSelectors;
      this._value = value.value;
    }
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // override_selectors - computed: false, optional: true, required: false
  private _overrideSelectors = new DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverridesOverrideSelectorsList(this, "override_selectors", false);
  public get overrideSelectors() {
    return this._overrideSelectors;
  }
  public putOverrideSelectors(value: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverridesOverrideSelectors[] | cdktf.IResolvable) {
    this._overrideSelectors.internalValue = value;
  }
  public resetOverrideSelectors() {
    this._overrideSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideSelectorsInput() {
    return this._overrideSelectors.internalValue;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverridesList extends cdktf.ComplexList {
  public internalValue? : DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverrides[] | cdktf.IResolvable

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
  public get(index: number): DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverridesOutputReference {
    return new DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectorsResourceSelectorSelectors {
  /**
  * The list of values that the selector will match. Conflicts with `not_in`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#in DataAlzArchitecture#in}
  */
  readonly in?: string[];
  /**
  * The property of a selector that describes what characteristic will narrow down the set of evaluated resources. Each kind can only be used once in a single resource selector. Allowed values are: `resourceLocation`, `resourceType`, `resourceWithoutLocation`. `resourceWithoutLocation` cannot be used in the same resource selector as `resourceLocation`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#kind DataAlzArchitecture#kind}
  */
  readonly kind: string;
  /**
  * The list of values that the selector will not match. Conflicts with `in`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#not_in DataAlzArchitecture#not_in}
  */
  readonly notIn?: string[];
}

export function dataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectorsResourceSelectorSelectorsToTerraform(struct?: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectorsResourceSelectorSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.in),
    kind: cdktf.stringToTerraform(struct!.kind),
    not_in: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notIn),
  }
}


export function dataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectorsResourceSelectorSelectorsToHclTerraform(struct?: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectorsResourceSelectorSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.in),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_in: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notIn),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectorsResourceSelectorSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectorsResourceSelectorSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._in !== undefined) {
      hasAnyValues = true;
      internalValueResult.in = this._in;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._notIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.notIn = this._notIn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectorsResourceSelectorSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._in = undefined;
      this._kind = undefined;
      this._notIn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._in = value.in;
      this._kind = value.kind;
      this._notIn = value.notIn;
    }
  }

  // in - computed: false, optional: true, required: false
  private _in?: string[]; 
  public get in() {
    return cdktf.Fn.tolist(this.getListAttribute('in'));
  }
  public set in(value: string[]) {
    this._in = value;
  }
  public resetIn() {
    this._in = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inInput() {
    return this._in;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // not_in - computed: false, optional: true, required: false
  private _notIn?: string[]; 
  public get notIn() {
    return cdktf.Fn.tolist(this.getListAttribute('not_in'));
  }
  public set notIn(value: string[]) {
    this._notIn = value;
  }
  public resetNotIn() {
    this._notIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInInput() {
    return this._notIn;
  }
}

export class DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectorsResourceSelectorSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectorsResourceSelectorSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectorsResourceSelectorSelectorsOutputReference {
    return new DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectorsResourceSelectorSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectors {
  /**
  * The name of the resource selector. The name must be unique within the assignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#name DataAlzArchitecture#name}
  */
  readonly name: string;
  /**
  * The selectors to use for the resource selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#resource_selector_selectors DataAlzArchitecture#resource_selector_selectors}
  */
  readonly resourceSelectorSelectors?: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectorsResourceSelectorSelectors[] | cdktf.IResolvable;
}

export function dataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectorsToTerraform(struct?: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resource_selector_selectors: cdktf.listMapper(dataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectorsResourceSelectorSelectorsToTerraform, false)(struct!.resourceSelectorSelectors),
  }
}


export function dataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectorsToHclTerraform(struct?: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_selector_selectors: {
      value: cdktf.listMapperHcl(dataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectorsResourceSelectorSelectorsToHclTerraform, false)(struct!.resourceSelectorSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectorsResourceSelectorSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resourceSelectorSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceSelectorSelectors = this._resourceSelectorSelectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._resourceSelectorSelectors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._resourceSelectorSelectors.internalValue = value.resourceSelectorSelectors;
    }
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

  // resource_selector_selectors - computed: false, optional: true, required: false
  private _resourceSelectorSelectors = new DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectorsResourceSelectorSelectorsList(this, "resource_selector_selectors", false);
  public get resourceSelectorSelectors() {
    return this._resourceSelectorSelectors;
  }
  public putResourceSelectorSelectors(value: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectorsResourceSelectorSelectors[] | cdktf.IResolvable) {
    this._resourceSelectorSelectors.internalValue = value;
  }
  public resetResourceSelectorSelectors() {
    this._resourceSelectorSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSelectorSelectorsInput() {
    return this._resourceSelectorSelectors.internalValue;
  }
}

export class DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectorsOutputReference {
    return new DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignments {
  /**
  * The enforcement mode for the policy assignment. Valid values are `Default` and `DoNotEnforce`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#enforcement_mode DataAlzArchitecture#enforcement_mode}
  */
  readonly enforcementMode?: string;
  /**
  * The identity type. Must be one of `SystemAssigned` or `UserAssigned`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#identity DataAlzArchitecture#identity}
  */
  readonly identity?: string;
  /**
  * A set of zero or one identity ids to assign to the policy assignment. Required if `identity` is `UserAssigned`. **Do not** pass in computed values, instead construct the resource id yourself.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#identity_ids DataAlzArchitecture#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * The non-compliance messages to use for the policy assignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#non_compliance_messages DataAlzArchitecture#non_compliance_messages}
  */
  readonly nonComplianceMessages?: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsNonComplianceMessages[] | cdktf.IResolvable;
  /**
  * The overrides for this policy assignment. There are a maximum of 10 overrides allowed per assignment. If specified here the overrides will replace the existing overrides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#overrides DataAlzArchitecture#overrides}
  */
  readonly overrides?: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverrides[] | cdktf.IResolvable;
  /**
  * The parameters to use for the policy assignment. The map key is the parameter name and the value is an JSON object containing a single `value` attribute with the values to apply. This to mitigate issues with the Terraform type system. E.g. `{ defaultName = jsonencode({ value = "value"}) }`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#parameters DataAlzArchitecture#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * The resource selectors to use for the policy assignment. A maximum of 10 resource selectors are allowed per assignment. If specified here the resource selectors will replace any existing resource selectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#resource_selectors DataAlzArchitecture#resource_selectors}
  */
  readonly resourceSelectors?: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectors[] | cdktf.IResolvable;
}

export function dataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsToTerraform(struct?: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforcement_mode: cdktf.stringToTerraform(struct!.enforcementMode),
    identity: cdktf.stringToTerraform(struct!.identity),
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    non_compliance_messages: cdktf.listMapper(dataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsNonComplianceMessagesToTerraform, false)(struct!.nonComplianceMessages),
    overrides: cdktf.listMapper(dataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverridesToTerraform, false)(struct!.overrides),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    resource_selectors: cdktf.listMapper(dataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectorsToTerraform, false)(struct!.resourceSelectors),
  }
}


export function dataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsToHclTerraform(struct?: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforcement_mode: {
      value: cdktf.stringToHclTerraform(struct!.enforcementMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity: {
      value: cdktf.stringToHclTerraform(struct!.identity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identityIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    non_compliance_messages: {
      value: cdktf.listMapperHcl(dataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsNonComplianceMessagesToHclTerraform, false)(struct!.nonComplianceMessages),
      isBlock: true,
      type: "set",
      storageClassType: "DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsNonComplianceMessagesList",
    },
    overrides: {
      value: cdktf.listMapperHcl(dataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverridesToHclTerraform, false)(struct!.overrides),
      isBlock: true,
      type: "list",
      storageClassType: "DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverridesList",
    },
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resource_selectors: {
      value: cdktf.listMapperHcl(dataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectorsToHclTerraform, false)(struct!.resourceSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforcementMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementMode = this._enforcementMode;
    }
    if (this._identity !== undefined) {
      hasAnyValues = true;
      internalValueResult.identity = this._identity;
    }
    if (this._identityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._nonComplianceMessages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonComplianceMessages = this._nonComplianceMessages?.internalValue;
    }
    if (this._overrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides?.internalValue;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._resourceSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceSelectors = this._resourceSelectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enforcementMode = undefined;
      this._identity = undefined;
      this._identityIds = undefined;
      this._nonComplianceMessages.internalValue = undefined;
      this._overrides.internalValue = undefined;
      this._parameters = undefined;
      this._resourceSelectors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enforcementMode = value.enforcementMode;
      this._identity = value.identity;
      this._identityIds = value.identityIds;
      this._nonComplianceMessages.internalValue = value.nonComplianceMessages;
      this._overrides.internalValue = value.overrides;
      this._parameters = value.parameters;
      this._resourceSelectors.internalValue = value.resourceSelectors;
    }
  }

  // enforcement_mode - computed: false, optional: true, required: false
  private _enforcementMode?: string; 
  public get enforcementMode() {
    return this.getStringAttribute('enforcement_mode');
  }
  public set enforcementMode(value: string) {
    this._enforcementMode = value;
  }
  public resetEnforcementMode() {
    this._enforcementMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementModeInput() {
    return this._enforcementMode;
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: string; 
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity;
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[]; 
  public get identityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_ids'));
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
  }

  // non_compliance_messages - computed: false, optional: true, required: false
  private _nonComplianceMessages = new DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsNonComplianceMessagesList(this, "non_compliance_messages", true);
  public get nonComplianceMessages() {
    return this._nonComplianceMessages;
  }
  public putNonComplianceMessages(value: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsNonComplianceMessages[] | cdktf.IResolvable) {
    this._nonComplianceMessages.internalValue = value;
  }
  public resetNonComplianceMessages() {
    this._nonComplianceMessages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonComplianceMessagesInput() {
    return this._nonComplianceMessages.internalValue;
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides = new DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOverrides[] | cdktf.IResolvable) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // resource_selectors - computed: false, optional: true, required: false
  private _resourceSelectors = new DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectorsList(this, "resource_selectors", false);
  public get resourceSelectors() {
    return this._resourceSelectors;
  }
  public putResourceSelectors(value: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsResourceSelectors[] | cdktf.IResolvable) {
    this._resourceSelectors.internalValue = value;
  }
  public resetResourceSelectors() {
    this._resourceSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSelectorsInput() {
    return this._resourceSelectors.internalValue;
  }
}

export class DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignments } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOutputReference {
    return new DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAlzArchitecturePolicyAssignmentsToModify {
  /**
  * A map of policy assignments to modify. The key is the policy assignment name, and the value is an object containing the modifications to make.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#policy_assignments DataAlzArchitecture#policy_assignments}
  */
  readonly policyAssignments?: { [key: string]: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignments } | cdktf.IResolvable;
}

export function dataAlzArchitecturePolicyAssignmentsToModifyToTerraform(struct?: DataAlzArchitecturePolicyAssignmentsToModify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_assignments: cdktf.hashMapper(dataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsToTerraform)(struct!.policyAssignments),
  }
}


export function dataAlzArchitecturePolicyAssignmentsToModifyToHclTerraform(struct?: DataAlzArchitecturePolicyAssignmentsToModify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_assignments: {
      value: cdktf.hashMapperHcl(dataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsToHclTerraform)(struct!.policyAssignments),
      isBlock: true,
      type: "map",
      storageClassType: "DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAlzArchitecturePolicyAssignmentsToModifyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAlzArchitecturePolicyAssignmentsToModify | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyAssignments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyAssignments = this._policyAssignments?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlzArchitecturePolicyAssignmentsToModify | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policyAssignments.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policyAssignments.internalValue = value.policyAssignments;
    }
  }

  // policy_assignments - computed: false, optional: true, required: false
  private _policyAssignments = new DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignmentsMap(this, "policy_assignments");
  public get policyAssignments() {
    return this._policyAssignments;
  }
  public putPolicyAssignments(value: { [key: string]: DataAlzArchitecturePolicyAssignmentsToModifyPolicyAssignments } | cdktf.IResolvable) {
    this._policyAssignments.internalValue = value;
  }
  public resetPolicyAssignments() {
    this._policyAssignments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyAssignmentsInput() {
    return this._policyAssignments.internalValue;
  }
}

export class DataAlzArchitecturePolicyAssignmentsToModifyMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DataAlzArchitecturePolicyAssignmentsToModify } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataAlzArchitecturePolicyAssignmentsToModifyOutputReference {
    return new DataAlzArchitecturePolicyAssignmentsToModifyOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAlzArchitecturePolicyRoleAssignments {
}

export function dataAlzArchitecturePolicyRoleAssignmentsToTerraform(struct?: DataAlzArchitecturePolicyRoleAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlzArchitecturePolicyRoleAssignmentsToHclTerraform(struct?: DataAlzArchitecturePolicyRoleAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlzArchitecturePolicyRoleAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlzArchitecturePolicyRoleAssignments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlzArchitecturePolicyRoleAssignments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // management_group_id - computed: true, optional: false, required: false
  public get managementGroupId() {
    return this.getStringAttribute('management_group_id');
  }

  // policy_assignment_name - computed: true, optional: false, required: false
  public get policyAssignmentName() {
    return this.getStringAttribute('policy_assignment_name');
  }

  // role_definition_id - computed: true, optional: false, required: false
  public get roleDefinitionId() {
    return this.getStringAttribute('role_definition_id');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}

export class DataAlzArchitecturePolicyRoleAssignmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlzArchitecturePolicyRoleAssignmentsOutputReference {
    return new DataAlzArchitecturePolicyRoleAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlzArchitectureTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#read DataAlzArchitecture#read}
  */
  readonly read?: string;
}

export function dataAlzArchitectureTimeoutsToTerraform(struct?: DataAlzArchitectureTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAlzArchitectureTimeoutsToHclTerraform(struct?: DataAlzArchitectureTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAlzArchitectureTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAlzArchitectureTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlzArchitectureTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture alz_architecture}
*/
export class DataAlzArchitecture extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alz_architecture";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlzArchitecture resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlzArchitecture to import
  * @param importFromId The id of the existing DataAlzArchitecture that should be imported. Refer to the {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlzArchitecture to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alz_architecture", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/azure/alz/0.20.0/docs/data-sources/architecture alz_architecture} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlzArchitectureConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlzArchitectureConfig) {
    super(scope, id, {
      terraformResourceType: 'alz_architecture',
      terraformGeneratorMetadata: {
        providerName: 'alz',
        providerVersion: '0.20.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._location = config.location;
    this._name = config.name;
    this._overridePolicyDefinitionParameterAssignPermissionsSet.internalValue = config.overridePolicyDefinitionParameterAssignPermissionsSet;
    this._overridePolicyDefinitionParameterAssignPermissionsUnset.internalValue = config.overridePolicyDefinitionParameterAssignPermissionsUnset;
    this._policyAssignmentsToModify.internalValue = config.policyAssignmentsToModify;
    this._policyDefaultValues = config.policyDefaultValues;
    this._rootManagementGroupId = config.rootManagementGroupId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // management_groups - computed: true, optional: false, required: false
  private _managementGroups = new DataAlzArchitectureManagementGroupsList(this, "management_groups", false);
  public get managementGroups() {
    return this._managementGroups;
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

  // override_policy_definition_parameter_assign_permissions_set - computed: false, optional: true, required: false
  private _overridePolicyDefinitionParameterAssignPermissionsSet = new DataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsSetList(this, "override_policy_definition_parameter_assign_permissions_set", true);
  public get overridePolicyDefinitionParameterAssignPermissionsSet() {
    return this._overridePolicyDefinitionParameterAssignPermissionsSet;
  }
  public putOverridePolicyDefinitionParameterAssignPermissionsSet(value: DataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsSet[] | cdktf.IResolvable) {
    this._overridePolicyDefinitionParameterAssignPermissionsSet.internalValue = value;
  }
  public resetOverridePolicyDefinitionParameterAssignPermissionsSet() {
    this._overridePolicyDefinitionParameterAssignPermissionsSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridePolicyDefinitionParameterAssignPermissionsSetInput() {
    return this._overridePolicyDefinitionParameterAssignPermissionsSet.internalValue;
  }

  // override_policy_definition_parameter_assign_permissions_unset - computed: false, optional: true, required: false
  private _overridePolicyDefinitionParameterAssignPermissionsUnset = new DataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsUnsetList(this, "override_policy_definition_parameter_assign_permissions_unset", true);
  public get overridePolicyDefinitionParameterAssignPermissionsUnset() {
    return this._overridePolicyDefinitionParameterAssignPermissionsUnset;
  }
  public putOverridePolicyDefinitionParameterAssignPermissionsUnset(value: DataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsUnset[] | cdktf.IResolvable) {
    this._overridePolicyDefinitionParameterAssignPermissionsUnset.internalValue = value;
  }
  public resetOverridePolicyDefinitionParameterAssignPermissionsUnset() {
    this._overridePolicyDefinitionParameterAssignPermissionsUnset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridePolicyDefinitionParameterAssignPermissionsUnsetInput() {
    return this._overridePolicyDefinitionParameterAssignPermissionsUnset.internalValue;
  }

  // policy_assignments_to_modify - computed: false, optional: true, required: false
  private _policyAssignmentsToModify = new DataAlzArchitecturePolicyAssignmentsToModifyMap(this, "policy_assignments_to_modify");
  public get policyAssignmentsToModify() {
    return this._policyAssignmentsToModify;
  }
  public putPolicyAssignmentsToModify(value: { [key: string]: DataAlzArchitecturePolicyAssignmentsToModify } | cdktf.IResolvable) {
    this._policyAssignmentsToModify.internalValue = value;
  }
  public resetPolicyAssignmentsToModify() {
    this._policyAssignmentsToModify.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyAssignmentsToModifyInput() {
    return this._policyAssignmentsToModify.internalValue;
  }

  // policy_default_values - computed: false, optional: true, required: false
  private _policyDefaultValues?: { [key: string]: string }; 
  public get policyDefaultValues() {
    return this.getStringMapAttribute('policy_default_values');
  }
  public set policyDefaultValues(value: { [key: string]: string }) {
    this._policyDefaultValues = value;
  }
  public resetPolicyDefaultValues() {
    this._policyDefaultValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDefaultValuesInput() {
    return this._policyDefaultValues;
  }

  // policy_role_assignments - computed: true, optional: false, required: false
  private _policyRoleAssignments = new DataAlzArchitecturePolicyRoleAssignmentsList(this, "policy_role_assignments", true);
  public get policyRoleAssignments() {
    return this._policyRoleAssignments;
  }

  // root_management_group_id - computed: false, optional: false, required: true
  private _rootManagementGroupId?: string; 
  public get rootManagementGroupId() {
    return this.getStringAttribute('root_management_group_id');
  }
  public set rootManagementGroupId(value: string) {
    this._rootManagementGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootManagementGroupIdInput() {
    return this._rootManagementGroupId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAlzArchitectureTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAlzArchitectureTimeouts) {
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
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      override_policy_definition_parameter_assign_permissions_set: cdktf.listMapper(dataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsSetToTerraform, false)(this._overridePolicyDefinitionParameterAssignPermissionsSet.internalValue),
      override_policy_definition_parameter_assign_permissions_unset: cdktf.listMapper(dataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsUnsetToTerraform, false)(this._overridePolicyDefinitionParameterAssignPermissionsUnset.internalValue),
      policy_assignments_to_modify: cdktf.hashMapper(dataAlzArchitecturePolicyAssignmentsToModifyToTerraform)(this._policyAssignmentsToModify.internalValue),
      policy_default_values: cdktf.hashMapper(cdktf.stringToTerraform)(this._policyDefaultValues),
      root_management_group_id: cdktf.stringToTerraform(this._rootManagementGroupId),
      timeouts: dataAlzArchitectureTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      override_policy_definition_parameter_assign_permissions_set: {
        value: cdktf.listMapperHcl(dataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsSetToHclTerraform, false)(this._overridePolicyDefinitionParameterAssignPermissionsSet.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsSetList",
      },
      override_policy_definition_parameter_assign_permissions_unset: {
        value: cdktf.listMapperHcl(dataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsUnsetToHclTerraform, false)(this._overridePolicyDefinitionParameterAssignPermissionsUnset.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAlzArchitectureOverridePolicyDefinitionParameterAssignPermissionsUnsetList",
      },
      policy_assignments_to_modify: {
        value: cdktf.hashMapperHcl(dataAlzArchitecturePolicyAssignmentsToModifyToHclTerraform)(this._policyAssignmentsToModify.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "DataAlzArchitecturePolicyAssignmentsToModifyMap",
      },
      policy_default_values: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._policyDefaultValues),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      root_management_group_id: {
        value: cdktf.stringToHclTerraform(this._rootManagementGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataAlzArchitectureTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAlzArchitectureTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
