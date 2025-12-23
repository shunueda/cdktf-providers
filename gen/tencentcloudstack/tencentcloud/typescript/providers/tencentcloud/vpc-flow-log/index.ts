// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/vpc_flow_log
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcFlowLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * The storage ID of the flow log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/vpc_flow_log#cloud_log_id VpcFlowLog#cloud_log_id}
  */
  readonly cloudLogId?: string;
  /**
  * The region corresponding to the flow log storage ID. If not passed in, this field defaults to the current region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/vpc_flow_log#cloud_log_region VpcFlowLog#cloud_log_region}
  */
  readonly cloudLogRegion?: string;
  /**
  * The description of the flow log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/vpc_flow_log#flow_log_description VpcFlowLog#flow_log_description}
  */
  readonly flowLogDescription?: string;
  /**
  * The name of the flow log instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/vpc_flow_log#flow_log_name VpcFlowLog#flow_log_name}
  */
  readonly flowLogName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/vpc_flow_log#id VpcFlowLog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The unique ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/vpc_flow_log#resource_id VpcFlowLog#resource_id}
  */
  readonly resourceId: string;
  /**
  * The type of resource associated with the flow log. Valid values: `VPC`, `SUBNET`, `NETWORKINTERFACE`, `CCN`, `NAT`, and `DCG`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/vpc_flow_log#resource_type VpcFlowLog#resource_type}
  */
  readonly resourceType: string;
  /**
  * Consumer types: `cls` and `ckafka`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/vpc_flow_log#storage_type VpcFlowLog#storage_type}
  */
  readonly storageType?: string;
  /**
  * Tag description list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/vpc_flow_log#tags VpcFlowLog#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Type of the flow logs to be collected. Valid values: `ACCEPT`, `REJECT` and `ALL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/vpc_flow_log#traffic_type VpcFlowLog#traffic_type}
  */
  readonly trafficType: string;
  /**
  * The VPC ID or unique ID of the resource. We recommend using the unique ID. This parameter is required unless the `ResourceType` is set to `CCN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/vpc_flow_log#vpc_id VpcFlowLog#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * flow_log_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/vpc_flow_log#flow_log_storage VpcFlowLog#flow_log_storage}
  */
  readonly flowLogStorage?: VpcFlowLogFlowLogStorage;
}
export interface VpcFlowLogFlowLogStorage {
  /**
  * Storage instance ID, required while `storage_type` is `ckafka`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/vpc_flow_log#storage_id VpcFlowLog#storage_id}
  */
  readonly storageId?: string;
  /**
  * Topic ID, required while `storage_type` is `ckafka`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/vpc_flow_log#storage_topic VpcFlowLog#storage_topic}
  */
  readonly storageTopic?: string;
}

export function vpcFlowLogFlowLogStorageToTerraform(struct?: VpcFlowLogFlowLogStorageOutputReference | VpcFlowLogFlowLogStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_id: cdktf.stringToTerraform(struct!.storageId),
    storage_topic: cdktf.stringToTerraform(struct!.storageTopic),
  }
}


