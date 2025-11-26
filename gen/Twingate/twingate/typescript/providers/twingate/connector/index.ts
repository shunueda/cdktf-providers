// https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the Connector, if not provided one will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/connector#name Connector#name}
  */
  readonly name?: string;
  /**
  * The ID of the Remote Network the Connector is attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/connector#remote_network_id Connector#remote_network_id}
  */
  readonly remoteNetworkId: string;
  /**
  * Determines whether status notifications are enabled for the Connector. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/connector#status_updates_enabled Connector#status_updates_enabled}
  */
  readonly statusUpdatesEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/connector twingate_connector}
*/
export class Connector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twingate_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Connector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Connector to import
  * @param importFromId The id of the existing Connector that should be imported. Refer to the {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Connector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twingate_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twingate/twingate/3.6.0/docs/resources/connector twingate_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'twingate_connector',
      terraformGeneratorMetadata: {
        providerName: 'twingate',
        providerVersion: '3.6.0',
        providerVersionConstraint: '3.6.0'
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
    this._remoteNetworkId = config.remoteNetworkId;
    this._statusUpdatesEnabled = config.statusUpdatesEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // private_ips - computed: true, optional: false, required: false
  public get privateIps() {
    return cdktf.Fn.tolist(this.getListAttribute('private_ips'));
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // remote_network_id - computed: false, optional: false, required: true
  private _remoteNetworkId?: string; 
  public get remoteNetworkId() {
    return this.getStringAttribute('remote_network_id');
  }
  public set remoteNetworkId(value: string) {
    this._remoteNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteNetworkIdInput() {
    return this._remoteNetworkId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status_updates_enabled - computed: true, optional: true, required: false
  private _statusUpdatesEnabled?: boolean | cdktf.IResolvable; 
  public get statusUpdatesEnabled() {
    return this.getBooleanAttribute('status_updates_enabled');
  }
  public set statusUpdatesEnabled(value: boolean | cdktf.IResolvable) {
    this._statusUpdatesEnabled = value;
  }
  public resetStatusUpdatesEnabled() {
    this._statusUpdatesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusUpdatesEnabledInput() {
    return this._statusUpdatesEnabled;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      remote_network_id: cdktf.stringToTerraform(this._remoteNetworkId),
      status_updates_enabled: cdktf.booleanToTerraform(this._statusUpdatesEnabled),
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
      remote_network_id: {
        value: cdktf.stringToHclTerraform(this._remoteNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_updates_enabled: {
        value: cdktf.booleanToHclTerraform(this._statusUpdatesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
