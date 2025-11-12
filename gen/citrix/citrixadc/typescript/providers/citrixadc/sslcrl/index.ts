// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcrl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslcrlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcrl#basedn Sslcrl#basedn}
  */
  readonly basedn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcrl#binary Sslcrl#binary}
  */
  readonly binary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcrl#binddn Sslcrl#binddn}
  */
  readonly binddn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcrl#cacert Sslcrl#cacert}
  */
  readonly cacert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcrl#cacertfile Sslcrl#cacertfile}
  */
  readonly cacertfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcrl#cakeyfile Sslcrl#cakeyfile}
  */
  readonly cakeyfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcrl#crlname Sslcrl#crlname}
  */
  readonly crlname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcrl#crlpath Sslcrl#crlpath}
  */
  readonly crlpath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcrl#day Sslcrl#day}
  */
  readonly day?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcrl#gencrl Sslcrl#gencrl}
  */
  readonly gencrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcrl#id Sslcrl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcrl#indexfile Sslcrl#indexfile}
  */
  readonly indexfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcrl#inform Sslcrl#inform}
  */
  readonly inform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcrl#interval Sslcrl#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcrl#method Sslcrl#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcrl#password Sslcrl#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcrl#port Sslcrl#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcrl#refresh Sslcrl#refresh}
  */
  readonly refresh?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcrl#revoke Sslcrl#revoke}
  */
  readonly revoke?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcrl#scope Sslcrl#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcrl#server Sslcrl#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcrl#time Sslcrl#time}
  */
  readonly time?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcrl#url Sslcrl#url}
  */
  readonly url?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcrl citrixadc_sslcrl}
