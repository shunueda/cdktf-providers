// https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/data-sources/twc_k8s_preset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTwcK8SPresetConfig extends cdktf.TerraformMetaArguments {
  /**
  * CPU count of specified preset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/data-sources/twc_k8s_preset#cpu DataTwcK8SPreset#cpu}
  */
  readonly cpu?: number;
  /**
  * Short description of specified preset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/data-sources/twc_k8s_preset#description_short DataTwcK8SPreset#description_short}
  */
  readonly descriptionShort?: string;
  /**
  * Disk size of specified preset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/data-sources/twc_k8s_preset#disk DataTwcK8SPreset#disk}
  */
  readonly disk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/data-sources/twc_k8s_preset#id DataTwcK8SPreset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Location for k8s preset (`ru-1`, `ru-3`, `nl-1`). Master and worker should be in one location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/data-sources/twc_k8s_preset#location DataTwcK8SPreset#location}
  */
  readonly location?: string;
  /**
  * Network bandwidth capacity of specified preset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/data-sources/twc_k8s_preset#network DataTwcK8SPreset#network}
  */
  readonly network?: number;
  /**
  * RAM size of specified preset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/data-sources/twc_k8s_preset#ram DataTwcK8SPreset#ram}
  */
  readonly ram?: number;
  /**
  * Node type for preset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/data-sources/twc_k8s_preset#type DataTwcK8SPreset#type}
  */
  readonly type?: string;
  /**
  * price_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/data-sources/twc_k8s_preset#price_filter DataTwcK8SPreset#price_filter}
  */
  readonly priceFilter?: DataTwcK8SPresetPriceFilter;
}
export interface DataTwcK8SPresetPriceFilter {
  /**
  * Minimum price (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/data-sources/twc_k8s_preset#from DataTwcK8SPreset#from}
  */
  readonly from: number;
  /**
  * Maximum price (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/data-sources/twc_k8s_preset#to DataTwcK8SPreset#to}
  */
  readonly to: number;
}

export function dataTwcK8SPresetPriceFilterToTerraform(struct?: DataTwcK8SPresetPriceFilterOutputReference | DataTwcK8SPresetPriceFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}


export function dataTwcK8SPresetPriceFilterToHclTerraform(struct?: DataTwcK8SPresetPriceFilterOutputReference | DataTwcK8SPresetPriceFilter): any {
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

export class DataTwcK8SPresetPriceFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTwcK8SPresetPriceFilter | undefined {
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

  public set internalValue(value: DataTwcK8SPresetPriceFilter | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/data-sources/twc_k8s_preset twc_k8s_preset}
*/
export class DataTwcK8SPreset extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twc_k8s_preset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTwcK8SPreset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTwcK8SPreset to import
  * @param importFromId The id of the existing DataTwcK8SPreset that should be imported. Refer to the {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/data-sources/twc_k8s_preset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTwcK8SPreset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twc_k8s_preset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/data-sources/twc_k8s_preset twc_k8s_preset} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTwcK8SPresetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTwcK8SPresetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'twc_k8s_preset',
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
    this._network = config.network;
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

  // limit - computed: true, optional: false, required: false
  public get limit() {
    return this.getNumberAttribute('limit');
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

  // network - computed: true, optional: true, required: false
  private _network?: number; 
  public get network() {
    return this.getNumberAttribute('network');
  }
  public set network(value: number) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
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
  private _priceFilter = new DataTwcK8SPresetPriceFilterOutputReference(this, "price_filter");
  public get priceFilter() {
    return this._priceFilter;
  }
  public putPriceFilter(value: DataTwcK8SPresetPriceFilter) {
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
      network: cdktf.numberToTerraform(this._network),
      ram: cdktf.numberToTerraform(this._ram),
      type: cdktf.stringToTerraform(this._type),
      price_filter: dataTwcK8SPresetPriceFilterToTerraform(this._priceFilter.internalValue),
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
      network: {
        value: cdktf.numberToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
        value: dataTwcK8SPresetPriceFilterToHclTerraform(this._priceFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTwcK8SPresetPriceFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
