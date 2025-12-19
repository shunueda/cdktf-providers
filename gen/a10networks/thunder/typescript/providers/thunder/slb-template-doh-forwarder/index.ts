// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_doh_forwarder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateDohForwarderAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Forward valid DoH HTTP request as is, no DNS packet extraction (Bypass DoH)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_doh_forwarder#bypass_doh SlbTemplateDohForwarderA#bypass_doh}
  */
  readonly bypassDoh?: number;
  /**
  * Doh_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_doh_forwarder#doh_name SlbTemplateDohForwarderA#doh_name}
  */
  readonly dohName: string;
  /**
  * SLB VIP IPv4 address to forward DOH query (IP address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_doh_forwarder#forwarding_ipv4 SlbTemplateDohForwarderA#forwarding_ipv4}
  */
  readonly forwardingIpv4?: string;
  /**
  * SLB VIP IPv6 address to forward DOH query (IP address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_doh_forwarder#forwarding_ipv6 SlbTemplateDohForwarderA#forwarding_ipv6}
  */
  readonly forwardingIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_doh_forwarder#id SlbTemplateDohForwarderA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Bind a TCP Service Group to the template (Service Group Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_doh_forwarder#tcp_service_group SlbTemplateDohForwarderA#tcp_service_group}
  */
  readonly tcpServiceGroup?: string;
  /**
  * Bind a UDP Service Group to the template (Service Group Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_doh_forwarder#udp_service_group SlbTemplateDohForwarderA#udp_service_group}
  */
  readonly udpServiceGroup?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_doh_forwarder#uuid SlbTemplateDohForwarderA#uuid}
  */
  readonly uuid?: string;
  /**
  * Try to find this IP as a VIP in this L3v Partition and forward it internally to the VIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_doh_forwarder#v4_internal SlbTemplateDohForwarderA#v4_internal}
  */
  readonly v4Internal?: number;
  /**
  * 'tcp': Use TCP only when forwarding DNS traffic; 'udp': Use UDP only when forwarding DNS traffic; 'both': Use UDP 1st and if unreachable, retry with TCP when forwarding DNS traffic;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_doh_forwarder#v4_l4_proto SlbTemplateDohForwarderA#v4_l4_proto}
  */
  readonly v4L4Proto?: string;
  /**
  * Forwarding port number, Default is 53
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_doh_forwarder#v4_port SlbTemplateDohForwarderA#v4_port}
  */
  readonly v4Port?: number;
  /**
  * Try to find this IP as a VIP in this L3v Partition and forward it internally to the VIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_doh_forwarder#v6_internal SlbTemplateDohForwarderA#v6_internal}
  */
  readonly v6Internal?: number;
  /**
  * 'tcp': Use TCP only when forwarding DNS traffic; 'udp': Use UDP only when forwarding DNS traffic; 'both': Use UDP 1st and if unreachable, retry with TCP when forwarding DNS traffic;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_doh_forwarder#v6_l4_proto SlbTemplateDohForwarderA#v6_l4_proto}
  */
  readonly v6L4Proto?: string;
  /**
  * Forwarding port number, Default is 53
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_doh_forwarder#v6_port SlbTemplateDohForwarderA#v6_port}
  */
  readonly v6Port?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_doh_forwarder thunder_slb_template_doh_forwarder}
