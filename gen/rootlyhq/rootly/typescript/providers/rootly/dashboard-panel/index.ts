// https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardPanelConfig extends cdktf.TerraformMetaArguments {
  /**
  * The panel dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#dashboard_id DashboardPanel#dashboard_id}
  */
  readonly dashboardId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#id DashboardPanel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the dashboard_panel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#name DashboardPanel#name}
  */
  readonly name?: string;
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#params DashboardPanel#params}
  */
  readonly params: DashboardPanelParams;
  /**
  * position block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#position DashboardPanel#position}
  */
  readonly position?: DashboardPanelPosition;
}
export interface DashboardPanelParamsDatalabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#enabled DashboardPanel#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dashboardPanelParamsDatalabelsToTerraform(struct?: DashboardPanelParamsDatalabelsOutputReference | DashboardPanelParamsDatalabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dashboardPanelParamsDatalabelsToHclTerraform(struct?: DashboardPanelParamsDatalabelsOutputReference | DashboardPanelParamsDatalabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardPanelParamsDatalabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardPanelParamsDatalabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelParamsDatalabels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
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
}
export interface DashboardPanelParamsDatasetsAggregate {
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#cumulative DashboardPanel#cumulative}
  */
  readonly cumulative?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#key DashboardPanel#key}
  */
  readonly key?: string;
  /**
  * Value must be one of `count`, `sum`, `average`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#operation DashboardPanel#operation}
  */
  readonly operation?: string;
}

export function dashboardPanelParamsDatasetsAggregateToTerraform(struct?: DashboardPanelParamsDatasetsAggregateOutputReference | DashboardPanelParamsDatasetsAggregate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cumulative: cdktf.booleanToTerraform(struct!.cumulative),
    key: cdktf.stringToTerraform(struct!.key),
    operation: cdktf.stringToTerraform(struct!.operation),
  }
}


export function dashboardPanelParamsDatasetsAggregateToHclTerraform(struct?: DashboardPanelParamsDatasetsAggregateOutputReference | DashboardPanelParamsDatasetsAggregate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cumulative: {
      value: cdktf.booleanToHclTerraform(struct!.cumulative),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardPanelParamsDatasetsAggregateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardPanelParamsDatasetsAggregate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cumulative !== undefined) {
      hasAnyValues = true;
      internalValueResult.cumulative = this._cumulative;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelParamsDatasetsAggregate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cumulative = undefined;
      this._key = undefined;
      this._operation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cumulative = value.cumulative;
      this._key = value.key;
      this._operation = value.operation;
    }
  }

  // cumulative - computed: true, optional: true, required: false
  private _cumulative?: boolean | cdktf.IResolvable; 
  public get cumulative() {
    return this.getBooleanAttribute('cumulative');
  }
  public set cumulative(value: boolean | cdktf.IResolvable) {
    this._cumulative = value;
  }
  public resetCumulative() {
    this._cumulative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cumulativeInput() {
    return this._cumulative;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }
}
export interface DashboardPanelParamsDatasetsFilterRules {
  /**
  * Value must be one of `=`, `!=`, `>=`, `<=`, `exists`, `not_exists`, `contains`, `not_contains`, `assigned`, `unassigned`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#condition DashboardPanel#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#key DashboardPanel#key}
  */
  readonly key?: string;
  /**
  * Value must be one of `and`, `or`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#operation DashboardPanel#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#value DashboardPanel#value}
  */
  readonly value?: string;
}

