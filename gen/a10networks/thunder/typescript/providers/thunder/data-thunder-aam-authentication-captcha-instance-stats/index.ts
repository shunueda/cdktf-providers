// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_captcha_instance_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthenticationCaptchaInstanceStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_captcha_instance_stats#id DataThunderAamAuthenticationCaptchaInstanceStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify captcha profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_captcha_instance_stats#name DataThunderAamAuthenticationCaptchaInstanceStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_captcha_instance_stats#stats DataThunderAamAuthenticationCaptchaInstanceStats#stats}
  */
  readonly stats?: DataThunderAamAuthenticationCaptchaInstanceStatsStats;
}
export interface DataThunderAamAuthenticationCaptchaInstanceStatsStats {
  /**
  * Total Attibute Check Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_captcha_instance_stats#attr_fail DataThunderAamAuthenticationCaptchaInstanceStats#attr_fail}
  */
  readonly attrFail?: number;
  /**
  * Total Failure JSON Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_captcha_instance_stats#json_fail DataThunderAamAuthenticationCaptchaInstanceStats#json_fail}
  */
  readonly jsonFail?: number;
  /**
  * Total Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_captcha_instance_stats#other_error DataThunderAamAuthenticationCaptchaInstanceStats#other_error}
  */
  readonly otherError?: number;
  /**
  * Total JSON Response Parse Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_captcha_instance_stats#parse_fail DataThunderAamAuthenticationCaptchaInstanceStats#parse_fail}
  */
  readonly parseFail?: number;
  /**
  * Total Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_captcha_instance_stats#request DataThunderAamAuthenticationCaptchaInstanceStats#request}
  */
  readonly request?: number;
  /**
  * Total Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_captcha_instance_stats#timeout_error DataThunderAamAuthenticationCaptchaInstanceStats#timeout_error}
  */
  readonly timeoutError?: number;
  /**
  * Total Verification Success Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_captcha_instance_stats#verify_succ DataThunderAamAuthenticationCaptchaInstanceStats#verify_succ}
  */
  readonly verifySucc?: number;
}

export function dataThunderAamAuthenticationCaptchaInstanceStatsStatsToTerraform(struct?: DataThunderAamAuthenticationCaptchaInstanceStatsStatsOutputReference | DataThunderAamAuthenticationCaptchaInstanceStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attr_fail: cdktf.numberToTerraform(struct!.attrFail),
    json_fail: cdktf.numberToTerraform(struct!.jsonFail),
    other_error: cdktf.numberToTerraform(struct!.otherError),
    parse_fail: cdktf.numberToTerraform(struct!.parseFail),
    request: cdktf.numberToTerraform(struct!.request),
    timeout_error: cdktf.numberToTerraform(struct!.timeoutError),
    verify_succ: cdktf.numberToTerraform(struct!.verifySucc),
  }
}


export function dataThunderAamAuthenticationCaptchaInstanceStatsStatsToHclTerraform(struct?: DataThunderAamAuthenticationCaptchaInstanceStatsStatsOutputReference | DataThunderAamAuthenticationCaptchaInstanceStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attr_fail: {
      value: cdktf.numberToHclTerraform(struct!.attrFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    json_fail: {
      value: cdktf.numberToHclTerraform(struct!.jsonFail),
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
    parse_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseFail),
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
    timeout_error: {
      value: cdktf.numberToHclTerraform(struct!.timeoutError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    verify_succ: {
      value: cdktf.numberToHclTerraform(struct!.verifySucc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationCaptchaInstanceStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationCaptchaInstanceStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attrFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrFail = this._attrFail;
    }
    if (this._jsonFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonFail = this._jsonFail;
    }
    if (this._otherError !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherError = this._otherError;
    }
    if (this._parseFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseFail = this._parseFail;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    if (this._timeoutError !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutError = this._timeoutError;
    }
    if (this._verifySucc !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifySucc = this._verifySucc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationCaptchaInstanceStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attrFail = undefined;
      this._jsonFail = undefined;
      this._otherError = undefined;
      this._parseFail = undefined;
      this._request = undefined;
      this._timeoutError = undefined;
      this._verifySucc = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attrFail = value.attrFail;
      this._jsonFail = value.jsonFail;
      this._otherError = value.otherError;
      this._parseFail = value.parseFail;
      this._request = value.request;
      this._timeoutError = value.timeoutError;
      this._verifySucc = value.verifySucc;
    }
  }

  // attr_fail - computed: false, optional: true, required: false
  private _attrFail?: number; 
  public get attrFail() {
    return this.getNumberAttribute('attr_fail');
  }
  public set attrFail(value: number) {
    this._attrFail = value;
  }
  public resetAttrFail() {
    this._attrFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrFailInput() {
    return this._attrFail;
  }

  // json_fail - computed: false, optional: true, required: false
  private _jsonFail?: number; 
  public get jsonFail() {
    return this.getNumberAttribute('json_fail');
  }
  public set jsonFail(value: number) {
    this._jsonFail = value;
  }
  public resetJsonFail() {
    this._jsonFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonFailInput() {
    return this._jsonFail;
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

  // parse_fail - computed: false, optional: true, required: false
  private _parseFail?: number; 
  public get parseFail() {
    return this.getNumberAttribute('parse_fail');
  }
  public set parseFail(value: number) {
    this._parseFail = value;
  }
  public resetParseFail() {
    this._parseFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseFailInput() {
    return this._parseFail;
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

  // timeout_error - computed: false, optional: true, required: false
  private _timeoutError?: number; 
  public get timeoutError() {
    return this.getNumberAttribute('timeout_error');
  }
  public set timeoutError(value: number) {
    this._timeoutError = value;
  }
  public resetTimeoutError() {
    this._timeoutError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutErrorInput() {
    return this._timeoutError;
  }

  // verify_succ - computed: false, optional: true, required: false
  private _verifySucc?: number; 
  public get verifySucc() {
    return this.getNumberAttribute('verify_succ');
  }
  public set verifySucc(value: number) {
    this._verifySucc = value;
  }
  public resetVerifySucc() {
    this._verifySucc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifySuccInput() {
    return this._verifySucc;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_captcha_instance_stats thunder_aam_authentication_captcha_instance_stats}
*/
export class DataThunderAamAuthenticationCaptchaInstanceStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_captcha_instance_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthenticationCaptchaInstanceStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthenticationCaptchaInstanceStats to import
  * @param importFromId The id of the existing DataThunderAamAuthenticationCaptchaInstanceStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_captcha_instance_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthenticationCaptchaInstanceStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_captcha_instance_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_captcha_instance_stats thunder_aam_authentication_captcha_instance_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthenticationCaptchaInstanceStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthenticationCaptchaInstanceStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_captcha_instance_stats',
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
  private _stats = new DataThunderAamAuthenticationCaptchaInstanceStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamAuthenticationCaptchaInstanceStatsStats) {
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
      stats: dataThunderAamAuthenticationCaptchaInstanceStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderAamAuthenticationCaptchaInstanceStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationCaptchaInstanceStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
