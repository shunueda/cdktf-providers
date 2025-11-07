// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_event_notification_ddos
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SflowEventNotificationDdosConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_event_notification_ddos#id SflowEventNotificationDdos#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'enable': Enable sflow notification for DDOS events; 'disable': Disable sflow notification for DDOS events;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_event_notification_ddos#toggle SflowEventNotificationDdos#toggle}
  */
  readonly toggle?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_event_notification_ddos#uuid SflowEventNotificationDdos#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_event_notification_ddos thunder_sflow_event_notification_ddos}
*/
export class SflowEventNotificationDdos extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_sflow_event_notification_ddos";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SflowEventNotificationDdos resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SflowEventNotificationDdos to import
  * @param importFromId The id of the existing SflowEventNotificationDdos that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_event_notification_ddos#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SflowEventNotificationDdos to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_sflow_event_notification_ddos", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/sflow_event_notification_ddos thunder_sflow_event_notification_ddos} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SflowEventNotificationDdosConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SflowEventNotificationDdosConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_sflow_event_notification_ddos',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._toggle = config.toggle;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // toggle - computed: false, optional: true, required: false
  private _toggle?: string; 
  public get toggle() {
    return this.getStringAttribute('toggle');
  }
  public set toggle(value: string) {
    this._toggle = value;
  }
  public resetToggle() {
    this._toggle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toggleInput() {
    return this._toggle;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
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
      id: cdktf.stringToTerraform(this._id),
      toggle: cdktf.stringToTerraform(this._toggle),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      toggle: {
        value: cdktf.stringToHclTerraform(this._toggle),
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
