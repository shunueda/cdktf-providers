// https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/control_mute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ControlMuteConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the control to mute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/control_mute#control_id ControlMute#control_id}
  */
  readonly controlId?: string;
  /**
  * The ID or AKA of the control type to be muted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/control_mute#control_type ControlMute#control_type}
  */
  readonly controlType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/control_mute#id ControlMute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An optional note explaining the reason for muting the control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/control_mute#note ControlMute#note}
  */
  readonly note?: string;
  /**
  * The ID or AKA of the resource where the control is available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/control_mute#resource ControlMute#resource}
  */
  readonly resource?: string;
  /**
  * The timestamp specifying when the mute should end, in ISO 8601 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/control_mute#to_timestamp ControlMute#to_timestamp}
  */
  readonly toTimestamp?: string;
  /**
  * A list of control states specifying where the mute will not apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/control_mute#until_states ControlMute#until_states}
  */
  readonly untilStates?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/control_mute turbot_control_mute}
*/
export class ControlMute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "turbot_control_mute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ControlMute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ControlMute to import
  * @param importFromId The id of the existing ControlMute that should be imported. Refer to the {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/control_mute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ControlMute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "turbot_control_mute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/control_mute turbot_control_mute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ControlMuteConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ControlMuteConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'turbot_control_mute',
      terraformGeneratorMetadata: {
        providerName: 'turbot',
        providerVersion: '1.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._controlId = config.controlId;
    this._controlType = config.controlType;
    this._id = config.id;
    this._note = config.note;
    this._resource = config.resource;
    this._toTimestamp = config.toTimestamp;
    this._untilStates = config.untilStates;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // control_id - computed: true, optional: true, required: false
  private _controlId?: string; 
  public get controlId() {
    return this.getStringAttribute('control_id');
  }
  public set controlId(value: string) {
    this._controlId = value;
  }
  public resetControlId() {
    this._controlId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlIdInput() {
    return this._controlId;
  }

  // control_type - computed: true, optional: true, required: false
  private _controlType?: string; 
  public get controlType() {
    return this.getStringAttribute('control_type');
  }
  public set controlType(value: string) {
    this._controlType = value;
  }
  public resetControlType() {
    this._controlType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlTypeInput() {
    return this._controlType;
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

  // note - computed: false, optional: true, required: false
  private _note?: string; 
  public get note() {
    return this.getStringAttribute('note');
  }
  public set note(value: string) {
    this._note = value;
  }
  public resetNote() {
    this._note = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note;
  }

  // resource - computed: true, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // to_timestamp - computed: false, optional: true, required: false
  private _toTimestamp?: string; 
  public get toTimestamp() {
    return this.getStringAttribute('to_timestamp');
  }
  public set toTimestamp(value: string) {
    this._toTimestamp = value;
  }
  public resetToTimestamp() {
    this._toTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toTimestampInput() {
    return this._toTimestamp;
  }

  // until_states - computed: false, optional: true, required: false
  private _untilStates?: string[]; 
  public get untilStates() {
    return this.getListAttribute('until_states');
  }
  public set untilStates(value: string[]) {
    this._untilStates = value;
  }
  public resetUntilStates() {
    this._untilStates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untilStatesInput() {
    return this._untilStates;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      control_id: cdktf.stringToTerraform(this._controlId),
      control_type: cdktf.stringToTerraform(this._controlType),
      id: cdktf.stringToTerraform(this._id),
      note: cdktf.stringToTerraform(this._note),
      resource: cdktf.stringToTerraform(this._resource),
      to_timestamp: cdktf.stringToTerraform(this._toTimestamp),
      until_states: cdktf.listMapper(cdktf.stringToTerraform, false)(this._untilStates),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      control_id: {
        value: cdktf.stringToHclTerraform(this._controlId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control_type: {
        value: cdktf.stringToHclTerraform(this._controlType),
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
      note: {
        value: cdktf.stringToHclTerraform(this._note),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource: {
        value: cdktf.stringToHclTerraform(this._resource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      to_timestamp: {
        value: cdktf.stringToHclTerraform(this._toTimestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      until_states: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._untilStates),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
