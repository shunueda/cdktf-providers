// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ipv6_ospf_events
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DebugIpv6OspfEventsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * OSPF ABR events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ipv6_ospf_events#abr DebugIpv6OspfEventsA#abr}
  */
  readonly abr?: number;
  /**
  * OSPF ASBR events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ipv6_ospf_events#asbr DebugIpv6OspfEventsA#asbr}
  */
  readonly asbr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ipv6_ospf_events#id DebugIpv6OspfEventsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * OS events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ipv6_ospf_events#os DebugIpv6OspfEventsA#os}
  */
  readonly os?: number;
  /**
  * Other router events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ipv6_ospf_events#router DebugIpv6OspfEventsA#router}
  */
  readonly router?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ipv6_ospf_events#uuid DebugIpv6OspfEventsA#uuid}
  */
  readonly uuid?: string;
  /**
  * Virtual-Link event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ipv6_ospf_events#vlink DebugIpv6OspfEventsA#vlink}
  */
  readonly vlink?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ipv6_ospf_events thunder_debug_ipv6_ospf_events}
*/
export class DebugIpv6OspfEventsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_debug_ipv6_ospf_events";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DebugIpv6OspfEventsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DebugIpv6OspfEventsA to import
  * @param importFromId The id of the existing DebugIpv6OspfEventsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ipv6_ospf_events#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DebugIpv6OspfEventsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_debug_ipv6_ospf_events", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/debug_ipv6_ospf_events thunder_debug_ipv6_ospf_events} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DebugIpv6OspfEventsAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DebugIpv6OspfEventsAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_debug_ipv6_ospf_events',
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
    this._abr = config.abr;
    this._asbr = config.asbr;
    this._id = config.id;
    this._os = config.os;
    this._router = config.router;
    this._uuid = config.uuid;
    this._vlink = config.vlink;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // abr - computed: false, optional: true, required: false
  private _abr?: number; 
  public get abr() {
    return this.getNumberAttribute('abr');
  }
  public set abr(value: number) {
    this._abr = value;
  }
  public resetAbr() {
    this._abr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abrInput() {
    return this._abr;
  }

  // asbr - computed: false, optional: true, required: false
  private _asbr?: number; 
  public get asbr() {
    return this.getNumberAttribute('asbr');
  }
  public set asbr(value: number) {
    this._asbr = value;
  }
  public resetAsbr() {
    this._asbr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asbrInput() {
    return this._asbr;
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

  // os - computed: false, optional: true, required: false
  private _os?: number; 
  public get os() {
    return this.getNumberAttribute('os');
  }
  public set os(value: number) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // router - computed: false, optional: true, required: false
  private _router?: number; 
  public get router() {
    return this.getNumberAttribute('router');
  }
  public set router(value: number) {
    this._router = value;
  }
  public resetRouter() {
    this._router = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router;
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

  // vlink - computed: false, optional: true, required: false
  private _vlink?: number; 
  public get vlink() {
    return this.getNumberAttribute('vlink');
  }
  public set vlink(value: number) {
    this._vlink = value;
  }
  public resetVlink() {
    this._vlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlinkInput() {
    return this._vlink;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      abr: cdktf.numberToTerraform(this._abr),
      asbr: cdktf.numberToTerraform(this._asbr),
      id: cdktf.stringToTerraform(this._id),
      os: cdktf.numberToTerraform(this._os),
      router: cdktf.numberToTerraform(this._router),
      uuid: cdktf.stringToTerraform(this._uuid),
      vlink: cdktf.numberToTerraform(this._vlink),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      abr: {
        value: cdktf.numberToHclTerraform(this._abr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      asbr: {
        value: cdktf.numberToHclTerraform(this._asbr),
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
      os: {
        value: cdktf.numberToHclTerraform(this._os),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      router: {
        value: cdktf.numberToHclTerraform(this._router),
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
      vlink: {
        value: cdktf.numberToHclTerraform(this._vlink),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
