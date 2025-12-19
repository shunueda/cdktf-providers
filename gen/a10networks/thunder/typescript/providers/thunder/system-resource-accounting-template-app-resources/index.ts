// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemResourceAccountingTemplateAppResourcesAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#id SystemResourceAccountingTemplateAppResourcesA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#template_name SystemResourceAccountingTemplateAppResourcesA#template_name}
  */
  readonly templateName: string;
  /**
  * Enter the threshold as a percentage (Threshold in percentage(default is 100%))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#threshold SystemResourceAccountingTemplateAppResourcesA#threshold}
  */
  readonly threshold?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#uuid SystemResourceAccountingTemplateAppResourcesA#uuid}
  */
  readonly uuid?: string;
  /**
  * cache_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#cache_template_cfg SystemResourceAccountingTemplateAppResourcesA#cache_template_cfg}
  */
  readonly cacheTemplateCfg?: SystemResourceAccountingTemplateAppResourcesCacheTemplateCfgA;
  /**
  * client_ssl_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#client_ssl_template_cfg SystemResourceAccountingTemplateAppResourcesA#client_ssl_template_cfg}
  */
  readonly clientSslTemplateCfg?: SystemResourceAccountingTemplateAppResourcesClientSslTemplateCfgA;
  /**
  * conn_reuse_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#conn_reuse_template_cfg SystemResourceAccountingTemplateAppResourcesA#conn_reuse_template_cfg}
  */
  readonly connReuseTemplateCfg?: SystemResourceAccountingTemplateAppResourcesConnReuseTemplateCfgA;
  /**
  * fast_tcp_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#fast_tcp_template_cfg SystemResourceAccountingTemplateAppResourcesA#fast_tcp_template_cfg}
  */
  readonly fastTcpTemplateCfg?: SystemResourceAccountingTemplateAppResourcesFastTcpTemplateCfgA;
  /**
  * fast_udp_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#fast_udp_template_cfg SystemResourceAccountingTemplateAppResourcesA#fast_udp_template_cfg}
  */
  readonly fastUdpTemplateCfg?: SystemResourceAccountingTemplateAppResourcesFastUdpTemplateCfgA;
  /**
  * fix_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#fix_template_cfg SystemResourceAccountingTemplateAppResourcesA#fix_template_cfg}
  */
  readonly fixTemplateCfg?: SystemResourceAccountingTemplateAppResourcesFixTemplateCfgA;
  /**
  * gslb_device_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_device_cfg SystemResourceAccountingTemplateAppResourcesA#gslb_device_cfg}
  */
  readonly gslbDeviceCfg?: SystemResourceAccountingTemplateAppResourcesGslbDeviceCfgA;
  /**
  * gslb_geo_location_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_geo_location_cfg SystemResourceAccountingTemplateAppResourcesA#gslb_geo_location_cfg}
  */
  readonly gslbGeoLocationCfg?: SystemResourceAccountingTemplateAppResourcesGslbGeoLocationCfgA;
  /**
  * gslb_ip_list_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_ip_list_cfg SystemResourceAccountingTemplateAppResourcesA#gslb_ip_list_cfg}
  */
  readonly gslbIpListCfg?: SystemResourceAccountingTemplateAppResourcesGslbIpListCfgA;
  /**
  * gslb_policy_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_policy_cfg SystemResourceAccountingTemplateAppResourcesA#gslb_policy_cfg}
  */
  readonly gslbPolicyCfg?: SystemResourceAccountingTemplateAppResourcesGslbPolicyCfgA;
  /**
  * gslb_service_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_service_cfg SystemResourceAccountingTemplateAppResourcesA#gslb_service_cfg}
  */
  readonly gslbServiceCfg?: SystemResourceAccountingTemplateAppResourcesGslbServiceCfgA;
  /**
  * gslb_service_ip_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_service_ip_cfg SystemResourceAccountingTemplateAppResourcesA#gslb_service_ip_cfg}
  */
  readonly gslbServiceIpCfg?: SystemResourceAccountingTemplateAppResourcesGslbServiceIpCfgA;
  /**
  * gslb_service_port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_service_port_cfg SystemResourceAccountingTemplateAppResourcesA#gslb_service_port_cfg}
  */
  readonly gslbServicePortCfg?: SystemResourceAccountingTemplateAppResourcesGslbServicePortCfgA;
  /**
  * gslb_site_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_site_cfg SystemResourceAccountingTemplateAppResourcesA#gslb_site_cfg}
  */
  readonly gslbSiteCfg?: SystemResourceAccountingTemplateAppResourcesGslbSiteCfgA;
  /**
  * gslb_svc_group_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_svc_group_cfg SystemResourceAccountingTemplateAppResourcesA#gslb_svc_group_cfg}
  */
  readonly gslbSvcGroupCfg?: SystemResourceAccountingTemplateAppResourcesGslbSvcGroupCfgA;
  /**
  * gslb_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_template_cfg SystemResourceAccountingTemplateAppResourcesA#gslb_template_cfg}
  */
  readonly gslbTemplateCfg?: SystemResourceAccountingTemplateAppResourcesGslbTemplateCfgA;
  /**
  * gslb_zone_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_zone_cfg SystemResourceAccountingTemplateAppResourcesA#gslb_zone_cfg}
  */
  readonly gslbZoneCfg?: SystemResourceAccountingTemplateAppResourcesGslbZoneCfgA;
  /**
  * health_monitor_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#health_monitor_cfg SystemResourceAccountingTemplateAppResourcesA#health_monitor_cfg}
  */
  readonly healthMonitorCfg?: SystemResourceAccountingTemplateAppResourcesHealthMonitorCfgA;
  /**
  * http_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#http_template_cfg SystemResourceAccountingTemplateAppResourcesA#http_template_cfg}
  */
  readonly httpTemplateCfg?: SystemResourceAccountingTemplateAppResourcesHttpTemplateCfgA;
  /**
  * link_cost_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#link_cost_template_cfg SystemResourceAccountingTemplateAppResourcesA#link_cost_template_cfg}
  */
  readonly linkCostTemplateCfg?: SystemResourceAccountingTemplateAppResourcesLinkCostTemplateCfgA;
  /**
  * pbslb_entry_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#pbslb_entry_cfg SystemResourceAccountingTemplateAppResourcesA#pbslb_entry_cfg}
  */
  readonly pbslbEntryCfg?: SystemResourceAccountingTemplateAppResourcesPbslbEntryCfgA;
  /**
  * persist_cookie_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#persist_cookie_template_cfg SystemResourceAccountingTemplateAppResourcesA#persist_cookie_template_cfg}
  */
  readonly persistCookieTemplateCfg?: SystemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfgA;
  /**
  * persist_srcip_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#persist_srcip_template_cfg SystemResourceAccountingTemplateAppResourcesA#persist_srcip_template_cfg}
  */
  readonly persistSrcipTemplateCfg?: SystemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfgA;
  /**
  * proxy_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#proxy_template_cfg SystemResourceAccountingTemplateAppResourcesA#proxy_template_cfg}
  */
  readonly proxyTemplateCfg?: SystemResourceAccountingTemplateAppResourcesProxyTemplateCfgA;
  /**
  * real_port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#real_port_cfg SystemResourceAccountingTemplateAppResourcesA#real_port_cfg}
  */
  readonly realPortCfg?: SystemResourceAccountingTemplateAppResourcesRealPortCfgA;
  /**
  * real_server_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#real_server_cfg SystemResourceAccountingTemplateAppResourcesA#real_server_cfg}
  */
  readonly realServerCfg?: SystemResourceAccountingTemplateAppResourcesRealServerCfgA;
  /**
  * server_ssl_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#server_ssl_template_cfg SystemResourceAccountingTemplateAppResourcesA#server_ssl_template_cfg}
  */
  readonly serverSslTemplateCfg?: SystemResourceAccountingTemplateAppResourcesServerSslTemplateCfgA;
  /**
  * service_group_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#service_group_cfg SystemResourceAccountingTemplateAppResourcesA#service_group_cfg}
  */
  readonly serviceGroupCfg?: SystemResourceAccountingTemplateAppResourcesServiceGroupCfgA;
  /**
  * stream_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#stream_template_cfg SystemResourceAccountingTemplateAppResourcesA#stream_template_cfg}
  */
  readonly streamTemplateCfg?: SystemResourceAccountingTemplateAppResourcesStreamTemplateCfgA;
  /**
  * virtual_port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#virtual_port_cfg SystemResourceAccountingTemplateAppResourcesA#virtual_port_cfg}
  */
  readonly virtualPortCfg?: SystemResourceAccountingTemplateAppResourcesVirtualPortCfgA;
  /**
  * virtual_server_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#virtual_server_cfg SystemResourceAccountingTemplateAppResourcesA#virtual_server_cfg}
  */
  readonly virtualServerCfg?: SystemResourceAccountingTemplateAppResourcesVirtualServerCfgA;
}
export interface SystemResourceAccountingTemplateAppResourcesCacheTemplateCfgA {
  /**
  * Enter the number of cache-template allowed (cache-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#cache_template_max SystemResourceAccountingTemplateAppResourcesA#cache_template_max}
  */
  readonly cacheTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#cache_template_min_guarantee SystemResourceAccountingTemplateAppResourcesA#cache_template_min_guarantee}
  */
  readonly cacheTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesCacheTemplateCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesCacheTemplateCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesCacheTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_template_max: cdktf.numberToTerraform(struct!.cacheTemplateMax),
    cache_template_min_guarantee: cdktf.numberToTerraform(struct!.cacheTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesCacheTemplateCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesCacheTemplateCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesCacheTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_template_max: {
      value: cdktf.numberToHclTerraform(struct!.cacheTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.cacheTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesCacheTemplateCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesCacheTemplateCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTemplateMax = this._cacheTemplateMax;
    }
    if (this._cacheTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTemplateMinGuarantee = this._cacheTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesCacheTemplateCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheTemplateMax = undefined;
      this._cacheTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheTemplateMax = value.cacheTemplateMax;
      this._cacheTemplateMinGuarantee = value.cacheTemplateMinGuarantee;
    }
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

  // cache_template_min_guarantee - computed: false, optional: true, required: false
  private _cacheTemplateMinGuarantee?: number; 
  public get cacheTemplateMinGuarantee() {
    return this.getNumberAttribute('cache_template_min_guarantee');
  }
  public set cacheTemplateMinGuarantee(value: number) {
    this._cacheTemplateMinGuarantee = value;
  }
  public resetCacheTemplateMinGuarantee() {
    this._cacheTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTemplateMinGuaranteeInput() {
    return this._cacheTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateAppResourcesClientSslTemplateCfgA {
  /**
  * Enter the number of client-ssl-template allowed (client-ssl-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#client_ssl_template_max SystemResourceAccountingTemplateAppResourcesA#client_ssl_template_max}
  */
  readonly clientSslTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#client_ssl_template_min_guarantee SystemResourceAccountingTemplateAppResourcesA#client_ssl_template_min_guarantee}
  */
  readonly clientSslTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesClientSslTemplateCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesClientSslTemplateCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesClientSslTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ssl_template_max: cdktf.numberToTerraform(struct!.clientSslTemplateMax),
    client_ssl_template_min_guarantee: cdktf.numberToTerraform(struct!.clientSslTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesClientSslTemplateCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesClientSslTemplateCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesClientSslTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ssl_template_max: {
      value: cdktf.numberToHclTerraform(struct!.clientSslTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_ssl_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.clientSslTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesClientSslTemplateCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesClientSslTemplateCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientSslTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSslTemplateMax = this._clientSslTemplateMax;
    }
    if (this._clientSslTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSslTemplateMinGuarantee = this._clientSslTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesClientSslTemplateCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientSslTemplateMax = undefined;
      this._clientSslTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientSslTemplateMax = value.clientSslTemplateMax;
      this._clientSslTemplateMinGuarantee = value.clientSslTemplateMinGuarantee;
    }
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

  // client_ssl_template_min_guarantee - computed: false, optional: true, required: false
  private _clientSslTemplateMinGuarantee?: number; 
  public get clientSslTemplateMinGuarantee() {
    return this.getNumberAttribute('client_ssl_template_min_guarantee');
  }
  public set clientSslTemplateMinGuarantee(value: number) {
    this._clientSslTemplateMinGuarantee = value;
  }
  public resetClientSslTemplateMinGuarantee() {
    this._clientSslTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSslTemplateMinGuaranteeInput() {
    return this._clientSslTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateAppResourcesConnReuseTemplateCfgA {
  /**
  * Enter the number of conn-reuse-template allowed (conn-reuse-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#conn_reuse_template_max SystemResourceAccountingTemplateAppResourcesA#conn_reuse_template_max}
  */
  readonly connReuseTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#conn_reuse_template_min_guarantee SystemResourceAccountingTemplateAppResourcesA#conn_reuse_template_min_guarantee}
  */
  readonly connReuseTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesConnReuseTemplateCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesConnReuseTemplateCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesConnReuseTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conn_reuse_template_max: cdktf.numberToTerraform(struct!.connReuseTemplateMax),
    conn_reuse_template_min_guarantee: cdktf.numberToTerraform(struct!.connReuseTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesConnReuseTemplateCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesConnReuseTemplateCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesConnReuseTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conn_reuse_template_max: {
      value: cdktf.numberToHclTerraform(struct!.connReuseTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_reuse_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.connReuseTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesConnReuseTemplateCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesConnReuseTemplateCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connReuseTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.connReuseTemplateMax = this._connReuseTemplateMax;
    }
    if (this._connReuseTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.connReuseTemplateMinGuarantee = this._connReuseTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesConnReuseTemplateCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connReuseTemplateMax = undefined;
      this._connReuseTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connReuseTemplateMax = value.connReuseTemplateMax;
      this._connReuseTemplateMinGuarantee = value.connReuseTemplateMinGuarantee;
    }
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

  // conn_reuse_template_min_guarantee - computed: false, optional: true, required: false
  private _connReuseTemplateMinGuarantee?: number; 
  public get connReuseTemplateMinGuarantee() {
    return this.getNumberAttribute('conn_reuse_template_min_guarantee');
  }
  public set connReuseTemplateMinGuarantee(value: number) {
    this._connReuseTemplateMinGuarantee = value;
  }
  public resetConnReuseTemplateMinGuarantee() {
    this._connReuseTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connReuseTemplateMinGuaranteeInput() {
    return this._connReuseTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateAppResourcesFastTcpTemplateCfgA {
  /**
  * Enter the number of fast-tcp-template allowed (fast-tcp-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#fast_tcp_template_max SystemResourceAccountingTemplateAppResourcesA#fast_tcp_template_max}
  */
  readonly fastTcpTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#fast_tcp_template_min_guarantee SystemResourceAccountingTemplateAppResourcesA#fast_tcp_template_min_guarantee}
  */
  readonly fastTcpTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesFastTcpTemplateCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesFastTcpTemplateCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesFastTcpTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fast_tcp_template_max: cdktf.numberToTerraform(struct!.fastTcpTemplateMax),
    fast_tcp_template_min_guarantee: cdktf.numberToTerraform(struct!.fastTcpTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesFastTcpTemplateCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesFastTcpTemplateCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesFastTcpTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fast_tcp_template_max: {
      value: cdktf.numberToHclTerraform(struct!.fastTcpTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fast_tcp_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.fastTcpTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesFastTcpTemplateCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesFastTcpTemplateCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fastTcpTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastTcpTemplateMax = this._fastTcpTemplateMax;
    }
    if (this._fastTcpTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastTcpTemplateMinGuarantee = this._fastTcpTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesFastTcpTemplateCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fastTcpTemplateMax = undefined;
      this._fastTcpTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fastTcpTemplateMax = value.fastTcpTemplateMax;
      this._fastTcpTemplateMinGuarantee = value.fastTcpTemplateMinGuarantee;
    }
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

  // fast_tcp_template_min_guarantee - computed: false, optional: true, required: false
  private _fastTcpTemplateMinGuarantee?: number; 
  public get fastTcpTemplateMinGuarantee() {
    return this.getNumberAttribute('fast_tcp_template_min_guarantee');
  }
  public set fastTcpTemplateMinGuarantee(value: number) {
    this._fastTcpTemplateMinGuarantee = value;
  }
  public resetFastTcpTemplateMinGuarantee() {
    this._fastTcpTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastTcpTemplateMinGuaranteeInput() {
    return this._fastTcpTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateAppResourcesFastUdpTemplateCfgA {
  /**
  * Enter the number of fast-udp-template allowed (fast-udp-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#fast_udp_template_max SystemResourceAccountingTemplateAppResourcesA#fast_udp_template_max}
  */
  readonly fastUdpTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#fast_udp_template_min_guarantee SystemResourceAccountingTemplateAppResourcesA#fast_udp_template_min_guarantee}
  */
  readonly fastUdpTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesFastUdpTemplateCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesFastUdpTemplateCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesFastUdpTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fast_udp_template_max: cdktf.numberToTerraform(struct!.fastUdpTemplateMax),
    fast_udp_template_min_guarantee: cdktf.numberToTerraform(struct!.fastUdpTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesFastUdpTemplateCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesFastUdpTemplateCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesFastUdpTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fast_udp_template_max: {
      value: cdktf.numberToHclTerraform(struct!.fastUdpTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fast_udp_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.fastUdpTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesFastUdpTemplateCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesFastUdpTemplateCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fastUdpTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastUdpTemplateMax = this._fastUdpTemplateMax;
    }
    if (this._fastUdpTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastUdpTemplateMinGuarantee = this._fastUdpTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesFastUdpTemplateCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fastUdpTemplateMax = undefined;
      this._fastUdpTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fastUdpTemplateMax = value.fastUdpTemplateMax;
      this._fastUdpTemplateMinGuarantee = value.fastUdpTemplateMinGuarantee;
    }
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

  // fast_udp_template_min_guarantee - computed: false, optional: true, required: false
  private _fastUdpTemplateMinGuarantee?: number; 
  public get fastUdpTemplateMinGuarantee() {
    return this.getNumberAttribute('fast_udp_template_min_guarantee');
  }
  public set fastUdpTemplateMinGuarantee(value: number) {
    this._fastUdpTemplateMinGuarantee = value;
  }
  public resetFastUdpTemplateMinGuarantee() {
    this._fastUdpTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastUdpTemplateMinGuaranteeInput() {
    return this._fastUdpTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateAppResourcesFixTemplateCfgA {
  /**
  * Enter the number of fix-template allowed (fix-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#fix_template_max SystemResourceAccountingTemplateAppResourcesA#fix_template_max}
  */
  readonly fixTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#fix_template_min_guarantee SystemResourceAccountingTemplateAppResourcesA#fix_template_min_guarantee}
  */
  readonly fixTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesFixTemplateCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesFixTemplateCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesFixTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fix_template_max: cdktf.numberToTerraform(struct!.fixTemplateMax),
    fix_template_min_guarantee: cdktf.numberToTerraform(struct!.fixTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesFixTemplateCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesFixTemplateCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesFixTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fix_template_max: {
      value: cdktf.numberToHclTerraform(struct!.fixTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fix_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.fixTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesFixTemplateCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesFixTemplateCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixTemplateMax = this._fixTemplateMax;
    }
    if (this._fixTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixTemplateMinGuarantee = this._fixTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesFixTemplateCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixTemplateMax = undefined;
      this._fixTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixTemplateMax = value.fixTemplateMax;
      this._fixTemplateMinGuarantee = value.fixTemplateMinGuarantee;
    }
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

  // fix_template_min_guarantee - computed: false, optional: true, required: false
  private _fixTemplateMinGuarantee?: number; 
  public get fixTemplateMinGuarantee() {
    return this.getNumberAttribute('fix_template_min_guarantee');
  }
  public set fixTemplateMinGuarantee(value: number) {
    this._fixTemplateMinGuarantee = value;
  }
  public resetFixTemplateMinGuarantee() {
    this._fixTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixTemplateMinGuaranteeInput() {
    return this._fixTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateAppResourcesGslbDeviceCfgA {
  /**
  * Enter the number of gslb-device allowed (gslb-device count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_device_max SystemResourceAccountingTemplateAppResourcesA#gslb_device_max}
  */
  readonly gslbDeviceMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_device_min_guarantee SystemResourceAccountingTemplateAppResourcesA#gslb_device_min_guarantee}
  */
  readonly gslbDeviceMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesGslbDeviceCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbDeviceCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesGslbDeviceCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_device_max: cdktf.numberToTerraform(struct!.gslbDeviceMax),
    gslb_device_min_guarantee: cdktf.numberToTerraform(struct!.gslbDeviceMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesGslbDeviceCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbDeviceCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesGslbDeviceCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_device_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbDeviceMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_device_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbDeviceMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesGslbDeviceCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesGslbDeviceCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbDeviceMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbDeviceMax = this._gslbDeviceMax;
    }
    if (this._gslbDeviceMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbDeviceMinGuarantee = this._gslbDeviceMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesGslbDeviceCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbDeviceMax = undefined;
      this._gslbDeviceMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbDeviceMax = value.gslbDeviceMax;
      this._gslbDeviceMinGuarantee = value.gslbDeviceMinGuarantee;
    }
  }

  // gslb_device_max - computed: false, optional: true, required: false
  private _gslbDeviceMax?: number; 
  public get gslbDeviceMax() {
    return this.getNumberAttribute('gslb_device_max');
  }
  public set gslbDeviceMax(value: number) {
    this._gslbDeviceMax = value;
  }
  public resetGslbDeviceMax() {
    this._gslbDeviceMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbDeviceMaxInput() {
    return this._gslbDeviceMax;
  }

  // gslb_device_min_guarantee - computed: false, optional: true, required: false
  private _gslbDeviceMinGuarantee?: number; 
  public get gslbDeviceMinGuarantee() {
    return this.getNumberAttribute('gslb_device_min_guarantee');
  }
  public set gslbDeviceMinGuarantee(value: number) {
    this._gslbDeviceMinGuarantee = value;
  }
  public resetGslbDeviceMinGuarantee() {
    this._gslbDeviceMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbDeviceMinGuaranteeInput() {
    return this._gslbDeviceMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateAppResourcesGslbGeoLocationCfgA {
  /**
  * Enter the number of gslb-geo-location allowed (gslb-geo-location count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_geo_location_max SystemResourceAccountingTemplateAppResourcesA#gslb_geo_location_max}
  */
  readonly gslbGeoLocationMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_geo_location_min_guarantee SystemResourceAccountingTemplateAppResourcesA#gslb_geo_location_min_guarantee}
  */
  readonly gslbGeoLocationMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesGslbGeoLocationCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbGeoLocationCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesGslbGeoLocationCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_geo_location_max: cdktf.numberToTerraform(struct!.gslbGeoLocationMax),
    gslb_geo_location_min_guarantee: cdktf.numberToTerraform(struct!.gslbGeoLocationMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesGslbGeoLocationCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbGeoLocationCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesGslbGeoLocationCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_geo_location_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbGeoLocationMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_geo_location_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbGeoLocationMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesGslbGeoLocationCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesGslbGeoLocationCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbGeoLocationMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbGeoLocationMax = this._gslbGeoLocationMax;
    }
    if (this._gslbGeoLocationMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbGeoLocationMinGuarantee = this._gslbGeoLocationMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesGslbGeoLocationCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbGeoLocationMax = undefined;
      this._gslbGeoLocationMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbGeoLocationMax = value.gslbGeoLocationMax;
      this._gslbGeoLocationMinGuarantee = value.gslbGeoLocationMinGuarantee;
    }
  }

  // gslb_geo_location_max - computed: false, optional: true, required: false
  private _gslbGeoLocationMax?: number; 
  public get gslbGeoLocationMax() {
    return this.getNumberAttribute('gslb_geo_location_max');
  }
  public set gslbGeoLocationMax(value: number) {
    this._gslbGeoLocationMax = value;
  }
  public resetGslbGeoLocationMax() {
    this._gslbGeoLocationMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbGeoLocationMaxInput() {
    return this._gslbGeoLocationMax;
  }

  // gslb_geo_location_min_guarantee - computed: false, optional: true, required: false
  private _gslbGeoLocationMinGuarantee?: number; 
  public get gslbGeoLocationMinGuarantee() {
    return this.getNumberAttribute('gslb_geo_location_min_guarantee');
  }
  public set gslbGeoLocationMinGuarantee(value: number) {
    this._gslbGeoLocationMinGuarantee = value;
  }
  public resetGslbGeoLocationMinGuarantee() {
    this._gslbGeoLocationMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbGeoLocationMinGuaranteeInput() {
    return this._gslbGeoLocationMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateAppResourcesGslbIpListCfgA {
  /**
  * Enter the number of gslb-ip-list allowed (gslb-ip-list count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_ip_list_max SystemResourceAccountingTemplateAppResourcesA#gslb_ip_list_max}
  */
  readonly gslbIpListMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_ip_list_min_guarantee SystemResourceAccountingTemplateAppResourcesA#gslb_ip_list_min_guarantee}
  */
  readonly gslbIpListMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesGslbIpListCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbIpListCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesGslbIpListCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_ip_list_max: cdktf.numberToTerraform(struct!.gslbIpListMax),
    gslb_ip_list_min_guarantee: cdktf.numberToTerraform(struct!.gslbIpListMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesGslbIpListCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbIpListCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesGslbIpListCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_ip_list_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbIpListMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_ip_list_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbIpListMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesGslbIpListCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesGslbIpListCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbIpListMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbIpListMax = this._gslbIpListMax;
    }
    if (this._gslbIpListMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbIpListMinGuarantee = this._gslbIpListMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesGslbIpListCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbIpListMax = undefined;
      this._gslbIpListMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbIpListMax = value.gslbIpListMax;
      this._gslbIpListMinGuarantee = value.gslbIpListMinGuarantee;
    }
  }

  // gslb_ip_list_max - computed: false, optional: true, required: false
  private _gslbIpListMax?: number; 
  public get gslbIpListMax() {
    return this.getNumberAttribute('gslb_ip_list_max');
  }
  public set gslbIpListMax(value: number) {
    this._gslbIpListMax = value;
  }
  public resetGslbIpListMax() {
    this._gslbIpListMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbIpListMaxInput() {
    return this._gslbIpListMax;
  }

  // gslb_ip_list_min_guarantee - computed: false, optional: true, required: false
  private _gslbIpListMinGuarantee?: number; 
  public get gslbIpListMinGuarantee() {
    return this.getNumberAttribute('gslb_ip_list_min_guarantee');
  }
  public set gslbIpListMinGuarantee(value: number) {
    this._gslbIpListMinGuarantee = value;
  }
  public resetGslbIpListMinGuarantee() {
    this._gslbIpListMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbIpListMinGuaranteeInput() {
    return this._gslbIpListMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateAppResourcesGslbPolicyCfgA {
  /**
  * Enter the number of gslb-policy allowed (gslb-policy count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_policy_max SystemResourceAccountingTemplateAppResourcesA#gslb_policy_max}
  */
  readonly gslbPolicyMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_policy_min_guarantee SystemResourceAccountingTemplateAppResourcesA#gslb_policy_min_guarantee}
  */
  readonly gslbPolicyMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesGslbPolicyCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbPolicyCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesGslbPolicyCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_policy_max: cdktf.numberToTerraform(struct!.gslbPolicyMax),
    gslb_policy_min_guarantee: cdktf.numberToTerraform(struct!.gslbPolicyMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesGslbPolicyCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbPolicyCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesGslbPolicyCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_policy_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbPolicyMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_policy_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbPolicyMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesGslbPolicyCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesGslbPolicyCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbPolicyMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbPolicyMax = this._gslbPolicyMax;
    }
    if (this._gslbPolicyMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbPolicyMinGuarantee = this._gslbPolicyMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesGslbPolicyCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbPolicyMax = undefined;
      this._gslbPolicyMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbPolicyMax = value.gslbPolicyMax;
      this._gslbPolicyMinGuarantee = value.gslbPolicyMinGuarantee;
    }
  }

  // gslb_policy_max - computed: false, optional: true, required: false
  private _gslbPolicyMax?: number; 
  public get gslbPolicyMax() {
    return this.getNumberAttribute('gslb_policy_max');
  }
  public set gslbPolicyMax(value: number) {
    this._gslbPolicyMax = value;
  }
  public resetGslbPolicyMax() {
    this._gslbPolicyMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbPolicyMaxInput() {
    return this._gslbPolicyMax;
  }

  // gslb_policy_min_guarantee - computed: false, optional: true, required: false
  private _gslbPolicyMinGuarantee?: number; 
  public get gslbPolicyMinGuarantee() {
    return this.getNumberAttribute('gslb_policy_min_guarantee');
  }
  public set gslbPolicyMinGuarantee(value: number) {
    this._gslbPolicyMinGuarantee = value;
  }
  public resetGslbPolicyMinGuarantee() {
    this._gslbPolicyMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbPolicyMinGuaranteeInput() {
    return this._gslbPolicyMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateAppResourcesGslbServiceCfgA {
  /**
  * Enter the number of gslb-service allowed (gslb-service count (default is max-value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_service_max SystemResourceAccountingTemplateAppResourcesA#gslb_service_max}
  */
  readonly gslbServiceMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_service_min_guarantee SystemResourceAccountingTemplateAppResourcesA#gslb_service_min_guarantee}
  */
  readonly gslbServiceMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesGslbServiceCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbServiceCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesGslbServiceCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_service_max: cdktf.numberToTerraform(struct!.gslbServiceMax),
    gslb_service_min_guarantee: cdktf.numberToTerraform(struct!.gslbServiceMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesGslbServiceCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbServiceCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesGslbServiceCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_service_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbServiceMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_service_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbServiceMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesGslbServiceCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesGslbServiceCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbServiceMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServiceMax = this._gslbServiceMax;
    }
    if (this._gslbServiceMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServiceMinGuarantee = this._gslbServiceMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesGslbServiceCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbServiceMax = undefined;
      this._gslbServiceMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbServiceMax = value.gslbServiceMax;
      this._gslbServiceMinGuarantee = value.gslbServiceMinGuarantee;
    }
  }

  // gslb_service_max - computed: false, optional: true, required: false
  private _gslbServiceMax?: number; 
  public get gslbServiceMax() {
    return this.getNumberAttribute('gslb_service_max');
  }
  public set gslbServiceMax(value: number) {
    this._gslbServiceMax = value;
  }
  public resetGslbServiceMax() {
    this._gslbServiceMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServiceMaxInput() {
    return this._gslbServiceMax;
  }

  // gslb_service_min_guarantee - computed: false, optional: true, required: false
  private _gslbServiceMinGuarantee?: number; 
  public get gslbServiceMinGuarantee() {
    return this.getNumberAttribute('gslb_service_min_guarantee');
  }
  public set gslbServiceMinGuarantee(value: number) {
    this._gslbServiceMinGuarantee = value;
  }
  public resetGslbServiceMinGuarantee() {
    this._gslbServiceMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServiceMinGuaranteeInput() {
    return this._gslbServiceMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateAppResourcesGslbServiceIpCfgA {
  /**
  * Enter the number of gslb-service-ip allowed (gslb-service-ip count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_service_ip_max SystemResourceAccountingTemplateAppResourcesA#gslb_service_ip_max}
  */
  readonly gslbServiceIpMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_service_ip_min_guarantee SystemResourceAccountingTemplateAppResourcesA#gslb_service_ip_min_guarantee}
  */
  readonly gslbServiceIpMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesGslbServiceIpCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbServiceIpCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesGslbServiceIpCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_service_ip_max: cdktf.numberToTerraform(struct!.gslbServiceIpMax),
    gslb_service_ip_min_guarantee: cdktf.numberToTerraform(struct!.gslbServiceIpMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesGslbServiceIpCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbServiceIpCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesGslbServiceIpCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_service_ip_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbServiceIpMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_service_ip_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbServiceIpMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesGslbServiceIpCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesGslbServiceIpCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbServiceIpMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServiceIpMax = this._gslbServiceIpMax;
    }
    if (this._gslbServiceIpMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServiceIpMinGuarantee = this._gslbServiceIpMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesGslbServiceIpCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbServiceIpMax = undefined;
      this._gslbServiceIpMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbServiceIpMax = value.gslbServiceIpMax;
      this._gslbServiceIpMinGuarantee = value.gslbServiceIpMinGuarantee;
    }
  }

  // gslb_service_ip_max - computed: false, optional: true, required: false
  private _gslbServiceIpMax?: number; 
  public get gslbServiceIpMax() {
    return this.getNumberAttribute('gslb_service_ip_max');
  }
  public set gslbServiceIpMax(value: number) {
    this._gslbServiceIpMax = value;
  }
  public resetGslbServiceIpMax() {
    this._gslbServiceIpMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServiceIpMaxInput() {
    return this._gslbServiceIpMax;
  }

  // gslb_service_ip_min_guarantee - computed: false, optional: true, required: false
  private _gslbServiceIpMinGuarantee?: number; 
  public get gslbServiceIpMinGuarantee() {
    return this.getNumberAttribute('gslb_service_ip_min_guarantee');
  }
  public set gslbServiceIpMinGuarantee(value: number) {
    this._gslbServiceIpMinGuarantee = value;
  }
  public resetGslbServiceIpMinGuarantee() {
    this._gslbServiceIpMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServiceIpMinGuaranteeInput() {
    return this._gslbServiceIpMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateAppResourcesGslbServicePortCfgA {
  /**
  * Enter the number of gslb-service-port allowed ( gslb-service-port count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_service_port_max SystemResourceAccountingTemplateAppResourcesA#gslb_service_port_max}
  */
  readonly gslbServicePortMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_service_port_min_guarantee SystemResourceAccountingTemplateAppResourcesA#gslb_service_port_min_guarantee}
  */
  readonly gslbServicePortMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesGslbServicePortCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbServicePortCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesGslbServicePortCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_service_port_max: cdktf.numberToTerraform(struct!.gslbServicePortMax),
    gslb_service_port_min_guarantee: cdktf.numberToTerraform(struct!.gslbServicePortMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesGslbServicePortCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbServicePortCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesGslbServicePortCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_service_port_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbServicePortMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_service_port_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbServicePortMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesGslbServicePortCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesGslbServicePortCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbServicePortMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServicePortMax = this._gslbServicePortMax;
    }
    if (this._gslbServicePortMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServicePortMinGuarantee = this._gslbServicePortMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesGslbServicePortCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbServicePortMax = undefined;
      this._gslbServicePortMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbServicePortMax = value.gslbServicePortMax;
      this._gslbServicePortMinGuarantee = value.gslbServicePortMinGuarantee;
    }
  }

  // gslb_service_port_max - computed: false, optional: true, required: false
  private _gslbServicePortMax?: number; 
  public get gslbServicePortMax() {
    return this.getNumberAttribute('gslb_service_port_max');
  }
  public set gslbServicePortMax(value: number) {
    this._gslbServicePortMax = value;
  }
  public resetGslbServicePortMax() {
    this._gslbServicePortMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServicePortMaxInput() {
    return this._gslbServicePortMax;
  }

  // gslb_service_port_min_guarantee - computed: false, optional: true, required: false
  private _gslbServicePortMinGuarantee?: number; 
  public get gslbServicePortMinGuarantee() {
    return this.getNumberAttribute('gslb_service_port_min_guarantee');
  }
  public set gslbServicePortMinGuarantee(value: number) {
    this._gslbServicePortMinGuarantee = value;
  }
  public resetGslbServicePortMinGuarantee() {
    this._gslbServicePortMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServicePortMinGuaranteeInput() {
    return this._gslbServicePortMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateAppResourcesGslbSiteCfgA {
  /**
  * Enter the number of gslb-site allowed (gslb-site count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_site_max SystemResourceAccountingTemplateAppResourcesA#gslb_site_max}
  */
  readonly gslbSiteMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_site_min_guarantee SystemResourceAccountingTemplateAppResourcesA#gslb_site_min_guarantee}
  */
  readonly gslbSiteMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesGslbSiteCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbSiteCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesGslbSiteCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_site_max: cdktf.numberToTerraform(struct!.gslbSiteMax),
    gslb_site_min_guarantee: cdktf.numberToTerraform(struct!.gslbSiteMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesGslbSiteCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbSiteCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesGslbSiteCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_site_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbSiteMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_site_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbSiteMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesGslbSiteCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesGslbSiteCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbSiteMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbSiteMax = this._gslbSiteMax;
    }
    if (this._gslbSiteMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbSiteMinGuarantee = this._gslbSiteMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesGslbSiteCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbSiteMax = undefined;
      this._gslbSiteMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbSiteMax = value.gslbSiteMax;
      this._gslbSiteMinGuarantee = value.gslbSiteMinGuarantee;
    }
  }

  // gslb_site_max - computed: false, optional: true, required: false
  private _gslbSiteMax?: number; 
  public get gslbSiteMax() {
    return this.getNumberAttribute('gslb_site_max');
  }
  public set gslbSiteMax(value: number) {
    this._gslbSiteMax = value;
  }
  public resetGslbSiteMax() {
    this._gslbSiteMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSiteMaxInput() {
    return this._gslbSiteMax;
  }

  // gslb_site_min_guarantee - computed: false, optional: true, required: false
  private _gslbSiteMinGuarantee?: number; 
  public get gslbSiteMinGuarantee() {
    return this.getNumberAttribute('gslb_site_min_guarantee');
  }
  public set gslbSiteMinGuarantee(value: number) {
    this._gslbSiteMinGuarantee = value;
  }
  public resetGslbSiteMinGuarantee() {
    this._gslbSiteMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSiteMinGuaranteeInput() {
    return this._gslbSiteMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateAppResourcesGslbSvcGroupCfgA {
  /**
  * Enter the number of gslb-svc-group allowed (gslb-svc-group count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_svc_group_max SystemResourceAccountingTemplateAppResourcesA#gslb_svc_group_max}
  */
  readonly gslbSvcGroupMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_svc_group_min_guarantee SystemResourceAccountingTemplateAppResourcesA#gslb_svc_group_min_guarantee}
  */
  readonly gslbSvcGroupMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesGslbSvcGroupCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbSvcGroupCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesGslbSvcGroupCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_svc_group_max: cdktf.numberToTerraform(struct!.gslbSvcGroupMax),
    gslb_svc_group_min_guarantee: cdktf.numberToTerraform(struct!.gslbSvcGroupMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesGslbSvcGroupCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbSvcGroupCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesGslbSvcGroupCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_svc_group_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbSvcGroupMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_svc_group_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbSvcGroupMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesGslbSvcGroupCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesGslbSvcGroupCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbSvcGroupMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbSvcGroupMax = this._gslbSvcGroupMax;
    }
    if (this._gslbSvcGroupMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbSvcGroupMinGuarantee = this._gslbSvcGroupMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesGslbSvcGroupCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbSvcGroupMax = undefined;
      this._gslbSvcGroupMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbSvcGroupMax = value.gslbSvcGroupMax;
      this._gslbSvcGroupMinGuarantee = value.gslbSvcGroupMinGuarantee;
    }
  }

  // gslb_svc_group_max - computed: false, optional: true, required: false
  private _gslbSvcGroupMax?: number; 
  public get gslbSvcGroupMax() {
    return this.getNumberAttribute('gslb_svc_group_max');
  }
  public set gslbSvcGroupMax(value: number) {
    this._gslbSvcGroupMax = value;
  }
  public resetGslbSvcGroupMax() {
    this._gslbSvcGroupMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSvcGroupMaxInput() {
    return this._gslbSvcGroupMax;
  }

  // gslb_svc_group_min_guarantee - computed: false, optional: true, required: false
  private _gslbSvcGroupMinGuarantee?: number; 
  public get gslbSvcGroupMinGuarantee() {
    return this.getNumberAttribute('gslb_svc_group_min_guarantee');
  }
  public set gslbSvcGroupMinGuarantee(value: number) {
    this._gslbSvcGroupMinGuarantee = value;
  }
  public resetGslbSvcGroupMinGuarantee() {
    this._gslbSvcGroupMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSvcGroupMinGuaranteeInput() {
    return this._gslbSvcGroupMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateAppResourcesGslbTemplateCfgA {
  /**
  * Enter the number of gslb-template allowed (gslb-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_template_max SystemResourceAccountingTemplateAppResourcesA#gslb_template_max}
  */
  readonly gslbTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_template_min_guarantee SystemResourceAccountingTemplateAppResourcesA#gslb_template_min_guarantee}
  */
  readonly gslbTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesGslbTemplateCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbTemplateCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesGslbTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_template_max: cdktf.numberToTerraform(struct!.gslbTemplateMax),
    gslb_template_min_guarantee: cdktf.numberToTerraform(struct!.gslbTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesGslbTemplateCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbTemplateCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesGslbTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_template_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesGslbTemplateCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesGslbTemplateCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbTemplateMax = this._gslbTemplateMax;
    }
    if (this._gslbTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbTemplateMinGuarantee = this._gslbTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesGslbTemplateCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbTemplateMax = undefined;
      this._gslbTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbTemplateMax = value.gslbTemplateMax;
      this._gslbTemplateMinGuarantee = value.gslbTemplateMinGuarantee;
    }
  }

  // gslb_template_max - computed: false, optional: true, required: false
  private _gslbTemplateMax?: number; 
  public get gslbTemplateMax() {
    return this.getNumberAttribute('gslb_template_max');
  }
  public set gslbTemplateMax(value: number) {
    this._gslbTemplateMax = value;
  }
  public resetGslbTemplateMax() {
    this._gslbTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbTemplateMaxInput() {
    return this._gslbTemplateMax;
  }

  // gslb_template_min_guarantee - computed: false, optional: true, required: false
  private _gslbTemplateMinGuarantee?: number; 
  public get gslbTemplateMinGuarantee() {
    return this.getNumberAttribute('gslb_template_min_guarantee');
  }
  public set gslbTemplateMinGuarantee(value: number) {
    this._gslbTemplateMinGuarantee = value;
  }
  public resetGslbTemplateMinGuarantee() {
    this._gslbTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbTemplateMinGuaranteeInput() {
    return this._gslbTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateAppResourcesGslbZoneCfgA {
  /**
  * Enter the number of gslb-zone allowed (gslb-zone count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_zone_max SystemResourceAccountingTemplateAppResourcesA#gslb_zone_max}
  */
  readonly gslbZoneMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#gslb_zone_min_guarantee SystemResourceAccountingTemplateAppResourcesA#gslb_zone_min_guarantee}
  */
  readonly gslbZoneMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesGslbZoneCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbZoneCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesGslbZoneCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_zone_max: cdktf.numberToTerraform(struct!.gslbZoneMax),
    gslb_zone_min_guarantee: cdktf.numberToTerraform(struct!.gslbZoneMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesGslbZoneCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesGslbZoneCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesGslbZoneCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_zone_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbZoneMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_zone_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbZoneMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesGslbZoneCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesGslbZoneCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbZoneMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbZoneMax = this._gslbZoneMax;
    }
    if (this._gslbZoneMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbZoneMinGuarantee = this._gslbZoneMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesGslbZoneCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbZoneMax = undefined;
      this._gslbZoneMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbZoneMax = value.gslbZoneMax;
      this._gslbZoneMinGuarantee = value.gslbZoneMinGuarantee;
    }
  }

  // gslb_zone_max - computed: false, optional: true, required: false
  private _gslbZoneMax?: number; 
  public get gslbZoneMax() {
    return this.getNumberAttribute('gslb_zone_max');
  }
  public set gslbZoneMax(value: number) {
    this._gslbZoneMax = value;
  }
  public resetGslbZoneMax() {
    this._gslbZoneMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbZoneMaxInput() {
    return this._gslbZoneMax;
  }

  // gslb_zone_min_guarantee - computed: false, optional: true, required: false
  private _gslbZoneMinGuarantee?: number; 
  public get gslbZoneMinGuarantee() {
    return this.getNumberAttribute('gslb_zone_min_guarantee');
  }
  public set gslbZoneMinGuarantee(value: number) {
    this._gslbZoneMinGuarantee = value;
  }
  public resetGslbZoneMinGuarantee() {
    this._gslbZoneMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbZoneMinGuaranteeInput() {
    return this._gslbZoneMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateAppResourcesHealthMonitorCfgA {
  /**
  * Enter the number of health monitors allowed (health-monitor count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#health_monitor_max SystemResourceAccountingTemplateAppResourcesA#health_monitor_max}
  */
  readonly healthMonitorMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#health_monitor_min_guarantee SystemResourceAccountingTemplateAppResourcesA#health_monitor_min_guarantee}
  */
  readonly healthMonitorMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesHealthMonitorCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesHealthMonitorCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesHealthMonitorCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_monitor_max: cdktf.numberToTerraform(struct!.healthMonitorMax),
    health_monitor_min_guarantee: cdktf.numberToTerraform(struct!.healthMonitorMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesHealthMonitorCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesHealthMonitorCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesHealthMonitorCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_monitor_max: {
      value: cdktf.numberToHclTerraform(struct!.healthMonitorMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_monitor_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.healthMonitorMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesHealthMonitorCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesHealthMonitorCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthMonitorMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthMonitorMax = this._healthMonitorMax;
    }
    if (this._healthMonitorMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthMonitorMinGuarantee = this._healthMonitorMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesHealthMonitorCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthMonitorMax = undefined;
      this._healthMonitorMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthMonitorMax = value.healthMonitorMax;
      this._healthMonitorMinGuarantee = value.healthMonitorMinGuarantee;
    }
  }

  // health_monitor_max - computed: false, optional: true, required: false
  private _healthMonitorMax?: number; 
  public get healthMonitorMax() {
    return this.getNumberAttribute('health_monitor_max');
  }
  public set healthMonitorMax(value: number) {
    this._healthMonitorMax = value;
  }
  public resetHealthMonitorMax() {
    this._healthMonitorMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitorMaxInput() {
    return this._healthMonitorMax;
  }

  // health_monitor_min_guarantee - computed: false, optional: true, required: false
  private _healthMonitorMinGuarantee?: number; 
  public get healthMonitorMinGuarantee() {
    return this.getNumberAttribute('health_monitor_min_guarantee');
  }
  public set healthMonitorMinGuarantee(value: number) {
    this._healthMonitorMinGuarantee = value;
  }
  public resetHealthMonitorMinGuarantee() {
    this._healthMonitorMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitorMinGuaranteeInput() {
    return this._healthMonitorMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateAppResourcesHttpTemplateCfgA {
  /**
  * Enter the number of http-template allowed (http-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#http_template_max SystemResourceAccountingTemplateAppResourcesA#http_template_max}
  */
  readonly httpTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#http_template_min_guarantee SystemResourceAccountingTemplateAppResourcesA#http_template_min_guarantee}
  */
  readonly httpTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesHttpTemplateCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesHttpTemplateCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesHttpTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_template_max: cdktf.numberToTerraform(struct!.httpTemplateMax),
    http_template_min_guarantee: cdktf.numberToTerraform(struct!.httpTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesHttpTemplateCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesHttpTemplateCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesHttpTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_template_max: {
      value: cdktf.numberToHclTerraform(struct!.httpTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.httpTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesHttpTemplateCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesHttpTemplateCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpTemplateMax = this._httpTemplateMax;
    }
    if (this._httpTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpTemplateMinGuarantee = this._httpTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesHttpTemplateCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpTemplateMax = undefined;
      this._httpTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpTemplateMax = value.httpTemplateMax;
      this._httpTemplateMinGuarantee = value.httpTemplateMinGuarantee;
    }
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

  // http_template_min_guarantee - computed: false, optional: true, required: false
  private _httpTemplateMinGuarantee?: number; 
  public get httpTemplateMinGuarantee() {
    return this.getNumberAttribute('http_template_min_guarantee');
  }
  public set httpTemplateMinGuarantee(value: number) {
    this._httpTemplateMinGuarantee = value;
  }
  public resetHttpTemplateMinGuarantee() {
    this._httpTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTemplateMinGuaranteeInput() {
    return this._httpTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateAppResourcesLinkCostTemplateCfgA {
  /**
  * Enter the number of link-cost-template allowed (link-cost-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#link_cost_template_max SystemResourceAccountingTemplateAppResourcesA#link_cost_template_max}
  */
  readonly linkCostTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#link_cost_template_min_guarantee SystemResourceAccountingTemplateAppResourcesA#link_cost_template_min_guarantee}
  */
  readonly linkCostTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesLinkCostTemplateCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesLinkCostTemplateCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesLinkCostTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    link_cost_template_max: cdktf.numberToTerraform(struct!.linkCostTemplateMax),
    link_cost_template_min_guarantee: cdktf.numberToTerraform(struct!.linkCostTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesLinkCostTemplateCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesLinkCostTemplateCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesLinkCostTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    link_cost_template_max: {
      value: cdktf.numberToHclTerraform(struct!.linkCostTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_cost_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.linkCostTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesLinkCostTemplateCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesLinkCostTemplateCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkCostTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkCostTemplateMax = this._linkCostTemplateMax;
    }
    if (this._linkCostTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkCostTemplateMinGuarantee = this._linkCostTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesLinkCostTemplateCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._linkCostTemplateMax = undefined;
      this._linkCostTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._linkCostTemplateMax = value.linkCostTemplateMax;
      this._linkCostTemplateMinGuarantee = value.linkCostTemplateMinGuarantee;
    }
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

  // link_cost_template_min_guarantee - computed: false, optional: true, required: false
  private _linkCostTemplateMinGuarantee?: number; 
  public get linkCostTemplateMinGuarantee() {
    return this.getNumberAttribute('link_cost_template_min_guarantee');
  }
  public set linkCostTemplateMinGuarantee(value: number) {
    this._linkCostTemplateMinGuarantee = value;
  }
  public resetLinkCostTemplateMinGuarantee() {
    this._linkCostTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkCostTemplateMinGuaranteeInput() {
    return this._linkCostTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateAppResourcesPbslbEntryCfgA {
  /**
  * Enter the number of pbslb-entry allowed (pbslb-entry count)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#pbslb_entry_max SystemResourceAccountingTemplateAppResourcesA#pbslb_entry_max}
  */
  readonly pbslbEntryMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#pbslb_entry_min_guarantee SystemResourceAccountingTemplateAppResourcesA#pbslb_entry_min_guarantee}
  */
  readonly pbslbEntryMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesPbslbEntryCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesPbslbEntryCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesPbslbEntryCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pbslb_entry_max: cdktf.numberToTerraform(struct!.pbslbEntryMax),
    pbslb_entry_min_guarantee: cdktf.numberToTerraform(struct!.pbslbEntryMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesPbslbEntryCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesPbslbEntryCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesPbslbEntryCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pbslb_entry_max: {
      value: cdktf.numberToHclTerraform(struct!.pbslbEntryMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pbslb_entry_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.pbslbEntryMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesPbslbEntryCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesPbslbEntryCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pbslbEntryMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbslbEntryMax = this._pbslbEntryMax;
    }
    if (this._pbslbEntryMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbslbEntryMinGuarantee = this._pbslbEntryMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesPbslbEntryCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pbslbEntryMax = undefined;
      this._pbslbEntryMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pbslbEntryMax = value.pbslbEntryMax;
      this._pbslbEntryMinGuarantee = value.pbslbEntryMinGuarantee;
    }
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

  // pbslb_entry_min_guarantee - computed: false, optional: true, required: false
  private _pbslbEntryMinGuarantee?: number; 
  public get pbslbEntryMinGuarantee() {
    return this.getNumberAttribute('pbslb_entry_min_guarantee');
  }
  public set pbslbEntryMinGuarantee(value: number) {
    this._pbslbEntryMinGuarantee = value;
  }
  public resetPbslbEntryMinGuarantee() {
    this._pbslbEntryMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbslbEntryMinGuaranteeInput() {
    return this._pbslbEntryMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfgA {
  /**
  * Enter the number of persist-cookie-template allowed (persist-cookie-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#persist_cookie_template_max SystemResourceAccountingTemplateAppResourcesA#persist_cookie_template_max}
  */
  readonly persistCookieTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#persist_cookie_template_min_guarantee SystemResourceAccountingTemplateAppResourcesA#persist_cookie_template_min_guarantee}
  */
  readonly persistCookieTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    persist_cookie_template_max: cdktf.numberToTerraform(struct!.persistCookieTemplateMax),
    persist_cookie_template_min_guarantee: cdktf.numberToTerraform(struct!.persistCookieTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    persist_cookie_template_max: {
      value: cdktf.numberToHclTerraform(struct!.persistCookieTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persist_cookie_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.persistCookieTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._persistCookieTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistCookieTemplateMax = this._persistCookieTemplateMax;
    }
    if (this._persistCookieTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistCookieTemplateMinGuarantee = this._persistCookieTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._persistCookieTemplateMax = undefined;
      this._persistCookieTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._persistCookieTemplateMax = value.persistCookieTemplateMax;
      this._persistCookieTemplateMinGuarantee = value.persistCookieTemplateMinGuarantee;
    }
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

  // persist_cookie_template_min_guarantee - computed: false, optional: true, required: false
  private _persistCookieTemplateMinGuarantee?: number; 
  public get persistCookieTemplateMinGuarantee() {
    return this.getNumberAttribute('persist_cookie_template_min_guarantee');
  }
  public set persistCookieTemplateMinGuarantee(value: number) {
    this._persistCookieTemplateMinGuarantee = value;
  }
  public resetPersistCookieTemplateMinGuarantee() {
    this._persistCookieTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistCookieTemplateMinGuaranteeInput() {
    return this._persistCookieTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfgA {
  /**
  * Enter the number of persist-srcip-template allowed (persist-source-ip-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#persist_srcip_template_max SystemResourceAccountingTemplateAppResourcesA#persist_srcip_template_max}
  */
  readonly persistSrcipTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#persist_srcip_template_min_guarantee SystemResourceAccountingTemplateAppResourcesA#persist_srcip_template_min_guarantee}
  */
  readonly persistSrcipTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    persist_srcip_template_max: cdktf.numberToTerraform(struct!.persistSrcipTemplateMax),
    persist_srcip_template_min_guarantee: cdktf.numberToTerraform(struct!.persistSrcipTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    persist_srcip_template_max: {
      value: cdktf.numberToHclTerraform(struct!.persistSrcipTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persist_srcip_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.persistSrcipTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._persistSrcipTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistSrcipTemplateMax = this._persistSrcipTemplateMax;
    }
    if (this._persistSrcipTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistSrcipTemplateMinGuarantee = this._persistSrcipTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._persistSrcipTemplateMax = undefined;
      this._persistSrcipTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._persistSrcipTemplateMax = value.persistSrcipTemplateMax;
      this._persistSrcipTemplateMinGuarantee = value.persistSrcipTemplateMinGuarantee;
    }
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

  // persist_srcip_template_min_guarantee - computed: false, optional: true, required: false
  private _persistSrcipTemplateMinGuarantee?: number; 
  public get persistSrcipTemplateMinGuarantee() {
    return this.getNumberAttribute('persist_srcip_template_min_guarantee');
  }
  public set persistSrcipTemplateMinGuarantee(value: number) {
    this._persistSrcipTemplateMinGuarantee = value;
  }
  public resetPersistSrcipTemplateMinGuarantee() {
    this._persistSrcipTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistSrcipTemplateMinGuaranteeInput() {
    return this._persistSrcipTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateAppResourcesProxyTemplateCfgA {
  /**
  * Enter the number of proxy-template allowed (server-ssl-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#proxy_template_max SystemResourceAccountingTemplateAppResourcesA#proxy_template_max}
  */
  readonly proxyTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#proxy_template_min_guarantee SystemResourceAccountingTemplateAppResourcesA#proxy_template_min_guarantee}
  */
  readonly proxyTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesProxyTemplateCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesProxyTemplateCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesProxyTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proxy_template_max: cdktf.numberToTerraform(struct!.proxyTemplateMax),
    proxy_template_min_guarantee: cdktf.numberToTerraform(struct!.proxyTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesProxyTemplateCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesProxyTemplateCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesProxyTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proxy_template_max: {
      value: cdktf.numberToHclTerraform(struct!.proxyTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.proxyTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesProxyTemplateCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesProxyTemplateCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proxyTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyTemplateMax = this._proxyTemplateMax;
    }
    if (this._proxyTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyTemplateMinGuarantee = this._proxyTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesProxyTemplateCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._proxyTemplateMax = undefined;
      this._proxyTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._proxyTemplateMax = value.proxyTemplateMax;
      this._proxyTemplateMinGuarantee = value.proxyTemplateMinGuarantee;
    }
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

  // proxy_template_min_guarantee - computed: false, optional: true, required: false
  private _proxyTemplateMinGuarantee?: number; 
  public get proxyTemplateMinGuarantee() {
    return this.getNumberAttribute('proxy_template_min_guarantee');
  }
  public set proxyTemplateMinGuarantee(value: number) {
    this._proxyTemplateMinGuarantee = value;
  }
  public resetProxyTemplateMinGuarantee() {
    this._proxyTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTemplateMinGuaranteeInput() {
    return this._proxyTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateAppResourcesRealPortCfgA {
  /**
  * Enter the number of real-ports allowed (real-port count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#real_port_max SystemResourceAccountingTemplateAppResourcesA#real_port_max}
  */
  readonly realPortMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#real_port_min_guarantee SystemResourceAccountingTemplateAppResourcesA#real_port_min_guarantee}
  */
  readonly realPortMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesRealPortCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesRealPortCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesRealPortCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    real_port_max: cdktf.numberToTerraform(struct!.realPortMax),
    real_port_min_guarantee: cdktf.numberToTerraform(struct!.realPortMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesRealPortCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesRealPortCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesRealPortCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    real_port_max: {
      value: cdktf.numberToHclTerraform(struct!.realPortMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    real_port_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.realPortMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesRealPortCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesRealPortCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._realPortMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.realPortMax = this._realPortMax;
    }
    if (this._realPortMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.realPortMinGuarantee = this._realPortMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesRealPortCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._realPortMax = undefined;
      this._realPortMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._realPortMax = value.realPortMax;
      this._realPortMinGuarantee = value.realPortMinGuarantee;
    }
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

  // real_port_min_guarantee - computed: false, optional: true, required: false
  private _realPortMinGuarantee?: number; 
  public get realPortMinGuarantee() {
    return this.getNumberAttribute('real_port_min_guarantee');
  }
  public set realPortMinGuarantee(value: number) {
    this._realPortMinGuarantee = value;
  }
  public resetRealPortMinGuarantee() {
    this._realPortMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realPortMinGuaranteeInput() {
    return this._realPortMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateAppResourcesRealServerCfgA {
  /**
  * Enter the number of real-servers allowed (real-server count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#real_server_max SystemResourceAccountingTemplateAppResourcesA#real_server_max}
  */
  readonly realServerMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#real_server_min_guarantee SystemResourceAccountingTemplateAppResourcesA#real_server_min_guarantee}
  */
  readonly realServerMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesRealServerCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesRealServerCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesRealServerCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    real_server_max: cdktf.numberToTerraform(struct!.realServerMax),
    real_server_min_guarantee: cdktf.numberToTerraform(struct!.realServerMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesRealServerCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesRealServerCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesRealServerCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    real_server_max: {
      value: cdktf.numberToHclTerraform(struct!.realServerMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    real_server_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.realServerMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesRealServerCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesRealServerCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._realServerMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.realServerMax = this._realServerMax;
    }
    if (this._realServerMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.realServerMinGuarantee = this._realServerMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesRealServerCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._realServerMax = undefined;
      this._realServerMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._realServerMax = value.realServerMax;
      this._realServerMinGuarantee = value.realServerMinGuarantee;
    }
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

  // real_server_min_guarantee - computed: false, optional: true, required: false
  private _realServerMinGuarantee?: number; 
  public get realServerMinGuarantee() {
    return this.getNumberAttribute('real_server_min_guarantee');
  }
  public set realServerMinGuarantee(value: number) {
    this._realServerMinGuarantee = value;
  }
  public resetRealServerMinGuarantee() {
    this._realServerMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realServerMinGuaranteeInput() {
    return this._realServerMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateAppResourcesServerSslTemplateCfgA {
  /**
  * Enter the number of server-ssl-template allowed (server-ssl-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#server_ssl_template_max SystemResourceAccountingTemplateAppResourcesA#server_ssl_template_max}
  */
  readonly serverSslTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#server_ssl_template_min_guarantee SystemResourceAccountingTemplateAppResourcesA#server_ssl_template_min_guarantee}
  */
  readonly serverSslTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesServerSslTemplateCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesServerSslTemplateCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesServerSslTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_ssl_template_max: cdktf.numberToTerraform(struct!.serverSslTemplateMax),
    server_ssl_template_min_guarantee: cdktf.numberToTerraform(struct!.serverSslTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesServerSslTemplateCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesServerSslTemplateCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesServerSslTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_ssl_template_max: {
      value: cdktf.numberToHclTerraform(struct!.serverSslTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_ssl_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.serverSslTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesServerSslTemplateCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesServerSslTemplateCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverSslTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSslTemplateMax = this._serverSslTemplateMax;
    }
    if (this._serverSslTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSslTemplateMinGuarantee = this._serverSslTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesServerSslTemplateCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serverSslTemplateMax = undefined;
      this._serverSslTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serverSslTemplateMax = value.serverSslTemplateMax;
      this._serverSslTemplateMinGuarantee = value.serverSslTemplateMinGuarantee;
    }
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

  // server_ssl_template_min_guarantee - computed: false, optional: true, required: false
  private _serverSslTemplateMinGuarantee?: number; 
  public get serverSslTemplateMinGuarantee() {
    return this.getNumberAttribute('server_ssl_template_min_guarantee');
  }
  public set serverSslTemplateMinGuarantee(value: number) {
    this._serverSslTemplateMinGuarantee = value;
  }
  public resetServerSslTemplateMinGuarantee() {
    this._serverSslTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSslTemplateMinGuaranteeInput() {
    return this._serverSslTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateAppResourcesServiceGroupCfgA {
  /**
  * Enter the number of service groups allowed (service-group count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#service_group_max SystemResourceAccountingTemplateAppResourcesA#service_group_max}
  */
  readonly serviceGroupMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#service_group_min_guarantee SystemResourceAccountingTemplateAppResourcesA#service_group_min_guarantee}
  */
  readonly serviceGroupMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesServiceGroupCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesServiceGroupCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesServiceGroupCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_group_max: cdktf.numberToTerraform(struct!.serviceGroupMax),
    service_group_min_guarantee: cdktf.numberToTerraform(struct!.serviceGroupMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesServiceGroupCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesServiceGroupCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesServiceGroupCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_group_max: {
      value: cdktf.numberToHclTerraform(struct!.serviceGroupMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_group_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.serviceGroupMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesServiceGroupCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesServiceGroupCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceGroupMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroupMax = this._serviceGroupMax;
    }
    if (this._serviceGroupMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroupMinGuarantee = this._serviceGroupMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesServiceGroupCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceGroupMax = undefined;
      this._serviceGroupMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceGroupMax = value.serviceGroupMax;
      this._serviceGroupMinGuarantee = value.serviceGroupMinGuarantee;
    }
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

  // service_group_min_guarantee - computed: false, optional: true, required: false
  private _serviceGroupMinGuarantee?: number; 
  public get serviceGroupMinGuarantee() {
    return this.getNumberAttribute('service_group_min_guarantee');
  }
  public set serviceGroupMinGuarantee(value: number) {
    this._serviceGroupMinGuarantee = value;
  }
  public resetServiceGroupMinGuarantee() {
    this._serviceGroupMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupMinGuaranteeInput() {
    return this._serviceGroupMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateAppResourcesStreamTemplateCfgA {
  /**
  * Enter the number of stream-template allowed (server-ssl-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#stream_template_max SystemResourceAccountingTemplateAppResourcesA#stream_template_max}
  */
  readonly streamTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#stream_template_min_guarantee SystemResourceAccountingTemplateAppResourcesA#stream_template_min_guarantee}
  */
  readonly streamTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesStreamTemplateCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesStreamTemplateCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesStreamTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stream_template_max: cdktf.numberToTerraform(struct!.streamTemplateMax),
    stream_template_min_guarantee: cdktf.numberToTerraform(struct!.streamTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesStreamTemplateCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesStreamTemplateCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesStreamTemplateCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stream_template_max: {
      value: cdktf.numberToHclTerraform(struct!.streamTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.streamTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesStreamTemplateCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesStreamTemplateCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._streamTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamTemplateMax = this._streamTemplateMax;
    }
    if (this._streamTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamTemplateMinGuarantee = this._streamTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesStreamTemplateCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._streamTemplateMax = undefined;
      this._streamTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._streamTemplateMax = value.streamTemplateMax;
      this._streamTemplateMinGuarantee = value.streamTemplateMinGuarantee;
    }
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

  // stream_template_min_guarantee - computed: false, optional: true, required: false
  private _streamTemplateMinGuarantee?: number; 
  public get streamTemplateMinGuarantee() {
    return this.getNumberAttribute('stream_template_min_guarantee');
  }
  public set streamTemplateMinGuarantee(value: number) {
    this._streamTemplateMinGuarantee = value;
  }
  public resetStreamTemplateMinGuarantee() {
    this._streamTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamTemplateMinGuaranteeInput() {
    return this._streamTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateAppResourcesVirtualPortCfgA {
  /**
  * Enter the number of virtual-port allowed (virtual-port count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#virtual_port_max SystemResourceAccountingTemplateAppResourcesA#virtual_port_max}
  */
  readonly virtualPortMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#virtual_port_min_guarantee SystemResourceAccountingTemplateAppResourcesA#virtual_port_min_guarantee}
  */
  readonly virtualPortMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesVirtualPortCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesVirtualPortCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesVirtualPortCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_port_max: cdktf.numberToTerraform(struct!.virtualPortMax),
    virtual_port_min_guarantee: cdktf.numberToTerraform(struct!.virtualPortMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesVirtualPortCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesVirtualPortCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesVirtualPortCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_port_max: {
      value: cdktf.numberToHclTerraform(struct!.virtualPortMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_port_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.virtualPortMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesVirtualPortCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesVirtualPortCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualPortMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualPortMax = this._virtualPortMax;
    }
    if (this._virtualPortMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualPortMinGuarantee = this._virtualPortMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesVirtualPortCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._virtualPortMax = undefined;
      this._virtualPortMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._virtualPortMax = value.virtualPortMax;
      this._virtualPortMinGuarantee = value.virtualPortMinGuarantee;
    }
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

  // virtual_port_min_guarantee - computed: false, optional: true, required: false
  private _virtualPortMinGuarantee?: number; 
  public get virtualPortMinGuarantee() {
    return this.getNumberAttribute('virtual_port_min_guarantee');
  }
  public set virtualPortMinGuarantee(value: number) {
    this._virtualPortMinGuarantee = value;
  }
  public resetVirtualPortMinGuarantee() {
    this._virtualPortMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPortMinGuaranteeInput() {
    return this._virtualPortMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateAppResourcesVirtualServerCfgA {
  /**
  * Enter the number of virtual-servers allowed (virtual-server count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#virtual_server_max SystemResourceAccountingTemplateAppResourcesA#virtual_server_max}
  */
  readonly virtualServerMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#virtual_server_min_guarantee SystemResourceAccountingTemplateAppResourcesA#virtual_server_min_guarantee}
  */
  readonly virtualServerMinGuarantee?: number;
}

export function systemResourceAccountingTemplateAppResourcesVirtualServerCfgAToTerraform(struct?: SystemResourceAccountingTemplateAppResourcesVirtualServerCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesVirtualServerCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_server_max: cdktf.numberToTerraform(struct!.virtualServerMax),
    virtual_server_min_guarantee: cdktf.numberToTerraform(struct!.virtualServerMinGuarantee),
  }
}


export function systemResourceAccountingTemplateAppResourcesVirtualServerCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateAppResourcesVirtualServerCfgAOutputReference | SystemResourceAccountingTemplateAppResourcesVirtualServerCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_server_max: {
      value: cdktf.numberToHclTerraform(struct!.virtualServerMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_server_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.virtualServerMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateAppResourcesVirtualServerCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateAppResourcesVirtualServerCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualServerMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServerMax = this._virtualServerMax;
    }
    if (this._virtualServerMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServerMinGuarantee = this._virtualServerMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateAppResourcesVirtualServerCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._virtualServerMax = undefined;
      this._virtualServerMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._virtualServerMax = value.virtualServerMax;
      this._virtualServerMinGuarantee = value.virtualServerMinGuarantee;
    }
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

  // virtual_server_min_guarantee - computed: false, optional: true, required: false
  private _virtualServerMinGuarantee?: number; 
  public get virtualServerMinGuarantee() {
    return this.getNumberAttribute('virtual_server_min_guarantee');
  }
  public set virtualServerMinGuarantee(value: number) {
    this._virtualServerMinGuarantee = value;
  }
  public resetVirtualServerMinGuarantee() {
    this._virtualServerMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerMinGuaranteeInput() {
    return this._virtualServerMinGuarantee;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources thunder_system_resource_accounting_template_app_resources}
*/
export class SystemResourceAccountingTemplateAppResourcesA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_resource_accounting_template_app_resources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemResourceAccountingTemplateAppResourcesA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemResourceAccountingTemplateAppResourcesA to import
  * @param importFromId The id of the existing SystemResourceAccountingTemplateAppResourcesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemResourceAccountingTemplateAppResourcesA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_resource_accounting_template_app_resources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_app_resources thunder_system_resource_accounting_template_app_resources} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemResourceAccountingTemplateAppResourcesAConfig
  */
  public constructor(scope: Construct, id: string, config: SystemResourceAccountingTemplateAppResourcesAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_resource_accounting_template_app_resources',
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
    this._templateName = config.templateName;
    this._threshold = config.threshold;
    this._uuid = config.uuid;
    this._cacheTemplateCfg.internalValue = config.cacheTemplateCfg;
    this._clientSslTemplateCfg.internalValue = config.clientSslTemplateCfg;
    this._connReuseTemplateCfg.internalValue = config.connReuseTemplateCfg;
    this._fastTcpTemplateCfg.internalValue = config.fastTcpTemplateCfg;
    this._fastUdpTemplateCfg.internalValue = config.fastUdpTemplateCfg;
    this._fixTemplateCfg.internalValue = config.fixTemplateCfg;
    this._gslbDeviceCfg.internalValue = config.gslbDeviceCfg;
    this._gslbGeoLocationCfg.internalValue = config.gslbGeoLocationCfg;
    this._gslbIpListCfg.internalValue = config.gslbIpListCfg;
    this._gslbPolicyCfg.internalValue = config.gslbPolicyCfg;
    this._gslbServiceCfg.internalValue = config.gslbServiceCfg;
    this._gslbServiceIpCfg.internalValue = config.gslbServiceIpCfg;
    this._gslbServicePortCfg.internalValue = config.gslbServicePortCfg;
    this._gslbSiteCfg.internalValue = config.gslbSiteCfg;
    this._gslbSvcGroupCfg.internalValue = config.gslbSvcGroupCfg;
    this._gslbTemplateCfg.internalValue = config.gslbTemplateCfg;
    this._gslbZoneCfg.internalValue = config.gslbZoneCfg;
    this._healthMonitorCfg.internalValue = config.healthMonitorCfg;
    this._httpTemplateCfg.internalValue = config.httpTemplateCfg;
    this._linkCostTemplateCfg.internalValue = config.linkCostTemplateCfg;
    this._pbslbEntryCfg.internalValue = config.pbslbEntryCfg;
    this._persistCookieTemplateCfg.internalValue = config.persistCookieTemplateCfg;
    this._persistSrcipTemplateCfg.internalValue = config.persistSrcipTemplateCfg;
    this._proxyTemplateCfg.internalValue = config.proxyTemplateCfg;
    this._realPortCfg.internalValue = config.realPortCfg;
    this._realServerCfg.internalValue = config.realServerCfg;
    this._serverSslTemplateCfg.internalValue = config.serverSslTemplateCfg;
    this._serviceGroupCfg.internalValue = config.serviceGroupCfg;
    this._streamTemplateCfg.internalValue = config.streamTemplateCfg;
    this._virtualPortCfg.internalValue = config.virtualPortCfg;
    this._virtualServerCfg.internalValue = config.virtualServerCfg;
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

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
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

  // cache_template_cfg - computed: false, optional: true, required: false
  private _cacheTemplateCfg = new SystemResourceAccountingTemplateAppResourcesCacheTemplateCfgAOutputReference(this, "cache_template_cfg");
  public get cacheTemplateCfg() {
    return this._cacheTemplateCfg;
  }
  public putCacheTemplateCfg(value: SystemResourceAccountingTemplateAppResourcesCacheTemplateCfgA) {
    this._cacheTemplateCfg.internalValue = value;
  }
  public resetCacheTemplateCfg() {
    this._cacheTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTemplateCfgInput() {
    return this._cacheTemplateCfg.internalValue;
  }

  // client_ssl_template_cfg - computed: false, optional: true, required: false
  private _clientSslTemplateCfg = new SystemResourceAccountingTemplateAppResourcesClientSslTemplateCfgAOutputReference(this, "client_ssl_template_cfg");
  public get clientSslTemplateCfg() {
    return this._clientSslTemplateCfg;
  }
  public putClientSslTemplateCfg(value: SystemResourceAccountingTemplateAppResourcesClientSslTemplateCfgA) {
    this._clientSslTemplateCfg.internalValue = value;
  }
  public resetClientSslTemplateCfg() {
    this._clientSslTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSslTemplateCfgInput() {
    return this._clientSslTemplateCfg.internalValue;
  }

  // conn_reuse_template_cfg - computed: false, optional: true, required: false
  private _connReuseTemplateCfg = new SystemResourceAccountingTemplateAppResourcesConnReuseTemplateCfgAOutputReference(this, "conn_reuse_template_cfg");
  public get connReuseTemplateCfg() {
    return this._connReuseTemplateCfg;
  }
  public putConnReuseTemplateCfg(value: SystemResourceAccountingTemplateAppResourcesConnReuseTemplateCfgA) {
    this._connReuseTemplateCfg.internalValue = value;
  }
  public resetConnReuseTemplateCfg() {
    this._connReuseTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connReuseTemplateCfgInput() {
    return this._connReuseTemplateCfg.internalValue;
  }

  // fast_tcp_template_cfg - computed: false, optional: true, required: false
  private _fastTcpTemplateCfg = new SystemResourceAccountingTemplateAppResourcesFastTcpTemplateCfgAOutputReference(this, "fast_tcp_template_cfg");
  public get fastTcpTemplateCfg() {
    return this._fastTcpTemplateCfg;
  }
  public putFastTcpTemplateCfg(value: SystemResourceAccountingTemplateAppResourcesFastTcpTemplateCfgA) {
    this._fastTcpTemplateCfg.internalValue = value;
  }
  public resetFastTcpTemplateCfg() {
    this._fastTcpTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastTcpTemplateCfgInput() {
    return this._fastTcpTemplateCfg.internalValue;
  }

  // fast_udp_template_cfg - computed: false, optional: true, required: false
  private _fastUdpTemplateCfg = new SystemResourceAccountingTemplateAppResourcesFastUdpTemplateCfgAOutputReference(this, "fast_udp_template_cfg");
  public get fastUdpTemplateCfg() {
    return this._fastUdpTemplateCfg;
  }
  public putFastUdpTemplateCfg(value: SystemResourceAccountingTemplateAppResourcesFastUdpTemplateCfgA) {
    this._fastUdpTemplateCfg.internalValue = value;
  }
  public resetFastUdpTemplateCfg() {
    this._fastUdpTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastUdpTemplateCfgInput() {
    return this._fastUdpTemplateCfg.internalValue;
  }

  // fix_template_cfg - computed: false, optional: true, required: false
  private _fixTemplateCfg = new SystemResourceAccountingTemplateAppResourcesFixTemplateCfgAOutputReference(this, "fix_template_cfg");
  public get fixTemplateCfg() {
    return this._fixTemplateCfg;
  }
  public putFixTemplateCfg(value: SystemResourceAccountingTemplateAppResourcesFixTemplateCfgA) {
    this._fixTemplateCfg.internalValue = value;
  }
  public resetFixTemplateCfg() {
    this._fixTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixTemplateCfgInput() {
    return this._fixTemplateCfg.internalValue;
  }

  // gslb_device_cfg - computed: false, optional: true, required: false
  private _gslbDeviceCfg = new SystemResourceAccountingTemplateAppResourcesGslbDeviceCfgAOutputReference(this, "gslb_device_cfg");
  public get gslbDeviceCfg() {
    return this._gslbDeviceCfg;
  }
  public putGslbDeviceCfg(value: SystemResourceAccountingTemplateAppResourcesGslbDeviceCfgA) {
    this._gslbDeviceCfg.internalValue = value;
  }
  public resetGslbDeviceCfg() {
    this._gslbDeviceCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbDeviceCfgInput() {
    return this._gslbDeviceCfg.internalValue;
  }

  // gslb_geo_location_cfg - computed: false, optional: true, required: false
  private _gslbGeoLocationCfg = new SystemResourceAccountingTemplateAppResourcesGslbGeoLocationCfgAOutputReference(this, "gslb_geo_location_cfg");
  public get gslbGeoLocationCfg() {
    return this._gslbGeoLocationCfg;
  }
  public putGslbGeoLocationCfg(value: SystemResourceAccountingTemplateAppResourcesGslbGeoLocationCfgA) {
    this._gslbGeoLocationCfg.internalValue = value;
  }
  public resetGslbGeoLocationCfg() {
    this._gslbGeoLocationCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbGeoLocationCfgInput() {
    return this._gslbGeoLocationCfg.internalValue;
  }

  // gslb_ip_list_cfg - computed: false, optional: true, required: false
  private _gslbIpListCfg = new SystemResourceAccountingTemplateAppResourcesGslbIpListCfgAOutputReference(this, "gslb_ip_list_cfg");
  public get gslbIpListCfg() {
    return this._gslbIpListCfg;
  }
  public putGslbIpListCfg(value: SystemResourceAccountingTemplateAppResourcesGslbIpListCfgA) {
    this._gslbIpListCfg.internalValue = value;
  }
  public resetGslbIpListCfg() {
    this._gslbIpListCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbIpListCfgInput() {
    return this._gslbIpListCfg.internalValue;
  }

  // gslb_policy_cfg - computed: false, optional: true, required: false
  private _gslbPolicyCfg = new SystemResourceAccountingTemplateAppResourcesGslbPolicyCfgAOutputReference(this, "gslb_policy_cfg");
  public get gslbPolicyCfg() {
    return this._gslbPolicyCfg;
  }
  public putGslbPolicyCfg(value: SystemResourceAccountingTemplateAppResourcesGslbPolicyCfgA) {
    this._gslbPolicyCfg.internalValue = value;
  }
  public resetGslbPolicyCfg() {
    this._gslbPolicyCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbPolicyCfgInput() {
    return this._gslbPolicyCfg.internalValue;
  }

  // gslb_service_cfg - computed: false, optional: true, required: false
  private _gslbServiceCfg = new SystemResourceAccountingTemplateAppResourcesGslbServiceCfgAOutputReference(this, "gslb_service_cfg");
  public get gslbServiceCfg() {
    return this._gslbServiceCfg;
  }
  public putGslbServiceCfg(value: SystemResourceAccountingTemplateAppResourcesGslbServiceCfgA) {
    this._gslbServiceCfg.internalValue = value;
  }
  public resetGslbServiceCfg() {
    this._gslbServiceCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServiceCfgInput() {
    return this._gslbServiceCfg.internalValue;
  }

  // gslb_service_ip_cfg - computed: false, optional: true, required: false
  private _gslbServiceIpCfg = new SystemResourceAccountingTemplateAppResourcesGslbServiceIpCfgAOutputReference(this, "gslb_service_ip_cfg");
  public get gslbServiceIpCfg() {
    return this._gslbServiceIpCfg;
  }
  public putGslbServiceIpCfg(value: SystemResourceAccountingTemplateAppResourcesGslbServiceIpCfgA) {
    this._gslbServiceIpCfg.internalValue = value;
  }
  public resetGslbServiceIpCfg() {
    this._gslbServiceIpCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServiceIpCfgInput() {
    return this._gslbServiceIpCfg.internalValue;
  }

  // gslb_service_port_cfg - computed: false, optional: true, required: false
  private _gslbServicePortCfg = new SystemResourceAccountingTemplateAppResourcesGslbServicePortCfgAOutputReference(this, "gslb_service_port_cfg");
  public get gslbServicePortCfg() {
    return this._gslbServicePortCfg;
  }
  public putGslbServicePortCfg(value: SystemResourceAccountingTemplateAppResourcesGslbServicePortCfgA) {
    this._gslbServicePortCfg.internalValue = value;
  }
  public resetGslbServicePortCfg() {
    this._gslbServicePortCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServicePortCfgInput() {
    return this._gslbServicePortCfg.internalValue;
  }

  // gslb_site_cfg - computed: false, optional: true, required: false
  private _gslbSiteCfg = new SystemResourceAccountingTemplateAppResourcesGslbSiteCfgAOutputReference(this, "gslb_site_cfg");
  public get gslbSiteCfg() {
    return this._gslbSiteCfg;
  }
  public putGslbSiteCfg(value: SystemResourceAccountingTemplateAppResourcesGslbSiteCfgA) {
    this._gslbSiteCfg.internalValue = value;
  }
  public resetGslbSiteCfg() {
    this._gslbSiteCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSiteCfgInput() {
    return this._gslbSiteCfg.internalValue;
  }

  // gslb_svc_group_cfg - computed: false, optional: true, required: false
  private _gslbSvcGroupCfg = new SystemResourceAccountingTemplateAppResourcesGslbSvcGroupCfgAOutputReference(this, "gslb_svc_group_cfg");
  public get gslbSvcGroupCfg() {
    return this._gslbSvcGroupCfg;
  }
  public putGslbSvcGroupCfg(value: SystemResourceAccountingTemplateAppResourcesGslbSvcGroupCfgA) {
    this._gslbSvcGroupCfg.internalValue = value;
  }
  public resetGslbSvcGroupCfg() {
    this._gslbSvcGroupCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSvcGroupCfgInput() {
    return this._gslbSvcGroupCfg.internalValue;
  }

  // gslb_template_cfg - computed: false, optional: true, required: false
  private _gslbTemplateCfg = new SystemResourceAccountingTemplateAppResourcesGslbTemplateCfgAOutputReference(this, "gslb_template_cfg");
  public get gslbTemplateCfg() {
    return this._gslbTemplateCfg;
  }
  public putGslbTemplateCfg(value: SystemResourceAccountingTemplateAppResourcesGslbTemplateCfgA) {
    this._gslbTemplateCfg.internalValue = value;
  }
  public resetGslbTemplateCfg() {
    this._gslbTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbTemplateCfgInput() {
    return this._gslbTemplateCfg.internalValue;
  }

  // gslb_zone_cfg - computed: false, optional: true, required: false
  private _gslbZoneCfg = new SystemResourceAccountingTemplateAppResourcesGslbZoneCfgAOutputReference(this, "gslb_zone_cfg");
  public get gslbZoneCfg() {
    return this._gslbZoneCfg;
  }
  public putGslbZoneCfg(value: SystemResourceAccountingTemplateAppResourcesGslbZoneCfgA) {
    this._gslbZoneCfg.internalValue = value;
  }
  public resetGslbZoneCfg() {
    this._gslbZoneCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbZoneCfgInput() {
    return this._gslbZoneCfg.internalValue;
  }

  // health_monitor_cfg - computed: false, optional: true, required: false
  private _healthMonitorCfg = new SystemResourceAccountingTemplateAppResourcesHealthMonitorCfgAOutputReference(this, "health_monitor_cfg");
  public get healthMonitorCfg() {
    return this._healthMonitorCfg;
  }
  public putHealthMonitorCfg(value: SystemResourceAccountingTemplateAppResourcesHealthMonitorCfgA) {
    this._healthMonitorCfg.internalValue = value;
  }
  public resetHealthMonitorCfg() {
    this._healthMonitorCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitorCfgInput() {
    return this._healthMonitorCfg.internalValue;
  }

  // http_template_cfg - computed: false, optional: true, required: false
  private _httpTemplateCfg = new SystemResourceAccountingTemplateAppResourcesHttpTemplateCfgAOutputReference(this, "http_template_cfg");
  public get httpTemplateCfg() {
    return this._httpTemplateCfg;
  }
  public putHttpTemplateCfg(value: SystemResourceAccountingTemplateAppResourcesHttpTemplateCfgA) {
    this._httpTemplateCfg.internalValue = value;
  }
  public resetHttpTemplateCfg() {
    this._httpTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTemplateCfgInput() {
    return this._httpTemplateCfg.internalValue;
  }

  // link_cost_template_cfg - computed: false, optional: true, required: false
  private _linkCostTemplateCfg = new SystemResourceAccountingTemplateAppResourcesLinkCostTemplateCfgAOutputReference(this, "link_cost_template_cfg");
  public get linkCostTemplateCfg() {
    return this._linkCostTemplateCfg;
  }
  public putLinkCostTemplateCfg(value: SystemResourceAccountingTemplateAppResourcesLinkCostTemplateCfgA) {
    this._linkCostTemplateCfg.internalValue = value;
  }
  public resetLinkCostTemplateCfg() {
    this._linkCostTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkCostTemplateCfgInput() {
    return this._linkCostTemplateCfg.internalValue;
  }

  // pbslb_entry_cfg - computed: false, optional: true, required: false
  private _pbslbEntryCfg = new SystemResourceAccountingTemplateAppResourcesPbslbEntryCfgAOutputReference(this, "pbslb_entry_cfg");
  public get pbslbEntryCfg() {
    return this._pbslbEntryCfg;
  }
  public putPbslbEntryCfg(value: SystemResourceAccountingTemplateAppResourcesPbslbEntryCfgA) {
    this._pbslbEntryCfg.internalValue = value;
  }
  public resetPbslbEntryCfg() {
    this._pbslbEntryCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbslbEntryCfgInput() {
    return this._pbslbEntryCfg.internalValue;
  }

  // persist_cookie_template_cfg - computed: false, optional: true, required: false
  private _persistCookieTemplateCfg = new SystemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfgAOutputReference(this, "persist_cookie_template_cfg");
  public get persistCookieTemplateCfg() {
    return this._persistCookieTemplateCfg;
  }
  public putPersistCookieTemplateCfg(value: SystemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfgA) {
    this._persistCookieTemplateCfg.internalValue = value;
  }
  public resetPersistCookieTemplateCfg() {
    this._persistCookieTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistCookieTemplateCfgInput() {
    return this._persistCookieTemplateCfg.internalValue;
  }

  // persist_srcip_template_cfg - computed: false, optional: true, required: false
  private _persistSrcipTemplateCfg = new SystemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfgAOutputReference(this, "persist_srcip_template_cfg");
  public get persistSrcipTemplateCfg() {
    return this._persistSrcipTemplateCfg;
  }
  public putPersistSrcipTemplateCfg(value: SystemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfgA) {
    this._persistSrcipTemplateCfg.internalValue = value;
  }
  public resetPersistSrcipTemplateCfg() {
    this._persistSrcipTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistSrcipTemplateCfgInput() {
    return this._persistSrcipTemplateCfg.internalValue;
  }

  // proxy_template_cfg - computed: false, optional: true, required: false
  private _proxyTemplateCfg = new SystemResourceAccountingTemplateAppResourcesProxyTemplateCfgAOutputReference(this, "proxy_template_cfg");
  public get proxyTemplateCfg() {
    return this._proxyTemplateCfg;
  }
  public putProxyTemplateCfg(value: SystemResourceAccountingTemplateAppResourcesProxyTemplateCfgA) {
    this._proxyTemplateCfg.internalValue = value;
  }
  public resetProxyTemplateCfg() {
    this._proxyTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTemplateCfgInput() {
    return this._proxyTemplateCfg.internalValue;
  }

  // real_port_cfg - computed: false, optional: true, required: false
  private _realPortCfg = new SystemResourceAccountingTemplateAppResourcesRealPortCfgAOutputReference(this, "real_port_cfg");
  public get realPortCfg() {
    return this._realPortCfg;
  }
  public putRealPortCfg(value: SystemResourceAccountingTemplateAppResourcesRealPortCfgA) {
    this._realPortCfg.internalValue = value;
  }
  public resetRealPortCfg() {
    this._realPortCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realPortCfgInput() {
    return this._realPortCfg.internalValue;
  }

  // real_server_cfg - computed: false, optional: true, required: false
  private _realServerCfg = new SystemResourceAccountingTemplateAppResourcesRealServerCfgAOutputReference(this, "real_server_cfg");
  public get realServerCfg() {
    return this._realServerCfg;
  }
  public putRealServerCfg(value: SystemResourceAccountingTemplateAppResourcesRealServerCfgA) {
    this._realServerCfg.internalValue = value;
  }
  public resetRealServerCfg() {
    this._realServerCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realServerCfgInput() {
    return this._realServerCfg.internalValue;
  }

  // server_ssl_template_cfg - computed: false, optional: true, required: false
  private _serverSslTemplateCfg = new SystemResourceAccountingTemplateAppResourcesServerSslTemplateCfgAOutputReference(this, "server_ssl_template_cfg");
  public get serverSslTemplateCfg() {
    return this._serverSslTemplateCfg;
  }
  public putServerSslTemplateCfg(value: SystemResourceAccountingTemplateAppResourcesServerSslTemplateCfgA) {
    this._serverSslTemplateCfg.internalValue = value;
  }
  public resetServerSslTemplateCfg() {
    this._serverSslTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSslTemplateCfgInput() {
    return this._serverSslTemplateCfg.internalValue;
  }

  // service_group_cfg - computed: false, optional: true, required: false
  private _serviceGroupCfg = new SystemResourceAccountingTemplateAppResourcesServiceGroupCfgAOutputReference(this, "service_group_cfg");
  public get serviceGroupCfg() {
    return this._serviceGroupCfg;
  }
  public putServiceGroupCfg(value: SystemResourceAccountingTemplateAppResourcesServiceGroupCfgA) {
    this._serviceGroupCfg.internalValue = value;
  }
  public resetServiceGroupCfg() {
    this._serviceGroupCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupCfgInput() {
    return this._serviceGroupCfg.internalValue;
  }

  // stream_template_cfg - computed: false, optional: true, required: false
  private _streamTemplateCfg = new SystemResourceAccountingTemplateAppResourcesStreamTemplateCfgAOutputReference(this, "stream_template_cfg");
  public get streamTemplateCfg() {
    return this._streamTemplateCfg;
  }
  public putStreamTemplateCfg(value: SystemResourceAccountingTemplateAppResourcesStreamTemplateCfgA) {
    this._streamTemplateCfg.internalValue = value;
  }
  public resetStreamTemplateCfg() {
    this._streamTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamTemplateCfgInput() {
    return this._streamTemplateCfg.internalValue;
  }

  // virtual_port_cfg - computed: false, optional: true, required: false
  private _virtualPortCfg = new SystemResourceAccountingTemplateAppResourcesVirtualPortCfgAOutputReference(this, "virtual_port_cfg");
  public get virtualPortCfg() {
    return this._virtualPortCfg;
  }
  public putVirtualPortCfg(value: SystemResourceAccountingTemplateAppResourcesVirtualPortCfgA) {
    this._virtualPortCfg.internalValue = value;
  }
  public resetVirtualPortCfg() {
    this._virtualPortCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPortCfgInput() {
    return this._virtualPortCfg.internalValue;
  }

  // virtual_server_cfg - computed: false, optional: true, required: false
  private _virtualServerCfg = new SystemResourceAccountingTemplateAppResourcesVirtualServerCfgAOutputReference(this, "virtual_server_cfg");
  public get virtualServerCfg() {
    return this._virtualServerCfg;
  }
  public putVirtualServerCfg(value: SystemResourceAccountingTemplateAppResourcesVirtualServerCfgA) {
    this._virtualServerCfg.internalValue = value;
  }
  public resetVirtualServerCfg() {
    this._virtualServerCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerCfgInput() {
    return this._virtualServerCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      template_name: cdktf.stringToTerraform(this._templateName),
      threshold: cdktf.numberToTerraform(this._threshold),
      uuid: cdktf.stringToTerraform(this._uuid),
      cache_template_cfg: systemResourceAccountingTemplateAppResourcesCacheTemplateCfgAToTerraform(this._cacheTemplateCfg.internalValue),
      client_ssl_template_cfg: systemResourceAccountingTemplateAppResourcesClientSslTemplateCfgAToTerraform(this._clientSslTemplateCfg.internalValue),
      conn_reuse_template_cfg: systemResourceAccountingTemplateAppResourcesConnReuseTemplateCfgAToTerraform(this._connReuseTemplateCfg.internalValue),
      fast_tcp_template_cfg: systemResourceAccountingTemplateAppResourcesFastTcpTemplateCfgAToTerraform(this._fastTcpTemplateCfg.internalValue),
      fast_udp_template_cfg: systemResourceAccountingTemplateAppResourcesFastUdpTemplateCfgAToTerraform(this._fastUdpTemplateCfg.internalValue),
      fix_template_cfg: systemResourceAccountingTemplateAppResourcesFixTemplateCfgAToTerraform(this._fixTemplateCfg.internalValue),
      gslb_device_cfg: systemResourceAccountingTemplateAppResourcesGslbDeviceCfgAToTerraform(this._gslbDeviceCfg.internalValue),
      gslb_geo_location_cfg: systemResourceAccountingTemplateAppResourcesGslbGeoLocationCfgAToTerraform(this._gslbGeoLocationCfg.internalValue),
      gslb_ip_list_cfg: systemResourceAccountingTemplateAppResourcesGslbIpListCfgAToTerraform(this._gslbIpListCfg.internalValue),
      gslb_policy_cfg: systemResourceAccountingTemplateAppResourcesGslbPolicyCfgAToTerraform(this._gslbPolicyCfg.internalValue),
      gslb_service_cfg: systemResourceAccountingTemplateAppResourcesGslbServiceCfgAToTerraform(this._gslbServiceCfg.internalValue),
      gslb_service_ip_cfg: systemResourceAccountingTemplateAppResourcesGslbServiceIpCfgAToTerraform(this._gslbServiceIpCfg.internalValue),
      gslb_service_port_cfg: systemResourceAccountingTemplateAppResourcesGslbServicePortCfgAToTerraform(this._gslbServicePortCfg.internalValue),
      gslb_site_cfg: systemResourceAccountingTemplateAppResourcesGslbSiteCfgAToTerraform(this._gslbSiteCfg.internalValue),
      gslb_svc_group_cfg: systemResourceAccountingTemplateAppResourcesGslbSvcGroupCfgAToTerraform(this._gslbSvcGroupCfg.internalValue),
      gslb_template_cfg: systemResourceAccountingTemplateAppResourcesGslbTemplateCfgAToTerraform(this._gslbTemplateCfg.internalValue),
      gslb_zone_cfg: systemResourceAccountingTemplateAppResourcesGslbZoneCfgAToTerraform(this._gslbZoneCfg.internalValue),
      health_monitor_cfg: systemResourceAccountingTemplateAppResourcesHealthMonitorCfgAToTerraform(this._healthMonitorCfg.internalValue),
      http_template_cfg: systemResourceAccountingTemplateAppResourcesHttpTemplateCfgAToTerraform(this._httpTemplateCfg.internalValue),
      link_cost_template_cfg: systemResourceAccountingTemplateAppResourcesLinkCostTemplateCfgAToTerraform(this._linkCostTemplateCfg.internalValue),
      pbslb_entry_cfg: systemResourceAccountingTemplateAppResourcesPbslbEntryCfgAToTerraform(this._pbslbEntryCfg.internalValue),
      persist_cookie_template_cfg: systemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfgAToTerraform(this._persistCookieTemplateCfg.internalValue),
      persist_srcip_template_cfg: systemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfgAToTerraform(this._persistSrcipTemplateCfg.internalValue),
      proxy_template_cfg: systemResourceAccountingTemplateAppResourcesProxyTemplateCfgAToTerraform(this._proxyTemplateCfg.internalValue),
      real_port_cfg: systemResourceAccountingTemplateAppResourcesRealPortCfgAToTerraform(this._realPortCfg.internalValue),
      real_server_cfg: systemResourceAccountingTemplateAppResourcesRealServerCfgAToTerraform(this._realServerCfg.internalValue),
      server_ssl_template_cfg: systemResourceAccountingTemplateAppResourcesServerSslTemplateCfgAToTerraform(this._serverSslTemplateCfg.internalValue),
      service_group_cfg: systemResourceAccountingTemplateAppResourcesServiceGroupCfgAToTerraform(this._serviceGroupCfg.internalValue),
      stream_template_cfg: systemResourceAccountingTemplateAppResourcesStreamTemplateCfgAToTerraform(this._streamTemplateCfg.internalValue),
      virtual_port_cfg: systemResourceAccountingTemplateAppResourcesVirtualPortCfgAToTerraform(this._virtualPortCfg.internalValue),
      virtual_server_cfg: systemResourceAccountingTemplateAppResourcesVirtualServerCfgAToTerraform(this._virtualServerCfg.internalValue),
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
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold: {
        value: cdktf.numberToHclTerraform(this._threshold),
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
      cache_template_cfg: {
        value: systemResourceAccountingTemplateAppResourcesCacheTemplateCfgAToHclTerraform(this._cacheTemplateCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesCacheTemplateCfgAList",
      },
      client_ssl_template_cfg: {
        value: systemResourceAccountingTemplateAppResourcesClientSslTemplateCfgAToHclTerraform(this._clientSslTemplateCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesClientSslTemplateCfgAList",
      },
      conn_reuse_template_cfg: {
        value: systemResourceAccountingTemplateAppResourcesConnReuseTemplateCfgAToHclTerraform(this._connReuseTemplateCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesConnReuseTemplateCfgAList",
      },
      fast_tcp_template_cfg: {
        value: systemResourceAccountingTemplateAppResourcesFastTcpTemplateCfgAToHclTerraform(this._fastTcpTemplateCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesFastTcpTemplateCfgAList",
      },
      fast_udp_template_cfg: {
        value: systemResourceAccountingTemplateAppResourcesFastUdpTemplateCfgAToHclTerraform(this._fastUdpTemplateCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesFastUdpTemplateCfgAList",
      },
      fix_template_cfg: {
        value: systemResourceAccountingTemplateAppResourcesFixTemplateCfgAToHclTerraform(this._fixTemplateCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesFixTemplateCfgAList",
      },
      gslb_device_cfg: {
        value: systemResourceAccountingTemplateAppResourcesGslbDeviceCfgAToHclTerraform(this._gslbDeviceCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesGslbDeviceCfgAList",
      },
      gslb_geo_location_cfg: {
        value: systemResourceAccountingTemplateAppResourcesGslbGeoLocationCfgAToHclTerraform(this._gslbGeoLocationCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesGslbGeoLocationCfgAList",
      },
      gslb_ip_list_cfg: {
        value: systemResourceAccountingTemplateAppResourcesGslbIpListCfgAToHclTerraform(this._gslbIpListCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesGslbIpListCfgAList",
      },
      gslb_policy_cfg: {
        value: systemResourceAccountingTemplateAppResourcesGslbPolicyCfgAToHclTerraform(this._gslbPolicyCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesGslbPolicyCfgAList",
      },
      gslb_service_cfg: {
        value: systemResourceAccountingTemplateAppResourcesGslbServiceCfgAToHclTerraform(this._gslbServiceCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesGslbServiceCfgAList",
      },
      gslb_service_ip_cfg: {
        value: systemResourceAccountingTemplateAppResourcesGslbServiceIpCfgAToHclTerraform(this._gslbServiceIpCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesGslbServiceIpCfgAList",
      },
      gslb_service_port_cfg: {
        value: systemResourceAccountingTemplateAppResourcesGslbServicePortCfgAToHclTerraform(this._gslbServicePortCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesGslbServicePortCfgAList",
      },
      gslb_site_cfg: {
        value: systemResourceAccountingTemplateAppResourcesGslbSiteCfgAToHclTerraform(this._gslbSiteCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesGslbSiteCfgAList",
      },
      gslb_svc_group_cfg: {
        value: systemResourceAccountingTemplateAppResourcesGslbSvcGroupCfgAToHclTerraform(this._gslbSvcGroupCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesGslbSvcGroupCfgAList",
      },
      gslb_template_cfg: {
        value: systemResourceAccountingTemplateAppResourcesGslbTemplateCfgAToHclTerraform(this._gslbTemplateCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesGslbTemplateCfgAList",
      },
      gslb_zone_cfg: {
        value: systemResourceAccountingTemplateAppResourcesGslbZoneCfgAToHclTerraform(this._gslbZoneCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesGslbZoneCfgAList",
      },
      health_monitor_cfg: {
        value: systemResourceAccountingTemplateAppResourcesHealthMonitorCfgAToHclTerraform(this._healthMonitorCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesHealthMonitorCfgAList",
      },
      http_template_cfg: {
        value: systemResourceAccountingTemplateAppResourcesHttpTemplateCfgAToHclTerraform(this._httpTemplateCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesHttpTemplateCfgAList",
      },
      link_cost_template_cfg: {
        value: systemResourceAccountingTemplateAppResourcesLinkCostTemplateCfgAToHclTerraform(this._linkCostTemplateCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesLinkCostTemplateCfgAList",
      },
      pbslb_entry_cfg: {
        value: systemResourceAccountingTemplateAppResourcesPbslbEntryCfgAToHclTerraform(this._pbslbEntryCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesPbslbEntryCfgAList",
      },
      persist_cookie_template_cfg: {
        value: systemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfgAToHclTerraform(this._persistCookieTemplateCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesPersistCookieTemplateCfgAList",
      },
      persist_srcip_template_cfg: {
        value: systemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfgAToHclTerraform(this._persistSrcipTemplateCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesPersistSrcipTemplateCfgAList",
      },
      proxy_template_cfg: {
        value: systemResourceAccountingTemplateAppResourcesProxyTemplateCfgAToHclTerraform(this._proxyTemplateCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesProxyTemplateCfgAList",
      },
      real_port_cfg: {
        value: systemResourceAccountingTemplateAppResourcesRealPortCfgAToHclTerraform(this._realPortCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesRealPortCfgAList",
      },
      real_server_cfg: {
        value: systemResourceAccountingTemplateAppResourcesRealServerCfgAToHclTerraform(this._realServerCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesRealServerCfgAList",
      },
      server_ssl_template_cfg: {
        value: systemResourceAccountingTemplateAppResourcesServerSslTemplateCfgAToHclTerraform(this._serverSslTemplateCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesServerSslTemplateCfgAList",
      },
      service_group_cfg: {
        value: systemResourceAccountingTemplateAppResourcesServiceGroupCfgAToHclTerraform(this._serviceGroupCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesServiceGroupCfgAList",
      },
      stream_template_cfg: {
        value: systemResourceAccountingTemplateAppResourcesStreamTemplateCfgAToHclTerraform(this._streamTemplateCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesStreamTemplateCfgAList",
      },
      virtual_port_cfg: {
        value: systemResourceAccountingTemplateAppResourcesVirtualPortCfgAToHclTerraform(this._virtualPortCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesVirtualPortCfgAList",
      },
      virtual_server_cfg: {
        value: systemResourceAccountingTemplateAppResourcesVirtualServerCfgAToHclTerraform(this._virtualServerCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateAppResourcesVirtualServerCfgAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
