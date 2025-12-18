// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationoauthactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#allowedalgorithms Authenticationoauthaction#allowedalgorithms}
  */
  readonly allowedalgorithms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#attribute1 Authenticationoauthaction#attribute1}
  */
  readonly attribute1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#attribute10 Authenticationoauthaction#attribute10}
  */
  readonly attribute10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#attribute11 Authenticationoauthaction#attribute11}
  */
  readonly attribute11?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#attribute12 Authenticationoauthaction#attribute12}
  */
  readonly attribute12?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#attribute13 Authenticationoauthaction#attribute13}
  */
  readonly attribute13?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#attribute14 Authenticationoauthaction#attribute14}
  */
  readonly attribute14?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#attribute15 Authenticationoauthaction#attribute15}
  */
  readonly attribute15?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#attribute16 Authenticationoauthaction#attribute16}
  */
  readonly attribute16?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#attribute2 Authenticationoauthaction#attribute2}
  */
  readonly attribute2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#attribute3 Authenticationoauthaction#attribute3}
  */
  readonly attribute3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#attribute4 Authenticationoauthaction#attribute4}
  */
  readonly attribute4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#attribute5 Authenticationoauthaction#attribute5}
  */
  readonly attribute5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#attribute6 Authenticationoauthaction#attribute6}
  */
  readonly attribute6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#attribute7 Authenticationoauthaction#attribute7}
  */
  readonly attribute7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#attribute8 Authenticationoauthaction#attribute8}
  */
  readonly attribute8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#attribute9 Authenticationoauthaction#attribute9}
  */
  readonly attribute9?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#attributes Authenticationoauthaction#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#audience Authenticationoauthaction#audience}
  */
  readonly audience?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#authentication Authenticationoauthaction#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#authorizationendpoint Authenticationoauthaction#authorizationendpoint}
  */
  readonly authorizationendpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#certendpoint Authenticationoauthaction#certendpoint}
  */
  readonly certendpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#certfilepath Authenticationoauthaction#certfilepath}
  */
  readonly certfilepath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#clientid Authenticationoauthaction#clientid}
  */
  readonly clientid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#clientsecret Authenticationoauthaction#clientsecret}
  */
  readonly clientsecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#defaultauthenticationgroup Authenticationoauthaction#defaultauthenticationgroup}
  */
  readonly defaultauthenticationgroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#granttype Authenticationoauthaction#granttype}
  */
  readonly granttype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#graphendpoint Authenticationoauthaction#graphendpoint}
  */
  readonly graphendpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#id Authenticationoauthaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#idtokendecryptendpoint Authenticationoauthaction#idtokendecryptendpoint}
  */
  readonly idtokendecryptendpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#introspecturl Authenticationoauthaction#introspecturl}
  */
  readonly introspecturl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#intunedeviceidexpression Authenticationoauthaction#intunedeviceidexpression}
  */
  readonly intunedeviceidexpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#issuer Authenticationoauthaction#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#metadataurl Authenticationoauthaction#metadataurl}
  */
  readonly metadataurl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#name Authenticationoauthaction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#oauthmiscflags Authenticationoauthaction#oauthmiscflags}
  */
  readonly oauthmiscflags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#oauthtype Authenticationoauthaction#oauthtype}
  */
  readonly oauthtype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#pkce Authenticationoauthaction#pkce}
  */
  readonly pkce?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#refreshinterval Authenticationoauthaction#refreshinterval}
  */
  readonly refreshinterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#requestattribute Authenticationoauthaction#requestattribute}
  */
  readonly requestattribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#resourceuri Authenticationoauthaction#resourceuri}
  */
  readonly resourceuri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#skewtime Authenticationoauthaction#skewtime}
  */
  readonly skewtime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#tenantid Authenticationoauthaction#tenantid}
  */
  readonly tenantid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#tokenendpoint Authenticationoauthaction#tokenendpoint}
  */
  readonly tokenendpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#tokenendpointauthmethod Authenticationoauthaction#tokenendpointauthmethod}
  */
  readonly tokenendpointauthmethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#userinfourl Authenticationoauthaction#userinfourl}
  */
  readonly userinfourl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#usernamefield Authenticationoauthaction#usernamefield}
  */
  readonly usernamefield?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction citrixadc_authenticationoauthaction}
