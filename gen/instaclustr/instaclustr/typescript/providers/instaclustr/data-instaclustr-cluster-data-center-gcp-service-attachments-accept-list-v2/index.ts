// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/cluster_data_center_gcp_service_attachments_accept_list_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2Config extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Cluster Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/cluster_data_center_gcp_service_attachments_accept_list_v2#cdc_id DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2#cdc_id}
  */
  readonly cdcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/cluster_data_center_gcp_service_attachments_accept_list_v2#cluster_data_center_id DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2#cluster_data_center_id}
  */
  readonly clusterDataCenterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/cluster_data_center_gcp_service_attachments_accept_list_v2#id DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates if the cluster is currently performing any operation such as being created, updated, or deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/cluster_data_center_gcp_service_attachments_accept_list_v2#operation_status DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2#operation_status}
  */
  readonly operationStatus?: string;
  /**
  * consumer_accept_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/cluster_data_center_gcp_service_attachments_accept_list_v2#consumer_accept_list DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2#consumer_accept_list}
  */
  readonly consumerAcceptList?: DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2ConsumerAcceptListStruct[] | cdktf.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/cluster_data_center_gcp_service_attachments_accept_list_v2#filter DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2#filter}
  */
  readonly filter?: DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2Filter[] | cdktf.IResolvable;
}
export interface DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2ConsumerAcceptListStruct {
  /**
  * The accepted network name of the parent project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/cluster_data_center_gcp_service_attachments_accept_list_v2#accept_network_name DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2#accept_network_name}
  */
  readonly acceptNetworkName?: string;
  /**
  * The accepted project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/cluster_data_center_gcp_service_attachments_accept_list_v2#accept_project_id DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2#accept_project_id}
  */
  readonly acceptProjectId?: string;
  /**
  * The connection limit for the project or network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/cluster_data_center_gcp_service_attachments_accept_list_v2#connection_limit DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2#connection_limit}
  */
  readonly connectionLimit?: number;
}

export function dataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2ConsumerAcceptListStructToTerraform(struct?: DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2ConsumerAcceptListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_network_name: cdktf.stringToTerraform(struct!.acceptNetworkName),
    accept_project_id: cdktf.stringToTerraform(struct!.acceptProjectId),
    connection_limit: cdktf.numberToTerraform(struct!.connectionLimit),
  }
}


