// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaapreauthenticationaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AaapreauthenticationactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaapreauthenticationaction#defaultepagroup Aaapreauthenticationaction#defaultepagroup}
  */
  readonly defaultepagroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaapreauthenticationaction#deletefiles Aaapreauthenticationaction#deletefiles}
  */
  readonly deletefiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaapreauthenticationaction#id Aaapreauthenticationaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaapreauthenticationaction#killprocess Aaapreauthenticationaction#killprocess}
  */
  readonly killprocess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaapreauthenticationaction#name Aaapreauthenticationaction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaapreauthenticationaction#preauthenticationaction Aaapreauthenticationaction#preauthenticationaction}
  */
  readonly preauthenticationaction?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaapreauthenticationaction citrixadc_aaapreauthenticationaction}
*/
export class Aaapreauthenticationaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_aaapreauthenticationaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Aaapreauthenticationaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Aaapreauthenticationaction to import
  * @param importFromId The id of the existing Aaapreauthenticationaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaapreauthenticationaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Aaapreauthenticationaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_aaapreauthenticationaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/aaapreauthenticationaction citrixadc_aaapreauthenticationaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AaapreauthenticationactionConfig
  */
  public constructor(scope: Construct, id: string, config: AaapreauthenticationactionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_aaapreauthenticationaction',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultepagroup = config.defaultepagroup;
    this._deletefiles = config.deletefiles;
    this._id = config.id;
    this._killprocess = config.killprocess;
    this._name = config.name;
    this._preauthenticationaction = config.preauthenticationaction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // defaultepagroup - computed: true, optional: true, required: false
  private _defaultepagroup?: string; 
  public get defaultepagroup() {
    return this.getStringAttribute('defaultepagroup');
  }
  public set defaultepagroup(value: string) {
    this._defaultepagroup = value;
  }
  public resetDefaultepagroup() {
    this._defaultepagroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultepagroupInput() {
    return this._defaultepagroup;
  }

  // deletefiles - computed: true, optional: true, required: false
  private _deletefiles?: string; 
  public get deletefiles() {
    return this.getStringAttribute('deletefiles');
  }
  public set deletefiles(value: string) {
    this._deletefiles = value;
  }
  public resetDeletefiles() {
    this._deletefiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletefilesInput() {
    return this._deletefiles;
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

  // killprocess - computed: true, optional: true, required: false
  private _killprocess?: string; 
  public get killprocess() {
    return this.getStringAttribute('killprocess');
  }
  public set killprocess(value: string) {
    this._killprocess = value;
  }
  public resetKillprocess() {
    this._killprocess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get killprocessInput() {
    return this._killprocess;
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

  // preauthenticationaction - computed: true, optional: true, required: false
  private _preauthenticationaction?: string; 
  public get preauthenticationaction() {
    return this.getStringAttribute('preauthenticationaction');
  }
  public set preauthenticationaction(value: string) {
    this._preauthenticationaction = value;
  }
  public resetPreauthenticationaction() {
    this._preauthenticationaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preauthenticationactionInput() {
    return this._preauthenticationaction;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      defaultepagroup: cdktf.stringToTerraform(this._defaultepagroup),
      deletefiles: cdktf.stringToTerraform(this._deletefiles),
      id: cdktf.stringToTerraform(this._id),
      killprocess: cdktf.stringToTerraform(this._killprocess),
      name: cdktf.stringToTerraform(this._name),
      preauthenticationaction: cdktf.stringToTerraform(this._preauthenticationaction),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      defaultepagroup: {
        value: cdktf.stringToHclTerraform(this._defaultepagroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletefiles: {
        value: cdktf.stringToHclTerraform(this._deletefiles),
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
      killprocess: {
        value: cdktf.stringToHclTerraform(this._killprocess),
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
      preauthenticationaction: {
        value: cdktf.stringToHclTerraform(this._preauthenticationaction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
