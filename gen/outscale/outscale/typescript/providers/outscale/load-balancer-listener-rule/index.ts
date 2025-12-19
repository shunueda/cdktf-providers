// https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/load_balancer_listener_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalancerListenerRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/load_balancer_listener_rule#id LoadBalancerListenerRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/load_balancer_listener_rule#vm_ids LoadBalancerListenerRule#vm_ids}
  */
  readonly vmIds: string[];
  /**
  * listener block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/load_balancer_listener_rule#listener LoadBalancerListenerRule#listener}
  */
  readonly listener: LoadBalancerListenerRuleListener;
  /**
  * listener_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/load_balancer_listener_rule#listener_rule LoadBalancerListenerRule#listener_rule}
  */
  readonly listenerRule: LoadBalancerListenerRuleListenerRule;
}
export interface LoadBalancerListenerRuleListener {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/load_balancer_listener_rule#load_balancer_name LoadBalancerListenerRule#load_balancer_name}
  */
  readonly loadBalancerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/load_balancer_listener_rule#load_balancer_port LoadBalancerListenerRule#load_balancer_port}
  */
  readonly loadBalancerPort: number;
}

export function loadBalancerListenerRuleListenerToTerraform(struct?: LoadBalancerListenerRuleListenerOutputReference | LoadBalancerListenerRuleListener): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load_balancer_name: cdktf.stringToTerraform(struct!.loadBalancerName),
    load_balancer_port: cdktf.numberToTerraform(struct!.loadBalancerPort),
  }
}


export function loadBalancerListenerRuleListenerToHclTerraform(struct?: LoadBalancerListenerRuleListenerOutputReference | LoadBalancerListenerRuleListener): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    load_balancer_name: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_port: {
      value: cdktf.numberToHclTerraform(struct!.loadBalancerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerListenerRuleListenerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoadBalancerListenerRuleListener | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loadBalancerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerName = this._loadBalancerName;
    }
    if (this._loadBalancerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerPort = this._loadBalancerPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerListenerRuleListener | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loadBalancerName = undefined;
      this._loadBalancerPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loadBalancerName = value.loadBalancerName;
      this._loadBalancerPort = value.loadBalancerPort;
    }
  }

  // load_balancer_name - computed: false, optional: false, required: true
  private _loadBalancerName?: string; 
  public get loadBalancerName() {
    return this.getStringAttribute('load_balancer_name');
  }
  public set loadBalancerName(value: string) {
    this._loadBalancerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerNameInput() {
    return this._loadBalancerName;
  }

  // load_balancer_port - computed: false, optional: false, required: true
  private _loadBalancerPort?: number; 
  public get loadBalancerPort() {
    return this.getNumberAttribute('load_balancer_port');
  }
  public set loadBalancerPort(value: number) {
    this._loadBalancerPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerPortInput() {
    return this._loadBalancerPort;
  }
}
export interface LoadBalancerListenerRuleListenerRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/load_balancer_listener_rule#action LoadBalancerListenerRule#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/load_balancer_listener_rule#host_name_pattern LoadBalancerListenerRule#host_name_pattern}
  */
  readonly hostNamePattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/load_balancer_listener_rule#listener_rule_name LoadBalancerListenerRule#listener_rule_name}
  */
  readonly listenerRuleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/load_balancer_listener_rule#path_pattern LoadBalancerListenerRule#path_pattern}
  */
  readonly pathPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/load_balancer_listener_rule#priority LoadBalancerListenerRule#priority}
  */
  readonly priority: number;
}

