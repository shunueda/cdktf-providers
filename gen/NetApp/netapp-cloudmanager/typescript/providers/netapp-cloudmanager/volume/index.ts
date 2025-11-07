// https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#aggregate_name Volume#aggregate_name}
  */
  readonly aggregateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#capacity_tier Volume#capacity_tier}
  */
  readonly capacityTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#client_id Volume#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#comment Volume#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#connector_ip Volume#connector_ip}
  */
  readonly connectorIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#deployment_mode Volume#deployment_mode}
  */
  readonly deploymentMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#enable_compression Volume#enable_compression}
  */
  readonly enableCompression?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#enable_deduplication Volume#enable_deduplication}
  */
  readonly enableDeduplication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#enable_thin_provisioning Volume#enable_thin_provisioning}
  */
  readonly enableThinProvisioning?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#export_policy_ip Volume#export_policy_ip}
  */
  readonly exportPolicyIp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#export_policy_name Volume#export_policy_name}
  */
  readonly exportPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#export_policy_nfs_version Volume#export_policy_nfs_version}
  */
  readonly exportPolicyNfsVersion?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#export_policy_rule_access_control Volume#export_policy_rule_access_control}
  */
  readonly exportPolicyRuleAccessControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#export_policy_rule_super_user Volume#export_policy_rule_super_user}
  */
  readonly exportPolicyRuleSuperUser?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#export_policy_type Volume#export_policy_type}
  */
  readonly exportPolicyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#id Volume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#igroups Volume#igroups}
  */
  readonly igroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#iops Volume#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#name Volume#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#os_name Volume#os_name}
  */
  readonly osName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#permission Volume#permission}
  */
  readonly permission?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#provider_volume_type Volume#provider_volume_type}
  */
  readonly providerVolumeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#share_name Volume#share_name}
  */
  readonly shareName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#size Volume#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#snapshot_policy_name Volume#snapshot_policy_name}
  */
  readonly snapshotPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#svm_name Volume#svm_name}
  */
  readonly svmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#tags Volume#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#tenant_id Volume#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#throughput Volume#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#tiering_policy Volume#tiering_policy}
  */
  readonly tieringPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#unit Volume#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#users Volume#users}
  */
  readonly users?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#volume_protocol Volume#volume_protocol}
  */
  readonly volumeProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#working_environment_id Volume#working_environment_id}
  */
  readonly workingEnvironmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#working_environment_name Volume#working_environment_name}
  */
  readonly workingEnvironmentName?: string;
  /**
  * initiator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#initiator Volume#initiator}
  */
  readonly initiator?: VolumeInitiator[] | cdktf.IResolvable;
  /**
  * snapshot_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#snapshot_policy Volume#snapshot_policy}
  */
  readonly snapshotPolicy?: VolumeSnapshotPolicy[] | cdktf.IResolvable;
}
export interface VolumeInitiator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#alias Volume#alias}
  */
  readonly alias: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#iqn Volume#iqn}
  */
  readonly iqn: string;
}

export function volumeInitiatorToTerraform(struct?: VolumeInitiator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    iqn: cdktf.stringToTerraform(struct!.iqn),
  }
}


