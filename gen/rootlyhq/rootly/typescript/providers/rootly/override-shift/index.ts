// https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/override_shift
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OverrideShiftConfig extends cdktf.TerraformMetaArguments {
  /**
  * End datetime of shift
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/override_shift#ends_at OverrideShift#ends_at}
  */
  readonly endsAt: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/override_shift#id OverrideShift#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of rotation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/override_shift#rotation_id OverrideShift#rotation_id}
  */
  readonly rotationId?: string;
  /**
  * ID of schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/override_shift#schedule_id OverrideShift#schedule_id}
  */
  readonly scheduleId?: string;
  /**
  * Start datetime of shift
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/override_shift#starts_at OverrideShift#starts_at}
  */
  readonly startsAt: string;
  /**
  * Override shift user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/override_shift#user_id OverrideShift#user_id}
  */
  readonly userId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/override_shift rootly_override_shift}
*/
export class OverrideShift extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_override_shift";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OverrideShift resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OverrideShift to import
  * @param importFromId The id of the existing OverrideShift that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/override_shift#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OverrideShift to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_override_shift", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.0/docs/resources/override_shift rootly_override_shift} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OverrideShiftConfig
  */
  public constructor(scope: Construct, id: string, config: OverrideShiftConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_override_shift',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.2.0',
        providerVersionConstraint: '5.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endsAt = config.endsAt;
    this._id = config.id;
    this._rotationId = config.rotationId;
    this._scheduleId = config.scheduleId;
    this._startsAt = config.startsAt;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ends_at - computed: false, optional: false, required: true
  private _endsAt?: string; 
  public get endsAt() {
    return this.getStringAttribute('ends_at');
  }
  public set endsAt(value: string) {
    this._endsAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endsAtInput() {
    return this._endsAt;
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

  // rotation_id - computed: true, optional: true, required: false
  private _rotationId?: string; 
  public get rotationId() {
    return this.getStringAttribute('rotation_id');
  }
  public set rotationId(value: string) {
    this._rotationId = value;
  }
  public resetRotationId() {
    this._rotationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationIdInput() {
    return this._rotationId;
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

  // starts_at - computed: false, optional: false, required: true
  private _startsAt?: string; 
  public get startsAt() {
    return this.getStringAttribute('starts_at');
  }
  public set startsAt(value: string) {
    this._startsAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startsAtInput() {
    return this._startsAt;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ends_at: cdktf.stringToTerraform(this._endsAt),
      id: cdktf.stringToTerraform(this._id),
      rotation_id: cdktf.stringToTerraform(this._rotationId),
      schedule_id: cdktf.stringToTerraform(this._scheduleId),
      starts_at: cdktf.stringToTerraform(this._startsAt),
      user_id: cdktf.numberToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ends_at: {
        value: cdktf.stringToHclTerraform(this._endsAt),
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
      rotation_id: {
        value: cdktf.stringToHclTerraform(this._rotationId),
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
      starts_at: {
        value: cdktf.stringToHclTerraform(this._startsAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.numberToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
