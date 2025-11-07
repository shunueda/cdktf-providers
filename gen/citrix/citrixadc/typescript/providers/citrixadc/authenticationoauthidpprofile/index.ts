// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationoauthidpprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationoauthidpprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationoauthidpprofile#attributes Authenticationoauthidpprofile#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationoauthidpprofile#audience Authenticationoauthidpprofile#audience}
  */
  readonly audience?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationoauthidpprofile#clientid Authenticationoauthidpprofile#clientid}
  */
  readonly clientid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationoauthidpprofile#clientsecret Authenticationoauthidpprofile#clientsecret}
  */
  readonly clientsecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationoauthidpprofile#configservice Authenticationoauthidpprofile#configservice}
  */
  readonly configservice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationoauthidpprofile#defaultauthenticationgroup Authenticationoauthidpprofile#defaultauthenticationgroup}
  */
  readonly defaultauthenticationgroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationoauthidpprofile#encrypttoken Authenticationoauthidpprofile#encrypttoken}
  */
  readonly encrypttoken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationoauthidpprofile#id Authenticationoauthidpprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationoauthidpprofile#issuer Authenticationoauthidpprofile#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationoauthidpprofile#name Authenticationoauthidpprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationoauthidpprofile#redirecturl Authenticationoauthidpprofile#redirecturl}
  */
  readonly redirecturl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationoauthidpprofile#refreshinterval Authenticationoauthidpprofile#refreshinterval}
  */
  readonly refreshinterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationoauthidpprofile#relyingpartymetadataurl Authenticationoauthidpprofile#relyingpartymetadataurl}
  */
  readonly relyingpartymetadataurl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationoauthidpprofile#sendpassword Authenticationoauthidpprofile#sendpassword}
  */
  readonly sendpassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationoauthidpprofile#signaturealg Authenticationoauthidpprofile#signaturealg}
  */
  readonly signaturealg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationoauthidpprofile#signatureservice Authenticationoauthidpprofile#signatureservice}
  */
  readonly signatureservice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationoauthidpprofile#skewtime Authenticationoauthidpprofile#skewtime}
  */
  readonly skewtime?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationoauthidpprofile citrixadc_authenticationoauthidpprofile}
