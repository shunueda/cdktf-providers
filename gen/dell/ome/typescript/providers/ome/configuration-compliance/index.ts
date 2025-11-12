// https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/configuration_compliance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigurationComplianceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Id of the Baseline. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/configuration_compliance#baseline_id ConfigurationCompliance#baseline_id}
  */
  readonly baselineId?: number;
  /**
  * Name of the Baseline. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/configuration_compliance#baseline_name ConfigurationCompliance#baseline_name}
  */
  readonly baselineName?: string;
  /**
  * Cron to schedule the remediation task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/configuration_compliance#cron ConfigurationCompliance#cron}
  */
  readonly cron?: string;
  /**
  * Number of times the job has to be polled to get the final status of the resource. Default value is `30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/configuration_compliance#job_retry_count ConfigurationCompliance#job_retry_count}
  */
  readonly jobRetryCount?: number;
  /**
  * Provides options to schedule the remediation task immediately, or at a specified time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/configuration_compliance#run_later ConfigurationCompliance#run_later}
  */
  readonly runLater?: boolean | cdktf.IResolvable;
  /**
  * Sleep time interval for job polling in seconds. Default value is `20`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/configuration_compliance#sleep_interval ConfigurationCompliance#sleep_interval}
  */
  readonly sleepInterval?: number;
  /**
  * Target devices to be remediated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/configuration_compliance#target_devices ConfigurationCompliance#target_devices}
  */
  readonly targetDevices: ConfigurationComplianceTargetDevices[] | cdktf.IResolvable;
}
export interface ConfigurationComplianceTargetDevices {
  /**
  * End compliance status of the target device, used to check the drifts in the compliance status. Valid values are `Compliant`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/configuration_compliance#compliance_status ConfigurationCompliance#compliance_status}
  */
  readonly complianceStatus: string;
  /**
  * Target device servicetag to be remediated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/configuration_compliance#device_service_tag ConfigurationCompliance#device_service_tag}
  */
  readonly deviceServiceTag: string;
}

export function configurationComplianceTargetDevicesToTerraform(struct?: ConfigurationComplianceTargetDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compliance_status: cdktf.stringToTerraform(struct!.complianceStatus),
    device_service_tag: cdktf.stringToTerraform(struct!.deviceServiceTag),
  }
}


