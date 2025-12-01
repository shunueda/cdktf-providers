// https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/data-sources/virtual_environment_metrics_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProxmoxVirtualEnvironmentMetricsServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique name that will be ID of this metric server in PVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/data-sources/virtual_environment_metrics_server#name DataProxmoxVirtualEnvironmentMetricsServer#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/data-sources/virtual_environment_metrics_server proxmox_virtual_environment_metrics_server}
*/
export class DataProxmoxVirtualEnvironmentMetricsServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_metrics_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProxmoxVirtualEnvironmentMetricsServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProxmoxVirtualEnvironmentMetricsServer to import
  * @param importFromId The id of the existing DataProxmoxVirtualEnvironmentMetricsServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/data-sources/virtual_environment_metrics_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProxmoxVirtualEnvironmentMetricsServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_metrics_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/data-sources/virtual_environment_metrics_server proxmox_virtual_environment_metrics_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProxmoxVirtualEnvironmentMetricsServerConfig
  */
  public constructor(scope: Construct, id: string, config: DataProxmoxVirtualEnvironmentMetricsServerConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_metrics_server',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.88.0',
        providerVersionConstraint: '0.88.0'
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

  // disable - computed: true, optional: false, required: false
  public get disable() {
    return this.getBooleanAttribute('disable');
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

  // opentelemetry_path - computed: true, optional: false, required: false
  public get opentelemetryPath() {
    return this.getStringAttribute('opentelemetry_path');
  }

  // opentelemetry_proto - computed: true, optional: false, required: false
  public get opentelemetryProto() {
    return this.getStringAttribute('opentelemetry_proto');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
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
