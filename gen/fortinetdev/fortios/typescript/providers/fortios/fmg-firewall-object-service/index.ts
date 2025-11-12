// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FmgFirewallObjectServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_service#adom FmgFirewallObjectService#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_service#category FmgFirewallObjectService#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_service#comment FmgFirewallObjectService#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_service#fqdn FmgFirewallObjectService#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_service#icmp_code FmgFirewallObjectService#icmp_code}
  */
  readonly icmpCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_service#icmp_type FmgFirewallObjectService#icmp_type}
  */
  readonly icmpType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_service#id FmgFirewallObjectService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_service#iprange FmgFirewallObjectService#iprange}
  */
  readonly iprange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_service#name FmgFirewallObjectService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_service#protocol FmgFirewallObjectService#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_service#protocol_number FmgFirewallObjectService#protocol_number}
  */
  readonly protocolNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_service#proxy FmgFirewallObjectService#proxy}
  */
  readonly proxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_service#sctp_portrange FmgFirewallObjectService#sctp_portrange}
  */
  readonly sctpPortrange?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_service#tcp_portrange FmgFirewallObjectService#tcp_portrange}
  */
  readonly tcpPortrange?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_service#udp_portrange FmgFirewallObjectService#udp_portrange}
  */
  readonly udpPortrange?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_service fortios_fmg_firewall_object_service}
*/
export class FmgFirewallObjectService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_fmg_firewall_object_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FmgFirewallObjectService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FmgFirewallObjectService to import
  * @param importFromId The id of the existing FmgFirewallObjectService that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FmgFirewallObjectService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_fmg_firewall_object_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_firewall_object_service fortios_fmg_firewall_object_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FmgFirewallObjectServiceConfig
  */
  public constructor(scope: Construct, id: string, config: FmgFirewallObjectServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_fmg_firewall_object_service',
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
    this._adom = config.adom;
    this._category = config.category;
    this._comment = config.comment;
    this._fqdn = config.fqdn;
    this._icmpCode = config.icmpCode;
    this._icmpType = config.icmpType;
    this._id = config.id;
    this._iprange = config.iprange;
    this._name = config.name;
    this._protocol = config.protocol;
    this._protocolNumber = config.protocolNumber;
    this._proxy = config.proxy;
    this._sctpPortrange = config.sctpPortrange;
    this._tcpPortrange = config.tcpPortrange;
    this._udpPortrange = config.udpPortrange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
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

  // fqdn - computed: false, optional: true, required: false
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

  // icmp_code - computed: false, optional: true, required: false
  private _icmpCode?: number; 
  public get icmpCode() {
    return this.getNumberAttribute('icmp_code');
  }
  public set icmpCode(value: number) {
    this._icmpCode = value;
  }
  public resetIcmpCode() {
    this._icmpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeInput() {
    return this._icmpCode;
  }

  // icmp_type - computed: false, optional: true, required: false
  private _icmpType?: number; 
  public get icmpType() {
    return this.getNumberAttribute('icmp_type');
  }
  public set icmpType(value: number) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
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

  // iprange - computed: false, optional: true, required: false
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

  // protocol - computed: false, optional: true, required: false
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

  // protocol_number - computed: false, optional: true, required: false
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

  // proxy - computed: false, optional: true, required: false
  private _proxy?: string; 
  public get proxy() {
    return this.getStringAttribute('proxy');
  }
  public set proxy(value: string) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // sctp_portrange - computed: false, optional: true, required: false
  private _sctpPortrange?: string[]; 
  public get sctpPortrange() {
    return this.getListAttribute('sctp_portrange');
  }
  public set sctpPortrange(value: string[]) {
    this._sctpPortrange = value;
  }
  public resetSctpPortrange() {
    this._sctpPortrange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpPortrangeInput() {
    return this._sctpPortrange;
  }

  // tcp_portrange - computed: false, optional: true, required: false
  private _tcpPortrange?: string[]; 
  public get tcpPortrange() {
    return this.getListAttribute('tcp_portrange');
  }
  public set tcpPortrange(value: string[]) {
    this._tcpPortrange = value;
  }
  public resetTcpPortrange() {
    this._tcpPortrange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortrangeInput() {
    return this._tcpPortrange;
  }

  // udp_portrange - computed: false, optional: true, required: false
  private _udpPortrange?: string[]; 
  public get udpPortrange() {
    return this.getListAttribute('udp_portrange');
  }
  public set udpPortrange(value: string[]) {
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
      adom: cdktf.stringToTerraform(this._adom),
      category: cdktf.stringToTerraform(this._category),
      comment: cdktf.stringToTerraform(this._comment),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      icmp_code: cdktf.numberToTerraform(this._icmpCode),
      icmp_type: cdktf.numberToTerraform(this._icmpType),
      id: cdktf.stringToTerraform(this._id),
      iprange: cdktf.stringToTerraform(this._iprange),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      protocol_number: cdktf.numberToTerraform(this._protocolNumber),
      proxy: cdktf.stringToTerraform(this._proxy),
      sctp_portrange: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sctpPortrange),
      tcp_portrange: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tcpPortrange),
      udp_portrange: cdktf.listMapper(cdktf.stringToTerraform, false)(this._udpPortrange),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      icmp_code: {
        value: cdktf.numberToHclTerraform(this._icmpCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmp_type: {
        value: cdktf.numberToHclTerraform(this._icmpType),
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
        value: cdktf.numberToHclTerraform(this._protocolNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy: {
        value: cdktf.stringToHclTerraform(this._proxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sctp_portrange: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sctpPortrange),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tcp_portrange: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tcpPortrange),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      udp_portrange: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._udpPortrange),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
