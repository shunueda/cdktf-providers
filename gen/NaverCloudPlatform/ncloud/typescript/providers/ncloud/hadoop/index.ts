// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HadoopConfig extends cdktf.TerraformMetaArguments {
  /**
  * this attribute can used over 1.5 version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop#add_on_code_list Hadoop#add_on_code_list}
  */
  readonly addOnCodeList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop#admin_user_name Hadoop#admin_user_name}
  */
  readonly adminUserName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop#admin_user_password Hadoop#admin_user_password}
  */
  readonly adminUserPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop#bootstrap_script Hadoop#bootstrap_script}
  */
  readonly bootstrapScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop#bucket_name Hadoop#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop#cluster_name Hadoop#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop#cluster_type_code Hadoop#cluster_type_code}
  */
  readonly clusterTypeCode: string;
  /**
  * default: minimum spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop#edge_node_product_code Hadoop#edge_node_product_code}
  */
  readonly edgeNodeProductCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop#edge_node_subnet_no Hadoop#edge_node_subnet_no}
  */
  readonly edgeNodeSubnetNo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop#engine_version_code Hadoop#engine_version_code}
  */
  readonly engineVersionCode?: string;
  /**
  * default: latest version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop#image_product_code Hadoop#image_product_code}
  */
  readonly imageProductCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop#kdc_password Hadoop#kdc_password}
  */
  readonly kdcPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop#kdc_realm Hadoop#kdc_realm}
  */
  readonly kdcRealm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop#login_key_name Hadoop#login_key_name}
  */
  readonly loginKeyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop#master_node_data_storage_size Hadoop#master_node_data_storage_size}
  */
  readonly masterNodeDataStorageSize: number;
  /**
  * default: SSD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop#master_node_data_storage_type Hadoop#master_node_data_storage_type}
  */
  readonly masterNodeDataStorageType: string;
  /**
  * default: minimum spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop#master_node_product_code Hadoop#master_node_product_code}
  */
  readonly masterNodeProductCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop#master_node_subnet_no Hadoop#master_node_subnet_no}
  */
  readonly masterNodeSubnetNo: string;
  /**
  * default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop#use_bootstrap_script Hadoop#use_bootstrap_script}
  */
  readonly useBootstrapScript?: boolean | cdktf.IResolvable;
  /**
  * this attribute can used over 2.0 version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop#use_data_catalog Hadoop#use_data_catalog}
  */
  readonly useDataCatalog?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop#use_kdc Hadoop#use_kdc}
  */
  readonly useKdc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop#vpc_no Hadoop#vpc_no}
  */
  readonly vpcNo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop#worker_node_count Hadoop#worker_node_count}
  */
  readonly workerNodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop#worker_node_data_storage_size Hadoop#worker_node_data_storage_size}
  */
  readonly workerNodeDataStorageSize: number;
  /**
  * default: SSD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop#worker_node_data_storage_type Hadoop#worker_node_data_storage_type}
  */
  readonly workerNodeDataStorageType: string;
  /**
  * default: minimum spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop#worker_node_product_code Hadoop#worker_node_product_code}
  */
  readonly workerNodeProductCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop#worker_node_subnet_no Hadoop#worker_node_subnet_no}
  */
  readonly workerNodeSubnetNo: string;
}
export interface HadoopHadoopServerListStruct {
}

