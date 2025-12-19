// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_rdns_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamRdnsStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_rdns_stats#id DataThunderAamRdnsStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_rdns_stats#stats DataThunderAamRdnsStats#stats}
  */
  readonly stats?: DataThunderAamRdnsStatsStats;
}
export interface DataThunderAamRdnsStatsStats {
  /**
  * Total Dropped Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_rdns_stats#request_dropped DataThunderAamRdnsStats#request_dropped}
  */
  readonly requestDropped?: number;
  /**
  * Total Normal Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_rdns_stats#request_normal DataThunderAamRdnsStats#request_normal}
  */
  readonly requestNormal?: number;
  /**
  * Total Error Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_rdns_stats#response_error DataThunderAamRdnsStats#response_error}
  */
  readonly responseError?: number;
  /**
  * Total Failure Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_rdns_stats#response_failure DataThunderAamRdnsStats#response_failure}
  */
  readonly responseFailure?: number;
  /**
  * Total Other Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_rdns_stats#response_other DataThunderAamRdnsStats#response_other}
  */
  readonly responseOther?: number;
  /**
  * Total Success Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_rdns_stats#response_success DataThunderAamRdnsStats#response_success}
  */
  readonly responseSuccess?: number;
  /**
  * Total Timeout Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_rdns_stats#response_timeout DataThunderAamRdnsStats#response_timeout}
  */
  readonly responseTimeout?: number;
}

export function dataThunderAamRdnsStatsStatsToTerraform(struct?: DataThunderAamRdnsStatsStatsOutputReference | DataThunderAamRdnsStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_dropped: cdktf.numberToTerraform(struct!.requestDropped),
    request_normal: cdktf.numberToTerraform(struct!.requestNormal),
    response_error: cdktf.numberToTerraform(struct!.responseError),
    response_failure: cdktf.numberToTerraform(struct!.responseFailure),
    response_other: cdktf.numberToTerraform(struct!.responseOther),
    response_success: cdktf.numberToTerraform(struct!.responseSuccess),
    response_timeout: cdktf.numberToTerraform(struct!.responseTimeout),
  }
}


export function dataThunderAamRdnsStatsStatsToHclTerraform(struct?: DataThunderAamRdnsStatsStatsOutputReference | DataThunderAamRdnsStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_dropped: {
      value: cdktf.numberToHclTerraform(struct!.requestDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_normal: {
      value: cdktf.numberToHclTerraform(struct!.requestNormal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_error: {
      value: cdktf.numberToHclTerraform(struct!.responseError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_failure: {
      value: cdktf.numberToHclTerraform(struct!.responseFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_other: {
      value: cdktf.numberToHclTerraform(struct!.responseOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_success: {
      value: cdktf.numberToHclTerraform(struct!.responseSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_timeout: {
      value: cdktf.numberToHclTerraform(struct!.responseTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamRdnsStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamRdnsStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestDropped = this._requestDropped;
    }
    if (this._requestNormal !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestNormal = this._requestNormal;
    }
    if (this._responseError !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseError = this._responseError;
    }
    if (this._responseFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseFailure = this._responseFailure;
    }
    if (this._responseOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseOther = this._responseOther;
    }
    if (this._responseSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseSuccess = this._responseSuccess;
    }
    if (this._responseTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTimeout = this._responseTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamRdnsStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestDropped = undefined;
      this._requestNormal = undefined;
      this._responseError = undefined;
      this._responseFailure = undefined;
      this._responseOther = undefined;
      this._responseSuccess = undefined;
      this._responseTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestDropped = value.requestDropped;
      this._requestNormal = value.requestNormal;
      this._responseError = value.responseError;
      this._responseFailure = value.responseFailure;
      this._responseOther = value.responseOther;
      this._responseSuccess = value.responseSuccess;
      this._responseTimeout = value.responseTimeout;
    }
  }

  // request_dropped - computed: false, optional: true, required: false
  private _requestDropped?: number; 
  public get requestDropped() {
    return this.getNumberAttribute('request_dropped');
  }
  public set requestDropped(value: number) {
    this._requestDropped = value;
  }
  public resetRequestDropped() {
    this._requestDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestDroppedInput() {
    return this._requestDropped;
  }

  // request_normal - computed: false, optional: true, required: false
  private _requestNormal?: number; 
  public get requestNormal() {
    return this.getNumberAttribute('request_normal');
  }
  public set requestNormal(value: number) {
    this._requestNormal = value;
  }
  public resetRequestNormal() {
    this._requestNormal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestNormalInput() {
    return this._requestNormal;
  }

  // response_error - computed: false, optional: true, required: false
  private _responseError?: number; 
  public get responseError() {
    return this.getNumberAttribute('response_error');
  }
  public set responseError(value: number) {
    this._responseError = value;
  }
  public resetResponseError() {
    this._responseError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseErrorInput() {
    return this._responseError;
  }

  // response_failure - computed: false, optional: true, required: false
  private _responseFailure?: number; 
  public get responseFailure() {
    return this.getNumberAttribute('response_failure');
  }
  public set responseFailure(value: number) {
    this._responseFailure = value;
  }
  public resetResponseFailure() {
    this._responseFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseFailureInput() {
    return this._responseFailure;
  }

  // response_other - computed: false, optional: true, required: false
  private _responseOther?: number; 
  public get responseOther() {
    return this.getNumberAttribute('response_other');
  }
  public set responseOther(value: number) {
    this._responseOther = value;
  }
  public resetResponseOther() {
    this._responseOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseOtherInput() {
    return this._responseOther;
  }

  // response_success - computed: false, optional: true, required: false
  private _responseSuccess?: number; 
  public get responseSuccess() {
    return this.getNumberAttribute('response_success');
  }
  public set responseSuccess(value: number) {
    this._responseSuccess = value;
  }
  public resetResponseSuccess() {
    this._responseSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSuccessInput() {
    return this._responseSuccess;
  }

  // response_timeout - computed: false, optional: true, required: false
  private _responseTimeout?: number; 
  public get responseTimeout() {
    return this.getNumberAttribute('response_timeout');
  }
  public set responseTimeout(value: number) {
    this._responseTimeout = value;
  }
  public resetResponseTimeout() {
    this._responseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeoutInput() {
    return this._responseTimeout;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_rdns_stats thunder_aam_rdns_stats}
*/
export class DataThunderAamRdnsStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_rdns_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamRdnsStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamRdnsStats to import
  * @param importFromId The id of the existing DataThunderAamRdnsStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_rdns_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamRdnsStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_rdns_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_rdns_stats thunder_aam_rdns_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamRdnsStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamRdnsStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_rdns_stats',
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderAamRdnsStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamRdnsStatsStats) {
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
      stats: dataThunderAamRdnsStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderAamRdnsStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamRdnsStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
