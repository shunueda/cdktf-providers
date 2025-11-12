// https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RestapiProviderConfig {
  /**
  * When set, any PUT to the API for an object will copy these keys from the data the provider has gathered about the object. This is useful if internal API information must also be provided with updates, such as the revision of the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs#copy_keys RestapiProvider#copy_keys}
  */
  readonly copyKeys?: string[];
  /**
  * Defaults to `POST`. The HTTP method used to CREATE objects of this type on the API server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs#create_method RestapiProvider#create_method}
  */
  readonly createMethod?: string;
  /**
  * Set this when the API returns the object created only on creation operations (POST). This is used by the provider to refresh internal data structures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs#create_returns_object RestapiProvider#create_returns_object}
  */
  readonly createReturnsObject?: boolean | cdktf.IResolvable;
  /**
  * Enabling this will cause lots of debug information to be printed to STDOUT by the API client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs#debug RestapiProvider#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `DELETE`. The HTTP method used to DELETE objects of this type on the API server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs#destroy_method RestapiProvider#destroy_method}
  */
  readonly destroyMethod?: string;
  /**
  * A map of header names and values to set on all outbound requests. This is useful if you want to use a script via the 'external' provider or provide a pre-approved token or change Content-Type from `application/json`. If `username` and `password` are set and Authorization is one of the headers defined here, the BASIC auth credentials take precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs#headers RestapiProvider#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * When set, this key will be used to operate on REST objects. For example, if the ID is set to 'name', changes to the API object will be to http://foo.com/bar/VALUE_OF_NAME. This value may also be a '/'-delimeted path to the id attribute if it is multple levels deep in the data (such as `attributes/id` in the case of an object `{ "attributes": { "id": 1234 }, "config": { "name": "foo", "something": "bar"}}`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs#id_attribute RestapiProvider#id_attribute}
  */
  readonly idAttribute?: string;
  /**
  * When using https, this disables TLS verification of the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs#insecure RestapiProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * When set, will use this password for BASIC auth to the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs#password RestapiProvider#password}
  */
  readonly password?: string;
  /**
  * Set this to limit the number of requests per second made to the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs#rate_limit RestapiProvider#rate_limit}
  */
  readonly rateLimit?: number;
  /**
  * Defaults to `GET`. The HTTP method used to READ objects of this type on the API server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs#read_method RestapiProvider#read_method}
  */
  readonly readMethod?: string;
  /**
  * When set, will cause requests taking longer than this time (in seconds) to be aborted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs#timeout RestapiProvider#timeout}
  */
  readonly timeout?: number;
  /**
  * Defaults to `PUT`. The HTTP method used to UPDATE objects of this type on the API server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs#update_method RestapiProvider#update_method}
  */
  readonly updateMethod?: string;
  /**
  * URI of the REST API endpoint. This serves as the base of all requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs#uri RestapiProvider#uri}
  */
  readonly uri: string;
  /**
  * Enable cookie jar to persist session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs#use_cookies RestapiProvider#use_cookies}
  */
  readonly useCookies?: boolean | cdktf.IResolvable;
  /**
  * When set, will use this username for BASIC auth to the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs#username RestapiProvider#username}
  */
  readonly username?: string;
  /**
  * Set this when the API returns the object created on all write operations (POST, PUT). This is used by the provider to refresh internal data structures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs#write_returns_object RestapiProvider#write_returns_object}
  */
  readonly writeReturnsObject?: boolean | cdktf.IResolvable;
  /**
  * Trim the xssi prefix from response string, if present, before parsing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs#xssi_prefix RestapiProvider#xssi_prefix}
  */
  readonly xssiPrefix?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs#alias RestapiProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs restapi}
