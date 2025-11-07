// https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/iam_org_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamOrgPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default service strategy (`allow` or `deny`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/iam_org_policy#default_service_strategy IamOrgPolicy#default_service_strategy}
  */
  readonly defaultServiceStrategy: string;
  /**
  * IAM policy services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/iam_org_policy#services IamOrgPolicy#services}
  */
  readonly services: { [key: string]: IamOrgPolicyServices } | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/iam_org_policy#timeouts IamOrgPolicy#timeouts}
  */
  readonly timeouts?: IamOrgPolicyTimeouts;
}
export interface IamOrgPolicyServicesRules {
  /**
  * IAM policy rule action (`allow` or `deny`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/iam_org_policy#action IamOrgPolicy#action}
  */
  readonly action?: string;
  /**
  * IAM policy rule expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/iam_org_policy#expression IamOrgPolicy#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/iam_org_policy#resources IamOrgPolicy#resources}
  */
  readonly resources?: string[];
}

export function iamOrgPolicyServicesRulesToTerraform(struct?: IamOrgPolicyServicesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    expression: cdktf.stringToTerraform(struct!.expression),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
  }
}


export function iamOrgPolicyServicesRulesToHclTerraform(struct?: IamOrgPolicyServicesRules | cdktf.IResolvable): any {
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
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamOrgPolicyServicesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IamOrgPolicyServicesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamOrgPolicyServicesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._expression = undefined;
      this._resources = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._expression = value.expression;
      this._resources = value.resources;
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

  // expression - computed: true, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // resources - computed: true, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}

export class IamOrgPolicyServicesRulesList extends cdktf.ComplexList {
  public internalValue? : IamOrgPolicyServicesRules[] | cdktf.IResolvable

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
  public get(index: number): IamOrgPolicyServicesRulesOutputReference {
    return new IamOrgPolicyServicesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IamOrgPolicyServices {
  /**
  * List of IAM service rules (if type is `rules`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/iam_org_policy#rules IamOrgPolicy#rules}
  */
  readonly rules?: IamOrgPolicyServicesRules[] | cdktf.IResolvable;
  /**
  * Service type (`rules`, `allow`, or `deny`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/iam_org_policy#type IamOrgPolicy#type}
  */
  readonly type?: string;
}

export function iamOrgPolicyServicesToTerraform(struct?: IamOrgPolicyServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(iamOrgPolicyServicesRulesToTerraform, false)(struct!.rules),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function iamOrgPolicyServicesToHclTerraform(struct?: IamOrgPolicyServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(iamOrgPolicyServicesRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "IamOrgPolicyServicesRulesList",
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

export class IamOrgPolicyServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): IamOrgPolicyServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamOrgPolicyServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rules.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rules.internalValue = value.rules;
      this._type = value.type;
    }
  }

  // rules - computed: true, optional: true, required: false
  private _rules = new IamOrgPolicyServicesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: IamOrgPolicyServicesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class IamOrgPolicyServicesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: IamOrgPolicyServices } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): IamOrgPolicyServicesOutputReference {
    return new IamOrgPolicyServicesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface IamOrgPolicyTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/iam_org_policy#read IamOrgPolicy#read}
  */
  readonly read?: string;
}

export function iamOrgPolicyTimeoutsToTerraform(struct?: IamOrgPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function iamOrgPolicyTimeoutsToHclTerraform(struct?: IamOrgPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamOrgPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IamOrgPolicyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamOrgPolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/iam_org_policy exoscale_iam_org_policy}
*/
export class IamOrgPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "exoscale_iam_org_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamOrgPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamOrgPolicy to import
  * @param importFromId The id of the existing IamOrgPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/iam_org_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamOrgPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "exoscale_iam_org_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/iam_org_policy exoscale_iam_org_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamOrgPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: IamOrgPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'exoscale_iam_org_policy',
      terraformGeneratorMetadata: {
        providerName: 'exoscale',
        providerVersion: '0.66.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultServiceStrategy = config.defaultServiceStrategy;
    this._services.internalValue = config.services;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_service_strategy - computed: false, optional: false, required: true
  private _defaultServiceStrategy?: string; 
  public get defaultServiceStrategy() {
    return this.getStringAttribute('default_service_strategy');
  }
  public set defaultServiceStrategy(value: string) {
    this._defaultServiceStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultServiceStrategyInput() {
    return this._defaultServiceStrategy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // services - computed: false, optional: false, required: true
  private _services = new IamOrgPolicyServicesMap(this, "services");
  public get services() {
    return this._services;
  }
  public putServices(value: { [key: string]: IamOrgPolicyServices } | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IamOrgPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IamOrgPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_service_strategy: cdktf.stringToTerraform(this._defaultServiceStrategy),
      services: cdktf.hashMapper(iamOrgPolicyServicesToTerraform)(this._services.internalValue),
      timeouts: iamOrgPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_service_strategy: {
        value: cdktf.stringToHclTerraform(this._defaultServiceStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      services: {
        value: cdktf.hashMapperHcl(iamOrgPolicyServicesToHclTerraform)(this._services.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "IamOrgPolicyServicesMap",
      },
      timeouts: {
        value: iamOrgPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IamOrgPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
