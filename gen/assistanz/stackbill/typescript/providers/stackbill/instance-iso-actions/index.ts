// https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_iso_actions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstanceIsoActionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_iso_actions#action InstanceIsoActions#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_iso_actions#id InstanceIsoActions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_iso_actions#iso_uuid InstanceIsoActions#iso_uuid}
  */
  readonly isoUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_iso_actions#uuid InstanceIsoActions#uuid}
  */
  readonly uuid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_iso_actions stackbill_instance_iso_actions}
*/
export class InstanceIsoActions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackbill_instance_iso_actions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InstanceIsoActions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InstanceIsoActions to import
  * @param importFromId The id of the existing InstanceIsoActions that should be imported. Refer to the {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_iso_actions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InstanceIsoActions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackbill_instance_iso_actions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_iso_actions stackbill_instance_iso_actions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstanceIsoActionsConfig
  */
  public constructor(scope: Construct, id: string, config: InstanceIsoActionsConfig) {
    super(scope, id, {
      terraformResourceType: 'stackbill_instance_iso_actions',
      terraformGeneratorMetadata: {
        providerName: 'stackbill',
        providerVersion: '0.1.0'
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
    this._id = config.id;
    this._isoUuid = config.isoUuid;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // iso_uuid - computed: false, optional: false, required: true
  private _isoUuid?: string; 
  public get isoUuid() {
    return this.getStringAttribute('iso_uuid');
  }
  public set isoUuid(value: string) {
    this._isoUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isoUuidInput() {
    return this._isoUuid;
  }

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      id: cdktf.stringToTerraform(this._id),
      iso_uuid: cdktf.stringToTerraform(this._isoUuid),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iso_uuid: {
        value: cdktf.stringToHclTerraform(this._isoUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
