// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultGaugeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the level at which alerts are sent for alarms raised by this Gauge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge#alert_level DefaultGauge#alert_level}
  */
  readonly alertLevel?: string;
  /**
  * A value that is used to determine whether the current monitored value indicates this gauge's severity should no longer be 'critical'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge#critical_exit_value DefaultGauge#critical_exit_value}
  */
  readonly criticalExitValue?: number;
  /**
  * When the `type` attribute is set to:
  *   - `indicator`: A regular expression pattern that is used to determine whether the current monitored value indicates this gauge's severity should be critical.
  *   - `numeric`: A value that is used to determine whether the current monitored value indicates this gauge's severity should be 'critical'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge#critical_value DefaultGauge#critical_value}
  */
  readonly criticalValue?: string;
  /**
  * A description for this Gauge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge#description DefaultGauge#description}
  */
  readonly description?: string;
  /**
  * Indicates whether this Gauge is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge#enabled DefaultGauge#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies resources to exclude from being monitored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge#exclude_resource DefaultGauge#exclude_resource}
  */
  readonly excludeResource?: string[];
  /**
  * When the `type` attribute is set to:
  *   - `indicator`: Specifies the source of data to use in determining this Indicator Gauge's severity and status.
  *   - `numeric`: Specifies the source of data to use in determining this gauge's current severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge#gauge_data_source DefaultGauge#gauge_data_source}
  */
  readonly gaugeDataSource?: string;
  /**
  * Specifies set of resources to be monitored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge#include_resource DefaultGauge#include_resource}
  */
  readonly includeResource?: string[];
  /**
  * A value that is used to determine whether the current monitored value indicates this gauge's severity should no longer be 'major'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge#major_exit_value DefaultGauge#major_exit_value}
  */
  readonly majorExitValue?: number;
  /**
  * When the `type` attribute is set to:
  *   - `indicator`: A regular expression pattern that is used to determine whether the current monitored value indicates this gauge's severity will be 'major'.
  *   - `numeric`: A value that is used to determine whether the current monitored value indicates this gauge's severity should be 'major'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge#major_value DefaultGauge#major_value}
  */
  readonly majorValue?: string;
  /**
  * A value that is used to determine whether the current monitored value indicates this gauge's severity should no longer be 'minor'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge#minor_exit_value DefaultGauge#minor_exit_value}
  */
  readonly minorExitValue?: number;
  /**
  * When the `type` attribute is set to:
  *   - `indicator`: A regular expression pattern that is used to determine whether the current monitored value indicates this gauge's severity will be 'minor'.
  *   - `numeric`: A value that is used to determine whether the current monitored value indicates this gauge's severity should be 'minor'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge#minor_value DefaultGauge#minor_value}
  */
  readonly minorValue?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge#name DefaultGauge#name}
  */
  readonly name: string;
  /**
  * When defined, causes this Gauge to assume the specified severity, overriding its computed severity. This is useful for testing alarms generated by Gauges as well as suppressing alarms for known conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge#override_severity DefaultGauge#override_severity}
  */
  readonly overrideSeverity?: string;
  /**
  * Indicates the number of times the monitor data source value will be collected during the update interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge#samples_per_update_interval DefaultGauge#samples_per_update_interval}
  */
  readonly samplesPerUpdateInterval?: number;
  /**
  * Specifies the alarm severity level at or above which the server is considered degraded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge#server_degraded_severity_level DefaultGauge#server_degraded_severity_level}
  */
  readonly serverDegradedSeverityLevel?: string;
  /**
  * Specifies the alarm severity level at or above which the server is considered unavailable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge#server_unavailable_severity_level DefaultGauge#server_unavailable_severity_level}
  */
  readonly serverUnavailableSeverityLevel?: string;
  /**
  * The frequency with which this Gauge is updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge#update_interval DefaultGauge#update_interval}
  */
  readonly updateInterval?: string;
  /**
  * A value that is used to determine whether the current monitored value indicates this gauge's severity should no longer be 'warning'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge#warning_exit_value DefaultGauge#warning_exit_value}
  */
  readonly warningExitValue?: number;
  /**
  * When the `type` attribute is set to:
  *   - `indicator`: A regular expression pattern that is used to determine whether the current monitored value indicates this gauge's severity will be 'warning'.
  *   - `numeric`: A value that is used to determine whether the current monitored value indicates this gauge's severity should be 'warning'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge#warning_value DefaultGauge#warning_value}
  */
  readonly warningValue?: string;
}
export interface DefaultGaugeRequiredActions {
}