export function configurationComplianceTargetDevicesToHclTerraform(struct?: ConfigurationComplianceTargetDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compliance_status: {
      value: cdktf.stringToHclTerraform(struct!.complianceStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_service_tag: {
      value: cdktf.stringToHclTerraform(struct!.deviceServiceTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigurationComplianceTargetDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigurationComplianceTargetDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._complianceStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceStatus = this._complianceStatus;
    }
    if (this._deviceServiceTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceServiceTag = this._deviceServiceTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigurationComplianceTargetDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._complianceStatus = undefined;
      this._deviceServiceTag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._complianceStatus = value.complianceStatus;
      this._deviceServiceTag = value.deviceServiceTag;
    }
  }

  // compliance_status - computed: false, optional: false, required: true
  private _complianceStatus?: string; 
  public get complianceStatus() {
    return this.getStringAttribute('compliance_status');
  }
  public set complianceStatus(value: string) {
    this._complianceStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceStatusInput() {
    return this._complianceStatus;
  }

  // device_service_tag - computed: false, optional: false, required: true
  private _deviceServiceTag?: string; 
  public get deviceServiceTag() {
    return this.getStringAttribute('device_service_tag');
  }
  public set deviceServiceTag(value: string) {
    this._deviceServiceTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceServiceTagInput() {
    return this._deviceServiceTag;
  }
}

export class ConfigurationComplianceTargetDevicesList extends cdktf.ComplexList {
  public internalValue? : ConfigurationComplianceTargetDevices[] | cdktf.IResolvable

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
  public get(index: number): ConfigurationComplianceTargetDevicesOutputReference {
    return new ConfigurationComplianceTargetDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/configuration_compliance ome_configuration_compliance}
*/
export class ConfigurationCompliance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ome_configuration_compliance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigurationCompliance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigurationCompliance to import
  * @param importFromId The id of the existing ConfigurationCompliance that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/configuration_compliance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigurationCompliance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ome_configuration_compliance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/configuration_compliance ome_configuration_compliance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigurationComplianceConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigurationComplianceConfig) {
    super(scope, id, {
      terraformResourceType: 'ome_configuration_compliance',
      terraformGeneratorMetadata: {
        providerName: 'ome',
        providerVersion: '1.2.3',
        providerVersionConstraint: '1.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baselineId = config.baselineId;
    this._baselineName = config.baselineName;
    this._cron = config.cron;
    this._jobRetryCount = config.jobRetryCount;
    this._runLater = config.runLater;
    this._sleepInterval = config.sleepInterval;
    this._targetDevices.internalValue = config.targetDevices;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // baseline_id - computed: true, optional: true, required: false
  private _baselineId?: number; 
  public get baselineId() {
    return this.getNumberAttribute('baseline_id');
  }
  public set baselineId(value: number) {
    this._baselineId = value;
  }
  public resetBaselineId() {
    this._baselineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineIdInput() {
    return this._baselineId;
  }

  // baseline_name - computed: true, optional: true, required: false
  private _baselineName?: string; 
  public get baselineName() {
    return this.getStringAttribute('baseline_name');
  }
  public set baselineName(value: string) {
    this._baselineName = value;
  }
  public resetBaselineName() {
    this._baselineName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineNameInput() {
    return this._baselineName;
  }

  // cron - computed: false, optional: true, required: false
  private _cron?: string; 
  public get cron() {
    return this.getStringAttribute('cron');
  }
  public set cron(value: string) {
    this._cron = value;
  }
  public resetCron() {
    this._cron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_retry_count - computed: true, optional: true, required: false
  private _jobRetryCount?: number; 
  public get jobRetryCount() {
    return this.getNumberAttribute('job_retry_count');
  }
  public set jobRetryCount(value: number) {
    this._jobRetryCount = value;
  }
  public resetJobRetryCount() {
    this._jobRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobRetryCountInput() {
    return this._jobRetryCount;
  }

  // run_later - computed: false, optional: true, required: false
  private _runLater?: boolean | cdktf.IResolvable; 
  public get runLater() {
    return this.getBooleanAttribute('run_later');
  }
  public set runLater(value: boolean | cdktf.IResolvable) {
    this._runLater = value;
  }
  public resetRunLater() {
    this._runLater = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runLaterInput() {
    return this._runLater;
  }

  // sleep_interval - computed: true, optional: true, required: false
  private _sleepInterval?: number; 
  public get sleepInterval() {
    return this.getNumberAttribute('sleep_interval');
  }
  public set sleepInterval(value: number) {
    this._sleepInterval = value;
  }
  public resetSleepInterval() {
    this._sleepInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleepIntervalInput() {
    return this._sleepInterval;
  }

  // target_devices - computed: false, optional: false, required: true
  private _targetDevices = new ConfigurationComplianceTargetDevicesList(this, "target_devices", true);
  public get targetDevices() {
    return this._targetDevices;
  }
  public putTargetDevices(value: ConfigurationComplianceTargetDevices[] | cdktf.IResolvable) {
    this._targetDevices.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDevicesInput() {
    return this._targetDevices.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      baseline_id: cdktf.numberToTerraform(this._baselineId),
      baseline_name: cdktf.stringToTerraform(this._baselineName),
      cron: cdktf.stringToTerraform(this._cron),
      job_retry_count: cdktf.numberToTerraform(this._jobRetryCount),
      run_later: cdktf.booleanToTerraform(this._runLater),
      sleep_interval: cdktf.numberToTerraform(this._sleepInterval),
      target_devices: cdktf.listMapper(configurationComplianceTargetDevicesToTerraform, false)(this._targetDevices.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      baseline_id: {
        value: cdktf.numberToHclTerraform(this._baselineId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      baseline_name: {
        value: cdktf.stringToHclTerraform(this._baselineName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cron: {
        value: cdktf.stringToHclTerraform(this._cron),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_retry_count: {
        value: cdktf.numberToHclTerraform(this._jobRetryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      run_later: {
        value: cdktf.booleanToHclTerraform(this._runLater),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sleep_interval: {
        value: cdktf.numberToHclTerraform(this._sleepInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target_devices: {
        value: cdktf.listMapperHcl(configurationComplianceTargetDevicesToHclTerraform, false)(this._targetDevices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConfigurationComplianceTargetDevicesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
