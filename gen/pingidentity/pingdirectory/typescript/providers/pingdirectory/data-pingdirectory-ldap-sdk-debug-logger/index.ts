// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/ldap_sdk_debug_logger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryLdapSdkDebugLoggerConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/ldap_sdk_debug_logger pingdirectory_ldap_sdk_debug_logger}
*/
export class DataPingdirectoryLdapSdkDebugLogger extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_ldap_sdk_debug_logger";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryLdapSdkDebugLogger resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryLdapSdkDebugLogger to import
  * @param importFromId The id of the existing DataPingdirectoryLdapSdkDebugLogger that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/ldap_sdk_debug_logger#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryLdapSdkDebugLogger to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_ldap_sdk_debug_logger", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/ldap_sdk_debug_logger pingdirectory_ldap_sdk_debug_logger} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryLdapSdkDebugLoggerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryLdapSdkDebugLoggerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_ldap_sdk_debug_logger',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // append - computed: true, optional: false, required: false
  public get append() {
    return this.getBooleanAttribute('append');
  }

  // asynchronous - computed: true, optional: false, required: false
  public get asynchronous() {
    return this.getBooleanAttribute('asynchronous');
  }

  // auto_flush - computed: true, optional: false, required: false
  public get autoFlush() {
    return this.getBooleanAttribute('auto_flush');
  }

  // buffer_size - computed: true, optional: false, required: false
  public get bufferSize() {
    return this.getStringAttribute('buffer_size');
  }

  // compression_mechanism - computed: true, optional: false, required: false
  public get compressionMechanism() {
    return this.getStringAttribute('compression_mechanism');
  }

  // debug_level - computed: true, optional: false, required: false
  public get debugLevel() {
    return this.getStringAttribute('debug_level');
  }

  // debug_type - computed: true, optional: false, required: false
  public get debugType() {
    return cdktf.Fn.tolist(this.getListAttribute('debug_type'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // encrypt_log - computed: true, optional: false, required: false
  public get encryptLog() {
    return this.getBooleanAttribute('encrypt_log');
  }

  // encryption_settings_definition_id - computed: true, optional: false, required: false
  public get encryptionSettingsDefinitionId() {
    return this.getStringAttribute('encryption_settings_definition_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_stack_trace - computed: true, optional: false, required: false
  public get includeStackTrace() {
    return this.getBooleanAttribute('include_stack_trace');
  }

  // log_file - computed: true, optional: false, required: false
  public get logFile() {
    return this.getStringAttribute('log_file');
  }

  // log_file_permissions - computed: true, optional: false, required: false
  public get logFilePermissions() {
    return this.getStringAttribute('log_file_permissions');
  }

  // logging_error_behavior - computed: true, optional: false, required: false
  public get loggingErrorBehavior() {
    return this.getStringAttribute('logging_error_behavior');
  }

  // queue_size - computed: true, optional: false, required: false
  public get queueSize() {
    return this.getNumberAttribute('queue_size');
  }

  // retention_policy - computed: true, optional: false, required: false
  public get retentionPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('retention_policy'));
  }

  // rotation_listener - computed: true, optional: false, required: false
  public get rotationListener() {
    return cdktf.Fn.tolist(this.getListAttribute('rotation_listener'));
  }

  // rotation_policy - computed: true, optional: false, required: false
  public get rotationPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('rotation_policy'));
  }

  // sign_log - computed: true, optional: false, required: false
  public get signLog() {
    return this.getBooleanAttribute('sign_log');
  }

  // time_interval - computed: true, optional: false, required: false
  public get timeInterval() {
    return this.getStringAttribute('time_interval');
  }

  // timestamp_precision - computed: true, optional: false, required: false
  public get timestampPrecision() {
    return this.getStringAttribute('timestamp_precision');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
