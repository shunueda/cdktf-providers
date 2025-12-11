// https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_scorecard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortScorecardConfig extends cdktf.TerraformMetaArguments {
  /**
  * The blueprint of the scorecard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_scorecard#blueprint PortScorecard#blueprint}
  */
  readonly blueprint: string;
  /**
  * The filter to apply on the entities before calculating the scorecard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_scorecard#filter PortScorecard#filter}
  */
  readonly filter?: PortScorecardFilter;
  /**
  * The identifier of the scorecard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_scorecard#identifier PortScorecard#identifier}
  */
  readonly identifier: string;
  /**
  * The levels of the scorecard. This overrides the default levels (Basic, Bronze, Silver, Gold) if provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_scorecard#levels PortScorecard#levels}
  */
  readonly levels?: PortScorecardLevels[] | cdktf.IResolvable;
  /**
  * The rules of the scorecard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_scorecard#rules PortScorecard#rules}
  */
  readonly rules: PortScorecardRules[] | cdktf.IResolvable;
  /**
  * The title of the scorecard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_scorecard#title PortScorecard#title}
  */
  readonly title: string;
}
export interface PortScorecardFilter {
  /**
  * The combinator of the filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_scorecard#combinator PortScorecard#combinator}
  */
  readonly combinator: string;
  /**
  * The conditions of the filter. Each condition object should be encoded to a string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_scorecard#conditions PortScorecard#conditions}
  */
  readonly conditions: string[];
}

export function portScorecardFilterToTerraform(struct?: PortScorecardFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    combinator: cdktf.stringToTerraform(struct!.combinator),
    conditions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.conditions),
  }
}


