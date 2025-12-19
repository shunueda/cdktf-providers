// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbResourceUsageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Total configurable HTTP Cache Templates in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#cache_template_count SlbResourceUsage#cache_template_count}
  */
  readonly cacheTemplateCount?: number;
  /**
  * Total configurable Client SSL Templates in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#client_ssl_template_count SlbResourceUsage#client_ssl_template_count}
  */
  readonly clientSslTemplateCount?: number;
  /**
  * Total configurable Connection reuse Templates in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#conn_reuse_template_count SlbResourceUsage#conn_reuse_template_count}
  */
  readonly connReuseTemplateCount?: number;
  /**
  * Total configurable Fast TCP Templates in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#fast_tcp_template_count SlbResourceUsage#fast_tcp_template_count}
  */
  readonly fastTcpTemplateCount?: number;
  /**
  * Total configurable Fast UDP Templates in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#fast_udp_template_count SlbResourceUsage#fast_udp_template_count}
  */
  readonly fastUdpTemplateCount?: number;
  /**
  * Total configurable FIX Templates in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#fix_template_count SlbResourceUsage#fix_template_count}
  */
  readonly fixTemplateCount?: number;
  /**
  * Total GSLB devices in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#gslb_device_count SlbResourceUsage#gslb_device_count}
  */
  readonly gslbDeviceCount?: number;
  /**
  * Total GSLB geo-location in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#gslb_geo_location_count SlbResourceUsage#gslb_geo_location_count}
  */
  readonly gslbGeoLocationCount?: number;
  /**
  * Total GSLB ip-list in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#gslb_ip_list_count SlbResourceUsage#gslb_ip_list_count}
  */
  readonly gslbIpListCount?: number;
  /**
  * Total GSLB policies in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#gslb_policy_count SlbResourceUsage#gslb_policy_count}
  */
  readonly gslbPolicyCount?: number;
  /**
  * Total GSLB services in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#gslb_service_count SlbResourceUsage#gslb_service_count}
  */
  readonly gslbServiceCount?: number;
  /**
  * Total GSLB service-ip in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#gslb_service_ip_count SlbResourceUsage#gslb_service_ip_count}
  */
  readonly gslbServiceIpCount?: number;
  /**
  * Total GSLB service-port in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#gslb_service_port_count SlbResourceUsage#gslb_service_port_count}
  */
  readonly gslbServicePortCount?: number;
  /**
  * Total GSLB sites in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#gslb_site_count SlbResourceUsage#gslb_site_count}
  */
  readonly gslbSiteCount?: number;
  /**
  * Total GSLB services in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#gslb_svc_group_count SlbResourceUsage#gslb_svc_group_count}
  */
  readonly gslbSvcGroupCount?: number;
  /**
  * Total GSLB templates in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#gslb_template_count SlbResourceUsage#gslb_template_count}
  */
  readonly gslbTemplateCount?: number;
  /**
  * Total GSLB zones in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#gslb_zone_count SlbResourceUsage#gslb_zone_count}
  */
  readonly gslbZoneCount?: number;
  /**
  * Total Health Monitors in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#health_monitor_count SlbResourceUsage#health_monitor_count}
  */
  readonly healthMonitorCount?: number;
  /**
  * Total configurable HTTP Templates in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#http_template_count SlbResourceUsage#http_template_count}
  */
  readonly httpTemplateCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#id SlbResourceUsage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Total configurable Link-cost Templates in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#link_cost_template_count SlbResourceUsage#link_cost_template_count}
  */
  readonly linkCostTemplateCount?: number;
  /**
  * Total configurable SLB Logging Templates in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#log_template_count SlbResourceUsage#log_template_count}
  */
  readonly logTemplateCount?: number;
  /**
  * Total configurable NAT Pool addresses in the System (deprecated)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#nat_pool_addr_count SlbResourceUsage#nat_pool_addr_count}
  */
  readonly natPoolAddrCount?: number;
  /**
  * Total configurable pbslb entry in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#pbslb_entry_count SlbResourceUsage#pbslb_entry_count}
  */
  readonly pbslbEntryCount?: number;
  /**
  * Total PBSLB Subnets in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#pbslb_subnet_count SlbResourceUsage#pbslb_subnet_count}
  */
  readonly pbslbSubnetCount?: number;
  /**
  * Total configurable Persistent cookie Templates in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#persist_cookie_template_count SlbResourceUsage#persist_cookie_template_count}
  */
  readonly persistCookieTemplateCount?: number;
  /**
  * Total configurable Source IP Persistent Templates in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#persist_srcip_template_count SlbResourceUsage#persist_srcip_template_count}
  */
  readonly persistSrcipTemplateCount?: number;
  /**
  * Total configurable Proxy Templates in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#proxy_template_count SlbResourceUsage#proxy_template_count}
  */
  readonly proxyTemplateCount?: number;
  /**
  * Total Real Server Ports in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#real_port_count SlbResourceUsage#real_port_count}
  */
  readonly realPortCount?: number;
  /**
  * Total Real Servers in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#real_server_count SlbResourceUsage#real_server_count}
  */
  readonly realServerCount?: number;
  /**
  * Total configurable Server SSL Templates in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#server_ssl_template_count SlbResourceUsage#server_ssl_template_count}
  */
  readonly serverSslTemplateCount?: number;
  /**
  * Total Service Groups in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#service_group_count SlbResourceUsage#service_group_count}
  */
  readonly serviceGroupCount?: number;
  /**
  * Enter the threshold as a percentage (Threshold in percentage(default is 0%))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#slb_threshold_res_usage_percent SlbResourceUsage#slb_threshold_res_usage_percent}
  */
  readonly slbThresholdResUsagePercent?: number;
  /**
  * Total configurable Streaming media in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#stream_template_count SlbResourceUsage#stream_template_count}
  */
  readonly streamTemplateCount?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#uuid SlbResourceUsage#uuid}
  */
  readonly uuid?: string;
  /**
  * Total Virtual Server Ports in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#virtual_port_count SlbResourceUsage#virtual_port_count}
  */
  readonly virtualPortCount?: number;
  /**
  * Total Virtual Servers in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#virtual_server_count SlbResourceUsage#virtual_server_count}
  */
  readonly virtualServerCount?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage thunder_slb_resource_usage}
