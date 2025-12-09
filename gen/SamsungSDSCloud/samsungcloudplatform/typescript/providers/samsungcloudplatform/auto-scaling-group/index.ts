// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/auto_scaling_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoScalingGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auto-Scaling Group name. (3 to 20 using English letters, numbers and -)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/auto_scaling_group#asg_name AutoScalingGroup#asg_name}
  */
  readonly asgName: string;
  /**
  * Availability zone name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/auto_scaling_group#availability_zone_name AutoScalingGroup#availability_zone_name}
  */
  readonly availabilityZoneName?: string;
  /**
  * Desired server count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/auto_scaling_group#desired_server_count AutoScalingGroup#desired_server_count}
  */
  readonly desiredServerCount: number;
  /**
  * Desired server count editable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/auto_scaling_group#desired_server_count_editable AutoScalingGroup#desired_server_count_editable}
  */
  readonly desiredServerCountEditable: boolean | cdktf.IResolvable;
  /**
  * File Storage ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/auto_scaling_group#file_storage_id AutoScalingGroup#file_storage_id}
  */
  readonly fileStorageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/auto_scaling_group#id AutoScalingGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Launch Configuration ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/auto_scaling_group#lc_id AutoScalingGroup#lc_id}
  */
  readonly lcId: string;
  /**
  * Max server count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/auto_scaling_group#max_server_count AutoScalingGroup#max_server_count}
  */
  readonly maxServerCount: number;
  /**
  * Min server count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/auto_scaling_group#min_server_count AutoScalingGroup#min_server_count}
  */
  readonly minServerCount: number;
  /**
  * Enable multi availability zone feature for this Auto-Scaling Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/auto_scaling_group#multi_availability_zone_enabled AutoScalingGroup#multi_availability_zone_enabled}
  */
  readonly multiAvailabilityZoneEnabled?: boolean | cdktf.IResolvable;
  /**
  * Security Group ID list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/auto_scaling_group#security_group_ids AutoScalingGroup#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Server name prefix. (3 to 26 characters, starts with a lowercase letter, and uses lowercase letters, numbers, and -)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/auto_scaling_group#server_name_prefix AutoScalingGroup#server_name_prefix}
  */
  readonly serverNamePrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/auto_scaling_group#tags AutoScalingGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * vpc_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/auto_scaling_group#vpc_info AutoScalingGroup#vpc_info}
  */
  readonly vpcInfo: AutoScalingGroupVpcInfo;
}
export interface AutoScalingGroupVpcInfo {
  /**
  * Local subnet ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/auto_scaling_group#local_subnet_id AutoScalingGroup#local_subnet_id}
  */
  readonly localSubnetId?: string;
  /**
  * NAT enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/auto_scaling_group#nat_enabled AutoScalingGroup#nat_enabled}
  */
  readonly natEnabled: boolean | cdktf.IResolvable;
  /**
  * Subnet ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/auto_scaling_group#subnet_id AutoScalingGroup#subnet_id}
  */
  readonly subnetId: string;
  /**
  * VPC ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/auto_scaling_group#vpc_id AutoScalingGroup#vpc_id}
  */
  readonly vpcId: string;
}

