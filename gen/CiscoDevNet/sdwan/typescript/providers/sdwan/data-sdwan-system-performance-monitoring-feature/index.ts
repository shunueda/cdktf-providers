// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_performance_monitoring_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanSystemPerformanceMonitoringFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_performance_monitoring_feature#feature_profile_id DataSdwanSystemPerformanceMonitoringFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_performance_monitoring_feature#id DataSdwanSystemPerformanceMonitoringFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_performance_monitoring_feature sdwan_system_performance_monitoring_feature}
*/
export class DataSdwanSystemPerformanceMonitoringFeature extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_system_performance_monitoring_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanSystemPerformanceMonitoringFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanSystemPerformanceMonitoringFeature to import
  * @param importFromId The id of the existing DataSdwanSystemPerformanceMonitoringFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_performance_monitoring_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanSystemPerformanceMonitoringFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_system_performance_monitoring_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_performance_monitoring_feature sdwan_system_performance_monitoring_feature} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanSystemPerformanceMonitoringFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanSystemPerformanceMonitoringFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_system_performance_monitoring_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._featureProfileId = config.featureProfileId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_perf_monitor_app_group - computed: true, optional: false, required: false
  public get appPerfMonitorAppGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('app_perf_monitor_app_group'));
  }

  // app_perf_monitor_enabled - computed: true, optional: false, required: false
  public get appPerfMonitorEnabled() {
    return this.getBooleanAttribute('app_perf_monitor_enabled');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // event_driven_config_enabled - computed: true, optional: false, required: false
  public get eventDrivenConfigEnabled() {
    return this.getBooleanAttribute('event_driven_config_enabled');
  }

  // event_driven_events - computed: true, optional: false, required: false
  public get eventDrivenEvents() {
    return cdktf.Fn.tolist(this.getListAttribute('event_driven_events'));
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // monitoring_config_enabled - computed: true, optional: false, required: false
  public get monitoringConfigEnabled() {
    return this.getBooleanAttribute('monitoring_config_enabled');
  }

  // monitoring_config_interval - computed: true, optional: false, required: false
  public get monitoringConfigInterval() {
    return this.getStringAttribute('monitoring_config_interval');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
