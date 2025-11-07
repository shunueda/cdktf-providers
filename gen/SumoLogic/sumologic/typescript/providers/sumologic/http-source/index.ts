// https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/http_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HttpSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/http_source#automatic_date_parsing HttpSource#automatic_date_parsing}
  */
  readonly automaticDateParsing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/http_source#category HttpSource#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/http_source#collector_id HttpSource#collector_id}
  */
  readonly collectorId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/http_source#content_type HttpSource#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/http_source#cutoff_relative_time HttpSource#cutoff_relative_time}
  */
  readonly cutoffRelativeTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/http_source#cutoff_timestamp HttpSource#cutoff_timestamp}
  */
  readonly cutoffTimestamp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/http_source#description HttpSource#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/http_source#fields HttpSource#fields}
  */
  readonly fields?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/http_source#force_timezone HttpSource#force_timezone}
  */
  readonly forceTimezone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/http_source#hash_algorithm HttpSource#hash_algorithm}
  */
  readonly hashAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/http_source#host_name HttpSource#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/http_source#id HttpSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/http_source#manual_prefix_regexp HttpSource#manual_prefix_regexp}
  */
  readonly manualPrefixRegexp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/http_source#message_per_request HttpSource#message_per_request}
  */
  readonly messagePerRequest?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/http_source#multiline_processing_enabled HttpSource#multiline_processing_enabled}
  */
  readonly multilineProcessingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/http_source#name HttpSource#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/http_source#timezone HttpSource#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/http_source#use_autoline_matching HttpSource#use_autoline_matching}
  */
  readonly useAutolineMatching?: boolean | cdktf.IResolvable;
  /**
  * default_date_formats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/http_source#default_date_formats HttpSource#default_date_formats}
  */
  readonly defaultDateFormats?: HttpSourceDefaultDateFormats[] | cdktf.IResolvable;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/http_source#filters HttpSource#filters}
  */
  readonly filters?: HttpSourceFilters[] | cdktf.IResolvable;
}
export interface HttpSourceDefaultDateFormats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/http_source#format HttpSource#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/http_source#locator HttpSource#locator}
  */
  readonly locator?: string;
}

export function httpSourceDefaultDateFormatsToTerraform(struct?: HttpSourceDefaultDateFormats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    locator: cdktf.stringToTerraform(struct!.locator),
  }
}


