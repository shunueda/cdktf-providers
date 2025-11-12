// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_monitor_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultMonitorProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the length of time between administrative alerts generated in response to lack of usable disk space. Administrative alerts will be generated whenever the amount of usable space drops below any threshold, and they will also be generated at regular intervals as long as the amount of usable space remains below the threshold value. A value of zero indicates that alerts should only be generated when the amount of usable space drops below a configured threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_monitor_provider#alert_frequency DefaultMonitorProvider#alert_frequency}
  */
  readonly alertFrequency?: string;
  /**
  * The frequency with which this monitor provider should confirm the ability to access the server's encryption settings database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_monitor_provider#check_frequency DefaultMonitorProvider#check_frequency}
  */
  readonly checkFrequency?: string;
  /**
  * A description for this Monitor Provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_monitor_provider#description DefaultMonitorProvider#description}
  */
  readonly description?: string;
  /**
  * Specifies which disk devices to monitor for I/O activity. Should be the device name as displayed by iostat -d.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_monitor_provider#disk_devices DefaultMonitorProvider#disk_devices}
  */
  readonly diskDevices?: string[];
  /**
  * When the `type` attribute is set to:
  *   - One of [`memory-usage`, `stack-trace`, `encryption-settings-database-accessibility`, `custom`, `active-operations`, `ssl-context`, `version`, `general`, `disk-space-usage`, `system-info`, `client-connection`, `third-party`]: Indicates whether the Monitor Provider is enabled for use.
  *   - `host-system`: Indicates whether the Host System Monitor Provider is enabled for use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_monitor_provider#enabled DefaultMonitorProvider#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The set of arguments used to customize the behavior for the Third Party Monitor Provider. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_monitor_provider#extension_argument DefaultMonitorProvider#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party Monitor Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_monitor_provider#extension_class DefaultMonitorProvider#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * Specifies the low space error threshold value as a percentage of total space. If the amount of usable disk space drops below this amount, then the Directory Server will start rejecting operations requested by non-root users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_monitor_provider#low_space_error_percent_threshold DefaultMonitorProvider#low_space_error_percent_threshold}
  */
  readonly lowSpaceErrorPercentThreshold?: number;
  /**
  * Specifies the low space error threshold value as an absolute amount of space. If the amount of usable disk space drops below this amount, then the Directory Server will start rejecting operations requested by non-root users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_monitor_provider#low_space_error_size_threshold DefaultMonitorProvider#low_space_error_size_threshold}
  */
  readonly lowSpaceErrorSizeThreshold?: string;
  /**
  * Specifies the low space warning threshold value as a percentage of total space. If the amount of usable disk space drops below this amount, then the Directory Server will begin generating warning alert notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_monitor_provider#low_space_warning_percent_threshold DefaultMonitorProvider#low_space_warning_percent_threshold}
  */
  readonly lowSpaceWarningPercentThreshold?: number;
  /**
  * Specifies the low space warning threshold value as an absolute amount of space. If the amount of usable disk space drops below this amount, then the Directory Server will begin generating warning alert notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_monitor_provider#low_space_warning_size_threshold DefaultMonitorProvider#low_space_warning_size_threshold}
  */
  readonly lowSpaceWarningSizeThreshold?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_monitor_provider#name DefaultMonitorProvider#name}
  */
  readonly name: string;
  /**
  * Specifies which network interfaces to monitor for I/O activity. Should be the device name as displayed by netstat -i.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_monitor_provider#network_devices DefaultMonitorProvider#network_devices}
  */
  readonly networkDevices?: string[];
  /**
  * Specifies the out of space error threshold value as a percentage of total space. If the amount of usable disk space drops below this amount, then the Directory Server will shut itself down to avoid problems that may occur from complete exhaustion of usable space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_monitor_provider#out_of_space_error_percent_threshold DefaultMonitorProvider#out_of_space_error_percent_threshold}
  */
  readonly outOfSpaceErrorPercentThreshold?: number;
  /**
  * Specifies the out of space error threshold value as an absolute amount of space. If the amount of usable disk space drops below this amount, then the Directory Server will shut itself down to avoid problems that may occur from complete exhaustion of usable space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_monitor_provider#out_of_space_error_size_threshold DefaultMonitorProvider#out_of_space_error_size_threshold}
  */
  readonly outOfSpaceErrorSizeThreshold?: string;
  /**
  * The behavior that the server should exhibit after a prolonged period of time when the encryption settings database remains unreadable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_monitor_provider#prolonged_outage_behavior DefaultMonitorProvider#prolonged_outage_behavior}
  */
  readonly prolongedOutageBehavior?: string;
  /**
  * The minimum length of time that an outage should persist before it is considered a prolonged outage. If an outage lasts at least as long as this duration, then the server will take the action indicated by the prolonged-outage-behavior property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_monitor_provider#prolonged_outage_duration DefaultMonitorProvider#prolonged_outage_duration}
  */
  readonly prolongedOutageDuration?: string;
  /**
  * Specifies a relative or absolute path to the directory on the local filesystem containing the log files used by the system utilization monitor. The path must exist, and it must be a writable directory by the server process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_monitor_provider#system_utilization_monitor_log_directory DefaultMonitorProvider#system_utilization_monitor_log_directory}
  */
  readonly systemUtilizationMonitorLogDirectory?: string;
}
export interface DefaultMonitorProviderRequiredActions {
}

