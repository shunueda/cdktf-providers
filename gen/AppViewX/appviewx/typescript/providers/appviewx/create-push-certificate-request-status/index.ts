// https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/create_push_certificate_request_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CreatePushCertificateRequestStatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to include the certificate chain in the download
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/create_push_certificate_request_status#certificate_chain_required CreatePushCertificateRequestStatus#certificate_chain_required}
  */
  readonly certificateChainRequired?: boolean | cdktf.IResolvable;
  /**
  * Common name of the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/create_push_certificate_request_status#certificate_common_name CreatePushCertificateRequestStatus#certificate_common_name}
  */
  readonly certificateCommonName?: string;
  /**
  * Format for the downloaded certificate (e.g., CRT, PFX)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/create_push_certificate_request_status#certificate_download_format CreatePushCertificateRequestStatus#certificate_download_format}
  */
  readonly certificateDownloadFormat?: string;
  /**
  * Path to download the certificate to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/create_push_certificate_request_status#certificate_download_path CreatePushCertificateRequestStatus#certificate_download_path}
  */
  readonly certificateDownloadPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/create_push_certificate_request_status#id CreatePushCertificateRequestStatus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to download the certificate after workflow completion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/create_push_certificate_request_status#is_download_required CreatePushCertificateRequestStatus#is_download_required}
  */
  readonly isDownloadRequired?: boolean | cdktf.IResolvable;
  /**
  * Request ID from a workflow execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/create_push_certificate_request_status#request_id CreatePushCertificateRequestStatus#request_id}
  */
  readonly requestId?: string;
  /**
  * Number of times to retry checking workflow status (default: 10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/create_push_certificate_request_status#retry_count CreatePushCertificateRequestStatus#retry_count}
  */
  readonly retryCount?: number;
  /**
  * Seconds to wait between retry attempts (default: 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/create_push_certificate_request_status#retry_interval CreatePushCertificateRequestStatus#retry_interval}
  */
  readonly retryInterval?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/create_push_certificate_request_status#timeouts CreatePushCertificateRequestStatus#timeouts}
  */
  readonly timeouts?: CreatePushCertificateRequestStatusTimeouts;
}
export interface CreatePushCertificateRequestStatusTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/create_push_certificate_request_status#create CreatePushCertificateRequestStatus#create}
  */
  readonly create?: string;
}

