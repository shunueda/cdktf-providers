// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/mapbmr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MapbmrConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/mapbmr#eabitlength Mapbmr#eabitlength}
  */
  readonly eabitlength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/mapbmr#id Mapbmr#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/mapbmr#name Mapbmr#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/mapbmr#psidlength Mapbmr#psidlength}
  */
  readonly psidlength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/mapbmr#psidoffset Mapbmr#psidoffset}
  */
  readonly psidoffset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/mapbmr#ruleipv6prefix Mapbmr#ruleipv6prefix}
  */
  readonly ruleipv6Prefix: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/mapbmr citrixadc_mapbmr}
*/
export class Mapbmr extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_mapbmr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Mapbmr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Mapbmr to import
  * @param importFromId The id of the existing Mapbmr that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/mapbmr#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Mapbmr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_mapbmr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/mapbmr citrixadc_mapbmr} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MapbmrConfig
  */
  public constructor(scope: Construct, id: string, config: MapbmrConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_mapbmr',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._eabitlength = config.eabitlength;
    this._id = config.id;
    this._name = config.name;
    this._psidlength = config.psidlength;
    this._psidoffset = config.psidoffset;
    this._ruleipv6Prefix = config.ruleipv6Prefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // eabitlength - computed: true, optional: true, required: false
  private _eabitlength?: number; 
  public get eabitlength() {
    return this.getNumberAttribute('eabitlength');
  }
  public set eabitlength(value: number) {
    this._eabitlength = value;
  }
  public resetEabitlength() {
    this._eabitlength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eabitlengthInput() {
    return this._eabitlength;
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

  // psidlength - computed: true, optional: true, required: false
  private _psidlength?: number; 
  public get psidlength() {
    return this.getNumberAttribute('psidlength');
  }
  public set psidlength(value: number) {
    this._psidlength = value;
  }
  public resetPsidlength() {
    this._psidlength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get psidlengthInput() {
    return this._psidlength;
  }

  // psidoffset - computed: true, optional: true, required: false
  private _psidoffset?: number; 
  public get psidoffset() {
    return this.getNumberAttribute('psidoffset');
  }
  public set psidoffset(value: number) {
    this._psidoffset = value;
  }
  public resetPsidoffset() {
    this._psidoffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get psidoffsetInput() {
    return this._psidoffset;
  }

  // ruleipv6prefix - computed: false, optional: false, required: true
  private _ruleipv6Prefix?: string; 
  public get ruleipv6Prefix() {
    return this.getStringAttribute('ruleipv6prefix');
  }
  public set ruleipv6Prefix(value: string) {
    this._ruleipv6Prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleipv6PrefixInput() {
    return this._ruleipv6Prefix;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      eabitlength: cdktf.numberToTerraform(this._eabitlength),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      psidlength: cdktf.numberToTerraform(this._psidlength),
      psidoffset: cdktf.numberToTerraform(this._psidoffset),
      ruleipv6prefix: cdktf.stringToTerraform(this._ruleipv6Prefix),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      eabitlength: {
        value: cdktf.numberToHclTerraform(this._eabitlength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      psidlength: {
        value: cdktf.numberToHclTerraform(this._psidlength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      psidoffset: {
        value: cdktf.numberToHclTerraform(this._psidoffset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ruleipv6prefix: {
        value: cdktf.stringToHclTerraform(this._ruleipv6Prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
