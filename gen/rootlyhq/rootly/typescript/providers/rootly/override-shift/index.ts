// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/override_shift
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OverrideShiftConfig extends cdktf.TerraformMetaArguments {
  /**
  * End datetime of shift
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/override_shift#ends_at OverrideShift#ends_at}
  */
  readonly endsAt: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/override_shift#id OverrideShift#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Denotes shift is an override shift. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/override_shift#is_override OverrideShift#is_override}
  */
  readonly isOverride?: boolean | cdktf.IResolvable;
  /**
  * ID of rotation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/override_shift#rotation_id OverrideShift#rotation_id}
  */
  readonly rotationId?: string;
  /**
  * ID of schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/override_shift#schedule_id OverrideShift#schedule_id}
  */
  readonly scheduleId?: string;
  /**
  * Override metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/override_shift#shift_override OverrideShift#shift_override}
  */
  readonly shiftOverride?: { [key: string]: string };
  /**
  * Start datetime of shift
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/override_shift#starts_at OverrideShift#starts_at}
  */
  readonly startsAt: string;
  /**
  * User metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/override_shift#user OverrideShift#user}
  */
  readonly user?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/override_shift rootly_override_shift}
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
  * @param importFromId The id of the existing OverrideShift that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/override_shift#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OverrideShift to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_override_shift", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/override_shift rootly_override_shift} Resource
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
        providerVersion: '4.3.7'
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
    this._isOverride = config.isOverride;
    this._rotationId = config.rotationId;
    this._scheduleId = config.scheduleId;
    this._shiftOverride = config.shiftOverride;
    this._startsAt = config.startsAt;
    this._user = config.user;
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

  // is_override - computed: true, optional: true, required: false
  private _isOverride?: boolean | cdktf.IResolvable; 
  public get isOverride() {
    return this.getBooleanAttribute('is_override');
  }
  public set isOverride(value: boolean | cdktf.IResolvable) {
    this._isOverride = value;
  }
  public resetIsOverride() {
    this._isOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOverrideInput() {
    return this._isOverride;
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

  // shift_override - computed: true, optional: true, required: false
  private _shiftOverride?: { [key: string]: string }; 
  public get shiftOverride() {
    return this.getStringMapAttribute('shift_override');
  }
  public set shiftOverride(value: { [key: string]: string }) {
    this._shiftOverride = value;
  }
  public resetShiftOverride() {
    this._shiftOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shiftOverrideInput() {
    return this._shiftOverride;
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

  // user - computed: true, optional: true, required: false
  private _user?: { [key: string]: string }; 
  public get user() {
    return this.getStringMapAttribute('user');
  }
  public set user(value: { [key: string]: string }) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ends_at: cdktf.stringToTerraform(this._endsAt),
      id: cdktf.stringToTerraform(this._id),
      is_override: cdktf.booleanToTerraform(this._isOverride),
      rotation_id: cdktf.stringToTerraform(this._rotationId),
      schedule_id: cdktf.stringToTerraform(this._scheduleId),
      shift_override: cdktf.hashMapper(cdktf.stringToTerraform)(this._shiftOverride),
      starts_at: cdktf.stringToTerraform(this._startsAt),
      user: cdktf.hashMapper(cdktf.stringToTerraform)(this._user),
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
      is_override: {
        value: cdktf.booleanToHclTerraform(this._isOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      shift_override: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._shiftOverride),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      starts_at: {
        value: cdktf.stringToHclTerraform(this._startsAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._user),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
