// https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LldSnmpConfig extends cdktf.TerraformMetaArguments {
  /**
  * LLD Delay period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#delay LldSnmp#delay}
  */
  readonly delay?: string;
  /**
  * EvalType, one of: andor, and, or, custom
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#evaltype LldSnmp#evaltype}
  */
  readonly evaltype?: string;
  /**
  * Formula
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#formula LldSnmp#formula}
  */
  readonly formula?: string;
  /**
  * Host ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#hostid LldSnmp#hostid}
  */
  readonly hostid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#id LldSnmp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Host Interface ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#interfaceid LldSnmp#interfaceid}
  */
  readonly interfaceid?: string;
  /**
  * LLD KEY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#key LldSnmp#key}
  */
  readonly key: string;
  /**
  * LLD Stale Item Lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#lifetime LldSnmp#lifetime}
  */
  readonly lifetime?: string;
  /**
  * LLD Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#name LldSnmp#name}
  */
  readonly name: string;
  /**
  * Authentication Passphrase (v3 only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#snmp3_authpassphrase LldSnmp#snmp3_authpassphrase}
  */
  readonly snmp3Authpassphrase?: string;
  /**
  * Authentication Protocol (v3 only), one of: md5, sha
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#snmp3_authprotocol LldSnmp#snmp3_authprotocol}
  */
  readonly snmp3Authprotocol?: string;
  /**
  * Context Name (v3 only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#snmp3_contextname LldSnmp#snmp3_contextname}
  */
  readonly snmp3Contextname?: string;
  /**
  * Priv Passphrase (v3 only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#snmp3_privpassphrase LldSnmp#snmp3_privpassphrase}
  */
  readonly snmp3Privpassphrase?: string;
  /**
  * Priv Protocol (v3 only), one of: des, aes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#snmp3_privprotocol LldSnmp#snmp3_privprotocol}
  */
  readonly snmp3Privprotocol?: string;
  /**
  * Security Level (v3 only), one of: noauthnopriv, authnopriv, authpriv
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#snmp3_securitylevel LldSnmp#snmp3_securitylevel}
  */
  readonly snmp3Securitylevel?: string;
  /**
  * Security Name (v3 only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#snmp3_securityname LldSnmp#snmp3_securityname}
  */
  readonly snmp3Securityname?: string;
  /**
  * SNMP Community (v1/v2 only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#snmp_community LldSnmp#snmp_community}
  */
  readonly snmpCommunity?: string;
  /**
  * SNMP OID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#snmp_oid LldSnmp#snmp_oid}
  */
  readonly snmpOid: string;
  /**
  * SNMP Version, one of: 1, 2, 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#snmp_version LldSnmp#snmp_version}
  */
  readonly snmpVersion?: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#condition LldSnmp#condition}
  */
  readonly condition?: LldSnmpCondition[] | cdktf.IResolvable;
  /**
  * macro block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#macro LldSnmp#macro}
  */
  readonly macro?: LldSnmpMacro[] | cdktf.IResolvable;
  /**
  * preprocessor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#preprocessor LldSnmp#preprocessor}
  */
  readonly preprocessor?: LldSnmpPreprocessor[] | cdktf.IResolvable;
}
export interface LldSnmpCondition {
  /**
  * Filter Macro
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#macro LldSnmp#macro}
  */
  readonly macro: string;
  /**
  * Operator, one of: match, notmatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#operator LldSnmp#operator}
  */
  readonly operator?: string;
  /**
  * Filter Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#value LldSnmp#value}
  */
  readonly value: string;
}

