// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/match_route_destination_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MatchRouteDestinationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/match_route_destination_rule#aggregate MatchRouteDestinationRule#aggregate}
  */
  readonly aggregate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/match_route_destination_rule#annotation MatchRouteDestinationRule#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/match_route_destination_rule#description MatchRouteDestinationRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/match_route_destination_rule#greater_than_mask MatchRouteDestinationRule#greater_than_mask}
  */
  readonly greaterThanMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/match_route_destination_rule#id MatchRouteDestinationRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/match_route_destination_rule#ip MatchRouteDestinationRule#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/match_route_destination_rule#less_than_mask MatchRouteDestinationRule#less_than_mask}
  */
  readonly lessThanMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/match_route_destination_rule#match_rule_dn MatchRouteDestinationRule#match_rule_dn}
  */
  readonly matchRuleDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/match_route_destination_rule#name MatchRouteDestinationRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/match_route_destination_rule#name_alias MatchRouteDestinationRule#name_alias}
  */
  readonly nameAlias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/match_route_destination_rule aci_match_route_destination_rule}
*/
export class MatchRouteDestinationRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_match_route_destination_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MatchRouteDestinationRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MatchRouteDestinationRule to import
  * @param importFromId The id of the existing MatchRouteDestinationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/match_route_destination_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MatchRouteDestinationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_match_route_destination_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/match_route_destination_rule aci_match_route_destination_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MatchRouteDestinationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: MatchRouteDestinationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_match_route_destination_rule',
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
    this._aggregate = config.aggregate;
    this._annotation = config.annotation;
    this._description = config.description;
    this._greaterThanMask = config.greaterThanMask;
    this._id = config.id;
    this._ip = config.ip;
    this._lessThanMask = config.lessThanMask;
    this._matchRuleDn = config.matchRuleDn;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregate - computed: true, optional: true, required: false
  private _aggregate?: string; 
  public get aggregate() {
    return this.getStringAttribute('aggregate');
  }
  public set aggregate(value: string) {
    this._aggregate = value;
  }
  public resetAggregate() {
    this._aggregate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateInput() {
    return this._aggregate;
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

  // greater_than_mask - computed: true, optional: true, required: false
  private _greaterThanMask?: string; 
  public get greaterThanMask() {
    return this.getStringAttribute('greater_than_mask');
  }
  public set greaterThanMask(value: string) {
    this._greaterThanMask = value;
  }
  public resetGreaterThanMask() {
    this._greaterThanMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaterThanMaskInput() {
    return this._greaterThanMask;
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

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // less_than_mask - computed: true, optional: true, required: false
  private _lessThanMask?: string; 
  public get lessThanMask() {
    return this.getStringAttribute('less_than_mask');
  }
  public set lessThanMask(value: string) {
    this._lessThanMask = value;
  }
  public resetLessThanMask() {
    this._lessThanMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessThanMaskInput() {
    return this._lessThanMask;
  }

  // match_rule_dn - computed: false, optional: false, required: true
  private _matchRuleDn?: string; 
  public get matchRuleDn() {
    return this.getStringAttribute('match_rule_dn');
  }
  public set matchRuleDn(value: string) {
    this._matchRuleDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRuleDnInput() {
    return this._matchRuleDn;
  }

  // name - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregate: cdktf.stringToTerraform(this._aggregate),
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      greater_than_mask: cdktf.stringToTerraform(this._greaterThanMask),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      less_than_mask: cdktf.stringToTerraform(this._lessThanMask),
      match_rule_dn: cdktf.stringToTerraform(this._matchRuleDn),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregate: {
        value: cdktf.stringToHclTerraform(this._aggregate),
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
      greater_than_mask: {
        value: cdktf.stringToHclTerraform(this._greaterThanMask),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      less_than_mask: {
        value: cdktf.stringToHclTerraform(this._lessThanMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_rule_dn: {
        value: cdktf.stringToHclTerraform(this._matchRuleDn),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
