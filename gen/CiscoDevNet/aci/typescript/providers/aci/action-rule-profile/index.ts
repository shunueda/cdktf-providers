// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActionRuleProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_profile#annotation ActionRuleProfile#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_profile#description ActionRuleProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_profile#id ActionRuleProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_profile#multipath ActionRuleProfile#multipath}
  */
  readonly multipath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_profile#name ActionRuleProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_profile#name_alias ActionRuleProfile#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_profile#next_hop_propagation ActionRuleProfile#next_hop_propagation}
  */
  readonly nextHopPropagation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_profile#set_as_path_prepend_last_as ActionRuleProfile#set_as_path_prepend_last_as}
  */
  readonly setAsPathPrependLastAs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_profile#set_communities ActionRuleProfile#set_communities}
  */
  readonly setCommunities?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_profile#set_dampening ActionRuleProfile#set_dampening}
  */
  readonly setDampening?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_profile#set_metric ActionRuleProfile#set_metric}
  */
  readonly setMetric?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_profile#set_metric_type ActionRuleProfile#set_metric_type}
  */
  readonly setMetricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_profile#set_next_hop ActionRuleProfile#set_next_hop}
  */
  readonly setNextHop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_profile#set_preference ActionRuleProfile#set_preference}
  */
  readonly setPreference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_profile#set_route_tag ActionRuleProfile#set_route_tag}
  */
  readonly setRouteTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_profile#set_weight ActionRuleProfile#set_weight}
  */
  readonly setWeight?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_profile#tenant_dn ActionRuleProfile#tenant_dn}
  */
  readonly tenantDn: string;
  /**
  * set_as_path_prepend_as block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_profile#set_as_path_prepend_as ActionRuleProfile#set_as_path_prepend_as}
  */
  readonly setAsPathPrependAs?: ActionRuleProfileSetAsPathPrependAs[] | cdktf.IResolvable;
}
export interface ActionRuleProfileSetAsPathPrependAs {
  /**
  * ASN must be between 0 and 2147483647
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_profile#asn ActionRuleProfile#asn}
  */
  readonly asn: string;
  /**
  * Order must be between 0 and 31
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_profile#order ActionRuleProfile#order}
  */
  readonly order: string;
}

export function actionRuleProfileSetAsPathPrependAsToTerraform(struct?: ActionRuleProfileSetAsPathPrependAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.stringToTerraform(struct!.asn),
    order: cdktf.stringToTerraform(struct!.order),
  }
}


export function actionRuleProfileSetAsPathPrependAsToHclTerraform(struct?: ActionRuleProfileSetAsPathPrependAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn: {
      value: cdktf.stringToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionRuleProfileSetAsPathPrependAsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ActionRuleProfileSetAsPathPrependAs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionRuleProfileSetAsPathPrependAs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asn = undefined;
      this._order = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asn = value.asn;
      this._order = value.order;
    }
  }

  // asn - computed: false, optional: false, required: true
  private _asn?: string; 
  public get asn() {
    return this.getStringAttribute('asn');
  }
  public set asn(value: string) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // order - computed: false, optional: false, required: true
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}