export function dashboardPanelParamsDatasetsFilterRulesToTerraform(struct?: DashboardPanelParamsDatasetsFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    key: cdktf.stringToTerraform(struct!.key),
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dashboardPanelParamsDatasetsFilterRulesToHclTerraform(struct?: DashboardPanelParamsDatasetsFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DashboardPanelParamsDatasetsFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardPanelParamsDatasetsFilterRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelParamsDatasetsFilterRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._key = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._key = value.key;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DashboardPanelParamsDatasetsFilterRulesList extends cdktf.ComplexList {
  public internalValue? : DashboardPanelParamsDatasetsFilterRules[] | cdktf.IResolvable

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
  public get(index: number): DashboardPanelParamsDatasetsFilterRulesOutputReference {
    return new DashboardPanelParamsDatasetsFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardPanelParamsDatasetsFilter {
  /**
  * Value must be one of `and`, `or`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#operation DashboardPanel#operation}
  */
  readonly operation?: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#rules DashboardPanel#rules}
  */
  readonly rules?: DashboardPanelParamsDatasetsFilterRules[] | cdktf.IResolvable;
}

export function dashboardPanelParamsDatasetsFilterToTerraform(struct?: DashboardPanelParamsDatasetsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    rules: cdktf.listMapper(dashboardPanelParamsDatasetsFilterRulesToTerraform, true)(struct!.rules),
  }
}


export function dashboardPanelParamsDatasetsFilterToHclTerraform(struct?: DashboardPanelParamsDatasetsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktf.listMapperHcl(dashboardPanelParamsDatasetsFilterRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardPanelParamsDatasetsFilterRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardPanelParamsDatasetsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardPanelParamsDatasetsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelParamsDatasetsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._rules.internalValue = value.rules;
    }
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DashboardPanelParamsDatasetsFilterRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DashboardPanelParamsDatasetsFilterRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class DashboardPanelParamsDatasetsFilterList extends cdktf.ComplexList {
  public internalValue? : DashboardPanelParamsDatasetsFilter[] | cdktf.IResolvable

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
  public get(index: number): DashboardPanelParamsDatasetsFilterOutputReference {
    return new DashboardPanelParamsDatasetsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardPanelParamsDatasets {
  /**
  * Value must be one of `alerts`, `incidents`, `incident_post_mortems`, `incident_action_items`, `users`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#collection DashboardPanel#collection}
  */
  readonly collection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#group_by DashboardPanel#group_by}
  */
  readonly groupBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#name DashboardPanel#name}
  */
  readonly name?: string;
  /**
  * aggregate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#aggregate DashboardPanel#aggregate}
  */
  readonly aggregate?: DashboardPanelParamsDatasetsAggregate;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#filter DashboardPanel#filter}
  */
  readonly filter?: DashboardPanelParamsDatasetsFilter[] | cdktf.IResolvable;
}

export function dashboardPanelParamsDatasetsToTerraform(struct?: DashboardPanelParamsDatasets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection: cdktf.stringToTerraform(struct!.collection),
    group_by: cdktf.stringToTerraform(struct!.groupBy),
    name: cdktf.stringToTerraform(struct!.name),
    aggregate: dashboardPanelParamsDatasetsAggregateToTerraform(struct!.aggregate),
    filter: cdktf.listMapper(dashboardPanelParamsDatasetsFilterToTerraform, true)(struct!.filter),
  }
}


export function dashboardPanelParamsDatasetsToHclTerraform(struct?: DashboardPanelParamsDatasets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection: {
      value: cdktf.stringToHclTerraform(struct!.collection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_by: {
      value: cdktf.stringToHclTerraform(struct!.groupBy),
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
    aggregate: {
      value: dashboardPanelParamsDatasetsAggregateToHclTerraform(struct!.aggregate),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardPanelParamsDatasetsAggregateList",
    },
    filter: {
      value: cdktf.listMapperHcl(dashboardPanelParamsDatasetsFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardPanelParamsDatasetsFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardPanelParamsDatasetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardPanelParamsDatasets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collection !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection;
    }
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._aggregate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregate = this._aggregate?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelParamsDatasets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collection = undefined;
      this._groupBy = undefined;
      this._name = undefined;
      this._aggregate.internalValue = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collection = value.collection;
      this._groupBy = value.groupBy;
      this._name = value.name;
      this._aggregate.internalValue = value.aggregate;
      this._filter.internalValue = value.filter;
    }
  }

  // collection - computed: false, optional: true, required: false
  private _collection?: string; 
  public get collection() {
    return this.getStringAttribute('collection');
  }
  public set collection(value: string) {
    this._collection = value;
  }
  public resetCollection() {
    this._collection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection;
  }

  // group_by - computed: true, optional: true, required: false
  private _groupBy?: string; 
  public get groupBy() {
    return this.getStringAttribute('group_by');
  }
  public set groupBy(value: string) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // name - computed: true, optional: true, required: false
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

  // aggregate - computed: false, optional: true, required: false
  private _aggregate = new DashboardPanelParamsDatasetsAggregateOutputReference(this, "aggregate");
  public get aggregate() {
    return this._aggregate;
  }
  public putAggregate(value: DashboardPanelParamsDatasetsAggregate) {
    this._aggregate.internalValue = value;
  }
  public resetAggregate() {
    this._aggregate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateInput() {
    return this._aggregate.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DashboardPanelParamsDatasetsFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DashboardPanelParamsDatasetsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class DashboardPanelParamsDatasetsList extends cdktf.ComplexList {
  public internalValue? : DashboardPanelParamsDatasets[] | cdktf.IResolvable

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
  public get(index: number): DashboardPanelParamsDatasetsOutputReference {
    return new DashboardPanelParamsDatasetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardPanelParamsLegend {
  /**
  * Value must be one of `all`, `charted`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#groups DashboardPanel#groups}
  */
  readonly groups?: string;
}

export function dashboardPanelParamsLegendToTerraform(struct?: DashboardPanelParamsLegendOutputReference | DashboardPanelParamsLegend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.stringToTerraform(struct!.groups),
  }
}


export function dashboardPanelParamsLegendToHclTerraform(struct?: DashboardPanelParamsLegendOutputReference | DashboardPanelParamsLegend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.stringToHclTerraform(struct!.groups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardPanelParamsLegendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardPanelParamsLegend | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelParamsLegend | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groups = value.groups;
    }
  }

  // groups - computed: true, optional: true, required: false
  private _groups?: string; 
  public get groups() {
    return this.getStringAttribute('groups');
  }
  public set groups(value: string) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }
}
export interface DashboardPanelParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#description DashboardPanel#description}
  */
  readonly description?: string;
  /**
  * Value must be one of `line_chart`, `line_stepped_chart`, `column_chart`, `stacked_column_chart`, `monitoring_chart`, `pie_chart`, `table`, `aggregate_value`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#display DashboardPanel#display}
  */
  readonly display?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#table_fields DashboardPanel#table_fields}
  */
  readonly tableFields?: string[];
  /**
  * datalabels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#datalabels DashboardPanel#datalabels}
  */
  readonly datalabels?: DashboardPanelParamsDatalabels;
  /**
  * datasets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#datasets DashboardPanel#datasets}
  */
  readonly datasets?: DashboardPanelParamsDatasets[] | cdktf.IResolvable;
  /**
  * legend block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#legend DashboardPanel#legend}
  */
  readonly legend?: DashboardPanelParamsLegend;
}

export function dashboardPanelParamsToTerraform(struct?: DashboardPanelParamsOutputReference | DashboardPanelParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display: cdktf.stringToTerraform(struct!.display),
    table_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tableFields),
    datalabels: dashboardPanelParamsDatalabelsToTerraform(struct!.datalabels),
    datasets: cdktf.listMapper(dashboardPanelParamsDatasetsToTerraform, true)(struct!.datasets),
    legend: dashboardPanelParamsLegendToTerraform(struct!.legend),
  }
}


export function dashboardPanelParamsToHclTerraform(struct?: DashboardPanelParamsOutputReference | DashboardPanelParams): any {
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
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tableFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    datalabels: {
      value: dashboardPanelParamsDatalabelsToHclTerraform(struct!.datalabels),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardPanelParamsDatalabelsList",
    },
    datasets: {
      value: cdktf.listMapperHcl(dashboardPanelParamsDatasetsToHclTerraform, true)(struct!.datasets),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardPanelParamsDatasetsList",
    },
    legend: {
      value: dashboardPanelParamsLegendToHclTerraform(struct!.legend),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardPanelParamsLegendList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardPanelParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardPanelParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    if (this._tableFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableFields = this._tableFields;
    }
    if (this._datalabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datalabels = this._datalabels?.internalValue;
    }
    if (this._datasets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasets = this._datasets?.internalValue;
    }
    if (this._legend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.legend = this._legend?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._display = undefined;
      this._tableFields = undefined;
      this._datalabels.internalValue = undefined;
      this._datasets.internalValue = undefined;
      this._legend.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._display = value.display;
      this._tableFields = value.tableFields;
      this._datalabels.internalValue = value.datalabels;
      this._datasets.internalValue = value.datasets;
      this._legend.internalValue = value.legend;
    }
  }

  // description - computed: true, optional: true, required: false
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

  // display - computed: false, optional: true, required: false
  private _display?: string; 
  public get display() {
    return this.getStringAttribute('display');
  }
  public set display(value: string) {
    this._display = value;
  }
  public resetDisplay() {
    this._display = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display;
  }

  // table_fields - computed: false, optional: true, required: false
  private _tableFields?: string[]; 
  public get tableFields() {
    return this.getListAttribute('table_fields');
  }
  public set tableFields(value: string[]) {
    this._tableFields = value;
  }
  public resetTableFields() {
    this._tableFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableFieldsInput() {
    return this._tableFields;
  }

  // datalabels - computed: false, optional: true, required: false
  private _datalabels = new DashboardPanelParamsDatalabelsOutputReference(this, "datalabels");
  public get datalabels() {
    return this._datalabels;
  }
  public putDatalabels(value: DashboardPanelParamsDatalabels) {
    this._datalabels.internalValue = value;
  }
  public resetDatalabels() {
    this._datalabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datalabelsInput() {
    return this._datalabels.internalValue;
  }

  // datasets - computed: false, optional: true, required: false
  private _datasets = new DashboardPanelParamsDatasetsList(this, "datasets", false);
  public get datasets() {
    return this._datasets;
  }
  public putDatasets(value: DashboardPanelParamsDatasets[] | cdktf.IResolvable) {
    this._datasets.internalValue = value;
  }
  public resetDatasets() {
    this._datasets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetsInput() {
    return this._datasets.internalValue;
  }

  // legend - computed: false, optional: true, required: false
  private _legend = new DashboardPanelParamsLegendOutputReference(this, "legend");
  public get legend() {
    return this._legend;
  }
  public putLegend(value: DashboardPanelParamsLegend) {
    this._legend.internalValue = value;
  }
  public resetLegend() {
    this._legend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendInput() {
    return this._legend.internalValue;
  }
}
export interface DashboardPanelPosition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#h DashboardPanel#h}
  */
  readonly h: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#w DashboardPanel#w}
  */
  readonly w: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#x DashboardPanel#x}
  */
  readonly x: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#y DashboardPanel#y}
  */
  readonly y: number;
}

export function dashboardPanelPositionToTerraform(struct?: DashboardPanelPositionOutputReference | DashboardPanelPosition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    h: cdktf.numberToTerraform(struct!.h),
    w: cdktf.numberToTerraform(struct!.w),
    x: cdktf.numberToTerraform(struct!.x),
    y: cdktf.numberToTerraform(struct!.y),
  }
}


export function dashboardPanelPositionToHclTerraform(struct?: DashboardPanelPositionOutputReference | DashboardPanelPosition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    h: {
      value: cdktf.numberToHclTerraform(struct!.h),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    w: {
      value: cdktf.numberToHclTerraform(struct!.w),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    x: {
      value: cdktf.numberToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y: {
      value: cdktf.numberToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardPanelPositionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardPanelPosition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._h !== undefined) {
      hasAnyValues = true;
      internalValueResult.h = this._h;
    }
    if (this._w !== undefined) {
      hasAnyValues = true;
      internalValueResult.w = this._w;
    }
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardPanelPosition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._h = undefined;
      this._w = undefined;
      this._x = undefined;
      this._y = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._h = value.h;
      this._w = value.w;
      this._x = value.x;
      this._y = value.y;
    }
  }

  // h - computed: false, optional: false, required: true
  private _h?: number; 
  public get h() {
    return this.getNumberAttribute('h');
  }
  public set h(value: number) {
    this._h = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hInput() {
    return this._h;
  }

  // w - computed: false, optional: false, required: true
  private _w?: number; 
  public get w() {
    return this.getNumberAttribute('w');
  }
  public set w(value: number) {
    this._w = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wInput() {
    return this._w;
  }

  // x - computed: false, optional: false, required: true
  private _x?: number; 
  public get x() {
    return this.getNumberAttribute('x');
  }
  public set x(value: number) {
    this._x = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // y - computed: false, optional: false, required: true
  private _y?: number; 
  public get y() {
    return this.getNumberAttribute('y');
  }
  public set y(value: number) {
    this._y = value;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel rootly_dashboard_panel}
*/
export class DashboardPanel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_dashboard_panel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DashboardPanel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DashboardPanel to import
  * @param importFromId The id of the existing DashboardPanel that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DashboardPanel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_dashboard_panel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/dashboard_panel rootly_dashboard_panel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardPanelConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardPanelConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_dashboard_panel',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.2.0',
        providerVersionConstraint: '5.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dashboardId = config.dashboardId;
    this._id = config.id;
    this._name = config.name;
    this._params.internalValue = config.params;
    this._position.internalValue = config.position;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dashboard_id - computed: false, optional: false, required: true
  private _dashboardId?: string; 
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }
  public set dashboardId(value: string) {
    this._dashboardId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardIdInput() {
    return this._dashboardId;
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

  // name - computed: true, optional: true, required: false
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

  // params - computed: false, optional: false, required: true
  private _params = new DashboardPanelParamsOutputReference(this, "params");
  public get params() {
    return this._params;
  }
  public putParams(value: DashboardPanelParams) {
    this._params.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }

  // position - computed: false, optional: true, required: false
  private _position = new DashboardPanelPositionOutputReference(this, "position");
  public get position() {
    return this._position;
  }
  public putPosition(value: DashboardPanelPosition) {
    this._position.internalValue = value;
  }
  public resetPosition() {
    this._position.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dashboard_id: cdktf.stringToTerraform(this._dashboardId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      params: dashboardPanelParamsToTerraform(this._params.internalValue),
      position: dashboardPanelPositionToTerraform(this._position.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dashboard_id: {
        value: cdktf.stringToHclTerraform(this._dashboardId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      params: {
        value: dashboardPanelParamsToHclTerraform(this._params.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DashboardPanelParamsList",
      },
      position: {
        value: dashboardPanelPositionToHclTerraform(this._position.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DashboardPanelPositionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
