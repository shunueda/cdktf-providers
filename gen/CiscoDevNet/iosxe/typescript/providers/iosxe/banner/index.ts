// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/banner
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BannerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/banner#delete_mode Banner#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/banner#device Banner#device}
  */
  readonly device?: string;
  /**
  * Banner message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/banner#exec_banner Banner#exec_banner}
  */
  readonly execBanner?: string;
  /**
  * Banner message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/banner#login_banner Banner#login_banner}
  */
  readonly loginBanner?: string;
  /**
  * Banner message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/banner#motd_banner Banner#motd_banner}
  */
  readonly motdBanner?: string;
  /**
  * Banner message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/banner#prompt_timeout_banner Banner#prompt_timeout_banner}
  */
  readonly promptTimeoutBanner?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/banner iosxe_banner}
*/
export class Banner extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_banner";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Banner resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Banner to import
  * @param importFromId The id of the existing Banner that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/banner#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Banner to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_banner", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/banner iosxe_banner} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BannerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BannerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_banner',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.10.0',
        providerVersionConstraint: '0.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._execBanner = config.execBanner;
    this._loginBanner = config.loginBanner;
    this._motdBanner = config.motdBanner;
    this._promptTimeoutBanner = config.promptTimeoutBanner;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
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

  // exec_banner - computed: false, optional: true, required: false
  private _execBanner?: string; 
  public get execBanner() {
    return this.getStringAttribute('exec_banner');
  }
  public set execBanner(value: string) {
    this._execBanner = value;
  }
  public resetExecBanner() {
    this._execBanner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execBannerInput() {
    return this._execBanner;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // login_banner - computed: false, optional: true, required: false
  private _loginBanner?: string; 
  public get loginBanner() {
    return this.getStringAttribute('login_banner');
  }
  public set loginBanner(value: string) {
    this._loginBanner = value;
  }
  public resetLoginBanner() {
    this._loginBanner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginBannerInput() {
    return this._loginBanner;
  }

  // motd_banner - computed: false, optional: true, required: false
  private _motdBanner?: string; 
  public get motdBanner() {
    return this.getStringAttribute('motd_banner');
  }
  public set motdBanner(value: string) {
    this._motdBanner = value;
  }
  public resetMotdBanner() {
    this._motdBanner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get motdBannerInput() {
    return this._motdBanner;
  }

  // prompt_timeout_banner - computed: false, optional: true, required: false
  private _promptTimeoutBanner?: string; 
  public get promptTimeoutBanner() {
    return this.getStringAttribute('prompt_timeout_banner');
  }
  public set promptTimeoutBanner(value: string) {
    this._promptTimeoutBanner = value;
  }
  public resetPromptTimeoutBanner() {
    this._promptTimeoutBanner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptTimeoutBannerInput() {
    return this._promptTimeoutBanner;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      exec_banner: cdktf.stringToTerraform(this._execBanner),
      login_banner: cdktf.stringToTerraform(this._loginBanner),
      motd_banner: cdktf.stringToTerraform(this._motdBanner),
      prompt_timeout_banner: cdktf.stringToTerraform(this._promptTimeoutBanner),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
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
      exec_banner: {
        value: cdktf.stringToHclTerraform(this._execBanner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_banner: {
        value: cdktf.stringToHclTerraform(this._loginBanner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      motd_banner: {
        value: cdktf.stringToHclTerraform(this._motdBanner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prompt_timeout_banner: {
        value: cdktf.stringToHclTerraform(this._promptTimeoutBanner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
