// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_per_service_szp_entry_limit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosProtectionPerServiceSzpEntryLimitAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Szp limit for port / port-range dns-tcp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_per_service_szp_entry_limit#dns_tcp_limit DdosProtectionPerServiceSzpEntryLimitA#dns_tcp_limit}
  */
  readonly dnsTcpLimit?: number;
  /**
  * Szp limit for port / port-range dns-udp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_per_service_szp_entry_limit#dns_udp_limit DdosProtectionPerServiceSzpEntryLimitA#dns_udp_limit}
  */
  readonly dnsUdpLimit?: number;
  /**
  * Szp limit for port / port-range http
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_per_service_szp_entry_limit#http_limit DdosProtectionPerServiceSzpEntryLimitA#http_limit}
  */
  readonly httpLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_per_service_szp_entry_limit#id DdosProtectionPerServiceSzpEntryLimitA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Szp limit for custom ip-proto
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_per_service_szp_entry_limit#ip_proto_custom_limit DdosProtectionPerServiceSzpEntryLimitA#ip_proto_custom_limit}
  */
  readonly ipProtoCustomLimit?: number;
  /**
  * Szp limit for ip-proto gre
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_per_service_szp_entry_limit#ip_proto_gre_limit DdosProtectionPerServiceSzpEntryLimitA#ip_proto_gre_limit}
  */
  readonly ipProtoGreLimit?: number;
  /**
  * Szp limit for ip-proto icmp-v4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_per_service_szp_entry_limit#ip_proto_icmp_v4_limit DdosProtectionPerServiceSzpEntryLimitA#ip_proto_icmp_v4_limit}
  */
  readonly ipProtoIcmpV4Limit?: number;
  /**
  * Szp limit for ip-proto icmp-v6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_per_service_szp_entry_limit#ip_proto_icmp_v6_limit DdosProtectionPerServiceSzpEntryLimitA#ip_proto_icmp_v6_limit}
  */
  readonly ipProtoIcmpV6Limit?: number;
  /**
  * Szp limit for ip-proto ipv4-encap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_per_service_szp_entry_limit#ip_proto_ipv4_encap_limit DdosProtectionPerServiceSzpEntryLimitA#ip_proto_ipv4_encap_limit}
  */
  readonly ipProtoIpv4EncapLimit?: number;
  /**
  * Szp limit for ip-proto ipv6-encap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_per_service_szp_entry_limit#ip_proto_ipv6_encap_limit DdosProtectionPerServiceSzpEntryLimitA#ip_proto_ipv6_encap_limit}
  */
  readonly ipProtoIpv6EncapLimit?: number;
  /**
  * Szp limit for ip-proto other
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_per_service_szp_entry_limit#ip_proto_other_limit DdosProtectionPerServiceSzpEntryLimitA#ip_proto_other_limit}
  */
  readonly ipProtoOtherLimit?: number;
  /**
  * Szp limit for port / port-range quic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_per_service_szp_entry_limit#quic_limit DdosProtectionPerServiceSzpEntryLimitA#quic_limit}
  */
  readonly quicLimit?: number;
  /**
  * Szp limit for port / port-range sip-tcp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_per_service_szp_entry_limit#sip_tcp_limit DdosProtectionPerServiceSzpEntryLimitA#sip_tcp_limit}
  */
  readonly sipTcpLimit?: number;
  /**
  * Szp limit for port / port-range sip-udp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_per_service_szp_entry_limit#sip_udp_limit DdosProtectionPerServiceSzpEntryLimitA#sip_udp_limit}
  */
  readonly sipUdpLimit?: number;
  /**
  * Szp limit for port / port-range ssl-l4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_per_service_szp_entry_limit#ssl_l4_limit DdosProtectionPerServiceSzpEntryLimitA#ssl_l4_limit}
  */
  readonly sslL4Limit?: number;
  /**
  * Szp limit for port / port-range tcp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_per_service_szp_entry_limit#tcp_limit DdosProtectionPerServiceSzpEntryLimitA#tcp_limit}
  */
  readonly tcpLimit?: number;
  /**
  * Szp limit for port / port-range udp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_per_service_szp_entry_limit#udp_limit DdosProtectionPerServiceSzpEntryLimitA#udp_limit}
  */
  readonly udpLimit?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_per_service_szp_entry_limit#uuid DdosProtectionPerServiceSzpEntryLimitA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_per_service_szp_entry_limit thunder_ddos_protection_per_service_szp_entry_limit}
