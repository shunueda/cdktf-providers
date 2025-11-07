// https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/compute_flavor_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEclComputeFlavorV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/compute_flavor_v2#disk DataEclComputeFlavorV2#disk}
  */
  readonly disk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/compute_flavor_v2#id DataEclComputeFlavorV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/compute_flavor_v2#min_disk DataEclComputeFlavorV2#min_disk}
  */
  readonly minDisk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/compute_flavor_v2#min_ram DataEclComputeFlavorV2#min_ram}
  */
  readonly minRam?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/compute_flavor_v2#name DataEclComputeFlavorV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/compute_flavor_v2#ram DataEclComputeFlavorV2#ram}
  */
  readonly ram?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/compute_flavor_v2#region DataEclComputeFlavorV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/compute_flavor_v2#rx_tx_factor DataEclComputeFlavorV2#rx_tx_factor}
  */
  readonly rxTxFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/compute_flavor_v2#swap DataEclComputeFlavorV2#swap}
  */
  readonly swap?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/compute_flavor_v2#vcpus DataEclComputeFlavorV2#vcpus}
  */
  readonly vcpus?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/compute_flavor_v2 ecl_compute_flavor_v2}
*/
export class DataEclComputeFlavorV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ecl_compute_flavor_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEclComputeFlavorV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEclComputeFlavorV2 to import
  * @param importFromId The id of the existing DataEclComputeFlavorV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/compute_flavor_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEclComputeFlavorV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ecl_compute_flavor_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/compute_flavor_v2 ecl_compute_flavor_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEclComputeFlavorV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataEclComputeFlavorV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'ecl_compute_flavor_v2',
      terraformGeneratorMetadata: {
        providerName: 'ecl',
        providerVersion: '2.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disk = config.disk;
    this._id = config.id;
    this._minDisk = config.minDisk;
    this._minRam = config.minRam;
    this._name = config.name;
    this._ram = config.ram;
    this._region = config.region;
    this._rxTxFactor = config.rxTxFactor;
    this._swap = config.swap;
    this._vcpus = config.vcpus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disk - computed: true, optional: true, required: false
  private _disk?: number; 
  public get disk() {
    return this.getNumberAttribute('disk');
  }
  public set disk(value: number) {
    this._disk = value;
  }
  public resetDisk() {
    this._disk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
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

  // is_public - computed: true, optional: false, required: false
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }

  // min_disk - computed: true, optional: true, required: false
  private _minDisk?: number; 
  public get minDisk() {
    return this.getNumberAttribute('min_disk');
  }
  public set minDisk(value: number) {
    this._minDisk = value;
  }
  public resetMinDisk() {
    this._minDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDiskInput() {
    return this._minDisk;
  }

  // min_ram - computed: true, optional: true, required: false
  private _minRam?: number; 
  public get minRam() {
    return this.getNumberAttribute('min_ram');
  }
  public set minRam(value: number) {
    this._minRam = value;
  }
  public resetMinRam() {
    this._minRam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRamInput() {
    return this._minRam;
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

  // ram - computed: true, optional: true, required: false
  private _ram?: number; 
  public get ram() {
    return this.getNumberAttribute('ram');
  }
  public set ram(value: number) {
    this._ram = value;
  }
  public resetRam() {
    this._ram = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramInput() {
    return this._ram;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // rx_tx_factor - computed: true, optional: true, required: false
  private _rxTxFactor?: number; 
  public get rxTxFactor() {
    return this.getNumberAttribute('rx_tx_factor');
  }
  public set rxTxFactor(value: number) {
    this._rxTxFactor = value;
  }
  public resetRxTxFactor() {
    this._rxTxFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxTxFactorInput() {
    return this._rxTxFactor;
  }

  // swap - computed: true, optional: true, required: false
  private _swap?: number; 
  public get swap() {
    return this.getNumberAttribute('swap');
  }
  public set swap(value: number) {
    this._swap = value;
  }
  public resetSwap() {
    this._swap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swapInput() {
    return this._swap;
  }

  // vcpus - computed: true, optional: true, required: false
  private _vcpus?: number; 
  public get vcpus() {
    return this.getNumberAttribute('vcpus');
  }
  public set vcpus(value: number) {
    this._vcpus = value;
  }
  public resetVcpus() {
    this._vcpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpusInput() {
    return this._vcpus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disk: cdktf.numberToTerraform(this._disk),
      id: cdktf.stringToTerraform(this._id),
      min_disk: cdktf.numberToTerraform(this._minDisk),
      min_ram: cdktf.numberToTerraform(this._minRam),
      name: cdktf.stringToTerraform(this._name),
      ram: cdktf.numberToTerraform(this._ram),
      region: cdktf.stringToTerraform(this._region),
      rx_tx_factor: cdktf.numberToTerraform(this._rxTxFactor),
      swap: cdktf.numberToTerraform(this._swap),
      vcpus: cdktf.numberToTerraform(this._vcpus),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disk: {
        value: cdktf.numberToHclTerraform(this._disk),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_disk: {
        value: cdktf.numberToHclTerraform(this._minDisk),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_ram: {
        value: cdktf.numberToHclTerraform(this._minRam),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ram: {
        value: cdktf.numberToHclTerraform(this._ram),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rx_tx_factor: {
        value: cdktf.numberToHclTerraform(this._rxTxFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      swap: {
        value: cdktf.numberToHclTerraform(this._swap),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vcpus: {
        value: cdktf.numberToHclTerraform(this._vcpus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
