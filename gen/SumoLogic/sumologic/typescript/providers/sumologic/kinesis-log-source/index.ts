// https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KinesisLogSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#automatic_date_parsing KinesisLogSource#automatic_date_parsing}
  */
  readonly automaticDateParsing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#category KinesisLogSource#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#collector_id KinesisLogSource#collector_id}
  */
  readonly collectorId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#content_type KinesisLogSource#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#cutoff_relative_time KinesisLogSource#cutoff_relative_time}
  */
  readonly cutoffRelativeTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#cutoff_timestamp KinesisLogSource#cutoff_timestamp}
  */
  readonly cutoffTimestamp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#description KinesisLogSource#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#fields KinesisLogSource#fields}
  */
  readonly fields?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#force_timezone KinesisLogSource#force_timezone}
  */
  readonly forceTimezone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#hash_algorithm KinesisLogSource#hash_algorithm}
  */
  readonly hashAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#host_name KinesisLogSource#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#id KinesisLogSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#manual_prefix_regexp KinesisLogSource#manual_prefix_regexp}
  */
  readonly manualPrefixRegexp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#message_per_request KinesisLogSource#message_per_request}
  */
  readonly messagePerRequest?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#multiline_processing_enabled KinesisLogSource#multiline_processing_enabled}
  */
  readonly multilineProcessingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#name KinesisLogSource#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#timezone KinesisLogSource#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#use_autoline_matching KinesisLogSource#use_autoline_matching}
  */
  readonly useAutolineMatching?: boolean | cdktf.IResolvable;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#authentication KinesisLogSource#authentication}
  */
  readonly authentication?: KinesisLogSourceAuthentication;
  /**
  * default_date_formats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#default_date_formats KinesisLogSource#default_date_formats}
  */
  readonly defaultDateFormats?: KinesisLogSourceDefaultDateFormats[] | cdktf.IResolvable;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#filters KinesisLogSource#filters}
  */
  readonly filters?: KinesisLogSourceFilters[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#path KinesisLogSource#path}
  */
  readonly path?: KinesisLogSourcePath;
}
export interface KinesisLogSourceAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#access_key KinesisLogSource#access_key}
  */
  readonly accessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#role_arn KinesisLogSource#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#secret_key KinesisLogSource#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#type KinesisLogSource#type}
  */
  readonly type?: string;
}

export function kinesisLogSourceAuthenticationToTerraform(struct?: KinesisLogSourceAuthenticationOutputReference | KinesisLogSourceAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function kinesisLogSourceAuthenticationToHclTerraform(struct?: KinesisLogSourceAuthenticationOutputReference | KinesisLogSourceAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisLogSourceAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisLogSourceAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisLogSourceAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._roleArn = undefined;
      this._secretKey = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._roleArn = value.roleArn;
      this._secretKey = value.secretKey;
      this._type = value.type;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // type - computed: false, optional: true, required: false
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
}
export interface KinesisLogSourceDefaultDateFormats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#format KinesisLogSource#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#locator KinesisLogSource#locator}
  */
  readonly locator?: string;
}

export function kinesisLogSourceDefaultDateFormatsToTerraform(struct?: KinesisLogSourceDefaultDateFormats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    locator: cdktf.stringToTerraform(struct!.locator),
  }
}


