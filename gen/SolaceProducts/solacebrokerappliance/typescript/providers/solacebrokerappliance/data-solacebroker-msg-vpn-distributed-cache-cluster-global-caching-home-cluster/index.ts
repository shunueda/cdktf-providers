// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_distributed_cache_cluster_global_caching_home_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerMsgVpnDistributedCacheClusterGlobalCachingHomeClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Distributed Cache.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_distributed_cache_cluster_global_caching_home_cluster#cache_name DataSolacebrokerMsgVpnDistributedCacheClusterGlobalCachingHomeCluster#cache_name}
  */
  readonly cacheName: string;
  /**
  * The name of the Cache Cluster.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_distributed_cache_cluster_global_caching_home_cluster#cluster_name DataSolacebrokerMsgVpnDistributedCacheClusterGlobalCachingHomeCluster#cluster_name}
  */
  readonly clusterName: string;
  /**
  * The name of the remote Home Cache Cluster.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_distributed_cache_cluster_global_caching_home_cluster#home_cluster_name DataSolacebrokerMsgVpnDistributedCacheClusterGlobalCachingHomeCluster#home_cluster_name}
  */
  readonly homeClusterName: string;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_distributed_cache_cluster_global_caching_home_cluster#msg_vpn_name DataSolacebrokerMsgVpnDistributedCacheClusterGlobalCachingHomeCluster#msg_vpn_name}
  */
  readonly msgVpnName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_distributed_cache_cluster_global_caching_home_cluster solacebroker_msg_vpn_distributed_cache_cluster_global_caching_home_cluster}
*/
export class DataSolacebrokerMsgVpnDistributedCacheClusterGlobalCachingHomeCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_distributed_cache_cluster_global_caching_home_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerMsgVpnDistributedCacheClusterGlobalCachingHomeCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerMsgVpnDistributedCacheClusterGlobalCachingHomeCluster to import
  * @param importFromId The id of the existing DataSolacebrokerMsgVpnDistributedCacheClusterGlobalCachingHomeCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_distributed_cache_cluster_global_caching_home_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerMsgVpnDistributedCacheClusterGlobalCachingHomeCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_distributed_cache_cluster_global_caching_home_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_distributed_cache_cluster_global_caching_home_cluster solacebroker_msg_vpn_distributed_cache_cluster_global_caching_home_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerMsgVpnDistributedCacheClusterGlobalCachingHomeClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerMsgVpnDistributedCacheClusterGlobalCachingHomeClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_distributed_cache_cluster_global_caching_home_cluster',
      terraformGeneratorMetadata: {
        providerName: 'solacebrokerappliance',
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
    this._cacheName = config.cacheName;
    this._clusterName = config.clusterName;
    this._homeClusterName = config.homeClusterName;
    this._msgVpnName = config.msgVpnName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_name - computed: false, optional: false, required: true
  private _cacheName?: string; 
  public get cacheName() {
    return this.getStringAttribute('cache_name');
  }
  public set cacheName(value: string) {
    this._cacheName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheNameInput() {
    return this._cacheName;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // home_cluster_name - computed: false, optional: false, required: true
  private _homeClusterName?: string; 
  public get homeClusterName() {
    return this.getStringAttribute('home_cluster_name');
  }
  public set homeClusterName(value: string) {
    this._homeClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get homeClusterNameInput() {
    return this._homeClusterName;
  }

  // msg_vpn_name - computed: false, optional: false, required: true
  private _msgVpnName?: string; 
  public get msgVpnName() {
    return this.getStringAttribute('msg_vpn_name');
  }
  public set msgVpnName(value: string) {
    this._msgVpnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get msgVpnNameInput() {
    return this._msgVpnName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_name: cdktf.stringToTerraform(this._cacheName),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      home_cluster_name: cdktf.stringToTerraform(this._homeClusterName),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_name: {
        value: cdktf.stringToHclTerraform(this._cacheName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      home_cluster_name: {
        value: cdktf.stringToHclTerraform(this._homeClusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msg_vpn_name: {
        value: cdktf.stringToHclTerraform(this._msgVpnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