export function autoScalingGroupVpcInfoToTerraform(struct?: AutoScalingGroupVpcInfoOutputReference | AutoScalingGroupVpcInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_subnet_id: cdktf.stringToTerraform(struct!.localSubnetId),
    nat_enabled: cdktf.booleanToTerraform(struct!.natEnabled),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function autoScalingGroupVpcInfoToHclTerraform(struct?: AutoScalingGroupVpcInfoOutputReference | AutoScalingGroupVpcInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.localSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.natEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoScalingGroupVpcInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutoScalingGroupVpcInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSubnetId = this._localSubnetId;
    }
    if (this._natEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.natEnabled = this._natEnabled;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoScalingGroupVpcInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localSubnetId = undefined;
      this._natEnabled = undefined;
      this._subnetId = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localSubnetId = value.localSubnetId;
      this._natEnabled = value.natEnabled;
      this._subnetId = value.subnetId;
      this._vpcId = value.vpcId;
    }
  }

  // local_subnet_id - computed: false, optional: true, required: false
  private _localSubnetId?: string; 
  public get localSubnetId() {
    return this.getStringAttribute('local_subnet_id');
  }
  public set localSubnetId(value: string) {
    this._localSubnetId = value;
  }
  public resetLocalSubnetId() {
    this._localSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSubnetIdInput() {
    return this._localSubnetId;
  }

  // nat_enabled - computed: false, optional: false, required: true
  private _natEnabled?: boolean | cdktf.IResolvable; 
  public get natEnabled() {
    return this.getBooleanAttribute('nat_enabled');
  }
  public set natEnabled(value: boolean | cdktf.IResolvable) {
    this._natEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natEnabledInput() {
    return this._natEnabled;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/auto_scaling_group samsungcloudplatform_auto_scaling_group}
*/
export class AutoScalingGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_auto_scaling_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutoScalingGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutoScalingGroup to import
  * @param importFromId The id of the existing AutoScalingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/auto_scaling_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutoScalingGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_auto_scaling_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/auto_scaling_group samsungcloudplatform_auto_scaling_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoScalingGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AutoScalingGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_auto_scaling_group',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.16.0',
        providerVersionConstraint: '3.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asgName = config.asgName;
    this._availabilityZoneName = config.availabilityZoneName;
    this._desiredServerCount = config.desiredServerCount;
    this._desiredServerCountEditable = config.desiredServerCountEditable;
    this._fileStorageId = config.fileStorageId;
    this._id = config.id;
    this._lcId = config.lcId;
    this._maxServerCount = config.maxServerCount;
    this._minServerCount = config.minServerCount;
    this._multiAvailabilityZoneEnabled = config.multiAvailabilityZoneEnabled;
    this._securityGroupIds = config.securityGroupIds;
    this._serverNamePrefix = config.serverNamePrefix;
    this._tags = config.tags;
    this._vpcInfo.internalValue = config.vpcInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asg_id - computed: true, optional: false, required: false
  public get asgId() {
    return this.getStringAttribute('asg_id');
  }

  // asg_name - computed: false, optional: false, required: true
  private _asgName?: string; 
  public get asgName() {
    return this.getStringAttribute('asg_name');
  }
  public set asgName(value: string) {
    this._asgName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asgNameInput() {
    return this._asgName;
  }

  // asg_state - computed: true, optional: false, required: false
  public get asgState() {
    return this.getStringAttribute('asg_state');
  }

  // availability_zone_name - computed: false, optional: true, required: false
  private _availabilityZoneName?: string; 
  public get availabilityZoneName() {
    return this.getStringAttribute('availability_zone_name');
  }
  public set availabilityZoneName(value: string) {
    this._availabilityZoneName = value;
  }
  public resetAvailabilityZoneName() {
    this._availabilityZoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneNameInput() {
    return this._availabilityZoneName;
  }

  // block_id - computed: true, optional: false, required: false
  public get blockId() {
    return this.getStringAttribute('block_id');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // desired_server_count - computed: false, optional: false, required: true
  private _desiredServerCount?: number; 
  public get desiredServerCount() {
    return this.getNumberAttribute('desired_server_count');
  }
  public set desiredServerCount(value: number) {
    this._desiredServerCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredServerCountInput() {
    return this._desiredServerCount;
  }

  // desired_server_count_editable - computed: false, optional: false, required: true
  private _desiredServerCountEditable?: boolean | cdktf.IResolvable; 
  public get desiredServerCountEditable() {
    return this.getBooleanAttribute('desired_server_count_editable');
  }
  public set desiredServerCountEditable(value: boolean | cdktf.IResolvable) {
    this._desiredServerCountEditable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredServerCountEditableInput() {
    return this._desiredServerCountEditable;
  }

  // dns_enabled - computed: true, optional: false, required: false
  public get dnsEnabled() {
    return this.getBooleanAttribute('dns_enabled');
  }

  // file_storage_id - computed: false, optional: true, required: false
  private _fileStorageId?: string; 
  public get fileStorageId() {
    return this.getStringAttribute('file_storage_id');
  }
  public set fileStorageId(value: string) {
    this._fileStorageId = value;
  }
  public resetFileStorageId() {
    this._fileStorageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileStorageIdInput() {
    return this._fileStorageId;
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

  // is_terminating - computed: true, optional: false, required: false
  public get isTerminating() {
    return this.getBooleanAttribute('is_terminating');
  }

  // lc_id - computed: false, optional: false, required: true
  private _lcId?: string; 
  public get lcId() {
    return this.getStringAttribute('lc_id');
  }
  public set lcId(value: string) {
    this._lcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lcIdInput() {
    return this._lcId;
  }

  // lc_name - computed: true, optional: false, required: false
  public get lcName() {
    return this.getStringAttribute('lc_name');
  }

  // max_server_count - computed: false, optional: false, required: true
  private _maxServerCount?: number; 
  public get maxServerCount() {
    return this.getNumberAttribute('max_server_count');
  }
  public set maxServerCount(value: number) {
    this._maxServerCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxServerCountInput() {
    return this._maxServerCount;
  }

  // min_server_count - computed: false, optional: false, required: true
  private _minServerCount?: number; 
  public get minServerCount() {
    return this.getNumberAttribute('min_server_count');
  }
  public set minServerCount(value: number) {
    this._minServerCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minServerCountInput() {
    return this._minServerCount;
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // multi_availability_zone_enabled - computed: false, optional: true, required: false
  private _multiAvailabilityZoneEnabled?: boolean | cdktf.IResolvable; 
  public get multiAvailabilityZoneEnabled() {
    return this.getBooleanAttribute('multi_availability_zone_enabled');
  }
  public set multiAvailabilityZoneEnabled(value: boolean | cdktf.IResolvable) {
    this._multiAvailabilityZoneEnabled = value;
  }
  public resetMultiAvailabilityZoneEnabled() {
    this._multiAvailabilityZoneEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAvailabilityZoneEnabledInput() {
    return this._multiAvailabilityZoneEnabled;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // server_name_prefix - computed: false, optional: false, required: true
  private _serverNamePrefix?: string; 
  public get serverNamePrefix() {
    return this.getStringAttribute('server_name_prefix');
  }
  public set serverNamePrefix(value: string) {
    this._serverNamePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNamePrefixInput() {
    return this._serverNamePrefix;
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // service_zone_id - computed: true, optional: false, required: false
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
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

  // vpc_info - computed: false, optional: false, required: true
  private _vpcInfo = new AutoScalingGroupVpcInfoOutputReference(this, "vpc_info");
  public get vpcInfo() {
    return this._vpcInfo;
  }
  public putVpcInfo(value: AutoScalingGroupVpcInfo) {
    this._vpcInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInfoInput() {
    return this._vpcInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asg_name: cdktf.stringToTerraform(this._asgName),
      availability_zone_name: cdktf.stringToTerraform(this._availabilityZoneName),
      desired_server_count: cdktf.numberToTerraform(this._desiredServerCount),
      desired_server_count_editable: cdktf.booleanToTerraform(this._desiredServerCountEditable),
      file_storage_id: cdktf.stringToTerraform(this._fileStorageId),
      id: cdktf.stringToTerraform(this._id),
      lc_id: cdktf.stringToTerraform(this._lcId),
      max_server_count: cdktf.numberToTerraform(this._maxServerCount),
      min_server_count: cdktf.numberToTerraform(this._minServerCount),
      multi_availability_zone_enabled: cdktf.booleanToTerraform(this._multiAvailabilityZoneEnabled),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      server_name_prefix: cdktf.stringToTerraform(this._serverNamePrefix),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_info: autoScalingGroupVpcInfoToTerraform(this._vpcInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asg_name: {
        value: cdktf.stringToHclTerraform(this._asgName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zone_name: {
        value: cdktf.stringToHclTerraform(this._availabilityZoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desired_server_count: {
        value: cdktf.numberToHclTerraform(this._desiredServerCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      desired_server_count_editable: {
        value: cdktf.booleanToHclTerraform(this._desiredServerCountEditable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      file_storage_id: {
        value: cdktf.stringToHclTerraform(this._fileStorageId),
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
      lc_id: {
        value: cdktf.stringToHclTerraform(this._lcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_server_count: {
        value: cdktf.numberToHclTerraform(this._maxServerCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_server_count: {
        value: cdktf.numberToHclTerraform(this._minServerCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multi_availability_zone_enabled: {
        value: cdktf.booleanToHclTerraform(this._multiAvailabilityZoneEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      server_name_prefix: {
        value: cdktf.stringToHclTerraform(this._serverNamePrefix),
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
      vpc_info: {
        value: autoScalingGroupVpcInfoToHclTerraform(this._vpcInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutoScalingGroupVpcInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
