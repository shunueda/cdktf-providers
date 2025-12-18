// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IcaactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaaction#accessprofilename Icaaction#accessprofilename}
  */
  readonly accessprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaaction#id Icaaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaaction#latencyprofilename Icaaction#latencyprofilename}
  */
  readonly latencyprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaaction#name Icaaction#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaaction citrixadc_icaaction}
*/
export class Icaaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_icaaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Icaaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Icaaction to import
  * @param importFromId The id of the existing Icaaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Icaaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_icaaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaaction citrixadc_icaaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IcaactionConfig
  */
  public constructor(scope: Construct, id: string, config: IcaactionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_icaaction',
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
    this._accessprofilename = config.accessprofilename;
    this._id = config.id;
    this._latencyprofilename = config.latencyprofilename;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessprofilename - computed: true, optional: true, required: false
  private _accessprofilename?: string; 
  public get accessprofilename() {
    return this.getStringAttribute('accessprofilename');
  }
  public set accessprofilename(value: string) {
    this._accessprofilename = value;
  }
  public resetAccessprofilename() {
    this._accessprofilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessprofilenameInput() {
    return this._accessprofilename;
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

  // latencyprofilename - computed: true, optional: true, required: false
  private _latencyprofilename?: string; 
  public get latencyprofilename() {
    return this.getStringAttribute('latencyprofilename');
  }
  public set latencyprofilename(value: string) {
    this._latencyprofilename = value;
  }
  public resetLatencyprofilename() {
    this._latencyprofilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyprofilenameInput() {
    return this._latencyprofilename;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accessprofilename: cdktf.stringToTerraform(this._accessprofilename),
      id: cdktf.stringToTerraform(this._id),
      latencyprofilename: cdktf.stringToTerraform(this._latencyprofilename),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accessprofilename: {
        value: cdktf.stringToHclTerraform(this._accessprofilename),
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
      latencyprofilename: {
        value: cdktf.stringToHclTerraform(this._latencyprofilename),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
