// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_traffic_mirror_session
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcTrafficMirrorSessionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_traffic_mirror_session#dry_run VpcTrafficMirrorSession#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_traffic_mirror_session#enabled VpcTrafficMirrorSession#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_traffic_mirror_session#id VpcTrafficMirrorSession#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_traffic_mirror_session#packet_length VpcTrafficMirrorSession#packet_length}
  */
  readonly packetLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_traffic_mirror_session#priority VpcTrafficMirrorSession#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_traffic_mirror_session#resource_group_id VpcTrafficMirrorSession#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_traffic_mirror_session#tags VpcTrafficMirrorSession#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_traffic_mirror_session#traffic_mirror_filter_id VpcTrafficMirrorSession#traffic_mirror_filter_id}
  */
  readonly trafficMirrorFilterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_traffic_mirror_session#traffic_mirror_session_description VpcTrafficMirrorSession#traffic_mirror_session_description}
  */
  readonly trafficMirrorSessionDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_traffic_mirror_session#traffic_mirror_session_name VpcTrafficMirrorSession#traffic_mirror_session_name}
  */
  readonly trafficMirrorSessionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_traffic_mirror_session#traffic_mirror_source_ids VpcTrafficMirrorSession#traffic_mirror_source_ids}
  */
  readonly trafficMirrorSourceIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_traffic_mirror_session#traffic_mirror_target_id VpcTrafficMirrorSession#traffic_mirror_target_id}
  */
  readonly trafficMirrorTargetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_traffic_mirror_session#traffic_mirror_target_type VpcTrafficMirrorSession#traffic_mirror_target_type}
  */
  readonly trafficMirrorTargetType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_traffic_mirror_session#virtual_network_id VpcTrafficMirrorSession#virtual_network_id}
  */
  readonly virtualNetworkId?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_traffic_mirror_session#timeouts VpcTrafficMirrorSession#timeouts}
  */
  readonly timeouts?: VpcTrafficMirrorSessionTimeouts;
}
export interface VpcTrafficMirrorSessionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_traffic_mirror_session#create VpcTrafficMirrorSession#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_traffic_mirror_session#delete VpcTrafficMirrorSession#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_traffic_mirror_session#update VpcTrafficMirrorSession#update}
  */
  readonly update?: string;
}

