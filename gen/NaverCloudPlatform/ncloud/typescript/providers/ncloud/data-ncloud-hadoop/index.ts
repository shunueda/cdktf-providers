// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/hadoop
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNcloudHadoopConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/hadoop#cluster_name DataNcloudHadoop#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/hadoop#id DataNcloudHadoop#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataNcloudHadoopHadoopServerListStruct {
}

export function dataNcloudHadoopHadoopServerListStructToTerraform(struct?: DataNcloudHadoopHadoopServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNcloudHadoopHadoopServerListStructToHclTerraform(struct?: DataNcloudHadoopHadoopServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNcloudHadoopHadoopServerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNcloudHadoopHadoopServerListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNcloudHadoopHadoopServerListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_count - computed: true, optional: false, required: false
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }

  // create_date - computed: true, optional: false, required: false
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // data_storage_size - computed: true, optional: false, required: false
  public get dataStorageSize() {
    return this.getNumberAttribute('data_storage_size');
  }

  // data_storage_type - computed: true, optional: false, required: false
  public get dataStorageType() {
    return this.getStringAttribute('data_storage_type');
  }

  // is_public_subnet - computed: true, optional: false, required: false
  public get isPublicSubnet() {
    return this.getBooleanAttribute('is_public_subnet');
  }

  // memory_size - computed: true, optional: false, required: false
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }

  // product_code - computed: true, optional: false, required: false
  public get productCode() {
    return this.getStringAttribute('product_code');
  }

  // server_instance_no - computed: true, optional: false, required: false
  public get serverInstanceNo() {
    return this.getStringAttribute('server_instance_no');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // server_role - computed: true, optional: false, required: false
  public get serverRole() {
    return this.getStringAttribute('server_role');
  }

  // subnet_no - computed: true, optional: false, required: false
  public get subnetNo() {
    return this.getStringAttribute('subnet_no');
  }

  // uptime - computed: true, optional: false, required: false
  public get uptime() {
    return this.getStringAttribute('uptime');
  }

  // zone_code - computed: true, optional: false, required: false
  public get zoneCode() {
    return this.getStringAttribute('zone_code');
  }
}

export class DataNcloudHadoopHadoopServerListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNcloudHadoopHadoopServerListStructOutputReference {
    return new DataNcloudHadoopHadoopServerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/hadoop ncloud_hadoop}
*/
export class DataNcloudHadoop extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_hadoop";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNcloudHadoop resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNcloudHadoop to import
  * @param importFromId The id of the existing DataNcloudHadoop that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/hadoop#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNcloudHadoop to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_hadoop", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/hadoop ncloud_hadoop} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNcloudHadoopConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNcloudHadoopConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ncloud_hadoop',
      terraformGeneratorMetadata: {
        providerName: 'ncloud',
        providerVersion: '4.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterName = config.clusterName;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_control_group_no_list - computed: true, optional: false, required: false
  public get accessControlGroupNoList() {
    return this.getListAttribute('access_control_group_no_list');
  }

  // add_on_code_list - computed: true, optional: false, required: false
  public get addOnCodeList() {
    return this.getListAttribute('add_on_code_list');
  }

  // ambari_server_host - computed: true, optional: false, required: false
  public get ambariServerHost() {
    return this.getStringAttribute('ambari_server_host');
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // cluster_direct_access_account - computed: true, optional: false, required: false
  public get clusterDirectAccessAccount() {
    return this.getStringAttribute('cluster_direct_access_account');
  }

  // cluster_name - computed: true, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cluster_type_code - computed: true, optional: false, required: false
  public get clusterTypeCode() {
    return this.getStringAttribute('cluster_type_code');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // edge_node_product_code - computed: true, optional: false, required: false
  public get edgeNodeProductCode() {
    return this.getStringAttribute('edge_node_product_code');
  }

  // edge_node_subnet_no - computed: true, optional: false, required: false
  public get edgeNodeSubnetNo() {
    return this.getStringAttribute('edge_node_subnet_no');
  }

  // hadoop_server_list - computed: true, optional: false, required: false
  private _hadoopServerList = new DataNcloudHadoopHadoopServerListStructList(this, "hadoop_server_list", false);
  public get hadoopServerList() {
    return this._hadoopServerList;
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

  // image_product_code - computed: true, optional: false, required: false
  public get imageProductCode() {
    return this.getStringAttribute('image_product_code');
  }

  // is_ha - computed: true, optional: false, required: false
  public get isHa() {
    return this.getBooleanAttribute('is_ha');
  }

  // kdc_realm - computed: true, optional: false, required: false
  public get kdcRealm() {
    return this.getStringAttribute('kdc_realm');
  }

  // login_key_name - computed: true, optional: false, required: false
  public get loginKeyName() {
    return this.getStringAttribute('login_key_name');
  }

  // master_node_data_storage_size - computed: true, optional: false, required: false
  public get masterNodeDataStorageSize() {
    return this.getNumberAttribute('master_node_data_storage_size');
  }

  // master_node_data_storage_type - computed: true, optional: false, required: false
  public get masterNodeDataStorageType() {
    return this.getStringAttribute('master_node_data_storage_type');
  }

  // master_node_product_code - computed: true, optional: false, required: false
  public get masterNodeProductCode() {
    return this.getStringAttribute('master_node_product_code');
  }

  // master_node_subnet_no - computed: true, optional: false, required: false
  public get masterNodeSubnetNo() {
    return this.getStringAttribute('master_node_subnet_no');
  }

  // region_code - computed: true, optional: false, required: false
  public get regionCode() {
    return this.getStringAttribute('region_code');
  }

  // use_kdc - computed: true, optional: false, required: false
  public get useKdc() {
    return this.getBooleanAttribute('use_kdc');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // vpc_no - computed: true, optional: false, required: false
  public get vpcNo() {
    return this.getStringAttribute('vpc_no');
  }

  // worker_node_count - computed: true, optional: false, required: false
  public get workerNodeCount() {
    return this.getNumberAttribute('worker_node_count');
  }

  // worker_node_data_storage_size - computed: true, optional: false, required: false
  public get workerNodeDataStorageSize() {
    return this.getNumberAttribute('worker_node_data_storage_size');
  }

  // worker_node_data_storage_type - computed: true, optional: false, required: false
  public get workerNodeDataStorageType() {
    return this.getStringAttribute('worker_node_data_storage_type');
  }

  // worker_node_product_code - computed: true, optional: false, required: false
  public get workerNodeProductCode() {
    return this.getStringAttribute('worker_node_product_code');
  }

  // worker_node_subnet_no - computed: true, optional: false, required: false
  public get workerNodeSubnetNo() {
    return this.getStringAttribute('worker_node_subnet_no');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
