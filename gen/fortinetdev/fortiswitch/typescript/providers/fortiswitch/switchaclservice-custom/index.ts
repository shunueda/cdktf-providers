// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchaclservice_custom
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchaclserviceCustomConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchaclservice_custom#color SwitchaclserviceCustom#color}
  */
  readonly color?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchaclservice_custom#comment SwitchaclserviceCustom#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchaclservice_custom#icmpcode SwitchaclserviceCustom#icmpcode}
  */
  readonly icmpcode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchaclservice_custom#icmptype SwitchaclserviceCustom#icmptype}
  */
  readonly icmptype?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchaclservice_custom#id SwitchaclserviceCustom#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchaclservice_custom#name SwitchaclserviceCustom#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchaclservice_custom#protocol SwitchaclserviceCustom#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchaclservice_custom#protocol_number SwitchaclserviceCustom#protocol_number}
  */
  readonly protocolNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchaclservice_custom#sctp_portmask SwitchaclserviceCustom#sctp_portmask}
  */
  readonly sctpPortmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchaclservice_custom#sctp_portrange SwitchaclserviceCustom#sctp_portrange}
  */
  readonly sctpPortrange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchaclservice_custom#tcp_portmask SwitchaclserviceCustom#tcp_portmask}
  */
  readonly tcpPortmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchaclservice_custom#tcp_portrange SwitchaclserviceCustom#tcp_portrange}
  */
  readonly tcpPortrange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchaclservice_custom#udp_portmask SwitchaclserviceCustom#udp_portmask}
  */
  readonly udpPortmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchaclservice_custom#udp_portrange SwitchaclserviceCustom#udp_portrange}
  */
  readonly udpPortrange?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchaclservice_custom fortiswitch_switchaclservice_custom}
