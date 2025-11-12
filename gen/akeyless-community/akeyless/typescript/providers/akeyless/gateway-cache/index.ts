// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_cache
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayCacheConfig extends cdktf.TerraformMetaArguments {
  /**
  * Secure backup interval in minutes. To ensure service continuity in case of power cycle and network outage secrets will be backed up periodically per backup interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_cache#backup_interval GatewayCache#backup_interval}
  */
  readonly backupInterval?: string;
  /**
  * Enable cache [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_cache#enable_cache GatewayCache#enable_cache}
  */
  readonly enableCache?: string;
  /**
  * Enable proactive caching [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_cache#enable_proactive GatewayCache#enable_proactive}
  */
  readonly enableProactive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_cache#id GatewayCache#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * When using Cache or/and Proactive Cache, additional secrets will be fetched upon requesting a secret, based on the requestor's access policy. Define minimum fetching interval to avoid over fetching in a given time frame
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_cache#minimum_fetch_interval GatewayCache#minimum_fetch_interval}
  */
  readonly minimumFetchInterval?: string;
  /**
  * Stale timeout in minutes, cache entries which are not accessed within timeout will be removed from cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_cache#stale_timeout GatewayCache#stale_timeout}
  */
  readonly staleTimeout?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_cache akeyless_gateway_cache}
*/
export class GatewayCache extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_gateway_cache";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayCache resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayCache to import
  * @param importFromId The id of the existing GatewayCache that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_cache#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayCache to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_gateway_cache", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_cache akeyless_gateway_cache} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayCacheConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GatewayCacheConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'akeyless_gateway_cache',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1',
        providerVersionConstraint: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupInterval = config.backupInterval;
    this._enableCache = config.enableCache;
    this._enableProactive = config.enableProactive;
    this._id = config.id;
    this._minimumFetchInterval = config.minimumFetchInterval;
    this._staleTimeout = config.staleTimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_interval - computed: false, optional: true, required: false
  private _backupInterval?: string; 
  public get backupInterval() {
    return this.getStringAttribute('backup_interval');
  }
  public set backupInterval(value: string) {
    this._backupInterval = value;
  }
  public resetBackupInterval() {
    this._backupInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIntervalInput() {
    return this._backupInterval;
  }

  // enable_cache - computed: false, optional: true, required: false
  private _enableCache?: string; 
  public get enableCache() {
    return this.getStringAttribute('enable_cache');
  }
  public set enableCache(value: string) {
    this._enableCache = value;
  }
  public resetEnableCache() {
    this._enableCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCacheInput() {
    return this._enableCache;
  }

  // enable_proactive - computed: false, optional: true, required: false
  private _enableProactive?: string; 
  public get enableProactive() {
    return this.getStringAttribute('enable_proactive');
  }
  public set enableProactive(value: string) {
    this._enableProactive = value;
  }
  public resetEnableProactive() {
    this._enableProactive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableProactiveInput() {
    return this._enableProactive;
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

  // minimum_fetch_interval - computed: false, optional: true, required: false
  private _minimumFetchInterval?: string; 
  public get minimumFetchInterval() {
    return this.getStringAttribute('minimum_fetch_interval');
  }
  public set minimumFetchInterval(value: string) {
    this._minimumFetchInterval = value;
  }
  public resetMinimumFetchInterval() {
    this._minimumFetchInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumFetchIntervalInput() {
    return this._minimumFetchInterval;
  }

  // stale_timeout - computed: false, optional: true, required: false
  private _staleTimeout?: string; 
  public get staleTimeout() {
    return this.getStringAttribute('stale_timeout');
  }
  public set staleTimeout(value: string) {
    this._staleTimeout = value;
  }
  public resetStaleTimeout() {
    this._staleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleTimeoutInput() {
    return this._staleTimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_interval: cdktf.stringToTerraform(this._backupInterval),
      enable_cache: cdktf.stringToTerraform(this._enableCache),
      enable_proactive: cdktf.stringToTerraform(this._enableProactive),
      id: cdktf.stringToTerraform(this._id),
      minimum_fetch_interval: cdktf.stringToTerraform(this._minimumFetchInterval),
      stale_timeout: cdktf.stringToTerraform(this._staleTimeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_interval: {
        value: cdktf.stringToHclTerraform(this._backupInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_cache: {
        value: cdktf.stringToHclTerraform(this._enableCache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_proactive: {
        value: cdktf.stringToHclTerraform(this._enableProactive),
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
      minimum_fetch_interval: {
        value: cdktf.stringToHclTerraform(this._minimumFetchInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stale_timeout: {
        value: cdktf.stringToHclTerraform(this._staleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
