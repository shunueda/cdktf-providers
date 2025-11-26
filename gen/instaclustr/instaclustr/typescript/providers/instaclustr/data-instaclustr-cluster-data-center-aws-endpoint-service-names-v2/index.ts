// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/cluster_data_center_aws_endpoint_service_names_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/cluster_data_center_aws_endpoint_service_names_v2#cluster_data_center_id DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2#cluster_data_center_id}
  */
  readonly clusterDataCenterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/cluster_data_center_aws_endpoint_service_names_v2#id DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * aws_endpoint_service_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/cluster_data_center_aws_endpoint_service_names_v2#aws_endpoint_service_names DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2#aws_endpoint_service_names}
  */
  readonly awsEndpointServiceNames?: DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2AwsEndpointServiceNames[] | cdktf.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/cluster_data_center_aws_endpoint_service_names_v2#filter DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2#filter}
  */
  readonly filter?: DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2Filter[] | cdktf.IResolvable;
}
export interface DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2AwsEndpointServiceNames {
  /**
  * The ID of the cluster data center.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/cluster_data_center_aws_endpoint_service_names_v2#cluster_data_center_id DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2#cluster_data_center_id}
  */
  readonly clusterDataCenterId?: string;
  /**
  * The Instaclustr ID of the AWS endpoint service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/cluster_data_center_aws_endpoint_service_names_v2#end_point_service_id DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2#end_point_service_id}
  */
  readonly endPointServiceId?: string;
  /**
  * The Endpoint Service Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/cluster_data_center_aws_endpoint_service_names_v2#end_point_service_name DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2#end_point_service_name}
  */
  readonly endPointServiceName?: string;
}

export function dataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2AwsEndpointServiceNamesToTerraform(struct?: DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2AwsEndpointServiceNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_data_center_id: cdktf.stringToTerraform(struct!.clusterDataCenterId),
    end_point_service_id: cdktf.stringToTerraform(struct!.endPointServiceId),
    end_point_service_name: cdktf.stringToTerraform(struct!.endPointServiceName),
  }
}


export function dataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2AwsEndpointServiceNamesToHclTerraform(struct?: DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2AwsEndpointServiceNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_data_center_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterDataCenterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_point_service_id: {
      value: cdktf.stringToHclTerraform(struct!.endPointServiceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_point_service_name: {
      value: cdktf.stringToHclTerraform(struct!.endPointServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2AwsEndpointServiceNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2AwsEndpointServiceNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterDataCenterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDataCenterId = this._clusterDataCenterId;
    }
    if (this._endPointServiceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPointServiceId = this._endPointServiceId;
    }
    if (this._endPointServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPointServiceName = this._endPointServiceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2AwsEndpointServiceNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterDataCenterId = undefined;
      this._endPointServiceId = undefined;
      this._endPointServiceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterDataCenterId = value.clusterDataCenterId;
      this._endPointServiceId = value.endPointServiceId;
      this._endPointServiceName = value.endPointServiceName;
    }
  }

  // cluster_data_center_id - computed: true, optional: true, required: false
  private _clusterDataCenterId?: string; 
  public get clusterDataCenterId() {
    return this.getStringAttribute('cluster_data_center_id');
  }
  public set clusterDataCenterId(value: string) {
    this._clusterDataCenterId = value;
  }
  public resetClusterDataCenterId() {
    this._clusterDataCenterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDataCenterIdInput() {
    return this._clusterDataCenterId;
  }

  // end_point_service_id - computed: true, optional: true, required: false
  private _endPointServiceId?: string; 
  public get endPointServiceId() {
    return this.getStringAttribute('end_point_service_id');
  }
  public set endPointServiceId(value: string) {
    this._endPointServiceId = value;
  }
  public resetEndPointServiceId() {
    this._endPointServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointServiceIdInput() {
    return this._endPointServiceId;
  }

  // end_point_service_name - computed: true, optional: true, required: false
  private _endPointServiceName?: string; 
  public get endPointServiceName() {
    return this.getStringAttribute('end_point_service_name');
  }
  public set endPointServiceName(value: string) {
    this._endPointServiceName = value;
  }
  public resetEndPointServiceName() {
    this._endPointServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointServiceNameInput() {
    return this._endPointServiceName;
  }
}

export class DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2AwsEndpointServiceNamesList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2AwsEndpointServiceNames[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2AwsEndpointServiceNamesOutputReference {
    return new DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2AwsEndpointServiceNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2Filter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/cluster_data_center_aws_endpoint_service_names_v2#name DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/cluster_data_center_aws_endpoint_service_names_v2#values DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2#values}
  */
  readonly values: string[];
}

export function dataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2FilterToTerraform(struct?: DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2Filter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2FilterToHclTerraform(struct?: DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2Filter | cdktf.IResolvable): any {
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

export class DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2FilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2Filter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2Filter | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2FilterList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2Filter[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2FilterOutputReference {
    return new DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2FilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/cluster_data_center_aws_endpoint_service_names_v2 instaclustr_cluster_data_center_aws_endpoint_service_names_v2}
*/
export class DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_cluster_data_center_aws_endpoint_service_names_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2 to import
  * @param importFromId The id of the existing DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/cluster_data_center_aws_endpoint_service_names_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_cluster_data_center_aws_endpoint_service_names_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/cluster_data_center_aws_endpoint_service_names_v2 instaclustr_cluster_data_center_aws_endpoint_service_names_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2Config
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2Config) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_cluster_data_center_aws_endpoint_service_names_v2',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.30',
        providerVersionConstraint: '2.1.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterDataCenterId = config.clusterDataCenterId;
    this._id = config.id;
    this._awsEndpointServiceNames.internalValue = config.awsEndpointServiceNames;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // aws_endpoint_service_names - computed: false, optional: true, required: false
  private _awsEndpointServiceNames = new DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2AwsEndpointServiceNamesList(this, "aws_endpoint_service_names", false);
  public get awsEndpointServiceNames() {
    return this._awsEndpointServiceNames;
  }
  public putAwsEndpointServiceNames(value: DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2AwsEndpointServiceNames[] | cdktf.IResolvable) {
    this._awsEndpointServiceNames.internalValue = value;
  }
  public resetAwsEndpointServiceNames() {
    this._awsEndpointServiceNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEndpointServiceNamesInput() {
    return this._awsEndpointServiceNames.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2FilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2Filter[] | cdktf.IResolvable) {
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
      cluster_data_center_id: cdktf.stringToTerraform(this._clusterDataCenterId),
      id: cdktf.stringToTerraform(this._id),
      aws_endpoint_service_names: cdktf.listMapper(dataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2AwsEndpointServiceNamesToTerraform, true)(this._awsEndpointServiceNames.internalValue),
      filter: cdktf.listMapper(dataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2FilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      aws_endpoint_service_names: {
        value: cdktf.listMapperHcl(dataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2AwsEndpointServiceNamesToHclTerraform, true)(this._awsEndpointServiceNames.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2AwsEndpointServiceNamesList",
      },
      filter: {
        value: cdktf.listMapperHcl(dataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2FilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInstaclustrClusterDataCenterAwsEndpointServiceNamesV2FilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
