// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClsCosShipperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Destination bucket in the shipping rule to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper#bucket ClsCosShipper#bucket}
  */
  readonly bucket: string;
  /**
  * End time for data shipping, which cannot be set to a future time. If you do not specify this parameter, it indicates continuous data shipping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper#end_time ClsCosShipper#end_time}
  */
  readonly endTime?: number;
  /**
  * Naming a shipping file. Valid values: 0 (by random number); 1 (by shipping time). Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper#filename_mode ClsCosShipper#filename_mode}
  */
  readonly filenameMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper#id ClsCosShipper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Shipping time interval in seconds. Default value: 300. Value range: 300~900.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper#interval ClsCosShipper#interval}
  */
  readonly interval?: number;
  /**
  * Maximum size of a file to be shipped, in MB. Default value: 256. Value range: 100~256.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper#max_size ClsCosShipper#max_size}
  */
  readonly maxSize?: number;
  /**
  * Partition rule of shipped log, which can be represented in strftime time format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper#partition ClsCosShipper#partition}
  */
  readonly partition?: string;
  /**
  * Prefix of the shipping directory in the shipping rule to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper#prefix ClsCosShipper#prefix}
  */
  readonly prefix: string;
  /**
  * Shipping rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper#shipper_name ClsCosShipper#shipper_name}
  */
  readonly shipperName: string;
  /**
  * Start time for data shipping, which cannot be earlier than the lifecycle start time of the log topic. If you do not specify this parameter, it will be set to the time when you create the data shipping task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper#start_time ClsCosShipper#start_time}
  */
  readonly startTime?: number;
  /**
  * COS bucket storage type. support: STANDARD_IA, ARCHIVE, DEEP_ARCHIVE, STANDARD, MAZ_STANDARD, MAZ_STANDARD_IA, INTELLIGENT_TIERING.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper#storage_type ClsCosShipper#storage_type}
  */
  readonly storageType?: string;
  /**
  * ID of the log topic to which the shipping rule to be created belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper#topic_id ClsCosShipper#topic_id}
  */
  readonly topicId: string;
  /**
  * compress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper#compress ClsCosShipper#compress}
  */
  readonly compress?: ClsCosShipperCompress;
  /**
  * content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper#content ClsCosShipper#content}
  */
  readonly content?: ClsCosShipperContent;
  /**
  * filter_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper#filter_rules ClsCosShipper#filter_rules}
  */
  readonly filterRules?: ClsCosShipperFilterRules[] | cdktf.IResolvable;
}
export interface ClsCosShipperCompress {
  /**
  * Compression format. Valid values: gzip, lzop, none (no compression).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper#format ClsCosShipper#format}
  */
  readonly format: string;
}

export function clsCosShipperCompressToTerraform(struct?: ClsCosShipperCompressOutputReference | ClsCosShipperCompress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
  }
}


export function clsCosShipperCompressToHclTerraform(struct?: ClsCosShipperCompressOutputReference | ClsCosShipperCompress): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsCosShipperCompressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClsCosShipperCompress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsCosShipperCompress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._format = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._format = value.format;
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
}
export interface ClsCosShipperContentCsv {
  /**
  * Field delimiter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper#delimiter ClsCosShipper#delimiter}
  */
  readonly delimiter: string;
  /**
  * Field delimiter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper#escape_char ClsCosShipper#escape_char}
  */
  readonly escapeChar: string;
  /**
  * Names of keys.Note: this field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper#keys ClsCosShipper#keys}
  */
  readonly keys: string[];
  /**
  * Content used to populate non-existing fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper#non_existing_field ClsCosShipper#non_existing_field}
  */
  readonly nonExistingField: string;
  /**
  * Whether to print key on the first row of the CSV file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper#print_key ClsCosShipper#print_key}
  */
  readonly printKey: boolean | cdktf.IResolvable;
}

export function clsCosShipperContentCsvToTerraform(struct?: ClsCosShipperContentCsvOutputReference | ClsCosShipperContentCsv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    escape_char: cdktf.stringToTerraform(struct!.escapeChar),
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
    non_existing_field: cdktf.stringToTerraform(struct!.nonExistingField),
    print_key: cdktf.booleanToTerraform(struct!.printKey),
  }
}


