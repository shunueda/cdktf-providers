// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IndexerConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Maximum size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_config#maximum_size IndexerConfigA#maximum_size}
  */
  readonly maximumSize: number;
  /**
  * Minimum age.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_config#minimum_age IndexerConfigA#minimum_age}
  */
  readonly minimumAge: number;
  /**
  * Retention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_config#retention IndexerConfigA#retention}
  */
  readonly retention: number;
  /**
  * RSS sync interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_config#rss_sync_interval IndexerConfigA#rss_sync_interval}
  */
  readonly rssSyncInterval: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_config sonarr_indexer_config}
*/
export class IndexerConfigA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_indexer_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IndexerConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IndexerConfigA to import
  * @param importFromId The id of the existing IndexerConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IndexerConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_indexer_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/indexer_config sonarr_indexer_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IndexerConfigAConfig
  */
  public constructor(scope: Construct, id: string, config: IndexerConfigAConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarr_indexer_config',
      terraformGeneratorMetadata: {
        providerName: 'sonarr',
        providerVersion: '3.4.0',
        providerVersionConstraint: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._maximumSize = config.maximumSize;
    this._minimumAge = config.minimumAge;
    this._retention = config.retention;
    this._rssSyncInterval = config.rssSyncInterval;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      maximum_size: cdktf.numberToTerraform(this._maximumSize),
      minimum_age: cdktf.numberToTerraform(this._minimumAge),
      retention: cdktf.numberToTerraform(this._retention),
      rss_sync_interval: cdktf.numberToTerraform(this._rssSyncInterval),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
