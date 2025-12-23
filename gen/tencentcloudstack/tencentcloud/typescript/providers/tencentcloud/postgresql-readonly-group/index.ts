// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/postgresql_readonly_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostgresqlReadonlyGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/postgresql_readonly_group#id PostgresqlReadonlyGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Primary instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/postgresql_readonly_group#master_db_instance_id PostgresqlReadonlyGroup#master_db_instance_id}
  */
  readonly masterDbInstanceId: string;
  /**
  * Delay threshold in ms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/postgresql_readonly_group#max_replay_lag PostgresqlReadonlyGroup#max_replay_lag}
  */
  readonly maxReplayLag: number;
  /**
  * Delayed log size threshold in MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/postgresql_readonly_group#max_replay_latency PostgresqlReadonlyGroup#max_replay_latency}
  */
  readonly maxReplayLatency: number;
  /**
  * The minimum number of read-only replicas that must be retained in an RO group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/postgresql_readonly_group#min_delay_eliminate_reserve PostgresqlReadonlyGroup#min_delay_eliminate_reserve}
  */
  readonly minDelayEliminateReserve: number;
  /**
  * RO group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/postgresql_readonly_group#name PostgresqlReadonlyGroup#name}
  */
  readonly name: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/postgresql_readonly_group#project_id PostgresqlReadonlyGroup#project_id}
  */
  readonly projectId: number;
  /**
  * Whether to remove a read-only replica from an RO group if the delay between the read-only replica and the primary instance exceeds the threshold. Valid values: 0 (no), 1 (yes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/postgresql_readonly_group#replay_lag_eliminate PostgresqlReadonlyGroup#replay_lag_eliminate}
  */
  readonly replayLagEliminate: number;
  /**
  * Whether to remove a read-only replica from an RO group if the sync log size difference between the read-only replica and the primary instance exceeds the threshold. Valid values: 0 (no), 1 (yes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/postgresql_readonly_group#replay_latency_eliminate PostgresqlReadonlyGroup#replay_latency_eliminate}
  */
  readonly replayLatencyEliminate: number;
  /**
  * ID of security group. If both vpc_id and subnet_id are not set, this argument should not be set either.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/postgresql_readonly_group#security_groups_ids PostgresqlReadonlyGroup#security_groups_ids}
  */
  readonly securityGroupsIds?: string[];
  /**
  * VPC subnet ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/postgresql_readonly_group#subnet_id PostgresqlReadonlyGroup#subnet_id}
  */
  readonly subnetId: string;
  /**
  * VPC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/postgresql_readonly_group#vpc_id PostgresqlReadonlyGroup#vpc_id}
  */
  readonly vpcId: string;
}
export interface PostgresqlReadonlyGroupNetInfoListStruct {
}

