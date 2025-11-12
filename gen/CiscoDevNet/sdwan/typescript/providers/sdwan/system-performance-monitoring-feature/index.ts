// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_performance_monitoring_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemPerformanceMonitoringFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application groups to be monitored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_performance_monitoring_feature#app_perf_monitor_app_group SystemPerformanceMonitoringFeature#app_perf_monitor_app_group}
  */
  readonly appPerfMonitorAppGroup?: string[];
  /**
  * Application performance monitoring enable or disable
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_performance_monitoring_feature#app_perf_monitor_enabled SystemPerformanceMonitoringFeature#app_perf_monitor_enabled}
  */
  readonly appPerfMonitorEnabled?: boolean | cdktf.IResolvable;
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_performance_monitoring_feature#description SystemPerformanceMonitoringFeature#description}
  */
  readonly description?: string;
  /**
  * UMTS event driven monitoring enable or disable
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_performance_monitoring_feature#event_driven_config_enabled SystemPerformanceMonitoringFeature#event_driven_config_enabled}
  */
  readonly eventDrivenConfigEnabled?: boolean | cdktf.IResolvable;
  /**
  * UMTS events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_performance_monitoring_feature#event_driven_events SystemPerformanceMonitoringFeature#event_driven_events}
  */
  readonly eventDrivenEvents?: string[];
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_performance_monitoring_feature#feature_profile_id SystemPerformanceMonitoringFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * UMTS monitoring enable or disable
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_performance_monitoring_feature#monitoring_config_enabled SystemPerformanceMonitoringFeature#monitoring_config_enabled}
  */
  readonly monitoringConfigEnabled?: boolean | cdktf.IResolvable;
  /**
  * UMTS monitoring interval(Minutes)
  *   - Choices: `30`, `60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_performance_monitoring_feature#monitoring_config_interval SystemPerformanceMonitoringFeature#monitoring_config_interval}
  */
  readonly monitoringConfigInterval?: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_performance_monitoring_feature#name SystemPerformanceMonitoringFeature#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_performance_monitoring_feature sdwan_system_performance_monitoring_feature}
*/
export class SystemPerformanceMonitoringFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_system_performance_monitoring_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemPerformanceMonitoringFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemPerformanceMonitoringFeature to import
  * @param importFromId The id of the existing SystemPerformanceMonitoringFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_performance_monitoring_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemPerformanceMonitoringFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_system_performance_monitoring_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_performance_monitoring_feature sdwan_system_performance_monitoring_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemPerformanceMonitoringFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: SystemPerformanceMonitoringFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_system_performance_monitoring_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appPerfMonitorAppGroup = config.appPerfMonitorAppGroup;
    this._appPerfMonitorEnabled = config.appPerfMonitorEnabled;
    this._description = config.description;
    this._eventDrivenConfigEnabled = config.eventDrivenConfigEnabled;
    this._eventDrivenEvents = config.eventDrivenEvents;
    this._featureProfileId = config.featureProfileId;
    this._monitoringConfigEnabled = config.monitoringConfigEnabled;
    this._monitoringConfigInterval = config.monitoringConfigInterval;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_perf_monitor_app_group - computed: false, optional: true, required: false
  private _appPerfMonitorAppGroup?: string[]; 
  public get appPerfMonitorAppGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('app_perf_monitor_app_group'));
  }
  public set appPerfMonitorAppGroup(value: string[]) {
    this._appPerfMonitorAppGroup = value;
  }
  public resetAppPerfMonitorAppGroup() {
    this._appPerfMonitorAppGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appPerfMonitorAppGroupInput() {
    return this._appPerfMonitorAppGroup;
  }

  // app_perf_monitor_enabled - computed: false, optional: true, required: false
  private _appPerfMonitorEnabled?: boolean | cdktf.IResolvable; 
  public get appPerfMonitorEnabled() {
    return this.getBooleanAttribute('app_perf_monitor_enabled');
  }
  public set appPerfMonitorEnabled(value: boolean | cdktf.IResolvable) {
    this._appPerfMonitorEnabled = value;
  }
  public resetAppPerfMonitorEnabled() {
    this._appPerfMonitorEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appPerfMonitorEnabledInput() {
    return this._appPerfMonitorEnabled;
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

  // event_driven_config_enabled - computed: false, optional: true, required: false
  private _eventDrivenConfigEnabled?: boolean | cdktf.IResolvable; 
  public get eventDrivenConfigEnabled() {
    return this.getBooleanAttribute('event_driven_config_enabled');
  }
  public set eventDrivenConfigEnabled(value: boolean | cdktf.IResolvable) {
    this._eventDrivenConfigEnabled = value;
  }
  public resetEventDrivenConfigEnabled() {
    this._eventDrivenConfigEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventDrivenConfigEnabledInput() {
    return this._eventDrivenConfigEnabled;
  }

  // event_driven_events - computed: false, optional: true, required: false
  private _eventDrivenEvents?: string[]; 
  public get eventDrivenEvents() {
    return cdktf.Fn.tolist(this.getListAttribute('event_driven_events'));
  }
  public set eventDrivenEvents(value: string[]) {
    this._eventDrivenEvents = value;
  }
  public resetEventDrivenEvents() {
    this._eventDrivenEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventDrivenEventsInput() {
    return this._eventDrivenEvents;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // monitoring_config_enabled - computed: false, optional: true, required: false
  private _monitoringConfigEnabled?: boolean | cdktf.IResolvable; 
  public get monitoringConfigEnabled() {
    return this.getBooleanAttribute('monitoring_config_enabled');
  }
  public set monitoringConfigEnabled(value: boolean | cdktf.IResolvable) {
    this._monitoringConfigEnabled = value;
  }
  public resetMonitoringConfigEnabled() {
    this._monitoringConfigEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringConfigEnabledInput() {
    return this._monitoringConfigEnabled;
  }

  // monitoring_config_interval - computed: false, optional: true, required: false
  private _monitoringConfigInterval?: string; 
  public get monitoringConfigInterval() {
    return this.getStringAttribute('monitoring_config_interval');
  }
  public set monitoringConfigInterval(value: string) {
    this._monitoringConfigInterval = value;
  }
  public resetMonitoringConfigInterval() {
    this._monitoringConfigInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringConfigIntervalInput() {
    return this._monitoringConfigInterval;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_perf_monitor_app_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._appPerfMonitorAppGroup),
      app_perf_monitor_enabled: cdktf.booleanToTerraform(this._appPerfMonitorEnabled),
      description: cdktf.stringToTerraform(this._description),
      event_driven_config_enabled: cdktf.booleanToTerraform(this._eventDrivenConfigEnabled),
      event_driven_events: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eventDrivenEvents),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      monitoring_config_enabled: cdktf.booleanToTerraform(this._monitoringConfigEnabled),
      monitoring_config_interval: cdktf.stringToTerraform(this._monitoringConfigInterval),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_perf_monitor_app_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._appPerfMonitorAppGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      app_perf_monitor_enabled: {
        value: cdktf.booleanToHclTerraform(this._appPerfMonitorEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_driven_config_enabled: {
        value: cdktf.booleanToHclTerraform(this._eventDrivenConfigEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_driven_events: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eventDrivenEvents),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitoring_config_enabled: {
        value: cdktf.booleanToHclTerraform(this._monitoringConfigEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      monitoring_config_interval: {
        value: cdktf.stringToHclTerraform(this._monitoringConfigInterval),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
