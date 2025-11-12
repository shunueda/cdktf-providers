// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbZoneServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'drop': Drop query; 'forward': Forward packet; 'ignore': Send empty response; 'reject': Send refuse response;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#action GslbZoneService#action}
  */
  readonly action?: string;
  /**
  * Disable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#disable GslbZoneService#disable}
  */
  readonly disable?: number;
  /**
  * 'both': Forward both query and response; 'query': Forward query; 'response': Forward response;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#forward_type GslbZoneService#forward_type}
  */
  readonly forwardType?: string;
  /**
  * 'enable': Enable Gateway Status Check; 'disable': Disable Gateway Status Check;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#health_check_gateway GslbZoneService#health_check_gateway}
  */
  readonly healthCheckGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#id GslbZoneService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#name GslbZoneService#name}
  */
  readonly name: string;
  /**
  * Specify policy for this service (Specify policy name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#policy GslbZoneService#policy}
  */
  readonly policy?: string;
  /**
  * Specify the service name for the zone, * for wildcard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#service_name GslbZoneService#service_name}
  */
  readonly serviceName: string;
  /**
  * Port number of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#service_port GslbZoneService#service_port}
  */
  readonly servicePort: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#user_tag GslbZoneService#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#uuid GslbZoneService#uuid}
  */
  readonly uuid?: string;
  /**
  * dns_a_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#dns_a_record GslbZoneService#dns_a_record}
  */
  readonly dnsARecord?: GslbZoneServiceDnsARecord;
  /**
  * dns_caa_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#dns_caa_record_list GslbZoneService#dns_caa_record_list}
  */
  readonly dnsCaaRecordList?: GslbZoneServiceDnsCaaRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_cname_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#dns_cname_record_list GslbZoneService#dns_cname_record_list}
  */
  readonly dnsCnameRecordList?: GslbZoneServiceDnsCnameRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_mx_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#dns_mx_record_list GslbZoneService#dns_mx_record_list}
  */
  readonly dnsMxRecordList?: GslbZoneServiceDnsMxRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_naptr_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#dns_naptr_record_list GslbZoneService#dns_naptr_record_list}
  */
  readonly dnsNaptrRecordList?: GslbZoneServiceDnsNaptrRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_ns_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#dns_ns_record_list GslbZoneService#dns_ns_record_list}
  */
  readonly dnsNsRecordList?: GslbZoneServiceDnsNsRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_ptr_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#dns_ptr_record_list GslbZoneService#dns_ptr_record_list}
  */
  readonly dnsPtrRecordList?: GslbZoneServiceDnsPtrRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#dns_record_list GslbZoneService#dns_record_list}
  */
  readonly dnsRecordList?: GslbZoneServiceDnsRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_srv_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#dns_srv_record_list GslbZoneService#dns_srv_record_list}
  */
  readonly dnsSrvRecordList?: GslbZoneServiceDnsSrvRecordListStruct[] | cdktf.IResolvable;
  /**
  * dns_txt_record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#dns_txt_record_list GslbZoneService#dns_txt_record_list}
  */
  readonly dnsTxtRecordList?: GslbZoneServiceDnsTxtRecordListStruct[] | cdktf.IResolvable;
  /**
  * geo_location_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#geo_location_list GslbZoneService#geo_location_list}
  */
  readonly geoLocationList?: GslbZoneServiceGeoLocationListStruct[] | cdktf.IResolvable;
  /**
  * health_check_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#health_check_port GslbZoneService#health_check_port}
  */
  readonly healthCheckPort?: GslbZoneServiceHealthCheckPort[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#sampling_enable GslbZoneService#sampling_enable}
  */
  readonly samplingEnable?: GslbZoneServiceSamplingEnable[] | cdktf.IResolvable;
}
export interface GslbZoneServiceDnsARecordDnsARecordIpv4ListStruct {
  /**
  * Specify admin priority of Service-IP (Specify the priority)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#admin_ip GslbZoneService#admin_ip}
  */
  readonly adminIp?: number;
  /**
  * As backup when fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#as_backup GslbZoneService#as_backup}
  */
  readonly asBackup?: number;
  /**
  * Return this Service-IP when enable ip-replace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#as_replace GslbZoneService#as_replace}
  */
  readonly asReplace?: number;
  /**
  * Disable this Service-IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#disable GslbZoneService#disable}
  */
  readonly disable?: number;
  /**
  * Specify IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#dns_a_record_ip GslbZoneService#dns_a_record_ip}
  */
  readonly dnsARecordIp: string;
  /**
  * Don't use this Service-IP as DNS response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#no_resp GslbZoneService#no_resp}
  */
  readonly noResp?: number;
  /**
  * Return this Service-IP in DNS server mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#static GslbZoneService#static}
  */
  readonly static?: number;
  /**
  * Specify TTL for Service-IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#ttl GslbZoneService#ttl}
  */
  readonly ttl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#uuid GslbZoneService#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify weight for Service-IP (Weight value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#weight GslbZoneService#weight}
  */
  readonly weight?: number;
}

