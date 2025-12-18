// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_log_analytics_object_collection_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_log_analytics_object_collection_rule#log_analytics_object_collection_rule_id DataOciLogAnalyticsLogAnalyticsObjectCollectionRule#log_analytics_object_collection_rule_id}
  */
  readonly logAnalyticsObjectCollectionRuleId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_log_analytics_object_collection_rule#namespace DataOciLogAnalyticsLogAnalyticsObjectCollectionRule#namespace}
  */
  readonly namespace: string;
}
export interface DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverrides {
}

export function dataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesToTerraform(struct?: DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesToHclTerraform(struct?: DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_type - computed: true, optional: false, required: false
  public get matchType() {
    return this.getStringAttribute('match_type');
  }

  // match_value - computed: true, optional: false, required: false
  public get matchValue() {
    return this.getStringAttribute('match_value');
  }

  // property_name - computed: true, optional: false, required: false
  public get propertyName() {
    return this.getStringAttribute('property_name');
  }

  // property_value - computed: true, optional: false, required: false
  public get propertyValue() {
    return this.getStringAttribute('property_value');
  }
}

export class DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference {
    return new DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_log_analytics_object_collection_rule oci_log_analytics_log_analytics_object_collection_rule}
*/
export class DataOciLogAnalyticsLogAnalyticsObjectCollectionRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_log_analytics_log_analytics_object_collection_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsObjectCollectionRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciLogAnalyticsLogAnalyticsObjectCollectionRule to import
  * @param importFromId The id of the existing DataOciLogAnalyticsLogAnalyticsObjectCollectionRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_log_analytics_object_collection_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciLogAnalyticsLogAnalyticsObjectCollectionRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_log_analytics_log_analytics_object_collection_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_log_analytics_object_collection_rule oci_log_analytics_log_analytics_object_collection_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_log_analytics_log_analytics_object_collection_rule',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._logAnalyticsObjectCollectionRuleId = config.logAnalyticsObjectCollectionRuleId;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // char_encoding - computed: true, optional: false, required: false
  public get charEncoding() {
    return this.getStringAttribute('char_encoding');
  }

  // collection_type - computed: true, optional: false, required: false
  public get collectionType() {
    return this.getStringAttribute('collection_type');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // is_force_historic_collection - computed: true, optional: false, required: false
  public get isForceHistoricCollection() {
    return this.getBooleanAttribute('is_force_historic_collection');
  }

  // last_collected_object - computed: true, optional: false, required: false
  public get lastCollectedObject() {
    return this.getStringAttribute('last_collected_object');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // log_analytics_object_collection_rule_id - computed: false, optional: false, required: true
  private _logAnalyticsObjectCollectionRuleId?: string; 
  public get logAnalyticsObjectCollectionRuleId() {
    return this.getStringAttribute('log_analytics_object_collection_rule_id');
  }
  public set logAnalyticsObjectCollectionRuleId(value: string) {
    this._logAnalyticsObjectCollectionRuleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsObjectCollectionRuleIdInput() {
    return this._logAnalyticsObjectCollectionRuleId;
  }

  // log_group_id - computed: true, optional: false, required: false
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }

  // log_set - computed: true, optional: false, required: false
  public get logSet() {
    return this.getStringAttribute('log_set');
  }

  // log_set_ext_regex - computed: true, optional: false, required: false
  public get logSetExtRegex() {
    return this.getStringAttribute('log_set_ext_regex');
  }

  // log_set_key - computed: true, optional: false, required: false
  public get logSetKey() {
    return this.getStringAttribute('log_set_key');
  }

  // log_source_name - computed: true, optional: false, required: false
  public get logSourceName() {
    return this.getStringAttribute('log_source_name');
  }

  // log_type - computed: true, optional: false, required: false
  public get logType() {
    return this.getStringAttribute('log_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // object_name_filters - computed: true, optional: false, required: false
  public get objectNameFilters() {
    return this.getListAttribute('object_name_filters');
  }

  // os_bucket_name - computed: true, optional: false, required: false
  public get osBucketName() {
    return this.getStringAttribute('os_bucket_name');
  }

  // os_namespace - computed: true, optional: false, required: false
  public get osNamespace() {
    return this.getStringAttribute('os_namespace');
  }

  // overrides - computed: true, optional: false, required: false
  private _overrides = new DataOciLogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }

  // poll_since - computed: true, optional: false, required: false
  public get pollSince() {
    return this.getStringAttribute('poll_since');
  }

  // poll_till - computed: true, optional: false, required: false
  public get pollTill() {
    return this.getStringAttribute('poll_till');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // stream_cursor_time - computed: true, optional: false, required: false
  public get streamCursorTime() {
    return this.getStringAttribute('stream_cursor_time');
  }

  // stream_cursor_type - computed: true, optional: false, required: false
  public get streamCursorType() {
    return this.getStringAttribute('stream_cursor_type');
  }

  // stream_id - computed: true, optional: false, required: false
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      log_analytics_object_collection_rule_id: cdktf.stringToTerraform(this._logAnalyticsObjectCollectionRuleId),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      log_analytics_object_collection_rule_id: {
        value: cdktf.stringToHclTerraform(this._logAnalyticsObjectCollectionRuleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
