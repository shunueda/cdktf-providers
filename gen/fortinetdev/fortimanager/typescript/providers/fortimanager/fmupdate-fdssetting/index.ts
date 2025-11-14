// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FmupdateFdssettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#fds_clt_ssl_protocol FmupdateFdssetting#fds_clt_ssl_protocol}
  */
  readonly fdsCltSslProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#fds_ssl_protocol FmupdateFdssetting#fds_ssl_protocol}
  */
  readonly fdsSslProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#fmtr_log FmupdateFdssetting#fmtr_log}
  */
  readonly fmtrLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#fortiguard_anycast FmupdateFdssetting#fortiguard_anycast}
  */
  readonly fortiguardAnycast?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#fortiguard_anycast_source FmupdateFdssetting#fortiguard_anycast_source}
  */
  readonly fortiguardAnycastSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#id FmupdateFdssetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#linkd_log FmupdateFdssetting#linkd_log}
  */
  readonly linkdLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#max_av_ips_version FmupdateFdssetting#max_av_ips_version}
  */
  readonly maxAvIpsVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#max_work FmupdateFdssetting#max_work}
  */
  readonly maxWork?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#send_report FmupdateFdssetting#send_report}
  */
  readonly sendReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#send_setup FmupdateFdssetting#send_setup}
  */
  readonly sendSetup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#system_support_fai FmupdateFdssetting#system_support_fai}
  */
  readonly systemSupportFai?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#system_support_faz FmupdateFdssetting#system_support_faz}
  */
  readonly systemSupportFaz?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#system_support_fct FmupdateFdssetting#system_support_fct}
  */
  readonly systemSupportFct?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#system_support_fdc FmupdateFdssetting#system_support_fdc}
  */
  readonly systemSupportFdc?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#system_support_fgt FmupdateFdssetting#system_support_fgt}
  */
  readonly systemSupportFgt?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#system_support_fis FmupdateFdssetting#system_support_fis}
  */
  readonly systemSupportFis?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#system_support_fml FmupdateFdssetting#system_support_fml}
  */
  readonly systemSupportFml?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#system_support_fsa FmupdateFdssetting#system_support_fsa}
  */
  readonly systemSupportFsa?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#system_support_fsw FmupdateFdssetting#system_support_fsw}
  */
  readonly systemSupportFsw?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#system_support_fts FmupdateFdssetting#system_support_fts}
  */
  readonly systemSupportFts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#umsvc_log FmupdateFdssetting#umsvc_log}
  */
  readonly umsvcLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#unreg_dev_option FmupdateFdssetting#unreg_dev_option}
  */
  readonly unregDevOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#user_agent FmupdateFdssetting#user_agent}
  */
  readonly userAgent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#wanip_query_mode FmupdateFdssetting#wanip_query_mode}
  */
  readonly wanipQueryMode?: string;
  /**
  * push_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#push_override FmupdateFdssetting#push_override}
  */
  readonly pushOverride?: FmupdateFdssettingPushOverride;
  /**
  * push_override_to_client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#push_override_to_client FmupdateFdssetting#push_override_to_client}
  */
  readonly pushOverrideToClient?: FmupdateFdssettingPushOverrideToClient;
  /**
  * server_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#server_override FmupdateFdssetting#server_override}
  */
  readonly serverOverride?: FmupdateFdssettingServerOverride;
  /**
  * update_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#update_schedule FmupdateFdssetting#update_schedule}
  */
  readonly updateSchedule?: FmupdateFdssettingUpdateSchedule;
}
export interface FmupdateFdssettingPushOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#ip FmupdateFdssetting#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#port FmupdateFdssetting#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#status FmupdateFdssetting#status}
  */
  readonly status?: string;
}

export function fmupdateFdssettingPushOverrideToTerraform(struct?: FmupdateFdssettingPushOverrideOutputReference | FmupdateFdssettingPushOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function fmupdateFdssettingPushOverrideToHclTerraform(struct?: FmupdateFdssettingPushOverrideOutputReference | FmupdateFdssettingPushOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FmupdateFdssettingPushOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FmupdateFdssettingPushOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FmupdateFdssettingPushOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._port = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._port = value.port;
      this._status = value.status;
    }
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
}
export interface FmupdateFdssettingPushOverrideToClientAnnounceIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#id FmupdateFdssetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#ip FmupdateFdssetting#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#port FmupdateFdssetting#port}
  */
  readonly port?: number;
}

