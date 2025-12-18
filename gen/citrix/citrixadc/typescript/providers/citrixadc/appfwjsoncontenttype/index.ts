// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwjsoncontenttype
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppfwjsoncontenttypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwjsoncontenttype#id Appfwjsoncontenttype#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwjsoncontenttype#isregex Appfwjsoncontenttype#isregex}
  */
  readonly isregex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwjsoncontenttype#jsoncontenttypevalue Appfwjsoncontenttype#jsoncontenttypevalue}
  */
  readonly jsoncontenttypevalue: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwjsoncontenttype citrixadc_appfwjsoncontenttype}
*/
export class Appfwjsoncontenttype extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_appfwjsoncontenttype";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Appfwjsoncontenttype resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Appfwjsoncontenttype to import
  * @param importFromId The id of the existing Appfwjsoncontenttype that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwjsoncontenttype#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Appfwjsoncontenttype to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_appfwjsoncontenttype", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwjsoncontenttype citrixadc_appfwjsoncontenttype} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppfwjsoncontenttypeConfig
  */
  public constructor(scope: Construct, id: string, config: AppfwjsoncontenttypeConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_appfwjsoncontenttype',
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
    this._isregex = config.isregex;
    this._jsoncontenttypevalue = config.jsoncontenttypevalue;
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

  // isregex - computed: false, optional: true, required: false
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

  // jsoncontenttypevalue - computed: false, optional: false, required: true
  private _jsoncontenttypevalue?: string; 
  public get jsoncontenttypevalue() {
    return this.getStringAttribute('jsoncontenttypevalue');
  }
  public set jsoncontenttypevalue(value: string) {
    this._jsoncontenttypevalue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsoncontenttypevalueInput() {
    return this._jsoncontenttypevalue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      isregex: cdktf.stringToTerraform(this._isregex),
      jsoncontenttypevalue: cdktf.stringToTerraform(this._jsoncontenttypevalue),
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
      jsoncontenttypevalue: {
        value: cdktf.stringToHclTerraform(this._jsoncontenttypevalue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
