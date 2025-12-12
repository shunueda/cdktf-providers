// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_api_gateway_v2_k8s_clusters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApsarastackApiGatewayV2K8SClustersConfig extends cdktf.TerraformMetaArguments {
  /**
  * The container service cluster ID as a filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_api_gateway_v2_k8s_clusters#cs_cluster_id DataApsarastackApiGatewayV2K8SClusters#cs_cluster_id}
  */
  readonly csClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_api_gateway_v2_k8s_clusters#id DataApsarastackApiGatewayV2K8SClusters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of k8s cluster IDs to filter results by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_api_gateway_v2_k8s_clusters#ids DataApsarastackApiGatewayV2K8SClusters#ids}
  */
  readonly ids?: string[];
  /**
  * The name of the k8s cluster used as a filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_api_gateway_v2_k8s_clusters#k8s_cluster_name DataApsarastackApiGatewayV2K8SClusters#k8s_cluster_name}
  */
  readonly k8SClusterName?: string;
  /**
  * A regex string to filter results by k8s cluster name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_api_gateway_v2_k8s_clusters#name_regex DataApsarastackApiGatewayV2K8SClusters#name_regex}
  */
  readonly nameRegex?: string;
}
export interface DataApsarastackApiGatewayV2K8SClustersClusters {
}

export function dataApsarastackApiGatewayV2K8SClustersClustersToTerraform(struct?: DataApsarastackApiGatewayV2K8SClustersClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApsarastackApiGatewayV2K8SClustersClustersToHclTerraform(struct?: DataApsarastackApiGatewayV2K8SClustersClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApsarastackApiGatewayV2K8SClustersClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApsarastackApiGatewayV2K8SClustersClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApsarastackApiGatewayV2K8SClustersClusters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_type - computed: true, optional: false, required: false
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }

  // cs_cluster_id - computed: true, optional: false, required: false
  public get csClusterId() {
    return this.getStringAttribute('cs_cluster_id');
  }

  // cs_cluster_name - computed: true, optional: false, required: false
  public get csClusterName() {
    return this.getStringAttribute('cs_cluster_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // k8s_cluster_name - computed: true, optional: false, required: false
  public get k8SClusterName() {
    return this.getStringAttribute('k8s_cluster_name');
  }

  // slb_type - computed: true, optional: false, required: false
  public get slbType() {
    return this.getStringAttribute('slb_type');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataApsarastackApiGatewayV2K8SClustersClustersList extends cdktf.ComplexList {

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
  public get(index: number): DataApsarastackApiGatewayV2K8SClustersClustersOutputReference {
    return new DataApsarastackApiGatewayV2K8SClustersClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_api_gateway_v2_k8s_clusters apsarastack_api_gateway_v2_k8s_clusters}
*/
export class DataApsarastackApiGatewayV2K8SClusters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_api_gateway_v2_k8s_clusters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApsarastackApiGatewayV2K8SClusters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApsarastackApiGatewayV2K8SClusters to import
  * @param importFromId The id of the existing DataApsarastackApiGatewayV2K8SClusters that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_api_gateway_v2_k8s_clusters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApsarastackApiGatewayV2K8SClusters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_api_gateway_v2_k8s_clusters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_api_gateway_v2_k8s_clusters apsarastack_api_gateway_v2_k8s_clusters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApsarastackApiGatewayV2K8SClustersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataApsarastackApiGatewayV2K8SClustersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_api_gateway_v2_k8s_clusters',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._csClusterId = config.csClusterId;
    this._id = config.id;
    this._ids = config.ids;
    this._k8SClusterName = config.k8SClusterName;
    this._nameRegex = config.nameRegex;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clusters - computed: true, optional: false, required: false
  private _clusters = new DataApsarastackApiGatewayV2K8SClustersClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
  }

  // cs_cluster_id - computed: false, optional: true, required: false
  private _csClusterId?: string; 
  public get csClusterId() {
    return this.getStringAttribute('cs_cluster_id');
  }
  public set csClusterId(value: string) {
    this._csClusterId = value;
  }
  public resetCsClusterId() {
    this._csClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csClusterIdInput() {
    return this._csClusterId;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // k8s_cluster_name - computed: false, optional: true, required: false
  private _k8SClusterName?: string; 
  public get k8SClusterName() {
    return this.getStringAttribute('k8s_cluster_name');
  }
  public set k8SClusterName(value: string) {
    this._k8SClusterName = value;
  }
  public resetK8SClusterName() {
    this._k8SClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SClusterNameInput() {
    return this._k8SClusterName;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cs_cluster_id: cdktf.stringToTerraform(this._csClusterId),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      k8s_cluster_name: cdktf.stringToTerraform(this._k8SClusterName),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cs_cluster_id: {
        value: cdktf.stringToHclTerraform(this._csClusterId),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      k8s_cluster_name: {
        value: cdktf.stringToHclTerraform(this._k8SClusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
