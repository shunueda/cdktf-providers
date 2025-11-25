// https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/data-sources/twc_presets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTwcPresetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Availability zone for preset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/data-sources/twc_presets#availability_zone DataTwcPresets#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Network bandwidth capacity of specified preset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/data-sources/twc_presets#bandwidth DataTwcPresets#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * CPU count of specified preset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/data-sources/twc_presets#cpu DataTwcPresets#cpu}
  */
  readonly cpu?: number;
  /**
  * CPU frequency for the created server (`3.3`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/data-sources/twc_presets#cpu_frequency DataTwcPresets#cpu_frequency}
  */
  readonly cpuFrequency?: string;
  /**
  * Short description of specified preset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/data-sources/twc_presets#description_short DataTwcPresets#description_short}
  */
  readonly descriptionShort?: string;
  /**
  * Disk size of specified preset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/data-sources/twc_presets#disk DataTwcPresets#disk}
  */
  readonly disk?: number;
  /**
  * Disk type for the created server (`ssd`, `nvme`, `hdd`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/data-sources/twc_presets#disk_type DataTwcPresets#disk_type}
  */
  readonly diskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/data-sources/twc_presets#id DataTwcPresets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Flag that shows allowability local networks for specified preset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/data-sources/twc_presets#is_allowed_local_network DataTwcPresets#is_allowed_local_network}
  */
  readonly isAllowedLocalNetwork?: boolean | cdktf.IResolvable;
  /**
  * Location for the created server (`ru-1`, `ru-2`, `pl-1`, `kz-1`). When server was created all new presets or configuration may be only chosen from same location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/data-sources/twc_presets#location DataTwcPresets#location}
  */
  readonly location?: string;
  /**
  * Preset type for the created server (`premium`, `standard`, `high_cpu`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/data-sources/twc_presets#preset_type DataTwcPresets#preset_type}
  */
  readonly presetType?: string;
  /**
  * RAM size of specified preset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/data-sources/twc_presets#ram DataTwcPresets#ram}
  */
  readonly ram?: number;
  /**
  * price_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/data-sources/twc_presets#price_filter DataTwcPresets#price_filter}
  */
  readonly priceFilter?: DataTwcPresetsPriceFilter;
}
export interface DataTwcPresetsPriceFilter {
  /**
  * Minimum price (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/data-sources/twc_presets#from DataTwcPresets#from}
  */
  readonly from: number;
  /**
  * Maximum price (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/data-sources/twc_presets#to DataTwcPresets#to}
  */
  readonly to: number;
}

export function dataTwcPresetsPriceFilterToTerraform(struct?: DataTwcPresetsPriceFilterOutputReference | DataTwcPresetsPriceFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}


