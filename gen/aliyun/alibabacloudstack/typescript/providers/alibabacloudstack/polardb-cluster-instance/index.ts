// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardb_cluster_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolardbClusterInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardb_cluster_instance#cpu_type PolardbClusterInstance#cpu_type}
  */
  readonly cpuType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardb_cluster_instance#db_cluster_description PolardbClusterInstance#db_cluster_description}
  */
  readonly dbClusterDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardb_cluster_instance#db_node_class PolardbClusterInstance#db_node_class}
  */
  readonly dbNodeClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardb_cluster_instance#db_type PolardbClusterInstance#db_type}
  */
  readonly dbType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardb_cluster_instance#db_version PolardbClusterInstance#db_version}
  */
  readonly dbVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardb_cluster_instance#deletion_lock PolardbClusterInstance#deletion_lock}
  */
  readonly deletionLock?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardb_cluster_instance#encrypt_algorithm PolardbClusterInstance#encrypt_algorithm}
  */
  readonly encryptAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardb_cluster_instance#encryption_key PolardbClusterInstance#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardb_cluster_instance#hot_standby_cluster PolardbClusterInstance#hot_standby_cluster}
  */
  readonly hotStandbyCluster?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardb_cluster_instance#id PolardbClusterInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardb_cluster_instance#maintain_time PolardbClusterInstance#maintain_time}
  */
  readonly maintainTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardb_cluster_instance#readonly_node_num PolardbClusterInstance#readonly_node_num}
  */
  readonly readonlyNodeNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardb_cluster_instance#role_arn PolardbClusterInstance#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardb_cluster_instance#security_groups PolardbClusterInstance#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardb_cluster_instance#security_ips_groups PolardbClusterInstance#security_ips_groups}
  */
  readonly securityIpsGroups?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardb_cluster_instance#ssl_enabled PolardbClusterInstance#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardb_cluster_instance#storage_space PolardbClusterInstance#storage_space}
  */
  readonly storageSpace?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardb_cluster_instance#storage_type PolardbClusterInstance#storage_type}
  */
  readonly storageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardb_cluster_instance#sub_category PolardbClusterInstance#sub_category}
  */
  readonly subCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardb_cluster_instance#tags PolardbClusterInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardb_cluster_instance#tde_enabled PolardbClusterInstance#tde_enabled}
  */
  readonly tdeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardb_cluster_instance#vswitch_id PolardbClusterInstance#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardb_cluster_instance#zone_id PolardbClusterInstance#zone_id}
  */
  readonly zoneId: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardb_cluster_instance#parameters PolardbClusterInstance#parameters}
  */
  readonly parameters?: PolardbClusterInstanceParameters[] | cdktf.IResolvable;
}
export interface PolardbClusterInstanceDbNodes {
}

