// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/process_group_monitoring
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProcessGroupMonitoringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/process_group_monitoring#id ProcessGroupMonitoring#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Possible Values: `DEFAULT`, `MONITORING_OFF`, `MONITORING_ON`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/process_group_monitoring#monitoring_state ProcessGroupMonitoring#monitoring_state}
  */
  readonly monitoringState: string;
  /**
  * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/process_group_monitoring#process_group_id ProcessGroupMonitoring#process_group_id}
  */
  readonly processGroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/process_group_monitoring dynatrace_process_group_monitoring}
*/
export class ProcessGroupMonitoring extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_process_group_monitoring";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProcessGroupMonitoring resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProcessGroupMonitoring to import
  * @param importFromId The id of the existing ProcessGroupMonitoring that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/process_group_monitoring#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProcessGroupMonitoring to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_process_group_monitoring", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/process_group_monitoring dynatrace_process_group_monitoring} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProcessGroupMonitoringConfig
  */
  public constructor(scope: Construct, id: string, config: ProcessGroupMonitoringConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_process_group_monitoring',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._monitoringState = config.monitoringState;
    this._processGroupId = config.processGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // monitoring_state - computed: false, optional: false, required: true
  private _monitoringState?: string; 
  public get monitoringState() {
    return this.getStringAttribute('monitoring_state');
  }
  public set monitoringState(value: string) {
    this._monitoringState = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringStateInput() {
    return this._monitoringState;
  }

  // process_group_id - computed: false, optional: false, required: true
  private _processGroupId?: string; 
  public get processGroupId() {
    return this.getStringAttribute('process_group_id');
  }
  public set processGroupId(value: string) {
    this._processGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processGroupIdInput() {
    return this._processGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      monitoring_state: cdktf.stringToTerraform(this._monitoringState),
      process_group_id: cdktf.stringToTerraform(this._processGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitoring_state: {
        value: cdktf.stringToHclTerraform(this._monitoringState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      process_group_id: {
        value: cdktf.stringToHclTerraform(this._processGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
