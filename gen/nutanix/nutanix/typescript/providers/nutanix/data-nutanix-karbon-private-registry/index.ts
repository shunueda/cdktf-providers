// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/karbon_private_registry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixKarbonPrivateRegistryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/karbon_private_registry#id DataNutanixKarbonPrivateRegistry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/karbon_private_registry#private_registry_id DataNutanixKarbonPrivateRegistry#private_registry_id}
  */
  readonly privateRegistryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/karbon_private_registry#private_registry_name DataNutanixKarbonPrivateRegistry#private_registry_name}
  */
  readonly privateRegistryName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/karbon_private_registry nutanix_karbon_private_registry}
*/
export class DataNutanixKarbonPrivateRegistry extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_karbon_private_registry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixKarbonPrivateRegistry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixKarbonPrivateRegistry to import
  * @param importFromId The id of the existing DataNutanixKarbonPrivateRegistry that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/karbon_private_registry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixKarbonPrivateRegistry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_karbon_private_registry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/karbon_private_registry nutanix_karbon_private_registry} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixKarbonPrivateRegistryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNutanixKarbonPrivateRegistryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_karbon_private_registry',
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
    this._privateRegistryId = config.privateRegistryId;
    this._privateRegistryName = config.privateRegistryName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_registry_id - computed: false, optional: true, required: false
  private _privateRegistryId?: string; 
  public get privateRegistryId() {
    return this.getStringAttribute('private_registry_id');
  }
  public set privateRegistryId(value: string) {
    this._privateRegistryId = value;
  }
  public resetPrivateRegistryId() {
    this._privateRegistryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateRegistryIdInput() {
    return this._privateRegistryId;
  }

  // private_registry_name - computed: false, optional: true, required: false
  private _privateRegistryName?: string; 
  public get privateRegistryName() {
    return this.getStringAttribute('private_registry_name');
  }
  public set privateRegistryName(value: string) {
    this._privateRegistryName = value;
  }
  public resetPrivateRegistryName() {
    this._privateRegistryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateRegistryNameInput() {
    return this._privateRegistryName;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      private_registry_id: cdktf.stringToTerraform(this._privateRegistryId),
      private_registry_name: cdktf.stringToTerraform(this._privateRegistryName),
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
      private_registry_id: {
        value: cdktf.stringToHclTerraform(this._privateRegistryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_registry_name: {
        value: cdktf.stringToHclTerraform(this._privateRegistryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
