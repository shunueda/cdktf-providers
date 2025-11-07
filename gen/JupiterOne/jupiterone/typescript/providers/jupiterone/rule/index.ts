// https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/rule#description Rule#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/rule#ignore_previous_results Rule#ignore_previous_results}
  */
  readonly ignorePreviousResults?: boolean | cdktf.IResolvable;
  /**
  * Comma separated list of labelName/labelValue pairs to apply to the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/rule#labels Rule#labels}
  */
  readonly labels?: RuleLabels[] | cdktf.IResolvable;
  /**
  * Name of the rule, which is unique to each account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/rule#name Rule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/rule#notify_on_failure Rule#notify_on_failure}
  */
  readonly notifyOnFailure?: boolean | cdktf.IResolvable;
  /**
  * Actions that are executed when a corresponding condition is met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/rule#operations Rule#operations}
  */
  readonly operations: RuleOperations[] | cdktf.IResolvable;
  /**
  * Names of properties that can be used throughout the rule evaluation process and will be included in each record of a rule evaluation. (e.g. queries.query0.total)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/rule#outputs Rule#outputs}
  */
  readonly outputs?: string[];
  /**
  * Frequency of automated rule evaluation. Defaults to ONE_DAY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/rule#polling_interval Rule#polling_interval}
  */
  readonly pollingInterval?: string;
  /**
  * Specifies the ID of a question to be used in rule evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/rule#question_id Rule#question_id}
  */
  readonly questionId?: string;
  /**
  * Specifies the ID of a resource group for the rule to be added to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/rule#resource_group_id Rule#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Rule evaluation specification version in the case of breaking changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/rule#spec_version Rule#spec_version}
  */
  readonly specVersion?: number;
  /**
  * Comma separated list of tags to apply to the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/rule#tags Rule#tags}
  */
  readonly tags?: string[];
  /**
  * Optional key/value pairs of template name to template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/rule#templates Rule#templates}
  */
  readonly templates?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/rule#trigger_on_new_only Rule#trigger_on_new_only}
  */
  readonly triggerOnNewOnly?: boolean | cdktf.IResolvable;
  /**
  * question block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/rule#question Rule#question}
  */
  readonly question?: RuleQuestion[] | cdktf.IResolvable;
}
export interface RuleLabels {
  /**
  * Name of the label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/rule#label_name Rule#label_name}
  */
  readonly labelName: string;
  /**
  * Value of the label, which is represented in TF as a string but will be treated as string, number or boolean in the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/rule#label_value Rule#label_value}
  */
  readonly labelValue: string;
}

export function ruleLabelsToTerraform(struct?: RuleLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_name: cdktf.stringToTerraform(struct!.labelName),
    label_value: cdktf.stringToTerraform(struct!.labelValue),
  }
}


