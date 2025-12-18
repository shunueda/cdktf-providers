// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationradiusactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction#accounting Authenticationradiusaction#accounting}
  */
  readonly accounting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction#authentication Authenticationradiusaction#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction#authservretry Authenticationradiusaction#authservretry}
  */
  readonly authservretry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction#authtimeout Authenticationradiusaction#authtimeout}
  */
  readonly authtimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction#callingstationid Authenticationradiusaction#callingstationid}
  */
  readonly callingstationid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction#defaultauthenticationgroup Authenticationradiusaction#defaultauthenticationgroup}
  */
  readonly defaultauthenticationgroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction#id Authenticationradiusaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction#ipattributetype Authenticationradiusaction#ipattributetype}
  */
  readonly ipattributetype?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction#ipvendorid Authenticationradiusaction#ipvendorid}
  */
  readonly ipvendorid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction#messageauthenticator Authenticationradiusaction#messageauthenticator}
  */
  readonly messageauthenticator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction#name Authenticationradiusaction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction#passencoding Authenticationradiusaction#passencoding}
  */
  readonly passencoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction#pwdattributetype Authenticationradiusaction#pwdattributetype}
  */
  readonly pwdattributetype?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction#pwdvendorid Authenticationradiusaction#pwdvendorid}
  */
  readonly pwdvendorid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction#radattributetype Authenticationradiusaction#radattributetype}
  */
  readonly radattributetype?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction#radgroupseparator Authenticationradiusaction#radgroupseparator}
  */
  readonly radgroupseparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction#radgroupsprefix Authenticationradiusaction#radgroupsprefix}
  */
  readonly radgroupsprefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction#radkey Authenticationradiusaction#radkey}
  */
  readonly radkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction#radnasid Authenticationradiusaction#radnasid}
  */
  readonly radnasid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction#radnasip Authenticationradiusaction#radnasip}
  */
  readonly radnasip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction#radvendorid Authenticationradiusaction#radvendorid}
  */
  readonly radvendorid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction#serverip Authenticationradiusaction#serverip}
  */
  readonly serverip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction#servername Authenticationradiusaction#servername}
  */
  readonly servername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction#serverport Authenticationradiusaction#serverport}
  */
  readonly serverport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction#targetlbvserver Authenticationradiusaction#targetlbvserver}
  */
  readonly targetlbvserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction#transport Authenticationradiusaction#transport}
  */
  readonly transport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction#tunnelendpointclientip Authenticationradiusaction#tunnelendpointclientip}
  */
  readonly tunnelendpointclientip?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction citrixadc_authenticationradiusaction}
