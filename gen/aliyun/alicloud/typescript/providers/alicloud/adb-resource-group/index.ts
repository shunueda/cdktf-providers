// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/adb_resource_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdbResourceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/adb_resource_group#cluster_mode AdbResourceGroup#cluster_mode}
  */
  readonly clusterMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/adb_resource_group#cluster_size_resource AdbResourceGroup#cluster_size_resource}
  */
  readonly clusterSizeResource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/adb_resource_group#db_cluster_id AdbResourceGroup#db_cluster_id}
  */
  readonly dbClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/adb_resource_group#engine AdbResourceGroup#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/adb_resource_group#engine_params AdbResourceGroup#engine_params}
  */
  readonly engineParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/adb_resource_group#group_name AdbResourceGroup#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/adb_resource_group#group_type AdbResourceGroup#group_type}
  */
  readonly groupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/adb_resource_group#id AdbResourceGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/adb_resource_group#max_cluster_count AdbResourceGroup#max_cluster_count}
  */
  readonly maxClusterCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/adb_resource_group#max_compute_resource AdbResourceGroup#max_compute_resource}
  */
  readonly maxComputeResource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/adb_resource_group#min_cluster_count AdbResourceGroup#min_cluster_count}
  */
  readonly minClusterCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/adb_resource_group#min_compute_resource AdbResourceGroup#min_compute_resource}
  */
  readonly minComputeResource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/adb_resource_group#node_num AdbResourceGroup#node_num}
  */
  readonly nodeNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/adb_resource_group#users AdbResourceGroup#users}
  */
  readonly users?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/adb_resource_group#timeouts AdbResourceGroup#timeouts}
  */
  readonly timeouts?: AdbResourceGroupTimeouts;
}
export interface AdbResourceGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/adb_resource_group#create AdbResourceGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/adb_resource_group#delete AdbResourceGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/adb_resource_group#update AdbResourceGroup#update}
  */
  readonly update?: string;
}

