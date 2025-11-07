// https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/device_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action to be performed on the devices. Accepted values are [`inventory_refresh`]. Default value is `inventory_refresh`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/device_action#action DeviceAction#action}
  */
  readonly action?: string;
  /**
  * Cron expression to schedule an action in the future. If not specified, the action runs immediately on apply. Conflicts with `timeout`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/device_action#cron DeviceAction#cron}
  */
  readonly cron?: string;
  /**
  * List of id of devices on whom the action would be carried out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/device_action#device_ids DeviceAction#device_ids}
  */
  readonly deviceIds: number[];
  /**
  * Description of the job to be created on the OME appliance that will run the action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/device_action#job_description DeviceAction#job_description}
  */
  readonly jobDescription?: string;
  /**
  * Name of the job to be created on the OME appliance that will run the action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/device_action#job_name DeviceAction#job_name}
  */
  readonly jobName: string;
  /**
  * Timeout, in minutes, for monitoring an immediately running action. Conflicts with `cron`. Default value is `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/device_action#timeout DeviceAction#timeout}
  */
  readonly timeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/device_action ome_device_action}
*/
export class DeviceAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ome_device_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeviceAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeviceAction to import
  * @param importFromId The id of the existing DeviceAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/device_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeviceAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ome_device_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/device_action ome_device_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceActionConfig
  */
  public constructor(scope: Construct, id: string, config: DeviceActionConfig) {
    super(scope, id, {
      terraformResourceType: 'ome_device_action',
      terraformGeneratorMetadata: {
        providerName: 'ome',
        providerVersion: '1.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._cron = config.cron;
    this._deviceIds = config.deviceIds;
    this._jobDescription = config.jobDescription;
    this._jobName = config.jobName;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // current_status - computed: true, optional: false, required: false
  public get currentStatus() {
    return this.getStringAttribute('current_status');
  }

  // device_ids - computed: false, optional: false, required: true
  private _deviceIds?: number[]; 
  public get deviceIds() {
    return this.getNumberListAttribute('device_ids');
  }
  public set deviceIds(value: number[]) {
    this._deviceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdsInput() {
    return this._deviceIds;
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // job_description - computed: true, optional: true, required: false
  private _jobDescription?: string; 
  public get jobDescription() {
    return this.getStringAttribute('job_description');
  }
  public set jobDescription(value: string) {
    this._jobDescription = value;
  }
  public resetJobDescription() {
    this._jobDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobDescriptionInput() {
    return this._jobDescription;
  }

  // job_name - computed: false, optional: false, required: true
  private _jobName?: string; 
  public get jobName() {
    return this.getStringAttribute('job_name');
  }
  public set jobName(value: string) {
    this._jobName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobNameInput() {
    return this._jobName;
  }

  // last_run_status - computed: true, optional: false, required: false
  public get lastRunStatus() {
    return this.getStringAttribute('last_run_status');
  }

  // last_run_time - computed: true, optional: false, required: false
  public get lastRunTime() {
    return this.getStringAttribute('last_run_time');
  }

  // next_run_time - computed: true, optional: false, required: false
  public get nextRunTime() {
    return this.getStringAttribute('next_run_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      cron: cdktf.stringToTerraform(this._cron),
      device_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._deviceIds),
      job_description: cdktf.stringToTerraform(this._jobDescription),
      job_name: cdktf.stringToTerraform(this._jobName),
      timeout: cdktf.numberToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      device_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._deviceIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      job_description: {
        value: cdktf.stringToHclTerraform(this._jobDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_name: {
        value: cdktf.stringToHclTerraform(this._jobName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
