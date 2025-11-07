// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppfwprofileXmldosurlBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#alertonly AppfwprofileXmldosurlBinding#alertonly}
  */
  readonly alertonly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#comment AppfwprofileXmldosurlBinding#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#id AppfwprofileXmldosurlBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#isautodeployed AppfwprofileXmldosurlBinding#isautodeployed}
  */
  readonly isautodeployed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#name AppfwprofileXmldosurlBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#resourceid AppfwprofileXmldosurlBinding#resourceid}
  */
  readonly resourceid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#ruletype AppfwprofileXmldosurlBinding#ruletype}
  */
  readonly ruletype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#state AppfwprofileXmldosurlBinding#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlblockdtd AppfwprofileXmldosurlBinding#xmlblockdtd}
  */
  readonly xmlblockdtd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlblockexternalentities AppfwprofileXmldosurlBinding#xmlblockexternalentities}
  */
  readonly xmlblockexternalentities?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlblockpi AppfwprofileXmldosurlBinding#xmlblockpi}
  */
  readonly xmlblockpi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmldosurl AppfwprofileXmldosurlBinding#xmldosurl}
  */
  readonly xmldosurl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlmaxattributenamelength AppfwprofileXmldosurlBinding#xmlmaxattributenamelength}
  */
  readonly xmlmaxattributenamelength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlmaxattributenamelengthcheck AppfwprofileXmldosurlBinding#xmlmaxattributenamelengthcheck}
  */
  readonly xmlmaxattributenamelengthcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlmaxattributes AppfwprofileXmldosurlBinding#xmlmaxattributes}
  */
  readonly xmlmaxattributes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlmaxattributescheck AppfwprofileXmldosurlBinding#xmlmaxattributescheck}
  */
  readonly xmlmaxattributescheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlmaxattributevaluelength AppfwprofileXmldosurlBinding#xmlmaxattributevaluelength}
  */
  readonly xmlmaxattributevaluelength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlmaxattributevaluelengthcheck AppfwprofileXmldosurlBinding#xmlmaxattributevaluelengthcheck}
  */
  readonly xmlmaxattributevaluelengthcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlmaxchardatalength AppfwprofileXmldosurlBinding#xmlmaxchardatalength}
  */
  readonly xmlmaxchardatalength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlmaxchardatalengthcheck AppfwprofileXmldosurlBinding#xmlmaxchardatalengthcheck}
  */
  readonly xmlmaxchardatalengthcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlmaxelementchildren AppfwprofileXmldosurlBinding#xmlmaxelementchildren}
  */
  readonly xmlmaxelementchildren?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlmaxelementchildrencheck AppfwprofileXmldosurlBinding#xmlmaxelementchildrencheck}
  */
  readonly xmlmaxelementchildrencheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlmaxelementdepth AppfwprofileXmldosurlBinding#xmlmaxelementdepth}
  */
  readonly xmlmaxelementdepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlmaxelementdepthcheck AppfwprofileXmldosurlBinding#xmlmaxelementdepthcheck}
  */
  readonly xmlmaxelementdepthcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlmaxelementnamelength AppfwprofileXmldosurlBinding#xmlmaxelementnamelength}
  */
  readonly xmlmaxelementnamelength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlmaxelementnamelengthcheck AppfwprofileXmldosurlBinding#xmlmaxelementnamelengthcheck}
  */
  readonly xmlmaxelementnamelengthcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlmaxelements AppfwprofileXmldosurlBinding#xmlmaxelements}
  */
  readonly xmlmaxelements?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlmaxelementscheck AppfwprofileXmldosurlBinding#xmlmaxelementscheck}
  */
  readonly xmlmaxelementscheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlmaxentityexpansiondepth AppfwprofileXmldosurlBinding#xmlmaxentityexpansiondepth}
  */
  readonly xmlmaxentityexpansiondepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlmaxentityexpansiondepthcheck AppfwprofileXmldosurlBinding#xmlmaxentityexpansiondepthcheck}
  */
  readonly xmlmaxentityexpansiondepthcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlmaxentityexpansions AppfwprofileXmldosurlBinding#xmlmaxentityexpansions}
  */
  readonly xmlmaxentityexpansions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlmaxentityexpansionscheck AppfwprofileXmldosurlBinding#xmlmaxentityexpansionscheck}
  */
  readonly xmlmaxentityexpansionscheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlmaxfilesize AppfwprofileXmldosurlBinding#xmlmaxfilesize}
  */
  readonly xmlmaxfilesize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlmaxfilesizecheck AppfwprofileXmldosurlBinding#xmlmaxfilesizecheck}
  */
  readonly xmlmaxfilesizecheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlmaxnamespaces AppfwprofileXmldosurlBinding#xmlmaxnamespaces}
  */
  readonly xmlmaxnamespaces?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlmaxnamespacescheck AppfwprofileXmldosurlBinding#xmlmaxnamespacescheck}
  */
  readonly xmlmaxnamespacescheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlmaxnamespaceurilength AppfwprofileXmldosurlBinding#xmlmaxnamespaceurilength}
  */
  readonly xmlmaxnamespaceurilength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlmaxnamespaceurilengthcheck AppfwprofileXmldosurlBinding#xmlmaxnamespaceurilengthcheck}
  */
  readonly xmlmaxnamespaceurilengthcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlmaxnodes AppfwprofileXmldosurlBinding#xmlmaxnodes}
  */
  readonly xmlmaxnodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlmaxnodescheck AppfwprofileXmldosurlBinding#xmlmaxnodescheck}
  */
  readonly xmlmaxnodescheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlmaxsoaparrayrank AppfwprofileXmldosurlBinding#xmlmaxsoaparrayrank}
  */
  readonly xmlmaxsoaparrayrank?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlmaxsoaparraysize AppfwprofileXmldosurlBinding#xmlmaxsoaparraysize}
  */
  readonly xmlmaxsoaparraysize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlminfilesize AppfwprofileXmldosurlBinding#xmlminfilesize}
  */
  readonly xmlminfilesize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlminfilesizecheck AppfwprofileXmldosurlBinding#xmlminfilesizecheck}
  */
  readonly xmlminfilesizecheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#xmlsoaparraycheck AppfwprofileXmldosurlBinding#xmlsoaparraycheck}
  */
  readonly xmlsoaparraycheck?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding citrixadc_appfwprofile_xmldosurl_binding}
