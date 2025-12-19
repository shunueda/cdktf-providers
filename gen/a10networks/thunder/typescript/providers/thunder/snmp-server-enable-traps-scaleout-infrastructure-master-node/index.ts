// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_scaleout_infrastructure_master_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpServerEnableTrapsScaleoutInfrastructureMasterNodeAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_scaleout_infrastructure_master_node#id SnmpServerEnableTrapsScaleoutInfrastructureMasterNodeA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable Traffic-map distribution trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_scaleout_infrastructure_master_node#traffic_map_distribution SnmpServerEnableTrapsScaleoutInfrastructureMasterNodeA#traffic_map_distribution}
  */
  readonly trafficMapDistribution?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_scaleout_infrastructure_master_node#uuid SnmpServerEnableTrapsScaleoutInfrastructureMasterNodeA#uuid}
  */
  readonly uuid?: string;
  /**
  * Enable VServer Traffic-map trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_scaleout_infrastructure_master_node#vserver_traffic_map_update SnmpServerEnableTrapsScaleoutInfrastructureMasterNodeA#vserver_traffic_map_update}
  */
  readonly vserverTrafficMapUpdate?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_scaleout_infrastructure_master_node thunder_snmp_server_enable_traps_scaleout_infrastructure_master_node}
*/
export class SnmpServerEnableTrapsScaleoutInfrastructureMasterNodeA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_snmp_server_enable_traps_scaleout_infrastructure_master_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpServerEnableTrapsScaleoutInfrastructureMasterNodeA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpServerEnableTrapsScaleoutInfrastructureMasterNodeA to import
  * @param importFromId The id of the existing SnmpServerEnableTrapsScaleoutInfrastructureMasterNodeA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_scaleout_infrastructure_master_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpServerEnableTrapsScaleoutInfrastructureMasterNodeA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_snmp_server_enable_traps_scaleout_infrastructure_master_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_scaleout_infrastructure_master_node thunder_snmp_server_enable_traps_scaleout_infrastructure_master_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpServerEnableTrapsScaleoutInfrastructureMasterNodeAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnmpServerEnableTrapsScaleoutInfrastructureMasterNodeAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_snmp_server_enable_traps_scaleout_infrastructure_master_node',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
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
    this._id = config.id;
    this._trafficMapDistribution = config.trafficMapDistribution;
    this._uuid = config.uuid;
    this._vserverTrafficMapUpdate = config.vserverTrafficMapUpdate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // traffic_map_distribution - computed: false, optional: true, required: false
  private _trafficMapDistribution?: number; 
  public get trafficMapDistribution() {
    return this.getNumberAttribute('traffic_map_distribution');
  }
  public set trafficMapDistribution(value: number) {
    this._trafficMapDistribution = value;
  }
  public resetTrafficMapDistribution() {
    this._trafficMapDistribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficMapDistributionInput() {
    return this._trafficMapDistribution;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vserver_traffic_map_update - computed: false, optional: true, required: false
  private _vserverTrafficMapUpdate?: number; 
  public get vserverTrafficMapUpdate() {
    return this.getNumberAttribute('vserver_traffic_map_update');
  }
  public set vserverTrafficMapUpdate(value: number) {
    this._vserverTrafficMapUpdate = value;
  }
  public resetVserverTrafficMapUpdate() {
    this._vserverTrafficMapUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vserverTrafficMapUpdateInput() {
    return this._vserverTrafficMapUpdate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      traffic_map_distribution: cdktf.numberToTerraform(this._trafficMapDistribution),
      uuid: cdktf.stringToTerraform(this._uuid),
      vserver_traffic_map_update: cdktf.numberToTerraform(this._vserverTrafficMapUpdate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_map_distribution: {
        value: cdktf.numberToHclTerraform(this._trafficMapDistribution),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vserver_traffic_map_update: {
        value: cdktf.numberToHclTerraform(this._vserverTrafficMapUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
