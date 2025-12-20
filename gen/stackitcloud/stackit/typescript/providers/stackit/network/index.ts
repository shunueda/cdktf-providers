// https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The IPv4 gateway of a network. If not specified, the first IP of the network will be assigned as the gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network#ipv4_gateway Network#ipv4_gateway}
  */
  readonly ipv4Gateway?: string;
  /**
  * The IPv4 nameservers of the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network#ipv4_nameservers Network#ipv4_nameservers}
  */
  readonly ipv4Nameservers?: string[];
  /**
  * The IPv4 prefix of the network (CIDR).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network#ipv4_prefix Network#ipv4_prefix}
  */
  readonly ipv4Prefix?: string;
  /**
  * The IPv4 prefix length of the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network#ipv4_prefix_length Network#ipv4_prefix_length}
  */
  readonly ipv4PrefixLength?: number;
  /**
  * The IPv6 gateway of a network. If not specified, the first IP of the network will be assigned as the gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network#ipv6_gateway Network#ipv6_gateway}
  */
  readonly ipv6Gateway?: string;
  /**
  * The IPv6 nameservers of the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network#ipv6_nameservers Network#ipv6_nameservers}
  */
  readonly ipv6Nameservers?: string[];
  /**
  * The IPv6 prefix of the network (CIDR).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network#ipv6_prefix Network#ipv6_prefix}
  */
  readonly ipv6Prefix?: string;
  /**
  * The IPv6 prefix length of the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network#ipv6_prefix_length Network#ipv6_prefix_length}
  */
  readonly ipv6PrefixLength?: number;
  /**
  * Labels are key-value string pairs which can be attached to a resource container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network#labels Network#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network#name Network#name}
  */
  readonly name: string;
  /**
  * The nameservers of the network. This field is deprecated and will be removed in January 2026, use `ipv4_nameservers` to configure the nameservers for IPv4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network#nameservers Network#nameservers}
  */
  readonly nameservers?: string[];
  /**
  * If set to `true`, the network doesn't have a gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network#no_ipv4_gateway Network#no_ipv4_gateway}
  */
  readonly noIpv4Gateway?: boolean | cdktf.IResolvable;
  /**
  * If set to `true`, the network doesn't have a gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network#no_ipv6_gateway Network#no_ipv6_gateway}
  */
  readonly noIpv6Gateway?: boolean | cdktf.IResolvable;
  /**
  * STACKIT project ID to which the network is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network#project_id Network#project_id}
  */
  readonly projectId: string;
  /**
  * The resource region. If not defined, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network#region Network#region}
  */
  readonly region?: string;
  /**
  * If set to `true`, the network is routed and therefore accessible from other networks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network#routed Network#routed}
  */
  readonly routed?: boolean | cdktf.IResolvable;
  /**
  * The ID of the routing table associated with the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network#routing_table_id Network#routing_table_id}
  */
  readonly routingTableId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network stackit_network}
