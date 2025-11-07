// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_form_based_instance_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthenticationRelayFormBasedInstanceStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_form_based_instance_stats#id DataThunderAamAuthenticationRelayFormBasedInstanceStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify form-based authentication relay name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_form_based_instance_stats#name DataThunderAamAuthenticationRelayFormBasedInstanceStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_form_based_instance_stats#stats DataThunderAamAuthenticationRelayFormBasedInstanceStats#stats}
  */
  readonly stats?: DataThunderAamAuthenticationRelayFormBasedInstanceStatsStats;
}
export interface DataThunderAamAuthenticationRelayFormBasedInstanceStatsStats {
  /**
  * Bad Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_form_based_instance_stats#bad_req DataThunderAamAuthenticationRelayFormBasedInstanceStats#bad_req}
  */
  readonly badReq?: number;
  /**
  * Internal Server Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_form_based_instance_stats#error DataThunderAamAuthenticationRelayFormBasedInstanceStats#error}
  */
  readonly error?: number;
  /**
  * Invalid Credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_form_based_instance_stats#invalid_cred DataThunderAamAuthenticationRelayFormBasedInstanceStats#invalid_cred}
  */
  readonly invalidCred?: number;
  /**
  * Invalid Server Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_form_based_instance_stats#invalid_srv_rsp DataThunderAamAuthenticationRelayFormBasedInstanceStats#invalid_srv_rsp}
  */
  readonly invalidSrvRsp?: number;
  /**
  * Not Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_form_based_instance_stats#not_fnd DataThunderAamAuthenticationRelayFormBasedInstanceStats#not_fnd}
  */
  readonly notFnd?: number;
  /**
  * Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_form_based_instance_stats#other_error DataThunderAamAuthenticationRelayFormBasedInstanceStats#other_error}
  */
  readonly otherError?: number;
  /**
  * POST Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_form_based_instance_stats#post_fail DataThunderAamAuthenticationRelayFormBasedInstanceStats#post_fail}
  */
  readonly postFail?: number;
  /**
  * Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_form_based_instance_stats#request DataThunderAamAuthenticationRelayFormBasedInstanceStats#request}
  */
  readonly request?: number;
}

export function dataThunderAamAuthenticationRelayFormBasedInstanceStatsStatsToTerraform(struct?: DataThunderAamAuthenticationRelayFormBasedInstanceStatsStatsOutputReference | DataThunderAamAuthenticationRelayFormBasedInstanceStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bad_req: cdktf.numberToTerraform(struct!.badReq),
    error: cdktf.numberToTerraform(struct!.error),
    invalid_cred: cdktf.numberToTerraform(struct!.invalidCred),
    invalid_srv_rsp: cdktf.numberToTerraform(struct!.invalidSrvRsp),
    not_fnd: cdktf.numberToTerraform(struct!.notFnd),
    other_error: cdktf.numberToTerraform(struct!.otherError),
    post_fail: cdktf.numberToTerraform(struct!.postFail),
    request: cdktf.numberToTerraform(struct!.request),
  }
}


