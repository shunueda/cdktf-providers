// https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/data-sources/budgets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVantageBudgetsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataVantageBudgetsBudgetsPerformance {
}

export function dataVantageBudgetsBudgetsPerformanceToTerraform(struct?: DataVantageBudgetsBudgetsPerformance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageBudgetsBudgetsPerformanceToHclTerraform(struct?: DataVantageBudgetsBudgetsPerformance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageBudgetsBudgetsPerformanceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVantageBudgetsBudgetsPerformance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageBudgetsBudgetsPerformance | undefined) {
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

export class DataVantageBudgetsBudgetsPerformanceList extends cdktf.ComplexList {

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
  public get(index: number): DataVantageBudgetsBudgetsPerformanceOutputReference {
    return new DataVantageBudgetsBudgetsPerformanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVantageBudgetsBudgetsPeriods {
}

export function dataVantageBudgetsBudgetsPeriodsToTerraform(struct?: DataVantageBudgetsBudgetsPeriods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageBudgetsBudgetsPeriodsToHclTerraform(struct?: DataVantageBudgetsBudgetsPeriods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageBudgetsBudgetsPeriodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVantageBudgetsBudgetsPeriods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageBudgetsBudgetsPeriods | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // amount - computed: true, optional: false, required: false
  public get amount() {
    return this.getStringAttribute('amount');
  }

  // end_at - computed: true, optional: false, required: false
  public get endAt() {
    return this.getStringAttribute('end_at');
  }

  // start_at - computed: true, optional: false, required: false
  public get startAt() {
    return this.getStringAttribute('start_at');
  }
}

export class DataVantageBudgetsBudgetsPeriodsList extends cdktf.ComplexList {

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
  public get(index: number): DataVantageBudgetsBudgetsPeriodsOutputReference {
    return new DataVantageBudgetsBudgetsPeriodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVantageBudgetsBudgets {
}

export function dataVantageBudgetsBudgetsToTerraform(struct?: DataVantageBudgetsBudgets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageBudgetsBudgetsToHclTerraform(struct?: DataVantageBudgetsBudgets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageBudgetsBudgetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVantageBudgetsBudgets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageBudgetsBudgets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // budget_alert_tokens - computed: true, optional: false, required: false
  public get budgetAlertTokens() {
    return this.getListAttribute('budget_alert_tokens');
  }

  // child_budget_tokens - computed: true, optional: false, required: false
  public get childBudgetTokens() {
    return this.getListAttribute('child_budget_tokens');
  }

  // cost_report_token - computed: true, optional: false, required: false
  public get costReportToken() {
    return this.getStringAttribute('cost_report_token');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // performance - computed: true, optional: false, required: false
  private _performance = new DataVantageBudgetsBudgetsPerformanceList(this, "performance", false);
  public get performance() {
    return this._performance;
  }

  // periods - computed: true, optional: false, required: false
  private _periods = new DataVantageBudgetsBudgetsPeriodsList(this, "periods", false);
  public get periods() {
    return this._periods;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // user_token - computed: true, optional: false, required: false
  public get userToken() {
    return this.getStringAttribute('user_token');
  }

  // workspace_token - computed: true, optional: false, required: false
  public get workspaceToken() {
    return this.getStringAttribute('workspace_token');
  }
}

export class DataVantageBudgetsBudgetsList extends cdktf.ComplexList {

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
  public get(index: number): DataVantageBudgetsBudgetsOutputReference {
    return new DataVantageBudgetsBudgetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/data-sources/budgets vantage_budgets}
*/
export class DataVantageBudgets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vantage_budgets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVantageBudgets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVantageBudgets to import
  * @param importFromId The id of the existing DataVantageBudgets that should be imported. Refer to the {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/data-sources/budgets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVantageBudgets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vantage_budgets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/data-sources/budgets vantage_budgets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVantageBudgetsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVantageBudgetsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vantage_budgets',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // budgets - computed: true, optional: false, required: false
  private _budgets = new DataVantageBudgetsBudgetsList(this, "budgets", false);
  public get budgets() {
    return this._budgets;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
