// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_custom_logged_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultCustomLoggedStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the attributes on the monitor entries that should be included in the output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_custom_logged_stats#attribute_to_log DefaultCustomLoggedStats#attribute_to_log}
  */
  readonly attributeToLog?: string[];
  /**
  * Optionally, specifies an explicit name for each column header instead of having these names automatically generated from the monitored attribute name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_custom_logged_stats#column_name DefaultCustomLoggedStats#column_name}
  */
  readonly columnName?: string[];
  /**
  * This provides a way to format the monitored attribute value in the output to control the precision for instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_custom_logged_stats#decimal_format DefaultCustomLoggedStats#decimal_format}
  */
  readonly decimalFormat?: string;
  /**
  * A description for this Custom Logged Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_custom_logged_stats#description DefaultCustomLoggedStats#description}
  */
  readonly description?: string;
  /**
  * An optional floating point value that can be used to scale the resulting value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_custom_logged_stats#divide_value_by DefaultCustomLoggedStats#divide_value_by}
  */
  readonly divideValueBy?: string;
  /**
  * An optional property that can scale the resulting value by another attribute in the monitored entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_custom_logged_stats#divide_value_by_attribute DefaultCustomLoggedStats#divide_value_by_attribute}
  */
  readonly divideValueByAttribute?: string;
  /**
  * Indicates whether the Custom Logged Stats object is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_custom_logged_stats#enabled DefaultCustomLoggedStats#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * An optional prefix that is included in the header before the column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_custom_logged_stats#header_prefix DefaultCustomLoggedStats#header_prefix}
  */
  readonly headerPrefix?: string;
  /**
  * An optional attribute from the monitor entry that is included as a prefix before the column name in the column header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_custom_logged_stats#header_prefix_attribute DefaultCustomLoggedStats#header_prefix_attribute}
  */
  readonly headerPrefixAttribute?: string;
  /**
  * An optional LDAP filter that can be used restrict which monitor entries are used to produce the output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_custom_logged_stats#include_filter DefaultCustomLoggedStats#include_filter}
  */
  readonly includeFilter?: string;
  /**
  * The objectclass name of the monitor entries to examine for generating these statistics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_custom_logged_stats#monitor_objectclass DefaultCustomLoggedStats#monitor_objectclass}
  */
  readonly monitorObjectclass?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_custom_logged_stats#name DefaultCustomLoggedStats#name}
  */
  readonly name: string;
  /**
  * If this property is set to true, then the value of any of the monitored attributes here can contribute to whether an interval is considered "idle" by the Periodic Stats Logger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_custom_logged_stats#non_zero_implies_not_idle DefaultCustomLoggedStats#non_zero_implies_not_idle}
  */
  readonly nonZeroImpliesNotIdle?: boolean | cdktf.IResolvable;
  /**
  * Name of the parent Plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_custom_logged_stats#plugin_name DefaultCustomLoggedStats#plugin_name}
  */
  readonly pluginName: string;
  /**
  * An optional regular expression pattern, that when used in conjunction with regex-replacement, can alter the value of the attribute being monitored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_custom_logged_stats#regex_pattern DefaultCustomLoggedStats#regex_pattern}
  */
  readonly regexPattern?: string;
  /**
  * An optional regular expression replacement value, that when used in conjunction with regex-pattern, can alter the value of the attribute being monitored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_custom_logged_stats#regex_replacement DefaultCustomLoggedStats#regex_replacement}
  */
  readonly regexReplacement?: string;
  /**
  * Specifies the type of statistic to include in the output for each monitored attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_custom_logged_stats#statistic_type DefaultCustomLoggedStats#statistic_type}
  */
  readonly statisticType?: string[];
}
export interface DefaultCustomLoggedStatsRequiredActions {
}

