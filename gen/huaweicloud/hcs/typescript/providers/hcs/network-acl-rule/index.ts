// https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/network_acl_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkAclRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/network_acl_rule#action NetworkAclRule#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/network_acl_rule#description NetworkAclRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/network_acl_rule#destination_ip_address NetworkAclRule#destination_ip_address}
  */
  readonly destinationIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/network_acl_rule#destination_ip_addresses NetworkAclRule#destination_ip_addresses}
  */
  readonly destinationIpAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/network_acl_rule#destination_port NetworkAclRule#destination_port}
  */
  readonly destinationPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/network_acl_rule#destination_ports NetworkAclRule#destination_ports}
  */
  readonly destinationPorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/network_acl_rule#enabled NetworkAclRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/network_acl_rule#id NetworkAclRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/network_acl_rule#ip_version NetworkAclRule#ip_version}
  */
  readonly ipVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/network_acl_rule#name NetworkAclRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/network_acl_rule#protocol NetworkAclRule#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/network_acl_rule#region NetworkAclRule#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/network_acl_rule#source_ip_address NetworkAclRule#source_ip_address}
  */
  readonly sourceIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/network_acl_rule#source_ip_addresses NetworkAclRule#source_ip_addresses}
  */
  readonly sourceIpAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/network_acl_rule#source_port NetworkAclRule#source_port}
  */
  readonly sourcePort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/network_acl_rule#source_ports NetworkAclRule#source_ports}
  */
  readonly sourcePorts?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/network_acl_rule hcs_network_acl_rule}
*/
export class NetworkAclRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcs_network_acl_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkAclRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkAclRule to import
  * @param importFromId The id of the existing NetworkAclRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/network_acl_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkAclRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcs_network_acl_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/network_acl_rule hcs_network_acl_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkAclRuleConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkAclRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'hcs_network_acl_rule',
      terraformGeneratorMetadata: {
        providerName: 'hcs',
        providerVersion: '2.4.21',
        providerVersionConstraint: '2.4.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._description = config.description;
    this._destinationIpAddress = config.destinationIpAddress;
    this._destinationIpAddresses = config.destinationIpAddresses;
    this._destinationPort = config.destinationPort;
    this._destinationPorts = config.destinationPorts;
    this._enabled = config.enabled;
    this._id = config.id;
    this._ipVersion = config.ipVersion;
    this._name = config.name;
    this._protocol = config.protocol;
    this._region = config.region;
    this._sourceIpAddress = config.sourceIpAddress;
    this._sourceIpAddresses = config.sourceIpAddresses;
    this._sourcePort = config.sourcePort;
    this._sourcePorts = config.sourcePorts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // destination_ip_address - computed: false, optional: true, required: false
  private _destinationIpAddress?: string; 
  public get destinationIpAddress() {
    return this.getStringAttribute('destination_ip_address');
  }
  public set destinationIpAddress(value: string) {
    this._destinationIpAddress = value;
  }
  public resetDestinationIpAddress() {
    this._destinationIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpAddressInput() {
    return this._destinationIpAddress;
  }

  // destination_ip_addresses - computed: false, optional: true, required: false
  private _destinationIpAddresses?: string[]; 
  public get destinationIpAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_ip_addresses'));
  }
  public set destinationIpAddresses(value: string[]) {
    this._destinationIpAddresses = value;
  }
  public resetDestinationIpAddresses() {
    this._destinationIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpAddressesInput() {
    return this._destinationIpAddresses;
  }

  // destination_port - computed: false, optional: true, required: false
  private _destinationPort?: string; 
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
  }
  public set destinationPort(value: string) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // destination_ports - computed: false, optional: true, required: false
  private _destinationPorts?: string[]; 
  public get destinationPorts() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_ports'));
  }
  public set destinationPorts(value: string[]) {
    this._destinationPorts = value;
  }
  public resetDestinationPorts() {
    this._destinationPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortsInput() {
    return this._destinationPorts;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: number; 
  public get ipVersion() {
    return this.getNumberAttribute('ip_version');
  }
  public set ipVersion(value: number) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // name - computed: false, optional: true, required: false
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // source_ip_address - computed: false, optional: true, required: false
  private _sourceIpAddress?: string; 
  public get sourceIpAddress() {
    return this.getStringAttribute('source_ip_address');
  }
  public set sourceIpAddress(value: string) {
    this._sourceIpAddress = value;
  }
  public resetSourceIpAddress() {
    this._sourceIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpAddressInput() {
    return this._sourceIpAddress;
  }

  // source_ip_addresses - computed: false, optional: true, required: false
  private _sourceIpAddresses?: string[]; 
  public get sourceIpAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('source_ip_addresses'));
  }
  public set sourceIpAddresses(value: string[]) {
    this._sourceIpAddresses = value;
  }
  public resetSourceIpAddresses() {
    this._sourceIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpAddressesInput() {
    return this._sourceIpAddresses;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // source_ports - computed: false, optional: true, required: false
  private _sourcePorts?: string[]; 
  public get sourcePorts() {
    return cdktf.Fn.tolist(this.getListAttribute('source_ports'));
  }
  public set sourcePorts(value: string[]) {
    this._sourcePorts = value;
  }
  public resetSourcePorts() {
    this._sourcePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortsInput() {
    return this._sourcePorts;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      destination_ip_address: cdktf.stringToTerraform(this._destinationIpAddress),
      destination_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destinationIpAddresses),
      destination_port: cdktf.stringToTerraform(this._destinationPort),
      destination_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destinationPorts),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      ip_version: cdktf.numberToTerraform(this._ipVersion),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      region: cdktf.stringToTerraform(this._region),
      source_ip_address: cdktf.stringToTerraform(this._sourceIpAddress),
      source_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceIpAddresses),
      source_port: cdktf.stringToTerraform(this._sourcePort),
      source_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourcePorts),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_ip_address: {
        value: cdktf.stringToHclTerraform(this._destinationIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_ip_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destinationIpAddresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      destination_port: {
        value: cdktf.stringToHclTerraform(this._destinationPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destinationPorts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_version: {
        value: cdktf.numberToHclTerraform(this._ipVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip_address: {
        value: cdktf.stringToHclTerraform(this._sourceIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceIpAddresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      source_port: {
        value: cdktf.stringToHclTerraform(this._sourcePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourcePorts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