export function httpSourceDefaultDateFormatsToHclTerraform(struct?: HttpSourceDefaultDateFormats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locator: {
      value: cdktf.stringToHclTerraform(struct!.locator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpSourceDefaultDateFormatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpSourceDefaultDateFormats | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._locator !== undefined) {
      hasAnyValues = true;
      internalValueResult.locator = this._locator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpSourceDefaultDateFormats | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._locator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._locator = value.locator;
    }
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // locator - computed: false, optional: true, required: false
  private _locator?: string; 
  public get locator() {
    return this.getStringAttribute('locator');
  }
  public set locator(value: string) {
    this._locator = value;
  }
  public resetLocator() {
    this._locator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorInput() {
    return this._locator;
  }
}

export class HttpSourceDefaultDateFormatsList extends cdktf.ComplexList {
  public internalValue? : HttpSourceDefaultDateFormats[] | cdktf.IResolvable

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
  public get(index: number): HttpSourceDefaultDateFormatsOutputReference {
    return new HttpSourceDefaultDateFormatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpSourceFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/http_source#filter_type HttpSource#filter_type}
  */
  readonly filterType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/http_source#mask HttpSource#mask}
  */
  readonly mask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/http_source#name HttpSource#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/http_source#regexp HttpSource#regexp}
  */
  readonly regexp: string;
}

export function httpSourceFiltersToTerraform(struct?: HttpSourceFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    mask: cdktf.stringToTerraform(struct!.mask),
    name: cdktf.stringToTerraform(struct!.name),
    regexp: cdktf.stringToTerraform(struct!.regexp),
  }
}


export function httpSourceFiltersToHclTerraform(struct?: HttpSourceFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regexp: {
      value: cdktf.stringToHclTerraform(struct!.regexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpSourceFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpSourceFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpSourceFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterType = undefined;
      this._mask = undefined;
      this._name = undefined;
      this._regexp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterType = value.filterType;
      this._mask = value.mask;
      this._name = value.name;
      this._regexp = value.regexp;
    }
  }

  // filter_type - computed: false, optional: false, required: true
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // mask - computed: false, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // name - computed: false, optional: false, required: true
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

  // regexp - computed: false, optional: false, required: true
  private _regexp?: string; 
  public get regexp() {
    return this.getStringAttribute('regexp');
  }
  public set regexp(value: string) {
    this._regexp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp;
  }
}

export class HttpSourceFiltersList extends cdktf.ComplexList {
  public internalValue? : HttpSourceFilters[] | cdktf.IResolvable

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
  public get(index: number): HttpSourceFiltersOutputReference {
    return new HttpSourceFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/http_source sumologic_http_source}
*/
export class HttpSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_http_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HttpSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HttpSource to import
  * @param importFromId The id of the existing HttpSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/http_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HttpSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_http_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/http_source sumologic_http_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HttpSourceConfig
  */
  public constructor(scope: Construct, id: string, config: HttpSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_http_source',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.1.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._automaticDateParsing = config.automaticDateParsing;
    this._category = config.category;
    this._collectorId = config.collectorId;
    this._contentType = config.contentType;
    this._cutoffRelativeTime = config.cutoffRelativeTime;
    this._cutoffTimestamp = config.cutoffTimestamp;
    this._description = config.description;
    this._fields = config.fields;
    this._forceTimezone = config.forceTimezone;
    this._hashAlgorithm = config.hashAlgorithm;
    this._hostName = config.hostName;
    this._id = config.id;
    this._manualPrefixRegexp = config.manualPrefixRegexp;
    this._messagePerRequest = config.messagePerRequest;
    this._multilineProcessingEnabled = config.multilineProcessingEnabled;
    this._name = config.name;
    this._timezone = config.timezone;
    this._useAutolineMatching = config.useAutolineMatching;
    this._defaultDateFormats.internalValue = config.defaultDateFormats;
    this._filters.internalValue = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic_date_parsing - computed: false, optional: true, required: false
  private _automaticDateParsing?: boolean | cdktf.IResolvable; 
  public get automaticDateParsing() {
    return this.getBooleanAttribute('automatic_date_parsing');
  }
  public set automaticDateParsing(value: boolean | cdktf.IResolvable) {
    this._automaticDateParsing = value;
  }
  public resetAutomaticDateParsing() {
    this._automaticDateParsing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticDateParsingInput() {
    return this._automaticDateParsing;
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // collector_id - computed: false, optional: false, required: true
  private _collectorId?: number; 
  public get collectorId() {
    return this.getNumberAttribute('collector_id');
  }
  public set collectorId(value: number) {
    this._collectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorIdInput() {
    return this._collectorId;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // cutoff_relative_time - computed: false, optional: true, required: false
  private _cutoffRelativeTime?: string; 
  public get cutoffRelativeTime() {
    return this.getStringAttribute('cutoff_relative_time');
  }
  public set cutoffRelativeTime(value: string) {
    this._cutoffRelativeTime = value;
  }
  public resetCutoffRelativeTime() {
    this._cutoffRelativeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cutoffRelativeTimeInput() {
    return this._cutoffRelativeTime;
  }

  // cutoff_timestamp - computed: false, optional: true, required: false
  private _cutoffTimestamp?: number; 
  public get cutoffTimestamp() {
    return this.getNumberAttribute('cutoff_timestamp');
  }
  public set cutoffTimestamp(value: number) {
    this._cutoffTimestamp = value;
  }
  public resetCutoffTimestamp() {
    this._cutoffTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cutoffTimestampInput() {
    return this._cutoffTimestamp;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: { [key: string]: string }; 
  public get fields() {
    return this.getStringMapAttribute('fields');
  }
  public set fields(value: { [key: string]: string }) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // force_timezone - computed: false, optional: true, required: false
  private _forceTimezone?: boolean | cdktf.IResolvable; 
  public get forceTimezone() {
    return this.getBooleanAttribute('force_timezone');
  }
  public set forceTimezone(value: boolean | cdktf.IResolvable) {
    this._forceTimezone = value;
  }
  public resetForceTimezone() {
    this._forceTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceTimezoneInput() {
    return this._forceTimezone;
  }

  // hash_algorithm - computed: false, optional: true, required: false
  private _hashAlgorithm?: string; 
  public get hashAlgorithm() {
    return this.getStringAttribute('hash_algorithm');
  }
  public set hashAlgorithm(value: string) {
    this._hashAlgorithm = value;
  }
  public resetHashAlgorithm() {
    this._hashAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashAlgorithmInput() {
    return this._hashAlgorithm;
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
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

  // manual_prefix_regexp - computed: false, optional: true, required: false
  private _manualPrefixRegexp?: string; 
  public get manualPrefixRegexp() {
    return this.getStringAttribute('manual_prefix_regexp');
  }
  public set manualPrefixRegexp(value: string) {
    this._manualPrefixRegexp = value;
  }
  public resetManualPrefixRegexp() {
    this._manualPrefixRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualPrefixRegexpInput() {
    return this._manualPrefixRegexp;
  }

  // message_per_request - computed: false, optional: true, required: false
  private _messagePerRequest?: boolean | cdktf.IResolvable; 
  public get messagePerRequest() {
    return this.getBooleanAttribute('message_per_request');
  }
  public set messagePerRequest(value: boolean | cdktf.IResolvable) {
    this._messagePerRequest = value;
  }
  public resetMessagePerRequest() {
    this._messagePerRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagePerRequestInput() {
    return this._messagePerRequest;
  }

  // multiline_processing_enabled - computed: false, optional: true, required: false
  private _multilineProcessingEnabled?: boolean | cdktf.IResolvable; 
  public get multilineProcessingEnabled() {
    return this.getBooleanAttribute('multiline_processing_enabled');
  }
  public set multilineProcessingEnabled(value: boolean | cdktf.IResolvable) {
    this._multilineProcessingEnabled = value;
  }
  public resetMultilineProcessingEnabled() {
    this._multilineProcessingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multilineProcessingEnabledInput() {
    return this._multilineProcessingEnabled;
  }

  // name - computed: false, optional: false, required: true
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // use_autoline_matching - computed: false, optional: true, required: false
  private _useAutolineMatching?: boolean | cdktf.IResolvable; 
  public get useAutolineMatching() {
    return this.getBooleanAttribute('use_autoline_matching');
  }
  public set useAutolineMatching(value: boolean | cdktf.IResolvable) {
    this._useAutolineMatching = value;
  }
  public resetUseAutolineMatching() {
    this._useAutolineMatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAutolineMatchingInput() {
    return this._useAutolineMatching;
  }

  // default_date_formats - computed: false, optional: true, required: false
  private _defaultDateFormats = new HttpSourceDefaultDateFormatsList(this, "default_date_formats", false);
  public get defaultDateFormats() {
    return this._defaultDateFormats;
  }
  public putDefaultDateFormats(value: HttpSourceDefaultDateFormats[] | cdktf.IResolvable) {
    this._defaultDateFormats.internalValue = value;
  }
  public resetDefaultDateFormats() {
    this._defaultDateFormats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDateFormatsInput() {
    return this._defaultDateFormats.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new HttpSourceFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: HttpSourceFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automatic_date_parsing: cdktf.booleanToTerraform(this._automaticDateParsing),
      category: cdktf.stringToTerraform(this._category),
      collector_id: cdktf.numberToTerraform(this._collectorId),
      content_type: cdktf.stringToTerraform(this._contentType),
      cutoff_relative_time: cdktf.stringToTerraform(this._cutoffRelativeTime),
      cutoff_timestamp: cdktf.numberToTerraform(this._cutoffTimestamp),
      description: cdktf.stringToTerraform(this._description),
      fields: cdktf.hashMapper(cdktf.stringToTerraform)(this._fields),
      force_timezone: cdktf.booleanToTerraform(this._forceTimezone),
      hash_algorithm: cdktf.stringToTerraform(this._hashAlgorithm),
      host_name: cdktf.stringToTerraform(this._hostName),
      id: cdktf.stringToTerraform(this._id),
      manual_prefix_regexp: cdktf.stringToTerraform(this._manualPrefixRegexp),
      message_per_request: cdktf.booleanToTerraform(this._messagePerRequest),
      multiline_processing_enabled: cdktf.booleanToTerraform(this._multilineProcessingEnabled),
      name: cdktf.stringToTerraform(this._name),
      timezone: cdktf.stringToTerraform(this._timezone),
      use_autoline_matching: cdktf.booleanToTerraform(this._useAutolineMatching),
      default_date_formats: cdktf.listMapper(httpSourceDefaultDateFormatsToTerraform, true)(this._defaultDateFormats.internalValue),
      filters: cdktf.listMapper(httpSourceFiltersToTerraform, true)(this._filters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automatic_date_parsing: {
        value: cdktf.booleanToHclTerraform(this._automaticDateParsing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collector_id: {
        value: cdktf.numberToHclTerraform(this._collectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      content_type: {
        value: cdktf.stringToHclTerraform(this._contentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cutoff_relative_time: {
        value: cdktf.stringToHclTerraform(this._cutoffRelativeTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cutoff_timestamp: {
        value: cdktf.numberToHclTerraform(this._cutoffTimestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fields: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._fields),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      force_timezone: {
        value: cdktf.booleanToHclTerraform(this._forceTimezone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hash_algorithm: {
        value: cdktf.stringToHclTerraform(this._hashAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
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
      manual_prefix_regexp: {
        value: cdktf.stringToHclTerraform(this._manualPrefixRegexp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_per_request: {
        value: cdktf.booleanToHclTerraform(this._messagePerRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multiline_processing_enabled: {
        value: cdktf.booleanToHclTerraform(this._multilineProcessingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      use_autoline_matching: {
        value: cdktf.booleanToHclTerraform(this._useAutolineMatching),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_date_formats: {
        value: cdktf.listMapperHcl(httpSourceDefaultDateFormatsToHclTerraform, true)(this._defaultDateFormats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HttpSourceDefaultDateFormatsList",
      },
      filters: {
        value: cdktf.listMapperHcl(httpSourceFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HttpSourceFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
