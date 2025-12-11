// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemLogforwardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#agg_archive_types SystemLogforward#agg_archive_types}
  */
  readonly aggArchiveTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#agg_data_end_time SystemLogforward#agg_data_end_time}
  */
  readonly aggDataEndTime?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#agg_data_start_time SystemLogforward#agg_data_start_time}
  */
  readonly aggDataStartTime?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#agg_logtypes SystemLogforward#agg_logtypes}
  */
  readonly aggLogtypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#agg_password SystemLogforward#agg_password}
  */
  readonly aggPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#agg_schedule SystemLogforward#agg_schedule}
  */
  readonly aggSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#agg_time SystemLogforward#agg_time}
  */
  readonly aggTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#agg_user SystemLogforward#agg_user}
  */
  readonly aggUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#dynamic_sort_subtable SystemLogforward#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#fosid SystemLogforward#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#fwd_archive_types SystemLogforward#fwd_archive_types}
  */
  readonly fwdArchiveTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#fwd_archives SystemLogforward#fwd_archives}
  */
  readonly fwdArchives?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#fwd_compression SystemLogforward#fwd_compression}
  */
  readonly fwdCompression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#fwd_facility SystemLogforward#fwd_facility}
  */
  readonly fwdFacility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#fwd_ha_bind_vip SystemLogforward#fwd_ha_bind_vip}
  */
  readonly fwdHaBindVip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#fwd_log_source_ip SystemLogforward#fwd_log_source_ip}
  */
  readonly fwdLogSourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#fwd_max_delay SystemLogforward#fwd_max_delay}
  */
  readonly fwdMaxDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#fwd_output_plugin_id SystemLogforward#fwd_output_plugin_id}
  */
  readonly fwdOutputPluginId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#fwd_reliable SystemLogforward#fwd_reliable}
  */
  readonly fwdReliable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#fwd_secure SystemLogforward#fwd_secure}
  */
  readonly fwdSecure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#fwd_server_type SystemLogforward#fwd_server_type}
  */
  readonly fwdServerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#fwd_syslog_decode_b64 SystemLogforward#fwd_syslog_decode_b64}
  */
  readonly fwdSyslogDecodeB64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#fwd_syslog_enrich_cve SystemLogforward#fwd_syslog_enrich_cve}
  */
  readonly fwdSyslogEnrichCve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#fwd_syslog_format SystemLogforward#fwd_syslog_format}
  */
  readonly fwdSyslogFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#fwd_syslog_transparent SystemLogforward#fwd_syslog_transparent}
  */
  readonly fwdSyslogTransparent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#id SystemLogforward#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#log_field_exclusion_status SystemLogforward#log_field_exclusion_status}
  */
  readonly logFieldExclusionStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#log_filter_logic SystemLogforward#log_filter_logic}
  */
  readonly logFilterLogic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#log_filter_status SystemLogforward#log_filter_status}
  */
  readonly logFilterStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#log_masking_custom_priority SystemLogforward#log_masking_custom_priority}
  */
  readonly logMaskingCustomPriority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#log_masking_fields SystemLogforward#log_masking_fields}
  */
  readonly logMaskingFields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#log_masking_key SystemLogforward#log_masking_key}
  */
  readonly logMaskingKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#log_masking_status SystemLogforward#log_masking_status}
  */
  readonly logMaskingStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#mode SystemLogforward#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#pcapurl_domain_ip SystemLogforward#pcapurl_domain_ip}
  */
  readonly pcapurlDomainIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#pcapurl_enrich SystemLogforward#pcapurl_enrich}
  */
  readonly pcapurlEnrich?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#peer_cert_cn SystemLogforward#peer_cert_cn}
  */
  readonly peerCertCn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#proxy_service SystemLogforward#proxy_service}
  */
  readonly proxyService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#proxy_service_priority SystemLogforward#proxy_service_priority}
  */
  readonly proxyServicePriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#server_addr SystemLogforward#server_addr}
  */
  readonly serverAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#server_device SystemLogforward#server_device}
  */
  readonly serverDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#server_name SystemLogforward#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#server_port SystemLogforward#server_port}
  */
  readonly serverPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#signature SystemLogforward#signature}
  */
  readonly signature?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#sync_metadata SystemLogforward#sync_metadata}
  */
  readonly syncMetadata?: string[];
  /**
  * device_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#device_filter SystemLogforward#device_filter}
  */
  readonly deviceFilter?: SystemLogforwardDeviceFilter[] | cdktf.IResolvable;
  /**
  * log_field_exclusion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#log_field_exclusion SystemLogforward#log_field_exclusion}
  */
  readonly logFieldExclusion?: SystemLogforwardLogFieldExclusion[] | cdktf.IResolvable;
  /**
  * log_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#log_filter SystemLogforward#log_filter}
  */
  readonly logFilter?: SystemLogforwardLogFilter[] | cdktf.IResolvable;
  /**
  * log_masking_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#log_masking_custom SystemLogforward#log_masking_custom}
  */
  readonly logMaskingCustom?: SystemLogforwardLogMaskingCustom[] | cdktf.IResolvable;
}
export interface SystemLogforwardDeviceFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#action SystemLogforward#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#adom SystemLogforward#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#device SystemLogforward#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#id SystemLogforward#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function systemLogforwardDeviceFilterToTerraform(struct?: SystemLogforwardDeviceFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    adom: cdktf.stringToTerraform(struct!.adom),
    device: cdktf.stringToTerraform(struct!.device),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function systemLogforwardDeviceFilterToHclTerraform(struct?: SystemLogforwardDeviceFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adom: {
      value: cdktf.stringToHclTerraform(struct!.adom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemLogforwardDeviceFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemLogforwardDeviceFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._adom !== undefined) {
      hasAnyValues = true;
      internalValueResult.adom = this._adom;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemLogforwardDeviceFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._adom = undefined;
      this._device = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._adom = value.adom;
      this._device = value.device;
      this._id = value.id;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class SystemLogforwardDeviceFilterList extends cdktf.ComplexList {
  public internalValue? : SystemLogforwardDeviceFilter[] | cdktf.IResolvable

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
  public get(index: number): SystemLogforwardDeviceFilterOutputReference {
    return new SystemLogforwardDeviceFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemLogforwardLogFieldExclusion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#dev_type SystemLogforward#dev_type}
  */
  readonly devType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#field_list SystemLogforward#field_list}
  */
  readonly fieldList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#id SystemLogforward#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#log_type SystemLogforward#log_type}
  */
  readonly logType?: string;
}

export function systemLogforwardLogFieldExclusionToTerraform(struct?: SystemLogforwardLogFieldExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dev_type: cdktf.stringToTerraform(struct!.devType),
    field_list: cdktf.stringToTerraform(struct!.fieldList),
    id: cdktf.numberToTerraform(struct!.id),
    log_type: cdktf.stringToTerraform(struct!.logType),
  }
}


export function systemLogforwardLogFieldExclusionToHclTerraform(struct?: SystemLogforwardLogFieldExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dev_type: {
      value: cdktf.stringToHclTerraform(struct!.devType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_list: {
      value: cdktf.stringToHclTerraform(struct!.fieldList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_type: {
      value: cdktf.stringToHclTerraform(struct!.logType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemLogforwardLogFieldExclusionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemLogforwardLogFieldExclusion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devType !== undefined) {
      hasAnyValues = true;
      internalValueResult.devType = this._devType;
    }
    if (this._fieldList !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldList = this._fieldList;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemLogforwardLogFieldExclusion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._devType = undefined;
      this._fieldList = undefined;
      this._id = undefined;
      this._logType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._devType = value.devType;
      this._fieldList = value.fieldList;
      this._id = value.id;
      this._logType = value.logType;
    }
  }

  // dev_type - computed: true, optional: true, required: false
  private _devType?: string; 
  public get devType() {
    return this.getStringAttribute('dev_type');
  }
  public set devType(value: string) {
    this._devType = value;
  }
  public resetDevType() {
    this._devType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devTypeInput() {
    return this._devType;
  }

  // field_list - computed: false, optional: true, required: false
  private _fieldList?: string; 
  public get fieldList() {
    return this.getStringAttribute('field_list');
  }
  public set fieldList(value: string) {
    this._fieldList = value;
  }
  public resetFieldList() {
    this._fieldList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldListInput() {
    return this._fieldList;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // log_type - computed: true, optional: true, required: false
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }
}

export class SystemLogforwardLogFieldExclusionList extends cdktf.ComplexList {
  public internalValue? : SystemLogforwardLogFieldExclusion[] | cdktf.IResolvable

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
  public get(index: number): SystemLogforwardLogFieldExclusionOutputReference {
    return new SystemLogforwardLogFieldExclusionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemLogforwardLogFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#field SystemLogforward#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#id SystemLogforward#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#oper SystemLogforward#oper}
  */
  readonly oper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#value SystemLogforward#value}
  */
  readonly value?: string;
}

export function systemLogforwardLogFilterToTerraform(struct?: SystemLogforwardLogFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    id: cdktf.numberToTerraform(struct!.id),
    oper: cdktf.stringToTerraform(struct!.oper),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function systemLogforwardLogFilterToHclTerraform(struct?: SystemLogforwardLogFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    oper: {
      value: cdktf.stringToHclTerraform(struct!.oper),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemLogforwardLogFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemLogforwardLogFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._oper !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemLogforwardLogFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._id = undefined;
      this._oper = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._id = value.id;
      this._oper = value.oper;
      this._value = value.value;
    }
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // oper - computed: true, optional: true, required: false
  private _oper?: string; 
  public get oper() {
    return this.getStringAttribute('oper');
  }
  public set oper(value: string) {
    this._oper = value;
  }
  public resetOper() {
    this._oper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SystemLogforwardLogFilterList extends cdktf.ComplexList {
  public internalValue? : SystemLogforwardLogFilter[] | cdktf.IResolvable

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
  public get(index: number): SystemLogforwardLogFilterOutputReference {
    return new SystemLogforwardLogFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemLogforwardLogMaskingCustom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#field_name SystemLogforward#field_name}
  */
  readonly fieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#field_type SystemLogforward#field_type}
  */
  readonly fieldType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#id SystemLogforward#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function systemLogforwardLogMaskingCustomToTerraform(struct?: SystemLogforwardLogMaskingCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    field_type: cdktf.stringToTerraform(struct!.fieldType),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function systemLogforwardLogMaskingCustomToHclTerraform(struct?: SystemLogforwardLogMaskingCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_type: {
      value: cdktf.stringToHclTerraform(struct!.fieldType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemLogforwardLogMaskingCustomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemLogforwardLogMaskingCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._fieldType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldType = this._fieldType;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemLogforwardLogMaskingCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._fieldType = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._fieldType = value.fieldType;
      this._id = value.id;
    }
  }

  // field_name - computed: false, optional: true, required: false
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  public resetFieldName() {
    this._fieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // field_type - computed: true, optional: true, required: false
  private _fieldType?: string; 
  public get fieldType() {
    return this.getStringAttribute('field_type');
  }
  public set fieldType(value: string) {
    this._fieldType = value;
  }
  public resetFieldType() {
    this._fieldType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTypeInput() {
    return this._fieldType;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class SystemLogforwardLogMaskingCustomList extends cdktf.ComplexList {
  public internalValue? : SystemLogforwardLogMaskingCustom[] | cdktf.IResolvable

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
  public get(index: number): SystemLogforwardLogMaskingCustomOutputReference {
    return new SystemLogforwardLogMaskingCustomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward fortianalyzer_system_logforward}
*/
export class SystemLogforward extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_system_logforward";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemLogforward resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemLogforward to import
  * @param importFromId The id of the existing SystemLogforward that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemLogforward to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_system_logforward", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_logforward fortianalyzer_system_logforward} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemLogforwardConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemLogforwardConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_system_logforward',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggArchiveTypes = config.aggArchiveTypes;
    this._aggDataEndTime = config.aggDataEndTime;
    this._aggDataStartTime = config.aggDataStartTime;
    this._aggLogtypes = config.aggLogtypes;
    this._aggPassword = config.aggPassword;
    this._aggSchedule = config.aggSchedule;
    this._aggTime = config.aggTime;
    this._aggUser = config.aggUser;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._fosid = config.fosid;
    this._fwdArchiveTypes = config.fwdArchiveTypes;
    this._fwdArchives = config.fwdArchives;
    this._fwdCompression = config.fwdCompression;
    this._fwdFacility = config.fwdFacility;
    this._fwdHaBindVip = config.fwdHaBindVip;
    this._fwdLogSourceIp = config.fwdLogSourceIp;
    this._fwdMaxDelay = config.fwdMaxDelay;
    this._fwdOutputPluginId = config.fwdOutputPluginId;
    this._fwdReliable = config.fwdReliable;
    this._fwdSecure = config.fwdSecure;
    this._fwdServerType = config.fwdServerType;
    this._fwdSyslogDecodeB64 = config.fwdSyslogDecodeB64;
    this._fwdSyslogEnrichCve = config.fwdSyslogEnrichCve;
    this._fwdSyslogFormat = config.fwdSyslogFormat;
    this._fwdSyslogTransparent = config.fwdSyslogTransparent;
    this._id = config.id;
    this._logFieldExclusionStatus = config.logFieldExclusionStatus;
    this._logFilterLogic = config.logFilterLogic;
    this._logFilterStatus = config.logFilterStatus;
    this._logMaskingCustomPriority = config.logMaskingCustomPriority;
    this._logMaskingFields = config.logMaskingFields;
    this._logMaskingKey = config.logMaskingKey;
    this._logMaskingStatus = config.logMaskingStatus;
    this._mode = config.mode;
    this._pcapurlDomainIp = config.pcapurlDomainIp;
    this._pcapurlEnrich = config.pcapurlEnrich;
    this._peerCertCn = config.peerCertCn;
    this._proxyService = config.proxyService;
    this._proxyServicePriority = config.proxyServicePriority;
    this._serverAddr = config.serverAddr;
    this._serverDevice = config.serverDevice;
    this._serverName = config.serverName;
    this._serverPort = config.serverPort;
    this._signature = config.signature;
    this._syncMetadata = config.syncMetadata;
    this._deviceFilter.internalValue = config.deviceFilter;
    this._logFieldExclusion.internalValue = config.logFieldExclusion;
    this._logFilter.internalValue = config.logFilter;
    this._logMaskingCustom.internalValue = config.logMaskingCustom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agg_archive_types - computed: true, optional: true, required: false
  private _aggArchiveTypes?: string[]; 
  public get aggArchiveTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('agg_archive_types'));
  }
  public set aggArchiveTypes(value: string[]) {
    this._aggArchiveTypes = value;
  }
  public resetAggArchiveTypes() {
    this._aggArchiveTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggArchiveTypesInput() {
    return this._aggArchiveTypes;
  }

  // agg_data_end_time - computed: true, optional: true, required: false
  private _aggDataEndTime?: string[]; 
  public get aggDataEndTime() {
    return cdktf.Fn.tolist(this.getListAttribute('agg_data_end_time'));
  }
  public set aggDataEndTime(value: string[]) {
    this._aggDataEndTime = value;
  }
  public resetAggDataEndTime() {
    this._aggDataEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggDataEndTimeInput() {
    return this._aggDataEndTime;
  }

  // agg_data_start_time - computed: true, optional: true, required: false
  private _aggDataStartTime?: string[]; 
  public get aggDataStartTime() {
    return cdktf.Fn.tolist(this.getListAttribute('agg_data_start_time'));
  }
  public set aggDataStartTime(value: string[]) {
    this._aggDataStartTime = value;
  }
  public resetAggDataStartTime() {
    this._aggDataStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggDataStartTimeInput() {
    return this._aggDataStartTime;
  }

  // agg_logtypes - computed: true, optional: true, required: false
  private _aggLogtypes?: string[]; 
  public get aggLogtypes() {
    return cdktf.Fn.tolist(this.getListAttribute('agg_logtypes'));
  }
  public set aggLogtypes(value: string[]) {
    this._aggLogtypes = value;
  }
  public resetAggLogtypes() {
    this._aggLogtypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggLogtypesInput() {
    return this._aggLogtypes;
  }

  // agg_password - computed: true, optional: true, required: false
  private _aggPassword?: string[]; 
  public get aggPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('agg_password'));
  }
  public set aggPassword(value: string[]) {
    this._aggPassword = value;
  }
  public resetAggPassword() {
    this._aggPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggPasswordInput() {
    return this._aggPassword;
  }

  // agg_schedule - computed: true, optional: true, required: false
  private _aggSchedule?: string; 
  public get aggSchedule() {
    return this.getStringAttribute('agg_schedule');
  }
  public set aggSchedule(value: string) {
    this._aggSchedule = value;
  }
  public resetAggSchedule() {
    this._aggSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggScheduleInput() {
    return this._aggSchedule;
  }

  // agg_time - computed: false, optional: true, required: false
  private _aggTime?: number; 
  public get aggTime() {
    return this.getNumberAttribute('agg_time');
  }
  public set aggTime(value: number) {
    this._aggTime = value;
  }
  public resetAggTime() {
    this._aggTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggTimeInput() {
    return this._aggTime;
  }

  // agg_user - computed: false, optional: true, required: false
  private _aggUser?: string; 
  public get aggUser() {
    return this.getStringAttribute('agg_user');
  }
  public set aggUser(value: string) {
    this._aggUser = value;
  }
  public resetAggUser() {
    this._aggUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggUserInput() {
    return this._aggUser;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
  }

  // fwd_archive_types - computed: true, optional: true, required: false
  private _fwdArchiveTypes?: string[]; 
  public get fwdArchiveTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('fwd_archive_types'));
  }
  public set fwdArchiveTypes(value: string[]) {
    this._fwdArchiveTypes = value;
  }
  public resetFwdArchiveTypes() {
    this._fwdArchiveTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdArchiveTypesInput() {
    return this._fwdArchiveTypes;
  }

  // fwd_archives - computed: true, optional: true, required: false
  private _fwdArchives?: string; 
  public get fwdArchives() {
    return this.getStringAttribute('fwd_archives');
  }
  public set fwdArchives(value: string) {
    this._fwdArchives = value;
  }
  public resetFwdArchives() {
    this._fwdArchives = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdArchivesInput() {
    return this._fwdArchives;
  }

  // fwd_compression - computed: true, optional: true, required: false
  private _fwdCompression?: string; 
  public get fwdCompression() {
    return this.getStringAttribute('fwd_compression');
  }
  public set fwdCompression(value: string) {
    this._fwdCompression = value;
  }
  public resetFwdCompression() {
    this._fwdCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdCompressionInput() {
    return this._fwdCompression;
  }

  // fwd_facility - computed: true, optional: true, required: false
  private _fwdFacility?: string; 
  public get fwdFacility() {
    return this.getStringAttribute('fwd_facility');
  }
  public set fwdFacility(value: string) {
    this._fwdFacility = value;
  }
  public resetFwdFacility() {
    this._fwdFacility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdFacilityInput() {
    return this._fwdFacility;
  }

  // fwd_ha_bind_vip - computed: true, optional: true, required: false
  private _fwdHaBindVip?: string; 
  public get fwdHaBindVip() {
    return this.getStringAttribute('fwd_ha_bind_vip');
  }
  public set fwdHaBindVip(value: string) {
    this._fwdHaBindVip = value;
  }
  public resetFwdHaBindVip() {
    this._fwdHaBindVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdHaBindVipInput() {
    return this._fwdHaBindVip;
  }

  // fwd_log_source_ip - computed: true, optional: true, required: false
  private _fwdLogSourceIp?: string; 
  public get fwdLogSourceIp() {
    return this.getStringAttribute('fwd_log_source_ip');
  }
  public set fwdLogSourceIp(value: string) {
    this._fwdLogSourceIp = value;
  }
  public resetFwdLogSourceIp() {
    this._fwdLogSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdLogSourceIpInput() {
    return this._fwdLogSourceIp;
  }

  // fwd_max_delay - computed: true, optional: true, required: false
  private _fwdMaxDelay?: string; 
  public get fwdMaxDelay() {
    return this.getStringAttribute('fwd_max_delay');
  }
  public set fwdMaxDelay(value: string) {
    this._fwdMaxDelay = value;
  }
  public resetFwdMaxDelay() {
    this._fwdMaxDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdMaxDelayInput() {
    return this._fwdMaxDelay;
  }

  // fwd_output_plugin_id - computed: false, optional: true, required: false
  private _fwdOutputPluginId?: string; 
  public get fwdOutputPluginId() {
    return this.getStringAttribute('fwd_output_plugin_id');
  }
  public set fwdOutputPluginId(value: string) {
    this._fwdOutputPluginId = value;
  }
  public resetFwdOutputPluginId() {
    this._fwdOutputPluginId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdOutputPluginIdInput() {
    return this._fwdOutputPluginId;
  }

  // fwd_reliable - computed: true, optional: true, required: false
  private _fwdReliable?: string; 
  public get fwdReliable() {
    return this.getStringAttribute('fwd_reliable');
  }
  public set fwdReliable(value: string) {
    this._fwdReliable = value;
  }
  public resetFwdReliable() {
    this._fwdReliable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdReliableInput() {
    return this._fwdReliable;
  }

  // fwd_secure - computed: true, optional: true, required: false
  private _fwdSecure?: string; 
  public get fwdSecure() {
    return this.getStringAttribute('fwd_secure');
  }
  public set fwdSecure(value: string) {
    this._fwdSecure = value;
  }
  public resetFwdSecure() {
    this._fwdSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdSecureInput() {
    return this._fwdSecure;
  }

  // fwd_server_type - computed: true, optional: true, required: false
  private _fwdServerType?: string; 
  public get fwdServerType() {
    return this.getStringAttribute('fwd_server_type');
  }
  public set fwdServerType(value: string) {
    this._fwdServerType = value;
  }
  public resetFwdServerType() {
    this._fwdServerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdServerTypeInput() {
    return this._fwdServerType;
  }

  // fwd_syslog_decode_b64 - computed: true, optional: true, required: false
  private _fwdSyslogDecodeB64?: string; 
  public get fwdSyslogDecodeB64() {
    return this.getStringAttribute('fwd_syslog_decode_b64');
  }
  public set fwdSyslogDecodeB64(value: string) {
    this._fwdSyslogDecodeB64 = value;
  }
  public resetFwdSyslogDecodeB64() {
    this._fwdSyslogDecodeB64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdSyslogDecodeB64Input() {
    return this._fwdSyslogDecodeB64;
  }

  // fwd_syslog_enrich_cve - computed: true, optional: true, required: false
  private _fwdSyslogEnrichCve?: string; 
  public get fwdSyslogEnrichCve() {
    return this.getStringAttribute('fwd_syslog_enrich_cve');
  }
  public set fwdSyslogEnrichCve(value: string) {
    this._fwdSyslogEnrichCve = value;
  }
  public resetFwdSyslogEnrichCve() {
    this._fwdSyslogEnrichCve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdSyslogEnrichCveInput() {
    return this._fwdSyslogEnrichCve;
  }

  // fwd_syslog_format - computed: true, optional: true, required: false
  private _fwdSyslogFormat?: string; 
  public get fwdSyslogFormat() {
    return this.getStringAttribute('fwd_syslog_format');
  }
  public set fwdSyslogFormat(value: string) {
    this._fwdSyslogFormat = value;
  }
  public resetFwdSyslogFormat() {
    this._fwdSyslogFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdSyslogFormatInput() {
    return this._fwdSyslogFormat;
  }

  // fwd_syslog_transparent - computed: true, optional: true, required: false
  private _fwdSyslogTransparent?: string; 
  public get fwdSyslogTransparent() {
    return this.getStringAttribute('fwd_syslog_transparent');
  }
  public set fwdSyslogTransparent(value: string) {
    this._fwdSyslogTransparent = value;
  }
  public resetFwdSyslogTransparent() {
    this._fwdSyslogTransparent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdSyslogTransparentInput() {
    return this._fwdSyslogTransparent;
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

  // log_field_exclusion_status - computed: true, optional: true, required: false
  private _logFieldExclusionStatus?: string; 
  public get logFieldExclusionStatus() {
    return this.getStringAttribute('log_field_exclusion_status');
  }
  public set logFieldExclusionStatus(value: string) {
    this._logFieldExclusionStatus = value;
  }
  public resetLogFieldExclusionStatus() {
    this._logFieldExclusionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldExclusionStatusInput() {
    return this._logFieldExclusionStatus;
  }

  // log_filter_logic - computed: true, optional: true, required: false
  private _logFilterLogic?: string; 
  public get logFilterLogic() {
    return this.getStringAttribute('log_filter_logic');
  }
  public set logFilterLogic(value: string) {
    this._logFilterLogic = value;
  }
  public resetLogFilterLogic() {
    this._logFilterLogic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFilterLogicInput() {
    return this._logFilterLogic;
  }

  // log_filter_status - computed: true, optional: true, required: false
  private _logFilterStatus?: string; 
  public get logFilterStatus() {
    return this.getStringAttribute('log_filter_status');
  }
  public set logFilterStatus(value: string) {
    this._logFilterStatus = value;
  }
  public resetLogFilterStatus() {
    this._logFilterStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFilterStatusInput() {
    return this._logFilterStatus;
  }

  // log_masking_custom_priority - computed: true, optional: true, required: false
  private _logMaskingCustomPriority?: string; 
  public get logMaskingCustomPriority() {
    return this.getStringAttribute('log_masking_custom_priority');
  }
  public set logMaskingCustomPriority(value: string) {
    this._logMaskingCustomPriority = value;
  }
  public resetLogMaskingCustomPriority() {
    this._logMaskingCustomPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMaskingCustomPriorityInput() {
    return this._logMaskingCustomPriority;
  }

  // log_masking_fields - computed: false, optional: true, required: false
  private _logMaskingFields?: string[]; 
  public get logMaskingFields() {
    return cdktf.Fn.tolist(this.getListAttribute('log_masking_fields'));
  }
  public set logMaskingFields(value: string[]) {
    this._logMaskingFields = value;
  }
  public resetLogMaskingFields() {
    this._logMaskingFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMaskingFieldsInput() {
    return this._logMaskingFields;
  }

  // log_masking_key - computed: true, optional: true, required: false
  private _logMaskingKey?: string[]; 
  public get logMaskingKey() {
    return cdktf.Fn.tolist(this.getListAttribute('log_masking_key'));
  }
  public set logMaskingKey(value: string[]) {
    this._logMaskingKey = value;
  }
  public resetLogMaskingKey() {
    this._logMaskingKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMaskingKeyInput() {
    return this._logMaskingKey;
  }

  // log_masking_status - computed: true, optional: true, required: false
  private _logMaskingStatus?: string; 
  public get logMaskingStatus() {
    return this.getStringAttribute('log_masking_status');
  }
  public set logMaskingStatus(value: string) {
    this._logMaskingStatus = value;
  }
  public resetLogMaskingStatus() {
    this._logMaskingStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMaskingStatusInput() {
    return this._logMaskingStatus;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // pcapurl_domain_ip - computed: false, optional: true, required: false
  private _pcapurlDomainIp?: string; 
  public get pcapurlDomainIp() {
    return this.getStringAttribute('pcapurl_domain_ip');
  }
  public set pcapurlDomainIp(value: string) {
    this._pcapurlDomainIp = value;
  }
  public resetPcapurlDomainIp() {
    this._pcapurlDomainIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcapurlDomainIpInput() {
    return this._pcapurlDomainIp;
  }

  // pcapurl_enrich - computed: true, optional: true, required: false
  private _pcapurlEnrich?: string; 
  public get pcapurlEnrich() {
    return this.getStringAttribute('pcapurl_enrich');
  }
  public set pcapurlEnrich(value: string) {
    this._pcapurlEnrich = value;
  }
  public resetPcapurlEnrich() {
    this._pcapurlEnrich = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcapurlEnrichInput() {
    return this._pcapurlEnrich;
  }

  // peer_cert_cn - computed: false, optional: true, required: false
  private _peerCertCn?: string; 
  public get peerCertCn() {
    return this.getStringAttribute('peer_cert_cn');
  }
  public set peerCertCn(value: string) {
    this._peerCertCn = value;
  }
  public resetPeerCertCn() {
    this._peerCertCn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerCertCnInput() {
    return this._peerCertCn;
  }

  // proxy_service - computed: true, optional: true, required: false
  private _proxyService?: string; 
  public get proxyService() {
    return this.getStringAttribute('proxy_service');
  }
  public set proxyService(value: string) {
    this._proxyService = value;
  }
  public resetProxyService() {
    this._proxyService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyServiceInput() {
    return this._proxyService;
  }

  // proxy_service_priority - computed: true, optional: true, required: false
  private _proxyServicePriority?: number; 
  public get proxyServicePriority() {
    return this.getNumberAttribute('proxy_service_priority');
  }
  public set proxyServicePriority(value: number) {
    this._proxyServicePriority = value;
  }
  public resetProxyServicePriority() {
    this._proxyServicePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyServicePriorityInput() {
    return this._proxyServicePriority;
  }

  // server_addr - computed: false, optional: true, required: false
  private _serverAddr?: string; 
  public get serverAddr() {
    return this.getStringAttribute('server_addr');
  }
  public set serverAddr(value: string) {
    this._serverAddr = value;
  }
  public resetServerAddr() {
    this._serverAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddrInput() {
    return this._serverAddr;
  }

  // server_device - computed: false, optional: true, required: false
  private _serverDevice?: string; 
  public get serverDevice() {
    return this.getStringAttribute('server_device');
  }
  public set serverDevice(value: string) {
    this._serverDevice = value;
  }
  public resetServerDevice() {
    this._serverDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverDeviceInput() {
    return this._serverDevice;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // server_port - computed: true, optional: true, required: false
  private _serverPort?: number; 
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }
  public set serverPort(value: number) {
    this._serverPort = value;
  }
  public resetServerPort() {
    this._serverPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPortInput() {
    return this._serverPort;
  }

  // signature - computed: true, optional: true, required: false
  private _signature?: number; 
  public get signature() {
    return this.getNumberAttribute('signature');
  }
  public set signature(value: number) {
    this._signature = value;
  }
  public resetSignature() {
    this._signature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature;
  }

  // sync_metadata - computed: true, optional: true, required: false
  private _syncMetadata?: string[]; 
  public get syncMetadata() {
    return cdktf.Fn.tolist(this.getListAttribute('sync_metadata'));
  }
  public set syncMetadata(value: string[]) {
    this._syncMetadata = value;
  }
  public resetSyncMetadata() {
    this._syncMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncMetadataInput() {
    return this._syncMetadata;
  }

  // device_filter - computed: false, optional: true, required: false
  private _deviceFilter = new SystemLogforwardDeviceFilterList(this, "device_filter", false);
  public get deviceFilter() {
    return this._deviceFilter;
  }
  public putDeviceFilter(value: SystemLogforwardDeviceFilter[] | cdktf.IResolvable) {
    this._deviceFilter.internalValue = value;
  }
  public resetDeviceFilter() {
    this._deviceFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceFilterInput() {
    return this._deviceFilter.internalValue;
  }

  // log_field_exclusion - computed: false, optional: true, required: false
  private _logFieldExclusion = new SystemLogforwardLogFieldExclusionList(this, "log_field_exclusion", false);
  public get logFieldExclusion() {
    return this._logFieldExclusion;
  }
  public putLogFieldExclusion(value: SystemLogforwardLogFieldExclusion[] | cdktf.IResolvable) {
    this._logFieldExclusion.internalValue = value;
  }
  public resetLogFieldExclusion() {
    this._logFieldExclusion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldExclusionInput() {
    return this._logFieldExclusion.internalValue;
  }

  // log_filter - computed: false, optional: true, required: false
  private _logFilter = new SystemLogforwardLogFilterList(this, "log_filter", false);
  public get logFilter() {
    return this._logFilter;
  }
  public putLogFilter(value: SystemLogforwardLogFilter[] | cdktf.IResolvable) {
    this._logFilter.internalValue = value;
  }
  public resetLogFilter() {
    this._logFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFilterInput() {
    return this._logFilter.internalValue;
  }

  // log_masking_custom - computed: false, optional: true, required: false
  private _logMaskingCustom = new SystemLogforwardLogMaskingCustomList(this, "log_masking_custom", false);
  public get logMaskingCustom() {
    return this._logMaskingCustom;
  }
  public putLogMaskingCustom(value: SystemLogforwardLogMaskingCustom[] | cdktf.IResolvable) {
    this._logMaskingCustom.internalValue = value;
  }
  public resetLogMaskingCustom() {
    this._logMaskingCustom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMaskingCustomInput() {
    return this._logMaskingCustom.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agg_archive_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._aggArchiveTypes),
      agg_data_end_time: cdktf.listMapper(cdktf.stringToTerraform, false)(this._aggDataEndTime),
      agg_data_start_time: cdktf.listMapper(cdktf.stringToTerraform, false)(this._aggDataStartTime),
      agg_logtypes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._aggLogtypes),
      agg_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._aggPassword),
      agg_schedule: cdktf.stringToTerraform(this._aggSchedule),
      agg_time: cdktf.numberToTerraform(this._aggTime),
      agg_user: cdktf.stringToTerraform(this._aggUser),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fosid: cdktf.numberToTerraform(this._fosid),
      fwd_archive_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fwdArchiveTypes),
      fwd_archives: cdktf.stringToTerraform(this._fwdArchives),
      fwd_compression: cdktf.stringToTerraform(this._fwdCompression),
      fwd_facility: cdktf.stringToTerraform(this._fwdFacility),
      fwd_ha_bind_vip: cdktf.stringToTerraform(this._fwdHaBindVip),
      fwd_log_source_ip: cdktf.stringToTerraform(this._fwdLogSourceIp),
      fwd_max_delay: cdktf.stringToTerraform(this._fwdMaxDelay),
      fwd_output_plugin_id: cdktf.stringToTerraform(this._fwdOutputPluginId),
      fwd_reliable: cdktf.stringToTerraform(this._fwdReliable),
      fwd_secure: cdktf.stringToTerraform(this._fwdSecure),
      fwd_server_type: cdktf.stringToTerraform(this._fwdServerType),
      fwd_syslog_decode_b64: cdktf.stringToTerraform(this._fwdSyslogDecodeB64),
      fwd_syslog_enrich_cve: cdktf.stringToTerraform(this._fwdSyslogEnrichCve),
      fwd_syslog_format: cdktf.stringToTerraform(this._fwdSyslogFormat),
      fwd_syslog_transparent: cdktf.stringToTerraform(this._fwdSyslogTransparent),
      id: cdktf.stringToTerraform(this._id),
      log_field_exclusion_status: cdktf.stringToTerraform(this._logFieldExclusionStatus),
      log_filter_logic: cdktf.stringToTerraform(this._logFilterLogic),
      log_filter_status: cdktf.stringToTerraform(this._logFilterStatus),
      log_masking_custom_priority: cdktf.stringToTerraform(this._logMaskingCustomPriority),
      log_masking_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._logMaskingFields),
      log_masking_key: cdktf.listMapper(cdktf.stringToTerraform, false)(this._logMaskingKey),
      log_masking_status: cdktf.stringToTerraform(this._logMaskingStatus),
      mode: cdktf.stringToTerraform(this._mode),
      pcapurl_domain_ip: cdktf.stringToTerraform(this._pcapurlDomainIp),
      pcapurl_enrich: cdktf.stringToTerraform(this._pcapurlEnrich),
      peer_cert_cn: cdktf.stringToTerraform(this._peerCertCn),
      proxy_service: cdktf.stringToTerraform(this._proxyService),
      proxy_service_priority: cdktf.numberToTerraform(this._proxyServicePriority),
      server_addr: cdktf.stringToTerraform(this._serverAddr),
      server_device: cdktf.stringToTerraform(this._serverDevice),
      server_name: cdktf.stringToTerraform(this._serverName),
      server_port: cdktf.numberToTerraform(this._serverPort),
      signature: cdktf.numberToTerraform(this._signature),
      sync_metadata: cdktf.listMapper(cdktf.stringToTerraform, false)(this._syncMetadata),
      device_filter: cdktf.listMapper(systemLogforwardDeviceFilterToTerraform, true)(this._deviceFilter.internalValue),
      log_field_exclusion: cdktf.listMapper(systemLogforwardLogFieldExclusionToTerraform, true)(this._logFieldExclusion.internalValue),
      log_filter: cdktf.listMapper(systemLogforwardLogFilterToTerraform, true)(this._logFilter.internalValue),
      log_masking_custom: cdktf.listMapper(systemLogforwardLogMaskingCustomToTerraform, true)(this._logMaskingCustom.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agg_archive_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._aggArchiveTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      agg_data_end_time: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._aggDataEndTime),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      agg_data_start_time: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._aggDataStartTime),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      agg_logtypes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._aggLogtypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      agg_password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._aggPassword),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      agg_schedule: {
        value: cdktf.stringToHclTerraform(this._aggSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agg_time: {
        value: cdktf.numberToHclTerraform(this._aggTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      agg_user: {
        value: cdktf.stringToHclTerraform(this._aggUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fwd_archive_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fwdArchiveTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      fwd_archives: {
        value: cdktf.stringToHclTerraform(this._fwdArchives),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fwd_compression: {
        value: cdktf.stringToHclTerraform(this._fwdCompression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fwd_facility: {
        value: cdktf.stringToHclTerraform(this._fwdFacility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fwd_ha_bind_vip: {
        value: cdktf.stringToHclTerraform(this._fwdHaBindVip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fwd_log_source_ip: {
        value: cdktf.stringToHclTerraform(this._fwdLogSourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fwd_max_delay: {
        value: cdktf.stringToHclTerraform(this._fwdMaxDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fwd_output_plugin_id: {
        value: cdktf.stringToHclTerraform(this._fwdOutputPluginId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fwd_reliable: {
        value: cdktf.stringToHclTerraform(this._fwdReliable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fwd_secure: {
        value: cdktf.stringToHclTerraform(this._fwdSecure),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fwd_server_type: {
        value: cdktf.stringToHclTerraform(this._fwdServerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fwd_syslog_decode_b64: {
        value: cdktf.stringToHclTerraform(this._fwdSyslogDecodeB64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fwd_syslog_enrich_cve: {
        value: cdktf.stringToHclTerraform(this._fwdSyslogEnrichCve),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fwd_syslog_format: {
        value: cdktf.stringToHclTerraform(this._fwdSyslogFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fwd_syslog_transparent: {
        value: cdktf.stringToHclTerraform(this._fwdSyslogTransparent),
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
      log_field_exclusion_status: {
        value: cdktf.stringToHclTerraform(this._logFieldExclusionStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_filter_logic: {
        value: cdktf.stringToHclTerraform(this._logFilterLogic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_filter_status: {
        value: cdktf.stringToHclTerraform(this._logFilterStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_masking_custom_priority: {
        value: cdktf.stringToHclTerraform(this._logMaskingCustomPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_masking_fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._logMaskingFields),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      log_masking_key: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._logMaskingKey),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      log_masking_status: {
        value: cdktf.stringToHclTerraform(this._logMaskingStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcapurl_domain_ip: {
        value: cdktf.stringToHclTerraform(this._pcapurlDomainIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcapurl_enrich: {
        value: cdktf.stringToHclTerraform(this._pcapurlEnrich),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_cert_cn: {
        value: cdktf.stringToHclTerraform(this._peerCertCn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_service: {
        value: cdktf.stringToHclTerraform(this._proxyService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_service_priority: {
        value: cdktf.numberToHclTerraform(this._proxyServicePriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_addr: {
        value: cdktf.stringToHclTerraform(this._serverAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_device: {
        value: cdktf.stringToHclTerraform(this._serverDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_name: {
        value: cdktf.stringToHclTerraform(this._serverName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_port: {
        value: cdktf.numberToHclTerraform(this._serverPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      signature: {
        value: cdktf.numberToHclTerraform(this._signature),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sync_metadata: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._syncMetadata),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      device_filter: {
        value: cdktf.listMapperHcl(systemLogforwardDeviceFilterToHclTerraform, true)(this._deviceFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemLogforwardDeviceFilterList",
      },
      log_field_exclusion: {
        value: cdktf.listMapperHcl(systemLogforwardLogFieldExclusionToHclTerraform, true)(this._logFieldExclusion.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemLogforwardLogFieldExclusionList",
      },
      log_filter: {
        value: cdktf.listMapperHcl(systemLogforwardLogFilterToHclTerraform, true)(this._logFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemLogforwardLogFilterList",
      },
      log_masking_custom: {
        value: cdktf.listMapperHcl(systemLogforwardLogMaskingCustomToHclTerraform, true)(this._logMaskingCustom.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemLogforwardLogMaskingCustomList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
