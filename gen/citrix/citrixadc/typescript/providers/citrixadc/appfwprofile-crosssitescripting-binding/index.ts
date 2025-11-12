// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_crosssitescripting_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppfwprofileCrosssitescriptingBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_crosssitescripting_binding#alertonly AppfwprofileCrosssitescriptingBinding#alertonly}
  */
  readonly alertonly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_crosssitescripting_binding#as_scan_location_xss AppfwprofileCrosssitescriptingBinding#as_scan_location_xss}
  */
  readonly asScanLocationXss: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_crosssitescripting_binding#as_value_expr_xss AppfwprofileCrosssitescriptingBinding#as_value_expr_xss}
  */
  readonly asValueExprXss?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_crosssitescripting_binding#as_value_type_xss AppfwprofileCrosssitescriptingBinding#as_value_type_xss}
  */
  readonly asValueTypeXss?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_crosssitescripting_binding#comment AppfwprofileCrosssitescriptingBinding#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_crosssitescripting_binding#crosssitescripting AppfwprofileCrosssitescriptingBinding#crosssitescripting}
  */
  readonly crosssitescripting: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_crosssitescripting_binding#formactionurl_xss AppfwprofileCrosssitescriptingBinding#formactionurl_xss}
  */
  readonly formactionurlXss: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_crosssitescripting_binding#id AppfwprofileCrosssitescriptingBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_crosssitescripting_binding#isautodeployed AppfwprofileCrosssitescriptingBinding#isautodeployed}
  */
  readonly isautodeployed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_crosssitescripting_binding#isregex_xss AppfwprofileCrosssitescriptingBinding#isregex_xss}
  */
  readonly isregexXss?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_crosssitescripting_binding#isvalueregex_xss AppfwprofileCrosssitescriptingBinding#isvalueregex_xss}
  */
  readonly isvalueregexXss?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_crosssitescripting_binding#name AppfwprofileCrosssitescriptingBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_crosssitescripting_binding#resourceid AppfwprofileCrosssitescriptingBinding#resourceid}
  */
  readonly resourceid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_crosssitescripting_binding#ruletype AppfwprofileCrosssitescriptingBinding#ruletype}
  */
  readonly ruletype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_crosssitescripting_binding#state AppfwprofileCrosssitescriptingBinding#state}
  */
  readonly state?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_crosssitescripting_binding citrixadc_appfwprofile_crosssitescripting_binding}
