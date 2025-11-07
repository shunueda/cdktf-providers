// https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/environment_variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/environment_variable#key EnvironmentVariable#key}
  */
  readonly key: string;
  /**
  * One or more of builds, functions, runtime, and post-processing.
  * 
  * Customizing scopes is not supported on free plans. However, free plan users managing a secret environment variable can and must explicitly set this to `["builds", "functions", "runtime"]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/environment_variable#scopes EnvironmentVariable#scopes}
  */
  readonly scopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/environment_variable#secret_values EnvironmentVariable#secret_values}
  */
  readonly secretValues?: EnvironmentVariableSecretValues[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/environment_variable#site_id EnvironmentVariable#site_id}
  */
  readonly siteId?: string;
  /**
  * Required if a default team was not configured in the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/environment_variable#team_id EnvironmentVariable#team_id}
  */
  readonly teamId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/environment_variable#values EnvironmentVariable#values}
  */
  readonly values?: EnvironmentVariableValues[] | cdktf.IResolvable;
}
export interface EnvironmentVariableSecretValues {
  /**
  * One of all, dev, branch-deploy, deploy-preview, production, or branch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/environment_variable#context EnvironmentVariable#context}
  */
  readonly context: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/environment_variable#context_parameter EnvironmentVariable#context_parameter}
  */
  readonly contextParameter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/environment_variable#value EnvironmentVariable#value}
  */
  readonly value: string;
}

export function environmentVariableSecretValuesToTerraform(struct?: EnvironmentVariableSecretValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    context_parameter: cdktf.stringToTerraform(struct!.contextParameter),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function environmentVariableSecretValuesToHclTerraform(struct?: EnvironmentVariableSecretValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_parameter: {
      value: cdktf.stringToHclTerraform(struct!.contextParameter),
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

export class EnvironmentVariableSecretValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentVariableSecretValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._contextParameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextParameter = this._contextParameter;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentVariableSecretValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._contextParameter = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._contextParameter = value.contextParameter;
      this._value = value.value;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // context_parameter - computed: true, optional: true, required: false
  private _contextParameter?: string; 
  public get contextParameter() {
    return this.getStringAttribute('context_parameter');
  }
  public set contextParameter(value: string) {
    this._contextParameter = value;
  }
  public resetContextParameter() {
    this._contextParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextParameterInput() {
    return this._contextParameter;
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

export class EnvironmentVariableSecretValuesList extends cdktf.ComplexList {
  public internalValue? : EnvironmentVariableSecretValues[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentVariableSecretValuesOutputReference {
    return new EnvironmentVariableSecretValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentVariableValues {
  /**
  * One of all, dev, branch-deploy, deploy-preview, production, or branch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/environment_variable#context EnvironmentVariable#context}
  */
  readonly context: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/environment_variable#context_parameter EnvironmentVariable#context_parameter}
  */
  readonly contextParameter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/environment_variable#value EnvironmentVariable#value}
  */
  readonly value: string;
}

export function environmentVariableValuesToTerraform(struct?: EnvironmentVariableValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    context_parameter: cdktf.stringToTerraform(struct!.contextParameter),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function environmentVariableValuesToHclTerraform(struct?: EnvironmentVariableValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_parameter: {
      value: cdktf.stringToHclTerraform(struct!.contextParameter),
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

export class EnvironmentVariableValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentVariableValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._contextParameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextParameter = this._contextParameter;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentVariableValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._contextParameter = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._contextParameter = value.contextParameter;
      this._value = value.value;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // context_parameter - computed: false, optional: true, required: false
  private _contextParameter?: string; 
  public get contextParameter() {
    return this.getStringAttribute('context_parameter');
  }
  public set contextParameter(value: string) {
    this._contextParameter = value;
  }
  public resetContextParameter() {
    this._contextParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextParameterInput() {
    return this._contextParameter;
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

export class EnvironmentVariableValuesList extends cdktf.ComplexList {
  public internalValue? : EnvironmentVariableValues[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentVariableValuesOutputReference {
    return new EnvironmentVariableValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/environment_variable netlify_environment_variable}
*/
export class EnvironmentVariable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netlify_environment_variable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnvironmentVariable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnvironmentVariable to import
  * @param importFromId The id of the existing EnvironmentVariable that should be imported. Refer to the {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/environment_variable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnvironmentVariable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netlify_environment_variable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/environment_variable netlify_environment_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentVariableConfig
  */
  public constructor(scope: Construct, id: string, config: EnvironmentVariableConfig) {
    super(scope, id, {
      terraformResourceType: 'netlify_environment_variable',
      terraformGeneratorMetadata: {
        providerName: 'netlify',
        providerVersion: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._key = config.key;
    this._scopes = config.scopes;
    this._secretValues.internalValue = config.secretValues;
    this._siteId = config.siteId;
    this._teamId = config.teamId;
    this._values.internalValue = config.values;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // secret_values - computed: false, optional: true, required: false
  private _secretValues = new EnvironmentVariableSecretValuesList(this, "secret_values", true);
  public get secretValues() {
    return this._secretValues;
  }
  public putSecretValues(value: EnvironmentVariableSecretValues[] | cdktf.IResolvable) {
    this._secretValues.internalValue = value;
  }
  public resetSecretValues() {
    this._secretValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValuesInput() {
    return this._secretValues.internalValue;
  }

  // site_id - computed: false, optional: true, required: false
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // team_id - computed: true, optional: true, required: false
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // values - computed: false, optional: true, required: false
  private _values = new EnvironmentVariableValuesList(this, "values", true);
  public get values() {
    return this._values;
  }
  public putValues(value: EnvironmentVariableValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  public resetValues() {
    this._values.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key: cdktf.stringToTerraform(this._key),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      secret_values: cdktf.listMapper(environmentVariableSecretValuesToTerraform, false)(this._secretValues.internalValue),
      site_id: cdktf.stringToTerraform(this._siteId),
      team_id: cdktf.stringToTerraform(this._teamId),
      values: cdktf.listMapper(environmentVariableValuesToTerraform, false)(this._values.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      secret_values: {
        value: cdktf.listMapperHcl(environmentVariableSecretValuesToHclTerraform, false)(this._secretValues.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EnvironmentVariableSecretValuesList",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      values: {
        value: cdktf.listMapperHcl(environmentVariableValuesToHclTerraform, false)(this._values.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EnvironmentVariableValuesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
