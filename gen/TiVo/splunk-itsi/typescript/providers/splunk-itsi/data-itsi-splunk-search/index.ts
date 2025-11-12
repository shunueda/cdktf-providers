// https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/data-sources/itsi_splunk_search
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataItsiSplunkSearchConfig extends cdktf.TerraformMetaArguments {
  /**
  * A set of strings, represents field names results will be FULL joined by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/data-sources/itsi_splunk_search#join_fields DataItsiSplunkSearch#join_fields}
  */
  readonly joinFields?: string[];
  /**
  * Number of searches that could be run in parallel per data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/data-sources/itsi_splunk_search#search_concurrency DataItsiSplunkSearch#search_concurrency}
  */
  readonly searchConcurrency?: number;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/data-sources/itsi_splunk_search#search DataItsiSplunkSearch#search}
  */
  readonly search?: DataItsiSplunkSearchSearch[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/data-sources/itsi_splunk_search#timeouts DataItsiSplunkSearch#timeouts}
  */
  readonly timeouts?: DataItsiSplunkSearchTimeouts;
}
export interface DataItsiSplunkSearchSearch {
  /**
  * Indicates whether the search is allowed to return no results. When set to false, the search job fails if no results are returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/data-sources/itsi_splunk_search#allow_no_results DataItsiSplunkSearch#allow_no_results}
  */
  readonly allowNoResults?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the search job can proceed to provide partial results if a search peer fails. When set to false, the search job fails if a search peer providing results for the search job fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/data-sources/itsi_splunk_search#allow_partial_results DataItsiSplunkSearch#allow_partial_results}
  */
  readonly allowPartialResults?: boolean | cdktf.IResolvable;
  /**
  * Specify a time string. Sets the earliest (inclusive), respectively, time bounds for the search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/data-sources/itsi_splunk_search#earliest_time DataItsiSplunkSearch#earliest_time}
  */
  readonly earliestTime?: string;
  /**
  * Specify a time string. Sets the latest (exclusive), respectively, time bounds for the search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/data-sources/itsi_splunk_search#latest_time DataItsiSplunkSearch#latest_time}
  */
  readonly latestTime?: string;
  /**
  * The search language string to execute, taking results from the local and remote servers. See https://dev.splunk.com/enterprise/docs/devtools/customsearchcommands/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/data-sources/itsi_splunk_search#query DataItsiSplunkSearch#query}
  */
  readonly query: string;
  /**
  * The Splunk app in which the search query should be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/data-sources/itsi_splunk_search#splunk_app DataItsiSplunkSearch#splunk_app}
  */
  readonly splunkApp?: string;
  /**
  * The Splunk user in the context of which the search query should be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/data-sources/itsi_splunk_search#splunk_user DataItsiSplunkSearch#splunk_user}
  */
  readonly splunkUser?: string;
  /**
  * HTTP timeout in seconds. 0 means no timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/data-sources/itsi_splunk_search#timeout DataItsiSplunkSearch#timeout}
  */
  readonly timeout?: number;
}

export function dataItsiSplunkSearchSearchToTerraform(struct?: DataItsiSplunkSearchSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_no_results: cdktf.booleanToTerraform(struct!.allowNoResults),
    allow_partial_results: cdktf.booleanToTerraform(struct!.allowPartialResults),
    earliest_time: cdktf.stringToTerraform(struct!.earliestTime),
    latest_time: cdktf.stringToTerraform(struct!.latestTime),
    query: cdktf.stringToTerraform(struct!.query),
    splunk_app: cdktf.stringToTerraform(struct!.splunkApp),
    splunk_user: cdktf.stringToTerraform(struct!.splunkUser),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function dataItsiSplunkSearchSearchToHclTerraform(struct?: DataItsiSplunkSearchSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_no_results: {
      value: cdktf.booleanToHclTerraform(struct!.allowNoResults),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_partial_results: {
      value: cdktf.booleanToHclTerraform(struct!.allowPartialResults),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    earliest_time: {
      value: cdktf.stringToHclTerraform(struct!.earliestTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latest_time: {
      value: cdktf.stringToHclTerraform(struct!.latestTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    splunk_app: {
      value: cdktf.stringToHclTerraform(struct!.splunkApp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    splunk_user: {
      value: cdktf.stringToHclTerraform(struct!.splunkUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataItsiSplunkSearchSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataItsiSplunkSearchSearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowNoResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowNoResults = this._allowNoResults;
    }
    if (this._allowPartialResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPartialResults = this._allowPartialResults;
    }
    if (this._earliestTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.earliestTime = this._earliestTime;
    }
    if (this._latestTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.latestTime = this._latestTime;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._splunkApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunkApp = this._splunkApp;
    }
    if (this._splunkUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunkUser = this._splunkUser;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataItsiSplunkSearchSearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowNoResults = undefined;
      this._allowPartialResults = undefined;
      this._earliestTime = undefined;
      this._latestTime = undefined;
      this._query = undefined;
      this._splunkApp = undefined;
      this._splunkUser = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowNoResults = value.allowNoResults;
      this._allowPartialResults = value.allowPartialResults;
      this._earliestTime = value.earliestTime;
      this._latestTime = value.latestTime;
      this._query = value.query;
      this._splunkApp = value.splunkApp;
      this._splunkUser = value.splunkUser;
      this._timeout = value.timeout;
    }
  }

  // allow_no_results - computed: false, optional: true, required: false
  private _allowNoResults?: boolean | cdktf.IResolvable; 
  public get allowNoResults() {
    return this.getBooleanAttribute('allow_no_results');
  }
  public set allowNoResults(value: boolean | cdktf.IResolvable) {
    this._allowNoResults = value;
  }
  public resetAllowNoResults() {
    this._allowNoResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNoResultsInput() {
    return this._allowNoResults;
  }

  // allow_partial_results - computed: false, optional: true, required: false
  private _allowPartialResults?: boolean | cdktf.IResolvable; 
  public get allowPartialResults() {
    return this.getBooleanAttribute('allow_partial_results');
  }
  public set allowPartialResults(value: boolean | cdktf.IResolvable) {
    this._allowPartialResults = value;
  }
  public resetAllowPartialResults() {
    this._allowPartialResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPartialResultsInput() {
    return this._allowPartialResults;
  }

  // earliest_time - computed: false, optional: true, required: false
  private _earliestTime?: string; 
  public get earliestTime() {
    return this.getStringAttribute('earliest_time');
  }
  public set earliestTime(value: string) {
    this._earliestTime = value;
  }
  public resetEarliestTime() {
    this._earliestTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earliestTimeInput() {
    return this._earliestTime;
  }

  // latest_time - computed: false, optional: true, required: false
  private _latestTime?: string; 
  public get latestTime() {
    return this.getStringAttribute('latest_time');
  }
  public set latestTime(value: string) {
    this._latestTime = value;
  }
  public resetLatestTime() {
    this._latestTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestTimeInput() {
    return this._latestTime;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // splunk_app - computed: false, optional: true, required: false
  private _splunkApp?: string; 
  public get splunkApp() {
    return this.getStringAttribute('splunk_app');
  }
  public set splunkApp(value: string) {
    this._splunkApp = value;
  }
  public resetSplunkApp() {
    this._splunkApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkAppInput() {
    return this._splunkApp;
  }

  // splunk_user - computed: false, optional: true, required: false
  private _splunkUser?: string; 
  public get splunkUser() {
    return this.getStringAttribute('splunk_user');
  }
  public set splunkUser(value: string) {
    this._splunkUser = value;
  }
  public resetSplunkUser() {
    this._splunkUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkUserInput() {
    return this._splunkUser;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}

export class DataItsiSplunkSearchSearchList extends cdktf.ComplexList {
  public internalValue? : DataItsiSplunkSearchSearch[] | cdktf.IResolvable

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
  public get(index: number): DataItsiSplunkSearchSearchOutputReference {
    return new DataItsiSplunkSearchSearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataItsiSplunkSearchTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/data-sources/itsi_splunk_search#read DataItsiSplunkSearch#read}
  */
  readonly read?: string;
}

export function dataItsiSplunkSearchTimeoutsToTerraform(struct?: DataItsiSplunkSearchTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataItsiSplunkSearchTimeoutsToHclTerraform(struct?: DataItsiSplunkSearchTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataItsiSplunkSearchTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataItsiSplunkSearchTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataItsiSplunkSearchTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/data-sources/itsi_splunk_search itsi_splunk_search}
*/
export class DataItsiSplunkSearch extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "itsi_splunk_search";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataItsiSplunkSearch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataItsiSplunkSearch to import
  * @param importFromId The id of the existing DataItsiSplunkSearch that should be imported. Refer to the {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/data-sources/itsi_splunk_search#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataItsiSplunkSearch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "itsi_splunk_search", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/data-sources/itsi_splunk_search itsi_splunk_search} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataItsiSplunkSearchConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataItsiSplunkSearchConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'itsi_splunk_search',
      terraformGeneratorMetadata: {
        providerName: 'splunk-itsi',
        providerVersion: '2.2.4',
        providerVersionConstraint: '2.2.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._joinFields = config.joinFields;
    this._searchConcurrency = config.searchConcurrency;
    this._search.internalValue = config.search;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // join_fields - computed: false, optional: true, required: false
  private _joinFields?: string[]; 
  public get joinFields() {
    return cdktf.Fn.tolist(this.getListAttribute('join_fields'));
  }
  public set joinFields(value: string[]) {
    this._joinFields = value;
  }
  public resetJoinFields() {
    this._joinFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinFieldsInput() {
    return this._joinFields;
  }

  // results - computed: true, optional: false, required: false
  public get results() {
    return this.getStringAttribute('results');
  }

  // search_concurrency - computed: false, optional: true, required: false
  private _searchConcurrency?: number; 
  public get searchConcurrency() {
    return this.getNumberAttribute('search_concurrency');
  }
  public set searchConcurrency(value: number) {
    this._searchConcurrency = value;
  }
  public resetSearchConcurrency() {
    this._searchConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchConcurrencyInput() {
    return this._searchConcurrency;
  }

  // search - computed: false, optional: true, required: false
  private _search = new DataItsiSplunkSearchSearchList(this, "search", true);
  public get search() {
    return this._search;
  }
  public putSearch(value: DataItsiSplunkSearchSearch[] | cdktf.IResolvable) {
    this._search.internalValue = value;
  }
  public resetSearch() {
    this._search.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataItsiSplunkSearchTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataItsiSplunkSearchTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      join_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._joinFields),
      search_concurrency: cdktf.numberToTerraform(this._searchConcurrency),
      search: cdktf.listMapper(dataItsiSplunkSearchSearchToTerraform, true)(this._search.internalValue),
      timeouts: dataItsiSplunkSearchTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      join_fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._joinFields),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      search_concurrency: {
        value: cdktf.numberToHclTerraform(this._searchConcurrency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      search: {
        value: cdktf.listMapperHcl(dataItsiSplunkSearchSearchToHclTerraform, true)(this._search.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataItsiSplunkSearchSearchList",
      },
      timeouts: {
        value: dataItsiSplunkSearchTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataItsiSplunkSearchTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
