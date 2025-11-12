// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerMsgVpnDistributedCacheConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Distributed Cache.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache#cache_name SolacebrokerMsgVpnDistributedCache#cache_name}
  */
  readonly cacheName: string;
  /**
  * The virtual router of the Distributed Cache.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The default value is `"auto"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "primary" - The Distributed Cache is used for the primary virtual router.
  * "backup" - The Distributed Cache is used for the backup virtual router.
  * "auto" - The Distributed Cache is automatically assigned a virtual router at creation, depending on the broker's active-standby role.
  * </pre>
  *  Available since SEMP API version 2.28. Note that this attribute requires replacement of the resource when updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache#cache_virtual_router SolacebrokerMsgVpnDistributedCache#cache_virtual_router}
  */
  readonly cacheVirtualRouter?: string;
  /**
  * Enable or disable the Distributed Cache.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache#enabled SolacebrokerMsgVpnDistributedCache#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The heartbeat interval, in seconds, used by the Cache Instances to monitor connectivity with the message broker.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache#heartbeat SolacebrokerMsgVpnDistributedCache#heartbeat}
  */
  readonly heartbeat?: number;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache#msg_vpn_name SolacebrokerMsgVpnDistributedCache#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The scheduled delete message day(s), specified as "daily" or a comma-separated list of days. Days must be specified as "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", or "Sat", with no spaces, and in sorted order from Sunday to Saturday. The empty-string ("") can also be specified, indicating no schedule is configured ("scheduled_delete_msg_time_list" must also be configured to the empty-string).
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache#scheduled_delete_msg_day_list SolacebrokerMsgVpnDistributedCache#scheduled_delete_msg_day_list}
  */
  readonly scheduledDeleteMsgDayList?: string;
  /**
  * The scheduled delete message time(s), specified as "hourly" or a comma-separated list of 24-hour times in the form hh:mm, or h:mm. There must be no spaces, and times (up to 4) must be in sorted order from 0:00 to 23:59. The empty-string ("") can also be specified, indicating no schedule is configured ("scheduled_delete_msg_day_list" must also be configured to the empty-string).
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache#scheduled_delete_msg_time_list SolacebrokerMsgVpnDistributedCache#scheduled_delete_msg_time_list}
  */
  readonly scheduledDeleteMsgTimeList?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache solacebroker_msg_vpn_distributed_cache}
*/
export class SolacebrokerMsgVpnDistributedCache extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_distributed_cache";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerMsgVpnDistributedCache resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerMsgVpnDistributedCache to import
  * @param importFromId The id of the existing SolacebrokerMsgVpnDistributedCache that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerMsgVpnDistributedCache to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_distributed_cache", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_distributed_cache solacebroker_msg_vpn_distributed_cache} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerMsgVpnDistributedCacheConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerMsgVpnDistributedCacheConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_distributed_cache',
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
    this._cacheVirtualRouter = config.cacheVirtualRouter;
    this._enabled = config.enabled;
    this._heartbeat = config.heartbeat;
    this._msgVpnName = config.msgVpnName;
    this._scheduledDeleteMsgDayList = config.scheduledDeleteMsgDayList;
    this._scheduledDeleteMsgTimeList = config.scheduledDeleteMsgTimeList;
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

  // cache_virtual_router - computed: false, optional: true, required: false
  private _cacheVirtualRouter?: string; 
  public get cacheVirtualRouter() {
    return this.getStringAttribute('cache_virtual_router');
  }
  public set cacheVirtualRouter(value: string) {
    this._cacheVirtualRouter = value;
  }
  public resetCacheVirtualRouter() {
    this._cacheVirtualRouter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheVirtualRouterInput() {
    return this._cacheVirtualRouter;
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

  // heartbeat - computed: false, optional: true, required: false
  private _heartbeat?: number; 
  public get heartbeat() {
    return this.getNumberAttribute('heartbeat');
  }
  public set heartbeat(value: number) {
    this._heartbeat = value;
  }
  public resetHeartbeat() {
    this._heartbeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatInput() {
    return this._heartbeat;
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

  // scheduled_delete_msg_day_list - computed: false, optional: true, required: false
  private _scheduledDeleteMsgDayList?: string; 
  public get scheduledDeleteMsgDayList() {
    return this.getStringAttribute('scheduled_delete_msg_day_list');
  }
  public set scheduledDeleteMsgDayList(value: string) {
    this._scheduledDeleteMsgDayList = value;
  }
  public resetScheduledDeleteMsgDayList() {
    this._scheduledDeleteMsgDayList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledDeleteMsgDayListInput() {
    return this._scheduledDeleteMsgDayList;
  }

  // scheduled_delete_msg_time_list - computed: false, optional: true, required: false
  private _scheduledDeleteMsgTimeList?: string; 
  public get scheduledDeleteMsgTimeList() {
    return this.getStringAttribute('scheduled_delete_msg_time_list');
  }
  public set scheduledDeleteMsgTimeList(value: string) {
    this._scheduledDeleteMsgTimeList = value;
  }
  public resetScheduledDeleteMsgTimeList() {
    this._scheduledDeleteMsgTimeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledDeleteMsgTimeListInput() {
    return this._scheduledDeleteMsgTimeList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_name: cdktf.stringToTerraform(this._cacheName),
      cache_virtual_router: cdktf.stringToTerraform(this._cacheVirtualRouter),
      enabled: cdktf.booleanToTerraform(this._enabled),
      heartbeat: cdktf.numberToTerraform(this._heartbeat),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      scheduled_delete_msg_day_list: cdktf.stringToTerraform(this._scheduledDeleteMsgDayList),
      scheduled_delete_msg_time_list: cdktf.stringToTerraform(this._scheduledDeleteMsgTimeList),
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
      cache_virtual_router: {
        value: cdktf.stringToHclTerraform(this._cacheVirtualRouter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      heartbeat: {
        value: cdktf.numberToHclTerraform(this._heartbeat),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      msg_vpn_name: {
        value: cdktf.stringToHclTerraform(this._msgVpnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduled_delete_msg_day_list: {
        value: cdktf.stringToHclTerraform(this._scheduledDeleteMsgDayList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduled_delete_msg_time_list: {
        value: cdktf.stringToHclTerraform(this._scheduledDeleteMsgTimeList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
