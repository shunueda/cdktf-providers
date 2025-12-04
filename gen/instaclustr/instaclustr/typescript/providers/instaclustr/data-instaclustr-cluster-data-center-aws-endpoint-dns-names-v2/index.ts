// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_data_center_aws_endpoint_dns_names_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2Config extends cdktf.TerraformMetaArguments {
  /**
  * AWS Endpoint DNS Names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_data_center_aws_endpoint_dns_names_v2#aws_endpoint_dns_names DataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2#aws_endpoint_dns_names}
  */
  readonly awsEndpointDnsNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_data_center_aws_endpoint_dns_names_v2#cluster_data_center_id DataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2#cluster_data_center_id}
  */
  readonly clusterDataCenterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_data_center_aws_endpoint_dns_names_v2#id DataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_data_center_aws_endpoint_dns_names_v2#filter DataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2#filter}
  */
  readonly filter?: DataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2Filter[] | cdktf.IResolvable;
}
export interface DataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2Filter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_data_center_aws_endpoint_dns_names_v2#name DataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_data_center_aws_endpoint_dns_names_v2#values DataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2#values}
  */
  readonly values: string[];
}

export function dataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2FilterToTerraform(struct?: DataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2Filter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2FilterToHclTerraform(struct?: DataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2Filter | cdktf.IResolvable): any {
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

export class DataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2FilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2Filter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2Filter | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2FilterList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2Filter[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2FilterOutputReference {
    return new DataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2FilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_data_center_aws_endpoint_dns_names_v2 instaclustr_cluster_data_center_aws_endpoint_dns_names_v2}
*/
export class DataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_cluster_data_center_aws_endpoint_dns_names_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2 to import
  * @param importFromId The id of the existing DataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_data_center_aws_endpoint_dns_names_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_cluster_data_center_aws_endpoint_dns_names_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/cluster_data_center_aws_endpoint_dns_names_v2 instaclustr_cluster_data_center_aws_endpoint_dns_names_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2Config
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2Config) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_cluster_data_center_aws_endpoint_dns_names_v2',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.32',
        providerVersionConstraint: '2.1.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsEndpointDnsNames = config.awsEndpointDnsNames;
    this._clusterDataCenterId = config.clusterDataCenterId;
    this._id = config.id;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_endpoint_dns_names - computed: true, optional: true, required: false
  private _awsEndpointDnsNames?: string[]; 
  public get awsEndpointDnsNames() {
    return this.getListAttribute('aws_endpoint_dns_names');
  }
  public set awsEndpointDnsNames(value: string[]) {
    this._awsEndpointDnsNames = value;
  }
  public resetAwsEndpointDnsNames() {
    this._awsEndpointDnsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEndpointDnsNamesInput() {
    return this._awsEndpointDnsNames;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2FilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2Filter[] | cdktf.IResolvable) {
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
      aws_endpoint_dns_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsEndpointDnsNames),
      cluster_data_center_id: cdktf.stringToTerraform(this._clusterDataCenterId),
      id: cdktf.stringToTerraform(this._id),
      filter: cdktf.listMapper(dataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2FilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_endpoint_dns_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsEndpointDnsNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      filter: {
        value: cdktf.listMapperHcl(dataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2FilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInstaclustrClusterDataCenterAwsEndpointDnsNamesV2FilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
