// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_general
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerSettingsGeneralConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines how long (in seconds) the result of testing a datastore connection is cached. The default is `300`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_general#datastore_validation_interval_secs ServerSettingsGeneral#datastore_validation_interval_secs}
  */
  readonly datastoreValidationIntervalSecs?: number;
  /**
  * Boolean that disables automatic connection validation when set to true. The default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_general#disable_automatic_connection_validation ServerSettingsGeneral#disable_automatic_connection_validation}
  */
  readonly disableAutomaticConnectionValidation?: boolean | cdktf.IResolvable;
  /**
  * Determines the level of transaction logging for all identity provider connections. The default is `DONT_OVERRIDE`, in which case the logging level will be determined by each individual IdP connection. Options are `DONT_OVERRIDE`, `NONE`, `FULL`, `STANDARD`, `ENHANCED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_general#idp_connection_transaction_logging_override ServerSettingsGeneral#idp_connection_transaction_logging_override}
  */
  readonly idpConnectionTransactionLoggingOverride?: string;
  /**
  * HTTP request header for retrieving correlation ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_general#request_header_for_correlation_id ServerSettingsGeneral#request_header_for_correlation_id}
  */
  readonly requestHeaderForCorrelationId?: string;
  /**
  * Determines the level of transaction logging for all service provider connections. The default is `DONT_OVERRIDE`, in which case the logging level will be determined by each individual SP connection. Options are `DONT_OVERRIDE`, `NONE`, `FULL`, `STANDARD`, `ENHANCED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_general#sp_connection_transaction_logging_override ServerSettingsGeneral#sp_connection_transaction_logging_override}
  */
  readonly spConnectionTransactionLoggingOverride?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_general pingfederate_server_settings_general}
*/
export class ServerSettingsGeneral extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_server_settings_general";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServerSettingsGeneral resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServerSettingsGeneral to import
  * @param importFromId The id of the existing ServerSettingsGeneral that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_general#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServerSettingsGeneral to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_server_settings_general", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_general pingfederate_server_settings_general} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerSettingsGeneralConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ServerSettingsGeneralConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_server_settings_general',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._datastoreValidationIntervalSecs = config.datastoreValidationIntervalSecs;
    this._disableAutomaticConnectionValidation = config.disableAutomaticConnectionValidation;
    this._idpConnectionTransactionLoggingOverride = config.idpConnectionTransactionLoggingOverride;
    this._requestHeaderForCorrelationId = config.requestHeaderForCorrelationId;
    this._spConnectionTransactionLoggingOverride = config.spConnectionTransactionLoggingOverride;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datastore_validation_interval_secs - computed: true, optional: true, required: false
  private _datastoreValidationIntervalSecs?: number; 
  public get datastoreValidationIntervalSecs() {
    return this.getNumberAttribute('datastore_validation_interval_secs');
  }
  public set datastoreValidationIntervalSecs(value: number) {
    this._datastoreValidationIntervalSecs = value;
  }
  public resetDatastoreValidationIntervalSecs() {
    this._datastoreValidationIntervalSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreValidationIntervalSecsInput() {
    return this._datastoreValidationIntervalSecs;
  }

  // disable_automatic_connection_validation - computed: true, optional: true, required: false
  private _disableAutomaticConnectionValidation?: boolean | cdktf.IResolvable; 
  public get disableAutomaticConnectionValidation() {
    return this.getBooleanAttribute('disable_automatic_connection_validation');
  }
  public set disableAutomaticConnectionValidation(value: boolean | cdktf.IResolvable) {
    this._disableAutomaticConnectionValidation = value;
  }
  public resetDisableAutomaticConnectionValidation() {
    this._disableAutomaticConnectionValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutomaticConnectionValidationInput() {
    return this._disableAutomaticConnectionValidation;
  }

  // idp_connection_transaction_logging_override - computed: true, optional: true, required: false
  private _idpConnectionTransactionLoggingOverride?: string; 
  public get idpConnectionTransactionLoggingOverride() {
    return this.getStringAttribute('idp_connection_transaction_logging_override');
  }
  public set idpConnectionTransactionLoggingOverride(value: string) {
    this._idpConnectionTransactionLoggingOverride = value;
  }
  public resetIdpConnectionTransactionLoggingOverride() {
    this._idpConnectionTransactionLoggingOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpConnectionTransactionLoggingOverrideInput() {
    return this._idpConnectionTransactionLoggingOverride;
  }

  // request_header_for_correlation_id - computed: true, optional: true, required: false
  private _requestHeaderForCorrelationId?: string; 
  public get requestHeaderForCorrelationId() {
    return this.getStringAttribute('request_header_for_correlation_id');
  }
  public set requestHeaderForCorrelationId(value: string) {
    this._requestHeaderForCorrelationId = value;
  }
  public resetRequestHeaderForCorrelationId() {
    this._requestHeaderForCorrelationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderForCorrelationIdInput() {
    return this._requestHeaderForCorrelationId;
  }

  // sp_connection_transaction_logging_override - computed: true, optional: true, required: false
  private _spConnectionTransactionLoggingOverride?: string; 
  public get spConnectionTransactionLoggingOverride() {
    return this.getStringAttribute('sp_connection_transaction_logging_override');
  }
  public set spConnectionTransactionLoggingOverride(value: string) {
    this._spConnectionTransactionLoggingOverride = value;
  }
  public resetSpConnectionTransactionLoggingOverride() {
    this._spConnectionTransactionLoggingOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spConnectionTransactionLoggingOverrideInput() {
    return this._spConnectionTransactionLoggingOverride;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datastore_validation_interval_secs: cdktf.numberToTerraform(this._datastoreValidationIntervalSecs),
      disable_automatic_connection_validation: cdktf.booleanToTerraform(this._disableAutomaticConnectionValidation),
      idp_connection_transaction_logging_override: cdktf.stringToTerraform(this._idpConnectionTransactionLoggingOverride),
      request_header_for_correlation_id: cdktf.stringToTerraform(this._requestHeaderForCorrelationId),
      sp_connection_transaction_logging_override: cdktf.stringToTerraform(this._spConnectionTransactionLoggingOverride),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datastore_validation_interval_secs: {
        value: cdktf.numberToHclTerraform(this._datastoreValidationIntervalSecs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_automatic_connection_validation: {
        value: cdktf.booleanToHclTerraform(this._disableAutomaticConnectionValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      idp_connection_transaction_logging_override: {
        value: cdktf.stringToHclTerraform(this._idpConnectionTransactionLoggingOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_header_for_correlation_id: {
        value: cdktf.stringToHclTerraform(this._requestHeaderForCorrelationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sp_connection_transaction_logging_override: {
        value: cdktf.stringToHclTerraform(this._spConnectionTransactionLoggingOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
