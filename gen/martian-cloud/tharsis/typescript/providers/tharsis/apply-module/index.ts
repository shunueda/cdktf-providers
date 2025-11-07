// https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/apply_module
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplyModuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The source of the module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/apply_module#module_source ApplyModule#module_source}
  */
  readonly moduleSource: string;
  /**
  * The version identifier of the module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/apply_module#module_version ApplyModule#module_version}
  */
  readonly moduleVersion?: string;
  /**
  * Whether to do a Terraform refresh to update the state based on all managed remote objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/apply_module#refresh ApplyModule#refresh}
  */
  readonly refresh?: boolean | cdktf.IResolvable;
  /**
  * Optional list of variables for the run in the target workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/apply_module#variables ApplyModule#variables}
  */
  readonly variables?: ApplyModuleVariables[] | cdktf.IResolvable;
  /**
  * The full path of the workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/apply_module#workspace_path ApplyModule#workspace_path}
  */
  readonly workspacePath: string;
}
export interface ApplyModuleResolvedVariables {
}

export function applyModuleResolvedVariablesToTerraform(struct?: ApplyModuleResolvedVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function applyModuleResolvedVariablesToHclTerraform(struct?: ApplyModuleResolvedVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApplyModuleResolvedVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApplyModuleResolvedVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplyModuleResolvedVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // namespace_path - computed: true, optional: false, required: false
  public get namespacePath() {
    return this.getStringAttribute('namespace_path');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class ApplyModuleResolvedVariablesList extends cdktf.ComplexList {

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
  public get(index: number): ApplyModuleResolvedVariablesOutputReference {
    return new ApplyModuleResolvedVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplyModuleVariables {
  /**
  * Category of this variable, 'terraform' or 'environment'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/apply_module#category ApplyModule#category}
  */
  readonly category: string;
  /**
  * Key or name of this variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/apply_module#key ApplyModule#key}
  */
  readonly key: string;
  /**
  * Value of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/apply_module#value ApplyModule#value}
  */
  readonly value: string;
}

export function applyModuleVariablesToTerraform(struct?: ApplyModuleVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applyModuleVariablesToHclTerraform(struct?: ApplyModuleVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class ApplyModuleVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplyModuleVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
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

  public set internalValue(value: ApplyModuleVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
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
      this._category = value.category;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

export class ApplyModuleVariablesList extends cdktf.ComplexList {
  public internalValue? : ApplyModuleVariables[] | cdktf.IResolvable

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
  public get(index: number): ApplyModuleVariablesOutputReference {
    return new ApplyModuleVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/apply_module tharsis_apply_module}
*/
export class ApplyModule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tharsis_apply_module";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplyModule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplyModule to import
  * @param importFromId The id of the existing ApplyModule that should be imported. Refer to the {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/apply_module#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplyModule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tharsis_apply_module", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/apply_module tharsis_apply_module} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplyModuleConfig
  */
  public constructor(scope: Construct, id: string, config: ApplyModuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tharsis_apply_module',
      terraformGeneratorMetadata: {
        providerName: 'tharsis',
        providerVersion: '0.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._moduleSource = config.moduleSource;
    this._moduleVersion = config.moduleVersion;
    this._refresh = config.refresh;
    this._variables.internalValue = config.variables;
    this._workspacePath = config.workspacePath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // module_source - computed: false, optional: false, required: true
  private _moduleSource?: string; 
  public get moduleSource() {
    return this.getStringAttribute('module_source');
  }
  public set moduleSource(value: string) {
    this._moduleSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleSourceInput() {
    return this._moduleSource;
  }

  // module_version - computed: true, optional: true, required: false
  private _moduleVersion?: string; 
  public get moduleVersion() {
    return this.getStringAttribute('module_version');
  }
  public set moduleVersion(value: string) {
    this._moduleVersion = value;
  }
  public resetModuleVersion() {
    this._moduleVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleVersionInput() {
    return this._moduleVersion;
  }

  // refresh - computed: true, optional: true, required: false
  private _refresh?: boolean | cdktf.IResolvable; 
  public get refresh() {
    return this.getBooleanAttribute('refresh');
  }
  public set refresh(value: boolean | cdktf.IResolvable) {
    this._refresh = value;
  }
  public resetRefresh() {
    this._refresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshInput() {
    return this._refresh;
  }

  // resolved_variables - computed: true, optional: false, required: false
  private _resolvedVariables = new ApplyModuleResolvedVariablesList(this, "resolved_variables", false);
  public get resolvedVariables() {
    return this._resolvedVariables;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new ApplyModuleVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: ApplyModuleVariables[] | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }

  // workspace_path - computed: false, optional: false, required: true
  private _workspacePath?: string; 
  public get workspacePath() {
    return this.getStringAttribute('workspace_path');
  }
  public set workspacePath(value: string) {
    this._workspacePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspacePathInput() {
    return this._workspacePath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      module_source: cdktf.stringToTerraform(this._moduleSource),
      module_version: cdktf.stringToTerraform(this._moduleVersion),
      refresh: cdktf.booleanToTerraform(this._refresh),
      variables: cdktf.listMapper(applyModuleVariablesToTerraform, false)(this._variables.internalValue),
      workspace_path: cdktf.stringToTerraform(this._workspacePath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      module_source: {
        value: cdktf.stringToHclTerraform(this._moduleSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      module_version: {
        value: cdktf.stringToHclTerraform(this._moduleVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh: {
        value: cdktf.booleanToHclTerraform(this._refresh),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      variables: {
        value: cdktf.listMapperHcl(applyModuleVariablesToHclTerraform, false)(this._variables.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplyModuleVariablesList",
      },
      workspace_path: {
        value: cdktf.stringToHclTerraform(this._workspacePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
