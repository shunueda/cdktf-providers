// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationldapactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#alternateemailattr Authenticationldapaction#alternateemailattr}
  */
  readonly alternateemailattr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#attribute1 Authenticationldapaction#attribute1}
  */
  readonly attribute1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#attribute10 Authenticationldapaction#attribute10}
  */
  readonly attribute10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#attribute11 Authenticationldapaction#attribute11}
  */
  readonly attribute11?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#attribute12 Authenticationldapaction#attribute12}
  */
  readonly attribute12?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#attribute13 Authenticationldapaction#attribute13}
  */
  readonly attribute13?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#attribute14 Authenticationldapaction#attribute14}
  */
  readonly attribute14?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#attribute15 Authenticationldapaction#attribute15}
  */
  readonly attribute15?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#attribute16 Authenticationldapaction#attribute16}
  */
  readonly attribute16?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#attribute2 Authenticationldapaction#attribute2}
  */
  readonly attribute2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#attribute3 Authenticationldapaction#attribute3}
  */
  readonly attribute3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#attribute4 Authenticationldapaction#attribute4}
  */
  readonly attribute4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#attribute5 Authenticationldapaction#attribute5}
  */
  readonly attribute5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#attribute6 Authenticationldapaction#attribute6}
  */
  readonly attribute6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#attribute7 Authenticationldapaction#attribute7}
  */
  readonly attribute7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#attribute8 Authenticationldapaction#attribute8}
  */
  readonly attribute8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#attribute9 Authenticationldapaction#attribute9}
  */
  readonly attribute9?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#attributes Authenticationldapaction#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#authentication Authenticationldapaction#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#authtimeout Authenticationldapaction#authtimeout}
  */
  readonly authtimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#cloudattributes Authenticationldapaction#cloudattributes}
  */
  readonly cloudattributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#defaultauthenticationgroup Authenticationldapaction#defaultauthenticationgroup}
  */
  readonly defaultauthenticationgroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#email Authenticationldapaction#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#followreferrals Authenticationldapaction#followreferrals}
  */
  readonly followreferrals?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#groupattrname Authenticationldapaction#groupattrname}
  */
  readonly groupattrname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#groupnameidentifier Authenticationldapaction#groupnameidentifier}
  */
  readonly groupnameidentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#groupsearchattribute Authenticationldapaction#groupsearchattribute}
  */
  readonly groupsearchattribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#groupsearchfilter Authenticationldapaction#groupsearchfilter}
  */
  readonly groupsearchfilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#groupsearchsubattribute Authenticationldapaction#groupsearchsubattribute}
  */
  readonly groupsearchsubattribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#id Authenticationldapaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#kbattribute Authenticationldapaction#kbattribute}
  */
  readonly kbattribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#ldapbase Authenticationldapaction#ldapbase}
  */
  readonly ldapbase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#ldapbinddn Authenticationldapaction#ldapbinddn}
  */
  readonly ldapbinddn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#ldapbinddnpassword Authenticationldapaction#ldapbinddnpassword}
  */
  readonly ldapbinddnpassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#ldaphostname Authenticationldapaction#ldaphostname}
  */
  readonly ldaphostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#ldaploginname Authenticationldapaction#ldaploginname}
  */
  readonly ldaploginname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#maxldapreferrals Authenticationldapaction#maxldapreferrals}
  */
  readonly maxldapreferrals?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#maxnestinglevel Authenticationldapaction#maxnestinglevel}
  */
  readonly maxnestinglevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#mssrvrecordlocation Authenticationldapaction#mssrvrecordlocation}
  */
  readonly mssrvrecordlocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#name Authenticationldapaction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#nestedgroupextraction Authenticationldapaction#nestedgroupextraction}
  */
  readonly nestedgroupextraction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#otpsecret Authenticationldapaction#otpsecret}
  */
  readonly otpsecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#passwdchange Authenticationldapaction#passwdchange}
  */
  readonly passwdchange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#pushservice Authenticationldapaction#pushservice}
  */
  readonly pushservice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#referraldnslookup Authenticationldapaction#referraldnslookup}
  */
  readonly referraldnslookup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#requireuser Authenticationldapaction#requireuser}
  */
  readonly requireuser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#searchfilter Authenticationldapaction#searchfilter}
  */
  readonly searchfilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#sectype Authenticationldapaction#sectype}
  */
  readonly sectype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#serverip Authenticationldapaction#serverip}
  */
  readonly serverip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#servername Authenticationldapaction#servername}
  */
  readonly servername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#serverport Authenticationldapaction#serverport}
  */
  readonly serverport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#sshpublickey Authenticationldapaction#sshpublickey}
  */
  readonly sshpublickey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#ssonameattribute Authenticationldapaction#ssonameattribute}
  */
  readonly ssonameattribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#subattributename Authenticationldapaction#subattributename}
  */
  readonly subattributename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#svrtype Authenticationldapaction#svrtype}
  */
  readonly svrtype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#validateservercert Authenticationldapaction#validateservercert}
  */
  readonly validateservercert?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction citrixadc_authenticationldapaction}