*/
export class DdosProtectionPerServiceSzpEntryLimitA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_protection_per_service_szp_entry_limit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosProtectionPerServiceSzpEntryLimitA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosProtectionPerServiceSzpEntryLimitA to import
  * @param importFromId The id of the existing DdosProtectionPerServiceSzpEntryLimitA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_per_service_szp_entry_limit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosProtectionPerServiceSzpEntryLimitA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_protection_per_service_szp_entry_limit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_per_service_szp_entry_limit thunder_ddos_protection_per_service_szp_entry_limit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosProtectionPerServiceSzpEntryLimitAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DdosProtectionPerServiceSzpEntryLimitAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_protection_per_service_szp_entry_limit',
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
    this._dnsTcpLimit = config.dnsTcpLimit;
    this._dnsUdpLimit = config.dnsUdpLimit;
    this._httpLimit = config.httpLimit;
    this._id = config.id;
    this._ipProtoCustomLimit = config.ipProtoCustomLimit;
    this._ipProtoGreLimit = config.ipProtoGreLimit;
    this._ipProtoIcmpV4Limit = config.ipProtoIcmpV4Limit;
    this._ipProtoIcmpV6Limit = config.ipProtoIcmpV6Limit;
    this._ipProtoIpv4EncapLimit = config.ipProtoIpv4EncapLimit;
    this._ipProtoIpv6EncapLimit = config.ipProtoIpv6EncapLimit;
    this._ipProtoOtherLimit = config.ipProtoOtherLimit;
    this._quicLimit = config.quicLimit;
    this._sipTcpLimit = config.sipTcpLimit;
    this._sipUdpLimit = config.sipUdpLimit;
    this._sslL4Limit = config.sslL4Limit;
    this._tcpLimit = config.tcpLimit;
    this._udpLimit = config.udpLimit;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_tcp_limit - computed: false, optional: true, required: false
  private _dnsTcpLimit?: number; 
  public get dnsTcpLimit() {
    return this.getNumberAttribute('dns_tcp_limit');
  }
  public set dnsTcpLimit(value: number) {
    this._dnsTcpLimit = value;
  }
  public resetDnsTcpLimit() {
    this._dnsTcpLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTcpLimitInput() {
    return this._dnsTcpLimit;
  }

  // dns_udp_limit - computed: false, optional: true, required: false
  private _dnsUdpLimit?: number; 
  public get dnsUdpLimit() {
    return this.getNumberAttribute('dns_udp_limit');
  }
  public set dnsUdpLimit(value: number) {
    this._dnsUdpLimit = value;
  }
  public resetDnsUdpLimit() {
    this._dnsUdpLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsUdpLimitInput() {
    return this._dnsUdpLimit;
  }

  // http_limit - computed: false, optional: true, required: false
  private _httpLimit?: number; 
  public get httpLimit() {
    return this.getNumberAttribute('http_limit');
  }
  public set httpLimit(value: number) {
    this._httpLimit = value;
  }
  public resetHttpLimit() {
    this._httpLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpLimitInput() {
    return this._httpLimit;
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

  // ip_proto_custom_limit - computed: false, optional: true, required: false
  private _ipProtoCustomLimit?: number; 
  public get ipProtoCustomLimit() {
    return this.getNumberAttribute('ip_proto_custom_limit');
  }
  public set ipProtoCustomLimit(value: number) {
    this._ipProtoCustomLimit = value;
  }
  public resetIpProtoCustomLimit() {
    this._ipProtoCustomLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtoCustomLimitInput() {
    return this._ipProtoCustomLimit;
  }

  // ip_proto_gre_limit - computed: false, optional: true, required: false
  private _ipProtoGreLimit?: number; 
  public get ipProtoGreLimit() {
    return this.getNumberAttribute('ip_proto_gre_limit');
  }
  public set ipProtoGreLimit(value: number) {
    this._ipProtoGreLimit = value;
  }
  public resetIpProtoGreLimit() {
    this._ipProtoGreLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtoGreLimitInput() {
    return this._ipProtoGreLimit;
  }

  // ip_proto_icmp_v4_limit - computed: false, optional: true, required: false
  private _ipProtoIcmpV4Limit?: number; 
  public get ipProtoIcmpV4Limit() {
    return this.getNumberAttribute('ip_proto_icmp_v4_limit');
  }
  public set ipProtoIcmpV4Limit(value: number) {
    this._ipProtoIcmpV4Limit = value;
  }
  public resetIpProtoIcmpV4Limit() {
    this._ipProtoIcmpV4Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtoIcmpV4LimitInput() {
    return this._ipProtoIcmpV4Limit;
  }

  // ip_proto_icmp_v6_limit - computed: false, optional: true, required: false
  private _ipProtoIcmpV6Limit?: number; 
  public get ipProtoIcmpV6Limit() {
    return this.getNumberAttribute('ip_proto_icmp_v6_limit');
  }
  public set ipProtoIcmpV6Limit(value: number) {
    this._ipProtoIcmpV6Limit = value;
  }
  public resetIpProtoIcmpV6Limit() {
    this._ipProtoIcmpV6Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtoIcmpV6LimitInput() {
    return this._ipProtoIcmpV6Limit;
  }

  // ip_proto_ipv4_encap_limit - computed: false, optional: true, required: false
  private _ipProtoIpv4EncapLimit?: number; 
  public get ipProtoIpv4EncapLimit() {
    return this.getNumberAttribute('ip_proto_ipv4_encap_limit');
  }
  public set ipProtoIpv4EncapLimit(value: number) {
    this._ipProtoIpv4EncapLimit = value;
  }
  public resetIpProtoIpv4EncapLimit() {
    this._ipProtoIpv4EncapLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtoIpv4EncapLimitInput() {
    return this._ipProtoIpv4EncapLimit;
  }

  // ip_proto_ipv6_encap_limit - computed: false, optional: true, required: false
  private _ipProtoIpv6EncapLimit?: number; 
  public get ipProtoIpv6EncapLimit() {
    return this.getNumberAttribute('ip_proto_ipv6_encap_limit');
  }
  public set ipProtoIpv6EncapLimit(value: number) {
    this._ipProtoIpv6EncapLimit = value;
  }
  public resetIpProtoIpv6EncapLimit() {
    this._ipProtoIpv6EncapLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtoIpv6EncapLimitInput() {
    return this._ipProtoIpv6EncapLimit;
  }

  // ip_proto_other_limit - computed: false, optional: true, required: false
  private _ipProtoOtherLimit?: number; 
  public get ipProtoOtherLimit() {
    return this.getNumberAttribute('ip_proto_other_limit');
  }
  public set ipProtoOtherLimit(value: number) {
    this._ipProtoOtherLimit = value;
  }
  public resetIpProtoOtherLimit() {
    this._ipProtoOtherLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtoOtherLimitInput() {
    return this._ipProtoOtherLimit;
  }

  // quic_limit - computed: false, optional: true, required: false
  private _quicLimit?: number; 
  public get quicLimit() {
    return this.getNumberAttribute('quic_limit');
  }
  public set quicLimit(value: number) {
    this._quicLimit = value;
  }
  public resetQuicLimit() {
    this._quicLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicLimitInput() {
    return this._quicLimit;
  }

  // sip_tcp_limit - computed: false, optional: true, required: false
  private _sipTcpLimit?: number; 
  public get sipTcpLimit() {
    return this.getNumberAttribute('sip_tcp_limit');
  }
  public set sipTcpLimit(value: number) {
    this._sipTcpLimit = value;
  }
  public resetSipTcpLimit() {
    this._sipTcpLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipTcpLimitInput() {
    return this._sipTcpLimit;
  }

  // sip_udp_limit - computed: false, optional: true, required: false
  private _sipUdpLimit?: number; 
  public get sipUdpLimit() {
    return this.getNumberAttribute('sip_udp_limit');
  }
  public set sipUdpLimit(value: number) {
    this._sipUdpLimit = value;
  }
  public resetSipUdpLimit() {
    this._sipUdpLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipUdpLimitInput() {
    return this._sipUdpLimit;
  }

  // ssl_l4_limit - computed: false, optional: true, required: false
  private _sslL4Limit?: number; 
  public get sslL4Limit() {
    return this.getNumberAttribute('ssl_l4_limit');
  }
  public set sslL4Limit(value: number) {
    this._sslL4Limit = value;
  }
  public resetSslL4Limit() {
    this._sslL4Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4LimitInput() {
    return this._sslL4Limit;
  }

  // tcp_limit - computed: false, optional: true, required: false
  private _tcpLimit?: number; 
  public get tcpLimit() {
    return this.getNumberAttribute('tcp_limit');
  }
  public set tcpLimit(value: number) {
    this._tcpLimit = value;
  }
  public resetTcpLimit() {
    this._tcpLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpLimitInput() {
    return this._tcpLimit;
  }

  // udp_limit - computed: false, optional: true, required: false
  private _udpLimit?: number; 
  public get udpLimit() {
    return this.getNumberAttribute('udp_limit');
  }
  public set udpLimit(value: number) {
    this._udpLimit = value;
  }
  public resetUdpLimit() {
    this._udpLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpLimitInput() {
    return this._udpLimit;
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
      dns_tcp_limit: cdktf.numberToTerraform(this._dnsTcpLimit),
      dns_udp_limit: cdktf.numberToTerraform(this._dnsUdpLimit),
      http_limit: cdktf.numberToTerraform(this._httpLimit),
      id: cdktf.stringToTerraform(this._id),
      ip_proto_custom_limit: cdktf.numberToTerraform(this._ipProtoCustomLimit),
      ip_proto_gre_limit: cdktf.numberToTerraform(this._ipProtoGreLimit),
      ip_proto_icmp_v4_limit: cdktf.numberToTerraform(this._ipProtoIcmpV4Limit),
      ip_proto_icmp_v6_limit: cdktf.numberToTerraform(this._ipProtoIcmpV6Limit),
      ip_proto_ipv4_encap_limit: cdktf.numberToTerraform(this._ipProtoIpv4EncapLimit),
      ip_proto_ipv6_encap_limit: cdktf.numberToTerraform(this._ipProtoIpv6EncapLimit),
      ip_proto_other_limit: cdktf.numberToTerraform(this._ipProtoOtherLimit),
      quic_limit: cdktf.numberToTerraform(this._quicLimit),
      sip_tcp_limit: cdktf.numberToTerraform(this._sipTcpLimit),
      sip_udp_limit: cdktf.numberToTerraform(this._sipUdpLimit),
      ssl_l4_limit: cdktf.numberToTerraform(this._sslL4Limit),
      tcp_limit: cdktf.numberToTerraform(this._tcpLimit),
      udp_limit: cdktf.numberToTerraform(this._udpLimit),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_tcp_limit: {
        value: cdktf.numberToHclTerraform(this._dnsTcpLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_udp_limit: {
        value: cdktf.numberToHclTerraform(this._dnsUdpLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_limit: {
        value: cdktf.numberToHclTerraform(this._httpLimit),
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
      ip_proto_custom_limit: {
        value: cdktf.numberToHclTerraform(this._ipProtoCustomLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_proto_gre_limit: {
        value: cdktf.numberToHclTerraform(this._ipProtoGreLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_proto_icmp_v4_limit: {
        value: cdktf.numberToHclTerraform(this._ipProtoIcmpV4Limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_proto_icmp_v6_limit: {
        value: cdktf.numberToHclTerraform(this._ipProtoIcmpV6Limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_proto_ipv4_encap_limit: {
        value: cdktf.numberToHclTerraform(this._ipProtoIpv4EncapLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_proto_ipv6_encap_limit: {
        value: cdktf.numberToHclTerraform(this._ipProtoIpv6EncapLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_proto_other_limit: {
        value: cdktf.numberToHclTerraform(this._ipProtoOtherLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      quic_limit: {
        value: cdktf.numberToHclTerraform(this._quicLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sip_tcp_limit: {
        value: cdktf.numberToHclTerraform(this._sipTcpLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sip_udp_limit: {
        value: cdktf.numberToHclTerraform(this._sipUdpLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_l4_limit: {
        value: cdktf.numberToHclTerraform(this._sslL4Limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_limit: {
        value: cdktf.numberToHclTerraform(this._tcpLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_limit: {
        value: cdktf.numberToHclTerraform(this._udpLimit),
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
