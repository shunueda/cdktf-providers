// https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/region
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RegionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Region description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/region#description Region#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/region#id Region#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/region#name Region#name}
  */
  readonly name: string;
  /**
  * NSX Manager ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/region#nsx_manager_id Region#nsx_manager_id}
  */
  readonly nsxManagerId: string;
  /**
  * A set of storage policy names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/region#storage_policy_names Region#storage_policy_names}
  */
  readonly storagePolicyNames: string[];
  /**
  * A set of supervisor IDs used in this Region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/region#supervisor_ids Region#supervisor_ids}
  */
  readonly supervisorIds: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/region vcfa_region}
*/
export class Region extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcfa_region";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Region resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Region to import
  * @param importFromId The id of the existing Region that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/region#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Region to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcfa_region", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/region vcfa_region} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RegionConfig
  */
  public constructor(scope: Construct, id: string, config: RegionConfig) {
    super(scope, id, {
      terraformResourceType: 'vcfa_region',
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
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._nsxManagerId = config.nsxManagerId;
    this._storagePolicyNames = config.storagePolicyNames;
    this._supervisorIds = config.supervisorIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu_capacity_mhz - computed: true, optional: false, required: false
  public get cpuCapacityMhz() {
    return this.getNumberAttribute('cpu_capacity_mhz');
  }

  // cpu_reservation_capacity_mhz - computed: true, optional: false, required: false
  public get cpuReservationCapacityMhz() {
    return this.getNumberAttribute('cpu_reservation_capacity_mhz');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // memory_reservation_capacity_mib - computed: true, optional: false, required: false
  public get memoryReservationCapacityMib() {
    return this.getNumberAttribute('memory_reservation_capacity_mib');
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

  // nsx_manager_id - computed: false, optional: false, required: true
  private _nsxManagerId?: string; 
  public get nsxManagerId() {
    return this.getStringAttribute('nsx_manager_id');
  }
  public set nsxManagerId(value: string) {
    this._nsxManagerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxManagerIdInput() {
    return this._nsxManagerId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_policy_names - computed: false, optional: false, required: true
  private _storagePolicyNames?: string[]; 
  public get storagePolicyNames() {
    return cdktf.Fn.tolist(this.getListAttribute('storage_policy_names'));
  }
  public set storagePolicyNames(value: string[]) {
    this._storagePolicyNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePolicyNamesInput() {
    return this._storagePolicyNames;
  }

  // supervisor_ids - computed: false, optional: false, required: true
  private _supervisorIds?: string[]; 
  public get supervisorIds() {
    return cdktf.Fn.tolist(this.getListAttribute('supervisor_ids'));
  }
  public set supervisorIds(value: string[]) {
    this._supervisorIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supervisorIdsInput() {
    return this._supervisorIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      nsx_manager_id: cdktf.stringToTerraform(this._nsxManagerId),
      storage_policy_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._storagePolicyNames),
      supervisor_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._supervisorIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsx_manager_id: {
        value: cdktf.stringToHclTerraform(this._nsxManagerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_policy_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._storagePolicyNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      supervisor_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._supervisorIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
