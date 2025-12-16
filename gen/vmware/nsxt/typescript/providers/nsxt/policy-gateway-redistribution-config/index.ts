// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_redistribution_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyGatewayRedistributionConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flag to enable route redistribution for BGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_redistribution_config#bgp_enabled PolicyGatewayRedistributionConfig#bgp_enabled}
  */
  readonly bgpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Policy path for Tier0 gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_redistribution_config#gateway_path PolicyGatewayRedistributionConfig#gateway_path}
  */
  readonly gatewayPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_redistribution_config#id PolicyGatewayRedistributionConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Flag to enable route redistribution for OSPF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_redistribution_config#ospf_enabled PolicyGatewayRedistributionConfig#ospf_enabled}
  */
  readonly ospfEnabled?: boolean | cdktf.IResolvable;
  /**
  * Path of the site the Tier0 redistribution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_redistribution_config#site_path PolicyGatewayRedistributionConfig#site_path}
  */
  readonly sitePath?: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_redistribution_config#rule PolicyGatewayRedistributionConfig#rule}
  */
  readonly rule?: PolicyGatewayRedistributionConfigRule[] | cdktf.IResolvable;
}
export interface PolicyGatewayRedistributionConfigRule {
  /**
  * BGP destination for this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_redistribution_config#bgp PolicyGatewayRedistributionConfig#bgp}
  */
  readonly bgp?: boolean | cdktf.IResolvable;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_redistribution_config#name PolicyGatewayRedistributionConfig#name}
  */
  readonly name?: string;
  /**
  * OSPF destination for this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_redistribution_config#ospf PolicyGatewayRedistributionConfig#ospf}
  */
  readonly ospf?: boolean | cdktf.IResolvable;
  /**
  * Route map to be associated with the redistribution rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_redistribution_config#route_map_path PolicyGatewayRedistributionConfig#route_map_path}
  */
  readonly routeMapPath?: string;
  /**
  * List of redistribution types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_redistribution_config#types PolicyGatewayRedistributionConfig#types}
  */
  readonly types?: string[];
}

export function policyGatewayRedistributionConfigRuleToTerraform(struct?: PolicyGatewayRedistributionConfigRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp: cdktf.booleanToTerraform(struct!.bgp),
    name: cdktf.stringToTerraform(struct!.name),
    ospf: cdktf.booleanToTerraform(struct!.ospf),
    route_map_path: cdktf.stringToTerraform(struct!.routeMapPath),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
  }
}


