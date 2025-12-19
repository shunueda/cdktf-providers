// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbResourceUsageOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#id DataThunderSlbResourceUsageOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#oper DataThunderSlbResourceUsageOper#oper}
  */
  readonly oper?: DataThunderSlbResourceUsageOperOper;
}
export interface DataThunderSlbResourceUsageOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#cache_template_default DataThunderSlbResourceUsageOper#cache_template_default}
  */
  readonly cacheTemplateDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#cache_template_max DataThunderSlbResourceUsageOper#cache_template_max}
  */
  readonly cacheTemplateMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#cache_template_min DataThunderSlbResourceUsageOper#cache_template_min}
  */
  readonly cacheTemplateMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#client_ssl_template_default DataThunderSlbResourceUsageOper#client_ssl_template_default}
  */
  readonly clientSslTemplateDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#client_ssl_template_max DataThunderSlbResourceUsageOper#client_ssl_template_max}
  */
  readonly clientSslTemplateMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#client_ssl_template_min DataThunderSlbResourceUsageOper#client_ssl_template_min}
  */
  readonly clientSslTemplateMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#conn_reuse_template_default DataThunderSlbResourceUsageOper#conn_reuse_template_default}
  */
  readonly connReuseTemplateDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#conn_reuse_template_max DataThunderSlbResourceUsageOper#conn_reuse_template_max}
  */
  readonly connReuseTemplateMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#conn_reuse_template_min DataThunderSlbResourceUsageOper#conn_reuse_template_min}
  */
  readonly connReuseTemplateMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#fast_tcp_template_default DataThunderSlbResourceUsageOper#fast_tcp_template_default}
  */
  readonly fastTcpTemplateDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#fast_tcp_template_max DataThunderSlbResourceUsageOper#fast_tcp_template_max}
  */
  readonly fastTcpTemplateMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#fast_tcp_template_min DataThunderSlbResourceUsageOper#fast_tcp_template_min}
  */
  readonly fastTcpTemplateMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#fast_udp_template_default DataThunderSlbResourceUsageOper#fast_udp_template_default}
  */
  readonly fastUdpTemplateDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#fast_udp_template_max DataThunderSlbResourceUsageOper#fast_udp_template_max}
  */
  readonly fastUdpTemplateMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#fast_udp_template_min DataThunderSlbResourceUsageOper#fast_udp_template_min}
  */
  readonly fastUdpTemplateMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#fix_template_default DataThunderSlbResourceUsageOper#fix_template_default}
  */
  readonly fixTemplateDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#fix_template_max DataThunderSlbResourceUsageOper#fix_template_max}
  */
  readonly fixTemplateMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#fix_template_min DataThunderSlbResourceUsageOper#fix_template_min}
  */
  readonly fixTemplateMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_device_count_default DataThunderSlbResourceUsageOper#gslb_device_count_default}
  */
  readonly gslbDeviceCountDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_device_count_max DataThunderSlbResourceUsageOper#gslb_device_count_max}
  */
  readonly gslbDeviceCountMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_device_count_min DataThunderSlbResourceUsageOper#gslb_device_count_min}
  */
  readonly gslbDeviceCountMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_geo_location_count_default DataThunderSlbResourceUsageOper#gslb_geo_location_count_default}
  */
  readonly gslbGeoLocationCountDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_geo_location_count_max DataThunderSlbResourceUsageOper#gslb_geo_location_count_max}
  */
  readonly gslbGeoLocationCountMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_geo_location_count_min DataThunderSlbResourceUsageOper#gslb_geo_location_count_min}
  */
  readonly gslbGeoLocationCountMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_ip_list_count_default DataThunderSlbResourceUsageOper#gslb_ip_list_count_default}
  */
  readonly gslbIpListCountDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_ip_list_count_max DataThunderSlbResourceUsageOper#gslb_ip_list_count_max}
  */
  readonly gslbIpListCountMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_ip_list_count_min DataThunderSlbResourceUsageOper#gslb_ip_list_count_min}
  */
  readonly gslbIpListCountMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_policy_count_default DataThunderSlbResourceUsageOper#gslb_policy_count_default}
  */
  readonly gslbPolicyCountDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_policy_count_max DataThunderSlbResourceUsageOper#gslb_policy_count_max}
  */
  readonly gslbPolicyCountMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_policy_count_min DataThunderSlbResourceUsageOper#gslb_policy_count_min}
  */
  readonly gslbPolicyCountMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_service_count_default DataThunderSlbResourceUsageOper#gslb_service_count_default}
  */
  readonly gslbServiceCountDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_service_count_max DataThunderSlbResourceUsageOper#gslb_service_count_max}
  */
  readonly gslbServiceCountMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_service_count_min DataThunderSlbResourceUsageOper#gslb_service_count_min}
  */
  readonly gslbServiceCountMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_service_ip_count_default DataThunderSlbResourceUsageOper#gslb_service_ip_count_default}
  */
  readonly gslbServiceIpCountDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_service_ip_count_max DataThunderSlbResourceUsageOper#gslb_service_ip_count_max}
  */
  readonly gslbServiceIpCountMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_service_ip_count_min DataThunderSlbResourceUsageOper#gslb_service_ip_count_min}
  */
  readonly gslbServiceIpCountMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_service_port_count_default DataThunderSlbResourceUsageOper#gslb_service_port_count_default}
  */
  readonly gslbServicePortCountDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_service_port_count_max DataThunderSlbResourceUsageOper#gslb_service_port_count_max}
  */
  readonly gslbServicePortCountMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_service_port_count_min DataThunderSlbResourceUsageOper#gslb_service_port_count_min}
  */
  readonly gslbServicePortCountMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_site_count_default DataThunderSlbResourceUsageOper#gslb_site_count_default}
  */
  readonly gslbSiteCountDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_site_count_max DataThunderSlbResourceUsageOper#gslb_site_count_max}
  */
  readonly gslbSiteCountMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_site_count_min DataThunderSlbResourceUsageOper#gslb_site_count_min}
  */
  readonly gslbSiteCountMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_svcgroup_count_default DataThunderSlbResourceUsageOper#gslb_svcgroup_count_default}
  */
  readonly gslbSvcgroupCountDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_svcgroup_count_max DataThunderSlbResourceUsageOper#gslb_svcgroup_count_max}
  */
  readonly gslbSvcgroupCountMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_svcgroup_count_min DataThunderSlbResourceUsageOper#gslb_svcgroup_count_min}
  */
  readonly gslbSvcgroupCountMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_template_count_default DataThunderSlbResourceUsageOper#gslb_template_count_default}
  */
  readonly gslbTemplateCountDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_template_count_max DataThunderSlbResourceUsageOper#gslb_template_count_max}
  */
  readonly gslbTemplateCountMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_template_count_min DataThunderSlbResourceUsageOper#gslb_template_count_min}
  */
  readonly gslbTemplateCountMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_zone_count_default DataThunderSlbResourceUsageOper#gslb_zone_count_default}
  */
  readonly gslbZoneCountDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_zone_count_max DataThunderSlbResourceUsageOper#gslb_zone_count_max}
  */
  readonly gslbZoneCountMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#gslb_zone_count_min DataThunderSlbResourceUsageOper#gslb_zone_count_min}
  */
  readonly gslbZoneCountMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#health_monitor_count_default DataThunderSlbResourceUsageOper#health_monitor_count_default}
  */
  readonly healthMonitorCountDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#health_monitor_count_max DataThunderSlbResourceUsageOper#health_monitor_count_max}
  */
  readonly healthMonitorCountMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#health_monitor_count_min DataThunderSlbResourceUsageOper#health_monitor_count_min}
  */
  readonly healthMonitorCountMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#http_template_default DataThunderSlbResourceUsageOper#http_template_default}
  */
  readonly httpTemplateDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#http_template_max DataThunderSlbResourceUsageOper#http_template_max}
  */
  readonly httpTemplateMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#http_template_min DataThunderSlbResourceUsageOper#http_template_min}
  */
  readonly httpTemplateMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#link_cost_template_default DataThunderSlbResourceUsageOper#link_cost_template_default}
  */
  readonly linkCostTemplateDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#link_cost_template_max DataThunderSlbResourceUsageOper#link_cost_template_max}
  */
  readonly linkCostTemplateMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#link_cost_template_min DataThunderSlbResourceUsageOper#link_cost_template_min}
  */
  readonly linkCostTemplateMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#log_template_default DataThunderSlbResourceUsageOper#log_template_default}
  */
  readonly logTemplateDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#log_template_max DataThunderSlbResourceUsageOper#log_template_max}
  */
  readonly logTemplateMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#log_template_min DataThunderSlbResourceUsageOper#log_template_min}
  */
  readonly logTemplateMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#nat_pool_addr_default DataThunderSlbResourceUsageOper#nat_pool_addr_default}
  */
  readonly natPoolAddrDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#nat_pool_addr_max DataThunderSlbResourceUsageOper#nat_pool_addr_max}
  */
  readonly natPoolAddrMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#nat_pool_addr_min DataThunderSlbResourceUsageOper#nat_pool_addr_min}
  */
  readonly natPoolAddrMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#pbslb_entry_default DataThunderSlbResourceUsageOper#pbslb_entry_default}
  */
  readonly pbslbEntryDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#pbslb_entry_max DataThunderSlbResourceUsageOper#pbslb_entry_max}
  */
  readonly pbslbEntryMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#pbslb_entry_min DataThunderSlbResourceUsageOper#pbslb_entry_min}
  */
  readonly pbslbEntryMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#pbslb_subnet_count_default DataThunderSlbResourceUsageOper#pbslb_subnet_count_default}
  */
  readonly pbslbSubnetCountDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#pbslb_subnet_count_max DataThunderSlbResourceUsageOper#pbslb_subnet_count_max}
  */
  readonly pbslbSubnetCountMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#pbslb_subnet_count_min DataThunderSlbResourceUsageOper#pbslb_subnet_count_min}
  */
  readonly pbslbSubnetCountMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#persist_cookie_template_default DataThunderSlbResourceUsageOper#persist_cookie_template_default}
  */
  readonly persistCookieTemplateDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#persist_cookie_template_max DataThunderSlbResourceUsageOper#persist_cookie_template_max}
  */
  readonly persistCookieTemplateMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#persist_cookie_template_min DataThunderSlbResourceUsageOper#persist_cookie_template_min}
  */
  readonly persistCookieTemplateMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#persist_srcip_template_default DataThunderSlbResourceUsageOper#persist_srcip_template_default}
  */
  readonly persistSrcipTemplateDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#persist_srcip_template_max DataThunderSlbResourceUsageOper#persist_srcip_template_max}
  */
  readonly persistSrcipTemplateMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#persist_srcip_template_min DataThunderSlbResourceUsageOper#persist_srcip_template_min}
  */
  readonly persistSrcipTemplateMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#proxy_template_default DataThunderSlbResourceUsageOper#proxy_template_default}
  */
  readonly proxyTemplateDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#proxy_template_max DataThunderSlbResourceUsageOper#proxy_template_max}
  */
  readonly proxyTemplateMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#proxy_template_min DataThunderSlbResourceUsageOper#proxy_template_min}
  */
  readonly proxyTemplateMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#real_port_default DataThunderSlbResourceUsageOper#real_port_default}
  */
  readonly realPortDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#real_port_max DataThunderSlbResourceUsageOper#real_port_max}
  */
  readonly realPortMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#real_port_min DataThunderSlbResourceUsageOper#real_port_min}
  */
  readonly realPortMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#real_server_default DataThunderSlbResourceUsageOper#real_server_default}
  */
  readonly realServerDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#real_server_max DataThunderSlbResourceUsageOper#real_server_max}
  */
  readonly realServerMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#real_server_min DataThunderSlbResourceUsageOper#real_server_min}
  */
  readonly realServerMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#server_ssl_template_default DataThunderSlbResourceUsageOper#server_ssl_template_default}
  */
  readonly serverSslTemplateDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#server_ssl_template_max DataThunderSlbResourceUsageOper#server_ssl_template_max}
  */
  readonly serverSslTemplateMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#server_ssl_template_min DataThunderSlbResourceUsageOper#server_ssl_template_min}
  */
  readonly serverSslTemplateMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#service_group_default DataThunderSlbResourceUsageOper#service_group_default}
  */
  readonly serviceGroupDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#service_group_max DataThunderSlbResourceUsageOper#service_group_max}
  */
  readonly serviceGroupMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#service_group_min DataThunderSlbResourceUsageOper#service_group_min}
  */
  readonly serviceGroupMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#slb_threshold_res_usage_default DataThunderSlbResourceUsageOper#slb_threshold_res_usage_default}
  */
  readonly slbThresholdResUsageDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#slb_threshold_res_usage_max DataThunderSlbResourceUsageOper#slb_threshold_res_usage_max}
  */
  readonly slbThresholdResUsageMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#slb_threshold_res_usage_min DataThunderSlbResourceUsageOper#slb_threshold_res_usage_min}
  */
  readonly slbThresholdResUsageMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#stream_template_default DataThunderSlbResourceUsageOper#stream_template_default}
  */
  readonly streamTemplateDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#stream_template_max DataThunderSlbResourceUsageOper#stream_template_max}
  */
  readonly streamTemplateMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#stream_template_min DataThunderSlbResourceUsageOper#stream_template_min}
  */
  readonly streamTemplateMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#virtual_port_default DataThunderSlbResourceUsageOper#virtual_port_default}
  */
  readonly virtualPortDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#virtual_port_max DataThunderSlbResourceUsageOper#virtual_port_max}
  */
  readonly virtualPortMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#virtual_port_min DataThunderSlbResourceUsageOper#virtual_port_min}
  */
  readonly virtualPortMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#virtual_server_default DataThunderSlbResourceUsageOper#virtual_server_default}
  */
  readonly virtualServerDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#virtual_server_max DataThunderSlbResourceUsageOper#virtual_server_max}
  */
  readonly virtualServerMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#virtual_server_min DataThunderSlbResourceUsageOper#virtual_server_min}
  */
  readonly virtualServerMin?: number;
}

