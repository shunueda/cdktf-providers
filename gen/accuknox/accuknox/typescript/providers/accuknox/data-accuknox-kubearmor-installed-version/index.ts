// https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/data-sources/kubearmor_installed_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAccuknoxKubearmorInstalledVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/data-sources/kubearmor_installed_version#id DataAccuknoxKubearmorInstalledVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/data-sources/kubearmor_installed_version accuknox_kubearmor_installed_version}
*/
export class DataAccuknoxKubearmorInstalledVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "accuknox_kubearmor_installed_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAccuknoxKubearmorInstalledVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAccuknoxKubearmorInstalledVersion to import
  * @param importFromId The id of the existing DataAccuknoxKubearmorInstalledVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/data-sources/kubearmor_installed_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAccuknoxKubearmorInstalledVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "accuknox_kubearmor_installed_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/accuknox/accuknox/1.0.0/docs/data-sources/kubearmor_installed_version accuknox_kubearmor_installed_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAccuknoxKubearmorInstalledVersionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAccuknoxKubearmorInstalledVersionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'accuknox_kubearmor_installed_version',
      terraformGeneratorMetadata: {
        providerName: 'accuknox',
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
