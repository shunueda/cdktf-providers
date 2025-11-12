// https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/scheduled_delete_stack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSpaceliftScheduledDeleteStackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/scheduled_delete_stack#id DataSpaceliftScheduledDeleteStack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the scheduled delete_stack (stack_id/schedule_id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/scheduled_delete_stack#scheduled_delete_stack_id DataSpaceliftScheduledDeleteStack#scheduled_delete_stack_id}
  */
  readonly scheduledDeleteStackId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/scheduled_delete_stack spacelift_scheduled_delete_stack}
*/
export class DataSpaceliftScheduledDeleteStack extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spacelift_scheduled_delete_stack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSpaceliftScheduledDeleteStack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSpaceliftScheduledDeleteStack to import
  * @param importFromId The id of the existing DataSpaceliftScheduledDeleteStack that should be imported. Refer to the {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/scheduled_delete_stack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSpaceliftScheduledDeleteStack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spacelift_scheduled_delete_stack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/scheduled_delete_stack spacelift_scheduled_delete_stack} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSpaceliftScheduledDeleteStackConfig
  */
  public constructor(scope: Construct, id: string, config: DataSpaceliftScheduledDeleteStackConfig) {
    super(scope, id, {
      terraformResourceType: 'spacelift_scheduled_delete_stack',
      terraformGeneratorMetadata: {
        providerName: 'spacelift',
        providerVersion: '1.37.0',
        providerVersionConstraint: '1.37.0'
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
    this._scheduledDeleteStackId = config.scheduledDeleteStackId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // at - computed: true, optional: false, required: false
  public get at() {
    return this.getNumberAttribute('at');
  }

  // delete_resources - computed: true, optional: false, required: false
  public get deleteResources() {
    return this.getBooleanAttribute('delete_resources');
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

  // schedule_id - computed: true, optional: false, required: false
  public get scheduleId() {
    return this.getStringAttribute('schedule_id');
  }

  // scheduled_delete_stack_id - computed: false, optional: false, required: true
  private _scheduledDeleteStackId?: string; 
  public get scheduledDeleteStackId() {
    return this.getStringAttribute('scheduled_delete_stack_id');
  }
  public set scheduledDeleteStackId(value: string) {
    this._scheduledDeleteStackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledDeleteStackIdInput() {
    return this._scheduledDeleteStackId;
  }

  // stack_id - computed: true, optional: false, required: false
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      scheduled_delete_stack_id: cdktf.stringToTerraform(this._scheduledDeleteStackId),
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
      scheduled_delete_stack_id: {
        value: cdktf.stringToHclTerraform(this._scheduledDeleteStackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
