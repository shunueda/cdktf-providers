// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_cmdinjection_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppfwprofileCmdinjectionBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_cmdinjection_binding#alertonly AppfwprofileCmdinjectionBinding#alertonly}
  */
  readonly alertonly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_cmdinjection_binding#as_scan_location_cmd AppfwprofileCmdinjectionBinding#as_scan_location_cmd}
  */
  readonly asScanLocationCmd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_cmdinjection_binding#as_value_expr_cmd AppfwprofileCmdinjectionBinding#as_value_expr_cmd}
  */
  readonly asValueExprCmd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_cmdinjection_binding#as_value_type_cmd AppfwprofileCmdinjectionBinding#as_value_type_cmd}
  */
  readonly asValueTypeCmd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_cmdinjection_binding#cmdinjection AppfwprofileCmdinjectionBinding#cmdinjection}
  */
  readonly cmdinjection: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_cmdinjection_binding#comment AppfwprofileCmdinjectionBinding#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_cmdinjection_binding#formactionurl_cmd AppfwprofileCmdinjectionBinding#formactionurl_cmd}
  */
  readonly formactionurlCmd: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_cmdinjection_binding#id AppfwprofileCmdinjectionBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_cmdinjection_binding#isautodeployed AppfwprofileCmdinjectionBinding#isautodeployed}
  */
  readonly isautodeployed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_cmdinjection_binding#isregex_cmd AppfwprofileCmdinjectionBinding#isregex_cmd}
  */
  readonly isregexCmd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_cmdinjection_binding#isvalueregex_cmd AppfwprofileCmdinjectionBinding#isvalueregex_cmd}
  */
  readonly isvalueregexCmd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_cmdinjection_binding#name AppfwprofileCmdinjectionBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_cmdinjection_binding#resourceid AppfwprofileCmdinjectionBinding#resourceid}
  */
  readonly resourceid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_cmdinjection_binding#ruletype AppfwprofileCmdinjectionBinding#ruletype}
  */
  readonly ruletype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_cmdinjection_binding#state AppfwprofileCmdinjectionBinding#state}
  */
  readonly state?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_cmdinjection_binding citrixadc_appfwprofile_cmdinjection_binding}