*/
export class SwitchaclserviceCustom extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_switchaclservice_custom";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchaclserviceCustom resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchaclserviceCustom to import
  * @param importFromId The id of the existing SwitchaclserviceCustom that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchaclservice_custom#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchaclserviceCustom to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_switchaclservice_custom", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchaclservice_custom fortiswitch_switchaclservice_custom} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchaclserviceCustomConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchaclserviceCustomConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_switchaclservice_custom',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._color = config.color;
    this._comment = config.comment;
    this._icmpcode = config.icmpcode;
    this._icmptype = config.icmptype;
    this._id = config.id;
    this._name = config.name;
    this._protocol = config.protocol;
    this._protocolNumber = config.protocolNumber;
    this._sctpPortmask = config.sctpPortmask;
    this._sctpPortrange = config.sctpPortrange;
    this._tcpPortmask = config.tcpPortmask;
    this._tcpPortrange = config.tcpPortrange;
    this._udpPortmask = config.udpPortmask;
    this._udpPortrange = config.udpPortrange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // color - computed: true, optional: true, required: false
  private _color?: number; 
  public get color() {
    return this.getNumberAttribute('color');
  }
  public set color(value: number) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // icmpcode - computed: true, optional: true, required: false
  private _icmpcode?: number; 
  public get icmpcode() {
    return this.getNumberAttribute('icmpcode');
  }
  public set icmpcode(value: number) {
    this._icmpcode = value;
  }
  public resetIcmpcode() {
    this._icmpcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpcodeInput() {
    return this._icmpcode;
  }

  // icmptype - computed: true, optional: true, required: false
  private _icmptype?: number; 
  public get icmptype() {
    return this.getNumberAttribute('icmptype');
  }
  public set icmptype(value: number) {
    this._icmptype = value;
  }
  public resetIcmptype() {
    this._icmptype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmptypeInput() {
    return this._icmptype;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_number - computed: true, optional: true, required: false
  private _protocolNumber?: number; 
  public get protocolNumber() {
    return this.getNumberAttribute('protocol_number');
  }
  public set protocolNumber(value: number) {
    this._protocolNumber = value;
  }
  public resetProtocolNumber() {
    this._protocolNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolNumberInput() {
    return this._protocolNumber;
  }

  // sctp_portmask - computed: true, optional: true, required: false
  private _sctpPortmask?: string; 
  public get sctpPortmask() {
    return this.getStringAttribute('sctp_portmask');
  }
  public set sctpPortmask(value: string) {
    this._sctpPortmask = value;
  }
  public resetSctpPortmask() {
    this._sctpPortmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpPortmaskInput() {
    return this._sctpPortmask;
  }

  // sctp_portrange - computed: true, optional: true, required: false
  private _sctpPortrange?: string; 
  public get sctpPortrange() {
    return this.getStringAttribute('sctp_portrange');
  }
  public set sctpPortrange(value: string) {
    this._sctpPortrange = value;
  }
  public resetSctpPortrange() {
    this._sctpPortrange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpPortrangeInput() {
    return this._sctpPortrange;
  }

  // tcp_portmask - computed: true, optional: true, required: false
  private _tcpPortmask?: string; 
  public get tcpPortmask() {
    return this.getStringAttribute('tcp_portmask');
  }
  public set tcpPortmask(value: string) {
    this._tcpPortmask = value;
  }
  public resetTcpPortmask() {
    this._tcpPortmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortmaskInput() {
    return this._tcpPortmask;
  }

  // tcp_portrange - computed: true, optional: true, required: false
  private _tcpPortrange?: string; 
  public get tcpPortrange() {
    return this.getStringAttribute('tcp_portrange');
  }
  public set tcpPortrange(value: string) {
    this._tcpPortrange = value;
  }
  public resetTcpPortrange() {
    this._tcpPortrange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortrangeInput() {
    return this._tcpPortrange;
  }

  // udp_portmask - computed: true, optional: true, required: false
  private _udpPortmask?: string; 
  public get udpPortmask() {
    return this.getStringAttribute('udp_portmask');
  }
  public set udpPortmask(value: string) {
    this._udpPortmask = value;
  }
  public resetUdpPortmask() {
    this._udpPortmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortmaskInput() {
    return this._udpPortmask;
  }

  // udp_portrange - computed: true, optional: true, required: false
  private _udpPortrange?: string; 
  public get udpPortrange() {
    return this.getStringAttribute('udp_portrange');
  }
  public set udpPortrange(value: string) {
    this._udpPortrange = value;
  }
  public resetUdpPortrange() {
    this._udpPortrange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortrangeInput() {
    return this._udpPortrange;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color: cdktf.numberToTerraform(this._color),
      comment: cdktf.stringToTerraform(this._comment),
      icmpcode: cdktf.numberToTerraform(this._icmpcode),
      icmptype: cdktf.numberToTerraform(this._icmptype),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      protocol_number: cdktf.numberToTerraform(this._protocolNumber),
      sctp_portmask: cdktf.stringToTerraform(this._sctpPortmask),
      sctp_portrange: cdktf.stringToTerraform(this._sctpPortrange),
      tcp_portmask: cdktf.stringToTerraform(this._tcpPortmask),
      tcp_portrange: cdktf.stringToTerraform(this._tcpPortrange),
      udp_portmask: cdktf.stringToTerraform(this._udpPortmask),
      udp_portrange: cdktf.stringToTerraform(this._udpPortrange),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      color: {
        value: cdktf.numberToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmpcode: {
        value: cdktf.numberToHclTerraform(this._icmpcode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmptype: {
        value: cdktf.numberToHclTerraform(this._icmptype),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_number: {
        value: cdktf.numberToHclTerraform(this._protocolNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sctp_portmask: {
        value: cdktf.stringToHclTerraform(this._sctpPortmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sctp_portrange: {
        value: cdktf.stringToHclTerraform(this._sctpPortrange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_portmask: {
        value: cdktf.stringToHclTerraform(this._tcpPortmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_portrange: {
        value: cdktf.stringToHclTerraform(this._tcpPortrange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp_portmask: {
        value: cdktf.stringToHclTerraform(this._udpPortmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp_portrange: {
        value: cdktf.stringToHclTerraform(this._udpPortrange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