export function dataThunderSlbResourceUsageOperOperToTerraform(struct?: DataThunderSlbResourceUsageOperOperOutputReference | DataThunderSlbResourceUsageOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_template_default: cdktf.numberToTerraform(struct!.cacheTemplateDefault),
    cache_template_max: cdktf.numberToTerraform(struct!.cacheTemplateMax),
    cache_template_min: cdktf.numberToTerraform(struct!.cacheTemplateMin),
    client_ssl_template_default: cdktf.numberToTerraform(struct!.clientSslTemplateDefault),
    client_ssl_template_max: cdktf.numberToTerraform(struct!.clientSslTemplateMax),
    client_ssl_template_min: cdktf.numberToTerraform(struct!.clientSslTemplateMin),
    conn_reuse_template_default: cdktf.numberToTerraform(struct!.connReuseTemplateDefault),
    conn_reuse_template_max: cdktf.numberToTerraform(struct!.connReuseTemplateMax),
    conn_reuse_template_min: cdktf.numberToTerraform(struct!.connReuseTemplateMin),
    fast_tcp_template_default: cdktf.numberToTerraform(struct!.fastTcpTemplateDefault),
    fast_tcp_template_max: cdktf.numberToTerraform(struct!.fastTcpTemplateMax),
    fast_tcp_template_min: cdktf.numberToTerraform(struct!.fastTcpTemplateMin),
    fast_udp_template_default: cdktf.numberToTerraform(struct!.fastUdpTemplateDefault),
    fast_udp_template_max: cdktf.numberToTerraform(struct!.fastUdpTemplateMax),
    fast_udp_template_min: cdktf.numberToTerraform(struct!.fastUdpTemplateMin),
    fix_template_default: cdktf.numberToTerraform(struct!.fixTemplateDefault),
    fix_template_max: cdktf.numberToTerraform(struct!.fixTemplateMax),
    fix_template_min: cdktf.numberToTerraform(struct!.fixTemplateMin),
    gslb_device_count_default: cdktf.numberToTerraform(struct!.gslbDeviceCountDefault),
    gslb_device_count_max: cdktf.numberToTerraform(struct!.gslbDeviceCountMax),
    gslb_device_count_min: cdktf.numberToTerraform(struct!.gslbDeviceCountMin),
    gslb_geo_location_count_default: cdktf.numberToTerraform(struct!.gslbGeoLocationCountDefault),
    gslb_geo_location_count_max: cdktf.numberToTerraform(struct!.gslbGeoLocationCountMax),
    gslb_geo_location_count_min: cdktf.numberToTerraform(struct!.gslbGeoLocationCountMin),
    gslb_ip_list_count_default: cdktf.numberToTerraform(struct!.gslbIpListCountDefault),
    gslb_ip_list_count_max: cdktf.numberToTerraform(struct!.gslbIpListCountMax),
    gslb_ip_list_count_min: cdktf.numberToTerraform(struct!.gslbIpListCountMin),
    gslb_policy_count_default: cdktf.numberToTerraform(struct!.gslbPolicyCountDefault),
    gslb_policy_count_max: cdktf.numberToTerraform(struct!.gslbPolicyCountMax),
    gslb_policy_count_min: cdktf.numberToTerraform(struct!.gslbPolicyCountMin),
    gslb_service_count_default: cdktf.numberToTerraform(struct!.gslbServiceCountDefault),
    gslb_service_count_max: cdktf.numberToTerraform(struct!.gslbServiceCountMax),
    gslb_service_count_min: cdktf.numberToTerraform(struct!.gslbServiceCountMin),
    gslb_service_ip_count_default: cdktf.numberToTerraform(struct!.gslbServiceIpCountDefault),
    gslb_service_ip_count_max: cdktf.numberToTerraform(struct!.gslbServiceIpCountMax),
    gslb_service_ip_count_min: cdktf.numberToTerraform(struct!.gslbServiceIpCountMin),
    gslb_service_port_count_default: cdktf.numberToTerraform(struct!.gslbServicePortCountDefault),
    gslb_service_port_count_max: cdktf.numberToTerraform(struct!.gslbServicePortCountMax),
    gslb_service_port_count_min: cdktf.numberToTerraform(struct!.gslbServicePortCountMin),
    gslb_site_count_default: cdktf.numberToTerraform(struct!.gslbSiteCountDefault),
    gslb_site_count_max: cdktf.numberToTerraform(struct!.gslbSiteCountMax),
    gslb_site_count_min: cdktf.numberToTerraform(struct!.gslbSiteCountMin),
    gslb_svcgroup_count_default: cdktf.numberToTerraform(struct!.gslbSvcgroupCountDefault),
    gslb_svcgroup_count_max: cdktf.numberToTerraform(struct!.gslbSvcgroupCountMax),
    gslb_svcgroup_count_min: cdktf.numberToTerraform(struct!.gslbSvcgroupCountMin),
    gslb_template_count_default: cdktf.numberToTerraform(struct!.gslbTemplateCountDefault),
    gslb_template_count_max: cdktf.numberToTerraform(struct!.gslbTemplateCountMax),
    gslb_template_count_min: cdktf.numberToTerraform(struct!.gslbTemplateCountMin),
    gslb_zone_count_default: cdktf.numberToTerraform(struct!.gslbZoneCountDefault),
    gslb_zone_count_max: cdktf.numberToTerraform(struct!.gslbZoneCountMax),
    gslb_zone_count_min: cdktf.numberToTerraform(struct!.gslbZoneCountMin),
    health_monitor_count_default: cdktf.numberToTerraform(struct!.healthMonitorCountDefault),
    health_monitor_count_max: cdktf.numberToTerraform(struct!.healthMonitorCountMax),
    health_monitor_count_min: cdktf.numberToTerraform(struct!.healthMonitorCountMin),
    http_template_default: cdktf.numberToTerraform(struct!.httpTemplateDefault),
    http_template_max: cdktf.numberToTerraform(struct!.httpTemplateMax),
    http_template_min: cdktf.numberToTerraform(struct!.httpTemplateMin),
    link_cost_template_default: cdktf.numberToTerraform(struct!.linkCostTemplateDefault),
    link_cost_template_max: cdktf.numberToTerraform(struct!.linkCostTemplateMax),
    link_cost_template_min: cdktf.numberToTerraform(struct!.linkCostTemplateMin),
    log_template_default: cdktf.numberToTerraform(struct!.logTemplateDefault),
    log_template_max: cdktf.numberToTerraform(struct!.logTemplateMax),
    log_template_min: cdktf.numberToTerraform(struct!.logTemplateMin),
    nat_pool_addr_default: cdktf.numberToTerraform(struct!.natPoolAddrDefault),
    nat_pool_addr_max: cdktf.numberToTerraform(struct!.natPoolAddrMax),
    nat_pool_addr_min: cdktf.numberToTerraform(struct!.natPoolAddrMin),
    pbslb_entry_default: cdktf.numberToTerraform(struct!.pbslbEntryDefault),
    pbslb_entry_max: cdktf.numberToTerraform(struct!.pbslbEntryMax),
    pbslb_entry_min: cdktf.numberToTerraform(struct!.pbslbEntryMin),
    pbslb_subnet_count_default: cdktf.numberToTerraform(struct!.pbslbSubnetCountDefault),
    pbslb_subnet_count_max: cdktf.numberToTerraform(struct!.pbslbSubnetCountMax),
    pbslb_subnet_count_min: cdktf.numberToTerraform(struct!.pbslbSubnetCountMin),
    persist_cookie_template_default: cdktf.numberToTerraform(struct!.persistCookieTemplateDefault),
    persist_cookie_template_max: cdktf.numberToTerraform(struct!.persistCookieTemplateMax),
    persist_cookie_template_min: cdktf.numberToTerraform(struct!.persistCookieTemplateMin),
    persist_srcip_template_default: cdktf.numberToTerraform(struct!.persistSrcipTemplateDefault),
    persist_srcip_template_max: cdktf.numberToTerraform(struct!.persistSrcipTemplateMax),
    persist_srcip_template_min: cdktf.numberToTerraform(struct!.persistSrcipTemplateMin),
    proxy_template_default: cdktf.numberToTerraform(struct!.proxyTemplateDefault),
    proxy_template_max: cdktf.numberToTerraform(struct!.proxyTemplateMax),
    proxy_template_min: cdktf.numberToTerraform(struct!.proxyTemplateMin),
    real_port_default: cdktf.numberToTerraform(struct!.realPortDefault),
    real_port_max: cdktf.numberToTerraform(struct!.realPortMax),
    real_port_min: cdktf.numberToTerraform(struct!.realPortMin),
    real_server_default: cdktf.numberToTerraform(struct!.realServerDefault),
    real_server_max: cdktf.numberToTerraform(struct!.realServerMax),
    real_server_min: cdktf.numberToTerraform(struct!.realServerMin),
    server_ssl_template_default: cdktf.numberToTerraform(struct!.serverSslTemplateDefault),
    server_ssl_template_max: cdktf.numberToTerraform(struct!.serverSslTemplateMax),
    server_ssl_template_min: cdktf.numberToTerraform(struct!.serverSslTemplateMin),
    service_group_default: cdktf.numberToTerraform(struct!.serviceGroupDefault),
    service_group_max: cdktf.numberToTerraform(struct!.serviceGroupMax),
    service_group_min: cdktf.numberToTerraform(struct!.serviceGroupMin),
    slb_threshold_res_usage_default: cdktf.numberToTerraform(struct!.slbThresholdResUsageDefault),
    slb_threshold_res_usage_max: cdktf.numberToTerraform(struct!.slbThresholdResUsageMax),
    slb_threshold_res_usage_min: cdktf.numberToTerraform(struct!.slbThresholdResUsageMin),
    stream_template_default: cdktf.numberToTerraform(struct!.streamTemplateDefault),
    stream_template_max: cdktf.numberToTerraform(struct!.streamTemplateMax),
    stream_template_min: cdktf.numberToTerraform(struct!.streamTemplateMin),
    virtual_port_default: cdktf.numberToTerraform(struct!.virtualPortDefault),
    virtual_port_max: cdktf.numberToTerraform(struct!.virtualPortMax),
    virtual_port_min: cdktf.numberToTerraform(struct!.virtualPortMin),
    virtual_server_default: cdktf.numberToTerraform(struct!.virtualServerDefault),
    virtual_server_max: cdktf.numberToTerraform(struct!.virtualServerMax),
    virtual_server_min: cdktf.numberToTerraform(struct!.virtualServerMin),
  }
}


