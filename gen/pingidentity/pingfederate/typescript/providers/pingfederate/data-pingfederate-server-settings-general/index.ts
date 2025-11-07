// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/server_settings_general
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingfederateServerSettingsGeneralConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/server_settings_general pingfederate_server_settings_general}
*/
export class DataPingfederateServerSettingsGeneral extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_server_settings_general";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingfederateServerSettingsGeneral resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingfederateServerSettingsGeneral to import
  * @param importFromId The id of the existing DataPingfederateServerSettingsGeneral that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/server_settings_general#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingfederateServerSettingsGeneral to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_server_settings_general", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/server_settings_general pingfederate_server_settings_general} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingfederateServerSettingsGeneralConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPingfederateServerSettingsGeneralConfig = {}) {
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datastore_validation_interval_secs - computed: true, optional: false, required: false
  public get datastoreValidationIntervalSecs() {
    return this.getNumberAttribute('datastore_validation_interval_secs');
  }

  // disable_automatic_connection_validation - computed: true, optional: false, required: false
  public get disableAutomaticConnectionValidation() {
    return this.getBooleanAttribute('disable_automatic_connection_validation');
  }

  // idp_connection_transaction_logging_override - computed: true, optional: false, required: false
  public get idpConnectionTransactionLoggingOverride() {
    return this.getStringAttribute('idp_connection_transaction_logging_override');
  }

  // request_header_for_correlation_id - computed: true, optional: false, required: false
  public get requestHeaderForCorrelationId() {
    return this.getStringAttribute('request_header_for_correlation_id');
  }

  // sp_connection_transaction_logging_override - computed: true, optional: false, required: false
  public get spConnectionTransactionLoggingOverride() {
    return this.getStringAttribute('sp_connection_transaction_logging_override');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
