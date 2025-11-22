// https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/network_device_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEquinixNetworkDeviceTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Device type category, one of: Router, Firewall, SDWAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/network_device_type#category DataEquinixNetworkDeviceType#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/network_device_type#id DataEquinixNetworkDeviceType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of metro codes where device type has to be available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/network_device_type#metro_codes DataEquinixNetworkDeviceType#metro_codes}
  */
  readonly metroCodes?: string[];
  /**
  * Device type name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/network_device_type#name DataEquinixNetworkDeviceType#name}
  */
  readonly name?: string;
  /**
  * Device type vendor i.e. Cisco, Juniper Networks, VERSA Networks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/network_device_type#vendor DataEquinixNetworkDeviceType#vendor}
  */
  readonly vendor?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/network_device_type equinix_network_device_type}
*/
export class DataEquinixNetworkDeviceType extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_network_device_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEquinixNetworkDeviceType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEquinixNetworkDeviceType to import
  * @param importFromId The id of the existing DataEquinixNetworkDeviceType that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/network_device_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEquinixNetworkDeviceType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_network_device_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/network_device_type equinix_network_device_type} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEquinixNetworkDeviceTypeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataEquinixNetworkDeviceTypeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'equinix_network_device_type',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.11.1',
        providerVersionConstraint: '4.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._id = config.id;
    this._metroCodes = config.metroCodes;
    this._name = config.name;
    this._vendor = config.vendor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // metro_codes - computed: true, optional: true, required: false
  private _metroCodes?: string[]; 
  public get metroCodes() {
    return cdktf.Fn.tolist(this.getListAttribute('metro_codes'));
  }
  public set metroCodes(value: string[]) {
    this._metroCodes = value;
  }
  public resetMetroCodes() {
    this._metroCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metroCodesInput() {
    return this._metroCodes;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // vendor - computed: true, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      id: cdktf.stringToTerraform(this._id),
      metro_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._metroCodes),
      name: cdktf.stringToTerraform(this._name),
      vendor: cdktf.stringToTerraform(this._vendor),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
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
      metro_codes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._metroCodes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vendor: {
        value: cdktf.stringToHclTerraform(this._vendor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