export function dataTwcPresetsPriceFilterToHclTerraform(struct?: DataTwcPresetsPriceFilterOutputReference | DataTwcPresetsPriceFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.numberToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to: {
      value: cdktf.numberToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTwcPresetsPriceFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTwcPresetsPriceFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTwcPresetsPriceFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._from = undefined;
      this._to = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from?: number; 
  public get from() {
    return this.getNumberAttribute('from');
  }
  public set from(value: number) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: false, required: true
  private _to?: number; 
  public get to() {
    return this.getNumberAttribute('to');
  }
  public set to(value: number) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/data-sources/twc_presets twc_presets}
*/
export class DataTwcPresets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twc_presets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTwcPresets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTwcPresets to import
  * @param importFromId The id of the existing DataTwcPresets that should be imported. Refer to the {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/data-sources/twc_presets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTwcPresets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twc_presets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/data-sources/twc_presets twc_presets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTwcPresetsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTwcPresetsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'twc_presets',
      terraformGeneratorMetadata: {
        providerName: 'timeweb-cloud',
        providerVersion: '1.6.7',
        providerVersionConstraint: '1.6.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._bandwidth = config.bandwidth;
    this._cpu = config.cpu;
    this._cpuFrequency = config.cpuFrequency;
    this._descriptionShort = config.descriptionShort;
    this._disk = config.disk;
    this._diskType = config.diskType;
    this._id = config.id;
    this._isAllowedLocalNetwork = config.isAllowedLocalNetwork;
    this._location = config.location;
    this._presetType = config.presetType;
    this._ram = config.ram;
    this._priceFilter.internalValue = config.priceFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // cpu - computed: true, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // cpu_frequency - computed: true, optional: true, required: false
  private _cpuFrequency?: string; 
  public get cpuFrequency() {
    return this.getStringAttribute('cpu_frequency');
  }
  public set cpuFrequency(value: string) {
    this._cpuFrequency = value;
  }
  public resetCpuFrequency() {
    this._cpuFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuFrequencyInput() {
    return this._cpuFrequency;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // description_short - computed: true, optional: true, required: false
  private _descriptionShort?: string; 
  public get descriptionShort() {
    return this.getStringAttribute('description_short');
  }
  public set descriptionShort(value: string) {
    this._descriptionShort = value;
  }
  public resetDescriptionShort() {
    this._descriptionShort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionShortInput() {
    return this._descriptionShort;
  }

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

  // disk_type - computed: true, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
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

  // is_allowed_local_network - computed: true, optional: true, required: false
  private _isAllowedLocalNetwork?: boolean | cdktf.IResolvable; 
  public get isAllowedLocalNetwork() {
    return this.getBooleanAttribute('is_allowed_local_network');
  }
  public set isAllowedLocalNetwork(value: boolean | cdktf.IResolvable) {
    this._isAllowedLocalNetwork = value;
  }
  public resetIsAllowedLocalNetwork() {
    this._isAllowedLocalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAllowedLocalNetworkInput() {
    return this._isAllowedLocalNetwork;
  }

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // preset_type - computed: true, optional: true, required: false
  private _presetType?: string; 
  public get presetType() {
    return this.getStringAttribute('preset_type');
  }
  public set presetType(value: string) {
    this._presetType = value;
  }
  public resetPresetType() {
    this._presetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetTypeInput() {
    return this._presetType;
  }

  // price - computed: true, optional: false, required: false
  public get price() {
    return this.getNumberAttribute('price');
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

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // price_filter - computed: false, optional: true, required: false
  private _priceFilter = new DataTwcPresetsPriceFilterOutputReference(this, "price_filter");
  public get priceFilter() {
    return this._priceFilter;
  }
  public putPriceFilter(value: DataTwcPresetsPriceFilter) {
    this._priceFilter.internalValue = value;
  }
  public resetPriceFilter() {
    this._priceFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priceFilterInput() {
    return this._priceFilter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      cpu: cdktf.numberToTerraform(this._cpu),
      cpu_frequency: cdktf.stringToTerraform(this._cpuFrequency),
      description_short: cdktf.stringToTerraform(this._descriptionShort),
      disk: cdktf.numberToTerraform(this._disk),
      disk_type: cdktf.stringToTerraform(this._diskType),
      id: cdktf.stringToTerraform(this._id),
      is_allowed_local_network: cdktf.booleanToTerraform(this._isAllowedLocalNetwork),
      location: cdktf.stringToTerraform(this._location),
      preset_type: cdktf.stringToTerraform(this._presetType),
      ram: cdktf.numberToTerraform(this._ram),
      price_filter: dataTwcPresetsPriceFilterToTerraform(this._priceFilter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth: {
        value: cdktf.numberToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu: {
        value: cdktf.numberToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_frequency: {
        value: cdktf.stringToHclTerraform(this._cpuFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description_short: {
        value: cdktf.stringToHclTerraform(this._descriptionShort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk: {
        value: cdktf.numberToHclTerraform(this._disk),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk_type: {
        value: cdktf.stringToHclTerraform(this._diskType),
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
      is_allowed_local_network: {
        value: cdktf.booleanToHclTerraform(this._isAllowedLocalNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preset_type: {
        value: cdktf.stringToHclTerraform(this._presetType),
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
      price_filter: {
        value: dataTwcPresetsPriceFilterToHclTerraform(this._priceFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTwcPresetsPriceFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
