// https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/indexer_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IndexerConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow hardcoded subs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/indexer_config#allow_hardcoded_subs IndexerConfigA#allow_hardcoded_subs}
  */
  readonly allowHardcodedSubs: boolean | cdktf.IResolvable;
  /**
  * Availability delay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/indexer_config#availability_delay IndexerConfigA#availability_delay}
  */
  readonly availabilityDelay: number;
  /**
  * Maximum size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/indexer_config#maximum_size IndexerConfigA#maximum_size}
  */
  readonly maximumSize: number;
  /**
  * Minimum age.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/indexer_config#minimum_age IndexerConfigA#minimum_age}
  */
  readonly minimumAge: number;
  /**
  * Prefer indexer flags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/indexer_config#prefer_indexer_flags IndexerConfigA#prefer_indexer_flags}
  */
  readonly preferIndexerFlags: boolean | cdktf.IResolvable;
  /**
  * Retention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/indexer_config#retention IndexerConfigA#retention}
  */
  readonly retention: number;
  /**
  * RSS sync interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/indexer_config#rss_sync_interval IndexerConfigA#rss_sync_interval}
  */
  readonly rssSyncInterval: number;
  /**
  * Whitelisted hardconded subs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/indexer_config#whitelisted_hardcoded_subs IndexerConfigA#whitelisted_hardcoded_subs}
  */
  readonly whitelistedHardcodedSubs: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/indexer_config radarr_indexer_config}
*/
export class IndexerConfigA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_indexer_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IndexerConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IndexerConfigA to import
  * @param importFromId The id of the existing IndexerConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/indexer_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IndexerConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_indexer_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/indexer_config radarr_indexer_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IndexerConfigAConfig
  */
  public constructor(scope: Construct, id: string, config: IndexerConfigAConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_indexer_config',
      terraformGeneratorMetadata: {
        providerName: 'radarr',
        providerVersion: '2.3.3',
        providerVersionConstraint: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowHardcodedSubs = config.allowHardcodedSubs;
    this._availabilityDelay = config.availabilityDelay;
    this._maximumSize = config.maximumSize;
    this._minimumAge = config.minimumAge;
    this._preferIndexerFlags = config.preferIndexerFlags;
    this._retention = config.retention;
    this._rssSyncInterval = config.rssSyncInterval;
    this._whitelistedHardcodedSubs = config.whitelistedHardcodedSubs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_hardcoded_subs - computed: false, optional: false, required: true
  private _allowHardcodedSubs?: boolean | cdktf.IResolvable; 
  public get allowHardcodedSubs() {
    return this.getBooleanAttribute('allow_hardcoded_subs');
  }
  public set allowHardcodedSubs(value: boolean | cdktf.IResolvable) {
    this._allowHardcodedSubs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHardcodedSubsInput() {
    return this._allowHardcodedSubs;
  }

  // availability_delay - computed: false, optional: false, required: true
  private _availabilityDelay?: number; 
  public get availabilityDelay() {
    return this.getNumberAttribute('availability_delay');
  }
  public set availabilityDelay(value: number) {
    this._availabilityDelay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDelayInput() {
    return this._availabilityDelay;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // maximum_size - computed: false, optional: false, required: true
  private _maximumSize?: number; 
  public get maximumSize() {
    return this.getNumberAttribute('maximum_size');
  }
  public set maximumSize(value: number) {
    this._maximumSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumSizeInput() {
    return this._maximumSize;
  }

  // minimum_age - computed: false, optional: false, required: true
  private _minimumAge?: number; 
  public get minimumAge() {
    return this.getNumberAttribute('minimum_age');
  }
  public set minimumAge(value: number) {
    this._minimumAge = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumAgeInput() {
    return this._minimumAge;
  }

  // prefer_indexer_flags - computed: false, optional: false, required: true
  private _preferIndexerFlags?: boolean | cdktf.IResolvable; 
  public get preferIndexerFlags() {
    return this.getBooleanAttribute('prefer_indexer_flags');
  }
  public set preferIndexerFlags(value: boolean | cdktf.IResolvable) {
    this._preferIndexerFlags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferIndexerFlagsInput() {
    return this._preferIndexerFlags;
  }

  // retention - computed: false, optional: false, required: true
  private _retention?: number; 
  public get retention() {
    return this.getNumberAttribute('retention');
  }
  public set retention(value: number) {
    this._retention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // rss_sync_interval - computed: false, optional: false, required: true
  private _rssSyncInterval?: number; 
  public get rssSyncInterval() {
    return this.getNumberAttribute('rss_sync_interval');
  }
  public set rssSyncInterval(value: number) {
    this._rssSyncInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rssSyncIntervalInput() {
    return this._rssSyncInterval;
  }

  // whitelisted_hardcoded_subs - computed: false, optional: false, required: true
  private _whitelistedHardcodedSubs?: string; 
  public get whitelistedHardcodedSubs() {
    return this.getStringAttribute('whitelisted_hardcoded_subs');
  }
  public set whitelistedHardcodedSubs(value: string) {
    this._whitelistedHardcodedSubs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistedHardcodedSubsInput() {
    return this._whitelistedHardcodedSubs;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_hardcoded_subs: cdktf.booleanToTerraform(this._allowHardcodedSubs),
      availability_delay: cdktf.numberToTerraform(this._availabilityDelay),
      maximum_size: cdktf.numberToTerraform(this._maximumSize),
      minimum_age: cdktf.numberToTerraform(this._minimumAge),
      prefer_indexer_flags: cdktf.booleanToTerraform(this._preferIndexerFlags),
      retention: cdktf.numberToTerraform(this._retention),
      rss_sync_interval: cdktf.numberToTerraform(this._rssSyncInterval),
      whitelisted_hardcoded_subs: cdktf.stringToTerraform(this._whitelistedHardcodedSubs),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_hardcoded_subs: {
        value: cdktf.booleanToHclTerraform(this._allowHardcodedSubs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      availability_delay: {
        value: cdktf.numberToHclTerraform(this._availabilityDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_size: {
        value: cdktf.numberToHclTerraform(this._maximumSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_age: {
        value: cdktf.numberToHclTerraform(this._minimumAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prefer_indexer_flags: {
        value: cdktf.booleanToHclTerraform(this._preferIndexerFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      retention: {
        value: cdktf.numberToHclTerraform(this._retention),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rss_sync_interval: {
        value: cdktf.numberToHclTerraform(this._rssSyncInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      whitelisted_hardcoded_subs: {
        value: cdktf.stringToHclTerraform(this._whitelistedHardcodedSubs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
