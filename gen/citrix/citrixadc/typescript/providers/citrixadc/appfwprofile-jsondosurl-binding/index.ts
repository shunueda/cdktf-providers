// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_jsondosurl_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppfwprofileJsondosurlBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_jsondosurl_binding#alertonly AppfwprofileJsondosurlBinding#alertonly}
  */
  readonly alertonly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_jsondosurl_binding#comment AppfwprofileJsondosurlBinding#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_jsondosurl_binding#id AppfwprofileJsondosurlBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_jsondosurl_binding#isautodeployed AppfwprofileJsondosurlBinding#isautodeployed}
  */
  readonly isautodeployed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_jsondosurl_binding#jsondosurl AppfwprofileJsondosurlBinding#jsondosurl}
  */
  readonly jsondosurl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_jsondosurl_binding#jsonmaxarraylength AppfwprofileJsondosurlBinding#jsonmaxarraylength}
  */
  readonly jsonmaxarraylength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_jsondosurl_binding#jsonmaxarraylengthcheck AppfwprofileJsondosurlBinding#jsonmaxarraylengthcheck}
  */
  readonly jsonmaxarraylengthcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_jsondosurl_binding#jsonmaxcontainerdepth AppfwprofileJsondosurlBinding#jsonmaxcontainerdepth}
  */
  readonly jsonmaxcontainerdepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_jsondosurl_binding#jsonmaxcontainerdepthcheck AppfwprofileJsondosurlBinding#jsonmaxcontainerdepthcheck}
  */
  readonly jsonmaxcontainerdepthcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_jsondosurl_binding#jsonmaxdocumentlength AppfwprofileJsondosurlBinding#jsonmaxdocumentlength}
  */
  readonly jsonmaxdocumentlength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_jsondosurl_binding#jsonmaxdocumentlengthcheck AppfwprofileJsondosurlBinding#jsonmaxdocumentlengthcheck}
  */
  readonly jsonmaxdocumentlengthcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_jsondosurl_binding#jsonmaxobjectkeycount AppfwprofileJsondosurlBinding#jsonmaxobjectkeycount}
  */
  readonly jsonmaxobjectkeycount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_jsondosurl_binding#jsonmaxobjectkeycountcheck AppfwprofileJsondosurlBinding#jsonmaxobjectkeycountcheck}
  */
  readonly jsonmaxobjectkeycountcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_jsondosurl_binding#jsonmaxobjectkeylength AppfwprofileJsondosurlBinding#jsonmaxobjectkeylength}
  */
  readonly jsonmaxobjectkeylength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_jsondosurl_binding#jsonmaxobjectkeylengthcheck AppfwprofileJsondosurlBinding#jsonmaxobjectkeylengthcheck}
  */
  readonly jsonmaxobjectkeylengthcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_jsondosurl_binding#jsonmaxstringlength AppfwprofileJsondosurlBinding#jsonmaxstringlength}
  */
  readonly jsonmaxstringlength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_jsondosurl_binding#jsonmaxstringlengthcheck AppfwprofileJsondosurlBinding#jsonmaxstringlengthcheck}
  */
  readonly jsonmaxstringlengthcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_jsondosurl_binding#name AppfwprofileJsondosurlBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_jsondosurl_binding#resourceid AppfwprofileJsondosurlBinding#resourceid}
  */
  readonly resourceid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_jsondosurl_binding#ruletype AppfwprofileJsondosurlBinding#ruletype}
  */
  readonly ruletype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_jsondosurl_binding#state AppfwprofileJsondosurlBinding#state}
  */
  readonly state?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_jsondosurl_binding citrixadc_appfwprofile_jsondosurl_binding}
