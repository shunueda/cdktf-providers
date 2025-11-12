// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster_global_caching_home_cluster_topic_prefix
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerMsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Distributed Cache.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster_global_caching_home_cluster_topic_prefix#cache_name SolacebrokerMsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefix#cache_name}
  */
  readonly cacheName: string;
  /**
  * The name of the Cache Cluster.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster_global_caching_home_cluster_topic_prefix#cluster_name SolacebrokerMsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefix#cluster_name}
  */
  readonly clusterName: string;
  /**
  * The name of the remote Home Cache Cluster.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster_global_caching_home_cluster_topic_prefix#home_cluster_name SolacebrokerMsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefix#home_cluster_name}
  */
  readonly homeClusterName: string;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster_global_caching_home_cluster_topic_prefix#msg_vpn_name SolacebrokerMsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefix#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * A topic prefix for global topics available from the remote Home Cache Cluster. A wildcard (/&gt;) is implied at the end of the prefix.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster_global_caching_home_cluster_topic_prefix#topic_prefix SolacebrokerMsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefix#topic_prefix}
  */
  readonly topicPrefix: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster_global_caching_home_cluster_topic_prefix solacebroker_msg_vpn_distributed_cache_cluster_global_caching_home_cluster_topic_prefix}
*/
export class SolacebrokerMsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefix extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_distributed_cache_cluster_global_caching_home_cluster_topic_prefix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerMsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefix resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerMsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefix to import
  * @param importFromId The id of the existing SolacebrokerMsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefix that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster_global_caching_home_cluster_topic_prefix#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerMsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefix to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_distributed_cache_cluster_global_caching_home_cluster_topic_prefix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache_cluster_global_caching_home_cluster_topic_prefix solacebroker_msg_vpn_distributed_cache_cluster_global_caching_home_cluster_topic_prefix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerMsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerMsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_distributed_cache_cluster_global_caching_home_cluster_topic_prefix',
      terraformGeneratorMetadata: {
        providerName: 'solacebrokerappliance',
        providerVersion: '1.2.0',
        providerVersionConstraint: '1.2.0'
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
    this._topicPrefix = config.topicPrefix;
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

  // topic_prefix - computed: false, optional: false, required: true
  private _topicPrefix?: string; 
  public get topicPrefix() {
    return this.getStringAttribute('topic_prefix');
  }
  public set topicPrefix(value: string) {
    this._topicPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicPrefixInput() {
    return this._topicPrefix;
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
      topic_prefix: cdktf.stringToTerraform(this._topicPrefix),
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
      topic_prefix: {
        value: cdktf.stringToHclTerraform(this._topicPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
