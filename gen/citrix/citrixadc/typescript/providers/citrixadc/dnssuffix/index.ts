// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnssuffix
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnssuffixConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnssuffix#dnssuffix Dnssuffix#dnssuffix}
  */
  readonly dnssuffix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnssuffix#id Dnssuffix#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnssuffix citrixadc_dnssuffix}
*/
export class Dnssuffix extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_dnssuffix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dnssuffix resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dnssuffix to import
  * @param importFromId The id of the existing Dnssuffix that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnssuffix#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dnssuffix to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_dnssuffix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnssuffix citrixadc_dnssuffix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnssuffixConfig
  */
  public constructor(scope: Construct, id: string, config: DnssuffixConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_dnssuffix',
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
    this._dnssuffix = config.dnssuffix;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dnssuffix - computed: false, optional: false, required: true
  private _dnssuffix?: string; 
  public get dnssuffix() {
    return this.getStringAttribute('dnssuffix');
  }
  public set dnssuffix(value: string) {
    this._dnssuffix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssuffixInput() {
    return this._dnssuffix;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dnssuffix: cdktf.stringToTerraform(this._dnssuffix),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dnssuffix: {
        value: cdktf.stringToHclTerraform(this._dnssuffix),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
