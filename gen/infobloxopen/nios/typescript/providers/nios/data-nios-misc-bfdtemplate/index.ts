// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/misc_bfdtemplate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosMiscBfdtemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/misc_bfdtemplate#filters DataNiosMiscBfdtemplate#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Maximum number of objects to be returned. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/misc_bfdtemplate#max_results DataNiosMiscBfdtemplate#max_results}
  */
  readonly maxResults?: number;
  /**
  * Enable (1) or disable (0) paging for the data source query. When enabled, the system retrieves results in pages, allowing efficient handling of large result sets. Paging is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/misc_bfdtemplate#paging DataNiosMiscBfdtemplate#paging}
  */
  readonly paging?: number;
}
export interface DataNiosMiscBfdtemplateResult {
  /**
  * The authentication key for BFD protocol message-digest authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/misc_bfdtemplate#authentication_key DataNiosMiscBfdtemplate#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * The authentication key identifier for BFD protocol authentication. Valid values are between 1 and 255.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/misc_bfdtemplate#authentication_key_id DataNiosMiscBfdtemplate#authentication_key_id}
  */
  readonly authenticationKeyId?: number;
  /**
  * The authentication type for BFD protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/misc_bfdtemplate#authentication_type DataNiosMiscBfdtemplate#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * The detection time multiplier value for BFD protocol. The negotiated transmit interval, multiplied by this value, provides the detection time for the receiving system in asynchronous BFD mode. Valid values are between 3 and 50.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/misc_bfdtemplate#detection_multiplier DataNiosMiscBfdtemplate#detection_multiplier}
  */
  readonly detectionMultiplier?: number;
  /**
  * The minimum receive time (in seconds) for BFD protocol. Valid values are between 50 and 9999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/misc_bfdtemplate#min_rx_interval DataNiosMiscBfdtemplate#min_rx_interval}
  */
  readonly minRxInterval?: number;
  /**
  * The minimum transmission time (in seconds) for BFD protocol. Valid values are between 50 and 9999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/misc_bfdtemplate#min_tx_interval DataNiosMiscBfdtemplate#min_tx_interval}
  */
  readonly minTxInterval?: number;
  /**
  * The name of the BFD template object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/misc_bfdtemplate#name DataNiosMiscBfdtemplate#name}
  */
  readonly name: string;
}

export function dataNiosMiscBfdtemplateResultToTerraform(struct?: DataNiosMiscBfdtemplateResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
    authentication_key_id: cdktf.numberToTerraform(struct!.authenticationKeyId),
    authentication_type: cdktf.stringToTerraform(struct!.authenticationType),
    detection_multiplier: cdktf.numberToTerraform(struct!.detectionMultiplier),
    min_rx_interval: cdktf.numberToTerraform(struct!.minRxInterval),
    min_tx_interval: cdktf.numberToTerraform(struct!.minTxInterval),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNiosMiscBfdtemplateResultToHclTerraform(struct?: DataNiosMiscBfdtemplateResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_key: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_key_id: {
      value: cdktf.numberToHclTerraform(struct!.authenticationKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authentication_type: {
      value: cdktf.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detection_multiplier: {
      value: cdktf.numberToHclTerraform(struct!.detectionMultiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_rx_interval: {
      value: cdktf.numberToHclTerraform(struct!.minRxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_tx_interval: {
      value: cdktf.numberToHclTerraform(struct!.minTxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosMiscBfdtemplateResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNiosMiscBfdtemplateResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKey = this._authenticationKey;
    }
    if (this._authenticationKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKeyId = this._authenticationKeyId;
    }
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._detectionMultiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionMultiplier = this._detectionMultiplier;
    }
    if (this._minRxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRxInterval = this._minRxInterval;
    }
    if (this._minTxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTxInterval = this._minTxInterval;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosMiscBfdtemplateResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationKey = undefined;
      this._authenticationKeyId = undefined;
      this._authenticationType = undefined;
      this._detectionMultiplier = undefined;
      this._minRxInterval = undefined;
      this._minTxInterval = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationKey = value.authenticationKey;
      this._authenticationKeyId = value.authenticationKeyId;
      this._authenticationType = value.authenticationType;
      this._detectionMultiplier = value.detectionMultiplier;
      this._minRxInterval = value.minRxInterval;
      this._minTxInterval = value.minTxInterval;
      this._name = value.name;
    }
  }

  // authentication_key - computed: true, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }

  // authentication_key_id - computed: true, optional: true, required: false
  private _authenticationKeyId?: number; 
  public get authenticationKeyId() {
    return this.getNumberAttribute('authentication_key_id');
  }
  public set authenticationKeyId(value: number) {
    this._authenticationKeyId = value;
  }
  public resetAuthenticationKeyId() {
    this._authenticationKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyIdInput() {
    return this._authenticationKeyId;
  }

  // authentication_type - computed: true, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // detection_multiplier - computed: true, optional: true, required: false
  private _detectionMultiplier?: number; 
  public get detectionMultiplier() {
    return this.getNumberAttribute('detection_multiplier');
  }
  public set detectionMultiplier(value: number) {
    this._detectionMultiplier = value;
  }
  public resetDetectionMultiplier() {
    this._detectionMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionMultiplierInput() {
    return this._detectionMultiplier;
  }

  // min_rx_interval - computed: true, optional: true, required: false
  private _minRxInterval?: number; 
  public get minRxInterval() {
    return this.getNumberAttribute('min_rx_interval');
  }
  public set minRxInterval(value: number) {
    this._minRxInterval = value;
  }
  public resetMinRxInterval() {
    this._minRxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRxIntervalInput() {
    return this._minRxInterval;
  }

  // min_tx_interval - computed: true, optional: true, required: false
  private _minTxInterval?: number; 
  public get minTxInterval() {
    return this.getNumberAttribute('min_tx_interval');
  }
  public set minTxInterval(value: number) {
    this._minTxInterval = value;
  }
  public resetMinTxInterval() {
    this._minTxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTxIntervalInput() {
    return this._minTxInterval;
  }

  // name - computed: true, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }
}

export class DataNiosMiscBfdtemplateResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosMiscBfdtemplateResult[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNiosMiscBfdtemplateResultOutputReference {
    return new DataNiosMiscBfdtemplateResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/misc_bfdtemplate nios_misc_bfdtemplate}
*/
export class DataNiosMiscBfdtemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_misc_bfdtemplate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosMiscBfdtemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosMiscBfdtemplate to import
  * @param importFromId The id of the existing DataNiosMiscBfdtemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/misc_bfdtemplate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosMiscBfdtemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_misc_bfdtemplate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/misc_bfdtemplate nios_misc_bfdtemplate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosMiscBfdtemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosMiscBfdtemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios_misc_bfdtemplate',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filters = config.filters;
    this._maxResults = config.maxResults;
    this._paging = config.paging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filters - computed: false, optional: true, required: false
  private _filters?: { [key: string]: string }; 
  public get filters() {
    return this.getStringMapAttribute('filters');
  }
  public set filters(value: { [key: string]: string }) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // paging - computed: false, optional: true, required: false
  private _paging?: number; 
  public get paging() {
    return this.getNumberAttribute('paging');
  }
  public set paging(value: number) {
    this._paging = value;
  }
  public resetPaging() {
    this._paging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagingInput() {
    return this._paging;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataNiosMiscBfdtemplateResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      max_results: cdktf.numberToTerraform(this._maxResults),
      paging: cdktf.numberToTerraform(this._paging),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      max_results: {
        value: cdktf.numberToHclTerraform(this._maxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      paging: {
        value: cdktf.numberToHclTerraform(this._paging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