export function hadoopHadoopServerListStructToTerraform(struct?: HadoopHadoopServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function hadoopHadoopServerListStructToHclTerraform(struct?: HadoopHadoopServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class HadoopHadoopServerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HadoopHadoopServerListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HadoopHadoopServerListStruct | undefined) {
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

export class HadoopHadoopServerListStructList extends cdktf.ComplexList {

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
  public get(index: number): HadoopHadoopServerListStructOutputReference {
    return new HadoopHadoopServerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop ncloud_hadoop}
*/
export class Hadoop extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_hadoop";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Hadoop resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Hadoop to import
  * @param importFromId The id of the existing Hadoop that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Hadoop to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_hadoop", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/hadoop ncloud_hadoop} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HadoopConfig
  */
  public constructor(scope: Construct, id: string, config: HadoopConfig) {
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
    this._addOnCodeList = config.addOnCodeList;
    this._adminUserName = config.adminUserName;
    this._adminUserPassword = config.adminUserPassword;
    this._bootstrapScript = config.bootstrapScript;
    this._bucketName = config.bucketName;
    this._clusterName = config.clusterName;
    this._clusterTypeCode = config.clusterTypeCode;
    this._edgeNodeProductCode = config.edgeNodeProductCode;
    this._edgeNodeSubnetNo = config.edgeNodeSubnetNo;
    this._engineVersionCode = config.engineVersionCode;
    this._imageProductCode = config.imageProductCode;
    this._kdcPassword = config.kdcPassword;
    this._kdcRealm = config.kdcRealm;
    this._loginKeyName = config.loginKeyName;
    this._masterNodeDataStorageSize = config.masterNodeDataStorageSize;
    this._masterNodeDataStorageType = config.masterNodeDataStorageType;
    this._masterNodeProductCode = config.masterNodeProductCode;
    this._masterNodeSubnetNo = config.masterNodeSubnetNo;
    this._useBootstrapScript = config.useBootstrapScript;
    this._useDataCatalog = config.useDataCatalog;
    this._useKdc = config.useKdc;
    this._vpcNo = config.vpcNo;
    this._workerNodeCount = config.workerNodeCount;
    this._workerNodeDataStorageSize = config.workerNodeDataStorageSize;
    this._workerNodeDataStorageType = config.workerNodeDataStorageType;
    this._workerNodeProductCode = config.workerNodeProductCode;
    this._workerNodeSubnetNo = config.workerNodeSubnetNo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_control_group_no_list - computed: true, optional: false, required: false
  public get accessControlGroupNoList() {
    return this.getListAttribute('access_control_group_no_list');
  }

  // add_on_code_list - computed: false, optional: true, required: false
  private _addOnCodeList?: string[]; 
  public get addOnCodeList() {
    return this.getListAttribute('add_on_code_list');
  }
  public set addOnCodeList(value: string[]) {
    this._addOnCodeList = value;
  }
  public resetAddOnCodeList() {
    this._addOnCodeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addOnCodeListInput() {
    return this._addOnCodeList;
  }

  // admin_user_name - computed: false, optional: false, required: true
  private _adminUserName?: string; 
  public get adminUserName() {
    return this.getStringAttribute('admin_user_name');
  }
  public set adminUserName(value: string) {
    this._adminUserName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUserNameInput() {
    return this._adminUserName;
  }

  // admin_user_password - computed: false, optional: false, required: true
  private _adminUserPassword?: string; 
  public get adminUserPassword() {
    return this.getStringAttribute('admin_user_password');
  }
  public set adminUserPassword(value: string) {
    this._adminUserPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUserPasswordInput() {
    return this._adminUserPassword;
  }

  // ambari_server_host - computed: true, optional: false, required: false
  public get ambariServerHost() {
    return this.getStringAttribute('ambari_server_host');
  }

  // bootstrap_script - computed: false, optional: true, required: false
  private _bootstrapScript?: string; 
  public get bootstrapScript() {
    return this.getStringAttribute('bootstrap_script');
  }
  public set bootstrapScript(value: string) {
    this._bootstrapScript = value;
  }
  public resetBootstrapScript() {
    this._bootstrapScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapScriptInput() {
    return this._bootstrapScript;
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // cluster_direct_access_account - computed: true, optional: false, required: false
  public get clusterDirectAccessAccount() {
    return this.getStringAttribute('cluster_direct_access_account');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cluster_type_code - computed: false, optional: false, required: true
  private _clusterTypeCode?: string; 
  public get clusterTypeCode() {
    return this.getStringAttribute('cluster_type_code');
  }
  public set clusterTypeCode(value: string) {
    this._clusterTypeCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeCodeInput() {
    return this._clusterTypeCode;
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // edge_node_product_code - computed: true, optional: true, required: false
  private _edgeNodeProductCode?: string; 
  public get edgeNodeProductCode() {
    return this.getStringAttribute('edge_node_product_code');
  }
  public set edgeNodeProductCode(value: string) {
    this._edgeNodeProductCode = value;
  }
  public resetEdgeNodeProductCode() {
    this._edgeNodeProductCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeNodeProductCodeInput() {
    return this._edgeNodeProductCode;
  }

  // edge_node_subnet_no - computed: false, optional: false, required: true
  private _edgeNodeSubnetNo?: string; 
  public get edgeNodeSubnetNo() {
    return this.getStringAttribute('edge_node_subnet_no');
  }
  public set edgeNodeSubnetNo(value: string) {
    this._edgeNodeSubnetNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeNodeSubnetNoInput() {
    return this._edgeNodeSubnetNo;
  }

  // engine_version_code - computed: true, optional: true, required: false
  private _engineVersionCode?: string; 
  public get engineVersionCode() {
    return this.getStringAttribute('engine_version_code');
  }
  public set engineVersionCode(value: string) {
    this._engineVersionCode = value;
  }
  public resetEngineVersionCode() {
    this._engineVersionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionCodeInput() {
    return this._engineVersionCode;
  }

  // hadoop_server_list - computed: true, optional: false, required: false
  private _hadoopServerList = new HadoopHadoopServerListStructList(this, "hadoop_server_list", false);
  public get hadoopServerList() {
    return this._hadoopServerList;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_product_code - computed: true, optional: true, required: false
  private _imageProductCode?: string; 
  public get imageProductCode() {
    return this.getStringAttribute('image_product_code');
  }
  public set imageProductCode(value: string) {
    this._imageProductCode = value;
  }
  public resetImageProductCode() {
    this._imageProductCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageProductCodeInput() {
    return this._imageProductCode;
  }

  // is_ha - computed: true, optional: false, required: false
  public get isHa() {
    return this.getBooleanAttribute('is_ha');
  }

  // kdc_password - computed: false, optional: true, required: false
  private _kdcPassword?: string; 
  public get kdcPassword() {
    return this.getStringAttribute('kdc_password');
  }
  public set kdcPassword(value: string) {
    this._kdcPassword = value;
  }
  public resetKdcPassword() {
    this._kdcPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcPasswordInput() {
    return this._kdcPassword;
  }

  // kdc_realm - computed: false, optional: true, required: false
  private _kdcRealm?: string; 
  public get kdcRealm() {
    return this.getStringAttribute('kdc_realm');
  }
  public set kdcRealm(value: string) {
    this._kdcRealm = value;
  }
  public resetKdcRealm() {
    this._kdcRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcRealmInput() {
    return this._kdcRealm;
  }

  // login_key_name - computed: false, optional: false, required: true
  private _loginKeyName?: string; 
  public get loginKeyName() {
    return this.getStringAttribute('login_key_name');
  }
  public set loginKeyName(value: string) {
    this._loginKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginKeyNameInput() {
    return this._loginKeyName;
  }

  // master_node_data_storage_size - computed: false, optional: false, required: true
  private _masterNodeDataStorageSize?: number; 
  public get masterNodeDataStorageSize() {
    return this.getNumberAttribute('master_node_data_storage_size');
  }
  public set masterNodeDataStorageSize(value: number) {
    this._masterNodeDataStorageSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeDataStorageSizeInput() {
    return this._masterNodeDataStorageSize;
  }

  // master_node_data_storage_type - computed: false, optional: false, required: true
  private _masterNodeDataStorageType?: string; 
  public get masterNodeDataStorageType() {
    return this.getStringAttribute('master_node_data_storage_type');
  }
  public set masterNodeDataStorageType(value: string) {
    this._masterNodeDataStorageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeDataStorageTypeInput() {
    return this._masterNodeDataStorageType;
  }

  // master_node_product_code - computed: true, optional: true, required: false
  private _masterNodeProductCode?: string; 
  public get masterNodeProductCode() {
    return this.getStringAttribute('master_node_product_code');
  }
  public set masterNodeProductCode(value: string) {
    this._masterNodeProductCode = value;
  }
  public resetMasterNodeProductCode() {
    this._masterNodeProductCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeProductCodeInput() {
    return this._masterNodeProductCode;
  }

  // master_node_subnet_no - computed: false, optional: false, required: true
  private _masterNodeSubnetNo?: string; 
  public get masterNodeSubnetNo() {
    return this.getStringAttribute('master_node_subnet_no');
  }
  public set masterNodeSubnetNo(value: string) {
    this._masterNodeSubnetNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeSubnetNoInput() {
    return this._masterNodeSubnetNo;
  }

  // region_code - computed: true, optional: false, required: false
  public get regionCode() {
    return this.getStringAttribute('region_code');
  }

  // use_bootstrap_script - computed: false, optional: true, required: false
  private _useBootstrapScript?: boolean | cdktf.IResolvable; 
  public get useBootstrapScript() {
    return this.getBooleanAttribute('use_bootstrap_script');
  }
  public set useBootstrapScript(value: boolean | cdktf.IResolvable) {
    this._useBootstrapScript = value;
  }
  public resetUseBootstrapScript() {
    this._useBootstrapScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBootstrapScriptInput() {
    return this._useBootstrapScript;
  }

  // use_data_catalog - computed: false, optional: true, required: false
  private _useDataCatalog?: boolean | cdktf.IResolvable; 
  public get useDataCatalog() {
    return this.getBooleanAttribute('use_data_catalog');
  }
  public set useDataCatalog(value: boolean | cdktf.IResolvable) {
    this._useDataCatalog = value;
  }
  public resetUseDataCatalog() {
    this._useDataCatalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDataCatalogInput() {
    return this._useDataCatalog;
  }

  // use_kdc - computed: true, optional: true, required: false
  private _useKdc?: boolean | cdktf.IResolvable; 
  public get useKdc() {
    return this.getBooleanAttribute('use_kdc');
  }
  public set useKdc(value: boolean | cdktf.IResolvable) {
    this._useKdc = value;
  }
  public resetUseKdc() {
    this._useKdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useKdcInput() {
    return this._useKdc;
  }

  // vpc_no - computed: false, optional: false, required: true
  private _vpcNo?: string; 
  public get vpcNo() {
    return this.getStringAttribute('vpc_no');
  }
  public set vpcNo(value: string) {
    this._vpcNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNoInput() {
    return this._vpcNo;
  }

  // worker_node_count - computed: true, optional: true, required: false
  private _workerNodeCount?: number; 
  public get workerNodeCount() {
    return this.getNumberAttribute('worker_node_count');
  }
  public set workerNodeCount(value: number) {
    this._workerNodeCount = value;
  }
  public resetWorkerNodeCount() {
    this._workerNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNodeCountInput() {
    return this._workerNodeCount;
  }

  // worker_node_data_storage_size - computed: false, optional: false, required: true
  private _workerNodeDataStorageSize?: number; 
  public get workerNodeDataStorageSize() {
    return this.getNumberAttribute('worker_node_data_storage_size');
  }
  public set workerNodeDataStorageSize(value: number) {
    this._workerNodeDataStorageSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNodeDataStorageSizeInput() {
    return this._workerNodeDataStorageSize;
  }

  // worker_node_data_storage_type - computed: false, optional: false, required: true
  private _workerNodeDataStorageType?: string; 
  public get workerNodeDataStorageType() {
    return this.getStringAttribute('worker_node_data_storage_type');
  }
  public set workerNodeDataStorageType(value: string) {
    this._workerNodeDataStorageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNodeDataStorageTypeInput() {
    return this._workerNodeDataStorageType;
  }

  // worker_node_product_code - computed: true, optional: true, required: false
  private _workerNodeProductCode?: string; 
  public get workerNodeProductCode() {
    return this.getStringAttribute('worker_node_product_code');
  }
  public set workerNodeProductCode(value: string) {
    this._workerNodeProductCode = value;
  }
  public resetWorkerNodeProductCode() {
    this._workerNodeProductCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNodeProductCodeInput() {
    return this._workerNodeProductCode;
  }

  // worker_node_subnet_no - computed: false, optional: false, required: true
  private _workerNodeSubnetNo?: string; 
  public get workerNodeSubnetNo() {
    return this.getStringAttribute('worker_node_subnet_no');
  }
  public set workerNodeSubnetNo(value: string) {
    this._workerNodeSubnetNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNodeSubnetNoInput() {
    return this._workerNodeSubnetNo;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_on_code_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addOnCodeList),
      admin_user_name: cdktf.stringToTerraform(this._adminUserName),
      admin_user_password: cdktf.stringToTerraform(this._adminUserPassword),
      bootstrap_script: cdktf.stringToTerraform(this._bootstrapScript),
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      cluster_type_code: cdktf.stringToTerraform(this._clusterTypeCode),
      edge_node_product_code: cdktf.stringToTerraform(this._edgeNodeProductCode),
      edge_node_subnet_no: cdktf.stringToTerraform(this._edgeNodeSubnetNo),
      engine_version_code: cdktf.stringToTerraform(this._engineVersionCode),
      image_product_code: cdktf.stringToTerraform(this._imageProductCode),
      kdc_password: cdktf.stringToTerraform(this._kdcPassword),
      kdc_realm: cdktf.stringToTerraform(this._kdcRealm),
      login_key_name: cdktf.stringToTerraform(this._loginKeyName),
      master_node_data_storage_size: cdktf.numberToTerraform(this._masterNodeDataStorageSize),
      master_node_data_storage_type: cdktf.stringToTerraform(this._masterNodeDataStorageType),
      master_node_product_code: cdktf.stringToTerraform(this._masterNodeProductCode),
      master_node_subnet_no: cdktf.stringToTerraform(this._masterNodeSubnetNo),
      use_bootstrap_script: cdktf.booleanToTerraform(this._useBootstrapScript),
      use_data_catalog: cdktf.booleanToTerraform(this._useDataCatalog),
      use_kdc: cdktf.booleanToTerraform(this._useKdc),
      vpc_no: cdktf.stringToTerraform(this._vpcNo),
      worker_node_count: cdktf.numberToTerraform(this._workerNodeCount),
      worker_node_data_storage_size: cdktf.numberToTerraform(this._workerNodeDataStorageSize),
      worker_node_data_storage_type: cdktf.stringToTerraform(this._workerNodeDataStorageType),
      worker_node_product_code: cdktf.stringToTerraform(this._workerNodeProductCode),
      worker_node_subnet_no: cdktf.stringToTerraform(this._workerNodeSubnetNo),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_on_code_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addOnCodeList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      admin_user_name: {
        value: cdktf.stringToHclTerraform(this._adminUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_user_password: {
        value: cdktf.stringToHclTerraform(this._adminUserPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bootstrap_script: {
        value: cdktf.stringToHclTerraform(this._bootstrapScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_type_code: {
        value: cdktf.stringToHclTerraform(this._clusterTypeCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_node_product_code: {
        value: cdktf.stringToHclTerraform(this._edgeNodeProductCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_node_subnet_no: {
        value: cdktf.stringToHclTerraform(this._edgeNodeSubnetNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_version_code: {
        value: cdktf.stringToHclTerraform(this._engineVersionCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_product_code: {
        value: cdktf.stringToHclTerraform(this._imageProductCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kdc_password: {
        value: cdktf.stringToHclTerraform(this._kdcPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kdc_realm: {
        value: cdktf.stringToHclTerraform(this._kdcRealm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_key_name: {
        value: cdktf.stringToHclTerraform(this._loginKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_node_data_storage_size: {
        value: cdktf.numberToHclTerraform(this._masterNodeDataStorageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_node_data_storage_type: {
        value: cdktf.stringToHclTerraform(this._masterNodeDataStorageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_node_product_code: {
        value: cdktf.stringToHclTerraform(this._masterNodeProductCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_node_subnet_no: {
        value: cdktf.stringToHclTerraform(this._masterNodeSubnetNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_bootstrap_script: {
        value: cdktf.booleanToHclTerraform(this._useBootstrapScript),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_data_catalog: {
        value: cdktf.booleanToHclTerraform(this._useDataCatalog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_kdc: {
        value: cdktf.booleanToHclTerraform(this._useKdc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vpc_no: {
        value: cdktf.stringToHclTerraform(this._vpcNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_node_count: {
        value: cdktf.numberToHclTerraform(this._workerNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      worker_node_data_storage_size: {
        value: cdktf.numberToHclTerraform(this._workerNodeDataStorageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      worker_node_data_storage_type: {
        value: cdktf.stringToHclTerraform(this._workerNodeDataStorageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_node_product_code: {
        value: cdktf.stringToHclTerraform(this._workerNodeProductCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_node_subnet_no: {
        value: cdktf.stringToHclTerraform(this._workerNodeSubnetNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
