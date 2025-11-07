// https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_network_drive_preset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTwcNetworkDrivePresetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_network_drive_preset#id DataTwcNetworkDrivePreset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of the network drive for preset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_network_drive_preset#type DataTwcNetworkDrivePreset#type}
  */
  readonly type?: string;
  /**
  * price_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_network_drive_preset#price_filter DataTwcNetworkDrivePreset#price_filter}
  */
  readonly priceFilter?: DataTwcNetworkDrivePresetPriceFilter;
}
export interface DataTwcNetworkDrivePresetPriceFilter {
  /**
  * Minimum price (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_network_drive_preset#from DataTwcNetworkDrivePreset#from}
  */
  readonly from: number;
  /**
  * Maximum price (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_network_drive_preset#to DataTwcNetworkDrivePreset#to}
  */
  readonly to: number;
}

export function dataTwcNetworkDrivePresetPriceFilterToTerraform(struct?: DataTwcNetworkDrivePresetPriceFilterOutputReference | DataTwcNetworkDrivePresetPriceFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}


export function dataTwcNetworkDrivePresetPriceFilterToHclTerraform(struct?: DataTwcNetworkDrivePresetPriceFilterOutputReference | DataTwcNetworkDrivePresetPriceFilter): any {
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

export class DataTwcNetworkDrivePresetPriceFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTwcNetworkDrivePresetPriceFilter | undefined {
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

  public set internalValue(value: DataTwcNetworkDrivePresetPriceFilter | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_network_drive_preset twc_network_drive_preset}
*/
export class DataTwcNetworkDrivePreset extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twc_network_drive_preset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTwcNetworkDrivePreset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTwcNetworkDrivePreset to import
  * @param importFromId The id of the existing DataTwcNetworkDrivePreset that should be imported. Refer to the {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_network_drive_preset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTwcNetworkDrivePreset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twc_network_drive_preset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_network_drive_preset twc_network_drive_preset} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTwcNetworkDrivePresetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTwcNetworkDrivePresetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'twc_network_drive_preset',
      terraformGeneratorMetadata: {
        providerName: 'timeweb-cloud',
        providerVersion: '1.6.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._type = config.type;
    this._priceFilter.internalValue = config.priceFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cost_per_gb - computed: true, optional: false, required: false
  public get costPerGb() {
    return this.getNumberAttribute('cost_per_gb');
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
  private _priceFilter = new DataTwcNetworkDrivePresetPriceFilterOutputReference(this, "price_filter");
  public get priceFilter() {
    return this._priceFilter;
  }
  public putPriceFilter(value: DataTwcNetworkDrivePresetPriceFilter) {
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
      id: cdktf.stringToTerraform(this._id),
      type: cdktf.stringToTerraform(this._type),
      price_filter: dataTwcNetworkDrivePresetPriceFilterToTerraform(this._priceFilter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      price_filter: {
        value: dataTwcNetworkDrivePresetPriceFilterToHclTerraform(this._priceFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTwcNetworkDrivePresetPriceFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
