// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallObjectServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_service#category FirewallObjectService#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_service#comment FirewallObjectService#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_service#fqdn FirewallObjectService#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_service#icmpcode FirewallObjectService#icmpcode}
  */
  readonly icmpcode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_service#icmptype FirewallObjectService#icmptype}
  */
  readonly icmptype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_service#id FirewallObjectService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_service#iprange FirewallObjectService#iprange}
  */
  readonly iprange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_service#name FirewallObjectService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_service#protocol FirewallObjectService#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_service#protocol_number FirewallObjectService#protocol_number}
  */
  readonly protocolNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_service#sctp_portrange FirewallObjectService#sctp_portrange}
  */
  readonly sctpPortrange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_service#session_ttl FirewallObjectService#session_ttl}
  */
  readonly sessionTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_service#tcp_portrange FirewallObjectService#tcp_portrange}
  */
  readonly tcpPortrange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_service#udp_portrange FirewallObjectService#udp_portrange}
  */
  readonly udpPortrange?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_service fortios_firewall_object_service}
*/
export class FirewallObjectService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewall_object_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallObjectService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallObjectService to import
  * @param importFromId The id of the existing FirewallObjectService that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallObjectService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewall_object_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_object_service fortios_firewall_object_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallObjectServiceConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallObjectServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewall_object_service',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._comment = config.comment;
    this._fqdn = config.fqdn;
    this._icmpcode = config.icmpcode;
    this._icmptype = config.icmptype;
    this._id = config.id;
    this._iprange = config.iprange;
    this._name = config.name;
    this._protocol = config.protocol;
    this._protocolNumber = config.protocolNumber;
    this._sctpPortrange = config.sctpPortrange;
    this._sessionTtl = config.sessionTtl;
    this._tcpPortrange = config.tcpPortrange;
    this._udpPortrange = config.udpPortrange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // comment - computed: false, optional: true, required: false
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

  // fqdn - computed: true, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // icmpcode - computed: true, optional: true, required: false
  private _icmpcode?: string; 
  public get icmpcode() {
    return this.getStringAttribute('icmpcode');
  }
  public set icmpcode(value: string) {
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
  private _icmptype?: string; 
  public get icmptype() {
    return this.getStringAttribute('icmptype');
  }
  public set icmptype(value: string) {
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

  // iprange - computed: true, optional: true, required: false
  private _iprange?: string; 
  public get iprange() {
    return this.getStringAttribute('iprange');
  }
  public set iprange(value: string) {
    this._iprange = value;
  }
  public resetIprange() {
    this._iprange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iprangeInput() {
    return this._iprange;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_number - computed: true, optional: true, required: false
  private _protocolNumber?: string; 
  public get protocolNumber() {
    return this.getStringAttribute('protocol_number');
  }
  public set protocolNumber(value: string) {
    this._protocolNumber = value;
  }
  public resetProtocolNumber() {
    this._protocolNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolNumberInput() {
    return this._protocolNumber;
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

  // session_ttl - computed: true, optional: true, required: false
  private _sessionTtl?: string; 
  public get sessionTtl() {
    return this.getStringAttribute('session_ttl');
  }
  public set sessionTtl(value: string) {
    this._sessionTtl = value;
  }
  public resetSessionTtl() {
    this._sessionTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTtlInput() {
    return this._sessionTtl;
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
      category: cdktf.stringToTerraform(this._category),
      comment: cdktf.stringToTerraform(this._comment),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      icmpcode: cdktf.stringToTerraform(this._icmpcode),
      icmptype: cdktf.stringToTerraform(this._icmptype),
      id: cdktf.stringToTerraform(this._id),
      iprange: cdktf.stringToTerraform(this._iprange),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      protocol_number: cdktf.stringToTerraform(this._protocolNumber),
      sctp_portrange: cdktf.stringToTerraform(this._sctpPortrange),
      session_ttl: cdktf.stringToTerraform(this._sessionTtl),
      tcp_portrange: cdktf.stringToTerraform(this._tcpPortrange),
      udp_portrange: cdktf.stringToTerraform(this._udpPortrange),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fqdn: {
        value: cdktf.stringToHclTerraform(this._fqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmpcode: {
        value: cdktf.stringToHclTerraform(this._icmpcode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmptype: {
        value: cdktf.stringToHclTerraform(this._icmptype),
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
      iprange: {
        value: cdktf.stringToHclTerraform(this._iprange),
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
        value: cdktf.stringToHclTerraform(this._protocolNumber),
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
      session_ttl: {
        value: cdktf.stringToHclTerraform(this._sessionTtl),
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