export function clsCosShipperContentCsvToHclTerraform(struct?: ClsCosShipperContentCsvOutputReference | ClsCosShipperContentCsv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    escape_char: {
      value: cdktf.stringToHclTerraform(struct!.escapeChar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    non_existing_field: {
      value: cdktf.stringToHclTerraform(struct!.nonExistingField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    print_key: {
      value: cdktf.booleanToHclTerraform(struct!.printKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsCosShipperContentCsvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClsCosShipperContentCsv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._escapeChar !== undefined) {
      hasAnyValues = true;
      internalValueResult.escapeChar = this._escapeChar;
    }
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    if (this._nonExistingField !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonExistingField = this._nonExistingField;
    }
    if (this._printKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.printKey = this._printKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsCosShipperContentCsv | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delimiter = undefined;
      this._escapeChar = undefined;
      this._keys = undefined;
      this._nonExistingField = undefined;
      this._printKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delimiter = value.delimiter;
      this._escapeChar = value.escapeChar;
      this._keys = value.keys;
      this._nonExistingField = value.nonExistingField;
      this._printKey = value.printKey;
    }
  }

  // delimiter - computed: false, optional: false, required: true
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // escape_char - computed: false, optional: false, required: true
  private _escapeChar?: string; 
  public get escapeChar() {
    return this.getStringAttribute('escape_char');
  }
  public set escapeChar(value: string) {
    this._escapeChar = value;
  }
  // Temporarily expose input value. Use with caution.
  public get escapeCharInput() {
    return this._escapeChar;
  }

  // keys - computed: false, optional: false, required: true
  private _keys?: string[]; 
  public get keys() {
    return cdktf.Fn.tolist(this.getListAttribute('keys'));
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }

  // non_existing_field - computed: false, optional: false, required: true
  private _nonExistingField?: string; 
  public get nonExistingField() {
    return this.getStringAttribute('non_existing_field');
  }
  public set nonExistingField(value: string) {
    this._nonExistingField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nonExistingFieldInput() {
    return this._nonExistingField;
  }

  // print_key - computed: false, optional: false, required: true
  private _printKey?: boolean | cdktf.IResolvable; 
  public get printKey() {
    return this.getBooleanAttribute('print_key');
  }
  public set printKey(value: boolean | cdktf.IResolvable) {
    this._printKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get printKeyInput() {
    return this._printKey;
  }
}
export interface ClsCosShipperContentJson {
  /**
  * Enablement flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper#enable_tag ClsCosShipper#enable_tag}
  */
  readonly enableTag: boolean | cdktf.IResolvable;
  /**
  * Metadata information list
  * Note: this field may return null, indicating that no valid values can be obtained..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper#meta_fields ClsCosShipper#meta_fields}
  */
  readonly metaFields: string[];
}

export function clsCosShipperContentJsonToTerraform(struct?: ClsCosShipperContentJsonOutputReference | ClsCosShipperContentJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_tag: cdktf.booleanToTerraform(struct!.enableTag),
    meta_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.metaFields),
  }
}


export function clsCosShipperContentJsonToHclTerraform(struct?: ClsCosShipperContentJsonOutputReference | ClsCosShipperContentJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_tag: {
      value: cdktf.booleanToHclTerraform(struct!.enableTag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    meta_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.metaFields),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsCosShipperContentJsonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClsCosShipperContentJson | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTag = this._enableTag;
    }
    if (this._metaFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.metaFields = this._metaFields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsCosShipperContentJson | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableTag = undefined;
      this._metaFields = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableTag = value.enableTag;
      this._metaFields = value.metaFields;
    }
  }

  // enable_tag - computed: false, optional: false, required: true
  private _enableTag?: boolean | cdktf.IResolvable; 
  public get enableTag() {
    return this.getBooleanAttribute('enable_tag');
  }
  public set enableTag(value: boolean | cdktf.IResolvable) {
    this._enableTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTagInput() {
    return this._enableTag;
  }

  // meta_fields - computed: false, optional: false, required: true
  private _metaFields?: string[]; 
  public get metaFields() {
    return cdktf.Fn.tolist(this.getListAttribute('meta_fields'));
  }
  public set metaFields(value: string[]) {
    this._metaFields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metaFieldsInput() {
    return this._metaFields;
  }
}
export interface ClsCosShipperContent {
  /**
  * Content format. Valid values: json, csv.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper#format ClsCosShipper#format}
  */
  readonly format: string;
  /**
  * csv block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper#csv ClsCosShipper#csv}
  */
  readonly csv?: ClsCosShipperContentCsv;
  /**
  * json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper#json ClsCosShipper#json}
  */
  readonly json?: ClsCosShipperContentJson;
}

export function clsCosShipperContentToTerraform(struct?: ClsCosShipperContentOutputReference | ClsCosShipperContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    csv: clsCosShipperContentCsvToTerraform(struct!.csv),
    json: clsCosShipperContentJsonToTerraform(struct!.json),
  }
}


export function clsCosShipperContentToHclTerraform(struct?: ClsCosShipperContentOutputReference | ClsCosShipperContent): any {
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
    csv: {
      value: clsCosShipperContentCsvToHclTerraform(struct!.csv),
      isBlock: true,
      type: "list",
      storageClassType: "ClsCosShipperContentCsvList",
    },
    json: {
      value: clsCosShipperContentJsonToHclTerraform(struct!.json),
      isBlock: true,
      type: "list",
      storageClassType: "ClsCosShipperContentJsonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsCosShipperContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClsCosShipperContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._csv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csv = this._csv?.internalValue;
    }
    if (this._json?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsCosShipperContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._format = undefined;
      this._csv.internalValue = undefined;
      this._json.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._format = value.format;
      this._csv.internalValue = value.csv;
      this._json.internalValue = value.json;
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

  // csv - computed: false, optional: true, required: false
  private _csv = new ClsCosShipperContentCsvOutputReference(this, "csv");
  public get csv() {
    return this._csv;
  }
  public putCsv(value: ClsCosShipperContentCsv) {
    this._csv.internalValue = value;
  }
  public resetCsv() {
    this._csv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvInput() {
    return this._csv.internalValue;
  }

  // json - computed: false, optional: true, required: false
  private _json = new ClsCosShipperContentJsonOutputReference(this, "json");
  public get json() {
    return this._json;
  }
  public putJson(value: ClsCosShipperContentJson) {
    this._json.internalValue = value;
  }
  public resetJson() {
    this._json.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json.internalValue;
  }
}
export interface ClsCosShipperFilterRules {
  /**
  * Filter rule key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper#key ClsCosShipper#key}
  */
  readonly key: string;
  /**
  * Filter rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper#regex ClsCosShipper#regex}
  */
  readonly regex: string;
  /**
  * Filter rule value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper#value ClsCosShipper#value}
  */
  readonly value: string;
}

export function clsCosShipperFilterRulesToTerraform(struct?: ClsCosShipperFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    regex: cdktf.stringToTerraform(struct!.regex),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clsCosShipperFilterRulesToHclTerraform(struct?: ClsCosShipperFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsCosShipperFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClsCosShipperFilterRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsCosShipperFilterRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._regex = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._regex = value.regex;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // regex - computed: false, optional: false, required: true
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClsCosShipperFilterRulesList extends cdktf.ComplexList {
  public internalValue? : ClsCosShipperFilterRules[] | cdktf.IResolvable

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
  public get(index: number): ClsCosShipperFilterRulesOutputReference {
    return new ClsCosShipperFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper tencentcloud_cls_cos_shipper}
*/
export class ClsCosShipper extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cls_cos_shipper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClsCosShipper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClsCosShipper to import
  * @param importFromId The id of the existing ClsCosShipper that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClsCosShipper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cls_cos_shipper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cls_cos_shipper tencentcloud_cls_cos_shipper} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClsCosShipperConfig
  */
  public constructor(scope: Construct, id: string, config: ClsCosShipperConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cls_cos_shipper',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucket = config.bucket;
    this._endTime = config.endTime;
    this._filenameMode = config.filenameMode;
    this._id = config.id;
    this._interval = config.interval;
    this._maxSize = config.maxSize;
    this._partition = config.partition;
    this._prefix = config.prefix;
    this._shipperName = config.shipperName;
    this._startTime = config.startTime;
    this._storageType = config.storageType;
    this._topicId = config.topicId;
    this._compress.internalValue = config.compress;
    this._content.internalValue = config.content;
    this._filterRules.internalValue = config.filterRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // filename_mode - computed: false, optional: true, required: false
  private _filenameMode?: number; 
  public get filenameMode() {
    return this.getNumberAttribute('filename_mode');
  }
  public set filenameMode(value: number) {
    this._filenameMode = value;
  }
  public resetFilenameMode() {
    this._filenameMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameModeInput() {
    return this._filenameMode;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // shipper_name - computed: false, optional: false, required: true
  private _shipperName?: string; 
  public get shipperName() {
    return this.getStringAttribute('shipper_name');
  }
  public set shipperName(value: string) {
    this._shipperName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shipperNameInput() {
    return this._shipperName;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // topic_id - computed: false, optional: false, required: true
  private _topicId?: string; 
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
  public set topicId(value: string) {
    this._topicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicIdInput() {
    return this._topicId;
  }

  // compress - computed: false, optional: true, required: false
  private _compress = new ClsCosShipperCompressOutputReference(this, "compress");
  public get compress() {
    return this._compress;
  }
  public putCompress(value: ClsCosShipperCompress) {
    this._compress.internalValue = value;
  }
  public resetCompress() {
    this._compress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress.internalValue;
  }

  // content - computed: false, optional: true, required: false
  private _content = new ClsCosShipperContentOutputReference(this, "content");
  public get content() {
    return this._content;
  }
  public putContent(value: ClsCosShipperContent) {
    this._content.internalValue = value;
  }
  public resetContent() {
    this._content.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }

  // filter_rules - computed: false, optional: true, required: false
  private _filterRules = new ClsCosShipperFilterRulesList(this, "filter_rules", false);
  public get filterRules() {
    return this._filterRules;
  }
  public putFilterRules(value: ClsCosShipperFilterRules[] | cdktf.IResolvable) {
    this._filterRules.internalValue = value;
  }
  public resetFilterRules() {
    this._filterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterRulesInput() {
    return this._filterRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      end_time: cdktf.numberToTerraform(this._endTime),
      filename_mode: cdktf.numberToTerraform(this._filenameMode),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      max_size: cdktf.numberToTerraform(this._maxSize),
      partition: cdktf.stringToTerraform(this._partition),
      prefix: cdktf.stringToTerraform(this._prefix),
      shipper_name: cdktf.stringToTerraform(this._shipperName),
      start_time: cdktf.numberToTerraform(this._startTime),
      storage_type: cdktf.stringToTerraform(this._storageType),
      topic_id: cdktf.stringToTerraform(this._topicId),
      compress: clsCosShipperCompressToTerraform(this._compress.internalValue),
      content: clsCosShipperContentToTerraform(this._content.internalValue),
      filter_rules: cdktf.listMapper(clsCosShipperFilterRulesToTerraform, true)(this._filterRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_time: {
        value: cdktf.numberToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filename_mode: {
        value: cdktf.numberToHclTerraform(this._filenameMode),
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
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_size: {
        value: cdktf.numberToHclTerraform(this._maxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      partition: {
        value: cdktf.stringToHclTerraform(this._partition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shipper_name: {
        value: cdktf.stringToHclTerraform(this._shipperName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.numberToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_type: {
        value: cdktf.stringToHclTerraform(this._storageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topic_id: {
        value: cdktf.stringToHclTerraform(this._topicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compress: {
        value: clsCosShipperCompressToHclTerraform(this._compress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClsCosShipperCompressList",
      },
      content: {
        value: clsCosShipperContentToHclTerraform(this._content.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClsCosShipperContentList",
      },
      filter_rules: {
        value: cdktf.listMapperHcl(clsCosShipperFilterRulesToHclTerraform, true)(this._filterRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClsCosShipperFilterRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
