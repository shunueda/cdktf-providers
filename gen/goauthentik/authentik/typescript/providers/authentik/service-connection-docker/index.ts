// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/service_connection_docker
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceConnectionDockerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/service_connection_docker#id ServiceConnectionDocker#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/service_connection_docker#local ServiceConnectionDocker#local}
  */
  readonly local?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/service_connection_docker#name ServiceConnectionDocker#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/service_connection_docker#tls_authentication ServiceConnectionDocker#tls_authentication}
  */
  readonly tlsAuthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/service_connection_docker#tls_verification ServiceConnectionDocker#tls_verification}
  */
  readonly tlsVerification?: string;
  /**
  * Defaults to `http+unix:///var/run/docker.sock`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/service_connection_docker#url ServiceConnectionDocker#url}
  */
  readonly url?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/service_connection_docker authentik_service_connection_docker}
*/
export class ServiceConnectionDocker extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_service_connection_docker";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceConnectionDocker resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceConnectionDocker to import
  * @param importFromId The id of the existing ServiceConnectionDocker that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/service_connection_docker#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceConnectionDocker to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_service_connection_docker", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/service_connection_docker authentik_service_connection_docker} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceConnectionDockerConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceConnectionDockerConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_service_connection_docker',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0',
        providerVersionConstraint: '2025.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._local = config.local;
    this._name = config.name;
    this._tlsAuthentication = config.tlsAuthentication;
    this._tlsVerification = config.tlsVerification;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // local - computed: false, optional: true, required: false
  private _local?: boolean | cdktf.IResolvable; 
  public get local() {
    return this.getBooleanAttribute('local');
  }
  public set local(value: boolean | cdktf.IResolvable) {
    this._local = value;
  }
  public resetLocal() {
    this._local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local;
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

  // tls_authentication - computed: false, optional: true, required: false
  private _tlsAuthentication?: string; 
  public get tlsAuthentication() {
    return this.getStringAttribute('tls_authentication');
  }
  public set tlsAuthentication(value: string) {
    this._tlsAuthentication = value;
  }
  public resetTlsAuthentication() {
    this._tlsAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsAuthenticationInput() {
    return this._tlsAuthentication;
  }

  // tls_verification - computed: false, optional: true, required: false
  private _tlsVerification?: string; 
  public get tlsVerification() {
    return this.getStringAttribute('tls_verification');
  }
  public set tlsVerification(value: string) {
    this._tlsVerification = value;
  }
  public resetTlsVerification() {
    this._tlsVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVerificationInput() {
    return this._tlsVerification;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      local: cdktf.booleanToTerraform(this._local),
      name: cdktf.stringToTerraform(this._name),
      tls_authentication: cdktf.stringToTerraform(this._tlsAuthentication),
      tls_verification: cdktf.stringToTerraform(this._tlsVerification),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local: {
        value: cdktf.booleanToHclTerraform(this._local),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_authentication: {
        value: cdktf.stringToHclTerraform(this._tlsAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_verification: {
        value: cdktf.stringToHclTerraform(this._tlsVerification),
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
