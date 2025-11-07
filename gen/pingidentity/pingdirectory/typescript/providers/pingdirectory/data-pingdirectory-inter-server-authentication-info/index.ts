// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/inter_server_authentication_info
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryInterServerAuthenticationInfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/inter_server_authentication_info#name DataPingdirectoryInterServerAuthenticationInfo#name}
  */
  readonly name: string;
  /**
  * Name of the parent Server Instance Listener
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/inter_server_authentication_info#server_instance_listener_name DataPingdirectoryInterServerAuthenticationInfo#server_instance_listener_name}
  */
  readonly serverInstanceListenerName: string;
  /**
  * Name of the parent Server Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/inter_server_authentication_info#server_instance_name DataPingdirectoryInterServerAuthenticationInfo#server_instance_name}
  */
  readonly serverInstanceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/inter_server_authentication_info pingdirectory_inter_server_authentication_info}
*/
export class DataPingdirectoryInterServerAuthenticationInfo extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_inter_server_authentication_info";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryInterServerAuthenticationInfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryInterServerAuthenticationInfo to import
  * @param importFromId The id of the existing DataPingdirectoryInterServerAuthenticationInfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/inter_server_authentication_info#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryInterServerAuthenticationInfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_inter_server_authentication_info", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/inter_server_authentication_info pingdirectory_inter_server_authentication_info} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryInterServerAuthenticationInfoConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryInterServerAuthenticationInfoConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_inter_server_authentication_info',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
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
    this._serverInstanceListenerName = config.serverInstanceListenerName;
    this._serverInstanceName = config.serverInstanceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // bind_dn - computed: true, optional: false, required: false
  public get bindDn() {
    return this.getStringAttribute('bind_dn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // purpose - computed: true, optional: false, required: false
  public get purpose() {
    return cdktf.Fn.tolist(this.getListAttribute('purpose'));
  }

  // server_instance_listener_name - computed: false, optional: false, required: true
  private _serverInstanceListenerName?: string; 
  public get serverInstanceListenerName() {
    return this.getStringAttribute('server_instance_listener_name');
  }
  public set serverInstanceListenerName(value: string) {
    this._serverInstanceListenerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInstanceListenerNameInput() {
    return this._serverInstanceListenerName;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
      name: cdktf.stringToTerraform(this._name),
      server_instance_listener_name: cdktf.stringToTerraform(this._serverInstanceListenerName),
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
      server_instance_listener_name: {
        value: cdktf.stringToHclTerraform(this._serverInstanceListenerName),
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
