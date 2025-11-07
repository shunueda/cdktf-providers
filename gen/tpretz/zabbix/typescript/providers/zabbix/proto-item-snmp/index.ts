// https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProtoItemSnmpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application IDs to associate this item with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp#applications ProtoItemSnmp#applications}
  */
  readonly applications?: string[];
  /**
  * Item Delay period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp#delay ProtoItemSnmp#delay}
  */
  readonly delay?: string;
  /**
  * Item History
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp#history ProtoItemSnmp#history}
  */
  readonly history?: string;
  /**
  * Host ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp#hostid ProtoItemSnmp#hostid}
  */
  readonly hostid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp#id ProtoItemSnmp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Host Interface ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp#interfaceid ProtoItemSnmp#interfaceid}
  */
  readonly interfaceid?: string;
  /**
  * Item KEY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp#key ProtoItemSnmp#key}
  */
  readonly key: string;
  /**
  * Item Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp#name ProtoItemSnmp#name}
  */
  readonly name: string;
  /**
  * LLD Rule ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp#ruleid ProtoItemSnmp#ruleid}
  */
  readonly ruleid: string;
  /**
  * Authentication Passphrase (v3 only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp#snmp3_authpassphrase ProtoItemSnmp#snmp3_authpassphrase}
  */
  readonly snmp3Authpassphrase?: string;
  /**
  * Authentication Protocol (v3 only), one of: md5, sha
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp#snmp3_authprotocol ProtoItemSnmp#snmp3_authprotocol}
  */
  readonly snmp3Authprotocol?: string;
  /**
  * Context Name (v3 only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp#snmp3_contextname ProtoItemSnmp#snmp3_contextname}
  */
  readonly snmp3Contextname?: string;
  /**
  * Priv Passphrase (v3 only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp#snmp3_privpassphrase ProtoItemSnmp#snmp3_privpassphrase}
  */
  readonly snmp3Privpassphrase?: string;
  /**
  * Priv Protocol (v3 only), one of: des, aes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp#snmp3_privprotocol ProtoItemSnmp#snmp3_privprotocol}
  */
  readonly snmp3Privprotocol?: string;
  /**
  * Security Level (v3 only), one of: noauthnopriv, authnopriv, authpriv
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp#snmp3_securitylevel ProtoItemSnmp#snmp3_securitylevel}
  */
  readonly snmp3Securitylevel?: string;
  /**
  * Security Name (v3 only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp#snmp3_securityname ProtoItemSnmp#snmp3_securityname}
  */
  readonly snmp3Securityname?: string;
  /**
  * SNMP Community (v1/v2 only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp#snmp_community ProtoItemSnmp#snmp_community}
  */
  readonly snmpCommunity?: string;
  /**
  * SNMP OID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp#snmp_oid ProtoItemSnmp#snmp_oid}
  */
  readonly snmpOid: string;
  /**
  * SNMP Version, one of: 1, 2, 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp#snmp_version ProtoItemSnmp#snmp_version}
  */
  readonly snmpVersion?: string;
  /**
  * Item Trends
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp#trends ProtoItemSnmp#trends}
  */
  readonly trends?: string;
  /**
  * Item Value Type, one of: float, character, log, unsigned, text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp#valuetype ProtoItemSnmp#valuetype}
  */
  readonly valuetype: string;
  /**
  * preprocessor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp#preprocessor ProtoItemSnmp#preprocessor}
  */
  readonly preprocessor?: ProtoItemSnmpPreprocessor[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp#tag ProtoItemSnmp#tag}
  */
  readonly tag?: ProtoItemSnmpTag[] | cdktf.IResolvable;
}
export interface ProtoItemSnmpPreprocessor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp#error_handler ProtoItemSnmp#error_handler}
  */
  readonly errorHandler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp#error_handler_params ProtoItemSnmp#error_handler_params}
  */
  readonly errorHandlerParams?: string;
  /**
  * Preprocessor parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp#params ProtoItemSnmp#params}
  */
  readonly params?: string[];
  /**
  * Preprocessor type, zabbix identifier number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp#type ProtoItemSnmp#type}
  */
  readonly type: string;
}

