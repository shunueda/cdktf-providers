// https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/data-sources/supervisor_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcfaSupervisorZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/data-sources/supervisor_zone#id DataVcfaSupervisorZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Supervisor Zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/data-sources/supervisor_zone#name DataVcfaSupervisorZone#name}
  */
  readonly name: string;
  /**
  * ID of the Supervisor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/data-sources/supervisor_zone#supervisor_id DataVcfaSupervisorZone#supervisor_id}
  */
  readonly supervisorId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/data-sources/supervisor_zone vcfa_supervisor_zone}
*/
export class DataVcfaSupervisorZone extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcfa_supervisor_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcfaSupervisorZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcfaSupervisorZone to import
  * @param importFromId The id of the existing DataVcfaSupervisorZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/data-sources/supervisor_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcfaSupervisorZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcfa_supervisor_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/data-sources/supervisor_zone vcfa_supervisor_zone} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcfaSupervisorZoneConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcfaSupervisorZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'vcfa_supervisor_zone',
      terraformGeneratorMetadata: {
        providerName: 'vcfa',
        providerVersion: '1.0.0'
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
    this._name = config.name;
    this._supervisorId = config.supervisorId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu_capacity_mhz - computed: true, optional: false, required: false
  public get cpuCapacityMhz() {
    return this.getNumberAttribute('cpu_capacity_mhz');
  }

  // cpu_used_mhz - computed: true, optional: false, required: false
  public get cpuUsedMhz() {
    return this.getNumberAttribute('cpu_used_mhz');
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

  // memory_capacity_mib - computed: true, optional: false, required: false
  public get memoryCapacityMib() {
    return this.getNumberAttribute('memory_capacity_mib');
  }

  // memory_used_mib - computed: true, optional: false, required: false
  public get memoryUsedMib() {
    return this.getNumberAttribute('memory_used_mib');
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

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // supervisor_id - computed: false, optional: false, required: true
  private _supervisorId?: string; 
  public get supervisorId() {
    return this.getStringAttribute('supervisor_id');
  }
  public set supervisorId(value: string) {
    this._supervisorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supervisorIdInput() {
    return this._supervisorId;
  }

  // vcenter_id - computed: true, optional: false, required: false
  public get vcenterId() {
    return this.getStringAttribute('vcenter_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      supervisor_id: cdktf.stringToTerraform(this._supervisorId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supervisor_id: {
        value: cdktf.stringToHclTerraform(this._supervisorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
