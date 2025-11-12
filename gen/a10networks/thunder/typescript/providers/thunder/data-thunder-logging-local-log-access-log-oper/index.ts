// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_access_log_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderLoggingLocalLogAccessLogOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_access_log_oper#id DataThunderLoggingLocalLogAccessLogOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_access_log_oper#oper DataThunderLoggingLocalLogAccessLogOper#oper}
  */
  readonly oper?: DataThunderLoggingLocalLogAccessLogOperOper;
}
export interface DataThunderLoggingLocalLogAccessLogOperOperLogListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_access_log_oper#action DataThunderLoggingLocalLogAccessLogOper#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_access_log_oper#client_ip DataThunderLoggingLocalLogAccessLogOper#client_ip}
  */
  readonly clientIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_access_log_oper#destination_ip DataThunderLoggingLocalLogAccessLogOper#destination_ip}
  */
  readonly destinationIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_access_log_oper#destination_port DataThunderLoggingLocalLogAccessLogOper#destination_port}
  */
  readonly destinationPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_access_log_oper#policy DataThunderLoggingLocalLogAccessLogOper#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_access_log_oper#reason DataThunderLoggingLocalLogAccessLogOper#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_access_log_oper#source_port DataThunderLoggingLocalLogAccessLogOper#source_port}
  */
  readonly sourcePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_access_log_oper#ssl_status DataThunderLoggingLocalLogAccessLogOper#ssl_status}
  */
  readonly sslStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_access_log_oper#time DataThunderLoggingLocalLogAccessLogOper#time}
  */
  readonly time?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_access_log_oper#uri DataThunderLoggingLocalLogAccessLogOper#uri}
  */
  readonly uri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_access_log_oper#user_domain DataThunderLoggingLocalLogAccessLogOper#user_domain}
  */
  readonly userDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_access_log_oper#user_name DataThunderLoggingLocalLogAccessLogOper#user_name}
  */
  readonly userName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_access_log_oper#vip_name DataThunderLoggingLocalLogAccessLogOper#vip_name}
  */
  readonly vipName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_access_log_oper#vip_port DataThunderLoggingLocalLogAccessLogOper#vip_port}
  */
  readonly vipPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_access_log_oper#web_category DataThunderLoggingLocalLogAccessLogOper#web_category}
  */
  readonly webCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_access_log_oper#web_domain DataThunderLoggingLocalLogAccessLogOper#web_domain}
  */
  readonly webDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_access_log_oper#web_reputation DataThunderLoggingLocalLogAccessLogOper#web_reputation}
  */
  readonly webReputation?: string;
}

export function dataThunderLoggingLocalLogAccessLogOperOperLogListStructToTerraform(struct?: DataThunderLoggingLocalLogAccessLogOperOperLogListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    client_ip: cdktf.stringToTerraform(struct!.clientIp),
    destination_ip: cdktf.stringToTerraform(struct!.destinationIp),
    destination_port: cdktf.numberToTerraform(struct!.destinationPort),
    policy: cdktf.stringToTerraform(struct!.policy),
    reason: cdktf.stringToTerraform(struct!.reason),
    source_port: cdktf.numberToTerraform(struct!.sourcePort),
    ssl_status: cdktf.stringToTerraform(struct!.sslStatus),
    time: cdktf.stringToTerraform(struct!.time),
    uri: cdktf.stringToTerraform(struct!.uri),
    user_domain: cdktf.stringToTerraform(struct!.userDomain),
    user_name: cdktf.stringToTerraform(struct!.userName),
    vip_name: cdktf.stringToTerraform(struct!.vipName),
    vip_port: cdktf.numberToTerraform(struct!.vipPort),
    web_category: cdktf.stringToTerraform(struct!.webCategory),
    web_domain: cdktf.stringToTerraform(struct!.webDomain),
    web_reputation: cdktf.stringToTerraform(struct!.webReputation),
  }
}


