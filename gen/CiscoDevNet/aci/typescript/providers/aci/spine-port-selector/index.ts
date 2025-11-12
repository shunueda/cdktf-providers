// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_port_selector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpinePortSelectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_port_selector#annotation SpinePortSelector#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_port_selector#id SpinePortSelector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_port_selector#spine_profile_dn SpinePortSelector#spine_profile_dn}
  */
  readonly spineProfileDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_port_selector#tdn SpinePortSelector#tdn}
  */
  readonly tdn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_port_selector aci_spine_port_selector}
*/
export class SpinePortSelector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_spine_port_selector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpinePortSelector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpinePortSelector to import
  * @param importFromId The id of the existing SpinePortSelector that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_port_selector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpinePortSelector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_spine_port_selector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/spine_port_selector aci_spine_port_selector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpinePortSelectorConfig
  */
  public constructor(scope: Construct, id: string, config: SpinePortSelectorConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_spine_port_selector',
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
    this._id = config.id;
    this._spineProfileDn = config.spineProfileDn;
    this._tdn = config.tdn;
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

  // spine_profile_dn - computed: false, optional: false, required: true
  private _spineProfileDn?: string; 
  public get spineProfileDn() {
    return this.getStringAttribute('spine_profile_dn');
  }
  public set spineProfileDn(value: string) {
    this._spineProfileDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spineProfileDnInput() {
    return this._spineProfileDn;
  }

  // tdn - computed: false, optional: false, required: true
  private _tdn?: string; 
  public get tdn() {
    return this.getStringAttribute('tdn');
  }
  public set tdn(value: string) {
    this._tdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tdnInput() {
    return this._tdn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      id: cdktf.stringToTerraform(this._id),
      spine_profile_dn: cdktf.stringToTerraform(this._spineProfileDn),
      tdn: cdktf.stringToTerraform(this._tdn),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spine_profile_dn: {
        value: cdktf.stringToHclTerraform(this._spineProfileDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tdn: {
        value: cdktf.stringToHclTerraform(this._tdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
