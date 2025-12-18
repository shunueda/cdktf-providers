// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/linkset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LinksetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/linkset#id Linkset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/linkset#interfacebinding Linkset#interfacebinding}
  */
  readonly interfacebinding?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/linkset#linkset_id Linkset#linkset_id}
  */
  readonly linksetId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/linkset citrixadc_linkset}
*/
export class Linkset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_linkset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Linkset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Linkset to import
  * @param importFromId The id of the existing Linkset that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/linkset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Linkset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_linkset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/linkset citrixadc_linkset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LinksetConfig
  */
  public constructor(scope: Construct, id: string, config: LinksetConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_linkset',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._interfacebinding = config.interfacebinding;
    this._linksetId = config.linksetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // interfacebinding - computed: false, optional: true, required: false
  private _interfacebinding?: string[]; 
  public get interfacebinding() {
    return cdktf.Fn.tolist(this.getListAttribute('interfacebinding'));
  }
  public set interfacebinding(value: string[]) {
    this._interfacebinding = value;
  }
  public resetInterfacebinding() {
    this._interfacebinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacebindingInput() {
    return this._interfacebinding;
  }

  // linkset_id - computed: false, optional: false, required: true
  private _linksetId?: string; 
  public get linksetId() {
    return this.getStringAttribute('linkset_id');
  }
  public set linksetId(value: string) {
    this._linksetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linksetIdInput() {
    return this._linksetId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      interfacebinding: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interfacebinding),
      linkset_id: cdktf.stringToTerraform(this._linksetId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfacebinding: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interfacebinding),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      linkset_id: {
        value: cdktf.stringToHclTerraform(this._linksetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
