// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_placement_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmPlacementPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the VM Placement Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_placement_policy#description VmPlacementPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_placement_policy#id VmPlacementPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IDs of one or more Logical VM Groups to define this VM Placement Policy. There is an AND relationship among all the entries set in this attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_placement_policy#logical_vm_group_ids VmPlacementPolicy#logical_vm_group_ids}
  */
  readonly logicalVmGroupIds?: string[];
  /**
  * Name of the VM Placement Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_placement_policy#name VmPlacementPolicy#name}
  */
  readonly name: string;
  /**
  * ID of the Provider VDC to which the VM Placement Policy belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_placement_policy#provider_vdc_id VmPlacementPolicy#provider_vdc_id}
  */
  readonly providerVdcId: string;
  /**
  * IDs of the collection of VMs with similar host requirements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_placement_policy#vm_group_ids VmPlacementPolicy#vm_group_ids}
  */
  readonly vmGroupIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_placement_policy vcd_vm_placement_policy}
*/
export class VmPlacementPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_vm_placement_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VmPlacementPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VmPlacementPolicy to import
  * @param importFromId The id of the existing VmPlacementPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_placement_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VmPlacementPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_vm_placement_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_placement_policy vcd_vm_placement_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmPlacementPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: VmPlacementPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_vm_placement_policy',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
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
    this._logicalVmGroupIds = config.logicalVmGroupIds;
    this._name = config.name;
    this._providerVdcId = config.providerVdcId;
    this._vmGroupIds = config.vmGroupIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // logical_vm_group_ids - computed: false, optional: true, required: false
  private _logicalVmGroupIds?: string[]; 
  public get logicalVmGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('logical_vm_group_ids'));
  }
  public set logicalVmGroupIds(value: string[]) {
    this._logicalVmGroupIds = value;
  }
  public resetLogicalVmGroupIds() {
    this._logicalVmGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalVmGroupIdsInput() {
    return this._logicalVmGroupIds;
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

  // provider_vdc_id - computed: false, optional: false, required: true
  private _providerVdcId?: string; 
  public get providerVdcId() {
    return this.getStringAttribute('provider_vdc_id');
  }
  public set providerVdcId(value: string) {
    this._providerVdcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerVdcIdInput() {
    return this._providerVdcId;
  }

  // vm_group_ids - computed: false, optional: true, required: false
  private _vmGroupIds?: string[]; 
  public get vmGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vm_group_ids'));
  }
  public set vmGroupIds(value: string[]) {
    this._vmGroupIds = value;
  }
  public resetVmGroupIds() {
    this._vmGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmGroupIdsInput() {
    return this._vmGroupIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      logical_vm_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._logicalVmGroupIds),
      name: cdktf.stringToTerraform(this._name),
      provider_vdc_id: cdktf.stringToTerraform(this._providerVdcId),
      vm_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vmGroupIds),
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
      logical_vm_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._logicalVmGroupIds),
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
      provider_vdc_id: {
        value: cdktf.stringToHclTerraform(this._providerVdcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vmGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
