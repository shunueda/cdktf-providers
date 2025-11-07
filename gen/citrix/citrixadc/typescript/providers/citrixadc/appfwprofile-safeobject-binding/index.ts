// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_safeobject_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppfwprofileSafeobjectBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_safeobject_binding#action AppfwprofileSafeobjectBinding#action}
  */
  readonly action?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_safeobject_binding#alertonly AppfwprofileSafeobjectBinding#alertonly}
  */
  readonly alertonly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_safeobject_binding#as_expression AppfwprofileSafeobjectBinding#as_expression}
  */
  readonly asExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_safeobject_binding#comment AppfwprofileSafeobjectBinding#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_safeobject_binding#id AppfwprofileSafeobjectBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_safeobject_binding#isautodeployed AppfwprofileSafeobjectBinding#isautodeployed}
  */
  readonly isautodeployed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_safeobject_binding#maxmatchlength AppfwprofileSafeobjectBinding#maxmatchlength}
  */
  readonly maxmatchlength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_safeobject_binding#name AppfwprofileSafeobjectBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_safeobject_binding#resourceid AppfwprofileSafeobjectBinding#resourceid}
  */
  readonly resourceid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_safeobject_binding#ruletype AppfwprofileSafeobjectBinding#ruletype}
  */
  readonly ruletype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_safeobject_binding#safeobject AppfwprofileSafeobjectBinding#safeobject}
  */
  readonly safeobject: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_safeobject_binding#state AppfwprofileSafeobjectBinding#state}
  */
  readonly state?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_safeobject_binding citrixadc_appfwprofile_safeobject_binding}
*/
export class AppfwprofileSafeobjectBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_appfwprofile_safeobject_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppfwprofileSafeobjectBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppfwprofileSafeobjectBinding to import
  * @param importFromId The id of the existing AppfwprofileSafeobjectBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_safeobject_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppfwprofileSafeobjectBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_appfwprofile_safeobject_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_safeobject_binding citrixadc_appfwprofile_safeobject_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppfwprofileSafeobjectBindingConfig
  */
  public constructor(scope: Construct, id: string, config: AppfwprofileSafeobjectBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_appfwprofile_safeobject_binding',
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
    this._action = config.action;
    this._alertonly = config.alertonly;
    this._asExpression = config.asExpression;
    this._comment = config.comment;
    this._id = config.id;
    this._isautodeployed = config.isautodeployed;
    this._maxmatchlength = config.maxmatchlength;
    this._name = config.name;
    this._resourceid = config.resourceid;
    this._ruletype = config.ruletype;
    this._safeobject = config.safeobject;
    this._state = config.state;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string[]; 
  public get action() {
    return this.getListAttribute('action');
  }
  public set action(value: string[]) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

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

  // as_expression - computed: true, optional: true, required: false
  private _asExpression?: string; 
  public get asExpression() {
    return this.getStringAttribute('as_expression');
  }
  public set asExpression(value: string) {
    this._asExpression = value;
  }
  public resetAsExpression() {
    this._asExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asExpressionInput() {
    return this._asExpression;
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

  // maxmatchlength - computed: true, optional: true, required: false
  private _maxmatchlength?: number; 
  public get maxmatchlength() {
    return this.getNumberAttribute('maxmatchlength');
  }
  public set maxmatchlength(value: number) {
    this._maxmatchlength = value;
  }
  public resetMaxmatchlength() {
    this._maxmatchlength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxmatchlengthInput() {
    return this._maxmatchlength;
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

  // safeobject - computed: false, optional: false, required: true
  private _safeobject?: string; 
  public get safeobject() {
    return this.getStringAttribute('safeobject');
  }
  public set safeobject(value: string) {
    this._safeobject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get safeobjectInput() {
    return this._safeobject;
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
      action: cdktf.listMapper(cdktf.stringToTerraform, false)(this._action),
      alertonly: cdktf.stringToTerraform(this._alertonly),
      as_expression: cdktf.stringToTerraform(this._asExpression),
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      isautodeployed: cdktf.stringToTerraform(this._isautodeployed),
      maxmatchlength: cdktf.numberToTerraform(this._maxmatchlength),
      name: cdktf.stringToTerraform(this._name),
      resourceid: cdktf.stringToTerraform(this._resourceid),
      ruletype: cdktf.stringToTerraform(this._ruletype),
      safeobject: cdktf.stringToTerraform(this._safeobject),
      state: cdktf.stringToTerraform(this._state),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._action),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      alertonly: {
        value: cdktf.stringToHclTerraform(this._alertonly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_expression: {
        value: cdktf.stringToHclTerraform(this._asExpression),
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
      maxmatchlength: {
        value: cdktf.numberToHclTerraform(this._maxmatchlength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      safeobject: {
        value: cdktf.stringToHclTerraform(this._safeobject),
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
