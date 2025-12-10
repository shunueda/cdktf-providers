// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/aaa_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AaaSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Administration Node. Required for ISE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/aaa_settings#client_aaa_pan AaaSettings#client_aaa_pan}
  */
  readonly clientAaaPan?: string;
  /**
  * The server to use as a primary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/aaa_settings#client_aaa_primary_server_ip AaaSettings#client_aaa_primary_server_ip}
  */
  readonly clientAaaPrimaryServerIp?: string;
  /**
  * Server protocol
  *   - Choices: `RADIUS`, `TACACS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/aaa_settings#client_aaa_protocol AaaSettings#client_aaa_protocol}
  */
  readonly clientAaaProtocol?: string;
  /**
  * The server to use as a secondary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/aaa_settings#client_aaa_secondary_server_ip AaaSettings#client_aaa_secondary_server_ip}
  */
  readonly clientAaaSecondaryServerIp?: string;
  /**
  * Type of client AAA server
  *   - Choices: `AAA`, `ISE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/aaa_settings#client_aaa_server_type AaaSettings#client_aaa_server_type}
  */
  readonly clientAaaServerType?: string;
  /**
  * Only relevant for server type `ISE`, shared secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/aaa_settings#client_aaa_shared_secret AaaSettings#client_aaa_shared_secret}
  */
  readonly clientAaaSharedSecret?: string;
  /**
  * Administration Node. Required for ISE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/aaa_settings#network_aaa_pan AaaSettings#network_aaa_pan}
  */
  readonly networkAaaPan?: string;
  /**
  * The server to use as a primary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/aaa_settings#network_aaa_primary_server_ip AaaSettings#network_aaa_primary_server_ip}
  */
  readonly networkAaaPrimaryServerIp?: string;
  /**
  * Server protocol
  *   - Choices: `RADIUS`, `TACACS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/aaa_settings#network_aaa_protocol AaaSettings#network_aaa_protocol}
  */
  readonly networkAaaProtocol?: string;
  /**
  * The server to use as a secondary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/aaa_settings#network_aaa_secondary_server_ip AaaSettings#network_aaa_secondary_server_ip}
  */
  readonly networkAaaSecondaryServerIp?: string;
  /**
  * Type of network AAA server
  *   - Choices: `AAA`, `ISE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/aaa_settings#network_aaa_server_type AaaSettings#network_aaa_server_type}
  */
  readonly networkAaaServerType?: string;
  /**
  * Only relevant for server type `ISE`, shared secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/aaa_settings#network_aaa_shared_secret AaaSettings#network_aaa_shared_secret}
  */
  readonly networkAaaSharedSecret?: string;
  /**
  * The site ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/aaa_settings#site_id AaaSettings#site_id}
  */
  readonly siteId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/aaa_settings catalystcenter_aaa_settings}
