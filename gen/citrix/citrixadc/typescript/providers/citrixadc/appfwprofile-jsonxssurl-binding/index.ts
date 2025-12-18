// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_jsonxssurl_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppfwprofileJsonxssurlBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_jsonxssurl_binding#alertonly AppfwprofileJsonxssurlBinding#alertonly}
  */
  readonly alertonly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_jsonxssurl_binding#as_value_expr_json_xss AppfwprofileJsonxssurlBinding#as_value_expr_json_xss}
  */
  readonly asValueExprJsonXss?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_jsonxssurl_binding#as_value_type_json_xss AppfwprofileJsonxssurlBinding#as_value_type_json_xss}
  */
  readonly asValueTypeJsonXss?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_jsonxssurl_binding#comment AppfwprofileJsonxssurlBinding#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_jsonxssurl_binding#id AppfwprofileJsonxssurlBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_jsonxssurl_binding#isautodeployed AppfwprofileJsonxssurlBinding#isautodeployed}
  */
  readonly isautodeployed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_jsonxssurl_binding#iskeyregex_json_xss AppfwprofileJsonxssurlBinding#iskeyregex_json_xss}
  */
  readonly iskeyregexJsonXss?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_jsonxssurl_binding#isvalueregex_json_xss AppfwprofileJsonxssurlBinding#isvalueregex_json_xss}
  */
  readonly isvalueregexJsonXss?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_jsonxssurl_binding#jsonxssurl AppfwprofileJsonxssurlBinding#jsonxssurl}
  */
  readonly jsonxssurl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_jsonxssurl_binding#keyname_json_xss AppfwprofileJsonxssurlBinding#keyname_json_xss}
  */
  readonly keynameJsonXss?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_jsonxssurl_binding#name AppfwprofileJsonxssurlBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_jsonxssurl_binding#resourceid AppfwprofileJsonxssurlBinding#resourceid}
  */
  readonly resourceid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_jsonxssurl_binding#ruletype AppfwprofileJsonxssurlBinding#ruletype}
  */
  readonly ruletype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_jsonxssurl_binding#state AppfwprofileJsonxssurlBinding#state}
  */
  readonly state?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_jsonxssurl_binding citrixadc_appfwprofile_jsonxssurl_binding}
