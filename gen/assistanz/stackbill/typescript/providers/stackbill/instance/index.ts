// https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance#compute_offering_uuid Instance#compute_offering_uuid}
  */
  readonly computeOfferingUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance#cpu_core Instance#cpu_core}
  */
  readonly cpuCore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance#disk_size Instance#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance#hypervisor_name Instance#hypervisor_name}
  */
  readonly hypervisorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance#id Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance#memory Instance#memory}
  */
  readonly memory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance#name Instance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance#network_uuid Instance#network_uuid}
  */
  readonly networkUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance#security_group_name Instance#security_group_name}
  */
  readonly securityGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance#ssh_key_name Instance#ssh_key_name}
  */
  readonly sshKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance#storage_offering_uuid Instance#storage_offering_uuid}
  */
  readonly storageOfferingUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance#template_uuid Instance#template_uuid}
  */
  readonly templateUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance#zone_uuid Instance#zone_uuid}
  */
  readonly zoneUuid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance stackbill_instance}
*/
export class Instance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackbill_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Instance to import
  * @param importFromId The id of the existing Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackbill_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance stackbill_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'stackbill_instance',
      terraformGeneratorMetadata: {
        providerName: 'stackbill',
        providerVersion: '0.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._computeOfferingUuid = config.computeOfferingUuid;
    this._cpuCore = config.cpuCore;
    this._diskSize = config.diskSize;
    this._hypervisorName = config.hypervisorName;
    this._id = config.id;
    this._memory = config.memory;
    this._name = config.name;
    this._networkUuid = config.networkUuid;
    this._securityGroupName = config.securityGroupName;
    this._sshKeyName = config.sshKeyName;
    this._storageOfferingUuid = config.storageOfferingUuid;
    this._templateUuid = config.templateUuid;
    this._zoneUuid = config.zoneUuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compute_offering_uuid - computed: false, optional: false, required: true
  private _computeOfferingUuid?: string; 
  public get computeOfferingUuid() {
    return this.getStringAttribute('compute_offering_uuid');
  }
  public set computeOfferingUuid(value: string) {
    this._computeOfferingUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeOfferingUuidInput() {
    return this._computeOfferingUuid;
  }

  // cpu_core - computed: false, optional: true, required: false
  private _cpuCore?: string; 
  public get cpuCore() {
    return this.getStringAttribute('cpu_core');
  }
  public set cpuCore(value: string) {
    this._cpuCore = value;
  }
  public resetCpuCore() {
    this._cpuCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCoreInput() {
    return this._cpuCore;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // hypervisor_name - computed: false, optional: true, required: false
  private _hypervisorName?: string; 
  public get hypervisorName() {
    return this.getStringAttribute('hypervisor_name');
  }
  public set hypervisorName(value: string) {
    this._hypervisorName = value;
  }
  public resetHypervisorName() {
    this._hypervisorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorNameInput() {
    return this._hypervisorName;
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

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
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

  // network_uuid - computed: false, optional: false, required: true
  private _networkUuid?: string; 
  public get networkUuid() {
    return this.getStringAttribute('network_uuid');
  }
  public set networkUuid(value: string) {
    this._networkUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkUuidInput() {
    return this._networkUuid;
  }

  // security_group_name - computed: false, optional: true, required: false
  private _securityGroupName?: string; 
  public get securityGroupName() {
    return this.getStringAttribute('security_group_name');
  }
  public set securityGroupName(value: string) {
    this._securityGroupName = value;
  }
  public resetSecurityGroupName() {
    this._securityGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupNameInput() {
    return this._securityGroupName;
  }

  // ssh_key_name - computed: false, optional: true, required: false
  private _sshKeyName?: string; 
  public get sshKeyName() {
    return this.getStringAttribute('ssh_key_name');
  }
  public set sshKeyName(value: string) {
    this._sshKeyName = value;
  }
  public resetSshKeyName() {
    this._sshKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyNameInput() {
    return this._sshKeyName;
  }

  // storage_offering_uuid - computed: false, optional: true, required: false
  private _storageOfferingUuid?: string; 
  public get storageOfferingUuid() {
    return this.getStringAttribute('storage_offering_uuid');
  }
  public set storageOfferingUuid(value: string) {
    this._storageOfferingUuid = value;
  }
  public resetStorageOfferingUuid() {
    this._storageOfferingUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageOfferingUuidInput() {
    return this._storageOfferingUuid;
  }

  // template_uuid - computed: false, optional: false, required: true
  private _templateUuid?: string; 
  public get templateUuid() {
    return this.getStringAttribute('template_uuid');
  }
  public set templateUuid(value: string) {
    this._templateUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateUuidInput() {
    return this._templateUuid;
  }

  // zone_uuid - computed: false, optional: false, required: true
  private _zoneUuid?: string; 
  public get zoneUuid() {
    return this.getStringAttribute('zone_uuid');
  }
  public set zoneUuid(value: string) {
    this._zoneUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneUuidInput() {
    return this._zoneUuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_offering_uuid: cdktf.stringToTerraform(this._computeOfferingUuid),
      cpu_core: cdktf.stringToTerraform(this._cpuCore),
      disk_size: cdktf.numberToTerraform(this._diskSize),
      hypervisor_name: cdktf.stringToTerraform(this._hypervisorName),
      id: cdktf.stringToTerraform(this._id),
      memory: cdktf.stringToTerraform(this._memory),
      name: cdktf.stringToTerraform(this._name),
      network_uuid: cdktf.stringToTerraform(this._networkUuid),
      security_group_name: cdktf.stringToTerraform(this._securityGroupName),
      ssh_key_name: cdktf.stringToTerraform(this._sshKeyName),
      storage_offering_uuid: cdktf.stringToTerraform(this._storageOfferingUuid),
      template_uuid: cdktf.stringToTerraform(this._templateUuid),
      zone_uuid: cdktf.stringToTerraform(this._zoneUuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compute_offering_uuid: {
        value: cdktf.stringToHclTerraform(this._computeOfferingUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_core: {
        value: cdktf.stringToHclTerraform(this._cpuCore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_size: {
        value: cdktf.numberToHclTerraform(this._diskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hypervisor_name: {
        value: cdktf.stringToHclTerraform(this._hypervisorName),
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
      memory: {
        value: cdktf.stringToHclTerraform(this._memory),
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
      network_uuid: {
        value: cdktf.stringToHclTerraform(this._networkUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_name: {
        value: cdktf.stringToHclTerraform(this._securityGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_key_name: {
        value: cdktf.stringToHclTerraform(this._sshKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_offering_uuid: {
        value: cdktf.stringToHclTerraform(this._storageOfferingUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_uuid: {
        value: cdktf.stringToHclTerraform(this._templateUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_uuid: {
        value: cdktf.stringToHclTerraform(this._zoneUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
