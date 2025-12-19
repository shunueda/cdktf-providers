// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_windows_instance_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthenticationServerWindowsInstanceStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_windows_instance_stats#id DataThunderAamAuthenticationServerWindowsInstanceStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify Windows authentication server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_windows_instance_stats#name DataThunderAamAuthenticationServerWindowsInstanceStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_windows_instance_stats#stats DataThunderAamAuthenticationServerWindowsInstanceStats#stats}
  */
  readonly stats?: DataThunderAamAuthenticationServerWindowsInstanceStatsStats;
}
export interface DataThunderAamAuthenticationServerWindowsInstanceStatsStats {
  /**
  * Kerberos Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_windows_instance_stats#krb_get_resp_success DataThunderAamAuthenticationServerWindowsInstanceStats#krb_get_resp_success}
  */
  readonly krbGetRespSuccess?: number;
  /**
  * Kerberos Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_windows_instance_stats#krb_other_error DataThunderAamAuthenticationServerWindowsInstanceStats#krb_other_error}
  */
  readonly krbOtherError?: number;
  /**
  * Kerberos password change failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_windows_instance_stats#krb_pw_change_failure DataThunderAamAuthenticationServerWindowsInstanceStats#krb_pw_change_failure}
  */
  readonly krbPwChangeFailure?: number;
  /**
  * Kerberos password change success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_windows_instance_stats#krb_pw_change_success DataThunderAamAuthenticationServerWindowsInstanceStats#krb_pw_change_success}
  */
  readonly krbPwChangeSuccess?: number;
  /**
  * Kerberos password expiry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_windows_instance_stats#krb_pw_expiry DataThunderAamAuthenticationServerWindowsInstanceStats#krb_pw_expiry}
  */
  readonly krbPwExpiry?: number;
  /**
  * Kerberos Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_windows_instance_stats#krb_send_req_success DataThunderAamAuthenticationServerWindowsInstanceStats#krb_send_req_success}
  */
  readonly krbSendReqSuccess?: number;
  /**
  * Kerberos Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_windows_instance_stats#krb_timeout_error DataThunderAamAuthenticationServerWindowsInstanceStats#krb_timeout_error}
  */
  readonly krbTimeoutError?: number;
  /**
  * Kerberos KDC Validation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_windows_instance_stats#krb_validate_kdc_failure DataThunderAamAuthenticationServerWindowsInstanceStats#krb_validate_kdc_failure}
  */
  readonly krbValidateKdcFailure?: number;
  /**
  * Kerberos KDC Validation Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_windows_instance_stats#krb_validate_kdc_success DataThunderAamAuthenticationServerWindowsInstanceStats#krb_validate_kdc_success}
  */
  readonly krbValidateKdcSuccess?: number;
}

export function dataThunderAamAuthenticationServerWindowsInstanceStatsStatsToTerraform(struct?: DataThunderAamAuthenticationServerWindowsInstanceStatsStatsOutputReference | DataThunderAamAuthenticationServerWindowsInstanceStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    krb_get_resp_success: cdktf.numberToTerraform(struct!.krbGetRespSuccess),
    krb_other_error: cdktf.numberToTerraform(struct!.krbOtherError),
    krb_pw_change_failure: cdktf.numberToTerraform(struct!.krbPwChangeFailure),
    krb_pw_change_success: cdktf.numberToTerraform(struct!.krbPwChangeSuccess),
    krb_pw_expiry: cdktf.numberToTerraform(struct!.krbPwExpiry),
    krb_send_req_success: cdktf.numberToTerraform(struct!.krbSendReqSuccess),
    krb_timeout_error: cdktf.numberToTerraform(struct!.krbTimeoutError),
    krb_validate_kdc_failure: cdktf.numberToTerraform(struct!.krbValidateKdcFailure),
    krb_validate_kdc_success: cdktf.numberToTerraform(struct!.krbValidateKdcSuccess),
  }
}