export function polardbClusterInstanceDbNodesToTerraform(struct?: PolardbClusterInstanceDbNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function polardbClusterInstanceDbNodesToHclTerraform(struct?: PolardbClusterInstanceDbNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PolardbClusterInstanceDbNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolardbClusterInstanceDbNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolardbClusterInstanceDbNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // added_cpu_cores - computed: true, optional: false, required: false
  public get addedCpuCores() {
    return this.getStringAttribute('added_cpu_cores');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // db_node_class - computed: true, optional: false, required: false
  public get dbNodeClass() {
    return this.getStringAttribute('db_node_class');
  }

  // db_node_id - computed: true, optional: false, required: false
  public get dbNodeId() {
    return this.getStringAttribute('db_node_id');
  }

  // db_node_role - computed: true, optional: false, required: false
  public get dbNodeRole() {
    return this.getStringAttribute('db_node_role');
  }

  // db_node_status - computed: true, optional: false, required: false
  public get dbNodeStatus() {
    return this.getStringAttribute('db_node_status');
  }

  // failover_priority - computed: true, optional: false, required: false
  public get failoverPriority() {
    return this.getNumberAttribute('failover_priority');
  }

  // hot_replica_mode - computed: true, optional: false, required: false
  public get hotReplicaMode() {
    return this.getStringAttribute('hot_replica_mode');
  }

  // imci_switch - computed: true, optional: false, required: false
  public get imciSwitch() {
    return this.getStringAttribute('imci_switch');
  }

  // max_connections - computed: true, optional: false, required: false
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }

  // max_iops - computed: true, optional: false, required: false
  public get maxIops() {
    return this.getNumberAttribute('max_iops');
  }

  // scc_mode - computed: true, optional: false, required: false
  public get sccMode() {
    return this.getStringAttribute('scc_mode');
  }

  // server_weight - computed: true, optional: false, required: false
  public get serverWeight() {
    return this.getStringAttribute('server_weight');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
}

export class PolardbClusterInstanceDbNodesList extends cdktf.ComplexList {

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
  public get(index: number): PolardbClusterInstanceDbNodesOutputReference {
    return new PolardbClusterInstanceDbNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolardbClusterInstanceParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardb_cluster_instance#name PolardbClusterInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardb_cluster_instance#value PolardbClusterInstance#value}
  */
  readonly value: string;
}

export function polardbClusterInstanceParametersToTerraform(struct?: PolardbClusterInstanceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function polardbClusterInstanceParametersToHclTerraform(struct?: PolardbClusterInstanceParameters | cdktf.IResolvable): any {
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

export class PolardbClusterInstanceParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolardbClusterInstanceParameters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolardbClusterInstanceParameters | cdktf.IResolvable | undefined) {
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

export class PolardbClusterInstanceParametersList extends cdktf.ComplexList {
  public internalValue? : PolardbClusterInstanceParameters[] | cdktf.IResolvable

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
  public get(index: number): PolardbClusterInstanceParametersOutputReference {
    return new PolardbClusterInstanceParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardb_cluster_instance alibabacloudstack_polardb_cluster_instance}
*/
export class PolardbClusterInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_polardb_cluster_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolardbClusterInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolardbClusterInstance to import
  * @param importFromId The id of the existing PolardbClusterInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardb_cluster_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolardbClusterInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_polardb_cluster_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/polardb_cluster_instance alibabacloudstack_polardb_cluster_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolardbClusterInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: PolardbClusterInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_polardb_cluster_instance',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cpuType = config.cpuType;
    this._dbClusterDescription = config.dbClusterDescription;
    this._dbNodeClass = config.dbNodeClass;
    this._dbType = config.dbType;
    this._dbVersion = config.dbVersion;
    this._deletionLock = config.deletionLock;
    this._encryptAlgorithm = config.encryptAlgorithm;
    this._encryptionKey = config.encryptionKey;
    this._hotStandbyCluster = config.hotStandbyCluster;
    this._id = config.id;
    this._maintainTime = config.maintainTime;
    this._readonlyNodeNum = config.readonlyNodeNum;
    this._roleArn = config.roleArn;
    this._securityGroups = config.securityGroups;
    this._securityIpsGroups = config.securityIpsGroups;
    this._sslEnabled = config.sslEnabled;
    this._storageSpace = config.storageSpace;
    this._storageType = config.storageType;
    this._subCategory = config.subCategory;
    this._tags = config.tags;
    this._tdeEnabled = config.tdeEnabled;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._parameters.internalValue = config.parameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // architecture - computed: true, optional: false, required: false
  public get architecture() {
    return this.getStringAttribute('architecture');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // cpu_type - computed: false, optional: true, required: false
  private _cpuType?: string; 
  public get cpuType() {
    return this.getStringAttribute('cpu_type');
  }
  public set cpuType(value: string) {
    this._cpuType = value;
  }
  public resetCpuType() {
    this._cpuType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuTypeInput() {
    return this._cpuType;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // db_cluster_description - computed: false, optional: true, required: false
  private _dbClusterDescription?: string; 
  public get dbClusterDescription() {
    return this.getStringAttribute('db_cluster_description');
  }
  public set dbClusterDescription(value: string) {
    this._dbClusterDescription = value;
  }
  public resetDbClusterDescription() {
    this._dbClusterDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterDescriptionInput() {
    return this._dbClusterDescription;
  }

  // db_cluster_id - computed: true, optional: false, required: false
  public get dbClusterId() {
    return this.getStringAttribute('db_cluster_id');
  }

  // db_cluster_network_type - computed: true, optional: false, required: false
  public get dbClusterNetworkType() {
    return this.getStringAttribute('db_cluster_network_type');
  }

  // db_cluster_status - computed: true, optional: false, required: false
  public get dbClusterStatus() {
    return this.getStringAttribute('db_cluster_status');
  }

  // db_node_class - computed: false, optional: false, required: true
  private _dbNodeClass?: string; 
  public get dbNodeClass() {
    return this.getStringAttribute('db_node_class');
  }
  public set dbNodeClass(value: string) {
    this._dbNodeClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNodeClassInput() {
    return this._dbNodeClass;
  }

  // db_nodes - computed: true, optional: false, required: false
  private _dbNodes = new PolardbClusterInstanceDbNodesList(this, "db_nodes", false);
  public get dbNodes() {
    return this._dbNodes;
  }

  // db_type - computed: false, optional: false, required: true
  private _dbType?: string; 
  public get dbType() {
    return this.getStringAttribute('db_type');
  }
  public set dbType(value: string) {
    this._dbType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbTypeInput() {
    return this._dbType;
  }

  // db_version - computed: false, optional: false, required: true
  private _dbVersion?: string; 
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }
  public set dbVersion(value: string) {
    this._dbVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbVersionInput() {
    return this._dbVersion;
  }

  // deletion_lock - computed: true, optional: true, required: false
  private _deletionLock?: number; 
  public get deletionLock() {
    return this.getNumberAttribute('deletion_lock');
  }
  public set deletionLock(value: number) {
    this._deletionLock = value;
  }
  public resetDeletionLock() {
    this._deletionLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionLockInput() {
    return this._deletionLock;
  }

  // encrypt_algorithm - computed: false, optional: true, required: false
  private _encryptAlgorithm?: string; 
  public get encryptAlgorithm() {
    return this.getStringAttribute('encrypt_algorithm');
  }
  public set encryptAlgorithm(value: string) {
    this._encryptAlgorithm = value;
  }
  public resetEncryptAlgorithm() {
    this._encryptAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptAlgorithmInput() {
    return this._encryptAlgorithm;
  }

  // encryption_key - computed: false, optional: true, required: false
  private _encryptionKey?: string; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // hot_standby_cluster - computed: false, optional: true, required: false
  private _hotStandbyCluster?: string; 
  public get hotStandbyCluster() {
    return this.getStringAttribute('hot_standby_cluster');
  }
  public set hotStandbyCluster(value: string) {
    this._hotStandbyCluster = value;
  }
  public resetHotStandbyCluster() {
    this._hotStandbyCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotStandbyClusterInput() {
    return this._hotStandbyCluster;
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

  // lock_mode - computed: true, optional: false, required: false
  public get lockMode() {
    return this.getStringAttribute('lock_mode');
  }

  // maintain_time - computed: true, optional: true, required: false
  private _maintainTime?: string; 
  public get maintainTime() {
    return this.getStringAttribute('maintain_time');
  }
  public set maintainTime(value: string) {
    this._maintainTime = value;
  }
  public resetMaintainTime() {
    this._maintainTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainTimeInput() {
    return this._maintainTime;
  }

  // proxy_cpu_cores - computed: true, optional: false, required: false
  public get proxyCpuCores() {
    return this.getStringAttribute('proxy_cpu_cores');
  }

  // proxy_status - computed: true, optional: false, required: false
  public get proxyStatus() {
    return this.getStringAttribute('proxy_status');
  }

  // readonly_node_num - computed: false, optional: true, required: false
  private _readonlyNodeNum?: number; 
  public get readonlyNodeNum() {
    return this.getNumberAttribute('readonly_node_num');
  }
  public set readonlyNodeNum(value: number) {
    this._readonlyNodeNum = value;
  }
  public resetReadonlyNodeNum() {
    this._readonlyNodeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyNodeNumInput() {
    return this._readonlyNodeNum;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // security_ips_groups - computed: true, optional: true, required: false
  private _securityIpsGroups?: { [key: string]: string }; 
  public get securityIpsGroups() {
    return this.getStringMapAttribute('security_ips_groups');
  }
  public set securityIpsGroups(value: { [key: string]: string }) {
    this._securityIpsGroups = value;
  }
  public resetSecurityIpsGroups() {
    this._securityIpsGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIpsGroupsInput() {
    return this._securityIpsGroups;
  }

  // sql_size - computed: true, optional: false, required: false
  public get sqlSize() {
    return this.getNumberAttribute('sql_size');
  }

  // ssl_enabled - computed: false, optional: true, required: false
  private _sslEnabled?: boolean | cdktf.IResolvable; 
  public get sslEnabled() {
    return this.getBooleanAttribute('ssl_enabled');
  }
  public set sslEnabled(value: boolean | cdktf.IResolvable) {
    this._sslEnabled = value;
  }
  public resetSslEnabled() {
    this._sslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnabledInput() {
    return this._sslEnabled;
  }

  // storage_max - computed: true, optional: false, required: false
  public get storageMax() {
    return this.getNumberAttribute('storage_max');
  }

  // storage_space - computed: false, optional: true, required: false
  private _storageSpace?: number; 
  public get storageSpace() {
    return this.getNumberAttribute('storage_space');
  }
  public set storageSpace(value: number) {
    this._storageSpace = value;
  }
  public resetStorageSpace() {
    this._storageSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSpaceInput() {
    return this._storageSpace;
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // sub_category - computed: false, optional: true, required: false
  private _subCategory?: string; 
  public get subCategory() {
    return this.getStringAttribute('sub_category');
  }
  public set subCategory(value: string) {
    this._subCategory = value;
  }
  public resetSubCategory() {
    this._subCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subCategoryInput() {
    return this._subCategory;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tde_enabled - computed: false, optional: true, required: false
  private _tdeEnabled?: boolean | cdktf.IResolvable; 
  public get tdeEnabled() {
    return this.getBooleanAttribute('tde_enabled');
  }
  public set tdeEnabled(value: boolean | cdktf.IResolvable) {
    this._tdeEnabled = value;
  }
  public resetTdeEnabled() {
    this._tdeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdeEnabledInput() {
    return this._tdeEnabled;
  }

  // vip - computed: true, optional: false, required: false
  public get vip() {
    return this.getStringAttribute('vip');
  }

  // vswitch_id - computed: false, optional: false, required: true
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // zone_ids - computed: true, optional: false, required: false
  public get zoneIds() {
    return this.getStringAttribute('zone_ids');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new PolardbClusterInstanceParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: PolardbClusterInstanceParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cpu_type: cdktf.stringToTerraform(this._cpuType),
      db_cluster_description: cdktf.stringToTerraform(this._dbClusterDescription),
      db_node_class: cdktf.stringToTerraform(this._dbNodeClass),
      db_type: cdktf.stringToTerraform(this._dbType),
      db_version: cdktf.stringToTerraform(this._dbVersion),
      deletion_lock: cdktf.numberToTerraform(this._deletionLock),
      encrypt_algorithm: cdktf.stringToTerraform(this._encryptAlgorithm),
      encryption_key: cdktf.stringToTerraform(this._encryptionKey),
      hot_standby_cluster: cdktf.stringToTerraform(this._hotStandbyCluster),
      id: cdktf.stringToTerraform(this._id),
      maintain_time: cdktf.stringToTerraform(this._maintainTime),
      readonly_node_num: cdktf.numberToTerraform(this._readonlyNodeNum),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      security_ips_groups: cdktf.hashMapper(cdktf.stringToTerraform)(this._securityIpsGroups),
      ssl_enabled: cdktf.booleanToTerraform(this._sslEnabled),
      storage_space: cdktf.numberToTerraform(this._storageSpace),
      storage_type: cdktf.stringToTerraform(this._storageType),
      sub_category: cdktf.stringToTerraform(this._subCategory),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tde_enabled: cdktf.booleanToTerraform(this._tdeEnabled),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      parameters: cdktf.listMapper(polardbClusterInstanceParametersToTerraform, true)(this._parameters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cpu_type: {
        value: cdktf.stringToHclTerraform(this._cpuType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_cluster_description: {
        value: cdktf.stringToHclTerraform(this._dbClusterDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_node_class: {
        value: cdktf.stringToHclTerraform(this._dbNodeClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_type: {
        value: cdktf.stringToHclTerraform(this._dbType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_version: {
        value: cdktf.stringToHclTerraform(this._dbVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_lock: {
        value: cdktf.numberToHclTerraform(this._deletionLock),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      encrypt_algorithm: {
        value: cdktf.stringToHclTerraform(this._encryptAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_key: {
        value: cdktf.stringToHclTerraform(this._encryptionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hot_standby_cluster: {
        value: cdktf.stringToHclTerraform(this._hotStandbyCluster),
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
      maintain_time: {
        value: cdktf.stringToHclTerraform(this._maintainTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      readonly_node_num: {
        value: cdktf.numberToHclTerraform(this._readonlyNodeNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      security_ips_groups: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._securityIpsGroups),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ssl_enabled: {
        value: cdktf.booleanToHclTerraform(this._sslEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      storage_space: {
        value: cdktf.numberToHclTerraform(this._storageSpace),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_type: {
        value: cdktf.stringToHclTerraform(this._storageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_category: {
        value: cdktf.stringToHclTerraform(this._subCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tde_enabled: {
        value: cdktf.booleanToHclTerraform(this._tdeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.listMapperHcl(polardbClusterInstanceParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolardbClusterInstanceParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
