// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbSslStatsOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#id DataThunderSlbSslStatsOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#oper DataThunderSlbSslStatsOper#oper}
  */
  readonly oper?: DataThunderSlbSslStatsOperOper;
}
export interface DataThunderSlbSslStatsOperOperSslModuleStats {
  /**
  * Number of requests handled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#requests_handled DataThunderSlbSslStatsOper#requests_handled}
  */
  readonly requestsHandled?: number;
  /**
  * Average module percentage per sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#sec_rate1 DataThunderSlbSslStatsOper#sec_rate1}
  */
  readonly secRate1?: number;
  /**
  * Average module percentage per 10 sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#sec_rate10 DataThunderSlbSslStatsOper#sec_rate10}
  */
  readonly secRate10?: number;
  /**
  * Average module percentage per 30 sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#sec_rate30 DataThunderSlbSslStatsOper#sec_rate30}
  */
  readonly secRate30?: number;
  /**
  * Average module percentage per 5 sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#sec_rate5 DataThunderSlbSslStatsOper#sec_rate5}
  */
  readonly secRate5?: number;
  /**
  * Average module percentage per 60 sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#sec_rate60 DataThunderSlbSslStatsOper#sec_rate60}
  */
  readonly secRate60?: number;
  /**
  * SSL module index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#ssl_modules_index DataThunderSlbSslStatsOper#ssl_modules_index}
  */
  readonly sslModulesIndex?: number;
  /**
  * Number of available crypto engines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#total_available_crypto_engines DataThunderSlbSslStatsOper#total_available_crypto_engines}
  */
  readonly totalAvailableCryptoEngines?: number;
  /**
  * Number of enabled crypto engines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#total_enabled_crypto_engines DataThunderSlbSslStatsOper#total_enabled_crypto_engines}
  */
  readonly totalEnabledCryptoEngines?: number;
  /**
  * current module percentage per sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#util_percentage DataThunderSlbSslStatsOper#util_percentage}
  */
  readonly utilPercentage?: number;
}

export function dataThunderSlbSslStatsOperOperSslModuleStatsToTerraform(struct?: DataThunderSlbSslStatsOperOperSslModuleStats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    requests_handled: cdktf.numberToTerraform(struct!.requestsHandled),
    sec_rate1: cdktf.numberToTerraform(struct!.secRate1),
    sec_rate10: cdktf.numberToTerraform(struct!.secRate10),
    sec_rate30: cdktf.numberToTerraform(struct!.secRate30),
    sec_rate5: cdktf.numberToTerraform(struct!.secRate5),
    sec_rate60: cdktf.numberToTerraform(struct!.secRate60),
    ssl_modules_index: cdktf.numberToTerraform(struct!.sslModulesIndex),
    total_available_crypto_engines: cdktf.numberToTerraform(struct!.totalAvailableCryptoEngines),
    total_enabled_crypto_engines: cdktf.numberToTerraform(struct!.totalEnabledCryptoEngines),
    util_percentage: cdktf.numberToTerraform(struct!.utilPercentage),
  }
}


