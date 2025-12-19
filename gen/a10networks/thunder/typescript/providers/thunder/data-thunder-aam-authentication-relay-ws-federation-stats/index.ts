// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_ws_federation_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthenticationRelayWsFederationStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_ws_federation_stats#id DataThunderAamAuthenticationRelayWsFederationStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify WS-Federation authentication relay name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_ws_federation_stats#name DataThunderAamAuthenticationRelayWsFederationStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_ws_federation_stats#stats DataThunderAamAuthenticationRelayWsFederationStats#stats}
  */
  readonly stats?: DataThunderAamAuthenticationRelayWsFederationStatsStats;
}
export interface DataThunderAamAuthenticationRelayWsFederationStatsStats {
  /**
  * Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_ws_federation_stats#failure DataThunderAamAuthenticationRelayWsFederationStats#failure}
  */
  readonly failure?: number;
  /**
  * Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_ws_federation_stats#request DataThunderAamAuthenticationRelayWsFederationStats#request}
  */
  readonly request?: number;
  /**
  * Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_ws_federation_stats#success DataThunderAamAuthenticationRelayWsFederationStats#success}
  */
  readonly success?: number;
}

export function dataThunderAamAuthenticationRelayWsFederationStatsStatsToTerraform(struct?: DataThunderAamAuthenticationRelayWsFederationStatsStatsOutputReference | DataThunderAamAuthenticationRelayWsFederationStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure: cdktf.numberToTerraform(struct!.failure),
    request: cdktf.numberToTerraform(struct!.request),
    success: cdktf.numberToTerraform(struct!.success),
  }
}


export function dataThunderAamAuthenticationRelayWsFederationStatsStatsToHclTerraform(struct?: DataThunderAamAuthenticationRelayWsFederationStatsStatsOutputReference | DataThunderAamAuthenticationRelayWsFederationStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure: {
      value: cdktf.numberToHclTerraform(struct!.failure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request: {
      value: cdktf.numberToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success: {
      value: cdktf.numberToHclTerraform(struct!.success),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationRelayWsFederationStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationRelayWsFederationStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failure !== undefined) {
      hasAnyValues = true;
      internalValueResult.failure = this._failure;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    if (this._success !== undefined) {
      hasAnyValues = true;
      internalValueResult.success = this._success;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationRelayWsFederationStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failure = undefined;
      this._request = undefined;
      this._success = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failure = value.failure;
      this._request = value.request;
      this._success = value.success;
    }
  }

  // failure - computed: false, optional: true, required: false
  private _failure?: number; 
  public get failure() {
    return this.getNumberAttribute('failure');
  }
  public set failure(value: number) {
    this._failure = value;
  }
  public resetFailure() {
    this._failure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureInput() {
    return this._failure;
  }

  // request - computed: false, optional: true, required: false
  private _request?: number; 
  public get request() {
    return this.getNumberAttribute('request');
  }
  public set request(value: number) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }

  // success - computed: false, optional: true, required: false
  private _success?: number; 
  public get success() {
    return this.getNumberAttribute('success');
  }
  public set success(value: number) {
    this._success = value;
  }
  public resetSuccess() {
    this._success = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successInput() {
    return this._success;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_ws_federation_stats thunder_aam_authentication_relay_ws_federation_stats}
*/
export class DataThunderAamAuthenticationRelayWsFederationStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_relay_ws_federation_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthenticationRelayWsFederationStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthenticationRelayWsFederationStats to import
  * @param importFromId The id of the existing DataThunderAamAuthenticationRelayWsFederationStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_ws_federation_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthenticationRelayWsFederationStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_relay_ws_federation_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_ws_federation_stats thunder_aam_authentication_relay_ws_federation_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthenticationRelayWsFederationStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthenticationRelayWsFederationStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_relay_ws_federation_stats',
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
  private _stats = new DataThunderAamAuthenticationRelayWsFederationStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamAuthenticationRelayWsFederationStatsStats) {
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
      stats: dataThunderAamAuthenticationRelayWsFederationStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderAamAuthenticationRelayWsFederationStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationRelayWsFederationStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