*/
export class AppfwprofileJsonxssurlBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_appfwprofile_jsonxssurl_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppfwprofileJsonxssurlBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppfwprofileJsonxssurlBinding to import
  * @param importFromId The id of the existing AppfwprofileJsonxssurlBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_jsonxssurl_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppfwprofileJsonxssurlBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_appfwprofile_jsonxssurl_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_jsonxssurl_binding citrixadc_appfwprofile_jsonxssurl_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppfwprofileJsonxssurlBindingConfig
  */
  public constructor(scope: Construct, id: string, config: AppfwprofileJsonxssurlBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_appfwprofile_jsonxssurl_binding',
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
    this._alertonly = config.alertonly;
    this._asValueExprJsonXss = config.asValueExprJsonXss;
    this._asValueTypeJsonXss = config.asValueTypeJsonXss;
    this._comment = config.comment;
    this._id = config.id;
    this._isautodeployed = config.isautodeployed;
    this._iskeyregexJsonXss = config.iskeyregexJsonXss;
    this._isvalueregexJsonXss = config.isvalueregexJsonXss;
    this._jsonxssurl = config.jsonxssurl;
    this._keynameJsonXss = config.keynameJsonXss;
    this._name = config.name;
    this._resourceid = config.resourceid;
    this._ruletype = config.ruletype;
    this._state = config.state;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alertonly - computed: true, optional: true, required: false
  private _alertonly?: string; 
  public get alertonly() {
    return this.getStringAttribute('alertonly');
  }
  public set alertonly(value: string) {
    this._alertonly = value;
  }
  public resetAlertonly() {
    this._alertonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertonlyInput() {
    return this._alertonly;
  }

  // as_value_expr_json_xss - computed: true, optional: true, required: false
  private _asValueExprJsonXss?: string; 
  public get asValueExprJsonXss() {
    return this.getStringAttribute('as_value_expr_json_xss');
  }
  public set asValueExprJsonXss(value: string) {
    this._asValueExprJsonXss = value;
  }
  public resetAsValueExprJsonXss() {
    this._asValueExprJsonXss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asValueExprJsonXssInput() {
    return this._asValueExprJsonXss;
  }

  // as_value_type_json_xss - computed: true, optional: true, required: false
  private _asValueTypeJsonXss?: string; 
  public get asValueTypeJsonXss() {
    return this.getStringAttribute('as_value_type_json_xss');
  }
  public set asValueTypeJsonXss(value: string) {
    this._asValueTypeJsonXss = value;
  }
  public resetAsValueTypeJsonXss() {
    this._asValueTypeJsonXss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asValueTypeJsonXssInput() {
    return this._asValueTypeJsonXss;
  }

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

  // isautodeployed - computed: true, optional: true, required: false
  private _isautodeployed?: string; 
  public get isautodeployed() {
    return this.getStringAttribute('isautodeployed');
  }
  public set isautodeployed(value: string) {
    this._isautodeployed = value;
  }
  public resetIsautodeployed() {
    this._isautodeployed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isautodeployedInput() {
    return this._isautodeployed;
  }

  // iskeyregex_json_xss - computed: true, optional: true, required: false
  private _iskeyregexJsonXss?: string; 
  public get iskeyregexJsonXss() {
    return this.getStringAttribute('iskeyregex_json_xss');
  }
  public set iskeyregexJsonXss(value: string) {
    this._iskeyregexJsonXss = value;
  }
  public resetIskeyregexJsonXss() {
    this._iskeyregexJsonXss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iskeyregexJsonXssInput() {
    return this._iskeyregexJsonXss;
  }

  // isvalueregex_json_xss - computed: true, optional: true, required: false
  private _isvalueregexJsonXss?: string; 
  public get isvalueregexJsonXss() {
    return this.getStringAttribute('isvalueregex_json_xss');
  }
  public set isvalueregexJsonXss(value: string) {
    this._isvalueregexJsonXss = value;
  }
  public resetIsvalueregexJsonXss() {
    this._isvalueregexJsonXss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isvalueregexJsonXssInput() {
    return this._isvalueregexJsonXss;
  }

  // jsonxssurl - computed: false, optional: false, required: true
  private _jsonxssurl?: string; 
  public get jsonxssurl() {
    return this.getStringAttribute('jsonxssurl');
  }
  public set jsonxssurl(value: string) {
    this._jsonxssurl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonxssurlInput() {
    return this._jsonxssurl;
  }

  // keyname_json_xss - computed: true, optional: true, required: false
  private _keynameJsonXss?: string; 
  public get keynameJsonXss() {
    return this.getStringAttribute('keyname_json_xss');
  }
  public set keynameJsonXss(value: string) {
    this._keynameJsonXss = value;
  }
  public resetKeynameJsonXss() {
    this._keynameJsonXss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keynameJsonXssInput() {
    return this._keynameJsonXss;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resourceid - computed: true, optional: true, required: false
  private _resourceid?: string; 
  public get resourceid() {
    return this.getStringAttribute('resourceid');
  }
  public set resourceid(value: string) {
    this._resourceid = value;
  }
  public resetResourceid() {
    this._resourceid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceidInput() {
    return this._resourceid;
  }

  // ruletype - computed: true, optional: true, required: false
  private _ruletype?: string; 
  public get ruletype() {
    return this.getStringAttribute('ruletype');
  }
  public set ruletype(value: string) {
    this._ruletype = value;
  }
  public resetRuletype() {
    this._ruletype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruletypeInput() {
    return this._ruletype;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alertonly: cdktf.stringToTerraform(this._alertonly),
      as_value_expr_json_xss: cdktf.stringToTerraform(this._asValueExprJsonXss),
      as_value_type_json_xss: cdktf.stringToTerraform(this._asValueTypeJsonXss),
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      isautodeployed: cdktf.stringToTerraform(this._isautodeployed),
      iskeyregex_json_xss: cdktf.stringToTerraform(this._iskeyregexJsonXss),
      isvalueregex_json_xss: cdktf.stringToTerraform(this._isvalueregexJsonXss),
      jsonxssurl: cdktf.stringToTerraform(this._jsonxssurl),
      keyname_json_xss: cdktf.stringToTerraform(this._keynameJsonXss),
      name: cdktf.stringToTerraform(this._name),
      resourceid: cdktf.stringToTerraform(this._resourceid),
      ruletype: cdktf.stringToTerraform(this._ruletype),
      state: cdktf.stringToTerraform(this._state),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alertonly: {
        value: cdktf.stringToHclTerraform(this._alertonly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_value_expr_json_xss: {
        value: cdktf.stringToHclTerraform(this._asValueExprJsonXss),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_value_type_json_xss: {
        value: cdktf.stringToHclTerraform(this._asValueTypeJsonXss),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      isautodeployed: {
        value: cdktf.stringToHclTerraform(this._isautodeployed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iskeyregex_json_xss: {
        value: cdktf.stringToHclTerraform(this._iskeyregexJsonXss),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isvalueregex_json_xss: {
        value: cdktf.stringToHclTerraform(this._isvalueregexJsonXss),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jsonxssurl: {
        value: cdktf.stringToHclTerraform(this._jsonxssurl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keyname_json_xss: {
        value: cdktf.stringToHclTerraform(this._keynameJsonXss),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resourceid: {
        value: cdktf.stringToHclTerraform(this._resourceid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ruletype: {
        value: cdktf.stringToHclTerraform(this._ruletype),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
