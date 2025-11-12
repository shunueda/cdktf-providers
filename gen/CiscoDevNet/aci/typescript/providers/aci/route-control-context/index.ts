// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/route_control_context
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouteControlContextConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/route_control_context#action RouteControlContext#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/route_control_context#annotation RouteControlContext#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/route_control_context#description RouteControlContext#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/route_control_context#id RouteControlContext#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/route_control_context#name RouteControlContext#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/route_control_context#name_alias RouteControlContext#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/route_control_context#order RouteControlContext#order}
  */
  readonly order?: string;
  /**
  * Create relation to rtctrl:SubjP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/route_control_context#relation_rtctrl_rs_ctx_p_to_subj_p RouteControlContext#relation_rtctrl_rs_ctx_p_to_subj_p}
  */
  readonly relationRtctrlRsCtxPToSubjP?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/route_control_context#route_control_profile_dn RouteControlContext#route_control_profile_dn}
  */
  readonly routeControlProfileDn: string;
  /**
  * Create relation to rtctrl:AttrP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/route_control_context#set_rule RouteControlContext#set_rule}
  */
  readonly setRule?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/route_control_context aci_route_control_context}
*/
export class RouteControlContext extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_route_control_context";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouteControlContext resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouteControlContext to import
  * @param importFromId The id of the existing RouteControlContext that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/route_control_context#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouteControlContext to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_route_control_context", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/route_control_context aci_route_control_context} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouteControlContextConfig
  */
  public constructor(scope: Construct, id: string, config: RouteControlContextConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_route_control_context',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._annotation = config.annotation;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._order = config.order;
    this._relationRtctrlRsCtxPToSubjP = config.relationRtctrlRsCtxPToSubjP;
    this._routeControlProfileDn = config.routeControlProfileDn;
    this._setRule = config.setRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // order - computed: true, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // relation_rtctrl_rs_ctx_p_to_subj_p - computed: false, optional: true, required: false
  private _relationRtctrlRsCtxPToSubjP?: string[]; 
  public get relationRtctrlRsCtxPToSubjP() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_rtctrl_rs_ctx_p_to_subj_p'));
  }
  public set relationRtctrlRsCtxPToSubjP(value: string[]) {
    this._relationRtctrlRsCtxPToSubjP = value;
  }
  public resetRelationRtctrlRsCtxPToSubjP() {
    this._relationRtctrlRsCtxPToSubjP = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationRtctrlRsCtxPToSubjPInput() {
    return this._relationRtctrlRsCtxPToSubjP;
  }

  // route_control_profile_dn - computed: false, optional: false, required: true
  private _routeControlProfileDn?: string; 
  public get routeControlProfileDn() {
    return this.getStringAttribute('route_control_profile_dn');
  }
  public set routeControlProfileDn(value: string) {
    this._routeControlProfileDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeControlProfileDnInput() {
    return this._routeControlProfileDn;
  }

  // set_rule - computed: false, optional: true, required: false
  private _setRule?: string; 
  public get setRule() {
    return this.getStringAttribute('set_rule');
  }
  public set setRule(value: string) {
    this._setRule = value;
  }
  public resetSetRule() {
    this._setRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setRuleInput() {
    return this._setRule;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      order: cdktf.stringToTerraform(this._order),
      relation_rtctrl_rs_ctx_p_to_subj_p: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationRtctrlRsCtxPToSubjP),
      route_control_profile_dn: cdktf.stringToTerraform(this._routeControlProfileDn),
      set_rule: cdktf.stringToTerraform(this._setRule),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      order: {
        value: cdktf.stringToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_rtctrl_rs_ctx_p_to_subj_p: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationRtctrlRsCtxPToSubjP),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route_control_profile_dn: {
        value: cdktf.stringToHclTerraform(this._routeControlProfileDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_rule: {
        value: cdktf.stringToHclTerraform(this._setRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
