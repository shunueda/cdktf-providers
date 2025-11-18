// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs/resources/it_automation_default_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ItAutomationDefaultPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Maximum number of hosts that can transfer files simultaneously (1-5000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs/resources/it_automation_default_policy#concurrent_host_file_transfer_limit ItAutomationDefaultPolicy#concurrent_host_file_transfer_limit}
  */
  readonly concurrentHostFileTransferLimit: number;
  /**
  * Maximum number of hosts that can run operations simultaneously (1-100000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs/resources/it_automation_default_policy#concurrent_host_limit ItAutomationDefaultPolicy#concurrent_host_limit}
  */
  readonly concurrentHostLimit: number;
  /**
  * Maximum number of tasks that can run in parallel (1-5).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs/resources/it_automation_default_policy#concurrent_task_limit ItAutomationDefaultPolicy#concurrent_task_limit}
  */
  readonly concurrentTaskLimit: number;
  /**
  * Sets priority for CPU scheduling (Mac only). Required for Mac platform, cannot be used for Windows or Linux.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs/resources/it_automation_default_policy#cpu_scheduling_priority ItAutomationDefaultPolicy#cpu_scheduling_priority}
  */
  readonly cpuSchedulingPriority?: string;
  /**
  * CPU usage limit as a percentage (1-100) (Windows/Linux only). Required for Windows and Linux platforms, cannot be used for Mac.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs/resources/it_automation_default_policy#cpu_throttle ItAutomationDefaultPolicy#cpu_throttle}
  */
  readonly cpuThrottle?: number;
  /**
  * Description of the default policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs/resources/it_automation_default_policy#description ItAutomationDefaultPolicy#description}
  */
  readonly description: string;
  /**
  * Whether OSQuery functionality is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs/resources/it_automation_default_policy#enable_os_query ItAutomationDefaultPolicy#enable_os_query}
  */
  readonly enableOsQuery: boolean | cdktf.IResolvable;
  /**
  * Whether Python script execution is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs/resources/it_automation_default_policy#enable_python_execution ItAutomationDefaultPolicy#enable_python_execution}
  */
  readonly enablePythonExecution: boolean | cdktf.IResolvable;
  /**
  * Whether script execution is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs/resources/it_automation_default_policy#enable_script_execution ItAutomationDefaultPolicy#enable_script_execution}
  */
  readonly enableScriptExecution: boolean | cdktf.IResolvable;
  /**
  * Maximum time a script can run before timing out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs/resources/it_automation_default_policy#execution_timeout ItAutomationDefaultPolicy#execution_timeout}
  */
  readonly executionTimeout: number;
  /**
  * Unit of time for execution timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs/resources/it_automation_default_policy#execution_timeout_unit ItAutomationDefaultPolicy#execution_timeout_unit}
  */
  readonly executionTimeoutUnit: string;
  /**
  * Amount of memory allocated (Windows/Linux only). Required for Windows and Linux platforms, cannot be used for Mac.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs/resources/it_automation_default_policy#memory_allocation ItAutomationDefaultPolicy#memory_allocation}
  */
  readonly memoryAllocation?: number;
  /**
  * Unit for memory allocation (Windows/Linux only). Required for Windows and Linux platforms, cannot be used for Mac.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs/resources/it_automation_default_policy#memory_allocation_unit ItAutomationDefaultPolicy#memory_allocation_unit}
  */
  readonly memoryAllocationUnit?: string;
  /**
  * Sets memory pressure level to control system resource allocation during task execution (Mac only). Required for Mac platform, cannot be used for Windows or Linux.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs/resources/it_automation_default_policy#memory_pressure_level ItAutomationDefaultPolicy#memory_pressure_level}
  */
  readonly memoryPressureLevel?: string;
  /**
  * Platform for the default policy (Windows, Linux, Mac).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs/resources/it_automation_default_policy#platform_name ItAutomationDefaultPolicy#platform_name}
  */
  readonly platformName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs/resources/it_automation_default_policy crowdstrike_it_automation_default_policy}
