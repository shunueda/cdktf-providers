// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SegmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The BGP ASN for the segment. Default value is `65514`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment#asn Segment#asn}
  */
  readonly asn?: number;
  /**
  * The list of CIDR blocks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment#cidrs Segment#cidrs}
  */
  readonly cidrs: string[];
  /**
  * The description of the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment#description Segment#description}
  */
  readonly description?: string;
  /**
  * Enable IPv6 to IPv4 translation in the segment for internet application traffic. Default is `false`. (**BETA**)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment#enable_ipv6_to_ipv4_translation Segment#enable_ipv6_to_ipv4_translation}
  */
  readonly enableIpv6ToIpv4Translation?: boolean | cdktf.IResolvable;
  /**
  * The IP of the DNS server used within the segment. This DNS server may be used by the Alkira CXP to resolve the names of LDAP servers for example which are configured on the Remote Access Connector. (**BETA**)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment#enterprise_dns_server_ip Segment#enterprise_dns_server_ip}
  */
  readonly enterpriseDnsServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment#id Segment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment#name Segment#name}
  */
  readonly name: string;
  /**
  * Default value is `false`. When this is set to `true`. Alkira reserves public IPs which can be used to create underlay tunnels between an external service and Alkira. For example the reserved public IPs may be used to create tunnels to the Akamai Prolexic. (**BETA**)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment#reserve_public_ips Segment#reserve_public_ips}
  */
  readonly reservePublicIps?: boolean | cdktf.IResolvable;
  /**
  * Alkira reserves public IPs which can be used to create underlay tunnels between an external service to the specified Alkira CXPs. (**BETA**)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment#reserve_public_ips_for_cxps Segment#reserve_public_ips_for_cxps}
  */
  readonly reservePublicIpsForCxps?: string[];
  /**
  * Enable traffic distribution in a segment to instances in a service using source IP hashing. When enabled, traffic will be hashed and distributed only by source IP of the packet. Default behavior is based on 5 tuples in a network packet. Default is `false`. (**BETA**)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment#service_traffic_distribution Segment#service_traffic_distribution}
  */
  readonly serviceTrafficDistribution?: boolean | cdktf.IResolvable;
  /**
  * The end IP address of IPv4 pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment#src_ipv4_pool_end_ip Segment#src_ipv4_pool_end_ip}
  */
  readonly srcIpv4PoolEndIp?: string;
  /**
  * The start IP address of IPv4 pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment#src_ipv4_pool_start_ip Segment#src_ipv4_pool_start_ip}
  */
  readonly srcIpv4PoolStartIp?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment alkira_segment}
