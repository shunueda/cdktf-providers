// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mariadb_dedicatedcluster_db_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MariadbDedicatedclusterDbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * dedicated cluster id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mariadb_dedicatedcluster_db_instance#cluster_id MariadbDedicatedclusterDbInstance#cluster_id}
  */
  readonly clusterId: string;
  /**
  * db engine version, default to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mariadb_dedicatedcluster_db_instance#db_version_id MariadbDedicatedclusterDbInstance#db_version_id}
  */
  readonly dbVersionId?: string;
  /**
  * number of instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mariadb_dedicatedcluster_db_instance#goods_num MariadbDedicatedclusterDbInstance#goods_num}
  */
  readonly goodsNum: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mariadb_dedicatedcluster_db_instance#id MariadbDedicatedclusterDbInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name of this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mariadb_dedicatedcluster_db_instance#instance_name MariadbDedicatedclusterDbInstance#instance_name}
  */
  readonly instanceName?: string;
  /**
  * instance memory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mariadb_dedicatedcluster_db_instance#memory MariadbDedicatedclusterDbInstance#memory}
  */
  readonly memory: number;
  /**
  * project id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mariadb_dedicatedcluster_db_instance#project_id MariadbDedicatedclusterDbInstance#project_id}
  */
  readonly projectId?: number;
  /**
  * instance disk storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mariadb_dedicatedcluster_db_instance#storage MariadbDedicatedclusterDbInstance#storage}
  */
  readonly storage: number;
  /**
  * subnet id, it&amp;#39;s required when vpcId is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mariadb_dedicatedcluster_db_instance#subnet_id MariadbDedicatedclusterDbInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Tag description list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mariadb_dedicatedcluster_db_instance#tags MariadbDedicatedclusterDbInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * vip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mariadb_dedicatedcluster_db_instance#vip MariadbDedicatedclusterDbInstance#vip}
  */
  readonly vip?: string;
  /**
  * vpc id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mariadb_dedicatedcluster_db_instance#vpc_id MariadbDedicatedclusterDbInstance#vpc_id}
  */
  readonly vpcId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mariadb_dedicatedcluster_db_instance tencentcloud_mariadb_dedicatedcluster_db_instance}
*/
export class MariadbDedicatedclusterDbInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mariadb_dedicatedcluster_db_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MariadbDedicatedclusterDbInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MariadbDedicatedclusterDbInstance to import
  * @param importFromId The id of the existing MariadbDedicatedclusterDbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mariadb_dedicatedcluster_db_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MariadbDedicatedclusterDbInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mariadb_dedicatedcluster_db_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mariadb_dedicatedcluster_db_instance tencentcloud_mariadb_dedicatedcluster_db_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MariadbDedicatedclusterDbInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: MariadbDedicatedclusterDbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mariadb_dedicatedcluster_db_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._dbVersionId = config.dbVersionId;
    this._goodsNum = config.goodsNum;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._memory = config.memory;
    this._projectId = config.projectId;
    this._storage = config.storage;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._vip = config.vip;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // db_version_id - computed: true, optional: true, required: false
  private _dbVersionId?: string; 
  public get dbVersionId() {
    return this.getStringAttribute('db_version_id');
  }
  public set dbVersionId(value: string) {
    this._dbVersionId = value;
  }
  public resetDbVersionId() {
    this._dbVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbVersionIdInput() {
    return this._dbVersionId;
  }

  // goods_num - computed: false, optional: false, required: true
  private _goodsNum?: number; 
  public get goodsNum() {
    return this.getNumberAttribute('goods_num');
  }
  public set goodsNum(value: number) {
    this._goodsNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get goodsNumInput() {
    return this._goodsNum;
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

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // storage - computed: false, optional: false, required: true
  private _storage?: number; 
  public get storage() {
    return this.getNumberAttribute('storage');
  }
  public set storage(value: number) {
    this._storage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
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

  // vip - computed: true, optional: true, required: false
  private _vip?: string; 
  public get vip() {
    return this.getStringAttribute('vip');
  }
  public set vip(value: string) {
    this._vip = value;
  }
  public resetVip() {
    this._vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInput() {
    return this._vip;
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      db_version_id: cdktf.stringToTerraform(this._dbVersionId),
      goods_num: cdktf.numberToTerraform(this._goodsNum),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      memory: cdktf.numberToTerraform(this._memory),
      project_id: cdktf.numberToTerraform(this._projectId),
      storage: cdktf.numberToTerraform(this._storage),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vip: cdktf.stringToTerraform(this._vip),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_version_id: {
        value: cdktf.stringToHclTerraform(this._dbVersionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      goods_num: {
        value: cdktf.numberToHclTerraform(this._goodsNum),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage: {
        value: cdktf.numberToHclTerraform(this._storage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
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
      vip: {
        value: cdktf.stringToHclTerraform(this._vip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
