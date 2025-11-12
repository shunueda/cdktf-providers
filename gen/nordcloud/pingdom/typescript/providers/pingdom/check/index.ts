// https://registry.terraform.io/providers/nordcloud/pingdom/1.1.4/docs/resources/check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nordcloud/pingdom/1.1.4/docs/resources/check#encryption Check#encryption}
  */
  readonly encryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nordcloud/pingdom/1.1.4/docs/resources/check#host Check#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nordcloud/pingdom/1.1.4/docs/resources/check#id Check#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nordcloud/pingdom/1.1.4/docs/resources/check#integrationids Check#integrationids}
  */
  readonly integrationids?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nordcloud/pingdom/1.1.4/docs/resources/check#name Check#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nordcloud/pingdom/1.1.4/docs/resources/check#notifyagainevery Check#notifyagainevery}
  */
  readonly notifyagainevery?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nordcloud/pingdom/1.1.4/docs/resources/check#notifywhenbackup Check#notifywhenbackup}
  */
  readonly notifywhenbackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nordcloud/pingdom/1.1.4/docs/resources/check#password Check#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nordcloud/pingdom/1.1.4/docs/resources/check#paused Check#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nordcloud/pingdom/1.1.4/docs/resources/check#port Check#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nordcloud/pingdom/1.1.4/docs/resources/check#postdata Check#postdata}
  */
  readonly postdata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nordcloud/pingdom/1.1.4/docs/resources/check#probefilters Check#probefilters}
  */
  readonly probefilters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nordcloud/pingdom/1.1.4/docs/resources/check#requestheaders Check#requestheaders}
  */
  readonly requestheaders?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nordcloud/pingdom/1.1.4/docs/resources/check#resolution Check#resolution}
  */
  readonly resolution: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nordcloud/pingdom/1.1.4/docs/resources/check#responsetime_threshold Check#responsetime_threshold}
  */
  readonly responsetimeThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nordcloud/pingdom/1.1.4/docs/resources/check#sendnotificationwhendown Check#sendnotificationwhendown}
  */
  readonly sendnotificationwhendown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nordcloud/pingdom/1.1.4/docs/resources/check#shouldcontain Check#shouldcontain}
  */
  readonly shouldcontain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nordcloud/pingdom/1.1.4/docs/resources/check#shouldnotcontain Check#shouldnotcontain}
  */
  readonly shouldnotcontain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nordcloud/pingdom/1.1.4/docs/resources/check#stringtoexpect Check#stringtoexpect}
  */
  readonly stringtoexpect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nordcloud/pingdom/1.1.4/docs/resources/check#stringtosend Check#stringtosend}
  */
  readonly stringtosend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nordcloud/pingdom/1.1.4/docs/resources/check#tags Check#tags}
  */
  readonly tags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nordcloud/pingdom/1.1.4/docs/resources/check#teamids Check#teamids}
  */
  readonly teamids?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nordcloud/pingdom/1.1.4/docs/resources/check#type Check#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nordcloud/pingdom/1.1.4/docs/resources/check#url Check#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nordcloud/pingdom/1.1.4/docs/resources/check#userids Check#userids}
  */
  readonly userids?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nordcloud/pingdom/1.1.4/docs/resources/check#username Check#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nordcloud/pingdom/1.1.4/docs/resources/check pingdom_check}
