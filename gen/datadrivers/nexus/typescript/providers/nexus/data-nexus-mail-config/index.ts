// https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/mail_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNexusMailConfigConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/mail_config nexus_mail_config}
*/
export class DataNexusMailConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nexus_mail_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNexusMailConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNexusMailConfig to import
  * @param importFromId The id of the existing DataNexusMailConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/mail_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNexusMailConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nexus_mail_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/data-sources/mail_config nexus_mail_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNexusMailConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNexusMailConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nexus_mail_config',
      terraformGeneratorMetadata: {
        providerName: 'nexus',
        providerVersion: '2.6.0',
        providerVersionConstraint: '2.6.0'
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

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // from_address - computed: true, optional: false, required: false
  public get fromAddress() {
    return this.getStringAttribute('from_address');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // nexus_trust_store_enabled - computed: true, optional: false, required: false
  public get nexusTrustStoreEnabled() {
    return this.getBooleanAttribute('nexus_trust_store_enabled');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // ssl_on_connect_enabled - computed: true, optional: false, required: false
  public get sslOnConnectEnabled() {
    return this.getBooleanAttribute('ssl_on_connect_enabled');
  }

  // ssl_server_identity_check_enabled - computed: true, optional: false, required: false
  public get sslServerIdentityCheckEnabled() {
    return this.getBooleanAttribute('ssl_server_identity_check_enabled');
  }

  // start_tls_enabled - computed: true, optional: false, required: false
  public get startTlsEnabled() {
    return this.getBooleanAttribute('start_tls_enabled');
  }

  // start_tls_required - computed: true, optional: false, required: false
  public get startTlsRequired() {
    return this.getBooleanAttribute('start_tls_required');
  }

  // subject_prefix - computed: true, optional: false, required: false
  public get subjectPrefix() {
    return this.getStringAttribute('subject_prefix');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
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