*/
export class AaaSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_aaa_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AaaSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AaaSettings to import
  * @param importFromId The id of the existing AaaSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/aaa_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AaaSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_aaa_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/resources/aaa_settings catalystcenter_aaa_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AaaSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: AaaSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_aaa_settings',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.5',
        providerVersionConstraint: '0.4.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientAaaPan = config.clientAaaPan;
    this._clientAaaPrimaryServerIp = config.clientAaaPrimaryServerIp;
    this._clientAaaProtocol = config.clientAaaProtocol;
    this._clientAaaSecondaryServerIp = config.clientAaaSecondaryServerIp;
    this._clientAaaServerType = config.clientAaaServerType;
    this._clientAaaSharedSecret = config.clientAaaSharedSecret;
    this._networkAaaPan = config.networkAaaPan;
    this._networkAaaPrimaryServerIp = config.networkAaaPrimaryServerIp;
    this._networkAaaProtocol = config.networkAaaProtocol;
    this._networkAaaSecondaryServerIp = config.networkAaaSecondaryServerIp;
    this._networkAaaServerType = config.networkAaaServerType;
    this._networkAaaSharedSecret = config.networkAaaSharedSecret;
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_aaa_pan - computed: false, optional: true, required: false
  private _clientAaaPan?: string; 
  public get clientAaaPan() {
    return this.getStringAttribute('client_aaa_pan');
  }
  public set clientAaaPan(value: string) {
    this._clientAaaPan = value;
  }
  public resetClientAaaPan() {
    this._clientAaaPan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAaaPanInput() {
    return this._clientAaaPan;
  }

  // client_aaa_primary_server_ip - computed: false, optional: true, required: false
  private _clientAaaPrimaryServerIp?: string; 
  public get clientAaaPrimaryServerIp() {
    return this.getStringAttribute('client_aaa_primary_server_ip');
  }
  public set clientAaaPrimaryServerIp(value: string) {
    this._clientAaaPrimaryServerIp = value;
  }
  public resetClientAaaPrimaryServerIp() {
    this._clientAaaPrimaryServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAaaPrimaryServerIpInput() {
    return this._clientAaaPrimaryServerIp;
  }

  // client_aaa_protocol - computed: false, optional: true, required: false
  private _clientAaaProtocol?: string; 
  public get clientAaaProtocol() {
    return this.getStringAttribute('client_aaa_protocol');
  }
  public set clientAaaProtocol(value: string) {
    this._clientAaaProtocol = value;
  }
  public resetClientAaaProtocol() {
    this._clientAaaProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAaaProtocolInput() {
    return this._clientAaaProtocol;
  }

  // client_aaa_secondary_server_ip - computed: false, optional: true, required: false
  private _clientAaaSecondaryServerIp?: string; 
  public get clientAaaSecondaryServerIp() {
    return this.getStringAttribute('client_aaa_secondary_server_ip');
  }
  public set clientAaaSecondaryServerIp(value: string) {
    this._clientAaaSecondaryServerIp = value;
  }
  public resetClientAaaSecondaryServerIp() {
    this._clientAaaSecondaryServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAaaSecondaryServerIpInput() {
    return this._clientAaaSecondaryServerIp;
  }

  // client_aaa_server_type - computed: false, optional: true, required: false
  private _clientAaaServerType?: string; 
  public get clientAaaServerType() {
    return this.getStringAttribute('client_aaa_server_type');
  }
  public set clientAaaServerType(value: string) {
    this._clientAaaServerType = value;
  }
  public resetClientAaaServerType() {
    this._clientAaaServerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAaaServerTypeInput() {
    return this._clientAaaServerType;
  }

  // client_aaa_shared_secret - computed: false, optional: true, required: false
  private _clientAaaSharedSecret?: string; 
  public get clientAaaSharedSecret() {
    return this.getStringAttribute('client_aaa_shared_secret');
  }
  public set clientAaaSharedSecret(value: string) {
    this._clientAaaSharedSecret = value;
  }
  public resetClientAaaSharedSecret() {
    this._clientAaaSharedSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAaaSharedSecretInput() {
    return this._clientAaaSharedSecret;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_aaa_pan - computed: false, optional: true, required: false
  private _networkAaaPan?: string; 
  public get networkAaaPan() {
    return this.getStringAttribute('network_aaa_pan');
  }
  public set networkAaaPan(value: string) {
    this._networkAaaPan = value;
  }
  public resetNetworkAaaPan() {
    this._networkAaaPan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAaaPanInput() {
    return this._networkAaaPan;
  }

  // network_aaa_primary_server_ip - computed: false, optional: true, required: false
  private _networkAaaPrimaryServerIp?: string; 
  public get networkAaaPrimaryServerIp() {
    return this.getStringAttribute('network_aaa_primary_server_ip');
  }
  public set networkAaaPrimaryServerIp(value: string) {
    this._networkAaaPrimaryServerIp = value;
  }
  public resetNetworkAaaPrimaryServerIp() {
    this._networkAaaPrimaryServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAaaPrimaryServerIpInput() {
    return this._networkAaaPrimaryServerIp;
  }

  // network_aaa_protocol - computed: false, optional: true, required: false
  private _networkAaaProtocol?: string; 
  public get networkAaaProtocol() {
    return this.getStringAttribute('network_aaa_protocol');
  }
  public set networkAaaProtocol(value: string) {
    this._networkAaaProtocol = value;
  }
  public resetNetworkAaaProtocol() {
    this._networkAaaProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAaaProtocolInput() {
    return this._networkAaaProtocol;
  }

  // network_aaa_secondary_server_ip - computed: false, optional: true, required: false
  private _networkAaaSecondaryServerIp?: string; 
  public get networkAaaSecondaryServerIp() {
    return this.getStringAttribute('network_aaa_secondary_server_ip');
  }
  public set networkAaaSecondaryServerIp(value: string) {
    this._networkAaaSecondaryServerIp = value;
  }
  public resetNetworkAaaSecondaryServerIp() {
    this._networkAaaSecondaryServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAaaSecondaryServerIpInput() {
    return this._networkAaaSecondaryServerIp;
  }

  // network_aaa_server_type - computed: false, optional: true, required: false
  private _networkAaaServerType?: string; 
  public get networkAaaServerType() {
    return this.getStringAttribute('network_aaa_server_type');
  }
  public set networkAaaServerType(value: string) {
    this._networkAaaServerType = value;
  }
  public resetNetworkAaaServerType() {
    this._networkAaaServerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAaaServerTypeInput() {
    return this._networkAaaServerType;
  }

  // network_aaa_shared_secret - computed: false, optional: true, required: false
  private _networkAaaSharedSecret?: string; 
  public get networkAaaSharedSecret() {
    return this.getStringAttribute('network_aaa_shared_secret');
  }
  public set networkAaaSharedSecret(value: string) {
    this._networkAaaSharedSecret = value;
  }
  public resetNetworkAaaSharedSecret() {
    this._networkAaaSharedSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAaaSharedSecretInput() {
    return this._networkAaaSharedSecret;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_aaa_pan: cdktf.stringToTerraform(this._clientAaaPan),
      client_aaa_primary_server_ip: cdktf.stringToTerraform(this._clientAaaPrimaryServerIp),
      client_aaa_protocol: cdktf.stringToTerraform(this._clientAaaProtocol),
      client_aaa_secondary_server_ip: cdktf.stringToTerraform(this._clientAaaSecondaryServerIp),
      client_aaa_server_type: cdktf.stringToTerraform(this._clientAaaServerType),
      client_aaa_shared_secret: cdktf.stringToTerraform(this._clientAaaSharedSecret),
      network_aaa_pan: cdktf.stringToTerraform(this._networkAaaPan),
      network_aaa_primary_server_ip: cdktf.stringToTerraform(this._networkAaaPrimaryServerIp),
      network_aaa_protocol: cdktf.stringToTerraform(this._networkAaaProtocol),
      network_aaa_secondary_server_ip: cdktf.stringToTerraform(this._networkAaaSecondaryServerIp),
      network_aaa_server_type: cdktf.stringToTerraform(this._networkAaaServerType),
      network_aaa_shared_secret: cdktf.stringToTerraform(this._networkAaaSharedSecret),
      site_id: cdktf.stringToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_aaa_pan: {
        value: cdktf.stringToHclTerraform(this._clientAaaPan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_aaa_primary_server_ip: {
        value: cdktf.stringToHclTerraform(this._clientAaaPrimaryServerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_aaa_protocol: {
        value: cdktf.stringToHclTerraform(this._clientAaaProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_aaa_secondary_server_ip: {
        value: cdktf.stringToHclTerraform(this._clientAaaSecondaryServerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_aaa_server_type: {
        value: cdktf.stringToHclTerraform(this._clientAaaServerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_aaa_shared_secret: {
        value: cdktf.stringToHclTerraform(this._clientAaaSharedSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_aaa_pan: {
        value: cdktf.stringToHclTerraform(this._networkAaaPan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_aaa_primary_server_ip: {
        value: cdktf.stringToHclTerraform(this._networkAaaPrimaryServerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_aaa_protocol: {
        value: cdktf.stringToHclTerraform(this._networkAaaProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_aaa_secondary_server_ip: {
        value: cdktf.stringToHclTerraform(this._networkAaaSecondaryServerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_aaa_server_type: {
        value: cdktf.stringToHclTerraform(this._networkAaaServerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_aaa_shared_secret: {
        value: cdktf.stringToHclTerraform(this._networkAaaSharedSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