export function policyGatewayRedistributionConfigRuleToHclTerraform(struct?: PolicyGatewayRedistributionConfigRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp: {
      value: cdktf.booleanToHclTerraform(struct!.bgp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ospf: {
      value: cdktf.booleanToHclTerraform(struct!.ospf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    route_map_path: {
      value: cdktf.stringToHclTerraform(struct!.routeMapPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyGatewayRedistributionConfigRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyGatewayRedistributionConfigRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgp !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgp = this._bgp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ospf !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf;
    }
    if (this._routeMapPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapPath = this._routeMapPath;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyGatewayRedistributionConfigRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgp = undefined;
      this._name = undefined;
      this._ospf = undefined;
      this._routeMapPath = undefined;
      this._types = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgp = value.bgp;
      this._name = value.name;
      this._ospf = value.ospf;
      this._routeMapPath = value.routeMapPath;
      this._types = value.types;
    }
  }

  // bgp - computed: false, optional: true, required: false
  private _bgp?: boolean | cdktf.IResolvable; 
  public get bgp() {
    return this.getBooleanAttribute('bgp');
  }
  public set bgp(value: boolean | cdktf.IResolvable) {
    this._bgp = value;
  }
  public resetBgp() {
    this._bgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf?: boolean | cdktf.IResolvable; 
  public get ospf() {
    return this.getBooleanAttribute('ospf');
  }
  public set ospf(value: boolean | cdktf.IResolvable) {
    this._ospf = value;
  }
  public resetOspf() {
    this._ospf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf;
  }

  // route_map_path - computed: false, optional: true, required: false
  private _routeMapPath?: string; 
  public get routeMapPath() {
    return this.getStringAttribute('route_map_path');
  }
  public set routeMapPath(value: string) {
    this._routeMapPath = value;
  }
  public resetRouteMapPath() {
    this._routeMapPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapPathInput() {
    return this._routeMapPath;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return cdktf.Fn.tolist(this.getListAttribute('types'));
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}

export class PolicyGatewayRedistributionConfigRuleList extends cdktf.ComplexList {
  public internalValue? : PolicyGatewayRedistributionConfigRule[] | cdktf.IResolvable

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
  public get(index: number): PolicyGatewayRedistributionConfigRuleOutputReference {
    return new PolicyGatewayRedistributionConfigRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_redistribution_config nsxt_policy_gateway_redistribution_config}
*/
export class PolicyGatewayRedistributionConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_gateway_redistribution_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyGatewayRedistributionConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyGatewayRedistributionConfig to import
  * @param importFromId The id of the existing PolicyGatewayRedistributionConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_redistribution_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyGatewayRedistributionConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_gateway_redistribution_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_gateway_redistribution_config nsxt_policy_gateway_redistribution_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyGatewayRedistributionConfigConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyGatewayRedistributionConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_gateway_redistribution_config',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.11.0',
        providerVersionConstraint: '3.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bgpEnabled = config.bgpEnabled;
    this._gatewayPath = config.gatewayPath;
    this._id = config.id;
    this._ospfEnabled = config.ospfEnabled;
    this._sitePath = config.sitePath;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bgp_enabled - computed: false, optional: true, required: false
  private _bgpEnabled?: boolean | cdktf.IResolvable; 
  public get bgpEnabled() {
    return this.getBooleanAttribute('bgp_enabled');
  }
  public set bgpEnabled(value: boolean | cdktf.IResolvable) {
    this._bgpEnabled = value;
  }
  public resetBgpEnabled() {
    this._bgpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpEnabledInput() {
    return this._bgpEnabled;
  }

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // gateway_path - computed: false, optional: false, required: true
  private _gatewayPath?: string; 
  public get gatewayPath() {
    return this.getStringAttribute('gateway_path');
  }
  public set gatewayPath(value: string) {
    this._gatewayPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayPathInput() {
    return this._gatewayPath;
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

  // locale_service_id - computed: true, optional: false, required: false
  public get localeServiceId() {
    return this.getStringAttribute('locale_service_id');
  }

  // ospf_enabled - computed: false, optional: true, required: false
  private _ospfEnabled?: boolean | cdktf.IResolvable; 
  public get ospfEnabled() {
    return this.getBooleanAttribute('ospf_enabled');
  }
  public set ospfEnabled(value: boolean | cdktf.IResolvable) {
    this._ospfEnabled = value;
  }
  public resetOspfEnabled() {
    this._ospfEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfEnabledInput() {
    return this._ospfEnabled;
  }

  // site_path - computed: false, optional: true, required: false
  private _sitePath?: string; 
  public get sitePath() {
    return this.getStringAttribute('site_path');
  }
  public set sitePath(value: string) {
    this._sitePath = value;
  }
  public resetSitePath() {
    this._sitePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitePathInput() {
    return this._sitePath;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new PolicyGatewayRedistributionConfigRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: PolicyGatewayRedistributionConfigRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bgp_enabled: cdktf.booleanToTerraform(this._bgpEnabled),
      gateway_path: cdktf.stringToTerraform(this._gatewayPath),
      id: cdktf.stringToTerraform(this._id),
      ospf_enabled: cdktf.booleanToTerraform(this._ospfEnabled),
      site_path: cdktf.stringToTerraform(this._sitePath),
      rule: cdktf.listMapper(policyGatewayRedistributionConfigRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bgp_enabled: {
        value: cdktf.booleanToHclTerraform(this._bgpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gateway_path: {
        value: cdktf.stringToHclTerraform(this._gatewayPath),
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
      ospf_enabled: {
        value: cdktf.booleanToHclTerraform(this._ospfEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      site_path: {
        value: cdktf.stringToHclTerraform(this._sitePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.listMapperHcl(policyGatewayRedistributionConfigRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyGatewayRedistributionConfigRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
