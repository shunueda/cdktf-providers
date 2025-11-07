// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbProtocolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Automatically detect SLB Config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol#auto_detect GslbProtocol#auto_detect}
  */
  readonly autoDetect?: number;
  /**
  * Disable new gslb config sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol#disable_new_gslb_sync GslbProtocol#disable_new_gslb_sync}
  */
  readonly disableNewGslbSync?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol#id GslbProtocol#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Run GSLB Protocol in compatible mode with a ACOS 2.x GSLB peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol#msg_format_acos_2x GslbProtocol#msg_format_acos_2x}
  */
  readonly msgFormatAcos2X?: number;
  /**
  * name of site or ip address to ping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol#ping_site GslbProtocol#ping_site}
  */
  readonly pingSite?: string;
  /**
  * Specify GSLB Message Protocol update period (The GSLB Protocol update interval (seconds), default is 30)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol#status_interval GslbProtocol#status_interval}
  */
  readonly statusInterval?: number;
  /**
  * Use management port for connections in Shared Partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol#use_mgmt_port GslbProtocol#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * Use management port for connections in all L3v Partitions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol#use_mgmt_port_for_all_partitions GslbProtocol#use_mgmt_port_for_all_partitions}
  */
  readonly useMgmtPortForAllPartitions?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol#uuid GslbProtocol#uuid}
  */
  readonly uuid?: string;
  /**
  * enable_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol#enable_list GslbProtocol#enable_list}
  */
  readonly enableList?: GslbProtocolEnableListStruct[] | cdktf.IResolvable;
  /**
  * limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol#limit GslbProtocol#limit}
  */
  readonly limit?: GslbProtocolLimit;
  /**
  * secure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol#secure GslbProtocol#secure}
  */
  readonly secure?: GslbProtocolSecure;
}
export interface GslbProtocolEnableListStruct {
  /**
  * 'controller': Enable/Disable GSLB protocol as GSLB controller; 'device': Enable/Disable GSLB protocol as site device;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol#type GslbProtocol#type}
  */
  readonly type: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol#uuid GslbProtocol#uuid}
  */
  readonly uuid?: string;
}

