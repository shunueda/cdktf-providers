// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MachinePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * In nanoseconds. Minimum value: 10000000000 (10 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#connection_connect_timeout MachinePolicy#connection_connect_timeout}
  */
  readonly connectionConnectTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#connection_retry_count_limit MachinePolicy#connection_retry_count_limit}
  */
  readonly connectionRetryCountLimit?: number;
  /**
  * In nanoseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#connection_retry_sleep_interval MachinePolicy#connection_retry_sleep_interval}
  */
  readonly connectionRetrySleepInterval?: number;
  /**
  * In nanoseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#connection_retry_time_limit MachinePolicy#connection_retry_time_limit}
  */
  readonly connectionRetryTimeLimit?: number;
  /**
  * The description of this machine policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#description MachinePolicy#description}
  */
  readonly description?: string;
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#id MachinePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#name MachinePolicy#name}
  */
  readonly name: string;
  /**
  * In nanoseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#polling_request_queue_timeout MachinePolicy#polling_request_queue_timeout}
  */
  readonly pollingRequestQueueTimeout?: number;
  /**
  * The space ID associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#space_id MachinePolicy#space_id}
  */
  readonly spaceId?: string;
  /**
  * machine_cleanup_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#machine_cleanup_policy MachinePolicy#machine_cleanup_policy}
  */
  readonly machineCleanupPolicy?: MachinePolicyMachineCleanupPolicy;
  /**
  * machine_connectivity_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#machine_connectivity_policy MachinePolicy#machine_connectivity_policy}
  */
  readonly machineConnectivityPolicy?: MachinePolicyMachineConnectivityPolicy;
  /**
  * machine_health_check_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#machine_health_check_policy MachinePolicy#machine_health_check_policy}
  */
  readonly machineHealthCheckPolicy?: MachinePolicyMachineHealthCheckPolicy;
  /**
  * machine_package_cache_retention_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#machine_package_cache_retention_policy MachinePolicy#machine_package_cache_retention_policy}
  */
  readonly machinePackageCacheRetentionPolicy?: MachinePolicyMachinePackageCacheRetentionPolicy;
  /**
  * machine_update_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#machine_update_policy MachinePolicy#machine_update_policy}
  */
  readonly machineUpdatePolicy?: MachinePolicyMachineUpdatePolicy;
}
export interface MachinePolicyMachineCleanupPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#delete_machines_behavior MachinePolicy#delete_machines_behavior}
  */
  readonly deleteMachinesBehavior?: string;
  /**
  * In nanoseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#delete_machines_elapsed_timespan MachinePolicy#delete_machines_elapsed_timespan}
  */
  readonly deleteMachinesElapsedTimespan?: number;
}

export function machinePolicyMachineCleanupPolicyToTerraform(struct?: MachinePolicyMachineCleanupPolicyOutputReference | MachinePolicyMachineCleanupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_machines_behavior: cdktf.stringToTerraform(struct!.deleteMachinesBehavior),
    delete_machines_elapsed_timespan: cdktf.numberToTerraform(struct!.deleteMachinesElapsedTimespan),
  }
}