*/
export class SlbResourceUsage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_resource_usage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbResourceUsage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbResourceUsage to import
  * @param importFromId The id of the existing SlbResourceUsage that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbResourceUsage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_resource_usage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_resource_usage thunder_slb_resource_usage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbResourceUsageConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SlbResourceUsageConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_resource_usage',
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
    this._cacheTemplateCount = config.cacheTemplateCount;
    this._clientSslTemplateCount = config.clientSslTemplateCount;
    this._connReuseTemplateCount = config.connReuseTemplateCount;
    this._fastTcpTemplateCount = config.fastTcpTemplateCount;
    this._fastUdpTemplateCount = config.fastUdpTemplateCount;
    this._fixTemplateCount = config.fixTemplateCount;
    this._gslbDeviceCount = config.gslbDeviceCount;
    this._gslbGeoLocationCount = config.gslbGeoLocationCount;
    this._gslbIpListCount = config.gslbIpListCount;
    this._gslbPolicyCount = config.gslbPolicyCount;
    this._gslbServiceCount = config.gslbServiceCount;
    this._gslbServiceIpCount = config.gslbServiceIpCount;
    this._gslbServicePortCount = config.gslbServicePortCount;
    this._gslbSiteCount = config.gslbSiteCount;
    this._gslbSvcGroupCount = config.gslbSvcGroupCount;
    this._gslbTemplateCount = config.gslbTemplateCount;
    this._gslbZoneCount = config.gslbZoneCount;
    this._healthMonitorCount = config.healthMonitorCount;
    this._httpTemplateCount = config.httpTemplateCount;
    this._id = config.id;
    this._linkCostTemplateCount = config.linkCostTemplateCount;
    this._logTemplateCount = config.logTemplateCount;
    this._natPoolAddrCount = config.natPoolAddrCount;
    this._pbslbEntryCount = config.pbslbEntryCount;
    this._pbslbSubnetCount = config.pbslbSubnetCount;
    this._persistCookieTemplateCount = config.persistCookieTemplateCount;
    this._persistSrcipTemplateCount = config.persistSrcipTemplateCount;
    this._proxyTemplateCount = config.proxyTemplateCount;
    this._realPortCount = config.realPortCount;
    this._realServerCount = config.realServerCount;
    this._serverSslTemplateCount = config.serverSslTemplateCount;
    this._serviceGroupCount = config.serviceGroupCount;
    this._slbThresholdResUsagePercent = config.slbThresholdResUsagePercent;
    this._streamTemplateCount = config.streamTemplateCount;
    this._uuid = config.uuid;
    this._virtualPortCount = config.virtualPortCount;
    this._virtualServerCount = config.virtualServerCount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_template_count - computed: false, optional: true, required: false
  private _cacheTemplateCount?: number; 
  public get cacheTemplateCount() {
    return this.getNumberAttribute('cache_template_count');
  }
  public set cacheTemplateCount(value: number) {
    this._cacheTemplateCount = value;
  }
  public resetCacheTemplateCount() {
    this._cacheTemplateCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTemplateCountInput() {
    return this._cacheTemplateCount;
  }

  // client_ssl_template_count - computed: false, optional: true, required: false
  private _clientSslTemplateCount?: number; 
  public get clientSslTemplateCount() {
    return this.getNumberAttribute('client_ssl_template_count');
  }
  public set clientSslTemplateCount(value: number) {
    this._clientSslTemplateCount = value;
  }
  public resetClientSslTemplateCount() {
    this._clientSslTemplateCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSslTemplateCountInput() {
    return this._clientSslTemplateCount;
  }

  // conn_reuse_template_count - computed: false, optional: true, required: false
  private _connReuseTemplateCount?: number; 
  public get connReuseTemplateCount() {
    return this.getNumberAttribute('conn_reuse_template_count');
  }
  public set connReuseTemplateCount(value: number) {
    this._connReuseTemplateCount = value;
  }
  public resetConnReuseTemplateCount() {
    this._connReuseTemplateCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connReuseTemplateCountInput() {
    return this._connReuseTemplateCount;
  }

  // fast_tcp_template_count - computed: false, optional: true, required: false
  private _fastTcpTemplateCount?: number; 
  public get fastTcpTemplateCount() {
    return this.getNumberAttribute('fast_tcp_template_count');
  }
  public set fastTcpTemplateCount(value: number) {
    this._fastTcpTemplateCount = value;
  }
  public resetFastTcpTemplateCount() {
    this._fastTcpTemplateCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastTcpTemplateCountInput() {
    return this._fastTcpTemplateCount;
  }

  // fast_udp_template_count - computed: false, optional: true, required: false
  private _fastUdpTemplateCount?: number; 
  public get fastUdpTemplateCount() {
    return this.getNumberAttribute('fast_udp_template_count');
  }
  public set fastUdpTemplateCount(value: number) {
    this._fastUdpTemplateCount = value;
  }
  public resetFastUdpTemplateCount() {
    this._fastUdpTemplateCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastUdpTemplateCountInput() {
    return this._fastUdpTemplateCount;
  }

  // fix_template_count - computed: false, optional: true, required: false
  private _fixTemplateCount?: number; 
  public get fixTemplateCount() {
    return this.getNumberAttribute('fix_template_count');
  }
  public set fixTemplateCount(value: number) {
    this._fixTemplateCount = value;
  }
  public resetFixTemplateCount() {
    this._fixTemplateCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixTemplateCountInput() {
    return this._fixTemplateCount;
  }

  // gslb_device_count - computed: false, optional: true, required: false
  private _gslbDeviceCount?: number; 
  public get gslbDeviceCount() {
    return this.getNumberAttribute('gslb_device_count');
  }
  public set gslbDeviceCount(value: number) {
    this._gslbDeviceCount = value;
  }
  public resetGslbDeviceCount() {
    this._gslbDeviceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbDeviceCountInput() {
    return this._gslbDeviceCount;
  }

  // gslb_geo_location_count - computed: false, optional: true, required: false
  private _gslbGeoLocationCount?: number; 
  public get gslbGeoLocationCount() {
    return this.getNumberAttribute('gslb_geo_location_count');
  }
  public set gslbGeoLocationCount(value: number) {
    this._gslbGeoLocationCount = value;
  }
  public resetGslbGeoLocationCount() {
    this._gslbGeoLocationCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbGeoLocationCountInput() {
    return this._gslbGeoLocationCount;
  }

  // gslb_ip_list_count - computed: false, optional: true, required: false
  private _gslbIpListCount?: number; 
  public get gslbIpListCount() {
    return this.getNumberAttribute('gslb_ip_list_count');
  }
  public set gslbIpListCount(value: number) {
    this._gslbIpListCount = value;
  }
  public resetGslbIpListCount() {
    this._gslbIpListCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbIpListCountInput() {
    return this._gslbIpListCount;
  }

  // gslb_policy_count - computed: false, optional: true, required: false
  private _gslbPolicyCount?: number; 
  public get gslbPolicyCount() {
    return this.getNumberAttribute('gslb_policy_count');
  }
  public set gslbPolicyCount(value: number) {
    this._gslbPolicyCount = value;
  }
  public resetGslbPolicyCount() {
    this._gslbPolicyCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbPolicyCountInput() {
    return this._gslbPolicyCount;
  }

  // gslb_service_count - computed: false, optional: true, required: false
  private _gslbServiceCount?: number; 
  public get gslbServiceCount() {
    return this.getNumberAttribute('gslb_service_count');
  }
  public set gslbServiceCount(value: number) {
    this._gslbServiceCount = value;
  }
  public resetGslbServiceCount() {
    this._gslbServiceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServiceCountInput() {
    return this._gslbServiceCount;
  }

  // gslb_service_ip_count - computed: false, optional: true, required: false
  private _gslbServiceIpCount?: number; 
  public get gslbServiceIpCount() {
    return this.getNumberAttribute('gslb_service_ip_count');
  }
  public set gslbServiceIpCount(value: number) {
    this._gslbServiceIpCount = value;
  }
  public resetGslbServiceIpCount() {
    this._gslbServiceIpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServiceIpCountInput() {
    return this._gslbServiceIpCount;
  }

  // gslb_service_port_count - computed: false, optional: true, required: false
  private _gslbServicePortCount?: number; 
  public get gslbServicePortCount() {
    return this.getNumberAttribute('gslb_service_port_count');
  }
  public set gslbServicePortCount(value: number) {
    this._gslbServicePortCount = value;
  }
  public resetGslbServicePortCount() {
    this._gslbServicePortCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServicePortCountInput() {
    return this._gslbServicePortCount;
  }

  // gslb_site_count - computed: false, optional: true, required: false
  private _gslbSiteCount?: number; 
  public get gslbSiteCount() {
    return this.getNumberAttribute('gslb_site_count');
  }
  public set gslbSiteCount(value: number) {
    this._gslbSiteCount = value;
  }
  public resetGslbSiteCount() {
    this._gslbSiteCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSiteCountInput() {
    return this._gslbSiteCount;
  }

  // gslb_svc_group_count - computed: false, optional: true, required: false
  private _gslbSvcGroupCount?: number; 
  public get gslbSvcGroupCount() {
    return this.getNumberAttribute('gslb_svc_group_count');
  }
  public set gslbSvcGroupCount(value: number) {
    this._gslbSvcGroupCount = value;
  }
  public resetGslbSvcGroupCount() {
    this._gslbSvcGroupCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSvcGroupCountInput() {
    return this._gslbSvcGroupCount;
  }

  // gslb_template_count - computed: false, optional: true, required: false
  private _gslbTemplateCount?: number; 
  public get gslbTemplateCount() {
    return this.getNumberAttribute('gslb_template_count');
  }
  public set gslbTemplateCount(value: number) {
    this._gslbTemplateCount = value;
  }
  public resetGslbTemplateCount() {
    this._gslbTemplateCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbTemplateCountInput() {
    return this._gslbTemplateCount;
  }

  // gslb_zone_count - computed: false, optional: true, required: false
  private _gslbZoneCount?: number; 
  public get gslbZoneCount() {
    return this.getNumberAttribute('gslb_zone_count');
  }
  public set gslbZoneCount(value: number) {
    this._gslbZoneCount = value;
  }
  public resetGslbZoneCount() {
    this._gslbZoneCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbZoneCountInput() {
    return this._gslbZoneCount;
  }

  // health_monitor_count - computed: false, optional: true, required: false
  private _healthMonitorCount?: number; 
  public get healthMonitorCount() {
    return this.getNumberAttribute('health_monitor_count');
  }
  public set healthMonitorCount(value: number) {
    this._healthMonitorCount = value;
  }
  public resetHealthMonitorCount() {
    this._healthMonitorCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitorCountInput() {
    return this._healthMonitorCount;
  }

  // http_template_count - computed: false, optional: true, required: false
  private _httpTemplateCount?: number; 
  public get httpTemplateCount() {
    return this.getNumberAttribute('http_template_count');
  }
  public set httpTemplateCount(value: number) {
    this._httpTemplateCount = value;
  }
  public resetHttpTemplateCount() {
    this._httpTemplateCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTemplateCountInput() {
    return this._httpTemplateCount;
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

  // link_cost_template_count - computed: false, optional: true, required: false
  private _linkCostTemplateCount?: number; 
  public get linkCostTemplateCount() {
    return this.getNumberAttribute('link_cost_template_count');
  }
  public set linkCostTemplateCount(value: number) {
    this._linkCostTemplateCount = value;
  }
  public resetLinkCostTemplateCount() {
    this._linkCostTemplateCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkCostTemplateCountInput() {
    return this._linkCostTemplateCount;
  }

  // log_template_count - computed: false, optional: true, required: false
  private _logTemplateCount?: number; 
  public get logTemplateCount() {
    return this.getNumberAttribute('log_template_count');
  }
  public set logTemplateCount(value: number) {
    this._logTemplateCount = value;
  }
  public resetLogTemplateCount() {
    this._logTemplateCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTemplateCountInput() {
    return this._logTemplateCount;
  }

  // nat_pool_addr_count - computed: false, optional: true, required: false
  private _natPoolAddrCount?: number; 
  public get natPoolAddrCount() {
    return this.getNumberAttribute('nat_pool_addr_count');
  }
  public set natPoolAddrCount(value: number) {
    this._natPoolAddrCount = value;
  }
  public resetNatPoolAddrCount() {
    this._natPoolAddrCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolAddrCountInput() {
    return this._natPoolAddrCount;
  }

  // pbslb_entry_count - computed: false, optional: true, required: false
  private _pbslbEntryCount?: number; 
  public get pbslbEntryCount() {
    return this.getNumberAttribute('pbslb_entry_count');
  }
  public set pbslbEntryCount(value: number) {
    this._pbslbEntryCount = value;
  }
  public resetPbslbEntryCount() {
    this._pbslbEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbslbEntryCountInput() {
    return this._pbslbEntryCount;
  }

  // pbslb_subnet_count - computed: false, optional: true, required: false
  private _pbslbSubnetCount?: number; 
  public get pbslbSubnetCount() {
    return this.getNumberAttribute('pbslb_subnet_count');
  }
  public set pbslbSubnetCount(value: number) {
    this._pbslbSubnetCount = value;
  }
  public resetPbslbSubnetCount() {
    this._pbslbSubnetCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbslbSubnetCountInput() {
    return this._pbslbSubnetCount;
  }

  // persist_cookie_template_count - computed: false, optional: true, required: false
  private _persistCookieTemplateCount?: number; 
  public get persistCookieTemplateCount() {
    return this.getNumberAttribute('persist_cookie_template_count');
  }
  public set persistCookieTemplateCount(value: number) {
    this._persistCookieTemplateCount = value;
  }
  public resetPersistCookieTemplateCount() {
    this._persistCookieTemplateCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistCookieTemplateCountInput() {
    return this._persistCookieTemplateCount;
  }

  // persist_srcip_template_count - computed: false, optional: true, required: false
  private _persistSrcipTemplateCount?: number; 
  public get persistSrcipTemplateCount() {
    return this.getNumberAttribute('persist_srcip_template_count');
  }
  public set persistSrcipTemplateCount(value: number) {
    this._persistSrcipTemplateCount = value;
  }
  public resetPersistSrcipTemplateCount() {
    this._persistSrcipTemplateCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistSrcipTemplateCountInput() {
    return this._persistSrcipTemplateCount;
  }

  // proxy_template_count - computed: false, optional: true, required: false
  private _proxyTemplateCount?: number; 
  public get proxyTemplateCount() {
    return this.getNumberAttribute('proxy_template_count');
  }
  public set proxyTemplateCount(value: number) {
    this._proxyTemplateCount = value;
  }
  public resetProxyTemplateCount() {
    this._proxyTemplateCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTemplateCountInput() {
    return this._proxyTemplateCount;
  }

  // real_port_count - computed: false, optional: true, required: false
  private _realPortCount?: number; 
  public get realPortCount() {
    return this.getNumberAttribute('real_port_count');
  }
  public set realPortCount(value: number) {
    this._realPortCount = value;
  }
  public resetRealPortCount() {
    this._realPortCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realPortCountInput() {
    return this._realPortCount;
  }

  // real_server_count - computed: false, optional: true, required: false
  private _realServerCount?: number; 
  public get realServerCount() {
    return this.getNumberAttribute('real_server_count');
  }
  public set realServerCount(value: number) {
    this._realServerCount = value;
  }
  public resetRealServerCount() {
    this._realServerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realServerCountInput() {
    return this._realServerCount;
  }

  // server_ssl_template_count - computed: false, optional: true, required: false
  private _serverSslTemplateCount?: number; 
  public get serverSslTemplateCount() {
    return this.getNumberAttribute('server_ssl_template_count');
  }
  public set serverSslTemplateCount(value: number) {
    this._serverSslTemplateCount = value;
  }
  public resetServerSslTemplateCount() {
    this._serverSslTemplateCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSslTemplateCountInput() {
    return this._serverSslTemplateCount;
  }

  // service_group_count - computed: false, optional: true, required: false
  private _serviceGroupCount?: number; 
  public get serviceGroupCount() {
    return this.getNumberAttribute('service_group_count');
  }
  public set serviceGroupCount(value: number) {
    this._serviceGroupCount = value;
  }
  public resetServiceGroupCount() {
    this._serviceGroupCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupCountInput() {
    return this._serviceGroupCount;
  }

  // slb_threshold_res_usage_percent - computed: false, optional: true, required: false
  private _slbThresholdResUsagePercent?: number; 
  public get slbThresholdResUsagePercent() {
    return this.getNumberAttribute('slb_threshold_res_usage_percent');
  }
  public set slbThresholdResUsagePercent(value: number) {
    this._slbThresholdResUsagePercent = value;
  }
  public resetSlbThresholdResUsagePercent() {
    this._slbThresholdResUsagePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbThresholdResUsagePercentInput() {
    return this._slbThresholdResUsagePercent;
  }

  // stream_template_count - computed: false, optional: true, required: false
  private _streamTemplateCount?: number; 
  public get streamTemplateCount() {
    return this.getNumberAttribute('stream_template_count');
  }
  public set streamTemplateCount(value: number) {
    this._streamTemplateCount = value;
  }
  public resetStreamTemplateCount() {
    this._streamTemplateCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamTemplateCountInput() {
    return this._streamTemplateCount;
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

  // virtual_port_count - computed: false, optional: true, required: false
  private _virtualPortCount?: number; 
  public get virtualPortCount() {
    return this.getNumberAttribute('virtual_port_count');
  }
  public set virtualPortCount(value: number) {
    this._virtualPortCount = value;
  }
  public resetVirtualPortCount() {
    this._virtualPortCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPortCountInput() {
    return this._virtualPortCount;
  }

  // virtual_server_count - computed: false, optional: true, required: false
  private _virtualServerCount?: number; 
  public get virtualServerCount() {
    return this.getNumberAttribute('virtual_server_count');
  }
  public set virtualServerCount(value: number) {
    this._virtualServerCount = value;
  }
  public resetVirtualServerCount() {
    this._virtualServerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerCountInput() {
    return this._virtualServerCount;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_template_count: cdktf.numberToTerraform(this._cacheTemplateCount),
      client_ssl_template_count: cdktf.numberToTerraform(this._clientSslTemplateCount),
      conn_reuse_template_count: cdktf.numberToTerraform(this._connReuseTemplateCount),
      fast_tcp_template_count: cdktf.numberToTerraform(this._fastTcpTemplateCount),
      fast_udp_template_count: cdktf.numberToTerraform(this._fastUdpTemplateCount),
      fix_template_count: cdktf.numberToTerraform(this._fixTemplateCount),
      gslb_device_count: cdktf.numberToTerraform(this._gslbDeviceCount),
      gslb_geo_location_count: cdktf.numberToTerraform(this._gslbGeoLocationCount),
      gslb_ip_list_count: cdktf.numberToTerraform(this._gslbIpListCount),
      gslb_policy_count: cdktf.numberToTerraform(this._gslbPolicyCount),
      gslb_service_count: cdktf.numberToTerraform(this._gslbServiceCount),
      gslb_service_ip_count: cdktf.numberToTerraform(this._gslbServiceIpCount),
      gslb_service_port_count: cdktf.numberToTerraform(this._gslbServicePortCount),
      gslb_site_count: cdktf.numberToTerraform(this._gslbSiteCount),
      gslb_svc_group_count: cdktf.numberToTerraform(this._gslbSvcGroupCount),
      gslb_template_count: cdktf.numberToTerraform(this._gslbTemplateCount),
      gslb_zone_count: cdktf.numberToTerraform(this._gslbZoneCount),
      health_monitor_count: cdktf.numberToTerraform(this._healthMonitorCount),
      http_template_count: cdktf.numberToTerraform(this._httpTemplateCount),
      id: cdktf.stringToTerraform(this._id),
      link_cost_template_count: cdktf.numberToTerraform(this._linkCostTemplateCount),
      log_template_count: cdktf.numberToTerraform(this._logTemplateCount),
      nat_pool_addr_count: cdktf.numberToTerraform(this._natPoolAddrCount),
      pbslb_entry_count: cdktf.numberToTerraform(this._pbslbEntryCount),
      pbslb_subnet_count: cdktf.numberToTerraform(this._pbslbSubnetCount),
      persist_cookie_template_count: cdktf.numberToTerraform(this._persistCookieTemplateCount),
      persist_srcip_template_count: cdktf.numberToTerraform(this._persistSrcipTemplateCount),
      proxy_template_count: cdktf.numberToTerraform(this._proxyTemplateCount),
      real_port_count: cdktf.numberToTerraform(this._realPortCount),
      real_server_count: cdktf.numberToTerraform(this._realServerCount),
      server_ssl_template_count: cdktf.numberToTerraform(this._serverSslTemplateCount),
      service_group_count: cdktf.numberToTerraform(this._serviceGroupCount),
      slb_threshold_res_usage_percent: cdktf.numberToTerraform(this._slbThresholdResUsagePercent),
      stream_template_count: cdktf.numberToTerraform(this._streamTemplateCount),
      uuid: cdktf.stringToTerraform(this._uuid),
      virtual_port_count: cdktf.numberToTerraform(this._virtualPortCount),
      virtual_server_count: cdktf.numberToTerraform(this._virtualServerCount),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_template_count: {
        value: cdktf.numberToHclTerraform(this._cacheTemplateCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_ssl_template_count: {
        value: cdktf.numberToHclTerraform(this._clientSslTemplateCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_reuse_template_count: {
        value: cdktf.numberToHclTerraform(this._connReuseTemplateCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fast_tcp_template_count: {
        value: cdktf.numberToHclTerraform(this._fastTcpTemplateCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fast_udp_template_count: {
        value: cdktf.numberToHclTerraform(this._fastUdpTemplateCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fix_template_count: {
        value: cdktf.numberToHclTerraform(this._fixTemplateCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gslb_device_count: {
        value: cdktf.numberToHclTerraform(this._gslbDeviceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gslb_geo_location_count: {
        value: cdktf.numberToHclTerraform(this._gslbGeoLocationCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gslb_ip_list_count: {
        value: cdktf.numberToHclTerraform(this._gslbIpListCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gslb_policy_count: {
        value: cdktf.numberToHclTerraform(this._gslbPolicyCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gslb_service_count: {
        value: cdktf.numberToHclTerraform(this._gslbServiceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gslb_service_ip_count: {
        value: cdktf.numberToHclTerraform(this._gslbServiceIpCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gslb_service_port_count: {
        value: cdktf.numberToHclTerraform(this._gslbServicePortCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gslb_site_count: {
        value: cdktf.numberToHclTerraform(this._gslbSiteCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gslb_svc_group_count: {
        value: cdktf.numberToHclTerraform(this._gslbSvcGroupCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gslb_template_count: {
        value: cdktf.numberToHclTerraform(this._gslbTemplateCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gslb_zone_count: {
        value: cdktf.numberToHclTerraform(this._gslbZoneCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_monitor_count: {
        value: cdktf.numberToHclTerraform(this._healthMonitorCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_template_count: {
        value: cdktf.numberToHclTerraform(this._httpTemplateCount),
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
      link_cost_template_count: {
        value: cdktf.numberToHclTerraform(this._linkCostTemplateCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_template_count: {
        value: cdktf.numberToHclTerraform(this._logTemplateCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat_pool_addr_count: {
        value: cdktf.numberToHclTerraform(this._natPoolAddrCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pbslb_entry_count: {
        value: cdktf.numberToHclTerraform(this._pbslbEntryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pbslb_subnet_count: {
        value: cdktf.numberToHclTerraform(this._pbslbSubnetCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      persist_cookie_template_count: {
        value: cdktf.numberToHclTerraform(this._persistCookieTemplateCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      persist_srcip_template_count: {
        value: cdktf.numberToHclTerraform(this._persistSrcipTemplateCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy_template_count: {
        value: cdktf.numberToHclTerraform(this._proxyTemplateCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      real_port_count: {
        value: cdktf.numberToHclTerraform(this._realPortCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      real_server_count: {
        value: cdktf.numberToHclTerraform(this._realServerCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_ssl_template_count: {
        value: cdktf.numberToHclTerraform(this._serverSslTemplateCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_group_count: {
        value: cdktf.numberToHclTerraform(this._serviceGroupCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slb_threshold_res_usage_percent: {
        value: cdktf.numberToHclTerraform(this._slbThresholdResUsagePercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stream_template_count: {
        value: cdktf.numberToHclTerraform(this._streamTemplateCount),
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
      virtual_port_count: {
        value: cdktf.numberToHclTerraform(this._virtualPortCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      virtual_server_count: {
        value: cdktf.numberToHclTerraform(this._virtualServerCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
