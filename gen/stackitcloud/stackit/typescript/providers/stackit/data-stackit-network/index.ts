// https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/data-sources/network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackitNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The network ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/data-sources/network#network_id DataStackitNetwork#network_id}
  */
  readonly networkId: string;
  /**
  * STACKIT project ID to which the network is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/data-sources/network#project_id DataStackitNetwork#project_id}
  */
  readonly projectId: string;
  /**
  * Can only be used when experimental "network" is set. This is likely going to undergo significant changes or be removed in the future.
  * The resource region. If not defined, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/data-sources/network#region DataStackitNetwork#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/data-sources/network stackit_network}
*/
export class DataStackitNetwork extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackitNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackitNetwork to import
  * @param importFromId The id of the existing DataStackitNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/data-sources/network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackitNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.70.0/docs/data-sources/network stackit_network} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackitNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackitNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_network',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.70.0',
        providerVersionConstraint: '0.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._networkId = config.networkId;
    this._projectId = config.projectId;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_gateway - computed: true, optional: false, required: false
  public get ipv4Gateway() {
    return this.getStringAttribute('ipv4_gateway');
  }

  // ipv4_nameservers - computed: true, optional: false, required: false
  public get ipv4Nameservers() {
    return this.getListAttribute('ipv4_nameservers');
  }

  // ipv4_prefix - computed: true, optional: false, required: false
  public get ipv4Prefix() {
    return this.getStringAttribute('ipv4_prefix');
  }

  // ipv4_prefix_length - computed: true, optional: false, required: false
  public get ipv4PrefixLength() {
    return this.getNumberAttribute('ipv4_prefix_length');
  }

  // ipv4_prefixes - computed: true, optional: false, required: false
  public get ipv4Prefixes() {
    return this.getListAttribute('ipv4_prefixes');
  }

  // ipv6_gateway - computed: true, optional: false, required: false
  public get ipv6Gateway() {
    return this.getStringAttribute('ipv6_gateway');
  }

  // ipv6_nameservers - computed: true, optional: false, required: false
  public get ipv6Nameservers() {
    return this.getListAttribute('ipv6_nameservers');
  }

  // ipv6_prefix - computed: true, optional: false, required: false
  public get ipv6Prefix() {
    return this.getStringAttribute('ipv6_prefix');
  }

  // ipv6_prefix_length - computed: true, optional: false, required: false
  public get ipv6PrefixLength() {
    return this.getNumberAttribute('ipv6_prefix_length');
  }

  // ipv6_prefixes - computed: true, optional: false, required: false
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nameservers - computed: true, optional: false, required: false
  public get nameservers() {
    return this.getListAttribute('nameservers');
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
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

  // region - computed: false, optional: true, required: false
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

  // routed - computed: true, optional: false, required: false
  public get routed() {
    return this.getBooleanAttribute('routed');
  }

  // routing_table_id - computed: true, optional: false, required: false
  public get routingTableId() {
    return this.getStringAttribute('routing_table_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_id: cdktf.stringToTerraform(this._networkId),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
