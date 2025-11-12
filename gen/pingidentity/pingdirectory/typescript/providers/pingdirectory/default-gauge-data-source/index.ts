// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultGaugeDataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Additional information about the source of this data that is added to alerts sent as a result of gauges that use this Gauge Data Source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge_data_source#additional_text DefaultGaugeDataSource#additional_text}
  */
  readonly additionalText?: string;
  /**
  * Indicates whether a higher or lower value is a more severe condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge_data_source#data_orientation DefaultGaugeDataSource#data_orientation}
  */
  readonly dataOrientation?: string;
  /**
  * A description for this Gauge Data Source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge_data_source#description DefaultGaugeDataSource#description}
  */
  readonly description?: string;
  /**
  * An optional floating point value that can be used to scale the resulting value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge_data_source#divide_value_by DefaultGaugeDataSource#divide_value_by}
  */
  readonly divideValueBy?: number;
  /**
  * An optional property that can scale the resulting value by another attribute in the monitored entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge_data_source#divide_value_by_attribute DefaultGaugeDataSource#divide_value_by_attribute}
  */
  readonly divideValueByAttribute?: string;
  /**
  * An optional property that can scale the resulting value by another attribute whose value represents a counter in the monitored entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge_data_source#divide_value_by_counter_attribute DefaultGaugeDataSource#divide_value_by_counter_attribute}
  */
  readonly divideValueByCounterAttribute?: string;
  /**
  * An optional LDAP filter that can be used restrict which monitor entries are used to compute output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge_data_source#include_filter DefaultGaugeDataSource#include_filter}
  */
  readonly includeFilter?: string;
  /**
  * The minimum frequency with which gauges using this Gauge Data Source can be configured for update. In order to prevent undesirable side effects, some Gauge Data Sources may use this property to impose a higher bound on the update frequency of gauges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge_data_source#minimum_update_interval DefaultGaugeDataSource#minimum_update_interval}
  */
  readonly minimumUpdateInterval?: string;
  /**
  * Specifies the attribute on the monitor entries from which to derive the current gauge value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge_data_source#monitor_attribute DefaultGaugeDataSource#monitor_attribute}
  */
  readonly monitorAttribute?: string;
  /**
  * The object class name of the monitor entries to examine for generating gauge data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge_data_source#monitor_objectclass DefaultGaugeDataSource#monitor_objectclass}
  */
  readonly monitorObjectclass?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge_data_source#name DefaultGaugeDataSource#name}
  */
  readonly name: string;
  /**
  * Specifies the attribute whose value is used to identify the specific resource being monitored (e.g. device name).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge_data_source#resource_attribute DefaultGaugeDataSource#resource_attribute}
  */
  readonly resourceAttribute?: string;
  /**
  * A string indicating the type of resource being monitored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge_data_source#resource_type DefaultGaugeDataSource#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Specifies the type of statistic to include in the output for the monitored attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge_data_source#statistic_type DefaultGaugeDataSource#statistic_type}
  */
  readonly statisticType?: string;
}
export interface DefaultGaugeDataSourceRequiredActions {
}