export function fmupdateFdssettingPushOverrideToClientAnnounceIpToTerraform(struct?: FmupdateFdssettingPushOverrideToClientAnnounceIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function fmupdateFdssettingPushOverrideToClientAnnounceIpToHclTerraform(struct?: FmupdateFdssettingPushOverrideToClientAnnounceIp | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FmupdateFdssettingPushOverrideToClientAnnounceIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FmupdateFdssettingPushOverrideToClientAnnounceIp | cdktf.IResolvable | undefined {
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
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FmupdateFdssettingPushOverrideToClientAnnounceIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ip = undefined;
      this._port = undefined;
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
      this._port = value.port;
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
}

export class FmupdateFdssettingPushOverrideToClientAnnounceIpList extends cdktf.ComplexList {
  public internalValue? : FmupdateFdssettingPushOverrideToClientAnnounceIp[] | cdktf.IResolvable

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
  public get(index: number): FmupdateFdssettingPushOverrideToClientAnnounceIpOutputReference {
    return new FmupdateFdssettingPushOverrideToClientAnnounceIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FmupdateFdssettingPushOverrideToClient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#status FmupdateFdssetting#status}
  */
  readonly status?: string;
  /**
  * announce_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#announce_ip FmupdateFdssetting#announce_ip}
  */
  readonly announceIp?: FmupdateFdssettingPushOverrideToClientAnnounceIp[] | cdktf.IResolvable;
}

export function fmupdateFdssettingPushOverrideToClientToTerraform(struct?: FmupdateFdssettingPushOverrideToClientOutputReference | FmupdateFdssettingPushOverrideToClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
    announce_ip: cdktf.listMapper(fmupdateFdssettingPushOverrideToClientAnnounceIpToTerraform, true)(struct!.announceIp),
  }
}


export function fmupdateFdssettingPushOverrideToClientToHclTerraform(struct?: FmupdateFdssettingPushOverrideToClientOutputReference | FmupdateFdssettingPushOverrideToClient): any {
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
    announce_ip: {
      value: cdktf.listMapperHcl(fmupdateFdssettingPushOverrideToClientAnnounceIpToHclTerraform, true)(struct!.announceIp),
      isBlock: true,
      type: "list",
      storageClassType: "FmupdateFdssettingPushOverrideToClientAnnounceIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FmupdateFdssettingPushOverrideToClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FmupdateFdssettingPushOverrideToClient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._announceIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.announceIp = this._announceIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FmupdateFdssettingPushOverrideToClient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
      this._announceIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
      this._announceIp.internalValue = value.announceIp;
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

  // announce_ip - computed: false, optional: true, required: false
  private _announceIp = new FmupdateFdssettingPushOverrideToClientAnnounceIpList(this, "announce_ip", false);
  public get announceIp() {
    return this._announceIp;
  }
  public putAnnounceIp(value: FmupdateFdssettingPushOverrideToClientAnnounceIp[] | cdktf.IResolvable) {
    this._announceIp.internalValue = value;
  }
  public resetAnnounceIp() {
    this._announceIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get announceIpInput() {
    return this._announceIp.internalValue;
  }
}
export interface FmupdateFdssettingServerOverrideServlistStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#id FmupdateFdssetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#ip FmupdateFdssetting#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#ip6 FmupdateFdssetting#ip6}
  */
  readonly ip6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#port FmupdateFdssetting#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#service_type FmupdateFdssetting#service_type}
  */
  readonly serviceType?: string;
}

export function fmupdateFdssettingServerOverrideServlistStructToTerraform(struct?: FmupdateFdssettingServerOverrideServlistStruct | cdktf.IResolvable): any {
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


export function fmupdateFdssettingServerOverrideServlistStructToHclTerraform(struct?: FmupdateFdssettingServerOverrideServlistStruct | cdktf.IResolvable): any {
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

export class FmupdateFdssettingServerOverrideServlistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FmupdateFdssettingServerOverrideServlistStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FmupdateFdssettingServerOverrideServlistStruct | cdktf.IResolvable | undefined) {
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

export class FmupdateFdssettingServerOverrideServlistStructList extends cdktf.ComplexList {
  public internalValue? : FmupdateFdssettingServerOverrideServlistStruct[] | cdktf.IResolvable

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
  public get(index: number): FmupdateFdssettingServerOverrideServlistStructOutputReference {
    return new FmupdateFdssettingServerOverrideServlistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FmupdateFdssettingServerOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#status FmupdateFdssetting#status}
  */
  readonly status?: string;
  /**
  * servlist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#servlist FmupdateFdssetting#servlist}
  */
  readonly servlist?: FmupdateFdssettingServerOverrideServlistStruct[] | cdktf.IResolvable;
}

export function fmupdateFdssettingServerOverrideToTerraform(struct?: FmupdateFdssettingServerOverrideOutputReference | FmupdateFdssettingServerOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
    servlist: cdktf.listMapper(fmupdateFdssettingServerOverrideServlistStructToTerraform, true)(struct!.servlist),
  }
}


export function fmupdateFdssettingServerOverrideToHclTerraform(struct?: FmupdateFdssettingServerOverrideOutputReference | FmupdateFdssettingServerOverride): any {
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
      value: cdktf.listMapperHcl(fmupdateFdssettingServerOverrideServlistStructToHclTerraform, true)(struct!.servlist),
      isBlock: true,
      type: "list",
      storageClassType: "FmupdateFdssettingServerOverrideServlistStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FmupdateFdssettingServerOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FmupdateFdssettingServerOverride | undefined {
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

  public set internalValue(value: FmupdateFdssettingServerOverride | undefined) {
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
  private _servlist = new FmupdateFdssettingServerOverrideServlistStructList(this, "servlist", false);
  public get servlist() {
    return this._servlist;
  }
  public putServlist(value: FmupdateFdssettingServerOverrideServlistStruct[] | cdktf.IResolvable) {
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
export interface FmupdateFdssettingUpdateSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#day FmupdateFdssetting#day}
  */
  readonly day?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#frequency FmupdateFdssetting#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#status FmupdateFdssetting#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#time FmupdateFdssetting#time}
  */
  readonly time?: string[];
}

export function fmupdateFdssettingUpdateScheduleToTerraform(struct?: FmupdateFdssettingUpdateScheduleOutputReference | FmupdateFdssettingUpdateSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    status: cdktf.stringToTerraform(struct!.status),
    time: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.time),
  }
}


export function fmupdateFdssettingUpdateScheduleToHclTerraform(struct?: FmupdateFdssettingUpdateScheduleOutputReference | FmupdateFdssettingUpdateSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.time),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FmupdateFdssettingUpdateScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FmupdateFdssettingUpdateSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FmupdateFdssettingUpdateSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._frequency = undefined;
      this._status = undefined;
      this._time = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._frequency = value.frequency;
      this._status = value.status;
      this._time = value.time;
    }
  }

  // day - computed: true, optional: true, required: false
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
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

  // time - computed: true, optional: true, required: false
  private _time?: string[]; 
  public get time() {
    return cdktf.Fn.tolist(this.getListAttribute('time'));
  }
  public set time(value: string[]) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting fortimanager_fmupdate_fdssetting}
*/
export class FmupdateFdssetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_fmupdate_fdssetting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FmupdateFdssetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FmupdateFdssetting to import
  * @param importFromId The id of the existing FmupdateFdssetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FmupdateFdssetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_fmupdate_fdssetting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fdssetting fortimanager_fmupdate_fdssetting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FmupdateFdssettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FmupdateFdssettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_fmupdate_fdssetting',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fdsCltSslProtocol = config.fdsCltSslProtocol;
    this._fdsSslProtocol = config.fdsSslProtocol;
    this._fmtrLog = config.fmtrLog;
    this._fortiguardAnycast = config.fortiguardAnycast;
    this._fortiguardAnycastSource = config.fortiguardAnycastSource;
    this._id = config.id;
    this._linkdLog = config.linkdLog;
    this._maxAvIpsVersion = config.maxAvIpsVersion;
    this._maxWork = config.maxWork;
    this._sendReport = config.sendReport;
    this._sendSetup = config.sendSetup;
    this._systemSupportFai = config.systemSupportFai;
    this._systemSupportFaz = config.systemSupportFaz;
    this._systemSupportFct = config.systemSupportFct;
    this._systemSupportFdc = config.systemSupportFdc;
    this._systemSupportFgt = config.systemSupportFgt;
    this._systemSupportFis = config.systemSupportFis;
    this._systemSupportFml = config.systemSupportFml;
    this._systemSupportFsa = config.systemSupportFsa;
    this._systemSupportFsw = config.systemSupportFsw;
    this._systemSupportFts = config.systemSupportFts;
    this._umsvcLog = config.umsvcLog;
    this._unregDevOption = config.unregDevOption;
    this._userAgent = config.userAgent;
    this._wanipQueryMode = config.wanipQueryMode;
    this._pushOverride.internalValue = config.pushOverride;
    this._pushOverrideToClient.internalValue = config.pushOverrideToClient;
    this._serverOverride.internalValue = config.serverOverride;
    this._updateSchedule.internalValue = config.updateSchedule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fds_clt_ssl_protocol - computed: true, optional: true, required: false
  private _fdsCltSslProtocol?: string; 
  public get fdsCltSslProtocol() {
    return this.getStringAttribute('fds_clt_ssl_protocol');
  }
  public set fdsCltSslProtocol(value: string) {
    this._fdsCltSslProtocol = value;
  }
  public resetFdsCltSslProtocol() {
    this._fdsCltSslProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fdsCltSslProtocolInput() {
    return this._fdsCltSslProtocol;
  }

  // fds_ssl_protocol - computed: true, optional: true, required: false
  private _fdsSslProtocol?: string; 
  public get fdsSslProtocol() {
    return this.getStringAttribute('fds_ssl_protocol');
  }
  public set fdsSslProtocol(value: string) {
    this._fdsSslProtocol = value;
  }
  public resetFdsSslProtocol() {
    this._fdsSslProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fdsSslProtocolInput() {
    return this._fdsSslProtocol;
  }

  // fmtr_log - computed: true, optional: true, required: false
  private _fmtrLog?: string; 
  public get fmtrLog() {
    return this.getStringAttribute('fmtr_log');
  }
  public set fmtrLog(value: string) {
    this._fmtrLog = value;
  }
  public resetFmtrLog() {
    this._fmtrLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmtrLogInput() {
    return this._fmtrLog;
  }

  // fortiguard_anycast - computed: true, optional: true, required: false
  private _fortiguardAnycast?: string; 
  public get fortiguardAnycast() {
    return this.getStringAttribute('fortiguard_anycast');
  }
  public set fortiguardAnycast(value: string) {
    this._fortiguardAnycast = value;
  }
  public resetFortiguardAnycast() {
    this._fortiguardAnycast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiguardAnycastInput() {
    return this._fortiguardAnycast;
  }

  // fortiguard_anycast_source - computed: true, optional: true, required: false
  private _fortiguardAnycastSource?: string; 
  public get fortiguardAnycastSource() {
    return this.getStringAttribute('fortiguard_anycast_source');
  }
  public set fortiguardAnycastSource(value: string) {
    this._fortiguardAnycastSource = value;
  }
  public resetFortiguardAnycastSource() {
    this._fortiguardAnycastSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiguardAnycastSourceInput() {
    return this._fortiguardAnycastSource;
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

  // max_av_ips_version - computed: true, optional: true, required: false
  private _maxAvIpsVersion?: number; 
  public get maxAvIpsVersion() {
    return this.getNumberAttribute('max_av_ips_version');
  }
  public set maxAvIpsVersion(value: number) {
    this._maxAvIpsVersion = value;
  }
  public resetMaxAvIpsVersion() {
    this._maxAvIpsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAvIpsVersionInput() {
    return this._maxAvIpsVersion;
  }

  // max_work - computed: true, optional: true, required: false
  private _maxWork?: number; 
  public get maxWork() {
    return this.getNumberAttribute('max_work');
  }
  public set maxWork(value: number) {
    this._maxWork = value;
  }
  public resetMaxWork() {
    this._maxWork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkInput() {
    return this._maxWork;
  }

  // send_report - computed: true, optional: true, required: false
  private _sendReport?: string; 
  public get sendReport() {
    return this.getStringAttribute('send_report');
  }
  public set sendReport(value: string) {
    this._sendReport = value;
  }
  public resetSendReport() {
    this._sendReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendReportInput() {
    return this._sendReport;
  }

  // send_setup - computed: true, optional: true, required: false
  private _sendSetup?: string; 
  public get sendSetup() {
    return this.getStringAttribute('send_setup');
  }
  public set sendSetup(value: string) {
    this._sendSetup = value;
  }
  public resetSendSetup() {
    this._sendSetup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendSetupInput() {
    return this._sendSetup;
  }

  // system_support_fai - computed: true, optional: true, required: false
  private _systemSupportFai?: string[]; 
  public get systemSupportFai() {
    return cdktf.Fn.tolist(this.getListAttribute('system_support_fai'));
  }
  public set systemSupportFai(value: string[]) {
    this._systemSupportFai = value;
  }
  public resetSystemSupportFai() {
    this._systemSupportFai = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemSupportFaiInput() {
    return this._systemSupportFai;
  }

  // system_support_faz - computed: true, optional: true, required: false
  private _systemSupportFaz?: string[]; 
  public get systemSupportFaz() {
    return cdktf.Fn.tolist(this.getListAttribute('system_support_faz'));
  }
  public set systemSupportFaz(value: string[]) {
    this._systemSupportFaz = value;
  }
  public resetSystemSupportFaz() {
    this._systemSupportFaz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemSupportFazInput() {
    return this._systemSupportFaz;
  }

  // system_support_fct - computed: true, optional: true, required: false
  private _systemSupportFct?: string[]; 
  public get systemSupportFct() {
    return cdktf.Fn.tolist(this.getListAttribute('system_support_fct'));
  }
  public set systemSupportFct(value: string[]) {
    this._systemSupportFct = value;
  }
  public resetSystemSupportFct() {
    this._systemSupportFct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemSupportFctInput() {
    return this._systemSupportFct;
  }

  // system_support_fdc - computed: true, optional: true, required: false
  private _systemSupportFdc?: string[]; 
  public get systemSupportFdc() {
    return cdktf.Fn.tolist(this.getListAttribute('system_support_fdc'));
  }
  public set systemSupportFdc(value: string[]) {
    this._systemSupportFdc = value;
  }
  public resetSystemSupportFdc() {
    this._systemSupportFdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemSupportFdcInput() {
    return this._systemSupportFdc;
  }

  // system_support_fgt - computed: true, optional: true, required: false
  private _systemSupportFgt?: string[]; 
  public get systemSupportFgt() {
    return cdktf.Fn.tolist(this.getListAttribute('system_support_fgt'));
  }
  public set systemSupportFgt(value: string[]) {
    this._systemSupportFgt = value;
  }
  public resetSystemSupportFgt() {
    this._systemSupportFgt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemSupportFgtInput() {
    return this._systemSupportFgt;
  }

  // system_support_fis - computed: true, optional: true, required: false
  private _systemSupportFis?: string[]; 
  public get systemSupportFis() {
    return cdktf.Fn.tolist(this.getListAttribute('system_support_fis'));
  }
  public set systemSupportFis(value: string[]) {
    this._systemSupportFis = value;
  }
  public resetSystemSupportFis() {
    this._systemSupportFis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemSupportFisInput() {
    return this._systemSupportFis;
  }

  // system_support_fml - computed: true, optional: true, required: false
  private _systemSupportFml?: string[]; 
  public get systemSupportFml() {
    return cdktf.Fn.tolist(this.getListAttribute('system_support_fml'));
  }
  public set systemSupportFml(value: string[]) {
    this._systemSupportFml = value;
  }
  public resetSystemSupportFml() {
    this._systemSupportFml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemSupportFmlInput() {
    return this._systemSupportFml;
  }

  // system_support_fsa - computed: true, optional: true, required: false
  private _systemSupportFsa?: string[]; 
  public get systemSupportFsa() {
    return cdktf.Fn.tolist(this.getListAttribute('system_support_fsa'));
  }
  public set systemSupportFsa(value: string[]) {
    this._systemSupportFsa = value;
  }
  public resetSystemSupportFsa() {
    this._systemSupportFsa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemSupportFsaInput() {
    return this._systemSupportFsa;
  }

  // system_support_fsw - computed: true, optional: true, required: false
  private _systemSupportFsw?: string[]; 
  public get systemSupportFsw() {
    return cdktf.Fn.tolist(this.getListAttribute('system_support_fsw'));
  }
  public set systemSupportFsw(value: string[]) {
    this._systemSupportFsw = value;
  }
  public resetSystemSupportFsw() {
    this._systemSupportFsw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemSupportFswInput() {
    return this._systemSupportFsw;
  }

  // system_support_fts - computed: true, optional: true, required: false
  private _systemSupportFts?: string[]; 
  public get systemSupportFts() {
    return cdktf.Fn.tolist(this.getListAttribute('system_support_fts'));
  }
  public set systemSupportFts(value: string[]) {
    this._systemSupportFts = value;
  }
  public resetSystemSupportFts() {
    this._systemSupportFts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemSupportFtsInput() {
    return this._systemSupportFts;
  }

  // umsvc_log - computed: true, optional: true, required: false
  private _umsvcLog?: string; 
  public get umsvcLog() {
    return this.getStringAttribute('umsvc_log');
  }
  public set umsvcLog(value: string) {
    this._umsvcLog = value;
  }
  public resetUmsvcLog() {
    this._umsvcLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get umsvcLogInput() {
    return this._umsvcLog;
  }

  // unreg_dev_option - computed: true, optional: true, required: false
  private _unregDevOption?: string; 
  public get unregDevOption() {
    return this.getStringAttribute('unreg_dev_option');
  }
  public set unregDevOption(value: string) {
    this._unregDevOption = value;
  }
  public resetUnregDevOption() {
    this._unregDevOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unregDevOptionInput() {
    return this._unregDevOption;
  }

  // user_agent - computed: true, optional: true, required: false
  private _userAgent?: string; 
  public get userAgent() {
    return this.getStringAttribute('user_agent');
  }
  public set userAgent(value: string) {
    this._userAgent = value;
  }
  public resetUserAgent() {
    this._userAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentInput() {
    return this._userAgent;
  }

  // wanip_query_mode - computed: true, optional: true, required: false
  private _wanipQueryMode?: string; 
  public get wanipQueryMode() {
    return this.getStringAttribute('wanip_query_mode');
  }
  public set wanipQueryMode(value: string) {
    this._wanipQueryMode = value;
  }
  public resetWanipQueryMode() {
    this._wanipQueryMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanipQueryModeInput() {
    return this._wanipQueryMode;
  }

  // push_override - computed: false, optional: true, required: false
  private _pushOverride = new FmupdateFdssettingPushOverrideOutputReference(this, "push_override");
  public get pushOverride() {
    return this._pushOverride;
  }
  public putPushOverride(value: FmupdateFdssettingPushOverride) {
    this._pushOverride.internalValue = value;
  }
  public resetPushOverride() {
    this._pushOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushOverrideInput() {
    return this._pushOverride.internalValue;
  }

  // push_override_to_client - computed: false, optional: true, required: false
  private _pushOverrideToClient = new FmupdateFdssettingPushOverrideToClientOutputReference(this, "push_override_to_client");
  public get pushOverrideToClient() {
    return this._pushOverrideToClient;
  }
  public putPushOverrideToClient(value: FmupdateFdssettingPushOverrideToClient) {
    this._pushOverrideToClient.internalValue = value;
  }
  public resetPushOverrideToClient() {
    this._pushOverrideToClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushOverrideToClientInput() {
    return this._pushOverrideToClient.internalValue;
  }

  // server_override - computed: false, optional: true, required: false
  private _serverOverride = new FmupdateFdssettingServerOverrideOutputReference(this, "server_override");
  public get serverOverride() {
    return this._serverOverride;
  }
  public putServerOverride(value: FmupdateFdssettingServerOverride) {
    this._serverOverride.internalValue = value;
  }
  public resetServerOverride() {
    this._serverOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverOverrideInput() {
    return this._serverOverride.internalValue;
  }

  // update_schedule - computed: false, optional: true, required: false
  private _updateSchedule = new FmupdateFdssettingUpdateScheduleOutputReference(this, "update_schedule");
  public get updateSchedule() {
    return this._updateSchedule;
  }
  public putUpdateSchedule(value: FmupdateFdssettingUpdateSchedule) {
    this._updateSchedule.internalValue = value;
  }
  public resetUpdateSchedule() {
    this._updateSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateScheduleInput() {
    return this._updateSchedule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fds_clt_ssl_protocol: cdktf.stringToTerraform(this._fdsCltSslProtocol),
      fds_ssl_protocol: cdktf.stringToTerraform(this._fdsSslProtocol),
      fmtr_log: cdktf.stringToTerraform(this._fmtrLog),
      fortiguard_anycast: cdktf.stringToTerraform(this._fortiguardAnycast),
      fortiguard_anycast_source: cdktf.stringToTerraform(this._fortiguardAnycastSource),
      id: cdktf.stringToTerraform(this._id),
      linkd_log: cdktf.stringToTerraform(this._linkdLog),
      max_av_ips_version: cdktf.numberToTerraform(this._maxAvIpsVersion),
      max_work: cdktf.numberToTerraform(this._maxWork),
      send_report: cdktf.stringToTerraform(this._sendReport),
      send_setup: cdktf.stringToTerraform(this._sendSetup),
      system_support_fai: cdktf.listMapper(cdktf.stringToTerraform, false)(this._systemSupportFai),
      system_support_faz: cdktf.listMapper(cdktf.stringToTerraform, false)(this._systemSupportFaz),
      system_support_fct: cdktf.listMapper(cdktf.stringToTerraform, false)(this._systemSupportFct),
      system_support_fdc: cdktf.listMapper(cdktf.stringToTerraform, false)(this._systemSupportFdc),
      system_support_fgt: cdktf.listMapper(cdktf.stringToTerraform, false)(this._systemSupportFgt),
      system_support_fis: cdktf.listMapper(cdktf.stringToTerraform, false)(this._systemSupportFis),
      system_support_fml: cdktf.listMapper(cdktf.stringToTerraform, false)(this._systemSupportFml),
      system_support_fsa: cdktf.listMapper(cdktf.stringToTerraform, false)(this._systemSupportFsa),
      system_support_fsw: cdktf.listMapper(cdktf.stringToTerraform, false)(this._systemSupportFsw),
      system_support_fts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._systemSupportFts),
      umsvc_log: cdktf.stringToTerraform(this._umsvcLog),
      unreg_dev_option: cdktf.stringToTerraform(this._unregDevOption),
      user_agent: cdktf.stringToTerraform(this._userAgent),
      wanip_query_mode: cdktf.stringToTerraform(this._wanipQueryMode),
      push_override: fmupdateFdssettingPushOverrideToTerraform(this._pushOverride.internalValue),
      push_override_to_client: fmupdateFdssettingPushOverrideToClientToTerraform(this._pushOverrideToClient.internalValue),
      server_override: fmupdateFdssettingServerOverrideToTerraform(this._serverOverride.internalValue),
      update_schedule: fmupdateFdssettingUpdateScheduleToTerraform(this._updateSchedule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fds_clt_ssl_protocol: {
        value: cdktf.stringToHclTerraform(this._fdsCltSslProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fds_ssl_protocol: {
        value: cdktf.stringToHclTerraform(this._fdsSslProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fmtr_log: {
        value: cdktf.stringToHclTerraform(this._fmtrLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiguard_anycast: {
        value: cdktf.stringToHclTerraform(this._fortiguardAnycast),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiguard_anycast_source: {
        value: cdktf.stringToHclTerraform(this._fortiguardAnycastSource),
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
      linkd_log: {
        value: cdktf.stringToHclTerraform(this._linkdLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_av_ips_version: {
        value: cdktf.numberToHclTerraform(this._maxAvIpsVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_work: {
        value: cdktf.numberToHclTerraform(this._maxWork),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      send_report: {
        value: cdktf.stringToHclTerraform(this._sendReport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_setup: {
        value: cdktf.stringToHclTerraform(this._sendSetup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_support_fai: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._systemSupportFai),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      system_support_faz: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._systemSupportFaz),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      system_support_fct: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._systemSupportFct),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      system_support_fdc: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._systemSupportFdc),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      system_support_fgt: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._systemSupportFgt),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      system_support_fis: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._systemSupportFis),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      system_support_fml: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._systemSupportFml),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      system_support_fsa: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._systemSupportFsa),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      system_support_fsw: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._systemSupportFsw),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      system_support_fts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._systemSupportFts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      umsvc_log: {
        value: cdktf.stringToHclTerraform(this._umsvcLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unreg_dev_option: {
        value: cdktf.stringToHclTerraform(this._unregDevOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_agent: {
        value: cdktf.stringToHclTerraform(this._userAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wanip_query_mode: {
        value: cdktf.stringToHclTerraform(this._wanipQueryMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      push_override: {
        value: fmupdateFdssettingPushOverrideToHclTerraform(this._pushOverride.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FmupdateFdssettingPushOverrideList",
      },
      push_override_to_client: {
        value: fmupdateFdssettingPushOverrideToClientToHclTerraform(this._pushOverrideToClient.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FmupdateFdssettingPushOverrideToClientList",
      },
      server_override: {
        value: fmupdateFdssettingServerOverrideToHclTerraform(this._serverOverride.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FmupdateFdssettingServerOverrideList",
      },
      update_schedule: {
        value: fmupdateFdssettingUpdateScheduleToHclTerraform(this._updateSchedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FmupdateFdssettingUpdateScheduleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