export function lldSnmpConditionToTerraform(struct?: LldSnmpCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    macro: cdktf.stringToTerraform(struct!.macro),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lldSnmpConditionToHclTerraform(struct?: LldSnmpCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    macro: {
      value: cdktf.stringToHclTerraform(struct!.macro),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class LldSnmpConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LldSnmpCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._macro !== undefined) {
      hasAnyValues = true;
      internalValueResult.macro = this._macro;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LldSnmpCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._macro = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._macro = value.macro;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // macro - computed: false, optional: false, required: true
  private _macro?: string; 
  public get macro() {
    return this.getStringAttribute('macro');
  }
  public set macro(value: string) {
    this._macro = value;
  }
  // Temporarily expose input value. Use with caution.
  public get macroInput() {
    return this._macro;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class LldSnmpConditionList extends cdktf.ComplexList {
  public internalValue? : LldSnmpCondition[] | cdktf.IResolvable

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
  public get(index: number): LldSnmpConditionOutputReference {
    return new LldSnmpConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LldSnmpMacro {
  /**
  * Macro
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#macro LldSnmp#macro}
  */
  readonly macro: string;
  /**
  * Macro Path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#path LldSnmp#path}
  */
  readonly path: string;
}

export function lldSnmpMacroToTerraform(struct?: LldSnmpMacro | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    macro: cdktf.stringToTerraform(struct!.macro),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function lldSnmpMacroToHclTerraform(struct?: LldSnmpMacro | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    macro: {
      value: cdktf.stringToHclTerraform(struct!.macro),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LldSnmpMacroOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LldSnmpMacro | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._macro !== undefined) {
      hasAnyValues = true;
      internalValueResult.macro = this._macro;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LldSnmpMacro | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._macro = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._macro = value.macro;
      this._path = value.path;
    }
  }

  // macro - computed: false, optional: false, required: true
  private _macro?: string; 
  public get macro() {
    return this.getStringAttribute('macro');
  }
  public set macro(value: string) {
    this._macro = value;
  }
  // Temporarily expose input value. Use with caution.
  public get macroInput() {
    return this._macro;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class LldSnmpMacroList extends cdktf.ComplexList {
  public internalValue? : LldSnmpMacro[] | cdktf.IResolvable

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
  public get(index: number): LldSnmpMacroOutputReference {
    return new LldSnmpMacroOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LldSnmpPreprocessor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#error_handler LldSnmp#error_handler}
  */
  readonly errorHandler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#error_handler_params LldSnmp#error_handler_params}
  */
  readonly errorHandlerParams?: string;
  /**
  * Preprocessor parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#params LldSnmp#params}
  */
  readonly params?: string[];
  /**
  * Preprocessor type, zabbix identifier number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#type LldSnmp#type}
  */
  readonly type: string;
}

export function lldSnmpPreprocessorToTerraform(struct?: LldSnmpPreprocessor | cdktf.IResolvable): any {
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


export function lldSnmpPreprocessorToHclTerraform(struct?: LldSnmpPreprocessor | cdktf.IResolvable): any {
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

export class LldSnmpPreprocessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LldSnmpPreprocessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LldSnmpPreprocessor | cdktf.IResolvable | undefined) {
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

export class LldSnmpPreprocessorList extends cdktf.ComplexList {
  public internalValue? : LldSnmpPreprocessor[] | cdktf.IResolvable

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
  public get(index: number): LldSnmpPreprocessorOutputReference {
    return new LldSnmpPreprocessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp zabbix_lld_snmp}
*/
export class LldSnmp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zabbix_lld_snmp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LldSnmp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LldSnmp to import
  * @param importFromId The id of the existing LldSnmp that should be imported. Refer to the {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LldSnmp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zabbix_lld_snmp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_snmp zabbix_lld_snmp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LldSnmpConfig
  */
  public constructor(scope: Construct, id: string, config: LldSnmpConfig) {
    super(scope, id, {
      terraformResourceType: 'zabbix_lld_snmp',
      terraformGeneratorMetadata: {
        providerName: 'zabbix',
        providerVersion: '0.17.0',
        providerVersionConstraint: '0.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._delay = config.delay;
    this._evaltype = config.evaltype;
    this._formula = config.formula;
    this._hostid = config.hostid;
    this._id = config.id;
    this._interfaceid = config.interfaceid;
    this._key = config.key;
    this._lifetime = config.lifetime;
    this._name = config.name;
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
    this._condition.internalValue = config.condition;
    this._macro.internalValue = config.macro;
    this._preprocessor.internalValue = config.preprocessor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // evaltype - computed: false, optional: true, required: false
  private _evaltype?: string; 
  public get evaltype() {
    return this.getStringAttribute('evaltype');
  }
  public set evaltype(value: string) {
    this._evaltype = value;
  }
  public resetEvaltype() {
    this._evaltype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaltypeInput() {
    return this._evaltype;
  }

  // formula - computed: false, optional: true, required: false
  private _formula?: string; 
  public get formula() {
    return this.getStringAttribute('formula');
  }
  public set formula(value: string) {
    this._formula = value;
  }
  public resetFormula() {
    this._formula = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formulaInput() {
    return this._formula;
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

  // lifetime - computed: false, optional: true, required: false
  private _lifetime?: string; 
  public get lifetime() {
    return this.getStringAttribute('lifetime');
  }
  public set lifetime(value: string) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
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

  // condition - computed: false, optional: true, required: false
  private _condition = new LldSnmpConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: LldSnmpCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // macro - computed: false, optional: true, required: false
  private _macro = new LldSnmpMacroList(this, "macro", true);
  public get macro() {
    return this._macro;
  }
  public putMacro(value: LldSnmpMacro[] | cdktf.IResolvable) {
    this._macro.internalValue = value;
  }
  public resetMacro() {
    this._macro.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macroInput() {
    return this._macro.internalValue;
  }

  // preprocessor - computed: false, optional: true, required: false
  private _preprocessor = new LldSnmpPreprocessorList(this, "preprocessor", false);
  public get preprocessor() {
    return this._preprocessor;
  }
  public putPreprocessor(value: LldSnmpPreprocessor[] | cdktf.IResolvable) {
    this._preprocessor.internalValue = value;
  }
  public resetPreprocessor() {
    this._preprocessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preprocessorInput() {
    return this._preprocessor.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delay: cdktf.stringToTerraform(this._delay),
      evaltype: cdktf.stringToTerraform(this._evaltype),
      formula: cdktf.stringToTerraform(this._formula),
      hostid: cdktf.stringToTerraform(this._hostid),
      id: cdktf.stringToTerraform(this._id),
      interfaceid: cdktf.stringToTerraform(this._interfaceid),
      key: cdktf.stringToTerraform(this._key),
      lifetime: cdktf.stringToTerraform(this._lifetime),
      name: cdktf.stringToTerraform(this._name),
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
      condition: cdktf.listMapper(lldSnmpConditionToTerraform, true)(this._condition.internalValue),
      macro: cdktf.listMapper(lldSnmpMacroToTerraform, true)(this._macro.internalValue),
      preprocessor: cdktf.listMapper(lldSnmpPreprocessorToTerraform, true)(this._preprocessor.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delay: {
        value: cdktf.stringToHclTerraform(this._delay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      evaltype: {
        value: cdktf.stringToHclTerraform(this._evaltype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      formula: {
        value: cdktf.stringToHclTerraform(this._formula),
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
      lifetime: {
        value: cdktf.stringToHclTerraform(this._lifetime),
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
      condition: {
        value: cdktf.listMapperHcl(lldSnmpConditionToHclTerraform, true)(this._condition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LldSnmpConditionList",
      },
      macro: {
        value: cdktf.listMapperHcl(lldSnmpMacroToHclTerraform, true)(this._macro.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LldSnmpMacroList",
      },
      preprocessor: {
        value: cdktf.listMapperHcl(lldSnmpPreprocessorToHclTerraform, true)(this._preprocessor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LldSnmpPreprocessorList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
