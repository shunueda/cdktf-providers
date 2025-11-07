// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_controls
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciEndpointControlsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_controls#admin_st DataAciEndpointControls#admin_st}
  */
  readonly adminSt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_controls#annotation DataAciEndpointControls#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_controls#description DataAciEndpointControls#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_controls#hold_intvl DataAciEndpointControls#hold_intvl}
  */
  readonly holdIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_controls#id DataAciEndpointControls#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_controls#name_alias DataAciEndpointControls#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_controls#rogue_ep_detect_intvl DataAciEndpointControls#rogue_ep_detect_intvl}
  */
  readonly rogueEpDetectIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_controls#rogue_ep_detect_mult DataAciEndpointControls#rogue_ep_detect_mult}
  */
  readonly rogueEpDetectMult?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_controls aci_endpoint_controls}
*/
export class DataAciEndpointControls extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_endpoint_controls";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciEndpointControls resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciEndpointControls to import
  * @param importFromId The id of the existing DataAciEndpointControls that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_controls#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciEndpointControls to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_endpoint_controls", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_controls aci_endpoint_controls} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciEndpointControlsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAciEndpointControlsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aci_endpoint_controls',
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
    this._adminSt = config.adminSt;
    this._annotation = config.annotation;
    this._description = config.description;
    this._holdIntvl = config.holdIntvl;
    this._id = config.id;
    this._nameAlias = config.nameAlias;
    this._rogueEpDetectIntvl = config.rogueEpDetectIntvl;
    this._rogueEpDetectMult = config.rogueEpDetectMult;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_st - computed: true, optional: true, required: false
  private _adminSt?: string; 
  public get adminSt() {
    return this.getStringAttribute('admin_st');
  }
  public set adminSt(value: string) {
    this._adminSt = value;
  }
  public resetAdminSt() {
    this._adminSt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStInput() {
    return this._adminSt;
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

  // hold_intvl - computed: true, optional: true, required: false
  private _holdIntvl?: string; 
  public get holdIntvl() {
    return this.getStringAttribute('hold_intvl');
  }
  public set holdIntvl(value: string) {
    this._holdIntvl = value;
  }
  public resetHoldIntvl() {
    this._holdIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdIntvlInput() {
    return this._holdIntvl;
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

  // rogue_ep_detect_intvl - computed: true, optional: true, required: false
  private _rogueEpDetectIntvl?: string; 
  public get rogueEpDetectIntvl() {
    return this.getStringAttribute('rogue_ep_detect_intvl');
  }
  public set rogueEpDetectIntvl(value: string) {
    this._rogueEpDetectIntvl = value;
  }
  public resetRogueEpDetectIntvl() {
    this._rogueEpDetectIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rogueEpDetectIntvlInput() {
    return this._rogueEpDetectIntvl;
  }

  // rogue_ep_detect_mult - computed: true, optional: true, required: false
  private _rogueEpDetectMult?: string; 
  public get rogueEpDetectMult() {
    return this.getStringAttribute('rogue_ep_detect_mult');
  }
  public set rogueEpDetectMult(value: string) {
    this._rogueEpDetectMult = value;
  }
  public resetRogueEpDetectMult() {
    this._rogueEpDetectMult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rogueEpDetectMultInput() {
    return this._rogueEpDetectMult;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_st: cdktf.stringToTerraform(this._adminSt),
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      hold_intvl: cdktf.stringToTerraform(this._holdIntvl),
      id: cdktf.stringToTerraform(this._id),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      rogue_ep_detect_intvl: cdktf.stringToTerraform(this._rogueEpDetectIntvl),
      rogue_ep_detect_mult: cdktf.stringToTerraform(this._rogueEpDetectMult),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_st: {
        value: cdktf.stringToHclTerraform(this._adminSt),
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
      hold_intvl: {
        value: cdktf.stringToHclTerraform(this._holdIntvl),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rogue_ep_detect_intvl: {
        value: cdktf.stringToHclTerraform(this._rogueEpDetectIntvl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rogue_ep_detect_mult: {
        value: cdktf.stringToHclTerraform(this._rogueEpDetectMult),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
