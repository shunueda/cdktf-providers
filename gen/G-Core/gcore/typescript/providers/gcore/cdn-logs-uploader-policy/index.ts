// https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/cdn_logs_uploader_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnLogsUploaderPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Date format for logs. Default value is empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/cdn_logs_uploader_policy#date_format CdnLogsUploaderPolicy#date_format}
  */
  readonly dateFormat?: string;
  /**
  * Description of the policy. Default value is empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/cdn_logs_uploader_policy#description CdnLogsUploaderPolicy#description}
  */
  readonly description?: string;
  /**
  * Field delimiter for logs. Default value is \".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/cdn_logs_uploader_policy#field_delimiter CdnLogsUploaderPolicy#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * Field separator for logs. Default value is a space character.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/cdn_logs_uploader_policy#field_separator CdnLogsUploaderPolicy#field_separator}
  */
  readonly fieldSeparator?: string;
  /**
  * List of fields to include in logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/cdn_logs_uploader_policy#fields CdnLogsUploaderPolicy#fields}
  */
  readonly fields: string[];
  /**
  * Template for log file name. Default value is "{{YYYY}}/{{MM}}/{{DD}}/{{HH}}/{{mm}}/{{ss}}/{{HOST}}_{{CNAME}}_access.log.gz".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/cdn_logs_uploader_policy#file_name_template CdnLogsUploaderPolicy#file_name_template}
  */
  readonly fileNameTemplate?: string;
  /**
  * Format type for logs. Default value is empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/cdn_logs_uploader_policy#format_type CdnLogsUploaderPolicy#format_type}
  */
  readonly formatType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/cdn_logs_uploader_policy#id CdnLogsUploaderPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Include empty logs in the upload. Default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/cdn_logs_uploader_policy#include_empty_logs CdnLogsUploaderPolicy#include_empty_logs}
  */
  readonly includeEmptyLogs?: boolean | cdktf.IResolvable;
  /**
  * Include logs from origin shielding in the upload. Default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/cdn_logs_uploader_policy#include_shield_logs CdnLogsUploaderPolicy#include_shield_logs}
  */
  readonly includeShieldLogs?: boolean | cdktf.IResolvable;
  /**
  * Name of the policy. Default value is "Policy".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/cdn_logs_uploader_policy#name CdnLogsUploaderPolicy#name}
  */
  readonly name?: string;
  /**
  * Interval in minutes to retry failed uploads. Default value is 60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/cdn_logs_uploader_policy#retry_interval_minutes CdnLogsUploaderPolicy#retry_interval_minutes}
  */
  readonly retryIntervalMinutes?: number;
  /**
  * Interval in minutes to rotate logs. Default value is 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/cdn_logs_uploader_policy#rotate_interval_minutes CdnLogsUploaderPolicy#rotate_interval_minutes}
  */
  readonly rotateIntervalMinutes?: number;
  /**
  * Threshold in lines to rotate logs. Default value is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/cdn_logs_uploader_policy#rotate_threshold_lines CdnLogsUploaderPolicy#rotate_threshold_lines}
  */
  readonly rotateThresholdLines?: number;
  /**
  * Threshold in MB to rotate logs. Default value is nil.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/cdn_logs_uploader_policy#rotate_threshold_mb CdnLogsUploaderPolicy#rotate_threshold_mb}
  */
  readonly rotateThresholdMb?: number;
  /**
  * Tags allow for dynamic decoration of logs by adding predefined fields to the log format. These tags serve as customizable key-value pairs that can be included in log entries to enhance context and readability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/cdn_logs_uploader_policy#tags CdnLogsUploaderPolicy#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/cdn_logs_uploader_policy gcore_cdn_logs_uploader_policy}
*/
export class CdnLogsUploaderPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_cdn_logs_uploader_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdnLogsUploaderPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnLogsUploaderPolicy to import
  * @param importFromId The id of the existing CdnLogsUploaderPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/cdn_logs_uploader_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnLogsUploaderPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_cdn_logs_uploader_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/cdn_logs_uploader_policy gcore_cdn_logs_uploader_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnLogsUploaderPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CdnLogsUploaderPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_cdn_logs_uploader_policy',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.32.1',
        providerVersionConstraint: '0.32.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dateFormat = config.dateFormat;
    this._description = config.description;
    this._fieldDelimiter = config.fieldDelimiter;
    this._fieldSeparator = config.fieldSeparator;
    this._fields = config.fields;
    this._fileNameTemplate = config.fileNameTemplate;
    this._formatType = config.formatType;
    this._id = config.id;
    this._includeEmptyLogs = config.includeEmptyLogs;
    this._includeShieldLogs = config.includeShieldLogs;
    this._name = config.name;
    this._retryIntervalMinutes = config.retryIntervalMinutes;
    this._rotateIntervalMinutes = config.rotateIntervalMinutes;
    this._rotateThresholdLines = config.rotateThresholdLines;
    this._rotateThresholdMb = config.rotateThresholdMb;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // date_format - computed: false, optional: true, required: false
  private _dateFormat?: string; 
  public get dateFormat() {
    return this.getStringAttribute('date_format');
  }
  public set dateFormat(value: string) {
    this._dateFormat = value;
  }
  public resetDateFormat() {
    this._dateFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFormatInput() {
    return this._dateFormat;
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

  // field_delimiter - computed: false, optional: true, required: false
  private _fieldDelimiter?: string; 
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }
  public set fieldDelimiter(value: string) {
    this._fieldDelimiter = value;
  }
  public resetFieldDelimiter() {
    this._fieldDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldDelimiterInput() {
    return this._fieldDelimiter;
  }

  // field_separator - computed: false, optional: true, required: false
  private _fieldSeparator?: string; 
  public get fieldSeparator() {
    return this.getStringAttribute('field_separator');
  }
  public set fieldSeparator(value: string) {
    this._fieldSeparator = value;
  }
  public resetFieldSeparator() {
    this._fieldSeparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSeparatorInput() {
    return this._fieldSeparator;
  }

  // fields - computed: false, optional: false, required: true
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // file_name_template - computed: false, optional: true, required: false
  private _fileNameTemplate?: string; 
  public get fileNameTemplate() {
    return this.getStringAttribute('file_name_template');
  }
  public set fileNameTemplate(value: string) {
    this._fileNameTemplate = value;
  }
  public resetFileNameTemplate() {
    this._fileNameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameTemplateInput() {
    return this._fileNameTemplate;
  }

  // format_type - computed: false, optional: true, required: false
  private _formatType?: string; 
  public get formatType() {
    return this.getStringAttribute('format_type');
  }
  public set formatType(value: string) {
    this._formatType = value;
  }
  public resetFormatType() {
    this._formatType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatTypeInput() {
    return this._formatType;
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

  // include_empty_logs - computed: false, optional: true, required: false
  private _includeEmptyLogs?: boolean | cdktf.IResolvable; 
  public get includeEmptyLogs() {
    return this.getBooleanAttribute('include_empty_logs');
  }
  public set includeEmptyLogs(value: boolean | cdktf.IResolvable) {
    this._includeEmptyLogs = value;
  }
  public resetIncludeEmptyLogs() {
    this._includeEmptyLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeEmptyLogsInput() {
    return this._includeEmptyLogs;
  }

  // include_shield_logs - computed: false, optional: true, required: false
  private _includeShieldLogs?: boolean | cdktf.IResolvable; 
  public get includeShieldLogs() {
    return this.getBooleanAttribute('include_shield_logs');
  }
  public set includeShieldLogs(value: boolean | cdktf.IResolvable) {
    this._includeShieldLogs = value;
  }
  public resetIncludeShieldLogs() {
    this._includeShieldLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeShieldLogsInput() {
    return this._includeShieldLogs;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // retry_interval_minutes - computed: false, optional: true, required: false
  private _retryIntervalMinutes?: number; 
  public get retryIntervalMinutes() {
    return this.getNumberAttribute('retry_interval_minutes');
  }
  public set retryIntervalMinutes(value: number) {
    this._retryIntervalMinutes = value;
  }
  public resetRetryIntervalMinutes() {
    this._retryIntervalMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalMinutesInput() {
    return this._retryIntervalMinutes;
  }

  // rotate_interval_minutes - computed: false, optional: true, required: false
  private _rotateIntervalMinutes?: number; 
  public get rotateIntervalMinutes() {
    return this.getNumberAttribute('rotate_interval_minutes');
  }
  public set rotateIntervalMinutes(value: number) {
    this._rotateIntervalMinutes = value;
  }
  public resetRotateIntervalMinutes() {
    this._rotateIntervalMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateIntervalMinutesInput() {
    return this._rotateIntervalMinutes;
  }

  // rotate_threshold_lines - computed: false, optional: true, required: false
  private _rotateThresholdLines?: number; 
  public get rotateThresholdLines() {
    return this.getNumberAttribute('rotate_threshold_lines');
  }
  public set rotateThresholdLines(value: number) {
    this._rotateThresholdLines = value;
  }
  public resetRotateThresholdLines() {
    this._rotateThresholdLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateThresholdLinesInput() {
    return this._rotateThresholdLines;
  }

  // rotate_threshold_mb - computed: false, optional: true, required: false
  private _rotateThresholdMb?: number; 
  public get rotateThresholdMb() {
    return this.getNumberAttribute('rotate_threshold_mb');
  }
  public set rotateThresholdMb(value: number) {
    this._rotateThresholdMb = value;
  }
  public resetRotateThresholdMb() {
    this._rotateThresholdMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateThresholdMbInput() {
    return this._rotateThresholdMb;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      date_format: cdktf.stringToTerraform(this._dateFormat),
      description: cdktf.stringToTerraform(this._description),
      field_delimiter: cdktf.stringToTerraform(this._fieldDelimiter),
      field_separator: cdktf.stringToTerraform(this._fieldSeparator),
      fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fields),
      file_name_template: cdktf.stringToTerraform(this._fileNameTemplate),
      format_type: cdktf.stringToTerraform(this._formatType),
      id: cdktf.stringToTerraform(this._id),
      include_empty_logs: cdktf.booleanToTerraform(this._includeEmptyLogs),
      include_shield_logs: cdktf.booleanToTerraform(this._includeShieldLogs),
      name: cdktf.stringToTerraform(this._name),
      retry_interval_minutes: cdktf.numberToTerraform(this._retryIntervalMinutes),
      rotate_interval_minutes: cdktf.numberToTerraform(this._rotateIntervalMinutes),
      rotate_threshold_lines: cdktf.numberToTerraform(this._rotateThresholdLines),
      rotate_threshold_mb: cdktf.numberToTerraform(this._rotateThresholdMb),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      date_format: {
        value: cdktf.stringToHclTerraform(this._dateFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      field_delimiter: {
        value: cdktf.stringToHclTerraform(this._fieldDelimiter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      field_separator: {
        value: cdktf.stringToHclTerraform(this._fieldSeparator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      file_name_template: {
        value: cdktf.stringToHclTerraform(this._fileNameTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format_type: {
        value: cdktf.stringToHclTerraform(this._formatType),
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
      include_empty_logs: {
        value: cdktf.booleanToHclTerraform(this._includeEmptyLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_shield_logs: {
        value: cdktf.booleanToHclTerraform(this._includeShieldLogs),
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
      retry_interval_minutes: {
        value: cdktf.numberToHclTerraform(this._retryIntervalMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rotate_interval_minutes: {
        value: cdktf.numberToHclTerraform(this._rotateIntervalMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rotate_threshold_lines: {
        value: cdktf.numberToHclTerraform(this._rotateThresholdLines),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rotate_threshold_mb: {
        value: cdktf.numberToHclTerraform(this._rotateThresholdMb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
