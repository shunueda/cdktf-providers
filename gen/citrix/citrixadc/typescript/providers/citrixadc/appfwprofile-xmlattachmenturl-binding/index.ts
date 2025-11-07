// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlattachmenturl_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppfwprofileXmlattachmenturlBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlattachmenturl_binding#alertonly AppfwprofileXmlattachmenturlBinding#alertonly}
  */
  readonly alertonly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlattachmenturl_binding#comment AppfwprofileXmlattachmenturlBinding#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlattachmenturl_binding#id AppfwprofileXmlattachmenturlBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlattachmenturl_binding#isautodeployed AppfwprofileXmlattachmenturlBinding#isautodeployed}
  */
  readonly isautodeployed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlattachmenturl_binding#name AppfwprofileXmlattachmenturlBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlattachmenturl_binding#resourceid AppfwprofileXmlattachmenturlBinding#resourceid}
  */
  readonly resourceid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlattachmenturl_binding#ruletype AppfwprofileXmlattachmenturlBinding#ruletype}
  */
  readonly ruletype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlattachmenturl_binding#state AppfwprofileXmlattachmenturlBinding#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlattachmenturl_binding#xmlattachmentcontenttype AppfwprofileXmlattachmenturlBinding#xmlattachmentcontenttype}
  */
  readonly xmlattachmentcontenttype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlattachmenturl_binding#xmlattachmentcontenttypecheck AppfwprofileXmlattachmenturlBinding#xmlattachmentcontenttypecheck}
  */
  readonly xmlattachmentcontenttypecheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlattachmenturl_binding#xmlattachmenturl AppfwprofileXmlattachmenturlBinding#xmlattachmenturl}
  */
  readonly xmlattachmenturl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlattachmenturl_binding#xmlmaxattachmentsize AppfwprofileXmlattachmenturlBinding#xmlmaxattachmentsize}
  */
  readonly xmlmaxattachmentsize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlattachmenturl_binding#xmlmaxattachmentsizecheck AppfwprofileXmlattachmenturlBinding#xmlmaxattachmentsizecheck}
  */
  readonly xmlmaxattachmentsizecheck?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlattachmenturl_binding citrixadc_appfwprofile_xmlattachmenturl_binding}
