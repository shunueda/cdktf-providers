// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogAnalyticsLogAnalyticsObjectCollectionRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#char_encoding LogAnalyticsLogAnalyticsObjectCollectionRule#char_encoding}
  */
  readonly charEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#collection_type LogAnalyticsLogAnalyticsObjectCollectionRule#collection_type}
  */
  readonly collectionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#compartment_id LogAnalyticsLogAnalyticsObjectCollectionRule#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#defined_tags LogAnalyticsLogAnalyticsObjectCollectionRule#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#description LogAnalyticsLogAnalyticsObjectCollectionRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#entity_id LogAnalyticsLogAnalyticsObjectCollectionRule#entity_id}
  */
  readonly entityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#freeform_tags LogAnalyticsLogAnalyticsObjectCollectionRule#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#id LogAnalyticsLogAnalyticsObjectCollectionRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#is_enabled LogAnalyticsLogAnalyticsObjectCollectionRule#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#is_force_historic_collection LogAnalyticsLogAnalyticsObjectCollectionRule#is_force_historic_collection}
  */
  readonly isForceHistoricCollection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#log_group_id LogAnalyticsLogAnalyticsObjectCollectionRule#log_group_id}
  */
  readonly logGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#log_set LogAnalyticsLogAnalyticsObjectCollectionRule#log_set}
  */
  readonly logSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#log_set_ext_regex LogAnalyticsLogAnalyticsObjectCollectionRule#log_set_ext_regex}
  */
  readonly logSetExtRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#log_set_key LogAnalyticsLogAnalyticsObjectCollectionRule#log_set_key}
  */
  readonly logSetKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#log_source_name LogAnalyticsLogAnalyticsObjectCollectionRule#log_source_name}
  */
  readonly logSourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#log_type LogAnalyticsLogAnalyticsObjectCollectionRule#log_type}
  */
  readonly logType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#name LogAnalyticsLogAnalyticsObjectCollectionRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#namespace LogAnalyticsLogAnalyticsObjectCollectionRule#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#object_name_filters LogAnalyticsLogAnalyticsObjectCollectionRule#object_name_filters}
  */
  readonly objectNameFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#os_bucket_name LogAnalyticsLogAnalyticsObjectCollectionRule#os_bucket_name}
  */
  readonly osBucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#os_namespace LogAnalyticsLogAnalyticsObjectCollectionRule#os_namespace}
  */
  readonly osNamespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#poll_since LogAnalyticsLogAnalyticsObjectCollectionRule#poll_since}
  */
  readonly pollSince?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#poll_till LogAnalyticsLogAnalyticsObjectCollectionRule#poll_till}
  */
  readonly pollTill?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#stream_cursor_time LogAnalyticsLogAnalyticsObjectCollectionRule#stream_cursor_time}
  */
  readonly streamCursorTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#stream_cursor_type LogAnalyticsLogAnalyticsObjectCollectionRule#stream_cursor_type}
  */
  readonly streamCursorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#stream_id LogAnalyticsLogAnalyticsObjectCollectionRule#stream_id}
  */
  readonly streamId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#timezone LogAnalyticsLogAnalyticsObjectCollectionRule#timezone}
  */
  readonly timezone?: string;
  /**
  * overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#overrides LogAnalyticsLogAnalyticsObjectCollectionRule#overrides}
  */
  readonly overrides?: LogAnalyticsLogAnalyticsObjectCollectionRuleOverrides[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#timeouts LogAnalyticsLogAnalyticsObjectCollectionRule#timeouts}
  */
  readonly timeouts?: LogAnalyticsLogAnalyticsObjectCollectionRuleTimeouts;
}
export interface LogAnalyticsLogAnalyticsObjectCollectionRuleOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#match_type LogAnalyticsLogAnalyticsObjectCollectionRule#match_type}
  */
  readonly matchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#match_value LogAnalyticsLogAnalyticsObjectCollectionRule#match_value}
  */
  readonly matchValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#property_name LogAnalyticsLogAnalyticsObjectCollectionRule#property_name}
  */
  readonly propertyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#property_value LogAnalyticsLogAnalyticsObjectCollectionRule#property_value}
  */
  readonly propertyValue?: string;
}

export function logAnalyticsLogAnalyticsObjectCollectionRuleOverridesToTerraform(struct?: LogAnalyticsLogAnalyticsObjectCollectionRuleOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_type: cdktf.stringToTerraform(struct!.matchType),
    match_value: cdktf.stringToTerraform(struct!.matchValue),
    property_name: cdktf.stringToTerraform(struct!.propertyName),
    property_value: cdktf.stringToTerraform(struct!.propertyValue),
  }
}


