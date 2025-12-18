// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/filteraction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FilteractionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/filteraction#id Filteraction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/filteraction#name Filteraction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/filteraction#page Filteraction#page}
  */
  readonly page?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/filteraction#qual Filteraction#qual}
  */
  readonly qual: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/filteraction#respcode Filteraction#respcode}
  */
  readonly respcode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/filteraction#servicename Filteraction#servicename}
  */
  readonly servicename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/filteraction#value Filteraction#value}
  */
  readonly value?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/filteraction citrixadc_filteraction}
*/
export class Filteraction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_filteraction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Filteraction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Filteraction to import
  * @param importFromId The id of the existing Filteraction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/filteraction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Filteraction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_filteraction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/filteraction citrixadc_filteraction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FilteractionConfig
  */
  public constructor(scope: Construct, id: string, config: FilteractionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_filteraction',
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
    this._name = config.name;
    this._page = config.page;
    this._qual = config.qual;
    this._respcode = config.respcode;
    this._servicename = config.servicename;
    this._value = config.value;
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

  // page - computed: true, optional: true, required: false
  private _page?: string; 
  public get page() {
    return this.getStringAttribute('page');
  }
  public set page(value: string) {
    this._page = value;
  }
  public resetPage() {
    this._page = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page;
  }

  // qual - computed: false, optional: false, required: true
  private _qual?: string; 
  public get qual() {
    return this.getStringAttribute('qual');
  }
  public set qual(value: string) {
    this._qual = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qualInput() {
    return this._qual;
  }

  // respcode - computed: true, optional: true, required: false
  private _respcode?: number; 
  public get respcode() {
    return this.getNumberAttribute('respcode');
  }
  public set respcode(value: number) {
    this._respcode = value;
  }
  public resetRespcode() {
    this._respcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respcodeInput() {
    return this._respcode;
  }

  // servicename - computed: true, optional: true, required: false
  private _servicename?: string; 
  public get servicename() {
    return this.getStringAttribute('servicename');
  }
  public set servicename(value: string) {
    this._servicename = value;
  }
  public resetServicename() {
    this._servicename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicenameInput() {
    return this._servicename;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      page: cdktf.stringToTerraform(this._page),
      qual: cdktf.stringToTerraform(this._qual),
      respcode: cdktf.numberToTerraform(this._respcode),
      servicename: cdktf.stringToTerraform(this._servicename),
      value: cdktf.stringToTerraform(this._value),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page: {
        value: cdktf.stringToHclTerraform(this._page),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qual: {
        value: cdktf.stringToHclTerraform(this._qual),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      respcode: {
        value: cdktf.numberToHclTerraform(this._respcode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      servicename: {
        value: cdktf.stringToHclTerraform(this._servicename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
