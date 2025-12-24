// https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/data-sources/twc_db_preset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTwcDbPresetConfig extends cdktf.TerraformMetaArguments {
  /**
  * CPU count of specified preset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/data-sources/twc_db_preset#cpu DataTwcDbPreset#cpu}
  */
  readonly cpu?: number;
  /**
  * Short description of specified preset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/data-sources/twc_db_preset#description_short DataTwcDbPreset#description_short}
  */
  readonly descriptionShort?: string;
  /**
  * Disk size of specified preset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/data-sources/twc_db_preset#disk DataTwcDbPreset#disk}
  */
  readonly disk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/data-sources/twc_db_preset#id DataTwcDbPreset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Location for the created storage (`ru-1`, `ru-2`, `pl-1`, `kz-1`). When storage was created all new presets or configuration may be only chosen from same location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/data-sources/twc_db_preset#location DataTwcDbPreset#location}
  */
  readonly location?: string;
  /**
  * RAM size of specified preset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/data-sources/twc_db_preset#ram DataTwcDbPreset#ram}
  */
  readonly ram?: number;
  /**
  * Type of database (`mysql`, `postgres`, `redis`, `mongodb`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/data-sources/twc_db_preset#type DataTwcDbPreset#type}
  */
  readonly type?: string;
  /**
  * price_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/data-sources/twc_db_preset#price_filter DataTwcDbPreset#price_filter}
  */
  readonly priceFilter?: DataTwcDbPresetPriceFilter;
}
export interface DataTwcDbPresetPriceFilter {
  /**
  * Minimum price (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/data-sources/twc_db_preset#from DataTwcDbPreset#from}
  */
  readonly from: number;
  /**
  * Maximum price (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/data-sources/twc_db_preset#to DataTwcDbPreset#to}
  */
  readonly to: number;
}

export function dataTwcDbPresetPriceFilterToTerraform(struct?: DataTwcDbPresetPriceFilterOutputReference | DataTwcDbPresetPriceFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}


export function dataTwcDbPresetPriceFilterToHclTerraform(struct?: DataTwcDbPresetPriceFilterOutputReference | DataTwcDbPresetPriceFilter): any {
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

export class DataTwcDbPresetPriceFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTwcDbPresetPriceFilter | undefined {
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

  public set internalValue(value: DataTwcDbPresetPriceFilter | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/data-sources/twc_db_preset twc_db_preset}
*/
export class DataTwcDbPreset extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twc_db_preset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTwcDbPreset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTwcDbPreset to import
  * @param importFromId The id of the existing DataTwcDbPreset that should be imported. Refer to the {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/data-sources/twc_db_preset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTwcDbPreset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twc_db_preset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/data-sources/twc_db_preset twc_db_preset} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTwcDbPresetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTwcDbPresetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'twc_db_preset',
      terraformGeneratorMetadata: {
        providerName: 'timeweb-cloud',
        providerVersion: '1.6.8',
        providerVersionConstraint: '1.6.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cpu = config.cpu;
    this._descriptionShort = config.descriptionShort;
    this._disk = config.disk;
    this._id = config.id;
    this._location = config.location;
    this._ram = config.ram;
    this._type = config.type;
    this._priceFilter.internalValue = config.priceFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // price_filter - computed: false, optional: true, required: false
  private _priceFilter = new DataTwcDbPresetPriceFilterOutputReference(this, "price_filter");
  public get priceFilter() {
    return this._priceFilter;
  }
  public putPriceFilter(value: DataTwcDbPresetPriceFilter) {
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
      cpu: cdktf.numberToTerraform(this._cpu),
      description_short: cdktf.stringToTerraform(this._descriptionShort),
      disk: cdktf.numberToTerraform(this._disk),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      ram: cdktf.numberToTerraform(this._ram),
      type: cdktf.stringToTerraform(this._type),
      price_filter: dataTwcDbPresetPriceFilterToTerraform(this._priceFilter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cpu: {
        value: cdktf.numberToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      price_filter: {
        value: dataTwcDbPresetPriceFilterToHclTerraform(this._priceFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTwcDbPresetPriceFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
