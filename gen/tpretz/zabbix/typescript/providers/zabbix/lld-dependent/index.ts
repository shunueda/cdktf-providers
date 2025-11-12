// https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_dependent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LldDependentConfig extends cdktf.TerraformMetaArguments {
  /**
  * LLD Delay period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_dependent#delay LldDependent#delay}
  */
  readonly delay?: string;
  /**
  * EvalType, one of: andor, and, or, custom
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_dependent#evaltype LldDependent#evaltype}
  */
  readonly evaltype?: string;
  /**
  * Formula
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_dependent#formula LldDependent#formula}
  */
  readonly formula?: string;
  /**
  * Host ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_dependent#hostid LldDependent#hostid}
  */
  readonly hostid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_dependent#id LldDependent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * LLD KEY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_dependent#key LldDependent#key}
  */
  readonly key: string;
  /**
  * LLD Stale Item Lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_dependent#lifetime LldDependent#lifetime}
  */
  readonly lifetime?: string;
  /**
  * Master Item ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_dependent#master_itemid LldDependent#master_itemid}
  */
  readonly masterItemid: string;
  /**
  * LLD Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_dependent#name LldDependent#name}
  */
  readonly name: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_dependent#condition LldDependent#condition}
  */
  readonly condition?: LldDependentCondition[] | cdktf.IResolvable;
  /**
  * macro block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_dependent#macro LldDependent#macro}
  */
  readonly macro?: LldDependentMacro[] | cdktf.IResolvable;
  /**
  * preprocessor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_dependent#preprocessor LldDependent#preprocessor}
  */
  readonly preprocessor?: LldDependentPreprocessor[] | cdktf.IResolvable;
}
export interface LldDependentCondition {
  /**
  * Filter Macro
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_dependent#macro LldDependent#macro}
  */
  readonly macro: string;
  /**
  * Operator, one of: match, notmatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_dependent#operator LldDependent#operator}
  */
  readonly operator?: string;
  /**
  * Filter Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_dependent#value LldDependent#value}
  */
  readonly value: string;
}

export function lldDependentConditionToTerraform(struct?: LldDependentCondition | cdktf.IResolvable): any {
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


export function lldDependentConditionToHclTerraform(struct?: LldDependentCondition | cdktf.IResolvable): any {
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

export class LldDependentConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LldDependentCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LldDependentCondition | cdktf.IResolvable | undefined) {
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

export class LldDependentConditionList extends cdktf.ComplexList {
  public internalValue? : LldDependentCondition[] | cdktf.IResolvable

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
  public get(index: number): LldDependentConditionOutputReference {
    return new LldDependentConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LldDependentMacro {
  /**
  * Macro
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_dependent#macro LldDependent#macro}
  */
  readonly macro: string;
  /**
  * Macro Path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_dependent#path LldDependent#path}
  */
  readonly path: string;
}

export function lldDependentMacroToTerraform(struct?: LldDependentMacro | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    macro: cdktf.stringToTerraform(struct!.macro),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function lldDependentMacroToHclTerraform(struct?: LldDependentMacro | cdktf.IResolvable): any {
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

export class LldDependentMacroOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LldDependentMacro | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LldDependentMacro | cdktf.IResolvable | undefined) {
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

export class LldDependentMacroList extends cdktf.ComplexList {
  public internalValue? : LldDependentMacro[] | cdktf.IResolvable

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
  public get(index: number): LldDependentMacroOutputReference {
    return new LldDependentMacroOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LldDependentPreprocessor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_dependent#error_handler LldDependent#error_handler}
  */
  readonly errorHandler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_dependent#error_handler_params LldDependent#error_handler_params}
  */
  readonly errorHandlerParams?: string;
  /**
  * Preprocessor parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_dependent#params LldDependent#params}
  */
  readonly params?: string[];
  /**
  * Preprocessor type, zabbix identifier number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_dependent#type LldDependent#type}
  */
  readonly type: string;
}

export function lldDependentPreprocessorToTerraform(struct?: LldDependentPreprocessor | cdktf.IResolvable): any {
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


export function lldDependentPreprocessorToHclTerraform(struct?: LldDependentPreprocessor | cdktf.IResolvable): any {
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

export class LldDependentPreprocessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LldDependentPreprocessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LldDependentPreprocessor | cdktf.IResolvable | undefined) {
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

export class LldDependentPreprocessorList extends cdktf.ComplexList {
  public internalValue? : LldDependentPreprocessor[] | cdktf.IResolvable

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
  public get(index: number): LldDependentPreprocessorOutputReference {
    return new LldDependentPreprocessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_dependent zabbix_lld_dependent}
*/
export class LldDependent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zabbix_lld_dependent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LldDependent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LldDependent to import
  * @param importFromId The id of the existing LldDependent that should be imported. Refer to the {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_dependent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LldDependent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zabbix_lld_dependent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/lld_dependent zabbix_lld_dependent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LldDependentConfig
  */
  public constructor(scope: Construct, id: string, config: LldDependentConfig) {
    super(scope, id, {
      terraformResourceType: 'zabbix_lld_dependent',
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
    this._key = config.key;
    this._lifetime = config.lifetime;
    this._masterItemid = config.masterItemid;
    this._name = config.name;
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

  // master_itemid - computed: false, optional: false, required: true
  private _masterItemid?: string; 
  public get masterItemid() {
    return this.getStringAttribute('master_itemid');
  }
  public set masterItemid(value: string) {
    this._masterItemid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterItemidInput() {
    return this._masterItemid;
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

  // condition - computed: false, optional: true, required: false
  private _condition = new LldDependentConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: LldDependentCondition[] | cdktf.IResolvable) {
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
  private _macro = new LldDependentMacroList(this, "macro", true);
  public get macro() {
    return this._macro;
  }
  public putMacro(value: LldDependentMacro[] | cdktf.IResolvable) {
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
  private _preprocessor = new LldDependentPreprocessorList(this, "preprocessor", false);
  public get preprocessor() {
    return this._preprocessor;
  }
  public putPreprocessor(value: LldDependentPreprocessor[] | cdktf.IResolvable) {
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
      key: cdktf.stringToTerraform(this._key),
      lifetime: cdktf.stringToTerraform(this._lifetime),
      master_itemid: cdktf.stringToTerraform(this._masterItemid),
      name: cdktf.stringToTerraform(this._name),
      condition: cdktf.listMapper(lldDependentConditionToTerraform, true)(this._condition.internalValue),
      macro: cdktf.listMapper(lldDependentMacroToTerraform, true)(this._macro.internalValue),
      preprocessor: cdktf.listMapper(lldDependentPreprocessorToTerraform, true)(this._preprocessor.internalValue),
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
      master_itemid: {
        value: cdktf.stringToHclTerraform(this._masterItemid),
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
      condition: {
        value: cdktf.listMapperHcl(lldDependentConditionToHclTerraform, true)(this._condition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LldDependentConditionList",
      },
      macro: {
        value: cdktf.listMapperHcl(lldDependentMacroToHclTerraform, true)(this._macro.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LldDependentMacroList",
      },
      preprocessor: {
        value: cdktf.listMapperHcl(lldDependentPreprocessorToHclTerraform, true)(this._preprocessor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LldDependentPreprocessorList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
