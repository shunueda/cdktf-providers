// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dblb_calc_sha1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateDblbCalcSha1AConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dblb_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dblb_calc_sha1#dblb_name SlbTemplateDblbCalcSha1A#dblb_name}
  */
  readonly dblbName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dblb_calc_sha1#id SlbTemplateDblbCalcSha1A#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Cleartext password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dblb_calc_sha1#sha1_value SlbTemplateDblbCalcSha1A#sha1_value}
  */
  readonly sha1Value?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dblb_calc_sha1 thunder_slb_template_dblb_calc_sha1}
*/
export class SlbTemplateDblbCalcSha1A extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_dblb_calc_sha1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateDblbCalcSha1A resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateDblbCalcSha1A to import
  * @param importFromId The id of the existing SlbTemplateDblbCalcSha1A that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dblb_calc_sha1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateDblbCalcSha1A to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_dblb_calc_sha1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dblb_calc_sha1 thunder_slb_template_dblb_calc_sha1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateDblbCalcSha1AConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateDblbCalcSha1AConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_dblb_calc_sha1',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dblbName = config.dblbName;
    this._id = config.id;
    this._sha1Value = config.sha1Value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dblb_name - computed: false, optional: false, required: true
  private _dblbName?: string; 
  public get dblbName() {
    return this.getStringAttribute('dblb_name');
  }
  public set dblbName(value: string) {
    this._dblbName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dblbNameInput() {
    return this._dblbName;
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

  // sha1_value - computed: false, optional: true, required: false
  private _sha1Value?: string; 
  public get sha1Value() {
    return this.getStringAttribute('sha1_value');
  }
  public set sha1Value(value: string) {
    this._sha1Value = value;
  }
  public resetSha1Value() {
    this._sha1Value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1ValueInput() {
    return this._sha1Value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dblb_name: cdktf.stringToTerraform(this._dblbName),
      id: cdktf.stringToTerraform(this._id),
      sha1_value: cdktf.stringToTerraform(this._sha1Value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dblb_name: {
        value: cdktf.stringToHclTerraform(this._dblbName),
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
      sha1_value: {
        value: cdktf.stringToHclTerraform(this._sha1Value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