*/
export class Network extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Network resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Network to import
  * @param importFromId The id of the existing Network that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Network to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network stackit_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_network',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.76.0',
        providerVersionConstraint: '0.76.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ipv4Gateway = config.ipv4Gateway;
    this._ipv4Nameservers = config.ipv4Nameservers;
    this._ipv4Prefix = config.ipv4Prefix;
    this._ipv4PrefixLength = config.ipv4PrefixLength;
    this._ipv6Gateway = config.ipv6Gateway;
    this._ipv6Nameservers = config.ipv6Nameservers;
    this._ipv6Prefix = config.ipv6Prefix;
    this._ipv6PrefixLength = config.ipv6PrefixLength;
    this._labels = config.labels;
    this._name = config.name;
    this._nameservers = config.nameservers;
    this._noIpv4Gateway = config.noIpv4Gateway;
    this._noIpv6Gateway = config.noIpv6Gateway;
    this._projectId = config.projectId;
    this._region = config.region;
    this._routed = config.routed;
    this._routingTableId = config.routingTableId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_gateway - computed: true, optional: true, required: false
  private _ipv4Gateway?: string; 
  public get ipv4Gateway() {
    return this.getStringAttribute('ipv4_gateway');
  }
  public set ipv4Gateway(value: string) {
    this._ipv4Gateway = value;
  }
  public resetIpv4Gateway() {
    this._ipv4Gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4GatewayInput() {
    return this._ipv4Gateway;
  }

  // ipv4_nameservers - computed: true, optional: true, required: false
  private _ipv4Nameservers?: string[]; 
  public get ipv4Nameservers() {
    return this.getListAttribute('ipv4_nameservers');
  }
  public set ipv4Nameservers(value: string[]) {
    this._ipv4Nameservers = value;
  }
  public resetIpv4Nameservers() {
    this._ipv4Nameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NameserversInput() {
    return this._ipv4Nameservers;
  }

  // ipv4_prefix - computed: true, optional: true, required: false
  private _ipv4Prefix?: string; 
  public get ipv4Prefix() {
    return this.getStringAttribute('ipv4_prefix');
  }
  public set ipv4Prefix(value: string) {
    this._ipv4Prefix = value;
  }
  public resetIpv4Prefix() {
    this._ipv4Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixInput() {
    return this._ipv4Prefix;
  }

  // ipv4_prefix_length - computed: true, optional: true, required: false
  private _ipv4PrefixLength?: number; 
  public get ipv4PrefixLength() {
    return this.getNumberAttribute('ipv4_prefix_length');
  }
  public set ipv4PrefixLength(value: number) {
    this._ipv4PrefixLength = value;
  }
  public resetIpv4PrefixLength() {
    this._ipv4PrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixLengthInput() {
    return this._ipv4PrefixLength;
  }

  // ipv4_prefixes - computed: true, optional: false, required: false
  public get ipv4Prefixes() {
    return this.getListAttribute('ipv4_prefixes');
  }

  // ipv6_gateway - computed: true, optional: true, required: false
  private _ipv6Gateway?: string; 
  public get ipv6Gateway() {
    return this.getStringAttribute('ipv6_gateway');
  }
  public set ipv6Gateway(value: string) {
    this._ipv6Gateway = value;
  }
  public resetIpv6Gateway() {
    this._ipv6Gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6GatewayInput() {
    return this._ipv6Gateway;
  }

  // ipv6_nameservers - computed: true, optional: true, required: false
  private _ipv6Nameservers?: string[]; 
  public get ipv6Nameservers() {
    return this.getListAttribute('ipv6_nameservers');
  }
  public set ipv6Nameservers(value: string[]) {
    this._ipv6Nameservers = value;
  }
  public resetIpv6Nameservers() {
    this._ipv6Nameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NameserversInput() {
    return this._ipv6Nameservers;
  }

  // ipv6_prefix - computed: true, optional: true, required: false
  private _ipv6Prefix?: string; 
  public get ipv6Prefix() {
    return this.getStringAttribute('ipv6_prefix');
  }
  public set ipv6Prefix(value: string) {
    this._ipv6Prefix = value;
  }
  public resetIpv6Prefix() {
    this._ipv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixInput() {
    return this._ipv6Prefix;
  }

  // ipv6_prefix_length - computed: true, optional: true, required: false
  private _ipv6PrefixLength?: number; 
  public get ipv6PrefixLength() {
    return this.getNumberAttribute('ipv6_prefix_length');
  }
  public set ipv6PrefixLength(value: number) {
    this._ipv6PrefixLength = value;
  }
  public resetIpv6PrefixLength() {
    this._ipv6PrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixLengthInput() {
    return this._ipv6PrefixLength;
  }

  // ipv6_prefixes - computed: true, optional: false, required: false
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // nameservers - computed: true, optional: true, required: false
  private _nameservers?: string[]; 
  public get nameservers() {
    return this.getListAttribute('nameservers');
  }
  public set nameservers(value: string[]) {
    this._nameservers = value;
  }
  public resetNameservers() {
    this._nameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers;
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // no_ipv4_gateway - computed: false, optional: true, required: false
  private _noIpv4Gateway?: boolean | cdktf.IResolvable; 
  public get noIpv4Gateway() {
    return this.getBooleanAttribute('no_ipv4_gateway');
  }
  public set noIpv4Gateway(value: boolean | cdktf.IResolvable) {
    this._noIpv4Gateway = value;
  }
  public resetNoIpv4Gateway() {
    this._noIpv4Gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpv4GatewayInput() {
    return this._noIpv4Gateway;
  }

  // no_ipv6_gateway - computed: false, optional: true, required: false
  private _noIpv6Gateway?: boolean | cdktf.IResolvable; 
  public get noIpv6Gateway() {
    return this.getBooleanAttribute('no_ipv6_gateway');
  }
  public set noIpv6Gateway(value: boolean | cdktf.IResolvable) {
    this._noIpv6Gateway = value;
  }
  public resetNoIpv6Gateway() {
    this._noIpv6Gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpv6GatewayInput() {
    return this._noIpv6Gateway;
  }

  // prefixes - computed: true, optional: false, required: false
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
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

  // routed - computed: true, optional: true, required: false
  private _routed?: boolean | cdktf.IResolvable; 
  public get routed() {
    return this.getBooleanAttribute('routed');
  }
  public set routed(value: boolean | cdktf.IResolvable) {
    this._routed = value;
  }
  public resetRouted() {
    this._routed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routedInput() {
    return this._routed;
  }

  // routing_table_id - computed: true, optional: true, required: false
  private _routingTableId?: string; 
  public get routingTableId() {
    return this.getStringAttribute('routing_table_id');
  }
  public set routingTableId(value: string) {
    this._routingTableId = value;
  }
  public resetRoutingTableId() {
    this._routingTableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingTableIdInput() {
    return this._routingTableId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ipv4_gateway: cdktf.stringToTerraform(this._ipv4Gateway),
      ipv4_nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv4Nameservers),
      ipv4_prefix: cdktf.stringToTerraform(this._ipv4Prefix),
      ipv4_prefix_length: cdktf.numberToTerraform(this._ipv4PrefixLength),
      ipv6_gateway: cdktf.stringToTerraform(this._ipv6Gateway),
      ipv6_nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6Nameservers),
      ipv6_prefix: cdktf.stringToTerraform(this._ipv6Prefix),
      ipv6_prefix_length: cdktf.numberToTerraform(this._ipv6PrefixLength),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nameservers),
      no_ipv4_gateway: cdktf.booleanToTerraform(this._noIpv4Gateway),
      no_ipv6_gateway: cdktf.booleanToTerraform(this._noIpv6Gateway),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      routed: cdktf.booleanToTerraform(this._routed),
      routing_table_id: cdktf.stringToTerraform(this._routingTableId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ipv4_gateway: {
        value: cdktf.stringToHclTerraform(this._ipv4Gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_nameservers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv4Nameservers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ipv4_prefix: {
        value: cdktf.stringToHclTerraform(this._ipv4Prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_prefix_length: {
        value: cdktf.numberToHclTerraform(this._ipv4PrefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_gateway: {
        value: cdktf.stringToHclTerraform(this._ipv6Gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_nameservers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6Nameservers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ipv6_prefix: {
        value: cdktf.stringToHclTerraform(this._ipv6Prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_prefix_length: {
        value: cdktf.numberToHclTerraform(this._ipv6PrefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nameservers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nameservers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      no_ipv4_gateway: {
        value: cdktf.booleanToHclTerraform(this._noIpv4Gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_ipv6_gateway: {
        value: cdktf.booleanToHclTerraform(this._noIpv6Gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
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
      routed: {
        value: cdktf.booleanToHclTerraform(this._routed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      routing_table_id: {
        value: cdktf.stringToHclTerraform(this._routingTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
