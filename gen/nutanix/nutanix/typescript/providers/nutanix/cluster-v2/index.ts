// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#categories ClusterV2#categories}
  */
  readonly categories?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#container_name ClusterV2#container_name}
  */
  readonly containerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#dryrun ClusterV2#dryrun}
  */
  readonly dryrun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#expand ClusterV2#expand}
  */
  readonly expand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#ext_id ClusterV2#ext_id}
  */
  readonly extId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#id ClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#name ClusterV2#name}
  */
  readonly name: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#config ClusterV2#config}
  */
  readonly config?: ClusterV2ConfigA[] | cdktf.IResolvable;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#network ClusterV2#network}
  */
  readonly network?: ClusterV2Network[] | cdktf.IResolvable;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#nodes ClusterV2#nodes}
  */
  readonly nodes?: ClusterV2Nodes[] | cdktf.IResolvable;
}
export interface ClusterV2Links {
}

export function clusterV2LinksToTerraform(struct?: ClusterV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterV2LinksToHclTerraform(struct?: ClusterV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterV2LinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2Links | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2Links | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class ClusterV2LinksList extends cdktf.ComplexList {

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
  public get(index: number): ClusterV2LinksOutputReference {
    return new ClusterV2LinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2ConfigBuildInfo {
}

export function clusterV2ConfigBuildInfoToTerraform(struct?: ClusterV2ConfigBuildInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterV2ConfigBuildInfoToHclTerraform(struct?: ClusterV2ConfigBuildInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterV2ConfigBuildInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2ConfigBuildInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2ConfigBuildInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build_type - computed: true, optional: false, required: false
  public get buildType() {
    return this.getStringAttribute('build_type');
  }

  // commit_id - computed: true, optional: false, required: false
  public get commitId() {
    return this.getStringAttribute('commit_id');
  }

  // full_version - computed: true, optional: false, required: false
  public get fullVersion() {
    return this.getStringAttribute('full_version');
  }

  // short_commit_id - computed: true, optional: false, required: false
  public get shortCommitId() {
    return this.getStringAttribute('short_commit_id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class ClusterV2ConfigBuildInfoList extends cdktf.ComplexList {

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
  public get(index: number): ClusterV2ConfigBuildInfoOutputReference {
    return new ClusterV2ConfigBuildInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2ConfigClusterSoftwareMap {
}

export function clusterV2ConfigClusterSoftwareMapToTerraform(struct?: ClusterV2ConfigClusterSoftwareMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterV2ConfigClusterSoftwareMapToHclTerraform(struct?: ClusterV2ConfigClusterSoftwareMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterV2ConfigClusterSoftwareMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2ConfigClusterSoftwareMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2ConfigClusterSoftwareMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // software_type - computed: true, optional: false, required: false
  public get softwareType() {
    return this.getStringAttribute('software_type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class ClusterV2ConfigClusterSoftwareMapList extends cdktf.ComplexList {

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
  public get(index: number): ClusterV2ConfigClusterSoftwareMapOutputReference {
    return new ClusterV2ConfigClusterSoftwareMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2ConfigAuthorizedPublicKeyListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#key ClusterV2#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#name ClusterV2#name}
  */
  readonly name?: string;
}

export function clusterV2ConfigAuthorizedPublicKeyListStructToTerraform(struct?: ClusterV2ConfigAuthorizedPublicKeyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function clusterV2ConfigAuthorizedPublicKeyListStructToHclTerraform(struct?: ClusterV2ConfigAuthorizedPublicKeyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class ClusterV2ConfigAuthorizedPublicKeyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2ConfigAuthorizedPublicKeyListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2ConfigAuthorizedPublicKeyListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: true, optional: true, required: false
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

export class ClusterV2ConfigAuthorizedPublicKeyListStructList extends cdktf.ComplexList {
  public internalValue? : ClusterV2ConfigAuthorizedPublicKeyListStruct[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2ConfigAuthorizedPublicKeyListStructOutputReference {
    return new ClusterV2ConfigAuthorizedPublicKeyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2ConfigFaultToleranceStateRedundancyStatus {
}

export function clusterV2ConfigFaultToleranceStateRedundancyStatusToTerraform(struct?: ClusterV2ConfigFaultToleranceStateRedundancyStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterV2ConfigFaultToleranceStateRedundancyStatusToHclTerraform(struct?: ClusterV2ConfigFaultToleranceStateRedundancyStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterV2ConfigFaultToleranceStateRedundancyStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2ConfigFaultToleranceStateRedundancyStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2ConfigFaultToleranceStateRedundancyStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_cassandra_preparation_done - computed: true, optional: false, required: false
  public get isCassandraPreparationDone() {
    return this.getBooleanAttribute('is_cassandra_preparation_done');
  }

  // is_zookeeper_preparation_done - computed: true, optional: false, required: false
  public get isZookeeperPreparationDone() {
    return this.getBooleanAttribute('is_zookeeper_preparation_done');
  }
}

export class ClusterV2ConfigFaultToleranceStateRedundancyStatusList extends cdktf.ComplexList {

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
  public get(index: number): ClusterV2ConfigFaultToleranceStateRedundancyStatusOutputReference {
    return new ClusterV2ConfigFaultToleranceStateRedundancyStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2ConfigFaultToleranceState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#desired_cluster_fault_tolerance ClusterV2#desired_cluster_fault_tolerance}
  */
  readonly desiredClusterFaultTolerance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#domain_awareness_level ClusterV2#domain_awareness_level}
  */
  readonly domainAwarenessLevel?: string;
}

export function clusterV2ConfigFaultToleranceStateToTerraform(struct?: ClusterV2ConfigFaultToleranceState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired_cluster_fault_tolerance: cdktf.stringToTerraform(struct!.desiredClusterFaultTolerance),
    domain_awareness_level: cdktf.stringToTerraform(struct!.domainAwarenessLevel),
  }
}


export function clusterV2ConfigFaultToleranceStateToHclTerraform(struct?: ClusterV2ConfigFaultToleranceState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    desired_cluster_fault_tolerance: {
      value: cdktf.stringToHclTerraform(struct!.desiredClusterFaultTolerance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_awareness_level: {
      value: cdktf.stringToHclTerraform(struct!.domainAwarenessLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2ConfigFaultToleranceStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2ConfigFaultToleranceState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredClusterFaultTolerance !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredClusterFaultTolerance = this._desiredClusterFaultTolerance;
    }
    if (this._domainAwarenessLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainAwarenessLevel = this._domainAwarenessLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2ConfigFaultToleranceState | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._desiredClusterFaultTolerance = undefined;
      this._domainAwarenessLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._desiredClusterFaultTolerance = value.desiredClusterFaultTolerance;
      this._domainAwarenessLevel = value.domainAwarenessLevel;
    }
  }

  // current_cluster_fault_tolerance - computed: true, optional: false, required: false
  public get currentClusterFaultTolerance() {
    return this.getStringAttribute('current_cluster_fault_tolerance');
  }

  // current_max_fault_tolerance - computed: true, optional: false, required: false
  public get currentMaxFaultTolerance() {
    return this.getNumberAttribute('current_max_fault_tolerance');
  }

  // desired_cluster_fault_tolerance - computed: true, optional: true, required: false
  private _desiredClusterFaultTolerance?: string; 
  public get desiredClusterFaultTolerance() {
    return this.getStringAttribute('desired_cluster_fault_tolerance');
  }
  public set desiredClusterFaultTolerance(value: string) {
    this._desiredClusterFaultTolerance = value;
  }
  public resetDesiredClusterFaultTolerance() {
    this._desiredClusterFaultTolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredClusterFaultToleranceInput() {
    return this._desiredClusterFaultTolerance;
  }

  // desired_max_fault_tolerance - computed: true, optional: false, required: false
  public get desiredMaxFaultTolerance() {
    return this.getNumberAttribute('desired_max_fault_tolerance');
  }

  // domain_awareness_level - computed: true, optional: true, required: false
  private _domainAwarenessLevel?: string; 
  public get domainAwarenessLevel() {
    return this.getStringAttribute('domain_awareness_level');
  }
  public set domainAwarenessLevel(value: string) {
    this._domainAwarenessLevel = value;
  }
  public resetDomainAwarenessLevel() {
    this._domainAwarenessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainAwarenessLevelInput() {
    return this._domainAwarenessLevel;
  }

  // redundancy_status - computed: true, optional: false, required: false
  private _redundancyStatus = new ClusterV2ConfigFaultToleranceStateRedundancyStatusList(this, "redundancy_status", false);
  public get redundancyStatus() {
    return this._redundancyStatus;
  }
}

export class ClusterV2ConfigFaultToleranceStateList extends cdktf.ComplexList {
  public internalValue? : ClusterV2ConfigFaultToleranceState[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2ConfigFaultToleranceStateOutputReference {
    return new ClusterV2ConfigFaultToleranceStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2ConfigPulseStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#is_enabled ClusterV2#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#pii_scrubbing_level ClusterV2#pii_scrubbing_level}
  */
  readonly piiScrubbingLevel?: string;
}

export function clusterV2ConfigPulseStatusToTerraform(struct?: ClusterV2ConfigPulseStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    pii_scrubbing_level: cdktf.stringToTerraform(struct!.piiScrubbingLevel),
  }
}


export function clusterV2ConfigPulseStatusToHclTerraform(struct?: ClusterV2ConfigPulseStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pii_scrubbing_level: {
      value: cdktf.stringToHclTerraform(struct!.piiScrubbingLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2ConfigPulseStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2ConfigPulseStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._piiScrubbingLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.piiScrubbingLevel = this._piiScrubbingLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2ConfigPulseStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEnabled = undefined;
      this._piiScrubbingLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isEnabled = value.isEnabled;
      this._piiScrubbingLevel = value.piiScrubbingLevel;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // pii_scrubbing_level - computed: true, optional: true, required: false
  private _piiScrubbingLevel?: string; 
  public get piiScrubbingLevel() {
    return this.getStringAttribute('pii_scrubbing_level');
  }
  public set piiScrubbingLevel(value: string) {
    this._piiScrubbingLevel = value;
  }
  public resetPiiScrubbingLevel() {
    this._piiScrubbingLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiScrubbingLevelInput() {
    return this._piiScrubbingLevel;
  }
}

export class ClusterV2ConfigPulseStatusList extends cdktf.ComplexList {
  public internalValue? : ClusterV2ConfigPulseStatus[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2ConfigPulseStatusOutputReference {
    return new ClusterV2ConfigPulseStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2ConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#cluster_arch ClusterV2#cluster_arch}
  */
  readonly clusterArch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#cluster_function ClusterV2#cluster_function}
  */
  readonly clusterFunction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#encryption_in_transit_status ClusterV2#encryption_in_transit_status}
  */
  readonly encryptionInTransitStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#operation_mode ClusterV2#operation_mode}
  */
  readonly operationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#redundancy_factor ClusterV2#redundancy_factor}
  */
  readonly redundancyFactor?: number;
  /**
  * authorized_public_key_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#authorized_public_key_list ClusterV2#authorized_public_key_list}
  */
  readonly authorizedPublicKeyList?: ClusterV2ConfigAuthorizedPublicKeyListStruct[] | cdktf.IResolvable;
  /**
  * fault_tolerance_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#fault_tolerance_state ClusterV2#fault_tolerance_state}
  */
  readonly faultToleranceState?: ClusterV2ConfigFaultToleranceState[] | cdktf.IResolvable;
  /**
  * pulse_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#pulse_status ClusterV2#pulse_status}
  */
  readonly pulseStatus?: ClusterV2ConfigPulseStatus[] | cdktf.IResolvable;
}

export function clusterV2ConfigAToTerraform(struct?: ClusterV2ConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_arch: cdktf.stringToTerraform(struct!.clusterArch),
    cluster_function: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterFunction),
    encryption_in_transit_status: cdktf.stringToTerraform(struct!.encryptionInTransitStatus),
    operation_mode: cdktf.stringToTerraform(struct!.operationMode),
    redundancy_factor: cdktf.numberToTerraform(struct!.redundancyFactor),
    authorized_public_key_list: cdktf.listMapper(clusterV2ConfigAuthorizedPublicKeyListStructToTerraform, true)(struct!.authorizedPublicKeyList),
    fault_tolerance_state: cdktf.listMapper(clusterV2ConfigFaultToleranceStateToTerraform, true)(struct!.faultToleranceState),
    pulse_status: cdktf.listMapper(clusterV2ConfigPulseStatusToTerraform, true)(struct!.pulseStatus),
  }
}


export function clusterV2ConfigAToHclTerraform(struct?: ClusterV2ConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_arch: {
      value: cdktf.stringToHclTerraform(struct!.clusterArch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_function: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterFunction),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    encryption_in_transit_status: {
      value: cdktf.stringToHclTerraform(struct!.encryptionInTransitStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation_mode: {
      value: cdktf.stringToHclTerraform(struct!.operationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redundancy_factor: {
      value: cdktf.numberToHclTerraform(struct!.redundancyFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authorized_public_key_list: {
      value: cdktf.listMapperHcl(clusterV2ConfigAuthorizedPublicKeyListStructToHclTerraform, true)(struct!.authorizedPublicKeyList),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2ConfigAuthorizedPublicKeyListStructList",
    },
    fault_tolerance_state: {
      value: cdktf.listMapperHcl(clusterV2ConfigFaultToleranceStateToHclTerraform, true)(struct!.faultToleranceState),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2ConfigFaultToleranceStateList",
    },
    pulse_status: {
      value: cdktf.listMapperHcl(clusterV2ConfigPulseStatusToHclTerraform, true)(struct!.pulseStatus),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2ConfigPulseStatusList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2ConfigAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2ConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterArch !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterArch = this._clusterArch;
    }
    if (this._clusterFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterFunction = this._clusterFunction;
    }
    if (this._encryptionInTransitStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionInTransitStatus = this._encryptionInTransitStatus;
    }
    if (this._operationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationMode = this._operationMode;
    }
    if (this._redundancyFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.redundancyFactor = this._redundancyFactor;
    }
    if (this._authorizedPublicKeyList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedPublicKeyList = this._authorizedPublicKeyList?.internalValue;
    }
    if (this._faultToleranceState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultToleranceState = this._faultToleranceState?.internalValue;
    }
    if (this._pulseStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pulseStatus = this._pulseStatus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2ConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterArch = undefined;
      this._clusterFunction = undefined;
      this._encryptionInTransitStatus = undefined;
      this._operationMode = undefined;
      this._redundancyFactor = undefined;
      this._authorizedPublicKeyList.internalValue = undefined;
      this._faultToleranceState.internalValue = undefined;
      this._pulseStatus.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterArch = value.clusterArch;
      this._clusterFunction = value.clusterFunction;
      this._encryptionInTransitStatus = value.encryptionInTransitStatus;
      this._operationMode = value.operationMode;
      this._redundancyFactor = value.redundancyFactor;
      this._authorizedPublicKeyList.internalValue = value.authorizedPublicKeyList;
      this._faultToleranceState.internalValue = value.faultToleranceState;
      this._pulseStatus.internalValue = value.pulseStatus;
    }
  }

  // build_info - computed: true, optional: false, required: false
  private _buildInfo = new ClusterV2ConfigBuildInfoList(this, "build_info", false);
  public get buildInfo() {
    return this._buildInfo;
  }

  // cluster_arch - computed: true, optional: true, required: false
  private _clusterArch?: string; 
  public get clusterArch() {
    return this.getStringAttribute('cluster_arch');
  }
  public set clusterArch(value: string) {
    this._clusterArch = value;
  }
  public resetClusterArch() {
    this._clusterArch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterArchInput() {
    return this._clusterArch;
  }

  // cluster_function - computed: true, optional: true, required: false
  private _clusterFunction?: string[]; 
  public get clusterFunction() {
    return this.getListAttribute('cluster_function');
  }
  public set clusterFunction(value: string[]) {
    this._clusterFunction = value;
  }
  public resetClusterFunction() {
    this._clusterFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterFunctionInput() {
    return this._clusterFunction;
  }

  // cluster_software_map - computed: true, optional: false, required: false
  private _clusterSoftwareMap = new ClusterV2ConfigClusterSoftwareMapList(this, "cluster_software_map", false);
  public get clusterSoftwareMap() {
    return this._clusterSoftwareMap;
  }

  // encryption_in_transit_status - computed: true, optional: true, required: false
  private _encryptionInTransitStatus?: string; 
  public get encryptionInTransitStatus() {
    return this.getStringAttribute('encryption_in_transit_status');
  }
  public set encryptionInTransitStatus(value: string) {
    this._encryptionInTransitStatus = value;
  }
  public resetEncryptionInTransitStatus() {
    this._encryptionInTransitStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInTransitStatusInput() {
    return this._encryptionInTransitStatus;
  }

  // encryption_option - computed: true, optional: false, required: false
  public get encryptionOption() {
    return this.getListAttribute('encryption_option');
  }

  // encryption_scope - computed: true, optional: false, required: false
  public get encryptionScope() {
    return this.getListAttribute('encryption_scope');
  }

  // hypervisor_types - computed: true, optional: false, required: false
  public get hypervisorTypes() {
    return this.getListAttribute('hypervisor_types');
  }

  // incarnation_id - computed: true, optional: false, required: false
  public get incarnationId() {
    return this.getNumberAttribute('incarnation_id');
  }

  // is_available - computed: true, optional: false, required: false
  public get isAvailable() {
    return this.getBooleanAttribute('is_available');
  }

  // is_lts - computed: true, optional: false, required: false
  public get isLts() {
    return this.getBooleanAttribute('is_lts');
  }

  // is_password_remote_login_enabled - computed: true, optional: false, required: false
  public get isPasswordRemoteLoginEnabled() {
    return this.getBooleanAttribute('is_password_remote_login_enabled');
  }

  // is_remote_support_enabled - computed: true, optional: false, required: false
  public get isRemoteSupportEnabled() {
    return this.getBooleanAttribute('is_remote_support_enabled');
  }

  // operation_mode - computed: true, optional: true, required: false
  private _operationMode?: string; 
  public get operationMode() {
    return this.getStringAttribute('operation_mode');
  }
  public set operationMode(value: string) {
    this._operationMode = value;
  }
  public resetOperationMode() {
    this._operationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationModeInput() {
    return this._operationMode;
  }

  // redundancy_factor - computed: true, optional: true, required: false
  private _redundancyFactor?: number; 
  public get redundancyFactor() {
    return this.getNumberAttribute('redundancy_factor');
  }
  public set redundancyFactor(value: number) {
    this._redundancyFactor = value;
  }
  public resetRedundancyFactor() {
    this._redundancyFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundancyFactorInput() {
    return this._redundancyFactor;
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // authorized_public_key_list - computed: false, optional: true, required: false
  private _authorizedPublicKeyList = new ClusterV2ConfigAuthorizedPublicKeyListStructList(this, "authorized_public_key_list", false);
  public get authorizedPublicKeyList() {
    return this._authorizedPublicKeyList;
  }
  public putAuthorizedPublicKeyList(value: ClusterV2ConfigAuthorizedPublicKeyListStruct[] | cdktf.IResolvable) {
    this._authorizedPublicKeyList.internalValue = value;
  }
  public resetAuthorizedPublicKeyList() {
    this._authorizedPublicKeyList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedPublicKeyListInput() {
    return this._authorizedPublicKeyList.internalValue;
  }

  // fault_tolerance_state - computed: false, optional: true, required: false
  private _faultToleranceState = new ClusterV2ConfigFaultToleranceStateList(this, "fault_tolerance_state", false);
  public get faultToleranceState() {
    return this._faultToleranceState;
  }
  public putFaultToleranceState(value: ClusterV2ConfigFaultToleranceState[] | cdktf.IResolvable) {
    this._faultToleranceState.internalValue = value;
  }
  public resetFaultToleranceState() {
    this._faultToleranceState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultToleranceStateInput() {
    return this._faultToleranceState.internalValue;
  }

  // pulse_status - computed: false, optional: true, required: false
  private _pulseStatus = new ClusterV2ConfigPulseStatusList(this, "pulse_status", false);
  public get pulseStatus() {
    return this._pulseStatus;
  }
  public putPulseStatus(value: ClusterV2ConfigPulseStatus[] | cdktf.IResolvable) {
    this._pulseStatus.internalValue = value;
  }
  public resetPulseStatus() {
    this._pulseStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pulseStatusInput() {
    return this._pulseStatus.internalValue;
  }
}

export class ClusterV2ConfigAList extends cdktf.ComplexList {
  public internalValue? : ClusterV2ConfigA[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2ConfigAOutputReference {
    return new ClusterV2ConfigAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkBackplaneNetmask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#prefix_length ClusterV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#value ClusterV2#value}
  */
  readonly value: string;
}

export function clusterV2NetworkBackplaneNetmaskToTerraform(struct?: ClusterV2NetworkBackplaneNetmask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterV2NetworkBackplaneNetmaskToHclTerraform(struct?: ClusterV2NetworkBackplaneNetmask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkBackplaneNetmaskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkBackplaneNetmask | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkBackplaneNetmask | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterV2NetworkBackplaneNetmaskList extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkBackplaneNetmask[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkBackplaneNetmaskOutputReference {
    return new ClusterV2NetworkBackplaneNetmaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkBackplaneSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#prefix_length ClusterV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#value ClusterV2#value}
  */
  readonly value: string;
}

export function clusterV2NetworkBackplaneSubnetToTerraform(struct?: ClusterV2NetworkBackplaneSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterV2NetworkBackplaneSubnetToHclTerraform(struct?: ClusterV2NetworkBackplaneSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkBackplaneSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkBackplaneSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkBackplaneSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterV2NetworkBackplaneSubnetList extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkBackplaneSubnet[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkBackplaneSubnetOutputReference {
    return new ClusterV2NetworkBackplaneSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkBackplane {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#is_segmentation_enabled ClusterV2#is_segmentation_enabled}
  */
  readonly isSegmentationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#vlan_tag ClusterV2#vlan_tag}
  */
  readonly vlanTag?: number;
  /**
  * netmask block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#netmask ClusterV2#netmask}
  */
  readonly netmask?: ClusterV2NetworkBackplaneNetmask[] | cdktf.IResolvable;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#subnet ClusterV2#subnet}
  */
  readonly subnet?: ClusterV2NetworkBackplaneSubnet[] | cdktf.IResolvable;
}

export function clusterV2NetworkBackplaneToTerraform(struct?: ClusterV2NetworkBackplane | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_segmentation_enabled: cdktf.booleanToTerraform(struct!.isSegmentationEnabled),
    vlan_tag: cdktf.numberToTerraform(struct!.vlanTag),
    netmask: cdktf.listMapper(clusterV2NetworkBackplaneNetmaskToTerraform, true)(struct!.netmask),
    subnet: cdktf.listMapper(clusterV2NetworkBackplaneSubnetToTerraform, true)(struct!.subnet),
  }
}


export function clusterV2NetworkBackplaneToHclTerraform(struct?: ClusterV2NetworkBackplane | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_segmentation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isSegmentationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vlan_tag: {
      value: cdktf.numberToHclTerraform(struct!.vlanTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netmask: {
      value: cdktf.listMapperHcl(clusterV2NetworkBackplaneNetmaskToHclTerraform, true)(struct!.netmask),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkBackplaneNetmaskList",
    },
    subnet: {
      value: cdktf.listMapperHcl(clusterV2NetworkBackplaneSubnetToHclTerraform, true)(struct!.subnet),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkBackplaneSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkBackplaneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkBackplane | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isSegmentationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSegmentationEnabled = this._isSegmentationEnabled;
    }
    if (this._vlanTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanTag = this._vlanTag;
    }
    if (this._netmask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask?.internalValue;
    }
    if (this._subnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkBackplane | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isSegmentationEnabled = undefined;
      this._vlanTag = undefined;
      this._netmask.internalValue = undefined;
      this._subnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isSegmentationEnabled = value.isSegmentationEnabled;
      this._vlanTag = value.vlanTag;
      this._netmask.internalValue = value.netmask;
      this._subnet.internalValue = value.subnet;
    }
  }

  // is_segmentation_enabled - computed: true, optional: true, required: false
  private _isSegmentationEnabled?: boolean | cdktf.IResolvable; 
  public get isSegmentationEnabled() {
    return this.getBooleanAttribute('is_segmentation_enabled');
  }
  public set isSegmentationEnabled(value: boolean | cdktf.IResolvable) {
    this._isSegmentationEnabled = value;
  }
  public resetIsSegmentationEnabled() {
    this._isSegmentationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSegmentationEnabledInput() {
    return this._isSegmentationEnabled;
  }

  // vlan_tag - computed: true, optional: true, required: false
  private _vlanTag?: number; 
  public get vlanTag() {
    return this.getNumberAttribute('vlan_tag');
  }
  public set vlanTag(value: number) {
    this._vlanTag = value;
  }
  public resetVlanTag() {
    this._vlanTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanTagInput() {
    return this._vlanTag;
  }

  // netmask - computed: false, optional: true, required: false
  private _netmask = new ClusterV2NetworkBackplaneNetmaskList(this, "netmask", false);
  public get netmask() {
    return this._netmask;
  }
  public putNetmask(value: ClusterV2NetworkBackplaneNetmask[] | cdktf.IResolvable) {
    this._netmask.internalValue = value;
  }
  public resetNetmask() {
    this._netmask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask.internalValue;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet = new ClusterV2NetworkBackplaneSubnetList(this, "subnet", false);
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: ClusterV2NetworkBackplaneSubnet[] | cdktf.IResolvable) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }
}

export class ClusterV2NetworkBackplaneList extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkBackplane[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkBackplaneOutputReference {
    return new ClusterV2NetworkBackplaneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkExternalAddressIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#prefix_length ClusterV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#value ClusterV2#value}
  */
  readonly value: string;
}

export function clusterV2NetworkExternalAddressIpv4ToTerraform(struct?: ClusterV2NetworkExternalAddressIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterV2NetworkExternalAddressIpv4ToHclTerraform(struct?: ClusterV2NetworkExternalAddressIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkExternalAddressIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkExternalAddressIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkExternalAddressIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterV2NetworkExternalAddressIpv4List extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkExternalAddressIpv4[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkExternalAddressIpv4OutputReference {
    return new ClusterV2NetworkExternalAddressIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkExternalAddressIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#prefix_length ClusterV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#value ClusterV2#value}
  */
  readonly value: string;
}

export function clusterV2NetworkExternalAddressIpv6ToTerraform(struct?: ClusterV2NetworkExternalAddressIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterV2NetworkExternalAddressIpv6ToHclTerraform(struct?: ClusterV2NetworkExternalAddressIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkExternalAddressIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkExternalAddressIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkExternalAddressIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterV2NetworkExternalAddressIpv6List extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkExternalAddressIpv6[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkExternalAddressIpv6OutputReference {
    return new ClusterV2NetworkExternalAddressIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkExternalAddress {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#ipv4 ClusterV2#ipv4}
  */
  readonly ipv4?: ClusterV2NetworkExternalAddressIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#ipv6 ClusterV2#ipv6}
  */
  readonly ipv6?: ClusterV2NetworkExternalAddressIpv6[] | cdktf.IResolvable;
}

export function clusterV2NetworkExternalAddressToTerraform(struct?: ClusterV2NetworkExternalAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(clusterV2NetworkExternalAddressIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(clusterV2NetworkExternalAddressIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function clusterV2NetworkExternalAddressToHclTerraform(struct?: ClusterV2NetworkExternalAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(clusterV2NetworkExternalAddressIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkExternalAddressIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(clusterV2NetworkExternalAddressIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkExternalAddressIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkExternalAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkExternalAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkExternalAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new ClusterV2NetworkExternalAddressIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ClusterV2NetworkExternalAddressIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ClusterV2NetworkExternalAddressIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ClusterV2NetworkExternalAddressIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class ClusterV2NetworkExternalAddressList extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkExternalAddress[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkExternalAddressOutputReference {
    return new ClusterV2NetworkExternalAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkExternalDataServicesIpIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#prefix_length ClusterV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#value ClusterV2#value}
  */
  readonly value: string;
}

export function clusterV2NetworkExternalDataServicesIpIpv4ToTerraform(struct?: ClusterV2NetworkExternalDataServicesIpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterV2NetworkExternalDataServicesIpIpv4ToHclTerraform(struct?: ClusterV2NetworkExternalDataServicesIpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkExternalDataServicesIpIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkExternalDataServicesIpIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkExternalDataServicesIpIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterV2NetworkExternalDataServicesIpIpv4List extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkExternalDataServicesIpIpv4[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkExternalDataServicesIpIpv4OutputReference {
    return new ClusterV2NetworkExternalDataServicesIpIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkExternalDataServicesIpIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#prefix_length ClusterV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#value ClusterV2#value}
  */
  readonly value: string;
}

export function clusterV2NetworkExternalDataServicesIpIpv6ToTerraform(struct?: ClusterV2NetworkExternalDataServicesIpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterV2NetworkExternalDataServicesIpIpv6ToHclTerraform(struct?: ClusterV2NetworkExternalDataServicesIpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkExternalDataServicesIpIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkExternalDataServicesIpIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkExternalDataServicesIpIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterV2NetworkExternalDataServicesIpIpv6List extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkExternalDataServicesIpIpv6[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkExternalDataServicesIpIpv6OutputReference {
    return new ClusterV2NetworkExternalDataServicesIpIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkExternalDataServicesIp {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#ipv4 ClusterV2#ipv4}
  */
  readonly ipv4?: ClusterV2NetworkExternalDataServicesIpIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#ipv6 ClusterV2#ipv6}
  */
  readonly ipv6?: ClusterV2NetworkExternalDataServicesIpIpv6[] | cdktf.IResolvable;
}

export function clusterV2NetworkExternalDataServicesIpToTerraform(struct?: ClusterV2NetworkExternalDataServicesIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(clusterV2NetworkExternalDataServicesIpIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(clusterV2NetworkExternalDataServicesIpIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function clusterV2NetworkExternalDataServicesIpToHclTerraform(struct?: ClusterV2NetworkExternalDataServicesIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(clusterV2NetworkExternalDataServicesIpIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkExternalDataServicesIpIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(clusterV2NetworkExternalDataServicesIpIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkExternalDataServicesIpIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkExternalDataServicesIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkExternalDataServicesIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkExternalDataServicesIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new ClusterV2NetworkExternalDataServicesIpIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ClusterV2NetworkExternalDataServicesIpIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ClusterV2NetworkExternalDataServicesIpIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ClusterV2NetworkExternalDataServicesIpIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class ClusterV2NetworkExternalDataServicesIpList extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkExternalDataServicesIp[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkExternalDataServicesIpOutputReference {
    return new ClusterV2NetworkExternalDataServicesIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkHttpProxyListIpAddressIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#prefix_length ClusterV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#value ClusterV2#value}
  */
  readonly value: string;
}

export function clusterV2NetworkHttpProxyListIpAddressIpv4ToTerraform(struct?: ClusterV2NetworkHttpProxyListIpAddressIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterV2NetworkHttpProxyListIpAddressIpv4ToHclTerraform(struct?: ClusterV2NetworkHttpProxyListIpAddressIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkHttpProxyListIpAddressIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkHttpProxyListIpAddressIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkHttpProxyListIpAddressIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterV2NetworkHttpProxyListIpAddressIpv4List extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkHttpProxyListIpAddressIpv4[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkHttpProxyListIpAddressIpv4OutputReference {
    return new ClusterV2NetworkHttpProxyListIpAddressIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkHttpProxyListIpAddressIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#prefix_length ClusterV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#value ClusterV2#value}
  */
  readonly value: string;
}

export function clusterV2NetworkHttpProxyListIpAddressIpv6ToTerraform(struct?: ClusterV2NetworkHttpProxyListIpAddressIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterV2NetworkHttpProxyListIpAddressIpv6ToHclTerraform(struct?: ClusterV2NetworkHttpProxyListIpAddressIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkHttpProxyListIpAddressIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkHttpProxyListIpAddressIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkHttpProxyListIpAddressIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterV2NetworkHttpProxyListIpAddressIpv6List extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkHttpProxyListIpAddressIpv6[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkHttpProxyListIpAddressIpv6OutputReference {
    return new ClusterV2NetworkHttpProxyListIpAddressIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkHttpProxyListIpAddress {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#ipv4 ClusterV2#ipv4}
  */
  readonly ipv4?: ClusterV2NetworkHttpProxyListIpAddressIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#ipv6 ClusterV2#ipv6}
  */
  readonly ipv6?: ClusterV2NetworkHttpProxyListIpAddressIpv6[] | cdktf.IResolvable;
}

export function clusterV2NetworkHttpProxyListIpAddressToTerraform(struct?: ClusterV2NetworkHttpProxyListIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(clusterV2NetworkHttpProxyListIpAddressIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(clusterV2NetworkHttpProxyListIpAddressIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function clusterV2NetworkHttpProxyListIpAddressToHclTerraform(struct?: ClusterV2NetworkHttpProxyListIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(clusterV2NetworkHttpProxyListIpAddressIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkHttpProxyListIpAddressIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(clusterV2NetworkHttpProxyListIpAddressIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkHttpProxyListIpAddressIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkHttpProxyListIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkHttpProxyListIpAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkHttpProxyListIpAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new ClusterV2NetworkHttpProxyListIpAddressIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ClusterV2NetworkHttpProxyListIpAddressIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ClusterV2NetworkHttpProxyListIpAddressIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ClusterV2NetworkHttpProxyListIpAddressIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class ClusterV2NetworkHttpProxyListIpAddressList extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkHttpProxyListIpAddress[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkHttpProxyListIpAddressOutputReference {
    return new ClusterV2NetworkHttpProxyListIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkHttpProxyListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#name ClusterV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#password ClusterV2#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#port ClusterV2#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#proxy_types ClusterV2#proxy_types}
  */
  readonly proxyTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#username ClusterV2#username}
  */
  readonly username?: string;
  /**
  * ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#ip_address ClusterV2#ip_address}
  */
  readonly ipAddress?: ClusterV2NetworkHttpProxyListIpAddress[] | cdktf.IResolvable;
}

export function clusterV2NetworkHttpProxyListStructToTerraform(struct?: ClusterV2NetworkHttpProxyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    proxy_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.proxyTypes),
    username: cdktf.stringToTerraform(struct!.username),
    ip_address: cdktf.listMapper(clusterV2NetworkHttpProxyListIpAddressToTerraform, true)(struct!.ipAddress),
  }
}


export function clusterV2NetworkHttpProxyListStructToHclTerraform(struct?: ClusterV2NetworkHttpProxyListStruct | cdktf.IResolvable): any {
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
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
    proxy_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.proxyTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.listMapperHcl(clusterV2NetworkHttpProxyListIpAddressToHclTerraform, true)(struct!.ipAddress),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkHttpProxyListIpAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkHttpProxyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkHttpProxyListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._proxyTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyTypes = this._proxyTypes;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._ipAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkHttpProxyListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._password = undefined;
      this._port = undefined;
      this._proxyTypes = undefined;
      this._username = undefined;
      this._ipAddress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._password = value.password;
      this._port = value.port;
      this._proxyTypes = value.proxyTypes;
      this._username = value.username;
      this._ipAddress.internalValue = value.ipAddress;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proxy_types - computed: true, optional: true, required: false
  private _proxyTypes?: string[]; 
  public get proxyTypes() {
    return this.getListAttribute('proxy_types');
  }
  public set proxyTypes(value: string[]) {
    this._proxyTypes = value;
  }
  public resetProxyTypes() {
    this._proxyTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTypesInput() {
    return this._proxyTypes;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress = new ClusterV2NetworkHttpProxyListIpAddressList(this, "ip_address", false);
  public get ipAddress() {
    return this._ipAddress;
  }
  public putIpAddress(value: ClusterV2NetworkHttpProxyListIpAddress[] | cdktf.IResolvable) {
    this._ipAddress.internalValue = value;
  }
  public resetIpAddress() {
    this._ipAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress.internalValue;
  }
}

export class ClusterV2NetworkHttpProxyListStructList extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkHttpProxyListStruct[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkHttpProxyListStructOutputReference {
    return new ClusterV2NetworkHttpProxyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkHttpProxyWhiteListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#target ClusterV2#target}
  */
  readonly target: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#target_type ClusterV2#target_type}
  */
  readonly targetType: string;
}

export function clusterV2NetworkHttpProxyWhiteListStructToTerraform(struct?: ClusterV2NetworkHttpProxyWhiteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: cdktf.stringToTerraform(struct!.target),
    target_type: cdktf.stringToTerraform(struct!.targetType),
  }
}


export function clusterV2NetworkHttpProxyWhiteListStructToHclTerraform(struct?: ClusterV2NetworkHttpProxyWhiteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_type: {
      value: cdktf.stringToHclTerraform(struct!.targetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkHttpProxyWhiteListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkHttpProxyWhiteListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkHttpProxyWhiteListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._target = undefined;
      this._targetType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._target = value.target;
      this._targetType = value.targetType;
    }
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // target_type - computed: false, optional: false, required: true
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }
}

export class ClusterV2NetworkHttpProxyWhiteListStructList extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkHttpProxyWhiteListStruct[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkHttpProxyWhiteListStructOutputReference {
    return new ClusterV2NetworkHttpProxyWhiteListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkManagementServerIpIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#prefix_length ClusterV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#value ClusterV2#value}
  */
  readonly value: string;
}

export function clusterV2NetworkManagementServerIpIpv4ToTerraform(struct?: ClusterV2NetworkManagementServerIpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterV2NetworkManagementServerIpIpv4ToHclTerraform(struct?: ClusterV2NetworkManagementServerIpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkManagementServerIpIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkManagementServerIpIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkManagementServerIpIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterV2NetworkManagementServerIpIpv4List extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkManagementServerIpIpv4[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkManagementServerIpIpv4OutputReference {
    return new ClusterV2NetworkManagementServerIpIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkManagementServerIpIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#prefix_length ClusterV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#value ClusterV2#value}
  */
  readonly value: string;
}

export function clusterV2NetworkManagementServerIpIpv6ToTerraform(struct?: ClusterV2NetworkManagementServerIpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterV2NetworkManagementServerIpIpv6ToHclTerraform(struct?: ClusterV2NetworkManagementServerIpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkManagementServerIpIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkManagementServerIpIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkManagementServerIpIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterV2NetworkManagementServerIpIpv6List extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkManagementServerIpIpv6[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkManagementServerIpIpv6OutputReference {
    return new ClusterV2NetworkManagementServerIpIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkManagementServerIp {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#ipv4 ClusterV2#ipv4}
  */
  readonly ipv4?: ClusterV2NetworkManagementServerIpIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#ipv6 ClusterV2#ipv6}
  */
  readonly ipv6?: ClusterV2NetworkManagementServerIpIpv6[] | cdktf.IResolvable;
}

export function clusterV2NetworkManagementServerIpToTerraform(struct?: ClusterV2NetworkManagementServerIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(clusterV2NetworkManagementServerIpIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(clusterV2NetworkManagementServerIpIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function clusterV2NetworkManagementServerIpToHclTerraform(struct?: ClusterV2NetworkManagementServerIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(clusterV2NetworkManagementServerIpIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkManagementServerIpIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(clusterV2NetworkManagementServerIpIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkManagementServerIpIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkManagementServerIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkManagementServerIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkManagementServerIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new ClusterV2NetworkManagementServerIpIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ClusterV2NetworkManagementServerIpIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ClusterV2NetworkManagementServerIpIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ClusterV2NetworkManagementServerIpIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class ClusterV2NetworkManagementServerIpList extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkManagementServerIp[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkManagementServerIpOutputReference {
    return new ClusterV2NetworkManagementServerIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkManagementServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#is_drs_enabled ClusterV2#is_drs_enabled}
  */
  readonly isDrsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#is_in_use ClusterV2#is_in_use}
  */
  readonly isInUse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#is_registered ClusterV2#is_registered}
  */
  readonly isRegistered?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#type ClusterV2#type}
  */
  readonly type?: string;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#ip ClusterV2#ip}
  */
  readonly ip?: ClusterV2NetworkManagementServerIp[] | cdktf.IResolvable;
}

export function clusterV2NetworkManagementServerToTerraform(struct?: ClusterV2NetworkManagementServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_drs_enabled: cdktf.booleanToTerraform(struct!.isDrsEnabled),
    is_in_use: cdktf.booleanToTerraform(struct!.isInUse),
    is_registered: cdktf.booleanToTerraform(struct!.isRegistered),
    type: cdktf.stringToTerraform(struct!.type),
    ip: cdktf.listMapper(clusterV2NetworkManagementServerIpToTerraform, true)(struct!.ip),
  }
}


export function clusterV2NetworkManagementServerToHclTerraform(struct?: ClusterV2NetworkManagementServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_drs_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isDrsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_in_use: {
      value: cdktf.booleanToHclTerraform(struct!.isInUse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_registered: {
      value: cdktf.booleanToHclTerraform(struct!.isRegistered),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.listMapperHcl(clusterV2NetworkManagementServerIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkManagementServerIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkManagementServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkManagementServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isDrsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDrsEnabled = this._isDrsEnabled;
    }
    if (this._isInUse !== undefined) {
      hasAnyValues = true;
      internalValueResult.isInUse = this._isInUse;
    }
    if (this._isRegistered !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRegistered = this._isRegistered;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkManagementServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isDrsEnabled = undefined;
      this._isInUse = undefined;
      this._isRegistered = undefined;
      this._type = undefined;
      this._ip.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isDrsEnabled = value.isDrsEnabled;
      this._isInUse = value.isInUse;
      this._isRegistered = value.isRegistered;
      this._type = value.type;
      this._ip.internalValue = value.ip;
    }
  }

  // is_drs_enabled - computed: true, optional: true, required: false
  private _isDrsEnabled?: boolean | cdktf.IResolvable; 
  public get isDrsEnabled() {
    return this.getBooleanAttribute('is_drs_enabled');
  }
  public set isDrsEnabled(value: boolean | cdktf.IResolvable) {
    this._isDrsEnabled = value;
  }
  public resetIsDrsEnabled() {
    this._isDrsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDrsEnabledInput() {
    return this._isDrsEnabled;
  }

  // is_in_use - computed: true, optional: true, required: false
  private _isInUse?: boolean | cdktf.IResolvable; 
  public get isInUse() {
    return this.getBooleanAttribute('is_in_use');
  }
  public set isInUse(value: boolean | cdktf.IResolvable) {
    this._isInUse = value;
  }
  public resetIsInUse() {
    this._isInUse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInUseInput() {
    return this._isInUse;
  }

  // is_registered - computed: true, optional: true, required: false
  private _isRegistered?: boolean | cdktf.IResolvable; 
  public get isRegistered() {
    return this.getBooleanAttribute('is_registered');
  }
  public set isRegistered(value: boolean | cdktf.IResolvable) {
    this._isRegistered = value;
  }
  public resetIsRegistered() {
    this._isRegistered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRegisteredInput() {
    return this._isRegistered;
  }

  // type - computed: true, optional: true, required: false
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

  // ip - computed: false, optional: true, required: false
  private _ip = new ClusterV2NetworkManagementServerIpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }
  public putIp(value: ClusterV2NetworkManagementServerIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }
}

export class ClusterV2NetworkManagementServerList extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkManagementServer[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkManagementServerOutputReference {
    return new ClusterV2NetworkManagementServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkMasqueradingIpIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#prefix_length ClusterV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#value ClusterV2#value}
  */
  readonly value: string;
}

export function clusterV2NetworkMasqueradingIpIpv4ToTerraform(struct?: ClusterV2NetworkMasqueradingIpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterV2NetworkMasqueradingIpIpv4ToHclTerraform(struct?: ClusterV2NetworkMasqueradingIpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkMasqueradingIpIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkMasqueradingIpIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkMasqueradingIpIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterV2NetworkMasqueradingIpIpv4List extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkMasqueradingIpIpv4[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkMasqueradingIpIpv4OutputReference {
    return new ClusterV2NetworkMasqueradingIpIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkMasqueradingIpIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#prefix_length ClusterV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#value ClusterV2#value}
  */
  readonly value: string;
}

export function clusterV2NetworkMasqueradingIpIpv6ToTerraform(struct?: ClusterV2NetworkMasqueradingIpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterV2NetworkMasqueradingIpIpv6ToHclTerraform(struct?: ClusterV2NetworkMasqueradingIpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkMasqueradingIpIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkMasqueradingIpIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkMasqueradingIpIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterV2NetworkMasqueradingIpIpv6List extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkMasqueradingIpIpv6[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkMasqueradingIpIpv6OutputReference {
    return new ClusterV2NetworkMasqueradingIpIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkMasqueradingIp {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#ipv4 ClusterV2#ipv4}
  */
  readonly ipv4?: ClusterV2NetworkMasqueradingIpIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#ipv6 ClusterV2#ipv6}
  */
  readonly ipv6?: ClusterV2NetworkMasqueradingIpIpv6[] | cdktf.IResolvable;
}

export function clusterV2NetworkMasqueradingIpToTerraform(struct?: ClusterV2NetworkMasqueradingIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(clusterV2NetworkMasqueradingIpIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(clusterV2NetworkMasqueradingIpIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function clusterV2NetworkMasqueradingIpToHclTerraform(struct?: ClusterV2NetworkMasqueradingIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(clusterV2NetworkMasqueradingIpIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkMasqueradingIpIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(clusterV2NetworkMasqueradingIpIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkMasqueradingIpIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkMasqueradingIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkMasqueradingIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkMasqueradingIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new ClusterV2NetworkMasqueradingIpIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ClusterV2NetworkMasqueradingIpIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ClusterV2NetworkMasqueradingIpIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ClusterV2NetworkMasqueradingIpIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class ClusterV2NetworkMasqueradingIpList extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkMasqueradingIp[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkMasqueradingIpOutputReference {
    return new ClusterV2NetworkMasqueradingIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkNameServerIpListFqdn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#value ClusterV2#value}
  */
  readonly value?: string;
}

export function clusterV2NetworkNameServerIpListFqdnToTerraform(struct?: ClusterV2NetworkNameServerIpListFqdn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterV2NetworkNameServerIpListFqdnToHclTerraform(struct?: ClusterV2NetworkNameServerIpListFqdn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkNameServerIpListFqdnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkNameServerIpListFqdn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkNameServerIpListFqdn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterV2NetworkNameServerIpListFqdnList extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkNameServerIpListFqdn[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkNameServerIpListFqdnOutputReference {
    return new ClusterV2NetworkNameServerIpListFqdnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkNameServerIpListIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#prefix_length ClusterV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#value ClusterV2#value}
  */
  readonly value: string;
}

export function clusterV2NetworkNameServerIpListIpv4ToTerraform(struct?: ClusterV2NetworkNameServerIpListIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterV2NetworkNameServerIpListIpv4ToHclTerraform(struct?: ClusterV2NetworkNameServerIpListIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkNameServerIpListIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkNameServerIpListIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkNameServerIpListIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterV2NetworkNameServerIpListIpv4List extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkNameServerIpListIpv4[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkNameServerIpListIpv4OutputReference {
    return new ClusterV2NetworkNameServerIpListIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkNameServerIpListIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#prefix_length ClusterV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#value ClusterV2#value}
  */
  readonly value: string;
}

export function clusterV2NetworkNameServerIpListIpv6ToTerraform(struct?: ClusterV2NetworkNameServerIpListIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterV2NetworkNameServerIpListIpv6ToHclTerraform(struct?: ClusterV2NetworkNameServerIpListIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkNameServerIpListIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkNameServerIpListIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkNameServerIpListIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterV2NetworkNameServerIpListIpv6List extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkNameServerIpListIpv6[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkNameServerIpListIpv6OutputReference {
    return new ClusterV2NetworkNameServerIpListIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkNameServerIpListStruct {
  /**
  * fqdn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#fqdn ClusterV2#fqdn}
  */
  readonly fqdn?: ClusterV2NetworkNameServerIpListFqdn[] | cdktf.IResolvable;
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#ipv4 ClusterV2#ipv4}
  */
  readonly ipv4?: ClusterV2NetworkNameServerIpListIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#ipv6 ClusterV2#ipv6}
  */
  readonly ipv6?: ClusterV2NetworkNameServerIpListIpv6[] | cdktf.IResolvable;
}

export function clusterV2NetworkNameServerIpListStructToTerraform(struct?: ClusterV2NetworkNameServerIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.listMapper(clusterV2NetworkNameServerIpListFqdnToTerraform, true)(struct!.fqdn),
    ipv4: cdktf.listMapper(clusterV2NetworkNameServerIpListIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(clusterV2NetworkNameServerIpListIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function clusterV2NetworkNameServerIpListStructToHclTerraform(struct?: ClusterV2NetworkNameServerIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.listMapperHcl(clusterV2NetworkNameServerIpListFqdnToHclTerraform, true)(struct!.fqdn),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkNameServerIpListFqdnList",
    },
    ipv4: {
      value: cdktf.listMapperHcl(clusterV2NetworkNameServerIpListIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkNameServerIpListIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(clusterV2NetworkNameServerIpListIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkNameServerIpListIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkNameServerIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkNameServerIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn?.internalValue;
    }
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkNameServerIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn.internalValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn.internalValue = value.fqdn;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn = new ClusterV2NetworkNameServerIpListFqdnList(this, "fqdn", false);
  public get fqdn() {
    return this._fqdn;
  }
  public putFqdn(value: ClusterV2NetworkNameServerIpListFqdn[] | cdktf.IResolvable) {
    this._fqdn.internalValue = value;
  }
  public resetFqdn() {
    this._fqdn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn.internalValue;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new ClusterV2NetworkNameServerIpListIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ClusterV2NetworkNameServerIpListIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ClusterV2NetworkNameServerIpListIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ClusterV2NetworkNameServerIpListIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class ClusterV2NetworkNameServerIpListStructList extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkNameServerIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkNameServerIpListStructOutputReference {
    return new ClusterV2NetworkNameServerIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkNtpServerIpListFqdn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#value ClusterV2#value}
  */
  readonly value?: string;
}

export function clusterV2NetworkNtpServerIpListFqdnToTerraform(struct?: ClusterV2NetworkNtpServerIpListFqdn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterV2NetworkNtpServerIpListFqdnToHclTerraform(struct?: ClusterV2NetworkNtpServerIpListFqdn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkNtpServerIpListFqdnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkNtpServerIpListFqdn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkNtpServerIpListFqdn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterV2NetworkNtpServerIpListFqdnList extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkNtpServerIpListFqdn[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkNtpServerIpListFqdnOutputReference {
    return new ClusterV2NetworkNtpServerIpListFqdnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkNtpServerIpListIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#prefix_length ClusterV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#value ClusterV2#value}
  */
  readonly value: string;
}

export function clusterV2NetworkNtpServerIpListIpv4ToTerraform(struct?: ClusterV2NetworkNtpServerIpListIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterV2NetworkNtpServerIpListIpv4ToHclTerraform(struct?: ClusterV2NetworkNtpServerIpListIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkNtpServerIpListIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkNtpServerIpListIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkNtpServerIpListIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterV2NetworkNtpServerIpListIpv4List extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkNtpServerIpListIpv4[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkNtpServerIpListIpv4OutputReference {
    return new ClusterV2NetworkNtpServerIpListIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkNtpServerIpListIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#prefix_length ClusterV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#value ClusterV2#value}
  */
  readonly value: string;
}

export function clusterV2NetworkNtpServerIpListIpv6ToTerraform(struct?: ClusterV2NetworkNtpServerIpListIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterV2NetworkNtpServerIpListIpv6ToHclTerraform(struct?: ClusterV2NetworkNtpServerIpListIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkNtpServerIpListIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkNtpServerIpListIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkNtpServerIpListIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterV2NetworkNtpServerIpListIpv6List extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkNtpServerIpListIpv6[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkNtpServerIpListIpv6OutputReference {
    return new ClusterV2NetworkNtpServerIpListIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkNtpServerIpListStruct {
  /**
  * fqdn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#fqdn ClusterV2#fqdn}
  */
  readonly fqdn?: ClusterV2NetworkNtpServerIpListFqdn[] | cdktf.IResolvable;
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#ipv4 ClusterV2#ipv4}
  */
  readonly ipv4?: ClusterV2NetworkNtpServerIpListIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#ipv6 ClusterV2#ipv6}
  */
  readonly ipv6?: ClusterV2NetworkNtpServerIpListIpv6[] | cdktf.IResolvable;
}

export function clusterV2NetworkNtpServerIpListStructToTerraform(struct?: ClusterV2NetworkNtpServerIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.listMapper(clusterV2NetworkNtpServerIpListFqdnToTerraform, true)(struct!.fqdn),
    ipv4: cdktf.listMapper(clusterV2NetworkNtpServerIpListIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(clusterV2NetworkNtpServerIpListIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function clusterV2NetworkNtpServerIpListStructToHclTerraform(struct?: ClusterV2NetworkNtpServerIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.listMapperHcl(clusterV2NetworkNtpServerIpListFqdnToHclTerraform, true)(struct!.fqdn),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkNtpServerIpListFqdnList",
    },
    ipv4: {
      value: cdktf.listMapperHcl(clusterV2NetworkNtpServerIpListIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkNtpServerIpListIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(clusterV2NetworkNtpServerIpListIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkNtpServerIpListIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkNtpServerIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkNtpServerIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn?.internalValue;
    }
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkNtpServerIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn.internalValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn.internalValue = value.fqdn;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn = new ClusterV2NetworkNtpServerIpListFqdnList(this, "fqdn", false);
  public get fqdn() {
    return this._fqdn;
  }
  public putFqdn(value: ClusterV2NetworkNtpServerIpListFqdn[] | cdktf.IResolvable) {
    this._fqdn.internalValue = value;
  }
  public resetFqdn() {
    this._fqdn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn.internalValue;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new ClusterV2NetworkNtpServerIpListIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ClusterV2NetworkNtpServerIpListIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ClusterV2NetworkNtpServerIpListIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ClusterV2NetworkNtpServerIpListIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class ClusterV2NetworkNtpServerIpListStructList extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkNtpServerIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkNtpServerIpListStructOutputReference {
    return new ClusterV2NetworkNtpServerIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkSmtpServerServerIpAddressFqdn {
}

export function clusterV2NetworkSmtpServerServerIpAddressFqdnToTerraform(struct?: ClusterV2NetworkSmtpServerServerIpAddressFqdn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterV2NetworkSmtpServerServerIpAddressFqdnToHclTerraform(struct?: ClusterV2NetworkSmtpServerServerIpAddressFqdn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterV2NetworkSmtpServerServerIpAddressFqdnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkSmtpServerServerIpAddressFqdn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkSmtpServerServerIpAddressFqdn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class ClusterV2NetworkSmtpServerServerIpAddressFqdnList extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkSmtpServerServerIpAddressFqdn[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkSmtpServerServerIpAddressFqdnOutputReference {
    return new ClusterV2NetworkSmtpServerServerIpAddressFqdnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkSmtpServerServerIpAddressIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#prefix_length ClusterV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#value ClusterV2#value}
  */
  readonly value: string;
}

export function clusterV2NetworkSmtpServerServerIpAddressIpv4ToTerraform(struct?: ClusterV2NetworkSmtpServerServerIpAddressIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterV2NetworkSmtpServerServerIpAddressIpv4ToHclTerraform(struct?: ClusterV2NetworkSmtpServerServerIpAddressIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkSmtpServerServerIpAddressIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkSmtpServerServerIpAddressIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkSmtpServerServerIpAddressIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterV2NetworkSmtpServerServerIpAddressIpv4List extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkSmtpServerServerIpAddressIpv4[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkSmtpServerServerIpAddressIpv4OutputReference {
    return new ClusterV2NetworkSmtpServerServerIpAddressIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkSmtpServerServerIpAddressIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#prefix_length ClusterV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#value ClusterV2#value}
  */
  readonly value: string;
}

export function clusterV2NetworkSmtpServerServerIpAddressIpv6ToTerraform(struct?: ClusterV2NetworkSmtpServerServerIpAddressIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterV2NetworkSmtpServerServerIpAddressIpv6ToHclTerraform(struct?: ClusterV2NetworkSmtpServerServerIpAddressIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkSmtpServerServerIpAddressIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkSmtpServerServerIpAddressIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkSmtpServerServerIpAddressIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterV2NetworkSmtpServerServerIpAddressIpv6List extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkSmtpServerServerIpAddressIpv6[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkSmtpServerServerIpAddressIpv6OutputReference {
    return new ClusterV2NetworkSmtpServerServerIpAddressIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkSmtpServerServerIpAddress {
  /**
  * fqdn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#fqdn ClusterV2#fqdn}
  */
  readonly fqdn?: ClusterV2NetworkSmtpServerServerIpAddressFqdn[] | cdktf.IResolvable;
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#ipv4 ClusterV2#ipv4}
  */
  readonly ipv4?: ClusterV2NetworkSmtpServerServerIpAddressIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#ipv6 ClusterV2#ipv6}
  */
  readonly ipv6?: ClusterV2NetworkSmtpServerServerIpAddressIpv6[] | cdktf.IResolvable;
}

export function clusterV2NetworkSmtpServerServerIpAddressToTerraform(struct?: ClusterV2NetworkSmtpServerServerIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.listMapper(clusterV2NetworkSmtpServerServerIpAddressFqdnToTerraform, true)(struct!.fqdn),
    ipv4: cdktf.listMapper(clusterV2NetworkSmtpServerServerIpAddressIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(clusterV2NetworkSmtpServerServerIpAddressIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function clusterV2NetworkSmtpServerServerIpAddressToHclTerraform(struct?: ClusterV2NetworkSmtpServerServerIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.listMapperHcl(clusterV2NetworkSmtpServerServerIpAddressFqdnToHclTerraform, true)(struct!.fqdn),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkSmtpServerServerIpAddressFqdnList",
    },
    ipv4: {
      value: cdktf.listMapperHcl(clusterV2NetworkSmtpServerServerIpAddressIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkSmtpServerServerIpAddressIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(clusterV2NetworkSmtpServerServerIpAddressIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkSmtpServerServerIpAddressIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkSmtpServerServerIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkSmtpServerServerIpAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn?.internalValue;
    }
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkSmtpServerServerIpAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn.internalValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn.internalValue = value.fqdn;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn = new ClusterV2NetworkSmtpServerServerIpAddressFqdnList(this, "fqdn", false);
  public get fqdn() {
    return this._fqdn;
  }
  public putFqdn(value: ClusterV2NetworkSmtpServerServerIpAddressFqdn[] | cdktf.IResolvable) {
    this._fqdn.internalValue = value;
  }
  public resetFqdn() {
    this._fqdn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn.internalValue;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new ClusterV2NetworkSmtpServerServerIpAddressIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ClusterV2NetworkSmtpServerServerIpAddressIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ClusterV2NetworkSmtpServerServerIpAddressIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ClusterV2NetworkSmtpServerServerIpAddressIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class ClusterV2NetworkSmtpServerServerIpAddressList extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkSmtpServerServerIpAddress[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkSmtpServerServerIpAddressOutputReference {
    return new ClusterV2NetworkSmtpServerServerIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkSmtpServerServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#password ClusterV2#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#port ClusterV2#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#username ClusterV2#username}
  */
  readonly username?: string;
  /**
  * ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#ip_address ClusterV2#ip_address}
  */
  readonly ipAddress?: ClusterV2NetworkSmtpServerServerIpAddress[] | cdktf.IResolvable;
}

export function clusterV2NetworkSmtpServerServerToTerraform(struct?: ClusterV2NetworkSmtpServerServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    username: cdktf.stringToTerraform(struct!.username),
    ip_address: cdktf.listMapper(clusterV2NetworkSmtpServerServerIpAddressToTerraform, true)(struct!.ipAddress),
  }
}


export function clusterV2NetworkSmtpServerServerToHclTerraform(struct?: ClusterV2NetworkSmtpServerServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
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
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.listMapperHcl(clusterV2NetworkSmtpServerServerIpAddressToHclTerraform, true)(struct!.ipAddress),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkSmtpServerServerIpAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkSmtpServerServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkSmtpServerServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._ipAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkSmtpServerServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._port = undefined;
      this._username = undefined;
      this._ipAddress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._port = value.port;
      this._username = value.username;
      this._ipAddress.internalValue = value.ipAddress;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress = new ClusterV2NetworkSmtpServerServerIpAddressList(this, "ip_address", false);
  public get ipAddress() {
    return this._ipAddress;
  }
  public putIpAddress(value: ClusterV2NetworkSmtpServerServerIpAddress[] | cdktf.IResolvable) {
    this._ipAddress.internalValue = value;
  }
  public resetIpAddress() {
    this._ipAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress.internalValue;
  }
}

export class ClusterV2NetworkSmtpServerServerList extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkSmtpServerServer[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkSmtpServerServerOutputReference {
    return new ClusterV2NetworkSmtpServerServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NetworkSmtpServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#email_address ClusterV2#email_address}
  */
  readonly emailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#type ClusterV2#type}
  */
  readonly type?: string;
  /**
  * server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#server ClusterV2#server}
  */
  readonly server?: ClusterV2NetworkSmtpServerServer[] | cdktf.IResolvable;
}

export function clusterV2NetworkSmtpServerToTerraform(struct?: ClusterV2NetworkSmtpServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    type: cdktf.stringToTerraform(struct!.type),
    server: cdktf.listMapper(clusterV2NetworkSmtpServerServerToTerraform, true)(struct!.server),
  }
}


export function clusterV2NetworkSmtpServerToHclTerraform(struct?: ClusterV2NetworkSmtpServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_address: {
      value: cdktf.stringToHclTerraform(struct!.emailAddress),
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
    server: {
      value: cdktf.listMapperHcl(clusterV2NetworkSmtpServerServerToHclTerraform, true)(struct!.server),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkSmtpServerServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkSmtpServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NetworkSmtpServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NetworkSmtpServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailAddress = undefined;
      this._type = undefined;
      this._server.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailAddress = value.emailAddress;
      this._type = value.type;
      this._server.internalValue = value.server;
    }
  }

  // email_address - computed: true, optional: true, required: false
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // type - computed: true, optional: true, required: false
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

  // server - computed: false, optional: true, required: false
  private _server = new ClusterV2NetworkSmtpServerServerList(this, "server", false);
  public get server() {
    return this._server;
  }
  public putServer(value: ClusterV2NetworkSmtpServerServer[] | cdktf.IResolvable) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }
}

export class ClusterV2NetworkSmtpServerList extends cdktf.ComplexList {
  public internalValue? : ClusterV2NetworkSmtpServer[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkSmtpServerOutputReference {
    return new ClusterV2NetworkSmtpServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2Network {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#fqdn ClusterV2#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#key_management_server_type ClusterV2#key_management_server_type}
  */
  readonly keyManagementServerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#nfs_subnet_white_list ClusterV2#nfs_subnet_white_list}
  */
  readonly nfsSubnetWhiteList?: string[];
  /**
  * backplane block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#backplane ClusterV2#backplane}
  */
  readonly backplane?: ClusterV2NetworkBackplane[] | cdktf.IResolvable;
  /**
  * external_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#external_address ClusterV2#external_address}
  */
  readonly externalAddress?: ClusterV2NetworkExternalAddress[] | cdktf.IResolvable;
  /**
  * external_data_services_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#external_data_services_ip ClusterV2#external_data_services_ip}
  */
  readonly externalDataServicesIp?: ClusterV2NetworkExternalDataServicesIp[] | cdktf.IResolvable;
  /**
  * http_proxy_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#http_proxy_list ClusterV2#http_proxy_list}
  */
  readonly httpProxyList?: ClusterV2NetworkHttpProxyListStruct[] | cdktf.IResolvable;
  /**
  * http_proxy_white_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#http_proxy_white_list ClusterV2#http_proxy_white_list}
  */
  readonly httpProxyWhiteList?: ClusterV2NetworkHttpProxyWhiteListStruct[] | cdktf.IResolvable;
  /**
  * management_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#management_server ClusterV2#management_server}
  */
  readonly managementServer?: ClusterV2NetworkManagementServer[] | cdktf.IResolvable;
  /**
  * masquerading_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#masquerading_ip ClusterV2#masquerading_ip}
  */
  readonly masqueradingIp?: ClusterV2NetworkMasqueradingIp[] | cdktf.IResolvable;
  /**
  * name_server_ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#name_server_ip_list ClusterV2#name_server_ip_list}
  */
  readonly nameServerIpList?: ClusterV2NetworkNameServerIpListStruct[] | cdktf.IResolvable;
  /**
  * ntp_server_ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#ntp_server_ip_list ClusterV2#ntp_server_ip_list}
  */
  readonly ntpServerIpList?: ClusterV2NetworkNtpServerIpListStruct[] | cdktf.IResolvable;
  /**
  * smtp_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#smtp_server ClusterV2#smtp_server}
  */
  readonly smtpServer?: ClusterV2NetworkSmtpServer[] | cdktf.IResolvable;
}

export function clusterV2NetworkToTerraform(struct?: ClusterV2Network | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    key_management_server_type: cdktf.stringToTerraform(struct!.keyManagementServerType),
    nfs_subnet_white_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nfsSubnetWhiteList),
    backplane: cdktf.listMapper(clusterV2NetworkBackplaneToTerraform, true)(struct!.backplane),
    external_address: cdktf.listMapper(clusterV2NetworkExternalAddressToTerraform, true)(struct!.externalAddress),
    external_data_services_ip: cdktf.listMapper(clusterV2NetworkExternalDataServicesIpToTerraform, true)(struct!.externalDataServicesIp),
    http_proxy_list: cdktf.listMapper(clusterV2NetworkHttpProxyListStructToTerraform, true)(struct!.httpProxyList),
    http_proxy_white_list: cdktf.listMapper(clusterV2NetworkHttpProxyWhiteListStructToTerraform, true)(struct!.httpProxyWhiteList),
    management_server: cdktf.listMapper(clusterV2NetworkManagementServerToTerraform, true)(struct!.managementServer),
    masquerading_ip: cdktf.listMapper(clusterV2NetworkMasqueradingIpToTerraform, true)(struct!.masqueradingIp),
    name_server_ip_list: cdktf.listMapper(clusterV2NetworkNameServerIpListStructToTerraform, true)(struct!.nameServerIpList),
    ntp_server_ip_list: cdktf.listMapper(clusterV2NetworkNtpServerIpListStructToTerraform, true)(struct!.ntpServerIpList),
    smtp_server: cdktf.listMapper(clusterV2NetworkSmtpServerToTerraform, true)(struct!.smtpServer),
  }
}


export function clusterV2NetworkToHclTerraform(struct?: ClusterV2Network | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_management_server_type: {
      value: cdktf.stringToHclTerraform(struct!.keyManagementServerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs_subnet_white_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nfsSubnetWhiteList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    backplane: {
      value: cdktf.listMapperHcl(clusterV2NetworkBackplaneToHclTerraform, true)(struct!.backplane),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkBackplaneList",
    },
    external_address: {
      value: cdktf.listMapperHcl(clusterV2NetworkExternalAddressToHclTerraform, true)(struct!.externalAddress),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkExternalAddressList",
    },
    external_data_services_ip: {
      value: cdktf.listMapperHcl(clusterV2NetworkExternalDataServicesIpToHclTerraform, true)(struct!.externalDataServicesIp),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkExternalDataServicesIpList",
    },
    http_proxy_list: {
      value: cdktf.listMapperHcl(clusterV2NetworkHttpProxyListStructToHclTerraform, true)(struct!.httpProxyList),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkHttpProxyListStructList",
    },
    http_proxy_white_list: {
      value: cdktf.listMapperHcl(clusterV2NetworkHttpProxyWhiteListStructToHclTerraform, true)(struct!.httpProxyWhiteList),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkHttpProxyWhiteListStructList",
    },
    management_server: {
      value: cdktf.listMapperHcl(clusterV2NetworkManagementServerToHclTerraform, true)(struct!.managementServer),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkManagementServerList",
    },
    masquerading_ip: {
      value: cdktf.listMapperHcl(clusterV2NetworkMasqueradingIpToHclTerraform, true)(struct!.masqueradingIp),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkMasqueradingIpList",
    },
    name_server_ip_list: {
      value: cdktf.listMapperHcl(clusterV2NetworkNameServerIpListStructToHclTerraform, true)(struct!.nameServerIpList),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkNameServerIpListStructList",
    },
    ntp_server_ip_list: {
      value: cdktf.listMapperHcl(clusterV2NetworkNtpServerIpListStructToHclTerraform, true)(struct!.ntpServerIpList),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkNtpServerIpListStructList",
    },
    smtp_server: {
      value: cdktf.listMapperHcl(clusterV2NetworkSmtpServerToHclTerraform, true)(struct!.smtpServer),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NetworkSmtpServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2Network | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._keyManagementServerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyManagementServerType = this._keyManagementServerType;
    }
    if (this._nfsSubnetWhiteList !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsSubnetWhiteList = this._nfsSubnetWhiteList;
    }
    if (this._backplane?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backplane = this._backplane?.internalValue;
    }
    if (this._externalAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalAddress = this._externalAddress?.internalValue;
    }
    if (this._externalDataServicesIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalDataServicesIp = this._externalDataServicesIp?.internalValue;
    }
    if (this._httpProxyList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxyList = this._httpProxyList?.internalValue;
    }
    if (this._httpProxyWhiteList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxyWhiteList = this._httpProxyWhiteList?.internalValue;
    }
    if (this._managementServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementServer = this._managementServer?.internalValue;
    }
    if (this._masqueradingIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.masqueradingIp = this._masqueradingIp?.internalValue;
    }
    if (this._nameServerIpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameServerIpList = this._nameServerIpList?.internalValue;
    }
    if (this._ntpServerIpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServerIpList = this._ntpServerIpList?.internalValue;
    }
    if (this._smtpServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpServer = this._smtpServer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2Network | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._keyManagementServerType = undefined;
      this._nfsSubnetWhiteList = undefined;
      this._backplane.internalValue = undefined;
      this._externalAddress.internalValue = undefined;
      this._externalDataServicesIp.internalValue = undefined;
      this._httpProxyList.internalValue = undefined;
      this._httpProxyWhiteList.internalValue = undefined;
      this._managementServer.internalValue = undefined;
      this._masqueradingIp.internalValue = undefined;
      this._nameServerIpList.internalValue = undefined;
      this._ntpServerIpList.internalValue = undefined;
      this._smtpServer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._keyManagementServerType = value.keyManagementServerType;
      this._nfsSubnetWhiteList = value.nfsSubnetWhiteList;
      this._backplane.internalValue = value.backplane;
      this._externalAddress.internalValue = value.externalAddress;
      this._externalDataServicesIp.internalValue = value.externalDataServicesIp;
      this._httpProxyList.internalValue = value.httpProxyList;
      this._httpProxyWhiteList.internalValue = value.httpProxyWhiteList;
      this._managementServer.internalValue = value.managementServer;
      this._masqueradingIp.internalValue = value.masqueradingIp;
      this._nameServerIpList.internalValue = value.nameServerIpList;
      this._ntpServerIpList.internalValue = value.ntpServerIpList;
      this._smtpServer.internalValue = value.smtpServer;
    }
  }

  // external_subnet - computed: true, optional: false, required: false
  public get externalSubnet() {
    return this.getStringAttribute('external_subnet');
  }

  // fqdn - computed: true, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // internal_subnet - computed: true, optional: false, required: false
  public get internalSubnet() {
    return this.getStringAttribute('internal_subnet');
  }

  // key_management_server_type - computed: true, optional: true, required: false
  private _keyManagementServerType?: string; 
  public get keyManagementServerType() {
    return this.getStringAttribute('key_management_server_type');
  }
  public set keyManagementServerType(value: string) {
    this._keyManagementServerType = value;
  }
  public resetKeyManagementServerType() {
    this._keyManagementServerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyManagementServerTypeInput() {
    return this._keyManagementServerType;
  }

  // masquerading_port - computed: true, optional: false, required: false
  public get masqueradingPort() {
    return this.getStringAttribute('masquerading_port');
  }

  // nfs_subnet_white_list - computed: true, optional: true, required: false
  private _nfsSubnetWhiteList?: string[]; 
  public get nfsSubnetWhiteList() {
    return this.getListAttribute('nfs_subnet_white_list');
  }
  public set nfsSubnetWhiteList(value: string[]) {
    this._nfsSubnetWhiteList = value;
  }
  public resetNfsSubnetWhiteList() {
    this._nfsSubnetWhiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsSubnetWhiteListInput() {
    return this._nfsSubnetWhiteList;
  }

  // backplane - computed: false, optional: true, required: false
  private _backplane = new ClusterV2NetworkBackplaneList(this, "backplane", false);
  public get backplane() {
    return this._backplane;
  }
  public putBackplane(value: ClusterV2NetworkBackplane[] | cdktf.IResolvable) {
    this._backplane.internalValue = value;
  }
  public resetBackplane() {
    this._backplane.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backplaneInput() {
    return this._backplane.internalValue;
  }

  // external_address - computed: false, optional: true, required: false
  private _externalAddress = new ClusterV2NetworkExternalAddressList(this, "external_address", false);
  public get externalAddress() {
    return this._externalAddress;
  }
  public putExternalAddress(value: ClusterV2NetworkExternalAddress[] | cdktf.IResolvable) {
    this._externalAddress.internalValue = value;
  }
  public resetExternalAddress() {
    this._externalAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAddressInput() {
    return this._externalAddress.internalValue;
  }

  // external_data_services_ip - computed: false, optional: true, required: false
  private _externalDataServicesIp = new ClusterV2NetworkExternalDataServicesIpList(this, "external_data_services_ip", false);
  public get externalDataServicesIp() {
    return this._externalDataServicesIp;
  }
  public putExternalDataServicesIp(value: ClusterV2NetworkExternalDataServicesIp[] | cdktf.IResolvable) {
    this._externalDataServicesIp.internalValue = value;
  }
  public resetExternalDataServicesIp() {
    this._externalDataServicesIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataServicesIpInput() {
    return this._externalDataServicesIp.internalValue;
  }

  // http_proxy_list - computed: false, optional: true, required: false
  private _httpProxyList = new ClusterV2NetworkHttpProxyListStructList(this, "http_proxy_list", false);
  public get httpProxyList() {
    return this._httpProxyList;
  }
  public putHttpProxyList(value: ClusterV2NetworkHttpProxyListStruct[] | cdktf.IResolvable) {
    this._httpProxyList.internalValue = value;
  }
  public resetHttpProxyList() {
    this._httpProxyList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyListInput() {
    return this._httpProxyList.internalValue;
  }

  // http_proxy_white_list - computed: false, optional: true, required: false
  private _httpProxyWhiteList = new ClusterV2NetworkHttpProxyWhiteListStructList(this, "http_proxy_white_list", false);
  public get httpProxyWhiteList() {
    return this._httpProxyWhiteList;
  }
  public putHttpProxyWhiteList(value: ClusterV2NetworkHttpProxyWhiteListStruct[] | cdktf.IResolvable) {
    this._httpProxyWhiteList.internalValue = value;
  }
  public resetHttpProxyWhiteList() {
    this._httpProxyWhiteList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyWhiteListInput() {
    return this._httpProxyWhiteList.internalValue;
  }

  // management_server - computed: false, optional: true, required: false
  private _managementServer = new ClusterV2NetworkManagementServerList(this, "management_server", false);
  public get managementServer() {
    return this._managementServer;
  }
  public putManagementServer(value: ClusterV2NetworkManagementServer[] | cdktf.IResolvable) {
    this._managementServer.internalValue = value;
  }
  public resetManagementServer() {
    this._managementServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementServerInput() {
    return this._managementServer.internalValue;
  }

  // masquerading_ip - computed: false, optional: true, required: false
  private _masqueradingIp = new ClusterV2NetworkMasqueradingIpList(this, "masquerading_ip", false);
  public get masqueradingIp() {
    return this._masqueradingIp;
  }
  public putMasqueradingIp(value: ClusterV2NetworkMasqueradingIp[] | cdktf.IResolvable) {
    this._masqueradingIp.internalValue = value;
  }
  public resetMasqueradingIp() {
    this._masqueradingIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masqueradingIpInput() {
    return this._masqueradingIp.internalValue;
  }

  // name_server_ip_list - computed: false, optional: true, required: false
  private _nameServerIpList = new ClusterV2NetworkNameServerIpListStructList(this, "name_server_ip_list", false);
  public get nameServerIpList() {
    return this._nameServerIpList;
  }
  public putNameServerIpList(value: ClusterV2NetworkNameServerIpListStruct[] | cdktf.IResolvable) {
    this._nameServerIpList.internalValue = value;
  }
  public resetNameServerIpList() {
    this._nameServerIpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServerIpListInput() {
    return this._nameServerIpList.internalValue;
  }

  // ntp_server_ip_list - computed: false, optional: true, required: false
  private _ntpServerIpList = new ClusterV2NetworkNtpServerIpListStructList(this, "ntp_server_ip_list", false);
  public get ntpServerIpList() {
    return this._ntpServerIpList;
  }
  public putNtpServerIpList(value: ClusterV2NetworkNtpServerIpListStruct[] | cdktf.IResolvable) {
    this._ntpServerIpList.internalValue = value;
  }
  public resetNtpServerIpList() {
    this._ntpServerIpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServerIpListInput() {
    return this._ntpServerIpList.internalValue;
  }

  // smtp_server - computed: false, optional: true, required: false
  private _smtpServer = new ClusterV2NetworkSmtpServerList(this, "smtp_server", false);
  public get smtpServer() {
    return this._smtpServer;
  }
  public putSmtpServer(value: ClusterV2NetworkSmtpServer[] | cdktf.IResolvable) {
    this._smtpServer.internalValue = value;
  }
  public resetSmtpServer() {
    this._smtpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpServerInput() {
    return this._smtpServer.internalValue;
  }
}

export class ClusterV2NetworkList extends cdktf.ComplexList {
  public internalValue? : ClusterV2Network[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NetworkOutputReference {
    return new ClusterV2NetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NodesNodeListControllerVmIpIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#prefix_length ClusterV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#value ClusterV2#value}
  */
  readonly value: string;
}

export function clusterV2NodesNodeListControllerVmIpIpv4ToTerraform(struct?: ClusterV2NodesNodeListControllerVmIpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterV2NodesNodeListControllerVmIpIpv4ToHclTerraform(struct?: ClusterV2NodesNodeListControllerVmIpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NodesNodeListControllerVmIpIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NodesNodeListControllerVmIpIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NodesNodeListControllerVmIpIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterV2NodesNodeListControllerVmIpIpv4List extends cdktf.ComplexList {
  public internalValue? : ClusterV2NodesNodeListControllerVmIpIpv4[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NodesNodeListControllerVmIpIpv4OutputReference {
    return new ClusterV2NodesNodeListControllerVmIpIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NodesNodeListControllerVmIpIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#prefix_length ClusterV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#value ClusterV2#value}
  */
  readonly value: string;
}

export function clusterV2NodesNodeListControllerVmIpIpv6ToTerraform(struct?: ClusterV2NodesNodeListControllerVmIpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterV2NodesNodeListControllerVmIpIpv6ToHclTerraform(struct?: ClusterV2NodesNodeListControllerVmIpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NodesNodeListControllerVmIpIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NodesNodeListControllerVmIpIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NodesNodeListControllerVmIpIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterV2NodesNodeListControllerVmIpIpv6List extends cdktf.ComplexList {
  public internalValue? : ClusterV2NodesNodeListControllerVmIpIpv6[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NodesNodeListControllerVmIpIpv6OutputReference {
    return new ClusterV2NodesNodeListControllerVmIpIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NodesNodeListControllerVmIp {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#ipv4 ClusterV2#ipv4}
  */
  readonly ipv4?: ClusterV2NodesNodeListControllerVmIpIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#ipv6 ClusterV2#ipv6}
  */
  readonly ipv6?: ClusterV2NodesNodeListControllerVmIpIpv6[] | cdktf.IResolvable;
}

export function clusterV2NodesNodeListControllerVmIpToTerraform(struct?: ClusterV2NodesNodeListControllerVmIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(clusterV2NodesNodeListControllerVmIpIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(clusterV2NodesNodeListControllerVmIpIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function clusterV2NodesNodeListControllerVmIpToHclTerraform(struct?: ClusterV2NodesNodeListControllerVmIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(clusterV2NodesNodeListControllerVmIpIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NodesNodeListControllerVmIpIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(clusterV2NodesNodeListControllerVmIpIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NodesNodeListControllerVmIpIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NodesNodeListControllerVmIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NodesNodeListControllerVmIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NodesNodeListControllerVmIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new ClusterV2NodesNodeListControllerVmIpIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ClusterV2NodesNodeListControllerVmIpIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ClusterV2NodesNodeListControllerVmIpIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ClusterV2NodesNodeListControllerVmIpIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class ClusterV2NodesNodeListControllerVmIpList extends cdktf.ComplexList {
  public internalValue? : ClusterV2NodesNodeListControllerVmIp[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NodesNodeListControllerVmIpOutputReference {
    return new ClusterV2NodesNodeListControllerVmIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NodesNodeListHostIpIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#prefix_length ClusterV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#value ClusterV2#value}
  */
  readonly value: string;
}

export function clusterV2NodesNodeListHostIpIpv4ToTerraform(struct?: ClusterV2NodesNodeListHostIpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterV2NodesNodeListHostIpIpv4ToHclTerraform(struct?: ClusterV2NodesNodeListHostIpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NodesNodeListHostIpIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NodesNodeListHostIpIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NodesNodeListHostIpIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterV2NodesNodeListHostIpIpv4List extends cdktf.ComplexList {
  public internalValue? : ClusterV2NodesNodeListHostIpIpv4[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NodesNodeListHostIpIpv4OutputReference {
    return new ClusterV2NodesNodeListHostIpIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NodesNodeListHostIpIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#prefix_length ClusterV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#value ClusterV2#value}
  */
  readonly value: string;
}

export function clusterV2NodesNodeListHostIpIpv6ToTerraform(struct?: ClusterV2NodesNodeListHostIpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterV2NodesNodeListHostIpIpv6ToHclTerraform(struct?: ClusterV2NodesNodeListHostIpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NodesNodeListHostIpIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NodesNodeListHostIpIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NodesNodeListHostIpIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterV2NodesNodeListHostIpIpv6List extends cdktf.ComplexList {
  public internalValue? : ClusterV2NodesNodeListHostIpIpv6[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NodesNodeListHostIpIpv6OutputReference {
    return new ClusterV2NodesNodeListHostIpIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NodesNodeListHostIp {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#ipv4 ClusterV2#ipv4}
  */
  readonly ipv4?: ClusterV2NodesNodeListHostIpIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#ipv6 ClusterV2#ipv6}
  */
  readonly ipv6?: ClusterV2NodesNodeListHostIpIpv6[] | cdktf.IResolvable;
}

export function clusterV2NodesNodeListHostIpToTerraform(struct?: ClusterV2NodesNodeListHostIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(clusterV2NodesNodeListHostIpIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(clusterV2NodesNodeListHostIpIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function clusterV2NodesNodeListHostIpToHclTerraform(struct?: ClusterV2NodesNodeListHostIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(clusterV2NodesNodeListHostIpIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NodesNodeListHostIpIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(clusterV2NodesNodeListHostIpIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NodesNodeListHostIpIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NodesNodeListHostIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NodesNodeListHostIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NodesNodeListHostIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new ClusterV2NodesNodeListHostIpIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ClusterV2NodesNodeListHostIpIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ClusterV2NodesNodeListHostIpIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ClusterV2NodesNodeListHostIpIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class ClusterV2NodesNodeListHostIpList extends cdktf.ComplexList {
  public internalValue? : ClusterV2NodesNodeListHostIp[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NodesNodeListHostIpOutputReference {
    return new ClusterV2NodesNodeListHostIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NodesNodeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#should_skip_add_node ClusterV2#should_skip_add_node}
  */
  readonly shouldSkipAddNode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#should_skip_host_networking ClusterV2#should_skip_host_networking}
  */
  readonly shouldSkipHostNetworking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#should_skip_pre_expand_checks ClusterV2#should_skip_pre_expand_checks}
  */
  readonly shouldSkipPreExpandChecks?: boolean | cdktf.IResolvable;
  /**
  * controller_vm_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#controller_vm_ip ClusterV2#controller_vm_ip}
  */
  readonly controllerVmIp: ClusterV2NodesNodeListControllerVmIp[] | cdktf.IResolvable;
  /**
  * host_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#host_ip ClusterV2#host_ip}
  */
  readonly hostIp?: ClusterV2NodesNodeListHostIp[] | cdktf.IResolvable;
}

export function clusterV2NodesNodeListStructToTerraform(struct?: ClusterV2NodesNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_skip_add_node: cdktf.booleanToTerraform(struct!.shouldSkipAddNode),
    should_skip_host_networking: cdktf.booleanToTerraform(struct!.shouldSkipHostNetworking),
    should_skip_pre_expand_checks: cdktf.booleanToTerraform(struct!.shouldSkipPreExpandChecks),
    controller_vm_ip: cdktf.listMapper(clusterV2NodesNodeListControllerVmIpToTerraform, true)(struct!.controllerVmIp),
    host_ip: cdktf.listMapper(clusterV2NodesNodeListHostIpToTerraform, true)(struct!.hostIp),
  }
}


export function clusterV2NodesNodeListStructToHclTerraform(struct?: ClusterV2NodesNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    should_skip_add_node: {
      value: cdktf.booleanToHclTerraform(struct!.shouldSkipAddNode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_skip_host_networking: {
      value: cdktf.booleanToHclTerraform(struct!.shouldSkipHostNetworking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_skip_pre_expand_checks: {
      value: cdktf.booleanToHclTerraform(struct!.shouldSkipPreExpandChecks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    controller_vm_ip: {
      value: cdktf.listMapperHcl(clusterV2NodesNodeListControllerVmIpToHclTerraform, true)(struct!.controllerVmIp),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NodesNodeListControllerVmIpList",
    },
    host_ip: {
      value: cdktf.listMapperHcl(clusterV2NodesNodeListHostIpToHclTerraform, true)(struct!.hostIp),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NodesNodeListHostIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NodesNodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NodesNodeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldSkipAddNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldSkipAddNode = this._shouldSkipAddNode;
    }
    if (this._shouldSkipHostNetworking !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldSkipHostNetworking = this._shouldSkipHostNetworking;
    }
    if (this._shouldSkipPreExpandChecks !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldSkipPreExpandChecks = this._shouldSkipPreExpandChecks;
    }
    if (this._controllerVmIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerVmIp = this._controllerVmIp?.internalValue;
    }
    if (this._hostIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIp = this._hostIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NodesNodeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shouldSkipAddNode = undefined;
      this._shouldSkipHostNetworking = undefined;
      this._shouldSkipPreExpandChecks = undefined;
      this._controllerVmIp.internalValue = undefined;
      this._hostIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shouldSkipAddNode = value.shouldSkipAddNode;
      this._shouldSkipHostNetworking = value.shouldSkipHostNetworking;
      this._shouldSkipPreExpandChecks = value.shouldSkipPreExpandChecks;
      this._controllerVmIp.internalValue = value.controllerVmIp;
      this._hostIp.internalValue = value.hostIp;
    }
  }

  // node_uuid - computed: true, optional: false, required: false
  public get nodeUuid() {
    return this.getStringAttribute('node_uuid');
  }

  // should_skip_add_node - computed: true, optional: true, required: false
  private _shouldSkipAddNode?: boolean | cdktf.IResolvable; 
  public get shouldSkipAddNode() {
    return this.getBooleanAttribute('should_skip_add_node');
  }
  public set shouldSkipAddNode(value: boolean | cdktf.IResolvable) {
    this._shouldSkipAddNode = value;
  }
  public resetShouldSkipAddNode() {
    this._shouldSkipAddNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldSkipAddNodeInput() {
    return this._shouldSkipAddNode;
  }

  // should_skip_host_networking - computed: true, optional: true, required: false
  private _shouldSkipHostNetworking?: boolean | cdktf.IResolvable; 
  public get shouldSkipHostNetworking() {
    return this.getBooleanAttribute('should_skip_host_networking');
  }
  public set shouldSkipHostNetworking(value: boolean | cdktf.IResolvable) {
    this._shouldSkipHostNetworking = value;
  }
  public resetShouldSkipHostNetworking() {
    this._shouldSkipHostNetworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldSkipHostNetworkingInput() {
    return this._shouldSkipHostNetworking;
  }

  // should_skip_pre_expand_checks - computed: true, optional: true, required: false
  private _shouldSkipPreExpandChecks?: boolean | cdktf.IResolvable; 
  public get shouldSkipPreExpandChecks() {
    return this.getBooleanAttribute('should_skip_pre_expand_checks');
  }
  public set shouldSkipPreExpandChecks(value: boolean | cdktf.IResolvable) {
    this._shouldSkipPreExpandChecks = value;
  }
  public resetShouldSkipPreExpandChecks() {
    this._shouldSkipPreExpandChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldSkipPreExpandChecksInput() {
    return this._shouldSkipPreExpandChecks;
  }

  // controller_vm_ip - computed: false, optional: false, required: true
  private _controllerVmIp = new ClusterV2NodesNodeListControllerVmIpList(this, "controller_vm_ip", false);
  public get controllerVmIp() {
    return this._controllerVmIp;
  }
  public putControllerVmIp(value: ClusterV2NodesNodeListControllerVmIp[] | cdktf.IResolvable) {
    this._controllerVmIp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerVmIpInput() {
    return this._controllerVmIp.internalValue;
  }

  // host_ip - computed: false, optional: true, required: false
  private _hostIp = new ClusterV2NodesNodeListHostIpList(this, "host_ip", false);
  public get hostIp() {
    return this._hostIp;
  }
  public putHostIp(value: ClusterV2NodesNodeListHostIp[] | cdktf.IResolvable) {
    this._hostIp.internalValue = value;
  }
  public resetHostIp() {
    this._hostIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpInput() {
    return this._hostIp.internalValue;
  }
}

export class ClusterV2NodesNodeListStructList extends cdktf.ComplexList {
  public internalValue? : ClusterV2NodesNodeListStruct[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NodesNodeListStructOutputReference {
    return new ClusterV2NodesNodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NodesRemoveNodeParamsExtraParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#should_skip_add_check ClusterV2#should_skip_add_check}
  */
  readonly shouldSkipAddCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#should_skip_upgrade_check ClusterV2#should_skip_upgrade_check}
  */
  readonly shouldSkipUpgradeCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#skip_space_check ClusterV2#skip_space_check}
  */
  readonly skipSpaceCheck?: boolean | cdktf.IResolvable;
}

export function clusterV2NodesRemoveNodeParamsExtraParamsToTerraform(struct?: ClusterV2NodesRemoveNodeParamsExtraParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_skip_add_check: cdktf.booleanToTerraform(struct!.shouldSkipAddCheck),
    should_skip_upgrade_check: cdktf.booleanToTerraform(struct!.shouldSkipUpgradeCheck),
    skip_space_check: cdktf.booleanToTerraform(struct!.skipSpaceCheck),
  }
}


export function clusterV2NodesRemoveNodeParamsExtraParamsToHclTerraform(struct?: ClusterV2NodesRemoveNodeParamsExtraParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    should_skip_add_check: {
      value: cdktf.booleanToHclTerraform(struct!.shouldSkipAddCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_skip_upgrade_check: {
      value: cdktf.booleanToHclTerraform(struct!.shouldSkipUpgradeCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_space_check: {
      value: cdktf.booleanToHclTerraform(struct!.skipSpaceCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NodesRemoveNodeParamsExtraParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NodesRemoveNodeParamsExtraParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldSkipAddCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldSkipAddCheck = this._shouldSkipAddCheck;
    }
    if (this._shouldSkipUpgradeCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldSkipUpgradeCheck = this._shouldSkipUpgradeCheck;
    }
    if (this._skipSpaceCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipSpaceCheck = this._skipSpaceCheck;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NodesRemoveNodeParamsExtraParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shouldSkipAddCheck = undefined;
      this._shouldSkipUpgradeCheck = undefined;
      this._skipSpaceCheck = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shouldSkipAddCheck = value.shouldSkipAddCheck;
      this._shouldSkipUpgradeCheck = value.shouldSkipUpgradeCheck;
      this._skipSpaceCheck = value.skipSpaceCheck;
    }
  }

  // should_skip_add_check - computed: false, optional: true, required: false
  private _shouldSkipAddCheck?: boolean | cdktf.IResolvable; 
  public get shouldSkipAddCheck() {
    return this.getBooleanAttribute('should_skip_add_check');
  }
  public set shouldSkipAddCheck(value: boolean | cdktf.IResolvable) {
    this._shouldSkipAddCheck = value;
  }
  public resetShouldSkipAddCheck() {
    this._shouldSkipAddCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldSkipAddCheckInput() {
    return this._shouldSkipAddCheck;
  }

  // should_skip_upgrade_check - computed: false, optional: true, required: false
  private _shouldSkipUpgradeCheck?: boolean | cdktf.IResolvable; 
  public get shouldSkipUpgradeCheck() {
    return this.getBooleanAttribute('should_skip_upgrade_check');
  }
  public set shouldSkipUpgradeCheck(value: boolean | cdktf.IResolvable) {
    this._shouldSkipUpgradeCheck = value;
  }
  public resetShouldSkipUpgradeCheck() {
    this._shouldSkipUpgradeCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldSkipUpgradeCheckInput() {
    return this._shouldSkipUpgradeCheck;
  }

  // skip_space_check - computed: false, optional: true, required: false
  private _skipSpaceCheck?: boolean | cdktf.IResolvable; 
  public get skipSpaceCheck() {
    return this.getBooleanAttribute('skip_space_check');
  }
  public set skipSpaceCheck(value: boolean | cdktf.IResolvable) {
    this._skipSpaceCheck = value;
  }
  public resetSkipSpaceCheck() {
    this._skipSpaceCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipSpaceCheckInput() {
    return this._skipSpaceCheck;
  }
}

export class ClusterV2NodesRemoveNodeParamsExtraParamsList extends cdktf.ComplexList {
  public internalValue? : ClusterV2NodesRemoveNodeParamsExtraParams[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NodesRemoveNodeParamsExtraParamsOutputReference {
    return new ClusterV2NodesRemoveNodeParamsExtraParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2NodesRemoveNodeParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#should_skip_prechecks ClusterV2#should_skip_prechecks}
  */
  readonly shouldSkipPrechecks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#should_skip_remove ClusterV2#should_skip_remove}
  */
  readonly shouldSkipRemove?: boolean | cdktf.IResolvable;
  /**
  * extra_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#extra_params ClusterV2#extra_params}
  */
  readonly extraParams?: ClusterV2NodesRemoveNodeParamsExtraParams[] | cdktf.IResolvable;
}

export function clusterV2NodesRemoveNodeParamsToTerraform(struct?: ClusterV2NodesRemoveNodeParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_skip_prechecks: cdktf.booleanToTerraform(struct!.shouldSkipPrechecks),
    should_skip_remove: cdktf.booleanToTerraform(struct!.shouldSkipRemove),
    extra_params: cdktf.listMapper(clusterV2NodesRemoveNodeParamsExtraParamsToTerraform, true)(struct!.extraParams),
  }
}


export function clusterV2NodesRemoveNodeParamsToHclTerraform(struct?: ClusterV2NodesRemoveNodeParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    should_skip_prechecks: {
      value: cdktf.booleanToHclTerraform(struct!.shouldSkipPrechecks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_skip_remove: {
      value: cdktf.booleanToHclTerraform(struct!.shouldSkipRemove),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extra_params: {
      value: cdktf.listMapperHcl(clusterV2NodesRemoveNodeParamsExtraParamsToHclTerraform, true)(struct!.extraParams),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NodesRemoveNodeParamsExtraParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NodesRemoveNodeParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2NodesRemoveNodeParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldSkipPrechecks !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldSkipPrechecks = this._shouldSkipPrechecks;
    }
    if (this._shouldSkipRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldSkipRemove = this._shouldSkipRemove;
    }
    if (this._extraParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraParams = this._extraParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2NodesRemoveNodeParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shouldSkipPrechecks = undefined;
      this._shouldSkipRemove = undefined;
      this._extraParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shouldSkipPrechecks = value.shouldSkipPrechecks;
      this._shouldSkipRemove = value.shouldSkipRemove;
      this._extraParams.internalValue = value.extraParams;
    }
  }

  // should_skip_prechecks - computed: false, optional: true, required: false
  private _shouldSkipPrechecks?: boolean | cdktf.IResolvable; 
  public get shouldSkipPrechecks() {
    return this.getBooleanAttribute('should_skip_prechecks');
  }
  public set shouldSkipPrechecks(value: boolean | cdktf.IResolvable) {
    this._shouldSkipPrechecks = value;
  }
  public resetShouldSkipPrechecks() {
    this._shouldSkipPrechecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldSkipPrechecksInput() {
    return this._shouldSkipPrechecks;
  }

  // should_skip_remove - computed: false, optional: true, required: false
  private _shouldSkipRemove?: boolean | cdktf.IResolvable; 
  public get shouldSkipRemove() {
    return this.getBooleanAttribute('should_skip_remove');
  }
  public set shouldSkipRemove(value: boolean | cdktf.IResolvable) {
    this._shouldSkipRemove = value;
  }
  public resetShouldSkipRemove() {
    this._shouldSkipRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldSkipRemoveInput() {
    return this._shouldSkipRemove;
  }

  // extra_params - computed: false, optional: true, required: false
  private _extraParams = new ClusterV2NodesRemoveNodeParamsExtraParamsList(this, "extra_params", false);
  public get extraParams() {
    return this._extraParams;
  }
  public putExtraParams(value: ClusterV2NodesRemoveNodeParamsExtraParams[] | cdktf.IResolvable) {
    this._extraParams.internalValue = value;
  }
  public resetExtraParams() {
    this._extraParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraParamsInput() {
    return this._extraParams.internalValue;
  }
}

export class ClusterV2NodesRemoveNodeParamsList extends cdktf.ComplexList {
  public internalValue? : ClusterV2NodesRemoveNodeParams[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NodesRemoveNodeParamsOutputReference {
    return new ClusterV2NodesRemoveNodeParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterV2Nodes {
  /**
  * node_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#node_list ClusterV2#node_list}
  */
  readonly nodeList?: ClusterV2NodesNodeListStruct[] | cdktf.IResolvable;
  /**
  * remove_node_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#remove_node_params ClusterV2#remove_node_params}
  */
  readonly removeNodeParams?: ClusterV2NodesRemoveNodeParams[] | cdktf.IResolvable;
}

export function clusterV2NodesToTerraform(struct?: ClusterV2Nodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_list: cdktf.listMapper(clusterV2NodesNodeListStructToTerraform, true)(struct!.nodeList),
    remove_node_params: cdktf.listMapper(clusterV2NodesRemoveNodeParamsToTerraform, true)(struct!.removeNodeParams),
  }
}


export function clusterV2NodesToHclTerraform(struct?: ClusterV2Nodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_list: {
      value: cdktf.listMapperHcl(clusterV2NodesNodeListStructToHclTerraform, true)(struct!.nodeList),
      isBlock: true,
      type: "set",
      storageClassType: "ClusterV2NodesNodeListStructList",
    },
    remove_node_params: {
      value: cdktf.listMapperHcl(clusterV2NodesRemoveNodeParamsToHclTerraform, true)(struct!.removeNodeParams),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterV2NodesRemoveNodeParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterV2NodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterV2Nodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeList = this._nodeList?.internalValue;
    }
    if (this._removeNodeParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeNodeParams = this._removeNodeParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterV2Nodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeList.internalValue = undefined;
      this._removeNodeParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeList.internalValue = value.nodeList;
      this._removeNodeParams.internalValue = value.removeNodeParams;
    }
  }

  // number_of_nodes - computed: true, optional: false, required: false
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }

  // node_list - computed: false, optional: true, required: false
  private _nodeList = new ClusterV2NodesNodeListStructList(this, "node_list", true);
  public get nodeList() {
    return this._nodeList;
  }
  public putNodeList(value: ClusterV2NodesNodeListStruct[] | cdktf.IResolvable) {
    this._nodeList.internalValue = value;
  }
  public resetNodeList() {
    this._nodeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeListInput() {
    return this._nodeList.internalValue;
  }

  // remove_node_params - computed: false, optional: true, required: false
  private _removeNodeParams = new ClusterV2NodesRemoveNodeParamsList(this, "remove_node_params", false);
  public get removeNodeParams() {
    return this._removeNodeParams;
  }
  public putRemoveNodeParams(value: ClusterV2NodesRemoveNodeParams[] | cdktf.IResolvable) {
    this._removeNodeParams.internalValue = value;
  }
  public resetRemoveNodeParams() {
    this._removeNodeParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeNodeParamsInput() {
    return this._removeNodeParams.internalValue;
  }
}

export class ClusterV2NodesList extends cdktf.ComplexList {
  public internalValue? : ClusterV2Nodes[] | cdktf.IResolvable

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
  public get(index: number): ClusterV2NodesOutputReference {
    return new ClusterV2NodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2 nutanix_cluster_v2}
*/
export class ClusterV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_cluster_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterV2 to import
  * @param importFromId The id of the existing ClusterV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_cluster_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/cluster_v2 nutanix_cluster_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterV2Config
  */
  public constructor(scope: Construct, id: string, config: ClusterV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_cluster_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._categories = config.categories;
    this._containerName = config.containerName;
    this._dryrun = config.dryrun;
    this._expand = config.expand;
    this._extId = config.extId;
    this._id = config.id;
    this._name = config.name;
    this._config.internalValue = config.config;
    this._network.internalValue = config.network;
    this._nodes.internalValue = config.nodes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_eligibility_score - computed: true, optional: false, required: false
  public get backupEligibilityScore() {
    return this.getNumberAttribute('backup_eligibility_score');
  }

  // categories - computed: true, optional: true, required: false
  private _categories?: string[]; 
  public get categories() {
    return this.getListAttribute('categories');
  }
  public set categories(value: string[]) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
  }

  // cluster_profile_ext_id - computed: true, optional: false, required: false
  public get clusterProfileExtId() {
    return this.getStringAttribute('cluster_profile_ext_id');
  }

  // container_name - computed: true, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // dryrun - computed: false, optional: true, required: false
  private _dryrun?: boolean | cdktf.IResolvable; 
  public get dryrun() {
    return this.getBooleanAttribute('dryrun');
  }
  public set dryrun(value: boolean | cdktf.IResolvable) {
    this._dryrun = value;
  }
  public resetDryrun() {
    this._dryrun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryrunInput() {
    return this._dryrun;
  }

  // expand - computed: false, optional: true, required: false
  private _expand?: string; 
  public get expand() {
    return this.getStringAttribute('expand');
  }
  public set expand(value: string) {
    this._expand = value;
  }
  public resetExpand() {
    this._expand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandInput() {
    return this._expand;
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
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

  // inefficient_vm_count - computed: true, optional: false, required: false
  public get inefficientVmCount() {
    return this.getNumberAttribute('inefficient_vm_count');
  }

  // links - computed: true, optional: false, required: false
  private _links = new ClusterV2LinksList(this, "links", false);
  public get links() {
    return this._links;
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

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // upgrade_status - computed: true, optional: false, required: false
  public get upgradeStatus() {
    return this.getStringAttribute('upgrade_status');
  }

  // vm_count - computed: true, optional: false, required: false
  public get vmCount() {
    return this.getNumberAttribute('vm_count');
  }

  // config - computed: false, optional: true, required: false
  private _config = new ClusterV2ConfigAList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: ClusterV2ConfigA[] | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new ClusterV2NetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
  public putNetwork(value: ClusterV2Network[] | cdktf.IResolvable) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes = new ClusterV2NodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: ClusterV2Nodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  public resetNodes() {
    this._nodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._categories),
      container_name: cdktf.stringToTerraform(this._containerName),
      dryrun: cdktf.booleanToTerraform(this._dryrun),
      expand: cdktf.stringToTerraform(this._expand),
      ext_id: cdktf.stringToTerraform(this._extId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      config: cdktf.listMapper(clusterV2ConfigAToTerraform, true)(this._config.internalValue),
      network: cdktf.listMapper(clusterV2NetworkToTerraform, true)(this._network.internalValue),
      nodes: cdktf.listMapper(clusterV2NodesToTerraform, true)(this._nodes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._categories),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      container_name: {
        value: cdktf.stringToHclTerraform(this._containerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dryrun: {
        value: cdktf.booleanToHclTerraform(this._dryrun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expand: {
        value: cdktf.stringToHclTerraform(this._expand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_id: {
        value: cdktf.stringToHclTerraform(this._extId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: cdktf.listMapperHcl(clusterV2ConfigAToHclTerraform, true)(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterV2ConfigAList",
      },
      network: {
        value: cdktf.listMapperHcl(clusterV2NetworkToHclTerraform, true)(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterV2NetworkList",
      },
      nodes: {
        value: cdktf.listMapperHcl(clusterV2NodesToHclTerraform, true)(this._nodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterV2NodesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
