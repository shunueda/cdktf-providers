// https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyIaasResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The policy criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#criteria PolicyIaasResource#criteria}
  */
  readonly criteria?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * A human-friendly description for the policy instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#description PolicyIaasResource#description}
  */
  readonly description?: string;
  /**
  * The type of enforcement for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#enforcement_type PolicyIaasResource#enforcement_type}
  */
  readonly enforcementType: string;
  /**
  * Failure policy to apply when the policy fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#failure_policy PolicyIaasResource#failure_policy}
  */
  readonly failurePolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#id PolicyIaasResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Map of {key,value} pairs that must be met for an object to be validated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#match_labels PolicyIaasResource#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * Match policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#match_policy PolicyIaasResource#match_policy}
  */
  readonly matchPolicy?: string;
  /**
  * A human-friendly name used as an identifier for the policy instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#name PolicyIaasResource#name}
  */
  readonly name: string;
  /**
  * The project based criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#project_criteria PolicyIaasResource#project_criteria}
  */
  readonly projectCriteria?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * The id of the project this entity belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#project_id PolicyIaasResource#project_id}
  */
  readonly projectId?: string;
  /**
  * List of validation actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#validation_actions PolicyIaasResource#validation_actions}
  */
  readonly validationActions: string[];
  /**
  * exclude_resource_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#exclude_resource_rules PolicyIaasResource#exclude_resource_rules}
  */
  readonly excludeResourceRules?: PolicyIaasResourceExcludeResourceRules[] | cdktf.IResolvable;
  /**
  * match_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#match_conditions PolicyIaasResource#match_conditions}
  */
  readonly matchConditions?: PolicyIaasResourceMatchConditions[] | cdktf.IResolvable;
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#match_expressions PolicyIaasResource#match_expressions}
  */
  readonly matchExpressions?: PolicyIaasResourceMatchExpressions[] | cdktf.IResolvable;
  /**
  * resource_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#resource_rules PolicyIaasResource#resource_rules}
  */
  readonly resourceRules: PolicyIaasResourceResourceRules[] | cdktf.IResolvable;
  /**
  * validations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#validations PolicyIaasResource#validations}
  */
  readonly validations: PolicyIaasResourceValidations[] | cdktf.IResolvable;
}
export interface PolicyIaasResourceExcludeResourceRules {
  /**
  * List of API groups the resources belong to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#api_groups PolicyIaasResource#api_groups}
  */
  readonly apiGroups: string[];
  /**
  * List of API Versions the resources belong to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#api_versions PolicyIaasResource#api_versions}
  */
  readonly apiVersions: string[];
  /**
  * List of Operations the admission hook cares about.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#operations PolicyIaasResource#operations}
  */
  readonly operations: string[];
  /**
  * List of Resources this rule applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#resources PolicyIaasResource#resources}
  */
  readonly resources: string[];
}

export function policyIaasResourceExcludeResourceRulesToTerraform(struct?: PolicyIaasResourceExcludeResourceRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
    api_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiVersions),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
  }
}