export function ruleLabelsToHclTerraform(struct?: RuleLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_name: {
      value: cdktf.stringToHclTerraform(struct!.labelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_value: {
      value: cdktf.stringToHclTerraform(struct!.labelValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelName = this._labelName;
    }
    if (this._labelValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelValue = this._labelValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelName = undefined;
      this._labelValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelName = value.labelName;
      this._labelValue = value.labelValue;
    }
  }

  // label_name - computed: true, optional: false, required: true
  private _labelName?: string; 
  public get labelName() {
    return this.getStringAttribute('label_name');
  }
  public set labelName(value: string) {
    this._labelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelNameInput() {
    return this._labelName;
  }

  // label_value - computed: true, optional: false, required: true
  private _labelValue?: string; 
  public get labelValue() {
    return this.getStringAttribute('label_value');
  }
  public set labelValue(value: string) {
    this._labelValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelValueInput() {
    return this._labelValue;
  }
}

export class RuleLabelsList extends cdktf.ComplexList {
  public internalValue? : RuleLabels[] | cdktf.IResolvable

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
  public get(index: number): RuleLabelsOutputReference {
    return new RuleLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleOperations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/rule#actions Rule#actions}
  */
  readonly actions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/rule#when Rule#when}
  */
  readonly when?: string;
}

export function ruleOperationsToTerraform(struct?: RuleOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    when: cdktf.stringToTerraform(struct!.when),
  }
}


export function ruleOperationsToHclTerraform(struct?: RuleOperations | cdktf.IResolvable): any {
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
    when: {
      value: cdktf.stringToHclTerraform(struct!.when),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._when !== undefined) {
      hasAnyValues = true;
      internalValueResult.when = this._when;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._when = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._when = value.when;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // when - computed: false, optional: true, required: false
  private _when?: string; 
  public get when() {
    return this.getStringAttribute('when');
  }
  public set when(value: string) {
    this._when = value;
  }
  public resetWhen() {
    this._when = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenInput() {
    return this._when;
  }
}

export class RuleOperationsList extends cdktf.ComplexList {
  public internalValue? : RuleOperations[] | cdktf.IResolvable

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
  public get(index: number): RuleOperationsOutputReference {
    return new RuleOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleQuestionQueries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/rule#include_deleted Rule#include_deleted}
  */
  readonly includeDeleted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/rule#name Rule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/rule#query Rule#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/rule#version Rule#version}
  */
  readonly version: string;
}

export function ruleQuestionQueriesToTerraform(struct?: RuleQuestionQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_deleted: cdktf.booleanToTerraform(struct!.includeDeleted),
    name: cdktf.stringToTerraform(struct!.name),
    query: cdktf.stringToTerraform(struct!.query),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function ruleQuestionQueriesToHclTerraform(struct?: RuleQuestionQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_deleted: {
      value: cdktf.booleanToHclTerraform(struct!.includeDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleQuestionQueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleQuestionQueries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDeleted = this._includeDeleted;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleQuestionQueries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeDeleted = undefined;
      this._name = undefined;
      this._query = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeDeleted = value.includeDeleted;
      this._name = value.name;
      this._query = value.query;
      this._version = value.version;
    }
  }

  // include_deleted - computed: true, optional: true, required: false
  private _includeDeleted?: boolean | cdktf.IResolvable; 
  public get includeDeleted() {
    return this.getBooleanAttribute('include_deleted');
  }
  public set includeDeleted(value: boolean | cdktf.IResolvable) {
    this._includeDeleted = value;
  }
  public resetIncludeDeleted() {
    this._includeDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDeletedInput() {
    return this._includeDeleted;
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

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class RuleQuestionQueriesList extends cdktf.ComplexList {
  public internalValue? : RuleQuestionQueries[] | cdktf.IResolvable

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
  public get(index: number): RuleQuestionQueriesOutputReference {
    return new RuleQuestionQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleQuestion {
  /**
  * queries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/rule#queries Rule#queries}
  */
  readonly queries?: RuleQuestionQueries[] | cdktf.IResolvable;
}

export function ruleQuestionToTerraform(struct?: RuleQuestion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    queries: cdktf.listMapper(ruleQuestionQueriesToTerraform, true)(struct!.queries),
  }
}


export function ruleQuestionToHclTerraform(struct?: RuleQuestion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    queries: {
      value: cdktf.listMapperHcl(ruleQuestionQueriesToHclTerraform, true)(struct!.queries),
      isBlock: true,
      type: "list",
      storageClassType: "RuleQuestionQueriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleQuestionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleQuestion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queries = this._queries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleQuestion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._queries.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._queries.internalValue = value.queries;
    }
  }

  // queries - computed: false, optional: true, required: false
  private _queries = new RuleQuestionQueriesList(this, "queries", false);
  public get queries() {
    return this._queries;
  }
  public putQueries(value: RuleQuestionQueries[] | cdktf.IResolvable) {
    this._queries.internalValue = value;
  }
  public resetQueries() {
    this._queries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queriesInput() {
    return this._queries.internalValue;
  }
}

export class RuleQuestionList extends cdktf.ComplexList {
  public internalValue? : RuleQuestion[] | cdktf.IResolvable

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
  public get(index: number): RuleQuestionOutputReference {
    return new RuleQuestionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/rule jupiterone_rule}
*/
export class Rule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jupiterone_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Rule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Rule to import
  * @param importFromId The id of the existing Rule that should be imported. Refer to the {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Rule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jupiterone_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/rule jupiterone_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RuleConfig
  */
  public constructor(scope: Construct, id: string, config: RuleConfig) {
    super(scope, id, {
      terraformResourceType: 'jupiterone_rule',
      terraformGeneratorMetadata: {
        providerName: 'jupiterone',
        providerVersion: '1.16.3'
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
    this._ignorePreviousResults = config.ignorePreviousResults;
    this._labels.internalValue = config.labels;
    this._name = config.name;
    this._notifyOnFailure = config.notifyOnFailure;
    this._operations.internalValue = config.operations;
    this._outputs = config.outputs;
    this._pollingInterval = config.pollingInterval;
    this._questionId = config.questionId;
    this._resourceGroupId = config.resourceGroupId;
    this._specVersion = config.specVersion;
    this._tags = config.tags;
    this._templates = config.templates;
    this._triggerOnNewOnly = config.triggerOnNewOnly;
    this._question.internalValue = config.question;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_previous_results - computed: true, optional: true, required: false
  private _ignorePreviousResults?: boolean | cdktf.IResolvable; 
  public get ignorePreviousResults() {
    return this.getBooleanAttribute('ignore_previous_results');
  }
  public set ignorePreviousResults(value: boolean | cdktf.IResolvable) {
    this._ignorePreviousResults = value;
  }
  public resetIgnorePreviousResults() {
    this._ignorePreviousResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePreviousResultsInput() {
    return this._ignorePreviousResults;
  }

  // labels - computed: true, optional: true, required: false
  private _labels = new RuleLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: RuleLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
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

  // notify_on_failure - computed: true, optional: true, required: false
  private _notifyOnFailure?: boolean | cdktf.IResolvable; 
  public get notifyOnFailure() {
    return this.getBooleanAttribute('notify_on_failure');
  }
  public set notifyOnFailure(value: boolean | cdktf.IResolvable) {
    this._notifyOnFailure = value;
  }
  public resetNotifyOnFailure() {
    this._notifyOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnFailureInput() {
    return this._notifyOnFailure;
  }

  // operations - computed: false, optional: false, required: true
  private _operations = new RuleOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: RuleOperations[] | cdktf.IResolvable) {
    this._operations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations.internalValue;
  }

  // outputs - computed: true, optional: true, required: false
  private _outputs?: string[]; 
  public get outputs() {
    return this.getListAttribute('outputs');
  }
  public set outputs(value: string[]) {
    this._outputs = value;
  }
  public resetOutputs() {
    this._outputs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs;
  }

  // polling_interval - computed: true, optional: true, required: false
  private _pollingInterval?: string; 
  public get pollingInterval() {
    return this.getStringAttribute('polling_interval');
  }
  public set pollingInterval(value: string) {
    this._pollingInterval = value;
  }
  public resetPollingInterval() {
    this._pollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingIntervalInput() {
    return this._pollingInterval;
  }

  // question_id - computed: false, optional: true, required: false
  private _questionId?: string; 
  public get questionId() {
    return this.getStringAttribute('question_id');
  }
  public set questionId(value: string) {
    this._questionId = value;
  }
  public resetQuestionId() {
    this._questionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get questionIdInput() {
    return this._questionId;
  }

  // resource_group_id - computed: false, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // spec_version - computed: true, optional: true, required: false
  private _specVersion?: number; 
  public get specVersion() {
    return this.getNumberAttribute('spec_version');
  }
  public set specVersion(value: number) {
    this._specVersion = value;
  }
  public resetSpecVersion() {
    this._specVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specVersionInput() {
    return this._specVersion;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // templates - computed: false, optional: true, required: false
  private _templates?: { [key: string]: string }; 
  public get templates() {
    return this.getStringMapAttribute('templates');
  }
  public set templates(value: { [key: string]: string }) {
    this._templates = value;
  }
  public resetTemplates() {
    this._templates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatesInput() {
    return this._templates;
  }

  // trigger_on_new_only - computed: true, optional: true, required: false
  private _triggerOnNewOnly?: boolean | cdktf.IResolvable; 
  public get triggerOnNewOnly() {
    return this.getBooleanAttribute('trigger_on_new_only');
  }
  public set triggerOnNewOnly(value: boolean | cdktf.IResolvable) {
    this._triggerOnNewOnly = value;
  }
  public resetTriggerOnNewOnly() {
    this._triggerOnNewOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerOnNewOnlyInput() {
    return this._triggerOnNewOnly;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // question - computed: false, optional: true, required: false
  private _question = new RuleQuestionList(this, "question", false);
  public get question() {
    return this._question;
  }
  public putQuestion(value: RuleQuestion[] | cdktf.IResolvable) {
    this._question.internalValue = value;
  }
  public resetQuestion() {
    this._question.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get questionInput() {
    return this._question.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      ignore_previous_results: cdktf.booleanToTerraform(this._ignorePreviousResults),
      labels: cdktf.listMapper(ruleLabelsToTerraform, false)(this._labels.internalValue),
      name: cdktf.stringToTerraform(this._name),
      notify_on_failure: cdktf.booleanToTerraform(this._notifyOnFailure),
      operations: cdktf.listMapper(ruleOperationsToTerraform, false)(this._operations.internalValue),
      outputs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._outputs),
      polling_interval: cdktf.stringToTerraform(this._pollingInterval),
      question_id: cdktf.stringToTerraform(this._questionId),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      spec_version: cdktf.numberToTerraform(this._specVersion),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      templates: cdktf.hashMapper(cdktf.stringToTerraform)(this._templates),
      trigger_on_new_only: cdktf.booleanToTerraform(this._triggerOnNewOnly),
      question: cdktf.listMapper(ruleQuestionToTerraform, true)(this._question.internalValue),
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
      ignore_previous_results: {
        value: cdktf.booleanToHclTerraform(this._ignorePreviousResults),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labels: {
        value: cdktf.listMapperHcl(ruleLabelsToHclTerraform, false)(this._labels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RuleLabelsList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_on_failure: {
        value: cdktf.booleanToHclTerraform(this._notifyOnFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operations: {
        value: cdktf.listMapperHcl(ruleOperationsToHclTerraform, false)(this._operations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RuleOperationsList",
      },
      outputs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._outputs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      polling_interval: {
        value: cdktf.stringToHclTerraform(this._pollingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      question_id: {
        value: cdktf.stringToHclTerraform(this._questionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spec_version: {
        value: cdktf.numberToHclTerraform(this._specVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      templates: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._templates),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      trigger_on_new_only: {
        value: cdktf.booleanToHclTerraform(this._triggerOnNewOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      question: {
        value: cdktf.listMapperHcl(ruleQuestionToHclTerraform, true)(this._question.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RuleQuestionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