export function createPushCertificateRequestStatusTimeoutsToTerraform(struct?: CreatePushCertificateRequestStatusTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function createPushCertificateRequestStatusTimeoutsToHclTerraform(struct?: CreatePushCertificateRequestStatusTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CreatePushCertificateRequestStatusTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CreatePushCertificateRequestStatusTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CreatePushCertificateRequestStatusTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/create_push_certificate_request_status appviewx_create_push_certificate_request_status}
*/
export class CreatePushCertificateRequestStatus extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "appviewx_create_push_certificate_request_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CreatePushCertificateRequestStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CreatePushCertificateRequestStatus to import
  * @param importFromId The id of the existing CreatePushCertificateRequestStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/create_push_certificate_request_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CreatePushCertificateRequestStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "appviewx_create_push_certificate_request_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/create_push_certificate_request_status appviewx_create_push_certificate_request_status} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CreatePushCertificateRequestStatusConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CreatePushCertificateRequestStatusConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'appviewx_create_push_certificate_request_status',
      terraformGeneratorMetadata: {
        providerName: 'appviewx',
        providerVersion: '1.0.9',
        providerVersionConstraint: '1.0.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateChainRequired = config.certificateChainRequired;
    this._certificateCommonName = config.certificateCommonName;
    this._certificateDownloadFormat = config.certificateDownloadFormat;
    this._certificateDownloadPath = config.certificateDownloadPath;
    this._id = config.id;
    this._isDownloadRequired = config.isDownloadRequired;
    this._requestId = config.requestId;
    this._retryCount = config.retryCount;
    this._retryInterval = config.retryInterval;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_authority - computed: true, optional: false, required: false
  public get certificateAuthority() {
    return this.getStringAttribute('certificate_authority');
  }

  // certificate_chain_required - computed: false, optional: true, required: false
  private _certificateChainRequired?: boolean | cdktf.IResolvable; 
  public get certificateChainRequired() {
    return this.getBooleanAttribute('certificate_chain_required');
  }
  public set certificateChainRequired(value: boolean | cdktf.IResolvable) {
    this._certificateChainRequired = value;
  }
  public resetCertificateChainRequired() {
    this._certificateChainRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainRequiredInput() {
    return this._certificateChainRequired;
  }

  // certificate_common_name - computed: false, optional: true, required: false
  private _certificateCommonName?: string; 
  public get certificateCommonName() {
    return this.getStringAttribute('certificate_common_name');
  }
  public set certificateCommonName(value: string) {
    this._certificateCommonName = value;
  }
  public resetCertificateCommonName() {
    this._certificateCommonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateCommonNameInput() {
    return this._certificateCommonName;
  }

  // certificate_download_format - computed: false, optional: true, required: false
  private _certificateDownloadFormat?: string; 
  public get certificateDownloadFormat() {
    return this.getStringAttribute('certificate_download_format');
  }
  public set certificateDownloadFormat(value: string) {
    this._certificateDownloadFormat = value;
  }
  public resetCertificateDownloadFormat() {
    this._certificateDownloadFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateDownloadFormatInput() {
    return this._certificateDownloadFormat;
  }

  // certificate_download_path - computed: false, optional: true, required: false
  private _certificateDownloadPath?: string; 
  public get certificateDownloadPath() {
    return this.getStringAttribute('certificate_download_path');
  }
  public set certificateDownloadPath(value: string) {
    this._certificateDownloadPath = value;
  }
  public resetCertificateDownloadPath() {
    this._certificateDownloadPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateDownloadPathInput() {
    return this._certificateDownloadPath;
  }

  // certificate_expiry_status - computed: true, optional: false, required: false
  public get certificateExpiryStatus() {
    return this.getStringAttribute('certificate_expiry_status');
  }

  // certificate_resource_id - computed: true, optional: false, required: false
  public get certificateResourceId() {
    return this.getStringAttribute('certificate_resource_id');
  }

  // certificate_serial_number - computed: true, optional: false, required: false
  public get certificateSerialNumber() {
    return this.getStringAttribute('certificate_serial_number');
  }

  // certificate_status - computed: true, optional: false, required: false
  public get certificateStatus() {
    return this.getStringAttribute('certificate_status');
  }

  // certificate_uuid - computed: true, optional: false, required: false
  public get certificateUuid() {
    return this.getStringAttribute('certificate_uuid');
  }

  // completed - computed: true, optional: false, required: false
  public get completed() {
    return this.getBooleanAttribute('completed');
  }

  // completion_time - computed: true, optional: false, required: false
  public get completionTime() {
    return this.getStringAttribute('completion_time');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // created_time_epoch - computed: true, optional: false, required: false
  public get createdTimeEpoch() {
    return this.getNumberAttribute('created_time_epoch');
  }

  // downloaded_certificate_path - computed: true, optional: false, required: false
  public get downloadedCertificatePath() {
    return this.getStringAttribute('downloaded_certificate_path');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // expires_at_epoch - computed: true, optional: false, required: false
  public get expiresAtEpoch() {
    return this.getNumberAttribute('expires_at_epoch');
  }

  // extended_key_usage - computed: true, optional: false, required: false
  public get extendedKeyUsage() {
    return this.getStringAttribute('extended_key_usage');
  }

  // failed_task_logs - computed: true, optional: false, required: false
  public get failedTaskLogs() {
    return this.getStringAttribute('failed_task_logs');
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
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

  // is_download_required - computed: false, optional: true, required: false
  private _isDownloadRequired?: boolean | cdktf.IResolvable; 
  public get isDownloadRequired() {
    return this.getBooleanAttribute('is_download_required');
  }
  public set isDownloadRequired(value: boolean | cdktf.IResolvable) {
    this._isDownloadRequired = value;
  }
  public resetIsDownloadRequired() {
    this._isDownloadRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDownloadRequiredInput() {
    return this._isDownloadRequired;
  }

  // issued_at - computed: true, optional: false, required: false
  public get issuedAt() {
    return this.getStringAttribute('issued_at');
  }

  // issued_at_epoch - computed: true, optional: false, required: false
  public get issuedAtEpoch() {
    return this.getNumberAttribute('issued_at_epoch');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // key_algorithm - computed: true, optional: false, required: false
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }

  // key_usage - computed: true, optional: false, required: false
  public get keyUsage() {
    return this.getStringAttribute('key_usage');
  }

  // key_vault_name - computed: true, optional: false, required: false
  public get keyVaultName() {
    return this.getStringAttribute('key_vault_name');
  }

  // key_vault_secret_name - computed: true, optional: false, required: false
  public get keyVaultSecretName() {
    return this.getStringAttribute('key_vault_secret_name');
  }

  // last_polled_time - computed: true, optional: false, required: false
  public get lastPolledTime() {
    return this.getStringAttribute('last_polled_time');
  }

  // log_data - computed: true, optional: false, required: false
  public get logData() {
    return this.getStringAttribute('log_data');
  }

  // request_id - computed: false, optional: true, required: false
  private _requestId?: string; 
  public get requestId() {
    return this.getStringAttribute('request_id');
  }
  public set requestId(value: string) {
    this._requestId = value;
  }
  public resetRequestId() {
    this._requestId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestIdInput() {
    return this._requestId;
  }

  // response_message - computed: true, optional: false, required: false
  public get responseMessage() {
    return this.getStringAttribute('response_message');
  }

  // retry_count - computed: false, optional: true, required: false
  private _retryCount?: number; 
  public get retryCount() {
    return this.getNumberAttribute('retry_count');
  }
  public set retryCount(value: number) {
    this._retryCount = value;
  }
  public resetRetryCount() {
    this._retryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryCountInput() {
    return this._retryCount;
  }

  // retry_interval - computed: false, optional: true, required: false
  private _retryInterval?: number; 
  public get retryInterval() {
    return this.getNumberAttribute('retry_interval');
  }
  public set retryInterval(value: number) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }

  // signature_algorithm - computed: true, optional: false, required: false
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }

  // subject_alternative_names - computed: true, optional: false, required: false
  public get subjectAlternativeNames() {
    return this.getListAttribute('subject_alternative_names');
  }

  // success - computed: true, optional: false, required: false
  public get success() {
    return this.getBooleanAttribute('success');
  }

  // task_summary - computed: true, optional: false, required: false
  public get taskSummary() {
    return this.getStringAttribute('task_summary');
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // validity_period - computed: true, optional: false, required: false
  public get validityPeriod() {
    return this.getStringAttribute('validity_period');
  }

  // workflow_name - computed: true, optional: false, required: false
  public get workflowName() {
    return this.getStringAttribute('workflow_name');
  }

  // workflow_status - computed: true, optional: false, required: false
  public get workflowStatus() {
    return this.getStringAttribute('workflow_status');
  }

  // workflow_status_code - computed: true, optional: false, required: false
  public get workflowStatusCode() {
    return this.getNumberAttribute('workflow_status_code');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CreatePushCertificateRequestStatusTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CreatePushCertificateRequestStatusTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_chain_required: cdktf.booleanToTerraform(this._certificateChainRequired),
      certificate_common_name: cdktf.stringToTerraform(this._certificateCommonName),
      certificate_download_format: cdktf.stringToTerraform(this._certificateDownloadFormat),
      certificate_download_path: cdktf.stringToTerraform(this._certificateDownloadPath),
      id: cdktf.stringToTerraform(this._id),
      is_download_required: cdktf.booleanToTerraform(this._isDownloadRequired),
      request_id: cdktf.stringToTerraform(this._requestId),
      retry_count: cdktf.numberToTerraform(this._retryCount),
      retry_interval: cdktf.numberToTerraform(this._retryInterval),
      timeouts: createPushCertificateRequestStatusTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_chain_required: {
        value: cdktf.booleanToHclTerraform(this._certificateChainRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certificate_common_name: {
        value: cdktf.stringToHclTerraform(this._certificateCommonName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_download_format: {
        value: cdktf.stringToHclTerraform(this._certificateDownloadFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_download_path: {
        value: cdktf.stringToHclTerraform(this._certificateDownloadPath),
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
      is_download_required: {
        value: cdktf.booleanToHclTerraform(this._isDownloadRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      request_id: {
        value: cdktf.stringToHclTerraform(this._requestId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_count: {
        value: cdktf.numberToHclTerraform(this._retryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_interval: {
        value: cdktf.numberToHclTerraform(this._retryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: createPushCertificateRequestStatusTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CreatePushCertificateRequestStatusTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
