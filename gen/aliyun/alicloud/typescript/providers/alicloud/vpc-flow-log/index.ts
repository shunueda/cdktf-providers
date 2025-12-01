// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_flow_log
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcFlowLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_flow_log#aggregation_interval VpcFlowLog#aggregation_interval}
  */
  readonly aggregationInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_flow_log#description VpcFlowLog#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_flow_log#flow_log_name VpcFlowLog#flow_log_name}
  */
  readonly flowLogName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_flow_log#id VpcFlowLog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_flow_log#ip_version VpcFlowLog#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_flow_log#log_store_name VpcFlowLog#log_store_name}
  */
  readonly logStoreName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_flow_log#project_name VpcFlowLog#project_name}
  */
  readonly projectName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_flow_log#resource_group_id VpcFlowLog#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_flow_log#resource_id VpcFlowLog#resource_id}
  */
  readonly resourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_flow_log#resource_type VpcFlowLog#resource_type}
  */
  readonly resourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_flow_log#status VpcFlowLog#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_flow_log#tags VpcFlowLog#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_flow_log#traffic_path VpcFlowLog#traffic_path}
  */
  readonly trafficPath?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_flow_log#traffic_type VpcFlowLog#traffic_type}
  */
  readonly trafficType: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_flow_log#timeouts VpcFlowLog#timeouts}
  */
  readonly timeouts?: VpcFlowLogTimeouts;
}
export interface VpcFlowLogTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_flow_log#create VpcFlowLog#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_flow_log#delete VpcFlowLog#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_flow_log#update VpcFlowLog#update}
  */
  readonly update?: string;
}

export function vpcFlowLogTimeoutsToTerraform(struct?: VpcFlowLogTimeouts | cdktf.IResolvable): any {
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


export function vpcFlowLogTimeoutsToHclTerraform(struct?: VpcFlowLogTimeouts | cdktf.IResolvable): any {
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

export class VpcFlowLogTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcFlowLogTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpcFlowLogTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_flow_log alicloud_vpc_flow_log}
*/
export class VpcFlowLog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_vpc_flow_log";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcFlowLog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcFlowLog to import
  * @param importFromId The id of the existing VpcFlowLog that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_flow_log#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcFlowLog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_vpc_flow_log", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_flow_log alicloud_vpc_flow_log} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcFlowLogConfig
  */
  public constructor(scope: Construct, id: string, config: VpcFlowLogConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_vpc_flow_log',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggregationInterval = config.aggregationInterval;
    this._description = config.description;
    this._flowLogName = config.flowLogName;
    this._id = config.id;
    this._ipVersion = config.ipVersion;
    this._logStoreName = config.logStoreName;
    this._projectName = config.projectName;
    this._resourceGroupId = config.resourceGroupId;
    this._resourceId = config.resourceId;
    this._resourceType = config.resourceType;
    this._status = config.status;
    this._tags = config.tags;
    this._trafficPath = config.trafficPath;
    this._trafficType = config.trafficType;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregation_interval - computed: true, optional: true, required: false
  private _aggregationInterval?: string; 
  public get aggregationInterval() {
    return this.getStringAttribute('aggregation_interval');
  }
  public set aggregationInterval(value: string) {
    this._aggregationInterval = value;
  }
  public resetAggregationInterval() {
    this._aggregationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationIntervalInput() {
    return this._aggregationInterval;
  }

  // business_status - computed: true, optional: false, required: false
  public get businessStatus() {
    return this.getStringAttribute('business_status');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // flow_log_id - computed: true, optional: false, required: false
  public get flowLogId() {
    return this.getStringAttribute('flow_log_id');
  }

  // flow_log_name - computed: false, optional: true, required: false
  private _flowLogName?: string; 
  public get flowLogName() {
    return this.getStringAttribute('flow_log_name');
  }
  public set flowLogName(value: string) {
    this._flowLogName = value;
  }
  public resetFlowLogName() {
    this._flowLogName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowLogNameInput() {
    return this._flowLogName;
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

  // ip_version - computed: true, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // log_store_name - computed: false, optional: false, required: true
  private _logStoreName?: string; 
  public get logStoreName() {
    return this.getStringAttribute('log_store_name');
  }
  public set logStoreName(value: string) {
    this._logStoreName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logStoreNameInput() {
    return this._logStoreName;
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // traffic_path - computed: true, optional: true, required: false
  private _trafficPath?: string[]; 
  public get trafficPath() {
    return this.getListAttribute('traffic_path');
  }
  public set trafficPath(value: string[]) {
    this._trafficPath = value;
  }
  public resetTrafficPath() {
    this._trafficPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficPathInput() {
    return this._trafficPath;
  }

  // traffic_type - computed: false, optional: false, required: true
  private _trafficType?: string; 
  public get trafficType() {
    return this.getStringAttribute('traffic_type');
  }
  public set trafficType(value: string) {
    this._trafficType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficTypeInput() {
    return this._trafficType;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcFlowLogTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcFlowLogTimeouts) {
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
      aggregation_interval: cdktf.stringToTerraform(this._aggregationInterval),
      description: cdktf.stringToTerraform(this._description),
      flow_log_name: cdktf.stringToTerraform(this._flowLogName),
      id: cdktf.stringToTerraform(this._id),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      log_store_name: cdktf.stringToTerraform(this._logStoreName),
      project_name: cdktf.stringToTerraform(this._projectName),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      traffic_path: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trafficPath),
      traffic_type: cdktf.stringToTerraform(this._trafficType),
      timeouts: vpcFlowLogTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregation_interval: {
        value: cdktf.stringToHclTerraform(this._aggregationInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_log_name: {
        value: cdktf.stringToHclTerraform(this._flowLogName),
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
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_store_name: {
        value: cdktf.stringToHclTerraform(this._logStoreName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
      traffic_path: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trafficPath),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      traffic_type: {
        value: cdktf.stringToHclTerraform(this._trafficType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: vpcFlowLogTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpcFlowLogTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