export function policyIaasResourceExcludeResourceRulesToHclTerraform(struct?: PolicyIaasResourceExcludeResourceRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    api_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiVersions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyIaasResourceExcludeResourceRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyIaasResourceExcludeResourceRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups;
    }
    if (this._apiVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersions = this._apiVersions;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyIaasResourceExcludeResourceRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroups = undefined;
      this._apiVersions = undefined;
      this._operations = undefined;
      this._resources = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroups = value.apiGroups;
      this._apiVersions = value.apiVersions;
      this._operations = value.operations;
      this._resources = value.resources;
    }
  }

  // api_groups - computed: false, optional: false, required: true
  private _apiGroups?: string[]; 
  public get apiGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('api_groups'));
  }
  public set apiGroups(value: string[]) {
    this._apiGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups;
  }

  // api_versions - computed: false, optional: false, required: true
  private _apiVersions?: string[]; 
  public get apiVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('api_versions'));
  }
  public set apiVersions(value: string[]) {
    this._apiVersions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionsInput() {
    return this._apiVersions;
  }

  // operations - computed: false, optional: false, required: true
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // resources - computed: false, optional: false, required: true
  private _resources?: string[]; 
  public get resources() {
    return cdktf.Fn.tolist(this.getListAttribute('resources'));
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}

export class PolicyIaasResourceExcludeResourceRulesList extends cdktf.ComplexList {
  public internalValue? : PolicyIaasResourceExcludeResourceRules[] | cdktf.IResolvable

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
  public get(index: number): PolicyIaasResourceExcludeResourceRulesOutputReference {
    return new PolicyIaasResourceExcludeResourceRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyIaasResourceMatchConditions {
  /**
  * Expression which will be evaluated by CEL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#expression PolicyIaasResource#expression}
  */
  readonly expression: string;
  /**
  * Identifier for this match condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#name PolicyIaasResource#name}
  */
  readonly name: string;
}

export function policyIaasResourceMatchConditionsToTerraform(struct?: PolicyIaasResourceMatchConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function policyIaasResourceMatchConditionsToHclTerraform(struct?: PolicyIaasResourceMatchConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyIaasResourceMatchConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyIaasResourceMatchConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyIaasResourceMatchConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._name = value.name;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
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
}

export class PolicyIaasResourceMatchConditionsList extends cdktf.ComplexList {
  public internalValue? : PolicyIaasResourceMatchConditions[] | cdktf.IResolvable

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
  public get(index: number): PolicyIaasResourceMatchConditionsOutputReference {
    return new PolicyIaasResourceMatchConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyIaasResourceMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#key PolicyIaasResource#key}
  */
  readonly key: string;
  /**
  * A key's relationship to a set of values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#operator PolicyIaasResource#operator}
  */
  readonly operator: string;
  /**
  * An array of string values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#values PolicyIaasResource#values}
  */
  readonly values: string[];
}

export function policyIaasResourceMatchExpressionsToTerraform(struct?: PolicyIaasResourceMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function policyIaasResourceMatchExpressionsToHclTerraform(struct?: PolicyIaasResourceMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyIaasResourceMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyIaasResourceMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyIaasResourceMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class PolicyIaasResourceMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : PolicyIaasResourceMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): PolicyIaasResourceMatchExpressionsOutputReference {
    return new PolicyIaasResourceMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyIaasResourceResourceRules {
  /**
  * List of API groups the resources belong to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#api_groups PolicyIaasResource#api_groups}
  */
  readonly apiGroups: string[];
  /**
  * List of API Versions the resources belong to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#api_versions PolicyIaasResource#api_versions}
  */
  readonly apiVersions: string[];
  /**
  * List of Operations the admission hook cares about.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#operations PolicyIaasResource#operations}
  */
  readonly operations: string[];
  /**
  * List of Resources this rule applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#resources PolicyIaasResource#resources}
  */
  readonly resources: string[];
}

export function policyIaasResourceResourceRulesToTerraform(struct?: PolicyIaasResourceResourceRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
    api_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiVersions),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
  }
}


export function policyIaasResourceResourceRulesToHclTerraform(struct?: PolicyIaasResourceResourceRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    api_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiVersions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyIaasResourceResourceRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyIaasResourceResourceRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups;
    }
    if (this._apiVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersions = this._apiVersions;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyIaasResourceResourceRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroups = undefined;
      this._apiVersions = undefined;
      this._operations = undefined;
      this._resources = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroups = value.apiGroups;
      this._apiVersions = value.apiVersions;
      this._operations = value.operations;
      this._resources = value.resources;
    }
  }

  // api_groups - computed: false, optional: false, required: true
  private _apiGroups?: string[]; 
  public get apiGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('api_groups'));
  }
  public set apiGroups(value: string[]) {
    this._apiGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups;
  }

  // api_versions - computed: false, optional: false, required: true
  private _apiVersions?: string[]; 
  public get apiVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('api_versions'));
  }
  public set apiVersions(value: string[]) {
    this._apiVersions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionsInput() {
    return this._apiVersions;
  }

  // operations - computed: false, optional: false, required: true
  private _operations?: string[]; 
  public get operations() {
    return cdktf.Fn.tolist(this.getListAttribute('operations'));
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // resources - computed: false, optional: false, required: true
  private _resources?: string[]; 
  public get resources() {
    return cdktf.Fn.tolist(this.getListAttribute('resources'));
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}

export class PolicyIaasResourceResourceRulesList extends cdktf.ComplexList {
  public internalValue? : PolicyIaasResourceResourceRules[] | cdktf.IResolvable

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
  public get(index: number): PolicyIaasResourceResourceRulesOutputReference {
    return new PolicyIaasResourceResourceRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyIaasResourceValidations {
  /**
  * Expression which will be evaluated by CEL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#expression PolicyIaasResource#expression}
  */
  readonly expression: string;
  /**
  * Message displayed when validation fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#message PolicyIaasResource#message}
  */
  readonly message?: string;
  /**
  * CEL expression that evaluates to the validation failure message that is returned when this rule fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#message_expression PolicyIaasResource#message_expression}
  */
  readonly messageExpression?: string;
  /**
  * Machine-readable description of why this validation failed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#reason PolicyIaasResource#reason}
  */
  readonly reason?: string;
}

export function policyIaasResourceValidationsToTerraform(struct?: PolicyIaasResourceValidations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    message: cdktf.stringToTerraform(struct!.message),
    message_expression: cdktf.stringToTerraform(struct!.messageExpression),
    reason: cdktf.stringToTerraform(struct!.reason),
  }
}


export function policyIaasResourceValidationsToHclTerraform(struct?: PolicyIaasResourceValidations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_expression: {
      value: cdktf.stringToHclTerraform(struct!.messageExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyIaasResourceValidationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyIaasResourceValidations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._messageExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageExpression = this._messageExpression;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyIaasResourceValidations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._message = undefined;
      this._messageExpression = undefined;
      this._reason = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._message = value.message;
      this._messageExpression = value.messageExpression;
      this._reason = value.reason;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // message_expression - computed: false, optional: true, required: false
  private _messageExpression?: string; 
  public get messageExpression() {
    return this.getStringAttribute('message_expression');
  }
  public set messageExpression(value: string) {
    this._messageExpression = value;
  }
  public resetMessageExpression() {
    this._messageExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageExpressionInput() {
    return this._messageExpression;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }
}

export class PolicyIaasResourceValidationsList extends cdktf.ComplexList {
  public internalValue? : PolicyIaasResourceValidations[] | cdktf.IResolvable

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
  public get(index: number): PolicyIaasResourceValidationsOutputReference {
    return new PolicyIaasResourceValidationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource vra_policy_iaas_resource}
*/
export class PolicyIaasResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vra_policy_iaas_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyIaasResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyIaasResource to import
  * @param importFromId The id of the existing PolicyIaasResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyIaasResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vra_policy_iaas_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/policy_iaas_resource vra_policy_iaas_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyIaasResourceConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyIaasResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'vra_policy_iaas_resource',
      terraformGeneratorMetadata: {
        providerName: 'vra',
        providerVersion: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._criteria = config.criteria;
    this._description = config.description;
    this._enforcementType = config.enforcementType;
    this._failurePolicy = config.failurePolicy;
    this._id = config.id;
    this._matchLabels = config.matchLabels;
    this._matchPolicy = config.matchPolicy;
    this._name = config.name;
    this._projectCriteria = config.projectCriteria;
    this._projectId = config.projectId;
    this._validationActions = config.validationActions;
    this._excludeResourceRules.internalValue = config.excludeResourceRules;
    this._matchConditions.internalValue = config.matchConditions;
    this._matchExpressions.internalValue = config.matchExpressions;
    this._resourceRules.internalValue = config.resourceRules;
    this._validations.internalValue = config.validations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // criteria - computed: false, optional: true, required: false
  private _criteria?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get criteria() {
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('criteria')));
  }
  public set criteria(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._criteria = value;
  }
  public resetCriteria() {
    this._criteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria;
  }

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

  // enforcement_type - computed: false, optional: false, required: true
  private _enforcementType?: string; 
  public get enforcementType() {
    return this.getStringAttribute('enforcement_type');
  }
  public set enforcementType(value: string) {
    this._enforcementType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementTypeInput() {
    return this._enforcementType;
  }

  // failure_policy - computed: false, optional: false, required: true
  private _failurePolicy?: string; 
  public get failurePolicy() {
    return this.getStringAttribute('failure_policy');
  }
  public set failurePolicy(value: string) {
    this._failurePolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failurePolicyInput() {
    return this._failurePolicy;
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

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
  }

  // last_updated_by - computed: true, optional: false, required: false
  public get lastUpdatedBy() {
    return this.getStringAttribute('last_updated_by');
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_policy - computed: false, optional: true, required: false
  private _matchPolicy?: string; 
  public get matchPolicy() {
    return this.getStringAttribute('match_policy');
  }
  public set matchPolicy(value: string) {
    this._matchPolicy = value;
  }
  public resetMatchPolicy() {
    this._matchPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPolicyInput() {
    return this._matchPolicy;
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

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // project_criteria - computed: false, optional: true, required: false
  private _projectCriteria?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get projectCriteria() {
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('project_criteria')));
  }
  public set projectCriteria(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._projectCriteria = value;
  }
  public resetProjectCriteria() {
    this._projectCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectCriteriaInput() {
    return this._projectCriteria;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // validation_actions - computed: false, optional: false, required: true
  private _validationActions?: string[]; 
  public get validationActions() {
    return cdktf.Fn.tolist(this.getListAttribute('validation_actions'));
  }
  public set validationActions(value: string[]) {
    this._validationActions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationActionsInput() {
    return this._validationActions;
  }

  // exclude_resource_rules - computed: false, optional: true, required: false
  private _excludeResourceRules = new PolicyIaasResourceExcludeResourceRulesList(this, "exclude_resource_rules", true);
  public get excludeResourceRules() {
    return this._excludeResourceRules;
  }
  public putExcludeResourceRules(value: PolicyIaasResourceExcludeResourceRules[] | cdktf.IResolvable) {
    this._excludeResourceRules.internalValue = value;
  }
  public resetExcludeResourceRules() {
    this._excludeResourceRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeResourceRulesInput() {
    return this._excludeResourceRules.internalValue;
  }

  // match_conditions - computed: false, optional: true, required: false
  private _matchConditions = new PolicyIaasResourceMatchConditionsList(this, "match_conditions", true);
  public get matchConditions() {
    return this._matchConditions;
  }
  public putMatchConditions(value: PolicyIaasResourceMatchConditions[] | cdktf.IResolvable) {
    this._matchConditions.internalValue = value;
  }
  public resetMatchConditions() {
    this._matchConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchConditionsInput() {
    return this._matchConditions.internalValue;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new PolicyIaasResourceMatchExpressionsList(this, "match_expressions", true);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: PolicyIaasResourceMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // resource_rules - computed: false, optional: false, required: true
  private _resourceRules = new PolicyIaasResourceResourceRulesList(this, "resource_rules", true);
  public get resourceRules() {
    return this._resourceRules;
  }
  public putResourceRules(value: PolicyIaasResourceResourceRules[] | cdktf.IResolvable) {
    this._resourceRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRulesInput() {
    return this._resourceRules.internalValue;
  }

  // validations - computed: false, optional: false, required: true
  private _validations = new PolicyIaasResourceValidationsList(this, "validations", true);
  public get validations() {
    return this._validations;
  }
  public putValidations(value: PolicyIaasResourceValidations[] | cdktf.IResolvable) {
    this._validations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationsInput() {
    return this._validations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      criteria: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._criteria),
      description: cdktf.stringToTerraform(this._description),
      enforcement_type: cdktf.stringToTerraform(this._enforcementType),
      failure_policy: cdktf.stringToTerraform(this._failurePolicy),
      id: cdktf.stringToTerraform(this._id),
      match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._matchLabels),
      match_policy: cdktf.stringToTerraform(this._matchPolicy),
      name: cdktf.stringToTerraform(this._name),
      project_criteria: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._projectCriteria),
      project_id: cdktf.stringToTerraform(this._projectId),
      validation_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._validationActions),
      exclude_resource_rules: cdktf.listMapper(policyIaasResourceExcludeResourceRulesToTerraform, true)(this._excludeResourceRules.internalValue),
      match_conditions: cdktf.listMapper(policyIaasResourceMatchConditionsToTerraform, true)(this._matchConditions.internalValue),
      match_expressions: cdktf.listMapper(policyIaasResourceMatchExpressionsToTerraform, true)(this._matchExpressions.internalValue),
      resource_rules: cdktf.listMapper(policyIaasResourceResourceRulesToTerraform, true)(this._resourceRules.internalValue),
      validations: cdktf.listMapper(policyIaasResourceValidationsToTerraform, true)(this._validations.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      criteria: {
        value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(this._criteria),
        isBlock: false,
        type: "set",
        storageClassType: "stringMapList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforcement_type: {
        value: cdktf.stringToHclTerraform(this._enforcementType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failure_policy: {
        value: cdktf.stringToHclTerraform(this._failurePolicy),
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
      match_labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._matchLabels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      match_policy: {
        value: cdktf.stringToHclTerraform(this._matchPolicy),
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
      project_criteria: {
        value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(this._projectCriteria),
        isBlock: false,
        type: "set",
        storageClassType: "stringMapList",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validation_actions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._validationActions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      exclude_resource_rules: {
        value: cdktf.listMapperHcl(policyIaasResourceExcludeResourceRulesToHclTerraform, true)(this._excludeResourceRules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyIaasResourceExcludeResourceRulesList",
      },
      match_conditions: {
        value: cdktf.listMapperHcl(policyIaasResourceMatchConditionsToHclTerraform, true)(this._matchConditions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyIaasResourceMatchConditionsList",
      },
      match_expressions: {
        value: cdktf.listMapperHcl(policyIaasResourceMatchExpressionsToHclTerraform, true)(this._matchExpressions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyIaasResourceMatchExpressionsList",
      },
      resource_rules: {
        value: cdktf.listMapperHcl(policyIaasResourceResourceRulesToHclTerraform, true)(this._resourceRules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyIaasResourceResourceRulesList",
      },
      validations: {
        value: cdktf.listMapperHcl(policyIaasResourceValidationsToHclTerraform, true)(this._validations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyIaasResourceValidationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
