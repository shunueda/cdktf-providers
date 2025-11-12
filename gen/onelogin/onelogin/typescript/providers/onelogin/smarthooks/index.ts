// https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/smarthooks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SmarthooksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/smarthooks#context_version Smarthooks#context_version}
  */
  readonly contextVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/smarthooks#disabled Smarthooks#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/smarthooks#env_vars Smarthooks#env_vars}
  */
  readonly envVars: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/smarthooks#function Smarthooks#function}
  */
  readonly function: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/smarthooks#id Smarthooks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/smarthooks#packages Smarthooks#packages}
  */
  readonly packages: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/smarthooks#retries Smarthooks#retries}
  */
  readonly retries: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/smarthooks#runtime Smarthooks#runtime}
  */
  readonly runtime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/smarthooks#timeout Smarthooks#timeout}
  */
  readonly timeout: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/smarthooks#type Smarthooks#type}
  */
  readonly type: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/smarthooks#conditions Smarthooks#conditions}
  */
  readonly conditions?: SmarthooksConditions[] | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/smarthooks#options Smarthooks#options}
  */
  readonly options?: SmarthooksOptions[] | cdktf.IResolvable;
}
export interface SmarthooksConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/smarthooks#operator Smarthooks#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/smarthooks#source Smarthooks#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/smarthooks#value Smarthooks#value}
  */
  readonly value: string;
}