export function dataThunderAamAuthenticationServerWindowsInstanceStatsStatsToHclTerraform(struct?: DataThunderAamAuthenticationServerWindowsInstanceStatsStatsOutputReference | DataThunderAamAuthenticationServerWindowsInstanceStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    krb_get_resp_success: {
      value: cdktf.numberToHclTerraform(struct!.krbGetRespSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    krb_other_error: {
      value: cdktf.numberToHclTerraform(struct!.krbOtherError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    krb_pw_change_failure: {
      value: cdktf.numberToHclTerraform(struct!.krbPwChangeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    krb_pw_change_success: {
      value: cdktf.numberToHclTerraform(struct!.krbPwChangeSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    krb_pw_expiry: {
      value: cdktf.numberToHclTerraform(struct!.krbPwExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    krb_send_req_success: {
      value: cdktf.numberToHclTerraform(struct!.krbSendReqSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    krb_timeout_error: {
      value: cdktf.numberToHclTerraform(struct!.krbTimeoutError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    krb_validate_kdc_failure: {
      value: cdktf.numberToHclTerraform(struct!.krbValidateKdcFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    krb_validate_kdc_success: {
      value: cdktf.numberToHclTerraform(struct!.krbValidateKdcSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationServerWindowsInstanceStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationServerWindowsInstanceStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._krbGetRespSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.krbGetRespSuccess = this._krbGetRespSuccess;
    }
    if (this._krbOtherError !== undefined) {
      hasAnyValues = true;
      internalValueResult.krbOtherError = this._krbOtherError;
    }
    if (this._krbPwChangeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.krbPwChangeFailure = this._krbPwChangeFailure;
    }
    if (this._krbPwChangeSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.krbPwChangeSuccess = this._krbPwChangeSuccess;
    }
    if (this._krbPwExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.krbPwExpiry = this._krbPwExpiry;
    }
    if (this._krbSendReqSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.krbSendReqSuccess = this._krbSendReqSuccess;
    }
    if (this._krbTimeoutError !== undefined) {
      hasAnyValues = true;
      internalValueResult.krbTimeoutError = this._krbTimeoutError;
    }
    if (this._krbValidateKdcFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.krbValidateKdcFailure = this._krbValidateKdcFailure;
    }
    if (this._krbValidateKdcSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.krbValidateKdcSuccess = this._krbValidateKdcSuccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationServerWindowsInstanceStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._krbGetRespSuccess = undefined;
      this._krbOtherError = undefined;
      this._krbPwChangeFailure = undefined;
      this._krbPwChangeSuccess = undefined;
      this._krbPwExpiry = undefined;
      this._krbSendReqSuccess = undefined;
      this._krbTimeoutError = undefined;
      this._krbValidateKdcFailure = undefined;
      this._krbValidateKdcSuccess = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._krbGetRespSuccess = value.krbGetRespSuccess;
      this._krbOtherError = value.krbOtherError;
      this._krbPwChangeFailure = value.krbPwChangeFailure;
      this._krbPwChangeSuccess = value.krbPwChangeSuccess;
      this._krbPwExpiry = value.krbPwExpiry;
      this._krbSendReqSuccess = value.krbSendReqSuccess;
      this._krbTimeoutError = value.krbTimeoutError;
      this._krbValidateKdcFailure = value.krbValidateKdcFailure;
      this._krbValidateKdcSuccess = value.krbValidateKdcSuccess;
    }
  }

  // krb_get_resp_success - computed: false, optional: true, required: false
  private _krbGetRespSuccess?: number; 
  public get krbGetRespSuccess() {
    return this.getNumberAttribute('krb_get_resp_success');
  }
  public set krbGetRespSuccess(value: number) {
    this._krbGetRespSuccess = value;
  }
  public resetKrbGetRespSuccess() {
    this._krbGetRespSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbGetRespSuccessInput() {
    return this._krbGetRespSuccess;
  }

  // krb_other_error - computed: false, optional: true, required: false
  private _krbOtherError?: number; 
  public get krbOtherError() {
    return this.getNumberAttribute('krb_other_error');
  }
  public set krbOtherError(value: number) {
    this._krbOtherError = value;
  }
  public resetKrbOtherError() {
    this._krbOtherError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbOtherErrorInput() {
    return this._krbOtherError;
  }

  // krb_pw_change_failure - computed: false, optional: true, required: false
  private _krbPwChangeFailure?: number; 
  public get krbPwChangeFailure() {
    return this.getNumberAttribute('krb_pw_change_failure');
  }
  public set krbPwChangeFailure(value: number) {
    this._krbPwChangeFailure = value;
  }
  public resetKrbPwChangeFailure() {
    this._krbPwChangeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbPwChangeFailureInput() {
    return this._krbPwChangeFailure;
  }

  // krb_pw_change_success - computed: false, optional: true, required: false
  private _krbPwChangeSuccess?: number; 
  public get krbPwChangeSuccess() {
    return this.getNumberAttribute('krb_pw_change_success');
  }
  public set krbPwChangeSuccess(value: number) {
    this._krbPwChangeSuccess = value;
  }
  public resetKrbPwChangeSuccess() {
    this._krbPwChangeSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbPwChangeSuccessInput() {
    return this._krbPwChangeSuccess;
  }

  // krb_pw_expiry - computed: false, optional: true, required: false
  private _krbPwExpiry?: number; 
  public get krbPwExpiry() {
    return this.getNumberAttribute('krb_pw_expiry');
  }
  public set krbPwExpiry(value: number) {
    this._krbPwExpiry = value;
  }
  public resetKrbPwExpiry() {
    this._krbPwExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbPwExpiryInput() {
    return this._krbPwExpiry;
  }

  // krb_send_req_success - computed: false, optional: true, required: false
  private _krbSendReqSuccess?: number; 
  public get krbSendReqSuccess() {
    return this.getNumberAttribute('krb_send_req_success');
  }
  public set krbSendReqSuccess(value: number) {
    this._krbSendReqSuccess = value;
  }
  public resetKrbSendReqSuccess() {
    this._krbSendReqSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbSendReqSuccessInput() {
    return this._krbSendReqSuccess;
  }

  // krb_timeout_error - computed: false, optional: true, required: false
  private _krbTimeoutError?: number; 
  public get krbTimeoutError() {
    return this.getNumberAttribute('krb_timeout_error');
  }
  public set krbTimeoutError(value: number) {
    this._krbTimeoutError = value;
  }
  public resetKrbTimeoutError() {
    this._krbTimeoutError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbTimeoutErrorInput() {
    return this._krbTimeoutError;
  }

  // krb_validate_kdc_failure - computed: false, optional: true, required: false
  private _krbValidateKdcFailure?: number; 
  public get krbValidateKdcFailure() {
    return this.getNumberAttribute('krb_validate_kdc_failure');
  }
  public set krbValidateKdcFailure(value: number) {
    this._krbValidateKdcFailure = value;
  }
  public resetKrbValidateKdcFailure() {
    this._krbValidateKdcFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbValidateKdcFailureInput() {
    return this._krbValidateKdcFailure;
  }

  // krb_validate_kdc_success - computed: false, optional: true, required: false
  private _krbValidateKdcSuccess?: number; 
  public get krbValidateKdcSuccess() {
    return this.getNumberAttribute('krb_validate_kdc_success');
  }
  public set krbValidateKdcSuccess(value: number) {
    this._krbValidateKdcSuccess = value;
  }
  public resetKrbValidateKdcSuccess() {
    this._krbValidateKdcSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbValidateKdcSuccessInput() {
    return this._krbValidateKdcSuccess;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_windows_instance_stats thunder_aam_authentication_server_windows_instance_stats}
*/
export class DataThunderAamAuthenticationServerWindowsInstanceStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_server_windows_instance_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthenticationServerWindowsInstanceStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthenticationServerWindowsInstanceStats to import
  * @param importFromId The id of the existing DataThunderAamAuthenticationServerWindowsInstanceStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_windows_instance_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthenticationServerWindowsInstanceStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_server_windows_instance_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_windows_instance_stats thunder_aam_authentication_server_windows_instance_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthenticationServerWindowsInstanceStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthenticationServerWindowsInstanceStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_server_windows_instance_stats',
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
  private _stats = new DataThunderAamAuthenticationServerWindowsInstanceStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamAuthenticationServerWindowsInstanceStatsStats) {
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
      stats: dataThunderAamAuthenticationServerWindowsInstanceStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderAamAuthenticationServerWindowsInstanceStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationServerWindowsInstanceStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
