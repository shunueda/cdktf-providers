// https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/scheduled_delete_stack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScheduledDeleteStackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Timestamp (unix timestamp) at which time the scheduling should happen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/scheduled_delete_stack#at ScheduledDeleteStack#at}
  */
  readonly at: number;
  /**
  * Indicates whether the resources of the stack should be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/scheduled_delete_stack#delete_resources ScheduledDeleteStack#delete_resources}
  */
  readonly deleteResources?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/scheduled_delete_stack#id ScheduledDeleteStack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/scheduled_delete_stack#schedule_id ScheduledDeleteStack#schedule_id}
  */
  readonly scheduleId?: string;
  /**
  * ID of the stack for which to set up scheduling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/scheduled_delete_stack#stack_id ScheduledDeleteStack#stack_id}
  */
  readonly stackId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/scheduled_delete_stack spacelift_scheduled_delete_stack}
*/
export class ScheduledDeleteStack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spacelift_scheduled_delete_stack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScheduledDeleteStack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScheduledDeleteStack to import
  * @param importFromId The id of the existing ScheduledDeleteStack that should be imported. Refer to the {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/scheduled_delete_stack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScheduledDeleteStack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spacelift_scheduled_delete_stack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/scheduled_delete_stack spacelift_scheduled_delete_stack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScheduledDeleteStackConfig
  */
  public constructor(scope: Construct, id: string, config: ScheduledDeleteStackConfig) {
    super(scope, id, {
      terraformResourceType: 'spacelift_scheduled_delete_stack',
      terraformGeneratorMetadata: {
        providerName: 'spacelift',
        providerVersion: '1.42.0',
        providerVersionConstraint: '1.42.0'
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
    this._deleteResources = config.deleteResources;
    this._id = config.id;
    this._scheduleId = config.scheduleId;
    this._stackId = config.stackId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // at - computed: false, optional: false, required: true
  private _at?: number; 
  public get at() {
    return this.getNumberAttribute('at');
  }
  public set at(value: number) {
    this._at = value;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // delete_resources - computed: false, optional: true, required: false
  private _deleteResources?: boolean | cdktf.IResolvable; 
  public get deleteResources() {
    return this.getBooleanAttribute('delete_resources');
  }
  public set deleteResources(value: boolean | cdktf.IResolvable) {
    this._deleteResources = value;
  }
  public resetDeleteResources() {
    this._deleteResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteResourcesInput() {
    return this._deleteResources;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      at: cdktf.numberToTerraform(this._at),
      delete_resources: cdktf.booleanToTerraform(this._deleteResources),
      id: cdktf.stringToTerraform(this._id),
      schedule_id: cdktf.stringToTerraform(this._scheduleId),
      stack_id: cdktf.stringToTerraform(this._stackId),
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
      delete_resources: {
        value: cdktf.booleanToHclTerraform(this._deleteResources),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
