import * as cdktf from 'cdktf';
import { DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecMembershipReconfiguration,
dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecMembershipReconfigurationToTerraform,
dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecMembershipReconfigurationToHclTerraform,
DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecMembershipReconfigurationOutputReference,
DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecRoleProbe,
dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecRoleProbeToTerraform,
dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecRoleProbeToHclTerraform,
DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecRoleProbeOutputReference,
DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsPodSpec,
dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsPodSpecToTerraform,
dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsPodSpecToHclTerraform,
DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsPodSpecOutputReference,
DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsPostStartSpec,
dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsPostStartSpecToTerraform,
dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsPostStartSpecToHclTerraform,
DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsPostStartSpecOutputReference,
DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsProbes,
dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsProbesToTerraform,
dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsProbesToHclTerraform,
DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsProbesOutputReference,
DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsReplicationSpec,
dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsReplicationSpecToTerraform,
dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsReplicationSpecToHclTerraform,
DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsReplicationSpecOutputReference } from './structs400'
import { DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsComponentDefRef,
dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsComponentDefRefToTerraform,
dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsComponentDefRefToHclTerraform,
DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsComponentDefRefList,
DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsConfigSpecs,
dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsConfigSpecsToTerraform,
dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsConfigSpecsToHclTerraform,
DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsConfigSpecsList,
DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsConsensusSpec,
dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsConsensusSpecToTerraform,
dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsConsensusSpecToHclTerraform,
DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsConsensusSpecOutputReference,
DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsCustomLabelSpecs,
dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsCustomLabelSpecsToTerraform,
dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsCustomLabelSpecsToHclTerraform,
DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsCustomLabelSpecsList,
DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsExporter,
dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsExporterToTerraform,
dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsExporterToHclTerraform,
DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsExporterOutputReference,
DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsHorizontalScalePolicy,
dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsHorizontalScalePolicyToTerraform,
dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsHorizontalScalePolicyToHclTerraform,
DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsHorizontalScalePolicyOutputReference,
DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsLogConfigs,
dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsLogConfigsToTerraform,
dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsLogConfigsToHclTerraform,
DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsLogConfigsList,
DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsMonitor,
dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsMonitorToTerraform,
dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsMonitorToHclTerraform,
DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsMonitorOutputReference } from './structs0'
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecRoles {
  /**
  * Specifies the service capabilities of this member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#access_mode DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#access_mode}
  */
  readonly accessMode: string;
  /**
  * Indicates if this member has voting rights.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#can_vote DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#can_vote}
  */
  readonly canVote?: boolean | cdktf.IResolvable;
  /**
  * Determines if this member is the leader.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#is_leader DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#is_leader}
  */
  readonly isLeader?: boolean | cdktf.IResolvable;
  /**
  * Defines the role name of the replica.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#name DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecRolesToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_mode: cdktf.stringToTerraform(struct!.accessMode),
    can_vote: cdktf.booleanToTerraform(struct!.canVote),
    is_leader: cdktf.booleanToTerraform(struct!.isLeader),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecRolesToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_mode: {
      value: cdktf.stringToHclTerraform(struct!.accessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    can_vote: {
      value: cdktf.booleanToHclTerraform(struct!.canVote),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_leader: {
      value: cdktf.booleanToHclTerraform(struct!.isLeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessMode = this._accessMode;
    }
    if (this._canVote !== undefined) {
      hasAnyValues = true;
      internalValueResult.canVote = this._canVote;
    }
    if (this._isLeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.isLeader = this._isLeader;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessMode = undefined;
      this._canVote = undefined;
      this._isLeader = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessMode = value.accessMode;
      this._canVote = value.canVote;
      this._isLeader = value.isLeader;
      this._name = value.name;
    }
  }

  // access_mode - computed: false, optional: false, required: true
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

  // can_vote - computed: false, optional: true, required: false
  private _canVote?: boolean | cdktf.IResolvable; 
  public get canVote() {
    return this.getBooleanAttribute('can_vote');
  }
  public set canVote(value: boolean | cdktf.IResolvable) {
    this._canVote = value;
  }
  public resetCanVote() {
    this._canVote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canVoteInput() {
    return this._canVote;
  }

  // is_leader - computed: false, optional: true, required: false
  private _isLeader?: boolean | cdktf.IResolvable; 
  public get isLeader() {
    return this.getBooleanAttribute('is_leader');
  }
  public set isLeader(value: boolean | cdktf.IResolvable) {
    this._isLeader = value;
  }
  public resetIsLeader() {
    this._isLeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLeaderInput() {
    return this._isLeader;
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
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecRolesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecRoles[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecRolesOutputReference {
    return new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpec {
  /**
  * Describes the strategy for updating Members (Pods). - 'Serial': Updates Members sequentially to ensure minimum component downtime. - 'BestEffortParallel': Updates Members in parallel to ensure minimum component write downtime. - 'Parallel': Forces parallel updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#member_update_strategy DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#member_update_strategy}
  */
  readonly memberUpdateStrategy?: string;
  /**
  * Indicates the actions required for dynamic membership reconfiguration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#membership_reconfiguration DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#membership_reconfiguration}
  */
  readonly membershipReconfiguration?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecMembershipReconfiguration;
  /**
  * Defines the method used to probe a role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#role_probe DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#role_probe}
  */
  readonly roleProbe?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecRoleProbe;
  /**
  * Specifies a list of roles defined within the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#roles DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#roles}
  */
  readonly roles?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecRoles[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    member_update_strategy: cdktf.stringToTerraform(struct!.memberUpdateStrategy),
    membership_reconfiguration: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecMembershipReconfigurationToTerraform(struct!.membershipReconfiguration),
    role_probe: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecRoleProbeToTerraform(struct!.roleProbe),
    roles: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecRolesToTerraform, false)(struct!.roles),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    member_update_strategy: {
      value: cdktf.stringToHclTerraform(struct!.memberUpdateStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    membership_reconfiguration: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecMembershipReconfigurationToHclTerraform(struct!.membershipReconfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecMembershipReconfiguration",
    },
    role_probe: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecRoleProbeToHclTerraform(struct!.roleProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecRoleProbe",
    },
    roles: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecRolesToHclTerraform, false)(struct!.roles),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecRolesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memberUpdateStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberUpdateStrategy = this._memberUpdateStrategy;
    }
    if (this._membershipReconfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.membershipReconfiguration = this._membershipReconfiguration?.internalValue;
    }
    if (this._roleProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleProbe = this._roleProbe?.internalValue;
    }
    if (this._roles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._memberUpdateStrategy = undefined;
      this._membershipReconfiguration.internalValue = undefined;
      this._roleProbe.internalValue = undefined;
      this._roles.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._memberUpdateStrategy = value.memberUpdateStrategy;
      this._membershipReconfiguration.internalValue = value.membershipReconfiguration;
      this._roleProbe.internalValue = value.roleProbe;
      this._roles.internalValue = value.roles;
    }
  }

  // member_update_strategy - computed: false, optional: true, required: false
  private _memberUpdateStrategy?: string; 
  public get memberUpdateStrategy() {
    return this.getStringAttribute('member_update_strategy');
  }
  public set memberUpdateStrategy(value: string) {
    this._memberUpdateStrategy = value;
  }
  public resetMemberUpdateStrategy() {
    this._memberUpdateStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberUpdateStrategyInput() {
    return this._memberUpdateStrategy;
  }

  // membership_reconfiguration - computed: false, optional: true, required: false
  private _membershipReconfiguration = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecMembershipReconfigurationOutputReference(this, "membership_reconfiguration");
  public get membershipReconfiguration() {
    return this._membershipReconfiguration;
  }
  public putMembershipReconfiguration(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecMembershipReconfiguration) {
    this._membershipReconfiguration.internalValue = value;
  }
  public resetMembershipReconfiguration() {
    this._membershipReconfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipReconfigurationInput() {
    return this._membershipReconfiguration.internalValue;
  }

  // role_probe - computed: false, optional: true, required: false
  private _roleProbe = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecRoleProbeOutputReference(this, "role_probe");
  public get roleProbe() {
    return this._roleProbe;
  }
  public putRoleProbe(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecRoleProbe) {
    this._roleProbe.internalValue = value;
  }
  public resetRoleProbe() {
    this._roleProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleProbeInput() {
    return this._roleProbe.internalValue;
  }

  // roles - computed: false, optional: true, required: false
  private _roles = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecRoles[] | cdktf.IResolvable) {
    this._roles.internalValue = value;
  }
  public resetRoles() {
    this._roles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsScriptSpecs {
  /**
  * The operator attempts to set default file permissions for scripts (0555) and configurations (0444). However, certain database engines may require different file permissions. You can specify the desired file permissions here. Must be specified as an octal value between 0000 and 0777 (inclusive), or as a decimal value between 0 and 511 (inclusive). YAML supports both octal and decimal values for file permissions. Please note that this setting only affects the permissions of the files themselves. Directories within the specified path are not impacted by this setting. It's important to be aware that this setting might conflict with other options that influence the file mode, such as fsGroup. In such cases, the resulting file mode may have additional bits set. Refers to documents of k8s.ConfigMapVolumeSource.defaultMode for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#default_mode DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Specifies the name of the configuration template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#name DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Specifies the namespace of the referenced configuration template ConfigMap object. An empty namespace is equivalent to the 'default' namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#namespace DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies the name of the referenced configuration template ConfigMap object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#template_ref DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#template_ref}
  */
  readonly templateRef?: string;
  /**
  * Refers to the volume name of PodTemplate. The configuration file produced through the configuration template will be mounted to the corresponding volume. Must be a DNS_LABEL name. The volume name must be defined in podSpec.containers[*].volumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#volume_name DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsScriptSpecsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsScriptSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    template_ref: cdktf.stringToTerraform(struct!.templateRef),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsScriptSpecsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsScriptSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_ref: {
      value: cdktf.stringToHclTerraform(struct!.templateRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsScriptSpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsScriptSpecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._templateRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateRef = this._templateRef;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsScriptSpecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._templateRef = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMode = value.defaultMode;
      this._name = value.name;
      this._namespace = value.namespace;
      this._templateRef = value.templateRef;
      this._volumeName = value.volumeName;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // template_ref - computed: false, optional: true, required: false
  private _templateRef?: string; 
  public get templateRef() {
    return this.getStringAttribute('template_ref');
  }
  public set templateRef(value: string) {
    this._templateRef = value;
  }
  public resetTemplateRef() {
    this._templateRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateRefInput() {
    return this._templateRef;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsScriptSpecsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsScriptSpecs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsScriptSpecsOutputReference {
    return new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsScriptSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServicePorts {
  /**
  * The application protocol for this port. This field follows standard Kubernetes label syntax. Un-prefixed names are reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names). Non-standard protocols should use prefixed names such as mycompany.com/my-custom-protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#app_protocol DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#app_protocol}
  */
  readonly appProtocol?: string;
  /**
  * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#name DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * The port that will be exposed by this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#port DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#port}
  */
  readonly port: number;
  /**
  * The IP protocol for this port. Supports 'TCP', 'UDP', and 'SCTP'. Default is TCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#protocol DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#protocol}
  */
  readonly protocol?: string;
  /**
  * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. - If this is a string, it will be looked up as a named port in the target Pod's container ports. - If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#target_port DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#target_port}
  */
  readonly targetPort?: string;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServicePortsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServicePorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_protocol: cdktf.stringToTerraform(struct!.appProtocol),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    target_port: cdktf.stringToTerraform(struct!.targetPort),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServicePortsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServicePorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_protocol: {
      value: cdktf.stringToHclTerraform(struct!.appProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_port: {
      value: cdktf.stringToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServicePortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServicePorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.appProtocol = this._appProtocol;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServicePorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appProtocol = undefined;
      this._name = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._targetPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appProtocol = value.appProtocol;
      this._name = value.name;
      this._port = value.port;
      this._protocol = value.protocol;
      this._targetPort = value.targetPort;
    }
  }

  // app_protocol - computed: false, optional: true, required: false
  private _appProtocol?: string; 
  public get appProtocol() {
    return this.getStringAttribute('app_protocol');
  }
  public set appProtocol(value: string) {
    this._appProtocol = value;
  }
  public resetAppProtocol() {
    this._appProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appProtocolInput() {
    return this._appProtocol;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // target_port - computed: false, optional: true, required: false
  private _targetPort?: string; 
  public get targetPort() {
    return this.getStringAttribute('target_port');
  }
  public set targetPort(value: string) {
    this._targetPort = value;
  }
  public resetTargetPort() {
    this._targetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServicePortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServicePorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServicePortsOutputReference {
    return new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServicePortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsService {
  /**
  * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#ports DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#ports}
  */
  readonly ports?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServicePorts[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ports: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServicePortsToTerraform, false)(struct!.ports),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ports: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServicePortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServicePortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ports.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ports.internalValue = value.ports;
    }
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServicePortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServicePorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarationsServiceRefDeclarationSpecs {
  /**
  * Specifies the type or nature of the service. This should be a well-known application cluster type, such as {mysql, redis, mongodb}. The field is case-insensitive and supports abbreviations for some well-known databases. For instance, both 'zk' and 'zookeeper' are considered as a ZooKeeper cluster, while 'pg', 'postgres', 'postgresql' are all recognized as a PostgreSQL cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#service_kind DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#service_kind}
  */
  readonly serviceKind: string;
  /**
  * Defines the service version of the service reference. This is a regular expression that matches a version number pattern. For instance, '^8.0.8$', '8.0.d{1,2}$', '^[v-]*?(d{1,2}.){0,3}d{1,2}$' are all valid patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#service_version DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#service_version}
  */
  readonly serviceVersion: string;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarationsServiceRefDeclarationSpecsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarationsServiceRefDeclarationSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_kind: cdktf.stringToTerraform(struct!.serviceKind),
    service_version: cdktf.stringToTerraform(struct!.serviceVersion),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarationsServiceRefDeclarationSpecsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarationsServiceRefDeclarationSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_kind: {
      value: cdktf.stringToHclTerraform(struct!.serviceKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_version: {
      value: cdktf.stringToHclTerraform(struct!.serviceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarationsServiceRefDeclarationSpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarationsServiceRefDeclarationSpecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceKind = this._serviceKind;
    }
    if (this._serviceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceVersion = this._serviceVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarationsServiceRefDeclarationSpecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceKind = undefined;
      this._serviceVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceKind = value.serviceKind;
      this._serviceVersion = value.serviceVersion;
    }
  }

  // service_kind - computed: false, optional: false, required: true
  private _serviceKind?: string; 
  public get serviceKind() {
    return this.getStringAttribute('service_kind');
  }
  public set serviceKind(value: string) {
    this._serviceKind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceKindInput() {
    return this._serviceKind;
  }

  // service_version - computed: false, optional: false, required: true
  private _serviceVersion?: string; 
  public get serviceVersion() {
    return this.getStringAttribute('service_version');
  }
  public set serviceVersion(value: string) {
    this._serviceVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceVersionInput() {
    return this._serviceVersion;
  }
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarationsServiceRefDeclarationSpecsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarationsServiceRefDeclarationSpecs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarationsServiceRefDeclarationSpecsOutputReference {
    return new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarationsServiceRefDeclarationSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarations {
  /**
  * Specifies the name of the ServiceRefDeclaration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#name DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Specifies whether the service reference can be optional. For an optional service-ref, the component can still be created even if the service-ref is not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#optional DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Defines a list of constraints and requirements for services that can be bound to this ServiceRefDeclaration upon Cluster creation. Each ServiceRefDeclarationSpec defines a ServiceKind and ServiceVersion, outlining the acceptable service types and versions that are compatible. This flexibility allows a ServiceRefDeclaration to be fulfilled by any one of the provided specs. For example, if it requires an OLTP database, specs for both MySQL and PostgreSQL are listed, either MySQL or PostgreSQL services can be used when binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#service_ref_declaration_specs DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#service_ref_declaration_specs}
  */
  readonly serviceRefDeclarationSpecs: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarationsServiceRefDeclarationSpecs[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarationsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    service_ref_declaration_specs: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarationsServiceRefDeclarationSpecsToTerraform, false)(struct!.serviceRefDeclarationSpecs),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarationsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarations | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_ref_declaration_specs: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarationsServiceRefDeclarationSpecsToHclTerraform, false)(struct!.serviceRefDeclarationSpecs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarationsServiceRefDeclarationSpecsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._serviceRefDeclarationSpecs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceRefDeclarationSpecs = this._serviceRefDeclarationSpecs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._optional = undefined;
      this._serviceRefDeclarationSpecs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._optional = value.optional;
      this._serviceRefDeclarationSpecs.internalValue = value.serviceRefDeclarationSpecs;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // service_ref_declaration_specs - computed: false, optional: false, required: true
  private _serviceRefDeclarationSpecs = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarationsServiceRefDeclarationSpecsList(this, "service_ref_declaration_specs", false);
  public get serviceRefDeclarationSpecs() {
    return this._serviceRefDeclarationSpecs;
  }
  public putServiceRefDeclarationSpecs(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarationsServiceRefDeclarationSpecs[] | cdktf.IResolvable) {
    this._serviceRefDeclarationSpecs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRefDeclarationSpecsInput() {
    return this._serviceRefDeclarationSpecs.internalValue;
  }
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarationsOutputReference {
    return new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecLlUpdateStrategyRollingUpdate {
  /**
  * The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding up. This can not be 0. Defaults to 1. This field is alpha-level and is only honored by servers that enable the MaxUnavailableStatefulSet feature. The field applies to all pods in the range 0 to Replicas-1. That means if there is any unavailable pod in the range 0 to Replicas-1, it will be counted towards MaxUnavailable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#max_unavailable DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: string;
  /**
  * Partition indicates the ordinal at which the StatefulSet should be partitioned for updates. During a rolling update, all pods from ordinal Replicas-1 to Partition are updated. All pods from ordinal Partition-1 to 0 remain untouched. This is helpful in being able to do a canary based deployment. The default value is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#partition DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#partition}
  */
  readonly partition?: number;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecLlUpdateStrategyRollingUpdateToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecLlUpdateStrategyRollingUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_unavailable: cdktf.stringToTerraform(struct!.maxUnavailable),
    partition: cdktf.numberToTerraform(struct!.partition),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecLlUpdateStrategyRollingUpdateToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecLlUpdateStrategyRollingUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_unavailable: {
      value: cdktf.stringToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktf.numberToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecLlUpdateStrategyRollingUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecLlUpdateStrategyRollingUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecLlUpdateStrategyRollingUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxUnavailable = undefined;
      this._partition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxUnavailable = value.maxUnavailable;
      this._partition = value.partition;
    }
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: string; 
  public get maxUnavailable() {
    return this.getStringAttribute('max_unavailable');
  }
  public set maxUnavailable(value: string) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: number; 
  public get partition() {
    return this.getNumberAttribute('partition');
  }
  public set partition(value: number) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecLlUpdateStrategy {
  /**
  * RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#rolling_update DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#rolling_update}
  */
  readonly rollingUpdate?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecLlUpdateStrategyRollingUpdate;
  /**
  * Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#type DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecLlUpdateStrategyToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecLlUpdateStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rolling_update: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecLlUpdateStrategyRollingUpdateToTerraform(struct!.rollingUpdate),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecLlUpdateStrategyToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecLlUpdateStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rolling_update: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecLlUpdateStrategyRollingUpdateToHclTerraform(struct!.rollingUpdate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecLlUpdateStrategyRollingUpdate",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecLlUpdateStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecLlUpdateStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rollingUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpdate = this._rollingUpdate?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecLlUpdateStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rollingUpdate.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rollingUpdate.internalValue = value.rollingUpdate;
      this._type = value.type;
    }
  }

  // rolling_update - computed: false, optional: true, required: false
  private _rollingUpdate = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecLlUpdateStrategyRollingUpdateOutputReference(this, "rolling_update");
  public get rollingUpdate() {
    return this._rollingUpdate;
  }
  public putRollingUpdate(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecLlUpdateStrategyRollingUpdate) {
    this._rollingUpdate.internalValue = value;
  }
  public resetRollingUpdate() {
    this._rollingUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdateInput() {
    return this._rollingUpdate.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpec {
  /**
  * Controls the creation of pods during initial scale up, replacement of pods on nodes, and scaling down. - 'OrderedReady': Creates pods in increasing order (pod-0, then pod-1, etc). The controller waits until each pod is ready before continuing. Pods are removed in reverse order when scaling down. - 'Parallel': Creates pods in parallel to match the desired scale without waiting. All pods are deleted at once when scaling down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#ll_pod_management_policy DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#ll_pod_management_policy}
  */
  readonly llPodManagementPolicy?: string;
  /**
  * Specifies the low-level StatefulSetUpdateStrategy to be used when updating Pods in the StatefulSet upon a revision to the Template. 'UpdateStrategy' will be ignored if this is provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#ll_update_strategy DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#ll_update_strategy}
  */
  readonly llUpdateStrategy?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecLlUpdateStrategy;
  /**
  * Specifies the strategy for updating Pods. For workloadType='Consensus', the update strategy can be one of the following: - 'Serial': Updates Members sequentially to minimize component downtime. - 'BestEffortParallel': Updates Members in parallel to minimize component write downtime. Majority remains online at all times. - 'Parallel': Forces parallel updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#update_strategy DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#update_strategy}
  */
  readonly updateStrategy?: string;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ll_pod_management_policy: cdktf.stringToTerraform(struct!.llPodManagementPolicy),
    ll_update_strategy: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecLlUpdateStrategyToTerraform(struct!.llUpdateStrategy),
    update_strategy: cdktf.stringToTerraform(struct!.updateStrategy),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ll_pod_management_policy: {
      value: cdktf.stringToHclTerraform(struct!.llPodManagementPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ll_update_strategy: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecLlUpdateStrategyToHclTerraform(struct!.llUpdateStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecLlUpdateStrategy",
    },
    update_strategy: {
      value: cdktf.stringToHclTerraform(struct!.updateStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._llPodManagementPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.llPodManagementPolicy = this._llPodManagementPolicy;
    }
    if (this._llUpdateStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.llUpdateStrategy = this._llUpdateStrategy?.internalValue;
    }
    if (this._updateStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateStrategy = this._updateStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._llPodManagementPolicy = undefined;
      this._llUpdateStrategy.internalValue = undefined;
      this._updateStrategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._llPodManagementPolicy = value.llPodManagementPolicy;
      this._llUpdateStrategy.internalValue = value.llUpdateStrategy;
      this._updateStrategy = value.updateStrategy;
    }
  }

  // ll_pod_management_policy - computed: false, optional: true, required: false
  private _llPodManagementPolicy?: string; 
  public get llPodManagementPolicy() {
    return this.getStringAttribute('ll_pod_management_policy');
  }
  public set llPodManagementPolicy(value: string) {
    this._llPodManagementPolicy = value;
  }
  public resetLlPodManagementPolicy() {
    this._llPodManagementPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llPodManagementPolicyInput() {
    return this._llPodManagementPolicy;
  }

  // ll_update_strategy - computed: false, optional: true, required: false
  private _llUpdateStrategy = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecLlUpdateStrategyOutputReference(this, "ll_update_strategy");
  public get llUpdateStrategy() {
    return this._llUpdateStrategy;
  }
  public putLlUpdateStrategy(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecLlUpdateStrategy) {
    this._llUpdateStrategy.internalValue = value;
  }
  public resetLlUpdateStrategy() {
    this._llUpdateStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llUpdateStrategyInput() {
    return this._llUpdateStrategy.internalValue;
  }

  // update_strategy - computed: false, optional: true, required: false
  private _updateStrategy?: string; 
  public get updateStrategy() {
    return this.getStringAttribute('update_strategy');
  }
  public set updateStrategy(value: string) {
    this._updateStrategy = value;
  }
  public resetUpdateStrategy() {
    this._updateStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStrategyInput() {
    return this._updateStrategy;
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecUpdateStrategyRollingUpdate {
  /**
  * The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new ReplicaSet can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new ReplicaSet can be scaled up further, ensuring that total number of pods running at any time during the update is at most 130% of desired pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#max_surge DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#max_surge}
  */
  readonly maxSurge?: string;
  /**
  * The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old ReplicaSet can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old ReplicaSet can be scaled down further, followed by scaling up the new ReplicaSet, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#max_unavailable DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: string;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecUpdateStrategyRollingUpdateToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecUpdateStrategyRollingUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktf.stringToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.stringToTerraform(struct!.maxUnavailable),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecUpdateStrategyRollingUpdateToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecUpdateStrategyRollingUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_surge: {
      value: cdktf.stringToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_unavailable: {
      value: cdktf.stringToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecUpdateStrategyRollingUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecUpdateStrategyRollingUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecUpdateStrategyRollingUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSurge = value.maxSurge;
      this._maxUnavailable = value.maxUnavailable;
    }
  }

  // max_surge - computed: false, optional: true, required: false
  private _maxSurge?: string; 
  public get maxSurge() {
    return this.getStringAttribute('max_surge');
  }
  public set maxSurge(value: string) {
    this._maxSurge = value;
  }
  public resetMaxSurge() {
    this._maxSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: string; 
  public get maxUnavailable() {
    return this.getStringAttribute('max_unavailable');
  }
  public set maxUnavailable(value: string) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecUpdateStrategy {
  /**
  * Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate. --- TODO: Update this to follow our convention for oneOf, whatever we decide it to be.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#rolling_update DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#rolling_update}
  */
  readonly rollingUpdate?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecUpdateStrategyRollingUpdate;
  /**
  * Type of deployment. Can be 'Recreate' or 'RollingUpdate'. Default is RollingUpdate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#type DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecUpdateStrategyToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecUpdateStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rolling_update: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecUpdateStrategyRollingUpdateToTerraform(struct!.rollingUpdate),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecUpdateStrategyToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecUpdateStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rolling_update: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecUpdateStrategyRollingUpdateToHclTerraform(struct!.rollingUpdate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecUpdateStrategyRollingUpdate",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecUpdateStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecUpdateStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rollingUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpdate = this._rollingUpdate?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecUpdateStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rollingUpdate.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rollingUpdate.internalValue = value.rollingUpdate;
      this._type = value.type;
    }
  }

  // rolling_update - computed: false, optional: true, required: false
  private _rollingUpdate = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecUpdateStrategyRollingUpdateOutputReference(this, "rolling_update");
  public get rollingUpdate() {
    return this._rollingUpdate;
  }
  public putRollingUpdate(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecUpdateStrategyRollingUpdate) {
    this._rollingUpdate.internalValue = value;
  }
  public resetRollingUpdate() {
    this._rollingUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdateInput() {
    return this._rollingUpdate.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpec {
  /**
  * Specifies the deployment strategy that will be used to replace existing pods with new ones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#update_strategy DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#update_strategy}
  */
  readonly updateStrategy?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecUpdateStrategy;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    update_strategy: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecUpdateStrategyToTerraform(struct!.updateStrategy),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    update_strategy: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecUpdateStrategyToHclTerraform(struct!.updateStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecUpdateStrategy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._updateStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateStrategy = this._updateStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._updateStrategy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._updateStrategy.internalValue = value.updateStrategy;
    }
  }

  // update_strategy - computed: false, optional: true, required: false
  private _updateStrategy = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecUpdateStrategyOutputReference(this, "update_strategy");
  public get updateStrategy() {
    return this._updateStrategy;
  }
  public putUpdateStrategy(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecUpdateStrategy) {
    this._updateStrategy.internalValue = value;
  }
  public resetUpdateStrategy() {
    this._updateStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStrategyInput() {
    return this._updateStrategy.internalValue;
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateCmdExecutorConfig {
  /**
  * Additional parameters used in the execution of the command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#args DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#args}
  */
  readonly args?: string[];
  /**
  * The command to be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#command DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#command}
  */
  readonly command: string[];
  /**
  * A list of environment variables that will be injected into the command execution context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#env DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Specifies the image used to execute the command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#image DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#image}
  */
  readonly image: string;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateCmdExecutorConfigToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateCmdExecutorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateCmdExecutorConfigToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateCmdExecutorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateCmdExecutorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateCmdExecutorConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateCmdExecutorConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._command = undefined;
      this._env = undefined;
      this._image = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._command = value.command;
      this._env = value.env;
      this._image = value.image;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: false, required: true
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateScriptSpecSelectors {
  /**
  * Represents the name of the ScriptSpec referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#name DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateScriptSpecSelectorsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateScriptSpecSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateScriptSpecSelectorsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateScriptSpecSelectors | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateScriptSpecSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateScriptSpecSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateScriptSpecSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateScriptSpecSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateScriptSpecSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateScriptSpecSelectorsOutputReference {
    return new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateScriptSpecSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidate {
  /**
  * Specifies the switchover command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#cmd_executor_config DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#cmd_executor_config}
  */
  readonly cmdExecutorConfig: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateCmdExecutorConfig;
  /**
  * Used to select the script that need to be referenced. When defined, the scripts defined in scriptSpecs can be referenced within the SwitchoverAction.CmdExecutorConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#script_spec_selectors DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#script_spec_selectors}
  */
  readonly scriptSpecSelectors?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateScriptSpecSelectors[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmd_executor_config: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateCmdExecutorConfigToTerraform(struct!.cmdExecutorConfig),
    script_spec_selectors: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateScriptSpecSelectorsToTerraform, false)(struct!.scriptSpecSelectors),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cmd_executor_config: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateCmdExecutorConfigToHclTerraform(struct!.cmdExecutorConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateCmdExecutorConfig",
    },
    script_spec_selectors: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateScriptSpecSelectorsToHclTerraform, false)(struct!.scriptSpecSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateScriptSpecSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmdExecutorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmdExecutorConfig = this._cmdExecutorConfig?.internalValue;
    }
    if (this._scriptSpecSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptSpecSelectors = this._scriptSpecSelectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cmdExecutorConfig.internalValue = undefined;
      this._scriptSpecSelectors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cmdExecutorConfig.internalValue = value.cmdExecutorConfig;
      this._scriptSpecSelectors.internalValue = value.scriptSpecSelectors;
    }
  }

  // cmd_executor_config - computed: false, optional: false, required: true
  private _cmdExecutorConfig = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateCmdExecutorConfigOutputReference(this, "cmd_executor_config");
  public get cmdExecutorConfig() {
    return this._cmdExecutorConfig;
  }
  public putCmdExecutorConfig(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateCmdExecutorConfig) {
    this._cmdExecutorConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdExecutorConfigInput() {
    return this._cmdExecutorConfig.internalValue;
  }

  // script_spec_selectors - computed: false, optional: true, required: false
  private _scriptSpecSelectors = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateScriptSpecSelectorsList(this, "script_spec_selectors", false);
  public get scriptSpecSelectors() {
    return this._scriptSpecSelectors;
  }
  public putScriptSpecSelectors(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateScriptSpecSelectors[] | cdktf.IResolvable) {
    this._scriptSpecSelectors.internalValue = value;
  }
  public resetScriptSpecSelectors() {
    this._scriptSpecSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptSpecSelectorsInput() {
    return this._scriptSpecSelectors.internalValue;
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateCmdExecutorConfig {
  /**
  * Additional parameters used in the execution of the command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#args DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#args}
  */
  readonly args?: string[];
  /**
  * The command to be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#command DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#command}
  */
  readonly command: string[];
  /**
  * A list of environment variables that will be injected into the command execution context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#env DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Specifies the image used to execute the command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#image DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#image}
  */
  readonly image: string;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateCmdExecutorConfigToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateCmdExecutorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateCmdExecutorConfigToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateCmdExecutorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateCmdExecutorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateCmdExecutorConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateCmdExecutorConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._command = undefined;
      this._env = undefined;
      this._image = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._command = value.command;
      this._env = value.env;
      this._image = value.image;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: false, required: true
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateScriptSpecSelectors {
  /**
  * Represents the name of the ScriptSpec referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#name DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateScriptSpecSelectorsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateScriptSpecSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateScriptSpecSelectorsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateScriptSpecSelectors | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateScriptSpecSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateScriptSpecSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateScriptSpecSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateScriptSpecSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateScriptSpecSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateScriptSpecSelectorsOutputReference {
    return new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateScriptSpecSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidate {
  /**
  * Specifies the switchover command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#cmd_executor_config DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#cmd_executor_config}
  */
  readonly cmdExecutorConfig: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateCmdExecutorConfig;
  /**
  * Used to select the script that need to be referenced. When defined, the scripts defined in scriptSpecs can be referenced within the SwitchoverAction.CmdExecutorConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#script_spec_selectors DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#script_spec_selectors}
  */
  readonly scriptSpecSelectors?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateScriptSpecSelectors[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmd_executor_config: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateCmdExecutorConfigToTerraform(struct!.cmdExecutorConfig),
    script_spec_selectors: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateScriptSpecSelectorsToTerraform, false)(struct!.scriptSpecSelectors),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cmd_executor_config: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateCmdExecutorConfigToHclTerraform(struct!.cmdExecutorConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateCmdExecutorConfig",
    },
    script_spec_selectors: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateScriptSpecSelectorsToHclTerraform, false)(struct!.scriptSpecSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateScriptSpecSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmdExecutorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmdExecutorConfig = this._cmdExecutorConfig?.internalValue;
    }
    if (this._scriptSpecSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptSpecSelectors = this._scriptSpecSelectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cmdExecutorConfig.internalValue = undefined;
      this._scriptSpecSelectors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cmdExecutorConfig.internalValue = value.cmdExecutorConfig;
      this._scriptSpecSelectors.internalValue = value.scriptSpecSelectors;
    }
  }

  // cmd_executor_config - computed: false, optional: false, required: true
  private _cmdExecutorConfig = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateCmdExecutorConfigOutputReference(this, "cmd_executor_config");
  public get cmdExecutorConfig() {
    return this._cmdExecutorConfig;
  }
  public putCmdExecutorConfig(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateCmdExecutorConfig) {
    this._cmdExecutorConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdExecutorConfigInput() {
    return this._cmdExecutorConfig.internalValue;
  }

  // script_spec_selectors - computed: false, optional: true, required: false
  private _scriptSpecSelectors = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateScriptSpecSelectorsList(this, "script_spec_selectors", false);
  public get scriptSpecSelectors() {
    return this._scriptSpecSelectors;
  }
  public putScriptSpecSelectors(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateScriptSpecSelectors[] | cdktf.IResolvable) {
    this._scriptSpecSelectors.internalValue = value;
  }
  public resetScriptSpecSelectors() {
    this._scriptSpecSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptSpecSelectorsInput() {
    return this._scriptSpecSelectors.internalValue;
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpec {
  /**
  * Represents the action of switching over to a specified candidate primary or leader instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#with_candidate DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#with_candidate}
  */
  readonly withCandidate?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidate;
  /**
  * Represents the action of switching over without specifying a candidate primary or leader instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#without_candidate DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#without_candidate}
  */
  readonly withoutCandidate?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidate;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    with_candidate: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateToTerraform(struct!.withCandidate),
    without_candidate: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateToTerraform(struct!.withoutCandidate),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    with_candidate: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateToHclTerraform(struct!.withCandidate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidate",
    },
    without_candidate: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateToHclTerraform(struct!.withoutCandidate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._withCandidate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.withCandidate = this._withCandidate?.internalValue;
    }
    if (this._withoutCandidate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.withoutCandidate = this._withoutCandidate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._withCandidate.internalValue = undefined;
      this._withoutCandidate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._withCandidate.internalValue = value.withCandidate;
      this._withoutCandidate.internalValue = value.withoutCandidate;
    }
  }

  // with_candidate - computed: false, optional: true, required: false
  private _withCandidate = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidateOutputReference(this, "with_candidate");
  public get withCandidate() {
    return this._withCandidate;
  }
  public putWithCandidate(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithCandidate) {
    this._withCandidate.internalValue = value;
  }
  public resetWithCandidate() {
    this._withCandidate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withCandidateInput() {
    return this._withCandidate.internalValue;
  }

  // without_candidate - computed: false, optional: true, required: false
  private _withoutCandidate = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidateOutputReference(this, "without_candidate");
  public get withoutCandidate() {
    return this._withoutCandidate;
  }
  public putWithoutCandidate(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecWithoutCandidate) {
    this._withoutCandidate.internalValue = value;
  }
  public resetWithoutCandidate() {
    this._withoutCandidate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withoutCandidateInput() {
    return this._withoutCandidate.internalValue;
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicySecretRef {
  /**
  * The unique identifier of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#name DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * The namespace where the secret is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#namespace DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicySecretRefToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicySecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicySecretRefToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicySecretRef | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicySecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicySecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicySecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicyStatements {
  /**
  * Specifies the statement required to create a new account with the necessary privileges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#creation DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#creation}
  */
  readonly creation: string;
  /**
  * Defines the statement required to delete an existing account. Typically used in conjunction with the creation statement to delete an account before recreating it. For example, one might use a 'drop user if exists' statement followed by a 'create user' statement to ensure a fresh account. Deprecated: This field is deprecated and the update statement should be used instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#deletion DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#deletion}
  */
  readonly deletion?: string;
  /**
  * Defines the statement required to update the password of an existing account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#update DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#update}
  */
  readonly update?: string;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicyStatementsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicyStatements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    creation: cdktf.stringToTerraform(struct!.creation),
    deletion: cdktf.stringToTerraform(struct!.deletion),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicyStatementsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicyStatements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    creation: {
      value: cdktf.stringToHclTerraform(struct!.creation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deletion: {
      value: cdktf.stringToHclTerraform(struct!.deletion),
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

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicyStatementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicyStatements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._creation !== undefined) {
      hasAnyValues = true;
      internalValueResult.creation = this._creation;
    }
    if (this._deletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletion = this._deletion;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicyStatements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._creation = undefined;
      this._deletion = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._creation = value.creation;
      this._deletion = value.deletion;
      this._update = value.update;
    }
  }

  // creation - computed: false, optional: false, required: true
  private _creation?: string; 
  public get creation() {
    return this.getStringAttribute('creation');
  }
  public set creation(value: string) {
    this._creation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get creationInput() {
    return this._creation;
  }

  // deletion - computed: false, optional: true, required: false
  private _deletion?: string; 
  public get deletion() {
    return this.getStringAttribute('deletion');
  }
  public set deletion(value: string) {
    this._deletion = value;
  }
  public resetDeletion() {
    this._deletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionInput() {
    return this._deletion;
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
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicy {
  /**
  * Defines the scope within which the account is provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#scope DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#scope}
  */
  readonly scope: string;
  /**
  * The external secret to refer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#secret_ref DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicySecretRef;
  /**
  * The statement to provision an account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#statements DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#statements}
  */
  readonly statements?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicyStatements;
  /**
  * Specifies the method to provision an account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#type DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicyToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    secret_ref: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicySecretRefToTerraform(struct!.secretRef),
    statements: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicyStatementsToTerraform(struct!.statements),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicyToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicySecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicySecretRef",
    },
    statements: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicyStatementsToHclTerraform(struct!.statements),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicyStatements",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._statements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statements = this._statements?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._secretRef.internalValue = undefined;
      this._statements.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._secretRef.internalValue = value.secretRef;
      this._statements.internalValue = value.statements;
      this._type = value.type;
    }
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicySecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicySecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // statements - computed: false, optional: true, required: false
  private _statements = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicyStatementsOutputReference(this, "statements");
  public get statements() {
    return this._statements;
  }
  public putStatements(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicyStatements) {
    this._statements.internalValue = value;
  }
  public resetStatements() {
    this._statements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementsInput() {
    return this._statements.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccounts {
  /**
  * The unique identifier of a system account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#name DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Outlines the strategy for creating the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#provision_policy DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#provision_policy}
  */
  readonly provisionPolicy: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicy;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    provision_policy: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicyToTerraform(struct!.provisionPolicy),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccounts | cdktf.IResolvable): any {
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
    provision_policy: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicyToHclTerraform(struct!.provisionPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._provisionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionPolicy = this._provisionPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._provisionPolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._provisionPolicy.internalValue = value.provisionPolicy;
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

  // provision_policy - computed: false, optional: false, required: true
  private _provisionPolicy = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicyOutputReference(this, "provision_policy");
  public get provisionPolicy() {
    return this._provisionPolicy;
  }
  public putProvisionPolicy(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsProvisionPolicy) {
    this._provisionPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionPolicyInput() {
    return this._provisionPolicy.internalValue;
  }
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsOutputReference {
    return new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsCmdExecutorConfig {
  /**
  * Additional parameters used in the execution of the command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#args DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#args}
  */
  readonly args?: string[];
  /**
  * The command to be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#command DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#command}
  */
  readonly command: string[];
  /**
  * A list of environment variables that will be injected into the command execution context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#env DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Specifies the image used to execute the command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#image DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#image}
  */
  readonly image: string;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsCmdExecutorConfigToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsCmdExecutorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsCmdExecutorConfigToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsCmdExecutorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsCmdExecutorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsCmdExecutorConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsCmdExecutorConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._command = undefined;
      this._env = undefined;
      this._image = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._command = value.command;
      this._env = value.env;
      this._image = value.image;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: false, required: true
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsPasswordConfig {
  /**
  * The length of the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#length DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#length}
  */
  readonly length?: number;
  /**
  * The case of the letters in the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#letter_case DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#letter_case}
  */
  readonly letterCase?: string;
  /**
  * The number of digits in the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#num_digits DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#num_digits}
  */
  readonly numDigits?: number;
  /**
  * The number of symbols in the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#num_symbols DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#num_symbols}
  */
  readonly numSymbols?: number;
  /**
  * Seed to generate the account's password. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#seed DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#seed}
  */
  readonly seed?: string;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsPasswordConfigToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsPasswordConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    length: cdktf.numberToTerraform(struct!.length),
    letter_case: cdktf.stringToTerraform(struct!.letterCase),
    num_digits: cdktf.numberToTerraform(struct!.numDigits),
    num_symbols: cdktf.numberToTerraform(struct!.numSymbols),
    seed: cdktf.stringToTerraform(struct!.seed),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsPasswordConfigToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsPasswordConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    letter_case: {
      value: cdktf.stringToHclTerraform(struct!.letterCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_digits: {
      value: cdktf.numberToHclTerraform(struct!.numDigits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_symbols: {
      value: cdktf.numberToHclTerraform(struct!.numSymbols),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seed: {
      value: cdktf.stringToHclTerraform(struct!.seed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsPasswordConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsPasswordConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._letterCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.letterCase = this._letterCase;
    }
    if (this._numDigits !== undefined) {
      hasAnyValues = true;
      internalValueResult.numDigits = this._numDigits;
    }
    if (this._numSymbols !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSymbols = this._numSymbols;
    }
    if (this._seed !== undefined) {
      hasAnyValues = true;
      internalValueResult.seed = this._seed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsPasswordConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._length = undefined;
      this._letterCase = undefined;
      this._numDigits = undefined;
      this._numSymbols = undefined;
      this._seed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._length = value.length;
      this._letterCase = value.letterCase;
      this._numDigits = value.numDigits;
      this._numSymbols = value.numSymbols;
      this._seed = value.seed;
    }
  }

  // length - computed: false, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // letter_case - computed: false, optional: true, required: false
  private _letterCase?: string; 
  public get letterCase() {
    return this.getStringAttribute('letter_case');
  }
  public set letterCase(value: string) {
    this._letterCase = value;
  }
  public resetLetterCase() {
    this._letterCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get letterCaseInput() {
    return this._letterCase;
  }

  // num_digits - computed: false, optional: true, required: false
  private _numDigits?: number; 
  public get numDigits() {
    return this.getNumberAttribute('num_digits');
  }
  public set numDigits(value: number) {
    this._numDigits = value;
  }
  public resetNumDigits() {
    this._numDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numDigitsInput() {
    return this._numDigits;
  }

  // num_symbols - computed: false, optional: true, required: false
  private _numSymbols?: number; 
  public get numSymbols() {
    return this.getNumberAttribute('num_symbols');
  }
  public set numSymbols(value: number) {
    this._numSymbols = value;
  }
  public resetNumSymbols() {
    this._numSymbols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSymbolsInput() {
    return this._numSymbols;
  }

  // seed - computed: false, optional: true, required: false
  private _seed?: string; 
  public get seed() {
    return this.getStringAttribute('seed');
  }
  public set seed(value: string) {
    this._seed = value;
  }
  public resetSeed() {
    this._seed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedInput() {
    return this._seed;
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccounts {
  /**
  * Defines the configuration settings for system accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#accounts DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#accounts}
  */
  readonly accounts: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccounts[] | cdktf.IResolvable;
  /**
  * Configures how to obtain the client SDK and execute statements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#cmd_executor_config DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#cmd_executor_config}
  */
  readonly cmdExecutorConfig: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsCmdExecutorConfig;
  /**
  * Defines the pattern used to generate passwords for system accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#password_config DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#password_config}
  */
  readonly passwordConfig: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsPasswordConfig;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accounts: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsToTerraform, false)(struct!.accounts),
    cmd_executor_config: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsCmdExecutorConfigToTerraform(struct!.cmdExecutorConfig),
    password_config: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsPasswordConfigToTerraform(struct!.passwordConfig),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accounts: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsToHclTerraform, false)(struct!.accounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsList",
    },
    cmd_executor_config: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsCmdExecutorConfigToHclTerraform(struct!.cmdExecutorConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsCmdExecutorConfig",
    },
    password_config: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsPasswordConfigToHclTerraform(struct!.passwordConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsPasswordConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accounts = this._accounts?.internalValue;
    }
    if (this._cmdExecutorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmdExecutorConfig = this._cmdExecutorConfig?.internalValue;
    }
    if (this._passwordConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordConfig = this._passwordConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accounts.internalValue = undefined;
      this._cmdExecutorConfig.internalValue = undefined;
      this._passwordConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accounts.internalValue = value.accounts;
      this._cmdExecutorConfig.internalValue = value.cmdExecutorConfig;
      this._passwordConfig.internalValue = value.passwordConfig;
    }
  }

  // accounts - computed: false, optional: false, required: true
  private _accounts = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccountsList(this, "accounts", false);
  public get accounts() {
    return this._accounts;
  }
  public putAccounts(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsAccounts[] | cdktf.IResolvable) {
    this._accounts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsInput() {
    return this._accounts.internalValue;
  }

  // cmd_executor_config - computed: false, optional: false, required: true
  private _cmdExecutorConfig = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsCmdExecutorConfigOutputReference(this, "cmd_executor_config");
  public get cmdExecutorConfig() {
    return this._cmdExecutorConfig;
  }
  public putCmdExecutorConfig(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsCmdExecutorConfig) {
    this._cmdExecutorConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdExecutorConfigInput() {
    return this._cmdExecutorConfig.internalValue;
  }

  // password_config - computed: false, optional: false, required: true
  private _passwordConfig = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsPasswordConfigOutputReference(this, "password_config");
  public get passwordConfig() {
    return this._passwordConfig;
  }
  public putPasswordConfig(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsPasswordConfig) {
    this._passwordConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordConfigInput() {
    return this._passwordConfig.internalValue;
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpecVolumes {
  /**
  * Defines the high watermark threshold for the volume, it will override the component level threshold. If the value is invalid, it will be ignored and the component level threshold will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#high_watermark DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#high_watermark}
  */
  readonly highWatermark?: number;
  /**
  * The Name of the volume to protect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#name DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpecVolumesToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpecVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high_watermark: cdktf.numberToTerraform(struct!.highWatermark),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpecVolumesToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpecVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high_watermark: {
      value: cdktf.numberToHclTerraform(struct!.highWatermark),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpecVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpecVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._highWatermark !== undefined) {
      hasAnyValues = true;
      internalValueResult.highWatermark = this._highWatermark;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpecVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._highWatermark = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._highWatermark = value.highWatermark;
      this._name = value.name;
    }
  }

  // high_watermark - computed: false, optional: true, required: false
  private _highWatermark?: number; 
  public get highWatermark() {
    return this.getNumberAttribute('high_watermark');
  }
  public set highWatermark(value: number) {
    this._highWatermark = value;
  }
  public resetHighWatermark() {
    this._highWatermark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highWatermarkInput() {
    return this._highWatermark;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpecVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpecVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpecVolumesOutputReference {
    return new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpecVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpec {
  /**
  * The high watermark threshold for volume space usage. If there is any specified volumes who's space usage is over the threshold, the pre-defined 'LOCK' action will be triggered to degrade the service to protect volume from space exhaustion, such as to set the instance as read-only. And after that, if all volumes' space usage drops under the threshold later, the pre-defined 'UNLOCK' action will be performed to recover the service normally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#high_watermark DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#high_watermark}
  */
  readonly highWatermark?: number;
  /**
  * The Volumes to be protected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#volumes DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#volumes}
  */
  readonly volumes?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpecVolumes[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpecToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high_watermark: cdktf.numberToTerraform(struct!.highWatermark),
    volumes: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpecVolumesToTerraform, false)(struct!.volumes),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpecToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high_watermark: {
      value: cdktf.numberToHclTerraform(struct!.highWatermark),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpecVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpecVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._highWatermark !== undefined) {
      hasAnyValues = true;
      internalValueResult.highWatermark = this._highWatermark;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._highWatermark = undefined;
      this._volumes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._highWatermark = value.highWatermark;
      this._volumes.internalValue = value.volumes;
    }
  }

  // high_watermark - computed: false, optional: true, required: false
  private _highWatermark?: number; 
  public get highWatermark() {
    return this.getNumberAttribute('high_watermark');
  }
  public set highWatermark(value: number) {
    this._highWatermark = value;
  }
  public resetHighWatermark() {
    this._highWatermark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highWatermarkInput() {
    return this._highWatermark;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpecVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpecVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeTypes {
  /**
  * Corresponds to the name of the VolumeMounts field in PodSpec.Container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#name DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Type of data the volume will persistent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#type DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeTypesToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeTypesToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeTypes | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeTypesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeTypes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeTypesOutputReference {
    return new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefs {
  /**
  * Defines well-known database component name, such as mongos(mongodb), proxy(redis), mariadb(mysql).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#character_type DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#character_type}
  */
  readonly characterType?: string;
  /**
  * Used to inject values from other components into the current component. Values will be saved and updated in a configmap and mounted to the current component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#component_def_ref DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#component_def_ref}
  */
  readonly componentDefRef?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsComponentDefRef[] | cdktf.IResolvable;
  /**
  * Defines the template of configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#config_specs DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#config_specs}
  */
  readonly configSpecs?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsConfigSpecs[] | cdktf.IResolvable;
  /**
  * Defines spec for 'Consensus' workloads. It's required if the workload type is 'Consensus'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#consensus_spec DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#consensus_spec}
  */
  readonly consensusSpec?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsConsensusSpec;
  /**
  * Used for custom label tags which you want to add to the component resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#custom_label_specs DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#custom_label_specs}
  */
  readonly customLabelSpecs?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsCustomLabelSpecs[] | cdktf.IResolvable;
  /**
  * Description of the component definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#description DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Defines the metrics exporter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#exporter DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#exporter}
  */
  readonly exporter?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsExporter;
  /**
  * Defines the behavior of horizontal scale.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#horizontal_scale_policy DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#horizontal_scale_policy}
  */
  readonly horizontalScalePolicy?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsHorizontalScalePolicy;
  /**
  * Specify the logging files which can be observed and configured by cluster users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#log_configs DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#log_configs}
  */
  readonly logConfigs?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsLogConfigs[] | cdktf.IResolvable;
  /**
  * Deprecated since v0.9 monitor is monitoring config which provided by provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#monitor DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#monitor}
  */
  readonly monitor?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsMonitor;
  /**
  * This name could be used as default name of 'cluster.spec.componentSpecs.name', and needs to conform with same validation rules as 'cluster.spec.componentSpecs.name', currently complying with IANA Service Naming rule. This name will apply to cluster objects as the value of label 'apps.kubeblocks.io/component-name'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#name DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Defines the pod spec template of component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#pod_spec DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#pod_spec}
  */
  readonly podSpec?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsPodSpec;
  /**
  * Defines the command to be executed when the component is ready, and the command will only be executed once after the component becomes ready.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#post_start_spec DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#post_start_spec}
  */
  readonly postStartSpec?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsPostStartSpec;
  /**
  * Settings for health checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#probes DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#probes}
  */
  readonly probes?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsProbes;
  /**
  * Defines spec for 'Replication' workloads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#replication_spec DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#replication_spec}
  */
  readonly replicationSpec?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsReplicationSpec;
  /**
  * Defines workload spec of this component. From KB 0.7.0, RSM(InstanceSetSpec) will be the underlying CR which powers all kinds of workload in KB. RSM is an enhanced stateful workload extension dedicated for heavy-state workloads like databases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#rsm_spec DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#rsm_spec}
  */
  readonly rsmSpec?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpec;
  /**
  * Defines the template of scripts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#script_specs DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#script_specs}
  */
  readonly scriptSpecs?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsScriptSpecs[] | cdktf.IResolvable;
  /**
  * Defines the service spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#service DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#service}
  */
  readonly service?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsService;
  /**
  * Used to declare the service reference of the current component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#service_ref_declarations DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#service_ref_declarations}
  */
  readonly serviceRefDeclarations?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarations[] | cdktf.IResolvable;
  /**
  * Defines spec for 'Stateful' workloads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#stateful_spec DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#stateful_spec}
  */
  readonly statefulSpec?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpec;
  /**
  * Defines spec for 'Stateless' workloads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#stateless_spec DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#stateless_spec}
  */
  readonly statelessSpec?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpec;
  /**
  * Defines command to do switchover. In particular, when workloadType=Replication, the command defined in switchoverSpec will only be executed under the condition of cluster.componentSpecs[x].SwitchPolicy.type=Noop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#switchover_spec DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#switchover_spec}
  */
  readonly switchoverSpec?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpec;
  /**
  * Defines system accounts needed to manage the component, and the statement to create them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#system_accounts DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#system_accounts}
  */
  readonly systemAccounts?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccounts;
  /**
  * Defines settings to do volume protect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#volume_protection_spec DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#volume_protection_spec}
  */
  readonly volumeProtectionSpec?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpec;
  /**
  * Used to describe the purpose of the volumes mapping the name of the VolumeMounts in the PodSpec.Container field, such as data volume, log volume, etc. When backing up the volume, the volume can be correctly backed up according to the volumeType. For example: - 'name: data, type: data' means that the volume named 'data' is used to store 'data'. - 'name: binlog, type: log' means that the volume named 'binlog' is used to store 'log'. NOTE: When volumeTypes is not defined, the backup function will not be supported, even if a persistent volume has been specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#volume_types DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#volume_types}
  */
  readonly volumeTypes?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeTypes[] | cdktf.IResolvable;
  /**
  * Defines the type of the workload. - 'Stateless' describes stateless applications. - 'Stateful' describes common stateful applications. - 'Consensus' describes applications based on consensus protocols, such as raft and paxos. - 'Replication' describes applications based on the primary-secondary data replication protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#workload_type DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#workload_type}
  */
  readonly workloadType: string;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    character_type: cdktf.stringToTerraform(struct!.characterType),
    component_def_ref: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsComponentDefRefToTerraform, false)(struct!.componentDefRef),
    config_specs: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsConfigSpecsToTerraform, false)(struct!.configSpecs),
    consensus_spec: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsConsensusSpecToTerraform(struct!.consensusSpec),
    custom_label_specs: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsCustomLabelSpecsToTerraform, false)(struct!.customLabelSpecs),
    description: cdktf.stringToTerraform(struct!.description),
    exporter: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsExporterToTerraform(struct!.exporter),
    horizontal_scale_policy: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsHorizontalScalePolicyToTerraform(struct!.horizontalScalePolicy),
    log_configs: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsLogConfigsToTerraform, false)(struct!.logConfigs),
    monitor: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsMonitorToTerraform(struct!.monitor),
    name: cdktf.stringToTerraform(struct!.name),
    pod_spec: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsPodSpecToTerraform(struct!.podSpec),
    post_start_spec: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsPostStartSpecToTerraform(struct!.postStartSpec),
    probes: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsProbesToTerraform(struct!.probes),
    replication_spec: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsReplicationSpecToTerraform(struct!.replicationSpec),
    rsm_spec: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecToTerraform(struct!.rsmSpec),
    script_specs: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsScriptSpecsToTerraform, false)(struct!.scriptSpecs),
    service: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceToTerraform(struct!.service),
    service_ref_declarations: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarationsToTerraform, false)(struct!.serviceRefDeclarations),
    stateful_spec: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecToTerraform(struct!.statefulSpec),
    stateless_spec: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecToTerraform(struct!.statelessSpec),
    switchover_spec: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecToTerraform(struct!.switchoverSpec),
    system_accounts: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsToTerraform(struct!.systemAccounts),
    volume_protection_spec: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpecToTerraform(struct!.volumeProtectionSpec),
    volume_types: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeTypesToTerraform, false)(struct!.volumeTypes),
    workload_type: cdktf.stringToTerraform(struct!.workloadType),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    character_type: {
      value: cdktf.stringToHclTerraform(struct!.characterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    component_def_ref: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsComponentDefRefToHclTerraform, false)(struct!.componentDefRef),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsComponentDefRefList",
    },
    config_specs: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsConfigSpecsToHclTerraform, false)(struct!.configSpecs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsConfigSpecsList",
    },
    consensus_spec: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsConsensusSpecToHclTerraform(struct!.consensusSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsConsensusSpec",
    },
    custom_label_specs: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsCustomLabelSpecsToHclTerraform, false)(struct!.customLabelSpecs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsCustomLabelSpecsList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exporter: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsExporterToHclTerraform(struct!.exporter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsExporter",
    },
    horizontal_scale_policy: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsHorizontalScalePolicyToHclTerraform(struct!.horizontalScalePolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsHorizontalScalePolicy",
    },
    log_configs: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsLogConfigsToHclTerraform, false)(struct!.logConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsLogConfigsList",
    },
    monitor: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsMonitorToHclTerraform(struct!.monitor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsMonitor",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_spec: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsPodSpecToHclTerraform(struct!.podSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsPodSpec",
    },
    post_start_spec: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsPostStartSpecToHclTerraform(struct!.postStartSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsPostStartSpec",
    },
    probes: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsProbesToHclTerraform(struct!.probes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsProbes",
    },
    replication_spec: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsReplicationSpecToHclTerraform(struct!.replicationSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsReplicationSpec",
    },
    rsm_spec: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecToHclTerraform(struct!.rsmSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpec",
    },
    script_specs: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsScriptSpecsToHclTerraform, false)(struct!.scriptSpecs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsScriptSpecsList",
    },
    service: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsService",
    },
    service_ref_declarations: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarationsToHclTerraform, false)(struct!.serviceRefDeclarations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarationsList",
    },
    stateful_spec: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecToHclTerraform(struct!.statefulSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpec",
    },
    stateless_spec: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecToHclTerraform(struct!.statelessSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpec",
    },
    switchover_spec: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecToHclTerraform(struct!.switchoverSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpec",
    },
    system_accounts: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsToHclTerraform(struct!.systemAccounts),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccounts",
    },
    volume_protection_spec: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpecToHclTerraform(struct!.volumeProtectionSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpec",
    },
    volume_types: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeTypesToHclTerraform, false)(struct!.volumeTypes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeTypesList",
    },
    workload_type: {
      value: cdktf.stringToHclTerraform(struct!.workloadType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._characterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.characterType = this._characterType;
    }
    if (this._componentDefRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentDefRef = this._componentDefRef?.internalValue;
    }
    if (this._configSpecs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configSpecs = this._configSpecs?.internalValue;
    }
    if (this._consensusSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consensusSpec = this._consensusSpec?.internalValue;
    }
    if (this._customLabelSpecs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLabelSpecs = this._customLabelSpecs?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._exporter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exporter = this._exporter?.internalValue;
    }
    if (this._horizontalScalePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.horizontalScalePolicy = this._horizontalScalePolicy?.internalValue;
    }
    if (this._logConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logConfigs = this._logConfigs?.internalValue;
    }
    if (this._monitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._podSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSpec = this._podSpec?.internalValue;
    }
    if (this._postStartSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postStartSpec = this._postStartSpec?.internalValue;
    }
    if (this._probes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.probes = this._probes?.internalValue;
    }
    if (this._replicationSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationSpec = this._replicationSpec?.internalValue;
    }
    if (this._rsmSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsmSpec = this._rsmSpec?.internalValue;
    }
    if (this._scriptSpecs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptSpecs = this._scriptSpecs?.internalValue;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._serviceRefDeclarations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceRefDeclarations = this._serviceRefDeclarations?.internalValue;
    }
    if (this._statefulSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statefulSpec = this._statefulSpec?.internalValue;
    }
    if (this._statelessSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessSpec = this._statelessSpec?.internalValue;
    }
    if (this._switchoverSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchoverSpec = this._switchoverSpec?.internalValue;
    }
    if (this._systemAccounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAccounts = this._systemAccounts?.internalValue;
    }
    if (this._volumeProtectionSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeProtectionSpec = this._volumeProtectionSpec?.internalValue;
    }
    if (this._volumeTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeTypes = this._volumeTypes?.internalValue;
    }
    if (this._workloadType !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadType = this._workloadType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._characterType = undefined;
      this._componentDefRef.internalValue = undefined;
      this._configSpecs.internalValue = undefined;
      this._consensusSpec.internalValue = undefined;
      this._customLabelSpecs.internalValue = undefined;
      this._description = undefined;
      this._exporter.internalValue = undefined;
      this._horizontalScalePolicy.internalValue = undefined;
      this._logConfigs.internalValue = undefined;
      this._monitor.internalValue = undefined;
      this._name = undefined;
      this._podSpec.internalValue = undefined;
      this._postStartSpec.internalValue = undefined;
      this._probes.internalValue = undefined;
      this._replicationSpec.internalValue = undefined;
      this._rsmSpec.internalValue = undefined;
      this._scriptSpecs.internalValue = undefined;
      this._service.internalValue = undefined;
      this._serviceRefDeclarations.internalValue = undefined;
      this._statefulSpec.internalValue = undefined;
      this._statelessSpec.internalValue = undefined;
      this._switchoverSpec.internalValue = undefined;
      this._systemAccounts.internalValue = undefined;
      this._volumeProtectionSpec.internalValue = undefined;
      this._volumeTypes.internalValue = undefined;
      this._workloadType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._characterType = value.characterType;
      this._componentDefRef.internalValue = value.componentDefRef;
      this._configSpecs.internalValue = value.configSpecs;
      this._consensusSpec.internalValue = value.consensusSpec;
      this._customLabelSpecs.internalValue = value.customLabelSpecs;
      this._description = value.description;
      this._exporter.internalValue = value.exporter;
      this._horizontalScalePolicy.internalValue = value.horizontalScalePolicy;
      this._logConfigs.internalValue = value.logConfigs;
      this._monitor.internalValue = value.monitor;
      this._name = value.name;
      this._podSpec.internalValue = value.podSpec;
      this._postStartSpec.internalValue = value.postStartSpec;
      this._probes.internalValue = value.probes;
      this._replicationSpec.internalValue = value.replicationSpec;
      this._rsmSpec.internalValue = value.rsmSpec;
      this._scriptSpecs.internalValue = value.scriptSpecs;
      this._service.internalValue = value.service;
      this._serviceRefDeclarations.internalValue = value.serviceRefDeclarations;
      this._statefulSpec.internalValue = value.statefulSpec;
      this._statelessSpec.internalValue = value.statelessSpec;
      this._switchoverSpec.internalValue = value.switchoverSpec;
      this._systemAccounts.internalValue = value.systemAccounts;
      this._volumeProtectionSpec.internalValue = value.volumeProtectionSpec;
      this._volumeTypes.internalValue = value.volumeTypes;
      this._workloadType = value.workloadType;
    }
  }

  // character_type - computed: false, optional: true, required: false
  private _characterType?: string; 
  public get characterType() {
    return this.getStringAttribute('character_type');
  }
  public set characterType(value: string) {
    this._characterType = value;
  }
  public resetCharacterType() {
    this._characterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterTypeInput() {
    return this._characterType;
  }

  // component_def_ref - computed: false, optional: true, required: false
  private _componentDefRef = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsComponentDefRefList(this, "component_def_ref", false);
  public get componentDefRef() {
    return this._componentDefRef;
  }
  public putComponentDefRef(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsComponentDefRef[] | cdktf.IResolvable) {
    this._componentDefRef.internalValue = value;
  }
  public resetComponentDefRef() {
    this._componentDefRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentDefRefInput() {
    return this._componentDefRef.internalValue;
  }

  // config_specs - computed: false, optional: true, required: false
  private _configSpecs = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsConfigSpecsList(this, "config_specs", false);
  public get configSpecs() {
    return this._configSpecs;
  }
  public putConfigSpecs(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsConfigSpecs[] | cdktf.IResolvable) {
    this._configSpecs.internalValue = value;
  }
  public resetConfigSpecs() {
    this._configSpecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSpecsInput() {
    return this._configSpecs.internalValue;
  }

  // consensus_spec - computed: false, optional: true, required: false
  private _consensusSpec = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsConsensusSpecOutputReference(this, "consensus_spec");
  public get consensusSpec() {
    return this._consensusSpec;
  }
  public putConsensusSpec(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsConsensusSpec) {
    this._consensusSpec.internalValue = value;
  }
  public resetConsensusSpec() {
    this._consensusSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consensusSpecInput() {
    return this._consensusSpec.internalValue;
  }

  // custom_label_specs - computed: false, optional: true, required: false
  private _customLabelSpecs = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsCustomLabelSpecsList(this, "custom_label_specs", false);
  public get customLabelSpecs() {
    return this._customLabelSpecs;
  }
  public putCustomLabelSpecs(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsCustomLabelSpecs[] | cdktf.IResolvable) {
    this._customLabelSpecs.internalValue = value;
  }
  public resetCustomLabelSpecs() {
    this._customLabelSpecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLabelSpecsInput() {
    return this._customLabelSpecs.internalValue;
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

  // exporter - computed: false, optional: true, required: false
  private _exporter = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsExporterOutputReference(this, "exporter");
  public get exporter() {
    return this._exporter;
  }
  public putExporter(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsExporter) {
    this._exporter.internalValue = value;
  }
  public resetExporter() {
    this._exporter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exporterInput() {
    return this._exporter.internalValue;
  }

  // horizontal_scale_policy - computed: false, optional: true, required: false
  private _horizontalScalePolicy = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsHorizontalScalePolicyOutputReference(this, "horizontal_scale_policy");
  public get horizontalScalePolicy() {
    return this._horizontalScalePolicy;
  }
  public putHorizontalScalePolicy(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsHorizontalScalePolicy) {
    this._horizontalScalePolicy.internalValue = value;
  }
  public resetHorizontalScalePolicy() {
    this._horizontalScalePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get horizontalScalePolicyInput() {
    return this._horizontalScalePolicy.internalValue;
  }

  // log_configs - computed: false, optional: true, required: false
  private _logConfigs = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsLogConfigsList(this, "log_configs", false);
  public get logConfigs() {
    return this._logConfigs;
  }
  public putLogConfigs(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsLogConfigs[] | cdktf.IResolvable) {
    this._logConfigs.internalValue = value;
  }
  public resetLogConfigs() {
    this._logConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigsInput() {
    return this._logConfigs.internalValue;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsMonitor) {
    this._monitor.internalValue = value;
  }
  public resetMonitor() {
    this._monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
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

  // pod_spec - computed: false, optional: true, required: false
  private _podSpec = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsPodSpecOutputReference(this, "pod_spec");
  public get podSpec() {
    return this._podSpec;
  }
  public putPodSpec(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsPodSpec) {
    this._podSpec.internalValue = value;
  }
  public resetPodSpec() {
    this._podSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSpecInput() {
    return this._podSpec.internalValue;
  }

  // post_start_spec - computed: false, optional: true, required: false
  private _postStartSpec = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsPostStartSpecOutputReference(this, "post_start_spec");
  public get postStartSpec() {
    return this._postStartSpec;
  }
  public putPostStartSpec(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsPostStartSpec) {
    this._postStartSpec.internalValue = value;
  }
  public resetPostStartSpec() {
    this._postStartSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStartSpecInput() {
    return this._postStartSpec.internalValue;
  }

  // probes - computed: false, optional: true, required: false
  private _probes = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsProbesOutputReference(this, "probes");
  public get probes() {
    return this._probes;
  }
  public putProbes(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsProbes) {
    this._probes.internalValue = value;
  }
  public resetProbes() {
    this._probes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probesInput() {
    return this._probes.internalValue;
  }

  // replication_spec - computed: false, optional: true, required: false
  private _replicationSpec = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsReplicationSpecOutputReference(this, "replication_spec");
  public get replicationSpec() {
    return this._replicationSpec;
  }
  public putReplicationSpec(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsReplicationSpec) {
    this._replicationSpec.internalValue = value;
  }
  public resetReplicationSpec() {
    this._replicationSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSpecInput() {
    return this._replicationSpec.internalValue;
  }

  // rsm_spec - computed: false, optional: true, required: false
  private _rsmSpec = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpecOutputReference(this, "rsm_spec");
  public get rsmSpec() {
    return this._rsmSpec;
  }
  public putRsmSpec(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsRsmSpec) {
    this._rsmSpec.internalValue = value;
  }
  public resetRsmSpec() {
    this._rsmSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsmSpecInput() {
    return this._rsmSpec.internalValue;
  }

  // script_specs - computed: false, optional: true, required: false
  private _scriptSpecs = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsScriptSpecsList(this, "script_specs", false);
  public get scriptSpecs() {
    return this._scriptSpecs;
  }
  public putScriptSpecs(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsScriptSpecs[] | cdktf.IResolvable) {
    this._scriptSpecs.internalValue = value;
  }
  public resetScriptSpecs() {
    this._scriptSpecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptSpecsInput() {
    return this._scriptSpecs.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // service_ref_declarations - computed: false, optional: true, required: false
  private _serviceRefDeclarations = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarationsList(this, "service_ref_declarations", false);
  public get serviceRefDeclarations() {
    return this._serviceRefDeclarations;
  }
  public putServiceRefDeclarations(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsServiceRefDeclarations[] | cdktf.IResolvable) {
    this._serviceRefDeclarations.internalValue = value;
  }
  public resetServiceRefDeclarations() {
    this._serviceRefDeclarations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRefDeclarationsInput() {
    return this._serviceRefDeclarations.internalValue;
  }

  // stateful_spec - computed: false, optional: true, required: false
  private _statefulSpec = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpecOutputReference(this, "stateful_spec");
  public get statefulSpec() {
    return this._statefulSpec;
  }
  public putStatefulSpec(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatefulSpec) {
    this._statefulSpec.internalValue = value;
  }
  public resetStatefulSpec() {
    this._statefulSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulSpecInput() {
    return this._statefulSpec.internalValue;
  }

  // stateless_spec - computed: false, optional: true, required: false
  private _statelessSpec = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpecOutputReference(this, "stateless_spec");
  public get statelessSpec() {
    return this._statelessSpec;
  }
  public putStatelessSpec(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsStatelessSpec) {
    this._statelessSpec.internalValue = value;
  }
  public resetStatelessSpec() {
    this._statelessSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessSpecInput() {
    return this._statelessSpec.internalValue;
  }

  // switchover_spec - computed: false, optional: true, required: false
  private _switchoverSpec = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpecOutputReference(this, "switchover_spec");
  public get switchoverSpec() {
    return this._switchoverSpec;
  }
  public putSwitchoverSpec(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSwitchoverSpec) {
    this._switchoverSpec.internalValue = value;
  }
  public resetSwitchoverSpec() {
    this._switchoverSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchoverSpecInput() {
    return this._switchoverSpec.internalValue;
  }

  // system_accounts - computed: false, optional: true, required: false
  private _systemAccounts = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccountsOutputReference(this, "system_accounts");
  public get systemAccounts() {
    return this._systemAccounts;
  }
  public putSystemAccounts(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsSystemAccounts) {
    this._systemAccounts.internalValue = value;
  }
  public resetSystemAccounts() {
    this._systemAccounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAccountsInput() {
    return this._systemAccounts.internalValue;
  }

  // volume_protection_spec - computed: false, optional: true, required: false
  private _volumeProtectionSpec = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpecOutputReference(this, "volume_protection_spec");
  public get volumeProtectionSpec() {
    return this._volumeProtectionSpec;
  }
  public putVolumeProtectionSpec(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeProtectionSpec) {
    this._volumeProtectionSpec.internalValue = value;
  }
  public resetVolumeProtectionSpec() {
    this._volumeProtectionSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeProtectionSpecInput() {
    return this._volumeProtectionSpec.internalValue;
  }

  // volume_types - computed: false, optional: true, required: false
  private _volumeTypes = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeTypesList(this, "volume_types", false);
  public get volumeTypes() {
    return this._volumeTypes;
  }
  public putVolumeTypes(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsVolumeTypes[] | cdktf.IResolvable) {
    this._volumeTypes.internalValue = value;
  }
  public resetVolumeTypes() {
    this._volumeTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypesInput() {
    return this._volumeTypes.internalValue;
  }

  // workload_type - computed: false, optional: false, required: true
  private _workloadType?: string; 
  public get workloadType() {
    return this.getStringAttribute('workload_type');
  }
  public set workloadType(value: string) {
    this._workloadType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadTypeInput() {
    return this._workloadType;
  }
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsOutputReference {
    return new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesComponents {
  /**
  * Specifies the exact name, name prefix, or regular expression pattern for matching the name of the ComponentDefinition custom resource (CR) that defines the Component's characteristics and behavior. The system selects the ComponentDefinition CR with the latest version that matches the pattern. This approach allows: 1. Precise selection by providing the exact name of a ComponentDefinition CR. 2. Flexible and automatic selection of the most up-to-date ComponentDefinition CR by specifying a name prefix or regular expression pattern. Once set, this field cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#comp_def DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#comp_def}
  */
  readonly compDef: string;
  /**
  * Defines the unique identifier of the component within the cluster topology. It follows IANA Service naming rules and is used as part of the Service's DNS name. The name must start with a lowercase letter, can contain lowercase letters, numbers, and hyphens, and must end with a lowercase letter or number. Cannot be updated once set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#name DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesComponentsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comp_def: cdktf.stringToTerraform(struct!.compDef),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesComponentsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comp_def: {
      value: cdktf.stringToHclTerraform(struct!.compDef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesComponents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compDef !== undefined) {
      hasAnyValues = true;
      internalValueResult.compDef = this._compDef;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesComponents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compDef = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compDef = value.compDef;
      this._name = value.name;
    }
  }

  // comp_def - computed: false, optional: false, required: true
  private _compDef?: string; 
  public get compDef() {
    return this.getStringAttribute('comp_def');
  }
  public set compDef(value: string) {
    this._compDef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compDefInput() {
    return this._compDef;
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
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesComponentsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesComponents[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesComponentsOutputReference {
    return new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesOrders {
  /**
  * Specifies the order for creating and initializing components. This is designed for components that depend on one another. Components without dependencies can be grouped together. Components that can be provisioned independently or have no dependencies can be listed together in the same stage, separated by commas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#provision DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#provision}
  */
  readonly provision?: string[];
  /**
  * Outlines the order for stopping and deleting components. This sequence is designed for components that require a graceful shutdown or have interdependencies. Components that can be terminated independently or have no dependencies can be listed together in the same stage, separated by commas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#terminate DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#terminate}
  */
  readonly terminate?: string[];
  /**
  * Update determines the order for updating components' specifications, such as image upgrades or resource scaling. This sequence is designed for components that have dependencies or require specific update procedures. Components that can be updated independently or have no dependencies can be listed together in the same stage, separated by commas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#update DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#update}
  */
  readonly update?: string[];
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesOrdersToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesOrders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provision: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.provision),
    terminate: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.terminate),
    update: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.update),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesOrdersToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesOrders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provision: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.provision),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    terminate: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.terminate),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    update: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.update),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesOrdersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesOrders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provision !== undefined) {
      hasAnyValues = true;
      internalValueResult.provision = this._provision;
    }
    if (this._terminate !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminate = this._terminate;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesOrders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._provision = undefined;
      this._terminate = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._provision = value.provision;
      this._terminate = value.terminate;
      this._update = value.update;
    }
  }

  // provision - computed: false, optional: true, required: false
  private _provision?: string[]; 
  public get provision() {
    return this.getListAttribute('provision');
  }
  public set provision(value: string[]) {
    this._provision = value;
  }
  public resetProvision() {
    this._provision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionInput() {
    return this._provision;
  }

  // terminate - computed: false, optional: true, required: false
  private _terminate?: string[]; 
  public get terminate() {
    return this.getListAttribute('terminate');
  }
  public set terminate(value: string[]) {
    this._terminate = value;
  }
  public resetTerminate() {
    this._terminate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateInput() {
    return this._terminate;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string[]; 
  public get update() {
    return this.getListAttribute('update');
  }
  public set update(value: string[]) {
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
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologies {
  /**
  * Components specifies the components in the topology.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#components DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#components}
  */
  readonly components: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesComponents[] | cdktf.IResolvable;
  /**
  * Default indicates whether this topology serves as the default configuration. When set to true, this topology is automatically used unless another is explicitly specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#default DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Name is the unique identifier for the cluster topology. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#name DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Specifies the sequence in which components within a cluster topology are started, stopped, and upgraded. This ordering is crucial for maintaining the correct dependencies and operational flow across components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#orders DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#orders}
  */
  readonly orders?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesOrders;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    components: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesComponentsToTerraform, false)(struct!.components),
    default: cdktf.booleanToTerraform(struct!.default),
    name: cdktf.stringToTerraform(struct!.name),
    orders: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesOrdersToTerraform(struct!.orders),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    components: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesComponentsToHclTerraform, false)(struct!.components),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesComponentsList",
    },
    default: {
      value: cdktf.booleanToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    orders: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesOrdersToHclTerraform(struct!.orders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesOrders",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._components?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components?.internalValue;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._orders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orders = this._orders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._components.internalValue = undefined;
      this._default = undefined;
      this._name = undefined;
      this._orders.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._components.internalValue = value.components;
      this._default = value.default;
      this._name = value.name;
      this._orders.internalValue = value.orders;
    }
  }

  // components - computed: false, optional: false, required: true
  private _components = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }
  public putComponents(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesComponents[] | cdktf.IResolvable) {
    this._components.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components.internalValue;
  }

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // orders - computed: false, optional: true, required: false
  private _orders = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesOrdersOutputReference(this, "orders");
  public get orders() {
    return this._orders;
  }
  public putOrders(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesOrders) {
    this._orders.internalValue = value;
  }
  public resetOrders() {
    this._orders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ordersInput() {
    return this._orders.internalValue;
  }
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesOutputReference {
    return new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpec {
  /**
  * Provides the definitions for the cluster components. Deprecated since v0.9. Components should now be individually defined using ComponentDefinition and collectively referenced via 'topology.components'. This field is maintained for backward compatibility and its use is discouraged. Existing usage should be updated to the current preferred approach to avoid compatibility issues in future releases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#component_defs DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#component_defs}
  */
  readonly componentDefs?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefs[] | cdktf.IResolvable;
  /**
  * Connection credential template used for creating a connection credential secret for cluster objects. Built-in objects are: - '$(RANDOM_PASSWD)' random 8 characters. - '$(STRONG_RANDOM_PASSWD)' random 16 characters, with mixed cases, digits and symbols. - '$(UUID)' generate a random UUID v4 string. - '$(UUID_B64)' generate a random UUID v4 BASE64 encoded string. - '$(UUID_STR_B64)' generate a random UUID v4 string then BASE64 encoded. - '$(UUID_HEX)' generate a random UUID v4 HEX representation. - '$(HEADLESS_SVC_FQDN)' headless service FQDN placeholder, value pattern is '$(CLUSTER_NAME)-$(1ST_COMP_NAME)-headless.$(NAMESPACE).svc', where 1ST_COMP_NAME is the 1st component that provide 'ClusterDefinition.spec.componentDefs[].service' attribute; - '$(SVC_FQDN)' service FQDN placeholder, value pattern is '$(CLUSTER_NAME)-$(1ST_COMP_NAME).$(NAMESPACE).svc', where 1ST_COMP_NAME is the 1st component that provide 'ClusterDefinition.spec.componentDefs[].service' attribute; - '$(SVC_PORT_{PORT-NAME})' is ServicePort's port value with specified port name, i.e, a servicePort JSON struct: '{'name': 'mysql', 'targetPort': 'mysqlContainerPort', 'port': 3306}', and '$(SVC_PORT_mysql)' in the connection credential value is 3306. Deprecated since v0.9. This field is maintained for backward compatibility and its use is discouraged. Existing usage should be updated to the current preferred approach to avoid compatibility issues in future releases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#connection_credential DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#connection_credential}
  */
  readonly connectionCredential?: { [key: string]: string };
  /**
  * Topologies defines all possible topologies within the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#topologies DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#topologies}
  */
  readonly topologies?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologies[] | cdktf.IResolvable;
  /**
  * Specifies the well-known database type, such as mysql, redis, or mongodb. Deprecated since v0.9. This field is maintained for backward compatibility and its use is discouraged. Existing usage should be updated to the current preferred approach to avoid compatibility issues in future releases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1alpha1_manifest#type DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component_defs: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsToTerraform, false)(struct!.componentDefs),
    connection_credential: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.connectionCredential),
    topologies: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesToTerraform, false)(struct!.topologies),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component_defs: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsToHclTerraform, false)(struct!.componentDefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsList",
    },
    connection_credential: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.connectionCredential),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    topologies: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesToHclTerraform, false)(struct!.topologies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._componentDefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentDefs = this._componentDefs?.internalValue;
    }
    if (this._connectionCredential !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionCredential = this._connectionCredential;
    }
    if (this._topologies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologies = this._topologies?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._componentDefs.internalValue = undefined;
      this._connectionCredential = undefined;
      this._topologies.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._componentDefs.internalValue = value.componentDefs;
      this._connectionCredential = value.connectionCredential;
      this._topologies.internalValue = value.topologies;
      this._type = value.type;
    }
  }

  // component_defs - computed: false, optional: true, required: false
  private _componentDefs = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefsList(this, "component_defs", false);
  public get componentDefs() {
    return this._componentDefs;
  }
  public putComponentDefs(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecComponentDefs[] | cdktf.IResolvable) {
    this._componentDefs.internalValue = value;
  }
  public resetComponentDefs() {
    this._componentDefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentDefsInput() {
    return this._componentDefs.internalValue;
  }

  // connection_credential - computed: false, optional: true, required: false
  private _connectionCredential?: { [key: string]: string }; 
  public get connectionCredential() {
    return this.getStringMapAttribute('connection_credential');
  }
  public set connectionCredential(value: { [key: string]: string }) {
    this._connectionCredential = value;
  }
  public resetConnectionCredential() {
    this._connectionCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionCredentialInput() {
    return this._connectionCredential;
  }

  // topologies - computed: false, optional: true, required: false
  private _topologies = new DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologiesList(this, "topologies", false);
  public get topologies() {
    return this._topologies;
  }
  public putTopologies(value: DataK8SAppsKubeblocksIoClusterDefinitionV1Alpha1ManifestSpecTopologies[] | cdktf.IResolvable) {
    this._topologies.internalValue = value;
  }
  public resetTopologies() {
    this._topologies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologiesInput() {
    return this._topologies.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
