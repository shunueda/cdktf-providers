// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAccessLogOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper#id DataThunderAamAccessLogOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper#oper DataThunderAamAccessLogOper#oper}
  */
  readonly oper?: DataThunderAamAccessLogOperOper;
}
export interface DataThunderAamAccessLogOperOperLogListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper#action DataThunderAamAccessLogOper#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper#client_ip DataThunderAamAccessLogOper#client_ip}
  */
  readonly clientIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper#counter DataThunderAamAccessLogOper#counter}
  */
  readonly counter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper#destination_ip DataThunderAamAccessLogOper#destination_ip}
  */
  readonly destinationIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper#destination_port DataThunderAamAccessLogOper#destination_port}
  */
  readonly destinationPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper#host DataThunderAamAccessLogOper#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper#policy DataThunderAamAccessLogOper#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper#record_id DataThunderAamAccessLogOper#record_id}
  */
  readonly recordId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper#source_port DataThunderAamAccessLogOper#source_port}
  */
  readonly sourcePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper#ssl_status DataThunderAamAccessLogOper#ssl_status}
  */
  readonly sslStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper#time DataThunderAamAccessLogOper#time}
  */
  readonly time?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper#uri DataThunderAamAccessLogOper#uri}
  */
  readonly uri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper#user_domain DataThunderAamAccessLogOper#user_domain}
  */
  readonly userDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper#user_name DataThunderAamAccessLogOper#user_name}
  */
  readonly userName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper#vip_name DataThunderAamAccessLogOper#vip_name}
  */
  readonly vipName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper#vip_port DataThunderAamAccessLogOper#vip_port}
  */
  readonly vipPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper#web_category DataThunderAamAccessLogOper#web_category}
  */
  readonly webCategory?: string;
}

export function dataThunderAamAccessLogOperOperLogListStructToTerraform(struct?: DataThunderAamAccessLogOperOperLogListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    client_ip: cdktf.stringToTerraform(struct!.clientIp),
    counter: cdktf.numberToTerraform(struct!.counter),
    destination_ip: cdktf.stringToTerraform(struct!.destinationIp),
    destination_port: cdktf.numberToTerraform(struct!.destinationPort),
    host: cdktf.stringToTerraform(struct!.host),
    policy: cdktf.stringToTerraform(struct!.policy),
    record_id: cdktf.numberToTerraform(struct!.recordId),
    source_port: cdktf.numberToTerraform(struct!.sourcePort),
    ssl_status: cdktf.stringToTerraform(struct!.sslStatus),
    time: cdktf.stringToTerraform(struct!.time),
    uri: cdktf.stringToTerraform(struct!.uri),
    user_domain: cdktf.stringToTerraform(struct!.userDomain),
    user_name: cdktf.stringToTerraform(struct!.userName),
    vip_name: cdktf.stringToTerraform(struct!.vipName),
    vip_port: cdktf.numberToTerraform(struct!.vipPort),
    web_category: cdktf.stringToTerraform(struct!.webCategory),
  }
}