export function gslbZoneServiceDnsARecordDnsARecordIpv4ListStructToTerraform(struct?: GslbZoneServiceDnsARecordDnsARecordIpv4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_ip: cdktf.numberToTerraform(struct!.adminIp),
    as_backup: cdktf.numberToTerraform(struct!.asBackup),
    as_replace: cdktf.numberToTerraform(struct!.asReplace),
    disable: cdktf.numberToTerraform(struct!.disable),
    dns_a_record_ip: cdktf.stringToTerraform(struct!.dnsARecordIp),
    no_resp: cdktf.numberToTerraform(struct!.noResp),
    static: cdktf.numberToTerraform(struct!.static),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function gslbZoneServiceDnsARecordDnsARecordIpv4ListStructToHclTerraform(struct?: GslbZoneServiceDnsARecordDnsARecordIpv4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_ip: {
      value: cdktf.numberToHclTerraform(struct!.adminIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    as_backup: {
      value: cdktf.numberToHclTerraform(struct!.asBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    as_replace: {
      value: cdktf.numberToHclTerraform(struct!.asReplace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_a_record_ip: {
      value: cdktf.stringToHclTerraform(struct!.dnsARecordIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_resp: {
      value: cdktf.numberToHclTerraform(struct!.noResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static: {
      value: cdktf.numberToHclTerraform(struct!.static),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceDnsARecordDnsARecordIpv4ListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GslbZoneServiceDnsARecordDnsARecordIpv4ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminIp = this._adminIp;
    }
    if (this._asBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.asBackup = this._asBackup;
    }
    if (this._asReplace !== undefined) {
      hasAnyValues = true;
      internalValueResult.asReplace = this._asReplace;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._dnsARecordIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsARecordIp = this._dnsARecordIp;
    }
    if (this._noResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.noResp = this._noResp;
    }
    if (this._static !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceDnsARecordDnsARecordIpv4ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminIp = undefined;
      this._asBackup = undefined;
      this._asReplace = undefined;
      this._disable = undefined;
      this._dnsARecordIp = undefined;
      this._noResp = undefined;
      this._static = undefined;
      this._ttl = undefined;
      this._uuid = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminIp = value.adminIp;
      this._asBackup = value.asBackup;
      this._asReplace = value.asReplace;
      this._disable = value.disable;
      this._dnsARecordIp = value.dnsARecordIp;
      this._noResp = value.noResp;
      this._static = value.static;
      this._ttl = value.ttl;
      this._uuid = value.uuid;
      this._weight = value.weight;
    }
  }

  // admin_ip - computed: false, optional: true, required: false
  private _adminIp?: number; 
  public get adminIp() {
    return this.getNumberAttribute('admin_ip');
  }
  public set adminIp(value: number) {
    this._adminIp = value;
  }
  public resetAdminIp() {
    this._adminIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminIpInput() {
    return this._adminIp;
  }

  // as_backup - computed: false, optional: true, required: false
  private _asBackup?: number; 
  public get asBackup() {
    return this.getNumberAttribute('as_backup');
  }
  public set asBackup(value: number) {
    this._asBackup = value;
  }
  public resetAsBackup() {
    this._asBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asBackupInput() {
    return this._asBackup;
  }

  // as_replace - computed: false, optional: true, required: false
  private _asReplace?: number; 
  public get asReplace() {
    return this.getNumberAttribute('as_replace');
  }
  public set asReplace(value: number) {
    this._asReplace = value;
  }
  public resetAsReplace() {
    this._asReplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asReplaceInput() {
    return this._asReplace;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // dns_a_record_ip - computed: false, optional: false, required: true
  private _dnsARecordIp?: string; 
  public get dnsARecordIp() {
    return this.getStringAttribute('dns_a_record_ip');
  }
  public set dnsARecordIp(value: string) {
    this._dnsARecordIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsARecordIpInput() {
    return this._dnsARecordIp;
  }

  // no_resp - computed: false, optional: true, required: false
  private _noResp?: number; 
  public get noResp() {
    return this.getNumberAttribute('no_resp');
  }
  public set noResp(value: number) {
    this._noResp = value;
  }
  public resetNoResp() {
    this._noResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRespInput() {
    return this._noResp;
  }

  // static - computed: false, optional: true, required: false
  private _static?: number; 
  public get static() {
    return this.getNumberAttribute('static');
  }
  public set static(value: number) {
    this._static = value;
  }
  public resetStatic() {
    this._static = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class GslbZoneServiceDnsARecordDnsARecordIpv4ListStructList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceDnsARecordDnsARecordIpv4ListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GslbZoneServiceDnsARecordDnsARecordIpv4ListStructOutputReference {
    return new GslbZoneServiceDnsARecordDnsARecordIpv4ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceDnsARecordDnsARecordIpv6ListStruct {
  /**
  * Specify admin priority of Service-IP (Specify the priority)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#admin_ip GslbZoneService#admin_ip}
  */
  readonly adminIp?: number;
  /**
  * As backup when fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#as_backup GslbZoneService#as_backup}
  */
  readonly asBackup?: number;
  /**
  * Return this Service-IP when enable ip-replace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#as_replace GslbZoneService#as_replace}
  */
  readonly asReplace?: number;
  /**
  * Disable this Service-IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#disable GslbZoneService#disable}
  */
  readonly disable?: number;
  /**
  * IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#dns_a_record_ipv6 GslbZoneService#dns_a_record_ipv6}
  */
  readonly dnsARecordIpv6: string;
  /**
  * Don't use this Service-IP as DNS response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#no_resp GslbZoneService#no_resp}
  */
  readonly noResp?: number;
  /**
  * Return this Service-IP in DNS server mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#static GslbZoneService#static}
  */
  readonly static?: number;
  /**
  * Specify TTL for Service-IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#ttl GslbZoneService#ttl}
  */
  readonly ttl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#uuid GslbZoneService#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify weight for Service-IP (Weight value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#weight GslbZoneService#weight}
  */
  readonly weight?: number;
}

export function gslbZoneServiceDnsARecordDnsARecordIpv6ListStructToTerraform(struct?: GslbZoneServiceDnsARecordDnsARecordIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_ip: cdktf.numberToTerraform(struct!.adminIp),
    as_backup: cdktf.numberToTerraform(struct!.asBackup),
    as_replace: cdktf.numberToTerraform(struct!.asReplace),
    disable: cdktf.numberToTerraform(struct!.disable),
    dns_a_record_ipv6: cdktf.stringToTerraform(struct!.dnsARecordIpv6),
    no_resp: cdktf.numberToTerraform(struct!.noResp),
    static: cdktf.numberToTerraform(struct!.static),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function gslbZoneServiceDnsARecordDnsARecordIpv6ListStructToHclTerraform(struct?: GslbZoneServiceDnsARecordDnsARecordIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_ip: {
      value: cdktf.numberToHclTerraform(struct!.adminIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    as_backup: {
      value: cdktf.numberToHclTerraform(struct!.asBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    as_replace: {
      value: cdktf.numberToHclTerraform(struct!.asReplace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_a_record_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.dnsARecordIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_resp: {
      value: cdktf.numberToHclTerraform(struct!.noResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static: {
      value: cdktf.numberToHclTerraform(struct!.static),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceDnsARecordDnsARecordIpv6ListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GslbZoneServiceDnsARecordDnsARecordIpv6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminIp = this._adminIp;
    }
    if (this._asBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.asBackup = this._asBackup;
    }
    if (this._asReplace !== undefined) {
      hasAnyValues = true;
      internalValueResult.asReplace = this._asReplace;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._dnsARecordIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsARecordIpv6 = this._dnsARecordIpv6;
    }
    if (this._noResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.noResp = this._noResp;
    }
    if (this._static !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceDnsARecordDnsARecordIpv6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminIp = undefined;
      this._asBackup = undefined;
      this._asReplace = undefined;
      this._disable = undefined;
      this._dnsARecordIpv6 = undefined;
      this._noResp = undefined;
      this._static = undefined;
      this._ttl = undefined;
      this._uuid = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminIp = value.adminIp;
      this._asBackup = value.asBackup;
      this._asReplace = value.asReplace;
      this._disable = value.disable;
      this._dnsARecordIpv6 = value.dnsARecordIpv6;
      this._noResp = value.noResp;
      this._static = value.static;
      this._ttl = value.ttl;
      this._uuid = value.uuid;
      this._weight = value.weight;
    }
  }

  // admin_ip - computed: false, optional: true, required: false
  private _adminIp?: number; 
  public get adminIp() {
    return this.getNumberAttribute('admin_ip');
  }
  public set adminIp(value: number) {
    this._adminIp = value;
  }
  public resetAdminIp() {
    this._adminIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminIpInput() {
    return this._adminIp;
  }

  // as_backup - computed: false, optional: true, required: false
  private _asBackup?: number; 
  public get asBackup() {
    return this.getNumberAttribute('as_backup');
  }
  public set asBackup(value: number) {
    this._asBackup = value;
  }
  public resetAsBackup() {
    this._asBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asBackupInput() {
    return this._asBackup;
  }

  // as_replace - computed: false, optional: true, required: false
  private _asReplace?: number; 
  public get asReplace() {
    return this.getNumberAttribute('as_replace');
  }
  public set asReplace(value: number) {
    this._asReplace = value;
  }
  public resetAsReplace() {
    this._asReplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asReplaceInput() {
    return this._asReplace;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // dns_a_record_ipv6 - computed: false, optional: false, required: true
  private _dnsARecordIpv6?: string; 
  public get dnsARecordIpv6() {
    return this.getStringAttribute('dns_a_record_ipv6');
  }
  public set dnsARecordIpv6(value: string) {
    this._dnsARecordIpv6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsARecordIpv6Input() {
    return this._dnsARecordIpv6;
  }

  // no_resp - computed: false, optional: true, required: false
  private _noResp?: number; 
  public get noResp() {
    return this.getNumberAttribute('no_resp');
  }
  public set noResp(value: number) {
    this._noResp = value;
  }
  public resetNoResp() {
    this._noResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRespInput() {
    return this._noResp;
  }

  // static - computed: false, optional: true, required: false
  private _static?: number; 
  public get static() {
    return this.getNumberAttribute('static');
  }
  public set static(value: number) {
    this._static = value;
  }
  public resetStatic() {
    this._static = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class GslbZoneServiceDnsARecordDnsARecordIpv6ListStructList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceDnsARecordDnsARecordIpv6ListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GslbZoneServiceDnsARecordDnsARecordIpv6ListStructOutputReference {
    return new GslbZoneServiceDnsARecordDnsARecordIpv6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceDnsARecordDnsARecordSrvListStruct {
  /**
  * Specify admin priority of Service-IP (Specify the priority)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#admin_ip GslbZoneService#admin_ip}
  */
  readonly adminIp?: number;
  /**
  * As backup when fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#as_backup GslbZoneService#as_backup}
  */
  readonly asBackup?: number;
  /**
  * Return this Service-IP when enable ip-replace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#as_replace GslbZoneService#as_replace}
  */
  readonly asReplace?: number;
  /**
  * Disable this Service-IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#disable GslbZoneService#disable}
  */
  readonly disable?: number;
  /**
  * Don't use this Service-IP as DNS response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#no_resp GslbZoneService#no_resp}
  */
  readonly noResp?: number;
  /**
  * Return this Service-IP in DNS server mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#static GslbZoneService#static}
  */
  readonly static?: number;
  /**
  * Specify name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#svrname GslbZoneService#svrname}
  */
  readonly svrname: string;
  /**
  * Specify TTL for Service-IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#ttl GslbZoneService#ttl}
  */
  readonly ttl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#uuid GslbZoneService#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify weight for Service-IP (Weight value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#weight GslbZoneService#weight}
  */
  readonly weight?: number;
}

export function gslbZoneServiceDnsARecordDnsARecordSrvListStructToTerraform(struct?: GslbZoneServiceDnsARecordDnsARecordSrvListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_ip: cdktf.numberToTerraform(struct!.adminIp),
    as_backup: cdktf.numberToTerraform(struct!.asBackup),
    as_replace: cdktf.numberToTerraform(struct!.asReplace),
    disable: cdktf.numberToTerraform(struct!.disable),
    no_resp: cdktf.numberToTerraform(struct!.noResp),
    static: cdktf.numberToTerraform(struct!.static),
    svrname: cdktf.stringToTerraform(struct!.svrname),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function gslbZoneServiceDnsARecordDnsARecordSrvListStructToHclTerraform(struct?: GslbZoneServiceDnsARecordDnsARecordSrvListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_ip: {
      value: cdktf.numberToHclTerraform(struct!.adminIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    as_backup: {
      value: cdktf.numberToHclTerraform(struct!.asBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    as_replace: {
      value: cdktf.numberToHclTerraform(struct!.asReplace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_resp: {
      value: cdktf.numberToHclTerraform(struct!.noResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static: {
      value: cdktf.numberToHclTerraform(struct!.static),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    svrname: {
      value: cdktf.stringToHclTerraform(struct!.svrname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceDnsARecordDnsARecordSrvListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GslbZoneServiceDnsARecordDnsARecordSrvListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminIp = this._adminIp;
    }
    if (this._asBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.asBackup = this._asBackup;
    }
    if (this._asReplace !== undefined) {
      hasAnyValues = true;
      internalValueResult.asReplace = this._asReplace;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._noResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.noResp = this._noResp;
    }
    if (this._static !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static;
    }
    if (this._svrname !== undefined) {
      hasAnyValues = true;
      internalValueResult.svrname = this._svrname;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceDnsARecordDnsARecordSrvListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminIp = undefined;
      this._asBackup = undefined;
      this._asReplace = undefined;
      this._disable = undefined;
      this._noResp = undefined;
      this._static = undefined;
      this._svrname = undefined;
      this._ttl = undefined;
      this._uuid = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminIp = value.adminIp;
      this._asBackup = value.asBackup;
      this._asReplace = value.asReplace;
      this._disable = value.disable;
      this._noResp = value.noResp;
      this._static = value.static;
      this._svrname = value.svrname;
      this._ttl = value.ttl;
      this._uuid = value.uuid;
      this._weight = value.weight;
    }
  }

  // admin_ip - computed: false, optional: true, required: false
  private _adminIp?: number; 
  public get adminIp() {
    return this.getNumberAttribute('admin_ip');
  }
  public set adminIp(value: number) {
    this._adminIp = value;
  }
  public resetAdminIp() {
    this._adminIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminIpInput() {
    return this._adminIp;
  }

  // as_backup - computed: false, optional: true, required: false
  private _asBackup?: number; 
  public get asBackup() {
    return this.getNumberAttribute('as_backup');
  }
  public set asBackup(value: number) {
    this._asBackup = value;
  }
  public resetAsBackup() {
    this._asBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asBackupInput() {
    return this._asBackup;
  }

  // as_replace - computed: false, optional: true, required: false
  private _asReplace?: number; 
  public get asReplace() {
    return this.getNumberAttribute('as_replace');
  }
  public set asReplace(value: number) {
    this._asReplace = value;
  }
  public resetAsReplace() {
    this._asReplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asReplaceInput() {
    return this._asReplace;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // no_resp - computed: false, optional: true, required: false
  private _noResp?: number; 
  public get noResp() {
    return this.getNumberAttribute('no_resp');
  }
  public set noResp(value: number) {
    this._noResp = value;
  }
  public resetNoResp() {
    this._noResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRespInput() {
    return this._noResp;
  }

  // static - computed: false, optional: true, required: false
  private _static?: number; 
  public get static() {
    return this.getNumberAttribute('static');
  }
  public set static(value: number) {
    this._static = value;
  }
  public resetStatic() {
    this._static = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static;
  }

  // svrname - computed: false, optional: false, required: true
  private _svrname?: string; 
  public get svrname() {
    return this.getStringAttribute('svrname');
  }
  public set svrname(value: string) {
    this._svrname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svrnameInput() {
    return this._svrname;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class GslbZoneServiceDnsARecordDnsARecordSrvListStructList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceDnsARecordDnsARecordSrvListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GslbZoneServiceDnsARecordDnsARecordSrvListStructOutputReference {
    return new GslbZoneServiceDnsARecordDnsARecordSrvListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceDnsARecord {
  /**
  * dns_a_record_ipv4_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#dns_a_record_ipv4_list GslbZoneService#dns_a_record_ipv4_list}
  */
  readonly dnsARecordIpv4List?: GslbZoneServiceDnsARecordDnsARecordIpv4ListStruct[] | cdktf.IResolvable;
  /**
  * dns_a_record_ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#dns_a_record_ipv6_list GslbZoneService#dns_a_record_ipv6_list}
  */
  readonly dnsARecordIpv6List?: GslbZoneServiceDnsARecordDnsARecordIpv6ListStruct[] | cdktf.IResolvable;
  /**
  * dns_a_record_srv_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#dns_a_record_srv_list GslbZoneService#dns_a_record_srv_list}
  */
  readonly dnsARecordSrvList?: GslbZoneServiceDnsARecordDnsARecordSrvListStruct[] | cdktf.IResolvable;
}

export function gslbZoneServiceDnsARecordToTerraform(struct?: GslbZoneServiceDnsARecordOutputReference | GslbZoneServiceDnsARecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_a_record_ipv4_list: cdktf.listMapper(gslbZoneServiceDnsARecordDnsARecordIpv4ListStructToTerraform, true)(struct!.dnsARecordIpv4List),
    dns_a_record_ipv6_list: cdktf.listMapper(gslbZoneServiceDnsARecordDnsARecordIpv6ListStructToTerraform, true)(struct!.dnsARecordIpv6List),
    dns_a_record_srv_list: cdktf.listMapper(gslbZoneServiceDnsARecordDnsARecordSrvListStructToTerraform, true)(struct!.dnsARecordSrvList),
  }
}


export function gslbZoneServiceDnsARecordToHclTerraform(struct?: GslbZoneServiceDnsARecordOutputReference | GslbZoneServiceDnsARecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_a_record_ipv4_list: {
      value: cdktf.listMapperHcl(gslbZoneServiceDnsARecordDnsARecordIpv4ListStructToHclTerraform, true)(struct!.dnsARecordIpv4List),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceDnsARecordDnsARecordIpv4ListStructList",
    },
    dns_a_record_ipv6_list: {
      value: cdktf.listMapperHcl(gslbZoneServiceDnsARecordDnsARecordIpv6ListStructToHclTerraform, true)(struct!.dnsARecordIpv6List),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceDnsARecordDnsARecordIpv6ListStructList",
    },
    dns_a_record_srv_list: {
      value: cdktf.listMapperHcl(gslbZoneServiceDnsARecordDnsARecordSrvListStructToHclTerraform, true)(struct!.dnsARecordSrvList),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceDnsARecordDnsARecordSrvListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceDnsARecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GslbZoneServiceDnsARecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsARecordIpv4List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsARecordIpv4List = this._dnsARecordIpv4List?.internalValue;
    }
    if (this._dnsARecordIpv6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsARecordIpv6List = this._dnsARecordIpv6List?.internalValue;
    }
    if (this._dnsARecordSrvList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsARecordSrvList = this._dnsARecordSrvList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceDnsARecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsARecordIpv4List.internalValue = undefined;
      this._dnsARecordIpv6List.internalValue = undefined;
      this._dnsARecordSrvList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsARecordIpv4List.internalValue = value.dnsARecordIpv4List;
      this._dnsARecordIpv6List.internalValue = value.dnsARecordIpv6List;
      this._dnsARecordSrvList.internalValue = value.dnsARecordSrvList;
    }
  }

  // dns_a_record_ipv4_list - computed: false, optional: true, required: false
  private _dnsARecordIpv4List = new GslbZoneServiceDnsARecordDnsARecordIpv4ListStructList(this, "dns_a_record_ipv4_list", false);
  public get dnsARecordIpv4List() {
    return this._dnsARecordIpv4List;
  }
  public putDnsARecordIpv4List(value: GslbZoneServiceDnsARecordDnsARecordIpv4ListStruct[] | cdktf.IResolvable) {
    this._dnsARecordIpv4List.internalValue = value;
  }
  public resetDnsARecordIpv4List() {
    this._dnsARecordIpv4List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsARecordIpv4ListInput() {
    return this._dnsARecordIpv4List.internalValue;
  }

  // dns_a_record_ipv6_list - computed: false, optional: true, required: false
  private _dnsARecordIpv6List = new GslbZoneServiceDnsARecordDnsARecordIpv6ListStructList(this, "dns_a_record_ipv6_list", false);
  public get dnsARecordIpv6List() {
    return this._dnsARecordIpv6List;
  }
  public putDnsARecordIpv6List(value: GslbZoneServiceDnsARecordDnsARecordIpv6ListStruct[] | cdktf.IResolvable) {
    this._dnsARecordIpv6List.internalValue = value;
  }
  public resetDnsARecordIpv6List() {
    this._dnsARecordIpv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsARecordIpv6ListInput() {
    return this._dnsARecordIpv6List.internalValue;
  }

  // dns_a_record_srv_list - computed: false, optional: true, required: false
  private _dnsARecordSrvList = new GslbZoneServiceDnsARecordDnsARecordSrvListStructList(this, "dns_a_record_srv_list", false);
  public get dnsARecordSrvList() {
    return this._dnsARecordSrvList;
  }
  public putDnsARecordSrvList(value: GslbZoneServiceDnsARecordDnsARecordSrvListStruct[] | cdktf.IResolvable) {
    this._dnsARecordSrvList.internalValue = value;
  }
  public resetDnsARecordSrvList() {
    this._dnsARecordSrvList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsARecordSrvListInput() {
    return this._dnsARecordSrvList.internalValue;
  }
}
export interface GslbZoneServiceDnsCaaRecordListSamplingEnable {
  /**
  * 'all': all; 'hits': Number of times the CAA has been used;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#counters1 GslbZoneService#counters1}
  */
  readonly counters1?: string;
}

export function gslbZoneServiceDnsCaaRecordListSamplingEnableToTerraform(struct?: GslbZoneServiceDnsCaaRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function gslbZoneServiceDnsCaaRecordListSamplingEnableToHclTerraform(struct?: GslbZoneServiceDnsCaaRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceDnsCaaRecordListSamplingEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GslbZoneServiceDnsCaaRecordListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceDnsCaaRecordListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class GslbZoneServiceDnsCaaRecordListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceDnsCaaRecordListSamplingEnable[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GslbZoneServiceDnsCaaRecordListSamplingEnableOutputReference {
    return new GslbZoneServiceDnsCaaRecordListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceDnsCaaRecordListStruct {
  /**
  * Issuer Critical Flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#critical_flag GslbZoneService#critical_flag}
  */
  readonly criticalFlag: number;
  /**
  * Specify other property tags, only allowed lowercase alphanumeric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#property_tag GslbZoneService#property_tag}
  */
  readonly propertyTag: string;
  /**
  * Specify the Issuer Domain Name or a URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#rdata GslbZoneService#rdata}
  */
  readonly rdata: string;
  /**
  * Specify TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#ttl GslbZoneService#ttl}
  */
  readonly ttl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#uuid GslbZoneService#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#sampling_enable GslbZoneService#sampling_enable}
  */
  readonly samplingEnable?: GslbZoneServiceDnsCaaRecordListSamplingEnable[] | cdktf.IResolvable;
}

export function gslbZoneServiceDnsCaaRecordListStructToTerraform(struct?: GslbZoneServiceDnsCaaRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical_flag: cdktf.numberToTerraform(struct!.criticalFlag),
    property_tag: cdktf.stringToTerraform(struct!.propertyTag),
    rdata: cdktf.stringToTerraform(struct!.rdata),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(gslbZoneServiceDnsCaaRecordListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function gslbZoneServiceDnsCaaRecordListStructToHclTerraform(struct?: GslbZoneServiceDnsCaaRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    critical_flag: {
      value: cdktf.numberToHclTerraform(struct!.criticalFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    property_tag: {
      value: cdktf.stringToHclTerraform(struct!.propertyTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rdata: {
      value: cdktf.stringToHclTerraform(struct!.rdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(gslbZoneServiceDnsCaaRecordListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceDnsCaaRecordListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceDnsCaaRecordListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GslbZoneServiceDnsCaaRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criticalFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticalFlag = this._criticalFlag;
    }
    if (this._propertyTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyTag = this._propertyTag;
    }
    if (this._rdata !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdata = this._rdata;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceDnsCaaRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criticalFlag = undefined;
      this._propertyTag = undefined;
      this._rdata = undefined;
      this._ttl = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criticalFlag = value.criticalFlag;
      this._propertyTag = value.propertyTag;
      this._rdata = value.rdata;
      this._ttl = value.ttl;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // critical_flag - computed: false, optional: false, required: true
  private _criticalFlag?: number; 
  public get criticalFlag() {
    return this.getNumberAttribute('critical_flag');
  }
  public set criticalFlag(value: number) {
    this._criticalFlag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalFlagInput() {
    return this._criticalFlag;
  }

  // property_tag - computed: false, optional: false, required: true
  private _propertyTag?: string; 
  public get propertyTag() {
    return this.getStringAttribute('property_tag');
  }
  public set propertyTag(value: string) {
    this._propertyTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTagInput() {
    return this._propertyTag;
  }

  // rdata - computed: false, optional: false, required: true
  private _rdata?: string; 
  public get rdata() {
    return this.getStringAttribute('rdata');
  }
  public set rdata(value: string) {
    this._rdata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdataInput() {
    return this._rdata;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new GslbZoneServiceDnsCaaRecordListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: GslbZoneServiceDnsCaaRecordListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class GslbZoneServiceDnsCaaRecordListStructList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceDnsCaaRecordListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GslbZoneServiceDnsCaaRecordListStructOutputReference {
    return new GslbZoneServiceDnsCaaRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceDnsCnameRecordListSamplingEnable {
  /**
  * 'all': all; 'cname-hits': Number of times the CNAME has been used;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#counters1 GslbZoneService#counters1}
  */
  readonly counters1?: string;
}

export function gslbZoneServiceDnsCnameRecordListSamplingEnableToTerraform(struct?: GslbZoneServiceDnsCnameRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function gslbZoneServiceDnsCnameRecordListSamplingEnableToHclTerraform(struct?: GslbZoneServiceDnsCnameRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceDnsCnameRecordListSamplingEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GslbZoneServiceDnsCnameRecordListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceDnsCnameRecordListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class GslbZoneServiceDnsCnameRecordListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceDnsCnameRecordListSamplingEnable[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GslbZoneServiceDnsCnameRecordListSamplingEnableOutputReference {
    return new GslbZoneServiceDnsCnameRecordListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceDnsCnameRecordListStruct {
  /**
  * Specify Administrative Preference, default is 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#admin_preference GslbZoneService#admin_preference}
  */
  readonly adminPreference?: number;
  /**
  * Specify the alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#alias_name GslbZoneService#alias_name}
  */
  readonly aliasName: string;
  /**
  * As backup when fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#as_backup GslbZoneService#as_backup}
  */
  readonly asBackup?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#uuid GslbZoneService#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify Weight, default is 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#weight GslbZoneService#weight}
  */
  readonly weight?: number;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#sampling_enable GslbZoneService#sampling_enable}
  */
  readonly samplingEnable?: GslbZoneServiceDnsCnameRecordListSamplingEnable[] | cdktf.IResolvable;
}

export function gslbZoneServiceDnsCnameRecordListStructToTerraform(struct?: GslbZoneServiceDnsCnameRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_preference: cdktf.numberToTerraform(struct!.adminPreference),
    alias_name: cdktf.stringToTerraform(struct!.aliasName),
    as_backup: cdktf.numberToTerraform(struct!.asBackup),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    weight: cdktf.numberToTerraform(struct!.weight),
    sampling_enable: cdktf.listMapper(gslbZoneServiceDnsCnameRecordListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function gslbZoneServiceDnsCnameRecordListStructToHclTerraform(struct?: GslbZoneServiceDnsCnameRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_preference: {
      value: cdktf.numberToHclTerraform(struct!.adminPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alias_name: {
      value: cdktf.stringToHclTerraform(struct!.aliasName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    as_backup: {
      value: cdktf.numberToHclTerraform(struct!.asBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(gslbZoneServiceDnsCnameRecordListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceDnsCnameRecordListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceDnsCnameRecordListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GslbZoneServiceDnsCnameRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPreference = this._adminPreference;
    }
    if (this._aliasName !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliasName = this._aliasName;
    }
    if (this._asBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.asBackup = this._asBackup;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceDnsCnameRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminPreference = undefined;
      this._aliasName = undefined;
      this._asBackup = undefined;
      this._uuid = undefined;
      this._weight = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminPreference = value.adminPreference;
      this._aliasName = value.aliasName;
      this._asBackup = value.asBackup;
      this._uuid = value.uuid;
      this._weight = value.weight;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // admin_preference - computed: false, optional: true, required: false
  private _adminPreference?: number; 
  public get adminPreference() {
    return this.getNumberAttribute('admin_preference');
  }
  public set adminPreference(value: number) {
    this._adminPreference = value;
  }
  public resetAdminPreference() {
    this._adminPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPreferenceInput() {
    return this._adminPreference;
  }

  // alias_name - computed: false, optional: false, required: true
  private _aliasName?: string; 
  public get aliasName() {
    return this.getStringAttribute('alias_name');
  }
  public set aliasName(value: string) {
    this._aliasName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasNameInput() {
    return this._aliasName;
  }

  // as_backup - computed: false, optional: true, required: false
  private _asBackup?: number; 
  public get asBackup() {
    return this.getNumberAttribute('as_backup');
  }
  public set asBackup(value: number) {
    this._asBackup = value;
  }
  public resetAsBackup() {
    this._asBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asBackupInput() {
    return this._asBackup;
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

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new GslbZoneServiceDnsCnameRecordListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: GslbZoneServiceDnsCnameRecordListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class GslbZoneServiceDnsCnameRecordListStructList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceDnsCnameRecordListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GslbZoneServiceDnsCnameRecordListStructOutputReference {
    return new GslbZoneServiceDnsCnameRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceDnsMxRecordListSamplingEnable {
  /**
  * 'all': all; 'hits': Number of times the record has been used;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#counters1 GslbZoneService#counters1}
  */
  readonly counters1?: string;
}

export function gslbZoneServiceDnsMxRecordListSamplingEnableToTerraform(struct?: GslbZoneServiceDnsMxRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function gslbZoneServiceDnsMxRecordListSamplingEnableToHclTerraform(struct?: GslbZoneServiceDnsMxRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceDnsMxRecordListSamplingEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GslbZoneServiceDnsMxRecordListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceDnsMxRecordListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class GslbZoneServiceDnsMxRecordListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceDnsMxRecordListSamplingEnable[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GslbZoneServiceDnsMxRecordListSamplingEnableOutputReference {
    return new GslbZoneServiceDnsMxRecordListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceDnsMxRecordListStruct {
  /**
  * Specify Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#mx_name GslbZoneService#mx_name}
  */
  readonly mxName: string;
  /**
  * Specify Priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#priority GslbZoneService#priority}
  */
  readonly priority?: number;
  /**
  * Specify TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#ttl GslbZoneService#ttl}
  */
  readonly ttl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#uuid GslbZoneService#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#sampling_enable GslbZoneService#sampling_enable}
  */
  readonly samplingEnable?: GslbZoneServiceDnsMxRecordListSamplingEnable[] | cdktf.IResolvable;
}

export function gslbZoneServiceDnsMxRecordListStructToTerraform(struct?: GslbZoneServiceDnsMxRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mx_name: cdktf.stringToTerraform(struct!.mxName),
    priority: cdktf.numberToTerraform(struct!.priority),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(gslbZoneServiceDnsMxRecordListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function gslbZoneServiceDnsMxRecordListStructToHclTerraform(struct?: GslbZoneServiceDnsMxRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mx_name: {
      value: cdktf.stringToHclTerraform(struct!.mxName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(gslbZoneServiceDnsMxRecordListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceDnsMxRecordListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceDnsMxRecordListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GslbZoneServiceDnsMxRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mxName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mxName = this._mxName;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceDnsMxRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mxName = undefined;
      this._priority = undefined;
      this._ttl = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mxName = value.mxName;
      this._priority = value.priority;
      this._ttl = value.ttl;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // mx_name - computed: false, optional: false, required: true
  private _mxName?: string; 
  public get mxName() {
    return this.getStringAttribute('mx_name');
  }
  public set mxName(value: string) {
    this._mxName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mxNameInput() {
    return this._mxName;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new GslbZoneServiceDnsMxRecordListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: GslbZoneServiceDnsMxRecordListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class GslbZoneServiceDnsMxRecordListStructList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceDnsMxRecordListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GslbZoneServiceDnsMxRecordListStructOutputReference {
    return new GslbZoneServiceDnsMxRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceDnsNaptrRecordListSamplingEnable {
  /**
  * 'all': all; 'naptr-hits': Number of times the NAPTR has been used;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#counters1 GslbZoneService#counters1}
  */
  readonly counters1?: string;
}

export function gslbZoneServiceDnsNaptrRecordListSamplingEnableToTerraform(struct?: GslbZoneServiceDnsNaptrRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function gslbZoneServiceDnsNaptrRecordListSamplingEnableToHclTerraform(struct?: GslbZoneServiceDnsNaptrRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceDnsNaptrRecordListSamplingEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GslbZoneServiceDnsNaptrRecordListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceDnsNaptrRecordListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class GslbZoneServiceDnsNaptrRecordListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceDnsNaptrRecordListSamplingEnable[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GslbZoneServiceDnsNaptrRecordListSamplingEnableOutputReference {
    return new GslbZoneServiceDnsNaptrRecordListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceDnsNaptrRecordListStruct {
  /**
  * Specify the flag (e.g., a, s). Default is empty flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#flag GslbZoneService#flag}
  */
  readonly flag: string;
  /**
  * Specify the replacement or regular expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#naptr_target GslbZoneService#naptr_target}
  */
  readonly naptrTarget: string;
  /**
  * Specify Order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#order GslbZoneService#order}
  */
  readonly order?: number;
  /**
  * Specify Preference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#preference GslbZoneService#preference}
  */
  readonly preference?: number;
  /**
  * Return the regular expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#regexp GslbZoneService#regexp}
  */
  readonly regexp?: number;
  /**
  * Specify Service and Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#service_proto GslbZoneService#service_proto}
  */
  readonly serviceProto: string;
  /**
  * Specify TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#ttl GslbZoneService#ttl}
  */
  readonly ttl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#uuid GslbZoneService#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#sampling_enable GslbZoneService#sampling_enable}
  */
  readonly samplingEnable?: GslbZoneServiceDnsNaptrRecordListSamplingEnable[] | cdktf.IResolvable;
}

export function gslbZoneServiceDnsNaptrRecordListStructToTerraform(struct?: GslbZoneServiceDnsNaptrRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flag: cdktf.stringToTerraform(struct!.flag),
    naptr_target: cdktf.stringToTerraform(struct!.naptrTarget),
    order: cdktf.numberToTerraform(struct!.order),
    preference: cdktf.numberToTerraform(struct!.preference),
    regexp: cdktf.numberToTerraform(struct!.regexp),
    service_proto: cdktf.stringToTerraform(struct!.serviceProto),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(gslbZoneServiceDnsNaptrRecordListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function gslbZoneServiceDnsNaptrRecordListStructToHclTerraform(struct?: GslbZoneServiceDnsNaptrRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flag: {
      value: cdktf.stringToHclTerraform(struct!.flag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    naptr_target: {
      value: cdktf.stringToHclTerraform(struct!.naptrTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preference: {
      value: cdktf.numberToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regexp: {
      value: cdktf.numberToHclTerraform(struct!.regexp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_proto: {
      value: cdktf.stringToHclTerraform(struct!.serviceProto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(gslbZoneServiceDnsNaptrRecordListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceDnsNaptrRecordListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceDnsNaptrRecordListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GslbZoneServiceDnsNaptrRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flag !== undefined) {
      hasAnyValues = true;
      internalValueResult.flag = this._flag;
    }
    if (this._naptrTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.naptrTarget = this._naptrTarget;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    if (this._regexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp;
    }
    if (this._serviceProto !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceProto = this._serviceProto;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceDnsNaptrRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flag = undefined;
      this._naptrTarget = undefined;
      this._order = undefined;
      this._preference = undefined;
      this._regexp = undefined;
      this._serviceProto = undefined;
      this._ttl = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flag = value.flag;
      this._naptrTarget = value.naptrTarget;
      this._order = value.order;
      this._preference = value.preference;
      this._regexp = value.regexp;
      this._serviceProto = value.serviceProto;
      this._ttl = value.ttl;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // flag - computed: false, optional: false, required: true
  private _flag?: string; 
  public get flag() {
    return this.getStringAttribute('flag');
  }
  public set flag(value: string) {
    this._flag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flagInput() {
    return this._flag;
  }

  // naptr_target - computed: false, optional: false, required: true
  private _naptrTarget?: string; 
  public get naptrTarget() {
    return this.getStringAttribute('naptr_target');
  }
  public set naptrTarget(value: string) {
    this._naptrTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get naptrTargetInput() {
    return this._naptrTarget;
  }

  // order - computed: false, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // preference - computed: false, optional: true, required: false
  private _preference?: number; 
  public get preference() {
    return this.getNumberAttribute('preference');
  }
  public set preference(value: number) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp?: number; 
  public get regexp() {
    return this.getNumberAttribute('regexp');
  }
  public set regexp(value: number) {
    this._regexp = value;
  }
  public resetRegexp() {
    this._regexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp;
  }

  // service_proto - computed: false, optional: false, required: true
  private _serviceProto?: string; 
  public get serviceProto() {
    return this.getStringAttribute('service_proto');
  }
  public set serviceProto(value: string) {
    this._serviceProto = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProtoInput() {
    return this._serviceProto;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new GslbZoneServiceDnsNaptrRecordListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: GslbZoneServiceDnsNaptrRecordListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class GslbZoneServiceDnsNaptrRecordListStructList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceDnsNaptrRecordListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GslbZoneServiceDnsNaptrRecordListStructOutputReference {
    return new GslbZoneServiceDnsNaptrRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceDnsNsRecordListSamplingEnable {
  /**
  * 'all': all; 'hits': Number of times the record has been used;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#counters1 GslbZoneService#counters1}
  */
  readonly counters1?: string;
}

export function gslbZoneServiceDnsNsRecordListSamplingEnableToTerraform(struct?: GslbZoneServiceDnsNsRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function gslbZoneServiceDnsNsRecordListSamplingEnableToHclTerraform(struct?: GslbZoneServiceDnsNsRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceDnsNsRecordListSamplingEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GslbZoneServiceDnsNsRecordListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceDnsNsRecordListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class GslbZoneServiceDnsNsRecordListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceDnsNsRecordListSamplingEnable[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GslbZoneServiceDnsNsRecordListSamplingEnableOutputReference {
    return new GslbZoneServiceDnsNsRecordListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceDnsNsRecordListStruct {
  /**
  * Specify Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#ns_name GslbZoneService#ns_name}
  */
  readonly nsName: string;
  /**
  * Specify TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#ttl GslbZoneService#ttl}
  */
  readonly ttl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#uuid GslbZoneService#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#sampling_enable GslbZoneService#sampling_enable}
  */
  readonly samplingEnable?: GslbZoneServiceDnsNsRecordListSamplingEnable[] | cdktf.IResolvable;
}

export function gslbZoneServiceDnsNsRecordListStructToTerraform(struct?: GslbZoneServiceDnsNsRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ns_name: cdktf.stringToTerraform(struct!.nsName),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(gslbZoneServiceDnsNsRecordListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function gslbZoneServiceDnsNsRecordListStructToHclTerraform(struct?: GslbZoneServiceDnsNsRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ns_name: {
      value: cdktf.stringToHclTerraform(struct!.nsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(gslbZoneServiceDnsNsRecordListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceDnsNsRecordListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceDnsNsRecordListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GslbZoneServiceDnsNsRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsName = this._nsName;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceDnsNsRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nsName = undefined;
      this._ttl = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nsName = value.nsName;
      this._ttl = value.ttl;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // ns_name - computed: false, optional: false, required: true
  private _nsName?: string; 
  public get nsName() {
    return this.getStringAttribute('ns_name');
  }
  public set nsName(value: string) {
    this._nsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsNameInput() {
    return this._nsName;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new GslbZoneServiceDnsNsRecordListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: GslbZoneServiceDnsNsRecordListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class GslbZoneServiceDnsNsRecordListStructList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceDnsNsRecordListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GslbZoneServiceDnsNsRecordListStructOutputReference {
    return new GslbZoneServiceDnsNsRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceDnsPtrRecordListSamplingEnable {
  /**
  * 'all': all; 'hits': Number of times the record has been used;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#counters1 GslbZoneService#counters1}
  */
  readonly counters1?: string;
}

export function gslbZoneServiceDnsPtrRecordListSamplingEnableToTerraform(struct?: GslbZoneServiceDnsPtrRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function gslbZoneServiceDnsPtrRecordListSamplingEnableToHclTerraform(struct?: GslbZoneServiceDnsPtrRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceDnsPtrRecordListSamplingEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GslbZoneServiceDnsPtrRecordListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceDnsPtrRecordListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class GslbZoneServiceDnsPtrRecordListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceDnsPtrRecordListSamplingEnable[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GslbZoneServiceDnsPtrRecordListSamplingEnableOutputReference {
    return new GslbZoneServiceDnsPtrRecordListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceDnsPtrRecordListStruct {
  /**
  * Specify Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#ptr_name GslbZoneService#ptr_name}
  */
  readonly ptrName: string;
  /**
  * Specify TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#ttl GslbZoneService#ttl}
  */
  readonly ttl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#uuid GslbZoneService#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#sampling_enable GslbZoneService#sampling_enable}
  */
  readonly samplingEnable?: GslbZoneServiceDnsPtrRecordListSamplingEnable[] | cdktf.IResolvable;
}

export function gslbZoneServiceDnsPtrRecordListStructToTerraform(struct?: GslbZoneServiceDnsPtrRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ptr_name: cdktf.stringToTerraform(struct!.ptrName),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(gslbZoneServiceDnsPtrRecordListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function gslbZoneServiceDnsPtrRecordListStructToHclTerraform(struct?: GslbZoneServiceDnsPtrRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ptr_name: {
      value: cdktf.stringToHclTerraform(struct!.ptrName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(gslbZoneServiceDnsPtrRecordListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceDnsPtrRecordListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceDnsPtrRecordListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GslbZoneServiceDnsPtrRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ptrName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptrName = this._ptrName;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceDnsPtrRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ptrName = undefined;
      this._ttl = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ptrName = value.ptrName;
      this._ttl = value.ttl;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // ptr_name - computed: false, optional: false, required: true
  private _ptrName?: string; 
  public get ptrName() {
    return this.getStringAttribute('ptr_name');
  }
  public set ptrName(value: string) {
    this._ptrName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ptrNameInput() {
    return this._ptrName;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new GslbZoneServiceDnsPtrRecordListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: GslbZoneServiceDnsPtrRecordListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class GslbZoneServiceDnsPtrRecordListStructList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceDnsPtrRecordListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GslbZoneServiceDnsPtrRecordListStructOutputReference {
    return new GslbZoneServiceDnsPtrRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceDnsRecordListStruct {
  /**
  * Specify DNS Data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#data GslbZoneService#data}
  */
  readonly data?: string;
  /**
  * Specify DNS Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#type GslbZoneService#type}
  */
  readonly type: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#uuid GslbZoneService#uuid}
  */
  readonly uuid?: string;
}

export function gslbZoneServiceDnsRecordListStructToTerraform(struct?: GslbZoneServiceDnsRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    type: cdktf.numberToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function gslbZoneServiceDnsRecordListStructToHclTerraform(struct?: GslbZoneServiceDnsRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceDnsRecordListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GslbZoneServiceDnsRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceDnsRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._type = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._type = value.type;
      this._uuid = value.uuid;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // type - computed: false, optional: false, required: true
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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
}

export class GslbZoneServiceDnsRecordListStructList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceDnsRecordListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GslbZoneServiceDnsRecordListStructOutputReference {
    return new GslbZoneServiceDnsRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceDnsSrvRecordListSamplingEnable {
  /**
  * 'all': all; 'hits': Number of times the record has been used;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#counters1 GslbZoneService#counters1}
  */
  readonly counters1?: string;
}

export function gslbZoneServiceDnsSrvRecordListSamplingEnableToTerraform(struct?: GslbZoneServiceDnsSrvRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function gslbZoneServiceDnsSrvRecordListSamplingEnableToHclTerraform(struct?: GslbZoneServiceDnsSrvRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceDnsSrvRecordListSamplingEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GslbZoneServiceDnsSrvRecordListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceDnsSrvRecordListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class GslbZoneServiceDnsSrvRecordListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceDnsSrvRecordListSamplingEnable[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GslbZoneServiceDnsSrvRecordListSamplingEnableOutputReference {
    return new GslbZoneServiceDnsSrvRecordListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceDnsSrvRecordListStruct {
  /**
  * Specify Port (Port Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#port GslbZoneService#port}
  */
  readonly port: number;
  /**
  * Specify Priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#priority GslbZoneService#priority}
  */
  readonly priority?: number;
  /**
  * Specify Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#srv_name GslbZoneService#srv_name}
  */
  readonly srvName: string;
  /**
  * Specify TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#ttl GslbZoneService#ttl}
  */
  readonly ttl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#uuid GslbZoneService#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify Weight, default is 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#weight GslbZoneService#weight}
  */
  readonly weight?: number;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#sampling_enable GslbZoneService#sampling_enable}
  */
  readonly samplingEnable?: GslbZoneServiceDnsSrvRecordListSamplingEnable[] | cdktf.IResolvable;
}

export function gslbZoneServiceDnsSrvRecordListStructToTerraform(struct?: GslbZoneServiceDnsSrvRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    priority: cdktf.numberToTerraform(struct!.priority),
    srv_name: cdktf.stringToTerraform(struct!.srvName),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    weight: cdktf.numberToTerraform(struct!.weight),
    sampling_enable: cdktf.listMapper(gslbZoneServiceDnsSrvRecordListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function gslbZoneServiceDnsSrvRecordListStructToHclTerraform(struct?: GslbZoneServiceDnsSrvRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    srv_name: {
      value: cdktf.stringToHclTerraform(struct!.srvName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(gslbZoneServiceDnsSrvRecordListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceDnsSrvRecordListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceDnsSrvRecordListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GslbZoneServiceDnsSrvRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._srvName !== undefined) {
      hasAnyValues = true;
      internalValueResult.srvName = this._srvName;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceDnsSrvRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._priority = undefined;
      this._srvName = undefined;
      this._ttl = undefined;
      this._uuid = undefined;
      this._weight = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._priority = value.priority;
      this._srvName = value.srvName;
      this._ttl = value.ttl;
      this._uuid = value.uuid;
      this._weight = value.weight;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // srv_name - computed: false, optional: false, required: true
  private _srvName?: string; 
  public get srvName() {
    return this.getStringAttribute('srv_name');
  }
  public set srvName(value: string) {
    this._srvName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srvNameInput() {
    return this._srvName;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new GslbZoneServiceDnsSrvRecordListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: GslbZoneServiceDnsSrvRecordListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class GslbZoneServiceDnsSrvRecordListStructList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceDnsSrvRecordListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GslbZoneServiceDnsSrvRecordListStructOutputReference {
    return new GslbZoneServiceDnsSrvRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceDnsTxtRecordListSamplingEnable {
  /**
  * 'all': all; 'hits': Number of times the record has been used;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#counters1 GslbZoneService#counters1}
  */
  readonly counters1?: string;
}

export function gslbZoneServiceDnsTxtRecordListSamplingEnableToTerraform(struct?: GslbZoneServiceDnsTxtRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function gslbZoneServiceDnsTxtRecordListSamplingEnableToHclTerraform(struct?: GslbZoneServiceDnsTxtRecordListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceDnsTxtRecordListSamplingEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GslbZoneServiceDnsTxtRecordListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceDnsTxtRecordListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class GslbZoneServiceDnsTxtRecordListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceDnsTxtRecordListSamplingEnable[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GslbZoneServiceDnsTxtRecordListSamplingEnableOutputReference {
    return new GslbZoneServiceDnsTxtRecordListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceDnsTxtRecordListStruct {
  /**
  * Specify the Object Name for TXT Data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#record_name GslbZoneService#record_name}
  */
  readonly recordName: string;
  /**
  * Specify TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#ttl GslbZoneService#ttl}
  */
  readonly ttl?: number;
  /**
  * Specify TXT Data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#txt_data GslbZoneService#txt_data}
  */
  readonly txtData?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#uuid GslbZoneService#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#sampling_enable GslbZoneService#sampling_enable}
  */
  readonly samplingEnable?: GslbZoneServiceDnsTxtRecordListSamplingEnable[] | cdktf.IResolvable;
}

export function gslbZoneServiceDnsTxtRecordListStructToTerraform(struct?: GslbZoneServiceDnsTxtRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_name: cdktf.stringToTerraform(struct!.recordName),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    txt_data: cdktf.stringToTerraform(struct!.txtData),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(gslbZoneServiceDnsTxtRecordListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function gslbZoneServiceDnsTxtRecordListStructToHclTerraform(struct?: GslbZoneServiceDnsTxtRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    record_name: {
      value: cdktf.stringToHclTerraform(struct!.recordName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    txt_data: {
      value: cdktf.stringToHclTerraform(struct!.txtData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(gslbZoneServiceDnsTxtRecordListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceDnsTxtRecordListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceDnsTxtRecordListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GslbZoneServiceDnsTxtRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordName !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordName = this._recordName;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._txtData !== undefined) {
      hasAnyValues = true;
      internalValueResult.txtData = this._txtData;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceDnsTxtRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recordName = undefined;
      this._ttl = undefined;
      this._txtData = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recordName = value.recordName;
      this._ttl = value.ttl;
      this._txtData = value.txtData;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // record_name - computed: false, optional: false, required: true
  private _recordName?: string; 
  public get recordName() {
    return this.getStringAttribute('record_name');
  }
  public set recordName(value: string) {
    this._recordName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordNameInput() {
    return this._recordName;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // txt_data - computed: false, optional: true, required: false
  private _txtData?: string; 
  public get txtData() {
    return this.getStringAttribute('txt_data');
  }
  public set txtData(value: string) {
    this._txtData = value;
  }
  public resetTxtData() {
    this._txtData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txtDataInput() {
    return this._txtData;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new GslbZoneServiceDnsTxtRecordListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: GslbZoneServiceDnsTxtRecordListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class GslbZoneServiceDnsTxtRecordListStructList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceDnsTxtRecordListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GslbZoneServiceDnsTxtRecordListStructOutputReference {
    return new GslbZoneServiceDnsTxtRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceGeoLocationListAlias {
  /**
  * Send CNAME response for this geo-location (Specify a CNAME record)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#alias GslbZoneService#alias}
  */
  readonly alias?: string;
}

export function gslbZoneServiceGeoLocationListAliasToTerraform(struct?: GslbZoneServiceGeoLocationListAlias | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
  }
}


export function gslbZoneServiceGeoLocationListAliasToHclTerraform(struct?: GslbZoneServiceGeoLocationListAlias | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceGeoLocationListAliasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GslbZoneServiceGeoLocationListAlias | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceGeoLocationListAlias | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }
}

export class GslbZoneServiceGeoLocationListAliasList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceGeoLocationListAlias[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GslbZoneServiceGeoLocationListAliasOutputReference {
    return new GslbZoneServiceGeoLocationListAliasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceGeoLocationListStruct {
  /**
  * Action for this geo-location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#action GslbZoneService#action}
  */
  readonly action?: number;
  /**
  * 'allow': Allow query from this geo-location; 'drop': Drop query from this geo-location; 'forward': Forward packet for this geo-location; 'ignore': Send empty response to this geo-location; 'reject': Send refuse response to this geo-location;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#action_type GslbZoneService#action_type}
  */
  readonly actionType?: string;
  /**
  * 'both': Forward both query and response; 'query': Forward query from this geo-location; 'response': Forward response to this geo-location;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#forward_type GslbZoneService#forward_type}
  */
  readonly forwardType?: string;
  /**
  * Specify the geo-location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#geo_name GslbZoneService#geo_name}
  */
  readonly geoName: string;
  /**
  * Policy for this geo-location (Specify the policy name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#policy GslbZoneService#policy}
  */
  readonly policy?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#user_tag GslbZoneService#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#uuid GslbZoneService#uuid}
  */
  readonly uuid?: string;
  /**
  * alias block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#alias GslbZoneService#alias}
  */
  readonly alias?: GslbZoneServiceGeoLocationListAlias[] | cdktf.IResolvable;
}

export function gslbZoneServiceGeoLocationListStructToTerraform(struct?: GslbZoneServiceGeoLocationListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.numberToTerraform(struct!.action),
    action_type: cdktf.stringToTerraform(struct!.actionType),
    forward_type: cdktf.stringToTerraform(struct!.forwardType),
    geo_name: cdktf.stringToTerraform(struct!.geoName),
    policy: cdktf.stringToTerraform(struct!.policy),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    alias: cdktf.listMapper(gslbZoneServiceGeoLocationListAliasToTerraform, true)(struct!.alias),
  }
}


export function gslbZoneServiceGeoLocationListStructToHclTerraform(struct?: GslbZoneServiceGeoLocationListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.numberToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forward_type: {
      value: cdktf.stringToHclTerraform(struct!.forwardType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geo_name: {
      value: cdktf.stringToHclTerraform(struct!.geoName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alias: {
      value: cdktf.listMapperHcl(gslbZoneServiceGeoLocationListAliasToHclTerraform, true)(struct!.alias),
      isBlock: true,
      type: "list",
      storageClassType: "GslbZoneServiceGeoLocationListAliasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceGeoLocationListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GslbZoneServiceGeoLocationListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._forwardType !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardType = this._forwardType;
    }
    if (this._geoName !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoName = this._geoName;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._alias?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceGeoLocationListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._actionType = undefined;
      this._forwardType = undefined;
      this._geoName = undefined;
      this._policy = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._alias.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._actionType = value.actionType;
      this._forwardType = value.forwardType;
      this._geoName = value.geoName;
      this._policy = value.policy;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._alias.internalValue = value.alias;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: number; 
  public get action() {
    return this.getNumberAttribute('action');
  }
  public set action(value: number) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // forward_type - computed: false, optional: true, required: false
  private _forwardType?: string; 
  public get forwardType() {
    return this.getStringAttribute('forward_type');
  }
  public set forwardType(value: string) {
    this._forwardType = value;
  }
  public resetForwardType() {
    this._forwardType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardTypeInput() {
    return this._forwardType;
  }

  // geo_name - computed: false, optional: false, required: true
  private _geoName?: string; 
  public get geoName() {
    return this.getStringAttribute('geo_name');
  }
  public set geoName(value: string) {
    this._geoName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get geoNameInput() {
    return this._geoName;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // alias - computed: false, optional: true, required: false
  private _alias = new GslbZoneServiceGeoLocationListAliasList(this, "alias", false);
  public get alias() {
    return this._alias;
  }
  public putAlias(value: GslbZoneServiceGeoLocationListAlias[] | cdktf.IResolvable) {
    this._alias.internalValue = value;
  }
  public resetAlias() {
    this._alias.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias.internalValue;
  }
}

export class GslbZoneServiceGeoLocationListStructList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceGeoLocationListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GslbZoneServiceGeoLocationListStructOutputReference {
    return new GslbZoneServiceGeoLocationListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceHealthCheckPort {
  /**
  * Check Related Port Status (Port Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#health_check_port GslbZoneService#health_check_port}
  */
  readonly healthCheckPort?: number;
}

export function gslbZoneServiceHealthCheckPortToTerraform(struct?: GslbZoneServiceHealthCheckPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check_port: cdktf.numberToTerraform(struct!.healthCheckPort),
  }
}


export function gslbZoneServiceHealthCheckPortToHclTerraform(struct?: GslbZoneServiceHealthCheckPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check_port: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceHealthCheckPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GslbZoneServiceHealthCheckPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheckPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckPort = this._healthCheckPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceHealthCheckPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthCheckPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthCheckPort = value.healthCheckPort;
    }
  }

  // health_check_port - computed: false, optional: true, required: false
  private _healthCheckPort?: number; 
  public get healthCheckPort() {
    return this.getNumberAttribute('health_check_port');
  }
  public set healthCheckPort(value: number) {
    this._healthCheckPort = value;
  }
  public resetHealthCheckPort() {
    this._healthCheckPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPortInput() {
    return this._healthCheckPort;
  }
}

export class GslbZoneServiceHealthCheckPortList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceHealthCheckPort[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GslbZoneServiceHealthCheckPortOutputReference {
    return new GslbZoneServiceHealthCheckPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbZoneServiceSamplingEnable {
  /**
  * 'all': all; 'received-query': Number of DNS queries received for the service; 'sent-response': Number of DNS replies sent to clients for the service; 'proxy-mode-response': Number of DNS replies sent to clients by the ACOS device as a DNS proxy for the service; 'cache-mode-response': Number of cached DNS replies sent to clients by the ACOS device for the service. (This statistic applies only if the DNS cache; 'server-mode-response': Number of DNS replies sent to clients by the ACOS device as a DNS server for the service. (This statistic applies only if the D; 'sticky-mode-response': Number of DNS replies sent to clients by the ACOS device to keep the clients on the same site. (This statistic applies only if; 'backup-mode-response': help Number of DNS replies sent to clients by the ACOS device in backup mode;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#counters1 GslbZoneService#counters1}
  */
  readonly counters1?: string;
}

export function gslbZoneServiceSamplingEnableToTerraform(struct?: GslbZoneServiceSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function gslbZoneServiceSamplingEnableToHclTerraform(struct?: GslbZoneServiceSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbZoneServiceSamplingEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GslbZoneServiceSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbZoneServiceSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class GslbZoneServiceSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : GslbZoneServiceSamplingEnable[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GslbZoneServiceSamplingEnableOutputReference {
    return new GslbZoneServiceSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service thunder_gslb_zone_service}
*/
export class GslbZoneService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_zone_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbZoneService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbZoneService to import
  * @param importFromId The id of the existing GslbZoneService that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbZoneService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_zone_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_zone_service thunder_gslb_zone_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbZoneServiceConfig
  */
  public constructor(scope: Construct, id: string, config: GslbZoneServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_zone_service',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._disable = config.disable;
    this._forwardType = config.forwardType;
    this._healthCheckGateway = config.healthCheckGateway;
    this._id = config.id;
    this._name = config.name;
    this._policy = config.policy;
    this._serviceName = config.serviceName;
    this._servicePort = config.servicePort;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._dnsARecord.internalValue = config.dnsARecord;
    this._dnsCaaRecordList.internalValue = config.dnsCaaRecordList;
    this._dnsCnameRecordList.internalValue = config.dnsCnameRecordList;
    this._dnsMxRecordList.internalValue = config.dnsMxRecordList;
    this._dnsNaptrRecordList.internalValue = config.dnsNaptrRecordList;
    this._dnsNsRecordList.internalValue = config.dnsNsRecordList;
    this._dnsPtrRecordList.internalValue = config.dnsPtrRecordList;
    this._dnsRecordList.internalValue = config.dnsRecordList;
    this._dnsSrvRecordList.internalValue = config.dnsSrvRecordList;
    this._dnsTxtRecordList.internalValue = config.dnsTxtRecordList;
    this._geoLocationList.internalValue = config.geoLocationList;
    this._healthCheckPort.internalValue = config.healthCheckPort;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // forward_type - computed: false, optional: true, required: false
  private _forwardType?: string; 
  public get forwardType() {
    return this.getStringAttribute('forward_type');
  }
  public set forwardType(value: string) {
    this._forwardType = value;
  }
  public resetForwardType() {
    this._forwardType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardTypeInput() {
    return this._forwardType;
  }

  // health_check_gateway - computed: false, optional: true, required: false
  private _healthCheckGateway?: string; 
  public get healthCheckGateway() {
    return this.getStringAttribute('health_check_gateway');
  }
  public set healthCheckGateway(value: string) {
    this._healthCheckGateway = value;
  }
  public resetHealthCheckGateway() {
    this._healthCheckGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckGatewayInput() {
    return this._healthCheckGateway;
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

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // service_port - computed: false, optional: false, required: true
  private _servicePort?: number; 
  public get servicePort() {
    return this.getNumberAttribute('service_port');
  }
  public set servicePort(value: number) {
    this._servicePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortInput() {
    return this._servicePort;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // dns_a_record - computed: false, optional: true, required: false
  private _dnsARecord = new GslbZoneServiceDnsARecordOutputReference(this, "dns_a_record");
  public get dnsARecord() {
    return this._dnsARecord;
  }
  public putDnsARecord(value: GslbZoneServiceDnsARecord) {
    this._dnsARecord.internalValue = value;
  }
  public resetDnsARecord() {
    this._dnsARecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsARecordInput() {
    return this._dnsARecord.internalValue;
  }

  // dns_caa_record_list - computed: false, optional: true, required: false
  private _dnsCaaRecordList = new GslbZoneServiceDnsCaaRecordListStructList(this, "dns_caa_record_list", false);
  public get dnsCaaRecordList() {
    return this._dnsCaaRecordList;
  }
  public putDnsCaaRecordList(value: GslbZoneServiceDnsCaaRecordListStruct[] | cdktf.IResolvable) {
    this._dnsCaaRecordList.internalValue = value;
  }
  public resetDnsCaaRecordList() {
    this._dnsCaaRecordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCaaRecordListInput() {
    return this._dnsCaaRecordList.internalValue;
  }

  // dns_cname_record_list - computed: false, optional: true, required: false
  private _dnsCnameRecordList = new GslbZoneServiceDnsCnameRecordListStructList(this, "dns_cname_record_list", false);
  public get dnsCnameRecordList() {
    return this._dnsCnameRecordList;
  }
  public putDnsCnameRecordList(value: GslbZoneServiceDnsCnameRecordListStruct[] | cdktf.IResolvable) {
    this._dnsCnameRecordList.internalValue = value;
  }
  public resetDnsCnameRecordList() {
    this._dnsCnameRecordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCnameRecordListInput() {
    return this._dnsCnameRecordList.internalValue;
  }

  // dns_mx_record_list - computed: false, optional: true, required: false
  private _dnsMxRecordList = new GslbZoneServiceDnsMxRecordListStructList(this, "dns_mx_record_list", false);
  public get dnsMxRecordList() {
    return this._dnsMxRecordList;
  }
  public putDnsMxRecordList(value: GslbZoneServiceDnsMxRecordListStruct[] | cdktf.IResolvable) {
    this._dnsMxRecordList.internalValue = value;
  }
  public resetDnsMxRecordList() {
    this._dnsMxRecordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsMxRecordListInput() {
    return this._dnsMxRecordList.internalValue;
  }

  // dns_naptr_record_list - computed: false, optional: true, required: false
  private _dnsNaptrRecordList = new GslbZoneServiceDnsNaptrRecordListStructList(this, "dns_naptr_record_list", false);
  public get dnsNaptrRecordList() {
    return this._dnsNaptrRecordList;
  }
  public putDnsNaptrRecordList(value: GslbZoneServiceDnsNaptrRecordListStruct[] | cdktf.IResolvable) {
    this._dnsNaptrRecordList.internalValue = value;
  }
  public resetDnsNaptrRecordList() {
    this._dnsNaptrRecordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNaptrRecordListInput() {
    return this._dnsNaptrRecordList.internalValue;
  }

  // dns_ns_record_list - computed: false, optional: true, required: false
  private _dnsNsRecordList = new GslbZoneServiceDnsNsRecordListStructList(this, "dns_ns_record_list", false);
  public get dnsNsRecordList() {
    return this._dnsNsRecordList;
  }
  public putDnsNsRecordList(value: GslbZoneServiceDnsNsRecordListStruct[] | cdktf.IResolvable) {
    this._dnsNsRecordList.internalValue = value;
  }
  public resetDnsNsRecordList() {
    this._dnsNsRecordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNsRecordListInput() {
    return this._dnsNsRecordList.internalValue;
  }

  // dns_ptr_record_list - computed: false, optional: true, required: false
  private _dnsPtrRecordList = new GslbZoneServiceDnsPtrRecordListStructList(this, "dns_ptr_record_list", false);
  public get dnsPtrRecordList() {
    return this._dnsPtrRecordList;
  }
  public putDnsPtrRecordList(value: GslbZoneServiceDnsPtrRecordListStruct[] | cdktf.IResolvable) {
    this._dnsPtrRecordList.internalValue = value;
  }
  public resetDnsPtrRecordList() {
    this._dnsPtrRecordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPtrRecordListInput() {
    return this._dnsPtrRecordList.internalValue;
  }

  // dns_record_list - computed: false, optional: true, required: false
  private _dnsRecordList = new GslbZoneServiceDnsRecordListStructList(this, "dns_record_list", false);
  public get dnsRecordList() {
    return this._dnsRecordList;
  }
  public putDnsRecordList(value: GslbZoneServiceDnsRecordListStruct[] | cdktf.IResolvable) {
    this._dnsRecordList.internalValue = value;
  }
  public resetDnsRecordList() {
    this._dnsRecordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecordListInput() {
    return this._dnsRecordList.internalValue;
  }

  // dns_srv_record_list - computed: false, optional: true, required: false
  private _dnsSrvRecordList = new GslbZoneServiceDnsSrvRecordListStructList(this, "dns_srv_record_list", false);
  public get dnsSrvRecordList() {
    return this._dnsSrvRecordList;
  }
  public putDnsSrvRecordList(value: GslbZoneServiceDnsSrvRecordListStruct[] | cdktf.IResolvable) {
    this._dnsSrvRecordList.internalValue = value;
  }
  public resetDnsSrvRecordList() {
    this._dnsSrvRecordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSrvRecordListInput() {
    return this._dnsSrvRecordList.internalValue;
  }

  // dns_txt_record_list - computed: false, optional: true, required: false
  private _dnsTxtRecordList = new GslbZoneServiceDnsTxtRecordListStructList(this, "dns_txt_record_list", false);
  public get dnsTxtRecordList() {
    return this._dnsTxtRecordList;
  }
  public putDnsTxtRecordList(value: GslbZoneServiceDnsTxtRecordListStruct[] | cdktf.IResolvable) {
    this._dnsTxtRecordList.internalValue = value;
  }
  public resetDnsTxtRecordList() {
    this._dnsTxtRecordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTxtRecordListInput() {
    return this._dnsTxtRecordList.internalValue;
  }

  // geo_location_list - computed: false, optional: true, required: false
  private _geoLocationList = new GslbZoneServiceGeoLocationListStructList(this, "geo_location_list", false);
  public get geoLocationList() {
    return this._geoLocationList;
  }
  public putGeoLocationList(value: GslbZoneServiceGeoLocationListStruct[] | cdktf.IResolvable) {
    this._geoLocationList.internalValue = value;
  }
  public resetGeoLocationList() {
    this._geoLocationList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationListInput() {
    return this._geoLocationList.internalValue;
  }

  // health_check_port - computed: false, optional: true, required: false
  private _healthCheckPort = new GslbZoneServiceHealthCheckPortList(this, "health_check_port", false);
  public get healthCheckPort() {
    return this._healthCheckPort;
  }
  public putHealthCheckPort(value: GslbZoneServiceHealthCheckPort[] | cdktf.IResolvable) {
    this._healthCheckPort.internalValue = value;
  }
  public resetHealthCheckPort() {
    this._healthCheckPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPortInput() {
    return this._healthCheckPort.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new GslbZoneServiceSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: GslbZoneServiceSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      disable: cdktf.numberToTerraform(this._disable),
      forward_type: cdktf.stringToTerraform(this._forwardType),
      health_check_gateway: cdktf.stringToTerraform(this._healthCheckGateway),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      policy: cdktf.stringToTerraform(this._policy),
      service_name: cdktf.stringToTerraform(this._serviceName),
      service_port: cdktf.numberToTerraform(this._servicePort),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      dns_a_record: gslbZoneServiceDnsARecordToTerraform(this._dnsARecord.internalValue),
      dns_caa_record_list: cdktf.listMapper(gslbZoneServiceDnsCaaRecordListStructToTerraform, true)(this._dnsCaaRecordList.internalValue),
      dns_cname_record_list: cdktf.listMapper(gslbZoneServiceDnsCnameRecordListStructToTerraform, true)(this._dnsCnameRecordList.internalValue),
      dns_mx_record_list: cdktf.listMapper(gslbZoneServiceDnsMxRecordListStructToTerraform, true)(this._dnsMxRecordList.internalValue),
      dns_naptr_record_list: cdktf.listMapper(gslbZoneServiceDnsNaptrRecordListStructToTerraform, true)(this._dnsNaptrRecordList.internalValue),
      dns_ns_record_list: cdktf.listMapper(gslbZoneServiceDnsNsRecordListStructToTerraform, true)(this._dnsNsRecordList.internalValue),
      dns_ptr_record_list: cdktf.listMapper(gslbZoneServiceDnsPtrRecordListStructToTerraform, true)(this._dnsPtrRecordList.internalValue),
      dns_record_list: cdktf.listMapper(gslbZoneServiceDnsRecordListStructToTerraform, true)(this._dnsRecordList.internalValue),
      dns_srv_record_list: cdktf.listMapper(gslbZoneServiceDnsSrvRecordListStructToTerraform, true)(this._dnsSrvRecordList.internalValue),
      dns_txt_record_list: cdktf.listMapper(gslbZoneServiceDnsTxtRecordListStructToTerraform, true)(this._dnsTxtRecordList.internalValue),
      geo_location_list: cdktf.listMapper(gslbZoneServiceGeoLocationListStructToTerraform, true)(this._geoLocationList.internalValue),
      health_check_port: cdktf.listMapper(gslbZoneServiceHealthCheckPortToTerraform, true)(this._healthCheckPort.internalValue),
      sampling_enable: cdktf.listMapper(gslbZoneServiceSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
      disable: {
        value: cdktf.numberToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_type: {
        value: cdktf.stringToHclTerraform(this._forwardType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_gateway: {
        value: cdktf.stringToHclTerraform(this._healthCheckGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_port: {
        value: cdktf.numberToHclTerraform(this._servicePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_a_record: {
        value: gslbZoneServiceDnsARecordToHclTerraform(this._dnsARecord.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbZoneServiceDnsARecordList",
      },
      dns_caa_record_list: {
        value: cdktf.listMapperHcl(gslbZoneServiceDnsCaaRecordListStructToHclTerraform, true)(this._dnsCaaRecordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbZoneServiceDnsCaaRecordListStructList",
      },
      dns_cname_record_list: {
        value: cdktf.listMapperHcl(gslbZoneServiceDnsCnameRecordListStructToHclTerraform, true)(this._dnsCnameRecordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbZoneServiceDnsCnameRecordListStructList",
      },
      dns_mx_record_list: {
        value: cdktf.listMapperHcl(gslbZoneServiceDnsMxRecordListStructToHclTerraform, true)(this._dnsMxRecordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbZoneServiceDnsMxRecordListStructList",
      },
      dns_naptr_record_list: {
        value: cdktf.listMapperHcl(gslbZoneServiceDnsNaptrRecordListStructToHclTerraform, true)(this._dnsNaptrRecordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbZoneServiceDnsNaptrRecordListStructList",
      },
      dns_ns_record_list: {
        value: cdktf.listMapperHcl(gslbZoneServiceDnsNsRecordListStructToHclTerraform, true)(this._dnsNsRecordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbZoneServiceDnsNsRecordListStructList",
      },
      dns_ptr_record_list: {
        value: cdktf.listMapperHcl(gslbZoneServiceDnsPtrRecordListStructToHclTerraform, true)(this._dnsPtrRecordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbZoneServiceDnsPtrRecordListStructList",
      },
      dns_record_list: {
        value: cdktf.listMapperHcl(gslbZoneServiceDnsRecordListStructToHclTerraform, true)(this._dnsRecordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbZoneServiceDnsRecordListStructList",
      },
      dns_srv_record_list: {
        value: cdktf.listMapperHcl(gslbZoneServiceDnsSrvRecordListStructToHclTerraform, true)(this._dnsSrvRecordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbZoneServiceDnsSrvRecordListStructList",
      },
      dns_txt_record_list: {
        value: cdktf.listMapperHcl(gslbZoneServiceDnsTxtRecordListStructToHclTerraform, true)(this._dnsTxtRecordList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbZoneServiceDnsTxtRecordListStructList",
      },
      geo_location_list: {
        value: cdktf.listMapperHcl(gslbZoneServiceGeoLocationListStructToHclTerraform, true)(this._geoLocationList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbZoneServiceGeoLocationListStructList",
      },
      health_check_port: {
        value: cdktf.listMapperHcl(gslbZoneServiceHealthCheckPortToHclTerraform, true)(this._healthCheckPort.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbZoneServiceHealthCheckPortList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(gslbZoneServiceSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbZoneServiceSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
