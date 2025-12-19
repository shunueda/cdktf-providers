// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_scaleout_infrastructure_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpServerEnableTrapsScaleoutInfrastructureClusterAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable election status trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_scaleout_infrastructure_cluster#election SnmpServerEnableTrapsScaleoutInfrastructureClusterA#election}
  */
  readonly election?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_scaleout_infrastructure_cluster#id SnmpServerEnableTrapsScaleoutInfrastructureClusterA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable re-election trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_scaleout_infrastructure_cluster#master_calling_re_election SnmpServerEnableTrapsScaleoutInfrastructureClusterA#master_calling_re_election}
  */
  readonly masterCallingReElection?: number;
  /**
  * Enable active node status trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_scaleout_infrastructure_cluster#node_status SnmpServerEnableTrapsScaleoutInfrastructureClusterA#node_status}
  */
  readonly nodeStatus?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_scaleout_infrastructure_cluster#uuid SnmpServerEnableTrapsScaleoutInfrastructureClusterA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_scaleout_infrastructure_cluster thunder_snmp_server_enable_traps_scaleout_infrastructure_cluster}
*/
export class SnmpServerEnableTrapsScaleoutInfrastructureClusterA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_snmp_server_enable_traps_scaleout_infrastructure_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpServerEnableTrapsScaleoutInfrastructureClusterA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpServerEnableTrapsScaleoutInfrastructureClusterA to import
  * @param importFromId The id of the existing SnmpServerEnableTrapsScaleoutInfrastructureClusterA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_scaleout_infrastructure_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpServerEnableTrapsScaleoutInfrastructureClusterA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_snmp_server_enable_traps_scaleout_infrastructure_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_enable_traps_scaleout_infrastructure_cluster thunder_snmp_server_enable_traps_scaleout_infrastructure_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpServerEnableTrapsScaleoutInfrastructureClusterAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnmpServerEnableTrapsScaleoutInfrastructureClusterAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_snmp_server_enable_traps_scaleout_infrastructure_cluster',
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
    this._election = config.election;
    this._id = config.id;
    this._masterCallingReElection = config.masterCallingReElection;
    this._nodeStatus = config.nodeStatus;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // election - computed: false, optional: true, required: false
  private _election?: number; 
  public get election() {
    return this.getNumberAttribute('election');
  }
  public set election(value: number) {
    this._election = value;
  }
  public resetElection() {
    this._election = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electionInput() {
    return this._election;
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

  // master_calling_re_election - computed: false, optional: true, required: false
  private _masterCallingReElection?: number; 
  public get masterCallingReElection() {
    return this.getNumberAttribute('master_calling_re_election');
  }
  public set masterCallingReElection(value: number) {
    this._masterCallingReElection = value;
  }
  public resetMasterCallingReElection() {
    this._masterCallingReElection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterCallingReElectionInput() {
    return this._masterCallingReElection;
  }

  // node_status - computed: false, optional: true, required: false
  private _nodeStatus?: number; 
  public get nodeStatus() {
    return this.getNumberAttribute('node_status');
  }
  public set nodeStatus(value: number) {
    this._nodeStatus = value;
  }
  public resetNodeStatus() {
    this._nodeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStatusInput() {
    return this._nodeStatus;
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
      election: cdktf.numberToTerraform(this._election),
      id: cdktf.stringToTerraform(this._id),
      master_calling_re_election: cdktf.numberToTerraform(this._masterCallingReElection),
      node_status: cdktf.numberToTerraform(this._nodeStatus),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      election: {
        value: cdktf.numberToHclTerraform(this._election),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_calling_re_election: {
        value: cdktf.numberToHclTerraform(this._masterCallingReElection),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_status: {
        value: cdktf.numberToHclTerraform(this._nodeStatus),
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
