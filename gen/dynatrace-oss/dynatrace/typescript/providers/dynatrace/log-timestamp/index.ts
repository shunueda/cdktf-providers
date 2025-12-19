// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/log_timestamp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogTimestampConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/log_timestamp#config_item_title LogTimestamp#config_item_title}
  */
  readonly configItemTitle: string;
  /**
  * Defines the number of characters in every log line (starting from the first character in the line) where the timestamp is searched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/log_timestamp#date_search_limit LogTimestamp#date_search_limit}
  */
  readonly dateSearchLimit?: number;
  /**
  * Date-time pattern
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/log_timestamp#date_time_pattern LogTimestamp#date_time_pattern}
  */
  readonly dateTimePattern: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/log_timestamp#enabled LogTimestamp#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/log_timestamp#id LogTimestamp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this instance regarding order. If not specified when creating the setting will be added to the end of the list. If not specified during update the order will remain untouched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/log_timestamp#insert_after LogTimestamp#insert_after}
  */
  readonly insertAfter?: string;
  /**
  * The scope of this setting (HOST, KUBERNETES_CLUSTER, HOST_GROUP). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/log_timestamp#scope LogTimestamp#scope}
  */
  readonly scope?: string;
  /**
  * Don't parse timestamps in lines starting with white character
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/log_timestamp#skip_indented_lines LogTimestamp#skip_indented_lines}
  */
  readonly skipIndentedLines?: boolean | cdktf.IResolvable;
  /**
  * Timezone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/log_timestamp#timezone LogTimestamp#timezone}
  */
  readonly timezone: string;
  /**
  * entry_boundary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/log_timestamp#entry_boundary LogTimestamp#entry_boundary}
  */
  readonly entryBoundary?: LogTimestampEntryBoundary;
  /**
  * json_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/log_timestamp#json_configuration LogTimestamp#json_configuration}
  */
  readonly jsonConfiguration?: LogTimestampJsonConfiguration;
  /**
  * matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/log_timestamp#matchers LogTimestamp#matchers}
  */
  readonly matchers?: LogTimestampMatchers;
}
export interface LogTimestampEntryBoundary {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/log_timestamp#pattern LogTimestamp#pattern}
  */
  readonly pattern?: string;
}

export function logTimestampEntryBoundaryToTerraform(struct?: LogTimestampEntryBoundaryOutputReference | LogTimestampEntryBoundary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function logTimestampEntryBoundaryToHclTerraform(struct?: LogTimestampEntryBoundaryOutputReference | LogTimestampEntryBoundary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogTimestampEntryBoundaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogTimestampEntryBoundary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogTimestampEntryBoundary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pattern = value.pattern;
    }
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface LogTimestampJsonConfiguration {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/log_timestamp#format_detection LogTimestamp#format_detection}
  */
  readonly formatDetection?: boolean | cdktf.IResolvable;
}

export function logTimestampJsonConfigurationToTerraform(struct?: LogTimestampJsonConfigurationOutputReference | LogTimestampJsonConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format_detection: cdktf.booleanToTerraform(struct!.formatDetection),
  }
}


