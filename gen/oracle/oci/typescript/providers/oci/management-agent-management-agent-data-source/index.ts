// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementAgentManagementAgentDataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent_data_source#allow_metrics ManagementAgentManagementAgentDataSource#allow_metrics}
  */
  readonly allowMetrics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent_data_source#compartment_id ManagementAgentManagementAgentDataSource#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent_data_source#connection_timeout ManagementAgentManagementAgentDataSource#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent_data_source#id ManagementAgentManagementAgentDataSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent_data_source#management_agent_id ManagementAgentManagementAgentDataSource#management_agent_id}
  */
  readonly managementAgentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent_data_source#name ManagementAgentManagementAgentDataSource#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent_data_source#namespace ManagementAgentManagementAgentDataSource#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent_data_source#proxy_url ManagementAgentManagementAgentDataSource#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent_data_source#read_data_limit_in_kilobytes ManagementAgentManagementAgentDataSource#read_data_limit_in_kilobytes}
  */
  readonly readDataLimitInKilobytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent_data_source#read_timeout ManagementAgentManagementAgentDataSource#read_timeout}
  */
  readonly readTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent_data_source#resource_group ManagementAgentManagementAgentDataSource#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent_data_source#schedule_mins ManagementAgentManagementAgentDataSource#schedule_mins}
  */
  readonly scheduleMins?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent_data_source#type ManagementAgentManagementAgentDataSource#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent_data_source#url ManagementAgentManagementAgentDataSource#url}
  */
  readonly url: string;
  /**
  * metric_dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent_data_source#metric_dimensions ManagementAgentManagementAgentDataSource#metric_dimensions}
  */
  readonly metricDimensions?: ManagementAgentManagementAgentDataSourceMetricDimensions[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent_data_source#timeouts ManagementAgentManagementAgentDataSource#timeouts}
  */
  readonly timeouts?: ManagementAgentManagementAgentDataSourceTimeouts;
}
export interface ManagementAgentManagementAgentDataSourceMetricDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent_data_source#name ManagementAgentManagementAgentDataSource#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent_data_source#value ManagementAgentManagementAgentDataSource#value}
  */
  readonly value: string;
}

