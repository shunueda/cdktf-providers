// https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/data-sources/metal_precreated_ip_block
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEquinixMetalPrecreatedIpBlockConfig extends cdktf.TerraformMetaArguments {
  /**
  * 4 or 6, depending on which block you are looking for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/data-sources/metal_precreated_ip_block#address_family DataEquinixMetalPrecreatedIpBlock#address_family}
  */
  readonly addressFamily: number;
  /**
  * Facility of the searched block. (for non-global blocks).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/data-sources/metal_precreated_ip_block#facility DataEquinixMetalPrecreatedIpBlock#facility}
  */
  readonly facility?: string;
  /**
  * Whether to look for global block. Default is false for backward compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/data-sources/metal_precreated_ip_block#global DataEquinixMetalPrecreatedIpBlock#global}
  */
  readonly global?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/data-sources/metal_precreated_ip_block#id DataEquinixMetalPrecreatedIpBlock#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Metro of the searched block (for non-global blocks).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/data-sources/metal_precreated_ip_block#metro DataEquinixMetalPrecreatedIpBlock#metro}
  */
  readonly metro?: string;
  /**
  * ID of the project where the searched block should be.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/data-sources/metal_precreated_ip_block#project_id DataEquinixMetalPrecreatedIpBlock#project_id}
  */
  readonly projectId: string;
  /**
  * Whether to look for public or private block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/data-sources/metal_precreated_ip_block#public DataEquinixMetalPrecreatedIpBlock#public}
  */
  readonly public: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/data-sources/metal_precreated_ip_block equinix_metal_precreated_ip_block}
*/
export class DataEquinixMetalPrecreatedIpBlock extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_metal_precreated_ip_block";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEquinixMetalPrecreatedIpBlock resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEquinixMetalPrecreatedIpBlock to import
  * @param importFromId The id of the existing DataEquinixMetalPrecreatedIpBlock that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/data-sources/metal_precreated_ip_block#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEquinixMetalPrecreatedIpBlock to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_metal_precreated_ip_block", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/data-sources/metal_precreated_ip_block equinix_metal_precreated_ip_block} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEquinixMetalPrecreatedIpBlockConfig
  */
  public constructor(scope: Construct, id: string, config: DataEquinixMetalPrecreatedIpBlockConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_metal_precreated_ip_block',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.12.0',
        providerVersionConstraint: '4.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressFamily = config.addressFamily;
    this._facility = config.facility;
    this._global = config.global;
    this._id = config.id;
    this._metro = config.metro;
    this._projectId = config.projectId;
    this._public = config.public;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // address_family - computed: false, optional: false, required: true
  private _addressFamily?: number; 
  public get addressFamily() {
    return this.getNumberAttribute('address_family');
  }
  public set addressFamily(value: number) {
    this._addressFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyInput() {
    return this._addressFamily;
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getNumberAttribute('cidr');
  }

  // cidr_notation - computed: true, optional: false, required: false
  public get cidrNotation() {
    return this.getStringAttribute('cidr_notation');
  }

  // facility - computed: false, optional: true, required: false
  private _facility?: string; 
  public get facility() {
    return this.getStringAttribute('facility');
  }
  public set facility(value: string) {
    this._facility = value;
  }
  public resetFacility() {
    this._facility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facilityInput() {
    return this._facility;
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // global - computed: false, optional: true, required: false
  private _global?: boolean | cdktf.IResolvable; 
  public get global() {
    return this.getBooleanAttribute('global');
  }
  public set global(value: boolean | cdktf.IResolvable) {
    this._global = value;
  }
  public resetGlobal() {
    this._global = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global;
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

  // manageable - computed: true, optional: false, required: false
  public get manageable() {
    return this.getBooleanAttribute('manageable');
  }

  // management - computed: true, optional: false, required: false
  public get management() {
    return this.getBooleanAttribute('management');
  }

  // metro - computed: false, optional: true, required: false
  private _metro?: string; 
  public get metro() {
    return this.getStringAttribute('metro');
  }
  public set metro(value: string) {
    this._metro = value;
  }
  public resetMetro() {
    this._metro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metroInput() {
    return this._metro;
  }

  // netmask - computed: true, optional: false, required: false
  public get netmask() {
    return this.getStringAttribute('netmask');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // public - computed: false, optional: false, required: true
  private _public?: boolean | cdktf.IResolvable; 
  public get public() {
    return this.getBooleanAttribute('public');
  }
  public set public(value: boolean | cdktf.IResolvable) {
    this._public = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInput() {
    return this._public;
  }

  // quantity - computed: true, optional: false, required: false
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vrf_id - computed: true, optional: false, required: false
  public get vrfId() {
    return this.getStringAttribute('vrf_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_family: cdktf.numberToTerraform(this._addressFamily),
      facility: cdktf.stringToTerraform(this._facility),
      global: cdktf.booleanToTerraform(this._global),
      id: cdktf.stringToTerraform(this._id),
      metro: cdktf.stringToTerraform(this._metro),
      project_id: cdktf.stringToTerraform(this._projectId),
      public: cdktf.booleanToTerraform(this._public),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_family: {
        value: cdktf.numberToHclTerraform(this._addressFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      facility: {
        value: cdktf.stringToHclTerraform(this._facility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global: {
        value: cdktf.booleanToHclTerraform(this._global),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metro: {
        value: cdktf.stringToHclTerraform(this._metro),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public: {
        value: cdktf.booleanToHclTerraform(this._public),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
