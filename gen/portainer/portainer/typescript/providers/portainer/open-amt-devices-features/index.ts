// https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/open_amt_devices_features
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpenAmtDevicesFeaturesConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the AMT-managed device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/open_amt_devices_features#device_id OpenAmtDevicesFeatures#device_id}
  */
  readonly deviceId: number;
  /**
  * Portainer environment (endpoint) ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/open_amt_devices_features#environment_id OpenAmtDevicesFeatures#environment_id}
  */
  readonly environmentId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/open_amt_devices_features#id OpenAmtDevicesFeatures#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable IDER (IDE Redirection).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/open_amt_devices_features#ider OpenAmtDevicesFeatures#ider}
  */
  readonly ider?: boolean | cdktf.IResolvable;
  /**
  * Enable KVM (Keyboard/Video/Mouse).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/open_amt_devices_features#kvm OpenAmtDevicesFeatures#kvm}
  */
  readonly kvm?: boolean | cdktf.IResolvable;
  /**
  * Enable redirection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/open_amt_devices_features#redirection OpenAmtDevicesFeatures#redirection}
  */
  readonly redirection?: boolean | cdktf.IResolvable;
  /**
  * Enable SOL (Serial Over LAN).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/open_amt_devices_features#sol OpenAmtDevicesFeatures#sol}
  */
  readonly sol?: boolean | cdktf.IResolvable;
  /**
  * User consent policy (e.g., 'none', 'all', 'kvmOnly').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/open_amt_devices_features#user_consent OpenAmtDevicesFeatures#user_consent}
  */
  readonly userConsent?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/open_amt_devices_features portainer_open_amt_devices_features}
*/
export class OpenAmtDevicesFeatures extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_open_amt_devices_features";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenAmtDevicesFeatures resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenAmtDevicesFeatures to import
  * @param importFromId The id of the existing OpenAmtDevicesFeatures that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/open_amt_devices_features#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenAmtDevicesFeatures to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_open_amt_devices_features", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.16.0/docs/resources/open_amt_devices_features portainer_open_amt_devices_features} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenAmtDevicesFeaturesConfig
  */
  public constructor(scope: Construct, id: string, config: OpenAmtDevicesFeaturesConfig) {
    super(scope, id, {
      terraformResourceType: 'portainer_open_amt_devices_features',
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
    this._deviceId = config.deviceId;
    this._environmentId = config.environmentId;
    this._id = config.id;
    this._ider = config.ider;
    this._kvm = config.kvm;
    this._redirection = config.redirection;
    this._sol = config.sol;
    this._userConsent = config.userConsent;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_id - computed: false, optional: false, required: true
  private _deviceId?: number; 
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }
  public set deviceId(value: number) {
    this._deviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: number; 
  public get environmentId() {
    return this.getNumberAttribute('environment_id');
  }
  public set environmentId(value: number) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
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

  // ider - computed: false, optional: true, required: false
  private _ider?: boolean | cdktf.IResolvable; 
  public get ider() {
    return this.getBooleanAttribute('ider');
  }
  public set ider(value: boolean | cdktf.IResolvable) {
    this._ider = value;
  }
  public resetIder() {
    this._ider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iderInput() {
    return this._ider;
  }

  // kvm - computed: false, optional: true, required: false
  private _kvm?: boolean | cdktf.IResolvable; 
  public get kvm() {
    return this.getBooleanAttribute('kvm');
  }
  public set kvm(value: boolean | cdktf.IResolvable) {
    this._kvm = value;
  }
  public resetKvm() {
    this._kvm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kvmInput() {
    return this._kvm;
  }

  // redirection - computed: false, optional: true, required: false
  private _redirection?: boolean | cdktf.IResolvable; 
  public get redirection() {
    return this.getBooleanAttribute('redirection');
  }
  public set redirection(value: boolean | cdktf.IResolvable) {
    this._redirection = value;
  }
  public resetRedirection() {
    this._redirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectionInput() {
    return this._redirection;
  }

  // sol - computed: false, optional: true, required: false
  private _sol?: boolean | cdktf.IResolvable; 
  public get sol() {
    return this.getBooleanAttribute('sol');
  }
  public set sol(value: boolean | cdktf.IResolvable) {
    this._sol = value;
  }
  public resetSol() {
    this._sol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get solInput() {
    return this._sol;
  }

  // user_consent - computed: false, optional: true, required: false
  private _userConsent?: string; 
  public get userConsent() {
    return this.getStringAttribute('user_consent');
  }
  public set userConsent(value: string) {
    this._userConsent = value;
  }
  public resetUserConsent() {
    this._userConsent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userConsentInput() {
    return this._userConsent;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_id: cdktf.numberToTerraform(this._deviceId),
      environment_id: cdktf.numberToTerraform(this._environmentId),
      id: cdktf.stringToTerraform(this._id),
      ider: cdktf.booleanToTerraform(this._ider),
      kvm: cdktf.booleanToTerraform(this._kvm),
      redirection: cdktf.booleanToTerraform(this._redirection),
      sol: cdktf.booleanToTerraform(this._sol),
      user_consent: cdktf.stringToTerraform(this._userConsent),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_id: {
        value: cdktf.numberToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      environment_id: {
        value: cdktf.numberToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ider: {
        value: cdktf.booleanToHclTerraform(this._ider),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kvm: {
        value: cdktf.booleanToHclTerraform(this._kvm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redirection: {
        value: cdktf.booleanToHclTerraform(this._redirection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sol: {
        value: cdktf.booleanToHclTerraform(this._sol),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_consent: {
        value: cdktf.stringToHclTerraform(this._userConsent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
