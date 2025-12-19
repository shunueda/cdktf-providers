// https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/data-sources/kubernetes_efficiency_reports
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVantageKubernetesEfficiencyReportsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataVantageKubernetesEfficiencyReportsKubernetesEfficiencyReports {
}

export function dataVantageKubernetesEfficiencyReportsKubernetesEfficiencyReportsToTerraform(struct?: DataVantageKubernetesEfficiencyReportsKubernetesEfficiencyReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageKubernetesEfficiencyReportsKubernetesEfficiencyReportsToHclTerraform(struct?: DataVantageKubernetesEfficiencyReportsKubernetesEfficiencyReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageKubernetesEfficiencyReportsKubernetesEfficiencyReportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVantageKubernetesEfficiencyReportsKubernetesEfficiencyReports | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageKubernetesEfficiencyReportsKubernetesEfficiencyReports | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregated_by - computed: true, optional: false, required: false
  public get aggregatedBy() {
    return this.getStringAttribute('aggregated_by');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // date_bucket - computed: true, optional: false, required: false
  public get dateBucket() {
    return this.getStringAttribute('date_bucket');
  }

  // date_interval - computed: true, optional: false, required: false
  public get dateInterval() {
    return this.getStringAttribute('date_interval');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
  }

  // groupings - computed: true, optional: false, required: false
  public get groupings() {
    return this.getStringAttribute('groupings');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // user_token - computed: true, optional: false, required: false
  public get userToken() {
    return this.getStringAttribute('user_token');
  }

  // workspace_token - computed: true, optional: false, required: false
  public get workspaceToken() {
    return this.getStringAttribute('workspace_token');
  }
}

export class DataVantageKubernetesEfficiencyReportsKubernetesEfficiencyReportsList extends cdktf.ComplexList {

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
  public get(index: number): DataVantageKubernetesEfficiencyReportsKubernetesEfficiencyReportsOutputReference {
    return new DataVantageKubernetesEfficiencyReportsKubernetesEfficiencyReportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/data-sources/kubernetes_efficiency_reports vantage_kubernetes_efficiency_reports}
*/
export class DataVantageKubernetesEfficiencyReports extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vantage_kubernetes_efficiency_reports";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVantageKubernetesEfficiencyReports resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVantageKubernetesEfficiencyReports to import
  * @param importFromId The id of the existing DataVantageKubernetesEfficiencyReports that should be imported. Refer to the {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/data-sources/kubernetes_efficiency_reports#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVantageKubernetesEfficiencyReports to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vantage_kubernetes_efficiency_reports", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/data-sources/kubernetes_efficiency_reports vantage_kubernetes_efficiency_reports} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVantageKubernetesEfficiencyReportsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVantageKubernetesEfficiencyReportsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vantage_kubernetes_efficiency_reports',
      terraformGeneratorMetadata: {
        providerName: 'vantage',
        providerVersion: '0.1.71',
        providerVersionConstraint: '0.1.71'
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

  // kubernetes_efficiency_reports - computed: true, optional: false, required: false
  private _kubernetesEfficiencyReports = new DataVantageKubernetesEfficiencyReportsKubernetesEfficiencyReportsList(this, "kubernetes_efficiency_reports", false);
  public get kubernetesEfficiencyReports() {
    return this._kubernetesEfficiencyReports;
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
