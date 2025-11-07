// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/td_threat_feeds
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBloxoneTdThreatFeedsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/td_threat_feeds#filters DataBloxoneTdThreatFeeds#filters}
  */
  readonly filters?: { [key: string]: string };
}
export interface DataBloxoneTdThreatFeedsResults {
  /**
  * The source of the threat feed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/td_threat_feeds#source DataBloxoneTdThreatFeeds#source}
  */
  readonly source?: string;
}

export function dataBloxoneTdThreatFeedsResultsToTerraform(struct?: DataBloxoneTdThreatFeedsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dataBloxoneTdThreatFeedsResultsToHclTerraform(struct?: DataBloxoneTdThreatFeedsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneTdThreatFeedsResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneTdThreatFeedsResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneTdThreatFeedsResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._source = value.source;
    }
  }

  // confidence_level - computed: true, optional: false, required: false
  public get confidenceLevel() {
    return this.getStringAttribute('confidence_level');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // threat_level - computed: true, optional: false, required: false
  public get threatLevel() {
    return this.getStringAttribute('threat_level');
  }
}

export class DataBloxoneTdThreatFeedsResultsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneTdThreatFeedsResults[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneTdThreatFeedsResultsOutputReference {
    return new DataBloxoneTdThreatFeedsResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/td_threat_feeds bloxone_td_threat_feeds}
*/
export class DataBloxoneTdThreatFeeds extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_td_threat_feeds";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBloxoneTdThreatFeeds resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBloxoneTdThreatFeeds to import
  * @param importFromId The id of the existing DataBloxoneTdThreatFeeds that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/td_threat_feeds#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBloxoneTdThreatFeeds to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_td_threat_feeds", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/td_threat_feeds bloxone_td_threat_feeds} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBloxoneTdThreatFeedsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBloxoneTdThreatFeedsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bloxone_td_threat_feeds',
      terraformGeneratorMetadata: {
        providerName: 'bloxone',
        providerVersion: '1.5.3'
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

  // results - computed: true, optional: false, required: false
  private _results = new DataBloxoneTdThreatFeedsResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