export function dataThunderSlbResourceUsageOperOperToHclTerraform(struct?: DataThunderSlbResourceUsageOperOperOutputReference | DataThunderSlbResourceUsageOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_template_default: {
      value: cdktf.numberToHclTerraform(struct!.cacheTemplateDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_template_max: {
      value: cdktf.numberToHclTerraform(struct!.cacheTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_template_min: {
      value: cdktf.numberToHclTerraform(struct!.cacheTemplateMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_ssl_template_default: {
      value: cdktf.numberToHclTerraform(struct!.clientSslTemplateDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_ssl_template_max: {
      value: cdktf.numberToHclTerraform(struct!.clientSslTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_ssl_template_min: {
      value: cdktf.numberToHclTerraform(struct!.clientSslTemplateMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_reuse_template_default: {
      value: cdktf.numberToHclTerraform(struct!.connReuseTemplateDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_reuse_template_max: {
      value: cdktf.numberToHclTerraform(struct!.connReuseTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_reuse_template_min: {
      value: cdktf.numberToHclTerraform(struct!.connReuseTemplateMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fast_tcp_template_default: {
      value: cdktf.numberToHclTerraform(struct!.fastTcpTemplateDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fast_tcp_template_max: {
      value: cdktf.numberToHclTerraform(struct!.fastTcpTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fast_tcp_template_min: {
      value: cdktf.numberToHclTerraform(struct!.fastTcpTemplateMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fast_udp_template_default: {
      value: cdktf.numberToHclTerraform(struct!.fastUdpTemplateDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fast_udp_template_max: {
      value: cdktf.numberToHclTerraform(struct!.fastUdpTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fast_udp_template_min: {
      value: cdktf.numberToHclTerraform(struct!.fastUdpTemplateMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fix_template_default: {
      value: cdktf.numberToHclTerraform(struct!.fixTemplateDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fix_template_max: {
      value: cdktf.numberToHclTerraform(struct!.fixTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fix_template_min: {
      value: cdktf.numberToHclTerraform(struct!.fixTemplateMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_device_count_default: {
      value: cdktf.numberToHclTerraform(struct!.gslbDeviceCountDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_device_count_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbDeviceCountMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_device_count_min: {
      value: cdktf.numberToHclTerraform(struct!.gslbDeviceCountMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_geo_location_count_default: {
      value: cdktf.numberToHclTerraform(struct!.gslbGeoLocationCountDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_geo_location_count_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbGeoLocationCountMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_geo_location_count_min: {
      value: cdktf.numberToHclTerraform(struct!.gslbGeoLocationCountMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_ip_list_count_default: {
      value: cdktf.numberToHclTerraform(struct!.gslbIpListCountDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_ip_list_count_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbIpListCountMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_ip_list_count_min: {
      value: cdktf.numberToHclTerraform(struct!.gslbIpListCountMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_policy_count_default: {
      value: cdktf.numberToHclTerraform(struct!.gslbPolicyCountDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_policy_count_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbPolicyCountMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_policy_count_min: {
      value: cdktf.numberToHclTerraform(struct!.gslbPolicyCountMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_service_count_default: {
      value: cdktf.numberToHclTerraform(struct!.gslbServiceCountDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_service_count_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbServiceCountMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_service_count_min: {
      value: cdktf.numberToHclTerraform(struct!.gslbServiceCountMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_service_ip_count_default: {
      value: cdktf.numberToHclTerraform(struct!.gslbServiceIpCountDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_service_ip_count_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbServiceIpCountMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_service_ip_count_min: {
      value: cdktf.numberToHclTerraform(struct!.gslbServiceIpCountMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_service_port_count_default: {
      value: cdktf.numberToHclTerraform(struct!.gslbServicePortCountDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_service_port_count_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbServicePortCountMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_service_port_count_min: {
      value: cdktf.numberToHclTerraform(struct!.gslbServicePortCountMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_site_count_default: {
      value: cdktf.numberToHclTerraform(struct!.gslbSiteCountDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_site_count_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbSiteCountMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_site_count_min: {
      value: cdktf.numberToHclTerraform(struct!.gslbSiteCountMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_svcgroup_count_default: {
      value: cdktf.numberToHclTerraform(struct!.gslbSvcgroupCountDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_svcgroup_count_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbSvcgroupCountMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_svcgroup_count_min: {
      value: cdktf.numberToHclTerraform(struct!.gslbSvcgroupCountMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_template_count_default: {
      value: cdktf.numberToHclTerraform(struct!.gslbTemplateCountDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_template_count_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbTemplateCountMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_template_count_min: {
      value: cdktf.numberToHclTerraform(struct!.gslbTemplateCountMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_zone_count_default: {
      value: cdktf.numberToHclTerraform(struct!.gslbZoneCountDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_zone_count_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbZoneCountMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_zone_count_min: {
      value: cdktf.numberToHclTerraform(struct!.gslbZoneCountMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_monitor_count_default: {
      value: cdktf.numberToHclTerraform(struct!.healthMonitorCountDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_monitor_count_max: {
      value: cdktf.numberToHclTerraform(struct!.healthMonitorCountMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_monitor_count_min: {
      value: cdktf.numberToHclTerraform(struct!.healthMonitorCountMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_template_default: {
      value: cdktf.numberToHclTerraform(struct!.httpTemplateDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_template_max: {
      value: cdktf.numberToHclTerraform(struct!.httpTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_template_min: {
      value: cdktf.numberToHclTerraform(struct!.httpTemplateMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_cost_template_default: {
      value: cdktf.numberToHclTerraform(struct!.linkCostTemplateDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_cost_template_max: {
      value: cdktf.numberToHclTerraform(struct!.linkCostTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_cost_template_min: {
      value: cdktf.numberToHclTerraform(struct!.linkCostTemplateMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_template_default: {
      value: cdktf.numberToHclTerraform(struct!.logTemplateDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_template_max: {
      value: cdktf.numberToHclTerraform(struct!.logTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_template_min: {
      value: cdktf.numberToHclTerraform(struct!.logTemplateMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_pool_addr_default: {
      value: cdktf.numberToHclTerraform(struct!.natPoolAddrDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_pool_addr_max: {
      value: cdktf.numberToHclTerraform(struct!.natPoolAddrMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_pool_addr_min: {
      value: cdktf.numberToHclTerraform(struct!.natPoolAddrMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pbslb_entry_default: {
      value: cdktf.numberToHclTerraform(struct!.pbslbEntryDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pbslb_entry_max: {
      value: cdktf.numberToHclTerraform(struct!.pbslbEntryMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pbslb_entry_min: {
      value: cdktf.numberToHclTerraform(struct!.pbslbEntryMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pbslb_subnet_count_default: {
      value: cdktf.numberToHclTerraform(struct!.pbslbSubnetCountDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pbslb_subnet_count_max: {
      value: cdktf.numberToHclTerraform(struct!.pbslbSubnetCountMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pbslb_subnet_count_min: {
      value: cdktf.numberToHclTerraform(struct!.pbslbSubnetCountMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persist_cookie_template_default: {
      value: cdktf.numberToHclTerraform(struct!.persistCookieTemplateDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persist_cookie_template_max: {
      value: cdktf.numberToHclTerraform(struct!.persistCookieTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persist_cookie_template_min: {
      value: cdktf.numberToHclTerraform(struct!.persistCookieTemplateMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persist_srcip_template_default: {
      value: cdktf.numberToHclTerraform(struct!.persistSrcipTemplateDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persist_srcip_template_max: {
      value: cdktf.numberToHclTerraform(struct!.persistSrcipTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persist_srcip_template_min: {
      value: cdktf.numberToHclTerraform(struct!.persistSrcipTemplateMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_template_default: {
      value: cdktf.numberToHclTerraform(struct!.proxyTemplateDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_template_max: {
      value: cdktf.numberToHclTerraform(struct!.proxyTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_template_min: {
      value: cdktf.numberToHclTerraform(struct!.proxyTemplateMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    real_port_default: {
      value: cdktf.numberToHclTerraform(struct!.realPortDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    real_port_max: {
      value: cdktf.numberToHclTerraform(struct!.realPortMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    real_port_min: {
      value: cdktf.numberToHclTerraform(struct!.realPortMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    real_server_default: {
      value: cdktf.numberToHclTerraform(struct!.realServerDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    real_server_max: {
      value: cdktf.numberToHclTerraform(struct!.realServerMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    real_server_min: {
      value: cdktf.numberToHclTerraform(struct!.realServerMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_ssl_template_default: {
      value: cdktf.numberToHclTerraform(struct!.serverSslTemplateDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_ssl_template_max: {
      value: cdktf.numberToHclTerraform(struct!.serverSslTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_ssl_template_min: {
      value: cdktf.numberToHclTerraform(struct!.serverSslTemplateMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_group_default: {
      value: cdktf.numberToHclTerraform(struct!.serviceGroupDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_group_max: {
      value: cdktf.numberToHclTerraform(struct!.serviceGroupMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_group_min: {
      value: cdktf.numberToHclTerraform(struct!.serviceGroupMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_threshold_res_usage_default: {
      value: cdktf.numberToHclTerraform(struct!.slbThresholdResUsageDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_threshold_res_usage_max: {
      value: cdktf.numberToHclTerraform(struct!.slbThresholdResUsageMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_threshold_res_usage_min: {
      value: cdktf.numberToHclTerraform(struct!.slbThresholdResUsageMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_template_default: {
      value: cdktf.numberToHclTerraform(struct!.streamTemplateDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_template_max: {
      value: cdktf.numberToHclTerraform(struct!.streamTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_template_min: {
      value: cdktf.numberToHclTerraform(struct!.streamTemplateMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_port_default: {
      value: cdktf.numberToHclTerraform(struct!.virtualPortDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_port_max: {
      value: cdktf.numberToHclTerraform(struct!.virtualPortMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_port_min: {
      value: cdktf.numberToHclTerraform(struct!.virtualPortMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_server_default: {
      value: cdktf.numberToHclTerraform(struct!.virtualServerDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_server_max: {
      value: cdktf.numberToHclTerraform(struct!.virtualServerMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_server_min: {
      value: cdktf.numberToHclTerraform(struct!.virtualServerMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbResourceUsageOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbResourceUsageOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheTemplateDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTemplateDefault = this._cacheTemplateDefault;
    }
    if (this._cacheTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTemplateMax = this._cacheTemplateMax;
    }
    if (this._cacheTemplateMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTemplateMin = this._cacheTemplateMin;
    }
    if (this._clientSslTemplateDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSslTemplateDefault = this._clientSslTemplateDefault;
    }
    if (this._clientSslTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSslTemplateMax = this._clientSslTemplateMax;
    }
    if (this._clientSslTemplateMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSslTemplateMin = this._clientSslTemplateMin;
    }
    if (this._connReuseTemplateDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.connReuseTemplateDefault = this._connReuseTemplateDefault;
    }
    if (this._connReuseTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.connReuseTemplateMax = this._connReuseTemplateMax;
    }
    if (this._connReuseTemplateMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.connReuseTemplateMin = this._connReuseTemplateMin;
    }
    if (this._fastTcpTemplateDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastTcpTemplateDefault = this._fastTcpTemplateDefault;
    }
    if (this._fastTcpTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastTcpTemplateMax = this._fastTcpTemplateMax;
    }
    if (this._fastTcpTemplateMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastTcpTemplateMin = this._fastTcpTemplateMin;
    }
    if (this._fastUdpTemplateDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastUdpTemplateDefault = this._fastUdpTemplateDefault;
    }
    if (this._fastUdpTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastUdpTemplateMax = this._fastUdpTemplateMax;
    }
    if (this._fastUdpTemplateMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastUdpTemplateMin = this._fastUdpTemplateMin;
    }
    if (this._fixTemplateDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixTemplateDefault = this._fixTemplateDefault;
    }
    if (this._fixTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixTemplateMax = this._fixTemplateMax;
    }
    if (this._fixTemplateMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixTemplateMin = this._fixTemplateMin;
    }
    if (this._gslbDeviceCountDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbDeviceCountDefault = this._gslbDeviceCountDefault;
    }
    if (this._gslbDeviceCountMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbDeviceCountMax = this._gslbDeviceCountMax;
    }
    if (this._gslbDeviceCountMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbDeviceCountMin = this._gslbDeviceCountMin;
    }
    if (this._gslbGeoLocationCountDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbGeoLocationCountDefault = this._gslbGeoLocationCountDefault;
    }
    if (this._gslbGeoLocationCountMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbGeoLocationCountMax = this._gslbGeoLocationCountMax;
    }
    if (this._gslbGeoLocationCountMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbGeoLocationCountMin = this._gslbGeoLocationCountMin;
    }
    if (this._gslbIpListCountDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbIpListCountDefault = this._gslbIpListCountDefault;
    }
    if (this._gslbIpListCountMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbIpListCountMax = this._gslbIpListCountMax;
    }
    if (this._gslbIpListCountMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbIpListCountMin = this._gslbIpListCountMin;
    }
    if (this._gslbPolicyCountDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbPolicyCountDefault = this._gslbPolicyCountDefault;
    }
    if (this._gslbPolicyCountMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbPolicyCountMax = this._gslbPolicyCountMax;
    }
    if (this._gslbPolicyCountMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbPolicyCountMin = this._gslbPolicyCountMin;
    }
    if (this._gslbServiceCountDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServiceCountDefault = this._gslbServiceCountDefault;
    }
    if (this._gslbServiceCountMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServiceCountMax = this._gslbServiceCountMax;
    }
    if (this._gslbServiceCountMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServiceCountMin = this._gslbServiceCountMin;
    }
    if (this._gslbServiceIpCountDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServiceIpCountDefault = this._gslbServiceIpCountDefault;
    }
    if (this._gslbServiceIpCountMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServiceIpCountMax = this._gslbServiceIpCountMax;
    }
    if (this._gslbServiceIpCountMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServiceIpCountMin = this._gslbServiceIpCountMin;
    }
    if (this._gslbServicePortCountDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServicePortCountDefault = this._gslbServicePortCountDefault;
    }
    if (this._gslbServicePortCountMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServicePortCountMax = this._gslbServicePortCountMax;
    }
    if (this._gslbServicePortCountMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServicePortCountMin = this._gslbServicePortCountMin;
    }
    if (this._gslbSiteCountDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbSiteCountDefault = this._gslbSiteCountDefault;
    }
    if (this._gslbSiteCountMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbSiteCountMax = this._gslbSiteCountMax;
    }
    if (this._gslbSiteCountMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbSiteCountMin = this._gslbSiteCountMin;
    }
    if (this._gslbSvcgroupCountDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbSvcgroupCountDefault = this._gslbSvcgroupCountDefault;
    }
    if (this._gslbSvcgroupCountMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbSvcgroupCountMax = this._gslbSvcgroupCountMax;
    }
    if (this._gslbSvcgroupCountMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbSvcgroupCountMin = this._gslbSvcgroupCountMin;
    }
    if (this._gslbTemplateCountDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbTemplateCountDefault = this._gslbTemplateCountDefault;
    }
    if (this._gslbTemplateCountMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbTemplateCountMax = this._gslbTemplateCountMax;
    }
    if (this._gslbTemplateCountMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbTemplateCountMin = this._gslbTemplateCountMin;
    }
    if (this._gslbZoneCountDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbZoneCountDefault = this._gslbZoneCountDefault;
    }
    if (this._gslbZoneCountMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbZoneCountMax = this._gslbZoneCountMax;
    }
    if (this._gslbZoneCountMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbZoneCountMin = this._gslbZoneCountMin;
    }
    if (this._healthMonitorCountDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthMonitorCountDefault = this._healthMonitorCountDefault;
    }
    if (this._healthMonitorCountMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthMonitorCountMax = this._healthMonitorCountMax;
    }
    if (this._healthMonitorCountMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthMonitorCountMin = this._healthMonitorCountMin;
    }
    if (this._httpTemplateDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpTemplateDefault = this._httpTemplateDefault;
    }
    if (this._httpTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpTemplateMax = this._httpTemplateMax;
    }
    if (this._httpTemplateMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpTemplateMin = this._httpTemplateMin;
    }
    if (this._linkCostTemplateDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkCostTemplateDefault = this._linkCostTemplateDefault;
    }
    if (this._linkCostTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkCostTemplateMax = this._linkCostTemplateMax;
    }
    if (this._linkCostTemplateMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkCostTemplateMin = this._linkCostTemplateMin;
    }
    if (this._logTemplateDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTemplateDefault = this._logTemplateDefault;
    }
    if (this._logTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTemplateMax = this._logTemplateMax;
    }
    if (this._logTemplateMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTemplateMin = this._logTemplateMin;
    }
    if (this._natPoolAddrDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolAddrDefault = this._natPoolAddrDefault;
    }
    if (this._natPoolAddrMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolAddrMax = this._natPoolAddrMax;
    }
    if (this._natPoolAddrMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolAddrMin = this._natPoolAddrMin;
    }
    if (this._pbslbEntryDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbslbEntryDefault = this._pbslbEntryDefault;
    }
    if (this._pbslbEntryMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbslbEntryMax = this._pbslbEntryMax;
    }
    if (this._pbslbEntryMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbslbEntryMin = this._pbslbEntryMin;
    }
    if (this._pbslbSubnetCountDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbslbSubnetCountDefault = this._pbslbSubnetCountDefault;
    }
    if (this._pbslbSubnetCountMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbslbSubnetCountMax = this._pbslbSubnetCountMax;
    }
    if (this._pbslbSubnetCountMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbslbSubnetCountMin = this._pbslbSubnetCountMin;
    }
    if (this._persistCookieTemplateDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistCookieTemplateDefault = this._persistCookieTemplateDefault;
    }
    if (this._persistCookieTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistCookieTemplateMax = this._persistCookieTemplateMax;
    }
    if (this._persistCookieTemplateMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistCookieTemplateMin = this._persistCookieTemplateMin;
    }
    if (this._persistSrcipTemplateDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistSrcipTemplateDefault = this._persistSrcipTemplateDefault;
    }
    if (this._persistSrcipTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistSrcipTemplateMax = this._persistSrcipTemplateMax;
    }
    if (this._persistSrcipTemplateMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistSrcipTemplateMin = this._persistSrcipTemplateMin;
    }
    if (this._proxyTemplateDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyTemplateDefault = this._proxyTemplateDefault;
    }
    if (this._proxyTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyTemplateMax = this._proxyTemplateMax;
    }
    if (this._proxyTemplateMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyTemplateMin = this._proxyTemplateMin;
    }
    if (this._realPortDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.realPortDefault = this._realPortDefault;
    }
    if (this._realPortMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.realPortMax = this._realPortMax;
    }
    if (this._realPortMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.realPortMin = this._realPortMin;
    }
    if (this._realServerDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.realServerDefault = this._realServerDefault;
    }
    if (this._realServerMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.realServerMax = this._realServerMax;
    }
    if (this._realServerMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.realServerMin = this._realServerMin;
    }
    if (this._serverSslTemplateDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSslTemplateDefault = this._serverSslTemplateDefault;
    }
    if (this._serverSslTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSslTemplateMax = this._serverSslTemplateMax;
    }
    if (this._serverSslTemplateMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSslTemplateMin = this._serverSslTemplateMin;
    }
    if (this._serviceGroupDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroupDefault = this._serviceGroupDefault;
    }
    if (this._serviceGroupMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroupMax = this._serviceGroupMax;
    }
    if (this._serviceGroupMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroupMin = this._serviceGroupMin;
    }
    if (this._slbThresholdResUsageDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbThresholdResUsageDefault = this._slbThresholdResUsageDefault;
    }
    if (this._slbThresholdResUsageMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbThresholdResUsageMax = this._slbThresholdResUsageMax;
    }
    if (this._slbThresholdResUsageMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbThresholdResUsageMin = this._slbThresholdResUsageMin;
    }
    if (this._streamTemplateDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamTemplateDefault = this._streamTemplateDefault;
    }
    if (this._streamTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamTemplateMax = this._streamTemplateMax;
    }
    if (this._streamTemplateMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamTemplateMin = this._streamTemplateMin;
    }
    if (this._virtualPortDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualPortDefault = this._virtualPortDefault;
    }
    if (this._virtualPortMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualPortMax = this._virtualPortMax;
    }
    if (this._virtualPortMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualPortMin = this._virtualPortMin;
    }
    if (this._virtualServerDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServerDefault = this._virtualServerDefault;
    }
    if (this._virtualServerMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServerMax = this._virtualServerMax;
    }
    if (this._virtualServerMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServerMin = this._virtualServerMin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbResourceUsageOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheTemplateDefault = undefined;
      this._cacheTemplateMax = undefined;
      this._cacheTemplateMin = undefined;
      this._clientSslTemplateDefault = undefined;
      this._clientSslTemplateMax = undefined;
      this._clientSslTemplateMin = undefined;
      this._connReuseTemplateDefault = undefined;
      this._connReuseTemplateMax = undefined;
      this._connReuseTemplateMin = undefined;
      this._fastTcpTemplateDefault = undefined;
      this._fastTcpTemplateMax = undefined;
      this._fastTcpTemplateMin = undefined;
      this._fastUdpTemplateDefault = undefined;
      this._fastUdpTemplateMax = undefined;
      this._fastUdpTemplateMin = undefined;
      this._fixTemplateDefault = undefined;
      this._fixTemplateMax = undefined;
      this._fixTemplateMin = undefined;
      this._gslbDeviceCountDefault = undefined;
      this._gslbDeviceCountMax = undefined;
      this._gslbDeviceCountMin = undefined;
      this._gslbGeoLocationCountDefault = undefined;
      this._gslbGeoLocationCountMax = undefined;
      this._gslbGeoLocationCountMin = undefined;
      this._gslbIpListCountDefault = undefined;
      this._gslbIpListCountMax = undefined;
      this._gslbIpListCountMin = undefined;
      this._gslbPolicyCountDefault = undefined;
      this._gslbPolicyCountMax = undefined;
      this._gslbPolicyCountMin = undefined;
      this._gslbServiceCountDefault = undefined;
      this._gslbServiceCountMax = undefined;
      this._gslbServiceCountMin = undefined;
      this._gslbServiceIpCountDefault = undefined;
      this._gslbServiceIpCountMax = undefined;
      this._gslbServiceIpCountMin = undefined;
      this._gslbServicePortCountDefault = undefined;
      this._gslbServicePortCountMax = undefined;
      this._gslbServicePortCountMin = undefined;
      this._gslbSiteCountDefault = undefined;
      this._gslbSiteCountMax = undefined;
      this._gslbSiteCountMin = undefined;
      this._gslbSvcgroupCountDefault = undefined;
      this._gslbSvcgroupCountMax = undefined;
      this._gslbSvcgroupCountMin = undefined;
      this._gslbTemplateCountDefault = undefined;
      this._gslbTemplateCountMax = undefined;
      this._gslbTemplateCountMin = undefined;
      this._gslbZoneCountDefault = undefined;
      this._gslbZoneCountMax = undefined;
      this._gslbZoneCountMin = undefined;
      this._healthMonitorCountDefault = undefined;
      this._healthMonitorCountMax = undefined;
      this._healthMonitorCountMin = undefined;
      this._httpTemplateDefault = undefined;
      this._httpTemplateMax = undefined;
      this._httpTemplateMin = undefined;
      this._linkCostTemplateDefault = undefined;
      this._linkCostTemplateMax = undefined;
      this._linkCostTemplateMin = undefined;
      this._logTemplateDefault = undefined;
      this._logTemplateMax = undefined;
      this._logTemplateMin = undefined;
      this._natPoolAddrDefault = undefined;
      this._natPoolAddrMax = undefined;
      this._natPoolAddrMin = undefined;
      this._pbslbEntryDefault = undefined;
      this._pbslbEntryMax = undefined;
      this._pbslbEntryMin = undefined;
      this._pbslbSubnetCountDefault = undefined;
      this._pbslbSubnetCountMax = undefined;
      this._pbslbSubnetCountMin = undefined;
      this._persistCookieTemplateDefault = undefined;
      this._persistCookieTemplateMax = undefined;
      this._persistCookieTemplateMin = undefined;
      this._persistSrcipTemplateDefault = undefined;
      this._persistSrcipTemplateMax = undefined;
      this._persistSrcipTemplateMin = undefined;
      this._proxyTemplateDefault = undefined;
      this._proxyTemplateMax = undefined;
      this._proxyTemplateMin = undefined;
      this._realPortDefault = undefined;
      this._realPortMax = undefined;
      this._realPortMin = undefined;
      this._realServerDefault = undefined;
      this._realServerMax = undefined;
      this._realServerMin = undefined;
      this._serverSslTemplateDefault = undefined;
      this._serverSslTemplateMax = undefined;
      this._serverSslTemplateMin = undefined;
      this._serviceGroupDefault = undefined;
      this._serviceGroupMax = undefined;
      this._serviceGroupMin = undefined;
      this._slbThresholdResUsageDefault = undefined;
      this._slbThresholdResUsageMax = undefined;
      this._slbThresholdResUsageMin = undefined;
      this._streamTemplateDefault = undefined;
      this._streamTemplateMax = undefined;
      this._streamTemplateMin = undefined;
      this._virtualPortDefault = undefined;
      this._virtualPortMax = undefined;
      this._virtualPortMin = undefined;
      this._virtualServerDefault = undefined;
      this._virtualServerMax = undefined;
      this._virtualServerMin = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheTemplateDefault = value.cacheTemplateDefault;
      this._cacheTemplateMax = value.cacheTemplateMax;
      this._cacheTemplateMin = value.cacheTemplateMin;
      this._clientSslTemplateDefault = value.clientSslTemplateDefault;
      this._clientSslTemplateMax = value.clientSslTemplateMax;
      this._clientSslTemplateMin = value.clientSslTemplateMin;
      this._connReuseTemplateDefault = value.connReuseTemplateDefault;
      this._connReuseTemplateMax = value.connReuseTemplateMax;
      this._connReuseTemplateMin = value.connReuseTemplateMin;
      this._fastTcpTemplateDefault = value.fastTcpTemplateDefault;
      this._fastTcpTemplateMax = value.fastTcpTemplateMax;
      this._fastTcpTemplateMin = value.fastTcpTemplateMin;
      this._fastUdpTemplateDefault = value.fastUdpTemplateDefault;
      this._fastUdpTemplateMax = value.fastUdpTemplateMax;
      this._fastUdpTemplateMin = value.fastUdpTemplateMin;
      this._fixTemplateDefault = value.fixTemplateDefault;
      this._fixTemplateMax = value.fixTemplateMax;
      this._fixTemplateMin = value.fixTemplateMin;
      this._gslbDeviceCountDefault = value.gslbDeviceCountDefault;
      this._gslbDeviceCountMax = value.gslbDeviceCountMax;
      this._gslbDeviceCountMin = value.gslbDeviceCountMin;
      this._gslbGeoLocationCountDefault = value.gslbGeoLocationCountDefault;
      this._gslbGeoLocationCountMax = value.gslbGeoLocationCountMax;
      this._gslbGeoLocationCountMin = value.gslbGeoLocationCountMin;
      this._gslbIpListCountDefault = value.gslbIpListCountDefault;
      this._gslbIpListCountMax = value.gslbIpListCountMax;
      this._gslbIpListCountMin = value.gslbIpListCountMin;
      this._gslbPolicyCountDefault = value.gslbPolicyCountDefault;
      this._gslbPolicyCountMax = value.gslbPolicyCountMax;
      this._gslbPolicyCountMin = value.gslbPolicyCountMin;
      this._gslbServiceCountDefault = value.gslbServiceCountDefault;
      this._gslbServiceCountMax = value.gslbServiceCountMax;
      this._gslbServiceCountMin = value.gslbServiceCountMin;
      this._gslbServiceIpCountDefault = value.gslbServiceIpCountDefault;
      this._gslbServiceIpCountMax = value.gslbServiceIpCountMax;
      this._gslbServiceIpCountMin = value.gslbServiceIpCountMin;
      this._gslbServicePortCountDefault = value.gslbServicePortCountDefault;
      this._gslbServicePortCountMax = value.gslbServicePortCountMax;
      this._gslbServicePortCountMin = value.gslbServicePortCountMin;
      this._gslbSiteCountDefault = value.gslbSiteCountDefault;
      this._gslbSiteCountMax = value.gslbSiteCountMax;
      this._gslbSiteCountMin = value.gslbSiteCountMin;
      this._gslbSvcgroupCountDefault = value.gslbSvcgroupCountDefault;
      this._gslbSvcgroupCountMax = value.gslbSvcgroupCountMax;
      this._gslbSvcgroupCountMin = value.gslbSvcgroupCountMin;
      this._gslbTemplateCountDefault = value.gslbTemplateCountDefault;
      this._gslbTemplateCountMax = value.gslbTemplateCountMax;
      this._gslbTemplateCountMin = value.gslbTemplateCountMin;
      this._gslbZoneCountDefault = value.gslbZoneCountDefault;
      this._gslbZoneCountMax = value.gslbZoneCountMax;
      this._gslbZoneCountMin = value.gslbZoneCountMin;
      this._healthMonitorCountDefault = value.healthMonitorCountDefault;
      this._healthMonitorCountMax = value.healthMonitorCountMax;
      this._healthMonitorCountMin = value.healthMonitorCountMin;
      this._httpTemplateDefault = value.httpTemplateDefault;
      this._httpTemplateMax = value.httpTemplateMax;
      this._httpTemplateMin = value.httpTemplateMin;
      this._linkCostTemplateDefault = value.linkCostTemplateDefault;
      this._linkCostTemplateMax = value.linkCostTemplateMax;
      this._linkCostTemplateMin = value.linkCostTemplateMin;
      this._logTemplateDefault = value.logTemplateDefault;
      this._logTemplateMax = value.logTemplateMax;
      this._logTemplateMin = value.logTemplateMin;
      this._natPoolAddrDefault = value.natPoolAddrDefault;
      this._natPoolAddrMax = value.natPoolAddrMax;
      this._natPoolAddrMin = value.natPoolAddrMin;
      this._pbslbEntryDefault = value.pbslbEntryDefault;
      this._pbslbEntryMax = value.pbslbEntryMax;
      this._pbslbEntryMin = value.pbslbEntryMin;
      this._pbslbSubnetCountDefault = value.pbslbSubnetCountDefault;
      this._pbslbSubnetCountMax = value.pbslbSubnetCountMax;
      this._pbslbSubnetCountMin = value.pbslbSubnetCountMin;
      this._persistCookieTemplateDefault = value.persistCookieTemplateDefault;
      this._persistCookieTemplateMax = value.persistCookieTemplateMax;
      this._persistCookieTemplateMin = value.persistCookieTemplateMin;
      this._persistSrcipTemplateDefault = value.persistSrcipTemplateDefault;
      this._persistSrcipTemplateMax = value.persistSrcipTemplateMax;
      this._persistSrcipTemplateMin = value.persistSrcipTemplateMin;
      this._proxyTemplateDefault = value.proxyTemplateDefault;
      this._proxyTemplateMax = value.proxyTemplateMax;
      this._proxyTemplateMin = value.proxyTemplateMin;
      this._realPortDefault = value.realPortDefault;
      this._realPortMax = value.realPortMax;
      this._realPortMin = value.realPortMin;
      this._realServerDefault = value.realServerDefault;
      this._realServerMax = value.realServerMax;
      this._realServerMin = value.realServerMin;
      this._serverSslTemplateDefault = value.serverSslTemplateDefault;
      this._serverSslTemplateMax = value.serverSslTemplateMax;
      this._serverSslTemplateMin = value.serverSslTemplateMin;
      this._serviceGroupDefault = value.serviceGroupDefault;
      this._serviceGroupMax = value.serviceGroupMax;
      this._serviceGroupMin = value.serviceGroupMin;
      this._slbThresholdResUsageDefault = value.slbThresholdResUsageDefault;
      this._slbThresholdResUsageMax = value.slbThresholdResUsageMax;
      this._slbThresholdResUsageMin = value.slbThresholdResUsageMin;
      this._streamTemplateDefault = value.streamTemplateDefault;
      this._streamTemplateMax = value.streamTemplateMax;
      this._streamTemplateMin = value.streamTemplateMin;
      this._virtualPortDefault = value.virtualPortDefault;
      this._virtualPortMax = value.virtualPortMax;
      this._virtualPortMin = value.virtualPortMin;
      this._virtualServerDefault = value.virtualServerDefault;
      this._virtualServerMax = value.virtualServerMax;
      this._virtualServerMin = value.virtualServerMin;
    }
  }

  // cache_template_default - computed: false, optional: true, required: false
  private _cacheTemplateDefault?: number; 
  public get cacheTemplateDefault() {
    return this.getNumberAttribute('cache_template_default');
  }
  public set cacheTemplateDefault(value: number) {
    this._cacheTemplateDefault = value;
  }
  public resetCacheTemplateDefault() {
    this._cacheTemplateDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTemplateDefaultInput() {
    return this._cacheTemplateDefault;
  }

  // cache_template_max - computed: false, optional: true, required: false
  private _cacheTemplateMax?: number; 
  public get cacheTemplateMax() {
    return this.getNumberAttribute('cache_template_max');
  }
  public set cacheTemplateMax(value: number) {
    this._cacheTemplateMax = value;
  }
  public resetCacheTemplateMax() {
    this._cacheTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTemplateMaxInput() {
    return this._cacheTemplateMax;
  }

  // cache_template_min - computed: false, optional: true, required: false
  private _cacheTemplateMin?: number; 
  public get cacheTemplateMin() {
    return this.getNumberAttribute('cache_template_min');
  }
  public set cacheTemplateMin(value: number) {
    this._cacheTemplateMin = value;
  }
  public resetCacheTemplateMin() {
    this._cacheTemplateMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTemplateMinInput() {
    return this._cacheTemplateMin;
  }

  // client_ssl_template_default - computed: false, optional: true, required: false
  private _clientSslTemplateDefault?: number; 
  public get clientSslTemplateDefault() {
    return this.getNumberAttribute('client_ssl_template_default');
  }
  public set clientSslTemplateDefault(value: number) {
    this._clientSslTemplateDefault = value;
  }
  public resetClientSslTemplateDefault() {
    this._clientSslTemplateDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSslTemplateDefaultInput() {
    return this._clientSslTemplateDefault;
  }

  // client_ssl_template_max - computed: false, optional: true, required: false
  private _clientSslTemplateMax?: number; 
  public get clientSslTemplateMax() {
    return this.getNumberAttribute('client_ssl_template_max');
  }
  public set clientSslTemplateMax(value: number) {
    this._clientSslTemplateMax = value;
  }
  public resetClientSslTemplateMax() {
    this._clientSslTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSslTemplateMaxInput() {
    return this._clientSslTemplateMax;
  }

  // client_ssl_template_min - computed: false, optional: true, required: false
  private _clientSslTemplateMin?: number; 
  public get clientSslTemplateMin() {
    return this.getNumberAttribute('client_ssl_template_min');
  }
  public set clientSslTemplateMin(value: number) {
    this._clientSslTemplateMin = value;
  }
  public resetClientSslTemplateMin() {
    this._clientSslTemplateMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSslTemplateMinInput() {
    return this._clientSslTemplateMin;
  }

  // conn_reuse_template_default - computed: false, optional: true, required: false
  private _connReuseTemplateDefault?: number; 
  public get connReuseTemplateDefault() {
    return this.getNumberAttribute('conn_reuse_template_default');
  }
  public set connReuseTemplateDefault(value: number) {
    this._connReuseTemplateDefault = value;
  }
  public resetConnReuseTemplateDefault() {
    this._connReuseTemplateDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connReuseTemplateDefaultInput() {
    return this._connReuseTemplateDefault;
  }

  // conn_reuse_template_max - computed: false, optional: true, required: false
  private _connReuseTemplateMax?: number; 
  public get connReuseTemplateMax() {
    return this.getNumberAttribute('conn_reuse_template_max');
  }
  public set connReuseTemplateMax(value: number) {
    this._connReuseTemplateMax = value;
  }
  public resetConnReuseTemplateMax() {
    this._connReuseTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connReuseTemplateMaxInput() {
    return this._connReuseTemplateMax;
  }

  // conn_reuse_template_min - computed: false, optional: true, required: false
  private _connReuseTemplateMin?: number; 
  public get connReuseTemplateMin() {
    return this.getNumberAttribute('conn_reuse_template_min');
  }
  public set connReuseTemplateMin(value: number) {
    this._connReuseTemplateMin = value;
  }
  public resetConnReuseTemplateMin() {
    this._connReuseTemplateMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connReuseTemplateMinInput() {
    return this._connReuseTemplateMin;
  }

  // fast_tcp_template_default - computed: false, optional: true, required: false
  private _fastTcpTemplateDefault?: number; 
  public get fastTcpTemplateDefault() {
    return this.getNumberAttribute('fast_tcp_template_default');
  }
  public set fastTcpTemplateDefault(value: number) {
    this._fastTcpTemplateDefault = value;
  }
  public resetFastTcpTemplateDefault() {
    this._fastTcpTemplateDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastTcpTemplateDefaultInput() {
    return this._fastTcpTemplateDefault;
  }

  // fast_tcp_template_max - computed: false, optional: true, required: false
  private _fastTcpTemplateMax?: number; 
  public get fastTcpTemplateMax() {
    return this.getNumberAttribute('fast_tcp_template_max');
  }
  public set fastTcpTemplateMax(value: number) {
    this._fastTcpTemplateMax = value;
  }
  public resetFastTcpTemplateMax() {
    this._fastTcpTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastTcpTemplateMaxInput() {
    return this._fastTcpTemplateMax;
  }

  // fast_tcp_template_min - computed: false, optional: true, required: false
  private _fastTcpTemplateMin?: number; 
  public get fastTcpTemplateMin() {
    return this.getNumberAttribute('fast_tcp_template_min');
  }
  public set fastTcpTemplateMin(value: number) {
    this._fastTcpTemplateMin = value;
  }
  public resetFastTcpTemplateMin() {
    this._fastTcpTemplateMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastTcpTemplateMinInput() {
    return this._fastTcpTemplateMin;
  }

  // fast_udp_template_default - computed: false, optional: true, required: false
  private _fastUdpTemplateDefault?: number; 
  public get fastUdpTemplateDefault() {
    return this.getNumberAttribute('fast_udp_template_default');
  }
  public set fastUdpTemplateDefault(value: number) {
    this._fastUdpTemplateDefault = value;
  }
  public resetFastUdpTemplateDefault() {
    this._fastUdpTemplateDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastUdpTemplateDefaultInput() {
    return this._fastUdpTemplateDefault;
  }

  // fast_udp_template_max - computed: false, optional: true, required: false
  private _fastUdpTemplateMax?: number; 
  public get fastUdpTemplateMax() {
    return this.getNumberAttribute('fast_udp_template_max');
  }
  public set fastUdpTemplateMax(value: number) {
    this._fastUdpTemplateMax = value;
  }
  public resetFastUdpTemplateMax() {
    this._fastUdpTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastUdpTemplateMaxInput() {
    return this._fastUdpTemplateMax;
  }

  // fast_udp_template_min - computed: false, optional: true, required: false
  private _fastUdpTemplateMin?: number; 
  public get fastUdpTemplateMin() {
    return this.getNumberAttribute('fast_udp_template_min');
  }
  public set fastUdpTemplateMin(value: number) {
    this._fastUdpTemplateMin = value;
  }
  public resetFastUdpTemplateMin() {
    this._fastUdpTemplateMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastUdpTemplateMinInput() {
    return this._fastUdpTemplateMin;
  }

  // fix_template_default - computed: false, optional: true, required: false
  private _fixTemplateDefault?: number; 
  public get fixTemplateDefault() {
    return this.getNumberAttribute('fix_template_default');
  }
  public set fixTemplateDefault(value: number) {
    this._fixTemplateDefault = value;
  }
  public resetFixTemplateDefault() {
    this._fixTemplateDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixTemplateDefaultInput() {
    return this._fixTemplateDefault;
  }

  // fix_template_max - computed: false, optional: true, required: false
  private _fixTemplateMax?: number; 
  public get fixTemplateMax() {
    return this.getNumberAttribute('fix_template_max');
  }
  public set fixTemplateMax(value: number) {
    this._fixTemplateMax = value;
  }
  public resetFixTemplateMax() {
    this._fixTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixTemplateMaxInput() {
    return this._fixTemplateMax;
  }

  // fix_template_min - computed: false, optional: true, required: false
  private _fixTemplateMin?: number; 
  public get fixTemplateMin() {
    return this.getNumberAttribute('fix_template_min');
  }
  public set fixTemplateMin(value: number) {
    this._fixTemplateMin = value;
  }
  public resetFixTemplateMin() {
    this._fixTemplateMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixTemplateMinInput() {
    return this._fixTemplateMin;
  }

  // gslb_device_count_default - computed: false, optional: true, required: false
  private _gslbDeviceCountDefault?: number; 
  public get gslbDeviceCountDefault() {
    return this.getNumberAttribute('gslb_device_count_default');
  }
  public set gslbDeviceCountDefault(value: number) {
    this._gslbDeviceCountDefault = value;
  }
  public resetGslbDeviceCountDefault() {
    this._gslbDeviceCountDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbDeviceCountDefaultInput() {
    return this._gslbDeviceCountDefault;
  }

  // gslb_device_count_max - computed: false, optional: true, required: false
  private _gslbDeviceCountMax?: number; 
  public get gslbDeviceCountMax() {
    return this.getNumberAttribute('gslb_device_count_max');
  }
  public set gslbDeviceCountMax(value: number) {
    this._gslbDeviceCountMax = value;
  }
  public resetGslbDeviceCountMax() {
    this._gslbDeviceCountMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbDeviceCountMaxInput() {
    return this._gslbDeviceCountMax;
  }

  // gslb_device_count_min - computed: false, optional: true, required: false
  private _gslbDeviceCountMin?: number; 
  public get gslbDeviceCountMin() {
    return this.getNumberAttribute('gslb_device_count_min');
  }
  public set gslbDeviceCountMin(value: number) {
    this._gslbDeviceCountMin = value;
  }
  public resetGslbDeviceCountMin() {
    this._gslbDeviceCountMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbDeviceCountMinInput() {
    return this._gslbDeviceCountMin;
  }

  // gslb_geo_location_count_default - computed: false, optional: true, required: false
  private _gslbGeoLocationCountDefault?: number; 
  public get gslbGeoLocationCountDefault() {
    return this.getNumberAttribute('gslb_geo_location_count_default');
  }
  public set gslbGeoLocationCountDefault(value: number) {
    this._gslbGeoLocationCountDefault = value;
  }
  public resetGslbGeoLocationCountDefault() {
    this._gslbGeoLocationCountDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbGeoLocationCountDefaultInput() {
    return this._gslbGeoLocationCountDefault;
  }

  // gslb_geo_location_count_max - computed: false, optional: true, required: false
  private _gslbGeoLocationCountMax?: number; 
  public get gslbGeoLocationCountMax() {
    return this.getNumberAttribute('gslb_geo_location_count_max');
  }
  public set gslbGeoLocationCountMax(value: number) {
    this._gslbGeoLocationCountMax = value;
  }
  public resetGslbGeoLocationCountMax() {
    this._gslbGeoLocationCountMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbGeoLocationCountMaxInput() {
    return this._gslbGeoLocationCountMax;
  }

  // gslb_geo_location_count_min - computed: false, optional: true, required: false
  private _gslbGeoLocationCountMin?: number; 
  public get gslbGeoLocationCountMin() {
    return this.getNumberAttribute('gslb_geo_location_count_min');
  }
  public set gslbGeoLocationCountMin(value: number) {
    this._gslbGeoLocationCountMin = value;
  }
  public resetGslbGeoLocationCountMin() {
    this._gslbGeoLocationCountMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbGeoLocationCountMinInput() {
    return this._gslbGeoLocationCountMin;
  }

  // gslb_ip_list_count_default - computed: false, optional: true, required: false
  private _gslbIpListCountDefault?: number; 
  public get gslbIpListCountDefault() {
    return this.getNumberAttribute('gslb_ip_list_count_default');
  }
  public set gslbIpListCountDefault(value: number) {
    this._gslbIpListCountDefault = value;
  }
  public resetGslbIpListCountDefault() {
    this._gslbIpListCountDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbIpListCountDefaultInput() {
    return this._gslbIpListCountDefault;
  }

  // gslb_ip_list_count_max - computed: false, optional: true, required: false
  private _gslbIpListCountMax?: number; 
  public get gslbIpListCountMax() {
    return this.getNumberAttribute('gslb_ip_list_count_max');
  }
  public set gslbIpListCountMax(value: number) {
    this._gslbIpListCountMax = value;
  }
  public resetGslbIpListCountMax() {
    this._gslbIpListCountMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbIpListCountMaxInput() {
    return this._gslbIpListCountMax;
  }

  // gslb_ip_list_count_min - computed: false, optional: true, required: false
  private _gslbIpListCountMin?: number; 
  public get gslbIpListCountMin() {
    return this.getNumberAttribute('gslb_ip_list_count_min');
  }
  public set gslbIpListCountMin(value: number) {
    this._gslbIpListCountMin = value;
  }
  public resetGslbIpListCountMin() {
    this._gslbIpListCountMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbIpListCountMinInput() {
    return this._gslbIpListCountMin;
  }

  // gslb_policy_count_default - computed: false, optional: true, required: false
  private _gslbPolicyCountDefault?: number; 
  public get gslbPolicyCountDefault() {
    return this.getNumberAttribute('gslb_policy_count_default');
  }
  public set gslbPolicyCountDefault(value: number) {
    this._gslbPolicyCountDefault = value;
  }
  public resetGslbPolicyCountDefault() {
    this._gslbPolicyCountDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbPolicyCountDefaultInput() {
    return this._gslbPolicyCountDefault;
  }

  // gslb_policy_count_max - computed: false, optional: true, required: false
  private _gslbPolicyCountMax?: number; 
  public get gslbPolicyCountMax() {
    return this.getNumberAttribute('gslb_policy_count_max');
  }
  public set gslbPolicyCountMax(value: number) {
    this._gslbPolicyCountMax = value;
  }
  public resetGslbPolicyCountMax() {
    this._gslbPolicyCountMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbPolicyCountMaxInput() {
    return this._gslbPolicyCountMax;
  }

  // gslb_policy_count_min - computed: false, optional: true, required: false
  private _gslbPolicyCountMin?: number; 
  public get gslbPolicyCountMin() {
    return this.getNumberAttribute('gslb_policy_count_min');
  }
  public set gslbPolicyCountMin(value: number) {
    this._gslbPolicyCountMin = value;
  }
  public resetGslbPolicyCountMin() {
    this._gslbPolicyCountMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbPolicyCountMinInput() {
    return this._gslbPolicyCountMin;
  }

  // gslb_service_count_default - computed: false, optional: true, required: false
  private _gslbServiceCountDefault?: number; 
  public get gslbServiceCountDefault() {
    return this.getNumberAttribute('gslb_service_count_default');
  }
  public set gslbServiceCountDefault(value: number) {
    this._gslbServiceCountDefault = value;
  }
  public resetGslbServiceCountDefault() {
    this._gslbServiceCountDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServiceCountDefaultInput() {
    return this._gslbServiceCountDefault;
  }

  // gslb_service_count_max - computed: false, optional: true, required: false
  private _gslbServiceCountMax?: number; 
  public get gslbServiceCountMax() {
    return this.getNumberAttribute('gslb_service_count_max');
  }
  public set gslbServiceCountMax(value: number) {
    this._gslbServiceCountMax = value;
  }
  public resetGslbServiceCountMax() {
    this._gslbServiceCountMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServiceCountMaxInput() {
    return this._gslbServiceCountMax;
  }

  // gslb_service_count_min - computed: false, optional: true, required: false
  private _gslbServiceCountMin?: number; 
  public get gslbServiceCountMin() {
    return this.getNumberAttribute('gslb_service_count_min');
  }
  public set gslbServiceCountMin(value: number) {
    this._gslbServiceCountMin = value;
  }
  public resetGslbServiceCountMin() {
    this._gslbServiceCountMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServiceCountMinInput() {
    return this._gslbServiceCountMin;
  }

  // gslb_service_ip_count_default - computed: false, optional: true, required: false
  private _gslbServiceIpCountDefault?: number; 
  public get gslbServiceIpCountDefault() {
    return this.getNumberAttribute('gslb_service_ip_count_default');
  }
  public set gslbServiceIpCountDefault(value: number) {
    this._gslbServiceIpCountDefault = value;
  }
  public resetGslbServiceIpCountDefault() {
    this._gslbServiceIpCountDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServiceIpCountDefaultInput() {
    return this._gslbServiceIpCountDefault;
  }

  // gslb_service_ip_count_max - computed: false, optional: true, required: false
  private _gslbServiceIpCountMax?: number; 
  public get gslbServiceIpCountMax() {
    return this.getNumberAttribute('gslb_service_ip_count_max');
  }
  public set gslbServiceIpCountMax(value: number) {
    this._gslbServiceIpCountMax = value;
  }
  public resetGslbServiceIpCountMax() {
    this._gslbServiceIpCountMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServiceIpCountMaxInput() {
    return this._gslbServiceIpCountMax;
  }

  // gslb_service_ip_count_min - computed: false, optional: true, required: false
  private _gslbServiceIpCountMin?: number; 
  public get gslbServiceIpCountMin() {
    return this.getNumberAttribute('gslb_service_ip_count_min');
  }
  public set gslbServiceIpCountMin(value: number) {
    this._gslbServiceIpCountMin = value;
  }
  public resetGslbServiceIpCountMin() {
    this._gslbServiceIpCountMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServiceIpCountMinInput() {
    return this._gslbServiceIpCountMin;
  }

  // gslb_service_port_count_default - computed: false, optional: true, required: false
  private _gslbServicePortCountDefault?: number; 
  public get gslbServicePortCountDefault() {
    return this.getNumberAttribute('gslb_service_port_count_default');
  }
  public set gslbServicePortCountDefault(value: number) {
    this._gslbServicePortCountDefault = value;
  }
  public resetGslbServicePortCountDefault() {
    this._gslbServicePortCountDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServicePortCountDefaultInput() {
    return this._gslbServicePortCountDefault;
  }

  // gslb_service_port_count_max - computed: false, optional: true, required: false
  private _gslbServicePortCountMax?: number; 
  public get gslbServicePortCountMax() {
    return this.getNumberAttribute('gslb_service_port_count_max');
  }
  public set gslbServicePortCountMax(value: number) {
    this._gslbServicePortCountMax = value;
  }
  public resetGslbServicePortCountMax() {
    this._gslbServicePortCountMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServicePortCountMaxInput() {
    return this._gslbServicePortCountMax;
  }

  // gslb_service_port_count_min - computed: false, optional: true, required: false
  private _gslbServicePortCountMin?: number; 
  public get gslbServicePortCountMin() {
    return this.getNumberAttribute('gslb_service_port_count_min');
  }
  public set gslbServicePortCountMin(value: number) {
    this._gslbServicePortCountMin = value;
  }
  public resetGslbServicePortCountMin() {
    this._gslbServicePortCountMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServicePortCountMinInput() {
    return this._gslbServicePortCountMin;
  }

  // gslb_site_count_default - computed: false, optional: true, required: false
  private _gslbSiteCountDefault?: number; 
  public get gslbSiteCountDefault() {
    return this.getNumberAttribute('gslb_site_count_default');
  }
  public set gslbSiteCountDefault(value: number) {
    this._gslbSiteCountDefault = value;
  }
  public resetGslbSiteCountDefault() {
    this._gslbSiteCountDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSiteCountDefaultInput() {
    return this._gslbSiteCountDefault;
  }

  // gslb_site_count_max - computed: false, optional: true, required: false
  private _gslbSiteCountMax?: number; 
  public get gslbSiteCountMax() {
    return this.getNumberAttribute('gslb_site_count_max');
  }
  public set gslbSiteCountMax(value: number) {
    this._gslbSiteCountMax = value;
  }
  public resetGslbSiteCountMax() {
    this._gslbSiteCountMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSiteCountMaxInput() {
    return this._gslbSiteCountMax;
  }

  // gslb_site_count_min - computed: false, optional: true, required: false
  private _gslbSiteCountMin?: number; 
  public get gslbSiteCountMin() {
    return this.getNumberAttribute('gslb_site_count_min');
  }
  public set gslbSiteCountMin(value: number) {
    this._gslbSiteCountMin = value;
  }
  public resetGslbSiteCountMin() {
    this._gslbSiteCountMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSiteCountMinInput() {
    return this._gslbSiteCountMin;
  }

  // gslb_svcgroup_count_default - computed: false, optional: true, required: false
  private _gslbSvcgroupCountDefault?: number; 
  public get gslbSvcgroupCountDefault() {
    return this.getNumberAttribute('gslb_svcgroup_count_default');
  }
  public set gslbSvcgroupCountDefault(value: number) {
    this._gslbSvcgroupCountDefault = value;
  }
  public resetGslbSvcgroupCountDefault() {
    this._gslbSvcgroupCountDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSvcgroupCountDefaultInput() {
    return this._gslbSvcgroupCountDefault;
  }

  // gslb_svcgroup_count_max - computed: false, optional: true, required: false
  private _gslbSvcgroupCountMax?: number; 
  public get gslbSvcgroupCountMax() {
    return this.getNumberAttribute('gslb_svcgroup_count_max');
  }
  public set gslbSvcgroupCountMax(value: number) {
    this._gslbSvcgroupCountMax = value;
  }
  public resetGslbSvcgroupCountMax() {
    this._gslbSvcgroupCountMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSvcgroupCountMaxInput() {
    return this._gslbSvcgroupCountMax;
  }

  // gslb_svcgroup_count_min - computed: false, optional: true, required: false
  private _gslbSvcgroupCountMin?: number; 
  public get gslbSvcgroupCountMin() {
    return this.getNumberAttribute('gslb_svcgroup_count_min');
  }
  public set gslbSvcgroupCountMin(value: number) {
    this._gslbSvcgroupCountMin = value;
  }
  public resetGslbSvcgroupCountMin() {
    this._gslbSvcgroupCountMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSvcgroupCountMinInput() {
    return this._gslbSvcgroupCountMin;
  }

  // gslb_template_count_default - computed: false, optional: true, required: false
  private _gslbTemplateCountDefault?: number; 
  public get gslbTemplateCountDefault() {
    return this.getNumberAttribute('gslb_template_count_default');
  }
  public set gslbTemplateCountDefault(value: number) {
    this._gslbTemplateCountDefault = value;
  }
  public resetGslbTemplateCountDefault() {
    this._gslbTemplateCountDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbTemplateCountDefaultInput() {
    return this._gslbTemplateCountDefault;
  }

  // gslb_template_count_max - computed: false, optional: true, required: false
  private _gslbTemplateCountMax?: number; 
  public get gslbTemplateCountMax() {
    return this.getNumberAttribute('gslb_template_count_max');
  }
  public set gslbTemplateCountMax(value: number) {
    this._gslbTemplateCountMax = value;
  }
  public resetGslbTemplateCountMax() {
    this._gslbTemplateCountMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbTemplateCountMaxInput() {
    return this._gslbTemplateCountMax;
  }

  // gslb_template_count_min - computed: false, optional: true, required: false
  private _gslbTemplateCountMin?: number; 
  public get gslbTemplateCountMin() {
    return this.getNumberAttribute('gslb_template_count_min');
  }
  public set gslbTemplateCountMin(value: number) {
    this._gslbTemplateCountMin = value;
  }
  public resetGslbTemplateCountMin() {
    this._gslbTemplateCountMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbTemplateCountMinInput() {
    return this._gslbTemplateCountMin;
  }

  // gslb_zone_count_default - computed: false, optional: true, required: false
  private _gslbZoneCountDefault?: number; 
  public get gslbZoneCountDefault() {
    return this.getNumberAttribute('gslb_zone_count_default');
  }
  public set gslbZoneCountDefault(value: number) {
    this._gslbZoneCountDefault = value;
  }
  public resetGslbZoneCountDefault() {
    this._gslbZoneCountDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbZoneCountDefaultInput() {
    return this._gslbZoneCountDefault;
  }

  // gslb_zone_count_max - computed: false, optional: true, required: false
  private _gslbZoneCountMax?: number; 
  public get gslbZoneCountMax() {
    return this.getNumberAttribute('gslb_zone_count_max');
  }
  public set gslbZoneCountMax(value: number) {
    this._gslbZoneCountMax = value;
  }
  public resetGslbZoneCountMax() {
    this._gslbZoneCountMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbZoneCountMaxInput() {
    return this._gslbZoneCountMax;
  }

  // gslb_zone_count_min - computed: false, optional: true, required: false
  private _gslbZoneCountMin?: number; 
  public get gslbZoneCountMin() {
    return this.getNumberAttribute('gslb_zone_count_min');
  }
  public set gslbZoneCountMin(value: number) {
    this._gslbZoneCountMin = value;
  }
  public resetGslbZoneCountMin() {
    this._gslbZoneCountMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbZoneCountMinInput() {
    return this._gslbZoneCountMin;
  }

  // health_monitor_count_default - computed: false, optional: true, required: false
  private _healthMonitorCountDefault?: number; 
  public get healthMonitorCountDefault() {
    return this.getNumberAttribute('health_monitor_count_default');
  }
  public set healthMonitorCountDefault(value: number) {
    this._healthMonitorCountDefault = value;
  }
  public resetHealthMonitorCountDefault() {
    this._healthMonitorCountDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitorCountDefaultInput() {
    return this._healthMonitorCountDefault;
  }

  // health_monitor_count_max - computed: false, optional: true, required: false
  private _healthMonitorCountMax?: number; 
  public get healthMonitorCountMax() {
    return this.getNumberAttribute('health_monitor_count_max');
  }
  public set healthMonitorCountMax(value: number) {
    this._healthMonitorCountMax = value;
  }
  public resetHealthMonitorCountMax() {
    this._healthMonitorCountMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitorCountMaxInput() {
    return this._healthMonitorCountMax;
  }

  // health_monitor_count_min - computed: false, optional: true, required: false
  private _healthMonitorCountMin?: number; 
  public get healthMonitorCountMin() {
    return this.getNumberAttribute('health_monitor_count_min');
  }
  public set healthMonitorCountMin(value: number) {
    this._healthMonitorCountMin = value;
  }
  public resetHealthMonitorCountMin() {
    this._healthMonitorCountMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitorCountMinInput() {
    return this._healthMonitorCountMin;
  }

  // http_template_default - computed: false, optional: true, required: false
  private _httpTemplateDefault?: number; 
  public get httpTemplateDefault() {
    return this.getNumberAttribute('http_template_default');
  }
  public set httpTemplateDefault(value: number) {
    this._httpTemplateDefault = value;
  }
  public resetHttpTemplateDefault() {
    this._httpTemplateDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTemplateDefaultInput() {
    return this._httpTemplateDefault;
  }

  // http_template_max - computed: false, optional: true, required: false
  private _httpTemplateMax?: number; 
  public get httpTemplateMax() {
    return this.getNumberAttribute('http_template_max');
  }
  public set httpTemplateMax(value: number) {
    this._httpTemplateMax = value;
  }
  public resetHttpTemplateMax() {
    this._httpTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTemplateMaxInput() {
    return this._httpTemplateMax;
  }

  // http_template_min - computed: false, optional: true, required: false
  private _httpTemplateMin?: number; 
  public get httpTemplateMin() {
    return this.getNumberAttribute('http_template_min');
  }
  public set httpTemplateMin(value: number) {
    this._httpTemplateMin = value;
  }
  public resetHttpTemplateMin() {
    this._httpTemplateMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTemplateMinInput() {
    return this._httpTemplateMin;
  }

  // link_cost_template_default - computed: false, optional: true, required: false
  private _linkCostTemplateDefault?: number; 
  public get linkCostTemplateDefault() {
    return this.getNumberAttribute('link_cost_template_default');
  }
  public set linkCostTemplateDefault(value: number) {
    this._linkCostTemplateDefault = value;
  }
  public resetLinkCostTemplateDefault() {
    this._linkCostTemplateDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkCostTemplateDefaultInput() {
    return this._linkCostTemplateDefault;
  }

  // link_cost_template_max - computed: false, optional: true, required: false
  private _linkCostTemplateMax?: number; 
  public get linkCostTemplateMax() {
    return this.getNumberAttribute('link_cost_template_max');
  }
  public set linkCostTemplateMax(value: number) {
    this._linkCostTemplateMax = value;
  }
  public resetLinkCostTemplateMax() {
    this._linkCostTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkCostTemplateMaxInput() {
    return this._linkCostTemplateMax;
  }

  // link_cost_template_min - computed: false, optional: true, required: false
  private _linkCostTemplateMin?: number; 
  public get linkCostTemplateMin() {
    return this.getNumberAttribute('link_cost_template_min');
  }
  public set linkCostTemplateMin(value: number) {
    this._linkCostTemplateMin = value;
  }
  public resetLinkCostTemplateMin() {
    this._linkCostTemplateMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkCostTemplateMinInput() {
    return this._linkCostTemplateMin;
  }

  // log_template_default - computed: false, optional: true, required: false
  private _logTemplateDefault?: number; 
  public get logTemplateDefault() {
    return this.getNumberAttribute('log_template_default');
  }
  public set logTemplateDefault(value: number) {
    this._logTemplateDefault = value;
  }
  public resetLogTemplateDefault() {
    this._logTemplateDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTemplateDefaultInput() {
    return this._logTemplateDefault;
  }

  // log_template_max - computed: false, optional: true, required: false
  private _logTemplateMax?: number; 
  public get logTemplateMax() {
    return this.getNumberAttribute('log_template_max');
  }
  public set logTemplateMax(value: number) {
    this._logTemplateMax = value;
  }
  public resetLogTemplateMax() {
    this._logTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTemplateMaxInput() {
    return this._logTemplateMax;
  }

  // log_template_min - computed: false, optional: true, required: false
  private _logTemplateMin?: number; 
  public get logTemplateMin() {
    return this.getNumberAttribute('log_template_min');
  }
  public set logTemplateMin(value: number) {
    this._logTemplateMin = value;
  }
  public resetLogTemplateMin() {
    this._logTemplateMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTemplateMinInput() {
    return this._logTemplateMin;
  }

  // nat_pool_addr_default - computed: false, optional: true, required: false
  private _natPoolAddrDefault?: number; 
  public get natPoolAddrDefault() {
    return this.getNumberAttribute('nat_pool_addr_default');
  }
  public set natPoolAddrDefault(value: number) {
    this._natPoolAddrDefault = value;
  }
  public resetNatPoolAddrDefault() {
    this._natPoolAddrDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolAddrDefaultInput() {
    return this._natPoolAddrDefault;
  }

  // nat_pool_addr_max - computed: false, optional: true, required: false
  private _natPoolAddrMax?: number; 
  public get natPoolAddrMax() {
    return this.getNumberAttribute('nat_pool_addr_max');
  }
  public set natPoolAddrMax(value: number) {
    this._natPoolAddrMax = value;
  }
  public resetNatPoolAddrMax() {
    this._natPoolAddrMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolAddrMaxInput() {
    return this._natPoolAddrMax;
  }

  // nat_pool_addr_min - computed: false, optional: true, required: false
  private _natPoolAddrMin?: number; 
  public get natPoolAddrMin() {
    return this.getNumberAttribute('nat_pool_addr_min');
  }
  public set natPoolAddrMin(value: number) {
    this._natPoolAddrMin = value;
  }
  public resetNatPoolAddrMin() {
    this._natPoolAddrMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolAddrMinInput() {
    return this._natPoolAddrMin;
  }

  // pbslb_entry_default - computed: false, optional: true, required: false
  private _pbslbEntryDefault?: number; 
  public get pbslbEntryDefault() {
    return this.getNumberAttribute('pbslb_entry_default');
  }
  public set pbslbEntryDefault(value: number) {
    this._pbslbEntryDefault = value;
  }
  public resetPbslbEntryDefault() {
    this._pbslbEntryDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbslbEntryDefaultInput() {
    return this._pbslbEntryDefault;
  }

  // pbslb_entry_max - computed: false, optional: true, required: false
  private _pbslbEntryMax?: number; 
  public get pbslbEntryMax() {
    return this.getNumberAttribute('pbslb_entry_max');
  }
  public set pbslbEntryMax(value: number) {
    this._pbslbEntryMax = value;
  }
  public resetPbslbEntryMax() {
    this._pbslbEntryMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbslbEntryMaxInput() {
    return this._pbslbEntryMax;
  }

  // pbslb_entry_min - computed: false, optional: true, required: false
  private _pbslbEntryMin?: number; 
  public get pbslbEntryMin() {
    return this.getNumberAttribute('pbslb_entry_min');
  }
  public set pbslbEntryMin(value: number) {
    this._pbslbEntryMin = value;
  }
  public resetPbslbEntryMin() {
    this._pbslbEntryMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbslbEntryMinInput() {
    return this._pbslbEntryMin;
  }

  // pbslb_subnet_count_default - computed: false, optional: true, required: false
  private _pbslbSubnetCountDefault?: number; 
  public get pbslbSubnetCountDefault() {
    return this.getNumberAttribute('pbslb_subnet_count_default');
  }
  public set pbslbSubnetCountDefault(value: number) {
    this._pbslbSubnetCountDefault = value;
  }
  public resetPbslbSubnetCountDefault() {
    this._pbslbSubnetCountDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbslbSubnetCountDefaultInput() {
    return this._pbslbSubnetCountDefault;
  }

  // pbslb_subnet_count_max - computed: false, optional: true, required: false
  private _pbslbSubnetCountMax?: number; 
  public get pbslbSubnetCountMax() {
    return this.getNumberAttribute('pbslb_subnet_count_max');
  }
  public set pbslbSubnetCountMax(value: number) {
    this._pbslbSubnetCountMax = value;
  }
  public resetPbslbSubnetCountMax() {
    this._pbslbSubnetCountMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbslbSubnetCountMaxInput() {
    return this._pbslbSubnetCountMax;
  }

  // pbslb_subnet_count_min - computed: false, optional: true, required: false
  private _pbslbSubnetCountMin?: number; 
  public get pbslbSubnetCountMin() {
    return this.getNumberAttribute('pbslb_subnet_count_min');
  }
  public set pbslbSubnetCountMin(value: number) {
    this._pbslbSubnetCountMin = value;
  }
  public resetPbslbSubnetCountMin() {
    this._pbslbSubnetCountMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbslbSubnetCountMinInput() {
    return this._pbslbSubnetCountMin;
  }

  // persist_cookie_template_default - computed: false, optional: true, required: false
  private _persistCookieTemplateDefault?: number; 
  public get persistCookieTemplateDefault() {
    return this.getNumberAttribute('persist_cookie_template_default');
  }
  public set persistCookieTemplateDefault(value: number) {
    this._persistCookieTemplateDefault = value;
  }
  public resetPersistCookieTemplateDefault() {
    this._persistCookieTemplateDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistCookieTemplateDefaultInput() {
    return this._persistCookieTemplateDefault;
  }

  // persist_cookie_template_max - computed: false, optional: true, required: false
  private _persistCookieTemplateMax?: number; 
  public get persistCookieTemplateMax() {
    return this.getNumberAttribute('persist_cookie_template_max');
  }
  public set persistCookieTemplateMax(value: number) {
    this._persistCookieTemplateMax = value;
  }
  public resetPersistCookieTemplateMax() {
    this._persistCookieTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistCookieTemplateMaxInput() {
    return this._persistCookieTemplateMax;
  }

  // persist_cookie_template_min - computed: false, optional: true, required: false
  private _persistCookieTemplateMin?: number; 
  public get persistCookieTemplateMin() {
    return this.getNumberAttribute('persist_cookie_template_min');
  }
  public set persistCookieTemplateMin(value: number) {
    this._persistCookieTemplateMin = value;
  }
  public resetPersistCookieTemplateMin() {
    this._persistCookieTemplateMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistCookieTemplateMinInput() {
    return this._persistCookieTemplateMin;
  }

  // persist_srcip_template_default - computed: false, optional: true, required: false
  private _persistSrcipTemplateDefault?: number; 
  public get persistSrcipTemplateDefault() {
    return this.getNumberAttribute('persist_srcip_template_default');
  }
  public set persistSrcipTemplateDefault(value: number) {
    this._persistSrcipTemplateDefault = value;
  }
  public resetPersistSrcipTemplateDefault() {
    this._persistSrcipTemplateDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistSrcipTemplateDefaultInput() {
    return this._persistSrcipTemplateDefault;
  }

  // persist_srcip_template_max - computed: false, optional: true, required: false
  private _persistSrcipTemplateMax?: number; 
  public get persistSrcipTemplateMax() {
    return this.getNumberAttribute('persist_srcip_template_max');
  }
  public set persistSrcipTemplateMax(value: number) {
    this._persistSrcipTemplateMax = value;
  }
  public resetPersistSrcipTemplateMax() {
    this._persistSrcipTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistSrcipTemplateMaxInput() {
    return this._persistSrcipTemplateMax;
  }

  // persist_srcip_template_min - computed: false, optional: true, required: false
  private _persistSrcipTemplateMin?: number; 
  public get persistSrcipTemplateMin() {
    return this.getNumberAttribute('persist_srcip_template_min');
  }
  public set persistSrcipTemplateMin(value: number) {
    this._persistSrcipTemplateMin = value;
  }
  public resetPersistSrcipTemplateMin() {
    this._persistSrcipTemplateMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistSrcipTemplateMinInput() {
    return this._persistSrcipTemplateMin;
  }

  // proxy_template_default - computed: false, optional: true, required: false
  private _proxyTemplateDefault?: number; 
  public get proxyTemplateDefault() {
    return this.getNumberAttribute('proxy_template_default');
  }
  public set proxyTemplateDefault(value: number) {
    this._proxyTemplateDefault = value;
  }
  public resetProxyTemplateDefault() {
    this._proxyTemplateDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTemplateDefaultInput() {
    return this._proxyTemplateDefault;
  }

  // proxy_template_max - computed: false, optional: true, required: false
  private _proxyTemplateMax?: number; 
  public get proxyTemplateMax() {
    return this.getNumberAttribute('proxy_template_max');
  }
  public set proxyTemplateMax(value: number) {
    this._proxyTemplateMax = value;
  }
  public resetProxyTemplateMax() {
    this._proxyTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTemplateMaxInput() {
    return this._proxyTemplateMax;
  }

  // proxy_template_min - computed: false, optional: true, required: false
  private _proxyTemplateMin?: number; 
  public get proxyTemplateMin() {
    return this.getNumberAttribute('proxy_template_min');
  }
  public set proxyTemplateMin(value: number) {
    this._proxyTemplateMin = value;
  }
  public resetProxyTemplateMin() {
    this._proxyTemplateMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTemplateMinInput() {
    return this._proxyTemplateMin;
  }

  // real_port_default - computed: false, optional: true, required: false
  private _realPortDefault?: number; 
  public get realPortDefault() {
    return this.getNumberAttribute('real_port_default');
  }
  public set realPortDefault(value: number) {
    this._realPortDefault = value;
  }
  public resetRealPortDefault() {
    this._realPortDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realPortDefaultInput() {
    return this._realPortDefault;
  }

  // real_port_max - computed: false, optional: true, required: false
  private _realPortMax?: number; 
  public get realPortMax() {
    return this.getNumberAttribute('real_port_max');
  }
  public set realPortMax(value: number) {
    this._realPortMax = value;
  }
  public resetRealPortMax() {
    this._realPortMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realPortMaxInput() {
    return this._realPortMax;
  }

  // real_port_min - computed: false, optional: true, required: false
  private _realPortMin?: number; 
  public get realPortMin() {
    return this.getNumberAttribute('real_port_min');
  }
  public set realPortMin(value: number) {
    this._realPortMin = value;
  }
  public resetRealPortMin() {
    this._realPortMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realPortMinInput() {
    return this._realPortMin;
  }

  // real_server_default - computed: false, optional: true, required: false
  private _realServerDefault?: number; 
  public get realServerDefault() {
    return this.getNumberAttribute('real_server_default');
  }
  public set realServerDefault(value: number) {
    this._realServerDefault = value;
  }
  public resetRealServerDefault() {
    this._realServerDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realServerDefaultInput() {
    return this._realServerDefault;
  }

  // real_server_max - computed: false, optional: true, required: false
  private _realServerMax?: number; 
  public get realServerMax() {
    return this.getNumberAttribute('real_server_max');
  }
  public set realServerMax(value: number) {
    this._realServerMax = value;
  }
  public resetRealServerMax() {
    this._realServerMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realServerMaxInput() {
    return this._realServerMax;
  }

  // real_server_min - computed: false, optional: true, required: false
  private _realServerMin?: number; 
  public get realServerMin() {
    return this.getNumberAttribute('real_server_min');
  }
  public set realServerMin(value: number) {
    this._realServerMin = value;
  }
  public resetRealServerMin() {
    this._realServerMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realServerMinInput() {
    return this._realServerMin;
  }

  // server_ssl_template_default - computed: false, optional: true, required: false
  private _serverSslTemplateDefault?: number; 
  public get serverSslTemplateDefault() {
    return this.getNumberAttribute('server_ssl_template_default');
  }
  public set serverSslTemplateDefault(value: number) {
    this._serverSslTemplateDefault = value;
  }
  public resetServerSslTemplateDefault() {
    this._serverSslTemplateDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSslTemplateDefaultInput() {
    return this._serverSslTemplateDefault;
  }

  // server_ssl_template_max - computed: false, optional: true, required: false
  private _serverSslTemplateMax?: number; 
  public get serverSslTemplateMax() {
    return this.getNumberAttribute('server_ssl_template_max');
  }
  public set serverSslTemplateMax(value: number) {
    this._serverSslTemplateMax = value;
  }
  public resetServerSslTemplateMax() {
    this._serverSslTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSslTemplateMaxInput() {
    return this._serverSslTemplateMax;
  }

  // server_ssl_template_min - computed: false, optional: true, required: false
  private _serverSslTemplateMin?: number; 
  public get serverSslTemplateMin() {
    return this.getNumberAttribute('server_ssl_template_min');
  }
  public set serverSslTemplateMin(value: number) {
    this._serverSslTemplateMin = value;
  }
  public resetServerSslTemplateMin() {
    this._serverSslTemplateMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSslTemplateMinInput() {
    return this._serverSslTemplateMin;
  }

  // service_group_default - computed: false, optional: true, required: false
  private _serviceGroupDefault?: number; 
  public get serviceGroupDefault() {
    return this.getNumberAttribute('service_group_default');
  }
  public set serviceGroupDefault(value: number) {
    this._serviceGroupDefault = value;
  }
  public resetServiceGroupDefault() {
    this._serviceGroupDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupDefaultInput() {
    return this._serviceGroupDefault;
  }

  // service_group_max - computed: false, optional: true, required: false
  private _serviceGroupMax?: number; 
  public get serviceGroupMax() {
    return this.getNumberAttribute('service_group_max');
  }
  public set serviceGroupMax(value: number) {
    this._serviceGroupMax = value;
  }
  public resetServiceGroupMax() {
    this._serviceGroupMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupMaxInput() {
    return this._serviceGroupMax;
  }

  // service_group_min - computed: false, optional: true, required: false
  private _serviceGroupMin?: number; 
  public get serviceGroupMin() {
    return this.getNumberAttribute('service_group_min');
  }
  public set serviceGroupMin(value: number) {
    this._serviceGroupMin = value;
  }
  public resetServiceGroupMin() {
    this._serviceGroupMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupMinInput() {
    return this._serviceGroupMin;
  }

  // slb_threshold_res_usage_default - computed: false, optional: true, required: false
  private _slbThresholdResUsageDefault?: number; 
  public get slbThresholdResUsageDefault() {
    return this.getNumberAttribute('slb_threshold_res_usage_default');
  }
  public set slbThresholdResUsageDefault(value: number) {
    this._slbThresholdResUsageDefault = value;
  }
  public resetSlbThresholdResUsageDefault() {
    this._slbThresholdResUsageDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbThresholdResUsageDefaultInput() {
    return this._slbThresholdResUsageDefault;
  }

  // slb_threshold_res_usage_max - computed: false, optional: true, required: false
  private _slbThresholdResUsageMax?: number; 
  public get slbThresholdResUsageMax() {
    return this.getNumberAttribute('slb_threshold_res_usage_max');
  }
  public set slbThresholdResUsageMax(value: number) {
    this._slbThresholdResUsageMax = value;
  }
  public resetSlbThresholdResUsageMax() {
    this._slbThresholdResUsageMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbThresholdResUsageMaxInput() {
    return this._slbThresholdResUsageMax;
  }

  // slb_threshold_res_usage_min - computed: false, optional: true, required: false
  private _slbThresholdResUsageMin?: number; 
  public get slbThresholdResUsageMin() {
    return this.getNumberAttribute('slb_threshold_res_usage_min');
  }
  public set slbThresholdResUsageMin(value: number) {
    this._slbThresholdResUsageMin = value;
  }
  public resetSlbThresholdResUsageMin() {
    this._slbThresholdResUsageMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbThresholdResUsageMinInput() {
    return this._slbThresholdResUsageMin;
  }

  // stream_template_default - computed: false, optional: true, required: false
  private _streamTemplateDefault?: number; 
  public get streamTemplateDefault() {
    return this.getNumberAttribute('stream_template_default');
  }
  public set streamTemplateDefault(value: number) {
    this._streamTemplateDefault = value;
  }
  public resetStreamTemplateDefault() {
    this._streamTemplateDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamTemplateDefaultInput() {
    return this._streamTemplateDefault;
  }

  // stream_template_max - computed: false, optional: true, required: false
  private _streamTemplateMax?: number; 
  public get streamTemplateMax() {
    return this.getNumberAttribute('stream_template_max');
  }
  public set streamTemplateMax(value: number) {
    this._streamTemplateMax = value;
  }
  public resetStreamTemplateMax() {
    this._streamTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamTemplateMaxInput() {
    return this._streamTemplateMax;
  }

  // stream_template_min - computed: false, optional: true, required: false
  private _streamTemplateMin?: number; 
  public get streamTemplateMin() {
    return this.getNumberAttribute('stream_template_min');
  }
  public set streamTemplateMin(value: number) {
    this._streamTemplateMin = value;
  }
  public resetStreamTemplateMin() {
    this._streamTemplateMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamTemplateMinInput() {
    return this._streamTemplateMin;
  }

  // virtual_port_default - computed: false, optional: true, required: false
  private _virtualPortDefault?: number; 
  public get virtualPortDefault() {
    return this.getNumberAttribute('virtual_port_default');
  }
  public set virtualPortDefault(value: number) {
    this._virtualPortDefault = value;
  }
  public resetVirtualPortDefault() {
    this._virtualPortDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPortDefaultInput() {
    return this._virtualPortDefault;
  }

  // virtual_port_max - computed: false, optional: true, required: false
  private _virtualPortMax?: number; 
  public get virtualPortMax() {
    return this.getNumberAttribute('virtual_port_max');
  }
  public set virtualPortMax(value: number) {
    this._virtualPortMax = value;
  }
  public resetVirtualPortMax() {
    this._virtualPortMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPortMaxInput() {
    return this._virtualPortMax;
  }

  // virtual_port_min - computed: false, optional: true, required: false
  private _virtualPortMin?: number; 
  public get virtualPortMin() {
    return this.getNumberAttribute('virtual_port_min');
  }
  public set virtualPortMin(value: number) {
    this._virtualPortMin = value;
  }
  public resetVirtualPortMin() {
    this._virtualPortMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPortMinInput() {
    return this._virtualPortMin;
  }

  // virtual_server_default - computed: false, optional: true, required: false
  private _virtualServerDefault?: number; 
  public get virtualServerDefault() {
    return this.getNumberAttribute('virtual_server_default');
  }
  public set virtualServerDefault(value: number) {
    this._virtualServerDefault = value;
  }
  public resetVirtualServerDefault() {
    this._virtualServerDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerDefaultInput() {
    return this._virtualServerDefault;
  }

  // virtual_server_max - computed: false, optional: true, required: false
  private _virtualServerMax?: number; 
  public get virtualServerMax() {
    return this.getNumberAttribute('virtual_server_max');
  }
  public set virtualServerMax(value: number) {
    this._virtualServerMax = value;
  }
  public resetVirtualServerMax() {
    this._virtualServerMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerMaxInput() {
    return this._virtualServerMax;
  }

  // virtual_server_min - computed: false, optional: true, required: false
  private _virtualServerMin?: number; 
  public get virtualServerMin() {
    return this.getNumberAttribute('virtual_server_min');
  }
  public set virtualServerMin(value: number) {
    this._virtualServerMin = value;
  }
  public resetVirtualServerMin() {
    this._virtualServerMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerMinInput() {
    return this._virtualServerMin;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper thunder_slb_resource_usage_oper}
*/
export class DataThunderSlbResourceUsageOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_resource_usage_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbResourceUsageOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbResourceUsageOper to import
  * @param importFromId The id of the existing DataThunderSlbResourceUsageOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbResourceUsageOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_resource_usage_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_resource_usage_oper thunder_slb_resource_usage_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbResourceUsageOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbResourceUsageOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_resource_usage_oper',
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
    this._id = config.id;
    this._oper.internalValue = config.oper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSlbResourceUsageOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbResourceUsageOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderSlbResourceUsageOperOperToTerraform(this._oper.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderSlbResourceUsageOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbResourceUsageOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
