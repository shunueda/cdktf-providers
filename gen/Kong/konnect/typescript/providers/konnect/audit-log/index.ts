// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/audit_log
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuditLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * The value to include in the `Authorization` header when sending audit logs to the webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/audit_log#authorization AuditLog#authorization}
  */
  readonly authorization?: string;
  /**
  * Indicates if the data should be sent to the webhook. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/audit_log#enabled AuditLog#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The endpoint that will receive audit log messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/audit_log#endpoint AuditLog#endpoint}
  */
  readonly endpoint?: string;
  /**
  * The output format of each log messages. Default: "cef"; must be one of ["cef", "json", "cps"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/audit_log#log_format AuditLog#log_format}
  */
  readonly logFormat?: string;
  /**
  * Indicates if the SSL certificate verification of the host endpoint should be skipped when delivering payloads.
  * We strongly recommend not setting this to 'true' as you are subject to man-in-the-middle and other attacks.
  * This option should be considered only for self-signed SSL certificates used in a non-production environment.
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/audit_log#skip_ssl_verification AuditLog#skip_ssl_verification}
  */
  readonly skipSslVerification?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/audit_log konnect_audit_log}
*/
export class AuditLog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_audit_log";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuditLog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuditLog to import
  * @param importFromId The id of the existing AuditLog that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/audit_log#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuditLog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_audit_log", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/audit_log konnect_audit_log} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuditLogConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AuditLogConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'konnect_audit_log',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authorization = config.authorization;
    this._enabled = config.enabled;
    this._endpoint = config.endpoint;
    this._logFormat = config.logFormat;
    this._skipSslVerification = config.skipSslVerification;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization - computed: false, optional: true, required: false
  private _authorization?: string; 
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
  public set authorization(value: string) {
    this._authorization = value;
  }
  public resetAuthorization() {
    this._authorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // log_format - computed: true, optional: true, required: false
  private _logFormat?: string; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  public resetLogFormat() {
    this._logFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat;
  }

  // skip_ssl_verification - computed: true, optional: true, required: false
  private _skipSslVerification?: boolean | cdktf.IResolvable; 
  public get skipSslVerification() {
    return this.getBooleanAttribute('skip_ssl_verification');
  }
  public set skipSslVerification(value: boolean | cdktf.IResolvable) {
    this._skipSslVerification = value;
  }
  public resetSkipSslVerification() {
    this._skipSslVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipSslVerificationInput() {
    return this._skipSslVerification;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorization: cdktf.stringToTerraform(this._authorization),
      enabled: cdktf.booleanToTerraform(this._enabled),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      log_format: cdktf.stringToTerraform(this._logFormat),
      skip_ssl_verification: cdktf.booleanToTerraform(this._skipSslVerification),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorization: {
        value: cdktf.stringToHclTerraform(this._authorization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      log_format: {
        value: cdktf.stringToHclTerraform(this._logFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_ssl_verification: {
        value: cdktf.booleanToHclTerraform(this._skipSslVerification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