export function defaultMonitorProviderRequiredActionsToTerraform(struct?: DefaultMonitorProviderRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultMonitorProviderRequiredActionsToHclTerraform(struct?: DefaultMonitorProviderRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultMonitorProviderRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultMonitorProviderRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultMonitorProviderRequiredActions | undefined) {
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

export class DefaultMonitorProviderRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultMonitorProviderRequiredActionsOutputReference {
    return new DefaultMonitorProviderRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_monitor_provider pingdirectory_default_monitor_provider}
*/
export class DefaultMonitorProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_monitor_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultMonitorProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultMonitorProvider to import
  * @param importFromId The id of the existing DefaultMonitorProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_monitor_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultMonitorProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_monitor_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_monitor_provider pingdirectory_default_monitor_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultMonitorProviderConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultMonitorProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_monitor_provider',
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
    this._alertFrequency = config.alertFrequency;
    this._checkFrequency = config.checkFrequency;
    this._description = config.description;
    this._diskDevices = config.diskDevices;
    this._enabled = config.enabled;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._lowSpaceErrorPercentThreshold = config.lowSpaceErrorPercentThreshold;
    this._lowSpaceErrorSizeThreshold = config.lowSpaceErrorSizeThreshold;
    this._lowSpaceWarningPercentThreshold = config.lowSpaceWarningPercentThreshold;
    this._lowSpaceWarningSizeThreshold = config.lowSpaceWarningSizeThreshold;
    this._name = config.name;
    this._networkDevices = config.networkDevices;
    this._outOfSpaceErrorPercentThreshold = config.outOfSpaceErrorPercentThreshold;
    this._outOfSpaceErrorSizeThreshold = config.outOfSpaceErrorSizeThreshold;
    this._prolongedOutageBehavior = config.prolongedOutageBehavior;
    this._prolongedOutageDuration = config.prolongedOutageDuration;
    this._systemUtilizationMonitorLogDirectory = config.systemUtilizationMonitorLogDirectory;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_frequency - computed: true, optional: true, required: false
  private _alertFrequency?: string; 
  public get alertFrequency() {
    return this.getStringAttribute('alert_frequency');
  }
  public set alertFrequency(value: string) {
    this._alertFrequency = value;
  }
  public resetAlertFrequency() {
    this._alertFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertFrequencyInput() {
    return this._alertFrequency;
  }

  // check_frequency - computed: true, optional: true, required: false
  private _checkFrequency?: string; 
  public get checkFrequency() {
    return this.getStringAttribute('check_frequency');
  }
  public set checkFrequency(value: string) {
    this._checkFrequency = value;
  }
  public resetCheckFrequency() {
    this._checkFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkFrequencyInput() {
    return this._checkFrequency;
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

  // disk_devices - computed: true, optional: true, required: false
  private _diskDevices?: string[]; 
  public get diskDevices() {
    return cdktf.Fn.tolist(this.getListAttribute('disk_devices'));
  }
  public set diskDevices(value: string[]) {
    this._diskDevices = value;
  }
  public resetDiskDevices() {
    this._diskDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskDevicesInput() {
    return this._diskDevices;
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

  // extension_argument - computed: true, optional: true, required: false
  private _extensionArgument?: string[]; 
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }
  public set extensionArgument(value: string[]) {
    this._extensionArgument = value;
  }
  public resetExtensionArgument() {
    this._extensionArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionArgumentInput() {
    return this._extensionArgument;
  }

  // extension_class - computed: true, optional: true, required: false
  private _extensionClass?: string; 
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }
  public set extensionClass(value: string) {
    this._extensionClass = value;
  }
  public resetExtensionClass() {
    this._extensionClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionClassInput() {
    return this._extensionClass;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // low_space_error_percent_threshold - computed: true, optional: true, required: false
  private _lowSpaceErrorPercentThreshold?: number; 
  public get lowSpaceErrorPercentThreshold() {
    return this.getNumberAttribute('low_space_error_percent_threshold');
  }
  public set lowSpaceErrorPercentThreshold(value: number) {
    this._lowSpaceErrorPercentThreshold = value;
  }
  public resetLowSpaceErrorPercentThreshold() {
    this._lowSpaceErrorPercentThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowSpaceErrorPercentThresholdInput() {
    return this._lowSpaceErrorPercentThreshold;
  }

  // low_space_error_size_threshold - computed: true, optional: true, required: false
  private _lowSpaceErrorSizeThreshold?: string; 
  public get lowSpaceErrorSizeThreshold() {
    return this.getStringAttribute('low_space_error_size_threshold');
  }
  public set lowSpaceErrorSizeThreshold(value: string) {
    this._lowSpaceErrorSizeThreshold = value;
  }
  public resetLowSpaceErrorSizeThreshold() {
    this._lowSpaceErrorSizeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowSpaceErrorSizeThresholdInput() {
    return this._lowSpaceErrorSizeThreshold;
  }

  // low_space_warning_percent_threshold - computed: true, optional: true, required: false
  private _lowSpaceWarningPercentThreshold?: number; 
  public get lowSpaceWarningPercentThreshold() {
    return this.getNumberAttribute('low_space_warning_percent_threshold');
  }
  public set lowSpaceWarningPercentThreshold(value: number) {
    this._lowSpaceWarningPercentThreshold = value;
  }
  public resetLowSpaceWarningPercentThreshold() {
    this._lowSpaceWarningPercentThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowSpaceWarningPercentThresholdInput() {
    return this._lowSpaceWarningPercentThreshold;
  }

  // low_space_warning_size_threshold - computed: true, optional: true, required: false
  private _lowSpaceWarningSizeThreshold?: string; 
  public get lowSpaceWarningSizeThreshold() {
    return this.getStringAttribute('low_space_warning_size_threshold');
  }
  public set lowSpaceWarningSizeThreshold(value: string) {
    this._lowSpaceWarningSizeThreshold = value;
  }
  public resetLowSpaceWarningSizeThreshold() {
    this._lowSpaceWarningSizeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowSpaceWarningSizeThresholdInput() {
    return this._lowSpaceWarningSizeThreshold;
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

  // network_devices - computed: true, optional: true, required: false
  private _networkDevices?: string[]; 
  public get networkDevices() {
    return cdktf.Fn.tolist(this.getListAttribute('network_devices'));
  }
  public set networkDevices(value: string[]) {
    this._networkDevices = value;
  }
  public resetNetworkDevices() {
    this._networkDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDevicesInput() {
    return this._networkDevices;
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // out_of_space_error_percent_threshold - computed: true, optional: true, required: false
  private _outOfSpaceErrorPercentThreshold?: number; 
  public get outOfSpaceErrorPercentThreshold() {
    return this.getNumberAttribute('out_of_space_error_percent_threshold');
  }
  public set outOfSpaceErrorPercentThreshold(value: number) {
    this._outOfSpaceErrorPercentThreshold = value;
  }
  public resetOutOfSpaceErrorPercentThreshold() {
    this._outOfSpaceErrorPercentThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfSpaceErrorPercentThresholdInput() {
    return this._outOfSpaceErrorPercentThreshold;
  }

  // out_of_space_error_size_threshold - computed: true, optional: true, required: false
  private _outOfSpaceErrorSizeThreshold?: string; 
  public get outOfSpaceErrorSizeThreshold() {
    return this.getStringAttribute('out_of_space_error_size_threshold');
  }
  public set outOfSpaceErrorSizeThreshold(value: string) {
    this._outOfSpaceErrorSizeThreshold = value;
  }
  public resetOutOfSpaceErrorSizeThreshold() {
    this._outOfSpaceErrorSizeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfSpaceErrorSizeThresholdInput() {
    return this._outOfSpaceErrorSizeThreshold;
  }

  // prolonged_outage_behavior - computed: true, optional: true, required: false
  private _prolongedOutageBehavior?: string; 
  public get prolongedOutageBehavior() {
    return this.getStringAttribute('prolonged_outage_behavior');
  }
  public set prolongedOutageBehavior(value: string) {
    this._prolongedOutageBehavior = value;
  }
  public resetProlongedOutageBehavior() {
    this._prolongedOutageBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prolongedOutageBehaviorInput() {
    return this._prolongedOutageBehavior;
  }

  // prolonged_outage_duration - computed: true, optional: true, required: false
  private _prolongedOutageDuration?: string; 
  public get prolongedOutageDuration() {
    return this.getStringAttribute('prolonged_outage_duration');
  }
  public set prolongedOutageDuration(value: string) {
    this._prolongedOutageDuration = value;
  }
  public resetProlongedOutageDuration() {
    this._prolongedOutageDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prolongedOutageDurationInput() {
    return this._prolongedOutageDuration;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultMonitorProviderRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // system_utilization_monitor_log_directory - computed: true, optional: true, required: false
  private _systemUtilizationMonitorLogDirectory?: string; 
  public get systemUtilizationMonitorLogDirectory() {
    return this.getStringAttribute('system_utilization_monitor_log_directory');
  }
  public set systemUtilizationMonitorLogDirectory(value: string) {
    this._systemUtilizationMonitorLogDirectory = value;
  }
  public resetSystemUtilizationMonitorLogDirectory() {
    this._systemUtilizationMonitorLogDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemUtilizationMonitorLogDirectoryInput() {
    return this._systemUtilizationMonitorLogDirectory;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_frequency: cdktf.stringToTerraform(this._alertFrequency),
      check_frequency: cdktf.stringToTerraform(this._checkFrequency),
      description: cdktf.stringToTerraform(this._description),
      disk_devices: cdktf.listMapper(cdktf.stringToTerraform, false)(this._diskDevices),
      enabled: cdktf.booleanToTerraform(this._enabled),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      low_space_error_percent_threshold: cdktf.numberToTerraform(this._lowSpaceErrorPercentThreshold),
      low_space_error_size_threshold: cdktf.stringToTerraform(this._lowSpaceErrorSizeThreshold),
      low_space_warning_percent_threshold: cdktf.numberToTerraform(this._lowSpaceWarningPercentThreshold),
      low_space_warning_size_threshold: cdktf.stringToTerraform(this._lowSpaceWarningSizeThreshold),
      name: cdktf.stringToTerraform(this._name),
      network_devices: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkDevices),
      out_of_space_error_percent_threshold: cdktf.numberToTerraform(this._outOfSpaceErrorPercentThreshold),
      out_of_space_error_size_threshold: cdktf.stringToTerraform(this._outOfSpaceErrorSizeThreshold),
      prolonged_outage_behavior: cdktf.stringToTerraform(this._prolongedOutageBehavior),
      prolonged_outage_duration: cdktf.stringToTerraform(this._prolongedOutageDuration),
      system_utilization_monitor_log_directory: cdktf.stringToTerraform(this._systemUtilizationMonitorLogDirectory),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_frequency: {
        value: cdktf.stringToHclTerraform(this._alertFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_frequency: {
        value: cdktf.stringToHclTerraform(this._checkFrequency),
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
      disk_devices: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._diskDevices),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extension_argument: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extensionArgument),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      extension_class: {
        value: cdktf.stringToHclTerraform(this._extensionClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      low_space_error_percent_threshold: {
        value: cdktf.numberToHclTerraform(this._lowSpaceErrorPercentThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      low_space_error_size_threshold: {
        value: cdktf.stringToHclTerraform(this._lowSpaceErrorSizeThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      low_space_warning_percent_threshold: {
        value: cdktf.numberToHclTerraform(this._lowSpaceWarningPercentThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      low_space_warning_size_threshold: {
        value: cdktf.stringToHclTerraform(this._lowSpaceWarningSizeThreshold),
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
      network_devices: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networkDevices),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      out_of_space_error_percent_threshold: {
        value: cdktf.numberToHclTerraform(this._outOfSpaceErrorPercentThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      out_of_space_error_size_threshold: {
        value: cdktf.stringToHclTerraform(this._outOfSpaceErrorSizeThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prolonged_outage_behavior: {
        value: cdktf.stringToHclTerraform(this._prolongedOutageBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prolonged_outage_duration: {
        value: cdktf.stringToHclTerraform(this._prolongedOutageDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_utilization_monitor_log_directory: {
        value: cdktf.stringToHclTerraform(this._systemUtilizationMonitorLogDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
