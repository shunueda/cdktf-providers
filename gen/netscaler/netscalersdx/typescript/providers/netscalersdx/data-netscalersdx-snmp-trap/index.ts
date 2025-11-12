// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/snmp_trap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetscalersdxSnmpTrapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Trap Destination Server Address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/snmp_trap#dest_server DataNetscalersdxSnmpTrap#dest_server}
  */
  readonly destServer?: string;
  /**
  * The ID of this data source. It is the same as the dest_server value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/snmp_trap#id DataNetscalersdxSnmpTrap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/snmp_trap netscalersdx_snmp_trap}
*/
export class DataNetscalersdxSnmpTrap extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_snmp_trap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetscalersdxSnmpTrap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetscalersdxSnmpTrap to import
  * @param importFromId The id of the existing DataNetscalersdxSnmpTrap that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/snmp_trap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetscalersdxSnmpTrap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_snmp_trap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/snmp_trap netscalersdx_snmp_trap} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetscalersdxSnmpTrapConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNetscalersdxSnmpTrapConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_snmp_trap',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2',
        providerVersionConstraint: '0.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destServer = config.destServer;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // community - computed: true, optional: false, required: false
  public get community() {
    return this.getStringAttribute('community');
  }

  // dest_port - computed: true, optional: false, required: false
  public get destPort() {
    return this.getNumberAttribute('dest_port');
  }

  // dest_server - computed: true, optional: true, required: false
  private _destServer?: string; 
  public get destServer() {
    return this.getStringAttribute('dest_server');
  }
  public set destServer(value: string) {
    this._destServer = value;
  }
  public resetDestServer() {
    this._destServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destServerInput() {
    return this._destServer;
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

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getListAttribute('user_name');
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
      dest_server: cdktf.stringToTerraform(this._destServer),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dest_server: {
        value: cdktf.stringToHclTerraform(this._destServer),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
