// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections_auth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateAccessServiceConnectionsAuthConfig extends cdktf.TerraformMetaArguments {
  /**
  * IPSEC authentication method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections_auth#auth PrivateAccessServiceConnectionsAuth#auth}
  */
  readonly auth?: string;
  /**
  * the name of IPSEC authentication certificate that uploaded to SASE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections_auth#ipsec_cert_name PrivateAccessServiceConnectionsAuth#ipsec_cert_name}
  */
  readonly ipsecCertName?: string;
  /**
  * Peer PKI user name that created on SASE for IPSEC authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections_auth#ipsec_peer_name PrivateAccessServiceConnectionsAuth#ipsec_peer_name}
  */
  readonly ipsecPeerName?: string;
  /**
  * IPSEC auth by pre shared key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections_auth#ipsec_pre_shared_key PrivateAccessServiceConnectionsAuth#ipsec_pre_shared_key}
  */
  readonly ipsecPreSharedKey?: string;
  /**
  * the unique uuid for service connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections_auth#service_connection_id PrivateAccessServiceConnectionsAuth#service_connection_id}
  */
  readonly serviceConnectionId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections_auth fortisase_private_access_service_connections_auth}
*/
export class PrivateAccessServiceConnectionsAuth extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_private_access_service_connections_auth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivateAccessServiceConnectionsAuth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivateAccessServiceConnectionsAuth to import
  * @param importFromId The id of the existing PrivateAccessServiceConnectionsAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections_auth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivateAccessServiceConnectionsAuth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_private_access_service_connections_auth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/private_access_service_connections_auth fortisase_private_access_service_connections_auth} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateAccessServiceConnectionsAuthConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PrivateAccessServiceConnectionsAuthConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortisase_private_access_service_connections_auth',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auth = config.auth;
    this._ipsecCertName = config.ipsecCertName;
    this._ipsecPeerName = config.ipsecPeerName;
    this._ipsecPreSharedKey = config.ipsecPreSharedKey;
    this._serviceConnectionId = config.serviceConnectionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth - computed: true, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipsec_cert_name - computed: true, optional: true, required: false
  private _ipsecCertName?: string; 
  public get ipsecCertName() {
    return this.getStringAttribute('ipsec_cert_name');
  }
  public set ipsecCertName(value: string) {
    this._ipsecCertName = value;
  }
  public resetIpsecCertName() {
    this._ipsecCertName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecCertNameInput() {
    return this._ipsecCertName;
  }

  // ipsec_peer_name - computed: true, optional: true, required: false
  private _ipsecPeerName?: string; 
  public get ipsecPeerName() {
    return this.getStringAttribute('ipsec_peer_name');
  }
  public set ipsecPeerName(value: string) {
    this._ipsecPeerName = value;
  }
  public resetIpsecPeerName() {
    this._ipsecPeerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPeerNameInput() {
    return this._ipsecPeerName;
  }

  // ipsec_pre_shared_key - computed: true, optional: true, required: false
  private _ipsecPreSharedKey?: string; 
  public get ipsecPreSharedKey() {
    return this.getStringAttribute('ipsec_pre_shared_key');
  }
  public set ipsecPreSharedKey(value: string) {
    this._ipsecPreSharedKey = value;
  }
  public resetIpsecPreSharedKey() {
    this._ipsecPreSharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPreSharedKeyInput() {
    return this._ipsecPreSharedKey;
  }

  // service_connection_id - computed: true, optional: true, required: false
  private _serviceConnectionId?: string; 
  public get serviceConnectionId() {
    return this.getStringAttribute('service_connection_id');
  }
  public set serviceConnectionId(value: string) {
    this._serviceConnectionId = value;
  }
  public resetServiceConnectionId() {
    this._serviceConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConnectionIdInput() {
    return this._serviceConnectionId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth: cdktf.stringToTerraform(this._auth),
      ipsec_cert_name: cdktf.stringToTerraform(this._ipsecCertName),
      ipsec_peer_name: cdktf.stringToTerraform(this._ipsecPeerName),
      ipsec_pre_shared_key: cdktf.stringToTerraform(this._ipsecPreSharedKey),
      service_connection_id: cdktf.stringToTerraform(this._serviceConnectionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth: {
        value: cdktf.stringToHclTerraform(this._auth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_cert_name: {
        value: cdktf.stringToHclTerraform(this._ipsecCertName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_peer_name: {
        value: cdktf.stringToHclTerraform(this._ipsecPeerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_pre_shared_key: {
        value: cdktf.stringToHclTerraform(this._ipsecPreSharedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_connection_id: {
        value: cdktf.stringToHclTerraform(this._serviceConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
