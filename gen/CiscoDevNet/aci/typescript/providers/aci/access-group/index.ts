// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/access_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/access_group#access_port_selector_dn AccessGroup#access_port_selector_dn}
  */
  readonly accessPortSelectorDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/access_group#annotation AccessGroup#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/access_group#fex_id AccessGroup#fex_id}
  */
  readonly fexId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/access_group#id AccessGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/access_group#tdn AccessGroup#tdn}
  */
  readonly tdn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/access_group aci_access_group}
*/
export class AccessGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_access_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessGroup to import
  * @param importFromId The id of the existing AccessGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/access_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_access_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/access_group aci_access_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AccessGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_access_group',
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
    this._accessPortSelectorDn = config.accessPortSelectorDn;
    this._annotation = config.annotation;
    this._fexId = config.fexId;
    this._id = config.id;
    this._tdn = config.tdn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_port_selector_dn - computed: false, optional: false, required: true
  private _accessPortSelectorDn?: string; 
  public get accessPortSelectorDn() {
    return this.getStringAttribute('access_port_selector_dn');
  }
  public set accessPortSelectorDn(value: string) {
    this._accessPortSelectorDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPortSelectorDnInput() {
    return this._accessPortSelectorDn;
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

  // fex_id - computed: true, optional: true, required: false
  private _fexId?: string; 
  public get fexId() {
    return this.getStringAttribute('fex_id');
  }
  public set fexId(value: string) {
    this._fexId = value;
  }
  public resetFexId() {
    this._fexId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fexIdInput() {
    return this._fexId;
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

  // tdn - computed: true, optional: true, required: false
  private _tdn?: string; 
  public get tdn() {
    return this.getStringAttribute('tdn');
  }
  public set tdn(value: string) {
    this._tdn = value;
  }
  public resetTdn() {
    this._tdn = undefined;
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
      access_port_selector_dn: cdktf.stringToTerraform(this._accessPortSelectorDn),
      annotation: cdktf.stringToTerraform(this._annotation),
      fex_id: cdktf.stringToTerraform(this._fexId),
      id: cdktf.stringToTerraform(this._id),
      tdn: cdktf.stringToTerraform(this._tdn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_port_selector_dn: {
        value: cdktf.stringToHclTerraform(this._accessPortSelectorDn),
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
      fex_id: {
        value: cdktf.stringToHclTerraform(this._fexId),
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
