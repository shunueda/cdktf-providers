// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cachepolicylabel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CachepolicylabelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cachepolicylabel#evaluates Cachepolicylabel#evaluates}
  */
  readonly evaluates?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cachepolicylabel#id Cachepolicylabel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cachepolicylabel#labelname Cachepolicylabel#labelname}
  */
  readonly labelname: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cachepolicylabel citrixadc_cachepolicylabel}
*/
export class Cachepolicylabel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_cachepolicylabel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cachepolicylabel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cachepolicylabel to import
  * @param importFromId The id of the existing Cachepolicylabel that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cachepolicylabel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cachepolicylabel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_cachepolicylabel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cachepolicylabel citrixadc_cachepolicylabel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CachepolicylabelConfig
  */
  public constructor(scope: Construct, id: string, config: CachepolicylabelConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_cachepolicylabel',
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
    this._evaluates = config.evaluates;
    this._id = config.id;
    this._labelname = config.labelname;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // evaluates - computed: false, optional: true, required: false
  private _evaluates?: string; 
  public get evaluates() {
    return this.getStringAttribute('evaluates');
  }
  public set evaluates(value: string) {
    this._evaluates = value;
  }
  public resetEvaluates() {
    this._evaluates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatesInput() {
    return this._evaluates;
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

  // labelname - computed: false, optional: false, required: true
  private _labelname?: string; 
  public get labelname() {
    return this.getStringAttribute('labelname');
  }
  public set labelname(value: string) {
    this._labelname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelnameInput() {
    return this._labelname;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      evaluates: cdktf.stringToTerraform(this._evaluates),
      id: cdktf.stringToTerraform(this._id),
      labelname: cdktf.stringToTerraform(this._labelname),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      evaluates: {
        value: cdktf.stringToHclTerraform(this._evaluates),
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
      labelname: {
        value: cdktf.stringToHclTerraform(this._labelname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
