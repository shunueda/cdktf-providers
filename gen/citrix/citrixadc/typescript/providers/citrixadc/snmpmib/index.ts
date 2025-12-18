// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpmib
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpmibConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpmib#contact Snmpmib#contact}
  */
  readonly contact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpmib#customid Snmpmib#customid}
  */
  readonly customid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpmib#id Snmpmib#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpmib#location Snmpmib#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpmib#name Snmpmib#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpmib#ownernode Snmpmib#ownernode}
  */
  readonly ownernode?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpmib citrixadc_snmpmib}
*/
export class Snmpmib extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_snmpmib";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Snmpmib resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Snmpmib to import
  * @param importFromId The id of the existing Snmpmib that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpmib#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Snmpmib to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_snmpmib", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpmib citrixadc_snmpmib} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpmibConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnmpmibConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_snmpmib',
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
    this._contact = config.contact;
    this._customid = config.customid;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._ownernode = config.ownernode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact - computed: true, optional: true, required: false
  private _contact?: string; 
  public get contact() {
    return this.getStringAttribute('contact');
  }
  public set contact(value: string) {
    this._contact = value;
  }
  public resetContact() {
    this._contact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactInput() {
    return this._contact;
  }

  // customid - computed: true, optional: true, required: false
  private _customid?: string; 
  public get customid() {
    return this.getStringAttribute('customid');
  }
  public set customid(value: string) {
    this._customid = value;
  }
  public resetCustomid() {
    this._customid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customidInput() {
    return this._customid;
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

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // ownernode - computed: true, optional: true, required: false
  private _ownernode?: number; 
  public get ownernode() {
    return this.getNumberAttribute('ownernode');
  }
  public set ownernode(value: number) {
    this._ownernode = value;
  }
  public resetOwnernode() {
    this._ownernode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownernodeInput() {
    return this._ownernode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact: cdktf.stringToTerraform(this._contact),
      customid: cdktf.stringToTerraform(this._customid),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      ownernode: cdktf.numberToTerraform(this._ownernode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact: {
        value: cdktf.stringToHclTerraform(this._contact),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customid: {
        value: cdktf.stringToHclTerraform(this._customid),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      ownernode: {
        value: cdktf.numberToHclTerraform(this._ownernode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
