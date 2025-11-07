// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gwcse_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GwcseEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Updateable) A list of supported audiences for the authentication JWT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gwcse_endpoint#authentication_audience GwcseEndpoint#authentication_audience}
  */
  readonly authenticationAudience: string[];
  /**
  * (Updateable) A list of CSE identity provider ID's.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gwcse_endpoint#cse_identity_id GwcseEndpoint#cse_identity_id}
  */
  readonly cseIdentityId: string[];
  /**
  * True by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gwcse_endpoint#enabled GwcseEndpoint#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Endpoint base URL hostname for KACLS endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gwcse_endpoint#endpoint_url_hostname GwcseEndpoint#endpoint_url_hostname}
  */
  readonly endpointUrlHostname: string;
  /**
  * (Updateable) A list of key:value pairs to store with the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gwcse_endpoint#meta GwcseEndpoint#meta}
  */
  readonly meta?: { [key: string]: string };
  /**
  * Unique name for the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gwcse_endpoint#name GwcseEndpoint#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gwcse_endpoint ciphertrust_gwcse_endpoint}
*/
export class GwcseEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_gwcse_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GwcseEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GwcseEndpoint to import
  * @param importFromId The id of the existing GwcseEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gwcse_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GwcseEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_gwcse_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/gwcse_endpoint ciphertrust_gwcse_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GwcseEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: GwcseEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_gwcse_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationAudience = config.authenticationAudience;
    this._cseIdentityId = config.cseIdentityId;
    this._enabled = config.enabled;
    this._endpointUrlHostname = config.endpointUrlHostname;
    this._meta = config.meta;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_audience - computed: false, optional: false, required: true
  private _authenticationAudience?: string[]; 
  public get authenticationAudience() {
    return cdktf.Fn.tolist(this.getListAttribute('authentication_audience'));
  }
  public set authenticationAudience(value: string[]) {
    this._authenticationAudience = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationAudienceInput() {
    return this._authenticationAudience;
  }

  // cse_identity_id - computed: false, optional: false, required: true
  private _cseIdentityId?: string[]; 
  public get cseIdentityId() {
    return cdktf.Fn.tolist(this.getListAttribute('cse_identity_id'));
  }
  public set cseIdentityId(value: string[]) {
    this._cseIdentityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cseIdentityIdInput() {
    return this._cseIdentityId;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // endpoint_url - computed: true, optional: false, required: false
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
  }

  // endpoint_url_hostname - computed: false, optional: false, required: true
  private _endpointUrlHostname?: string; 
  public get endpointUrlHostname() {
    return this.getStringAttribute('endpoint_url_hostname');
  }
  public set endpointUrlHostname(value: string) {
    this._endpointUrlHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUrlHostnameInput() {
    return this._endpointUrlHostname;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kek_id - computed: true, optional: false, required: false
  public get kekId() {
    return this.getStringAttribute('kek_id');
  }

  // kek_name - computed: true, optional: false, required: false
  public get kekName() {
    return this.getStringAttribute('kek_name');
  }

  // kek_version - computed: true, optional: false, required: false
  public get kekVersion() {
    return this.getStringAttribute('kek_version');
  }

  // meta - computed: false, optional: true, required: false
  private _meta?: { [key: string]: string }; 
  public get meta() {
    return this.getStringMapAttribute('meta');
  }
  public set meta(value: { [key: string]: string }) {
    this._meta = value;
  }
  public resetMeta() {
    this._meta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_audience: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authenticationAudience),
      cse_identity_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cseIdentityId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      endpoint_url_hostname: cdktf.stringToTerraform(this._endpointUrlHostname),
      meta: cdktf.hashMapper(cdktf.stringToTerraform)(this._meta),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_audience: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authenticationAudience),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cse_identity_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cseIdentityId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint_url_hostname: {
        value: cdktf.stringToHclTerraform(this._endpointUrlHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._meta),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
