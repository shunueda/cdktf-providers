// https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vm_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies The ID of the hypervisor client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vm_group#client_id VmGroup#client_id}
  */
  readonly clientId: number;
  /**
  * Specifies the company id to which the vm group should be associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vm_group#company_id VmGroup#company_id}
  */
  readonly companyId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vm_group#id VmGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies The ID of the plan that you want to associate with the VM group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vm_group#plan_id VmGroup#plan_id}
  */
  readonly planId: number;
  /**
  * Specifies The Tags that you want to back up in a VM group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vm_group#tags VmGroup#tags}
  */
  readonly tags?: string[];
  /**
  * Specifies The name of the VM group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vm_group#vm_group_name VmGroup#vm_group_name}
  */
  readonly vmGroupName: string;
  /**
  * Specifies The VMs that you want to back up in a VM group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vm_group#vms VmGroup#vms}
  */
  readonly vms?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vm_group commvault_vm_group}
*/
export class VmGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commvault_vm_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VmGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VmGroup to import
  * @param importFromId The id of the existing VmGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vm_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VmGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commvault_vm_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/vm_group commvault_vm_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmGroupConfig
  */
  public constructor(scope: Construct, id: string, config: VmGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'commvault_vm_group',
      terraformGeneratorMetadata: {
        providerName: 'commvault',
        providerVersion: '1.2.10',
        providerVersionConstraint: '1.2.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientId = config.clientId;
    this._companyId = config.companyId;
    this._id = config.id;
    this._planId = config.planId;
    this._tags = config.tags;
    this._vmGroupName = config.vmGroupName;
    this._vms = config.vms;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: false, required: true
  private _clientId?: number; 
  public get clientId() {
    return this.getNumberAttribute('client_id');
  }
  public set clientId(value: number) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // company_id - computed: false, optional: true, required: false
  private _companyId?: number; 
  public get companyId() {
    return this.getNumberAttribute('company_id');
  }
  public set companyId(value: number) {
    this._companyId = value;
  }
  public resetCompanyId() {
    this._companyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyIdInput() {
    return this._companyId;
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

  // plan_id - computed: false, optional: false, required: true
  private _planId?: number; 
  public get planId() {
    return this.getNumberAttribute('plan_id');
  }
  public set planId(value: number) {
    this._planId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planIdInput() {
    return this._planId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vm_group_name - computed: false, optional: false, required: true
  private _vmGroupName?: string; 
  public get vmGroupName() {
    return this.getStringAttribute('vm_group_name');
  }
  public set vmGroupName(value: string) {
    this._vmGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmGroupNameInput() {
    return this._vmGroupName;
  }

  // vms - computed: false, optional: true, required: false
  private _vms?: string[]; 
  public get vms() {
    return cdktf.Fn.tolist(this.getListAttribute('vms'));
  }
  public set vms(value: string[]) {
    this._vms = value;
  }
  public resetVms() {
    this._vms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmsInput() {
    return this._vms;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.numberToTerraform(this._clientId),
      company_id: cdktf.numberToTerraform(this._companyId),
      id: cdktf.stringToTerraform(this._id),
      plan_id: cdktf.numberToTerraform(this._planId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      vm_group_name: cdktf.stringToTerraform(this._vmGroupName),
      vms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vms),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.numberToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      company_id: {
        value: cdktf.numberToHclTerraform(this._companyId),
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
      plan_id: {
        value: cdktf.numberToHclTerraform(this._planId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vm_group_name: {
        value: cdktf.stringToHclTerraform(this._vmGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vms: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vms),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
