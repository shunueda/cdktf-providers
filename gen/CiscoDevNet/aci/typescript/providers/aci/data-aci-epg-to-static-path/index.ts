// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_static_path
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciEpgToStaticPathConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_static_path#annotation DataAciEpgToStaticPath#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_static_path#application_epg_dn DataAciEpgToStaticPath#application_epg_dn}
  */
  readonly applicationEpgDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_static_path#description DataAciEpgToStaticPath#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_static_path#encap DataAciEpgToStaticPath#encap}
  */
  readonly encap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_static_path#id DataAciEpgToStaticPath#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_static_path#instr_imedcy DataAciEpgToStaticPath#instr_imedcy}
  */
  readonly instrImedcy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_static_path#mode DataAciEpgToStaticPath#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_static_path#primary_encap DataAciEpgToStaticPath#primary_encap}
  */
  readonly primaryEncap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_static_path#tdn DataAciEpgToStaticPath#tdn}
  */
  readonly tdn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_static_path aci_epg_to_static_path}
*/
export class DataAciEpgToStaticPath extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_epg_to_static_path";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciEpgToStaticPath resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciEpgToStaticPath to import
  * @param importFromId The id of the existing DataAciEpgToStaticPath that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_static_path#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciEpgToStaticPath to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_epg_to_static_path", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/epg_to_static_path aci_epg_to_static_path} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciEpgToStaticPathConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciEpgToStaticPathConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_epg_to_static_path',
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
    this._applicationEpgDn = config.applicationEpgDn;
    this._description = config.description;
    this._encap = config.encap;
    this._id = config.id;
    this._instrImedcy = config.instrImedcy;
    this._mode = config.mode;
    this._primaryEncap = config.primaryEncap;
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

  // application_epg_dn - computed: false, optional: false, required: true
  private _applicationEpgDn?: string; 
  public get applicationEpgDn() {
    return this.getStringAttribute('application_epg_dn');
  }
  public set applicationEpgDn(value: string) {
    this._applicationEpgDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationEpgDnInput() {
    return this._applicationEpgDn;
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

  // encap - computed: true, optional: true, required: false
  private _encap?: string; 
  public get encap() {
    return this.getStringAttribute('encap');
  }
  public set encap(value: string) {
    this._encap = value;
  }
  public resetEncap() {
    this._encap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapInput() {
    return this._encap;
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

  // instr_imedcy - computed: true, optional: true, required: false
  private _instrImedcy?: string; 
  public get instrImedcy() {
    return this.getStringAttribute('instr_imedcy');
  }
  public set instrImedcy(value: string) {
    this._instrImedcy = value;
  }
  public resetInstrImedcy() {
    this._instrImedcy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instrImedcyInput() {
    return this._instrImedcy;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // primary_encap - computed: true, optional: true, required: false
  private _primaryEncap?: string; 
  public get primaryEncap() {
    return this.getStringAttribute('primary_encap');
  }
  public set primaryEncap(value: string) {
    this._primaryEncap = value;
  }
  public resetPrimaryEncap() {
    this._primaryEncap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryEncapInput() {
    return this._primaryEncap;
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
      application_epg_dn: cdktf.stringToTerraform(this._applicationEpgDn),
      description: cdktf.stringToTerraform(this._description),
      encap: cdktf.stringToTerraform(this._encap),
      id: cdktf.stringToTerraform(this._id),
      instr_imedcy: cdktf.stringToTerraform(this._instrImedcy),
      mode: cdktf.stringToTerraform(this._mode),
      primary_encap: cdktf.stringToTerraform(this._primaryEncap),
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
      application_epg_dn: {
        value: cdktf.stringToHclTerraform(this._applicationEpgDn),
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
      encap: {
        value: cdktf.stringToHclTerraform(this._encap),
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
      instr_imedcy: {
        value: cdktf.stringToHclTerraform(this._instrImedcy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_encap: {
        value: cdktf.stringToHclTerraform(this._primaryEncap),
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
