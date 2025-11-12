// https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/ntp_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NtpServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable iburst for faster synchronization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/ntp_server#iburst NtpServer#iburst}
  */
  readonly iburst?: boolean | cdktf.IResolvable;
  /**
  * Key ID used for authentication with the NTP server. This should be configured with a key ID that has been already created on the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/ntp_server#key_id NtpServer#key_id}
  */
  readonly keyId?: number;
  /**
  * Enable or disable NTP authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/ntp_server#ntp_authentication NtpServer#ntp_authentication}
  */
  readonly ntpAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the NTP service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/ntp_server#ntp_service NtpServer#ntp_service}
  */
  readonly ntpService?: boolean | cdktf.IResolvable;
  /**
  * Set to true if this is the preferred server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/ntp_server#prefer NtpServer#prefer}
  */
  readonly prefer?: boolean | cdktf.IResolvable;
  /**
  * IPv4/IPv6 address or FQDN of the NTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/ntp_server#server NtpServer#server}
  */
  readonly server: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/ntp_server f5os_ntp_server}
*/
export class NtpServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "f5os_ntp_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NtpServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NtpServer to import
  * @param importFromId The id of the existing NtpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/ntp_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NtpServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "f5os_ntp_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/ntp_server f5os_ntp_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NtpServerConfig
  */
  public constructor(scope: Construct, id: string, config: NtpServerConfig) {
    super(scope, id, {
      terraformResourceType: 'f5os_ntp_server',
      terraformGeneratorMetadata: {
        providerName: 'f5os',
        providerVersion: '1.10.0',
        providerVersionConstraint: '1.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._iburst = config.iburst;
    this._keyId = config.keyId;
    this._ntpAuthentication = config.ntpAuthentication;
    this._ntpService = config.ntpService;
    this._prefer = config.prefer;
    this._server = config.server;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // iburst - computed: false, optional: true, required: false
  private _iburst?: boolean | cdktf.IResolvable; 
  public get iburst() {
    return this.getBooleanAttribute('iburst');
  }
  public set iburst(value: boolean | cdktf.IResolvable) {
    this._iburst = value;
  }
  public resetIburst() {
    this._iburst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iburstInput() {
    return this._iburst;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: number; 
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }
  public set keyId(value: number) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // ntp_authentication - computed: false, optional: true, required: false
  private _ntpAuthentication?: boolean | cdktf.IResolvable; 
  public get ntpAuthentication() {
    return this.getBooleanAttribute('ntp_authentication');
  }
  public set ntpAuthentication(value: boolean | cdktf.IResolvable) {
    this._ntpAuthentication = value;
  }
  public resetNtpAuthentication() {
    this._ntpAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpAuthenticationInput() {
    return this._ntpAuthentication;
  }

  // ntp_service - computed: false, optional: true, required: false
  private _ntpService?: boolean | cdktf.IResolvable; 
  public get ntpService() {
    return this.getBooleanAttribute('ntp_service');
  }
  public set ntpService(value: boolean | cdktf.IResolvable) {
    this._ntpService = value;
  }
  public resetNtpService() {
    this._ntpService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServiceInput() {
    return this._ntpService;
  }

  // prefer - computed: false, optional: true, required: false
  private _prefer?: boolean | cdktf.IResolvable; 
  public get prefer() {
    return this.getBooleanAttribute('prefer');
  }
  public set prefer(value: boolean | cdktf.IResolvable) {
    this._prefer = value;
  }
  public resetPrefer() {
    this._prefer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferInput() {
    return this._prefer;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      iburst: cdktf.booleanToTerraform(this._iburst),
      key_id: cdktf.numberToTerraform(this._keyId),
      ntp_authentication: cdktf.booleanToTerraform(this._ntpAuthentication),
      ntp_service: cdktf.booleanToTerraform(this._ntpService),
      prefer: cdktf.booleanToTerraform(this._prefer),
      server: cdktf.stringToTerraform(this._server),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      iburst: {
        value: cdktf.booleanToHclTerraform(this._iburst),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_id: {
        value: cdktf.numberToHclTerraform(this._keyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ntp_authentication: {
        value: cdktf.booleanToHclTerraform(this._ntpAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ntp_service: {
        value: cdktf.booleanToHclTerraform(this._ntpService),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prefer: {
        value: cdktf.booleanToHclTerraform(this._prefer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
