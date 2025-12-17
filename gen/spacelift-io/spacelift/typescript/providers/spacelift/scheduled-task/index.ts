// https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/scheduled_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScheduledTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Timestamp (unix timestamp) at which time the scheduled task should happen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/scheduled_task#at ScheduledTask#at}
  */
  readonly at?: number;
  /**
  * Command that will be run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/scheduled_task#command ScheduledTask#command}
  */
  readonly command: string;
  /**
  * List of cron schedule expressions based on which the scheduled task should be triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/scheduled_task#every ScheduledTask#every}
  */
  readonly every?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/scheduled_task#id ScheduledTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/scheduled_task#schedule_id ScheduledTask#schedule_id}
  */
  readonly scheduleId?: string;
  /**
  * ID of the stack for which to set up the scheduled task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/scheduled_task#stack_id ScheduledTask#stack_id}
  */
  readonly stackId: string;
  /**
  * Timezone in which the schedule is expressed. Defaults to `UTC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/scheduled_task#timezone ScheduledTask#timezone}
  */
  readonly timezone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/scheduled_task spacelift_scheduled_task}
*/
export class ScheduledTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spacelift_scheduled_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScheduledTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScheduledTask to import
  * @param importFromId The id of the existing ScheduledTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/scheduled_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScheduledTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spacelift_scheduled_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.41.0/docs/resources/scheduled_task spacelift_scheduled_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScheduledTaskConfig
  */
  public constructor(scope: Construct, id: string, config: ScheduledTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'spacelift_scheduled_task',
      terraformGeneratorMetadata: {
        providerName: 'spacelift',
        providerVersion: '1.41.0',
        providerVersionConstraint: '1.41.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._at = config.at;
    this._command = config.command;
    this._every = config.every;
    this._id = config.id;
    this._scheduleId = config.scheduleId;
    this._stackId = config.stackId;
    this._timezone = config.timezone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // at - computed: false, optional: true, required: false
  private _at?: number; 
  public get at() {
    return this.getNumberAttribute('at');
  }
  public set at(value: number) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // command - computed: false, optional: false, required: true
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // every - computed: false, optional: true, required: false
  private _every?: string[]; 
  public get every() {
    return this.getListAttribute('every');
  }
  public set every(value: string[]) {
    this._every = value;
  }
  public resetEvery() {
    this._every = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyInput() {
    return this._every;
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

  // schedule_id - computed: true, optional: true, required: false
  private _scheduleId?: string; 
  public get scheduleId() {
    return this.getStringAttribute('schedule_id');
  }
  public set scheduleId(value: string) {
    this._scheduleId = value;
  }
  public resetScheduleId() {
    this._scheduleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleIdInput() {
    return this._scheduleId;
  }

  // stack_id - computed: false, optional: false, required: true
  private _stackId?: string; 
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      at: cdktf.numberToTerraform(this._at),
      command: cdktf.stringToTerraform(this._command),
      every: cdktf.listMapper(cdktf.stringToTerraform, false)(this._every),
      id: cdktf.stringToTerraform(this._id),
      schedule_id: cdktf.stringToTerraform(this._scheduleId),
      stack_id: cdktf.stringToTerraform(this._stackId),
      timezone: cdktf.stringToTerraform(this._timezone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      at: {
        value: cdktf.numberToHclTerraform(this._at),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      command: {
        value: cdktf.stringToHclTerraform(this._command),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      every: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._every),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_id: {
        value: cdktf.stringToHclTerraform(this._scheduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_id: {
        value: cdktf.stringToHclTerraform(this._stackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
