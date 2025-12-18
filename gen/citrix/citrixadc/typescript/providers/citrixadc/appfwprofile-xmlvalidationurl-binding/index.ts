// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_xmlvalidationurl_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppfwprofileXmlvalidationurlBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_xmlvalidationurl_binding#alertonly AppfwprofileXmlvalidationurlBinding#alertonly}
  */
  readonly alertonly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_xmlvalidationurl_binding#comment AppfwprofileXmlvalidationurlBinding#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_xmlvalidationurl_binding#id AppfwprofileXmlvalidationurlBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_xmlvalidationurl_binding#isautodeployed AppfwprofileXmlvalidationurlBinding#isautodeployed}
  */
  readonly isautodeployed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_xmlvalidationurl_binding#name AppfwprofileXmlvalidationurlBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_xmlvalidationurl_binding#resourceid AppfwprofileXmlvalidationurlBinding#resourceid}
  */
  readonly resourceid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_xmlvalidationurl_binding#ruletype AppfwprofileXmlvalidationurlBinding#ruletype}
  */
  readonly ruletype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_xmlvalidationurl_binding#state AppfwprofileXmlvalidationurlBinding#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_xmlvalidationurl_binding#xmladditionalsoapheaders AppfwprofileXmlvalidationurlBinding#xmladditionalsoapheaders}
  */
  readonly xmladditionalsoapheaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_xmlvalidationurl_binding#xmlendpointcheck AppfwprofileXmlvalidationurlBinding#xmlendpointcheck}
  */
  readonly xmlendpointcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_xmlvalidationurl_binding#xmlrequestschema AppfwprofileXmlvalidationurlBinding#xmlrequestschema}
  */
  readonly xmlrequestschema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_xmlvalidationurl_binding#xmlresponseschema AppfwprofileXmlvalidationurlBinding#xmlresponseschema}
  */
  readonly xmlresponseschema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_xmlvalidationurl_binding#xmlvalidateresponse AppfwprofileXmlvalidationurlBinding#xmlvalidateresponse}
  */
  readonly xmlvalidateresponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_xmlvalidationurl_binding#xmlvalidatesoapenvelope AppfwprofileXmlvalidationurlBinding#xmlvalidatesoapenvelope}
  */
  readonly xmlvalidatesoapenvelope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_xmlvalidationurl_binding#xmlvalidationurl AppfwprofileXmlvalidationurlBinding#xmlvalidationurl}
  */
  readonly xmlvalidationurl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_xmlvalidationurl_binding#xmlwsdl AppfwprofileXmlvalidationurlBinding#xmlwsdl}
  */
  readonly xmlwsdl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_xmlvalidationurl_binding citrixadc_appfwprofile_xmlvalidationurl_binding}
