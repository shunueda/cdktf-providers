// https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/resources/virtual_environment_dns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualEnvironmentDnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The DNS search domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/resources/virtual_environment_dns#domain VirtualEnvironmentDns#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/resources/virtual_environment_dns#id VirtualEnvironmentDns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The node name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/resources/virtual_environment_dns#node_name VirtualEnvironmentDns#node_name}
  */
  readonly nodeName: string;
  /**
  * The DNS servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/resources/virtual_environment_dns#servers VirtualEnvironmentDns#servers}
  */
  readonly servers?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/resources/virtual_environment_dns proxmox_virtual_environment_dns}
*/
export class VirtualEnvironmentDns extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_dns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualEnvironmentDns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualEnvironmentDns to import
  * @param importFromId The id of the existing VirtualEnvironmentDns that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/resources/virtual_environment_dns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualEnvironmentDns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_dns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/resources/virtual_environment_dns proxmox_virtual_environment_dns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualEnvironmentDnsConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualEnvironmentDnsConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_dns',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.89.1',
        providerVersionConstraint: '0.89.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._id = config.id;
    this._nodeName = config.nodeName;
    this._servers = config.servers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // node_name - computed: false, optional: false, required: true
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // servers - computed: false, optional: true, required: false
  private _servers?: string[]; 
  public get servers() {
    return this.getListAttribute('servers');
  }
  public set servers(value: string[]) {
    this._servers = value;
  }
  public resetServers() {
    this._servers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      node_name: cdktf.stringToTerraform(this._nodeName),
      servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._servers),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_name: {
        value: cdktf.stringToHclTerraform(this._nodeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._servers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