export function logAnalyticsLogAnalyticsObjectCollectionRuleOverridesToHclTerraform(struct?: LogAnalyticsLogAnalyticsObjectCollectionRuleOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_value: {
      value: cdktf.stringToHclTerraform(struct!.matchValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_name: {
      value: cdktf.stringToHclTerraform(struct!.propertyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_value: {
      value: cdktf.stringToHclTerraform(struct!.propertyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogAnalyticsLogAnalyticsObjectCollectionRuleOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._matchValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValue = this._matchValue;
    }
    if (this._propertyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyName = this._propertyName;
    }
    if (this._propertyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyValue = this._propertyValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAnalyticsLogAnalyticsObjectCollectionRuleOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchType = undefined;
      this._matchValue = undefined;
      this._propertyName = undefined;
      this._propertyValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchType = value.matchType;
      this._matchValue = value.matchValue;
      this._propertyName = value.propertyName;
      this._propertyValue = value.propertyValue;
    }
  }

  // match_type - computed: true, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // match_value - computed: true, optional: true, required: false
  private _matchValue?: string; 
  public get matchValue() {
    return this.getStringAttribute('match_value');
  }
  public set matchValue(value: string) {
    this._matchValue = value;
  }
  public resetMatchValue() {
    this._matchValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValueInput() {
    return this._matchValue;
  }

  // property_name - computed: true, optional: true, required: false
  private _propertyName?: string; 
  public get propertyName() {
    return this.getStringAttribute('property_name');
  }
  public set propertyName(value: string) {
    this._propertyName = value;
  }
  public resetPropertyName() {
    this._propertyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyNameInput() {
    return this._propertyName;
  }

  // property_value - computed: true, optional: true, required: false
  private _propertyValue?: string; 
  public get propertyValue() {
    return this.getStringAttribute('property_value');
  }
  public set propertyValue(value: string) {
    this._propertyValue = value;
  }
  public resetPropertyValue() {
    this._propertyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyValueInput() {
    return this._propertyValue;
  }
}

export class LogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList extends cdktf.ComplexList {
  public internalValue? : LogAnalyticsLogAnalyticsObjectCollectionRuleOverrides[] | cdktf.IResolvable

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
  public get(index: number): LogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference {
    return new LogAnalyticsLogAnalyticsObjectCollectionRuleOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogAnalyticsLogAnalyticsObjectCollectionRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#create LogAnalyticsLogAnalyticsObjectCollectionRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#delete LogAnalyticsLogAnalyticsObjectCollectionRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#update LogAnalyticsLogAnalyticsObjectCollectionRule#update}
  */
  readonly update?: string;
}

export function logAnalyticsLogAnalyticsObjectCollectionRuleTimeoutsToTerraform(struct?: LogAnalyticsLogAnalyticsObjectCollectionRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function logAnalyticsLogAnalyticsObjectCollectionRuleTimeoutsToHclTerraform(struct?: LogAnalyticsLogAnalyticsObjectCollectionRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAnalyticsLogAnalyticsObjectCollectionRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogAnalyticsLogAnalyticsObjectCollectionRuleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAnalyticsLogAnalyticsObjectCollectionRuleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule oci_log_analytics_log_analytics_object_collection_rule}
*/
export class LogAnalyticsLogAnalyticsObjectCollectionRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_log_analytics_log_analytics_object_collection_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogAnalyticsLogAnalyticsObjectCollectionRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogAnalyticsLogAnalyticsObjectCollectionRule to import
  * @param importFromId The id of the existing LogAnalyticsLogAnalyticsObjectCollectionRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogAnalyticsLogAnalyticsObjectCollectionRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_log_analytics_log_analytics_object_collection_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/log_analytics_log_analytics_object_collection_rule oci_log_analytics_log_analytics_object_collection_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogAnalyticsLogAnalyticsObjectCollectionRuleConfig
  */
  public constructor(scope: Construct, id: string, config: LogAnalyticsLogAnalyticsObjectCollectionRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_log_analytics_log_analytics_object_collection_rule',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._charEncoding = config.charEncoding;
    this._collectionType = config.collectionType;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._entityId = config.entityId;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isEnabled = config.isEnabled;
    this._isForceHistoricCollection = config.isForceHistoricCollection;
    this._logGroupId = config.logGroupId;
    this._logSet = config.logSet;
    this._logSetExtRegex = config.logSetExtRegex;
    this._logSetKey = config.logSetKey;
    this._logSourceName = config.logSourceName;
    this._logType = config.logType;
    this._name = config.name;
    this._namespace = config.namespace;
    this._objectNameFilters = config.objectNameFilters;
    this._osBucketName = config.osBucketName;
    this._osNamespace = config.osNamespace;
    this._pollSince = config.pollSince;
    this._pollTill = config.pollTill;
    this._streamCursorTime = config.streamCursorTime;
    this._streamCursorType = config.streamCursorType;
    this._streamId = config.streamId;
    this._timezone = config.timezone;
    this._overrides.internalValue = config.overrides;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // char_encoding - computed: true, optional: true, required: false
  private _charEncoding?: string; 
  public get charEncoding() {
    return this.getStringAttribute('char_encoding');
  }
  public set charEncoding(value: string) {
    this._charEncoding = value;
  }
  public resetCharEncoding() {
    this._charEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get charEncodingInput() {
    return this._charEncoding;
  }

  // collection_type - computed: true, optional: true, required: false
  private _collectionType?: string; 
  public get collectionType() {
    return this.getStringAttribute('collection_type');
  }
  public set collectionType(value: string) {
    this._collectionType = value;
  }
  public resetCollectionType() {
    this._collectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionTypeInput() {
    return this._collectionType;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
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

  // entity_id - computed: true, optional: true, required: false
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  public resetEntityId() {
    this._entityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // is_force_historic_collection - computed: true, optional: true, required: false
  private _isForceHistoricCollection?: boolean | cdktf.IResolvable; 
  public get isForceHistoricCollection() {
    return this.getBooleanAttribute('is_force_historic_collection');
  }
  public set isForceHistoricCollection(value: boolean | cdktf.IResolvable) {
    this._isForceHistoricCollection = value;
  }
  public resetIsForceHistoricCollection() {
    this._isForceHistoricCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isForceHistoricCollectionInput() {
    return this._isForceHistoricCollection;
  }

  // last_collected_object - computed: true, optional: false, required: false
  public get lastCollectedObject() {
    return this.getStringAttribute('last_collected_object');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // log_group_id - computed: false, optional: false, required: true
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // log_set - computed: true, optional: true, required: false
  private _logSet?: string; 
  public get logSet() {
    return this.getStringAttribute('log_set');
  }
  public set logSet(value: string) {
    this._logSet = value;
  }
  public resetLogSet() {
    this._logSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSetInput() {
    return this._logSet;
  }

  // log_set_ext_regex - computed: true, optional: true, required: false
  private _logSetExtRegex?: string; 
  public get logSetExtRegex() {
    return this.getStringAttribute('log_set_ext_regex');
  }
  public set logSetExtRegex(value: string) {
    this._logSetExtRegex = value;
  }
  public resetLogSetExtRegex() {
    this._logSetExtRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSetExtRegexInput() {
    return this._logSetExtRegex;
  }

  // log_set_key - computed: true, optional: true, required: false
  private _logSetKey?: string; 
  public get logSetKey() {
    return this.getStringAttribute('log_set_key');
  }
  public set logSetKey(value: string) {
    this._logSetKey = value;
  }
  public resetLogSetKey() {
    this._logSetKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSetKeyInput() {
    return this._logSetKey;
  }

  // log_source_name - computed: true, optional: true, required: false
  private _logSourceName?: string; 
  public get logSourceName() {
    return this.getStringAttribute('log_source_name');
  }
  public set logSourceName(value: string) {
    this._logSourceName = value;
  }
  public resetLogSourceName() {
    this._logSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSourceNameInput() {
    return this._logSourceName;
  }

  // log_type - computed: true, optional: true, required: false
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
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

  // object_name_filters - computed: false, optional: true, required: false
  private _objectNameFilters?: string[]; 
  public get objectNameFilters() {
    return this.getListAttribute('object_name_filters');
  }
  public set objectNameFilters(value: string[]) {
    this._objectNameFilters = value;
  }
  public resetObjectNameFilters() {
    this._objectNameFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameFiltersInput() {
    return this._objectNameFilters;
  }

  // os_bucket_name - computed: false, optional: false, required: true
  private _osBucketName?: string; 
  public get osBucketName() {
    return this.getStringAttribute('os_bucket_name');
  }
  public set osBucketName(value: string) {
    this._osBucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osBucketNameInput() {
    return this._osBucketName;
  }

  // os_namespace - computed: false, optional: false, required: true
  private _osNamespace?: string; 
  public get osNamespace() {
    return this.getStringAttribute('os_namespace');
  }
  public set osNamespace(value: string) {
    this._osNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osNamespaceInput() {
    return this._osNamespace;
  }

  // poll_since - computed: true, optional: true, required: false
  private _pollSince?: string; 
  public get pollSince() {
    return this.getStringAttribute('poll_since');
  }
  public set pollSince(value: string) {
    this._pollSince = value;
  }
  public resetPollSince() {
    this._pollSince = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollSinceInput() {
    return this._pollSince;
  }

  // poll_till - computed: true, optional: true, required: false
  private _pollTill?: string; 
  public get pollTill() {
    return this.getStringAttribute('poll_till');
  }
  public set pollTill(value: string) {
    this._pollTill = value;
  }
  public resetPollTill() {
    this._pollTill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollTillInput() {
    return this._pollTill;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // stream_cursor_time - computed: true, optional: true, required: false
  private _streamCursorTime?: string; 
  public get streamCursorTime() {
    return this.getStringAttribute('stream_cursor_time');
  }
  public set streamCursorTime(value: string) {
    this._streamCursorTime = value;
  }
  public resetStreamCursorTime() {
    this._streamCursorTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamCursorTimeInput() {
    return this._streamCursorTime;
  }

  // stream_cursor_type - computed: true, optional: true, required: false
  private _streamCursorType?: string; 
  public get streamCursorType() {
    return this.getStringAttribute('stream_cursor_type');
  }
  public set streamCursorType(value: string) {
    this._streamCursorType = value;
  }
  public resetStreamCursorType() {
    this._streamCursorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamCursorTypeInput() {
    return this._streamCursorType;
  }

  // stream_id - computed: true, optional: true, required: false
  private _streamId?: string; 
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
  public set streamId(value: string) {
    this._streamId = value;
  }
  public resetStreamId() {
    this._streamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamIdInput() {
    return this._streamId;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // timezone - computed: true, optional: true, required: false
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

  // overrides - computed: false, optional: true, required: false
  private _overrides = new LogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: LogAnalyticsLogAnalyticsObjectCollectionRuleOverrides[] | cdktf.IResolvable) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LogAnalyticsLogAnalyticsObjectCollectionRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LogAnalyticsLogAnalyticsObjectCollectionRuleTimeouts) {
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
      char_encoding: cdktf.stringToTerraform(this._charEncoding),
      collection_type: cdktf.stringToTerraform(this._collectionType),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      entity_id: cdktf.stringToTerraform(this._entityId),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      is_force_historic_collection: cdktf.booleanToTerraform(this._isForceHistoricCollection),
      log_group_id: cdktf.stringToTerraform(this._logGroupId),
      log_set: cdktf.stringToTerraform(this._logSet),
      log_set_ext_regex: cdktf.stringToTerraform(this._logSetExtRegex),
      log_set_key: cdktf.stringToTerraform(this._logSetKey),
      log_source_name: cdktf.stringToTerraform(this._logSourceName),
      log_type: cdktf.stringToTerraform(this._logType),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      object_name_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._objectNameFilters),
      os_bucket_name: cdktf.stringToTerraform(this._osBucketName),
      os_namespace: cdktf.stringToTerraform(this._osNamespace),
      poll_since: cdktf.stringToTerraform(this._pollSince),
      poll_till: cdktf.stringToTerraform(this._pollTill),
      stream_cursor_time: cdktf.stringToTerraform(this._streamCursorTime),
      stream_cursor_type: cdktf.stringToTerraform(this._streamCursorType),
      stream_id: cdktf.stringToTerraform(this._streamId),
      timezone: cdktf.stringToTerraform(this._timezone),
      overrides: cdktf.listMapper(logAnalyticsLogAnalyticsObjectCollectionRuleOverridesToTerraform, true)(this._overrides.internalValue),
      timeouts: logAnalyticsLogAnalyticsObjectCollectionRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      char_encoding: {
        value: cdktf.stringToHclTerraform(this._charEncoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collection_type: {
        value: cdktf.stringToHclTerraform(this._collectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_id: {
        value: cdktf.stringToHclTerraform(this._entityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_force_historic_collection: {
        value: cdktf.booleanToHclTerraform(this._isForceHistoricCollection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_group_id: {
        value: cdktf.stringToHclTerraform(this._logGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_set: {
        value: cdktf.stringToHclTerraform(this._logSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_set_ext_regex: {
        value: cdktf.stringToHclTerraform(this._logSetExtRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_set_key: {
        value: cdktf.stringToHclTerraform(this._logSetKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_source_name: {
        value: cdktf.stringToHclTerraform(this._logSourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_type: {
        value: cdktf.stringToHclTerraform(this._logType),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_name_filters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._objectNameFilters),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      os_bucket_name: {
        value: cdktf.stringToHclTerraform(this._osBucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_namespace: {
        value: cdktf.stringToHclTerraform(this._osNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poll_since: {
        value: cdktf.stringToHclTerraform(this._pollSince),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poll_till: {
        value: cdktf.stringToHclTerraform(this._pollTill),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_cursor_time: {
        value: cdktf.stringToHclTerraform(this._streamCursorTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_cursor_type: {
        value: cdktf.stringToHclTerraform(this._streamCursorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_id: {
        value: cdktf.stringToHclTerraform(this._streamId),
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
      overrides: {
        value: cdktf.listMapperHcl(logAnalyticsLogAnalyticsObjectCollectionRuleOverridesToHclTerraform, true)(this._overrides.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogAnalyticsLogAnalyticsObjectCollectionRuleOverridesList",
      },
      timeouts: {
        value: logAnalyticsLogAnalyticsObjectCollectionRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LogAnalyticsLogAnalyticsObjectCollectionRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
