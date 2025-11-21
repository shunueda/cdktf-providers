// https://registry.terraform.io/providers/spacelift-io/spacelift/1.39.0/docs/resources/audit_trail_webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuditTrailWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * `custom_headers` is a Map of key-value strings, that will be passed as headers with audit trail requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.39.0/docs/resources/audit_trail_webhook#custom_headers AuditTrailWebhook#custom_headers}
  */
  readonly customHeaders?: { [key: string]: string };
  /**
  * `enabled` determines whether the webhook is enabled. If it is not, Spacelift will not send any requests to the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.39.0/docs/resources/audit_trail_webhook#enabled AuditTrailWebhook#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * `endpoint` is the URL to which Spacelift will send POST requests about audit events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.39.0/docs/resources/audit_trail_webhook#endpoint AuditTrailWebhook#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.39.0/docs/resources/audit_trail_webhook#id AuditTrailWebhook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * `include_runs` determines whether the webhook should include information about the run that triggered the event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.39.0/docs/resources/audit_trail_webhook#include_runs AuditTrailWebhook#include_runs}
  */
  readonly includeRuns?: boolean | cdktf.IResolvable;
  /**
  * whether to retry the webhook in case of failure. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.39.0/docs/resources/audit_trail_webhook#retry_on_failure AuditTrailWebhook#retry_on_failure}
  */
  readonly retryOnFailure?: boolean | cdktf.IResolvable;
  /**
  * `secret` is a secret that Spacelift will send with the request. Note that once it's created, it will be just an empty string in the state due to security reasons.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.39.0/docs/resources/audit_trail_webhook#secret AuditTrailWebhook#secret}
  */
  readonly secret: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.39.0/docs/resources/audit_trail_webhook spacelift_audit_trail_webhook}
*/
export class AuditTrailWebhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spacelift_audit_trail_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuditTrailWebhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuditTrailWebhook to import
  * @param importFromId The id of the existing AuditTrailWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.39.0/docs/resources/audit_trail_webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuditTrailWebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spacelift_audit_trail_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.39.0/docs/resources/audit_trail_webhook spacelift_audit_trail_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuditTrailWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: AuditTrailWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'spacelift_audit_trail_webhook',
      terraformGeneratorMetadata: {
        providerName: 'spacelift',
        providerVersion: '1.39.0',
        providerVersionConstraint: '1.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customHeaders = config.customHeaders;
    this._enabled = config.enabled;
    this._endpoint = config.endpoint;
    this._id = config.id;
    this._includeRuns = config.includeRuns;
    this._retryOnFailure = config.retryOnFailure;
    this._secret = config.secret;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_headers - computed: false, optional: true, required: false
  private _customHeaders?: { [key: string]: string }; 
  public get customHeaders() {
    return this.getStringMapAttribute('custom_headers');
  }
  public set customHeaders(value: { [key: string]: string }) {
    this._customHeaders = value;
  }
  public resetCustomHeaders() {
    this._customHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeadersInput() {
    return this._customHeaders;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // include_runs - computed: false, optional: true, required: false
  private _includeRuns?: boolean | cdktf.IResolvable; 
  public get includeRuns() {
    return this.getBooleanAttribute('include_runs');
  }
  public set includeRuns(value: boolean | cdktf.IResolvable) {
    this._includeRuns = value;
  }
  public resetIncludeRuns() {
    this._includeRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRunsInput() {
    return this._includeRuns;
  }

  // retry_on_failure - computed: false, optional: true, required: false
  private _retryOnFailure?: boolean | cdktf.IResolvable; 
  public get retryOnFailure() {
    return this.getBooleanAttribute('retry_on_failure');
  }
  public set retryOnFailure(value: boolean | cdktf.IResolvable) {
    this._retryOnFailure = value;
  }
  public resetRetryOnFailure() {
    this._retryOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOnFailureInput() {
    return this._retryOnFailure;
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._customHeaders),
      enabled: cdktf.booleanToTerraform(this._enabled),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      id: cdktf.stringToTerraform(this._id),
      include_runs: cdktf.booleanToTerraform(this._includeRuns),
      retry_on_failure: cdktf.booleanToTerraform(this._retryOnFailure),
      secret: cdktf.stringToTerraform(this._secret),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
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
      include_runs: {
        value: cdktf.booleanToHclTerraform(this._includeRuns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      retry_on_failure: {
        value: cdktf.booleanToHclTerraform(this._retryOnFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secret: {
        value: cdktf.stringToHclTerraform(this._secret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
