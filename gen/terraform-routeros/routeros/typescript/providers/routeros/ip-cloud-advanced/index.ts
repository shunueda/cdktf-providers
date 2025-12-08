// https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_cloud_advanced
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpCloudAdvancedConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_cloud_advanced#___path___ IpCloudAdvanced#___path___}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_cloud_advanced#id IpCloudAdvanced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An option whether to assign an internal router address to the dynamic DNS name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_cloud_advanced#use_local_address IpCloudAdvanced#use_local_address}
  */
  readonly useLocalAddress?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_cloud_advanced routeros_ip_cloud_advanced}
*/
export class IpCloudAdvanced extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_cloud_advanced";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpCloudAdvanced resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpCloudAdvanced to import
  * @param importFromId The id of the existing IpCloudAdvanced that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_cloud_advanced#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpCloudAdvanced to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_cloud_advanced", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/ip_cloud_advanced routeros_ip_cloud_advanced} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpCloudAdvancedConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpCloudAdvancedConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_cloud_advanced',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.98.0',
        providerVersionConstraint: '1.98.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._id = config.id;
    this._useLocalAddress = config.useLocalAddress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // use_local_address - computed: false, optional: true, required: false
  private _useLocalAddress?: boolean | cdktf.IResolvable; 
  public get useLocalAddress() {
    return this.getBooleanAttribute('use_local_address');
  }
  public set useLocalAddress(value: boolean | cdktf.IResolvable) {
    this._useLocalAddress = value;
  }
  public resetUseLocalAddress() {
    this._useLocalAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLocalAddressInput() {
    return this._useLocalAddress;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      id: cdktf.stringToTerraform(this._id),
      use_local_address: cdktf.booleanToTerraform(this._useLocalAddress),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
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
      use_local_address: {
        value: cdktf.booleanToHclTerraform(this._useLocalAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