export function defaultGaugeRequiredActionsToTerraform(struct?: DefaultGaugeRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultGaugeRequiredActionsToHclTerraform(struct?: DefaultGaugeRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultGaugeRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultGaugeRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultGaugeRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DefaultGaugeRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultGaugeRequiredActionsOutputReference {
    return new DefaultGaugeRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge pingdirectory_default_gauge}
*/
export class DefaultGauge extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_gauge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultGauge resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultGauge to import
  * @param importFromId The id of the existing DefaultGauge that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultGauge to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_gauge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge pingdirectory_default_gauge} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultGaugeConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultGaugeConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_gauge',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertLevel = config.alertLevel;
    this._criticalExitValue = config.criticalExitValue;
    this._criticalValue = config.criticalValue;
    this._description = config.description;
    this._enabled = config.enabled;
    this._excludeResource = config.excludeResource;
    this._gaugeDataSource = config.gaugeDataSource;
    this._includeResource = config.includeResource;
    this._majorExitValue = config.majorExitValue;
    this._majorValue = config.majorValue;
    this._minorExitValue = config.minorExitValue;
    this._minorValue = config.minorValue;
    this._name = config.name;
    this._overrideSeverity = config.overrideSeverity;
    this._samplesPerUpdateInterval = config.samplesPerUpdateInterval;
    this._serverDegradedSeverityLevel = config.serverDegradedSeverityLevel;
    this._serverUnavailableSeverityLevel = config.serverUnavailableSeverityLevel;
    this._updateInterval = config.updateInterval;
    this._warningExitValue = config.warningExitValue;
    this._warningValue = config.warningValue;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_level - computed: true, optional: true, required: false
  private _alertLevel?: string; 
  public get alertLevel() {
    return this.getStringAttribute('alert_level');
  }
  public set alertLevel(value: string) {
    this._alertLevel = value;
  }
  public resetAlertLevel() {
    this._alertLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertLevelInput() {
    return this._alertLevel;
  }

  // critical_exit_value - computed: true, optional: true, required: false
  private _criticalExitValue?: number; 
  public get criticalExitValue() {
    return this.getNumberAttribute('critical_exit_value');
  }
  public set criticalExitValue(value: number) {
    this._criticalExitValue = value;
  }
  public resetCriticalExitValue() {
    this._criticalExitValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalExitValueInput() {
    return this._criticalExitValue;
  }

  // critical_value - computed: true, optional: true, required: false
  private _criticalValue?: string; 
  public get criticalValue() {
    return this.getStringAttribute('critical_value');
  }
  public set criticalValue(value: string) {
    this._criticalValue = value;
  }
  public resetCriticalValue() {
    this._criticalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalValueInput() {
    return this._criticalValue;
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

  // enabled - computed: true, optional: true, required: false
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

  // exclude_resource - computed: true, optional: true, required: false
  private _excludeResource?: string[]; 
  public get excludeResource() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_resource'));
  }
  public set excludeResource(value: string[]) {
    this._excludeResource = value;
  }
  public resetExcludeResource() {
    this._excludeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeResourceInput() {
    return this._excludeResource;
  }

  // gauge_data_source - computed: true, optional: true, required: false
  private _gaugeDataSource?: string; 
  public get gaugeDataSource() {
    return this.getStringAttribute('gauge_data_source');
  }
  public set gaugeDataSource(value: string) {
    this._gaugeDataSource = value;
  }
  public resetGaugeDataSource() {
    this._gaugeDataSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gaugeDataSourceInput() {
    return this._gaugeDataSource;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_resource - computed: true, optional: true, required: false
  private _includeResource?: string[]; 
  public get includeResource() {
    return cdktf.Fn.tolist(this.getListAttribute('include_resource'));
  }
  public set includeResource(value: string[]) {
    this._includeResource = value;
  }
  public resetIncludeResource() {
    this._includeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeResourceInput() {
    return this._includeResource;
  }

  // major_exit_value - computed: true, optional: true, required: false
  private _majorExitValue?: number; 
  public get majorExitValue() {
    return this.getNumberAttribute('major_exit_value');
  }
  public set majorExitValue(value: number) {
    this._majorExitValue = value;
  }
  public resetMajorExitValue() {
    this._majorExitValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get majorExitValueInput() {
    return this._majorExitValue;
  }

  // major_value - computed: true, optional: true, required: false
  private _majorValue?: string; 
  public get majorValue() {
    return this.getStringAttribute('major_value');
  }
  public set majorValue(value: string) {
    this._majorValue = value;
  }
  public resetMajorValue() {
    this._majorValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get majorValueInput() {
    return this._majorValue;
  }

  // minor_exit_value - computed: true, optional: true, required: false
  private _minorExitValue?: number; 
  public get minorExitValue() {
    return this.getNumberAttribute('minor_exit_value');
  }
  public set minorExitValue(value: number) {
    this._minorExitValue = value;
  }
  public resetMinorExitValue() {
    this._minorExitValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minorExitValueInput() {
    return this._minorExitValue;
  }

  // minor_value - computed: true, optional: true, required: false
  private _minorValue?: string; 
  public get minorValue() {
    return this.getStringAttribute('minor_value');
  }
  public set minorValue(value: string) {
    this._minorValue = value;
  }
  public resetMinorValue() {
    this._minorValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minorValueInput() {
    return this._minorValue;
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // override_severity - computed: true, optional: true, required: false
  private _overrideSeverity?: string; 
  public get overrideSeverity() {
    return this.getStringAttribute('override_severity');
  }
  public set overrideSeverity(value: string) {
    this._overrideSeverity = value;
  }
  public resetOverrideSeverity() {
    this._overrideSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideSeverityInput() {
    return this._overrideSeverity;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultGaugeRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // samples_per_update_interval - computed: true, optional: true, required: false
  private _samplesPerUpdateInterval?: number; 
  public get samplesPerUpdateInterval() {
    return this.getNumberAttribute('samples_per_update_interval');
  }
  public set samplesPerUpdateInterval(value: number) {
    this._samplesPerUpdateInterval = value;
  }
  public resetSamplesPerUpdateInterval() {
    this._samplesPerUpdateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplesPerUpdateIntervalInput() {
    return this._samplesPerUpdateInterval;
  }

  // server_degraded_severity_level - computed: true, optional: true, required: false
  private _serverDegradedSeverityLevel?: string; 
  public get serverDegradedSeverityLevel() {
    return this.getStringAttribute('server_degraded_severity_level');
  }
  public set serverDegradedSeverityLevel(value: string) {
    this._serverDegradedSeverityLevel = value;
  }
  public resetServerDegradedSeverityLevel() {
    this._serverDegradedSeverityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverDegradedSeverityLevelInput() {
    return this._serverDegradedSeverityLevel;
  }

  // server_unavailable_severity_level - computed: true, optional: true, required: false
  private _serverUnavailableSeverityLevel?: string; 
  public get serverUnavailableSeverityLevel() {
    return this.getStringAttribute('server_unavailable_severity_level');
  }
  public set serverUnavailableSeverityLevel(value: string) {
    this._serverUnavailableSeverityLevel = value;
  }
  public resetServerUnavailableSeverityLevel() {
    this._serverUnavailableSeverityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUnavailableSeverityLevelInput() {
    return this._serverUnavailableSeverityLevel;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // update_interval - computed: true, optional: true, required: false
  private _updateInterval?: string; 
  public get updateInterval() {
    return this.getStringAttribute('update_interval');
  }
  public set updateInterval(value: string) {
    this._updateInterval = value;
  }
  public resetUpdateInterval() {
    this._updateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateIntervalInput() {
    return this._updateInterval;
  }

  // warning_exit_value - computed: true, optional: true, required: false
  private _warningExitValue?: number; 
  public get warningExitValue() {
    return this.getNumberAttribute('warning_exit_value');
  }
  public set warningExitValue(value: number) {
    this._warningExitValue = value;
  }
  public resetWarningExitValue() {
    this._warningExitValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningExitValueInput() {
    return this._warningExitValue;
  }

  // warning_value - computed: true, optional: true, required: false
  private _warningValue?: string; 
  public get warningValue() {
    return this.getStringAttribute('warning_value');
  }
  public set warningValue(value: string) {
    this._warningValue = value;
  }
  public resetWarningValue() {
    this._warningValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningValueInput() {
    return this._warningValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_level: cdktf.stringToTerraform(this._alertLevel),
      critical_exit_value: cdktf.numberToTerraform(this._criticalExitValue),
      critical_value: cdktf.stringToTerraform(this._criticalValue),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      exclude_resource: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeResource),
      gauge_data_source: cdktf.stringToTerraform(this._gaugeDataSource),
      include_resource: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includeResource),
      major_exit_value: cdktf.numberToTerraform(this._majorExitValue),
      major_value: cdktf.stringToTerraform(this._majorValue),
      minor_exit_value: cdktf.numberToTerraform(this._minorExitValue),
      minor_value: cdktf.stringToTerraform(this._minorValue),
      name: cdktf.stringToTerraform(this._name),
      override_severity: cdktf.stringToTerraform(this._overrideSeverity),
      samples_per_update_interval: cdktf.numberToTerraform(this._samplesPerUpdateInterval),
      server_degraded_severity_level: cdktf.stringToTerraform(this._serverDegradedSeverityLevel),
      server_unavailable_severity_level: cdktf.stringToTerraform(this._serverUnavailableSeverityLevel),
      update_interval: cdktf.stringToTerraform(this._updateInterval),
      warning_exit_value: cdktf.numberToTerraform(this._warningExitValue),
      warning_value: cdktf.stringToTerraform(this._warningValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_level: {
        value: cdktf.stringToHclTerraform(this._alertLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      critical_exit_value: {
        value: cdktf.numberToHclTerraform(this._criticalExitValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      critical_value: {
        value: cdktf.stringToHclTerraform(this._criticalValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exclude_resource: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeResource),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      gauge_data_source: {
        value: cdktf.stringToHclTerraform(this._gaugeDataSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_resource: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includeResource),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      major_exit_value: {
        value: cdktf.numberToHclTerraform(this._majorExitValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      major_value: {
        value: cdktf.stringToHclTerraform(this._majorValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minor_exit_value: {
        value: cdktf.numberToHclTerraform(this._minorExitValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minor_value: {
        value: cdktf.stringToHclTerraform(this._minorValue),
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
      override_severity: {
        value: cdktf.stringToHclTerraform(this._overrideSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      samples_per_update_interval: {
        value: cdktf.numberToHclTerraform(this._samplesPerUpdateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_degraded_severity_level: {
        value: cdktf.stringToHclTerraform(this._serverDegradedSeverityLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_unavailable_severity_level: {
        value: cdktf.stringToHclTerraform(this._serverUnavailableSeverityLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_interval: {
        value: cdktf.stringToHclTerraform(this._updateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warning_exit_value: {
        value: cdktf.numberToHclTerraform(this._warningExitValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      warning_value: {
        value: cdktf.stringToHclTerraform(this._warningValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
