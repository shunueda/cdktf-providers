// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/arpparam
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArpparamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/arpparam#id Arpparam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/arpparam#spoofvalidation Arpparam#spoofvalidation}
  */
  readonly spoofvalidation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/arpparam#timeout Arpparam#timeout}
  */
  readonly timeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/arpparam citrixadc_arpparam}
*/
export class Arpparam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_arpparam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Arpparam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Arpparam to import
  * @param importFromId The id of the existing Arpparam that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/arpparam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Arpparam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_arpparam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/arpparam citrixadc_arpparam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArpparamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ArpparamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_arpparam',
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
    this._spoofvalidation = config.spoofvalidation;
    this._timeout = config.timeout;
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

  // spoofvalidation - computed: true, optional: true, required: false
  private _spoofvalidation?: string; 
  public get spoofvalidation() {
    return this.getStringAttribute('spoofvalidation');
  }
  public set spoofvalidation(value: string) {
    this._spoofvalidation = value;
  }
  public resetSpoofvalidation() {
    this._spoofvalidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spoofvalidationInput() {
    return this._spoofvalidation;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      spoofvalidation: cdktf.stringToTerraform(this._spoofvalidation),
      timeout: cdktf.numberToTerraform(this._timeout),
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
      spoofvalidation: {
        value: cdktf.stringToHclTerraform(this._spoofvalidation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