export function smarthooksConditionsToTerraform(struct?: SmarthooksConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    source: cdktf.stringToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function smarthooksConditionsToHclTerraform(struct?: SmarthooksConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
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

export class SmarthooksConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SmarthooksConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmarthooksConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._source = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._source = value.source;
      this._value = value.value;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
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

export class SmarthooksConditionsList extends cdktf.ComplexList {
  public internalValue? : SmarthooksConditions[] | cdktf.IResolvable

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
  public get(index: number): SmarthooksConditionsOutputReference {
    return new SmarthooksConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SmarthooksOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/smarthooks#location_enabled Smarthooks#location_enabled}
  */
  readonly locationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/smarthooks#mfa_device_info_enabled Smarthooks#mfa_device_info_enabled}
  */
  readonly mfaDeviceInfoEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/smarthooks#risk_enabled Smarthooks#risk_enabled}
  */
  readonly riskEnabled?: boolean | cdktf.IResolvable;
}

export function smarthooksOptionsToTerraform(struct?: SmarthooksOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location_enabled: cdktf.booleanToTerraform(struct!.locationEnabled),
    mfa_device_info_enabled: cdktf.booleanToTerraform(struct!.mfaDeviceInfoEnabled),
    risk_enabled: cdktf.booleanToTerraform(struct!.riskEnabled),
  }
}


export function smarthooksOptionsToHclTerraform(struct?: SmarthooksOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.locationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mfa_device_info_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.mfaDeviceInfoEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    risk_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.riskEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SmarthooksOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SmarthooksOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationEnabled = this._locationEnabled;
    }
    if (this._mfaDeviceInfoEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.mfaDeviceInfoEnabled = this._mfaDeviceInfoEnabled;
    }
    if (this._riskEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.riskEnabled = this._riskEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmarthooksOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locationEnabled = undefined;
      this._mfaDeviceInfoEnabled = undefined;
      this._riskEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locationEnabled = value.locationEnabled;
      this._mfaDeviceInfoEnabled = value.mfaDeviceInfoEnabled;
      this._riskEnabled = value.riskEnabled;
    }
  }

  // location_enabled - computed: false, optional: true, required: false
  private _locationEnabled?: boolean | cdktf.IResolvable; 
  public get locationEnabled() {
    return this.getBooleanAttribute('location_enabled');
  }
  public set locationEnabled(value: boolean | cdktf.IResolvable) {
    this._locationEnabled = value;
  }
  public resetLocationEnabled() {
    this._locationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationEnabledInput() {
    return this._locationEnabled;
  }

  // mfa_device_info_enabled - computed: false, optional: true, required: false
  private _mfaDeviceInfoEnabled?: boolean | cdktf.IResolvable; 
  public get mfaDeviceInfoEnabled() {
    return this.getBooleanAttribute('mfa_device_info_enabled');
  }
  public set mfaDeviceInfoEnabled(value: boolean | cdktf.IResolvable) {
    this._mfaDeviceInfoEnabled = value;
  }
  public resetMfaDeviceInfoEnabled() {
    this._mfaDeviceInfoEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaDeviceInfoEnabledInput() {
    return this._mfaDeviceInfoEnabled;
  }

  // risk_enabled - computed: false, optional: true, required: false
  private _riskEnabled?: boolean | cdktf.IResolvable; 
  public get riskEnabled() {
    return this.getBooleanAttribute('risk_enabled');
  }
  public set riskEnabled(value: boolean | cdktf.IResolvable) {
    this._riskEnabled = value;
  }
  public resetRiskEnabled() {
    this._riskEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskEnabledInput() {
    return this._riskEnabled;
  }
}

export class SmarthooksOptionsList extends cdktf.ComplexList {
  public internalValue? : SmarthooksOptions[] | cdktf.IResolvable

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
  public get(index: number): SmarthooksOptionsOutputReference {
    return new SmarthooksOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/smarthooks onelogin_smarthooks}
*/
export class Smarthooks extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "onelogin_smarthooks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Smarthooks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Smarthooks to import
  * @param importFromId The id of the existing Smarthooks that should be imported. Refer to the {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/smarthooks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Smarthooks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "onelogin_smarthooks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/onelogin/onelogin/0.11.2/docs/resources/smarthooks onelogin_smarthooks} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SmarthooksConfig
  */
  public constructor(scope: Construct, id: string, config: SmarthooksConfig) {
    super(scope, id, {
      terraformResourceType: 'onelogin_smarthooks',
      terraformGeneratorMetadata: {
        providerName: 'onelogin',
        providerVersion: '0.11.2',
        providerVersionConstraint: '0.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contextVersion = config.contextVersion;
    this._disabled = config.disabled;
    this._envVars = config.envVars;
    this._function = config.function;
    this._id = config.id;
    this._packages = config.packages;
    this._retries = config.retries;
    this._runtime = config.runtime;
    this._timeout = config.timeout;
    this._type = config.type;
    this._conditions.internalValue = config.conditions;
    this._options.internalValue = config.options;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // context_version - computed: true, optional: true, required: false
  private _contextVersion?: string; 
  public get contextVersion() {
    return this.getStringAttribute('context_version');
  }
  public set contextVersion(value: string) {
    this._contextVersion = value;
  }
  public resetContextVersion() {
    this._contextVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextVersionInput() {
    return this._contextVersion;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // env_vars - computed: false, optional: false, required: true
  private _envVars?: string[]; 
  public get envVars() {
    return this.getListAttribute('env_vars');
  }
  public set envVars(value: string[]) {
    this._envVars = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envVarsInput() {
    return this._envVars;
  }

  // function - computed: false, optional: false, required: true
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
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

  // packages - computed: false, optional: false, required: true
  private _packages?: { [key: string]: string }; 
  public get packages() {
    return this.getStringMapAttribute('packages');
  }
  public set packages(value: { [key: string]: string }) {
    this._packages = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesInput() {
    return this._packages;
  }

  // retries - computed: false, optional: false, required: true
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // runtime - computed: false, optional: false, required: true
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new SmarthooksConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: SmarthooksConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new SmarthooksOptionsList(this, "options", true);
  public get options() {
    return this._options;
  }
  public putOptions(value: SmarthooksOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      context_version: cdktf.stringToTerraform(this._contextVersion),
      disabled: cdktf.booleanToTerraform(this._disabled),
      env_vars: cdktf.listMapper(cdktf.stringToTerraform, false)(this._envVars),
      function: cdktf.stringToTerraform(this._function),
      id: cdktf.stringToTerraform(this._id),
      packages: cdktf.hashMapper(cdktf.stringToTerraform)(this._packages),
      retries: cdktf.numberToTerraform(this._retries),
      runtime: cdktf.stringToTerraform(this._runtime),
      timeout: cdktf.numberToTerraform(this._timeout),
      type: cdktf.stringToTerraform(this._type),
      conditions: cdktf.listMapper(smarthooksConditionsToTerraform, true)(this._conditions.internalValue),
      options: cdktf.listMapper(smarthooksOptionsToTerraform, true)(this._options.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      context_version: {
        value: cdktf.stringToHclTerraform(this._contextVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      env_vars: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._envVars),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      function: {
        value: cdktf.stringToHclTerraform(this._function),
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
      packages: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._packages),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      runtime: {
        value: cdktf.stringToHclTerraform(this._runtime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conditions: {
        value: cdktf.listMapperHcl(smarthooksConditionsToHclTerraform, true)(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SmarthooksConditionsList",
      },
      options: {
        value: cdktf.listMapperHcl(smarthooksOptionsToHclTerraform, true)(this._options.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SmarthooksOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
