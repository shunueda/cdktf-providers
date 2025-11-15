// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/on_call_shadow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OnCallShadowConfig extends cdktf.TerraformMetaArguments {
  /**
  * End datetime for shadow shift
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/on_call_shadow#ends_at OnCallShadow#ends_at}
  */
  readonly endsAt: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/on_call_shadow#id OnCallShadow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of schedule the shadow shift belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/on_call_shadow#schedule_id OnCallShadow#schedule_id}
  */
  readonly scheduleId?: string;
  /**
  * Which user the shadow shift belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/on_call_shadow#shadow_user_id OnCallShadow#shadow_user_id}
  */
  readonly shadowUserId: number;
  /**
  * ID of schedule or user the shadow user is shadowing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/on_call_shadow#shadowable_id OnCallShadow#shadowable_id}
  */
  readonly shadowableId: string;
  /**
  * Value must be one of `User`, `Schedule`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/on_call_shadow#shadowable_type OnCallShadow#shadowable_type}
  */
  readonly shadowableType?: string;
  /**
  * Start datetime of shadow shift
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/on_call_shadow#starts_at OnCallShadow#starts_at}
  */
  readonly startsAt: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/on_call_shadow rootly_on_call_shadow}
*/
export class OnCallShadow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_on_call_shadow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OnCallShadow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OnCallShadow to import
  * @param importFromId The id of the existing OnCallShadow that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/on_call_shadow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OnCallShadow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_on_call_shadow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/on_call_shadow rootly_on_call_shadow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OnCallShadowConfig
  */
  public constructor(scope: Construct, id: string, config: OnCallShadowConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_on_call_shadow',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.8',
        providerVersionConstraint: '4.3.8'
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
    this._scheduleId = config.scheduleId;
    this._shadowUserId = config.shadowUserId;
    this._shadowableId = config.shadowableId;
    this._shadowableType = config.shadowableType;
    this._startsAt = config.startsAt;
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

  // shadow_user_id - computed: false, optional: false, required: true
  private _shadowUserId?: number; 
  public get shadowUserId() {
    return this.getNumberAttribute('shadow_user_id');
  }
  public set shadowUserId(value: number) {
    this._shadowUserId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shadowUserIdInput() {
    return this._shadowUserId;
  }

  // shadowable_id - computed: false, optional: false, required: true
  private _shadowableId?: string; 
  public get shadowableId() {
    return this.getStringAttribute('shadowable_id');
  }
  public set shadowableId(value: string) {
    this._shadowableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shadowableIdInput() {
    return this._shadowableId;
  }

  // shadowable_type - computed: false, optional: true, required: false
  private _shadowableType?: string; 
  public get shadowableType() {
    return this.getStringAttribute('shadowable_type');
  }
  public set shadowableType(value: string) {
    this._shadowableType = value;
  }
  public resetShadowableType() {
    this._shadowableType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shadowableTypeInput() {
    return this._shadowableType;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ends_at: cdktf.stringToTerraform(this._endsAt),
      id: cdktf.stringToTerraform(this._id),
      schedule_id: cdktf.stringToTerraform(this._scheduleId),
      shadow_user_id: cdktf.numberToTerraform(this._shadowUserId),
      shadowable_id: cdktf.stringToTerraform(this._shadowableId),
      shadowable_type: cdktf.stringToTerraform(this._shadowableType),
      starts_at: cdktf.stringToTerraform(this._startsAt),
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
      schedule_id: {
        value: cdktf.stringToHclTerraform(this._scheduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shadow_user_id: {
        value: cdktf.numberToHclTerraform(this._shadowUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shadowable_id: {
        value: cdktf.stringToHclTerraform(this._shadowableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shadowable_type: {
        value: cdktf.stringToHclTerraform(this._shadowableType),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
