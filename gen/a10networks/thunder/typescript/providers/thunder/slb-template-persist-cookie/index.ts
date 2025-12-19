// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_persist_cookie
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplatePersistCookieConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set cookie name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_persist_cookie#cookie_name SlbTemplatePersistCookie#cookie_name}
  */
  readonly cookieName?: string;
  /**
  * Set cookie domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_persist_cookie#domain SlbTemplatePersistCookie#domain}
  */
  readonly domain?: string;
  /**
  * Do not observe connection rate rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_persist_cookie#dont_honor_conn_rules SlbTemplatePersistCookie#dont_honor_conn_rules}
  */
  readonly dontHonorConnRules?: number;
  /**
  * Encryption level for cookie name / value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_persist_cookie#encrypt_level SlbTemplatePersistCookie#encrypt_level}
  */
  readonly encryptLevel?: number;
  /**
  * Set cookie expiration time (Expiration in seconds (default 31536000))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_persist_cookie#expire SlbTemplatePersistCookie#expire}
  */
  readonly expire?: number;
  /**
  * Enable HttpOnly attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_persist_cookie#httponly SlbTemplatePersistCookie#httponly}
  */
  readonly httponly?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_persist_cookie#id SlbTemplatePersistCookie#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Insert persist cookie to every reponse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_persist_cookie#insert_always SlbTemplatePersistCookie#insert_always}
  */
  readonly insertAlways?: number;
  /**
  * Persist for server, default is port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_persist_cookie#match_type SlbTemplatePersistCookie#match_type}
  */
  readonly matchType?: number;
  /**
  * Cookie persistence (Cookie persistence template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_persist_cookie#name SlbTemplatePersistCookie#name}
  */
  readonly name: string;
  /**
  * Set passphrase for encryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_persist_cookie#pass_phrase SlbTemplatePersistCookie#pass_phrase}
  */
  readonly passPhrase?: string;
  /**
  * Pass thru mode - Server sends the persist cookie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_persist_cookie#pass_thru SlbTemplatePersistCookie#pass_thru}
  */
  readonly passThru?: number;
  /**
  * Set cookie path (Cookie path, default is "/")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_persist_cookie#path SlbTemplatePersistCookie#path}
  */
  readonly path?: string;
  /**
  * 'host': the cookie will have been set with a Secure attribute, a Path attribute with a value of /, and no Domain attribute; 'secure': the cookie will have been set with a Secure attribute;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_persist_cookie#prefix SlbTemplatePersistCookie#prefix}
  */
  readonly prefix?: string;
  /**
  * 'none': none; 'lax': lax; 'strict': strict;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_persist_cookie#samesite SlbTemplatePersistCookie#samesite}
  */
  readonly samesite?: string;
  /**
  * Persist within the same server SCAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_persist_cookie#scan_all_members SlbTemplatePersistCookie#scan_all_members}
  */
  readonly scanAllMembers?: number;
  /**
  * Enable secure attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_persist_cookie#secure SlbTemplatePersistCookie#secure}
  */
  readonly secure?: number;
  /**
  * Persist to the same server, default is port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_persist_cookie#server SlbTemplatePersistCookie#server}
  */
  readonly server?: number;
  /**
  * Persist to the same server and within the same service group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_persist_cookie#server_service_group SlbTemplatePersistCookie#server_service_group}
  */
  readonly serverServiceGroup?: number;
  /**
  * Persist within the same service group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_persist_cookie#service_group SlbTemplatePersistCookie#service_group}
  */
  readonly serviceGroup?: number;
  /**
  * 'max-age': Use the Max-Age attribute; 'expires': Use the Expires attribute; 'all': Use all attributes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_persist_cookie#use_attribute SlbTemplatePersistCookie#use_attribute}
  */
  readonly useAttribute?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_persist_cookie#user_tag SlbTemplatePersistCookie#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_persist_cookie#uuid SlbTemplatePersistCookie#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_persist_cookie thunder_slb_template_persist_cookie}
