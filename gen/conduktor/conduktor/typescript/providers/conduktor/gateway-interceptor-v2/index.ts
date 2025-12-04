// https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_interceptor_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayInterceptorV2Config extends cdktf.TerraformMetaArguments {
  /**
  * The name of the interceptor, must be unique, acts as an ID for import
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_interceptor_v2#name GatewayInterceptorV2#name}
  */
  readonly name: string;
  /**
  * The targeting scope of the interceptor. See [documentation](https://docs.conduktor.io/gateway/reference/resources-reference/#interceptor-targeting)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_interceptor_v2#scope GatewayInterceptorV2#scope}
  */
  readonly scope?: GatewayInterceptorV2Scope;
  /**
  * The interceptor specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_interceptor_v2#spec GatewayInterceptorV2#spec}
  */
  readonly spec: GatewayInterceptorV2Spec;
}
export interface GatewayInterceptorV2Scope {
  /**
  * The name of the group the interceptor will be applied to. Optional parameter for defining the scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_interceptor_v2#group GatewayInterceptorV2#group}
  */
  readonly group?: string;
  /**
  * The username the interceptor will be applied to. Optional parameter for defining the scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_interceptor_v2#username GatewayInterceptorV2#username}
  */
  readonly username?: string;
  /**
  * The name of the virtual cluster the interceptor will be applied to. Optional parameter for defining the scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_interceptor_v2#vcluster GatewayInterceptorV2#vcluster}
  */
  readonly vcluster?: string;
}

export function gatewayInterceptorV2ScopeToTerraform(struct?: GatewayInterceptorV2Scope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    username: cdktf.stringToTerraform(struct!.username),
    vcluster: cdktf.stringToTerraform(struct!.vcluster),
  }
}


export function gatewayInterceptorV2ScopeToHclTerraform(struct?: GatewayInterceptorV2Scope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcluster: {
      value: cdktf.stringToHclTerraform(struct!.vcluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayInterceptorV2ScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayInterceptorV2Scope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._vcluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcluster = this._vcluster;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayInterceptorV2Scope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._username = undefined;
      this._vcluster = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._username = value.username;
      this._vcluster = value.vcluster;
    }
  }

  // group - computed: true, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vcluster - computed: true, optional: true, required: false
  private _vcluster?: string; 
  public get vcluster() {
    return this.getStringAttribute('vcluster');
  }
  public set vcluster(value: string) {
    this._vcluster = value;
  }
  public resetVcluster() {
    this._vcluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vclusterInput() {
    return this._vcluster;
  }
}
export interface GatewayInterceptorV2Spec {
  /**
  * An optional comment for the interceptor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_interceptor_v2#comment GatewayInterceptorV2#comment}
  */
  readonly comment?: string;
  /**
  * Plugin configuration in JSON format. Check the [interceptor catalog](https://docs.conduktor.io/gateway/category/interceptor-catalog/) for details on the configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_interceptor_v2#config GatewayInterceptorV2#config}
  */
  readonly config: string;
  /**
  * The class of the plugin. Check the [interceptor catalog](https://docs.conduktor.io/gateway/category/interceptor-catalog/) for available plugins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_interceptor_v2#plugin_class GatewayInterceptorV2#plugin_class}
  */
  readonly pluginClass: string;
  /**
  * The priority of the interceptor. Must be greater than 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_interceptor_v2#priority GatewayInterceptorV2#priority}
  */
  readonly priority: number;
}

export function gatewayInterceptorV2SpecToTerraform(struct?: GatewayInterceptorV2Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    config: cdktf.stringToTerraform(struct!.config),
    plugin_class: cdktf.stringToTerraform(struct!.pluginClass),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function gatewayInterceptorV2SpecToHclTerraform(struct?: GatewayInterceptorV2Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plugin_class: {
      value: cdktf.stringToHclTerraform(struct!.pluginClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayInterceptorV2SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayInterceptorV2Spec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._pluginClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginClass = this._pluginClass;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayInterceptorV2Spec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._config = undefined;
      this._pluginClass = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._config = value.config;
      this._pluginClass = value.pluginClass;
      this._priority = value.priority;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // config - computed: false, optional: false, required: true
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // plugin_class - computed: false, optional: false, required: true
  private _pluginClass?: string; 
  public get pluginClass() {
    return this.getStringAttribute('plugin_class');
  }
  public set pluginClass(value: string) {
    this._pluginClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginClassInput() {
    return this._pluginClass;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_interceptor_v2 conduktor_gateway_interceptor_v2}
*/
export class GatewayInterceptorV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "conduktor_gateway_interceptor_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayInterceptorV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayInterceptorV2 to import
  * @param importFromId The id of the existing GatewayInterceptorV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_interceptor_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayInterceptorV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "conduktor_gateway_interceptor_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/gateway_interceptor_v2 conduktor_gateway_interceptor_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayInterceptorV2Config
  */
  public constructor(scope: Construct, id: string, config: GatewayInterceptorV2Config) {
    super(scope, id, {
      terraformResourceType: 'conduktor_gateway_interceptor_v2',
      terraformGeneratorMetadata: {
        providerName: 'conduktor',
        providerVersion: '1.0.1',
        providerVersionConstraint: '1.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._scope.internalValue = config.scope;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // scope - computed: true, optional: true, required: false
  private _scope = new GatewayInterceptorV2ScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: GatewayInterceptorV2Scope) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new GatewayInterceptorV2SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: GatewayInterceptorV2Spec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      scope: gatewayInterceptorV2ScopeToTerraform(this._scope.internalValue),
      spec: gatewayInterceptorV2SpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: gatewayInterceptorV2ScopeToHclTerraform(this._scope.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayInterceptorV2Scope",
      },
      spec: {
        value: gatewayInterceptorV2SpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayInterceptorV2Spec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
