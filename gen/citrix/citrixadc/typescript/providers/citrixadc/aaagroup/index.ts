// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaagroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AaagroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaagroup#groupname Aaagroup#groupname}
  */
  readonly groupname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaagroup#id Aaagroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaagroup#loggedin Aaagroup#loggedin}
  */
  readonly loggedin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaagroup#weight Aaagroup#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaagroup citrixadc_aaagroup}
*/
export class Aaagroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_aaagroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Aaagroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Aaagroup to import
  * @param importFromId The id of the existing Aaagroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaagroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Aaagroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_aaagroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaagroup citrixadc_aaagroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AaagroupConfig
  */
  public constructor(scope: Construct, id: string, config: AaagroupConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_aaagroup',
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
    this._groupname = config.groupname;
    this._id = config.id;
    this._loggedin = config.loggedin;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // groupname - computed: false, optional: false, required: true
  private _groupname?: string; 
  public get groupname() {
    return this.getStringAttribute('groupname');
  }
  public set groupname(value: string) {
    this._groupname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupnameInput() {
    return this._groupname;
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

  // loggedin - computed: false, optional: true, required: false
  private _loggedin?: boolean | cdktf.IResolvable; 
  public get loggedin() {
    return this.getBooleanAttribute('loggedin');
  }
  public set loggedin(value: boolean | cdktf.IResolvable) {
    this._loggedin = value;
  }
  public resetLoggedin() {
    this._loggedin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggedinInput() {
    return this._loggedin;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      groupname: cdktf.stringToTerraform(this._groupname),
      id: cdktf.stringToTerraform(this._id),
      loggedin: cdktf.booleanToTerraform(this._loggedin),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      groupname: {
        value: cdktf.stringToHclTerraform(this._groupname),
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
      loggedin: {
        value: cdktf.booleanToHclTerraform(this._loggedin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