*/
export class Authenticationoauthidpprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_authenticationoauthidpprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Authenticationoauthidpprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Authenticationoauthidpprofile to import
  * @param importFromId The id of the existing Authenticationoauthidpprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationoauthidpprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Authenticationoauthidpprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_authenticationoauthidpprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/authenticationoauthidpprofile citrixadc_authenticationoauthidpprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationoauthidpprofileConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationoauthidpprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_authenticationoauthidpprofile',
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
    this._attributes = config.attributes;
    this._audience = config.audience;
    this._clientid = config.clientid;
    this._clientsecret = config.clientsecret;
    this._configservice = config.configservice;
    this._defaultauthenticationgroup = config.defaultauthenticationgroup;
    this._encrypttoken = config.encrypttoken;
    this._id = config.id;
    this._issuer = config.issuer;
    this._name = config.name;
    this._redirecturl = config.redirecturl;
    this._refreshinterval = config.refreshinterval;
    this._relyingpartymetadataurl = config.relyingpartymetadataurl;
    this._sendpassword = config.sendpassword;
    this._signaturealg = config.signaturealg;
    this._signatureservice = config.signatureservice;
    this._skewtime = config.skewtime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // configservice - computed: true, optional: true, required: false
  private _configservice?: string; 
  public get configservice() {
    return this.getStringAttribute('configservice');
  }
  public set configservice(value: string) {
    this._configservice = value;
  }
  public resetConfigservice() {
    this._configservice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configserviceInput() {
    return this._configservice;
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

  // encrypttoken - computed: true, optional: true, required: false
  private _encrypttoken?: string; 
  public get encrypttoken() {
    return this.getStringAttribute('encrypttoken');
  }
  public set encrypttoken(value: string) {
    this._encrypttoken = value;
  }
  public resetEncrypttoken() {
    this._encrypttoken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encrypttokenInput() {
    return this._encrypttoken;
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

  // redirecturl - computed: false, optional: false, required: true
  private _redirecturl?: string; 
  public get redirecturl() {
    return this.getStringAttribute('redirecturl');
  }
  public set redirecturl(value: string) {
    this._redirecturl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirecturlInput() {
    return this._redirecturl;
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

  // relyingpartymetadataurl - computed: true, optional: true, required: false
  private _relyingpartymetadataurl?: string; 
  public get relyingpartymetadataurl() {
    return this.getStringAttribute('relyingpartymetadataurl');
  }
  public set relyingpartymetadataurl(value: string) {
    this._relyingpartymetadataurl = value;
  }
  public resetRelyingpartymetadataurl() {
    this._relyingpartymetadataurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relyingpartymetadataurlInput() {
    return this._relyingpartymetadataurl;
  }

  // sendpassword - computed: true, optional: true, required: false
  private _sendpassword?: string; 
  public get sendpassword() {
    return this.getStringAttribute('sendpassword');
  }
  public set sendpassword(value: string) {
    this._sendpassword = value;
  }
  public resetSendpassword() {
    this._sendpassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendpasswordInput() {
    return this._sendpassword;
  }

  // signaturealg - computed: true, optional: true, required: false
  private _signaturealg?: string; 
  public get signaturealg() {
    return this.getStringAttribute('signaturealg');
  }
  public set signaturealg(value: string) {
    this._signaturealg = value;
  }
  public resetSignaturealg() {
    this._signaturealg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signaturealgInput() {
    return this._signaturealg;
  }

  // signatureservice - computed: true, optional: true, required: false
  private _signatureservice?: string; 
  public get signatureservice() {
    return this.getStringAttribute('signatureservice');
  }
  public set signatureservice(value: string) {
    this._signatureservice = value;
  }
  public resetSignatureservice() {
    this._signatureservice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureserviceInput() {
    return this._signatureservice;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attributes: cdktf.stringToTerraform(this._attributes),
      audience: cdktf.stringToTerraform(this._audience),
      clientid: cdktf.stringToTerraform(this._clientid),
      clientsecret: cdktf.stringToTerraform(this._clientsecret),
      configservice: cdktf.stringToTerraform(this._configservice),
      defaultauthenticationgroup: cdktf.stringToTerraform(this._defaultauthenticationgroup),
      encrypttoken: cdktf.stringToTerraform(this._encrypttoken),
      id: cdktf.stringToTerraform(this._id),
      issuer: cdktf.stringToTerraform(this._issuer),
      name: cdktf.stringToTerraform(this._name),
      redirecturl: cdktf.stringToTerraform(this._redirecturl),
      refreshinterval: cdktf.numberToTerraform(this._refreshinterval),
      relyingpartymetadataurl: cdktf.stringToTerraform(this._relyingpartymetadataurl),
      sendpassword: cdktf.stringToTerraform(this._sendpassword),
      signaturealg: cdktf.stringToTerraform(this._signaturealg),
      signatureservice: cdktf.stringToTerraform(this._signatureservice),
      skewtime: cdktf.numberToTerraform(this._skewtime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      configservice: {
        value: cdktf.stringToHclTerraform(this._configservice),
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
      encrypttoken: {
        value: cdktf.stringToHclTerraform(this._encrypttoken),
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
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
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
      redirecturl: {
        value: cdktf.stringToHclTerraform(this._redirecturl),
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
      relyingpartymetadataurl: {
        value: cdktf.stringToHclTerraform(this._relyingpartymetadataurl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sendpassword: {
        value: cdktf.stringToHclTerraform(this._sendpassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signaturealg: {
        value: cdktf.stringToHclTerraform(this._signaturealg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signatureservice: {
        value: cdktf.stringToHclTerraform(this._signatureservice),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