export function loadBalancerListenerRuleListenerRuleToTerraform(struct?: LoadBalancerListenerRuleListenerRuleOutputReference | LoadBalancerListenerRuleListenerRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    host_name_pattern: cdktf.stringToTerraform(struct!.hostNamePattern),
    listener_rule_name: cdktf.stringToTerraform(struct!.listenerRuleName),
    path_pattern: cdktf.stringToTerraform(struct!.pathPattern),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function loadBalancerListenerRuleListenerRuleToHclTerraform(struct?: LoadBalancerListenerRuleListenerRuleOutputReference | LoadBalancerListenerRuleListenerRule): any {
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
    host_name_pattern: {
      value: cdktf.stringToHclTerraform(struct!.hostNamePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listener_rule_name: {
      value: cdktf.stringToHclTerraform(struct!.listenerRuleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_pattern: {
      value: cdktf.stringToHclTerraform(struct!.pathPattern),
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

export class LoadBalancerListenerRuleListenerRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoadBalancerListenerRuleListenerRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._hostNamePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNamePattern = this._hostNamePattern;
    }
    if (this._listenerRuleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerRuleName = this._listenerRuleName;
    }
    if (this._pathPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPattern = this._pathPattern;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerListenerRuleListenerRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._hostNamePattern = undefined;
      this._listenerRuleName = undefined;
      this._pathPattern = undefined;
      this._priority = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._hostNamePattern = value.hostNamePattern;
      this._listenerRuleName = value.listenerRuleName;
      this._pathPattern = value.pathPattern;
      this._priority = value.priority;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // host_name_pattern - computed: true, optional: true, required: false
  private _hostNamePattern?: string; 
  public get hostNamePattern() {
    return this.getStringAttribute('host_name_pattern');
  }
  public set hostNamePattern(value: string) {
    this._hostNamePattern = value;
  }
  public resetHostNamePattern() {
    this._hostNamePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNamePatternInput() {
    return this._hostNamePattern;
  }

  // listener_id - computed: true, optional: false, required: false
  public get listenerId() {
    return this.getNumberAttribute('listener_id');
  }

  // listener_rule_id - computed: true, optional: false, required: false
  public get listenerRuleId() {
    return this.getNumberAttribute('listener_rule_id');
  }

  // listener_rule_name - computed: false, optional: false, required: true
  private _listenerRuleName?: string; 
  public get listenerRuleName() {
    return this.getStringAttribute('listener_rule_name');
  }
  public set listenerRuleName(value: string) {
    this._listenerRuleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerRuleNameInput() {
    return this._listenerRuleName;
  }

  // path_pattern - computed: true, optional: true, required: false
  private _pathPattern?: string; 
  public get pathPattern() {
    return this.getStringAttribute('path_pattern');
  }
  public set pathPattern(value: string) {
    this._pathPattern = value;
  }
  public resetPathPattern() {
    this._pathPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPatternInput() {
    return this._pathPattern;
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
* Represents a {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/load_balancer_listener_rule outscale_load_balancer_listener_rule}
*/
export class LoadBalancerListenerRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "outscale_load_balancer_listener_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalancerListenerRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalancerListenerRule to import
  * @param importFromId The id of the existing LoadBalancerListenerRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/load_balancer_listener_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalancerListenerRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "outscale_load_balancer_listener_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/outscale/outscale/1.3.0/docs/resources/load_balancer_listener_rule outscale_load_balancer_listener_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalancerListenerRuleConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalancerListenerRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'outscale_load_balancer_listener_rule',
      terraformGeneratorMetadata: {
        providerName: 'outscale',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
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
    this._vmIds = config.vmIds;
    this._listener.internalValue = config.listener;
    this._listenerRule.internalValue = config.listenerRule;
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

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
  }

  // vm_ids - computed: false, optional: false, required: true
  private _vmIds?: string[]; 
  public get vmIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vm_ids'));
  }
  public set vmIds(value: string[]) {
    this._vmIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIdsInput() {
    return this._vmIds;
  }

  // listener - computed: false, optional: false, required: true
  private _listener = new LoadBalancerListenerRuleListenerOutputReference(this, "listener");
  public get listener() {
    return this._listener;
  }
  public putListener(value: LoadBalancerListenerRuleListener) {
    this._listener.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerInput() {
    return this._listener.internalValue;
  }

  // listener_rule - computed: false, optional: false, required: true
  private _listenerRule = new LoadBalancerListenerRuleListenerRuleOutputReference(this, "listener_rule");
  public get listenerRule() {
    return this._listenerRule;
  }
  public putListenerRule(value: LoadBalancerListenerRuleListenerRule) {
    this._listenerRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerRuleInput() {
    return this._listenerRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      vm_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vmIds),
      listener: loadBalancerListenerRuleListenerToTerraform(this._listener.internalValue),
      listener_rule: loadBalancerListenerRuleListenerRuleToTerraform(this._listenerRule.internalValue),
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
      vm_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vmIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      listener: {
        value: loadBalancerListenerRuleListenerToHclTerraform(this._listener.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadBalancerListenerRuleListenerList",
      },
      listener_rule: {
        value: loadBalancerListenerRuleListenerRuleToHclTerraform(this._listenerRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadBalancerListenerRuleListenerRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