*/
export class SlbTemplateDohForwarderA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_doh_forwarder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateDohForwarderA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateDohForwarderA to import
  * @param importFromId The id of the existing SlbTemplateDohForwarderA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_doh_forwarder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateDohForwarderA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_doh_forwarder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_doh_forwarder thunder_slb_template_doh_forwarder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateDohForwarderAConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateDohForwarderAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_doh_forwarder',
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
    this._bypassDoh = config.bypassDoh;
    this._dohName = config.dohName;
    this._forwardingIpv4 = config.forwardingIpv4;
    this._forwardingIpv6 = config.forwardingIpv6;
    this._id = config.id;
    this._tcpServiceGroup = config.tcpServiceGroup;
    this._udpServiceGroup = config.udpServiceGroup;
    this._uuid = config.uuid;
    this._v4Internal = config.v4Internal;
    this._v4L4Proto = config.v4L4Proto;
    this._v4Port = config.v4Port;
    this._v6Internal = config.v6Internal;
    this._v6L4Proto = config.v6L4Proto;
    this._v6Port = config.v6Port;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bypass_doh - computed: false, optional: true, required: false
  private _bypassDoh?: number; 
  public get bypassDoh() {
    return this.getNumberAttribute('bypass_doh');
  }
  public set bypassDoh(value: number) {
    this._bypassDoh = value;
  }
  public resetBypassDoh() {
    this._bypassDoh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassDohInput() {
    return this._bypassDoh;
  }

  // doh_name - computed: false, optional: false, required: true
  private _dohName?: string; 
  public get dohName() {
    return this.getStringAttribute('doh_name');
  }
  public set dohName(value: string) {
    this._dohName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dohNameInput() {
    return this._dohName;
  }

  // forwarding_ipv4 - computed: false, optional: true, required: false
  private _forwardingIpv4?: string; 
  public get forwardingIpv4() {
    return this.getStringAttribute('forwarding_ipv4');
  }
  public set forwardingIpv4(value: string) {
    this._forwardingIpv4 = value;
  }
  public resetForwardingIpv4() {
    this._forwardingIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingIpv4Input() {
    return this._forwardingIpv4;
  }

  // forwarding_ipv6 - computed: false, optional: true, required: false
  private _forwardingIpv6?: string; 
  public get forwardingIpv6() {
    return this.getStringAttribute('forwarding_ipv6');
  }
  public set forwardingIpv6(value: string) {
    this._forwardingIpv6 = value;
  }
  public resetForwardingIpv6() {
    this._forwardingIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingIpv6Input() {
    return this._forwardingIpv6;
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

  // tcp_service_group - computed: false, optional: true, required: false
  private _tcpServiceGroup?: string; 
  public get tcpServiceGroup() {
    return this.getStringAttribute('tcp_service_group');
  }
  public set tcpServiceGroup(value: string) {
    this._tcpServiceGroup = value;
  }
  public resetTcpServiceGroup() {
    this._tcpServiceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpServiceGroupInput() {
    return this._tcpServiceGroup;
  }

  // udp_service_group - computed: false, optional: true, required: false
  private _udpServiceGroup?: string; 
  public get udpServiceGroup() {
    return this.getStringAttribute('udp_service_group');
  }
  public set udpServiceGroup(value: string) {
    this._udpServiceGroup = value;
  }
  public resetUdpServiceGroup() {
    this._udpServiceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpServiceGroupInput() {
    return this._udpServiceGroup;
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

  // v4_internal - computed: false, optional: true, required: false
  private _v4Internal?: number; 
  public get v4Internal() {
    return this.getNumberAttribute('v4_internal');
  }
  public set v4Internal(value: number) {
    this._v4Internal = value;
  }
  public resetV4Internal() {
    this._v4Internal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4InternalInput() {
    return this._v4Internal;
  }

  // v4_l4_proto - computed: false, optional: true, required: false
  private _v4L4Proto?: string; 
  public get v4L4Proto() {
    return this.getStringAttribute('v4_l4_proto');
  }
  public set v4L4Proto(value: string) {
    this._v4L4Proto = value;
  }
  public resetV4L4Proto() {
    this._v4L4Proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4L4ProtoInput() {
    return this._v4L4Proto;
  }

  // v4_port - computed: false, optional: true, required: false
  private _v4Port?: number; 
  public get v4Port() {
    return this.getNumberAttribute('v4_port');
  }
  public set v4Port(value: number) {
    this._v4Port = value;
  }
  public resetV4Port() {
    this._v4Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4PortInput() {
    return this._v4Port;
  }

  // v6_internal - computed: false, optional: true, required: false
  private _v6Internal?: number; 
  public get v6Internal() {
    return this.getNumberAttribute('v6_internal');
  }
  public set v6Internal(value: number) {
    this._v6Internal = value;
  }
  public resetV6Internal() {
    this._v6Internal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6InternalInput() {
    return this._v6Internal;
  }

  // v6_l4_proto - computed: false, optional: true, required: false
  private _v6L4Proto?: string; 
  public get v6L4Proto() {
    return this.getStringAttribute('v6_l4_proto');
  }
  public set v6L4Proto(value: string) {
    this._v6L4Proto = value;
  }
  public resetV6L4Proto() {
    this._v6L4Proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6L4ProtoInput() {
    return this._v6L4Proto;
  }

  // v6_port - computed: false, optional: true, required: false
  private _v6Port?: number; 
  public get v6Port() {
    return this.getNumberAttribute('v6_port');
  }
  public set v6Port(value: number) {
    this._v6Port = value;
  }
  public resetV6Port() {
    this._v6Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6PortInput() {
    return this._v6Port;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bypass_doh: cdktf.numberToTerraform(this._bypassDoh),
      doh_name: cdktf.stringToTerraform(this._dohName),
      forwarding_ipv4: cdktf.stringToTerraform(this._forwardingIpv4),
      forwarding_ipv6: cdktf.stringToTerraform(this._forwardingIpv6),
      id: cdktf.stringToTerraform(this._id),
      tcp_service_group: cdktf.stringToTerraform(this._tcpServiceGroup),
      udp_service_group: cdktf.stringToTerraform(this._udpServiceGroup),
      uuid: cdktf.stringToTerraform(this._uuid),
      v4_internal: cdktf.numberToTerraform(this._v4Internal),
      v4_l4_proto: cdktf.stringToTerraform(this._v4L4Proto),
      v4_port: cdktf.numberToTerraform(this._v4Port),
      v6_internal: cdktf.numberToTerraform(this._v6Internal),
      v6_l4_proto: cdktf.stringToTerraform(this._v6L4Proto),
      v6_port: cdktf.numberToTerraform(this._v6Port),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bypass_doh: {
        value: cdktf.numberToHclTerraform(this._bypassDoh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      doh_name: {
        value: cdktf.stringToHclTerraform(this._dohName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forwarding_ipv4: {
        value: cdktf.stringToHclTerraform(this._forwardingIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forwarding_ipv6: {
        value: cdktf.stringToHclTerraform(this._forwardingIpv6),
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
      tcp_service_group: {
        value: cdktf.stringToHclTerraform(this._tcpServiceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp_service_group: {
        value: cdktf.stringToHclTerraform(this._udpServiceGroup),
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
      v4_internal: {
        value: cdktf.numberToHclTerraform(this._v4Internal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      v4_l4_proto: {
        value: cdktf.stringToHclTerraform(this._v4L4Proto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v4_port: {
        value: cdktf.numberToHclTerraform(this._v4Port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      v6_internal: {
        value: cdktf.numberToHclTerraform(this._v6Internal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      v6_l4_proto: {
        value: cdktf.stringToHclTerraform(this._v6L4Proto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v6_port: {
        value: cdktf.numberToHclTerraform(this._v6Port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