export function dataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2ConsumerAcceptListStructToHclTerraform(struct?: DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2ConsumerAcceptListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_network_name: {
      value: cdktf.stringToHclTerraform(struct!.acceptNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accept_project_id: {
      value: cdktf.stringToHclTerraform(struct!.acceptProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_limit: {
      value: cdktf.numberToHclTerraform(struct!.connectionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2ConsumerAcceptListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2ConsumerAcceptListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptNetworkName = this._acceptNetworkName;
    }
    if (this._acceptProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptProjectId = this._acceptProjectId;
    }
    if (this._connectionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLimit = this._connectionLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2ConsumerAcceptListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptNetworkName = undefined;
      this._acceptProjectId = undefined;
      this._connectionLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptNetworkName = value.acceptNetworkName;
      this._acceptProjectId = value.acceptProjectId;
      this._connectionLimit = value.connectionLimit;
    }
  }

  // accept_network_name - computed: true, optional: true, required: false
  private _acceptNetworkName?: string; 
  public get acceptNetworkName() {
    return this.getStringAttribute('accept_network_name');
  }
  public set acceptNetworkName(value: string) {
    this._acceptNetworkName = value;
  }
  public resetAcceptNetworkName() {
    this._acceptNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptNetworkNameInput() {
    return this._acceptNetworkName;
  }

  // accept_project_id - computed: true, optional: true, required: false
  private _acceptProjectId?: string; 
  public get acceptProjectId() {
    return this.getStringAttribute('accept_project_id');
  }
  public set acceptProjectId(value: string) {
    this._acceptProjectId = value;
  }
  public resetAcceptProjectId() {
    this._acceptProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptProjectIdInput() {
    return this._acceptProjectId;
  }

  // connection_limit - computed: true, optional: true, required: false
  private _connectionLimit?: number; 
  public get connectionLimit() {
    return this.getNumberAttribute('connection_limit');
  }
  public set connectionLimit(value: number) {
    this._connectionLimit = value;
  }
  public resetConnectionLimit() {
    this._connectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitInput() {
    return this._connectionLimit;
  }
}

export class DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2ConsumerAcceptListStructList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2ConsumerAcceptListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2ConsumerAcceptListStructOutputReference {
    return new DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2ConsumerAcceptListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2Filter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/cluster_data_center_gcp_service_attachments_accept_list_v2#name DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/cluster_data_center_gcp_service_attachments_accept_list_v2#values DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2#values}
  */
  readonly values: string[];
}

export function dataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2FilterToTerraform(struct?: DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2Filter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2FilterToHclTerraform(struct?: DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2Filter | cdktf.IResolvable): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2FilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2Filter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2Filter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2FilterList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2Filter[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2FilterOutputReference {
    return new DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2FilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/cluster_data_center_gcp_service_attachments_accept_list_v2 instaclustr_cluster_data_center_gcp_service_attachments_accept_list_v2}
*/
export class DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_cluster_data_center_gcp_service_attachments_accept_list_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2 to import
  * @param importFromId The id of the existing DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/cluster_data_center_gcp_service_attachments_accept_list_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_cluster_data_center_gcp_service_attachments_accept_list_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/cluster_data_center_gcp_service_attachments_accept_list_v2 instaclustr_cluster_data_center_gcp_service_attachments_accept_list_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2Config
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2Config) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_cluster_data_center_gcp_service_attachments_accept_list_v2',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.35',
        providerVersionConstraint: '2.1.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cdcId = config.cdcId;
    this._clusterDataCenterId = config.clusterDataCenterId;
    this._id = config.id;
    this._operationStatus = config.operationStatus;
    this._consumerAcceptList.internalValue = config.consumerAcceptList;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdc_id - computed: true, optional: true, required: false
  private _cdcId?: string; 
  public get cdcId() {
    return this.getStringAttribute('cdc_id');
  }
  public set cdcId(value: string) {
    this._cdcId = value;
  }
  public resetCdcId() {
    this._cdcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdcIdInput() {
    return this._cdcId;
  }

  // cluster_data_center_id - computed: false, optional: false, required: true
  private _clusterDataCenterId?: string; 
  public get clusterDataCenterId() {
    return this.getStringAttribute('cluster_data_center_id');
  }
  public set clusterDataCenterId(value: string) {
    this._clusterDataCenterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDataCenterIdInput() {
    return this._clusterDataCenterId;
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

  // operation_status - computed: true, optional: true, required: false
  private _operationStatus?: string; 
  public get operationStatus() {
    return this.getStringAttribute('operation_status');
  }
  public set operationStatus(value: string) {
    this._operationStatus = value;
  }
  public resetOperationStatus() {
    this._operationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationStatusInput() {
    return this._operationStatus;
  }

  // consumer_accept_list - computed: false, optional: true, required: false
  private _consumerAcceptList = new DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2ConsumerAcceptListStructList(this, "consumer_accept_list", false);
  public get consumerAcceptList() {
    return this._consumerAcceptList;
  }
  public putConsumerAcceptList(value: DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2ConsumerAcceptListStruct[] | cdktf.IResolvable) {
    this._consumerAcceptList.internalValue = value;
  }
  public resetConsumerAcceptList() {
    this._consumerAcceptList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerAcceptListInput() {
    return this._consumerAcceptList.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2FilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2Filter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cdc_id: cdktf.stringToTerraform(this._cdcId),
      cluster_data_center_id: cdktf.stringToTerraform(this._clusterDataCenterId),
      id: cdktf.stringToTerraform(this._id),
      operation_status: cdktf.stringToTerraform(this._operationStatus),
      consumer_accept_list: cdktf.listMapper(dataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2ConsumerAcceptListStructToTerraform, true)(this._consumerAcceptList.internalValue),
      filter: cdktf.listMapper(dataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2FilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cdc_id: {
        value: cdktf.stringToHclTerraform(this._cdcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_data_center_id: {
        value: cdktf.stringToHclTerraform(this._clusterDataCenterId),
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
      operation_status: {
        value: cdktf.stringToHclTerraform(this._operationStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumer_accept_list: {
        value: cdktf.listMapperHcl(dataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2ConsumerAcceptListStructToHclTerraform, true)(this._consumerAcceptList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2ConsumerAcceptListStructList",
      },
      filter: {
        value: cdktf.listMapperHcl(dataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2FilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInstaclustrClusterDataCenterGcpServiceAttachmentsAcceptListV2FilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
