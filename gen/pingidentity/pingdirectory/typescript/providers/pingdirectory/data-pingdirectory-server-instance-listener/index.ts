// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/server_instance_listener
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryServerInstanceListenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/server_instance_listener#name DataPingdirectoryServerInstanceListener#name}
  */
  readonly name: string;
  /**
  * Name of the parent Server Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/server_instance_listener#server_instance_name DataPingdirectoryServerInstanceListener#server_instance_name}
  */
  readonly serverInstanceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/server_instance_listener pingdirectory_server_instance_listener}
*/
export class DataPingdirectoryServerInstanceListener extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_server_instance_listener";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryServerInstanceListener resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryServerInstanceListener to import
  * @param importFromId The id of the existing DataPingdirectoryServerInstanceListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/server_instance_listener#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryServerInstanceListener to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_server_instance_listener", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/server_instance_listener pingdirectory_server_instance_listener} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryServerInstanceListenerConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryServerInstanceListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_server_instance_listener',
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
    this._serverInstanceName = config.serverInstanceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_security - computed: true, optional: false, required: false
  public get connectionSecurity() {
    return this.getStringAttribute('connection_security');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // listen_address - computed: true, optional: false, required: false
  public get listenAddress() {
    return this.getStringAttribute('listen_address');
  }

  // listener_certificate - computed: true, optional: false, required: false
  public get listenerCertificate() {
    return this.getStringAttribute('listener_certificate');
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

  // purpose - computed: true, optional: false, required: false
  public get purpose() {
    return cdktf.Fn.tolist(this.getListAttribute('purpose'));
  }

  // server_http_port - computed: true, optional: false, required: false
  public get serverHttpPort() {
    return this.getNumberAttribute('server_http_port');
  }

  // server_instance_name - computed: false, optional: false, required: true
  private _serverInstanceName?: string; 
  public get serverInstanceName() {
    return this.getStringAttribute('server_instance_name');
  }
  public set serverInstanceName(value: string) {
    this._serverInstanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInstanceNameInput() {
    return this._serverInstanceName;
  }

  // server_ldap_port - computed: true, optional: false, required: false
  public get serverLdapPort() {
    return this.getNumberAttribute('server_ldap_port');
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
      server_instance_name: cdktf.stringToTerraform(this._serverInstanceName),
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
      server_instance_name: {
        value: cdktf.stringToHclTerraform(this._serverInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
