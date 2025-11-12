// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FmupdateWebspamFgdsettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#as_cache FmupdateWebspamFgdsetting#as_cache}
  */
  readonly asCache?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#as_log FmupdateWebspamFgdsetting#as_log}
  */
  readonly asLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#as_preload FmupdateWebspamFgdsetting#as_preload}
  */
  readonly asPreload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#av2_cache FmupdateWebspamFgdsetting#av2_cache}
  */
  readonly av2Cache?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#av2_log FmupdateWebspamFgdsetting#av2_log}
  */
  readonly av2Log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#av2_preload FmupdateWebspamFgdsetting#av2_preload}
  */
  readonly av2Preload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#av_cache FmupdateWebspamFgdsetting#av_cache}
  */
  readonly avCache?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#av_log FmupdateWebspamFgdsetting#av_log}
  */
  readonly avLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#av_preload FmupdateWebspamFgdsetting#av_preload}
  */
  readonly avPreload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#eventlog_query FmupdateWebspamFgdsetting#eventlog_query}
  */
  readonly eventlogQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#fgd_pull_interval FmupdateWebspamFgdsetting#fgd_pull_interval}
  */
  readonly fgdPullInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#fq_cache FmupdateWebspamFgdsetting#fq_cache}
  */
  readonly fqCache?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#fq_log FmupdateWebspamFgdsetting#fq_log}
  */
  readonly fqLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#fq_preload FmupdateWebspamFgdsetting#fq_preload}
  */
  readonly fqPreload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#id FmupdateWebspamFgdsetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#iot_cache FmupdateWebspamFgdsetting#iot_cache}
  */
  readonly iotCache?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#iot_log FmupdateWebspamFgdsetting#iot_log}
  */
  readonly iotLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#iot_preload FmupdateWebspamFgdsetting#iot_preload}
  */
  readonly iotPreload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#iotv_preload FmupdateWebspamFgdsetting#iotv_preload}
  */
  readonly iotvPreload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#linkd_log FmupdateWebspamFgdsetting#linkd_log}
  */
  readonly linkdLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#max_client_worker FmupdateWebspamFgdsetting#max_client_worker}
  */
  readonly maxClientWorker?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#max_log_quota FmupdateWebspamFgdsetting#max_log_quota}
  */
  readonly maxLogQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#max_unrated_site FmupdateWebspamFgdsetting#max_unrated_site}
  */
  readonly maxUnratedSite?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#restrict_as1_dbver FmupdateWebspamFgdsetting#restrict_as1_dbver}
  */
  readonly restrictAs1Dbver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#restrict_as2_dbver FmupdateWebspamFgdsetting#restrict_as2_dbver}
  */
  readonly restrictAs2Dbver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#restrict_as4_dbver FmupdateWebspamFgdsetting#restrict_as4_dbver}
  */
  readonly restrictAs4Dbver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#restrict_av2_dbver FmupdateWebspamFgdsetting#restrict_av2_dbver}
  */
  readonly restrictAv2Dbver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#restrict_av_dbver FmupdateWebspamFgdsetting#restrict_av_dbver}
  */
  readonly restrictAvDbver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#restrict_fq_dbver FmupdateWebspamFgdsetting#restrict_fq_dbver}
  */
  readonly restrictFqDbver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#restrict_iots_dbver FmupdateWebspamFgdsetting#restrict_iots_dbver}
  */
  readonly restrictIotsDbver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#restrict_wf_dbver FmupdateWebspamFgdsetting#restrict_wf_dbver}
  */
  readonly restrictWfDbver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#stat_log FmupdateWebspamFgdsetting#stat_log}
  */
  readonly statLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#stat_log_interval FmupdateWebspamFgdsetting#stat_log_interval}
  */
  readonly statLogInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#stat_sync_interval FmupdateWebspamFgdsetting#stat_sync_interval}
  */
  readonly statSyncInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#update_interval FmupdateWebspamFgdsetting#update_interval}
  */
  readonly updateInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#update_log FmupdateWebspamFgdsetting#update_log}
  */
  readonly updateLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#wf_cache FmupdateWebspamFgdsetting#wf_cache}
  */
  readonly wfCache?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#wf_dn_cache_expire_time FmupdateWebspamFgdsetting#wf_dn_cache_expire_time}
  */
  readonly wfDnCacheExpireTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#wf_dn_cache_max_number FmupdateWebspamFgdsetting#wf_dn_cache_max_number}
  */
  readonly wfDnCacheMaxNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#wf_log FmupdateWebspamFgdsetting#wf_log}
  */
  readonly wfLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#wf_preload FmupdateWebspamFgdsetting#wf_preload}
  */
  readonly wfPreload?: string;
  /**
  * server_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#server_override FmupdateWebspamFgdsetting#server_override}
  */
  readonly serverOverride?: FmupdateWebspamFgdsettingServerOverride;
}
export interface FmupdateWebspamFgdsettingServerOverrideServlistStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#id FmupdateWebspamFgdsetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#ip FmupdateWebspamFgdsetting#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#ip6 FmupdateWebspamFgdsetting#ip6}
  */
  readonly ip6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#port FmupdateWebspamFgdsetting#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#service_type FmupdateWebspamFgdsetting#service_type}
  */
  readonly serviceType?: string;
}