*/
export class Authenticationradiusaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_authenticationradiusaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Authenticationradiusaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Authenticationradiusaction to import
  * @param importFromId The id of the existing Authenticationradiusaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Authenticationradiusaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_authenticationradiusaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationradiusaction citrixadc_authenticationradiusaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationradiusactionConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationradiusactionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_authenticationradiusaction',
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
    this._accounting = config.accounting;
    this._authentication = config.authentication;
    this._authservretry = config.authservretry;
    this._authtimeout = config.authtimeout;
    this._callingstationid = config.callingstationid;
    this._defaultauthenticationgroup = config.defaultauthenticationgroup;
    this._id = config.id;
    this._ipattributetype = config.ipattributetype;
    this._ipvendorid = config.ipvendorid;
    this._messageauthenticator = config.messageauthenticator;
    this._name = config.name;
    this._passencoding = config.passencoding;
    this._pwdattributetype = config.pwdattributetype;
    this._pwdvendorid = config.pwdvendorid;
    this._radattributetype = config.radattributetype;
    this._radgroupseparator = config.radgroupseparator;
    this._radgroupsprefix = config.radgroupsprefix;
    this._radkey = config.radkey;
    this._radnasid = config.radnasid;
    this._radnasip = config.radnasip;
    this._radvendorid = config.radvendorid;
    this._serverip = config.serverip;
    this._servername = config.servername;
    this._serverport = config.serverport;
    this._targetlbvserver = config.targetlbvserver;
    this._transport = config.transport;
    this._tunnelendpointclientip = config.tunnelendpointclientip;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accounting - computed: true, optional: true, required: false
  private _accounting?: string; 
  public get accounting() {
    return this.getStringAttribute('accounting');
  }
  public set accounting(value: string) {
    this._accounting = value;
  }
  public resetAccounting() {
    this._accounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingInput() {
    return this._accounting;
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

  // authservretry - computed: true, optional: true, required: false
  private _authservretry?: number; 
  public get authservretry() {
    return this.getNumberAttribute('authservretry');
  }
  public set authservretry(value: number) {
    this._authservretry = value;
  }
  public resetAuthservretry() {
    this._authservretry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authservretryInput() {
    return this._authservretry;
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

  // callingstationid - computed: true, optional: true, required: false
  private _callingstationid?: string; 
  public get callingstationid() {
    return this.getStringAttribute('callingstationid');
  }
  public set callingstationid(value: string) {
    this._callingstationid = value;
  }
  public resetCallingstationid() {
    this._callingstationid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callingstationidInput() {
    return this._callingstationid;
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

  // ipattributetype - computed: true, optional: true, required: false
  private _ipattributetype?: number; 
  public get ipattributetype() {
    return this.getNumberAttribute('ipattributetype');
  }
  public set ipattributetype(value: number) {
    this._ipattributetype = value;
  }
  public resetIpattributetype() {
    this._ipattributetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipattributetypeInput() {
    return this._ipattributetype;
  }

  // ipvendorid - computed: true, optional: true, required: false
  private _ipvendorid?: number; 
  public get ipvendorid() {
    return this.getNumberAttribute('ipvendorid');
  }
  public set ipvendorid(value: number) {
    this._ipvendorid = value;
  }
  public resetIpvendorid() {
    this._ipvendorid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipvendoridInput() {
    return this._ipvendorid;
  }

  // messageauthenticator - computed: true, optional: true, required: false
  private _messageauthenticator?: string; 
  public get messageauthenticator() {
    return this.getStringAttribute('messageauthenticator');
  }
  public set messageauthenticator(value: string) {
    this._messageauthenticator = value;
  }
  public resetMessageauthenticator() {
    this._messageauthenticator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageauthenticatorInput() {
    return this._messageauthenticator;
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

  // passencoding - computed: true, optional: true, required: false
  private _passencoding?: string; 
  public get passencoding() {
    return this.getStringAttribute('passencoding');
  }
  public set passencoding(value: string) {
    this._passencoding = value;
  }
  public resetPassencoding() {
    this._passencoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passencodingInput() {
    return this._passencoding;
  }

  // pwdattributetype - computed: true, optional: true, required: false
  private _pwdattributetype?: number; 
  public get pwdattributetype() {
    return this.getNumberAttribute('pwdattributetype');
  }
  public set pwdattributetype(value: number) {
    this._pwdattributetype = value;
  }
  public resetPwdattributetype() {
    this._pwdattributetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwdattributetypeInput() {
    return this._pwdattributetype;
  }

  // pwdvendorid - computed: true, optional: true, required: false
  private _pwdvendorid?: number; 
  public get pwdvendorid() {
    return this.getNumberAttribute('pwdvendorid');
  }
  public set pwdvendorid(value: number) {
    this._pwdvendorid = value;
  }
  public resetPwdvendorid() {
    this._pwdvendorid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwdvendoridInput() {
    return this._pwdvendorid;
  }

  // radattributetype - computed: true, optional: true, required: false
  private _radattributetype?: number; 
  public get radattributetype() {
    return this.getNumberAttribute('radattributetype');
  }
  public set radattributetype(value: number) {
    this._radattributetype = value;
  }
  public resetRadattributetype() {
    this._radattributetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radattributetypeInput() {
    return this._radattributetype;
  }

  // radgroupseparator - computed: true, optional: true, required: false
  private _radgroupseparator?: string; 
  public get radgroupseparator() {
    return this.getStringAttribute('radgroupseparator');
  }
  public set radgroupseparator(value: string) {
    this._radgroupseparator = value;
  }
  public resetRadgroupseparator() {
    this._radgroupseparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radgroupseparatorInput() {
    return this._radgroupseparator;
  }

  // radgroupsprefix - computed: true, optional: true, required: false
  private _radgroupsprefix?: string; 
  public get radgroupsprefix() {
    return this.getStringAttribute('radgroupsprefix');
  }
  public set radgroupsprefix(value: string) {
    this._radgroupsprefix = value;
  }
  public resetRadgroupsprefix() {
    this._radgroupsprefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radgroupsprefixInput() {
    return this._radgroupsprefix;
  }

  // radkey - computed: false, optional: false, required: true
  private _radkey?: string; 
  public get radkey() {
    return this.getStringAttribute('radkey');
  }
  public set radkey(value: string) {
    this._radkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get radkeyInput() {
    return this._radkey;
  }

  // radnasid - computed: true, optional: true, required: false
  private _radnasid?: string; 
  public get radnasid() {
    return this.getStringAttribute('radnasid');
  }
  public set radnasid(value: string) {
    this._radnasid = value;
  }
  public resetRadnasid() {
    this._radnasid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radnasidInput() {
    return this._radnasid;
  }

  // radnasip - computed: true, optional: true, required: false
  private _radnasip?: string; 
  public get radnasip() {
    return this.getStringAttribute('radnasip');
  }
  public set radnasip(value: string) {
    this._radnasip = value;
  }
  public resetRadnasip() {
    this._radnasip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radnasipInput() {
    return this._radnasip;
  }

  // radvendorid - computed: true, optional: true, required: false
  private _radvendorid?: number; 
  public get radvendorid() {
    return this.getNumberAttribute('radvendorid');
  }
  public set radvendorid(value: number) {
    this._radvendorid = value;
  }
  public resetRadvendorid() {
    this._radvendorid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radvendoridInput() {
    return this._radvendorid;
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

  // targetlbvserver - computed: true, optional: true, required: false
  private _targetlbvserver?: string; 
  public get targetlbvserver() {
    return this.getStringAttribute('targetlbvserver');
  }
  public set targetlbvserver(value: string) {
    this._targetlbvserver = value;
  }
  public resetTargetlbvserver() {
    this._targetlbvserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetlbvserverInput() {
    return this._targetlbvserver;
  }

  // transport - computed: true, optional: true, required: false
  private _transport?: string; 
  public get transport() {
    return this.getStringAttribute('transport');
  }
  public set transport(value: string) {
    this._transport = value;
  }
  public resetTransport() {
    this._transport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport;
  }

  // tunnelendpointclientip - computed: true, optional: true, required: false
  private _tunnelendpointclientip?: string; 
  public get tunnelendpointclientip() {
    return this.getStringAttribute('tunnelendpointclientip');
  }
  public set tunnelendpointclientip(value: string) {
    this._tunnelendpointclientip = value;
  }
  public resetTunnelendpointclientip() {
    this._tunnelendpointclientip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelendpointclientipInput() {
    return this._tunnelendpointclientip;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accounting: cdktf.stringToTerraform(this._accounting),
      authentication: cdktf.stringToTerraform(this._authentication),
      authservretry: cdktf.numberToTerraform(this._authservretry),
      authtimeout: cdktf.numberToTerraform(this._authtimeout),
      callingstationid: cdktf.stringToTerraform(this._callingstationid),
      defaultauthenticationgroup: cdktf.stringToTerraform(this._defaultauthenticationgroup),
      id: cdktf.stringToTerraform(this._id),
      ipattributetype: cdktf.numberToTerraform(this._ipattributetype),
      ipvendorid: cdktf.numberToTerraform(this._ipvendorid),
      messageauthenticator: cdktf.stringToTerraform(this._messageauthenticator),
      name: cdktf.stringToTerraform(this._name),
      passencoding: cdktf.stringToTerraform(this._passencoding),
      pwdattributetype: cdktf.numberToTerraform(this._pwdattributetype),
      pwdvendorid: cdktf.numberToTerraform(this._pwdvendorid),
      radattributetype: cdktf.numberToTerraform(this._radattributetype),
      radgroupseparator: cdktf.stringToTerraform(this._radgroupseparator),
      radgroupsprefix: cdktf.stringToTerraform(this._radgroupsprefix),
      radkey: cdktf.stringToTerraform(this._radkey),
      radnasid: cdktf.stringToTerraform(this._radnasid),
      radnasip: cdktf.stringToTerraform(this._radnasip),
      radvendorid: cdktf.numberToTerraform(this._radvendorid),
      serverip: cdktf.stringToTerraform(this._serverip),
      servername: cdktf.stringToTerraform(this._servername),
      serverport: cdktf.numberToTerraform(this._serverport),
      targetlbvserver: cdktf.stringToTerraform(this._targetlbvserver),
      transport: cdktf.stringToTerraform(this._transport),
      tunnelendpointclientip: cdktf.stringToTerraform(this._tunnelendpointclientip),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accounting: {
        value: cdktf.stringToHclTerraform(this._accounting),
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
      authservretry: {
        value: cdktf.numberToHclTerraform(this._authservretry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authtimeout: {
        value: cdktf.numberToHclTerraform(this._authtimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      callingstationid: {
        value: cdktf.stringToHclTerraform(this._callingstationid),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipattributetype: {
        value: cdktf.numberToHclTerraform(this._ipattributetype),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipvendorid: {
        value: cdktf.numberToHclTerraform(this._ipvendorid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      messageauthenticator: {
        value: cdktf.stringToHclTerraform(this._messageauthenticator),
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
      passencoding: {
        value: cdktf.stringToHclTerraform(this._passencoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pwdattributetype: {
        value: cdktf.numberToHclTerraform(this._pwdattributetype),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pwdvendorid: {
        value: cdktf.numberToHclTerraform(this._pwdvendorid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radattributetype: {
        value: cdktf.numberToHclTerraform(this._radattributetype),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radgroupseparator: {
        value: cdktf.stringToHclTerraform(this._radgroupseparator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radgroupsprefix: {
        value: cdktf.stringToHclTerraform(this._radgroupsprefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radkey: {
        value: cdktf.stringToHclTerraform(this._radkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radnasid: {
        value: cdktf.stringToHclTerraform(this._radnasid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radnasip: {
        value: cdktf.stringToHclTerraform(this._radnasip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radvendorid: {
        value: cdktf.numberToHclTerraform(this._radvendorid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      targetlbvserver: {
        value: cdktf.stringToHclTerraform(this._targetlbvserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport: {
        value: cdktf.stringToHclTerraform(this._transport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnelendpointclientip: {
        value: cdktf.stringToHclTerraform(this._tunnelendpointclientip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
