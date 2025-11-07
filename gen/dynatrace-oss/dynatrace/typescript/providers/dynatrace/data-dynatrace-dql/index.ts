// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/data-sources/dql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDynatraceDqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * In case not specified in the DQL string, the sampling ratio defined here is applied. Note that this is only applicable to log queries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/data-sources/dql#default_sampling_ratio DataDynatraceDql#default_sampling_ratio}
  */
  readonly defaultSamplingRatio?: number;
  /**
  * Limit in gigabytes for the amount data that will be scanned during read
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/data-sources/dql#default_scan_limit_gbytes DataDynatraceDql#default_scan_limit_gbytes}
  */
  readonly defaultScanLimitGbytes?: number;
  /**
  * The query timeframe 'end' timestamp in ISO-8601 or RFC3339 format. If the timeframe 'start' parameter is missing, the whole timeframe is ignored. Note that if a timeframe is specified within the query string (query) then it has precedence over this query request parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/data-sources/dql#default_timeframe_end DataDynatraceDql#default_timeframe_end}
  */
  readonly defaultTimeframeEnd?: string;
  /**
  * The query timeframe 'start' timestamp in ISO-8601 or RFC3339 format. If the timeframe 'end' parameter is missing, the whole timeframe is ignored. Note that if a timeframe is specified within the query string (query) then it has precedence over this query request parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/data-sources/dql#default_timeframe_start DataDynatraceDql#default_timeframe_start}
  */
  readonly defaultTimeframeStart?: string;
  /**
  * The query will stop reading data after reaching the fetch-timeout. The query execution will continue, providing a partial result based on the read data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/data-sources/dql#fetch_timeout_seconds DataDynatraceDql#fetch_timeout_seconds}
  */
  readonly fetchTimeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/data-sources/dql#id DataDynatraceDql#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The query locale. If none specified, then a language/country neutral locale is chosen. The input values take the ISO-639 Language code with an optional ISO-3166 country code appended to it with an underscore. For instance, both values are valid 'en' or 'en_US'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/data-sources/dql#locale DataDynatraceDql#locale}
  */
  readonly locale?: string;
  /**
  * The maximum number of result bytes that this query will return
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/data-sources/dql#max_result_bytes DataDynatraceDql#max_result_bytes}
  */
  readonly maxResultBytes?: number;
  /**
  * The maximum number of result records that this query will return
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/data-sources/dql#max_result_records DataDynatraceDql#max_result_records}
  */
  readonly maxResultRecords?: number;
  /**
  * example: fetch events | filter event.type == "davis" AND davis.status != "CLOSED" | fields timestamp, davis.title, davis.underMaintenance, davis.status | sort timestamp | limit 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/data-sources/dql#query DataDynatraceDql#query}
  */
  readonly query: string;
  /**
  * The query timezone. If none is specified, UTC is used as fallback. The list of valid input values matches that of the IANA Time Zone Database (TZDB). It accepts values in their canonical names like 'Europe/Paris', the abbreviated version like CET or the UTC offset format like '+01:00'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/data-sources/dql#timezone DataDynatraceDql#timezone}
  */
  readonly timezone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/data-sources/dql dynatrace_dql}