*/
export class RestapiProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "restapi";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RestapiProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RestapiProvider to import
  * @param importFromId The id of the existing RestapiProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RestapiProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "restapi", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fmontezuma/restapi/1.14.1/docs restapi} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RestapiProviderConfig
  */
  public constructor(scope: Construct, id: string, config: RestapiProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'restapi',
      terraformGeneratorMetadata: {
        providerName: 'restapi',
        providerVersion: '1.14.1',
        providerVersionConstraint: '1.14.1'
      },
      terraformProviderSource: 'fmontezuma/restapi'
    });
    this._copyKeys = config.copyKeys;
    this._createMethod = config.createMethod;
    this._createReturnsObject = config.createReturnsObject;
    this._debug = config.debug;
    this._destroyMethod = config.destroyMethod;
    this._headers = config.headers;
    this._idAttribute = config.idAttribute;
    this._insecure = config.insecure;
    this._password = config.password;
    this._rateLimit = config.rateLimit;
    this._readMethod = config.readMethod;
    this._timeout = config.timeout;
    this._updateMethod = config.updateMethod;
    this._uri = config.uri;
    this._useCookies = config.useCookies;
    this._username = config.username;
    this._writeReturnsObject = config.writeReturnsObject;
    this._xssiPrefix = config.xssiPrefix;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // copy_keys - computed: false, optional: true, required: false
  private _copyKeys?: string[]; 
  public get copyKeys() {
    return this._copyKeys;
  }
  public set copyKeys(value: string[] | undefined) {
    this._copyKeys = value;
  }
  public resetCopyKeys() {
    this._copyKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyKeysInput() {
    return this._copyKeys;
  }

  // create_method - computed: false, optional: true, required: false
  private _createMethod?: string; 
  public get createMethod() {
    return this._createMethod;
  }
  public set createMethod(value: string | undefined) {
    this._createMethod = value;
  }
  public resetCreateMethod() {
    this._createMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createMethodInput() {
    return this._createMethod;
  }

  // create_returns_object - computed: false, optional: true, required: false
  private _createReturnsObject?: boolean | cdktf.IResolvable; 
  public get createReturnsObject() {
    return this._createReturnsObject;
  }
  public set createReturnsObject(value: boolean | cdktf.IResolvable | undefined) {
    this._createReturnsObject = value;
  }
  public resetCreateReturnsObject() {
    this._createReturnsObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createReturnsObjectInput() {
    return this._createReturnsObject;
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this._debug;
  }
  public set debug(value: boolean | cdktf.IResolvable | undefined) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // destroy_method - computed: false, optional: true, required: false
  private _destroyMethod?: string; 
  public get destroyMethod() {
    return this._destroyMethod;
  }
  public set destroyMethod(value: string | undefined) {
    this._destroyMethod = value;
  }
  public resetDestroyMethod() {
    this._destroyMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyMethodInput() {
    return this._destroyMethod;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this._headers;
  }
  public set headers(value: { [key: string]: string } | undefined) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // id_attribute - computed: false, optional: true, required: false
  private _idAttribute?: string; 
  public get idAttribute() {
    return this._idAttribute;
  }
  public set idAttribute(value: string | undefined) {
    this._idAttribute = value;
  }
  public resetIdAttribute() {
    this._idAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idAttributeInput() {
    return this._idAttribute;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this._rateLimit;
  }
  public set rateLimit(value: number | undefined) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }

  // read_method - computed: false, optional: true, required: false
  private _readMethod?: string; 
  public get readMethod() {
    return this._readMethod;
  }
  public set readMethod(value: string | undefined) {
    this._readMethod = value;
  }
  public resetReadMethod() {
    this._readMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readMethodInput() {
    return this._readMethod;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this._timeout;
  }
  public set timeout(value: number | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // update_method - computed: false, optional: true, required: false
  private _updateMethod?: string; 
  public get updateMethod() {
    return this._updateMethod;
  }
  public set updateMethod(value: string | undefined) {
    this._updateMethod = value;
  }
  public resetUpdateMethod() {
    this._updateMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateMethodInput() {
    return this._updateMethod;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this._uri;
  }
  public set uri(value: string | undefined) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // use_cookies - computed: false, optional: true, required: false
  private _useCookies?: boolean | cdktf.IResolvable; 
  public get useCookies() {
    return this._useCookies;
  }
  public set useCookies(value: boolean | cdktf.IResolvable | undefined) {
    this._useCookies = value;
  }
  public resetUseCookies() {
    this._useCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCookiesInput() {
    return this._useCookies;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // write_returns_object - computed: false, optional: true, required: false
  private _writeReturnsObject?: boolean | cdktf.IResolvable; 
  public get writeReturnsObject() {
    return this._writeReturnsObject;
  }
  public set writeReturnsObject(value: boolean | cdktf.IResolvable | undefined) {
    this._writeReturnsObject = value;
  }
  public resetWriteReturnsObject() {
    this._writeReturnsObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeReturnsObjectInput() {
    return this._writeReturnsObject;
  }

  // xssi_prefix - computed: false, optional: true, required: false
  private _xssiPrefix?: string; 
  public get xssiPrefix() {
    return this._xssiPrefix;
  }
  public set xssiPrefix(value: string | undefined) {
    this._xssiPrefix = value;
  }
  public resetXssiPrefix() {
    this._xssiPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xssiPrefixInput() {
    return this._xssiPrefix;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      copy_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._copyKeys),
      create_method: cdktf.stringToTerraform(this._createMethod),
      create_returns_object: cdktf.booleanToTerraform(this._createReturnsObject),
      debug: cdktf.booleanToTerraform(this._debug),
      destroy_method: cdktf.stringToTerraform(this._destroyMethod),
      headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._headers),
      id_attribute: cdktf.stringToTerraform(this._idAttribute),
      insecure: cdktf.booleanToTerraform(this._insecure),
      password: cdktf.stringToTerraform(this._password),
      rate_limit: cdktf.numberToTerraform(this._rateLimit),
      read_method: cdktf.stringToTerraform(this._readMethod),
      timeout: cdktf.numberToTerraform(this._timeout),
      update_method: cdktf.stringToTerraform(this._updateMethod),
      uri: cdktf.stringToTerraform(this._uri),
      use_cookies: cdktf.booleanToTerraform(this._useCookies),
      username: cdktf.stringToTerraform(this._username),
      write_returns_object: cdktf.booleanToTerraform(this._writeReturnsObject),
      xssi_prefix: cdktf.stringToTerraform(this._xssiPrefix),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      copy_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._copyKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      create_method: {
        value: cdktf.stringToHclTerraform(this._createMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_returns_object: {
        value: cdktf.booleanToHclTerraform(this._createReturnsObject),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      debug: {
        value: cdktf.booleanToHclTerraform(this._debug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      destroy_method: {
        value: cdktf.stringToHclTerraform(this._destroyMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._headers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id_attribute: {
        value: cdktf.stringToHclTerraform(this._idAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
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
      rate_limit: {
        value: cdktf.numberToHclTerraform(this._rateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      read_method: {
        value: cdktf.stringToHclTerraform(this._readMethod),
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
      update_method: {
        value: cdktf.stringToHclTerraform(this._updateMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uri: {
        value: cdktf.stringToHclTerraform(this._uri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_cookies: {
        value: cdktf.booleanToHclTerraform(this._useCookies),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      write_returns_object: {
        value: cdktf.booleanToHclTerraform(this._writeReturnsObject),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      xssi_prefix: {
        value: cdktf.stringToHclTerraform(this._xssiPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
