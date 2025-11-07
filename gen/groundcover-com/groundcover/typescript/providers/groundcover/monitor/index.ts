// https://registry.terraform.io/providers/groundcover-com/groundcover/1.3.0/docs/resources/monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The monitor definition in YAML format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.3.0/docs/resources/monitor#monitor_yaml Monitor#monitor_yaml}
  */
  readonly monitorYaml: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.3.0/docs/resources/monitor groundcover_monitor}
*/
export class Monitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "groundcover_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Monitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Monitor to import
  * @param importFromId The id of the existing Monitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.3.0/docs/resources/monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Monitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "groundcover_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.3.0/docs/resources/monitor groundcover_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'groundcover_monitor',
      terraformGeneratorMetadata: {
        providerName: 'groundcover',
        providerVersion: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._monitorYaml = config.monitorYaml;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // monitor_yaml - computed: false, optional: false, required: true
  private _monitorYaml?: string; 
  public get monitorYaml() {
    return this.getStringAttribute('monitor_yaml');
  }
  public set monitorYaml(value: string) {
    this._monitorYaml = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorYamlInput() {
    return this._monitorYaml;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      monitor_yaml: cdktf.stringToTerraform(this._monitorYaml),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      monitor_yaml: {
        value: cdktf.stringToHclTerraform(this._monitorYaml),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