export function defaultCustomLoggedStatsRequiredActionsToTerraform(struct?: DefaultCustomLoggedStatsRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultCustomLoggedStatsRequiredActionsToHclTerraform(struct?: DefaultCustomLoggedStatsRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultCustomLoggedStatsRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultCustomLoggedStatsRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultCustomLoggedStatsRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DefaultCustomLoggedStatsRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultCustomLoggedStatsRequiredActionsOutputReference {
    return new DefaultCustomLoggedStatsRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_custom_logged_stats pingdirectory_default_custom_logged_stats}
*/
export class DefaultCustomLoggedStats extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_custom_logged_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultCustomLoggedStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultCustomLoggedStats to import
  * @param importFromId The id of the existing DefaultCustomLoggedStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_custom_logged_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultCustomLoggedStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_custom_logged_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_custom_logged_stats pingdirectory_default_custom_logged_stats} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultCustomLoggedStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultCustomLoggedStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_custom_logged_stats',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributeToLog = config.attributeToLog;
    this._columnName = config.columnName;
    this._decimalFormat = config.decimalFormat;
    this._description = config.description;
    this._divideValueBy = config.divideValueBy;
    this._divideValueByAttribute = config.divideValueByAttribute;
    this._enabled = config.enabled;
    this._headerPrefix = config.headerPrefix;
    this._headerPrefixAttribute = config.headerPrefixAttribute;
    this._includeFilter = config.includeFilter;
    this._monitorObjectclass = config.monitorObjectclass;
    this._name = config.name;
    this._nonZeroImpliesNotIdle = config.nonZeroImpliesNotIdle;
    this._pluginName = config.pluginName;
    this._regexPattern = config.regexPattern;
    this._regexReplacement = config.regexReplacement;
    this._statisticType = config.statisticType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute_to_log - computed: true, optional: true, required: false
  private _attributeToLog?: string[]; 
  public get attributeToLog() {
    return cdktf.Fn.tolist(this.getListAttribute('attribute_to_log'));
  }
  public set attributeToLog(value: string[]) {
    this._attributeToLog = value;
  }
  public resetAttributeToLog() {
    this._attributeToLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeToLogInput() {
    return this._attributeToLog;
  }

  // column_name - computed: true, optional: true, required: false
  private _columnName?: string[]; 
  public get columnName() {
    return cdktf.Fn.tolist(this.getListAttribute('column_name'));
  }
  public set columnName(value: string[]) {
    this._columnName = value;
  }
  public resetColumnName() {
    this._columnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // decimal_format - computed: true, optional: true, required: false
  private _decimalFormat?: string; 
  public get decimalFormat() {
    return this.getStringAttribute('decimal_format');
  }
  public set decimalFormat(value: string) {
    this._decimalFormat = value;
  }
  public resetDecimalFormat() {
    this._decimalFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalFormatInput() {
    return this._decimalFormat;
  }

  // description - computed: true, optional: true, required: false
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

  // divide_value_by - computed: true, optional: true, required: false
  private _divideValueBy?: string; 
  public get divideValueBy() {
    return this.getStringAttribute('divide_value_by');
  }
  public set divideValueBy(value: string) {
    this._divideValueBy = value;
  }
  public resetDivideValueBy() {
    this._divideValueBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divideValueByInput() {
    return this._divideValueBy;
  }

  // divide_value_by_attribute - computed: true, optional: true, required: false
  private _divideValueByAttribute?: string; 
  public get divideValueByAttribute() {
    return this.getStringAttribute('divide_value_by_attribute');
  }
  public set divideValueByAttribute(value: string) {
    this._divideValueByAttribute = value;
  }
  public resetDivideValueByAttribute() {
    this._divideValueByAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divideValueByAttributeInput() {
    return this._divideValueByAttribute;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // header_prefix - computed: true, optional: true, required: false
  private _headerPrefix?: string; 
  public get headerPrefix() {
    return this.getStringAttribute('header_prefix');
  }
  public set headerPrefix(value: string) {
    this._headerPrefix = value;
  }
  public resetHeaderPrefix() {
    this._headerPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerPrefixInput() {
    return this._headerPrefix;
  }

  // header_prefix_attribute - computed: true, optional: true, required: false
  private _headerPrefixAttribute?: string; 
  public get headerPrefixAttribute() {
    return this.getStringAttribute('header_prefix_attribute');
  }
  public set headerPrefixAttribute(value: string) {
    this._headerPrefixAttribute = value;
  }
  public resetHeaderPrefixAttribute() {
    this._headerPrefixAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerPrefixAttributeInput() {
    return this._headerPrefixAttribute;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_filter - computed: true, optional: true, required: false
  private _includeFilter?: string; 
  public get includeFilter() {
    return this.getStringAttribute('include_filter');
  }
  public set includeFilter(value: string) {
    this._includeFilter = value;
  }
  public resetIncludeFilter() {
    this._includeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeFilterInput() {
    return this._includeFilter;
  }

  // monitor_objectclass - computed: true, optional: true, required: false
  private _monitorObjectclass?: string; 
  public get monitorObjectclass() {
    return this.getStringAttribute('monitor_objectclass');
  }
  public set monitorObjectclass(value: string) {
    this._monitorObjectclass = value;
  }
  public resetMonitorObjectclass() {
    this._monitorObjectclass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorObjectclassInput() {
    return this._monitorObjectclass;
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

  // non_zero_implies_not_idle - computed: true, optional: true, required: false
  private _nonZeroImpliesNotIdle?: boolean | cdktf.IResolvable; 
  public get nonZeroImpliesNotIdle() {
    return this.getBooleanAttribute('non_zero_implies_not_idle');
  }
  public set nonZeroImpliesNotIdle(value: boolean | cdktf.IResolvable) {
    this._nonZeroImpliesNotIdle = value;
  }
  public resetNonZeroImpliesNotIdle() {
    this._nonZeroImpliesNotIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonZeroImpliesNotIdleInput() {
    return this._nonZeroImpliesNotIdle;
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // plugin_name - computed: false, optional: false, required: true
  private _pluginName?: string; 
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }
  public set pluginName(value: string) {
    this._pluginName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameInput() {
    return this._pluginName;
  }

  // regex_pattern - computed: true, optional: true, required: false
  private _regexPattern?: string; 
  public get regexPattern() {
    return this.getStringAttribute('regex_pattern');
  }
  public set regexPattern(value: string) {
    this._regexPattern = value;
  }
  public resetRegexPattern() {
    this._regexPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexPatternInput() {
    return this._regexPattern;
  }

  // regex_replacement - computed: true, optional: true, required: false
  private _regexReplacement?: string; 
  public get regexReplacement() {
    return this.getStringAttribute('regex_replacement');
  }
  public set regexReplacement(value: string) {
    this._regexReplacement = value;
  }
  public resetRegexReplacement() {
    this._regexReplacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexReplacementInput() {
    return this._regexReplacement;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultCustomLoggedStatsRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // statistic_type - computed: true, optional: true, required: false
  private _statisticType?: string[]; 
  public get statisticType() {
    return cdktf.Fn.tolist(this.getListAttribute('statistic_type'));
  }
  public set statisticType(value: string[]) {
    this._statisticType = value;
  }
  public resetStatisticType() {
    this._statisticType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticTypeInput() {
    return this._statisticType;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute_to_log: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributeToLog),
      column_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._columnName),
      decimal_format: cdktf.stringToTerraform(this._decimalFormat),
      description: cdktf.stringToTerraform(this._description),
      divide_value_by: cdktf.stringToTerraform(this._divideValueBy),
      divide_value_by_attribute: cdktf.stringToTerraform(this._divideValueByAttribute),
      enabled: cdktf.booleanToTerraform(this._enabled),
      header_prefix: cdktf.stringToTerraform(this._headerPrefix),
      header_prefix_attribute: cdktf.stringToTerraform(this._headerPrefixAttribute),
      include_filter: cdktf.stringToTerraform(this._includeFilter),
      monitor_objectclass: cdktf.stringToTerraform(this._monitorObjectclass),
      name: cdktf.stringToTerraform(this._name),
      non_zero_implies_not_idle: cdktf.booleanToTerraform(this._nonZeroImpliesNotIdle),
      plugin_name: cdktf.stringToTerraform(this._pluginName),
      regex_pattern: cdktf.stringToTerraform(this._regexPattern),
      regex_replacement: cdktf.stringToTerraform(this._regexReplacement),
      statistic_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._statisticType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute_to_log: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attributeToLog),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      column_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._columnName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      decimal_format: {
        value: cdktf.stringToHclTerraform(this._decimalFormat),
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
      divide_value_by: {
        value: cdktf.stringToHclTerraform(this._divideValueBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      divide_value_by_attribute: {
        value: cdktf.stringToHclTerraform(this._divideValueByAttribute),
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
      header_prefix: {
        value: cdktf.stringToHclTerraform(this._headerPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_prefix_attribute: {
        value: cdktf.stringToHclTerraform(this._headerPrefixAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_filter: {
        value: cdktf.stringToHclTerraform(this._includeFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_objectclass: {
        value: cdktf.stringToHclTerraform(this._monitorObjectclass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      non_zero_implies_not_idle: {
        value: cdktf.booleanToHclTerraform(this._nonZeroImpliesNotIdle),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      plugin_name: {
        value: cdktf.stringToHclTerraform(this._pluginName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regex_pattern: {
        value: cdktf.stringToHclTerraform(this._regexPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regex_replacement: {
        value: cdktf.stringToHclTerraform(this._regexReplacement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      statistic_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._statisticType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
