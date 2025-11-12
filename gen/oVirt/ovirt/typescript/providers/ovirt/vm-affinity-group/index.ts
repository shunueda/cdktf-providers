// https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm_affinity_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmAffinityGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the oVirt affinity group to assign the VM to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm_affinity_group#affinity_group_id VmAffinityGroup#affinity_group_id}
  */
  readonly affinityGroupId: string;
  /**
  * ID of the oVirt cluster the VM is in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm_affinity_group#cluster_id VmAffinityGroup#cluster_id}
  */
  readonly clusterId: string;
  /**
  * ID of the oVirt VM to assign to the affinity group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm_affinity_group#vm_id VmAffinityGroup#vm_id}
  */
  readonly vmId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm_affinity_group ovirt_vm_affinity_group}
*/
export class VmAffinityGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovirt_vm_affinity_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VmAffinityGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VmAffinityGroup to import
  * @param importFromId The id of the existing VmAffinityGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm_affinity_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VmAffinityGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovirt_vm_affinity_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs/resources/vm_affinity_group ovirt_vm_affinity_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmAffinityGroupConfig
  */
  public constructor(scope: Construct, id: string, config: VmAffinityGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'ovirt_vm_affinity_group',
      terraformGeneratorMetadata: {
        providerName: 'ovirt',
        providerVersion: '2.1.5',
        providerVersionConstraint: '2.1.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._affinityGroupId = config.affinityGroupId;
    this._clusterId = config.clusterId;
    this._vmId = config.vmId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // affinity_group_id - computed: false, optional: false, required: true
  private _affinityGroupId?: string; 
  public get affinityGroupId() {
    return this.getStringAttribute('affinity_group_id');
  }
  public set affinityGroupId(value: string) {
    this._affinityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityGroupIdInput() {
    return this._affinityGroupId;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // vm_id - computed: false, optional: false, required: true
  private _vmId?: string; 
  public get vmId() {
    return this.getStringAttribute('vm_id');
  }
  public set vmId(value: string) {
    this._vmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIdInput() {
    return this._vmId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      affinity_group_id: cdktf.stringToTerraform(this._affinityGroupId),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      vm_id: cdktf.stringToTerraform(this._vmId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      affinity_group_id: {
        value: cdktf.stringToHclTerraform(this._affinityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_id: {
        value: cdktf.stringToHclTerraform(this._vmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
