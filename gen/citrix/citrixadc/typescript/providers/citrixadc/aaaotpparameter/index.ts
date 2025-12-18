// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaotpparameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AaaotpparameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaotpparameter#encryption Aaaotpparameter#encryption}
  */
  readonly encryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaotpparameter#id Aaaotpparameter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaotpparameter#maxotpdevices Aaaotpparameter#maxotpdevices}
  */
  readonly maxotpdevices?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaotpparameter citrixadc_aaaotpparameter}
*/
export class Aaaotpparameter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_aaaotpparameter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Aaaotpparameter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Aaaotpparameter to import
  * @param importFromId The id of the existing Aaaotpparameter that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaotpparameter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Aaaotpparameter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_aaaotpparameter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaotpparameter citrixadc_aaaotpparameter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AaaotpparameterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AaaotpparameterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_aaaotpparameter',
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
    this._encryption = config.encryption;
    this._id = config.id;
    this._maxotpdevices = config.maxotpdevices;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // encryption - computed: true, optional: true, required: false
  private _encryption?: string; 
  public get encryption() {
    return this.getStringAttribute('encryption');
  }
  public set encryption(value: string) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
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

  // maxotpdevices - computed: true, optional: true, required: false
  private _maxotpdevices?: number; 
  public get maxotpdevices() {
    return this.getNumberAttribute('maxotpdevices');
  }
  public set maxotpdevices(value: number) {
    this._maxotpdevices = value;
  }
  public resetMaxotpdevices() {
    this._maxotpdevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxotpdevicesInput() {
    return this._maxotpdevices;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      encryption: cdktf.stringToTerraform(this._encryption),
      id: cdktf.stringToTerraform(this._id),
      maxotpdevices: cdktf.numberToTerraform(this._maxotpdevices),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      encryption: {
        value: cdktf.stringToHclTerraform(this._encryption),
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
      maxotpdevices: {
        value: cdktf.numberToHclTerraform(this._maxotpdevices),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