*/
export class Authenticationldapaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_authenticationldapaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Authenticationldapaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Authenticationldapaction to import
  * @param importFromId The id of the existing Authenticationldapaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Authenticationldapaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_authenticationldapaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationldapaction citrixadc_authenticationldapaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationldapactionConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationldapactionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_authenticationldapaction',
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
    this._alternateemailattr = config.alternateemailattr;
    this._attribute1 = config.attribute1;
    this._attribute10 = config.attribute10;
    this._attribute11 = config.attribute11;
    this._attribute12 = config.attribute12;
    this._attribute13 = config.attribute13;
    this._attribute14 = config.attribute14;
    this._attribute15 = config.attribute15;
    this._attribute16 = config.attribute16;
    this._attribute2 = config.attribute2;
    this._attribute3 = config.attribute3;
    this._attribute4 = config.attribute4;
    this._attribute5 = config.attribute5;
    this._attribute6 = config.attribute6;
    this._attribute7 = config.attribute7;
    this._attribute8 = config.attribute8;
    this._attribute9 = config.attribute9;
    this._attributes = config.attributes;
    this._authentication = config.authentication;
    this._authtimeout = config.authtimeout;
    this._cloudattributes = config.cloudattributes;
    this._defaultauthenticationgroup = config.defaultauthenticationgroup;
    this._email = config.email;
    this._followreferrals = config.followreferrals;
    this._groupattrname = config.groupattrname;
    this._groupnameidentifier = config.groupnameidentifier;
    this._groupsearchattribute = config.groupsearchattribute;
    this._groupsearchfilter = config.groupsearchfilter;
    this._groupsearchsubattribute = config.groupsearchsubattribute;
    this._id = config.id;
    this._kbattribute = config.kbattribute;
    this._ldapbase = config.ldapbase;
    this._ldapbinddn = config.ldapbinddn;
    this._ldapbinddnpassword = config.ldapbinddnpassword;
    this._ldaphostname = config.ldaphostname;
    this._ldaploginname = config.ldaploginname;
    this._maxldapreferrals = config.maxldapreferrals;
    this._maxnestinglevel = config.maxnestinglevel;
    this._mssrvrecordlocation = config.mssrvrecordlocation;
    this._name = config.name;
    this._nestedgroupextraction = config.nestedgroupextraction;
    this._otpsecret = config.otpsecret;
    this._passwdchange = config.passwdchange;
    this._pushservice = config.pushservice;
    this._referraldnslookup = config.referraldnslookup;
    this._requireuser = config.requireuser;
    this._searchfilter = config.searchfilter;
    this._sectype = config.sectype;
    this._serverip = config.serverip;
    this._servername = config.servername;
    this._serverport = config.serverport;
    this._sshpublickey = config.sshpublickey;
    this._ssonameattribute = config.ssonameattribute;
    this._subattributename = config.subattributename;
    this._svrtype = config.svrtype;
    this._validateservercert = config.validateservercert;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alternateemailattr - computed: true, optional: true, required: false
  private _alternateemailattr?: string; 
  public get alternateemailattr() {
    return this.getStringAttribute('alternateemailattr');
  }
  public set alternateemailattr(value: string) {
    this._alternateemailattr = value;
  }
  public resetAlternateemailattr() {
    this._alternateemailattr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateemailattrInput() {
    return this._alternateemailattr;
  }

  // attribute1 - computed: true, optional: true, required: false
  private _attribute1?: string; 
  public get attribute1() {
    return this.getStringAttribute('attribute1');
  }
  public set attribute1(value: string) {
    this._attribute1 = value;
  }
  public resetAttribute1() {
    this._attribute1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute1Input() {
    return this._attribute1;
  }

  // attribute10 - computed: true, optional: true, required: false
  private _attribute10?: string; 
  public get attribute10() {
    return this.getStringAttribute('attribute10');
  }
  public set attribute10(value: string) {
    this._attribute10 = value;
  }
  public resetAttribute10() {
    this._attribute10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute10Input() {
    return this._attribute10;
  }

  // attribute11 - computed: true, optional: true, required: false
  private _attribute11?: string; 
  public get attribute11() {
    return this.getStringAttribute('attribute11');
  }
  public set attribute11(value: string) {
    this._attribute11 = value;
  }
  public resetAttribute11() {
    this._attribute11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute11Input() {
    return this._attribute11;
  }

  // attribute12 - computed: true, optional: true, required: false
  private _attribute12?: string; 
  public get attribute12() {
    return this.getStringAttribute('attribute12');
  }
  public set attribute12(value: string) {
    this._attribute12 = value;
  }
  public resetAttribute12() {
    this._attribute12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute12Input() {
    return this._attribute12;
  }

  // attribute13 - computed: true, optional: true, required: false
  private _attribute13?: string; 
  public get attribute13() {
    return this.getStringAttribute('attribute13');
  }
  public set attribute13(value: string) {
    this._attribute13 = value;
  }
  public resetAttribute13() {
    this._attribute13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute13Input() {
    return this._attribute13;
  }

  // attribute14 - computed: true, optional: true, required: false
  private _attribute14?: string; 
  public get attribute14() {
    return this.getStringAttribute('attribute14');
  }
  public set attribute14(value: string) {
    this._attribute14 = value;
  }
  public resetAttribute14() {
    this._attribute14 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute14Input() {
    return this._attribute14;
  }

  // attribute15 - computed: true, optional: true, required: false
  private _attribute15?: string; 
  public get attribute15() {
    return this.getStringAttribute('attribute15');
  }
  public set attribute15(value: string) {
    this._attribute15 = value;
  }
  public resetAttribute15() {
    this._attribute15 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute15Input() {
    return this._attribute15;
  }

  // attribute16 - computed: true, optional: true, required: false
  private _attribute16?: string; 
  public get attribute16() {
    return this.getStringAttribute('attribute16');
  }
  public set attribute16(value: string) {
    this._attribute16 = value;
  }
  public resetAttribute16() {
    this._attribute16 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute16Input() {
    return this._attribute16;
  }

  // attribute2 - computed: true, optional: true, required: false
  private _attribute2?: string; 
  public get attribute2() {
    return this.getStringAttribute('attribute2');
  }
  public set attribute2(value: string) {
    this._attribute2 = value;
  }
  public resetAttribute2() {
    this._attribute2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute2Input() {
    return this._attribute2;
  }

  // attribute3 - computed: true, optional: true, required: false
  private _attribute3?: string; 
  public get attribute3() {
    return this.getStringAttribute('attribute3');
  }
  public set attribute3(value: string) {
    this._attribute3 = value;
  }
  public resetAttribute3() {
    this._attribute3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute3Input() {
    return this._attribute3;
  }

  // attribute4 - computed: true, optional: true, required: false
  private _attribute4?: string; 
  public get attribute4() {
    return this.getStringAttribute('attribute4');
  }
  public set attribute4(value: string) {
    this._attribute4 = value;
  }
  public resetAttribute4() {
    this._attribute4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute4Input() {
    return this._attribute4;
  }

  // attribute5 - computed: true, optional: true, required: false
  private _attribute5?: string; 
  public get attribute5() {
    return this.getStringAttribute('attribute5');
  }
  public set attribute5(value: string) {
    this._attribute5 = value;
  }
  public resetAttribute5() {
    this._attribute5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute5Input() {
    return this._attribute5;
  }

  // attribute6 - computed: true, optional: true, required: false
  private _attribute6?: string; 
  public get attribute6() {
    return this.getStringAttribute('attribute6');
  }
  public set attribute6(value: string) {
    this._attribute6 = value;
  }
  public resetAttribute6() {
    this._attribute6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute6Input() {
    return this._attribute6;
  }

  // attribute7 - computed: true, optional: true, required: false
  private _attribute7?: string; 
  public get attribute7() {
    return this.getStringAttribute('attribute7');
  }
  public set attribute7(value: string) {
    this._attribute7 = value;
  }
  public resetAttribute7() {
    this._attribute7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute7Input() {
    return this._attribute7;
  }

  // attribute8 - computed: true, optional: true, required: false
  private _attribute8?: string; 
  public get attribute8() {
    return this.getStringAttribute('attribute8');
  }
  public set attribute8(value: string) {
    this._attribute8 = value;
  }
  public resetAttribute8() {
    this._attribute8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute8Input() {
    return this._attribute8;
  }

  // attribute9 - computed: true, optional: true, required: false
  private _attribute9?: string; 
  public get attribute9() {
    return this.getStringAttribute('attribute9');
  }
  public set attribute9(value: string) {
    this._attribute9 = value;
  }
  public resetAttribute9() {
    this._attribute9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attribute9Input() {
    return this._attribute9;
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes?: string; 
  public get attributes() {
    return this.getStringAttribute('attributes');
  }
  public set attributes(value: string) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

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

  // cloudattributes - computed: true, optional: true, required: false
  private _cloudattributes?: string; 
  public get cloudattributes() {
    return this.getStringAttribute('cloudattributes');
  }
  public set cloudattributes(value: string) {
    this._cloudattributes = value;
  }
  public resetCloudattributes() {
    this._cloudattributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudattributesInput() {
    return this._cloudattributes;
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

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // followreferrals - computed: true, optional: true, required: false
  private _followreferrals?: string; 
  public get followreferrals() {
    return this.getStringAttribute('followreferrals');
  }
  public set followreferrals(value: string) {
    this._followreferrals = value;
  }
  public resetFollowreferrals() {
    this._followreferrals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followreferralsInput() {
    return this._followreferrals;
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

  // kbattribute - computed: true, optional: true, required: false
  private _kbattribute?: string; 
  public get kbattribute() {
    return this.getStringAttribute('kbattribute');
  }
  public set kbattribute(value: string) {
    this._kbattribute = value;
  }
  public resetKbattribute() {
    this._kbattribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kbattributeInput() {
    return this._kbattribute;
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

  // ldaphostname - computed: true, optional: true, required: false
  private _ldaphostname?: string; 
  public get ldaphostname() {
    return this.getStringAttribute('ldaphostname');
  }
  public set ldaphostname(value: string) {
    this._ldaphostname = value;
  }
  public resetLdaphostname() {
    this._ldaphostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldaphostnameInput() {
    return this._ldaphostname;
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

  // maxldapreferrals - computed: true, optional: true, required: false
  private _maxldapreferrals?: number; 
  public get maxldapreferrals() {
    return this.getNumberAttribute('maxldapreferrals');
  }
  public set maxldapreferrals(value: number) {
    this._maxldapreferrals = value;
  }
  public resetMaxldapreferrals() {
    this._maxldapreferrals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxldapreferralsInput() {
    return this._maxldapreferrals;
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

  // mssrvrecordlocation - computed: true, optional: true, required: false
  private _mssrvrecordlocation?: string; 
  public get mssrvrecordlocation() {
    return this.getStringAttribute('mssrvrecordlocation');
  }
  public set mssrvrecordlocation(value: string) {
    this._mssrvrecordlocation = value;
  }
  public resetMssrvrecordlocation() {
    this._mssrvrecordlocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssrvrecordlocationInput() {
    return this._mssrvrecordlocation;
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

  // otpsecret - computed: true, optional: true, required: false
  private _otpsecret?: string; 
  public get otpsecret() {
    return this.getStringAttribute('otpsecret');
  }
  public set otpsecret(value: string) {
    this._otpsecret = value;
  }
  public resetOtpsecret() {
    this._otpsecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpsecretInput() {
    return this._otpsecret;
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

  // pushservice - computed: true, optional: true, required: false
  private _pushservice?: string; 
  public get pushservice() {
    return this.getStringAttribute('pushservice');
  }
  public set pushservice(value: string) {
    this._pushservice = value;
  }
  public resetPushservice() {
    this._pushservice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushserviceInput() {
    return this._pushservice;
  }

  // referraldnslookup - computed: true, optional: true, required: false
  private _referraldnslookup?: string; 
  public get referraldnslookup() {
    return this.getStringAttribute('referraldnslookup');
  }
  public set referraldnslookup(value: string) {
    this._referraldnslookup = value;
  }
  public resetReferraldnslookup() {
    this._referraldnslookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referraldnslookupInput() {
    return this._referraldnslookup;
  }

  // requireuser - computed: true, optional: true, required: false
  private _requireuser?: string; 
  public get requireuser() {
    return this.getStringAttribute('requireuser');
  }
  public set requireuser(value: string) {
    this._requireuser = value;
  }
  public resetRequireuser() {
    this._requireuser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireuserInput() {
    return this._requireuser;
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

  // servername - computed: true, optional: true, required: false
  private _servername?: string; 
  public get servername() {
    return this.getStringAttribute('servername');
  }
  public set servername(value: string) {
    this._servername = value;
  }
  public resetServername() {
    this._servername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servernameInput() {
    return this._servername;
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

  // sshpublickey - computed: true, optional: true, required: false
  private _sshpublickey?: string; 
  public get sshpublickey() {
    return this.getStringAttribute('sshpublickey');
  }
  public set sshpublickey(value: string) {
    this._sshpublickey = value;
  }
  public resetSshpublickey() {
    this._sshpublickey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshpublickeyInput() {
    return this._sshpublickey;
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

  // validateservercert - computed: true, optional: true, required: false
  private _validateservercert?: string; 
  public get validateservercert() {
    return this.getStringAttribute('validateservercert');
  }
  public set validateservercert(value: string) {
    this._validateservercert = value;
  }
  public resetValidateservercert() {
    this._validateservercert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateservercertInput() {
    return this._validateservercert;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alternateemailattr: cdktf.stringToTerraform(this._alternateemailattr),
      attribute1: cdktf.stringToTerraform(this._attribute1),
      attribute10: cdktf.stringToTerraform(this._attribute10),
      attribute11: cdktf.stringToTerraform(this._attribute11),
      attribute12: cdktf.stringToTerraform(this._attribute12),
      attribute13: cdktf.stringToTerraform(this._attribute13),
      attribute14: cdktf.stringToTerraform(this._attribute14),
      attribute15: cdktf.stringToTerraform(this._attribute15),
      attribute16: cdktf.stringToTerraform(this._attribute16),
      attribute2: cdktf.stringToTerraform(this._attribute2),
      attribute3: cdktf.stringToTerraform(this._attribute3),
      attribute4: cdktf.stringToTerraform(this._attribute4),
      attribute5: cdktf.stringToTerraform(this._attribute5),
      attribute6: cdktf.stringToTerraform(this._attribute6),
      attribute7: cdktf.stringToTerraform(this._attribute7),
      attribute8: cdktf.stringToTerraform(this._attribute8),
      attribute9: cdktf.stringToTerraform(this._attribute9),
      attributes: cdktf.stringToTerraform(this._attributes),
      authentication: cdktf.stringToTerraform(this._authentication),
      authtimeout: cdktf.numberToTerraform(this._authtimeout),
      cloudattributes: cdktf.stringToTerraform(this._cloudattributes),
      defaultauthenticationgroup: cdktf.stringToTerraform(this._defaultauthenticationgroup),
      email: cdktf.stringToTerraform(this._email),
      followreferrals: cdktf.stringToTerraform(this._followreferrals),
      groupattrname: cdktf.stringToTerraform(this._groupattrname),
      groupnameidentifier: cdktf.stringToTerraform(this._groupnameidentifier),
      groupsearchattribute: cdktf.stringToTerraform(this._groupsearchattribute),
      groupsearchfilter: cdktf.stringToTerraform(this._groupsearchfilter),
      groupsearchsubattribute: cdktf.stringToTerraform(this._groupsearchsubattribute),
      id: cdktf.stringToTerraform(this._id),
      kbattribute: cdktf.stringToTerraform(this._kbattribute),
      ldapbase: cdktf.stringToTerraform(this._ldapbase),
      ldapbinddn: cdktf.stringToTerraform(this._ldapbinddn),
      ldapbinddnpassword: cdktf.stringToTerraform(this._ldapbinddnpassword),
      ldaphostname: cdktf.stringToTerraform(this._ldaphostname),
      ldaploginname: cdktf.stringToTerraform(this._ldaploginname),
      maxldapreferrals: cdktf.numberToTerraform(this._maxldapreferrals),
      maxnestinglevel: cdktf.numberToTerraform(this._maxnestinglevel),
      mssrvrecordlocation: cdktf.stringToTerraform(this._mssrvrecordlocation),
      name: cdktf.stringToTerraform(this._name),
      nestedgroupextraction: cdktf.stringToTerraform(this._nestedgroupextraction),
      otpsecret: cdktf.stringToTerraform(this._otpsecret),
      passwdchange: cdktf.stringToTerraform(this._passwdchange),
      pushservice: cdktf.stringToTerraform(this._pushservice),
      referraldnslookup: cdktf.stringToTerraform(this._referraldnslookup),
      requireuser: cdktf.stringToTerraform(this._requireuser),
      searchfilter: cdktf.stringToTerraform(this._searchfilter),
      sectype: cdktf.stringToTerraform(this._sectype),
      serverip: cdktf.stringToTerraform(this._serverip),
      servername: cdktf.stringToTerraform(this._servername),
      serverport: cdktf.numberToTerraform(this._serverport),
      sshpublickey: cdktf.stringToTerraform(this._sshpublickey),
      ssonameattribute: cdktf.stringToTerraform(this._ssonameattribute),
      subattributename: cdktf.stringToTerraform(this._subattributename),
      svrtype: cdktf.stringToTerraform(this._svrtype),
      validateservercert: cdktf.stringToTerraform(this._validateservercert),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alternateemailattr: {
        value: cdktf.stringToHclTerraform(this._alternateemailattr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute1: {
        value: cdktf.stringToHclTerraform(this._attribute1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute10: {
        value: cdktf.stringToHclTerraform(this._attribute10),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute11: {
        value: cdktf.stringToHclTerraform(this._attribute11),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute12: {
        value: cdktf.stringToHclTerraform(this._attribute12),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute13: {
        value: cdktf.stringToHclTerraform(this._attribute13),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute14: {
        value: cdktf.stringToHclTerraform(this._attribute14),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute15: {
        value: cdktf.stringToHclTerraform(this._attribute15),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute16: {
        value: cdktf.stringToHclTerraform(this._attribute16),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute2: {
        value: cdktf.stringToHclTerraform(this._attribute2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute3: {
        value: cdktf.stringToHclTerraform(this._attribute3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute4: {
        value: cdktf.stringToHclTerraform(this._attribute4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute5: {
        value: cdktf.stringToHclTerraform(this._attribute5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute6: {
        value: cdktf.stringToHclTerraform(this._attribute6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute7: {
        value: cdktf.stringToHclTerraform(this._attribute7),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute8: {
        value: cdktf.stringToHclTerraform(this._attribute8),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute9: {
        value: cdktf.stringToHclTerraform(this._attribute9),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attributes: {
        value: cdktf.stringToHclTerraform(this._attributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication: {
        value: cdktf.stringToHclTerraform(this._authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authtimeout: {
        value: cdktf.numberToHclTerraform(this._authtimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cloudattributes: {
        value: cdktf.stringToHclTerraform(this._cloudattributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defaultauthenticationgroup: {
        value: cdktf.stringToHclTerraform(this._defaultauthenticationgroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      followreferrals: {
        value: cdktf.stringToHclTerraform(this._followreferrals),
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
      kbattribute: {
        value: cdktf.stringToHclTerraform(this._kbattribute),
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
      ldaphostname: {
        value: cdktf.stringToHclTerraform(this._ldaphostname),
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
      maxldapreferrals: {
        value: cdktf.numberToHclTerraform(this._maxldapreferrals),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxnestinglevel: {
        value: cdktf.numberToHclTerraform(this._maxnestinglevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mssrvrecordlocation: {
        value: cdktf.stringToHclTerraform(this._mssrvrecordlocation),
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
      nestedgroupextraction: {
        value: cdktf.stringToHclTerraform(this._nestedgroupextraction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      otpsecret: {
        value: cdktf.stringToHclTerraform(this._otpsecret),
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
      pushservice: {
        value: cdktf.stringToHclTerraform(this._pushservice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      referraldnslookup: {
        value: cdktf.stringToHclTerraform(this._referraldnslookup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requireuser: {
        value: cdktf.stringToHclTerraform(this._requireuser),
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
      servername: {
        value: cdktf.stringToHclTerraform(this._servername),
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
      sshpublickey: {
        value: cdktf.stringToHclTerraform(this._sshpublickey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      validateservercert: {
        value: cdktf.stringToHclTerraform(this._validateservercert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