export function managementAgentManagementAgentDataSourceMetricDimensionsToTerraform(struct?: ManagementAgentManagementAgentDataSourceMetricDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementAgentManagementAgentDataSourceMetricDimensionsToHclTerraform(struct?: ManagementAgentManagementAgentDataSourceMetricDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementAgentManagementAgentDataSourceMetricDimensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAgentManagementAgentDataSourceMetricDimensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class ManagementAgentManagementAgentDataSourceMetricDimensionsList extends cdktf.ComplexList {
  public internalValue? : ManagementAgentManagementAgentDataSourceMetricDimensions[] | cdktf.IResolvable

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
  public get(index: number): ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference {
    return new ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementAgentManagementAgentDataSourceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent_data_source#create ManagementAgentManagementAgentDataSource#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent_data_source#delete ManagementAgentManagementAgentDataSource#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent_data_source#update ManagementAgentManagementAgentDataSource#update}
  */
  readonly update?: string;
}

export function managementAgentManagementAgentDataSourceTimeoutsToTerraform(struct?: ManagementAgentManagementAgentDataSourceTimeouts | cdktf.IResolvable): any {
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


export function managementAgentManagementAgentDataSourceTimeoutsToHclTerraform(struct?: ManagementAgentManagementAgentDataSourceTimeouts | cdktf.IResolvable): any {
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

export class ManagementAgentManagementAgentDataSourceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ManagementAgentManagementAgentDataSourceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ManagementAgentManagementAgentDataSourceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent_data_source oci_management_agent_management_agent_data_source}
*/
export class ManagementAgentManagementAgentDataSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_management_agent_management_agent_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementAgentManagementAgentDataSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementAgentManagementAgentDataSource to import
  * @param importFromId The id of the existing ManagementAgentManagementAgentDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementAgentManagementAgentDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_management_agent_management_agent_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/management_agent_management_agent_data_source oci_management_agent_management_agent_data_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementAgentManagementAgentDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementAgentManagementAgentDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_management_agent_management_agent_data_source',
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
    this._allowMetrics = config.allowMetrics;
    this._compartmentId = config.compartmentId;
    this._connectionTimeout = config.connectionTimeout;
    this._id = config.id;
    this._managementAgentId = config.managementAgentId;
    this._name = config.name;
    this._namespace = config.namespace;
    this._proxyUrl = config.proxyUrl;
    this._readDataLimitInKilobytes = config.readDataLimitInKilobytes;
    this._readTimeout = config.readTimeout;
    this._resourceGroup = config.resourceGroup;
    this._scheduleMins = config.scheduleMins;
    this._type = config.type;
    this._url = config.url;
    this._metricDimensions.internalValue = config.metricDimensions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_metrics - computed: true, optional: true, required: false
  private _allowMetrics?: string; 
  public get allowMetrics() {
    return this.getStringAttribute('allow_metrics');
  }
  public set allowMetrics(value: string) {
    this._allowMetrics = value;
  }
  public resetAllowMetrics() {
    this._allowMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMetricsInput() {
    return this._allowMetrics;
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

  // connection_timeout - computed: true, optional: true, required: false
  private _connectionTimeout?: number; 
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }
  public set connectionTimeout(value: number) {
    this._connectionTimeout = value;
  }
  public resetConnectionTimeout() {
    this._connectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutInput() {
    return this._connectionTimeout;
  }

  // data_source_key - computed: true, optional: false, required: false
  public get dataSourceKey() {
    return this.getStringAttribute('data_source_key');
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

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // proxy_url - computed: true, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }
  public set proxyUrl(value: string) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }

  // read_data_limit - computed: true, optional: false, required: false
  public get readDataLimit() {
    return this.getNumberAttribute('read_data_limit');
  }

  // read_data_limit_in_kilobytes - computed: true, optional: true, required: false
  private _readDataLimitInKilobytes?: number; 
  public get readDataLimitInKilobytes() {
    return this.getNumberAttribute('read_data_limit_in_kilobytes');
  }
  public set readDataLimitInKilobytes(value: number) {
    this._readDataLimitInKilobytes = value;
  }
  public resetReadDataLimitInKilobytes() {
    this._readDataLimitInKilobytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readDataLimitInKilobytesInput() {
    return this._readDataLimitInKilobytes;
  }

  // read_timeout - computed: true, optional: true, required: false
  private _readTimeout?: number; 
  public get readTimeout() {
    return this.getNumberAttribute('read_timeout');
  }
  public set readTimeout(value: number) {
    this._readTimeout = value;
  }
  public resetReadTimeout() {
    this._readTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutInput() {
    return this._readTimeout;
  }

  // resource_group - computed: true, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // schedule_mins - computed: true, optional: true, required: false
  private _scheduleMins?: number; 
  public get scheduleMins() {
    return this.getNumberAttribute('schedule_mins');
  }
  public set scheduleMins(value: number) {
    this._scheduleMins = value;
  }
  public resetScheduleMins() {
    this._scheduleMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleMinsInput() {
    return this._scheduleMins;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // metric_dimensions - computed: false, optional: true, required: false
  private _metricDimensions = new ManagementAgentManagementAgentDataSourceMetricDimensionsList(this, "metric_dimensions", false);
  public get metricDimensions() {
    return this._metricDimensions;
  }
  public putMetricDimensions(value: ManagementAgentManagementAgentDataSourceMetricDimensions[] | cdktf.IResolvable) {
    this._metricDimensions.internalValue = value;
  }
  public resetMetricDimensions() {
    this._metricDimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDimensionsInput() {
    return this._metricDimensions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ManagementAgentManagementAgentDataSourceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ManagementAgentManagementAgentDataSourceTimeouts) {
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
      allow_metrics: cdktf.stringToTerraform(this._allowMetrics),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      connection_timeout: cdktf.numberToTerraform(this._connectionTimeout),
      id: cdktf.stringToTerraform(this._id),
      management_agent_id: cdktf.stringToTerraform(this._managementAgentId),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      proxy_url: cdktf.stringToTerraform(this._proxyUrl),
      read_data_limit_in_kilobytes: cdktf.numberToTerraform(this._readDataLimitInKilobytes),
      read_timeout: cdktf.numberToTerraform(this._readTimeout),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
      schedule_mins: cdktf.numberToTerraform(this._scheduleMins),
      type: cdktf.stringToTerraform(this._type),
      url: cdktf.stringToTerraform(this._url),
      metric_dimensions: cdktf.listMapper(managementAgentManagementAgentDataSourceMetricDimensionsToTerraform, true)(this._metricDimensions.internalValue),
      timeouts: managementAgentManagementAgentDataSourceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_metrics: {
        value: cdktf.stringToHclTerraform(this._allowMetrics),
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
      connection_timeout: {
        value: cdktf.numberToHclTerraform(this._connectionTimeout),
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
      management_agent_id: {
        value: cdktf.stringToHclTerraform(this._managementAgentId),
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
      proxy_url: {
        value: cdktf.stringToHclTerraform(this._proxyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_data_limit_in_kilobytes: {
        value: cdktf.numberToHclTerraform(this._readDataLimitInKilobytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      read_timeout: {
        value: cdktf.numberToHclTerraform(this._readTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_group: {
        value: cdktf.stringToHclTerraform(this._resourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_mins: {
        value: cdktf.numberToHclTerraform(this._scheduleMins),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_dimensions: {
        value: cdktf.listMapperHcl(managementAgentManagementAgentDataSourceMetricDimensionsToHclTerraform, true)(this._metricDimensions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementAgentManagementAgentDataSourceMetricDimensionsList",
      },
      timeouts: {
        value: managementAgentManagementAgentDataSourceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ManagementAgentManagementAgentDataSourceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
