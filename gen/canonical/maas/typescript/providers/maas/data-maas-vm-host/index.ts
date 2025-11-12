// https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/data-sources/vm_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMaasVmHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/data-sources/vm_host#id DataMaasVmHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The VM host name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/data-sources/vm_host#name DataMaasVmHost#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/data-sources/vm_host maas_vm_host}
*/
export class DataMaasVmHost extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "maas_vm_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMaasVmHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMaasVmHost to import
  * @param importFromId The id of the existing DataMaasVmHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/data-sources/vm_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMaasVmHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "maas_vm_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/data-sources/vm_host maas_vm_host} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMaasVmHostConfig
  */
  public constructor(scope: Construct, id: string, config: DataMaasVmHostConfig) {
    super(scope, id, {
      terraformResourceType: 'maas_vm_host',
      terraformGeneratorMetadata: {
        providerName: 'maas',
        providerVersion: '2.6.0',
        providerVersionConstraint: '2.6.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // cpu_over_commit_ratio - computed: true, optional: false, required: false
  public get cpuOverCommitRatio() {
    return this.getNumberAttribute('cpu_over_commit_ratio');
  }

  // default_macvlan_mode - computed: true, optional: false, required: false
  public get defaultMacvlanMode() {
    return this.getStringAttribute('default_macvlan_mode');
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

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // memory_over_commit_ratio - computed: true, optional: false, required: false
  public get memoryOverCommitRatio() {
    return this.getNumberAttribute('memory_over_commit_ratio');
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

  // pool - computed: true, optional: false, required: false
  public get pool() {
    return this.getStringAttribute('pool');
  }

  // power_address - computed: true, optional: false, required: false
  public get powerAddress() {
    return this.getStringAttribute('power_address');
  }

  // power_pass - computed: true, optional: false, required: false
  public get powerPass() {
    return this.getStringAttribute('power_pass');
  }

  // power_user - computed: true, optional: false, required: false
  public get powerUser() {
    return this.getStringAttribute('power_user');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }

  // resources_cores_total - computed: true, optional: false, required: false
  public get resourcesCoresTotal() {
    return this.getNumberAttribute('resources_cores_total');
  }

  // resources_local_storage_total - computed: true, optional: false, required: false
  public get resourcesLocalStorageTotal() {
    return this.getNumberAttribute('resources_local_storage_total');
  }

  // resources_memory_total - computed: true, optional: false, required: false
  public get resourcesMemoryTotal() {
    return this.getNumberAttribute('resources_memory_total');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
