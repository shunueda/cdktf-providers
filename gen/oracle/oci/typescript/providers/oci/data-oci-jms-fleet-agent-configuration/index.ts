// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_agent_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciJmsFleetAgentConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_agent_configuration#fleet_id DataOciJmsFleetAgentConfiguration#fleet_id}
  */
  readonly fleetId: string;
}
export interface DataOciJmsFleetAgentConfigurationLinuxConfiguration {
}

export function dataOciJmsFleetAgentConfigurationLinuxConfigurationToTerraform(struct?: DataOciJmsFleetAgentConfigurationLinuxConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsFleetAgentConfigurationLinuxConfigurationToHclTerraform(struct?: DataOciJmsFleetAgentConfigurationLinuxConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsFleetAgentConfigurationLinuxConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsFleetAgentConfigurationLinuxConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsFleetAgentConfigurationLinuxConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude_paths - computed: true, optional: false, required: false
  public get excludePaths() {
    return this.getListAttribute('exclude_paths');
  }

  // include_paths - computed: true, optional: false, required: false
  public get includePaths() {
    return this.getListAttribute('include_paths');
  }
}

export class DataOciJmsFleetAgentConfigurationLinuxConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsFleetAgentConfigurationLinuxConfigurationOutputReference {
    return new DataOciJmsFleetAgentConfigurationLinuxConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsFleetAgentConfigurationMacOsConfiguration {
}

export function dataOciJmsFleetAgentConfigurationMacOsConfigurationToTerraform(struct?: DataOciJmsFleetAgentConfigurationMacOsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsFleetAgentConfigurationMacOsConfigurationToHclTerraform(struct?: DataOciJmsFleetAgentConfigurationMacOsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsFleetAgentConfigurationMacOsConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsFleetAgentConfigurationMacOsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsFleetAgentConfigurationMacOsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude_paths - computed: true, optional: false, required: false
  public get excludePaths() {
    return this.getListAttribute('exclude_paths');
  }

  // include_paths - computed: true, optional: false, required: false
  public get includePaths() {
    return this.getListAttribute('include_paths');
  }
}

export class DataOciJmsFleetAgentConfigurationMacOsConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsFleetAgentConfigurationMacOsConfigurationOutputReference {
    return new DataOciJmsFleetAgentConfigurationMacOsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsFleetAgentConfigurationWindowsConfiguration {
}

export function dataOciJmsFleetAgentConfigurationWindowsConfigurationToTerraform(struct?: DataOciJmsFleetAgentConfigurationWindowsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsFleetAgentConfigurationWindowsConfigurationToHclTerraform(struct?: DataOciJmsFleetAgentConfigurationWindowsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsFleetAgentConfigurationWindowsConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsFleetAgentConfigurationWindowsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsFleetAgentConfigurationWindowsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude_paths - computed: true, optional: false, required: false
  public get excludePaths() {
    return this.getListAttribute('exclude_paths');
  }

  // include_paths - computed: true, optional: false, required: false
  public get includePaths() {
    return this.getListAttribute('include_paths');
  }
}

export class DataOciJmsFleetAgentConfigurationWindowsConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsFleetAgentConfigurationWindowsConfigurationOutputReference {
    return new DataOciJmsFleetAgentConfigurationWindowsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_agent_configuration oci_jms_fleet_agent_configuration}
*/
export class DataOciJmsFleetAgentConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_jms_fleet_agent_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciJmsFleetAgentConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciJmsFleetAgentConfiguration to import
  * @param importFromId The id of the existing DataOciJmsFleetAgentConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_agent_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciJmsFleetAgentConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_jms_fleet_agent_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_fleet_agent_configuration oci_jms_fleet_agent_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciJmsFleetAgentConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciJmsFleetAgentConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_jms_fleet_agent_configuration',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fleetId = config.fleetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_polling_interval_in_minutes - computed: true, optional: false, required: false
  public get agentPollingIntervalInMinutes() {
    return this.getNumberAttribute('agent_polling_interval_in_minutes');
  }

  // fleet_id - computed: false, optional: false, required: true
  private _fleetId?: string; 
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
  }
  public set fleetId(value: string) {
    this._fleetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetIdInput() {
    return this._fleetId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_capturing_ip_address_and_fqdn_enabled - computed: true, optional: false, required: false
  public get isCapturingIpAddressAndFqdnEnabled() {
    return this.getBooleanAttribute('is_capturing_ip_address_and_fqdn_enabled');
  }

  // is_collecting_managed_instance_metrics_enabled - computed: true, optional: false, required: false
  public get isCollectingManagedInstanceMetricsEnabled() {
    return this.getBooleanAttribute('is_collecting_managed_instance_metrics_enabled');
  }

  // is_collecting_usernames_enabled - computed: true, optional: false, required: false
  public get isCollectingUsernamesEnabled() {
    return this.getBooleanAttribute('is_collecting_usernames_enabled');
  }

  // is_libraries_scan_enabled - computed: true, optional: false, required: false
  public get isLibrariesScanEnabled() {
    return this.getBooleanAttribute('is_libraries_scan_enabled');
  }

  // java_usage_tracker_processing_frequency_in_minutes - computed: true, optional: false, required: false
  public get javaUsageTrackerProcessingFrequencyInMinutes() {
    return this.getNumberAttribute('java_usage_tracker_processing_frequency_in_minutes');
  }

  // jre_scan_frequency_in_minutes - computed: true, optional: false, required: false
  public get jreScanFrequencyInMinutes() {
    return this.getNumberAttribute('jre_scan_frequency_in_minutes');
  }

  // linux_configuration - computed: true, optional: false, required: false
  private _linuxConfiguration = new DataOciJmsFleetAgentConfigurationLinuxConfigurationList(this, "linux_configuration", false);
  public get linuxConfiguration() {
    return this._linuxConfiguration;
  }

  // mac_os_configuration - computed: true, optional: false, required: false
  private _macOsConfiguration = new DataOciJmsFleetAgentConfigurationMacOsConfigurationList(this, "mac_os_configuration", false);
  public get macOsConfiguration() {
    return this._macOsConfiguration;
  }

  // time_last_modified - computed: true, optional: false, required: false
  public get timeLastModified() {
    return this.getStringAttribute('time_last_modified');
  }

  // windows_configuration - computed: true, optional: false, required: false
  private _windowsConfiguration = new DataOciJmsFleetAgentConfigurationWindowsConfigurationList(this, "windows_configuration", false);
  public get windowsConfiguration() {
    return this._windowsConfiguration;
  }

  // work_request_validity_period_in_days - computed: true, optional: false, required: false
  public get workRequestValidityPeriodInDays() {
    return this.getNumberAttribute('work_request_validity_period_in_days');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fleet_id: cdktf.stringToTerraform(this._fleetId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fleet_id: {
        value: cdktf.stringToHclTerraform(this._fleetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
