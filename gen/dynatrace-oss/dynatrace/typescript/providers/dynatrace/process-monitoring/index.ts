// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_monitoring
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProcessMonitoringConfig extends cdktf.TerraformMetaArguments {
  /**
  * By disabling automatic deep monitoring the Dynatrace OneAgent will only deep monitor processes that are covered by a respective deep monitoring rule or where monitoring is enabled explicitly.
  * Disabling only works if all installed Agents have version 1.123 or higher. 
  * 
  *  With automatic monitoring enabled, you can create rules that define exceptions to automatic process detection and monitoring. With automatic monitoring disabled, you can define rules that identify specific processes that should be monitored. Rules are applied in the order listed in the custom and built-in process monitoring rules settings. This means that you can construct complex operations for fine-grain control over the processes that are monitored in your environment. For example, you might define an inclusion rule that’s followed by an exclusion rule covering the same process.
  * Once created, monitoring rules can be enabled/disabled at any time. The rules will only take effect after restart of the processes in question. Alternatively, you can disable automatic monitoring entirely and instead define "Include" rules for those processes you want to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_monitoring#auto_monitoring ProcessMonitoring#auto_monitoring}
  */
  readonly autoMonitoring: boolean | cdktf.IResolvable;
  /**
  * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_monitoring#host_group_id ProcessMonitoring#host_group_id}
  */
  readonly hostGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_monitoring#id ProcessMonitoring#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_monitoring dynatrace_process_monitoring}
*/
export class ProcessMonitoring extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_process_monitoring";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProcessMonitoring resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProcessMonitoring to import
  * @param importFromId The id of the existing ProcessMonitoring that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_monitoring#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProcessMonitoring to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_process_monitoring", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_monitoring dynatrace_process_monitoring} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProcessMonitoringConfig
  */
  public constructor(scope: Construct, id: string, config: ProcessMonitoringConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_process_monitoring',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoMonitoring = config.autoMonitoring;
    this._hostGroupId = config.hostGroupId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_monitoring - computed: false, optional: false, required: true
  private _autoMonitoring?: boolean | cdktf.IResolvable; 
  public get autoMonitoring() {
    return this.getBooleanAttribute('auto_monitoring');
  }
  public set autoMonitoring(value: boolean | cdktf.IResolvable) {
    this._autoMonitoring = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMonitoringInput() {
    return this._autoMonitoring;
  }

  // host_group_id - computed: false, optional: true, required: false
  private _hostGroupId?: string; 
  public get hostGroupId() {
    return this.getStringAttribute('host_group_id');
  }
  public set hostGroupId(value: string) {
    this._hostGroupId = value;
  }
  public resetHostGroupId() {
    this._hostGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupIdInput() {
    return this._hostGroupId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_monitoring: cdktf.booleanToTerraform(this._autoMonitoring),
      host_group_id: cdktf.stringToTerraform(this._hostGroupId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_monitoring: {
        value: cdktf.booleanToHclTerraform(this._autoMonitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_group_id: {
        value: cdktf.stringToHclTerraform(this._hostGroupId),
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
