// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/fabric_if_pol
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciFabricIfPolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/fabric_if_pol#annotation DataAciFabricIfPol#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/fabric_if_pol#auto_neg DataAciFabricIfPol#auto_neg}
  */
  readonly autoNeg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/fabric_if_pol#description DataAciFabricIfPol#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/fabric_if_pol#fec_mode DataAciFabricIfPol#fec_mode}
  */
  readonly fecMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/fabric_if_pol#id DataAciFabricIfPol#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/fabric_if_pol#link_debounce DataAciFabricIfPol#link_debounce}
  */
  readonly linkDebounce?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/fabric_if_pol#name DataAciFabricIfPol#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/fabric_if_pol#name_alias DataAciFabricIfPol#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/fabric_if_pol#speed DataAciFabricIfPol#speed}
  */
  readonly speed?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/fabric_if_pol aci_fabric_if_pol}
*/
export class DataAciFabricIfPol extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_fabric_if_pol";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciFabricIfPol resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciFabricIfPol to import
  * @param importFromId The id of the existing DataAciFabricIfPol that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/fabric_if_pol#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciFabricIfPol to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_fabric_if_pol", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/fabric_if_pol aci_fabric_if_pol} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciFabricIfPolConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciFabricIfPolConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_fabric_if_pol',
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
    this._annotation = config.annotation;
    this._autoNeg = config.autoNeg;
    this._description = config.description;
    this._fecMode = config.fecMode;
    this._id = config.id;
    this._linkDebounce = config.linkDebounce;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._speed = config.speed;
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

  // auto_neg - computed: true, optional: true, required: false
  private _autoNeg?: string; 
  public get autoNeg() {
    return this.getStringAttribute('auto_neg');
  }
  public set autoNeg(value: string) {
    this._autoNeg = value;
  }
  public resetAutoNeg() {
    this._autoNeg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoNegInput() {
    return this._autoNeg;
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

  // fec_mode - computed: true, optional: true, required: false
  private _fecMode?: string; 
  public get fecMode() {
    return this.getStringAttribute('fec_mode');
  }
  public set fecMode(value: string) {
    this._fecMode = value;
  }
  public resetFecMode() {
    this._fecMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fecModeInput() {
    return this._fecMode;
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

  // link_debounce - computed: true, optional: true, required: false
  private _linkDebounce?: string; 
  public get linkDebounce() {
    return this.getStringAttribute('link_debounce');
  }
  public set linkDebounce(value: string) {
    this._linkDebounce = value;
  }
  public resetLinkDebounce() {
    this._linkDebounce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkDebounceInput() {
    return this._linkDebounce;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      auto_neg: cdktf.stringToTerraform(this._autoNeg),
      description: cdktf.stringToTerraform(this._description),
      fec_mode: cdktf.stringToTerraform(this._fecMode),
      id: cdktf.stringToTerraform(this._id),
      link_debounce: cdktf.stringToTerraform(this._linkDebounce),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      speed: cdktf.stringToTerraform(this._speed),
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
      auto_neg: {
        value: cdktf.stringToHclTerraform(this._autoNeg),
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
      fec_mode: {
        value: cdktf.stringToHclTerraform(this._fecMode),
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
      link_debounce: {
        value: cdktf.stringToHclTerraform(this._linkDebounce),
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
      speed: {
        value: cdktf.stringToHclTerraform(this._speed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
