// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_uninstall_software_package
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementUninstallSoftwarePackageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Installation settings for cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_uninstall_software_package#cluster_installation_settings ManagementUninstallSoftwarePackage#cluster_installation_settings}
  */
  readonly clusterInstallationSettings?: { [key: string]: string };
  /**
  * The number of targets, on which the same package is installed at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_uninstall_software_package#concurrency_limit ManagementUninstallSoftwarePackage#concurrency_limit}
  */
  readonly concurrencyLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_uninstall_software_package#id ManagementUninstallSoftwarePackage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the software package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_uninstall_software_package#name ManagementUninstallSoftwarePackage#name}
  */
  readonly name: string;
  /**
  * On what targets to execute this command. Targets may be identified by their name, or object unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_uninstall_software_package#targets ManagementUninstallSoftwarePackage#targets}
  */
  readonly targets: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_uninstall_software_package checkpoint_management_uninstall_software_package}
*/
export class ManagementUninstallSoftwarePackage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_uninstall_software_package";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementUninstallSoftwarePackage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementUninstallSoftwarePackage to import
  * @param importFromId The id of the existing ManagementUninstallSoftwarePackage that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_uninstall_software_package#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementUninstallSoftwarePackage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_uninstall_software_package", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_uninstall_software_package checkpoint_management_uninstall_software_package} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementUninstallSoftwarePackageConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementUninstallSoftwarePackageConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_uninstall_software_package',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterInstallationSettings = config.clusterInstallationSettings;
    this._concurrencyLimit = config.concurrencyLimit;
    this._id = config.id;
    this._name = config.name;
    this._targets = config.targets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_installation_settings - computed: false, optional: true, required: false
  private _clusterInstallationSettings?: { [key: string]: string }; 
  public get clusterInstallationSettings() {
    return this.getStringMapAttribute('cluster_installation_settings');
  }
  public set clusterInstallationSettings(value: { [key: string]: string }) {
    this._clusterInstallationSettings = value;
  }
  public resetClusterInstallationSettings() {
    this._clusterInstallationSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInstallationSettingsInput() {
    return this._clusterInstallationSettings;
  }

  // concurrency_limit - computed: false, optional: true, required: false
  private _concurrencyLimit?: number; 
  public get concurrencyLimit() {
    return this.getNumberAttribute('concurrency_limit');
  }
  public set concurrencyLimit(value: number) {
    this._concurrencyLimit = value;
  }
  public resetConcurrencyLimit() {
    this._concurrencyLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyLimitInput() {
    return this._concurrencyLimit;
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

  // targets - computed: false, optional: false, required: true
  private _targets?: string[]; 
  public get targets() {
    return cdktf.Fn.tolist(this.getListAttribute('targets'));
  }
  public set targets(value: string[]) {
    this._targets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets;
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_installation_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._clusterInstallationSettings),
      concurrency_limit: cdktf.numberToTerraform(this._concurrencyLimit),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      targets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targets),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_installation_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._clusterInstallationSettings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      concurrency_limit: {
        value: cdktf.numberToHclTerraform(this._concurrencyLimit),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      targets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
