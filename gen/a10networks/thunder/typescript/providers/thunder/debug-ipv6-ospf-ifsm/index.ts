// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ipv6_ospf_ifsm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DebugIpv6OspfIfsmAConfig extends cdktf.TerraformMetaArguments {
  /**
  * IFSM Event Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ipv6_ospf_ifsm#events DebugIpv6OspfIfsmA#events}
  */
  readonly events?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ipv6_ospf_ifsm#id DebugIpv6OspfIfsmA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IFSM Status Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ipv6_ospf_ifsm#status DebugIpv6OspfIfsmA#status}
  */
  readonly status?: number;
  /**
  * IFSM Timer Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ipv6_ospf_ifsm#timers DebugIpv6OspfIfsmA#timers}
  */
  readonly timers?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ipv6_ospf_ifsm#uuid DebugIpv6OspfIfsmA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ipv6_ospf_ifsm thunder_debug_ipv6_ospf_ifsm}
*/
export class DebugIpv6OspfIfsmA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_debug_ipv6_ospf_ifsm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DebugIpv6OspfIfsmA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DebugIpv6OspfIfsmA to import
  * @param importFromId The id of the existing DebugIpv6OspfIfsmA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ipv6_ospf_ifsm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DebugIpv6OspfIfsmA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_debug_ipv6_ospf_ifsm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ipv6_ospf_ifsm thunder_debug_ipv6_ospf_ifsm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DebugIpv6OspfIfsmAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DebugIpv6OspfIfsmAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_debug_ipv6_ospf_ifsm',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._events = config.events;
    this._id = config.id;
    this._status = config.status;
    this._timers = config.timers;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // events - computed: false, optional: true, required: false
  private _events?: number; 
  public get events() {
    return this.getNumberAttribute('events');
  }
  public set events(value: number) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
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

  // status - computed: false, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // timers - computed: false, optional: true, required: false
  private _timers?: number; 
  public get timers() {
    return this.getNumberAttribute('timers');
  }
  public set timers(value: number) {
    this._timers = value;
  }
  public resetTimers() {
    this._timers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersInput() {
    return this._timers;
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
      events: cdktf.numberToTerraform(this._events),
      id: cdktf.stringToTerraform(this._id),
      status: cdktf.numberToTerraform(this._status),
      timers: cdktf.numberToTerraform(this._timers),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      events: {
        value: cdktf.numberToHclTerraform(this._events),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.numberToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timers: {
        value: cdktf.numberToHclTerraform(this._timers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
