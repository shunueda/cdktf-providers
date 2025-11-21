// https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/data-sources/network_device_software
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEquinixNetworkDeviceSoftwareConfig extends cdktf.TerraformMetaArguments {
  /**
  * Code of a device type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/data-sources/network_device_software#device_type DataEquinixNetworkDeviceSoftware#device_type}
  */
  readonly deviceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/data-sources/network_device_software#id DataEquinixNetworkDeviceSoftware#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Boolean value to indicate that most recent version should be used, in case when more than one result is returned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/data-sources/network_device_software#most_recent DataEquinixNetworkDeviceSoftware#most_recent}
  */
  readonly mostRecent?: boolean | cdktf.IResolvable;
  /**
  * Limits returned versions to those that are supported by given software package codes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/data-sources/network_device_software#packages DataEquinixNetworkDeviceSoftware#packages}
  */
  readonly packages?: string[];
  /**
  * Boolean value to limit query results to stable versions only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/data-sources/network_device_software#stable DataEquinixNetworkDeviceSoftware#stable}
  */
  readonly stable?: boolean | cdktf.IResolvable;
  /**
  * A regex string to apply on returned versions and filter search results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/data-sources/network_device_software#version_regex DataEquinixNetworkDeviceSoftware#version_regex}
  */
  readonly versionRegex?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/data-sources/network_device_software equinix_network_device_software}
*/
export class DataEquinixNetworkDeviceSoftware extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_network_device_software";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEquinixNetworkDeviceSoftware resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEquinixNetworkDeviceSoftware to import
  * @param importFromId The id of the existing DataEquinixNetworkDeviceSoftware that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/data-sources/network_device_software#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEquinixNetworkDeviceSoftware to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_network_device_software", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/data-sources/network_device_software equinix_network_device_software} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEquinixNetworkDeviceSoftwareConfig
  */
  public constructor(scope: Construct, id: string, config: DataEquinixNetworkDeviceSoftwareConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_network_device_software',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.11.0',
        providerVersionConstraint: '4.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceType = config.deviceType;
    this._id = config.id;
    this._mostRecent = config.mostRecent;
    this._packages = config.packages;
    this._stable = config.stable;
    this._versionRegex = config.versionRegex;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // date - computed: true, optional: false, required: false
  public get date() {
    return this.getStringAttribute('date');
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

  // image_name - computed: true, optional: false, required: false
  public get imageName() {
    return this.getStringAttribute('image_name');
  }

  // most_recent - computed: false, optional: true, required: false
  private _mostRecent?: boolean | cdktf.IResolvable; 
  public get mostRecent() {
    return this.getBooleanAttribute('most_recent');
  }
  public set mostRecent(value: boolean | cdktf.IResolvable) {
    this._mostRecent = value;
  }
  public resetMostRecent() {
    this._mostRecent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostRecentInput() {
    return this._mostRecent;
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

  // release_notes_link - computed: true, optional: false, required: false
  public get releaseNotesLink() {
    return this.getStringAttribute('release_notes_link');
  }

  // stable - computed: true, optional: true, required: false
  private _stable?: boolean | cdktf.IResolvable; 
  public get stable() {
    return this.getBooleanAttribute('stable');
  }
  public set stable(value: boolean | cdktf.IResolvable) {
    this._stable = value;
  }
  public resetStable() {
    this._stable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stableInput() {
    return this._stable;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // version_regex - computed: false, optional: true, required: false
  private _versionRegex?: string; 
  public get versionRegex() {
    return this.getStringAttribute('version_regex');
  }
  public set versionRegex(value: string) {
    this._versionRegex = value;
  }
  public resetVersionRegex() {
    this._versionRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionRegexInput() {
    return this._versionRegex;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_type: cdktf.stringToTerraform(this._deviceType),
      id: cdktf.stringToTerraform(this._id),
      most_recent: cdktf.booleanToTerraform(this._mostRecent),
      packages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._packages),
      stable: cdktf.booleanToTerraform(this._stable),
      version_regex: cdktf.stringToTerraform(this._versionRegex),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_type: {
        value: cdktf.stringToHclTerraform(this._deviceType),
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
      most_recent: {
        value: cdktf.booleanToHclTerraform(this._mostRecent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      packages: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._packages),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      stable: {
        value: cdktf.booleanToHclTerraform(this._stable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      version_regex: {
        value: cdktf.stringToHclTerraform(this._versionRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
