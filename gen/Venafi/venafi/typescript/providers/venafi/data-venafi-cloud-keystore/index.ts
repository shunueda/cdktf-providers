// https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/data-sources/cloud_keystore
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVenafiCloudKeystoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the parent Cloud Provider the keystore belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/data-sources/cloud_keystore#cloud_provider_id DataVenafiCloudKeystore#cloud_provider_id}
  */
  readonly cloudProviderId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/data-sources/cloud_keystore#id DataVenafiCloudKeystore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Cloud Keystore to look for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/data-sources/cloud_keystore#name DataVenafiCloudKeystore#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/data-sources/cloud_keystore venafi_cloud_keystore}
*/
export class DataVenafiCloudKeystore extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "venafi_cloud_keystore";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVenafiCloudKeystore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVenafiCloudKeystore to import
  * @param importFromId The id of the existing DataVenafiCloudKeystore that should be imported. Refer to the {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/data-sources/cloud_keystore#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVenafiCloudKeystore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "venafi_cloud_keystore", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/data-sources/cloud_keystore venafi_cloud_keystore} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVenafiCloudKeystoreConfig
  */
  public constructor(scope: Construct, id: string, config: DataVenafiCloudKeystoreConfig) {
    super(scope, id, {
      terraformResourceType: 'venafi_cloud_keystore',
      terraformGeneratorMetadata: {
        providerName: 'venafi',
        providerVersion: '0.23.1',
        providerVersionConstraint: '0.23.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudProviderId = config.cloudProviderId;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_provider_id - computed: false, optional: false, required: true
  private _cloudProviderId?: string; 
  public get cloudProviderId() {
    return this.getStringAttribute('cloud_provider_id');
  }
  public set cloudProviderId(value: string) {
    this._cloudProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderIdInput() {
    return this._cloudProviderId;
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

  // machine_identities_count - computed: true, optional: false, required: false
  public get machineIdentitiesCount() {
    return this.getNumberAttribute('machine_identities_count');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_provider_id: cdktf.stringToTerraform(this._cloudProviderId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_provider_id: {
        value: cdktf.stringToHclTerraform(this._cloudProviderId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
