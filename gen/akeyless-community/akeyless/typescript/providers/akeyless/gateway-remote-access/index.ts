// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_remote_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayRemoteAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of valid URLs to redirect from the Portal back to the remote access server (in a comma-delimited list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_remote_access#allowed_urls GatewayRemoteAccess#allowed_urls}
  */
  readonly allowedUrls?: string;
  /**
  * Specifies whether to show/hide if the session is currently recorded [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_remote_access#hide_session_recording GatewayRemoteAccess#hide_session_recording}
  */
  readonly hideSessionRecording?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_remote_access#id GatewayRemoteAccess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Decide which algorithm will be used as part of the SSH initial hand-shake process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_remote_access#kexalgs GatewayRemoteAccess#kexalgs}
  */
  readonly kexalgs?: string;
  /**
  * Enable support for additional keyboard layouts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_remote_access#keyboard_layout GatewayRemoteAccess#keyboard_layout}
  */
  readonly keyboardLayout?: string;
  /**
  * Signs SSH certificates using legacy ssh-rsa-cert-01@openssh.com signing algorithm [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_remote_access#legacy_ssh_algorithm GatewayRemoteAccess#legacy_ssh_algorithm}
  */
  readonly legacySshAlgorithm?: string;
  /**
  * Specify the usernameSubClaim that exists inside the IDP JWT, e.g. email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_remote_access#rdp_target_configuration GatewayRemoteAccess#rdp_target_configuration}
  */
  readonly rdpTargetConfiguration?: string;
  /**
  * Specify the usernameSubClaim that exists inside the IDP JWT, e.g. email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_remote_access#ssh_target_configuration GatewayRemoteAccess#ssh_target_configuration}
  */
  readonly sshTargetConfiguration?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_remote_access akeyless_gateway_remote_access}
*/
export class GatewayRemoteAccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_gateway_remote_access";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayRemoteAccess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayRemoteAccess to import
  * @param importFromId The id of the existing GatewayRemoteAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_remote_access#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayRemoteAccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_gateway_remote_access", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_remote_access akeyless_gateway_remote_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayRemoteAccessConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GatewayRemoteAccessConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'akeyless_gateway_remote_access',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedUrls = config.allowedUrls;
    this._hideSessionRecording = config.hideSessionRecording;
    this._id = config.id;
    this._kexalgs = config.kexalgs;
    this._keyboardLayout = config.keyboardLayout;
    this._legacySshAlgorithm = config.legacySshAlgorithm;
    this._rdpTargetConfiguration = config.rdpTargetConfiguration;
    this._sshTargetConfiguration = config.sshTargetConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_urls - computed: false, optional: true, required: false
  private _allowedUrls?: string; 
  public get allowedUrls() {
    return this.getStringAttribute('allowed_urls');
  }
  public set allowedUrls(value: string) {
    this._allowedUrls = value;
  }
  public resetAllowedUrls() {
    this._allowedUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUrlsInput() {
    return this._allowedUrls;
  }

  // hide_session_recording - computed: false, optional: true, required: false
  private _hideSessionRecording?: string; 
  public get hideSessionRecording() {
    return this.getStringAttribute('hide_session_recording');
  }
  public set hideSessionRecording(value: string) {
    this._hideSessionRecording = value;
  }
  public resetHideSessionRecording() {
    this._hideSessionRecording = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideSessionRecordingInput() {
    return this._hideSessionRecording;
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

  // kexalgs - computed: false, optional: true, required: false
  private _kexalgs?: string; 
  public get kexalgs() {
    return this.getStringAttribute('kexalgs');
  }
  public set kexalgs(value: string) {
    this._kexalgs = value;
  }
  public resetKexalgs() {
    this._kexalgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kexalgsInput() {
    return this._kexalgs;
  }

  // keyboard_layout - computed: false, optional: true, required: false
  private _keyboardLayout?: string; 
  public get keyboardLayout() {
    return this.getStringAttribute('keyboard_layout');
  }
  public set keyboardLayout(value: string) {
    this._keyboardLayout = value;
  }
  public resetKeyboardLayout() {
    this._keyboardLayout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyboardLayoutInput() {
    return this._keyboardLayout;
  }

  // legacy_ssh_algorithm - computed: false, optional: true, required: false
  private _legacySshAlgorithm?: string; 
  public get legacySshAlgorithm() {
    return this.getStringAttribute('legacy_ssh_algorithm');
  }
  public set legacySshAlgorithm(value: string) {
    this._legacySshAlgorithm = value;
  }
  public resetLegacySshAlgorithm() {
    this._legacySshAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacySshAlgorithmInput() {
    return this._legacySshAlgorithm;
  }

  // rdp_target_configuration - computed: false, optional: true, required: false
  private _rdpTargetConfiguration?: string; 
  public get rdpTargetConfiguration() {
    return this.getStringAttribute('rdp_target_configuration');
  }
  public set rdpTargetConfiguration(value: string) {
    this._rdpTargetConfiguration = value;
  }
  public resetRdpTargetConfiguration() {
    this._rdpTargetConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdpTargetConfigurationInput() {
    return this._rdpTargetConfiguration;
  }

  // ssh_target_configuration - computed: false, optional: true, required: false
  private _sshTargetConfiguration?: string; 
  public get sshTargetConfiguration() {
    return this.getStringAttribute('ssh_target_configuration');
  }
  public set sshTargetConfiguration(value: string) {
    this._sshTargetConfiguration = value;
  }
  public resetSshTargetConfiguration() {
    this._sshTargetConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshTargetConfigurationInput() {
    return this._sshTargetConfiguration;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_urls: cdktf.stringToTerraform(this._allowedUrls),
      hide_session_recording: cdktf.stringToTerraform(this._hideSessionRecording),
      id: cdktf.stringToTerraform(this._id),
      kexalgs: cdktf.stringToTerraform(this._kexalgs),
      keyboard_layout: cdktf.stringToTerraform(this._keyboardLayout),
      legacy_ssh_algorithm: cdktf.stringToTerraform(this._legacySshAlgorithm),
      rdp_target_configuration: cdktf.stringToTerraform(this._rdpTargetConfiguration),
      ssh_target_configuration: cdktf.stringToTerraform(this._sshTargetConfiguration),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_urls: {
        value: cdktf.stringToHclTerraform(this._allowedUrls),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hide_session_recording: {
        value: cdktf.stringToHclTerraform(this._hideSessionRecording),
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
      kexalgs: {
        value: cdktf.stringToHclTerraform(this._kexalgs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keyboard_layout: {
        value: cdktf.stringToHclTerraform(this._keyboardLayout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      legacy_ssh_algorithm: {
        value: cdktf.stringToHclTerraform(this._legacySshAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rdp_target_configuration: {
        value: cdktf.stringToHclTerraform(this._rdpTargetConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_target_configuration: {
        value: cdktf.stringToHclTerraform(this._sshTargetConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
