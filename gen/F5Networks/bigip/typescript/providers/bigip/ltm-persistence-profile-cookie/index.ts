// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_cookie
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LtmPersistenceProfileCookieConfig extends cdktf.TerraformMetaArguments {
  /**
  * To enable _ disable always sending cookies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_cookie#always_send LtmPersistenceProfileCookie#always_send}
  */
  readonly alwaysSend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_cookie#app_service LtmPersistenceProfileCookie#app_service}
  */
  readonly appService?: string;
  /**
  * To required, preferred, or disabled policy for cookie encryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_cookie#cookie_encryption LtmPersistenceProfileCookie#cookie_encryption}
  */
  readonly cookieEncryption?: string;
  /**
  * Passphrase for encrypted cookies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_cookie#cookie_encryption_passphrase LtmPersistenceProfileCookie#cookie_encryption_passphrase}
  */
  readonly cookieEncryptionPassphrase?: string;
  /**
  * Name of the cookie to track persistence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_cookie#cookie_name LtmPersistenceProfileCookie#cookie_name}
  */
  readonly cookieName?: string;
  /**
  * Inherit defaults from parent profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_cookie#defaults_from LtmPersistenceProfileCookie#defaults_from}
  */
  readonly defaultsFrom: string;
  /**
  * Expiration TTL for cookie specified in D:H:M:S or in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_cookie#expiration LtmPersistenceProfileCookie#expiration}
  */
  readonly expiration?: string;
  /**
  * Length of hash to apply to cookie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_cookie#hash_length LtmPersistenceProfileCookie#hash_length}
  */
  readonly hashLength?: number;
  /**
  * Number of characters to skip in the cookie for the hash
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_cookie#hash_offset LtmPersistenceProfileCookie#hash_offset}
  */
  readonly hashOffset?: number;
  /**
  * To enable _ disable sending only over http
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_cookie#httponly LtmPersistenceProfileCookie#httponly}
  */
  readonly httponly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_cookie#id LtmPersistenceProfileCookie#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * To enable _ disable match across pools with given persistence record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_cookie#match_across_pools LtmPersistenceProfileCookie#match_across_pools}
  */
  readonly matchAcrossPools?: string;
  /**
  * To enable _ disable match across services with given persistence record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_cookie#match_across_services LtmPersistenceProfileCookie#match_across_services}
  */
  readonly matchAcrossServices?: string;
  /**
  * To enable _ disable match across virtual servers with given persistence record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_cookie#match_across_virtuals LtmPersistenceProfileCookie#match_across_virtuals}
  */
  readonly matchAcrossVirtuals?: string;
  /**
  * Specifies the type of cookie processing that the system uses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_cookie#method LtmPersistenceProfileCookie#method}
  */
  readonly method?: string;
  /**
  * To enable _ disable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_cookie#mirror LtmPersistenceProfileCookie#mirror}
  */
  readonly mirror?: string;
  /**
  * Name of the persistence profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_cookie#name LtmPersistenceProfileCookie#name}
  */
  readonly name: string;
  /**
  * To enable _ disable that pool member connection limits are overridden for persisted clients. Per-virtual connection limits remain hard limits and are not overridden.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_cookie#override_conn_limit LtmPersistenceProfileCookie#override_conn_limit}
  */
  readonly overrideConnLimit?: string;
  /**
  * Timeout for persistence of the session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_cookie#timeout LtmPersistenceProfileCookie#timeout}
  */
  readonly timeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_cookie bigip_ltm_persistence_profile_cookie}