export function defaultGaugeDataSourceRequiredActionsToTerraform(struct?: DefaultGaugeDataSourceRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultGaugeDataSourceRequiredActionsToHclTerraform(struct?: DefaultGaugeDataSourceRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultGaugeDataSourceRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultGaugeDataSourceRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultGaugeDataSourceRequiredActions | undefined) {
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

export class DefaultGaugeDataSourceRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultGaugeDataSourceRequiredActionsOutputReference {
    return new DefaultGaugeDataSourceRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge_data_source pingdirectory_default_gauge_data_source}
*/
export class DefaultGaugeDataSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_gauge_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultGaugeDataSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultGaugeDataSource to import
  * @param importFromId The id of the existing DefaultGaugeDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultGaugeDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_gauge_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_gauge_data_source pingdirectory_default_gauge_data_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultGaugeDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultGaugeDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_gauge_data_source',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalText = config.additionalText;
    this._dataOrientation = config.dataOrientation;
    this._description = config.description;
    this._divideValueBy = config.divideValueBy;
    this._divideValueByAttribute = config.divideValueByAttribute;
    this._divideValueByCounterAttribute = config.divideValueByCounterAttribute;
    this._includeFilter = config.includeFilter;
    this._minimumUpdateInterval = config.minimumUpdateInterval;
    this._monitorAttribute = config.monitorAttribute;
    this._monitorObjectclass = config.monitorObjectclass;
    this._name = config.name;
    this._resourceAttribute = config.resourceAttribute;
    this._resourceType = config.resourceType;
    this._statisticType = config.statisticType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_text - computed: true, optional: true, required: false
  private _additionalText?: string; 
  public get additionalText() {
    return this.getStringAttribute('additional_text');
  }
  public set additionalText(value: string) {
    this._additionalText = value;
  }
  public resetAdditionalText() {
    this._additionalText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalTextInput() {
    return this._additionalText;
  }

  // data_orientation - computed: true, optional: true, required: false
  private _dataOrientation?: string; 
  public get dataOrientation() {
    return this.getStringAttribute('data_orientation');
  }
  public set dataOrientation(value: string) {
    this._dataOrientation = value;
  }
  public resetDataOrientation() {
    this._dataOrientation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataOrientationInput() {
    return this._dataOrientation;
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
  private _divideValueBy?: number; 
  public get divideValueBy() {
    return this.getNumberAttribute('divide_value_by');
  }
  public set divideValueBy(value: number) {
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

  // divide_value_by_counter_attribute - computed: true, optional: true, required: false
  private _divideValueByCounterAttribute?: string; 
  public get divideValueByCounterAttribute() {
    return this.getStringAttribute('divide_value_by_counter_attribute');
  }
  public set divideValueByCounterAttribute(value: string) {
    this._divideValueByCounterAttribute = value;
  }
  public resetDivideValueByCounterAttribute() {
    this._divideValueByCounterAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divideValueByCounterAttributeInput() {
    return this._divideValueByCounterAttribute;
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

  // minimum_update_interval - computed: true, optional: true, required: false
  private _minimumUpdateInterval?: string; 
  public get minimumUpdateInterval() {
    return this.getStringAttribute('minimum_update_interval');
  }
  public set minimumUpdateInterval(value: string) {
    this._minimumUpdateInterval = value;
  }
  public resetMinimumUpdateInterval() {
    this._minimumUpdateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumUpdateIntervalInput() {
    return this._minimumUpdateInterval;
  }

  // monitor_attribute - computed: true, optional: true, required: false
  private _monitorAttribute?: string; 
  public get monitorAttribute() {
    return this.getStringAttribute('monitor_attribute');
  }
  public set monitorAttribute(value: string) {
    this._monitorAttribute = value;
  }
  public resetMonitorAttribute() {
    this._monitorAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorAttributeInput() {
    return this._monitorAttribute;
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultGaugeDataSourceRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // resource_attribute - computed: true, optional: true, required: false
  private _resourceAttribute?: string; 
  public get resourceAttribute() {
    return this.getStringAttribute('resource_attribute');
  }
  public set resourceAttribute(value: string) {
    this._resourceAttribute = value;
  }
  public resetResourceAttribute() {
    this._resourceAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAttributeInput() {
    return this._resourceAttribute;
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // statistic_type - computed: true, optional: true, required: false
  private _statisticType?: string; 
  public get statisticType() {
    return this.getStringAttribute('statistic_type');
  }
  public set statisticType(value: string) {
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
      additional_text: cdktf.stringToTerraform(this._additionalText),
      data_orientation: cdktf.stringToTerraform(this._dataOrientation),
      description: cdktf.stringToTerraform(this._description),
      divide_value_by: cdktf.numberToTerraform(this._divideValueBy),
      divide_value_by_attribute: cdktf.stringToTerraform(this._divideValueByAttribute),
      divide_value_by_counter_attribute: cdktf.stringToTerraform(this._divideValueByCounterAttribute),
      include_filter: cdktf.stringToTerraform(this._includeFilter),
      minimum_update_interval: cdktf.stringToTerraform(this._minimumUpdateInterval),
      monitor_attribute: cdktf.stringToTerraform(this._monitorAttribute),
      monitor_objectclass: cdktf.stringToTerraform(this._monitorObjectclass),
      name: cdktf.stringToTerraform(this._name),
      resource_attribute: cdktf.stringToTerraform(this._resourceAttribute),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      statistic_type: cdktf.stringToTerraform(this._statisticType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_text: {
        value: cdktf.stringToHclTerraform(this._additionalText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_orientation: {
        value: cdktf.stringToHclTerraform(this._dataOrientation),
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
        value: cdktf.numberToHclTerraform(this._divideValueBy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      divide_value_by_attribute: {
        value: cdktf.stringToHclTerraform(this._divideValueByAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      divide_value_by_counter_attribute: {
        value: cdktf.stringToHclTerraform(this._divideValueByCounterAttribute),
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
      minimum_update_interval: {
        value: cdktf.stringToHclTerraform(this._minimumUpdateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_attribute: {
        value: cdktf.stringToHclTerraform(this._monitorAttribute),
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
      resource_attribute: {
        value: cdktf.stringToHclTerraform(this._resourceAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      statistic_type: {
        value: cdktf.stringToHclTerraform(this._statisticType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
