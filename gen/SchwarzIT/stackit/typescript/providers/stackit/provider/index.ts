// https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StackitProviderConfig {
  /**
  * Enable trace context. If `true` a `Traceparent` header will be added to the request. Default: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs#enable_trace_context StackitProvider#enable_trace_context}
  */
  readonly enableTraceContext?: boolean | cdktf.IResolvable;
  /**
  * Private RSA Key.<br />This attribute can also be loaded from `STACKIT_PRIVATE_KEY` environment variable instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs#private_key StackitProvider#private_key}
  */
  readonly privateKey?: string;
  /**
  * Path to the Private RSA Key.<br />This attribute can also be loaded from `STACKIT_PRIVATE_KEY_PATH` environment variable instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs#private_key_path StackitProvider#private_key_path}
  */
  readonly privateKeyPath?: string;
  /**
  * Service Account Email.<br />This attribute can also be loaded from `STACKIT_SERVICE_ACCOUNT_EMAIL` environment variable instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs#service_account_email StackitProvider#service_account_email}
  */
  readonly serviceAccountEmail?: string;
  /**
  * Service Account Key.<br />This attribute can also be loaded from `STACKIT_SERVICE_ACCOUNT_KEY` environment variable instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs#service_account_key StackitProvider#service_account_key}
  */
  readonly serviceAccountKey?: string;
  /**
  * Path to the Service Account Key.<br />This attribute can also be loaded from `STACKIT_SERVICE_ACCOUNT_KEY_PATH` environment variable instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs#service_account_key_path StackitProvider#service_account_key_path}
  */
  readonly serviceAccountKeyPath?: string;
  /**
  * Service Account Token.<br />This attribute can also be loaded from `STACKIT_SERVICE_ACCOUNT_TOKEN` environment variable instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs#service_account_token StackitProvider#service_account_token}
  */
  readonly serviceAccountToken?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs#alias StackitProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs stackit}
*/
export class StackitProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StackitProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StackitProvider to import
  * @param importFromId The id of the existing StackitProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StackitProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs stackit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StackitProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: StackitProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'stackit',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '1.34.3',
        providerVersionConstraint: '1.34.3'
      },
      terraformProviderSource: 'SchwarzIT/stackit'
    });
    this._enableTraceContext = config.enableTraceContext;
    this._privateKey = config.privateKey;
    this._privateKeyPath = config.privateKeyPath;
    this._serviceAccountEmail = config.serviceAccountEmail;
    this._serviceAccountKey = config.serviceAccountKey;
    this._serviceAccountKeyPath = config.serviceAccountKeyPath;
    this._serviceAccountToken = config.serviceAccountToken;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_trace_context - computed: false, optional: true, required: false
  private _enableTraceContext?: boolean | cdktf.IResolvable; 
  public get enableTraceContext() {
    return this._enableTraceContext;
  }
  public set enableTraceContext(value: boolean | cdktf.IResolvable | undefined) {
    this._enableTraceContext = value;
  }
  public resetEnableTraceContext() {
    this._enableTraceContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTraceContextInput() {
    return this._enableTraceContext;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this._privateKey;
  }
  public set privateKey(value: string | undefined) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_path - computed: false, optional: true, required: false
  private _privateKeyPath?: string; 
  public get privateKeyPath() {
    return this._privateKeyPath;
  }
  public set privateKeyPath(value: string | undefined) {
    this._privateKeyPath = value;
  }
  public resetPrivateKeyPath() {
    this._privateKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPathInput() {
    return this._privateKeyPath;
  }

  // service_account_email - computed: false, optional: true, required: false
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this._serviceAccountEmail;
  }
  public set serviceAccountEmail(value: string | undefined) {
    this._serviceAccountEmail = value;
  }
  public resetServiceAccountEmail() {
    this._serviceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // service_account_key - computed: false, optional: true, required: false
  private _serviceAccountKey?: string; 
  public get serviceAccountKey() {
    return this._serviceAccountKey;
  }
  public set serviceAccountKey(value: string | undefined) {
    this._serviceAccountKey = value;
  }
  public resetServiceAccountKey() {
    this._serviceAccountKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountKeyInput() {
    return this._serviceAccountKey;
  }

  // service_account_key_path - computed: false, optional: true, required: false
  private _serviceAccountKeyPath?: string; 
  public get serviceAccountKeyPath() {
    return this._serviceAccountKeyPath;
  }
  public set serviceAccountKeyPath(value: string | undefined) {
    this._serviceAccountKeyPath = value;
  }
  public resetServiceAccountKeyPath() {
    this._serviceAccountKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountKeyPathInput() {
    return this._serviceAccountKeyPath;
  }

  // service_account_token - computed: false, optional: true, required: false
  private _serviceAccountToken?: string; 
  public get serviceAccountToken() {
    return this._serviceAccountToken;
  }
  public set serviceAccountToken(value: string | undefined) {
    this._serviceAccountToken = value;
  }
  public resetServiceAccountToken() {
    this._serviceAccountToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountTokenInput() {
    return this._serviceAccountToken;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_trace_context: cdktf.booleanToTerraform(this._enableTraceContext),
      private_key: cdktf.stringToTerraform(this._privateKey),
      private_key_path: cdktf.stringToTerraform(this._privateKeyPath),
      service_account_email: cdktf.stringToTerraform(this._serviceAccountEmail),
      service_account_key: cdktf.stringToTerraform(this._serviceAccountKey),
      service_account_key_path: cdktf.stringToTerraform(this._serviceAccountKeyPath),
      service_account_token: cdktf.stringToTerraform(this._serviceAccountToken),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_trace_context: {
        value: cdktf.booleanToHclTerraform(this._enableTraceContext),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_path: {
        value: cdktf.stringToHclTerraform(this._privateKeyPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_email: {
        value: cdktf.stringToHclTerraform(this._serviceAccountEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_key: {
        value: cdktf.stringToHclTerraform(this._serviceAccountKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_key_path: {
        value: cdktf.stringToHclTerraform(this._serviceAccountKeyPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_token: {
        value: cdktf.stringToHclTerraform(this._serviceAccountToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
