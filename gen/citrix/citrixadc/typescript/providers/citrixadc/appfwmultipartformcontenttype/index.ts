// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwmultipartformcontenttype
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppfwmultipartformcontenttypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwmultipartformcontenttype#id Appfwmultipartformcontenttype#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwmultipartformcontenttype#isregex Appfwmultipartformcontenttype#isregex}
  */
  readonly isregex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwmultipartformcontenttype#multipartformcontenttypevalue Appfwmultipartformcontenttype#multipartformcontenttypevalue}
  */
  readonly multipartformcontenttypevalue: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwmultipartformcontenttype citrixadc_appfwmultipartformcontenttype}
*/
export class Appfwmultipartformcontenttype extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_appfwmultipartformcontenttype";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Appfwmultipartformcontenttype resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Appfwmultipartformcontenttype to import
  * @param importFromId The id of the existing Appfwmultipartformcontenttype that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwmultipartformcontenttype#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Appfwmultipartformcontenttype to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_appfwmultipartformcontenttype", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwmultipartformcontenttype citrixadc_appfwmultipartformcontenttype} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppfwmultipartformcontenttypeConfig
  */
  public constructor(scope: Construct, id: string, config: AppfwmultipartformcontenttypeConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_appfwmultipartformcontenttype',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
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
    this._isregex = config.isregex;
    this._multipartformcontenttypevalue = config.multipartformcontenttypevalue;
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

  // isregex - computed: true, optional: true, required: false
  private _isregex?: string; 
  public get isregex() {
    return this.getStringAttribute('isregex');
  }
  public set isregex(value: string) {
    this._isregex = value;
  }
  public resetIsregex() {
    this._isregex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isregexInput() {
    return this._isregex;
  }

  // multipartformcontenttypevalue - computed: false, optional: false, required: true
  private _multipartformcontenttypevalue?: string; 
  public get multipartformcontenttypevalue() {
    return this.getStringAttribute('multipartformcontenttypevalue');
  }
  public set multipartformcontenttypevalue(value: string) {
    this._multipartformcontenttypevalue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get multipartformcontenttypevalueInput() {
    return this._multipartformcontenttypevalue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      isregex: cdktf.stringToTerraform(this._isregex),
      multipartformcontenttypevalue: cdktf.stringToTerraform(this._multipartformcontenttypevalue),
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
      isregex: {
        value: cdktf.stringToHclTerraform(this._isregex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multipartformcontenttypevalue: {
        value: cdktf.stringToHclTerraform(this._multipartformcontenttypevalue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