*/
export class Check extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdom_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Check resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Check to import
  * @param importFromId The id of the existing Check that should be imported. Refer to the {@link https://registry.terraform.io/providers/nordcloud/pingdom/1.1.4/docs/resources/check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Check to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdom_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nordcloud/pingdom/1.1.4/docs/resources/check pingdom_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CheckConfig
  */
  public constructor(scope: Construct, id: string, config: CheckConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdom_check',
      terraformGeneratorMetadata: {
        providerName: 'pingdom',
        providerVersion: '1.1.4',
        providerVersionConstraint: '1.1.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._encryption = config.encryption;
    this._host = config.host;
    this._id = config.id;
    this._integrationids = config.integrationids;
    this._name = config.name;
    this._notifyagainevery = config.notifyagainevery;
    this._notifywhenbackup = config.notifywhenbackup;
    this._password = config.password;
    this._paused = config.paused;
    this._port = config.port;
    this._postdata = config.postdata;
    this._probefilters = config.probefilters;
    this._requestheaders = config.requestheaders;
    this._resolution = config.resolution;
    this._responsetimeThreshold = config.responsetimeThreshold;
    this._sendnotificationwhendown = config.sendnotificationwhendown;
    this._shouldcontain = config.shouldcontain;
    this._shouldnotcontain = config.shouldnotcontain;
    this._stringtoexpect = config.stringtoexpect;
    this._stringtosend = config.stringtosend;
    this._tags = config.tags;
    this._teamids = config.teamids;
    this._type = config.type;
    this._url = config.url;
    this._userids = config.userids;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // encryption - computed: false, optional: true, required: false
  private _encryption?: boolean | cdktf.IResolvable; 
  public get encryption() {
    return this.getBooleanAttribute('encryption');
  }
  public set encryption(value: boolean | cdktf.IResolvable) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // integrationids - computed: false, optional: true, required: false
  private _integrationids?: number[]; 
  public get integrationids() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('integrationids')));
  }
  public set integrationids(value: number[]) {
    this._integrationids = value;
  }
  public resetIntegrationids() {
    this._integrationids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationidsInput() {
    return this._integrationids;
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

  // notifyagainevery - computed: false, optional: true, required: false
  private _notifyagainevery?: number; 
  public get notifyagainevery() {
    return this.getNumberAttribute('notifyagainevery');
  }
  public set notifyagainevery(value: number) {
    this._notifyagainevery = value;
  }
  public resetNotifyagainevery() {
    this._notifyagainevery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyagaineveryInput() {
    return this._notifyagainevery;
  }

  // notifywhenbackup - computed: true, optional: true, required: false
  private _notifywhenbackup?: boolean | cdktf.IResolvable; 
  public get notifywhenbackup() {
    return this.getBooleanAttribute('notifywhenbackup');
  }
  public set notifywhenbackup(value: boolean | cdktf.IResolvable) {
    this._notifywhenbackup = value;
  }
  public resetNotifywhenbackup() {
    this._notifywhenbackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifywhenbackupInput() {
    return this._notifywhenbackup;
  }

  // password - computed: false, optional: true, required: false
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

  // paused - computed: false, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
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

  // postdata - computed: false, optional: true, required: false
  private _postdata?: string; 
  public get postdata() {
    return this.getStringAttribute('postdata');
  }
  public set postdata(value: string) {
    this._postdata = value;
  }
  public resetPostdata() {
    this._postdata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postdataInput() {
    return this._postdata;
  }

  // probefilters - computed: false, optional: true, required: false
  private _probefilters?: string; 
  public get probefilters() {
    return this.getStringAttribute('probefilters');
  }
  public set probefilters(value: string) {
    this._probefilters = value;
  }
  public resetProbefilters() {
    this._probefilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probefiltersInput() {
    return this._probefilters;
  }

  // requestheaders - computed: false, optional: true, required: false
  private _requestheaders?: { [key: string]: string }; 
  public get requestheaders() {
    return this.getStringMapAttribute('requestheaders');
  }
  public set requestheaders(value: { [key: string]: string }) {
    this._requestheaders = value;
  }
  public resetRequestheaders() {
    this._requestheaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestheadersInput() {
    return this._requestheaders;
  }

  // resolution - computed: false, optional: false, required: true
  private _resolution?: number; 
  public get resolution() {
    return this.getNumberAttribute('resolution');
  }
  public set resolution(value: number) {
    this._resolution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionInput() {
    return this._resolution;
  }

  // responsetime_threshold - computed: true, optional: true, required: false
  private _responsetimeThreshold?: number; 
  public get responsetimeThreshold() {
    return this.getNumberAttribute('responsetime_threshold');
  }
  public set responsetimeThreshold(value: number) {
    this._responsetimeThreshold = value;
  }
  public resetResponsetimeThreshold() {
    this._responsetimeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsetimeThresholdInput() {
    return this._responsetimeThreshold;
  }

  // sendnotificationwhendown - computed: true, optional: true, required: false
  private _sendnotificationwhendown?: number; 
  public get sendnotificationwhendown() {
    return this.getNumberAttribute('sendnotificationwhendown');
  }
  public set sendnotificationwhendown(value: number) {
    this._sendnotificationwhendown = value;
  }
  public resetSendnotificationwhendown() {
    this._sendnotificationwhendown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendnotificationwhendownInput() {
    return this._sendnotificationwhendown;
  }

  // shouldcontain - computed: false, optional: true, required: false
  private _shouldcontain?: string; 
  public get shouldcontain() {
    return this.getStringAttribute('shouldcontain');
  }
  public set shouldcontain(value: string) {
    this._shouldcontain = value;
  }
  public resetShouldcontain() {
    this._shouldcontain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldcontainInput() {
    return this._shouldcontain;
  }

  // shouldnotcontain - computed: false, optional: true, required: false
  private _shouldnotcontain?: string; 
  public get shouldnotcontain() {
    return this.getStringAttribute('shouldnotcontain');
  }
  public set shouldnotcontain(value: string) {
    this._shouldnotcontain = value;
  }
  public resetShouldnotcontain() {
    this._shouldnotcontain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldnotcontainInput() {
    return this._shouldnotcontain;
  }

  // stringtoexpect - computed: false, optional: true, required: false
  private _stringtoexpect?: string; 
  public get stringtoexpect() {
    return this.getStringAttribute('stringtoexpect');
  }
  public set stringtoexpect(value: string) {
    this._stringtoexpect = value;
  }
  public resetStringtoexpect() {
    this._stringtoexpect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringtoexpectInput() {
    return this._stringtoexpect;
  }

  // stringtosend - computed: false, optional: true, required: false
  private _stringtosend?: string; 
  public get stringtosend() {
    return this.getStringAttribute('stringtosend');
  }
  public set stringtosend(value: string) {
    this._stringtosend = value;
  }
  public resetStringtosend() {
    this._stringtosend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringtosendInput() {
    return this._stringtosend;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // teamids - computed: false, optional: true, required: false
  private _teamids?: number[]; 
  public get teamids() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('teamids')));
  }
  public set teamids(value: number[]) {
    this._teamids = value;
  }
  public resetTeamids() {
    this._teamids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamidsInput() {
    return this._teamids;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // url - computed: false, optional: true, required: false
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

  // userids - computed: false, optional: true, required: false
  private _userids?: number[]; 
  public get userids() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('userids')));
  }
  public set userids(value: number[]) {
    this._userids = value;
  }
  public resetUserids() {
    this._userids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useridsInput() {
    return this._userids;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      encryption: cdktf.booleanToTerraform(this._encryption),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      integrationids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._integrationids),
      name: cdktf.stringToTerraform(this._name),
      notifyagainevery: cdktf.numberToTerraform(this._notifyagainevery),
      notifywhenbackup: cdktf.booleanToTerraform(this._notifywhenbackup),
      password: cdktf.stringToTerraform(this._password),
      paused: cdktf.booleanToTerraform(this._paused),
      port: cdktf.numberToTerraform(this._port),
      postdata: cdktf.stringToTerraform(this._postdata),
      probefilters: cdktf.stringToTerraform(this._probefilters),
      requestheaders: cdktf.hashMapper(cdktf.stringToTerraform)(this._requestheaders),
      resolution: cdktf.numberToTerraform(this._resolution),
      responsetime_threshold: cdktf.numberToTerraform(this._responsetimeThreshold),
      sendnotificationwhendown: cdktf.numberToTerraform(this._sendnotificationwhendown),
      shouldcontain: cdktf.stringToTerraform(this._shouldcontain),
      shouldnotcontain: cdktf.stringToTerraform(this._shouldnotcontain),
      stringtoexpect: cdktf.stringToTerraform(this._stringtoexpect),
      stringtosend: cdktf.stringToTerraform(this._stringtosend),
      tags: cdktf.stringToTerraform(this._tags),
      teamids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._teamids),
      type: cdktf.stringToTerraform(this._type),
      url: cdktf.stringToTerraform(this._url),
      userids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._userids),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      encryption: {
        value: cdktf.booleanToHclTerraform(this._encryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      integrationids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._integrationids),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notifyagainevery: {
        value: cdktf.numberToHclTerraform(this._notifyagainevery),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      notifywhenbackup: {
        value: cdktf.booleanToHclTerraform(this._notifywhenbackup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      paused: {
        value: cdktf.booleanToHclTerraform(this._paused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      postdata: {
        value: cdktf.stringToHclTerraform(this._postdata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      probefilters: {
        value: cdktf.stringToHclTerraform(this._probefilters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requestheaders: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._requestheaders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      resolution: {
        value: cdktf.numberToHclTerraform(this._resolution),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      responsetime_threshold: {
        value: cdktf.numberToHclTerraform(this._responsetimeThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sendnotificationwhendown: {
        value: cdktf.numberToHclTerraform(this._sendnotificationwhendown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shouldcontain: {
        value: cdktf.stringToHclTerraform(this._shouldcontain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shouldnotcontain: {
        value: cdktf.stringToHclTerraform(this._shouldnotcontain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stringtoexpect: {
        value: cdktf.stringToHclTerraform(this._stringtoexpect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stringtosend: {
        value: cdktf.stringToHclTerraform(this._stringtosend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.stringToHclTerraform(this._tags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      teamids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._teamids),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
      userids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._userids),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