*/
export class SlbTemplatePersistCookie extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_persist_cookie";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplatePersistCookie resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplatePersistCookie to import
  * @param importFromId The id of the existing SlbTemplatePersistCookie that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_persist_cookie#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplatePersistCookie to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_persist_cookie", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_persist_cookie thunder_slb_template_persist_cookie} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplatePersistCookieConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplatePersistCookieConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_persist_cookie',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cookieName = config.cookieName;
    this._domain = config.domain;
    this._dontHonorConnRules = config.dontHonorConnRules;
    this._encryptLevel = config.encryptLevel;
    this._expire = config.expire;
    this._httponly = config.httponly;
    this._id = config.id;
    this._insertAlways = config.insertAlways;
    this._matchType = config.matchType;
    this._name = config.name;
    this._passPhrase = config.passPhrase;
    this._passThru = config.passThru;
    this._path = config.path;
    this._prefix = config.prefix;
    this._samesite = config.samesite;
    this._scanAllMembers = config.scanAllMembers;
    this._secure = config.secure;
    this._server = config.server;
    this._serverServiceGroup = config.serverServiceGroup;
    this._serviceGroup = config.serviceGroup;
    this._useAttribute = config.useAttribute;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cookie_name - computed: false, optional: true, required: false
  private _cookieName?: string; 
  public get cookieName() {
    return this.getStringAttribute('cookie_name');
  }
  public set cookieName(value: string) {
    this._cookieName = value;
  }
  public resetCookieName() {
    this._cookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameInput() {
    return this._cookieName;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // dont_honor_conn_rules - computed: false, optional: true, required: false
  private _dontHonorConnRules?: number; 
  public get dontHonorConnRules() {
    return this.getNumberAttribute('dont_honor_conn_rules');
  }
  public set dontHonorConnRules(value: number) {
    this._dontHonorConnRules = value;
  }
  public resetDontHonorConnRules() {
    this._dontHonorConnRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dontHonorConnRulesInput() {
    return this._dontHonorConnRules;
  }

  // encrypt_level - computed: false, optional: true, required: false
  private _encryptLevel?: number; 
  public get encryptLevel() {
    return this.getNumberAttribute('encrypt_level');
  }
  public set encryptLevel(value: number) {
    this._encryptLevel = value;
  }
  public resetEncryptLevel() {
    this._encryptLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptLevelInput() {
    return this._encryptLevel;
  }

  // expire - computed: false, optional: true, required: false
  private _expire?: number; 
  public get expire() {
    return this.getNumberAttribute('expire');
  }
  public set expire(value: number) {
    this._expire = value;
  }
  public resetExpire() {
    this._expire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireInput() {
    return this._expire;
  }

  // httponly - computed: false, optional: true, required: false
  private _httponly?: number; 
  public get httponly() {
    return this.getNumberAttribute('httponly');
  }
  public set httponly(value: number) {
    this._httponly = value;
  }
  public resetHttponly() {
    this._httponly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httponlyInput() {
    return this._httponly;
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

  // insert_always - computed: false, optional: true, required: false
  private _insertAlways?: number; 
  public get insertAlways() {
    return this.getNumberAttribute('insert_always');
  }
  public set insertAlways(value: number) {
    this._insertAlways = value;
  }
  public resetInsertAlways() {
    this._insertAlways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertAlwaysInput() {
    return this._insertAlways;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: number; 
  public get matchType() {
    return this.getNumberAttribute('match_type');
  }
  public set matchType(value: number) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
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

  // pass_phrase - computed: false, optional: true, required: false
  private _passPhrase?: string; 
  public get passPhrase() {
    return this.getStringAttribute('pass_phrase');
  }
  public set passPhrase(value: string) {
    this._passPhrase = value;
  }
  public resetPassPhrase() {
    this._passPhrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passPhraseInput() {
    return this._passPhrase;
  }

  // pass_thru - computed: false, optional: true, required: false
  private _passThru?: number; 
  public get passThru() {
    return this.getNumberAttribute('pass_thru');
  }
  public set passThru(value: number) {
    this._passThru = value;
  }
  public resetPassThru() {
    this._passThru = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passThruInput() {
    return this._passThru;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // samesite - computed: false, optional: true, required: false
  private _samesite?: string; 
  public get samesite() {
    return this.getStringAttribute('samesite');
  }
  public set samesite(value: string) {
    this._samesite = value;
  }
  public resetSamesite() {
    this._samesite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteInput() {
    return this._samesite;
  }

  // scan_all_members - computed: false, optional: true, required: false
  private _scanAllMembers?: number; 
  public get scanAllMembers() {
    return this.getNumberAttribute('scan_all_members');
  }
  public set scanAllMembers(value: number) {
    this._scanAllMembers = value;
  }
  public resetScanAllMembers() {
    this._scanAllMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanAllMembersInput() {
    return this._scanAllMembers;
  }

  // secure - computed: false, optional: true, required: false
  private _secure?: number; 
  public get secure() {
    return this.getNumberAttribute('secure');
  }
  public set secure(value: number) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }

  // server - computed: false, optional: true, required: false
  private _server?: number; 
  public get server() {
    return this.getNumberAttribute('server');
  }
  public set server(value: number) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // server_service_group - computed: false, optional: true, required: false
  private _serverServiceGroup?: number; 
  public get serverServiceGroup() {
    return this.getNumberAttribute('server_service_group');
  }
  public set serverServiceGroup(value: number) {
    this._serverServiceGroup = value;
  }
  public resetServerServiceGroup() {
    this._serverServiceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverServiceGroupInput() {
    return this._serverServiceGroup;
  }

  // service_group - computed: false, optional: true, required: false
  private _serviceGroup?: number; 
  public get serviceGroup() {
    return this.getNumberAttribute('service_group');
  }
  public set serviceGroup(value: number) {
    this._serviceGroup = value;
  }
  public resetServiceGroup() {
    this._serviceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupInput() {
    return this._serviceGroup;
  }

  // use_attribute - computed: false, optional: true, required: false
  private _useAttribute?: string; 
  public get useAttribute() {
    return this.getStringAttribute('use_attribute');
  }
  public set useAttribute(value: string) {
    this._useAttribute = value;
  }
  public resetUseAttribute() {
    this._useAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAttributeInput() {
    return this._useAttribute;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cookie_name: cdktf.stringToTerraform(this._cookieName),
      domain: cdktf.stringToTerraform(this._domain),
      dont_honor_conn_rules: cdktf.numberToTerraform(this._dontHonorConnRules),
      encrypt_level: cdktf.numberToTerraform(this._encryptLevel),
      expire: cdktf.numberToTerraform(this._expire),
      httponly: cdktf.numberToTerraform(this._httponly),
      id: cdktf.stringToTerraform(this._id),
      insert_always: cdktf.numberToTerraform(this._insertAlways),
      match_type: cdktf.numberToTerraform(this._matchType),
      name: cdktf.stringToTerraform(this._name),
      pass_phrase: cdktf.stringToTerraform(this._passPhrase),
      pass_thru: cdktf.numberToTerraform(this._passThru),
      path: cdktf.stringToTerraform(this._path),
      prefix: cdktf.stringToTerraform(this._prefix),
      samesite: cdktf.stringToTerraform(this._samesite),
      scan_all_members: cdktf.numberToTerraform(this._scanAllMembers),
      secure: cdktf.numberToTerraform(this._secure),
      server: cdktf.numberToTerraform(this._server),
      server_service_group: cdktf.numberToTerraform(this._serverServiceGroup),
      service_group: cdktf.numberToTerraform(this._serviceGroup),
      use_attribute: cdktf.stringToTerraform(this._useAttribute),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cookie_name: {
        value: cdktf.stringToHclTerraform(this._cookieName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dont_honor_conn_rules: {
        value: cdktf.numberToHclTerraform(this._dontHonorConnRules),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      encrypt_level: {
        value: cdktf.numberToHclTerraform(this._encryptLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      expire: {
        value: cdktf.numberToHclTerraform(this._expire),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      httponly: {
        value: cdktf.numberToHclTerraform(this._httponly),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_always: {
        value: cdktf.numberToHclTerraform(this._insertAlways),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      match_type: {
        value: cdktf.numberToHclTerraform(this._matchType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pass_phrase: {
        value: cdktf.stringToHclTerraform(this._passPhrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pass_thru: {
        value: cdktf.numberToHclTerraform(this._passThru),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      samesite: {
        value: cdktf.stringToHclTerraform(this._samesite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_all_members: {
        value: cdktf.numberToHclTerraform(this._scanAllMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secure: {
        value: cdktf.numberToHclTerraform(this._secure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server: {
        value: cdktf.numberToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_service_group: {
        value: cdktf.numberToHclTerraform(this._serverServiceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_group: {
        value: cdktf.numberToHclTerraform(this._serviceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_attribute: {
        value: cdktf.stringToHclTerraform(this._useAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
