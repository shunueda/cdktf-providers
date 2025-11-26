// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/authentication_portal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationPortalConfig extends cdktf.TerraformMetaArguments {
  /**
  * The authentication profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/authentication_portal#authentication_profile AuthenticationPortal#authentication_profile}
  */
  readonly authenticationProfile?: string;
  /**
  * The certificate profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/authentication_portal#certificate_profile AuthenticationPortal#certificate_profile}
  */
  readonly certificateProfile?: string;
  /**
  * The device in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/authentication_portal#device AuthenticationPortal#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/authentication_portal#folder AuthenticationPortal#folder}
  */
  readonly folder?: string;
  /**
  * The UDP port for inbound authentication prompts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/authentication_portal#gp_udp_port AuthenticationPortal#gp_udp_port}
  */
  readonly gpUdpPort?: number;
  /**
  * The idle timeout value (minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/authentication_portal#idle_timer AuthenticationPortal#idle_timer}
  */
  readonly idleTimer?: number;
  /**
  * The authentication portal IP address or hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/authentication_portal#redirect_host AuthenticationPortal#redirect_host}
  */
  readonly redirectHost: string;
  /**
  * The snippet in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/authentication_portal#snippet AuthenticationPortal#snippet}
  */
  readonly snippet?: string;
  /**
  * Timer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/authentication_portal#timer AuthenticationPortal#timer}
  */
  readonly timer?: number;
  /**
  * The SSL/TLS service profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/authentication_portal#tls_service_profile AuthenticationPortal#tls_service_profile}
  */
  readonly tlsServiceProfile?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/authentication_portal scm_authentication_portal}
*/
export class AuthenticationPortal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_authentication_portal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthenticationPortal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthenticationPortal to import
  * @param importFromId The id of the existing AuthenticationPortal that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/authentication_portal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthenticationPortal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_authentication_portal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/authentication_portal scm_authentication_portal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationPortalConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationPortalConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_authentication_portal',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.5',
        providerVersionConstraint: '1.0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationProfile = config.authenticationProfile;
    this._certificateProfile = config.certificateProfile;
    this._device = config.device;
    this._folder = config.folder;
    this._gpUdpPort = config.gpUdpPort;
    this._idleTimer = config.idleTimer;
    this._redirectHost = config.redirectHost;
    this._snippet = config.snippet;
    this._timer = config.timer;
    this._tlsServiceProfile = config.tlsServiceProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_profile - computed: false, optional: true, required: false
  private _authenticationProfile?: string; 
  public get authenticationProfile() {
    return this.getStringAttribute('authentication_profile');
  }
  public set authenticationProfile(value: string) {
    this._authenticationProfile = value;
  }
  public resetAuthenticationProfile() {
    this._authenticationProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationProfileInput() {
    return this._authenticationProfile;
  }

  // certificate_profile - computed: false, optional: true, required: false
  private _certificateProfile?: string; 
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }
  public set certificateProfile(value: string) {
    this._certificateProfile = value;
  }
  public resetCertificateProfile() {
    this._certificateProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProfileInput() {
    return this._certificateProfile;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // gp_udp_port - computed: false, optional: true, required: false
  private _gpUdpPort?: number; 
  public get gpUdpPort() {
    return this.getNumberAttribute('gp_udp_port');
  }
  public set gpUdpPort(value: number) {
    this._gpUdpPort = value;
  }
  public resetGpUdpPort() {
    this._gpUdpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpUdpPortInput() {
    return this._gpUdpPort;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_timer - computed: false, optional: true, required: false
  private _idleTimer?: number; 
  public get idleTimer() {
    return this.getNumberAttribute('idle_timer');
  }
  public set idleTimer(value: number) {
    this._idleTimer = value;
  }
  public resetIdleTimer() {
    this._idleTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimerInput() {
    return this._idleTimer;
  }

  // redirect_host - computed: false, optional: false, required: true
  private _redirectHost?: string; 
  public get redirectHost() {
    return this.getStringAttribute('redirect_host');
  }
  public set redirectHost(value: string) {
    this._redirectHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectHostInput() {
    return this._redirectHost;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // timer - computed: false, optional: true, required: false
  private _timer?: number; 
  public get timer() {
    return this.getNumberAttribute('timer');
  }
  public set timer(value: number) {
    this._timer = value;
  }
  public resetTimer() {
    this._timer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerInput() {
    return this._timer;
  }

  // tls_service_profile - computed: false, optional: true, required: false
  private _tlsServiceProfile?: string; 
  public get tlsServiceProfile() {
    return this.getStringAttribute('tls_service_profile');
  }
  public set tlsServiceProfile(value: string) {
    this._tlsServiceProfile = value;
  }
  public resetTlsServiceProfile() {
    this._tlsServiceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsServiceProfileInput() {
    return this._tlsServiceProfile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_profile: cdktf.stringToTerraform(this._authenticationProfile),
      certificate_profile: cdktf.stringToTerraform(this._certificateProfile),
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      gp_udp_port: cdktf.numberToTerraform(this._gpUdpPort),
      idle_timer: cdktf.numberToTerraform(this._idleTimer),
      redirect_host: cdktf.stringToTerraform(this._redirectHost),
      snippet: cdktf.stringToTerraform(this._snippet),
      timer: cdktf.numberToTerraform(this._timer),
      tls_service_profile: cdktf.stringToTerraform(this._tlsServiceProfile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_profile: {
        value: cdktf.stringToHclTerraform(this._authenticationProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_profile: {
        value: cdktf.stringToHclTerraform(this._certificateProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gp_udp_port: {
        value: cdktf.numberToHclTerraform(this._gpUdpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      idle_timer: {
        value: cdktf.numberToHclTerraform(this._idleTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redirect_host: {
        value: cdktf.stringToHclTerraform(this._redirectHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timer: {
        value: cdktf.numberToHclTerraform(this._timer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tls_service_profile: {
        value: cdktf.stringToHclTerraform(this._tlsServiceProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