*/
export class AppfwprofileXmlattachmenturlBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_appfwprofile_xmlattachmenturl_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppfwprofileXmlattachmenturlBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppfwprofileXmlattachmenturlBinding to import
  * @param importFromId The id of the existing AppfwprofileXmlattachmenturlBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlattachmenturl_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppfwprofileXmlattachmenturlBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_appfwprofile_xmlattachmenturl_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmlattachmenturl_binding citrixadc_appfwprofile_xmlattachmenturl_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppfwprofileXmlattachmenturlBindingConfig
  */
  public constructor(scope: Construct, id: string, config: AppfwprofileXmlattachmenturlBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_appfwprofile_xmlattachmenturl_binding',
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
    this._comment = config.comment;
    this._id = config.id;
    this._isautodeployed = config.isautodeployed;
    this._name = config.name;
    this._resourceid = config.resourceid;
    this._ruletype = config.ruletype;
    this._state = config.state;
    this._xmlattachmentcontenttype = config.xmlattachmentcontenttype;
    this._xmlattachmentcontenttypecheck = config.xmlattachmentcontenttypecheck;
    this._xmlattachmenturl = config.xmlattachmenturl;
    this._xmlmaxattachmentsize = config.xmlmaxattachmentsize;
    this._xmlmaxattachmentsizecheck = config.xmlmaxattachmentsizecheck;
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

  // xmlattachmentcontenttype - computed: true, optional: true, required: false
  private _xmlattachmentcontenttype?: string; 
  public get xmlattachmentcontenttype() {
    return this.getStringAttribute('xmlattachmentcontenttype');
  }
  public set xmlattachmentcontenttype(value: string) {
    this._xmlattachmentcontenttype = value;
  }
  public resetXmlattachmentcontenttype() {
    this._xmlattachmentcontenttype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlattachmentcontenttypeInput() {
    return this._xmlattachmentcontenttype;
  }

  // xmlattachmentcontenttypecheck - computed: true, optional: true, required: false
  private _xmlattachmentcontenttypecheck?: string; 
  public get xmlattachmentcontenttypecheck() {
    return this.getStringAttribute('xmlattachmentcontenttypecheck');
  }
  public set xmlattachmentcontenttypecheck(value: string) {
    this._xmlattachmentcontenttypecheck = value;
  }
  public resetXmlattachmentcontenttypecheck() {
    this._xmlattachmentcontenttypecheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlattachmentcontenttypecheckInput() {
    return this._xmlattachmentcontenttypecheck;
  }

  // xmlattachmenturl - computed: false, optional: false, required: true
  private _xmlattachmenturl?: string; 
  public get xmlattachmenturl() {
    return this.getStringAttribute('xmlattachmenturl');
  }
  public set xmlattachmenturl(value: string) {
    this._xmlattachmenturl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlattachmenturlInput() {
    return this._xmlattachmenturl;
  }

  // xmlmaxattachmentsize - computed: true, optional: true, required: false
  private _xmlmaxattachmentsize?: number; 
  public get xmlmaxattachmentsize() {
    return this.getNumberAttribute('xmlmaxattachmentsize');
  }
  public set xmlmaxattachmentsize(value: number) {
    this._xmlmaxattachmentsize = value;
  }
  public resetXmlmaxattachmentsize() {
    this._xmlmaxattachmentsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxattachmentsizeInput() {
    return this._xmlmaxattachmentsize;
  }

  // xmlmaxattachmentsizecheck - computed: true, optional: true, required: false
  private _xmlmaxattachmentsizecheck?: string; 
  public get xmlmaxattachmentsizecheck() {
    return this.getStringAttribute('xmlmaxattachmentsizecheck');
  }
  public set xmlmaxattachmentsizecheck(value: string) {
    this._xmlmaxattachmentsizecheck = value;
  }
  public resetXmlmaxattachmentsizecheck() {
    this._xmlmaxattachmentsizecheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxattachmentsizecheckInput() {
    return this._xmlmaxattachmentsizecheck;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alertonly: cdktf.stringToTerraform(this._alertonly),
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      isautodeployed: cdktf.stringToTerraform(this._isautodeployed),
      name: cdktf.stringToTerraform(this._name),
      resourceid: cdktf.stringToTerraform(this._resourceid),
      ruletype: cdktf.stringToTerraform(this._ruletype),
      state: cdktf.stringToTerraform(this._state),
      xmlattachmentcontenttype: cdktf.stringToTerraform(this._xmlattachmentcontenttype),
      xmlattachmentcontenttypecheck: cdktf.stringToTerraform(this._xmlattachmentcontenttypecheck),
      xmlattachmenturl: cdktf.stringToTerraform(this._xmlattachmenturl),
      xmlmaxattachmentsize: cdktf.numberToTerraform(this._xmlmaxattachmentsize),
      xmlmaxattachmentsizecheck: cdktf.stringToTerraform(this._xmlmaxattachmentsizecheck),
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
      xmlattachmentcontenttype: {
        value: cdktf.stringToHclTerraform(this._xmlattachmentcontenttype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlattachmentcontenttypecheck: {
        value: cdktf.stringToHclTerraform(this._xmlattachmentcontenttypecheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlattachmenturl: {
        value: cdktf.stringToHclTerraform(this._xmlattachmenturl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlmaxattachmentsize: {
        value: cdktf.numberToHclTerraform(this._xmlmaxattachmentsize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      xmlmaxattachmentsizecheck: {
        value: cdktf.stringToHclTerraform(this._xmlmaxattachmentsizecheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
