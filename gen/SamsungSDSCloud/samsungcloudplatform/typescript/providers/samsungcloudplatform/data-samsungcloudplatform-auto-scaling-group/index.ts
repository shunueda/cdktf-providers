// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/auto_scaling_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformAutoScalingGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auto-Scaling Group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/auto_scaling_group#asg_id DataSamsungcloudplatformAutoScalingGroup#asg_id}
  */
  readonly asgId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/auto_scaling_group#id DataSamsungcloudplatformAutoScalingGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataSamsungcloudplatformAutoScalingGroupVpcInfo {
}

export function dataSamsungcloudplatformAutoScalingGroupVpcInfoToTerraform(struct?: DataSamsungcloudplatformAutoScalingGroupVpcInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformAutoScalingGroupVpcInfoToHclTerraform(struct?: DataSamsungcloudplatformAutoScalingGroupVpcInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformAutoScalingGroupVpcInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformAutoScalingGroupVpcInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformAutoScalingGroupVpcInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // local_subnet_id - computed: true, optional: false, required: false
  public get localSubnetId() {
    return this.getStringAttribute('local_subnet_id');
  }

  // nat_enabled - computed: true, optional: false, required: false
  public get natEnabled() {
    return this.getBooleanAttribute('nat_enabled');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataSamsungcloudplatformAutoScalingGroupVpcInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformAutoScalingGroupVpcInfoOutputReference {
    return new DataSamsungcloudplatformAutoScalingGroupVpcInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/auto_scaling_group samsungcloudplatform_auto_scaling_group}
*/
export class DataSamsungcloudplatformAutoScalingGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_auto_scaling_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformAutoScalingGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformAutoScalingGroup to import
  * @param importFromId The id of the existing DataSamsungcloudplatformAutoScalingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/auto_scaling_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformAutoScalingGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_auto_scaling_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/auto_scaling_group samsungcloudplatform_auto_scaling_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformAutoScalingGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformAutoScalingGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_auto_scaling_group',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asgId = config.asgId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asg_id - computed: false, optional: false, required: true
  private _asgId?: string; 
  public get asgId() {
    return this.getStringAttribute('asg_id');
  }
  public set asgId(value: string) {
    this._asgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asgIdInput() {
    return this._asgId;
  }

  // asg_name - computed: true, optional: false, required: false
  public get asgName() {
    return this.getStringAttribute('asg_name');
  }

  // asg_state - computed: true, optional: false, required: false
  public get asgState() {
    return this.getStringAttribute('asg_state');
  }

  // availability_zone_name - computed: true, optional: false, required: false
  public get availabilityZoneName() {
    return this.getStringAttribute('availability_zone_name');
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

  // desired_server_count - computed: true, optional: false, required: false
  public get desiredServerCount() {
    return this.getNumberAttribute('desired_server_count');
  }

  // desired_server_count_editable - computed: true, optional: false, required: false
  public get desiredServerCountEditable() {
    return this.getBooleanAttribute('desired_server_count_editable');
  }

  // dns_enabled - computed: true, optional: false, required: false
  public get dnsEnabled() {
    return this.getBooleanAttribute('dns_enabled');
  }

  // file_storage_id - computed: true, optional: false, required: false
  public get fileStorageId() {
    return this.getStringAttribute('file_storage_id');
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

  // lc_id - computed: true, optional: false, required: false
  public get lcId() {
    return this.getStringAttribute('lc_id');
  }

  // lc_name - computed: true, optional: false, required: false
  public get lcName() {
    return this.getStringAttribute('lc_name');
  }

  // max_server_count - computed: true, optional: false, required: false
  public get maxServerCount() {
    return this.getNumberAttribute('max_server_count');
  }

  // min_server_count - computed: true, optional: false, required: false
  public get minServerCount() {
    return this.getNumberAttribute('min_server_count');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // multi_availability_zone_enabled - computed: true, optional: false, required: false
  public get multiAvailabilityZoneEnabled() {
    return this.getBooleanAttribute('multi_availability_zone_enabled');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // server_name_prefix - computed: true, optional: false, required: false
  public get serverNamePrefix() {
    return this.getStringAttribute('server_name_prefix');
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // service_zone_id - computed: true, optional: false, required: false
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }

  // vpc_info - computed: true, optional: false, required: false
  private _vpcInfo = new DataSamsungcloudplatformAutoScalingGroupVpcInfoList(this, "vpc_info", false);
  public get vpcInfo() {
    return this._vpcInfo;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asg_id: cdktf.stringToTerraform(this._asgId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asg_id: {
        value: cdktf.stringToHclTerraform(this._asgId),
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
