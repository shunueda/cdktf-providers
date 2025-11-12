// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaaldapparams
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AaaldapparamsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaaldapparams#authtimeout Aaaldapparams#authtimeout}
  */
  readonly authtimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaaldapparams#defaultauthenticationgroup Aaaldapparams#defaultauthenticationgroup}
  */
  readonly defaultauthenticationgroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaaldapparams#groupattrname Aaaldapparams#groupattrname}
  */
  readonly groupattrname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaaldapparams#groupnameidentifier Aaaldapparams#groupnameidentifier}
  */
  readonly groupnameidentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaaldapparams#groupsearchattribute Aaaldapparams#groupsearchattribute}
  */
  readonly groupsearchattribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaaldapparams#groupsearchfilter Aaaldapparams#groupsearchfilter}
  */
  readonly groupsearchfilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaaldapparams#groupsearchsubattribute Aaaldapparams#groupsearchsubattribute}
  */
  readonly groupsearchsubattribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaaldapparams#id Aaaldapparams#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaaldapparams#ldapbase Aaaldapparams#ldapbase}
  */
  readonly ldapbase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaaldapparams#ldapbinddn Aaaldapparams#ldapbinddn}
  */
  readonly ldapbinddn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaaldapparams#ldapbinddnpassword Aaaldapparams#ldapbinddnpassword}
  */
  readonly ldapbinddnpassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaaldapparams#ldaploginname Aaaldapparams#ldaploginname}
  */
  readonly ldaploginname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaaldapparams#maxnestinglevel Aaaldapparams#maxnestinglevel}
  */
  readonly maxnestinglevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaaldapparams#nestedgroupextraction Aaaldapparams#nestedgroupextraction}
  */
  readonly nestedgroupextraction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaaldapparams#passwdchange Aaaldapparams#passwdchange}
  */
  readonly passwdchange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaaldapparams#searchfilter Aaaldapparams#searchfilter}
  */
  readonly searchfilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaaldapparams#sectype Aaaldapparams#sectype}
  */
  readonly sectype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaaldapparams#serverip Aaaldapparams#serverip}
  */
  readonly serverip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaaldapparams#serverport Aaaldapparams#serverport}
  */
  readonly serverport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaaldapparams#ssonameattribute Aaaldapparams#ssonameattribute}
  */
  readonly ssonameattribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaaldapparams#subattributename Aaaldapparams#subattributename}
  */
  readonly subattributename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaaldapparams#svrtype Aaaldapparams#svrtype}
  */
  readonly svrtype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaaldapparams citrixadc_aaaldapparams}
