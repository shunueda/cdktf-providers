// https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZillizcloudProviderConfig {
  /**
  * Zilliz Cloud API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs#api_key ZillizcloudProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * The maximum burst for throttle. Defaults to 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs#burst ZillizcloudProvider#burst}
  */
  readonly burst?: number;
  /**
  * Zilliz Cloud Host Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs#host_address ZillizcloudProvider#host_address}
  */
  readonly hostAddress?: string;
  /**
  * The maximum queries per second (QPS) to the Zilliz Cloud API for each resource. Defaults to 10.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs#qps ZillizcloudProvider#qps}
  */
  readonly qps?: number;
  /**
  * Zilliz Cloud Region Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs#region_id ZillizcloudProvider#region_id}
  */
  readonly regionId?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs#alias ZillizcloudProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs zillizcloud}
*/
export class ZillizcloudProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zillizcloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZillizcloudProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZillizcloudProvider to import
  * @param importFromId The id of the existing ZillizcloudProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZillizcloudProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zillizcloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs zillizcloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZillizcloudProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ZillizcloudProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zillizcloud',
      terraformGeneratorMetadata: {
        providerName: 'zillizcloud',
        providerVersion: '0.6.23',
        providerVersionConstraint: '0.6.23'
      },
      terraformProviderSource: 'zilliztech/zillizcloud'
    });
    this._apiKey = config.apiKey;
    this._burst = config.burst;
    this._hostAddress = config.hostAddress;
    this._qps = config.qps;
    this._regionId = config.regionId;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // burst - computed: false, optional: true, required: false
  private _burst?: number; 
  public get burst() {
    return this._burst;
  }
  public set burst(value: number | undefined) {
    this._burst = value;
  }
  public resetBurst() {
    this._burst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstInput() {
    return this._burst;
  }

  // host_address - computed: false, optional: true, required: false
  private _hostAddress?: string; 
  public get hostAddress() {
    return this._hostAddress;
  }
  public set hostAddress(value: string | undefined) {
    this._hostAddress = value;
  }
  public resetHostAddress() {
    this._hostAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAddressInput() {
    return this._hostAddress;
  }

  // qps - computed: false, optional: true, required: false
  private _qps?: number; 
  public get qps() {
    return this._qps;
  }
  public set qps(value: number | undefined) {
    this._qps = value;
  }
  public resetQps() {
    this._qps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qpsInput() {
    return this._qps;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: string; 
  public get regionId() {
    return this._regionId;
  }
  public set regionId(value: string | undefined) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      burst: cdktf.numberToTerraform(this._burst),
      host_address: cdktf.stringToTerraform(this._hostAddress),
      qps: cdktf.numberToTerraform(this._qps),
      region_id: cdktf.stringToTerraform(this._regionId),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      burst: {
        value: cdktf.numberToHclTerraform(this._burst),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      host_address: {
        value: cdktf.stringToHclTerraform(this._hostAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qps: {
        value: cdktf.numberToHclTerraform(this._qps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region_id: {
        value: cdktf.stringToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