export function machinePolicyMachineCleanupPolicyToHclTerraform(struct?: MachinePolicyMachineCleanupPolicyOutputReference | MachinePolicyMachineCleanupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_machines_behavior: {
      value: cdktf.stringToHclTerraform(struct!.deleteMachinesBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_machines_elapsed_timespan: {
      value: cdktf.numberToHclTerraform(struct!.deleteMachinesElapsedTimespan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachinePolicyMachineCleanupPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MachinePolicyMachineCleanupPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteMachinesBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteMachinesBehavior = this._deleteMachinesBehavior;
    }
    if (this._deleteMachinesElapsedTimespan !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteMachinesElapsedTimespan = this._deleteMachinesElapsedTimespan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachinePolicyMachineCleanupPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deleteMachinesBehavior = undefined;
      this._deleteMachinesElapsedTimespan = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deleteMachinesBehavior = value.deleteMachinesBehavior;
      this._deleteMachinesElapsedTimespan = value.deleteMachinesElapsedTimespan;
    }
  }

  // delete_machines_behavior - computed: false, optional: true, required: false
  private _deleteMachinesBehavior?: string; 
  public get deleteMachinesBehavior() {
    return this.getStringAttribute('delete_machines_behavior');
  }
  public set deleteMachinesBehavior(value: string) {
    this._deleteMachinesBehavior = value;
  }
  public resetDeleteMachinesBehavior() {
    this._deleteMachinesBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteMachinesBehaviorInput() {
    return this._deleteMachinesBehavior;
  }

  // delete_machines_elapsed_timespan - computed: true, optional: true, required: false
  private _deleteMachinesElapsedTimespan?: number; 
  public get deleteMachinesElapsedTimespan() {
    return this.getNumberAttribute('delete_machines_elapsed_timespan');
  }
  public set deleteMachinesElapsedTimespan(value: number) {
    this._deleteMachinesElapsedTimespan = value;
  }
  public resetDeleteMachinesElapsedTimespan() {
    this._deleteMachinesElapsedTimespan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteMachinesElapsedTimespanInput() {
    return this._deleteMachinesElapsedTimespan;
  }
}
export interface MachinePolicyMachineConnectivityPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#machine_connectivity_behavior MachinePolicy#machine_connectivity_behavior}
  */
  readonly machineConnectivityBehavior?: string;
}

export function machinePolicyMachineConnectivityPolicyToTerraform(struct?: MachinePolicyMachineConnectivityPolicyOutputReference | MachinePolicyMachineConnectivityPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    machine_connectivity_behavior: cdktf.stringToTerraform(struct!.machineConnectivityBehavior),
  }
}


export function machinePolicyMachineConnectivityPolicyToHclTerraform(struct?: MachinePolicyMachineConnectivityPolicyOutputReference | MachinePolicyMachineConnectivityPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    machine_connectivity_behavior: {
      value: cdktf.stringToHclTerraform(struct!.machineConnectivityBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachinePolicyMachineConnectivityPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MachinePolicyMachineConnectivityPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineConnectivityBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineConnectivityBehavior = this._machineConnectivityBehavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachinePolicyMachineConnectivityPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._machineConnectivityBehavior = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._machineConnectivityBehavior = value.machineConnectivityBehavior;
    }
  }

  // machine_connectivity_behavior - computed: false, optional: true, required: false
  private _machineConnectivityBehavior?: string; 
  public get machineConnectivityBehavior() {
    return this.getStringAttribute('machine_connectivity_behavior');
  }
  public set machineConnectivityBehavior(value: string) {
    this._machineConnectivityBehavior = value;
  }
  public resetMachineConnectivityBehavior() {
    this._machineConnectivityBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineConnectivityBehaviorInput() {
    return this._machineConnectivityBehavior;
  }
}
export interface MachinePolicyMachineHealthCheckPolicyBashHealthCheckPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#run_type MachinePolicy#run_type}
  */
  readonly runType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#script_body MachinePolicy#script_body}
  */
  readonly scriptBody?: string;
}

export function machinePolicyMachineHealthCheckPolicyBashHealthCheckPolicyToTerraform(struct?: MachinePolicyMachineHealthCheckPolicyBashHealthCheckPolicyOutputReference | MachinePolicyMachineHealthCheckPolicyBashHealthCheckPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    run_type: cdktf.stringToTerraform(struct!.runType),
    script_body: cdktf.stringToTerraform(struct!.scriptBody),
  }
}


export function machinePolicyMachineHealthCheckPolicyBashHealthCheckPolicyToHclTerraform(struct?: MachinePolicyMachineHealthCheckPolicyBashHealthCheckPolicyOutputReference | MachinePolicyMachineHealthCheckPolicyBashHealthCheckPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    run_type: {
      value: cdktf.stringToHclTerraform(struct!.runType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_body: {
      value: cdktf.stringToHclTerraform(struct!.scriptBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachinePolicyMachineHealthCheckPolicyBashHealthCheckPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MachinePolicyMachineHealthCheckPolicyBashHealthCheckPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._runType !== undefined) {
      hasAnyValues = true;
      internalValueResult.runType = this._runType;
    }
    if (this._scriptBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptBody = this._scriptBody;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachinePolicyMachineHealthCheckPolicyBashHealthCheckPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._runType = undefined;
      this._scriptBody = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._runType = value.runType;
      this._scriptBody = value.scriptBody;
    }
  }

  // run_type - computed: false, optional: true, required: false
  private _runType?: string; 
  public get runType() {
    return this.getStringAttribute('run_type');
  }
  public set runType(value: string) {
    this._runType = value;
  }
  public resetRunType() {
    this._runType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runTypeInput() {
    return this._runType;
  }

  // script_body - computed: false, optional: true, required: false
  private _scriptBody?: string; 
  public get scriptBody() {
    return this.getStringAttribute('script_body');
  }
  public set scriptBody(value: string) {
    this._scriptBody = value;
  }
  public resetScriptBody() {
    this._scriptBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptBodyInput() {
    return this._scriptBody;
  }
}
export interface MachinePolicyMachineHealthCheckPolicyPowershellHealthCheckPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#run_type MachinePolicy#run_type}
  */
  readonly runType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#script_body MachinePolicy#script_body}
  */
  readonly scriptBody?: string;
}

export function machinePolicyMachineHealthCheckPolicyPowershellHealthCheckPolicyToTerraform(struct?: MachinePolicyMachineHealthCheckPolicyPowershellHealthCheckPolicyOutputReference | MachinePolicyMachineHealthCheckPolicyPowershellHealthCheckPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    run_type: cdktf.stringToTerraform(struct!.runType),
    script_body: cdktf.stringToTerraform(struct!.scriptBody),
  }
}


export function machinePolicyMachineHealthCheckPolicyPowershellHealthCheckPolicyToHclTerraform(struct?: MachinePolicyMachineHealthCheckPolicyPowershellHealthCheckPolicyOutputReference | MachinePolicyMachineHealthCheckPolicyPowershellHealthCheckPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    run_type: {
      value: cdktf.stringToHclTerraform(struct!.runType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_body: {
      value: cdktf.stringToHclTerraform(struct!.scriptBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachinePolicyMachineHealthCheckPolicyPowershellHealthCheckPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MachinePolicyMachineHealthCheckPolicyPowershellHealthCheckPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._runType !== undefined) {
      hasAnyValues = true;
      internalValueResult.runType = this._runType;
    }
    if (this._scriptBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptBody = this._scriptBody;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachinePolicyMachineHealthCheckPolicyPowershellHealthCheckPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._runType = undefined;
      this._scriptBody = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._runType = value.runType;
      this._scriptBody = value.scriptBody;
    }
  }

  // run_type - computed: false, optional: true, required: false
  private _runType?: string; 
  public get runType() {
    return this.getStringAttribute('run_type');
  }
  public set runType(value: string) {
    this._runType = value;
  }
  public resetRunType() {
    this._runType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runTypeInput() {
    return this._runType;
  }

  // script_body - computed: false, optional: true, required: false
  private _scriptBody?: string; 
  public get scriptBody() {
    return this.getStringAttribute('script_body');
  }
  public set scriptBody(value: string) {
    this._scriptBody = value;
  }
  public resetScriptBody() {
    this._scriptBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptBodyInput() {
    return this._scriptBody;
  }
}
export interface MachinePolicyMachineHealthCheckPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#health_check_cron MachinePolicy#health_check_cron}
  */
  readonly healthCheckCron?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#health_check_cron_timezone MachinePolicy#health_check_cron_timezone}
  */
  readonly healthCheckCronTimezone?: string;
  /**
  * In nanoseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#health_check_interval MachinePolicy#health_check_interval}
  */
  readonly healthCheckInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#health_check_type MachinePolicy#health_check_type}
  */
  readonly healthCheckType?: string;
  /**
  * bash_health_check_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#bash_health_check_policy MachinePolicy#bash_health_check_policy}
  */
  readonly bashHealthCheckPolicy: MachinePolicyMachineHealthCheckPolicyBashHealthCheckPolicy;
  /**
  * powershell_health_check_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#powershell_health_check_policy MachinePolicy#powershell_health_check_policy}
  */
  readonly powershellHealthCheckPolicy: MachinePolicyMachineHealthCheckPolicyPowershellHealthCheckPolicy;
}

export function machinePolicyMachineHealthCheckPolicyToTerraform(struct?: MachinePolicyMachineHealthCheckPolicyOutputReference | MachinePolicyMachineHealthCheckPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check_cron: cdktf.stringToTerraform(struct!.healthCheckCron),
    health_check_cron_timezone: cdktf.stringToTerraform(struct!.healthCheckCronTimezone),
    health_check_interval: cdktf.numberToTerraform(struct!.healthCheckInterval),
    health_check_type: cdktf.stringToTerraform(struct!.healthCheckType),
    bash_health_check_policy: machinePolicyMachineHealthCheckPolicyBashHealthCheckPolicyToTerraform(struct!.bashHealthCheckPolicy),
    powershell_health_check_policy: machinePolicyMachineHealthCheckPolicyPowershellHealthCheckPolicyToTerraform(struct!.powershellHealthCheckPolicy),
  }
}


export function machinePolicyMachineHealthCheckPolicyToHclTerraform(struct?: MachinePolicyMachineHealthCheckPolicyOutputReference | MachinePolicyMachineHealthCheckPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check_cron: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckCron),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_cron_timezone: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckCronTimezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_interval: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_type: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bash_health_check_policy: {
      value: machinePolicyMachineHealthCheckPolicyBashHealthCheckPolicyToHclTerraform(struct!.bashHealthCheckPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "MachinePolicyMachineHealthCheckPolicyBashHealthCheckPolicyList",
    },
    powershell_health_check_policy: {
      value: machinePolicyMachineHealthCheckPolicyPowershellHealthCheckPolicyToHclTerraform(struct!.powershellHealthCheckPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "MachinePolicyMachineHealthCheckPolicyPowershellHealthCheckPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachinePolicyMachineHealthCheckPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MachinePolicyMachineHealthCheckPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheckCron !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckCron = this._healthCheckCron;
    }
    if (this._healthCheckCronTimezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckCronTimezone = this._healthCheckCronTimezone;
    }
    if (this._healthCheckInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckInterval = this._healthCheckInterval;
    }
    if (this._healthCheckType !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckType = this._healthCheckType;
    }
    if (this._bashHealthCheckPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bashHealthCheckPolicy = this._bashHealthCheckPolicy?.internalValue;
    }
    if (this._powershellHealthCheckPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.powershellHealthCheckPolicy = this._powershellHealthCheckPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachinePolicyMachineHealthCheckPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthCheckCron = undefined;
      this._healthCheckCronTimezone = undefined;
      this._healthCheckInterval = undefined;
      this._healthCheckType = undefined;
      this._bashHealthCheckPolicy.internalValue = undefined;
      this._powershellHealthCheckPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthCheckCron = value.healthCheckCron;
      this._healthCheckCronTimezone = value.healthCheckCronTimezone;
      this._healthCheckInterval = value.healthCheckInterval;
      this._healthCheckType = value.healthCheckType;
      this._bashHealthCheckPolicy.internalValue = value.bashHealthCheckPolicy;
      this._powershellHealthCheckPolicy.internalValue = value.powershellHealthCheckPolicy;
    }
  }

  // health_check_cron - computed: false, optional: true, required: false
  private _healthCheckCron?: string; 
  public get healthCheckCron() {
    return this.getStringAttribute('health_check_cron');
  }
  public set healthCheckCron(value: string) {
    this._healthCheckCron = value;
  }
  public resetHealthCheckCron() {
    this._healthCheckCron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckCronInput() {
    return this._healthCheckCron;
  }

  // health_check_cron_timezone - computed: false, optional: true, required: false
  private _healthCheckCronTimezone?: string; 
  public get healthCheckCronTimezone() {
    return this.getStringAttribute('health_check_cron_timezone');
  }
  public set healthCheckCronTimezone(value: string) {
    this._healthCheckCronTimezone = value;
  }
  public resetHealthCheckCronTimezone() {
    this._healthCheckCronTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckCronTimezoneInput() {
    return this._healthCheckCronTimezone;
  }

  // health_check_interval - computed: false, optional: true, required: false
  private _healthCheckInterval?: number; 
  public get healthCheckInterval() {
    return this.getNumberAttribute('health_check_interval');
  }
  public set healthCheckInterval(value: number) {
    this._healthCheckInterval = value;
  }
  public resetHealthCheckInterval() {
    this._healthCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckIntervalInput() {
    return this._healthCheckInterval;
  }

  // health_check_type - computed: false, optional: true, required: false
  private _healthCheckType?: string; 
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }
  public set healthCheckType(value: string) {
    this._healthCheckType = value;
  }
  public resetHealthCheckType() {
    this._healthCheckType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTypeInput() {
    return this._healthCheckType;
  }

  // bash_health_check_policy - computed: false, optional: false, required: true
  private _bashHealthCheckPolicy = new MachinePolicyMachineHealthCheckPolicyBashHealthCheckPolicyOutputReference(this, "bash_health_check_policy");
  public get bashHealthCheckPolicy() {
    return this._bashHealthCheckPolicy;
  }
  public putBashHealthCheckPolicy(value: MachinePolicyMachineHealthCheckPolicyBashHealthCheckPolicy) {
    this._bashHealthCheckPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bashHealthCheckPolicyInput() {
    return this._bashHealthCheckPolicy.internalValue;
  }

  // powershell_health_check_policy - computed: false, optional: false, required: true
  private _powershellHealthCheckPolicy = new MachinePolicyMachineHealthCheckPolicyPowershellHealthCheckPolicyOutputReference(this, "powershell_health_check_policy");
  public get powershellHealthCheckPolicy() {
    return this._powershellHealthCheckPolicy;
  }
  public putPowershellHealthCheckPolicy(value: MachinePolicyMachineHealthCheckPolicyPowershellHealthCheckPolicy) {
    this._powershellHealthCheckPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get powershellHealthCheckPolicyInput() {
    return this._powershellHealthCheckPolicy.internalValue;
  }
}
export interface MachinePolicyMachinePackageCacheRetentionPolicy {
  /**
  * The method of counting packages when applying the Quantities strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#package_unit MachinePolicy#package_unit}
  */
  readonly packageUnit?: string;
  /**
  * The number of packages to keep.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#quantity_of_packages_to_keep MachinePolicy#quantity_of_packages_to_keep}
  */
  readonly quantityOfPackagesToKeep?: number;
  /**
  * The number of package versions to keep.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#quantity_of_versions_to_keep MachinePolicy#quantity_of_versions_to_keep}
  */
  readonly quantityOfVersionsToKeep?: number;
  /**
  * The behaviour of the cache retention policy. Valid values are `Default` (let Octopus decide), `Quantities` (keep by a specified number of packages and versions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#strategy MachinePolicy#strategy}
  */
  readonly strategy: string;
  /**
  * The method of counting package versions when applying the Quantities strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#version_unit MachinePolicy#version_unit}
  */
  readonly versionUnit?: string;
}

export function machinePolicyMachinePackageCacheRetentionPolicyToTerraform(struct?: MachinePolicyMachinePackageCacheRetentionPolicyOutputReference | MachinePolicyMachinePackageCacheRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package_unit: cdktf.stringToTerraform(struct!.packageUnit),
    quantity_of_packages_to_keep: cdktf.numberToTerraform(struct!.quantityOfPackagesToKeep),
    quantity_of_versions_to_keep: cdktf.numberToTerraform(struct!.quantityOfVersionsToKeep),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    version_unit: cdktf.stringToTerraform(struct!.versionUnit),
  }
}


export function machinePolicyMachinePackageCacheRetentionPolicyToHclTerraform(struct?: MachinePolicyMachinePackageCacheRetentionPolicyOutputReference | MachinePolicyMachinePackageCacheRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    package_unit: {
      value: cdktf.stringToHclTerraform(struct!.packageUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quantity_of_packages_to_keep: {
      value: cdktf.numberToHclTerraform(struct!.quantityOfPackagesToKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quantity_of_versions_to_keep: {
      value: cdktf.numberToHclTerraform(struct!.quantityOfVersionsToKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_unit: {
      value: cdktf.stringToHclTerraform(struct!.versionUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachinePolicyMachinePackageCacheRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MachinePolicyMachinePackageCacheRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._packageUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageUnit = this._packageUnit;
    }
    if (this._quantityOfPackagesToKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantityOfPackagesToKeep = this._quantityOfPackagesToKeep;
    }
    if (this._quantityOfVersionsToKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantityOfVersionsToKeep = this._quantityOfVersionsToKeep;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._versionUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionUnit = this._versionUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachinePolicyMachinePackageCacheRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._packageUnit = undefined;
      this._quantityOfPackagesToKeep = undefined;
      this._quantityOfVersionsToKeep = undefined;
      this._strategy = undefined;
      this._versionUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._packageUnit = value.packageUnit;
      this._quantityOfPackagesToKeep = value.quantityOfPackagesToKeep;
      this._quantityOfVersionsToKeep = value.quantityOfVersionsToKeep;
      this._strategy = value.strategy;
      this._versionUnit = value.versionUnit;
    }
  }

  // package_unit - computed: false, optional: true, required: false
  private _packageUnit?: string; 
  public get packageUnit() {
    return this.getStringAttribute('package_unit');
  }
  public set packageUnit(value: string) {
    this._packageUnit = value;
  }
  public resetPackageUnit() {
    this._packageUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageUnitInput() {
    return this._packageUnit;
  }

  // quantity_of_packages_to_keep - computed: false, optional: true, required: false
  private _quantityOfPackagesToKeep?: number; 
  public get quantityOfPackagesToKeep() {
    return this.getNumberAttribute('quantity_of_packages_to_keep');
  }
  public set quantityOfPackagesToKeep(value: number) {
    this._quantityOfPackagesToKeep = value;
  }
  public resetQuantityOfPackagesToKeep() {
    this._quantityOfPackagesToKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityOfPackagesToKeepInput() {
    return this._quantityOfPackagesToKeep;
  }

  // quantity_of_versions_to_keep - computed: false, optional: true, required: false
  private _quantityOfVersionsToKeep?: number; 
  public get quantityOfVersionsToKeep() {
    return this.getNumberAttribute('quantity_of_versions_to_keep');
  }
  public set quantityOfVersionsToKeep(value: number) {
    this._quantityOfVersionsToKeep = value;
  }
  public resetQuantityOfVersionsToKeep() {
    this._quantityOfVersionsToKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityOfVersionsToKeepInput() {
    return this._quantityOfVersionsToKeep;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // version_unit - computed: false, optional: true, required: false
  private _versionUnit?: string; 
  public get versionUnit() {
    return this.getStringAttribute('version_unit');
  }
  public set versionUnit(value: string) {
    this._versionUnit = value;
  }
  public resetVersionUnit() {
    this._versionUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionUnitInput() {
    return this._versionUnit;
  }
}
export interface MachinePolicyMachineUpdatePolicy {
  /**
  * The behaviour of how Calamari is updated. Valid values are `UpdateAlways`, `UpdateOnDeployment` and `UpdateOnNewMachine`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#calamari_update_behavior MachinePolicy#calamari_update_behavior}
  */
  readonly calamariUpdateBehavior?: string;
  /**
  * The behaviour of how Kubernetes agent machines are updated. Valid values are `NeverUpdate` and `Update`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#kubernetes_agent_update_behavior MachinePolicy#kubernetes_agent_update_behavior}
  */
  readonly kubernetesAgentUpdateBehavior?: string;
  /**
  * The Account ID to perform any Tentacle updates under.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#tentacle_update_account_id MachinePolicy#tentacle_update_account_id}
  */
  readonly tentacleUpdateAccountId?: string;
  /**
  * The behaviour of how Tentacle machines are updated. Valid values are `NeverUpdate` and `Update`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#tentacle_update_behavior MachinePolicy#tentacle_update_behavior}
  */
  readonly tentacleUpdateBehavior?: string;
}

export function machinePolicyMachineUpdatePolicyToTerraform(struct?: MachinePolicyMachineUpdatePolicyOutputReference | MachinePolicyMachineUpdatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calamari_update_behavior: cdktf.stringToTerraform(struct!.calamariUpdateBehavior),
    kubernetes_agent_update_behavior: cdktf.stringToTerraform(struct!.kubernetesAgentUpdateBehavior),
    tentacle_update_account_id: cdktf.stringToTerraform(struct!.tentacleUpdateAccountId),
    tentacle_update_behavior: cdktf.stringToTerraform(struct!.tentacleUpdateBehavior),
  }
}


export function machinePolicyMachineUpdatePolicyToHclTerraform(struct?: MachinePolicyMachineUpdatePolicyOutputReference | MachinePolicyMachineUpdatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    calamari_update_behavior: {
      value: cdktf.stringToHclTerraform(struct!.calamariUpdateBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_agent_update_behavior: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesAgentUpdateBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tentacle_update_account_id: {
      value: cdktf.stringToHclTerraform(struct!.tentacleUpdateAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tentacle_update_behavior: {
      value: cdktf.stringToHclTerraform(struct!.tentacleUpdateBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachinePolicyMachineUpdatePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MachinePolicyMachineUpdatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calamariUpdateBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.calamariUpdateBehavior = this._calamariUpdateBehavior;
    }
    if (this._kubernetesAgentUpdateBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesAgentUpdateBehavior = this._kubernetesAgentUpdateBehavior;
    }
    if (this._tentacleUpdateAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tentacleUpdateAccountId = this._tentacleUpdateAccountId;
    }
    if (this._tentacleUpdateBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.tentacleUpdateBehavior = this._tentacleUpdateBehavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachinePolicyMachineUpdatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._calamariUpdateBehavior = undefined;
      this._kubernetesAgentUpdateBehavior = undefined;
      this._tentacleUpdateAccountId = undefined;
      this._tentacleUpdateBehavior = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._calamariUpdateBehavior = value.calamariUpdateBehavior;
      this._kubernetesAgentUpdateBehavior = value.kubernetesAgentUpdateBehavior;
      this._tentacleUpdateAccountId = value.tentacleUpdateAccountId;
      this._tentacleUpdateBehavior = value.tentacleUpdateBehavior;
    }
  }

  // calamari_update_behavior - computed: false, optional: true, required: false
  private _calamariUpdateBehavior?: string; 
  public get calamariUpdateBehavior() {
    return this.getStringAttribute('calamari_update_behavior');
  }
  public set calamariUpdateBehavior(value: string) {
    this._calamariUpdateBehavior = value;
  }
  public resetCalamariUpdateBehavior() {
    this._calamariUpdateBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calamariUpdateBehaviorInput() {
    return this._calamariUpdateBehavior;
  }

  // kubernetes_agent_update_behavior - computed: false, optional: true, required: false
  private _kubernetesAgentUpdateBehavior?: string; 
  public get kubernetesAgentUpdateBehavior() {
    return this.getStringAttribute('kubernetes_agent_update_behavior');
  }
  public set kubernetesAgentUpdateBehavior(value: string) {
    this._kubernetesAgentUpdateBehavior = value;
  }
  public resetKubernetesAgentUpdateBehavior() {
    this._kubernetesAgentUpdateBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesAgentUpdateBehaviorInput() {
    return this._kubernetesAgentUpdateBehavior;
  }

  // tentacle_update_account_id - computed: false, optional: true, required: false
  private _tentacleUpdateAccountId?: string; 
  public get tentacleUpdateAccountId() {
    return this.getStringAttribute('tentacle_update_account_id');
  }
  public set tentacleUpdateAccountId(value: string) {
    this._tentacleUpdateAccountId = value;
  }
  public resetTentacleUpdateAccountId() {
    this._tentacleUpdateAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tentacleUpdateAccountIdInput() {
    return this._tentacleUpdateAccountId;
  }

  // tentacle_update_behavior - computed: false, optional: true, required: false
  private _tentacleUpdateBehavior?: string; 
  public get tentacleUpdateBehavior() {
    return this.getStringAttribute('tentacle_update_behavior');
  }
  public set tentacleUpdateBehavior(value: string) {
    this._tentacleUpdateBehavior = value;
  }
  public resetTentacleUpdateBehavior() {
    this._tentacleUpdateBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tentacleUpdateBehaviorInput() {
    return this._tentacleUpdateBehavior;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy octopusdeploy_machine_policy}
*/
export class MachinePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_machine_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MachinePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MachinePolicy to import
  * @param importFromId The id of the existing MachinePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MachinePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_machine_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/machine_policy octopusdeploy_machine_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MachinePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: MachinePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_machine_policy',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.6.0',
        providerVersionConstraint: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionConnectTimeout = config.connectionConnectTimeout;
    this._connectionRetryCountLimit = config.connectionRetryCountLimit;
    this._connectionRetrySleepInterval = config.connectionRetrySleepInterval;
    this._connectionRetryTimeLimit = config.connectionRetryTimeLimit;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._pollingRequestQueueTimeout = config.pollingRequestQueueTimeout;
    this._spaceId = config.spaceId;
    this._machineCleanupPolicy.internalValue = config.machineCleanupPolicy;
    this._machineConnectivityPolicy.internalValue = config.machineConnectivityPolicy;
    this._machineHealthCheckPolicy.internalValue = config.machineHealthCheckPolicy;
    this._machinePackageCacheRetentionPolicy.internalValue = config.machinePackageCacheRetentionPolicy;
    this._machineUpdatePolicy.internalValue = config.machineUpdatePolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_connect_timeout - computed: false, optional: true, required: false
  private _connectionConnectTimeout?: number; 
  public get connectionConnectTimeout() {
    return this.getNumberAttribute('connection_connect_timeout');
  }
  public set connectionConnectTimeout(value: number) {
    this._connectionConnectTimeout = value;
  }
  public resetConnectionConnectTimeout() {
    this._connectionConnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionConnectTimeoutInput() {
    return this._connectionConnectTimeout;
  }

  // connection_retry_count_limit - computed: false, optional: true, required: false
  private _connectionRetryCountLimit?: number; 
  public get connectionRetryCountLimit() {
    return this.getNumberAttribute('connection_retry_count_limit');
  }
  public set connectionRetryCountLimit(value: number) {
    this._connectionRetryCountLimit = value;
  }
  public resetConnectionRetryCountLimit() {
    this._connectionRetryCountLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRetryCountLimitInput() {
    return this._connectionRetryCountLimit;
  }

  // connection_retry_sleep_interval - computed: false, optional: true, required: false
  private _connectionRetrySleepInterval?: number; 
  public get connectionRetrySleepInterval() {
    return this.getNumberAttribute('connection_retry_sleep_interval');
  }
  public set connectionRetrySleepInterval(value: number) {
    this._connectionRetrySleepInterval = value;
  }
  public resetConnectionRetrySleepInterval() {
    this._connectionRetrySleepInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRetrySleepIntervalInput() {
    return this._connectionRetrySleepInterval;
  }

  // connection_retry_time_limit - computed: false, optional: true, required: false
  private _connectionRetryTimeLimit?: number; 
  public get connectionRetryTimeLimit() {
    return this.getNumberAttribute('connection_retry_time_limit');
  }
  public set connectionRetryTimeLimit(value: number) {
    this._connectionRetryTimeLimit = value;
  }
  public resetConnectionRetryTimeLimit() {
    this._connectionRetryTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRetryTimeLimitInput() {
    return this._connectionRetryTimeLimit;
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

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
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

  // polling_request_queue_timeout - computed: false, optional: true, required: false
  private _pollingRequestQueueTimeout?: number; 
  public get pollingRequestQueueTimeout() {
    return this.getNumberAttribute('polling_request_queue_timeout');
  }
  public set pollingRequestQueueTimeout(value: number) {
    this._pollingRequestQueueTimeout = value;
  }
  public resetPollingRequestQueueTimeout() {
    this._pollingRequestQueueTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingRequestQueueTimeoutInput() {
    return this._pollingRequestQueueTimeout;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // machine_cleanup_policy - computed: false, optional: true, required: false
  private _machineCleanupPolicy = new MachinePolicyMachineCleanupPolicyOutputReference(this, "machine_cleanup_policy");
  public get machineCleanupPolicy() {
    return this._machineCleanupPolicy;
  }
  public putMachineCleanupPolicy(value: MachinePolicyMachineCleanupPolicy) {
    this._machineCleanupPolicy.internalValue = value;
  }
  public resetMachineCleanupPolicy() {
    this._machineCleanupPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineCleanupPolicyInput() {
    return this._machineCleanupPolicy.internalValue;
  }

  // machine_connectivity_policy - computed: false, optional: true, required: false
  private _machineConnectivityPolicy = new MachinePolicyMachineConnectivityPolicyOutputReference(this, "machine_connectivity_policy");
  public get machineConnectivityPolicy() {
    return this._machineConnectivityPolicy;
  }
  public putMachineConnectivityPolicy(value: MachinePolicyMachineConnectivityPolicy) {
    this._machineConnectivityPolicy.internalValue = value;
  }
  public resetMachineConnectivityPolicy() {
    this._machineConnectivityPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineConnectivityPolicyInput() {
    return this._machineConnectivityPolicy.internalValue;
  }

  // machine_health_check_policy - computed: false, optional: true, required: false
  private _machineHealthCheckPolicy = new MachinePolicyMachineHealthCheckPolicyOutputReference(this, "machine_health_check_policy");
  public get machineHealthCheckPolicy() {
    return this._machineHealthCheckPolicy;
  }
  public putMachineHealthCheckPolicy(value: MachinePolicyMachineHealthCheckPolicy) {
    this._machineHealthCheckPolicy.internalValue = value;
  }
  public resetMachineHealthCheckPolicy() {
    this._machineHealthCheckPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineHealthCheckPolicyInput() {
    return this._machineHealthCheckPolicy.internalValue;
  }

  // machine_package_cache_retention_policy - computed: false, optional: true, required: false
  private _machinePackageCacheRetentionPolicy = new MachinePolicyMachinePackageCacheRetentionPolicyOutputReference(this, "machine_package_cache_retention_policy");
  public get machinePackageCacheRetentionPolicy() {
    return this._machinePackageCacheRetentionPolicy;
  }
  public putMachinePackageCacheRetentionPolicy(value: MachinePolicyMachinePackageCacheRetentionPolicy) {
    this._machinePackageCacheRetentionPolicy.internalValue = value;
  }
  public resetMachinePackageCacheRetentionPolicy() {
    this._machinePackageCacheRetentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machinePackageCacheRetentionPolicyInput() {
    return this._machinePackageCacheRetentionPolicy.internalValue;
  }

  // machine_update_policy - computed: false, optional: true, required: false
  private _machineUpdatePolicy = new MachinePolicyMachineUpdatePolicyOutputReference(this, "machine_update_policy");
  public get machineUpdatePolicy() {
    return this._machineUpdatePolicy;
  }
  public putMachineUpdatePolicy(value: MachinePolicyMachineUpdatePolicy) {
    this._machineUpdatePolicy.internalValue = value;
  }
  public resetMachineUpdatePolicy() {
    this._machineUpdatePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineUpdatePolicyInput() {
    return this._machineUpdatePolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_connect_timeout: cdktf.numberToTerraform(this._connectionConnectTimeout),
      connection_retry_count_limit: cdktf.numberToTerraform(this._connectionRetryCountLimit),
      connection_retry_sleep_interval: cdktf.numberToTerraform(this._connectionRetrySleepInterval),
      connection_retry_time_limit: cdktf.numberToTerraform(this._connectionRetryTimeLimit),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      polling_request_queue_timeout: cdktf.numberToTerraform(this._pollingRequestQueueTimeout),
      space_id: cdktf.stringToTerraform(this._spaceId),
      machine_cleanup_policy: machinePolicyMachineCleanupPolicyToTerraform(this._machineCleanupPolicy.internalValue),
      machine_connectivity_policy: machinePolicyMachineConnectivityPolicyToTerraform(this._machineConnectivityPolicy.internalValue),
      machine_health_check_policy: machinePolicyMachineHealthCheckPolicyToTerraform(this._machineHealthCheckPolicy.internalValue),
      machine_package_cache_retention_policy: machinePolicyMachinePackageCacheRetentionPolicyToTerraform(this._machinePackageCacheRetentionPolicy.internalValue),
      machine_update_policy: machinePolicyMachineUpdatePolicyToTerraform(this._machineUpdatePolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_connect_timeout: {
        value: cdktf.numberToHclTerraform(this._connectionConnectTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connection_retry_count_limit: {
        value: cdktf.numberToHclTerraform(this._connectionRetryCountLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connection_retry_sleep_interval: {
        value: cdktf.numberToHclTerraform(this._connectionRetrySleepInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connection_retry_time_limit: {
        value: cdktf.numberToHclTerraform(this._connectionRetryTimeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      polling_request_queue_timeout: {
        value: cdktf.numberToHclTerraform(this._pollingRequestQueueTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine_cleanup_policy: {
        value: machinePolicyMachineCleanupPolicyToHclTerraform(this._machineCleanupPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MachinePolicyMachineCleanupPolicyList",
      },
      machine_connectivity_policy: {
        value: machinePolicyMachineConnectivityPolicyToHclTerraform(this._machineConnectivityPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MachinePolicyMachineConnectivityPolicyList",
      },
      machine_health_check_policy: {
        value: machinePolicyMachineHealthCheckPolicyToHclTerraform(this._machineHealthCheckPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MachinePolicyMachineHealthCheckPolicyList",
      },
      machine_package_cache_retention_policy: {
        value: machinePolicyMachinePackageCacheRetentionPolicyToHclTerraform(this._machinePackageCacheRetentionPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MachinePolicyMachinePackageCacheRetentionPolicyList",
      },
      machine_update_policy: {
        value: machinePolicyMachineUpdatePolicyToHclTerraform(this._machineUpdatePolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MachinePolicyMachineUpdatePolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
