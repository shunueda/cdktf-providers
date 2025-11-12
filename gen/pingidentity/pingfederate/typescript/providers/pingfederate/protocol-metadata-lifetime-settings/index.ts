// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/protocol_metadata_lifetime_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProtocolMetadataLifetimeSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * This field adjusts the validity of your metadata in minutes. The default value is `1440` (1 day).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/protocol_metadata_lifetime_settings#cache_duration ProtocolMetadataLifetimeSettings#cache_duration}
  */
  readonly cacheDuration?: number;
  /**
  * This field adjusts the frequency of automatic reloading of SAML metadata in minutes. The default value is `1440` (1 day).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/protocol_metadata_lifetime_settings#reload_delay ProtocolMetadataLifetimeSettings#reload_delay}
  */
  readonly reloadDelay?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/protocol_metadata_lifetime_settings pingfederate_protocol_metadata_lifetime_settings}
*/
export class ProtocolMetadataLifetimeSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_protocol_metadata_lifetime_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProtocolMetadataLifetimeSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProtocolMetadataLifetimeSettings to import
  * @param importFromId The id of the existing ProtocolMetadataLifetimeSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/protocol_metadata_lifetime_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProtocolMetadataLifetimeSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_protocol_metadata_lifetime_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/protocol_metadata_lifetime_settings pingfederate_protocol_metadata_lifetime_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProtocolMetadataLifetimeSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ProtocolMetadataLifetimeSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_protocol_metadata_lifetime_settings',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cacheDuration = config.cacheDuration;
    this._reloadDelay = config.reloadDelay;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_duration - computed: true, optional: true, required: false
  private _cacheDuration?: number; 
  public get cacheDuration() {
    return this.getNumberAttribute('cache_duration');
  }
  public set cacheDuration(value: number) {
    this._cacheDuration = value;
  }
  public resetCacheDuration() {
    this._cacheDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheDurationInput() {
    return this._cacheDuration;
  }

  // reload_delay - computed: true, optional: true, required: false
  private _reloadDelay?: number; 
  public get reloadDelay() {
    return this.getNumberAttribute('reload_delay');
  }
  public set reloadDelay(value: number) {
    this._reloadDelay = value;
  }
  public resetReloadDelay() {
    this._reloadDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reloadDelayInput() {
    return this._reloadDelay;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_duration: cdktf.numberToTerraform(this._cacheDuration),
      reload_delay: cdktf.numberToTerraform(this._reloadDelay),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_duration: {
        value: cdktf.numberToHclTerraform(this._cacheDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reload_delay: {
        value: cdktf.numberToHclTerraform(this._reloadDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
