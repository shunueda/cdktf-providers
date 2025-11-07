// https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_class
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTanzuMissionControlClusterClassConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_class#id DataTanzuMissionControlClusterClass#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Management cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_class#management_cluster_name DataTanzuMissionControlClusterClass#management_cluster_name}
  */
  readonly managementClusterName: string;
  /**
  * Cluster class name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_class#name DataTanzuMissionControlClusterClass#name}
  */
  readonly name: string;
  /**
  * Cluster provisioner name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_class#provisioner_name DataTanzuMissionControlClusterClass#provisioner_name}
  */
  readonly provisionerName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_class tanzu-mission-control_cluster_class}
*/
export class DataTanzuMissionControlClusterClass extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tanzu-mission-control_cluster_class";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTanzuMissionControlClusterClass resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTanzuMissionControlClusterClass to import
  * @param importFromId The id of the existing DataTanzuMissionControlClusterClass that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_class#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTanzuMissionControlClusterClass to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tanzu-mission-control_cluster_class", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/cluster_class tanzu-mission-control_cluster_class} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTanzuMissionControlClusterClassConfig
  */
  public constructor(scope: Construct, id: string, config: DataTanzuMissionControlClusterClassConfig) {
    super(scope, id, {
      terraformResourceType: 'tanzu-mission-control_cluster_class',
      terraformGeneratorMetadata: {
        providerName: 'tanzu-mission-control',
        providerVersion: '1.4.9'
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
    this._managementClusterName = config.managementClusterName;
    this._name = config.name;
    this._provisionerName = config.provisionerName;
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

  // management_cluster_name - computed: false, optional: false, required: true
  private _managementClusterName?: string; 
  public get managementClusterName() {
    return this.getStringAttribute('management_cluster_name');
  }
  public set managementClusterName(value: string) {
    this._managementClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementClusterNameInput() {
    return this._managementClusterName;
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

  // provisioner_name - computed: false, optional: false, required: true
  private _provisionerName?: string; 
  public get provisionerName() {
    return this.getStringAttribute('provisioner_name');
  }
  public set provisionerName(value: string) {
    this._provisionerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerNameInput() {
    return this._provisionerName;
  }

  // variables_schema - computed: true, optional: false, required: false
  public get variablesSchema() {
    return this.getStringAttribute('variables_schema');
  }

  // variables_template - computed: true, optional: false, required: false
  public get variablesTemplate() {
    return this.getStringAttribute('variables_template');
  }

  // worker_classes - computed: true, optional: false, required: false
  public get workerClasses() {
    return this.getListAttribute('worker_classes');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      management_cluster_name: cdktf.stringToTerraform(this._managementClusterName),
      name: cdktf.stringToTerraform(this._name),
      provisioner_name: cdktf.stringToTerraform(this._provisionerName),
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
      management_cluster_name: {
        value: cdktf.stringToHclTerraform(this._managementClusterName),
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
      provisioner_name: {
        value: cdktf.stringToHclTerraform(this._provisionerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