*/
export class AppfwprofileCmdinjectionBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_appfwprofile_cmdinjection_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppfwprofileCmdinjectionBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppfwprofileCmdinjectionBinding to import
  * @param importFromId The id of the existing AppfwprofileCmdinjectionBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_cmdinjection_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppfwprofileCmdinjectionBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_appfwprofile_cmdinjection_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_cmdinjection_binding citrixadc_appfwprofile_cmdinjection_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppfwprofileCmdinjectionBindingConfig
  */
  public constructor(scope: Construct, id: string, config: AppfwprofileCmdinjectionBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_appfwprofile_cmdinjection_binding',
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
    this._asScanLocationCmd = config.asScanLocationCmd;
    this._asValueExprCmd = config.asValueExprCmd;
    this._asValueTypeCmd = config.asValueTypeCmd;
    this._cmdinjection = config.cmdinjection;
    this._comment = config.comment;
    this._formactionurlCmd = config.formactionurlCmd;
    this._id = config.id;
    this._isautodeployed = config.isautodeployed;
    this._isregexCmd = config.isregexCmd;
    this._isvalueregexCmd = config.isvalueregexCmd;
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

  // as_scan_location_cmd - computed: false, optional: true, required: false
  private _asScanLocationCmd?: string; 
  public get asScanLocationCmd() {
    return this.getStringAttribute('as_scan_location_cmd');
  }
  public set asScanLocationCmd(value: string) {
    this._asScanLocationCmd = value;
  }
  public resetAsScanLocationCmd() {
    this._asScanLocationCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asScanLocationCmdInput() {
    return this._asScanLocationCmd;
  }

  // as_value_expr_cmd - computed: true, optional: true, required: false
  private _asValueExprCmd?: string; 
  public get asValueExprCmd() {
    return this.getStringAttribute('as_value_expr_cmd');
  }
  public set asValueExprCmd(value: string) {
    this._asValueExprCmd = value;
  }
  public resetAsValueExprCmd() {
    this._asValueExprCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asValueExprCmdInput() {
    return this._asValueExprCmd;
  }

  // as_value_type_cmd - computed: true, optional: true, required: false
  private _asValueTypeCmd?: string; 
  public get asValueTypeCmd() {
    return this.getStringAttribute('as_value_type_cmd');
  }
  public set asValueTypeCmd(value: string) {
    this._asValueTypeCmd = value;
  }
  public resetAsValueTypeCmd() {
    this._asValueTypeCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asValueTypeCmdInput() {
    return this._asValueTypeCmd;
  }

  // cmdinjection - computed: false, optional: false, required: true
  private _cmdinjection?: string; 
  public get cmdinjection() {
    return this.getStringAttribute('cmdinjection');
  }
  public set cmdinjection(value: string) {
    this._cmdinjection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdinjectionInput() {
    return this._cmdinjection;
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

  // formactionurl_cmd - computed: false, optional: false, required: true
  private _formactionurlCmd?: string; 
  public get formactionurlCmd() {
    return this.getStringAttribute('formactionurl_cmd');
  }
  public set formactionurlCmd(value: string) {
    this._formactionurlCmd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formactionurlCmdInput() {
    return this._formactionurlCmd;
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

  // isregex_cmd - computed: true, optional: true, required: false
  private _isregexCmd?: string; 
  public get isregexCmd() {
    return this.getStringAttribute('isregex_cmd');
  }
  public set isregexCmd(value: string) {
    this._isregexCmd = value;
  }
  public resetIsregexCmd() {
    this._isregexCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isregexCmdInput() {
    return this._isregexCmd;
  }

  // isvalueregex_cmd - computed: true, optional: true, required: false
  private _isvalueregexCmd?: string; 
  public get isvalueregexCmd() {
    return this.getStringAttribute('isvalueregex_cmd');
  }
  public set isvalueregexCmd(value: string) {
    this._isvalueregexCmd = value;
  }
  public resetIsvalueregexCmd() {
    this._isvalueregexCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isvalueregexCmdInput() {
    return this._isvalueregexCmd;
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
      as_scan_location_cmd: cdktf.stringToTerraform(this._asScanLocationCmd),
      as_value_expr_cmd: cdktf.stringToTerraform(this._asValueExprCmd),
      as_value_type_cmd: cdktf.stringToTerraform(this._asValueTypeCmd),
      cmdinjection: cdktf.stringToTerraform(this._cmdinjection),
      comment: cdktf.stringToTerraform(this._comment),
      formactionurl_cmd: cdktf.stringToTerraform(this._formactionurlCmd),
      id: cdktf.stringToTerraform(this._id),
      isautodeployed: cdktf.stringToTerraform(this._isautodeployed),
      isregex_cmd: cdktf.stringToTerraform(this._isregexCmd),
      isvalueregex_cmd: cdktf.stringToTerraform(this._isvalueregexCmd),
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
      as_scan_location_cmd: {
        value: cdktf.stringToHclTerraform(this._asScanLocationCmd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_value_expr_cmd: {
        value: cdktf.stringToHclTerraform(this._asValueExprCmd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_value_type_cmd: {
        value: cdktf.stringToHclTerraform(this._asValueTypeCmd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cmdinjection: {
        value: cdktf.stringToHclTerraform(this._cmdinjection),
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
      formactionurl_cmd: {
        value: cdktf.stringToHclTerraform(this._formactionurlCmd),
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
      isregex_cmd: {
        value: cdktf.stringToHclTerraform(this._isregexCmd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isvalueregex_cmd: {
        value: cdktf.stringToHclTerraform(this._isvalueregexCmd),
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
