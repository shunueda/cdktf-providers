// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rewritepolicylabel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RewritepolicylabelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rewritepolicylabel#comment Rewritepolicylabel#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rewritepolicylabel#id Rewritepolicylabel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rewritepolicylabel#labelname Rewritepolicylabel#labelname}
  */
  readonly labelname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rewritepolicylabel#transform Rewritepolicylabel#transform}
  */
  readonly transform?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rewritepolicylabel citrixadc_rewritepolicylabel}
*/
export class Rewritepolicylabel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_rewritepolicylabel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Rewritepolicylabel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Rewritepolicylabel to import
  * @param importFromId The id of the existing Rewritepolicylabel that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rewritepolicylabel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Rewritepolicylabel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_rewritepolicylabel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rewritepolicylabel citrixadc_rewritepolicylabel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RewritepolicylabelConfig
  */
  public constructor(scope: Construct, id: string, config: RewritepolicylabelConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_rewritepolicylabel',
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
    this._comment = config.comment;
    this._id = config.id;
    this._labelname = config.labelname;
    this._transform = config.transform;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // transform - computed: true, optional: true, required: false
  private _transform?: string; 
  public get transform() {
    return this.getStringAttribute('transform');
  }
  public set transform(value: string) {
    this._transform = value;
  }
  public resetTransform() {
    this._transform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformInput() {
    return this._transform;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      labelname: cdktf.stringToTerraform(this._labelname),
      transform: cdktf.stringToTerraform(this._transform),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      transform: {
        value: cdktf.stringToHclTerraform(this._transform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