*/
export class DataDynatraceDql extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_dql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDynatraceDql resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDynatraceDql to import
  * @param importFromId The id of the existing DataDynatraceDql that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/data-sources/dql#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDynatraceDql to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_dql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/data-sources/dql dynatrace_dql} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDynatraceDqlConfig
  */
  public constructor(scope: Construct, id: string, config: DataDynatraceDqlConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_dql',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultSamplingRatio = config.defaultSamplingRatio;
    this._defaultScanLimitGbytes = config.defaultScanLimitGbytes;
    this._defaultTimeframeEnd = config.defaultTimeframeEnd;
    this._defaultTimeframeStart = config.defaultTimeframeStart;
    this._fetchTimeoutSeconds = config.fetchTimeoutSeconds;
    this._id = config.id;
    this._locale = config.locale;
    this._maxResultBytes = config.maxResultBytes;
    this._maxResultRecords = config.maxResultRecords;
    this._query = config.query;
    this._timezone = config.timezone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_sampling_ratio - computed: false, optional: true, required: false
  private _defaultSamplingRatio?: number; 
  public get defaultSamplingRatio() {
    return this.getNumberAttribute('default_sampling_ratio');
  }
  public set defaultSamplingRatio(value: number) {
    this._defaultSamplingRatio = value;
  }
  public resetDefaultSamplingRatio() {
    this._defaultSamplingRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSamplingRatioInput() {
    return this._defaultSamplingRatio;
  }

  // default_scan_limit_gbytes - computed: false, optional: true, required: false
  private _defaultScanLimitGbytes?: number; 
  public get defaultScanLimitGbytes() {
    return this.getNumberAttribute('default_scan_limit_gbytes');
  }
  public set defaultScanLimitGbytes(value: number) {
    this._defaultScanLimitGbytes = value;
  }
  public resetDefaultScanLimitGbytes() {
    this._defaultScanLimitGbytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultScanLimitGbytesInput() {
    return this._defaultScanLimitGbytes;
  }

  // default_timeframe_end - computed: false, optional: true, required: false
  private _defaultTimeframeEnd?: string; 
  public get defaultTimeframeEnd() {
    return this.getStringAttribute('default_timeframe_end');
  }
  public set defaultTimeframeEnd(value: string) {
    this._defaultTimeframeEnd = value;
  }
  public resetDefaultTimeframeEnd() {
    this._defaultTimeframeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTimeframeEndInput() {
    return this._defaultTimeframeEnd;
  }

  // default_timeframe_start - computed: false, optional: true, required: false
  private _defaultTimeframeStart?: string; 
  public get defaultTimeframeStart() {
    return this.getStringAttribute('default_timeframe_start');
  }
  public set defaultTimeframeStart(value: string) {
    this._defaultTimeframeStart = value;
  }
  public resetDefaultTimeframeStart() {
    this._defaultTimeframeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTimeframeStartInput() {
    return this._defaultTimeframeStart;
  }

  // fetch_timeout_seconds - computed: false, optional: true, required: false
  private _fetchTimeoutSeconds?: number; 
  public get fetchTimeoutSeconds() {
    return this.getNumberAttribute('fetch_timeout_seconds');
  }
  public set fetchTimeoutSeconds(value: number) {
    this._fetchTimeoutSeconds = value;
  }
  public resetFetchTimeoutSeconds() {
    this._fetchTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchTimeoutSecondsInput() {
    return this._fetchTimeoutSeconds;
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

  // locale - computed: false, optional: true, required: false
  private _locale?: string; 
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }

  // max_result_bytes - computed: false, optional: true, required: false
  private _maxResultBytes?: number; 
  public get maxResultBytes() {
    return this.getNumberAttribute('max_result_bytes');
  }
  public set maxResultBytes(value: number) {
    this._maxResultBytes = value;
  }
  public resetMaxResultBytes() {
    this._maxResultBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultBytesInput() {
    return this._maxResultBytes;
  }

  // max_result_records - computed: false, optional: true, required: false
  private _maxResultRecords?: number; 
  public get maxResultRecords() {
    return this.getNumberAttribute('max_result_records');
  }
  public set maxResultRecords(value: number) {
    this._maxResultRecords = value;
  }
  public resetMaxResultRecords() {
    this._maxResultRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultRecordsInput() {
    return this._maxResultRecords;
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

  // records - computed: true, optional: false, required: false
  public get records() {
    return this.getStringAttribute('records');
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_sampling_ratio: cdktf.numberToTerraform(this._defaultSamplingRatio),
      default_scan_limit_gbytes: cdktf.numberToTerraform(this._defaultScanLimitGbytes),
      default_timeframe_end: cdktf.stringToTerraform(this._defaultTimeframeEnd),
      default_timeframe_start: cdktf.stringToTerraform(this._defaultTimeframeStart),
      fetch_timeout_seconds: cdktf.numberToTerraform(this._fetchTimeoutSeconds),
      id: cdktf.stringToTerraform(this._id),
      locale: cdktf.stringToTerraform(this._locale),
      max_result_bytes: cdktf.numberToTerraform(this._maxResultBytes),
      max_result_records: cdktf.numberToTerraform(this._maxResultRecords),
      query: cdktf.stringToTerraform(this._query),
      timezone: cdktf.stringToTerraform(this._timezone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_sampling_ratio: {
        value: cdktf.numberToHclTerraform(this._defaultSamplingRatio),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_scan_limit_gbytes: {
        value: cdktf.numberToHclTerraform(this._defaultScanLimitGbytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_timeframe_end: {
        value: cdktf.stringToHclTerraform(this._defaultTimeframeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_timeframe_start: {
        value: cdktf.stringToHclTerraform(this._defaultTimeframeStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fetch_timeout_seconds: {
        value: cdktf.numberToHclTerraform(this._fetchTimeoutSeconds),
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
      locale: {
        value: cdktf.stringToHclTerraform(this._locale),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_result_bytes: {
        value: cdktf.numberToHclTerraform(this._maxResultBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_result_records: {
        value: cdktf.numberToHclTerraform(this._maxResultRecords),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