*/
export class AppfwprofileXmldosurlBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_appfwprofile_xmldosurl_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppfwprofileXmldosurlBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppfwprofileXmldosurlBinding to import
  * @param importFromId The id of the existing AppfwprofileXmldosurlBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppfwprofileXmldosurlBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_appfwprofile_xmldosurl_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwprofile_xmldosurl_binding citrixadc_appfwprofile_xmldosurl_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppfwprofileXmldosurlBindingConfig
  */
  public constructor(scope: Construct, id: string, config: AppfwprofileXmldosurlBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_appfwprofile_xmldosurl_binding',
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
    this._xmlblockdtd = config.xmlblockdtd;
    this._xmlblockexternalentities = config.xmlblockexternalentities;
    this._xmlblockpi = config.xmlblockpi;
    this._xmldosurl = config.xmldosurl;
    this._xmlmaxattributenamelength = config.xmlmaxattributenamelength;
    this._xmlmaxattributenamelengthcheck = config.xmlmaxattributenamelengthcheck;
    this._xmlmaxattributes = config.xmlmaxattributes;
    this._xmlmaxattributescheck = config.xmlmaxattributescheck;
    this._xmlmaxattributevaluelength = config.xmlmaxattributevaluelength;
    this._xmlmaxattributevaluelengthcheck = config.xmlmaxattributevaluelengthcheck;
    this._xmlmaxchardatalength = config.xmlmaxchardatalength;
    this._xmlmaxchardatalengthcheck = config.xmlmaxchardatalengthcheck;
    this._xmlmaxelementchildren = config.xmlmaxelementchildren;
    this._xmlmaxelementchildrencheck = config.xmlmaxelementchildrencheck;
    this._xmlmaxelementdepth = config.xmlmaxelementdepth;
    this._xmlmaxelementdepthcheck = config.xmlmaxelementdepthcheck;
    this._xmlmaxelementnamelength = config.xmlmaxelementnamelength;
    this._xmlmaxelementnamelengthcheck = config.xmlmaxelementnamelengthcheck;
    this._xmlmaxelements = config.xmlmaxelements;
    this._xmlmaxelementscheck = config.xmlmaxelementscheck;
    this._xmlmaxentityexpansiondepth = config.xmlmaxentityexpansiondepth;
    this._xmlmaxentityexpansiondepthcheck = config.xmlmaxentityexpansiondepthcheck;
    this._xmlmaxentityexpansions = config.xmlmaxentityexpansions;
    this._xmlmaxentityexpansionscheck = config.xmlmaxentityexpansionscheck;
    this._xmlmaxfilesize = config.xmlmaxfilesize;
    this._xmlmaxfilesizecheck = config.xmlmaxfilesizecheck;
    this._xmlmaxnamespaces = config.xmlmaxnamespaces;
    this._xmlmaxnamespacescheck = config.xmlmaxnamespacescheck;
    this._xmlmaxnamespaceurilength = config.xmlmaxnamespaceurilength;
    this._xmlmaxnamespaceurilengthcheck = config.xmlmaxnamespaceurilengthcheck;
    this._xmlmaxnodes = config.xmlmaxnodes;
    this._xmlmaxnodescheck = config.xmlmaxnodescheck;
    this._xmlmaxsoaparrayrank = config.xmlmaxsoaparrayrank;
    this._xmlmaxsoaparraysize = config.xmlmaxsoaparraysize;
    this._xmlminfilesize = config.xmlminfilesize;
    this._xmlminfilesizecheck = config.xmlminfilesizecheck;
    this._xmlsoaparraycheck = config.xmlsoaparraycheck;
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

  // xmlblockdtd - computed: true, optional: true, required: false
  private _xmlblockdtd?: string; 
  public get xmlblockdtd() {
    return this.getStringAttribute('xmlblockdtd');
  }
  public set xmlblockdtd(value: string) {
    this._xmlblockdtd = value;
  }
  public resetXmlblockdtd() {
    this._xmlblockdtd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlblockdtdInput() {
    return this._xmlblockdtd;
  }

  // xmlblockexternalentities - computed: true, optional: true, required: false
  private _xmlblockexternalentities?: string; 
  public get xmlblockexternalentities() {
    return this.getStringAttribute('xmlblockexternalentities');
  }
  public set xmlblockexternalentities(value: string) {
    this._xmlblockexternalentities = value;
  }
  public resetXmlblockexternalentities() {
    this._xmlblockexternalentities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlblockexternalentitiesInput() {
    return this._xmlblockexternalentities;
  }

  // xmlblockpi - computed: true, optional: true, required: false
  private _xmlblockpi?: string; 
  public get xmlblockpi() {
    return this.getStringAttribute('xmlblockpi');
  }
  public set xmlblockpi(value: string) {
    this._xmlblockpi = value;
  }
  public resetXmlblockpi() {
    this._xmlblockpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlblockpiInput() {
    return this._xmlblockpi;
  }

  // xmldosurl - computed: false, optional: false, required: true
  private _xmldosurl?: string; 
  public get xmldosurl() {
    return this.getStringAttribute('xmldosurl');
  }
  public set xmldosurl(value: string) {
    this._xmldosurl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xmldosurlInput() {
    return this._xmldosurl;
  }

  // xmlmaxattributenamelength - computed: true, optional: true, required: false
  private _xmlmaxattributenamelength?: number; 
  public get xmlmaxattributenamelength() {
    return this.getNumberAttribute('xmlmaxattributenamelength');
  }
  public set xmlmaxattributenamelength(value: number) {
    this._xmlmaxattributenamelength = value;
  }
  public resetXmlmaxattributenamelength() {
    this._xmlmaxattributenamelength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxattributenamelengthInput() {
    return this._xmlmaxattributenamelength;
  }

  // xmlmaxattributenamelengthcheck - computed: true, optional: true, required: false
  private _xmlmaxattributenamelengthcheck?: string; 
  public get xmlmaxattributenamelengthcheck() {
    return this.getStringAttribute('xmlmaxattributenamelengthcheck');
  }
  public set xmlmaxattributenamelengthcheck(value: string) {
    this._xmlmaxattributenamelengthcheck = value;
  }
  public resetXmlmaxattributenamelengthcheck() {
    this._xmlmaxattributenamelengthcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxattributenamelengthcheckInput() {
    return this._xmlmaxattributenamelengthcheck;
  }

  // xmlmaxattributes - computed: true, optional: true, required: false
  private _xmlmaxattributes?: number; 
  public get xmlmaxattributes() {
    return this.getNumberAttribute('xmlmaxattributes');
  }
  public set xmlmaxattributes(value: number) {
    this._xmlmaxattributes = value;
  }
  public resetXmlmaxattributes() {
    this._xmlmaxattributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxattributesInput() {
    return this._xmlmaxattributes;
  }

  // xmlmaxattributescheck - computed: true, optional: true, required: false
  private _xmlmaxattributescheck?: string; 
  public get xmlmaxattributescheck() {
    return this.getStringAttribute('xmlmaxattributescheck');
  }
  public set xmlmaxattributescheck(value: string) {
    this._xmlmaxattributescheck = value;
  }
  public resetXmlmaxattributescheck() {
    this._xmlmaxattributescheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxattributescheckInput() {
    return this._xmlmaxattributescheck;
  }

  // xmlmaxattributevaluelength - computed: true, optional: true, required: false
  private _xmlmaxattributevaluelength?: number; 
  public get xmlmaxattributevaluelength() {
    return this.getNumberAttribute('xmlmaxattributevaluelength');
  }
  public set xmlmaxattributevaluelength(value: number) {
    this._xmlmaxattributevaluelength = value;
  }
  public resetXmlmaxattributevaluelength() {
    this._xmlmaxattributevaluelength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxattributevaluelengthInput() {
    return this._xmlmaxattributevaluelength;
  }

  // xmlmaxattributevaluelengthcheck - computed: true, optional: true, required: false
  private _xmlmaxattributevaluelengthcheck?: string; 
  public get xmlmaxattributevaluelengthcheck() {
    return this.getStringAttribute('xmlmaxattributevaluelengthcheck');
  }
  public set xmlmaxattributevaluelengthcheck(value: string) {
    this._xmlmaxattributevaluelengthcheck = value;
  }
  public resetXmlmaxattributevaluelengthcheck() {
    this._xmlmaxattributevaluelengthcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxattributevaluelengthcheckInput() {
    return this._xmlmaxattributevaluelengthcheck;
  }

  // xmlmaxchardatalength - computed: true, optional: true, required: false
  private _xmlmaxchardatalength?: number; 
  public get xmlmaxchardatalength() {
    return this.getNumberAttribute('xmlmaxchardatalength');
  }
  public set xmlmaxchardatalength(value: number) {
    this._xmlmaxchardatalength = value;
  }
  public resetXmlmaxchardatalength() {
    this._xmlmaxchardatalength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxchardatalengthInput() {
    return this._xmlmaxchardatalength;
  }

  // xmlmaxchardatalengthcheck - computed: true, optional: true, required: false
  private _xmlmaxchardatalengthcheck?: string; 
  public get xmlmaxchardatalengthcheck() {
    return this.getStringAttribute('xmlmaxchardatalengthcheck');
  }
  public set xmlmaxchardatalengthcheck(value: string) {
    this._xmlmaxchardatalengthcheck = value;
  }
  public resetXmlmaxchardatalengthcheck() {
    this._xmlmaxchardatalengthcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxchardatalengthcheckInput() {
    return this._xmlmaxchardatalengthcheck;
  }

  // xmlmaxelementchildren - computed: true, optional: true, required: false
  private _xmlmaxelementchildren?: number; 
  public get xmlmaxelementchildren() {
    return this.getNumberAttribute('xmlmaxelementchildren');
  }
  public set xmlmaxelementchildren(value: number) {
    this._xmlmaxelementchildren = value;
  }
  public resetXmlmaxelementchildren() {
    this._xmlmaxelementchildren = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxelementchildrenInput() {
    return this._xmlmaxelementchildren;
  }

  // xmlmaxelementchildrencheck - computed: true, optional: true, required: false
  private _xmlmaxelementchildrencheck?: string; 
  public get xmlmaxelementchildrencheck() {
    return this.getStringAttribute('xmlmaxelementchildrencheck');
  }
  public set xmlmaxelementchildrencheck(value: string) {
    this._xmlmaxelementchildrencheck = value;
  }
  public resetXmlmaxelementchildrencheck() {
    this._xmlmaxelementchildrencheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxelementchildrencheckInput() {
    return this._xmlmaxelementchildrencheck;
  }

  // xmlmaxelementdepth - computed: true, optional: true, required: false
  private _xmlmaxelementdepth?: number; 
  public get xmlmaxelementdepth() {
    return this.getNumberAttribute('xmlmaxelementdepth');
  }
  public set xmlmaxelementdepth(value: number) {
    this._xmlmaxelementdepth = value;
  }
  public resetXmlmaxelementdepth() {
    this._xmlmaxelementdepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxelementdepthInput() {
    return this._xmlmaxelementdepth;
  }

  // xmlmaxelementdepthcheck - computed: true, optional: true, required: false
  private _xmlmaxelementdepthcheck?: string; 
  public get xmlmaxelementdepthcheck() {
    return this.getStringAttribute('xmlmaxelementdepthcheck');
  }
  public set xmlmaxelementdepthcheck(value: string) {
    this._xmlmaxelementdepthcheck = value;
  }
  public resetXmlmaxelementdepthcheck() {
    this._xmlmaxelementdepthcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxelementdepthcheckInput() {
    return this._xmlmaxelementdepthcheck;
  }

  // xmlmaxelementnamelength - computed: true, optional: true, required: false
  private _xmlmaxelementnamelength?: number; 
  public get xmlmaxelementnamelength() {
    return this.getNumberAttribute('xmlmaxelementnamelength');
  }
  public set xmlmaxelementnamelength(value: number) {
    this._xmlmaxelementnamelength = value;
  }
  public resetXmlmaxelementnamelength() {
    this._xmlmaxelementnamelength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxelementnamelengthInput() {
    return this._xmlmaxelementnamelength;
  }

  // xmlmaxelementnamelengthcheck - computed: true, optional: true, required: false
  private _xmlmaxelementnamelengthcheck?: string; 
  public get xmlmaxelementnamelengthcheck() {
    return this.getStringAttribute('xmlmaxelementnamelengthcheck');
  }
  public set xmlmaxelementnamelengthcheck(value: string) {
    this._xmlmaxelementnamelengthcheck = value;
  }
  public resetXmlmaxelementnamelengthcheck() {
    this._xmlmaxelementnamelengthcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxelementnamelengthcheckInput() {
    return this._xmlmaxelementnamelengthcheck;
  }

  // xmlmaxelements - computed: true, optional: true, required: false
  private _xmlmaxelements?: number; 
  public get xmlmaxelements() {
    return this.getNumberAttribute('xmlmaxelements');
  }
  public set xmlmaxelements(value: number) {
    this._xmlmaxelements = value;
  }
  public resetXmlmaxelements() {
    this._xmlmaxelements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxelementsInput() {
    return this._xmlmaxelements;
  }

  // xmlmaxelementscheck - computed: true, optional: true, required: false
  private _xmlmaxelementscheck?: string; 
  public get xmlmaxelementscheck() {
    return this.getStringAttribute('xmlmaxelementscheck');
  }
  public set xmlmaxelementscheck(value: string) {
    this._xmlmaxelementscheck = value;
  }
  public resetXmlmaxelementscheck() {
    this._xmlmaxelementscheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxelementscheckInput() {
    return this._xmlmaxelementscheck;
  }

  // xmlmaxentityexpansiondepth - computed: true, optional: true, required: false
  private _xmlmaxentityexpansiondepth?: number; 
  public get xmlmaxentityexpansiondepth() {
    return this.getNumberAttribute('xmlmaxentityexpansiondepth');
  }
  public set xmlmaxentityexpansiondepth(value: number) {
    this._xmlmaxentityexpansiondepth = value;
  }
  public resetXmlmaxentityexpansiondepth() {
    this._xmlmaxentityexpansiondepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxentityexpansiondepthInput() {
    return this._xmlmaxentityexpansiondepth;
  }

  // xmlmaxentityexpansiondepthcheck - computed: true, optional: true, required: false
  private _xmlmaxentityexpansiondepthcheck?: string; 
  public get xmlmaxentityexpansiondepthcheck() {
    return this.getStringAttribute('xmlmaxentityexpansiondepthcheck');
  }
  public set xmlmaxentityexpansiondepthcheck(value: string) {
    this._xmlmaxentityexpansiondepthcheck = value;
  }
  public resetXmlmaxentityexpansiondepthcheck() {
    this._xmlmaxentityexpansiondepthcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxentityexpansiondepthcheckInput() {
    return this._xmlmaxentityexpansiondepthcheck;
  }

  // xmlmaxentityexpansions - computed: true, optional: true, required: false
  private _xmlmaxentityexpansions?: number; 
  public get xmlmaxentityexpansions() {
    return this.getNumberAttribute('xmlmaxentityexpansions');
  }
  public set xmlmaxentityexpansions(value: number) {
    this._xmlmaxentityexpansions = value;
  }
  public resetXmlmaxentityexpansions() {
    this._xmlmaxentityexpansions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxentityexpansionsInput() {
    return this._xmlmaxentityexpansions;
  }

  // xmlmaxentityexpansionscheck - computed: true, optional: true, required: false
  private _xmlmaxentityexpansionscheck?: string; 
  public get xmlmaxentityexpansionscheck() {
    return this.getStringAttribute('xmlmaxentityexpansionscheck');
  }
  public set xmlmaxentityexpansionscheck(value: string) {
    this._xmlmaxentityexpansionscheck = value;
  }
  public resetXmlmaxentityexpansionscheck() {
    this._xmlmaxentityexpansionscheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxentityexpansionscheckInput() {
    return this._xmlmaxentityexpansionscheck;
  }

  // xmlmaxfilesize - computed: true, optional: true, required: false
  private _xmlmaxfilesize?: number; 
  public get xmlmaxfilesize() {
    return this.getNumberAttribute('xmlmaxfilesize');
  }
  public set xmlmaxfilesize(value: number) {
    this._xmlmaxfilesize = value;
  }
  public resetXmlmaxfilesize() {
    this._xmlmaxfilesize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxfilesizeInput() {
    return this._xmlmaxfilesize;
  }

  // xmlmaxfilesizecheck - computed: true, optional: true, required: false
  private _xmlmaxfilesizecheck?: string; 
  public get xmlmaxfilesizecheck() {
    return this.getStringAttribute('xmlmaxfilesizecheck');
  }
  public set xmlmaxfilesizecheck(value: string) {
    this._xmlmaxfilesizecheck = value;
  }
  public resetXmlmaxfilesizecheck() {
    this._xmlmaxfilesizecheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxfilesizecheckInput() {
    return this._xmlmaxfilesizecheck;
  }

  // xmlmaxnamespaces - computed: true, optional: true, required: false
  private _xmlmaxnamespaces?: number; 
  public get xmlmaxnamespaces() {
    return this.getNumberAttribute('xmlmaxnamespaces');
  }
  public set xmlmaxnamespaces(value: number) {
    this._xmlmaxnamespaces = value;
  }
  public resetXmlmaxnamespaces() {
    this._xmlmaxnamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxnamespacesInput() {
    return this._xmlmaxnamespaces;
  }

  // xmlmaxnamespacescheck - computed: true, optional: true, required: false
  private _xmlmaxnamespacescheck?: string; 
  public get xmlmaxnamespacescheck() {
    return this.getStringAttribute('xmlmaxnamespacescheck');
  }
  public set xmlmaxnamespacescheck(value: string) {
    this._xmlmaxnamespacescheck = value;
  }
  public resetXmlmaxnamespacescheck() {
    this._xmlmaxnamespacescheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxnamespacescheckInput() {
    return this._xmlmaxnamespacescheck;
  }

  // xmlmaxnamespaceurilength - computed: true, optional: true, required: false
  private _xmlmaxnamespaceurilength?: number; 
  public get xmlmaxnamespaceurilength() {
    return this.getNumberAttribute('xmlmaxnamespaceurilength');
  }
  public set xmlmaxnamespaceurilength(value: number) {
    this._xmlmaxnamespaceurilength = value;
  }
  public resetXmlmaxnamespaceurilength() {
    this._xmlmaxnamespaceurilength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxnamespaceurilengthInput() {
    return this._xmlmaxnamespaceurilength;
  }

  // xmlmaxnamespaceurilengthcheck - computed: true, optional: true, required: false
  private _xmlmaxnamespaceurilengthcheck?: string; 
  public get xmlmaxnamespaceurilengthcheck() {
    return this.getStringAttribute('xmlmaxnamespaceurilengthcheck');
  }
  public set xmlmaxnamespaceurilengthcheck(value: string) {
    this._xmlmaxnamespaceurilengthcheck = value;
  }
  public resetXmlmaxnamespaceurilengthcheck() {
    this._xmlmaxnamespaceurilengthcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxnamespaceurilengthcheckInput() {
    return this._xmlmaxnamespaceurilengthcheck;
  }

  // xmlmaxnodes - computed: true, optional: true, required: false
  private _xmlmaxnodes?: number; 
  public get xmlmaxnodes() {
    return this.getNumberAttribute('xmlmaxnodes');
  }
  public set xmlmaxnodes(value: number) {
    this._xmlmaxnodes = value;
  }
  public resetXmlmaxnodes() {
    this._xmlmaxnodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxnodesInput() {
    return this._xmlmaxnodes;
  }

  // xmlmaxnodescheck - computed: true, optional: true, required: false
  private _xmlmaxnodescheck?: string; 
  public get xmlmaxnodescheck() {
    return this.getStringAttribute('xmlmaxnodescheck');
  }
  public set xmlmaxnodescheck(value: string) {
    this._xmlmaxnodescheck = value;
  }
  public resetXmlmaxnodescheck() {
    this._xmlmaxnodescheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxnodescheckInput() {
    return this._xmlmaxnodescheck;
  }

  // xmlmaxsoaparrayrank - computed: true, optional: true, required: false
  private _xmlmaxsoaparrayrank?: number; 
  public get xmlmaxsoaparrayrank() {
    return this.getNumberAttribute('xmlmaxsoaparrayrank');
  }
  public set xmlmaxsoaparrayrank(value: number) {
    this._xmlmaxsoaparrayrank = value;
  }
  public resetXmlmaxsoaparrayrank() {
    this._xmlmaxsoaparrayrank = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxsoaparrayrankInput() {
    return this._xmlmaxsoaparrayrank;
  }

  // xmlmaxsoaparraysize - computed: true, optional: true, required: false
  private _xmlmaxsoaparraysize?: number; 
  public get xmlmaxsoaparraysize() {
    return this.getNumberAttribute('xmlmaxsoaparraysize');
  }
  public set xmlmaxsoaparraysize(value: number) {
    this._xmlmaxsoaparraysize = value;
  }
  public resetXmlmaxsoaparraysize() {
    this._xmlmaxsoaparraysize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlmaxsoaparraysizeInput() {
    return this._xmlmaxsoaparraysize;
  }

  // xmlminfilesize - computed: true, optional: true, required: false
  private _xmlminfilesize?: number; 
  public get xmlminfilesize() {
    return this.getNumberAttribute('xmlminfilesize');
  }
  public set xmlminfilesize(value: number) {
    this._xmlminfilesize = value;
  }
  public resetXmlminfilesize() {
    this._xmlminfilesize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlminfilesizeInput() {
    return this._xmlminfilesize;
  }

  // xmlminfilesizecheck - computed: true, optional: true, required: false
  private _xmlminfilesizecheck?: string; 
  public get xmlminfilesizecheck() {
    return this.getStringAttribute('xmlminfilesizecheck');
  }
  public set xmlminfilesizecheck(value: string) {
    this._xmlminfilesizecheck = value;
  }
  public resetXmlminfilesizecheck() {
    this._xmlminfilesizecheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlminfilesizecheckInput() {
    return this._xmlminfilesizecheck;
  }

  // xmlsoaparraycheck - computed: true, optional: true, required: false
  private _xmlsoaparraycheck?: string; 
  public get xmlsoaparraycheck() {
    return this.getStringAttribute('xmlsoaparraycheck');
  }
  public set xmlsoaparraycheck(value: string) {
    this._xmlsoaparraycheck = value;
  }
  public resetXmlsoaparraycheck() {
    this._xmlsoaparraycheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlsoaparraycheckInput() {
    return this._xmlsoaparraycheck;
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
      xmlblockdtd: cdktf.stringToTerraform(this._xmlblockdtd),
      xmlblockexternalentities: cdktf.stringToTerraform(this._xmlblockexternalentities),
      xmlblockpi: cdktf.stringToTerraform(this._xmlblockpi),
      xmldosurl: cdktf.stringToTerraform(this._xmldosurl),
      xmlmaxattributenamelength: cdktf.numberToTerraform(this._xmlmaxattributenamelength),
      xmlmaxattributenamelengthcheck: cdktf.stringToTerraform(this._xmlmaxattributenamelengthcheck),
      xmlmaxattributes: cdktf.numberToTerraform(this._xmlmaxattributes),
      xmlmaxattributescheck: cdktf.stringToTerraform(this._xmlmaxattributescheck),
      xmlmaxattributevaluelength: cdktf.numberToTerraform(this._xmlmaxattributevaluelength),
      xmlmaxattributevaluelengthcheck: cdktf.stringToTerraform(this._xmlmaxattributevaluelengthcheck),
      xmlmaxchardatalength: cdktf.numberToTerraform(this._xmlmaxchardatalength),
      xmlmaxchardatalengthcheck: cdktf.stringToTerraform(this._xmlmaxchardatalengthcheck),
      xmlmaxelementchildren: cdktf.numberToTerraform(this._xmlmaxelementchildren),
      xmlmaxelementchildrencheck: cdktf.stringToTerraform(this._xmlmaxelementchildrencheck),
      xmlmaxelementdepth: cdktf.numberToTerraform(this._xmlmaxelementdepth),
      xmlmaxelementdepthcheck: cdktf.stringToTerraform(this._xmlmaxelementdepthcheck),
      xmlmaxelementnamelength: cdktf.numberToTerraform(this._xmlmaxelementnamelength),
      xmlmaxelementnamelengthcheck: cdktf.stringToTerraform(this._xmlmaxelementnamelengthcheck),
      xmlmaxelements: cdktf.numberToTerraform(this._xmlmaxelements),
      xmlmaxelementscheck: cdktf.stringToTerraform(this._xmlmaxelementscheck),
      xmlmaxentityexpansiondepth: cdktf.numberToTerraform(this._xmlmaxentityexpansiondepth),
      xmlmaxentityexpansiondepthcheck: cdktf.stringToTerraform(this._xmlmaxentityexpansiondepthcheck),
      xmlmaxentityexpansions: cdktf.numberToTerraform(this._xmlmaxentityexpansions),
      xmlmaxentityexpansionscheck: cdktf.stringToTerraform(this._xmlmaxentityexpansionscheck),
      xmlmaxfilesize: cdktf.numberToTerraform(this._xmlmaxfilesize),
      xmlmaxfilesizecheck: cdktf.stringToTerraform(this._xmlmaxfilesizecheck),
      xmlmaxnamespaces: cdktf.numberToTerraform(this._xmlmaxnamespaces),
      xmlmaxnamespacescheck: cdktf.stringToTerraform(this._xmlmaxnamespacescheck),
      xmlmaxnamespaceurilength: cdktf.numberToTerraform(this._xmlmaxnamespaceurilength),
      xmlmaxnamespaceurilengthcheck: cdktf.stringToTerraform(this._xmlmaxnamespaceurilengthcheck),
      xmlmaxnodes: cdktf.numberToTerraform(this._xmlmaxnodes),
      xmlmaxnodescheck: cdktf.stringToTerraform(this._xmlmaxnodescheck),
      xmlmaxsoaparrayrank: cdktf.numberToTerraform(this._xmlmaxsoaparrayrank),
      xmlmaxsoaparraysize: cdktf.numberToTerraform(this._xmlmaxsoaparraysize),
      xmlminfilesize: cdktf.numberToTerraform(this._xmlminfilesize),
      xmlminfilesizecheck: cdktf.stringToTerraform(this._xmlminfilesizecheck),
      xmlsoaparraycheck: cdktf.stringToTerraform(this._xmlsoaparraycheck),
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
      xmlblockdtd: {
        value: cdktf.stringToHclTerraform(this._xmlblockdtd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlblockexternalentities: {
        value: cdktf.stringToHclTerraform(this._xmlblockexternalentities),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlblockpi: {
        value: cdktf.stringToHclTerraform(this._xmlblockpi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmldosurl: {
        value: cdktf.stringToHclTerraform(this._xmldosurl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlmaxattributenamelength: {
        value: cdktf.numberToHclTerraform(this._xmlmaxattributenamelength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      xmlmaxattributenamelengthcheck: {
        value: cdktf.stringToHclTerraform(this._xmlmaxattributenamelengthcheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlmaxattributes: {
        value: cdktf.numberToHclTerraform(this._xmlmaxattributes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      xmlmaxattributescheck: {
        value: cdktf.stringToHclTerraform(this._xmlmaxattributescheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlmaxattributevaluelength: {
        value: cdktf.numberToHclTerraform(this._xmlmaxattributevaluelength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      xmlmaxattributevaluelengthcheck: {
        value: cdktf.stringToHclTerraform(this._xmlmaxattributevaluelengthcheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlmaxchardatalength: {
        value: cdktf.numberToHclTerraform(this._xmlmaxchardatalength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      xmlmaxchardatalengthcheck: {
        value: cdktf.stringToHclTerraform(this._xmlmaxchardatalengthcheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlmaxelementchildren: {
        value: cdktf.numberToHclTerraform(this._xmlmaxelementchildren),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      xmlmaxelementchildrencheck: {
        value: cdktf.stringToHclTerraform(this._xmlmaxelementchildrencheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlmaxelementdepth: {
        value: cdktf.numberToHclTerraform(this._xmlmaxelementdepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      xmlmaxelementdepthcheck: {
        value: cdktf.stringToHclTerraform(this._xmlmaxelementdepthcheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlmaxelementnamelength: {
        value: cdktf.numberToHclTerraform(this._xmlmaxelementnamelength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      xmlmaxelementnamelengthcheck: {
        value: cdktf.stringToHclTerraform(this._xmlmaxelementnamelengthcheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlmaxelements: {
        value: cdktf.numberToHclTerraform(this._xmlmaxelements),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      xmlmaxelementscheck: {
        value: cdktf.stringToHclTerraform(this._xmlmaxelementscheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlmaxentityexpansiondepth: {
        value: cdktf.numberToHclTerraform(this._xmlmaxentityexpansiondepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      xmlmaxentityexpansiondepthcheck: {
        value: cdktf.stringToHclTerraform(this._xmlmaxentityexpansiondepthcheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlmaxentityexpansions: {
        value: cdktf.numberToHclTerraform(this._xmlmaxentityexpansions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      xmlmaxentityexpansionscheck: {
        value: cdktf.stringToHclTerraform(this._xmlmaxentityexpansionscheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlmaxfilesize: {
        value: cdktf.numberToHclTerraform(this._xmlmaxfilesize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      xmlmaxfilesizecheck: {
        value: cdktf.stringToHclTerraform(this._xmlmaxfilesizecheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlmaxnamespaces: {
        value: cdktf.numberToHclTerraform(this._xmlmaxnamespaces),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      xmlmaxnamespacescheck: {
        value: cdktf.stringToHclTerraform(this._xmlmaxnamespacescheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlmaxnamespaceurilength: {
        value: cdktf.numberToHclTerraform(this._xmlmaxnamespaceurilength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      xmlmaxnamespaceurilengthcheck: {
        value: cdktf.stringToHclTerraform(this._xmlmaxnamespaceurilengthcheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlmaxnodes: {
        value: cdktf.numberToHclTerraform(this._xmlmaxnodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      xmlmaxnodescheck: {
        value: cdktf.stringToHclTerraform(this._xmlmaxnodescheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlmaxsoaparrayrank: {
        value: cdktf.numberToHclTerraform(this._xmlmaxsoaparrayrank),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      xmlmaxsoaparraysize: {
        value: cdktf.numberToHclTerraform(this._xmlmaxsoaparraysize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      xmlminfilesize: {
        value: cdktf.numberToHclTerraform(this._xmlminfilesize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      xmlminfilesizecheck: {
        value: cdktf.stringToHclTerraform(this._xmlminfilesizecheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xmlsoaparraycheck: {
        value: cdktf.stringToHclTerraform(this._xmlsoaparraycheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
