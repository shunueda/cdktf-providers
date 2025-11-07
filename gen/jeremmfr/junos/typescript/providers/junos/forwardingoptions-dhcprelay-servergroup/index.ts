// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_servergroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ForwardingoptionsDhcprelayServergroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * IP Addresses of DHCP servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_servergroup#ip_address ForwardingoptionsDhcprelayServergroup#ip_address}
  */
  readonly ipAddress?: string[];
  /**
  * Server group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_servergroup#name ForwardingoptionsDhcprelayServergroup#name}
  */
  readonly name: string;
  /**
  * Routing instance if not root level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_servergroup#routing_instance ForwardingoptionsDhcprelayServergroup#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Version for DHCP or DHCPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_servergroup#version ForwardingoptionsDhcprelayServergroup#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_servergroup junos_forwardingoptions_dhcprelay_servergroup}
*/
export class ForwardingoptionsDhcprelayServergroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_forwardingoptions_dhcprelay_servergroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ForwardingoptionsDhcprelayServergroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ForwardingoptionsDhcprelayServergroup to import
  * @param importFromId The id of the existing ForwardingoptionsDhcprelayServergroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_servergroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ForwardingoptionsDhcprelayServergroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_forwardingoptions_dhcprelay_servergroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/forwardingoptions_dhcprelay_servergroup junos_forwardingoptions_dhcprelay_servergroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ForwardingoptionsDhcprelayServergroupConfig
  */
  public constructor(scope: Construct, id: string, config: ForwardingoptionsDhcprelayServergroupConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_forwardingoptions_dhcprelay_servergroup',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ipAddress = config.ipAddress;
    this._name = config.name;
    this._routingInstance = config.routingInstance;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string[]; 
  public get ipAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_address'));
  }
  public set ipAddress(value: string[]) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
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

  // routing_instance - computed: true, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ip_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipAddress),
      name: cdktf.stringToTerraform(this._name),
      routing_instance: cdktf.stringToTerraform(this._routingInstance),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ip_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipAddress),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_instance: {
        value: cdktf.stringToHclTerraform(this._routingInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
