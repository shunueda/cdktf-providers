// https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/network_device_platform
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEquinixNetworkDevicePlatformConfig extends cdktf.TerraformMetaArguments {
  /**
  * Number of CPU cores used to limit platform search results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/network_device_platform#core_count DataEquinixNetworkDevicePlatform#core_count}
  */
  readonly coreCount?: number;
  /**
  * Device type code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/network_device_platform#device_type DataEquinixNetworkDevicePlatform#device_type}
  */
  readonly deviceType: string;
  /**
  * Device platform flavor that determines number of CPU cores and memory. Supported values: small, medium, large, xlarge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/network_device_platform#flavor DataEquinixNetworkDevicePlatform#flavor}
  */
  readonly flavor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/network_device_platform#id DataEquinixNetworkDevicePlatform#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of device licensing options to limit platform search result. Supported values: BYOL (Bring Your Own License), Sub (license subscription)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/network_device_platform#license_options DataEquinixNetworkDevicePlatform#license_options}
  */
  readonly licenseOptions?: string[];
  /**
  * List of device management types to limit platform search results. Supported values: EQUINIX-CONFIGURED, SELF-CONFIGURED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/network_device_platform#management_types DataEquinixNetworkDevicePlatform#management_types}
  */
  readonly managementTypes?: string[];
  /**
  * List of software package codes to limit platform search results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/network_device_platform#packages DataEquinixNetworkDevicePlatform#packages}
  */
  readonly packages?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/network_device_platform equinix_network_device_platform}
*/
export class DataEquinixNetworkDevicePlatform extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_network_device_platform";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEquinixNetworkDevicePlatform resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEquinixNetworkDevicePlatform to import
  * @param importFromId The id of the existing DataEquinixNetworkDevicePlatform that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/network_device_platform#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEquinixNetworkDevicePlatform to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_network_device_platform", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/network_device_platform equinix_network_device_platform} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEquinixNetworkDevicePlatformConfig
  */
  public constructor(scope: Construct, id: string, config: DataEquinixNetworkDevicePlatformConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_network_device_platform',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._coreCount = config.coreCount;
    this._deviceType = config.deviceType;
    this._flavor = config.flavor;
    this._id = config.id;
    this._licenseOptions = config.licenseOptions;
    this._managementTypes = config.managementTypes;
    this._packages = config.packages;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // core_count - computed: true, optional: true, required: false
  private _coreCount?: number; 
  public get coreCount() {
    return this.getNumberAttribute('core_count');
  }
  public set coreCount(value: number) {
    this._coreCount = value;
  }
  public resetCoreCount() {
    this._coreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreCountInput() {
    return this._coreCount;
  }

  // device_type - computed: false, optional: false, required: true
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // flavor - computed: true, optional: true, required: false
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  public resetFlavor() {
    this._flavor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
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

  // license_options - computed: true, optional: true, required: false
  private _licenseOptions?: string[]; 
  public get licenseOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('license_options'));
  }
  public set licenseOptions(value: string[]) {
    this._licenseOptions = value;
  }
  public resetLicenseOptions() {
    this._licenseOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseOptionsInput() {
    return this._licenseOptions;
  }

  // management_types - computed: true, optional: true, required: false
  private _managementTypes?: string[]; 
  public get managementTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('management_types'));
  }
  public set managementTypes(value: string[]) {
    this._managementTypes = value;
  }
  public resetManagementTypes() {
    this._managementTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementTypesInput() {
    return this._managementTypes;
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // memory_unit - computed: true, optional: false, required: false
  public get memoryUnit() {
    return this.getStringAttribute('memory_unit');
  }

  // packages - computed: true, optional: true, required: false
  private _packages?: string[]; 
  public get packages() {
    return cdktf.Fn.tolist(this.getListAttribute('packages'));
  }
  public set packages(value: string[]) {
    this._packages = value;
  }
  public resetPackages() {
    this._packages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesInput() {
    return this._packages;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      core_count: cdktf.numberToTerraform(this._coreCount),
      device_type: cdktf.stringToTerraform(this._deviceType),
      flavor: cdktf.stringToTerraform(this._flavor),
      id: cdktf.stringToTerraform(this._id),
      license_options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._licenseOptions),
      management_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managementTypes),
      packages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._packages),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      core_count: {
        value: cdktf.numberToHclTerraform(this._coreCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_type: {
        value: cdktf.stringToHclTerraform(this._deviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flavor: {
        value: cdktf.stringToHclTerraform(this._flavor),
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
      license_options: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._licenseOptions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      management_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._managementTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      packages: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._packages),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