*/
export class Authenticationoauthaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_authenticationoauthaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Authenticationoauthaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Authenticationoauthaction to import
  * @param importFromId The id of the existing Authenticationoauthaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Authenticationoauthaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_authenticationoauthaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationoauthaction citrixadc_authenticationoauthaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationoauthactionConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationoauthactionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_authenticationoauthaction',
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
    this._allowedalgorithms = config.allowedalgorithms;
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
    this._audience = config.audience;
    this._authentication = config.authentication;
    this._authorizationendpoint = config.authorizationendpoint;
    this._certendpoint = config.certendpoint;
    this._certfilepath = config.certfilepath;
    this._clientid = config.clientid;
    this._clientsecret = config.clientsecret;
    this._defaultauthenticationgroup = config.defaultauthenticationgroup;
    this._granttype = config.granttype;
    this._graphendpoint = config.graphendpoint;
    this._id = config.id;
    this._idtokendecryptendpoint = config.idtokendecryptendpoint;
    this._introspecturl = config.introspecturl;
    this._intunedeviceidexpression = config.intunedeviceidexpression;
    this._issuer = config.issuer;
    this._metadataurl = config.metadataurl;
    this._name = config.name;
    this._oauthmiscflags = config.oauthmiscflags;
    this._oauthtype = config.oauthtype;
    this._pkce = config.pkce;
    this._refreshinterval = config.refreshinterval;
    this._requestattribute = config.requestattribute;
    this._resourceuri = config.resourceuri;
    this._skewtime = config.skewtime;
    this._tenantid = config.tenantid;
    this._tokenendpoint = config.tokenendpoint;
    this._tokenendpointauthmethod = config.tokenendpointauthmethod;
    this._userinfourl = config.userinfourl;
    this._usernamefield = config.usernamefield;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowedalgorithms - computed: true, optional: true, required: false
  private _allowedalgorithms?: string[]; 
  public get allowedalgorithms() {
    return this.getListAttribute('allowedalgorithms');
  }
  public set allowedalgorithms(value: string[]) {
    this._allowedalgorithms = value;
  }
  public resetAllowedalgorithms() {
    this._allowedalgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedalgorithmsInput() {
    return this._allowedalgorithms;
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

  // audience - computed: true, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
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

  // authorizationendpoint - computed: false, optional: false, required: true
  private _authorizationendpoint?: string; 
  public get authorizationendpoint() {
    return this.getStringAttribute('authorizationendpoint');
  }
  public set authorizationendpoint(value: string) {
    this._authorizationendpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationendpointInput() {
    return this._authorizationendpoint;
  }

  // certendpoint - computed: true, optional: true, required: false
  private _certendpoint?: string; 
  public get certendpoint() {
    return this.getStringAttribute('certendpoint');
  }
  public set certendpoint(value: string) {
    this._certendpoint = value;
  }
  public resetCertendpoint() {
    this._certendpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certendpointInput() {
    return this._certendpoint;
  }

  // certfilepath - computed: true, optional: true, required: false
  private _certfilepath?: string; 
  public get certfilepath() {
    return this.getStringAttribute('certfilepath');
  }
  public set certfilepath(value: string) {
    this._certfilepath = value;
  }
  public resetCertfilepath() {
    this._certfilepath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certfilepathInput() {
    return this._certfilepath;
  }

  // clientid - computed: false, optional: false, required: true
  private _clientid?: string; 
  public get clientid() {
    return this.getStringAttribute('clientid');
  }
  public set clientid(value: string) {
    this._clientid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientidInput() {
    return this._clientid;
  }

  // clientsecret - computed: false, optional: false, required: true
  private _clientsecret?: string; 
  public get clientsecret() {
    return this.getStringAttribute('clientsecret');
  }
  public set clientsecret(value: string) {
    this._clientsecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsecretInput() {
    return this._clientsecret;
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

  // granttype - computed: true, optional: true, required: false
  private _granttype?: string; 
  public get granttype() {
    return this.getStringAttribute('granttype');
  }
  public set granttype(value: string) {
    this._granttype = value;
  }
  public resetGranttype() {
    this._granttype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granttypeInput() {
    return this._granttype;
  }

  // graphendpoint - computed: true, optional: true, required: false
  private _graphendpoint?: string; 
  public get graphendpoint() {
    return this.getStringAttribute('graphendpoint');
  }
  public set graphendpoint(value: string) {
    this._graphendpoint = value;
  }
  public resetGraphendpoint() {
    this._graphendpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphendpointInput() {
    return this._graphendpoint;
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

  // idtokendecryptendpoint - computed: true, optional: true, required: false
  private _idtokendecryptendpoint?: string; 
  public get idtokendecryptendpoint() {
    return this.getStringAttribute('idtokendecryptendpoint');
  }
  public set idtokendecryptendpoint(value: string) {
    this._idtokendecryptendpoint = value;
  }
  public resetIdtokendecryptendpoint() {
    this._idtokendecryptendpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idtokendecryptendpointInput() {
    return this._idtokendecryptendpoint;
  }

  // introspecturl - computed: true, optional: true, required: false
  private _introspecturl?: string; 
  public get introspecturl() {
    return this.getStringAttribute('introspecturl');
  }
  public set introspecturl(value: string) {
    this._introspecturl = value;
  }
  public resetIntrospecturl() {
    this._introspecturl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get introspecturlInput() {
    return this._introspecturl;
  }

  // intunedeviceidexpression - computed: true, optional: true, required: false
  private _intunedeviceidexpression?: string; 
  public get intunedeviceidexpression() {
    return this.getStringAttribute('intunedeviceidexpression');
  }
  public set intunedeviceidexpression(value: string) {
    this._intunedeviceidexpression = value;
  }
  public resetIntunedeviceidexpression() {
    this._intunedeviceidexpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intunedeviceidexpressionInput() {
    return this._intunedeviceidexpression;
  }

  // issuer - computed: true, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // metadataurl - computed: true, optional: true, required: false
  private _metadataurl?: string; 
  public get metadataurl() {
    return this.getStringAttribute('metadataurl');
  }
  public set metadataurl(value: string) {
    this._metadataurl = value;
  }
  public resetMetadataurl() {
    this._metadataurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataurlInput() {
    return this._metadataurl;
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

  // oauthmiscflags - computed: true, optional: true, required: false
  private _oauthmiscflags?: string[]; 
  public get oauthmiscflags() {
    return this.getListAttribute('oauthmiscflags');
  }
  public set oauthmiscflags(value: string[]) {
    this._oauthmiscflags = value;
  }
  public resetOauthmiscflags() {
    this._oauthmiscflags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthmiscflagsInput() {
    return this._oauthmiscflags;
  }

  // oauthtype - computed: true, optional: true, required: false
  private _oauthtype?: string; 
  public get oauthtype() {
    return this.getStringAttribute('oauthtype');
  }
  public set oauthtype(value: string) {
    this._oauthtype = value;
  }
  public resetOauthtype() {
    this._oauthtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthtypeInput() {
    return this._oauthtype;
  }

  // pkce - computed: true, optional: true, required: false
  private _pkce?: string; 
  public get pkce() {
    return this.getStringAttribute('pkce');
  }
  public set pkce(value: string) {
    this._pkce = value;
  }
  public resetPkce() {
    this._pkce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkceInput() {
    return this._pkce;
  }

  // refreshinterval - computed: true, optional: true, required: false
  private _refreshinterval?: number; 
  public get refreshinterval() {
    return this.getNumberAttribute('refreshinterval');
  }
  public set refreshinterval(value: number) {
    this._refreshinterval = value;
  }
  public resetRefreshinterval() {
    this._refreshinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshintervalInput() {
    return this._refreshinterval;
  }

  // requestattribute - computed: true, optional: true, required: false
  private _requestattribute?: string; 
  public get requestattribute() {
    return this.getStringAttribute('requestattribute');
  }
  public set requestattribute(value: string) {
    this._requestattribute = value;
  }
  public resetRequestattribute() {
    this._requestattribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestattributeInput() {
    return this._requestattribute;
  }

  // resourceuri - computed: true, optional: true, required: false
  private _resourceuri?: string; 
  public get resourceuri() {
    return this.getStringAttribute('resourceuri');
  }
  public set resourceuri(value: string) {
    this._resourceuri = value;
  }
  public resetResourceuri() {
    this._resourceuri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceuriInput() {
    return this._resourceuri;
  }

  // skewtime - computed: true, optional: true, required: false
  private _skewtime?: number; 
  public get skewtime() {
    return this.getNumberAttribute('skewtime');
  }
  public set skewtime(value: number) {
    this._skewtime = value;
  }
  public resetSkewtime() {
    this._skewtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skewtimeInput() {
    return this._skewtime;
  }

  // tenantid - computed: true, optional: true, required: false
  private _tenantid?: string; 
  public get tenantid() {
    return this.getStringAttribute('tenantid');
  }
  public set tenantid(value: string) {
    this._tenantid = value;
  }
  public resetTenantid() {
    this._tenantid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantidInput() {
    return this._tenantid;
  }

  // tokenendpoint - computed: false, optional: false, required: true
  private _tokenendpoint?: string; 
  public get tokenendpoint() {
    return this.getStringAttribute('tokenendpoint');
  }
  public set tokenendpoint(value: string) {
    this._tokenendpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenendpointInput() {
    return this._tokenendpoint;
  }

  // tokenendpointauthmethod - computed: true, optional: true, required: false
  private _tokenendpointauthmethod?: string; 
  public get tokenendpointauthmethod() {
    return this.getStringAttribute('tokenendpointauthmethod');
  }
  public set tokenendpointauthmethod(value: string) {
    this._tokenendpointauthmethod = value;
  }
  public resetTokenendpointauthmethod() {
    this._tokenendpointauthmethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenendpointauthmethodInput() {
    return this._tokenendpointauthmethod;
  }

  // userinfourl - computed: true, optional: true, required: false
  private _userinfourl?: string; 
  public get userinfourl() {
    return this.getStringAttribute('userinfourl');
  }
  public set userinfourl(value: string) {
    this._userinfourl = value;
  }
  public resetUserinfourl() {
    this._userinfourl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userinfourlInput() {
    return this._userinfourl;
  }

  // usernamefield - computed: true, optional: true, required: false
  private _usernamefield?: string; 
  public get usernamefield() {
    return this.getStringAttribute('usernamefield');
  }
  public set usernamefield(value: string) {
    this._usernamefield = value;
  }
  public resetUsernamefield() {
    this._usernamefield = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamefieldInput() {
    return this._usernamefield;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowedalgorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedalgorithms),
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
      audience: cdktf.stringToTerraform(this._audience),
      authentication: cdktf.stringToTerraform(this._authentication),
      authorizationendpoint: cdktf.stringToTerraform(this._authorizationendpoint),
      certendpoint: cdktf.stringToTerraform(this._certendpoint),
      certfilepath: cdktf.stringToTerraform(this._certfilepath),
      clientid: cdktf.stringToTerraform(this._clientid),
      clientsecret: cdktf.stringToTerraform(this._clientsecret),
      defaultauthenticationgroup: cdktf.stringToTerraform(this._defaultauthenticationgroup),
      granttype: cdktf.stringToTerraform(this._granttype),
      graphendpoint: cdktf.stringToTerraform(this._graphendpoint),
      id: cdktf.stringToTerraform(this._id),
      idtokendecryptendpoint: cdktf.stringToTerraform(this._idtokendecryptendpoint),
      introspecturl: cdktf.stringToTerraform(this._introspecturl),
      intunedeviceidexpression: cdktf.stringToTerraform(this._intunedeviceidexpression),
      issuer: cdktf.stringToTerraform(this._issuer),
      metadataurl: cdktf.stringToTerraform(this._metadataurl),
      name: cdktf.stringToTerraform(this._name),
      oauthmiscflags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._oauthmiscflags),
      oauthtype: cdktf.stringToTerraform(this._oauthtype),
      pkce: cdktf.stringToTerraform(this._pkce),
      refreshinterval: cdktf.numberToTerraform(this._refreshinterval),
      requestattribute: cdktf.stringToTerraform(this._requestattribute),
      resourceuri: cdktf.stringToTerraform(this._resourceuri),
      skewtime: cdktf.numberToTerraform(this._skewtime),
      tenantid: cdktf.stringToTerraform(this._tenantid),
      tokenendpoint: cdktf.stringToTerraform(this._tokenendpoint),
      tokenendpointauthmethod: cdktf.stringToTerraform(this._tokenendpointauthmethod),
      userinfourl: cdktf.stringToTerraform(this._userinfourl),
      usernamefield: cdktf.stringToTerraform(this._usernamefield),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowedalgorithms: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedalgorithms),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      audience: {
        value: cdktf.stringToHclTerraform(this._audience),
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
      authorizationendpoint: {
        value: cdktf.stringToHclTerraform(this._authorizationendpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certendpoint: {
        value: cdktf.stringToHclTerraform(this._certendpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certfilepath: {
        value: cdktf.stringToHclTerraform(this._certfilepath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientid: {
        value: cdktf.stringToHclTerraform(this._clientid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientsecret: {
        value: cdktf.stringToHclTerraform(this._clientsecret),
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
      granttype: {
        value: cdktf.stringToHclTerraform(this._granttype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      graphendpoint: {
        value: cdktf.stringToHclTerraform(this._graphendpoint),
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
      idtokendecryptendpoint: {
        value: cdktf.stringToHclTerraform(this._idtokendecryptendpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      introspecturl: {
        value: cdktf.stringToHclTerraform(this._introspecturl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intunedeviceidexpression: {
        value: cdktf.stringToHclTerraform(this._intunedeviceidexpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadataurl: {
        value: cdktf.stringToHclTerraform(this._metadataurl),
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
      oauthmiscflags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._oauthmiscflags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      oauthtype: {
        value: cdktf.stringToHclTerraform(this._oauthtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkce: {
        value: cdktf.stringToHclTerraform(this._pkce),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refreshinterval: {
        value: cdktf.numberToHclTerraform(this._refreshinterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      requestattribute: {
        value: cdktf.stringToHclTerraform(this._requestattribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resourceuri: {
        value: cdktf.stringToHclTerraform(this._resourceuri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skewtime: {
        value: cdktf.numberToHclTerraform(this._skewtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tenantid: {
        value: cdktf.stringToHclTerraform(this._tenantid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tokenendpoint: {
        value: cdktf.stringToHclTerraform(this._tokenendpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tokenendpointauthmethod: {
        value: cdktf.stringToHclTerraform(this._tokenendpointauthmethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      userinfourl: {
        value: cdktf.stringToHclTerraform(this._userinfourl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usernamefield: {
        value: cdktf.stringToHclTerraform(this._usernamefield),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
