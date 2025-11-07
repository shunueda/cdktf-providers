// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/karbon_cluster_ssh
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixKarbonClusterSshConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/karbon_cluster_ssh#id DataNutanixKarbonClusterSsh#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/karbon_cluster_ssh#karbon_cluster_id DataNutanixKarbonClusterSsh#karbon_cluster_id}
  */
  readonly karbonClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/karbon_cluster_ssh#karbon_cluster_name DataNutanixKarbonClusterSsh#karbon_cluster_name}
  */
  readonly karbonClusterName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/karbon_cluster_ssh nutanix_karbon_cluster_ssh}
*/
export class DataNutanixKarbonClusterSsh extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_karbon_cluster_ssh";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixKarbonClusterSsh resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixKarbonClusterSsh to import
  * @param importFromId The id of the existing DataNutanixKarbonClusterSsh that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/karbon_cluster_ssh#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixKarbonClusterSsh to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_karbon_cluster_ssh", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/karbon_cluster_ssh nutanix_karbon_cluster_ssh} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixKarbonClusterSshConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNutanixKarbonClusterSshConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_karbon_cluster_ssh',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3'
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
    this._karbonClusterId = config.karbonClusterId;
    this._karbonClusterName = config.karbonClusterName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // expiry_time - computed: true, optional: false, required: false
  public get expiryTime() {
    return this.getStringAttribute('expiry_time');
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

  // karbon_cluster_id - computed: false, optional: true, required: false
  private _karbonClusterId?: string; 
  public get karbonClusterId() {
    return this.getStringAttribute('karbon_cluster_id');
  }
  public set karbonClusterId(value: string) {
    this._karbonClusterId = value;
  }
  public resetKarbonClusterId() {
    this._karbonClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get karbonClusterIdInput() {
    return this._karbonClusterId;
  }

  // karbon_cluster_name - computed: false, optional: true, required: false
  private _karbonClusterName?: string; 
  public get karbonClusterName() {
    return this.getStringAttribute('karbon_cluster_name');
  }
  public set karbonClusterName(value: string) {
    this._karbonClusterName = value;
  }
  public resetKarbonClusterName() {
    this._karbonClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get karbonClusterNameInput() {
    return this._karbonClusterName;
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      karbon_cluster_id: cdktf.stringToTerraform(this._karbonClusterId),
      karbon_cluster_name: cdktf.stringToTerraform(this._karbonClusterName),
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
      karbon_cluster_id: {
        value: cdktf.stringToHclTerraform(this._karbonClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      karbon_cluster_name: {
        value: cdktf.stringToHclTerraform(this._karbonClusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
