// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/interface_fc_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceFcPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/interface_fc_policy#annotation InterfaceFcPolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/interface_fc_policy#automaxspeed InterfaceFcPolicy#automaxspeed}
  */
  readonly automaxspeed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/interface_fc_policy#description InterfaceFcPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/interface_fc_policy#fill_pattern InterfaceFcPolicy#fill_pattern}
  */
  readonly fillPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/interface_fc_policy#id InterfaceFcPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/interface_fc_policy#name InterfaceFcPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/interface_fc_policy#name_alias InterfaceFcPolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/interface_fc_policy#port_mode InterfaceFcPolicy#port_mode}
  */
  readonly portMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/interface_fc_policy#rx_bb_credit InterfaceFcPolicy#rx_bb_credit}
  */
  readonly rxBbCredit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/interface_fc_policy#speed InterfaceFcPolicy#speed}
  */
  readonly speed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/interface_fc_policy#trunk_mode InterfaceFcPolicy#trunk_mode}
  */
  readonly trunkMode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/interface_fc_policy aci_interface_fc_policy}
*/
export class InterfaceFcPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_interface_fc_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceFcPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceFcPolicy to import
  * @param importFromId The id of the existing InterfaceFcPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/interface_fc_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceFcPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_interface_fc_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/interface_fc_policy aci_interface_fc_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceFcPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceFcPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_interface_fc_policy',
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
    this._automaxspeed = config.automaxspeed;
    this._description = config.description;
    this._fillPattern = config.fillPattern;
    this._id = config.id;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._portMode = config.portMode;
    this._rxBbCredit = config.rxBbCredit;
    this._speed = config.speed;
    this._trunkMode = config.trunkMode;
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

  // automaxspeed - computed: true, optional: true, required: false
  private _automaxspeed?: string; 
  public get automaxspeed() {
    return this.getStringAttribute('automaxspeed');
  }
  public set automaxspeed(value: string) {
    this._automaxspeed = value;
  }
  public resetAutomaxspeed() {
    this._automaxspeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaxspeedInput() {
    return this._automaxspeed;
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

  // fill_pattern - computed: true, optional: true, required: false
  private _fillPattern?: string; 
  public get fillPattern() {
    return this.getStringAttribute('fill_pattern');
  }
  public set fillPattern(value: string) {
    this._fillPattern = value;
  }
  public resetFillPattern() {
    this._fillPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fillPatternInput() {
    return this._fillPattern;
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

  // port_mode - computed: true, optional: true, required: false
  private _portMode?: string; 
  public get portMode() {
    return this.getStringAttribute('port_mode');
  }
  public set portMode(value: string) {
    this._portMode = value;
  }
  public resetPortMode() {
    this._portMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portModeInput() {
    return this._portMode;
  }

  // rx_bb_credit - computed: true, optional: true, required: false
  private _rxBbCredit?: string; 
  public get rxBbCredit() {
    return this.getStringAttribute('rx_bb_credit');
  }
  public set rxBbCredit(value: string) {
    this._rxBbCredit = value;
  }
  public resetRxBbCredit() {
    this._rxBbCredit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxBbCreditInput() {
    return this._rxBbCredit;
  }

  // speed - computed: true, optional: true, required: false
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // trunk_mode - computed: true, optional: true, required: false
  private _trunkMode?: string; 
  public get trunkMode() {
    return this.getStringAttribute('trunk_mode');
  }
  public set trunkMode(value: string) {
    this._trunkMode = value;
  }
  public resetTrunkMode() {
    this._trunkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkModeInput() {
    return this._trunkMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      automaxspeed: cdktf.stringToTerraform(this._automaxspeed),
      description: cdktf.stringToTerraform(this._description),
      fill_pattern: cdktf.stringToTerraform(this._fillPattern),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      port_mode: cdktf.stringToTerraform(this._portMode),
      rx_bb_credit: cdktf.stringToTerraform(this._rxBbCredit),
      speed: cdktf.stringToTerraform(this._speed),
      trunk_mode: cdktf.stringToTerraform(this._trunkMode),
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
      automaxspeed: {
        value: cdktf.stringToHclTerraform(this._automaxspeed),
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
      fill_pattern: {
        value: cdktf.stringToHclTerraform(this._fillPattern),
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
      port_mode: {
        value: cdktf.stringToHclTerraform(this._portMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rx_bb_credit: {
        value: cdktf.stringToHclTerraform(this._rxBbCredit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      speed: {
        value: cdktf.stringToHclTerraform(this._speed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trunk_mode: {
        value: cdktf.stringToHclTerraform(this._trunkMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
