// https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/network_security_groups_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkSecurityGroupsRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the security group rule. Example: 'Allow incoming SSH traffic'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/network_security_groups_rules#description NetworkSecurityGroupsRules#description}
  */
  readonly description?: string;
  /**
  * Direction of traffic flow. Allowed values: 'ingress' or 'egress'. Example: 'ingress'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/network_security_groups_rules#direction NetworkSecurityGroupsRules#direction}
  */
  readonly direction: string;
  /**
  * Network protocol version. Allowed values: 'IPv4' or 'IPv6'. Example: 'IPv4'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/network_security_groups_rules#ethertype NetworkSecurityGroupsRules#ethertype}
  */
  readonly ethertype: string;
  /**
  * Maximum port number in the range. Valid values: 1-65535. Example: 22
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/network_security_groups_rules#port_range_max NetworkSecurityGroupsRules#port_range_max}
  */
  readonly portRangeMax?: number;
  /**
  * Minimum port number in the range. Valid values: 1-65535. Example: 22
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/network_security_groups_rules#port_range_min NetworkSecurityGroupsRules#port_range_min}
  */
  readonly portRangeMin?: number;
  /**
  * IP protocol. Allowed values: tcp, udp, icmp, icmpv6. Example: 'tcp'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/network_security_groups_rules#protocol NetworkSecurityGroupsRules#protocol}
  */
  readonly protocol?: string;
  /**
  * CIDR notation of remote IPv4 and IPv6 range. Example: '192.168.1.0/24', '0.0.0.0/0', '::/0' or '2001:db8::/32'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/network_security_groups_rules#remote_ip_prefix NetworkSecurityGroupsRules#remote_ip_prefix}
  */
  readonly remoteIpPrefix?: string;
  /**
  * ID of the security group to which this rule will be added. Example: 'sg-0123456789abcdef0'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/network_security_groups_rules#security_group_id NetworkSecurityGroupsRules#security_group_id}
  */
  readonly securityGroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/network_security_groups_rules mgc_network_security_groups_rules}
*/
export class NetworkSecurityGroupsRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mgc_network_security_groups_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkSecurityGroupsRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkSecurityGroupsRules to import
  * @param importFromId The id of the existing NetworkSecurityGroupsRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/network_security_groups_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkSecurityGroupsRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mgc_network_security_groups_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magalucloud/mgc/0.41.0/docs/resources/network_security_groups_rules mgc_network_security_groups_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkSecurityGroupsRulesConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkSecurityGroupsRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'mgc_network_security_groups_rules',
      terraformGeneratorMetadata: {
        providerName: 'mgc',
        providerVersion: '0.41.0',
        providerVersionConstraint: '0.41.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._direction = config.direction;
    this._ethertype = config.ethertype;
    this._portRangeMax = config.portRangeMax;
    this._portRangeMin = config.portRangeMin;
    this._protocol = config.protocol;
    this._remoteIpPrefix = config.remoteIpPrefix;
    this._securityGroupId = config.securityGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // ethertype - computed: false, optional: false, required: true
  private _ethertype?: string; 
  public get ethertype() {
    return this.getStringAttribute('ethertype');
  }
  public set ethertype(value: string) {
    this._ethertype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ethertypeInput() {
    return this._ethertype;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // port_range_max - computed: false, optional: true, required: false
  private _portRangeMax?: number; 
  public get portRangeMax() {
    return this.getNumberAttribute('port_range_max');
  }
  public set portRangeMax(value: number) {
    this._portRangeMax = value;
  }
  public resetPortRangeMax() {
    this._portRangeMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeMaxInput() {
    return this._portRangeMax;
  }

  // port_range_min - computed: false, optional: true, required: false
  private _portRangeMin?: number; 
  public get portRangeMin() {
    return this.getNumberAttribute('port_range_min');
  }
  public set portRangeMin(value: number) {
    this._portRangeMin = value;
  }
  public resetPortRangeMin() {
    this._portRangeMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeMinInput() {
    return this._portRangeMin;
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

  // remote_ip_prefix - computed: false, optional: true, required: false
  private _remoteIpPrefix?: string; 
  public get remoteIpPrefix() {
    return this.getStringAttribute('remote_ip_prefix');
  }
  public set remoteIpPrefix(value: string) {
    this._remoteIpPrefix = value;
  }
  public resetRemoteIpPrefix() {
    this._remoteIpPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpPrefixInput() {
    return this._remoteIpPrefix;
  }

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      direction: cdktf.stringToTerraform(this._direction),
      ethertype: cdktf.stringToTerraform(this._ethertype),
      port_range_max: cdktf.numberToTerraform(this._portRangeMax),
      port_range_min: cdktf.numberToTerraform(this._portRangeMin),
      protocol: cdktf.stringToTerraform(this._protocol),
      remote_ip_prefix: cdktf.stringToTerraform(this._remoteIpPrefix),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ethertype: {
        value: cdktf.stringToHclTerraform(this._ethertype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_range_max: {
        value: cdktf.numberToHclTerraform(this._portRangeMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_range_min: {
        value: cdktf.numberToHclTerraform(this._portRangeMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_ip_prefix: {
        value: cdktf.stringToHclTerraform(this._remoteIpPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