*/
export class AppfwprofileCrosssitescriptingBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_appfwprofile_crosssitescripting_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppfwprofileCrosssitescriptingBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppfwprofileCrosssitescriptingBinding to import
  * @param importFromId The id of the existing AppfwprofileCrosssitescriptingBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_crosssitescripting_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppfwprofileCrosssitescriptingBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_appfwprofile_crosssitescripting_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_crosssitescripting_binding citrixadc_appfwprofile_crosssitescripting_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppfwprofileCrosssitescriptingBindingConfig
  */
  public constructor(scope: Construct, id: string, config: AppfwprofileCrosssitescriptingBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_appfwprofile_crosssitescripting_binding',
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
    this._alertonly = config.alertonly;
    this._asScanLocationXss = config.asScanLocationXss;
    this._asValueExprXss = config.asValueExprXss;
    this._asValueTypeXss = config.asValueTypeXss;
    this._comment = config.comment;
    this._crosssitescripting = config.crosssitescripting;
    this._formactionurlXss = config.formactionurlXss;
    this._id = config.id;
    this._isautodeployed = config.isautodeployed;
    this._isregexXss = config.isregexXss;
    this._isvalueregexXss = config.isvalueregexXss;
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

  // as_scan_location_xss - computed: false, optional: false, required: true
  private _asScanLocationXss?: string; 
  public get asScanLocationXss() {
    return this.getStringAttribute('as_scan_location_xss');
  }
  public set asScanLocationXss(value: string) {
    this._asScanLocationXss = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asScanLocationXssInput() {
    return this._asScanLocationXss;
  }

  // as_value_expr_xss - computed: true, optional: true, required: false
  private _asValueExprXss?: string; 
  public get asValueExprXss() {
    return this.getStringAttribute('as_value_expr_xss');
  }
  public set asValueExprXss(value: string) {
    this._asValueExprXss = value;
  }
  public resetAsValueExprXss() {
    this._asValueExprXss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asValueExprXssInput() {
    return this._asValueExprXss;
  }

  // as_value_type_xss - computed: true, optional: true, required: false
  private _asValueTypeXss?: string; 
  public get asValueTypeXss() {
    return this.getStringAttribute('as_value_type_xss');
  }
  public set asValueTypeXss(value: string) {
    this._asValueTypeXss = value;
  }
  public resetAsValueTypeXss() {
    this._asValueTypeXss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asValueTypeXssInput() {
    return this._asValueTypeXss;
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

  // crosssitescripting - computed: false, optional: false, required: true
  private _crosssitescripting?: string; 
  public get crosssitescripting() {
    return this.getStringAttribute('crosssitescripting');
  }
  public set crosssitescripting(value: string) {
    this._crosssitescripting = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crosssitescriptingInput() {
    return this._crosssitescripting;
  }

  // formactionurl_xss - computed: false, optional: false, required: true
  private _formactionurlXss?: string; 
  public get formactionurlXss() {
    return this.getStringAttribute('formactionurl_xss');
  }
  public set formactionurlXss(value: string) {
    this._formactionurlXss = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formactionurlXssInput() {
    return this._formactionurlXss;
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

  // isregex_xss - computed: true, optional: true, required: false
  private _isregexXss?: string; 
  public get isregexXss() {
    return this.getStringAttribute('isregex_xss');
  }
  public set isregexXss(value: string) {
    this._isregexXss = value;
  }
  public resetIsregexXss() {
    this._isregexXss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isregexXssInput() {
    return this._isregexXss;
  }

  // isvalueregex_xss - computed: true, optional: true, required: false
  private _isvalueregexXss?: string; 
  public get isvalueregexXss() {
    return this.getStringAttribute('isvalueregex_xss');
  }
  public set isvalueregexXss(value: string) {
    this._isvalueregexXss = value;
  }
  public resetIsvalueregexXss() {
    this._isvalueregexXss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isvalueregexXssInput() {
    return this._isvalueregexXss;
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
      as_scan_location_xss: cdktf.stringToTerraform(this._asScanLocationXss),
      as_value_expr_xss: cdktf.stringToTerraform(this._asValueExprXss),
      as_value_type_xss: cdktf.stringToTerraform(this._asValueTypeXss),
      comment: cdktf.stringToTerraform(this._comment),
      crosssitescripting: cdktf.stringToTerraform(this._crosssitescripting),
      formactionurl_xss: cdktf.stringToTerraform(this._formactionurlXss),
      id: cdktf.stringToTerraform(this._id),
      isautodeployed: cdktf.stringToTerraform(this._isautodeployed),
      isregex_xss: cdktf.stringToTerraform(this._isregexXss),
      isvalueregex_xss: cdktf.stringToTerraform(this._isvalueregexXss),
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
      as_scan_location_xss: {
        value: cdktf.stringToHclTerraform(this._asScanLocationXss),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_value_expr_xss: {
        value: cdktf.stringToHclTerraform(this._asValueExprXss),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_value_type_xss: {
        value: cdktf.stringToHclTerraform(this._asValueTypeXss),
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
      crosssitescripting: {
        value: cdktf.stringToHclTerraform(this._crosssitescripting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      formactionurl_xss: {
        value: cdktf.stringToHclTerraform(this._formactionurlXss),
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
      isregex_xss: {
        value: cdktf.stringToHclTerraform(this._isregexXss),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isvalueregex_xss: {
        value: cdktf.stringToHclTerraform(this._isvalueregexXss),
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
