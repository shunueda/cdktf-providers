// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/dmr_cluster_link_remote_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerDmrClusterLinkRemoteAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Cluster.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/dmr_cluster_link_remote_address#dmr_cluster_name DataSolacebrokerDmrClusterLinkRemoteAddress#dmr_cluster_name}
  */
  readonly dmrClusterName: string;
  /**
  * The FQDN or IP address (and optional port) of the remote node. If a port is not provided, it will vary based on the transport encoding: 55555 (plain-text), 55443 (encrypted), or 55003 (compressed).
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/dmr_cluster_link_remote_address#remote_address DataSolacebrokerDmrClusterLinkRemoteAddress#remote_address}
  */
  readonly remoteAddress: string;
  /**
  * The name of the node at the remote end of the Link.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/dmr_cluster_link_remote_address#remote_node_name DataSolacebrokerDmrClusterLinkRemoteAddress#remote_node_name}
  */
  readonly remoteNodeName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/dmr_cluster_link_remote_address solacebroker_dmr_cluster_link_remote_address}
*/
export class DataSolacebrokerDmrClusterLinkRemoteAddress extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_dmr_cluster_link_remote_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerDmrClusterLinkRemoteAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerDmrClusterLinkRemoteAddress to import
  * @param importFromId The id of the existing DataSolacebrokerDmrClusterLinkRemoteAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/dmr_cluster_link_remote_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerDmrClusterLinkRemoteAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_dmr_cluster_link_remote_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/dmr_cluster_link_remote_address solacebroker_dmr_cluster_link_remote_address} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerDmrClusterLinkRemoteAddressConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerDmrClusterLinkRemoteAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_dmr_cluster_link_remote_address',
      terraformGeneratorMetadata: {
        providerName: 'solacebroker',
        providerVersion: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dmrClusterName = config.dmrClusterName;
    this._remoteAddress = config.remoteAddress;
    this._remoteNodeName = config.remoteNodeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dmr_cluster_name - computed: false, optional: false, required: true
  private _dmrClusterName?: string; 
  public get dmrClusterName() {
    return this.getStringAttribute('dmr_cluster_name');
  }
  public set dmrClusterName(value: string) {
    this._dmrClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dmrClusterNameInput() {
    return this._dmrClusterName;
  }

  // remote_address - computed: false, optional: false, required: true
  private _remoteAddress?: string; 
  public get remoteAddress() {
    return this.getStringAttribute('remote_address');
  }
  public set remoteAddress(value: string) {
    this._remoteAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAddressInput() {
    return this._remoteAddress;
  }

  // remote_node_name - computed: false, optional: false, required: true
  private _remoteNodeName?: string; 
  public get remoteNodeName() {
    return this.getStringAttribute('remote_node_name');
  }
  public set remoteNodeName(value: string) {
    this._remoteNodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteNodeNameInput() {
    return this._remoteNodeName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dmr_cluster_name: cdktf.stringToTerraform(this._dmrClusterName),
      remote_address: cdktf.stringToTerraform(this._remoteAddress),
      remote_node_name: cdktf.stringToTerraform(this._remoteNodeName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dmr_cluster_name: {
        value: cdktf.stringToHclTerraform(this._dmrClusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_address: {
        value: cdktf.stringToHclTerraform(this._remoteAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_node_name: {
        value: cdktf.stringToHclTerraform(this._remoteNodeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