export function vpcFlowLogFlowLogStorageToHclTerraform(struct?: VpcFlowLogFlowLogStorageOutputReference | VpcFlowLogFlowLogStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage_id: {
      value: cdktf.stringToHclTerraform(struct!.storageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_topic: {
      value: cdktf.stringToHclTerraform(struct!.storageTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcFlowLogFlowLogStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcFlowLogFlowLogStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageId = this._storageId;
    }
    if (this._storageTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageTopic = this._storageTopic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcFlowLogFlowLogStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storageId = undefined;
      this._storageTopic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storageId = value.storageId;
      this._storageTopic = value.storageTopic;
    }
  }

  // storage_id - computed: true, optional: true, required: false
  private _storageId?: string; 
  public get storageId() {
    return this.getStringAttribute('storage_id');
  }
  public set storageId(value: string) {
    this._storageId = value;
  }
  public resetStorageId() {
    this._storageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageIdInput() {
    return this._storageId;
  }

  // storage_topic - computed: true, optional: true, required: false
  private _storageTopic?: string; 
  public get storageTopic() {
    return this.getStringAttribute('storage_topic');
  }
  public set storageTopic(value: string) {
    this._storageTopic = value;
  }
  public resetStorageTopic() {
    this._storageTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTopicInput() {
    return this._storageTopic;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/vpc_flow_log tencentcloud_vpc_flow_log}
*/
export class VpcFlowLog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpc_flow_log";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcFlowLog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcFlowLog to import
  * @param importFromId The id of the existing VpcFlowLog that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/vpc_flow_log#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcFlowLog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpc_flow_log", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/vpc_flow_log tencentcloud_vpc_flow_log} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcFlowLogConfig
  */
  public constructor(scope: Construct, id: string, config: VpcFlowLogConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpc_flow_log',
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
    this._cloudLogId = config.cloudLogId;
    this._cloudLogRegion = config.cloudLogRegion;
    this._flowLogDescription = config.flowLogDescription;
    this._flowLogName = config.flowLogName;
    this._id = config.id;
    this._resourceId = config.resourceId;
    this._resourceType = config.resourceType;
    this._storageType = config.storageType;
    this._tags = config.tags;
    this._trafficType = config.trafficType;
    this._vpcId = config.vpcId;
    this._flowLogStorage.internalValue = config.flowLogStorage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_log_id - computed: false, optional: true, required: false
  private _cloudLogId?: string; 
  public get cloudLogId() {
    return this.getStringAttribute('cloud_log_id');
  }
  public set cloudLogId(value: string) {
    this._cloudLogId = value;
  }
  public resetCloudLogId() {
    this._cloudLogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudLogIdInput() {
    return this._cloudLogId;
  }

  // cloud_log_region - computed: true, optional: true, required: false
  private _cloudLogRegion?: string; 
  public get cloudLogRegion() {
    return this.getStringAttribute('cloud_log_region');
  }
  public set cloudLogRegion(value: string) {
    this._cloudLogRegion = value;
  }
  public resetCloudLogRegion() {
    this._cloudLogRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudLogRegionInput() {
    return this._cloudLogRegion;
  }

  // flow_log_description - computed: false, optional: true, required: false
  private _flowLogDescription?: string; 
  public get flowLogDescription() {
    return this.getStringAttribute('flow_log_description');
  }
  public set flowLogDescription(value: string) {
    this._flowLogDescription = value;
  }
  public resetFlowLogDescription() {
    this._flowLogDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowLogDescriptionInput() {
    return this._flowLogDescription;
  }

  // flow_log_name - computed: false, optional: false, required: true
  private _flowLogName?: string; 
  public get flowLogName() {
    return this.getStringAttribute('flow_log_name');
  }
  public set flowLogName(value: string) {
    this._flowLogName = value;
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

  // vpc_id - computed: false, optional: true, required: false
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

  // flow_log_storage - computed: false, optional: true, required: false
  private _flowLogStorage = new VpcFlowLogFlowLogStorageOutputReference(this, "flow_log_storage");
  public get flowLogStorage() {
    return this._flowLogStorage;
  }
  public putFlowLogStorage(value: VpcFlowLogFlowLogStorage) {
    this._flowLogStorage.internalValue = value;
  }
  public resetFlowLogStorage() {
    this._flowLogStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowLogStorageInput() {
    return this._flowLogStorage.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_log_id: cdktf.stringToTerraform(this._cloudLogId),
      cloud_log_region: cdktf.stringToTerraform(this._cloudLogRegion),
      flow_log_description: cdktf.stringToTerraform(this._flowLogDescription),
      flow_log_name: cdktf.stringToTerraform(this._flowLogName),
      id: cdktf.stringToTerraform(this._id),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      storage_type: cdktf.stringToTerraform(this._storageType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      traffic_type: cdktf.stringToTerraform(this._trafficType),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      flow_log_storage: vpcFlowLogFlowLogStorageToTerraform(this._flowLogStorage.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_log_id: {
        value: cdktf.stringToHclTerraform(this._cloudLogId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_log_region: {
        value: cdktf.stringToHclTerraform(this._cloudLogRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_log_description: {
        value: cdktf.stringToHclTerraform(this._flowLogDescription),
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
      storage_type: {
        value: cdktf.stringToHclTerraform(this._storageType),
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
      traffic_type: {
        value: cdktf.stringToHclTerraform(this._trafficType),
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
      flow_log_storage: {
        value: vpcFlowLogFlowLogStorageToHclTerraform(this._flowLogStorage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcFlowLogFlowLogStorageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