*/
export class ItAutomationDefaultPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_it_automation_default_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ItAutomationDefaultPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ItAutomationDefaultPolicy to import
  * @param importFromId The id of the existing ItAutomationDefaultPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs/resources/it_automation_default_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ItAutomationDefaultPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_it_automation_default_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.46/docs/resources/it_automation_default_policy crowdstrike_it_automation_default_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ItAutomationDefaultPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ItAutomationDefaultPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_it_automation_default_policy',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.46',
        providerVersionConstraint: '0.0.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._concurrentHostFileTransferLimit = config.concurrentHostFileTransferLimit;
    this._concurrentHostLimit = config.concurrentHostLimit;
    this._concurrentTaskLimit = config.concurrentTaskLimit;
    this._cpuSchedulingPriority = config.cpuSchedulingPriority;
    this._cpuThrottle = config.cpuThrottle;
    this._description = config.description;
    this._enableOsQuery = config.enableOsQuery;
    this._enablePythonExecution = config.enablePythonExecution;
    this._enableScriptExecution = config.enableScriptExecution;
    this._executionTimeout = config.executionTimeout;
    this._executionTimeoutUnit = config.executionTimeoutUnit;
    this._memoryAllocation = config.memoryAllocation;
    this._memoryAllocationUnit = config.memoryAllocationUnit;
    this._memoryPressureLevel = config.memoryPressureLevel;
    this._platformName = config.platformName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // concurrent_host_file_transfer_limit - computed: false, optional: false, required: true
  private _concurrentHostFileTransferLimit?: number; 
  public get concurrentHostFileTransferLimit() {
    return this.getNumberAttribute('concurrent_host_file_transfer_limit');
  }
  public set concurrentHostFileTransferLimit(value: number) {
    this._concurrentHostFileTransferLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentHostFileTransferLimitInput() {
    return this._concurrentHostFileTransferLimit;
  }

  // concurrent_host_limit - computed: false, optional: false, required: true
  private _concurrentHostLimit?: number; 
  public get concurrentHostLimit() {
    return this.getNumberAttribute('concurrent_host_limit');
  }
  public set concurrentHostLimit(value: number) {
    this._concurrentHostLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentHostLimitInput() {
    return this._concurrentHostLimit;
  }

  // concurrent_task_limit - computed: false, optional: false, required: true
  private _concurrentTaskLimit?: number; 
  public get concurrentTaskLimit() {
    return this.getNumberAttribute('concurrent_task_limit');
  }
  public set concurrentTaskLimit(value: number) {
    this._concurrentTaskLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentTaskLimitInput() {
    return this._concurrentTaskLimit;
  }

  // cpu_scheduling_priority - computed: false, optional: true, required: false
  private _cpuSchedulingPriority?: string; 
  public get cpuSchedulingPriority() {
    return this.getStringAttribute('cpu_scheduling_priority');
  }
  public set cpuSchedulingPriority(value: string) {
    this._cpuSchedulingPriority = value;
  }
  public resetCpuSchedulingPriority() {
    this._cpuSchedulingPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSchedulingPriorityInput() {
    return this._cpuSchedulingPriority;
  }

  // cpu_throttle - computed: false, optional: true, required: false
  private _cpuThrottle?: number; 
  public get cpuThrottle() {
    return this.getNumberAttribute('cpu_throttle');
  }
  public set cpuThrottle(value: number) {
    this._cpuThrottle = value;
  }
  public resetCpuThrottle() {
    this._cpuThrottle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuThrottleInput() {
    return this._cpuThrottle;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enable_os_query - computed: false, optional: false, required: true
  private _enableOsQuery?: boolean | cdktf.IResolvable; 
  public get enableOsQuery() {
    return this.getBooleanAttribute('enable_os_query');
  }
  public set enableOsQuery(value: boolean | cdktf.IResolvable) {
    this._enableOsQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOsQueryInput() {
    return this._enableOsQuery;
  }

  // enable_python_execution - computed: false, optional: false, required: true
  private _enablePythonExecution?: boolean | cdktf.IResolvable; 
  public get enablePythonExecution() {
    return this.getBooleanAttribute('enable_python_execution');
  }
  public set enablePythonExecution(value: boolean | cdktf.IResolvable) {
    this._enablePythonExecution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePythonExecutionInput() {
    return this._enablePythonExecution;
  }

  // enable_script_execution - computed: false, optional: false, required: true
  private _enableScriptExecution?: boolean | cdktf.IResolvable; 
  public get enableScriptExecution() {
    return this.getBooleanAttribute('enable_script_execution');
  }
  public set enableScriptExecution(value: boolean | cdktf.IResolvable) {
    this._enableScriptExecution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableScriptExecutionInput() {
    return this._enableScriptExecution;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // execution_timeout - computed: false, optional: false, required: true
  private _executionTimeout?: number; 
  public get executionTimeout() {
    return this.getNumberAttribute('execution_timeout');
  }
  public set executionTimeout(value: number) {
    this._executionTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTimeoutInput() {
    return this._executionTimeout;
  }

  // execution_timeout_unit - computed: false, optional: false, required: true
  private _executionTimeoutUnit?: string; 
  public get executionTimeoutUnit() {
    return this.getStringAttribute('execution_timeout_unit');
  }
  public set executionTimeoutUnit(value: string) {
    this._executionTimeoutUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTimeoutUnitInput() {
    return this._executionTimeoutUnit;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // memory_allocation - computed: false, optional: true, required: false
  private _memoryAllocation?: number; 
  public get memoryAllocation() {
    return this.getNumberAttribute('memory_allocation');
  }
  public set memoryAllocation(value: number) {
    this._memoryAllocation = value;
  }
  public resetMemoryAllocation() {
    this._memoryAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryAllocationInput() {
    return this._memoryAllocation;
  }

  // memory_allocation_unit - computed: false, optional: true, required: false
  private _memoryAllocationUnit?: string; 
  public get memoryAllocationUnit() {
    return this.getStringAttribute('memory_allocation_unit');
  }
  public set memoryAllocationUnit(value: string) {
    this._memoryAllocationUnit = value;
  }
  public resetMemoryAllocationUnit() {
    this._memoryAllocationUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryAllocationUnitInput() {
    return this._memoryAllocationUnit;
  }

  // memory_pressure_level - computed: false, optional: true, required: false
  private _memoryPressureLevel?: string; 
  public get memoryPressureLevel() {
    return this.getStringAttribute('memory_pressure_level');
  }
  public set memoryPressureLevel(value: string) {
    this._memoryPressureLevel = value;
  }
  public resetMemoryPressureLevel() {
    this._memoryPressureLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryPressureLevelInput() {
    return this._memoryPressureLevel;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // platform_name - computed: false, optional: false, required: true
  private _platformName?: string; 
  public get platformName() {
    return this.getStringAttribute('platform_name');
  }
  public set platformName(value: string) {
    this._platformName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformNameInput() {
    return this._platformName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      concurrent_host_file_transfer_limit: cdktf.numberToTerraform(this._concurrentHostFileTransferLimit),
      concurrent_host_limit: cdktf.numberToTerraform(this._concurrentHostLimit),
      concurrent_task_limit: cdktf.numberToTerraform(this._concurrentTaskLimit),
      cpu_scheduling_priority: cdktf.stringToTerraform(this._cpuSchedulingPriority),
      cpu_throttle: cdktf.numberToTerraform(this._cpuThrottle),
      description: cdktf.stringToTerraform(this._description),
      enable_os_query: cdktf.booleanToTerraform(this._enableOsQuery),
      enable_python_execution: cdktf.booleanToTerraform(this._enablePythonExecution),
      enable_script_execution: cdktf.booleanToTerraform(this._enableScriptExecution),
      execution_timeout: cdktf.numberToTerraform(this._executionTimeout),
      execution_timeout_unit: cdktf.stringToTerraform(this._executionTimeoutUnit),
      memory_allocation: cdktf.numberToTerraform(this._memoryAllocation),
      memory_allocation_unit: cdktf.stringToTerraform(this._memoryAllocationUnit),
      memory_pressure_level: cdktf.stringToTerraform(this._memoryPressureLevel),
      platform_name: cdktf.stringToTerraform(this._platformName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      concurrent_host_file_transfer_limit: {
        value: cdktf.numberToHclTerraform(this._concurrentHostFileTransferLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      concurrent_host_limit: {
        value: cdktf.numberToHclTerraform(this._concurrentHostLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      concurrent_task_limit: {
        value: cdktf.numberToHclTerraform(this._concurrentTaskLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_scheduling_priority: {
        value: cdktf.stringToHclTerraform(this._cpuSchedulingPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_throttle: {
        value: cdktf.numberToHclTerraform(this._cpuThrottle),
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
      enable_os_query: {
        value: cdktf.booleanToHclTerraform(this._enableOsQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_python_execution: {
        value: cdktf.booleanToHclTerraform(this._enablePythonExecution),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_script_execution: {
        value: cdktf.booleanToHclTerraform(this._enableScriptExecution),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      execution_timeout: {
        value: cdktf.numberToHclTerraform(this._executionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      execution_timeout_unit: {
        value: cdktf.stringToHclTerraform(this._executionTimeoutUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_allocation: {
        value: cdktf.numberToHclTerraform(this._memoryAllocation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_allocation_unit: {
        value: cdktf.stringToHclTerraform(this._memoryAllocationUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_pressure_level: {
        value: cdktf.stringToHclTerraform(this._memoryPressureLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform_name: {
        value: cdktf.stringToHclTerraform(this._platformName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