export function protoItemSnmpPreprocessorToTerraform(struct?: ProtoItemSnmpPreprocessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_handler: cdktf.stringToTerraform(struct!.errorHandler),
    error_handler_params: cdktf.stringToTerraform(struct!.errorHandlerParams),
    params: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.params),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function protoItemSnmpPreprocessorToHclTerraform(struct?: ProtoItemSnmpPreprocessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_handler: {
      value: cdktf.stringToHclTerraform(struct!.errorHandler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_handler_params: {
      value: cdktf.stringToHclTerraform(struct!.errorHandlerParams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    params: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.params),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtoItemSnmpPreprocessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtoItemSnmpPreprocessor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorHandler !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHandler = this._errorHandler;
    }
    if (this._errorHandlerParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHandlerParams = this._errorHandlerParams;
    }
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtoItemSnmpPreprocessor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorHandler = undefined;
      this._errorHandlerParams = undefined;
      this._params = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorHandler = value.errorHandler;
      this._errorHandlerParams = value.errorHandlerParams;
      this._params = value.params;
      this._type = value.type;
    }
  }

  // error_handler - computed: false, optional: true, required: false
  private _errorHandler?: string; 
  public get errorHandler() {
    return this.getStringAttribute('error_handler');
  }
  public set errorHandler(value: string) {
    this._errorHandler = value;
  }
  public resetErrorHandler() {
    this._errorHandler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHandlerInput() {
    return this._errorHandler;
  }

  // error_handler_params - computed: false, optional: true, required: false
  private _errorHandlerParams?: string; 
  public get errorHandlerParams() {
    return this.getStringAttribute('error_handler_params');
  }
  public set errorHandlerParams(value: string) {
    this._errorHandlerParams = value;
  }
  public resetErrorHandlerParams() {
    this._errorHandlerParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHandlerParamsInput() {
    return this._errorHandlerParams;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // params - computed: false, optional: true, required: false
  private _params?: string[]; 
  public get params() {
    return this.getListAttribute('params');
  }
  public set params(value: string[]) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
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
}

export class ProtoItemSnmpPreprocessorList extends cdktf.ComplexList {
  public internalValue? : ProtoItemSnmpPreprocessor[] | cdktf.IResolvable

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
  public get(index: number): ProtoItemSnmpPreprocessorOutputReference {
    return new ProtoItemSnmpPreprocessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProtoItemSnmpTag {
  /**
  * Tag Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp#key ProtoItemSnmp#key}
  */
  readonly key: string;
  /**
  * Tag Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp#value ProtoItemSnmp#value}
  */
  readonly value?: string;
}

export function protoItemSnmpTagToTerraform(struct?: ProtoItemSnmpTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function protoItemSnmpTagToHclTerraform(struct?: ProtoItemSnmpTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class ProtoItemSnmpTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtoItemSnmpTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtoItemSnmpTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
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

export class ProtoItemSnmpTagList extends cdktf.ComplexList {
  public internalValue? : ProtoItemSnmpTag[] | cdktf.IResolvable

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
  public get(index: number): ProtoItemSnmpTagOutputReference {
    return new ProtoItemSnmpTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp zabbix_proto_item_snmp}
*/
export class ProtoItemSnmp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zabbix_proto_item_snmp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProtoItemSnmp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProtoItemSnmp to import
  * @param importFromId The id of the existing ProtoItemSnmp that should be imported. Refer to the {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProtoItemSnmp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zabbix_proto_item_snmp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_item_snmp zabbix_proto_item_snmp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProtoItemSnmpConfig
  */
  public constructor(scope: Construct, id: string, config: ProtoItemSnmpConfig) {
    super(scope, id, {
      terraformResourceType: 'zabbix_proto_item_snmp',
      terraformGeneratorMetadata: {
        providerName: 'zabbix',
        providerVersion: '0.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applications = config.applications;
    this._delay = config.delay;
    this._history = config.history;
    this._hostid = config.hostid;
    this._id = config.id;
    this._interfaceid = config.interfaceid;
    this._key = config.key;
    this._name = config.name;
    this._ruleid = config.ruleid;
    this._snmp3Authpassphrase = config.snmp3Authpassphrase;
    this._snmp3Authprotocol = config.snmp3Authprotocol;
    this._snmp3Contextname = config.snmp3Contextname;
    this._snmp3Privpassphrase = config.snmp3Privpassphrase;
    this._snmp3Privprotocol = config.snmp3Privprotocol;
    this._snmp3Securitylevel = config.snmp3Securitylevel;
    this._snmp3Securityname = config.snmp3Securityname;
    this._snmpCommunity = config.snmpCommunity;
    this._snmpOid = config.snmpOid;
    this._snmpVersion = config.snmpVersion;
    this._trends = config.trends;
    this._valuetype = config.valuetype;
    this._preprocessor.internalValue = config.preprocessor;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // applications - computed: false, optional: true, required: false
  private _applications?: string[]; 
  public get applications() {
    return cdktf.Fn.tolist(this.getListAttribute('applications'));
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: string; 
  public get delay() {
    return this.getStringAttribute('delay');
  }
  public set delay(value: string) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // history - computed: false, optional: true, required: false
  private _history?: string; 
  public get history() {
    return this.getStringAttribute('history');
  }
  public set history(value: string) {
    this._history = value;
  }
  public resetHistory() {
    this._history = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyInput() {
    return this._history;
  }

  // hostid - computed: false, optional: false, required: true
  private _hostid?: string; 
  public get hostid() {
    return this.getStringAttribute('hostid');
  }
  public set hostid(value: string) {
    this._hostid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostidInput() {
    return this._hostid;
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

  // interfaceid - computed: false, optional: true, required: false
  private _interfaceid?: string; 
  public get interfaceid() {
    return this.getStringAttribute('interfaceid');
  }
  public set interfaceid(value: string) {
    this._interfaceid = value;
  }
  public resetInterfaceid() {
    this._interfaceid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceidInput() {
    return this._interfaceid;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // ruleid - computed: false, optional: false, required: true
  private _ruleid?: string; 
  public get ruleid() {
    return this.getStringAttribute('ruleid');
  }
  public set ruleid(value: string) {
    this._ruleid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleidInput() {
    return this._ruleid;
  }

  // snmp3_authpassphrase - computed: false, optional: true, required: false
  private _snmp3Authpassphrase?: string; 
  public get snmp3Authpassphrase() {
    return this.getStringAttribute('snmp3_authpassphrase');
  }
  public set snmp3Authpassphrase(value: string) {
    this._snmp3Authpassphrase = value;
  }
  public resetSnmp3Authpassphrase() {
    this._snmp3Authpassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmp3AuthpassphraseInput() {
    return this._snmp3Authpassphrase;
  }

  // snmp3_authprotocol - computed: false, optional: true, required: false
  private _snmp3Authprotocol?: string; 
  public get snmp3Authprotocol() {
    return this.getStringAttribute('snmp3_authprotocol');
  }
  public set snmp3Authprotocol(value: string) {
    this._snmp3Authprotocol = value;
  }
  public resetSnmp3Authprotocol() {
    this._snmp3Authprotocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmp3AuthprotocolInput() {
    return this._snmp3Authprotocol;
  }

  // snmp3_contextname - computed: false, optional: true, required: false
  private _snmp3Contextname?: string; 
  public get snmp3Contextname() {
    return this.getStringAttribute('snmp3_contextname');
  }
  public set snmp3Contextname(value: string) {
    this._snmp3Contextname = value;
  }
  public resetSnmp3Contextname() {
    this._snmp3Contextname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmp3ContextnameInput() {
    return this._snmp3Contextname;
  }

  // snmp3_privpassphrase - computed: false, optional: true, required: false
  private _snmp3Privpassphrase?: string; 
  public get snmp3Privpassphrase() {
    return this.getStringAttribute('snmp3_privpassphrase');
  }
  public set snmp3Privpassphrase(value: string) {
    this._snmp3Privpassphrase = value;
  }
  public resetSnmp3Privpassphrase() {
    this._snmp3Privpassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmp3PrivpassphraseInput() {
    return this._snmp3Privpassphrase;
  }

  // snmp3_privprotocol - computed: false, optional: true, required: false
  private _snmp3Privprotocol?: string; 
  public get snmp3Privprotocol() {
    return this.getStringAttribute('snmp3_privprotocol');
  }
  public set snmp3Privprotocol(value: string) {
    this._snmp3Privprotocol = value;
  }
  public resetSnmp3Privprotocol() {
    this._snmp3Privprotocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmp3PrivprotocolInput() {
    return this._snmp3Privprotocol;
  }

  // snmp3_securitylevel - computed: false, optional: true, required: false
  private _snmp3Securitylevel?: string; 
  public get snmp3Securitylevel() {
    return this.getStringAttribute('snmp3_securitylevel');
  }
  public set snmp3Securitylevel(value: string) {
    this._snmp3Securitylevel = value;
  }
  public resetSnmp3Securitylevel() {
    this._snmp3Securitylevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmp3SecuritylevelInput() {
    return this._snmp3Securitylevel;
  }

  // snmp3_securityname - computed: false, optional: true, required: false
  private _snmp3Securityname?: string; 
  public get snmp3Securityname() {
    return this.getStringAttribute('snmp3_securityname');
  }
  public set snmp3Securityname(value: string) {
    this._snmp3Securityname = value;
  }
  public resetSnmp3Securityname() {
    this._snmp3Securityname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmp3SecuritynameInput() {
    return this._snmp3Securityname;
  }

  // snmp_community - computed: false, optional: true, required: false
  private _snmpCommunity?: string; 
  public get snmpCommunity() {
    return this.getStringAttribute('snmp_community');
  }
  public set snmpCommunity(value: string) {
    this._snmpCommunity = value;
  }
  public resetSnmpCommunity() {
    this._snmpCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpCommunityInput() {
    return this._snmpCommunity;
  }

  // snmp_oid - computed: false, optional: false, required: true
  private _snmpOid?: string; 
  public get snmpOid() {
    return this.getStringAttribute('snmp_oid');
  }
  public set snmpOid(value: string) {
    this._snmpOid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpOidInput() {
    return this._snmpOid;
  }

  // snmp_version - computed: false, optional: true, required: false
  private _snmpVersion?: string; 
  public get snmpVersion() {
    return this.getStringAttribute('snmp_version');
  }
  public set snmpVersion(value: string) {
    this._snmpVersion = value;
  }
  public resetSnmpVersion() {
    this._snmpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpVersionInput() {
    return this._snmpVersion;
  }

  // trends - computed: true, optional: true, required: false
  private _trends?: string; 
  public get trends() {
    return this.getStringAttribute('trends');
  }
  public set trends(value: string) {
    this._trends = value;
  }
  public resetTrends() {
    this._trends = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trendsInput() {
    return this._trends;
  }

  // valuetype - computed: false, optional: false, required: true
  private _valuetype?: string; 
  public get valuetype() {
    return this.getStringAttribute('valuetype');
  }
  public set valuetype(value: string) {
    this._valuetype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuetypeInput() {
    return this._valuetype;
  }

  // preprocessor - computed: false, optional: true, required: false
  private _preprocessor = new ProtoItemSnmpPreprocessorList(this, "preprocessor", false);
  public get preprocessor() {
    return this._preprocessor;
  }
  public putPreprocessor(value: ProtoItemSnmpPreprocessor[] | cdktf.IResolvable) {
    this._preprocessor.internalValue = value;
  }
  public resetPreprocessor() {
    this._preprocessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preprocessorInput() {
    return this._preprocessor.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new ProtoItemSnmpTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: ProtoItemSnmpTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      applications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applications),
      delay: cdktf.stringToTerraform(this._delay),
      history: cdktf.stringToTerraform(this._history),
      hostid: cdktf.stringToTerraform(this._hostid),
      id: cdktf.stringToTerraform(this._id),
      interfaceid: cdktf.stringToTerraform(this._interfaceid),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      ruleid: cdktf.stringToTerraform(this._ruleid),
      snmp3_authpassphrase: cdktf.stringToTerraform(this._snmp3Authpassphrase),
      snmp3_authprotocol: cdktf.stringToTerraform(this._snmp3Authprotocol),
      snmp3_contextname: cdktf.stringToTerraform(this._snmp3Contextname),
      snmp3_privpassphrase: cdktf.stringToTerraform(this._snmp3Privpassphrase),
      snmp3_privprotocol: cdktf.stringToTerraform(this._snmp3Privprotocol),
      snmp3_securitylevel: cdktf.stringToTerraform(this._snmp3Securitylevel),
      snmp3_securityname: cdktf.stringToTerraform(this._snmp3Securityname),
      snmp_community: cdktf.stringToTerraform(this._snmpCommunity),
      snmp_oid: cdktf.stringToTerraform(this._snmpOid),
      snmp_version: cdktf.stringToTerraform(this._snmpVersion),
      trends: cdktf.stringToTerraform(this._trends),
      valuetype: cdktf.stringToTerraform(this._valuetype),
      preprocessor: cdktf.listMapper(protoItemSnmpPreprocessorToTerraform, true)(this._preprocessor.internalValue),
      tag: cdktf.listMapper(protoItemSnmpTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      applications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applications),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      delay: {
        value: cdktf.stringToHclTerraform(this._delay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      history: {
        value: cdktf.stringToHclTerraform(this._history),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostid: {
        value: cdktf.stringToHclTerraform(this._hostid),
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
      interfaceid: {
        value: cdktf.stringToHclTerraform(this._interfaceid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
      ruleid: {
        value: cdktf.stringToHclTerraform(this._ruleid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp3_authpassphrase: {
        value: cdktf.stringToHclTerraform(this._snmp3Authpassphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp3_authprotocol: {
        value: cdktf.stringToHclTerraform(this._snmp3Authprotocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp3_contextname: {
        value: cdktf.stringToHclTerraform(this._snmp3Contextname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp3_privpassphrase: {
        value: cdktf.stringToHclTerraform(this._snmp3Privpassphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp3_privprotocol: {
        value: cdktf.stringToHclTerraform(this._snmp3Privprotocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp3_securitylevel: {
        value: cdktf.stringToHclTerraform(this._snmp3Securitylevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp3_securityname: {
        value: cdktf.stringToHclTerraform(this._snmp3Securityname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_community: {
        value: cdktf.stringToHclTerraform(this._snmpCommunity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_oid: {
        value: cdktf.stringToHclTerraform(this._snmpOid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_version: {
        value: cdktf.stringToHclTerraform(this._snmpVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trends: {
        value: cdktf.stringToHclTerraform(this._trends),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      valuetype: {
        value: cdktf.stringToHclTerraform(this._valuetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preprocessor: {
        value: cdktf.listMapperHcl(protoItemSnmpPreprocessorToHclTerraform, true)(this._preprocessor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProtoItemSnmpPreprocessorList",
      },
      tag: {
        value: cdktf.listMapperHcl(protoItemSnmpTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProtoItemSnmpTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
