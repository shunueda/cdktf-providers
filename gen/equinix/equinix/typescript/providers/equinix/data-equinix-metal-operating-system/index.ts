// https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/metal_operating_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEquinixMetalOperatingSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the OS distribution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/metal_operating_system#distro DataEquinixMetalOperatingSystem#distro}
  */
  readonly distro?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/metal_operating_system#id DataEquinixMetalOperatingSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name or part of the name of the distribution. Case insensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/metal_operating_system#name DataEquinixMetalOperatingSystem#name}
  */
  readonly name?: string;
  /**
  * Plan name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/metal_operating_system#provisionable_on DataEquinixMetalOperatingSystem#provisionable_on}
  */
  readonly provisionableOn?: string;
  /**
  * Version of the distribution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/metal_operating_system#version DataEquinixMetalOperatingSystem#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/metal_operating_system equinix_metal_operating_system}
*/
export class DataEquinixMetalOperatingSystem extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_metal_operating_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEquinixMetalOperatingSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEquinixMetalOperatingSystem to import
  * @param importFromId The id of the existing DataEquinixMetalOperatingSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/metal_operating_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEquinixMetalOperatingSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_metal_operating_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/metal_operating_system equinix_metal_operating_system} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEquinixMetalOperatingSystemConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataEquinixMetalOperatingSystemConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'equinix_metal_operating_system',
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
    this._distro = config.distro;
    this._id = config.id;
    this._name = config.name;
    this._provisionableOn = config.provisionableOn;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // distro - computed: false, optional: true, required: false
  private _distro?: string; 
  public get distro() {
    return this.getStringAttribute('distro');
  }
  public set distro(value: string) {
    this._distro = value;
  }
  public resetDistro() {
    this._distro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distroInput() {
    return this._distro;
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

  // name - computed: false, optional: true, required: false
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

  // provisionable_on - computed: false, optional: true, required: false
  private _provisionableOn?: string; 
  public get provisionableOn() {
    return this.getStringAttribute('provisionable_on');
  }
  public set provisionableOn(value: string) {
    this._provisionableOn = value;
  }
  public resetProvisionableOn() {
    this._provisionableOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionableOnInput() {
    return this._provisionableOn;
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      distro: cdktf.stringToTerraform(this._distro),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      provisionable_on: cdktf.stringToTerraform(this._provisionableOn),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      distro: {
        value: cdktf.stringToHclTerraform(this._distro),
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
      provisionable_on: {
        value: cdktf.stringToHclTerraform(this._provisionableOn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
