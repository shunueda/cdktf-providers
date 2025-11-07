// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_jsoncmdurl_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppfwprofileJsoncmdurlBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_jsoncmdurl_binding#alertonly AppfwprofileJsoncmdurlBinding#alertonly}
  */
  readonly alertonly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_jsoncmdurl_binding#as_value_expr_json_cmd AppfwprofileJsoncmdurlBinding#as_value_expr_json_cmd}
  */
  readonly asValueExprJsonCmd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_jsoncmdurl_binding#as_value_type_json_cmd AppfwprofileJsoncmdurlBinding#as_value_type_json_cmd}
  */
  readonly asValueTypeJsonCmd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_jsoncmdurl_binding#comment AppfwprofileJsoncmdurlBinding#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_jsoncmdurl_binding#id AppfwprofileJsoncmdurlBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_jsoncmdurl_binding#isautodeployed AppfwprofileJsoncmdurlBinding#isautodeployed}
  */
  readonly isautodeployed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_jsoncmdurl_binding#iskeyregex_json_cmd AppfwprofileJsoncmdurlBinding#iskeyregex_json_cmd}
  */
  readonly iskeyregexJsonCmd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_jsoncmdurl_binding#isvalueregex_json_cmd AppfwprofileJsoncmdurlBinding#isvalueregex_json_cmd}
  */
  readonly isvalueregexJsonCmd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_jsoncmdurl_binding#jsoncmdurl AppfwprofileJsoncmdurlBinding#jsoncmdurl}
  */
  readonly jsoncmdurl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_jsoncmdurl_binding#keyname_json_cmd AppfwprofileJsoncmdurlBinding#keyname_json_cmd}
  */
  readonly keynameJsonCmd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_jsoncmdurl_binding#name AppfwprofileJsoncmdurlBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_jsoncmdurl_binding#resourceid AppfwprofileJsoncmdurlBinding#resourceid}
  */
  readonly resourceid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_jsoncmdurl_binding#ruletype AppfwprofileJsoncmdurlBinding#ruletype}
  */
  readonly ruletype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_jsoncmdurl_binding#state AppfwprofileJsoncmdurlBinding#state}
  */
  readonly state?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_jsoncmdurl_binding citrixadc_appfwprofile_jsoncmdurl_binding}
