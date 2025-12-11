// https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines whether to allow artifacts blocked by Xray to be downloaded. This setting cannot override the blocking of unscanned artifacts. Should only be set to `true` when `enabled` is set. Default value: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/settings#allow_blocked Settings#allow_blocked}
  */
  readonly allowBlocked?: boolean | cdktf.IResolvable;
  /**
  * Determines whether to block certain operations (for example, downloading artifacts) when the connected Xray instance is unavailable. Should only be set to `true` when `enabled` is set. Default value: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/settings#allow_when_unavailable Settings#allow_when_unavailable}
  */
  readonly allowWhenUnavailable?: boolean | cdktf.IResolvable;
  /**
  * Defines the amount of time to wait for Xray to _finish_ scanning an artifact before blocking operations on that artifact automatically if the scan is still unfinished. Default value: 1800 seconds (30 minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/settings#block_unfinished_scans_timeout Settings#block_unfinished_scans_timeout}
  */
  readonly blockUnfinishedScansTimeout?: number;
  /**
  * Defines the amount of time to wait for Xray to _start_ scanning an artifact before blocking operations on that artifact automatically if the scan has still not started. Default value: 60 seconds (1 minute)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/settings#block_unscanned_timeout Settings#block_unscanned_timeout}
  */
  readonly blockUnscannedTimeout?: number;
  /**
  * The time of the Xray DB sync daily update job. Format `HH:mm`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/settings#db_sync_updates_time Settings#db_sync_updates_time}
  */
  readonly dbSyncUpdatesTime: string;
  /**
  * Determines whether Xray is currently enabled. Default value: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/settings#enabled Settings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/settings xray_settings}
*/
export class Settings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "xray_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Settings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Settings to import
  * @param importFromId The id of the existing Settings that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Settings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "xray_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/settings xray_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SettingsConfig
  */
  public constructor(scope: Construct, id: string, config: SettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'xray_settings',
      terraformGeneratorMetadata: {
        providerName: 'xray',
        providerVersion: '3.1.5',
        providerVersionConstraint: '3.1.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowBlocked = config.allowBlocked;
    this._allowWhenUnavailable = config.allowWhenUnavailable;
    this._blockUnfinishedScansTimeout = config.blockUnfinishedScansTimeout;
    this._blockUnscannedTimeout = config.blockUnscannedTimeout;
    this._dbSyncUpdatesTime = config.dbSyncUpdatesTime;
    this._enabled = config.enabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_blocked - computed: true, optional: true, required: false
  private _allowBlocked?: boolean | cdktf.IResolvable; 
  public get allowBlocked() {
    return this.getBooleanAttribute('allow_blocked');
  }
  public set allowBlocked(value: boolean | cdktf.IResolvable) {
    this._allowBlocked = value;
  }
  public resetAllowBlocked() {
    this._allowBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowBlockedInput() {
    return this._allowBlocked;
  }

  // allow_when_unavailable - computed: true, optional: true, required: false
  private _allowWhenUnavailable?: boolean | cdktf.IResolvable; 
  public get allowWhenUnavailable() {
    return this.getBooleanAttribute('allow_when_unavailable');
  }
  public set allowWhenUnavailable(value: boolean | cdktf.IResolvable) {
    this._allowWhenUnavailable = value;
  }
  public resetAllowWhenUnavailable() {
    this._allowWhenUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowWhenUnavailableInput() {
    return this._allowWhenUnavailable;
  }

  // block_unfinished_scans_timeout - computed: true, optional: true, required: false
  private _blockUnfinishedScansTimeout?: number; 
  public get blockUnfinishedScansTimeout() {
    return this.getNumberAttribute('block_unfinished_scans_timeout');
  }
  public set blockUnfinishedScansTimeout(value: number) {
    this._blockUnfinishedScansTimeout = value;
  }
  public resetBlockUnfinishedScansTimeout() {
    this._blockUnfinishedScansTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUnfinishedScansTimeoutInput() {
    return this._blockUnfinishedScansTimeout;
  }

  // block_unscanned_timeout - computed: true, optional: true, required: false
  private _blockUnscannedTimeout?: number; 
  public get blockUnscannedTimeout() {
    return this.getNumberAttribute('block_unscanned_timeout');
  }
  public set blockUnscannedTimeout(value: number) {
    this._blockUnscannedTimeout = value;
  }
  public resetBlockUnscannedTimeout() {
    this._blockUnscannedTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUnscannedTimeoutInput() {
    return this._blockUnscannedTimeout;
  }

  // db_sync_updates_time - computed: false, optional: false, required: true
  private _dbSyncUpdatesTime?: string; 
  public get dbSyncUpdatesTime() {
    return this.getStringAttribute('db_sync_updates_time');
  }
  public set dbSyncUpdatesTime(value: string) {
    this._dbSyncUpdatesTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSyncUpdatesTimeInput() {
    return this._dbSyncUpdatesTime;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_blocked: cdktf.booleanToTerraform(this._allowBlocked),
      allow_when_unavailable: cdktf.booleanToTerraform(this._allowWhenUnavailable),
      block_unfinished_scans_timeout: cdktf.numberToTerraform(this._blockUnfinishedScansTimeout),
      block_unscanned_timeout: cdktf.numberToTerraform(this._blockUnscannedTimeout),
      db_sync_updates_time: cdktf.stringToTerraform(this._dbSyncUpdatesTime),
      enabled: cdktf.booleanToTerraform(this._enabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_blocked: {
        value: cdktf.booleanToHclTerraform(this._allowBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_when_unavailable: {
        value: cdktf.booleanToHclTerraform(this._allowWhenUnavailable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_unfinished_scans_timeout: {
        value: cdktf.numberToHclTerraform(this._blockUnfinishedScansTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      block_unscanned_timeout: {
        value: cdktf.numberToHclTerraform(this._blockUnscannedTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_sync_updates_time: {
        value: cdktf.stringToHclTerraform(this._dbSyncUpdatesTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
