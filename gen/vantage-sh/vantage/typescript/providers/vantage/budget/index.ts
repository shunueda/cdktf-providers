// https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/budget
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BudgetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The tokens of any child Budgets when creating a hierarchical Budget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/budget#child_budget_tokens Budget#child_budget_tokens}
  */
  readonly childBudgetTokens?: string[];
  /**
  * The CostReport token. Ignored for hierarchical Budgets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/budget#cost_report_token Budget#cost_report_token}
  */
  readonly costReportToken?: string;
  /**
  * The name of the Budget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/budget#name Budget#name}
  */
  readonly name: string;
  /**
  * The periods for the Budget. The start_at and end_at must be iso8601 formatted e.g. YYYY-MM-DD. Ignored for hierarchical Budgets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/budget#periods Budget#periods}
  */
  readonly periods?: BudgetPeriods[] | cdktf.IResolvable;
  /**
  * The token of the Workspace to add the Budget to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/budget#workspace_token Budget#workspace_token}
  */
  readonly workspaceToken?: string;
}
export interface BudgetPerformance {
}

export function budgetPerformanceToTerraform(struct?: BudgetPerformance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function budgetPerformanceToHclTerraform(struct?: BudgetPerformance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BudgetPerformanceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BudgetPerformance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BudgetPerformance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actual - computed: true, optional: false, required: false
  public get actual() {
    return this.getStringAttribute('actual');
  }

  // amount - computed: true, optional: false, required: false
  public get amount() {
    return this.getStringAttribute('amount');
  }

  // date - computed: true, optional: false, required: false
  public get date() {
    return this.getStringAttribute('date');
  }
}

export class BudgetPerformanceList extends cdktf.ComplexList {

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
  public get(index: number): BudgetPerformanceOutputReference {
    return new BudgetPerformanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BudgetPeriods {
  /**
  * The amount of the period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/budget#amount Budget#amount}
  */
  readonly amount: number;
  /**
  * The end date of the period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/budget#end_at Budget#end_at}
  */
  readonly endAt?: string;
  /**
  * The start date of the period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/budget#start_at Budget#start_at}
  */
  readonly startAt: string;
}

export function budgetPeriodsToTerraform(struct?: BudgetPeriods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amount: cdktf.numberToTerraform(struct!.amount),
    end_at: cdktf.stringToTerraform(struct!.endAt),
    start_at: cdktf.stringToTerraform(struct!.startAt),
  }
}


export function budgetPeriodsToHclTerraform(struct?: BudgetPeriods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amount: {
      value: cdktf.numberToHclTerraform(struct!.amount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_at: {
      value: cdktf.stringToHclTerraform(struct!.endAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_at: {
      value: cdktf.stringToHclTerraform(struct!.startAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BudgetPeriodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BudgetPeriods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amount !== undefined) {
      hasAnyValues = true;
      internalValueResult.amount = this._amount;
    }
    if (this._endAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.endAt = this._endAt;
    }
    if (this._startAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.startAt = this._startAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BudgetPeriods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amount = undefined;
      this._endAt = undefined;
      this._startAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amount = value.amount;
      this._endAt = value.endAt;
      this._startAt = value.startAt;
    }
  }

  // amount - computed: true, optional: false, required: true
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // end_at - computed: true, optional: true, required: false
  private _endAt?: string; 
  public get endAt() {
    return this.getStringAttribute('end_at');
  }
  public set endAt(value: string) {
    this._endAt = value;
  }
  public resetEndAt() {
    this._endAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endAtInput() {
    return this._endAt;
  }

  // start_at - computed: true, optional: false, required: true
  private _startAt?: string; 
  public get startAt() {
    return this.getStringAttribute('start_at');
  }
  public set startAt(value: string) {
    this._startAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startAtInput() {
    return this._startAt;
  }
}

export class BudgetPeriodsList extends cdktf.ComplexList {
  public internalValue? : BudgetPeriods[] | cdktf.IResolvable

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
  public get(index: number): BudgetPeriodsOutputReference {
    return new BudgetPeriodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/budget vantage_budget}
*/
export class Budget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vantage_budget";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Budget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Budget to import
  * @param importFromId The id of the existing Budget that should be imported. Refer to the {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/budget#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Budget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vantage_budget", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/budget vantage_budget} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BudgetConfig
  */
  public constructor(scope: Construct, id: string, config: BudgetConfig) {
    super(scope, id, {
      terraformResourceType: 'vantage_budget',
      terraformGeneratorMetadata: {
        providerName: 'vantage',
        providerVersion: '0.1.68'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._childBudgetTokens = config.childBudgetTokens;
    this._costReportToken = config.costReportToken;
    this._name = config.name;
    this._periods.internalValue = config.periods;
    this._workspaceToken = config.workspaceToken;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // budget_alert_tokens - computed: true, optional: false, required: false
  public get budgetAlertTokens() {
    return this.getListAttribute('budget_alert_tokens');
  }

  // child_budget_tokens - computed: true, optional: true, required: false
  private _childBudgetTokens?: string[]; 
  public get childBudgetTokens() {
    return this.getListAttribute('child_budget_tokens');
  }
  public set childBudgetTokens(value: string[]) {
    this._childBudgetTokens = value;
  }
  public resetChildBudgetTokens() {
    this._childBudgetTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childBudgetTokensInput() {
    return this._childBudgetTokens;
  }

  // cost_report_token - computed: true, optional: true, required: false
  private _costReportToken?: string; 
  public get costReportToken() {
    return this.getStringAttribute('cost_report_token');
  }
  public set costReportToken(value: string) {
    this._costReportToken = value;
  }
  public resetCostReportToken() {
    this._costReportToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costReportTokenInput() {
    return this._costReportToken;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by_token - computed: true, optional: false, required: false
  public get createdByToken() {
    return this.getStringAttribute('created_by_token');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // performance - computed: true, optional: false, required: false
  private _performance = new BudgetPerformanceList(this, "performance", false);
  public get performance() {
    return this._performance;
  }

  // periods - computed: true, optional: true, required: false
  private _periods = new BudgetPeriodsList(this, "periods", false);
  public get periods() {
    return this._periods;
  }
  public putPeriods(value: BudgetPeriods[] | cdktf.IResolvable) {
    this._periods.internalValue = value;
  }
  public resetPeriods() {
    this._periods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodsInput() {
    return this._periods.internalValue;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // user_token - computed: true, optional: false, required: false
  public get userToken() {
    return this.getStringAttribute('user_token');
  }

  // workspace_token - computed: true, optional: true, required: false
  private _workspaceToken?: string; 
  public get workspaceToken() {
    return this.getStringAttribute('workspace_token');
  }
  public set workspaceToken(value: string) {
    this._workspaceToken = value;
  }
  public resetWorkspaceToken() {
    this._workspaceToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceTokenInput() {
    return this._workspaceToken;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      child_budget_tokens: cdktf.listMapper(cdktf.stringToTerraform, false)(this._childBudgetTokens),
      cost_report_token: cdktf.stringToTerraform(this._costReportToken),
      name: cdktf.stringToTerraform(this._name),
      periods: cdktf.listMapper(budgetPeriodsToTerraform, false)(this._periods.internalValue),
      workspace_token: cdktf.stringToTerraform(this._workspaceToken),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      child_budget_tokens: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._childBudgetTokens),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cost_report_token: {
        value: cdktf.stringToHclTerraform(this._costReportToken),
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
      periods: {
        value: cdktf.listMapperHcl(budgetPeriodsToHclTerraform, false)(this._periods.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BudgetPeriodsList",
      },
      workspace_token: {
        value: cdktf.stringToHclTerraform(this._workspaceToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