*/
export class AppfwprofileJsoncmdurlBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_appfwprofile_jsoncmdurl_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppfwprofileJsoncmdurlBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppfwprofileJsoncmdurlBinding to import
  * @param importFromId The id of the existing AppfwprofileJsoncmdurlBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_jsoncmdurl_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppfwprofileJsoncmdurlBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_appfwprofile_jsoncmdurl_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_jsoncmdurl_binding citrixadc_appfwprofile_jsoncmdurl_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppfwprofileJsoncmdurlBindingConfig
  */
  public constructor(scope: Construct, id: string, config: AppfwprofileJsoncmdurlBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_appfwprofile_jsoncmdurl_binding',
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
    this._alertonly = config.alertonly;
    this._asValueExprJsonCmd = config.asValueExprJsonCmd;
    this._asValueTypeJsonCmd = config.asValueTypeJsonCmd;
    this._comment = config.comment;
    this._id = config.id;
    this._isautodeployed = config.isautodeployed;
    this._iskeyregexJsonCmd = config.iskeyregexJsonCmd;
    this._isvalueregexJsonCmd = config.isvalueregexJsonCmd;
    this._jsoncmdurl = config.jsoncmdurl;
    this._keynameJsonCmd = config.keynameJsonCmd;
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

  // as_value_expr_json_cmd - computed: true, optional: true, required: false
  private _asValueExprJsonCmd?: string; 
  public get asValueExprJsonCmd() {
    return this.getStringAttribute('as_value_expr_json_cmd');
  }
  public set asValueExprJsonCmd(value: string) {
    this._asValueExprJsonCmd = value;
  }
  public resetAsValueExprJsonCmd() {
    this._asValueExprJsonCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asValueExprJsonCmdInput() {
    return this._asValueExprJsonCmd;
  }

  // as_value_type_json_cmd - computed: true, optional: true, required: false
  private _asValueTypeJsonCmd?: string; 
  public get asValueTypeJsonCmd() {
    return this.getStringAttribute('as_value_type_json_cmd');
  }
  public set asValueTypeJsonCmd(value: string) {
    this._asValueTypeJsonCmd = value;
  }
  public resetAsValueTypeJsonCmd() {
    this._asValueTypeJsonCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asValueTypeJsonCmdInput() {
    return this._asValueTypeJsonCmd;
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

  // iskeyregex_json_cmd - computed: true, optional: true, required: false
  private _iskeyregexJsonCmd?: string; 
  public get iskeyregexJsonCmd() {
    return this.getStringAttribute('iskeyregex_json_cmd');
  }
  public set iskeyregexJsonCmd(value: string) {
    this._iskeyregexJsonCmd = value;
  }
  public resetIskeyregexJsonCmd() {
    this._iskeyregexJsonCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iskeyregexJsonCmdInput() {
    return this._iskeyregexJsonCmd;
  }

  // isvalueregex_json_cmd - computed: true, optional: true, required: false
  private _isvalueregexJsonCmd?: string; 
  public get isvalueregexJsonCmd() {
    return this.getStringAttribute('isvalueregex_json_cmd');
  }
  public set isvalueregexJsonCmd(value: string) {
    this._isvalueregexJsonCmd = value;
  }
  public resetIsvalueregexJsonCmd() {
    this._isvalueregexJsonCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isvalueregexJsonCmdInput() {
    return this._isvalueregexJsonCmd;
  }

  // jsoncmdurl - computed: false, optional: false, required: true
  private _jsoncmdurl?: string; 
  public get jsoncmdurl() {
    return this.getStringAttribute('jsoncmdurl');
  }
  public set jsoncmdurl(value: string) {
    this._jsoncmdurl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsoncmdurlInput() {
    return this._jsoncmdurl;
  }

  // keyname_json_cmd - computed: true, optional: true, required: false
  private _keynameJsonCmd?: string; 
  public get keynameJsonCmd() {
    return this.getStringAttribute('keyname_json_cmd');
  }
  public set keynameJsonCmd(value: string) {
    this._keynameJsonCmd = value;
  }
  public resetKeynameJsonCmd() {
    this._keynameJsonCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keynameJsonCmdInput() {
    return this._keynameJsonCmd;
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
      as_value_expr_json_cmd: cdktf.stringToTerraform(this._asValueExprJsonCmd),
      as_value_type_json_cmd: cdktf.stringToTerraform(this._asValueTypeJsonCmd),
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      isautodeployed: cdktf.stringToTerraform(this._isautodeployed),
      iskeyregex_json_cmd: cdktf.stringToTerraform(this._iskeyregexJsonCmd),
      isvalueregex_json_cmd: cdktf.stringToTerraform(this._isvalueregexJsonCmd),
      jsoncmdurl: cdktf.stringToTerraform(this._jsoncmdurl),
      keyname_json_cmd: cdktf.stringToTerraform(this._keynameJsonCmd),
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
      as_value_expr_json_cmd: {
        value: cdktf.stringToHclTerraform(this._asValueExprJsonCmd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_value_type_json_cmd: {
        value: cdktf.stringToHclTerraform(this._asValueTypeJsonCmd),
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
      iskeyregex_json_cmd: {
        value: cdktf.stringToHclTerraform(this._iskeyregexJsonCmd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isvalueregex_json_cmd: {
        value: cdktf.stringToHclTerraform(this._isvalueregexJsonCmd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jsoncmdurl: {
        value: cdktf.stringToHclTerraform(this._jsoncmdurl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keyname_json_cmd: {
        value: cdktf.stringToHclTerraform(this._keynameJsonCmd),
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