export function dataThunderAamAuthenticationRelayFormBasedInstanceStatsStatsToHclTerraform(struct?: DataThunderAamAuthenticationRelayFormBasedInstanceStatsStatsOutputReference | DataThunderAamAuthenticationRelayFormBasedInstanceStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bad_req: {
      value: cdktf.numberToHclTerraform(struct!.badReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error: {
      value: cdktf.numberToHclTerraform(struct!.error),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_cred: {
      value: cdktf.numberToHclTerraform(struct!.invalidCred),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_srv_rsp: {
      value: cdktf.numberToHclTerraform(struct!.invalidSrvRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    not_fnd: {
      value: cdktf.numberToHclTerraform(struct!.notFnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_error: {
      value: cdktf.numberToHclTerraform(struct!.otherError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    post_fail: {
      value: cdktf.numberToHclTerraform(struct!.postFail),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationRelayFormBasedInstanceStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationRelayFormBasedInstanceStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._badReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.badReq = this._badReq;
    }
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._invalidCred !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidCred = this._invalidCred;
    }
    if (this._invalidSrvRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidSrvRsp = this._invalidSrvRsp;
    }
    if (this._notFnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.notFnd = this._notFnd;
    }
    if (this._otherError !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherError = this._otherError;
    }
    if (this._postFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.postFail = this._postFail;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationRelayFormBasedInstanceStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._badReq = undefined;
      this._error = undefined;
      this._invalidCred = undefined;
      this._invalidSrvRsp = undefined;
      this._notFnd = undefined;
      this._otherError = undefined;
      this._postFail = undefined;
      this._request = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._badReq = value.badReq;
      this._error = value.error;
      this._invalidCred = value.invalidCred;
      this._invalidSrvRsp = value.invalidSrvRsp;
      this._notFnd = value.notFnd;
      this._otherError = value.otherError;
      this._postFail = value.postFail;
      this._request = value.request;
    }
  }

  // bad_req - computed: false, optional: true, required: false
  private _badReq?: number; 
  public get badReq() {
    return this.getNumberAttribute('bad_req');
  }
  public set badReq(value: number) {
    this._badReq = value;
  }
  public resetBadReq() {
    this._badReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badReqInput() {
    return this._badReq;
  }

  // error - computed: false, optional: true, required: false
  private _error?: number; 
  public get error() {
    return this.getNumberAttribute('error');
  }
  public set error(value: number) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // invalid_cred - computed: false, optional: true, required: false
  private _invalidCred?: number; 
  public get invalidCred() {
    return this.getNumberAttribute('invalid_cred');
  }
  public set invalidCred(value: number) {
    this._invalidCred = value;
  }
  public resetInvalidCred() {
    this._invalidCred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidCredInput() {
    return this._invalidCred;
  }

  // invalid_srv_rsp - computed: false, optional: true, required: false
  private _invalidSrvRsp?: number; 
  public get invalidSrvRsp() {
    return this.getNumberAttribute('invalid_srv_rsp');
  }
  public set invalidSrvRsp(value: number) {
    this._invalidSrvRsp = value;
  }
  public resetInvalidSrvRsp() {
    this._invalidSrvRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidSrvRspInput() {
    return this._invalidSrvRsp;
  }

  // not_fnd - computed: false, optional: true, required: false
  private _notFnd?: number; 
  public get notFnd() {
    return this.getNumberAttribute('not_fnd');
  }
  public set notFnd(value: number) {
    this._notFnd = value;
  }
  public resetNotFnd() {
    this._notFnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notFndInput() {
    return this._notFnd;
  }

  // other_error - computed: false, optional: true, required: false
  private _otherError?: number; 
  public get otherError() {
    return this.getNumberAttribute('other_error');
  }
  public set otherError(value: number) {
    this._otherError = value;
  }
  public resetOtherError() {
    this._otherError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherErrorInput() {
    return this._otherError;
  }

  // post_fail - computed: false, optional: true, required: false
  private _postFail?: number; 
  public get postFail() {
    return this.getNumberAttribute('post_fail');
  }
  public set postFail(value: number) {
    this._postFail = value;
  }
  public resetPostFail() {
    this._postFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postFailInput() {
    return this._postFail;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_form_based_instance_stats thunder_aam_authentication_relay_form_based_instance_stats}
*/
export class DataThunderAamAuthenticationRelayFormBasedInstanceStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_relay_form_based_instance_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthenticationRelayFormBasedInstanceStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthenticationRelayFormBasedInstanceStats to import
  * @param importFromId The id of the existing DataThunderAamAuthenticationRelayFormBasedInstanceStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_form_based_instance_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthenticationRelayFormBasedInstanceStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_relay_form_based_instance_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_form_based_instance_stats thunder_aam_authentication_relay_form_based_instance_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthenticationRelayFormBasedInstanceStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthenticationRelayFormBasedInstanceStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_relay_form_based_instance_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
  private _stats = new DataThunderAamAuthenticationRelayFormBasedInstanceStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamAuthenticationRelayFormBasedInstanceStatsStats) {
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
      stats: dataThunderAamAuthenticationRelayFormBasedInstanceStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderAamAuthenticationRelayFormBasedInstanceStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationRelayFormBasedInstanceStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