export function dataThunderSlbSslStatsOperOperSslModuleStatsToHclTerraform(struct?: DataThunderSlbSslStatsOperOperSslModuleStats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    requests_handled: {
      value: cdktf.numberToHclTerraform(struct!.requestsHandled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sec_rate1: {
      value: cdktf.numberToHclTerraform(struct!.secRate1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sec_rate10: {
      value: cdktf.numberToHclTerraform(struct!.secRate10),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sec_rate30: {
      value: cdktf.numberToHclTerraform(struct!.secRate30),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sec_rate5: {
      value: cdktf.numberToHclTerraform(struct!.secRate5),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sec_rate60: {
      value: cdktf.numberToHclTerraform(struct!.secRate60),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_modules_index: {
      value: cdktf.numberToHclTerraform(struct!.sslModulesIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_available_crypto_engines: {
      value: cdktf.numberToHclTerraform(struct!.totalAvailableCryptoEngines),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_enabled_crypto_engines: {
      value: cdktf.numberToHclTerraform(struct!.totalEnabledCryptoEngines),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    util_percentage: {
      value: cdktf.numberToHclTerraform(struct!.utilPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSslStatsOperOperSslModuleStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataThunderSlbSslStatsOperOperSslModuleStats | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestsHandled !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsHandled = this._requestsHandled;
    }
    if (this._secRate1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.secRate1 = this._secRate1;
    }
    if (this._secRate10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.secRate10 = this._secRate10;
    }
    if (this._secRate30 !== undefined) {
      hasAnyValues = true;
      internalValueResult.secRate30 = this._secRate30;
    }
    if (this._secRate5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.secRate5 = this._secRate5;
    }
    if (this._secRate60 !== undefined) {
      hasAnyValues = true;
      internalValueResult.secRate60 = this._secRate60;
    }
    if (this._sslModulesIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslModulesIndex = this._sslModulesIndex;
    }
    if (this._totalAvailableCryptoEngines !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalAvailableCryptoEngines = this._totalAvailableCryptoEngines;
    }
    if (this._totalEnabledCryptoEngines !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEnabledCryptoEngines = this._totalEnabledCryptoEngines;
    }
    if (this._utilPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.utilPercentage = this._utilPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSslStatsOperOperSslModuleStats | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestsHandled = undefined;
      this._secRate1 = undefined;
      this._secRate10 = undefined;
      this._secRate30 = undefined;
      this._secRate5 = undefined;
      this._secRate60 = undefined;
      this._sslModulesIndex = undefined;
      this._totalAvailableCryptoEngines = undefined;
      this._totalEnabledCryptoEngines = undefined;
      this._utilPercentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestsHandled = value.requestsHandled;
      this._secRate1 = value.secRate1;
      this._secRate10 = value.secRate10;
      this._secRate30 = value.secRate30;
      this._secRate5 = value.secRate5;
      this._secRate60 = value.secRate60;
      this._sslModulesIndex = value.sslModulesIndex;
      this._totalAvailableCryptoEngines = value.totalAvailableCryptoEngines;
      this._totalEnabledCryptoEngines = value.totalEnabledCryptoEngines;
      this._utilPercentage = value.utilPercentage;
    }
  }

  // requests_handled - computed: false, optional: true, required: false
  private _requestsHandled?: number; 
  public get requestsHandled() {
    return this.getNumberAttribute('requests_handled');
  }
  public set requestsHandled(value: number) {
    this._requestsHandled = value;
  }
  public resetRequestsHandled() {
    this._requestsHandled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsHandledInput() {
    return this._requestsHandled;
  }

  // sec_rate1 - computed: false, optional: true, required: false
  private _secRate1?: number; 
  public get secRate1() {
    return this.getNumberAttribute('sec_rate1');
  }
  public set secRate1(value: number) {
    this._secRate1 = value;
  }
  public resetSecRate1() {
    this._secRate1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secRate1Input() {
    return this._secRate1;
  }

  // sec_rate10 - computed: false, optional: true, required: false
  private _secRate10?: number; 
  public get secRate10() {
    return this.getNumberAttribute('sec_rate10');
  }
  public set secRate10(value: number) {
    this._secRate10 = value;
  }
  public resetSecRate10() {
    this._secRate10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secRate10Input() {
    return this._secRate10;
  }

  // sec_rate30 - computed: false, optional: true, required: false
  private _secRate30?: number; 
  public get secRate30() {
    return this.getNumberAttribute('sec_rate30');
  }
  public set secRate30(value: number) {
    this._secRate30 = value;
  }
  public resetSecRate30() {
    this._secRate30 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secRate30Input() {
    return this._secRate30;
  }

  // sec_rate5 - computed: false, optional: true, required: false
  private _secRate5?: number; 
  public get secRate5() {
    return this.getNumberAttribute('sec_rate5');
  }
  public set secRate5(value: number) {
    this._secRate5 = value;
  }
  public resetSecRate5() {
    this._secRate5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secRate5Input() {
    return this._secRate5;
  }

  // sec_rate60 - computed: false, optional: true, required: false
  private _secRate60?: number; 
  public get secRate60() {
    return this.getNumberAttribute('sec_rate60');
  }
  public set secRate60(value: number) {
    this._secRate60 = value;
  }
  public resetSecRate60() {
    this._secRate60 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secRate60Input() {
    return this._secRate60;
  }

  // ssl_modules_index - computed: false, optional: true, required: false
  private _sslModulesIndex?: number; 
  public get sslModulesIndex() {
    return this.getNumberAttribute('ssl_modules_index');
  }
  public set sslModulesIndex(value: number) {
    this._sslModulesIndex = value;
  }
  public resetSslModulesIndex() {
    this._sslModulesIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModulesIndexInput() {
    return this._sslModulesIndex;
  }

  // total_available_crypto_engines - computed: false, optional: true, required: false
  private _totalAvailableCryptoEngines?: number; 
  public get totalAvailableCryptoEngines() {
    return this.getNumberAttribute('total_available_crypto_engines');
  }
  public set totalAvailableCryptoEngines(value: number) {
    this._totalAvailableCryptoEngines = value;
  }
  public resetTotalAvailableCryptoEngines() {
    this._totalAvailableCryptoEngines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalAvailableCryptoEnginesInput() {
    return this._totalAvailableCryptoEngines;
  }

  // total_enabled_crypto_engines - computed: false, optional: true, required: false
  private _totalEnabledCryptoEngines?: number; 
  public get totalEnabledCryptoEngines() {
    return this.getNumberAttribute('total_enabled_crypto_engines');
  }
  public set totalEnabledCryptoEngines(value: number) {
    this._totalEnabledCryptoEngines = value;
  }
  public resetTotalEnabledCryptoEngines() {
    this._totalEnabledCryptoEngines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEnabledCryptoEnginesInput() {
    return this._totalEnabledCryptoEngines;
  }

  // util_percentage - computed: false, optional: true, required: false
  private _utilPercentage?: number; 
  public get utilPercentage() {
    return this.getNumberAttribute('util_percentage');
  }
  public set utilPercentage(value: number) {
    this._utilPercentage = value;
  }
  public resetUtilPercentage() {
    this._utilPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utilPercentageInput() {
    return this._utilPercentage;
  }
}

export class DataThunderSlbSslStatsOperOperSslModuleStatsList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbSslStatsOperOperSslModuleStats[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataThunderSlbSslStatsOperOperSslModuleStatsOutputReference {
    return new DataThunderSlbSslStatsOperOperSslModuleStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbSslStatsOperOper {
  /**
  * Bypass AD-Group sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#bypass_ad_group_sessions DataThunderSlbSslStatsOper#bypass_ad_group_sessions}
  */
  readonly bypassAdGroupSessions?: number;
  /**
  * Bypass Cert Issuer sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#bypass_cert_issuer_sessions DataThunderSlbSslStatsOper#bypass_cert_issuer_sessions}
  */
  readonly bypassCertIssuerSessions?: number;
  /**
  * Bypass Cert SAN sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#bypass_cert_san_sessions DataThunderSlbSslStatsOper#bypass_cert_san_sessions}
  */
  readonly bypassCertSanSessions?: number;
  /**
  * Bypass Cert Subject sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#bypass_cert_subject_sessions DataThunderSlbSslStatsOper#bypass_cert_subject_sessions}
  */
  readonly bypassCertSubjectSessions?: number;
  /**
  * Bypass Client Auth sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#bypass_client_auth_sessions DataThunderSlbSslStatsOper#bypass_client_auth_sessions}
  */
  readonly bypassClientAuthSessions?: number;
  /**
  * Bypass ESNI sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#bypass_esni_sessions DataThunderSlbSslStatsOper#bypass_esni_sessions}
  */
  readonly bypassEsniSessions?: number;
  /**
  * Bypass failsafe SSL sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#bypass_failsafe_sessions DataThunderSlbSslStatsOper#bypass_failsafe_sessions}
  */
  readonly bypassFailsafeSessions?: number;
  /**
  * Bypass No SNI sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#bypass_no_sni_sessions DataThunderSlbSslStatsOper#bypass_no_sni_sessions}
  */
  readonly bypassNoSniSessions?: number;
  /**
  * Bypass SNI sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#bypass_sni_sessions DataThunderSlbSslStatsOper#bypass_sni_sessions}
  */
  readonly bypassSniSessions?: number;
  /**
  * Bypass Username sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#bypass_usename_sessions DataThunderSlbSslStatsOper#bypass_usename_sessions}
  */
  readonly bypassUsenameSessions?: number;
  /**
  * SSL fail CA verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#ca_verification_failures DataThunderSlbSslStatsOper#ca_verification_failures}
  */
  readonly caVerificationFailures?: number;
  /**
  * Failed in Certificate Signing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#certificate_signing_failures DataThunderSlbSslStatsOper#certificate_signing_failures}
  */
  readonly certificateSigningFailures?: number;
  /**
  * Failed in Certificate Verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#certificate_verification_failures DataThunderSlbSslStatsOper#certificate_verification_failures}
  */
  readonly certificateVerificationFailures?: number;
  /**
  * SSL client certificate authorization failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#client_cert_auth_fail DataThunderSlbSslStatsOper#client_cert_auth_fail}
  */
  readonly clientCertAuthFail?: number;
  /**
  * Cert Fetch, SSL Fatal Alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#client_ssl_fatal_alert DataThunderSlbSslStatsOper#client_ssl_fatal_alert}
  */
  readonly clientSslFatalAlert?: number;
  /**
  * Cert Fetch, TCP FIN/RST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#client_ssl_fin_reset DataThunderSlbSslStatsOper#client_ssl_fin_reset}
  */
  readonly clientSslFinReset?: number;
  /**
  * Client SSL Internal Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#client_ssl_internal_error DataThunderSlbSslStatsOper#client_ssl_internal_error}
  */
  readonly clientSslInternalError?: number;
  /**
  * Client SSL Unknown Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#client_ssl_unknown_error DataThunderSlbSslStatsOper#client_ssl_unknown_error}
  */
  readonly clientSslUnknownError?: number;
  /**
  * Total client ssl context malloc failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#clientssl_context_malloc_fail DataThunderSlbSslStatsOper#clientssl_context_malloc_fail}
  */
  readonly clientsslContextMallocFail?: number;
  /**
  * Config module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#config_module_type DataThunderSlbSslStatsOper#config_module_type}
  */
  readonly configModuleType?: string;
  /**
  * Crypto operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#cryptio_operations DataThunderSlbSslStatsOper#cryptio_operations}
  */
  readonly cryptioOperations?: number;
  /**
  * Current SSL contexts in use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#curr_ssl_contexts DataThunderSlbSslStatsOper#curr_ssl_contexts}
  */
  readonly currSslContexts?: number;
  /**
  * Current clientside SSL connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#current_clientside_connections DataThunderSlbSslStatsOper#current_clientside_connections}
  */
  readonly currentClientsideConnections?: number;
  /**
  * Current serverside SSL connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#current_serverside_connections DataThunderSlbSslStatsOper#current_serverside_connections}
  */
  readonly currentServersideConnections?: number;
  /**
  * Drop ESNI sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#drop_esni_sessions DataThunderSlbSslStatsOper#drop_esni_sessions}
  */
  readonly dropEsniSessions?: number;
  /**
  * Current Dynamic SSL contexts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#dynamic_ssl_contexts DataThunderSlbSslStatsOper#dynamic_ssl_contexts}
  */
  readonly dynamicSslContexts?: number;
  /**
  * Failed crypto operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#failed_crypto DataThunderSlbSslStatsOper#failed_crypto}
  */
  readonly failedCrypto?: number;
  /**
  * Failed SSL handshakes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#failed_handshakes DataThunderSlbSslStatsOper#failed_handshakes}
  */
  readonly failedHandshakes?: number;
  /**
  * aFleX fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#fp_fail_aflex DataThunderSlbSslStatsOper#fp_fail_aflex}
  */
  readonly fpFailAflex?: number;
  /**
  * Cert fetch, Fatal alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#fp_fail_handshake DataThunderSlbSslStatsOper#fp_fail_handshake}
  */
  readonly fpFailHandshake?: number;
  /**
  * Cert fetch, TCP FIN/RST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#fp_fail_tcp_error DataThunderSlbSslStatsOper#fp_fail_tcp_error}
  */
  readonly fpFailTcpError?: number;
  /**
  * Cert fetch, validation error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#fp_fail_verify_cert DataThunderSlbSslStatsOper#fp_fail_verify_cert}
  */
  readonly fpFailVerifyCert?: number;
  /**
  * HW Context Memory alloc failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#hw_context_alloc_fail DataThunderSlbSslStatsOper#hw_context_alloc_fail}
  */
  readonly hwContextAllocFail?: number;
  /**
  * HW Context Memory Total Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#hw_context_total DataThunderSlbSslStatsOper#hw_context_total}
  */
  readonly hwContextTotal?: number;
  /**
  * HW Context Memory In Use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#hw_context_usage DataThunderSlbSslStatsOper#hw_context_usage}
  */
  readonly hwContextUsage?: number;
  /**
  * HW ring full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#hw_ring_full DataThunderSlbSslStatsOper#hw_ring_full}
  */
  readonly hwRingFull?: number;
  /**
  * Invalid OCSP Stapling Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#invalid_ocsp_stapling_response DataThunderSlbSslStatsOper#invalid_ocsp_stapling_response}
  */
  readonly invalidOcspStaplingResponse?: number;
  /**
  * Maximum SSL contexts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#max_ssl_contexts DataThunderSlbSslStatsOper#max_ssl_contexts}
  */
  readonly maxSslContexts?: number;
  /**
  * NON SSL bypass connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#non_ssl_bypass_connections DataThunderSlbSslStatsOper#non_ssl_bypass_connections}
  */
  readonly nonSslBypassConnections?: number;
  /**
  * Record too big
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#record_too_big DataThunderSlbSslStatsOper#record_too_big}
  */
  readonly recordTooBig?: number;
  /**
  * Reset NO SNI sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#reset_no_sni_sessions DataThunderSlbSslStatsOper#reset_no_sni_sessions}
  */
  readonly resetNoSniSessions?: number;
  /**
  * Revoked OCSP Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#revoked_ocsp_response DataThunderSlbSslStatsOper#revoked_ocsp_response}
  */
  readonly revokedOcspResponse?: number;
  /**
  * SSL server certificate errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#server_cert_errors DataThunderSlbSslStatsOper#server_cert_errors}
  */
  readonly serverCertErrors?: number;
  /**
  * Server SSL, SSL Fatal alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#server_ssl_fatal_alert DataThunderSlbSslStatsOper#server_ssl_fatal_alert}
  */
  readonly serverSslFatalAlert?: number;
  /**
  * Server SSL, TCP FIN/RST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#server_ssl_fin_reset DataThunderSlbSslStatsOper#server_ssl_fin_reset}
  */
  readonly serverSslFinReset?: number;
  /**
  * Server SSL Internal Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#server_ssl_internal_error DataThunderSlbSslStatsOper#server_ssl_internal_error}
  */
  readonly serverSslInternalError?: number;
  /**
  * Server SSL Unknown Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#server_ssl_unknown_error DataThunderSlbSslStatsOper#server_ssl_unknown_error}
  */
  readonly serverSslUnknownError?: number;
  /**
  * Failed in SSL handshakes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#ssl_handshake_failure DataThunderSlbSslStatsOper#ssl_handshake_failure}
  */
  readonly sslHandshakeFailure?: number;
  /**
  * SSL memory usage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#ssl_memory_usage DataThunderSlbSslStatsOper#ssl_memory_usage}
  */
  readonly sslMemoryUsage?: number;
  /**
  * SSL module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#ssl_module_type DataThunderSlbSslStatsOper#ssl_module_type}
  */
  readonly sslModuleType?: string;
  /**
  * Number of SSL modules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#ssl_modules_count DataThunderSlbSslStatsOper#ssl_modules_count}
  */
  readonly sslModulesCount?: number;
  /**
  * SSL Session, TCP FIN/RST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#ssl_session_fin_reset DataThunderSlbSslStatsOper#ssl_session_fin_reset}
  */
  readonly sslSessionFinReset?: number;
  /**
  * Current Static SSL contexts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#static_ssl_contexts DataThunderSlbSslStatsOper#static_ssl_contexts}
  */
  readonly staticSslContexts?: number;
  /**
  * Failed in TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#tcp_failures DataThunderSlbSslStatsOper#tcp_failures}
  */
  readonly tcpFailures?: number;
  /**
  * Thales HSM Status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#thales_hsm_status DataThunderSlbSslStatsOper#thales_hsm_status}
  */
  readonly thalesHsmStatus?: string;
  /**
  * Total clientside SSL connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#total_clientside_connections DataThunderSlbSslStatsOper#total_clientside_connections}
  */
  readonly totalClientsideConnections?: number;
  /**
  * Total clientside early data connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#total_clientside_early_data_connections DataThunderSlbSslStatsOper#total_clientside_early_data_connections}
  */
  readonly totalClientsideEarlyDataConnections?: number;
  /**
  * Total clientside failed early data connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#total_clientside_failed_early_data_connections DataThunderSlbSslStatsOper#total_clientside_failed_early_data_connections}
  */
  readonly totalClientsideFailedEarlyDataConnections?: number;
  /**
  * Total times of stateful session reuse in client ssl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#total_reuse_client_ssl DataThunderSlbSslStatsOper#total_reuse_client_ssl}
  */
  readonly totalReuseClientSsl?: number;
  /**
  * Total times of stateful session reuse in server ssl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#total_reuse_server_ssl DataThunderSlbSslStatsOper#total_reuse_server_ssl}
  */
  readonly totalReuseServerSsl?: number;
  /**
  * Total times of stateless session reuse in client ssl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#total_reuse_session_ticket_client_ssl DataThunderSlbSslStatsOper#total_reuse_session_ticket_client_ssl}
  */
  readonly totalReuseSessionTicketClientSsl?: number;
  /**
  * Total times of stateless session reuse in server ssl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#total_reuse_session_ticket_server_ssl DataThunderSlbSslStatsOper#total_reuse_session_ticket_server_ssl}
  */
  readonly totalReuseSessionTicketServerSsl?: number;
  /**
  * Total serverside SSL connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#total_serverside_connections DataThunderSlbSslStatsOper#total_serverside_connections}
  */
  readonly totalServersideConnections?: number;
  /**
  * Total serverside early data connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#total_serverside_early_data_connections DataThunderSlbSslStatsOper#total_serverside_early_data_connections}
  */
  readonly totalServersideEarlyDataConnections?: number;
  /**
  * Total serverside failed early data connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#total_serverside_failed_early_data_connections DataThunderSlbSslStatsOper#total_serverside_failed_early_data_connections}
  */
  readonly totalServersideFailedEarlyDataConnections?: number;
  /**
  * Unsupported SSL Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#unsupported_ssl_version DataThunderSlbSslStatsOper#unsupported_ssl_version}
  */
  readonly unsupportedSslVersion?: number;
  /**
  * current module percentage enable Status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#util_enable_status DataThunderSlbSslStatsOper#util_enable_status}
  */
  readonly utilEnableStatus?: string;
  /**
  * ssl_module_stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#ssl_module_stats DataThunderSlbSslStatsOper#ssl_module_stats}
  */
  readonly sslModuleStats?: DataThunderSlbSslStatsOperOperSslModuleStats[] | cdktf.IResolvable;
}

export function dataThunderSlbSslStatsOperOperToTerraform(struct?: DataThunderSlbSslStatsOperOperOutputReference | DataThunderSlbSslStatsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass_ad_group_sessions: cdktf.numberToTerraform(struct!.bypassAdGroupSessions),
    bypass_cert_issuer_sessions: cdktf.numberToTerraform(struct!.bypassCertIssuerSessions),
    bypass_cert_san_sessions: cdktf.numberToTerraform(struct!.bypassCertSanSessions),
    bypass_cert_subject_sessions: cdktf.numberToTerraform(struct!.bypassCertSubjectSessions),
    bypass_client_auth_sessions: cdktf.numberToTerraform(struct!.bypassClientAuthSessions),
    bypass_esni_sessions: cdktf.numberToTerraform(struct!.bypassEsniSessions),
    bypass_failsafe_sessions: cdktf.numberToTerraform(struct!.bypassFailsafeSessions),
    bypass_no_sni_sessions: cdktf.numberToTerraform(struct!.bypassNoSniSessions),
    bypass_sni_sessions: cdktf.numberToTerraform(struct!.bypassSniSessions),
    bypass_usename_sessions: cdktf.numberToTerraform(struct!.bypassUsenameSessions),
    ca_verification_failures: cdktf.numberToTerraform(struct!.caVerificationFailures),
    certificate_signing_failures: cdktf.numberToTerraform(struct!.certificateSigningFailures),
    certificate_verification_failures: cdktf.numberToTerraform(struct!.certificateVerificationFailures),
    client_cert_auth_fail: cdktf.numberToTerraform(struct!.clientCertAuthFail),
    client_ssl_fatal_alert: cdktf.numberToTerraform(struct!.clientSslFatalAlert),
    client_ssl_fin_reset: cdktf.numberToTerraform(struct!.clientSslFinReset),
    client_ssl_internal_error: cdktf.numberToTerraform(struct!.clientSslInternalError),
    client_ssl_unknown_error: cdktf.numberToTerraform(struct!.clientSslUnknownError),
    clientssl_context_malloc_fail: cdktf.numberToTerraform(struct!.clientsslContextMallocFail),
    config_module_type: cdktf.stringToTerraform(struct!.configModuleType),
    cryptio_operations: cdktf.numberToTerraform(struct!.cryptioOperations),
    curr_ssl_contexts: cdktf.numberToTerraform(struct!.currSslContexts),
    current_clientside_connections: cdktf.numberToTerraform(struct!.currentClientsideConnections),
    current_serverside_connections: cdktf.numberToTerraform(struct!.currentServersideConnections),
    drop_esni_sessions: cdktf.numberToTerraform(struct!.dropEsniSessions),
    dynamic_ssl_contexts: cdktf.numberToTerraform(struct!.dynamicSslContexts),
    failed_crypto: cdktf.numberToTerraform(struct!.failedCrypto),
    failed_handshakes: cdktf.numberToTerraform(struct!.failedHandshakes),
    fp_fail_aflex: cdktf.numberToTerraform(struct!.fpFailAflex),
    fp_fail_handshake: cdktf.numberToTerraform(struct!.fpFailHandshake),
    fp_fail_tcp_error: cdktf.numberToTerraform(struct!.fpFailTcpError),
    fp_fail_verify_cert: cdktf.numberToTerraform(struct!.fpFailVerifyCert),
    hw_context_alloc_fail: cdktf.numberToTerraform(struct!.hwContextAllocFail),
    hw_context_total: cdktf.numberToTerraform(struct!.hwContextTotal),
    hw_context_usage: cdktf.numberToTerraform(struct!.hwContextUsage),
    hw_ring_full: cdktf.numberToTerraform(struct!.hwRingFull),
    invalid_ocsp_stapling_response: cdktf.numberToTerraform(struct!.invalidOcspStaplingResponse),
    max_ssl_contexts: cdktf.numberToTerraform(struct!.maxSslContexts),
    non_ssl_bypass_connections: cdktf.numberToTerraform(struct!.nonSslBypassConnections),
    record_too_big: cdktf.numberToTerraform(struct!.recordTooBig),
    reset_no_sni_sessions: cdktf.numberToTerraform(struct!.resetNoSniSessions),
    revoked_ocsp_response: cdktf.numberToTerraform(struct!.revokedOcspResponse),
    server_cert_errors: cdktf.numberToTerraform(struct!.serverCertErrors),
    server_ssl_fatal_alert: cdktf.numberToTerraform(struct!.serverSslFatalAlert),
    server_ssl_fin_reset: cdktf.numberToTerraform(struct!.serverSslFinReset),
    server_ssl_internal_error: cdktf.numberToTerraform(struct!.serverSslInternalError),
    server_ssl_unknown_error: cdktf.numberToTerraform(struct!.serverSslUnknownError),
    ssl_handshake_failure: cdktf.numberToTerraform(struct!.sslHandshakeFailure),
    ssl_memory_usage: cdktf.numberToTerraform(struct!.sslMemoryUsage),
    ssl_module_type: cdktf.stringToTerraform(struct!.sslModuleType),
    ssl_modules_count: cdktf.numberToTerraform(struct!.sslModulesCount),
    ssl_session_fin_reset: cdktf.numberToTerraform(struct!.sslSessionFinReset),
    static_ssl_contexts: cdktf.numberToTerraform(struct!.staticSslContexts),
    tcp_failures: cdktf.numberToTerraform(struct!.tcpFailures),
    thales_hsm_status: cdktf.stringToTerraform(struct!.thalesHsmStatus),
    total_clientside_connections: cdktf.numberToTerraform(struct!.totalClientsideConnections),
    total_clientside_early_data_connections: cdktf.numberToTerraform(struct!.totalClientsideEarlyDataConnections),
    total_clientside_failed_early_data_connections: cdktf.numberToTerraform(struct!.totalClientsideFailedEarlyDataConnections),
    total_reuse_client_ssl: cdktf.numberToTerraform(struct!.totalReuseClientSsl),
    total_reuse_server_ssl: cdktf.numberToTerraform(struct!.totalReuseServerSsl),
    total_reuse_session_ticket_client_ssl: cdktf.numberToTerraform(struct!.totalReuseSessionTicketClientSsl),
    total_reuse_session_ticket_server_ssl: cdktf.numberToTerraform(struct!.totalReuseSessionTicketServerSsl),
    total_serverside_connections: cdktf.numberToTerraform(struct!.totalServersideConnections),
    total_serverside_early_data_connections: cdktf.numberToTerraform(struct!.totalServersideEarlyDataConnections),
    total_serverside_failed_early_data_connections: cdktf.numberToTerraform(struct!.totalServersideFailedEarlyDataConnections),
    unsupported_ssl_version: cdktf.numberToTerraform(struct!.unsupportedSslVersion),
    util_enable_status: cdktf.stringToTerraform(struct!.utilEnableStatus),
    ssl_module_stats: cdktf.listMapper(dataThunderSlbSslStatsOperOperSslModuleStatsToTerraform, true)(struct!.sslModuleStats),
  }
}


export function dataThunderSlbSslStatsOperOperToHclTerraform(struct?: DataThunderSlbSslStatsOperOperOutputReference | DataThunderSlbSslStatsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass_ad_group_sessions: {
      value: cdktf.numberToHclTerraform(struct!.bypassAdGroupSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bypass_cert_issuer_sessions: {
      value: cdktf.numberToHclTerraform(struct!.bypassCertIssuerSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bypass_cert_san_sessions: {
      value: cdktf.numberToHclTerraform(struct!.bypassCertSanSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bypass_cert_subject_sessions: {
      value: cdktf.numberToHclTerraform(struct!.bypassCertSubjectSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bypass_client_auth_sessions: {
      value: cdktf.numberToHclTerraform(struct!.bypassClientAuthSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bypass_esni_sessions: {
      value: cdktf.numberToHclTerraform(struct!.bypassEsniSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bypass_failsafe_sessions: {
      value: cdktf.numberToHclTerraform(struct!.bypassFailsafeSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bypass_no_sni_sessions: {
      value: cdktf.numberToHclTerraform(struct!.bypassNoSniSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bypass_sni_sessions: {
      value: cdktf.numberToHclTerraform(struct!.bypassSniSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bypass_usename_sessions: {
      value: cdktf.numberToHclTerraform(struct!.bypassUsenameSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ca_verification_failures: {
      value: cdktf.numberToHclTerraform(struct!.caVerificationFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    certificate_signing_failures: {
      value: cdktf.numberToHclTerraform(struct!.certificateSigningFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    certificate_verification_failures: {
      value: cdktf.numberToHclTerraform(struct!.certificateVerificationFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_cert_auth_fail: {
      value: cdktf.numberToHclTerraform(struct!.clientCertAuthFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_ssl_fatal_alert: {
      value: cdktf.numberToHclTerraform(struct!.clientSslFatalAlert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_ssl_fin_reset: {
      value: cdktf.numberToHclTerraform(struct!.clientSslFinReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_ssl_internal_error: {
      value: cdktf.numberToHclTerraform(struct!.clientSslInternalError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_ssl_unknown_error: {
      value: cdktf.numberToHclTerraform(struct!.clientSslUnknownError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clientssl_context_malloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.clientsslContextMallocFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    config_module_type: {
      value: cdktf.stringToHclTerraform(struct!.configModuleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cryptio_operations: {
      value: cdktf.numberToHclTerraform(struct!.cryptioOperations),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_ssl_contexts: {
      value: cdktf.numberToHclTerraform(struct!.currSslContexts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    current_clientside_connections: {
      value: cdktf.numberToHclTerraform(struct!.currentClientsideConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    current_serverside_connections: {
      value: cdktf.numberToHclTerraform(struct!.currentServersideConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_esni_sessions: {
      value: cdktf.numberToHclTerraform(struct!.dropEsniSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dynamic_ssl_contexts: {
      value: cdktf.numberToHclTerraform(struct!.dynamicSslContexts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failed_crypto: {
      value: cdktf.numberToHclTerraform(struct!.failedCrypto),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failed_handshakes: {
      value: cdktf.numberToHclTerraform(struct!.failedHandshakes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fp_fail_aflex: {
      value: cdktf.numberToHclTerraform(struct!.fpFailAflex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fp_fail_handshake: {
      value: cdktf.numberToHclTerraform(struct!.fpFailHandshake),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fp_fail_tcp_error: {
      value: cdktf.numberToHclTerraform(struct!.fpFailTcpError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fp_fail_verify_cert: {
      value: cdktf.numberToHclTerraform(struct!.fpFailVerifyCert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_context_alloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.hwContextAllocFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_context_total: {
      value: cdktf.numberToHclTerraform(struct!.hwContextTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_context_usage: {
      value: cdktf.numberToHclTerraform(struct!.hwContextUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_ring_full: {
      value: cdktf.numberToHclTerraform(struct!.hwRingFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_ocsp_stapling_response: {
      value: cdktf.numberToHclTerraform(struct!.invalidOcspStaplingResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_ssl_contexts: {
      value: cdktf.numberToHclTerraform(struct!.maxSslContexts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    non_ssl_bypass_connections: {
      value: cdktf.numberToHclTerraform(struct!.nonSslBypassConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    record_too_big: {
      value: cdktf.numberToHclTerraform(struct!.recordTooBig),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reset_no_sni_sessions: {
      value: cdktf.numberToHclTerraform(struct!.resetNoSniSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    revoked_ocsp_response: {
      value: cdktf.numberToHclTerraform(struct!.revokedOcspResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_cert_errors: {
      value: cdktf.numberToHclTerraform(struct!.serverCertErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_ssl_fatal_alert: {
      value: cdktf.numberToHclTerraform(struct!.serverSslFatalAlert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_ssl_fin_reset: {
      value: cdktf.numberToHclTerraform(struct!.serverSslFinReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_ssl_internal_error: {
      value: cdktf.numberToHclTerraform(struct!.serverSslInternalError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_ssl_unknown_error: {
      value: cdktf.numberToHclTerraform(struct!.serverSslUnknownError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_handshake_failure: {
      value: cdktf.numberToHclTerraform(struct!.sslHandshakeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_memory_usage: {
      value: cdktf.numberToHclTerraform(struct!.sslMemoryUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_module_type: {
      value: cdktf.stringToHclTerraform(struct!.sslModuleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_modules_count: {
      value: cdktf.numberToHclTerraform(struct!.sslModulesCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_session_fin_reset: {
      value: cdktf.numberToHclTerraform(struct!.sslSessionFinReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_ssl_contexts: {
      value: cdktf.numberToHclTerraform(struct!.staticSslContexts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_failures: {
      value: cdktf.numberToHclTerraform(struct!.tcpFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thales_hsm_status: {
      value: cdktf.stringToHclTerraform(struct!.thalesHsmStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_clientside_connections: {
      value: cdktf.numberToHclTerraform(struct!.totalClientsideConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_clientside_early_data_connections: {
      value: cdktf.numberToHclTerraform(struct!.totalClientsideEarlyDataConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_clientside_failed_early_data_connections: {
      value: cdktf.numberToHclTerraform(struct!.totalClientsideFailedEarlyDataConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_reuse_client_ssl: {
      value: cdktf.numberToHclTerraform(struct!.totalReuseClientSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_reuse_server_ssl: {
      value: cdktf.numberToHclTerraform(struct!.totalReuseServerSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_reuse_session_ticket_client_ssl: {
      value: cdktf.numberToHclTerraform(struct!.totalReuseSessionTicketClientSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_reuse_session_ticket_server_ssl: {
      value: cdktf.numberToHclTerraform(struct!.totalReuseSessionTicketServerSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_serverside_connections: {
      value: cdktf.numberToHclTerraform(struct!.totalServersideConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_serverside_early_data_connections: {
      value: cdktf.numberToHclTerraform(struct!.totalServersideEarlyDataConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_serverside_failed_early_data_connections: {
      value: cdktf.numberToHclTerraform(struct!.totalServersideFailedEarlyDataConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsupported_ssl_version: {
      value: cdktf.numberToHclTerraform(struct!.unsupportedSslVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    util_enable_status: {
      value: cdktf.stringToHclTerraform(struct!.utilEnableStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_module_stats: {
      value: cdktf.listMapperHcl(dataThunderSlbSslStatsOperOperSslModuleStatsToHclTerraform, true)(struct!.sslModuleStats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbSslStatsOperOperSslModuleStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSslStatsOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbSslStatsOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypassAdGroupSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassAdGroupSessions = this._bypassAdGroupSessions;
    }
    if (this._bypassCertIssuerSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassCertIssuerSessions = this._bypassCertIssuerSessions;
    }
    if (this._bypassCertSanSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassCertSanSessions = this._bypassCertSanSessions;
    }
    if (this._bypassCertSubjectSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassCertSubjectSessions = this._bypassCertSubjectSessions;
    }
    if (this._bypassClientAuthSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassClientAuthSessions = this._bypassClientAuthSessions;
    }
    if (this._bypassEsniSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassEsniSessions = this._bypassEsniSessions;
    }
    if (this._bypassFailsafeSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassFailsafeSessions = this._bypassFailsafeSessions;
    }
    if (this._bypassNoSniSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassNoSniSessions = this._bypassNoSniSessions;
    }
    if (this._bypassSniSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassSniSessions = this._bypassSniSessions;
    }
    if (this._bypassUsenameSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassUsenameSessions = this._bypassUsenameSessions;
    }
    if (this._caVerificationFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.caVerificationFailures = this._caVerificationFailures;
    }
    if (this._certificateSigningFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateSigningFailures = this._certificateSigningFailures;
    }
    if (this._certificateVerificationFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateVerificationFailures = this._certificateVerificationFailures;
    }
    if (this._clientCertAuthFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertAuthFail = this._clientCertAuthFail;
    }
    if (this._clientSslFatalAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSslFatalAlert = this._clientSslFatalAlert;
    }
    if (this._clientSslFinReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSslFinReset = this._clientSslFinReset;
    }
    if (this._clientSslInternalError !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSslInternalError = this._clientSslInternalError;
    }
    if (this._clientSslUnknownError !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSslUnknownError = this._clientSslUnknownError;
    }
    if (this._clientsslContextMallocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientsslContextMallocFail = this._clientsslContextMallocFail;
    }
    if (this._configModuleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.configModuleType = this._configModuleType;
    }
    if (this._cryptioOperations !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptioOperations = this._cryptioOperations;
    }
    if (this._currSslContexts !== undefined) {
      hasAnyValues = true;
      internalValueResult.currSslContexts = this._currSslContexts;
    }
    if (this._currentClientsideConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentClientsideConnections = this._currentClientsideConnections;
    }
    if (this._currentServersideConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentServersideConnections = this._currentServersideConnections;
    }
    if (this._dropEsniSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropEsniSessions = this._dropEsniSessions;
    }
    if (this._dynamicSslContexts !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicSslContexts = this._dynamicSslContexts;
    }
    if (this._failedCrypto !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedCrypto = this._failedCrypto;
    }
    if (this._failedHandshakes !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedHandshakes = this._failedHandshakes;
    }
    if (this._fpFailAflex !== undefined) {
      hasAnyValues = true;
      internalValueResult.fpFailAflex = this._fpFailAflex;
    }
    if (this._fpFailHandshake !== undefined) {
      hasAnyValues = true;
      internalValueResult.fpFailHandshake = this._fpFailHandshake;
    }
    if (this._fpFailTcpError !== undefined) {
      hasAnyValues = true;
      internalValueResult.fpFailTcpError = this._fpFailTcpError;
    }
    if (this._fpFailVerifyCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.fpFailVerifyCert = this._fpFailVerifyCert;
    }
    if (this._hwContextAllocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwContextAllocFail = this._hwContextAllocFail;
    }
    if (this._hwContextTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwContextTotal = this._hwContextTotal;
    }
    if (this._hwContextUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwContextUsage = this._hwContextUsage;
    }
    if (this._hwRingFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwRingFull = this._hwRingFull;
    }
    if (this._invalidOcspStaplingResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidOcspStaplingResponse = this._invalidOcspStaplingResponse;
    }
    if (this._maxSslContexts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSslContexts = this._maxSslContexts;
    }
    if (this._nonSslBypassConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonSslBypassConnections = this._nonSslBypassConnections;
    }
    if (this._recordTooBig !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordTooBig = this._recordTooBig;
    }
    if (this._resetNoSniSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetNoSniSessions = this._resetNoSniSessions;
    }
    if (this._revokedOcspResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.revokedOcspResponse = this._revokedOcspResponse;
    }
    if (this._serverCertErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertErrors = this._serverCertErrors;
    }
    if (this._serverSslFatalAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSslFatalAlert = this._serverSslFatalAlert;
    }
    if (this._serverSslFinReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSslFinReset = this._serverSslFinReset;
    }
    if (this._serverSslInternalError !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSslInternalError = this._serverSslInternalError;
    }
    if (this._serverSslUnknownError !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSslUnknownError = this._serverSslUnknownError;
    }
    if (this._sslHandshakeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslHandshakeFailure = this._sslHandshakeFailure;
    }
    if (this._sslMemoryUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMemoryUsage = this._sslMemoryUsage;
    }
    if (this._sslModuleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslModuleType = this._sslModuleType;
    }
    if (this._sslModulesCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslModulesCount = this._sslModulesCount;
    }
    if (this._sslSessionFinReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSessionFinReset = this._sslSessionFinReset;
    }
    if (this._staticSslContexts !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticSslContexts = this._staticSslContexts;
    }
    if (this._tcpFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFailures = this._tcpFailures;
    }
    if (this._thalesHsmStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.thalesHsmStatus = this._thalesHsmStatus;
    }
    if (this._totalClientsideConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalClientsideConnections = this._totalClientsideConnections;
    }
    if (this._totalClientsideEarlyDataConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalClientsideEarlyDataConnections = this._totalClientsideEarlyDataConnections;
    }
    if (this._totalClientsideFailedEarlyDataConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalClientsideFailedEarlyDataConnections = this._totalClientsideFailedEarlyDataConnections;
    }
    if (this._totalReuseClientSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalReuseClientSsl = this._totalReuseClientSsl;
    }
    if (this._totalReuseServerSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalReuseServerSsl = this._totalReuseServerSsl;
    }
    if (this._totalReuseSessionTicketClientSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalReuseSessionTicketClientSsl = this._totalReuseSessionTicketClientSsl;
    }
    if (this._totalReuseSessionTicketServerSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalReuseSessionTicketServerSsl = this._totalReuseSessionTicketServerSsl;
    }
    if (this._totalServersideConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalServersideConnections = this._totalServersideConnections;
    }
    if (this._totalServersideEarlyDataConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalServersideEarlyDataConnections = this._totalServersideEarlyDataConnections;
    }
    if (this._totalServersideFailedEarlyDataConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalServersideFailedEarlyDataConnections = this._totalServersideFailedEarlyDataConnections;
    }
    if (this._unsupportedSslVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedSslVersion = this._unsupportedSslVersion;
    }
    if (this._utilEnableStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.utilEnableStatus = this._utilEnableStatus;
    }
    if (this._sslModuleStats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslModuleStats = this._sslModuleStats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSslStatsOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bypassAdGroupSessions = undefined;
      this._bypassCertIssuerSessions = undefined;
      this._bypassCertSanSessions = undefined;
      this._bypassCertSubjectSessions = undefined;
      this._bypassClientAuthSessions = undefined;
      this._bypassEsniSessions = undefined;
      this._bypassFailsafeSessions = undefined;
      this._bypassNoSniSessions = undefined;
      this._bypassSniSessions = undefined;
      this._bypassUsenameSessions = undefined;
      this._caVerificationFailures = undefined;
      this._certificateSigningFailures = undefined;
      this._certificateVerificationFailures = undefined;
      this._clientCertAuthFail = undefined;
      this._clientSslFatalAlert = undefined;
      this._clientSslFinReset = undefined;
      this._clientSslInternalError = undefined;
      this._clientSslUnknownError = undefined;
      this._clientsslContextMallocFail = undefined;
      this._configModuleType = undefined;
      this._cryptioOperations = undefined;
      this._currSslContexts = undefined;
      this._currentClientsideConnections = undefined;
      this._currentServersideConnections = undefined;
      this._dropEsniSessions = undefined;
      this._dynamicSslContexts = undefined;
      this._failedCrypto = undefined;
      this._failedHandshakes = undefined;
      this._fpFailAflex = undefined;
      this._fpFailHandshake = undefined;
      this._fpFailTcpError = undefined;
      this._fpFailVerifyCert = undefined;
      this._hwContextAllocFail = undefined;
      this._hwContextTotal = undefined;
      this._hwContextUsage = undefined;
      this._hwRingFull = undefined;
      this._invalidOcspStaplingResponse = undefined;
      this._maxSslContexts = undefined;
      this._nonSslBypassConnections = undefined;
      this._recordTooBig = undefined;
      this._resetNoSniSessions = undefined;
      this._revokedOcspResponse = undefined;
      this._serverCertErrors = undefined;
      this._serverSslFatalAlert = undefined;
      this._serverSslFinReset = undefined;
      this._serverSslInternalError = undefined;
      this._serverSslUnknownError = undefined;
      this._sslHandshakeFailure = undefined;
      this._sslMemoryUsage = undefined;
      this._sslModuleType = undefined;
      this._sslModulesCount = undefined;
      this._sslSessionFinReset = undefined;
      this._staticSslContexts = undefined;
      this._tcpFailures = undefined;
      this._thalesHsmStatus = undefined;
      this._totalClientsideConnections = undefined;
      this._totalClientsideEarlyDataConnections = undefined;
      this._totalClientsideFailedEarlyDataConnections = undefined;
      this._totalReuseClientSsl = undefined;
      this._totalReuseServerSsl = undefined;
      this._totalReuseSessionTicketClientSsl = undefined;
      this._totalReuseSessionTicketServerSsl = undefined;
      this._totalServersideConnections = undefined;
      this._totalServersideEarlyDataConnections = undefined;
      this._totalServersideFailedEarlyDataConnections = undefined;
      this._unsupportedSslVersion = undefined;
      this._utilEnableStatus = undefined;
      this._sslModuleStats.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bypassAdGroupSessions = value.bypassAdGroupSessions;
      this._bypassCertIssuerSessions = value.bypassCertIssuerSessions;
      this._bypassCertSanSessions = value.bypassCertSanSessions;
      this._bypassCertSubjectSessions = value.bypassCertSubjectSessions;
      this._bypassClientAuthSessions = value.bypassClientAuthSessions;
      this._bypassEsniSessions = value.bypassEsniSessions;
      this._bypassFailsafeSessions = value.bypassFailsafeSessions;
      this._bypassNoSniSessions = value.bypassNoSniSessions;
      this._bypassSniSessions = value.bypassSniSessions;
      this._bypassUsenameSessions = value.bypassUsenameSessions;
      this._caVerificationFailures = value.caVerificationFailures;
      this._certificateSigningFailures = value.certificateSigningFailures;
      this._certificateVerificationFailures = value.certificateVerificationFailures;
      this._clientCertAuthFail = value.clientCertAuthFail;
      this._clientSslFatalAlert = value.clientSslFatalAlert;
      this._clientSslFinReset = value.clientSslFinReset;
      this._clientSslInternalError = value.clientSslInternalError;
      this._clientSslUnknownError = value.clientSslUnknownError;
      this._clientsslContextMallocFail = value.clientsslContextMallocFail;
      this._configModuleType = value.configModuleType;
      this._cryptioOperations = value.cryptioOperations;
      this._currSslContexts = value.currSslContexts;
      this._currentClientsideConnections = value.currentClientsideConnections;
      this._currentServersideConnections = value.currentServersideConnections;
      this._dropEsniSessions = value.dropEsniSessions;
      this._dynamicSslContexts = value.dynamicSslContexts;
      this._failedCrypto = value.failedCrypto;
      this._failedHandshakes = value.failedHandshakes;
      this._fpFailAflex = value.fpFailAflex;
      this._fpFailHandshake = value.fpFailHandshake;
      this._fpFailTcpError = value.fpFailTcpError;
      this._fpFailVerifyCert = value.fpFailVerifyCert;
      this._hwContextAllocFail = value.hwContextAllocFail;
      this._hwContextTotal = value.hwContextTotal;
      this._hwContextUsage = value.hwContextUsage;
      this._hwRingFull = value.hwRingFull;
      this._invalidOcspStaplingResponse = value.invalidOcspStaplingResponse;
      this._maxSslContexts = value.maxSslContexts;
      this._nonSslBypassConnections = value.nonSslBypassConnections;
      this._recordTooBig = value.recordTooBig;
      this._resetNoSniSessions = value.resetNoSniSessions;
      this._revokedOcspResponse = value.revokedOcspResponse;
      this._serverCertErrors = value.serverCertErrors;
      this._serverSslFatalAlert = value.serverSslFatalAlert;
      this._serverSslFinReset = value.serverSslFinReset;
      this._serverSslInternalError = value.serverSslInternalError;
      this._serverSslUnknownError = value.serverSslUnknownError;
      this._sslHandshakeFailure = value.sslHandshakeFailure;
      this._sslMemoryUsage = value.sslMemoryUsage;
      this._sslModuleType = value.sslModuleType;
      this._sslModulesCount = value.sslModulesCount;
      this._sslSessionFinReset = value.sslSessionFinReset;
      this._staticSslContexts = value.staticSslContexts;
      this._tcpFailures = value.tcpFailures;
      this._thalesHsmStatus = value.thalesHsmStatus;
      this._totalClientsideConnections = value.totalClientsideConnections;
      this._totalClientsideEarlyDataConnections = value.totalClientsideEarlyDataConnections;
      this._totalClientsideFailedEarlyDataConnections = value.totalClientsideFailedEarlyDataConnections;
      this._totalReuseClientSsl = value.totalReuseClientSsl;
      this._totalReuseServerSsl = value.totalReuseServerSsl;
      this._totalReuseSessionTicketClientSsl = value.totalReuseSessionTicketClientSsl;
      this._totalReuseSessionTicketServerSsl = value.totalReuseSessionTicketServerSsl;
      this._totalServersideConnections = value.totalServersideConnections;
      this._totalServersideEarlyDataConnections = value.totalServersideEarlyDataConnections;
      this._totalServersideFailedEarlyDataConnections = value.totalServersideFailedEarlyDataConnections;
      this._unsupportedSslVersion = value.unsupportedSslVersion;
      this._utilEnableStatus = value.utilEnableStatus;
      this._sslModuleStats.internalValue = value.sslModuleStats;
    }
  }

  // bypass_ad_group_sessions - computed: false, optional: true, required: false
  private _bypassAdGroupSessions?: number; 
  public get bypassAdGroupSessions() {
    return this.getNumberAttribute('bypass_ad_group_sessions');
  }
  public set bypassAdGroupSessions(value: number) {
    this._bypassAdGroupSessions = value;
  }
  public resetBypassAdGroupSessions() {
    this._bypassAdGroupSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassAdGroupSessionsInput() {
    return this._bypassAdGroupSessions;
  }

  // bypass_cert_issuer_sessions - computed: false, optional: true, required: false
  private _bypassCertIssuerSessions?: number; 
  public get bypassCertIssuerSessions() {
    return this.getNumberAttribute('bypass_cert_issuer_sessions');
  }
  public set bypassCertIssuerSessions(value: number) {
    this._bypassCertIssuerSessions = value;
  }
  public resetBypassCertIssuerSessions() {
    this._bypassCertIssuerSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassCertIssuerSessionsInput() {
    return this._bypassCertIssuerSessions;
  }

  // bypass_cert_san_sessions - computed: false, optional: true, required: false
  private _bypassCertSanSessions?: number; 
  public get bypassCertSanSessions() {
    return this.getNumberAttribute('bypass_cert_san_sessions');
  }
  public set bypassCertSanSessions(value: number) {
    this._bypassCertSanSessions = value;
  }
  public resetBypassCertSanSessions() {
    this._bypassCertSanSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassCertSanSessionsInput() {
    return this._bypassCertSanSessions;
  }

  // bypass_cert_subject_sessions - computed: false, optional: true, required: false
  private _bypassCertSubjectSessions?: number; 
  public get bypassCertSubjectSessions() {
    return this.getNumberAttribute('bypass_cert_subject_sessions');
  }
  public set bypassCertSubjectSessions(value: number) {
    this._bypassCertSubjectSessions = value;
  }
  public resetBypassCertSubjectSessions() {
    this._bypassCertSubjectSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassCertSubjectSessionsInput() {
    return this._bypassCertSubjectSessions;
  }

  // bypass_client_auth_sessions - computed: false, optional: true, required: false
  private _bypassClientAuthSessions?: number; 
  public get bypassClientAuthSessions() {
    return this.getNumberAttribute('bypass_client_auth_sessions');
  }
  public set bypassClientAuthSessions(value: number) {
    this._bypassClientAuthSessions = value;
  }
  public resetBypassClientAuthSessions() {
    this._bypassClientAuthSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassClientAuthSessionsInput() {
    return this._bypassClientAuthSessions;
  }

  // bypass_esni_sessions - computed: false, optional: true, required: false
  private _bypassEsniSessions?: number; 
  public get bypassEsniSessions() {
    return this.getNumberAttribute('bypass_esni_sessions');
  }
  public set bypassEsniSessions(value: number) {
    this._bypassEsniSessions = value;
  }
  public resetBypassEsniSessions() {
    this._bypassEsniSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassEsniSessionsInput() {
    return this._bypassEsniSessions;
  }

  // bypass_failsafe_sessions - computed: false, optional: true, required: false
  private _bypassFailsafeSessions?: number; 
  public get bypassFailsafeSessions() {
    return this.getNumberAttribute('bypass_failsafe_sessions');
  }
  public set bypassFailsafeSessions(value: number) {
    this._bypassFailsafeSessions = value;
  }
  public resetBypassFailsafeSessions() {
    this._bypassFailsafeSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassFailsafeSessionsInput() {
    return this._bypassFailsafeSessions;
  }

  // bypass_no_sni_sessions - computed: false, optional: true, required: false
  private _bypassNoSniSessions?: number; 
  public get bypassNoSniSessions() {
    return this.getNumberAttribute('bypass_no_sni_sessions');
  }
  public set bypassNoSniSessions(value: number) {
    this._bypassNoSniSessions = value;
  }
  public resetBypassNoSniSessions() {
    this._bypassNoSniSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassNoSniSessionsInput() {
    return this._bypassNoSniSessions;
  }

  // bypass_sni_sessions - computed: false, optional: true, required: false
  private _bypassSniSessions?: number; 
  public get bypassSniSessions() {
    return this.getNumberAttribute('bypass_sni_sessions');
  }
  public set bypassSniSessions(value: number) {
    this._bypassSniSessions = value;
  }
  public resetBypassSniSessions() {
    this._bypassSniSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassSniSessionsInput() {
    return this._bypassSniSessions;
  }

  // bypass_usename_sessions - computed: false, optional: true, required: false
  private _bypassUsenameSessions?: number; 
  public get bypassUsenameSessions() {
    return this.getNumberAttribute('bypass_usename_sessions');
  }
  public set bypassUsenameSessions(value: number) {
    this._bypassUsenameSessions = value;
  }
  public resetBypassUsenameSessions() {
    this._bypassUsenameSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassUsenameSessionsInput() {
    return this._bypassUsenameSessions;
  }

  // ca_verification_failures - computed: false, optional: true, required: false
  private _caVerificationFailures?: number; 
  public get caVerificationFailures() {
    return this.getNumberAttribute('ca_verification_failures');
  }
  public set caVerificationFailures(value: number) {
    this._caVerificationFailures = value;
  }
  public resetCaVerificationFailures() {
    this._caVerificationFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caVerificationFailuresInput() {
    return this._caVerificationFailures;
  }

  // certificate_signing_failures - computed: false, optional: true, required: false
  private _certificateSigningFailures?: number; 
  public get certificateSigningFailures() {
    return this.getNumberAttribute('certificate_signing_failures');
  }
  public set certificateSigningFailures(value: number) {
    this._certificateSigningFailures = value;
  }
  public resetCertificateSigningFailures() {
    this._certificateSigningFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSigningFailuresInput() {
    return this._certificateSigningFailures;
  }

  // certificate_verification_failures - computed: false, optional: true, required: false
  private _certificateVerificationFailures?: number; 
  public get certificateVerificationFailures() {
    return this.getNumberAttribute('certificate_verification_failures');
  }
  public set certificateVerificationFailures(value: number) {
    this._certificateVerificationFailures = value;
  }
  public resetCertificateVerificationFailures() {
    this._certificateVerificationFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateVerificationFailuresInput() {
    return this._certificateVerificationFailures;
  }

  // client_cert_auth_fail - computed: false, optional: true, required: false
  private _clientCertAuthFail?: number; 
  public get clientCertAuthFail() {
    return this.getNumberAttribute('client_cert_auth_fail');
  }
  public set clientCertAuthFail(value: number) {
    this._clientCertAuthFail = value;
  }
  public resetClientCertAuthFail() {
    this._clientCertAuthFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertAuthFailInput() {
    return this._clientCertAuthFail;
  }

  // client_ssl_fatal_alert - computed: false, optional: true, required: false
  private _clientSslFatalAlert?: number; 
  public get clientSslFatalAlert() {
    return this.getNumberAttribute('client_ssl_fatal_alert');
  }
  public set clientSslFatalAlert(value: number) {
    this._clientSslFatalAlert = value;
  }
  public resetClientSslFatalAlert() {
    this._clientSslFatalAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSslFatalAlertInput() {
    return this._clientSslFatalAlert;
  }

  // client_ssl_fin_reset - computed: false, optional: true, required: false
  private _clientSslFinReset?: number; 
  public get clientSslFinReset() {
    return this.getNumberAttribute('client_ssl_fin_reset');
  }
  public set clientSslFinReset(value: number) {
    this._clientSslFinReset = value;
  }
  public resetClientSslFinReset() {
    this._clientSslFinReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSslFinResetInput() {
    return this._clientSslFinReset;
  }

  // client_ssl_internal_error - computed: false, optional: true, required: false
  private _clientSslInternalError?: number; 
  public get clientSslInternalError() {
    return this.getNumberAttribute('client_ssl_internal_error');
  }
  public set clientSslInternalError(value: number) {
    this._clientSslInternalError = value;
  }
  public resetClientSslInternalError() {
    this._clientSslInternalError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSslInternalErrorInput() {
    return this._clientSslInternalError;
  }

  // client_ssl_unknown_error - computed: false, optional: true, required: false
  private _clientSslUnknownError?: number; 
  public get clientSslUnknownError() {
    return this.getNumberAttribute('client_ssl_unknown_error');
  }
  public set clientSslUnknownError(value: number) {
    this._clientSslUnknownError = value;
  }
  public resetClientSslUnknownError() {
    this._clientSslUnknownError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSslUnknownErrorInput() {
    return this._clientSslUnknownError;
  }

  // clientssl_context_malloc_fail - computed: false, optional: true, required: false
  private _clientsslContextMallocFail?: number; 
  public get clientsslContextMallocFail() {
    return this.getNumberAttribute('clientssl_context_malloc_fail');
  }
  public set clientsslContextMallocFail(value: number) {
    this._clientsslContextMallocFail = value;
  }
  public resetClientsslContextMallocFail() {
    this._clientsslContextMallocFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsslContextMallocFailInput() {
    return this._clientsslContextMallocFail;
  }

  // config_module_type - computed: false, optional: true, required: false
  private _configModuleType?: string; 
  public get configModuleType() {
    return this.getStringAttribute('config_module_type');
  }
  public set configModuleType(value: string) {
    this._configModuleType = value;
  }
  public resetConfigModuleType() {
    this._configModuleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configModuleTypeInput() {
    return this._configModuleType;
  }

  // cryptio_operations - computed: false, optional: true, required: false
  private _cryptioOperations?: number; 
  public get cryptioOperations() {
    return this.getNumberAttribute('cryptio_operations');
  }
  public set cryptioOperations(value: number) {
    this._cryptioOperations = value;
  }
  public resetCryptioOperations() {
    this._cryptioOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptioOperationsInput() {
    return this._cryptioOperations;
  }

  // curr_ssl_contexts - computed: false, optional: true, required: false
  private _currSslContexts?: number; 
  public get currSslContexts() {
    return this.getNumberAttribute('curr_ssl_contexts');
  }
  public set currSslContexts(value: number) {
    this._currSslContexts = value;
  }
  public resetCurrSslContexts() {
    this._currSslContexts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currSslContextsInput() {
    return this._currSslContexts;
  }

  // current_clientside_connections - computed: false, optional: true, required: false
  private _currentClientsideConnections?: number; 
  public get currentClientsideConnections() {
    return this.getNumberAttribute('current_clientside_connections');
  }
  public set currentClientsideConnections(value: number) {
    this._currentClientsideConnections = value;
  }
  public resetCurrentClientsideConnections() {
    this._currentClientsideConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentClientsideConnectionsInput() {
    return this._currentClientsideConnections;
  }

  // current_serverside_connections - computed: false, optional: true, required: false
  private _currentServersideConnections?: number; 
  public get currentServersideConnections() {
    return this.getNumberAttribute('current_serverside_connections');
  }
  public set currentServersideConnections(value: number) {
    this._currentServersideConnections = value;
  }
  public resetCurrentServersideConnections() {
    this._currentServersideConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentServersideConnectionsInput() {
    return this._currentServersideConnections;
  }

  // drop_esni_sessions - computed: false, optional: true, required: false
  private _dropEsniSessions?: number; 
  public get dropEsniSessions() {
    return this.getNumberAttribute('drop_esni_sessions');
  }
  public set dropEsniSessions(value: number) {
    this._dropEsniSessions = value;
  }
  public resetDropEsniSessions() {
    this._dropEsniSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropEsniSessionsInput() {
    return this._dropEsniSessions;
  }

  // dynamic_ssl_contexts - computed: false, optional: true, required: false
  private _dynamicSslContexts?: number; 
  public get dynamicSslContexts() {
    return this.getNumberAttribute('dynamic_ssl_contexts');
  }
  public set dynamicSslContexts(value: number) {
    this._dynamicSslContexts = value;
  }
  public resetDynamicSslContexts() {
    this._dynamicSslContexts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSslContextsInput() {
    return this._dynamicSslContexts;
  }

  // failed_crypto - computed: false, optional: true, required: false
  private _failedCrypto?: number; 
  public get failedCrypto() {
    return this.getNumberAttribute('failed_crypto');
  }
  public set failedCrypto(value: number) {
    this._failedCrypto = value;
  }
  public resetFailedCrypto() {
    this._failedCrypto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedCryptoInput() {
    return this._failedCrypto;
  }

  // failed_handshakes - computed: false, optional: true, required: false
  private _failedHandshakes?: number; 
  public get failedHandshakes() {
    return this.getNumberAttribute('failed_handshakes');
  }
  public set failedHandshakes(value: number) {
    this._failedHandshakes = value;
  }
  public resetFailedHandshakes() {
    this._failedHandshakes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedHandshakesInput() {
    return this._failedHandshakes;
  }

  // fp_fail_aflex - computed: false, optional: true, required: false
  private _fpFailAflex?: number; 
  public get fpFailAflex() {
    return this.getNumberAttribute('fp_fail_aflex');
  }
  public set fpFailAflex(value: number) {
    this._fpFailAflex = value;
  }
  public resetFpFailAflex() {
    this._fpFailAflex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpFailAflexInput() {
    return this._fpFailAflex;
  }

  // fp_fail_handshake - computed: false, optional: true, required: false
  private _fpFailHandshake?: number; 
  public get fpFailHandshake() {
    return this.getNumberAttribute('fp_fail_handshake');
  }
  public set fpFailHandshake(value: number) {
    this._fpFailHandshake = value;
  }
  public resetFpFailHandshake() {
    this._fpFailHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpFailHandshakeInput() {
    return this._fpFailHandshake;
  }

  // fp_fail_tcp_error - computed: false, optional: true, required: false
  private _fpFailTcpError?: number; 
  public get fpFailTcpError() {
    return this.getNumberAttribute('fp_fail_tcp_error');
  }
  public set fpFailTcpError(value: number) {
    this._fpFailTcpError = value;
  }
  public resetFpFailTcpError() {
    this._fpFailTcpError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpFailTcpErrorInput() {
    return this._fpFailTcpError;
  }

  // fp_fail_verify_cert - computed: false, optional: true, required: false
  private _fpFailVerifyCert?: number; 
  public get fpFailVerifyCert() {
    return this.getNumberAttribute('fp_fail_verify_cert');
  }
  public set fpFailVerifyCert(value: number) {
    this._fpFailVerifyCert = value;
  }
  public resetFpFailVerifyCert() {
    this._fpFailVerifyCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpFailVerifyCertInput() {
    return this._fpFailVerifyCert;
  }

  // hw_context_alloc_fail - computed: false, optional: true, required: false
  private _hwContextAllocFail?: number; 
  public get hwContextAllocFail() {
    return this.getNumberAttribute('hw_context_alloc_fail');
  }
  public set hwContextAllocFail(value: number) {
    this._hwContextAllocFail = value;
  }
  public resetHwContextAllocFail() {
    this._hwContextAllocFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwContextAllocFailInput() {
    return this._hwContextAllocFail;
  }

  // hw_context_total - computed: false, optional: true, required: false
  private _hwContextTotal?: number; 
  public get hwContextTotal() {
    return this.getNumberAttribute('hw_context_total');
  }
  public set hwContextTotal(value: number) {
    this._hwContextTotal = value;
  }
  public resetHwContextTotal() {
    this._hwContextTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwContextTotalInput() {
    return this._hwContextTotal;
  }

  // hw_context_usage - computed: false, optional: true, required: false
  private _hwContextUsage?: number; 
  public get hwContextUsage() {
    return this.getNumberAttribute('hw_context_usage');
  }
  public set hwContextUsage(value: number) {
    this._hwContextUsage = value;
  }
  public resetHwContextUsage() {
    this._hwContextUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwContextUsageInput() {
    return this._hwContextUsage;
  }

  // hw_ring_full - computed: false, optional: true, required: false
  private _hwRingFull?: number; 
  public get hwRingFull() {
    return this.getNumberAttribute('hw_ring_full');
  }
  public set hwRingFull(value: number) {
    this._hwRingFull = value;
  }
  public resetHwRingFull() {
    this._hwRingFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwRingFullInput() {
    return this._hwRingFull;
  }

  // invalid_ocsp_stapling_response - computed: false, optional: true, required: false
  private _invalidOcspStaplingResponse?: number; 
  public get invalidOcspStaplingResponse() {
    return this.getNumberAttribute('invalid_ocsp_stapling_response');
  }
  public set invalidOcspStaplingResponse(value: number) {
    this._invalidOcspStaplingResponse = value;
  }
  public resetInvalidOcspStaplingResponse() {
    this._invalidOcspStaplingResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidOcspStaplingResponseInput() {
    return this._invalidOcspStaplingResponse;
  }

  // max_ssl_contexts - computed: false, optional: true, required: false
  private _maxSslContexts?: number; 
  public get maxSslContexts() {
    return this.getNumberAttribute('max_ssl_contexts');
  }
  public set maxSslContexts(value: number) {
    this._maxSslContexts = value;
  }
  public resetMaxSslContexts() {
    this._maxSslContexts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSslContextsInput() {
    return this._maxSslContexts;
  }

  // non_ssl_bypass_connections - computed: false, optional: true, required: false
  private _nonSslBypassConnections?: number; 
  public get nonSslBypassConnections() {
    return this.getNumberAttribute('non_ssl_bypass_connections');
  }
  public set nonSslBypassConnections(value: number) {
    this._nonSslBypassConnections = value;
  }
  public resetNonSslBypassConnections() {
    this._nonSslBypassConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonSslBypassConnectionsInput() {
    return this._nonSslBypassConnections;
  }

  // record_too_big - computed: false, optional: true, required: false
  private _recordTooBig?: number; 
  public get recordTooBig() {
    return this.getNumberAttribute('record_too_big');
  }
  public set recordTooBig(value: number) {
    this._recordTooBig = value;
  }
  public resetRecordTooBig() {
    this._recordTooBig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTooBigInput() {
    return this._recordTooBig;
  }

  // reset_no_sni_sessions - computed: false, optional: true, required: false
  private _resetNoSniSessions?: number; 
  public get resetNoSniSessions() {
    return this.getNumberAttribute('reset_no_sni_sessions');
  }
  public set resetNoSniSessions(value: number) {
    this._resetNoSniSessions = value;
  }
  public resetResetNoSniSessions() {
    this._resetNoSniSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetNoSniSessionsInput() {
    return this._resetNoSniSessions;
  }

  // revoked_ocsp_response - computed: false, optional: true, required: false
  private _revokedOcspResponse?: number; 
  public get revokedOcspResponse() {
    return this.getNumberAttribute('revoked_ocsp_response');
  }
  public set revokedOcspResponse(value: number) {
    this._revokedOcspResponse = value;
  }
  public resetRevokedOcspResponse() {
    this._revokedOcspResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokedOcspResponseInput() {
    return this._revokedOcspResponse;
  }

  // server_cert_errors - computed: false, optional: true, required: false
  private _serverCertErrors?: number; 
  public get serverCertErrors() {
    return this.getNumberAttribute('server_cert_errors');
  }
  public set serverCertErrors(value: number) {
    this._serverCertErrors = value;
  }
  public resetServerCertErrors() {
    this._serverCertErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertErrorsInput() {
    return this._serverCertErrors;
  }

  // server_ssl_fatal_alert - computed: false, optional: true, required: false
  private _serverSslFatalAlert?: number; 
  public get serverSslFatalAlert() {
    return this.getNumberAttribute('server_ssl_fatal_alert');
  }
  public set serverSslFatalAlert(value: number) {
    this._serverSslFatalAlert = value;
  }
  public resetServerSslFatalAlert() {
    this._serverSslFatalAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSslFatalAlertInput() {
    return this._serverSslFatalAlert;
  }

  // server_ssl_fin_reset - computed: false, optional: true, required: false
  private _serverSslFinReset?: number; 
  public get serverSslFinReset() {
    return this.getNumberAttribute('server_ssl_fin_reset');
  }
  public set serverSslFinReset(value: number) {
    this._serverSslFinReset = value;
  }
  public resetServerSslFinReset() {
    this._serverSslFinReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSslFinResetInput() {
    return this._serverSslFinReset;
  }

  // server_ssl_internal_error - computed: false, optional: true, required: false
  private _serverSslInternalError?: number; 
  public get serverSslInternalError() {
    return this.getNumberAttribute('server_ssl_internal_error');
  }
  public set serverSslInternalError(value: number) {
    this._serverSslInternalError = value;
  }
  public resetServerSslInternalError() {
    this._serverSslInternalError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSslInternalErrorInput() {
    return this._serverSslInternalError;
  }

  // server_ssl_unknown_error - computed: false, optional: true, required: false
  private _serverSslUnknownError?: number; 
  public get serverSslUnknownError() {
    return this.getNumberAttribute('server_ssl_unknown_error');
  }
  public set serverSslUnknownError(value: number) {
    this._serverSslUnknownError = value;
  }
  public resetServerSslUnknownError() {
    this._serverSslUnknownError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSslUnknownErrorInput() {
    return this._serverSslUnknownError;
  }

  // ssl_handshake_failure - computed: false, optional: true, required: false
  private _sslHandshakeFailure?: number; 
  public get sslHandshakeFailure() {
    return this.getNumberAttribute('ssl_handshake_failure');
  }
  public set sslHandshakeFailure(value: number) {
    this._sslHandshakeFailure = value;
  }
  public resetSslHandshakeFailure() {
    this._sslHandshakeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslHandshakeFailureInput() {
    return this._sslHandshakeFailure;
  }

  // ssl_memory_usage - computed: false, optional: true, required: false
  private _sslMemoryUsage?: number; 
  public get sslMemoryUsage() {
    return this.getNumberAttribute('ssl_memory_usage');
  }
  public set sslMemoryUsage(value: number) {
    this._sslMemoryUsage = value;
  }
  public resetSslMemoryUsage() {
    this._sslMemoryUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMemoryUsageInput() {
    return this._sslMemoryUsage;
  }

  // ssl_module_type - computed: false, optional: true, required: false
  private _sslModuleType?: string; 
  public get sslModuleType() {
    return this.getStringAttribute('ssl_module_type');
  }
  public set sslModuleType(value: string) {
    this._sslModuleType = value;
  }
  public resetSslModuleType() {
    this._sslModuleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModuleTypeInput() {
    return this._sslModuleType;
  }

  // ssl_modules_count - computed: false, optional: true, required: false
  private _sslModulesCount?: number; 
  public get sslModulesCount() {
    return this.getNumberAttribute('ssl_modules_count');
  }
  public set sslModulesCount(value: number) {
    this._sslModulesCount = value;
  }
  public resetSslModulesCount() {
    this._sslModulesCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModulesCountInput() {
    return this._sslModulesCount;
  }

  // ssl_session_fin_reset - computed: false, optional: true, required: false
  private _sslSessionFinReset?: number; 
  public get sslSessionFinReset() {
    return this.getNumberAttribute('ssl_session_fin_reset');
  }
  public set sslSessionFinReset(value: number) {
    this._sslSessionFinReset = value;
  }
  public resetSslSessionFinReset() {
    this._sslSessionFinReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSessionFinResetInput() {
    return this._sslSessionFinReset;
  }

  // static_ssl_contexts - computed: false, optional: true, required: false
  private _staticSslContexts?: number; 
  public get staticSslContexts() {
    return this.getNumberAttribute('static_ssl_contexts');
  }
  public set staticSslContexts(value: number) {
    this._staticSslContexts = value;
  }
  public resetStaticSslContexts() {
    this._staticSslContexts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticSslContextsInput() {
    return this._staticSslContexts;
  }

  // tcp_failures - computed: false, optional: true, required: false
  private _tcpFailures?: number; 
  public get tcpFailures() {
    return this.getNumberAttribute('tcp_failures');
  }
  public set tcpFailures(value: number) {
    this._tcpFailures = value;
  }
  public resetTcpFailures() {
    this._tcpFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFailuresInput() {
    return this._tcpFailures;
  }

  // thales_hsm_status - computed: false, optional: true, required: false
  private _thalesHsmStatus?: string; 
  public get thalesHsmStatus() {
    return this.getStringAttribute('thales_hsm_status');
  }
  public set thalesHsmStatus(value: string) {
    this._thalesHsmStatus = value;
  }
  public resetThalesHsmStatus() {
    this._thalesHsmStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thalesHsmStatusInput() {
    return this._thalesHsmStatus;
  }

  // total_clientside_connections - computed: false, optional: true, required: false
  private _totalClientsideConnections?: number; 
  public get totalClientsideConnections() {
    return this.getNumberAttribute('total_clientside_connections');
  }
  public set totalClientsideConnections(value: number) {
    this._totalClientsideConnections = value;
  }
  public resetTotalClientsideConnections() {
    this._totalClientsideConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalClientsideConnectionsInput() {
    return this._totalClientsideConnections;
  }

  // total_clientside_early_data_connections - computed: false, optional: true, required: false
  private _totalClientsideEarlyDataConnections?: number; 
  public get totalClientsideEarlyDataConnections() {
    return this.getNumberAttribute('total_clientside_early_data_connections');
  }
  public set totalClientsideEarlyDataConnections(value: number) {
    this._totalClientsideEarlyDataConnections = value;
  }
  public resetTotalClientsideEarlyDataConnections() {
    this._totalClientsideEarlyDataConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalClientsideEarlyDataConnectionsInput() {
    return this._totalClientsideEarlyDataConnections;
  }

  // total_clientside_failed_early_data_connections - computed: false, optional: true, required: false
  private _totalClientsideFailedEarlyDataConnections?: number; 
  public get totalClientsideFailedEarlyDataConnections() {
    return this.getNumberAttribute('total_clientside_failed_early_data_connections');
  }
  public set totalClientsideFailedEarlyDataConnections(value: number) {
    this._totalClientsideFailedEarlyDataConnections = value;
  }
  public resetTotalClientsideFailedEarlyDataConnections() {
    this._totalClientsideFailedEarlyDataConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalClientsideFailedEarlyDataConnectionsInput() {
    return this._totalClientsideFailedEarlyDataConnections;
  }

  // total_reuse_client_ssl - computed: false, optional: true, required: false
  private _totalReuseClientSsl?: number; 
  public get totalReuseClientSsl() {
    return this.getNumberAttribute('total_reuse_client_ssl');
  }
  public set totalReuseClientSsl(value: number) {
    this._totalReuseClientSsl = value;
  }
  public resetTotalReuseClientSsl() {
    this._totalReuseClientSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalReuseClientSslInput() {
    return this._totalReuseClientSsl;
  }

  // total_reuse_server_ssl - computed: false, optional: true, required: false
  private _totalReuseServerSsl?: number; 
  public get totalReuseServerSsl() {
    return this.getNumberAttribute('total_reuse_server_ssl');
  }
  public set totalReuseServerSsl(value: number) {
    this._totalReuseServerSsl = value;
  }
  public resetTotalReuseServerSsl() {
    this._totalReuseServerSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalReuseServerSslInput() {
    return this._totalReuseServerSsl;
  }

  // total_reuse_session_ticket_client_ssl - computed: false, optional: true, required: false
  private _totalReuseSessionTicketClientSsl?: number; 
  public get totalReuseSessionTicketClientSsl() {
    return this.getNumberAttribute('total_reuse_session_ticket_client_ssl');
  }
  public set totalReuseSessionTicketClientSsl(value: number) {
    this._totalReuseSessionTicketClientSsl = value;
  }
  public resetTotalReuseSessionTicketClientSsl() {
    this._totalReuseSessionTicketClientSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalReuseSessionTicketClientSslInput() {
    return this._totalReuseSessionTicketClientSsl;
  }

  // total_reuse_session_ticket_server_ssl - computed: false, optional: true, required: false
  private _totalReuseSessionTicketServerSsl?: number; 
  public get totalReuseSessionTicketServerSsl() {
    return this.getNumberAttribute('total_reuse_session_ticket_server_ssl');
  }
  public set totalReuseSessionTicketServerSsl(value: number) {
    this._totalReuseSessionTicketServerSsl = value;
  }
  public resetTotalReuseSessionTicketServerSsl() {
    this._totalReuseSessionTicketServerSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalReuseSessionTicketServerSslInput() {
    return this._totalReuseSessionTicketServerSsl;
  }

  // total_serverside_connections - computed: false, optional: true, required: false
  private _totalServersideConnections?: number; 
  public get totalServersideConnections() {
    return this.getNumberAttribute('total_serverside_connections');
  }
  public set totalServersideConnections(value: number) {
    this._totalServersideConnections = value;
  }
  public resetTotalServersideConnections() {
    this._totalServersideConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalServersideConnectionsInput() {
    return this._totalServersideConnections;
  }

  // total_serverside_early_data_connections - computed: false, optional: true, required: false
  private _totalServersideEarlyDataConnections?: number; 
  public get totalServersideEarlyDataConnections() {
    return this.getNumberAttribute('total_serverside_early_data_connections');
  }
  public set totalServersideEarlyDataConnections(value: number) {
    this._totalServersideEarlyDataConnections = value;
  }
  public resetTotalServersideEarlyDataConnections() {
    this._totalServersideEarlyDataConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalServersideEarlyDataConnectionsInput() {
    return this._totalServersideEarlyDataConnections;
  }

  // total_serverside_failed_early_data_connections - computed: false, optional: true, required: false
  private _totalServersideFailedEarlyDataConnections?: number; 
  public get totalServersideFailedEarlyDataConnections() {
    return this.getNumberAttribute('total_serverside_failed_early_data_connections');
  }
  public set totalServersideFailedEarlyDataConnections(value: number) {
    this._totalServersideFailedEarlyDataConnections = value;
  }
  public resetTotalServersideFailedEarlyDataConnections() {
    this._totalServersideFailedEarlyDataConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalServersideFailedEarlyDataConnectionsInput() {
    return this._totalServersideFailedEarlyDataConnections;
  }

  // unsupported_ssl_version - computed: false, optional: true, required: false
  private _unsupportedSslVersion?: number; 
  public get unsupportedSslVersion() {
    return this.getNumberAttribute('unsupported_ssl_version');
  }
  public set unsupportedSslVersion(value: number) {
    this._unsupportedSslVersion = value;
  }
  public resetUnsupportedSslVersion() {
    this._unsupportedSslVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslVersionInput() {
    return this._unsupportedSslVersion;
  }

  // util_enable_status - computed: false, optional: true, required: false
  private _utilEnableStatus?: string; 
  public get utilEnableStatus() {
    return this.getStringAttribute('util_enable_status');
  }
  public set utilEnableStatus(value: string) {
    this._utilEnableStatus = value;
  }
  public resetUtilEnableStatus() {
    this._utilEnableStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utilEnableStatusInput() {
    return this._utilEnableStatus;
  }

  // ssl_module_stats - computed: false, optional: true, required: false
  private _sslModuleStats = new DataThunderSlbSslStatsOperOperSslModuleStatsList(this, "ssl_module_stats", false);
  public get sslModuleStats() {
    return this._sslModuleStats;
  }
  public putSslModuleStats(value: DataThunderSlbSslStatsOperOperSslModuleStats[] | cdktf.IResolvable) {
    this._sslModuleStats.internalValue = value;
  }
  public resetSslModuleStats() {
    this._sslModuleStats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModuleStatsInput() {
    return this._sslModuleStats.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper thunder_slb_ssl_stats_oper}
*/
export class DataThunderSlbSslStatsOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_ssl_stats_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbSslStatsOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbSslStatsOper to import
  * @param importFromId The id of the existing DataThunderSlbSslStatsOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbSslStatsOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_ssl_stats_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_stats_oper thunder_slb_ssl_stats_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbSslStatsOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbSslStatsOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_ssl_stats_oper',
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSlbSslStatsOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbSslStatsOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderSlbSslStatsOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderSlbSslStatsOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbSslStatsOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