*/
export class Sslcrl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_sslcrl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sslcrl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sslcrl to import
  * @param importFromId The id of the existing Sslcrl that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcrl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sslcrl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_sslcrl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcrl citrixadc_sslcrl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslcrlConfig
  */
  public constructor(scope: Construct, id: string, config: SslcrlConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_sslcrl',
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
    this._basedn = config.basedn;
    this._binary = config.binary;
    this._binddn = config.binddn;
    this._cacert = config.cacert;
    this._cacertfile = config.cacertfile;
    this._cakeyfile = config.cakeyfile;
    this._crlname = config.crlname;
    this._crlpath = config.crlpath;
    this._day = config.day;
    this._gencrl = config.gencrl;
    this._id = config.id;
    this._indexfile = config.indexfile;
    this._inform = config.inform;
    this._interval = config.interval;
    this._method = config.method;
    this._password = config.password;
    this._port = config.port;
    this._refresh = config.refresh;
    this._revoke = config.revoke;
    this._scope = config.scope;
    this._server = config.server;
    this._time = config.time;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // basedn - computed: true, optional: true, required: false
  private _basedn?: string; 
  public get basedn() {
    return this.getStringAttribute('basedn');
  }
  public set basedn(value: string) {
    this._basedn = value;
  }
  public resetBasedn() {
    this._basedn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basednInput() {
    return this._basedn;
  }

  // binary - computed: true, optional: true, required: false
  private _binary?: string; 
  public get binary() {
    return this.getStringAttribute('binary');
  }
  public set binary(value: string) {
    this._binary = value;
  }
  public resetBinary() {
    this._binary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryInput() {
    return this._binary;
  }

  // binddn - computed: true, optional: true, required: false
  private _binddn?: string; 
  public get binddn() {
    return this.getStringAttribute('binddn');
  }
  public set binddn(value: string) {
    this._binddn = value;
  }
  public resetBinddn() {
    this._binddn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binddnInput() {
    return this._binddn;
  }

  // cacert - computed: true, optional: true, required: false
  private _cacert?: string; 
  public get cacert() {
    return this.getStringAttribute('cacert');
  }
  public set cacert(value: string) {
    this._cacert = value;
  }
  public resetCacert() {
    this._cacert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertInput() {
    return this._cacert;
  }

  // cacertfile - computed: true, optional: true, required: false
  private _cacertfile?: string; 
  public get cacertfile() {
    return this.getStringAttribute('cacertfile');
  }
  public set cacertfile(value: string) {
    this._cacertfile = value;
  }
  public resetCacertfile() {
    this._cacertfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertfileInput() {
    return this._cacertfile;
  }

  // cakeyfile - computed: true, optional: true, required: false
  private _cakeyfile?: string; 
  public get cakeyfile() {
    return this.getStringAttribute('cakeyfile');
  }
  public set cakeyfile(value: string) {
    this._cakeyfile = value;
  }
  public resetCakeyfile() {
    this._cakeyfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cakeyfileInput() {
    return this._cakeyfile;
  }

  // crlname - computed: false, optional: false, required: true
  private _crlname?: string; 
  public get crlname() {
    return this.getStringAttribute('crlname');
  }
  public set crlname(value: string) {
    this._crlname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crlnameInput() {
    return this._crlname;
  }

  // crlpath - computed: false, optional: false, required: true
  private _crlpath?: string; 
  public get crlpath() {
    return this.getStringAttribute('crlpath');
  }
  public set crlpath(value: string) {
    this._crlpath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crlpathInput() {
    return this._crlpath;
  }

  // day - computed: true, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // gencrl - computed: true, optional: true, required: false
  private _gencrl?: string; 
  public get gencrl() {
    return this.getStringAttribute('gencrl');
  }
  public set gencrl(value: string) {
    this._gencrl = value;
  }
  public resetGencrl() {
    this._gencrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gencrlInput() {
    return this._gencrl;
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

  // indexfile - computed: true, optional: true, required: false
  private _indexfile?: string; 
  public get indexfile() {
    return this.getStringAttribute('indexfile');
  }
  public set indexfile(value: string) {
    this._indexfile = value;
  }
  public resetIndexfile() {
    this._indexfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexfileInput() {
    return this._indexfile;
  }

  // inform - computed: true, optional: true, required: false
  private _inform?: string; 
  public get inform() {
    return this.getStringAttribute('inform');
  }
  public set inform(value: string) {
    this._inform = value;
  }
  public resetInform() {
    this._inform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get informInput() {
    return this._inform;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // method - computed: true, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // refresh - computed: true, optional: true, required: false
  private _refresh?: string; 
  public get refresh() {
    return this.getStringAttribute('refresh');
  }
  public set refresh(value: string) {
    this._refresh = value;
  }
  public resetRefresh() {
    this._refresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshInput() {
    return this._refresh;
  }

  // revoke - computed: true, optional: true, required: false
  private _revoke?: string; 
  public get revoke() {
    return this.getStringAttribute('revoke');
  }
  public set revoke(value: string) {
    this._revoke = value;
  }
  public resetRevoke() {
    this._revoke = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokeInput() {
    return this._revoke;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // server - computed: true, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // time - computed: true, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      basedn: cdktf.stringToTerraform(this._basedn),
      binary: cdktf.stringToTerraform(this._binary),
      binddn: cdktf.stringToTerraform(this._binddn),
      cacert: cdktf.stringToTerraform(this._cacert),
      cacertfile: cdktf.stringToTerraform(this._cacertfile),
      cakeyfile: cdktf.stringToTerraform(this._cakeyfile),
      crlname: cdktf.stringToTerraform(this._crlname),
      crlpath: cdktf.stringToTerraform(this._crlpath),
      day: cdktf.numberToTerraform(this._day),
      gencrl: cdktf.stringToTerraform(this._gencrl),
      id: cdktf.stringToTerraform(this._id),
      indexfile: cdktf.stringToTerraform(this._indexfile),
      inform: cdktf.stringToTerraform(this._inform),
      interval: cdktf.stringToTerraform(this._interval),
      method: cdktf.stringToTerraform(this._method),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      refresh: cdktf.stringToTerraform(this._refresh),
      revoke: cdktf.stringToTerraform(this._revoke),
      scope: cdktf.stringToTerraform(this._scope),
      server: cdktf.stringToTerraform(this._server),
      time: cdktf.stringToTerraform(this._time),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      basedn: {
        value: cdktf.stringToHclTerraform(this._basedn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      binary: {
        value: cdktf.stringToHclTerraform(this._binary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      binddn: {
        value: cdktf.stringToHclTerraform(this._binddn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cacert: {
        value: cdktf.stringToHclTerraform(this._cacert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cacertfile: {
        value: cdktf.stringToHclTerraform(this._cacertfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cakeyfile: {
        value: cdktf.stringToHclTerraform(this._cakeyfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crlname: {
        value: cdktf.stringToHclTerraform(this._crlname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crlpath: {
        value: cdktf.stringToHclTerraform(this._crlpath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      day: {
        value: cdktf.numberToHclTerraform(this._day),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gencrl: {
        value: cdktf.stringToHclTerraform(this._gencrl),
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
      indexfile: {
        value: cdktf.stringToHclTerraform(this._indexfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inform: {
        value: cdktf.stringToHclTerraform(this._inform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      method: {
        value: cdktf.stringToHclTerraform(this._method),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      refresh: {
        value: cdktf.stringToHclTerraform(this._refresh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revoke: {
        value: cdktf.stringToHclTerraform(this._revoke),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time: {
        value: cdktf.stringToHclTerraform(this._time),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
