// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/management_agent_management_agent_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciManagementAgentManagementAgentDataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/management_agent_management_agent_data_source#data_source_key DataOciManagementAgentManagementAgentDataSource#data_source_key}
  */
  readonly dataSourceKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/management_agent_management_agent_data_source#management_agent_id DataOciManagementAgentManagementAgentDataSource#management_agent_id}
  */
  readonly managementAgentId: string;
}
export interface DataOciManagementAgentManagementAgentDataSourceMetricDimensions {
}

export function dataOciManagementAgentManagementAgentDataSourceMetricDimensionsToTerraform(struct?: DataOciManagementAgentManagementAgentDataSourceMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciManagementAgentManagementAgentDataSourceMetricDimensionsToHclTerraform(struct?: DataOciManagementAgentManagementAgentDataSourceMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciManagementAgentManagementAgentDataSourceMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciManagementAgentManagementAgentDataSourceMetricDimensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference {
    return new DataOciManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/management_agent_management_agent_data_source oci_management_agent_management_agent_data_source}
*/
export class DataOciManagementAgentManagementAgentDataSource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_management_agent_management_agent_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciManagementAgentManagementAgentDataSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciManagementAgentManagementAgentDataSource to import
  * @param importFromId The id of the existing DataOciManagementAgentManagementAgentDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/management_agent_management_agent_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciManagementAgentManagementAgentDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_management_agent_management_agent_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/management_agent_management_agent_data_source oci_management_agent_management_agent_data_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciManagementAgentManagementAgentDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciManagementAgentManagementAgentDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_management_agent_management_agent_data_source',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataSourceKey = config.dataSourceKey;
    this._managementAgentId = config.managementAgentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_metrics - computed: true, optional: false, required: false
  public get allowMetrics() {
    return this.getStringAttribute('allow_metrics');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // connection_timeout - computed: true, optional: false, required: false
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }

  // data_source_key - computed: false, optional: false, required: true
  private _dataSourceKey?: string; 
  public get dataSourceKey() {
    return this.getStringAttribute('data_source_key');
  }
  public set dataSourceKey(value: string) {
    this._dataSourceKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceKeyInput() {
    return this._dataSourceKey;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_daemon_set - computed: true, optional: false, required: false
  public get isDaemonSet() {
    return this.getBooleanAttribute('is_daemon_set');
  }

  // management_agent_id - computed: false, optional: false, required: true
  private _managementAgentId?: string; 
  public get managementAgentId() {
    return this.getStringAttribute('management_agent_id');
  }
  public set managementAgentId(value: string) {
    this._managementAgentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementAgentIdInput() {
    return this._managementAgentId;
  }

  // metric_dimensions - computed: true, optional: false, required: false
  private _metricDimensions = new DataOciManagementAgentManagementAgentDataSourceMetricDimensionsList(this, "metric_dimensions", false);
  public get metricDimensions() {
    return this._metricDimensions;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // proxy_url - computed: true, optional: false, required: false
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }

  // read_data_limit - computed: true, optional: false, required: false
  public get readDataLimit() {
    return this.getNumberAttribute('read_data_limit');
  }

  // read_data_limit_in_kilobytes - computed: true, optional: false, required: false
  public get readDataLimitInKilobytes() {
    return this.getNumberAttribute('read_data_limit_in_kilobytes');
  }

  // read_timeout - computed: true, optional: false, required: false
  public get readTimeout() {
    return this.getNumberAttribute('read_timeout');
  }

  // resource_group - computed: true, optional: false, required: false
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }

  // schedule_mins - computed: true, optional: false, required: false
  public get scheduleMins() {
    return this.getNumberAttribute('schedule_mins');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_source_key: cdktf.stringToTerraform(this._dataSourceKey),
      management_agent_id: cdktf.stringToTerraform(this._managementAgentId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_source_key: {
        value: cdktf.stringToHclTerraform(this._dataSourceKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_agent_id: {
        value: cdktf.stringToHclTerraform(this._managementAgentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