export function volumeInitiatorToHclTerraform(struct?: VolumeInitiator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iqn: {
      value: cdktf.stringToHclTerraform(struct!.iqn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeInitiatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VolumeInitiator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._iqn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iqn = this._iqn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeInitiator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._iqn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._iqn = value.iqn;
    }
  }

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // iqn - computed: false, optional: false, required: true
  private _iqn?: string; 
  public get iqn() {
    return this.getStringAttribute('iqn');
  }
  public set iqn(value: string) {
    this._iqn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iqnInput() {
    return this._iqn;
  }
}

export class VolumeInitiatorList extends cdktf.ComplexList {
  public internalValue? : VolumeInitiator[] | cdktf.IResolvable

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
  public get(index: number): VolumeInitiatorOutputReference {
    return new VolumeInitiatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeSnapshotPolicySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#retention Volume#retention}
  */
  readonly retention: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#schedule_type Volume#schedule_type}
  */
  readonly scheduleType: string;
}

export function volumeSnapshotPolicyScheduleToTerraform(struct?: VolumeSnapshotPolicySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention: cdktf.numberToTerraform(struct!.retention),
    schedule_type: cdktf.stringToTerraform(struct!.scheduleType),
  }
}


export function volumeSnapshotPolicyScheduleToHclTerraform(struct?: VolumeSnapshotPolicySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retention: {
      value: cdktf.numberToHclTerraform(struct!.retention),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schedule_type: {
      value: cdktf.stringToHclTerraform(struct!.scheduleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeSnapshotPolicyScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VolumeSnapshotPolicySchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retention !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention;
    }
    if (this._scheduleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleType = this._scheduleType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeSnapshotPolicySchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._retention = undefined;
      this._scheduleType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._retention = value.retention;
      this._scheduleType = value.scheduleType;
    }
  }

  // retention - computed: false, optional: false, required: true
  private _retention?: number; 
  public get retention() {
    return this.getNumberAttribute('retention');
  }
  public set retention(value: number) {
    this._retention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // schedule_type - computed: false, optional: false, required: true
  private _scheduleType?: string; 
  public get scheduleType() {
    return this.getStringAttribute('schedule_type');
  }
  public set scheduleType(value: string) {
    this._scheduleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTypeInput() {
    return this._scheduleType;
  }
}

export class VolumeSnapshotPolicyScheduleList extends cdktf.ComplexList {
  public internalValue? : VolumeSnapshotPolicySchedule[] | cdktf.IResolvable

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
  public get(index: number): VolumeSnapshotPolicyScheduleOutputReference {
    return new VolumeSnapshotPolicyScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VolumeSnapshotPolicy {
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#schedule Volume#schedule}
  */
  readonly schedule?: VolumeSnapshotPolicySchedule[] | cdktf.IResolvable;
}

export function volumeSnapshotPolicyToTerraform(struct?: VolumeSnapshotPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schedule: cdktf.listMapper(volumeSnapshotPolicyScheduleToTerraform, true)(struct!.schedule),
  }
}


export function volumeSnapshotPolicyToHclTerraform(struct?: VolumeSnapshotPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schedule: {
      value: cdktf.listMapperHcl(volumeSnapshotPolicyScheduleToHclTerraform, true)(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "VolumeSnapshotPolicyScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VolumeSnapshotPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VolumeSnapshotPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VolumeSnapshotPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schedule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schedule.internalValue = value.schedule;
    }
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new VolumeSnapshotPolicyScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: VolumeSnapshotPolicySchedule[] | cdktf.IResolvable) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}

export class VolumeSnapshotPolicyList extends cdktf.ComplexList {
  public internalValue? : VolumeSnapshotPolicy[] | cdktf.IResolvable

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
  public get(index: number): VolumeSnapshotPolicyOutputReference {
    return new VolumeSnapshotPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume netapp-cloudmanager_volume}
*/
export class Volume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-cloudmanager_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Volume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Volume to import
  * @param importFromId The id of the existing Volume that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Volume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-cloudmanager_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/26.0.0/docs/resources/volume netapp-cloudmanager_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VolumeConfig
  */
  public constructor(scope: Construct, id: string, config: VolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-cloudmanager_volume',
      terraformGeneratorMetadata: {
        providerName: 'netapp-cloudmanager',
        providerVersion: '26.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggregateName = config.aggregateName;
    this._capacityTier = config.capacityTier;
    this._clientId = config.clientId;
    this._comment = config.comment;
    this._connectorIp = config.connectorIp;
    this._deploymentMode = config.deploymentMode;
    this._enableCompression = config.enableCompression;
    this._enableDeduplication = config.enableDeduplication;
    this._enableThinProvisioning = config.enableThinProvisioning;
    this._exportPolicyIp = config.exportPolicyIp;
    this._exportPolicyName = config.exportPolicyName;
    this._exportPolicyNfsVersion = config.exportPolicyNfsVersion;
    this._exportPolicyRuleAccessControl = config.exportPolicyRuleAccessControl;
    this._exportPolicyRuleSuperUser = config.exportPolicyRuleSuperUser;
    this._exportPolicyType = config.exportPolicyType;
    this._id = config.id;
    this._igroups = config.igroups;
    this._iops = config.iops;
    this._name = config.name;
    this._osName = config.osName;
    this._permission = config.permission;
    this._providerVolumeType = config.providerVolumeType;
    this._shareName = config.shareName;
    this._size = config.size;
    this._snapshotPolicyName = config.snapshotPolicyName;
    this._svmName = config.svmName;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
    this._throughput = config.throughput;
    this._tieringPolicy = config.tieringPolicy;
    this._unit = config.unit;
    this._users = config.users;
    this._volumeProtocol = config.volumeProtocol;
    this._workingEnvironmentId = config.workingEnvironmentId;
    this._workingEnvironmentName = config.workingEnvironmentName;
    this._initiator.internalValue = config.initiator;
    this._snapshotPolicy.internalValue = config.snapshotPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregate_name - computed: true, optional: true, required: false
  private _aggregateName?: string; 
  public get aggregateName() {
    return this.getStringAttribute('aggregate_name');
  }
  public set aggregateName(value: string) {
    this._aggregateName = value;
  }
  public resetAggregateName() {
    this._aggregateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateNameInput() {
    return this._aggregateName;
  }

  // capacity_tier - computed: false, optional: true, required: false
  private _capacityTier?: string; 
  public get capacityTier() {
    return this.getStringAttribute('capacity_tier');
  }
  public set capacityTier(value: string) {
    this._capacityTier = value;
  }
  public resetCapacityTier() {
    this._capacityTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityTierInput() {
    return this._capacityTier;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // connector_ip - computed: false, optional: true, required: false
  private _connectorIp?: string; 
  public get connectorIp() {
    return this.getStringAttribute('connector_ip');
  }
  public set connectorIp(value: string) {
    this._connectorIp = value;
  }
  public resetConnectorIp() {
    this._connectorIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorIpInput() {
    return this._connectorIp;
  }

  // deployment_mode - computed: false, optional: true, required: false
  private _deploymentMode?: string; 
  public get deploymentMode() {
    return this.getStringAttribute('deployment_mode');
  }
  public set deploymentMode(value: string) {
    this._deploymentMode = value;
  }
  public resetDeploymentMode() {
    this._deploymentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentModeInput() {
    return this._deploymentMode;
  }

  // enable_compression - computed: false, optional: true, required: false
  private _enableCompression?: boolean | cdktf.IResolvable; 
  public get enableCompression() {
    return this.getBooleanAttribute('enable_compression');
  }
  public set enableCompression(value: boolean | cdktf.IResolvable) {
    this._enableCompression = value;
  }
  public resetEnableCompression() {
    this._enableCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCompressionInput() {
    return this._enableCompression;
  }

  // enable_deduplication - computed: false, optional: true, required: false
  private _enableDeduplication?: boolean | cdktf.IResolvable; 
  public get enableDeduplication() {
    return this.getBooleanAttribute('enable_deduplication');
  }
  public set enableDeduplication(value: boolean | cdktf.IResolvable) {
    this._enableDeduplication = value;
  }
  public resetEnableDeduplication() {
    this._enableDeduplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDeduplicationInput() {
    return this._enableDeduplication;
  }

  // enable_thin_provisioning - computed: false, optional: true, required: false
  private _enableThinProvisioning?: boolean | cdktf.IResolvable; 
  public get enableThinProvisioning() {
    return this.getBooleanAttribute('enable_thin_provisioning');
  }
  public set enableThinProvisioning(value: boolean | cdktf.IResolvable) {
    this._enableThinProvisioning = value;
  }
  public resetEnableThinProvisioning() {
    this._enableThinProvisioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableThinProvisioningInput() {
    return this._enableThinProvisioning;
  }

  // export_policy_ip - computed: false, optional: true, required: false
  private _exportPolicyIp?: string[]; 
  public get exportPolicyIp() {
    return this.getListAttribute('export_policy_ip');
  }
  public set exportPolicyIp(value: string[]) {
    this._exportPolicyIp = value;
  }
  public resetExportPolicyIp() {
    this._exportPolicyIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyIpInput() {
    return this._exportPolicyIp;
  }

  // export_policy_name - computed: false, optional: true, required: false
  private _exportPolicyName?: string; 
  public get exportPolicyName() {
    return this.getStringAttribute('export_policy_name');
  }
  public set exportPolicyName(value: string) {
    this._exportPolicyName = value;
  }
  public resetExportPolicyName() {
    this._exportPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyNameInput() {
    return this._exportPolicyName;
  }

  // export_policy_nfs_version - computed: false, optional: true, required: false
  private _exportPolicyNfsVersion?: string[]; 
  public get exportPolicyNfsVersion() {
    return cdktf.Fn.tolist(this.getListAttribute('export_policy_nfs_version'));
  }
  public set exportPolicyNfsVersion(value: string[]) {
    this._exportPolicyNfsVersion = value;
  }
  public resetExportPolicyNfsVersion() {
    this._exportPolicyNfsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyNfsVersionInput() {
    return this._exportPolicyNfsVersion;
  }

  // export_policy_rule_access_control - computed: false, optional: true, required: false
  private _exportPolicyRuleAccessControl?: string; 
  public get exportPolicyRuleAccessControl() {
    return this.getStringAttribute('export_policy_rule_access_control');
  }
  public set exportPolicyRuleAccessControl(value: string) {
    this._exportPolicyRuleAccessControl = value;
  }
  public resetExportPolicyRuleAccessControl() {
    this._exportPolicyRuleAccessControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyRuleAccessControlInput() {
    return this._exportPolicyRuleAccessControl;
  }

  // export_policy_rule_super_user - computed: false, optional: true, required: false
  private _exportPolicyRuleSuperUser?: boolean | cdktf.IResolvable; 
  public get exportPolicyRuleSuperUser() {
    return this.getBooleanAttribute('export_policy_rule_super_user');
  }
  public set exportPolicyRuleSuperUser(value: boolean | cdktf.IResolvable) {
    this._exportPolicyRuleSuperUser = value;
  }
  public resetExportPolicyRuleSuperUser() {
    this._exportPolicyRuleSuperUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyRuleSuperUserInput() {
    return this._exportPolicyRuleSuperUser;
  }

  // export_policy_type - computed: false, optional: true, required: false
  private _exportPolicyType?: string; 
  public get exportPolicyType() {
    return this.getStringAttribute('export_policy_type');
  }
  public set exportPolicyType(value: string) {
    this._exportPolicyType = value;
  }
  public resetExportPolicyType() {
    this._exportPolicyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyTypeInput() {
    return this._exportPolicyType;
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

  // igroups - computed: false, optional: true, required: false
  private _igroups?: string[]; 
  public get igroups() {
    return cdktf.Fn.tolist(this.getListAttribute('igroups'));
  }
  public set igroups(value: string[]) {
    this._igroups = value;
  }
  public resetIgroups() {
    this._igroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igroupsInput() {
    return this._igroups;
  }

  // iops - computed: false, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
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

  // os_name - computed: false, optional: true, required: false
  private _osName?: string; 
  public get osName() {
    return this.getStringAttribute('os_name');
  }
  public set osName(value: string) {
    this._osName = value;
  }
  public resetOsName() {
    this._osName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osNameInput() {
    return this._osName;
  }

  // permission - computed: false, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // provider_volume_type - computed: false, optional: false, required: true
  private _providerVolumeType?: string; 
  public get providerVolumeType() {
    return this.getStringAttribute('provider_volume_type');
  }
  public set providerVolumeType(value: string) {
    this._providerVolumeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerVolumeTypeInput() {
    return this._providerVolumeType;
  }

  // share_name - computed: false, optional: true, required: false
  private _shareName?: string; 
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
  public set shareName(value: string) {
    this._shareName = value;
  }
  public resetShareName() {
    this._shareName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareNameInput() {
    return this._shareName;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // snapshot_policy_name - computed: false, optional: true, required: false
  private _snapshotPolicyName?: string; 
  public get snapshotPolicyName() {
    return this.getStringAttribute('snapshot_policy_name');
  }
  public set snapshotPolicyName(value: string) {
    this._snapshotPolicyName = value;
  }
  public resetSnapshotPolicyName() {
    this._snapshotPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPolicyNameInput() {
    return this._snapshotPolicyName;
  }

  // svm_name - computed: false, optional: true, required: false
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  public resetSvmName() {
    this._svmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
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

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // throughput - computed: false, optional: true, required: false
  private _throughput?: number; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // tiering_policy - computed: false, optional: true, required: false
  private _tieringPolicy?: string; 
  public get tieringPolicy() {
    return this.getStringAttribute('tiering_policy');
  }
  public set tieringPolicy(value: string) {
    this._tieringPolicy = value;
  }
  public resetTieringPolicy() {
    this._tieringPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieringPolicyInput() {
    return this._tieringPolicy;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
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

  // volume_protocol - computed: false, optional: true, required: false
  private _volumeProtocol?: string; 
  public get volumeProtocol() {
    return this.getStringAttribute('volume_protocol');
  }
  public set volumeProtocol(value: string) {
    this._volumeProtocol = value;
  }
  public resetVolumeProtocol() {
    this._volumeProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeProtocolInput() {
    return this._volumeProtocol;
  }

  // working_environment_id - computed: false, optional: true, required: false
  private _workingEnvironmentId?: string; 
  public get workingEnvironmentId() {
    return this.getStringAttribute('working_environment_id');
  }
  public set workingEnvironmentId(value: string) {
    this._workingEnvironmentId = value;
  }
  public resetWorkingEnvironmentId() {
    this._workingEnvironmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingEnvironmentIdInput() {
    return this._workingEnvironmentId;
  }

  // working_environment_name - computed: false, optional: true, required: false
  private _workingEnvironmentName?: string; 
  public get workingEnvironmentName() {
    return this.getStringAttribute('working_environment_name');
  }
  public set workingEnvironmentName(value: string) {
    this._workingEnvironmentName = value;
  }
  public resetWorkingEnvironmentName() {
    this._workingEnvironmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingEnvironmentNameInput() {
    return this._workingEnvironmentName;
  }

  // initiator - computed: false, optional: true, required: false
  private _initiator = new VolumeInitiatorList(this, "initiator", true);
  public get initiator() {
    return this._initiator;
  }
  public putInitiator(value: VolumeInitiator[] | cdktf.IResolvable) {
    this._initiator.internalValue = value;
  }
  public resetInitiator() {
    this._initiator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorInput() {
    return this._initiator.internalValue;
  }

  // snapshot_policy - computed: false, optional: true, required: false
  private _snapshotPolicy = new VolumeSnapshotPolicyList(this, "snapshot_policy", true);
  public get snapshotPolicy() {
    return this._snapshotPolicy;
  }
  public putSnapshotPolicy(value: VolumeSnapshotPolicy[] | cdktf.IResolvable) {
    this._snapshotPolicy.internalValue = value;
  }
  public resetSnapshotPolicy() {
    this._snapshotPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPolicyInput() {
    return this._snapshotPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregate_name: cdktf.stringToTerraform(this._aggregateName),
      capacity_tier: cdktf.stringToTerraform(this._capacityTier),
      client_id: cdktf.stringToTerraform(this._clientId),
      comment: cdktf.stringToTerraform(this._comment),
      connector_ip: cdktf.stringToTerraform(this._connectorIp),
      deployment_mode: cdktf.stringToTerraform(this._deploymentMode),
      enable_compression: cdktf.booleanToTerraform(this._enableCompression),
      enable_deduplication: cdktf.booleanToTerraform(this._enableDeduplication),
      enable_thin_provisioning: cdktf.booleanToTerraform(this._enableThinProvisioning),
      export_policy_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._exportPolicyIp),
      export_policy_name: cdktf.stringToTerraform(this._exportPolicyName),
      export_policy_nfs_version: cdktf.listMapper(cdktf.stringToTerraform, false)(this._exportPolicyNfsVersion),
      export_policy_rule_access_control: cdktf.stringToTerraform(this._exportPolicyRuleAccessControl),
      export_policy_rule_super_user: cdktf.booleanToTerraform(this._exportPolicyRuleSuperUser),
      export_policy_type: cdktf.stringToTerraform(this._exportPolicyType),
      id: cdktf.stringToTerraform(this._id),
      igroups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._igroups),
      iops: cdktf.numberToTerraform(this._iops),
      name: cdktf.stringToTerraform(this._name),
      os_name: cdktf.stringToTerraform(this._osName),
      permission: cdktf.stringToTerraform(this._permission),
      provider_volume_type: cdktf.stringToTerraform(this._providerVolumeType),
      share_name: cdktf.stringToTerraform(this._shareName),
      size: cdktf.numberToTerraform(this._size),
      snapshot_policy_name: cdktf.stringToTerraform(this._snapshotPolicyName),
      svm_name: cdktf.stringToTerraform(this._svmName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      throughput: cdktf.numberToTerraform(this._throughput),
      tiering_policy: cdktf.stringToTerraform(this._tieringPolicy),
      unit: cdktf.stringToTerraform(this._unit),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
      volume_protocol: cdktf.stringToTerraform(this._volumeProtocol),
      working_environment_id: cdktf.stringToTerraform(this._workingEnvironmentId),
      working_environment_name: cdktf.stringToTerraform(this._workingEnvironmentName),
      initiator: cdktf.listMapper(volumeInitiatorToTerraform, true)(this._initiator.internalValue),
      snapshot_policy: cdktf.listMapper(volumeSnapshotPolicyToTerraform, true)(this._snapshotPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregate_name: {
        value: cdktf.stringToHclTerraform(this._aggregateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity_tier: {
        value: cdktf.stringToHclTerraform(this._capacityTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connector_ip: {
        value: cdktf.stringToHclTerraform(this._connectorIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_mode: {
        value: cdktf.stringToHclTerraform(this._deploymentMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_compression: {
        value: cdktf.booleanToHclTerraform(this._enableCompression),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_deduplication: {
        value: cdktf.booleanToHclTerraform(this._enableDeduplication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_thin_provisioning: {
        value: cdktf.booleanToHclTerraform(this._enableThinProvisioning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      export_policy_ip: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._exportPolicyIp),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      export_policy_name: {
        value: cdktf.stringToHclTerraform(this._exportPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export_policy_nfs_version: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._exportPolicyNfsVersion),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      export_policy_rule_access_control: {
        value: cdktf.stringToHclTerraform(this._exportPolicyRuleAccessControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export_policy_rule_super_user: {
        value: cdktf.booleanToHclTerraform(this._exportPolicyRuleSuperUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      export_policy_type: {
        value: cdktf.stringToHclTerraform(this._exportPolicyType),
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
      igroups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._igroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      iops: {
        value: cdktf.numberToHclTerraform(this._iops),
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
      os_name: {
        value: cdktf.stringToHclTerraform(this._osName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permission: {
        value: cdktf.stringToHclTerraform(this._permission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_volume_type: {
        value: cdktf.stringToHclTerraform(this._providerVolumeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      share_name: {
        value: cdktf.stringToHclTerraform(this._shareName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snapshot_policy_name: {
        value: cdktf.stringToHclTerraform(this._snapshotPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
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
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      throughput: {
        value: cdktf.numberToHclTerraform(this._throughput),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tiering_policy: {
        value: cdktf.stringToHclTerraform(this._tieringPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit: {
        value: cdktf.stringToHclTerraform(this._unit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._users),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      volume_protocol: {
        value: cdktf.stringToHclTerraform(this._volumeProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      working_environment_id: {
        value: cdktf.stringToHclTerraform(this._workingEnvironmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      working_environment_name: {
        value: cdktf.stringToHclTerraform(this._workingEnvironmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initiator: {
        value: cdktf.listMapperHcl(volumeInitiatorToHclTerraform, true)(this._initiator.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VolumeInitiatorList",
      },
      snapshot_policy: {
        value: cdktf.listMapperHcl(volumeSnapshotPolicyToHclTerraform, true)(this._snapshotPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VolumeSnapshotPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
