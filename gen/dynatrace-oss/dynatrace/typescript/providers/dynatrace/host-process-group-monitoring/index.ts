// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_process_group_monitoring
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostProcessGroupMonitoringConfig extends cdktf.TerraformMetaArguments {
  /**
  * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_process_group_monitoring#host_id HostProcessGroupMonitoring#host_id}
  */
  readonly hostId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_process_group_monitoring#id HostProcessGroupMonitoring#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Possible Values: `DEFAULT`, `MONITORING_OFF`, `MONITORING_ON`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_process_group_monitoring#monitoring_state HostProcessGroupMonitoring#monitoring_state}
  */
  readonly monitoringState: string;
  /**
  * Process group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_process_group_monitoring#process_group HostProcessGroupMonitoring#process_group}
  */
  readonly processGroup: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_process_group_monitoring dynatrace_host_process_group_monitoring}
*/
export class HostProcessGroupMonitoring extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_host_process_group_monitoring";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HostProcessGroupMonitoring resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HostProcessGroupMonitoring to import
  * @param importFromId The id of the existing HostProcessGroupMonitoring that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_process_group_monitoring#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HostProcessGroupMonitoring to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_host_process_group_monitoring", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_process_group_monitoring dynatrace_host_process_group_monitoring} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HostProcessGroupMonitoringConfig
  */
  public constructor(scope: Construct, id: string, config: HostProcessGroupMonitoringConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_host_process_group_monitoring',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hostId = config.hostId;
    this._id = config.id;
    this._monitoringState = config.monitoringState;
    this._processGroup = config.processGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host_id - computed: false, optional: false, required: true
  private _hostId?: string; 
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
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

  // process_group - computed: false, optional: false, required: true
  private _processGroup?: string; 
  public get processGroup() {
    return this.getStringAttribute('process_group');
  }
  public set processGroup(value: string) {
    this._processGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processGroupInput() {
    return this._processGroup;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host_id: cdktf.stringToTerraform(this._hostId),
      id: cdktf.stringToTerraform(this._id),
      monitoring_state: cdktf.stringToTerraform(this._monitoringState),
      process_group: cdktf.stringToTerraform(this._processGroup),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host_id: {
        value: cdktf.stringToHclTerraform(this._hostId),
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
      monitoring_state: {
        value: cdktf.stringToHclTerraform(this._monitoringState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      process_group: {
        value: cdktf.stringToHclTerraform(this._processGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
