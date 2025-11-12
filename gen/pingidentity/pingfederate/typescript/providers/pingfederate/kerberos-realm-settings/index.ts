// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/kerberos_realm_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KerberosRealmSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Reference to the default logging. Default value is `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/kerberos_realm_settings#debug_log_output KerberosRealmSettings#debug_log_output}
  */
  readonly debugLogOutput?: boolean | cdktf.IResolvable;
  /**
  * Reference to the default security. Default value is `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/kerberos_realm_settings#force_tcp KerberosRealmSettings#force_tcp}
  */
  readonly forceTcp?: boolean | cdktf.IResolvable;
  /**
  * Reference to the default Key Distribution Center Retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/kerberos_realm_settings#kdc_retries KerberosRealmSettings#kdc_retries}
  */
  readonly kdcRetries: number;
  /**
  * Reference to the default Key Distribution Center Timeout (in seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/kerberos_realm_settings#kdc_timeout KerberosRealmSettings#kdc_timeout}
  */
  readonly kdcTimeout: number;
  /**
  * The key set retention period in minutes. When 'retain_previous_keys_on_password_change' is set to `true` for a realm, this setting determines how long keys will be retained after a password change occurs. Default value is `610`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/kerberos_realm_settings#key_set_retention_period_mins KerberosRealmSettings#key_set_retention_period_mins}
  */
  readonly keySetRetentionPeriodMins?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/kerberos_realm_settings pingfederate_kerberos_realm_settings}
*/
export class KerberosRealmSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_kerberos_realm_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KerberosRealmSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KerberosRealmSettings to import
  * @param importFromId The id of the existing KerberosRealmSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/kerberos_realm_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KerberosRealmSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_kerberos_realm_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/kerberos_realm_settings pingfederate_kerberos_realm_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KerberosRealmSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: KerberosRealmSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_kerberos_realm_settings',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._debugLogOutput = config.debugLogOutput;
    this._forceTcp = config.forceTcp;
    this._kdcRetries = config.kdcRetries;
    this._kdcTimeout = config.kdcTimeout;
    this._keySetRetentionPeriodMins = config.keySetRetentionPeriodMins;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // debug_log_output - computed: true, optional: true, required: false
  private _debugLogOutput?: boolean | cdktf.IResolvable; 
  public get debugLogOutput() {
    return this.getBooleanAttribute('debug_log_output');
  }
  public set debugLogOutput(value: boolean | cdktf.IResolvable) {
    this._debugLogOutput = value;
  }
  public resetDebugLogOutput() {
    this._debugLogOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugLogOutputInput() {
    return this._debugLogOutput;
  }

  // force_tcp - computed: true, optional: true, required: false
  private _forceTcp?: boolean | cdktf.IResolvable; 
  public get forceTcp() {
    return this.getBooleanAttribute('force_tcp');
  }
  public set forceTcp(value: boolean | cdktf.IResolvable) {
    this._forceTcp = value;
  }
  public resetForceTcp() {
    this._forceTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceTcpInput() {
    return this._forceTcp;
  }

  // kdc_retries - computed: false, optional: false, required: true
  private _kdcRetries?: number; 
  public get kdcRetries() {
    return this.getNumberAttribute('kdc_retries');
  }
  public set kdcRetries(value: number) {
    this._kdcRetries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcRetriesInput() {
    return this._kdcRetries;
  }

  // kdc_timeout - computed: false, optional: false, required: true
  private _kdcTimeout?: number; 
  public get kdcTimeout() {
    return this.getNumberAttribute('kdc_timeout');
  }
  public set kdcTimeout(value: number) {
    this._kdcTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcTimeoutInput() {
    return this._kdcTimeout;
  }

  // key_set_retention_period_mins - computed: true, optional: true, required: false
  private _keySetRetentionPeriodMins?: number; 
  public get keySetRetentionPeriodMins() {
    return this.getNumberAttribute('key_set_retention_period_mins');
  }
  public set keySetRetentionPeriodMins(value: number) {
    this._keySetRetentionPeriodMins = value;
  }
  public resetKeySetRetentionPeriodMins() {
    this._keySetRetentionPeriodMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySetRetentionPeriodMinsInput() {
    return this._keySetRetentionPeriodMins;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      debug_log_output: cdktf.booleanToTerraform(this._debugLogOutput),
      force_tcp: cdktf.booleanToTerraform(this._forceTcp),
      kdc_retries: cdktf.numberToTerraform(this._kdcRetries),
      kdc_timeout: cdktf.numberToTerraform(this._kdcTimeout),
      key_set_retention_period_mins: cdktf.numberToTerraform(this._keySetRetentionPeriodMins),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      debug_log_output: {
        value: cdktf.booleanToHclTerraform(this._debugLogOutput),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_tcp: {
        value: cdktf.booleanToHclTerraform(this._forceTcp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kdc_retries: {
        value: cdktf.numberToHclTerraform(this._kdcRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kdc_timeout: {
        value: cdktf.numberToHclTerraform(this._kdcTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_set_retention_period_mins: {
        value: cdktf.numberToHclTerraform(this._keySetRetentionPeriodMins),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