export function adbResourceGroupTimeoutsToTerraform(struct?: AdbResourceGroupTimeouts | cdktf.IResolvable): any {
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


export function adbResourceGroupTimeoutsToHclTerraform(struct?: AdbResourceGroupTimeouts | cdktf.IResolvable): any {
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

export class AdbResourceGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdbResourceGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AdbResourceGroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/adb_resource_group alicloud_adb_resource_group}
*/
export class AdbResourceGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_adb_resource_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdbResourceGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdbResourceGroup to import
  * @param importFromId The id of the existing AdbResourceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/adb_resource_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdbResourceGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_adb_resource_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/adb_resource_group alicloud_adb_resource_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdbResourceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AdbResourceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_adb_resource_group',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterMode = config.clusterMode;
    this._clusterSizeResource = config.clusterSizeResource;
    this._dbClusterId = config.dbClusterId;
    this._engine = config.engine;
    this._engineParams = config.engineParams;
    this._groupName = config.groupName;
    this._groupType = config.groupType;
    this._id = config.id;
    this._maxClusterCount = config.maxClusterCount;
    this._maxComputeResource = config.maxComputeResource;
    this._minClusterCount = config.minClusterCount;
    this._minComputeResource = config.minComputeResource;
    this._nodeNum = config.nodeNum;
    this._users = config.users;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_mode - computed: true, optional: true, required: false
  private _clusterMode?: string; 
  public get clusterMode() {
    return this.getStringAttribute('cluster_mode');
  }
  public set clusterMode(value: string) {
    this._clusterMode = value;
  }
  public resetClusterMode() {
    this._clusterMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterModeInput() {
    return this._clusterMode;
  }

  // cluster_size_resource - computed: true, optional: true, required: false
  private _clusterSizeResource?: string; 
  public get clusterSizeResource() {
    return this.getStringAttribute('cluster_size_resource');
  }
  public set clusterSizeResource(value: string) {
    this._clusterSizeResource = value;
  }
  public resetClusterSizeResource() {
    this._clusterSizeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSizeResourceInput() {
    return this._clusterSizeResource;
  }

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // db_cluster_id - computed: false, optional: false, required: true
  private _dbClusterId?: string; 
  public get dbClusterId() {
    return this.getStringAttribute('db_cluster_id');
  }
  public set dbClusterId(value: string) {
    this._dbClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterIdInput() {
    return this._dbClusterId;
  }

  // engine - computed: true, optional: true, required: false
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // engine_params - computed: false, optional: true, required: false
  private _engineParams?: { [key: string]: string }; 
  public get engineParams() {
    return this.getStringMapAttribute('engine_params');
  }
  public set engineParams(value: { [key: string]: string }) {
    this._engineParams = value;
  }
  public resetEngineParams() {
    this._engineParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineParamsInput() {
    return this._engineParams;
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // group_type - computed: true, optional: true, required: false
  private _groupType?: string; 
  public get groupType() {
    return this.getStringAttribute('group_type');
  }
  public set groupType(value: string) {
    this._groupType = value;
  }
  public resetGroupType() {
    this._groupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupTypeInput() {
    return this._groupType;
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

  // max_cluster_count - computed: false, optional: true, required: false
  private _maxClusterCount?: number; 
  public get maxClusterCount() {
    return this.getNumberAttribute('max_cluster_count');
  }
  public set maxClusterCount(value: number) {
    this._maxClusterCount = value;
  }
  public resetMaxClusterCount() {
    this._maxClusterCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClusterCountInput() {
    return this._maxClusterCount;
  }

  // max_compute_resource - computed: true, optional: true, required: false
  private _maxComputeResource?: string; 
  public get maxComputeResource() {
    return this.getStringAttribute('max_compute_resource');
  }
  public set maxComputeResource(value: string) {
    this._maxComputeResource = value;
  }
  public resetMaxComputeResource() {
    this._maxComputeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxComputeResourceInput() {
    return this._maxComputeResource;
  }

  // min_cluster_count - computed: false, optional: true, required: false
  private _minClusterCount?: number; 
  public get minClusterCount() {
    return this.getNumberAttribute('min_cluster_count');
  }
  public set minClusterCount(value: number) {
    this._minClusterCount = value;
  }
  public resetMinClusterCount() {
    this._minClusterCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minClusterCountInput() {
    return this._minClusterCount;
  }

  // min_compute_resource - computed: true, optional: true, required: false
  private _minComputeResource?: string; 
  public get minComputeResource() {
    return this.getStringAttribute('min_compute_resource');
  }
  public set minComputeResource(value: string) {
    this._minComputeResource = value;
  }
  public resetMinComputeResource() {
    this._minComputeResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minComputeResourceInput() {
    return this._minComputeResource;
  }

  // node_num - computed: true, optional: true, required: false
  private _nodeNum?: number; 
  public get nodeNum() {
    return this.getNumberAttribute('node_num');
  }
  public set nodeNum(value: number) {
    this._nodeNum = value;
  }
  public resetNodeNum() {
    this._nodeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNumInput() {
    return this._nodeNum;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AdbResourceGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AdbResourceGroupTimeouts) {
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
      cluster_mode: cdktf.stringToTerraform(this._clusterMode),
      cluster_size_resource: cdktf.stringToTerraform(this._clusterSizeResource),
      db_cluster_id: cdktf.stringToTerraform(this._dbClusterId),
      engine: cdktf.stringToTerraform(this._engine),
      engine_params: cdktf.hashMapper(cdktf.stringToTerraform)(this._engineParams),
      group_name: cdktf.stringToTerraform(this._groupName),
      group_type: cdktf.stringToTerraform(this._groupType),
      id: cdktf.stringToTerraform(this._id),
      max_cluster_count: cdktf.numberToTerraform(this._maxClusterCount),
      max_compute_resource: cdktf.stringToTerraform(this._maxComputeResource),
      min_cluster_count: cdktf.numberToTerraform(this._minClusterCount),
      min_compute_resource: cdktf.stringToTerraform(this._minComputeResource),
      node_num: cdktf.numberToTerraform(this._nodeNum),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
      timeouts: adbResourceGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_mode: {
        value: cdktf.stringToHclTerraform(this._clusterMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_size_resource: {
        value: cdktf.stringToHclTerraform(this._clusterSizeResource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_cluster_id: {
        value: cdktf.stringToHclTerraform(this._dbClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine: {
        value: cdktf.stringToHclTerraform(this._engine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_params: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._engineParams),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_type: {
        value: cdktf.stringToHclTerraform(this._groupType),
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
      max_cluster_count: {
        value: cdktf.numberToHclTerraform(this._maxClusterCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_compute_resource: {
        value: cdktf.stringToHclTerraform(this._maxComputeResource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_cluster_count: {
        value: cdktf.numberToHclTerraform(this._minClusterCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_compute_resource: {
        value: cdktf.stringToHclTerraform(this._minComputeResource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_num: {
        value: cdktf.numberToHclTerraform(this._nodeNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._users),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      timeouts: {
        value: adbResourceGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AdbResourceGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