export function vpcTrafficMirrorSessionTimeoutsToTerraform(struct?: VpcTrafficMirrorSessionTimeouts | cdktf.IResolvable): any {
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


export function vpcTrafficMirrorSessionTimeoutsToHclTerraform(struct?: VpcTrafficMirrorSessionTimeouts | cdktf.IResolvable): any {
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

export class VpcTrafficMirrorSessionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcTrafficMirrorSessionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpcTrafficMirrorSessionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_traffic_mirror_session alicloud_vpc_traffic_mirror_session}
*/
export class VpcTrafficMirrorSession extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_vpc_traffic_mirror_session";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcTrafficMirrorSession resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcTrafficMirrorSession to import
  * @param importFromId The id of the existing VpcTrafficMirrorSession that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_traffic_mirror_session#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcTrafficMirrorSession to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_vpc_traffic_mirror_session", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/vpc_traffic_mirror_session alicloud_vpc_traffic_mirror_session} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcTrafficMirrorSessionConfig
  */
  public constructor(scope: Construct, id: string, config: VpcTrafficMirrorSessionConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_vpc_traffic_mirror_session',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dryRun = config.dryRun;
    this._enabled = config.enabled;
    this._id = config.id;
    this._packetLength = config.packetLength;
    this._priority = config.priority;
    this._resourceGroupId = config.resourceGroupId;
    this._tags = config.tags;
    this._trafficMirrorFilterId = config.trafficMirrorFilterId;
    this._trafficMirrorSessionDescription = config.trafficMirrorSessionDescription;
    this._trafficMirrorSessionName = config.trafficMirrorSessionName;
    this._trafficMirrorSourceIds = config.trafficMirrorSourceIds;
    this._trafficMirrorTargetId = config.trafficMirrorTargetId;
    this._trafficMirrorTargetType = config.trafficMirrorTargetType;
    this._virtualNetworkId = config.virtualNetworkId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // packet_length - computed: true, optional: true, required: false
  private _packetLength?: number; 
  public get packetLength() {
    return this.getNumberAttribute('packet_length');
  }
  public set packetLength(value: number) {
    this._packetLength = value;
  }
  public resetPacketLength() {
    this._packetLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLengthInput() {
    return this._packetLength;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // traffic_mirror_filter_id - computed: false, optional: false, required: true
  private _trafficMirrorFilterId?: string; 
  public get trafficMirrorFilterId() {
    return this.getStringAttribute('traffic_mirror_filter_id');
  }
  public set trafficMirrorFilterId(value: string) {
    this._trafficMirrorFilterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficMirrorFilterIdInput() {
    return this._trafficMirrorFilterId;
  }

  // traffic_mirror_session_description - computed: false, optional: true, required: false
  private _trafficMirrorSessionDescription?: string; 
  public get trafficMirrorSessionDescription() {
    return this.getStringAttribute('traffic_mirror_session_description');
  }
  public set trafficMirrorSessionDescription(value: string) {
    this._trafficMirrorSessionDescription = value;
  }
  public resetTrafficMirrorSessionDescription() {
    this._trafficMirrorSessionDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficMirrorSessionDescriptionInput() {
    return this._trafficMirrorSessionDescription;
  }

  // traffic_mirror_session_name - computed: false, optional: true, required: false
  private _trafficMirrorSessionName?: string; 
  public get trafficMirrorSessionName() {
    return this.getStringAttribute('traffic_mirror_session_name');
  }
  public set trafficMirrorSessionName(value: string) {
    this._trafficMirrorSessionName = value;
  }
  public resetTrafficMirrorSessionName() {
    this._trafficMirrorSessionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficMirrorSessionNameInput() {
    return this._trafficMirrorSessionName;
  }

  // traffic_mirror_source_ids - computed: false, optional: false, required: true
  private _trafficMirrorSourceIds?: string[]; 
  public get trafficMirrorSourceIds() {
    return this.getListAttribute('traffic_mirror_source_ids');
  }
  public set trafficMirrorSourceIds(value: string[]) {
    this._trafficMirrorSourceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficMirrorSourceIdsInput() {
    return this._trafficMirrorSourceIds;
  }

  // traffic_mirror_target_id - computed: false, optional: false, required: true
  private _trafficMirrorTargetId?: string; 
  public get trafficMirrorTargetId() {
    return this.getStringAttribute('traffic_mirror_target_id');
  }
  public set trafficMirrorTargetId(value: string) {
    this._trafficMirrorTargetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficMirrorTargetIdInput() {
    return this._trafficMirrorTargetId;
  }

  // traffic_mirror_target_type - computed: false, optional: false, required: true
  private _trafficMirrorTargetType?: string; 
  public get trafficMirrorTargetType() {
    return this.getStringAttribute('traffic_mirror_target_type');
  }
  public set trafficMirrorTargetType(value: string) {
    this._trafficMirrorTargetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficMirrorTargetTypeInput() {
    return this._trafficMirrorTargetType;
  }

  // virtual_network_id - computed: true, optional: true, required: false
  private _virtualNetworkId?: number; 
  public get virtualNetworkId() {
    return this.getNumberAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: number) {
    this._virtualNetworkId = value;
  }
  public resetVirtualNetworkId() {
    this._virtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcTrafficMirrorSessionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcTrafficMirrorSessionTimeouts) {
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
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      packet_length: cdktf.numberToTerraform(this._packetLength),
      priority: cdktf.numberToTerraform(this._priority),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      traffic_mirror_filter_id: cdktf.stringToTerraform(this._trafficMirrorFilterId),
      traffic_mirror_session_description: cdktf.stringToTerraform(this._trafficMirrorSessionDescription),
      traffic_mirror_session_name: cdktf.stringToTerraform(this._trafficMirrorSessionName),
      traffic_mirror_source_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trafficMirrorSourceIds),
      traffic_mirror_target_id: cdktf.stringToTerraform(this._trafficMirrorTargetId),
      traffic_mirror_target_type: cdktf.stringToTerraform(this._trafficMirrorTargetType),
      virtual_network_id: cdktf.numberToTerraform(this._virtualNetworkId),
      timeouts: vpcTrafficMirrorSessionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_length: {
        value: cdktf.numberToHclTerraform(this._packetLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
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
      traffic_mirror_filter_id: {
        value: cdktf.stringToHclTerraform(this._trafficMirrorFilterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_mirror_session_description: {
        value: cdktf.stringToHclTerraform(this._trafficMirrorSessionDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_mirror_session_name: {
        value: cdktf.stringToHclTerraform(this._trafficMirrorSessionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_mirror_source_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trafficMirrorSourceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      traffic_mirror_target_id: {
        value: cdktf.stringToHclTerraform(this._trafficMirrorTargetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_mirror_target_type: {
        value: cdktf.stringToHclTerraform(this._trafficMirrorTargetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_network_id: {
        value: cdktf.numberToHclTerraform(this._virtualNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: vpcTrafficMirrorSessionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpcTrafficMirrorSessionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