export function dataThunderAamAccessLogOperOperLogListStructToHclTerraform(struct?: DataThunderAamAccessLogOperOperLogListStruct | cdktf.IResolvable): any {
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
    client_ip: {
      value: cdktf.stringToHclTerraform(struct!.clientIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    counter: {
      value: cdktf.numberToHclTerraform(struct!.counter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination_ip: {
      value: cdktf.stringToHclTerraform(struct!.destinationIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port: {
      value: cdktf.numberToHclTerraform(struct!.destinationPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    record_id: {
      value: cdktf.numberToHclTerraform(struct!.recordId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_port: {
      value: cdktf.numberToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_status: {
      value: cdktf.stringToHclTerraform(struct!.sslStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_domain: {
      value: cdktf.stringToHclTerraform(struct!.userDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip_name: {
      value: cdktf.stringToHclTerraform(struct!.vipName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip_port: {
      value: cdktf.numberToHclTerraform(struct!.vipPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    web_category: {
      value: cdktf.stringToHclTerraform(struct!.webCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAccessLogOperOperLogListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAamAccessLogOperOperLogListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._clientIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp;
    }
    if (this._counter !== undefined) {
      hasAnyValues = true;
      internalValueResult.counter = this._counter;
    }
    if (this._destinationIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIp = this._destinationIp;
    }
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._recordId !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordId = this._recordId;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    if (this._sslStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslStatus = this._sslStatus;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._userDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDomain = this._userDomain;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    if (this._vipName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipName = this._vipName;
    }
    if (this._vipPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipPort = this._vipPort;
    }
    if (this._webCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.webCategory = this._webCategory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAccessLogOperOperLogListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._clientIp = undefined;
      this._counter = undefined;
      this._destinationIp = undefined;
      this._destinationPort = undefined;
      this._host = undefined;
      this._policy = undefined;
      this._recordId = undefined;
      this._sourcePort = undefined;
      this._sslStatus = undefined;
      this._time = undefined;
      this._uri = undefined;
      this._userDomain = undefined;
      this._userName = undefined;
      this._vipName = undefined;
      this._vipPort = undefined;
      this._webCategory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._clientIp = value.clientIp;
      this._counter = value.counter;
      this._destinationIp = value.destinationIp;
      this._destinationPort = value.destinationPort;
      this._host = value.host;
      this._policy = value.policy;
      this._recordId = value.recordId;
      this._sourcePort = value.sourcePort;
      this._sslStatus = value.sslStatus;
      this._time = value.time;
      this._uri = value.uri;
      this._userDomain = value.userDomain;
      this._userName = value.userName;
      this._vipName = value.vipName;
      this._vipPort = value.vipPort;
      this._webCategory = value.webCategory;
    }
  }

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

  // client_ip - computed: false, optional: true, required: false
  private _clientIp?: string; 
  public get clientIp() {
    return this.getStringAttribute('client_ip');
  }
  public set clientIp(value: string) {
    this._clientIp = value;
  }
  public resetClientIp() {
    this._clientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp;
  }

  // counter - computed: false, optional: true, required: false
  private _counter?: number; 
  public get counter() {
    return this.getNumberAttribute('counter');
  }
  public set counter(value: number) {
    this._counter = value;
  }
  public resetCounter() {
    this._counter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counterInput() {
    return this._counter;
  }

  // destination_ip - computed: false, optional: true, required: false
  private _destinationIp?: string; 
  public get destinationIp() {
    return this.getStringAttribute('destination_ip');
  }
  public set destinationIp(value: string) {
    this._destinationIp = value;
  }
  public resetDestinationIp() {
    this._destinationIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpInput() {
    return this._destinationIp;
  }

  // destination_port - computed: false, optional: true, required: false
  private _destinationPort?: number; 
  public get destinationPort() {
    return this.getNumberAttribute('destination_port');
  }
  public set destinationPort(value: number) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // record_id - computed: false, optional: true, required: false
  private _recordId?: number; 
  public get recordId() {
    return this.getNumberAttribute('record_id');
  }
  public set recordId(value: number) {
    this._recordId = value;
  }
  public resetRecordId() {
    this._recordId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIdInput() {
    return this._recordId;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: number; 
  public get sourcePort() {
    return this.getNumberAttribute('source_port');
  }
  public set sourcePort(value: number) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // ssl_status - computed: false, optional: true, required: false
  private _sslStatus?: string; 
  public get sslStatus() {
    return this.getStringAttribute('ssl_status');
  }
  public set sslStatus(value: string) {
    this._sslStatus = value;
  }
  public resetSslStatus() {
    this._sslStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslStatusInput() {
    return this._sslStatus;
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // user_domain - computed: false, optional: true, required: false
  private _userDomain?: string; 
  public get userDomain() {
    return this.getStringAttribute('user_domain');
  }
  public set userDomain(value: string) {
    this._userDomain = value;
  }
  public resetUserDomain() {
    this._userDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDomainInput() {
    return this._userDomain;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // vip_name - computed: false, optional: true, required: false
  private _vipName?: string; 
  public get vipName() {
    return this.getStringAttribute('vip_name');
  }
  public set vipName(value: string) {
    this._vipName = value;
  }
  public resetVipName() {
    this._vipName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipNameInput() {
    return this._vipName;
  }

  // vip_port - computed: false, optional: true, required: false
  private _vipPort?: number; 
  public get vipPort() {
    return this.getNumberAttribute('vip_port');
  }
  public set vipPort(value: number) {
    this._vipPort = value;
  }
  public resetVipPort() {
    this._vipPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipPortInput() {
    return this._vipPort;
  }

  // web_category - computed: false, optional: true, required: false
  private _webCategory?: string; 
  public get webCategory() {
    return this.getStringAttribute('web_category');
  }
  public set webCategory(value: string) {
    this._webCategory = value;
  }
  public resetWebCategory() {
    this._webCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCategoryInput() {
    return this._webCategory;
  }
}

export class DataThunderAamAccessLogOperOperLogListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAamAccessLogOperOperLogListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAamAccessLogOperOperLogListStructOutputReference {
    return new DataThunderAamAccessLogOperOperLogListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAamAccessLogOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper#access_status DataThunderAamAccessLogOper#access_status}
  */
  readonly accessStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper#host_name DataThunderAamAccessLogOper#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper#last DataThunderAamAccessLogOper#last}
  */
  readonly last?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper#tail DataThunderAamAccessLogOper#tail}
  */
  readonly tail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper#target DataThunderAamAccessLogOper#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper#top DataThunderAamAccessLogOper#top}
  */
  readonly top?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper#total DataThunderAamAccessLogOper#total}
  */
  readonly total?: number;
  /**
  * log_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper#log_list DataThunderAamAccessLogOper#log_list}
  */
  readonly logList?: DataThunderAamAccessLogOperOperLogListStruct[] | cdktf.IResolvable;
}

export function dataThunderAamAccessLogOperOperToTerraform(struct?: DataThunderAamAccessLogOperOperOutputReference | DataThunderAamAccessLogOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_status: cdktf.stringToTerraform(struct!.accessStatus),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    last: cdktf.numberToTerraform(struct!.last),
    tail: cdktf.numberToTerraform(struct!.tail),
    target: cdktf.stringToTerraform(struct!.target),
    top: cdktf.numberToTerraform(struct!.top),
    total: cdktf.numberToTerraform(struct!.total),
    log_list: cdktf.listMapper(dataThunderAamAccessLogOperOperLogListStructToTerraform, true)(struct!.logList),
  }
}


export function dataThunderAamAccessLogOperOperToHclTerraform(struct?: DataThunderAamAccessLogOperOperOutputReference | DataThunderAamAccessLogOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_status: {
      value: cdktf.stringToHclTerraform(struct!.accessStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last: {
      value: cdktf.numberToHclTerraform(struct!.last),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tail: {
      value: cdktf.numberToHclTerraform(struct!.tail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    top: {
      value: cdktf.numberToHclTerraform(struct!.top),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total: {
      value: cdktf.numberToHclTerraform(struct!.total),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_list: {
      value: cdktf.listMapperHcl(dataThunderAamAccessLogOperOperLogListStructToHclTerraform, true)(struct!.logList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAamAccessLogOperOperLogListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAccessLogOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAccessLogOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessStatus = this._accessStatus;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._last !== undefined) {
      hasAnyValues = true;
      internalValueResult.last = this._last;
    }
    if (this._tail !== undefined) {
      hasAnyValues = true;
      internalValueResult.tail = this._tail;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._top !== undefined) {
      hasAnyValues = true;
      internalValueResult.top = this._top;
    }
    if (this._total !== undefined) {
      hasAnyValues = true;
      internalValueResult.total = this._total;
    }
    if (this._logList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logList = this._logList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAccessLogOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessStatus = undefined;
      this._hostName = undefined;
      this._last = undefined;
      this._tail = undefined;
      this._target = undefined;
      this._top = undefined;
      this._total = undefined;
      this._logList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessStatus = value.accessStatus;
      this._hostName = value.hostName;
      this._last = value.last;
      this._tail = value.tail;
      this._target = value.target;
      this._top = value.top;
      this._total = value.total;
      this._logList.internalValue = value.logList;
    }
  }

  // access_status - computed: false, optional: true, required: false
  private _accessStatus?: string; 
  public get accessStatus() {
    return this.getStringAttribute('access_status');
  }
  public set accessStatus(value: string) {
    this._accessStatus = value;
  }
  public resetAccessStatus() {
    this._accessStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessStatusInput() {
    return this._accessStatus;
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // last - computed: false, optional: true, required: false
  private _last?: number; 
  public get last() {
    return this.getNumberAttribute('last');
  }
  public set last(value: number) {
    this._last = value;
  }
  public resetLast() {
    this._last = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastInput() {
    return this._last;
  }

  // tail - computed: false, optional: true, required: false
  private _tail?: number; 
  public get tail() {
    return this.getNumberAttribute('tail');
  }
  public set tail(value: number) {
    this._tail = value;
  }
  public resetTail() {
    this._tail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tailInput() {
    return this._tail;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // top - computed: false, optional: true, required: false
  private _top?: number; 
  public get top() {
    return this.getNumberAttribute('top');
  }
  public set top(value: number) {
    this._top = value;
  }
  public resetTop() {
    this._top = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top;
  }

  // total - computed: false, optional: true, required: false
  private _total?: number; 
  public get total() {
    return this.getNumberAttribute('total');
  }
  public set total(value: number) {
    this._total = value;
  }
  public resetTotal() {
    this._total = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInput() {
    return this._total;
  }

  // log_list - computed: false, optional: true, required: false
  private _logList = new DataThunderAamAccessLogOperOperLogListStructList(this, "log_list", false);
  public get logList() {
    return this._logList;
  }
  public putLogList(value: DataThunderAamAccessLogOperOperLogListStruct[] | cdktf.IResolvable) {
    this._logList.internalValue = value;
  }
  public resetLogList() {
    this._logList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logListInput() {
    return this._logList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper thunder_aam_access_log_oper}
*/
export class DataThunderAamAccessLogOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_access_log_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAccessLogOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAccessLogOper to import
  * @param importFromId The id of the existing DataThunderAamAccessLogOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAccessLogOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_access_log_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_access_log_oper thunder_aam_access_log_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAccessLogOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAccessLogOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_access_log_oper',
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
  private _oper = new DataThunderAamAccessLogOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderAamAccessLogOperOper) {
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
      oper: dataThunderAamAccessLogOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderAamAccessLogOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAccessLogOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