export function postgresqlReadonlyGroupNetInfoListStructToTerraform(struct?: PostgresqlReadonlyGroupNetInfoListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function postgresqlReadonlyGroupNetInfoListStructToHclTerraform(struct?: PostgresqlReadonlyGroupNetInfoListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PostgresqlReadonlyGroupNetInfoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PostgresqlReadonlyGroupNetInfoListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostgresqlReadonlyGroupNetInfoListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class PostgresqlReadonlyGroupNetInfoListStructList extends cdktf.ComplexList {

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
  public get(index: number): PostgresqlReadonlyGroupNetInfoListStructOutputReference {
    return new PostgresqlReadonlyGroupNetInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/postgresql_readonly_group tencentcloud_postgresql_readonly_group}
*/
export class PostgresqlReadonlyGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_postgresql_readonly_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PostgresqlReadonlyGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PostgresqlReadonlyGroup to import
  * @param importFromId The id of the existing PostgresqlReadonlyGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/postgresql_readonly_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PostgresqlReadonlyGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_postgresql_readonly_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/postgresql_readonly_group tencentcloud_postgresql_readonly_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostgresqlReadonlyGroupConfig
  */
  public constructor(scope: Construct, id: string, config: PostgresqlReadonlyGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_postgresql_readonly_group',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._masterDbInstanceId = config.masterDbInstanceId;
    this._maxReplayLag = config.maxReplayLag;
    this._maxReplayLatency = config.maxReplayLatency;
    this._minDelayEliminateReserve = config.minDelayEliminateReserve;
    this._name = config.name;
    this._projectId = config.projectId;
    this._replayLagEliminate = config.replayLagEliminate;
    this._replayLatencyEliminate = config.replayLatencyEliminate;
    this._securityGroupsIds = config.securityGroupsIds;
    this._subnetId = config.subnetId;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // master_db_instance_id - computed: false, optional: false, required: true
  private _masterDbInstanceId?: string; 
  public get masterDbInstanceId() {
    return this.getStringAttribute('master_db_instance_id');
  }
  public set masterDbInstanceId(value: string) {
    this._masterDbInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterDbInstanceIdInput() {
    return this._masterDbInstanceId;
  }

  // max_replay_lag - computed: false, optional: false, required: true
  private _maxReplayLag?: number; 
  public get maxReplayLag() {
    return this.getNumberAttribute('max_replay_lag');
  }
  public set maxReplayLag(value: number) {
    this._maxReplayLag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplayLagInput() {
    return this._maxReplayLag;
  }

  // max_replay_latency - computed: false, optional: false, required: true
  private _maxReplayLatency?: number; 
  public get maxReplayLatency() {
    return this.getNumberAttribute('max_replay_latency');
  }
  public set maxReplayLatency(value: number) {
    this._maxReplayLatency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplayLatencyInput() {
    return this._maxReplayLatency;
  }

  // min_delay_eliminate_reserve - computed: false, optional: false, required: true
  private _minDelayEliminateReserve?: number; 
  public get minDelayEliminateReserve() {
    return this.getNumberAttribute('min_delay_eliminate_reserve');
  }
  public set minDelayEliminateReserve(value: number) {
    this._minDelayEliminateReserve = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minDelayEliminateReserveInput() {
    return this._minDelayEliminateReserve;
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

  // net_info_list - computed: true, optional: false, required: false
  private _netInfoList = new PostgresqlReadonlyGroupNetInfoListStructList(this, "net_info_list", false);
  public get netInfoList() {
    return this._netInfoList;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // replay_lag_eliminate - computed: false, optional: false, required: true
  private _replayLagEliminate?: number; 
  public get replayLagEliminate() {
    return this.getNumberAttribute('replay_lag_eliminate');
  }
  public set replayLagEliminate(value: number) {
    this._replayLagEliminate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replayLagEliminateInput() {
    return this._replayLagEliminate;
  }

  // replay_latency_eliminate - computed: false, optional: false, required: true
  private _replayLatencyEliminate?: number; 
  public get replayLatencyEliminate() {
    return this.getNumberAttribute('replay_latency_eliminate');
  }
  public set replayLatencyEliminate(value: number) {
    this._replayLatencyEliminate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replayLatencyEliminateInput() {
    return this._replayLatencyEliminate;
  }

  // security_groups_ids - computed: false, optional: true, required: false
  private _securityGroupsIds?: string[]; 
  public get securityGroupsIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups_ids'));
  }
  public set securityGroupsIds(value: string[]) {
    this._securityGroupsIds = value;
  }
  public resetSecurityGroupsIds() {
    this._securityGroupsIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsIdsInput() {
    return this._securityGroupsIds;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
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
      id: cdktf.stringToTerraform(this._id),
      master_db_instance_id: cdktf.stringToTerraform(this._masterDbInstanceId),
      max_replay_lag: cdktf.numberToTerraform(this._maxReplayLag),
      max_replay_latency: cdktf.numberToTerraform(this._maxReplayLatency),
      min_delay_eliminate_reserve: cdktf.numberToTerraform(this._minDelayEliminateReserve),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.numberToTerraform(this._projectId),
      replay_lag_eliminate: cdktf.numberToTerraform(this._replayLagEliminate),
      replay_latency_eliminate: cdktf.numberToTerraform(this._replayLatencyEliminate),
      security_groups_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupsIds),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_db_instance_id: {
        value: cdktf.stringToHclTerraform(this._masterDbInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_replay_lag: {
        value: cdktf.numberToHclTerraform(this._maxReplayLag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_replay_latency: {
        value: cdktf.numberToHclTerraform(this._maxReplayLatency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_delay_eliminate_reserve: {
        value: cdktf.numberToHclTerraform(this._minDelayEliminateReserve),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replay_lag_eliminate: {
        value: cdktf.numberToHclTerraform(this._replayLagEliminate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replay_latency_eliminate: {
        value: cdktf.numberToHclTerraform(this._replayLatencyEliminate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_groups_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupsIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
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
