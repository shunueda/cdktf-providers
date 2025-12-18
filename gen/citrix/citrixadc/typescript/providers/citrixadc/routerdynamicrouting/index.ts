// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/routerdynamicrouting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterdynamicroutingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/routerdynamicrouting#commandlines Routerdynamicrouting#commandlines}
  */
  readonly commandlines?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/routerdynamicrouting#id Routerdynamicrouting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/routerdynamicrouting#nodeid Routerdynamicrouting#nodeid}
  */
  readonly nodeid?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/routerdynamicrouting citrixadc_routerdynamicrouting}
*/
export class Routerdynamicrouting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_routerdynamicrouting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Routerdynamicrouting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Routerdynamicrouting to import
  * @param importFromId The id of the existing Routerdynamicrouting that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/routerdynamicrouting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Routerdynamicrouting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_routerdynamicrouting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/routerdynamicrouting citrixadc_routerdynamicrouting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterdynamicroutingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterdynamicroutingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_routerdynamicrouting',
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
    this._commandlines = config.commandlines;
    this._id = config.id;
    this._nodeid = config.nodeid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // commandlines - computed: true, optional: true, required: false
  private _commandlines?: string[]; 
  public get commandlines() {
    return this.getListAttribute('commandlines');
  }
  public set commandlines(value: string[]) {
    this._commandlines = value;
  }
  public resetCommandlines() {
    this._commandlines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandlinesInput() {
    return this._commandlines;
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

  // nodeid - computed: true, optional: true, required: false
  private _nodeid?: number; 
  public get nodeid() {
    return this.getNumberAttribute('nodeid');
  }
  public set nodeid(value: number) {
    this._nodeid = value;
  }
  public resetNodeid() {
    this._nodeid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeidInput() {
    return this._nodeid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      commandlines: cdktf.listMapper(cdktf.stringToTerraform, false)(this._commandlines),
      id: cdktf.stringToTerraform(this._id),
      nodeid: cdktf.numberToTerraform(this._nodeid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      commandlines: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._commandlines),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodeid: {
        value: cdktf.numberToHclTerraform(this._nodeid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
