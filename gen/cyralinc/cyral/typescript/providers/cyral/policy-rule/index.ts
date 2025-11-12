// https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Hosts specification that limits access to only those users connecting from a certain network location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#hosts PolicyRule#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#id PolicyRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the policy you are adding this rule to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#policy_id PolicyRule#policy_id}
  */
  readonly policyId: string;
  /**
  * deletes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#deletes PolicyRule#deletes}
  */
  readonly deletes?: PolicyRuleDeletes[] | cdktf.IResolvable;
  /**
  * identities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#identities PolicyRule#identities}
  */
  readonly identities?: PolicyRuleIdentities;
  /**
  * reads block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#reads PolicyRule#reads}
  */
  readonly reads?: PolicyRuleReads[] | cdktf.IResolvable;
  /**
  * updates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#updates PolicyRule#updates}
  */
  readonly updates?: PolicyRuleUpdates[] | cdktf.IResolvable;
}
export interface PolicyRuleDeletesDatasetRewrites {
  /**
  * The dataset that should be rewritten.In the case of Snowflake, this denotes a fully qualified table name in the form: `<database>.<schema>.<table>`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#dataset PolicyRule#dataset}
  */
  readonly dataset: string;
  /**
  * The set of parameters used in the substitution request, these are references to fields in the activity log as described in the [Additional Checks section](https://cyral.com/docs/policy/rules/#additional-checks).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#parameters PolicyRule#parameters}
  */
  readonly parameters: string[];
  /**
  * The name of the repository that the rewrite applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#repo PolicyRule#repo}
  */
  readonly repo: string;
  /**
  * The request used to substitute references to the dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#substitution PolicyRule#substitution}
  */
  readonly substitution: string;
}

export function policyRuleDeletesDatasetRewritesToTerraform(struct?: PolicyRuleDeletesDatasetRewrites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset: cdktf.stringToTerraform(struct!.dataset),
    parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.parameters),
    repo: cdktf.stringToTerraform(struct!.repo),
    substitution: cdktf.stringToTerraform(struct!.substitution),
  }
}