export function portScorecardFilterToHclTerraform(struct?: PortScorecardFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    combinator: {
      value: cdktf.stringToHclTerraform(struct!.combinator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.conditions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortScorecardFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortScorecardFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._combinator !== undefined) {
      hasAnyValues = true;
      internalValueResult.combinator = this._combinator;
    }
    if (this._conditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortScorecardFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._combinator = undefined;
      this._conditions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._combinator = value.combinator;
      this._conditions = value.conditions;
    }
  }

  // combinator - computed: false, optional: false, required: true
  private _combinator?: string; 
  public get combinator() {
    return this.getStringAttribute('combinator');
  }
  public set combinator(value: string) {
    this._combinator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get combinatorInput() {
    return this._combinator;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions?: string[]; 
  public get conditions() {
    return this.getListAttribute('conditions');
  }
  public set conditions(value: string[]) {
    this._conditions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions;
  }
}
export interface PortScorecardLevels {
  /**
  * The color of the level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_scorecard#color PortScorecard#color}
  */
  readonly color: string;
  /**
  * The title of the level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_scorecard#title PortScorecard#title}
  */
  readonly title: string;
}

export function portScorecardLevelsToTerraform(struct?: PortScorecardLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function portScorecardLevelsToHclTerraform(struct?: PortScorecardLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortScorecardLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PortScorecardLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortScorecardLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._title = value.title;
    }
  }

  // color - computed: false, optional: false, required: true
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}

export class PortScorecardLevelsList extends cdktf.ComplexList {
  public internalValue? : PortScorecardLevels[] | cdktf.IResolvable

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
  public get(index: number): PortScorecardLevelsOutputReference {
    return new PortScorecardLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PortScorecardRulesQuery {
  /**
  * The combinator of the query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_scorecard#combinator PortScorecard#combinator}
  */
  readonly combinator: string;
  /**
  * The conditions of the query. Each condition object should be encoded to a string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_scorecard#conditions PortScorecard#conditions}
  */
  readonly conditions: string[];
}

export function portScorecardRulesQueryToTerraform(struct?: PortScorecardRulesQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    combinator: cdktf.stringToTerraform(struct!.combinator),
    conditions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.conditions),
  }
}


export function portScorecardRulesQueryToHclTerraform(struct?: PortScorecardRulesQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    combinator: {
      value: cdktf.stringToHclTerraform(struct!.combinator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.conditions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortScorecardRulesQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortScorecardRulesQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._combinator !== undefined) {
      hasAnyValues = true;
      internalValueResult.combinator = this._combinator;
    }
    if (this._conditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortScorecardRulesQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._combinator = undefined;
      this._conditions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._combinator = value.combinator;
      this._conditions = value.conditions;
    }
  }

  // combinator - computed: false, optional: false, required: true
  private _combinator?: string; 
  public get combinator() {
    return this.getStringAttribute('combinator');
  }
  public set combinator(value: string) {
    this._combinator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get combinatorInput() {
    return this._combinator;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions?: string[]; 
  public get conditions() {
    return this.getListAttribute('conditions');
  }
  public set conditions(value: string[]) {
    this._conditions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions;
  }
}
export interface PortScorecardRules {
  /**
  * The description of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_scorecard#description PortScorecard#description}
  */
  readonly description?: string;
  /**
  * The identifier of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_scorecard#identifier PortScorecard#identifier}
  */
  readonly identifier: string;
  /**
  * The level of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_scorecard#level PortScorecard#level}
  */
  readonly level: string;
  /**
  * The query of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_scorecard#query PortScorecard#query}
  */
  readonly query: PortScorecardRulesQuery;
  /**
  * The title of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_scorecard#title PortScorecard#title}
  */
  readonly title: string;
}

export function portScorecardRulesToTerraform(struct?: PortScorecardRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    identifier: cdktf.stringToTerraform(struct!.identifier),
    level: cdktf.stringToTerraform(struct!.level),
    query: portScorecardRulesQueryToTerraform(struct!.query),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function portScorecardRulesToHclTerraform(struct?: PortScorecardRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: portScorecardRulesQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "struct",
      storageClassType: "PortScorecardRulesQuery",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortScorecardRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PortScorecardRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortScorecardRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._identifier = undefined;
      this._level = undefined;
      this._query.internalValue = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._identifier = value.identifier;
      this._level = value.level;
      this._query.internalValue = value.query;
      this._title = value.title;
    }
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // level - computed: false, optional: false, required: true
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // query - computed: false, optional: false, required: true
  private _query = new PortScorecardRulesQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: PortScorecardRulesQuery) {
    this._query.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}

export class PortScorecardRulesList extends cdktf.ComplexList {
  public internalValue? : PortScorecardRules[] | cdktf.IResolvable

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
  public get(index: number): PortScorecardRulesOutputReference {
    return new PortScorecardRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_scorecard port_scorecard}
*/
export class PortScorecard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "port_scorecard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortScorecard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortScorecard to import
  * @param importFromId The id of the existing PortScorecard that should be imported. Refer to the {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_scorecard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortScorecard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "port_scorecard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_scorecard port_scorecard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortScorecardConfig
  */
  public constructor(scope: Construct, id: string, config: PortScorecardConfig) {
    super(scope, id, {
      terraformResourceType: 'port_scorecard',
      terraformGeneratorMetadata: {
        providerName: 'port-labs',
        providerVersion: '2.17.2',
        providerVersionConstraint: '2.17.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blueprint = config.blueprint;
    this._filter.internalValue = config.filter;
    this._identifier = config.identifier;
    this._levels.internalValue = config.levels;
    this._rules.internalValue = config.rules;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint - computed: false, optional: false, required: true
  private _blueprint?: string; 
  public get blueprint() {
    return this.getStringAttribute('blueprint');
  }
  public set blueprint(value: string) {
    this._blueprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintInput() {
    return this._blueprint;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new PortScorecardFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: PortScorecardFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // levels - computed: false, optional: true, required: false
  private _levels = new PortScorecardLevelsList(this, "levels", false);
  public get levels() {
    return this._levels;
  }
  public putLevels(value: PortScorecardLevels[] | cdktf.IResolvable) {
    this._levels.internalValue = value;
  }
  public resetLevels() {
    this._levels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelsInput() {
    return this._levels.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new PortScorecardRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: PortScorecardRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint: cdktf.stringToTerraform(this._blueprint),
      filter: portScorecardFilterToTerraform(this._filter.internalValue),
      identifier: cdktf.stringToTerraform(this._identifier),
      levels: cdktf.listMapper(portScorecardLevelsToTerraform, false)(this._levels.internalValue),
      rules: cdktf.listMapper(portScorecardRulesToTerraform, false)(this._rules.internalValue),
      title: cdktf.stringToTerraform(this._title),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint: {
        value: cdktf.stringToHclTerraform(this._blueprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: portScorecardFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortScorecardFilter",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      levels: {
        value: cdktf.listMapperHcl(portScorecardLevelsToHclTerraform, false)(this._levels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PortScorecardLevelsList",
      },
      rules: {
        value: cdktf.listMapperHcl(portScorecardRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PortScorecardRulesList",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
