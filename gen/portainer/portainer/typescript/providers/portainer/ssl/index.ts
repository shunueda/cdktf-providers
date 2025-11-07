// https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/ssl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslConfig extends cdktf.TerraformMetaArguments {
  /**
  * SSL certificate content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/ssl#cert Ssl#cert}
  */
  readonly cert: string;
  /**
  * SSL client certificate content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/ssl#client_cert Ssl#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Whether HTTP should be enabled (true) or disabled (false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/ssl#http_enabled Ssl#http_enabled}
  */
  readonly httpEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/ssl#id Ssl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * SSL private key content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/ssl#key Ssl#key}
  */
  readonly key: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/ssl portainer_ssl}
*/
export class Ssl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_ssl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ssl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ssl to import
  * @param importFromId The id of the existing Ssl that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/ssl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ssl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_ssl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/ssl portainer_ssl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslConfig
  */
  public constructor(scope: Construct, id: string, config: SslConfig) {
    super(scope, id, {
      terraformResourceType: 'portainer_ssl',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cert = config.cert;
    this._clientCert = config.clientCert;
    this._httpEnabled = config.httpEnabled;
    this._id = config.id;
    this._key = config.key;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert - computed: false, optional: false, required: true
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // http_enabled - computed: false, optional: false, required: true
  private _httpEnabled?: boolean | cdktf.IResolvable; 
  public get httpEnabled() {
    return this.getBooleanAttribute('http_enabled');
  }
  public set httpEnabled(value: boolean | cdktf.IResolvable) {
    this._httpEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpEnabledInput() {
    return this._httpEnabled;
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cert: cdktf.stringToTerraform(this._cert),
      client_cert: cdktf.stringToTerraform(this._clientCert),
      http_enabled: cdktf.booleanToTerraform(this._httpEnabled),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cert: {
        value: cdktf.stringToHclTerraform(this._cert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_cert: {
        value: cdktf.stringToHclTerraform(this._clientCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_enabled: {
        value: cdktf.booleanToHclTerraform(this._httpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
