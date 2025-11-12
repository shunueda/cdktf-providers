// https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertingConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configures the alert name of the alerting configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_config#alert_name AlertingConfig#alert_name}
  */
  readonly alertName: string;
  /**
  * Configures the list of Event Types IDs which should trigger an alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_config#event_filter_event_types AlertingConfig#event_filter_event_types}
  */
  readonly eventFilterEventTypes?: string[];
  /**
  * Configures a filter query to to filter rules or event types for a limited set of entities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_config#event_filter_query AlertingConfig#event_filter_query}
  */
  readonly eventFilterQuery?: string;
  /**
  * Configures the list of Rule IDs which should trigger an alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_config#event_filter_rule_ids AlertingConfig#event_filter_rule_ids}
  */
  readonly eventFilterRuleIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_config#id AlertingConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configures the list of Integration IDs (Alerting Channels).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_config#integration_ids AlertingConfig#integration_ids}
  */
  readonly integrationIds: string[];
  /**
  * custom_payload_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_config#custom_payload_field AlertingConfig#custom_payload_field}
  */
  readonly customPayloadField?: AlertingConfigCustomPayloadField[] | cdktf.IResolvable;
}
export interface AlertingConfigCustomPayloadField {
  /**
  * The key of the custom payload field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_config#key AlertingConfig#key}
  */
  readonly key: string;
  /**
  * The value of a static string custom payload field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_config#value AlertingConfig#value}
  */
  readonly value?: string;
}

export function alertingConfigCustomPayloadFieldToTerraform(struct?: AlertingConfigCustomPayloadField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function alertingConfigCustomPayloadFieldToHclTerraform(struct?: AlertingConfigCustomPayloadField | cdktf.IResolvable): any {
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

export class AlertingConfigCustomPayloadFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertingConfigCustomPayloadField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertingConfigCustomPayloadField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AlertingConfigCustomPayloadFieldList extends cdktf.ComplexList {
  public internalValue? : AlertingConfigCustomPayloadField[] | cdktf.IResolvable

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
  public get(index: number): AlertingConfigCustomPayloadFieldOutputReference {
    return new AlertingConfigCustomPayloadFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_config instana_alerting_config}
*/
export class AlertingConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instana_alerting_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertingConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertingConfig to import
  * @param importFromId The id of the existing AlertingConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertingConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instana_alerting_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/alerting_config instana_alerting_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertingConfigConfig
  */
  public constructor(scope: Construct, id: string, config: AlertingConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'instana_alerting_config',
      terraformGeneratorMetadata: {
        providerName: 'instana',
        providerVersion: '3.0.0',
        providerVersionConstraint: '3.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertName = config.alertName;
    this._eventFilterEventTypes = config.eventFilterEventTypes;
    this._eventFilterQuery = config.eventFilterQuery;
    this._eventFilterRuleIds = config.eventFilterRuleIds;
    this._id = config.id;
    this._integrationIds = config.integrationIds;
    this._customPayloadField.internalValue = config.customPayloadField;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_name - computed: false, optional: false, required: true
  private _alertName?: string; 
  public get alertName() {
    return this.getStringAttribute('alert_name');
  }
  public set alertName(value: string) {
    this._alertName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertNameInput() {
    return this._alertName;
  }

  // event_filter_event_types - computed: false, optional: true, required: false
  private _eventFilterEventTypes?: string[]; 
  public get eventFilterEventTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('event_filter_event_types'));
  }
  public set eventFilterEventTypes(value: string[]) {
    this._eventFilterEventTypes = value;
  }
  public resetEventFilterEventTypes() {
    this._eventFilterEventTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventFilterEventTypesInput() {
    return this._eventFilterEventTypes;
  }

  // event_filter_query - computed: false, optional: true, required: false
  private _eventFilterQuery?: string; 
  public get eventFilterQuery() {
    return this.getStringAttribute('event_filter_query');
  }
  public set eventFilterQuery(value: string) {
    this._eventFilterQuery = value;
  }
  public resetEventFilterQuery() {
    this._eventFilterQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventFilterQueryInput() {
    return this._eventFilterQuery;
  }

  // event_filter_rule_ids - computed: false, optional: true, required: false
  private _eventFilterRuleIds?: string[]; 
  public get eventFilterRuleIds() {
    return cdktf.Fn.tolist(this.getListAttribute('event_filter_rule_ids'));
  }
  public set eventFilterRuleIds(value: string[]) {
    this._eventFilterRuleIds = value;
  }
  public resetEventFilterRuleIds() {
    this._eventFilterRuleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventFilterRuleIdsInput() {
    return this._eventFilterRuleIds;
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

  // integration_ids - computed: false, optional: false, required: true
  private _integrationIds?: string[]; 
  public get integrationIds() {
    return cdktf.Fn.tolist(this.getListAttribute('integration_ids'));
  }
  public set integrationIds(value: string[]) {
    this._integrationIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdsInput() {
    return this._integrationIds;
  }

  // custom_payload_field - computed: false, optional: true, required: false
  private _customPayloadField = new AlertingConfigCustomPayloadFieldList(this, "custom_payload_field", true);
  public get customPayloadField() {
    return this._customPayloadField;
  }
  public putCustomPayloadField(value: AlertingConfigCustomPayloadField[] | cdktf.IResolvable) {
    this._customPayloadField.internalValue = value;
  }
  public resetCustomPayloadField() {
    this._customPayloadField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadFieldInput() {
    return this._customPayloadField.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_name: cdktf.stringToTerraform(this._alertName),
      event_filter_event_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eventFilterEventTypes),
      event_filter_query: cdktf.stringToTerraform(this._eventFilterQuery),
      event_filter_rule_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eventFilterRuleIds),
      id: cdktf.stringToTerraform(this._id),
      integration_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._integrationIds),
      custom_payload_field: cdktf.listMapper(alertingConfigCustomPayloadFieldToTerraform, true)(this._customPayloadField.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_name: {
        value: cdktf.stringToHclTerraform(this._alertName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_filter_event_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eventFilterEventTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      event_filter_query: {
        value: cdktf.stringToHclTerraform(this._eventFilterQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_filter_rule_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eventFilterRuleIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._integrationIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      custom_payload_field: {
        value: cdktf.listMapperHcl(alertingConfigCustomPayloadFieldToHclTerraform, true)(this._customPayloadField.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlertingConfigCustomPayloadFieldList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