export function fmupdateWebspamFgdsettingServerOverrideServlistStructToTerraform(struct?: FmupdateWebspamFgdsettingServerOverrideServlistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
    ip6: cdktf.stringToTerraform(struct!.ip6),
    port: cdktf.numberToTerraform(struct!.port),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
  }
}


export function fmupdateWebspamFgdsettingServerOverrideServlistStructToHclTerraform(struct?: FmupdateWebspamFgdsettingServerOverrideServlistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6: {
      value: cdktf.stringToHclTerraform(struct!.ip6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FmupdateWebspamFgdsettingServerOverrideServlistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FmupdateWebspamFgdsettingServerOverrideServlistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ip6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6 = this._ip6;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FmupdateWebspamFgdsettingServerOverrideServlistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ip = undefined;
      this._ip6 = undefined;
      this._port = undefined;
      this._serviceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._ip = value.ip;
      this._ip6 = value.ip6;
      this._port = value.port;
      this._serviceType = value.serviceType;
    }
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

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip6 - computed: true, optional: true, required: false
  private _ip6?: string; 
  public get ip6() {
    return this.getStringAttribute('ip6');
  }
  public set ip6(value: string) {
    this._ip6 = value;
  }
  public resetIp6() {
    this._ip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Input() {
    return this._ip6;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // service_type - computed: true, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }
}

export class FmupdateWebspamFgdsettingServerOverrideServlistStructList extends cdktf.ComplexList {
  public internalValue? : FmupdateWebspamFgdsettingServerOverrideServlistStruct[] | cdktf.IResolvable

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
  public get(index: number): FmupdateWebspamFgdsettingServerOverrideServlistStructOutputReference {
    return new FmupdateWebspamFgdsettingServerOverrideServlistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FmupdateWebspamFgdsettingServerOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#status FmupdateWebspamFgdsetting#status}
  */
  readonly status?: string;
  /**
  * servlist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#servlist FmupdateWebspamFgdsetting#servlist}
  */
  readonly servlist?: FmupdateWebspamFgdsettingServerOverrideServlistStruct[] | cdktf.IResolvable;
}

export function fmupdateWebspamFgdsettingServerOverrideToTerraform(struct?: FmupdateWebspamFgdsettingServerOverrideOutputReference | FmupdateWebspamFgdsettingServerOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
    servlist: cdktf.listMapper(fmupdateWebspamFgdsettingServerOverrideServlistStructToTerraform, true)(struct!.servlist),
  }
}


export function fmupdateWebspamFgdsettingServerOverrideToHclTerraform(struct?: FmupdateWebspamFgdsettingServerOverrideOutputReference | FmupdateWebspamFgdsettingServerOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servlist: {
      value: cdktf.listMapperHcl(fmupdateWebspamFgdsettingServerOverrideServlistStructToHclTerraform, true)(struct!.servlist),
      isBlock: true,
      type: "list",
      storageClassType: "FmupdateWebspamFgdsettingServerOverrideServlistStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FmupdateWebspamFgdsettingServerOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FmupdateWebspamFgdsettingServerOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._servlist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servlist = this._servlist?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FmupdateWebspamFgdsettingServerOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
      this._servlist.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
      this._servlist.internalValue = value.servlist;
    }
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // servlist - computed: false, optional: true, required: false
  private _servlist = new FmupdateWebspamFgdsettingServerOverrideServlistStructList(this, "servlist", false);
  public get servlist() {
    return this._servlist;
  }
  public putServlist(value: FmupdateWebspamFgdsettingServerOverrideServlistStruct[] | cdktf.IResolvable) {
    this._servlist.internalValue = value;
  }
  public resetServlist() {
    this._servlist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servlistInput() {
    return this._servlist.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting fortianalyzer_fmupdate_webspam_fgdsetting}
*/
export class FmupdateWebspamFgdsetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_fmupdate_webspam_fgdsetting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FmupdateWebspamFgdsetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FmupdateWebspamFgdsetting to import
  * @param importFromId The id of the existing FmupdateWebspamFgdsetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FmupdateWebspamFgdsetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_fmupdate_webspam_fgdsetting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_webspam_fgdsetting fortianalyzer_fmupdate_webspam_fgdsetting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FmupdateWebspamFgdsettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FmupdateWebspamFgdsettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_fmupdate_webspam_fgdsetting',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.1',
        providerVersionConstraint: '1.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asCache = config.asCache;
    this._asLog = config.asLog;
    this._asPreload = config.asPreload;
    this._av2Cache = config.av2Cache;
    this._av2Log = config.av2Log;
    this._av2Preload = config.av2Preload;
    this._avCache = config.avCache;
    this._avLog = config.avLog;
    this._avPreload = config.avPreload;
    this._eventlogQuery = config.eventlogQuery;
    this._fgdPullInterval = config.fgdPullInterval;
    this._fqCache = config.fqCache;
    this._fqLog = config.fqLog;
    this._fqPreload = config.fqPreload;
    this._id = config.id;
    this._iotCache = config.iotCache;
    this._iotLog = config.iotLog;
    this._iotPreload = config.iotPreload;
    this._iotvPreload = config.iotvPreload;
    this._linkdLog = config.linkdLog;
    this._maxClientWorker = config.maxClientWorker;
    this._maxLogQuota = config.maxLogQuota;
    this._maxUnratedSite = config.maxUnratedSite;
    this._restrictAs1Dbver = config.restrictAs1Dbver;
    this._restrictAs2Dbver = config.restrictAs2Dbver;
    this._restrictAs4Dbver = config.restrictAs4Dbver;
    this._restrictAv2Dbver = config.restrictAv2Dbver;
    this._restrictAvDbver = config.restrictAvDbver;
    this._restrictFqDbver = config.restrictFqDbver;
    this._restrictIotsDbver = config.restrictIotsDbver;
    this._restrictWfDbver = config.restrictWfDbver;
    this._statLog = config.statLog;
    this._statLogInterval = config.statLogInterval;
    this._statSyncInterval = config.statSyncInterval;
    this._updateInterval = config.updateInterval;
    this._updateLog = config.updateLog;
    this._wfCache = config.wfCache;
    this._wfDnCacheExpireTime = config.wfDnCacheExpireTime;
    this._wfDnCacheMaxNumber = config.wfDnCacheMaxNumber;
    this._wfLog = config.wfLog;
    this._wfPreload = config.wfPreload;
    this._serverOverride.internalValue = config.serverOverride;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // as_cache - computed: true, optional: true, required: false
  private _asCache?: number; 
  public get asCache() {
    return this.getNumberAttribute('as_cache');
  }
  public set asCache(value: number) {
    this._asCache = value;
  }
  public resetAsCache() {
    this._asCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asCacheInput() {
    return this._asCache;
  }

  // as_log - computed: true, optional: true, required: false
  private _asLog?: string; 
  public get asLog() {
    return this.getStringAttribute('as_log');
  }
  public set asLog(value: string) {
    this._asLog = value;
  }
  public resetAsLog() {
    this._asLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asLogInput() {
    return this._asLog;
  }

  // as_preload - computed: true, optional: true, required: false
  private _asPreload?: string; 
  public get asPreload() {
    return this.getStringAttribute('as_preload');
  }
  public set asPreload(value: string) {
    this._asPreload = value;
  }
  public resetAsPreload() {
    this._asPreload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPreloadInput() {
    return this._asPreload;
  }

  // av2_cache - computed: true, optional: true, required: false
  private _av2Cache?: number; 
  public get av2Cache() {
    return this.getNumberAttribute('av2_cache');
  }
  public set av2Cache(value: number) {
    this._av2Cache = value;
  }
  public resetAv2Cache() {
    this._av2Cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get av2CacheInput() {
    return this._av2Cache;
  }

  // av2_log - computed: true, optional: true, required: false
  private _av2Log?: string; 
  public get av2Log() {
    return this.getStringAttribute('av2_log');
  }
  public set av2Log(value: string) {
    this._av2Log = value;
  }
  public resetAv2Log() {
    this._av2Log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get av2LogInput() {
    return this._av2Log;
  }

  // av2_preload - computed: true, optional: true, required: false
  private _av2Preload?: string; 
  public get av2Preload() {
    return this.getStringAttribute('av2_preload');
  }
  public set av2Preload(value: string) {
    this._av2Preload = value;
  }
  public resetAv2Preload() {
    this._av2Preload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get av2PreloadInput() {
    return this._av2Preload;
  }

  // av_cache - computed: true, optional: true, required: false
  private _avCache?: number; 
  public get avCache() {
    return this.getNumberAttribute('av_cache');
  }
  public set avCache(value: number) {
    this._avCache = value;
  }
  public resetAvCache() {
    this._avCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avCacheInput() {
    return this._avCache;
  }

  // av_log - computed: true, optional: true, required: false
  private _avLog?: string; 
  public get avLog() {
    return this.getStringAttribute('av_log');
  }
  public set avLog(value: string) {
    this._avLog = value;
  }
  public resetAvLog() {
    this._avLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avLogInput() {
    return this._avLog;
  }

  // av_preload - computed: true, optional: true, required: false
  private _avPreload?: string; 
  public get avPreload() {
    return this.getStringAttribute('av_preload');
  }
  public set avPreload(value: string) {
    this._avPreload = value;
  }
  public resetAvPreload() {
    this._avPreload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avPreloadInput() {
    return this._avPreload;
  }

  // eventlog_query - computed: true, optional: true, required: false
  private _eventlogQuery?: string; 
  public get eventlogQuery() {
    return this.getStringAttribute('eventlog_query');
  }
  public set eventlogQuery(value: string) {
    this._eventlogQuery = value;
  }
  public resetEventlogQuery() {
    this._eventlogQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventlogQueryInput() {
    return this._eventlogQuery;
  }

  // fgd_pull_interval - computed: true, optional: true, required: false
  private _fgdPullInterval?: number; 
  public get fgdPullInterval() {
    return this.getNumberAttribute('fgd_pull_interval');
  }
  public set fgdPullInterval(value: number) {
    this._fgdPullInterval = value;
  }
  public resetFgdPullInterval() {
    this._fgdPullInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgdPullIntervalInput() {
    return this._fgdPullInterval;
  }

  // fq_cache - computed: true, optional: true, required: false
  private _fqCache?: number; 
  public get fqCache() {
    return this.getNumberAttribute('fq_cache');
  }
  public set fqCache(value: number) {
    this._fqCache = value;
  }
  public resetFqCache() {
    this._fqCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqCacheInput() {
    return this._fqCache;
  }

  // fq_log - computed: true, optional: true, required: false
  private _fqLog?: string; 
  public get fqLog() {
    return this.getStringAttribute('fq_log');
  }
  public set fqLog(value: string) {
    this._fqLog = value;
  }
  public resetFqLog() {
    this._fqLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqLogInput() {
    return this._fqLog;
  }

  // fq_preload - computed: true, optional: true, required: false
  private _fqPreload?: string; 
  public get fqPreload() {
    return this.getStringAttribute('fq_preload');
  }
  public set fqPreload(value: string) {
    this._fqPreload = value;
  }
  public resetFqPreload() {
    this._fqPreload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqPreloadInput() {
    return this._fqPreload;
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

  // iot_cache - computed: true, optional: true, required: false
  private _iotCache?: number; 
  public get iotCache() {
    return this.getNumberAttribute('iot_cache');
  }
  public set iotCache(value: number) {
    this._iotCache = value;
  }
  public resetIotCache() {
    this._iotCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotCacheInput() {
    return this._iotCache;
  }

  // iot_log - computed: true, optional: true, required: false
  private _iotLog?: string; 
  public get iotLog() {
    return this.getStringAttribute('iot_log');
  }
  public set iotLog(value: string) {
    this._iotLog = value;
  }
  public resetIotLog() {
    this._iotLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotLogInput() {
    return this._iotLog;
  }

  // iot_preload - computed: true, optional: true, required: false
  private _iotPreload?: string; 
  public get iotPreload() {
    return this.getStringAttribute('iot_preload');
  }
  public set iotPreload(value: string) {
    this._iotPreload = value;
  }
  public resetIotPreload() {
    this._iotPreload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotPreloadInput() {
    return this._iotPreload;
  }

  // iotv_preload - computed: true, optional: true, required: false
  private _iotvPreload?: string; 
  public get iotvPreload() {
    return this.getStringAttribute('iotv_preload');
  }
  public set iotvPreload(value: string) {
    this._iotvPreload = value;
  }
  public resetIotvPreload() {
    this._iotvPreload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotvPreloadInput() {
    return this._iotvPreload;
  }

  // linkd_log - computed: true, optional: true, required: false
  private _linkdLog?: string; 
  public get linkdLog() {
    return this.getStringAttribute('linkd_log');
  }
  public set linkdLog(value: string) {
    this._linkdLog = value;
  }
  public resetLinkdLog() {
    this._linkdLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkdLogInput() {
    return this._linkdLog;
  }

  // max_client_worker - computed: false, optional: true, required: false
  private _maxClientWorker?: number; 
  public get maxClientWorker() {
    return this.getNumberAttribute('max_client_worker');
  }
  public set maxClientWorker(value: number) {
    this._maxClientWorker = value;
  }
  public resetMaxClientWorker() {
    this._maxClientWorker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClientWorkerInput() {
    return this._maxClientWorker;
  }

  // max_log_quota - computed: true, optional: true, required: false
  private _maxLogQuota?: number; 
  public get maxLogQuota() {
    return this.getNumberAttribute('max_log_quota');
  }
  public set maxLogQuota(value: number) {
    this._maxLogQuota = value;
  }
  public resetMaxLogQuota() {
    this._maxLogQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLogQuotaInput() {
    return this._maxLogQuota;
  }

  // max_unrated_site - computed: true, optional: true, required: false
  private _maxUnratedSite?: number; 
  public get maxUnratedSite() {
    return this.getNumberAttribute('max_unrated_site');
  }
  public set maxUnratedSite(value: number) {
    this._maxUnratedSite = value;
  }
  public resetMaxUnratedSite() {
    this._maxUnratedSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnratedSiteInput() {
    return this._maxUnratedSite;
  }

  // restrict_as1_dbver - computed: false, optional: true, required: false
  private _restrictAs1Dbver?: string; 
  public get restrictAs1Dbver() {
    return this.getStringAttribute('restrict_as1_dbver');
  }
  public set restrictAs1Dbver(value: string) {
    this._restrictAs1Dbver = value;
  }
  public resetRestrictAs1Dbver() {
    this._restrictAs1Dbver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictAs1DbverInput() {
    return this._restrictAs1Dbver;
  }

  // restrict_as2_dbver - computed: false, optional: true, required: false
  private _restrictAs2Dbver?: string; 
  public get restrictAs2Dbver() {
    return this.getStringAttribute('restrict_as2_dbver');
  }
  public set restrictAs2Dbver(value: string) {
    this._restrictAs2Dbver = value;
  }
  public resetRestrictAs2Dbver() {
    this._restrictAs2Dbver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictAs2DbverInput() {
    return this._restrictAs2Dbver;
  }

  // restrict_as4_dbver - computed: false, optional: true, required: false
  private _restrictAs4Dbver?: string; 
  public get restrictAs4Dbver() {
    return this.getStringAttribute('restrict_as4_dbver');
  }
  public set restrictAs4Dbver(value: string) {
    this._restrictAs4Dbver = value;
  }
  public resetRestrictAs4Dbver() {
    this._restrictAs4Dbver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictAs4DbverInput() {
    return this._restrictAs4Dbver;
  }

  // restrict_av2_dbver - computed: false, optional: true, required: false
  private _restrictAv2Dbver?: string; 
  public get restrictAv2Dbver() {
    return this.getStringAttribute('restrict_av2_dbver');
  }
  public set restrictAv2Dbver(value: string) {
    this._restrictAv2Dbver = value;
  }
  public resetRestrictAv2Dbver() {
    this._restrictAv2Dbver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictAv2DbverInput() {
    return this._restrictAv2Dbver;
  }

  // restrict_av_dbver - computed: false, optional: true, required: false
  private _restrictAvDbver?: string; 
  public get restrictAvDbver() {
    return this.getStringAttribute('restrict_av_dbver');
  }
  public set restrictAvDbver(value: string) {
    this._restrictAvDbver = value;
  }
  public resetRestrictAvDbver() {
    this._restrictAvDbver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictAvDbverInput() {
    return this._restrictAvDbver;
  }

  // restrict_fq_dbver - computed: false, optional: true, required: false
  private _restrictFqDbver?: string; 
  public get restrictFqDbver() {
    return this.getStringAttribute('restrict_fq_dbver');
  }
  public set restrictFqDbver(value: string) {
    this._restrictFqDbver = value;
  }
  public resetRestrictFqDbver() {
    this._restrictFqDbver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictFqDbverInput() {
    return this._restrictFqDbver;
  }

  // restrict_iots_dbver - computed: false, optional: true, required: false
  private _restrictIotsDbver?: string; 
  public get restrictIotsDbver() {
    return this.getStringAttribute('restrict_iots_dbver');
  }
  public set restrictIotsDbver(value: string) {
    this._restrictIotsDbver = value;
  }
  public resetRestrictIotsDbver() {
    this._restrictIotsDbver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictIotsDbverInput() {
    return this._restrictIotsDbver;
  }

  // restrict_wf_dbver - computed: false, optional: true, required: false
  private _restrictWfDbver?: string; 
  public get restrictWfDbver() {
    return this.getStringAttribute('restrict_wf_dbver');
  }
  public set restrictWfDbver(value: string) {
    this._restrictWfDbver = value;
  }
  public resetRestrictWfDbver() {
    this._restrictWfDbver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictWfDbverInput() {
    return this._restrictWfDbver;
  }

  // stat_log - computed: true, optional: true, required: false
  private _statLog?: string; 
  public get statLog() {
    return this.getStringAttribute('stat_log');
  }
  public set statLog(value: string) {
    this._statLog = value;
  }
  public resetStatLog() {
    this._statLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statLogInput() {
    return this._statLog;
  }

  // stat_log_interval - computed: true, optional: true, required: false
  private _statLogInterval?: number; 
  public get statLogInterval() {
    return this.getNumberAttribute('stat_log_interval');
  }
  public set statLogInterval(value: number) {
    this._statLogInterval = value;
  }
  public resetStatLogInterval() {
    this._statLogInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statLogIntervalInput() {
    return this._statLogInterval;
  }

  // stat_sync_interval - computed: true, optional: true, required: false
  private _statSyncInterval?: number; 
  public get statSyncInterval() {
    return this.getNumberAttribute('stat_sync_interval');
  }
  public set statSyncInterval(value: number) {
    this._statSyncInterval = value;
  }
  public resetStatSyncInterval() {
    this._statSyncInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statSyncIntervalInput() {
    return this._statSyncInterval;
  }

  // update_interval - computed: true, optional: true, required: false
  private _updateInterval?: number; 
  public get updateInterval() {
    return this.getNumberAttribute('update_interval');
  }
  public set updateInterval(value: number) {
    this._updateInterval = value;
  }
  public resetUpdateInterval() {
    this._updateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateIntervalInput() {
    return this._updateInterval;
  }

  // update_log - computed: true, optional: true, required: false
  private _updateLog?: string; 
  public get updateLog() {
    return this.getStringAttribute('update_log');
  }
  public set updateLog(value: string) {
    this._updateLog = value;
  }
  public resetUpdateLog() {
    this._updateLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateLogInput() {
    return this._updateLog;
  }

  // wf_cache - computed: true, optional: true, required: false
  private _wfCache?: number; 
  public get wfCache() {
    return this.getNumberAttribute('wf_cache');
  }
  public set wfCache(value: number) {
    this._wfCache = value;
  }
  public resetWfCache() {
    this._wfCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wfCacheInput() {
    return this._wfCache;
  }

  // wf_dn_cache_expire_time - computed: true, optional: true, required: false
  private _wfDnCacheExpireTime?: number; 
  public get wfDnCacheExpireTime() {
    return this.getNumberAttribute('wf_dn_cache_expire_time');
  }
  public set wfDnCacheExpireTime(value: number) {
    this._wfDnCacheExpireTime = value;
  }
  public resetWfDnCacheExpireTime() {
    this._wfDnCacheExpireTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wfDnCacheExpireTimeInput() {
    return this._wfDnCacheExpireTime;
  }

  // wf_dn_cache_max_number - computed: true, optional: true, required: false
  private _wfDnCacheMaxNumber?: number; 
  public get wfDnCacheMaxNumber() {
    return this.getNumberAttribute('wf_dn_cache_max_number');
  }
  public set wfDnCacheMaxNumber(value: number) {
    this._wfDnCacheMaxNumber = value;
  }
  public resetWfDnCacheMaxNumber() {
    this._wfDnCacheMaxNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wfDnCacheMaxNumberInput() {
    return this._wfDnCacheMaxNumber;
  }

  // wf_log - computed: true, optional: true, required: false
  private _wfLog?: string; 
  public get wfLog() {
    return this.getStringAttribute('wf_log');
  }
  public set wfLog(value: string) {
    this._wfLog = value;
  }
  public resetWfLog() {
    this._wfLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wfLogInput() {
    return this._wfLog;
  }

  // wf_preload - computed: true, optional: true, required: false
  private _wfPreload?: string; 
  public get wfPreload() {
    return this.getStringAttribute('wf_preload');
  }
  public set wfPreload(value: string) {
    this._wfPreload = value;
  }
  public resetWfPreload() {
    this._wfPreload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wfPreloadInput() {
    return this._wfPreload;
  }

  // server_override - computed: false, optional: true, required: false
  private _serverOverride = new FmupdateWebspamFgdsettingServerOverrideOutputReference(this, "server_override");
  public get serverOverride() {
    return this._serverOverride;
  }
  public putServerOverride(value: FmupdateWebspamFgdsettingServerOverride) {
    this._serverOverride.internalValue = value;
  }
  public resetServerOverride() {
    this._serverOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverOverrideInput() {
    return this._serverOverride.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      as_cache: cdktf.numberToTerraform(this._asCache),
      as_log: cdktf.stringToTerraform(this._asLog),
      as_preload: cdktf.stringToTerraform(this._asPreload),
      av2_cache: cdktf.numberToTerraform(this._av2Cache),
      av2_log: cdktf.stringToTerraform(this._av2Log),
      av2_preload: cdktf.stringToTerraform(this._av2Preload),
      av_cache: cdktf.numberToTerraform(this._avCache),
      av_log: cdktf.stringToTerraform(this._avLog),
      av_preload: cdktf.stringToTerraform(this._avPreload),
      eventlog_query: cdktf.stringToTerraform(this._eventlogQuery),
      fgd_pull_interval: cdktf.numberToTerraform(this._fgdPullInterval),
      fq_cache: cdktf.numberToTerraform(this._fqCache),
      fq_log: cdktf.stringToTerraform(this._fqLog),
      fq_preload: cdktf.stringToTerraform(this._fqPreload),
      id: cdktf.stringToTerraform(this._id),
      iot_cache: cdktf.numberToTerraform(this._iotCache),
      iot_log: cdktf.stringToTerraform(this._iotLog),
      iot_preload: cdktf.stringToTerraform(this._iotPreload),
      iotv_preload: cdktf.stringToTerraform(this._iotvPreload),
      linkd_log: cdktf.stringToTerraform(this._linkdLog),
      max_client_worker: cdktf.numberToTerraform(this._maxClientWorker),
      max_log_quota: cdktf.numberToTerraform(this._maxLogQuota),
      max_unrated_site: cdktf.numberToTerraform(this._maxUnratedSite),
      restrict_as1_dbver: cdktf.stringToTerraform(this._restrictAs1Dbver),
      restrict_as2_dbver: cdktf.stringToTerraform(this._restrictAs2Dbver),
      restrict_as4_dbver: cdktf.stringToTerraform(this._restrictAs4Dbver),
      restrict_av2_dbver: cdktf.stringToTerraform(this._restrictAv2Dbver),
      restrict_av_dbver: cdktf.stringToTerraform(this._restrictAvDbver),
      restrict_fq_dbver: cdktf.stringToTerraform(this._restrictFqDbver),
      restrict_iots_dbver: cdktf.stringToTerraform(this._restrictIotsDbver),
      restrict_wf_dbver: cdktf.stringToTerraform(this._restrictWfDbver),
      stat_log: cdktf.stringToTerraform(this._statLog),
      stat_log_interval: cdktf.numberToTerraform(this._statLogInterval),
      stat_sync_interval: cdktf.numberToTerraform(this._statSyncInterval),
      update_interval: cdktf.numberToTerraform(this._updateInterval),
      update_log: cdktf.stringToTerraform(this._updateLog),
      wf_cache: cdktf.numberToTerraform(this._wfCache),
      wf_dn_cache_expire_time: cdktf.numberToTerraform(this._wfDnCacheExpireTime),
      wf_dn_cache_max_number: cdktf.numberToTerraform(this._wfDnCacheMaxNumber),
      wf_log: cdktf.stringToTerraform(this._wfLog),
      wf_preload: cdktf.stringToTerraform(this._wfPreload),
      server_override: fmupdateWebspamFgdsettingServerOverrideToTerraform(this._serverOverride.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      as_cache: {
        value: cdktf.numberToHclTerraform(this._asCache),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      as_log: {
        value: cdktf.stringToHclTerraform(this._asLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_preload: {
        value: cdktf.stringToHclTerraform(this._asPreload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      av2_cache: {
        value: cdktf.numberToHclTerraform(this._av2Cache),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      av2_log: {
        value: cdktf.stringToHclTerraform(this._av2Log),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      av2_preload: {
        value: cdktf.stringToHclTerraform(this._av2Preload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      av_cache: {
        value: cdktf.numberToHclTerraform(this._avCache),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      av_log: {
        value: cdktf.stringToHclTerraform(this._avLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      av_preload: {
        value: cdktf.stringToHclTerraform(this._avPreload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eventlog_query: {
        value: cdktf.stringToHclTerraform(this._eventlogQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fgd_pull_interval: {
        value: cdktf.numberToHclTerraform(this._fgdPullInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fq_cache: {
        value: cdktf.numberToHclTerraform(this._fqCache),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fq_log: {
        value: cdktf.stringToHclTerraform(this._fqLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fq_preload: {
        value: cdktf.stringToHclTerraform(this._fqPreload),
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
      iot_cache: {
        value: cdktf.numberToHclTerraform(this._iotCache),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      iot_log: {
        value: cdktf.stringToHclTerraform(this._iotLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iot_preload: {
        value: cdktf.stringToHclTerraform(this._iotPreload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iotv_preload: {
        value: cdktf.stringToHclTerraform(this._iotvPreload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linkd_log: {
        value: cdktf.stringToHclTerraform(this._linkdLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_client_worker: {
        value: cdktf.numberToHclTerraform(this._maxClientWorker),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_log_quota: {
        value: cdktf.numberToHclTerraform(this._maxLogQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_unrated_site: {
        value: cdktf.numberToHclTerraform(this._maxUnratedSite),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      restrict_as1_dbver: {
        value: cdktf.stringToHclTerraform(this._restrictAs1Dbver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restrict_as2_dbver: {
        value: cdktf.stringToHclTerraform(this._restrictAs2Dbver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restrict_as4_dbver: {
        value: cdktf.stringToHclTerraform(this._restrictAs4Dbver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restrict_av2_dbver: {
        value: cdktf.stringToHclTerraform(this._restrictAv2Dbver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restrict_av_dbver: {
        value: cdktf.stringToHclTerraform(this._restrictAvDbver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restrict_fq_dbver: {
        value: cdktf.stringToHclTerraform(this._restrictFqDbver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restrict_iots_dbver: {
        value: cdktf.stringToHclTerraform(this._restrictIotsDbver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restrict_wf_dbver: {
        value: cdktf.stringToHclTerraform(this._restrictWfDbver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stat_log: {
        value: cdktf.stringToHclTerraform(this._statLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stat_log_interval: {
        value: cdktf.numberToHclTerraform(this._statLogInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stat_sync_interval: {
        value: cdktf.numberToHclTerraform(this._statSyncInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_interval: {
        value: cdktf.numberToHclTerraform(this._updateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_log: {
        value: cdktf.stringToHclTerraform(this._updateLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wf_cache: {
        value: cdktf.numberToHclTerraform(this._wfCache),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wf_dn_cache_expire_time: {
        value: cdktf.numberToHclTerraform(this._wfDnCacheExpireTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wf_dn_cache_max_number: {
        value: cdktf.numberToHclTerraform(this._wfDnCacheMaxNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wf_log: {
        value: cdktf.stringToHclTerraform(this._wfLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wf_preload: {
        value: cdktf.stringToHclTerraform(this._wfPreload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_override: {
        value: fmupdateWebspamFgdsettingServerOverrideToHclTerraform(this._serverOverride.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FmupdateWebspamFgdsettingServerOverrideList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
