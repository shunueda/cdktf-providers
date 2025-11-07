// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/banner
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BannerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Select the banner type
  *   - Choices: `exec`, `incoming`, `login`, `motd`, `prompt-timeout`, `slip-ppp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/banner#banner_type Banner#banner_type}
  */
  readonly bannerType: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/banner#device Banner#device}
  */
  readonly device?: string;
  /**
  * c banner-text c, where 'c' is a delimiting character
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/banner#line Banner#line}
  */
  readonly line: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/banner iosxr_banner}
*/
export class Banner extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_banner";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Banner resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Banner to import
  * @param importFromId The id of the existing Banner that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/banner#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Banner to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_banner", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/banner iosxr_banner} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BannerConfig
  */
  public constructor(scope: Construct, id: string, config: BannerConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_banner',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bannerType = config.bannerType;
    this._device = config.device;
    this._line = config.line;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // banner_type - computed: false, optional: false, required: true
  private _bannerType?: string; 
  public get bannerType() {
    return this.getStringAttribute('banner_type');
  }
  public set bannerType(value: string) {
    this._bannerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bannerTypeInput() {
    return this._bannerType;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // line - computed: false, optional: false, required: true
  private _line?: string; 
  public get line() {
    return this.getStringAttribute('line');
  }
  public set line(value: string) {
    this._line = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lineInput() {
    return this._line;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      banner_type: cdktf.stringToTerraform(this._bannerType),
      device: cdktf.stringToTerraform(this._device),
      line: cdktf.stringToTerraform(this._line),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      banner_type: {
        value: cdktf.stringToHclTerraform(this._bannerType),
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
      line: {
        value: cdktf.stringToHclTerraform(this._line),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