export function gslbProtocolEnableListStructToTerraform(struct?: GslbProtocolEnableListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function gslbProtocolEnableListStructToHclTerraform(struct?: GslbProtocolEnableListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbProtocolEnableListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbProtocolEnableListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: GslbProtocolEnableListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._type = value.type;
      this._uuid = value.uuid;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
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

export class GslbProtocolEnableListStructList extends cdktf.ComplexList {
  public internalValue? : GslbProtocolEnableListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbProtocolEnableListStructOutputReference {
    return new GslbProtocolEnableListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbProtocolLimit {
  /**
  * Query Messages of Active RDT, default is 200 (Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol#ardt_query GslbProtocol#ardt_query}
  */
  readonly ardtQuery?: number;
  /**
  * Response Messages of Active RDT, default is 1000 (Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol#ardt_response GslbProtocol#ardt_response}
  */
  readonly ardtResponse?: number;
  /**
  * Sessions of Active RDT, default is 32768 (Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol#ardt_session GslbProtocol#ardt_session}
  */
  readonly ardtSession?: number;
  /**
  * Response Messages of Connection Load, default is no limit (Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol#conn_response GslbProtocol#conn_response}
  */
  readonly connResponse?: number;
  /**
  * Amount of Messages, default is 10000 (Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol#message GslbProtocol#message}
  */
  readonly message?: number;
  /**
  * Amount of Response Messages, default is 3600 (Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol#response GslbProtocol#response}
  */
  readonly response?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol#uuid GslbProtocol#uuid}
  */
  readonly uuid?: string;
}

export function gslbProtocolLimitToTerraform(struct?: GslbProtocolLimitOutputReference | GslbProtocolLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ardt_query: cdktf.numberToTerraform(struct!.ardtQuery),
    ardt_response: cdktf.numberToTerraform(struct!.ardtResponse),
    ardt_session: cdktf.numberToTerraform(struct!.ardtSession),
    conn_response: cdktf.numberToTerraform(struct!.connResponse),
    message: cdktf.numberToTerraform(struct!.message),
    response: cdktf.numberToTerraform(struct!.response),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function gslbProtocolLimitToHclTerraform(struct?: GslbProtocolLimitOutputReference | GslbProtocolLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ardt_query: {
      value: cdktf.numberToHclTerraform(struct!.ardtQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ardt_response: {
      value: cdktf.numberToHclTerraform(struct!.ardtResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ardt_session: {
      value: cdktf.numberToHclTerraform(struct!.ardtSession),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_response: {
      value: cdktf.numberToHclTerraform(struct!.connResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message: {
      value: cdktf.numberToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response: {
      value: cdktf.numberToHclTerraform(struct!.response),
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

export class GslbProtocolLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GslbProtocolLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ardtQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.ardtQuery = this._ardtQuery;
    }
    if (this._ardtResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.ardtResponse = this._ardtResponse;
    }
    if (this._ardtSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.ardtSession = this._ardtSession;
    }
    if (this._connResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.connResponse = this._connResponse;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbProtocolLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ardtQuery = undefined;
      this._ardtResponse = undefined;
      this._ardtSession = undefined;
      this._connResponse = undefined;
      this._message = undefined;
      this._response = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ardtQuery = value.ardtQuery;
      this._ardtResponse = value.ardtResponse;
      this._ardtSession = value.ardtSession;
      this._connResponse = value.connResponse;
      this._message = value.message;
      this._response = value.response;
      this._uuid = value.uuid;
    }
  }

  // ardt_query - computed: false, optional: true, required: false
  private _ardtQuery?: number; 
  public get ardtQuery() {
    return this.getNumberAttribute('ardt_query');
  }
  public set ardtQuery(value: number) {
    this._ardtQuery = value;
  }
  public resetArdtQuery() {
    this._ardtQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ardtQueryInput() {
    return this._ardtQuery;
  }

  // ardt_response - computed: false, optional: true, required: false
  private _ardtResponse?: number; 
  public get ardtResponse() {
    return this.getNumberAttribute('ardt_response');
  }
  public set ardtResponse(value: number) {
    this._ardtResponse = value;
  }
  public resetArdtResponse() {
    this._ardtResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ardtResponseInput() {
    return this._ardtResponse;
  }

  // ardt_session - computed: false, optional: true, required: false
  private _ardtSession?: number; 
  public get ardtSession() {
    return this.getNumberAttribute('ardt_session');
  }
  public set ardtSession(value: number) {
    this._ardtSession = value;
  }
  public resetArdtSession() {
    this._ardtSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ardtSessionInput() {
    return this._ardtSession;
  }

  // conn_response - computed: false, optional: true, required: false
  private _connResponse?: number; 
  public get connResponse() {
    return this.getNumberAttribute('conn_response');
  }
  public set connResponse(value: number) {
    this._connResponse = value;
  }
  public resetConnResponse() {
    this._connResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connResponseInput() {
    return this._connResponse;
  }

  // message - computed: false, optional: true, required: false
  private _message?: number; 
  public get message() {
    return this.getNumberAttribute('message');
  }
  public set message(value: number) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // response - computed: false, optional: true, required: false
  private _response?: number; 
  public get response() {
    return this.getNumberAttribute('response');
  }
  public set response(value: number) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
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
export interface GslbProtocolSecure {
  /**
  * 'enable': Enable Secure; 'disable': Disable Secure (default); 'enable-fallback': Fall back to non-secure if fail;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol#action GslbProtocol#action}
  */
  readonly action?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol#uuid GslbProtocol#uuid}
  */
  readonly uuid?: string;
}

export function gslbProtocolSecureToTerraform(struct?: GslbProtocolSecureOutputReference | GslbProtocolSecure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function gslbProtocolSecureToHclTerraform(struct?: GslbProtocolSecureOutputReference | GslbProtocolSecure): any {
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

export class GslbProtocolSecureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GslbProtocolSecure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbProtocolSecure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._uuid = value.uuid;
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol thunder_gslb_protocol}
*/
export class GslbProtocol extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_protocol";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbProtocol resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbProtocol to import
  * @param importFromId The id of the existing GslbProtocol that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbProtocol to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_protocol", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol thunder_gslb_protocol} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbProtocolConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GslbProtocolConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_protocol',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoDetect = config.autoDetect;
    this._disableNewGslbSync = config.disableNewGslbSync;
    this._id = config.id;
    this._msgFormatAcos2X = config.msgFormatAcos2X;
    this._pingSite = config.pingSite;
    this._statusInterval = config.statusInterval;
    this._useMgmtPort = config.useMgmtPort;
    this._useMgmtPortForAllPartitions = config.useMgmtPortForAllPartitions;
    this._uuid = config.uuid;
    this._enableList.internalValue = config.enableList;
    this._limit.internalValue = config.limit;
    this._secure.internalValue = config.secure;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_detect - computed: false, optional: true, required: false
  private _autoDetect?: number; 
  public get autoDetect() {
    return this.getNumberAttribute('auto_detect');
  }
  public set autoDetect(value: number) {
    this._autoDetect = value;
  }
  public resetAutoDetect() {
    this._autoDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDetectInput() {
    return this._autoDetect;
  }

  // disable_new_gslb_sync - computed: false, optional: true, required: false
  private _disableNewGslbSync?: number; 
  public get disableNewGslbSync() {
    return this.getNumberAttribute('disable_new_gslb_sync');
  }
  public set disableNewGslbSync(value: number) {
    this._disableNewGslbSync = value;
  }
  public resetDisableNewGslbSync() {
    this._disableNewGslbSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNewGslbSyncInput() {
    return this._disableNewGslbSync;
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

  // msg_format_acos_2x - computed: false, optional: true, required: false
  private _msgFormatAcos2X?: number; 
  public get msgFormatAcos2X() {
    return this.getNumberAttribute('msg_format_acos_2x');
  }
  public set msgFormatAcos2X(value: number) {
    this._msgFormatAcos2X = value;
  }
  public resetMsgFormatAcos2X() {
    this._msgFormatAcos2X = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgFormatAcos2XInput() {
    return this._msgFormatAcos2X;
  }

  // ping_site - computed: false, optional: true, required: false
  private _pingSite?: string; 
  public get pingSite() {
    return this.getStringAttribute('ping_site');
  }
  public set pingSite(value: string) {
    this._pingSite = value;
  }
  public resetPingSite() {
    this._pingSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingSiteInput() {
    return this._pingSite;
  }

  // status_interval - computed: false, optional: true, required: false
  private _statusInterval?: number; 
  public get statusInterval() {
    return this.getNumberAttribute('status_interval');
  }
  public set statusInterval(value: number) {
    this._statusInterval = value;
  }
  public resetStatusInterval() {
    this._statusInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusIntervalInput() {
    return this._statusInterval;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }

  // use_mgmt_port_for_all_partitions - computed: false, optional: true, required: false
  private _useMgmtPortForAllPartitions?: number; 
  public get useMgmtPortForAllPartitions() {
    return this.getNumberAttribute('use_mgmt_port_for_all_partitions');
  }
  public set useMgmtPortForAllPartitions(value: number) {
    this._useMgmtPortForAllPartitions = value;
  }
  public resetUseMgmtPortForAllPartitions() {
    this._useMgmtPortForAllPartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortForAllPartitionsInput() {
    return this._useMgmtPortForAllPartitions;
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

  // enable_list - computed: false, optional: true, required: false
  private _enableList = new GslbProtocolEnableListStructList(this, "enable_list", false);
  public get enableList() {
    return this._enableList;
  }
  public putEnableList(value: GslbProtocolEnableListStruct[] | cdktf.IResolvable) {
    this._enableList.internalValue = value;
  }
  public resetEnableList() {
    this._enableList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableListInput() {
    return this._enableList.internalValue;
  }

  // limit - computed: false, optional: true, required: false
  private _limit = new GslbProtocolLimitOutputReference(this, "limit");
  public get limit() {
    return this._limit;
  }
  public putLimit(value: GslbProtocolLimit) {
    this._limit.internalValue = value;
  }
  public resetLimit() {
    this._limit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit.internalValue;
  }

  // secure - computed: false, optional: true, required: false
  private _secure = new GslbProtocolSecureOutputReference(this, "secure");
  public get secure() {
    return this._secure;
  }
  public putSecure(value: GslbProtocolSecure) {
    this._secure.internalValue = value;
  }
  public resetSecure() {
    this._secure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_detect: cdktf.numberToTerraform(this._autoDetect),
      disable_new_gslb_sync: cdktf.numberToTerraform(this._disableNewGslbSync),
      id: cdktf.stringToTerraform(this._id),
      msg_format_acos_2x: cdktf.numberToTerraform(this._msgFormatAcos2X),
      ping_site: cdktf.stringToTerraform(this._pingSite),
      status_interval: cdktf.numberToTerraform(this._statusInterval),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
      use_mgmt_port_for_all_partitions: cdktf.numberToTerraform(this._useMgmtPortForAllPartitions),
      uuid: cdktf.stringToTerraform(this._uuid),
      enable_list: cdktf.listMapper(gslbProtocolEnableListStructToTerraform, true)(this._enableList.internalValue),
      limit: gslbProtocolLimitToTerraform(this._limit.internalValue),
      secure: gslbProtocolSecureToTerraform(this._secure.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_detect: {
        value: cdktf.numberToHclTerraform(this._autoDetect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_new_gslb_sync: {
        value: cdktf.numberToHclTerraform(this._disableNewGslbSync),
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
      msg_format_acos_2x: {
        value: cdktf.numberToHclTerraform(this._msgFormatAcos2X),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ping_site: {
        value: cdktf.stringToHclTerraform(this._pingSite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_interval: {
        value: cdktf.numberToHclTerraform(this._statusInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_mgmt_port: {
        value: cdktf.numberToHclTerraform(this._useMgmtPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_mgmt_port_for_all_partitions: {
        value: cdktf.numberToHclTerraform(this._useMgmtPortForAllPartitions),
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
      enable_list: {
        value: cdktf.listMapperHcl(gslbProtocolEnableListStructToHclTerraform, true)(this._enableList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbProtocolEnableListStructList",
      },
      limit: {
        value: gslbProtocolLimitToHclTerraform(this._limit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbProtocolLimitList",
      },
      secure: {
        value: gslbProtocolSecureToHclTerraform(this._secure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbProtocolSecureList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
