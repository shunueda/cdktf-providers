// https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/revoke_certificate_request_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RevokeCertificateRequestStatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/revoke_certificate_request_status#id RevokeCertificateRequestStatus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Request ID from a workflow execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/revoke_certificate_request_status#request_id RevokeCertificateRequestStatus#request_id}
  */
  readonly requestId?: string;
  /**
  * Number of times to retry checking workflow status (default: 10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/revoke_certificate_request_status#retry_count RevokeCertificateRequestStatus#retry_count}
  */
  readonly retryCount?: number;
  /**
  * Seconds to wait between retry attempts (default: 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/revoke_certificate_request_status#retry_interval RevokeCertificateRequestStatus#retry_interval}
  */
  readonly retryInterval?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/revoke_certificate_request_status#timeouts RevokeCertificateRequestStatus#timeouts}
  */
  readonly timeouts?: RevokeCertificateRequestStatusTimeouts;
}
export interface RevokeCertificateRequestStatusTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/revoke_certificate_request_status#create RevokeCertificateRequestStatus#create}
  */
  readonly create?: string;
}

export function revokeCertificateRequestStatusTimeoutsToTerraform(struct?: RevokeCertificateRequestStatusTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function revokeCertificateRequestStatusTimeoutsToHclTerraform(struct?: RevokeCertificateRequestStatusTimeouts | cdktf.IResolvable): any {
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

export class RevokeCertificateRequestStatusTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RevokeCertificateRequestStatusTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RevokeCertificateRequestStatusTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/revoke_certificate_request_status appviewx_revoke_certificate_request_status}
*/
export class RevokeCertificateRequestStatus extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "appviewx_revoke_certificate_request_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RevokeCertificateRequestStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RevokeCertificateRequestStatus to import
  * @param importFromId The id of the existing RevokeCertificateRequestStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/revoke_certificate_request_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RevokeCertificateRequestStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "appviewx_revoke_certificate_request_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/revoke_certificate_request_status appviewx_revoke_certificate_request_status} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RevokeCertificateRequestStatusConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RevokeCertificateRequestStatusConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'appviewx_revoke_certificate_request_status',
      terraformGeneratorMetadata: {
        providerName: 'appviewx',
        providerVersion: '1.0.8'
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
    this._requestId = config.requestId;
    this._retryCount = config.retryCount;
    this._retryInterval = config.retryInterval;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // last_polled_time - computed: true, optional: false, required: false
  public get lastPolledTime() {
    return this.getStringAttribute('last_polled_time');
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

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }

  // success - computed: true, optional: false, required: false
  public get success() {
    return this.getBooleanAttribute('success');
  }

  // task_summary - computed: true, optional: false, required: false
  public get taskSummary() {
    return this.getStringAttribute('task_summary');
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
  private _timeouts = new RevokeCertificateRequestStatusTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RevokeCertificateRequestStatusTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      request_id: cdktf.stringToTerraform(this._requestId),
      retry_count: cdktf.numberToTerraform(this._retryCount),
      retry_interval: cdktf.numberToTerraform(this._retryInterval),
      timeouts: revokeCertificateRequestStatusTimeoutsToTerraform(this._timeouts.internalValue),
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
        value: revokeCertificateRequestStatusTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RevokeCertificateRequestStatusTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
