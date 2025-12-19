// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_scaleout_infrastructure_service_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpServerEnableTrapsScaleoutInfrastructureServiceNodeAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_scaleout_infrastructure_service_node#id SnmpServerEnableTrapsScaleoutInfrastructureServiceNodeA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable local device disabled trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_scaleout_infrastructure_service_node#local_device_disabled SnmpServerEnableTrapsScaleoutInfrastructureServiceNodeA#local_device_disabled}
  */
  readonly localDeviceDisabled?: number;
  /**
  * Enable service-master trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_scaleout_infrastructure_service_node#service_master SnmpServerEnableTrapsScaleoutInfrastructureServiceNodeA#service_master}
  */
  readonly serviceMaster?: number;
  /**
  * Enable traffic map update trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_scaleout_infrastructure_service_node#traffic_map_update SnmpServerEnableTrapsScaleoutInfrastructureServiceNodeA#traffic_map_update}
  */
  readonly trafficMapUpdate?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_scaleout_infrastructure_service_node#uuid SnmpServerEnableTrapsScaleoutInfrastructureServiceNodeA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_scaleout_infrastructure_service_node thunder_snmp_server_enable_traps_scaleout_infrastructure_service_node}
*/
export class SnmpServerEnableTrapsScaleoutInfrastructureServiceNodeA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_snmp_server_enable_traps_scaleout_infrastructure_service_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpServerEnableTrapsScaleoutInfrastructureServiceNodeA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpServerEnableTrapsScaleoutInfrastructureServiceNodeA to import
  * @param importFromId The id of the existing SnmpServerEnableTrapsScaleoutInfrastructureServiceNodeA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_scaleout_infrastructure_service_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpServerEnableTrapsScaleoutInfrastructureServiceNodeA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_snmp_server_enable_traps_scaleout_infrastructure_service_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_scaleout_infrastructure_service_node thunder_snmp_server_enable_traps_scaleout_infrastructure_service_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpServerEnableTrapsScaleoutInfrastructureServiceNodeAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnmpServerEnableTrapsScaleoutInfrastructureServiceNodeAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_snmp_server_enable_traps_scaleout_infrastructure_service_node',
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
    this._localDeviceDisabled = config.localDeviceDisabled;
    this._serviceMaster = config.serviceMaster;
    this._trafficMapUpdate = config.trafficMapUpdate;
    this._uuid = config.uuid;
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

  // local_device_disabled - computed: false, optional: true, required: false
  private _localDeviceDisabled?: number; 
  public get localDeviceDisabled() {
    return this.getNumberAttribute('local_device_disabled');
  }
  public set localDeviceDisabled(value: number) {
    this._localDeviceDisabled = value;
  }
  public resetLocalDeviceDisabled() {
    this._localDeviceDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDeviceDisabledInput() {
    return this._localDeviceDisabled;
  }

  // service_master - computed: false, optional: true, required: false
  private _serviceMaster?: number; 
  public get serviceMaster() {
    return this.getNumberAttribute('service_master');
  }
  public set serviceMaster(value: number) {
    this._serviceMaster = value;
  }
  public resetServiceMaster() {
    this._serviceMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMasterInput() {
    return this._serviceMaster;
  }

  // traffic_map_update - computed: false, optional: true, required: false
  private _trafficMapUpdate?: number; 
  public get trafficMapUpdate() {
    return this.getNumberAttribute('traffic_map_update');
  }
  public set trafficMapUpdate(value: number) {
    this._trafficMapUpdate = value;
  }
  public resetTrafficMapUpdate() {
    this._trafficMapUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficMapUpdateInput() {
    return this._trafficMapUpdate;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      local_device_disabled: cdktf.numberToTerraform(this._localDeviceDisabled),
      service_master: cdktf.numberToTerraform(this._serviceMaster),
      traffic_map_update: cdktf.numberToTerraform(this._trafficMapUpdate),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      local_device_disabled: {
        value: cdktf.numberToHclTerraform(this._localDeviceDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_master: {
        value: cdktf.numberToHclTerraform(this._serviceMaster),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      traffic_map_update: {
        value: cdktf.numberToHclTerraform(this._trafficMapUpdate),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