export function kinesisLogSourceDefaultDateFormatsToHclTerraform(struct?: KinesisLogSourceDefaultDateFormats | cdktf.IResolvable): any {
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

export class KinesisLogSourceDefaultDateFormatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KinesisLogSourceDefaultDateFormats | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KinesisLogSourceDefaultDateFormats | cdktf.IResolvable | undefined) {
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

export class KinesisLogSourceDefaultDateFormatsList extends cdktf.ComplexList {
  public internalValue? : KinesisLogSourceDefaultDateFormats[] | cdktf.IResolvable

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
  public get(index: number): KinesisLogSourceDefaultDateFormatsOutputReference {
    return new KinesisLogSourceDefaultDateFormatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisLogSourceFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#filter_type KinesisLogSource#filter_type}
  */
  readonly filterType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#mask KinesisLogSource#mask}
  */
  readonly mask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#name KinesisLogSource#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#regexp KinesisLogSource#regexp}
  */
  readonly regexp: string;
}

export function kinesisLogSourceFiltersToTerraform(struct?: KinesisLogSourceFilters | cdktf.IResolvable): any {
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


export function kinesisLogSourceFiltersToHclTerraform(struct?: KinesisLogSourceFilters | cdktf.IResolvable): any {
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

export class KinesisLogSourceFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KinesisLogSourceFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KinesisLogSourceFilters | cdktf.IResolvable | undefined) {
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

export class KinesisLogSourceFiltersList extends cdktf.ComplexList {
  public internalValue? : KinesisLogSourceFilters[] | cdktf.IResolvable

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
  public get(index: number): KinesisLogSourceFiltersOutputReference {
    return new KinesisLogSourceFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisLogSourcePath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#bucket_name KinesisLogSource#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#path_expression KinesisLogSource#path_expression}
  */
  readonly pathExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#scan_interval KinesisLogSource#scan_interval}
  */
  readonly scanInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#type KinesisLogSource#type}
  */
  readonly type?: string;
}

export function kinesisLogSourcePathToTerraform(struct?: KinesisLogSourcePathOutputReference | KinesisLogSourcePath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    path_expression: cdktf.stringToTerraform(struct!.pathExpression),
    scan_interval: cdktf.numberToTerraform(struct!.scanInterval),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function kinesisLogSourcePathToHclTerraform(struct?: KinesisLogSourcePathOutputReference | KinesisLogSourcePath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_expression: {
      value: cdktf.stringToHclTerraform(struct!.pathExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_interval: {
      value: cdktf.numberToHclTerraform(struct!.scanInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisLogSourcePathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisLogSourcePath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._pathExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathExpression = this._pathExpression;
    }
    if (this._scanInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanInterval = this._scanInterval;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisLogSourcePath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._pathExpression = undefined;
      this._scanInterval = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._pathExpression = value.pathExpression;
      this._scanInterval = value.scanInterval;
      this._type = value.type;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // path_expression - computed: false, optional: true, required: false
  private _pathExpression?: string; 
  public get pathExpression() {
    return this.getStringAttribute('path_expression');
  }
  public set pathExpression(value: string) {
    this._pathExpression = value;
  }
  public resetPathExpression() {
    this._pathExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathExpressionInput() {
    return this._pathExpression;
  }

  // scan_interval - computed: false, optional: true, required: false
  private _scanInterval?: number; 
  public get scanInterval() {
    return this.getNumberAttribute('scan_interval');
  }
  public set scanInterval(value: number) {
    this._scanInterval = value;
  }
  public resetScanInterval() {
    this._scanInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanIntervalInput() {
    return this._scanInterval;
  }

  // type - computed: false, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source sumologic_kinesis_log_source}
*/
export class KinesisLogSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_kinesis_log_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KinesisLogSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KinesisLogSource to import
  * @param importFromId The id of the existing KinesisLogSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KinesisLogSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_kinesis_log_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/kinesis_log_source sumologic_kinesis_log_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KinesisLogSourceConfig
  */
  public constructor(scope: Construct, id: string, config: KinesisLogSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_kinesis_log_source',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.2.0',
        providerVersionConstraint: '3.2.0'
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
    this._authentication.internalValue = config.authentication;
    this._defaultDateFormats.internalValue = config.defaultDateFormats;
    this._filters.internalValue = config.filters;
    this._path.internalValue = config.path;
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

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new KinesisLogSourceAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: KinesisLogSourceAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // default_date_formats - computed: false, optional: true, required: false
  private _defaultDateFormats = new KinesisLogSourceDefaultDateFormatsList(this, "default_date_formats", false);
  public get defaultDateFormats() {
    return this._defaultDateFormats;
  }
  public putDefaultDateFormats(value: KinesisLogSourceDefaultDateFormats[] | cdktf.IResolvable) {
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
  private _filters = new KinesisLogSourceFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: KinesisLogSourceFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new KinesisLogSourcePathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: KinesisLogSourcePath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
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
      authentication: kinesisLogSourceAuthenticationToTerraform(this._authentication.internalValue),
      default_date_formats: cdktf.listMapper(kinesisLogSourceDefaultDateFormatsToTerraform, true)(this._defaultDateFormats.internalValue),
      filters: cdktf.listMapper(kinesisLogSourceFiltersToTerraform, true)(this._filters.internalValue),
      path: kinesisLogSourcePathToTerraform(this._path.internalValue),
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
      authentication: {
        value: kinesisLogSourceAuthenticationToHclTerraform(this._authentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KinesisLogSourceAuthenticationList",
      },
      default_date_formats: {
        value: cdktf.listMapperHcl(kinesisLogSourceDefaultDateFormatsToHclTerraform, true)(this._defaultDateFormats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KinesisLogSourceDefaultDateFormatsList",
      },
      filters: {
        value: cdktf.listMapperHcl(kinesisLogSourceFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KinesisLogSourceFiltersList",
      },
      path: {
        value: kinesisLogSourcePathToHclTerraform(this._path.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KinesisLogSourcePathList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
