// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_fileuploadtype_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppfwprofileFileuploadtypeBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_fileuploadtype_binding#alertonly AppfwprofileFileuploadtypeBinding#alertonly}
  */
  readonly alertonly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_fileuploadtype_binding#as_fileuploadtypes_url AppfwprofileFileuploadtypeBinding#as_fileuploadtypes_url}
  */
  readonly asFileuploadtypesUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_fileuploadtype_binding#comment AppfwprofileFileuploadtypeBinding#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_fileuploadtype_binding#filetype AppfwprofileFileuploadtypeBinding#filetype}
  */
  readonly filetype: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_fileuploadtype_binding#fileuploadtype AppfwprofileFileuploadtypeBinding#fileuploadtype}
  */
  readonly fileuploadtype: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_fileuploadtype_binding#id AppfwprofileFileuploadtypeBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_fileuploadtype_binding#isautodeployed AppfwprofileFileuploadtypeBinding#isautodeployed}
  */
  readonly isautodeployed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_fileuploadtype_binding#isnameregex AppfwprofileFileuploadtypeBinding#isnameregex}
  */
  readonly isnameregex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_fileuploadtype_binding#isregexfileuploadtypesurl AppfwprofileFileuploadtypeBinding#isregexfileuploadtypesurl}
  */
  readonly isregexfileuploadtypesurl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_fileuploadtype_binding#name AppfwprofileFileuploadtypeBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_fileuploadtype_binding#resourceid AppfwprofileFileuploadtypeBinding#resourceid}
  */
  readonly resourceid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_fileuploadtype_binding#ruletype AppfwprofileFileuploadtypeBinding#ruletype}
  */
  readonly ruletype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_fileuploadtype_binding#state AppfwprofileFileuploadtypeBinding#state}
  */
  readonly state?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_fileuploadtype_binding citrixadc_appfwprofile_fileuploadtype_binding}
*/
export class AppfwprofileFileuploadtypeBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_appfwprofile_fileuploadtype_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppfwprofileFileuploadtypeBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppfwprofileFileuploadtypeBinding to import
  * @param importFromId The id of the existing AppfwprofileFileuploadtypeBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_fileuploadtype_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppfwprofileFileuploadtypeBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_appfwprofile_fileuploadtype_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_fileuploadtype_binding citrixadc_appfwprofile_fileuploadtype_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppfwprofileFileuploadtypeBindingConfig
  */
  public constructor(scope: Construct, id: string, config: AppfwprofileFileuploadtypeBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_appfwprofile_fileuploadtype_binding',
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
    this._asFileuploadtypesUrl = config.asFileuploadtypesUrl;
    this._comment = config.comment;
    this._filetype = config.filetype;
    this._fileuploadtype = config.fileuploadtype;
    this._id = config.id;
    this._isautodeployed = config.isautodeployed;
    this._isnameregex = config.isnameregex;
    this._isregexfileuploadtypesurl = config.isregexfileuploadtypesurl;
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

  // as_fileuploadtypes_url - computed: false, optional: false, required: true
  private _asFileuploadtypesUrl?: string; 
  public get asFileuploadtypesUrl() {
    return this.getStringAttribute('as_fileuploadtypes_url');
  }
  public set asFileuploadtypesUrl(value: string) {
    this._asFileuploadtypesUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asFileuploadtypesUrlInput() {
    return this._asFileuploadtypesUrl;
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

  // filetype - computed: false, optional: false, required: true
  private _filetype?: string[]; 
  public get filetype() {
    return this.getListAttribute('filetype');
  }
  public set filetype(value: string[]) {
    this._filetype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filetypeInput() {
    return this._filetype;
  }

  // fileuploadtype - computed: false, optional: false, required: true
  private _fileuploadtype?: string; 
  public get fileuploadtype() {
    return this.getStringAttribute('fileuploadtype');
  }
  public set fileuploadtype(value: string) {
    this._fileuploadtype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileuploadtypeInput() {
    return this._fileuploadtype;
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

  // isnameregex - computed: true, optional: true, required: false
  private _isnameregex?: string; 
  public get isnameregex() {
    return this.getStringAttribute('isnameregex');
  }
  public set isnameregex(value: string) {
    this._isnameregex = value;
  }
  public resetIsnameregex() {
    this._isnameregex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isnameregexInput() {
    return this._isnameregex;
  }

  // isregexfileuploadtypesurl - computed: true, optional: true, required: false
  private _isregexfileuploadtypesurl?: string; 
  public get isregexfileuploadtypesurl() {
    return this.getStringAttribute('isregexfileuploadtypesurl');
  }
  public set isregexfileuploadtypesurl(value: string) {
    this._isregexfileuploadtypesurl = value;
  }
  public resetIsregexfileuploadtypesurl() {
    this._isregexfileuploadtypesurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isregexfileuploadtypesurlInput() {
    return this._isregexfileuploadtypesurl;
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
      as_fileuploadtypes_url: cdktf.stringToTerraform(this._asFileuploadtypesUrl),
      comment: cdktf.stringToTerraform(this._comment),
      filetype: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filetype),
      fileuploadtype: cdktf.stringToTerraform(this._fileuploadtype),
      id: cdktf.stringToTerraform(this._id),
      isautodeployed: cdktf.stringToTerraform(this._isautodeployed),
      isnameregex: cdktf.stringToTerraform(this._isnameregex),
      isregexfileuploadtypesurl: cdktf.stringToTerraform(this._isregexfileuploadtypesurl),
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
      as_fileuploadtypes_url: {
        value: cdktf.stringToHclTerraform(this._asFileuploadtypesUrl),
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
      filetype: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filetype),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      fileuploadtype: {
        value: cdktf.stringToHclTerraform(this._fileuploadtype),
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
      isnameregex: {
        value: cdktf.stringToHclTerraform(this._isnameregex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isregexfileuploadtypesurl: {
        value: cdktf.stringToHclTerraform(this._isregexfileuploadtypesurl),
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
