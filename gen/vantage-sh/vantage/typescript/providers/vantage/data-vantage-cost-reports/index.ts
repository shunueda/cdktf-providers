// https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/data-sources/cost_reports
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVantageCostReportsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataVantageCostReportsCostReports {
}

export function dataVantageCostReportsCostReportsToTerraform(struct?: DataVantageCostReportsCostReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageCostReportsCostReportsToHclTerraform(struct?: DataVantageCostReportsCostReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageCostReportsCostReportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVantageCostReportsCostReports | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageCostReportsCostReports | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chart_type - computed: true, optional: false, required: false
  public get chartType() {
    return this.getStringAttribute('chart_type');
  }

  // date_bin - computed: true, optional: false, required: false
  public get dateBin() {
    return this.getStringAttribute('date_bin');
  }

  // date_interval - computed: true, optional: false, required: false
  public get dateInterval() {
    return this.getStringAttribute('date_interval');
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
  }

  // folder_token - computed: true, optional: false, required: false
  public get folderToken() {
    return this.getStringAttribute('folder_token');
  }

  // groupings - computed: true, optional: false, required: false
  public get groupings() {
    return this.getStringAttribute('groupings');
  }

  // previous_period_end_date - computed: true, optional: false, required: false
  public get previousPeriodEndDate() {
    return this.getStringAttribute('previous_period_end_date');
  }

  // previous_period_start_date - computed: true, optional: false, required: false
  public get previousPeriodStartDate() {
    return this.getStringAttribute('previous_period_start_date');
  }

  // saved_filter_tokens - computed: true, optional: false, required: false
  public get savedFilterTokens() {
    return this.getListAttribute('saved_filter_tokens');
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // workspace_token - computed: true, optional: false, required: false
  public get workspaceToken() {
    return this.getStringAttribute('workspace_token');
  }
}

export class DataVantageCostReportsCostReportsList extends cdktf.ComplexList {

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
  public get(index: number): DataVantageCostReportsCostReportsOutputReference {
    return new DataVantageCostReportsCostReportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/data-sources/cost_reports vantage_cost_reports}
*/
export class DataVantageCostReports extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vantage_cost_reports";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVantageCostReports resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVantageCostReports to import
  * @param importFromId The id of the existing DataVantageCostReports that should be imported. Refer to the {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/data-sources/cost_reports#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVantageCostReports to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vantage_cost_reports", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/data-sources/cost_reports vantage_cost_reports} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVantageCostReportsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVantageCostReportsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vantage_cost_reports',
      terraformGeneratorMetadata: {
        providerName: 'vantage',
        providerVersion: '0.1.68',
        providerVersionConstraint: '0.1.68'
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

  // cost_reports - computed: true, optional: false, required: false
  private _costReports = new DataVantageCostReportsCostReportsList(this, "cost_reports", false);
  public get costReports() {
    return this._costReports;
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
