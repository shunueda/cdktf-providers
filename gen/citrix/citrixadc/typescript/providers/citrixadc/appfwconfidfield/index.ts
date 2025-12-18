// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwconfidfield
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppfwconfidfieldConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwconfidfield#comment Appfwconfidfield#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwconfidfield#fieldname Appfwconfidfield#fieldname}
  */
  readonly fieldname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwconfidfield#id Appfwconfidfield#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwconfidfield#isregex Appfwconfidfield#isregex}
  */
  readonly isregex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwconfidfield#state Appfwconfidfield#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwconfidfield#url Appfwconfidfield#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwconfidfield citrixadc_appfwconfidfield}
*/
export class Appfwconfidfield extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_appfwconfidfield";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Appfwconfidfield resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Appfwconfidfield to import
  * @param importFromId The id of the existing Appfwconfidfield that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwconfidfield#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Appfwconfidfield to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_appfwconfidfield", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwconfidfield citrixadc_appfwconfidfield} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppfwconfidfieldConfig
  */
  public constructor(scope: Construct, id: string, config: AppfwconfidfieldConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_appfwconfidfield',
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
    this._fieldname = config.fieldname;
    this._id = config.id;
    this._isregex = config.isregex;
    this._state = config.state;
    this._url = config.url;
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

  // fieldname - computed: false, optional: false, required: true
  private _fieldname?: string; 
  public get fieldname() {
    return this.getStringAttribute('fieldname');
  }
  public set fieldname(value: string) {
    this._fieldname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldnameInput() {
    return this._fieldname;
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

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      fieldname: cdktf.stringToTerraform(this._fieldname),
      id: cdktf.stringToTerraform(this._id),
      isregex: cdktf.stringToTerraform(this._isregex),
      state: cdktf.stringToTerraform(this._state),
      url: cdktf.stringToTerraform(this._url),
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
      fieldname: {
        value: cdktf.stringToHclTerraform(this._fieldname),
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
      isregex: {
        value: cdktf.stringToHclTerraform(this._isregex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