*/
export class AppfwprofileJsondosurlBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_appfwprofile_jsondosurl_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppfwprofileJsondosurlBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppfwprofileJsondosurlBinding to import
  * @param importFromId The id of the existing AppfwprofileJsondosurlBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_jsondosurl_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppfwprofileJsondosurlBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_appfwprofile_jsondosurl_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/appfwprofile_jsondosurl_binding citrixadc_appfwprofile_jsondosurl_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppfwprofileJsondosurlBindingConfig
  */
  public constructor(scope: Construct, id: string, config: AppfwprofileJsondosurlBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_appfwprofile_jsondosurl_binding',
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
    this._comment = config.comment;
    this._id = config.id;
    this._isautodeployed = config.isautodeployed;
    this._jsondosurl = config.jsondosurl;
    this._jsonmaxarraylength = config.jsonmaxarraylength;
    this._jsonmaxarraylengthcheck = config.jsonmaxarraylengthcheck;
    this._jsonmaxcontainerdepth = config.jsonmaxcontainerdepth;
    this._jsonmaxcontainerdepthcheck = config.jsonmaxcontainerdepthcheck;
    this._jsonmaxdocumentlength = config.jsonmaxdocumentlength;
    this._jsonmaxdocumentlengthcheck = config.jsonmaxdocumentlengthcheck;
    this._jsonmaxobjectkeycount = config.jsonmaxobjectkeycount;
    this._jsonmaxobjectkeycountcheck = config.jsonmaxobjectkeycountcheck;
    this._jsonmaxobjectkeylength = config.jsonmaxobjectkeylength;
    this._jsonmaxobjectkeylengthcheck = config.jsonmaxobjectkeylengthcheck;
    this._jsonmaxstringlength = config.jsonmaxstringlength;
    this._jsonmaxstringlengthcheck = config.jsonmaxstringlengthcheck;
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

  // jsondosurl - computed: false, optional: false, required: true
  private _jsondosurl?: string; 
  public get jsondosurl() {
    return this.getStringAttribute('jsondosurl');
  }
  public set jsondosurl(value: string) {
    this._jsondosurl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsondosurlInput() {
    return this._jsondosurl;
  }

  // jsonmaxarraylength - computed: true, optional: true, required: false
  private _jsonmaxarraylength?: number; 
  public get jsonmaxarraylength() {
    return this.getNumberAttribute('jsonmaxarraylength');
  }
  public set jsonmaxarraylength(value: number) {
    this._jsonmaxarraylength = value;
  }
  public resetJsonmaxarraylength() {
    this._jsonmaxarraylength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonmaxarraylengthInput() {
    return this._jsonmaxarraylength;
  }

  // jsonmaxarraylengthcheck - computed: true, optional: true, required: false
  private _jsonmaxarraylengthcheck?: string; 
  public get jsonmaxarraylengthcheck() {
    return this.getStringAttribute('jsonmaxarraylengthcheck');
  }
  public set jsonmaxarraylengthcheck(value: string) {
    this._jsonmaxarraylengthcheck = value;
  }
  public resetJsonmaxarraylengthcheck() {
    this._jsonmaxarraylengthcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonmaxarraylengthcheckInput() {
    return this._jsonmaxarraylengthcheck;
  }

  // jsonmaxcontainerdepth - computed: true, optional: true, required: false
  private _jsonmaxcontainerdepth?: number; 
  public get jsonmaxcontainerdepth() {
    return this.getNumberAttribute('jsonmaxcontainerdepth');
  }
  public set jsonmaxcontainerdepth(value: number) {
    this._jsonmaxcontainerdepth = value;
  }
  public resetJsonmaxcontainerdepth() {
    this._jsonmaxcontainerdepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonmaxcontainerdepthInput() {
    return this._jsonmaxcontainerdepth;
  }

  // jsonmaxcontainerdepthcheck - computed: true, optional: true, required: false
  private _jsonmaxcontainerdepthcheck?: string; 
  public get jsonmaxcontainerdepthcheck() {
    return this.getStringAttribute('jsonmaxcontainerdepthcheck');
  }
  public set jsonmaxcontainerdepthcheck(value: string) {
    this._jsonmaxcontainerdepthcheck = value;
  }
  public resetJsonmaxcontainerdepthcheck() {
    this._jsonmaxcontainerdepthcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonmaxcontainerdepthcheckInput() {
    return this._jsonmaxcontainerdepthcheck;
  }

  // jsonmaxdocumentlength - computed: true, optional: true, required: false
  private _jsonmaxdocumentlength?: number; 
  public get jsonmaxdocumentlength() {
    return this.getNumberAttribute('jsonmaxdocumentlength');
  }
  public set jsonmaxdocumentlength(value: number) {
    this._jsonmaxdocumentlength = value;
  }
  public resetJsonmaxdocumentlength() {
    this._jsonmaxdocumentlength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonmaxdocumentlengthInput() {
    return this._jsonmaxdocumentlength;
  }

  // jsonmaxdocumentlengthcheck - computed: true, optional: true, required: false
  private _jsonmaxdocumentlengthcheck?: string; 
  public get jsonmaxdocumentlengthcheck() {
    return this.getStringAttribute('jsonmaxdocumentlengthcheck');
  }
  public set jsonmaxdocumentlengthcheck(value: string) {
    this._jsonmaxdocumentlengthcheck = value;
  }
  public resetJsonmaxdocumentlengthcheck() {
    this._jsonmaxdocumentlengthcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonmaxdocumentlengthcheckInput() {
    return this._jsonmaxdocumentlengthcheck;
  }

  // jsonmaxobjectkeycount - computed: true, optional: true, required: false
  private _jsonmaxobjectkeycount?: number; 
  public get jsonmaxobjectkeycount() {
    return this.getNumberAttribute('jsonmaxobjectkeycount');
  }
  public set jsonmaxobjectkeycount(value: number) {
    this._jsonmaxobjectkeycount = value;
  }
  public resetJsonmaxobjectkeycount() {
    this._jsonmaxobjectkeycount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonmaxobjectkeycountInput() {
    return this._jsonmaxobjectkeycount;
  }

  // jsonmaxobjectkeycountcheck - computed: true, optional: true, required: false
  private _jsonmaxobjectkeycountcheck?: string; 
  public get jsonmaxobjectkeycountcheck() {
    return this.getStringAttribute('jsonmaxobjectkeycountcheck');
  }
  public set jsonmaxobjectkeycountcheck(value: string) {
    this._jsonmaxobjectkeycountcheck = value;
  }
  public resetJsonmaxobjectkeycountcheck() {
    this._jsonmaxobjectkeycountcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonmaxobjectkeycountcheckInput() {
    return this._jsonmaxobjectkeycountcheck;
  }

  // jsonmaxobjectkeylength - computed: true, optional: true, required: false
  private _jsonmaxobjectkeylength?: number; 
  public get jsonmaxobjectkeylength() {
    return this.getNumberAttribute('jsonmaxobjectkeylength');
  }
  public set jsonmaxobjectkeylength(value: number) {
    this._jsonmaxobjectkeylength = value;
  }
  public resetJsonmaxobjectkeylength() {
    this._jsonmaxobjectkeylength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonmaxobjectkeylengthInput() {
    return this._jsonmaxobjectkeylength;
  }

  // jsonmaxobjectkeylengthcheck - computed: true, optional: true, required: false
  private _jsonmaxobjectkeylengthcheck?: string; 
  public get jsonmaxobjectkeylengthcheck() {
    return this.getStringAttribute('jsonmaxobjectkeylengthcheck');
  }
  public set jsonmaxobjectkeylengthcheck(value: string) {
    this._jsonmaxobjectkeylengthcheck = value;
  }
  public resetJsonmaxobjectkeylengthcheck() {
    this._jsonmaxobjectkeylengthcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonmaxobjectkeylengthcheckInput() {
    return this._jsonmaxobjectkeylengthcheck;
  }

  // jsonmaxstringlength - computed: true, optional: true, required: false
  private _jsonmaxstringlength?: number; 
  public get jsonmaxstringlength() {
    return this.getNumberAttribute('jsonmaxstringlength');
  }
  public set jsonmaxstringlength(value: number) {
    this._jsonmaxstringlength = value;
  }
  public resetJsonmaxstringlength() {
    this._jsonmaxstringlength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonmaxstringlengthInput() {
    return this._jsonmaxstringlength;
  }

  // jsonmaxstringlengthcheck - computed: true, optional: true, required: false
  private _jsonmaxstringlengthcheck?: string; 
  public get jsonmaxstringlengthcheck() {
    return this.getStringAttribute('jsonmaxstringlengthcheck');
  }
  public set jsonmaxstringlengthcheck(value: string) {
    this._jsonmaxstringlengthcheck = value;
  }
  public resetJsonmaxstringlengthcheck() {
    this._jsonmaxstringlengthcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonmaxstringlengthcheckInput() {
    return this._jsonmaxstringlengthcheck;
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
      id: cdktf.stringToTerraform(this._id),
      isautodeployed: cdktf.stringToTerraform(this._isautodeployed),
      jsondosurl: cdktf.stringToTerraform(this._jsondosurl),
      jsonmaxarraylength: cdktf.numberToTerraform(this._jsonmaxarraylength),
      jsonmaxarraylengthcheck: cdktf.stringToTerraform(this._jsonmaxarraylengthcheck),
      jsonmaxcontainerdepth: cdktf.numberToTerraform(this._jsonmaxcontainerdepth),
      jsonmaxcontainerdepthcheck: cdktf.stringToTerraform(this._jsonmaxcontainerdepthcheck),
      jsonmaxdocumentlength: cdktf.numberToTerraform(this._jsonmaxdocumentlength),
      jsonmaxdocumentlengthcheck: cdktf.stringToTerraform(this._jsonmaxdocumentlengthcheck),
      jsonmaxobjectkeycount: cdktf.numberToTerraform(this._jsonmaxobjectkeycount),
      jsonmaxobjectkeycountcheck: cdktf.stringToTerraform(this._jsonmaxobjectkeycountcheck),
      jsonmaxobjectkeylength: cdktf.numberToTerraform(this._jsonmaxobjectkeylength),
      jsonmaxobjectkeylengthcheck: cdktf.stringToTerraform(this._jsonmaxobjectkeylengthcheck),
      jsonmaxstringlength: cdktf.numberToTerraform(this._jsonmaxstringlength),
      jsonmaxstringlengthcheck: cdktf.stringToTerraform(this._jsonmaxstringlengthcheck),
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
      jsondosurl: {
        value: cdktf.stringToHclTerraform(this._jsondosurl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jsonmaxarraylength: {
        value: cdktf.numberToHclTerraform(this._jsonmaxarraylength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jsonmaxarraylengthcheck: {
        value: cdktf.stringToHclTerraform(this._jsonmaxarraylengthcheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jsonmaxcontainerdepth: {
        value: cdktf.numberToHclTerraform(this._jsonmaxcontainerdepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jsonmaxcontainerdepthcheck: {
        value: cdktf.stringToHclTerraform(this._jsonmaxcontainerdepthcheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jsonmaxdocumentlength: {
        value: cdktf.numberToHclTerraform(this._jsonmaxdocumentlength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jsonmaxdocumentlengthcheck: {
        value: cdktf.stringToHclTerraform(this._jsonmaxdocumentlengthcheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jsonmaxobjectkeycount: {
        value: cdktf.numberToHclTerraform(this._jsonmaxobjectkeycount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jsonmaxobjectkeycountcheck: {
        value: cdktf.stringToHclTerraform(this._jsonmaxobjectkeycountcheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jsonmaxobjectkeylength: {
        value: cdktf.numberToHclTerraform(this._jsonmaxobjectkeylength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jsonmaxobjectkeylengthcheck: {
        value: cdktf.stringToHclTerraform(this._jsonmaxobjectkeylengthcheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jsonmaxstringlength: {
        value: cdktf.numberToHclTerraform(this._jsonmaxstringlength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jsonmaxstringlengthcheck: {
        value: cdktf.stringToHclTerraform(this._jsonmaxstringlengthcheck),
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