export class ActionRuleProfileSetAsPathPrependAsList extends cdktf.ComplexList {
  public internalValue? : ActionRuleProfileSetAsPathPrependAs[] | cdktf.IResolvable

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
  public get(index: number): ActionRuleProfileSetAsPathPrependAsOutputReference {
    return new ActionRuleProfileSetAsPathPrependAsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_profile aci_action_rule_profile}
*/
export class ActionRuleProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_action_rule_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ActionRuleProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ActionRuleProfile to import
  * @param importFromId The id of the existing ActionRuleProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ActionRuleProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_action_rule_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/action_rule_profile aci_action_rule_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActionRuleProfileConfig
  */
  public constructor(scope: Construct, id: string, config: ActionRuleProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_action_rule_profile',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._description = config.description;
    this._id = config.id;
    this._multipath = config.multipath;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._nextHopPropagation = config.nextHopPropagation;
    this._setAsPathPrependLastAs = config.setAsPathPrependLastAs;
    this._setCommunities = config.setCommunities;
    this._setDampening = config.setDampening;
    this._setMetric = config.setMetric;
    this._setMetricType = config.setMetricType;
    this._setNextHop = config.setNextHop;
    this._setPreference = config.setPreference;
    this._setRouteTag = config.setRouteTag;
    this._setWeight = config.setWeight;
    this._tenantDn = config.tenantDn;
    this._setAsPathPrependAs.internalValue = config.setAsPathPrependAs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // multipath - computed: true, optional: true, required: false
  private _multipath?: string; 
  public get multipath() {
    return this.getStringAttribute('multipath');
  }
  public set multipath(value: string) {
    this._multipath = value;
  }
  public resetMultipath() {
    this._multipath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipathInput() {
    return this._multipath;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // next_hop_propagation - computed: true, optional: true, required: false
  private _nextHopPropagation?: string; 
  public get nextHopPropagation() {
    return this.getStringAttribute('next_hop_propagation');
  }
  public set nextHopPropagation(value: string) {
    this._nextHopPropagation = value;
  }
  public resetNextHopPropagation() {
    this._nextHopPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopPropagationInput() {
    return this._nextHopPropagation;
  }

  // set_as_path_prepend_last_as - computed: true, optional: true, required: false
  private _setAsPathPrependLastAs?: string; 
  public get setAsPathPrependLastAs() {
    return this.getStringAttribute('set_as_path_prepend_last_as');
  }
  public set setAsPathPrependLastAs(value: string) {
    this._setAsPathPrependLastAs = value;
  }
  public resetSetAsPathPrependLastAs() {
    this._setAsPathPrependLastAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAsPathPrependLastAsInput() {
    return this._setAsPathPrependLastAs;
  }

  // set_communities - computed: true, optional: true, required: false
  private _setCommunities?: { [key: string]: string }; 
  public get setCommunities() {
    return this.getStringMapAttribute('set_communities');
  }
  public set setCommunities(value: { [key: string]: string }) {
    this._setCommunities = value;
  }
  public resetSetCommunities() {
    this._setCommunities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCommunitiesInput() {
    return this._setCommunities;
  }

  // set_dampening - computed: true, optional: true, required: false
  private _setDampening?: { [key: string]: string }; 
  public get setDampening() {
    return this.getStringMapAttribute('set_dampening');
  }
  public set setDampening(value: { [key: string]: string }) {
    this._setDampening = value;
  }
  public resetSetDampening() {
    this._setDampening = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDampeningInput() {
    return this._setDampening;
  }

  // set_metric - computed: true, optional: true, required: false
  private _setMetric?: string; 
  public get setMetric() {
    return this.getStringAttribute('set_metric');
  }
  public set setMetric(value: string) {
    this._setMetric = value;
  }
  public resetSetMetric() {
    this._setMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setMetricInput() {
    return this._setMetric;
  }

  // set_metric_type - computed: true, optional: true, required: false
  private _setMetricType?: string; 
  public get setMetricType() {
    return this.getStringAttribute('set_metric_type');
  }
  public set setMetricType(value: string) {
    this._setMetricType = value;
  }
  public resetSetMetricType() {
    this._setMetricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setMetricTypeInput() {
    return this._setMetricType;
  }

  // set_next_hop - computed: true, optional: true, required: false
  private _setNextHop?: string; 
  public get setNextHop() {
    return this.getStringAttribute('set_next_hop');
  }
  public set setNextHop(value: string) {
    this._setNextHop = value;
  }
  public resetSetNextHop() {
    this._setNextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setNextHopInput() {
    return this._setNextHop;
  }

  // set_preference - computed: true, optional: true, required: false
  private _setPreference?: string; 
  public get setPreference() {
    return this.getStringAttribute('set_preference');
  }
  public set setPreference(value: string) {
    this._setPreference = value;
  }
  public resetSetPreference() {
    this._setPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPreferenceInput() {
    return this._setPreference;
  }

  // set_route_tag - computed: true, optional: true, required: false
  private _setRouteTag?: string; 
  public get setRouteTag() {
    return this.getStringAttribute('set_route_tag');
  }
  public set setRouteTag(value: string) {
    this._setRouteTag = value;
  }
  public resetSetRouteTag() {
    this._setRouteTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setRouteTagInput() {
    return this._setRouteTag;
  }

  // set_weight - computed: true, optional: true, required: false
  private _setWeight?: string; 
  public get setWeight() {
    return this.getStringAttribute('set_weight');
  }
  public set setWeight(value: string) {
    this._setWeight = value;
  }
  public resetSetWeight() {
    this._setWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setWeightInput() {
    return this._setWeight;
  }

  // tenant_dn - computed: false, optional: false, required: true
  private _tenantDn?: string; 
  public get tenantDn() {
    return this.getStringAttribute('tenant_dn');
  }
  public set tenantDn(value: string) {
    this._tenantDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantDnInput() {
    return this._tenantDn;
  }

  // set_as_path_prepend_as - computed: false, optional: true, required: false
  private _setAsPathPrependAs = new ActionRuleProfileSetAsPathPrependAsList(this, "set_as_path_prepend_as", true);
  public get setAsPathPrependAs() {
    return this._setAsPathPrependAs;
  }
  public putSetAsPathPrependAs(value: ActionRuleProfileSetAsPathPrependAs[] | cdktf.IResolvable) {
    this._setAsPathPrependAs.internalValue = value;
  }
  public resetSetAsPathPrependAs() {
    this._setAsPathPrependAs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAsPathPrependAsInput() {
    return this._setAsPathPrependAs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      multipath: cdktf.stringToTerraform(this._multipath),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      next_hop_propagation: cdktf.stringToTerraform(this._nextHopPropagation),
      set_as_path_prepend_last_as: cdktf.stringToTerraform(this._setAsPathPrependLastAs),
      set_communities: cdktf.hashMapper(cdktf.stringToTerraform)(this._setCommunities),
      set_dampening: cdktf.hashMapper(cdktf.stringToTerraform)(this._setDampening),
      set_metric: cdktf.stringToTerraform(this._setMetric),
      set_metric_type: cdktf.stringToTerraform(this._setMetricType),
      set_next_hop: cdktf.stringToTerraform(this._setNextHop),
      set_preference: cdktf.stringToTerraform(this._setPreference),
      set_route_tag: cdktf.stringToTerraform(this._setRouteTag),
      set_weight: cdktf.stringToTerraform(this._setWeight),
      tenant_dn: cdktf.stringToTerraform(this._tenantDn),
      set_as_path_prepend_as: cdktf.listMapper(actionRuleProfileSetAsPathPrependAsToTerraform, true)(this._setAsPathPrependAs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      multipath: {
        value: cdktf.stringToHclTerraform(this._multipath),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_hop_propagation: {
        value: cdktf.stringToHclTerraform(this._nextHopPropagation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_as_path_prepend_last_as: {
        value: cdktf.stringToHclTerraform(this._setAsPathPrependLastAs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_communities: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._setCommunities),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      set_dampening: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._setDampening),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      set_metric: {
        value: cdktf.stringToHclTerraform(this._setMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_metric_type: {
        value: cdktf.stringToHclTerraform(this._setMetricType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_next_hop: {
        value: cdktf.stringToHclTerraform(this._setNextHop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_preference: {
        value: cdktf.stringToHclTerraform(this._setPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_route_tag: {
        value: cdktf.stringToHclTerraform(this._setRouteTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_weight: {
        value: cdktf.stringToHclTerraform(this._setWeight),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_dn: {
        value: cdktf.stringToHclTerraform(this._tenantDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_as_path_prepend_as: {
        value: cdktf.listMapperHcl(actionRuleProfileSetAsPathPrependAsToHclTerraform, true)(this._setAsPathPrependAs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ActionRuleProfileSetAsPathPrependAsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