*/
export class Aaaldapparams extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_aaaldapparams";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Aaaldapparams resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Aaaldapparams to import
  * @param importFromId The id of the existing Aaaldapparams that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaaldapparams#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Aaaldapparams to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_aaaldapparams", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/aaaldapparams citrixadc_aaaldapparams} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AaaldapparamsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AaaldapparamsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_aaaldapparams',
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
    this._authtimeout = config.authtimeout;
    this._defaultauthenticationgroup = config.defaultauthenticationgroup;
    this._groupattrname = config.groupattrname;
    this._groupnameidentifier = config.groupnameidentifier;
    this._groupsearchattribute = config.groupsearchattribute;
    this._groupsearchfilter = config.groupsearchfilter;
    this._groupsearchsubattribute = config.groupsearchsubattribute;
    this._id = config.id;
    this._ldapbase = config.ldapbase;
    this._ldapbinddn = config.ldapbinddn;
    this._ldapbinddnpassword = config.ldapbinddnpassword;
    this._ldaploginname = config.ldaploginname;
    this._maxnestinglevel = config.maxnestinglevel;
    this._nestedgroupextraction = config.nestedgroupextraction;
    this._passwdchange = config.passwdchange;
    this._searchfilter = config.searchfilter;
    this._sectype = config.sectype;
    this._serverip = config.serverip;
    this._serverport = config.serverport;
    this._ssonameattribute = config.ssonameattribute;
    this._subattributename = config.subattributename;
    this._svrtype = config.svrtype;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authtimeout - computed: true, optional: true, required: false
  private _authtimeout?: number; 
  public get authtimeout() {
    return this.getNumberAttribute('authtimeout');
  }
  public set authtimeout(value: number) {
    this._authtimeout = value;
  }
  public resetAuthtimeout() {
    this._authtimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authtimeoutInput() {
    return this._authtimeout;
  }

  // defaultauthenticationgroup - computed: true, optional: true, required: false
  private _defaultauthenticationgroup?: string; 
  public get defaultauthenticationgroup() {
    return this.getStringAttribute('defaultauthenticationgroup');
  }
  public set defaultauthenticationgroup(value: string) {
    this._defaultauthenticationgroup = value;
  }
  public resetDefaultauthenticationgroup() {
    this._defaultauthenticationgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultauthenticationgroupInput() {
    return this._defaultauthenticationgroup;
  }

  // groupattrname - computed: true, optional: true, required: false
  private _groupattrname?: string; 
  public get groupattrname() {
    return this.getStringAttribute('groupattrname');
  }
  public set groupattrname(value: string) {
    this._groupattrname = value;
  }
  public resetGroupattrname() {
    this._groupattrname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupattrnameInput() {
    return this._groupattrname;
  }

  // groupnameidentifier - computed: true, optional: true, required: false
  private _groupnameidentifier?: string; 
  public get groupnameidentifier() {
    return this.getStringAttribute('groupnameidentifier');
  }
  public set groupnameidentifier(value: string) {
    this._groupnameidentifier = value;
  }
  public resetGroupnameidentifier() {
    this._groupnameidentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupnameidentifierInput() {
    return this._groupnameidentifier;
  }

  // groupsearchattribute - computed: true, optional: true, required: false
  private _groupsearchattribute?: string; 
  public get groupsearchattribute() {
    return this.getStringAttribute('groupsearchattribute');
  }
  public set groupsearchattribute(value: string) {
    this._groupsearchattribute = value;
  }
  public resetGroupsearchattribute() {
    this._groupsearchattribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsearchattributeInput() {
    return this._groupsearchattribute;
  }

  // groupsearchfilter - computed: true, optional: true, required: false
  private _groupsearchfilter?: string; 
  public get groupsearchfilter() {
    return this.getStringAttribute('groupsearchfilter');
  }
  public set groupsearchfilter(value: string) {
    this._groupsearchfilter = value;
  }
  public resetGroupsearchfilter() {
    this._groupsearchfilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsearchfilterInput() {
    return this._groupsearchfilter;
  }

  // groupsearchsubattribute - computed: true, optional: true, required: false
  private _groupsearchsubattribute?: string; 
  public get groupsearchsubattribute() {
    return this.getStringAttribute('groupsearchsubattribute');
  }
  public set groupsearchsubattribute(value: string) {
    this._groupsearchsubattribute = value;
  }
  public resetGroupsearchsubattribute() {
    this._groupsearchsubattribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsearchsubattributeInput() {
    return this._groupsearchsubattribute;
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

  // ldapbase - computed: true, optional: true, required: false
  private _ldapbase?: string; 
  public get ldapbase() {
    return this.getStringAttribute('ldapbase');
  }
  public set ldapbase(value: string) {
    this._ldapbase = value;
  }
  public resetLdapbase() {
    this._ldapbase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapbaseInput() {
    return this._ldapbase;
  }

  // ldapbinddn - computed: true, optional: true, required: false
  private _ldapbinddn?: string; 
  public get ldapbinddn() {
    return this.getStringAttribute('ldapbinddn');
  }
  public set ldapbinddn(value: string) {
    this._ldapbinddn = value;
  }
  public resetLdapbinddn() {
    this._ldapbinddn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapbinddnInput() {
    return this._ldapbinddn;
  }

  // ldapbinddnpassword - computed: true, optional: true, required: false
  private _ldapbinddnpassword?: string; 
  public get ldapbinddnpassword() {
    return this.getStringAttribute('ldapbinddnpassword');
  }
  public set ldapbinddnpassword(value: string) {
    this._ldapbinddnpassword = value;
  }
  public resetLdapbinddnpassword() {
    this._ldapbinddnpassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapbinddnpasswordInput() {
    return this._ldapbinddnpassword;
  }

  // ldaploginname - computed: true, optional: true, required: false
  private _ldaploginname?: string; 
  public get ldaploginname() {
    return this.getStringAttribute('ldaploginname');
  }
  public set ldaploginname(value: string) {
    this._ldaploginname = value;
  }
  public resetLdaploginname() {
    this._ldaploginname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldaploginnameInput() {
    return this._ldaploginname;
  }

  // maxnestinglevel - computed: true, optional: true, required: false
  private _maxnestinglevel?: number; 
  public get maxnestinglevel() {
    return this.getNumberAttribute('maxnestinglevel');
  }
  public set maxnestinglevel(value: number) {
    this._maxnestinglevel = value;
  }
  public resetMaxnestinglevel() {
    this._maxnestinglevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxnestinglevelInput() {
    return this._maxnestinglevel;
  }

  // nestedgroupextraction - computed: true, optional: true, required: false
  private _nestedgroupextraction?: string; 
  public get nestedgroupextraction() {
    return this.getStringAttribute('nestedgroupextraction');
  }
  public set nestedgroupextraction(value: string) {
    this._nestedgroupextraction = value;
  }
  public resetNestedgroupextraction() {
    this._nestedgroupextraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nestedgroupextractionInput() {
    return this._nestedgroupextraction;
  }

  // passwdchange - computed: true, optional: true, required: false
  private _passwdchange?: string; 
  public get passwdchange() {
    return this.getStringAttribute('passwdchange');
  }
  public set passwdchange(value: string) {
    this._passwdchange = value;
  }
  public resetPasswdchange() {
    this._passwdchange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwdchangeInput() {
    return this._passwdchange;
  }

  // searchfilter - computed: true, optional: true, required: false
  private _searchfilter?: string; 
  public get searchfilter() {
    return this.getStringAttribute('searchfilter');
  }
  public set searchfilter(value: string) {
    this._searchfilter = value;
  }
  public resetSearchfilter() {
    this._searchfilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchfilterInput() {
    return this._searchfilter;
  }

  // sectype - computed: true, optional: true, required: false
  private _sectype?: string; 
  public get sectype() {
    return this.getStringAttribute('sectype');
  }
  public set sectype(value: string) {
    this._sectype = value;
  }
  public resetSectype() {
    this._sectype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectypeInput() {
    return this._sectype;
  }

  // serverip - computed: true, optional: true, required: false
  private _serverip?: string; 
  public get serverip() {
    return this.getStringAttribute('serverip');
  }
  public set serverip(value: string) {
    this._serverip = value;
  }
  public resetServerip() {
    this._serverip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serveripInput() {
    return this._serverip;
  }

  // serverport - computed: true, optional: true, required: false
  private _serverport?: number; 
  public get serverport() {
    return this.getNumberAttribute('serverport');
  }
  public set serverport(value: number) {
    this._serverport = value;
  }
  public resetServerport() {
    this._serverport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverportInput() {
    return this._serverport;
  }

  // ssonameattribute - computed: true, optional: true, required: false
  private _ssonameattribute?: string; 
  public get ssonameattribute() {
    return this.getStringAttribute('ssonameattribute');
  }
  public set ssonameattribute(value: string) {
    this._ssonameattribute = value;
  }
  public resetSsonameattribute() {
    this._ssonameattribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssonameattributeInput() {
    return this._ssonameattribute;
  }

  // subattributename - computed: true, optional: true, required: false
  private _subattributename?: string; 
  public get subattributename() {
    return this.getStringAttribute('subattributename');
  }
  public set subattributename(value: string) {
    this._subattributename = value;
  }
  public resetSubattributename() {
    this._subattributename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subattributenameInput() {
    return this._subattributename;
  }

  // svrtype - computed: true, optional: true, required: false
  private _svrtype?: string; 
  public get svrtype() {
    return this.getStringAttribute('svrtype');
  }
  public set svrtype(value: string) {
    this._svrtype = value;
  }
  public resetSvrtype() {
    this._svrtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svrtypeInput() {
    return this._svrtype;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authtimeout: cdktf.numberToTerraform(this._authtimeout),
      defaultauthenticationgroup: cdktf.stringToTerraform(this._defaultauthenticationgroup),
      groupattrname: cdktf.stringToTerraform(this._groupattrname),
      groupnameidentifier: cdktf.stringToTerraform(this._groupnameidentifier),
      groupsearchattribute: cdktf.stringToTerraform(this._groupsearchattribute),
      groupsearchfilter: cdktf.stringToTerraform(this._groupsearchfilter),
      groupsearchsubattribute: cdktf.stringToTerraform(this._groupsearchsubattribute),
      id: cdktf.stringToTerraform(this._id),
      ldapbase: cdktf.stringToTerraform(this._ldapbase),
      ldapbinddn: cdktf.stringToTerraform(this._ldapbinddn),
      ldapbinddnpassword: cdktf.stringToTerraform(this._ldapbinddnpassword),
      ldaploginname: cdktf.stringToTerraform(this._ldaploginname),
      maxnestinglevel: cdktf.numberToTerraform(this._maxnestinglevel),
      nestedgroupextraction: cdktf.stringToTerraform(this._nestedgroupextraction),
      passwdchange: cdktf.stringToTerraform(this._passwdchange),
      searchfilter: cdktf.stringToTerraform(this._searchfilter),
      sectype: cdktf.stringToTerraform(this._sectype),
      serverip: cdktf.stringToTerraform(this._serverip),
      serverport: cdktf.numberToTerraform(this._serverport),
      ssonameattribute: cdktf.stringToTerraform(this._ssonameattribute),
      subattributename: cdktf.stringToTerraform(this._subattributename),
      svrtype: cdktf.stringToTerraform(this._svrtype),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authtimeout: {
        value: cdktf.numberToHclTerraform(this._authtimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      defaultauthenticationgroup: {
        value: cdktf.stringToHclTerraform(this._defaultauthenticationgroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groupattrname: {
        value: cdktf.stringToHclTerraform(this._groupattrname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groupnameidentifier: {
        value: cdktf.stringToHclTerraform(this._groupnameidentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groupsearchattribute: {
        value: cdktf.stringToHclTerraform(this._groupsearchattribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groupsearchfilter: {
        value: cdktf.stringToHclTerraform(this._groupsearchfilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groupsearchsubattribute: {
        value: cdktf.stringToHclTerraform(this._groupsearchsubattribute),
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
      ldapbase: {
        value: cdktf.stringToHclTerraform(this._ldapbase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldapbinddn: {
        value: cdktf.stringToHclTerraform(this._ldapbinddn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldapbinddnpassword: {
        value: cdktf.stringToHclTerraform(this._ldapbinddnpassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldaploginname: {
        value: cdktf.stringToHclTerraform(this._ldaploginname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maxnestinglevel: {
        value: cdktf.numberToHclTerraform(this._maxnestinglevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nestedgroupextraction: {
        value: cdktf.stringToHclTerraform(this._nestedgroupextraction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passwdchange: {
        value: cdktf.stringToHclTerraform(this._passwdchange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      searchfilter: {
        value: cdktf.stringToHclTerraform(this._searchfilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sectype: {
        value: cdktf.stringToHclTerraform(this._sectype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serverip: {
        value: cdktf.stringToHclTerraform(this._serverip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serverport: {
        value: cdktf.numberToHclTerraform(this._serverport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssonameattribute: {
        value: cdktf.stringToHclTerraform(this._ssonameattribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subattributename: {
        value: cdktf.stringToHclTerraform(this._subattributename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      svrtype: {
        value: cdktf.stringToHclTerraform(this._svrtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