export function policyRuleDeletesDatasetRewritesToHclTerraform(struct?: PolicyRuleDeletesDatasetRewrites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset: {
      value: cdktf.stringToHclTerraform(struct!.dataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.parameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    substitution: {
      value: cdktf.stringToHclTerraform(struct!.substitution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyRuleDeletesDatasetRewritesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyRuleDeletesDatasetRewrites | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    if (this._substitution !== undefined) {
      hasAnyValues = true;
      internalValueResult.substitution = this._substitution;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyRuleDeletesDatasetRewrites | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataset = undefined;
      this._parameters = undefined;
      this._repo = undefined;
      this._substitution = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataset = value.dataset;
      this._parameters = value.parameters;
      this._repo = value.repo;
      this._substitution = value.substitution;
    }
  }

  // dataset - computed: false, optional: false, required: true
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters?: string[]; 
  public get parameters() {
    return this.getListAttribute('parameters');
  }
  public set parameters(value: string[]) {
    this._parameters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // repo - computed: false, optional: false, required: true
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // substitution - computed: false, optional: false, required: true
  private _substitution?: string; 
  public get substitution() {
    return this.getStringAttribute('substitution');
  }
  public set substitution(value: string) {
    this._substitution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get substitutionInput() {
    return this._substitution;
  }
}

export class PolicyRuleDeletesDatasetRewritesList extends cdktf.ComplexList {
  public internalValue? : PolicyRuleDeletesDatasetRewrites[] | cdktf.IResolvable

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
  public get(index: number): PolicyRuleDeletesDatasetRewritesOutputReference {
    return new PolicyRuleDeletesDatasetRewritesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyRuleDeletes {
  /**
  * Constraints on the data access specified in [Rego](https://www.openpolicyagent.org/docs/latest/policy-language/). See [Additional checks](https://cyral.com/docs/policy/rules/#additional-checks).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#additional_checks PolicyRule#additional_checks}
  */
  readonly additionalChecks?: string;
  /**
  * The data locations protected by this rule. Use `*` if you want to define `any` data location. For more information, see the [policy rules](https://cyral.com/docs/policy/rules#contexted-rules) documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#data PolicyRule#data}
  */
  readonly data: string[];
  /**
  * Rate Limit specifies the limit of calls that a user can make within a given time period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#rate_limit PolicyRule#rate_limit}
  */
  readonly rateLimit?: number;
  /**
  * The number of records (for example, rows or documents) that can be accessed/affected in a single statement. Use positive integer numbers to define how many records. If you want to define `any` number of records, set to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#rows PolicyRule#rows}
  */
  readonly rows: number;
  /**
  * severity level that's recorded when someone violate this rule. This is an informational value. Settings: (`low` | `medium` | `high`). If not specified, the severity is considered to be low.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#severity PolicyRule#severity}
  */
  readonly severity?: string;
  /**
  * dataset_rewrites block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#dataset_rewrites PolicyRule#dataset_rewrites}
  */
  readonly datasetRewrites?: PolicyRuleDeletesDatasetRewrites[] | cdktf.IResolvable;
}

export function policyRuleDeletesToTerraform(struct?: PolicyRuleDeletes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_checks: cdktf.stringToTerraform(struct!.additionalChecks),
    data: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.data),
    rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
    rows: cdktf.numberToTerraform(struct!.rows),
    severity: cdktf.stringToTerraform(struct!.severity),
    dataset_rewrites: cdktf.listMapper(policyRuleDeletesDatasetRewritesToTerraform, true)(struct!.datasetRewrites),
  }
}


export function policyRuleDeletesToHclTerraform(struct?: PolicyRuleDeletes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_checks: {
      value: cdktf.stringToHclTerraform(struct!.additionalChecks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.data),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.rateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rows: {
      value: cdktf.numberToHclTerraform(struct!.rows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset_rewrites: {
      value: cdktf.listMapperHcl(policyRuleDeletesDatasetRewritesToHclTerraform, true)(struct!.datasetRewrites),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyRuleDeletesDatasetRewritesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyRuleDeletesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyRuleDeletes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalChecks !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalChecks = this._additionalChecks;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._rateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit;
    }
    if (this._rows !== undefined) {
      hasAnyValues = true;
      internalValueResult.rows = this._rows;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._datasetRewrites?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetRewrites = this._datasetRewrites?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyRuleDeletes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalChecks = undefined;
      this._data = undefined;
      this._rateLimit = undefined;
      this._rows = undefined;
      this._severity = undefined;
      this._datasetRewrites.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalChecks = value.additionalChecks;
      this._data = value.data;
      this._rateLimit = value.rateLimit;
      this._rows = value.rows;
      this._severity = value.severity;
      this._datasetRewrites.internalValue = value.datasetRewrites;
    }
  }

  // additional_checks - computed: false, optional: true, required: false
  private _additionalChecks?: string; 
  public get additionalChecks() {
    return this.getStringAttribute('additional_checks');
  }
  public set additionalChecks(value: string) {
    this._additionalChecks = value;
  }
  public resetAdditionalChecks() {
    this._additionalChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalChecksInput() {
    return this._additionalChecks;
  }

  // data - computed: false, optional: false, required: true
  private _data?: string[]; 
  public get data() {
    return this.getListAttribute('data');
  }
  public set data(value: string[]) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }

  // rows - computed: false, optional: false, required: true
  private _rows?: number; 
  public get rows() {
    return this.getNumberAttribute('rows');
  }
  public set rows(value: number) {
    this._rows = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowsInput() {
    return this._rows;
  }

  // severity - computed: false, optional: true, required: false
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

  // dataset_rewrites - computed: false, optional: true, required: false
  private _datasetRewrites = new PolicyRuleDeletesDatasetRewritesList(this, "dataset_rewrites", false);
  public get datasetRewrites() {
    return this._datasetRewrites;
  }
  public putDatasetRewrites(value: PolicyRuleDeletesDatasetRewrites[] | cdktf.IResolvable) {
    this._datasetRewrites.internalValue = value;
  }
  public resetDatasetRewrites() {
    this._datasetRewrites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetRewritesInput() {
    return this._datasetRewrites.internalValue;
  }
}

export class PolicyRuleDeletesList extends cdktf.ComplexList {
  public internalValue? : PolicyRuleDeletes[] | cdktf.IResolvable

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
  public get(index: number): PolicyRuleDeletesOutputReference {
    return new PolicyRuleDeletesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyRuleIdentities {
  /**
  * Database roles that this rule will apply to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#db_roles PolicyRule#db_roles}
  */
  readonly dbRoles?: string[];
  /**
  * Groups that this rule will apply to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#groups PolicyRule#groups}
  */
  readonly groups?: string[];
  /**
  * Services that this rule will apply to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#services PolicyRule#services}
  */
  readonly services?: string[];
  /**
  * Users that this rule will apply to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#users PolicyRule#users}
  */
  readonly users?: string[];
}

export function policyRuleIdentitiesToTerraform(struct?: PolicyRuleIdentitiesOutputReference | PolicyRuleIdentities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dbRoles),
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
  }
}


export function policyRuleIdentitiesToHclTerraform(struct?: PolicyRuleIdentitiesOutputReference | PolicyRuleIdentities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dbRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.users),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyRuleIdentitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyRuleIdentities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbRoles = this._dbRoles;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyRuleIdentities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbRoles = undefined;
      this._groups = undefined;
      this._services = undefined;
      this._users = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbRoles = value.dbRoles;
      this._groups = value.groups;
      this._services = value.services;
      this._users = value.users;
    }
  }

  // db_roles - computed: false, optional: true, required: false
  private _dbRoles?: string[]; 
  public get dbRoles() {
    return this.getListAttribute('db_roles');
  }
  public set dbRoles(value: string[]) {
    this._dbRoles = value;
  }
  public resetDbRoles() {
    this._dbRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbRolesInput() {
    return this._dbRoles;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // users - computed: false, optional: true, required: false
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
}
export interface PolicyRuleReadsDatasetRewrites {
  /**
  * The dataset that should be rewritten.In the case of Snowflake, this denotes a fully qualified table name in the form: `<database>.<schema>.<table>`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#dataset PolicyRule#dataset}
  */
  readonly dataset: string;
  /**
  * The set of parameters used in the substitution request, these are references to fields in the activity log as described in the [Additional Checks section](https://cyral.com/docs/policy/rules/#additional-checks).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#parameters PolicyRule#parameters}
  */
  readonly parameters: string[];
  /**
  * The name of the repository that the rewrite applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#repo PolicyRule#repo}
  */
  readonly repo: string;
  /**
  * The request used to substitute references to the dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#substitution PolicyRule#substitution}
  */
  readonly substitution: string;
}

export function policyRuleReadsDatasetRewritesToTerraform(struct?: PolicyRuleReadsDatasetRewrites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset: cdktf.stringToTerraform(struct!.dataset),
    parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.parameters),
    repo: cdktf.stringToTerraform(struct!.repo),
    substitution: cdktf.stringToTerraform(struct!.substitution),
  }
}


export function policyRuleReadsDatasetRewritesToHclTerraform(struct?: PolicyRuleReadsDatasetRewrites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset: {
      value: cdktf.stringToHclTerraform(struct!.dataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.parameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    substitution: {
      value: cdktf.stringToHclTerraform(struct!.substitution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyRuleReadsDatasetRewritesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyRuleReadsDatasetRewrites | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    if (this._substitution !== undefined) {
      hasAnyValues = true;
      internalValueResult.substitution = this._substitution;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyRuleReadsDatasetRewrites | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataset = undefined;
      this._parameters = undefined;
      this._repo = undefined;
      this._substitution = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataset = value.dataset;
      this._parameters = value.parameters;
      this._repo = value.repo;
      this._substitution = value.substitution;
    }
  }

  // dataset - computed: false, optional: false, required: true
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters?: string[]; 
  public get parameters() {
    return this.getListAttribute('parameters');
  }
  public set parameters(value: string[]) {
    this._parameters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // repo - computed: false, optional: false, required: true
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // substitution - computed: false, optional: false, required: true
  private _substitution?: string; 
  public get substitution() {
    return this.getStringAttribute('substitution');
  }
  public set substitution(value: string) {
    this._substitution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get substitutionInput() {
    return this._substitution;
  }
}

export class PolicyRuleReadsDatasetRewritesList extends cdktf.ComplexList {
  public internalValue? : PolicyRuleReadsDatasetRewrites[] | cdktf.IResolvable

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
  public get(index: number): PolicyRuleReadsDatasetRewritesOutputReference {
    return new PolicyRuleReadsDatasetRewritesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyRuleReads {
  /**
  * Constraints on the data access specified in [Rego](https://www.openpolicyagent.org/docs/latest/policy-language/). See [Additional checks](https://cyral.com/docs/policy/rules/#additional-checks).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#additional_checks PolicyRule#additional_checks}
  */
  readonly additionalChecks?: string;
  /**
  * The data locations protected by this rule. Use `*` if you want to define `any` data location. For more information, see the [policy rules](https://cyral.com/docs/policy/rules#contexted-rules) documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#data PolicyRule#data}
  */
  readonly data: string[];
  /**
  * Rate Limit specifies the limit of calls that a user can make within a given time period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#rate_limit PolicyRule#rate_limit}
  */
  readonly rateLimit?: number;
  /**
  * The number of records (for example, rows or documents) that can be accessed/affected in a single statement. Use positive integer numbers to define how many records. If you want to define `any` number of records, set to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#rows PolicyRule#rows}
  */
  readonly rows: number;
  /**
  * severity level that's recorded when someone violate this rule. This is an informational value. Settings: (`low` | `medium` | `high`). If not specified, the severity is considered to be low.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#severity PolicyRule#severity}
  */
  readonly severity?: string;
  /**
  * dataset_rewrites block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#dataset_rewrites PolicyRule#dataset_rewrites}
  */
  readonly datasetRewrites?: PolicyRuleReadsDatasetRewrites[] | cdktf.IResolvable;
}

export function policyRuleReadsToTerraform(struct?: PolicyRuleReads | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_checks: cdktf.stringToTerraform(struct!.additionalChecks),
    data: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.data),
    rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
    rows: cdktf.numberToTerraform(struct!.rows),
    severity: cdktf.stringToTerraform(struct!.severity),
    dataset_rewrites: cdktf.listMapper(policyRuleReadsDatasetRewritesToTerraform, true)(struct!.datasetRewrites),
  }
}


export function policyRuleReadsToHclTerraform(struct?: PolicyRuleReads | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_checks: {
      value: cdktf.stringToHclTerraform(struct!.additionalChecks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.data),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.rateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rows: {
      value: cdktf.numberToHclTerraform(struct!.rows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset_rewrites: {
      value: cdktf.listMapperHcl(policyRuleReadsDatasetRewritesToHclTerraform, true)(struct!.datasetRewrites),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyRuleReadsDatasetRewritesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyRuleReadsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyRuleReads | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalChecks !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalChecks = this._additionalChecks;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._rateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit;
    }
    if (this._rows !== undefined) {
      hasAnyValues = true;
      internalValueResult.rows = this._rows;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._datasetRewrites?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetRewrites = this._datasetRewrites?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyRuleReads | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalChecks = undefined;
      this._data = undefined;
      this._rateLimit = undefined;
      this._rows = undefined;
      this._severity = undefined;
      this._datasetRewrites.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalChecks = value.additionalChecks;
      this._data = value.data;
      this._rateLimit = value.rateLimit;
      this._rows = value.rows;
      this._severity = value.severity;
      this._datasetRewrites.internalValue = value.datasetRewrites;
    }
  }

  // additional_checks - computed: false, optional: true, required: false
  private _additionalChecks?: string; 
  public get additionalChecks() {
    return this.getStringAttribute('additional_checks');
  }
  public set additionalChecks(value: string) {
    this._additionalChecks = value;
  }
  public resetAdditionalChecks() {
    this._additionalChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalChecksInput() {
    return this._additionalChecks;
  }

  // data - computed: false, optional: false, required: true
  private _data?: string[]; 
  public get data() {
    return this.getListAttribute('data');
  }
  public set data(value: string[]) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }

  // rows - computed: false, optional: false, required: true
  private _rows?: number; 
  public get rows() {
    return this.getNumberAttribute('rows');
  }
  public set rows(value: number) {
    this._rows = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowsInput() {
    return this._rows;
  }

  // severity - computed: false, optional: true, required: false
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

  // dataset_rewrites - computed: false, optional: true, required: false
  private _datasetRewrites = new PolicyRuleReadsDatasetRewritesList(this, "dataset_rewrites", false);
  public get datasetRewrites() {
    return this._datasetRewrites;
  }
  public putDatasetRewrites(value: PolicyRuleReadsDatasetRewrites[] | cdktf.IResolvable) {
    this._datasetRewrites.internalValue = value;
  }
  public resetDatasetRewrites() {
    this._datasetRewrites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetRewritesInput() {
    return this._datasetRewrites.internalValue;
  }
}

export class PolicyRuleReadsList extends cdktf.ComplexList {
  public internalValue? : PolicyRuleReads[] | cdktf.IResolvable

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
  public get(index: number): PolicyRuleReadsOutputReference {
    return new PolicyRuleReadsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyRuleUpdatesDatasetRewrites {
  /**
  * The dataset that should be rewritten.In the case of Snowflake, this denotes a fully qualified table name in the form: `<database>.<schema>.<table>`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#dataset PolicyRule#dataset}
  */
  readonly dataset: string;
  /**
  * The set of parameters used in the substitution request, these are references to fields in the activity log as described in the [Additional Checks section](https://cyral.com/docs/policy/rules/#additional-checks).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#parameters PolicyRule#parameters}
  */
  readonly parameters: string[];
  /**
  * The name of the repository that the rewrite applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#repo PolicyRule#repo}
  */
  readonly repo: string;
  /**
  * The request used to substitute references to the dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#substitution PolicyRule#substitution}
  */
  readonly substitution: string;
}

export function policyRuleUpdatesDatasetRewritesToTerraform(struct?: PolicyRuleUpdatesDatasetRewrites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset: cdktf.stringToTerraform(struct!.dataset),
    parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.parameters),
    repo: cdktf.stringToTerraform(struct!.repo),
    substitution: cdktf.stringToTerraform(struct!.substitution),
  }
}


export function policyRuleUpdatesDatasetRewritesToHclTerraform(struct?: PolicyRuleUpdatesDatasetRewrites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset: {
      value: cdktf.stringToHclTerraform(struct!.dataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.parameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    substitution: {
      value: cdktf.stringToHclTerraform(struct!.substitution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyRuleUpdatesDatasetRewritesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyRuleUpdatesDatasetRewrites | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    if (this._substitution !== undefined) {
      hasAnyValues = true;
      internalValueResult.substitution = this._substitution;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyRuleUpdatesDatasetRewrites | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataset = undefined;
      this._parameters = undefined;
      this._repo = undefined;
      this._substitution = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataset = value.dataset;
      this._parameters = value.parameters;
      this._repo = value.repo;
      this._substitution = value.substitution;
    }
  }

  // dataset - computed: false, optional: false, required: true
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters?: string[]; 
  public get parameters() {
    return this.getListAttribute('parameters');
  }
  public set parameters(value: string[]) {
    this._parameters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // repo - computed: false, optional: false, required: true
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // substitution - computed: false, optional: false, required: true
  private _substitution?: string; 
  public get substitution() {
    return this.getStringAttribute('substitution');
  }
  public set substitution(value: string) {
    this._substitution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get substitutionInput() {
    return this._substitution;
  }
}

export class PolicyRuleUpdatesDatasetRewritesList extends cdktf.ComplexList {
  public internalValue? : PolicyRuleUpdatesDatasetRewrites[] | cdktf.IResolvable

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
  public get(index: number): PolicyRuleUpdatesDatasetRewritesOutputReference {
    return new PolicyRuleUpdatesDatasetRewritesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyRuleUpdates {
  /**
  * Constraints on the data access specified in [Rego](https://www.openpolicyagent.org/docs/latest/policy-language/). See [Additional checks](https://cyral.com/docs/policy/rules/#additional-checks).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#additional_checks PolicyRule#additional_checks}
  */
  readonly additionalChecks?: string;
  /**
  * The data locations protected by this rule. Use `*` if you want to define `any` data location. For more information, see the [policy rules](https://cyral.com/docs/policy/rules#contexted-rules) documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#data PolicyRule#data}
  */
  readonly data: string[];
  /**
  * Rate Limit specifies the limit of calls that a user can make within a given time period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#rate_limit PolicyRule#rate_limit}
  */
  readonly rateLimit?: number;
  /**
  * The number of records (for example, rows or documents) that can be accessed/affected in a single statement. Use positive integer numbers to define how many records. If you want to define `any` number of records, set to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#rows PolicyRule#rows}
  */
  readonly rows: number;
  /**
  * severity level that's recorded when someone violate this rule. This is an informational value. Settings: (`low` | `medium` | `high`). If not specified, the severity is considered to be low.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#severity PolicyRule#severity}
  */
  readonly severity?: string;
  /**
  * dataset_rewrites block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#dataset_rewrites PolicyRule#dataset_rewrites}
  */
  readonly datasetRewrites?: PolicyRuleUpdatesDatasetRewrites[] | cdktf.IResolvable;
}

export function policyRuleUpdatesToTerraform(struct?: PolicyRuleUpdates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_checks: cdktf.stringToTerraform(struct!.additionalChecks),
    data: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.data),
    rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
    rows: cdktf.numberToTerraform(struct!.rows),
    severity: cdktf.stringToTerraform(struct!.severity),
    dataset_rewrites: cdktf.listMapper(policyRuleUpdatesDatasetRewritesToTerraform, true)(struct!.datasetRewrites),
  }
}


export function policyRuleUpdatesToHclTerraform(struct?: PolicyRuleUpdates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_checks: {
      value: cdktf.stringToHclTerraform(struct!.additionalChecks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.data),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.rateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rows: {
      value: cdktf.numberToHclTerraform(struct!.rows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset_rewrites: {
      value: cdktf.listMapperHcl(policyRuleUpdatesDatasetRewritesToHclTerraform, true)(struct!.datasetRewrites),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyRuleUpdatesDatasetRewritesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyRuleUpdatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyRuleUpdates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalChecks !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalChecks = this._additionalChecks;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._rateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit;
    }
    if (this._rows !== undefined) {
      hasAnyValues = true;
      internalValueResult.rows = this._rows;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._datasetRewrites?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetRewrites = this._datasetRewrites?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyRuleUpdates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalChecks = undefined;
      this._data = undefined;
      this._rateLimit = undefined;
      this._rows = undefined;
      this._severity = undefined;
      this._datasetRewrites.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalChecks = value.additionalChecks;
      this._data = value.data;
      this._rateLimit = value.rateLimit;
      this._rows = value.rows;
      this._severity = value.severity;
      this._datasetRewrites.internalValue = value.datasetRewrites;
    }
  }

  // additional_checks - computed: false, optional: true, required: false
  private _additionalChecks?: string; 
  public get additionalChecks() {
    return this.getStringAttribute('additional_checks');
  }
  public set additionalChecks(value: string) {
    this._additionalChecks = value;
  }
  public resetAdditionalChecks() {
    this._additionalChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalChecksInput() {
    return this._additionalChecks;
  }

  // data - computed: false, optional: false, required: true
  private _data?: string[]; 
  public get data() {
    return this.getListAttribute('data');
  }
  public set data(value: string[]) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }

  // rows - computed: false, optional: false, required: true
  private _rows?: number; 
  public get rows() {
    return this.getNumberAttribute('rows');
  }
  public set rows(value: number) {
    this._rows = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowsInput() {
    return this._rows;
  }

  // severity - computed: false, optional: true, required: false
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

  // dataset_rewrites - computed: false, optional: true, required: false
  private _datasetRewrites = new PolicyRuleUpdatesDatasetRewritesList(this, "dataset_rewrites", false);
  public get datasetRewrites() {
    return this._datasetRewrites;
  }
  public putDatasetRewrites(value: PolicyRuleUpdatesDatasetRewrites[] | cdktf.IResolvable) {
    this._datasetRewrites.internalValue = value;
  }
  public resetDatasetRewrites() {
    this._datasetRewrites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetRewritesInput() {
    return this._datasetRewrites.internalValue;
  }
}

export class PolicyRuleUpdatesList extends cdktf.ComplexList {
  public internalValue? : PolicyRuleUpdates[] | cdktf.IResolvable

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
  public get(index: number): PolicyRuleUpdatesOutputReference {
    return new PolicyRuleUpdatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule cyral_policy_rule}
*/
export class PolicyRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cyral_policy_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyRule to import
  * @param importFromId The id of the existing PolicyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cyral_policy_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/policy_rule cyral_policy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'cyral_policy_rule',
      terraformGeneratorMetadata: {
        providerName: 'cyral',
        providerVersion: '4.16.3',
        providerVersionConstraint: '4.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hosts = config.hosts;
    this._id = config.id;
    this._policyId = config.policyId;
    this._deletes.internalValue = config.deletes;
    this._identities.internalValue = config.identities;
    this._reads.internalValue = config.reads;
    this._updates.internalValue = config.updates;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
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

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // policy_rule_id - computed: true, optional: false, required: false
  public get policyRuleId() {
    return this.getStringAttribute('policy_rule_id');
  }

  // deletes - computed: false, optional: true, required: false
  private _deletes = new PolicyRuleDeletesList(this, "deletes", false);
  public get deletes() {
    return this._deletes;
  }
  public putDeletes(value: PolicyRuleDeletes[] | cdktf.IResolvable) {
    this._deletes.internalValue = value;
  }
  public resetDeletes() {
    this._deletes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletesInput() {
    return this._deletes.internalValue;
  }

  // identities - computed: false, optional: true, required: false
  private _identities = new PolicyRuleIdentitiesOutputReference(this, "identities");
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: PolicyRuleIdentities) {
    this._identities.internalValue = value;
  }
  public resetIdentities() {
    this._identities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities.internalValue;
  }

  // reads - computed: false, optional: true, required: false
  private _reads = new PolicyRuleReadsList(this, "reads", false);
  public get reads() {
    return this._reads;
  }
  public putReads(value: PolicyRuleReads[] | cdktf.IResolvable) {
    this._reads.internalValue = value;
  }
  public resetReads() {
    this._reads.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readsInput() {
    return this._reads.internalValue;
  }

  // updates - computed: false, optional: true, required: false
  private _updates = new PolicyRuleUpdatesList(this, "updates", false);
  public get updates() {
    return this._updates;
  }
  public putUpdates(value: PolicyRuleUpdates[] | cdktf.IResolvable) {
    this._updates.internalValue = value;
  }
  public resetUpdates() {
    this._updates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatesInput() {
    return this._updates.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hosts),
      id: cdktf.stringToTerraform(this._id),
      policy_id: cdktf.stringToTerraform(this._policyId),
      deletes: cdktf.listMapper(policyRuleDeletesToTerraform, true)(this._deletes.internalValue),
      identities: policyRuleIdentitiesToTerraform(this._identities.internalValue),
      reads: cdktf.listMapper(policyRuleReadsToTerraform, true)(this._reads.internalValue),
      updates: cdktf.listMapper(policyRuleUpdatesToTerraform, true)(this._updates.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hosts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletes: {
        value: cdktf.listMapperHcl(policyRuleDeletesToHclTerraform, true)(this._deletes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyRuleDeletesList",
      },
      identities: {
        value: policyRuleIdentitiesToHclTerraform(this._identities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyRuleIdentitiesList",
      },
      reads: {
        value: cdktf.listMapperHcl(policyRuleReadsToHclTerraform, true)(this._reads.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyRuleReadsList",
      },
      updates: {
        value: cdktf.listMapperHcl(policyRuleUpdatesToHclTerraform, true)(this._updates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyRuleUpdatesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