*/
export class AppfwprofileXmlvalidationurlBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_appfwprofile_xmlvalidationurl_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppfwprofileXmlvalidationurlBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppfwprofileXmlvalidationurlBinding to import
  * @param importFromId The id of the existing AppfwprofileXmlvalidationurlBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_xmlvalidationurl_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppfwprofileXmlvalidationurlBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_appfwprofile_xmlvalidationurl_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appfwprofile_xmlvalidationurl_binding citrixadc_appfwprofile_xmlvalidationurl_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppfwprofileXmlvalidationurlBindingConfig
  */
  public constructor(scope: Construct, id: string, config: AppfwprofileXmlvalidationurlBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_appfwprofile_xmlvalidationurl_binding',
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
    this._id = config.id;
    this._isautodeployed = config.isautodeployed;
    this._name = config.name;
    this._resourceid = config.resourceid;
    this._ruletype = config.ruletype;
    this._state = config.state;
    this._xmladditionalsoapheaders = config.xmladditionalsoapheaders;
    this._xmlendpointcheck = config.xmlendpointcheck;
    this._xmlrequestschema = config.xmlrequestschema;
    this._xmlresponseschema = config.xmlresponseschema;
    this._xmlvalidateresponse = config.xmlvalidateresponse;
    this._xmlvalidatesoapenvelope = config.xmlvalidatesoapenvelope;
    this._xmlvalidationurl = config.xmlvalidationurl;
    this._xmlwsdl = config.xmlwsdl;
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

  // xmladditionalsoapheaders - computed: true, optional: true, required: false
  private _xmladditionalsoapheaders?: string; 
  public get xmladditionalsoapheaders() {
    return this.getStringAttribute('xmladditionalsoapheaders');
  }
  public set xmladditionalsoapheaders(value: string) {
    this._xmladditionalsoapheaders = value;
  }
  public resetXmladditionalsoapheaders() {
    this._xmladditionalsoapheaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmladditionalsoapheadersInput() {
    return this._xmladditionalsoapheaders;
  }

  // xmlendpointcheck - computed: true, optional: true, required: false
  private _xmlendpointcheck?: string; 
  public get xmlendpointcheck() {
    return this.getStringAttribute('xmlendpointcheck');
  }
  public set xmlendpointcheck(value: string) {
    this._xmlendpointcheck = value;
  }
  public resetXmlendpointcheck() {
    this._xmlendpointcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlendpointcheckInput() {
    return this._xmlendpointcheck;
  }

  // xmlrequestschema - computed: true, optional: true, required: false
  private _xmlrequestschema?: string; 
  public get xmlrequestschema() {
    return this.getStringAttribute('xmlrequestschema');
  }
  public set xmlrequestschema(value: string) {
    this._xmlrequestschema = value;
  }
  public resetXmlrequestschema() {
    this._xmlrequestschema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlrequestschemaInput() {
    return this._xmlrequestschema;
  }

  // xmlresponseschema - computed: true, optional: true, required: false
  private _xmlresponseschema?: string; 
  public get xmlresponseschema() {
    return this.getStringAttribute('xmlresponseschema');
  }
  public set xmlresponseschema(value: string) {
    this._xmlresponseschema = value;
  }
  public resetXmlresponseschema() {
    this._xmlresponseschema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlresponseschemaInput() {
    return this._xmlresponseschema;
  }

  // xmlvalidateresponse - computed: true, optional: true, required: false
  private _xmlvalidateresponse?: string; 
  public get xmlvalidateresponse() {
    return this.getStringAttribute('xmlvalidateresponse');
  }
  public set xmlvalidateresponse(value: string) {
    this._xmlvalidateresponse = value;
  }
  public resetXmlvalidateresponse() {
    this._xmlvalidateresponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlvalidateresponseInput() {
    return this._xmlvalidateresponse;
  }

  // xmlvalidatesoapenvelope - computed: true, optional: true, required: false
  private _xmlvalidatesoapenvelope?: string; 
  public get xmlvalidatesoapenvelope() {
    return this.getStringAttribute('xmlvalidatesoapenvelope');
  }
  public set xmlvalidatesoapenvelope(value: string) {
    this._xmlvalidatesoapenvelope = value;
  }
  public resetXmlvalidatesoapenvelope() {
    this._xmlvalidatesoapenvelope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlvalidatesoapenvelopeInput() {
    return this._xmlvalidatesoapenvelope;
  }

  // xmlvalidationurl - computed: false, optional: false, required: true
  private _xmlvalidationurl?: string; 
  public get xmlvalidationurl() {
    return this.getStringAttribute('xmlvalidationurl');
  }
  public set xmlvalidationurl(value: string) {
    this._xmlvalidationurl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlvalidationurlInput() {
    return this._xmlvalidationurl;
  }

  // xmlwsdl - computed: true, optional: true, required: false
  private _xmlwsdl?: string; 
  public get xmlwsdl() {
    return this.getStringAttribute('xmlwsdl');
  }
  public set xmlwsdl(value: string) {
    this._xmlwsdl = value;
  }
  public resetXmlwsdl() {
    this._xmlwsdl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlwsdlInput() {
    return this._xmlwsdl;
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
      xmladditionalsoapheaders: cdktf.stringToTerraform(this._xmladditionalsoapheaders),
      xmlendpointcheck: cdktf.stringToTerraform(this._xmlendpointcheck),
      xmlrequestschema: cdktf.stringToTerraform(this._xmlrequestschema),
      xmlresponseschema: cdktf.stringToTerraform(this._xmlresponseschema),
      xmlvalidateresponse: cdktf.stringToTerraform(this._xmlvalidateresponse),
      xmlvalidatesoapenvelope: cdktf.stringToTerraform(this._xmlvalidatesoapenvelope),
      xmlvalidationurl: cdktf.stringToTerraform(this._xmlvalidationurl),
      xmlwsdl: cdktf.stringToTerraform(this._xmlwsdl),
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
      xmladditionalsoapheaders: {
        value: cdktf.stringToHclTerraform(this._xmladditionalsoapheaders),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlendpointcheck: {
        value: cdktf.stringToHclTerraform(this._xmlendpointcheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlrequestschema: {
        value: cdktf.stringToHclTerraform(this._xmlrequestschema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlresponseschema: {
        value: cdktf.stringToHclTerraform(this._xmlresponseschema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlvalidateresponse: {
        value: cdktf.stringToHclTerraform(this._xmlvalidateresponse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlvalidatesoapenvelope: {
        value: cdktf.stringToHclTerraform(this._xmlvalidatesoapenvelope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlvalidationurl: {
        value: cdktf.stringToHclTerraform(this._xmlvalidationurl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlwsdl: {
        value: cdktf.stringToHclTerraform(this._xmlwsdl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