export function logTimestampJsonConfigurationToHclTerraform(struct?: LogTimestampJsonConfigurationOutputReference | LogTimestampJsonConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format_detection: {
      value: cdktf.booleanToHclTerraform(struct!.formatDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogTimestampJsonConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogTimestampJsonConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._formatDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatDetection = this._formatDetection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogTimestampJsonConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._formatDetection = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._formatDetection = value.formatDetection;
    }
  }

  // format_detection - computed: false, optional: true, required: false
  private _formatDetection?: boolean | cdktf.IResolvable; 
  public get formatDetection() {
    return this.getBooleanAttribute('format_detection');
  }
  public set formatDetection(value: boolean | cdktf.IResolvable) {
    this._formatDetection = value;
  }
  public resetFormatDetection() {
    this._formatDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatDetectionInput() {
    return this._formatDetection;
  }
}
export interface LogTimestampMatchersMatcher {
  /**
  * Possible Values: `container.name`, `dt.entity.container_group`, `dt.entity.process_group`, `host.tag`, `k8s.container.name`, `k8s.deployment.name`, `k8s.namespace.name`, `k8s.pod.annotation`, `k8s.pod.label`, `k8s.workload.kind`, `k8s.workload.name`, `log.source`, `log.source.origin`, `process.technology`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/log_timestamp#attribute LogTimestamp#attribute}
  */
  readonly attribute: string;
  /**
  * Possible Values: `MATCHES`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/log_timestamp#operator LogTimestamp#operator}
  */
  readonly operator: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/log_timestamp#values LogTimestamp#values}
  */
  readonly values: string[];
}

export function logTimestampMatchersMatcherToTerraform(struct?: LogTimestampMatchersMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function logTimestampMatchersMatcherToHclTerraform(struct?: LogTimestampMatchersMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogTimestampMatchersMatcherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogTimestampMatchersMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogTimestampMatchersMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class LogTimestampMatchersMatcherList extends cdktf.ComplexList {
  public internalValue? : LogTimestampMatchersMatcher[] | cdktf.IResolvable

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
  public get(index: number): LogTimestampMatchersMatcherOutputReference {
    return new LogTimestampMatchersMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogTimestampMatchers {
  /**
  * matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/log_timestamp#matcher LogTimestamp#matcher}
  */
  readonly matcher: LogTimestampMatchersMatcher[] | cdktf.IResolvable;
}

export function logTimestampMatchersToTerraform(struct?: LogTimestampMatchersOutputReference | LogTimestampMatchers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    matcher: cdktf.listMapper(logTimestampMatchersMatcherToTerraform, true)(struct!.matcher),
  }
}


export function logTimestampMatchersToHclTerraform(struct?: LogTimestampMatchersOutputReference | LogTimestampMatchers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    matcher: {
      value: cdktf.listMapperHcl(logTimestampMatchersMatcherToHclTerraform, true)(struct!.matcher),
      isBlock: true,
      type: "set",
      storageClassType: "LogTimestampMatchersMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogTimestampMatchersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogTimestampMatchers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matcher = this._matcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogTimestampMatchers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matcher.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matcher.internalValue = value.matcher;
    }
  }

  // matcher - computed: false, optional: false, required: true
  private _matcher = new LogTimestampMatchersMatcherList(this, "matcher", true);
  public get matcher() {
    return this._matcher;
  }
  public putMatcher(value: LogTimestampMatchersMatcher[] | cdktf.IResolvable) {
    this._matcher.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matcherInput() {
    return this._matcher.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/log_timestamp dynatrace_log_timestamp}
*/
export class LogTimestamp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_log_timestamp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogTimestamp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogTimestamp to import
  * @param importFromId The id of the existing LogTimestamp that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/log_timestamp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogTimestamp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_log_timestamp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/log_timestamp dynatrace_log_timestamp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogTimestampConfig
  */
  public constructor(scope: Construct, id: string, config: LogTimestampConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_log_timestamp',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configItemTitle = config.configItemTitle;
    this._dateSearchLimit = config.dateSearchLimit;
    this._dateTimePattern = config.dateTimePattern;
    this._enabled = config.enabled;
    this._id = config.id;
    this._insertAfter = config.insertAfter;
    this._scope = config.scope;
    this._skipIndentedLines = config.skipIndentedLines;
    this._timezone = config.timezone;
    this._entryBoundary.internalValue = config.entryBoundary;
    this._jsonConfiguration.internalValue = config.jsonConfiguration;
    this._matchers.internalValue = config.matchers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_item_title - computed: false, optional: false, required: true
  private _configItemTitle?: string; 
  public get configItemTitle() {
    return this.getStringAttribute('config_item_title');
  }
  public set configItemTitle(value: string) {
    this._configItemTitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configItemTitleInput() {
    return this._configItemTitle;
  }

  // date_search_limit - computed: false, optional: true, required: false
  private _dateSearchLimit?: number; 
  public get dateSearchLimit() {
    return this.getNumberAttribute('date_search_limit');
  }
  public set dateSearchLimit(value: number) {
    this._dateSearchLimit = value;
  }
  public resetDateSearchLimit() {
    this._dateSearchLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateSearchLimitInput() {
    return this._dateSearchLimit;
  }

  // date_time_pattern - computed: false, optional: false, required: true
  private _dateTimePattern?: string; 
  public get dateTimePattern() {
    return this.getStringAttribute('date_time_pattern');
  }
  public set dateTimePattern(value: string) {
    this._dateTimePattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dateTimePatternInput() {
    return this._dateTimePattern;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // insert_after - computed: true, optional: true, required: false
  private _insertAfter?: string; 
  public get insertAfter() {
    return this.getStringAttribute('insert_after');
  }
  public set insertAfter(value: string) {
    this._insertAfter = value;
  }
  public resetInsertAfter() {
    this._insertAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertAfterInput() {
    return this._insertAfter;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // skip_indented_lines - computed: false, optional: true, required: false
  private _skipIndentedLines?: boolean | cdktf.IResolvable; 
  public get skipIndentedLines() {
    return this.getBooleanAttribute('skip_indented_lines');
  }
  public set skipIndentedLines(value: boolean | cdktf.IResolvable) {
    this._skipIndentedLines = value;
  }
  public resetSkipIndentedLines() {
    this._skipIndentedLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipIndentedLinesInput() {
    return this._skipIndentedLines;
  }

  // timezone - computed: false, optional: false, required: true
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // entry_boundary - computed: false, optional: true, required: false
  private _entryBoundary = new LogTimestampEntryBoundaryOutputReference(this, "entry_boundary");
  public get entryBoundary() {
    return this._entryBoundary;
  }
  public putEntryBoundary(value: LogTimestampEntryBoundary) {
    this._entryBoundary.internalValue = value;
  }
  public resetEntryBoundary() {
    this._entryBoundary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryBoundaryInput() {
    return this._entryBoundary.internalValue;
  }

  // json_configuration - computed: false, optional: true, required: false
  private _jsonConfiguration = new LogTimestampJsonConfigurationOutputReference(this, "json_configuration");
  public get jsonConfiguration() {
    return this._jsonConfiguration;
  }
  public putJsonConfiguration(value: LogTimestampJsonConfiguration) {
    this._jsonConfiguration.internalValue = value;
  }
  public resetJsonConfiguration() {
    this._jsonConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonConfigurationInput() {
    return this._jsonConfiguration.internalValue;
  }

  // matchers - computed: false, optional: true, required: false
  private _matchers = new LogTimestampMatchersOutputReference(this, "matchers");
  public get matchers() {
    return this._matchers;
  }
  public putMatchers(value: LogTimestampMatchers) {
    this._matchers.internalValue = value;
  }
  public resetMatchers() {
    this._matchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchersInput() {
    return this._matchers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_item_title: cdktf.stringToTerraform(this._configItemTitle),
      date_search_limit: cdktf.numberToTerraform(this._dateSearchLimit),
      date_time_pattern: cdktf.stringToTerraform(this._dateTimePattern),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      insert_after: cdktf.stringToTerraform(this._insertAfter),
      scope: cdktf.stringToTerraform(this._scope),
      skip_indented_lines: cdktf.booleanToTerraform(this._skipIndentedLines),
      timezone: cdktf.stringToTerraform(this._timezone),
      entry_boundary: logTimestampEntryBoundaryToTerraform(this._entryBoundary.internalValue),
      json_configuration: logTimestampJsonConfigurationToTerraform(this._jsonConfiguration.internalValue),
      matchers: logTimestampMatchersToTerraform(this._matchers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_item_title: {
        value: cdktf.stringToHclTerraform(this._configItemTitle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      date_search_limit: {
        value: cdktf.numberToHclTerraform(this._dateSearchLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      date_time_pattern: {
        value: cdktf.stringToHclTerraform(this._dateTimePattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_after: {
        value: cdktf.stringToHclTerraform(this._insertAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_indented_lines: {
        value: cdktf.booleanToHclTerraform(this._skipIndentedLines),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entry_boundary: {
        value: logTimestampEntryBoundaryToHclTerraform(this._entryBoundary.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogTimestampEntryBoundaryList",
      },
      json_configuration: {
        value: logTimestampJsonConfigurationToHclTerraform(this._jsonConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogTimestampJsonConfigurationList",
      },
      matchers: {
        value: logTimestampMatchersToHclTerraform(this._matchers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogTimestampMatchersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
