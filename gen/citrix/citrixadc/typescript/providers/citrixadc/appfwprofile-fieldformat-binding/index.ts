// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_fieldformat_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppfwprofileFieldformatBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_fieldformat_binding#alertonly AppfwprofileFieldformatBinding#alertonly}
  */
  readonly alertonly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_fieldformat_binding#comment AppfwprofileFieldformatBinding#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_fieldformat_binding#fieldformat AppfwprofileFieldformatBinding#fieldformat}
  */
  readonly fieldformat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_fieldformat_binding#fieldformatmaxlength AppfwprofileFieldformatBinding#fieldformatmaxlength}
  */
  readonly fieldformatmaxlength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_fieldformat_binding#fieldformatminlength AppfwprofileFieldformatBinding#fieldformatminlength}
  */
  readonly fieldformatminlength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_fieldformat_binding#fieldtype AppfwprofileFieldformatBinding#fieldtype}
  */
  readonly fieldtype: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_fieldformat_binding#formactionurl_ff AppfwprofileFieldformatBinding#formactionurl_ff}
  */
  readonly formactionurlFf: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_fieldformat_binding#id AppfwprofileFieldformatBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_fieldformat_binding#isautodeployed AppfwprofileFieldformatBinding#isautodeployed}
  */
  readonly isautodeployed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_fieldformat_binding#isregexff AppfwprofileFieldformatBinding#isregexff}
  */
  readonly isregexff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_fieldformat_binding#name AppfwprofileFieldformatBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_fieldformat_binding#resourceid AppfwprofileFieldformatBinding#resourceid}
  */
  readonly resourceid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_fieldformat_binding#ruletype AppfwprofileFieldformatBinding#ruletype}
  */
  readonly ruletype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_fieldformat_binding#state AppfwprofileFieldformatBinding#state}
  */
  readonly state?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_fieldformat_binding citrixadc_appfwprofile_fieldformat_binding}
*/
export class AppfwprofileFieldformatBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_appfwprofile_fieldformat_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppfwprofileFieldformatBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppfwprofileFieldformatBinding to import
  * @param importFromId The id of the existing AppfwprofileFieldformatBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_fieldformat_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppfwprofileFieldformatBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_appfwprofile_fieldformat_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_fieldformat_binding citrixadc_appfwprofile_fieldformat_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppfwprofileFieldformatBindingConfig
  */
  public constructor(scope: Construct, id: string, config: AppfwprofileFieldformatBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_appfwprofile_fieldformat_binding',
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
    this._comment = config.comment;
    this._fieldformat = config.fieldformat;
    this._fieldformatmaxlength = config.fieldformatmaxlength;
    this._fieldformatminlength = config.fieldformatminlength;
    this._fieldtype = config.fieldtype;
    this._formactionurlFf = config.formactionurlFf;
    this._id = config.id;
    this._isautodeployed = config.isautodeployed;
    this._isregexff = config.isregexff;
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

  // fieldformat - computed: false, optional: false, required: true
  private _fieldformat?: string; 
  public get fieldformat() {
    return this.getStringAttribute('fieldformat');
  }
  public set fieldformat(value: string) {
    this._fieldformat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldformatInput() {
    return this._fieldformat;
  }

  // fieldformatmaxlength - computed: true, optional: true, required: false
  private _fieldformatmaxlength?: number; 
  public get fieldformatmaxlength() {
    return this.getNumberAttribute('fieldformatmaxlength');
  }
  public set fieldformatmaxlength(value: number) {
    this._fieldformatmaxlength = value;
  }
  public resetFieldformatmaxlength() {
    this._fieldformatmaxlength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldformatmaxlengthInput() {
    return this._fieldformatmaxlength;
  }

  // fieldformatminlength - computed: true, optional: true, required: false
  private _fieldformatminlength?: number; 
  public get fieldformatminlength() {
    return this.getNumberAttribute('fieldformatminlength');
  }
  public set fieldformatminlength(value: number) {
    this._fieldformatminlength = value;
  }
  public resetFieldformatminlength() {
    this._fieldformatminlength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldformatminlengthInput() {
    return this._fieldformatminlength;
  }

  // fieldtype - computed: false, optional: false, required: true
  private _fieldtype?: string; 
  public get fieldtype() {
    return this.getStringAttribute('fieldtype');
  }
  public set fieldtype(value: string) {
    this._fieldtype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldtypeInput() {
    return this._fieldtype;
  }

  // formactionurl_ff - computed: false, optional: false, required: true
  private _formactionurlFf?: string; 
  public get formactionurlFf() {
    return this.getStringAttribute('formactionurl_ff');
  }
  public set formactionurlFf(value: string) {
    this._formactionurlFf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formactionurlFfInput() {
    return this._formactionurlFf;
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

  // isregexff - computed: true, optional: true, required: false
  private _isregexff?: string; 
  public get isregexff() {
    return this.getStringAttribute('isregexff');
  }
  public set isregexff(value: string) {
    this._isregexff = value;
  }
  public resetIsregexff() {
    this._isregexff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isregexffInput() {
    return this._isregexff;
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
      comment: cdktf.stringToTerraform(this._comment),
      fieldformat: cdktf.stringToTerraform(this._fieldformat),
      fieldformatmaxlength: cdktf.numberToTerraform(this._fieldformatmaxlength),
      fieldformatminlength: cdktf.numberToTerraform(this._fieldformatminlength),
      fieldtype: cdktf.stringToTerraform(this._fieldtype),
      formactionurl_ff: cdktf.stringToTerraform(this._formactionurlFf),
      id: cdktf.stringToTerraform(this._id),
      isautodeployed: cdktf.stringToTerraform(this._isautodeployed),
      isregexff: cdktf.stringToTerraform(this._isregexff),
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
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fieldformat: {
        value: cdktf.stringToHclTerraform(this._fieldformat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fieldformatmaxlength: {
        value: cdktf.numberToHclTerraform(this._fieldformatmaxlength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fieldformatminlength: {
        value: cdktf.numberToHclTerraform(this._fieldformatminlength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fieldtype: {
        value: cdktf.stringToHclTerraform(this._fieldtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      formactionurl_ff: {
        value: cdktf.stringToHclTerraform(this._formactionurlFf),
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
      isregexff: {
        value: cdktf.stringToHclTerraform(this._isregexff),
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
