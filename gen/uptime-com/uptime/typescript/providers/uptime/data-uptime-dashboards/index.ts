// https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/data-sources/dashboards
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataUptimeDashboardsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataUptimeDashboardsDashboards {
}

export function dataUptimeDashboardsDashboardsToTerraform(struct?: DataUptimeDashboardsDashboards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUptimeDashboardsDashboardsToHclTerraform(struct?: DataUptimeDashboardsDashboards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUptimeDashboardsDashboardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataUptimeDashboardsDashboards | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUptimeDashboardsDashboards | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alerts_for_all_checks - computed: true, optional: false, required: false
  public get alertsForAllChecks() {
    return this.getBooleanAttribute('alerts_for_all_checks');
  }

  // alerts_show_section - computed: true, optional: false, required: false
  public get alertsShowSection() {
    return this.getBooleanAttribute('alerts_show_section');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // is_pinned - computed: true, optional: false, required: false
  public get isPinned() {
    return this.getBooleanAttribute('is_pinned');
  }

  // metrics_for_all_checks - computed: true, optional: false, required: false
  public get metricsForAllChecks() {
    return this.getBooleanAttribute('metrics_for_all_checks');
  }

  // metrics_show_section - computed: true, optional: false, required: false
  public get metricsShowSection() {
    return this.getBooleanAttribute('metrics_show_section');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ordering - computed: true, optional: false, required: false
  public get ordering() {
    return this.getNumberAttribute('ordering');
  }

  // services_include_down - computed: true, optional: false, required: false
  public get servicesIncludeDown() {
    return this.getBooleanAttribute('services_include_down');
  }

  // services_include_maintenance - computed: true, optional: false, required: false
  public get servicesIncludeMaintenance() {
    return this.getBooleanAttribute('services_include_maintenance');
  }

  // services_include_paused - computed: true, optional: false, required: false
  public get servicesIncludePaused() {
    return this.getBooleanAttribute('services_include_paused');
  }

  // services_include_up - computed: true, optional: false, required: false
  public get servicesIncludeUp() {
    return this.getBooleanAttribute('services_include_up');
  }

  // services_num_to_show - computed: true, optional: false, required: false
  public get servicesNumToShow() {
    return this.getNumberAttribute('services_num_to_show');
  }

  // services_primary_sort - computed: true, optional: false, required: false
  public get servicesPrimarySort() {
    return this.getStringAttribute('services_primary_sort');
  }

  // services_secondary_sort - computed: true, optional: false, required: false
  public get servicesSecondarySort() {
    return this.getStringAttribute('services_secondary_sort');
  }

  // services_selected - computed: true, optional: false, required: false
  public get servicesSelected() {
    return this.getListAttribute('services_selected');
  }

  // services_show_response_time - computed: true, optional: false, required: false
  public get servicesShowResponseTime() {
    return this.getBooleanAttribute('services_show_response_time');
  }

  // services_show_section - computed: true, optional: false, required: false
  public get servicesShowSection() {
    return this.getBooleanAttribute('services_show_section');
  }

  // services_show_uptime - computed: true, optional: false, required: false
  public get servicesShowUptime() {
    return this.getBooleanAttribute('services_show_uptime');
  }

  // services_tags - computed: true, optional: false, required: false
  public get servicesTags() {
    return this.getListAttribute('services_tags');
  }
}

export class DataUptimeDashboardsDashboardsList extends cdktf.ComplexList {

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
  public get(index: number): DataUptimeDashboardsDashboardsOutputReference {
    return new DataUptimeDashboardsDashboardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/data-sources/dashboards uptime_dashboards}
*/
export class DataUptimeDashboards extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_dashboards";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataUptimeDashboards resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataUptimeDashboards to import
  * @param importFromId The id of the existing DataUptimeDashboards that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/data-sources/dashboards#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataUptimeDashboards to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_dashboards", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.17.1/docs/data-sources/dashboards uptime_dashboards} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataUptimeDashboardsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataUptimeDashboardsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'uptime_dashboards',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.17.1',
        providerVersionConstraint: '2.17.1'
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

  // dashboards - computed: true, optional: false, required: false
  private _dashboards = new DataUptimeDashboardsDashboardsList(this, "dashboards", false);
  public get dashboards() {
    return this._dashboards;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