*/
export class Segment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_segment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Segment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Segment to import
  * @param importFromId The id of the existing Segment that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Segment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_segment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/segment alkira_segment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SegmentConfig
  */
  public constructor(scope: Construct, id: string, config: SegmentConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_segment',
      terraformGeneratorMetadata: {
        providerName: 'alkira',
        providerVersion: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asn = config.asn;
    this._cidrs = config.cidrs;
    this._description = config.description;
    this._enableIpv6ToIpv4Translation = config.enableIpv6ToIpv4Translation;
    this._enterpriseDnsServerIp = config.enterpriseDnsServerIp;
    this._id = config.id;
    this._name = config.name;
    this._reservePublicIps = config.reservePublicIps;
    this._reservePublicIpsForCxps = config.reservePublicIpsForCxps;
    this._serviceTrafficDistribution = config.serviceTrafficDistribution;
    this._srcIpv4PoolEndIp = config.srcIpv4PoolEndIp;
    this._srcIpv4PoolStartIp = config.srcIpv4PoolStartIp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asn - computed: false, optional: true, required: false
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  public resetAsn() {
    this._asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // cidrs - computed: false, optional: false, required: true
  private _cidrs?: string[]; 
  public get cidrs() {
    return this.getListAttribute('cidrs');
  }
  public set cidrs(value: string[]) {
    this._cidrs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrsInput() {
    return this._cidrs;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enable_ipv6_to_ipv4_translation - computed: false, optional: true, required: false
  private _enableIpv6ToIpv4Translation?: boolean | cdktf.IResolvable; 
  public get enableIpv6ToIpv4Translation() {
    return this.getBooleanAttribute('enable_ipv6_to_ipv4_translation');
  }
  public set enableIpv6ToIpv4Translation(value: boolean | cdktf.IResolvable) {
    this._enableIpv6ToIpv4Translation = value;
  }
  public resetEnableIpv6ToIpv4Translation() {
    this._enableIpv6ToIpv4Translation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpv6ToIpv4TranslationInput() {
    return this._enableIpv6ToIpv4Translation;
  }

  // enterprise_dns_server_ip - computed: false, optional: true, required: false
  private _enterpriseDnsServerIp?: string; 
  public get enterpriseDnsServerIp() {
    return this.getStringAttribute('enterprise_dns_server_ip');
  }
  public set enterpriseDnsServerIp(value: string) {
    this._enterpriseDnsServerIp = value;
  }
  public resetEnterpriseDnsServerIp() {
    this._enterpriseDnsServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseDnsServerIpInput() {
    return this._enterpriseDnsServerIp;
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

  // provision_state - computed: true, optional: false, required: false
  public get provisionState() {
    return this.getStringAttribute('provision_state');
  }

  // reserve_public_ips - computed: false, optional: true, required: false
  private _reservePublicIps?: boolean | cdktf.IResolvable; 
  public get reservePublicIps() {
    return this.getBooleanAttribute('reserve_public_ips');
  }
  public set reservePublicIps(value: boolean | cdktf.IResolvable) {
    this._reservePublicIps = value;
  }
  public resetReservePublicIps() {
    this._reservePublicIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservePublicIpsInput() {
    return this._reservePublicIps;
  }

  // reserve_public_ips_for_cxps - computed: false, optional: true, required: false
  private _reservePublicIpsForCxps?: string[]; 
  public get reservePublicIpsForCxps() {
    return cdktf.Fn.tolist(this.getListAttribute('reserve_public_ips_for_cxps'));
  }
  public set reservePublicIpsForCxps(value: string[]) {
    this._reservePublicIpsForCxps = value;
  }
  public resetReservePublicIpsForCxps() {
    this._reservePublicIpsForCxps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservePublicIpsForCxpsInput() {
    return this._reservePublicIpsForCxps;
  }

  // service_traffic_distribution - computed: false, optional: true, required: false
  private _serviceTrafficDistribution?: boolean | cdktf.IResolvable; 
  public get serviceTrafficDistribution() {
    return this.getBooleanAttribute('service_traffic_distribution');
  }
  public set serviceTrafficDistribution(value: boolean | cdktf.IResolvable) {
    this._serviceTrafficDistribution = value;
  }
  public resetServiceTrafficDistribution() {
    this._serviceTrafficDistribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTrafficDistributionInput() {
    return this._serviceTrafficDistribution;
  }

  // src_ipv4_pool_end_ip - computed: false, optional: true, required: false
  private _srcIpv4PoolEndIp?: string; 
  public get srcIpv4PoolEndIp() {
    return this.getStringAttribute('src_ipv4_pool_end_ip');
  }
  public set srcIpv4PoolEndIp(value: string) {
    this._srcIpv4PoolEndIp = value;
  }
  public resetSrcIpv4PoolEndIp() {
    this._srcIpv4PoolEndIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv4PoolEndIpInput() {
    return this._srcIpv4PoolEndIp;
  }

  // src_ipv4_pool_start_ip - computed: false, optional: true, required: false
  private _srcIpv4PoolStartIp?: string; 
  public get srcIpv4PoolStartIp() {
    return this.getStringAttribute('src_ipv4_pool_start_ip');
  }
  public set srcIpv4PoolStartIp(value: string) {
    this._srcIpv4PoolStartIp = value;
  }
  public resetSrcIpv4PoolStartIp() {
    this._srcIpv4PoolStartIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv4PoolStartIpInput() {
    return this._srcIpv4PoolStartIp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asn: cdktf.numberToTerraform(this._asn),
      cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cidrs),
      description: cdktf.stringToTerraform(this._description),
      enable_ipv6_to_ipv4_translation: cdktf.booleanToTerraform(this._enableIpv6ToIpv4Translation),
      enterprise_dns_server_ip: cdktf.stringToTerraform(this._enterpriseDnsServerIp),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      reserve_public_ips: cdktf.booleanToTerraform(this._reservePublicIps),
      reserve_public_ips_for_cxps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._reservePublicIpsForCxps),
      service_traffic_distribution: cdktf.booleanToTerraform(this._serviceTrafficDistribution),
      src_ipv4_pool_end_ip: cdktf.stringToTerraform(this._srcIpv4PoolEndIp),
      src_ipv4_pool_start_ip: cdktf.stringToTerraform(this._srcIpv4PoolStartIp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asn: {
        value: cdktf.numberToHclTerraform(this._asn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cidrs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_ipv6_to_ipv4_translation: {
        value: cdktf.booleanToHclTerraform(this._enableIpv6ToIpv4Translation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enterprise_dns_server_ip: {
        value: cdktf.stringToHclTerraform(this._enterpriseDnsServerIp),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reserve_public_ips: {
        value: cdktf.booleanToHclTerraform(this._reservePublicIps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reserve_public_ips_for_cxps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._reservePublicIpsForCxps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      service_traffic_distribution: {
        value: cdktf.booleanToHclTerraform(this._serviceTrafficDistribution),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      src_ipv4_pool_end_ip: {
        value: cdktf.stringToHclTerraform(this._srcIpv4PoolEndIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_ipv4_pool_start_ip: {
        value: cdktf.stringToHclTerraform(this._srcIpv4PoolStartIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
