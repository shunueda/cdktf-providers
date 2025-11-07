// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsspparams
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsspparamsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsspparams#basethreshold Nsspparams#basethreshold}
  */
  readonly basethreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsspparams#id Nsspparams#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsspparams#throttle Nsspparams#throttle}
  */
  readonly throttle?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsspparams citrixadc_nsspparams}
*/
export class Nsspparams extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nsspparams";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nsspparams resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nsspparams to import
  * @param importFromId The id of the existing Nsspparams that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsspparams#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nsspparams to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nsspparams", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsspparams citrixadc_nsspparams} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsspparamsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NsspparamsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nsspparams',
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
    this._basethreshold = config.basethreshold;
    this._id = config.id;
    this._throttle = config.throttle;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // basethreshold - computed: true, optional: true, required: false
  private _basethreshold?: number; 
  public get basethreshold() {
    return this.getNumberAttribute('basethreshold');
  }
  public set basethreshold(value: number) {
    this._basethreshold = value;
  }
  public resetBasethreshold() {
    this._basethreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basethresholdInput() {
    return this._basethreshold;
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

  // throttle - computed: true, optional: true, required: false
  private _throttle?: string; 
  public get throttle() {
    return this.getStringAttribute('throttle');
  }
  public set throttle(value: string) {
    this._throttle = value;
  }
  public resetThrottle() {
    this._throttle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleInput() {
    return this._throttle;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      basethreshold: cdktf.numberToTerraform(this._basethreshold),
      id: cdktf.stringToTerraform(this._id),
      throttle: cdktf.stringToTerraform(this._throttle),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      basethreshold: {
        value: cdktf.numberToHclTerraform(this._basethreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      throttle: {
        value: cdktf.stringToHclTerraform(this._throttle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