export function dataThunderLoggingLocalLogAccessLogOperOperLogListStructToHclTerraform(struct?: DataThunderLoggingLocalLogAccessLogOperOperLogListStruct | cdktf.IResolvable): any {
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
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    web_domain: {
      value: cdktf.stringToHclTerraform(struct!.webDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_reputation: {
      value: cdktf.stringToHclTerraform(struct!.webReputation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderLoggingLocalLogAccessLogOperOperLogListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderLoggingLocalLogAccessLogOperOperLogListStruct | cdktf.IResolvable | undefined {
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
    if (this._destinationIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIp = this._destinationIp;
    }
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
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
    if (this._webDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.webDomain = this._webDomain;
    }
    if (this._webReputation !== undefined) {
      hasAnyValues = true;
      internalValueResult.webReputation = this._webReputation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderLoggingLocalLogAccessLogOperOperLogListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._clientIp = undefined;
      this._destinationIp = undefined;
      this._destinationPort = undefined;
      this._policy = undefined;
      this._reason = undefined;
      this._sourcePort = undefined;
      this._sslStatus = undefined;
      this._time = undefined;
      this._uri = undefined;
      this._userDomain = undefined;
      this._userName = undefined;
      this._vipName = undefined;
      this._vipPort = undefined;
      this._webCategory = undefined;
      this._webDomain = undefined;
      this._webReputation = undefined;
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
      this._destinationIp = value.destinationIp;
      this._destinationPort = value.destinationPort;
      this._policy = value.policy;
      this._reason = value.reason;
      this._sourcePort = value.sourcePort;
      this._sslStatus = value.sslStatus;
      this._time = value.time;
      this._uri = value.uri;
      this._userDomain = value.userDomain;
      this._userName = value.userName;
      this._vipName = value.vipName;
      this._vipPort = value.vipPort;
      this._webCategory = value.webCategory;
      this._webDomain = value.webDomain;
      this._webReputation = value.webReputation;
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

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
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

  // web_domain - computed: false, optional: true, required: false
  private _webDomain?: string; 
  public get webDomain() {
    return this.getStringAttribute('web_domain');
  }
  public set webDomain(value: string) {
    this._webDomain = value;
  }
  public resetWebDomain() {
    this._webDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webDomainInput() {
    return this._webDomain;
  }

  // web_reputation - computed: false, optional: true, required: false
  private _webReputation?: string; 
  public get webReputation() {
    return this.getStringAttribute('web_reputation');
  }
  public set webReputation(value: string) {
    this._webReputation = value;
  }
  public resetWebReputation() {
    this._webReputation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webReputationInput() {
    return this._webReputation;
  }
}

export class DataThunderLoggingLocalLogAccessLogOperOperLogListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderLoggingLocalLogAccessLogOperOperLogListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderLoggingLocalLogAccessLogOperOperLogListStructOutputReference {
    return new DataThunderLoggingLocalLogAccessLogOperOperLogListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderLoggingLocalLogAccessLogOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_access_log_oper#interval DataThunderLoggingLocalLogAccessLogOper#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_access_log_oper#interval_position DataThunderLoggingLocalLogAccessLogOper#interval_position}
  */
  readonly intervalPosition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_access_log_oper#max_entries DataThunderLoggingLocalLogAccessLogOper#max_entries}
  */
  readonly maxEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_access_log_oper#start_time DataThunderLoggingLocalLogAccessLogOper#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_access_log_oper#total DataThunderLoggingLocalLogAccessLogOper#total}
  */
  readonly total?: number;
  /**
  * log_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_access_log_oper#log_list DataThunderLoggingLocalLogAccessLogOper#log_list}
  */
  readonly logList?: DataThunderLoggingLocalLogAccessLogOperOperLogListStruct[] | cdktf.IResolvable;
}

export function dataThunderLoggingLocalLogAccessLogOperOperToTerraform(struct?: DataThunderLoggingLocalLogAccessLogOperOperOutputReference | DataThunderLoggingLocalLogAccessLogOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    interval_position: cdktf.stringToTerraform(struct!.intervalPosition),
    max_entries: cdktf.numberToTerraform(struct!.maxEntries),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    total: cdktf.numberToTerraform(struct!.total),
    log_list: cdktf.listMapper(dataThunderLoggingLocalLogAccessLogOperOperLogListStructToTerraform, true)(struct!.logList),
  }
}


export function dataThunderLoggingLocalLogAccessLogOperOperToHclTerraform(struct?: DataThunderLoggingLocalLogAccessLogOperOperOutputReference | DataThunderLoggingLocalLogAccessLogOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval_position: {
      value: cdktf.stringToHclTerraform(struct!.intervalPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_entries: {
      value: cdktf.numberToHclTerraform(struct!.maxEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total: {
      value: cdktf.numberToHclTerraform(struct!.total),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_list: {
      value: cdktf.listMapperHcl(dataThunderLoggingLocalLogAccessLogOperOperLogListStructToHclTerraform, true)(struct!.logList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderLoggingLocalLogAccessLogOperOperLogListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderLoggingLocalLogAccessLogOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderLoggingLocalLogAccessLogOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalPosition = this._intervalPosition;
    }
    if (this._maxEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEntries = this._maxEntries;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
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

  public set internalValue(value: DataThunderLoggingLocalLogAccessLogOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._intervalPosition = undefined;
      this._maxEntries = undefined;
      this._startTime = undefined;
      this._total = undefined;
      this._logList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._intervalPosition = value.intervalPosition;
      this._maxEntries = value.maxEntries;
      this._startTime = value.startTime;
      this._total = value.total;
      this._logList.internalValue = value.logList;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_position - computed: false, optional: true, required: false
  private _intervalPosition?: string; 
  public get intervalPosition() {
    return this.getStringAttribute('interval_position');
  }
  public set intervalPosition(value: string) {
    this._intervalPosition = value;
  }
  public resetIntervalPosition() {
    this._intervalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalPositionInput() {
    return this._intervalPosition;
  }

  // max_entries - computed: false, optional: true, required: false
  private _maxEntries?: number; 
  public get maxEntries() {
    return this.getNumberAttribute('max_entries');
  }
  public set maxEntries(value: number) {
    this._maxEntries = value;
  }
  public resetMaxEntries() {
    this._maxEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEntriesInput() {
    return this._maxEntries;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
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
  private _logList = new DataThunderLoggingLocalLogAccessLogOperOperLogListStructList(this, "log_list", false);
  public get logList() {
    return this._logList;
  }
  public putLogList(value: DataThunderLoggingLocalLogAccessLogOperOperLogListStruct[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_access_log_oper thunder_logging_local_log_access_log_oper}
*/
export class DataThunderLoggingLocalLogAccessLogOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_logging_local_log_access_log_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderLoggingLocalLogAccessLogOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderLoggingLocalLogAccessLogOper to import
  * @param importFromId The id of the existing DataThunderLoggingLocalLogAccessLogOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_access_log_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderLoggingLocalLogAccessLogOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_logging_local_log_access_log_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/logging_local_log_access_log_oper thunder_logging_local_log_access_log_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderLoggingLocalLogAccessLogOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderLoggingLocalLogAccessLogOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_logging_local_log_access_log_oper',
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
  private _oper = new DataThunderLoggingLocalLogAccessLogOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderLoggingLocalLogAccessLogOperOper) {
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
      oper: dataThunderLoggingLocalLogAccessLogOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderLoggingLocalLogAccessLogOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderLoggingLocalLogAccessLogOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
