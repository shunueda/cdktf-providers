// https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_lb_preset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTwcLbPresetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network bandwidth capacity of specified preset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_lb_preset#bandwidth DataTwcLbPreset#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * Short description of specified preset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_lb_preset#description_short DataTwcLbPreset#description_short}
  */
  readonly descriptionShort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_lb_preset#id DataTwcLbPreset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Location for the created storage (`ru-1`, `ru-2`, `pl-1`, `kz-1`). When storage was created all new presets or configuration may be only chosen from same location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_lb_preset#location DataTwcLbPreset#location}
  */
  readonly location?: string;
  /**
  * Replicas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_lb_preset#replica_count DataTwcLbPreset#replica_count}
  */
  readonly replicaCount?: number;
  /**
  * Maximum load that balancer may perform
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_lb_preset#requests_per_second DataTwcLbPreset#requests_per_second}
  */
  readonly requestsPerSecond?: string;
  /**
  * price_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_lb_preset#price_filter DataTwcLbPreset#price_filter}
  */
  readonly priceFilter?: DataTwcLbPresetPriceFilter;
}
export interface DataTwcLbPresetPriceFilter {
  /**
  * Minimum price (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_lb_preset#from DataTwcLbPreset#from}
  */
  readonly from: number;
  /**
  * Maximum price (inclusive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_lb_preset#to DataTwcLbPreset#to}
  */
  readonly to: number;
}

export function dataTwcLbPresetPriceFilterToTerraform(struct?: DataTwcLbPresetPriceFilterOutputReference | DataTwcLbPresetPriceFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    to: cdktf.numberToTerraform(struct!.to),
  }
}


export function dataTwcLbPresetPriceFilterToHclTerraform(struct?: DataTwcLbPresetPriceFilterOutputReference | DataTwcLbPresetPriceFilter): any {
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

export class DataTwcLbPresetPriceFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTwcLbPresetPriceFilter | undefined {
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

  public set internalValue(value: DataTwcLbPresetPriceFilter | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_lb_preset twc_lb_preset}
*/
export class DataTwcLbPreset extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twc_lb_preset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTwcLbPreset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTwcLbPreset to import
  * @param importFromId The id of the existing DataTwcLbPreset that should be imported. Refer to the {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_lb_preset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTwcLbPreset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twc_lb_preset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/data-sources/twc_lb_preset twc_lb_preset} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTwcLbPresetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTwcLbPresetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'twc_lb_preset',
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
    this._bandwidth = config.bandwidth;
    this._descriptionShort = config.descriptionShort;
    this._id = config.id;
    this._location = config.location;
    this._replicaCount = config.replicaCount;
    this._requestsPerSecond = config.requestsPerSecond;
    this._priceFilter.internalValue = config.priceFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // replica_count - computed: true, optional: true, required: false
  private _replicaCount?: number; 
  public get replicaCount() {
    return this.getNumberAttribute('replica_count');
  }
  public set replicaCount(value: number) {
    this._replicaCount = value;
  }
  public resetReplicaCount() {
    this._replicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaCountInput() {
    return this._replicaCount;
  }

  // requests_per_second - computed: true, optional: true, required: false
  private _requestsPerSecond?: string; 
  public get requestsPerSecond() {
    return this.getStringAttribute('requests_per_second');
  }
  public set requestsPerSecond(value: string) {
    this._requestsPerSecond = value;
  }
  public resetRequestsPerSecond() {
    this._requestsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsPerSecondInput() {
    return this._requestsPerSecond;
  }

  // price_filter - computed: false, optional: true, required: false
  private _priceFilter = new DataTwcLbPresetPriceFilterOutputReference(this, "price_filter");
  public get priceFilter() {
    return this._priceFilter;
  }
  public putPriceFilter(value: DataTwcLbPresetPriceFilter) {
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
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      description_short: cdktf.stringToTerraform(this._descriptionShort),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      replica_count: cdktf.numberToTerraform(this._replicaCount),
      requests_per_second: cdktf.stringToTerraform(this._requestsPerSecond),
      price_filter: dataTwcLbPresetPriceFilterToTerraform(this._priceFilter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth: {
        value: cdktf.numberToHclTerraform(this._bandwidth),
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
      replica_count: {
        value: cdktf.numberToHclTerraform(this._replicaCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      requests_per_second: {
        value: cdktf.stringToHclTerraform(this._requestsPerSecond),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      price_filter: {
        value: dataTwcLbPresetPriceFilterToHclTerraform(this._priceFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTwcLbPresetPriceFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
