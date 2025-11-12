// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/server_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryServerInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/server_instance#name DataPingdirectoryServerInstance#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/server_instance pingdirectory_server_instance}
*/
export class DataPingdirectoryServerInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_server_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryServerInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryServerInstance to import
  * @param importFromId The id of the existing DataPingdirectoryServerInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/server_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryServerInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_server_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/server_instance pingdirectory_server_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryServerInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryServerInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_server_instance',
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_dn - computed: true, optional: false, required: false
  public get baseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('base_dn'));
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // http_port - computed: true, optional: false, required: false
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }

  // https_port - computed: true, optional: false, required: false
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inter_server_certificate - computed: true, optional: false, required: false
  public get interServerCertificate() {
    return this.getStringAttribute('inter_server_certificate');
  }

  // jmx_port - computed: true, optional: false, required: false
  public get jmxPort() {
    return this.getNumberAttribute('jmx_port');
  }

  // jmxs_port - computed: true, optional: false, required: false
  public get jmxsPort() {
    return this.getNumberAttribute('jmxs_port');
  }

  // ldap_port - computed: true, optional: false, required: false
  public get ldapPort() {
    return this.getNumberAttribute('ldap_port');
  }

  // ldaps_port - computed: true, optional: false, required: false
  public get ldapsPort() {
    return this.getNumberAttribute('ldaps_port');
  }

  // load_balancing_algorithm_name - computed: true, optional: false, required: false
  public get loadBalancingAlgorithmName() {
    return cdktf.Fn.tolist(this.getListAttribute('load_balancing_algorithm_name'));
  }

  // member_of_server_group - computed: true, optional: false, required: false
  public get memberOfServerGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('member_of_server_group'));
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // preferred_security - computed: true, optional: false, required: false
  public get preferredSecurity() {
    return this.getStringAttribute('preferred_security');
  }

  // replication_domain_server_id - computed: true, optional: false, required: false
  public get replicationDomainServerId() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('replication_domain_server_id')));
  }

  // replication_port - computed: true, optional: false, required: false
  public get replicationPort() {
    return this.getNumberAttribute('replication_port');
  }

  // replication_server_id - computed: true, optional: false, required: false
  public get replicationServerId() {
    return this.getNumberAttribute('replication_server_id');
  }

  // replication_set_name - computed: true, optional: false, required: false
  public get replicationSetName() {
    return this.getStringAttribute('replication_set_name');
  }

  // server_instance_location - computed: true, optional: false, required: false
  public get serverInstanceLocation() {
    return this.getStringAttribute('server_instance_location');
  }

  // server_instance_name - computed: true, optional: false, required: false
  public get serverInstanceName() {
    return this.getStringAttribute('server_instance_name');
  }

  // server_instance_type - computed: true, optional: false, required: false
  public get serverInstanceType() {
    return this.getStringAttribute('server_instance_type');
  }

  // server_root - computed: true, optional: false, required: false
  public get serverRoot() {
    return this.getStringAttribute('server_root');
  }

  // server_version - computed: true, optional: false, required: false
  public get serverVersion() {
    return this.getStringAttribute('server_version');
  }

  // start_tls_enabled - computed: true, optional: false, required: false
  public get startTlsEnabled() {
    return this.getBooleanAttribute('start_tls_enabled');
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
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
