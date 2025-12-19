// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_oauth_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthenticationRelayOauthStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_oauth_stats#id DataThunderAamAuthenticationRelayOauthStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify oauth authentication relay name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_oauth_stats#name DataThunderAamAuthenticationRelayOauthStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_oauth_stats#stats DataThunderAamAuthenticationRelayOauthStats#stats}
  */
  readonly stats?: DataThunderAamAuthenticationRelayOauthStatsStats;
}
export interface DataThunderAamAuthenticationRelayOauthStatsStats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_oauth_stats#relay_fail DataThunderAamAuthenticationRelayOauthStats#relay_fail}
  */
  readonly relayFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_oauth_stats#relay_req DataThunderAamAuthenticationRelayOauthStats#relay_req}
  */
  readonly relayReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_oauth_stats#relay_succ DataThunderAamAuthenticationRelayOauthStats#relay_succ}
  */
  readonly relaySucc?: number;
}

export function dataThunderAamAuthenticationRelayOauthStatsStatsToTerraform(struct?: DataThunderAamAuthenticationRelayOauthStatsStatsOutputReference | DataThunderAamAuthenticationRelayOauthStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relay_fail: cdktf.numberToTerraform(struct!.relayFail),
    relay_req: cdktf.numberToTerraform(struct!.relayReq),
    relay_succ: cdktf.numberToTerraform(struct!.relaySucc),
  }
}


export function dataThunderAamAuthenticationRelayOauthStatsStatsToHclTerraform(struct?: DataThunderAamAuthenticationRelayOauthStatsStatsOutputReference | DataThunderAamAuthenticationRelayOauthStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    relay_fail: {
      value: cdktf.numberToHclTerraform(struct!.relayFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    relay_req: {
      value: cdktf.numberToHclTerraform(struct!.relayReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    relay_succ: {
      value: cdktf.numberToHclTerraform(struct!.relaySucc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationRelayOauthStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationRelayOauthStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relayFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.relayFail = this._relayFail;
    }
    if (this._relayReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.relayReq = this._relayReq;
    }
    if (this._relaySucc !== undefined) {
      hasAnyValues = true;
      internalValueResult.relaySucc = this._relaySucc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationRelayOauthStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relayFail = undefined;
      this._relayReq = undefined;
      this._relaySucc = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relayFail = value.relayFail;
      this._relayReq = value.relayReq;
      this._relaySucc = value.relaySucc;
    }
  }

  // relay_fail - computed: false, optional: true, required: false
  private _relayFail?: number; 
  public get relayFail() {
    return this.getNumberAttribute('relay_fail');
  }
  public set relayFail(value: number) {
    this._relayFail = value;
  }
  public resetRelayFail() {
    this._relayFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayFailInput() {
    return this._relayFail;
  }

  // relay_req - computed: false, optional: true, required: false
  private _relayReq?: number; 
  public get relayReq() {
    return this.getNumberAttribute('relay_req');
  }
  public set relayReq(value: number) {
    this._relayReq = value;
  }
  public resetRelayReq() {
    this._relayReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayReqInput() {
    return this._relayReq;
  }

  // relay_succ - computed: false, optional: true, required: false
  private _relaySucc?: number; 
  public get relaySucc() {
    return this.getNumberAttribute('relay_succ');
  }
  public set relaySucc(value: number) {
    this._relaySucc = value;
  }
  public resetRelaySucc() {
    this._relaySucc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relaySuccInput() {
    return this._relaySucc;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_oauth_stats thunder_aam_authentication_relay_oauth_stats}
*/
export class DataThunderAamAuthenticationRelayOauthStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_relay_oauth_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthenticationRelayOauthStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthenticationRelayOauthStats to import
  * @param importFromId The id of the existing DataThunderAamAuthenticationRelayOauthStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_oauth_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthenticationRelayOauthStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_relay_oauth_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_oauth_stats thunder_aam_authentication_relay_oauth_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthenticationRelayOauthStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthenticationRelayOauthStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_relay_oauth_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._stats.internalValue = config.stats;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderAamAuthenticationRelayOauthStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamAuthenticationRelayOauthStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      stats: dataThunderAamAuthenticationRelayOauthStatsStatsToTerraform(this._stats.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderAamAuthenticationRelayOauthStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationRelayOauthStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