*/
export class LtmPersistenceProfileCookie extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_ltm_persistence_profile_cookie";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LtmPersistenceProfileCookie resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LtmPersistenceProfileCookie to import
  * @param importFromId The id of the existing LtmPersistenceProfileCookie that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_cookie#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LtmPersistenceProfileCookie to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_ltm_persistence_profile_cookie", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_persistence_profile_cookie bigip_ltm_persistence_profile_cookie} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LtmPersistenceProfileCookieConfig
  */
  public constructor(scope: Construct, id: string, config: LtmPersistenceProfileCookieConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_ltm_persistence_profile_cookie',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alwaysSend = config.alwaysSend;
    this._appService = config.appService;
    this._cookieEncryption = config.cookieEncryption;
    this._cookieEncryptionPassphrase = config.cookieEncryptionPassphrase;
    this._cookieName = config.cookieName;
    this._defaultsFrom = config.defaultsFrom;
    this._expiration = config.expiration;
    this._hashLength = config.hashLength;
    this._hashOffset = config.hashOffset;
    this._httponly = config.httponly;
    this._id = config.id;
    this._matchAcrossPools = config.matchAcrossPools;
    this._matchAcrossServices = config.matchAcrossServices;
    this._matchAcrossVirtuals = config.matchAcrossVirtuals;
    this._method = config.method;
    this._mirror = config.mirror;
    this._name = config.name;
    this._overrideConnLimit = config.overrideConnLimit;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always_send - computed: true, optional: true, required: false
  private _alwaysSend?: string; 
  public get alwaysSend() {
    return this.getStringAttribute('always_send');
  }
  public set alwaysSend(value: string) {
    this._alwaysSend = value;
  }
  public resetAlwaysSend() {
    this._alwaysSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysSendInput() {
    return this._alwaysSend;
  }

  // app_service - computed: true, optional: true, required: false
  private _appService?: string; 
  public get appService() {
    return this.getStringAttribute('app_service');
  }
  public set appService(value: string) {
    this._appService = value;
  }
  public resetAppService() {
    this._appService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceInput() {
    return this._appService;
  }

  // cookie_encryption - computed: true, optional: true, required: false
  private _cookieEncryption?: string; 
  public get cookieEncryption() {
    return this.getStringAttribute('cookie_encryption');
  }
  public set cookieEncryption(value: string) {
    this._cookieEncryption = value;
  }
  public resetCookieEncryption() {
    this._cookieEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieEncryptionInput() {
    return this._cookieEncryption;
  }

  // cookie_encryption_passphrase - computed: true, optional: true, required: false
  private _cookieEncryptionPassphrase?: string; 
  public get cookieEncryptionPassphrase() {
    return this.getStringAttribute('cookie_encryption_passphrase');
  }
  public set cookieEncryptionPassphrase(value: string) {
    this._cookieEncryptionPassphrase = value;
  }
  public resetCookieEncryptionPassphrase() {
    this._cookieEncryptionPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieEncryptionPassphraseInput() {
    return this._cookieEncryptionPassphrase;
  }

  // cookie_name - computed: true, optional: true, required: false
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

  // defaults_from - computed: false, optional: false, required: true
  private _defaultsFrom?: string; 
  public get defaultsFrom() {
    return this.getStringAttribute('defaults_from');
  }
  public set defaultsFrom(value: string) {
    this._defaultsFrom = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsFromInput() {
    return this._defaultsFrom;
  }

  // expiration - computed: true, optional: true, required: false
  private _expiration?: string; 
  public get expiration() {
    return this.getStringAttribute('expiration');
  }
  public set expiration(value: string) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
  }

  // hash_length - computed: true, optional: true, required: false
  private _hashLength?: number; 
  public get hashLength() {
    return this.getNumberAttribute('hash_length');
  }
  public set hashLength(value: number) {
    this._hashLength = value;
  }
  public resetHashLength() {
    this._hashLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashLengthInput() {
    return this._hashLength;
  }

  // hash_offset - computed: true, optional: true, required: false
  private _hashOffset?: number; 
  public get hashOffset() {
    return this.getNumberAttribute('hash_offset');
  }
  public set hashOffset(value: number) {
    this._hashOffset = value;
  }
  public resetHashOffset() {
    this._hashOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashOffsetInput() {
    return this._hashOffset;
  }

  // httponly - computed: true, optional: true, required: false
  private _httponly?: string; 
  public get httponly() {
    return this.getStringAttribute('httponly');
  }
  public set httponly(value: string) {
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

  // match_across_pools - computed: true, optional: true, required: false
  private _matchAcrossPools?: string; 
  public get matchAcrossPools() {
    return this.getStringAttribute('match_across_pools');
  }
  public set matchAcrossPools(value: string) {
    this._matchAcrossPools = value;
  }
  public resetMatchAcrossPools() {
    this._matchAcrossPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAcrossPoolsInput() {
    return this._matchAcrossPools;
  }

  // match_across_services - computed: true, optional: true, required: false
  private _matchAcrossServices?: string; 
  public get matchAcrossServices() {
    return this.getStringAttribute('match_across_services');
  }
  public set matchAcrossServices(value: string) {
    this._matchAcrossServices = value;
  }
  public resetMatchAcrossServices() {
    this._matchAcrossServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAcrossServicesInput() {
    return this._matchAcrossServices;
  }

  // match_across_virtuals - computed: true, optional: true, required: false
  private _matchAcrossVirtuals?: string; 
  public get matchAcrossVirtuals() {
    return this.getStringAttribute('match_across_virtuals');
  }
  public set matchAcrossVirtuals(value: string) {
    this._matchAcrossVirtuals = value;
  }
  public resetMatchAcrossVirtuals() {
    this._matchAcrossVirtuals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAcrossVirtualsInput() {
    return this._matchAcrossVirtuals;
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

  // mirror - computed: true, optional: true, required: false
  private _mirror?: string; 
  public get mirror() {
    return this.getStringAttribute('mirror');
  }
  public set mirror(value: string) {
    this._mirror = value;
  }
  public resetMirror() {
    this._mirror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorInput() {
    return this._mirror;
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

  // override_conn_limit - computed: true, optional: true, required: false
  private _overrideConnLimit?: string; 
  public get overrideConnLimit() {
    return this.getStringAttribute('override_conn_limit');
  }
  public set overrideConnLimit(value: string) {
    this._overrideConnLimit = value;
  }
  public resetOverrideConnLimit() {
    this._overrideConnLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideConnLimitInput() {
    return this._overrideConnLimit;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      always_send: cdktf.stringToTerraform(this._alwaysSend),
      app_service: cdktf.stringToTerraform(this._appService),
      cookie_encryption: cdktf.stringToTerraform(this._cookieEncryption),
      cookie_encryption_passphrase: cdktf.stringToTerraform(this._cookieEncryptionPassphrase),
      cookie_name: cdktf.stringToTerraform(this._cookieName),
      defaults_from: cdktf.stringToTerraform(this._defaultsFrom),
      expiration: cdktf.stringToTerraform(this._expiration),
      hash_length: cdktf.numberToTerraform(this._hashLength),
      hash_offset: cdktf.numberToTerraform(this._hashOffset),
      httponly: cdktf.stringToTerraform(this._httponly),
      id: cdktf.stringToTerraform(this._id),
      match_across_pools: cdktf.stringToTerraform(this._matchAcrossPools),
      match_across_services: cdktf.stringToTerraform(this._matchAcrossServices),
      match_across_virtuals: cdktf.stringToTerraform(this._matchAcrossVirtuals),
      method: cdktf.stringToTerraform(this._method),
      mirror: cdktf.stringToTerraform(this._mirror),
      name: cdktf.stringToTerraform(this._name),
      override_conn_limit: cdktf.stringToTerraform(this._overrideConnLimit),
      timeout: cdktf.numberToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      always_send: {
        value: cdktf.stringToHclTerraform(this._alwaysSend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_service: {
        value: cdktf.stringToHclTerraform(this._appService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_encryption: {
        value: cdktf.stringToHclTerraform(this._cookieEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_encryption_passphrase: {
        value: cdktf.stringToHclTerraform(this._cookieEncryptionPassphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_name: {
        value: cdktf.stringToHclTerraform(this._cookieName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defaults_from: {
        value: cdktf.stringToHclTerraform(this._defaultsFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration: {
        value: cdktf.stringToHclTerraform(this._expiration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_length: {
        value: cdktf.numberToHclTerraform(this._hashLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hash_offset: {
        value: cdktf.numberToHclTerraform(this._hashOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      httponly: {
        value: cdktf.stringToHclTerraform(this._httponly),
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
      match_across_pools: {
        value: cdktf.stringToHclTerraform(this._matchAcrossPools),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_across_services: {
        value: cdktf.stringToHclTerraform(this._matchAcrossServices),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_across_virtuals: {
        value: cdktf.stringToHclTerraform(this._matchAcrossVirtuals),
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
      mirror: {
        value: cdktf.stringToHclTerraform(this._mirror),
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
      override_conn_limit: {
        value: cdktf.stringToHclTerraform(this._overrideConnLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
